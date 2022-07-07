declare global {
  type TLocale = "en-au" | "en-gb" | "en-us";
  type TCurrency = "AUD" | "GBP" | "USD";
  type TMarket = "UK" | "US";
  type TMarketTag = "marketAu" | "marketUk" | "marketUs";
  type TCountryCode = "AU" | "GB" | "US";
  type TTrackingCountryCode = "au" | "uk" | "us";
  type TLanguageCode = "en";
  type TContentfulLanguage = "en-AU" | "en-GB" | "en-US";
  type TLanguageLocaleCode = "en-AU" | "en-GB" | "en-US";

  type TAvailabilityResult = {
    quoteId: string;
    departureDate: string;
    arrivalDate: string | null;
    shipCode: string;
    shipName: string;
    voyageId: string;
    packageCode: string;
    prices: TPackagePrice[];
    priceDetail: PG.TPriceDetail;
    price: number;
    offers: BookingOffer[];
  };

  type TCabinPassengerCount = {
    adults: number;
    children: number;
    infants: number;
  };

  type TCabinChooserProps = {
    cabinNumber: number;
    onChange?: (cpc: TCabinPassengerCount) => void;
  };

  interface IButtonProps
    extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> {
    buttonColor?: "gray" | "black" | "white";
    size?: TButtonSize;
    mode?: ButtonModes;
    isDisabled?: boolean;
    icon?: TIconType;
    iconFill?: string;
    iconPosition?: "left" | "right";
    iconSize?: IconSizeType;
    fill?: string;
    href?: string;
    rel?: string;
    shallow?: boolean;
    testId?: string;
    isLoading?: boolean;
  }

  export type TResponseWithErrorState<T> = {
    data?: T;
    expired: boolean;
    error: boolean;
    errorMessage?: string;
  };

  type TVoidFunc = () => void;

  type TButtonSize = "large" | "small" | "full-icon";

  type TDeparture = {
    date: Date;
    quoteId: string;
    price: number;
    strikeThroughPrice?: number;
    voyageId: string;
    packageCode: string;
    shipCode: string;
    shipName: string;
    duration: number;
    promotionCodesApplied: string[];
    // offersApplied: BookingOffer[];
  };

  type TFetchStatus = {
    status: "NOTSTARTED" | "SUCCESS" | "LOADING" | "ERROR";
    message?: string;
    payload?: any;
  };

  type TIconType = (props: SVGAttributes<SVGElement>) => JSX.Element;

  type IconSizeType =
    | "fw"
    | "xxs"
    | "xs"
    | "sm"
    | "1x"
    | "lg"
    | "xl"
    | "2x"
    | "2.5x"
    | "3x"
    | "4x"
    | "5x"
    | "6x"
    | "7x"
    | "8x"
    | "9x"
    | "10x"
    | "default";
}

export {};
