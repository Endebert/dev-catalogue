(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.activate = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
/**
* Copyright 2016 PT Inovação e Sistemas SA
* Copyright 2016 INESC-ID
* Copyright 2016 QUOBIS NETWORKS SL
* Copyright 2016 FRAUNHOFER-GESELLSCHAFT ZUR FOERDERUNG DER ANGEWANDTEN FORSCHUNG E.V
* Copyright 2016 ORANGE SA
* Copyright 2016 Deutsche Telekom AG
* Copyright 2016 Apizee
* Copyright 2016 TECHNISCHE UNIVERSITAT BERLIN
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
**/

// Distribution file for Discovery.js 
// version: 0.3.0
// Last build: Wed Jun 29 2016 18:18:29 GMT+0100 (WEST)

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.Discovery=e()}}(function(){return function e(t,r,n){function o(s,c){if(!r[s]){if(!t[s]){var u="function"==typeof require&&require;if(!c&&u)return u(s,!0);if(i)return i(s,!0);var a=new Error("Cannot find module '"+s+"'");throw a.code="MODULE_NOT_FOUND",a}var f=r[s]={exports:{}};t[s][0].call(f.exports,function(e){var r=t[s][1][e];return o(r?r:e)},f,f.exports,e,t,r,n)}return r[s].exports}for(var i="function"==typeof require&&require,s=0;s<n.length;s++)o(n[s]);return o}({1:[function(e,t,r){t.exports={"default":e("core-js/library/fn/json/stringify"),__esModule:!0}},{"core-js/library/fn/json/stringify":7}],2:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/define-property"),__esModule:!0}},{"core-js/library/fn/object/define-property":8}],3:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/keys"),__esModule:!0}},{"core-js/library/fn/object/keys":9}],4:[function(e,t,r){t.exports={"default":e("core-js/library/fn/promise"),__esModule:!0}},{"core-js/library/fn/promise":10}],5:[function(e,t,r){"use strict";r.__esModule=!0,r["default"]=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},{}],6:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}r.__esModule=!0;var o=e("../core-js/object/define-property"),i=n(o);r["default"]=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,i["default"])(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}()},{"../core-js/object/define-property":2}],7:[function(e,t,r){var n=e("../../modules/_core"),o=n.JSON||(n.JSON={stringify:JSON.stringify});t.exports=function(e){return o.stringify.apply(o,arguments)}},{"../../modules/_core":18}],8:[function(e,t,r){e("../../modules/es6.object.define-property");var n=e("../../modules/_core").Object;t.exports=function(e,t,r){return n.defineProperty(e,t,r)}},{"../../modules/_core":18,"../../modules/es6.object.define-property":74}],9:[function(e,t,r){e("../../modules/es6.object.keys"),t.exports=e("../../modules/_core").Object.keys},{"../../modules/_core":18,"../../modules/es6.object.keys":75}],10:[function(e,t,r){e("../modules/es6.object.to-string"),e("../modules/es6.string.iterator"),e("../modules/web.dom.iterable"),e("../modules/es6.promise"),t.exports=e("../modules/_core").Promise},{"../modules/_core":18,"../modules/es6.object.to-string":76,"../modules/es6.promise":77,"../modules/es6.string.iterator":78,"../modules/web.dom.iterable":79}],11:[function(e,t,r){t.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},{}],12:[function(e,t,r){t.exports=function(){}},{}],13:[function(e,t,r){t.exports=function(e,t,r,n){if(!(e instanceof t)||void 0!==n&&n in e)throw TypeError(r+": incorrect invocation!");return e}},{}],14:[function(e,t,r){var n=e("./_is-object");t.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},{"./_is-object":35}],15:[function(e,t,r){var n=e("./_to-iobject"),o=e("./_to-length"),i=e("./_to-index");t.exports=function(e){return function(t,r,s){var c,u=n(t),a=o(u.length),f=i(s,a);if(e&&r!=r){for(;a>f;)if(c=u[f++],c!=c)return!0}else for(;a>f;f++)if((e||f in u)&&u[f]===r)return e||f||0;return!e&&-1}}},{"./_to-index":64,"./_to-iobject":66,"./_to-length":67}],16:[function(e,t,r){var n=e("./_cof"),o=e("./_wks")("toStringTag"),i="Arguments"==n(function(){return arguments}()),s=function(e,t){try{return e[t]}catch(r){}};t.exports=function(e){var t,r,c;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=s(t=Object(e),o))?r:i?n(t):"Object"==(c=n(t))&&"function"==typeof t.callee?"Arguments":c}},{"./_cof":17,"./_wks":71}],17:[function(e,t,r){var n={}.toString;t.exports=function(e){return n.call(e).slice(8,-1)}},{}],18:[function(e,t,r){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},{}],19:[function(e,t,r){var n=e("./_a-function");t.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,o){return e.call(t,r,n,o)}}return function(){return e.apply(t,arguments)}}},{"./_a-function":11}],20:[function(e,t,r){t.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},{}],21:[function(e,t,r){t.exports=!e("./_fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},{"./_fails":25}],22:[function(e,t,r){var n=e("./_is-object"),o=e("./_global").document,i=n(o)&&n(o.createElement);t.exports=function(e){return i?o.createElement(e):{}}},{"./_global":27,"./_is-object":35}],23:[function(e,t,r){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},{}],24:[function(e,t,r){var n=e("./_global"),o=e("./_core"),i=e("./_ctx"),s=e("./_hide"),c="prototype",u=function(e,t,r){var a,f,_,l=e&u.F,d=e&u.G,p=e&u.S,v=e&u.P,y=e&u.B,h=e&u.W,b=d?o:o[t]||(o[t]={}),m=b[c],g=d?n:p?n[t]:(n[t]||{})[c];d&&(r=t);for(a in r)f=!l&&g&&void 0!==g[a],f&&a in b||(_=f?g[a]:r[a],b[a]=d&&"function"!=typeof g[a]?r[a]:y&&f?i(_,n):h&&g[a]==_?function(e){var t=function(t,r,n){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,r)}return new e(t,r,n)}return e.apply(this,arguments)};return t[c]=e[c],t}(_):v&&"function"==typeof _?i(Function.call,_):_,v&&((b.virtual||(b.virtual={}))[a]=_,e&u.R&&m&&!m[a]&&s(m,a,_)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},{"./_core":18,"./_ctx":19,"./_global":27,"./_hide":29}],25:[function(e,t,r){t.exports=function(e){try{return!!e()}catch(t){return!0}}},{}],26:[function(e,t,r){var n=e("./_ctx"),o=e("./_iter-call"),i=e("./_is-array-iter"),s=e("./_an-object"),c=e("./_to-length"),u=e("./core.get-iterator-method"),a={},f={},r=t.exports=function(e,t,r,_,l){var d,p,v,y,h=l?function(){return e}:u(e),b=n(r,_,t?2:1),m=0;if("function"!=typeof h)throw TypeError(e+" is not iterable!");if(i(h)){for(d=c(e.length);d>m;m++)if(y=t?b(s(p=e[m])[0],p[1]):b(e[m]),y===a||y===f)return y}else for(v=h.call(e);!(p=v.next()).done;)if(y=o(v,b,p.value,t),y===a||y===f)return y};r.BREAK=a,r.RETURN=f},{"./_an-object":14,"./_ctx":19,"./_is-array-iter":34,"./_iter-call":36,"./_to-length":67,"./core.get-iterator-method":72}],27:[function(e,t,r){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},{}],28:[function(e,t,r){var n={}.hasOwnProperty;t.exports=function(e,t){return n.call(e,t)}},{}],29:[function(e,t,r){var n=e("./_object-dp"),o=e("./_property-desc");t.exports=e("./_descriptors")?function(e,t,r){return n.f(e,t,o(1,r))}:function(e,t,r){return e[t]=r,e}},{"./_descriptors":21,"./_object-dp":45,"./_property-desc":53}],30:[function(e,t,r){t.exports=e("./_global").document&&document.documentElement},{"./_global":27}],31:[function(e,t,r){t.exports=!e("./_descriptors")&&!e("./_fails")(function(){return 7!=Object.defineProperty(e("./_dom-create")("div"),"a",{get:function(){return 7}}).a})},{"./_descriptors":21,"./_dom-create":22,"./_fails":25}],32:[function(e,t,r){t.exports=function(e,t,r){var n=void 0===r;switch(t.length){case 0:return n?e():e.call(r);case 1:return n?e(t[0]):e.call(r,t[0]);case 2:return n?e(t[0],t[1]):e.call(r,t[0],t[1]);case 3:return n?e(t[0],t[1],t[2]):e.call(r,t[0],t[1],t[2]);case 4:return n?e(t[0],t[1],t[2],t[3]):e.call(r,t[0],t[1],t[2],t[3])}return e.apply(r,t)}},{}],33:[function(e,t,r){var n=e("./_cof");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},{"./_cof":17}],34:[function(e,t,r){var n=e("./_iterators"),o=e("./_wks")("iterator"),i=Array.prototype;t.exports=function(e){return void 0!==e&&(n.Array===e||i[o]===e)}},{"./_iterators":41,"./_wks":71}],35:[function(e,t,r){t.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},{}],36:[function(e,t,r){var n=e("./_an-object");t.exports=function(e,t,r,o){try{return o?t(n(r)[0],r[1]):t(r)}catch(i){var s=e["return"];throw void 0!==s&&n(s.call(e)),i}}},{"./_an-object":14}],37:[function(e,t,r){"use strict";var n=e("./_object-create"),o=e("./_property-desc"),i=e("./_set-to-string-tag"),s={};e("./_hide")(s,e("./_wks")("iterator"),function(){return this}),t.exports=function(e,t,r){e.prototype=n(s,{next:o(1,r)}),i(e,t+" Iterator")}},{"./_hide":29,"./_object-create":44,"./_property-desc":53,"./_set-to-string-tag":58,"./_wks":71}],38:[function(e,t,r){"use strict";var n=e("./_library"),o=e("./_export"),i=e("./_redefine"),s=e("./_hide"),c=e("./_has"),u=e("./_iterators"),a=e("./_iter-create"),f=e("./_set-to-string-tag"),_=e("./_object-gpo"),l=e("./_wks")("iterator"),d=!([].keys&&"next"in[].keys()),p="@@iterator",v="keys",y="values",h=function(){return this};t.exports=function(e,t,r,b,m,g,j){a(r,t,b);var x,w,k,O=function(e){if(!d&&e in S)return S[e];switch(e){case v:return function(){return new r(this,e)};case y:return function(){return new r(this,e)}}return function(){return new r(this,e)}},M=t+" Iterator",P=m==y,U=!1,S=e.prototype,R=S[l]||S[p]||m&&S[m],E=R||O(m),L=m?P?O("entries"):E:void 0,T="Array"==t?S.entries||R:R;if(T&&(k=_(T.call(new e)),k!==Object.prototype&&(f(k,M,!0),n||c(k,l)||s(k,l,h))),P&&R&&R.name!==y&&(U=!0,E=function(){return R.call(this)}),n&&!j||!d&&!U&&S[l]||s(S,l,E),u[t]=E,u[M]=h,m)if(x={values:P?E:O(y),keys:g?E:O(v),entries:L},j)for(w in x)w in S||i(S,w,x[w]);else o(o.P+o.F*(d||U),t,x);return x}},{"./_export":24,"./_has":28,"./_hide":29,"./_iter-create":37,"./_iterators":41,"./_library":42,"./_object-gpo":48,"./_redefine":55,"./_set-to-string-tag":58,"./_wks":71}],39:[function(e,t,r){var n=e("./_wks")("iterator"),o=!1;try{var i=[7][n]();i["return"]=function(){o=!0},Array.from(i,function(){throw 2})}catch(s){}t.exports=function(e,t){if(!t&&!o)return!1;var r=!1;try{var i=[7],s=i[n]();s.next=function(){return{done:r=!0}},i[n]=function(){return s},e(i)}catch(c){}return r}},{"./_wks":71}],40:[function(e,t,r){t.exports=function(e,t){return{value:t,done:!!e}}},{}],41:[function(e,t,r){t.exports={}},{}],42:[function(e,t,r){t.exports=!0},{}],43:[function(e,t,r){var n=e("./_global"),o=e("./_task").set,i=n.MutationObserver||n.WebKitMutationObserver,s=n.process,c=n.Promise,u="process"==e("./_cof")(s);t.exports=function(){var e,t,r,a=function(){var n,o;for(u&&(n=s.domain)&&n.exit();e;){o=e.fn,e=e.next;try{o()}catch(i){throw e?r():t=void 0,i}}t=void 0,n&&n.enter()};if(u)r=function(){s.nextTick(a)};else if(i){var f=!0,_=document.createTextNode("");new i(a).observe(_,{characterData:!0}),r=function(){_.data=f=!f}}else if(c&&c.resolve){var l=c.resolve();r=function(){l.then(a)}}else r=function(){o.call(n,a)};return function(n){var o={fn:n,next:void 0};t&&(t.next=o),e||(e=o,r()),t=o}}},{"./_cof":17,"./_global":27,"./_task":63}],44:[function(e,t,r){var n=e("./_an-object"),o=e("./_object-dps"),i=e("./_enum-bug-keys"),s=e("./_shared-key")("IE_PROTO"),c=function(){},u="prototype",a=function(){var t,r=e("./_dom-create")("iframe"),n=i.length,o=">";for(r.style.display="none",e("./_html").appendChild(r),r.src="javascript:",t=r.contentWindow.document,t.open(),t.write("<script>document.F=Object</script"+o),t.close(),a=t.F;n--;)delete a[u][i[n]];return a()};t.exports=Object.create||function(e,t){var r;return null!==e?(c[u]=n(e),r=new c,c[u]=null,r[s]=e):r=a(),void 0===t?r:o(r,t)}},{"./_an-object":14,"./_dom-create":22,"./_enum-bug-keys":23,"./_html":30,"./_object-dps":46,"./_shared-key":59}],45:[function(e,t,r){var n=e("./_an-object"),o=e("./_ie8-dom-define"),i=e("./_to-primitive"),s=Object.defineProperty;r.f=e("./_descriptors")?Object.defineProperty:function(e,t,r){if(n(e),t=i(t,!0),n(r),o)try{return s(e,t,r)}catch(c){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e}},{"./_an-object":14,"./_descriptors":21,"./_ie8-dom-define":31,"./_to-primitive":69}],46:[function(e,t,r){var n=e("./_object-dp"),o=e("./_an-object"),i=e("./_object-keys");t.exports=e("./_descriptors")?Object.defineProperties:function(e,t){o(e);for(var r,s=i(t),c=s.length,u=0;c>u;)n.f(e,r=s[u++],t[r]);return e}},{"./_an-object":14,"./_descriptors":21,"./_object-dp":45,"./_object-keys":50}],47:[function(e,t,r){var n=e("./_object-pie"),o=e("./_property-desc"),i=e("./_to-iobject"),s=e("./_to-primitive"),c=e("./_has"),u=e("./_ie8-dom-define"),a=Object.getOwnPropertyDescriptor;r.f=e("./_descriptors")?a:function(e,t){if(e=i(e),t=s(t,!0),u)try{return a(e,t)}catch(r){}if(c(e,t))return o(!n.f.call(e,t),e[t])}},{"./_descriptors":21,"./_has":28,"./_ie8-dom-define":31,"./_object-pie":51,"./_property-desc":53,"./_to-iobject":66,"./_to-primitive":69}],48:[function(e,t,r){var n=e("./_has"),o=e("./_to-object"),i=e("./_shared-key")("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(e){return e=o(e),n(e,i)?e[i]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?s:null}},{"./_has":28,"./_shared-key":59,"./_to-object":68}],49:[function(e,t,r){var n=e("./_has"),o=e("./_to-iobject"),i=e("./_array-includes")(!1),s=e("./_shared-key")("IE_PROTO");t.exports=function(e,t){var r,c=o(e),u=0,a=[];for(r in c)r!=s&&n(c,r)&&a.push(r);for(;t.length>u;)n(c,r=t[u++])&&(~i(a,r)||a.push(r));return a}},{"./_array-includes":15,"./_has":28,"./_shared-key":59,"./_to-iobject":66}],50:[function(e,t,r){var n=e("./_object-keys-internal"),o=e("./_enum-bug-keys");t.exports=Object.keys||function(e){return n(e,o)}},{"./_enum-bug-keys":23,"./_object-keys-internal":49}],51:[function(e,t,r){r.f={}.propertyIsEnumerable},{}],52:[function(e,t,r){var n=e("./_export"),o=e("./_core"),i=e("./_fails");t.exports=function(e,t){var r=(o.Object||{})[e]||Object[e],s={};s[e]=t(r),n(n.S+n.F*i(function(){r(1)}),"Object",s)}},{"./_core":18,"./_export":24,"./_fails":25}],53:[function(e,t,r){t.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},{}],54:[function(e,t,r){var n=e("./_hide");t.exports=function(e,t,r){for(var o in t)r&&e[o]?e[o]=t[o]:n(e,o,t[o]);return e}},{"./_hide":29}],55:[function(e,t,r){t.exports=e("./_hide")},{"./_hide":29}],56:[function(e,t,r){var n=e("./_is-object"),o=e("./_an-object"),i=function(e,t){if(o(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,r,n){try{n=e("./_ctx")(Function.call,e("./_object-gopd").f(Object.prototype,"__proto__").set,2),n(t,[]),r=!(t instanceof Array)}catch(o){r=!0}return function(e,t){return i(e,t),r?e.__proto__=t:n(e,t),e}}({},!1):void 0),check:i}},{"./_an-object":14,"./_ctx":19,"./_is-object":35,"./_object-gopd":47}],57:[function(e,t,r){"use strict";var n=e("./_global"),o=e("./_core"),i=e("./_object-dp"),s=e("./_descriptors"),c=e("./_wks")("species");t.exports=function(e){var t="function"==typeof o[e]?o[e]:n[e];s&&t&&!t[c]&&i.f(t,c,{configurable:!0,get:function(){return this}})}},{"./_core":18,"./_descriptors":21,"./_global":27,"./_object-dp":45,"./_wks":71}],58:[function(e,t,r){var n=e("./_object-dp").f,o=e("./_has"),i=e("./_wks")("toStringTag");t.exports=function(e,t,r){e&&!o(e=r?e:e.prototype,i)&&n(e,i,{configurable:!0,value:t})}},{"./_has":28,"./_object-dp":45,"./_wks":71}],59:[function(e,t,r){var n=e("./_shared")("keys"),o=e("./_uid");t.exports=function(e){return n[e]||(n[e]=o(e))}},{"./_shared":60,"./_uid":70}],60:[function(e,t,r){var n=e("./_global"),o="__core-js_shared__",i=n[o]||(n[o]={});t.exports=function(e){return i[e]||(i[e]={})}},{"./_global":27}],61:[function(e,t,r){var n=e("./_an-object"),o=e("./_a-function"),i=e("./_wks")("species");t.exports=function(e,t){var r,s=n(e).constructor;return void 0===s||void 0==(r=n(s)[i])?t:o(r)}},{"./_a-function":11,"./_an-object":14,"./_wks":71}],62:[function(e,t,r){var n=e("./_to-integer"),o=e("./_defined");t.exports=function(e){return function(t,r){var i,s,c=String(o(t)),u=n(r),a=c.length;return u<0||u>=a?e?"":void 0:(i=c.charCodeAt(u),i<55296||i>56319||u+1===a||(s=c.charCodeAt(u+1))<56320||s>57343?e?c.charAt(u):i:e?c.slice(u,u+2):(i-55296<<10)+(s-56320)+65536)}}},{"./_defined":20,"./_to-integer":65}],63:[function(e,t,r){var n,o,i,s=e("./_ctx"),c=e("./_invoke"),u=e("./_html"),a=e("./_dom-create"),f=e("./_global"),_=f.process,l=f.setImmediate,d=f.clearImmediate,p=f.MessageChannel,v=0,y={},h="onreadystatechange",b=function(){var e=+this;if(y.hasOwnProperty(e)){var t=y[e];delete y[e],t()}},m=function(e){b.call(e.data)};l&&d||(l=function(e){for(var t=[],r=1;arguments.length>r;)t.push(arguments[r++]);return y[++v]=function(){c("function"==typeof e?e:Function(e),t)},n(v),v},d=function(e){delete y[e]},"process"==e("./_cof")(_)?n=function(e){_.nextTick(s(b,e,1))}:p?(o=new p,i=o.port2,o.port1.onmessage=m,n=s(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(n=function(e){f.postMessage(e+"","*")},f.addEventListener("message",m,!1)):n=h in a("script")?function(e){u.appendChild(a("script"))[h]=function(){u.removeChild(this),b.call(e)}}:function(e){setTimeout(s(b,e,1),0)}),t.exports={set:l,clear:d}},{"./_cof":17,"./_ctx":19,"./_dom-create":22,"./_global":27,"./_html":30,"./_invoke":32}],64:[function(e,t,r){var n=e("./_to-integer"),o=Math.max,i=Math.min;t.exports=function(e,t){return e=n(e),e<0?o(e+t,0):i(e,t)}},{"./_to-integer":65}],65:[function(e,t,r){var n=Math.ceil,o=Math.floor;t.exports=function(e){return isNaN(e=+e)?0:(e>0?o:n)(e)}},{}],66:[function(e,t,r){var n=e("./_iobject"),o=e("./_defined");t.exports=function(e){return n(o(e))}},{"./_defined":20,"./_iobject":33}],67:[function(e,t,r){var n=e("./_to-integer"),o=Math.min;t.exports=function(e){return e>0?o(n(e),9007199254740991):0}},{"./_to-integer":65}],68:[function(e,t,r){var n=e("./_defined");t.exports=function(e){return Object(n(e))}},{"./_defined":20}],69:[function(e,t,r){var n=e("./_is-object");t.exports=function(e,t){if(!n(e))return e;var r,o;if(t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;if("function"==typeof(r=e.valueOf)&&!n(o=r.call(e)))return o;if(!t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},{"./_is-object":35}],70:[function(e,t,r){var n=0,o=Math.random();t.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+o).toString(36))}},{}],71:[function(e,t,r){var n=e("./_shared")("wks"),o=e("./_uid"),i=e("./_global").Symbol,s="function"==typeof i,c=t.exports=function(e){return n[e]||(n[e]=s&&i[e]||(s?i:o)("Symbol."+e))};c.store=n},{"./_global":27,"./_shared":60,"./_uid":70}],72:[function(e,t,r){var n=e("./_classof"),o=e("./_wks")("iterator"),i=e("./_iterators");t.exports=e("./_core").getIteratorMethod=function(e){if(void 0!=e)return e[o]||e["@@iterator"]||i[n(e)]}},{"./_classof":16,"./_core":18,"./_iterators":41,"./_wks":71}],73:[function(e,t,r){"use strict";var n=e("./_add-to-unscopables"),o=e("./_iter-step"),i=e("./_iterators"),s=e("./_to-iobject");t.exports=e("./_iter-define")(Array,"Array",function(e,t){this._t=s(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,r=this._i++;return!e||r>=e.length?(this._t=void 0,o(1)):"keys"==t?o(0,r):"values"==t?o(0,e[r]):o(0,[r,e[r]])},"values"),i.Arguments=i.Array,n("keys"),n("values"),n("entries")},{"./_add-to-unscopables":12,"./_iter-define":38,"./_iter-step":40,"./_iterators":41,"./_to-iobject":66}],74:[function(e,t,r){var n=e("./_export");n(n.S+n.F*!e("./_descriptors"),"Object",{defineProperty:e("./_object-dp").f})},{"./_descriptors":21,"./_export":24,"./_object-dp":45}],75:[function(e,t,r){var n=e("./_to-object"),o=e("./_object-keys");e("./_object-sap")("keys",function(){return function(e){return o(n(e))}})},{"./_object-keys":50,"./_object-sap":52,"./_to-object":68}],76:[function(e,t,r){},{}],77:[function(e,t,r){"use strict";var n,o,i,s=e("./_library"),c=e("./_global"),u=e("./_ctx"),a=e("./_classof"),f=e("./_export"),_=e("./_is-object"),l=(e("./_an-object"),e("./_a-function")),d=e("./_an-instance"),p=e("./_for-of"),v=(e("./_set-proto").set,e("./_species-constructor")),y=e("./_task").set,h=e("./_microtask")(),b="Promise",m=c.TypeError,g=c.process,j=c[b],g=c.process,x="process"==a(g),w=function(){},k=!!function(){try{var t=j.resolve(1),r=(t.constructor={})[e("./_wks")("species")]=function(e){e(w,w)};return(x||"function"==typeof PromiseRejectionEvent)&&t.then(w)instanceof r}catch(n){}}(),O=function(e,t){return e===t||e===j&&t===i},M=function(e){var t;return!(!_(e)||"function"!=typeof(t=e.then))&&t},P=function(e){return O(j,e)?new U(e):new o(e)},U=o=function(e){var t,r;this.promise=new e(function(e,n){if(void 0!==t||void 0!==r)throw m("Bad Promise constructor");t=e,r=n}),this.resolve=l(t),this.reject=l(r)},S=function(e){try{e()}catch(t){return{error:t}}},R=function(e,t){if(!e._n){e._n=!0;var r=e._c;h(function(){for(var n=e._v,o=1==e._s,i=0,s=function(t){var r,i,s=o?t.ok:t.fail,c=t.resolve,u=t.reject,a=t.domain;try{s?(o||(2==e._h&&T(e),e._h=1),s===!0?r=n:(a&&a.enter(),r=s(n),a&&a.exit()),r===t.promise?u(m("Promise-chain cycle")):(i=M(r))?i.call(r,c,u):c(r)):u(n)}catch(f){u(f)}};r.length>i;)s(r[i++]);e._c=[],e._n=!1,t&&!e._h&&E(e)})}},E=function(e){y.call(c,function(){var t,r,n,o=e._v;if(L(e)&&(t=S(function(){x?g.emit("unhandledRejection",o,e):(r=c.onunhandledrejection)?r({promise:e,reason:o}):(n=c.console)&&n.error&&n.error("Unhandled promise rejection",o)}),e._h=x||L(e)?2:1),e._a=void 0,t)throw t.error})},L=function(e){if(1==e._h)return!1;for(var t,r=e._a||e._c,n=0;r.length>n;)if(t=r[n++],t.fail||!L(t.promise))return!1;return!0},T=function(e){y.call(c,function(){var t;x?g.emit("rejectionHandled",e):(t=c.onrejectionhandled)&&t({promise:e,reason:e._v})})},A=function(e){var t=this;t._d||(t._d=!0,t=t._w||t,t._v=e,t._s=2,t._a||(t._a=t._c.slice()),R(t,!0))},C=function(e){var t,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===e)throw m("Promise can't be resolved itself");(t=M(e))?h(function(){var n={_w:r,_d:!1};try{t.call(e,u(C,n,1),u(A,n,1))}catch(o){A.call(n,o)}}):(r._v=e,r._s=1,R(r,!1))}catch(n){A.call({_w:r,_d:!1},n)}}};k||(j=function(e){d(this,j,b,"_h"),l(e),n.call(this);try{e(u(C,this,1),u(A,this,1))}catch(t){A.call(this,t)}},n=function(e){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},n.prototype=e("./_redefine-all")(j.prototype,{then:function(e,t){var r=P(v(this,j));return r.ok="function"!=typeof e||e,r.fail="function"==typeof t&&t,r.domain=x?g.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&R(this,!1),r.promise},"catch":function(e){return this.then(void 0,e)}}),U=function(){var e=new n;this.promise=e,this.resolve=u(C,e,1),this.reject=u(A,e,1)}),f(f.G+f.W+f.F*!k,{Promise:j}),e("./_set-to-string-tag")(j,b),e("./_set-species")(b),i=e("./_core")[b],f(f.S+f.F*!k,b,{reject:function(e){var t=P(this),r=t.reject;return r(e),t.promise}}),f(f.S+f.F*(s||!k),b,{resolve:function(e){if(e instanceof j&&O(e.constructor,this))return e;var t=P(this),r=t.resolve;return r(e),t.promise}}),f(f.S+f.F*!(k&&e("./_iter-detect")(function(e){j.all(e)["catch"](w)})),b,{all:function(e){var t=this,r=P(t),n=r.resolve,o=r.reject,i=S(function(){var r=[],i=0,s=1;p(e,!1,function(e){var c=i++,u=!1;r.push(void 0),s++,t.resolve(e).then(function(e){u||(u=!0,r[c]=e,--s||n(r))},o)}),--s||n(r)});return i&&o(i.error),r.promise},race:function(e){var t=this,r=P(t),n=r.reject,o=S(function(){p(e,!1,function(e){t.resolve(e).then(r.resolve,n)})});return o&&n(o.error),r.promise}})},{"./_a-function":11,"./_an-instance":13,"./_an-object":14,"./_classof":16,"./_core":18,"./_ctx":19,"./_export":24,"./_for-of":26,"./_global":27,"./_is-object":35,"./_iter-detect":39,"./_library":42,"./_microtask":43,"./_redefine-all":54,"./_set-proto":56,"./_set-species":57,"./_set-to-string-tag":58,"./_species-constructor":61,"./_task":63,"./_wks":71}],78:[function(e,t,r){"use strict";var n=e("./_string-at")(!0);e("./_iter-define")(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,r=this._i;return r>=t.length?{value:void 0,done:!0}:(e=n(t,r),this._i+=e.length,{value:e,done:!1})})},{"./_iter-define":38,"./_string-at":62}],79:[function(e,t,r){e("./es6.array.iterator");for(var n=e("./_global"),o=e("./_hide"),i=e("./_iterators"),s=e("./_wks")("toStringTag"),c=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],u=0;u<5;u++){var a=c[u],f=n[a],_=f&&f.prototype;_&&!_[s]&&o(_,s,a),i[a]=i.Array}},{"./_global":27,"./_hide":29,"./_iterators":41,"./_wks":71,"./es6.array.iterator":73}],80:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var o=e("babel-runtime/core-js/promise"),i=n(o),s=e("babel-runtime/helpers/classCallCheck"),c=n(s),u=e("babel-runtime/helpers/createClass"),a=n(u),f=e("../utils/utils"),_=function(){function e(t,r){(0,c["default"])(this,e);var n=this;n.messageBus=r,n.domain=(0,f.divideURL)(t).domain,n.discoveryURL=t}return(0,a["default"])(e,[{key:"discoverDataObjectPerURL",value:function(e,t){var r=this,n=void 0;n=t?t:r.domain;var o={type:"read",from:r.discoveryURL,to:"domain://registry."+n+"/",body:{resource:e,search:"dataObjectPerURL"}};return new i["default"](function(e,t){r.messageBus.postMessage(o,function(r){var n=r.body.value;n?e(n):t("DataObject not found")})})}},{key:"deleteDataObject",value:function(e,t){var r=this,n=void 0;n=t?t:r.domain;var o={type:"delete",from:r.discoveryURL,to:"domain://registry."+n+"/",body:{value:{name:e}}};return new i["default"](function(e,t){r.messageBus.postMessage(o,function(r){var n=r.body.code;200===n?e(n):t("Error on deleting dataObject")})})}},{key:"discoverDataObjectPerReporter",value:function(e,t){var r=this,n=void 0;n=t?t:r.domain;var o={type:"read",from:r.discoveryURL,to:"domain://registry."+n+"/",body:{resource:e,search:"dataObjectPerReporter"}};return new i["default"](function(e,t){r.messageBus.postMessage(o,function(r){var n=r.body.value;n?e(n):t("No dataObject was found")})})}},{key:"discoverHyperty",value:function(e,t,r,n){var o=this,s=void 0,c=(0,f.convertToUserURL)(e);s=n?n:o.domain;var u={type:"read",from:o.discoveryURL,to:"domain://registry."+s+"/",body:{resource:{user:c,resources:r,dataSchemes:t},search:"hypertyResourcesDataSchemes"}};return new i["default"](function(e,t){o.messageBus.postMessage(u,function(r){var n=r.body.value;n?e(n):t("No Hyperty was found")})})}},{key:"discoverHypertyPerUser",value:function(e,t){var r=this,n=void 0;n=t?t:r.domain;var o="user://"+e.substring(e.indexOf("@")+1,e.length)+"/"+e.substring(0,e.indexOf("@")),s={type:"read",from:r.discoveryURL,to:"domain://registry."+n+"/",body:{resource:o,search:"HypertyPerUser"}};return console.log("Message: ",s,n,o),new i["default"](function(t,n){r.messageBus.postMessage(s,function(r){console.log("message reply",r);var o=void 0,i=void 0,s=void 0,c=r.body.value;for(o in c)if(void 0!==c[o].lastModified)if(void 0===i)i=new Date(c[o].lastModified),s=o;else{var u=new Date(c[o].lastModified);i.getTime()<u.getTime()&&(i=u,s=o)}console.log("Last Hyperty: ",s,i);var a=s;if(void 0===a)return n("User Hyperty not found");var f={id:e,descriptor:c[a].descriptor,hypertyURL:a};console.log("===> hypertyDiscovery messageBundle: ",f),t(f)})})}},{key:"discoverHypertiesPerUser",value:function(e,t){var r=this,n=void 0;n=t?t:r.domain;var o="user://"+e.substring(e.indexOf("@")+1,e.length)+"/"+e.substring(0,e.indexOf("@")),s={type:"read",from:r.discoveryURL,to:"domain://registry."+n+"/",body:{resource:o,search:"HypertyPerUser"}};return console.log("Message discoverHypertiesPerUser: ",s,n,o),new i["default"](function(e,t){r.messageBus.postMessage(s,function(r){console.log("discoverHypertiesPerUser reply",r);var n=r.body.value;return n?void e(n):t("User Hyperty not found")})})}},{key:"deleteHyperty",value:function(e,t,r){var n=this,o=void 0;o=r?r:n.domain;var s={type:"delete",from:n.discoveryURL,to:"domain://registry."+o+"/",body:{value:{user:e,hypertyURL:t}}};return new i["default"](function(e,t){n.messageBus.postMessage(s,function(r){var n=r.body.code;n?e("Hyperty successfully deleted"):t("Error on deleting hyperty")})})}}]),e}();r["default"]=_,t.exports=r["default"]},{"../utils/utils":81,"babel-runtime/core-js/promise":4,"babel-runtime/helpers/classCallCheck":5,"babel-runtime/helpers/createClass":6}],81:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(!e)throw Error("URL is needed to split");var t=/([a-zA-Z-]*):\/\/(?:\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256})([-a-zA-Z0-9@:%._\+~#=\/]*)/gi,r="$1,$2,$3",n=e.replace(t,r).split(",");n[0]===e&&(n[0]="https",n[1]=e);var o={type:n[0],domain:n[1],identity:n[2]};return o}function i(e){var t=e.indexOf("@"),r={username:e.substring(0,t),domain:e.substring(t+1,e.length)};return r}function s(e){return!((0,p["default"])(e).length>0)}function c(e){if(e)return JSON.parse((0,l["default"])(e))}function u(e){var t=e.indexOf("@");return"user://"+e.substring(t+1,e.length)+"/"+e.substring(0,t)}function a(e){var t=o(e);return t.identity.replace("/","")+"@"+t.domain}function f(e){if("user://"===e.substring(0,7)){var t=o(e);if(t.domain&&t.identity)return e;throw"userURL with wrong format"}return u(e)}Object.defineProperty(r,"__esModule",{value:!0});var _=e("babel-runtime/core-js/json/stringify"),l=n(_),d=e("babel-runtime/core-js/object/keys"),p=n(d);r.divideURL=o,r.divideEmail=i,r.emptyObject=s,r.deepClone=c,r.getUserURLFromEmail=u,r.getUserEmailFromURL=a,r.convertToUserURL=f},{"babel-runtime/core-js/json/stringify":1,"babel-runtime/core-js/object/keys":3}]},{},[80])(80)});


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
(function (global){
/**
* Copyright 2016 PT Inovação e Sistemas SA
* Copyright 2016 INESC-ID
* Copyright 2016 QUOBIS NETWORKS SL
* Copyright 2016 FRAUNHOFER-GESELLSCHAFT ZUR FOERDERUNG DER ANGEWANDTEN FORSCHUNG E.V
* Copyright 2016 ORANGE SA
* Copyright 2016 Deutsche Telekom AG
* Copyright 2016 Apizee
* Copyright 2016 TECHNISCHE UNIVERSITAT BERLIN
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
**/

// Distribution file for IdentityManager.js 
// version: 0.3.0
// Last build: Wed Jun 29 2016 18:18:30 GMT+0100 (WEST)

!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.IdentityManager=t()}}(function(){return function t(e,r,n){function o(c,s){if(!r[c]){if(!e[c]){var u="function"==typeof require&&require;if(!s&&u)return u(c,!0);if(i)return i(c,!0);var a=new Error("Cannot find module '"+c+"'");throw a.code="MODULE_NOT_FOUND",a}var f=r[c]={exports:{}};e[c][0].call(f.exports,function(t){var r=e[c][1][t];return o(r?r:t)},f,f.exports,t,e,r,n)}return r[c].exports}for(var i="function"==typeof require&&require,c=0;c<n.length;c++)o(n[c]);return o}({1:[function(t,e,r){e.exports={"default":t("core-js/library/fn/json/stringify"),__esModule:!0}},{"core-js/library/fn/json/stringify":7}],2:[function(t,e,r){e.exports={"default":t("core-js/library/fn/object/define-property"),__esModule:!0}},{"core-js/library/fn/object/define-property":8}],3:[function(t,e,r){e.exports={"default":t("core-js/library/fn/object/keys"),__esModule:!0}},{"core-js/library/fn/object/keys":9}],4:[function(t,e,r){e.exports={"default":t("core-js/library/fn/promise"),__esModule:!0}},{"core-js/library/fn/promise":10}],5:[function(t,e,r){"use strict";r.__esModule=!0,r["default"]=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},{}],6:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}r.__esModule=!0;var o=t("../core-js/object/define-property"),i=n(o);r["default"]=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,i["default"])(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}()},{"../core-js/object/define-property":2}],7:[function(t,e,r){var n=t("../../modules/_core"),o=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(t){return o.stringify.apply(o,arguments)}},{"../../modules/_core":18}],8:[function(t,e,r){t("../../modules/es6.object.define-property");var n=t("../../modules/_core").Object;e.exports=function(t,e,r){return n.defineProperty(t,e,r)}},{"../../modules/_core":18,"../../modules/es6.object.define-property":74}],9:[function(t,e,r){t("../../modules/es6.object.keys"),e.exports=t("../../modules/_core").Object.keys},{"../../modules/_core":18,"../../modules/es6.object.keys":75}],10:[function(t,e,r){t("../modules/es6.object.to-string"),t("../modules/es6.string.iterator"),t("../modules/web.dom.iterable"),t("../modules/es6.promise"),e.exports=t("../modules/_core").Promise},{"../modules/_core":18,"../modules/es6.object.to-string":76,"../modules/es6.promise":77,"../modules/es6.string.iterator":78,"../modules/web.dom.iterable":79}],11:[function(t,e,r){e.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},{}],12:[function(t,e,r){e.exports=function(){}},{}],13:[function(t,e,r){e.exports=function(t,e,r,n){if(!(t instanceof e)||void 0!==n&&n in t)throw TypeError(r+": incorrect invocation!");return t}},{}],14:[function(t,e,r){var n=t("./_is-object");e.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},{"./_is-object":35}],15:[function(t,e,r){var n=t("./_to-iobject"),o=t("./_to-length"),i=t("./_to-index");e.exports=function(t){return function(e,r,c){var s,u=n(e),a=o(u.length),f=i(c,a);if(t&&r!=r){for(;a>f;)if(s=u[f++],s!=s)return!0}else for(;a>f;f++)if((t||f in u)&&u[f]===r)return t||f||0;return!t&&-1}}},{"./_to-index":64,"./_to-iobject":66,"./_to-length":67}],16:[function(t,e,r){var n=t("./_cof"),o=t("./_wks")("toStringTag"),i="Arguments"==n(function(){return arguments}()),c=function(t,e){try{return t[e]}catch(r){}};e.exports=function(t){var e,r,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=c(e=Object(t),o))?r:i?n(e):"Object"==(s=n(e))&&"function"==typeof e.callee?"Arguments":s}},{"./_cof":17,"./_wks":71}],17:[function(t,e,r){var n={}.toString;e.exports=function(t){return n.call(t).slice(8,-1)}},{}],18:[function(t,e,r){var n=e.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},{}],19:[function(t,e,r){var n=t("./_a-function");e.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},{"./_a-function":11}],20:[function(t,e,r){e.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},{}],21:[function(t,e,r){e.exports=!t("./_fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},{"./_fails":25}],22:[function(t,e,r){var n=t("./_is-object"),o=t("./_global").document,i=n(o)&&n(o.createElement);e.exports=function(t){return i?o.createElement(t):{}}},{"./_global":27,"./_is-object":35}],23:[function(t,e,r){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},{}],24:[function(t,e,r){var n=t("./_global"),o=t("./_core"),i=t("./_ctx"),c=t("./_hide"),s="prototype",u=function(t,e,r){var a,f,_,l=t&u.F,p=t&u.G,d=t&u.S,h=t&u.P,v=t&u.B,b=t&u.W,y=p?o:o[e]||(o[e]={}),m=y[s],j=p?n:d?n[e]:(n[e]||{})[s];p&&(r=e);for(a in r)f=!l&&j&&void 0!==j[a],f&&a in y||(_=f?j[a]:r[a],y[a]=p&&"function"!=typeof j[a]?r[a]:v&&f?i(_,n):b&&j[a]==_?function(t){var e=function(e,r,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,r)}return new t(e,r,n)}return t.apply(this,arguments)};return e[s]=t[s],e}(_):h&&"function"==typeof _?i(Function.call,_):_,h&&((y.virtual||(y.virtual={}))[a]=_,t&u.R&&m&&!m[a]&&c(m,a,_)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,e.exports=u},{"./_core":18,"./_ctx":19,"./_global":27,"./_hide":29}],25:[function(t,e,r){e.exports=function(t){try{return!!t()}catch(e){return!0}}},{}],26:[function(t,e,r){var n=t("./_ctx"),o=t("./_iter-call"),i=t("./_is-array-iter"),c=t("./_an-object"),s=t("./_to-length"),u=t("./core.get-iterator-method"),a={},f={},r=e.exports=function(t,e,r,_,l){var p,d,h,v,b=l?function(){return t}:u(t),y=n(r,_,e?2:1),m=0;if("function"!=typeof b)throw TypeError(t+" is not iterable!");if(i(b)){for(p=s(t.length);p>m;m++)if(v=e?y(c(d=t[m])[0],d[1]):y(t[m]),v===a||v===f)return v}else for(h=b.call(t);!(d=h.next()).done;)if(v=o(h,y,d.value,e),v===a||v===f)return v};r.BREAK=a,r.RETURN=f},{"./_an-object":14,"./_ctx":19,"./_is-array-iter":34,"./_iter-call":36,"./_to-length":67,"./core.get-iterator-method":72}],27:[function(t,e,r){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},{}],28:[function(t,e,r){var n={}.hasOwnProperty;e.exports=function(t,e){return n.call(t,e)}},{}],29:[function(t,e,r){var n=t("./_object-dp"),o=t("./_property-desc");e.exports=t("./_descriptors")?function(t,e,r){return n.f(t,e,o(1,r))}:function(t,e,r){return t[e]=r,t}},{"./_descriptors":21,"./_object-dp":45,"./_property-desc":53}],30:[function(t,e,r){e.exports=t("./_global").document&&document.documentElement},{"./_global":27}],31:[function(t,e,r){e.exports=!t("./_descriptors")&&!t("./_fails")(function(){return 7!=Object.defineProperty(t("./_dom-create")("div"),"a",{get:function(){return 7}}).a})},{"./_descriptors":21,"./_dom-create":22,"./_fails":25}],32:[function(t,e,r){e.exports=function(t,e,r){var n=void 0===r;switch(e.length){case 0:return n?t():t.call(r);case 1:return n?t(e[0]):t.call(r,e[0]);case 2:return n?t(e[0],e[1]):t.call(r,e[0],e[1]);case 3:return n?t(e[0],e[1],e[2]):t.call(r,e[0],e[1],e[2]);case 4:return n?t(e[0],e[1],e[2],e[3]):t.call(r,e[0],e[1],e[2],e[3])}return t.apply(r,e)}},{}],33:[function(t,e,r){var n=t("./_cof");e.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},{"./_cof":17}],34:[function(t,e,r){var n=t("./_iterators"),o=t("./_wks")("iterator"),i=Array.prototype;e.exports=function(t){return void 0!==t&&(n.Array===t||i[o]===t)}},{"./_iterators":41,"./_wks":71}],35:[function(t,e,r){e.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},{}],36:[function(t,e,r){var n=t("./_an-object");e.exports=function(t,e,r,o){try{return o?e(n(r)[0],r[1]):e(r)}catch(i){var c=t["return"];throw void 0!==c&&n(c.call(t)),i}}},{"./_an-object":14}],37:[function(t,e,r){"use strict";var n=t("./_object-create"),o=t("./_property-desc"),i=t("./_set-to-string-tag"),c={};t("./_hide")(c,t("./_wks")("iterator"),function(){return this}),e.exports=function(t,e,r){t.prototype=n(c,{next:o(1,r)}),i(t,e+" Iterator")}},{"./_hide":29,"./_object-create":44,"./_property-desc":53,"./_set-to-string-tag":58,"./_wks":71}],38:[function(t,e,r){"use strict";var n=t("./_library"),o=t("./_export"),i=t("./_redefine"),c=t("./_hide"),s=t("./_has"),u=t("./_iterators"),a=t("./_iter-create"),f=t("./_set-to-string-tag"),_=t("./_object-gpo"),l=t("./_wks")("iterator"),p=!([].keys&&"next"in[].keys()),d="@@iterator",h="keys",v="values",b=function(){return this};e.exports=function(t,e,r,y,m,j,g){a(r,e,y);var x,w,k,O=function(t){if(!p&&t in P)return P[t];switch(t){case h:return function(){return new r(this,t)};case v:return function(){return new r(this,t)}}return function(){return new r(this,t)}},M=e+" Iterator",S=m==v,E=!1,P=t.prototype,T=P[l]||P[d]||m&&P[m],R=T||O(m),U=m?S?O("entries"):R:void 0,A="Array"==e?P.entries||T:T;if(A&&(k=_(A.call(new t)),k!==Object.prototype&&(f(k,M,!0),n||s(k,l)||c(k,l,b))),S&&T&&T.name!==v&&(E=!0,R=function(){return T.call(this)}),n&&!g||!p&&!E&&P[l]||c(P,l,R),u[e]=R,u[M]=b,m)if(x={values:S?R:O(v),keys:j?R:O(h),entries:U},g)for(w in x)w in P||i(P,w,x[w]);else o(o.P+o.F*(p||E),e,x);return x}},{"./_export":24,"./_has":28,"./_hide":29,"./_iter-create":37,"./_iterators":41,"./_library":42,"./_object-gpo":48,"./_redefine":55,"./_set-to-string-tag":58,"./_wks":71}],39:[function(t,e,r){var n=t("./_wks")("iterator"),o=!1;try{var i=[7][n]();i["return"]=function(){o=!0},Array.from(i,function(){throw 2})}catch(c){}e.exports=function(t,e){if(!e&&!o)return!1;var r=!1;try{var i=[7],c=i[n]();c.next=function(){return{done:r=!0}},i[n]=function(){return c},t(i)}catch(s){}return r}},{"./_wks":71}],40:[function(t,e,r){e.exports=function(t,e){return{value:e,done:!!t}}},{}],41:[function(t,e,r){e.exports={}},{}],42:[function(t,e,r){e.exports=!0},{}],43:[function(t,e,r){var n=t("./_global"),o=t("./_task").set,i=n.MutationObserver||n.WebKitMutationObserver,c=n.process,s=n.Promise,u="process"==t("./_cof")(c);e.exports=function(){var t,e,r,a=function(){var n,o;for(u&&(n=c.domain)&&n.exit();t;){o=t.fn,t=t.next;try{o()}catch(i){throw t?r():e=void 0,i}}e=void 0,n&&n.enter()};if(u)r=function(){c.nextTick(a)};else if(i){var f=!0,_=document.createTextNode("");new i(a).observe(_,{characterData:!0}),r=function(){_.data=f=!f}}else if(s&&s.resolve){var l=s.resolve();r=function(){l.then(a)}}else r=function(){o.call(n,a)};return function(n){var o={fn:n,next:void 0};e&&(e.next=o),t||(t=o,r()),e=o}}},{"./_cof":17,"./_global":27,"./_task":63}],44:[function(t,e,r){var n=t("./_an-object"),o=t("./_object-dps"),i=t("./_enum-bug-keys"),c=t("./_shared-key")("IE_PROTO"),s=function(){},u="prototype",a=function(){var e,r=t("./_dom-create")("iframe"),n=i.length,o=">";for(r.style.display="none",t("./_html").appendChild(r),r.src="javascript:",e=r.contentWindow.document,e.open(),e.write("<script>document.F=Object</script"+o),e.close(),a=e.F;n--;)delete a[u][i[n]];return a()};e.exports=Object.create||function(t,e){var r;return null!==t?(s[u]=n(t),r=new s,s[u]=null,r[c]=t):r=a(),void 0===e?r:o(r,e)}},{"./_an-object":14,"./_dom-create":22,"./_enum-bug-keys":23,"./_html":30,"./_object-dps":46,"./_shared-key":59}],45:[function(t,e,r){var n=t("./_an-object"),o=t("./_ie8-dom-define"),i=t("./_to-primitive"),c=Object.defineProperty;r.f=t("./_descriptors")?Object.defineProperty:function(t,e,r){if(n(t),e=i(e,!0),n(r),o)try{return c(t,e,r)}catch(s){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}},{"./_an-object":14,"./_descriptors":21,"./_ie8-dom-define":31,"./_to-primitive":69}],46:[function(t,e,r){var n=t("./_object-dp"),o=t("./_an-object"),i=t("./_object-keys");e.exports=t("./_descriptors")?Object.defineProperties:function(t,e){o(t);for(var r,c=i(e),s=c.length,u=0;s>u;)n.f(t,r=c[u++],e[r]);return t}},{"./_an-object":14,"./_descriptors":21,"./_object-dp":45,"./_object-keys":50}],47:[function(t,e,r){var n=t("./_object-pie"),o=t("./_property-desc"),i=t("./_to-iobject"),c=t("./_to-primitive"),s=t("./_has"),u=t("./_ie8-dom-define"),a=Object.getOwnPropertyDescriptor;r.f=t("./_descriptors")?a:function(t,e){if(t=i(t),e=c(e,!0),u)try{return a(t,e)}catch(r){}if(s(t,e))return o(!n.f.call(t,e),t[e])}},{"./_descriptors":21,"./_has":28,"./_ie8-dom-define":31,"./_object-pie":51,"./_property-desc":53,"./_to-iobject":66,"./_to-primitive":69}],48:[function(t,e,r){var n=t("./_has"),o=t("./_to-object"),i=t("./_shared-key")("IE_PROTO"),c=Object.prototype;e.exports=Object.getPrototypeOf||function(t){return t=o(t),n(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},{"./_has":28,"./_shared-key":59,"./_to-object":68}],49:[function(t,e,r){var n=t("./_has"),o=t("./_to-iobject"),i=t("./_array-includes")(!1),c=t("./_shared-key")("IE_PROTO");e.exports=function(t,e){var r,s=o(t),u=0,a=[];for(r in s)r!=c&&n(s,r)&&a.push(r);for(;e.length>u;)n(s,r=e[u++])&&(~i(a,r)||a.push(r));return a}},{"./_array-includes":15,"./_has":28,"./_shared-key":59,"./_to-iobject":66}],50:[function(t,e,r){var n=t("./_object-keys-internal"),o=t("./_enum-bug-keys");e.exports=Object.keys||function(t){return n(t,o)}},{"./_enum-bug-keys":23,"./_object-keys-internal":49}],51:[function(t,e,r){r.f={}.propertyIsEnumerable},{}],52:[function(t,e,r){var n=t("./_export"),o=t("./_core"),i=t("./_fails");e.exports=function(t,e){var r=(o.Object||{})[t]||Object[t],c={};c[t]=e(r),n(n.S+n.F*i(function(){r(1)}),"Object",c)}},{"./_core":18,"./_export":24,"./_fails":25}],53:[function(t,e,r){e.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},{}],54:[function(t,e,r){var n=t("./_hide");e.exports=function(t,e,r){for(var o in e)r&&t[o]?t[o]=e[o]:n(t,o,e[o]);return t}},{"./_hide":29}],55:[function(t,e,r){e.exports=t("./_hide")},{"./_hide":29}],56:[function(t,e,r){var n=t("./_is-object"),o=t("./_an-object"),i=function(t,e){if(o(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,r,n){try{n=t("./_ctx")(Function.call,t("./_object-gopd").f(Object.prototype,"__proto__").set,2),n(e,[]),r=!(e instanceof Array)}catch(o){r=!0}return function(t,e){return i(t,e),r?t.__proto__=e:n(t,e),t}}({},!1):void 0),check:i}},{"./_an-object":14,"./_ctx":19,"./_is-object":35,"./_object-gopd":47}],57:[function(t,e,r){"use strict";var n=t("./_global"),o=t("./_core"),i=t("./_object-dp"),c=t("./_descriptors"),s=t("./_wks")("species");e.exports=function(t){var e="function"==typeof o[t]?o[t]:n[t];c&&e&&!e[s]&&i.f(e,s,{configurable:!0,get:function(){return this}})}},{"./_core":18,"./_descriptors":21,"./_global":27,"./_object-dp":45,"./_wks":71}],58:[function(t,e,r){var n=t("./_object-dp").f,o=t("./_has"),i=t("./_wks")("toStringTag");e.exports=function(t,e,r){t&&!o(t=r?t:t.prototype,i)&&n(t,i,{configurable:!0,value:e})}},{"./_has":28,"./_object-dp":45,"./_wks":71}],59:[function(t,e,r){var n=t("./_shared")("keys"),o=t("./_uid");e.exports=function(t){return n[t]||(n[t]=o(t))}},{"./_shared":60,"./_uid":70}],60:[function(t,e,r){var n=t("./_global"),o="__core-js_shared__",i=n[o]||(n[o]={});e.exports=function(t){return i[t]||(i[t]={})}},{"./_global":27}],61:[function(t,e,r){var n=t("./_an-object"),o=t("./_a-function"),i=t("./_wks")("species");e.exports=function(t,e){var r,c=n(t).constructor;return void 0===c||void 0==(r=n(c)[i])?e:o(r)}},{"./_a-function":11,"./_an-object":14,"./_wks":71}],62:[function(t,e,r){var n=t("./_to-integer"),o=t("./_defined");e.exports=function(t){return function(e,r){var i,c,s=String(o(e)),u=n(r),a=s.length;return u<0||u>=a?t?"":void 0:(i=s.charCodeAt(u),i<55296||i>56319||u+1===a||(c=s.charCodeAt(u+1))<56320||c>57343?t?s.charAt(u):i:t?s.slice(u,u+2):(i-55296<<10)+(c-56320)+65536)}}},{"./_defined":20,"./_to-integer":65}],63:[function(t,e,r){var n,o,i,c=t("./_ctx"),s=t("./_invoke"),u=t("./_html"),a=t("./_dom-create"),f=t("./_global"),_=f.process,l=f.setImmediate,p=f.clearImmediate,d=f.MessageChannel,h=0,v={},b="onreadystatechange",y=function(){var t=+this;if(v.hasOwnProperty(t)){var e=v[t];delete v[t],e()}},m=function(t){y.call(t.data)};l&&p||(l=function(t){for(var e=[],r=1;arguments.length>r;)e.push(arguments[r++]);return v[++h]=function(){s("function"==typeof t?t:Function(t),e)},n(h),h},p=function(t){delete v[t]},"process"==t("./_cof")(_)?n=function(t){_.nextTick(c(y,t,1))}:d?(o=new d,i=o.port2,o.port1.onmessage=m,n=c(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(n=function(t){f.postMessage(t+"","*")},f.addEventListener("message",m,!1)):n=b in a("script")?function(t){u.appendChild(a("script"))[b]=function(){u.removeChild(this),y.call(t)}}:function(t){setTimeout(c(y,t,1),0)}),e.exports={set:l,clear:p}},{"./_cof":17,"./_ctx":19,"./_dom-create":22,"./_global":27,"./_html":30,"./_invoke":32}],64:[function(t,e,r){var n=t("./_to-integer"),o=Math.max,i=Math.min;e.exports=function(t,e){return t=n(t),t<0?o(t+e,0):i(t,e)}},{"./_to-integer":65}],65:[function(t,e,r){var n=Math.ceil,o=Math.floor;e.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},{}],66:[function(t,e,r){var n=t("./_iobject"),o=t("./_defined");e.exports=function(t){return n(o(t))}},{"./_defined":20,"./_iobject":33}],67:[function(t,e,r){var n=t("./_to-integer"),o=Math.min;e.exports=function(t){return t>0?o(n(t),9007199254740991):0}},{"./_to-integer":65}],68:[function(t,e,r){var n=t("./_defined");e.exports=function(t){return Object(n(t))}},{"./_defined":20}],69:[function(t,e,r){var n=t("./_is-object");e.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},{"./_is-object":35}],70:[function(t,e,r){var n=0,o=Math.random();e.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},{}],71:[function(t,e,r){var n=t("./_shared")("wks"),o=t("./_uid"),i=t("./_global").Symbol,c="function"==typeof i,s=e.exports=function(t){return n[t]||(n[t]=c&&i[t]||(c?i:o)("Symbol."+t))};s.store=n},{"./_global":27,"./_shared":60,"./_uid":70}],72:[function(t,e,r){var n=t("./_classof"),o=t("./_wks")("iterator"),i=t("./_iterators");e.exports=t("./_core").getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[n(t)]}},{"./_classof":16,"./_core":18,"./_iterators":41,"./_wks":71}],73:[function(t,e,r){"use strict";var n=t("./_add-to-unscopables"),o=t("./_iter-step"),i=t("./_iterators"),c=t("./_to-iobject");e.exports=t("./_iter-define")(Array,"Array",function(t,e){this._t=c(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,r):"values"==e?o(0,t[r]):o(0,[r,t[r]])},"values"),i.Arguments=i.Array,n("keys"),n("values"),n("entries")},{"./_add-to-unscopables":12,"./_iter-define":38,"./_iter-step":40,"./_iterators":41,"./_to-iobject":66}],74:[function(t,e,r){var n=t("./_export");n(n.S+n.F*!t("./_descriptors"),"Object",{defineProperty:t("./_object-dp").f})},{"./_descriptors":21,"./_export":24,"./_object-dp":45}],75:[function(t,e,r){var n=t("./_to-object"),o=t("./_object-keys");t("./_object-sap")("keys",function(){return function(t){return o(n(t))}})},{"./_object-keys":50,"./_object-sap":52,"./_to-object":68}],76:[function(t,e,r){},{}],77:[function(t,e,r){"use strict";var n,o,i,c=t("./_library"),s=t("./_global"),u=t("./_ctx"),a=t("./_classof"),f=t("./_export"),_=t("./_is-object"),l=(t("./_an-object"),t("./_a-function")),p=t("./_an-instance"),d=t("./_for-of"),h=(t("./_set-proto").set,t("./_species-constructor")),v=t("./_task").set,b=t("./_microtask")(),y="Promise",m=s.TypeError,j=s.process,g=s[y],j=s.process,x="process"==a(j),w=function(){},k=!!function(){try{var e=g.resolve(1),r=(e.constructor={})[t("./_wks")("species")]=function(t){t(w,w)};return(x||"function"==typeof PromiseRejectionEvent)&&e.then(w)instanceof r}catch(n){}}(),O=function(t,e){return t===e||t===g&&e===i},M=function(t){var e;return!(!_(t)||"function"!=typeof(e=t.then))&&e},S=function(t){return O(g,t)?new E(t):new o(t)},E=o=function(t){var e,r;this.promise=new t(function(t,n){if(void 0!==e||void 0!==r)throw m("Bad Promise constructor");e=t,r=n}),this.resolve=l(e),this.reject=l(r)},P=function(t){try{t()}catch(e){return{error:e}}},T=function(t,e){if(!t._n){t._n=!0;var r=t._c;b(function(){for(var n=t._v,o=1==t._s,i=0,c=function(e){var r,i,c=o?e.ok:e.fail,s=e.resolve,u=e.reject,a=e.domain;try{c?(o||(2==t._h&&A(t),t._h=1),c===!0?r=n:(a&&a.enter(),r=c(n),a&&a.exit()),r===e.promise?u(m("Promise-chain cycle")):(i=M(r))?i.call(r,s,u):s(r)):u(n)}catch(f){u(f)}};r.length>i;)c(r[i++]);t._c=[],t._n=!1,e&&!t._h&&R(t)})}},R=function(t){v.call(s,function(){var e,r,n,o=t._v;if(U(t)&&(e=P(function(){x?j.emit("unhandledRejection",o,t):(r=s.onunhandledrejection)?r({promise:t,reason:o}):(n=s.console)&&n.error&&n.error("Unhandled promise rejection",o)}),t._h=x||U(t)?2:1),t._a=void 0,e)throw e.error})},U=function(t){if(1==t._h)return!1;for(var e,r=t._a||t._c,n=0;r.length>n;)if(e=r[n++],e.fail||!U(e.promise))return!1;return!0},A=function(t){v.call(s,function(){var e;x?j.emit("rejectionHandled",t):(e=s.onrejectionhandled)&&e({promise:t,reason:t._v})})},L=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),T(e,!0))},C=function(t){var e,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===t)throw m("Promise can't be resolved itself");(e=M(t))?b(function(){var n={_w:r,_d:!1};try{e.call(t,u(C,n,1),u(L,n,1))}catch(o){L.call(n,o)}}):(r._v=t,r._s=1,T(r,!1))}catch(n){L.call({_w:r,_d:!1},n)}}};k||(g=function(t){p(this,g,y,"_h"),l(t),n.call(this);try{t(u(C,this,1),u(L,this,1))}catch(e){L.call(this,e)}},n=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},n.prototype=t("./_redefine-all")(g.prototype,{then:function(t,e){var r=S(h(this,g));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=x?j.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&T(this,!1),r.promise},"catch":function(t){return this.then(void 0,t)}}),E=function(){var t=new n;this.promise=t,this.resolve=u(C,t,1),this.reject=u(L,t,1)}),f(f.G+f.W+f.F*!k,{Promise:g}),t("./_set-to-string-tag")(g,y),t("./_set-species")(y),i=t("./_core")[y],f(f.S+f.F*!k,y,{reject:function(t){var e=S(this),r=e.reject;return r(t),e.promise}}),f(f.S+f.F*(c||!k),y,{resolve:function(t){if(t instanceof g&&O(t.constructor,this))return t;var e=S(this),r=e.resolve;return r(t),e.promise}}),f(f.S+f.F*!(k&&t("./_iter-detect")(function(t){g.all(t)["catch"](w)})),y,{all:function(t){var e=this,r=S(e),n=r.resolve,o=r.reject,i=P(function(){var r=[],i=0,c=1;d(t,!1,function(t){var s=i++,u=!1;r.push(void 0),c++,e.resolve(t).then(function(t){u||(u=!0,r[s]=t,--c||n(r))},o)}),--c||n(r)});return i&&o(i.error),r.promise},race:function(t){var e=this,r=S(e),n=r.reject,o=P(function(){d(t,!1,function(t){e.resolve(t).then(r.resolve,n)})});return o&&n(o.error),r.promise}})},{"./_a-function":11,"./_an-instance":13,"./_an-object":14,"./_classof":16,"./_core":18,"./_ctx":19,"./_export":24,"./_for-of":26,"./_global":27,"./_is-object":35,"./_iter-detect":39,"./_library":42,"./_microtask":43,"./_redefine-all":54,"./_set-proto":56,"./_set-species":57,"./_set-to-string-tag":58,"./_species-constructor":61,"./_task":63,"./_wks":71}],78:[function(t,e,r){"use strict";var n=t("./_string-at")(!0);t("./_iter-define")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,r=this._i;return r>=e.length?{value:void 0,done:!0}:(t=n(e,r),this._i+=t.length,{value:t,done:!1})})},{"./_iter-define":38,"./_string-at":62}],79:[function(t,e,r){t("./es6.array.iterator");for(var n=t("./_global"),o=t("./_hide"),i=t("./_iterators"),c=t("./_wks")("toStringTag"),s=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],u=0;u<5;u++){var a=s[u],f=n[a],_=f&&f.prototype;_&&!_[c]&&o(_,c,a),i[a]=i.Array}},{"./_global":27,"./_hide":29,"./_iterators":41,"./_wks":71,"./es6.array.iterator":73}],80:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(r,"__esModule",{value:!0});var o=t("babel-runtime/core-js/promise"),i=n(o),c=t("babel-runtime/helpers/classCallCheck"),s=n(c),u=t("babel-runtime/helpers/createClass"),a=n(u),f=t("../utils/utils"),_=function(){function t(e,r,n){(0,s["default"])(this,t);var o=this;o.messageBus=n,o.domain=(0,f.divideURL)(e).domain,o.hypertyURL=e,o.runtimeURL=r}return(0,a["default"])(t,[{key:"discoverUserRegistered",value:function(t,e){var r=this,n=void 0,o=t?t:".";n=e?e:r.hypertyURL;var c={type:"read",from:n,to:r.runtimeURL+"/registry/",body:{resource:o,criteria:n}};return new i["default"](function(t,e){r.messageBus.postMessage(c,function(r){var n=r.body.resource;n?t(n):e("No user was not found")})})}}]),t}();r["default"]=_,e.exports=r["default"]},{"../utils/utils":81,"babel-runtime/core-js/promise":4,"babel-runtime/helpers/classCallCheck":5,"babel-runtime/helpers/createClass":6}],81:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function o(t){if(!t)throw Error("URL is needed to split");var e=/([a-zA-Z-]*):\/\/(?:\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256})([-a-zA-Z0-9@:%._\+~#=\/]*)/gi,r="$1,$2,$3",n=t.replace(e,r).split(",");n[0]===t&&(n[0]="https",n[1]=t);var o={type:n[0],domain:n[1],identity:n[2]};return o}function i(t){var e=t.indexOf("@"),r={username:t.substring(0,e),domain:t.substring(e+1,t.length)};return r}function c(t){return!((0,d["default"])(t).length>0)}function s(t){if(t)return JSON.parse((0,l["default"])(t))}function u(t){var e=t.indexOf("@");return"user://"+t.substring(e+1,t.length)+"/"+t.substring(0,e)}function a(t){var e=o(t);return e.identity.replace("/","")+"@"+e.domain}function f(t){if("user://"===t.substring(0,7)){var e=o(t);if(e.domain&&e.identity)return t;throw"userURL with wrong format"}return u(t)}Object.defineProperty(r,"__esModule",{value:!0});var _=t("babel-runtime/core-js/json/stringify"),l=n(_),p=t("babel-runtime/core-js/object/keys"),d=n(p);r.divideURL=o,r.divideEmail=i,r.emptyObject=c,r.deepClone=s,r.getUserURLFromEmail=u,r.getUserEmailFromURL=a,r.convertToUserURL=f},{"babel-runtime/core-js/json/stringify":1,"babel-runtime/core-js/object/keys":3}]},{},[80])(80)});


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],3:[function(require,module,exports){
(function (global){
/**
* Copyright 2016 PT Inovação e Sistemas SA
* Copyright 2016 INESC-ID
* Copyright 2016 QUOBIS NETWORKS SL
* Copyright 2016 FRAUNHOFER-GESELLSCHAFT ZUR FOERDERUNG DER ANGEWANDTEN FORSCHUNG E.V
* Copyright 2016 ORANGE SA
* Copyright 2016 Deutsche Telekom AG
* Copyright 2016 Apizee
* Copyright 2016 TECHNISCHE UNIVERSITAT BERLIN
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
**/

// Distribution file for Syncher.js 
// version: 0.3.0
// Last build: Wed Jun 29 2016 18:18:39 GMT+0100 (WEST)

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.Syncher=e()}}(function(){return function e(t,r,n){function o(s,c){if(!r[s]){if(!t[s]){var a="function"==typeof require&&require;if(!c&&a)return a(s,!0);if(i)return i(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var l=r[s]={exports:{}};t[s][0].call(l.exports,function(e){var r=t[s][1][e];return o(r?r:e)},l,l.exports,e,t,r,n)}return r[s].exports}for(var i="function"==typeof require&&require,s=0;s<n.length;s++)o(n[s]);return o}({1:[function(e,t,r){Object.observe&&!Array.observe&&function(e,t){"use strict";var r=e.getNotifier,n="performChange",o="_original",i="splice",s={push:function a(e){var t=arguments,s=a[o].apply(this,t);return r(this)[n](i,function(){return{index:s-t.length,addedCount:t.length,removed:[]}}),s},unshift:function u(e){var t=arguments,s=u[o].apply(this,t);return r(this)[n](i,function(){return{index:0,addedCount:t.length,removed:[]}}),s},pop:function l(){var e=this.length,t=l[o].call(this);return this.length!==e&&r(this)[n](i,function(){return{index:this.length,addedCount:0,removed:[t]}},this),t},shift:function f(){var e=this.length,t=f[o].call(this);return this.length!==e&&r(this)[n](i,function(){return{index:0,addedCount:0,removed:[t]}},this),t},splice:function d(e,t){var s=arguments,c=d[o].apply(this,s);return(c.length||s.length>2)&&r(this)[n](i,function(){return{index:e,addedCount:s.length-2,removed:c}},this),c}};for(var c in s)s[c][o]=t.prototype[c],t.prototype[c]=s[c];t.observe=function(t,r){return e.observe(t,r,["add","update","delete",i])},t.unobserve=e.unobserve}(Object,Array)},{}],2:[function(e,t,r){t.exports={"default":e("core-js/library/fn/json/stringify"),__esModule:!0}},{"core-js/library/fn/json/stringify":18}],3:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/create"),__esModule:!0}},{"core-js/library/fn/object/create":19}],4:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/define-property"),__esModule:!0}},{"core-js/library/fn/object/define-property":20}],5:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/get-own-property-descriptor"),__esModule:!0}},{"core-js/library/fn/object/get-own-property-descriptor":21}],6:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/get-prototype-of"),__esModule:!0}},{"core-js/library/fn/object/get-prototype-of":22}],7:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/keys"),__esModule:!0}},{"core-js/library/fn/object/keys":23}],8:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/set-prototype-of"),__esModule:!0}},{"core-js/library/fn/object/set-prototype-of":24}],9:[function(e,t,r){t.exports={"default":e("core-js/library/fn/promise"),__esModule:!0}},{"core-js/library/fn/promise":25}],10:[function(e,t,r){t.exports={"default":e("core-js/library/fn/symbol"),__esModule:!0}},{"core-js/library/fn/symbol":26}],11:[function(e,t,r){t.exports={"default":e("core-js/library/fn/symbol/iterator"),__esModule:!0}},{"core-js/library/fn/symbol/iterator":27}],12:[function(e,t,r){"use strict";r.__esModule=!0,r["default"]=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},{}],13:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}r.__esModule=!0;var o=e("../core-js/object/define-property"),i=n(o);r["default"]=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,i["default"])(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}()},{"../core-js/object/define-property":4}],14:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}r.__esModule=!0;var o=e("../core-js/object/get-prototype-of"),i=n(o),s=e("../core-js/object/get-own-property-descriptor"),c=n(s);r["default"]=function a(e,t,r){null===e&&(e=Function.prototype);var n=(0,c["default"])(e,t);if(void 0===n){var o=(0,i["default"])(e);return null===o?void 0:a(o,t,r)}if("value"in n)return n.value;var s=n.get;if(void 0!==s)return s.call(r)}},{"../core-js/object/get-own-property-descriptor":5,"../core-js/object/get-prototype-of":6}],15:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}r.__esModule=!0;var o=e("../core-js/object/set-prototype-of"),i=n(o),s=e("../core-js/object/create"),c=n(s),a=e("../helpers/typeof"),u=n(a);r["default"]=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof t?"undefined":(0,u["default"])(t)));e.prototype=(0,c["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(i["default"]?(0,i["default"])(e,t):e.__proto__=t)}},{"../core-js/object/create":3,"../core-js/object/set-prototype-of":8,"../helpers/typeof":17}],16:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}r.__esModule=!0;var o=e("../helpers/typeof"),i=n(o);r["default"]=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"==typeof t?"undefined":(0,i["default"])(t))&&"function"!=typeof t?e:t}},{"../helpers/typeof":17}],17:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}r.__esModule=!0;var o=e("../core-js/symbol/iterator"),i=n(o),s=e("../core-js/symbol"),c=n(s),a="function"==typeof c["default"]&&"symbol"==typeof i["default"]?function(e){return typeof e}:function(e){return e&&"function"==typeof c["default"]&&e.constructor===c["default"]?"symbol":typeof e};r["default"]="function"==typeof c["default"]&&"symbol"===a(i["default"])?function(e){return"undefined"==typeof e?"undefined":a(e)}:function(e){return e&&"function"==typeof c["default"]&&e.constructor===c["default"]?"symbol":"undefined"==typeof e?"undefined":a(e)}},{"../core-js/symbol":10,"../core-js/symbol/iterator":11}],18:[function(e,t,r){var n=e("../../modules/_core"),o=n.JSON||(n.JSON={stringify:JSON.stringify});t.exports=function(e){return o.stringify.apply(o,arguments)}},{"../../modules/_core":35}],19:[function(e,t,r){e("../../modules/es6.object.create");var n=e("../../modules/_core").Object;t.exports=function(e,t){return n.create(e,t)}},{"../../modules/_core":35,"../../modules/es6.object.create":100}],20:[function(e,t,r){e("../../modules/es6.object.define-property");var n=e("../../modules/_core").Object;t.exports=function(e,t,r){return n.defineProperty(e,t,r)}},{"../../modules/_core":35,"../../modules/es6.object.define-property":101}],21:[function(e,t,r){e("../../modules/es6.object.get-own-property-descriptor");var n=e("../../modules/_core").Object;t.exports=function(e,t){return n.getOwnPropertyDescriptor(e,t)}},{"../../modules/_core":35,"../../modules/es6.object.get-own-property-descriptor":102}],22:[function(e,t,r){e("../../modules/es6.object.get-prototype-of"),t.exports=e("../../modules/_core").Object.getPrototypeOf},{"../../modules/_core":35,"../../modules/es6.object.get-prototype-of":103}],23:[function(e,t,r){e("../../modules/es6.object.keys"),t.exports=e("../../modules/_core").Object.keys},{"../../modules/_core":35,"../../modules/es6.object.keys":104}],24:[function(e,t,r){e("../../modules/es6.object.set-prototype-of"),t.exports=e("../../modules/_core").Object.setPrototypeOf},{"../../modules/_core":35,"../../modules/es6.object.set-prototype-of":105}],25:[function(e,t,r){e("../modules/es6.object.to-string"),e("../modules/es6.string.iterator"),e("../modules/web.dom.iterable"),e("../modules/es6.promise"),t.exports=e("../modules/_core").Promise},{"../modules/_core":35,"../modules/es6.object.to-string":106,"../modules/es6.promise":107,"../modules/es6.string.iterator":108,"../modules/web.dom.iterable":112}],26:[function(e,t,r){e("../../modules/es6.symbol"),e("../../modules/es6.object.to-string"),e("../../modules/es7.symbol.async-iterator"),e("../../modules/es7.symbol.observable"),t.exports=e("../../modules/_core").Symbol},{"../../modules/_core":35,"../../modules/es6.object.to-string":106,"../../modules/es6.symbol":109,"../../modules/es7.symbol.async-iterator":110,"../../modules/es7.symbol.observable":111}],27:[function(e,t,r){e("../../modules/es6.string.iterator"),e("../../modules/web.dom.iterable"),t.exports=e("../../modules/_wks-ext").f("iterator")},{"../../modules/_wks-ext":96,"../../modules/es6.string.iterator":108,"../../modules/web.dom.iterable":112}],28:[function(e,t,r){t.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},{}],29:[function(e,t,r){t.exports=function(){}},{}],30:[function(e,t,r){t.exports=function(e,t,r,n){if(!(e instanceof t)||void 0!==n&&n in e)throw TypeError(r+": incorrect invocation!");return e}},{}],31:[function(e,t,r){var n=e("./_is-object");t.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},{"./_is-object":54}],32:[function(e,t,r){var n=e("./_to-iobject"),o=e("./_to-length"),i=e("./_to-index");t.exports=function(e){return function(t,r,s){var c,a=n(t),u=o(a.length),l=i(s,u);if(e&&r!=r){for(;u>l;)if(c=a[l++],c!=c)return!0}else for(;u>l;l++)if((e||l in a)&&a[l]===r)return e||l||0;return!e&&-1}}},{"./_to-index":88,"./_to-iobject":90,"./_to-length":91}],33:[function(e,t,r){var n=e("./_cof"),o=e("./_wks")("toStringTag"),i="Arguments"==n(function(){return arguments}()),s=function(e,t){try{return e[t]}catch(r){}};t.exports=function(e){var t,r,c;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=s(t=Object(e),o))?r:i?n(t):"Object"==(c=n(t))&&"function"==typeof t.callee?"Arguments":c}},{"./_cof":34,"./_wks":97}],34:[function(e,t,r){var n={}.toString;t.exports=function(e){return n.call(e).slice(8,-1)}},{}],35:[function(e,t,r){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},{}],36:[function(e,t,r){var n=e("./_a-function");t.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,o){return e.call(t,r,n,o)}}return function(){return e.apply(t,arguments)}}},{"./_a-function":28}],37:[function(e,t,r){t.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},{}],38:[function(e,t,r){t.exports=!e("./_fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},{"./_fails":43}],39:[function(e,t,r){var n=e("./_is-object"),o=e("./_global").document,i=n(o)&&n(o.createElement);t.exports=function(e){return i?o.createElement(e):{}}},{"./_global":45,"./_is-object":54}],40:[function(e,t,r){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},{}],41:[function(e,t,r){var n=e("./_object-keys"),o=e("./_object-gops"),i=e("./_object-pie");t.exports=function(e){var t=n(e),r=o.f;if(r)for(var s,c=r(e),a=i.f,u=0;c.length>u;)a.call(e,s=c[u++])&&t.push(s);return t}},{"./_object-gops":71,"./_object-keys":74,"./_object-pie":75}],42:[function(e,t,r){var n=e("./_global"),o=e("./_core"),i=e("./_ctx"),s=e("./_hide"),c="prototype",a=function(e,t,r){var u,l,f,d=e&a.F,p=e&a.G,_=e&a.S,b=e&a.P,h=e&a.B,y=e&a.W,v=p?o:o[t]||(o[t]={}),j=v[c],g=p?n:_?n[t]:(n[t]||{})[c];p&&(r=t);for(u in r)l=!d&&g&&void 0!==g[u],l&&u in v||(f=l?g[u]:r[u],v[u]=p&&"function"!=typeof g[u]?r[u]:h&&l?i(f,n):y&&g[u]==f?function(e){var t=function(t,r,n){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,r)}return new e(t,r,n)}return e.apply(this,arguments)};return t[c]=e[c],t}(f):b&&"function"==typeof f?i(Function.call,f):f,b&&((v.virtual||(v.virtual={}))[u]=f,e&a.R&&j&&!j[u]&&s(j,u,f)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},{"./_core":35,"./_ctx":36,"./_global":45,"./_hide":47}],43:[function(e,t,r){t.exports=function(e){try{return!!e()}catch(t){return!0}}},{}],44:[function(e,t,r){var n=e("./_ctx"),o=e("./_iter-call"),i=e("./_is-array-iter"),s=e("./_an-object"),c=e("./_to-length"),a=e("./core.get-iterator-method"),u={},l={},r=t.exports=function(e,t,r,f,d){var p,_,b,h,y=d?function(){return e}:a(e),v=n(r,f,t?2:1),j=0;if("function"!=typeof y)throw TypeError(e+" is not iterable!");if(i(y)){for(p=c(e.length);p>j;j++)if(h=t?v(s(_=e[j])[0],_[1]):v(e[j]),h===u||h===l)return h}else for(b=y.call(e);!(_=b.next()).done;)if(h=o(b,v,_.value,t),h===u||h===l)return h};r.BREAK=u,r.RETURN=l},{"./_an-object":31,"./_ctx":36,"./_is-array-iter":52,"./_iter-call":55,"./_to-length":91,"./core.get-iterator-method":98}],45:[function(e,t,r){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},{}],46:[function(e,t,r){var n={}.hasOwnProperty;t.exports=function(e,t){return n.call(e,t)}},{}],47:[function(e,t,r){var n=e("./_object-dp"),o=e("./_property-desc");t.exports=e("./_descriptors")?function(e,t,r){return n.f(e,t,o(1,r))}:function(e,t,r){return e[t]=r,e}},{"./_descriptors":38,"./_object-dp":66,"./_property-desc":77}],48:[function(e,t,r){t.exports=e("./_global").document&&document.documentElement},{"./_global":45}],49:[function(e,t,r){t.exports=!e("./_descriptors")&&!e("./_fails")(function(){return 7!=Object.defineProperty(e("./_dom-create")("div"),"a",{get:function(){return 7}}).a})},{"./_descriptors":38,"./_dom-create":39,"./_fails":43}],50:[function(e,t,r){t.exports=function(e,t,r){var n=void 0===r;switch(t.length){case 0:return n?e():e.call(r);case 1:return n?e(t[0]):e.call(r,t[0]);case 2:return n?e(t[0],t[1]):e.call(r,t[0],t[1]);case 3:return n?e(t[0],t[1],t[2]):e.call(r,t[0],t[1],t[2]);case 4:return n?e(t[0],t[1],t[2],t[3]):e.call(r,t[0],t[1],t[2],t[3])}return e.apply(r,t)}},{}],51:[function(e,t,r){var n=e("./_cof");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},{"./_cof":34}],52:[function(e,t,r){var n=e("./_iterators"),o=e("./_wks")("iterator"),i=Array.prototype;t.exports=function(e){return void 0!==e&&(n.Array===e||i[o]===e)}},{"./_iterators":60,"./_wks":97}],53:[function(e,t,r){var n=e("./_cof");t.exports=Array.isArray||function(e){return"Array"==n(e)}},{"./_cof":34}],54:[function(e,t,r){t.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},{}],55:[function(e,t,r){var n=e("./_an-object");t.exports=function(e,t,r,o){try{return o?t(n(r)[0],r[1]):t(r)}catch(i){var s=e["return"];throw void 0!==s&&n(s.call(e)),i}}},{"./_an-object":31}],56:[function(e,t,r){"use strict";var n=e("./_object-create"),o=e("./_property-desc"),i=e("./_set-to-string-tag"),s={};e("./_hide")(s,e("./_wks")("iterator"),function(){return this}),t.exports=function(e,t,r){e.prototype=n(s,{next:o(1,r)}),i(e,t+" Iterator")}},{"./_hide":47,"./_object-create":65,"./_property-desc":77,"./_set-to-string-tag":82,"./_wks":97}],57:[function(e,t,r){"use strict";var n=e("./_library"),o=e("./_export"),i=e("./_redefine"),s=e("./_hide"),c=e("./_has"),a=e("./_iterators"),u=e("./_iter-create"),l=e("./_set-to-string-tag"),f=e("./_object-gpo"),d=e("./_wks")("iterator"),p=!([].keys&&"next"in[].keys()),_="@@iterator",b="keys",h="values",y=function(){return this};t.exports=function(e,t,r,v,j,g,m){u(r,t,v);var w,O,k,x=function(e){if(!p&&e in T)return T[e];switch(e){case b:return function(){return new r(this,e)};case h:return function(){return new r(this,e)}}return function(){return new r(this,e)}},C=t+" Iterator",E=j==h,S=!1,T=e.prototype,R=T[d]||T[_]||j&&T[j],M=R||x(j),N=j?E?x("entries"):M:void 0,P="Array"==t?T.entries||R:R;if(P&&(k=f(P.call(new e)),k!==Object.prototype&&(l(k,C,!0),n||c(k,d)||s(k,d,y))),E&&R&&R.name!==h&&(S=!0,M=function(){return R.call(this)}),n&&!m||!p&&!S&&T[d]||s(T,d,M),a[t]=M,a[C]=y,j)if(w={values:E?M:x(h),keys:g?M:x(b),entries:N},m)for(O in w)O in T||i(T,O,w[O]);else o(o.P+o.F*(p||S),t,w);return w}},{"./_export":42,"./_has":46,"./_hide":47,"./_iter-create":56,"./_iterators":60,"./_library":62,"./_object-gpo":72,"./_redefine":79,"./_set-to-string-tag":82,"./_wks":97}],58:[function(e,t,r){var n=e("./_wks")("iterator"),o=!1;try{var i=[7][n]();i["return"]=function(){o=!0},Array.from(i,function(){throw 2})}catch(s){}t.exports=function(e,t){if(!t&&!o)return!1;var r=!1;try{var i=[7],s=i[n]();s.next=function(){return{done:r=!0}},i[n]=function(){return s},e(i)}catch(c){}return r}},{"./_wks":97}],59:[function(e,t,r){t.exports=function(e,t){return{value:t,done:!!e}}},{}],60:[function(e,t,r){t.exports={}},{}],61:[function(e,t,r){var n=e("./_object-keys"),o=e("./_to-iobject");t.exports=function(e,t){for(var r,i=o(e),s=n(i),c=s.length,a=0;c>a;)if(i[r=s[a++]]===t)return r}},{"./_object-keys":74,"./_to-iobject":90}],62:[function(e,t,r){t.exports=!0},{}],63:[function(e,t,r){var n=e("./_uid")("meta"),o=e("./_is-object"),i=e("./_has"),s=e("./_object-dp").f,c=0,a=Object.isExtensible||function(){return!0},u=!e("./_fails")(function(){return a(Object.preventExtensions({}))}),l=function(e){s(e,n,{value:{i:"O"+ ++c,w:{}}})},f=function(e,t){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,n)){if(!a(e))return"F";if(!t)return"E";l(e)}return e[n].i},d=function(e,t){if(!i(e,n)){if(!a(e))return!0;if(!t)return!1;l(e)}return e[n].w},p=function(e){return u&&_.NEED&&a(e)&&!i(e,n)&&l(e),e},_=t.exports={KEY:n,NEED:!1,fastKey:f,getWeak:d,onFreeze:p}},{"./_fails":43,"./_has":46,"./_is-object":54,"./_object-dp":66,"./_uid":94}],64:[function(e,t,r){var n=e("./_global"),o=e("./_task").set,i=n.MutationObserver||n.WebKitMutationObserver,s=n.process,c=n.Promise,a="process"==e("./_cof")(s);t.exports=function(){var e,t,r,u=function(){var n,o;for(a&&(n=s.domain)&&n.exit();e;){o=e.fn,e=e.next;try{o()}catch(i){throw e?r():t=void 0,i}}t=void 0,n&&n.enter()};if(a)r=function(){s.nextTick(u)};else if(i){var l=!0,f=document.createTextNode("");new i(u).observe(f,{characterData:!0}),r=function(){f.data=l=!l}}else if(c&&c.resolve){var d=c.resolve();r=function(){d.then(u)}}else r=function(){o.call(n,u)};return function(n){var o={fn:n,next:void 0};t&&(t.next=o),e||(e=o,r()),t=o}}},{"./_cof":34,"./_global":45,"./_task":87}],65:[function(e,t,r){var n=e("./_an-object"),o=e("./_object-dps"),i=e("./_enum-bug-keys"),s=e("./_shared-key")("IE_PROTO"),c=function(){},a="prototype",u=function(){var t,r=e("./_dom-create")("iframe"),n=i.length,o=">";for(r.style.display="none",e("./_html").appendChild(r),r.src="javascript:",t=r.contentWindow.document,t.open(),t.write("<script>document.F=Object</script"+o),t.close(),u=t.F;n--;)delete u[a][i[n]];return u()};t.exports=Object.create||function(e,t){var r;return null!==e?(c[a]=n(e),r=new c,c[a]=null,r[s]=e):r=u(),void 0===t?r:o(r,t)}},{"./_an-object":31,"./_dom-create":39,"./_enum-bug-keys":40,"./_html":48,"./_object-dps":67,"./_shared-key":83}],66:[function(e,t,r){var n=e("./_an-object"),o=e("./_ie8-dom-define"),i=e("./_to-primitive"),s=Object.defineProperty;r.f=e("./_descriptors")?Object.defineProperty:function(e,t,r){if(n(e),t=i(t,!0),n(r),o)try{return s(e,t,r)}catch(c){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e}},{"./_an-object":31,"./_descriptors":38,"./_ie8-dom-define":49,"./_to-primitive":93}],67:[function(e,t,r){var n=e("./_object-dp"),o=e("./_an-object"),i=e("./_object-keys");t.exports=e("./_descriptors")?Object.defineProperties:function(e,t){o(e);for(var r,s=i(t),c=s.length,a=0;c>a;)n.f(e,r=s[a++],t[r]);return e}},{"./_an-object":31,"./_descriptors":38,"./_object-dp":66,"./_object-keys":74}],68:[function(e,t,r){var n=e("./_object-pie"),o=e("./_property-desc"),i=e("./_to-iobject"),s=e("./_to-primitive"),c=e("./_has"),a=e("./_ie8-dom-define"),u=Object.getOwnPropertyDescriptor;r.f=e("./_descriptors")?u:function(e,t){if(e=i(e),t=s(t,!0),a)try{return u(e,t)}catch(r){}if(c(e,t))return o(!n.f.call(e,t),e[t])}},{"./_descriptors":38,"./_has":46,"./_ie8-dom-define":49,"./_object-pie":75,"./_property-desc":77,"./_to-iobject":90,"./_to-primitive":93}],69:[function(e,t,r){var n=e("./_to-iobject"),o=e("./_object-gopn").f,i={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(e){try{return o(e)}catch(t){return s.slice()}};t.exports.f=function(e){return s&&"[object Window]"==i.call(e)?c(e):o(n(e))}},{"./_object-gopn":70,"./_to-iobject":90}],70:[function(e,t,r){var n=e("./_object-keys-internal"),o=e("./_enum-bug-keys").concat("length","prototype");r.f=Object.getOwnPropertyNames||function(e){return n(e,o)}},{"./_enum-bug-keys":40,"./_object-keys-internal":73}],71:[function(e,t,r){r.f=Object.getOwnPropertySymbols},{}],72:[function(e,t,r){var n=e("./_has"),o=e("./_to-object"),i=e("./_shared-key")("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(e){return e=o(e),n(e,i)?e[i]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?s:null}},{"./_has":46,"./_shared-key":83,"./_to-object":92}],73:[function(e,t,r){var n=e("./_has"),o=e("./_to-iobject"),i=e("./_array-includes")(!1),s=e("./_shared-key")("IE_PROTO");t.exports=function(e,t){var r,c=o(e),a=0,u=[];for(r in c)r!=s&&n(c,r)&&u.push(r);for(;t.length>a;)n(c,r=t[a++])&&(~i(u,r)||u.push(r));return u}},{"./_array-includes":32,"./_has":46,"./_shared-key":83,"./_to-iobject":90}],74:[function(e,t,r){var n=e("./_object-keys-internal"),o=e("./_enum-bug-keys");t.exports=Object.keys||function(e){return n(e,o)}},{"./_enum-bug-keys":40,"./_object-keys-internal":73}],75:[function(e,t,r){r.f={}.propertyIsEnumerable},{}],76:[function(e,t,r){var n=e("./_export"),o=e("./_core"),i=e("./_fails");t.exports=function(e,t){var r=(o.Object||{})[e]||Object[e],s={};s[e]=t(r),n(n.S+n.F*i(function(){r(1)}),"Object",s)}},{"./_core":35,"./_export":42,"./_fails":43}],77:[function(e,t,r){t.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},{}],78:[function(e,t,r){var n=e("./_hide");t.exports=function(e,t,r){for(var o in t)r&&e[o]?e[o]=t[o]:n(e,o,t[o]);return e}},{"./_hide":47}],79:[function(e,t,r){t.exports=e("./_hide")},{"./_hide":47}],80:[function(e,t,r){var n=e("./_is-object"),o=e("./_an-object"),i=function(e,t){if(o(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,r,n){try{n=e("./_ctx")(Function.call,e("./_object-gopd").f(Object.prototype,"__proto__").set,2),n(t,[]),r=!(t instanceof Array)}catch(o){r=!0}return function(e,t){return i(e,t),r?e.__proto__=t:n(e,t),e}}({},!1):void 0),check:i}},{"./_an-object":31,"./_ctx":36,"./_is-object":54,"./_object-gopd":68}],81:[function(e,t,r){"use strict";var n=e("./_global"),o=e("./_core"),i=e("./_object-dp"),s=e("./_descriptors"),c=e("./_wks")("species");t.exports=function(e){var t="function"==typeof o[e]?o[e]:n[e];s&&t&&!t[c]&&i.f(t,c,{configurable:!0,get:function(){return this}})}},{"./_core":35,"./_descriptors":38,"./_global":45,"./_object-dp":66,"./_wks":97}],82:[function(e,t,r){var n=e("./_object-dp").f,o=e("./_has"),i=e("./_wks")("toStringTag");t.exports=function(e,t,r){e&&!o(e=r?e:e.prototype,i)&&n(e,i,{configurable:!0,value:t})}},{"./_has":46,"./_object-dp":66,"./_wks":97}],83:[function(e,t,r){var n=e("./_shared")("keys"),o=e("./_uid");t.exports=function(e){return n[e]||(n[e]=o(e))}},{"./_shared":84,"./_uid":94}],84:[function(e,t,r){var n=e("./_global"),o="__core-js_shared__",i=n[o]||(n[o]={});t.exports=function(e){return i[e]||(i[e]={})}},{"./_global":45}],85:[function(e,t,r){var n=e("./_an-object"),o=e("./_a-function"),i=e("./_wks")("species");t.exports=function(e,t){var r,s=n(e).constructor;return void 0===s||void 0==(r=n(s)[i])?t:o(r)}},{"./_a-function":28,"./_an-object":31,"./_wks":97}],86:[function(e,t,r){var n=e("./_to-integer"),o=e("./_defined");t.exports=function(e){return function(t,r){var i,s,c=String(o(t)),a=n(r),u=c.length;return a<0||a>=u?e?"":void 0:(i=c.charCodeAt(a),i<55296||i>56319||a+1===u||(s=c.charCodeAt(a+1))<56320||s>57343?e?c.charAt(a):i:e?c.slice(a,a+2):(i-55296<<10)+(s-56320)+65536)}}},{"./_defined":37,"./_to-integer":89}],87:[function(e,t,r){var n,o,i,s=e("./_ctx"),c=e("./_invoke"),a=e("./_html"),u=e("./_dom-create"),l=e("./_global"),f=l.process,d=l.setImmediate,p=l.clearImmediate,_=l.MessageChannel,b=0,h={},y="onreadystatechange",v=function(){var e=+this;if(h.hasOwnProperty(e)){var t=h[e];delete h[e],t()}},j=function(e){v.call(e.data)};d&&p||(d=function(e){for(var t=[],r=1;arguments.length>r;)t.push(arguments[r++]);return h[++b]=function(){c("function"==typeof e?e:Function(e),t)},n(b),b},p=function(e){delete h[e]},"process"==e("./_cof")(f)?n=function(e){f.nextTick(s(v,e,1))}:_?(o=new _,i=o.port2,o.port1.onmessage=j,n=s(i.postMessage,i,1)):l.addEventListener&&"function"==typeof postMessage&&!l.importScripts?(n=function(e){l.postMessage(e+"","*")},l.addEventListener("message",j,!1)):n=y in u("script")?function(e){a.appendChild(u("script"))[y]=function(){a.removeChild(this),v.call(e)}}:function(e){setTimeout(s(v,e,1),0)}),t.exports={set:d,clear:p}},{"./_cof":34,"./_ctx":36,"./_dom-create":39,"./_global":45,"./_html":48,"./_invoke":50}],88:[function(e,t,r){var n=e("./_to-integer"),o=Math.max,i=Math.min;t.exports=function(e,t){return e=n(e),e<0?o(e+t,0):i(e,t)}},{"./_to-integer":89}],89:[function(e,t,r){var n=Math.ceil,o=Math.floor;t.exports=function(e){return isNaN(e=+e)?0:(e>0?o:n)(e)}},{}],90:[function(e,t,r){var n=e("./_iobject"),o=e("./_defined");t.exports=function(e){return n(o(e))}},{"./_defined":37,"./_iobject":51}],91:[function(e,t,r){var n=e("./_to-integer"),o=Math.min;t.exports=function(e){return e>0?o(n(e),9007199254740991):0}},{"./_to-integer":89}],92:[function(e,t,r){var n=e("./_defined");t.exports=function(e){return Object(n(e))}},{"./_defined":37}],93:[function(e,t,r){var n=e("./_is-object");t.exports=function(e,t){if(!n(e))return e;var r,o;if(t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;if("function"==typeof(r=e.valueOf)&&!n(o=r.call(e)))return o;if(!t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},{"./_is-object":54}],94:[function(e,t,r){var n=0,o=Math.random();t.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+o).toString(36))}},{}],95:[function(e,t,r){var n=e("./_global"),o=e("./_core"),i=e("./_library"),s=e("./_wks-ext"),c=e("./_object-dp").f;t.exports=function(e){var t=o.Symbol||(o.Symbol=i?{}:n.Symbol||{});"_"==e.charAt(0)||e in t||c(t,e,{value:s.f(e)})}},{"./_core":35,"./_global":45,"./_library":62,"./_object-dp":66,"./_wks-ext":96}],96:[function(e,t,r){r.f=e("./_wks")},{"./_wks":97}],97:[function(e,t,r){var n=e("./_shared")("wks"),o=e("./_uid"),i=e("./_global").Symbol,s="function"==typeof i,c=t.exports=function(e){return n[e]||(n[e]=s&&i[e]||(s?i:o)("Symbol."+e))};c.store=n},{"./_global":45,"./_shared":84,"./_uid":94}],98:[function(e,t,r){var n=e("./_classof"),o=e("./_wks")("iterator"),i=e("./_iterators");t.exports=e("./_core").getIteratorMethod=function(e){if(void 0!=e)return e[o]||e["@@iterator"]||i[n(e)]}},{"./_classof":33,"./_core":35,"./_iterators":60,"./_wks":97}],99:[function(e,t,r){"use strict";var n=e("./_add-to-unscopables"),o=e("./_iter-step"),i=e("./_iterators"),s=e("./_to-iobject");t.exports=e("./_iter-define")(Array,"Array",function(e,t){this._t=s(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,r=this._i++;return!e||r>=e.length?(this._t=void 0,o(1)):"keys"==t?o(0,r):"values"==t?o(0,e[r]):o(0,[r,e[r]])},"values"),i.Arguments=i.Array,n("keys"),n("values"),n("entries")},{"./_add-to-unscopables":29,"./_iter-define":57,"./_iter-step":59,"./_iterators":60,"./_to-iobject":90}],100:[function(e,t,r){var n=e("./_export");n(n.S,"Object",{create:e("./_object-create")})},{"./_export":42,"./_object-create":65}],101:[function(e,t,r){var n=e("./_export");n(n.S+n.F*!e("./_descriptors"),"Object",{defineProperty:e("./_object-dp").f})},{"./_descriptors":38,"./_export":42,"./_object-dp":66}],102:[function(e,t,r){var n=e("./_to-iobject"),o=e("./_object-gopd").f;e("./_object-sap")("getOwnPropertyDescriptor",function(){return function(e,t){return o(n(e),t)}})},{"./_object-gopd":68,"./_object-sap":76,"./_to-iobject":90}],103:[function(e,t,r){var n=e("./_to-object"),o=e("./_object-gpo");e("./_object-sap")("getPrototypeOf",function(){return function(e){return o(n(e))}})},{"./_object-gpo":72,"./_object-sap":76,"./_to-object":92}],104:[function(e,t,r){var n=e("./_to-object"),o=e("./_object-keys");e("./_object-sap")("keys",function(){return function(e){return o(n(e))}})},{"./_object-keys":74,"./_object-sap":76,"./_to-object":92}],105:[function(e,t,r){var n=e("./_export");n(n.S,"Object",{setPrototypeOf:e("./_set-proto").set})},{"./_export":42,"./_set-proto":80}],106:[function(e,t,r){},{}],107:[function(e,t,r){"use strict";var n,o,i,s=e("./_library"),c=e("./_global"),a=e("./_ctx"),u=e("./_classof"),l=e("./_export"),f=e("./_is-object"),d=(e("./_an-object"),e("./_a-function")),p=e("./_an-instance"),_=e("./_for-of"),b=(e("./_set-proto").set,e("./_species-constructor")),h=e("./_task").set,y=e("./_microtask")(),v="Promise",j=c.TypeError,g=c.process,m=c[v],g=c.process,w="process"==u(g),O=function(){},k=!!function(){try{var t=m.resolve(1),r=(t.constructor={})[e("./_wks")("species")]=function(e){e(O,O)};return(w||"function"==typeof PromiseRejectionEvent)&&t.then(O)instanceof r}catch(n){}}(),x=function(e,t){return e===t||e===m&&t===i},C=function(e){var t;return!(!f(e)||"function"!=typeof(t=e.then))&&t},E=function(e){return x(m,e)?new S(e):new o(e)},S=o=function(e){var t,r;this.promise=new e(function(e,n){if(void 0!==t||void 0!==r)throw j("Bad Promise constructor");t=e,r=n}),this.resolve=d(t),this.reject=d(r)},T=function(e){try{e()}catch(t){return{error:t}}},R=function(e,t){if(!e._n){e._n=!0;var r=e._c;y(function(){for(var n=e._v,o=1==e._s,i=0,s=function(t){var r,i,s=o?t.ok:t.fail,c=t.resolve,a=t.reject,u=t.domain;try{s?(o||(2==e._h&&P(e),e._h=1),s===!0?r=n:(u&&u.enter(),r=s(n),u&&u.exit()),r===t.promise?a(j("Promise-chain cycle")):(i=C(r))?i.call(r,c,a):c(r)):a(n)}catch(l){a(l)}};r.length>i;)s(r[i++]);e._c=[],e._n=!1,t&&!e._h&&M(e)})}},M=function(e){h.call(c,function(){var t,r,n,o=e._v;if(N(e)&&(t=T(function(){w?g.emit("unhandledRejection",o,e):(r=c.onunhandledrejection)?r({promise:e,reason:o}):(n=c.console)&&n.error&&n.error("Unhandled promise rejection",o)}),e._h=w||N(e)?2:1),e._a=void 0,t)throw t.error})},N=function(e){if(1==e._h)return!1;for(var t,r=e._a||e._c,n=0;r.length>n;)if(t=r[n++],t.fail||!N(t.promise))return!1;return!0},P=function(e){h.call(c,function(){var t;w?g.emit("rejectionHandled",e):(t=c.onrejectionhandled)&&t({promise:e,reason:e._v})})},D=function(e){var t=this;t._d||(t._d=!0,t=t._w||t,t._v=e,t._s=2,t._a||(t._a=t._c.slice()),R(t,!0))},L=function(e){var t,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===e)throw j("Promise can't be resolved itself");(t=C(e))?y(function(){var n={_w:r,_d:!1};try{t.call(e,a(L,n,1),a(D,n,1))}catch(o){D.call(n,o)}}):(r._v=e,r._s=1,R(r,!1))}catch(n){D.call({_w:r,_d:!1},n)}}};k||(m=function(e){p(this,m,v,"_h"),d(e),n.call(this);try{e(a(L,this,1),a(D,this,1))}catch(t){D.call(this,t)}},n=function(e){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},n.prototype=e("./_redefine-all")(m.prototype,{then:function(e,t){var r=E(b(this,m));return r.ok="function"!=typeof e||e,r.fail="function"==typeof t&&t,r.domain=w?g.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&R(this,!1),r.promise},"catch":function(e){return this.then(void 0,e)}}),S=function(){var e=new n;this.promise=e,this.resolve=a(L,e,1),this.reject=a(D,e,1)}),l(l.G+l.W+l.F*!k,{Promise:m}),e("./_set-to-string-tag")(m,v),e("./_set-species")(v),i=e("./_core")[v],l(l.S+l.F*!k,v,{reject:function(e){var t=E(this),r=t.reject;return r(e),
t.promise}}),l(l.S+l.F*(s||!k),v,{resolve:function(e){if(e instanceof m&&x(e.constructor,this))return e;var t=E(this),r=t.resolve;return r(e),t.promise}}),l(l.S+l.F*!(k&&e("./_iter-detect")(function(e){m.all(e)["catch"](O)})),v,{all:function(e){var t=this,r=E(t),n=r.resolve,o=r.reject,i=T(function(){var r=[],i=0,s=1;_(e,!1,function(e){var c=i++,a=!1;r.push(void 0),s++,t.resolve(e).then(function(e){a||(a=!0,r[c]=e,--s||n(r))},o)}),--s||n(r)});return i&&o(i.error),r.promise},race:function(e){var t=this,r=E(t),n=r.reject,o=T(function(){_(e,!1,function(e){t.resolve(e).then(r.resolve,n)})});return o&&n(o.error),r.promise}})},{"./_a-function":28,"./_an-instance":30,"./_an-object":31,"./_classof":33,"./_core":35,"./_ctx":36,"./_export":42,"./_for-of":44,"./_global":45,"./_is-object":54,"./_iter-detect":58,"./_library":62,"./_microtask":64,"./_redefine-all":78,"./_set-proto":80,"./_set-species":81,"./_set-to-string-tag":82,"./_species-constructor":85,"./_task":87,"./_wks":97}],108:[function(e,t,r){"use strict";var n=e("./_string-at")(!0);e("./_iter-define")(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,r=this._i;return r>=t.length?{value:void 0,done:!0}:(e=n(t,r),this._i+=e.length,{value:e,done:!1})})},{"./_iter-define":57,"./_string-at":86}],109:[function(e,t,r){"use strict";var n=e("./_global"),o=e("./_has"),i=e("./_descriptors"),s=e("./_export"),c=e("./_redefine"),a=e("./_meta").KEY,u=e("./_fails"),l=e("./_shared"),f=e("./_set-to-string-tag"),d=e("./_uid"),p=e("./_wks"),_=e("./_wks-ext"),b=e("./_wks-define"),h=e("./_keyof"),y=e("./_enum-keys"),v=e("./_is-array"),j=e("./_an-object"),g=e("./_to-iobject"),m=e("./_to-primitive"),w=e("./_property-desc"),O=e("./_object-create"),k=e("./_object-gopn-ext"),x=e("./_object-gopd"),C=e("./_object-dp"),E=e("./_object-keys"),S=x.f,T=C.f,R=k.f,M=n.Symbol,N=n.JSON,P=N&&N.stringify,D="prototype",L=p("_hidden"),A=p("toPrimitive"),F={}.propertyIsEnumerable,I=l("symbol-registry"),U=l("symbols"),V=l("op-symbols"),z=Object[D],H="function"==typeof M,B=n.QObject,W=!B||!B[D]||!B[D].findChild,J=i&&u(function(){return 7!=O(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a})?function(e,t,r){var n=S(z,t);n&&delete z[t],T(e,t,r),n&&e!==z&&T(z,t,n)}:T,Y=function(e){var t=U[e]=O(M[D]);return t._k=e,t},q=H&&"symbol"==typeof M.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof M},K=function(e,t,r){return e===z&&K(V,t,r),j(e),t=m(t,!0),j(r),o(U,t)?(r.enumerable?(o(e,L)&&e[L][t]&&(e[L][t]=!1),r=O(r,{enumerable:w(0,!1)})):(o(e,L)||T(e,L,w(1,{})),e[L][t]=!0),J(e,t,r)):T(e,t,r)},G=function(e,t){j(e);for(var r,n=y(t=g(t)),o=0,i=n.length;i>o;)K(e,r=n[o++],t[r]);return e},Z=function(e,t){return void 0===t?O(e):G(O(e),t)},X=function(e){var t=F.call(this,e=m(e,!0));return!(this===z&&o(U,e)&&!o(V,e))&&(!(t||!o(this,e)||!o(U,e)||o(this,L)&&this[L][e])||t)},$=function(e,t){if(e=g(e),t=m(t,!0),e!==z||!o(U,t)||o(V,t)){var r=S(e,t);return!r||!o(U,t)||o(e,L)&&e[L][t]||(r.enumerable=!0),r}},Q=function(e){for(var t,r=R(g(e)),n=[],i=0;r.length>i;)o(U,t=r[i++])||t==L||t==a||n.push(t);return n},ee=function(e){for(var t,r=e===z,n=R(r?V:g(e)),i=[],s=0;n.length>s;)!o(U,t=n[s++])||r&&!o(z,t)||i.push(U[t]);return i};H||(M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor!");var e=d(arguments.length>0?arguments[0]:void 0),t=function(r){this===z&&t.call(V,r),o(this,L)&&o(this[L],e)&&(this[L][e]=!1),J(this,e,w(1,r))};return i&&W&&J(z,e,{configurable:!0,set:t}),Y(e)},c(M[D],"toString",function(){return this._k}),x.f=$,C.f=K,e("./_object-gopn").f=k.f=Q,e("./_object-pie").f=X,e("./_object-gops").f=ee,i&&!e("./_library")&&c(z,"propertyIsEnumerable",X,!0),_.f=function(e){return Y(p(e))}),s(s.G+s.W+s.F*!H,{Symbol:M});for(var te="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),re=0;te.length>re;)p(te[re++]);for(var te=E(p.store),re=0;te.length>re;)b(te[re++]);s(s.S+s.F*!H,"Symbol",{"for":function(e){return o(I,e+="")?I[e]:I[e]=M(e)},keyFor:function(e){if(q(e))return h(I,e);throw TypeError(e+" is not a symbol!")},useSetter:function(){W=!0},useSimple:function(){W=!1}}),s(s.S+s.F*!H,"Object",{create:Z,defineProperty:K,defineProperties:G,getOwnPropertyDescriptor:$,getOwnPropertyNames:Q,getOwnPropertySymbols:ee}),N&&s(s.S+s.F*(!H||u(function(){var e=M();return"[null]"!=P([e])||"{}"!=P({a:e})||"{}"!=P(Object(e))})),"JSON",{stringify:function(e){if(void 0!==e&&!q(e)){for(var t,r,n=[e],o=1;arguments.length>o;)n.push(arguments[o++]);return t=n[1],"function"==typeof t&&(r=t),!r&&v(t)||(t=function(e,t){if(r&&(t=r.call(this,e,t)),!q(t))return t}),n[1]=t,P.apply(N,n)}}}),M[D][A]||e("./_hide")(M[D],A,M[D].valueOf),f(M,"Symbol"),f(Math,"Math",!0),f(n.JSON,"JSON",!0)},{"./_an-object":31,"./_descriptors":38,"./_enum-keys":41,"./_export":42,"./_fails":43,"./_global":45,"./_has":46,"./_hide":47,"./_is-array":53,"./_keyof":61,"./_library":62,"./_meta":63,"./_object-create":65,"./_object-dp":66,"./_object-gopd":68,"./_object-gopn":70,"./_object-gopn-ext":69,"./_object-gops":71,"./_object-keys":74,"./_object-pie":75,"./_property-desc":77,"./_redefine":79,"./_set-to-string-tag":82,"./_shared":84,"./_to-iobject":90,"./_to-primitive":93,"./_uid":94,"./_wks":97,"./_wks-define":95,"./_wks-ext":96}],110:[function(e,t,r){e("./_wks-define")("asyncIterator")},{"./_wks-define":95}],111:[function(e,t,r){e("./_wks-define")("observable")},{"./_wks-define":95}],112:[function(e,t,r){e("./es6.array.iterator");for(var n=e("./_global"),o=e("./_hide"),i=e("./_iterators"),s=e("./_wks")("toStringTag"),c=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],a=0;a<5;a++){var u=c[a],l=n[u],f=l&&l.prototype;f&&!f[s]&&o(f,s,u),i[u]=i.Array}},{"./_global":45,"./_hide":47,"./_iterators":60,"./_wks":97,"./es6.array.iterator":99}],113:[function(e,t,r){window.MutationObserver=window.MutationObserver||window.WebKitMutationObserver||function(e){function t(e){this.g=[],this.k=e}function r(e){!function r(){var n=e.takeRecords();n.length&&e.k(n,e),e.f=setTimeout(r,t._period)}()}function n(t){var r,n={type:null,target:null,addedNodes:[],removedNodes:[],previousSibling:null,nextSibling:null,attributeName:null,attributeNamespace:null,oldValue:null};for(r in t)n[r]!==e&&t[r]!==e&&(n[r]=t[r]);return n}function o(e,t){var r=c(e,t);return function(n){var o,a=n.length;t.a&&r.a&&i(n,e,r.a,t.d),(t.b||t.e)&&(o=s(n,e,r,t)),(o||n.length!==a)&&(r=c(e,t))}}function i(t,r,o,i){for(var s,c,a={},u=r.attributes,l=u.length;l--;)s=u[l],c=s.name,i&&i[c]===e||(s.value!==o[c]&&t.push(n({type:"attributes",target:r,attributeName:c,oldValue:o[c],attributeNamespace:s.namespaceURI})),a[c]=!0);for(c in o)a[c]||t.push(n({target:r,type:"attributes",attributeName:c,oldValue:o[c]}))}function s(t,r,o,s){function c(e,r,o,c,a){var l=e.length-1;a=-~((l-a)/2);for(var f,d,p;p=e.pop();)f=o[p.h],d=c[p.i],s.b&&a&&Math.abs(p.h-p.i)>=l&&(t.push(n({type:"childList",target:r,addedNodes:[f],removedNodes:[f],nextSibling:f.nextSibling,previousSibling:f.previousSibling})),a--),s.a&&d.a&&i(t,f,d.a,s.d),s.c&&3===f.nodeType&&f.nodeValue!==d.c&&t.push(n({type:"characterData",target:f})),s.e&&u(f,d)}function u(r,o){for(var d,p,_,b,h,y=r.childNodes,v=o.b,j=y.length,g=v?v.length:0,m=0,w=0,O=0;w<j||O<g;)b=y[w],h=(_=v[O])&&_.j,b===h?(s.a&&_.a&&i(t,b,_.a,s.d),s.c&&_.c!==e&&b.nodeValue!==_.c&&t.push(n({type:"characterData",target:b})),p&&c(p,r,y,v,m),s.e&&(b.childNodes.length||_.b&&_.b.length)&&u(b,_),w++,O++):(l=!0,d||(d={},p=[]),b&&(d[_=a(b)]||(d[_]=!0,-1===(_=f(v,b,O,"j"))?s.b&&(t.push(n({type:"childList",target:r,addedNodes:[b],nextSibling:b.nextSibling,previousSibling:b.previousSibling})),m++):p.push({h:w,i:_})),w++),h&&h!==y[w]&&(d[_=a(h)]||(d[_]=!0,-1===(_=f(y,h,w))?s.b&&(t.push(n({type:"childList",target:o.j,removedNodes:[h],nextSibling:v[O+1],previousSibling:v[O-1]})),m--):p.push({h:_,i:O})),O++));p&&c(p,r,y,v,m)}var l;return u(r,o),l}function c(e,t){var r=!0;return function n(e){var o={j:e};return!t.c||3!==e.nodeType&&8!==e.nodeType?(t.a&&r&&1===e.nodeType&&(o.a=l(e.attributes,function(e,r){return t.d&&!t.d[r.name]||(e[r.name]=r.value),e})),r&&(t.b||t.c||t.a&&t.e)&&(o.b=u(e.childNodes,n)),r=t.e):o.c=e.nodeValue,o}(e)}function a(e){try{return e.id||(e.mo_id=e.mo_id||d++)}catch(t){try{return e.nodeValue}catch(r){return d++}}}function u(e,t){for(var r=[],n=0;n<e.length;n++)r[n]=t(e[n],n,e);return r}function l(e,t){for(var r={},n=0;n<e.length;n++)r=t(r,e[n],n,e);return r}function f(e,t,r,n){for(;r<e.length;r++)if((n?e[r][n]:e[r])===t)return r;return-1}t._period=30,t.prototype={observe:function(e,t){for(var n={a:!!(t.attributes||t.attributeFilter||t.attributeOldValue),b:!!t.childList,e:!!t.subtree,c:!(!t.characterData&&!t.characterDataOldValue)},i=this.g,s=0;s<i.length;s++)i[s].m===e&&i.splice(s,1);t.attributeFilter&&(n.d=l(t.attributeFilter,function(e,t){return e[t]=!0,e})),i.push({m:e,l:o(e,n)}),this.f||r(this)},takeRecords:function(){for(var e=[],t=this.g,r=0;r<t.length;r++)t[r].l(e);return e},disconnect:function(){this.g=[],clearTimeout(this.f),this.f=null}};var d=1;return t}(void 0)},{}],114:[function(e,t,r){Object.observe||function(e,t,r,n){"use strict";var o,i,s=["add","update","delete","reconfigure","setPrototype","preventExtensions"],c=t.isArray||function(e){return function(t){return"[object Array]"===e.call(t)}}(e.prototype.toString),a=t.prototype.indexOf?t.indexOf||function(e,r,n){return t.prototype.indexOf.call(e,r,n)}:function(e,t,r){for(var n=r||0;n<e.length;n++)if(e[n]===t)return n;return-1},u=r.Map!==n&&Map.prototype.forEach?function(){return new Map}:function(){var e=[],t=[];return{size:0,has:function(t){return a(e,t)>-1},get:function(r){return t[a(e,r)]},set:function(r,n){var o=a(e,r);o===-1?(e.push(r),t.push(n),this.size++):t[o]=n},"delete":function(r){var n=a(e,r);n>-1&&(e.splice(n,1),t.splice(n,1),this.size--)},forEach:function(r){for(var n=0;n<e.length;n++)r.call(arguments[1],t[n],e[n],this)}}},l=e.getOwnPropertyNames?function(){var t=e.getOwnPropertyNames;try{arguments.callee}catch(r){var n=(t(a).join(" ")+" ").replace(/prototype |length |name /g,"").slice(0,-1).split(" ");n.length&&(t=function(t){var r=e.getOwnPropertyNames(t);if("function"==typeof t)for(var o,i=0;i<n.length;)(o=a(r,n[i++]))>-1&&r.splice(o,1);return r})}return t}():function(t){var r,n,o=[];if("hasOwnProperty"in t)for(r in t)t.hasOwnProperty(r)&&o.push(r);else{n=e.hasOwnProperty;for(r in t)n.call(t,r)&&o.push(r)}return c(t)&&o.push("length"),o},f=e.getPrototypeOf,d=e.defineProperties&&e.getOwnPropertyDescriptor,p=r.requestAnimationFrame||r.webkitRequestAnimationFrame||function(){var e=+new Date,t=e;return function(r){return setTimeout(function(){r((t=+new Date)-e)},17)}}(),_=function(e,t,r){var n=o.get(e);n?(h(n,e),g(e,n,t,r)):(n=b(e),g(e,n,t,r),1===o.size&&p(y))},b=function(t,r){var n,i=l(t),s=[],c=0,r={handlers:u(),frozen:!!e.isFrozen&&e.isFrozen(t),extensible:!e.isExtensible||e.isExtensible(t),proto:f&&f(t),properties:i,values:s,notifier:j(t,r)};if(d)for(n=r.descriptors=[];c<i.length;)n[c]=d(t,i[c]),s[c]=t[i[c++]];else for(;c<i.length;)s[c]=t[i[c++]];return o.set(t,r),r},h=function(){var t=d?function(e,t,r,n,o){var i=t.properties[r],s=e[i],c=t.values[r],a=t.descriptors[r];"value"in o&&(c===s?0===c&&1/c!==1/s:c===c||s===s)&&(m(e,t,{name:i,type:"update",object:e,oldValue:c},n),t.values[r]=s),!a.configurable||o.configurable&&o.writable===a.writable&&o.enumerable===a.enumerable&&o.get===a.get&&o.set===a.set||(m(e,t,{name:i,type:"reconfigure",object:e,oldValue:c},n),t.descriptors[r]=o)}:function(e,t,r,n){var o=t.properties[r],i=e[o],s=t.values[r];(s===i?0===s&&1/s!==1/i:s===s||i===i)&&(m(e,t,{name:o,type:"update",object:e,oldValue:s},n),t.values[r]=i)},r=d?function(e,r,n,o,i){for(var s,c=r.length;n&&c--;)null!==r[c]&&(s=d(e,r[c]),n--,s?t(e,o,c,i,s):(m(e,o,{name:r[c],type:"delete",object:e,oldValue:o.values[c]},i),o.properties.splice(c,1),o.values.splice(c,1),o.descriptors.splice(c,1)))}:function(e,t,r,n,o){for(var i=t.length;r&&i--;)null!==t[i]&&(m(e,n,{name:t[i],type:"delete",object:e,oldValue:n.values[i]},o),n.properties.splice(i,1),n.values.splice(i,1),r--)};return function(n,o,i){if(n.handlers.size&&!n.frozen){var s,c,u,p,_,b,h,y,v=n.values,j=n.descriptors,g=0;if(n.extensible)if(s=n.properties.slice(),c=s.length,u=l(o),j){for(;g<u.length;)_=u[g++],p=a(s,_),y=d(o,_),p===-1?(m(o,n,{name:_,type:"add",object:o},i),n.properties.push(_),v.push(o[_]),j.push(y)):(s[p]=null,c--,t(o,n,p,i,y));r(o,s,c,n,i),e.isExtensible(o)||(n.extensible=!1,m(o,n,{type:"preventExtensions",object:o},i),n.frozen=e.isFrozen(o))}else{for(;g<u.length;)_=u[g++],p=a(s,_),b=o[_],p===-1?(m(o,n,{name:_,type:"add",object:o},i),n.properties.push(_),v.push(b)):(s[p]=null,c--,t(o,n,p,i));r(o,s,c,n,i)}else if(!n.frozen){for(;g<s.length;g++)_=s[g],t(o,n,g,i,d(o,_));e.isFrozen(o)&&(n.frozen=!0)}f&&(h=f(o),h!==n.proto&&(m(o,n,{type:"setPrototype",name:"__proto__",object:o,oldValue:n.proto}),n.proto=h))}}}(),y=function(){o.size&&(o.forEach(h),i.forEach(v),p(y))},v=function(e,t){var r=e.changeRecords;r.length&&(e.changeRecords=[],t(r))},j=function(e,t){return arguments.length<2&&(t=o.get(e)),t&&t.notifier||{notify:function(t){t.type;var r=o.get(e);if(r){var n,i={object:e};for(n in t)"object"!==n&&(i[n]=t[n]);m(e,r,i)}},performChange:function(t,r){if("string"!=typeof t)throw new TypeError("Invalid non-string changeType");if("function"!=typeof r)throw new TypeError("Cannot perform non-function");var i,s,c=o.get(e),a=arguments[2],u=a===n?r():r.call(a);if(c&&h(c,e,t),c&&u&&"object"==typeof u){s={object:e,type:t};for(i in u)"object"!==i&&"type"!==i&&(s[i]=u[i]);m(e,c,s)}}}},g=function(e,t,r,n){var o=i.get(r);o||i.set(r,o={observed:u(),changeRecords:[]}),o.observed.set(e,{acceptList:n.slice(),data:t}),t.handlers.set(r,o)},m=function(e,t,r,n){t.handlers.forEach(function(t){var o=t.observed.get(e).acceptList;("string"!=typeof n||a(o,n)===-1)&&a(o,r.type)>-1&&t.changeRecords.push(r)})};o=u(),i=u(),e.observe=function(t,r,o){if(!t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Object.observe cannot observe non-object");if("function"!=typeof r)throw new TypeError("Object.observe cannot deliver to non-function");if(e.isFrozen&&e.isFrozen(r))throw new TypeError("Object.observe cannot deliver to a frozen function object");if(o===n)o=s;else if(!o||"object"!=typeof o)throw new TypeError("Third argument to Object.observe must be an array of strings.");return _(t,r,o),t},e.unobserve=function(e,t){if(null===e||"object"!=typeof e&&"function"!=typeof e)throw new TypeError("Object.unobserve cannot unobserve non-object");if("function"!=typeof t)throw new TypeError("Object.unobserve cannot deliver to non-function");var r,n=i.get(t);return n&&(r=n.observed.get(e))&&(n.observed.forEach(function(e,t){h(e.data,t)}),p(function(){v(n,t)}),1===n.observed.size&&n.observed.has(e)?i["delete"](t):n.observed["delete"](e),1===r.data.handlers.size?o["delete"](e):r.data.handlers["delete"](t)),e},e.getNotifier=function(t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Object.getNotifier cannot getNotifier non-object");return e.isFrozen&&e.isFrozen(t)?null:j(t)},e.deliverChangeRecords=function(e){if("function"!=typeof e)throw new TypeError("Object.deliverChangeRecords cannot deliver to non-function");var t=i.get(e);t&&(t.observed.forEach(function(e,t){h(e.data,t)}),v(t,e))}}(Object,Array,this)},{}],115:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0}),r.DataObjectObserver=r.DataObjectReporter=r.Syncher=void 0,e("mutationobserver-shim"),e("object.observe"),e("array.observe");var o=e("./syncher/Syncher"),i=n(o),s=e("./syncher/DataObjectReporter"),c=n(s),a=e("./syncher/DataObjectObserver"),u=n(a);r.Syncher=i["default"],r.DataObjectReporter=c["default"],r.DataObjectObserver=u["default"]},{"./syncher/DataObjectObserver":118,"./syncher/DataObjectReporter":119,"./syncher/Syncher":122,"array.observe":1,"mutationobserver-shim":113,"object.observe":114}],116:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var o=e("babel-runtime/core-js/promise"),i=n(o),s=e("babel-runtime/core-js/object/keys"),c=n(s),a=e("babel-runtime/helpers/classCallCheck"),u=n(a),l=e("babel-runtime/helpers/createClass"),f=n(l),d=e("./SyncObject"),p=n(d),_=e("./DataObjectChild"),b=n(_),h=e("../utils/utils.js"),y=function(){function e(t,r,n,o,i,s){(0,u["default"])(this,e);var c=this;c._syncher=t,c._url=r,c._schema=n,c._status=o,c._syncObj=new p["default"](i),c._childrens=s,c._version=0,c._childId=0,c._childrenObjects={},c._childrenListeners=[],c._owner=t._owner,c._bus=t._bus}return(0,f["default"])(e,[{key:"_allocateListeners",value:function(){var e=this,t=this,r=t._url+"/children/";t._childrens&&t._childrens.forEach(function(n){var o=r+n,i=t._bus.addListener(o,function(r){if(r.from!==e._owner)switch(console.log("DataObject-Children-RCV: ",r),r.type){case"create":t._onChildCreate(r);break;case"delete":console.log(r);break;default:t._changeChildren(r)}});t._childrenListeners.push(i)})}},{key:"_releaseListeners",value:function(){var e=this;e._childrenListeners.forEach(function(e){e.remove()}),(0,c["default"])(e._childrenObjects).forEach(function(t){e._childrenObjects[t]._releaseListeners()})}},{key:"pause",value:function(){throw"Not implemented"}},{key:"resume",value:function(){throw"Not implemented"}},{key:"stop",value:function(){throw"Not implemented"}},{key:"addChild",value:function(e,t){var r=this;r._childId++;var n=r._owner+"#"+r._childId,o=r._url+"/children/"+e,s={type:"create",from:r._owner,to:o,body:{resource:n,value:t}};return new i["default"](function(e){var i=r._bus.postMessage(s);console.log("create-reporter-child( "+r._owner+" ): ",s);var c=new b["default"](r,n,t,r._owner,i);c.onChange(function(e){r._onChange(e,{path:o,childId:n})}),r._childrenObjects[n]=c,e(c)})}},{key:"onAddChild",value:function(e){this._onAddChildrenHandler=e}},{key:"_onChildCreate",value:function(e){var t=this,r=e.body.resource;console.log("create-observer-child( "+t._owner+" ): ",e);var n=new b["default"](t,r,e.body.value);t._childrenObjects[r]=n,setTimeout(function(){t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:200,source:t._owner}})});var o={type:e.type,from:e.from,url:e.to,value:e.body.value,childId:r,identity:e.body.identity};t._onAddChildrenHandler&&(console.log("ADD-CHILDREN-EVENT: ",o),t._onAddChildrenHandler(o))}},{key:"_onChange",value:function(e,t){var r=this;if(r._version++,"on"===r._status){var n={type:"update",from:r._url,to:r._url+"/changes",body:{version:r._version,source:r._owner,attribute:e.field}};e.oType===d.ObjectType.OBJECT?e.cType!==d.ChangeType.REMOVE&&(n.body.value=e.data):(n.body.attributeType=e.oType,n.body.value=e.data,e.cType!==d.ChangeType.UPDATE&&(n.body.operation=e.cType)),t&&(n.to=t.path,n.body.resource=t.childId),r._bus.postMessage(n)}}},{key:"_changeObject",value:function(e,t){var r=this;if(r._version+1===t.body.version){r._version++;var n=t.body.attribute,o=(0,h.deepClone)(t.body.value),i=e.findBefore(n);if(t.body.attributeType===d.ObjectType.ARRAY)if(t.body.operation===d.ChangeType.ADD){var s=i.obj,c=i.last;Array.prototype.splice.apply(s,[c,0].concat(o))}else if(t.body.operation===d.ChangeType.REMOVE){var a=i.obj,u=i.last;a.splice(u,o)}else i.obj[i.last]=o;else t.body.value?i.obj[i.last]=o:delete i.obj[i.last]}else console.log("UNSYNCHRONIZED VERSION: (data => "+r._version+", msg => "+t.body.version+")")}},{key:"_changeChildren",value:function(e){var t=this;console.log("Change children: ",t._owner,e);var r=e.body.resource,n=t._childrenObjects[r];n?t._changeObject(n._syncObj,e):console.log("No children found for: ",r)}},{key:"url",get:function(){return this._url}},{key:"schema",get:function(){return this._schema}},{key:"status",get:function(){return this._status}},{key:"data",get:function(){return this._syncObj.data}},{key:"childrens",get:function(){return this._childrenObjects}}]),e}();r["default"]=y,t.exports=r["default"]},{"../utils/utils.js":123,"./DataObjectChild":117,"./SyncObject":121,"babel-runtime/core-js/object/keys":7,"babel-runtime/core-js/promise":9,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13}],117:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var o=e("babel-runtime/helpers/classCallCheck"),i=n(o),s=e("babel-runtime/helpers/createClass"),c=n(s),a=e("./SyncObject"),u=n(a),l=function(){function e(t,r,n,o,s){(0,i["default"])(this,e);var c=this;c._parent=t,c._childId=r,c._owner=o,c._msgId=s,c._syncObj=new u["default"](n),c._bus=t._bus,c._allocateListeners()}return(0,c["default"])(e,[{key:"_allocateListeners",value:function(){var e=this;e._owner&&(e._listener=e._bus.addListener(e._owner,function(t){"response"===t.type&&t.id===e._msgId&&(console.log("DataObjectChild.onResponse:",t),e._onResponse(t))}))}},{key:"_releaseListeners",value:function(){var e=this;e._listener&&e._listener.remove()}},{key:"delete",value:function(){var e=this;delete e._parent._children[e._childId],e._releaseListeners()}},{key:"onChange",value:function(e){this._syncObj.observe(function(t){e(t)})}},{key:"onResponse",value:function(e){this._onResponseHandler=e}},{key:"_onResponse",value:function(e){var t=this,r={type:e.type,url:e.body.source,code:e.body.code};t._onResponseHandler&&t._onResponseHandler(r)}},{key:"childId",get:function(){return this._childId}},{key:"data",get:function(){return this._syncObj.data}}]),e}();r["default"]=l,t.exports=r["default"]},{"./SyncObject":121,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13}],118:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var o=e("babel-runtime/core-js/object/keys"),i=n(o),s=e("babel-runtime/core-js/object/get-prototype-of"),c=n(s),a=e("babel-runtime/helpers/classCallCheck"),u=n(a),l=e("babel-runtime/helpers/createClass"),f=n(l),d=e("babel-runtime/helpers/possibleConstructorReturn"),p=n(d),_=e("babel-runtime/helpers/get"),b=n(_),h=e("babel-runtime/helpers/inherits"),y=n(h),v=e("./DataObject"),j=n(v),g=e("./DataObjectChild"),m=n(g),w={ANY:"any",START:"start",EXACT:"exact"},O=function(e){function t(e,r,n,o,s,a,l){(0,u["default"])(this,t);var f=(0,p["default"])(this,(0,c["default"])(t).call(this,e,r,n,o,s.data,a)),d=f;return d._version=l,d._filters={},d._syncObj.observe(function(e){d._onFilter(e)}),(0,i["default"])(s.childrens).forEach(function(e){var t=s.childrens[e];d._childrenObjects[e]=new m["default"](d,e,t)}),d._allocateListeners(),f}return(0,y["default"])(t,e),(0,f["default"])(t,[{key:"_allocateListeners",value:function(){(0,b["default"])((0,c["default"])(t.prototype),"_allocateListeners",this).call(this);var e=this;e._changeListener=e._bus.addListener(e._url+"/changes",function(t){"update"===t.type&&(console.log("DataObjectObserver-"+e._url+"-RCV: ",t),e._changeObject(e._syncObj,t))})}},{key:"_releaseListeners",value:function(){(0,b["default"])((0,c["default"])(t.prototype),"_releaseListeners",this).call(this);var e=this;e._changeListener.remove()}},{key:"delete",value:function(){var e=this;e._releaseListeners(),delete e._syncher._observers[e._url]}},{key:"unsubscribe",value:function(){var e=this,t={type:"unsubscribe",from:e._owner,to:e._syncher._subURL,body:{resource:e._url}};e._bus.postMessage(t,function(t){console.log("DataObjectObserver-UNSUBSCRIBE: ",t),200===t.body.code&&(e._releaseListeners(),delete e._syncher._observers[e._url])})}},{key:"onChange",value:function(e,t){var r=e,n={type:w.EXACT,callback:t},o=e.indexOf("*");o===e.length-1&&(0===o?n.type=w.ANY:(n.type=w.START,r=e.substr(0,e.length-1))),this._filters[r]=n}},{key:"_onFilter",value:function(e){var t=this;(0,i["default"])(t._filters).forEach(function(r){var n=t._filters[r];n.type===w.ANY?n.callback(e):n.type===w.START?0===e.field.indexOf(r)&&n.callback(e):n.type===w.EXACT&&e.field===r&&n.callback(e)})}}]),t}(j["default"]);r["default"]=O,t.exports=r["default"]},{"./DataObject":116,"./DataObjectChild":117,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/core-js/object/keys":7,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/get":14,"babel-runtime/helpers/inherits":15,"babel-runtime/helpers/possibleConstructorReturn":16}],119:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var o=e("babel-runtime/core-js/object/keys"),i=n(o),s=e("babel-runtime/core-js/object/get-prototype-of"),c=n(s),a=e("babel-runtime/helpers/classCallCheck"),u=n(a),l=e("babel-runtime/helpers/createClass"),f=n(l),d=e("babel-runtime/helpers/possibleConstructorReturn"),p=n(d),_=e("babel-runtime/helpers/get"),b=n(_),h=e("babel-runtime/helpers/inherits"),y=n(h),v=e("./DataObject"),j=n(v),g=e("../utils/utils.js"),m=function(e){function t(e,r,n,o,i,s){(0,u["default"])(this,t);var a=(0,p["default"])(this,(0,c["default"])(t).call(this,e,r,n,o,i,s)),l=a;return l._subscriptions={},l._syncObj.observe(function(e){console.log("DataObjectReporter-"+r+"-SEND: ",e),l._onChange(e)}),l._allocateListeners(),a}return(0,y["default"])(t,e),(0,f["default"])(t,[{key:"_allocateListeners",value:function(){(0,b["default"])((0,c["default"])(t.prototype),"_allocateListeners",this).call(this);var e=this;e._objectListener=e._bus.addListener(e._url,function(t){switch(console.log("DataObject-"+e._url+"-RCV: ",t),t.type){case"response":e._onResponse(t);break;case"read":e._onRead(t)}})}},{key:"_releaseListeners",value:function(){(0,b["default"])((0,c["default"])(t.prototype),"_releaseListeners",this).call(this);var e=this;e._objectListener.remove()}},{key:"inviteObservers",value:function(e){var t=this,r={type:"create",from:t._syncher._owner,to:t._syncher._subURL,body:{resource:t._url,schema:t._schema,value:t._syncObj.data,authorise:e}};t._bus.postMessage(r)}},{key:"delete",value:function(){var e=this,t={type:"delete",from:e._owner,to:e._syncher._subURL,body:{resource:e._url}};e._bus.postMessage(t,function(t){console.log("DataObjectReporter-DELETE: ",t),200===t.body.code&&(e._releaseListeners(),delete e._syncher._reporters[e._url])})}},{key:"onSubscription",value:function(e){this._onSubscriptionHandler=e}},{key:"onResponse",value:function(e){this._onResponseHandler=e}},{key:"onRead",value:function(e){this._onReadHandler=e}},{key:"_onForward",value:function(e){var t=this;switch(console.log("DataObjectReporter-RCV: ",e),e.body.type){case"subscribe":t._onSubscribe(e);break;case"unsubscribe":t._onUnSubscribe(e)}}},{key:"_onSubscribe",value:function(e){var t=this,r=e.body.from,n={type:e.body.type,url:r,identity:e.body.identity,accept:function(){var n={url:r,status:"on"};t._subscriptions[r]=n;var o={};return(0,i["default"])(t._childrenObjects).forEach(function(e){var r=t._childrenObjects[e].data;o[e]=(0,g.deepClone)(r)}),t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:200,schema:t._schema,version:t._version,value:{data:(0,g.deepClone)(t.data),childrens:o}}}),n},reject:function(r){t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:403,desc:r}})}};t._onSubscriptionHandler&&(console.log("SUBSCRIPTION-EVENT: ",n),t._onSubscriptionHandler(n))}},{key:"_onUnSubscribe",value:function(e){var t=this,r=e.body.from,n=t._subscriptions[r];delete t._subscriptions[r];var o={type:e.body.type,url:r,object:n};t._onSubscriptionHandler&&(console.log("UN-SUBSCRIPTION-EVENT: ",o),t._onSubscriptionHandler(o))}},{key:"_onResponse",value:function(e){var t=this,r={type:e.type,url:e.from,code:e.body.code};t._onResponseHandler&&(console.log("RESPONSE-EVENT: ",r),t._onResponseHandler(r))}},{key:"_onRead",value:function(e){var t=this,r={type:e.type,url:e.from,accept:function(){t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:200,value:(0,g.deepClone)(t.data)}})},reject:function(r){t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:401,desc:r}})}};t._onReadHandler&&(console.log("READ-EVENT: ",r),t._onReadHandler(r))}},{key:"subscriptions",get:function(){return this._subscriptions}}]),t}(j["default"]);r["default"]=m,t.exports=r["default"]},{"../utils/utils.js":123,"./DataObject":116,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/core-js/object/keys":7,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/get":14,"babel-runtime/helpers/inherits":15,"babel-runtime/helpers/possibleConstructorReturn":16}],120:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var o=e("babel-runtime/helpers/classCallCheck"),i=n(o),s=e("babel-runtime/helpers/createClass"),c=n(s),a=function(){function e(t,r,n,o){(0,i["default"])(this,e);var s=this;s._owner=t,s._url=r,s._bus=n,s._children=o,s._changes=[],s._allocateListeners()}return(0,c["default"])(e,[{key:"_allocateListeners",value:function(){var e=this;e._listener=e._bus.addListener(e._url,function(t){console.log("DataProvisional-"+e._url+"-RCV: ",t),e._changes.push(t)})}},{key:"_releaseListeners",value:function(){var e=this;e._listener.remove()}},{key:"apply",value:function(e){var t=this;t._changes.forEach(function(t){e._changeObject(e._syncObj,t)})}},{key:"children",get:function(){return this._children}}]),e}();r["default"]=a,t.exports=r["default"]},{"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13}],121:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0}),r.ObjectType=r.ChangeType=void 0;var o=e("babel-runtime/core-js/object/keys"),i=n(o),s=e("babel-runtime/helpers/classCallCheck"),c=n(s),a=e("babel-runtime/helpers/createClass"),u=n(a),l=e("../utils/utils.js"),f=function(){function e(t){(0,c["default"])(this,e);var r=this;r._observers=[],r._filters={},t?r._data=(0,l.deepClone)(t):r._data={},r._internalObserve(new d,r._data)}return(0,u["default"])(e,[{key:"observe",value:function(e){this._observers.push(e)}},{key:"find",value:function(e){var t=e.split(".");return this._findWithSplit(t)}},{key:"findBefore",value:function(e){var t={},r=e.split(".");return t.last=r.pop(),t.obj=this._findWithSplit(r),t}},{key:"_findWithSplit",value:function(e){var t=this._data;return e.forEach(function(e){t=t[e]}),t}},{key:"_fireEvent",value:function(e){this._observers.forEach(function(t){t(e)})}},{key:"_isObservable",value:function(e){return e.constructor===Object||e.constructor===Array}},{key:"_internalObserve",value:function(e,t){var r=this;if(r._isObservable(t)){var n=function(t){r._onChanges(e,t)};if(t.constructor===Object){Object.observe(t,n);for(var o in t)r._isObservable(t[o])&&r._internalObserve(e["new"](o),t[o])}else if(t.constructor===Array){Array.observe(t,n);for(var i in t)if(r._isObservable(t[i])){var s=e["new"](new p(t[i],i));r._internalObserve(s,t[i])}}}}},{key:"_onChanges",value:function(e,t){var r=this;for(var n in t){var o=t[n].object,i=void 0;if(o.constructor===Object&&(i=b.OBJECT),o.constructor===Array&&(i=b.ARRAY),"splice"===t[n].type)!function(){var s=t[n].index,c=e["new"](""+s),a=c.toString(),u=t[n].removed.length;if(0!==u){var f=t[n].removed;f.forEach(function(t,n){r._isObservable(t)&&e.removeIndex(s+n)}),r._fireEvent({cType:_.REMOVE,oType:i,field:a,data:u})}var d=t[n].addedCount;if(0!==d){var b=o.slice(s,s+d);b.forEach(function(t,n){if(r._isObservable(t)){var o=e["new"](new p(t,s+n));r._internalObserve(o,t)}}),r._fireEvent({cType:_.ADD,oType:i,field:a,data:(0,l.deepClone)(b)})}s!==o.length-1&&e.reIndexFrom(o)}();else{var s=e["new"](t[n].name),c=s.toString();if(c.indexOf("Symbol")!==-1)continue;var a=o[t[n].name];"update"===t[n].type&&this._fireEvent({cType:_.UPDATE,oType:i,field:c,data:(0,l.deepClone)(a)}),"add"===t[n].type&&(this._internalObserve(s,a),
this._fireEvent({cType:_.ADD,oType:i,field:c,data:(0,l.deepClone)(a)})),"delete"===t[n].type&&this._fireEvent({cType:_.REMOVE,oType:i,field:c})}}}},{key:"data",get:function(){return this._data}}]),e}(),d=function(){function e(){(0,c["default"])(this,e),this._path=[],this._observables={}}return(0,u["default"])(e,[{key:"removeIndex",value:function(e){delete this._observables[e]}},{key:"reIndexFrom",value:function(e){var t=this;(0,i["default"])(this._observables).forEach(function(r){var n=t._observables[r],o=e.indexOf(n.obj);n.idx!=o&&(n.idx=o,delete t._observables[r],t._observables[o]=n)})}},{key:"new",value:function(e){e.constructor==p&&(this._observables[e.idx]=e);var t=this.clone();return t._path.push(e),t}},{key:"clone",value:function(){var t=new e;return this._path.forEach(function(e){t._path.push(e)}),t}},{key:"toString",value:function(){var e="";return this._path.forEach(function(t,r){0===r?e=t.toString():e+="."+t.toString()}),e}}]),e}(),p=function(){function e(t,r){(0,c["default"])(this,e),this.obj=t,this.idx=r}return(0,u["default"])(e,[{key:"toString",value:function(){return this.idx.toString()}}]),e}(),_=r.ChangeType={UPDATE:"update",ADD:"add",REMOVE:"remove"},b=r.ObjectType={OBJECT:"object",ARRAY:"array"};r["default"]=f},{"../utils/utils.js":123,"babel-runtime/core-js/object/keys":7,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13}],122:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var o=e("babel-runtime/core-js/promise"),i=n(o),s=e("babel-runtime/helpers/classCallCheck"),c=n(s),a=e("babel-runtime/helpers/createClass"),u=n(a),l=e("./DataObjectReporter"),f=n(l),d=e("./DataObjectObserver"),p=n(d),_=e("./DataProvisional"),b=n(_),h=function(){function e(t,r,n){(0,c["default"])(this,e);var o=this;o._owner=t,o._bus=r,o._subURL=n.runtimeURL+"/sm",o._reporters={},o._observers={},o._provisionals={},r.addListener(t,function(e){if(e.from!==t)switch(console.log("Syncher-RCV: ",e),e.type){case"forward":o._onForward(e);break;case"create":o._onRemoteCreate(e);break;case"delete":o._onRemoteDelete(e)}})}return(0,u["default"])(e,[{key:"create",value:function(e,t,r){var n=this;r.reporter=n._owner,r.schema=e;var o={type:"create",from:n._owner,to:n._subURL,body:{schema:e,value:r,authorise:t}};return new i["default"](function(t,i){n._bus.postMessage(o,function(o){if(console.log("create-response: ",o),200===o.body.code){var s=o.body.resource,c=new f["default"](n,s,e,"on",r,o.body.childrenResources);n._reporters[s]=c,t(c)}else i(o.body.desc)})})}},{key:"subscribe",value:function(e,t){var r=this,n={type:"subscribe",from:r._owner,to:r._subURL,body:{schema:e,resource:t}};return new i["default"](function(o,i){r._bus.postMessage(n,function(n){console.log("subscribe-response: ",n);var s=r._provisionals[t];if(delete r._provisionals[t],s&&s._releaseListeners(),n.body.code<200)s=new b["default"](r._owner,t,r._bus,n.body.childrenResources),r._provisionals[t]=s;else if(200===n.body.code){var c=new p["default"](r,t,e,"on",n.body.value,s.children,n.body.version);r._observers[t]=c,o(c),s.apply(c)}else i(n.body.desc)})})}},{key:"read",value:function(e){var t=this,r={type:"read",from:t._owner,to:e};return new i["default"](function(e,n){t._bus.postMessage(r,function(t){console.log("read-response: ",t),200===t.body.code?e(t.body.value):n(t.body.desc)})})}},{key:"onNotification",value:function(e){this._onNotificationHandler=e}},{key:"_onForward",value:function(e){var t=this,r=t._reporters[e.body.to];r._onForward(e)}},{key:"_onRemoteCreate",value:function(e){var t=this,r=e.from.slice(0,-13),n={type:e.type,from:e.body.source,url:r,schema:e.body.schema,value:e.body.value,identity:e.body.identity,ack:function(r){var n=200;r&&(n=r),t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:n}})}};t._onNotificationHandler&&(console.log("NOTIFICATION-EVENT: ",n),t._onNotificationHandler(n))}},{key:"_onRemoteDelete",value:function(e){var t=this,r=e.body.resource,n=t._observers[r];if(n){var o={type:e.type,url:r,identity:e.body.identity,ack:function(r){var o=200;r&&(o=r),200===o&&n["delete"](),t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:o,source:t._owner}})}};t._onNotificationHandler&&(console.log("NOTIFICATION-EVENT: ",o),t._onNotificationHandler(o))}else t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:404,source:t._owner}})}},{key:"owner",get:function(){return this._owner}},{key:"reporters",get:function(){return this._reporters}},{key:"observers",get:function(){return this._observers}}]),e}();r["default"]=h,t.exports=r["default"]},{"./DataObjectObserver":118,"./DataObjectReporter":119,"./DataProvisional":120,"babel-runtime/core-js/promise":9,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13}],123:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(!e)throw Error("URL is needed to split");var t=/([a-zA-Z-]*):\/\/(?:\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256})([-a-zA-Z0-9@:%._\+~#=\/]*)/gi,r="$1,$2,$3",n=e.replace(t,r).split(",");n[0]===e&&(n[0]="https",n[1]=e);var o={type:n[0],domain:n[1],identity:n[2]};return o}function i(e){var t=e.indexOf("@"),r={username:e.substring(0,t),domain:e.substring(t+1,e.length)};return r}function s(e){return!((0,_["default"])(e).length>0)}function c(e){if(e)return JSON.parse((0,d["default"])(e))}function a(e){var t=e.indexOf("@");return"user://"+e.substring(t+1,e.length)+"/"+e.substring(0,t)}function u(e){var t=o(e);return t.identity.replace("/","")+"@"+t.domain}function l(e){if("user://"===e.substring(0,7)){var t=o(e);if(t.domain&&t.identity)return e;throw"userURL with wrong format"}return a(e)}Object.defineProperty(r,"__esModule",{value:!0});var f=e("babel-runtime/core-js/json/stringify"),d=n(f),p=e("babel-runtime/core-js/object/keys"),_=n(p);r.divideURL=o,r.divideEmail=i,r.emptyObject=s,r.deepClone=c,r.getUserURLFromEmail=a,r.getUserEmailFromURL=u,r.convertToUserURL=l},{"babel-runtime/core-js/json/stringify":2,"babel-runtime/core-js/object/keys":7}]},{},[115])(115)});


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],4:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* More information about these options at jshint.com/docs/options */
/* jshint browser: true, camelcase: true, curly: true, devel: true,
   eqeqeq: true, forin: false, globalstrict: true, node: true,
   quotmark: single, undef: true, unused: strict */
/* global mozRTCIceCandidate, mozRTCPeerConnection, Promise,
mozRTCSessionDescription, webkitRTCPeerConnection, MediaStreamTrack,
MediaStream, RTCIceGatherer, RTCIceTransport, RTCDtlsTransport,
RTCRtpSender, RTCRtpReceiver*/
/* exported trace,requestUserMedia */

'use strict';

var getUserMedia = null;
var attachMediaStream = null;
var reattachMediaStream = null;
var webrtcDetectedBrowser = null;
var webrtcDetectedVersion = null;
var webrtcMinimumVersion = null;
var webrtcUtils = {
  log: function() {
    // suppress console.log output when being included as a module.
    if (typeof module !== 'undefined' ||
        typeof require === 'function' && typeof define === 'function') {
      return;
    }
    console.log.apply(console, arguments);
  },
  extractVersion: function(uastring, expr, pos) {
    var match = uastring.match(expr);
    return match && match.length >= pos && parseInt(match[pos], 10);
  }
};

function trace(text) {
  // This function is used for logging.
  if (text[text.length - 1] === '\n') {
    text = text.substring(0, text.length - 1);
  }
  if (window.performance) {
    var now = (window.performance.now() / 1000).toFixed(3);
    webrtcUtils.log(now + ': ' + text);
  } else {
    webrtcUtils.log(text);
  }
}

if (typeof window === 'object') {
  if (window.HTMLMediaElement &&
    !('srcObject' in window.HTMLMediaElement.prototype)) {
    // Shim the srcObject property, once, when HTMLMediaElement is found.
    Object.defineProperty(window.HTMLMediaElement.prototype, 'srcObject', {
      get: function() {
        // If prefixed srcObject property exists, return it.
        // Otherwise use the shimmed property, _srcObject
        return 'mozSrcObject' in this ? this.mozSrcObject : this._srcObject;
      },
      set: function(stream) {
        if ('mozSrcObject' in this) {
          this.mozSrcObject = stream;
        } else {
          // Use _srcObject as a private property for this shim
          this._srcObject = stream;
          // TODO: revokeObjectUrl(this.src) when !stream to release resources?
          this.src = URL.createObjectURL(stream);
        }
      }
    });
  }
  // Proxy existing globals
  getUserMedia = window.navigator && window.navigator.getUserMedia;
}

// Attach a media stream to an element.
attachMediaStream = function(element, stream) {
  element.srcObject = stream;
};

reattachMediaStream = function(to, from) {
  to.srcObject = from.srcObject;
};

if (typeof window === 'undefined' || !window.navigator) {
  webrtcUtils.log('This does not appear to be a browser');
  webrtcDetectedBrowser = 'not a browser';
} else if (navigator.mozGetUserMedia) {
  webrtcUtils.log('This appears to be Firefox');

  webrtcDetectedBrowser = 'firefox';

  // the detected firefox version.
  webrtcDetectedVersion = webrtcUtils.extractVersion(navigator.userAgent,
      /Firefox\/([0-9]+)\./, 1);

  // the minimum firefox version still supported by adapter.
  webrtcMinimumVersion = 31;

  // Shim for RTCPeerConnection on older versions.
  if (!window.RTCPeerConnection) {
    window.RTCPeerConnection = function(pcConfig, pcConstraints) {
      if (webrtcDetectedVersion < 38) {
        // .urls is not supported in FF < 38.
        // create RTCIceServers with a single url.
        if (pcConfig && pcConfig.iceServers) {
          var newIceServers = [];
          for (var i = 0; i < pcConfig.iceServers.length; i++) {
            var server = pcConfig.iceServers[i];
            if (server.hasOwnProperty('urls')) {
              for (var j = 0; j < server.urls.length; j++) {
                var newServer = {
                  url: server.urls[j]
                };
                if (server.urls[j].indexOf('turn') === 0) {
                  newServer.username = server.username;
                  newServer.credential = server.credential;
                }
                newIceServers.push(newServer);
              }
            } else {
              newIceServers.push(pcConfig.iceServers[i]);
            }
          }
          pcConfig.iceServers = newIceServers;
        }
      }
      return new mozRTCPeerConnection(pcConfig, pcConstraints); // jscs:ignore requireCapitalizedConstructors
    };
    window.RTCPeerConnection.prototype = mozRTCPeerConnection.prototype;

    // wrap static methods. Currently just generateCertificate.
    if (mozRTCPeerConnection.generateCertificate) {
      Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
        get: function() {
          if (arguments.length) {
            return mozRTCPeerConnection.generateCertificate.apply(null,
                arguments);
          } else {
            return mozRTCPeerConnection.generateCertificate;
          }
        }
      });
    }

    window.RTCSessionDescription = mozRTCSessionDescription;
    window.RTCIceCandidate = mozRTCIceCandidate;
  }

  // getUserMedia constraints shim.
  getUserMedia = function(constraints, onSuccess, onError) {
    var constraintsToFF37 = function(c) {
      if (typeof c !== 'object' || c.require) {
        return c;
      }
      var require = [];
      Object.keys(c).forEach(function(key) {
        if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
          return;
        }
        var r = c[key] = (typeof c[key] === 'object') ?
            c[key] : {ideal: c[key]};
        if (r.min !== undefined ||
            r.max !== undefined || r.exact !== undefined) {
          require.push(key);
        }
        if (r.exact !== undefined) {
          if (typeof r.exact === 'number') {
            r.min = r.max = r.exact;
          } else {
            c[key] = r.exact;
          }
          delete r.exact;
        }
        if (r.ideal !== undefined) {
          c.advanced = c.advanced || [];
          var oc = {};
          if (typeof r.ideal === 'number') {
            oc[key] = {min: r.ideal, max: r.ideal};
          } else {
            oc[key] = r.ideal;
          }
          c.advanced.push(oc);
          delete r.ideal;
          if (!Object.keys(r).length) {
            delete c[key];
          }
        }
      });
      if (require.length) {
        c.require = require;
      }
      return c;
    };
    if (webrtcDetectedVersion < 38) {
      webrtcUtils.log('spec: ' + JSON.stringify(constraints));
      if (constraints.audio) {
        constraints.audio = constraintsToFF37(constraints.audio);
      }
      if (constraints.video) {
        constraints.video = constraintsToFF37(constraints.video);
      }
      webrtcUtils.log('ff37: ' + JSON.stringify(constraints));
    }
    return navigator.mozGetUserMedia(constraints, onSuccess, onError);
  };

  navigator.getUserMedia = getUserMedia;

  // Shim for mediaDevices on older versions.
  if (!navigator.mediaDevices) {
    navigator.mediaDevices = {getUserMedia: requestUserMedia,
      addEventListener: function() { },
      removeEventListener: function() { }
    };
  }
  navigator.mediaDevices.enumerateDevices =
      navigator.mediaDevices.enumerateDevices || function() {
    return new Promise(function(resolve) {
      var infos = [
        {kind: 'audioinput', deviceId: 'default', label: '', groupId: ''},
        {kind: 'videoinput', deviceId: 'default', label: '', groupId: ''}
      ];
      resolve(infos);
    });
  };

  if (webrtcDetectedVersion < 41) {
    // Work around http://bugzil.la/1169665
    var orgEnumerateDevices =
        navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices);
    navigator.mediaDevices.enumerateDevices = function() {
      return orgEnumerateDevices().then(undefined, function(e) {
        if (e.name === 'NotFoundError') {
          return [];
        }
        throw e;
      });
    };
  }
} else if (navigator.webkitGetUserMedia && window.webkitRTCPeerConnection) {
  webrtcUtils.log('This appears to be Chrome');

  webrtcDetectedBrowser = 'chrome';

  // the detected chrome version.
  webrtcDetectedVersion = webrtcUtils.extractVersion(navigator.userAgent,
      /Chrom(e|ium)\/([0-9]+)\./, 2);

  // the minimum chrome version still supported by adapter.
  webrtcMinimumVersion = 38;

  // The RTCPeerConnection object.
  window.RTCPeerConnection = function(pcConfig, pcConstraints) {
    // Translate iceTransportPolicy to iceTransports,
    // see https://code.google.com/p/webrtc/issues/detail?id=4869
    if (pcConfig && pcConfig.iceTransportPolicy) {
      pcConfig.iceTransports = pcConfig.iceTransportPolicy;
    }

    var pc = new webkitRTCPeerConnection(pcConfig, pcConstraints); // jscs:ignore requireCapitalizedConstructors
    var origGetStats = pc.getStats.bind(pc);
    pc.getStats = function(selector, successCallback, errorCallback) { // jshint ignore: line
      var self = this;
      var args = arguments;

      // If selector is a function then we are in the old style stats so just
      // pass back the original getStats format to avoid breaking old users.
      if (arguments.length > 0 && typeof selector === 'function') {
        return origGetStats(selector, successCallback);
      }

      var fixChromeStats = function(response) {
        var standardReport = {};
        var reports = response.result();
        reports.forEach(function(report) {
          var standardStats = {
            id: report.id,
            timestamp: report.timestamp,
            type: report.type
          };
          report.names().forEach(function(name) {
            standardStats[name] = report.stat(name);
          });
          standardReport[standardStats.id] = standardStats;
        });

        return standardReport;
      };

      if (arguments.length >= 2) {
        var successCallbackWrapper = function(response) {
          args[1](fixChromeStats(response));
        };

        return origGetStats.apply(this, [successCallbackWrapper, arguments[0]]);
      }

      // promise-support
      return new Promise(function(resolve, reject) {
        if (args.length === 1 && selector === null) {
          origGetStats.apply(self, [
              function(response) {
                resolve.apply(null, [fixChromeStats(response)]);
              }, reject]);
        } else {
          origGetStats.apply(self, [resolve, reject]);
        }
      });
    };

    return pc;
  };
  window.RTCPeerConnection.prototype = webkitRTCPeerConnection.prototype;

  // wrap static methods. Currently just generateCertificate.
  if (webkitRTCPeerConnection.generateCertificate) {
    Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
      get: function() {
        if (arguments.length) {
          return webkitRTCPeerConnection.generateCertificate.apply(null,
              arguments);
        } else {
          return webkitRTCPeerConnection.generateCertificate;
        }
      }
    });
  }

  // add promise support
  ['createOffer', 'createAnswer'].forEach(function(method) {
    var nativeMethod = webkitRTCPeerConnection.prototype[method];
    webkitRTCPeerConnection.prototype[method] = function() {
      var self = this;
      if (arguments.length < 1 || (arguments.length === 1 &&
          typeof(arguments[0]) === 'object')) {
        var opts = arguments.length === 1 ? arguments[0] : undefined;
        return new Promise(function(resolve, reject) {
          nativeMethod.apply(self, [resolve, reject, opts]);
        });
      } else {
        return nativeMethod.apply(this, arguments);
      }
    };
  });

  ['setLocalDescription', 'setRemoteDescription',
      'addIceCandidate'].forEach(function(method) {
    var nativeMethod = webkitRTCPeerConnection.prototype[method];
    webkitRTCPeerConnection.prototype[method] = function() {
      var args = arguments;
      var self = this;
      return new Promise(function(resolve, reject) {
        nativeMethod.apply(self, [args[0],
            function() {
              resolve();
              if (args.length >= 2) {
                args[1].apply(null, []);
              }
            },
            function(err) {
              reject(err);
              if (args.length >= 3) {
                args[2].apply(null, [err]);
              }
            }]
          );
      });
    };
  });

  // getUserMedia constraints shim.
  var constraintsToChrome = function(c) {
    if (typeof c !== 'object' || c.mandatory || c.optional) {
      return c;
    }
    var cc = {};
    Object.keys(c).forEach(function(key) {
      if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
        return;
      }
      var r = (typeof c[key] === 'object') ? c[key] : {ideal: c[key]};
      if (r.exact !== undefined && typeof r.exact === 'number') {
        r.min = r.max = r.exact;
      }
      var oldname = function(prefix, name) {
        if (prefix) {
          return prefix + name.charAt(0).toUpperCase() + name.slice(1);
        }
        return (name === 'deviceId') ? 'sourceId' : name;
      };
      if (r.ideal !== undefined) {
        cc.optional = cc.optional || [];
        var oc = {};
        if (typeof r.ideal === 'number') {
          oc[oldname('min', key)] = r.ideal;
          cc.optional.push(oc);
          oc = {};
          oc[oldname('max', key)] = r.ideal;
          cc.optional.push(oc);
        } else {
          oc[oldname('', key)] = r.ideal;
          cc.optional.push(oc);
        }
      }
      if (r.exact !== undefined && typeof r.exact !== 'number') {
        cc.mandatory = cc.mandatory || {};
        cc.mandatory[oldname('', key)] = r.exact;
      } else {
        ['min', 'max'].forEach(function(mix) {
          if (r[mix] !== undefined) {
            cc.mandatory = cc.mandatory || {};
            cc.mandatory[oldname(mix, key)] = r[mix];
          }
        });
      }
    });
    if (c.advanced) {
      cc.optional = (cc.optional || []).concat(c.advanced);
    }
    return cc;
  };

  getUserMedia = function(constraints, onSuccess, onError) {
    if (constraints.audio) {
      constraints.audio = constraintsToChrome(constraints.audio);
    }
    if (constraints.video) {
      constraints.video = constraintsToChrome(constraints.video);
    }
    webrtcUtils.log('chrome: ' + JSON.stringify(constraints));
    return navigator.webkitGetUserMedia(constraints, onSuccess, onError);
  };
  navigator.getUserMedia = getUserMedia;

  if (!navigator.mediaDevices) {
    navigator.mediaDevices = {getUserMedia: requestUserMedia,
                              enumerateDevices: function() {
      return new Promise(function(resolve) {
        var kinds = {audio: 'audioinput', video: 'videoinput'};
        return MediaStreamTrack.getSources(function(devices) {
          resolve(devices.map(function(device) {
            return {label: device.label,
                    kind: kinds[device.kind],
                    deviceId: device.id,
                    groupId: ''};
          }));
        });
      });
    }};
  }

  // A shim for getUserMedia method on the mediaDevices object.
  // TODO(KaptenJansson) remove once implemented in Chrome stable.
  if (!navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia = function(constraints) {
      return requestUserMedia(constraints);
    };
  } else {
    // Even though Chrome 45 has navigator.mediaDevices and a getUserMedia
    // function which returns a Promise, it does not accept spec-style
    // constraints.
    var origGetUserMedia = navigator.mediaDevices.getUserMedia.
        bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function(c) {
      webrtcUtils.log('spec:   ' + JSON.stringify(c)); // whitespace for alignment
      c.audio = constraintsToChrome(c.audio);
      c.video = constraintsToChrome(c.video);
      webrtcUtils.log('chrome: ' + JSON.stringify(c));
      return origGetUserMedia(c);
    };
  }

  // Dummy devicechange event methods.
  // TODO(KaptenJansson) remove once implemented in Chrome stable.
  if (typeof navigator.mediaDevices.addEventListener === 'undefined') {
    navigator.mediaDevices.addEventListener = function() {
      webrtcUtils.log('Dummy mediaDevices.addEventListener called.');
    };
  }
  if (typeof navigator.mediaDevices.removeEventListener === 'undefined') {
    navigator.mediaDevices.removeEventListener = function() {
      webrtcUtils.log('Dummy mediaDevices.removeEventListener called.');
    };
  }

  // Attach a media stream to an element.
  attachMediaStream = function(element, stream) {
    if (webrtcDetectedVersion >= 43) {
      element.srcObject = stream;
    } else if (typeof element.src !== 'undefined') {
      element.src = URL.createObjectURL(stream);
    } else {
      webrtcUtils.log('Error attaching stream to element.');
    }
  };
  reattachMediaStream = function(to, from) {
    if (webrtcDetectedVersion >= 43) {
      to.srcObject = from.srcObject;
    } else {
      to.src = from.src;
    }
  };

} else if (navigator.mediaDevices && navigator.userAgent.match(
    /Edge\/(\d+).(\d+)$/)) {
  webrtcUtils.log('This appears to be Edge');
  webrtcDetectedBrowser = 'edge';

  webrtcDetectedVersion = webrtcUtils.extractVersion(navigator.userAgent,
      /Edge\/(\d+).(\d+)$/, 2);

  // The minimum version still supported by adapter.
  // This is the build number for Edge.
  webrtcMinimumVersion = 10547;

  if (window.RTCIceGatherer) {
    // Generate an alphanumeric identifier for cname or mids.
    // TODO: use UUIDs instead? https://gist.github.com/jed/982883
    var generateIdentifier = function() {
      return Math.random().toString(36).substr(2, 10);
    };

    // The RTCP CNAME used by all peerconnections from the same JS.
    var localCName = generateIdentifier();

    // SDP helpers - to be moved into separate module.
    var SDPUtils = {};

    // Splits SDP into lines, dealing with both CRLF and LF.
    SDPUtils.splitLines = function(blob) {
      return blob.trim().split('\n').map(function(line) {
        return line.trim();
      });
    };

    // Splits SDP into sessionpart and mediasections. Ensures CRLF.
    SDPUtils.splitSections = function(blob) {
      var parts = blob.split('\r\nm=');
      return parts.map(function(part, index) {
        return (index > 0 ? 'm=' + part : part).trim() + '\r\n';
      });
    };

    // Returns lines that start with a certain prefix.
    SDPUtils.matchPrefix = function(blob, prefix) {
      return SDPUtils.splitLines(blob).filter(function(line) {
        return line.indexOf(prefix) === 0;
      });
    };

    // Parses an ICE candidate line. Sample input:
    // candidate:702786350 2 udp 41819902 8.8.8.8 60769 typ relay raddr 8.8.8.8 rport 55996"
    SDPUtils.parseCandidate = function(line) {
      var parts;
      // Parse both variants.
      if (line.indexOf('a=candidate:') === 0) {
        parts = line.substring(12).split(' ');
      } else {
        parts = line.substring(10).split(' ');
      }

      var candidate = {
        foundation: parts[0],
        component: parts[1],
        protocol: parts[2].toLowerCase(),
        priority: parseInt(parts[3], 10),
        ip: parts[4],
        port: parseInt(parts[5], 10),
        // skip parts[6] == 'typ'
        type: parts[7]
      };

      for (var i = 8; i < parts.length; i += 2) {
        switch (parts[i]) {
          case 'raddr':
            candidate.relatedAddress = parts[i + 1];
            break;
          case 'rport':
            candidate.relatedPort = parseInt(parts[i + 1], 10);
            break;
          case 'tcptype':
            candidate.tcpType = parts[i + 1];
            break;
          default: // Unknown extensions are silently ignored.
            break;
        }
      }
      return candidate;
    };

    // Translates a candidate object into SDP candidate attribute.
    SDPUtils.writeCandidate = function(candidate) {
      var sdp = [];
      sdp.push(candidate.foundation);
      sdp.push(candidate.component);
      sdp.push(candidate.protocol.toUpperCase());
      sdp.push(candidate.priority);
      sdp.push(candidate.ip);
      sdp.push(candidate.port);

      var type = candidate.type;
      sdp.push('typ');
      sdp.push(type);
      if (type !== 'host' && candidate.relatedAddress &&
          candidate.relatedPort) {
        sdp.push('raddr');
        sdp.push(candidate.relatedAddress); // was: relAddr
        sdp.push('rport');
        sdp.push(candidate.relatedPort); // was: relPort
      }
      if (candidate.tcpType && candidate.protocol.toLowerCase() === 'tcp') {
        sdp.push('tcptype');
        sdp.push(candidate.tcpType);
      }
      return 'candidate:' + sdp.join(' ');
    };

    // Parses an rtpmap line, returns RTCRtpCoddecParameters. Sample input:
    // a=rtpmap:111 opus/48000/2
    SDPUtils.parseRtpMap = function(line) {
      var parts = line.substr(9).split(' ');
      var parsed = {
        payloadType: parseInt(parts.shift(), 10) // was: id
      };

      parts = parts[0].split('/');

      parsed.name = parts[0];
      parsed.clockRate = parseInt(parts[1], 10); // was: clockrate
      parsed.numChannels = parts.length === 3 ? parseInt(parts[2], 10) : 1; // was: channels
      return parsed;
    };

    // Generate an a=rtpmap line from RTCRtpCodecCapability or RTCRtpCodecParameters.
    SDPUtils.writeRtpMap = function(codec) {
      var pt = codec.payloadType;
      if (codec.preferredPayloadType !== undefined) {
        pt = codec.preferredPayloadType;
      }
      return 'a=rtpmap:' + pt + ' ' + codec.name + '/' + codec.clockRate +
          (codec.numChannels !== 1 ? '/' + codec.numChannels : '') + '\r\n';
    };

    // Parses an ftmp line, returns dictionary. Sample input:
    // a=fmtp:96 vbr=on;cng=on
    // Also deals with vbr=on; cng=on
    SDPUtils.parseFmtp = function(line) {
      var parsed = {};
      var kv;
      var parts = line.substr(line.indexOf(' ') + 1).split(';');
      for (var j = 0; j < parts.length; j++) {
        kv = parts[j].trim().split('=');
        parsed[kv[0].trim()] = kv[1];
      }
      return parsed;
    };

    // Generates an a=ftmp line from RTCRtpCodecCapability or RTCRtpCodecParameters.
    SDPUtils.writeFtmp = function(codec) {
      var line = '';
      var pt = codec.payloadType;
      if (codec.preferredPayloadType !== undefined) {
        pt = codec.preferredPayloadType;
      }
      if (codec.parameters && codec.parameters.length) {
        var params = [];
        Object.keys(codec.parameters).forEach(function(param) {
          params.push(param + '=' + codec.parameters[param]);
        });
        line += 'a=fmtp:' + pt + ' ' + params.join(';') + '\r\n';
      }
      return line;
    };

    // Parses an rtcp-fb line, returns RTCPRtcpFeedback object. Sample input:
    // a=rtcp-fb:98 nack rpsi
    SDPUtils.parseRtcpFb = function(line) {
      var parts = line.substr(line.indexOf(' ') + 1).split(' ');
      return {
        type: parts.shift(),
        parameter: parts.join(' ')
      };
    };
    // Generate a=rtcp-fb lines from RTCRtpCodecCapability or RTCRtpCodecParameters.
    SDPUtils.writeRtcpFb = function(codec) {
      var lines = '';
      var pt = codec.payloadType;
      if (codec.preferredPayloadType !== undefined) {
        pt = codec.preferredPayloadType;
      }
      if (codec.rtcpFeedback && codec.rtcpFeedback.length) {
        // FIXME: special handling for trr-int?
        codec.rtcpFeedback.forEach(function(fb) {
          lines += 'a=rtcp-fb:' + pt + ' ' + fb.type + ' ' + fb.parameter +
              '\r\n';
        });
      }
      return lines;
    };

    // Parses an RFC 5576 ssrc media attribute. Sample input:
    // a=ssrc:3735928559 cname:something
    SDPUtils.parseSsrcMedia = function(line) {
      var sp = line.indexOf(' ');
      var parts = {
        ssrc: line.substr(7, sp - 7),
      };
      var colon = line.indexOf(':', sp);
      if (colon > -1) {
        parts.attribute = line.substr(sp + 1, colon - sp - 1);
        parts.value = line.substr(colon + 1);
      } else {
        parts.attribute = line.substr(sp + 1);
      }
      return parts;
    };

    // Extracts DTLS parameters from SDP media section or sessionpart.
    // FIXME: for consistency with other functions this should only
    //   get the fingerprint line as input. See also getIceParameters.
    SDPUtils.getDtlsParameters = function(mediaSection, sessionpart) {
      var lines = SDPUtils.splitLines(mediaSection);
      lines = lines.concat(SDPUtils.splitLines(sessionpart)); // Search in session part, too.
      var fpLine = lines.filter(function(line) {
        return line.indexOf('a=fingerprint:') === 0;
      })[0].substr(14);
      // Note: a=setup line is ignored since we use the 'auto' role.
      var dtlsParameters = {
        role: 'auto',
        fingerprints: [{
          algorithm: fpLine.split(' ')[0],
          value: fpLine.split(' ')[1]
        }]
      };
      return dtlsParameters;
    };

    // Serializes DTLS parameters to SDP.
    SDPUtils.writeDtlsParameters = function(params, setupType) {
      var sdp = 'a=setup:' + setupType + '\r\n';
      params.fingerprints.forEach(function(fp) {
        sdp += 'a=fingerprint:' + fp.algorithm + ' ' + fp.value + '\r\n';
      });
      return sdp;
    };
    // Parses ICE information from SDP media section or sessionpart.
    // FIXME: for consistency with other functions this should only
    //   get the ice-ufrag and ice-pwd lines as input.
    SDPUtils.getIceParameters = function(mediaSection, sessionpart) {
      var lines = SDPUtils.splitLines(mediaSection);
      lines = lines.concat(SDPUtils.splitLines(sessionpart)); // Search in session part, too.
      var iceParameters = {
        usernameFragment: lines.filter(function(line) {
          return line.indexOf('a=ice-ufrag:') === 0;
        })[0].substr(12),
        password: lines.filter(function(line) {
          return line.indexOf('a=ice-pwd:') === 0;
        })[0].substr(10)
      };
      return iceParameters;
    };

    // Serializes ICE parameters to SDP.
    SDPUtils.writeIceParameters = function(params) {
      return 'a=ice-ufrag:' + params.usernameFragment + '\r\n' +
          'a=ice-pwd:' + params.password + '\r\n';
    };

    // Parses the SDP media section and returns RTCRtpParameters.
    SDPUtils.parseRtpParameters = function(mediaSection) {
      var description = {
        codecs: [],
        headerExtensions: [],
        fecMechanisms: [],
        rtcp: []
      };
      var lines = SDPUtils.splitLines(mediaSection);
      var mline = lines[0].split(' ');
      for (var i = 3; i < mline.length; i++) { // find all codecs from mline[3..]
        var pt = mline[i];
        var rtpmapline = SDPUtils.matchPrefix(
            mediaSection, 'a=rtpmap:' + pt + ' ')[0];
        if (rtpmapline) {
          var codec = SDPUtils.parseRtpMap(rtpmapline);
          var fmtps = SDPUtils.matchPrefix(
              mediaSection, 'a=fmtp:' + pt + ' ');
          // Only the first a=fmtp:<pt> is considered.
          codec.parameters = fmtps.length ? SDPUtils.parseFmtp(fmtps[0]) : {};
          codec.rtcpFeedback = SDPUtils.matchPrefix(
              mediaSection, 'a=rtcp-fb:' + pt + ' ')
            .map(SDPUtils.parseRtcpFb);
          description.codecs.push(codec);
        }
      }
      // FIXME: parse headerExtensions, fecMechanisms and rtcp.
      return description;
    };

    // Generates parts of the SDP media section describing the capabilities / parameters.
    SDPUtils.writeRtpDescription = function(kind, caps) {
      var sdp = '';

      // Build the mline.
      sdp += 'm=' + kind + ' ';
      sdp += caps.codecs.length > 0 ? '9' : '0'; // reject if no codecs.
      sdp += ' UDP/TLS/RTP/SAVPF ';
      sdp += caps.codecs.map(function(codec) {
        if (codec.preferredPayloadType !== undefined) {
          return codec.preferredPayloadType;
        }
        return codec.payloadType;
      }).join(' ') + '\r\n';

      sdp += 'c=IN IP4 0.0.0.0\r\n';
      sdp += 'a=rtcp:9 IN IP4 0.0.0.0\r\n';

      // Add a=rtpmap lines for each codec. Also fmtp and rtcp-fb.
      caps.codecs.forEach(function(codec) {
        sdp += SDPUtils.writeRtpMap(codec);
        sdp += SDPUtils.writeFtmp(codec);
        sdp += SDPUtils.writeRtcpFb(codec);
      });
      // FIXME: add headerExtensions, fecMechanismş and rtcp.
      sdp += 'a=rtcp-mux\r\n';
      return sdp;
    };

    SDPUtils.writeSessionBoilerplate = function() {
      // FIXME: sess-id should be an NTP timestamp.
      return 'v=0\r\n' +
          'o=thisisadapterortc 8169639915646943137 2 IN IP4 127.0.0.1\r\n' +
          's=-\r\n' +
          't=0 0\r\n';
    };

    SDPUtils.writeMediaSection = function(transceiver, caps, type, stream) {
      var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps);

      // Map ICE parameters (ufrag, pwd) to SDP.
      sdp += SDPUtils.writeIceParameters(
          transceiver.iceGatherer.getLocalParameters());

      // Map DTLS parameters to SDP.
      sdp += SDPUtils.writeDtlsParameters(
          transceiver.dtlsTransport.getLocalParameters(),
          type === 'offer' ? 'actpass' : 'active');

      sdp += 'a=mid:' + transceiver.mid + '\r\n';

      if (transceiver.rtpSender && transceiver.rtpReceiver) {
        sdp += 'a=sendrecv\r\n';
      } else if (transceiver.rtpSender) {
        sdp += 'a=sendonly\r\n';
      } else if (transceiver.rtpReceiver) {
        sdp += 'a=recvonly\r\n';
      } else {
        sdp += 'a=inactive\r\n';
      }

      // FIXME: for RTX there might be multiple SSRCs. Not implemented in Edge yet.
      if (transceiver.rtpSender) {
        var msid = 'msid:' + stream.id + ' ' +
            transceiver.rtpSender.track.id + '\r\n';
        sdp += 'a=' + msid;
        sdp += 'a=ssrc:' + transceiver.sendSsrc + ' ' + msid;
      }
      // FIXME: this should be written by writeRtpDescription.
      sdp += 'a=ssrc:' + transceiver.sendSsrc + ' cname:' +
          localCName + '\r\n';
      return sdp;
    };

    // Gets the direction from the mediaSection or the sessionpart.
    SDPUtils.getDirection = function(mediaSection, sessionpart) {
      // Look for sendrecv, sendonly, recvonly, inactive, default to sendrecv.
      var lines = SDPUtils.splitLines(mediaSection);
      for (var i = 0; i < lines.length; i++) {
        switch (lines[i]) {
          case 'a=sendrecv':
          case 'a=sendonly':
          case 'a=recvonly':
          case 'a=inactive':
            return lines[i].substr(2);
        }
      }
      if (sessionpart) {
        return SDPUtils.getDirection(sessionpart);
      }
      return 'sendrecv';
    };

    // ORTC defines an RTCIceCandidate object but no constructor.
    // Not implemented in Edge.
    if (!window.RTCIceCandidate) {
      window.RTCIceCandidate = function(args) {
        return args;
      };
    }
    // ORTC does not have a session description object but
    // other browsers (i.e. Chrome) that will support both PC and ORTC
    // in the future might have this defined already.
    if (!window.RTCSessionDescription) {
      window.RTCSessionDescription = function(args) {
        return args;
      };
    }

    window.RTCPeerConnection = function(config) {
      var self = this;

      this.onicecandidate = null;
      this.onaddstream = null;
      this.onremovestream = null;
      this.onsignalingstatechange = null;
      this.oniceconnectionstatechange = null;
      this.onnegotiationneeded = null;
      this.ondatachannel = null;

      this.localStreams = [];
      this.remoteStreams = [];
      this.getLocalStreams = function() { return self.localStreams; };
      this.getRemoteStreams = function() { return self.remoteStreams; };

      this.localDescription = new RTCSessionDescription({
        type: '',
        sdp: ''
      });
      this.remoteDescription = new RTCSessionDescription({
        type: '',
        sdp: ''
      });
      this.signalingState = 'stable';
      this.iceConnectionState = 'new';

      this.iceOptions = {
        gatherPolicy: 'all',
        iceServers: []
      };
      if (config && config.iceTransportPolicy) {
        switch (config.iceTransportPolicy) {
          case 'all':
          case 'relay':
            this.iceOptions.gatherPolicy = config.iceTransportPolicy;
            break;
          case 'none':
            // FIXME: remove once implementation and spec have added this.
            throw new TypeError('iceTransportPolicy "none" not supported');
        }
      }
      if (config && config.iceServers) {
        // Edge does not like
        // 1) stun:
        // 2) turn: that does not have all of turn:host:port?transport=udp
        // 3) an array of urls
        config.iceServers.forEach(function(server) {
          if (server.urls) {
            var url;
            if (typeof(server.urls) === 'string') {
              url = server.urls;
            } else {
              url = server.urls[0];
            }
            if (url.indexOf('transport=udp') !== -1) {
              self.iceServers.push({
                username: server.username,
                credential: server.credential,
                urls: url
              });
            }
          }
        });
      }

      // per-track iceGathers, iceTransports, dtlsTransports, rtpSenders, ...
      // everything that is needed to describe a SDP m-line.
      this.transceivers = [];

      // since the iceGatherer is currently created in createOffer but we
      // must not emit candidates until after setLocalDescription we buffer
      // them in this array.
      this._localIceCandidatesBuffer = [];
    };

    window.RTCPeerConnection.prototype._emitBufferedCandidates = function() {
      var self = this;
      // FIXME: need to apply ice candidates in a way which is async but in-order
      this._localIceCandidatesBuffer.forEach(function(event) {
        if (self.onicecandidate !== null) {
          self.onicecandidate(event);
        }
      });
      this._localIceCandidatesBuffer = [];
    };

    window.RTCPeerConnection.prototype.addStream = function(stream) {
      // Clone is necessary for local demos mostly, attaching directly
      // to two different senders does not work (build 10547).
      this.localStreams.push(stream.clone());
      this._maybeFireNegotiationNeeded();
    };

    window.RTCPeerConnection.prototype.removeStream = function(stream) {
      var idx = this.localStreams.indexOf(stream);
      if (idx > -1) {
        this.localStreams.splice(idx, 1);
        this._maybeFireNegotiationNeeded();
      }
    };

    // Determines the intersection of local and remote capabilities.
    window.RTCPeerConnection.prototype._getCommonCapabilities =
        function(localCapabilities, remoteCapabilities) {
      var commonCapabilities = {
        codecs: [],
        headerExtensions: [],
        fecMechanisms: []
      };
      localCapabilities.codecs.forEach(function(lCodec) {
        for (var i = 0; i < remoteCapabilities.codecs.length; i++) {
          var rCodec = remoteCapabilities.codecs[i];
          if (lCodec.name.toLowerCase() === rCodec.name.toLowerCase() &&
              lCodec.clockRate === rCodec.clockRate &&
              lCodec.numChannels === rCodec.numChannels) {
            // push rCodec so we reply with offerer payload type
            commonCapabilities.codecs.push(rCodec);

            // FIXME: also need to determine intersection between
            // .rtcpFeedback and .parameters
            break;
          }
        }
      });

      localCapabilities.headerExtensions.forEach(function(lHeaderExtension) {
        for (var i = 0; i < remoteCapabilities.headerExtensions.length; i++) {
          var rHeaderExtension = remoteCapabilities.headerExtensions[i];
          if (lHeaderExtension.uri === rHeaderExtension.uri) {
            commonCapabilities.headerExtensions.push(rHeaderExtension);
            break;
          }
        }
      });

      // FIXME: fecMechanisms
      return commonCapabilities;
    };

    // Create ICE gatherer, ICE transport and DTLS transport.
    window.RTCPeerConnection.prototype._createIceAndDtlsTransports =
        function(mid, sdpMLineIndex) {
      var self = this;
      var iceGatherer = new RTCIceGatherer(self.iceOptions);
      var iceTransport = new RTCIceTransport(iceGatherer);
      iceGatherer.onlocalcandidate = function(evt) {
        var event = {};
        event.candidate = {sdpMid: mid, sdpMLineIndex: sdpMLineIndex};

        var cand = evt.candidate;
        // Edge emits an empty object for RTCIceCandidateComplete‥
        if (!cand || Object.keys(cand).length === 0) {
          // polyfill since RTCIceGatherer.state is not implemented in Edge 10547 yet.
          if (iceGatherer.state === undefined) {
            iceGatherer.state = 'completed';
          }

          // Emit a candidate with type endOfCandidates to make the samples work.
          // Edge requires addIceCandidate with this empty candidate to start checking.
          // The real solution is to signal end-of-candidates to the other side when
          // getting the null candidate but some apps (like the samples) don't do that.
          event.candidate.candidate =
              'candidate:1 1 udp 1 0.0.0.0 9 typ endOfCandidates';
        } else {
          // RTCIceCandidate doesn't have a component, needs to be added
          cand.component = iceTransport.component === 'RTCP' ? 2 : 1;
          event.candidate.candidate = SDPUtils.writeCandidate(cand);
        }

        var complete = self.transceivers.every(function(transceiver) {
          return transceiver.iceGatherer &&
              transceiver.iceGatherer.state === 'completed';
        });
        // FIXME: update .localDescription with candidate and (potentially) end-of-candidates.
        //     To make this harder, the gatherer might emit candidates before localdescription
        //     is set. To make things worse, gather.getLocalCandidates still errors in
        //     Edge 10547 when no candidates have been gathered yet.

        if (self.onicecandidate !== null) {
          // Emit candidate if localDescription is set.
          // Also emits null candidate when all gatherers are complete.
          if (self.localDescription && self.localDescription.type === '') {
            self._localIceCandidatesBuffer.push(event);
            if (complete) {
              self._localIceCandidatesBuffer.push({});
            }
          } else {
            self.onicecandidate(event);
            if (complete) {
              self.onicecandidate({});
            }
          }
        }
      };
      iceTransport.onicestatechange = function() {
        self._updateConnectionState();
      };

      var dtlsTransport = new RTCDtlsTransport(iceTransport);
      dtlsTransport.ondtlsstatechange = function() {
        self._updateConnectionState();
      };
      dtlsTransport.onerror = function() {
        // onerror does not set state to failed by itself.
        dtlsTransport.state = 'failed';
        self._updateConnectionState();
      };

      return {
        iceGatherer: iceGatherer,
        iceTransport: iceTransport,
        dtlsTransport: dtlsTransport
      };
    };

    // Start the RTP Sender and Receiver for a transceiver.
    window.RTCPeerConnection.prototype._transceive = function(transceiver,
        send, recv) {
      var params = this._getCommonCapabilities(transceiver.localCapabilities,
          transceiver.remoteCapabilities);
      if (send && transceiver.rtpSender) {
        params.encodings = [{
          ssrc: transceiver.sendSsrc
        }];
        params.rtcp = {
          cname: localCName,
          ssrc: transceiver.recvSsrc
        };
        transceiver.rtpSender.send(params);
      }
      if (recv && transceiver.rtpReceiver) {
        params.encodings = [{
          ssrc: transceiver.recvSsrc
        }];
        params.rtcp = {
          cname: transceiver.cname,
          ssrc: transceiver.sendSsrc
        };
        transceiver.rtpReceiver.receive(params);
      }
    };

    window.RTCPeerConnection.prototype.setLocalDescription =
        function(description) {
      var self = this;
      if (description.type === 'offer') {
        if (!this._pendingOffer) {
        } else {
          this.transceivers = this._pendingOffer;
          delete this._pendingOffer;
        }
      } else if (description.type === 'answer') {
        var sections = SDPUtils.splitSections(self.remoteDescription.sdp);
        var sessionpart = sections.shift();
        sections.forEach(function(mediaSection, sdpMLineIndex) {
          var transceiver = self.transceivers[sdpMLineIndex];
          var iceGatherer = transceiver.iceGatherer;
          var iceTransport = transceiver.iceTransport;
          var dtlsTransport = transceiver.dtlsTransport;
          var localCapabilities = transceiver.localCapabilities;
          var remoteCapabilities = transceiver.remoteCapabilities;
          var rejected = mediaSection.split('\n', 1)[0]
              .split(' ', 2)[1] === '0';

          if (!rejected) {
            var remoteIceParameters = SDPUtils.getIceParameters(mediaSection,
                sessionpart);
            iceTransport.start(iceGatherer, remoteIceParameters, 'controlled');

            var remoteDtlsParameters = SDPUtils.getDtlsParameters(mediaSection,
              sessionpart);
            dtlsTransport.start(remoteDtlsParameters);

            // Calculate intersection of capabilities.
            var params = self._getCommonCapabilities(localCapabilities,
                remoteCapabilities);

            // Start the RTCRtpSender. The RTCRtpReceiver for this transceiver
            // has already been started in setRemoteDescription.
            self._transceive(transceiver,
                params.codecs.length > 0,
                false);
          }
        });
      }

      this.localDescription = description;
      switch (description.type) {
        case 'offer':
          this._updateSignalingState('have-local-offer');
          break;
        case 'answer':
          this._updateSignalingState('stable');
          break;
        default:
          throw new TypeError('unsupported type "' + description.type + '"');
      }

      // If a success callback was provided, emit ICE candidates after it has been
      // executed. Otherwise, emit callback after the Promise is resolved.
      var hasCallback = arguments.length > 1 &&
        typeof arguments[1] === 'function';
      if (hasCallback) {
        var cb = arguments[1];
        window.setTimeout(function() {
          cb();
          self._emitBufferedCandidates();
        }, 0);
      }
      var p = Promise.resolve();
      p.then(function() {
        if (!hasCallback) {
          window.setTimeout(self._emitBufferedCandidates.bind(self), 0);
        }
      });
      return p;
    };

    window.RTCPeerConnection.prototype.setRemoteDescription =
        function(description) {
      var self = this;
      var stream = new MediaStream();
      var sections = SDPUtils.splitSections(description.sdp);
      var sessionpart = sections.shift();
      sections.forEach(function(mediaSection, sdpMLineIndex) {
        var lines = SDPUtils.splitLines(mediaSection);
        var mline = lines[0].substr(2).split(' ');
        var kind = mline[0];
        var rejected = mline[1] === '0';
        var direction = SDPUtils.getDirection(mediaSection, sessionpart);

        var transceiver;
        var iceGatherer;
        var iceTransport;
        var dtlsTransport;
        var rtpSender;
        var rtpReceiver;
        var sendSsrc;
        var recvSsrc;
        var localCapabilities;

        // FIXME: ensure the mediaSection has rtcp-mux set.
        var remoteCapabilities = SDPUtils.parseRtpParameters(mediaSection);
        var remoteIceParameters;
        var remoteDtlsParameters;
        if (!rejected) {
          remoteIceParameters = SDPUtils.getIceParameters(mediaSection,
              sessionpart);
          remoteDtlsParameters = SDPUtils.getDtlsParameters(mediaSection,
              sessionpart);
        }
        var mid = SDPUtils.matchPrefix(mediaSection, 'a=mid:')[0].substr(6);

        var cname;
        // Gets the first SSRC. Note that with RTX there might be multiple SSRCs.
        var remoteSsrc = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
            .map(function(line) {
              return SDPUtils.parseSsrcMedia(line);
            })
            .filter(function(obj) {
              return obj.attribute === 'cname';
            })[0];
        if (remoteSsrc) {
          recvSsrc = parseInt(remoteSsrc.ssrc, 10);
          cname = remoteSsrc.value;
        }

        if (description.type === 'offer') {
          var transports = self._createIceAndDtlsTransports(mid, sdpMLineIndex);

          localCapabilities = RTCRtpReceiver.getCapabilities(kind);
          sendSsrc = (2 * sdpMLineIndex + 2) * 1001;

          rtpReceiver = new RTCRtpReceiver(transports.dtlsTransport, kind);

          // FIXME: not correct when there are multiple streams but that is
          // not currently supported in this shim.
          stream.addTrack(rtpReceiver.track);

          // FIXME: look at direction.
          if (self.localStreams.length > 0 &&
              self.localStreams[0].getTracks().length >= sdpMLineIndex) {
            // FIXME: actually more complicated, needs to match types etc
            var localtrack = self.localStreams[0].getTracks()[sdpMLineIndex];
            rtpSender = new RTCRtpSender(localtrack, transports.dtlsTransport);
          }

          self.transceivers[sdpMLineIndex] = {
            iceGatherer: transports.iceGatherer,
            iceTransport: transports.iceTransport,
            dtlsTransport: transports.dtlsTransport,
            localCapabilities: localCapabilities,
            remoteCapabilities: remoteCapabilities,
            rtpSender: rtpSender,
            rtpReceiver: rtpReceiver,
            kind: kind,
            mid: mid,
            cname: cname,
            sendSsrc: sendSsrc,
            recvSsrc: recvSsrc
          };
          // Start the RTCRtpReceiver now. The RTPSender is started in setLocalDescription.
          self._transceive(self.transceivers[sdpMLineIndex],
              false,
              direction === 'sendrecv' || direction === 'sendonly');
        } else if (description.type === 'answer' && !rejected) {
          transceiver = self.transceivers[sdpMLineIndex];
          iceGatherer = transceiver.iceGatherer;
          iceTransport = transceiver.iceTransport;
          dtlsTransport = transceiver.dtlsTransport;
          rtpSender = transceiver.rtpSender;
          rtpReceiver = transceiver.rtpReceiver;
          sendSsrc = transceiver.sendSsrc;
          //recvSsrc = transceiver.recvSsrc;
          localCapabilities = transceiver.localCapabilities;

          self.transceivers[sdpMLineIndex].recvSsrc = recvSsrc;
          self.transceivers[sdpMLineIndex].remoteCapabilities =
              remoteCapabilities;
          self.transceivers[sdpMLineIndex].cname = cname;

          iceTransport.start(iceGatherer, remoteIceParameters, 'controlling');
          dtlsTransport.start(remoteDtlsParameters);

          self._transceive(transceiver,
              direction === 'sendrecv' || direction === 'recvonly',
              direction === 'sendrecv' || direction === 'sendonly');

          if (rtpReceiver &&
              (direction === 'sendrecv' || direction === 'sendonly')) {
            stream.addTrack(rtpReceiver.track);
          } else {
            // FIXME: actually the receiver should be created later.
            delete transceiver.rtpReceiver;
          }
        }
      });

      this.remoteDescription = description;
      switch (description.type) {
        case 'offer':
          this._updateSignalingState('have-remote-offer');
          break;
        case 'answer':
          this._updateSignalingState('stable');
          break;
        default:
          throw new TypeError('unsupported type "' + description.type + '"');
      }
      window.setTimeout(function() {
        if (self.onaddstream !== null && stream.getTracks().length) {
          self.remoteStreams.push(stream);
          window.setTimeout(function() {
            self.onaddstream({stream: stream});
          }, 0);
        }
      }, 0);
      if (arguments.length > 1 && typeof arguments[1] === 'function') {
        window.setTimeout(arguments[1], 0);
      }
      return Promise.resolve();
    };

    window.RTCPeerConnection.prototype.close = function() {
      this.transceivers.forEach(function(transceiver) {
        /* not yet
        if (transceiver.iceGatherer) {
          transceiver.iceGatherer.close();
        }
        */
        if (transceiver.iceTransport) {
          transceiver.iceTransport.stop();
        }
        if (transceiver.dtlsTransport) {
          transceiver.dtlsTransport.stop();
        }
        if (transceiver.rtpSender) {
          transceiver.rtpSender.stop();
        }
        if (transceiver.rtpReceiver) {
          transceiver.rtpReceiver.stop();
        }
      });
      // FIXME: clean up tracks, local streams, remote streams, etc
      this._updateSignalingState('closed');
    };

    // Update the signaling state.
    window.RTCPeerConnection.prototype._updateSignalingState =
        function(newState) {
      this.signalingState = newState;
      if (this.onsignalingstatechange !== null) {
        this.onsignalingstatechange();
      }
    };

    // Determine whether to fire the negotiationneeded event.
    window.RTCPeerConnection.prototype._maybeFireNegotiationNeeded =
        function() {
      // Fire away (for now).
      if (this.onnegotiationneeded !== null) {
        this.onnegotiationneeded();
      }
    };

    // Update the connection state.
    window.RTCPeerConnection.prototype._updateConnectionState =
        function() {
      var self = this;
      var newState;
      var states = {
        'new': 0,
        closed: 0,
        connecting: 0,
        checking: 0,
        connected: 0,
        completed: 0,
        failed: 0
      };
      this.transceivers.forEach(function(transceiver) {
        states[transceiver.iceTransport.state]++;
        states[transceiver.dtlsTransport.state]++;
      });
      // ICETransport.completed and connected are the same for this purpose.
      states.connected += states.completed;

      newState = 'new';
      if (states.failed > 0) {
        newState = 'failed';
      } else if (states.connecting > 0 || states.checking > 0) {
        newState = 'connecting';
      } else if (states.disconnected > 0) {
        newState = 'disconnected';
      } else if (states.new > 0) {
        newState = 'new';
      } else if (states.connecting > 0 || states.completed > 0) {
        newState = 'connected';
      }

      if (newState !== self.iceConnectionState) {
        self.iceConnectionState = newState;
        if (this.oniceconnectionstatechange !== null) {
          this.oniceconnectionstatechange();
        }
      }
    };

    window.RTCPeerConnection.prototype.createOffer = function() {
      var self = this;
      if (this._pendingOffer) {
        throw new Error('createOffer called while there is a pending offer.');
      }
      var offerOptions;
      if (arguments.length === 1 && typeof arguments[0] !== 'function') {
        offerOptions = arguments[0];
      } else if (arguments.length === 3) {
        offerOptions = arguments[2];
      }

      var tracks = [];
      var numAudioTracks = 0;
      var numVideoTracks = 0;
      // Default to sendrecv.
      if (this.localStreams.length) {
        numAudioTracks = this.localStreams[0].getAudioTracks().length;
        numVideoTracks = this.localStreams[0].getVideoTracks().length;
      }
      // Determine number of audio and video tracks we need to send/recv.
      if (offerOptions) {
        // Reject Chrome legacy constraints.
        if (offerOptions.mandatory || offerOptions.optional) {
          throw new TypeError(
              'Legacy mandatory/optional constraints not supported.');
        }
        if (offerOptions.offerToReceiveAudio !== undefined) {
          numAudioTracks = offerOptions.offerToReceiveAudio;
        }
        if (offerOptions.offerToReceiveVideo !== undefined) {
          numVideoTracks = offerOptions.offerToReceiveVideo;
        }
      }
      if (this.localStreams.length) {
        // Push local streams.
        this.localStreams[0].getTracks().forEach(function(track) {
          tracks.push({
            kind: track.kind,
            track: track,
            wantReceive: track.kind === 'audio' ?
                numAudioTracks > 0 : numVideoTracks > 0
          });
          if (track.kind === 'audio') {
            numAudioTracks--;
          } else if (track.kind === 'video') {
            numVideoTracks--;
          }
        });
      }
      // Create M-lines for recvonly streams.
      while (numAudioTracks > 0 || numVideoTracks > 0) {
        if (numAudioTracks > 0) {
          tracks.push({
            kind: 'audio',
            wantReceive: true
          });
          numAudioTracks--;
        }
        if (numVideoTracks > 0) {
          tracks.push({
            kind: 'video',
            wantReceive: true
          });
          numVideoTracks--;
        }
      }

      var sdp = SDPUtils.writeSessionBoilerplate();
      var transceivers = [];
      tracks.forEach(function(mline, sdpMLineIndex) {
        // For each track, create an ice gatherer, ice transport, dtls transport,
        // potentially rtpsender and rtpreceiver.
        var track = mline.track;
        var kind = mline.kind;
        var mid = generateIdentifier();

        var transports = self._createIceAndDtlsTransports(mid, sdpMLineIndex);

        var localCapabilities = RTCRtpSender.getCapabilities(kind);
        var rtpSender;
        var rtpReceiver;

        // generate an ssrc now, to be used later in rtpSender.send
        var sendSsrc = (2 * sdpMLineIndex + 1) * 1001;
        if (track) {
          rtpSender = new RTCRtpSender(track, transports.dtlsTransport);
        }

        if (mline.wantReceive) {
          rtpReceiver = new RTCRtpReceiver(transports.dtlsTransport, kind);
        }

        transceivers[sdpMLineIndex] = {
          iceGatherer: transports.iceGatherer,
          iceTransport: transports.iceTransport,
          dtlsTransport: transports.dtlsTransport,
          localCapabilities: localCapabilities,
          remoteCapabilities: null,
          rtpSender: rtpSender,
          rtpReceiver: rtpReceiver,
          kind: kind,
          mid: mid,
          sendSsrc: sendSsrc,
          recvSsrc: null
        };
        var transceiver = transceivers[sdpMLineIndex];
        sdp += SDPUtils.writeMediaSection(transceiver,
            transceiver.localCapabilities, 'offer', self.localStreams[0]);
      });

      this._pendingOffer = transceivers;
      var desc = new RTCSessionDescription({
        type: 'offer',
        sdp: sdp
      });
      if (arguments.length && typeof arguments[0] === 'function') {
        window.setTimeout(arguments[0], 0, desc);
      }
      return Promise.resolve(desc);
    };

    window.RTCPeerConnection.prototype.createAnswer = function() {
      var self = this;
      var answerOptions;
      if (arguments.length === 1 && typeof arguments[0] !== 'function') {
        answerOptions = arguments[0];
      } else if (arguments.length === 3) {
        answerOptions = arguments[2];
      }

      var sdp = SDPUtils.writeSessionBoilerplate();
      this.transceivers.forEach(function(transceiver) {
        // Calculate intersection of capabilities.
        var commonCapabilities = self._getCommonCapabilities(
            transceiver.localCapabilities,
            transceiver.remoteCapabilities);

        sdp += SDPUtils.writeMediaSection(transceiver, commonCapabilities,
            'answer', self.localStreams[0]);
      });

      var desc = new RTCSessionDescription({
        type: 'answer',
        sdp: sdp
      });
      if (arguments.length && typeof arguments[0] === 'function') {
        window.setTimeout(arguments[0], 0, desc);
      }
      return Promise.resolve(desc);
    };

    window.RTCPeerConnection.prototype.addIceCandidate = function(candidate) {
      var mLineIndex = candidate.sdpMLineIndex;
      if (candidate.sdpMid) {
        for (var i = 0; i < this.transceivers.length; i++) {
          if (this.transceivers[i].mid === candidate.sdpMid) {
            mLineIndex = i;
            break;
          }
        }
      }
      var transceiver = this.transceivers[mLineIndex];
      if (transceiver) {
        var cand = Object.keys(candidate.candidate).length > 0 ?
            SDPUtils.parseCandidate(candidate.candidate) : {};
        // Ignore Chrome's invalid candidates since Edge does not like them.
        if (cand.protocol === 'tcp' && cand.port === 0) {
          return;
        }
        // Ignore RTCP candidates, we assume RTCP-MUX.
        if (cand.component !== '1') {
          return;
        }
        // A dirty hack to make samples work.
        if (cand.type === 'endOfCandidates') {
          cand = {};
        }
        transceiver.iceTransport.addRemoteCandidate(cand);
      }
      if (arguments.length > 1 && typeof arguments[1] === 'function') {
        window.setTimeout(arguments[1], 0);
      }
      return Promise.resolve();
    };

    window.RTCPeerConnection.prototype.getStats = function() {
      var promises = [];
      this.transceivers.forEach(function(transceiver) {
        ['rtpSender', 'rtpReceiver', 'iceGatherer', 'iceTransport',
            'dtlsTransport'].forEach(function(method) {
          if (transceiver[method]) {
            promises.push(transceiver[method].getStats());
          }
        });
      });
      var cb = arguments.length > 1 && typeof arguments[1] === 'function' &&
          arguments[1];
      return new Promise(function(resolve) {
        var results = {};
        Promise.all(promises).then(function(res) {
          res.forEach(function(result) {
            Object.keys(result).forEach(function(id) {
              results[id] = result[id];
            });
          });
          if (cb) {
            window.setTimeout(cb, 0, results);
          }
          resolve(results);
        });
      });
    };
  }
} else {
  webrtcUtils.log('Browser does not appear to be WebRTC-capable');
}

