import React from "react";
import { IStockInfo } from "./types";
import { SSL_OP_COOKIE_EXCHANGE } from "constants";

const StockInfo: React.SFC<IStockInfo> = ({ keystats }) => {
  const {
    primaryExchange,
    sector,
    latestUpdate,
    closeTime,
    openTime
  } = keystats;

  
  return keystats.primaryExchange ? (
    <div>
      <p>{primaryExchange}</p>
      <p>{sector}</p>
      <p>Real-Time Price as of {formatTime(latestUpdate)}</p>
      {isStockTrading(openTime, closeTime) ? <p>Market Open</p> : <p>Market Closed</p>}
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

