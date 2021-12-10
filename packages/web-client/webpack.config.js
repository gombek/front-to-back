const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const base = require("../../webpack.config");

const rootPath = (...paths) => path.resolve(__dirname, ...paths);

module.exports = (env) =>
  Object.assign({}, base, {
    entry: "./src/index.tsx",
    target: "web",
    mode: env.prod ? "production" : "development",
    output: {
      filename: "main.js",
      path: rootPath("../../dist/public"),
    },
    context: rootPath(),
    plugins: [
      new HtmlWebpackPlugin({
        title: "PMT - Project Management Tool",
        template: rootPath("index.html"),
      }),
    ],
    devServer: {
      proxy: {
        "/graphql": "http://localhost:3000/graphql",
      },
      compress: true,
      port: 8080,
    },
    node: {
      global: true,
      __filename: "warn-mock",
      __dirname: "warn-mock",
    },
  });
