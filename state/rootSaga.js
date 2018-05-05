import { sagas as articleSagas } from './article';
import { sagas as counterSagas } from './counter';
import { takeEvery, takeLatest, fork, all } from 'redux-saga/effects';


const allSagas = [
  ...articleSagas,
  ...counterSagas
]


// start all sagas in parallel
export default function* rootSaga() {
  yield all(allSagas.map((saga) => fork(saga)));
}