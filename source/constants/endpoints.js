const hostUrl = process.env.HOSTURL;
const userBaseUri = `https://jsonplaceholder.typicode.com`;
export default {
  CONFIGURATION: {
    GET_CONFIGURATION_SERVICE: () => `${hostUrl}/configuration/api/v1/configurations`,
  },
  USERS: {
    GET_ALL_USERS_SERVICE: () => `${userBaseUri}/users`,
  },
};
