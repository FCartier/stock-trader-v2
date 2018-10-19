export interface MarketItem {
    mic: string;
    venueName: string;
    marketPercent: number;
}
  
export interface MarketState {
   market: MarketItem[];
}