var path = require('path');

module.exports = {
  entry:{
    index: './src/index.ts'
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, 'lib'),
    filename: '[name].js'
  },
  devtool: 'source-map',
  context: __dirname,
  target: 'web',
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        include: [path.resolve(__dirname, "src")],
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  }
};
