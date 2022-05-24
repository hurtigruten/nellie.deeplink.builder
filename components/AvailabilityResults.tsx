import {
  Dispatch,
  forwardRef,
  Ref,
  SetStateAction,
  useEffect,
  useRef,
} from "react";
import clsx from "clsx";

import Notification from "./Notification";
import dateToString from "../util/dateToString";
import { notEmpty } from "../util/notEmpty";
import formatPrice from "../util/formatPrice";

const AvailabilityResults = forwardRef(
  (
    {
      fetchStatus,
      selectedDeparture,
      setSelectedDeparture,
      departureDates,
      currency,
      locale,
    }: {
      fetchStatus: TFetchStatus;
      selectedDeparture: TDeparture | null | undefined;
      setSelectedDeparture: Dispatch<
        SetStateAction<TDeparture | null | undefined>
      >;
      locale: TLocale;
      currency: TCurrency;
      departureDates?: TDeparture[];
    },
    ref: Ref<HTMLDivElement>
  ) => {
    const { status } = fetchStatus;

    const resultsRef = useRef<HTMLDivElement>(null);
    // useEffect(() => {
    //   if (status === "SUCCESS") {
    //     resultsRef.current?.scrollIntoView({
    //       behavior: "smooth",
    //     });
    //   }
    // }, [status]);

    if (status === "NOTSTARTED") {
      return null;
    }

    if (
      status === "ERROR" ||
      (status === "SUCCESS" && departureDates?.length === 0)
    ) {
      return (
        <Notification mode="error" title="No availability" className="m-6">
          No availability, please try another cabin/passenger combination.
        </Notification>
      );
    }

    // SUCCESS
    if (departureDates && departureDates.length > 0) {
      const departuresGroupedByYear: Record<number, TDeparture[]> =
        departureDates.reduce((prev, current) => {
          const year = current.date.getFullYear();
          return { ...prev, [year]: [...(prev[year] || []), current] };
        }, {} as Record<number, TDeparture[]>) || {};

      return (
        <div className="my-5" ref={ref}>
          {Object.entries(departuresGroupedByYear).map(([year, departures]) => (
            <div className="mb-4" key={year}>
              <h3 className="px-6 mb-5 h6-text">{year}</h3>
              <div
                ref={resultsRef}
                className="flex gap-5 pb-4 overflow-x-auto overflow-y-hidden tablet:overflow-visible tablet:px-6 tablet:grid tablet:grid-flow-row tablet:grid-cols-3 tablet:auto-cols-fr"
              >
                {departures.map((departure) => {
                  const hasDiscount =
                    departure.strikeThroughPrice &&
                    departure.strikeThroughPrice > departure.price;

                  return (
                    <button
                      onClick={() => setSelectedDeparture(departure)}
                      key={departure.quoteId + departure.voyageId}
                      type="button"
                      className={clsx(
                        "flex flex-col align-baseline min-w-[170px] rounded-5xl min-h-[150px] drop-shadow-card-shadow hover:drop-shadow-card-hover w-auto py-4 px-5 ui-text first:ml-6 last:mr-6 tablet:first:ml-0 tablet:last:mr-0 relative text-left",
                        {
                          "bg-off-black text-white":
                            departure.voyageId === selectedDeparture?.voyageId,
                          "bg-warm-gray-1":
                            departure.voyageId !== selectedDeparture?.voyageId,
                        }
                      )}
                    >
                      {/* {showAvailabilityPromotions &&
                        departure.offersApplied?.length > 0 &&
                        hasDiscount && (
                          <IconBullet
                            icon={PercentLine}
                            backgroundColorClassName="bg-lime-green"
                            iconColorClassName="text-black"
                            iconSize="1x"
                            className="absolute w-6 h-6 top-3 right-3"
                          />
                        )} */}
                      <h4 className="mb-5 uppercase ui-text">
                        {dateToString(
                          departure.date,
                          locale,
                          false,
                          true,
                          true,
                          false,
                          true
                        )}
                      </h4>

                      {hasDiscount &&
                        notEmpty(departure.strikeThroughPrice) && (
                          <span className="line-through caption">
                            {formatPrice(
                              departure.strikeThroughPrice,
                              currency
                            )}
                          </span>
                        )}
                      <span className="mb-2 font-bold h6-text">
                        {departure.price > 0
                          ? formatPrice(departure.price, currency)
                          : "Pricing available on next step"}
                      </span>
                      {/* {showAvailabilityPromotions &&
                        departure.offersApplied.map((offer) => (
                          <Tag
                            style="offer"
                            className="mb-2"
                            value={offer.title}
                            key={offer.id}
                            size="small"
                          />
                        ))} */}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      );
    }

    return null;
  }
);

AvailabilityResults.displayName = "AvailabilityResults";

export default AvailabilityResults;
