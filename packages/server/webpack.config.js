const path = require("path");
const base = require("../../webpack.config");

module.exports = Object.assign({}, base, {
  target: "node",
  mode: "production",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "../../dist"),
  },
  node: {
    global: false,
    __filename: false,
    __dirname: false,
  },
});
