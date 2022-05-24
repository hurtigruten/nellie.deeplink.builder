import { useState } from "react";
import clsx from "clsx";
import Label from "./Label";
import IncrementableInput from "./IncrementableInput";
import Button, { ButtonModes } from "./Button";

type TCabinChooserProps = {
  cabinNumber: number;
  values: TCabinPassengerCount;
  locale: TLocale;
  onChange: (count: TCabinPassengerCount) => void;
};

const CabinChooser = ({
  cabinNumber,
  onChange,
  values,
  locale,
}: TCabinChooserProps) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="flex flex-col p-4 bg-opacity-50 bg-warm-gray-2 gap-y-5 rounded-4xl first:ml-6 last:mr-6 tablet:first:ml-0 tablet:last:mr-0">
      <p className="pb-1 border-b-2 border-warm-gray-3">Cabin {cabinNumber}</p>
      <div className="flex items-center gap-5">
        <IncrementableInput
          defaultValue={values.adults}
          onChange={(val) => {
            onChange({ ...values, adults: val });
          }}
          id="adults_chooser"
          min={1}
          max={4}
          middleButtonBorderColor="border-white"
        />
        <Label htmlFor="adults_chooser">
          <span className="font-normal body-text-1">adults</span>
        </Label>
      </div>

      <div
        className={clsx("flex items-center gap-5", {
          hidden: expanded,
        })}
      >
        <IncrementableInput
          onChange={(val) => {
            onChange({ ...values, children: val });
          }}
          defaultValue={values.children}
          id="children_chooser"
          min={0}
          max={4}
          middleButtonBorderColor="border-white"
        />
        <Label className="flex flex-col" htmlFor="children_chooser">
          <span className="font-normal body-text-1">children</span>
          <span className="font-normal caption">2-15</span>
        </Label>
      </div>

      <div
        className={clsx("flex items-center gap-5", {
          hidden: expanded,
        })}
      >
        <IncrementableInput
          onChange={(val) => {
            onChange({ ...values, infants: val });
          }}
          defaultValue={values.infants}
          id="infants_chooser"
          min={0}
          max={4}
          middleButtonBorderColor="border-white"
        />
        <Label className="flex flex-col" htmlFor="infants_chooser">
          <span className="font-normal body-text-1">infants</span>
          <span className="font-normal caption">0-2</span>
        </Label>
      </div>
      <Button
        mode={ButtonModes.flat}
        className="self-baseline"
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        {expanded ? "Show more options" : "Show fewer options"}
      </Button>
    </div>
  );
};

export default CabinChooser;
