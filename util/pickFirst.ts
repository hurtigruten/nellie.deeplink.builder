const pickFirst = <T>(item: T | T[]) => {
  if (Array.isArray(item)) return item[0];
  return item;
};

export default pickFirst;
