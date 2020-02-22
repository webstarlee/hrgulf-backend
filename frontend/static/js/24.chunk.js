(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{421:function(e,t,n){"use strict";n.d(t,"a",function(){return i});n(1);var a=n(56),r=n(11),i=(Object(a.b)({enter:"zoomIn",exit:"zoomOut",duration:r.j.TRANSITION_TIME}),Object(a.b)({enter:"fadeIn",exit:"fadeOut",duration:r.j.TRANSITION_TIME}));t.b=a.c},447:function(e,t,n){"use strict";var a=n(23),r=n(26),i=n(22);t.a={list:function(e){return new Promise(function(t,n){Object(a.a)(r.d,i.a.hire.workplace.questionnaire.list,e).then(function(e){t(e)},function(e){n(e)})})},save:function(e){return new Promise(function(t,n){Object(a.a)(r.d,i.a.hire.workplace.questionnaire.save,e).then(function(e){t(e)},function(e){n(e)})})},get:function(e){return new Promise(function(t,n){Object(a.a)(r.d,i.a.hire.workplace.questionnaire.get,e).then(function(e){t(e)},function(e){n(e)})})},delete:function(e){return new Promise(function(t,n){Object(a.a)(r.d,i.a.hire.workplace.questionnaire.delete,e).then(function(e){t(e)},function(e){n(e)})})},listQuestions:function(e){return new Promise(function(t,n){Object(a.a)(r.d,i.a.hire.workplace.questionnaire.listQuestions,e).then(function(e){t(e)},function(e){n(e)})})},saveQuestion:function(e){return new Promise(function(t,n){Object(a.a)(r.d,i.a.hire.workplace.questionnaire.saveQuestion,e).then(function(e){t(e)},function(e){n(e)})})},getQuestion:function(e){return new Promise(function(t,n){Object(a.a)(r.d,i.a.hire.workplace.questionnaire.getQuestion,e).then(function(e){t(e)},function(e){n(e)})})},deleteQuestion:function(e){return new Promise(function(t,n){Object(a.a)(r.d,i.a.hire.workplace.questionnaire.deleteQuestion,e).then(function(e){t(e)},function(e){n(e)})})}}},461:function(e,t,n){"use strict";n.d(t,"a",function(){return a});n(1);function a(){window.history.back()}},718:function(e,t,n){"use strict";n.r(t);var a=n(30),r=n(1),i=n.n(r),o=n(43),c=n(29),l=n(3),s=n(25),u=n(73),m=n(425),E=n(418),d=n(427),O=n(430),f=n(24),S=n(432),I=n(496),N=n(563),b=n(564),R=n.n(b),h=n(11),T=n(5),A=n(123),C=n(421),p=n(461),g=n(447);n(463),n(719);t.default=function(){var e,t=Object(o.h)().params,n=Object(s.b)().t,b=Object(o.g)(),j=Object(f.c)(function(e){return e}).auth.user,w=Object(r.useState)(!1),v=Object(a.a)(w,2),M=v[0],B=v[1],y=Object(r.useState)({}),D=Object(a.a)(y,2),L=D[0],k=D[1],P=Object(r.useState)({}),Q=Object(a.a)(P,2),U=Q[0],_=Q[1],x=Object(r.useState)(),W=Object(a.a)(x,2),q=W[0],K=W[1],F=Object(r.useState)(I.EditorState.createEmpty()),H=Object(a.a)(F,2),V=H[0],z=H[1],J=n("HIRE.WORKPLACE.QUESTIONNAIRE.ADD.".concat(q?"EDIT":"ADD","_QUESTIONNAIRE")),G="".concat(T.a.hire.workplace.questionnaire.all,"/").concat(U.page||1),Y="".concat(T.a.hire.workplace.questionnaire.add,"/").concat(d.Base64.encode(JSON.stringify({page:U.page}))),X=S.b().shape({name:S.d().required(n("COMMON.VALIDATION.REQUIRED",{field:n("HIRE.WORKPLACE.QUESTIONNAIRE.FIELDS.NAME")})),minScore:S.d().min(0,n("COMMON.VALIDATION.MIN",{field:n("HIRE.WORKPLACE.QUESTIONNAIRE.FIELDS.MIN_SCORE"),value:0})).test("min-score",n("COMMON.VALIDATION.MIN",{field:n("HIRE.WORKPLACE.QUESTIONNAIRE.FIELDS.MIN_SCORE"),value:0}),function(e){return!this.parent.filterByScore||e>=0})});Object(r.useEffect)(function(e){u.animateScroll.scrollToTop({duration:h.j.TRANSITION_TIME})},[]),Object(r.useMemo)(function(e){if(t)try{var n=d.Base64.decode(t),a=JSON.parse(n);_(a)}catch(e){}},[t,n]),Object(r.useMemo)(function(t){U.id&&(B(!0),g.a.get({id:U.id}).then(function(t){if(t.result===h.s.SUCCESS){var n=t.data;K(U.id);var a=n.name,r=n.description,i=n.filterByScore,o=n.minScore;e&&e.setValues({name:a,filterByScore:i,minScore:o}),z(I.EditorState.createWithContent(I.ContentState.createFromBlockArray(Object(I.convertFromHTML)(r)))),k({})}else k({show:!0,color:h.b.DANGER,message:t.message});B(!1)}).catch(function(e){k({show:!0,color:h.b.DANGER,message:n("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),B(!1)}))},[U.id]);var Z=e=Object(O.b)({initialValues:{name:"",filterByScore:!1,minScore:0},validationSchema:X,onSubmit:function(e,t){var a=t.setSubmitting,r=e.name,i=e.filterByScore,o=e.minScore,c=R()(Object(I.convertToRaw)(V.getCurrentContent())),l={id:q,userId:j.id,name:r,description:c,filterByScore:i||!1,minScore:o};a(!0),g.a.save(l).then(function(e){e.result===h.s.SUCCESS?(C.b.success(e.message),!q&&K(e.data.insertId)):C.b.error(e.message),a(!1)}).catch(function(e){C.b.error(n("COMMON.ERROR.UNKNOWN_SERVER_ERROR")),a(!1)})}}),$=Z.values,ee=Z.touched,te=Z.errors,ne=Z.setValues,ae=Z.setTouched,re=Z.setErrors,ie=Z.handleChange,oe=Z.handleBlur,ce=Z.isSubmitting;return i.a.createElement(r.Fragment,null,i.a.createElement(m.Helmet,null,i.a.createElement("title",null,J," - ",n("SITE_NAME"))),i.a.createElement(l.e,null,i.a.createElement(l.f,null,n("NAVBAR.HIRE.WORKPLACE.ROOT")),i.a.createElement(l.f,null,i.a.createElement(c.b,{to:G},n("NAVBAR.HIRE.WORKPLACE.QUESTIONNAIRE"))),i.a.createElement(l.f,{active:!0},J)),i.a.createElement(l.S,null,L.show&&i.a.createElement(l.o,{md:"12"},i.a.createElement(E.a,{in:L.show,classNames:"fade-transition",timeout:h.j.TRANSITION_TIME,unmountOnExit:!0,appear:!0},i.a.createElement(l.b,{color:L.color,dismiss:!0,onClosed:function(){return k({})}},L.message))),i.a.createElement(l.o,{md:"12"},i.a.createElement(l.h,null,i.a.createElement(l.i,null,!!M&&i.a.createElement(A.a,null),!M&&i.a.createElement(r.Fragment,null,i.a.createElement("form",{className:"mx-md-4 mx-sm-1 text-left",onSubmit:e.handleSubmit},i.a.createElement(l.S,null,i.a.createElement(l.o,{md:"12"},i.a.createElement(l.A,{id:"name",name:"name",label:n("HIRE.WORKPLACE.QUESTIONNAIRE.FIELDS.NAME"),background:!0,containerClass:"mb-0",value:$.name,onChange:ie,onBlur:oe},!!ee.name&&!!te.name&&i.a.createElement("div",{className:"text-left invalid-field"},te.name)))),i.a.createElement(l.S,null,i.a.createElement(l.o,{md:"12"},i.a.createElement("div",{className:"text-left"},i.a.createElement("div",{className:"grey-text"},n("HIRE.WORKPLACE.QUESTIONNAIRE.FIELDS.DESCRIPTION")),i.a.createElement(N.Editor,{id:"editor",editorState:V,wrapperClassName:"questionnaire-wrapper",editorClassName:"questionnaire-editor",onEditorStateChange:z})))),i.a.createElement(l.S,null,i.a.createElement(l.o,{md:"6"},i.a.createElement(l.A,{id:"filterByScore",name:"filterByScore",type:"checkbox",label:n("HIRE.WORKPLACE.QUESTIONNAIRE.FIELDS.FILTER_BY_SCORE"),filled:!0,containerClass:"text-left mt-4 mb-0",checked:$.filterByScore||!1,onChange:ie})),i.a.createElement(l.o,{md:"6"},i.a.createElement(l.A,{id:"minScore",name:"minScore",type:"number",label:n("HIRE.WORKPLACE.QUESTIONNAIRE.FIELDS.MIN_SCORE"),background:!0,containerClass:"text-left mt-3 mb-0",disabled:!$.filterByScore,value:$.minScore,onChange:ie,onBlur:oe},!!te.minScore&&i.a.createElement("div",{className:"text-left invalid-field"},te.minScore)))),i.a.createElement("div",{className:"mt-4 mb-3"},i.a.createElement(l.g,{type:"submit",color:"primary",size:"sm",rounded:!0,disabled:!!M||!!ce||!!te&&!!Object.keys(te).length},n("COMMON.BUTTON.".concat(q?"EDIT":"ADD"))),i.a.createElement(l.g,{type:"button",color:"indigo",size:"sm",rounded:!0,onClick:function(e){return function(e){var t=e.setValues,n=e.setTouched,a=e.setErrors;t({name:"",filterByScore:!1,minScore:0}),z(I.EditorState.createEmpty()),n({}),a({}),k({}),K(void 0),b.location.pathname!==Y&&b.push(Y)}({setValues:ne,setTouched:ae,setErrors:re})}},n("COMMON.BUTTON.NEW")),i.a.createElement(l.g,{type:"button",color:"warning",size:"sm",rounded:!0,onClick:p.a},n("COMMON.BUTTON.BACK"))))))))),i.a.createElement(l.fb,{className:"text-left",position:"ltr"===n("DIRECTION")?"top-right":"top-left",dir:n("DIRECTION"),hideProgressBar:!0,autoClose:h.j.TRANSITION_TIME5,closeButton:!1,transition:C.a}))}},719:function(e,t,n){}}]);