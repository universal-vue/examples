import path from 'path';
import { FastifyAdapter } from '@uvue/server';

export default {
  // Use custom adapter for server
  adapter: FastifyAdapter,

  // Server plugins installed
  plugins: [
    // Server error page
    [
      '@uvue/server/plugins/serverError',
      {
        path: path.join(__dirname, 'src', 'server', 'error.html'),
      },
    ],
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
  ],
  // Watch for changes in these files to automatically reboot server
  watch: ['src/server/**/*.js'],
  // SPA paths: no SSR occur for these paths
  spaPaths: ['/spa'],
};
