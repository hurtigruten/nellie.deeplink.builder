import clsx from "clsx";
import Icon from "./Icon";

const IconBullet = ({
  backgroundColorClassName = "bg-black",
  className,
  iconColorClassName = "text-white",
  iconSize = "1x",
  icon,
}: {
  backgroundColorClassName?: string;
  className?: string;
  iconColorClassName?: string;
  iconSize?: IconSizeType;
  icon: TIconType;
}) => {
  const classes = clsx(
    `flex items-center justify-center p-2 rounded-full`,
    className,
    {
      "h-[40px]": !className?.includes("h-"),
      "w-[40px]": !className?.includes("w-"),
      [backgroundColorClassName ?? ""]: backgroundColorClassName,
      [iconColorClassName ?? ""]: iconColorClassName,
    }
  );
  return (
    <div className={classes} data-testid="icon-bullet">
      <Icon icon={icon} size={iconSize} />
    </div>
  );
};

export default IconBullet;
