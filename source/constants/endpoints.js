const hostUrl = process.env.HOSTURL;
export default {
  CONFIGURATION: {
    GET_CONFIGURATION_SERVICE: () =>
      `${hostUrl}/configuration/api/v1/configurations`,
  },
};
