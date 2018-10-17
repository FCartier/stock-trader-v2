import React from "react";
import "babel-polyfill";
import "./App.css";
import News from "./components/news";
import Overview from "./components/overview";
import KeyStats from "./components/keystats";
import Chart from "./components/chart";
import TopPeers from "./components/peers";
import MarketFooter from "./components/footer";
import Price from "./components/price";
import Search from "./components/search/Search";
import StockInfo from "./components/info"

// @ts-ignore
import * as logo from "./images/logo.png";


const App: React.SFC = () => (
  <div className="gradient">
    <div className="flexbox-container">
      <div>
        <img src={logo} alt="Adaptive Logo" className="logo" />
      </div>
    </div>

    <div className="flexbox-container searchbar-container">
      <div className="searchbar">
        <Search />
      </div>
      <div className="price-information">
        <Price />
      </div>
    </div>

    <hr />
    <StockInfo/>
    <div className="Grid Grid--gutters Grid--1of3">
      <div className="Grid-cell main">
        <div>
          <Chart />
        </div>
      </div>

      <div className="Grid-cell">
        <div>
          <News />
        </div>
      </div>
    </div>

    <div className="Grid Grid--gutters Grid--1of3">
      <div className="Grid-cell main">
        <KeyStats />
      </div>

      <div className="Grid-cell">
        <div>
          <Overview />
          <TopPeers />
        </div>
      </div>
    </div>
    <div>
      <footer className="footer">
        <MarketFooter />
      </footer>
    </div>
  </div>
);

export default App;