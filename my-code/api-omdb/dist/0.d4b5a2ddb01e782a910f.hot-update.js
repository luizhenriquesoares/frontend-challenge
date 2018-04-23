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
  Object(__WEBPACK_IMPORTED_MODULE_4__config_express__["a" /* default */])(app, __WEBPACK_IMPORTED_MODULE_1_express___default.a);

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

/***/ })

};
//# sourceMappingURL=0.d4b5a2ddb01e782a910f.hot-update.js.map