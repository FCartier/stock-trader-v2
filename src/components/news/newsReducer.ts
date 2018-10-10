import { Reducer } from 'redux';
import { FETCH_NEWS_SUCCESS } from "./newsActions";
import { NewsList, NewsItem } from './types';

const initialState: NewsItem[] = []
type NewsState = typeof initialState

export const news: Reducer<NewsState> = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_SUCCESS:
        return action.payload;
    default:
      return state
  }
}