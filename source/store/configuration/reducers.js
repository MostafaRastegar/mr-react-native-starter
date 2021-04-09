import configurationTypes from './types';

const initialState = {
  // CONFIGURATION parameters
  loading: false,
  data: null,
  error: false,
};

const configuration = (state = initialState, action) => {
  switch (action.type) {
    // CONFIGURATION requests
    case configurationTypes.GET_CONFIGURATION_REQUEST:
      return { ...state, loading: true, data: null, error: false };
    case configurationTypes.GET_CONFIGURATION_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: false };
    case configurationTypes.GET_CONFIGURATION_ERROR:
      return { ...state, loading: false, data: null, error: true };
    default:
      return state;
  }
};

export default configuration;
