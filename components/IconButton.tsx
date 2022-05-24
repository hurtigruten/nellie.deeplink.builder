import { ForwardedRef, forwardRef } from "react";
import clsx from "clsx";
import Link from "next/link";

import Icon from "./Icon";

type TIconButtonProps = {
  buttonColor?:
    | "black"
    | "gray"
    | "red"
    | "transparent"
    | "transparentDark"
    | "white";
  height?: number;
  icon: TIconType;
  iconClassName?: string;
  width?: number;
} & Omit<IButtonProps, "aria-label" | "buttonColor"> &
  Required<{ "aria-label": string }>;

const IconButton = forwardRef<HTMLButtonElement, TIconButtonProps>(
  (
    {
      buttonColor = "gray",
      className,
      href,
      icon,
      iconClassName,
      isDisabled,
      size = "large",
      type = "button",
      ...rest
    }: TIconButtonProps,
    ref
  ) => {
    const fillByButtonColors = {
      black: "text-white group-hover:text-black",
      gray: "text-black group-hover:text-white hover:text-white",
      white: "text-black group-hover:text-white hover:text-white",
      red: "text-white",
      transparent: "text-black group-hover:text-white hover:text-white",
      transparentDark: "text-white group-hover:text-black hover:text-black",
    };
    const classes = clsx(
      "group iconBtn rounded-full flex items-center justify-center max-h-10",
      {
        "bg-white hover:bg-black": buttonColor === "white",
        "bg-warm-gray-3 hover:bg-black": buttonColor === "gray",
        "bg-transparent hover:bg-black active:bg-warm-gray-3":
          buttonColor === "transparent",
        "bg-transparent hover:bg-white": buttonColor === "transparentDark",
        "bg-black hover:bg-white": buttonColor === "black",
        "bg-primary-hrg-red": buttonColor === "red",
        "bg-white": buttonColor === "white",
        "!bg-white !text-warm-gray-4": isDisabled,
        "w-10 h-10": size === "large",
        "w-8 h-8": size === "small",
        [className || ""]: className,
      }
    );

    if (href && !isDisabled) {
      const { "aria-label": ariaLabel } = rest;
      return (
        <Link href={href} prefetch={false} {...rest}>
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
          >
            <Icon
              className={iconClassName}
              size={rest.iconSize}
              fill={
                isDisabled
                  ? "text-warm-gray-4"
                  : fillByButtonColors[buttonColor]
              }
              icon={icon}
            />
          </a>
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={classes}
        disabled={isDisabled}
        type={type}
        {...rest}
      >
        <Icon
          className={iconClassName}
          size={rest.iconSize}
          fill={
            isDisabled ? "text-warm-gray-4" : fillByButtonColors[buttonColor]
          }
          icon={icon}
        />
      </button>
    );
  }
);

IconButton.displayName = "IconButton";

export default IconButton;
