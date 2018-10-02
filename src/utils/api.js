import { errorAction } from '../components/reusables/errorAction'

const baseURL = 'https://api.iextrading.com/1.0'

export function apiCall (info, input, fn, dispatch, time) {
  const API_URLS = {
    overview: `${baseURL}/stock/${input}/company`,
    news: `${baseURL}/stock/${input}/news/last/50`,
    chart: `${baseURL}/stock/${input}/chart/5y`,
    peer: `${baseURL}/stock/${input}/peers`,
    keystats: `${baseURL}/stock/${input}/quote`,
    price: `${baseURL}/stock/${input}/previous`,
    market: `${baseURL}/market`,
    symbols: `${baseURL}/ref-data/symbols`,
    chartFilter: `${baseURL}/stock/${input}/chart/${time}`
  }

  const URL = API_URLS[info]
  fetch(URL)
    .then(res => res.json())
    .then(json => dispatch(fn(json)))
    .catch(err => dispatch(errorAction(err)))
}
