import { useState } from "react";
import { OverviewVoyage } from "../api/getAllVoyages";
import Dropdown from "./inputs/Dropdown";
import Label from "./inputs/Label";
import PrimaryButton from "./inputs/PrimaryButton";

enum Status {
  SELECT_LOCALE,
  LOADING,
  LOADING_COMPLETE,
}

const localeOptions = [
  { value: "en-AU", description: "en-AU" },
  { value: "en-GB", description: "en-GB" },
  { value: "en-US", description: "en-US" },
  { value: "en", description: "en" },
];

const LocaleSelector = ({
  onLocaleSelected,
  onVoyagesLoaded,
}: {
  onVoyagesLoaded: (voyages: OverviewVoyage[]) => void;
  onLocaleSelected: (locale: string) => void;
}) => {
  const [status, setStatus] = useState(Status.SELECT_LOCALE);

  const [locale, setLocale] = useState(localeOptions[0].value);

  const loadVoyages = async () => {
    setStatus(Status.LOADING);

    try {
      const res = await fetch("/api/getAllVoyages?locale=" + locale);
      const voyages: OverviewVoyage[] = await res.json();
      onVoyagesLoaded(voyages);
      setStatus(Status.LOADING_COMPLETE);
      onLocaleSelected(locale);
    } catch {
      setStatus(Status.SELECT_LOCALE);
      alert("Hmm.. bad things have happened.");
    }
  };

  return (
    <div className="flex flex-col">
      <Label as="h2" className="h2-text mb-4" htmlFor="select-locale">
        Select locale
      </Label>
      <div className="!border w-[400px] shadow-container-top p-10 border-black">
        <Dropdown
          id="select-locale"
          className="bg-warm-gray-1"
          options={localeOptions}
          onChange={(e) => setLocale(e.currentTarget.value)}
        />
      </div>
      <PrimaryButton
        isLoading={status === Status.LOADING}
        onClick={loadVoyages}
        className="self-end mt-4"
      >
        Next
      </PrimaryButton>
    </div>
  );
};

export default LocaleSelector;
