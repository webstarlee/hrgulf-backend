(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{430:function(module,exports,__webpack_require__){(function(global){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!function(e,t){module.exports=t(e)}("undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof global?global:this,function(global){"use strict";global=global||{};var _Base64=global.Base64,version="2.5.2",buffer;if(module.exports)try{buffer=eval("require('buffer').Buffer")}catch(err){buffer=void 0}var b64chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",b64tab=function(e){for(var t={},r=0,n=e.length;r<n;r++)t[e.charAt(r)]=r;return t}(b64chars),fromCharCode=String.fromCharCode,cb_utob=function(e){if(e.length<2)return(t=e.charCodeAt(0))<128?e:t<2048?fromCharCode(192|t>>>6)+fromCharCode(128|63&t):fromCharCode(224|t>>>12&15)+fromCharCode(128|t>>>6&63)+fromCharCode(128|63&t);var t=65536+1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320);return fromCharCode(240|t>>>18&7)+fromCharCode(128|t>>>12&63)+fromCharCode(128|t>>>6&63)+fromCharCode(128|63&t)},re_utob=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,utob=function(e){return e.replace(re_utob,cb_utob)},cb_encode=function(e){var t=[0,2,1][e.length%3],r=e.charCodeAt(0)<<16|(e.length>1?e.charCodeAt(1):0)<<8|(e.length>2?e.charCodeAt(2):0);return[b64chars.charAt(r>>>18),b64chars.charAt(r>>>12&63),t>=2?"=":b64chars.charAt(r>>>6&63),t>=1?"=":b64chars.charAt(63&r)].join("")},btoa=global.btoa?function(e){return global.btoa(e)}:function(e){return e.replace(/[\s\S]{1,3}/g,cb_encode)},_encode=function(e){return"[object Uint8Array]"===Object.prototype.toString.call(e)?e.toString("base64"):btoa(utob(String(e)))},encode=function(e,t){return t?_encode(String(e)).replace(/[+\/]/g,function(e){return"+"==e?"-":"_"}).replace(/=/g,""):_encode(e)},encodeURI=function(e){return encode(e,!0)},re_btou=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,cb_btou=function(e){switch(e.length){case 4:var t=((7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3))-65536;return fromCharCode(55296+(t>>>10))+fromCharCode(56320+(1023&t));case 3:return fromCharCode((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return fromCharCode((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},btou=function(e){return e.replace(re_btou,cb_btou)},cb_decode=function(e){var t=e.length,r=t%4,n=(t>0?b64tab[e.charAt(0)]<<18:0)|(t>1?b64tab[e.charAt(1)]<<12:0)|(t>2?b64tab[e.charAt(2)]<<6:0)|(t>3?b64tab[e.charAt(3)]:0),o=[fromCharCode(n>>>16),fromCharCode(n>>>8&255),fromCharCode(255&n)];return o.length-=[0,0,2,1][r],o.join("")},_atob=global.atob?function(e){return global.atob(e)}:function(e){return e.replace(/\S{1,4}/g,cb_decode)},atob=function(e){return _atob(String(e).replace(/[^A-Za-z0-9\+\/]/g,""))},_decode=buffer?buffer.from&&Uint8Array&&buffer.from!==Uint8Array.from?function(e){return(e.constructor===buffer.constructor?e:buffer.from(e,"base64")).toString()}:function(e){return(e.constructor===buffer.constructor?e:new buffer(e,"base64")).toString()}:function(e){return btou(_atob(e))},decode=function(e){return _decode(String(e).replace(/[-_]/g,function(e){return"-"==e?"+":"/"}).replace(/[^A-Za-z0-9\+\/]/g,""))},noConflict=function(){var e=global.Base64;return global.Base64=_Base64,e};if(global.Base64={VERSION:version,atob:atob,btoa:btoa,fromBase64:decode,toBase64:encode,utob:utob,encode:encode,encodeURI:encodeURI,btou:btou,decode:decode,noConflict:noConflict,__buffer__:buffer},"function"===typeof Object.defineProperty){var noEnum=function(e){return{value:e,enumerable:!1,writable:!0,configurable:!0}};global.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",noEnum(function(){return decode(this)})),Object.defineProperty(String.prototype,"toBase64",noEnum(function(e){return encode(this,e)})),Object.defineProperty(String.prototype,"toBase64URI",noEnum(function(){return encode(this,!0)}))}}return global.Meteor&&(Base64=global.Base64),module.exports?module.exports.Base64=global.Base64:(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_RESULT__=function(){return global.Base64}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)),{Base64:global.Base64}})}).call(this,__webpack_require__(49))},492:function(e,t,r){var n;e.exports=function e(t,r,o){function i(a,f){if(!r[a]){if(!t[a]){var s="function"==typeof n&&n;if(!f&&s)return n(a,!0);if(u)return u(a,!0);throw new Error("Cannot find module '"+a+"'")}var c=r[a]={exports:{}};t[a][0].call(c.exports,function(e){var r=t[a][1][e];return i(r||e)},c,c.exports,e,t,r,o)}return r[a].exports}for(var u="function"==typeof n&&n,a=0;a<o.length;a++)i(o[a]);return i}({1:[function(e,t,r){(function(n,o,i,u,a,f,s,c,l){"use strict";var d=e("crypto");function h(e,t){return function(e,t){var r;if(void 0===(r="passthrough"!==t.algorithm?d.createHash(t.algorithm):new m).write&&(r.write=r.update,r.end=r.update),w(t,r).dispatch(e),r.update||r.end(""),r.digest)return r.digest("buffer"===t.encoding?void 0:t.encoding);var n=r.read();return"buffer"!==t.encoding?n.toString(t.encoding):n}(e,t=b(e,t))}(r=t.exports=h).sha1=function(e){return h(e)},r.keys=function(e){return h(e,{excludeValues:!0,algorithm:"sha1",encoding:"hex"})},r.MD5=function(e){return h(e,{algorithm:"md5",encoding:"hex"})},r.keysMD5=function(e){return h(e,{algorithm:"md5",encoding:"hex",excludeValues:!0})};var p=d.getHashes?d.getHashes().slice():["sha1","md5"];p.push("passthrough");var g=["buffer","hex","binary","base64"];function b(e,t){t=t||{};var r={};if(r.algorithm=t.algorithm||"sha1",r.encoding=t.encoding||"hex",r.excludeValues=!!t.excludeValues,r.algorithm=r.algorithm.toLowerCase(),r.encoding=r.encoding.toLowerCase(),r.ignoreUnknown=!0===t.ignoreUnknown,r.respectType=!1!==t.respectType,r.respectFunctionNames=!1!==t.respectFunctionNames,r.respectFunctionProperties=!1!==t.respectFunctionProperties,r.unorderedArrays=!0===t.unorderedArrays,r.unorderedSets=!1!==t.unorderedSets,r.unorderedObjects=!1!==t.unorderedObjects,r.replacer=t.replacer||void 0,r.excludeKeys=t.excludeKeys||void 0,void 0===e)throw new Error("Object argument required.");for(var n=0;n<p.length;++n)p[n].toLowerCase()===r.algorithm.toLowerCase()&&(r.algorithm=p[n]);if(-1===p.indexOf(r.algorithm))throw new Error('Algorithm "'+r.algorithm+'"  not supported. supported values: '+p.join(", "));if(-1===g.indexOf(r.encoding)&&"passthrough"!==r.algorithm)throw new Error('Encoding "'+r.encoding+'"  not supported. supported values: '+g.join(", "));return r}function y(e){return"function"==typeof e&&null!=/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(e))}function w(e,t,r){function n(e){return t.update?t.update(e,"utf8"):t.write(e,"utf8")}return r=r||[],{dispatch:function(t){e.replacer&&(t=e.replacer(t));var r=typeof t;return null===t&&(r="null"),this["_"+r](t)},_object:function(t){var o,u=Object.prototype.toString.call(t),a=/\[object (.*)\]/i.exec(u);if(a=(a=a?a[1]:"unknown:["+u+"]").toLowerCase(),0<=(o=r.indexOf(t)))return this.dispatch("[CIRCULAR:"+o+"]");if(r.push(t),void 0!==i&&i.isBuffer&&i.isBuffer(t))return n("buffer:"),n(t);if("object"===a||"function"===a||"asyncfunction"===a){var f=Object.keys(t);e.unorderedObjects&&(f=f.sort()),!1===e.respectType||y(t)||f.splice(0,0,"prototype","__proto__","constructor"),e.excludeKeys&&(f=f.filter(function(t){return!e.excludeKeys(t)})),n("object:"+f.length+":");var s=this;return f.forEach(function(r){s.dispatch(r),n(":"),e.excludeValues||s.dispatch(t[r]),n(",")})}if(!this["_"+a]){if(e.ignoreUnknown)return n("["+a+"]");throw new Error('Unknown object type "'+a+'"')}this["_"+a](t)},_array:function(t,o){o=void 0!==o?o:!1!==e.unorderedArrays;var i=this;if(n("array:"+t.length+":"),!o||t.length<=1)return t.forEach(function(e){return i.dispatch(e)});var u=[],a=t.map(function(t){var n=new m,o=r.slice();return w(e,n,o).dispatch(t),u=u.concat(o.slice(r.length)),n.read().toString()});return r=r.concat(u),a.sort(),this._array(a,!1)},_date:function(e){return n("date:"+e.toJSON())},_symbol:function(e){return n("symbol:"+e.toString())},_error:function(e){return n("error:"+e.toString())},_boolean:function(e){return n("bool:"+e.toString())},_string:function(e){n("string:"+e.length+":"),n(e.toString())},_function:function(t){n("fn:"),y(t)?this.dispatch("[native]"):this.dispatch(t.toString()),!1!==e.respectFunctionNames&&this.dispatch("function-name:"+String(t.name)),e.respectFunctionProperties&&this._object(t)},_number:function(e){return n("number:"+e.toString())},_xml:function(e){return n("xml:"+e.toString())},_null:function(){return n("Null")},_undefined:function(){return n("Undefined")},_regexp:function(e){return n("regex:"+e.toString())},_uint8array:function(e){return n("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint8clampedarray:function(e){return n("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},_int8array:function(e){return n("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint16array:function(e){return n("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},_int16array:function(e){return n("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},_uint32array:function(e){return n("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},_int32array:function(e){return n("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},_float32array:function(e){return n("float32array:"),this.dispatch(Array.prototype.slice.call(e))},_float64array:function(e){return n("float64array:"),this.dispatch(Array.prototype.slice.call(e))},_arraybuffer:function(e){return n("arraybuffer:"),this.dispatch(new Uint8Array(e))},_url:function(e){return n("url:"+e.toString())},_map:function(t){n("map:");var r=Array.from(t);return this._array(r,!1!==e.unorderedSets)},_set:function(t){n("set:");var r=Array.from(t);return this._array(r,!1!==e.unorderedSets)},_blob:function(){if(e.ignoreUnknown)return n("[blob]");throw Error('Hashing Blob objects is currently not supported\n(see https://github.com/puleos/object-hash/issues/26)\nUse "options.replacer" or "options.ignoreUnknown"\n')},_domwindow:function(){return n("domwindow")},_process:function(){return n("process")},_timer:function(){return n("timer")},_pipe:function(){return n("pipe")},_tcp:function(){return n("tcp")},_udp:function(){return n("udp")},_tty:function(){return n("tty")},_statwatcher:function(){return n("statwatcher")},_securecontext:function(){return n("securecontext")},_connection:function(){return n("connection")},_zlib:function(){return n("zlib")},_context:function(){return n("context")},_nodescript:function(){return n("nodescript")},_httpparser:function(){return n("httpparser")},_dataview:function(){return n("dataview")},_signal:function(){return n("signal")},_fsevent:function(){return n("fsevent")},_tlswrap:function(){return n("tlswrap")}}}function m(){return{buf:"",write:function(e){this.buf+=e},end:function(e){this.buf+=e},read:function(){return this.buf}}}r.writeToStream=function(e,t,r){return void 0===r&&(r=t,t={}),w(t=b(e,t),r).dispatch(e)}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_274613e1.js","/")},{buffer:3,crypto:5,lYpoI2:10}],2:[function(e,t,r){(function(e,t,n,o,i,u,a,f,s){!function(e){"use strict";var t="undefined"!=typeof Uint8Array?Uint8Array:Array,r="+".charCodeAt(0),n="/".charCodeAt(0),o="0".charCodeAt(0),i="a".charCodeAt(0),u="A".charCodeAt(0),a="-".charCodeAt(0),f="_".charCodeAt(0);function s(e){var t=e.charCodeAt(0);return t===r||t===a?62:t===n||t===f?63:t<o?-1:t<o+10?t-o+26+26:t<u+26?t-u:t<i+26?t-i+26:void 0}e.toByteArray=function(e){var r,n,o,i,u;if(0<e.length%4)throw new Error("Invalid string. Length must be a multiple of 4");var a=e.length;i="="===e.charAt(a-2)?2:"="===e.charAt(a-1)?1:0,u=new t(3*e.length/4-i),n=0<i?e.length-4:e.length;var f=0;function c(e){u[f++]=e}for(r=0;r<n;r+=4,3)c((16711680&(o=s(e.charAt(r))<<18|s(e.charAt(r+1))<<12|s(e.charAt(r+2))<<6|s(e.charAt(r+3))))>>16),c((65280&o)>>8),c(255&o);return 2==i?c(255&(o=s(e.charAt(r))<<2|s(e.charAt(r+1))>>4)):1==i&&(c((o=s(e.charAt(r))<<10|s(e.charAt(r+1))<<4|s(e.charAt(r+2))>>2)>>8&255),c(255&o)),u},e.fromByteArray=function(e){var t,r,n,o,i=e.length%3,u="";function a(e){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e)}for(t=0,n=e.length-i;t<n;t+=3)r=(e[t]<<16)+(e[t+1]<<8)+e[t+2],u+=a((o=r)>>18&63)+a(o>>12&63)+a(o>>6&63)+a(63&o);switch(i){case 1:u+=a((r=e[e.length-1])>>2),u+=a(r<<4&63),u+="==";break;case 2:u+=a((r=(e[e.length-2]<<8)+e[e.length-1])>>10),u+=a(r>>4&63),u+=a(r<<2&63),u+="="}return u}}(void 0===r?this.base64js={}:r)}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js","/node_modules/gulp-browserify/node_modules/base64-js/lib")},{buffer:3,lYpoI2:10}],3:[function(e,t,r){(function(t,n,o,i,u,a,f,s,c){var l=e("base64-js"),d=e("ieee754");function o(e,t,r){if(!(this instanceof o))return new o(e,t,r);var n,i,u,a=typeof e;if("base64"===t&&"string"==a)for(e=function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}(e);e.length%4!=0;)e+="=";if("number"==a)n=U(e);else if("string"==a)n=o.byteLength(e,t);else{if("object"!=a)throw new Error("First argument needs to be a number, array or string.");n=U(e.length)}if(o._useTypedArrays?i=o._augment(new Uint8Array(n)):((i=this).length=n,i._isBuffer=!0),o._useTypedArrays&&"number"==typeof e.byteLength)i._set(e);else if(function(e){return L(e)||o.isBuffer(e)||e&&"object"==typeof e&&"number"==typeof e.length}(e))for(u=0;u<n;u++)o.isBuffer(e)?i[u]=e.readUInt8(u):i[u]=e[u];else if("string"==a)i.write(e,0,t);else if("number"==a&&!o._useTypedArrays&&!r)for(u=0;u<n;u++)i[u]=0;return i}function h(e,t,r,n){return o._charsWritten=N(function(e){for(var t=[],r=0;r<e.length;r++)t.push(255&e.charCodeAt(r));return t}(t),e,r,n)}function p(e,t,r){var n="";r=Math.min(e.length,r);for(var o=t;o<r;o++)n+=String.fromCharCode(e[o]);return n}function g(e,t,r,n){n||(O("boolean"==typeof r,"missing or invalid endian"),O(null!=t,"missing offset"),O(t+1<e.length,"Trying to read beyond buffer length"));var o,i=e.length;if(!(i<=t))return r?(o=e[t],t+1<i&&(o|=e[t+1]<<8)):(o=e[t]<<8,t+1<i&&(o|=e[t+1])),o}function b(e,t,r,n){n||(O("boolean"==typeof r,"missing or invalid endian"),O(null!=t,"missing offset"),O(t+3<e.length,"Trying to read beyond buffer length"));var o,i=e.length;if(!(i<=t))return r?(t+2<i&&(o=e[t+2]<<16),t+1<i&&(o|=e[t+1]<<8),o|=e[t],t+3<i&&(o+=e[t+3]<<24>>>0)):(t+1<i&&(o=e[t+1]<<16),t+2<i&&(o|=e[t+2]<<8),t+3<i&&(o|=e[t+3]),o+=e[t]<<24>>>0),o}function y(e,t,r,n){if(n||(O("boolean"==typeof r,"missing or invalid endian"),O(null!=t,"missing offset"),O(t+1<e.length,"Trying to read beyond buffer length")),!(e.length<=t)){var o=g(e,t,r,!0);return 32768&o?-1*(65535-o+1):o}}function w(e,t,r,n){if(n||(O("boolean"==typeof r,"missing or invalid endian"),O(null!=t,"missing offset"),O(t+3<e.length,"Trying to read beyond buffer length")),!(e.length<=t)){var o=b(e,t,r,!0);return 2147483648&o?-1*(4294967295-o+1):o}}function m(e,t,r,n){return n||(O("boolean"==typeof r,"missing or invalid endian"),O(t+3<e.length,"Trying to read beyond buffer length")),d.read(e,t,r,23,4)}function _(e,t,r,n){return n||(O("boolean"==typeof r,"missing or invalid endian"),O(t+7<e.length,"Trying to read beyond buffer length")),d.read(e,t,r,52,8)}function v(e,t,r,n,o){o||(O(null!=t,"missing value"),O("boolean"==typeof n,"missing or invalid endian"),O(null!=r,"missing offset"),O(r+1<e.length,"trying to write beyond buffer length"),M(t,65535));var i=e.length;if(!(i<=r))for(var u=0,a=Math.min(i-r,2);u<a;u++)e[r+u]=(t&255<<8*(n?u:1-u))>>>8*(n?u:1-u)}function E(e,t,r,n,o){o||(O(null!=t,"missing value"),O("boolean"==typeof n,"missing or invalid endian"),O(null!=r,"missing offset"),O(r+3<e.length,"trying to write beyond buffer length"),M(t,4294967295));var i=e.length;if(!(i<=r))for(var u=0,a=Math.min(i-r,4);u<a;u++)e[r+u]=t>>>8*(n?u:3-u)&255}function A(e,t,r,n,o){o||(O(null!=t,"missing value"),O("boolean"==typeof n,"missing or invalid endian"),O(null!=r,"missing offset"),O(r+1<e.length,"Trying to write beyond buffer length"),T(t,32767,-32768)),e.length<=r||v(e,0<=t?t:65535+t+1,r,n,o)}function I(e,t,r,n,o){o||(O(null!=t,"missing value"),O("boolean"==typeof n,"missing or invalid endian"),O(null!=r,"missing offset"),O(r+3<e.length,"Trying to write beyond buffer length"),T(t,2147483647,-2147483648)),e.length<=r||E(e,0<=t?t:4294967295+t+1,r,n,o)}function B(e,t,r,n,o){o||(O(null!=t,"missing value"),O("boolean"==typeof n,"missing or invalid endian"),O(null!=r,"missing offset"),O(r+3<e.length,"Trying to write beyond buffer length"),Y(t,3.4028234663852886e38,-3.4028234663852886e38)),e.length<=r||d.write(e,t,r,n,23,4)}function C(e,t,r,n,o){o||(O(null!=t,"missing value"),O("boolean"==typeof n,"missing or invalid endian"),O(null!=r,"missing offset"),O(r+7<e.length,"Trying to write beyond buffer length"),Y(t,1.7976931348623157e308,-1.7976931348623157e308)),e.length<=r||d.write(e,t,r,n,52,8)}r.Buffer=o,r.SlowBuffer=o,r.INSPECT_MAX_BYTES=50,o.poolSize=8192,o._useTypedArrays=function(){try{var e=new ArrayBuffer(0),t=new Uint8Array(e);return t.foo=function(){return 42},42===t.foo()&&"function"==typeof t.subarray}catch(e){return!1}}(),o.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},o.isBuffer=function(e){return!(null==e||!e._isBuffer)},o.byteLength=function(e,t){var r;switch(e+="",t||"utf8"){case"hex":r=e.length/2;break;case"utf8":case"utf-8":r=F(e).length;break;case"ascii":case"binary":case"raw":r=e.length;break;case"base64":r=k(e).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":r=2*e.length;break;default:throw new Error("Unknown encoding")}return r},o.concat=function(e,t){if(O(L(e),"Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."),0===e.length)return new o(0);if(1===e.length)return e[0];var r;if("number"!=typeof t)for(r=t=0;r<e.length;r++)t+=e[r].length;var n=new o(t),i=0;for(r=0;r<e.length;r++){var u=e[r];u.copy(n,i),i+=u.length}return n},o.prototype.write=function(e,t,r,n){if(isFinite(t))isFinite(r)||(n=r,r=void 0);else{var i=n;n=t,t=r,r=i}t=Number(t)||0;var u,a=this.length-t;switch(r?a<(r=Number(r))&&(r=a):r=a,n=String(n||"utf8").toLowerCase()){case"hex":u=function(e,t,r,n){r=Number(r)||0;var i=e.length-r;n?i<(n=Number(n))&&(n=i):n=i;var u=t.length;O(u%2==0,"Invalid hex string"),u/2<n&&(n=u/2);for(var a=0;a<n;a++){var f=parseInt(t.substr(2*a,2),16);O(!isNaN(f),"Invalid hex string"),e[r+a]=f}return o._charsWritten=2*a,a}(this,e,t,r);break;case"utf8":case"utf-8":u=function(e,t,r,n){return o._charsWritten=N(F(t),e,r,n)}(this,e,t,r);break;case"ascii":u=h(this,e,t,r);break;case"binary":u=function(e,t,r,n){return h(e,t,r,n)}(this,e,t,r);break;case"base64":u=function(e,t,r,n){return o._charsWritten=N(k(t),e,r,n)}(this,e,t,r);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":u=function(e,t,r,n){return o._charsWritten=N(function(e){for(var t,r,n,o=[],i=0;i<e.length;i++)t=e.charCodeAt(i),r=t>>8,n=t%256,o.push(n),o.push(r);return o}(t),e,r,n)}(this,e,t,r);break;default:throw new Error("Unknown encoding")}return u},o.prototype.toString=function(e,t,r){var n,o=this;if(e=String(e||"utf8").toLowerCase(),t=Number(t)||0,(r=void 0!==r?Number(r):r=o.length)===t)return"";switch(e){case"hex":n=function(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||n<r)&&(r=n);for(var o="",i=t;i<r;i++)o+=j(e[i]);return o}(o,t,r);break;case"utf8":case"utf-8":n=function(e,t,r){var n="",o="";r=Math.min(e.length,r);for(var i=t;i<r;i++)e[i]<=127?(n+=D(o)+String.fromCharCode(e[i]),o=""):o+="%"+e[i].toString(16);return n+D(o)}(o,t,r);break;case"ascii":n=p(o,t,r);break;case"binary":n=function(e,t,r){return p(e,t,r)}(o,t,r);break;case"base64":n=function(e,t,r){return 0===t&&r===e.length?l.fromByteArray(e):l.fromByteArray(e.slice(t,r))}(o,t,r);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":n=function(e,t,r){for(var n=e.slice(t,r),o="",i=0;i<n.length;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}(o,t,r);break;default:throw new Error("Unknown encoding")}return n},o.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},o.prototype.copy=function(e,t,r,n){if(r=r||0,n||0===n||(n=this.length),t=t||0,n!==r&&0!==e.length&&0!==this.length){O(r<=n,"sourceEnd < sourceStart"),O(0<=t&&t<e.length,"targetStart out of bounds"),O(0<=r&&r<this.length,"sourceStart out of bounds"),O(0<=n&&n<=this.length,"sourceEnd out of bounds"),n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var i=n-r;if(i<100||!o._useTypedArrays)for(var u=0;u<i;u++)e[u+t]=this[u+r];else e._set(this.subarray(r,r+i),t)}},o.prototype.slice=function(e,t){var r=this.length;if(e=S(e,r,0),t=S(t,r,r),o._useTypedArrays)return o._augment(this.subarray(e,t));for(var n=t-e,i=new o(n,void 0,!0),u=0;u<n;u++)i[u]=this[u+e];return i},o.prototype.get=function(e){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(e)},o.prototype.set=function(e,t){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(e,t)},o.prototype.readUInt8=function(e,t){if(t||(O(null!=e,"missing offset"),O(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length))return this[e]},o.prototype.readUInt16LE=function(e,t){return g(this,e,!0,t)},o.prototype.readUInt16BE=function(e,t){return g(this,e,!1,t)},o.prototype.readUInt32LE=function(e,t){return b(this,e,!0,t)},o.prototype.readUInt32BE=function(e,t){return b(this,e,!1,t)},o.prototype.readInt8=function(e,t){if(t||(O(null!=e,"missing offset"),O(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length))return 128&this[e]?-1*(255-this[e]+1):this[e]},o.prototype.readInt16LE=function(e,t){return y(this,e,!0,t)},o.prototype.readInt16BE=function(e,t){return y(this,e,!1,t)},o.prototype.readInt32LE=function(e,t){return w(this,e,!0,t)},o.prototype.readInt32BE=function(e,t){return w(this,e,!1,t)},o.prototype.readFloatLE=function(e,t){return m(this,e,!0,t)},o.prototype.readFloatBE=function(e,t){return m(this,e,!1,t)},o.prototype.readDoubleLE=function(e,t){return _(this,e,!0,t)},o.prototype.readDoubleBE=function(e,t){return _(this,e,!1,t)},o.prototype.writeUInt8=function(e,t,r){r||(O(null!=e,"missing value"),O(null!=t,"missing offset"),O(t<this.length,"trying to write beyond buffer length"),M(e,255)),t>=this.length||(this[t]=e)},o.prototype.writeUInt16LE=function(e,t,r){v(this,e,t,!0,r)},o.prototype.writeUInt16BE=function(e,t,r){v(this,e,t,!1,r)},o.prototype.writeUInt32LE=function(e,t,r){E(this,e,t,!0,r)},o.prototype.writeUInt32BE=function(e,t,r){E(this,e,t,!1,r)},o.prototype.writeInt8=function(e,t,r){r||(O(null!=e,"missing value"),O(null!=t,"missing offset"),O(t<this.length,"Trying to write beyond buffer length"),T(e,127,-128)),t>=this.length||(0<=e?this.writeUInt8(e,t,r):this.writeUInt8(255+e+1,t,r))},o.prototype.writeInt16LE=function(e,t,r){A(this,e,t,!0,r)},o.prototype.writeInt16BE=function(e,t,r){A(this,e,t,!1,r)},o.prototype.writeInt32LE=function(e,t,r){I(this,e,t,!0,r)},o.prototype.writeInt32BE=function(e,t,r){I(this,e,t,!1,r)},o.prototype.writeFloatLE=function(e,t,r){B(this,e,t,!0,r)},o.prototype.writeFloatBE=function(e,t,r){B(this,e,t,!1,r)},o.prototype.writeDoubleLE=function(e,t,r){C(this,e,t,!0,r)},o.prototype.writeDoubleBE=function(e,t,r){C(this,e,t,!1,r)},o.prototype.fill=function(e,t,r){if(e=e||0,t=t||0,r=r||this.length,"string"==typeof e&&(e=e.charCodeAt(0)),O("number"==typeof e&&!isNaN(e),"value is not a number"),O(t<=r,"end < start"),r!==t&&0!==this.length){O(0<=t&&t<this.length,"start out of bounds"),O(0<=r&&r<=this.length,"end out of bounds");for(var n=t;n<r;n++)this[n]=e}},o.prototype.inspect=function(){for(var e=[],t=this.length,n=0;n<t;n++)if(e[n]=j(this[n]),n===r.INSPECT_MAX_BYTES){e[n+1]="...";break}return"<Buffer "+e.join(" ")+">"},o.prototype.toArrayBuffer=function(){if("undefined"==typeof Uint8Array)throw new Error("Buffer.toArrayBuffer not supported in this browser");if(o._useTypedArrays)return new o(this).buffer;for(var e=new Uint8Array(this.length),t=0,r=e.length;t<r;t+=1)e[t]=this[t];return e.buffer};var x=o.prototype;function S(e,t,r){return"number"!=typeof e?r:t<=(e=~~e)?t:0<=e?e:0<=(e+=t)?e:0}function U(e){return(e=~~Math.ceil(+e))<0?0:e}function L(e){return(Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)})(e)}function j(e){return e<16?"0"+e.toString(16):e.toString(16)}function F(e){for(var t=[],r=0;r<e.length;r++){var n=e.charCodeAt(r);if(n<=127)t.push(e.charCodeAt(r));else{var o=r;55296<=n&&n<=57343&&r++;for(var i=encodeURIComponent(e.slice(o,r+1)).substr(1).split("%"),u=0;u<i.length;u++)t.push(parseInt(i[u],16))}}return t}function k(e){return l.toByteArray(e)}function N(e,t,r,n){for(var o=0;o<n&&!(o+r>=t.length||o>=e.length);o++)t[o+r]=e[o];return o}function D(e){try{return decodeURIComponent(e)}catch(e){return String.fromCharCode(65533)}}function M(e,t){O("number"==typeof e,"cannot write a non-number as a number"),O(0<=e,"specified a negative value for writing an unsigned value"),O(e<=t,"value is larger than maximum value for type"),O(Math.floor(e)===e,"value has a fractional component")}function T(e,t,r){O("number"==typeof e,"cannot write a non-number as a number"),O(e<=t,"value larger than maximum allowed value"),O(r<=e,"value smaller than minimum allowed value"),O(Math.floor(e)===e,"value has a fractional component")}function Y(e,t,r){O("number"==typeof e,"cannot write a non-number as a number"),O(e<=t,"value larger than maximum allowed value"),O(r<=e,"value smaller than minimum allowed value")}function O(e,t){if(!e)throw new Error(t||"Failed assertion")}o._augment=function(e){return e._isBuffer=!0,e._get=e.get,e._set=e.set,e.get=x.get,e.set=x.set,e.write=x.write,e.toString=x.toString,e.toLocaleString=x.toString,e.toJSON=x.toJSON,e.copy=x.copy,e.slice=x.slice,e.readUInt8=x.readUInt8,e.readUInt16LE=x.readUInt16LE,e.readUInt16BE=x.readUInt16BE,e.readUInt32LE=x.readUInt32LE,e.readUInt32BE=x.readUInt32BE,e.readInt8=x.readInt8,e.readInt16LE=x.readInt16LE,e.readInt16BE=x.readInt16BE,e.readInt32LE=x.readInt32LE,e.readInt32BE=x.readInt32BE,e.readFloatLE=x.readFloatLE,e.readFloatBE=x.readFloatBE,e.readDoubleLE=x.readDoubleLE,e.readDoubleBE=x.readDoubleBE,e.writeUInt8=x.writeUInt8,e.writeUInt16LE=x.writeUInt16LE,e.writeUInt16BE=x.writeUInt16BE,e.writeUInt32LE=x.writeUInt32LE,e.writeUInt32BE=x.writeUInt32BE,e.writeInt8=x.writeInt8,e.writeInt16LE=x.writeInt16LE,e.writeInt16BE=x.writeInt16BE,e.writeInt32LE=x.writeInt32LE,e.writeInt32BE=x.writeInt32BE,e.writeFloatLE=x.writeFloatLE,e.writeFloatBE=x.writeFloatBE,e.writeDoubleLE=x.writeDoubleLE,e.writeDoubleBE=x.writeDoubleBE,e.fill=x.fill,e.inspect=x.inspect,e.toArrayBuffer=x.toArrayBuffer,e}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/buffer/index.js","/node_modules/gulp-browserify/node_modules/buffer")},{"base64-js":2,buffer:3,ieee754:11,lYpoI2:10}],4:[function(e,t,r){(function(r,n,o,i,u,a,f,s,c){var l=new(o=e("buffer").Buffer)(4);l.fill(0),t.exports={hash:function(e,t,r,n){return o.isBuffer(e)||(e=new o(e)),function(e,t,r){for(var n=new o(t),i=r?n.writeInt32BE:n.writeInt32LE,u=0;u<e.length;u++)i.call(n,e[u],4*u,!0);return n}(t(function(e,t){if(e.length%4!=0){var r=e.length+(4-e.length%4);e=o.concat([e,l],r)}for(var n=[],i=t?e.readInt32BE:e.readInt32LE,u=0;u<e.length;u+=4)n.push(i.call(e,u));return n}(e,n),8*e.length),r,n)}}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:10}],5:[function(e,t,r){(function(t,n,o,i,u,a,f,s,c){o=e("buffer").Buffer;var l=e("./sha"),d=e("./sha256"),h=e("./rng"),p={sha1:l,sha256:d,md5:e("./md5")},g=64,b=new o(g);function y(e,t){var r=p[e=e||"sha1"],n=[];return r||w("algorithm:",e,"is not yet supported"),{update:function(e){return o.isBuffer(e)||(e=new o(e)),n.push(e),e.length,this},digest:function(e){var i=o.concat(n),u=t?function(e,t,r){o.isBuffer(t)||(t=new o(t)),o.isBuffer(r)||(r=new o(r)),t.length>g?t=e(t):t.length<g&&(t=o.concat([t,b],g));for(var n=new o(g),i=new o(g),u=0;u<g;u++)n[u]=54^t[u],i[u]=92^t[u];var a=e(o.concat([n,r]));return e(o.concat([i,a]))}(r,t,i):r(i);return n=null,e?u.toString(e):u}}}function w(){var e=[].slice.call(arguments).join(" ");throw new Error([e,"we accept pull requests","http://github.com/dominictarr/crypto-browserify"].join("\n"))}b.fill(0),r.createHash=function(e){return y(e)},r.createHmac=function(e,t){return y(e,t)},r.randomBytes=function(e,t){if(!t||!t.call)return new o(h(e));try{t.call(this,void 0,new o(h(e)))}catch(e){t(e)}},function(e,t){for(var r in e)t(e[r])}(["createCredentials","createCipher","createCipheriv","createDecipher","createDecipheriv","createSign","createVerify","createDiffieHellman","pbkdf2"],function(e){r[e]=function(){w("sorry,",e,"is not implemented yet")}})}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,lYpoI2:10}],6:[function(e,t,r){(function(r,n,o,i,u,a,f,s,c){var l=e("./helpers");function d(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;for(var r=1732584193,n=-271733879,o=-1732584194,i=271733878,u=0;u<e.length;u+=16){var a=r,f=n,s=o,c=i;n=y(n=y(n=y(n=y(n=b(n=b(n=b(n=b(n=g(n=g(n=g(n=g(n=p(n=p(n=p(n=p(n,o=p(o,i=p(i,r=p(r,n,o,i,e[u+0],7,-680876936),n,o,e[u+1],12,-389564586),r,n,e[u+2],17,606105819),i,r,e[u+3],22,-1044525330),o=p(o,i=p(i,r=p(r,n,o,i,e[u+4],7,-176418897),n,o,e[u+5],12,1200080426),r,n,e[u+6],17,-1473231341),i,r,e[u+7],22,-45705983),o=p(o,i=p(i,r=p(r,n,o,i,e[u+8],7,1770035416),n,o,e[u+9],12,-1958414417),r,n,e[u+10],17,-42063),i,r,e[u+11],22,-1990404162),o=p(o,i=p(i,r=p(r,n,o,i,e[u+12],7,1804603682),n,o,e[u+13],12,-40341101),r,n,e[u+14],17,-1502002290),i,r,e[u+15],22,1236535329),o=g(o,i=g(i,r=g(r,n,o,i,e[u+1],5,-165796510),n,o,e[u+6],9,-1069501632),r,n,e[u+11],14,643717713),i,r,e[u+0],20,-373897302),o=g(o,i=g(i,r=g(r,n,o,i,e[u+5],5,-701558691),n,o,e[u+10],9,38016083),r,n,e[u+15],14,-660478335),i,r,e[u+4],20,-405537848),o=g(o,i=g(i,r=g(r,n,o,i,e[u+9],5,568446438),n,o,e[u+14],9,-1019803690),r,n,e[u+3],14,-187363961),i,r,e[u+8],20,1163531501),o=g(o,i=g(i,r=g(r,n,o,i,e[u+13],5,-1444681467),n,o,e[u+2],9,-51403784),r,n,e[u+7],14,1735328473),i,r,e[u+12],20,-1926607734),o=b(o,i=b(i,r=b(r,n,o,i,e[u+5],4,-378558),n,o,e[u+8],11,-2022574463),r,n,e[u+11],16,1839030562),i,r,e[u+14],23,-35309556),o=b(o,i=b(i,r=b(r,n,o,i,e[u+1],4,-1530992060),n,o,e[u+4],11,1272893353),r,n,e[u+7],16,-155497632),i,r,e[u+10],23,-1094730640),o=b(o,i=b(i,r=b(r,n,o,i,e[u+13],4,681279174),n,o,e[u+0],11,-358537222),r,n,e[u+3],16,-722521979),i,r,e[u+6],23,76029189),o=b(o,i=b(i,r=b(r,n,o,i,e[u+9],4,-640364487),n,o,e[u+12],11,-421815835),r,n,e[u+15],16,530742520),i,r,e[u+2],23,-995338651),o=y(o,i=y(i,r=y(r,n,o,i,e[u+0],6,-198630844),n,o,e[u+7],10,1126891415),r,n,e[u+14],15,-1416354905),i,r,e[u+5],21,-57434055),o=y(o,i=y(i,r=y(r,n,o,i,e[u+12],6,1700485571),n,o,e[u+3],10,-1894986606),r,n,e[u+10],15,-1051523),i,r,e[u+1],21,-2054922799),o=y(o,i=y(i,r=y(r,n,o,i,e[u+8],6,1873313359),n,o,e[u+15],10,-30611744),r,n,e[u+6],15,-1560198380),i,r,e[u+13],21,1309151649),o=y(o,i=y(i,r=y(r,n,o,i,e[u+4],6,-145523070),n,o,e[u+11],10,-1120210379),r,n,e[u+2],15,718787259),i,r,e[u+9],21,-343485551),r=w(r,a),n=w(n,f),o=w(o,s),i=w(i,c)}return Array(r,n,o,i)}function h(e,t,r,n,o,i){return w(function(e,t){return e<<t|e>>>NaN}(w(w(t,e),w(n,i)),o),r)}function p(e,t,r,n,o,i,u){return h(t&r|~t&n,e,t,o,i,u)}function g(e,t,r,n,o,i,u){return h(t&n|r&~n,e,t,o,i,u)}function b(e,t,r,n,o,i,u){return h(t^r^n,e,t,o,i,u)}function y(e,t,r,n,o,i,u){return h(r^(t|~n),e,t,o,i,u)}function w(e,t){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}t.exports=function(e){return l.hash(e,d,16)}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:10}],7:[function(e,t,r){(function(e,r,n,o,i,u,a,f,s){var c;c=function(e){for(var t,r=new Array(e),n=0;n<e;n++)0==(3&n)&&(t=4294967296*Math.random()),r[n]=t>>>((3&n)<<3)&255;return r},t.exports=c}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:10}],8:[function(e,t,r){(function(r,n,o,i,u,a,f,s,c){var l=e("./helpers");function d(e,t){e[t>>5]|=128<<24-t%32,e[15+(t+64>>9<<4)]=t;for(var r,n=Array(80),o=1732584193,i=-271733879,u=-1732584194,a=271733878,f=-1009589776,s=0;s<e.length;s+=16){for(var c=o,l=i,d=u,b=a,y=f,w=0;w<80;w++){n[w]=w<16?e[s+w]:g(n[w-3]^n[w-8]^n[w-14]^n[w-16],1);var m=p(p(g(o,5),h(w,i,u,a)),p(p(f,n[w]),(r=w)<20?1518500249:r<40?1859775393:r<60?-1894007588:-899497514));f=a,a=u,u=g(i,30),i=o,o=m}o=p(o,c),i=p(i,l),u=p(u,d),a=p(a,b),f=p(f,y)}return Array(o,i,u,a,f)}function h(e,t,r,n){return e<20?t&r|~t&n:e<40?t^r^n:e<60?t&r|t&n|r&n:t^r^n}function p(e,t){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}function g(e,t){return e<<t|e>>>32-t}t.exports=function(e){return l.hash(e,d,20,!0)}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:10}],9:[function(e,t,r){(function(r,n,o,i,u,a,f,s,c){function l(e,t){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}function d(e,t){return e>>>t|e<<32-t}function h(e,t){return e>>>t}function p(e,t){var r,n,o,i,u,a,f,s,c,p,g,b,y,w,m,_,v,E,A=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),I=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),B=new Array(64);e[t>>5]|=128<<24-t%32,e[15+(t+64>>9<<4)]=t;for(var C=0;C<e.length;C+=16){r=I[0],n=I[1],o=I[2],i=I[3],u=I[4],a=I[5],f=I[6],s=I[7];for(var x=0;x<64;x++)B[x]=x<16?e[x+C]:l(l(l(d(E=B[x-2],17)^d(E,19)^h(E,10),B[x-7]),d(v=B[x-15],7)^d(v,18)^h(v,3)),B[x-16]),c=l(l(l(l(s,d(_=u,6)^d(_,11)^d(_,25)),(m=u)&a^~m&f),A[x]),B[x]),p=l(d(w=r,2)^d(w,13)^d(w,22),(g=r)&(b=n)^g&(y=o)^b&y),s=f,f=a,a=u,u=l(i,c),i=o,o=n,n=r,r=l(c,p);I[0]=l(r,I[0]),I[1]=l(n,I[1]),I[2]=l(o,I[2]),I[3]=l(i,I[3]),I[4]=l(u,I[4]),I[5]=l(a,I[5]),I[6]=l(f,I[6]),I[7]=l(s,I[7])}return I}var g=e("./helpers");t.exports=function(e){return g.hash(e,p,32,!0)}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:10}],10:[function(e,t,r){(function(e,r,n,o,i,u,a,f,s){function c(){}(e=t.exports={}).nextTick=function(){var e="undefined"!=typeof window&&window.setImmediate,t="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(e)return function(e){return window.setImmediate(e)};if(t){var r=[];return window.addEventListener("message",function(e){var t=e.source;t!==window&&null!==t||"process-tick"!==e.data||(e.stopPropagation(),0<r.length&&r.shift()())},!0),function(e){r.push(e),window.postMessage("process-tick","*")}}return function(e){setTimeout(e,0)}}(),e.title="browser",e.browser=!0,e.env={},e.argv=[],e.on=c,e.addListener=c,e.once=c,e.off=c,e.removeListener=c,e.removeAllListeners=c,e.emit=c,e.binding=function(e){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(e){throw new Error("process.chdir is not supported")}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/process/browser.js","/node_modules/gulp-browserify/node_modules/process")},{buffer:3,lYpoI2:10}],11:[function(e,t,r){(function(e,t,n,o,i,u,a,f,s){r.read=function(e,t,r,n,o){var i,u,a=8*o-n-1,f=(1<<a)-1,s=f>>1,c=-7,l=r?o-1:0,d=r?-1:1,h=e[t+l];for(l+=d,i=h&(1<<-c)-1,h>>=-c,c+=a;0<c;i=256*i+e[t+l],l+=d,c-=8);for(u=i&(1<<-c)-1,i>>=-c,c+=n;0<c;u=256*u+e[t+l],l+=d,c-=8);if(0===i)i=1-s;else{if(i===f)return u?NaN:1/0*(h?-1:1);u+=Math.pow(2,n),i-=s}return(h?-1:1)*u*Math.pow(2,i-n)},r.write=function(e,t,r,n,o,i){var u,a,f,s=8*i-o-1,c=(1<<s)-1,l=c>>1,d=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,h=n?0:i-1,p=n?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,u=c):(u=Math.floor(Math.log(t)/Math.LN2),t*(f=Math.pow(2,-u))<1&&(u--,f*=2),2<=(t+=1<=u+l?d/f:d*Math.pow(2,1-l))*f&&(u++,f/=2),c<=u+l?(a=0,u=c):1<=u+l?(a=(t*f-1)*Math.pow(2,o),u+=l):(a=t*Math.pow(2,l-1)*Math.pow(2,o),u=0));8<=o;e[r+h]=255&a,h+=p,a/=256,o-=8);for(u=u<<o|a,s+=o;0<s;e[r+h]=255&u,h+=p,u/=256,s-=8);e[r+h-p]|=128*g}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/ieee754/index.js","/node_modules/ieee754")},{buffer:3,lYpoI2:10}]},{},[1])(1)}}]);