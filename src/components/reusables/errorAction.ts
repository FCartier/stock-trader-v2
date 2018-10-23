import { Action, ActionCreator } from 'redux';

export const ERROR_ACTION = "ERROR_ACTION";
export type ERROR_ACTION = typeof ERROR_ACTION;

export interface ErrorState {
    message: string;
    stack: string;
}

export interface ErrorAction extends Action {
  type: typeof ERROR_ACTION
  error: ErrorState
}

export const errorAction: ActionCreator<ErrorAction> = (error: ErrorState) => ({
  type: ERROR_ACTION,
  error
})
