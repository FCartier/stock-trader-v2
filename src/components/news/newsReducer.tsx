import { Reducer } from 'redux';
import { NEWS_ACTION, NewsAction } from "./newsActions.tsx";
import { NewsList, NewsItem } from './types';

const initialState: NewsItem[] = []
type NewsState = typeof initialState

export const news: Reducer<NewsState, NewsAction> = (state = initialState, action) => {
  switch (action.type) {
    case NEWS_ACTION:
      return [ ...action.news ]
    default:
      return state
  }
}