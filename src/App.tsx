import * as React from "react";
import News from "./components/news";
import Overview from "./components/overview";
import KeyStats from "./components/keystats";
import TopPeers from "./components/peers";
import MarketFooter from "./components/footer";
import StockInfo from "./components/info";
import Chart from "./components/chart";

import { Gradient, Logo, ThemeChangeButton } from "./globalStyles";

// @ts-ignore
import * as logo from "./images/logo.png";
import { ThemeProvider } from "emotion-theming";
import { darkTheme, lightTheme } from "./themes";
import "./grid.css";
import { selectedSymbol, SelectedSymbol } from "./components/search/searchActions";

interface AppProps {
  selectedSymbol?: (input: string) => SelectedSymbol;
  symbol?: string
}

class App extends React.Component<AppProps> {
  
  public render() {
    return (
      <div>
       <div className="main-container">
              <div className="flexbox-container info-container">
                <StockInfo />
              </div>
              <div className="Grid Grid--gutters Grid--1of3">
                <div className="Grid-cell main">
                  <Chart />
                </div>

                <div className="Grid-cell">
                  <News />
                </div>
              </div>

              <div className="Grid Grid--gutters Grid--1of3">
                <div className="Grid-cell main">
                  <KeyStats />
                </div>

                <div className="Grid-cell">
                  <Overview />
                  <TopPeers />
                </div>
              </div>
            </div>
          <footer className="footer">
            <MarketFooter />
          </footer>
        </div>
    ) 
  }
}

export default App;
