declare namespace PG.Response.Cabin {
  export interface TPassenger {
    passengerId: string;
    ageCategory: string;
    guestType: string;
    hasBerth?: boolean;
  }

  export interface TCabinsRequested {
    passengers: TPassenger[];
  }

  export interface TPartyMixDetails {
    cabinsRequested: TCabinsRequested[];
    deckspacesRequested: string[] | null;
  }

  export type TCabinGrade = {
    cabinGrade: string;
    minOccupancy: number;
    maxOccupancy: number;
    noAvailable: number;
    price: number;
    fareStructure: string | null;
    priceDetail: PG.Response.Shared.TPriceDetails;
  };

  export type TCabinCategory = {
    genericCabinCategory: PG.Response.Shared.TCabinCategoryCode;
    cabinGrades: TCabinGrade[];
    code?: string;
    title?: string;
    image?: string;
    fromPrice?: string;
  };

  export interface TRootObject {
    cabins: TCabinCategory[];
    deckspaces: any;
    shipCode: string;
    currency: TCurrency;
    partyMixDetails: TPartyMixDetails;
    departureDate: string;
    arrivalDate: string;
    closedPromotionCode: string | null;
  }
}
