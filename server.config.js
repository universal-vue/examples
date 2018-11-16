export default {
  // Server plugins installed
  plugins: [
    // Parse cookies
    [
      '@uvue/server/plugins/cookie',
      {
        secret: 'secret',
      },
    ],
    // Serve static files
    '@uvue/server/plugins/static',
    // Compress responses
    '@uvue/server/plugins/gzip',
    // API
    './src/server/apiPlugin',
    // Server error page
    './src/server/errorPlugin',
  ],
  // Watch for changes in these files to automatically reboot server
  watch: ['src/server/**/*.js'],
  // SPA paths: no SSR occur for these paths
  spaPaths: ['/spa'],
};
