import { actionMaker } from "~/helpers/reduxHelpers";
import types from "./types";

export default {
  getConfigurationRequest: actionMaker(types.GET_CONFIGURATION_REQUEST),
  getConfigurationSuccess: actionMaker(types.GET_CONFIGURATION_SUCCESS),
  getConfigurationError: actionMaker(types.GET_CONFIGURATION_ERROR),
};
