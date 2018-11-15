import Vue from 'vue';
import VueProgressBar from 'vue-progressbar';

export default {
  beforeCreate() {
    if (process.client) {
      Vue.use(VueProgressBar, {
        color: '#00ab6c',
        failedColor: '#c4382c',
        thickness: '2px',
      });
    }
  },

  beforeStart({ app, router }) {
    if (process.client) {
      app.$Progress.start();

      router.beforeEach((to, from, next) => {
        app.$Progress.start();
        next();
      });

      router.afterEach(() => {
        app.$Progress.finish();
      });

      router.onError(() => {
        app.$Progress.fail();
      });
    }
  },

  routeError(error, { app }) {
    if (process.client) {
      app.$Progress.fail();
    }
  },

  ready({ app }) {
    if (process.client) {
      app.$Progress.finish();
    }
  },
};
