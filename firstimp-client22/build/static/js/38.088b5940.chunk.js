(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[38],{1238:function(e,t,r){"use strict";r.r(t);var n=r(19),a=(r(1),r(37)),c=r(8),i=r(237),s=r(1231),o=r(247),u=r(63),l=r(1200),d=r(225),h=r(335),p=r(336),j=r(238),b=r(2),m=function(e){var t=e.product,r=t.title,c=t.price,i=t.brand,s=t.count,o=t.images,m=t.color,O=t.shipping,f=Object(a.b)(),x=function(e){var r=[];void 0!==typeof window&&localStorage.getItem("cart")&&(r=JSON.parse(localStorage.getItem("cart"))),r.map((function(a,c){t._id===a._id&&(r[c]=Object(n.a)(Object(n.a)({},r[c]),{},Object(u.a)({},e.target.name,e.target.value)))})),localStorage.setItem("cart",JSON.stringify(r)),f({type:"ADD_TO_CART",payload:r})};return Object(b.jsx)("tbody",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)("div",{style:{width:"100px",height:"auto"},children:o.length?Object(b.jsx)(l.a,{small:o[0].url,large:o[0].url}):Object(b.jsx)(l.a,{small:d.a,large:d.a})})}),Object(b.jsx)("td",{className:"text-center",children:r}),Object(b.jsxs)("td",{children:["Rs. ",c]}),Object(b.jsx)("td",{className:"text-center",children:i}),Object(b.jsx)("td",{className:"text-center",children:Object(b.jsxs)("select",{className:"form-control",name:"color",onChange:x,children:[m?Object(b.jsx)("option",{value:m,children:m}):Object(b.jsx)("option",{children:"---Select---"}),["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"].filter((function(e){return e!==m})).map((function(e){return Object(b.jsx)("option",{value:e,children:e},e)}))]})}),Object(b.jsx)("td",{children:Object(b.jsx)("input",{type:"number",className:"form-control",name:"count",onChange:x,defaultValue:s})}),Object(b.jsx)("td",{className:"text-center",children:"Yes"===O?Object(b.jsx)(h.a,{className:"text-success"}):Object(b.jsx)(p.a,{className:"text-danger"})}),Object(b.jsx)("td",{className:"text-center",children:Object(b.jsx)(j.a,{style:{cursor:"pointer"},className:"text-danger",onClick:function(e){var r=[];void 0!==typeof window&&localStorage.getItem("cart")&&(r=JSON.parse(localStorage.getItem("cart"))),r.map((function(e,n){t._id===e._id&&r.splice(n,1)})),localStorage.setItem("cart",JSON.stringify(r)),f({type:"ADD_TO_CART",payload:r})}})})]})})};t.default=function(e){var t=e.history,r=Object(a.c)((function(e){return Object(n.a)({},e)})),u=r.user,l=r.cart;Object(a.b)();return Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsxs)("h4",{className:"text-center p-3 mt-1 display-4 jumbotron text-danger",children:[l.length,' "Products" in Cart']}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-md-8",children:0===l.length?Object(b.jsxs)("p",{children:[Object(b.jsx)("span",{children:"No Products In Your Cart. Lets "}),Object(b.jsx)(c.b,{to:"/shop",children:"Continue Shopping"})]}):Object(b.jsxs)("table",{className:"table table-bordered",children:[Object(b.jsx)("thead",{className:"thead-light",children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Image"}),Object(b.jsx)("th",{children:"Title"}),Object(b.jsx)("th",{children:"Price"}),Object(b.jsx)("th",{children:"Brand"}),Object(b.jsx)("th",{children:"Color"}),Object(b.jsx)("th",{children:"Quantity"}),Object(b.jsx)("th",{children:"Shipping"}),Object(b.jsx)("th",{children:"Remove"})]})}),l.map((function(e){return Object(b.jsx)(m,{product:e},e._id)}))]})}),Object(b.jsxs)("div",{className:"col-md-4",children:[Object(b.jsx)("h4",{children:"Order Summary"}),Object(b.jsxs)(s.a,{className:"mt-4",children:[Object(b.jsx)("div",{className:"pt-4 pb-4",children:l.length>0?l.map((function(e,t){return Object(b.jsx)("div",{children:Object(b.jsxs)("p",{className:"cart-details",children:[e.title," x ",e.count," = \u20b9 ",e.price*e.count," "]})},t)})):Object(b.jsx)("p",{children:"Your Cart Is Empty"})}),Object(b.jsx)("hr",{}),Object(b.jsxs)("h5",{children:[Object(b.jsx)("span",{className:"text-secondary",children:"Total :"}),Object(b.jsxs)("strong",{children:[" \u20b9 ",l.reduce((function(e,t){return e+t.count*t.price}),0)," "]})]}),Object(b.jsx)("hr",{})]}),u?Object(b.jsx)(o.a,{block:!0,className:"btn btn-primary btn-raised mt-4",onClick:function(){Object(i.i)(l,u.token).then((function(e){console.log(e),e.data.ok&&t.push("/checkout")}))},disabled:0===l.length,children:Object(b.jsx)("strong",{children:"Proceed to Checkout"})}):Object(b.jsx)(c.b,{className:"mt-2",to:{pathname:"/login",state:{from:"/cart"}},children:Object(b.jsx)(o.a,{block:!0,className:"btn btn-primary btn-raised",children:"Log in to Checkout"})})]})]})]})}},225:function(e,t,r){"use strict";t.a=r.p+"static/media/laptop.0ec78e2c.png"},237:function(e,t,r){"use strict";r.d(t,"i",(function(){return o})),r.d(t,"e",(function(){return u})),r.d(t,"d",(function(){return l})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return h})),r.d(t,"f",(function(){return p})),r.d(t,"a",(function(){return j})),r.d(t,"g",(function(){return b})),r.d(t,"h",(function(){return m}));var n=r(13),a=r.n(n),c=r(31),i=r(25),s=r.n(i),o=function(){var e=Object(c.a)(a.a.mark((function e(t,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("".concat("http://52.24.2.108:8000/api","/user/cart"),{cart:t},{headers:{authtoken:r}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),u=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("".concat("http://52.24.2.108:8000/api","/user/cart"),{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.delete("".concat("http://52.24.2.108:8000/api","/user/cart"),{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(a.a.mark((function e(t,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("".concat("http://52.24.2.108:8000/api","/user/cart/coupon"),t,{headers:{authtoken:r}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),h=function(){var e=Object(c.a)(a.a.mark((function e(t,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("".concat("http://52.24.2.108:8000/api","/user/order"),{paymentIntent:t},{headers:{authtoken:r}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("".concat("http://52.24.2.108:8000/api","/user/orders"),{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(c.a)(a.a.mark((function e(t,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("".concat("http://52.24.2.108:8000/api","/user/wishlist"),{productId:t},{headers:{authtoken:r}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),b=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("".concat("http://52.24.2.108:8000/api","/user/wishlist"),{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(c.a)(a.a.mark((function e(t,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.put("".concat("http://52.24.2.108:8000/api","/user/wishlist/").concat(r),{},{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=38.088b5940.chunk.js.map