(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(27),i=n.n(r),s=(n(34),n(28)),o=n(2),u=(n(35),n(1));var j=function(){return Object(u.jsx)("div",{className:"btn-wrapper",children:Object(u.jsx)("div",{className:"btn",onClick:function(){window.location.href="".concat("https://api.intra.42.fr/oauth/authorize","?client_id=").concat("f312ff6c8d982b88860a72019668c3d2b6e59b66c6c0e43a783d373519fedc54","&redirect_uri=").concat("http%3A%2F%2F13.209.202.141%2Fapi%2Fuser%2Flogin","&response_type=code")},children:"42 CheckIn"})})},l=n(8),h=n.n(l),d=n(12),p=n(10),b=n(13),O=n.n(b);var f=function(){var e=Object(c.useState)(""),t=Object(p.a)(e,2),n=t[0],a=t[1],r=function(){var e=Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.post("api/user/login",{code:n},{withCredentials:!0});case 3:t=e.sent,localStorage.setItem("w_auth",t.data.w_auth),window.location.href="",e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){a(window.location.search.split("=")[1]),r()})),Object(u.jsx)("div",{children:"code"})};var x=function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"checkbox",checked:e.checkStatus,onChange:function(){}}),e.text]})},v=(n(56),"http://13.209.202.141");var m=function(){var e="juhlee",t=[],n=Object(c.useState)(!0),a=Object(p.a)(n,2),r=a[0],i=a[1],s=Object(c.useState)({0:!0,1:!0,2:!0}),o=Object(p.a)(s,2),j=o[0],l=o[1],b=Object(c.useState)(0),f=Object(p.a)(b,2),m=f[0],k=(f[1],function(){var t=Object(d.a)(h.a.mark((function t(){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.post("".concat(v),{userId:e,isEnter:r,checkStatus:j,cardNum:m});case 3:n=t.sent,console.log(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}()),w=function(e){"in"===e.target.value?i(!0):i(!1)};return Object(u.jsx)("div",{id:"bg",children:Object(u.jsxs)("div",{id:"checkin",children:[Object(u.jsx)("h1",{id:"title",children:"42 CheckIn"}),Object(u.jsxs)("h4",{children:["Intra ID: ",e]}),Object(u.jsxs)("div",{className:"input-wrapper",children:[Object(u.jsx)("h4",{children:"\uc785\uc2e4\uc785\ub2c8\uae4c \ud1f4\uc2e4\uc785\ub2c8\uae4c? "}),Object(u.jsx)("input",{type:"radio",name:"InOut",value:"in",onClick:w}),"\uc785\uc2e4",Object(u.jsx)("input",{type:"radio",name:"InOut",value:"out",onClick:w}),"\ud1f4\uc2e4"]}),Object(u.jsxs)("div",{className:"input-wrapper",children:[Object(u.jsx)("h4",{children:"Check List"}),["\ubc1c\uc5f4 \uccb4\ud06c\uc2dc 37.5\ub3c4 \uc774\ud558\uc778 \uac83\uc744 \ud655\uc778\ud588\uc2b5\ub2c8\ub2e4.","\uc774 \uc784\uc2dc \ucd9c\uc785\uce74\ub4dc\ub97c \ubd84\uc2e4 \uc2dc \ubd84\uc2e4 \ube44\uc6a9\uc774 \ubc1c\uc0dd\ud558\ub294 \uac83\uc744 \ud655\uc778\ud588\uc2b5\ub2c8\ub2e4.","\ub9c8\uc2a4\ud06c\ub97c \ubc18\ub4dc\uc2dc \uc0c1\uc2dc \ucc29\uc6a9\ud558\uace0 \ubc29\uc5ed\uc218\uce59\uc744 \uc900\uc218\ud560 \uac83\uc744 \uc57d\uc18d\ud558\uba70, \ubaa8\ub4e0 \uc124\ubb38\uc744 \uc774\uc0c1\uc5c6\uc774 \uc791\uc131\ud588\uc74c\uc744 \ud655\uc778\ud569\ub2c8\ub2e4."].map((function(e,t){return Object(u.jsx)(x,{text:e,checkStatus:j,setCheckStatus:l},t)}))]}),Object(u.jsxs)("div",{className:"input-wrapper",children:[Object(u.jsx)("h4",{children:"Card Number"}),Object(u.jsx)("select",{children:t.map((function(e){return Object(u.jsx)("option",{value:e,children:e})}))})]}),Object(u.jsx)("div",{className:"submitBtn",onClick:k,children:"Submit"})]})})};n(57);var k=function(){return Object(u.jsxs)(s.a,{children:[Object(u.jsx)(o.a,{path:"/",exact:!0,component:j}),Object(u.jsx)(o.a,{path:"/temp",component:f}),Object(u.jsx)(o.a,{path:"/checkin",component:m})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root")),w()}},[[63,1,2]]]);
//# sourceMappingURL=main.4a263f71.chunk.js.map