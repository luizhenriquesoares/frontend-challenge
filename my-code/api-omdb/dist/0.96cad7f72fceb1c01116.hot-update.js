require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./config/express.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_body_parser__ = __webpack_require__("body-parser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cors__ = __webpack_require__("cors");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_morgan__ = __webpack_require__("morgan");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_morgan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_morgan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_errorhandler__ = __webpack_require__("errorhandler");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_errorhandler___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_errorhandler__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_path__ = __webpack_require__("path");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__schema_schema__ = __webpack_require__("./schema/schema.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_express_graphql__ = __webpack_require__("express-graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_express_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_express_graphql__);
//import express from 'express'








/* harmony default export */ __webpack_exports__["a"] = (function (app, express) {
  var corsOptions = {
    credentials: true,
    origin: 'http://localhost:8080'
  };

  app.use(__WEBPACK_IMPORTED_MODULE_1_cors___default()(corsOptions)); // include before other routes
  app.use(__WEBPACK_IMPORTED_MODULE_0_body_parser___default.a.json());

  app.use(__WEBPACK_IMPORTED_MODULE_0_body_parser___default.a.urlencoded({
    extended: false
  }));
  app.use("/graphql", __WEBPACK_IMPORTED_MODULE_6_express_graphql___default()({
    schema: __WEBPACK_IMPORTED_MODULE_5__schema_schema__["a" /* default */],
    graphiql: true
  }));
  app.use(__WEBPACK_IMPORTED_MODULE_2_morgan___default()('dev'));
  app.use(express.static(__WEBPACK_IMPORTED_MODULE_4_path___default()(__dirname, 'public')));
  app.use(__WEBPACK_IMPORTED_MODULE_3_errorhandler___default()());
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "config"))

/***/ })

};
//# sourceMappingURL=0.96cad7f72fceb1c01116.hot-update.js.map