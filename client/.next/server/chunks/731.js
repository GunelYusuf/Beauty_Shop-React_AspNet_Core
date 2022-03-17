"use strict";
exports.id = 731;
exports.ids = [731];
exports.modules = {

/***/ 6731:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "PublicLayout": () => (/* binding */ PublicLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/components/shared/Breadcrumb/Breadcrumb.jsx




const Breadcrumb = ({ breadcrumb , title , description  })=>{
    const router = (0,router_.useRouter)();
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "detail-block detail-block_margin",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "wrapper",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "detail-block__content",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: title
                        }),
                        breadcrumb && /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: "bread-crumbs",
                            children: breadcrumb === null || breadcrumb === void 0 ? void 0 : breadcrumb.map(({ path , label  }, i)=>{
                                return(/*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
                                    children: path === router.asPath ? /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "bread-crumbs__item",
                                        children: label
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "bread-crumbs__item",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: path,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "bread-crumbs__link",
                                                children: label
                                            })
                                        })
                                    })
                                }, i));
                            })
                        }),
                        description && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "error-descr",
                            children: description
                        })
                    ]
                })
            })
        })
    }));
};

// EXTERNAL MODULE: ./src/layout/Layout.jsx + 9 modules
var Layout = __webpack_require__(9246);
;// CONCATENATED MODULE: ./src/layout/PublicLayout.jsx



const PublicLayout = ({ children , breadcrumb , breadcrumbTitle , description ,  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* Layout */.A, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Breadcrumb, {
                breadcrumb: breadcrumb,
                title: breadcrumbTitle,
                description: description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: children
            })
        ]
    }));
};


/***/ })

};
;