(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_layout_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2574);
/* harmony import */ var _styles_layout_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_box_ofer_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2918);
/* harmony import */ var _styles_box_ofer_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_box_ofer_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(600);
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_5__]);
framer_motion__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function MyApp({ Component , pageProps , preloadTrue  }) {
    react__WEBPACK_IMPORTED_MODULE_6___default().useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    });
    const handleScroll = ()=>{
        // console.log('scroll event', window.scrollY)
        if (window.scrollY > 80) {
            document.querySelector(".logo_div").className = "pl-4 flex items-center logo_div upper";
        } else {
            document.querySelector(".logo_div").className = "pl-4 flex items-center logo_div";
        }
        if (window.scrollY > 260) {
            document.querySelector(".mouse_svg__mouseAnim")?.setAttribute("class", "mouse_svg__mouseAnim hidden");
            // document.querySelector("body").className="bodyColor01";
            let ele = document.querySelector(".headerElements");
            if (ele) {
                ele.className = "headerElements_hide headerElements";
            }
        } else {
            document.querySelector(".mouse_svg__mouseAnim")?.setAttribute("class", "mouse_svg__mouseAnim");
            document.querySelector("body").className = "noColor";
            let ele1 = document.querySelector(".headerElements");
            if (ele1) {
                ele1.className = "headerElements";
            }
        }
        if (window.scrollY > 30) {
            document.querySelector(".mouse_svg__mouseAnim")?.setAttribute("class", "mouse_svg__mouseAnim hiddenm");
        } else {
            document.querySelector(".mouse_svg__mouseAnim")?.setAttribute("class", "mouse_svg__mouseAnim");
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimateSharedLayout, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...pageProps
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 600:
/***/ (() => {



/***/ }),

/***/ 2918:
/***/ (() => {



/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 2574:
/***/ (() => {



/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8484));
module.exports = __webpack_exports__;

})();