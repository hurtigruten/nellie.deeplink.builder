import createDateAsUTC from "./createDateAsUTC";
import getDateDifferenceInDays from "./getDateDifferenceInDays";

export const toDeparture = (voyage: TAvailabilityResult): TDeparture => {
  const departureInfo: TDeparture = {
    date: createDateAsUTC(voyage.departureDate),
    quoteId: voyage.quoteId,
    voyageId: voyage.voyageId,
    price: voyage.price,
    strikeThroughPrice:
      voyage.priceDetail.strikeThroughPrice === voyage.priceDetail.price
        ? undefined
        : voyage.priceDetail.strikeThroughPrice,
    packageCode: voyage.packageCode,
    shipCode: voyage.shipCode,
    shipName: voyage.shipName,
    duration: getDateDifferenceInDays(
      createDateAsUTC(voyage.departureDate),
      createDateAsUTC(voyage.arrivalDate)
    ),
    promotionCodesApplied: voyage.priceDetail.promotions,
    // offersApplied: voyage.offers,
  };

  return departureInfo;
};
