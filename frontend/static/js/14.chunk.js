(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{421:function(e,t,a){"use strict";a.d(t,"a",function(){return r});a(1);var n=a(56),c=a(11),r=(Object(n.b)({enter:"zoomIn",exit:"zoomOut",duration:c.j.TRANSITION_TIME}),Object(n.b)({enter:"fadeIn",exit:"fadeOut",duration:c.j.TRANSITION_TIME}));t.b=n.c},452:function(e,t,a){"use strict";var n=a(1),c=a.n(n),r=a(25),l=a(130);a(128);t.a=function(e){var t=e.message,a=Object(r.b)().t;return c.a.createElement("div",{className:"loading-page"},c.a.createElement(l.a,{heading:a("COMMON.ERROR.SORRY"),message:t||a("COMMON.ERROR.NO_DATA")}))}},456:function(e,t,a){"use strict";var n=a(30),c=a(1),r=a.n(c),l=a(3),o=a(11),E=a(493),m=a(25);t.a=function(e){var t=e.circle,a=e.current,i=e.pageCount,s=e.width,u=e.onChange,O=Object(m.b)().t,d=Object(c.useState)([]),N=Object(n.a)(d,2),b=N[0],T=N[1],f="ltr"===O("DIRECTION")?"left":"right",R="ltr"===O("DIRECTION")?"right":"left";return Object(c.useEffect)(function(e){!s&&(s=E.isMobile?o.q.WIDTH_MOBILE:o.q.WIDTH);var t=Math.ceil(s/2),n=a-t<1?1:a-t,c=a+t-1>i?i:a+t-1;c-n<s&&(1===n&&(c=i<s?i:s),c===i&&(n=i-s+1<1?1:i-s+1));for(var r=[],l=n;l<=c;l++)r.push(l);T(r)},[a,i,s]),r.a.createElement(c.Fragment,null,i>0&&r.a.createElement(l.P,{circle:t},r.a.createElement(l.N,{disabled:1===a,onClick:function(){return u(1)}},r.a.createElement(l.O,{className:"page-link"},r.a.createElement(l.y,{icon:"angle-double-".concat(f)}))),r.a.createElement(l.N,{disabled:1===a,onClick:function(){return u(a-1)}},r.a.createElement(l.O,{className:"page-link"},r.a.createElement(l.y,{icon:"angle-".concat(f)}))),b.map(function(e,t){return r.a.createElement(l.N,{key:e,active:e===a,onClick:function(){return a!==e&&u(e)}},r.a.createElement(l.O,{className:"page-link"},e))}),r.a.createElement(l.N,{disabled:a===i,onClick:function(){return u(a+1)}},r.a.createElement(l.O,{className:"page-link"},r.a.createElement(l.y,{icon:"angle-".concat(R)}))),r.a.createElement(l.N,{disabled:a===i,onClick:function(){return u(i)}},r.a.createElement(l.O,{className:"page-link"},r.a.createElement(l.y,{icon:"angle-double-".concat(R)})))))}},494:function(e,t,a){"use strict";var n=a(23),c=a(26),r=a(22);t.a={list:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.hire.workplace.letters.list,e).then(function(e){t(e)},function(e){a(e)})})},save:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.hire.workplace.letters.save,e).then(function(e){t(e)},function(e){a(e)})})},get:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.hire.workplace.letters.get,e).then(function(e){t(e)},function(e){a(e)})})},delete:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.hire.workplace.letters.delete,e).then(function(e){t(e)},function(e){a(e)})})}}},495:function(e,t,a){"use strict";var n=a(30),c=a(1);t.a=function(e,t){var a=Object(c.useState)(e),r=Object(n.a)(a,2),l=r[0],o=r[1];return Object(c.useEffect)(function(a){var n=setTimeout(function(){o(e)},t);return function(){return clearTimeout(n)}},[e]),l}},619:function(e,t,a){},620:function(e,t,a){},621:function(e,t,a){},726:function(e,t,a){"use strict";a.r(t);var n=a(30),c=a(1),r=a.n(c),l=a(24),o=a(43),E=a(29),m=a(3),i=a(25),s=a(73),u=a(425),O=a(418),d=a(11),N=a(5),b=a(123),T=a(452),f=a(456),R=a(421),g=a(494),C=(a(525),a(495)),I=function(e){var t=e.onChangeType,a=e.onChangeKeyword,l=Object(i.b)().t,o=Object(c.useState)(!1),E=Object(n.a)(o,2),s=E[0],u=E[1],O=Object(c.useState)(d.t.ALL),N=Object(n.a)(O,2),b=N[0],T=N[1],f=Object(c.useState)(""),R=Object(n.a)(f,2),g=R[0],I=R[1],p=Object(C.a)(g,d.i.DELAY2);Object(c.useEffect)(function(e){var t=setTimeout(function(e){u(!0),clearTimeout(t)},d.i.DELAY2)},[]),Object(c.useMemo)(function(e){"function"===typeof t&&s&&t(b)},[b]),Object(c.useMemo)(function(e){"function"===typeof a&&s&&a(p)},[p]);return r.a.createElement(c.Fragment,null,r.a.createElement(m.S,null,r.a.createElement(m.o,{md:"6"},r.a.createElement(m.T,{label:l("HIRE.WORKPLACE.LETTERS.FIELDS.TYPE"),className:"mt-sm-5 mt-md-3 mb-0",selected:b,getValue:function(e){return T(e[0])}},r.a.createElement(m.U,null),r.a.createElement(m.W,null,r.a.createElement(m.V,{value:d.t.ALL,checked:b===d.t.ALL},l("COMMON.SCOPE.ALL")),r.a.createElement(m.V,{value:d.o.TYPE.GENERIC,checked:b===d.o.TYPE.GENERIC},l("HIRE.WORKPLACE.LETTERS.TYPE.GENERIC")),r.a.createElement(m.V,{value:d.o.TYPE.INTERVIEW,checked:b===d.o.TYPE.INTERVIEW},l("HIRE.WORKPLACE.LETTERS.TYPE.INTERVIEW")),r.a.createElement(m.V,{value:d.o.TYPE.FOLLOWUP,checked:b===d.o.TYPE.FOLLOWUP},l("HIRE.WORKPLACE.LETTERS.TYPE.FOLLOWUP")),r.a.createElement(m.V,{value:d.o.TYPE.ACCEPTANCE,checked:b===d.o.TYPE.ACCEPTANCE},l("HIRE.WORKPLACE.LETTERS.TYPE.ACCEPTANCE")),r.a.createElement(m.V,{value:d.o.TYPE.REJECTION,checked:b===d.o.TYPE.REJECTION},l("HIRE.WORKPLACE.LETTERS.TYPE.REJECTION")),r.a.createElement(m.V,{value:d.o.TYPE.ON_BOARDING,checked:b===d.o.TYPE.ON_BOARDING},l("HIRE.WORKPLACE.LETTERS.TYPE.ON_BOARDING"))))),r.a.createElement(m.o,{md:"6"},r.a.createElement(m.A,{id:"name",name:"name",label:l("COMMON.SEARCH.KEYWORD"),background:!0,containerClass:"mt-2 mb-0",value:g,getValue:I}))))},p=a(430),L=(a(619),function(e){var t=e.data,a=e.detailLabel,n=e.detailLink,c=e.deleteLabel,l=e.page,o=e.onDelete,s=(0,Object(i.b)().t)("HIRE.WORKPLACE.LETTERS.TYPE.".concat(t.type)),u=t.name,O=(t.subject,t.message),d=p.Base64.encode(JSON.stringify({id:t.id,page:l}));return r.a.createElement(m.o,{md:"6",lg:"4",className:"mb-3 mb-md-4"},r.a.createElement(m.eb,{hover:!0,className:"card"},r.a.createElement(m.i,{className:"letter-item-wrapper"},r.a.createElement("div",{className:"letter-inner-wrapper"},r.a.createElement("div",{className:"border-dark border-bottom mb-sm-1 mb-md-2"},r.a.createElement("span",{className:"h4-responsive"},u)," - ",s),r.a.createElement("div",{className:"letter-content",dangerouslySetInnerHTML:{__html:O}}))),r.a.createElement(m.B,{className:"flex-center",overlay:"grey-strong"},r.a.createElement(E.b,{to:"".concat(n,"/").concat(d),className:"text-body"},r.a.createElement(m.g,{color:"primary",size:"sm",className:"white-text",rounded:!0},a)),r.a.createElement(m.g,{color:"danger",size:"sm",onClick:function(e){return o({id:t.id,item:t.name})},rounded:!0},c))))}),h=(a(620),function(e){var t=e.to,a=Object(i.b)().t;return r.a.createElement(m.o,{md:"6",lg:"4",className:"mb-3 mb-md-4"},r.a.createElement(E.b,{to:t,className:"text-body"},r.a.createElement(m.eb,{hover:!0,className:"card"},r.a.createElement(m.i,{className:"letter-item-wrapper"},r.a.createElement("div",{className:"letter-inner-wrapper"},r.a.createElement("div",{className:"border-dark border-bottom mb-sm-1 mb-md-2"},r.a.createElement("span",{className:"h4-responsive"},a("COMMON.BUTTON.ADD_NEW_ITEM"))),r.a.createElement("div",{className:"letter-content"},a("HIRE.WORKPLACE.LETTERS.ALL.NEW_ITEM_DESCRIPTION")))),r.a.createElement(m.B,{className:"flex-center",overlay:"grey-strong"},r.a.createElement(m.g,{color:"primary",size:"sm",className:"white-text",rounded:!0},r.a.createElement(m.y,{icon:"plus",size:"sm"}))))))}),j=function(e){var t=e.items,a=e.showNewLink,n=e.newLink,l=e.detailLabel,o=e.detailLink,E=e.deleteLabel,m=e.page,i=e.onDelete;return r.a.createElement("div",{className:"row text-left mt-3"},!!a&&r.a.createElement(h,{to:n}),t.map(function(e,t){return r.a.createElement(c.Fragment,{key:e.id},r.a.createElement(L,{data:e,detailLabel:l,detailLink:o,deleteLabel:E,page:m,onDelete:i}))}))};a(621),t.default=function(){var e=Object(o.h)().page,t=Object(i.b)().t,a=Object(o.g)(),C=Object(l.c)(function(e){return e}).auth.user,p=Object(c.useState)(!1),L=Object(n.a)(p,2),h=L[0],S=L[1],v=Object(c.useState)({}),A=Object(n.a)(v,2),M=A[0],P=A[1],k=Object(c.useState)({}),w=Object(n.a)(k,2),y=w[0],D=w[1],W=Object(c.useState)(0),Y=Object(n.a)(W,2),_=Y[0],B=Y[1],H=Object(c.useState)([]),K=Object(n.a)(H,2),U=K[0],V=K[1],x=Object(c.useState)(d.t.ALL),z=Object(n.a)(x,2),F=z[0],G=z[1],J=Object(c.useState)(""),q=Object(n.a)(J,2),Q=q[0],X=q[1],Z=e?parseInt(e):1,$=t("NAVBAR.HIRE.WORKPLACE.LETTERS"),ee=N.a.hire.workplace.letters.add,te=function(e){D(Object.assign({},y,{show:!y.show}))},ae=function(e){e.id;te(),S(!0),g.a.delete({id:y.deleteId,userId:C.id,type:F,keyword:Q}).then(function(e){e.result===d.s.SUCCESS?(B(e.pageCount),V(e.data)):R.b.error(e.message),S(!1)}).catch(function(e){R.b.error(t("COMMON.ERROR.UNKNOWN_SERVER_ERROR")),S(!1)})},ne=function(e){a.push("".concat(N.a.hire.workplace.letters.all,"/").concat(e))},ce=function(e){var a=e.id,n=e.item;D(Object.assign({},y,{show:!0,title:t("COMMON.BUTTON.DELETE"),message:t("COMMON.QUESTION.DELETE",{item:n}),deleteId:a}))};Object(c.useEffect)(function(e){s.animateScroll.scrollToTop({duration:d.j.TRANSITION_TIME})},[]),Object(c.useMemo)(function(a){S(!0),P({}),g.a.list({page:e,pageSize:9,userId:C.id,type:F===d.t.ALL?void 0:F,keyword:Q}).then(function(e){e.result===d.s.SUCCESS?(B(e.pageCount),V(e.data)):R.b.error(e.message),S(!1)}).catch(function(e){R.b.error(t("COMMON.ERROR.UNKNOWN_SERVER_ERROR")),S(!1)})},[e,t,F,Q]),Object(c.useMemo)(function(e){s.animateScroll.scrollToTop({duration:d.j.TRANSITION_TIME})},[e]);return r.a.createElement(c.Fragment,null,r.a.createElement(u.Helmet,null,r.a.createElement("title",null,$," - ",t("SITE_NAME"))),r.a.createElement(m.e,null,r.a.createElement(m.f,null,t("NAVBAR.HIRE.WORKPLACE.ROOT")),r.a.createElement(m.f,{active:!0},$)),r.a.createElement(m.S,{className:"my-sm-2 my-md-4"},r.a.createElement(m.o,{md:"5",className:"order-1 order-md-0"},r.a.createElement("div",{className:"full-width text-left mt-3"},r.a.createElement(E.b,{to:ee},r.a.createElement(m.g,{color:"primary",size:"sm",rounded:!0,disabled:!!h},t("COMMON.BUTTON.NEW"))))),r.a.createElement(m.o,{md:"7",className:"order-0 order-md-1"},r.a.createElement(I,{onChangeType:G,onChangeKeyword:X}))),r.a.createElement(m.S,null,M.show&&r.a.createElement(m.o,{md:"12"},r.a.createElement(O.a,{in:M.show,classNames:"fade-transition",timeout:d.j.TRANSITION_TIME,unmountOnExit:!0,appear:!0},r.a.createElement(m.b,{color:M.color,dismiss:!0,onClosed:function(){return P({})}},M.message))),r.a.createElement(m.o,{md:"12"},!!h&&r.a.createElement(b.a,null),!h&&!U.length&&r.a.createElement(T.a,null),!h&&!!U.length&&r.a.createElement(c.Fragment,null,r.a.createElement("div",{className:"my-4 text-center"},r.a.createElement(f.a,{circle:!0,current:Z,pageCount:_,onChange:ne})),r.a.createElement(j,{items:U,showNewLink:!1,newLink:ee,detailLabel:t("COMMON.BUTTON.EDIT"),detailLink:ee,deleteLabel:t("COMMON.BUTTON.DELETE"),page:e,onDelete:ce}),r.a.createElement("div",{className:"mt-4 text-center"},r.a.createElement(f.a,{circle:!0,current:Z,pageCount:_,onChange:ne}))))),r.a.createElement(m.C,{isOpen:!!y.show,toggle:te,centered:!0},r.a.createElement(m.F,{toggle:te},y.title),r.a.createElement(m.D,{className:"text-left"},y.message),r.a.createElement(m.E,null,r.a.createElement(m.g,{type:"button",color:"danger",size:"sm",rounded:!0,onClick:ae},t("COMMON.BUTTON.DELETE")),r.a.createElement(m.g,{type:"button",color:"secondary",size:"sm",rounded:!0,onClick:te},t("COMMON.BUTTON.CANCEL")))),r.a.createElement(m.fb,{className:"text-left",position:"ltr"===t("DIRECTION")?"top-right":"top-left",dir:t("DIRECTION"),hideProgressBar:!0,autoClose:d.j.TRANSITION_TIME5,closeButton:!1,transition:R.a}))}}}]);