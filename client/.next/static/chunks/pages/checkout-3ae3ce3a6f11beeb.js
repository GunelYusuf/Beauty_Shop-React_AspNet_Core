(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[222],{354:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/checkout",function(){return a(3344)}])},6731:function(e,s,a){"use strict";a.d(s,{Y:function(){return o}});var c=a(5893),i=a(1664),t=a(1163),l=a(7294),n=function(e){var s=e.breadcrumb,a=e.title,n=e.description,r=(0,t.useRouter)();return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("div",{className:"detail-block detail-block_margin",children:(0,c.jsx)("div",{className:"wrapper",children:(0,c.jsxs)("div",{className:"detail-block__content",children:[(0,c.jsx)("h1",{children:a}),s&&(0,c.jsx)("ul",{className:"bread-crumbs",children:null===s||void 0===s?void 0:s.map((function(e,s){var a=e.path,t=e.label;return(0,c.jsx)(l.Fragment,{children:a===r.asPath?(0,c.jsx)("li",{className:"bread-crumbs__item",children:t}):(0,c.jsx)("li",{className:"bread-crumbs__item",children:(0,c.jsx)(i.default,{href:a,children:(0,c.jsx)("a",{className:"bread-crumbs__link",children:t})})})},s)}))}),n&&(0,c.jsx)("span",{className:"error-descr",children:n})]})})})})},r=a(9246),o=function(e){var s=e.children,a=e.breadcrumb,i=e.breadcrumbTitle,t=e.description;return(0,c.jsxs)(r.A,{children:[(0,c.jsx)(n,{breadcrumb:a,title:i,description:t}),(0,c.jsx)(c.Fragment,{children:s})]})}},3344:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return f}});var c=a(5893),i=a(7294),t=(a(2136),a(2654)),l=a(1664),n=function(e){var s=e.order,a=s.image,i=s.name,t=s.price,n=s.productNumber,r=s.id,o=s.quantity;return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:"checkout-order__item",children:[(0,c.jsx)(l.default,{href:"/product/".concat(r),children:(0,c.jsx)("a",{className:"checkout-order__item-img",children:(0,c.jsx)("img",{src:a,className:"js-img",alt:""})})}),(0,c.jsxs)("div",{className:"checkout-order__item-info",children:[(0,c.jsx)(l.default,{href:"/product/".concat(r),children:(0,c.jsxs)("a",{className:"title6",children:[i," ",(0,c.jsxs)("span",{children:["x",o]})]})}),(0,c.jsxs)("span",{className:"checkout-order__item-price",children:["$",(t*o).toFixed(2)]}),(0,c.jsxs)("span",{className:"checkout-order__item-num",children:["SKU: ",n]})]})]})})},r=function(){var e=(0,i.useContext)(t.CartContext).cart,s=e.reduce((function(e,s){return e+Number(s.price)*Number(s.quantity)}),0);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:"checkout-order",children:[(0,c.jsx)("h5",{children:"Your Order"}),e.map((function(e){return(0,c.jsx)(n,{order:e},e.id)}))]}),(0,c.jsxs)("div",{className:"cart-bottom__total",children:[(0,c.jsxs)("div",{className:"cart-bottom__total-goods",children:["Goods on",(0,c.jsxs)("span",{children:["$",s.toFixed(2)]})]}),(0,c.jsxs)("div",{className:"cart-bottom__total-promo",children:["Discount on promo code",(0,c.jsx)("span",{children:"No"})]}),(0,c.jsxs)("div",{className:"cart-bottom__total-delivery",children:["Delivery"," ",(0,c.jsx)("span",{className:"cart-bottom__total-delivery-date",children:"(Aug 28,2020 at 11:30)"}),(0,c.jsx)("span",{children:"$30"})]}),(0,c.jsxs)("div",{className:"cart-bottom__total-num",children:["total:",(0,c.jsxs)("span",{children:["$",(s+30).toFixed(2)]})]})]})]})},o=a(3658),d=[{label:"Country 1",value:"1"},{label:"Country 2",value:"2"}],x=function(e){var s=e.onNext;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("div",{className:"checkout-form",children:(0,c.jsxs)("form",{onClick:function(e){return e.preventDefault()},children:[(0,c.jsxs)("div",{className:"checkout-form__item",children:[(0,c.jsx)("h4",{children:"Info about you"}),(0,c.jsx)("div",{className:"box-field",children:(0,c.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter your name"})}),(0,c.jsx)("div",{className:"box-field",children:(0,c.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter your last name"})}),(0,c.jsxs)("div",{className:"box-field__row",children:[(0,c.jsx)("div",{className:"box-field",children:(0,c.jsx)("input",{type:"tel",className:"form-control",placeholder:"Enter your phone"})}),(0,c.jsx)("div",{className:"box-field",children:(0,c.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter your mail"})})]})]}),(0,c.jsxs)("div",{className:"checkout-form__item",children:[(0,c.jsx)("h4",{children:"Delivery Info"}),(0,c.jsx)(o.Z,{options:d,className:"react-dropdown",onChange:function(e){return console.log(e.value)},placeholder:"Select a country"}),(0,c.jsxs)("div",{className:"box-field__row",children:[(0,c.jsx)("div",{className:"box-field",children:(0,c.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter the city"})}),(0,c.jsx)("div",{className:"box-field",children:(0,c.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter the address"})})]}),(0,c.jsxs)("div",{className:"box-field__row",children:[(0,c.jsx)("div",{className:"box-field",children:(0,c.jsx)("input",{type:"text",className:"form-control",placeholder:"Delivery day"})}),(0,c.jsx)("div",{className:"box-field",children:(0,c.jsx)("input",{type:"text",className:"form-control",placeholder:"Delivery time"})})]})]}),(0,c.jsxs)("div",{className:"checkout-form__item",children:[(0,c.jsx)("h4",{children:"Note"}),(0,c.jsx)("div",{className:"box-field box-field__textarea",children:(0,c.jsx)("textarea",{className:"form-control",placeholder:"Order note"})}),(0,c.jsxs)("label",{className:"checkbox-box checkbox-box__sm",children:[(0,c.jsx)("input",{type:"checkbox"}),(0,c.jsx)("span",{className:"checkmark"}),"Create an account"]})]}),(0,c.jsx)("div",{className:"checkout-buttons",children:(0,c.jsxs)("button",{onClick:s,className:"btn btn-icon btn-next",children:["next ",(0,c.jsx)("i",{className:"icon-arrow"})]})})]})})})},m=function(e){var s=e.onNext,a=e.onPrev,t=(0,i.useState)("credit-card"),l=t[0],n=t[1];return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:"checkout-payment checkout-form",children:[(0,c.jsx)("h4",{children:"Payment Methods"}),(0,c.jsxs)("div",{className:"checkout-payment__item ".concat("credit-card"===l&&"active"),children:[(0,c.jsx)("div",{className:"checkout-payment__item-head",children:(0,c.jsxs)("label",{onChange:function(){return n("credit-card")},className:"radio-box",children:["Credit card",(0,c.jsx)("input",{type:"radio",checked:"credit-card"===l,name:"radio"}),(0,c.jsx)("span",{className:"checkmark"}),(0,c.jsxs)("span",{className:"radio-box__info",children:[(0,c.jsx)("i",{className:"icon-info"}),(0,c.jsx)("span",{className:"radio-box__info-content",children:"Aliqua nulla id aliqua minim ullamco adipisicing enim. Do sint nisi velit qui. Ullamco Lorem aliquip dolor nostrud cupidatat amet."})]})]})}),(0,c.jsxs)("div",{className:"checkout-payment__item-content",children:[(0,c.jsxs)("div",{className:"box-field",children:[(0,c.jsx)("span",{children:"Card number"}),(0,c.jsx)("input",{type:"text",className:"form-control",placeholder:"xxxx xxxx xxxx xxxx",maxlength:"16"})]}),(0,c.jsxs)("div",{className:"box-field__row",children:[(0,c.jsxs)("div",{className:"box-field",children:[(0,c.jsx)("span",{children:"Expiration date"}),(0,c.jsx)("input",{type:"text",className:"form-control",placeholder:"mm",maxlength:"2"})]}),(0,c.jsx)("div",{className:"box-field",children:(0,c.jsx)("input",{type:"text",className:"form-control",placeholder:"yy",maxlength:"2"})}),(0,c.jsxs)("div",{className:"box-field",children:[(0,c.jsx)("span",{children:"Security code"}),(0,c.jsx)("input",{type:"text",className:"form-control",placeholder:"CVV",maxlength:"3"})]})]})]})]}),(0,c.jsxs)("div",{className:"checkout-payment__item ".concat("paypal"===l&&"active"),children:[(0,c.jsx)("div",{className:"checkout-payment__item-head",children:(0,c.jsxs)("label",{onClick:function(){return n("paypal")},className:"radio-box",children:["PayPal",(0,c.jsx)("input",{type:"radio",checked:"paypal"===l,name:"radio"}),(0,c.jsx)("span",{className:"checkmark"}),(0,c.jsxs)("span",{className:"radio-box__info",children:[(0,c.jsx)("i",{className:"icon-info"}),(0,c.jsx)("span",{className:"radio-box__info-content",children:"Aliqua nulla id aliqua minim ullamco adipisicing enim. Do sint nisi velit qui. Ullamco Lorem aliquip dolor nostrud cupidatat amet."})]})]})}),(0,c.jsxs)("div",{className:"checkout-payment__item-content",children:[(0,c.jsxs)("div",{className:"box-field",children:[(0,c.jsx)("span",{children:"Card number"}),(0,c.jsx)("input",{type:"text",className:"form-control",placeholder:"xxxx xxxx xxxx xxxx",maxlength:"16"})]}),(0,c.jsxs)("div",{className:"box-field__row",children:[(0,c.jsxs)("div",{className:"box-field",children:[(0,c.jsx)("span",{children:"Expiration date"}),(0,c.jsx)("input",{type:"text",className:"form-control",placeholder:"mm",maxlength:"2"})]}),(0,c.jsx)("div",{className:"box-field",children:(0,c.jsx)("input",{type:"text",className:"form-control",placeholder:"yy",maxlength:"2"})}),(0,c.jsxs)("div",{className:"box-field",children:[(0,c.jsx)("span",{children:"Security code"}),(0,c.jsx)("input",{type:"text",className:"form-control",placeholder:"CVV",maxlength:"3"})]})]})]})]}),(0,c.jsxs)("div",{className:"checkout-payment__item ".concat("cash"===l&&"active"),children:[(0,c.jsx)("div",{className:"checkout-payment__item-head",children:(0,c.jsxs)("label",{onClick:function(){return n("cash")},className:"radio-box",children:["Cash payment",(0,c.jsx)("input",{type:"radio",checked:"cash"===l,name:"radio"}),(0,c.jsx)("span",{className:"checkmark"}),(0,c.jsxs)("span",{className:"radio-box__info",children:[(0,c.jsx)("i",{className:"icon-info"}),(0,c.jsx)("span",{className:"radio-box__info-content",children:"Aliqua nulla id aliqua minim ullamco adipisicing enim. Do sint nisi velit qui. Ullamco Lorem aliquip dolor nostrud cupidatat amet."})]})]})}),(0,c.jsxs)("div",{className:"checkout-payment__item-content",children:[(0,c.jsxs)("div",{className:"box-field",children:[(0,c.jsx)("span",{children:"Card number"}),(0,c.jsx)("input",{type:"text",className:"form-control",placeholder:"xxxx xxxx xxxx xxxx",maxlength:"16"})]}),(0,c.jsxs)("div",{className:"box-field__row",children:[(0,c.jsxs)("div",{className:"box-field",children:[(0,c.jsx)("span",{children:"Expiration date"}),(0,c.jsx)("input",{type:"text",className:"form-control",placeholder:"mm",maxlength:"2"})]}),(0,c.jsx)("div",{className:"box-field",children:(0,c.jsx)("input",{type:"text",className:"form-control",placeholder:"yy",maxlength:"2"})}),(0,c.jsxs)("div",{className:"box-field",children:[(0,c.jsx)("span",{children:"Security code"}),(0,c.jsx)("input",{type:"text",className:"form-control",placeholder:"CVV",maxlength:"3"})]})]})]})]}),(0,c.jsxs)("div",{className:"checkout-buttons",children:[(0,c.jsxs)("button",{onClick:a,className:"btn btn-grey btn-icon",children:[(0,c.jsx)("i",{className:"icon-arrow"})," back"]}),(0,c.jsxs)("button",{onClick:s,className:"btn btn-icon btn-next",children:["next ",(0,c.jsx)("i",{className:"icon-arrow"})]})]})]})})},h=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:"checkout-purchase checkout-form",children:[(0,c.jsxs)("h4",{children:["BeShop thanks",(0,c.jsx)("br",{}),"you for your purchase!"]}),(0,c.jsx)("p",{children:"Consequat minim ipsum aliquip quis ullamco aliquip consequat aliquip sit eu enim duis qui. Velit minim tempor non aliquip officia cillum. Irure Lorem do enim sint in commodo. Ea ea nostrud labore mollit nisi. Cupidatat esse minim mollit qui velit esse voluptate. Excepteur ad officia dolore amet magna ipsum dolor incididunt excepteur ad non. Ea ea qui irure excepteur est consectetur amet est exercitation in."}),(0,c.jsxs)("ul",{className:"checkout-purchase__list",children:[(0,c.jsxs)("li",{children:[(0,c.jsx)("span",{children:"Order number"}),"B-125724_75"]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("span",{children:"Order status"}),"Awaiting payment"]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("span",{children:"Reserved for"}),"22.09.2020"]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("span",{children:"Expected loading date"}),"20.09.2020"]})]}),(0,c.jsx)("a",{href:"#",className:"checkout-purchase__link",children:"print a document -"})]})})},u=[{step:"Step 1",title:"Order Details",icon:"icon-step1"},{step:"Step 2",title:"Payment method",icon:"icon-step2"},{step:"Step 3",title:"Finish!",icon:"icon-step3"}],p=function(){var e=(0,i.useState)(1),s=e[0],a=e[1],t=function(){a(s+1)},l=function(){a(s-1)};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"wrapper",children:(0,c.jsx)("div",{className:"detail-block__items",children:u.map((function(e,a){return(0,c.jsxs)("div",{className:"detail-block__item ".concat(s<=a&&"detail-block__item-inactive"),children:[(0,c.jsxs)("div",{className:"detail-block__item-icon",children:[(0,c.jsx)("img",{src:s<=a?"/assets/img/main-text-decor2.svg":"/assets/img/main-text-decor.svg",className:"js-img",alt:""}),(0,c.jsx)("i",{className:e.icon})]}),(0,c.jsxs)("div",{className:"detail-block__item-info",children:[(0,c.jsx)("h6",{children:e.step}),e.title]})]},a)}))})}),(0,c.jsxs)("div",{className:"checkout ".concat(2==s&&"checkout-step2"),children:[(0,c.jsx)("div",{className:"wrapper",children:(0,c.jsxs)("div",{className:"checkout-content",children:[function(){switch(s){case 1:return(0,c.jsx)(x,{onNext:t});case 2:return(0,c.jsx)(m,{onNext:t,onPrev:l});case 3:return(0,c.jsx)(h,{});default:return null}}(),(0,c.jsx)("div",{className:"checkout-info",children:(0,c.jsx)(r,{})})]})}),(0,c.jsx)("img",{className:"promo-video__decor js-img",src:"/assets/img/promo-video__decor.jpg",alt:""})]})]})},j=a(6731),N=[{label:"Home",path:"/"},{label:"Shop",path:"/shop"},{label:"Checkout",path:"/checkout"}],f=function(){return(0,c.jsx)(j.Y,{breadcrumb:N,breadcrumbTitle:"Checkout",children:(0,c.jsx)(p,{})})}}},function(e){e.O(0,[652,246,136,774,888,179],(function(){return s=354,e(e.s=s);var s}));var s=e.O();_N_E=s}]);