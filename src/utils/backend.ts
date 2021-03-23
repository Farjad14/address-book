import axios from "axios";

export const REACT_APP_BASE_URL = "https://randomuser.me/api/";

const axiosInstance = axios.create({
  baseURL: REACT_APP_BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    // set default headers
    config.headers.Accept = "application/json";
    config.headers["Content-Type"] = "application/json; charset=utf-8";

    return config;
  },
  (err) => Promise.reject(err)
);

export default axiosInstance;
