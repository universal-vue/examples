export default {
  // UVue plugins
  plugins: [
    // Add middlewares system
    '@uvue/core/plugins/middlewares',
    // Add asyncData() process to page components
    '@uvue/core/plugins/asyncData',
    // Vuex plugin
    [
      '@uvue/core/plugins/vuex',
      {
        onHttpRequest: true,
        fetch: true,
      },
    ],
    // Catch errors
    '@uvue/core/plugins/errorHandler',
    // Clear errors on routes changes
    '@/plugins/errorClear',
    // HTTP client to get data from API
    '@/plugins/httpClient',
    // Show a progress bar on routes changes
    '@/plugins/navLoader',
    // Show a loader for SPA pages
    '@/plugins/spaLoader',
  ],
};
