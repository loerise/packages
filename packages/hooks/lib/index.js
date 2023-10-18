!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).lhook={},t.React)}(this,(function(t,e){"use strict";function n(t){return null!=t&&"object"==typeof t&&!0===t["@@functional/placeholder"]}function r(t){return function e(r){return 0===arguments.length||n(r)?e:t.apply(this,arguments)}}function u(t){return function e(u,a){switch(arguments.length){case 0:return e;case 1:return n(u)?e:r((function(e){return t(u,e)}));default:return n(u)&&n(a)?e:n(u)?r((function(e){return t(e,a)})):n(a)?r((function(e){return t(u,e)})):t(u,a)}}}function a(t,e){var n;e=e||[];var r=(t=t||[]).length,u=e.length,a=[];for(n=0;n<r;)a[a.length]=t[n],n+=1;for(n=0;n<u;)a[a.length]=e[n],n+=1;return a}function c(t,e){switch(t){case 0:return function(){return e.apply(this,arguments)};case 1:return function(t){return e.apply(this,arguments)};case 2:return function(t,n){return e.apply(this,arguments)};case 3:return function(t,n,r){return e.apply(this,arguments)};case 4:return function(t,n,r,u){return e.apply(this,arguments)};case 5:return function(t,n,r,u,a){return e.apply(this,arguments)};case 6:return function(t,n,r,u,a,c){return e.apply(this,arguments)};case 7:return function(t,n,r,u,a,c,i){return e.apply(this,arguments)};case 8:return function(t,n,r,u,a,c,i,o){return e.apply(this,arguments)};case 9:return function(t,n,r,u,a,c,i,o,s){return e.apply(this,arguments)};case 10:return function(t,n,r,u,a,c,i,o,s,l){return e.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}function i(t,e,r){return function(){for(var u=[],a=0,o=t,s=0;s<e.length||a<arguments.length;){var l;s<e.length&&(!n(e[s])||a>=arguments.length)?l=e[s]:(l=arguments[a],a+=1),u[s]=l,n(l)||(o-=1),s+=1}return o<=0?r.apply(this,u):c(o,i(t,u,r))}}var o=u((function(t,e){return 1===t?r(e):c(t,i(t,[],e))}));function s(t){return function e(a,c,i){switch(arguments.length){case 0:return e;case 1:return n(a)?e:u((function(e,n){return t(a,e,n)}));case 2:return n(a)&&n(c)?e:n(a)?u((function(e,n){return t(e,c,n)})):n(c)?u((function(e,n){return t(a,e,n)})):r((function(e){return t(a,c,e)}));default:return n(a)&&n(c)&&n(i)?e:n(a)&&n(c)?u((function(e,n){return t(e,n,i)})):n(a)&&n(i)?u((function(e,n){return t(e,c,n)})):n(c)&&n(i)?u((function(e,n){return t(a,e,n)})):n(a)?r((function(e){return t(e,c,i)})):n(c)?r((function(e){return t(a,e,i)})):n(i)?r((function(e){return t(a,c,e)})):t(a,c,i)}}}var l=Array.isArray||function(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)};function f(t,e,n){return function(){if(0===arguments.length)return n();var r=arguments[arguments.length-1];if(!l(r)){for(var u=0;u<t.length;){if("function"==typeof r[t[u]])return r[t[u]].apply(r,Array.prototype.slice.call(arguments,0,-1));u+=1}if(function(t){return null!=t&&"function"==typeof t["@@transducer/step"]}(r))return e.apply(null,Array.prototype.slice.call(arguments,0,-1))(r)}return n.apply(this,arguments)}}var p=function(){return this.xf["@@transducer/init"]()},y=function(t){return this.xf["@@transducer/result"](t)};function h(t){return"[object String]"===Object.prototype.toString.call(t)}var g=r((function(t){return!!l(t)||!!t&&("object"==typeof t&&(!h(t)&&(0===t.length||t.length>0&&(t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1)))))})),d=function(){function t(t){this.f=t}return t.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},t.prototype["@@transducer/result"]=function(t){return t},t.prototype["@@transducer/step"]=function(t,e){return this.f(t,e)},t}();var b=u((function(t,e){return c(t.length,(function(){return t.apply(e,arguments)}))}));function v(t,e,n){for(var r=n.next();!r.done;){if((e=t["@@transducer/step"](e,r.value))&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}r=n.next()}return t["@@transducer/result"](e)}function m(t,e,n,r){return t["@@transducer/result"](n[r](b(t["@@transducer/step"],t),e))}var A="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";function j(t,e,n){if("function"==typeof t&&(t=function(t){return new d(t)}(t)),g(n))return function(t,e,n){for(var r=0,u=n.length;r<u;){if((e=t["@@transducer/step"](e,n[r]))&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}r+=1}return t["@@transducer/result"](e)}(t,e,n);if("function"==typeof n["fantasy-land/reduce"])return m(t,e,n,"fantasy-land/reduce");if(null!=n[A])return v(t,e,n[A]());if("function"==typeof n.next)return v(t,e,n);if("function"==typeof n.reduce)return m(t,e,n,"reduce");throw new TypeError("reduce: list must be array or iterable")}var k=function(){function t(t,e){this.xf=e,this.f=t}return t.prototype["@@transducer/init"]=p,t.prototype["@@transducer/result"]=y,t.prototype["@@transducer/step"]=function(t,e){return this.xf["@@transducer/step"](t,this.f(e))},t}(),O=u((function(t,e){return new k(t,e)}));function S(t,e){return Object.prototype.hasOwnProperty.call(e,t)}var w=Object.prototype.toString,_=function(){return"[object Arguments]"===w.call(arguments)?function(t){return"[object Arguments]"===w.call(t)}:function(t){return S("callee",t)}}(),C=!{toString:null}.propertyIsEnumerable("toString"),N=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],x=function(){return arguments.propertyIsEnumerable("length")}(),F=function(t,e){for(var n=0;n<t.length;){if(t[n]===e)return!0;n+=1}return!1},E="function"!=typeof Object.keys||x?r((function(t){if(Object(t)!==t)return[];var e,n,r=[],u=x&&_(t);for(e in t)!S(e,t)||u&&"length"===e||(r[r.length]=e);if(C)for(n=N.length-1;n>=0;)S(e=N[n],t)&&!F(r,e)&&(r[r.length]=e),n-=1;return r})):r((function(t){return Object(t)!==t?[]:Object.keys(t)})),U=u(f(["fantasy-land/map","map"],O,(function(t,e){switch(Object.prototype.toString.call(e)){case"[object Function]":return o(e.length,(function(){return t.call(this,e.apply(this,arguments))}));case"[object Object]":return j((function(n,r){return n[r]=t(e[r]),n}),{},E(e));default:return function(t,e){for(var n=0,r=e.length,u=Array(r);n<r;)u[n]=t(e[n]),n+=1;return u}(t,e)}}))),P=Number.isInteger||function(t){return t<<0===t},q=u((function(t,e){var n=t<0?e.length+t:t;return h(e)?e.charAt(n):e[n]})),I=u((function(t,e){if(null!=e)return P(t)?q(t,e):e[t]})),R=s(j),D=u((function(t,e){return t&&e})),T=u((function(t,e){return"function"==typeof e["fantasy-land/ap"]?e["fantasy-land/ap"](t):"function"==typeof t.ap?t.ap(e):"function"==typeof t?function(n){return t(n)(e(n))}:j((function(t,n){return a(t,U(n,e))}),[],t)}));var V=r((function(t){return null==t})),$=s((function t(e,n,r){if(0===e.length)return n;var u=e[0];if(e.length>1){var a=!V(r)&&S(u,r)?r[u]:P(e[1])?[]:{};n=t(Array.prototype.slice.call(e,1),n,a)}return function(t,e,n){if(P(t)&&l(n)){var r=[].concat(n);return r[t]=e,r}var u={};for(var a in n)u[a]=n[a];return u[t]=e,u}(u,n,r)})),B=s((function(t,e,n){return $([t],e,n)}));function z(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e||"[object AsyncFunction]"===e||"[object GeneratorFunction]"===e||"[object AsyncGeneratorFunction]"===e}var H=u((function(t,e){var n=o(t,e);return o(t,(function(){return j(T,U(n,arguments[0]),Array.prototype.slice.call(arguments,1))}))})),J=r((function(t){return H(t.length,t)})),Z=u((function(t,e){return z(t)?function(){return t.apply(this,arguments)&&e.apply(this,arguments)}:J(D)(t,e)}));var L=r((function(t){return null===t?"Null":void 0===t?"Undefined":Object.prototype.toString.call(t).slice(8,-1)}));function G(t,e,n,r){var u,a=function(u){for(var a=e.length,c=0;c<a;){if(t===e[c])return n[c];c+=1}for(var i in e[c]=t,n[c]=u,t)t.hasOwnProperty(i)&&(u[i]=r?G(t[i],e,n,!0):t[i]);return u};switch(L(t)){case"Object":return a(Object.create(Object.getPrototypeOf(t)));case"Array":return a([]);case"Date":return new Date(t.valueOf());case"RegExp":return u=t,new RegExp(u.source,(u.global?"g":"")+(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.sticky?"y":"")+(u.unicode?"u":""));case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":return t.slice();default:return t}}var K=r((function(t){return null!=t&&"function"==typeof t.clone?t.clone():G(t,[],[],!0)}));function M(t,e){return function(){return e.call(this,t.apply(this,arguments))}}function W(t,e){return function(){var n=arguments.length;if(0===n)return e();var r=arguments[n-1];return l(r)||"function"!=typeof r[t]?e.apply(this,arguments):r[t].apply(r,Array.prototype.slice.call(arguments,0,n-1))}}var X=r(W("tail",s(W("slice",(function(t,e,n){return Array.prototype.slice.call(n,t,e)})))(1,1/0)));function Q(){if(0===arguments.length)throw new Error("pipe requires at least one argument");return c(arguments[0].length,R(M,arguments[0],X(arguments)))}var Y=r((function(t){return h(t)?t.split("").reverse().join(""):Array.prototype.slice.call(t,0).reverse()}));function tt(){if(0===arguments.length)throw new Error("compose requires at least one argument");return Q.apply(this,Y(arguments))}var et=q(0);function nt(t){return t}var rt=r(nt);function ut(t){for(var e,n=[];!(e=t.next()).done;)n.push(e.value);return n}function at(t,e,n){for(var r=0,u=n.length;r<u;){if(t(e,n[r]))return!0;r+=1}return!1}var ct="function"==typeof Object.is?Object.is:function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e};function it(t,e,n,r){var u=ut(t);function a(t,e){return ot(t,e,n.slice(),r.slice())}return!at((function(t,e){return!at(a,e,t)}),ut(e),u)}function ot(t,e,n,r){if(ct(t,e))return!0;var u,a,c=L(t);if(c!==L(e))return!1;if("function"==typeof t["fantasy-land/equals"]||"function"==typeof e["fantasy-land/equals"])return"function"==typeof t["fantasy-land/equals"]&&t["fantasy-land/equals"](e)&&"function"==typeof e["fantasy-land/equals"]&&e["fantasy-land/equals"](t);if("function"==typeof t.equals||"function"==typeof e.equals)return"function"==typeof t.equals&&t.equals(e)&&"function"==typeof e.equals&&e.equals(t);switch(c){case"Arguments":case"Array":case"Object":if("function"==typeof t.constructor&&"Promise"===(u=t.constructor,null==(a=String(u).match(/^function (\w*)/))?"":a[1]))return t===e;break;case"Boolean":case"Number":case"String":if(typeof t!=typeof e||!ct(t.valueOf(),e.valueOf()))return!1;break;case"Date":if(!ct(t.valueOf(),e.valueOf()))return!1;break;case"Error":return t.name===e.name&&t.message===e.message;case"RegExp":if(t.source!==e.source||t.global!==e.global||t.ignoreCase!==e.ignoreCase||t.multiline!==e.multiline||t.sticky!==e.sticky||t.unicode!==e.unicode)return!1}for(var i=n.length-1;i>=0;){if(n[i]===t)return r[i]===e;i-=1}switch(c){case"Map":return t.size===e.size&&it(t.entries(),e.entries(),n.concat([t]),r.concat([e]));case"Set":return t.size===e.size&&it(t.values(),e.values(),n.concat([t]),r.concat([e]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var o=E(t);if(o.length!==E(e).length)return!1;var s=n.concat([t]),l=r.concat([e]);for(i=o.length-1;i>=0;){var f=o[i];if(!S(f,e)||!ot(e[f],t[f],s,l))return!1;i-=1}return!0}var st=u((function(t,e){return ot(t,e,[],[])}));function lt(t,e){return function(t,e,n){var r,u;if("function"==typeof t.indexOf)switch(typeof e){case"number":if(0===e){for(r=1/e;n<t.length;){if(0===(u=t[n])&&1/u===r)return n;n+=1}return-1}if(e!=e){for(;n<t.length;){if("number"==typeof(u=t[n])&&u!=u)return n;n+=1}return-1}return t.indexOf(e,n);case"string":case"boolean":case"function":case"undefined":return t.indexOf(e,n);case"object":if(null===e)return t.indexOf(e,n)}for(;n<t.length;){if(st(t[n],e))return n;n+=1}return-1}(e,t,0)>=0}function ft(t){return"[object Object]"===Object.prototype.toString.call(t)}var pt=function(){function t(t,e){this.xf=e,this.f=t}return t.prototype["@@transducer/init"]=p,t.prototype["@@transducer/result"]=y,t.prototype["@@transducer/step"]=function(t,e){return this.f(e)?this.xf["@@transducer/step"](t,e):t},t}(),yt=u(f(["fantasy-land/filter","filter"],u((function(t,e){return new pt(t,e)})),(function(t,e){return ft(e)?j((function(n,r){return t(e[r])&&(n[r]=e[r]),n}),{},E(e)):function(t,e){for(var n=0,r=e.length,u=[];n<r;)t(e[n])&&(u[u.length]=e[n]),n+=1;return u}(t,e)}))),ht=u((function(t,e){return yt((n=t,function(){return!n.apply(this,arguments)}),e);var n})),gt=u((function(t,e){return null==e||e!=e?t:e})),dt=function(){function t(){this._nativeSet="function"==typeof Set?new Set:null,this._items={}}return t.prototype.add=function(t){return!bt(t,!0,this)},t.prototype.has=function(t){return bt(t,!1,this)},t}();function bt(t,e,n){var r,u=typeof t;switch(u){case"string":case"number":return 0===t&&1/t==-1/0?!!n._items["-0"]||(e&&(n._items["-0"]=!0),!1):null!==n._nativeSet?e?(r=n._nativeSet.size,n._nativeSet.add(t),n._nativeSet.size===r):n._nativeSet.has(t):u in n._items?t in n._items[u]||(e&&(n._items[u][t]=!0),!1):(e&&(n._items[u]={},n._items[u][t]=!0),!1);case"boolean":if(u in n._items){var a=t?1:0;return!!n._items[u][a]||(e&&(n._items[u][a]=!0),!1)}return e&&(n._items[u]=t?[!1,!0]:[!0,!1]),!1;case"function":return null!==n._nativeSet?e?(r=n._nativeSet.size,n._nativeSet.add(t),n._nativeSet.size===r):n._nativeSet.has(t):u in n._items?!!lt(t,n._items[u])||(e&&n._items[u].push(t),!1):(e&&(n._items[u]=[t]),!1);case"undefined":return!!n._items[u]||(e&&(n._items[u]=!0),!1);case"object":if(null===t)return!!n._items.null||(e&&(n._items.null=!0),!1);default:return(u=Object.prototype.toString.call(t))in n._items?!!lt(t,n._items[u])||(e&&n._items[u].push(t),!1):(e&&(n._items[u]=[t]),!1)}}var vt=s((function(t,e,n){var r=Array.prototype.slice.call(n,0);return r.splice(t,e),r}));var mt=u((function t(e,n){if(null==n)return n;switch(e.length){case 0:return n;case 1:return function(t,e){if(null==e)return e;if(P(t)&&l(e))return vt(t,1,e);var n={};for(var r in e)n[r]=e[r];return delete n[t],n}(e[0],n);default:var r=e[0],u=Array.prototype.slice.call(e,1);return null==n[r]?function(t,e){if(P(t)&&l(e))return[].concat(e);var n={};for(var r in e)n[r]=e[r];return n}(r,n):B(r,t(u,n[r]),n)}})),At=u((function(t,e){return t||e})),jt=u((function(t,e){return z(t)?function(){return t.apply(this,arguments)||e.apply(this,arguments)}:J(At)(t,e)}));var kt=r((function(t){return null!=t&&"function"==typeof t["fantasy-land/empty"]?t["fantasy-land/empty"]():null!=t&&null!=t.constructor&&"function"==typeof t.constructor["fantasy-land/empty"]?t.constructor["fantasy-land/empty"]():null!=t&&"function"==typeof t.empty?t.empty():null!=t&&null!=t.constructor&&"function"==typeof t.constructor.empty?t.constructor.empty():l(t)?[]:h(t)?"":ft(t)?{}:_(t)?function(){return arguments}():function(t){var e=Object.prototype.toString.call(t);return"[object Uint8ClampedArray]"===e||"[object Int8Array]"===e||"[object Uint8Array]"===e||"[object Int16Array]"===e||"[object Uint16Array]"===e||"[object Int32Array]"===e||"[object Uint32Array]"===e||"[object Float32Array]"===e||"[object Float64Array]"===e||"[object BigInt64Array]"===e||"[object BigUint64Array]"===e}(t)?t.constructor.from(""):void 0})),Ot=u(W("forEach",(function(t,e){for(var n=e.length,r=0;r<n;)t(e[r]),r+=1;return e}))),St=u((function(t,e){return t>e})),wt=function(){function t(t,e){this.xf=e,this.f=t,this.set=new dt}return t.prototype["@@transducer/init"]=p,t.prototype["@@transducer/result"]=y,t.prototype["@@transducer/step"]=function(t,e){return this.set.add(this.f(e))?this.xf["@@transducer/step"](t,e):t},t}(),_t=u(f([],u((function(t,e){return new wt(t,e)})),(function(t,e){for(var n,r,u=new dt,a=[],c=0;c<e.length;)n=t(r=e[c]),u.add(n)&&a.push(r),c+=1;return a})))(rt),Ct=r((function(t){return null!=t&&st(t,kt(t))}));var Nt=r((function(t){return null!=t&&(e=t.length,"[object Number]"===Object.prototype.toString.call(e))?t.length:NaN;var e})),xt=u((function(t,e){return t.map((function(t){for(var n,r=e,u=0;u<t.length;){if(null==r)return;n=t[u],r=P(n)?q(n,r):r[n],u+=1}return r}))})),Ft=u((function(t,e){return xt([t],e)[0]})),Et=u((function(t,e){return t<e})),Ut=s((function(t,e,n){var r,u={};for(r in e)S(r,e)&&(u[r]=S(r,n)?t(r,e[r],n[r]):e[r]);for(r in n)S(r,n)&&!S(r,u)&&(u[r]=n[r]);return u})),Pt=s((function t(e,n,r){return Ut((function(n,r,u){return ft(r)&&ft(u)?t(e,r,u):e(n,r,u)}),n,r)})),qt=u((function(t,e){return Pt((function(t,e,n){return n}),t,e)})),It=s((function(t,e,n){return gt(t,Ft(e,n))})),Rt=u((function(t,e){return a([t],e)})),Dt=s((function(t,e,n){return st(e,I(t,n))})),Tt=s((function(t,e,n){return gt(t,I(e,n))}));const Vt=tt(jt(V,Ct)),$t=t=>Vt(t)?[]:t instanceof Array?t:String(t).includes(".")?String(t).split("."):[t],Bt=t=>$t(t).join("."),zt=t=>{const n=e.useRef(null),[r,u]=e.useState(t);return n.current=t=>new Promise((e=>{u(t),e("function"==typeof t?t(r):t)})),[r,n.current]};t.useBoolean=t=>{const[n,r]=e.useState(Boolean(t)),u=e.useCallback((()=>r(!0)),[]),a=e.useCallback((()=>r(!1)),[]),c=e.useCallback((()=>r((t=>!t))),[]);return{value:n,setValue:r,setTrue:u,setFalse:a,toggle:c}},t.useDebounce=(t,n=300)=>{const[r,u]=e.useState(t);return e.useEffect((()=>{const e=setTimeout((()=>u(t)),n);return()=>clearTimeout(e)}),[t,n]),r},t.useForm=(t={})=>{const[,n]=e.useState(0),{initialEventName:r="onChange",initialDestroyEventName:u="onDestroy",initialDestroyOnUnmount:a=!0,initialValueName:c="value",initialValueKey:i="detail"}=t,o=e.useRef({}),s=e.useRef({}),l=e.useRef([]),f=e.useRef({}),p=e.useRef([]),y=e.useCallback((t=>Ft($t(t),s.current)),[]),h=e.useCallback((()=>s.current),[]),g=e.useCallback(((t,e)=>{const r=((t,e)=>Vt(e)?isNaN(Number($t(t)[0]))?{}:[]:e)(t,s.current);s.current=$($t(t),e,r),n((new Date).getTime())}),[]),d=e.useCallback((t=>{s.current=qt(s.current,t),n((new Date).getTime())}),[]),b=e.useCallback((()=>{s.current=K(o.current),n((new Date).getTime())}),[]),v=e.useCallback((t=>It([],$t(t),f.current)),[]),m=e.useCallback(((t,e)=>{f.current=$($t(t),e,f.current)}),[]),A=e.useCallback((()=>l.current),[]),j=e.useCallback((t=>{l.current.push(Bt(t))}),[]),k=e.useCallback((()=>p.current),[]),O=e.useCallback((()=>{p.current=[]}),[]),S=e.useCallback((t=>tt(Tt("","message"),et,yt(Dt("key",Bt(t))))(p.current)),[]),w=e.useCallback(((t,e,n)=>{const r=Bt(t);p.current=tt(_t,Rt({key:r,type:e,message:n}))(p.current)}),[]),_=e.useCallback(((t,e)=>{const n=Bt(t);p.current=ht(Z(Dt("key",n),Dt("type",e)),p.current)}),[]),C=e.useCallback(((t,e)=>{const n=v(t);Vt(n)||Ot((n=>{const r=I("type",n),u=I("message",n);switch(r){case"required":Vt(e)?w(t,r,gt("该字段为必填项",u)):_(t,r);break;case"lt":!Vt(e)&&Number(e)<Number(n.value)?w(t,r,gt(`该字段不能大于${n.value}`,u)):_(t,r);break;case"lte":!Vt(e)&&Number(e)<=Number(n.value)?w(t,r,gt(`该字段不能大于等于${n.value}`,u)):_(t,r);break;case"gt":!Vt(e)&&Number(e)>Number(n.value)?w(t,r,gt(`该字段不能小于${n.value}`,u)):_(t,r);break;case"gte":!Vt(e)&&Number(e)>=Number(n.value)?w(t,r,gt(`该字段不能小于等于${n.value}`,u)):_(t,r);break;case"minLength":!Vt(e)&&Et(Nt(String(e)),Number(n.value))?w(t,r,gt(`该字段不能小于${n.value}位`,u)):_(t,r);break;case"maxLength":!Vt(e)&&St(Nt(String(e)),Number(n.value))?w(t,r,gt(`该字段不能大于${n.value}位`,u)):_(t,r);break;case"integer":Vt(e)||/^(-?\d*)$/.test(String(e))?_(t,r):w(t,r,gt("该字段为整数",u));break;case"decimals":Vt(e)||/^(-?\d*)([.]?\d{1,2})?$/.test(String(e))?_(t,r):w(t,r,gt("该字段为整数或小数(保留小数点后两位)",u));break;case"phone":Vt(e)||/^[01]\d{10}$/.test(String(e))?_(t,r):w(t,r,gt("电话号码不正确",u));break;case"vin":Vt(e)||/^[A-HJ-NPR-Z\d]{17}$/.test(String(e))?_(t,r):w(t,r,gt("车架号码不正确",u));break;case"licensePlate":Vt(e)||/^[京津沪渝冀晋辽吉黑苏浙皖川闽赣鲁豫鄂湘粤琼黔滇陕甘青台蒙桂藏宁新领使临][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]$/.test(String(e))?_(t,r):w(t,r,gt("车牌号码不正确",u));break;case"pattern":Vt(e)||void 0===n.pattern||n.pattern.test(String(e))?_(t,r):w(t,r,gt("验证不通过",u));break;case"trim":Vt(null==e?void 0:e.trim())?w(t,r,gt("字段不能为空格",u)):_(t,r)}}),n)}),[v,_,w]),N=e.useCallback((()=>{O(),U((t=>{C(t,y(t))}),A())}),[O,A,y,C]),x=e.useCallback((()=>(N(),new Promise(((t,e)=>{const n=k();Vt(n)?t(h()):e(n)})))),[k,h,N]),F=e.useCallback(((t,e=a)=>{console.log("destroyOnUnmount",e),e&&(s.current=mt($t(t),s.current)),l.current=ht(st(Bt(t)),l.current),f.current=mt($t(t),f.current),o.current=qt(gt({},o.current),mt($t(t))),n((new Date).getTime())}),[]),E=e.useCallback(((t,e={})=>{const{eventName:n=r,destroyEventName:l=u,destroyOnUnmount:f=a,valueName:p=c,valueKey:h=i,initialValue:d,placeholder:b,rules:v=[],interceptChange:A,interceptValue:k}=e,O=gt(null,d);void 0===y(t)&&(j(t),m(t,v),g(t,O),o.current=qt(gt({},o.current),$($t(t),O)));return{[p]:gt(b,y(t)),[n]:e=>{if(!("function"!=typeof A||A(s.current)))return;const n=Vt($t(h))?e:Ft($t(h),e),u="function"==typeof k?k(n):n;"onBlur"!==r&&C(t,u),g(t,u)},[l]:()=>F(t,f)}}),[y,u,a,r,i,c,j,m,g,F,C]);return{getFieldError:S,getFieldValues:h,getFieldValue:y,registerField:E,resetFieldValues:b,setFieldValues:d,setFieldValue:g,unregisterField:F,validate:x}},t.usePrevious=t=>{const n=e.useRef();return e.useEffect((()=>{n.current=t})),n.current},t.useStatePromise=zt,t.useToggle=(t={})=>{const{initialState:n=!1,initialValue:r,beforeOn:u=(()=>!0),beforeOff:a=(()=>!0),afterOn:c=(()=>{}),afterOff:i=(()=>{})}=t,[o,s]=zt(n),[l,f]=zt(r),p=e.useCallback((()=>{u()&&s(!0).then(c)}),[c,u,s]),y=e.useCallback((t=>{st(t,r)?p():f(gt(r,t)).then(p)}),[p,r,f]),h=e.useCallback((()=>{a()&&s(!1).then((()=>{f(void 0).then(i)}))}),[i,a,f,s]),g=e.useCallback((t=>{o?h():y(t)}),[o,y,h]);return{state:o,value:l,handleOn:y,handleOff:h,handleToggle:g}}}));
//# sourceMappingURL=index.js.map
