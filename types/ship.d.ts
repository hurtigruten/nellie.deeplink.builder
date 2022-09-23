declare namespace Contentful.Ship {
  declare type Document = import("@contentful/rich-text-types").Document;

  export type TImage = {
    width: number;
    height: number;
  };

  export type TDetails = {
    size: number;
    image: TImage;
  };

  export type TFile = {
    url: string;
    details: TDetails;
    fileName: string;
    contentType: string;
  };

  export interface TMedia {
    title: string;
    file: TFile;
  }

  export type TPlan = {
    title: string;
    file: TFile;
  };

  export type TDeckPlan = {
    deck: number;
    plan: TPlan;
  };

  export type TCategory = {
    code: string;
    description: Document;
    name: string;
  };

  export type TBed = {
    code: string;
    name: string;
  };

  export type TWindow = {
    code: string;
    name: string;
  };

  export type TRawCabinGrade = {
    code: string;
    name: string;
    shortDescription: Document;
    longDescription: Document;
    extraInformation: Document;
    sizeFrom: number;
    sizeTo: number;
    features: string[];
    bed: Entry<TBed>;
    window: Entry<TWindow>;
    isSpecial: boolean;
    media: Entry<TMedia>[];
  };

  export type TCabinGrade = {
    code: string;
    name: string;
    shortDescription: Document;
    longDescription: Document;
    extraInformation: Document;
    sizeFrom: number;
    sizeTo: number;
    features: string[];
    bed: TBed;
    window: TWindow;
    isSpecial: boolean;
    media: TMedia[];
  };

  export type TRawCabinCategory = {
    category: Entry<TCategory>;
    cabinGrades: Entry<TRawCabinGrade>[];
  };

  export type TCabinCategory = {
    category: TCategory;
    cabinGrades: TCabinGrade[];
  };

  type TContentSection = {
    category: string;
    description: Document;
    images: TShipImage[];
    name: string;
    sysId: string;
    infoBox?: Document;
  };

  export type TShipImage = {
    title: string;
    description: string;
    file: TFile;
    sysId?: string;
  };

  type TShipInfo = {
    category: string[];
    name: string;
    sysId: string;
    value: string;
  };

  type TVideo = {
    internalName: string;
    source: string;
    sysId: string;
    videoId: string;
  };

  type TLink = {
    internalName?: string;
    sysId: string;
    url?: string;
  };

  export type TRootObject = {
    aboutShipBlock?: Document;
    premiumComfortBlock?: Document;
    shipFeaturesBlock?: Document;
    name: string;
    images: TShipImage[];
    deckPlans: TDeckPlan[];
    cabinCategories: TCabinCategory[];
    code: string;
    slug: string;
    contentSection: TContentSection[];
    facilities: string[];
    heroBanner: THeroBanner;
    product: string;
    shipInfo: TShipInfo[];
    shipWalkthroughVideo?: TVideo;
    link?: TLink[];
    sysId?: string;
  };

  export type TRawRootObject = {
    // aboutShipBlock?: Document;
    // premiumComfortBlock?: Document;
    // shipFeaturesBlock?: Document;
    name: string;
    // images: TShipImage[];
    // deckPlans: TDeckPlan[];
    cabinCategories: Entry<TRawCabinCategory>[];
    code: string;
    // slug: string;
    // contentSection: TContentSection[];
    // facilities: string[];
    // heroBanner: THeroBanner;
    // product: string;
    // shipInfo: TShipInfo[];
    // shipWalkthroughVideo?: TVideo;
    // link?: TLink[];
    // sysId?: string;
  };
}
