"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const currencies_json_1 = __importDefault(require("../../data/currencies.json"));
const utils_1 = require("./utils");
// Get a list of all regions.
function getAllCurrencies() {
    return currencies_json_1.default;
}
function sortedCurrencies(field) {
    if (!field)
        return undefined;
    return (0, utils_1.sortData)(currencies_json_1.default, field);
}
function getFiltedCurrencies(field, value, sort) {
    if (!field || !value)
        return undefined;
    const data = (0, utils_1.findEntryByField)(currencies_json_1.default, field, value);
    if (sort)
        return (0, utils_1.sortData)(data, sort);
    else
        return data;
}
exports.default = {
    getAllCurrencies,
    sortedCurrencies,
    getFiltedCurrencies,
};
