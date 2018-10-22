import * as React from "react";
import { MarketFoot } from "./styles"

export interface IMarketItem {
  mic: string;
  venueName: string;
  marketPercent: number;
}

interface IMarketsProps {
  market?: IMarketItem[];
}

const MarketFooter: React.SFC<IMarketsProps> = ({ market }) => {
  return market.length ? (
      <MarketFoot>
        {market.map((item: IMarketItem, index: number) => <li key={index}><p><strong>{item.venueName}</strong>  {item.marketPercent}%</p></li>)}
      </MarketFoot>
  ) : null;
};

export default MarketFooter;