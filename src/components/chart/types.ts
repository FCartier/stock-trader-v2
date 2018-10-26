import { fetchStatus } from "../reusables/fetchStatus";

export interface ChartData { input: string, time: string };

export default interface ChartState {
  chart: ChartData[];
  status: fetchStatus;
};
