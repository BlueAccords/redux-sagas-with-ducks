import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux';

import Counter from './Counter'
import ArticleList from './components/ArticleList';
import actions from './actions';
import reducer from './reducers/index'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

// helper function to just dispatch actions with no payload
const action = type => store.dispatch({type})

function render() {
  ReactDOM.render(
    // <Counter
    //   value={store.getState()}
    //   onIncrementAsync={() => store.dispatch('INCREMENT_ASYNC')}
    //   onIncrement={() => store.dispatch(actions.incrementCounter)}
    //   onDecrement={() => store.dispatch(actions.decrementCounter)} />,
    <Provider store={store}>
      <ArticleList />
    </Provider>,
    document.getElementById('root')
  )
}

render()
