(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(31),r=n.n(s),i=(n(39),n(33)),l=n(2),o=(n(40),function(e){for(var t=e+"=",n="",c=document.cookie.split(";"),a=0;a<c.length;a++)if(" "===c[a][0]&&(c[a]=c[a].substring(1)),0===c[a].indexOf(t))return n=c[a].slice(t.length,c[a].length);return n}),u=n(0);var d=function(){return Object(c.useEffect)((function(){""!==o("w_auth")&&(window.location.href="/submit")}),[]),Object(u.jsx)("div",{id:"landing-wrapper",children:Object(u.jsx)("button",{id:"login-btn",onClick:function(){window.location.href="/api/user/login"},children:"42 Log In"})})},j=n(4),b=n.n(j),h=n(12),x=n(10),p=n(3),O=n(6),f=n.n(O),m=n(21);n(61);var g=function(e){var t=e.idx,n=e.text,c=e.checkStatus,a=e.setCheckStatus;return Object(u.jsx)("div",{children:Object(u.jsxs)("label",{htmlFor:t,className:"checkbox-text",children:[Object(u.jsx)("input",{id:t,className:"checkbox",type:"checkbox",checked:c[t],onChange:function(){var e=c[t];a([].concat(Object(m.a)(c.slice(0,t)),[!e],Object(m.a)(c.slice(t+1))))}}),n]})})},v=function(e){var t=e.label,n=e.type,c=e.placeholder,a=e.value,s=e.handleChange;return Object(u.jsxs)("div",{className:"input-wrapper",children:[Object(u.jsx)("h3",{children:t}),Object(u.jsx)("div",{id:"card",children:Object(u.jsx)("input",{type:n,name:"text",value:a,onChange:s,placeholder:c,style:{textAlign:"center"}})})]})},k=function(e){var t=e.className,n=e.handleClick,c=e.text;return Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:t,onClick:n,children:c})})},y=function(e){var t=e.mm,n=e.ss,a=Object(c.useState)(parseInt(t)),s=Object(p.a)(a,2),r=s[0],i=s[1],l=Object(c.useState)(parseInt(n)),o=Object(p.a)(l,2),d=o[0],j=o[1];return Object(c.useEffect)((function(){var e=setInterval((function(){parseInt(d)>0&&j(parseInt(d)-1),0===parseInt(d)&&(0===parseInt(r)?clearInterval(e):(i(parseInt(r)-1),j(59)))}),1e3);return function(){return clearInterval(e)}}),[r,d]),Object(u.jsxs)("div",{style:{margin:"10px"},children:[r,":",d<10?"0".concat(d):d]})},w=(n(62),function(){return Object(u.jsx)("div",{id:"myModal",className:"modal",children:Object(u.jsxs)("div",{className:"modal-content",children:[Object(u.jsx)("p",{className:"text",children:"42 Wi-Fi\ub97c \uc774\uc6a9\ud574\uc8fc\uc138\uc694"}),Object(u.jsx)("p",{className:"text",children:"Wi-Fi : 42 Guest"}),Object(u.jsx)("p",{className:"text",children:"pw : WeL0ve42Seoul"}),Object(u.jsx)("button",{className:"close",onClick:function(){var e=document.createElement("textarea");e.value="WeL0ve42Seoul",document.body.appendChild(e),e.select(),e.setSelectionRange(0,9999),document.execCommand("copy"),document.body.removeChild(e),document.getElementById("myModal").style.display="none"},children:"Copy"})]})})}),N=[" \ubc1c\uc5f4 \uccb4\ud06c\uc2dc 37.5\ub3c4 \uc774\ud558\uc778 \uac83\uc744 \ud655\uc778\ud588\uc2b5\ub2c8\ub2e4."," \uc774 \uc784\uc2dc \ucd9c\uc785\uce74\ub4dc\ub97c \ubd84\uc2e4 \uc2dc \ubd84\uc2e4 \ube44\uc6a9\uc774 \ubc1c\uc0dd\ud558\ub294 \uac83\uc744 \ud655\uc778\ud588\uc2b5\ub2c8\ub2e4."," \ub9c8\uc2a4\ud06c\ub97c \ubc18\ub4dc\uc2dc \uc0c1\uc2dc \ucc29\uc6a9\ud558\uace0 \ubc29\uc5ed\uc218\uce59\uc744 \uc900\uc218\ud560 \uac83\uc744 \uc57d\uc18d\ud558\uba70, \ubaa8\ub4e0 \uc124\ubb38\uc744 \uc774\uc0c1\uc5c6\uc774 \uc791\uc131\ud588\uc74c\uc744 \ud655\uc778\ud569\ub2c8\ub2e4."],C=[" \uc785\uc7a5 \uc548\ub0b4 \uc54c\ub9bc\uc744 \ubc1b\uc740 \ud6c4\ub85c 10\ubd84 \uc774\ub0b4\uc5d0 \uccb4\ud06c\uc778\uc744 \uc644\ub8cc\ud558\uc9c0 \uc54a\uc744 \uc2dc\uc5d0 \ub300\uae30\uac00 \uc790\ub3d9 \ucde8\uc18c\ub428\uc744 \ud655\uc778\ud569\ub2c8\ub2e4."];n(63);var S=function(){var e=Object(c.useState)({userId:"",cardNum:"",waitingNum:null,status:"out",timeOut:null}),t=Object(p.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)({gaepo:0,g_waiting:0,seocho:0,s_waiting:0}),r=Object(p.a)(s,2),i=r[0],l=r[1],d=Object(c.useState)(!1),j=Object(p.a)(d,2),O=j[0],m=j[1],S=Object(c.useState)([!1,!1,!1]),B=Object(p.a)(S,2),I=B[0],W=B[1],F=Object(c.useState)(!1),_=Object(p.a)(F,2),E=_[0],P=_[1],A=Object(c.useState)(!1),T=Object(p.a)(A,2),L=T[0],M=T[1],D=Object(c.useState)(null),J=Object(p.a)(D,2),G=J[0],H=J[1],R=Object(c.useState)(!1),z=Object(p.a)(R,2),X=z[0],q=z[1],K=Object(c.useState)("cannot"),Q=Object(p.a)(K,2),U=Q[0],V=Q[1],Y=n.userId,Z=n.cardNum,$=n.waitingNum,ee=n.status,te=n.timeOut,ne=i.gaepo,ce=i.g_waiting,ae=i.seocho,se=i.s_waiting,re=function(){var e=Object(x.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!E){e.next=24;break}return e.prev=1,e.next=4,f.a.get("/api/card/valid/".concat(Z));case 4:if(!1!==e.sent.data.using){e.next=17;break}return e.prev=6,e.next=9,f.a.post("/api/user/checkIn/".concat(Z));case 9:window.location.href="/end",e.next=15;break;case 12:e.prev=12,e.t0=e.catch(6),console.log(e.t0);case 15:e.next=19;break;case 17:a(Object(h.a)(Object(h.a)({},n),{},{cardNum:""})),alert("\uc774\ubbf8 \uc0ac\uc6a9 \uc911\uc774\uac70\ub098 \uc720\ud6a8\ud55c \uce74\ub4dc \ubc88\ud638\uac00 \uc544\ub2d9\ub2c8\ub2e4");case 19:e.next=24;break;case 21:e.prev=21,e.t1=e.catch(1),400===e.t1.response.status?document.getElementById("myModal").style.display="flex":alert("\uccb4\ud06c\uc778\uc744 \ucc98\ub9ac\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc81c\ud55c \uc778\uc6d0 \ucd08\uacfc\uac00 \uc544\ub2cc \uacbd\uc6b0 \uad00\ub9ac\uc790\uc5d0\uac8c \ubb38\uc758\ud574\uc8fc\uc138\uc694.");case 24:case"end":return e.stop()}}),e,null,[[1,21],[6,12]])})));return function(){return e.apply(this,arguments)}}(),ie=function(){var e=Object(x.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\ud1f4\uc2e4 \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=12;break}return e.prev=1,e.next=4,f.a.post("/api/user/checkOut");case 4:window.location.href="/end",e.next=12;break;case 7:e.prev=7,e.t0=e.catch(1),alert("\uc774\ubbf8 \ucc98\ub9ac\ub41c \uc791\uc5c5\uc785\ub2c8\ub2e4."),window.location.href="/",console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}(),le=function(){var e=Object(x.a)(b.a.mark((function e(){var t,c,s,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!X){e.next=23;break}return e.prev=1,e.next=4,f.a.post("/api/waiting/create/".concat("gaepo"===G?0:1));case 4:return e.prev=4,e.next=7,f.a.get("/api/user/status");case 7:t=e.sent,c=t.data,s=c.user,r=c.cluster,a(Object(h.a)(Object(h.a)({},n),{},{waitingNum:s.waitingNum,timeout:s.timeOut})),l({gaepo:r.gaepo,g_waiting:r.gaepoWaiting,seocho:r.seocho,s_waiting:r.seochoWaiting}),V("waiting"),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),console.log(e.t0);case 17:e.next=23;break;case 19:e.prev=19,e.t1=e.catch(1),console.log(e.t1),400===e.t1.response.status?document.getElementById("myModal").style.display="flex":console.log(e.t1);case 23:case"end":return e.stop()}}),e,null,[[1,19],[4,14]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){var e=function(){var e=Object(x.a)(b.a.mark((function e(){var t,n,c,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("/api/user/status");case 3:t=e.sent,n=t.data,c=n.user,s=n.cluster,a({userId:c.login,cardNum:c.card,status:null!==c.card?"in":"out",waitingNum:c.waitingNum,timeOut:c.timeOut}),l({gaepo:s.gaepo,g_waiting:s.gaepoWaiting,seocho:s.seocho,s_waiting:s.seochoWaiting}),150===s.gaepo&&150!==s.seocho?H("gaepo"):150!==s.gaepo&&150===s.seocho&&H("seocho"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),document.cookie="w_auth=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();""!==o("w_auth")?e():console.log("token null"),JSON.stringify(I)!==JSON.stringify([!0,!0,!0])?m(!1):m(!0),"out"===ee&&(""!==Z&&JSON.stringify(I)===JSON.stringify([!0,!0,!0])?P(!0):P(!1)),"ready"===U&&q(!0===L)}),[Z,I,ee,n,U,L]),Object(u.jsxs)("div",{id:"page-wrapper",children:[Object(u.jsxs)("div",{id:"checkinout",children:[Object(u.jsx)("h1",{id:"title",children:"in"===ee?"42 CheckOut":"cannot"!==U?"42 Waiting":"42 CheckIn"}),Object(u.jsxs)("h4",{children:["\uac1c\ud3ec \uc778\uc6d0 : ",ne," / 150"," ",150===ne?"(".concat(ce,")"):""]}),Object(u.jsxs)("h4",{children:["\uc11c\ucd08 \uc778\uc6d0 : ",ae," / 150"," ",150===ae?"(".concat(se,")"):""]}),Object(u.jsxs)("h3",{children:[" Intra ID : ",Y]}),"in"===ee?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h3",{children:["Card Number : ",Z]}),Object(u.jsx)(k,{className:"submitBtn ready",handleClick:ie,text:"Check Out"})]}):"ready"===U||"waiting"===U?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(u.jsx)("div",{className:"checkbox-wrapper",children:C.map((function(e,t){return Object(u.jsxs)("label",{htmlFor:t,className:"checkbox-text",style:{wordBreak:"keep-all"},children:[Object(u.jsx)("input",{id:t,className:"checkbox",type:"checkbox",checked:L,onChange:function(){M(!L)}}),e]},t)}))})}),"waiting"===U?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h3",{children:["Waiting Number: ",$]}),null!==te?Object(u.jsx)(y,{mm:10,ss:0}):null,Object(u.jsx)(k,{className:"submitBtn ".concat(null!==te?" ready":""),handleClick:function(){null!==te&&V("cannot")},text:"Go to Check In"}),Object(u.jsx)(k,{className:"submitBtn ready",handleClick:function(){window.confirm("\ub300\uae30 \ucde8\uc18c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&V("cannot")},text:"Cancel Waiting"})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{style:{margin:"1rem"},children:[Object(u.jsx)("h3",{children:"Cluster"}),150===ne?Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"radio",name:"cluster",defaultChecked:150!==ae,onChange:function(){H("gaepo")}}),"\uac1c\ud3ec"]}):null,150===ae?Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"radio",name:"cluster",defaultChecked:150!==ne,onChange:function(){H("seocho")}}),"\uc11c\ucd08"]}):null]}),Object(u.jsx)(k,{className:"submitBtn ".concat(X?" ready":""),handleClick:le,text:"Want To Wait"})]})]}):Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"input-wrapper",style:{textAlign:"left"},children:[Object(u.jsxs)("label",{htmlFor:"allCheck",style:{fontSize:"1em"},children:[Object(u.jsx)("input",{id:"allCheck",type:"checkbox",checked:O,onChange:function(e){var t=e.target.checked;m(t),W([t,t,t])}}),"\ubaa8\ub450 \ub3d9\uc758"]}),Object(u.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(u.jsx)("div",{className:"checkbox-wrapper",children:N.map((function(e,t){return Object(u.jsx)(g,{idx:t,text:e,checkStatus:I,setCheckStatus:W},t)}))})})]}),Object(u.jsx)(v,{label:"Card Number",type:"number",placeholder:"\uce74\ub4dc \ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",value:Z,handleChange:function(e){a(Object(h.a)(Object(h.a)({},n),{},{cardNum:e.target.value}))}}),Object(u.jsx)(k,{className:"submitBtn ".concat(E?" ready":""),handleClick:re,text:"Check In"}),150===ne||150===ae?Object(u.jsx)(k,{className:"submitBtn ready",handleClick:function(){V("ready")},text:"Want To Wait"}):null]})]}),Object(u.jsx)(w,{})]})};n(64);var B=function(){return Object(c.useEffect)((function(){setTimeout((function(){return window.location.href="/submit"}),1e3)})),Object(u.jsx)("div",{id:"text-wrapper",children:Object(u.jsx)("h1",{id:"ending-text",children:"Complete!"})})},I=(n(65),n(66),function(e){var t=e.Page,n=e.setPage;return Object(u.jsxs)("div",{className:"paging-wrapper",children:[Object(u.jsx)("button",{className:"pagingBtn",onClick:function(){n(0===t?0:t-1)},children:"\uc774\uc804 \ud398\uc774\uc9c0"}),Object(u.jsx)("label",{children:t}),Object(u.jsx)("button",{className:"pagingBtn",onClick:function(){n(t+1)},children:"\ub2e4\uc74c \ud398\uc774\uc9c0"})]})}),W=Object(c.forwardRef)((function(e,t){Object(c.useImperativeHandle)(t,(function(){return{onSubmit:S}}));var n=Object(c.useState)(0),a=Object(p.a)(n,2),s=a[0],r=a[1],i=Object(c.useState)(0),l=Object(p.a)(i,2),o=l[0],d=l[1],j=Object(c.useState)(""),O=Object(p.a)(j,2),m=O[0],g=O[1],v=Object(c.useState)(0),k=Object(p.a)(v,2),y=k[0],w=k[1],N=[1,2,3,5,6,8,10,11,13,14,15,16,19,20,21,23,25,26,29,34,35,36,37,38,40,41,42,43,44,45,46,47,50,51,52,53,54,55,57,58,59,63,64,65,66,68,69,70,71,72,73,74,76,78,79,80,81,85,86,87,89,90,91,92,93,95,96,99,101,102,103,104,106,108,110,111,112,113,115,116,117,118,122,123,124,125,129,130,132,133,135,136,137,142,146,147,149,150,151,152,153,154,156,158,161,163,166,167,168,169,170,171,172,173,176,179,184,185,186,189,191,198,199,201,204,205,206,207,208,210,212,213,214,215,216,218,219,220,222,225,226,228,229,231,233,234,235,240,242,243],C=function(t){e.setLogs([]),r(t.target.value),d(0)},S=function(){var t=Object(x.a)(b.a.mark((function t(n){var c,a,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),t.prev=1,t.t0=e.type,t.next=0===t.t0?5:1===t.t0?9:2===t.t0?13:3===t.t0?17:4===t.t0?20:23;break;case 5:return t.next=7,f.a.get("/api/log/".concat(0===s?"gaepo":"seocho","/").concat(o));case 7:return c=t.sent,t.abrupt("break",24);case 9:return t.next=11,f.a.get("/api/log/user/".concat(m,"?").concat(o));case 11:return c=t.sent,t.abrupt("break",24);case 13:return t.next=15,f.a.get("/api/log/card/".concat(y,"?").concat(o));case 15:return c=t.sent,t.abrupt("break",24);case 17:return t.next=19,f.a.get("/api/log/checkIn/".concat(s,"?").concat(o));case 19:c=t.sent;case 20:return t.next=22,f.a.get("/api/log/allCard/".concat(s));case 22:c=t.sent;case 23:return t.abrupt("break",24);case 24:a=c.data,3!==e.type&&4!==e.type||(a=c.data.filter((function(e,t){return c.data.findIndex((function(t,n){return e.user._id===t.user._id}))===t})).reverse()),4===e.type&&0==s&&(r=[],N.map((function(e,t){var n=a.find((function(t){if(t.card.cardId===e)return!0}));r.push(Object(h.a)({id:e},n))})),a=r),e.setLogs(a),console.log(a),t.next=34;break;case 31:t.prev=31,t.t1=t.catch(1),console.log(t.t1);case 34:case"end":return t.stop()}}),t,null,[[1,31]])})));return function(e){return t.apply(this,arguments)}}(),B=function(){return Object(u.jsx)("div",{className:"control-section",children:Object(u.jsxs)("form",{onSubmit:S,children:[Object(u.jsxs)("div",{children:[Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"radio",name:"cluster",value:0,checked:0==s,onChange:C}),"\uac1c\ud3ec"]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"radio",name:"cluster",value:1,checked:1==s,onChange:C}),"\uc11c\ucd08"]}),Object(u.jsx)("button",{onClick:S,children:"\ubd88\ub7ec\uc624\uae30"})]}),Object(u.jsx)(I,{Page:o,setPage:d})]})})};switch(e.type){case 0:return B();case 1:return Object(u.jsx)("div",{className:"control-section",children:Object(u.jsxs)("form",{children:[Object(u.jsx)("input",{type:"text",name:"\ub85c\uadf8\uc778",value:m,placeholder:"\uc778\ud2b8\ub77c \uc544\uc774\ub514",onChange:function(e){g(e.target.value)},style:{textAlign:"center"}}),Object(u.jsx)("button",{onClick:S,children:"\ubd88\ub7ec\uc624\uae30"}),Object(u.jsx)(I,{Page:o,setPage:d})]})});case 2:return Object(u.jsx)("div",{className:"control-section",children:Object(u.jsxs)("form",{children:[Object(u.jsx)("input",{type:"text",name:"text",value:y,placeholder:"\uce74\ub4dc\ubc88\ud638",onChange:function(e){w(e.target.value)},style:{textAlign:"center"}}),Object(u.jsx)("button",{onClick:S,children:"\ubd88\ub7ec\uc624\uae30"}),Object(u.jsx)(I,{Page:o,setPage:d})]})});case 3:default:return B()}})),F=n(32);n(68);var _=function(){var e=Object(c.useState)(0),t=Object(p.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),r=Object(p.a)(s,2),i=r[0],l=r[1],o=Object(c.useRef)(),d=function(){var e=Object(x.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("/api/user/status");case 3:(t=e.sent).data&&t.data.isAdmin||(window.location.href="/submit"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),window.location.href="/";case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){d()}),[]);var j=function(){var e=Object(x.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.target.getAttribute("data"),e.next=4,f.a.post("/api/user/forceCheckOut/".concat(n));case 4:e.sent,l([]),o.current.onSubmit(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{style:{justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"},children:[Object(u.jsxs)("div",{className:"selectorWrapper",children:[Object(u.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(u.jsx)("button",{className:"filterBtn",onClick:function(){l([]),a(0)},children:"\ud074\ub7ec\uc2a4\ud130 \ub85c\uadf8"}),Object(u.jsx)("button",{className:"filterBtn",onClick:function(){l([]),a(1)},children:"\ud559\uc0dd \ub85c\uadf8"}),Object(u.jsx)("button",{className:"filterBtn",onClick:function(){l([]),a(2)},children:"\uce74\ub4dc \ub85c\uadf8"}),Object(u.jsx)("button",{className:"filterBtn",onClick:function(){l([]),a(3)},children:"\ubbf8\ubc18\ub0a9 \uce74\ub383"}),Object(u.jsx)("button",{className:"filterBtn",onClick:function(){l([]),a(4)},children:"\ubaa8\ub4e0 \uce74\ub4dc \uc815\ubcf4 \ubcf4\uae30"})]}),Object(u.jsx)("div",{style:{display:"flex",width:"50%",padding:"1rem",height:"5rem"},children:Object(u.jsx)(W,{type:n,setLogs:l,ref:o})})]}),Object(u.jsxs)("div",{style:{overflowX:"scroll",margin:"auto"},children:[Object(u.jsxs)("div",{className:"logWrapper",children:[4===n?Object(u.jsx)("div",{className:"logBox1",children:"\uce74\ub4dc \ubc88\ud638"}):null,Object(u.jsx)("div",{className:"logBox3",children:"\uc2dc\uac04"}),Object(u.jsx)("div",{className:"logBox1",children:"\ucd9c/\uc785"}),Object(u.jsx)("div",{className:"logBox1",children:"\ub85c\uadf8\uc778"}),Object(u.jsx)("div",{className:"logBox1",children:"\uce74\ub4dc \ubc88\ud638"}),Object(u.jsx)("div",{className:"logBox1",children:"\ud074\ub7ec\uc2a4\ud130"}),Object(u.jsx)("div",{className:"logBox1",children:"\uac15\uc81c \ud1f4\uc2e4"})]}),Object(u.jsx)("hr",{}),i&&i.map((function(e,t){var n=new Date(e.createdAt);return Object(u.jsxs)("div",{className:"logWrapper",children:[e.id?Object(u.jsx)("div",{className:"logBox1",children:e.id}):null,n?Object(u.jsx)("div",{className:"logBox3",children:F(n).format("MM\uc6d4 DD\uc77c HH:mm")}):null,e.logType?Object(u.jsx)("div",{className:"logBox1",children:e.logType}):null,e.user?Object(u.jsx)("div",{className:"logBox1",children:e.user.userName}):null,e.card?Object(u.jsx)("div",{className:"logBox1",children:e.card.cardId}):null,e.card?Object(u.jsx)("div",{className:"logBox1",children:0===e.card.type?"\uac1c\ud3ec":"\uc11c\ucd08"}):null,e.user?Object(u.jsx)("div",{className:"logBox1",data:e.user._id,onClick:j,children:e.card.cardId===e.user.cardId?"\ud1f4\uc2e4\ucc98\ub9ac\ud558\uae30":null}):null]},t)}))]})]})};var E=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("h1",{style:{textAlign:"center",touchAction:"pan-y"},children:"404 Not Found"})})};n(69);var P=function(){return Object(u.jsx)(i.a,{children:Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{path:"/",exact:!0,component:d}),Object(u.jsx)(l.a,{path:"/submit",component:S}),Object(u.jsx)(l.a,{path:"/end",component:B}),Object(u.jsx)(l.a,{path:"/admin",component:_}),Object(u.jsx)(l.a,{component:E})]})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};n.p;r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(P,{})}),document.getElementById("root")),A()}},[[75,1,2]]]);
//# sourceMappingURL=main.7a7932b5.chunk.js.map