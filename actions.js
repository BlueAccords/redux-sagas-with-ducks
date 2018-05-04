import actionTypes from './action-types';

const incrementCounter = function() {
  return {
    type: actionTypes.INCREMENT,
    payload: {}
  }
}

const decrementCounter = function() {
  return {
    type: actionTypes.INCREMENT,
    payload: {}
  }
}

const receiveArticles = function(articles) {
  return {
    type: actionTypes.RECEIVE_ARTICLES,
    payload: articles.data
  }
}

const requestArticles = function() {
  return {
    type: actionTypes.REQUEST_ARTICLES,
  }
}

export default {
  incrementCounter,
  decrementCounter,
  receiveArticles,
  requestArticles
}