"use strict";
exports.id = 986;
exports.ids = [986];
exports.modules = {

/***/ 9986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "f": () => (/* binding */ ProductDetails)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/data/product/product.json
var product_product = __webpack_require__(2136);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: ./src/data/social/index.json
var social = __webpack_require__(5941);
;// CONCATENATED MODULE: ./src/components/Product/Reviews/Card/Card.jsx

const Card = ({ review  })=>{
    const { author , reviewDate , rating , content  } = review;
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "review-item",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "review-item__head",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "review-item__author",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: author.image,
                                    className: "js-img",
                                    alt: ""
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "review-item__name",
                                    children: author.name
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "review-item__date",
                                    children: reviewDate
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "review-item__rating",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                className: "star-rating",
                                children: [
                                    ...Array(rating)
                                ].map((star, index)=>{
                                    return(/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "icon-star"
                                        })
                                    }, index));
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "review-item__content",
                    children: content
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./src/components/Product/Reviews/Reviews.jsx


const Reviews = ({ reviews  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "product-detail__items",
            children: [
                reviews.slice(0, 3).map((review, index)=>/*#__PURE__*/ jsx_runtime_.jsx(Card, {
                        review: review
                    }, index)
                ),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    href: "#",
                    className: "blog-item__link",
                    children: [
                        "show more ",
                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "icon-arrow-md"
                        })
                    ]
                })
            ]
        })
    }));
};

// EXTERNAL MODULE: external "react-simple-star-rating"
var external_react_simple_star_rating_ = __webpack_require__(7386);
;// CONCATENATED MODULE: ./src/components/Product/ReviewForm/ReviewFrom.jsx



const ReviewFrom = ()=>{
    const { 0: rating , 1: setRating  } = (0,external_react_.useState)(0);
    const handleRating = (rate)=>{
        setRating(rate);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "product-detail__form post-comment__form",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "subscribe-form__img",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/assets/img/subscribe-img.png"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            children: "leave a review"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "Your email address will not be published."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "rating",
                            "data-id": "rating_1",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_simple_star_rating_.Rating, {
                                onClick: handleRating,
                                ratingValue: rating,
                                fillColor: "#cfc819",
                                size: "20px",
                                emptyColor: "#fff"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "box-field",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "text",
                                className: "form-control",
                                placeholder: "Enter your name"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "box-field",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "email",
                                className: "form-control",
                                placeholder: "Enter your email"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "box-field box-field__textarea",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                className: "form-control",
                                placeholder: "Enter your review"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "submit",
                            className: "btn",
                            children: "send"
                        })
                    ]
                })
            ]
        })
    }));
};

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/pages/_app.js
var _app = __webpack_require__(2654);
;// CONCATENATED MODULE: ./src/components/Product/ProductDetails/ProductDetails.jsx









