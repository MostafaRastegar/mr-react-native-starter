import endpoints from "~/constants/endpoints";
import request from "~/store/request";

export default {
  getConfigurationService() {
    const url = endpoints.CONFIGURATION.GET_CONFIGURATION_SERVICE();
    return request.get(url, null, {
      headers: {
        "App-Name": "KD_ENV",
      },
    });
  },
};
