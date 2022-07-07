import { createClient } from "contentful";

type ContentfulOverviewVoyage = {
  id: string;
  slug: string;
  name: string;
  bookingCode: string[];
  availability: {
    fields: {
      availabilityData: {
        voyages: [
          {
            date: string;
            price: number;
            packageCode: string;
            strikethroughPrice: number;
            cabinsWithPromotions: any[];
          }
        ];
        duration: 13;
      };
    };
  };
  highlightedImage: {
    fields: {
      image: {
        fields: {
          file: {
            url: string;
          };
          title: string;
        };
      };
    };
  };
};

export type OverviewVoyage = {
  id: string;
  slug: string;
  name: string;
  imageUrl: string;
  imageAlt: string;
  departures: string[];
  packageCodes: string[];
};

export type Availability = {};

const transformImage = (src: string) => {
  const parts = src.split("?");
  let out = "http:" + parts[0];
  out += "?q=75";
  out += "&w=600";
  out += "&h=600";

  return out;
};

export const getAllVoyages = async (locale: string) => {
  const client = createClient({
    space: process.env.CONTENTFUL_GLOBAL_SPACE_ID ?? "",
    accessToken: process.env.CONTENTFUL_GLOBAL_ACCESS_TOKEN ?? "",
    host: "cdn.contentful.com",
    environment: process.env.CONTENTFUL_GLOBAL_ENVIRONMENT,
  });

  const voyages = await client.getEntries<ContentfulOverviewVoyage>({
    content_type: "voyage",
    "fields.bookable": true,
    "fields.isPastOrCancelled[ne]": true,
    select:
      "sys.id,fields.slug,fields.name,fields.highlightedImage,fields.availability,fields.bookingCode",
    include: 2,
    locale,
    limit: 500,
  });

  return voyages.items.map((v) => ({
    id: v.sys.id,
    slug: v.fields.slug,
    name: v.fields.name,
    imageUrl: transformImage(
      v.fields.highlightedImage.fields.image.fields.file.url
    ),
    imageAlt: v.fields.highlightedImage.fields.image.fields.title,
    packageCodes: v.fields.bookingCode ?? [],
    departures:
      v.fields.availability.fields.availabilityData?.voyages.map(
        (v) => v.date
      ) ?? [],
  }));
};
