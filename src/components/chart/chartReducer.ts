import { Reducer } from 'redux';
import { CHART_ACTION, ChartAction } from "./chartActions";
import ChartState from './types';

const initialState: ChartState = {
  data: []
}

export const chart: Reducer<ChartState, ChartAction> = (state = initialState, action) => {
  switch (action.type) {
    case CHART_ACTION:
      return action.chart
    default:
      return state
  }
}