import types from './types';

const initialState = {
  loggedIn: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    // CONFIGURATION requests
    case types.LOGIN:
      return {
        // State
        ...state,
        // Redux Store
        loggedIn: action.payload,
      };
    default:
      return state;
  }
};

export default auth;
