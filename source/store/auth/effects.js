import { showLoading, hideLoading } from 'react-redux-loading-bar';
import authActions from './actions';

export default {
  login: (trueFalse) => {
    return async (dispatch) => {
      dispatch(showLoading());
      dispatch(authActions.login(trueFalse));
      dispatch(hideLoading());
      return trueFalse;
    };
  },
};
