(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{436:function(module,exports,__webpack_require__){(function(global){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!function(e,t){module.exports=t(e)}("undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof global?global:this,function(global){"use strict";global=global||{};var _Base64=global.Base64,version="2.5.2",buffer;if(module.exports)try{buffer=eval("require('buffer').Buffer")}catch(err){buffer=void 0}var b64chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",b64tab=function(e){for(var t={},o=0,r=e.length;o<r;o++)t[e.charAt(o)]=o;return t}(b64chars),fromCharCode=String.fromCharCode,cb_utob=function(e){if(e.length<2)return(t=e.charCodeAt(0))<128?e:t<2048?fromCharCode(192|t>>>6)+fromCharCode(128|63&t):fromCharCode(224|t>>>12&15)+fromCharCode(128|t>>>6&63)+fromCharCode(128|63&t);var t=65536+1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320);return fromCharCode(240|t>>>18&7)+fromCharCode(128|t>>>12&63)+fromCharCode(128|t>>>6&63)+fromCharCode(128|63&t)},re_utob=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,utob=function(e){return e.replace(re_utob,cb_utob)},cb_encode=function(e){var t=[0,2,1][e.length%3],o=e.charCodeAt(0)<<16|(e.length>1?e.charCodeAt(1):0)<<8|(e.length>2?e.charCodeAt(2):0);return[b64chars.charAt(o>>>18),b64chars.charAt(o>>>12&63),t>=2?"=":b64chars.charAt(o>>>6&63),t>=1?"=":b64chars.charAt(63&o)].join("")},btoa=global.btoa?function(e){return global.btoa(e)}:function(e){return e.replace(/[\s\S]{1,3}/g,cb_encode)},_encode=function(e){return"[object Uint8Array]"===Object.prototype.toString.call(e)?e.toString("base64"):btoa(utob(String(e)))},encode=function(e,t){return t?_encode(String(e)).replace(/[+\/]/g,function(e){return"+"==e?"-":"_"}).replace(/=/g,""):_encode(e)},encodeURI=function(e){return encode(e,!0)},re_btou=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,cb_btou=function(e){switch(e.length){case 4:var t=((7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3))-65536;return fromCharCode(55296+(t>>>10))+fromCharCode(56320+(1023&t));case 3:return fromCharCode((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return fromCharCode((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},btou=function(e){return e.replace(re_btou,cb_btou)},cb_decode=function(e){var t=e.length,o=t%4,r=(t>0?b64tab[e.charAt(0)]<<18:0)|(t>1?b64tab[e.charAt(1)]<<12:0)|(t>2?b64tab[e.charAt(2)]<<6:0)|(t>3?b64tab[e.charAt(3)]:0),n=[fromCharCode(r>>>16),fromCharCode(r>>>8&255),fromCharCode(255&r)];return n.length-=[0,0,2,1][o],n.join("")},_atob=global.atob?function(e){return global.atob(e)}:function(e){return e.replace(/\S{1,4}/g,cb_decode)},atob=function(e){return _atob(String(e).replace(/[^A-Za-z0-9\+\/]/g,""))},_decode=buffer?buffer.from&&Uint8Array&&buffer.from!==Uint8Array.from?function(e){return(e.constructor===buffer.constructor?e:buffer.from(e,"base64")).toString()}:function(e){return(e.constructor===buffer.constructor?e:new buffer(e,"base64")).toString()}:function(e){return btou(_atob(e))},decode=function(e){return _decode(String(e).replace(/[-_]/g,function(e){return"-"==e?"+":"/"}).replace(/[^A-Za-z0-9\+\/]/g,""))},noConflict=function(){var e=global.Base64;return global.Base64=_Base64,e};if(global.Base64={VERSION:version,atob:atob,btoa:btoa,fromBase64:decode,toBase64:encode,utob:utob,encode:encode,encodeURI:encodeURI,btou:btou,decode:decode,noConflict:noConflict,__buffer__:buffer},"function"===typeof Object.defineProperty){var noEnum=function(e){return{value:e,enumerable:!1,writable:!0,configurable:!0}};global.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",noEnum(function(){return decode(this)})),Object.defineProperty(String.prototype,"toBase64",noEnum(function(e){return encode(this,e)})),Object.defineProperty(String.prototype,"toBase64URI",noEnum(function(){return encode(this,!0)}))}}return global.Meteor&&(Base64=global.Base64),module.exports?module.exports.Base64=global.Base64:(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_RESULT__=function(){return global.Base64}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)),{Base64:global.Base64}})}).call(this,__webpack_require__(50))},482:function(e,t,o){"use strict";var r=o(24),n=o(28),a=o(27);t.a={list:function(e){return new Promise(function(t,o){Object(r.a)(n.d,a.a.hire.myJobs.myJobs.list,e).then(function(e){t(e)},function(e){o(e)})})},get:function(e){return new Promise(function(t,o){Object(r.a)(n.d,a.a.hire.myJobs.myJobs.get,e).then(function(e){t(e)},function(e){o(e)})})},activate:function(e){return new Promise(function(t,o){Object(r.a)(n.d,a.a.hire.myJobs.myJobs.activate,e).then(function(e){t(e)},function(e){o(e)})})},delete:function(e){return new Promise(function(t,o){Object(r.a)(n.d,a.a.hire.myJobs.myJobs.delete,e).then(function(e){t(e)},function(e){o(e)})})}}},752:function(e,t,o){"use strict";o.r(t);var r=o(32),n=o(1),a=o.n(n),c=o(3),u=o(26),i=o(44),b=o(34),f=o(429),l=o(436),s=o(30),d=o(5),_=o(11),h=o(125),m=o(122),C=o(89),A=o(569),g=o(482);o(753);t.default=function(e){var t=Object(i.h)().params,o=Object(u.b)().t,p=Object(s.b)(),E=Object(n.useState)(!1),B=Object(r.a)(E,2),O=B[0],S=B[1],R=Object(n.useState)({}),y=Object(r.a)(R,2),J=y[0],I=y[1],v=o("HIRE.MY_JOBS.MY_JOBS.EDIT_JOB.PAGE_TITLE"),j="".concat(d.a.hire.myJobs.myJobs.main,"/").concat(J.page||1);Object(n.useEffect)(function(e){},[e]),Object(n.useMemo)(function(e){if(t)try{var o=l.Base64.decode(t),r=JSON.parse(o);I(r)}catch(e){}},[t,o]),Object(n.useMemo)(function(e){J.id&&(S(!0),g.a.get({id:J.id}).then(function(e){if(e.result===_.x.SUCCESS){var t=e.data,r=t.jobInformation,n=t.candidateRequirements;r&&n?(p(C.a.postAJob.resetAll()),p(C.a.postAJob.setJobInformation(r)),p(C.a.postAJob.setCandidateRequirements(n)),p(C.a.postAJob.setSpecialties({specialties:r.specialties&&r.specialties.split(",")})),p(C.a.postAJob.setQuestionnaire({questionnaireId:r.questionnaireId})),p(C.a.postAJob.setStep({step:1,pendingStep:4}))):m.b.error(o("COMMON.ERROR.NO_DATA"))}else m.b.error(e.message);S(!1)}).catch(function(e){m.b.error(o("COMMON.ERROR.UNKNOWN_SERVER_ERROR")),S(!1)}))},[J.id]);return a.a.createElement(n.Fragment,null,a.a.createElement(f.Helmet,null,a.a.createElement("title",null,v," - ",o("SITE_NAME"))),a.a.createElement(c.e,null,a.a.createElement(c.f,null,o("NAVBAR.HIRE.MY_JOBS.ROOT")),a.a.createElement(c.f,null,a.a.createElement(b.b,{to:j},o("NAVBAR.HIRE.MY_JOBS.MY_JOBS"))),a.a.createElement(c.f,{active:!0},v)),!!O&&a.a.createElement(h.a,{style:{height:_.q.LISTVIEW_HEIGHT}}),!O&&a.a.createElement(A.a,{backLink:d.a.hire.myJobs.myJobs.main}))}},753:function(e,t,o){}}]);