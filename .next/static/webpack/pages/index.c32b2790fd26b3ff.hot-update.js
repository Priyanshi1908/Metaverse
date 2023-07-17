"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./sections/GetStarted.jsx":
/*!*********************************!*\
  !*** ./sections/GetStarted.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ \"./constants/index.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n\"use client\";\n\n\n\n\n\n\nconst GetStarted = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].paddings, \" relative z-10\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n            variants: _utils_motion__WEBPACK_IMPORTED_MODULE_4__.staggerContainer,\n            initial: \"hidden\",\n            whileInView: \"show\",\n            viewport: {\n                once: false,\n                amount: 0.25\n            },\n            className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].innerWidth, \" mx-auto flex lg:flex-row flex-col gap-8\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                    variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_4__.planetVariants)(\"left\"),\n                    className: \"flex-1 \".concat(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].flexCenter),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/get-started.png\",\n                        alt: \"get-started\",\n                        className: \"w-[0%] h-[90%] object-contain\"\n                    }, void 0, false, {\n                        fileName: \"/Users/varshanaroliya/Desktop/project3/project_metaverse/sections/GetStarted.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/varshanaroliya/Desktop/project3/project_metaverse/sections/GetStarted.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                    variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_4__.fadeIn)(\"left\", \"tween\", 0.2, 1),\n                    className: \"flex-[0.75] flex justify-center flex-col\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.TypingText, {\n                            title: \"| How Metaversus Works\"\n                        }, void 0, false, {\n                            fileName: \"/Users/varshanaroliya/Desktop/project3/project_metaverse/sections/GetStarted.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.TitleText, {\n                            title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: \"Get started with just a few clicks\"\n                            }, void 0, false)\n                        }, void 0, false, {\n                            fileName: \"/Users/varshanaroliya/Desktop/project3/project_metaverse/sections/GetStarted.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-[31px] flex flex-col max-w-[370px] gap-[24px]\",\n                            children: _constants__WEBPACK_IMPORTED_MODULE_2__.startingFeatures.map((feature, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.StartSteps, {\n                                    number: \"\".concat(index < 10 ? \"0\" : \"\", \" \").concat(index + 1),\n                                    text: feature\n                                }, feature, false, {\n                                    fileName: \"/Users/varshanaroliya/Desktop/project3/project_metaverse/sections/GetStarted.jsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/varshanaroliya/Desktop/project3/project_metaverse/sections/GetStarted.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/varshanaroliya/Desktop/project3/project_metaverse/sections/GetStarted.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/varshanaroliya/Desktop/project3/project_metaverse/sections/GetStarted.jsx\",\n            lineNumber: 12,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/varshanaroliya/Desktop/project3/project_metaverse/sections/GetStarted.jsx\",\n        lineNumber: 11,\n        columnNumber: 3\n    }, undefined);\n_c = GetStarted;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GetStarted);\nvar _c;\n$RefreshReg$(_c, \"GetStarted\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZWN0aW9ucy9HZXRTdGFydGVkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUV1QztBQUVSO0FBQ2lCO0FBQ2tCO0FBQ1M7QUFFM0UsTUFBTVMsYUFBYSxrQkFDakIsOERBQUNDO1FBQVFDLFdBQVcsR0FBbUIsT0FBaEJWLHdEQUFlLEVBQUM7a0JBQ3JDLDRFQUFDRCxxREFBVTtZQUNUYyxVQUFVUiwyREFBZ0JBO1lBQzFCUyxTQUFRO1lBQ1JDLGFBQVk7WUFDWkMsVUFBVTtnQkFBRUMsTUFBTSxLQUFLO2dCQUFFQyxRQUFRO1lBQUs7WUFDdENSLFdBQVcsR0FBcUIsT0FBbEJWLDBEQUFpQixFQUFDOzs4QkFFaEMsOERBQUNELHFEQUFVO29CQUNUYyxVQUFVTiw2REFBY0EsQ0FBQztvQkFDekJHLFdBQVcsVUFBNEIsT0FBbEJWLDBEQUFpQjs4QkFFdEMsNEVBQUNxQjt3QkFDQ0MsS0FBSTt3QkFDSkMsS0FBSTt3QkFDSmIsV0FBVTs7Ozs7Ozs7Ozs7OEJBR2QsOERBQUNYLHFEQUFVO29CQUNUYyxVQUFVUCxxREFBTUEsQ0FBQyxRQUFRLFNBQVMsS0FBSztvQkFDdkNJLFdBQVU7O3NDQUVWLDhEQUFDTixtREFBVUE7NEJBQUNvQixPQUFNOzs7Ozs7c0NBQ2xCLDhEQUFDckIsa0RBQVNBOzRCQUFDcUIscUJBQU87MENBQUU7Ozs7Ozs7c0NBQ3BCLDhEQUFDWjs0QkFBSUYsV0FBVTtzQ0FDWlQsNERBQW9CLENBQUMsQ0FBQ3lCLFNBQVNDLHNCQUM5Qiw4REFBQ3pCLG1EQUFVQTtvQ0FFVDBCLFFBQVEsR0FBNEJELE9BQXpCQSxRQUFRLEtBQUssTUFBTSxFQUFFLEVBQUMsS0FBYSxPQUFWQSxRQUFRO29DQUM1Q0UsTUFBTUg7bUNBRkRBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0E1QmJsQjtBQXVDTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zZWN0aW9ucy9HZXRTdGFydGVkLmpzeD9hNjQ0Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzJztcbmltcG9ydCB7IHN0YXJ0aW5nRmVhdHVyZXMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgU3RhcnRTdGVwcywgVGl0bGVUZXh0LCBUeXBpbmdUZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBzdGFnZ2VyQ29udGFpbmVyLCBmYWRlSW4sIHBsYW5ldFZhcmlhbnRzIH0gZnJvbSAnLi4vdXRpbHMvbW90aW9uJztcblxuY29uc3QgR2V0U3RhcnRlZCA9ICgpID0+IChcbiAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgJHtzdHlsZXMucGFkZGluZ3N9IHJlbGF0aXZlIHotMTBgfT5cbiAgICA8bW90aW9uLmRpdlxuICAgICAgdmFyaWFudHM9e3N0YWdnZXJDb250YWluZXJ9XG4gICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgIHdoaWxlSW5WaWV3PVwic2hvd1wiXG4gICAgICB2aWV3cG9ydD17eyBvbmNlOiBmYWxzZSwgYW1vdW50OiAwLjI1IH19XG4gICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5pbm5lcldpZHRofSBteC1hdXRvIGZsZXggbGc6ZmxleC1yb3cgZmxleC1jb2wgZ2FwLThgfVxuICAgID5cbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIHZhcmlhbnRzPXtwbGFuZXRWYXJpYW50cygnbGVmdCcpfVxuICAgICAgICBjbGFzc05hbWU9e2BmbGV4LTEgJHtzdHlsZXMuZmxleENlbnRlcn1gfVxuICAgICAgPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiL2dldC1zdGFydGVkLnBuZ1wiXG4gICAgICAgICAgYWx0PVwiZ2V0LXN0YXJ0ZWRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInctWzAlXSBoLVs5MCVdIG9iamVjdC1jb250YWluXCJcbiAgICAgICAgLz5cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIHZhcmlhbnRzPXtmYWRlSW4oJ2xlZnQnLCAndHdlZW4nLCAwLjIsIDEpfVxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4LVswLjc1XSBmbGV4IGp1c3RpZnktY2VudGVyIGZsZXgtY29sXCJcbiAgICAgID5cbiAgICAgICAgPFR5cGluZ1RleHQgdGl0bGU9XCJ8IEhvdyBNZXRhdmVyc3VzIFdvcmtzXCIgLz5cbiAgICAgICAgPFRpdGxlVGV4dCB0aXRsZT17PD5HZXQgc3RhcnRlZCB3aXRoIGp1c3QgYSBmZXcgY2xpY2tzPC8+fSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LVszMXB4XSBmbGV4IGZsZXgtY29sIG1heC13LVszNzBweF0gZ2FwLVsyNHB4XVwiPlxuICAgICAgICAgIHtzdGFydGluZ0ZlYXR1cmVzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxTdGFydFN0ZXBzXG4gICAgICAgICAgICAgIGtleT17ZmVhdHVyZX1cbiAgICAgICAgICAgICAgbnVtYmVyPXtgJHtpbmRleCA8IDEwID8gJzAnIDogJyd9ICR7aW5kZXggKyAxfWB9XG4gICAgICAgICAgICAgIHRleHQ9e2ZlYXR1cmV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICA8L21vdGlvbi5kaXY+XG4gIDwvc2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEdldFN0YXJ0ZWQ7XG4iXSwibmFtZXMiOlsibW90aW9uIiwic3R5bGVzIiwic3RhcnRpbmdGZWF0dXJlcyIsIlN0YXJ0U3RlcHMiLCJUaXRsZVRleHQiLCJUeXBpbmdUZXh0Iiwic3RhZ2dlckNvbnRhaW5lciIsImZhZGVJbiIsInBsYW5ldFZhcmlhbnRzIiwiR2V0U3RhcnRlZCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJwYWRkaW5ncyIsImRpdiIsInZhcmlhbnRzIiwiaW5pdGlhbCIsIndoaWxlSW5WaWV3Iiwidmlld3BvcnQiLCJvbmNlIiwiYW1vdW50IiwiaW5uZXJXaWR0aCIsImZsZXhDZW50ZXIiLCJpbWciLCJzcmMiLCJhbHQiLCJ0aXRsZSIsIm1hcCIsImZlYXR1cmUiLCJpbmRleCIsIm51bWJlciIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sections/GetStarted.jsx\n"));

/***/ })

});