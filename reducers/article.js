import actionTypes from './../action-types';

export default function(
  state = {
    articles: {}
  },
  action) {
  switch(action.type) {
    case actionTypes.RECEIVE_ARTICLES:
      return {
        ...state,
        articles: action.payload
      }
    default:
      return state;
  }
}