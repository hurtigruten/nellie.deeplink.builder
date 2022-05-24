import clsx from "clsx";
import { ButtonHTMLAttributes, ForwardedRef, forwardRef } from "react";

enum ButtonModes {
  primary = "primary",
  secondary = "secondary",
  secondaryBlack = "secondary-black",
  secondaryWhite = "secondary-white",
  secondaryWarmGray2 = "secondary-warm-gray-2",
  tertiary = "tertiary",
  icon = "icon",
  flat = "flat",
  flatBlack = "flat black",
  flatWhite = "flat white",
  fab = "fab",
  menuLink = "menu-link",
  none = "none",
}
interface IButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> {
  buttonColor?: "gray" | "black" | "white";
  size?: TButtonSize;
  mode?: ButtonModes;
  isDisabled?: boolean;
  fill?: string;
  href?: string;
  rel?: string;
  shallow?: boolean;
  testId?: string;
  isLoading?: boolean;
}

type TButtonSize = "large" | "small" | "full-icon";

const PrimaryButton = forwardRef(
  (
    {
      children,
      className,
      isDisabled,
      isLoading,
      testId = "button",
      rel,
      shallow,
      size = "large",
      type = "button",
      ...rest
    }: IButtonProps,
    ref
  ): JSX.Element => {
    const classes = clsx("btn btn-primary", {
      [className || ""]: className,
      "h-[56px]": size === "large",
      "h-[40px]": size === "small",
    });

    return (
      <button
        data-testid={testId}
        className={classes}
        ref={ref as ForwardedRef<HTMLButtonElement>}
        type={type}
        disabled={isDisabled}
        {...rest}
      >
        {isLoading && (
          <span className="absolute flex items-center justify-center w-full h-full">
            <span
              className={clsx("btn-spinner", {
                "border-t-white": !isDisabled,
                "border-t-primary-red-200": isDisabled,
              })}
            />
          </span>
        )}
        <span
          className={clsx("flex flex-row gap-2", {
            "opacity-0": isLoading,
          })}
        >
          {children}
        </span>
      </button>
    );
  }
);

PrimaryButton.displayName = "PrimaryButton";
export default PrimaryButton;
