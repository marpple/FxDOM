const path = require("path");
const express = require("express");
const webpack = require("webpack");
const middleware = require("webpack-dev-middleware");
const yargs = require("yargs");
const glob = require("glob");

const argv = yargs.alias("p", "port").default("port", "8080").parse();
const port = parseInt(argv.port, 10);

const compiler = webpack({
  mode: "development",
  context: __dirname,
  entry: {
    tests: glob
      .sync("test/suits/*.spec.js")
      .map((p) => p.replace("test/", "./")),
  },
  devServer: {
    hot: true,
  },
  output: { filename: "[name].bundle.js" },
});

const app = express();
app.use(express.static(path.resolve(__dirname, "../")));

app.use("/test", middleware(compiler));
app.get("/test", (req, res, next) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/", (req, res) => res.redirect("/test"));

app.listen(port, () => console.log(`TEST SERVER LISTENING ON ${port} PORT`));
