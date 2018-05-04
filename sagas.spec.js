import test from 'tape';

import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import axios from 'axios';
import { incrementAsync, getAllArticles } from './sagas';

test('getAllArticles Saga test', (assert) => {
  const gen = getAllArticles();
  const articleURL = 'https://5aeb604f046d7b0014fb6e2d.mockapi.io/api/articles'

  assert.deepEqual(
    gen.next().value,
    call(axios.get, articleURL),
    'getAllArticles Saga should call function axios.get'
  );

  assert.deepEqual(
    gen.next().value,
    call(
      (response)=> {console.log(response)},
      'response?'
    )
  );

  assert.end();
})

test('incrementAsync Saga test', (assert) => {
  const gen = incrementAsync();

  assert.deepEqual(
    gen.next().value,
    call(delay, 1000),
    'incrementAsync Saga should call function delay(1000)'
  )

  assert.deepEqual(
    gen.next().value,
    put({
      type: 'INCREMENT',
      payload: {}
      }),
    'incrementAsync Saga should dispatch INCREMENT action'
  )

  assert.deepEqual(
    gen.next(),
    { done: true, value: undefined },
    'incrementAsync saga must finish and be done'
  )

  assert.end();
})