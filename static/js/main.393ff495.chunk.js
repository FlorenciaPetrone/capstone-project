(this["webpackJsonpcapstone-proyect"]=this["webpackJsonpcapstone-proyect"]||[]).push([[0],{32:function(e,t,r){"use strict";r.r(t);var c=r(0),n=r.n(c),i=r(19),a=r.n(i),s=r(2),o=r(9),u=r(21),j=r(17),l=r(7),b=r(1),d=n.a.createContext();function O(e){var t=e.children,r=Object(c.useState)([]),n=Object(l.a)(r,2),i=n[0],a=n[1],s=Object(c.useState)([]),o=Object(l.a)(s,2),O=o[0],m=o[1];return Object(c.useEffect)((function(){fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),Object(b.jsx)(d.Provider,{value:{allPhotos:i,cartItems:O,toggleFavorite:function(e){var t=i.map((function(t){return t.id===e?Object(j.a)(Object(j.a)({},t),{},{isFavorite:!t.isFavorite}):t}));a(t)},addImage:function(e){m((function(t){return[].concat(Object(u.a)(t),[e])}))},removeFromCart:function(e){m((function(t){return t.filter((function(t){return t.id!==e}))}))},changeCartIcon:function(){return O.length?Object(b.jsx)("i",{className:"ri-shopping-cart-fill ri-fw ri-2x"}):Object(b.jsx)("i",{className:"ri-shopping-cart-line ri-fw ri-2x"})},setCartItems:m},children:t})}var m=function(){var e=Object(c.useContext)(d).changeCartIcon;return Object(b.jsxs)("header",{children:[Object(b.jsx)(o.b,{to:"/",children:Object(b.jsx)("h2",{children:"PIC SOME!"})}),Object(b.jsx)(o.b,{to:"/cart",children:e()})]})};var f=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),r=t[0],n=t[1],i=Object(c.useRef)(null);function a(){n(!0)}function s(){n(!1)}return Object(c.useEffect)((function(){return i.current&&(i.current.addEventListener("mouseenter",a),i.current.addEventListener("mouseleave",s)),function(){i.current&&(i.current.removeEventListener("mouseenter",a),i.current.removeEventListener("mouseleave",s))}}),[]),[r,i]};var h=function(e){var t=e.item,r=Object(c.useContext)(d).setCartItems,n=f(),i=Object(l.a)(n,2),a=i[0],s=i[1],o=a?"ri-delete-bin-fill":"ri-delete-bin-line";return Object(b.jsxs)("div",{className:"cart-item",children:[Object(b.jsx)("i",{className:o,onClick:function(){return e=t.id,void r((function(t){return t.filter((function(t){return t.id!==e}))}));var e},ref:s}),Object(b.jsx)("img",{src:t.url,width:"130px"}),Object(b.jsx)("p",{children:"$5.99"})]})};var x=function(){var e=Object(c.useContext)(d),t=e.cartItems,r=e.setCartItems,n=Object(c.useState)("Place Order"),i=Object(l.a)(n,2),a=i[0],s=i[1],o=(5.99*t.length).toLocaleString("en-US",{style:"currency",currency:"USD"}),u=t.map((function(e){return Object(b.jsx)(h,{item:e},e.id)}));return Object(b.jsxs)("main",{className:"cart-page",children:[Object(b.jsx)("h1",{children:"Check out"}),u,Object(b.jsxs)("p",{className:"total-cost",children:["Total: ",o," "]}),t.length>0?Object(b.jsx)("div",{className:"order-button",children:Object(b.jsx)("button",{onClick:function(){s("Ordering..."),setTimeout((function(){console.log("Order Placed!"),s("Place Order"),r([])}),3e3)},children:a})}):Object(b.jsx)("p",{children:"You have no items in your cart."})]})};var v=function(e){var t=e.className,r=e.img,n=f(),i=Object(l.a)(n,2),a=i[0],s=i[1],o=Object(c.useContext)(d),u=o.toggleFavorite,j=o.addImage,O=o.removeFromCart,m=o.cartItems;return Object(b.jsxs)("div",{className:"".concat(t," image-container"),ref:s,children:[Object(b.jsx)("img",{src:r.url,alt:"",className:"image-grid"}),r.isFavorite?Object(b.jsx)("i",{className:"ri-heart-fill favorite",onClick:function(){return u(r.id)}}):a?Object(b.jsx)("i",{className:"ri-heart-line favorite",onClick:function(){return u(r.id)}}):void 0,m.some((function(e){return e.id===r.id}))?Object(b.jsx)("i",{className:"ri-shopping-cart-fill cart",onClick:function(){return O(r.id)}}):a?Object(b.jsx)("i",{className:"ri-add-circle-line cart",onClick:function(){return j(r)}}):void 0]})};function g(e){return e%5===0?"big":e%6===0?"wide":void 0}var p=function(){var e=Object(c.useContext)(d).allPhotos.map((function(e,t){return Object(b.jsx)(v,{img:e,className:g(t)},e.id)}));return Object(b.jsx)("main",{className:"photos",children:e})};var C=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(m,{}),Object(b.jsxs)(s.c,{children:[Object(b.jsx)(s.a,{exact:!0,path:"/",children:Object(b.jsx)(p,{})}),Object(b.jsx)(s.a,{path:"/cart",children:Object(b.jsx)(x,{})})]})]})};a.a.render(Object(b.jsx)(O,{children:Object(b.jsx)(o.a,{children:Object(b.jsx)(C,{})})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.393ff495.chunk.js.map