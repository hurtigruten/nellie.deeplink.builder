const clamp = (numberToClamp: number, min: number, max: number): number =>
  Math.min(Math.max(min, numberToClamp), max);

export default clamp;
