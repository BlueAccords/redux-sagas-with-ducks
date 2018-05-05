import { delay } from 'redux-saga'
import { put, takeEvery, all, call } from 'redux-saga/effects'
import * as actions from './actions';
import * as types from './types';

// worker saga: perform async task
export function* incrementAsync() {
  yield call(delay, 1000); // wrap function in call helper so we can easily test it
  yield put(actions.incrementCounter()); // dispatch INCREMENT action
  // put: an effect, pauses the saga until effect is fulfilled.
}

// watcher saga, spawns new incrementAsync task on each INCREMENT_ASYNC action
export function* watchIncrementAsync() {
  yield takeEvery(types.INCREMENT_ASYNC, incrementAsync);
}

export const sagas = [
  watchIncrementAsync
]



