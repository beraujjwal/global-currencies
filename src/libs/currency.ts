import currenciesList from "../../data/currencies.json";
import { findEntryByField, sortData } from "./utils";
import { ICurrency } from "./interface";

// Get a list of all regions.
function getAllCurrencies(): ICurrency[] {
  return currenciesList;
}

function sortedCurrencies(field: string): ICurrency[] | undefined {
  if (!field) return undefined;

  return sortData(currenciesList, field);
}

function getFiltedCurrencies(
  field: string,
  value: string | number,
  sort?: string
): ICurrency[] | undefined {
  if (!field || !value) return undefined;

  const data = findEntryByField(currenciesList, field, value);
  if (sort) return sortData(data, sort);
  else return data;
}

export default {
  getAllCurrencies,
  sortedCurrencies,
  getFiltedCurrencies,
};
