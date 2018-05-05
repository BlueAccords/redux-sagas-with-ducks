import { combineReducers } from 'redux';

import article from './article';
import counter from './counter';

export default combineReducers({
  article,
  counter
});