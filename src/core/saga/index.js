import { all } from "redux-saga/effects";
import { loginWatch, signupWatch } from "./../../App/store/saga";

export default function* rootSaga() {
  yield all([loginWatch(), signupWatch()]);
}
