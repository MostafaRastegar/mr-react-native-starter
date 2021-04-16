export const actionMaker = (type) => (payload = {}) => ({ type, payload });
export const makeActionsObject = (actionName) => ({
  request: `${actionName}_REQUEST`,
  success: `${actionName}_SUCCESS`,
  failure: `${actionName}_FAILURE`,
});

export const errObject = (response) => ({
  status: response.status,
  problem: response.problem,
  data: response,
});
