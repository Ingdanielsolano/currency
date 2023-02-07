import fetch from "node-fetch";

const OpenExchangeApi = {
  convertToDollar: async (source) => {
    const latest = await fetch(
      "https://openexchangerates.org/api/latest.json?app_id=e0557811a5ea469d933b6dc408a9222e"
    ).then((response) => response.json());

    const keyFound = latest.rates
      ? Object.keys(latest.rates).find(
          (currency) => currency === source.toUpperCase()
        )
      : {};

    return latest.rates[keyFound];
  },
};

export default OpenExchangeApi;
