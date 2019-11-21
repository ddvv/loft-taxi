// combineReducers - оборачивает отдельные reduser
import { combineReducers } from "redux";
import { createAction } from "redux-actions";
// достаем actions
import * as constants from "./constants";

const isAuth = JSON.parse(localStorage.getItem("isAuth"));

const initialState = {
  isAuth: false, // статус авторизации
  loader: false, // показывать прелодер или нет
  success: {} // для логина и пароля
};

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

  signUp: createAction(constants.SIGN_UP),
  signUpSuccess: createAction(constants.SIGN_UP_SUCCESS),
  signUpFailure: createAction(constants.SIGN_UP_FAILURE),
};

// редьюсер isLogin
const isLogin = (state = initialState, action) => {
  switch (action.type) {
  case constants.CHECK_IS_LOGIN:
    if (isAuth) {
      return { ...state, isAuth: true };
    } else {
      return { ...state, isAuth: false };
    }

  case constants.LOG_IN:
    return { ...state, loader: true };

  case constants.LOG_IN_SUCCESS:
    localStorage.setItem("isAuth", JSON.stringify(true));
    return { ...state, isAuth: true, loader: false };

  case constants.LOG_IN_FAILURE:
    return { ...state, loader: false };

  default:
    return state;
  }
};

const signupInitialState = {
  isAuth: false, // статус авторизации
  loader: false, // показывать прелодер или нет
  success: {} // для логина и пароля
};

const signUp = payload => {
  return {
    type: constants.LOG_IN,
    payload
  };
};

// редьюсер isSignup
const isSignup = (state = signupInitialState, action) => {
  switch (action.type) {
  case constants.SIGN_UP:
    return { ...state, loader: true };

  case constants.SIGN_UP_SUCCESS:
    return { ...state, isAuth: true, loader: false };

  case constants.SIGN_UP_FAILURE:
    return { ...state, loader: false };

  default:
    return state;
  }
};

// собираем редьюсеры в один
const appReducer = combineReducers({ isLogin, isSignup });

export default appReducer;
