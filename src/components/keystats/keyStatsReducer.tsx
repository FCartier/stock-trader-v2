  import { Reducer } from 'redux';
  import { KEY_STAT_ACTION, KeyStatAction } from "./keyStatsActions.tsx";
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
  
  export const keystats: Reducer<KeyStatState, KeyStatAction> = (state = initialState, action) => {
    switch (action.type) {
      case KEY_STAT_ACTION:
        return { ...action.keyStat }
      default:
        return state
    }
  }