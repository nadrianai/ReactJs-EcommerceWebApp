"use strict";(self.webpackChunkcleint=self.webpackChunkcleint||[]).push([[106],{6269:function(t,n,r){r(2791);var e=r(2426),a=r(184);n.Z=function(){return(0,a.jsx)("nav",{children:(0,a.jsxs)("ul",{className:"nav flex-column",children:[(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(e.rU,{to:"/user/history",className:"nav-link",children:"HISTORY"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(e.rU,{to:"/user/password",className:"nav-link",children:"PASSWORD"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(e.rU,{to:"/user/wishlist",className:"nav-link",children:"WISHLIST"})})]})})}},377:function(t,n,r){r.d(n,{$f:function(){return v},E9:function(){return c},JM:function(){return p},LV:function(){return l},Mp:function(){return x},WK:function(){return o},gl:function(){return i},sA:function(){return d},uI:function(){return f},zL:function(){return h}});var e=r(7166),a=r(3032),s=r(4569),u=r.n(s),c=function(){var t=(0,a.Z)((0,e.Z)().mark((function t(n,r){return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().post("".concat("http://localhost:8000/api","/user/cart"),{cart:n},{headers:{authoken:r}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n,r){return t.apply(this,arguments)}}(),o=function(){var t=(0,a.Z)((0,e.Z)().mark((function t(n){return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("".concat("http://localhost:8000/api","/user/cart"),{headers:{authoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),i=function(){var t=(0,a.Z)((0,e.Z)().mark((function t(n){return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().delete("".concat("http://localhost:8000/api","/user/cart"),{headers:{authoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,a.Z)((0,e.Z)().mark((function t(n,r){return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().post("".concat("http://localhost:8000/api","/user/address"),{address:n},{headers:{authoken:r}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n,r){return t.apply(this,arguments)}}(),h=function(){var t=(0,a.Z)((0,e.Z)().mark((function t(n,r){return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().post("".concat("http://localhost:8000/api","/user/cart/coupon"),{coupon:n},{headers:{authoken:r}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n,r){return t.apply(this,arguments)}}(),l=function(){var t=(0,a.Z)((0,e.Z)().mark((function t(n,r){return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().post("".concat("http://localhost:8000/api","/user/order"),{stripeResponse:n},{headers:{authoken:r}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n,r){return t.apply(this,arguments)}}(),f=function(){var t=(0,a.Z)((0,e.Z)().mark((function t(n){return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("".concat("http://localhost:8000/api","/user/orders"),{headers:{authoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,a.Z)((0,e.Z)().mark((function t(n){return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("".concat("http://localhost:8000/api","/user/wishlist"),{headers:{authoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,a.Z)((0,e.Z)().mark((function t(n,r){return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().put("".concat("http://localhost:8000/api","/user/wishlist/:productId"),{},{headers:{authoken:r}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n,r){return t.apply(this,arguments)}}(),x=function(){var t=(0,a.Z)((0,e.Z)().mark((function t(n,r){return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().post("".concat("http://localhost:8000/api","/user/wishlist"),{productId:n},{headers:{authoken:r}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n,r){return t.apply(this,arguments)}}()},1106:function(t,n,r){r.r(n);var e=r(678),a=r(8489),s=r(2791),u=r(6269),c=r(9434),o=r(2426),i=r(377),p=r(184);n.default=function(){var t=(0,c.v9)((function(t){return(0,a.Z)({},t)})).user,n=(0,s.useState)([]),r=(0,e.Z)(n,2),h=r[0],l=r[1];(0,s.useEffect)((function(){f()}),[]);var f=function(){(0,i.sA)(t.token).then((function(t){l(t.data.wishlist)}))};return(0,p.jsx)("div",{className:"container-fluid mt-5",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-md-2",children:(0,p.jsx)(u.Z,{})}),(0,p.jsxs)("div",{className:"col",children:[(0,p.jsx)("h4",{children:"Wishlist"}),h.map((function(t,n){return(0,p.jsx)("div",{className:"alert alert secondary bg-light",children:(0,p.jsx)(o.rU,{to:"/product/".concat(t.slug),children:t.title})},n)}))]})]})})}}}]);
//# sourceMappingURL=106.81d269c2.chunk.js.map