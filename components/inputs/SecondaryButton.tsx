import clsx from "clsx";
import { ForwardedRef, forwardRef } from "react";
import Icon from "../Icon";

const SecondaryButton = forwardRef(
  (
    {
      buttonColor = "gray",
      children,
      className,
      href,
      icon,
      iconFill,
      iconPosition = "left",
      isDisabled,
      isLoading,
      shallow,
      size = "large",
      type = "button",
      ...rest
    }: IButtonProps,
    ref
  ): JSX.Element => {
    const textByButtonColors = {
      black: "text-white",
      gray: "text-black hover:text-white",
      white: "text-black",
    };

    const classes = clsx("btn btn-secondary", textByButtonColors[buttonColor], {
      "h-[56px] px-4": size === "large",
      "h-[40px] px-4": size === "small",
      "bg-warm-gray-3 hover:bg-black ": !isDisabled && buttonColor === "gray",
      "bg-black hover:bg-light-black hover:border-black":
        !isDisabled && buttonColor === "black",
      "bg-white hover:bg-warm-gray-4": !isDisabled && buttonColor === "white",
      "bg-black": isLoading && buttonColor !== "white",
      "bg-warm-gray-4": isLoading && buttonColor === "white",
      "bg-white text-black hover:bg-white hover:text-black opacity-60":
        isDisabled && !isLoading,
      noDecorate: href,
      [className || ""]: className,
    });

    const buttonChildren = (
      <span
        className={clsx("flex flex-row gap-2", {
          "opacity-0": isLoading,
          "flex-row-reverse": iconPosition === "right",
        })}
      >
        {icon && (
          <Icon
            data-testid="button-icon"
            icon={icon}
            fill={isDisabled ? "text-warm-gray-4" : ""}
            size="xl"
          />
        )}
        {children}
      </span>
    );

    return (
      <button
        data-testid="button"
        className={classes}
        ref={ref as ForwardedRef<HTMLButtonElement>}
        type={type}
        disabled={isDisabled}
        {...rest}
      >
        {isLoading && (
          <span className="absolute flex items-center justify-center w-full h-full">
            <span
              className={clsx("btn-spinner border-t-white", {
                "border-t-black": buttonColor === "white",
              })}
            />
          </span>
        )}
        <span className="flex items-center gap-2">{buttonChildren}</span>
      </button>
    );
  }
);

SecondaryButton.displayName = "Button";
export default SecondaryButton;
