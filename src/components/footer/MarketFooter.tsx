import * as React from "react";
import { MarketFoot } from "./styles";
import { fetchStatus } from "../reusables/fetchStatus";

export interface IMarketItem {
  mic: string;
  venueName: string;
  marketPercent: number;
}

interface IMarketsProps {
  market?: IMarketItem[];
  status?: fetchStatus;
}

const MarketFooter: React.SFC<IMarketsProps> = ({ market, status }) => {
  return status !== fetchStatus.pending ? (
    <MarketFoot>
      {status === fetchStatus.success ? (
        market.map((item: IMarketItem, index: number) => (
          <li key={index}>
            <p>
              <strong>{item.venueName}</strong> {item.marketPercent}%
            </p>
          </li>
        ))
      ) : (
        "No market footer available"
      )}
    </MarketFoot>
  ) : null;
};

export default MarketFooter;
