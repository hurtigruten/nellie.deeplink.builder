const dateToString = (
  date: Date,
  lang?: TLocale,
  useHours = false,
  useDay = true,
  useMonth = true,
  useYear = true,
  shortMonth = false
): string => {
  const monthStyle = shortMonth ? "short" : "long";

  return date.toLocaleDateString(lang || "en-gb", {
    year: useYear ? "numeric" : undefined,
    month: useMonth ? monthStyle : undefined,
    day: useDay ? "numeric" : undefined,
    hour: useHours ? "numeric" : undefined,
    minute: useHours ? "numeric" : undefined,
    timeZone: "UTC",
  });
};

export default dateToString;
