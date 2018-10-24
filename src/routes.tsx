import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import ConnectedApp from "./ConnectedApp";
import Nav from "./Nav";

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route path="/:symbol" component={ConnectedApp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
