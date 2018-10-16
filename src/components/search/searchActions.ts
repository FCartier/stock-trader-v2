export const SELECTED_SYMBOL = "SELECTED_SYMBOL";
export type SELECTED_SYMBOL = typeof SELECTED_SYMBOL;

export interface SelectedSymbolReturnType {
    type: typeof SELECTED_SYMBOL;
    payload: string;
}

export function selectedSymbol(payload: string): SelectedSymbolReturnType{
    return {type: SELECTED_SYMBOL, payload};
}