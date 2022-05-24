import clsx from "clsx";
import { ForwardedRef, forwardRef } from "react";
import Link from "next/link";
import Icon from "../Icon";

export enum ButtonModes {
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

const Button = forwardRef(
  (
    {
      size = "large",
      children,
      className,
      isDisabled,
      type = "button",
      mode = ButtonModes.primary,
      iconPosition = "left",
      iconSize = "xl",
      icon,
      href,
      rel,
      shallow,
      iconFill,
      isLoading,
      ...rest
    }: IButtonProps,
    ref
  ): JSX.Element => {
    const classes = clsx("btn relative", {
      "h-[56px] px-4": size === "large",
      "h-[40px] px-4": size === "small",
      "h-10 w-10 p-0 !min-w-0": mode === ButtonModes.icon,
      "btn-flat": mode === ButtonModes.flat,
      "btn-flat white": mode === ButtonModes.flatWhite,
      "btn-primary": mode === ButtonModes.primary,
      "btn-secondary": mode === ButtonModes.secondary,
      "btn-secondary-black": mode === ButtonModes.secondaryBlack,
      "btn-secondary-white": mode === ButtonModes.secondaryWhite,
      "btn-secondary btn-secondary-warmgray-2":
        mode === ButtonModes.secondaryWarmGray2,
      "btn-menu-link": mode === ButtonModes.menuLink,
      "rounded-full": true,
      noDecorate: href,
      [className || ""]: className,
    });
    const isFlat = [
      ButtonModes.flat,
      ButtonModes.flatBlack,
      ButtonModes.flatWhite,
    ].includes(mode);

    const buttonChildren = (
      <>
        {icon && iconPosition === "left" && (
          <Icon
            data-testid="button-icon"
            icon={icon}
            fill={iconFill}
            size={iconSize}
          />
        )}
        {children}
        {icon && iconPosition === "right" && (
          <Icon
            data-testid="button-icon"
            icon={icon}
            fill={iconFill}
            size={iconSize}
          />
        )}
      </>
    );

    if (href && !isDisabled) {
      const { "aria-label": ariaLabel } = rest;
      return (
        <Link shallow={shallow} href={href} prefetch={false}>
          <a
            onClick={(event) => {
              const proceed = rest.onClick?.(event as any);
              if (proceed !== undefined) {
                return proceed;
              }
              return true;
            }}
            data-testid="button"
            className={classes}
            ref={ref as ForwardedRef<HTMLAnchorElement>}
            aria-label={ariaLabel}
            rel={rel}
          >
            {buttonChildren}
          </a>
        </Link>
      );
    }

    return (
      <button
        data-testid="button"
        className={classes}
        ref={ref as ForwardedRef<HTMLButtonElement>}
        type={type}
        disabled={isDisabled}
        {...rest}
      >
        {isLoading && isFlat && buttonChildren}
        {isLoading ? <span className="btn-spinner"></span> : buttonChildren}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
