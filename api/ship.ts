import { createClient } from "contentful";
import { mapLocaleToContenfulFormat } from "../util/mappers";

const mapCabinGrade = (
  cg: Contentful.Entry<Contentful.Ship.TRawCabinGrade>
): Contentful.Ship.TCabinGrade => {
  return {
    ...cg.fields,
    media: cg.fields.media?.map((media) => media?.fields) ?? [],
    bed: cg.fields.bed?.fields,
    window: cg.fields.window?.fields,
  };
};

const mapCabinCategory = (
  cc: Contentful.Entry<Contentful.Ship.TRawCabinCategory>
): Contentful.Ship.TCabinCategory => ({
  category: cc.fields.category.fields,
  cabinGrades: cc.fields.cabinGrades.map(mapCabinGrade),
});

export const getCabinCategoriesByShip = async (
  locale: TLocale
): Promise<
  Pick<Contentful.Ship.TRootObject, "code" | "name" | "cabinCategories">[]
> => {
  const client = createClient({
    space: process.env.CONTENTFUL_GLOBAL_SPACE_ID ?? "",
    accessToken: process.env.CONTENTFUL_GLOBAL_ACCESS_TOKEN ?? "",
    host: "cdn.contentful.com",
    environment: process.env.CONTENTFUL_GLOBAL_ENVIRONMENT,
  });

  const rawShips = await client.getEntries<Contentful.Ship.TRawRootObject>({
    content_type: "ship",
    select: "fields.cabinCategories,fields.name,fields.code",
    locale: mapLocaleToContenfulFormat(locale),
    include: 3,
  });

  return rawShips.items.map((ship) => ({
    name: ship.fields.name,
    code: ship.fields.code,
    cabinCategories: ship.fields.cabinCategories.map(mapCabinCategory),
  }));
};
