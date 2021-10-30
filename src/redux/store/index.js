import { createStore, compose, applyMiddleware } from "redux";
import reducers from "./../reducers/index";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const Store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk)),
);
