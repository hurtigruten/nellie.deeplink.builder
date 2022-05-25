import { useState } from "react";
import { OverviewVoyage } from "../api/getAllVoyages";
import LocaleSelector from "../components/LocaleSelector";
import clsx from "clsx";
import VoyageSelector from "../components/VoyageSelector";
import DeepLinkViewer from "../components/DeepLinkViewer";
import CheckAvailability from "../components/CheckAvailability";
import { mapContentfulLanguageToLocale } from "../util/mappers";

enum DeepLinkStep {
  LOCALE = 1,
  VOYAGE,
  AVAILABILITY,
  CABIN,
  VIEW_DEEPLINK,
}

const defaultDeepLink: Deeplink = {
  version: "1",
  locale: "en",
  userId: null,
  search: null,
  total: null,
};

const Home = () => {
  const [deeplink, setDeeplink] = useState<Deeplink | null>(null);
  const [currentStep, setCurrentStep] = useState(DeepLinkStep.LOCALE);
  const [nextStep, setNextStep] = useState<null | DeepLinkStep>(null);
  const [replaceStep, setReplaceStep] = useState(false);
  const [voyages, setVoyages] = useState<OverviewVoyage[]>([]);
  const [chosenVoyage, setChosenVoyage] = useState<OverviewVoyage | null>(null);

  const onLocaleSelected = (locale: string) => {
    setDeeplink({
      version: "1",
      locale: mapContentfulLanguageToLocale(locale as TContentfulLanguage),
      userId: null,
      search: null,
      total: null,
    });

    setNextStep(DeepLinkStep.VOYAGE);
  };

  const onVoyageSelected = (voyage: OverviewVoyage) => {
    setChosenVoyage(voyage);
    setDeeplink({
      ...(deeplink ?? defaultDeepLink),
      search: {
        voyageId: voyage.id,
        cabins: [],
        promoCode: null,
        departure: null,
      },
    });

    setNextStep(DeepLinkStep.AVAILABILITY);
  };

  const onDepartureSelected = (
    departure: TDeparture,
    passengers: TCabinPassengerCount[]
  ) => {
    console.log(departure, passengers);
    setDeeplink({
      ...(deeplink ?? defaultDeepLink),
      search: {
        voyageId: deeplink?.search?.voyageId ?? "",
        cabins: passengers.map((p) => [p.adults, p.children, p.infants]),
        promoCode: departure.promotionCodesApplied.join(","),
        departure: departure.date.toISOString().substring(0, 19),
      },
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
    setNextStep(DeepLinkStep.VIEW_DEEPLINK);
  };

  const renderStepContent = (step: DeepLinkStep) => {
    switch (step) {
      case DeepLinkStep.LOCALE:
        return (
          <LocaleSelector
            onVoyagesLoaded={setVoyages}
            onLocaleSelected={onLocaleSelected}
          />
        );
      case DeepLinkStep.VOYAGE:
        return (
          <VoyageSelector
            voyages={voyages}
            onVoyageSelected={onVoyageSelected}
          />
        );
      case DeepLinkStep.AVAILABILITY:
        return (
          <CheckAvailability
            voyageId={chosenVoyage?.id ?? ""}
            onSubmit={onDepartureSelected}
            packageCodes={chosenVoyage?.packageCodes ?? []}
            locale={mapContentfulLanguageToLocale(
              deeplink?.locale as TLanguageLocaleCode
            )}
          />
        );
      case DeepLinkStep.VIEW_DEEPLINK:
        return <DeepLinkViewer deeplink={deeplink} />;

      default:
        return null;
    }
  };

  if (replaceStep) {
    window.requestAnimationFrame(() => setReplaceStep(false));
  }

  return (
    <>
      <header className="flex items-center justify-center p-6 mb-20 bg-off-black py-14">
        <h1 className="text-white uppercase display-text">Create deeplink</h1>
      </header>
      <main className="min-h-[2500px] overflow-hidden w-full flex relative flex-col items-center">
        <div
          className={clsx("-translate-x-1/2 absolute", {
            "transition-all duration-1000 ease-in-out": !replaceStep,
            "-left-1/2": !!nextStep && !replaceStep,
            "left-1/2": !nextStep,
          })}
        >
          {renderStepContent(currentStep)}
        </div>

        <div
          onTransitionEnd={() => {
            if (!nextStep) {
              return;
            }
            console.log(nextStep);
            setReplaceStep(true);

            window.requestAnimationFrame(() => {
              setCurrentStep(nextStep);
              setNextStep(null);
            });
          }}
          className={clsx(
            "transition-all ease-in-out -translate-x-1/2 absolute duration-1000",
            {
              "left-[150%] opacity-0": !nextStep,
              "left-1/2": !!nextStep,
            }
          )}
        >
          {nextStep && renderStepContent(nextStep)}
        </div>
      </main>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  return { props: {} };
};
