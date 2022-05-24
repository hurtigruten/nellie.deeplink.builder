const getDateDifferenceInDays = (
  startDateTime: Date,
  endDateTime: Date,
  isAbsolute = true
) => {
  // Removes time from Date object and counts number of times midnight is passed
  const dateDifference = Math.floor(
    (Date.UTC(
      endDateTime.getFullYear(),
      endDateTime.getMonth(),
      endDateTime.getDate()
    ) -
      Date.UTC(
        startDateTime.getFullYear(),
        startDateTime.getMonth(),
        startDateTime.getDate()
      )) /
      (1000 * 60 * 60 * 24)
  );

  return isAbsolute ? Math.abs(dateDifference) : dateDifference;
};

export default getDateDifferenceInDays;
