import { fetchStatus } from "../reusables/fetchStatus";

export interface MarketItem {
  mic: string;
  venueName: string;
  marketPercent: number;
}

export interface MarketState {
  market: MarketItem[];
  status: fetchStatus;
}
