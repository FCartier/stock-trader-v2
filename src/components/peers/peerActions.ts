import PeerState from './types'
import { Action, ActionCreator } from 'redux'

export const PEER_ACTION = "PEER ACTION";
export type PEER_ACTION = typeof PEER_ACTION;

export interface PeerAction extends Action {
   type: typeof PEER_ACTION, 
   peers: PeerState
}

export const peerAction:ActionCreator<PeerAction> = (peers: PeerState) => ({
    type: PEER_ACTION,
    peers
});
