export const getDeckFromCabinNumber = (cabinNumber: number | string) => {
  if (typeof cabinNumber === "string" && !cabinNumber) {
    return undefined;
  }

  const maybeNumber = Number(cabinNumber.toString()[0]);

  return Number.isNaN(maybeNumber) ? undefined : maybeNumber;
};
