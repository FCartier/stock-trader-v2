import { createSelector } from "reselect"
import { GlobalState } from "../../StoreTypes"

const getChartStatus = (state: GlobalState) => state.chart.status
const getChartState = (state: GlobalState) => state.chart.chart

export const selectChartState = createSelector(getChartState, data => data)
export const selectChartStatus = createSelector(getChartStatus, status => status)