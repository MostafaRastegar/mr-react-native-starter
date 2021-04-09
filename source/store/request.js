import axios from "axios";
// import LocalStorageService from "./services/storage/localstorageservice";
// import router from "./router/router";
const instanceAxios = axios.create();

// LocalstorageService
const localStorageService = {
  accessToken: "accessToken",
  refreshToken: "refreshToken",
  getAccessToken: function () {
    return this.accessToken;
  },
  getRefreshToken: function () {
    return this.refreshToken;
  },
  setToken: function (token) {
    this.refreshToken = token;
    return token;
  },
};

// Add a request interceptor
instanceAxios.interceptors.request.use(
  (config) => {
    const token = localStorageService.getAccessToken();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    // config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

//Add a response interceptor

instanceAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      originalRequest.url === "http://13.232.130.60:8081/v1/auth/token"
    ) {
      //  router.push('/login');
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorageService.getRefreshToken();
      return instanceAxios
        .post("/auth/token", {
          refresh_token: refreshToken,
        })
        .then((res) => {
          if (res.status === 201) {
            localStorageService.setToken(res.data);
            instanceAxios.defaults.headers.common["Authorization"] =
              "Bearer " + localStorageService.getAccessToken();
            return axios(originalRequest);
          }
        });
    }
    return Promise.reject(error);
  }
);

export default instanceAxios;
