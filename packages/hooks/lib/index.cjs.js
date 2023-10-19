"use strict";var t=require("react");function e(t){return null!=t&&"object"==typeof t&&!0===t["@@functional/placeholder"]}function n(t){return function n(r){return 0===arguments.length||e(r)?n:t.apply(this,arguments)}}function r(t){return function r(u,a){switch(arguments.length){case 0:return r;case 1:return e(u)?r:n((function(e){return t(u,e)}));default:return e(u)&&e(a)?r:e(u)?n((function(e){return t(e,a)})):e(a)?n((function(e){return t(u,e)})):t(u,a)}}}function u(t,e){var n;e=e||[];var r=(t=t||[]).length,u=e.length,a=[];for(n=0;n<r;)a[a.length]=t[n],n+=1;for(n=0;n<u;)a[a.length]=e[n],n+=1;return a}function a(t,e){switch(t){case 0:return function(){return e.apply(this,arguments)};case 1:return function(t){return e.apply(this,arguments)};case 2:return function(t,n){return e.apply(this,arguments)};case 3:return function(t,n,r){return e.apply(this,arguments)};case 4:return function(t,n,r,u){return e.apply(this,arguments)};case 5:return function(t,n,r,u,a){return e.apply(this,arguments)};case 6:return function(t,n,r,u,a,c){return e.apply(this,arguments)};case 7:return function(t,n,r,u,a,c,i){return e.apply(this,arguments)};case 8:return function(t,n,r,u,a,c,i,o){return e.apply(this,arguments)};case 9:return function(t,n,r,u,a,c,i,o,s){return e.apply(this,arguments)};case 10:return function(t,n,r,u,a,c,i,o,s,l){return e.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}function c(t,n,r){return function(){for(var u=[],i=0,o=t,s=0;s<n.length||i<arguments.length;){var l;s<n.length&&(!e(n[s])||i>=arguments.length)?l=n[s]:(l=arguments[i],i+=1),u[s]=l,e(l)||(o-=1),s+=1}return o<=0?r.apply(this,u):a(o,c(t,u,r))}}var i=r((function(t,e){return 1===t?n(e):a(t,c(t,[],e))}));function o(t){return function u(a,c,i){switch(arguments.length){case 0:return u;case 1:return e(a)?u:r((function(e,n){return t(a,e,n)}));case 2:return e(a)&&e(c)?u:e(a)?r((function(e,n){return t(e,c,n)})):e(c)?r((function(e,n){return t(a,e,n)})):n((function(e){return t(a,c,e)}));default:return e(a)&&e(c)&&e(i)?u:e(a)&&e(c)?r((function(e,n){return t(e,n,i)})):e(a)&&e(i)?r((function(e,n){return t(e,c,n)})):e(c)&&e(i)?r((function(e,n){return t(a,e,n)})):e(a)?n((function(e){return t(e,c,i)})):e(c)?n((function(e){return t(a,e,i)})):e(i)?n((function(e){return t(a,c,e)})):t(a,c,i)}}}var s=Array.isArray||function(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)};function l(t,e,n){return function(){if(0===arguments.length)return n();var r=arguments[arguments.length-1];if(!s(r)){for(var u=0;u<t.length;){if("function"==typeof r[t[u]])return r[t[u]].apply(r,Array.prototype.slice.call(arguments,0,-1));u+=1}if(function(t){return null!=t&&"function"==typeof t["@@transducer/step"]}(r))return e.apply(null,Array.prototype.slice.call(arguments,0,-1))(r)}return n.apply(this,arguments)}}var f=function(){return this.xf["@@transducer/init"]()},p=function(t){return this.xf["@@transducer/result"](t)};function y(t){return"[object String]"===Object.prototype.toString.call(t)}var h=n((function(t){return!!s(t)||!!t&&("object"==typeof t&&(!y(t)&&(0===t.length||t.length>0&&(t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1)))))})),g=function(){function t(t){this.f=t}return t.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},t.prototype["@@transducer/result"]=function(t){return t},t.prototype["@@transducer/step"]=function(t,e){return this.f(t,e)},t}();var b=r((function(t,e){return a(t.length,(function(){return t.apply(e,arguments)}))}));function v(t,e,n){for(var r=n.next();!r.done;){if((e=t["@@transducer/step"](e,r.value))&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}r=n.next()}return t["@@transducer/result"](e)}function d(t,e,n,r){return t["@@transducer/result"](n[r](b(t["@@transducer/step"],t),e))}var m="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";function A(t,e,n){if("function"==typeof t&&(t=function(t){return new g(t)}(t)),h(n))return function(t,e,n){for(var r=0,u=n.length;r<u;){if((e=t["@@transducer/step"](e,n[r]))&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}r+=1}return t["@@transducer/result"](e)}(t,e,n);if("function"==typeof n["fantasy-land/reduce"])return d(t,e,n,"fantasy-land/reduce");if(null!=n[m])return v(t,e,n[m]());if("function"==typeof n.next)return v(t,e,n);if("function"==typeof n.reduce)return d(t,e,n,"reduce");throw new TypeError("reduce: list must be array or iterable")}var j=function(){function t(t,e){this.xf=e,this.f=t}return t.prototype["@@transducer/init"]=f,t.prototype["@@transducer/result"]=p,t.prototype["@@transducer/step"]=function(t,e){return this.xf["@@transducer/step"](t,this.f(e))},t}(),k=r((function(t,e){return new j(t,e)}));function S(t,e){return Object.prototype.hasOwnProperty.call(e,t)}var O=Object.prototype.toString,w=function(){return"[object Arguments]"===O.call(arguments)?function(t){return"[object Arguments]"===O.call(t)}:function(t){return S("callee",t)}}(),_=!{toString:null}.propertyIsEnumerable("toString"),C=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],N=function(){return arguments.propertyIsEnumerable("length")}(),x=function(t,e){for(var n=0;n<t.length;){if(t[n]===e)return!0;n+=1}return!1},F="function"!=typeof Object.keys||N?n((function(t){if(Object(t)!==t)return[];var e,n,r=[],u=N&&w(t);for(e in t)!S(e,t)||u&&"length"===e||(r[r.length]=e);if(_)for(n=C.length-1;n>=0;)S(e=C[n],t)&&!x(r,e)&&(r[r.length]=e),n-=1;return r})):n((function(t){return Object(t)!==t?[]:Object.keys(t)})),E=r(l(["fantasy-land/map","map"],k,(function(t,e){switch(Object.prototype.toString.call(e)){case"[object Function]":return i(e.length,(function(){return t.call(this,e.apply(this,arguments))}));case"[object Object]":return A((function(n,r){return n[r]=t(e[r]),n}),{},F(e));default:return function(t,e){for(var n=0,r=e.length,u=Array(r);n<r;)u[n]=t(e[n]),n+=1;return u}(t,e)}}))),P=Number.isInteger||function(t){return t<<0===t},U=r((function(t,e){var n=t<0?e.length+t:t;return y(e)?e.charAt(n):e[n]})),q=r((function(t,e){if(null!=e)return P(t)?U(t,e):e[t]})),I=o(A),D=r((function(t,e){return t&&e})),R=r((function(t,e){return"function"==typeof e["fantasy-land/ap"]?e["fantasy-land/ap"](t):"function"==typeof t.ap?t.ap(e):"function"==typeof t?function(n){return t(n)(e(n))}:A((function(t,n){return u(t,E(n,e))}),[],t)}));var V=n((function(t){return null==t})),$=o((function t(e,n,r){if(0===e.length)return n;var u=e[0];if(e.length>1){var a=!V(r)&&S(u,r)?r[u]:P(e[1])?[]:{};n=t(Array.prototype.slice.call(e,1),n,a)}return function(t,e,n){if(P(t)&&s(n)){var r=[].concat(n);return r[t]=e,r}var u={};for(var a in n)u[a]=n[a];return u[t]=e,u}(u,n,r)})),B=o((function(t,e,n){return $([t],e,n)}));function T(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e||"[object AsyncFunction]"===e||"[object GeneratorFunction]"===e||"[object AsyncGeneratorFunction]"===e}var z=r((function(t,e){var n=i(t,e);return i(t,(function(){return A(R,E(n,arguments[0]),Array.prototype.slice.call(arguments,1))}))})),H=n((function(t){return z(t.length,t)})),J=r((function(t,e){return T(t)?function(){return t.apply(this,arguments)&&e.apply(this,arguments)}:H(D)(t,e)}));var Z=n((function(t){return null===t?"Null":void 0===t?"Undefined":Object.prototype.toString.call(t).slice(8,-1)}));function L(t,e,n,r){var u,a=function(u){for(var a=e.length,c=0;c<a;){if(t===e[c])return n[c];c+=1}for(var i in e[c]=t,n[c]=u,t)t.hasOwnProperty(i)&&(u[i]=r?L(t[i],e,n,!0):t[i]);return u};switch(Z(t)){case"Object":return a(Object.create(Object.getPrototypeOf(t)));case"Array":return a([]);case"Date":return new Date(t.valueOf());case"RegExp":return u=t,new RegExp(u.source,(u.global?"g":"")+(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.sticky?"y":"")+(u.unicode?"u":""));case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":return t.slice();default:return t}}var G=n((function(t){return null!=t&&"function"==typeof t.clone?t.clone():L(t,[],[],!0)}));function K(t,e){return function(){return e.call(this,t.apply(this,arguments))}}function M(t,e){return function(){var n=arguments.length;if(0===n)return e();var r=arguments[n-1];return s(r)||"function"!=typeof r[t]?e.apply(this,arguments):r[t].apply(r,Array.prototype.slice.call(arguments,0,n-1))}}var W=n(M("tail",o(M("slice",(function(t,e,n){return Array.prototype.slice.call(n,t,e)})))(1,1/0)));function X(){if(0===arguments.length)throw new Error("pipe requires at least one argument");return a(arguments[0].length,I(K,arguments[0],W(arguments)))}var Q=n((function(t){return y(t)?t.split("").reverse().join(""):Array.prototype.slice.call(t,0).reverse()}));function Y(){if(0===arguments.length)throw new Error("compose requires at least one argument");return X.apply(this,Q(arguments))}var tt=U(0);function et(t){return t}var nt=n(et);function rt(t){for(var e,n=[];!(e=t.next()).done;)n.push(e.value);return n}function ut(t,e,n){for(var r=0,u=n.length;r<u;){if(t(e,n[r]))return!0;r+=1}return!1}var at="function"==typeof Object.is?Object.is:function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e};function ct(t,e,n,r){var u=rt(t);function a(t,e){return it(t,e,n.slice(),r.slice())}return!ut((function(t,e){return!ut(a,e,t)}),rt(e),u)}function it(t,e,n,r){if(at(t,e))return!0;var u,a,c=Z(t);if(c!==Z(e))return!1;if("function"==typeof t["fantasy-land/equals"]||"function"==typeof e["fantasy-land/equals"])return"function"==typeof t["fantasy-land/equals"]&&t["fantasy-land/equals"](e)&&"function"==typeof e["fantasy-land/equals"]&&e["fantasy-land/equals"](t);if("function"==typeof t.equals||"function"==typeof e.equals)return"function"==typeof t.equals&&t.equals(e)&&"function"==typeof e.equals&&e.equals(t);switch(c){case"Arguments":case"Array":case"Object":if("function"==typeof t.constructor&&"Promise"===(u=t.constructor,null==(a=String(u).match(/^function (\w*)/))?"":a[1]))return t===e;break;case"Boolean":case"Number":case"String":if(typeof t!=typeof e||!at(t.valueOf(),e.valueOf()))return!1;break;case"Date":if(!at(t.valueOf(),e.valueOf()))return!1;break;case"Error":return t.name===e.name&&t.message===e.message;case"RegExp":if(t.source!==e.source||t.global!==e.global||t.ignoreCase!==e.ignoreCase||t.multiline!==e.multiline||t.sticky!==e.sticky||t.unicode!==e.unicode)return!1}for(var i=n.length-1;i>=0;){if(n[i]===t)return r[i]===e;i-=1}switch(c){case"Map":return t.size===e.size&&ct(t.entries(),e.entries(),n.concat([t]),r.concat([e]));case"Set":return t.size===e.size&&ct(t.values(),e.values(),n.concat([t]),r.concat([e]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var o=F(t);if(o.length!==F(e).length)return!1;var s=n.concat([t]),l=r.concat([e]);for(i=o.length-1;i>=0;){var f=o[i];if(!S(f,e)||!it(e[f],t[f],s,l))return!1;i-=1}return!0}var ot=r((function(t,e){return it(t,e,[],[])}));function st(t,e){return function(t,e,n){var r,u;if("function"==typeof t.indexOf)switch(typeof e){case"number":if(0===e){for(r=1/e;n<t.length;){if(0===(u=t[n])&&1/u===r)return n;n+=1}return-1}if(e!=e){for(;n<t.length;){if("number"==typeof(u=t[n])&&u!=u)return n;n+=1}return-1}return t.indexOf(e,n);case"string":case"boolean":case"function":case"undefined":return t.indexOf(e,n);case"object":if(null===e)return t.indexOf(e,n)}for(;n<t.length;){if(ot(t[n],e))return n;n+=1}return-1}(e,t,0)>=0}function lt(t){return"[object Object]"===Object.prototype.toString.call(t)}var ft=function(){function t(t,e){this.xf=e,this.f=t}return t.prototype["@@transducer/init"]=f,t.prototype["@@transducer/result"]=p,t.prototype["@@transducer/step"]=function(t,e){return this.f(e)?this.xf["@@transducer/step"](t,e):t},t}(),pt=r(l(["fantasy-land/filter","filter"],r((function(t,e){return new ft(t,e)})),(function(t,e){return lt(e)?A((function(n,r){return t(e[r])&&(n[r]=e[r]),n}),{},F(e)):function(t,e){for(var n=0,r=e.length,u=[];n<r;)t(e[n])&&(u[u.length]=e[n]),n+=1;return u}(t,e)}))),yt=r((function(t,e){return pt((n=t,function(){return!n.apply(this,arguments)}),e);var n})),ht=r((function(t,e){return null==e||e!=e?t:e})),gt=function(){function t(){this._nativeSet="function"==typeof Set?new Set:null,this._items={}}return t.prototype.add=function(t){return!bt(t,!0,this)},t.prototype.has=function(t){return bt(t,!1,this)},t}();function bt(t,e,n){var r,u=typeof t;switch(u){case"string":case"number":return 0===t&&1/t==-1/0?!!n._items["-0"]||(e&&(n._items["-0"]=!0),!1):null!==n._nativeSet?e?(r=n._nativeSet.size,n._nativeSet.add(t),n._nativeSet.size===r):n._nativeSet.has(t):u in n._items?t in n._items[u]||(e&&(n._items[u][t]=!0),!1):(e&&(n._items[u]={},n._items[u][t]=!0),!1);case"boolean":if(u in n._items){var a=t?1:0;return!!n._items[u][a]||(e&&(n._items[u][a]=!0),!1)}return e&&(n._items[u]=t?[!1,!0]:[!0,!1]),!1;case"function":return null!==n._nativeSet?e?(r=n._nativeSet.size,n._nativeSet.add(t),n._nativeSet.size===r):n._nativeSet.has(t):u in n._items?!!st(t,n._items[u])||(e&&n._items[u].push(t),!1):(e&&(n._items[u]=[t]),!1);case"undefined":return!!n._items[u]||(e&&(n._items[u]=!0),!1);case"object":if(null===t)return!!n._items.null||(e&&(n._items.null=!0),!1);default:return(u=Object.prototype.toString.call(t))in n._items?!!st(t,n._items[u])||(e&&n._items[u].push(t),!1):(e&&(n._items[u]=[t]),!1)}}var vt=o((function(t,e,n){var r=Array.prototype.slice.call(n,0);return r.splice(t,e),r}));var dt=r((function t(e,n){if(null==n)return n;switch(e.length){case 0:return n;case 1:return function(t,e){if(null==e)return e;if(P(t)&&s(e))return vt(t,1,e);var n={};for(var r in e)n[r]=e[r];return delete n[t],n}(e[0],n);default:var r=e[0],u=Array.prototype.slice.call(e,1);return null==n[r]?function(t,e){if(P(t)&&s(e))return[].concat(e);var n={};for(var r in e)n[r]=e[r];return n}(r,n):B(r,t(u,n[r]),n)}})),mt=r((function(t,e){return t||e})),At=r((function(t,e){return T(t)?function(){return t.apply(this,arguments)||e.apply(this,arguments)}:H(mt)(t,e)}));var jt=n((function(t){return null!=t&&"function"==typeof t["fantasy-land/empty"]?t["fantasy-land/empty"]():null!=t&&null!=t.constructor&&"function"==typeof t.constructor["fantasy-land/empty"]?t.constructor["fantasy-land/empty"]():null!=t&&"function"==typeof t.empty?t.empty():null!=t&&null!=t.constructor&&"function"==typeof t.constructor.empty?t.constructor.empty():s(t)?[]:y(t)?"":lt(t)?{}:w(t)?function(){return arguments}():function(t){var e=Object.prototype.toString.call(t);return"[object Uint8ClampedArray]"===e||"[object Int8Array]"===e||"[object Uint8Array]"===e||"[object Int16Array]"===e||"[object Uint16Array]"===e||"[object Int32Array]"===e||"[object Uint32Array]"===e||"[object Float32Array]"===e||"[object Float64Array]"===e||"[object BigInt64Array]"===e||"[object BigUint64Array]"===e}(t)?t.constructor.from(""):void 0})),kt=r(M("forEach",(function(t,e){for(var n=e.length,r=0;r<n;)t(e[r]),r+=1;return e}))),St=r((function(t,e){return t>e})),Ot=function(){function t(t,e){this.xf=e,this.f=t,this.set=new gt}return t.prototype["@@transducer/init"]=f,t.prototype["@@transducer/result"]=p,t.prototype["@@transducer/step"]=function(t,e){return this.set.add(this.f(e))?this.xf["@@transducer/step"](t,e):t},t}(),wt=r(l([],r((function(t,e){return new Ot(t,e)})),(function(t,e){for(var n,r,u=new gt,a=[],c=0;c<e.length;)n=t(r=e[c]),u.add(n)&&a.push(r),c+=1;return a})))(nt),_t=n((function(t){return null!=t&&ot(t,jt(t))}));var Ct=n((function(t){return null!=t&&(e=t.length,"[object Number]"===Object.prototype.toString.call(e))?t.length:NaN;var e})),Nt=r((function(t,e){return t.map((function(t){for(var n,r=e,u=0;u<t.length;){if(null==r)return;n=t[u],r=P(n)?U(n,r):r[n],u+=1}return r}))})),xt=r((function(t,e){return Nt([t],e)[0]})),Ft=r((function(t,e){return t<e})),Et=o((function(t,e,n){var r,u={};for(r in e)S(r,e)&&(u[r]=S(r,n)?t(r,e[r],n[r]):e[r]);for(r in n)S(r,n)&&!S(r,u)&&(u[r]=n[r]);return u})),Pt=o((function t(e,n,r){return Et((function(n,r,u){return lt(r)&&lt(u)?t(e,r,u):e(n,r,u)}),n,r)})),Ut=r((function(t,e){return Pt((function(t,e,n){return n}),t,e)})),qt=o((function(t,e,n){return ht(t,xt(e,n))})),It=r((function(t,e){return u([t],e)})),Dt=o((function(t,e,n){return ot(e,q(t,n))})),Rt=o((function(t,e,n){return ht(t,q(e,n))}));const Vt=Y(At(V,_t)),$t=t=>Vt(t)?[]:t instanceof Array?t:String(t).includes(".")?String(t).split("."):[t],Bt=t=>$t(t).join("."),Tt=e=>{const n=t.useRef(null),[r,u]=t.useState(e);return n.current=t=>new Promise((e=>{u(t),e("function"==typeof t?t(r):t)})),[r,n.current]};exports.useBoolean=e=>{const[n,r]=t.useState(Boolean(e)),u=t.useCallback((()=>r(!0)),[]),a=t.useCallback((()=>r(!1)),[]),c=t.useCallback((()=>r((t=>!t))),[]);return{value:n,setValue:r,setTrue:u,setFalse:a,toggle:c}},exports.useDebounce=(e,n=300)=>{const[r,u]=t.useState(e);return t.useEffect((()=>{const t=setTimeout((()=>u(e)),n);return()=>clearTimeout(t)}),[e,n]),r},exports.useForm=(e={})=>{const[,n]=t.useState(0),{initialEventName:r="onChange",initialDestroyEventName:u="onDestroy",initialDestroyOnUnmount:a=!0,initialValueName:c="value",initialValueKey:i="detail"}=e,o=t.useRef({}),s=t.useRef({}),l=t.useRef([]),f=t.useRef({}),p=t.useRef([]),y=t.useCallback((t=>xt($t(t),s.current)),[]),h=t.useCallback((()=>s.current),[]),g=t.useCallback(((t,e)=>{const r=((t,e)=>Vt(e)?isNaN(Number($t(t)[0]))?{}:[]:e)(t,s.current);s.current=$($t(t),e,r),n((new Date).getTime())}),[]),b=t.useCallback((t=>{s.current=Ut(s.current,t),n((new Date).getTime())}),[]),v=t.useCallback((()=>{s.current=G(o.current),n((new Date).getTime())}),[]),d=t.useCallback((t=>qt([],$t(t),f.current)),[]),m=t.useCallback(((t,e)=>{f.current=$($t(t),e,f.current)}),[]),A=t.useCallback((()=>l.current),[]),j=t.useCallback((t=>{l.current.push(Bt(t))}),[]),k=t.useCallback((()=>p.current),[]),S=t.useCallback((()=>{p.current=[]}),[]),O=t.useCallback((t=>Y(Rt("","message"),tt,pt(Dt("key",Bt(t))))(p.current)),[]),w=t.useCallback(((t,e,n)=>{const r=Bt(t);p.current=Y(wt,It({key:r,type:e,message:n}))(p.current)}),[]),_=t.useCallback(((t,e)=>{const n=Bt(t);p.current=yt(J(Dt("key",n),Dt("type",e)),p.current)}),[]),C=t.useCallback(((t,e)=>{const n=d(t);Vt(n)||kt((n=>{const r=q("type",n),u=q("message",n);switch(r){case"required":Vt(e)?w(t,r,ht("该字段为必填项",u)):_(t,r);break;case"lt":!Vt(e)&&Number(e)<Number(n.value)?w(t,r,ht(`该字段不能大于${n.value}`,u)):_(t,r);break;case"lte":!Vt(e)&&Number(e)<=Number(n.value)?w(t,r,ht(`该字段不能大于等于${n.value}`,u)):_(t,r);break;case"gt":!Vt(e)&&Number(e)>Number(n.value)?w(t,r,ht(`该字段不能小于${n.value}`,u)):_(t,r);break;case"gte":!Vt(e)&&Number(e)>=Number(n.value)?w(t,r,ht(`该字段不能小于等于${n.value}`,u)):_(t,r);break;case"minLength":!Vt(e)&&Ft(Ct(String(e)),Number(n.value))?w(t,r,ht(`该字段不能小于${n.value}位`,u)):_(t,r);break;case"maxLength":!Vt(e)&&St(Ct(String(e)),Number(n.value))?w(t,r,ht(`该字段不能大于${n.value}位`,u)):_(t,r);break;case"integer":Vt(e)||/^(-?\d*)$/.test(String(e))?_(t,r):w(t,r,ht("该字段为整数",u));break;case"decimals":Vt(e)||/^(-?\d*)([.]?\d{1,2})?$/.test(String(e))?_(t,r):w(t,r,ht("该字段为整数或小数(保留小数点后两位)",u));break;case"phone":Vt(e)||/^[01]\d{10}$/.test(String(e))?_(t,r):w(t,r,ht("电话号码不正确",u));break;case"vin":Vt(e)||/^[A-HJ-NPR-Z\d]{17}$/.test(String(e))?_(t,r):w(t,r,ht("车架号码不正确",u));break;case"licensePlate":Vt(e)||/^[京津沪渝冀晋辽吉黑苏浙皖川闽赣鲁豫鄂湘粤琼黔滇陕甘青台蒙桂藏宁新领使临][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]$/.test(String(e))?_(t,r):w(t,r,ht("车牌号码不正确",u));break;case"pattern":Vt(e)||void 0===n.pattern||n.pattern.test(String(e))?_(t,r):w(t,r,ht("验证不通过",u));break;case"trim":Vt(null==e?void 0:e.trim())?w(t,r,ht("字段不能为空格",u)):_(t,r)}}),n)}),[d,_,w]),N=t.useCallback((()=>{S(),E((t=>{C(t,y(t))}),A())}),[S,A,y,C]),x=t.useCallback((()=>(N(),new Promise(((t,e)=>{const n=k();Vt(n)?t(h()):e(n)})))),[k,h,N]),F=t.useCallback(((t,e=a)=>{e&&(s.current=dt($t(t),s.current)),l.current=yt(ot(Bt(t)),l.current),f.current=dt($t(t),f.current),o.current=Ut(ht({},o.current),dt($t(t))),n((new Date).getTime())}),[]),P=t.useCallback(((t,e={})=>{const{eventName:n=r,destroyEventName:l=u,destroyOnUnmount:f=a,valueName:p=c,valueKey:h=i,initialValue:b,placeholder:v,rules:d=[],interceptChange:A,interceptValue:k}=e,S=ht(null,b);void 0===y(t)&&(j(t),m(t,d),g(t,S),o.current=Ut(ht({},o.current),$($t(t),S)));return{[p]:ht(v,y(t)),[n]:e=>{if(!("function"!=typeof A||A(s.current)))return;const n=Vt($t(h))?e:xt($t(h),e),u="function"==typeof k?k(n):n;"onBlur"!==r&&C(t,u),g(t,u)},[l]:()=>F(t,f)}}),[y,u,a,r,i,c,j,m,g,F,C]);return{getFieldError:O,getFieldValues:h,getFieldValue:y,registerField:P,resetFieldValues:v,setFieldValues:b,setFieldValue:g,unregisterField:F,validate:x}},exports.usePrevious=e=>{const n=t.useRef();return t.useEffect((()=>{n.current=e})),n.current},exports.useStatePromise=Tt,exports.useToggle=(e={})=>{const{initialState:n=!1,initialValue:r,beforeOn:u=(()=>!0),beforeOff:a=(()=>!0),afterOn:c=(()=>{}),afterOff:i=(()=>{})}=e,[o,s]=Tt(n),[l,f]=Tt(r),p=t.useCallback((()=>{u()&&s(!0).then(c)}),[c,u,s]),y=t.useCallback((t=>{ot(t,r)?p():f(ht(r,t)).then(p)}),[p,r,f]),h=t.useCallback((()=>{a()&&s(!1).then((()=>{f(void 0).then(i)}))}),[i,a,f,s]),g=t.useCallback((t=>{o?h():y(t)}),[o,y,h]);return{state:o,value:l,handleOn:y,handleOff:h,handleToggle:g}};
//# sourceMappingURL=index.cjs.js.map
