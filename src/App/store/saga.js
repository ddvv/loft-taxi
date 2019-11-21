import { takeLatest, call, put } from "redux-saga/effects";
import { actions } from "./duck";
import * as constants from "./constants";
import { fetchLogIn, fetchSignUp } from "./../../core/utils/api";

export function* fetchLoginWorker(action) {
  const { payload } = action;
  try {
    // result - результат вызова fetchLogIn
    const result = yield call(fetchLogIn, payload);
    // put диспатчит экшн
    yield put(actions.logInSuccess(result));
  } catch (error) {
    yield put(actions.logInFailure());
  }
}

export function* loginWatch() {
  yield takeLatest(constants.LOG_IN, fetchLoginWorker);
}

export function* fetchSignupWorker(action) {
  const { payload } = action;
  try {
    const result = yield call(fetchSignUp, payload);
    yield put(actions.signUpSuccess(result));
  } catch (error) {
    yield put(actions.signUpFailure());
  }
}

export function* signupWatch() {
  yield takeLatest(constants.SIGN_UP, fetchSignupWorker);
}
