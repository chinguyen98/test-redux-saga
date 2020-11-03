import { all, call } from 'redux-saga/effects';
import watchIncrementAsync from './increment.saga';
import watchSignIn from './signin.saga';

export default function* rootSaga() {
  yield all([
    call(watchIncrementAsync),
    call(watchSignIn),
  ]);
}