import clsx from "clsx";
import React, { SVGAttributes } from "react";

interface IIconProps extends SVGAttributes<SVGElement> {
  icon: TIconType;
  fill?: string;
  size?: IconSizeType;
  width?: number;
  height?: number;
}

const sizeMap = {
  fw: "fw",
  xxs: "10",
  xs: "12",
  sm: "14",
  "1x": "16",
  lg: "18",
  xl: "20",
  "2x": "22",
  "2.5x": "32",
  "3x": "48",
  "4x": "64",
  "5x": "80",
  "6x": "96",
  "7x": "112",
  "8x": "128",
  "9x": "144",
  "10x": "160",
  default: "24",
};

const Icon = ({
  className,
  fill,
  icon: IconWrapper,
  size = "xl",
  ...rest
}: IIconProps) => (
  <i
    className={clsx(
      "flex items-center justify-center fill-current",
      fill,
      className
    )}
  >
    <IconWrapper data-testid="icon-selector" height={sizeMap[size]} {...rest} />
  </i>
);

export default Icon;
