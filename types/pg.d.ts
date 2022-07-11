declare namespace PG {
  export type TAvailableInventory = {
    type: string;
    occupancy: number;
  };

  export type TAvailabilityResult = {
    code?: string; // OTHER_AVAILABLE or AVAILABLE
    message: string;
    availableInventory: TAvailableInventory[];
  };

  export type TPriceDetail = {
    price: number;
    strikeThroughPrice: number;
    promotions: string[];
  };

  export type TGenericCategoryPrice = {
    genericCabinCategory: string;
    price: number;
    isAvailable: boolean;
    priceDetail: TPriceDetail;
  };

  export type TPackageVoyageOption = {
    availabilityResult: TAvailabilityResult;
    shipCode: string;
    shipName: string;
    voyageId: string;
    voyageType: string;
    price: number;
    categoryPrices: TGenericCategoryPrice[];
    priceDetail: TPriceDetail;
  };

  export type TPackageDate = {
    date: string;
    message: string;
    availabilityResult: TAvailabilityResult;
    shipCode: string;
    shipName: string;
    packageVoyageOptions: TPackageVoyageOption[];
  };

  export type TPackageSearchResult = {
    quoteId: string;
    packageCode: string;
    calendar: TPackageDate[];
    resultMetrics: {
      cacheMode: string;
      apiCacheDateTime: string;
      secondsSpentInPolar: string;
      secondsSpentInSeaware: string;
    };
    currency: string;
  };

  export type TPackagePrice = {
    genericCabinCategory: string;
    price: number;
    isAvailable: boolean;
    priceDetail: TPriceDetail;
  };

  export type TPackageVoyage = {
    quoteId: string;
    departureDate: string;
    arrivalDate: string | null;
    shipCode: string;
    shipName: string;
    voyageId: string;
    packageCode: string;
    prices: TPackagePrice[];
    priceDetail: TPriceDetail;
    price: number;
  };

  export type TPackageItinerary = {
    startDay: number;
    endDay: number;
    codeDetails: unknown;
    flightDetails: unknown;
    hotelDetails: {
      defaultRoomType: unknown;
      defaultBoardBasis: string;
    };
    ferryDetails: unknown;
    railDetails: unknown;
    transferDetails: unknown;
    voyageDetails: unknown;
    description: [
      {
        culture: string;
        description: string;
      }
    ];
    type: string;
    supplier: string;
  };

  export type TDateRange = {
    fromDate: string;
    toDate: string;
  };

  export type TPackage = {
    polarGlobalId: number;
    code: string;
    description: unknown[];
    supplier: string;
    markets: string[];
    seawareAllotment: null;
    packagePricingBasis: string;
    bookingStartDate: string;
    bookingEndDate: string;
    packageType: string;
    startLocation: string;
    endLocation: string;
    destination: string;
    cancellationStructure: null;
    availability: {
      ships: unknown[];
      dateRange: TDateRange;
      dates: string[];
    };
    mandatoryArrivalPackage: null;
    packageItinerary: TPackageItinerary[];
    mandatoryDeparturePackage: null;
  };
}

declare namespace PG.Request.Package {
  export type TAgeCategory = "ADULT" | "CHILD" | "INFANT";

  export type TGuestType = "REGULAR";

  export type TCabinPassenger = {
    ageCategory: TAgeCategory;
    guestType: TGuestType;
  };

  export type TCabin = {
    passengers: TCabinPassenger[];
  };

  export type TRootObject = {
    packageCode: string;
    availabilityDates: {
      dateRange: {
        fromDate: string;
        toDate: string;
      };
    };
    forceCacheRefresh: boolean;
    cabins: TCabin[];
    marketId: string;
    currency: string;
    bookingSource: string;
    secondaryBookingSource: "NELLIE";
    closedPromotionCode?: string;
  };
}
