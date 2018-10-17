import React from "react";
import { IStockInfo } from "./types";
import { StockInfoBox, stockInfo, LastUpdate, MarketStatus } from "./styles"

const StockInfo: React.SFC<IStockInfo> = ({ keystats }) => {
  const {
    primaryExchange,
    sector,
    latestUpdate,
    closeTime,
    openTime
  } = keystats;

  
  return keystats.primaryExchange ? (
    <div className={stockInfo}>
        <StockInfoBox>{primaryExchange}</StockInfoBox>
        <StockInfoBox>{sector}</StockInfoBox>
       
        {isStockTrading(openTime, closeTime) ? <MarketStatus>Market Open</MarketStatus> : <MarketStatus>Market Closed</MarketStatus>}
        <LastUpdate>Real-Time Price as of {formatTime(latestUpdate)}</LastUpdate>
    </div>
  ) : null;
};


function formatTime(time: number) {
  const date = new Date(time)
  return date.toISOString()
}

function isStockTrading(openTime: number, closeTime: number){
  const currentTime = Math.round((new Date()).getTime())
  
  const open = formTime(openTime)
  const close = formTime(closeTime)
  const current = formTime(currentTime)

  if (current > open && current < close) {
     return true;
  }
}

function formTime(input: number) {
  const date = new Date(input);
  const hour = date.getHours();
  const minute = date.getMinutes();
  return (hour+(minute/60))
}

export default StockInfo;

