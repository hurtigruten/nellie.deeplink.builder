import { RefCallback, SelectHTMLAttributes, useState } from "react";
import clsx from "clsx";

interface IOption {
  value: string;
  description?: string;
  disabled?: boolean;
  hidden?: boolean;
}

interface IDropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  value?: string;
  options: IOption[];
  disabled?: boolean;
  name?: string;
  hasError?: boolean;
  id?: string;
  isDark?: boolean;
  label?: string;
  wrapperClassName?: string;
  dropdownRef?: RefCallback<HTMLSelectElement>;
}

const Dropdown = ({
  className,
  defaultValue,
  disabled,
  dropdownRef,
  id,
  isDark = false,
  label,
  name,
  onChange,
  options,
  placeholder,
  value,
  wrapperClassName,
  hasError = false,
  ...rest
}: IDropdownProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const errorClass = "border-2 border-red-50";
  const disabledClass = "opacity-40";
  const selectClasses = clsx(
    "pl-5 pr-4 py-4 w-full border-none relative appearance-none overflow-hidden bg-transparent focus:outline-none",
    {
      [className || ""]: className,
      [errorClass]: hasError,
      [disabledClass]: disabled,
    }
  );
  return (
    <div
      className={clsx("relative flex items-center rounded-5xl", {
        "border-2 border-black": isFocused,
        "border-2 border-transparent": !isFocused,
        "bg-black": isDark,
        "bg-white": !isDark,
        [wrapperClassName || ""]: wrapperClassName,
      })}
    >
      {label && (
        <label
          htmlFor={id}
          className="pl-4 text-gray-400 text-[15px] font-medium"
        >
          {label}
        </label>
      )}
      <select
        name={name}
        aria-invalid={hasError}
        onChange={onChange}
        disabled={disabled}
        defaultValue={value ? undefined : defaultValue || placeholder}
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        id={id}
        ref={dropdownRef}
        className={selectClasses}
        {...rest}
      >
        {placeholder && (
          <option value={placeholder} disabled>
            {placeholder}
          </option>
        )}
        {options.map(
          ({
            value: optionValue,
            disabled: optionDisabled,
            description,
            hidden,
          }) => (
            <option
              className={optionDisabled ? "text-gray" : ""}
              key={optionValue}
              value={optionValue}
              disabled={optionDisabled}
              hidden={hidden}
            >
              {description || optionValue}
            </option>
          )
        )}
      </select>
    </div>
  );
};

export default Dropdown;
