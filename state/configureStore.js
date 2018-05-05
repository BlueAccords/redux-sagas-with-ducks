import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'

import rootSaga from './rootSaga';
import reducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga)

export default store;