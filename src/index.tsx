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
import { ThemeProvider } from 'emotion-theming'

export const theme = {
  textColor: 'white',
  backgroundColorTop: '#1E355E',
  backgroundColorBottom: '#16233B'
}

const store = createStore(reducer, middleware)
sagaMiddleware.run(root)

ReactDOM.render(
    <Provider store={store}>
     <ThemeProvider theme={theme}>
       <Global>
          <App />
        </Global>
     </ThemeProvider>
    </Provider>,
    document.getElementById('app')
  )