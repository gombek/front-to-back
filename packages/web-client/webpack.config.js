const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const base = require("../../webpack.config");

module.exports = (env) =>
  Object.assign({}, base, {
    target: "web",
    mode: env.prod ? "production" : "development",
    output: {
      filename: "index.js",
      path: path.resolve(__dirname, "../../dist/public"),
    },
    context: path.resolve(__dirname),
    plugins: [new HtmlWebpackPlugin()],
    node: {
      global: true,
      __filename: "warn-mock",
      __dirname: "warn-mock",
    },
  });
