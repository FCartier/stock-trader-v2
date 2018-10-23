import React from "react";
import { IStockInfo } from "./types";
import { StockInfoBox, stockInfo, LastUpdate, MarketStatus } from "./styles";
import { isStockTrading } from "./utils/marketStatus";

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
      {primaryExchange && <StockInfoBox>{primaryExchange}</StockInfoBox>}
      {sector && <StockInfoBox>{sector}</StockInfoBox>}

      {isStockTrading(openTime, closeTime) ? <MarketStatus>Market Open</MarketStatus> : <MarketStatus>Market Closed</MarketStatus>}
      <LastUpdate>Real-Time Price as of {formatTime(latestUpdate)}</LastUpdate>
    </div>
  ) : null;
};

function formatTime(time: number) {
  const date = new Date(time)
  return date.toISOString()
};

export default StockInfo;
