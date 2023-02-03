import{useState as t,useRef as n,useCallback as e}from"react";function r(t){return null!=t&&"object"==typeof t&&!0===t["@@functional/placeholder"]}function u(t){return function n(e){return 0===arguments.length||r(e)?n:t.apply(this,arguments)}}function a(t){return function n(e,a){switch(arguments.length){case 0:return n;case 1:return r(e)?n:u((function(n){return t(e,n)}));default:return r(e)&&r(a)?n:r(e)?u((function(n){return t(n,a)})):r(a)?u((function(n){return t(e,n)})):t(e,a)}}}function i(t,n){var e;n=n||[];var r=(t=t||[]).length,u=n.length,a=[];for(e=0;e<r;)a[a.length]=t[e],e+=1;for(e=0;e<u;)a[a.length]=n[e],e+=1;return a}function c(t,n){switch(t){case 0:return function(){return n.apply(this,arguments)};case 1:return function(t){return n.apply(this,arguments)};case 2:return function(t,e){return n.apply(this,arguments)};case 3:return function(t,e,r){return n.apply(this,arguments)};case 4:return function(t,e,r,u){return n.apply(this,arguments)};case 5:return function(t,e,r,u,a){return n.apply(this,arguments)};case 6:return function(t,e,r,u,a,i){return n.apply(this,arguments)};case 7:return function(t,e,r,u,a,i,c){return n.apply(this,arguments)};case 8:return function(t,e,r,u,a,i,c,o){return n.apply(this,arguments)};case 9:return function(t,e,r,u,a,i,c,o,s){return n.apply(this,arguments)};case 10:return function(t,e,r,u,a,i,c,o,s,f){return n.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}function o(t,n,e){return function(){for(var u=[],a=0,i=t,s=0;s<n.length||a<arguments.length;){var f;s<n.length&&(!r(n[s])||a>=arguments.length)?f=n[s]:(f=arguments[a],a+=1),u[s]=f,r(f)||(i-=1),s+=1}return i<=0?e.apply(this,u):c(i,o(t,u,e))}}var s=a((function(t,n){return 1===t?u(n):c(t,o(t,[],n))}));function f(t){return function n(e,i,c){switch(arguments.length){case 0:return n;case 1:return r(e)?n:a((function(n,r){return t(e,n,r)}));case 2:return r(e)&&r(i)?n:r(e)?a((function(n,e){return t(n,i,e)})):r(i)?a((function(n,r){return t(e,n,r)})):u((function(n){return t(e,i,n)}));default:return r(e)&&r(i)&&r(c)?n:r(e)&&r(i)?a((function(n,e){return t(n,e,c)})):r(e)&&r(c)?a((function(n,e){return t(n,i,e)})):r(i)&&r(c)?a((function(n,r){return t(e,n,r)})):r(e)?u((function(n){return t(n,i,c)})):r(i)?u((function(n){return t(e,n,c)})):r(c)?u((function(n){return t(e,i,n)})):t(e,i,c)}}}var l=Array.isArray||function(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)};function p(t){return null!=t&&"function"==typeof t["@@transducer/step"]}function y(t,n,e){return function(){if(0===arguments.length)return e();var r=arguments[arguments.length-1];if(!l(r)){for(var u=0;u<t.length;){if("function"==typeof r[t[u]])return r[t[u]].apply(r,Array.prototype.slice.call(arguments,0,-1));u+=1}if(p(r)){var a=n.apply(null,Array.prototype.slice.call(arguments,0,-1));return a(r)}}return e.apply(this,arguments)}}var h=function(){return this.xf["@@transducer/init"]()},g=function(t){return this.xf["@@transducer/result"](t)};function d(t){return"[object String]"===Object.prototype.toString.call(t)}var v=u((function(t){return!!l(t)||!!t&&("object"==typeof t&&(!d(t)&&(0===t.length||t.length>0&&(t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1)))))})),b=function(){function t(t){this.f=t}return t.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},t.prototype["@@transducer/result"]=function(t){return t},t.prototype["@@transducer/step"]=function(t,n){return this.f(t,n)},t}();var m=a((function(t,n){return c(t.length,(function(){return t.apply(n,arguments)}))}));function A(t,n,e){for(var r=e.next();!r.done;){if((n=t["@@transducer/step"](n,r.value))&&n["@@transducer/reduced"]){n=n["@@transducer/value"];break}r=e.next()}return t["@@transducer/result"](n)}function j(t,n,e,r){return t["@@transducer/result"](e[r](m(t["@@transducer/step"],t),n))}var S="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";function w(t,n,e){if("function"==typeof t&&(t=function(t){return new b(t)}(t)),v(e))return function(t,n,e){for(var r=0,u=e.length;r<u;){if((n=t["@@transducer/step"](n,e[r]))&&n["@@transducer/reduced"]){n=n["@@transducer/value"];break}r+=1}return t["@@transducer/result"](n)}(t,n,e);if("function"==typeof e["fantasy-land/reduce"])return j(t,n,e,"fantasy-land/reduce");if(null!=e[S])return A(t,n,e[S]());if("function"==typeof e.next)return A(t,n,e);if("function"==typeof e.reduce)return j(t,n,e,"reduce");throw new TypeError("reduce: list must be array or iterable")}var O=function(){function t(t,n){this.xf=n,this.f=t}return t.prototype["@@transducer/init"]=h,t.prototype["@@transducer/result"]=g,t.prototype["@@transducer/step"]=function(t,n){return this.xf["@@transducer/step"](t,this.f(n))},t}(),_=a((function(t,n){return new O(t,n)}));function N(t,n){return Object.prototype.hasOwnProperty.call(n,t)}var k=Object.prototype.toString,x=function(){return"[object Arguments]"===k.call(arguments)?function(t){return"[object Arguments]"===k.call(t)}:function(t){return N("callee",t)}}(),F=!{toString:null}.propertyIsEnumerable("toString"),E=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],q=function(){return arguments.propertyIsEnumerable("length")}(),I=function(t,n){for(var e=0;e<t.length;){if(t[e]===n)return!0;e+=1}return!1},P="function"!=typeof Object.keys||q?u((function(t){if(Object(t)!==t)return[];var n,e,r=[],u=q&&x(t);for(n in t)!N(n,t)||u&&"length"===n||(r[r.length]=n);if(F)for(e=E.length-1;e>=0;)N(n=E[e],t)&&!I(r,n)&&(r[r.length]=n),e-=1;return r})):u((function(t){return Object(t)!==t?[]:Object.keys(t)})),U=a(y(["fantasy-land/map","map"],_,(function(t,n){switch(Object.prototype.toString.call(n)){case"[object Function]":return s(n.length,(function(){return t.call(this,n.apply(this,arguments))}));case"[object Object]":return w((function(e,r){return e[r]=t(n[r]),e}),{},P(n));default:return function(t,n){for(var e=0,r=n.length,u=Array(r);e<r;)u[e]=t(n[e]),e+=1;return u}(t,n)}}))),$=Number.isInteger||function(t){return t<<0===t},V=a((function(t,n){var e=t<0?n.length+t:t;return d(n)?n.charAt(e):n[e]})),z=a((function(t,n){if(null!=n)return $(t)?V(t,n):n[t]})),B=f(w),C=a((function(t,n){return t&&n})),D=a((function(t,n){return"function"==typeof n["fantasy-land/ap"]?n["fantasy-land/ap"](t):"function"==typeof t.ap?t.ap(n):"function"==typeof t?function(e){return t(e)(n(e))}:w((function(t,e){return i(t,U(e,n))}),[],t)}));var H=u((function(t){return null==t})),R=f((function t(n,e,r){if(0===n.length)return e;var u=n[0];if(n.length>1){var a=!H(r)&&N(u,r)?r[u]:$(n[1])?[]:{};e=t(Array.prototype.slice.call(n,1),e,a)}return function(t,n,e){if($(t)&&l(e)){var r=[].concat(e);return r[t]=n,r}var u={};for(var a in e)u[a]=e[a];return u[t]=n,u}(u,e,r)}));function T(t){var n=Object.prototype.toString.call(t);return"[object Function]"===n||"[object AsyncFunction]"===n||"[object GeneratorFunction]"===n||"[object AsyncGeneratorFunction]"===n}var J=a((function(t,n){var e=s(t,n);return s(t,(function(){return w(D,U(e,arguments[0]),Array.prototype.slice.call(arguments,1))}))})),Z=u((function(t){return J(t.length,t)})),L=a((function(t,n){return T(t)?function(){return t.apply(this,arguments)&&n.apply(this,arguments)}:Z(C)(t,n)}));var G=u((function(t){return null===t?"Null":void 0===t?"Undefined":Object.prototype.toString.call(t).slice(8,-1)}));function K(t,n,e,r){var u,a=function(u){for(var a=n.length,i=0;i<a;){if(t===n[i])return e[i];i+=1}for(var c in n[i]=t,e[i]=u,t)t.hasOwnProperty(c)&&(u[c]=r?K(t[c],n,e,!0):t[c]);return u};switch(G(t)){case"Object":return a(Object.create(Object.getPrototypeOf(t)));case"Array":return a([]);case"Date":return new Date(t.valueOf());case"RegExp":return u=t,new RegExp(u.source,(u.global?"g":"")+(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.sticky?"y":"")+(u.unicode?"u":""));case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":return t.slice();default:return t}}var M=u((function(t){return null!=t&&"function"==typeof t.clone?t.clone():K(t,[],[],!0)}));function W(t,n){return function(){return n.call(this,t.apply(this,arguments))}}function X(t,n){return function(){var e=arguments.length;if(0===e)return n();var r=arguments[e-1];return l(r)||"function"!=typeof r[t]?n.apply(this,arguments):r[t].apply(r,Array.prototype.slice.call(arguments,0,e-1))}}var Q=u(X("tail",f(X("slice",(function(t,n,e){return Array.prototype.slice.call(e,t,n)})))(1,1/0)));function Y(){if(0===arguments.length)throw new Error("pipe requires at least one argument");return c(arguments[0].length,B(W,arguments[0],Q(arguments)))}var tt=u((function(t){return d(t)?t.split("").reverse().join(""):Array.prototype.slice.call(t,0).reverse()}));function nt(){if(0===arguments.length)throw new Error("compose requires at least one argument");return Y.apply(this,tt(arguments))}var et=V(0);function rt(t){return t}var ut=u(rt);function at(t){for(var n,e=[];!(n=t.next()).done;)e.push(n.value);return e}function it(t,n,e){for(var r=0,u=e.length;r<u;){if(t(n,e[r]))return!0;r+=1}return!1}var ct="function"==typeof Object.is?Object.is:function(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n};function ot(t,n,e,r){var u=at(t);function a(t,n){return st(t,n,e.slice(),r.slice())}return!it((function(t,n){return!it(a,n,t)}),at(n),u)}function st(t,n,e,r){if(ct(t,n))return!0;var u,a,i=G(t);if(i!==G(n))return!1;if("function"==typeof t["fantasy-land/equals"]||"function"==typeof n["fantasy-land/equals"])return"function"==typeof t["fantasy-land/equals"]&&t["fantasy-land/equals"](n)&&"function"==typeof n["fantasy-land/equals"]&&n["fantasy-land/equals"](t);if("function"==typeof t.equals||"function"==typeof n.equals)return"function"==typeof t.equals&&t.equals(n)&&"function"==typeof n.equals&&n.equals(t);switch(i){case"Arguments":case"Array":case"Object":if("function"==typeof t.constructor&&"Promise"===(u=t.constructor,null==(a=String(u).match(/^function (\w*)/))?"":a[1]))return t===n;break;case"Boolean":case"Number":case"String":if(typeof t!=typeof n||!ct(t.valueOf(),n.valueOf()))return!1;break;case"Date":if(!ct(t.valueOf(),n.valueOf()))return!1;break;case"Error":return t.name===n.name&&t.message===n.message;case"RegExp":if(t.source!==n.source||t.global!==n.global||t.ignoreCase!==n.ignoreCase||t.multiline!==n.multiline||t.sticky!==n.sticky||t.unicode!==n.unicode)return!1}for(var c=e.length-1;c>=0;){if(e[c]===t)return r[c]===n;c-=1}switch(i){case"Map":return t.size===n.size&&ot(t.entries(),n.entries(),e.concat([t]),r.concat([n]));case"Set":return t.size===n.size&&ot(t.values(),n.values(),e.concat([t]),r.concat([n]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var o=P(t);if(o.length!==P(n).length)return!1;var s=e.concat([t]),f=r.concat([n]);for(c=o.length-1;c>=0;){var l=o[c];if(!N(l,n)||!st(n[l],t[l],s,f))return!1;c-=1}return!0}var ft=a((function(t,n){return st(t,n,[],[])}));function lt(t,n){return function(t,n,e){var r,u;if("function"==typeof t.indexOf)switch(typeof n){case"number":if(0===n){for(r=1/n;e<t.length;){if(0===(u=t[e])&&1/u===r)return e;e+=1}return-1}if(n!=n){for(;e<t.length;){if("number"==typeof(u=t[e])&&u!=u)return e;e+=1}return-1}return t.indexOf(n,e);case"string":case"boolean":case"function":case"undefined":return t.indexOf(n,e);case"object":if(null===n)return t.indexOf(n,e)}for(;e<t.length;){if(ft(t[e],n))return e;e+=1}return-1}(n,t,0)>=0}function pt(t){return"[object Object]"===Object.prototype.toString.call(t)}var yt=function(){function t(t,n){this.xf=n,this.f=t}return t.prototype["@@transducer/init"]=h,t.prototype["@@transducer/result"]=g,t.prototype["@@transducer/step"]=function(t,n){return this.f(n)?this.xf["@@transducer/step"](t,n):t},t}(),ht=a(y(["fantasy-land/filter","filter"],a((function(t,n){return new yt(t,n)})),(function(t,n){return pt(n)?w((function(e,r){return t(n[r])&&(e[r]=n[r]),e}),{},P(n)):function(t,n){for(var e=0,r=n.length,u=[];e<r;)t(n[e])&&(u[u.length]=n[e]),e+=1;return u}(t,n)}))),gt=a((function(t,n){return ht((e=t,function(){return!e.apply(this,arguments)}),n);var e})),dt=a((function(t,n){return null==n||n!=n?t:n})),vt=function(){function t(){this._nativeSet="function"==typeof Set?new Set:null,this._items={}}return t.prototype.add=function(t){return!bt(t,!0,this)},t.prototype.has=function(t){return bt(t,!1,this)},t}();function bt(t,n,e){var r,u=typeof t;switch(u){case"string":case"number":return 0===t&&1/t==-1/0?!!e._items["-0"]||(n&&(e._items["-0"]=!0),!1):null!==e._nativeSet?n?(r=e._nativeSet.size,e._nativeSet.add(t),e._nativeSet.size===r):e._nativeSet.has(t):u in e._items?t in e._items[u]||(n&&(e._items[u][t]=!0),!1):(n&&(e._items[u]={},e._items[u][t]=!0),!1);case"boolean":if(u in e._items){var a=t?1:0;return!!e._items[u][a]||(n&&(e._items[u][a]=!0),!1)}return n&&(e._items[u]=t?[!1,!0]:[!0,!1]),!1;case"function":return null!==e._nativeSet?n?(r=e._nativeSet.size,e._nativeSet.add(t),e._nativeSet.size===r):e._nativeSet.has(t):u in e._items?!!lt(t,e._items[u])||(n&&e._items[u].push(t),!1):(n&&(e._items[u]=[t]),!1);case"undefined":return!!e._items[u]||(n&&(e._items[u]=!0),!1);case"object":if(null===t)return!!e._items.null||(n&&(e._items.null=!0),!1);default:return(u=Object.prototype.toString.call(t))in e._items?!!lt(t,e._items[u])||(n&&e._items[u].push(t),!1):(n&&(e._items[u]=[t]),!1)}}var mt=a((function(t,n){return t||n})),At=a((function(t,n){return T(t)?function(){return t.apply(this,arguments)||n.apply(this,arguments)}:Z(mt)(t,n)}));var jt=u((function(t){return null!=t&&"function"==typeof t["fantasy-land/empty"]?t["fantasy-land/empty"]():null!=t&&null!=t.constructor&&"function"==typeof t.constructor["fantasy-land/empty"]?t.constructor["fantasy-land/empty"]():null!=t&&"function"==typeof t.empty?t.empty():null!=t&&null!=t.constructor&&"function"==typeof t.constructor.empty?t.constructor.empty():l(t)?[]:d(t)?"":pt(t)?{}:x(t)?function(){return arguments}():function(t){var n=Object.prototype.toString.call(t);return"[object Uint8ClampedArray]"===n||"[object Int8Array]"===n||"[object Uint8Array]"===n||"[object Int16Array]"===n||"[object Uint16Array]"===n||"[object Int32Array]"===n||"[object Uint32Array]"===n||"[object Float32Array]"===n||"[object Float64Array]"===n||"[object BigInt64Array]"===n||"[object BigUint64Array]"===n}(t)?t.constructor.from(""):void 0})),St=a(X("forEach",(function(t,n){for(var e=n.length,r=0;r<e;)t(n[r]),r+=1;return n}))),wt=a((function(t,n){return t>n})),Ot=function(){function t(t,n){this.xf=n,this.f=t,this.set=new vt}return t.prototype["@@transducer/init"]=h,t.prototype["@@transducer/result"]=g,t.prototype["@@transducer/step"]=function(t,n){return this.set.add(this.f(n))?this.xf["@@transducer/step"](t,n):t},t}(),_t=a(y([],a((function(t,n){return new Ot(t,n)})),(function(t,n){for(var e,r,u=new vt,a=[],i=0;i<n.length;)e=t(r=n[i]),u.add(e)&&a.push(r),i+=1;return a})))(ut),Nt=u((function(t){return null!=t&&ft(t,jt(t))}));var kt=u((function(t){return null!=t&&(n=t.length,"[object Number]"===Object.prototype.toString.call(n))?t.length:NaN;var n})),xt=a((function(t,n){return t.map((function(t){for(var e,r=n,u=0;u<t.length;){if(null==r)return;e=t[u],r=$(e)?V(e,r):r[e],u+=1}return r}))})),Ft=a((function(t,n){return xt([t],n)[0]})),Et=a((function(t,n){return t<n})),qt=f((function(t,n,e){var r,u={};for(r in n)N(r,n)&&(u[r]=N(r,e)?t(r,n[r],e[r]):n[r]);for(r in e)N(r,e)&&!N(r,u)&&(u[r]=e[r]);return u})),It=f((function t(n,e,r){return qt((function(e,r,u){return pt(r)&&pt(u)?t(n,r,u):n(e,r,u)}),e,r)})),Pt=a((function(t,n){return It((function(t,n,e){return e}),t,n)})),Ut=f((function(t,n,e){return dt(t,Ft(n,e))})),$t=a((function(t,n){return i([t],n)})),Vt=f((function(t,n,e){return ft(n,z(t,e))})),zt=f((function(t,n,e){return dt(t,z(n,e))}));const Bt=nt(At(H,Nt)),Ct=(r={})=>{const[,u]=t(0),{initialEventName:a="",initialValueName:i="",initialValueKey:c=""}=r,o=n({}),s=n({}),f=n([]),l=n({}),p=n([]),y=e((t=>Bt(t)?[]:t instanceof Array?t:String(t).includes(".")?String(t).split("."):[t]),[]),h=e((t=>y(t).join(".")),[y]),g=e(((t,n)=>Bt(n)?isNaN(Number(y(t)[0]))?{}:[]:n),[y]),d=e((t=>Ft(y(t),s.current)),[y]),v=e((()=>s.current),[]),b=e(((t,n)=>{const e=g(t,s.current);s.current=R(y(t),n,e),u((new Date).getTime())}),[y,g]),m=e((t=>{s.current=Pt(s.current,t),u((new Date).getTime())}),[]),A=e((()=>{s.current=M(o.current),u((new Date).getTime())}),[]),j=e((t=>Ut([],y(t),l.current)),[y]),S=e(((t,n)=>{l.current=R(y(t),n,l.current)}),[y]),w=e((()=>f.current),[]),O=e((t=>{f.current.push(h(t))}),[h]),_=e((()=>p.current),[]),N=e((t=>nt(zt("","message"),et,ht(Vt("key",h(t))))(p.current)),[h]),k=e(((t,n,e)=>{const r=h(t);p.current=nt(_t,$t({key:r,type:n,message:e}))(p.current)}),[h]),x=e(((t,n)=>{const e=h(t);p.current=gt(L(Vt("key",e),Vt("type",n)),p.current)}),[h]),F=e(((t,n)=>{const e=j(t);Bt(e)||St((e=>{const r=z("type",e),u=z("message",e);switch(r){case"required":Bt(n)?k(t,r,dt("该字段为必填项",u)):x(t,r);break;case"lt":!Bt(n)&&Number(n)<Number(e.value)?k(t,r,dt(`该字段不能大于${e.value}`,u)):x(t,r);break;case"lte":!Bt(n)&&Number(n)<=Number(e.value)?k(t,r,dt(`该字段不能大于等于${e.value}`,u)):x(t,r);break;case"gt":!Bt(n)&&Number(n)>Number(e.value)?k(t,r,dt(`该字段不能小于${e.value}`,u)):x(t,r);break;case"gte":!Bt(n)&&Number(n)>=Number(e.value)?k(t,r,dt(`该字段不能小于等于${e.value}`,u)):x(t,r);break;case"minLength":!Bt(n)&&Et(kt(String(n)),Number(e.value))?k(t,r,dt(`该字段不能小于${e.value}位`,u)):x(t,r);break;case"maxLength":!Bt(n)&&wt(kt(String(n)),Number(e.value))?k(t,r,dt(`该字段不能大于${e.value}位`,u)):x(t,r);break;case"integer":Bt(n)||/^(-?\d*)$/.test(String(n))?x(t,r):k(t,r,dt("该字段为整数",u));break;case"decimals":Bt(n)||/^(-?\d*)([.]?\d{1,2})?$/.test(String(n))?x(t,r):k(t,r,dt("该字段为整数或小数(保留小数点后两位)",u));break;case"phone":Bt(n)||/^[01]\d{10}$/.test(String(n))?x(t,r):k(t,r,dt("电话号码不正确",u));break;case"vin":Bt(n)||/^[A-HJ-NPR-Z\d]{17}$/.test(String(n))?x(t,r):k(t,r,dt("车架号码不正确",u));break;case"licensePlate":Bt(n)||/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]$/.test(String(n))?x(t,r):k(t,r,dt("车牌号码不正确",u));break;case"pattern":Bt(n)||void 0===e.pattern||e.pattern.test(String(n))?x(t,r):k(t,r,dt("验证不通过",u));break;case"trim":Bt(null==n?void 0:n.trim())?k(t,r,dt("字段不能为空格",u)):x(t,r)}}),e)}),[j,x,k]),E=e((()=>{U((t=>{F(t,d(t))}),w())}),[w,d,F]),q=e((()=>(E(),new Promise(((t,n)=>{const e=_();Bt(e)?t(v()):n(e)})))),[_,v,E]);return{validate:q,registerField:e(((t,n={})=>{const{eventName:e=dt("onChangeText",a),valueName:r=dt("value",i),valueKey:u=dt("detail",c),initialValue:f,placeholder:l,rules:p=[],interceptChange:h,interceptValue:g}=n,v=dt(null,f);void 0===d(t)&&(O(t),S(t,p),b(t,v),o.current=Pt(dt({},o.current),R(y(t),v)));return{[r]:dt(l,d(t)),[e]:n=>{if(!("function"!=typeof h||h(s.current)))return;const e=Bt(y(u))?n:Ft(y(u),n),r="function"==typeof g?g(e):e;"onBlur"!==a&&F(t,r),b(t,r)}}}),[y,d,a,c,i,O,S,b,F]),getFieldValue:d,getFieldsValue:v,setFieldValue:b,setFieldsValue:m,getFieldError:N,resetFields:A}},Dt=e=>{const r=n(),[u,a]=t(e);return r.current=t=>new Promise((n=>{a(t),n(t)})),[u,r.current]},Ht=(t={})=>{const{initialVisible:n=!1,initialValue:r,beforeShow:u=(()=>!0),beforeHide:a=(()=>!0),afterShow:i=(()=>{}),afterHide:c=(()=>{})}=t,[o,s]=Dt(n),[f,l]=Dt(r),p=e((()=>{u()&&s(!0).then(i)}),[i,u,s]);return{visible:o,value:f,handleShow:e((t=>{ft(t,r)?p():l(dt(r,t)).then(p)}),[p,r,l]),handleHide:e((()=>{a()&&s(!1).then((()=>{l(void 0).then(c)}))}),[c,a,r,l,s,f])}};export{Dt as useAsyncState,Ct as useForm,Ht as useVisible};
//# sourceMappingURL=index.esm.js.map