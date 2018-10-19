import { request } from "./apiRequestFormat"

export const api = {

  /**** Called on application load ****/
  getSymbols: () => request(`/ref-data/symbols`),
  getMarket: () => request(`/market`),

  /**** Called on symbol select ****/
  getNews: (symbolId: string) => request(`/stock/${symbolId}/news/last/50`),
  getOverview: (symbolId: string) => request(`/stock/${symbolId}/company`),
  getChart: (symbolId: string) => request(`/stock/${symbolId}/chart/5y`),
  getKeyStats: (symbolId: string) => request(`/stock/${symbolId}/quote`),
  getPeers: (symbolId: string) => request(`/stock/${symbolId}/peers`),
  getPrice: (symbolId: string) => request(`/stock/${symbolId}/quote`),

  
  /**** Called on chart filter select ****/
  filterChart: (symbolId: string, time: string) => request(`/stock/${symbolId}/chart/${time}`),
};
