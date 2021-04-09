// Login
import { actionMaker } from "~/helpers/reduxHelpers";
import types from "./types";

export default {
  login: actionMaker(types.LOGIN),
};
