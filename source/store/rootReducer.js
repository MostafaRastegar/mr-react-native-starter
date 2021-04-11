// Imports: Dependencies
import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading-bar";

// Imports: Reducers
import auth from "./auth/reducers";
import user from "./user/reducers";
// import counterReducer from "./counterReducer";

// Redux: Root Reducer
const rootReducer = combineReducers({
  auth,
  user,
  loadingBar: loadingBarReducer,

  // counterReducer: counterReducer,
});

// Exports
export default rootReducer;
