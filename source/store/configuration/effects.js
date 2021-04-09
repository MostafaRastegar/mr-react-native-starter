import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { configurationServices, configurationActions } from '..';

export default {
  getConfigurationRequest: () => {
    return async dispatch => {
      dispatch(showLoading());
      dispatch(configurationActions.getConfigurationRequest());
      const response = await configurationServices.getConfigurationService();
      const { ok, data } = response;
      if (ok) {
        dispatch(configurationActions.getConfigurationSuccess(data));
        dispatch(hideLoading());
        return data;
      }
      dispatch(configurationActions.getConfigurationError());
      dispatch(hideLoading());
      return false;
    };
  },
};
