export const appSelector = state => 
  state.appReducer;

export const isLoginSelector = state => 
  appSelector(state).isLogin.isAuth;

export const isLoginLoadSelector = state => 
  appSelector(state).isLogin.loader;

export const isLoginErrorSelector = state => 
  appSelector(state).isLogin.error;


export const isCardSelector = state => 
  appSelector(state).payment.isCard;

export const cardDataSelector = state => 
  appSelector(state).payment.card;

export const cardLoadSelector = state => 
  appSelector(state).payment.loader;

export const addressesSelector = state => 
  appSelector(state).address.addresses;

export const routeSelector = state => 
  appSelector(state).route.route;