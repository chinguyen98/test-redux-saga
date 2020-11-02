import { put, takeEvery } from 'redux-saga/effects';
import { incrementCounter, setLoading } from '../actions/counter.action';

const delay = (ms) => {
  return new Promise(res => setTimeout(res, ms));
}

export function* incrementAsync() {
  yield put(setLoading(true));
  yield delay(3000);
  yield put(incrementCounter());
  yield put(setLoading(false));
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

export default watchIncrementAsync;