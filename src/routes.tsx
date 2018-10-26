import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import getData from "./utils/GetData"

import App from "./App"

import News from "./components/news";
import Overview from "./components/overview"
import KeyStats from "./components/keystats";
import TopPeers from "./components/peers";
import Chart from "./components/chart"

import IncorrectURL from "./components/reusables/IncerrectURL"
import StyledContainer from "./components/reusables/styledContainer"

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route exact={true} path="/" />
          <Route exact={true} path="/:symbol" component={getData(App)} />
          <Route path="/:symbol/overview" component={getData(Overview, StyledContainer)} />
          <Route path="/:symbol/chart" component={getData(Chart, StyledContainer)} />
          <Route path="/:symbol/peers" component={getData(TopPeers, StyledContainer)} />
          <Route path="/:symbol/keystats" component={getData(KeyStats, StyledContainer)} />
          <Route path="/:symbol/news" component={getData(News, StyledContainer)} />
          <Route component={IncorrectURL}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

