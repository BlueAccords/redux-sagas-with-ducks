import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import App from './views/App';


// helper function to just dispatch actions with no payload
// const action = type => store.dispatch({type})

function render() {
  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  )
}

render()

