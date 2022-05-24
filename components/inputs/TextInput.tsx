import React, { forwardRef, InputHTMLAttributes } from "react";
import clsx from "clsx";

interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

const TextInput = forwardRef<HTMLInputElement, ITextInputProps>(
  ({ className, hasError, ...rest }, ref) => {
    const classes = clsx(
      "w-full box-border appearance-none m-0 px-4 rounded body-text-2 py-5 border border-warm-gray-4 rounded-lg focus:!border-black !outline-offset-0",
      {
        [className || ""]: className,
        "border-gray-300 ": !hasError,
        "border-primary-hrg-red": hasError,
        "bg-warm-gray-1": rest.disabled || rest.readOnly,
        "bg-white": !rest.disabled && !rest.readOnly,
      }
    );
    return (
      <input
        className={classes}
        type="text"
        aria-invalid={hasError}
        ref={ref}
        {...rest}
      />
    );
  }
);

TextInput.displayName = "TextInput";
export default TextInput;
