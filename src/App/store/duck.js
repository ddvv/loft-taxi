// combineReducers - оборачивает отдельные reduser
import { combineReducers } from "redux";
import { createAction } from "redux-actions";
// достаем actions
import * as constants from "./constants";

// достаем статус авторизации из локального хранилища
const isAuth = JSON.parse(localStorage.getItem("isAuth"));
export const tokenAuth = JSON.parse(localStorage.getItem("tokenAuth"));

const initialState = {
  isAuth: false, // статус авторизации
  loader: false, // показывать прелодер или нет
  success: {}, // для данных ответа
  error: "",
};

const initialStatePayment = {
  loader: false,
  isCard: false,
  success: {}, 
  card: {}, 
};

const initialStateAddress = {
  loader: false,
  addresses: [], 
};

const initialStateRoute = {
  loader: false,
  route: [],
}

const logIn = payload => {
  return {
    type: constants.LOG_IN,
    payload
  };
};

// создаем экшены
export const actions = {
  checkIsLogin: createAction(constants.CHECK_IS_LOGIN),
  
  logIn: createAction(constants.LOG_IN),
  logInSuccess: createAction(constants.LOG_IN_SUCCESS),
  logInFailure: createAction(constants.LOG_IN_FAILURE),
  logOut: createAction(constants.LOG_OUT),

  signUp: createAction(constants.SIGN_UP),
  signUpSuccess: createAction(constants.SIGN_UP_SUCCESS),
  signUpFailure: createAction(constants.SIGN_UP_FAILURE),

  card: createAction(constants.CARD),
  cardSuccess: createAction(constants.CARD_SUCCESS),
  cardFailure: createAction(constants.CARD_FAILURE),
  getCard: createAction(constants.GET_CARD),
  getCardSuccess: createAction(constants.GET_CARD_SUCCESS),
  getCardFailure: createAction(constants.GET_CARD_FAILURE),

  getAddress: createAction(constants.GET_ADDRESS),
  getAddressSuccess: createAction(constants.GET_ADDRESS_SUCCESS),
  getAddressFailure: createAction(constants.GET_ADDRESS_FAILURE),
  
  routeDelete: createAction(constants.ROUTE_DELETE),
  route: createAction(constants.ROUTE),
  routeSuccess: createAction(constants.ROUTE_SUCCESS),
  routeFailure: createAction(constants.ROUTE_FAILURE),
};

/**>
 * reducers
 */

const isLogin = (state = initialState, action) => {
  switch (action.type) {
    
  case constants.CHECK_IS_LOGIN:
    if (isAuth) {
      return { ...state, isAuth: true };
    } else {
      return { ...state, isAuth: false };
    }
  case constants.LOG_OUT:
    localStorage.setItem("isAuth", JSON.stringify(false));
    return { ...state,  isAuth: false};

  case constants.LOG_IN:
    return { ...state, loader: true };

  case constants.LOG_IN_SUCCESS:
    localStorage.setItem("isAuth", JSON.stringify(true));
    localStorage.setItem("tokenAuth", JSON.stringify(action.payload.token));
    return { ...state, isAuth: true, loader: false, error: "" };

  case constants.LOG_IN_FAILURE:
    return { ...state, loader: false, error: action.payload.error };

  case constants.SIGN_UP:
    return { ...state, loader: true };

  case constants.SIGN_UP_SUCCESS:
    return { ...state, isAuth: true, loader: false, error: "" };

  case constants.SIGN_UP_FAILURE:
    return { ...state, loader: false, error: action.payload.error };

  default:
    return state;
  }
};

const payment = (state = initialStatePayment, action) => {
  switch (action.type) {
  case constants.GET_CARD:
    return { ...state, loader: true };

  case constants.GET_CARD_SUCCESS:
    return { ...state, loader: false, isCard: true, card: action.payload};

  case constants.GET_CARD_FAILURE:
    return { ...state, loader: false };

  case constants.CARD:
    return { ...state, loader: true };

  case constants.CARD_SUCCESS:
    return { ...state, loader: false, isCard: true };

  case constants.CARD_FAILURE:
    return { ...state, loader: false };

  default:
    return state;
  }
};

const address = (state = initialStateAddress, action) => {
  switch (action.type) {
  case constants.GET_ADDRESS:
    return { ...state, loader: true };

  case constants.GET_ADDRESS_SUCCESS:
    return { ...state, loader: false, addresses: action.payload.addresses};

  case constants.GET_ADDRESS_FAILURE:
    return { ...state, loader: false };

  default:
    return state;
  }
};

const route = (state = initialStateRoute, action) => {
  switch (action.type) {
  case constants.ROUTE_DELETE:
    return { ...state, route: [] };

  case constants.ROUTE:
    return { ...state, loader: true };

  case constants.ROUTE_SUCCESS:
    return { ...state, loader: false, route: action.payload};

  case constants.ROUTE_FAILURE:
    return { ...state, loader: false };

  default:
    return state;
  }
};

/**<
 * reducers
 */

// собираем редьюсеры в один
const appReducer = combineReducers({ isLogin, payment, address, route });

export default appReducer;
