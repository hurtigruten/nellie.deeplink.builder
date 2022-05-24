// Dates in PG are using local timezone - need it in UTC
const createDateAsUTC = (date?: string | null): Date => {
  if (!date) return new Date();
  return new Date(`${date.substring(0, 19)}.000Z`);
};

export default createDateAsUTC;
