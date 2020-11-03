import { put, takeLatest } from "redux-saga/effects";
import { signInApi } from "../api/auth.api";
import * as jwt from 'jsonwebtoken';
import { setUser } from "../actions/user.action";

function* signIn({ payload: { email, password } }) {
  const response = yield signInApi({ email, password });
  const data = yield jwt.decode(response.accessToken);
  const { firstname, lastname } = data;
  console.log(firstname, lastname);
  yield put(setUser({
    firstName: firstname,
    lastName: lastname,
  }));
}

function* watchSignIn() {
  yield takeLatest('SIGN_IN', signIn);
}

export default watchSignIn;