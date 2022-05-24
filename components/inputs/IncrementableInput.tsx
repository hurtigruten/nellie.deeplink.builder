import { useState } from "react";
import clsx from "clsx";
import clamp from "../../util/clamp";
import Icon from "../Icon";
import { AddLine, SubtractLine } from "../icons/System";

type TIncrementableInputProps = {
  min?: number;
  max?: number;
  id?: string;
  defaultValue?: number;
  middleButtonBorderColor?: string;
  increaseAriaLabel?: string;
  decreaseAriaLabel?: string;
  onChange?: (value: number) => void;
};

const IncrementableInput = ({
  id,
  defaultValue = 0,
  min = -Infinity,
  max = Infinity,
  middleButtonBorderColor = "border-warm-gray-2",
  increaseAriaLabel = "Increase",
  decreaseAriaLabel = "Decrease",
  onChange,
}: TIncrementableInputProps) => {
  const [value, setValue] = useState(defaultValue);

  const increment = () => {
    const newValue = clamp(min, max, value + 1);
    setValue(newValue);
    onChange?.(newValue);
  };
  const decrement = () => {
    const newValue = clamp(min, max, value - 1);
    setValue(newValue);
    onChange?.(newValue);
  };

  const controlButtonStyle =
    "p-2.5 flex border-2 rounded-full border-black hover:bg-black disabled:bg-warm-gray-3 disabled:border-warm-gray-3 group";

  return (
    <div className="flex items-center gap-2 ">
      <button
        type="button"
        aria-label={increaseAriaLabel}
        onClick={decrement}
        className={controlButtonStyle}
        disabled={value <= min}
      >
        <Icon
          size="2x"
          fill={
            value <= min
              ? "text-warm-gray-4"
              : "text-black group-hover:text-white"
          }
          icon={SubtractLine}
        />
      </button>
      <span>
        <input
          className="hidden"
          type="number"
          id={id}
          min={min}
          max={max}
          value={value}
          readOnly
        />
        <div
          className={clsx(
            "bg-white border-2 w-10 h-10 flex items-center justify-center rounded-full p-2 text-sm",
            middleButtonBorderColor
          )}
        >
          {value}
        </div>
      </span>
      <button
        type="button"
        aria-label={decreaseAriaLabel}
        onClick={increment}
        className={controlButtonStyle}
        disabled={value >= max}
      >
        <Icon
          size="2x"
          fill={
            value !== max
              ? "text-black group-hover:text-white"
              : "text-warm-gray-4 "
          }
          icon={AddLine}
        />
      </button>
    </div>
  );
};

export default IncrementableInput;
