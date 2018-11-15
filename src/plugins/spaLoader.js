export default {
  ready() {
    if (process.client) {
      const loader = document.querySelector('.spa-loading');
      if (loader) {
        loader.remove();
      }
    }
  },
};
