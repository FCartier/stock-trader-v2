import React, { Component } from 'react'
import './App.css'
import News from './components/news/News'
import Overview from './components/overview/Overview'
import KeyStats from './components/keystats/KeyStats'
import ChartContainer from './components/chart/ChartContainer'
import TopPeers from './components/peers/TopPeers'
import MarketFooter from './components/footer/MarketFooter'
import Price from './components/price/Price'
import Search from './components/search/Search'
import { connect } from 'react-redux'
import * as logo from './images/logo.png'

const App = props => (
  <div className='gradient'>
    <div className='flexbox-container'>
      <div>
        <img src={logo} alt='Adaptive Logo' className='logo' />
      </div>
    </div>

    <div className='flexbox-container searchbar-container'>
      <div className='searchbar'>
        <Search />
      </div>
      <div className='price-information'>
        <Price price={props.price} />
      </div>
    </div>

    <hr />

    <div className='Grid Grid--gutters Grid--1of3'>
      <div className='Grid-cell main'>
        <div>
          <ChartContainer chart={props.chart} loading={props.loading} />
        </div>
      </div>

      <div className='Grid-cell'>
        <div>
          <News news={props.news} />
        </div>
      </div>
    </div>

    <div className='Grid Grid--gutters Grid--1of3'>
      <div className='Grid-cell main'>
        <KeyStats keystats={props.keystats} />
      </div>

      <div className='Grid-cell'>
        <div>
          <Overview overview={props.overview} />
          <TopPeers toppeers={props.toppeers} />
        </div>
      </div>
    </div>
    <div>
      <footer className='footer'>
        <MarketFooter market={props.market} />
      </footer>
    </div>
  </div>
)

export default connect(
  state => ({
    input: state.input,
    error: state.error,
    keystats: state.keystats,
    overview: state.overview,
    news: state.news,
    chart: state.chart,
    toppeers: state.toppeers,
    loading: state.loading,
    market: state.market,
    price: state.price
  }),
  null
)(App)