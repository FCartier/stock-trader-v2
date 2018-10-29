import { Action, ActionCreator } from "redux";

export const FETCH_STATIC_PRICE = "FETCH_STATIC_PRICE";
export type FETCH_STATIC_PRICE = typeof FETCH_STATIC_PRICE;

export const RECEIVED_NEW_PRICE = "RECEIVED_NEW_PRICE";
export type RECEIVED_NEW_PRICE = typeof RECEIVED_NEW_PRICE;

export interface StaticPriceAction extends Action {
  type: typeof FETCH_STATIC_PRICE
  payload: string
};

export interface PriceAction extends Action {
  type: typeof RECEIVED_NEW_PRICE;
  payload: string;
}

export const priceReceived: ActionCreator<PriceAction> = payload => ({
  type: RECEIVED_NEW_PRICE,
  payload
});

export const fetchStaticPrice: ActionCreator<StaticPriceAction> = payload => ({
  type: FETCH_STATIC_PRICE,
  payload
});
