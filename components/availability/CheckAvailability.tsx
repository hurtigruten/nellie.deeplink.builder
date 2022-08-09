import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import createDateAsUTC from "../../util/createDateAsUTC";
import { mapLocaleToCurrency, mapLocaleToMarket } from "../../util/mappers";
import { toDeparture } from "../../util/toDeparture";
import CabinChooser from "../inputs/CabinChooser";
import Checkbox from "../inputs/Checkbox";
import IncrementableInput from "../inputs/IncrementableInput";
import Label from "../inputs/Label";
import TextInput from "../inputs/TextInput";
import AvailabilityResults from "./AvailabilityResults";
import ConfirmDeparture from "./ConfirmDeparture";
import ConfirmGuests from "./ConfirmGuests";

type TFetchStatus = {
  status: "NOTSTARTED" | "SUCCESS" | "LOADING" | "ERROR";
  message?: string;
  payload?: any;
};

const MAX_NUMBER_OF_CABINS = 9;
const MOST_COMMON_PASSENGER_COMBINATION: TCabinPassengerCount = {
  adults: 2,
  children: 0,
  infants: 0,
};

const CheckAvailability = ({
  onSubmit,
  packageCodes,
  voyageId,
  locale,
}: {
  locale: TLocale;
  onSubmit: (departure: TDeparture, passengers: TCabinPassengerCount[]) => void;
  packageCodes: string[];
  voyageId: string;
}) => {
  const [fetchData, setFetchData] = useState(false);
  const cancellationRef = useRef<number>(Date.now());

  const cabinChooserContainerRef = useRef<HTMLDivElement>(null);
  const availabilityResultsRef = useRef<HTMLDivElement>(null);
  const [numberOfCabins, setNumberOfCabins] = useState(1);
  const [passengers, setPassengers] = useState<TCabinPassengerCount[]>([
    MOST_COMMON_PASSENGER_COMBINATION,
  ]);
  const [previousNumberOfPassengers, setPreviousNumberOfPassengers] =
    useState<number>(1);
  const [selectedDeparture, setSelectedDeparture] =
    useState<TDeparture | null>();
  const [departureDates, setDepartureDates] = useState<TDeparture[]>();
  const [showPromotionCodeField, setShowPromotionCodeField] = useState(false);
  const [promotionCode, setPromotionCode] = useState("");
  const [automaticPromotionCode, setAutomaticPromotionCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [status, setStatus] = useState<TFetchStatus>({
    status: "NOTSTARTED",
  });

  const normalizedPromotionCode = promotionCode.toUpperCase();

  const setCabinPassengers = (
    cabinIndex: number,
    passengerCount: TCabinPassengerCount
  ) => {
    setPassengers([
      ...passengers.slice(0, cabinIndex),
      passengerCount,
      ...passengers.slice(cabinIndex + 1),
    ]);
  };

  useEffect(() => {
    if (passengers.length > numberOfCabins) {
      setPassengers(passengers.slice(0, numberOfCabins));
    } else if (numberOfCabins > passengers.length) {
      setPassengers([...passengers, { adults: 1, children: 0, infants: 0 }]);
    }
  }, [numberOfCabins, passengers]);

  const getAvailability = useCallback(
    async (cabins: TCabinPassengerCount[], cancellationToken: number) => {
      setStatus({
        status: "LOADING",
        message: "Getting available expeditions",
      });
      setSelectedDeparture(null);
      const body: Record<string, unknown> = {
        voyages: packageCodes,
        voyageSysId: voyageId,
        cabins,
        market: mapLocaleToMarket(locale),
        currency: mapLocaleToCurrency(locale),
      };
      if (automaticPromotionCode) {
        body.promotionCode = automaticPromotionCode;
      } else if (showPromotionCodeField && promotionCode) {
        body.promotionCode = promotionCode;
      }
      try {
        const response = await fetch(
          "/api/booking-domain/search/availability/",
          {
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          }
        );
        const data = await response.json();

        if (cancellationRef.current === cancellationToken) {
          const voyagesWithAvailability = data as TAvailabilityResult[];
          const voyagesSortedByStartDate = voyagesWithAvailability.sort(
            (a, b) =>
              createDateAsUTC(a.departureDate).getTime() -
              createDateAsUTC(b.departureDate).getTime()
          );

          const departures = voyagesSortedByStartDate.map((x) =>
            toDeparture(x)
          );
          setDepartureDates(departures);

          setStatus({ status: "SUCCESS", message: undefined });
        }
      } catch (e) {
        console.error(e);
        if (cancellationRef.current === cancellationToken) {
          if (typeof e === "string") {
            setStatus({ status: "ERROR", message: e });
          } else {
            setStatus({ status: "ERROR", message: "Something went wrong" });
          }
        }
      }
    },
    [
      automaticPromotionCode,
      locale,
      packageCodes,
      promotionCode,
      showPromotionCodeField,
      voyageId,
    ]
  );

  const isAvailableDepartures = Boolean(
    status.status === "SUCCESS" && departureDates && departureDates.length > 0
  );

  useEffect(() => {
    if (passengers.length > 0) {
      setDepartureDates(undefined);
      setFetchData(false);
    }
  }, [passengers, showPromotionCodeField, promotionCode]);

  useEffect(() => {
    setPreviousNumberOfPassengers(passengers.length);
  }, [passengers.length, previousNumberOfPassengers, isAvailableDepartures]);

  const isPromoCodeApplied = useMemo(
    () =>
      departureDates?.some((d) =>
        d.promotionCodesApplied.includes(normalizedPromotionCode)
      ),
    [departureDates, normalizedPromotionCode]
  );

  useEffect(() => {
    if (fetchData) {
      const token = Date.now();
      cancellationRef.current = token;
      void getAvailability(passengers, token);
    } else {
      cancellationRef.current = Date.now();
      setStatus({ status: "NOTSTARTED" });
    }
  }, [fetchData, getAvailability, passengers]);

  const [isLoadingAutomaticOfferCode, setIsLoadingAutomaticOfferCode] =
    useState(true);

  // useEffect(() => {
  //   void (async () => {
  //     setIsLoadingAutomaticOfferCode(true);
  //     setAutomaticPromotionCode("");

  //     const res = await fetch(
  //       `/api/content/offers/voyageAutomaticPromoCode/?locale=${locale}&voyageId=${voyage.sysId}`
  //     );
  //     if (res.status === 200) {
  //       const { code } = await res.json();
  //       setAutomaticPromotionCode(code);
  //     }
  //     setIsLoadingAutomaticOfferCode(false);
  //   })();
  // }, []);

  return (
    <>
      <form
        data-testid="checkAvailabilityForm"
        className="flex flex-col w-full pb-6 text-black"
      >
        <h3 className="px-6 mb-4 tablet:block">Departure options</h3>
        <p className="px-6 mb-6 text-light-black tablet:block">
          Please select number of cabins and passengers to check departure dates
          and price
        </p>
        <p className="px-6 body-text-2">How many cabins do you want?</p>
        <div className="flex items-center gap-5 px-6 mt-4 mb-4">
          <IncrementableInput
            min={1}
            max={MAX_NUMBER_OF_CABINS}
            defaultValue={numberOfCabins}
            onChange={setNumberOfCabins}
          />
          <Label>Cabins</Label>
        </div>

        {passengers.length > 0 && (
          <div>
            <p className="px-6 my-3 body-text-2">How many passengers?</p>

            <div
              ref={cabinChooserContainerRef}
              className="flex gap-5 pb-4 overflow-x-auto overflow-y-auto tablet:overflow-visible tablet:flex-wrap tablet:px-6"
            >
              {passengers.map((passenger, index) => (
                <CabinChooser
                  locale={locale}
                  cabinNumber={index + 1}
                  key={index + 1}
                  values={passenger}
                  onChange={setCabinPassengers.bind(null, index)}
                />
              ))}
            </div>
            <div className="px-6 mt-5">
              <Checkbox
                label="Do you have a promotion code?"
                onChange={(e) => {
                  setShowPromotionCodeField(e.target.checked);
                }}
              />
              {showPromotionCodeField && !automaticPromotionCode && (
                <>
                  <Label className="sr-only" htmlFor="promotion_code">
                    Promotion code
                  </Label>
                  <TextInput
                    id="promotion_code"
                    className="w-auto mt-5"
                    value={promotionCode}
                    onChange={(e) => setPromotionCode(e.target.value)}
                  />
                  {isAvailableDepartures && (
                    <div className="mt-3 caption">
                      {isPromoCodeApplied
                        ? "Promotion code applied"
                        : "Invalid promotion code"}
                    </div>
                  )}
                </>
              )}
              {showPromotionCodeField && automaticPromotionCode && (
                <div className="mt-5">Automatic promotion code applied</div>
              )}
            </div>
            <AvailabilityResults
              locale={locale}
              ref={availabilityResultsRef}
              fetchStatus={status}
              departureDates={departureDates}
              selectedDeparture={selectedDeparture}
              setSelectedDeparture={setSelectedDeparture}
              currency={mapLocaleToCurrency(locale)}
            />
          </div>
        )}
      </form>
      <div
        data-testid="bottomBar"
        className="flex items-center justify-between gap-5 px-6 py-4"
      >
        {isAvailableDepartures ? (
          <ConfirmDeparture
            confirmDeparture={() => {
              if (selectedDeparture) {
                setIsSubmitting(true);
                onSubmit(selectedDeparture, passengers);
              }
            }}
            selectedDeparture={selectedDeparture}
            currency={mapLocaleToCurrency(locale)}
          />
        ) : (
          <ConfirmGuests
            searchForAvailability={() => setFetchData(true)}
            searchDisabled={
              !passengers ||
              passengers.length < 1 ||
              status.status !== "NOTSTARTED"
            }
            noAvailability={
              status.status === "ERROR" ||
              (status.status === "SUCCESS" && departureDates?.length === 0)
            }
          />
        )}
      </div>
    </>
  );
};

export default CheckAvailability;
