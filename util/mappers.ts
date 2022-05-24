class InvalidLocaleError extends Error {
  constructor(val: string) {
    super(`Invalid locale: ${val}`);
  }
}

export const mapLocaleToCurrency = (locale: TLocale): TCurrency => {
  switch (locale) {
    case "en-gb":
      return "GBP";
    case "en-au":
      return "AUD";
    case "en-us":
      return "USD";
    default:
      throw new InvalidLocaleError(locale);
  }
};

export const mapLocaleToMarket = (locale: TLocale): TMarket => {
  switch (locale) {
    case "en-gb":
    case "en-au":
      return "UK";
    case "en-us":
      return "US";
    default:
      throw new InvalidLocaleError(locale);
  }
};

export const mapContentfulLanguageToMarketTag = (
  locale: TContentfulLanguage
): TMarketTag => {
  switch (locale) {
    case "en-AU":
      return "marketAu";
    case "en-GB":
      return "marketUk";
    case "en-US":
      return "marketUs";
    default:
      throw new InvalidLocaleError(locale);
  }
};

export const mapLocaleToMarketTag = (locale: TLocale): TMarketTag => {
  switch (locale) {
    case "en-gb":
      return "marketUk";
    case "en-au":
      return "marketAu";
    case "en-us":
      return "marketUs";
    default:
      throw new InvalidLocaleError(locale);
  }
};

export const mapContentfulLanguageToLocale = (
  contentfulLanguage: TLanguageLocaleCode
): TLocale => {
  switch (contentfulLanguage) {
    case "en-GB":
      return "en-gb";
    case "en-AU":
      return "en-au";
    case "en-US":
      return "en-us";
    default:
      ((_: never) => _)(contentfulLanguage);
  }
  return "en-au";
};

export const mapLocaleToContenfulFormat = (
  locale: TLocale
): TLanguageLocaleCode => {
  switch (locale) {
    case "en-gb":
      return "en-GB";
    case "en-au":
      return "en-AU";
    case "en-us":
      return "en-US";
    default:
      throw new InvalidLocaleError(locale);
  }
};

export const mapLocaleToTwoLetterCountryCode = (
  locale: TLocale
): TCountryCode => {
  switch (locale) {
    case "en-gb":
      return "GB";
    case "en-au":
      return "AU";
    case "en-us":
      return "US";
    default:
      throw new InvalidLocaleError(locale);
  }
};

export const mapLocaleToTwoLetterTrackingCountryCode = (
  locale: TLocale
): TTrackingCountryCode => {
  switch (locale) {
    case "en-gb":
      return "uk";
    case "en-au":
      return "au";
    case "en-us":
      return "us";
    default:
      throw new InvalidLocaleError(locale);
  }
};

export const mapLocaleToTwoLetterLanguageCode = (
  locale: TLocale
): TLanguageCode => {
  switch (locale) {
    case "en-gb":
    case "en-au":
    case "en-us":
      return "en";
    default:
      throw new InvalidLocaleError(locale);
  }
};

export const mapCurrencyAndMarketToLocale = (
  currency: TCurrency,
  market: TMarket
): TLocale => {
  switch (market) {
    case "UK":
      switch (currency) {
        case "GBP":
          return "en-gb";
        case "AUD":
          return "en-au";
        default:
          throw new InvalidLocaleError(market);
      }
    case "US":
      switch (currency) {
        case "USD":
          return "en-us";
        default:
          throw new InvalidLocaleError(market);
      }
    default:
      throw new InvalidLocaleError(currency);
  }
};
