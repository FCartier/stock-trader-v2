import { Reducer } from 'redux';
import { FETCH_CHART_SUCCESS } from "./chartActions";
import ChartState from './types';

const initialState: ChartState = {
  data: []
}

export const chart: Reducer<ChartState> = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHART_SUCCESS:
    return action.payload;
    default:
      return state
  }
}