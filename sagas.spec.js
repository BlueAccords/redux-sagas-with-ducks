import test from 'tape';

import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import axios from 'axios';
import * as articleSagas from './state/article/sagas';
import { actions as articleActions } from './state/article';
import * as counterSagas from './state/counter/sagas';
import { actions as counterActions } from './state/counter';
import api from './services/api';

const mockArticles = {
  data: {
    id: 1,
    title: 'test-name',
    body: 'test-body'
  }
}

test('getAllArticles Saga test', (assert) => {
  const gen = articleSagas.getAllArticles();
  const articleURL = 'https://5aeb604f046d7b0014fb6e2d.mockapi.io/api/articles'

  assert.deepEqual(
    gen.next().value,
    call(api.fetchArticles , articleURL),
    'getAllArticles Saga should call function axios.get'
  );

  assert.deepEqual(
    gen.next().value,
    put(articleActions.receiveArticles()),
    'getAllArticles Saga should dispatch RECEIVE_ARTICLES action'
  );

  assert.deepEqual(
    gen.next(),
    { done: true, value: undefined },
    'getAllArticles saga must finish and be done'
  )

  assert.end();
})

test('incrementAsync Saga test', (assert) => {
  const gen = counterSagas.incrementAsync();

  assert.deepEqual(
    gen.next().value,
    call(delay, 1000),
    'incrementAsync Saga should call function delay(1000)'
  )

  assert.deepEqual(
    gen.next().value,
    put(counterActions.incrementCounter()),
    'incrementAsync Saga should dispatch INCREMENT action'
  )

  assert.deepEqual(
    gen.next(),
    { done: true, value: undefined },
    'incrementAsync saga must finish and be done'
  )

  assert.end();
})