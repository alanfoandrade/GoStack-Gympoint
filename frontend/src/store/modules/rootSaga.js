import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import provider from './provider/sagas';
import student from './student/sagas';
import plan from './plan/sagas';
import enrollment from './enrollment/sagas';
import helporder from './helporder/sagas';

export default function* rootSaga() {
  return yield all([auth, provider, student, plan, enrollment, helporder]);
}