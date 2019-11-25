import { all } from "redux-saga/effects";
import { 
  loginWatch, 
  signupWatch, 
  cardWatch,
  cardGetWatch, 
  addressListWatch,
  routeWatch,
} from "./../../App/store/saga";

export default function* rootSaga() {
  yield all([
    loginWatch(), 
    signupWatch(), 
    cardWatch(),
    cardGetWatch(),
    addressListWatch(),
    routeWatch(),
  ]);
}
