export const CHART_ACTION = "CHART ACTION";

export const chartAction = payload => ({
    type: CHART_ACTION,
    payload
});

export function chartFilter(input, time) {
    return dispatch => {
      apiCall("chartFilter", input, chartAction, dispatch, time);
    };
}