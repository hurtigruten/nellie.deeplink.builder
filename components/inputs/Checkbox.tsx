import { ChangeEvent, forwardRef, InputHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import Icon from "../Icon";
import { CheckLine } from "../icons/System";

const CheckboxIcon = ({
  className,
  isDarkMode = false,
  ...props
}: {
  className: string;
  isDarkMode: boolean;
}) => (
  <Icon
    icon={CheckLine}
    className={clsx(className, {
      "text-primary-hrg-red": isDarkMode,
      "text-white": !isDarkMode,
    })}
    {...props}
  />
);

enum CheckboxMode {
  primary,
  secondary,
}

interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  containerClassNames?: string;
  isDarkMode?: boolean;
  label: ReactNode;
  labelPosition?: "left" | "right";
  value?: string | number | string[];
  defaultChecked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  hasError?: boolean;
  truncate?: boolean;
  hasSpaceBetween?: boolean;
  mode?: CheckboxMode;
  labelClassName?: string;
}

const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>(
  (
    {
      containerClassNames,
      isDarkMode = false,
      label,
      hasError = false,
      hasSpaceBetween = false,
      truncate = false,
      mode = CheckboxMode.primary,
      disabled,
      checked,
      labelClassName,
      ...props
    }: ICheckboxProps,
    ref
  ) => {
    const checkmarkBackground = clsx(
      "transition-all duration-300 relative",
      "top-0 left-0 h-7 w-7 items-center justify-center rounded-xl inline-block"
    );
    const absoluteCenter = clsx("m-auto absolute inset-0");
    const checkmarkBox = clsx(
      "absolute flex-none w-6 h-6 border-2 rounded-xl",
      {
        "border-white": isDarkMode,
        "border-primary-red-500": !isDarkMode,
      }
    );
    const check = clsx("flex-none hidden");

    return (
      <div
        aria-invalid={hasError}
        className={clsx({
          "h-full": mode === CheckboxMode.secondary,
          [containerClassNames ?? ""]: containerClassNames,
        })}
      >
        <label
          className={clsx(
            "relative flex items-start w-full gap-2 m-0 body-text-1",
            {
              "justify-between flex-row-reverse": hasSpaceBetween,
              "h-full": mode === CheckboxMode.secondary,
            }
          )}
        >
          <input
            data-testid="checkbox"
            ref={ref}
            className={clsx("absolute top-0 left-0 opacity-0 checkbox group", {
              "dark-mode": isDarkMode,
            })}
            type="checkbox"
            checked={checked}
            disabled={disabled}
            {...props}
          />
          {mode === CheckboxMode.primary && (
            <span className={checkmarkBackground}>
              <span className={clsx(checkmarkBox, absoluteCenter)}>
                <CheckboxIcon
                  isDarkMode={isDarkMode}
                  className={clsx(check, absoluteCenter)}
                />
              </span>
            </span>
          )}
          <span
            className={clsx(
              {
                "flex-1": !hasSpaceBetween,
                "whitespace-nowrap overflow-hidden overflow-ellipsis": truncate,
                "break-words": !truncate,
                "bg-primary-hrg-red text-white":
                  CheckboxMode.secondary === mode && checked,
                "px-3 mobile-large:px-6 py-4 text-center tablet:py-5 rounded-5xl secondary border border-warm-gray-4":
                  mode === CheckboxMode.secondary,
                "h-full flex items-center justify-center focus:ring-2 ring-penguin-yellow":
                  mode === CheckboxMode.secondary,
                "text-white": isDarkMode,
              },
              labelClassName
            )}
          >
            {label}
          </span>
        </label>
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
