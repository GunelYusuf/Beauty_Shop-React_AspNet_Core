(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{3269:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return t(3287)}])},8418:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],i=!0,s=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);i=!0);}catch(c){s=!0,o=c}finally{try{i||null==t.return||t.return()}finally{if(s)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var a,i=(a=t(7294))&&a.__esModule?a:{default:a},s=t(6273),c=t(387),l=t(7190);var u={};function f(e,r,t,n){if(e&&s.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[r+"%"+t+(o?"%"+o:"")]=!0}}var d=function(e){var r,t=!1!==e.prefetch,n=c.useRouter(),a=i.default.useMemo((function(){var r=o(s.resolveHref(n,e.href,!0),2),t=r[0],a=r[1];return{href:t,as:e.as?s.resolveHref(n,e.as):a||t}}),[n,e.href,e.as]),d=a.href,m=a.as,p=e.children,h=e.replace,y=e.shallow,v=e.scroll,b=e.locale;"string"===typeof p&&(p=i.default.createElement("a",null,p));var g=(r=i.default.Children.only(p))&&"object"===typeof r&&r.ref,j=o(l.useIntersection({rootMargin:"200px"}),2),x=j[0],N=j[1],w=i.default.useCallback((function(e){x(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,x]);i.default.useEffect((function(){var e=N&&t&&s.isLocalURL(d),r="undefined"!==typeof b?b:n&&n.locale,o=u[d+"%"+m+(r?"%"+r:"")];e&&!o&&f(n,d,m,{locale:r})}),[m,d,N,b,t,n]);var S={ref:w,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,o,a,i,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(t))&&(e.preventDefault(),r[o?"replace":"push"](t,n,{shallow:a,locale:c,scroll:i}))}(e,n,d,m,h,y,v,b)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),s.isLocalURL(d)&&f(n,d,m,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var _="undefined"!==typeof b?b:n&&n.locale,A=n&&n.isLocaleDomain&&s.getDomainLocale(m,_,n&&n.locales,n&&n.domainLocales);S.href=A||s.addBasePath(s.addLocale(m,_,n&&n.defaultLocale))}return i.default.cloneElement(r,S)};r.default=d},7190:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],i=!0,s=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);i=!0);}catch(c){s=!0,o=c}finally{try{i||null==t.return||t.return()}finally{if(s)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,t=e.rootMargin,n=e.disabled||!s,u=a.useRef(),f=o(a.useState(!1),2),d=f[0],m=f[1],p=o(a.useState(r?r.current:null),2),h=p[0],y=p[1],v=a.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||d||e&&e.tagName&&(u.current=function(e,r,t){var n=function(e){var r,t={root:e.root||null,margin:e.rootMargin||""},n=l.find((function(e){return e.root===t.root&&e.margin===t.margin}));n?r=c.get(n):(r=c.get(t),l.push(t));if(r)return r;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var r=o.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return c.set(t,r={id:t,observer:a,elements:o}),r}(t),o=n.id,a=n.observer,i=n.elements;return i.set(e,r),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),c.delete(o);var r=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));r>-1&&l.splice(r,1)}}}(e,(function(e){return e&&m(e)}),{root:h,rootMargin:t}))}),[n,h,t,d]);return a.useEffect((function(){if(!s&&!d){var e=i.requestIdleCallback((function(){return m(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){r&&y(r.current)}),[r]),[v,d]};var a=t(7294),i=t(9311),s="undefined"!==typeof IntersectionObserver;var c=new Map,l=[]},7492:function(e,r,t){"use strict";t.d(r,{O:function(){return s}});var n=t(5893),o=JSON.parse('[{"id":1,"logoSrc":"/assets/img/main-logo1.svg","URL":"/"},{"id":2,"logoSrc":"/assets/img/main-logo2.svg","URL":"/"},{"id":3,"logoSrc":"/assets/img/main-logo3.svg","URL":"/"},{"id":4,"logoSrc":"/assets/img/main-logo4.svg","URL":"/"},{"id":5,"logoSrc":"/assets/img/main-logo5.svg","URL":"/"}]');function a(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function i(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"===typeof e)return a(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s=function(){var e=i(o);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"main-logos",children:e.map((function(e,r){return(0,n.jsx)("a",{href:e.URL,children:(0,n.jsx)("img",{src:e.logoSrc,className:"js-img",alt:""})},r)}))})})}},600:function(e,r,t){"use strict";t.d(r,{y:function(){return o}});var n=t(5893),o=function(e){var r=e.detailBlocks;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"wrapper",children:(0,n.jsx)("div",{className:"detail-block__items",children:r.map((function(e,r){return(0,n.jsxs)("div",{className:"detail-block__item",children:[(0,n.jsxs)("div",{className:"detail-block__item-icon",children:[(0,n.jsx)("img",{src:"/assets/img/main-text-decor.svg",className:"js-img",alt:""}),(0,n.jsx)("i",{className:e.icon})]}),(0,n.jsxs)("div",{className:"detail-block__item-info",children:[(0,n.jsx)("h6",{children:e.step}),e.title]})]},r)}))})})})}},6731:function(e,r,t){"use strict";t.d(r,{Y:function(){return l}});var n=t(5893),o=t(1664),a=t(1163),i=t(7294),s=function(e){var r=e.breadcrumb,t=e.title,s=e.description,c=(0,a.useRouter)();return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"detail-block detail-block_margin",children:(0,n.jsx)("div",{className:"wrapper",children:(0,n.jsxs)("div",{className:"detail-block__content",children:[(0,n.jsx)("h1",{children:t}),r&&(0,n.jsx)("ul",{className:"bread-crumbs",children:null===r||void 0===r?void 0:r.map((function(e,r){var t=e.path,a=e.label;return(0,n.jsx)(i.Fragment,{children:t===c.asPath?(0,n.jsx)("li",{className:"bread-crumbs__item",children:a}):(0,n.jsx)("li",{className:"bread-crumbs__item",children:(0,n.jsx)(o.default,{href:t,children:(0,n.jsx)("a",{className:"bread-crumbs__link",children:a})})})},r)}))}),s&&(0,n.jsx)("span",{className:"error-descr",children:s})]})})})})},c=t(9246),l=function(e){var r=e.children,t=e.breadcrumb,o=e.breadcrumbTitle,a=e.description;return(0,n.jsxs)(c.A,{children:[(0,n.jsx)(s,{breadcrumb:t,title:o,description:a}),(0,n.jsx)(n.Fragment,{children:r})]})}},3287:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return b}});var n=t(5893),o=t(600),a=JSON.parse('[{"step":"","title":"27 Division St, New \\nYork, NY 10002, USA","icon":"icon-map-pin-big"},{"step":"","title":"+1 345 99 71 345 \\ninfo@beshop.com","icon":"icon-phone"},{"step":"","title":"Mon - Fri: 9 am - 6 pm \\nSat - Sun: Holiday","icon":"icon-2"}]');function i(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function s(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"===typeof e)return i(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=function(){var e=s(a);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(o.y,{detailBlocks:e})})},l=function(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"discount discount-contacts js-img",style:{backgroundImage:"url('/assets/img/discount-bg3.jpg')"},children:(0,n.jsx)("div",{className:"wrapper",children:(0,n.jsxs)("div",{className:"discount-info",children:[(0,n.jsx)("span",{className:"saint-text",children:"write to us"}),(0,n.jsx)("span",{className:"main-text",children:"leave a message"}),(0,n.jsx)("p",{children:"Write to us if you have any questions, we will definitely contact you and find a solution."}),(0,n.jsxs)("form",{children:[(0,n.jsx)("div",{className:"box-field",children:(0,n.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter your name"})}),(0,n.jsx)("div",{className:"box-field",children:(0,n.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter your email"})}),(0,n.jsx)("div",{className:"box-field box-field__textarea",children:(0,n.jsx)("textarea",{className:"form-control",placeholder:"Enter your message"})}),(0,n.jsx)("button",{type:"submit",className:"btn",children:"send"})]})]})})})})},u=t(5941);function f(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function d(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"===typeof e)return f(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return f(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var m=function(){var e=d(u);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"contacts-info",children:(0,n.jsx)("div",{className:"wrapper",children:(0,n.jsxs)("div",{className:"contacts-info__content",children:[(0,n.jsxs)("div",{className:"contacts-info__text",children:[(0,n.jsx)("h4",{children:"We take care of you"}),(0,n.jsx)("p",{children:"Email us if you have any questions, we will be sure to contact you and find a solution. Also, our managers will help you choose the product that suits you best, at the best price. From year to year, the BeShop network develops and improves, taking into account all consumer needs and market trends. But for us, the concern remains that when coming to the BeShop store, customers do not have questions about the convenience and comfort of shopping, product quality and the level of professionalism of sales consultants."})]}),(0,n.jsxs)("div",{className:"contacts-info__social",children:[(0,n.jsx)("span",{children:"Find us here:"}),(0,n.jsx)("ul",{children:e.map((function(e,r){return(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:e.path,children:(0,n.jsx)("i",{className:e.icon})})},r)}))})]})]})})})})},p=function(){return(0,n.jsx)("div",{className:"contacts-map",children:(0,n.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28983.22702991677!2d90.39607920093997!3d24.76450174668472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37564f08e1564b13%3A0xdf7da0a35592c079!2sChorpara%20Bus%20Stop!5e0!3m2!1sen!2sbd!4v1638519781775!5m2!1sen!2sbd",width:"100%",height:"450",style:{border:0},loading:"lazy"})})},h=t(7492),y=t(6731),v=[{label:"Home",path:"/"},{label:"Contact",path:"/contact"}],b=function(){return(0,n.jsxs)(y.Y,{breadcrumb:v,breadcrumbTitle:"Contact",children:[(0,n.jsx)(c,{}),(0,n.jsx)(m,{}),(0,n.jsx)(h.O,{}),(0,n.jsx)(l,{}),(0,n.jsx)(p,{})]})}},1664:function(e,r,t){e.exports=t(8418)},1163:function(e,r,t){e.exports=t(387)}},function(e){e.O(0,[246,774,888,179],(function(){return r=3269,e(e.s=r);var r}));var r=e.O();_N_E=r}]);