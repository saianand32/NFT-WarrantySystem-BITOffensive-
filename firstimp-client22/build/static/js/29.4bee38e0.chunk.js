(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[29],{1235:function(t,e,n){"use strict";n.r(e);var r=n(19),c=n(46),a=n(1),u=n(90),s=n(232),o=n(210),i=n(1231),p=n(225),f=n(631),d=n(337),l=n(8),h=n(2),b=i.a.Meta,j=function(t){var e=t.product,n=t.handleDeleteProduct,r=e.images,c=e.description,a=e.slug,u=e.title;return Object(h.jsx)(i.a,{cover:Object(h.jsx)("img",{src:r&&r.length>0?r[0].url:p.a,style:{height:"200px",objectFit:"cover"},className:"p-1"}),actions:[Object(h.jsx)(l.b,{to:"/admin/product/".concat(a),children:Object(h.jsx)(f.a,{className:"text-primary"})}),Object(h.jsx)(d.a,{className:"text-danger",onClick:function(){return n(a,u)}})],children:Object(h.jsx)(b,{title:u,description:"".concat(c&&c.substring(0,50),"...")})})},v=n(37),x=n(43);e.default=function(){var t=Object(a.useState)([]),e=Object(c.a)(t,2),n=e[0],i=e[1],p=Object(a.useState)(!1),f=Object(c.a)(p,2),d=f[0],l=f[1],b=Object(v.c)((function(t){return Object(r.a)({},t)})).user;Object(a.useEffect)((function(){O()}),[]);var O=function(){l(!0),Object(s.f)(100).then((function(t){l(!1),i(t.data)})).catch((function(t){l(!1),console.log(t)}))},m=function(t,e){l(!0),Object(s.b)(t,b.token).then((function(t){l(!1),console.log(t),x.b.error("".concat(e," successfully deleted")),O()})).catch((function(t){l(!1),x.b.error(t.response.data.err),console.log(t)}))};return Object(h.jsx)("div",{className:"container-fluid",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-md-2",children:Object(h.jsx)(u.a,{})}),Object(h.jsxs)("div",{className:"col",children:[d?Object(h.jsx)(o.a,{}):Object(h.jsx)("h1",{children:"All Products"}),Object(h.jsx)("div",{className:"row",children:n.map((function(t){return Object(h.jsx)("div",{className:"col-md-4 pb-3",children:Object(h.jsx)(j,{product:t,handleDeleteProduct:m})},t._id)}))})]})]})})}},225:function(t,e,n){"use strict";e.a=n.p+"static/media/laptop.0ec78e2c.png"},232:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"f",(function(){return i})),n.d(e,"b",(function(){return p})),n.d(e,"d",(function(){return f})),n.d(e,"j",(function(){return d})),n.d(e,"e",(function(){return l})),n.d(e,"g",(function(){return h})),n.d(e,"i",(function(){return b})),n.d(e,"h",(function(){return j})),n.d(e,"c",(function(){return v}));var r=n(13),c=n.n(r),a=n(31),u=n(25),s=n.n(u),o=function(){var t=Object(a.a)(c.a.mark((function t(e,n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.post("".concat("http://52.24.2.108:8000/api","/product"),e,{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),i=function(){var t=Object(a.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("".concat("http://52.24.2.108:8000/api","/products/").concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(a.a)(c.a.mark((function t(e,n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.delete("".concat("http://52.24.2.108:8000/api","/product/").concat(e),{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),f=function(){var t=Object(a.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("".concat("http://52.24.2.108:8000/api","/product/").concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(a.a)(c.a.mark((function t(e,n,r){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.put("".concat("http://52.24.2.108:8000/api","/product/").concat(e),n,{headers:{authtoken:r}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),l=function(){var t=Object(a.a)(c.a.mark((function t(e,n,r){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.post("".concat("http://52.24.2.108:8000/api","/products"),{sort:e,order:n,page:r});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),h=function(){var t=Object(a.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("".concat("http://52.24.2.108:8000/api","/products/total"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),b=function(){var t=Object(a.a)(c.a.mark((function t(e,n,r){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.put("".concat("http://52.24.2.108:8000/api","/product/star/").concat(e),{star:n},{headers:{authtoken:r}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),j=function(){var t=Object(a.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("".concat("http://52.24.2.108:8000/api","/product/related/").concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(a.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.post("".concat("http://52.24.2.108:8000/api","/search/filters"),e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},337:function(t,e,n){"use strict";var r=n(1),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},a=n(86),u=function(t,e){return r.createElement(a.a,Object.assign({},t,{ref:e,icon:c}))};u.displayName="DeleteOutlined";e.a=r.forwardRef(u)},631:function(t,e,n){"use strict";var r=n(1),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},a=n(86),u=function(t,e){return r.createElement(a.a,Object.assign({},t,{ref:e,icon:c}))};u.displayName="EditOutlined";e.a=r.forwardRef(u)}}]);
//# sourceMappingURL=29.4bee38e0.chunk.js.map