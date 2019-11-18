import { all } from "redux-saga/effects";
import { loginWatch } from "./../../App/store/saga";

export default function* rootSaga() {
  yield all([loginWatch()]);
}
