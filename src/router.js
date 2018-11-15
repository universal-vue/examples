import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import NotFound from './views/NotFound.vue';

Vue.use(Router);

export default () => {
  return new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/async-data',
        name: 'async-data',
        component: () => import('./views/AsyncData.vue'),
      },
      {
        path: '/vuex',
        name: 'vuex',
        component: () => import('./views/Vuex.vue'),
      },
      {
        path: '/server-error',
        name: 'server-error',
        component: () => import('./views/ServerError.vue'),
      },
      {
        path: '/error',
        name: 'error',
        component: () => import('./views/Error.vue'),
      },
      {
        path: '*',
        name: 'not-found',
        component: NotFound,
      },
    ],
  });
};
