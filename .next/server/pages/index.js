(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 103:
/***/ ((module) => {

// Exports
module.exports = {
	"product": "Product_product__03_Hw",
	"photo": "Product_photo__8GRmP",
	"card": "Product_card__wNsd3",
	"title": "Product_title__1JLOK",
	"description": "Product_description__wwpon",
	"thumbnail": "Product_thumbnail__tI_qX"
};


/***/ }),

/***/ 66:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/Product.module.css
var Product_module = __webpack_require__(103);
var Product_module_default = /*#__PURE__*/__webpack_require__.n(Product_module);
;// CONCATENATED MODULE: external "framer-motion"
const external_framer_motion_namespaceObject = require("framer-motion");
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/ProductItem.js




const ProductItem = ({ product  })=>{
    const item = {
        hide: {
            opacity: 0,
            x: "60px",
            transition: {
                duration: 0.3
            }
        },
        show: {
            opacity: 1,
            x: "0px",
            transition: {
                duration: 0.3
            }
        },
        exit: {
            opacity: 0,
            x: "-60px",
            transition: {
                duration: 0.3
            }
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_framer_motion_namespaceObject.motion.div, {
        variants: item,
        className: (Product_module_default()).product,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Product_module_default()).photo,
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "/photo_1.png",
                    alt: "Maged Abdelsalam"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: product.url,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    className: (Product_module_default()).card,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: (Product_module_default()).title,
                            children: product.title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (Product_module_default()).description,
                            children: product.description
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: (Product_module_default()).thumbnail,
                            src: product.thumbnail,
                            alt: product.title
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const components_ProductItem = (ProductItem);

;// CONCATENATED MODULE: ./components/ProductList.js




const ProductList = ({ products  })=>{
    const container = {
        hide: {
            opacity: 0,
            x: "60px",
            transition: {
                duration: 0.3
            }
        },
        show: {
            opacity: 1,
            x: "0px",
            transition: {
                duration: 0.3,
                staggerChildren: 0.1
            }
        },
        exit: {
            opacity: 0,
            x: "-60px",
            transition: {
                duration: 0.3
            }
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(external_framer_motion_namespaceObject.motion.section, {
        variants: container,
        initial: "hide",
        animate: "show",
        exit: "exit",
        className: (Product_module_default()).product,
        children: products.map((product)=>/*#__PURE__*/ jsx_runtime_.jsx(components_ProductItem, {
                product: product
            }, product.id)
        )
    });
};
/* harmony default export */ const components_ProductList = (ProductList);

;// CONCATENATED MODULE: ./pages/index.js

// Components

function Home({ products  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(components_ProductList, {
            products: products
        })
    });
};
const getStaticProps = async ()=>{
    const res = await fetch(`http://localhost:3000/api/products`);
    const products = await res.json();
    return {
        props: {
            products
        }
    };
};


/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,664], () => (__webpack_exec__(66)));
module.exports = __webpack_exports__;

})();