"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[246],{9246:function(e,a,n){n.d(a,{A:function(){return y}});var s=n(5893),t="/assets/img/header-logo.svg",i=[{name:"Home",path:"/"},{name:"pages",path:"#",subNav:[{name:"About us",path:"/about"},{name:"FAQ",path:"/faq"},{name:"My Profile",path:"/profile"},{name:"Login",path:"/login"},{name:"Registration",path:"/registration"},{name:"Product",path:"/product"},{name:"Post",path:"/blog/2633"},{name:"Checkout",path:"/checkout"},{name:"404",path:"/404"},{name:"Cart",path:"/cart"},{name:"Wishlist",path:"/wishlist"}]},{name:"shop",path:"/shop"},{name:"Categories",path:"/categories"},{name:"blog",path:"/blog"},{name:"contact",path:"/contact"}],r=n(1664),o=n(7294),c=n(1163),l=function(e){var a=e.navItem,n=(0,c.useRouter)();return(0,s.jsx)("ul",{className:"header-nav",children:a.map((function(e){return(0,s.jsxs)("li",{children:[(0,s.jsx)(r.default,{href:e.path,children:(0,s.jsx)("a",{className:e.path===n.pathname?"active":"",children:e.name})}),e.subNav&&(0,s.jsx)("ul",{children:e.subNav.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsx)(r.default,{href:e.path,children:(0,s.jsx)("a",{children:e.name})})},e.path)}))})]},e.path)}))})},h=n(2654),m=function(){var e=(0,o.useContext)(h.CartContext).cart,a=(0,o.useState)(!0),n=a[0],c=a[1],m=(0,o.useState)(!1),d=m[0],p=m[1];(0,o.useEffect)((function(){return window.addEventListener("scroll",j),function(){window.removeEventListener("scroll",j)}}));var u,j=function(){var e=window.scrollY;p(e>10)};return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("header",{className:"header",children:[n&&(0,s.jsxs)("div",{className:"header-top",children:[(0,s.jsx)("span",{children:"30% OFF ON ALL PRODUCTS ENTER CODE: beshop2020"}),(0,s.jsx)("i",{onClick:function(){return c(!1)},className:"header-top-close js-header-top-close icon-close"})]}),(0,s.jsxs)("div",{className:"header-content ".concat(d?"fixed":""),children:[(0,s.jsx)("div",{className:"header-logo",children:(0,s.jsx)(r.default,{href:"/",children:(0,s.jsx)("a",{children:(0,s.jsx)("img",{src:t,alt:""})})})}),(0,s.jsxs)("div",{className:"header-box",children:[(0,s.jsx)(l,{navItem:i}),(0,s.jsxs)("ul",{className:"header-options",children:[(0,s.jsx)("li",{children:(0,s.jsx)(r.default,{href:"/faq",children:(0,s.jsx)("a",{children:(0,s.jsx)("i",{className:"icon-search"})})})}),(0,s.jsx)("li",{children:(0,s.jsx)(r.default,{href:"/profile",children:(0,s.jsx)("a",{children:(0,s.jsx)("i",{className:"icon-user"})})})}),(0,s.jsx)("li",{children:(0,s.jsx)(r.default,{href:"/wishlist",children:(0,s.jsx)("a",{children:(0,s.jsx)("i",{className:"icon-heart"})})})}),(0,s.jsx)("li",{children:(0,s.jsx)(r.default,{href:"/cart",children:(0,s.jsxs)("a",{children:[(0,s.jsx)("i",{className:"icon-cart"}),(0,s.jsx)("span",{children:null!==(u=e.length)&&void 0!==u?u:"0"})]})})})]})]}),(0,s.jsx)("div",{className:"btn-menu js-btn-menu",children:[1,2,3].map((function(e){return(0,s.jsx)("span",{children:"\xa0"},e)}))})]})]})})},d=function(e){var a=e.insta,n=a.image,t=a.link;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("a",{href:t,className:"insta-photo",children:[(0,s.jsx)("img",{src:n,className:"js-img",alt:""}),(0,s.jsx)("div",{className:"insta-photo__hover",children:(0,s.jsx)("i",{className:"icon-insta"})})]})})},p=[{image:"/assets/img/insta-photo1.jpg",link:"#/",id:"1"},{image:"/assets/img/insta-photo2.jpg",link:"#/",id:"2"},{image:"/assets/img/insta-photo3.jpg",link:"#/",id:"3"},{image:"/assets/img/insta-photo4.jpg",link:"#/",id:"4"},{image:"/assets/img/insta-photo5.jpg",link:"#/",id:"5"},{image:"/assets/img/insta-photo6.jpg",link:"#/",id:"6"}],u=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"insta-photos",children:p.map((function(e){return(0,s.jsx)(d,{insta:e},e.id)}))})})},j=JSON.parse('[{"title":"About","navLinks":[{"name":"About us","path":"/about"},{"name":"Categories","path":"/categories"},{"name":"Shop","path":"/shop"},{"name":"Blog","path":"/blog"},{"name":"FAQ","path":"/faq"},{"name":"Contacts","path":"/contact"}]},{"title":"Categories","navLinks":[{"name":"Make up","path":"/categories"},{"name":"SPA","path":"/categories"},{"name":"Perfume","path":"/categories"},{"name":"Nails","path":"/categories"},{"name":"Skin care","path":"/categories"},{"name":"Hair care","path":"/categories"}]},{"title":"Useful links","navLinks":[{"name":"Careers","path":"/about"},{"name":"Privacy policy","path":"/faq"},{"name":"Terms of use","path":"/about"},{"name":"Support","path":"/blog"},{"name":"Shipping details","path":"/about"},{"name":"Information","path":"/about"}]}]'),x=JSON.parse('[{"icon":"/assets/img/payment1.png"},{"icon":"/assets/img/payment2.png"},{"icon":"/assets/img/payment3.png"},{"icon":"/assets/img/payment4.png"}]'),f=n(5941),g=function(e){var a,n=e.nav;return(0,s.jsxs)("div",{className:"footer-nav__col",children:[(0,s.jsx)("span",{className:"footer-nav__col-title",children:n.title}),(0,s.jsx)("ul",{children:null===n||void 0===n||null===(a=n.navLinks)||void 0===a?void 0:a.map((function(e,a){return(0,s.jsx)("li",{children:(0,s.jsx)(r.default,{href:e.path,children:(0,s.jsx)("a",{children:e.name})})},e.name+a)}))})]})};function v(e,a){(null==a||a>e.length)&&(a=e.length);for(var n=0,s=new Array(a);n<a;n++)s[n]=e[n];return s}function N(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,a){if(!e)return;if("string"===typeof e)return v(e,a);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,a)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var b=function(){var e=N(j),a=N(f),n=N(x);return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("footer",{className:"footer",children:(0,s.jsxs)("div",{className:"wrapper",children:[(0,s.jsxs)("div",{className:"footer-top",children:[(0,s.jsxs)("div",{className:"footer-top__social",children:[(0,s.jsx)("span",{children:"Find us here:"}),(0,s.jsx)("ul",{children:a.map((function(e,a){return(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:e.path,children:(0,s.jsx)("i",{className:e.icon})})},a)}))})]}),(0,s.jsx)("div",{className:"footer-top__logo",children:(0,s.jsx)(r.default,{href:"/",children:(0,s.jsx)("a",{children:(0,s.jsx)("img",{src:"/assets/img/footer-logo.svg",className:"js-img",alt:""})})})}),(0,s.jsxs)("div",{className:"footer-top__payments",children:[(0,s.jsx)("span",{children:"Payment methods:"}),(0,s.jsx)("ul",{children:n.map((function(e,a){return(0,s.jsx)("li",{children:(0,s.jsx)("img",{src:e.icon,className:"js-img",alt:""})},a)}))})]})]}),(0,s.jsxs)("div",{className:"footer-nav",children:[e.map((function(e,a){return(0,s.jsx)(g,{nav:e},a)})),(0,s.jsxs)("div",{className:"footer-nav__col",children:[(0,s.jsx)("span",{className:"footer-nav__col-title",children:"Contact"}),(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("i",{className:"icon-map-pin"})," 27 Division St, New York, NY 10002, USA"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("i",{className:"icon-smartphone"}),(0,s.jsxs)("div",{className:"footer-nav__col-phones",children:[(0,s.jsx)("a",{href:"tel:+13459971345",children:"+1 345 99 71 345"}),(0,s.jsx)("a",{href:"tel:+13457464975",children:"+1 345 74 64 975"})]})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("i",{className:"icon-mail"}),(0,s.jsx)("a",{href:"mailto:info@beshop.com",children:"info@beshop.com"})]})]})]})]}),(0,s.jsx)("div",{className:"footer-copy",children:(0,s.jsx)("span",{children:"\xa9 All rights reserved. BeShop 2020"})})]})})})},y=function(e){var a=e.children;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("header",{className:"header",children:(0,s.jsx)(m,{})}),(0,s.jsxs)("main",{className:"content",children:[a,(0,s.jsx)(u,{})]}),(0,s.jsx)("footer",{className:"footer",children:(0,s.jsx)(b,{})})]})}},5941:function(e){e.exports=JSON.parse('[{"icon":"icon-facebook","path":"#/"},{"icon":"icon-twitter","path":"#/"},{"icon":"icon-insta","path":"#/"},{"icon":"icon-in","path":"#/"}]')}}]);