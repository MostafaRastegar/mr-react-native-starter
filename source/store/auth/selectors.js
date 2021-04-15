import { createSelector } from 'reselect';
/**
 * Main selectors, we did memoize this functions
 */
const getAuth = (state) => state.auth;

export default {
  getLogin: createSelector(getAuth, (auth) => auth.loggedIn),
};
