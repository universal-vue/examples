export default {
  beforeCreate() {
    if (process.client) {
      import('webfontloader').then(WebFont => {
        WebFont.load({
          google: {
            families: ['Nunito:300,400,700'],
          },
        });
      });
    }
  },
};
