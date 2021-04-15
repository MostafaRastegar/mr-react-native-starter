// Imports: Dependencies
import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import { loadingBarMiddleware } from 'react-redux-loading-bar';
import thunk from 'redux-thunk';
// Imports: Redux
import rootReducer from './rootReducer';

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});
// Middleware: Redux Persist Config
const persistConfig = {
  // Root?
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: ['authReducer'],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: ['counterReducer'],
};

// add redux loading bar middleware
const loadingMD = loadingBarMiddleware({
  promiseTypeSuffixes: ['REQUEST', 'SUCCESS', 'FAILURE'],
});
// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux: Store
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk, loadingMD)));

// Middleware: Redux Persist Persister
const persistor = persistStore(store);

// Exports
export { store, persistor };
