module.exports = {
  devtool: 'inline-source-map',
  entry: __dirname + '/app.jsx',
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
  }
}
