import { createSelector } from "reselect";
/**
 * Main selectors, we did memoize this functions
 */
const getUsers = (state) => state.user;

export default {
  getAllUsersData: createSelector(getUsers, (user) => user.allUsers.data),
  getAllUsersLoading: createSelector(getUsers, (user) => user.allUsers.loading),
};
