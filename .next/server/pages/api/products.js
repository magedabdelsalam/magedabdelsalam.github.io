"use strict";
(() => {
var exports = {};
exports.id = 221;
exports.ids = [221];
exports.modules = {

/***/ 342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ products)
/* harmony export */ });
const products = [
    {
        id: "1",
        url: "https://magedabdelsalam.com/weather-dashboard/",
        title: "Weather Dashboard",
        description: "A simple weather app",
        keywords: "weather app",
        thumbnail: "/weather_1.png"
    }, 
];


/***/ }),

/***/ 56:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(342);

function handler(req, res) {
    res.status(200).json(_data__WEBPACK_IMPORTED_MODULE_0__/* .products */ .R);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(56));
module.exports = __webpack_exports__;

})();