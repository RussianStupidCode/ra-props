const textFormat = (text) => {
  if (text.length > 50) {
    return text.slice(50) + "...";
  }

  return text;
};

const CURRENCY_SYMBOLS = {
  USD: "$",
  EUR: "€",
};

const priceFormat = (price, currencyCode) => {
  const currency = currencyCode.toUpperCase();

  if (currency in CURRENCY_SYMBOLS) {
    return `${CURRENCY_SYMBOLS[currency]}${price}`;
  }

  return `${price} ${currency}`;
};

export { textFormat, priceFormat };
