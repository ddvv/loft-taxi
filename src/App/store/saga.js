import { takeLatest, call, put } from "redux-saga/effects";
import { actions, tokenAuth } from "./duck";
import * as constants from "./constants";
import { 
  fetchLogIn, 
  fetchSignUp, 
  fetchGetCard,
  fetchCard,
  fetchAddressList,
  fetchRoute,
} from "./../../core/utils/api";

/**> authorizationSaga */
export function* fetchLoginWorker(action) {
  const { payload } = action;
  try {
    // result - результат вызова fetchLogIn
    const result = yield call(fetchLogIn, payload);
    // put диспатчит экшн
    const { success } = result;
    if (success) {
      yield put(actions.logInSuccess(result));
    } else {
      yield put(actions.logInFailure(result));
    }
  } catch (error) {
    yield put(actions.logInFailure());
  }
}

export function* loginWatch() {
  yield takeLatest(constants.LOG_IN, fetchLoginWorker);
}
/**< authorizationSaga */

/**> registrationSaga */
export function* fetchSignupWorker(action) {
  const { payload } = action;
  try {
    const result = yield call(fetchSignUp, payload);
    const { success } = result;    
    if (success) {
      yield put(actions.signUpSuccess(result));
    } else {
      yield put(actions.signUpFailure(result));
    }
  } catch (error) {
    yield put(actions.signUpFailure());
  }
}

export function* signupWatch() {
  yield takeLatest(constants.SIGN_UP, fetchSignupWorker);
}
/**< registrationSaga */

/**> paymentSaga */
export function* fetchCardWorker(action) {
  const { payload } = action;
  try {
    const result = yield call(fetchCard, payload);
    
    const { success } = result;    
    if (success) {
      yield put(actions.cardSuccess(result));
    } else {
      yield put(actions.cardFailure(result));
    }
  } catch (error) {
    yield put(actions.cardFailure());
  }
}

export function* cardWatch() {
  yield takeLatest(constants.CARD, fetchCardWorker);
}


export function* fetchGetCardWorker(action) {
  // const { payload } = action;
  try {
    const result = yield call(fetchGetCard, tokenAuth);
    
    const { success } = result;    
    if (success === false) {
      yield put(actions.getCardFailure(result));
    } else {
      yield put(actions.getCardSuccess(result));
    }
  } catch (error) {
    yield put(actions.getCardFailure());
  }
}

export function* cardGetWatch() {
  yield takeLatest(constants.GET_CARD, fetchGetCardWorker);
}
/**< paymentSaga */

/**>addressListSaga */
export function* fetchAddressListWorker(action) {
  const { payload } = action;
  try {
    const result = yield call(fetchAddressList, payload);
    
    yield put(actions.getAddressSuccess(result));
  } catch (error) {
    yield put(actions.getAddressFailure());
  }
}

export function* addressListWatch() {
  yield takeLatest(constants.GET_ADDRESS, fetchAddressListWorker);
}
/**<addressListSaga */

/**>routeSaga */
export function* fetchRouteWorker(action) {
  const { payload } = action;
  console.log(payload);
  try {
    const result = yield call(fetchRoute, payload);
    
    yield put(actions.routeSuccess(result));
  } catch (error) {
    yield put(actions.routeFailure());
  }
}

export function* routeWatch() {
  yield takeLatest(constants.ROUTE, fetchRouteWorker);
}
/**<routeSaga */