const ProductDetails = ()=>{
    const router = (0,router_.useRouter)();
    const { cart , setCart  } = (0,external_react_.useContext)(_app.CartContext);
    const socialLinks = [
        ...social
    ];
    const products = [
        ...product_product
    ];
    const { 0: product , 1: setProduct  } = (0,external_react_.useState)(null);
    const { 0: addedInCart , 1: setAddedInCart  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        if (router.query.id) {
            const data = products.find((pd)=>pd.id === router.query.id
            );
            setProduct(data);
        }
    }, [
        router.query.id
    ]);
    (0,external_react_.useEffect)(()=>{
        if (product) {
            setAddedInCart(Boolean(cart === null || cart === void 0 ? void 0 : cart.find((pd)=>pd.id === product.id
            )));
        }
    }, [
        product,
        cart
    ]);
    const { 0: quantity , 1: setQuantity  } = (0,external_react_.useState)(1);
    const { 0: tab , 1: setTab  } = (0,external_react_.useState)(2);
    const { 0: activeColor , 1: setActiveColor  } = (0,external_react_.useState)(2);
    const { 0: nav1 , 1: setNav1  } = (0,external_react_.useState)();
    const { 0: nav2 , 1: setNav2  } = (0,external_react_.useState)();
    const handleAddToCart = ()=>{
        const newProduct = {
            ...product,
            quantity: quantity
        };
        setCart([
            ...cart,
            newProduct
        ]);
    };
    if (!product) return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}));
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "product",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "wrapper",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "product-content",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "product-slider",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "product-slider__main",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
                                                fade: true,
                                                asNavFor: nav2,
                                                arrows: false,
                                                lazyLoad: true,
                                                ref: (slider1)=>setNav1(slider1)
                                                ,
                                                children: product.imageGallery.map((img, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "product-slider__main-item",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "products-item__type",
                                                                children: [
                                                                    product.isSale && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "products-item__sale",
                                                                        children: "sale"
                                                                    }),
                                                                    product.isNew && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "products-item__new",
                                                                        children: "new"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: img,
                                                                alt: "product"
                                                            })
                                                        ]
                                                    }, index)
                                                )
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "product-slider__nav",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
                                                arrows: false,
                                                asNavFor: nav1,
                                                ref: (slider2)=>setNav2(slider2)
                                                ,
                                                slidesToShow: 4,
                                                swipeToSlide: true,
                                                focusOnSelect: true,
                                                children: product.imageGallery.map((img, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "product-slider__nav-item",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: img,
                                                            alt: "product"
                                                        })
                                                    }, index)
                                                )
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "product-info",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: product.name
                                        }),
                                        product.isStocked ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "product-stock",
                                            children: "in stock"
                                        }) : '',
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: "product-num",
                                            children: [
                                                "SKU: ",
                                                product.productNumber
                                            ]
                                        }),
                                        product.oldPrice ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: "product-price",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    children: [
                                                        "$",
                                                        product.oldPrice
                                                    ]
                                                }),
                                                "$",
                                                product.price
                                            ]
                                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: "product-price",
                                            children: [
                                                "$",
                                                product.price
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: product.content
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "contacts-info__social",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Find us here:"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                    children: socialLinks.map((social, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: social.path,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: social.icon ? social.icon : ''
                                                                })
                                                            })
                                                        }, index)
                                                    )
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "product-options",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "product-info__color",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "Color:"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                            children: product === null || product === void 0 ? void 0 : product.colors.map((color, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    onClick: ()=>setActiveColor(index)
                                                                    ,
                                                                    className: activeColor === index ? 'active' : '',
                                                                    style: {
                                                                        backgroundColor: color
                                                                    }
                                                                }, index)
                                                            )
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "product-info__quantity",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "product-info__quantity-title",
                                                            children: "Quantity:"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "counter-box",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    onClick: ()=>{
                                                                        if (quantity > 1) {
                                                                            setQuantity(quantity - 1);
                                                                        }
                                                                    },
                                                                    className: "counter-link counter-link__prev",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "icon-arrow"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                    type: "text",
                                                                    className: "counter-input",
                                                                    disabled: true,
                                                                    value: quantity
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    onClick: ()=>setQuantity(quantity + 1)
                                                                    ,
                                                                    className: "counter-link counter-link__next",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "icon-arrow"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "product-buttons",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                    disabled: addedInCart,
                                                    onClick: ()=>handleAddToCart()
                                                    ,
                                                    className: "btn btn-icon",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "icon-cart"
                                                        }),
                                                        " cart"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                    className: "btn btn-grey btn-icon",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "icon-heart"
                                                        }),
                                                        " wish"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "product-detail",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "tab-wrap product-detail-tabs",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "nav-tab-list tabs pd-tab",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: tab === 1 ? 'active' : '',
                                                onClick: ()=>setTab(1)
                                                ,
                                                children: "Description"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: tab === 2 ? 'active' : '',
                                                onClick: ()=>setTab(2)
                                                ,
                                                children: "Reviews"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "box-tab-cont",
                                        children: [
                                            tab === 1 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "tab-cont",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: product.description
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: product.description
                                                    })
                                                ]
                                            }),
                                            tab === 2 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "tab-cont product-reviews",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Reviews, {
                                                        reviews: product.reviews
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(ReviewFrom, {})
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    className: "promo-video__decor js-img",
                    src: "/assets/img/promo-video__decor.jpg",
                    alt: ""
                })
            ]
        })
    }));
};


/***/ })

};
;