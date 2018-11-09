import { createSelector } from 'reselect'
import { GlobalState } from '../../StoreTypes'

const getNewsState = (state: GlobalState) => state.news.news

const getNewsStatus = (state: GlobalState) => state.news.status

export const selectNewsState = createSelector(getNewsState, news => news.slice(0, 5))
export const selectNewsStatus = createSelector(getNewsStatus, status => status)