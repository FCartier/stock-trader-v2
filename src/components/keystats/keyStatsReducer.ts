  import { Reducer } from 'redux';
  import { FETCH_KEYSTATS_SUCCESS } from "./keyStatsActions";
  import KeyStatState from './types';
  
  const initialState: KeyStatState = {
    close: 0,
    low: 0,
    high: 0,
    open: 0,
    latestVolume: 0,
    week52High: 0,
    week52Low: 0,
    avgTotalVolume: 0,
  }
  
  export const keystats: Reducer<KeyStatState> = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_KEYSTATS_SUCCESS:
        return action.payload
      default:
        return state
    }
  }