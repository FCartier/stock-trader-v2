import React from "react";
import { IStockInfo } from "./types";

import { StockInfoBox, stockInfo, LastUpdate, MarketStatus, List, Item, link } from "./styles"
import { isStockTrading } from "./utils/marketStatus"
import { Link } from "react-router-dom"


const StockInfo: React.SFC<IStockInfo> = ({ keystats }) => {
  const {
    primaryExchange,
    sector,
    latestUpdate,
    closeTime,
    openTime, 
    symbol
  } = keystats;


  return keystats.primaryExchange ? (
    <div className={stockInfo}>
      <div>
        {primaryExchange && <StockInfoBox>{primaryExchange}</StockInfoBox>}
        {sector && <StockInfoBox>{sector}</StockInfoBox>}
        {isStockTrading(openTime, closeTime) ? <MarketStatus>Market Open</MarketStatus> : <MarketStatus>Market Closed</MarketStatus>}
        <LastUpdate>Real-Time Price as of {formatTime(latestUpdate)}</LastUpdate>
        <List>
          <Item>
            <Link className={link} to={`${symbol}/chart`}>
            Chart
            </Link>
          </Item>
          <Item>
             <Link className={link} to={`${symbol}/overview`}>
               Overview
              </Link>
          </Item>
          <Item>
            <Link className={link} to={`${symbol}/keystats`}>
              KeyStats
            </Link>
          </Item>
          <Item>
            <Link className={link} to={`${symbol}/news`}>
              News
            </Link>
          </Item>
          <Item>
            <Link className={link} to={`${symbol}/peers`}>
              Peers
            </Link>
          </Item>
        </List>
      </div>
    </div>
  ) : null;
};

function formatTime(time: number) {
  const date = new Date(time);
  return date.toISOString();
}

export default StockInfo;
