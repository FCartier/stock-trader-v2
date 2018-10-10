import { Action, ActionCreator } from 'redux'
import { NewsList, NewsItem } from './types';
  
export const NEWS_ACTION = "NEWS ACTION";
export type NEWS_ACTION = typeof NEWS_ACTION;
  
export interface NewsAction extends Action {
  type: NEWS_ACTION
  news: NewsItem[]
}
  
export const newsAction: ActionCreator<NewsAction> = (news: NewsItem[]) => ({
  type: NEWS_ACTION,
  news
})
  