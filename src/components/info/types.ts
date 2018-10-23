export interface IStockInfo {
  keystats?: {
    primaryExchange: string;
    sector: string;
    latestUpdate: number;
    openTime: number;
    closeTime: number;
  };
};
