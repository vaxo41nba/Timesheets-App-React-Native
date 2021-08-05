import { all } from 'redux-saga/effects';

import userSagas from './modal/saga';

export default function* rootSaga() {
  yield all([userSagas()]);
}
