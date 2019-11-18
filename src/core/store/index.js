import rootReducer from "./../reducer";
import rootSaga from "./../saga";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";

export const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.navigator.userAgent.includes("Chrome")
      ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      : compose
  )
);

sagaMiddleware.run(rootSaga);

export default store;
