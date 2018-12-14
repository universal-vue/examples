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
        path: '/private',
        name: 'private',
        component: () => import('./views/Private.vue'),
        meta: {
          middlewares: [
            /**
             * Simple middleware to check user is already logged or not
             * If not: redirect him to login page
             */
            async ({ store, redirect }) => {
              if (!store.state.user.logged) {
                redirect('/profile?from=/private');
              }
            },
          ],
        },
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import('./views/Profile.vue'),
      },
      {
        path: '/spa',
        name: 'spa',
        component: () => import('./views/SpaPage.vue'),
      },
      /**
       * 404 - Not found error page
       * Need to be the last defined route!
       */
      {
        path: '*',
        name: 'not-found',
        component: NotFound,
      },
    ],
  });
};
