import logger from './logger'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

export const sagaMiddleware = createSagaMiddleware()

export default applyMiddleware(thunk, logger, sagaMiddleware)