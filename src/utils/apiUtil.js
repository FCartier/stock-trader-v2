const baseURL = "https://api.iextrading.com/1.0";

export const api = {

  getNews: symbolId =>
    fetch(`${baseURL}/stock/${symbolId}/news/last/50`).then(
      response => response.json()
    ),

  getOverview: symbolId =>
    fetch(`${baseURL}/stock/${symbolId}/company`).then(
      response => response.json()
    ),

  getChart: symbolId =>
    fetch(`${baseURL}/stock/${symbolId}/chart/5y`).then(
      response => response.json()
    ),

  getSymbols: () =>
    fetch(`${baseURL}/ref-data/symbols`).then(response =>
      response.json()
    ),

  filterChart: (symbolId, time) =>
    fetch(
      `${baseURL}/stock/${symbolId}/chart/${time}`
    ).then(response => response.json()),

  getMarket: () =>
    fetch(`${baseURL}/market`).then(response =>
      response.json()
    ),

  getKeyStats: symbolId =>
    fetch(`${baseURL}/stock/${symbolId}/quote`).then(
      response => response.json()
    ),

  getNews: symbolId =>
    fetch(`${baseURL}/stock/${symbolId}/news/last/50`).then(
      response => response.json()
    ),

  getOverview: symbolId =>
    fetch(`${baseURL}/stock/${symbolId}/company`).then(
      response => response.json()
    ),

  getPeers: symbolId =>
    fetch(`${baseURL}/stock/${symbolId}/peers`).then(
      response => response.json()
    ),

  getPrice: symbolId =>
    fetch(`${baseURL}/stock/${symbolId}/previous`).then(
      response => response.json()
    )
};
