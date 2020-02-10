const express = require("express");
const models = require("./models");
const expressGraphQL = require("express-graphql");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const schema = require("./schema/schema");

const figlet = require("figlet");
const chalk = require("chalk");
const dbAuth = require("../dbAuth");

const app = express();

const MONGO_URI = `mongodb+srv://${dbAuth.dbUsername}:${dbAuth.dbPass}@cluster0-ikg3e.mongodb.net/test?retryWrites=true&w=majority`;
if (!MONGO_URI) {
  throw new Error("You must provide a MongoLab URI");
}

const connectMsg = () => {
  return console.log(
    chalk.green(
      figlet.textSync("Connected to MongoDB!", {
        font: "Slant",
        horizontalLayout: "default",
        verticalLayout: "default"
      })
    )
  );
};

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, { useNewUrlParser: true });
mongoose.connection
  .once("open", () => connectMsg())
  .on("error", error => console.log("Error connecting to MongoLab:", error));

app.use(bodyParser.json());
app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);

const webpackMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");
const webpackConfig = require("../webpack.config.js");
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;
