import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';

import Counter from './components/Counter'
import ArticleList from './components/ArticleList';
import store from './state/configureStore';

import { actions } from './state/counter/index';


// helper function to just dispatch actions with no payload
// const action = type => store.dispatch({type})

function render() {
  ReactDOM.render(

    <Provider store={store}>
      <div>
        <Counter/>
        <ArticleList />
      </div>
    </Provider>,
    document.getElementById('root')
  )
}

render()

