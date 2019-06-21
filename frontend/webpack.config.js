const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].bundle.js',
    publicPath: '/'
  },
  devtool: "inline-source-map",
  devServer: {
    inline: true,
    contentBase: './public',
    port: 3000,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(ts|js)x?$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', "@babel/typescript"]
          }
        }
      },
      {
        test: /\.(css|scss|sass)$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          MiniCssExtractPlugin.loader,
          'css-modules-typescript-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]__[hash:base64:5]'
              },
              sourceMap: true,
              importLoaders: 1
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.svg$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: ['babel-loader', 'react-svg-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    })
  ],
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
  }
}