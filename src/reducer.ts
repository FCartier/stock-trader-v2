import { combineReducers } from "redux";
import { chart } from "./components/chart/chartReducer";
import { keystats } from "./components/keystats/keystatsReducer";
import { news } from "./components/news/newsReducer";
import { overview } from "./components/overview/overviewReducer";
import { market } from "./components/footer/marketReducer";
import { peers } from "./components/peers/peerReducer";
import { price } from "./components/price/priceReducer";
import { search } from "./components/search/searchReducer";
import { error } from "./components/reusables/errorReducer";

export const reducer = combineReducers({
   chart, 
   keystats, 
   news, 
   overview, 
   market, 
   peers, 
   price, 
   search, 
   error
});

