import { put, takeLatest } from "redux-saga/effects";
import { signInApi } from "../api/auth.api";
import * as jwt from 'jsonwebtoken';
import { setLoading, setUser } from "../actions/user.action";

function* signIn({ payload: { email, password } }) {
  yield put(setLoading({ isLoading: true }));
  const response = yield signInApi({ email, password });
  const data = yield jwt.decode(response.accessToken);
  const { firstname, lastname } = data;
  yield put(setUser({
    firstName: firstname,
    lastName: lastname,
    isLoading: false,
  }));
}

function* watchSignIn() {
  yield takeLatest('SIGN_IN', signIn);
}

export default watchSignIn;