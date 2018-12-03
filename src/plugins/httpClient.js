/**
 * This plugin create an axios HTTP client to do request.
 * It handles tokens too to acess to private routes on API.
 */

import Vue from 'vue';
import axios from 'axios';

export default {
  beforeCreate(context) {
    const { error, req } = context;

    const apiUrl = process.env.API_URL || 'http://localhost:8080';

    // Create axios client
    const httpClient = axios.create({
      // Change API url: depends on server side or client side
      baseURL: process.client ? '/' : apiUrl,
    });

    // Use request interceptors
    httpClient.interceptors.request.use(config => {
      let token = null;

      // Get current token in cookies
      if (process.server) {
        token = req.cookies.token;
      } else {
        token = require('js-cookie').get('token');
      }

      // If token: add header
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }

      return config;
    });

    // Use response interceptor
    httpClient.interceptors.response.use(
      response => response,
      err => {
        if (err.response) {
          const { data } = err.response;
          // Catch error and use UVue error handler plugin to display it
          return error(data.error || 'Oups!', err.response.status);
        }
        return Promise.reject(err);
      },
    );

    // Install a shortcut to http client in context
    context.http = httpClient;

    // With this we can call http client everywhere in components or Vuex actions
    Vue.use({
      install(Vue) {
        Vue.http = Vue.prototype.$http = httpClient;
      },
    });
  },
};
