module.exports = {
  publicPath: './',
  chainWebpack(config) {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    // set preserve whitespace
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, {limit: 4000}))
      .end()
    config.optimization.splitChunks({
      chunks: 'all',
      cacheGroups: {
        libs: {
          name: 'chunk-libs',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
        },
        components: {
          name: 'chunk-components',
          test: /[\\/]src[\\/]components[\\/]/,
          minChunks: 3,
          priority: 5,
          reuseExistingChunk: true
        },
        views: {
          name: 'chunk-views',
          test: /[\\/]src[\\/]views[\\/]/,
          minChunks: 3,
          priority: 5,
          reuseExistingChunk: true
        }
      }
    })
    config.optimization.runtimeChunk('single')
  },
  transpileDependencies: [
    'vuetify'
  ]
}
