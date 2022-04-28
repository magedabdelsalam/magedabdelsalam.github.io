"use strict";
(() => {
var exports = {};
exports.id = 894;
exports.ids = [894];
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

/***/ 11:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(342);

function handler({ query: { title  }  }, res) {
    const filtered = _data__WEBPACK_IMPORTED_MODULE_0__/* .products.filter */ .R.filter((product)=>product.title === title
    );
    if (filtered.length > 0) {
        res.status(200).json(filtered[0]);
    } else {
        res.status(404).json({
            message: `Product with the title of ${title} is not found`
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(11));
module.exports = __webpack_exports__;

})();