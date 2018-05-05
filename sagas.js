import { delay } from 'redux-saga'
import { put, takeEvery, all, call } from 'redux-saga/effects'
import actions from './actions/index';
import actionTypes from './actions/action-types';
import api from './api';

// worker saga: perform async task
export function* incrementAsync() {
  yield call(delay, 1000); // wrap function in call helper so we can easily test it
  yield put(actions.incrementCounter()); // dispatch INCREMENT action
  // put: an effect, pauses the saga until effect is fulfilled.
}

// watcher saga, spawns new incrementAsync task on each INCREMENT_ASYNC action
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

export function* getAllArticles() {
  const articleURL = 'https://5aeb604f046d7b0014fb6e2d.mockapi.io/api/articles'

  try {
    const data = yield call(api.fetchArticles, articleURL);
    yield put(actions.receiveArticles(data));
  } catch(err) {
    // dispatch error action here
    console.log(err);
  }


}

// Watches for specific action, and then executes the related saga
export function* watchGetAllArticlesAsync() {
  yield takeEvery(actionTypes.REQUEST_ARTICLES, getAllArticles);
}

export function* helloSaga() {
  console.log('Hello world');
}

// only saga to be exported/exposed
// starts all sagas at once
export default function* rootSaga() {
  // yield all starts all generators in parallel
  yield all([
    helloSaga(),
    watchIncrementAsync(),
    watchGetAllArticlesAsync()
  ]);
}

