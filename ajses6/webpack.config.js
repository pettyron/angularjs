const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
  entry: {
    app: ['babel-polyfill', './src/app/app.js']
  },
  output: {
    filename: '[name].build.js',
    path: path.resolve(__dirname, 'src', 'app', 'build')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(['css-loader', 'sass-loader?includePaths[]=' + path.resolve(__dirname, 'node_modules')])
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].build.css'
    })
  ]
}

if (process.env.NODE_ENV === 'development') {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new BrowserSyncPlugin({
        server: './',
        browser: 'chrome.exe',
        open: true,
        notify: false,
        files: ['*.html', './src'],
        injectChanges: true,
        reloadDelay: 500,
        watch: true
    })
  ])
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
