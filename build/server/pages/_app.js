/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_layout_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/layout.scss */ \"./styles/layout.scss\");\n/* harmony import */ var _styles_layout_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_box_ofer_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/box_ofer.css */ \"./styles/box_ofer.css\");\n/* harmony import */ var _styles_box_ofer_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_box_ofer_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_5__]);\nframer_motion__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps , preloadTrue  }) {\n    react__WEBPACK_IMPORTED_MODULE_6___default().useEffect(()=>{\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>window.removeEventListener(\"scroll\", handleScroll)\n        ;\n    });\n    const handleScroll = ()=>{\n        // console.log('scroll event', window.scrollY)\n        if (window.scrollY > 80) {\n            document.querySelector(\".logo_div\").className = \"pl-4 flex items-center logo_div upper\";\n        } else {\n            document.querySelector(\".logo_div\").className = \"pl-4 flex items-center logo_div\";\n        }\n        if (window.scrollY > 260) {\n            var ref;\n            (ref = document.querySelector(\".mouse_svg__mouseAnim\")) === null || ref === void 0 ? void 0 : ref.setAttribute(\"class\", \"mouse_svg__mouseAnim hidden\");\n            // document.querySelector(\"body\").className=\"bodyColor01\";\n            let ele = document.querySelector(\".headerElements\");\n            if (ele) {\n                ele.className = \"headerElements_hide headerElements\";\n            }\n        } else {\n            var ref1;\n            (ref1 = document.querySelector(\".mouse_svg__mouseAnim\")) === null || ref1 === void 0 ? void 0 : ref1.setAttribute(\"class\", \"mouse_svg__mouseAnim\");\n            document.querySelector(\"body\").className = \"noColor\";\n            let ele = document.querySelector(\".headerElements\");\n            if (ele) {\n                ele.className = \"headerElements\";\n            }\n        }\n        if (window.scrollY > 30) {\n            var ref2;\n            (ref2 = document.querySelector(\".mouse_svg__mouseAnim\")) === null || ref2 === void 0 ? void 0 : ref2.setAttribute(\"class\", \"mouse_svg__mouseAnim hiddenm\");\n        } else {\n            var ref3;\n            (ref3 = document.querySelector(\".mouse_svg__mouseAnim\")) === null || ref3 === void 0 ? void 0 : ref3.setAttribute(\"class\", \"mouse_svg__mouseAnim\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimateSharedLayout, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/tosh/Desktop/Cloud/portfolio-git/pages/_app.js\",\n            lineNumber: 67,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/tosh/Desktop/Cloud/portfolio-git/pages/_app.js\",\n        lineNumber: 66,\n        columnNumber: 7\n    }, this);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2xheW91dC5zY3NzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9ib3hfb2Zlci5jc3NcIjtcbmltcG9ydCBcInRhaWx3aW5kY3NzL3RhaWx3aW5kLmNzc1wiO1xuaW1wb3J0IHsgQW5pbWF0ZVNoYXJlZExheW91dCB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHByZWxvYWRUcnVlIH0pIHtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpXG4gIH0pXG5cbmNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygnc2Nyb2xsIGV2ZW50Jywgd2luZG93LnNjcm9sbFkpXG5cbiBcblxuICAgIGlmKHdpbmRvdy5zY3JvbGxZID4gODApe1xuICAgICAgXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ29fZGl2XCIpLmNsYXNzTmFtZT1cInBsLTQgZmxleCBpdGVtcy1jZW50ZXIgbG9nb19kaXYgdXBwZXJcIlxuICAgIH1lbHNle1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dvX2RpdlwiKS5jbGFzc05hbWU9XCJwbC00IGZsZXggaXRlbXMtY2VudGVyIGxvZ29fZGl2XCJcbiAgICB9XG4gICAgaWYod2luZG93LnNjcm9sbFkgPiAyNjApe1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdXNlX3N2Z19fbW91c2VBbmltJyk/LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdtb3VzZV9zdmdfX21vdXNlQW5pbSBoaWRkZW4nKTtcbiAgICAgIFxuICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuY2xhc3NOYW1lPVwiYm9keUNvbG9yMDFcIjtcbiAgICBcbiAgICBcbiAgICAgIGxldCBlbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlckVsZW1lbnRzXCIpO1xuICAgICAgaWYoZWxlKXtcbiAgICAgICAgZWxlLmNsYXNzTmFtZT1cImhlYWRlckVsZW1lbnRzX2hpZGUgaGVhZGVyRWxlbWVudHNcIjtcbiAgICAgIH1cbiAgICBcbiAgICBcbiAgICB9ZWxzZXtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3VzZV9zdmdfX21vdXNlQW5pbScpPy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnbW91c2Vfc3ZnX19tb3VzZUFuaW0nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmNsYXNzTmFtZT1cIm5vQ29sb3JcIlxuICAgICAgXG4gICAgICBsZXQgZWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJFbGVtZW50c1wiKTtcblxuICAgICAgaWYoZWxlKXtcbiAgICAgICAgZWxlLmNsYXNzTmFtZT1cImhlYWRlckVsZW1lbnRzXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYod2luZG93LnNjcm9sbFkgPiAzMCl7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW91c2Vfc3ZnX19tb3VzZUFuaW0nKT8uc2V0QXR0cmlidXRlKCdjbGFzcycsJ21vdXNlX3N2Z19fbW91c2VBbmltIGhpZGRlbm0nKTtcbiAgICAgIFxuICAgICAgICB9ZWxzZXtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3VzZV9zdmdfX21vdXNlQW5pbScpPy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnbW91c2Vfc3ZnX19tb3VzZUFuaW0nKTtcbiAgICAgIH1cblxuXG4gIH1cblxuXG5cbiAgcmV0dXJuIChcbiBcbiAgICBcblxuXG4gICAgICA8QW5pbWF0ZVNoYXJlZExheW91dD5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9BbmltYXRlU2hhcmVkTGF5b3V0PlxuXG4gICBcblxuICApO1xuXG5cblxufVxuIl0sIm5hbWVzIjpbIkFuaW1hdGVTaGFyZWRMYXlvdXQiLCJSZWFjdCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicHJlbG9hZFRydWUiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlU2Nyb2xsIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNjcm9sbFkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc05hbWUiLCJzZXRBdHRyaWJ1dGUiLCJlbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/tailwindcss/tailwind.css":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/box_ofer.css":
/*!*****************************!*\
  !*** ./styles/box_ofer.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/layout.scss":
/*!****************************!*\
  !*** ./styles/layout.scss ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
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
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();