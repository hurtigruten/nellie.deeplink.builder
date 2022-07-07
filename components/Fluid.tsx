import React from "react";
import clsx from "clsx";

const Fluid = ({
  children,
  isExtraMargin,
  isNoMargin,
  isHeader,
  className,
  ...rest
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  children: React.ReactNode;
  isExtraMargin?: boolean;
  isNoMargin?: boolean;
  isHeader?: boolean;
  className?: string;
}) => {
  const fluidClasses = clsx(
    "mx-auto max-w-fluid flex flex-1",
    {
      "px-8": isExtraMargin,
      "!px-4 mobile-large:!px-6 max-w-header": isHeader,
      "px-0 tablet:px-0": isNoMargin,
      "px-6": !isExtraMargin && !isNoMargin,
      "items-center": !className || !className.includes("items-"),
    },
    className
  );
  return (
    <div className={fluidClasses} {...rest}>
      {children}
    </div>
  );
};

export default Fluid;
