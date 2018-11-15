import Vue from 'vue';
import axios from 'axios';

export default {
  beforeCreate(context) {
    const { error, req } = context;

    const httpClient = axios.create({
      baseURL: process.client ? '/' : 'http://localhost:8080/',
    });

    httpClient.interceptors.request.use(config => {
      let token = null;
      if (process.server) {
        token = req.cookies.token;
      } else {
        token = require('js-cookie').get('token');
      }

      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }

      return config;
    });

    httpClient.interceptors.response.use(
      response => response,
      err => {
        if (err.response) {
          const { data } = err.response;
          return error(data.error || 'Oups!', err.response.status);
        }
        return Promise.reject(err);
      },
    );

    context.http = httpClient;

    Vue.use({
      install(Vue) {
        Vue.http = Vue.prototype.$http = httpClient;
      },
    });
  },
};
