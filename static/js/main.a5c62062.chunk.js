(this["webpackJsonpcapstone-proyect"]=this["webpackJsonpcapstone-proyect"]||[]).push([[0],{36:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(19),i=c.n(a),s=c(2),o=c(8),l=c(22),u=c(10),j=c(4),b=c(20),d=c(0),O=r.a.createContext(),h=Object(b.a)("563492ad6f9170000100000141700883e61b45c7a0df7c6679957214");function f(e){var t=e.children,c=Object(n.useState)([]),r=Object(j.a)(c,2),a=r[0],i=r[1],s=Object(n.useState)([]),o=Object(j.a)(s,2),b=o[0],f=o[1],x=Object(n.useState)([]),m=Object(j.a)(x,2),v=m[0],g=m[1],p=Object(n.useState)({query:"Nature",per_page:40,page:1}),C=Object(j.a)(p,2),N=C[0],P=C[1],k=Object(n.useState)({perPage:40,page:1,totalResults:10}),y=Object(j.a)(k,2),I=y[0],S=y[1];return Object(n.useEffect)((function(){h.photos.search(N).then((function(e){i(e.photos);var t=e.page,c=e.per_page,n=e.total_results;S({currentPage:t,perPage:c,totalResults:n})}))}),[N]),Object(d.jsx)(O.Provider,{value:{allPhotos:a,cartItems:b,addImage:function(e){f((function(t){return[].concat(Object(l.a)(t),[e])}))},removeFromCart:function(e){f((function(t){return t.filter((function(t){return t.id!==e}))}))},setCartItems:f,toggleFavorite:function(e){var t=a.map((function(t){return t.id===e?Object(u.a)(Object(u.a)({},t),{},{isFavorite:!t.isFavorite}):t}));i(t);var c=t.filter((function(e){return!0===e.isFavorite}));g(c)},favoritedPhotos:v,requestConfig:N,setRequestConfig:P,paginationRelated:I},children:t})}var x=function(){var e=Object(n.useContext)(O),t=e.favoritedPhotos,c=e.cartItems.length>0?"ri-shopping-cart-fill":"ri-shopping-cart-line",r=t.length>0?"ri-heart-fill":"ri-heart-line";return Object(d.jsxs)("header",{className:"header-container",children:[Object(d.jsx)(o.b,{to:"/",children:Object(d.jsx)("h2",{children:"PIC SOME!"})}),Object(d.jsxs)("div",{className:"icons-container",children:[Object(d.jsx)(o.b,{to:"/favorite",children:Object(d.jsx)("i",{className:"".concat(r," ri-2x ")})}),Object(d.jsx)(o.b,{to:"/cart",children:Object(d.jsx)("i",{className:"".concat(c," ri-2x")})})]})]})};var m=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),c=t[0],r=t[1],a=Object(n.useRef)(null);function i(){r(!0)}function s(){r(!1)}return Object(n.useEffect)((function(){return a.current&&(a.current.addEventListener("mouseenter",i),a.current.addEventListener("mouseleave",s)),function(){a.current&&(a.current.removeEventListener("mouseenter",i),a.current.removeEventListener("mouseleave",s))}}),[]),[c,a]};var v=function(e){var t=e.item,c=Object(n.useContext)(O).setCartItems,r=m(),a=Object(j.a)(r,2),i=a[0],s=a[1],o=i?"ri-delete-bin-fill":"ri-delete-bin-line";return Object(d.jsxs)("div",{className:"cart-item",children:[Object(d.jsx)("i",{className:o,onClick:function(){return e=t.id,void c((function(t){return t.filter((function(t){return t.id!==e}))}));var e},ref:s}),Object(d.jsx)("img",{src:t.src.tiny,width:"130px",alt:""}),Object(d.jsx)("p",{children:"$5.99"})]})};var g=function(){var e=Object(n.useContext)(O),t=e.cartItems,c=e.setCartItems,r=Object(n.useState)("Place Order"),a=Object(j.a)(r,2),i=a[0],s=a[1],o=(5.99*t.length).toLocaleString("en-US",{style:"currency",currency:"USD"}),l=t.map((function(e){return Object(d.jsx)(v,{item:e},e.id)}));return Object(d.jsxs)("main",{className:"cart-page",children:[Object(d.jsx)("h1",{children:"Check out"}),l,Object(d.jsxs)("p",{className:"total-cost",children:["Total: ",o," "]}),t.length>0?Object(d.jsx)("div",{className:"order-button",children:Object(d.jsx)("button",{onClick:function(){s("Ordering..."),setTimeout((function(){console.log("Order Placed!"),s("Place Order"),c([])}),3e3)},children:i})}):Object(d.jsx)("p",{children:"You have no items in your cart."})]})};var p=function(e){var t=e.className,c=e.img,r=m(),a=Object(j.a)(r,2),i=a[0],s=a[1],o=Object(n.useContext)(O),l=o.toggleFavorite,u=o.addImage,b=o.removeFromCart,h=o.cartItems;return Object(d.jsxs)("div",{className:"".concat(t," image-container"),ref:s,children:[Object(d.jsx)("img",{src:c.src.tiny,alt:"",className:"image-grid"}),c.isFavorite?Object(d.jsx)("i",{className:"ri-heart-fill favorite",onClick:function(){return l(c.id)}}):i?Object(d.jsx)("i",{className:"ri-heart-line favorite",onClick:function(){return l(c.id)}}):void 0,h.some((function(e){return e.id===c.id}))?Object(d.jsx)("i",{className:"ri-shopping-cart-fill cart",onClick:function(){return b(c.id)}}):i?Object(d.jsx)("i",{className:"ri-add-circle-line cart",onClick:function(){return u(c)}}):void 0]})},C=function(e){var t=e.changePage,c=Object(n.useContext)(O).paginationRelated,r=c.currentPage,a=c.perPage,i=c.totalResults;return Object(d.jsxs)("div",{className:"pagination-container",children:[1!==r&&Object(d.jsx)("button",{className:"button-hover",onClick:function(){return t("previous")},children:"Previous"}),1!==r&&Object(d.jsx)("button",{disabled:!0,children:r-1}),Object(d.jsx)("button",{disabled:!0,className:"current-page",children:r}),Object(d.jsx)("button",{onClick:function(){return t("next")},children:r+1}),Object(d.jsxs)("p",{children:["...",Math.floor(i/a-r)]}),Object(d.jsx)("button",{className:"button-hover",onClick:function(){return t("next")},children:"Next"})]})},N=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],r=t[1],a=Object(n.useContext)(O),i=(a.requestConfig,a.setRequestConfig);return Object(d.jsxs)("div",{className:"search-container",children:[Object(d.jsx)("input",{type:"text",placeholder:"Write a theme",onChange:function(e){return r(e.target.value)}}),Object(d.jsx)("button",{className:"button-hover",disabled:!c.length,onClick:function(){return i({query:c,page:1,per_page:40})},children:"Search"})]})};function P(e){return e%5===0?"big":e%6===0?"wide":void 0}var k=function(){var e=Object(n.useContext)(O),t=e.allPhotos,c=e.requestConfig,r=e.setRequestConfig,a=t.map((function(e,t){return Object(d.jsx)(p,{img:e,className:P(t)},e.id)}));return Object(d.jsxs)("main",{className:"home-container",children:[Object(d.jsx)(N,{}),Object(d.jsx)("div",{className:"photos",children:a}),0!==t&&Object(d.jsx)(C,{changePage:function(e){var t="next"===e?c.page+1:c.page-1;r(Object(u.a)(Object(u.a)({},c),{},{page:t}))}})]})},y=function(e){var t=e.photo,c=m(),r=Object(j.a)(c,2),a=r[0],i=r[1],s=Object(n.useContext)(O),o=s.toggleFavorite,l=s.addImage,u=s.removeFromCart,b=s.cartItems;return Object(d.jsxs)("div",{className:"fav-image-container",ref:i,children:[Object(d.jsx)("img",{src:t.src.large2x,width:"130px",alt:"",className:"image-grid"}),function(){if(a)return Object(d.jsx)("i",{className:"ri-heart-fill favorite",onClick:function(){return o(t.id)}})}(),b.some((function(e){return e.id===t.id}))?Object(d.jsx)("i",{className:"ri-shopping-cart-fill cart",onClick:function(){return u(t.id)}}):a?Object(d.jsx)("i",{className:"ri-add-circle-line cart",onClick:function(){return l(t)}}):void 0]})},I=function(){var e=Object(n.useContext)(O).favoritedPhotos;console.log(e);var t=e.map((function(e){return Object(d.jsx)(y,{photo:e},e.id)}));return Object(d.jsxs)("main",{className:"cart-page",children:[Object(d.jsx)("h1",{children:"My liked photos"}),Object(d.jsx)("div",{className:"photos",children:t}),0===t.length?Object(d.jsx)("p",{className:"text",children:"Add photos to your list. "}):null]})};var S=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(x,{}),Object(d.jsxs)(s.c,{children:[Object(d.jsx)(s.a,{exact:!0,path:"/",children:Object(d.jsx)(k,{})}),Object(d.jsx)(s.a,{exact:!0,path:"/cart",children:Object(d.jsx)(g,{})}),Object(d.jsx)(s.a,{path:"/favorite",children:Object(d.jsx)(I,{})})]})]})};i.a.render(Object(d.jsx)(f,{children:Object(d.jsx)(o.a,{basename:"/capstone-project",children:Object(d.jsx)(S,{})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.a5c62062.chunk.js.map