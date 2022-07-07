import { NextApiRequest, NextApiResponse } from "next";
import { getCabin } from "../../api/cabins";
import { getCabinCategoriesByShip } from "../../api/ship";
import { mapLocaleToContenfulFormat } from "../../util/mappers";
import pickFirst from "../../util/pickFirst";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(405).json("Unsupported method");
    return;
  }

  try {
    const { locale: locale_ = null } = req.query;

    const locale = pickFirst(locale_) as TLocale | null;

    if (!locale) {
      res.status(400).json({
        message: "locale must be specfied",
      });
      res.end();
      return;
    }

    // TODO: Support merging in minmax capacity from PG
    // const cabins = await getCabin(quoteId, voyageId);

    // if (cabins.expired || cabins.error || !cabins.data) {
    //   res.status(500).json({ message: cabins.errorMessage });
    //   res.end();
    //   return;
    // }

    const cabinCategoriesByShip = await getCabinCategoriesByShip(locale);

    res.status(200).json(cabinCategoriesByShip);
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal server error");
  }
}
