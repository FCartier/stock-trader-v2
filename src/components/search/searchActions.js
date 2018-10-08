import { apiCall } from "../../utils/api";

import { overviewAction } from "../overview/overviewActions.tsx";
import { newsAction } from "../news/newsActions";
import { chartAction } from "../chart/chartActions";
import { peerAction } from "../peers/peerActions";
import { keyStatsAction } from "../keystats/keyStatsActions.tsx";
import { priceAction } from "../price/priceActions";
import { marketAction } from "../footer/marketActions";

export const SEARCH = "SEARCH";
export const SYMBOLS_ACTION = "SYMBOLS ACTION";

const storeInputAction = payload => ({
  type: SEARCH,
  payload
});

const symbolsAction = payload => ({
  type: SYMBOLS_ACTION,
  payload
});


/***** API calls *****/

export function handleSearch(input) {
  return dispatch => {
    dispatch(storeInputAction(input));
    apiCall("overview", input, overviewAction, dispatch);
    apiCall("news", input, newsAction, dispatch);
    apiCall("chart", input, chartAction, dispatch);
    apiCall("peer", input, peerAction, dispatch);
    apiCall("keystats", input, keyStatsAction, dispatch);
    apiCall("price", input, priceAction, dispatch);
    apiCall("market", input, marketAction, dispatch);
  };
}

export function getSymbols() {
  return dispatch => {
    apiCall("symbols", null, symbolsAction, dispatch);
  };
}
