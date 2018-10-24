import { fetchStatus } from "../reusables/fetchStatus";

export interface ChartData { input: string, time: string };

export interface ChartEventData {
  date: string;
  iexId: string;
  isEnabled: boolean;
  name: string;
  symbol: string;
  type: string;
}

export default interface ChartState {
  chart: ChartData[];
  status: fetchStatus;
};
