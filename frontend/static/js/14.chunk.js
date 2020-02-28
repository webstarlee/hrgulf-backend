(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{425:function(e,a,t){"use strict";t.d(a,"a",function(){return E});t(1);var n=t(54),l=t(11),E=(Object(n.b)({enter:"zoomIn",exit:"zoomOut",duration:l.i.TRANSITION_TIME}),Object(n.b)({enter:"fadeIn",exit:"fadeOut",duration:l.i.TRANSITION_TIME}));a.b=n.c},486:function(e,a,t){"use strict";var n=t(517),l=t.n(n);a.a={isEmail:function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},isUsername:function(e){return/^[0-9a-zA-Z_][0-9a-zA-Z_.-]+$/.test(String(e).toLowerCase())},isPhoneNumber:function(e){var a=l.a.PhoneNumberUtil.getInstance();try{var t=a.parseAndKeepRawInput(e);return a.isValidNumber(t)}catch(n){return!1}},isURL:function(e){return e.startsWith("http://")||e.startsWith("https://")}}},582:function(e,a,t){},704:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),E=t(22),c=t(33),r=t(3),N=t(25),i=t(71),O=t(428),m=t(438),C=t(437),s=t(425),o=t(11),I=t(5),A=t(486),d=t(87),u=t(122),M=t(24),S=t(29),R=t(26),f=function(e){return new Promise(function(a,t){Object(M.a)(S.d,R.a.hire.auth.signUp,e).then(function(e){a(e)},function(e){t(e)})})},D=t(129);t(582),a.default=function(e){var a=Object(N.b)(),t=Object(E.b)().t,M="".concat(t("COMMON.AUTH.SIGN_UP")," - ").concat(t("SITE_NAME")),S={name:o.q.IS_DEV?o.g.COMPANY.NAME:"",location:o.g.COMPANY.LOCATION,size:o.q.IS_DEV?o.g.COMPANY.SIZE:0,type:o.q.IS_DEV?o.g.COMPANY.TYPE:"",countryCode:o.q.IS_DEV?o.f.CODE2.SAUDI_ARABIA:"",phone:o.q.IS_DEV?o.g.USER.PHONE:"",firstName:o.q.IS_DEV?o.g.USER.FIRST_NAME:"",fatherName:o.q.IS_DEV?o.g.USER.FATHER_NAME:"",lastName:o.q.IS_DEV?o.g.USER.LAST_NAME:"",email:o.q.IS_DEV?o.g.USER.EMAIL:"",password:o.q.IS_DEV?o.g.USER.PASSWORD:""},R=C.b().shape({name:C.c().required(t("COMMON.VALIDATION.REQUIRED",{field:t("HIRE.ACCOUNT.FIELDS.COMPANY.NAME")})),location:C.c().required(t("COMMON.VALIDATION.REQUIRED",{field:t("HIRE.ACCOUNT.FIELDS.COMPANY.LOCATION")})),size:C.a().required(t("COMMON.VALIDATION.REQUIRED",{field:t("HIRE.ACCOUNT.FIELDS.COMPANY.SIZE")})).min(1,t("COMMON.VALIDATION.REQUIRED",{field:t("HIRE.ACCOUNT.FIELDS.COMPANY.SIZE")})),type:C.c().required(t("COMMON.VALIDATION.REQUIRED",{field:t("HIRE.ACCOUNT.FIELDS.COMPANY.TYPE")})),countryCode:C.c().required(t("COMMON.VALIDATION.REQUIRED",{field:t("COMMON.FIELDS.USER.COUNTRY_CODE")})),phone:C.c().required(t("COMMON.VALIDATION.REQUIRED",{field:t("COMMON.FIELDS.USER.PHONE")})).test("isPhoneNumber",t("COMMON.VALIDATION.INVALID",{field:t("COMMON.FIELDS.USER.PHONE")}),function(e){return A.a.isPhoneNumber("".concat(this.parent.countryCode).concat(e))}),firstName:C.c().required(t("COMMON.VALIDATION.REQUIRED",{field:t("COMMON.FIELDS.USER.FIRST_NAME")})),fatherName:C.c().required(t("COMMON.VALIDATION.REQUIRED",{field:t("COMMON.FIELDS.USER.FATHER_NAME")})),lastName:C.c().required(t("COMMON.VALIDATION.REQUIRED",{field:t("COMMON.FIELDS.USER.LAST_NAME")})),email:C.c().required(t("COMMON.VALIDATION.REQUIRED",{field:t("COMMON.FIELDS.USER.EMAIL")})).email(t("COMMON.VALIDATION.INVALID",{field:t("COMMON.FIELDS.USER.EMAIL")})),password:C.c().required(t("COMMON.VALIDATION.REQUIRED",{field:t("COMMON.FIELDS.USER.PASSWORD")})).min(o.c.PASSWORD_MIN_LENGTH,t("COMMON.VALIDATION.MIN_LENGTH",{field:t("COMMON.FIELDS.USER.PASSWORD"),length:t("COMMON.CARDINALS.".concat(o.c.PASSWORD_MIN_LENGTH))}))}),T=function(e,n){var l=n.setSubmitting;l(!0),a(D.a.requestSignUp(e)),f(e).then(function(e){e.result===o.s.SUCCESS?(a(D.a.successSignUp(e.data)),s.b.success(e.message)):(a(D.a.failureSignUp(e.message)),s.b.error(e.message)),l(!1)}).catch(function(e){a(D.a.failureSignUp(o.j.UNKNOWN_SERVER_ERROR)),s.b.error(t("COMMON.ERROR.UNKNOWN_SERVER_ERROR")),l(!1)})};Object(n.useEffect)(function(){i.animateScroll.scrollToTop({duration:o.i.TRANSITION_TIME})},[e]);return l.a.createElement(n.Fragment,null,l.a.createElement(O.Helmet,null,l.a.createElement("title",null,M)),l.a.createElement("div",{className:"admin-nav text-right"}),l.a.createElement("div",{className:"text-center"},l.a.createElement("img",{className:"logo-img mt-3 mb-5",src:d.a.logo.logo100})),l.a.createElement(r.g,{className:"auth-bg"},l.a.createElement(r.h,{className:"mx-md-4 mx-sm-1 mb-lg-5"},l.a.createElement(r.K,{className:"text-center"},l.a.createElement(r.i,{className:"col-6 col-lg-4"},l.a.createElement(c.b,{to:I.a.hire.auth.signIn},l.a.createElement("p",{className:"text-white h5"},t("COMMON.AUTH.SIGN_IN")))),l.a.createElement(r.i,{className:"col-6 col-lg-4 underlined white-border"},l.a.createElement("p",{className:"text-white h5"},t("COMMON.AUTH.SIGN_UP")))),l.a.createElement("div",{className:"mt-lg-5"},l.a.createElement(m.a,{initialValues:S,validationSchema:R,onSubmit:T},function(e){var a=e.values,n=e.touched,E=e.errors,c=e.handleChange,N=e.handleBlur,i=e.handleSubmit,O=e.isSubmitting;return l.a.createElement("form",{onSubmit:i},l.a.createElement("input",{hidden:!0,id:"location",name:"location",onChange:c,onBlur:N}),l.a.createElement("input",{hidden:!0,id:"size",name:"size",onChange:c,onBlur:N}),l.a.createElement("input",{hidden:!0,id:"type",name:"type",onChange:c,onBlur:N}),l.a.createElement("input",{hidden:!0,id:"countryCode",name:"countryCode",onChange:c,onBlur:N}),l.a.createElement("div",{className:"white-text"},l.a.createElement(r.K,null,l.a.createElement(r.i,{md:"6"},l.a.createElement(r.s,{id:"name",name:"name",label:t("HIRE.ACCOUNT.FIELDS.COMPANY.NAME"),background:!0,containerClass:"mb-0",value:a.name,onChange:c,onBlur:N},!!n.name&&!!E.name&&l.a.createElement("div",{className:"text-left invalid-field2"},E.name))),l.a.createElement(r.i,{md:"6",className:"mt-3"},l.a.createElement(r.L,{label:t("HIRE.ACCOUNT.FIELDS.COMPANY.LOCATION"),className:"mt-3 mb-0 white",selected:a.location,getValue:function(e){u.a.triggerChangeEvent("location",e[0])}},l.a.createElement(r.M,null),l.a.createElement(r.O,null,l.a.createElement(r.N,{value:o.f.CODE1.BAHRAIN,checked:a.location===o.f.CODE1.BAHRAIN},t("COMMON.GCC_COUNTRIES.BAHRAIN")),l.a.createElement(r.N,{value:o.f.CODE1.KUWAIT,checked:a.location===o.f.CODE1.KUWAIT},t("COMMON.GCC_COUNTRIES.KUWAIT")),l.a.createElement(r.N,{value:o.f.CODE1.OMAN,checked:a.location===o.f.CODE1.OMAN},t("COMMON.GCC_COUNTRIES.OMAN")),l.a.createElement(r.N,{value:o.f.CODE1.QATAR,checked:a.location===o.f.CODE1.QATAR},t("COMMON.GCC_COUNTRIES.QATAR")),l.a.createElement(r.N,{value:o.f.CODE1.SAUDI_ARABIA,checked:a.location===o.f.CODE1.SAUDI_ARABIA},t("COMMON.GCC_COUNTRIES.SAUDI_ARABIA")),l.a.createElement(r.N,{value:o.f.CODE1.UAE,checked:a.location===o.f.CODE1.UAE},t("COMMON.GCC_COUNTRIES.UAE")))),!!n.location&&!!E.location&&l.a.createElement("div",{className:"text-left invalid-field2"},E.location))),l.a.createElement(r.K,null,l.a.createElement(r.i,{md:"6",className:"mt-3"},l.a.createElement(r.L,{label:t("HIRE.ACCOUNT.FIELDS.COMPANY.SIZE"),className:"mt-3 mb-0 white",selected:a.size,getValue:function(e){u.a.triggerChangeEvent("size",e[0])}},l.a.createElement(r.M,null),l.a.createElement(r.O,null,l.a.createElement(r.N,{value:o.e.SIZE[1],checked:a.size===o.e.SIZE[1]},t("COMMON.COMPANY.SIZE.1")),l.a.createElement(r.N,{value:o.e.SIZE[10],checked:a.size===o.e.SIZE[10]},t("COMMON.COMPANY.SIZE.10")),l.a.createElement(r.N,{value:o.e.SIZE[50],checked:a.size===o.e.SIZE[50]},t("COMMON.COMPANY.SIZE.50")),l.a.createElement(r.N,{value:o.e.SIZE[100],checked:a.size===o.e.SIZE[100]},t("COMMON.COMPANY.SIZE.100")),l.a.createElement(r.N,{value:o.e.SIZE[500],checked:a.size===o.e.SIZE[500]},t("COMMON.COMPANY.SIZE.500")))),!!n.size&&!!E.size&&l.a.createElement("div",{className:"text-left invalid-field2"},E.size)),l.a.createElement(r.i,{md:"6",className:"mt-3"},l.a.createElement(r.L,{label:t("HIRE.ACCOUNT.FIELDS.COMPANY.TYPE"),className:"mt-3 mb-0 white",selected:a.type,getValue:function(e){u.a.triggerChangeEvent("type",e[0])}},l.a.createElement(r.M,null),l.a.createElement(r.O,null,l.a.createElement(r.N,{value:o.e.TYPE.PUBLIC,checked:a.type===o.e.TYPE.PUBLIC},t("COMMON.COMPANY.TYPE.PUBLIC")),l.a.createElement(r.N,{value:o.e.TYPE.PRIVATE,checked:a.type===o.e.TYPE.PRIVATE},t("COMMON.COMPANY.TYPE.PRIVATE")),l.a.createElement(r.N,{value:o.e.TYPE.NON_PROFIT,checked:a.type===o.e.TYPE.NON_PROFIT},t("COMMON.COMPANY.TYPE.NON_PROFIT")),l.a.createElement(r.N,{value:o.e.TYPE.AGENCY,checked:a.type===o.e.TYPE.AGENCY},t("COMMON.COMPANY.TYPE.AGENCY")))),!!n.type&&!!E.type&&l.a.createElement("div",{className:"text-left invalid-field2"},E.type))),l.a.createElement(r.K,null,l.a.createElement(r.i,{md:"6",className:"mt-2"},l.a.createElement(r.L,{label:t("COMMON.FIELDS.USER.COUNTRY_CODE"),className:"mt-3 mb-0 white",selected:a.countryCode,getValue:function(e){u.a.triggerChangeEvent("countryCode",e[0])}},l.a.createElement(r.M,null),l.a.createElement(r.O,null,l.a.createElement(r.N,{value:o.f.CODE2.BAHRAIN,checked:a.countryCode===o.f.CODE2.BAHRAIN},o.f.CODE2.BAHRAIN," - ",t("COMMON.GCC_COUNTRIES.BAHRAIN")),l.a.createElement(r.N,{value:o.f.CODE2.KUWAIT,checked:a.countryCode===o.f.CODE2.KUWAIT},o.f.CODE2.KUWAIT," - ",t("COMMON.GCC_COUNTRIES.KUWAIT")),l.a.createElement(r.N,{value:o.f.CODE2.OMAN,checked:a.countryCode===o.f.CODE2.OMAN},o.f.CODE2.OMAN," - ",t("COMMON.GCC_COUNTRIES.OMAN")),l.a.createElement(r.N,{value:o.f.CODE2.QATAR,checked:a.countryCode===o.f.CODE2.QATAR},o.f.CODE2.QATAR," - ",t("COMMON.GCC_COUNTRIES.QATAR")),l.a.createElement(r.N,{value:o.f.CODE2.SAUDI_ARABIA,checked:a.countryCode===o.f.CODE2.SAUDI_ARABIA},o.f.CODE2.SAUDI_ARABIA," - ",t("COMMON.GCC_COUNTRIES.SAUDI_ARABIA")),l.a.createElement(r.N,{value:o.f.CODE2.UAE,checked:a.countryCode===o.f.CODE2.UAE},o.f.CODE2.UAE," - ",t("COMMON.GCC_COUNTRIES.UAE")))),!!n.countryCode&&!!E.countryCode&&l.a.createElement("div",{className:"text-left invalid-field2"},E.countryCode)),l.a.createElement(r.i,{md:"6"},l.a.createElement(r.s,{id:"phone",name:"phone",type:"text",label:t("COMMON.FIELDS.USER.PHONE"),background:!0,containerClass:"mt-3 mb-0",value:a.phone,onChange:c,onBlur:N},!!E.phone&&l.a.createElement("div",{className:"text-left invalid-field2"},E.phone)))),l.a.createElement(r.K,null,l.a.createElement(r.i,{md:"6"},l.a.createElement(r.s,{id:"firstName",name:"firstName",type:"text",label:t("COMMON.FIELDS.USER.FIRST_NAME"),background:!0,containerClass:"mt-3 mb-0",value:a.firstName,onChange:c,onBlur:N},!!n.firstName&&!!E.firstName&&l.a.createElement("div",{className:"text-left invalid-field2"},E.firstName))),l.a.createElement(r.i,{md:"6"},l.a.createElement(r.s,{id:"fatherName",name:"fatherName",type:"text",label:t("COMMON.FIELDS.USER.FATHER_NAME"),background:!0,containerClass:"mt-3 mb-0",value:a.fatherName,onChange:c,onBlur:N},!!n.fatherName&&!!E.fatherName&&l.a.createElement("div",{className:"text-left invalid-field2"},E.fatherName))),l.a.createElement(r.i,{md:"6"},l.a.createElement(r.s,{id:"lastName",name:"lastName",type:"text",label:t("COMMON.FIELDS.USER.LAST_NAME"),background:!0,containerClass:"mt-3 mb-0",value:a.lastName,onChange:c,onBlur:N},!!n.lastName&&!!E.lastName&&l.a.createElement("div",{className:"text-left invalid-field2"},E.lastName)))),l.a.createElement(r.K,null,l.a.createElement(r.i,{md:"6"},l.a.createElement(r.s,{id:"email",name:"email",type:"email",label:t("COMMON.FIELDS.USER.EMAIL"),background:!0,containerClass:"mt-3",value:a.email,onChange:c,onBlur:N},!!n.email&&!!E.email&&l.a.createElement("div",{className:"text-left invalid-field2"},E.email))),l.a.createElement(r.i,{md:"6"},l.a.createElement(r.s,{id:"password",name:"password",label:t("COMMON.FIELDS.USER.PASSWORD"),type:"password",background:!0,containerClass:"mt-3",value:a.password,onChange:c,onBlur:N},!!n.password&&!!E.password&&l.a.createElement("div",{className:"text-left invalid-field2"},E.password))))),l.a.createElement("div",{className:"text-center mt-4 mb-3 button-wrapper"},l.a.createElement(r.f,{type:"submit",color:"white",rounded:!0,className:"full-width z-depth-1a blue-grey-text",disabled:!!O},!O&&l.a.createElement(r.q,{size:"lg",icon:"user-plus"}),!!O&&l.a.createElement("div",{className:"spinner-grow spinner-grow-sm",role:"status"}),!O&&t("COMMON.AUTH.SIGN_UP"))))})))),l.a.createElement(r.W,{className:"text-left",position:"ltr"===t("DIRECTION")?"top-right":"top-left",dir:t("DIRECTION"),hideProgressBar:!0,autoClose:o.i.TRANSITION_TIME5,closeButton:!1,transition:s.a}))}}}]);