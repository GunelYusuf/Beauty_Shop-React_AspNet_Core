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

/***/ "./src/components/shared/Insta/Insta.jsx":
/*!***********************************************!*\
  !*** ./src/components/shared/Insta/Insta.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Insta\": function() { return /* binding */ Insta; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Card_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card/Card */ \"./src/components/shared/Insta/Card/Card.jsx\");\n\n\nvar _this = undefined;\nvar instaData = [\n    {\n        image: '/assets/img/inst12.jpeg',\n        link: '#/',\n        id: '1'\n    },\n    {\n        image: '/assets/img/insta1.jpeg',\n        link: '#/',\n        id: '2'\n    },\n    {\n        image: '/assets/img/insta2.jpeg',\n        link: '#/',\n        id: '3'\n    },\n    {\n        image: '/assets/img/instael.jpeg',\n        link: '#/',\n        id: '4'\n    },\n    {\n        image: '/assets/img/insta-photo5.jpg',\n        link: '#/',\n        id: '5'\n    },\n    {\n        image: '/assets/img/insta-photo6.jpg',\n        link: '#/',\n        id: '6'\n    }, \n];\nvar Insta = function() {\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"insta-photos\",\n            children: instaData.map(function(insta) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card_Card__WEBPACK_IMPORTED_MODULE_1__.Card, {\n                    insta: insta\n                }, insta.id, false, {\n                    fileName: \"/Users/gunelyusubova/Desktop/final_project/client/src/components/shared/Insta/Insta.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, _this1);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/gunelyusubova/Desktop/final_project/client/src/components/shared/Insta/Insta.jsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false));\n};\n_c = Insta;\nvar _c;\n$RefreshReg$(_c, \"Insta\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zaGFyZWQvSW5zdGEvSW5zdGEuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWtDOztBQUVsQyxHQUFLLENBQUNDLFNBQVMsR0FBRyxDQUFDO0lBQ2pCLENBQUM7UUFDQ0MsS0FBSyxFQUFFLENBQXlCO1FBQ2hDQyxJQUFJLEVBQUUsQ0FBSTtRQUNWQyxFQUFFLEVBQUUsQ0FBRztJQUNULENBQUM7SUFDRCxDQUFDO1FBQ0NGLEtBQUssRUFBRSxDQUF5QjtRQUNoQ0MsSUFBSSxFQUFFLENBQUk7UUFDVkMsRUFBRSxFQUFFLENBQUc7SUFDVCxDQUFDO0lBQ0QsQ0FBQztRQUNDRixLQUFLLEVBQUUsQ0FBeUI7UUFDaENDLElBQUksRUFBRSxDQUFJO1FBQ1ZDLEVBQUUsRUFBRSxDQUFHO0lBQ1QsQ0FBQztJQUNELENBQUM7UUFDQ0YsS0FBSyxFQUFFLENBQTBCO1FBQ2pDQyxJQUFJLEVBQUUsQ0FBSTtRQUNWQyxFQUFFLEVBQUUsQ0FBRztJQUNULENBQUM7SUFDRCxDQUFDO1FBQ0NGLEtBQUssRUFBRSxDQUE4QjtRQUNyQ0MsSUFBSSxFQUFFLENBQUk7UUFDVkMsRUFBRSxFQUFFLENBQUc7SUFDVCxDQUFDO0lBQ0QsQ0FBQztRQUNDRixLQUFLLEVBQUUsQ0FBOEI7UUFDckNDLElBQUksRUFBRSxDQUFJO1FBQ1ZDLEVBQUUsRUFBRSxDQUFHO0lBQ1QsQ0FBQztBQUNILENBQUM7QUFFTSxHQUFLLENBQUNDLEtBQUssR0FBRyxRQUFRLEdBQUYsQ0FBQzs7SUFDMUIsTUFBTTs4RkFFREMsQ0FBRztZQUFDQyxTQUFTLEVBQUMsQ0FBYztzQkFDMUJOLFNBQVMsQ0FBQ08sR0FBRyxDQUFDLFFBQVEsQ0FBUEMsS0FBSzs4QkFDbkIsTUFBTUMsQ0FBQUEsNkRBQUFBLENBQUxWLDRDQUFJO29CQUFnQlMsS0FBSyxFQUFFQSxLQUFLO21CQUF0QkEsS0FBSyxDQUFDTCxFQUFFOzs7Ozs7Ozs7Ozs7QUFLN0IsQ0FBQztLQVZZQyxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NoYXJlZC9JbnN0YS9JbnN0YS5qc3g/YzAxOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi9DYXJkL0NhcmQnO1xyXG5cclxuY29uc3QgaW5zdGFEYXRhID0gW1xyXG4gIHtcclxuICAgIGltYWdlOiAnL2Fzc2V0cy9pbWcvaW5zdDEyLmpwZWcnLFxyXG4gICAgbGluazogJyMvJyxcclxuICAgIGlkOiAnMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogJy9hc3NldHMvaW1nL2luc3RhMS5qcGVnJyxcclxuICAgIGxpbms6ICcjLycsXHJcbiAgICBpZDogJzInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICcvYXNzZXRzL2ltZy9pbnN0YTIuanBlZycsXHJcbiAgICBsaW5rOiAnIy8nLFxyXG4gICAgaWQ6ICczJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiAnL2Fzc2V0cy9pbWcvaW5zdGFlbC5qcGVnJyxcclxuICAgIGxpbms6ICcjLycsXHJcbiAgICBpZDogJzQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICcvYXNzZXRzL2ltZy9pbnN0YS1waG90bzUuanBnJyxcclxuICAgIGxpbms6ICcjLycsXHJcbiAgICBpZDogJzUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6ICcvYXNzZXRzL2ltZy9pbnN0YS1waG90bzYuanBnJyxcclxuICAgIGxpbms6ICcjLycsXHJcbiAgICBpZDogJzYnLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgSW5zdGEgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnN0YS1waG90b3MnPlxyXG4gICAgICAgIHtpbnN0YURhdGEubWFwKChpbnN0YSkgPT4gKFxyXG4gICAgICAgICAgPENhcmQga2V5PXtpbnN0YS5pZH0gaW5zdGE9e2luc3RhfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJDYXJkIiwiaW5zdGFEYXRhIiwiaW1hZ2UiLCJsaW5rIiwiaWQiLCJJbnN0YSIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImluc3RhIiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/shared/Insta/Insta.jsx\n");

/***/ })

});