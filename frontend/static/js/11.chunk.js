(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{427:function(e,t,a){"use strict";a.d(t,"a",function(){return r});a(1);var n=a(54),c=a(11),r=(Object(n.b)({enter:"zoomIn",exit:"zoomOut",duration:c.i.TRANSITION_TIME}),Object(n.b)({enter:"fadeIn",exit:"fadeOut",duration:c.i.TRANSITION_TIME}));t.b=n.c},441:function(e,t,a){"use strict";var n=a(32),c=a(1);t.a=function(e,t){var a=Object(c.useState)(e),r=Object(n.a)(a,2),l=r[0],o=r[1];return Object(c.useEffect)(function(a){var n=setTimeout(function(){o(e)},t);return function(){return clearTimeout(n)}},[e]),l}},491:function(e,t,a){"use strict";var n=a(1),c=a.n(n),r=a(26),l=a(132);a(129);t.a=function(e){var t=e.message,a=Object(r.b)().t;return c.a.createElement("div",{className:"loading-page"},c.a.createElement(l.a,{heading:a("COMMON.ERROR.SORRY"),message:t||a("COMMON.ERROR.NO_DATA")}))}},492:function(e,t,a){"use strict";var n=a(32),c=a(1),r=a.n(c),l=a(3),o=a(11),E=a(523),i=a(26);t.a=function(e){var t=e.circle,a=e.current,m=e.pageCount,s=e.width,u=e.onChange,O=Object(i.b)().t,d=Object(c.useState)([]),N=Object(n.a)(d,2),T=N[0],b=N[1],f="ltr"===O("DIRECTION")?"left":"right",R="ltr"===O("DIRECTION")?"right":"left";return Object(c.useEffect)(function(e){!s&&(s=E.isMobile?o.q.WIDTH_MOBILE:o.q.WIDTH);var t=Math.ceil(s/2),n=a-t<1?1:a-t,c=a+t-1>m?m:a+t-1;c-n<s&&(1===n&&(c=m<s?m:s),c===m&&(n=m-s+1<1?1:m-s+1));for(var r=[],l=n;l<=c;l++)r.push(l);b(r)},[a,m,s]),r.a.createElement(c.Fragment,null,m>0&&r.a.createElement(l.I,{circle:t},r.a.createElement(l.G,{disabled:1===a,onClick:function(){return u(1)}},r.a.createElement(l.H,{className:"page-link"},r.a.createElement(l.r,{icon:"angle-double-".concat(f)}))),r.a.createElement(l.G,{disabled:1===a,onClick:function(){return u(a-1)}},r.a.createElement(l.H,{className:"page-link"},r.a.createElement(l.r,{icon:"angle-".concat(f)}))),T.map(function(e,t){return r.a.createElement(l.G,{key:e,active:e===a,onClick:function(){return a!==e&&u(e)}},r.a.createElement(l.H,{className:"page-link"},e))}),r.a.createElement(l.G,{disabled:a===m,onClick:function(){return u(a+1)}},r.a.createElement(l.H,{className:"page-link"},r.a.createElement(l.r,{icon:"angle-".concat(R)}))),r.a.createElement(l.G,{disabled:a===m,onClick:function(){return u(m)}},r.a.createElement(l.H,{className:"page-link"},r.a.createElement(l.r,{icon:"angle-double-".concat(R)})))))}},493:function(e,t,a){"use strict";var n=a(24),c=a(28),r=a(27);t.a={list:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.hire.workplace.letters.list,e).then(function(e){t(e)},function(e){a(e)})})},save:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.hire.workplace.letters.save,e).then(function(e){t(e)},function(e){a(e)})})},get:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.hire.workplace.letters.get,e).then(function(e){t(e)},function(e){a(e)})})},delete:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.hire.workplace.letters.delete,e).then(function(e){t(e)},function(e){a(e)})})}}},604:function(e,t,a){},605:function(e,t,a){},606:function(e,t,a){},719:function(e,t,a){"use strict";a.r(t);var n=a(32),c=a(1),r=a.n(c),l=a(29),o=a(43),E=a(34),i=a(3),m=a(26),s=a(72),u=a(428),O=a(421),d=a(420),N=a(11),T=a(5),b=a(123),f=a(491),R=a(492),I=a(427),g=a(493),C=(a(524),a(441)),L=function(e){var t=e.onChangeType,a=e.onChangeKeyword,l=Object(m.b)().t,o=Object(c.useState)(!1),E=Object(n.a)(o,2),s=E[0],u=E[1],O=Object(c.useState)(N.u.ALL),d=Object(n.a)(O,2),T=d[0],b=d[1],f=Object(c.useState)(""),R=Object(n.a)(f,2),I=R[0],g=R[1],L=Object(C.a)(I,N.h.DELAY2);Object(c.useEffect)(function(e){var t=setTimeout(function(e){u(!0),clearTimeout(t)},N.h.DELAY2)},[]),Object(c.useMemo)(function(e){"function"===typeof t&&s&&t(T)},[T]),Object(c.useMemo)(function(e){"function"===typeof a&&s&&a(L)},[L]);return r.a.createElement(c.Fragment,null,r.a.createElement(i.L,null,r.a.createElement(i.j,{md:"6"},r.a.createElement(i.M,{label:l("HIRE.WORKPLACE.LETTERS.FIELDS.TYPE"),className:"mt-sm-5 mt-md-3 mb-0",selected:T,getValue:function(e){return b(e[0])}},r.a.createElement(i.N,null),r.a.createElement(i.P,null,r.a.createElement(i.O,{value:N.u.ALL,checked:T===N.u.ALL},l("COMMON.SCOPE.ALL")),r.a.createElement(i.O,{value:N.o.TYPE.GENERIC,checked:T===N.o.TYPE.GENERIC},l("HIRE.WORKPLACE.LETTERS.TYPE.GENERIC")),r.a.createElement(i.O,{value:N.o.TYPE.INTERVIEW,checked:T===N.o.TYPE.INTERVIEW},l("HIRE.WORKPLACE.LETTERS.TYPE.INTERVIEW")),r.a.createElement(i.O,{value:N.o.TYPE.FOLLOWUP,checked:T===N.o.TYPE.FOLLOWUP},l("HIRE.WORKPLACE.LETTERS.TYPE.FOLLOWUP")),r.a.createElement(i.O,{value:N.o.TYPE.ACCEPTANCE,checked:T===N.o.TYPE.ACCEPTANCE},l("HIRE.WORKPLACE.LETTERS.TYPE.ACCEPTANCE")),r.a.createElement(i.O,{value:N.o.TYPE.REJECTION,checked:T===N.o.TYPE.REJECTION},l("HIRE.WORKPLACE.LETTERS.TYPE.REJECTION")),r.a.createElement(i.O,{value:N.o.TYPE.ON_BOARDING,checked:T===N.o.TYPE.ON_BOARDING},l("HIRE.WORKPLACE.LETTERS.TYPE.ON_BOARDING"))))),r.a.createElement(i.j,{md:"6"},r.a.createElement(i.t,{id:"name",name:"name",label:l("COMMON.SEARCH.KEYWORD"),background:!0,containerClass:"mt-2 mb-0",value:I,getValue:g}))))},p=a(442),h=(a(604),function(e){var t=e.data,a=e.detailLabel,n=e.detailLink,c=e.deleteLabel,l=e.page,o=e.onDelete,s=(0,Object(m.b)().t)("HIRE.WORKPLACE.LETTERS.TYPE.".concat(t.type)),u=t.name,O=(t.subject,t.message),d=p.Base64.encode(JSON.stringify({id:t.id,page:l}));return r.a.createElement(i.j,{md:"6",lg:"4",className:"mb-3 mb-md-4"},r.a.createElement(i.Y,{hover:!0,className:"card"},r.a.createElement(i.h,{className:"letter-item-wrapper"},r.a.createElement("div",{className:"letter-inner-wrapper"},r.a.createElement("div",{className:"border-dark border-bottom mb-sm-1 mb-md-2"},r.a.createElement("span",{className:"h4-responsive"},u)," - ",s),r.a.createElement("div",{className:"letter-content",dangerouslySetInnerHTML:{__html:O}}))),r.a.createElement(i.u,{className:"flex-center",overlay:"grey-strong"},r.a.createElement(E.b,{to:"".concat(n,"/").concat(d),className:"text-body"},r.a.createElement(i.f,{color:"primary",size:"sm",className:"white-text",rounded:!0},a)),r.a.createElement(i.f,{color:"danger",size:"sm",onClick:function(e){return o({id:t.id,item:t.name})},rounded:!0},c))))}),j=(a(605),function(e){var t=e.to,a=Object(m.b)().t;return r.a.createElement(i.j,{md:"6",lg:"4",className:"mb-3 mb-md-4"},r.a.createElement(E.b,{to:t,className:"text-body"},r.a.createElement(i.Y,{hover:!0,className:"card"},r.a.createElement(i.h,{className:"letter-item-wrapper"},r.a.createElement("div",{className:"letter-inner-wrapper"},r.a.createElement("div",{className:"border-dark border-bottom mb-sm-1 mb-md-2"},r.a.createElement("span",{className:"h4-responsive"},a("COMMON.BUTTON.ADD_NEW_ITEM"))),r.a.createElement("div",{className:"letter-content"},a("HIRE.WORKPLACE.LETTERS.ALL.NEW_ITEM_DESCRIPTION")))),r.a.createElement(i.u,{className:"flex-center",overlay:"grey-strong"},r.a.createElement(i.f,{color:"primary",size:"sm",className:"white-text",rounded:!0},r.a.createElement(i.r,{icon:"plus",size:"sm"}))))))}),v=function(e){var t=e.items,a=e.showNewLink,n=e.newLink,l=e.detailLabel,o=e.detailLink,E=e.deleteLabel,i=e.page,m=e.onDelete;return r.a.createElement("div",{className:"row text-left mt-3"},!!a&&r.a.createElement(j,{to:n}),t.map(function(e,t){return r.a.createElement(c.Fragment,{key:e.id},r.a.createElement(h,{data:e,detailLabel:l,detailLink:o,deleteLabel:E,page:i,onDelete:m}))}))};a(606),t.default=function(){var e=Object(o.h)().page,t=Object(m.b)().t,a=Object(o.g)(),C=Object(l.c)(function(e){return e}).auth.user,p=Object(c.useState)(!1),h=Object(n.a)(p,2),j=h[0],S=h[1],A=Object(c.useState)({}),M=Object(n.a)(A,2),P=M[0],k=M[1],w=Object(c.useState)({}),y=Object(n.a)(w,2),D=y[0],W=y[1],Y=Object(c.useState)(0),_=Object(n.a)(Y,2),H=_[0],x=_[1],B=Object(c.useState)([]),K=Object(n.a)(B,2),U=K[0],G=K[1],z=Object(c.useState)(N.u.ALL),V=Object(n.a)(z,2),F=V[0],J=V[1],q=Object(c.useState)(""),Q=Object(n.a)(q,2),Z=Q[0],X=Q[1],$=e?parseInt(e):1,ee=t("NAVBAR.HIRE.WORKPLACE.LETTERS"),te=T.a.hire.workplace.letters.add,ae=function(e){W(Object.assign({},D,{show:!D.show}))},ne=function(a){a.id;ae(),S(!0),g.a.delete({page:e,pageSize:9,id:D.deleteId,userId:C.id,type:F===N.u.ALL?void 0:F,keyword:Z}).then(function(e){e.result===N.t.SUCCESS?(x(e.pageCount),G(e.data)):I.b.error(e.message),S(!1)}).catch(function(e){I.b.error(t("COMMON.ERROR.UNKNOWN_SERVER_ERROR")),S(!1)})},ce=function(e){a.push("".concat(T.a.hire.workplace.letters.all,"/").concat(e))},re=function(e){var a=e.id,n=e.item;W(Object.assign({},D,{show:!0,title:t("COMMON.BUTTON.DELETE"),message:t("COMMON.QUESTION.DELETE",{item:n}),deleteId:a}))};Object(c.useEffect)(function(e){s.animateScroll.scrollToTop({duration:N.i.TRANSITION_TIME})},[]),Object(c.useMemo)(function(a){S(!0),k({}),g.a.list({page:e,pageSize:9,userId:C.id,type:F===N.u.ALL?void 0:F,keyword:Z}).then(function(e){e.result===N.t.SUCCESS?(x(e.pageCount),G(e.data)):I.b.error(e.message),S(!1)}).catch(function(e){I.b.error(t("COMMON.ERROR.UNKNOWN_SERVER_ERROR")),S(!1)})},[e,t,F,Z]),Object(c.useMemo)(function(e){s.animateScroll.scrollToTop({duration:N.i.TRANSITION_TIME})},[e]);return r.a.createElement(c.Fragment,null,r.a.createElement(u.Helmet,null,r.a.createElement("title",null,ee," - ",t("SITE_NAME"))),r.a.createElement(i.d,null,r.a.createElement(i.e,null,t("NAVBAR.HIRE.WORKPLACE.ROOT")),r.a.createElement(i.e,{active:!0},ee)),r.a.createElement(i.L,{className:"my-sm-2 my-md-4"},r.a.createElement(i.j,{md:"5",className:"order-1 order-md-0"},r.a.createElement("div",{className:"full-width text-left mt-3"},r.a.createElement(E.b,{to:te},r.a.createElement(i.f,{color:"primary",size:"sm",rounded:!0,disabled:!!j},t("COMMON.BUTTON.NEW"))))),r.a.createElement(i.j,{md:"7",className:"order-0 order-md-1"},r.a.createElement(L,{onChangeType:J,onChangeKeyword:X}))),r.a.createElement(i.L,null,P.show&&r.a.createElement(i.j,{md:"12"},r.a.createElement(O.a,null,r.a.createElement(d.a,{in:P.show,classNames:"fade-transition",timeout:N.i.TRANSITION_TIME,unmountOnExit:!0,appear:!0},r.a.createElement(i.b,{color:P.color,dismiss:!0,onClosed:function(){return k({})}},P.message)))),r.a.createElement(i.j,{md:"12"},r.a.createElement(O.a,null,r.a.createElement(d.a,{key:e,timeout:{enter:N.i.TRANSITION_TIME,exit:0},classNames:"fade-transition"},r.a.createElement("div",null,!!j&&r.a.createElement(b.a,{style:{height:N.n.LISTVIEW_HEIGHT}}),!j&&!U.length&&r.a.createElement(f.a,null),!j&&!!U.length&&r.a.createElement(c.Fragment,null,r.a.createElement("div",{className:"my-4 text-center"},r.a.createElement(R.a,{circle:!0,current:$,pageCount:H,onChange:ce})),r.a.createElement(v,{items:U,showNewLink:!1,newLink:te,detailLabel:t("COMMON.BUTTON.EDIT"),detailLink:te,deleteLabel:t("COMMON.BUTTON.DELETE"),page:e,onDelete:re}),r.a.createElement("div",{className:"mt-4 text-center"},r.a.createElement(R.a,{circle:!0,current:$,pageCount:H,onChange:ce})))))))),r.a.createElement(i.v,{isOpen:!!D.show,toggle:ae,centered:!0},r.a.createElement(i.y,{toggle:ae},D.title),r.a.createElement(i.w,{className:"text-left"},D.message),r.a.createElement(i.x,null,r.a.createElement(i.f,{type:"button",color:"danger",size:"sm",rounded:!0,onClick:ne},t("COMMON.BUTTON.DELETE")),r.a.createElement(i.f,{type:"button",color:"secondary",size:"sm",rounded:!0,onClick:ae},t("COMMON.BUTTON.CANCEL")))),r.a.createElement(i.Z,{className:"text-left",position:"ltr"===t("DIRECTION")?"top-right":"top-left",dir:t("DIRECTION"),hideProgressBar:!0,autoClose:N.i.TRANSITION_TIME5,closeButton:!1,transition:I.a}))}}}]);