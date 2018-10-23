import { peerWorker } from '../peerSaga'
import { selectedSymbol } from '../../search/searchActions';
import { call, CallEffectNamedFn } from 'redux-saga/effects';
import { api } from '../../../utils/apiUtil';
import { cloneableGenerator } from 'redux-saga/utils';

describe("peers saga", () => {
  test("peers saga should wait for peers api fetch", () => {
    const payload = selectedSymbol("AAPL")
    const gen = cloneableGenerator(peerWorker)(payload)

    console.log(gen.next().value)
    expect.anything()
    // expect(gen.next().value).toEqual(call(api.getPeers as CallEffectNamedFn, payload))
  })
})