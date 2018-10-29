import { testData as chartTestData } from "../components/chart/__data__/chart.data";
import { testData as keystatsTestData } from "../components/keystats/__data__/keyStats.data";
import { testData as newsTestData } from "../components/news/__data__/news.data";
import { testData as overviewTestData } from "../components/overview/__data__/overview.data";
import marketTestData from "../components/footer/__data__/marketFooter.data";
import { testData as peersTestData } from "../components/peers/__data__/peers.data";
import { priceData } from "../components/price/__data__/price.data";
import { GlobalState } from "../StoreTypes";
import { fetchStatus } from "../components/reusables/fetchStatus";

export const globalState = {
  chart: {chart: chartTestData, status: fetchStatus.success},
  keystats: {keystats: keystatsTestData, status: fetchStatus.success},
  news: { news: newsTestData, status: fetchStatus.success },
  overview: {overview: overviewTestData, status: fetchStatus.success},
  market: {market: marketTestData, status: fetchStatus.success},
  peers: { peers: peersTestData, status: fetchStatus.success },
  price: priceData
} as GlobalState;
