import { useState } from "react";
import Dropdown from "../inputs/Dropdown";
import Label from "../inputs/Label";

const localeOptions = [
  { value: "en-AU", description: "en-AU" },
  { value: "en-GB", description: "en-GB" },
  { value: "en-US", description: "en-US" },
];

const LocaleSelector = ({
  onLocaleSelected,
}: {
  onLocaleSelected: (locale: string) => void;
}) => (
  <div className="flex items-center gap-4">
    <Label className="h2-text" htmlFor="select-locale">
      Locale:
    </Label>
    <div>
      <Dropdown
        id="select-locale"
        className="min-w-[300px] bg-warm-gray-1"
        options={localeOptions}
        placeholder={"Please select your locale"}
        onChange={(e) => onLocaleSelected(e.currentTarget.value)}
      />
    </div>
  </div>
);

export default LocaleSelector;
