import path from 'path';
import { FastifyAdapter } from '@uvue/server';

export default {
  // Use custom adapter for server
  adapter: FastifyAdapter,

  // Server plugins installed
  plugins: [
    // Compress responses
    '@uvue/server/plugins/gzip',
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
    [
      '@uvue/server/plugins/static',
      {
        directory: 'dist',
        options: {
          immutable: true,
          maxAge: '1y',
          setHeaders(res, path) {
            if (/service-worker\.js/.test(path)) {
              res.setHeader('Cache-Control', 'public, max-age=0');
            }
          },
        },
      },
    ],
    // API
    './src/server/apiPlugin',
    './src/server/errors',
  ],
  // Watch for changes in these files to automatically reboot server
  watch: ['src/server/**/*.js'],
  // SPA paths: no SSR occur for these paths
  spaPaths: ['/spa'],
};
