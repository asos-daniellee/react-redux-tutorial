const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => ({
  mode: "development",
  entry: [`${__dirname}/`],
  output: {
    path: __dirname + "/bin",
    publicPath: "/",
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
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
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  }
});
