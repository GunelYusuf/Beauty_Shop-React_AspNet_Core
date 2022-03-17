"use strict";
exports.id = 246;
exports.ids = [246];
exports.modules = {

/***/ 9246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/data.header.js
const header = {
    logo: '/assets/img/header-logo.svg'
};
const navItem = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'pages',
        path: '#',
        subNav: [
            {
                name: 'About us',
                path: '/about'
            },
            {
                name: 'FAQ',
                path: '/faq'
            },
            {
                name: 'My Profile',
                path: '/profile'
            },
            {
                name: 'Login',
                path: '/login'
            },
            {
                name: 'Registration',
                path: '/registration'
            },
            {
                name: 'Product',
                path: '/product'
            },
            {
                name: 'Post',
                path: '/blog/2633'
            },
            {
                name: 'Checkout',
                path: '/checkout'
            },
            {
                name: '404',
                path: '/404'
            },
            {
                name: 'Cart',
                path: '/cart'
            },
            {
                name: 'Wishlist',
                path: '/wishlist'
            }, 
        ]
    },
    {
        name: 'shop',
        path: '/shop'
    },
    {
        name: 'Categories',
        path: '/categories'
    },
    {
        name: 'blog',
        path: '/blog'
    },
    {
        name: 'contact',
        path: '/contact'
    }, 
];

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/shared/Header/Nav/Nav.jsx



const Nav = ({ navItem  })=>{
    const router = (0,router_.useRouter)();
    return(/*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: "header-nav",
        children: navItem.map((nav)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: nav.path,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: nav.path === router.pathname ? 'active' : '',
                            children: nav.name
                        })
                    }),
                    nav.subNav && /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        children: nav.subNav.map((sub)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: sub.path,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: sub.name
                                    })
                                })
                            }, sub.path)
                        )
                    })
                ]
            }, nav.path)
        )
    }));
};

// EXTERNAL MODULE: ./src/pages/_app.js
var _app = __webpack_require__(2654);
;// CONCATENATED MODULE: ./src/components/shared/Header/Header.jsx







const Header = ()=>{
    const { cart  } = (0,external_react_.useContext)(_app.CartContext);
    const { 0: promo , 1: setPromo  } = (0,external_react_.useState)(true);
    const { 0: fixedNav , 1: setFixedNav  } = (0,external_react_.useState)(false);
    // For Fixed nav
    (0,external_react_.useEffect)(()=>{
        window.addEventListener('scroll', isSticky);
        return ()=>{
            window.removeEventListener('scroll', isSticky);
        };
    });
    const isSticky = ()=>{
        const scrollTop = window.scrollY;
        if (scrollTop > 10) {
            setFixedNav(true);
        } else {
            setFixedNav(false);
        }
    };
    var _length;
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
            className: "header",
            children: [
                promo && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "header-top",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "30% OFF ON ALL PRODUCTS ENTER CODE: beshop2020"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            onClick: ()=>setPromo(false)
                            ,
                            className: "header-top-close js-header-top-close icon-close"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `header-content ${fixedNav ? 'fixed' : ''}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "header-logo",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: header.logo,
                                        alt: ""
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "header-box",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Nav, {
                                    navItem: navItem
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "header-options",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/faq",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "icon-search"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/profile",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "icon-user"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/wishlist",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "icon-heart"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/cart",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "icon-cart"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: (_length = cart.length) !== null && _length !== void 0 ? _length : '0'
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "btn-menu js-btn-menu",
                            children: [
                                1,
                                2,
                                3
                            ].map((i)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "\xa0"
                                }, i)
                            )
                        })
                    ]
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./src/components/shared/Insta/Card/Card.jsx

const Card = ({ insta  })=>{
    const { image , link  } = insta;
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
            href: link,
            className: "insta-photo",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: image,
                    className: "js-img",
                    alt: ""
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "insta-photo__hover",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "icon-insta"
                    })
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./src/components/shared/Insta/Insta.jsx


const instaData = [
    {
        image: '/assets/img/insta-photo1.jpg',
        link: '#/',
        id: '1'
    },
    {
        image: '/assets/img/insta-photo2.jpg',
        link: '#/',
        id: '2'
    },
    {
        image: '/assets/img/insta-photo3.jpg',
        link: '#/',
        id: '3'
    },
    {
        image: '/assets/img/insta-photo4.jpg',
        link: '#/',
        id: '4'
    },
    {
        image: '/assets/img/insta-photo5.jpg',
        link: '#/',
        id: '5'
    },
    {
        image: '/assets/img/insta-photo6.jpg',
        link: '#/',
        id: '6'
    }, 
];
const Insta = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "insta-photos",
            children: instaData.map((insta)=>/*#__PURE__*/ jsx_runtime_.jsx(Card, {
                    insta: insta
                }, insta.id)
            )
        })
    }));
};

