import { Action, ActionCreator } from 'redux'
import KeyStatState from './types';
  
export const KEY_STAT_ACTION = "KEY_STAT_ACTION ACTION";
export type KEY_STAT_ACTION = typeof KEY_STAT_ACTION;
  
export interface KeyStatAction extends Action {
  type: typeof KEY_STAT_ACTION
  keyStat: KeyStatState
}
  
export const keyStatsAction: ActionCreator<KeyStatAction> = (keyStat: KeyStatState) => ({
  type: KEY_STAT_ACTION,
  keyStat
})