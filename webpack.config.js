const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/[name].js',
    publicPath: '/assets/',
    library: 'ui',
    libraryTarget: 'var'
  },
  devServer: {
    bonjour: true,
    clientLogLevel: 'debug',
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 1234,
    watchContentBase: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // exclude: /(node_modules|bower_components)/,
        include: [
          path.resolve(__dirname, 'node_modules/bulma/css'),
          path.resolve(__dirname, 'src/css')
        ],
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/js'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss/,
        include: path.resolve(__dirname, 'src/scss'),
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
};
