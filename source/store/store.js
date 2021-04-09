// Imports: Dependencies
import AsyncStorage from "@react-native-community/async-storage";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import { loadingBarMiddleware } from "react-redux-loading-bar";
import thunk from "redux-thunk";
// Imports: Redux
import rootReducer from "../store/rootReducer";

// Middleware: Redux Persist Config
const persistConfig = {
  // Root?
  key: "root",
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: ["authReducer"],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: ["counterReducer"],
};

// add redux loading bar middleware
const loadingMD = loadingBarMiddleware({
  promiseTypeSuffixes: ["REQUEST", "SUCCESS", "FAILURE"],
});
// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux: Store
const store = createStore(
  persistedReducer,
  applyMiddleware(createLogger(), thunk, loadingMD)
);

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

// Exports
export { store, persistor };