;// CONCATENATED MODULE: ./src/data/footer/footerNav.json
const footerNav_namespaceObject = JSON.parse('[{"title":"About","navLinks":[{"name":"About us","path":"/about"},{"name":"Categories","path":"/categories"},{"name":"Shop","path":"/shop"},{"name":"Blog","path":"/blog"},{"name":"FAQ","path":"/faq"},{"name":"Contacts","path":"/contact"}]},{"title":"Categories","navLinks":[{"name":"Make up","path":"/categories"},{"name":"SPA","path":"/categories"},{"name":"Perfume","path":"/categories"},{"name":"Nails","path":"/categories"},{"name":"Skin care","path":"/categories"},{"name":"Hair care","path":"/categories"}]},{"title":"Useful links","navLinks":[{"name":"Careers","path":"/about"},{"name":"Privacy policy","path":"/faq"},{"name":"Terms of use","path":"/about"},{"name":"Support","path":"/blog"},{"name":"Shipping details","path":"/about"},{"name":"Information","path":"/about"}]}]');
;// CONCATENATED MODULE: ./src/data/footer/payment.json
const payment_namespaceObject = JSON.parse('[{"icon":"/assets/img/payment1.png"},{"icon":"/assets/img/payment2.png"},{"icon":"/assets/img/payment3.png"},{"icon":"/assets/img/payment4.png"}]');
// EXTERNAL MODULE: ./src/data/social/index.json
var social = __webpack_require__(5941);
;// CONCATENATED MODULE: ./src/components/shared/Footer/NavCol/NavCol.jsx


const NavCol = ({ nav: nav1  })=>{
    var ref;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "footer-nav__col",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "footer-nav__col-title",
                children: nav1.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                children: nav1 === null || nav1 === void 0 ? void 0 : (ref = nav1.navLinks) === null || ref === void 0 ? void 0 : ref.map((nav, indx)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: nav.path,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: nav.name
                            })
                        })
                    }, nav.name + indx)
                )
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./src/components/shared/Footer/Footer.jsx






const Footer = ()=>{
    const footerLogo = '/assets/img/footer-logo.svg';
    const footerNav = [
        ...footerNav_namespaceObject
    ];
    const footerSocial = [
        ...social
    ];
    const paymentMethods = [
        ...payment_namespaceObject
    ];
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("footer", {
            className: "footer",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "wrapper",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "footer-top",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-top__social",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Find us here:"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: footerSocial.map((social, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: social.path,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: social.icon
                                                    })
                                                })
                                            }, index)
                                        )
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "footer-top__logo",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: footerLogo,
                                            className: "js-img",
                                            alt: ""
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-top__payments",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Payment methods:"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: paymentMethods.map((payment, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: payment.icon,
                                                    className: "js-img",
                                                    alt: ""
                                                })
                                            }, index)
                                        )
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "footer-nav",
                        children: [
                            footerNav.map((nav, index)=>/*#__PURE__*/ jsx_runtime_.jsx(NavCol, {
                                    nav: nav
                                }, index)
                            ),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-nav__col",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "footer-nav__col-title",
                                        children: "Contact"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "icon-map-pin"
                                                    }),
                                                    " 27 Division St, New York, NY 10002, USA"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "icon-smartphone"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "footer-nav__col-phones",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "tel:+13459971345",
                                                                children: "+1 345 99 71 345"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "tel:+13457464975",
                                                                children: "+1 345 74 64 975"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "icon-mail"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "mailto:info@beshop.com",
                                                        children: "info@beshop.com"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "footer-copy",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "\xa9 All rights reserved. BeShop 2020"
                        })
                    })
                ]
            })
        })
    }));
};

;// CONCATENATED MODULE: ./src/layout/Layout.jsx




const Layout = ({ children  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: "header",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Header, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: "content",
                children: [
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx(Insta, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                className: "footer",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
            })
        ]
    }));
};


/***/ }),

/***/ 2654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartContext": () => (/* binding */ CartContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const MyApp = ({ Component , pageProps  })=>{
    const { 0: cart , 1: setCart  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CartContext.Provider, {
        value: {
            cart,
            setCart
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...pageProps
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);


/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = JSON.parse('[{"icon":"icon-facebook","path":"#/"},{"icon":"icon-twitter","path":"#/"},{"icon":"icon-insta","path":"#/"},{"icon":"icon-in","path":"#/"}]');

/***/ })

};
;