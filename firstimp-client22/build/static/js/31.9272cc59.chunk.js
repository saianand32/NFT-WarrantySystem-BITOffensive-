(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[31],{1370:function(t,e,n){},1423:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n(1369),c=n(1086),s=n(3),o=n(16),u=n(12),i=n(5),p=n(99),l=n(48),d=n.n(l),b=function(){var t=Object(o.a)(Object(s.a)().mark((function t(e,n){return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.post("".concat("http://localhost:8000/api","/create-payment-integration"),{couponApplied:n},{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),j=n(40),h=n(1421),f=n(917),O=n(1437),m=n(1090),x=n(904),y=n(49),v=n(912),g=n(4),w=function(){var t=Object(p.c)((function(t){return Object(i.a)({},t)})),e=t.user,n=t.coupon,a=t.pageState,l=t.shippingAdd,d=t.wallet,w=Object(p.b)(),k=Object(y.f)(),S=Object(r.useState)(!1),N=Object(u.a)(S,2),I=N[0],C=N[1],A=Object(r.useState)(null),E=Object(u.a)(A,2),P=E[0],D=E[1],F=Object(r.useState)(""),_=Object(u.a)(F,2),T=_[0],H=_[1],L=Object(r.useState)(!0),R=Object(u.a)(L,2),M=R[0],q=R[1],z=Object(r.useState)(""),Y=Object(u.a)(z,2),Z=Y[0],B=Y[1],J=Object(r.useState)(0),U=Object(u.a)(J,2),W=U[0],G=U[1],Q=Object(r.useState)(0),V=Object(u.a)(Q,2),X=V[0],K=V[1],$=Object(r.useState)(0),tt=Object(u.a)($,2),et=tt[0],nt=tt[1],rt=Object(c.useStripe)(),at=Object(c.useElements)(),ct={shippingAdd:l,wallet:d};console.log(d);var st=function(){var t=Object(o.a)(Object(s.a)().mark((function t(n){var r;return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),H(!0),rt&&at){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,rt.confirmCardPayment(Z,{payment_method:{card:at.getElement(c.CardElement),billing_details:{name:e.name,email:e.email}}});case 6:if(r=t.sent,console.log(l),!r.error){t.next=21;break}return t.t0=D,t.t1="Payment Failed ",t.next=13,r;case 13:t.t2=t.sent.error.message,t.t3=t.t1.concat.call(t.t1,t.t2),(0,t.t0)(t.t3),console.log(P),H(!1),t.next=41;break;case 21:if("succeeded"!==r.paymentIntent.status){t.next=36;break}return t.t4=r.paymentIntent.id,t.t5=r.paymentIntent.status,t.next=26,r;case 26:return t.t6=t.sent.paymentIntent,ct.paymentInfo={id:t.t4,status:t.t5,stripeResponse:t.t6},t.t7=console,t.next=31,r;case 31:t.t8=t.sent.paymentIntent,t.t7.log.call(t.t7,t.t8),Object(v.c)(ct,e.token).then((function(t){t.data.ok&&(void 0!==typeof window&&localStorage.removeItem("cart"),void 0!==typeof window&&localStorage.removeItem("shippingAddress"),w({type:"ADD_TO_CART",payload:[]}),w({type:"SHIPPING_ADDRESS",payload:null}),Object(v.d)(e.token),w({type:"COUPON_APPLIED",payload:!1}))})),t.next=37;break;case 36:alert.error("There's some issue while processing payment ");case 37:console.log(r),D(null),H(!1),C(!0);case 41:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),ot=function(){var t=Object(o.a)(Object(s.a)().mark((function t(e){return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:D(e.error?e.error.message:""),q(e.empty);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){b(e.token,n).then((function(t){console.log(t.data),B(t.data.clientSecret),G(t.data.cartTotal),K(t.data.totalAfterDiscount),nt(t.data.payable)}))}),[]),Object(g.jsx)(g.Fragment,{children:a?Object(g.jsxs)("form",{id:"payment-form",className:"stripe-form",onSubmit:st,children:[!I&&Object(g.jsx)("div",{children:n&&void 0!==X?Object(g.jsxs)("p",{className:"alert alert-success",children:["Coupon Applied. You Save: \u20b9",(W-X).toLocaleString("en-IN")]}):Object(g.jsx)("p",{className:"alert alert-danger",children:"No Coupon Applied"})}),Object(g.jsx)("div",{className:"text-center pb-5",children:Object(g.jsx)(h.a,{cover:Object(g.jsx)("img",{src:x.a,style:{height:"50px",objectFit:"cover",marginBottom:"-50px"}}),actions:[Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(O.a,{className:"text-info mt-1"}),Object(g.jsx)("br",{})," Total : \u20b9 ",W.toLocaleString("en-IN")]}),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(m.a,{className:"text-info mt-1"}),Object(g.jsx)("br",{})," payable: \u20b9 ",(et/100).toLocaleString("en-IN")]})]})}),Object(g.jsx)(c.CardElement,{id:"card-element",onChange:ot,options:{style:{base:{color:"#32325d",fontFamily:"Arial, sans-serif",fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#32325d"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}}}),Object(g.jsx)("button",{className:"stripe-button",disabled:T||M||T,children:Object(g.jsx)("span",{id:"button-text",children:T?Object(g.jsx)("div",{className:"spinner",id:"sinner"}):"Pay"})}),Object(g.jsx)("br",{}),P?Object(g.jsx)("div",{className:"card-error text-danger",role:"alert",children:P}):" ",Object(g.jsxs)("p",{className:I?"result-message":"result-message hidden",children:["Payment Successful"," ",Object(g.jsx)(f.a,{type:"link",className:I?"result-message":"result-message hidden",onClick:function(){k.push("/user/history"),w({type:"SESSION",payload:!1})},children:"Check Your Order status here"})]})]}):Object(g.jsx)("div",{className:"h-100 w-100",children:Object(g.jsxs)("p",{className:"alert alert-secondary mx-auto my-auto",children:["Session Expired. ",Object(g.jsx)(j.b,{to:"/cart",children:"Try Again."})]})})})},k=(n(1370),Object(a.a)("pk_test_51LMqfaSC422HHl45yp5Y2LHwaORHuPWdO94liBiw6NWxSPHNVMFvdzTjZiz6Elr4wSyUIxcQt1uZClqMtI2A1Iyq00gXt7MZ2w"));e.default=function(){return Object(g.jsxs)("div",{className:"container p-5 text-center",children:[Object(g.jsx)("h4",{children:"Complete your purchase"}),Object(g.jsx)("p",{className:"text-secondary",children:'"Do not Refresh or Navigate"'}),Object(g.jsx)("p",{className:"text-secondary",children:"For testing purposes :- use Card number as : 4242 4242 4242 4242 "}),Object(g.jsx)(c.Elements,{stripe:k,children:Object(g.jsx)("div",{className:"col-md-8 offset-md-2",children:Object(g.jsx)(w,{})})})]})}},904:function(t,e,n){"use strict";e.a=n.p+"static/media/laptop.0ec78e2c.png"},912:function(t,e,n){"use strict";n.d(e,"i",(function(){return o})),n.d(e,"e",(function(){return u})),n.d(e,"d",(function(){return i})),n.d(e,"b",(function(){return p})),n.d(e,"c",(function(){return l})),n.d(e,"f",(function(){return d})),n.d(e,"a",(function(){return b})),n.d(e,"g",(function(){return j})),n.d(e,"h",(function(){return h}));var r=n(3),a=n(16),c=n(48),s=n.n(c),o=function(){var t=Object(a.a)(Object(r.a)().mark((function t(e,n){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.post("".concat("http://localhost:8000/api","/user/cart"),{cart:e},{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),u=function(){var t=Object(a.a)(Object(r.a)().mark((function t(e){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("".concat("http://localhost:8000/api","/user/cart"),{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),i=function(){var t=Object(a.a)(Object(r.a)().mark((function t(e){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.delete("".concat("http://localhost:8000/api","/user/cart"),{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(a.a)(Object(r.a)().mark((function t(e,n){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.post("".concat("http://localhost:8000/api","/user/cart/coupon"),e,{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),l=function(){var t=Object(a.a)(Object(r.a)().mark((function t(e,n){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.post("".concat("http://localhost:8000/api","/user/order"),{paymentIntent:e},{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),d=function(){var t=Object(a.a)(Object(r.a)().mark((function t(e){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("".concat("http://localhost:8000/api","/user/orders"),{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(){var t=Object(a.a)(Object(r.a)().mark((function t(e,n){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.post("".concat("http://localhost:8000/api","/user/wishlist"),{productId:e},{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),j=function(){var t=Object(a.a)(Object(r.a)().mark((function t(e){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("".concat("http://localhost:8000/api","/user/wishlist"),{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(a.a)(Object(r.a)().mark((function t(e,n){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.put("".concat("http://localhost:8000/api","/user/wishlist/").concat(n),{},{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=31.9272cc59.chunk.js.map