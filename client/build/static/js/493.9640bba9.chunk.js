"use strict";(self.webpackChunkcleint=self.webpackChunkcleint||[]).push([[493],{5327:function(n,t,e){var r=e(2791),a=e(184);t.Z=function(n){var t=n.handleSubmit,e=n.name,c=n.setName;return(0,a.jsx)(r.Fragment,{children:(0,a.jsx)("form",{onSubmit:t,children:(0,a.jsxs)("div",{className:"form-group col-md-8",children:[(0,a.jsx)("label",{htmlFor:"",children:"Name"}),(0,a.jsx)("input",{type:"text",className:"form-control",value:e,onChange:function(n){return c(n.target.value)},autoFocus:!0,required:!0}),(0,a.jsx)("button",{className:"btn btn-outline-primary mt-3",children:"Save"})]})})})}},9486:function(n,t,e){e(2791);var r=e(184);t.Z=function(n){var t=n.keyword,e=n.setKeyword;return(0,r.jsx)("div",{className:"form-group col-md-8",children:(0,r.jsx)("input",{type:"search",placeholder:"Filter",value:t,onChange:function(n){n.preventDefault(),e(n.target.value.toLowerCase())},className:"form-control  mb-4"})})}},7537:function(n,t,e){e(2791);var r=e(2426),a=e(184);t.Z=function(){return(0,a.jsx)("nav",{children:(0,a.jsxs)("ul",{className:"nav flex-column",children:[(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.rU,{to:"/admin/dashboard",className:"nav-link",children:"DASHBOARD"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.rU,{to:"/admin/product",className:"nav-link",children:"PRODUCT"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.rU,{to:"/admin/products",className:"nav-link",children:"PRODUCTS"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.rU,{to:"/admin/category",className:"nav-link",children:"CATEGORY"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.rU,{to:"/admin/sub",className:"nav-link",children:"SUB CATEGORY"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.rU,{to:"/admin/coupon",className:"nav-link",children:"COUPON"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.rU,{to:"/user/password",className:"nav-link",children:"PASSWORD"})})]})})}},6729:function(n,t,e){e.d(t,{CP:function(){return s},Gu:function(){return h},k4:function(){return f},n3:function(){return o},qC:function(){return p},sT:function(){return i},yr:function(){return l}});var r=e(7166),a=e(3032),c=e(4569),u=e.n(c),s=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("".concat("http://localhost:8000/api","/categories"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),o=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("".concat("http://localhost:8000/api","/category/").concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),i=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t,e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().delete("".concat("http://localhost:8000/api","/category/").concat(t),{headers:{authoken:e}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),l=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t,e,a){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().put("".concat("http://localhost:8000/api","/category/").concat(t),e,{headers:{authoken:a}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t,e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().post("".concat("http://localhost:8000/api","/category"),t,{headers:{authoken:e}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),h=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("".concat("http://localhost:8000/api","/category/subs/").concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("".concat("http://localhost:8000/api","/find/category/").concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},3818:function(n,t,e){e.d(t,{Gt:function(){return f},PU:function(){return i},WD:function(){return h},cy:function(){return o},kL:function(){return s},m$:function(){return l}});var r=e(7166),a=e(3032),c=e(4569),u=e.n(c),s=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("".concat("http://localhost:8000/api","/subs"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("".concat("http://localhost:8000/api","/sub/").concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),i=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t,e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().delete("".concat("http://localhost:8000/api","/sub/").concat(t),{headers:{authoken:e}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),l=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t,e,a){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().put("".concat("http://localhost:8000/api","/sub/").concat(t),e,{headers:{authoken:a}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t,e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().post("".concat("http://localhost:8000/api","/sub"),t,{headers:{authoken:e}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),h=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("".concat("http://localhost:8000/api","/subs/").concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},8493:function(n,t,e){e.r(t);var r=e(1303),a=e(7166),c=e(3032),u=e(8489),s=e(678),o=e(2791),i=e(7537),l=e(9085),f=e(9434),h=e(6729),p=e(2426),d=e(2622),m=e(1752),v=e(5327),x=e(9486),Z=e(3818),g=e(184);t.default=function(){var n=(0,o.useState)(""),t=(0,s.Z)(n,2),e=t[0],w=t[1],j=(0,o.useState)([]),y=(0,s.Z)(j,2),b=y[0],k=y[1],N=(0,o.useState)(""),C=(0,s.Z)(N,2),S=C[0],U=C[1],A=(0,o.useState)([]),O=(0,s.Z)(A,2),D=O[0],P=O[1],L=(0,o.useState)(""),R=(0,s.Z)(L,2),z=R[0],E=R[1],H=(0,f.v9)((function(n){return(0,u.Z)({},n)})).user;(0,o.useEffect)((function(){F(),G()}),[]);var T=function(){var n=(0,c.Z)((0,a.Z)().mark((function n(t,e){return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:window.confirm("Are you sure you want to delete ".concat(e," subcategory?"))&&(0,Z.PU)(t,H.token).then((function(n){l.Am.error("".concat(n.data.name," deleted succesfully!")),P(D.filter((function(n){return n.name!==e})))})).catch((function(n){l.Am.error("There was an error deleting this subcategory!")}));case 1:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),F=function(){(0,h.CP)().then((function(n){k(n.data)})).catch((function(n){}))},G=function(){(0,Z.kL)().then((function(n){P(n.data)})).catch((function(n){}))};return(0,g.jsx)("div",{className:"container-fluid mt-5",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)("div",{className:"col-md-2",children:(0,g.jsx)(i.Z,{})}),(0,g.jsxs)("div",{className:"col",children:[(0,g.jsx)("h4",{children:"Create Subcategory"}),(0,g.jsxs)("div",{className:"form-group col-md-8",children:[(0,g.jsx)("label",{htmlFor:"",children:"Parent Category "}),(0,g.jsx)("br",{}),(0,g.jsxs)("select",{name:"category",onChange:function(n){return U(n.target.value)},children:[(0,g.jsx)("option",{value:"",children:" Select"}),b.length>0&&b.map((function(n,t){return(0,g.jsx)("option",{value:n._id,children:n.name},t)}))]})]}),(0,g.jsx)(v.Z,{handleSubmit:function(n){n.preventDefault(),(0,Z.Gt)({name:e,parent:S},H.token).then((function(n){w(""),l.Am.success("".concat(n.data.name," subcategory created!")),P((function(t){return[].concat((0,r.Z)(t),[n.data])}))})).catch((function(n){console.log(n),l.Am.error("Subcategory create failed!")}))},name:e,setName:w}),(0,g.jsx)("hr",{className:"col-md-8"}),(0,g.jsx)(x.Z,{keyword:z,setKeyword:E}),D.filter(function(n){return function(t){return t.name.toLowerCase().includes(n)}}(z)).map((function(n,t){return(0,g.jsxs)("div",{className:"col-md-8 alert alert-secondary",children:[(0,g.jsx)("span",{children:"".concat(t+1,". ").concat(n.name)}),"   ",(0,g.jsx)("span",{className:"ml-3 float-right",style:{cursor:"pointer"},onClick:function(){return T(n.slug,n.name)},children:(0,g.jsx)(d.Z,{className:"text-danger"})}),"   ",(0,g.jsx)(p.rU,{to:"/admin/sub/".concat(n.slug),children:(0,g.jsx)("span",{className:" float-right",children:(0,g.jsx)(m.Z,{className:"text-warning"})})})]},t)}))]})]})})}},2622:function(n,t,e){e.d(t,{Z:function(){return o}});var r=e(8428),a=e(2791),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},u=e(4963),s=function(n,t){return a.createElement(u.Z,(0,r.Z)((0,r.Z)({},n),{},{ref:t,icon:c}))};s.displayName="DeleteOutlined";var o=a.forwardRef(s)},1752:function(n,t,e){e.d(t,{Z:function(){return o}});var r=e(8428),a=e(2791),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},u=e(4963),s=function(n,t){return a.createElement(u.Z,(0,r.Z)((0,r.Z)({},n),{},{ref:t,icon:c}))};s.displayName="EditOutlined";var o=a.forwardRef(s)}}]);
//# sourceMappingURL=493.9640bba9.chunk.js.map