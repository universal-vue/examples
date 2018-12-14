import Vue from 'vue';
import VueProgressBar from 'vue-progressbar';

export default {
  beforeCreate() {
    if (process.client) {
      // Setup plugin
      Vue.use(VueProgressBar, {
        color: '#00ab6c',
        failedColor: '#c4382c',
        thickness: '2px',
      });
    }
  },

  beforeStart({ app, router }) {
    if (process.client) {
      // On boot start progress
      app.$Progress.start();

      // On route change start progress
      router.beforeEach((to, from, next) => {
        app.$Progress.start();
        next();
      });

      // On route rendered: stop
      router.afterEach(() => {
        app.$Progress.finish();
      });

      // On route error: fail
      router.onError(() => {
        app.$Progress.fail();
      });

      // On redirect: stop
      app.$on('router.redirect', () => {
        app.$Progress.finish();
      });
    }
  },

  catchError({ app }) {
    if (process.client) {
      app.$Progress.fail();
    }
  },

  // On route error: fail
  routeError({ app }) {
    if (process.client) {
      app.$Progress.fail();
    }
  },

  // When all is ready: stop
  ready({ app }) {
    if (process.client) {
      app.$Progress.finish();
    }
  },
};
