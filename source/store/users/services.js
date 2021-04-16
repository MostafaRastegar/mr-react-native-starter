import endpoints from '~/constants/endpoints';
import request from '~/store/request';

export default {
  getAllUsersService() {
    const url = endpoints.USERS.GET_ALL_USERS_SERVICE();
    return request.get(url);
  },
};
