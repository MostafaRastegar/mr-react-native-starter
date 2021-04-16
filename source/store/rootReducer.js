// Imports: Dependencies
import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';

// Imports: Reducers
import users from './users/reducers';

// Redux: Root Reducer
const rootReducer = combineReducers({
  users,
  loadingBar: loadingBarReducer,
});

// Exports
export default rootReducer;
