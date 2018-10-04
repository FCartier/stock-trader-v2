export const FETCH_CHART_SUCCESS = "FETCH_CHART_SUCCESS";
export const CHART_ACTION = "CHART_ACTION"
export const FILTER_CHART = "FILTER_CHART"

export const chartFilter = (input, time) => ({
    type: FILTER_CHART, 
    payload: {input, time}
})  