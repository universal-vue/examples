export default {
  plugins: [
    '@uvue/core/plugins/middlewares',
    '@uvue/core/plugins/asyncData',
    [
      '@uvue/core/plugins/vuex',
      {
        onHttpRequest: true,
        fetch: true,
      },
    ],
    '@uvue/core/plugins/errorHandler',
    '@/plugins/errorClear',
    '@/plugins/httpClient',
    '@/plugins/navLoader',
  ],
};
