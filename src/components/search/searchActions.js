import { apiCall } from "../../utils/api";

import { overviewAction } from "../overview/overviewActions";
import { peerAction } from "../peers/peerActions";
import { keyStatAction } from "../keystats/keyStatsActions";
import { priceAction } from "../price/priceActions";

export const SEARCH = "SEARCH";
export const SYMBOLS_ACTION = "SYMBOLS ACTION";

export const SELECTED_SYMBOL = "SELECTED_SYMBOL";

const storeInputAction = payload => ({
  type: SEARCH,
  payload
});

export const selectedSymbol = payload => ({
  type: SELECTED_SYMBOL,
  payload
});

/***** API calls *****/

export function handleSearch(input) {
  return dispatch => {
    dispatch(storeInputAction(input));
    apiCall("overview", input, overviewAction, dispatch);
    apiCall("peer", input, peerAction, dispatch);
    apiCall("keystats", input, keyStatAction, dispatch);
    apiCall("price", input, priceAction, dispatch);
  };
}