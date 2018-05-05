import * as types from './types';

export const incrementCounter = function() {
  return {
    type: types.INCREMENT
  }
}

export const decrementCounter = function() {
  return {
    type: types.DECREMENT
  }
}

export const incrementCounterAsync = function() {
  return {
    type: types.INCREMENT_ASYNC
  }
}

