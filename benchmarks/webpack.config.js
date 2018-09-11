// @flow
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const path = require('path')

const appDirectory = path.resolve(__dirname)

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  context: __dirname,
  entry: './src/index',
  output: {
    path: path.resolve(appDirectory, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { module: true, localIdentName: '[hash:base64:8]' },
          },
        ],
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/react",
              "@babel/env",
              "@babel/flow",
            ],
            plugins: [
              require('@babel/plugin-proposal-object-rest-spread')
            ]
          }
        },
      },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    }),
  ],
  resolve: {
    alias: {
      'react-native': 'react-native-web',
      'uikit': path.resolve('../src'),
    },
  },
}
