import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';

import Counter from './Counter'
import ArticleList from './components/ArticleList';
import store from './state/configureStore';


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
