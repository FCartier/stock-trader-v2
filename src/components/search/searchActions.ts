export const SELECTED_SYMBOL = "SELECTED_SYMBOL";
export type SELECTED_SYMBOL = typeof SELECTED_SYMBOL;
import { Action, ActionCreator } from 'redux';

export interface SelectedSymbol extends Action {
  type: typeof SELECTED_SYMBOL, 
  payload: string
}

export const selectedSymbol:ActionCreator<SelectedSymbol> = payload => ({
  type: SELECTED_SYMBOL,
  payload
});
