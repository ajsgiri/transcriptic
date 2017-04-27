var path = require ('path');
var webpack = require('webpack');

var config = {
   entry: './main.js',

   output: {
      path:__dirname +  '.',
      filename: 'index.js',
   },

   devServer: {
      inline: true,
      port: 8080
   },

   module: {
      loaders: [
        {
         test: /\.scss$/,
         loader: [
           'style-loader',
           'css-loader',
           'sass-loader'
         ]
       },
         {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',

            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;
