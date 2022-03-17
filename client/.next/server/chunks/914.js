"use strict";
exports.id = 914;
exports.ids = [914];
exports.modules = {

/***/ 5914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ ProductsCarousel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_utils_SlickArrows_SlickArrows__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(602);
/* harmony import */ var pages_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2654);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SingleProduct_SingleProduct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2969);






const ProductsCarousel = ({ products  })=>{
    const { cart , setCart  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(pages_app__WEBPACK_IMPORTED_MODULE_2__.CartContext);
    const handleAddToCart = (id)=>{
        const newProduct = products === null || products === void 0 ? void 0 : products.find((pd)=>pd.id === id
        );
        setCart([
            ...cart,
            {
                ...newProduct,
                quantity: 1
            }
        ]);
    };
    const settings = {
        dots: false,
        infinite: false,
        arrows: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_utils_SlickArrows_SlickArrows__WEBPACK_IMPORTED_MODULE_1__/* .SlickArrowPrev */ .R, {}),
        nextArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_utils_SlickArrows_SlickArrows__WEBPACK_IMPORTED_MODULE_1__/* .SlickArrowNext */ .S, {}),
        lazyLoad: 'progressive',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, 
        ]
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_4___default()), {
            ...settings,
            children: products.map((product)=>{
                /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SingleProduct_SingleProduct__WEBPACK_IMPORTED_MODULE_5__/* .SingleProduct */ .b, {
                    addedInCart: Boolean(cart === null || cart === void 0 ? void 0 : cart.find((pd)=>pd.id === product.id
                    )),
                    product: product,
                    onAddToWish: (id)=>console.log(id)
                    ,
                    onAddToCart: handleAddToCart
                }, product.id);
            })
        })
    }));
};


/***/ })

};
;