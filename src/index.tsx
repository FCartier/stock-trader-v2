import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore } from "redux"
import { Provider } from 'react-redux'
import { reducer } from './reducer'
import middleware from './middleware'

const store = createStore(reducer, middleware)

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )