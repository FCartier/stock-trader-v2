import { Reducer } from 'redux';
import { MARKET_ACTION, MarketAction } from "./marketActions";
import { MarketItem } from './types';

const initialState: MarketItem[] = []
type MarketState = typeof initialState

export const market: Reducer<MarketState, MarketAction> = (state = initialState, action) => {
  switch (action.type) {
    case MARKET_ACTION:
      return [ ...action.market ]
    default:
      return state
  }
}