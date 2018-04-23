require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fs__ = __webpack_require__("fs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__("express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chalk__ = __webpack_require__("chalk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chalk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chalk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_dotenv__ = __webpack_require__("dotenv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_dotenv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_dotenv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_express__ = __webpack_require__("./config/express.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__config_express__);
/* dependencies-------------------------------------------------------------- */





/* ENV ---------------------------------------------------------------------- */
__WEBPACK_IMPORTED_MODULE_3_dotenv___default.a.load({
  path: '.env'
});
var port = Object({"BUILD_TARGET":"app"}).PORT || 4000;

/* app config --------------------------------------------------------------- */
var app = __WEBPACK_IMPORTED_MODULE_1_express___default()();



__WEBPACK_IMPORTED_MODULE_4__config_express___default()(app);

/* bootstrap ---------------------------------------------------------------- */
/* harmony default export */ __webpack_exports__["default"] = (app);

var listen = function listen() {
  app.listen(port, function () {
    console.log('%s Express server listening on port %d in %s mode.', __WEBPACK_IMPORTED_MODULE_2_chalk___default.a.green('✓'), port, app.get('env'));
  });
};

if (true) {
  module.hot.accept(["./app.js"], function () {
    listen();
  });
}
listen();

/***/ }),

/***/ "./config/express.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {var express = __webpack_require__("express");
var bodyParser = __webpack_require__("body-parser");
var cors = __webpack_require__("cors");
var logger = __webpack_require__("morgan");
var errorHandler = __webpack_require__("errorhandler");
var join = __webpack_require__("path").join;
var schema = __webpack_require__("./schema/schema.js");
var expressGraphQL = __webpack_require__("express-graphql");

module.exports = function (app) {
  var corsOptions = {
    credentials: true,
    origin: "http://localhost:3030"
  };

  app.use(cors(corsOptions)); // include before other routes
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use("/graphql", expressGraphQL({
    schema: schema,
    graphiql: true
  }));
  app.use(logger("dev"));
  app.use(express.static(join(__dirname, "public")));
  app.use(errorHandler());
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "config"))

/***/ }),

/***/ "./schema/schema.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_query__ = __webpack_require__("./schema/root-query.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql__ = __webpack_require__("graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql__);



/* -------------------------------------------------------------------------- *\
 *  Exports Schemas GraphQL
\* -------------------------------------------------------------------------- */

var graphqlSchema = new __WEBPACK_IMPORTED_MODULE_1_graphql__["GraphQLSchema"]({
  query: __WEBPACK_IMPORTED_MODULE_0__root_query__["a" /* default */]
});

/* harmony default export */ __webpack_exports__["default"] = (graphqlSchema);

/***/ }),

/***/ "body-parser":
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "errorhandler":
/***/ (function(module, exports) {

module.exports = require("errorhandler");

/***/ }),

/***/ "express":
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-graphql":
/***/ (function(module, exports) {

module.exports = require("express-graphql");

/***/ }),

/***/ "morgan":
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),

/***/ "path":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

};
//# sourceMappingURL=0.8fc9ad604ee259718ca4.hot-update.js.map