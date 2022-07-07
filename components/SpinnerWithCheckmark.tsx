import clsx from "clsx";

const SpinnerWithCheckmark = ({
  width,
  height,
  isInProgress,
  isFinished,
  className,
}: {
  width: number;
  height: number;
  isInProgress?: boolean;
  isFinished?: boolean;
  className?: string;
}) => (
  <svg
    className={clsx("spinner-with-check", {
      progress: isInProgress,
      ready: isFinished,
      [className || ""]: className,
    })}
    style={{ width, height }}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 100 100"
    xmlSpace="preserve"
  >
    <circle
      className="spinner-with-check-circle"
      cx="50"
      cy="50"
      r="46"
      fill="transparent"
    />
    <polyline
      className="spinner-with-check-tick"
      points="25,55 45,70 75,33"
      fill="transparent"
    />
  </svg>
);

export default SpinnerWithCheckmark;
