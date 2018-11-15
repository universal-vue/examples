export default {
  beforeStart({ router, error }) {
    router.beforeEach((to, from, next) => {
      error.clear();
      next();
    });
  },
};
