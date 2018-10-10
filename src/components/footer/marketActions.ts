import {MarketState, MarketItem } from './types'
import { Action, ActionCreator } from 'redux'

export const MARKET_ACTION = "MARKET_ACTION";
export type MARKET_ACTION = typeof MARKET_ACTION;

export interface MarketAction extends Action {
   type: typeof MARKET_ACTION, 
   market: MarketItem[]
}

export const marketAction:ActionCreator<MarketAction> = (market: MarketItem[]) => ({
    type: MARKET_ACTION,
    market
});
