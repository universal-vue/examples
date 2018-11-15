module.exports = {
  chainWebpack(chain) {
    chain.module
      .rule('html')
      .test(/\.html$/)
      .exclude.add([/index\.html/])
      .end()
      .use('html')
      .loader('html-loader')
      .options({
        minimize: true,
      });
  },
};
