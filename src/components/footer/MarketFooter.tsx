import React from "react";
import { MarketFoot } from "./styles"

interface IMarketItem {
  mic: string;
  venueName: string;
  marketPercent: number;
}

interface IMarketsProps {
  market: [];
}

const MarketFooter: React.SFC<IMarketsProps> = ({market}) => {
  return market.length ? (
    <div>
      <MarketFoot>
        {market.map((item: IMarketItem, index: number)  => <li key={index}><p><strong>{item.venueName}</strong>  {item.marketPercent}%</p></li>)}
      </MarketFoot>
    </div>
  ) : null;
};

export default MarketFooter;