(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{427:function(e,t,a){"use strict";a.d(t,"a",function(){return r});a(1);var n=a(54),l=a(11),r=(Object(n.b)({enter:"zoomIn",exit:"zoomOut",duration:l.i.TRANSITION_TIME}),Object(n.b)({enter:"fadeIn",exit:"fadeOut",duration:l.i.TRANSITION_TIME}));t.b=n.c},701:function(e,t,a){},717:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(3),i=a(26),o=a(428),c=a(11),s=a(427),m=a(16),u=a(32),E=a(72),d=a(433),O=a(29),f=a(432),R=a(123),b=a(24),N=a(28),S=a(27),h={loadSalary:function(e){return new Promise(function(t,a){Object(b.a)(N.d,S.a.hire.workplace.myCompanyProfiles.loadSalary,e).then(function(e){t(e)},function(e){a(e)})})},saveSalary:function(e){return new Promise(function(t,a){Object(b.a)(N.d,S.a.hire.workplace.myCompanyProfiles.saveSalary,e).then(function(e){t(e)},function(e){a(e)})})},loadAbout:function(e){return new Promise(function(t,a){Object(b.a)(N.d,S.a.hire.workplace.myCompanyProfiles.loadAbout,e).then(function(e){t(e)},function(e){a(e)})})},saveAbout:function(e){return new Promise(function(t,a){Object(b.a)(N.d,S.a.hire.workplace.myCompanyProfiles.saveAbout,e).then(function(e){t(e)},function(e){a(e)})})},loadVision:function(e){return new Promise(function(t,a){Object(b.a)(N.d,S.a.hire.workplace.myCompanyProfiles.loadVision,e).then(function(e){t(e)},function(e){a(e)})})},saveVision:function(e){return new Promise(function(t,a){Object(b.a)(N.d,S.a.hire.workplace.myCompanyProfiles.saveVision,e).then(function(e){t(e)},function(e){a(e)})})},loadMission:function(e){return new Promise(function(t,a){Object(b.a)(N.d,S.a.hire.workplace.myCompanyProfiles.loadMission,e).then(function(e){t(e)},function(e){a(e)})})},saveMission:function(e){return new Promise(function(t,a){Object(b.a)(N.d,S.a.hire.workplace.myCompanyProfiles.saveMission,e).then(function(e){t(e)},function(e){a(e)})})},loadCoverPhoto:function(e){return new Promise(function(t,a){Object(b.a)(N.d,S.a.hire.workplace.myCompanyProfiles.loadCoverPhoto,e).then(function(e){t(e)},function(e){a(e)})})},saveCoverPhoto:function(e){return new Promise(function(t,a){Object(b.a)(N.d,S.a.hire.workplace.myCompanyProfiles.saveCoverPhoto,e).then(function(e){t(e)},function(e){a(e)})})}},I=function(){var e,t=Object(i.b)().t,a=Object(O.c)(function(e){return e}).auth.user,o=Object(n.useState)(!1),b=Object(u.a)(o,2),N=b[0],S=b[1],I=Object(n.useState)({}),A=Object(u.a)(I,2),C=(A[0],A[1]),g=Object(n.useState)(!1),v=Object(u.a)(g,2),M=v[0],P=v[1],L=f.c().shape({unit:f.d().required(t("COMMON.VALIDATION.REQUIRED",{field:t("HIRE.WORKPLACE.MY_COMPANY_PROFILES.FIELDS.SALARY.UNIT")})),min:f.b().required(t("COMMON.VALIDATION.REQUIRED",{field:t("HIRE.WORKPLACE.MY_COMPANY_PROFILES.FIELDS.SALARY.MIN")})).min(0,t("COMMON.VALIDATION.MIN",{field:t("HIRE.WORKPLACE.MY_COMPANY_PROFILES.FIELDS.SALARY.MIN"),value:0})),max:f.b().required(t("COMMON.VALIDATION.REQUIRED",{field:t("HIRE.WORKPLACE.MY_COMPANY_PROFILES.FIELDS.SALARY.MAX")})).test("greaterThan",t("COMMON.VALIDATION.GREATER_THAN",{field:t("HIRE.WORKPLACE.MY_COMPANY_PROFILES.FIELDS.SALARY.MIN")}),function(e){return e>=this.parent.min})});Object(n.useEffect)(function(n){E.animateScroll.scrollToTop({duration:c.i.TRANSITION_TIME}),S(!0),h.loadSalary({id:a.id}).then(function(t){if(t.result===c.t.SUCCESS){var a=t.data,n=a.unit,l=a.min,r=a.max;e&&e.setValues({unit:n||"",min:l||0,max:r||0}),e&&e.setTouched({}),e&&e.setErrors({}),C({})}else C({show:!0,color:c.b.DANGER,message:t.message});S(!1)}).catch(function(e){C({show:!0,color:c.b.DANGER,message:t("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),S(!1)})},[]);var j=e=Object(d.b)({initialValues:{unit:"",min:0,max:0},validationSchema:L,onSubmit:function(e,n){var l=n.setSubmitting;l(!0),h.saveSalary(Object(m.a)({},e,{id:a.id})).then(function(e){e.result===c.t.SUCCESS?(s.b.success(e.message),P(!1)):s.b.error(e.message),l(!1)}).catch(function(e){s.b.error(t("COMMON.ERROR.UNKNOWN_SERVER_ERROR")),l(!1)})}}),p=j.values,y=j.touched,_=j.errors,T=(j.setValues,j.setTouched,j.setErrors,j.handleChange),F=j.handleBlur,w=j.isSubmitting;return l.a.createElement("div",{className:"mt-3"},l.a.createElement("form",{className:"text-left",onSubmit:e.handleSubmit},l.a.createElement(r.L,null,l.a.createElement(r.j,null,l.a.createElement("h4",{className:"h4-responsive text-left grey-text mr-auto pt-1"},t("HIRE.WORKPLACE.MY_COMPANY_PROFILES.SALARY"))),l.a.createElement(r.j,null,l.a.createElement("div",{className:"text-right ml-auto mr-md-4"},!!M&&l.a.createElement(r.f,{type:"submit",tag:"a",floating:!0,color:"primary",size:"sm",rounded:!0,className:"my-0",disabled:!!N||!!w,onClick:e.handleSubmit},l.a.createElement(r.r,{icon:"save",size:"lg"})),!!M&&l.a.createElement(r.f,{type:"button",tag:"a",floating:!0,color:"warning",size:"sm",rounded:!0,className:"my-0",disabled:!!N||!!w,onClick:function(e){return P(!1)}},l.a.createElement(r.r,{icon:"times",size:"lg"})),!M&&l.a.createElement(r.f,{type:"button",tag:"a",floating:!0,color:"warning",size:"sm",rounded:!0,className:"my-0",disabled:!!N||!!w,onClick:function(e){return P(!0)}},l.a.createElement(r.r,{icon:"edit",size:"lg"}))))),l.a.createElement(r.L,null,l.a.createElement(r.j,{md:"12"},!!N&&l.a.createElement(R.a,{style:{height:64}}),!N&&l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"mx-md-4 mx-sm-1 "},l.a.createElement(r.L,null,l.a.createElement(r.j,{md:"4"},l.a.createElement(r.t,{id:"unit",name:"unit",label:t("HIRE.WORKPLACE.MY_COMPANY_PROFILES.FIELDS.SALARY.UNIT"),background:!M,outline:M,containerClass:"mt-2 mb-0",value:p.unit,disabled:!M,onChange:T,onBlur:F},!!y.unit&&!!_.unit&&l.a.createElement("div",{className:"text-left invalid-field"},_.unit))),l.a.createElement(r.j,{md:"4"},l.a.createElement(r.t,{id:"min",name:"min",type:"number",label:t("HIRE.WORKPLACE.MY_COMPANY_PROFILES.FIELDS.SALARY.MIN"),background:!M,outline:M,containerClass:"mt-2 mb-0",value:p.min,disabled:!M,onChange:T,onBlur:F},!!y.min&&!!_.min&&l.a.createElement("div",{className:"text-left invalid-field"},_.min))),l.a.createElement(r.j,{md:"4"},l.a.createElement(r.t,{id:"max",name:"max",type:"number",label:t("HIRE.WORKPLACE.MY_COMPANY_PROFILES.FIELDS.SALARY.MAX"),background:!M,outline:M,containerClass:"mt-2 mb-0",value:p.max,disabled:!M,onChange:T,onBlur:F},!!y.max&&!!_.max&&l.a.createElement("div",{className:"text-left invalid-field"},_.max))))))))))},A=function(e){var t,a=e.title,o=e.onLoad,b=e.onSave,N=Object(i.b)().t,S=Object(O.c)(function(e){return e}).auth.user,h=Object(n.useState)(!1),I=Object(u.a)(h,2),A=I[0],C=I[1],g=Object(n.useState)({}),v=Object(u.a)(g,2),M=(v[0],v[1]),P=Object(n.useState)(!1),L=Object(u.a)(P,2),j=L[0],p=L[1],y=f.c().shape({});Object(n.useEffect)(function(e){E.animateScroll.scrollToTop({duration:c.i.TRANSITION_TIME}),"function"===typeof o&&(C(!0),o({id:S.id}).then(function(e){if(e.result===c.t.SUCCESS){var a=e.data.value;t&&t.setValues({value:a||""}),t&&t.setTouched({}),t&&t.setErrors({}),M({})}else M({show:!0,color:c.b.DANGER,message:e.message});C(!1)}).catch(function(e){M({show:!0,color:c.b.DANGER,message:N("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),C(!1)}))},[]);var _=t=Object(d.b)({initialValues:{value:""},validationSchema:y,onSubmit:function(e,t){var a=t.setSubmitting;"function"===typeof b?(a(!0),b(Object(m.a)({},e,{id:S.id})).then(function(e){e.result===c.t.SUCCESS?(s.b.success(e.message),p(!1)):s.b.error(e.message),a(!1)}).catch(function(e){s.b.error(N("COMMON.ERROR.UNKNOWN_SERVER_ERROR")),a(!1)})):a(!1)}}),T=_.values,F=_.touched,w=_.errors,x=(_.setValues,_.setTouched,_.setErrors,_.handleChange),Y=_.handleBlur,D=_.isSubmitting;return l.a.createElement("div",{className:"mt-3"},l.a.createElement("form",{className:"text-left",onSubmit:t.handleSubmit},l.a.createElement(r.L,null,l.a.createElement(r.j,null,l.a.createElement("h4",{className:"h4-responsive text-left grey-text mr-auto pt-1"},a)),l.a.createElement(r.j,null,l.a.createElement("div",{className:"text-right ml-auto mr-md-4"},!!j&&l.a.createElement(r.f,{type:"submit",tag:"a",floating:!0,color:"primary",size:"sm",rounded:!0,className:"my-0",disabled:!!A||!!D,onClick:t.handleSubmit},l.a.createElement(r.r,{icon:"save",size:"lg"})),!!j&&l.a.createElement(r.f,{type:"button",tag:"a",floating:!0,color:"warning",size:"sm",rounded:!0,className:"my-0",disabled:!!A||!!D,onClick:function(e){return p(!1)}},l.a.createElement(r.r,{icon:"times",size:"lg"})),!j&&l.a.createElement(r.f,{type:"button",tag:"a",floating:!0,color:"warning",size:"sm",rounded:!0,className:"my-0",disabled:!!A||!!D,onClick:function(e){return p(!0)}},l.a.createElement(r.r,{icon:"edit",size:"lg"}))))),l.a.createElement(r.L,null,l.a.createElement(r.j,{md:"12"},!!A&&l.a.createElement(R.a,{style:{height:280}}),!A&&l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"mx-md-4 mx-sm-1 "},l.a.createElement(r.L,null,l.a.createElement(r.j,{md:"12"},l.a.createElement(r.t,{id:"value",name:"value",type:"textarea",background:!j,outline:j,rows:c.l.TEXTAREA_ROWS1,containerClass:"mt-2 mb-0",value:T.value,disabled:!j,onChange:x,onBlur:Y},!!F.value&&!!w.value&&l.a.createElement("div",{className:"text-left invalid-field"},w.value))))))))))},C=a(525),g=function(){var e=Object(i.b)().t,t=Object(O.c)(function(e){return e}).auth.user,a=Object(n.useState)(!1),o=Object(u.a)(a,2),m=o[0],d=o[1],f=Object(n.useState)({}),b=Object(u.a)(f,2),N=(b[0],b[1]),I=Object(n.useState)(!1),A=Object(u.a)(I,2),g=A[0],v=A[1],M=Object(n.useState)(""),P=Object(u.a)(M,2),L=P[0],j=P[1],p=Object(n.useState)(),y=Object(u.a)(p,2),_=y[0],T=y[1],F=["jpg","jpeg","png"],w=function(a){d(!0);var n=new FormData;n.append("id",t.id),_&&n.append("file",_),h.saveCoverPhoto(n).then(function(e){if(e.result===c.t.SUCCESS){s.b.success(e.message);var t=e.data;j("".concat(S.a.assetsBaseUrl).concat(t.coverPhoto)),v(!1)}else s.b.error(e.message);d(!1)}).catch(function(t){s.b.error(e("COMMON.ERROR.UNKNOWN_SERVER_ERROR")),d(!1)})};Object(n.useEffect)(function(a){E.animateScroll.scrollToTop({duration:c.i.TRANSITION_TIME}),d(!0),h.loadCoverPhoto({id:t.id}).then(function(e){if(e.result===c.t.SUCCESS){var t=e.data;j("".concat(S.a.assetsBaseUrl).concat(t.coverPhoto)),N({})}else N({show:!0,color:c.b.DANGER,message:e.message});d(!1)}).catch(function(t){N({show:!0,color:c.b.DANGER,message:e("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),d(!1)})},[]);return l.a.createElement("div",{className:"mt-3"},l.a.createElement("form",{className:"text-left",onSubmit:w},l.a.createElement(r.L,null,l.a.createElement(r.j,null,l.a.createElement("h4",{className:"h4-responsive text-left grey-text mr-auto pt-1"},e("HIRE.WORKPLACE.MY_COMPANY_PROFILES.COVER_PHOTO"))),l.a.createElement(r.j,null,l.a.createElement("div",{className:"text-right ml-auto mr-md-4"},!!g&&l.a.createElement(r.f,{type:"submit",tag:"a",floating:!0,color:"primary",size:"sm",rounded:!0,className:"my-0",disabled:!!m,onClick:w},l.a.createElement(r.r,{icon:"save",size:"lg"})),!!g&&l.a.createElement(r.f,{type:"button",tag:"a",floating:!0,color:"warning",size:"sm",rounded:!0,className:"my-0",disabled:!!m,onClick:function(e){return v(!1)}},l.a.createElement(r.r,{icon:"times",size:"lg"})),!g&&l.a.createElement(r.f,{type:"button",tag:"a",floating:!0,color:"warning",size:"sm",rounded:!0,className:"my-0",disabled:!!m,onClick:function(e){return v(!0)}},l.a.createElement(r.r,{icon:"edit",size:"lg"}))))),l.a.createElement(r.L,null,l.a.createElement(r.j,{md:"12"},!!m&&l.a.createElement(R.a,{style:{height:274}}),!m&&l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"mx-md-4 mx-sm-1 "},l.a.createElement(r.L,null,l.a.createElement(r.j,{md:"12"},l.a.createElement("div",{id:"file",className:" md-form mx-auto md-bg mt-2 mb-0"},!m&&l.a.createElement(C.a,{disabled:!g,defaultFileSrc:L,getValue:T,showRemove:!1,maxFileSize:c.k.MAXSIZE1,maxFileSizePreview:c.k.MAXSIZE1,containerHeight:c.d.SIZE.HEIGHT+50,allowedFileExtensions:F,messageDefault:e("COMMON.FILE_UPLOAD.DEFAULT"),messageReplace:e("COMMON.FILE_UPLOAD.REPLACE"),messageRemove:e("COMMON.FILE_UPLOAD.REMOVE"),messageError:e("COMMON.FILE_UPLOAD.ERROR"),errorFileSize:e("COMMON.FILE_UPLOAD.ERROR_FILESIZE",{max:c.k.MAXSIZE1}),errorFileExtension:e("COMMON.FILE_UPLOAD.ERROR_FILEEXTENSION",{extensions:F.join(", ")})}))))))))))};a(701),t.default=function(){var e=Object(i.b)().t,t=e("NAVBAR.HIRE.WORKPLACE.MY_COMPANY_PROFILES");return l.a.createElement(n.Fragment,null,l.a.createElement(o.Helmet,null,l.a.createElement("title",null,t," - ",e("SITE_NAME"))),l.a.createElement(r.d,null,l.a.createElement(r.e,null,e("NAVBAR.HIRE.WORKPLACE.ROOT")),l.a.createElement(r.e,{active:!0},t)),l.a.createElement(r.g,null,l.a.createElement(r.h,null,l.a.createElement(n.Fragment,null,l.a.createElement(I,null),l.a.createElement("hr",{className:"mt-md-4"})),l.a.createElement(n.Fragment,null,l.a.createElement(A,{title:e("HIRE.WORKPLACE.MY_COMPANY_PROFILES.ABOUT"),onLoad:h.loadAbout,onSave:h.saveAbout}),l.a.createElement("hr",{className:"mt-md-4"})),l.a.createElement(n.Fragment,null,l.a.createElement(A,{title:e("HIRE.WORKPLACE.MY_COMPANY_PROFILES.VISION"),onLoad:h.loadVision,onSave:h.saveVision}),l.a.createElement("hr",{className:"mt-md-4"})),l.a.createElement(n.Fragment,null,l.a.createElement(A,{title:e("HIRE.WORKPLACE.MY_COMPANY_PROFILES.MISSION"),onLoad:h.loadMission,onSave:h.saveMission}),l.a.createElement("hr",{className:"mt-md-4"})),l.a.createElement(n.Fragment,null,l.a.createElement(g,null),l.a.createElement("hr",{className:"mt-md-4"})))),l.a.createElement(r.Z,{className:"text-left",position:"ltr"===e("DIRECTION")?"top-right":"top-left",dir:e("DIRECTION"),hideProgressBar:!0,autoClose:c.i.TRANSITION_TIME5,closeButton:!1,transition:s.a}))}}}]);