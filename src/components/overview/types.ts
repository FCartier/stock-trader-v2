import { fetchStatus } from "../reusables/fetchStatus";

export default interface OverviewState {
  overview: {
    companyName: string;
    website: string;
    description: string;
  };
  status: fetchStatus;
};
