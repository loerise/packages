!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).lhook={},t.React)}(this,(function(t,e){"use strict";function n(t){return null!=t&&"object"==typeof t&&!0===t["@@functional/placeholder"]}function r(t){return function e(r){return 0===arguments.length||n(r)?e:t.apply(this,arguments)}}function u(t){return function e(u,a){switch(arguments.length){case 0:return e;case 1:return n(u)?e:r((function(e){return t(u,e)}));default:return n(u)&&n(a)?e:n(u)?r((function(e){return t(e,a)})):n(a)?r((function(e){return t(u,e)})):t(u,a)}}}function a(t,e){var n;e=e||[];var r=(t=t||[]).length,u=e.length,a=[];for(n=0;n<r;)a[a.length]=t[n],n+=1;for(n=0;n<u;)a[a.length]=e[n],n+=1;return a}function i(t,e){switch(t){case 0:return function(){return e.apply(this,arguments)};case 1:return function(t){return e.apply(this,arguments)};case 2:return function(t,n){return e.apply(this,arguments)};case 3:return function(t,n,r){return e.apply(this,arguments)};case 4:return function(t,n,r,u){return e.apply(this,arguments)};case 5:return function(t,n,r,u,a){return e.apply(this,arguments)};case 6:return function(t,n,r,u,a,i){return e.apply(this,arguments)};case 7:return function(t,n,r,u,a,i,c){return e.apply(this,arguments)};case 8:return function(t,n,r,u,a,i,c,o){return e.apply(this,arguments)};case 9:return function(t,n,r,u,a,i,c,o,s){return e.apply(this,arguments)};case 10:return function(t,n,r,u,a,i,c,o,s,l){return e.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}function c(t,e,r){return function(){for(var u=[],a=0,o=t,s=0;s<e.length||a<arguments.length;){var l;s<e.length&&(!n(e[s])||a>=arguments.length)?l=e[s]:(l=arguments[a],a+=1),u[s]=l,n(l)||(o-=1),s+=1}return o<=0?r.apply(this,u):i(o,c(t,u,r))}}var o=u((function(t,e){return 1===t?r(e):i(t,c(t,[],e))}));function s(t){return function e(a,i,c){switch(arguments.length){case 0:return e;case 1:return n(a)?e:u((function(e,n){return t(a,e,n)}));case 2:return n(a)&&n(i)?e:n(a)?u((function(e,n){return t(e,i,n)})):n(i)?u((function(e,n){return t(a,e,n)})):r((function(e){return t(a,i,e)}));default:return n(a)&&n(i)&&n(c)?e:n(a)&&n(i)?u((function(e,n){return t(e,n,c)})):n(a)&&n(c)?u((function(e,n){return t(e,i,n)})):n(i)&&n(c)?u((function(e,n){return t(a,e,n)})):n(a)?r((function(e){return t(e,i,c)})):n(i)?r((function(e){return t(a,e,c)})):n(c)?r((function(e){return t(a,i,e)})):t(a,i,c)}}}var l=Array.isArray||function(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)};function f(t,e,n){return function(){if(0===arguments.length)return n();var r=arguments[arguments.length-1];if(!l(r)){for(var u=0;u<t.length;){if("function"==typeof r[t[u]])return r[t[u]].apply(r,Array.prototype.slice.call(arguments,0,-1));u+=1}if(function(t){return null!=t&&"function"==typeof t["@@transducer/step"]}(r))return e.apply(null,Array.prototype.slice.call(arguments,0,-1))(r)}return n.apply(this,arguments)}}var p=function(){return this.xf["@@transducer/init"]()},y=function(t){return this.xf["@@transducer/result"](t)};function h(t){return"[object String]"===Object.prototype.toString.call(t)}var b=r((function(t){return!!l(t)||!!t&&("object"==typeof t&&(!h(t)&&(0===t.length||t.length>0&&(t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1)))))})),d=function(){function t(t){this.f=t}return t.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},t.prototype["@@transducer/result"]=function(t){return t},t.prototype["@@transducer/step"]=function(t,e){return this.f(t,e)},t}();var g=u((function(t,e){return i(t.length,(function(){return t.apply(e,arguments)}))}));function v(t,e,n){for(var r=n.next();!r.done;){if((e=t["@@transducer/step"](e,r.value))&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}r=n.next()}return t["@@transducer/result"](e)}function m(t,e,n,r){return t["@@transducer/result"](n[r](g(t["@@transducer/step"],t),e))}var A="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";function j(t,e,n){if("function"==typeof t&&(t=function(t){return new d(t)}(t)),b(n))return function(t,e,n){for(var r=0,u=n.length;r<u;){if((e=t["@@transducer/step"](e,n[r]))&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}r+=1}return t["@@transducer/result"](e)}(t,e,n);if("function"==typeof n["fantasy-land/reduce"])return m(t,e,n,"fantasy-land/reduce");if(null!=n[A])return v(t,e,n[A]());if("function"==typeof n.next)return v(t,e,n);if("function"==typeof n.reduce)return m(t,e,n,"reduce");throw new TypeError("reduce: list must be array or iterable")}var k=function(){function t(t,e){this.xf=e,this.f=t}return t.prototype["@@transducer/init"]=p,t.prototype["@@transducer/result"]=y,t.prototype["@@transducer/step"]=function(t,e){return this.xf["@@transducer/step"](t,this.f(e))},t}(),S=u((function(t,e){return new k(t,e)}));function w(t,e){return Object.prototype.hasOwnProperty.call(e,t)}var O=Object.prototype.toString,_=function(){return"[object Arguments]"===O.call(arguments)?function(t){return"[object Arguments]"===O.call(t)}:function(t){return w("callee",t)}}(),C=!{toString:null}.propertyIsEnumerable("toString"),N=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],x=function(){return arguments.propertyIsEnumerable("length")}(),F=function(t,e){for(var n=0;n<t.length;){if(t[n]===e)return!0;n+=1}return!1},E="function"!=typeof Object.keys||x?r((function(t){if(Object(t)!==t)return[];var e,n,r=[],u=x&&_(t);for(e in t)!w(e,t)||u&&"length"===e||(r[r.length]=e);if(C)for(n=N.length-1;n>=0;)w(e=N[n],t)&&!F(r,e)&&(r[r.length]=e),n-=1;return r})):r((function(t){return Object(t)!==t?[]:Object.keys(t)})),q=u(f(["fantasy-land/map","map"],S,(function(t,e){switch(Object.prototype.toString.call(e)){case"[object Function]":return o(e.length,(function(){return t.call(this,e.apply(this,arguments))}));case"[object Object]":return j((function(n,r){return n[r]=t(e[r]),n}),{},E(e));default:return function(t,e){for(var n=0,r=e.length,u=Array(r);n<r;)u[n]=t(e[n]),n+=1;return u}(t,e)}}))),I=Number.isInteger||function(t){return t<<0===t},P=u((function(t,e){var n=t<0?e.length+t:t;return h(e)?e.charAt(n):e[n]})),U=u((function(t,e){if(null!=e)return I(t)?P(t,e):e[t]})),R=s(j),V=u((function(t,e){return t&&e})),$=u((function(t,e){return"function"==typeof e["fantasy-land/ap"]?e["fantasy-land/ap"](t):"function"==typeof t.ap?t.ap(e):"function"==typeof t?function(n){return t(n)(e(n))}:j((function(t,n){return a(t,q(n,e))}),[],t)}));var z=r((function(t){return null==t})),B=s((function t(e,n,r){if(0===e.length)return n;var u=e[0];if(e.length>1){var a=!z(r)&&w(u,r)?r[u]:I(e[1])?[]:{};n=t(Array.prototype.slice.call(e,1),n,a)}return function(t,e,n){if(I(t)&&l(n)){var r=[].concat(n);return r[t]=e,r}var u={};for(var a in n)u[a]=n[a];return u[t]=e,u}(u,n,r)}));function D(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e||"[object AsyncFunction]"===e||"[object GeneratorFunction]"===e||"[object AsyncGeneratorFunction]"===e}var H=u((function(t,e){var n=o(t,e);return o(t,(function(){return j($,q(n,arguments[0]),Array.prototype.slice.call(arguments,1))}))})),T=r((function(t){return H(t.length,t)})),J=u((function(t,e){return D(t)?function(){return t.apply(this,arguments)&&e.apply(this,arguments)}:T(V)(t,e)}));var Z=r((function(t){return null===t?"Null":void 0===t?"Undefined":Object.prototype.toString.call(t).slice(8,-1)}));function L(t,e,n,r){var u,a=function(u){for(var a=e.length,i=0;i<a;){if(t===e[i])return n[i];i+=1}for(var c in e[i]=t,n[i]=u,t)t.hasOwnProperty(c)&&(u[c]=r?L(t[c],e,n,!0):t[c]);return u};switch(Z(t)){case"Object":return a(Object.create(Object.getPrototypeOf(t)));case"Array":return a([]);case"Date":return new Date(t.valueOf());case"RegExp":return u=t,new RegExp(u.source,(u.global?"g":"")+(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.sticky?"y":"")+(u.unicode?"u":""));case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":return t.slice();default:return t}}var G=r((function(t){return null!=t&&"function"==typeof t.clone?t.clone():L(t,[],[],!0)}));function K(t,e){return function(){return e.call(this,t.apply(this,arguments))}}function M(t,e){return function(){var n=arguments.length;if(0===n)return e();var r=arguments[n-1];return l(r)||"function"!=typeof r[t]?e.apply(this,arguments):r[t].apply(r,Array.prototype.slice.call(arguments,0,n-1))}}var W=r(M("tail",s(M("slice",(function(t,e,n){return Array.prototype.slice.call(n,t,e)})))(1,1/0)));function X(){if(0===arguments.length)throw new Error("pipe requires at least one argument");return i(arguments[0].length,R(K,arguments[0],W(arguments)))}var Q=r((function(t){return h(t)?t.split("").reverse().join(""):Array.prototype.slice.call(t,0).reverse()}));function Y(){if(0===arguments.length)throw new Error("compose requires at least one argument");return X.apply(this,Q(arguments))}var tt=P(0);function et(t){return t}var nt=r(et);function rt(t){for(var e,n=[];!(e=t.next()).done;)n.push(e.value);return n}function ut(t,e,n){for(var r=0,u=n.length;r<u;){if(t(e,n[r]))return!0;r+=1}return!1}var at="function"==typeof Object.is?Object.is:function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e};function it(t,e,n,r){var u=rt(t);function a(t,e){return ct(t,e,n.slice(),r.slice())}return!ut((function(t,e){return!ut(a,e,t)}),rt(e),u)}function ct(t,e,n,r){if(at(t,e))return!0;var u,a,i=Z(t);if(i!==Z(e))return!1;if("function"==typeof t["fantasy-land/equals"]||"function"==typeof e["fantasy-land/equals"])return"function"==typeof t["fantasy-land/equals"]&&t["fantasy-land/equals"](e)&&"function"==typeof e["fantasy-land/equals"]&&e["fantasy-land/equals"](t);if("function"==typeof t.equals||"function"==typeof e.equals)return"function"==typeof t.equals&&t.equals(e)&&"function"==typeof e.equals&&e.equals(t);switch(i){case"Arguments":case"Array":case"Object":if("function"==typeof t.constructor&&"Promise"===(u=t.constructor,null==(a=String(u).match(/^function (\w*)/))?"":a[1]))return t===e;break;case"Boolean":case"Number":case"String":if(typeof t!=typeof e||!at(t.valueOf(),e.valueOf()))return!1;break;case"Date":if(!at(t.valueOf(),e.valueOf()))return!1;break;case"Error":return t.name===e.name&&t.message===e.message;case"RegExp":if(t.source!==e.source||t.global!==e.global||t.ignoreCase!==e.ignoreCase||t.multiline!==e.multiline||t.sticky!==e.sticky||t.unicode!==e.unicode)return!1}for(var c=n.length-1;c>=0;){if(n[c]===t)return r[c]===e;c-=1}switch(i){case"Map":return t.size===e.size&&it(t.entries(),e.entries(),n.concat([t]),r.concat([e]));case"Set":return t.size===e.size&&it(t.values(),e.values(),n.concat([t]),r.concat([e]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var o=E(t);if(o.length!==E(e).length)return!1;var s=n.concat([t]),l=r.concat([e]);for(c=o.length-1;c>=0;){var f=o[c];if(!w(f,e)||!ct(e[f],t[f],s,l))return!1;c-=1}return!0}var ot=u((function(t,e){return ct(t,e,[],[])}));function st(t,e){return function(t,e,n){var r,u;if("function"==typeof t.indexOf)switch(typeof e){case"number":if(0===e){for(r=1/e;n<t.length;){if(0===(u=t[n])&&1/u===r)return n;n+=1}return-1}if(e!=e){for(;n<t.length;){if("number"==typeof(u=t[n])&&u!=u)return n;n+=1}return-1}return t.indexOf(e,n);case"string":case"boolean":case"function":case"undefined":return t.indexOf(e,n);case"object":if(null===e)return t.indexOf(e,n)}for(;n<t.length;){if(ot(t[n],e))return n;n+=1}return-1}(e,t,0)>=0}function lt(t){return"[object Object]"===Object.prototype.toString.call(t)}var ft=function(){function t(t,e){this.xf=e,this.f=t}return t.prototype["@@transducer/init"]=p,t.prototype["@@transducer/result"]=y,t.prototype["@@transducer/step"]=function(t,e){return this.f(e)?this.xf["@@transducer/step"](t,e):t},t}(),pt=u(f(["fantasy-land/filter","filter"],u((function(t,e){return new ft(t,e)})),(function(t,e){return lt(e)?j((function(n,r){return t(e[r])&&(n[r]=e[r]),n}),{},E(e)):function(t,e){for(var n=0,r=e.length,u=[];n<r;)t(e[n])&&(u[u.length]=e[n]),n+=1;return u}(t,e)}))),yt=u((function(t,e){return pt((n=t,function(){return!n.apply(this,arguments)}),e);var n})),ht=u((function(t,e){return null==e||e!=e?t:e})),bt=function(){function t(){this._nativeSet="function"==typeof Set?new Set:null,this._items={}}return t.prototype.add=function(t){return!dt(t,!0,this)},t.prototype.has=function(t){return dt(t,!1,this)},t}();function dt(t,e,n){var r,u=typeof t;switch(u){case"string":case"number":return 0===t&&1/t==-1/0?!!n._items["-0"]||(e&&(n._items["-0"]=!0),!1):null!==n._nativeSet?e?(r=n._nativeSet.size,n._nativeSet.add(t),n._nativeSet.size===r):n._nativeSet.has(t):u in n._items?t in n._items[u]||(e&&(n._items[u][t]=!0),!1):(e&&(n._items[u]={},n._items[u][t]=!0),!1);case"boolean":if(u in n._items){var a=t?1:0;return!!n._items[u][a]||(e&&(n._items[u][a]=!0),!1)}return e&&(n._items[u]=t?[!1,!0]:[!0,!1]),!1;case"function":return null!==n._nativeSet?e?(r=n._nativeSet.size,n._nativeSet.add(t),n._nativeSet.size===r):n._nativeSet.has(t):u in n._items?!!st(t,n._items[u])||(e&&n._items[u].push(t),!1):(e&&(n._items[u]=[t]),!1);case"undefined":return!!n._items[u]||(e&&(n._items[u]=!0),!1);case"object":if(null===t)return!!n._items.null||(e&&(n._items.null=!0),!1);default:return(u=Object.prototype.toString.call(t))in n._items?!!st(t,n._items[u])||(e&&n._items[u].push(t),!1):(e&&(n._items[u]=[t]),!1)}}var gt=u((function(t,e){return t||e})),vt=u((function(t,e){return D(t)?function(){return t.apply(this,arguments)||e.apply(this,arguments)}:T(gt)(t,e)}));var mt=r((function(t){return null!=t&&"function"==typeof t["fantasy-land/empty"]?t["fantasy-land/empty"]():null!=t&&null!=t.constructor&&"function"==typeof t.constructor["fantasy-land/empty"]?t.constructor["fantasy-land/empty"]():null!=t&&"function"==typeof t.empty?t.empty():null!=t&&null!=t.constructor&&"function"==typeof t.constructor.empty?t.constructor.empty():l(t)?[]:h(t)?"":lt(t)?{}:_(t)?function(){return arguments}():function(t){var e=Object.prototype.toString.call(t);return"[object Uint8ClampedArray]"===e||"[object Int8Array]"===e||"[object Uint8Array]"===e||"[object Int16Array]"===e||"[object Uint16Array]"===e||"[object Int32Array]"===e||"[object Uint32Array]"===e||"[object Float32Array]"===e||"[object Float64Array]"===e||"[object BigInt64Array]"===e||"[object BigUint64Array]"===e}(t)?t.constructor.from(""):void 0})),At=u(M("forEach",(function(t,e){for(var n=e.length,r=0;r<n;)t(e[r]),r+=1;return e}))),jt=u((function(t,e){return t>e})),kt=function(){function t(t,e){this.xf=e,this.f=t,this.set=new bt}return t.prototype["@@transducer/init"]=p,t.prototype["@@transducer/result"]=y,t.prototype["@@transducer/step"]=function(t,e){return this.set.add(this.f(e))?this.xf["@@transducer/step"](t,e):t},t}(),St=u(f([],u((function(t,e){return new kt(t,e)})),(function(t,e){for(var n,r,u=new bt,a=[],i=0;i<e.length;)n=t(r=e[i]),u.add(n)&&a.push(r),i+=1;return a})))(nt),wt=r((function(t){return null!=t&&ot(t,mt(t))}));var Ot=r((function(t){return null!=t&&(e=t.length,"[object Number]"===Object.prototype.toString.call(e))?t.length:NaN;var e})),_t=u((function(t,e){return t.map((function(t){for(var n,r=e,u=0;u<t.length;){if(null==r)return;n=t[u],r=I(n)?P(n,r):r[n],u+=1}return r}))})),Ct=u((function(t,e){return _t([t],e)[0]})),Nt=u((function(t,e){return t<e})),xt=s((function(t,e,n){var r,u={};for(r in e)w(r,e)&&(u[r]=w(r,n)?t(r,e[r],n[r]):e[r]);for(r in n)w(r,n)&&!w(r,u)&&(u[r]=n[r]);return u})),Ft=s((function t(e,n,r){return xt((function(n,r,u){return lt(r)&&lt(u)?t(e,r,u):e(n,r,u)}),n,r)})),Et=u((function(t,e){return Ft((function(t,e,n){return n}),t,e)})),qt=s((function(t,e,n){return ht(t,Ct(e,n))})),It=u((function(t,e){return a([t],e)})),Pt=s((function(t,e,n){return ot(e,U(t,n))})),Ut=s((function(t,e,n){return ht(t,U(e,n))}));const Rt=Y(vt(z,wt)),Vt=(t,e)=>Rt(e)?t:e,$t=t=>{const n=e.useRef(),[r,u]=e.useState(t);return n.current=t=>new Promise((e=>{u(t),e(t)})),[r,n.current]};t.useAsyncState=$t,t.useForm=(t={})=>{const[,n]=e.useState(0),{initialEventName:r="",initialValueName:u="",initialValueKey:a=""}=t,i=e.useRef({}),c=e.useRef({}),o=e.useRef([]),s=e.useRef({}),l=e.useRef([]),f=e.useCallback((t=>Rt(t)?[]:t instanceof Array?t:String(t).includes(".")?String(t).split("."):[t]),[]),p=e.useCallback((t=>f(t).join(".")),[f]),y=e.useCallback(((t,e)=>Rt(e)?isNaN(Number(f(t)[0]))?{}:[]:e),[f]),h=e.useCallback((t=>Ct(f(t),c.current)),[f]),b=e.useCallback((()=>c.current),[]),d=e.useCallback(((t,e)=>{const r=y(t,c.current);c.current=B(f(t),e,r),n((new Date).getTime())}),[f,y]),g=e.useCallback((t=>{c.current=Et(c.current,t),n((new Date).getTime())}),[]),v=e.useCallback((()=>{c.current=G(i.current),n((new Date).getTime())}),[]),m=e.useCallback((t=>qt([],f(t),s.current)),[f]),A=e.useCallback(((t,e)=>{s.current=B(f(t),e,s.current)}),[f]),j=e.useCallback((()=>o.current),[]),k=e.useCallback((t=>{o.current.push(p(t))}),[p]),S=e.useCallback((()=>l.current),[]),w=e.useCallback((t=>Y(Ut("","message"),tt,pt(Pt("key",p(t))))(l.current)),[p]),O=e.useCallback(((t,e,n)=>{const r=p(t);l.current=Y(St,It({key:r,type:e,message:n}))(l.current)}),[p]),_=e.useCallback(((t,e)=>{const n=p(t);l.current=yt(J(Pt("key",n),Pt("type",e)),l.current)}),[p]),C=e.useCallback(((t,e)=>{const n=m(t);Rt(n)||At((n=>{const r=U("type",n),u=U("message",n);switch(r){case"required":Rt(e)?O(t,r,ht("该字段为必填项",u)):_(t,r);break;case"lt":!Rt(e)&&Number(e)<Number(n.value)?O(t,r,ht(`该字段不能大于${n.value}`,u)):_(t,r);break;case"lte":!Rt(e)&&Number(e)<=Number(n.value)?O(t,r,ht(`该字段不能大于等于${n.value}`,u)):_(t,r);break;case"gt":!Rt(e)&&Number(e)>Number(n.value)?O(t,r,ht(`该字段不能小于${n.value}`,u)):_(t,r);break;case"gte":!Rt(e)&&Number(e)>=Number(n.value)?O(t,r,ht(`该字段不能小于等于${n.value}`,u)):_(t,r);break;case"minLength":!Rt(e)&&Nt(Ot(String(e)),Number(n.value))?O(t,r,ht(`该字段不能小于${n.value}位`,u)):_(t,r);break;case"maxLength":!Rt(e)&&jt(Ot(String(e)),Number(n.value))?O(t,r,ht(`该字段不能大于${n.value}位`,u)):_(t,r);break;case"integer":Rt(e)||/^(-?\d*)$/.test(String(e))?_(t,r):O(t,r,ht("该字段为整数",u));break;case"decimals":Rt(e)||/^(-?\d*)([.]?\d{1,2})?$/.test(String(e))?_(t,r):O(t,r,ht("该字段为整数或小数(保留小数点后两位)",u));break;case"phone":Rt(e)||/^[01]\d{10}$/.test(String(e))?_(t,r):O(t,r,ht("电话号码不正确",u));break;case"vin":Rt(e)||/^[A-HJ-NPR-Z\d]{17}$/.test(String(e))?_(t,r):O(t,r,ht("车架号码不正确",u));break;case"licensePlate":Rt(e)||/^[京津沪渝冀晋辽吉黑苏浙皖川闽赣鲁豫鄂湘粤琼黔滇陕甘青台蒙桂藏宁新领使临][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]$/.test(String(e))?_(t,r):O(t,r,ht("车牌号码不正确",u));break;case"pattern":Rt(e)||void 0===n.pattern||n.pattern.test(String(e))?_(t,r):O(t,r,ht("验证不通过",u));break;case"trim":Rt(null==e?void 0:e.trim())?O(t,r,ht("字段不能为空格",u)):_(t,r)}}),n)}),[m,_,O]),N=e.useCallback((()=>{q((t=>{C(t,h(t))}),j())}),[j,h,C]),x=e.useCallback((()=>(N(),new Promise(((t,e)=>{const n=S();Rt(n)?t(b()):e(n)})))),[S,b,N]);return{validate:x,registerField:e.useCallback(((t,e={})=>{const{eventName:n=Vt("onChangeText",r),valueName:o=Vt("value",u),valueKey:s=Vt("detail",a),initialValue:l,placeholder:p,rules:y=[],interceptChange:b,interceptValue:g}=e,v=ht(null,l);void 0===h(t)&&(k(t),A(t,y),d(t,v),i.current=Et(ht({},i.current),B(f(t),v)));return{[o]:ht(p,h(t)),[n]:e=>{if(!("function"!=typeof b||b(c.current)))return;const n=Rt(f(s))?e:Ct(f(s),e),u="function"==typeof g?g(n):n;"onBlur"!==r&&C(t,u),d(t,u)}}}),[f,h,r,a,u,k,A,d,C]),getFieldValue:h,getFieldsValue:b,setFieldValue:d,setFieldsValue:g,getFieldError:w,resetFields:v}},t.useVisible=(t={})=>{const{initialVisible:n=!1,initialValue:r,beforeShow:u=(()=>!0),beforeHide:a=(()=>!0),afterShow:i=(()=>{}),afterHide:c=(()=>{})}=t,[o,s]=$t(n),[l,f]=$t(r),p=e.useCallback((()=>{u()&&s(!0).then(i)}),[i,u,s]);return{visible:o,value:l,handleShow:e.useCallback((t=>{ot(t,r)?p():f(ht(r,t)).then(p)}),[p,r,f]),handleHide:e.useCallback((()=>{a()&&s(!1).then((()=>{f(void 0).then(c)}))}),[c,a,r,f,s,l])}}}));
//# sourceMappingURL=index.js.map
