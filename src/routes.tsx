import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ConnectedApp from "./ConnectedApp";
import Nav from "./Nav";
import getData from "./utils/GetData"

import News from "./components/news";
import Overview from "./components/overview"
import KeyStats from "./components/keystats";
import TopPeers from "./components/peers";
import Chart from "./components/chart"

import IncorrectURL from "./components/reusables/IncerrectURL"

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/:symbol" component={ConnectedApp} />
          <Route path="/:symbol/overview" component={getData(Overview)} />
          <Route path="/:symbol/chart" component={getData(Chart)} />
          <Route path="/:symbol/peers" component={getData(TopPeers)} />
          <Route path="/:symbol/keystats" component={getData(KeyStats)} />
          <Route path="/:symbol/news" component={getData(News)} />
          <Route component={IncorrectURL}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
};
