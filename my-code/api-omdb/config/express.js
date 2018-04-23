const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");
const errorHandler = require("errorhandler");
const join = require("path").join;
const schema = require("../schema/schema");
const expressGraphQL = require("express-graphql");

module.exports = function(app) {
  const corsOptions = {
    credentials: true,
    origin: "http://localhost:3030"
  };

  app.use(cors(corsOptions)); // include before other routes
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(
    "/graphql",
    expressGraphQL({
      schema,
      graphiql: true
    })
  );
  app.use(logger("dev"));
  app.use(express.static(join(__dirname, "public")));
  app.use(errorHandler());
};
