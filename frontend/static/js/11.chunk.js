(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{426:function(e,t,a){"use strict";a.d(t,"a",function(){return r});a(1);var n=a(54),c=a(11),r=(Object(n.b)({enter:"zoomIn",exit:"zoomOut",duration:c.i.TRANSITION_TIME}),Object(n.b)({enter:"fadeIn",exit:"fadeOut",duration:c.i.TRANSITION_TIME}));t.b=n.c},439:function(e,t,a){"use strict";var n=a(33),c=a(1);t.a=function(e,t){var a=Object(c.useState)(e),r=Object(n.a)(a,2),l=r[0],o=r[1];return Object(c.useEffect)(function(a){var n=setTimeout(function(){o(e)},t);return function(){return clearTimeout(n)}},[e]),l}},457:function(e,t,a){"use strict";var n=a(1),c=a.n(n),r=a(26),l=a(130);a(128);t.a=function(e){var t=e.message,a=Object(r.b)().t;return c.a.createElement("div",{className:"loading-page"},c.a.createElement(l.a,{heading:a("COMMON.ERROR.SORRY"),message:t||a("COMMON.ERROR.NO_DATA")}))}},458:function(e,t,a){"use strict";var n=a(33),c=a(1),r=a.n(c),l=a(3),o=a(11),E=a(494),i=a(26);t.a=function(e){var t=e.circle,a=e.current,m=e.pageCount,s=e.width,u=e.onChange,O=Object(i.b)().t,d=Object(c.useState)([]),N=Object(n.a)(d,2),T=N[0],b=N[1],f="ltr"===O("DIRECTION")?"left":"right",R="ltr"===O("DIRECTION")?"right":"left";return Object(c.useEffect)(function(e){!s&&(s=E.isMobile?o.s.WIDTH_MOBILE:o.s.WIDTH);var t=Math.ceil(s/2),n=a-t<1?1:a-t,c=a+t-1>m?m:a+t-1;c-n<s&&(1===n&&(c=m<s?m:s),c===m&&(n=m-s+1<1?1:m-s+1));for(var r=[],l=n;l<=c;l++)r.push(l);b(r)},[a,m,s]),r.a.createElement(c.Fragment,null,m>0&&r.a.createElement(l.I,{circle:t},r.a.createElement(l.G,{disabled:1===a,onClick:function(){return u(1)}},r.a.createElement(l.H,{className:"page-link"},r.a.createElement(l.r,{icon:"angle-double-".concat(f)}))),r.a.createElement(l.G,{disabled:1===a,onClick:function(){return u(a-1)}},r.a.createElement(l.H,{className:"page-link"},r.a.createElement(l.r,{icon:"angle-".concat(f)}))),T.map(function(e,t){return r.a.createElement(l.G,{key:e,active:e===a,onClick:function(){return a!==e&&u(e)}},r.a.createElement(l.H,{className:"page-link"},e))}),r.a.createElement(l.G,{disabled:a===m,onClick:function(){return u(a+1)}},r.a.createElement(l.H,{className:"page-link"},r.a.createElement(l.r,{icon:"angle-".concat(R)}))),r.a.createElement(l.G,{disabled:a===m,onClick:function(){return u(m)}},r.a.createElement(l.H,{className:"page-link"},r.a.createElement(l.r,{icon:"angle-double-".concat(R)})))))}},495:function(e,t,a){"use strict";var n=a(24),c=a(28),r=a(27);t.a={list:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.hire.workplace.letters.list,e).then(function(e){t(e)},function(e){a(e)})})},save:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.hire.workplace.letters.save,e).then(function(e){t(e)},function(e){a(e)})})},get:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.hire.workplace.letters.get,e).then(function(e){t(e)},function(e){a(e)})})},delete:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.hire.workplace.letters.delete,e).then(function(e){t(e)},function(e){a(e)})})}}},607:function(e,t,a){},608:function(e,t,a){},609:function(e,t,a){},727:function(e,t,a){"use strict";a.r(t);var n=a(33),c=a(1),r=a.n(c),l=a(30),o=a(43),E=a(34),i=a(3),m=a(26),s=a(72),u=a(428),O=a(421),d=a(420),N=a(11),T=a(5),b=a(123),f=a(457),R=a(458),p=a(426),I=a(495),C=a(439),g=function(e){var t=e.onChangeType,a=e.onChangeKeyword,l=Object(m.b)().t,o=Object(c.useState)(!1),E=Object(n.a)(o,2),s=E[0],u=E[1],O=Object(c.useState)(N.w.ALL),d=Object(n.a)(O,2),T=d[0],b=d[1],f=Object(c.useState)(""),R=Object(n.a)(f,2),p=R[0],I=R[1],g=Object(C.a)(p,N.h.DELAY2);Object(c.useEffect)(function(e){var t=setTimeout(function(e){u(!0),clearTimeout(t)},N.h.DELAY2)},[]),Object(c.useMemo)(function(e){"function"===typeof t&&s&&t(T)},[T]),Object(c.useMemo)(function(e){"function"===typeof a&&s&&a(g)},[g]);return r.a.createElement(c.Fragment,null,r.a.createElement(i.L,null,r.a.createElement(i.j,{md:"6"},r.a.createElement(i.M,{label:l("HIRE.WORKPLACE.LETTERS.FIELDS.TYPE"),outline:!0,className:"mt-sm-5 mt-md-3 mb-0",selected:T,getValue:function(e){return b(e[0])}},r.a.createElement(i.N,null),r.a.createElement(i.P,null,r.a.createElement(i.O,{value:N.w.ALL,checked:T===N.w.ALL},l("COMMON.SCOPE.ALL")),r.a.createElement(i.O,{value:N.p.TYPE.GENERIC,checked:T===N.p.TYPE.GENERIC},l("HIRE.WORKPLACE.LETTERS.TYPE.GENERIC")),r.a.createElement(i.O,{value:N.p.TYPE.INTERVIEW,checked:T===N.p.TYPE.INTERVIEW},l("HIRE.WORKPLACE.LETTERS.TYPE.INTERVIEW")),r.a.createElement(i.O,{value:N.p.TYPE.FOLLOWUP,checked:T===N.p.TYPE.FOLLOWUP},l("HIRE.WORKPLACE.LETTERS.TYPE.FOLLOWUP")),r.a.createElement(i.O,{value:N.p.TYPE.ACCEPTANCE,checked:T===N.p.TYPE.ACCEPTANCE},l("HIRE.WORKPLACE.LETTERS.TYPE.ACCEPTANCE")),r.a.createElement(i.O,{value:N.p.TYPE.REJECTION,checked:T===N.p.TYPE.REJECTION},l("HIRE.WORKPLACE.LETTERS.TYPE.REJECTION")),r.a.createElement(i.O,{value:N.p.TYPE.ON_BOARDING,checked:T===N.p.TYPE.ON_BOARDING},l("HIRE.WORKPLACE.LETTERS.TYPE.ON_BOARDING"))))),r.a.createElement(i.j,{md:"6"},r.a.createElement(i.t,{id:"name",name:"name",label:l("COMMON.SEARCH.KEYWORD"),outline:!0,containerClass:"mt-3 mb-0",value:p,getValue:I}))))},L=a(60),h=a(434),j=(a(607),function(e){var t=e.data,a=e.detailLabel,n=e.detailLink,c=e.deleteLabel,l=e.page,o=e.onDelete,s=(0,Object(m.b)().t)("HIRE.WORKPLACE.LETTERS.TYPE.".concat(t.type)),u=t.id,O=t.name,d=(t.subject,t.message),N=h.Base64.encode(JSON.stringify({id:u,page:l}));return r.a.createElement(i.j,{md:"6",lg:"4",className:"mb-3 mb-md-4"},r.a.createElement(i.Y,{hover:!0,className:"card"},r.a.createElement(i.h,{className:"letter-item-wrapper"},r.a.createElement("div",{className:"letter-inner-wrapper"},r.a.createElement("div",{className:"border-dark border-bottom mb-sm-1 mb-md-2"},r.a.createElement("span",{className:"h4-responsive"},O)," - ",s),r.a.createElement("div",{className:"letter-content",dangerouslySetInnerHTML:{__html:d}}))),r.a.createElement(i.u,{className:"flex-center",overlay:"grey-strong"},r.a.createElement(E.b,{to:"".concat(n,"/").concat(N),className:"text-body"},r.a.createElement(i.f,{color:"primary",size:"sm",className:"white-text",rounded:!0},a)),r.a.createElement(i.f,{color:"danger",size:"sm",onClick:function(e){return o({id:u,item:O})},rounded:!0},c))))}),v=(a(608),function(e){var t=e.to,a=Object(m.b)().t;return r.a.createElement(i.j,{md:"6",lg:"4",className:"mb-3 mb-md-4"},r.a.createElement(E.b,{to:t,className:"text-body"},r.a.createElement(i.Y,{hover:!0,className:"card"},r.a.createElement(i.h,{className:"letter-item-wrapper"},r.a.createElement("div",{className:"letter-inner-wrapper"},r.a.createElement("div",{className:"border-dark border-bottom mb-sm-1 mb-md-2"},r.a.createElement("span",{className:"h4-responsive"},a("COMMON.BUTTON.ADD_NEW_ITEM"))),r.a.createElement("div",{className:"letter-content"},a("HIRE.WORKPLACE.LETTERS.ALL.NEW_ITEM_DESCRIPTION")))),r.a.createElement(i.u,{className:"flex-center",overlay:"grey-strong"},r.a.createElement(i.f,{color:"primary",size:"sm",className:"white-text",rounded:!0},r.a.createElement(i.r,{icon:"plus",size:"sm"}))))))}),w=function(e){var t=e.items,a=e.showNewLink,n=e.newLink,l=Object(L.a)(e,["items","showNewLink","newLink"]);return r.a.createElement("div",{className:"row text-left mt-3"},!!a&&r.a.createElement(v,{to:n}),t.map(function(e,t){return r.a.createElement(c.Fragment,{key:e.id},r.a.createElement(j,Object.assign({data:e},l)))}))};a(609),t.default=function(){var e=Object(o.h)().page,t=Object(m.b)().t,a=Object(o.g)(),C=Object(l.c)(function(e){return e}).auth.user,L=Object(c.useState)(!1),h=Object(n.a)(L,2),j=h[0],v=h[1],S=Object(c.useState)({}),A=Object(n.a)(S,2),M=A[0],k=A[1],P=Object(c.useState)({}),y=Object(n.a)(P,2),W=y[0],Y=y[1],D=Object(c.useState)(0),_=Object(n.a)(D,2),H=_[0],x=_[1],B=Object(c.useState)([]),K=Object(n.a)(B,2),U=K[0],G=K[1],z=Object(c.useState)(N.w.ALL),V=Object(n.a)(z,2),F=V[0],J=V[1],Q=Object(c.useState)(""),Z=Object(n.a)(Q,2),q=Z[0],X=Z[1],$=e?parseInt(e):1,ee=t("NAVBAR.HIRE.WORKPLACE.LETTERS"),te=T.a.hire.workplace.letters.add,ae=function(e){Y(Object.assign({},W,{show:!W.show}))},ne=function(a){a.id;ae(),v(!0),I.a.delete({page:e,pageSize:9,id:W.deleteId,userId:C.id,type:F===N.w.ALL?void 0:F,keyword:q}).then(function(e){e.result===N.v.SUCCESS?(x(e.pageCount),G(e.data)):p.b.error(e.message),v(!1)}).catch(function(e){p.b.error(t("COMMON.ERROR.UNKNOWN_SERVER_ERROR")),v(!1)})},ce=function(e){a.push("".concat(T.a.hire.workplace.letters.all,"/").concat(e))},re=function(e){var a=e.id,n=e.item;Y(Object.assign({},W,{show:!0,title:t("COMMON.BUTTON.DELETE"),message:t("COMMON.QUESTION.DELETE",{item:n}),deleteId:a}))};Object(c.useEffect)(function(e){s.animateScroll.scrollToTop({duration:N.i.TRANSITION_TIME})},[]),Object(c.useMemo)(function(a){v(!0),k({}),I.a.list({page:e,pageSize:9,userId:C.id,type:F===N.w.ALL?void 0:F,keyword:q}).then(function(e){e.result===N.v.SUCCESS?(x(e.pageCount),G(e.data)):(G([]),p.b.error(e.message)),v(!1)}).catch(function(e){G([]),p.b.error(t("COMMON.ERROR.UNKNOWN_SERVER_ERROR")),v(!1)})},[e,t,F,q]),Object(c.useMemo)(function(e){s.animateScroll.scrollToTop({duration:N.i.TRANSITION_TIME})},[e]);return r.a.createElement(c.Fragment,null,r.a.createElement(u.Helmet,null,r.a.createElement("title",null,ee," - ",t("SITE_NAME"))),r.a.createElement(i.d,null,r.a.createElement(i.e,null,t("NAVBAR.HIRE.WORKPLACE.ROOT")),r.a.createElement(i.e,{active:!0},ee)),r.a.createElement(i.L,{className:"my-sm-2 my-md-4"},r.a.createElement(i.j,{md:"5",className:"order-1 order-md-0"},r.a.createElement("div",{className:"full-width text-left mt-3"},r.a.createElement(E.b,{to:te},r.a.createElement(i.f,{color:"primary",size:"sm",rounded:!0,disabled:!!j},t("COMMON.BUTTON.NEW"))))),r.a.createElement(i.j,{md:"7",className:"order-0 order-md-1"},r.a.createElement(g,{onChangeType:J,onChangeKeyword:X}))),r.a.createElement(i.L,null,M.show&&r.a.createElement(i.j,{md:"12"},r.a.createElement(O.a,null,r.a.createElement(d.a,{in:M.show,classNames:"fade-transition",timeout:N.i.TRANSITION_TIME,unmountOnExit:!0,appear:!0},r.a.createElement(i.b,{color:M.color,dismiss:!0,onClosed:function(){return k({})}},M.message)))),r.a.createElement(i.j,{md:"12"},r.a.createElement(O.a,null,r.a.createElement(d.a,{key:e,timeout:{enter:N.i.TRANSITION_TIME,exit:0},classNames:"fade-transition"},r.a.createElement("div",null,!!j&&r.a.createElement(b.a,{style:{height:N.o.LISTVIEW_HEIGHT}}),!j&&!U.length&&r.a.createElement(f.a,null),!j&&!!U.length&&r.a.createElement(c.Fragment,null,r.a.createElement("div",{className:"my-4 text-center"},r.a.createElement(R.a,{circle:!0,current:$,pageCount:H,onChange:ce})),r.a.createElement(w,{items:U,showNewLink:!1,newLink:te,detailLabel:t("COMMON.BUTTON.EDIT"),detailLink:te,deleteLabel:t("COMMON.BUTTON.DELETE"),page:e,onDelete:re}),r.a.createElement("div",{className:"mt-4 text-center"},r.a.createElement(R.a,{circle:!0,current:$,pageCount:H,onChange:ce})))))))),r.a.createElement(i.v,{isOpen:!!W.show,toggle:ae,centered:!0,backdropClassName:"modal-backdrop"},r.a.createElement(i.y,{toggle:ae},W.title),r.a.createElement(i.w,{className:"text-left"},W.message),r.a.createElement(i.x,null,r.a.createElement(i.f,{type:"button",color:"danger",size:"sm",rounded:!0,onClick:ne},t("COMMON.BUTTON.DELETE")),r.a.createElement(i.f,{type:"button",color:"secondary",size:"sm",rounded:!0,onClick:ae},t("COMMON.BUTTON.CANCEL")))),r.a.createElement(i.Z,{className:"text-left",position:"ltr"===t("DIRECTION")?"top-right":"top-left",dir:t("DIRECTION"),hideProgressBar:!0,autoClose:N.i.TRANSITION_TIME5,closeButton:!1,transition:p.a}))}}}]);