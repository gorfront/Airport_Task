export const getCurrencySymbol = (currency: string): string => {
  switch (currency) {
    case "USD":
      return "$";
    case "EUR":
      return "€";
    default:
      return "₽";
  }
};

export const calculatePrice = (price: number, currency: string): number => {
  switch (currency) {
    case "USD":
      return Number((price / 99.69).toFixed(2));
    case "EUR":
      return Number((price / 103.97).toFixed(2));
    default:
      return price;
  }
};
