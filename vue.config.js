const webpack = require('webpack');

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

    chain.plugin('DefinePluginHeroku').use(webpack.DefinePlugin, [
      {
        'process.env.API_URL': JSON.stringify(process.env.API_URL),
      },
    ]);
  },
};
