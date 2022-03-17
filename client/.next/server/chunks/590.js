"use strict";
exports.id = 590;
exports.ids = [590];
exports.modules = {

/***/ 1590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "V": () => (/* binding */ Blogs)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/Blog/Blogs/Card/Card.jsx


const Card = ({ blog  })=>{
    const { title , id , image , shortDescription , date  } = blog;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "blog-item",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: `/blog/${id}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    className: "blog-item__img",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: image,
                            className: "js-img",
                            alt: ""
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "blog-item__date",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: date.month
                                }),
                                " ",
                                date.date
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: `/blog/${id}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "blog-item__title",
                    children: title
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: shortDescription
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: `/blog/${id}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    className: "blog-item__link",
                    children: [
                        "Read more ",
                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "icon-arrow-md"
                        })
                    ]
                })
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./src/components/Blog/Blogs/Blogs.jsx


const Blogs = ({ blogs  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "blog-items",
            children: blogs.map((blog)=>/*#__PURE__*/ jsx_runtime_.jsx(Card, {
                    blog: blog
                }, blog.id)
            )
        })
    }));
};


/***/ })

};
;