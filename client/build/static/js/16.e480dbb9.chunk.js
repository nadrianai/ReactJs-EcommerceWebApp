"use strict";(self.webpackChunkcleint=self.webpackChunkcleint||[]).push([[16],{6269:function(t,r,n){n(2791);var e=n(2426),s=n(184);r.Z=function(){return(0,s.jsx)("nav",{children:(0,s.jsxs)("ul",{className:"nav flex-column",children:[(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(e.rU,{to:"/user/history",className:"nav-link",children:"HISTORY"})}),(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(e.rU,{to:"/user/password",className:"nav-link",children:"PASSWORD"})}),(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(e.rU,{to:"/user/wishlist",className:"nav-link",children:"WISHLIST"})})]})})}},377:function(t,r,n){n.d(r,{$f:function(){return x},E9:function(){return u},JM:function(){return p},LV:function(){return l},Mp:function(){return v},WK:function(){return o},gl:function(){return i},sA:function(){return d},uI:function(){return f},zL:function(){return h}});var e=n(7166),s=n(3032),a=n(4569),c=n.n(a),u=function(){var t=(0,s.Z)((0,e.Z)().mark((function t(r,n){return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c().post("".concat("http://localhost:8000/api","/user/cart"),{cart:r},{headers:{authoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(r,n){return t.apply(this,arguments)}}(),o=function(){var t=(0,s.Z)((0,e.Z)().mark((function t(r){return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c().get("".concat("http://localhost:8000/api","/user/cart"),{headers:{authoken:r}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),i=function(){var t=(0,s.Z)((0,e.Z)().mark((function t(r){return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c().delete("".concat("http://localhost:8000/api","/user/cart"),{headers:{authoken:r}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,s.Z)((0,e.Z)().mark((function t(r,n){return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c().post("".concat("http://localhost:8000/api","/user/address"),{address:r},{headers:{authoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(r,n){return t.apply(this,arguments)}}(),h=function(){var t=(0,s.Z)((0,e.Z)().mark((function t(r,n){return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c().post("".concat("http://localhost:8000/api","/user/cart/coupon"),{coupon:r},{headers:{authoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(r,n){return t.apply(this,arguments)}}(),l=function(){var t=(0,s.Z)((0,e.Z)().mark((function t(r,n){return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c().post("".concat("http://localhost:8000/api","/user/order"),{stripeResponse:r},{headers:{authoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(r,n){return t.apply(this,arguments)}}(),f=function(){var t=(0,s.Z)((0,e.Z)().mark((function t(r){return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c().get("".concat("http://localhost:8000/api","/user/orders"),{headers:{authoken:r}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),d=function(){var t=(0,s.Z)((0,e.Z)().mark((function t(r){return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c().get("".concat("http://localhost:8000/api","/user/wishlist"),{headers:{authoken:r}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),x=function(){var t=(0,s.Z)((0,e.Z)().mark((function t(r,n){return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c().put("".concat("http://localhost:8000/api","/user/wishlist/:productId"),{},{headers:{authoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(r,n){return t.apply(this,arguments)}}(),v=function(){var t=(0,s.Z)((0,e.Z)().mark((function t(r,n){return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c().post("".concat("http://localhost:8000/api","/user/wishlist"),{productId:r},{headers:{authoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(r,n){return t.apply(this,arguments)}}()},9016:function(t,r,n){n.r(r);var e=n(678),s=n(8489),a=n(2791),c=n(6269),u=n(377),o=n(9434),i=(n(9085),n(184));r.default=function(){var t=(0,o.v9)((function(t){return(0,s.Z)({},t)})).user,r=(0,a.useState)([]),n=(0,e.Z)(r,2),p=n[0],h=n[1];return(0,a.useEffect)((function(){(0,u.uI)(t.token).then((function(t){return h(t.data)}))}),[t]),(0,i.jsx)("div",{className:"container-fluid mt-5",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-md-2",children:(0,i.jsx)(c.Z,{})}),(0,i.jsxs)("div",{className:"col",children:[(0,i.jsx)("h4",{className:"ml-5 p-3",children:p.length>0?"User purchase orders":"No puschase orders"}),p.map((function(t,r){return(0,i.jsx)("div",{className:"m-5 p-3 card",children:(0,i.jsxs)("table",{className:"table table-bordered",children:[(0,i.jsx)("thead",{className:"thead-light",children:(0,i.jsx)("tr",{children:(0,i.jsx)("th",{scope:"col",children:"Title"})})}),(0,i.jsx)("tbody",{children:t.products.map((function(t,r){return(0,i.jsx)("tr",{children:(0,i.jsx)("td",{children:(0,i.jsxs)("b",{children:[t.count," x ",t.title]})})},r)}))})]})},r)}))]})]})})}}}]);
//# sourceMappingURL=16.e480dbb9.chunk.js.map