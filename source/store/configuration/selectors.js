import { createSelector } from 'reselect';
/**
 * Main selectors, we did memoize this functions
 */
const getConfiguration = state => state.configuration;

export default {
  getConfigurationData: createSelector(
    getConfiguration,
    configuration => configuration.data,
  ),
};
