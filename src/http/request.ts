import axios from 'axios';

const request = axios.create({
  baseURL: 'http://httpbin.org/get',
});

request.interceptors.request.use(
  function (config) {
    // 处理token
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    // 处理服务端异常
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default request;
