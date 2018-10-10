import ChartState from './types';
import { Action, ActionCreator } from 'redux'

export const CHART_ACTION = "CHART ACTION";
export type CHART_ACTION = typeof CHART_ACTION;
export const FILTER_CHART = "FILTER CHART";
export type FILTER_CHART = typeof FILTER_CHART;

export interface ChartAction extends Action {
  type: typeof CHART_ACTION
  chart: ChartState
}

export interface FilterAction extends Action {
    type: typeof FILTER_CHART
    payload: {input: string, time: string}
  }

export const chartAction: ActionCreator<ChartAction> = (chart: ChartState) => ({
  type: CHART_ACTION,
  chart
})

export const chartFilter: ActionCreator<FilterAction> = (input, time) => ({
    type: FILTER_CHART, 
    payload: {input, time}
})  