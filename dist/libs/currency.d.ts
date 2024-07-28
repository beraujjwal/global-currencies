import { ICurrency } from "./interface";
declare function getAllCurrencies(): ICurrency[];
declare function sortedCurrencies(field: string): ICurrency[] | undefined;
declare function getFiltedCurrencies(field: string, value: string | number, sort?: string): ICurrency[] | undefined;
declare const _default: {
    getAllCurrencies: typeof getAllCurrencies;
    sortedCurrencies: typeof sortedCurrencies;
    getFiltedCurrencies: typeof getFiltedCurrencies;
};
export default _default;
