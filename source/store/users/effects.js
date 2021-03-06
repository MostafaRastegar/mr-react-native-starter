import { showLoading, hideLoading } from 'react-redux-loading-bar';
import usersActions from './actions';
import usersServices from './services';
import { errObject } from '~/helpers/reduxHelpers';

export default {
  getAllUsersRequest: () => async (dispatch) => {
    dispatch(showLoading());
    dispatch(usersActions.getAllUsersRequest());

    const response = await usersServices.getAllUsersService();
    const { data } = response;

    if (data) {
      dispatch(usersActions.getAllUsersSuccess(data));
      dispatch(hideLoading());
      return data;
    }

    dispatch(usersActions.getAllUsersFailure(errObject(response)));
    dispatch(hideLoading());
    return false;
  },
};
