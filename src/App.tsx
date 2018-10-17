import React from "react";
import "babel-polyfill";
import News from "./components/news";
import Overview from "./components/overview";
import KeyStats from "./components/keystats";
import Chart from "./components/chart";
import TopPeers from "./components/peers";
import MarketFooter from "./components/footer";
import Price from "./components/price";
import Search from "./components/search/Search";
import { Gradient } from "./globalStyles";
import { Logo } from "./globalStyles";
import * as logo from "./images/logo.png";
import { ThemeProvider } from 'emotion-theming'
import { darkTheme, lightTheme } from './themes'
import { ThemeChangeButton } from './globalStyles'
import "./grid.css";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: true,
      theme: darkTheme
    };
  }

  handleClick() {
    const isDark = !this.state.isDark;
    this.setState({
      isDark,
      theme: isDark ? darkTheme : lightTheme
    });
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <Gradient>
          <div className="flexbox-container">
            <div>
              <Logo src={logo} alt="Adaptive Logo" />
              <ThemeChangeButton onClick={() => this.handleClick()}>Change Theme</ThemeChangeButton>
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
        </Gradient>
      </ThemeProvider>
    );
  }
}

export default App;
