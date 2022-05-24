import { createElement, LabelHTMLAttributes } from "react";
import clsx from "clsx";

interface ILabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  as?: keyof JSX.IntrinsicElements;
  for?: string;
  hasError?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
}

const Label = ({
  children,
  className,
  hasError,
  isDisabled,
  isRequired,
  as = "label",
  ...rest
}: ILabelProps) => {
  const classes = clsx("block border-0 ui-text", {
    [className || ""]: className,
    "text-primary-hrg-red": hasError,
    "text-gray": isDisabled,
  });
  return createElement(
    as,
    { ...rest, className: classes },
    <>
      {children}
      {isRequired && (
        <>
          <span aria-hidden="true"> * </span>
          <span className="sr-only">(Required)</span>
        </>
      )}
    </>
  );
};

export default Label;
