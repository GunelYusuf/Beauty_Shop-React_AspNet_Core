"use strict";
exports.id = 929;
exports.ids = [929];
exports.modules = {

/***/ 4965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ PagingList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const PagingList = ({ paginate  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
        className: "paging-list",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                onClick: ()=>paginate.prev()
                ,
                className: "paging-list__item paging-prev",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "paging-list__link",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: "icon-arrow"
                    })
                })
            }),
            [
                ...Array(paginate.maxPage)
            ].map((x, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    onClick: ()=>paginate.jump(i + 1)
                    ,
                    className: `paging-list__item ${paginate.currentPage === i + 1 && 'active'}`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "paging-list__link",
                        children: i + 1
                    })
                }, i)
            ),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                onClick: ()=>paginate.next()
                ,
                className: "paging-list__item paging-next",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "paging-list__link",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: "icon-arrow"
                    })
                })
            })
        ]
    }));
};


/***/ }),

/***/ 1775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ usePagination)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const usePagination = (data, itemsPerPage)=>{
    const { 0: currentPage1 , 1: setCurrentPage  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
    const maxPage = Math.ceil(data.length / itemsPerPage);
    const currentData = ()=>{
        const begin = (currentPage1 - 1) * itemsPerPage;
        const end = begin + itemsPerPage;
        return data.slice(begin, end);
    };
    const next = ()=>{
        setCurrentPage((currentPage)=>Math.min(currentPage + 1, maxPage)
        );
    };
    const prev = ()=>{
        setCurrentPage((currentPage)=>Math.max(currentPage - 1, 1)
        );
    };
    const jump = (page)=>{
        const pageNumber = Math.max(1, page);
        setCurrentPage((currentPage)=>Math.min(pageNumber, maxPage)
        );
    };
    return {
        next,
        prev,
        jump,
        currentData,
        currentPage: currentPage1,
        maxPage
    };
};


/***/ })

};
;