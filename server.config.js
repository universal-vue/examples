export default {
  plugins: [
    [
      '@uvue/server/plugins/cookie',
      {
        secret: 'secret',
      },
    ],
    './src/server/plugin',
    '@uvue/server/plugins/static',
    '@uvue/server/plugins/gzip',
    '@uvue/server/plugins/modernBuild',
  ],
  watch: ['src/server/**/*.js'],
};
