const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader",
          }, {
            loader: "css-loader",
          }, {
            loader: "sass-loader",
            options: {
              includePaths: ["src/index.scss"]
            }
          }
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};

// const path = require('path');
// const webpack = require('webpack');

// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

// const nodeENV = process.env.NODE_ENV || 'production';

// const target = './dist';
// const extractSCSS = new ExtractTextPlugin('app.css');

// module.exports = {
//   // context: path.resolve(__dirname, './src'),
//   // entry: {
//   //   app: './main.js',
//   // },
//   // output: {
//   //   filename: 'app.js',
//   //   path: path.resolve(__dirname, target),
//   // },
//   // devServer: {
//   //   contentBase: path.resolve(__dirname, target),
//   // },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: [/node_modules/],
//         use: [{
//           loader: 'babel-loader',
//         }],
//       },
//       {
//         test: /\.scss$/,
//         use: ExtractTextPlugin.extract({
//           publicPath: target,
//           fallback: 'style-loader',
//           use: [
//             {
//               loader: 'css-loader',
//               options: {
//                 minimize: true,
//                 sourceMap: true,
//               },
//             },
//             {
//               loader: 'sass-loader',
//               options: {
//                 minimize: true,
//                 sourceMap: true,
//               },
//             },
//           ],
//         }),
//       },
//     ],
//   },
//   plugins: [
//     new UglifyJsPlugin({
//       uglifyOptions: {
//         compress: { warnings: false },
//         output: { comments: false },
//         sourceMap: true,
//       },
//     }),
//     new webpack.DefinePlugin({
//       'process.env': { NODE_ENV: JSON.stringify(nodeENV) },
//     }),
//     extractSCSS,
//   ],
// };
