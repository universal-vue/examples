export default {
  // UVue plugins
  plugins: [
    // Add middlewares system
    [
      '@uvue/core/plugins/middlewares',
      {
        middlewares: [
          /**
           * If user come to this application we check is already logged.
           * Result will be stored in Vuex to be used anywhere in Vue application.
           */
          async ({ store, $http }) => {
            try {
              const { data } = await $http.get('/api/profile');
              store.commit('setUser', data);
            } catch (err) {
              // Nothing here...
            }
          },
        ],
      },
    ],
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
    // Web fonts loader
    '@/plugins/webFonts',
  ],
};
