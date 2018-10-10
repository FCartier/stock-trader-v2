import { Reducer } from 'redux';
import { FETCH_MARKET_SUCCESS } from "./marketActions";
import { MarketItem } from './types';

const initialState: MarketItem[] = []
type MarketState = typeof initialState

export const market: Reducer<MarketState> = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MARKET_SUCCESS:
      return [ ...action.market ]
    default:
      return state
  }
}