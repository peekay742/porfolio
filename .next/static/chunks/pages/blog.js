/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/blog"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5CASUS%5CDesktop%5Cportfolio%5Cpages%5Cblog%5Cindex.js&page=%2Fblog!":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5CASUS%5CDesktop%5Cportfolio%5Cpages%5Cblog%5Cindex.js&page=%2Fblog! ***!
  \*************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/blog\",\n      function () {\n        return __webpack_require__(/*! ./pages/blog/index.js */ \"./pages/blog/index.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/blog\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD1DJTNBJTVDVXNlcnMlNUNBU1VTJTVDRGVza3RvcCU1Q3BvcnRmb2xpbyU1Q3BhZ2VzJTVDYmxvZyU1Q2luZGV4LmpzJnBhZ2U9JTJGYmxvZyEuanMiLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyxvREFBdUI7QUFDOUM7QUFDQTtBQUNBLE9BQU8sSUFBVTtBQUNqQixNQUFNLFVBQVU7QUFDaEI7QUFDQSxPQUFPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvPzIwZGUiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9ibG9nXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiLi9wYWdlcy9ibG9nL2luZGV4LmpzXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5fX05FWFRfUC5wdXNoKFtcIi9ibG9nXCJdKVxuICAgICAgfSk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5CASUS%5CDesktop%5Cportfolio%5Cpages%5Cblog%5Cindex.js&page=%2Fblog!\n");

/***/ }),

/***/ "./components/Post.js":
/*!****************************!*\
  !*** ./components/Post.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Post(param) {\n    var post = param.post;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"block overflow-hidden rounded-2xl bg-gray-100 pr-9 pl-9 py-14 shadow-xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"text-xl font-bold\",\n                children: post.frontmatter.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\portfolio\\\\components\\\\Post.js\",\n                lineNumber: 6,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"pb-4\",\n                src: post.frontmatter.cover_image,\n                alt: \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\portfolio\\\\components\\\\Post.js\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pb-4\",\n                children: [\n                    \"Posted on \",\n                    post.frontmatter.date\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\portfolio\\\\components\\\\Post.js\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"pb-4\",\n                children: post.frontmatter.excerpt\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\portfolio\\\\components\\\\Post.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/blog/\".concat(post.slug),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"inline-flex px-12 py-3 text-sm font-medium text-culturedWhite bg-mnBlue rounded shadow sm:w-auto active:bg-blue-500 hover:bg-carolinaBlue focus:outline-none focus:ring\",\n                    children: \"Read More\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\portfolio\\\\components\\\\Post.js\",\n                    lineNumber: 11,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\portfolio\\\\components\\\\Post.js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\portfolio\\\\components\\\\Post.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this);\n};\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUE0QjtBQUViLFNBQVNDLElBQUksQ0FBQyxLQUFRLEVBQUU7UUFBVixJQUFNLEdBQU4sS0FBUSxDQUFOQyxJQUFJO0lBQy9CLHFCQUNJLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyx5RUFBeUU7OzBCQUNwRiw4REFBQ0MsSUFBRTtnQkFBQ0QsU0FBUyxFQUFDLG1CQUFtQjswQkFBRUYsSUFBSSxDQUFDSSxXQUFXLENBQUNDLEtBQUs7Ozs7O29CQUFNOzBCQUMvRCw4REFBQ0MsS0FBRztnQkFBQ0osU0FBUyxFQUFDLE1BQU07Z0JBQUNLLEdBQUcsRUFBRVAsSUFBSSxDQUFDSSxXQUFXLENBQUNJLFdBQVc7Z0JBQUVDLEdBQUcsRUFBQyxFQUFFOzs7OztvQkFBRzswQkFDbEUsOERBQUNSLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxNQUFNOztvQkFBQyxZQUFVO29CQUFDRixJQUFJLENBQUNJLFdBQVcsQ0FBQ00sSUFBSTs7Ozs7O29CQUFPOzBCQUM3RCw4REFBQ0MsR0FBQztnQkFBQ1QsU0FBUyxFQUFDLE1BQU07MEJBQUVGLElBQUksQ0FBQ0ksV0FBVyxDQUFDUSxPQUFPOzs7OztvQkFBSzswQkFDbEQsOERBQUNkLGtEQUFJO2dCQUFDZSxJQUFJLEVBQUUsUUFBTyxDQUFZLE9BQVZiLElBQUksQ0FBQ2MsSUFBSSxDQUFFOzBCQUM1Qiw0RUFBQ0MsR0FBQztvQkFBQ2IsU0FBUyxFQUFDLHlLQUF5Szs4QkFBQyxXQUFTOzs7Ozt3QkFBSTs7Ozs7b0JBQ2pNOzs7Ozs7WUFDTCxDQUNUO0NBQ0o7QUFadUJILEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0LmpzPzM0NTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCh7IHBvc3QgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvY2sgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtMnhsIGJnLWdyYXktMTAwIHByLTkgcGwtOSBweS0xNCBzaGFkb3cteGwnPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSd0ZXh0LXhsIGZvbnQtYm9sZCc+e3Bvc3QuZnJvbnRtYXR0ZXIudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J3BiLTQnIHNyYz17cG9zdC5mcm9udG1hdHRlci5jb3Zlcl9pbWFnZX0gYWx0PScnIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYi00Jz5Qb3N0ZWQgb24ge3Bvc3QuZnJvbnRtYXR0ZXIuZGF0ZX08L2Rpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdwYi00Jz57cG9zdC5mcm9udG1hdHRlci5leGNlcnB0fTwvcD5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9ibG9nLyR7cG9zdC5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdpbmxpbmUtZmxleCBweC0xMiBweS0zIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1jdWx0dXJlZFdoaXRlIGJnLW1uQmx1ZSByb3VuZGVkIHNoYWRvdyBzbTp3LWF1dG8gYWN0aXZlOmJnLWJsdWUtNTAwIGhvdmVyOmJnLWNhcm9saW5hQmx1ZSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZyc+UmVhZCBNb3JlPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJQb3N0IiwicG9zdCIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwiZnJvbnRtYXR0ZXIiLCJ0aXRsZSIsImltZyIsInNyYyIsImNvdmVyX2ltYWdlIiwiYWx0IiwiZGF0ZSIsInAiLCJleGNlcnB0IiwiaHJlZiIsInNsdWciLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Post.js\n");

/***/ }),

