(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{435:function(e,t,n){"use strict";var r=n(32),a=n(1);t.a=function(e,t){var n=Object(a.useState)(e),c=Object(r.a)(n,2),o=c[0],l=c[1];return Object(a.useEffect)(function(n){var r=setTimeout(function(){l(e)},t);return function(){return clearTimeout(r)}},[e]),o}},436:function(module,exports,__webpack_require__){(function(global){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!function(e,t){module.exports=t(e)}("undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof global?global:this,function(global){"use strict";global=global||{};var _Base64=global.Base64,version="2.5.2",buffer;if(module.exports)try{buffer=eval("require('buffer').Buffer")}catch(err){buffer=void 0}var b64chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",b64tab=function(e){for(var t={},n=0,r=e.length;n<r;n++)t[e.charAt(n)]=n;return t}(b64chars),fromCharCode=String.fromCharCode,cb_utob=function(e){if(e.length<2)return(t=e.charCodeAt(0))<128?e:t<2048?fromCharCode(192|t>>>6)+fromCharCode(128|63&t):fromCharCode(224|t>>>12&15)+fromCharCode(128|t>>>6&63)+fromCharCode(128|63&t);var t=65536+1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320);return fromCharCode(240|t>>>18&7)+fromCharCode(128|t>>>12&63)+fromCharCode(128|t>>>6&63)+fromCharCode(128|63&t)},re_utob=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,utob=function(e){return e.replace(re_utob,cb_utob)},cb_encode=function(e){var t=[0,2,1][e.length%3],n=e.charCodeAt(0)<<16|(e.length>1?e.charCodeAt(1):0)<<8|(e.length>2?e.charCodeAt(2):0);return[b64chars.charAt(n>>>18),b64chars.charAt(n>>>12&63),t>=2?"=":b64chars.charAt(n>>>6&63),t>=1?"=":b64chars.charAt(63&n)].join("")},btoa=global.btoa?function(e){return global.btoa(e)}:function(e){return e.replace(/[\s\S]{1,3}/g,cb_encode)},_encode=function(e){return"[object Uint8Array]"===Object.prototype.toString.call(e)?e.toString("base64"):btoa(utob(String(e)))},encode=function(e,t){return t?_encode(String(e)).replace(/[+\/]/g,function(e){return"+"==e?"-":"_"}).replace(/=/g,""):_encode(e)},encodeURI=function(e){return encode(e,!0)},re_btou=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,cb_btou=function(e){switch(e.length){case 4:var t=((7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3))-65536;return fromCharCode(55296+(t>>>10))+fromCharCode(56320+(1023&t));case 3:return fromCharCode((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return fromCharCode((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},btou=function(e){return e.replace(re_btou,cb_btou)},cb_decode=function(e){var t=e.length,n=t%4,r=(t>0?b64tab[e.charAt(0)]<<18:0)|(t>1?b64tab[e.charAt(1)]<<12:0)|(t>2?b64tab[e.charAt(2)]<<6:0)|(t>3?b64tab[e.charAt(3)]:0),a=[fromCharCode(r>>>16),fromCharCode(r>>>8&255),fromCharCode(255&r)];return a.length-=[0,0,2,1][n],a.join("")},_atob=global.atob?function(e){return global.atob(e)}:function(e){return e.replace(/\S{1,4}/g,cb_decode)},atob=function(e){return _atob(String(e).replace(/[^A-Za-z0-9\+\/]/g,""))},_decode=buffer?buffer.from&&Uint8Array&&buffer.from!==Uint8Array.from?function(e){return(e.constructor===buffer.constructor?e:buffer.from(e,"base64")).toString()}:function(e){return(e.constructor===buffer.constructor?e:new buffer(e,"base64")).toString()}:function(e){return btou(_atob(e))},decode=function(e){return _decode(String(e).replace(/[-_]/g,function(e){return"-"==e?"+":"/"}).replace(/[^A-Za-z0-9\+\/]/g,""))},noConflict=function(){var e=global.Base64;return global.Base64=_Base64,e};if(global.Base64={VERSION:version,atob:atob,btoa:btoa,fromBase64:decode,toBase64:encode,utob:utob,encode:encode,encodeURI:encodeURI,btou:btou,decode:decode,noConflict:noConflict,__buffer__:buffer},"function"===typeof Object.defineProperty){var noEnum=function(e){return{value:e,enumerable:!1,writable:!0,configurable:!0}};global.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",noEnum(function(){return decode(this)})),Object.defineProperty(String.prototype,"toBase64",noEnum(function(e){return encode(this,e)})),Object.defineProperty(String.prototype,"toBase64URI",noEnum(function(){return encode(this,!0)}))}}return global.Meteor&&(Base64=global.Base64),module.exports?module.exports.Base64=global.Base64:(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_RESULT__=function(){return global.Base64}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)),{Base64:global.Base64}})}).call(this,__webpack_require__(50))},445:function(e,t,n){"use strict";n.d(t,"a",function(){return r});n(1);function r(){window.history.back()}},456:function(e,t,n){"use strict";var r=n(24),a=n(28),c=n(27);t.a={list:function(e){return new Promise(function(t,n){Object(r.a)(a.d,c.a.hire.workplace.questionnaire.list,e).then(function(e){t(e)},function(e){n(e)})})},save:function(e){return new Promise(function(t,n){Object(r.a)(a.d,c.a.hire.workplace.questionnaire.save,e).then(function(e){t(e)},function(e){n(e)})})},get:function(e){return new Promise(function(t,n){Object(r.a)(a.d,c.a.hire.workplace.questionnaire.get,e).then(function(e){t(e)},function(e){n(e)})})},delete:function(e){return new Promise(function(t,n){Object(r.a)(a.d,c.a.hire.workplace.questionnaire.delete,e).then(function(e){t(e)},function(e){n(e)})})},listQuestions:function(e){return new Promise(function(t,n){Object(r.a)(a.d,c.a.hire.workplace.questionnaire.listQuestions,e).then(function(e){t(e)},function(e){n(e)})})},saveQuestion:function(e){return new Promise(function(t,n){Object(r.a)(a.d,c.a.hire.workplace.questionnaire.saveQuestion,e).then(function(e){t(e)},function(e){n(e)})})},getQuestion:function(e){return new Promise(function(t,n){Object(r.a)(a.d,c.a.hire.workplace.questionnaire.getQuestion,e).then(function(e){t(e)},function(e){n(e)})})},deleteQuestion:function(e){return new Promise(function(t,n){Object(r.a)(a.d,c.a.hire.workplace.questionnaire.deleteQuestion,e).then(function(e){t(e)},function(e){n(e)})})}}},573:function(e,t,n){"use strict";var r=n(32),a=n(1),c=n.n(a),o=n(44),l=n(3),i=n(26),s=n(429),E=n(422),u=n(431),m=n(30),d=n(430),O=n(463),f=n(510),N=n(511),S=n.n(N),C=n(512),b=n.n(C),I=n(11),A=n(125),h=n(122),R=n(445),T=n(126),g=n(435),w=n(456),p=function(e){var t,n=e.items,o=e.onItemsChanged,s=(e.onLoading,Object(i.b)().t),E=Object(a.useState)({}),m=Object(r.a)(E,2),O=(m[0],m[1],Object(a.useState)(!1)),f=Object(r.a)(O,2),N=f[0],S=f[1],C=Object(a.useState)(!1),b=Object(r.a)(C,2),A=b[0],h=b[1],w=Object(a.useState)({}),p=Object(r.a)(w,2),_=p[0],U=p[1],v=Object(a.useState)(""),Q=Object(r.a)(v,2),L=(Q[0],Q[1],Object(a.useState)([])),y=Object(r.a)(L,2),M=y[0],D=y[1],P={id:null,index:-1,question:"",type:I.w.QUESTION.TYPE.YES_NO,answers:"",required:!1,hasCorrectAnswer:!1,correctAnswer:""},B=d.c().shape({question:d.e().required(s("COMMON.VALIDATION.REQUIRED",{field:s("HIRE.WORKPLACE.QUESTIONNAIRE.FIELDS.QUESTION")})),answers:d.e().test("answers-test",s("COMMON.VALIDATION.REQUIRED",{field:s("HIRE.WORKPLACE.QUESTIONNAIRE.FIELDS.ANSWERS")}),function(e){var t=this.parent.type;return e=e?e.trim():"",t!==I.w.QUESTION.TYPE.SELECT||!!e.length}),correctAnswer:d.e().test("correctAnswer-test",s("COMMON.VALIDATION.REQUIRED",{field:s("HIRE.WORKPLACE.QUESTIONNAIRE.FIELDS.CORRECT_ANSWER")}),function(e){var t=this.parent.hasCorrectAnswer;return e=e?e.trim():"",!t||!!e.length})}),k=function(e){n.splice(_.deleteId,1),o(n),h(!1)},j=function(e){t.setValues(P),t.setTouched({}),t.setErrors({}),S(!0)},x=t=Object(u.b)({initialValues:P,validationSchema:B,onSubmit:function(e,r){var a,c=r.setSubmitting,l=e.id,i=e.index,s=e.question,E=e.type,u=e.answers,m=e.required,d=e.hasCorrectAnswer,O=e.correctAnswer;c(!0);var f={id:l,number:-1===i?n.length+1:i,question:s,type:E,answers:u||"",required:m,hasCorrectAnswer:d,correctAnswer:O||""};-1===i?(a=n.concat([f]),t.setFieldValue("index",n.length),o(a)):(n.splice(i,1,f),o(n)),S(!1),c(!1)}}),F=x.values,W=x.touched,q=x.errors,Y=(x.setValues,x.setTouched,x.setErrors,x.handleChange),K=x.handleBlur,H=x.isSubmitting,V=Object(g.a)(F.answers,I.i.DELAY2);Object(a.useMemo)(function(e){var t=V.split(",").filter(function(e){return!!e.trim().length});D(t)},[V]);return c.a.createElement("div",{className:"text-left mt-4"},c.a.createElement(l.O,null,c.a.createElement(l.k,{md:"7",className:"text-left"},c.a.createElement("h4",{className:"h4-responsive"},s("HIRE.WORKPLACE.QUESTIONNAIRE.QUESTIONS.QUESTIONS"))),c.a.createElement(l.k,{md:"5",className:"text-right"},c.a.createElement(l.g,{type:"button",color:"primary",size:"sm",rounded:!0,onClick:j},s("COMMON.BUTTON.ADD")),c.a.createElement(l.g,{type:"button",color:"warning",size:"sm",rounded:!0,onClick:R.a},s("COMMON.BUTTON.BACK")))),c.a.createElement(l.X,{responsive:!0,striped:!0},c.a.createElement(l.Z,null,c.a.createElement("tr",{className:""},c.a.createElement("th",{className:"nomer-col"},"#"),c.a.createElement("th",null,s("HIRE.WORKPLACE.QUESTIONNAIRE.FIELDS.QUESTION")),c.a.createElement("th",null,s("HIRE.WORKPLACE.QUESTIONNAIRE.FIELDS.TYPE")),c.a.createElement("th",null,s("HIRE.WORKPLACE.QUESTIONNAIRE.FIELDS.CORRECT_ANSWER")),c.a.createElement("th",{className:"p-2 edit-col-2"}))),c.a.createElement(l.Y,null,!!n.length&&n.map(function(e,r){return c.a.createElement("tr",{key:r,className:""},c.a.createElement("td",null,r+1),c.a.createElement("td",null,e.question),c.a.createElement("td",null,e.type===I.w.QUESTION.TYPE.YES_NO&&s("COMMON.QUESTIONNAIRE.QUESTION_TYPE.YES_NO"),e.type===I.w.QUESTION.TYPE.SELECT&&s("COMMON.QUESTIONNAIRE.QUESTION_TYPE.SELECT"),e.type===I.w.QUESTION.TYPE.TEXT&&s("COMMON.QUESTIONNAIRE.QUESTION_TYPE.TEXT")),c.a.createElement("td",null,e.hasCorrectAnswer?e.correctAnswer:""),c.a.createElement("td",{className:"edit-col"},c.a.createElement(l.g,{tag:"a",floating:!0,color:"secondary",size:"sm",onClick:function(e){return function(e){var r=n[e]||{};r.index=e,t.setValues(r),t.setTouched({}),t.setErrors({}),S(!0)}(r)}},c.a.createElement(l.u,{icon:"edit"})),c.a.createElement(l.g,{tag:"a",floating:!0,color:"danger",size:"sm",className:"ml-2",onClick:function(t){return function(e,t){U(Object.assign({},_,{show:!0,title:s("COMMON.BUTTON.DELETE"),message:s("COMMON.QUESTION.DELETE",{item:e.question}),deleteId:t})),h(!0)}(e,r)}},c.a.createElement(l.u,{icon:"trash"}))))}))),c.a.createElement(l.y,{isOpen:N,toggle:function(e){},centered:!0,size:"lg",backdropClassName:"modal-backdrop"},c.a.createElement(l.B,{toggle:function(e){return S(!N)}},s("HIRE.WORKPLACE.QUESTIONNAIRE.FIELDS.QUESTION")),c.a.createElement(l.z,null,c.a.createElement("form",{onSubmit:t.handleSubmit},c.a.createElement("input",{hidden:!0,id:"type",name:"type",onChange:Y,onBlur:K}),c.a.createElement("input",{hidden:!0,id:"correctAnswer",name:"correctAnswer",onChange:Y,onBlur:K}),c.a.createElement(l.O,null,c.a.createElement(l.k,{md:"12"},c.a.createElement(l.w,{id:"question",name:"question",label:s("HIRE.WORKPLACE.QUESTIONNAIRE.FIELDS.QUESTION"),background:!0,containerClass:"my-0",value:F.question,onChange:Y,onBlur:K},!!W.question&&!!q.question&&c.a.createElement("div",{className:"text-left invalid-field"},q.question)))),c.a.createElement(l.O,null,c.a.createElement(l.k,{md:"6",className:"mt-3"},c.a.createElement(l.P,{label:s("HIRE.WORKPLACE.QUESTIONNAIRE.FIELDS.TYPE"),className:"mt-3 mb-0 white",selected:F.type,getValue:function(e){T.a.triggerChangeEvent("type",e[0])}},c.a.createElement(l.Q,null),c.a.createElement(l.S,null,c.a.createElement(l.R,{value:I.w.QUESTION.TYPE.YES_NO,checked:F.type===I.w.QUESTION.TYPE.YES_NO},s("COMMON.QUESTIONNAIRE.QUESTION_TYPE.YES_NO")),c.a.createElement(l.R,{value:I.w.QUESTION.TYPE.SELECT,checked:F.type===I.w.QUESTION.TYPE.SELECT},s("COMMON.QUESTIONNAIRE.QUESTION_TYPE.SELECT")),c.a.createElement(l.R,{value:I.w.QUESTION.TYPE.TEXT,checked:F.type===I.w.QUESTION.TYPE.TEXT},s("COMMON.QUESTIONNAIRE.QUESTION_TYPE.TEXT")))),!!W.location&&!!q.location&&c.a.createElement("div",{className:"text-left invalid-field"},q.location))),F.type===I.w.QUESTION.TYPE.SELECT&&c.a.createElement(l.O,null,c.a.createElement(l.k,{md:"12"},c.a.createElement(l.w,{id:"answers",name:"answers",placeHolder:s("HIRE.WORKPLACE.QUESTIONNAIRE.QUESTIONS.ANSWERS_PLACEHOLDER"),background:!0,containerClass:"mb-0",value:F.answers,onChange:Y,onBlur:K},!!W.answers&&!!q.answers&&c.a.createElement("div",{className:"text-left invalid-field"},q.answers)))),c.a.createElement(l.O,null,c.a.createElement(l.k,{md:"12"},c.a.createElement(l.w,{id:"required",name:"required",label:s("HIRE.WORKPLACE.QUESTIONNAIRE.FIELDS.REQUIRED"),containerClass:"mt-3",type:"checkbox",filled:!0,checked:F.required,onChange:Y,onBlur:K},!!W.required&&!!q.required&&c.a.createElement("div",{className:"text-left invalid-field"},q.required)))),c.a.createElement(l.O,null,c.a.createElement(l.k,{md:"12"},c.a.createElement(l.w,{id:"hasCorrectAnswer",name:"hasCorrectAnswer",label:s("HIRE.WORKPLACE.QUESTIONNAIRE.FIELDS.HAS_CORRECT_ANSWER"),containerClass:"mt-3",type:"checkbox",filled:!0,checked:F.hasCorrectAnswer,onChange:Y,onBlur:K},!!W.hasCorrectAnswer&&!!q.hasCorrectAnswer&&c.a.createElement("div",{className:"text-left invalid-field"},q.hasCorrectAnswer)))),!!F.hasCorrectAnswer&&F.type===I.w.QUESTION.TYPE.YES_NO&&c.a.createElement(l.O,null,c.a.createElement(l.k,{md:"6",className:"mt-0"},c.a.createElement(l.P,{label:s("HIRE.WORKPLACE.QUESTIONNAIRE.FIELDS.CORRECT_ANSWER"),className:"mt-4 mb-0 white",selected:F.correctAnswer,getValue:function(e){T.a.triggerChangeEvent("correctAnswer",e[0])}},c.a.createElement(l.Q,null),c.a.createElement(l.S,null,c.a.createElement(l.R,{value:I.w.ANSWER.YES,checked:F.correctAnswer===I.w.ANSWER.YES},s("COMMON.BUTTON.YES")),c.a.createElement(l.R,{value:I.w.ANSWER.NO,checked:F.correctAnswer===I.w.ANSWER.NO},s("COMMON.BUTTON.NO")))),!!W.correctAnswer&&!!q.correctAnswer&&c.a.createElement("div",{className:"text-left invalid-field"},q.correctAnswer))),!!F.hasCorrectAnswer&&F.type===I.w.QUESTION.TYPE.SELECT&&c.a.createElement(l.O,null,c.a.createElement(l.k,{md:"6",className:"mt-0"},c.a.createElement(l.P,{label:s("HIRE.WORKPLACE.QUESTIONNAIRE.FIELDS.CORRECT_ANSWER"),className:"mt-4 mb-0 white",selected:F.correctAnswer,getValue:function(e){T.a.triggerChangeEvent("correctAnswer",e[0])}},c.a.createElement(l.Q,null),c.a.createElement(l.S,null,M.map(function(e,t){return c.a.createElement(l.R,{key:t,value:e,checked:F.correctAnswer===e},e)}))),!!W.correctAnswer&&!!q.correctAnswer&&c.a.createElement("div",{className:"text-left invalid-field"},q.correctAnswer))),!!F.hasCorrectAnswer&&F.type===I.w.QUESTION.TYPE.TEXT&&c.a.createElement(l.O,null,c.a.createElement(l.k,{md:"12"},c.a.createElement(l.w,{id:"correctAnswer",name:"correctAnswer",label:s("HIRE.WORKPLACE.QUESTIONNAIRE.FIELDS.CORRECT_ANSWER"),containerClass:"mt-3",background:!0,value:F.correctAnswer,onChange:Y,onBlur:K},!!W.correctAnswer&&!!q.correctAnswer&&c.a.createElement("div",{className:"text-left invalid-field"},q.correctAnswer)))))),c.a.createElement(l.A,null,c.a.createElement(l.g,{color:"secondary",size:"sm",rounded:!0,onClick:function(e){return S(!N)}},"Close"),c.a.createElement(l.g,{color:"primary",size:"sm",rounded:!0,onClick:t.handleSubmit,disabled:!!H},s("COMMON.BUTTON.SAVE")))),c.a.createElement(l.y,{isOpen:A,toggle:function(e){},centered:!0,backdropClassName:"modal-backdrop"},c.a.createElement(l.B,{toggle:function(e){return h(!A)}},_.title),c.a.createElement(l.z,{className:"text-left"},_.message),c.a.createElement(l.A,null,c.a.createElement(l.g,{type:"button",color:"secondary",size:"sm",rounded:!0,onClick:function(e){return h(!A)}},s("COMMON.BUTTON.CANCEL")),c.a.createElement(l.g,{type:"button",color:"danger",size:"sm",rounded:!0,onClick:k},s("COMMON.BUTTON.DELETE")))))};n(468),n(738),t.a=function(e){var t,n=e.id,N=e.addUrl,C=(e.backUrl,e.showNewButton),T=Object(i.b)().t,g=Object(o.g)(),_=Object(m.c)(function(e){return e}).auth.user,U=Object(a.useState)(!1),v=Object(r.a)(U,2),Q=v[0],L=v[1],y=Object(a.useState)(!1),M=Object(r.a)(y,2),D=M[0],P=M[1],B=Object(a.useState)({}),k=Object(r.a)(B,2),j=k[0],x=k[1],F=Object(a.useState)(),W=Object(r.a)(F,2),q=W[0],Y=W[1],K=Object(a.useState)(O.EditorState.createEmpty()),H=Object(r.a)(K,2),V=H[0],z=H[1],X=Object(a.useState)([]),Z=Object(r.a)(X,2),G=Z[0],J=Z[1],$=T("HIRE.WORKPLACE.QUESTIONNAIRE.ADD.".concat(q?"EDIT":"ADD","_QUESTIONNAIRE")),ee=d.c().shape({name:d.e().required(T("COMMON.VALIDATION.REQUIRED",{field:T("HIRE.WORKPLACE.QUESTIONNAIRE.FIELDS.NAME")})),minScore:d.e().min(0,T("COMMON.VALIDATION.MIN",{field:T("HIRE.WORKPLACE.QUESTIONNAIRE.FIELDS.MIN_SCORE"),value:0})).test("min-score",T("COMMON.VALIDATION.MIN",{field:T("HIRE.WORKPLACE.QUESTIONNAIRE.FIELDS.MIN_SCORE"),value:0}),function(e){return!this.parent.filterByScore||e>=0}),description:d.e().test("description-required",T("COMMON.VALIDATION.REQUIRED",{field:T("HIRE.WORKPLACE.QUESTIONNAIRE.FIELDS.DESCRIPTION")}),function(e){return V.getCurrentContent().hasText()})});Object(a.useMemo)(function(e){n&&(L(!0),w.a.get({id:n}).then(function(e){if(e.result===I.x.SUCCESS){var r=e.data;Y(n);var a=r.name,c=r.description,o=r.filterByScore,l=r.minScore;t&&t.setValues({name:a,filterByScore:o,minScore:l});var i=b()(c),s=i.contentBlocks,E=i.entityMap,u=O.ContentState.createFromBlockArray(s,E);z(O.EditorState.createWithContent(u)),x({})}else x({show:!0,color:I.b.DANGER,message:e.message});L(!1)}).catch(function(e){x({show:!0,color:I.b.DANGER,message:T("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),L(!1)}),P(!0),w.a.listQuestions({questionnaireId:n}).then(function(e){e.result===I.x.SUCCESS?J(e.data):J([]),P(!1)}).catch(function(e){J([]),P(!1)}))},[n]);var te=t=Object(u.b)({initialValues:{name:"",filterByScore:!1,minScore:0},validationSchema:ee,onSubmit:function(e,t){var n=t.setSubmitting,r=e.name,a=e.filterByScore,c=e.minScore,o=S()(Object(O.convertToRaw)(V.getCurrentContent())),l={id:q,userId:_.id,name:r,description:o,filterByScore:a||!1,minScore:c};n(!0),w.a.save({questionnaire:l,questions:G}).then(function(e){e.result===I.x.SUCCESS?(h.b.success(e.message),!q&&Y(e.data.insertId)):h.b.error(e.message),n(!1)}).catch(function(e){h.b.error(T("COMMON.ERROR.UNKNOWN_SERVER_ERROR")),n(!1)})}}),ne=te.values,re=te.touched,ae=te.errors,ce=te.setValues,oe=te.setTouched,le=te.setErrors,ie=te.setFieldValue,se=te.handleChange,Ee=te.handleBlur,ue=te.isSubmitting;return c.a.createElement(a.Fragment,null,c.a.createElement(s.Helmet,null,c.a.createElement("title",null,$," - ",T("SITE_NAME"))),c.a.createElement(l.O,null,j.show&&c.a.createElement(l.k,{md:"12"},c.a.createElement(E.a,{in:j.show,classNames:"fade-transition",timeout:I.j.TRANSITION_TIME,unmountOnExit:!0,appear:!0},c.a.createElement(l.b,{color:j.color,dismiss:!0,onClosed:function(){return x({})}},j.message))),c.a.createElement(l.k,{md:"12"},c.a.createElement(l.h,null,c.a.createElement(l.i,null,!!Q&&c.a.createElement(A.a,null),!Q&&c.a.createElement(a.Fragment,null,c.a.createElement("form",{className:"mx-md-4 mx-sm-1 text-left",onSubmit:t.handleSubmit},c.a.createElement(l.O,null,c.a.createElement(l.k,{md:"12"},c.a.createElement(l.w,{id:"name",name:"name",label:T("HIRE.WORKPLACE.QUESTIONNAIRE.FIELDS.NAME"),outline:!0,containerClass:"mb-0",value:ne.name,onChange:se,onBlur:Ee},!!re.name&&!!ae.name&&c.a.createElement("div",{className:"text-left invalid-field"},ae.name)))),c.a.createElement(l.O,null,c.a.createElement(l.k,{md:"12"},c.a.createElement("div",{className:"text-left"},c.a.createElement("div",{className:"grey-text"},T("HIRE.WORKPLACE.QUESTIONNAIRE.FIELDS.DESCRIPTION")),c.a.createElement(f.Editor,{id:"editor",toolbar:I.A.toolbar,editorState:V,wrapperClassName:"questionnaire-wrapper",editorClassName:"questionnaire-editor",onEditorStateChange:function(e){z(e),ie("description",S()(Object(O.convertToRaw)(e.getCurrentContent())))}}),!!re.description&&!!ae.description&&c.a.createElement("div",{className:"text-left invalid-field"},ae.description)))),c.a.createElement(l.O,null,c.a.createElement(l.k,{md:"6"},c.a.createElement(l.w,{id:"filterByScore",name:"filterByScore",type:"checkbox",label:T("HIRE.WORKPLACE.QUESTIONNAIRE.FIELDS.FILTER_BY_SCORE"),filled:!0,containerClass:"text-left mt-4 mb-0",checked:ne.filterByScore||!1,onChange:se})),c.a.createElement(l.k,{md:"6"},c.a.createElement(l.w,{id:"minScore",name:"minScore",type:"number",label:T("HIRE.WORKPLACE.QUESTIONNAIRE.FIELDS.MIN_SCORE"),outline:!0,containerClass:"text-left mt-3 mb-0",disabled:!ne.filterByScore,value:ne.minScore,onChange:se,onBlur:Ee},!!ae.minScore&&c.a.createElement("div",{className:"text-left invalid-field"},ae.minScore)))),c.a.createElement("div",{className:"mt-4 mb-3"},c.a.createElement(l.g,{type:"submit",color:"primary",size:"sm",rounded:!0,disabled:!!Q||!!D||!!ue||!G.length},T("COMMON.BUTTON.".concat(q?"EDIT":"ADD"))),!!C&&c.a.createElement(l.g,{type:"button",color:"indigo",size:"sm",rounded:!0,onClick:function(e){return function(e){var t=e.setValues,n=e.setTouched,r=e.setErrors;t({name:"",filterByScore:!1,minScore:0}),z(O.EditorState.createEmpty()),n({}),r({}),x({}),Y(void 0),g.location.pathname!==N&&g.push(N)}({setValues:ce,setTouched:oe,setErrors:le})}},T("COMMON.BUTTON.NEW")),c.a.createElement(l.g,{type:"button",color:"warning",size:"sm",rounded:!0,onClick:R.a},T("COMMON.BUTTON.BACK")))),c.a.createElement("hr",null),c.a.createElement(p,{items:G,onItemsChanged:J,onLoading:P})))))))}},738:function(e,t,n){}}]);