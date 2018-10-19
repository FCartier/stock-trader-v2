import { request } from "./apiRequestFormat"
import { websocketRequest } from "./apiWebSocketRequest"

export const api = {

  /**** Called on application load ****/
  getSymbols: () => request(`/ref-data/symbols`),
  getMarket: () => request(`/market`),

  /**** Called on symbol select ****/
  getNews: symbolId => request(`/stock/${symbolId}/news/last/50`),
  getOverview: symbolId => request(`/stock/${symbolId}/company`),
  getChart: symbolId => request(`/stock/${symbolId}/chart/5y`),
  filterChart: (symbolId, time) => request(`/stock/${symbolId}/chart/${time}`),
  getKeyStats: symbolId => request(`/stock/${symbolId}/quote`),
  getPeers: symbolId => request(`/stock/${symbolId}/peers`),
  getPrice: symbolId => request(`/stock/${symbolId}/quote`),

  /**** Price WebSocket ****/
  getPriceWebsocket: () => websocketRequest(`https://ws-api.iextrading.com/1.0/tops`),
  
  /**** Called on chart filter select ****/
  filterChart: (symbolId, time) => request(`/stock/${symbolId}/chart/${time}`),
};