/***/ "./pages/blog/index.js":
/*!*****************************!*\
  !*** ./pages/blog/index.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Post */ \"./components/Post.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar __N_SSG = true;\nfunction Home(param) {\n    var posts = param.posts;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pt-28 pb-16 md:pl-20 md:pr-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Blog | Phyo Min Khant\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\portfolio\\\\pages\\\\blog\\\\index.js\",\n                    lineNumber: 12,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\portfolio\\\\pages\\\\blog\\\\index.js\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"font-bold text-2xl text-center pb-8\",\n                children: \"Favourite Stuffs\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\portfolio\\\\pages\\\\blog\\\\index.js\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pr-8 pl-8\",\n                children: posts.map(function(post, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Post__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        post: post\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\portfolio\\\\pages\\\\blog\\\\index.js\",\n                        lineNumber: 17,\n                        columnNumber: 21\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\portfolio\\\\pages\\\\blog\\\\index.js\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\portfolio\\\\pages\\\\blog\\\\index.js\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this);\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUd3QztBQUVaOztBQUViLFNBQVNFLElBQUksQ0FBQyxLQUFTLEVBQUU7UUFBWCxLQUFPLEdBQVAsS0FBUyxDQUFQQyxLQUFLOztJQUNoQyxxQkFDSSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsK0JBQStCOzswQkFDMUMsOERBQUNKLGtEQUFJOzBCQUNELDRFQUFDSyxPQUFLOzhCQUFDLHVCQUFxQjs7Ozs7d0JBQVE7Ozs7O29CQUNqQzswQkFDUCw4REFBQ0MsSUFBRTtnQkFBQ0YsU0FBUyxFQUFDLHFDQUFxQzswQkFBQyxrQkFBZ0I7Ozs7O29CQUFLOzBCQUN6RSw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLGdFQUFnRTswQkFDMUVGLEtBQUssQ0FBQ0ssR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBRUMsS0FBSzt5Q0FDbkIsOERBQUNWLHdEQUFJO3dCQUFhUyxJQUFJLEVBQUVBLElBQUk7dUJBQWpCQyxLQUFLOzs7OzZCQUFnQjtpQkFDbkMsQ0FBQzs7Ozs7b0JBQ0E7Ozs7OztZQUNKLENBQ1Q7Q0FDSjtBQWR1QlIsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ibG9nL2luZGV4LmpzPzExYTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJ1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgbWF0dGVyIGZyb20gJ2dyYXktbWF0dGVyJ1xyXG5pbXBvcnQgUG9zdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Bvc3QnXHJcbmltcG9ydCB7IHNvcnRCeURhdGUgfSBmcm9tICcuLi8uLi91dGlscydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHBvc3RzIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B0LTI4IHBiLTE2IG1kOnBsLTIwIG1kOnByLTIwJz5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+QmxvZyB8IFBoeW8gTWluIEtoYW50PC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdmb250LWJvbGQgdGV4dC0yeGwgdGV4dC1jZW50ZXIgcGItOCc+RmF2b3VyaXRlIFN0dWZmczwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC04IHByLTggcGwtOCc+XHJcbiAgICAgICAgICAgICAgICB7cG9zdHMubWFwKChwb3N0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3N0IGtleT17aW5kZXh9IHBvc3Q9e3Bvc3R9IC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAgIC8vIEdldCBmaWxlcyBmcm9tIHRoZSBwb3N0cyBkaXJcclxuICAgIGNvbnN0IGZpbGVzID0gZnMucmVhZGRpclN5bmMocGF0aC5qb2luKCdwb3N0cycpKVxyXG5cclxuICAgIC8vIEdldCBzbHVnIGFuZCBmcm9udG1hdHRlciBmcm9tIHBvc3RzXHJcbiAgICBjb25zdCBwb3N0cyA9IGZpbGVzLm1hcCgoZmlsZW5hbWUpID0+IHtcclxuICAgICAgICAvLyBDcmVhdGUgc2x1Z1xyXG4gICAgICAgIGNvbnN0IHNsdWcgPSBmaWxlbmFtZS5yZXBsYWNlKCcubWQnLCAnJylcclxuXHJcbiAgICAgICAgLy8gR2V0IGZyb250bWF0dGVyXHJcbiAgICAgICAgY29uc3QgbWFya2Rvd25XaXRoTWV0YSA9IGZzLnJlYWRGaWxlU3luYyhcclxuICAgICAgICAgICAgcGF0aC5qb2luKCdwb3N0cycsIGZpbGVuYW1lKSxcclxuICAgICAgICAgICAgJ3V0Zi04J1xyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgY29uc3QgeyBkYXRhOiBmcm9udG1hdHRlciB9ID0gbWF0dGVyKG1hcmtkb3duV2l0aE1ldGEpXHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNsdWcsXHJcbiAgICAgICAgICAgIGZyb250bWF0dGVyLFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBwb3N0czogcG9zdHMuc29ydChzb3J0QnlEYXRlKSxcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJQb3N0IiwiSGVhZCIsIkhvbWUiLCJwb3N0cyIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwiaDEiLCJtYXAiLCJwb3N0IiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog/index.js\n");

/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/shared/lib/head */ \"./node_modules/next/dist/shared/lib/head.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLGlIQUFrRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzPzg4NDkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc2hhcmVkL2xpYi9oZWFkJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/head.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5CASUS%5CDesktop%5Cportfolio%5Cpages%5Cblog%5Cindex.js&page=%2Fblog!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);