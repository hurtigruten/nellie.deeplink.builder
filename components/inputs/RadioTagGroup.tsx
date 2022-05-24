import clsx from "clsx";
import { ChangeEvent, InputHTMLAttributes, RefCallback } from "react";
import Label from "./Label";

interface IRadioOption {
  value: string;
  label: string | React.ReactNode;
}

interface IRadioOptionGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  options: IRadioOption[];
  defaultValue?: string;
  legend?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  inputRef?: RefCallback<HTMLInputElement>;
  hasError?: boolean;
  showAsMenu?: boolean;
  hasPaddedLabels?: boolean;
  isLabelUnbreakable?: boolean;
  hasSpaceBetween?: boolean;
  isRow?: boolean;
  isCards?: boolean;
}

const RadioTagGroup = ({
  name,
  options,
  defaultValue,
  legend,
  disabled,
  className,
  onChange,
  onBlur,
  inputRef,
  hasError = false,
  hasSpaceBetween = false,
  isLabelUnbreakable = false,
  isRow = false,
}: IRadioOptionGroupProps) => (
  <fieldset
    className={clsx("border-0 p-0", {
      [className || ""]: className,
    })}
  >
    {legend && (
      <Label as="legend" hasError={hasError}>
        {legend}
      </Label>
    )}

    <div
      aria-invalid={hasError}
      className={clsx("flex flex-wrap gap-2", {
        "flex-row": isRow,
        "flex-col": !isRow,
      })}
    >
      {options.map((option) => (
        <div className="relative" key={option.value}>
          <label
            className={clsx(
              "flex items-center w-full m-0 border-2 border-transparent rounded-lg cursor-pointer body-text-2",
              {
                "justify-between flex-row-reverse": hasSpaceBetween,
                "whitespace-nowrap": isLabelUnbreakable,
                "cursor-pointer": !disabled,
                "cursor-default": disabled,
              }
            )}
          >
            <input
              disabled={disabled}
              type="radio"
              className="absolute top-0 left-0 opacity-0 radioTag"
              name={name}
              value={option.value}
              defaultChecked={option.value === defaultValue}
              onChange={onChange}
              onBlur={onBlur}
              ref={inputRef}
            />
            <span
              className={clsx(
                "caption rounded-xl font-medium bg-beige p-2.5 transition-all duration-500 inline-flex flex-row items-center gap-1 border-2 border-transparent text-left",
                {
                  "focus:text-white hover:text-white active:bg-black active:text-white hover:bg-light-black focus:bg-light-black hover:border-black focus:border-black":
                    !disabled,
                  "bg-gray-100": disabled,
                  [className || ""]: className,
                }
              )}
            >
              {option.label}
            </span>
          </label>
        </div>
      ))}
    </div>
  </fieldset>
);

export default RadioTagGroup;
