import * as React from "react";
import News from "./components/news";
import Overview from "./components/overview";
import KeyStats from "./components/keystats";
import TopPeers from "./components/peers";
import MarketFooter from "./components/footer";
import StockInfo from "./components/info";
import Chart from "./components/chart";
import "./grid.css";
import { selectedSymbol, SelectedSymbol } from "./components/search/searchActions";

interface AppProps {
  selectedSymbol?: (input: string) => SelectedSymbol;
  symbol?: string
}

class App extends React.Component<AppProps> {
  public shouldRenderApp(symbol: string){
    if (symbol) {
      this.props.selectedSymbol(symbol)
      return true;
    }
  }
  
  public render() {
    const { symbol } = this.props
    return this.shouldRenderApp(symbol) ? (
      <div>
        <div className="flexbox-container">
          <StockInfo />
        </div>
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
        <footer className="footer">
          <MarketFooter />
        </footer>
      </div>
    ) : null
  }
}

export default App;
