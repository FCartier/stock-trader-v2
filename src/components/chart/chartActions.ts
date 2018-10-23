import { Action, ActionCreator } from 'redux'

export const FILTER_CHART = "FILTER CHART";
export type FILTER_CHART = typeof FILTER_CHART;
export const FETCH_CHART_SUCCESS = "FETCH_CHART_SUCCESS";
export type FETCH_CHART_SUCCESS = typeof FETCH_CHART_SUCCESS;

export interface FilterAction extends Action {
    type: typeof FILTER_CHART
    payload: { input: string, time: string }
}

export const chartFilter: ActionCreator<FilterAction> = (input: string, time: string) => ({
    type: FILTER_CHART,
    payload: { input, time }
})  