import * as types from './types';

export default function(
  state = {
    articles: {}
  },
  action) {
  switch(action.type) {
    case types.RECEIVE_ARTICLES:
      return {
        ...state,
        articles: action.payload.data
      }
    default:
      return state;
  }
}