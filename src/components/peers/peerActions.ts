import { Action, ActionCreator } from 'redux';

export const FETCH_PEER_SUCCESS = "FETCH_PEER_SUCCESS";
export type FETCH_PEER_SUCCESS = typeof FETCH_PEER_SUCCESS;

export interface PeerAction extends Action {
    type: typeof FETCH_PEER_SUCCESS
    payload: string[]
};

export const PeerActionCreator: ActionCreator<PeerAction> = payload => ({
    type: FETCH_PEER_SUCCESS,
    payload
}); 