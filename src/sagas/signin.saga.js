import { takeLatest } from "redux-saga/effects";
import { signInApi } from "../api/auth.api";
import * as jwt from 'jsonwebtoken';

function* signIn({ payload: { email, password } }) {
  const response = yield signInApi({ email, password });
  const data = yield jwt.decode(response.accessToken);
  console.log(response, data);
}

function* watchSignIn() {
  yield takeLatest('SIGN_IN', signIn);
}

export default watchSignIn;