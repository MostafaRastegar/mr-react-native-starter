import { actionMaker } from "~/helpers/reduxHelpers";
import types from "./types";

export default {
  getAllUsersRequest: actionMaker(types.GET_ALL_USERS_REQUEST),
  getAllUsersSuccess: actionMaker(types.GET_ALL_USERS_SUCCESS),
  getAllUsersFailure: actionMaker(types.GET_ALL_USERS_FAILURE),
};
