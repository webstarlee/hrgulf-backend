(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{419:function(e,t,a){"use strict";var n=a(425),l=a.n(n);t.a={isEmail:function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},isUsername:function(e){return/^[0-9a-zA-Z_][0-9a-zA-Z_.-]+$/.test(String(e).toLowerCase())},isPhoneNumber:function(e){var t=l.a.PhoneNumberUtil.getInstance();try{var a=t.parseAndKeepRawInput(e);return t.isValidNumber(a)}catch(n){return!1}},isURL:function(e){return e.startsWith("http://")||e.startsWith("https://")}}},447:function(e,t,a){},449:function(e,t,a){},450:function(e,t,a){},451:function(e,t,a){},452:function(e,t,a){},484:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(41),r=a(4),s=a(123),i=a(91),o=a(121),m=a(122),E=a(124),u=a(11),O=a(31),d=a(27),N=a(420),A=a(42),b=a(28),f=a(439),I=a(416),R=a(10),S=a(25),M=a(16),T=a(23),g=function(e){return new Promise(function(t,a){Object(M.a)(T.d,S.a.profile.avatar,e).then(function(e){t(e)},function(e){a(e)})})},p=function(e){return new Promise(function(t,a){Object(M.a)(T.d,S.a.profile.saveAvatar,e).then(function(e){t(e)},function(e){a(e)})})},D=function(e){return new Promise(function(t,a){Object(M.a)(T.d,S.a.profile.save,e).then(function(e){t(e)},function(e){a(e)})})},h=function(e){return new Promise(function(t,a){Object(M.a)(T.d,S.a.profile.changePassword,e).then(function(e){t(e)},function(e){a(e)})})},C=(a(447),function(){var e=Object(d.b)().t,t=Object(b.c)(function(e){return e}).auth,a=Object(n.useState)(!1),c=Object(A.a)(a,2),s=c[0],i=c[1],o=Object(n.useState)({}),m=Object(A.a)(o,2),E=m[0],u=m[1],O=Object(n.useState)(""),N=Object(A.a)(O,2),M=N[0],T=N[1],D=Object(n.useState)(),h=Object(A.a)(D,2),C=h[0],U=h[1],L=["jpg","jpeg","png"];Object(n.useEffect)(function(e){i(!0),g({userId:t.user.id}).then(function(e){e.result===R.p.SUCCESS?T("".concat(S.a.assetsBaseUrl).concat(e.data)):T(""),i(!1)}).catch(function(e){T(""),i(!1)})},[e]);return l.a.createElement(n.Fragment,null,!s&&l.a.createElement(n.Fragment,null,l.a.createElement(f.a,{defaultFileSrc:M,getValue:U,showRemove:!1,maxFileSize:R.k.MAXSIZE1,allowedFileExtensions:L,messageDefault:e("COMMON.FILE_UPLOAD.DEFAULT"),messageReplace:e("COMMON.FILE_UPLOAD.REPLACE"),messageRemove:e("COMMON.FILE_UPLOAD.REMOVE"),messageError:e("COMMON.FILE_UPLOAD.ERROR"),errorFileSize:e("COMMON.FILE_UPLOAD.ERROR_FILESIZE",{max:R.k.MAXSIZE1}),errorFileExtension:e("COMMON.FILE_UPLOAD.ERROR_FILEEXTENSION",{extensions:L.join(", ")})}),l.a.createElement("div",{className:"text-center mb-4"},l.a.createElement(r.g,{size:"sm",color:"indigo",rounded:!0,disabled:!C,onClick:function(a){var n=new FormData;n.append("userId",t.user.id),n.append("file",C),p(n).then(function(e){u({show:!0,color:e.result,message:e.message})}).catch(function(t){u({show:!0,color:R.b.DANGER,message:e("COMMON.ERROR.UNKNOWN_SERVER_ERROR")})})}},e("COMMON.BUTTON.SAVE"))),l.a.createElement(I.a,{in:E.show,classNames:"fade-transition",timeout:R.i.TRANSITION_TIME,unmountOnExit:!0,appear:!0},l.a.createElement(r.b,{color:E.color,dismiss:!0,onClosed:function(){return u({})}},E.message))))}),U=a(448),L=a(419),j=a(73),v=(a(449),function(){var e=Object(b.c)(function(e){return e}).auth,t=Object(b.b)(),a=Object(d.b)().t,c=Object(n.useState)(!1),s=Object(A.a)(c,2),i=s[0],o=s[1],m=Object(n.useState)({}),E=Object(A.a)(m,2),u=E[0],O=E[1],N=Object(n.useState)(!1),f=Object(A.a)(N,2),S=f[0],M=(f[1],Object(n.useState)({})),T=Object(A.a)(M,2),g=T[0],p=T[1],h=Object(n.useState)(""),C=Object(A.a)(h,2),v=C[0],_=C[1],P=Object(n.useState)(""),H=Object(A.a)(P,2),w=H[0],V=H[1],F=Object(n.useState)(""),y=Object(A.a)(F,2),W=y[0],k=y[1],G=Object(n.useState)(""),B=Object(A.a)(G,2),x=B[0],Q=B[1],K=Object(n.useState)(""),Y=Object(A.a)(K,2),z=Y[0],X=Y[1],Z=Object(n.useState)(""),J=Object(A.a)(Z,2),$=J[0],q=J[1],ee=Object(n.useState)(""),te=Object(A.a)(ee,2),ae=te[0],ne=te[1],le=Object(n.useState)(""),ce=Object(A.a)(le,2),re=ce[0],se=ce[1],ie=Object(n.useState)(""),oe=Object(A.a)(ie,2),me=oe[0],Ee=oe[1],ue=Object(n.useState)(""),Oe=Object(A.a)(ue,2),de=Oe[0],Ne=Oe[1],Ae=Object(n.useState)(""),be=Object(A.a)(Ae,2),fe=be[0],Ie=be[1],Re=Object(n.useState)(""),Se=Object(A.a)(Re,2),Me=Se[0],Te=Se[1],ge=Object(n.useState)(R.o.IS_DEV?R.f.SAUDI_ARABIA:""),pe=Object(A.a)(ge,2),De=pe[0],he=pe[1],Ce=Object(n.useState)(""),Ue=Object(A.a)(Ce,2),Le=Ue[0],je=Ue[1],ve=re?Object(U.sprintf)("%04d-%02d-%02d",re.getFullYear(),re.getMonth()+1,re.getDate()):"";Object(n.useEffect)(function(e){_e()},[e]);var _e=function(){_(e.user.id),V(e.user.email),k(e.user.username),Q(e.user.firstName),q(e.user.lastName),X(e.user.fatherName),ne(e.user.gender),se(new Date(e.user.birthday)),Ee(e.user.jobTitle),Ne(e.user.sector),Ie(e.user.company),Te(e.user.city),he(e.user.countryCode),je(e.user.phone)},Pe=function(e){i&&_e(),o(!i)};return l.a.createElement(n.Fragment,null,l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),D({id:v,email:w,username:W,firstName:x,fatherName:z,lastName:$,gender:ae,birthday:ve,jobTitle:me,sector:de,company:fe,city:Me,countryCode:De,phone:Le}).then(function(e){e.result===R.p.SUCCESS&&t(j.a.successSignIn(e.data));var a=JSON.stringify({signedIn:!0,user:e.data.user,token:e.data.token});sessionStorage.setItem(R.o.PERSIST_KEY,a),localStorage.getItem(R.o.PERSIST_KEY)&&localStorage.setItem(R.o.PERSIST_KEY,a),p({show:!0,color:e.result,message:e.message}),o(!1)}).catch(function(e){p({show:!0,color:R.b.DANGER,message:a("COMMON.ERROR.UNKNOWN_SERVER_ERROR")})})}},l.a.createElement("div",{className:"grey-text"},l.a.createElement(r.K,null,l.a.createElement(r.o,{md:6},l.a.createElement(r.A,{id:"email",name:"email",type:"email",label:a("AUTH.EMAIL"),disabled:!i,outline:i,background:!i,containerClass:"mb-0",value:w,getValue:V,onBlur:function(){return O(Object.assign({},u,{email:!0}))}},u.email&&!L.a.isEmail(w)&&l.a.createElement("div",{className:"invalid-field"},0===w.length?a("COMMON.VALIDATION.REQUIRED",{field:a("AUTH.EMAIL")}):L.a.isEmail(w)?"":a("COMMON.VALIDATION.INVALID",{field:a("AUTH.EMAIL")})))),l.a.createElement(r.o,{md:6},l.a.createElement(r.A,{id:"username",name:"username",type:"text",label:a("AUTH.USERNAME"),disabled:!i,outline:i,background:!i,containerClass:"mb-0",value:W,getValue:k,onBlur:function(){return O(Object.assign({},u,{username:!0}))}},u.username&&!L.a.isUsername(W)&&l.a.createElement("div",{className:"invalid-field"},0===W.length?a("COMMON.VALIDATION.REQUIRED",{field:a("AUTH.USERNAME")}):W.length>R.c.USERNAME_MAX_LENGTH?a("COMMON.VALIDATION.MAX_LENGTH",{field:a("AUTH.USERNAME"),length:R.c.USERNAME_MAX_LENGTH}):L.a.isUsername(W)?"":a("COMMON.VALIDATION.INVALID",{field:a("AUTH.USERNAME")}))))),l.a.createElement(r.K,null,l.a.createElement(r.o,{md:6},l.a.createElement(r.A,{id:"firstName",name:"firstName",type:"text",label:a("AUTH.FIRST_NAME"),disabled:!i,outline:i,background:!i,containerClass:"mt-3 mb-0",value:x,getValue:Q,onBlur:function(){return O(Object.assign({},u,{firstName:!0}))}},u.firstName&&0===x.length&&l.a.createElement("div",{className:"invalid-field"},a("COMMON.VALIDATION.REQUIRED",{field:a("AUTH.FIRST_NAME")})))),l.a.createElement(r.o,{md:6},l.a.createElement(r.A,{id:"fatherName",name:"fatherName",type:"text",label:a("AUTH.FATHER_NAME"),disabled:!i,outline:i,background:!i,containerClass:"mt-3 mb-0",value:z,getValue:X,onBlur:function(){return O(Object.assign({},u,{fatherName:!0}))}},u.fatherName&&0===z.length&&l.a.createElement("div",{className:"invalid-field"},a("COMMON.VALIDATION.REQUIRED",{field:a("AUTH.FATHER_NAME")})))),l.a.createElement(r.o,{md:6},l.a.createElement(r.A,{id:"lastName",name:"lastName",type:"text",label:a("AUTH.LAST_NAME"),disabled:!i,outline:i,background:!i,containerClass:"mt-3 mb-0",value:$,getValue:q,onBlur:function(){return O(Object.assign({},u,{lastName:!0}))}},u.lastName&&0===$.length&&l.a.createElement("div",{className:"invalid-field"},a("COMMON.VALIDATION.REQUIRED",{field:a("AUTH.LAST_NAME")}))))),l.a.createElement(r.K,null,l.a.createElement(r.o,{md:6},!!i&&l.a.createElement(r.L,{label:a("AUTH.GENDER"),className:"mt-3 mb-0",selected:[ae],getValue:function(e){return ne(e[0])}},l.a.createElement(r.M,{selected:[ae]}),l.a.createElement(r.O,null,l.a.createElement(r.N,{value:R.l.MALE,checked:ae===R.l.MALE},a("COMMON.GENDER.MALE")),l.a.createElement(r.N,{value:R.l.FEMALE,checked:ae===R.l.FEMALE},a("COMMON.GENDER.FEMALE")))),!i&&l.a.createElement(r.A,{label:a("AUTH.GENDER"),disabled:!0,background:!0,value:ae?ae===R.l.MALE?a("COMMON.GENDER.MALE"):a("COMMON.GENDER.FEMALE"):""}),!!ae&&0===ae.length&&l.a.createElement("div",{className:"invalid-field"},a("COMMON.VALIDATION.REQUIRED",{field:a("AUTH.GENDER")}))),l.a.createElement(r.o,{md:6},!!i&&l.a.createElement(n.Fragment,null,l.a.createElement(r.r,{format:R.g.ISO,autoOk:!0,keyboard:!0,disabled:!i,className:"date-picker",value:re,getValue:function(e){return se(e)}}),l.a.createElement("label",{className:"date-picker-label"},a("AUTH.BIRTHDAY"))),!i&&l.a.createElement(r.A,{label:a("AUTH.BIRTHDAY"),disabled:!0,background:!0,value:ve}))),l.a.createElement(r.K,null,l.a.createElement(r.o,{md:6},l.a.createElement(r.A,{id:"jobTitle",name:"jobTitle",type:"text",label:a("AUTH.JOB_TITLE"),disabled:!i,outline:i,background:!i,containerClass:"mt-3 mb-0",value:me,getValue:Ee,onBlur:function(){return O(Object.assign({},u,{jobTitle:!0}))}},u.jobTitle&&0===me.length&&l.a.createElement("div",{className:"invalid-field"},a("COMMON.VALIDATION.REQUIRED",{field:a("AUTH.JOB_TITLE")})))),l.a.createElement(r.o,{md:6},l.a.createElement(r.A,{id:"sector",name:"sector",type:"text",label:a("AUTH.SECTOR"),disabled:!i,outline:i,background:!i,containerClass:"mt-3 mb-0",value:de,getValue:Ne,onBlur:function(){return O(Object.assign({},u,{sector:!0}))}},u.sector&&0===de.length&&l.a.createElement("div",{className:"invalid-field"},a("COMMON.VALIDATION.REQUIRED",{field:a("AUTH.SECTOR")}))))),l.a.createElement(r.K,null,l.a.createElement(r.o,{md:6},l.a.createElement(r.A,{id:"company",name:"company",type:"text",label:a("AUTH.COMPANY"),disabled:!i,outline:i,background:!i,containerClass:"mt-3 mb-0",value:fe,getValue:Ie,onBlur:function(){return O(Object.assign({},u,{company:!0}))}},u.company&&0===fe.length&&l.a.createElement("div",{className:"invalid-field"},a("COMMON.VALIDATION.REQUIRED",{field:a("AUTH.COMPANY")})))),l.a.createElement(r.o,{md:6},l.a.createElement(r.A,{id:"city",name:"city",type:"text",label:a("AUTH.CITY"),disabled:!i,outline:i,background:!i,containerClass:"mt-3 mb-0",value:Me,getValue:Te,onBlur:function(){return O(Object.assign({},u,{city:!0}))}},u.city&&0===Me.length&&l.a.createElement("div",{className:"invalid-field"},a("COMMON.VALIDATION.REQUIRED",{field:a("AUTH.CITY")}))))),l.a.createElement(r.K,null,l.a.createElement(r.o,{md:6},!!i&&l.a.createElement(r.L,{label:a("AUTH.COUNTRY_CODE"),className:"mt-3 mb-0",selected:[De],getValue:function(e){return he(e[0])}},l.a.createElement(r.M,{selected:[De]}),l.a.createElement(r.O,null,l.a.createElement(r.N,{value:R.f.BAHRAIN,checked:De===R.f.BAHRAIN},R.f.BAHRAIN," - ",a("COMMON.GCC_COUNTRIES.BAHRAIN")),l.a.createElement(r.N,{value:R.f.KUWAIT,checked:De===R.f.KUWAIT},R.f.KUWAIT," - ",a("COMMON.GCC_COUNTRIES.KUWAIT")),l.a.createElement(r.N,{value:R.f.OMAN,checked:De===R.f.OMAN},R.f.OMAN," - ",a("COMMON.GCC_COUNTRIES.OMAN")),l.a.createElement(r.N,{value:R.f.QATAR,checked:De===R.f.QATAR},R.f.QATAR," - ",a("COMMON.GCC_COUNTRIES.QATAR")),l.a.createElement(r.N,{value:R.f.SAUDI_ARABIA,checked:De===R.f.SAUDI_ARABIA},R.f.SAUDI_ARABIA," - ",a("COMMON.GCC_COUNTRIES.SAUDI_ARABIA")),l.a.createElement(r.N,{value:R.f.UAE,checked:De===R.f.UAE},R.f.UAE," - ",a("COMMON.GCC_COUNTRIES.UAE")))),!i&&l.a.createElement(r.A,{label:a("AUTH.COUNTRY_CODE"),disabled:!0,background:!0,value:De}),!i&&!!De&&0===De.length&&l.a.createElement("div",{className:"text-left invalid-field"},a("COMMON.VALIDATION.REQUIRED",{field:a("AUTH.COUNTRY_CODE")}))),l.a.createElement(r.o,{md:6},l.a.createElement(r.A,{id:"phone",name:"phone",type:"text",label:a("AUTH.PHONE"),disabled:!i,outline:i,background:!i,value:Le,getValue:je,onBlur:function(){return O(Object.assign({},u,{phone:!0}))}},(!!De.length||u.phone)&&(0===Le.length||!L.a.isPhoneNumber("".concat(De).concat(Le)))&&l.a.createElement("div",{className:"text-left invalid-field"},Le.length?a("COMMON.VALIDATION.INVALID",{field:a("AUTH.PHONE")}):a("COMMON.VALIDATION.REQUIRED",{field:a("AUTH.PHONE")})))))),l.a.createElement(I.a,{in:g.show,classNames:"fade-transition",timeout:R.i.TRANSITION_TIME,unmountOnExit:!0,appear:!0},l.a.createElement(r.b,{color:g.color,dismiss:!0,onClosed:function(){return p({})}},g.message)),!!i&&l.a.createElement("div",{className:"mt-4 mb-3 text-left"},l.a.createElement(r.g,{type:"submit",color:"indigo",className:"z-depth-1a",disabled:S||!L.a.isEmail(w)||!W.length||W.length>R.c.USERNAME_MAX_LENGTH||!L.a.isUsername(W)||!x.length||!z.length||!$.length||!ae.length||!me.length||!de.length||!fe.length||!Me.length||!De.length||!Le.length||!L.a.isPhoneNumber("".concat(De).concat(Le))},!S&&l.a.createElement(r.y,{icon:"save"}),!!S&&l.a.createElement("div",{className:"spinner-grow spinner-grow-sm",role:"status"}),a("COMMON.BUTTON.SAVE")),l.a.createElement(r.g,{type:"button",color:"danger",className:"z-depth-1a",onClick:Pe},l.a.createElement(r.y,{icon:"times"}),a("COMMON.BUTTON.CANCEL"))),!i&&l.a.createElement("div",{className:"mt-4 mb-3 text-left"},l.a.createElement(r.g,{type:"button",color:"indigo",className:"z-depth-1a",onClick:Pe},l.a.createElement(r.y,{icon:"edit"}),a("COMMON.BUTTON.MODIFY")))))}),_=a(422),P=a.n(_),H=a(423),w=a(72),V=(a(450),function(e){var t=Object(b.c)(function(e){return e}).auth,a=(Object(b.b)(),Object(d.b)().t),c=Object(n.useState)({}),s=Object(A.a)(c,2),i=s[0],o=s[1],m=Object(n.useState)(!1),E=Object(A.a)(m,2),u=E[0],O=(E[1],Object(n.useState)({})),N=Object(A.a)(O,2),f=N[0],S=N[1],M=Object(n.useState)(R.o.IS_DEV?R.h.PASSWORD:""),T=Object(A.a)(M,2),g=T[0],p=T[1],D=Object(n.useState)(R.o.IS_DEV?R.h.PASSWORD:""),C=Object(A.a)(D,2),U=C[0],L=C[1],j=Object(n.useState)(R.o.IS_DEV?R.h.PASSWORD:""),v=Object(A.a)(j,2),_=v[0],V=v[1];Object(n.useEffect)(function(){w.animateScroll.scrollToTop({duration:R.i.TRANSITION_TIME})},[e]);var F=function(){var e=Object(H.a)(P.a.mark(function e(n){var l,c;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,l={id:t.user.id,password0:g,password:U},e.next=5,h(l);case 5:c=e.sent,S({show:!0,color:c.result,message:c.message}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),S({show:!0,color:R.b.DANGER,message:a("COMMON.ERROR.UNKNOWN_SERVER_ERROR")});case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}();return l.a.createElement(n.Fragment,null,l.a.createElement("form",{onSubmit:F},l.a.createElement("div",{className:"grey-text"},l.a.createElement(r.K,null,l.a.createElement(r.o,{md:6},l.a.createElement(r.A,{id:"password0",name:"password0",label:a("PROFILE.PASSWORD.CURRENT_PASSWORD"),type:"password",outline:!0,containerClass:"mt-3",value:g,getValue:p,onBlur:function(){return o(Object.assign({},i,{password0:!0}))}},i.password0&&g.length<R.c.PASSWORD_MIN_LENGTH&&l.a.createElement("div",{className:"invalid-field"},0===g.length?a("COMMON.VALIDATION.REQUIRED",{field:a("PROFILE.PASSWORD.CURRENT_PASSWORD")}):a("COMMON.VALIDATION.MIN_LENGTH",{field:a("PROFILE.PASSWORD.CURRENT_PASSWORD"),length:R.c.PASSWORD_MIN_LENGTH}))))),l.a.createElement(r.K,null,l.a.createElement(r.o,{md:6},l.a.createElement(r.A,{id:"password",name:"password",label:a("PROFILE.PASSWORD.NEW_PASSWORD"),type:"password",outline:!0,containerClass:"mt-3",value:U,getValue:L,onBlur:function(){return o(Object.assign({},i,{password:!0}))}},i.password&&U.length<R.c.PASSWORD_MIN_LENGTH&&l.a.createElement("div",{className:"invalid-field"},0===U.length?a("COMMON.VALIDATION.REQUIRED",{field:a("PROFILE.PASSWORD.NEW_PASSWORD")}):a("COMMON.VALIDATION.MIN_LENGTH",{field:a("PROFILE.PASSWORD.NEW_PASSWORD"),length:R.c.PASSWORD_MIN_LENGTH})))),l.a.createElement(r.o,{md:6},l.a.createElement(r.A,{id:"password2",name:"password2",label:a("AUTH.PASSWORD2"),type:"password",outline:!0,containerClass:"mt-3",value:_,getValue:V,onBlur:function(){return o(Object.assign({},i,{password2:!0}))}},i.password2&&(_.length<R.c.PASSWORD_MIN_LENGTH||_!==U)&&l.a.createElement("div",{className:"invalid-field"},0===_.length?a("COMMON.VALIDATION.REQUIRED",{field:a("AUTH.PASSWORD2")}):_.length<R.c.PASSWORD_MIN_LENGTH?a("COMMON.VALIDATION.MIN_LENGTH",{field:a("AUTH.PASSWORD2"),length:R.c.PASSWORD_MIN_LENGTH}):a("COMMON.VALIDATION.NOT_SAME",{field:a("AUTH.PASSWORD")})))))),l.a.createElement(I.a,{in:f.show,classNames:"fade-transition",timeout:R.i.TRANSITION_TIME,unmountOnExit:!0,appear:!0},l.a.createElement(r.b,{color:f.color,dismiss:!0,onClosed:function(){return S({})}},f.message)),l.a.createElement("div",{className:"mt-4 mb-3 text-left"},l.a.createElement(r.g,{type:"submit",color:"indigo",className:"z-depth-1a",disabled:u||!g.length||g.length<R.c.PASSWORD_MIN_LENGTH||!U.length||U.length<R.c.PASSWORD_MIN_LENGTH||_!==U||U.length<R.c.PASSWORD_MIN_LENGTH},!u&&l.a.createElement(r.y,{icon:"edit"}),!!u&&l.a.createElement("div",{className:"spinner-grow spinner-grow-sm",role:"status"}),a("PROFILE.PASSWORD.CHANGE_PASSWORD")))))}),F=(a(451),function(e){var t,a=Object(d.b)().t,s=Object(c.h)().tab,i=Object(c.g)();switch(s=s||"personal-info"){case"personal-info":t=a("PROFILE.MAIN.PERSONAL_INFO");break;case"social-media":t=a("PROFILE.MAIN.SOCIAL_MEDIA");break;case"password":t=a("PROFILE.MAIN.PASSWORD")}Object(n.useEffect)(function(e){},[e]);var o=function(e){var t="".concat(u.a.profile.main,"/").concat(e);i.push(t)};return l.a.createElement(n.Fragment,null,l.a.createElement(N.Helmet,null,l.a.createElement("title",null,a("PROFILE.PROFILE")," - ",a("SITE_NAME"))),l.a.createElement(r.e,null,l.a.createElement(r.f,null,l.a.createElement(O.b,{to:u.a.profile.main},a("PROFILE.PROFILE"))),l.a.createElement(r.f,{active:!0},t)),l.a.createElement(r.K,null,l.a.createElement(r.o,{md:3},l.a.createElement(C,null)),l.a.createElement(r.o,{md:9},l.a.createElement("div",{className:"classic-tabs"},l.a.createElement(r.B,{classicTabs:!0,color:"mdb-color"},l.a.createElement(r.C,null,l.a.createElement(r.D,{to:"".concat(u.a.profile.main,"/").concat("personal-info"),link:u.a.profile.main,active:"personal-info"===s,role:"tab",onClick:function(e){return o("personal-info")}},l.a.createElement(r.y,{icon:"user"})," ",a("PROFILE.MAIN.PERSONAL_INFO"))),l.a.createElement(r.C,null,l.a.createElement(r.D,{to:"".concat(u.a.profile.main,"/").concat("password"),link:u.a.profile.main,active:"password"===s,role:"tab",onClick:function(e){return o("password")}},l.a.createElement(r.y,{icon:"key"})," ",a("PROFILE.MAIN.PASSWORD")))),l.a.createElement(r.P,{className:"card",activeItem:s},l.a.createElement(r.Q,{tabId:"personal-info",role:"tabpanel"},l.a.createElement(v,null)),l.a.createElement(r.Q,{tabId:"password",role:"tabpanel"},l.a.createElement(V,null)))))))});a(452),t.default=function(e){return l.a.createElement(n.Fragment,null,l.a.createElement(s.a,null),l.a.createElement(r.q,{className:"section"},l.a.createElement(c.d,null,l.a.createElement(i.a,{path:"".concat(u.a.profile.main,"/:tab?"),component:F}),l.a.createElement(c.b,{component:E.a}))),l.a.createElement(o.a,null),l.a.createElement(m.a,null))}}}]);