// Polyfill ontrack on browsers that don't yet have it
if (typeof window === 'object' && window.RTCPeerConnection && !('ontrack' in
    window.RTCPeerConnection.prototype)) {
  Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
    get: function() { return this._ontrack; },
    set: function(f) {
      var self = this;
      if (this._ontrack) {
        this.removeEventListener('track', this._ontrack);
        this.removeEventListener('addstream', this._ontrackpoly);
      }
      this.addEventListener('track', this._ontrack = f);
      this.addEventListener('addstream', this._ontrackpoly = function(e) {
        if (webrtcDetectedBrowser === 'chrome') {
          // onaddstream does not fire when a track is added to an existing stream.
          // but stream.onaddtrack is implemented so we use thたt
          e.stream.addEventListener('addtrack', function(te) {
            var event = new Event('track');
            event.track = te.track;
            event.receiver = {track: te.track};
            event.streams = [e.stream];
            self.dispatchEvent(event);
          });
        }
        e.stream.getTracks().forEach(function(track) {
          var event = new Event('track');
          event.track = track;
          event.receiver = {track: track};
          event.streams = [e.stream];
          this.dispatchEvent(event);
        }.bind(this));
      }.bind(this));
    }
  });
}

// Returns the result of getUserMedia as a Promise.
function requestUserMedia(constraints) {
  return new Promise(function(resolve, reject) {
    getUserMedia(constraints, resolve, reject);
  });
}

