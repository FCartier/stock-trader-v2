import { fetchStatus } from "../reusables/fetchStatus";

export default interface PeerState {
    peers?: string[];
    status?: fetchStatus;
}