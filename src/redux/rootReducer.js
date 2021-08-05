import { combineReducers } from 'redux';

import modal from './modal/reducer';
import workers from './workers/reducer';
import swap from './swap/reducer';
import vacation from './vacation/reducer';

const reducers = {
  approve_reject: modal,
  workers,
  swap,
  vacation,
};

export const reducer = combineReducers(reducers);
