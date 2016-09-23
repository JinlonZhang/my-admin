// var webpack = require('webpack');
// module.exports = {
//   entry: './entry.js',
//   output: {
//     path: __dirname,
//     filename: 'bundle.js'
//   },
//   module: {
//     loaders: [
//       {test: /\.css$/, loader: 'style!css'}
//     ]
//   },
//   plugins: [
//     new webpack.BannerPlugin('This file is created by zjl606')
//   ]
// }


var webpack = require('webpack');
module.exports = {
  // entry: './entry.js',
  // entry: {
  //   main: './src/main.js'
  // },
  entry: {
      main: './src/main.js'
      //vendors: ['react','jquery']
  },
  output: {
    path: './dist',
    publicPath: './dist',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass?sourceMap'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?sourceMap'
      }
    ]
  },

  // babel: {
  //   presets: ['es2015', 'stage-0', 'react'],
  //   plugins: ['transform-runtime', ["antd", {"style": "css"}]]
  // },

  plugins: [
    new webpack.BannerPlugin('This file is created by zjl606'),
    new webpack.ProvidePlugin({
      $: "jquery",
      jquery: "jquery",
      "window.jQuery": "jquery"
    })
    // new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js', Infinity) // 这是第三方库打包生成的文件
  ]
}

// if (process.env.NODE_ENV !== 'production') {
//   module.exports.plugins [
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: JSON.stringify('production')
//       }
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       compress: {
//         warnings: false
//       }
//     }),
//     new webpack.optimize.OccurenceOrderPlugin()
//   ]
// } else {
//   module.exports.devtool = '#source-map'
// }
