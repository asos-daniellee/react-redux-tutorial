const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => ({
  mode: "development",
  entry: [`${__dirname}/app.jsx`],
  output: {
    path: __dirname + "/bin",
    publicPath: "/",
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: ["babel-loader"]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: `${__dirname}/index.html` })
  ]
});
