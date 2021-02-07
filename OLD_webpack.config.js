import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
  devtool: 'source-map',
  publicPath: "/assets/",
  entry: [
    path.resolve(__dirname, './client/src/index.js')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, './client/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new MiniCssExtractPlugin(),
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
