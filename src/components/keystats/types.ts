import { fetchStatus } from "../reusables/fetchStatus";

export default interface KeyStatState {
  keystats: {
    close: number;
    low: number;
    high: number;
    open: number;
    latestVolume: number;
    week52High: number;
    week52Low: number;
    avgTotalVolume: number;
  };
  status: fetchStatus;
};
