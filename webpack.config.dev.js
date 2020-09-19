import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
export default {
  devtool: 'inline-source-map',
  entry: [
    path.resolve(__dirname, './client/src/index.js')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, './client/src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/src/index.html',
      inject: true
    })
  ],
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
}
