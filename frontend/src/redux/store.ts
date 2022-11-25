import { createStore, applyMiddleware, compose, combineReducers } from "redux"
import thunk from "redux-thunk"
import { createWrapper } from "next-redux-wrapper"
import rootReducer from "./reducers/rootReducer"
import persistStore from "redux-persist/lib/persistStore";

const middleware = [thunk]

const makeStore = ({ isServer }: any) => {
  const store: any = createStore(rootReducer, compose(applyMiddleware(...middleware)))
  if (!isServer) {
    store.__persistor = persistStore(store); // Nasty hack
  }
  return store;
}

export const wrapper = createWrapper(makeStore, { debug: false })