/**
 * Just clear current error on route change
 */
export default {
  beforeStart({ router, error }) {
    router.beforeEach((to, from, next) => {
      error.clear();
      next();
    });
  },
};
