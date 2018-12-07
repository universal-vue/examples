const webpack = require('webpack');

module.exports = {
  pwa: {
    name: 'UVue',
    themeColor: '#ffffff',
    msTileColor: '#333333',
    workboxOptions: {
      templatedUrls: {
        '/': '/',
      },
      runtimeCaching: [
        // Cache Google fonts
        {
          urlPattern: /https:\/\/fonts.(googleapis|gstatic).com\/(.*)/,
          handler: 'cacheFirst',
          options: {
            cacheName: 'googleapis',
            cacheableResponse: { statuses: [0, 200] },
          },
        },
      ],
    },
  },

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
