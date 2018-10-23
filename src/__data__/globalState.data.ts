import { testData as newsTestData } from "../components/news/__data__/news.data";
import { testData as peersTestData } from "../components/peers/__data__/peers.data";
import { GlobalState } from "../StoreTypes";
import { fetchStatus } from "../components/reusables/fetchStatus";

export const globalState = {
  news: { news: newsTestData, status: fetchStatus.success },
  peers: { peers: peersTestData, status: fetchStatus.success }
} as GlobalState;
