export const appSelector = state => 
  state.appReducer;

export const isLoginSelector = state => 
  appSelector(state).isLogin.isAuth;

export const isCardSelector = state => 
  appSelector(state).payment.card;
