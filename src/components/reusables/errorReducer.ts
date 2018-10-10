import { ERROR_ACTION, ErrorState, ErrorAction } from "./errorAction";
import { Reducer } from 'redux';

const initialState: ErrorState = {
  message: '',
  stack: ''
}

export const error: Reducer<ErrorState, ErrorAction> = (state = initialState, action) => {
  switch (action.type) {
    case ERROR_ACTION:
      return { ...action.error }
    default:
      return state
  }
}