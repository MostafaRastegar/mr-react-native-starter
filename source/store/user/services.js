import endpoints from '~/constants/endpoints';
import request from '~/store/request';

// export default {
//   getConfigurationService() {
//     const url = endpoints.USERS.GET_ALL_USERS_SERVICE();
//     return request.get(url, null, {
//       headers: {
//         "App-Name": "KD_ENV",
//       },
//     });
//   },
// };
export default {
  getAllUsersService() {
    const url = endpoints.USERS.GET_ALL_USERS_SERVICE();
    return request.get(url);
  },
};
