"use strict";
exports.id = 290;
exports.ids = [290];
exports.modules = {

/***/ 6329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "R": () => (/* binding */ Categories)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/Category/Categories/Card/Card.jsx


const Card = ({ category  })=>{
    const { name , image  } = category;
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: `/categories`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
            className: "top-categories__item",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: image,
                    className: "js-img",
                    alt: ""
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "top-categories__item-hover",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                            children: name
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "browse products -"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "icon-arrow-lg"
                        })
                    ]
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./src/components/Category/Categories/Categories.jsx


const Categories = ({ categories  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: categories.map((category)=>/*#__PURE__*/ jsx_runtime_.jsx(Card, {
                category: category
            }, category.categoryId)
        )
    }));
};


/***/ }),

/***/ 2917:
/***/ ((module) => {

module.exports = JSON.parse('[{"categoryId":"spa","name":"SPA","image":"/assets/img/top-categories-img1.jpg"},{"categoryId":"nails","name":"Nails","image":"/assets/img/top-categories-img2.jpg"},{"categoryId":"perfume","name":"Perfume","image":"/assets/img/top-categories-img3.jpg"},{"categoryId":"makeup","name":"Make Up","image":"/assets/img/top-categories-img4.jpg"},{"categoryId":"skin","name":"Skin","image":"/assets/img/top-categories-img5.jpg"},{"categoryId":"hair","name":"Hair","image":"/assets/img/top-categories-img6.jpg"}]');

/***/ })

};
;