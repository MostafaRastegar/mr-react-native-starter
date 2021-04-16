import { createSelector } from 'reselect';
/**
 * Main selectors, we did memoize this functions
 */
const getUsers = (state) => state.users;

export default {
  getAllUsersData: createSelector(getUsers, (users) => users.allUsers.data),
  getAllUsersLoading: createSelector(
    getUsers,
    (users) => users.allUsers.loading,
  ),
};
