import OpenExchangeApi from "../../third-party/open-exchange.js";

export const conversion = async (req, res) => {
  const { amount, source, destination } = req.query;

  const dollarSource = await OpenExchangeApi.convertToDollar(source);

  const dollarDestination = await OpenExchangeApi.convertToDollar(destination);

  const result = (amount / dollarSource) * dollarDestination;
  return res.send({ data: result });
};

export const getDollarValue = async (req, res) => {
  const { amount, currencies: currenciesRaw } = req.query;

  let currencies = JSON.parse(currenciesRaw);

  currencies = await Promise.all(
    currencies.map(async (currency) => {
      const dollarSource = await OpenExchangeApi.convertToDollar(currency);

      return {
        currency: currency,
        value:  amount * dollarSource,
      };
    })
  );

  res.send({ daga: currencies });
};
