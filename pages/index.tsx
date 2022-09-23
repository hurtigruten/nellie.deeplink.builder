import { useState } from "react";
import DeepLinkViewer from "../components/deeplink/DeepLinkViewer";
import { mapContentfulLanguageToLocale } from "../util/mappers";
import { Deeplink, DeeplinkSearchCabin } from "../util/deeplink";
import VoyageSelector from "../components/deeplink/VoyageSelector";
import LocaleSelector from "../components/deeplink/LocaleSelector";
import DepartureOptions, {
  TSelectedDeparture,
} from "../components/deeplink/DepartureOptions";
import CabinOptions from "../components/deeplink/CabinOptions";

const defaultDeepLink: Deeplink = {
  version: "1",
  locale: null,
  userId: null,
  search: null,
  total: null,
};

const DeepLinkBuilder = () => {
  const [deeplink, setDeeplink] = useState<Deeplink>(defaultDeepLink);
  const [voyages, setVoyages] = useState<Contentful.Voyage.Overview[]>([]);
  const [chosenVoyage, setChosenVoyage] =
    useState<Contentful.Voyage.Overview | null>(null);
  const [chosenDeparture, setChosenDeparture] =
    useState<TSelectedDeparture | null>(null);
  const [shipCodesForAvailableShips, setShipCodesForAvailableShips] = useState<
    string[] | null
  >(null);

  const onLocaleSelected = (locale: string) => {
    setDeeplink({
      version: "1",
      locale: mapContentfulLanguageToLocale(locale as TContentfulLanguage),
      userId: null,
      search: null,
      cabins: undefined,
      total: null,
    });
  };

  const onVoyageSelected = (voyage: Contentful.Voyage.Overview) => {
    setChosenVoyage(voyage);
    setShipCodesForAvailableShips(voyage.shipCodes);

    setDeeplink({
      ...deeplink,
      search: {
        voyageId: voyage.id,
        cabins: [],
        promoCode: null,
        departure: null,
      },
    });
  };

  const onCabinsSelected = (cabinGrades: string[]) => {
    const cabins =
      cabinGrades.length === 0
        ? undefined
        : cabinGrades.map((cg) => ({
            cabinGradeCode: cg,
            cabinNumber: null,
          }));

    setDeeplink({
      ...deeplink,
      cabins,
    });
  };

  const onDepartureSelected = (selectedDep: TSelectedDeparture | null) => {
    const promoCode =
      selectedDep?.departure.promotionCodesApplied.join(",") ?? null;
    const departure =
      selectedDep?.departure.date.toISOString().substring(0, 19) ?? null;
    const cabins: DeeplinkSearchCabin[] =
      selectedDep?.passengers.map((p) => [p.adults, p.children, p.infants]) ??
      [];

    const shipCode = selectedDep?.departure.shipCode;
    setShipCodesForAvailableShips(shipCode ? [shipCode] : null);

    setChosenDeparture(selectedDep);
    setDeeplink({
      ...deeplink,
      search: {
        voyageId: deeplink?.search?.voyageId ?? "",
        cabins,
        promoCode,
        departure,
      },
    });
  };

  return (
    <>
      <header className="flex items-center justify-center p-6 mb-20 bg-off-black py-14">
        <h1 className="text-white uppercase display-text">Create deeplink</h1>
      </header>
      <main className="relative flex flex-col w-full pl-20 mb-20 overflow-hidden gap-y-5">
        <LocaleSelector onLocaleSelected={onLocaleSelected} />
        {deeplink?.locale && (
          <div>
            <VoyageSelector
              onVoyageSelected={onVoyageSelected}
              locale={deeplink.locale}
            />
          </div>
        )}
        <div className="flex gap-2">
          {deeplink.locale && chosenVoyage && (
            <div className="flex flex-wrap gap-4">
              <DepartureOptions
                locale={deeplink.locale}
                voyage={chosenVoyage}
                onDepartureSelected={onDepartureSelected}
              />
              <CabinOptions
                shipCodesForAvailableShips={shipCodesForAvailableShips}
                locale={deeplink.locale}
                departure={chosenDeparture}
                onCabinsSelected={onCabinsSelected}
              />
            </div>
          )}
        </div>
        {(deeplink.search || deeplink.cabins) && (
          <DeepLinkViewer deeplink={deeplink} />
        )}
      </main>
    </>
  );
};

export default DeepLinkBuilder;

export const getStaticProps = async () => {
  return { props: {} };
};
