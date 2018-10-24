import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import ConnectedApp from "./ConnectedApp";
import Nav from "./Nav";
import Overview from "./components/overview"

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route path="/:symbol" component={ConnectedApp} />
          <Route path="/:symbol/overview" component={Overview} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
