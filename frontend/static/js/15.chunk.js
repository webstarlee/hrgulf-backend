(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{435:function(e,t,a){"use strict";var n=a(32),c=a(1);t.a=function(e,t){var a=Object(c.useState)(e),r=Object(n.a)(a,2),i=r[0],l=r[1];return Object(c.useEffect)(function(a){var n=setTimeout(function(){l(e)},t);return function(){return clearTimeout(n)}},[e]),i}},460:function(e,t,a){"use strict";var n=a(24),c=a(28),r=a(27);t.a={list:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.hire.workplace.questionnaire.list,e).then(function(e){t(e)},function(e){a(e)})})},save:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.hire.workplace.questionnaire.save,e).then(function(e){t(e)},function(e){a(e)})})},get:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.hire.workplace.questionnaire.get,e).then(function(e){t(e)},function(e){a(e)})})},delete:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.hire.workplace.questionnaire.delete,e).then(function(e){t(e)},function(e){a(e)})})},listQuestions:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.hire.workplace.questionnaire.listQuestions,e).then(function(e){t(e)},function(e){a(e)})})},saveQuestion:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.hire.workplace.questionnaire.saveQuestion,e).then(function(e){t(e)},function(e){a(e)})})},getQuestion:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.hire.workplace.questionnaire.getQuestion,e).then(function(e){t(e)},function(e){a(e)})})},deleteQuestion:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.hire.workplace.questionnaire.deleteQuestion,e).then(function(e){t(e)},function(e){a(e)})})}}},469:function(e,t,a){"use strict";var n=a(1),c=a.n(n),r=a(26),i=a(134);a(133);t.a=function(e){var t=e.message,a=Object(r.b)().t;return c.a.createElement("div",{className:"loading-page"},c.a.createElement(i.a,{heading:a("COMMON.ERROR.SORRY"),message:t||a("COMMON.ERROR.NO_DATA")}))}},470:function(e,t,a){"use strict";var n=a(32),c=a(1),r=a.n(c),i=a(3),l=a(11),o=a(518),s=a(26);t.a=function(e){var t=e.circle,a=e.current,u=e.pageCount,m=e.width,E=e.onChange,d=Object(s.b)().t,O=Object(c.useState)([]),b=Object(n.a)(O,2),f=b[0],N=b[1],g="ltr"===d("DIRECTION")?"left":"right",p="ltr"===d("DIRECTION")?"right":"left";return Object(c.useEffect)(function(e){!m&&(m=o.isMobile?l.u.WIDTH_MOBILE:l.u.WIDTH);var t=Math.ceil(m/2),n=a-t<1?1:a-t,c=a+t-1>u?u:a+t-1;c-n<m&&(1===n&&(c=u<m?u:m),c===u&&(n=u-m+1<1?1:u-m+1));for(var r=[],i=n;i<=c;i++)r.push(i);N(r)},[a,u,m]),r.a.createElement(c.Fragment,null,u>0&&r.a.createElement(i.L,{circle:t},r.a.createElement(i.J,{disabled:1===a,onClick:function(){return E(1)}},r.a.createElement(i.K,{className:"page-link"},r.a.createElement(i.u,{icon:"angle-double-".concat(g)}))),r.a.createElement(i.J,{disabled:1===a,onClick:function(){return E(a-1)}},r.a.createElement(i.K,{className:"page-link"},r.a.createElement(i.u,{icon:"angle-".concat(g)}))),f.map(function(e,t){return r.a.createElement(i.J,{key:e,active:e===a,onClick:function(){return a!==e&&E(e)}},r.a.createElement(i.K,{className:"page-link"},e))}),r.a.createElement(i.J,{disabled:a===u,onClick:function(){return E(a+1)}},r.a.createElement(i.K,{className:"page-link"},r.a.createElement(i.u,{icon:"angle-".concat(p)}))),r.a.createElement(i.J,{disabled:a===u,onClick:function(){return E(u)}},r.a.createElement(i.K,{className:"page-link"},r.a.createElement(i.u,{icon:"angle-double-".concat(p)})))))}},762:function(e,t,a){},763:function(e,t,a){},764:function(e,t,a){},791:function(e,t,a){"use strict";a.r(t);var n=a(32),c=a(1),r=a.n(c),i=a(30),l=a(37),o=a(34),s=a(3),u=a(26),m=a(72),E=a(431),d=a(425),O=a(438),b=a(11),f=a(5),N=a(127),g=a(469),p=a(470),h=a(123),T=a(460),w=(a(761),a(435)),j=function(e){var t=e.onChangeKeyword,a=Object(u.b)().t,i=Object(c.useState)(!1),l=Object(n.a)(i,2),o=l[0],m=l[1],E=Object(c.useState)(""),d=Object(n.a)(E,2),O=d[0],f=d[1],N=Object(w.a)(O,b.i.DELAY2);Object(c.useEffect)(function(e){var t=setTimeout(function(e){m(!0),clearTimeout(t)},b.i.DELAY2)},[]),Object(c.useMemo)(function(e){"function"===typeof t&&o&&t(N)},[N]);return r.a.createElement(c.Fragment,null,r.a.createElement(s.O,null,r.a.createElement(s.k,{md:"6"}),r.a.createElement(s.k,{md:"6"},r.a.createElement(s.w,{id:"name",name:"name",label:a("COMMON.SEARCH.KEYWORD"),outline:!0,containerClass:"mt-3 mb-0",value:O,getValue:f}))))},k=a(59),C=(a(762),function(e){var t=e.data,a=e.page,n=(e.detailLabel,e.detailLink),c=(e.deleteLabel,e.onDelete),i=(e.questionsLink,e.questionsLabel,Object(u.b)().t,t.id),l=t.name,m=t.description,E=O.Base64.encode(JSON.stringify({id:i,page:a}));return r.a.createElement(s.k,{md:"6",lg:"4",className:"mb-3 mb-md-4"},r.a.createElement(s.bb,{hover:!0,className:"card"},r.a.createElement(s.i,{className:"letter-item-wrapper"},r.a.createElement("div",{className:"letter-inner-wrapper"},r.a.createElement("div",{className:"border-dark border-bottom mb-sm-1 mb-md-2"},r.a.createElement("div",null,r.a.createElement("span",{className:"h4-responsive"},l))),r.a.createElement("div",{className:"letter-content",dangerouslySetInnerHTML:{__html:m}}))),r.a.createElement(s.x,{className:"flex-center",overlay:"grey-strong"},r.a.createElement(o.b,{to:"".concat(n,"/").concat(E),className:"text-body"},r.a.createElement(s.g,{tag:"a",floating:!0,color:"primary",size:"sm",className:"white-text",rounded:!0},r.a.createElement(s.u,{icon:"edit"}))),r.a.createElement(s.g,{tag:"a",floating:!0,color:"danger",size:"sm",onClick:function(e){return c({id:i,item:l})},rounded:!0},r.a.createElement(s.u,{icon:"trash"})))))}),R=(a(763),function(e){var t=e.to,a=Object(u.b)().t;return r.a.createElement(s.k,{md:"6",lg:"4",className:"mb-3 mb-md-4"},r.a.createElement(o.b,{to:t,className:"text-body"},r.a.createElement(s.bb,{hover:!0,className:"card"},r.a.createElement(s.i,{className:"letter-item-wrapper"},r.a.createElement("div",{className:"letter-inner-wrapper"},r.a.createElement("div",{className:"border-dark border-bottom mb-sm-1 mb-md-2"},r.a.createElement("span",{className:"h4-responsive"},a("COMMON.BUTTON.ADD_NEW_ITEM"))),r.a.createElement("div",{className:"letter-content"},a("HIRE.WORKPLACE.LETTERS.ALL.NEW_ITEM_DESCRIPTION")))),r.a.createElement(s.x,{className:"flex-center",overlay:"grey-strong"},r.a.createElement(s.g,{color:"primary",size:"sm",className:"white-text",rounded:!0},r.a.createElement(s.u,{icon:"plus",size:"sm"}))))))}),v=function(e){var t=e.items,a=e.page,n=e.showNewLink,i=e.newLink,l=Object(k.a)(e,["items","page","showNewLink","newLink"]);return r.a.createElement("div",{className:"row text-left mt-3"},!!n&&r.a.createElement(R,{to:i}),t.map(function(e,t){return r.a.createElement(c.Fragment,{key:e.id},r.a.createElement(C,Object.assign({data:e,page:a},l)))}))};a(764),t.default=function(){var e=Object(l.h)().page,t=Object(u.b)().t,a=Object(l.g)(),w=Object(i.c)(function(e){return e}).auth.user,k=Object(c.useState)(!1),C=Object(n.a)(k,2),R=C[0],S=C[1],I=Object(c.useState)({}),M=Object(n.a)(I,2),L=M[0],y=M[1],A=Object(c.useState)({}),D=Object(n.a)(A,2),q=D[0],x=D[1],U=Object(c.useState)(0),_=Object(n.a)(U,2),K=_[0],B=_[1],P=Object(c.useState)([]),Q=Object(n.a)(P,2),W=Q[0],z=Q[1],H=Object(c.useState)(""),J=Object(n.a)(H,2),F=J[0],V=J[1],Y=e?parseInt(e):1,G=t("NAVBAR.HIRE.WORKPLACE.QUESTIONNAIRE"),X="".concat(f.a.hire.workplace.questionnaire.add,"/").concat(O.Base64.encode(JSON.stringify({page:e}))),Z=f.a.hire.workplace.questionnaire.add,$=f.a.hire.workplace.questionnaire.questions,ee=function(e){x(Object.assign({},q,{show:!q.show}))},te=function(a){a.id;ee(),S(!0),T.a.delete({page:e,pageSize:9,id:q.deleteId,userId:w.id,keyword:F}).then(function(e){e.result===b.x.SUCCESS?(B(e.pageCount),z(e.data)):h.b.error(e.message),S(!1)}).catch(function(e){h.b.error(t("COMMON.ERROR.UNKNOWN_SERVER_ERROR")),S(!1)})},ae=function(e){a.push("".concat(f.a.hire.workplace.questionnaire.all,"/").concat(e))},ne=function(e){var a=e.id,n=e.item;x(Object.assign({},q,{show:!0,title:t("COMMON.BUTTON.DELETE"),message:t("COMMON.QUESTION.DELETE",{item:n}),deleteId:a}))};Object(c.useEffect)(function(e){m.animateScroll.scrollToTop({duration:b.j.TRANSITION_TIME})},[]),Object(c.useMemo)(function(a){S(!0),y({}),T.a.list({page:e,pageSize:9,userId:w.id,keyword:F}).then(function(e){e.result===b.x.SUCCESS?(B(e.pageCount),z(e.data)):h.b.error(e.message),S(!1)}).catch(function(e){h.b.error(t("COMMON.ERROR.UNKNOWN_SERVER_ERROR")),S(!1)})},[e,t,F]),Object(c.useMemo)(function(e){m.animateScroll.scrollToTop({duration:b.j.TRANSITION_TIME})},[e]);return r.a.createElement(c.Fragment,null,r.a.createElement(E.Helmet,null,r.a.createElement("title",null,G," - ",t("SITE_NAME"))),r.a.createElement(s.e,null,r.a.createElement(s.f,null,t("NAVBAR.HIRE.WORKPLACE.ROOT")),r.a.createElement(s.f,{active:!0},G)),r.a.createElement(s.O,{className:"my-sm-2 my-md-4"},r.a.createElement(s.k,{md:"5",className:"order-1 order-md-0"},r.a.createElement("div",{className:"full-width text-left mt-3"},r.a.createElement(o.b,{to:X},r.a.createElement(s.g,{color:"primary",size:"sm",rounded:!0,disabled:!!R},t("COMMON.BUTTON.NEW"))))),r.a.createElement(s.k,{md:"7",className:"order-0 order-md-1"},r.a.createElement(j,{onChangeKeyword:V}))),r.a.createElement(s.O,null,L.show&&r.a.createElement(s.k,{md:"12"},r.a.createElement(d.a,{in:L.show,classNames:"fade-transition",timeout:b.j.TRANSITION_TIME,unmountOnExit:!0,appear:!0},r.a.createElement(s.b,{color:L.color,dismiss:!0,onClosed:function(){return y({})}},L.message))),r.a.createElement(s.k,{md:"12"},!!R&&r.a.createElement(N.a,null),!R&&!W.length&&r.a.createElement(g.a,null),!R&&!!W.length&&r.a.createElement(c.Fragment,null,r.a.createElement("div",{className:"my-4 text-center"},r.a.createElement(p.a,{circle:!0,current:Y,pageCount:K,onChange:ae})),r.a.createElement(v,{items:W,page:e,newLink:X,detailLabel:t("COMMON.BUTTON.EDIT"),detailLink:Z,deleteLabel:t("COMMON.BUTTON.DELETE"),onDelete:ne,questionsLink:$,questionsLabel:t("HIRE.WORKPLACE.QUESTIONNAIRE.QUESTIONS.QUESTIONS")}),r.a.createElement("div",{className:"mt-4 text-center"},r.a.createElement(p.a,{circle:!0,current:Y,pageCount:K,onChange:ae}))))),r.a.createElement(s.y,{isOpen:!!q.show,toggle:ee,centered:!0,backdropClassName:"modal-backdrop"},r.a.createElement(s.B,{toggle:ee},q.title),r.a.createElement(s.z,{className:"text-left"},q.message),r.a.createElement(s.A,null,r.a.createElement(s.g,{type:"button",color:"danger",size:"sm",rounded:!0,onClick:te},t("COMMON.BUTTON.DELETE")),r.a.createElement(s.g,{type:"button",color:"secondary",size:"sm",rounded:!0,onClick:ee},t("COMMON.BUTTON.CANCEL")))))}}}]);