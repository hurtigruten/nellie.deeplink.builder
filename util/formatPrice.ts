const formatPrice = (value: number, currencyCode: string) => {
  try {
    return Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currencyCode,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  } catch (e) {
    return value.toString();
  }
};

export default formatPrice;
