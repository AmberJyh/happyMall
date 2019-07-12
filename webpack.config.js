const path = require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
module.exports = {
  entry: './src/app.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath:'/dist/',   
    filename: 'js/app.js'
  },
  //引用别名，以防路径更改导致的引用不正确
  resolve:{
    alias:{
      page     : path.resolve(__dirname, 'src/page'),
      component: path.resolve(__dirname, 'src/component'),
    }
  },
  //
  devServer: {
    // contentBase: './dist'
    port:8086,
    historyApiFallback:{
      index:'./dist/index.html'
     },
    },
  plugins: [
    //处理html文件
      new HtmlWebpackPlugin({
          template:'./src/index.html',
          favicon:'./favicon.ico'
      }),
      //独立CSS文件
      new ExtractTextPlugin("css/[name].css"),
      //提出公共模块
      new webpack.optimize.CommonsChunkPlugin({
        name:'common',
        filename:'js/base.js'
      })
    ],
    module: {
        rules: [
          //react语法的处理
          {
            test: /\.m?jsx$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['env','react']
              }
            },
          },
           //css文件的处理
          {
            test: /\.css$/i,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: "css-loader"
            })
          },
          //sass文件的处理
          {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: ['css-loader', 'sass-loader']
            })
          },
          //图片的处理
          {
            test: /\.(png|jpg|gif)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192,
                  name:'resource/[name].[ext]'
                }
              }
            ]
          },
          //字体图标的配置
          {
                   test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                   use: [
                    {
                      loader: 'url-loader',
                      options: {
                        limit: 8192,
                        name:'resource/[name].[ext]'
                      }
                    }
                  ]
                 },

        ]
      },
      
};