var webrtcTesting = {};
try {
  Object.defineProperty(webrtcTesting, 'version', {
    set: function(version) {
      webrtcDetectedVersion = version;
    }
  });
} catch (e) {}

if (typeof module !== 'undefined') {
  var RTCPeerConnection;
  var RTCIceCandidate;
  var RTCSessionDescription;
  if (typeof window !== 'undefined') {
    RTCPeerConnection = window.RTCPeerConnection;
    RTCIceCandidate = window.RTCIceCandidate;
    RTCSessionDescription = window.RTCSessionDescription;
  }
  module.exports = {
    RTCPeerConnection: RTCPeerConnection,
    RTCIceCandidate: RTCIceCandidate,
    RTCSessionDescription: RTCSessionDescription,
    getUserMedia: getUserMedia,
    attachMediaStream: attachMediaStream,
    reattachMediaStream: reattachMediaStream,
    webrtcDetectedBrowser: webrtcDetectedBrowser,
    webrtcDetectedVersion: webrtcDetectedVersion,
    webrtcMinimumVersion: webrtcMinimumVersion,
    webrtcTesting: webrtcTesting,
    webrtcUtils: webrtcUtils
    //requestUserMedia: not exposed on purpose.
    //trace: not exposed on purpose.
  };
} else if ((typeof require === 'function') && (typeof define === 'function')) {
  // Expose objects and functions when RequireJS is doing the loading.
  define([], function() {
    return {
      RTCPeerConnection: window.RTCPeerConnection,
      RTCIceCandidate: window.RTCIceCandidate,
      RTCSessionDescription: window.RTCSessionDescription,
      getUserMedia: getUserMedia,
      attachMediaStream: attachMediaStream,
      reattachMediaStream: reattachMediaStream,
      webrtcDetectedBrowser: webrtcDetectedBrowser,
      webrtcDetectedVersion: webrtcDetectedVersion,
      webrtcMinimumVersion: webrtcMinimumVersion,
      webrtcTesting: webrtcTesting,
      webrtcUtils: webrtcUtils
      //requestUserMedia: not exposed on purpose.
      //trace: not exposed on purpose.
    };
  });
}

},{}],5:[function(require,module,exports){
'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();/**
* Copyright 2016 PT Inovação e Sistemas SA
* Copyright 2016 INESC-ID
* Copyright 2016 QUOBIS NETWORKS SL
* Copyright 2016 FRAUNHOFER-GESELLSCHAFT ZUR FOERDERUNG DER ANGEWANDTEN FORSCHUNG E.V
* Copyright 2016 ORANGE SA
* Copyright 2016 Deutsche Telekom AG
* Copyright 2016 Apizee
* Copyright 2016 TECHNISCHE UNIVERSITAT BERLIN
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
**//* jshint undef: true *//* globals RTCPeerConnection *//* globals RTCSessionDescription *//* globals RTCIceCandidate */require('webrtc-adapter-test');var _peer=require('./peer');var _peer2=_interopRequireDefault(_peer);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var ConnectionController=function(){function ConnectionController(syncher,domain,configuration){_classCallCheck(this,ConnectionController);if(!syncher)throw new Error('The syncher is a needed parameter');if(!domain)throw new Error('The domain is a needed parameter');if(!configuration)throw new Error('The configuration is a needed parameter');var _this=this;_this.mode='offer';_this.peer=_peer2.default;// Private
_this._syncher=syncher;_this._configuration=configuration.webrtc;_this._domain=domain;_this._objectDescURL='hyperty-catalogue://catalogue.'+_this._domain+'/.well-known/dataschema/Connection';// Prepare the PeerConnection
var peerConnection=new RTCPeerConnection(_this._configuration);peerConnection.addEventListener('signalingstatechange',function(event){console.info('signalingstatechange',event.currentTarget.signalingState);if(event.currentTarget.signalingState==='have-local-offer'){console.info('signalingstatechange - have-local-offer: ',event.currentTarget.signalingState);}if(event.currentTarget.signalingState==='have-remote-offer'){console.info('signalingstatechange - have-remote-offer: ',event.currentTarget.signalingState);_this.mode='answer';}});peerConnection.addEventListener('iceconnectionstatechange',function(event){console.info('iceconnectionstatechange',event.currentTarget.iceConnectionState,_this.dataObjectReporter);var data=_this.dataObjectReporter.data;if(data.hasOwnProperty('status')){data.status=event.currentTarget.iceConnectionState;}});peerConnection.addEventListener('icecandidate',function(event){console.info('icecandidate changes',event.candidate,_this.dataObjectReporter);if(!event.candidate)return;var icecandidate={type:'candidate',candidate:event.candidate.candidate,sdpMid:event.candidate.sdpMid,sdpMLineIndex:event.candidate.sdpMLineIndex};var data=_this.dataObjectReporter.data;if(_this.mode==='offer'){data.ownerPeer.iceCandidates.push(icecandidate);}else{data.peer.iceCandidates.push(icecandidate);}});// Add stream to PeerConnection
peerConnection.addEventListener('addstream',function(event){console.info('Add Stream: ',event);if(_this._onAddStream)_this._onAddStream(event);});peerConnection.onremovestream=function(event){console.info('Stream removed: ',event);};_this.peerConnection=peerConnection;}_createClass(ConnectionController,[{key:'_removeMediaStream',value:function _removeMediaStream(){var _this=this;console.log(_this.mediaStream,_this.peerConnection);if(_this.mediaStream){var tracks=_this.mediaStream.getTracks();tracks.forEach(function(track){track.stop();});}_this.peerConnection.removeStream(_this.mediaStream);_this.peerConnection.close();}},{key:'_changePeerInformation',value:function _changePeerInformation(dataObjectObserver){var _this=this;var data=dataObjectObserver.data;var isOwner=data.hasOwnProperty('ownerPeer');var peerData=isOwner?data.ownerPeer:data.peer;console.info('Peer Data:',JSON.stringify(peerData));if(peerData.hasOwnProperty('connectionDescription')){_this._processPeerInformation(peerData.connectionDescription);}if(peerData.hasOwnProperty('iceCandidates')){console.log('Process Peer data: ',peerData);peerData.iceCandidates.forEach(function(ice){_this._processPeerInformation(ice);});}dataObjectObserver.onChange('*',function(event){console.info('Observer on change message: ',event);_this._processPeerInformation(event.data);});}},{key:'_processPeerInformation',value:function _processPeerInformation(data){var _this=this;console.info(JSON.stringify(data));if(data.type==='offer'||data.type==='answer'){console.info('Process Connection Description: ',data.sdp);_this.peerConnection.setRemoteDescription(new RTCSessionDescription(data),_this._remoteDescriptionSuccess,_this._remoteDescriptionError);}if(data.type==='candidate'){console.info('Process Ice Candidate: ',data);_this.peerConnection.addIceCandidate(new RTCIceCandidate({candidate:data.candidate}),_this._remoteDescriptionSuccess,_this._remoteDescriptionError);}}},{key:'_remoteDescriptionSuccess',value:function _remoteDescriptionSuccess(){console.info('remote success');}},{key:'_remoteDescriptionError',value:function _remoteDescriptionError(error){console.error('error: ',error);}},{key:'_createOffer',value:function _createOffer(){var _this=this;_this.peerConnection.createOffer(function(description){_this._onLocalSessionCreated(description);},_this._infoError);}},{key:'_createAnswer',value:function _createAnswer(){var _this=this;_this.peerConnection.createAnswer(function(description){_this._onLocalSessionCreated(description);},_this._infoError);}},{key:'_onLocalSessionCreated',value:function _onLocalSessionCreated(description){var _this=this;_this.peerConnection.setLocalDescription(description,function(){var data=_this.dataObjectReporter.data;var sdpConnection={sdp:description.sdp,type:description.type};if(_this.mode==='offer'){data.ownerPeer.connectionDescription=sdpConnection;}else{data.peer.connectionDescription=sdpConnection;}},_this._infoError);}},{key:'_infoError',value:function _infoError(err){console.error(err.toString(),err);}/**
   * This function is used to receive all changes did to dataObjectObjserver.
   * @param  {Function} callback callback function
   * @return {ChangeEvent}       properties and type of changes;
   */// onChange(callback) {
//   let _this = this;
//   _this._onChange = callback;
// }
/**
   * This function is used to handle the peer stream
   * @return {MediaStream}           WebRTC remote MediaStream retrieved by the Application
   */},{key:'onAddStream',value:function onAddStream(callback){var _this=this;_this._onAddStream=callback;}/**
   * This function is used to receive requests to close an existing connection instance.
   * @param  {Function} callback callback function to handle with the disconnect
   * @return {DeleteEvent}       the DeleteEvent fired by the Syncher when the Connection is closed.
   */},{key:'onDisconnect',value:function onDisconnect(callback){var _this=this;_this._onDisconnect=callback;}/**
   * This function is used to accept an incoming connection request received by connection.onInvitation().
   * @param  {MediaStream}         stream     WebRTC local MediaStream retrieved by the Application
   * @return {<Promise> boolean}              It returns, as a Promise, true in case the connection is successfully accepted, false otherwise.
   */},{key:'accept',value:function accept(stream){var _this=this;var syncher=_this._syncher;console.log('Remote Peer Information: ',_this.dataObjectObserver.data);var remotePeer=_this.dataObjectObserver.data.reporter;return new Promise(function(resolve,reject){try{console.info('------------------------ Syncher Create ---------------------- \n');syncher.create(_this._objectDescURL,[remotePeer],_this.peer).then(function(dataObjectReporter){console.info('2. Return the Data Object Reporter ',dataObjectReporter);_this.mediaStream=stream;_this.dataObjectReporter=dataObjectReporter;resolve(true);}).catch(function(reason){console.error(reason);reject(false);});}catch(e){reject('error accepting connection');}});}/**
   * This function is used to decline an incoming connection request received by connection.onInvitation().
   * @param  {int} reason               Integer decline reason that is compliant with RFC7231. If not present 400 is used. (optional)
   * @return {<Promise> boolean}        It returns, as a Promise, true in case the connection is successfully declined, false otherwise.
   */},{key:'decline',value:function decline(reason){// TODO: Optimize this process
var _this=this;var declineReason=400;if(reason)declineReason=reason;return new Promise(function(resolve,reject){try{_this.connectionEvent.ack(declineReason);_this.disconnect();resolve(true);}catch(e){console.error(e);reject(false);}});}/**
   * This function is used to close an existing connection instance.
   * @return {<Promise> boolean} It returns as a Promise true if successfully disconnected or false otherwise.
   */},{key:'disconnect',value:function disconnect(){// TODO: Optimize this process
var _this=this;return new Promise(function(resolve,reject){try{var data=void 0;if(_this.dataObjectReporter){data=_this.dataObjectReporter;data.delete();}if(_this.dataObjectObserver){data=_this.dataObjectObserver;data.delete();}_this._removeMediaStream();resolve(true);}catch(e){reject(e);}});}/**
   * Disable Microfone
   * @param  {boolean} value status of microfone
   * @return {boolean}
   */},{key:'disableAudio',value:function disableAudio(value){var _this=this;return new Promise(function(resolve,reject){try{var localStream=_this.peerConnection.getLocalStreams()[0];var audioTrack=localStream.getAudioTracks()[0];if(!value){audioTrack.enabled=audioTrack.enabled?false:true;}else{audioTrack.enabled=value;}resolve(audioTrack.enabled);}catch(e){reject(e);}});}/**
   * Disable video
   * @param  {boolean} value status of video
   * @return {boolean}
   */},{key:'disableVideo',value:function disableVideo(value){var _this=this;return new Promise(function(resolve,reject){try{var localStream=_this.peerConnection.getLocalStreams()[0];var videoTrack=localStream.getVideoTracks()[0];if(!value){videoTrack.enabled=videoTrack.enabled?false:true;}else{videoTrack.enabled=value;}resolve(videoTrack.enabled);}catch(e){reject(e);}});}},{key:'mute',value:function mute(value){var _this=this;return new Promise(function(resolve,reject){try{var remoteStream=_this.peerConnection.getRemoteStreams()[0];var audioTrack=remoteStream.getAudioTracks()[0];if(!value){audioTrack.enabled=audioTrack.enabled?false:true;}else{audioTrack.enabled=value;}resolve(audioTrack.enabled);}catch(e){reject(e);}});}},{key:'mediaStream',set:function set(mediaStream){if(!mediaStream)throw new Error('The mediaStream is a needed parameter');var _this=this;console.info('set stream: ',mediaStream);_this._mediaStream=mediaStream;_this.peerConnection.addStream(mediaStream);},get:function get(){var _this=this;return _this._mediaStream;}/**
  * Set the dataObject in the controller
  * @param {ConnectionDataObject} dataObject - have all information about the syncher object;
  */},{key:'dataObjectReporter',set:function set(dataObjectReporter){if(!dataObjectReporter)throw new Error('The Data Object Reporter is a needed parameter');var _this=this;console.info('set data object reporter: ',dataObjectReporter);_this._dataObjectReporter=dataObjectReporter;dataObjectReporter.onSubscription(function(event){event.accept();});if(_this.mode==='offer'){_this._createOffer();}else{var data=dataObjectReporter.data;data.peer=_peer2.default;_this._createAnswer();}}/**
  * return the dataObject in the controller
  * @return {ConnectionDataObject} dataObject
  */,get:function get(){var _this=this;return _this._dataObjectReporter;}/**
  * Set the dataObject in the controller
  * @param {ConnectionDataObject} dataObject - have all information about the syncher object;
  */},{key:'dataObjectObserver',set:function set(dataObjectObserver){if(!dataObjectObserver)throw new Error('The Data Object Observer is a needed parameter');var _this=this;console.info('set data object observer: ',dataObjectObserver);_this._dataObjectObserver=dataObjectObserver;_this._changePeerInformation(dataObjectObserver);}/**
  * return the dataObject in the controller
  * @return {ConnectionDataObject} dataObject
  */,get:function get(){var _this=this;return _this._dataObjectObserver;}/**
   * Set the connection event to accept or reject
   * @param  {CreateEvent} event Event with actions to accept or reject the connection
   */},{key:'connectionEvent',set:function set(event){var _this=this;_this._connectionEvent=event;}/**
   * Get the connection event to accept or reject
   * @return {CreateEvent}
   */,get:function get(){var _this=this;return _this._connectionEvent;}},{key:'deleteEvent',set:function set(event){var _this=this;_this._deleteEvent=event;_this._removeMediaStream();if(_this._onDisconnect)_this._onDisconnect(event.identity);},get:function get(){var _this=this;return _this._deleteEvent;}}]);return ConnectionController;}();exports.default=ConnectionController;module.exports=exports['default'];

},{"./peer":9,"webrtc-adapter-test":4}],6:[function(require,module,exports){
'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();/**
* Copyright 2016 PT Inovação e Sistemas SA
* Copyright 2016 INESC-ID
* Copyright 2016 QUOBIS NETWORKS SL
* Copyright 2016 FRAUNHOFER-GESELLSCHAFT ZUR FOERDERUNG DER ANGEWANDTEN FORSCHUNG E.V
* Copyright 2016 ORANGE SA
* Copyright 2016 Deutsche Telekom AG
* Copyright 2016 Apizee
* Copyright 2016 TECHNISCHE UNIVERSITAT BERLIN
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
**//* jshint undef: true */// Service Framework
// Utils
// Internals
exports.default=activate;var _IdentityManager=require('service-framework/dist/IdentityManager');var _IdentityManager2=_interopRequireDefault(_IdentityManager);var _Discovery=require('service-framework/dist/Discovery');var _Discovery2=_interopRequireDefault(_Discovery);var _Syncher=require('service-framework/dist/Syncher');var _utils=require('../utils/utils');var _ConnectionController=require('./ConnectionController');var _ConnectionController2=_interopRequireDefault(_ConnectionController);var _connection=require('./connection');var _Search=require('./Search');var _Search2=_interopRequireDefault(_Search);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}/**
 *
 */var Connector=function(){/**
  * Create a new Hyperty Connector
  * @param  {Syncher} syncher - Syncher provided from the runtime core
  */function Connector(hypertyURL,bus,configuration){var _this2=this;_classCallCheck(this,Connector);if(!hypertyURL)throw new Error('The hypertyURL is a needed parameter');if(!bus)throw new Error('The MiniBus is a needed parameter');if(!configuration)throw new Error('The configuration is a needed parameter');var _this=this;_this._hypertyURL=hypertyURL;_this._bus=bus;_this._configuration=configuration;_this._domain=(0,_utils.divideURL)(hypertyURL).domain;_this._objectDescURL='hyperty-catalogue://catalogue.'+_this._domain+'/.well-known/dataschema/Connection';_this._controllers={};_this.connectionObject=_connection.connection;var discovery=new _Discovery2.default(hypertyURL,bus);var identityManager=new _IdentityManager2.default(hypertyURL,configuration.runtimeURL,bus);_this.discovery=discovery;_this.identityManager=identityManager;_this.search=new _Search2.default(discovery,identityManager);console.log('Discover: ',discovery);console.log('Identity Manager: ',identityManager);var syncher=new _Syncher.Syncher(hypertyURL,bus,configuration);syncher.onNotification(function(event){var _this=_this2;console.log('On Notification: ',event);if(event.type==='create'){console.info('------------ Acknowledges the Reporter - Create ------------ \n');event.ack();if(_this._controllers[event.from]){_this._autoSubscribe(event);}else{_this._autoAccept(event);}console.info('------------------------ End Create ---------------------- \n');}if(event.type==='delete'){console.info('------------ Acknowledges the Reporter - Delete ------------ \n');event.ack(200);console.log(_this._controllers);if(_this._controllers){Object.keys(_this._controllers).forEach(function(controller){_this._controllers[controller].deleteEvent=event;delete _this._controllers[controller];console.log('Controllers:',_this._controllers);});}console.info('------------------------ End Create ---------------------- \n');}});_this._syncher=syncher;}_createClass(Connector,[{key:'_autoSubscribe',value:function _autoSubscribe(event){var _this=this;var syncher=_this._syncher;console.info('---------------- Syncher Subscribe (Auto Subscribe) ---------------- \n');console.info('Subscribe URL Object ',event);syncher.subscribe(_this._objectDescURL,event.url).then(function(dataObjectObserver){console.info('1. Return Subscribe Data Object Observer',dataObjectObserver);_this._controllers[event.from].dataObjectObserver=dataObjectObserver;}).catch(function(reason){console.error(reason);});}},{key:'_autoAccept',value:function _autoAccept(event){var _this=this;var syncher=_this._syncher;console.info('---------------- Syncher Subscribe (Auto Accept) ---------------- \n');console.info('Subscribe URL Object ',event);syncher.subscribe(_this._objectDescURL,event.url).then(function(dataObjectObserver){console.info('1. Return Subscribe Data Object Observer',dataObjectObserver);var connectionController=new _ConnectionController2.default(syncher,_this._domain,_this._configuration);connectionController.connectionEvent=event;connectionController.dataObjectObserver=dataObjectObserver;_this._controllers[event.from]=connectionController;if(_this._onInvitation)_this._onInvitation(connectionController,event.identity);console.info('------------------------ END ---------------------- \n');}).catch(function(reason){console.error(reason);});}/**
   * This function is used to create a new connection providing the identifier of the user to be notified.
   * @param  {URL.UserURL}        userURL      user to be invited that is identified with reTHINK User URL.
   * @param  {MediaStream}        stream       WebRTC local MediaStream retrieved by the Application
   * @param  {string}             name         is a string to identify the connection.
   * @return {<Promise>ConnectionController}   A ConnectionController object as a Promise.
   */},{key:'connect',value:function connect(userURL,stream,name,domain){// TODO: Pass argument options as a stream, because is specific of implementation;
// TODO: CHange the hypertyURL for a list of URLS
var _this=this;var syncher=_this._syncher;return new Promise(function(resolve,reject){var connectionController=void 0;var selectedHyperty=void 0;console.info('------------------------ Syncher Create ---------------------- \n');var connectionName='Connection';if(name){connectionName=name;}_this.search.myIdentity().then(function(identity){console.log('identity: ',identity,_this.connectionObject);// Initial data
_this.connectionObject.name=connectionName;_this.connectionObject.scheme='connection';_this.connectionObject.status='';_this.connectionObject.owner=identity.userURL;_this.connectionObject.peer='';return _this.search.users([userURL],domain);}).then(function(hyperties){var hypertiesURLs=hyperties.map(function(hyperty){return hyperty.hypertyID;});// Only support one to one connection;
selectedHyperty=hypertiesURLs[0];console.info('Only support communication one to one, selected hyperty: ',selectedHyperty);return syncher.create(_this._objectDescURL,[selectedHyperty],_this.connectionObject);}).catch(function(reason){console.error(reason);reject(reason);}).then(function(dataObjectReporter){console.info('1. Return Create Data Object Reporter',dataObjectReporter);connectionController=new _ConnectionController2.default(syncher,_this._domain,_this._configuration);connectionController.mediaStream=stream;connectionController.dataObjectReporter=dataObjectReporter;_this._controllers[selectedHyperty]=connectionController;resolve(connectionController);console.info('--------------------------- END --------------------------- \n');}).catch(function(reason){console.error(reason);reject(reason);});});}/**
   * This function is used to handle notifications about incoming requests to create a new connection.
   * @param  {Function} callback
   * @return {event}
   */},{key:'onInvitation',value:function onInvitation(callback){var _this=this;_this._onInvitation=callback;}}]);return Connector;}();/**
 * Function will activate the hyperty on the runtime
 * @param  {URL.URL} hypertyURL   url which identifies the hyperty
 * @param  {MiniBus} bus          Minibus used to make the communication between hyperty and runtime;
 * @param  {object} configuration configuration
 */function activate(hypertyURL,bus,configuration){return{name:'Connector',instance:new Connector(hypertyURL,bus,configuration)};}module.exports=exports['default'];

},{"../utils/utils":10,"./ConnectionController":5,"./Search":7,"./connection":8,"service-framework/dist/Discovery":1,"service-framework/dist/IdentityManager":2,"service-framework/dist/Syncher":3}],7:[function(require,module,exports){
'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}// TODO: optimize this process
var DOMAINS=['hybroker.rethink.ptinovacao.pt','rethink.quobis.com'];var Search=function(){function Search(discovery,identityManager){_classCallCheck(this,Search);if(!discovery)throw new Error('The discovery component is a needed parameter');if(!identityManager)throw new Error('The identityManager component is a needed parameter');var _this=this;_this.discovery=discovery;_this.identityManager=identityManager;}_createClass(Search,[{key:'myIdentity',value:function myIdentity(){var _this=this;return new Promise(function(resolve,reject){_this.identityManager.discoverUserRegistered().then(function(result){resolve(result);}).catch(function(reason){reject(reason);});});}/**
   * List of usersURL to search
   * @param  {array<URL.userURL>}  users List of UserUR, like this format user://<ipddomain>/<user-identifier>
   * @return {Promise}
   */},{key:'users',value:function users(usersURLs,providedDomain){if(!usersURLs)throw new Error('You need to provide a list of');var _this=this;return new Promise(function(resolve){console.log(usersURLs,usersURLs.length);if(usersURLs.length===0){console.info('Don\'t have users to discovery');resolve(usersURLs);}else{(function(){console.log('Get all users');var getUsers=[];usersURLs.forEach(function(userURL){if(providedDomain){console.log('Search for provided domain:',providedDomain);getUsers.push(_this.discovery.discoverHyperty(userURL,['connection'],['audio','video'],providedDomain));}else{DOMAINS.forEach(function(domain){getUsers.push(_this.discovery.discoverHyperty(userURL,['connection'],['audio','video'],domain));});}});console.info('Requests promises: ',getUsers);Promise.all(getUsers).then(function(hyperties){console.log('Hyperties: ',hyperties);var result=hyperties.map(function(hyperty){var recent=Object.keys(hyperty).reduceRight(function(a,b){var hypertyDate=new Date(hyperty[b].lastModified);var hypertyDateP=new Date(hyperty[a].lastModified);if(hypertyDateP.getTime()<hypertyDate.getTime()){return b;}return a;});return hyperty[recent];});var clean=result.filter(function(hyperty){return hyperty;});console.info('Requests result: ',clean);resolve(clean);}).catch(function(reason){console.error(reason);resolve(usersURLs);});})();}});}}]);return Search;}();exports.default=Search;module.exports=exports['default'];

},{}],8:[function(require,module,exports){
'use strict';Object.defineProperty(exports,"__esModule",{value:true});/**
* Copyright 2016 PT Inovação e Sistemas SA
* Copyright 2016 INESC-ID
* Copyright 2016 QUOBIS NETWORKS SL
* Copyright 2016 FRAUNHOFER-GESELLSCHAFT ZUR FOERDERUNG DER ANGEWANDTEN FORSCHUNG E.V
* Copyright 2016 ORANGE SA
* Copyright 2016 Deutsche Telekom AG
* Copyright 2016 Apizee
* Copyright 2016 TECHNISCHE UNIVERSITAT BERLIN
*
* Licensed under the Apache License, Version 2.0 (the ''License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
**/// dataObjectReporter.data = {
//    status : "connected",
//    owner : "hyperty://example.com/alicehy",
//    peer : "connection://example.com/alice/bob27012016",
//    ownerPeer : {
//          connectionDescription: {
//             sdp: 's4dfaf1sa3f1asd5f4sdafa',
//             type: 'offer'
//          },
//          iceCandidates: [{
//              type: 'candidate',
//              candidate: event.candidate.candidate,
//              sdpMid: event.candidate.sdpMid,
//              sdpMLineIndex: event.candidate.sdpMLineIndex
//            },
//            {
//              type: 'candidate',
//              candidate: event.candidate.candidate,
//              sdpMid: event.candidate.sdpMid,
//              sdpMLineIndex: event.candidate.sdpMLineIndex
//            },
//            .....
//        ]
//      }
//  }
var connection=exports.connection={name:'',status:'',owner:'',peer:'',ownerPeer:{connectionDescription:{},iceCandidates:[]}};

},{}],9:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:true});/**
* Copyright 2016 PT Inovação e Sistemas SA
* Copyright 2016 INESC-ID
* Copyright 2016 QUOBIS NETWORKS SL
* Copyright 2016 FRAUNHOFER-GESELLSCHAFT ZUR FOERDERUNG DER ANGEWANDTEN FORSCHUNG E.V
* Copyright 2016 ORANGE SA
* Copyright 2016 Deutsche Telekom AG
* Copyright 2016 Apizee
* Copyright 2016 TECHNISCHE UNIVERSITAT BERLIN
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
**/var peer={connectionDescription:{},iceCandidates:[]};exports.default=peer;module.exports=exports['default'];

},{}],10:[function(require,module,exports){
'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.divideURL=divideURL;exports.deepClone=deepClone;exports.getUserMedia=getUserMedia;exports.serialize=serialize;exports.getTemplate=getTemplate;/**
 * Copyright 2016 PT Inovação e Sistemas SA
 * Copyright 2016 INESC-ID
 * Copyright 2016 QUOBIS NETWORKS SL
 * Copyright 2016 FRAUNHOFER-GESELLSCHAFT ZUR FOERDERUNG DER ANGEWANDTEN FORSCHUNG E.V
 * Copyright 2016 ORANGE SA
 * Copyright 2016 Deutsche Telekom AG
 * Copyright 2016 Apizee
 * Copyright 2016 TECHNISCHE UNIVERSITAT BERLIN
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/// jshint browser:true, jquery: true
// jshint varstmt: true
/* global Handlebars *//**
 * Support module with some functions will be useful
 * @module utils
 *//**
 * @typedef divideURL
 * @type Object
 * @property {string} type The type of URL
 * @property {string} domain The domain of URL
 * @property {string} identity The identity of URL
 *//**
 * Divide an url in type, domain and identity
 * @param  {URL.URL} url - url address
 * @return {divideURL} the result of divideURL
 */function divideURL(url){// let re = /([a-zA-Z-]*)?:\/\/(?:\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b)*(\/[\/\d\w\.-]*)*(?:[\?])*(.+)*/gi;
var re=/([a-zA-Z-]*):\/\/(?:\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256})([-a-zA-Z0-9@:%._\+~#=\/]*)/gi;var subst='$1,$2,$3';var parts=url.replace(re,subst).split(',');// If the url has no protocol, the default protocol set is https
if(parts[0]===url){parts[0]='https';parts[1]=url;}var result={type:parts[0],domain:parts[1],identity:parts[2]};return result;}/**
 * Make a COPY of the original data
 * @param  {Object}  obj - object to be cloned
 * @return {Object}
 */function deepClone(obj){//TODO: simple but inefficient JSON deep clone...
if(obj)return JSON.parse(JSON.stringify(obj));}/**
 * Get WebRTC API resources
 * @param  {object}     options Object containing the information that resources will be used (camera, mic, resolution, etc);
 * @return {Promise}
 */function getUserMedia(constraints){return new Promise(function(resolve,reject){navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream){resolve(mediaStream);}).catch(function(reason){reject(reason);});});}function serialize(){$.fn.serializeObject=function(){var o={};var a=this.serializeArray();$.each(a,function(){if(o[this.name]!==undefined){if(!o[this.name].push){o[this.name]=[o[this.name]];}o[this.name].push(this.value||'');}else{o[this.name]=this.value||'';}});return o;};$.fn.serializeObjectArray=function(){var o={};var a=this.serializeArray();$.each(a,function(){if(o[this.name]!==undefined){if(!o[this.name].push){o[this.name]=[o[this.name]];}o[this.name].push(this.value||'');}else{if(!o[this.name])o[this.name]=[];o[this.name].push(this.value||'');}});return o;};}function getTemplate(path,script){return new Promise(function(resolve,reject){if(Handlebars.templates===undefined||Handlebars.templates[name]===undefined){Handlebars.templates={};}else{resolve(Handlebars.templates[name]);}var templateFile=$.ajax({url:path+'.hbs',success:function success(data){Handlebars.templates[name]=Handlebars.compile(data);},fail:function fail(reason){return reason;}});var scriptFile=$.getScript(script);var requests=[];if(path)requests.push(templateFile);if(script)requests.push(scriptFile);Promise.all(requests).then(function(result){resolve(Handlebars.templates[name]);}).catch(function(reason){reject(reason);});});}

},{}]},{},[6])(6)
});