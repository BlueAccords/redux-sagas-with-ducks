import * as types from './types';

export const receiveArticles = function(articles) {
  return {
    type: types.RECEIVE_ARTICLES,
    payload: articles
  }
}

export const requestArticles = function() {
  return {
    type: types.REQUEST_ARTICLES,
  }
}
