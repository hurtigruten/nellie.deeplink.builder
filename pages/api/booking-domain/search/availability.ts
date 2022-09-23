import { NextApiRequest, NextApiResponse } from "next";
import { getAvailability } from "../../../../api/voyage";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json("Unsupported method");
    return;
  }

  const {
    voyages,
    voyageSysId,
    cabins,
    market,
    currency,
    promotionCode,
  }: {
    voyages: string[];
    voyageSysId: string;
    cabins: TCabinPassengerCount[];
    market: TMarket;
    currency: TCurrency;
    promotionCode?: string;
  } = req.body;

  if (!voyages) {
    res
      .status(400)
      .json({ error: 'Expected property "packageCodes" not found in body.' });
    return;
  }

  if (!cabins) {
    res
      .status(400)
      .json({ error: 'Expected property "cabins" not found in body.' });
    return;
  }

  try {
    const availableVoyages = await getAvailability({
      marketId: market,
      currency,
      packageCodes: voyages,
      cabins,
      promotionCode,
      useCache: false,
    });

    const availableVoyagesWithOfferInfoPromises = availableVoyages.map(
      async (v) => {
        // const offers = await getOffersForVoyage({
        //   voyageSysId,
        //   promotions: v.priceDetail.promotions,
        //   departureDate: createDateAsUTC(v.departureDate),
        //   locale: mapCurrencyAndMarketToLocale(currency, market),
        // });

        return {
          ...v,
          offers: [],
        };
      }
    );

    const availableVoyagesWithOfferInfo = await Promise.all(
      availableVoyagesWithOfferInfoPromises
    );
    res.status(200).json(availableVoyagesWithOfferInfo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
}
