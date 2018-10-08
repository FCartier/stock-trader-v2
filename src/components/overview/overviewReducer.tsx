import { Reducer } from 'redux';
import { OVERVIEW_ACTION, OverviewAction } from "./overviewActions.tsx";
import OverviewState from './types';

const initialState: OverviewState = {
  companyName: '',
  website: '',
  description: ''
}

export const overview: Reducer<OverviewState, OverviewAction> = (state = initialState, action) => {
  switch (action.type) {
    case OVERVIEW_ACTION:
      return { ...action.overview }
    default:
      return state
  }
}