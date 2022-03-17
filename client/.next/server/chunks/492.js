"use strict";
exports.id = 492;
exports.ids = [492];
exports.modules = {

/***/ 7492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "O": () => (/* binding */ BrandLogo)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/brand/brandlogo.json
const brandlogo_namespaceObject = JSON.parse('[{"id":1,"logoSrc":"/assets/img/main-logo1.svg","URL":"/"},{"id":2,"logoSrc":"/assets/img/main-logo2.svg","URL":"/"},{"id":3,"logoSrc":"/assets/img/main-logo3.svg","URL":"/"},{"id":4,"logoSrc":"/assets/img/main-logo4.svg","URL":"/"},{"id":5,"logoSrc":"/assets/img/main-logo5.svg","URL":"/"}]');
;// CONCATENATED MODULE: ./src/components/shared/BrandLogo/BrandLogo.jsx


const BrandLogo = ()=>{
    const brandLoges = [
        ...brandlogo_namespaceObject
    ];
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "main-logos",
            children: brandLoges.map((logo, index)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: logo.URL,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: logo.logoSrc,
                        className: "js-img",
                        alt: ""
                    })
                }, index)
            )
        })
    }));
};


/***/ })

};
;