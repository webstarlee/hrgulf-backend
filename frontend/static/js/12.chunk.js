(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{435:function(e,t,a){"use strict";var n=a(32),l=a(1);t.a=function(e,t){var a=Object(l.useState)(e),c=Object(n.a)(a,2),r=c[0],i=c[1];return Object(l.useEffect)(function(a){var n=setTimeout(function(){i(e)},t);return function(){return clearTimeout(n)}},[e]),r}},437:function(e,t,a){"use strict";var n=a(24),l=a(28),c=a(27);t.a={getJobRoles:function(e){return new Promise(function(t,a){Object(n.a)(l.d,c.a.core.getJobRoles,e).then(function(e){t(e)},function(e){a(e)})})},getJobSubroles:function(e){return new Promise(function(t,a){Object(n.a)(l.d,c.a.core.getJobSubroles,e).then(function(e){t(e)},function(e){a(e)})})},getSectors:function(e){return new Promise(function(t,a){Object(n.a)(l.d,c.a.core.getSectors,e).then(function(e){t(e)},function(e){a(e)})})},getIndustries:function(e){return new Promise(function(t,a){Object(n.a)(l.d,c.a.core.getIndustries,e).then(function(e){t(e)},function(e){a(e)})})},getCountries:function(e){return new Promise(function(t,a){Object(n.a)(l.d,c.a.core.getCountries,e).then(function(e){t(e)},function(e){a(e)})})},getCities:function(e){return new Promise(function(t,a){Object(n.a)(l.d,c.a.core.getCities,e).then(function(e){t(e)},function(e){a(e)})})},getEmploymentTypes:function(e){return new Promise(function(t,a){Object(n.a)(l.d,c.a.core.getEmploymentTypes,e).then(function(e){t(e)},function(e){a(e)})})},getSalaryRanges:function(e){return new Promise(function(t,a){Object(n.a)(l.d,c.a.core.getSalaryRanges,e).then(function(e){t(e)},function(e){a(e)})})},getCareerLevels:function(e){return new Promise(function(t,a){Object(n.a)(l.d,c.a.core.getCareerLevels,e).then(function(e){t(e)},function(e){a(e)})})},getMajors:function(e){return new Promise(function(t,a){Object(n.a)(l.d,c.a.core.getMajors,e).then(function(e){t(e)},function(e){a(e)})})},getDegrees:function(e){return new Promise(function(t,a){Object(n.a)(l.d,c.a.core.getDegrees,e).then(function(e){t(e)},function(e){a(e)})})},getGrades:function(e){return new Promise(function(t,a){Object(n.a)(l.d,c.a.core.getGrades,e).then(function(e){t(e)},function(e){a(e)})})},getVisaStatuses:function(e){return new Promise(function(t,a){Object(n.a)(l.d,c.a.core.getVisaStatuses,e).then(function(e){t(e)},function(e){a(e)})})}}},446:function(e,t,a){"use strict";a.d(t,"a",function(){return n});a(1);function n(){window.history.back()}},782:function(e,t,a){},783:function(e,t,a){},784:function(e,t,a){},785:function(e,t,a){},786:function(e,t,a){},787:function(e,t,a){},788:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(3),r=a(26),i=a(32),o=a(30),u=a(85),d=function(e){return{type:u.a.SET_STEP,payload:e}},m=function(e){return{type:u.a.SET_VALUES,payload:e}},E=a(11),s=a(182),O=a(12),I=a(434),N=a(37),C=a(433),f=a(72),S=a(124),b=a(435),g=a(446),h=a(437),T=(a(782),a(507)),v=a.n(T),y=function(e){var t=e.backLink,a=e.onNext,u=Object(r.b)().t,d=(Object(N.g)(),Object(o.c)(function(e){return e})),s=(d.auth.work,d.minifiedProfile),T=Object(o.b)(),y=Object(n.useState)([]),R=Object(i.a)(y,2),L=R[0],j=R[1],D=Object(n.useState)([]),A=Object(i.a)(D,2),M=A[0],p=A[1],U=Object(n.useState)([]),_=Object(i.a)(U,2),V=_[0],x=_[1],k=Object(n.useState)([]),F=Object(i.a)(k,2),P=F[0],w=F[1],B=Object(n.useState)([]),K=Object(i.a)(B,2),W=K[0],Q=K[1],Y=Object(n.useState)(""),J=Object(i.a)(Y,2),G=J[0],H=J[1],q=Object(n.useState)(""),z=Object(i.a)(q,2),X=z[0],Z=z[1],$=Object(b.a)(G,E.i.DELAY2),ee=Object(b.a)(X,E.i.DELAY2),te=u("CODE"),ae=s||{jobTitle:"",companyName:"",startDate:(new Date).toDateString(),endDate:(new Date).toDateString(),isPresent:0,jobLocationId:0,companySectorId:0,companyIndustryId:0},ne=C.c().shape({jobTitle:C.e().required(u("COMMON.VALIDATION.REQUIRED",{field:u("WORK.ACCOUNT.FIELDS.JOB_TITLE")})),companyName:C.e().required(u("COMMON.VALIDATION.REQUIRED",{field:u("WORK.ACCOUNT.FIELDS.COMPANY_NAME")})),startDate:C.e().required(u("COMMON.VALIDATION.REQUIRED",{field:u("WORK.ACCOUNT.FIELDS.START_DATE")})),endDate:C.e().test(u("COMMON.VALIDATION.REQUIRED",{field:u("WORK.ACCOUNT.FIELDS.END_DATE")}),function(e){return this.parent.isPresent||!!e&&!!e.length}),jobLocationId:C.b().min(1,u("COMMON.VALIDATION.REQUIRED",{field:u("WORK.ACCOUNT.FIELDS.JOB_LOCATION")})),companySectorId:C.b().min(1,u("COMMON.VALIDATION.REQUIRED",{field:u("WORK.ACCOUNT.FIELDS.COMPANY_SECTOR")})),companyIndustryId:C.b().min(1,u("COMMON.VALIDATION.REQUIRED",{field:u("WORK.ACCOUNT.FIELDS.COMPANY_INDUSTRY")}))}),le=Object(I.b)({initialValues:ae,validationSchema:ne,onSubmit:function(e,t){var n=t.setSubmitting,l=Object(O.a)({},e,{startDate:v()(new Date(e.startDate),E.g.ISO2_LOWER),endDate:v()(new Date(e.endDate),E.g.ISO2_LOWER)});T(m(l)),n(!1),a&&a(2)}}),ce=le.values,re=le.touched,ie=le.errors,oe=(le.setFieldValue,le.setValues,le.setTouched,le.setErrors,le.handleChange),ue=le.handleBlur,de=le.isSubmitting;Object(n.useEffect)(function(e){f.animateScroll.scrollToTop({duration:E.j.TRANSITION_TIME}),h.a.getCountries().then(function(e){e.result===E.x.SUCCESS?j(e.data):j([])}).catch(function(e){j([])}),h.a.getSectors().then(function(e){e.result===E.x.SUCCESS?p(e.data):p([])}).catch(function(e){p([])})},[]),Object(n.useMemo)(function(e){V.length&&h.a.getIndustries({sectorId:le.values.companySectorId}).then(function(e){e.result===E.x.SUCCESS?w(e.data):w([])}).catch(function(e){w([])})},[V.length,ce.companySectorId]),Object(n.useMemo)(function(e){W.length&&le.setFieldValue("companyIndustryId","0")},[ce.companySectorId]),Object(n.useMemo)(function(e){var t=[],a=!0,n=!1,l=void 0;try{for(var c,r=M[Symbol.iterator]();!(a=(c=r.next()).done);a=!0){var i=c.value;t.push({value:i.id,text:i["sector_".concat(te)],lowercase:i["sector_".concat(te)].toLowerCase()})}}catch(o){n=!0,l=o}finally{try{a||null==r.return||r.return()}finally{if(n)throw l}}x(t)},[u,M]),Object(n.useMemo)(function(e){var t=[],a=!0,n=!1,l=void 0;try{for(var c,r=P[Symbol.iterator]();!(a=(c=r.next()).done);a=!0){var i=c.value;t.push({value:i.id,text:i["industry_".concat(te)],lowercase:i["industry_".concat(te)].toLowerCase()})}}catch(o){n=!0,l=o}finally{try{a||null==r.return||r.return()}finally{if(n)throw l}}Q(t)},[u,P]);return l.a.createElement(n.Fragment,null,l.a.createElement("form",{onSubmit:le.handleSubmit},l.a.createElement("h3",{className:"h3-responsive mt-3 text-left"},u("WORK.MY_ACCOUNT.MINIFIED_PROFILE.STEPS.POSITION")),l.a.createElement(c.O,null,l.a.createElement(c.k,{md:"6",className:"mt-3 text-left"},u("WORK.ACCOUNT.FIELDS.JOB_TITLE"),l.a.createElement(c.w,{id:"jobTitle",name:"jobTitle",outline:!0,containerClass:"my-0",value:ce.jobTitle,onChange:oe,onBlur:ue},!!re.jobTitle&&!!ie.jobTitle&&l.a.createElement("div",{className:"text-left invalid-field"},ie.jobTitle))),l.a.createElement(c.k,{md:"6",className:"mt-3 text-left"},u("WORK.ACCOUNT.FIELDS.COMPANY_NAME"),l.a.createElement(c.w,{id:"companyName",name:"companyName",outline:!0,containerClass:"my-0",value:ce.companyName,onChange:oe,onBlur:ue},!!re.companyName&&!!ie.companyName&&l.a.createElement("div",{className:"text-left invalid-field"},ie.companyName)))),l.a.createElement(c.O,null,l.a.createElement(c.k,{md:"4"},l.a.createElement("label",null,u("WORK.ACCOUNT.FIELDS.START_DATE")),l.a.createElement("input",{hidden:!0,id:"startDate",value:ce.startDate,onChange:oe,onBlur:ue}),l.a.createElement(c.n,{format:E.g.ISO,outline:!0,autoOk:!0,keyboard:!0,background:!0,className:"md-outline date-picker grey-text mt-0 mb-0",value:ce.startDate,getValue:function(e){return S.a.triggerChangeEvent("startDate",e)}}),!!re.startDate&&!!ie.startDate&&l.a.createElement("div",{className:"text-left invalid-field"},ie.startDate)),l.a.createElement(c.k,{md:"4"},l.a.createElement("label",null,u("WORK.ACCOUNT.FIELDS.END_DATE")),l.a.createElement("input",{hidden:!0,id:"endDate",value:ce.endDate,onChange:oe,onBlur:ue}),l.a.createElement(c.n,{format:E.g.ISO,outline:!0,autoOk:!0,keyboard:!0,background:!0,className:"md-outline date-picker grey-text mt-0 mb-0",value:ce.endDate,getValue:function(e){return S.a.triggerChangeEvent("endDate",e)}}),!!re.endDate&&!!ie.endDate&&l.a.createElement("div",{className:"text-left invalid-field"},ie.endDate)),l.a.createElement(c.k,{md:"4"},l.a.createElement("div",{className:"pt-3 pt-md-3"},l.a.createElement(c.w,{type:"checkbox",id:"isPresent",label:u("WORK.ACCOUNT.FIELDS.IS_PRESENT"),filled:!0,containerClass:"mt-md-4",checked:ce.isPresent,onChange:oe}),!!re.isPresent&&!!ie.isPresent&&l.a.createElement("div",{className:"text-left invalid-field"},ie.isPresent)))),l.a.createElement(c.O,null,l.a.createElement(c.k,{md:"12",className:"mt-3 text-left"},u("WORK.ACCOUNT.FIELDS.JOB_LOCATION")),l.a.createElement(c.k,{md:"6"},!!L.length&&l.a.createElement(n.Fragment,null,l.a.createElement("input",{hidden:!0,id:"jobLocationId",value:ce.jobLocationId,onChange:oe,onBlur:ue}),l.a.createElement(c.P,{className:"my-0",outline:!0,selected:ce.jobLocationId,getValue:function(e){S.a.triggerChangeEvent("jobLocationId",e[0])}},l.a.createElement(c.Q,{selected:u("COMMON.VALUES.SELECT_ONE")}),l.a.createElement(c.S,{className:"max-height-200"},l.a.createElement(c.R,{disabled:!0},u("COMMON.VALUES.SELECT_ONE")),L.map(function(e,t){return l.a.createElement(c.R,{key:t,value:e.id,checked:ce.jobLocationId==e.id},e["country_".concat(te)])}))),!!re.jobLocationId&&!!ie.jobLocationId&&l.a.createElement("div",{className:"text-left invalid-field"},ie.jobLocationId)))),l.a.createElement(c.O,null,l.a.createElement(c.k,{md:"12",className:"mt-3 text-left"},u("WORK.ACCOUNT.FIELDS.COMPANY_SECTOR_N_INDUSTRY")),l.a.createElement(c.k,{md:"6"},!!V.length&&l.a.createElement(n.Fragment,null,l.a.createElement("input",{hidden:!0,id:"companySectorId",value:ce.companySectorId,onChange:oe,onBlur:ue}),l.a.createElement(c.P,{className:"my-0",outline:!0,selected:ce.companySectorId,getValue:function(e){S.a.triggerChangeEvent("companySectorId",e[0])}},l.a.createElement(c.Q,{selected:u("COMMON.VALUES.SELECT_ONE")}),l.a.createElement(c.S,{className:"max-height-200"},l.a.createElement(c.w,{id:"selectSearchInput","data-search":"true",placeHolder:u("COMMON.BUTTON.SEARCH"),value:G,getValue:H,autoComplete:"auto"}),l.a.createElement(c.R,{disabled:!0},u("COMMON.VALUES.SELECT_ONE")),V.filter(function(e){return-1!==e.lowercase.indexOf($)}).map(function(e,t){return l.a.createElement(c.R,{key:t,value:e.value,checked:ce.companySectorId==e.value},e.text)}))),!!re.companySectorId&&!!ie.companySectorId&&l.a.createElement("div",{className:"text-left invalid-field"},ie.companySectorId))),l.a.createElement(c.k,{md:"6"},!!W.length&&l.a.createElement(n.Fragment,null,l.a.createElement("input",{hidden:!0,id:"companyIndustryId",value:ce.companyIndustryId,onChange:oe,onBlur:ue}),l.a.createElement(c.P,{className:"mt-2 mt-md-0 mb-0",outline:!0,selected:ce.companyIndustryId,getValue:function(e){S.a.triggerChangeEvent("companyIndustryId",e[0])}},l.a.createElement(c.Q,{selected:u("COMMON.VALUES.SELECT_ONE")}),l.a.createElement(c.S,{className:"max-height-200"},l.a.createElement(c.w,{id:"selectSearchInput","data-search":"true",placeHolder:u("COMMON.BUTTON.SEARCH"),value:X,getValue:Z,autoComplete:"auto"}),l.a.createElement(c.R,{disabled:!0},u("COMMON.VALUES.SELECT_ONE")),W.filter(function(e){return-1!==e.lowercase.indexOf(ee)}).map(function(e,t){return l.a.createElement(c.R,{key:t,value:e.value,checked:ce.companyIndustryId==e.value},e.text)}))),!!re.companyIndustryId&&!!ie.companyIndustryId&&l.a.createElement("div",{className:"text-left invalid-field"},ie.companyIndustryId)))),l.a.createElement("div",{className:"mt-4 mb-3 text-right"},l.a.createElement(c.g,{type:"button",color:"warning",size:"sm",rounded:!0,disabled:!t,onClick:g.a},u("COMMON.BUTTON.BACK")),l.a.createElement(c.g,{type:"submit",color:"primary",size:"sm",rounded:!0,disabled:!!de},u("COMMON.BUTTON.NEXT")))))},R=(a(783),function(e){var t=e.onPrev,a=e.onNext,u=Object(r.b)().t,d=(Object(N.g)(),Object(o.c)(function(e){return e})),s=(d.auth.work,d.minifiedProfile),g=Object(o.b)(),T=Object(n.useState)([]),v=Object(i.a)(T,2),y=v[0],R=v[1],L=Object(n.useState)([]),j=Object(i.a)(L,2),D=j[0],A=j[1],M=Object(n.useState)([]),p=Object(i.a)(M,2),U=p[0],_=p[1],V=Object(n.useState)([]),x=Object(i.a)(V,2),k=x[0],F=x[1],P=Object(n.useState)([]),w=Object(i.a)(P,2),B=w[0],K=w[1],W=Object(n.useState)(""),Q=Object(i.a)(W,2),Y=Q[0],J=Q[1],G=Object(b.a)(Y,E.i.DELAY2),H=u("CODE"),q=s||{jobTitle:"",jobRoleId:0,jobLocationId:5,jobVisaStatusId:3,careerLevel:0},z=C.c().shape({jobTitle:C.e().required(u("COMMON.VALIDATION.REQUIRED",{field:u("WORK.ACCOUNT.FIELDS.JOB_TITLE")})),jobRoleId:C.b().min(1,u("COMMON.VALIDATION.REQUIRED",{field:u("WORK.ACCOUNT.FIELDS.JOB_ROLE")})),jobLocationId:C.b().min(1,u("COMMON.VALIDATION.REQUIRED",{field:u("WORK.ACCOUNT.FIELDS.JOB_LOCATION")})),jobVisaStatusId:C.b().min(1,u("COMMON.VALIDATION.REQUIRED",{field:u("WORK.ACCOUNT.FIELDS.JOB_VISA_STATUS")})),careerLevel:C.b().min(1,u("COMMON.VALIDATION.REQUIRED",{field:u("WORK.ACCOUNT.FIELDS.CAREER_LEVEL")}))}),X=Object(I.b)({initialValues:q,validationSchema:z,onSubmit:function(e,t){var n=t.setSubmitting,l=Object(O.a)({},e);g(m(l)),n(!1),a&&a(2)}}),Z=X.values,$=X.touched,ee=X.errors,te=(X.setFieldValue,X.setValues,X.setTouched,X.setErrors,X.handleChange),ae=X.handleBlur,ne=X.isSubmitting;Object(n.useEffect)(function(e){f.animateScroll.scrollToTop({duration:E.j.TRANSITION_TIME}),h.a.getJobRoles().then(function(e){e.result===E.x.SUCCESS?A(e.data):A([])}).catch(function(e){A([])}),h.a.getCountries().then(function(e){e.result===E.x.SUCCESS?_(e.data):_([])}).catch(function(e){_([])}),h.a.getVisaStatuses().then(function(e){e.result===E.x.SUCCESS?F(e.data):F([])}).catch(function(e){F([])}),h.a.getCareerLevels().then(function(e){e.result===E.x.SUCCESS?K(e.data):K([])}).catch(function(e){K([])})},[]),Object(n.useMemo)(function(e){var t=[],a=!0,n=!1,l=void 0;try{for(var c,r=D[Symbol.iterator]();!(a=(c=r.next()).done);a=!0){var i=c.value;t.push({value:i.id,text:i["jobRole_".concat(H)],lowercase:i["jobRole_".concat(H)].toLowerCase()})}}catch(o){n=!0,l=o}finally{try{a||null==r.return||r.return()}finally{if(n)throw l}}R(t)},[u,D]);return l.a.createElement(n.Fragment,null,l.a.createElement("form",{onSubmit:X.handleSubmit},l.a.createElement("h3",{className:"h3-responsive mt-3 text-left"},u("WORK.MY_ACCOUNT.MINIFIED_PROFILE.STEPS.JOB_KIND")),l.a.createElement(c.O,null,l.a.createElement(c.k,{md:"6",className:"mt-3 text-left"},l.a.createElement("label",null,u("WORK.ACCOUNT.FIELDS.JOB_TITLE")),l.a.createElement(c.w,{id:"jobTitle",name:"jobTitle",outline:!0,containerClass:"my-0",value:Z.jobTitle,onChange:te,onBlur:ae},!!$.jobTitle&&!!ee.jobTitle&&l.a.createElement("div",{className:"text-left invalid-field"},ee.jobTitle))),l.a.createElement(c.k,{md:"6",className:"mt-3 text-left"},!!y.length&&l.a.createElement(n.Fragment,null,l.a.createElement("label",null,u("WORK.ACCOUNT.FIELDS.JOB_ROLE")),l.a.createElement("input",{hidden:!0,id:"jobRoleId",value:Z.jobRoleId,onChange:te,onBlur:ae}),l.a.createElement(c.P,{className:"my-0",outline:!0,selected:Z.jobRoleId,getValue:function(e){S.a.triggerChangeEvent("jobRoleId",e[0])}},l.a.createElement(c.Q,{selected:u("COMMON.VALUES.SELECT_ONE")}),l.a.createElement(c.S,{className:"max-height-200"},l.a.createElement(c.w,{id:"selectSearchInput","data-search":"true",placeHolder:u("COMMON.BUTTON.SEARCH"),outline:!0,value:Y,getValue:J,autoComplete:"auto"}),l.a.createElement(c.R,{disabled:!0},u("COMMON.VALUES.SELECT_ONE")),y.filter(function(e){return-1!==e.lowercase.indexOf(G)}).map(function(e,t){return l.a.createElement(c.R,{key:t,value:e.value,checked:Z.jobRoleId==e.value},e.text)}))),!!$.jobRoleId&&!!ee.jobRoleId&&l.a.createElement("div",{className:"text-left invalid-field"},ee.jobRoleId)))),l.a.createElement(c.O,null,l.a.createElement(c.k,{md:"6",className:"mt-3 text-left"},!!U.length&&l.a.createElement(n.Fragment,null,l.a.createElement("label",null,u("WORK.ACCOUNT.FIELDS.JOB_LOCATION")),l.a.createElement("input",{hidden:!0,id:"jobLocationId",value:Z.jobLocationId,onChange:te,onBlur:ae}),l.a.createElement(c.P,{className:"my-0",outline:!0,selected:Z.jobLocationId,getValue:function(e){S.a.triggerChangeEvent("jobLocationId",e[0])}},l.a.createElement(c.Q,{selected:u("COMMON.VALUES.SELECT_ONE")}),l.a.createElement(c.S,{className:"max-height-200"},l.a.createElement(c.R,{disabled:!0},u("COMMON.VALUES.SELECT_ONE")),U.map(function(e,t){return l.a.createElement(c.R,{key:t,value:e.id,checked:Z.jobLocationId==e.id},e["country_".concat(H)])}))),!!$.jobLocationId&&!!ee.jobLocationId&&l.a.createElement("div",{className:"text-left invalid-field"},ee.jobLocationId))),l.a.createElement(c.k,{md:"6",className:"mt-3 text-left"},!!k.length&&l.a.createElement(n.Fragment,null,l.a.createElement("label",null,u("WORK.ACCOUNT.FIELDS.JOB_VISA_STATUS")),l.a.createElement("input",{hidden:!0,id:"jobVisaStatusId",value:Z.jobVisaStatusId,onChange:te,onBlur:ae}),l.a.createElement(c.P,{className:"my-0",outline:!0,selected:Z.jobVisaStatusId,getValue:function(e){S.a.triggerChangeEvent("jobVisaStatusId",e[0])}},l.a.createElement(c.Q,{selected:u("COMMON.VALUES.SELECT_ONE")}),l.a.createElement(c.S,{className:"max-height-200"},l.a.createElement(c.R,{disabled:!0},u("COMMON.VALUES.SELECT_ONE")),k.map(function(e,t){return l.a.createElement(c.R,{key:t,value:e.id,checked:Z.jobVisaStatusId==e.id},e["visaStatus_".concat(H)])}))),!!$.jobVisaStatusId&&!!ee.jobVisaStatusId&&l.a.createElement("div",{className:"text-left invalid-field"},ee.jobVisaStatusId)))),l.a.createElement(c.O,null,l.a.createElement(c.k,{md:"6",className:"mt-3 text-left"},!!B.length&&l.a.createElement(n.Fragment,null,l.a.createElement("label",null,u("WORK.ACCOUNT.FIELDS.CAREER_LEVEL")),l.a.createElement("input",{hidden:!0,id:"careerLevel",value:Z.careerLevel,onChange:te,onBlur:ae}),l.a.createElement(c.P,{className:"my-0",outline:!0,selected:Z.careerLevel,getValue:function(e){S.a.triggerChangeEvent("careerLevel",e[0])}},l.a.createElement(c.Q,{selected:u("COMMON.VALUES.SELECT_ONE")}),l.a.createElement(c.S,{className:"max-height-200"},l.a.createElement(c.R,{disabled:!0},u("COMMON.VALUES.SELECT_ONE")),B.map(function(e,t){return l.a.createElement(c.R,{key:t,value:e.level,checked:Z.careerLevel==e.level},e["careerLevel_".concat(H)])}))),!!$.careerLevel&&!!ee.careerLevel&&l.a.createElement("div",{className:"text-left invalid-field"},ee.careerLevel)))),l.a.createElement("div",{className:"mt-4 mb-3 text-right"},l.a.createElement(c.g,{type:"button",color:"warning",size:"sm",rounded:!0,disabled:!!ne,onClick:t},u("COMMON.BUTTON.BACK")),l.a.createElement(c.g,{type:"submit",color:"primary",size:"sm",rounded:!0,disabled:!!ne},u("COMMON.BUTTON.NEXT")))))}),L=(a(784),function(e){var t=e.onPrev,a=e.onNext,u=Object(r.b)().t,d=(Object(N.g)(),Object(o.c)(function(e){return e})),s=(d.auth.work,d.minifiedProfile),g=Object(o.b)(),T=Object(n.useState)([]),v=Object(i.a)(T,2),y=v[0],R=v[1],L=Object(n.useState)([]),j=Object(i.a)(L,2),D=j[0],A=j[1],M=Object(n.useState)([]),p=Object(i.a)(M,2),U=p[0],_=p[1],V=Object(n.useState)([]),x=Object(i.a)(V,2),k=x[0],F=x[1],P=Object(n.useState)(""),w=Object(i.a)(P,2),B=w[0],K=w[1],W=Object(b.a)(B,E.i.DELAY2),Q=u("CODE"),Y=s||{degree:"",university:"",majorId:5,graduatedDate:(new Date).toDateString(),gradeId:1},J=C.c().shape({degree:C.e().required(u("COMMON.VALIDATION.REQUIRED",{field:u("WORK.ACCOUNT.FIELDS.DEGREE")})),university:C.e().required(u("COMMON.VALIDATION.REQUIRED",{field:u("WORK.ACCOUNT.FIELDS.UNIVERSITY")})),majorId:C.b().min(1,u("COMMON.VALIDATION.REQUIRED",{field:u("WORK.ACCOUNT.FIELDS.MAJOR")})),graduatedDate:C.e().required(u("COMMON.VALIDATION.REQUIRED",{field:u("WORK.ACCOUNT.FIELDS.GRADUATED_DATE")})),gradeId:C.b().min(1,u("COMMON.VALIDATION.REQUIRED",{field:u("WORK.ACCOUNT.FIELDS.GRADE")}))}),G=Object(I.b)({initialValues:Y,validationSchema:J,onSubmit:function(e,t){var n=t.setSubmitting,l=Object(O.a)({},e);g(m(l)),n(!1),a&&a(2)}}),H=G.values,q=G.touched,z=G.errors,X=(G.setFieldValue,G.setValues,G.setTouched,G.setErrors,G.handleChange),Z=G.handleBlur,$=G.isSubmitting;Object(n.useEffect)(function(e){f.animateScroll.scrollToTop({duration:E.j.TRANSITION_TIME}),h.a.getDegrees().then(function(e){e.result===E.x.SUCCESS?R(e.data):R([])}).catch(function(e){R([])}),h.a.getMajors().then(function(e){e.result===E.x.SUCCESS?A(e.data):A([])}).catch(function(e){A([])}),h.a.getGrades().then(function(e){e.result===E.x.SUCCESS?F(e.data):F([])}).catch(function(e){F([])})},[]),Object(n.useMemo)(function(e){var t=[],a=!0,n=!1,l=void 0;try{for(var c,r=D[Symbol.iterator]();!(a=(c=r.next()).done);a=!0){var i=c.value;t.push({value:i.id,text:i["major_".concat(Q)],lowercase:i["major_".concat(Q)].toLowerCase()})}}catch(o){n=!0,l=o}finally{try{a||null==r.return||r.return()}finally{if(n)throw l}}_(t)},[u,D]);return l.a.createElement(n.Fragment,null,l.a.createElement("form",{onSubmit:G.handleSubmit},l.a.createElement("h3",{className:"h3-responsive mt-3 text-left"},u("WORK.MY_ACCOUNT.MINIFIED_PROFILE.STEPS.EDUCATION")),l.a.createElement(c.O,null,l.a.createElement(c.k,{md:"6",className:"mt-3 text-left"},!!y.length&&l.a.createElement(n.Fragment,null,l.a.createElement("label",null,u("WORK.ACCOUNT.FIELDS.DEGREE")),l.a.createElement("input",{hidden:!0,id:"degree",value:H.degree,onChange:X,onBlur:Z}),l.a.createElement(c.P,{className:"my-0",outline:!0,selected:H.degree,getValue:function(e){S.a.triggerChangeEvent("degree",e[0])}},l.a.createElement(c.Q,{selected:u("COMMON.VALUES.SELECT_ONE")}),l.a.createElement(c.S,{className:"max-height-200"},l.a.createElement(c.R,{disabled:!0},u("COMMON.VALUES.SELECT_ONE")),y.map(function(e,t){return l.a.createElement(c.R,{key:t,value:e.degree,checked:H.degree==e.degree},e["degree_".concat(Q)])}))),!!q.degree&&!!z.degree&&l.a.createElement("div",{className:"text-left invalid-field"},z.degree)))),l.a.createElement(c.O,null,l.a.createElement(c.k,{md:"6",className:"mt-3 text-left"},l.a.createElement("label",null,u("WORK.ACCOUNT.FIELDS.UNIVERSITY")),l.a.createElement(c.w,{id:"university",name:"university",outline:!0,containerClass:"my-0",value:H.university,onChange:X,onBlur:Z},!!q.university&&!!z.university&&l.a.createElement("div",{className:"text-left invalid-field"},z.university))),l.a.createElement(c.k,{md:"6",className:"mt-3 text-left"},!!U.length&&l.a.createElement(n.Fragment,null,l.a.createElement("label",null,u("WORK.ACCOUNT.FIELDS.MAJOR")),l.a.createElement("input",{hidden:!0,id:"majorId",value:H.majorId,onChange:X,onBlur:Z}),l.a.createElement(c.P,{className:"my-0",outline:!0,selected:H.majorId,getValue:function(e){S.a.triggerChangeEvent("majorId",e[0])}},l.a.createElement(c.Q,{selected:u("COMMON.VALUES.SELECT_ONE")}),l.a.createElement(c.S,{className:"max-height-200"},l.a.createElement(c.w,{id:"selectSearchInput","data-search":"true",placeHolder:u("COMMON.BUTTON.SEARCH"),outline:!0,value:B,getValue:K,autoComplete:"auto"}),l.a.createElement(c.R,{disabled:!0},u("COMMON.VALUES.SELECT_ONE")),U.filter(function(e){return-1!==e.lowercase.indexOf(W)}).map(function(e,t){return l.a.createElement(c.R,{key:t,value:e.value,checked:H.majorId==e.value},e.text)}))),!!q.majorId&&!!z.majorId&&l.a.createElement("div",{className:"text-left invalid-field"},z.majorId)))),l.a.createElement(c.O,null,l.a.createElement(c.k,{md:"6",className:"mt-3 text-left"},l.a.createElement("label",null,u("WORK.ACCOUNT.FIELDS.GRADUATED_DATE")),l.a.createElement("input",{hidden:!0,id:"graduatedDate",value:H.graduatedDate,onChange:X,onBlur:Z}),l.a.createElement(c.n,{format:E.g.ISO,outline:!0,autoOk:!0,keyboard:!0,background:!0,className:"md-outline date-picker grey-text mt-0 mb-0",value:H.graduatedDate,getValue:function(e){return S.a.triggerChangeEvent("graduatedDate",e)}}),!!q.graduatedDate&&!!z.graduatedDate&&l.a.createElement("div",{className:"text-left invalid-field"},z.graduatedDate)),l.a.createElement(c.k,{md:"6",className:"mt-3 text-left"},!!k.length&&l.a.createElement(n.Fragment,null,l.a.createElement("label",null,u("WORK.ACCOUNT.FIELDS.JOB_VISA_STATUS")),l.a.createElement("input",{hidden:!0,id:"gradeId",value:H.gradeId,onChange:X,onBlur:Z}),l.a.createElement(c.P,{className:"my-0",outline:!0,selected:H.gradeId,getValue:function(e){S.a.triggerChangeEvent("gradeId",e[0])}},l.a.createElement(c.Q,{selected:u("COMMON.VALUES.SELECT_ONE")}),l.a.createElement(c.S,{className:"max-height-200"},l.a.createElement(c.R,{disabled:!0},u("COMMON.VALUES.SELECT_ONE")),k.map(function(e,t){return l.a.createElement(c.R,{key:t,value:e.id,checked:H.gradeId==e.id},e["grade_".concat(Q)])}))),!!q.gradeId&&!!z.gradeId&&l.a.createElement("div",{className:"text-left invalid-field"},z.gradeId)))),l.a.createElement("div",{className:"mt-4 mb-3 text-right"},l.a.createElement(c.g,{type:"button",color:"warning",size:"sm",rounded:!0,disabled:!!$,onClick:t},u("COMMON.BUTTON.BACK")),l.a.createElement(c.g,{type:"submit",color:"primary",size:"sm",rounded:!0,disabled:!!$},u("COMMON.BUTTON.NEXT")))))}),j=a(532),D=a(27),A=a(123),M=a(24),p=a(28),U=function(e){return new Promise(function(t,a){Object(M.a)(p.d,D.a.work.account.saveMinifiedProfile,e).then(function(e){t(e)},function(e){a(e)})})},_=(a(508),a(785),a(5)),V=a(128),x=function(e){var t=e.onPrev,a=(e.onNext,Object(r.b)().t),u=Object(N.g)(),d=Object(o.c)(function(e){return e}),m=d.auth,s=d.minifiedProfile,g=m.user,T=(m.work,Object(o.b)()),v=Object(n.useState)([]),y=Object(i.a)(v,2),R=y[0],L=y[1],M=Object(n.useState)([]),p=Object(i.a)(M,2),x=p[0],k=p[1],F=Object(n.useState)([]),P=Object(i.a)(F,2),w=P[0],B=P[1],K=Object(n.useState)([]),W=Object(i.a)(K,2),Q=(W[0],W[1],Object(n.useState)([])),Y=Object(i.a)(Q,2),J=(Y[0],Y[1],Object(n.useState)("")),G=Object(i.a)(J,2),H=G[0],q=G[1],z=Object(b.a)(H,E.i.DELAY2),X=a("CODE"),Z=s||{birthday:(new Date).toDateString(),gender:"U",nationalityId:5,countryId:5,cityId:181,visaStatusId:1,phone:"".concat(E.h.USER.COUNTRY_CODE).concat(E.h.USER.PHONE)},$=C.c().shape({degree:C.e().required(a("COMMON.VALIDATION.REQUIRED",{field:a("WORK.ACCOUNT.FIELDS.DEGREE")})),university:C.e().required(a("COMMON.VALIDATION.REQUIRED",{field:a("WORK.ACCOUNT.FIELDS.UNIVERSITY")})),majorId:C.b().min(1,a("COMMON.VALIDATION.REQUIRED",{field:a("WORK.ACCOUNT.FIELDS.MAJOR")})),graduatedDate:C.e().required(a("COMMON.VALIDATION.REQUIRED",{field:a("WORK.ACCOUNT.FIELDS.GRADUATED_DATE")})),gradeId:C.b().min(1,a("COMMON.VALIDATION.REQUIRED",{field:a("WORK.ACCOUNT.FIELDS.GRADE")})),phone:C.e().test("phone-number",a("COMMON.VALIDATION.INVALID",{field:a("COMMON.FIELDS.USER.PHONE")}),j.b)}),ee=Object(I.b)({initialValues:Z,validationSchema:$,onSubmit:function(e,t){var n=t.setSubmitting,l=Object(j.c)(e.phone),c=Object(O.a)({},e,{countryCode:"+".concat(l.countryCallingCode),phone:l.nationalNumber,userId:g.id,id:g.workId});n(!0),U(c).then(function(e){if(e.result===E.x.SUCCESS){A.b.success(e.message);var t=Object(O.a)({},m,{user:Object(O.a)({},g,{},e.data.user),work:e.data.work,token:e.data.token});T(V.a.successSignIn(t)),sessionStorage.setItem(E.v.PERSIST_KEY,JSON.stringify(t)),localStorage.getItem(E.v.PERSIST_KEY)&&localStorage.setItem(E.v.PERSIST_KEY,JSON.stringify(t)),u.push(_.a.work.root)}else A.b.error(e.message);n(!1)}).catch(function(e){A.b.error(a("COMMON.ERROR.UNKNOWN_SERVER_ERROR")),n(!1)})}}),te=ee.values,ae=ee.touched,ne=ee.errors,le=ee.setFieldValue,ce=(ee.setValues,ee.setTouched,ee.setErrors,ee.handleChange),re=ee.handleBlur,ie=ee.isSubmitting;Object(n.useEffect)(function(e){f.animateScroll.scrollToTop({duration:E.j.TRANSITION_TIME}),h.a.getCountries().then(function(e){e.result===E.x.SUCCESS?L(e.data):L([])}).catch(function(e){L([])})},[]),Object(n.useMemo)(function(e){R.length&&h.a.getCities({countryId:ee.values.countryId}).then(function(e){e.result===E.x.SUCCESS?k(e.data):k([])}).catch(function(e){k([])})},[R.length,te.countryId]),Object(n.useMemo)(function(e){var t=[],a=!0,n=!1,l=void 0;try{for(var c,r=x[Symbol.iterator]();!(a=(c=r.next()).done);a=!0){var i=c.value;t.push({value:i.id,text:i["city_".concat(X)],lowercase:i["city_".concat(X)].toLowerCase()})}}catch(o){n=!0,l=o}finally{try{a||null==r.return||r.return()}finally{if(n)throw l}}B(t)},[a,x]);return l.a.createElement(n.Fragment,null,l.a.createElement("form",{onSubmit:ee.handleSubmit},l.a.createElement("h3",{className:"h3-responsive mt-3 text-left"},a("WORK.MY_ACCOUNT.MINIFIED_PROFILE.STEPS.CONTACT")),l.a.createElement(c.O,null,l.a.createElement(c.k,{md:"6",className:"mt-3 text-left"},l.a.createElement("label",null,a("COMMON.FIELDS.USER.BIRTHDAY")),l.a.createElement("input",{hidden:!0,id:"birthday",value:te.birthday,onChange:ce,onBlur:re}),l.a.createElement(c.n,{format:E.g.ISO,outline:!0,autoOk:!0,keyboard:!0,background:!0,className:"md-outline date-picker grey-text mt-0 mb-0",value:te.birthday,getValue:function(e){return S.a.triggerChangeEvent("birthday",e)}}),!!ae.birthday&&!!ne.birthday&&l.a.createElement("div",{className:"text-left invalid-field"},ne.birthday)),l.a.createElement(c.k,{md:"6",className:"mt-3 text-left"},l.a.createElement("label",null,a("COMMON.FIELDS.USER.GENDER")),l.a.createElement(c.t,null,l.a.createElement(c.w,{checked:te.gender===E.m.MALE,onClick:function(e){return le("gender",E.m.MALE)},label:a("COMMON.GENDER.MALE"),type:"radio",id:"radMale",containerClass:"mr-5"}),l.a.createElement(c.w,{checked:te.gender===E.m.FEMALE,onClick:function(e){return le("gender",E.m.FEMALE)},label:a("COMMON.GENDER.FEMALE"),type:"radio",id:"radFemale",containerClass:"mr-5"}),l.a.createElement(c.w,{checked:te.gender===E.m.UNDEFINED,onClick:function(e){return le("gender",E.m.UNDEFINED)},label:a("COMMON.GENDER.UNDEFINED"),type:"radio",id:"radUndefined"})))),l.a.createElement(c.O,null,l.a.createElement(c.k,{md:"6",className:"mt-3 text-left"},l.a.createElement("input",{hidden:!0,id:"phone",value:te.phone,onChange:ce,onBlur:re}),l.a.createElement("label",null,a("COMMON.FIELDS.USER.PHONE")),l.a.createElement(j.a,{className:"md-form md-outline my-0",flagUrl:"".concat(D.a.assetsBaseUrl).concat(D.a.assets.flags,"/{XX}.png"),value:te.phone,onChange:function(e){return S.a.triggerChangeEvent("phone",e)}}),!!ae.phone&&!!ne.phone&&l.a.createElement("div",{className:"text-left invalid-field"},ne.phone)),l.a.createElement(c.k,{md:"6",className:"mt-3 text-left"},!!R.length&&l.a.createElement(n.Fragment,null,l.a.createElement("label",null,a("COMMON.FIELDS.USER.NATIONALITY")),l.a.createElement("input",{hidden:!0,id:"nationalityId",value:te.nationalityId,onChange:ce,onBlur:re}),l.a.createElement(c.P,{className:"my-0",outline:!0,selected:te.nationalityId,getValue:function(e){S.a.triggerChangeEvent("nationalityId",e[0])}},l.a.createElement(c.Q,{selected:a("COMMON.VALUES.SELECT_ONE")}),l.a.createElement(c.S,null,l.a.createElement(c.R,{disabled:!0},a("COMMON.VALUES.SELECT_ONE")),R.map(function(e,t){return l.a.createElement(c.R,{key:t,value:e.id,checked:te.nationalityId==e.id},e["country_".concat(X)])}))),!!ae.nationalityId&&!!ne.nationalityId&&l.a.createElement("div",{className:"text-left invalid-field"},ne.nationalityId)))),l.a.createElement(c.O,{className:"mt-3 text-left"},l.a.createElement(c.k,{md:"12"},l.a.createElement("label",null,a("COMMON.FIELDS.USER.LOCATION"))),l.a.createElement(c.k,{md:"6"},!!R.length&&l.a.createElement(n.Fragment,null,l.a.createElement("input",{hidden:!0,id:"countryId",value:te.countryId,onChange:ce,onBlur:re}),l.a.createElement(c.P,{className:"my-0",outline:!0,selected:te.countryId,getValue:function(e){S.a.triggerChangeEvent("countryId",e[0])}},l.a.createElement(c.Q,{selected:a("COMMON.VALUES.SELECT_ONE")}),l.a.createElement(c.S,{className:"max-height-200"},l.a.createElement(c.R,{disabled:!0},a("COMMON.VALUES.SELECT_ONE")),R.map(function(e,t){return l.a.createElement(c.R,{key:t,value:e.id,checked:te.countryId==e.id},e["country_".concat(X)])}))),!!ae.countryId&&!!ne.countryId&&l.a.createElement("div",{className:"text-left invalid-field"},ne.countryId))),l.a.createElement(c.k,{md:"6"},!!w.length&&l.a.createElement(n.Fragment,null,l.a.createElement("input",{hidden:!0,id:"cityId",value:te.cityId,onChange:ce,onBlur:re}),l.a.createElement(c.P,{className:"mt-2 mt-md-0 mb-0",outline:!0,selected:te.cityId,getValue:function(e){S.a.triggerChangeEvent("cityId",e[0])}},l.a.createElement(c.Q,{selected:a("COMMON.VALUES.SELECT_ONE")}),l.a.createElement(c.S,{className:"max-height-200"},l.a.createElement(c.w,{id:"selectSearchInput","data-search":"true",placeHolder:a("COMMON.BUTTON.SEARCH"),value:H,getValue:q,autoComplete:"auto"}),l.a.createElement(c.R,{disabled:!0},a("COMMON.VALUES.SELECT_ONE")),w.filter(function(e){return-1!==e.lowercase.indexOf(z)}).map(function(e,t){return l.a.createElement(c.R,{key:t,value:e.value,checked:te.cityId==e.value},e.text)}))),!!ae.cityId&&!!ne.cityId&&l.a.createElement("div",{className:"text-left invalid-field"},ne.cityId)))),l.a.createElement("div",{className:"mt-4 mb-3 text-right"},l.a.createElement(c.g,{type:"button",color:"warning",size:"sm",rounded:!0,disabled:!!ie,onClick:t},a("COMMON.BUTTON.BACK")),l.a.createElement(c.g,{type:"submit",color:"primary",size:"sm",rounded:!0,disabled:!!ie},a("COMMON.BUTTON.NEXT")))))},k=(a(786),function(e){e.backLink;var t=Object(r.b)().t,a=Object(o.c)(function(e){return e}),u=a.auth,O=u.user,I=u.work,N=a.minifiedProfile,C=N.step,f=N.pendingStep,S=Object(o.b)(),b=Object(n.useState)(!0),g=Object(i.a)(b,2),h=g[0],T=g[1],v=function(e){S(d({step:C+1,pendingStep:f>C?f:C+1}))},j=function(e){S(d({step:C-1,pendingStep:f}))},D=function(e){return l.a.createElement("a",null,l.a.createElement(c.g,{color:C>=e?"primary":"mdb-color",circle:!0,onClick:A(e),disabled:f<e},C>e?l.a.createElement(c.u,{icon:"check"}):e))},A=function(e){return function(t){e<=f&&S(d({step:e,pendingStep:f}))}};Object(n.useEffect)(function(e){T(!0),S(m({jobRoleId:I.jobRoleId||0,jobTitle:I.jobTitle||"",companyName:I.companyName||"",startDate:I.startDate||(new Date).toDateString(),endDate:I.endDate||(new Date).toDateString(),isPresent:I.isPresent||0,jobLocationId:I.jobLocationId||0,companySectorId:I.companySectorId||0,companyIndustryId:I.companyIndustryId||0,jobVisaStatusId:I.jobVisaStatusId||0,careerLevel:I.careerLevel||0,degree:I.degree||"",university:I.university||"",majorId:I.majorId||"",graduatedDate:I.graduatedDate||"",gradeId:I.gradeId||"",birthday:O.birthday||(new Date).toDateString,gender:O.gender||"",nationalityId:O.nationalityId||5,countryId:O.countryId||5,cityId:O.cityId||5,countryCode:O.countryCode||E.h.USER.COUNTRY_CODE,phone:"".concat(O.countryCode).concat(O.phone),visaStatusId:O.visaStatusId||""})),T(!1)},[]);return l.a.createElement(n.Fragment,null,!!h&&l.a.createElement(s.a,null),!h&&l.a.createElement(n.Fragment,null,l.a.createElement(c.U,{form:!0},l.a.createElement(c.T,{form:!0},D(1),l.a.createElement("p",null,t("WORK.MY_ACCOUNT.MINIFIED_PROFILE.STEPS.POSITION"))),l.a.createElement(c.T,{form:!0},D(2),l.a.createElement("p",null,t("WORK.MY_ACCOUNT.MINIFIED_PROFILE.STEPS.JOB_KIND"))),l.a.createElement(c.T,{form:!0},D(3),l.a.createElement("p",null,t("WORK.MY_ACCOUNT.MINIFIED_PROFILE.STEPS.EDUCATION"))),l.a.createElement(c.T,{form:!0},D(4),l.a.createElement("p",null,t("WORK.MY_ACCOUNT.MINIFIED_PROFILE.STEPS.CONTACT")))),l.a.createElement(c.h,null,l.a.createElement(c.i,null,l.a.createElement(c.O,null,l.a.createElement(c.k,{md:"12"},1===C&&l.a.createElement(y,{onNext:v}),2===C&&l.a.createElement(R,{onPrev:j,onNext:v}),3===C&&l.a.createElement(L,{onPrev:j,onNext:v}),4===C&&l.a.createElement(x,{onPrev:j})))))))}),F=(a(787),a(431));t.default=function(e){var t=Object(r.b)().t;Object(n.useEffect)(function(e){},[e]);var a=t("WORK.MY_ACCOUNT.MINIFIED_PROFILE.PAGE_TITLE");return l.a.createElement(n.Fragment,null,l.a.createElement(F.Helmet,null,l.a.createElement("title",null,a," - ",t("SITE_NAME"))),l.a.createElement(c.e,null,l.a.createElement(c.f,null,t("NAVBAR.WORK.ACCOUNT.MY_ACCOUNT")),l.a.createElement(c.f,{active:!0},a)),l.a.createElement(k,null))}}}]);