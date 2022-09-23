import { cachedPgFetch } from "../util/cachedFetch";
import { pgFetch, post } from "../util/http";
import { addDays, subDays } from "date-fns";

const { BOOKING_DOMAIN_URL } = process.env;

const filterPackagesByDate = (
  packages: PG.TPackage[],
  date: Date = new Date()
) =>
  packages.filter(({ availability: { dates } }) =>
    dates.some((packageDate) => new Date(packageDate) >= date)
  );

const getPackageList = async (packageCodes: string[]) => {
  const packageList = await post<PG.TPackage[]>(packageCodes)(
    `${BOOKING_DOMAIN_URL || ""}/api/ReferenceData/PackageList`
  );

  return packageList;
};

const getPackageTask = (
  marketId: TMarket,
  currency: TCurrency,
  { code, availability }: PG.TPackage,
  cabins: TCabinPassengerCount[] | null = null,
  promotionCode?: string,
  useCache: boolean = false
) => {
  const sortedDates = availability.dates.sort();

  const fromDate = subDays(new Date(sortedDates.at(0) ?? ""), 1).toISOString();
  const toDate = addDays(new Date(sortedDates.at(-1) ?? ""), 1).toISOString();

  const cabinPassengers: PG.Request.Package.TCabin[] | null =
    cabins?.map((cabin) => {
      const adults = Array(cabin.adults).fill({
        ageCategory: "ADULT",
        guestType: "REGULAR",
      });

      const children = Array(cabin.children).fill({
        ageCategory: "CHILD",
        guestType: "REGULAR",
      });

      const infants = Array(cabin.infants).fill({
        ageCategory: "INFANT",
        guestType: "REGULAR",
      });

      return {
        passengers: [...adults, ...children, ...infants].flat(),
      };
    }) ?? null;

  const requestBody: PG.Request.Package.TRootObject = {
    packageCode: code,
    availabilityDates: {
      dateRange: {
        fromDate,
        toDate,
      },
    },
    forceCacheRefresh: false,
    cabins: cabinPassengers ?? [
      {
        passengers: [
          { ageCategory: "ADULT", guestType: "REGULAR" },
          { ageCategory: "ADULT", guestType: "REGULAR" },
        ],
      },
    ],
    marketId,
    currency,
    bookingSource: "B2C",
    secondaryBookingSource: "NELLIE",
    ...(promotionCode ? { closedPromotionCode: promotionCode } : {}),
  };

  if (useCache) {
    const firstLetterOfEachAgeCategory = cabinPassengers
      ? cabinPassengers.reduce(
          (accCabin, cabin) =>
            `${accCabin}${cabin.passengers.reduce(
              (accPassenger, passenger) =>
                `${accPassenger}${passenger.ageCategory.substring(0, 1)}`,
              ""
            )}`,
          ""
        )
      : "AA";

    const key = `getPackageTask:${code}:${
      promotionCode || ""
    }:${firstLetterOfEachAgeCategory}`;

    return cachedPgFetch<PG.TPackageSearchResult>(key, "/Search/Package", {
      method: "POST",
      body: JSON.stringify(requestBody),
    });
  }

  return pgFetch<PG.TPackageSearchResult>("/Search/Package", {
    method: "POST",
    body: JSON.stringify(requestBody),
  });
};

const getArrivalDate = (
  itineraries: PG.TPackageItinerary[],
  startDate: string
) => {
  if (!startDate || !itineraries?.[0]) return null;

  const { endDay } = itineraries[itineraries.length - 1];

  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + endDay - 1);

  return endDate.toISOString();
};

const mapPackageVoyages = (
  { code, packageItinerary }: PG.TPackage,
  { quoteId, calendar }: PG.TPackageSearchResult
): PG.TPackageVoyage[] => {
  const vv = calendar.filter(({ packageVoyageOptions }) =>
    packageVoyageOptions?.some(
      ({ availabilityResult }) => availabilityResult?.code === "AVAILABLE"
    )
  );

  const voyages = calendar
    .filter(({ packageVoyageOptions }) =>
      packageVoyageOptions?.some(
        ({ availabilityResult }) => availabilityResult?.code === "AVAILABLE"
      )
    )
    .map(
      ({
        date,
        packageVoyageOptions: {
          0: {
            voyageId,
            price,
            categoryPrices,
            priceDetail,
            shipCode,
            shipName,
          },
        },
      }) => ({
        quoteId,
        shipCode,
        shipName,
        departureDate: date,
        arrivalDate: getArrivalDate(packageItinerary, date),
        voyageId,
        packageCode: code,
        price,
        prices: categoryPrices,
        priceDetail,
      })
    );

  return voyages;
};

export const getAvailability = async ({
  marketId,
  currency,
  packageCodes,
  cabins,
  promotionCode,
  useCache = false,
}: {
  marketId: TMarket;
  currency: TCurrency;
  packageCodes: string[];
  cabins?: TCabinPassengerCount[];
  promotionCode?: string;
  useCache: boolean;
}): Promise<PG.TPackageVoyage[]> => {
  const packageList = await getPackageList(packageCodes).then(
    filterPackagesByDate
  );

  const packageTasks = packageList.map((packageCode) =>
    getPackageTask(
      marketId,
      currency,
      packageCode,
      cabins,
      promotionCode,
      useCache
    )
  );

  const packages = await Promise.all(packageTasks);

  const packageVoyages = packageList.flatMap((packageSearch, index) =>
    mapPackageVoyages(packageSearch, packages[index])
  );

  return packageVoyages;
};
