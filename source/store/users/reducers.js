import types from './types';

const initialState = {
  allUsers: {
    loading: false,
    data: null,
    error: false,
  },
};

const users = (state = initialState, action) => {
  switch (action.type) {
    // users requests
    case types.GET_ALL_USERS_REQUEST:
      return {
        ...state,
        allUsers: { loading: true, data: null, error: false },
      };
    case types.GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        allUsers: { loading: false, data: action.payload, error: false },
      };
    case types.GET_ALL_USERS_FAILURE:
      return {
        ...state,
        allUsers: { loading: false, data: null, error: true },
      };
    default:
      return state;
  }
};

export default users;
