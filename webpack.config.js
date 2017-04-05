var path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
  },
  entry: __dirname + '/index.js',
  output: {
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        loader : 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      ['~']: path.resolve(__dirname),
      containers: path.resolve(__dirname, 'containers/'),
      components: path.resolve(__dirname, 'components/')
    }
  }
}
