(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(30),s=n.n(r),i=(n(39),n(32)),o=n(2),l=(n(40),n(0));var u=function(){Object(c.useEffect)((function(){""!==e("w_auth")&&(window.location.href="/submit")}),[]);var e=function(e){for(var t=e+"=",n="",c=document.cookie.split(";"),a=0;a<c.length;a++)if(" "===c[a][0]&&(c[a]=c[a].substring(1)),0===c[a].indexOf(t))return n=c[a].slice(t.length,c[a].length);return n};return Object(l.jsx)("div",{id:"landing-wrapper",children:Object(l.jsx)("button",{id:"login-btn",onClick:function(){window.location.href="/api/user/login"},children:"42 Log In"})})},d=n(5),j=n.n(d),b=n(11),h=n(4),x=n(6),p=n.n(x),f=n(20);n(61);var O=function(e){var t=e.name,n=e.text,c=e.checkStatus,a=e.setCheckStatus;return Object(l.jsx)("div",{children:Object(l.jsxs)("label",{htmlFor:t,className:"checkbox-text",children:[Object(l.jsx)("input",{id:t,className:"checkbox",type:"checkbox",checked:c[t],onChange:function(){var e=c[t];a([].concat(Object(f.a)(c.slice(0,t)),[!e],Object(f.a)(c.slice(t+1))))}}),n]})})};n(62);var v=function(){var e=Object(c.useState)(""),t=Object(h.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(h.a)(r,2),i=s[0],o=s[1],u=Object(c.useState)(!1),d=Object(h.a)(u,2),x=d[0],f=d[1],v=Object(c.useState)([!1,!1,!1]),g=Object(h.a)(v,2),m=g[0],k=g[1],w=Object(c.useState)(""),y=Object(h.a)(w,2),N=y[0],C=y[1],S=Object(c.useState)(!1),B=Object(h.a)(S,2),I=B[0],A=B[1],J=Object(c.useState)(0),F=Object(h.a)(J,2),D=F[0],T=F[1],L=Object(c.useState)(0),_=Object(h.a)(L,2),E=_[0],M=_[1],H=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!I){e.next=25;break}return e.prev=1,e.next=4,p.a.get("/api/card/valid/".concat(N));case 4:if(!1!==e.sent.data.using){e.next=17;break}return e.prev=6,e.next=9,p.a.post("/api/user/checkIn/".concat(N));case 9:window.location.href="/end",e.next=15;break;case 12:e.prev=12,e.t0=e.catch(6),console.log(e.t0);case 15:e.next=19;break;case 17:C(""),alert("\uc774\ubbf8 \uc0ac\uc6a9 \uc911\uc774\uac70\ub098 \uc720\ud6a8\ud55c \uce74\ub4dc \ubc88\ud638\uac00 \uc544\ub2d9\ub2c8\ub2e4");case 19:e.next=25;break;case 21:e.prev=21,e.t1=e.catch(1),alert("\uccb4\ud06c\uc778\uc744 \ucc98\ub9ac\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc81c\ud55c \uc778\uc6d0 \ucd08\uacfc\uac00 \uc544\ub2cc \uacbd\uc6b0 \uad00\ub9ac\uc790\uc5d0\uac8c \ubb38\uc758\ud574\uc8fc\uc138\uc694."),console.log(e.t1);case 25:case"end":return e.stop()}}),e,null,[[1,21],[6,12]])})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\ud1f4\uc2e4 \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=12;break}return e.prev=1,e.next=4,p.a.post("/api/user/checkOut");case 4:window.location.href="/end",e.next=12;break;case 7:e.prev=7,e.t0=e.catch(1),alert("\uc774\ubbf8 \ucc98\ub9ac\ub41c \uc791\uc5c5\uc785\ub2c8\ub2e4."),window.location.href="/",console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(b.a)(j.a.mark((function e(){var t,n,c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("/api/user/status");case 3:t=e.sent,n=t.data,c=n.login,r=n.card,a(c),null!==r?(o(!0),C(r)):o(!1),T(t.data.gaepo),M(t.data.seocho),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0),document.cookie="w_auth=; expires=Thu, 01 Jan 1970 00:00:01 GMT;",window.location.href="/";case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){""!==function(e){for(var t=e+"=",n="",c=document.cookie.split(";"),a=0;a<c.length;a++)if(" "===c[a][0]&&(c[a]=c[a].substring(1)),0===c[a].indexOf(t))return c[a].slice(t.length,c[a].length);return n}("w_auth")?P():window.location.href="/",JSON.stringify(m)!==JSON.stringify([!0,!0,!0])?f(!1):f(!0),!1===i&&(""!==N&&JSON.stringify(m)===JSON.stringify([!0,!0,!0])&&A(!0),""!==N&&JSON.stringify(m)===JSON.stringify([!0,!0,!0])||A(!1))}),[N,m,i]),Object(l.jsx)("div",{id:"page-wrapper",children:Object(l.jsxs)("div",{id:"checkinout",children:[Object(l.jsx)("h1",{id:"title",children:i?"42 CheckOut":"42 CheckIn"}),Object(l.jsxs)("h4",{children:[" \uac1c\ud3ec \uc778\uc6d0 : ",D," / 150 "]}),Object(l.jsxs)("h4",{children:[" \uc11c\ucd08 \uc778\uc6d0 : ",E," / 150"]}),Object(l.jsxs)("h3",{children:[" Intra ID : ",n]}),i?Object(l.jsxs)("div",{children:[Object(l.jsxs)("h3",{children:["Card Number : ",N]}),Object(l.jsx)("button",{className:"submitBtn ready",onClick:W,children:"Check Out"})]}):Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"input-wrapper",style:{textAlign:"left"},children:[Object(l.jsxs)("label",{htmlFor:"allCheck",style:{fontSize:"1em"},children:[Object(l.jsx)("input",{id:"allCheck",type:"checkbox",checked:x,onChange:function(e){var t=e.target.checked;f(t),k([t,t,t])}}),"\ubaa8\ub450 \ub3d9\uc758"]}),Object(l.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(l.jsx)("div",{className:"checkbox-wrapper",children:[" \ubc1c\uc5f4 \uccb4\ud06c\uc2dc 37.5\ub3c4 \uc774\ud558\uc778 \uac83\uc744 \ud655\uc778\ud588\uc2b5\ub2c8\ub2e4."," \uc774 \uc784\uc2dc \ucd9c\uc785\uce74\ub4dc\ub97c \ubd84\uc2e4 \uc2dc \ubd84\uc2e4 \ube44\uc6a9\uc774 \ubc1c\uc0dd\ud558\ub294 \uac83\uc744 \ud655\uc778\ud588\uc2b5\ub2c8\ub2e4."," \ub9c8\uc2a4\ud06c\ub97c \ubc18\ub4dc\uc2dc \uc0c1\uc2dc \ucc29\uc6a9\ud558\uace0 \ubc29\uc5ed\uc218\uce59\uc744 \uc900\uc218\ud560 \uac83\uc744 \uc57d\uc18d\ud558\uba70, \ubaa8\ub4e0 \uc124\ubb38\uc744 \uc774\uc0c1\uc5c6\uc774 \uc791\uc131\ud588\uc74c\uc744 \ud655\uc778\ud569\ub2c8\ub2e4."].map((function(e,t){return Object(l.jsx)(O,{name:t,text:e,checkStatus:m,setCheckStatus:k},t)}))})})]}),Object(l.jsxs)("div",{className:"input-wrapper",children:[Object(l.jsx)("h3",{children:"Card Number"}),Object(l.jsx)("div",{id:"card",children:Object(l.jsx)("input",{type:"number",name:"text",value:N,onChange:function(e){C(e.target.value)},placeholder:"\uce74\ub4dc \ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",style:{textAlign:"center"}})})]}),Object(l.jsx)("button",{className:"submitBtn ".concat(I?" ready":""),onClick:H,children:"Check In"})]})]})})};n(63);var g=function(){return Object(c.useEffect)((function(){setTimeout((function(){return window.location.href="/submit"}),1e3)})),Object(l.jsx)("div",{id:"text-wrapper",children:Object(l.jsx)("h1",{id:"ending-text",children:"Complete!"})})},m=n(34),k=(n(64),Object(c.forwardRef)((function(e,t){Object(c.useImperativeHandle)(t,(function(){return{onSubmit:S}}));var n=Object(c.useState)(0),a=Object(h.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)(0),o=Object(h.a)(i,2),u=o[0],d=o[1],x=Object(c.useState)(""),f=Object(h.a)(x,2),O=f[0],v=f[1],g=Object(c.useState)(0),k=Object(h.a)(g,2),w=k[0],y=k[1],N=[1,2,5,6,8,10,11,13,14,15,16,19,20,21,23,25,26,29,34,35,36,37,38,40,41,42,43,44,45,47,50,51,52,53,54,55,57,58,59,63,64,65,66,68,69,70,71,72,73,74,76,78,79,80,81,85,86,87,89,90,91,92,93,95,96,99,101,102,103,104,106,108,110,111,112,113,115,116,117,118,122,123,124,125,129,130,132,133,135,136,137,142,146,147,149,150,151,152,153,154,156,158,161,163,166,167,168,169,170,171,172,173,176,179,184,185,186,189,191,198,199,201,203,204,205,206,207,208,210,212,213,214,215,216,218,219,220,222,225,226,228,229,231,233,234,235,240,242,243,245],C=function(t){e.setLogs([]),s(t.target.value),d(0)},S=function(){var t=Object(b.a)(j.a.mark((function t(n){var c,a,s;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),t.prev=1,t.t0=e.type,t.next=0===t.t0?5:1===t.t0?9:2===t.t0?13:3===t.t0?17:4===t.t0?20:23;break;case 5:return t.next=7,p.a.get("/api/log/".concat(0===r?"gaepo":"seocho","/").concat(u));case 7:return c=t.sent,t.abrupt("break",24);case 9:return t.next=11,p.a.get("/api/log/user/".concat(O));case 11:return c=t.sent,t.abrupt("break",24);case 13:return t.next=15,p.a.get("/api/log/card/".concat(w));case 15:return c=t.sent,t.abrupt("break",24);case 17:return t.next=19,p.a.get("/api/log/checkIn/".concat(r));case 19:c=t.sent;case 20:return t.next=22,p.a.get("/api/log/allCard/".concat(r));case 22:c=t.sent;case 23:return t.abrupt("break",24);case 24:a=c.data,3!==e.type&&4!==e.type||(a=c.data.filter((function(e,t){return c.data.findIndex((function(t,n){return e.user._id===t.user._id}))===t})).reverse()),4===e.type&&0==r&&(s=[],N.map((function(e,t){var n=a.find((function(t){if(t.card.cardId===e)return!0}));s.push(Object(m.a)({id:e},n))})),a=s),e.setLogs(a),console.log(a),t.next=34;break;case 31:t.prev=31,t.t1=t.catch(1),console.log(t.t1);case 34:case"end":return t.stop()}}),t,null,[[1,31]])})));return function(e){return t.apply(this,arguments)}}(),B=function(){return Object(l.jsx)("div",{className:"control-section",children:Object(l.jsx)("form",{onSubmit:S,children:Object(l.jsxs)("div",{children:[Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"radio",name:"cluster",value:0,checked:0==r,onChange:C}),"\uac1c\ud3ec"]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"radio",name:"cluster",value:1,checked:1==r,onChange:C}),"\uc11c\ucd08"]}),Object(l.jsx)("button",{onClick:S,children:"\ubd88\ub7ec\uc624\uae30"})]})})})};switch(e.type){case 0:return B();case 1:return Object(l.jsx)("div",{className:"control-section",children:Object(l.jsxs)("form",{children:[Object(l.jsx)("input",{type:"text",name:"\ub85c\uadf8\uc778",value:O,placeholder:"\uc778\ud2b8\ub77c \uc544\uc774\ub514",onChange:function(e){v(e.target.value)},style:{textAlign:"center"}}),Object(l.jsx)("button",{onClick:S,children:"\ubd88\ub7ec\uc624\uae30"})]})});case 2:return Object(l.jsx)("div",{className:"control-section",children:Object(l.jsxs)("form",{children:[Object(l.jsx)("input",{type:"text",name:"text",value:w,placeholder:"\uce74\ub4dc\ubc88\ud638",onChange:function(e){y(e.target.value)},style:{textAlign:"center"}}),Object(l.jsx)("button",{onClick:S,children:"\ubd88\ub7ec\uc624\uae30"})]})});case 3:default:return B()}}))),w=n(31);n(66);var y=function(){var e=Object(c.useState)(0),t=Object(h.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),s=Object(h.a)(r,2),i=s[0],o=s[1],u=Object(c.useRef)(),d=function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("/api/user/status");case 3:(t=e.sent).data&&t.data.isAdmin||(window.location.href="/submit"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),window.location.href="/";case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){d()}),[]);var x=function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.target.getAttribute("data"),e.next=4,p.a.post("/api/user/forceCheckOut/".concat(n));case 4:e.sent,o([]),u.current.onSubmit(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{style:{justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"},children:[Object(l.jsxs)("div",{className:"selectorWrapper",children:[Object(l.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(l.jsx)("button",{className:"filterBtn",onClick:function(){o([]),a(0)},children:"\ud074\ub7ec\uc2a4\ud130 \ub85c\uadf8"}),Object(l.jsx)("button",{className:"filterBtn",onClick:function(){o([]),a(1)},children:"\ud559\uc0dd \ub85c\uadf8"}),Object(l.jsx)("button",{className:"filterBtn",onClick:function(){o([]),a(2)},children:"\uce74\ub4dc \ub85c\uadf8"}),Object(l.jsx)("button",{className:"filterBtn",onClick:function(){o([]),a(3)},children:"\ubbf8\ubc18\ub0a9 \uce74\ub383"}),Object(l.jsx)("button",{className:"filterBtn",onClick:function(){o([]),a(4)},children:"\ubaa8\ub4e0 \uce74\ub4dc \uc815\ubcf4 \ubcf4\uae30"})]}),Object(l.jsx)("div",{style:{display:"flex",width:"50%",padding:"1rem",height:"5rem"},children:Object(l.jsx)(k,{type:n,setLogs:o,ref:u})})]}),Object(l.jsxs)("div",{style:{overflowX:"scroll",margin:"auto"},children:[Object(l.jsxs)("div",{className:"logWrapper",children:[4===n?Object(l.jsx)("div",{className:"logBox1",children:"\uce74\ub4dc \ubc88\ud638"}):null,Object(l.jsx)("div",{className:"logBox3",children:"\uc2dc\uac04"}),Object(l.jsx)("div",{className:"logBox1",children:"\ucd9c/\uc785"}),Object(l.jsx)("div",{className:"logBox1",children:"\ub85c\uadf8\uc778"}),Object(l.jsx)("div",{className:"logBox1",children:"\uce74\ub4dc \ubc88\ud638"}),Object(l.jsx)("div",{className:"logBox1",children:"\ud074\ub7ec\uc2a4\ud130"}),Object(l.jsx)("div",{className:"logBox1",children:"\uac15\uc81c \ud1f4\uc2e4"})]}),Object(l.jsx)("hr",{}),i&&i.map((function(e,t){var n=new Date(e.createdAt);return Object(l.jsxs)("div",{className:"logWrapper",children:[e.id?Object(l.jsx)("div",{className:"logBox1",children:e.id}):null,n?Object(l.jsx)("div",{className:"logBox3",children:w(n).format("MM\uc6d4 DD\uc77c HH:mm")}):null,e.logType?Object(l.jsx)("div",{className:"logBox1",children:e.logType}):null,e.user?Object(l.jsx)("div",{className:"logBox1",children:e.user.userName}):null,e.card?Object(l.jsx)("div",{className:"logBox1",children:e.card.cardId}):null,e.card?Object(l.jsx)("div",{className:"logBox1",children:0===e.card.type?"\uac1c\ud3ec":"\uc11c\ucd08"}):null,e.user?Object(l.jsx)("div",{className:"logBox1",data:e.user._id,onClick:x,children:e.card.cardId===e.user.cardId?"\ud1f4\uc2e4\ucc98\ub9ac\ud558\uae30":null}):null]},t)}))]})]})};var N=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("h1",{style:{textAlign:"center",touchAction:"pan-y"},children:"404 Not Found"})})};n(67);var C=function(){return Object(l.jsx)(i.a,{children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/",exact:!0,component:u}),Object(l.jsx)(o.a,{path:"/submit",component:v}),Object(l.jsx)(o.a,{path:"/end",component:g}),Object(l.jsx)(o.a,{path:"/admin",component:y}),Object(l.jsx)(o.a,{component:N})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};n.p;s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(C,{})}),document.getElementById("root")),S()}},[[73,1,2]]]);
//# sourceMappingURL=main.4edb5bb5.chunk.js.map