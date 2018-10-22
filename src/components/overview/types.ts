import { fetchStatus } from "../reusables/fetchStatus";

export default interface OverviewState {
    status: fetchStatus;
    companyName: string;
    website: string;
    description: string;
};