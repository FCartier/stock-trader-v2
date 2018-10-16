import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore } from "redux"
import { Provider } from 'react-redux'
import { reducer } from './reducer'
import middleware from './middleware'
import { root } from './rootSaga'  
import { sagaMiddleware } from './middleware'
import Global from './globalStyles'


const store = createStore(reducer, middleware)
sagaMiddleware.run(root)

ReactDOM.render(
    <Provider store={store}>
       <Global>
          <App />
        </Global>
    </Provider>,
    document.getElementById('app')
  )