(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[38],{1404:function(t,e,c){"use strict";c.r(e);var n=c(12),r=c(5),u=c(39),i=c(1),s=c(49),a=c(99),o=c(989),j=c(288),b=c(4),f=["children"];e.default=function(t){t.children;var e=Object(u.a)(t,f),c=Object(a.c)((function(t){return Object(r.a)({},t)})).user,O=Object(i.useState)(!1),l=Object(n.a)(O,2),h=l[0],d=l[1];return Object(i.useEffect)((function(){c&&c.token&&Object(j.b)(c.token).then((function(t){console.log("CURRENT ADMIN RES",t),d(!0)})).catch((function(t){console.log("ADMIN ROUTE ERR",t),d(!1)}))}),[c]),h?Object(b.jsx)(s.a,Object(r.a)({},e)):Object(b.jsx)(o.a,{})}},989:function(t,e,c){"use strict";var n=c(12),r=c(1),u=c(49),i=c(4);e.a=function(){var t=Object(r.useState)(5),e=Object(n.a)(t,2),c=e[0],s=e[1],a=Object(u.f)();return Object(r.useEffect)((function(){var t=setInterval((function(){s((function(t){return--t}))}),1e3);return 0===c&&a.push("/"),function(){return clearInterval(t)}}),[c,a]),Object(i.jsx)("div",{className:"container p-5 text-center",children:Object(i.jsxs)("p",{children:["Redirecting you in ",c," seconds"]})})}}}]);
//# sourceMappingURL=38.d1155520.chunk.js.map