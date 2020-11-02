import { all, put, takeEvery } from 'redux-saga/effects';

export function* helloSaga() {
  console.log('lo lo!');
}

const delay = (ms) => {
  return new Promise(res => setTimeout(res, ms));
}

export function* incrementAsync() {
  yield delay(1000);
  yield put({ type: 'INCREMENT' });
}

export function* increment() {
  yield put({ type: 'INCREMENT' });
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

export function* watchIncrement() {
  yield takeEvery('INCREMENT', increment)
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrement(),
    watchIncrementAsync(),
  ]);
}