import React, { Component } from 'react'
import 'babel-polyfill';
import './App.css'
import News from './components/news'
import Overview from './components/overview'
import KeyStats from './components/keystats/KeyStats.tsx'
import Chart from './components/chart'
import TopPeers from './components/peers'
import MarketFooter from './components/footer/MarketFooter.tsx'
import Price from './components/price/Price.tsx'
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
          <Chart/>
        </div>
      </div>

      <div className='Grid-cell'>
        <div>
          <News/>
        </div>
      </div>
    </div>

    <div className='Grid Grid--gutters Grid--1of3'>
      <div className='Grid-cell main'>
        <KeyStats keystats={props.keystats} />
      </div>

      <div className='Grid-cell'>
        <div>
          <Overview/>
          <TopPeers/>
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
    loading: state.loading,
    market: state.market,
    price: state.price
  }),
  null
)(App)
