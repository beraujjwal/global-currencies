export interface ICurrency {
    code: string;
    name: string | null;
    name_plural: string | null;
    symbol: string | null;
    symbol_native: string | null;
    decimal_digits: number;
    rounding: number;
}
