import * as React from "react";
import { MarketFoot } from "./styles";
import NoData from "../reusables/NoData";

export interface IMarketItem {
  mic: string;
  venueName: string;
  marketPercent: number;
}

interface IMarketsProps {
  market?: IMarketItem[];
}

const MarketFooter: React.SFC<IMarketsProps> = ({ market }) => {
  return (
    <MarketFoot>
      {market.length ? (
        market.map((item: IMarketItem, index: number) => (
          <li key={index}>
            <p>
              <strong>{item.venueName}</strong> {item.marketPercent}%
            </p>
          </li>
        ))
      ) : (
        <NoData componentName="market footer" />
      )}
    </MarketFoot>
  );
};

export default MarketFooter;
