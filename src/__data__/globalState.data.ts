import { testData as peersTestData } from "../components/peers/__data__/peers.data";
import { GlobalState } from "../StoreTypes";

export const globalState = {
  peers: { peers: peersTestData }
} as GlobalState;
