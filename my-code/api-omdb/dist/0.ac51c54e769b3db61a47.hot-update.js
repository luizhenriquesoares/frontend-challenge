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
/* dependencies-------------------------------------------------------------- */





/* ENV ---------------------------------------------------------------------- */
__WEBPACK_IMPORTED_MODULE_3_dotenv___default.a.load({
  path: '.env'
});
var port = Object({"BUILD_TARGET":"app"}).PORT || 4000;

/* app config --------------------------------------------------------------- */
var app = __WEBPACK_IMPORTED_MODULE_1_express___default()();



/* bootstrap ---------------------------------------------------------------- */
/* harmony default export */ __webpack_exports__["default"] = (app);

var listen = function listen() {
  Object(__WEBPACK_IMPORTED_MODULE_4__config_express__["a" /* default */])(app);

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
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__("express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser__ = __webpack_require__("body-parser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cors__ = __webpack_require__("cors");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_morgan__ = __webpack_require__("morgan");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_morgan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_morgan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_errorhandler__ = __webpack_require__("errorhandler");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_errorhandler___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_errorhandler__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_path__ = __webpack_require__("path");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__schema_schema__ = __webpack_require__("./schema/schema.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_express_graphql__ = __webpack_require__("express-graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_express_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_express_graphql__);









/* harmony default export */ __webpack_exports__["a"] = (function (app) {
  var corsOptions = {
    credentials: true,
    origin: 'http://localhost:8080'
  };

  app.use(__WEBPACK_IMPORTED_MODULE_2_cors___default()(corsOptions)); // include before other routes
  app.use(__WEBPACK_IMPORTED_MODULE_1_body_parser___default.a.json());

  app.use(__WEBPACK_IMPORTED_MODULE_1_body_parser___default.a.urlencoded({
    extended: false
  }));
  app.use("/graphql", __WEBPACK_IMPORTED_MODULE_7_express_graphql___default()({
    schema: __WEBPACK_IMPORTED_MODULE_6__schema_schema__["a" /* default */],
    graphiql: true
  }));
  app.use(__WEBPACK_IMPORTED_MODULE_3_morgan___default()('dev'));
  app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static(__WEBPACK_IMPORTED_MODULE_5_path___default()(__dirname, 'public')));
  app.use(__WEBPACK_IMPORTED_MODULE_4_errorhandler___default()());
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "config"))

/***/ })

};
//# sourceMappingURL=0.ac51c54e769b3db61a47.hot-update.js.map