(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[25],{1413:function(t,e,n){"use strict";n.r(e);var c=n(12),r=n(1),a=n(915),s=n(925),u=n(888),i=n(4);e.default=function(t){var e=t.match,n=Object(r.useState)({}),o=Object(c.a)(n,2),l=o[0],p=o[1],b=Object(r.useState)([]),d=Object(c.a)(b,2),j=d[0],f=d[1],h=Object(r.useState)(!1),O=Object(c.a)(h,2),x=O[0],m=O[1],v=e.params.slug;return Object(r.useEffect)((function(){Object(s.b)(v).then((function(t){console.log(t),p(t.data.sub),f(t.data.products),m(!1)}))}),[]),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col",children:x?Object(i.jsx)(u.a,{className:"text-center"}):Object(i.jsxs)("h4",{className:"text-center p-3 mt-5 mb-5 display-4 jumbotron text-danger",children:[j.length,' Products in "',l.name,'" Sub Category']})})}),Object(i.jsx)("div",{className:"row",children:j.map((function(t){return Object(i.jsx)("div",{className:"col-md-4",children:Object(i.jsx)(a.a,{product:t})},t._id)}))})]})}},903:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var c=n(1),r=c.createContext(void 0),a=function(t){var e=t.children,n=t.size;return c.createElement(r.Consumer,null,(function(t){return c.createElement(r.Provider,{value:n||t},e)}))};e.b=r},904:function(t,e,n){"use strict";e.a=n.p+"static/media/laptop.0ec78e2c.png"},914:function(t,e,n){"use strict";var c=n(5),r=n(1),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]},name:"close",theme:"outlined"},s=n(275),u=function(t,e){return r.createElement(s.a,Object(c.a)(Object(c.a)({},t),{},{ref:e,icon:a}))};u.displayName="CloseOutlined";e.a=r.forwardRef(u)},915:function(t,e,n){"use strict";var c=n(5),r=n(12),a=n(1),s=n(1421),u=n(291),i=n(40),o=n(959),l=n(1089),p=n(904),b=(n(916),n(923)),d=n.n(b),j=n(99),f=n(4),h=s.a.Meta;e.a=function(t){var e=t.product,n=Object(a.useState)("Click To Add"),b=Object(r.a)(n,2),O=b[0],x=b[1],m=Object(j.c)((function(t){return Object(c.a)({},t)})),v=(m.user,m.cart,Object(j.b)()),g=e.images,w=(e.description,e.slug),y=e.title,N=e.price;return console.log(e),Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(s.a,{style:{boxShadow:"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",borderRadius:"7px",marginTop:"18px"},cover:Object(f.jsx)("img",{src:g&&g.length>0?g[0].url:p.a,style:{height:"200px",objectFit:"cover"},className:"p-3"}),actions:[Object(f.jsxs)(i.b,{to:"/product/".concat(w),style:{},children:[Object(f.jsx)(o.a,{className:"text-primary"})," ",Object(f.jsx)("br",{})," View Product"]}),Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(u.a,{title:O,children:Object(f.jsxs)("a",{onClick:function(){return function(){var t=[];if(void 0!==typeof window){localStorage.getItem("cart")&&(t=JSON.parse(localStorage.getItem("cart"))),t.push(Object(c.a)(Object(c.a)({},e),{},{count:1}));var n=d.a.uniqWith(t,d.a.isEqualWith);localStorage.setItem("cart",JSON.stringify(n)),v({type:"ADD_TO_CART",payload:n}),x("Added")}v({type:"DRAWER_VISIBILITY",payload:!0})}()},children:[Object(f.jsx)(l.a,{className:"text-danger"})," ",Object(f.jsx)("br",{}),0===e.quantity?Object(f.jsx)("div",{className:"text-danger ",children:"Out Of Stock"}):"Add to Cart"]})})})],children:Object(f.jsx)(h,{title:y,description:Object(f.jsxs)("b",{children:["\u20b9",N]})})})})}},916:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n(1);var c=n(918),r=n.n(c),a=n(4),s=function(t){var e=t&&t.ratings,n=[],c=e.length;e.map((function(t){return n.push(t.star)}));var s=n.reduce((function(t,e){return t+e}),0),u=s/c;return Object(a.jsx)("div",{className:"text-center pt-1 pb-3",children:Object(a.jsxs)("span",{children:[Object(a.jsx)(r.a,{starDimension:"20px",starSpacing:"2px",starRatedColor:"red",rating:u,editing:!1})," (",c,")"]})})}},925:function(t,e,n){"use strict";n.d(e,"c",(function(){return u})),n.d(e,"b",(function(){return i})),n.d(e,"d",(function(){return o})),n.d(e,"e",(function(){return l})),n.d(e,"a",(function(){return p}));var c=n(3),r=n(16),a=n(48),s=n.n(a),u=function(){var t=Object(r.a)(Object(c.a)().mark((function t(){return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("".concat("http://localhost:8000/api","/subs"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=Object(r.a)(Object(c.a)().mark((function t(e){return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("".concat("http://localhost:8000/api","/sub/").concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=Object(r.a)(Object(c.a)().mark((function t(e,n){return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.delete("".concat("http://localhost:8000/api","/sub/").concat(e),{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),l=function(){var t=Object(r.a)(Object(c.a)().mark((function t(e,n,r){return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.put("".concat("http://localhost:8000/api","/sub/").concat(e),n,{headers:{authtoken:r}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,c){return t.apply(this,arguments)}}(),p=function(){var t=Object(r.a)(Object(c.a)().mark((function t(e,n){return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.post("".concat("http://localhost:8000/api","/sub"),e,{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=25.9b14fe00.chunk.js.map