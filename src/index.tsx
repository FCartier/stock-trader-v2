import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./reducer";
import middleware from "./middleware";
import { root } from "./rootSaga";
import { sagaMiddleware } from "./middleware";
import Global from "./globalStyles";
import AppRoutes from "./routes";
import { Gradient } from "./globalStyles";
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from 'emotion-theming';
import { darkTheme, lightTheme } from './themes';

const store = createStore(reducer, middleware);
sagaMiddleware.run(root);

ReactDOM.render(
  <Provider store={store}>
    <Global>
      <ThemeProvider theme={darkTheme}>
      <Gradient>
        <Router>
          <div>
            <AppRoutes />
          </div>
        </Router> 
      </Gradient>
      </ThemeProvider>
    </Global>
  </Provider>,
  document.getElementById("app")
);
