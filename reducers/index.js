import { combineReducers } from 'redux';

import counter from './counter';
import article from './article';

export default combineReducers({
  counter,
  article
})