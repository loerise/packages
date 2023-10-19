import{useState as t,useCallback as n,useEffect as r,useRef as e}from"react";const u=r=>{const[e,u]=t(Boolean(r)),a=n((()=>u(!0)),[]),i=n((()=>u(!1)),[]),c=n((()=>u((t=>!t))),[]);return{value:e,setValue:u,setTrue:a,setFalse:i,toggle:c}},a=(n,e=300)=>{const[u,a]=t(n);return r((()=>{const t=setTimeout((()=>a(n)),e);return()=>clearTimeout(t)}),[n,e]),u};function i(t){return null!=t&&"object"==typeof t&&!0===t["@@functional/placeholder"]}function c(t){return function n(r){return 0===arguments.length||i(r)?n:t.apply(this,arguments)}}function o(t){return function n(r,e){switch(arguments.length){case 0:return n;case 1:return i(r)?n:c((function(n){return t(r,n)}));default:return i(r)&&i(e)?n:i(r)?c((function(n){return t(n,e)})):i(e)?c((function(n){return t(r,n)})):t(r,e)}}}function s(t,n){var r;n=n||[];var e=(t=t||[]).length,u=n.length,a=[];for(r=0;r<e;)a[a.length]=t[r],r+=1;for(r=0;r<u;)a[a.length]=n[r],r+=1;return a}function f(t,n){switch(t){case 0:return function(){return n.apply(this,arguments)};case 1:return function(t){return n.apply(this,arguments)};case 2:return function(t,r){return n.apply(this,arguments)};case 3:return function(t,r,e){return n.apply(this,arguments)};case 4:return function(t,r,e,u){return n.apply(this,arguments)};case 5:return function(t,r,e,u,a){return n.apply(this,arguments)};case 6:return function(t,r,e,u,a,i){return n.apply(this,arguments)};case 7:return function(t,r,e,u,a,i,c){return n.apply(this,arguments)};case 8:return function(t,r,e,u,a,i,c,o){return n.apply(this,arguments)};case 9:return function(t,r,e,u,a,i,c,o,s){return n.apply(this,arguments)};case 10:return function(t,r,e,u,a,i,c,o,s,f){return n.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}function l(t,n,r){return function(){for(var e=[],u=0,a=t,c=0;c<n.length||u<arguments.length;){var o;c<n.length&&(!i(n[c])||u>=arguments.length)?o=n[c]:(o=arguments[u],u+=1),e[c]=o,i(o)||(a-=1),c+=1}return a<=0?r.apply(this,e):f(a,l(t,e,r))}}var p=o((function(t,n){return 1===t?c(n):f(t,l(t,[],n))}));function y(t){return function n(r,e,u){switch(arguments.length){case 0:return n;case 1:return i(r)?n:o((function(n,e){return t(r,n,e)}));case 2:return i(r)&&i(e)?n:i(r)?o((function(n,r){return t(n,e,r)})):i(e)?o((function(n,e){return t(r,n,e)})):c((function(n){return t(r,e,n)}));default:return i(r)&&i(e)&&i(u)?n:i(r)&&i(e)?o((function(n,r){return t(n,r,u)})):i(r)&&i(u)?o((function(n,r){return t(n,e,r)})):i(e)&&i(u)?o((function(n,e){return t(r,n,e)})):i(r)?c((function(n){return t(n,e,u)})):i(e)?c((function(n){return t(r,n,u)})):i(u)?c((function(n){return t(r,e,n)})):t(r,e,u)}}}var h=Array.isArray||function(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)};function g(t,n,r){return function(){if(0===arguments.length)return r();var e=arguments[arguments.length-1];if(!h(e)){for(var u=0;u<t.length;){if("function"==typeof e[t[u]])return e[t[u]].apply(e,Array.prototype.slice.call(arguments,0,-1));u+=1}if(function(t){return null!=t&&"function"==typeof t["@@transducer/step"]}(e))return n.apply(null,Array.prototype.slice.call(arguments,0,-1))(e)}return r.apply(this,arguments)}}var v=function(){return this.xf["@@transducer/init"]()},d=function(t){return this.xf["@@transducer/result"](t)};function m(t){return"[object String]"===Object.prototype.toString.call(t)}var b=c((function(t){return!!h(t)||!!t&&("object"==typeof t&&(!m(t)&&(0===t.length||t.length>0&&(t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1)))))})),A=function(){function t(t){this.f=t}return t.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},t.prototype["@@transducer/result"]=function(t){return t},t.prototype["@@transducer/step"]=function(t,n){return this.f(t,n)},t}();var j=o((function(t,n){return f(t.length,(function(){return t.apply(n,arguments)}))}));function O(t,n,r){for(var e=r.next();!e.done;){if((n=t["@@transducer/step"](n,e.value))&&n["@@transducer/reduced"]){n=n["@@transducer/value"];break}e=r.next()}return t["@@transducer/result"](n)}function S(t,n,r,e){return t["@@transducer/result"](r[e](j(t["@@transducer/step"],t),n))}var w="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";function _(t,n,r){if("function"==typeof t&&(t=function(t){return new A(t)}(t)),b(r))return function(t,n,r){for(var e=0,u=r.length;e<u;){if((n=t["@@transducer/step"](n,r[e]))&&n["@@transducer/reduced"]){n=n["@@transducer/value"];break}e+=1}return t["@@transducer/result"](n)}(t,n,r);if("function"==typeof r["fantasy-land/reduce"])return S(t,n,r,"fantasy-land/reduce");if(null!=r[w])return O(t,n,r[w]());if("function"==typeof r.next)return O(t,n,r);if("function"==typeof r.reduce)return S(t,n,r,"reduce");throw new TypeError("reduce: list must be array or iterable")}var N=function(){function t(t,n){this.xf=n,this.f=t}return t.prototype["@@transducer/init"]=v,t.prototype["@@transducer/result"]=d,t.prototype["@@transducer/step"]=function(t,n){return this.xf["@@transducer/step"](t,this.f(n))},t}(),k=o((function(t,n){return new N(t,n)}));function x(t,n){return Object.prototype.hasOwnProperty.call(n,t)}var F=Object.prototype.toString,E=function(){return"[object Arguments]"===F.call(arguments)?function(t){return"[object Arguments]"===F.call(t)}:function(t){return x("callee",t)}}(),U=!{toString:null}.propertyIsEnumerable("toString"),q=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],I=function(){return arguments.propertyIsEnumerable("length")}(),P=function(t,n){for(var r=0;r<t.length;){if(t[r]===n)return!0;r+=1}return!1},D="function"!=typeof Object.keys||I?c((function(t){if(Object(t)!==t)return[];var n,r,e=[],u=I&&E(t);for(n in t)!x(n,t)||u&&"length"===n||(e[e.length]=n);if(U)for(r=q.length-1;r>=0;)x(n=q[r],t)&&!P(e,n)&&(e[e.length]=n),r-=1;return e})):c((function(t){return Object(t)!==t?[]:Object.keys(t)})),V=o(g(["fantasy-land/map","map"],k,(function(t,n){switch(Object.prototype.toString.call(n)){case"[object Function]":return p(n.length,(function(){return t.call(this,n.apply(this,arguments))}));case"[object Object]":return _((function(r,e){return r[e]=t(n[e]),r}),{},D(n));default:return function(t,n){for(var r=0,e=n.length,u=Array(e);r<e;)u[r]=t(n[r]),r+=1;return u}(t,n)}}))),$=Number.isInteger||function(t){return t<<0===t},B=o((function(t,n){var r=t<0?n.length+t:t;return m(n)?n.charAt(r):n[r]})),T=o((function(t,n){if(null!=n)return $(t)?B(t,n):n[t]})),z=y(_),C=o((function(t,n){return t&&n})),R=o((function(t,n){return"function"==typeof n["fantasy-land/ap"]?n["fantasy-land/ap"](t):"function"==typeof t.ap?t.ap(n):"function"==typeof t?function(r){return t(r)(n(r))}:_((function(t,r){return s(t,V(r,n))}),[],t)}));var H=c((function(t){return null==t})),J=y((function t(n,r,e){if(0===n.length)return r;var u=n[0];if(n.length>1){var a=!H(e)&&x(u,e)?e[u]:$(n[1])?[]:{};r=t(Array.prototype.slice.call(n,1),r,a)}return function(t,n,r){if($(t)&&h(r)){var e=[].concat(r);return e[t]=n,e}var u={};for(var a in r)u[a]=r[a];return u[t]=n,u}(u,r,e)})),Z=y((function(t,n,r){return J([t],n,r)}));function L(t){var n=Object.prototype.toString.call(t);return"[object Function]"===n||"[object AsyncFunction]"===n||"[object GeneratorFunction]"===n||"[object AsyncGeneratorFunction]"===n}var G=o((function(t,n){var r=p(t,n);return p(t,(function(){return _(R,V(r,arguments[0]),Array.prototype.slice.call(arguments,1))}))})),K=c((function(t){return G(t.length,t)})),M=o((function(t,n){return L(t)?function(){return t.apply(this,arguments)&&n.apply(this,arguments)}:K(C)(t,n)}));var W=c((function(t){return null===t?"Null":void 0===t?"Undefined":Object.prototype.toString.call(t).slice(8,-1)}));function X(t,n,r,e){var u,a=function(u){for(var a=n.length,i=0;i<a;){if(t===n[i])return r[i];i+=1}for(var c in n[i]=t,r[i]=u,t)t.hasOwnProperty(c)&&(u[c]=e?X(t[c],n,r,!0):t[c]);return u};switch(W(t)){case"Object":return a(Object.create(Object.getPrototypeOf(t)));case"Array":return a([]);case"Date":return new Date(t.valueOf());case"RegExp":return u=t,new RegExp(u.source,(u.global?"g":"")+(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.sticky?"y":"")+(u.unicode?"u":""));case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":return t.slice();default:return t}}var Q=c((function(t){return null!=t&&"function"==typeof t.clone?t.clone():X(t,[],[],!0)}));function Y(t,n){return function(){return n.call(this,t.apply(this,arguments))}}function tt(t,n){return function(){var r=arguments.length;if(0===r)return n();var e=arguments[r-1];return h(e)||"function"!=typeof e[t]?n.apply(this,arguments):e[t].apply(e,Array.prototype.slice.call(arguments,0,r-1))}}var nt=c(tt("tail",y(tt("slice",(function(t,n,r){return Array.prototype.slice.call(r,t,n)})))(1,1/0)));function rt(){if(0===arguments.length)throw new Error("pipe requires at least one argument");return f(arguments[0].length,z(Y,arguments[0],nt(arguments)))}var et=c((function(t){return m(t)?t.split("").reverse().join(""):Array.prototype.slice.call(t,0).reverse()}));function ut(){if(0===arguments.length)throw new Error("compose requires at least one argument");return rt.apply(this,et(arguments))}var at=B(0);function it(t){return t}var ct=c(it);function ot(t){for(var n,r=[];!(n=t.next()).done;)r.push(n.value);return r}function st(t,n,r){for(var e=0,u=r.length;e<u;){if(t(n,r[e]))return!0;e+=1}return!1}var ft="function"==typeof Object.is?Object.is:function(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n};function lt(t,n,r,e){var u=ot(t);function a(t,n){return pt(t,n,r.slice(),e.slice())}return!st((function(t,n){return!st(a,n,t)}),ot(n),u)}function pt(t,n,r,e){if(ft(t,n))return!0;var u,a,i=W(t);if(i!==W(n))return!1;if("function"==typeof t["fantasy-land/equals"]||"function"==typeof n["fantasy-land/equals"])return"function"==typeof t["fantasy-land/equals"]&&t["fantasy-land/equals"](n)&&"function"==typeof n["fantasy-land/equals"]&&n["fantasy-land/equals"](t);if("function"==typeof t.equals||"function"==typeof n.equals)return"function"==typeof t.equals&&t.equals(n)&&"function"==typeof n.equals&&n.equals(t);switch(i){case"Arguments":case"Array":case"Object":if("function"==typeof t.constructor&&"Promise"===(u=t.constructor,null==(a=String(u).match(/^function (\w*)/))?"":a[1]))return t===n;break;case"Boolean":case"Number":case"String":if(typeof t!=typeof n||!ft(t.valueOf(),n.valueOf()))return!1;break;case"Date":if(!ft(t.valueOf(),n.valueOf()))return!1;break;case"Error":return t.name===n.name&&t.message===n.message;case"RegExp":if(t.source!==n.source||t.global!==n.global||t.ignoreCase!==n.ignoreCase||t.multiline!==n.multiline||t.sticky!==n.sticky||t.unicode!==n.unicode)return!1}for(var c=r.length-1;c>=0;){if(r[c]===t)return e[c]===n;c-=1}switch(i){case"Map":return t.size===n.size&&lt(t.entries(),n.entries(),r.concat([t]),e.concat([n]));case"Set":return t.size===n.size&&lt(t.values(),n.values(),r.concat([t]),e.concat([n]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var o=D(t);if(o.length!==D(n).length)return!1;var s=r.concat([t]),f=e.concat([n]);for(c=o.length-1;c>=0;){var l=o[c];if(!x(l,n)||!pt(n[l],t[l],s,f))return!1;c-=1}return!0}var yt=o((function(t,n){return pt(t,n,[],[])}));function ht(t,n){return function(t,n,r){var e,u;if("function"==typeof t.indexOf)switch(typeof n){case"number":if(0===n){for(e=1/n;r<t.length;){if(0===(u=t[r])&&1/u===e)return r;r+=1}return-1}if(n!=n){for(;r<t.length;){if("number"==typeof(u=t[r])&&u!=u)return r;r+=1}return-1}return t.indexOf(n,r);case"string":case"boolean":case"function":case"undefined":return t.indexOf(n,r);case"object":if(null===n)return t.indexOf(n,r)}for(;r<t.length;){if(yt(t[r],n))return r;r+=1}return-1}(n,t,0)>=0}function gt(t){return"[object Object]"===Object.prototype.toString.call(t)}var vt=function(){function t(t,n){this.xf=n,this.f=t}return t.prototype["@@transducer/init"]=v,t.prototype["@@transducer/result"]=d,t.prototype["@@transducer/step"]=function(t,n){return this.f(n)?this.xf["@@transducer/step"](t,n):t},t}(),dt=o(g(["fantasy-land/filter","filter"],o((function(t,n){return new vt(t,n)})),(function(t,n){return gt(n)?_((function(r,e){return t(n[e])&&(r[e]=n[e]),r}),{},D(n)):function(t,n){for(var r=0,e=n.length,u=[];r<e;)t(n[r])&&(u[u.length]=n[r]),r+=1;return u}(t,n)}))),mt=o((function(t,n){return dt((r=t,function(){return!r.apply(this,arguments)}),n);var r})),bt=o((function(t,n){return null==n||n!=n?t:n})),At=function(){function t(){this._nativeSet="function"==typeof Set?new Set:null,this._items={}}return t.prototype.add=function(t){return!jt(t,!0,this)},t.prototype.has=function(t){return jt(t,!1,this)},t}();function jt(t,n,r){var e,u=typeof t;switch(u){case"string":case"number":return 0===t&&1/t==-1/0?!!r._items["-0"]||(n&&(r._items["-0"]=!0),!1):null!==r._nativeSet?n?(e=r._nativeSet.size,r._nativeSet.add(t),r._nativeSet.size===e):r._nativeSet.has(t):u in r._items?t in r._items[u]||(n&&(r._items[u][t]=!0),!1):(n&&(r._items[u]={},r._items[u][t]=!0),!1);case"boolean":if(u in r._items){var a=t?1:0;return!!r._items[u][a]||(n&&(r._items[u][a]=!0),!1)}return n&&(r._items[u]=t?[!1,!0]:[!0,!1]),!1;case"function":return null!==r._nativeSet?n?(e=r._nativeSet.size,r._nativeSet.add(t),r._nativeSet.size===e):r._nativeSet.has(t):u in r._items?!!ht(t,r._items[u])||(n&&r._items[u].push(t),!1):(n&&(r._items[u]=[t]),!1);case"undefined":return!!r._items[u]||(n&&(r._items[u]=!0),!1);case"object":if(null===t)return!!r._items.null||(n&&(r._items.null=!0),!1);default:return(u=Object.prototype.toString.call(t))in r._items?!!ht(t,r._items[u])||(n&&r._items[u].push(t),!1):(n&&(r._items[u]=[t]),!1)}}var Ot=y((function(t,n,r){var e=Array.prototype.slice.call(r,0);return e.splice(t,n),e}));var St=o((function t(n,r){if(null==r)return r;switch(n.length){case 0:return r;case 1:return function(t,n){if(null==n)return n;if($(t)&&h(n))return Ot(t,1,n);var r={};for(var e in n)r[e]=n[e];return delete r[t],r}(n[0],r);default:var e=n[0],u=Array.prototype.slice.call(n,1);return null==r[e]?function(t,n){if($(t)&&h(n))return[].concat(n);var r={};for(var e in n)r[e]=n[e];return r}(e,r):Z(e,t(u,r[e]),r)}})),wt=o((function(t,n){return t||n})),_t=o((function(t,n){return L(t)?function(){return t.apply(this,arguments)||n.apply(this,arguments)}:K(wt)(t,n)}));var Nt=c((function(t){return null!=t&&"function"==typeof t["fantasy-land/empty"]?t["fantasy-land/empty"]():null!=t&&null!=t.constructor&&"function"==typeof t.constructor["fantasy-land/empty"]?t.constructor["fantasy-land/empty"]():null!=t&&"function"==typeof t.empty?t.empty():null!=t&&null!=t.constructor&&"function"==typeof t.constructor.empty?t.constructor.empty():h(t)?[]:m(t)?"":gt(t)?{}:E(t)?function(){return arguments}():function(t){var n=Object.prototype.toString.call(t);return"[object Uint8ClampedArray]"===n||"[object Int8Array]"===n||"[object Uint8Array]"===n||"[object Int16Array]"===n||"[object Uint16Array]"===n||"[object Int32Array]"===n||"[object Uint32Array]"===n||"[object Float32Array]"===n||"[object Float64Array]"===n||"[object BigInt64Array]"===n||"[object BigUint64Array]"===n}(t)?t.constructor.from(""):void 0})),kt=o(tt("forEach",(function(t,n){for(var r=n.length,e=0;e<r;)t(n[e]),e+=1;return n}))),xt=o((function(t,n){return t>n})),Ft=function(){function t(t,n){this.xf=n,this.f=t,this.set=new At}return t.prototype["@@transducer/init"]=v,t.prototype["@@transducer/result"]=d,t.prototype["@@transducer/step"]=function(t,n){return this.set.add(this.f(n))?this.xf["@@transducer/step"](t,n):t},t}(),Et=o(g([],o((function(t,n){return new Ft(t,n)})),(function(t,n){for(var r,e,u=new At,a=[],i=0;i<n.length;)r=t(e=n[i]),u.add(r)&&a.push(e),i+=1;return a})))(ct),Ut=c((function(t){return null!=t&&yt(t,Nt(t))}));var qt=c((function(t){return null!=t&&(n=t.length,"[object Number]"===Object.prototype.toString.call(n))?t.length:NaN;var n})),It=o((function(t,n){return t.map((function(t){for(var r,e=n,u=0;u<t.length;){if(null==e)return;r=t[u],e=$(r)?B(r,e):e[r],u+=1}return e}))})),Pt=o((function(t,n){return It([t],n)[0]})),Dt=o((function(t,n){return t<n})),Vt=y((function(t,n,r){var e,u={};for(e in n)x(e,n)&&(u[e]=x(e,r)?t(e,n[e],r[e]):n[e]);for(e in r)x(e,r)&&!x(e,u)&&(u[e]=r[e]);return u})),$t=y((function t(n,r,e){return Vt((function(r,e,u){return gt(e)&&gt(u)?t(n,e,u):n(r,e,u)}),r,e)})),Bt=o((function(t,n){return $t((function(t,n,r){return r}),t,n)})),Tt=y((function(t,n,r){return bt(t,Pt(n,r))})),zt=o((function(t,n){return s([t],n)})),Ct=y((function(t,n,r){return yt(n,T(t,r))})),Rt=y((function(t,n,r){return bt(t,T(n,r))}));const Ht=ut(_t(H,Ut)),Jt=t=>Ht(t)?[]:t instanceof Array?t:String(t).includes(".")?String(t).split("."):[t],Zt=t=>Jt(t).join("."),Lt=(r={})=>{const[,u]=t(0),{initialEventName:a="onChange",initialDestroyEventName:i="onDestroy",initialDestroyOnUnmount:c=!0,initialValueName:o="value",initialValueKey:s="detail"}=r,f=e({}),l=e({}),p=e([]),y=e({}),h=e([]),g=n((t=>Pt(Jt(t),l.current)),[]),v=n((()=>l.current),[]),d=n(((t,n)=>{const r=((t,n)=>Ht(n)?isNaN(Number(Jt(t)[0]))?{}:[]:n)(t,l.current);l.current=J(Jt(t),n,r),u((new Date).getTime())}),[]),m=n((t=>{l.current=Bt(l.current,t),u((new Date).getTime())}),[]),b=n((()=>{l.current=Q(f.current),u((new Date).getTime())}),[]),A=n((t=>Tt([],Jt(t),y.current)),[]),j=n(((t,n)=>{y.current=J(Jt(t),n,y.current)}),[]),O=n((()=>p.current),[]),S=n((t=>{p.current.push(Zt(t))}),[]),w=n((()=>h.current),[]),_=n((()=>{h.current=[]}),[]),N=n((t=>ut(Rt("","message"),at,dt(Ct("key",Zt(t))))(h.current)),[]),k=n(((t,n,r)=>{const e=Zt(t);h.current=ut(Et,zt({key:e,type:n,message:r}))(h.current)}),[]),x=n(((t,n)=>{const r=Zt(t);h.current=mt(M(Ct("key",r),Ct("type",n)),h.current)}),[]),F=n(((t,n)=>{const r=A(t);Ht(r)||kt((r=>{const e=T("type",r),u=T("message",r);switch(e){case"required":Ht(n)?k(t,e,bt("该字段为必填项",u)):x(t,e);break;case"lt":!Ht(n)&&Number(n)<Number(r.value)?k(t,e,bt(`该字段不能大于${r.value}`,u)):x(t,e);break;case"lte":!Ht(n)&&Number(n)<=Number(r.value)?k(t,e,bt(`该字段不能大于等于${r.value}`,u)):x(t,e);break;case"gt":!Ht(n)&&Number(n)>Number(r.value)?k(t,e,bt(`该字段不能小于${r.value}`,u)):x(t,e);break;case"gte":!Ht(n)&&Number(n)>=Number(r.value)?k(t,e,bt(`该字段不能小于等于${r.value}`,u)):x(t,e);break;case"minLength":!Ht(n)&&Dt(qt(String(n)),Number(r.value))?k(t,e,bt(`该字段不能小于${r.value}位`,u)):x(t,e);break;case"maxLength":!Ht(n)&&xt(qt(String(n)),Number(r.value))?k(t,e,bt(`该字段不能大于${r.value}位`,u)):x(t,e);break;case"integer":Ht(n)||/^(-?\d*)$/.test(String(n))?x(t,e):k(t,e,bt("该字段为整数",u));break;case"decimals":Ht(n)||/^(-?\d*)([.]?\d{1,2})?$/.test(String(n))?x(t,e):k(t,e,bt("该字段为整数或小数(保留小数点后两位)",u));break;case"phone":Ht(n)||/^[01]\d{10}$/.test(String(n))?x(t,e):k(t,e,bt("电话号码不正确",u));break;case"vin":Ht(n)||/^[A-HJ-NPR-Z\d]{17}$/.test(String(n))?x(t,e):k(t,e,bt("车架号码不正确",u));break;case"licensePlate":Ht(n)||/^[京津沪渝冀晋辽吉黑苏浙皖川闽赣鲁豫鄂湘粤琼黔滇陕甘青台蒙桂藏宁新领使临][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]$/.test(String(n))?x(t,e):k(t,e,bt("车牌号码不正确",u));break;case"pattern":Ht(n)||void 0===r.pattern||r.pattern.test(String(n))?x(t,e):k(t,e,bt("验证不通过",u));break;case"trim":Ht(null==n?void 0:n.trim())?k(t,e,bt("字段不能为空格",u)):x(t,e)}}),r)}),[A,x,k]),E=n((()=>{_(),V((t=>{F(t,g(t))}),O())}),[_,O,g,F]),U=n((()=>(E(),new Promise(((t,n)=>{const r=w();Ht(r)?t(v()):n(r)})))),[w,v,E]),q=n(((t,n=c)=>{n&&(l.current=St(Jt(t),l.current)),p.current=mt(yt(Zt(t)),p.current),y.current=St(Jt(t),y.current),f.current=Bt(bt({},f.current),St(Jt(t))),u((new Date).getTime())}),[]),I=n(((t,n={})=>{const{eventName:r=a,destroyEventName:e=i,destroyOnUnmount:u=c,valueName:p=o,valueKey:y=s,initialValue:h,placeholder:v,rules:m=[],interceptChange:b,interceptValue:A}=n,O=bt(null,h);void 0===g(t)&&(S(t),j(t,m),d(t,O),f.current=Bt(bt({},f.current),J(Jt(t),O)));return{[p]:bt(v,g(t)),[r]:n=>{if(!("function"!=typeof b||b(l.current)))return;const r=Ht(Jt(y))?n:Pt(Jt(y),n),e="function"==typeof A?A(r):r;"onBlur"!==a&&F(t,e),d(t,e)},[e]:()=>q(t,u)}}),[g,i,c,a,s,o,S,j,d,q,F]);return{getFieldError:N,getFieldValues:v,getFieldValue:g,registerField:I,resetFieldValues:b,setFieldValues:m,setFieldValue:d,unregisterField:q,validate:U}},Gt=t=>{const n=e();return r((()=>{n.current=t})),n.current},Kt=n=>{const r=e(null),[u,a]=t(n);return r.current=t=>new Promise((n=>{a(t),n("function"==typeof t?t(u):t)})),[u,r.current]},Mt=(t={})=>{const{initialState:r=!1,initialValue:e,beforeOn:u=(()=>!0),beforeOff:a=(()=>!0),afterOn:i=(()=>{}),afterOff:c=(()=>{})}=t,[o,s]=Kt(r),[f,l]=Kt(e),p=n((()=>{u()&&s(!0).then(i)}),[i,u,s]),y=n((t=>{yt(t,e)?p():l(bt(e,t)).then(p)}),[p,e,l]),h=n((()=>{a()&&s(!1).then((()=>{l(void 0).then(c)}))}),[c,a,l,s]),g=n((t=>{o?h():y(t)}),[o,y,h]);return{state:o,value:f,handleOn:y,handleOff:h,handleToggle:g}};export{u as useBoolean,a as useDebounce,Lt as useForm,Gt as usePrevious,Kt as useStatePromise,Mt as useToggle};
//# sourceMappingURL=index.esm.js.map
