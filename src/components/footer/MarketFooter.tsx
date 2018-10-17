import React from "react";

export interface IMarketItem {
  mic: string;
  venueName: string;
  marketPercent: number;
}

interface IMarketsProps {
   market?: [];
}

const MarketFooter: React.SFC<IMarketsProps> = ({ market }) => {
  return market.length ? (
    <div>
      <ul className="market-foot">
        {market.map((item: IMarketItem, index: number) => <li key={index}><p><strong>{item.venueName}</strong>  {item.marketPercent}%</p></li>)}
      </ul>
    </div>
  ) : null;
};

export default MarketFooter;

export function sum(a: number, b: number): number {
  return a + b;
}