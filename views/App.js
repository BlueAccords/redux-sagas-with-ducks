
import React from 'react'
import { Provider } from 'react-redux';

import Counter from './containers/Counter'
import ArticleList from './containers/ArticleList';
import store from './../state/configureStore';
import { actions } from './../state/counter/index';


// helper function to just dispatch actions with no payload
// const action = type => store.dispatch({type})

class App extends React.Component {
  render() {
    return (
    <Provider store={store}>
      <div>
        <Counter/>
        <ArticleList />
      </div>
    </Provider>
    )
  }
}


export default App;

