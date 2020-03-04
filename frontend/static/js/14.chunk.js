(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{427:function(e,t,a){"use strict";a.d(t,"a",function(){return i});a(1);var n=a(54),r=a(11),i=(Object(n.b)({enter:"zoomIn",exit:"zoomOut",duration:r.i.TRANSITION_TIME}),Object(n.b)({enter:"fadeIn",exit:"fadeOut",duration:r.i.TRANSITION_TIME}));t.b=n.c},490:function(e,t,a){"use strict";var n=a(522),r=a.n(n);t.a={isEmail:function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},isUsername:function(e){return/^[0-9a-zA-Z_][0-9a-zA-Z_.-]+$/.test(String(e).toLowerCase())},isPhoneNumber:function(e){var t=r.a.PhoneNumberUtil.getInstance();try{var a=t.parseAndKeepRawInput(e);return t.isValidNumber(a)}catch(n){return!1}},isURL:function(e){return e.startsWith("http://")||e.startsWith("https://")}}},589:function(e,t,a){"use strict";a.r(t);var n=a(32),r=a(1),i=a.n(r),l=a(26),s=a(34),c=a(3),o=a(420),m=a(72),u=a(428),d=a(433),E=a(432),N=a(11),b=(a(490),a(88)),I=a(5),O=a(427),f=a(128);a(590);t.default=function(e){var t=Object(l.b)().t,a=Object(r.useState)(!1),h=Object(n.a)(a,2),T=h[0],A=h[1],S=Object(r.useState)({}),g=Object(n.a)(S,2),p=g[0],R=g[1],w={email:""},v=E.c().shape({email:E.d().required(t("COMMON.VALIDATION.REQUIRED",{field:t("AUTH.EMAIL")})).email(t("COMMON.VALIDATION.INVALID",{field:t("AUTH.EMAIL")}))}),x=function(e,a){var n=e.email,r=a.setSubmitting,i={email:n};A(!0),r(!0),f.a.sendForgotPasswordMail(i).then(function(e){e.result===N.t.SUCCESS?O.b.success(e.message):O.b.error(e.message),A(!1),r(!1)}).catch(function(e){O.b.error(t("COMMON.ERROR.UNKNOWN_SERVER_ERROR")),A(!1),r(!1)})};Object(r.useEffect)(function(){m.animateScroll.scrollToTop({duration:N.i.TRANSITION_TIME})},[e]),Object(r.useMemo)(function(e){},[t]);return i.a.createElement(r.Fragment,null,i.a.createElement(u.Helmet,null,i.a.createElement("title",null,t("AUTH.FORGOT_PASSWORD")," - ",t("SITE_NAME"))),i.a.createElement("div",{className:"admin-nav text-center"},i.a.createElement("img",{className:"logo-img mt-3 mb-5",src:b.a.logo.logo100})),i.a.createElement(c.g,{className:"auth-bg"},i.a.createElement(c.h,{className:"mx-md-4 mx-sm-1"},i.a.createElement(c.L,{className:"text-center"},i.a.createElement(c.j,{className:"col-12 underlined white-border"},i.a.createElement("p",{className:"text-white h5"},t("AUTH.FORGOT_PASSWORD")))),i.a.createElement(d.a,{initialValues:w,validationSchema:v,onSubmit:x},function(e){var a=e.values.email,n=e.errors,r=e.touched,l=e.handleChange,m=e.handleSubmit,u=e.handleBlur;return e.isSubmitting,i.a.createElement("form",{onSubmit:m},i.a.createElement("div",{className:"white-text mt-5"},i.a.createElement(c.t,{id:"email",name:"email",type:"email",icon:"envelope",label:t("AUTH.EMAIL"),background:!0,value:a,onChange:l,onBlur:u},!!r.email&&!!n.email&&i.a.createElement("div",{className:"text-left invalid-field2"},n.email))),i.a.createElement(o.a,{in:p.show,classNames:"fade-transition",timeout:N.i.TRANSITION_TIME,unmountOnExit:!0,appear:!0},i.a.createElement(c.b,{color:p.color,onClosed:function(){return R({})}},p.message)),i.a.createElement("div",{className:"text-center mt-4 mb-3 mx-5"},i.a.createElement(c.f,{type:"submit",color:"white",rounded:!0,className:"full-width z-depth-1a blue-grey-text",disabled:T},!T&&i.a.createElement(c.r,{icon:"lock"}),!!T&&i.a.createElement("div",{className:"spinner-grow spinner-grow-sm",role:"status"}),t("AUTH.RESET_PASSWORD"))),i.a.createElement("p",{className:"font-small white-text d-flex justify-content-end pb-3"},i.a.createElement(s.b,{className:"ml-1 white-text",to:I.a.auth.signIn},t("AUTH.SIGN_IN"))))}))),i.a.createElement(c.Z,{className:"text-left",position:"ltr"===t("DIRECTION")?"top-right":"top-left",dir:t("DIRECTION"),hideProgressBar:!0,autoClose:N.i.TRANSITION_TIME5,closeButton:!1,transition:O.a}))}},590:function(e,t,a){}}]);