import Constants from 'expo-constants';

const { HOSTURL } = Constants.manifest.extra;

export default {
  CONFIGURATION: {
    GET_CONFIGURATION_SERVICE: () =>
      `${HOSTURL}/configuration/api/v1/configurations`,
  },
  USERS: {
    GET_ALL_USERS_SERVICE: () => `${HOSTURL}/users`,
  },
};
