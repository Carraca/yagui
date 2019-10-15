var path = require("path");
var UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = function(env) {
  var config = {
    entry: "./src/yagui.js",
    output: {
      library: "yagui",
      libraryTarget: "umd",
      filename: "yagui.js",
      path: path.resolve(__dirname, "build")
    },
    resolve: {
      modules: [
        path.join(__dirname, "src"),
        path.join(__dirname, "node_modules")
      ]
    },
    module: {
      rules: []
    }
  };

  var isRelease = env && env.release;

  config.mode = isRelease ? "production" : "development";

  if (isRelease) {
    config.plugins = [new UglifyJsPlugin()];

    config.module.rules.push({
      test: /\.js$/,
      exclude: [/node_modules/],
      use: [
        {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      ]
    });
  }

  return config;
};
