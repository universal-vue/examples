export default {
  plugins: [
    [
      '@uvue/server/plugins/cookie',
      {
        secret: 'secret'
      }
    ],
    '@uvue/server/plugins/static',
    '@uvue/server/plugins/gzip',
    '@uvue/server/plugins/modernBuild'
  ]
}