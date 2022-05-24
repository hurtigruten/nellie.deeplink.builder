import NodeCache from "node-cache";

import { FetchOptions, fetchWithErrorHandling, pgFetch } from "./http";

const fetchCache = new NodeCache({ stdTTL: 3600 });

export const cachedPgFetch = async <T>(
  key: string,
  path: string,
  options?: FetchOptions
) => {
  const cachedResponse = fetchCache.get(key);

  if (cachedResponse) {
    return cachedResponse as T;
  }

  const data = await pgFetch<T>(path, options);
  fetchCache.set(key, data);
  return data;
};

export const cachedFetch = async <T>(
  key: string,
  url: string,
  options?: FetchOptions
): Promise<T> => {
  const cachedResponse = fetchCache.get(key);

  if (cachedResponse) {
    return cachedResponse as T;
  }

  const data = await fetchWithErrorHandling<T>(url, undefined, options);
  fetchCache.set(key, data);
  return data;
};
