export class ArgumentError extends Error {
  public argumentName: string;

  constructor({
    message,
    argumentName,
  }: {
    message?: string;
    argumentName: string;
  }) {
    super(message);
    this.argumentName = argumentName;
  }
}

export class NetworkError extends Error {}

export class ClientError extends Error {
  public statusCode: number;

  constructor({
    statusCode,
    message,
  }: {
    statusCode: number;
    message: string;
  }) {
    super(message);
    this.statusCode = statusCode;
  }
}
export class ServerError extends Error {
  public statusCode: number;

  constructor({
    statusCode,
    message,
  }: {
    statusCode: number;
    message: string;
  }) {
    super(message);
    this.statusCode = statusCode;
  }
}

export class NotFoundError extends Error {}

export class ParseError extends Error {}

export type FetchOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: BodyInit; // TODO: Should put optional params into options object
  userId?: string;
  ignoreReturnValue?: boolean;
};

async function handleErrors(res: Response) {
  if (res.status >= 400 && res.status <= 499) {
    return res.text().then((text) => {
      throw new ClientError({
        statusCode: res.status,
        message: text,
      });
    });
  }
  if (res.status >= 500 && res.status <= 599) {
    return res.text().then((text) => {
      throw new ServerError({
        statusCode: res.status,
        message: text,
      });
    });
  }
  if (res.status < 200 || res.status > 299) {
    throw new Error(
      `Unexpected status response: ${res.statusText} (${res.status})`
    );
  }
  return Promise.resolve();
}

export const postWithReturnStatus =
  <T>(
    body: any,
    headers: Record<string, string> = {
      "content-type": "application/json;charset=UTF-8",
    }
  ) =>
  async (url: string): Promise<{ data?: T; statusCode: number }> => {
    const resp = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });
    if (resp.status >= 500) {
      throw new Error(`${resp.status} ${resp.statusText}`);
    }
    const data = await resp.text();
    try {
      return { data: JSON.parse(data), statusCode: resp.status };
    } catch (_) {
      return { statusCode: resp.status };
    }
  };

export const post =
  <T>(
    body: any,
    headers: Record<string, string> = {
      "content-type": "application/json;charset=UTF-8",
    }
  ) =>
  (url: string) =>
    fetch(url, {
      method: "POST",
      headers,
      body: typeof body === "string" ? body : JSON.stringify(body),
    })
      .then((resp) => {
        if (resp.status.toString()[0] !== "2") {
          throw new Error(`${resp.status} ${resp.statusText}`);
        }
        return resp;
      })
      .then((resp) => resp.json() as Promise<T>);

export const get =
  <T>(signal?: AbortSignal) =>
  (url: string) =>
    fetch(`${url}`, { signal })
      .then((resp) => {
        if (resp.status.toString()[0] !== "2") {
          throw new Error(`${resp.status} ${resp.statusText}`);
        }
        return resp;
      })
      .then((resp) => resp.json() as Promise<T>);

export const fetchWithErrorHandling = async <T>(
  url: string,
  headers: HeadersInit = {
    "content-type": "application/json;charset=UTF-8",
  },
  options?: FetchOptions
): Promise<T> => {
  let res: Response;
  try {
    res = await fetch(url, {
      headers,
      body: options?.body,
      method: options?.method ?? "GET",
    });
  } catch (error) {
    throw new NetworkError((error as Error).message);
  }

  await handleErrors(res);

  if (options?.ignoreReturnValue) return Promise.resolve({} as T);

  try {
    return (await res.json()) as T;
  } catch (error) {
    throw new ParseError();
  }
};

export const pgFetch = async <T>(
  path: string,
  options?: FetchOptions
): Promise<T> => {
  let headers: HeadersInit = {
    "content-type": "application/json;charset=UTF-8",
  };
  if (options?.userId) {
    headers = { ...headers, "x-nellie-id": options.userId };
  }

  const resp = await fetchWithErrorHandling(
    `${process.env.BOOKING_DOMAIN_URL || ""}/Api${path}`,
    headers,
    options
  );
  return resp as T;
};
