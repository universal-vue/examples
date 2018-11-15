export default {
  ready() {
    if (process.client) {
      document.querySelector('.spa-loading').remove();
    }
  },
};
