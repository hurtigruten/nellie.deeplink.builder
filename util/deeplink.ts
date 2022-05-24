interface DeeplinkSearchCompressed {
  v: string;
  c: [number, number, number][];
  p: string | null;
  d: string | null;
}

interface DeeplinkCompressed {
  v: "1";
  l: string;
  u?: string | null;
  s: DeeplinkSearchCompressed | null;
  t: number | null;
}

const compressSearch = (search: DeeplinkSearch): DeeplinkSearchCompressed => ({
  v: search.voyageId,
  c: search.cabins,
  p: search.promoCode,
  d: search.departure,
});

const decompressSearch = (
  search: DeeplinkSearchCompressed
): DeeplinkSearch => ({
  voyageId: search.v,
  cabins: search.c,
  promoCode: search.p,
  departure: search.d,
});

const compressDeeplink = (deeplink: Deeplink): DeeplinkCompressed => ({
  v: deeplink.version,
  l: deeplink.locale,
  u: deeplink.userId,
  s: deeplink.search ? compressSearch(deeplink.search) : null,
  t: deeplink.total,
});

const decompressDeeplink = (deeplink: DeeplinkCompressed): Deeplink => ({
  version: deeplink.v,
  locale: deeplink.l,
  userId: deeplink.u,
  search: deeplink.s ? decompressSearch(deeplink.s) : null,
  total: deeplink.t,
});

export const encodeDeeplink = (deeplink: Deeplink): string => {
  const compressed = compressDeeplink(deeplink);
  const json = JSON.stringify(compressed);
  const buffer = Buffer.from(json, "utf8");
  return buffer.toString("base64url");
};

export const decodeDeeplink = (str: string): Deeplink => {
  const json = Buffer.from(str, "base64url").toString("utf8");
  const compressed = JSON.parse(json);
  return decompressDeeplink(compressed);
};
