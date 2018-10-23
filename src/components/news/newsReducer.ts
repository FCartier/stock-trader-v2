import { Reducer } from "redux";
import { FETCH_NEWS_SUCCESS, FETCH_NEWS_FAILED } from "./newsActions";
import { NewsList } from "./types";
import { fetchStatus } from "../reusables/fetchStatus";

const initialState: NewsList = { status: fetchStatus.pending, news: [] };
type NewsState = typeof initialState;

export const news: Reducer<NewsState> = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_SUCCESS:
      return { news: action.payload, status: fetchStatus.success };
    case FETCH_NEWS_FAILED:
      return { ...state, status: fetchStatus.failed };
    default:
      return state;
  }
};
