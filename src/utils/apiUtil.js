const baseURL = "https://api.iextrading.com/1.0";

export const api = {
  getNews: symbolId =>
    fetch(`https://api.iextrading.com/1.0/stock/${symbolId}/news/last/50`).then(
      response => response.json()
    ),

  getOverview: symbolId =>
    fetch(`https://api.iextrading.com/1.0/stock/${symbolId}/company`).then(
      response => response.json()
    ),

  getChart: symbolId =>
    fetch(`https://api.iextrading.com/1.0/stock/${symbolId}/chart/5y`).then(
      response => response.json()
    ),

  getSymbols: () =>
    fetch(`https://api.iextrading.com/1.0/ref-data/symbols`).then(response =>
      response.json()
    ),

  filterChart: (symbolId, time) =>
    fetch(
      `https://api.iextrading.com/1.0/stock/${symbolId}/chart/${time}`
    ).then(response => response.json()),

  getMarket: () =>
    fetch(`https://api.iextrading.com/1.0/market`).then(response =>
      response.json()
    ),

  getKeyStats: symbolId =>
    fetch(`https://api.iextrading.com/1.0/stock/${symbolId}/quote`).then(
      response => response.json()
    ),

  getNews: symbolId =>
    fetch(`https://api.iextrading.com/1.0/stock/${symbolId}/news/last/50`).then(
      response => response.json()
    ),

  getOverview: symbolId =>
    fetch(`https://api.iextrading.com/1.0/stock/${symbolId}/company`).then(
      response => response.json()
    )
};
