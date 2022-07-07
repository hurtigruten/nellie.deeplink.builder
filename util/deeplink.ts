export type DeeplinkSearchCabin = [number, number, number];

export interface DeeplinkSearch {
  voyageId: string;
  cabins: DeeplinkSearchCabin[];
  promoCode: string | null;
  departure: string | null;
}

export interface DeepLinkCabin {
  cabinGradeCode: string;
  cabinNumber: number | null;
}

interface DeeplinkCabinCompressed {
  c: string;
  n: number | null;
}

export interface Deeplink {
  version: "1";
  locale: TLocale | null;
  userId?: string | null;
  search: DeeplinkSearch | null;
  cabins?: DeepLinkCabin[];
  total: number | null;
}

interface DeeplinkSearchCompressed {
  v: string;
  c: [number, number, number][];
  p: string | null;
  d: string | null;
}

interface DeeplinkCompressed {
  v: "1";
  l: TLocale | null;
  u?: string | null;
  s: DeeplinkSearchCompressed | null;
  c?: DeeplinkCabinCompressed[];
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

const compressCabin = (cabin: DeepLinkCabin): DeeplinkCabinCompressed => ({
  c: cabin.cabinGradeCode,
  n: cabin.cabinNumber,
});

const decompressCabin = (cabin: DeeplinkCabinCompressed): DeepLinkCabin => ({
  cabinGradeCode: cabin.c,
  cabinNumber: cabin.n,
});

const compressDeeplink = (deeplink: Deeplink): DeeplinkCompressed => ({
  v: deeplink.version,
  l: deeplink.locale,
  u: deeplink.userId,
  s: deeplink.search && compressSearch(deeplink.search),
  c: deeplink.cabins && deeplink.cabins.map((c) => c && compressCabin(c)),
  t: deeplink.total,
});

const decompressDeeplink = (deeplink: DeeplinkCompressed): Deeplink => ({
  version: deeplink.v,
  locale: deeplink.l,
  userId: deeplink.u,
  search: deeplink.s && decompressSearch(deeplink.s),
  cabins: deeplink.c && deeplink.c.map((c) => c && decompressCabin(c)),
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
