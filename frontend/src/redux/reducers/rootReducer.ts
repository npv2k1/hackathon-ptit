import { combineReducers } from "redux"
import { persistReducer } from "redux-persist";
import main from "./main"
import { getPersistConfig } from "./helper";

const rootReducer = combineReducers({
  common: main
})

const persistConfig = getPersistConfig({
  key: "common",
  whitelist: ["userAddress"]
});


export default persistReducer(persistConfig, rootReducer);