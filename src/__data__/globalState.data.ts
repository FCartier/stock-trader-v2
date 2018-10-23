import { testData as peersTestData } from "../components/peers/__data__/peers.data";
import { GlobalState } from "../StoreTypes";
import { fetchStatus } from "../components/reusables/fetchStatus";

export const globalState = {
  peers: { peers: peersTestData, status: fetchStatus.success }
} as GlobalState;
