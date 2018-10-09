import OverviewState from './types';
import { Action, ActionCreator } from 'redux'

export const OVERVIEW_ACTION = "OVERVIEW ACTION";
export type OVERVIEW_ACTION = typeof OVERVIEW_ACTION;

export interface OverviewAction extends Action {
  type: typeof OVERVIEW_ACTION
  overview: OverviewState
}

export const overviewAction: ActionCreator<OverviewAction> = (overview: OverviewState) => ({
  type: OVERVIEW_ACTION,
  overview
})
