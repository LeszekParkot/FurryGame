const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {

  mode: "development",
  // watch: true,

  entry: "./src/js/main.js",

  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "app.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015"]
          }
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "images/[name].[ext]"
          }
        }
      }
    ]
  },


  plugins: [new ExtractTextPlugin("style.css")]


};
