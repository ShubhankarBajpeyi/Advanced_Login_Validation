	
var webpack = require("webpack");
module.exports = {
entry: __dirname + "/main.js",
output: {
path: __dirname + "/dist/assets",
filename: "index.js"
},
devServer: {
      inline: true,
      port: 8080,
      historyApiFallback: true,
   },
module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react"
            ]
            }
         }
      ]
   }
   

}