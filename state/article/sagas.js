import { delay } from 'redux-saga'
import { put, takeEvery, all, call } from 'redux-saga/effects'
import * as actions from './actions';
import * as types from './types';
import api from './../../services/api';

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
  yield takeEvery(types.REQUEST_ARTICLES, getAllArticles);
}

// export only watcher sagas in one variable
export const sagas = [
  watchGetAllArticlesAsync
];



