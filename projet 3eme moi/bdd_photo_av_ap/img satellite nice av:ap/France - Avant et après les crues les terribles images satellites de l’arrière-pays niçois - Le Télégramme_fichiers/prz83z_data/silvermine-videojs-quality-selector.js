/*! @silvermine/videojs-quality-selector 2021-05-13 v1.2.5 */

!function r(u,i,o){function c(t,n){if(!i[t]){if(!u[t]){var e="function"==typeof require&&require;if(!n&&e)return e(t,!0);if(a)return a(t,!0);throw(e=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",e}e=i[t]={exports:{}},u[t][0].call(e.exports,function(n){return c(u[t][1][n]||n)},e,e.exports,r,u,i,o)}return i[t].exports}for(var a="function"==typeof require&&require,n=0;n<o.length;n++)c(o[n]);return c}({1:[function(n,t,e){!function(){var i=!1,o=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/;this.Class=function(){},Class.extend=function(n){var u=this.prototype;i=!0;var t,e=new this;for(t in i=!1,n)e[t]="function"==typeof n[t]&&"function"==typeof u[t]&&o.test(n[t])?function(e,r){return function(){var n=this._super;this._super=u[e];var t=r.apply(this,arguments);return this._super=n,t}}(t,n[t]):n[t];function r(){!i&&this.init&&this.init.apply(this,arguments)}return((r.prototype=e).constructor=r).extend=arguments.callee,r},t.exports=Class}()},{}],2:[function(n,u,i){!function(Ft){!function(){var n,t,e,r;n=this,t=function(){var n="1.13.1",t="object"==typeof self&&self.self===self&&self||"object"==typeof Ft&&Ft.global===Ft&&Ft||Function("return this")()||{},r=Array.prototype,o=Object.prototype,s="undefined"!=typeof Symbol?Symbol.prototype:null,u=r.push,a=r.slice,p=o.toString,e=o.hasOwnProperty,i="undefined"!=typeof ArrayBuffer,c="undefined"!=typeof DataView,f=Array.isArray,l=Object.keys,h=Object.create,v=i&&ArrayBuffer.isView,d=isNaN,y=isFinite,g=!{toString:null}.propertyIsEnumerable("toString"),S=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],_=Math.pow(2,53)-1;function b(u,i){return i=null==i?u.length-1:+i,function(){for(var n=Math.max(arguments.length-i,0),t=Array(n),e=0;e<n;e++)t[e]=arguments[e+i];switch(i){case 0:return u.call(this,t);case 1:return u.call(this,arguments[0],t);case 2:return u.call(this,arguments[0],arguments[1],t)}for(var r=Array(i+1),e=0;e<i;e++)r[e]=arguments[e];return r[i]=t,u.apply(this,r)}}function m(n){var t=typeof n;return"function"==t||"object"==t&&!!n}function w(n){return void 0===n}function E(n){return!0===n||!1===n||"[object Boolean]"===p.call(n)}function x(n){var t="[object "+n+"]";return function(n){return p.call(n)===t}}var j=x("String"),A=x("Number"),T=x("Date"),k=x("RegExp"),C=x("Error"),O=x("Symbol"),I=x("ArrayBuffer"),q=x("Function"),M=t.document&&t.document.childNodes,D=q="function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof M?function(n){return"function"==typeof n||!1}:q,R=x("Object"),U=c&&R(new DataView(new ArrayBuffer(8))),N="undefined"!=typeof Map&&R(new Map),F=x("DataView");var P=U?function(n){return null!=n&&D(n.getInt8)&&I(n.buffer)}:F,Q=f||x("Array");function B(n,t){return null!=n&&e.call(n,t)}var L=x("Arguments");!function(){L(arguments)||(L=function(n){return B(n,"callee")})}();var W=L;function Y(n){return A(n)&&d(n)}function V(n){return function(){return n}}function z(t){return function(n){n=t(n);return"number"==typeof n&&0<=n&&n<=_}}function G(t){return function(n){return null==n?void 0:n[t]}}var H=G("byteLength"),$=z(H),K=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;var J=i?function(n){return v?v(n)&&!P(n):$(n)&&K.test(p.call(n))}:V(!1),X=G("length");function Z(n,t){t=function(t){for(var e={},n=t.length,r=0;r<n;++r)e[t[r]]=!0;return{contains:function(n){return e[n]},push:function(n){return e[n]=!0,t.push(n)}}}(t);var e=S.length,r=n.constructor,u=D(r)&&r.prototype||o,i="constructor";for(B(n,i)&&!t.contains(i)&&t.push(i);e--;)(i=S[e])in n&&n[i]!==u[i]&&!t.contains(i)&&t.push(i)}function nn(n){if(!m(n))return[];if(l)return l(n);var t,e=[];for(t in n)B(n,t)&&e.push(t);return g&&Z(n,e),e}function tn(n,t){var e=nn(t),r=e.length;if(null==n)return!r;for(var u=Object(n),i=0;i<r;i++){var o=e[i];if(t[o]!==u[o]||!(o in u))return!1}return!0}function en(n){return n instanceof en?n:this instanceof en?void(this._wrapped=n):new en(n)}function rn(n){return new Uint8Array(n.buffer||n,n.byteOffset||0,H(n))}en.VERSION=n,en.prototype.valueOf=en.prototype.toJSON=en.prototype.value=function(){return this._wrapped},en.prototype.toString=function(){return String(this._wrapped)};var un="[object DataView]";function on(n,t,e,r){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return!1;if(n!=n)return t!=t;var u=typeof n;return("function"==u||"object"==u||"object"==typeof t)&&function n(t,e,r,u){t instanceof en&&(t=t._wrapped);e instanceof en&&(e=e._wrapped);var i=p.call(t);if(i!==p.call(e))return!1;if(U&&"[object Object]"==i&&P(t)){if(!P(e))return!1;i=un}switch(i){case"[object RegExp]":case"[object String]":return""+t==""+e;case"[object Number]":return+t!=+t?+e!=+e:0==+t?1/+t==1/e:+t==+e;case"[object Date]":case"[object Boolean]":return+t==+e;case"[object Symbol]":return s.valueOf.call(t)===s.valueOf.call(e);case"[object ArrayBuffer]":case un:return n(rn(t),rn(e),r,u)}var o="[object Array]"===i;if(!o&&J(t)){var c=H(t);if(c!==H(e))return!1;if(t.buffer===e.buffer&&t.byteOffset===e.byteOffset)return!0;o=!0}if(!o){if("object"!=typeof t||"object"!=typeof e)return!1;var i=t.constructor,c=e.constructor;if(i!==c&&!(D(i)&&i instanceof i&&D(c)&&c instanceof c)&&"constructor"in t&&"constructor"in e)return!1}r=r||[];u=u||[];var a=r.length;for(;a--;)if(r[a]===t)return u[a]===e;r.push(t);u.push(e);if(o){if((a=t.length)!==e.length)return!1;for(;a--;)if(!on(t[a],e[a],r,u))return!1}else{var f,l=nn(t);if(a=l.length,nn(e).length!==a)return!1;for(;a--;)if(f=l[a],!B(e,f)||!on(t[f],e[f],r,u))return!1}r.pop();u.pop();return!0}(n,t,e,r)}function cn(n){if(!m(n))return[];var t,e=[];for(t in n)e.push(t);return g&&Z(n,e),e}function an(r){var u=X(r);return function(n){if(null==n)return!1;var t=cn(n);if(X(t))return!1;for(var e=0;e<u;e++)if(!D(n[r[e]]))return!1;return r!==hn||!D(n[fn])}}var fn="forEach",ln=["clear","delete"],sn=["get","has","set"],pn=ln.concat(fn,sn),hn=ln.concat(sn),vn=["add"].concat(ln,fn,"has"),dn=N?an(pn):x("Map"),yn=N?an(hn):x("WeakMap"),gn=N?an(vn):x("Set"),Sn=x("WeakSet");function _n(n){for(var t=nn(n),e=t.length,r=Array(e),u=0;u<e;u++)r[u]=n[t[u]];return r}function bn(n){for(var t={},e=nn(n),r=0,u=e.length;r<u;r++)t[n[e[r]]]=e[r];return t}function mn(n){var t,e=[];for(t in n)D(n[t])&&e.push(t);return e.sort()}function wn(a,f){return function(n){var t=arguments.length;if(f&&(n=Object(n)),t<2||null==n)return n;for(var e=1;e<t;e++)for(var r=arguments[e],u=a(r),i=u.length,o=0;o<i;o++){var c=u[o];f&&void 0!==n[c]||(n[c]=r[c])}return n}}var En=wn(cn),xn=wn(nn),jn=wn(cn,!0);function An(n){if(!m(n))return{};if(h)return h(n);var t=function(){};t.prototype=n;n=new t;return t.prototype=null,n}function Tn(n){return m(n)?Q(n)?n.slice():En({},n):n}function kn(n){return Q(n)?n:[n]}function Cn(n){return en.toPath(n)}function On(n,t){for(var e=t.length,r=0;r<e;r++){if(null==n)return;n=n[t[r]]}return e?n:void 0}function In(n,t,e){t=On(n,Cn(t));return w(t)?e:t}function qn(n){return n}function Mn(t){return t=xn({},t),function(n){return tn(n,t)}}function Dn(t){return t=Cn(t),function(n){return On(n,t)}}function Rn(u,i,n){if(void 0===i)return u;switch(null==n?3:n){case 1:return function(n){return u.call(i,n)};case 3:return function(n,t,e){return u.call(i,n,t,e)};case 4:return function(n,t,e,r){return u.call(i,n,t,e,r)}}return function(){return u.apply(i,arguments)}}function Un(n,t,e){return null==n?qn:D(n)?Rn(n,t,e):(m(n)&&!Q(n)?Mn:Dn)(n)}function Nn(n,t){return Un(n,t,1/0)}function Fn(n,t,e){return en.iteratee!==Nn?en.iteratee(n,t):Un(n,t,e)}function Pn(){}function Qn(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))}en.toPath=kn,en.iteratee=Nn;var Bn=Date.now||function(){return(new Date).getTime()};function Ln(t){function e(n){return t[n]}var n="(?:"+nn(t).join("|")+")",r=RegExp(n),u=RegExp(n,"g");return function(n){return r.test(n=null==n?"":""+n)?n.replace(u,e):n}}var Wn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},Yn=Ln(Wn),Vn=Ln(bn(Wn)),zn=en.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},Gn=/(.)^/,Hn={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},$n=/\\|'|\r|\n|\u2028|\u2029/g;function Kn(n){return"\\"+Hn[n]}var Jn=/^\s*(\w|\$)+\s*$/;var Xn=0;function Zn(n,t,e,r,u){if(!(r instanceof t))return n.apply(e,u);e=An(n.prototype),u=n.apply(e,u);return m(u)?u:e}var nt=b(function(u,i){var o=nt.placeholder,c=function(){for(var n=0,t=i.length,e=Array(t),r=0;r<t;r++)e[r]=i[r]===o?arguments[n++]:i[r];for(;n<arguments.length;)e.push(arguments[n++]);return Zn(u,c,this,this,e)};return c});nt.placeholder=en;var tt=b(function(t,e,r){if(!D(t))throw new TypeError("Bind must be called on a function");var u=b(function(n){return Zn(t,u,e,this,r.concat(n))});return u}),et=z(X);function rt(n,t,e,r){if(r=r||[],t||0===t){if(t<=0)return r.concat(n)}else t=1/0;for(var u=r.length,i=0,o=X(n);i<o;i++){var c=n[i];if(et(c)&&(Q(c)||W(c)))if(1<t)rt(c,t-1,e,r),u=r.length;else for(var a=0,f=c.length;a<f;)r[u++]=c[a++];else e||(r[u++]=c)}return r}var ut=b(function(n,t){var e=(t=rt(t,!1,!1)).length;if(e<1)throw new Error("bindAll must be passed function names");for(;e--;){var r=t[e];n[r]=tt(n[r],n)}return n});var it=b(function(n,t,e){return setTimeout(function(){return n.apply(null,e)},t)}),ot=nt(it,en,1);function ct(n){return function(){return!n.apply(this,arguments)}}function at(n,t){var e;return function(){return 0<--n&&(e=t.apply(this,arguments)),n<=1&&(t=null),e}}t=nt(at,2);function ft(n,t,e){t=Fn(t,e);for(var r,u=nn(n),i=0,o=u.length;i<o;i++)if(t(n[r=u[i]],r,n))return r}function lt(i){return function(n,t,e){t=Fn(t,e);for(var r=X(n),u=0<i?0:r-1;0<=u&&u<r;u+=i)if(t(n[u],u,n))return u;return-1}}var st=lt(1),M=lt(-1);function pt(n,t,e,r){for(var u=(e=Fn(e,r,1))(t),i=0,o=X(n);i<o;){var c=Math.floor((i+o)/2);e(n[c])<u?i=c+1:o=c}return i}function ht(i,o,c){return function(n,t,e){var r=0,u=X(n);if("number"==typeof e)0<i?r=0<=e?e:Math.max(e+u,r):u=0<=e?Math.min(e+1,u):e+u+1;else if(c&&e&&u)return n[e=c(n,t)]===t?e:-1;if(t!=t)return 0<=(e=o(a.call(n,r,u),Y))?e+r:-1;for(e=0<i?r:u-1;0<=e&&e<u;e+=i)if(n[e]===t)return e;return-1}}var vt=ht(1,st,pt),q=ht(-1,M);function dt(n,t,e){e=(et(n)?st:ft)(n,t,e);if(void 0!==e&&-1!==e)return n[e]}function yt(n,t,e){if(t=Rn(t,e),et(n))for(u=0,i=n.length;u<i;u++)t(n[u],u,n);else for(var r=nn(n),u=0,i=r.length;u<i;u++)t(n[r[u]],r[u],n);return n}function gt(n,t,e){t=Fn(t,e);for(var r=!et(n)&&nn(n),u=(r||n).length,i=Array(u),o=0;o<u;o++){var c=r?r[o]:o;i[o]=t(n[c],c,n)}return i}function St(a){return function(n,t,e,r){var u=3<=arguments.length;return function(n,t,e,r){var u=!et(n)&&nn(n),i=(u||n).length,o=0<a?0:i-1;for(r||(e=n[u?u[o]:o],o+=a);0<=o&&o<i;o+=a){var c=u?u[o]:o;e=t(e,n[c],c,n)}return e}(n,Rn(t,r,4),e,u)}}c=St(1),R=St(-1);function _t(n,r,t){var u=[];return r=Fn(r,t),yt(n,function(n,t,e){r(n,t,e)&&u.push(n)}),u}function bt(n,t,e){t=Fn(t,e);for(var r=!et(n)&&nn(n),u=(r||n).length,i=0;i<u;i++){var o=r?r[i]:i;if(!t(n[o],o,n))return!1}return!0}function mt(n,t,e){t=Fn(t,e);for(var r=!et(n)&&nn(n),u=(r||n).length,i=0;i<u;i++){var o=r?r[i]:i;if(t(n[o],o,n))return!0}return!1}function wt(n,t,e,r){return et(n)||(n=_n(n)),0<=vt(n,t,e="number"!=typeof e||r?0:e)}F=b(function(n,e,r){var u,i;return D(e)?i=e:(e=Cn(e),u=e.slice(0,-1),e=e[e.length-1]),gt(n,function(n){var t=i;if(!t){if(null==(n=u&&u.length?On(n,u):n))return;t=n[e]}return null==t?t:t.apply(n,r)})});function Et(n,t){return gt(n,Dn(t))}function xt(n,r,t){var e,u,i=-1/0,o=-1/0;if(null==r||"number"==typeof r&&"object"!=typeof n[0]&&null!=n)for(var c=0,a=(n=et(n)?n:_n(n)).length;c<a;c++)null!=(e=n[c])&&i<e&&(i=e);else r=Fn(r,t),yt(n,function(n,t,e){u=r(n,t,e),(o<u||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i}function jt(n,t,e){if(null==t||e)return(n=!et(n)?_n(n):n)[Qn(n.length-1)];var r=(et(n)?Tn:_n)(n),n=X(r);t=Math.max(Math.min(t,n),0);for(var u=n-1,i=0;i<t;i++){var o=Qn(i,u),c=r[i];r[i]=r[o],r[o]=c}return r.slice(0,t)}function At(i,t){return function(e,r,n){var u=t?[[],[]]:{};return r=Fn(r,n),yt(e,function(n,t){t=r(n,t,e);i(u,n,t)}),u}}var f=At(function(n,t,e){B(n,e)?n[e].push(t):n[e]=[t]}),i=At(function(n,t,e){n[e]=t}),sn=At(function(n,t,e){B(n,e)?n[e]++:n[e]=1}),ln=At(function(n,t,e){n[e?0:1].push(t)},!0),Tt=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function kt(n,t,e){return t in e}var Ct=b(function(n,t){var e={},r=t[0];if(null==n)return e;D(r)?(1<t.length&&(r=Rn(r,t[1])),t=cn(n)):(r=kt,t=rt(t,!1,!1),n=Object(n));for(var u=0,i=t.length;u<i;u++){var o=t[u],c=n[o];r(c,o,n)&&(e[o]=c)}return e}),pn=b(function(n,e){var t,r=e[0];return D(r)?(r=ct(r),1<e.length&&(t=e[1])):(e=gt(rt(e,!1,!1),String),r=function(n,t){return!wt(e,t)}),Ct(n,r,t)});function Ot(n,t,e){return a.call(n,0,Math.max(0,n.length-(null==t||e?1:t)))}function It(n,t,e){return null==n||n.length<1?null==t||e?void 0:[]:null==t||e?n[0]:Ot(n,n.length-t)}function qt(n,t,e){return a.call(n,null==t||e?1:t)}var Mt=b(function(n,t){return t=rt(t,!0,!0),_t(n,function(n){return!wt(t,n)})}),N=b(function(n,t){return Mt(n,t)});function Dt(n,t,e,r){E(t)||(r=e,e=t,t=!1),null!=e&&(e=Fn(e,r));for(var u=[],i=[],o=0,c=X(n);o<c;o++){var a=n[o],f=e?e(a,o,n):a;t&&!e?(o&&i===f||u.push(a),i=f):e?wt(i,f)||(i.push(f),u.push(a)):wt(u,a)||u.push(a)}return u}vn=b(function(n){return Dt(rt(n,!0,!0))});function Rt(n){for(var t=n&&xt(n,X).length||0,e=Array(t),r=0;r<t;r++)e[r]=Et(n,r);return e}Wn=b(Rt);function Ut(n,t){return n._chain?en(t).chain():t}function Nt(e){return yt(mn(e),function(n){var t=en[n]=e[n];en.prototype[n]=function(){var n=[this._wrapped];return u.apply(n,arguments),Ut(this,t.apply(en,n))}}),en}yt(["pop","push","reverse","shift","sort","splice","unshift"],function(t){var e=r[t];en.prototype[t]=function(){var n=this._wrapped;return null!=n&&(e.apply(n,arguments),"shift"!==t&&"splice"!==t||0!==n.length||delete n[0]),Ut(this,n)}}),yt(["concat","join","slice"],function(n){var t=r[n];en.prototype[n]=function(){var n=this._wrapped;return Ut(this,n=null!=n?t.apply(n,arguments):n)}});Wn=Nt({__proto__:null,VERSION:n,restArguments:b,isObject:m,isNull:function(n){return null===n},isUndefined:w,isBoolean:E,isElement:function(n){return!(!n||1!==n.nodeType)},isString:j,isNumber:A,isDate:T,isRegExp:k,isError:C,isSymbol:O,isArrayBuffer:I,isDataView:P,isArray:Q,isFunction:D,isArguments:W,isFinite:function(n){return!O(n)&&y(n)&&!isNaN(parseFloat(n))},isNaN:Y,isTypedArray:J,isEmpty:function(n){if(null==n)return!0;var t=X(n);return"number"==typeof t&&(Q(n)||j(n)||W(n))?0===t:0===X(nn(n))},isMatch:tn,isEqual:function(n,t){return on(n,t)},isMap:dn,isWeakMap:yn,isSet:gn,isWeakSet:Sn,keys:nn,allKeys:cn,values:_n,pairs:function(n){for(var t=nn(n),e=t.length,r=Array(e),u=0;u<e;u++)r[u]=[t[u],n[t[u]]];return r},invert:bn,functions:mn,methods:mn,extend:En,extendOwn:xn,assign:xn,defaults:jn,create:function(n,t){return n=An(n),t&&xn(n,t),n},clone:Tn,tap:function(n,t){return t(n),n},get:In,has:function(n,t){for(var e=(t=Cn(t)).length,r=0;r<e;r++){var u=t[r];if(!B(n,u))return!1;n=n[u]}return!!e},mapObject:function(n,t,e){t=Fn(t,e);for(var r=nn(n),u=r.length,i={},o=0;o<u;o++){var c=r[o];i[c]=t(n[c],c,n)}return i},identity:qn,constant:V,noop:Pn,toPath:kn,property:Dn,propertyOf:function(t){return null==t?Pn:function(n){return In(t,n)}},matcher:Mn,matches:Mn,times:function(n,t,e){var r=Array(Math.max(0,n));t=Rn(t,e,1);for(var u=0;u<n;u++)r[u]=t(u);return r},random:Qn,now:Bn,escape:Yn,unescape:Vn,templateSettings:zn,template:function(i,n,t){n=jn({},n=!n&&t?t:n,en.templateSettings);var e,t=RegExp([(n.escape||Gn).source,(n.interpolate||Gn).source,(n.evaluate||Gn).source].join("|")+"|$","g"),o=0,c="__p+='";if(i.replace(t,function(n,t,e,r,u){return c+=i.slice(o,u).replace($n,Kn),o=u+n.length,t?c+="'+\n((__t=("+t+"))==null?'':_.escape(__t))+\n'":e?c+="'+\n((__t=("+e+"))==null?'':__t)+\n'":r&&(c+="';\n"+r+"\n__p+='"),n}),c+="';\n",t=n.variable){if(!Jn.test(t))throw new Error("variable is not a bare identifier: "+t)}else c="with(obj||{}){\n"+c+"}\n",t="obj";c="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+c+"return __p;\n";try{e=new Function(t,"_",c)}catch(n){throw n.source=c,n}return(n=function(n){return e.call(this,n,en)}).source="function("+t+"){\n"+c+"}",n},result:function(n,t,e){var r=(t=Cn(t)).length;if(!r)return D(e)?e.call(n):e;for(var u=0;u<r;u++){var i=null==n?void 0:n[t[u]];void 0===i&&(i=e,u=r),n=D(i)?i.call(n):i}return n},uniqueId:function(n){var t=++Xn+"";return n?n+t:t},chain:function(n){return(n=en(n))._chain=!0,n},iteratee:Nn,partial:nt,bind:tt,bindAll:ut,memoize:function(r,u){var i=function(n){var t=i.cache,e=""+(u?u.apply(this,arguments):n);return B(t,e)||(t[e]=r.apply(this,arguments)),t[e]};return i.cache={},i},delay:it,defer:ot,throttle:function(e,r,u){var i,o,c,a,f=0;function l(){f=!1===u.leading?0:Bn(),i=null,a=e.apply(o,c),i||(o=c=null)}function n(){var n=Bn();f||!1!==u.leading||(f=n);var t=r-(n-f);return o=this,c=arguments,t<=0||r<t?(i&&(clearTimeout(i),i=null),f=n,a=e.apply(o,c),i||(o=c=null)):i||!1===u.trailing||(i=setTimeout(l,t)),a}return u=u||{},n.cancel=function(){clearTimeout(i),f=0,i=o=c=null},n},debounce:function(t,e,r){var u,i,o,c,a,f=function(){var n=Bn()-i;n<e?u=setTimeout(f,e-n):(u=null,r||(c=t.apply(a,o)),u||(o=a=null))},n=b(function(n){return a=this,o=n,i=Bn(),u||(u=setTimeout(f,e),r&&(c=t.apply(a,o))),c});return n.cancel=function(){clearTimeout(u),u=o=a=null},n},wrap:function(n,t){return nt(t,n)},negate:ct,compose:function(){var e=arguments,r=e.length-1;return function(){for(var n=r,t=e[r].apply(this,arguments);n--;)t=e[n].call(this,t);return t}},after:function(n,t){return function(){if(--n<1)return t.apply(this,arguments)}},before:at,once:t,findKey:ft,findIndex:st,findLastIndex:M,sortedIndex:pt,indexOf:vt,lastIndexOf:q,find:dt,detect:dt,findWhere:function(n,t){return dt(n,Mn(t))},each:yt,forEach:yt,map:gt,collect:gt,reduce:c,foldl:c,inject:c,reduceRight:R,foldr:R,filter:_t,select:_t,reject:function(n,t,e){return _t(n,ct(Fn(t)),e)},every:bt,all:bt,some:mt,any:mt,contains:wt,includes:wt,include:wt,invoke:F,pluck:Et,where:function(n,t){return _t(n,Mn(t))},max:xt,min:function(n,r,t){var e,u,i=1/0,o=1/0;if(null==r||"number"==typeof r&&"object"!=typeof n[0]&&null!=n)for(var c=0,a=(n=et(n)?n:_n(n)).length;c<a;c++)null!=(e=n[c])&&e<i&&(i=e);else r=Fn(r,t),yt(n,function(n,t,e){((u=r(n,t,e))<o||u===1/0&&i===1/0)&&(i=n,o=u)});return i},shuffle:function(n){return jt(n,1/0)},sample:jt,sortBy:function(n,r,t){var u=0;return r=Fn(r,t),Et(gt(n,function(n,t,e){return{value:n,index:u++,criteria:r(n,t,e)}}).sort(function(n,t){var e=n.criteria,r=t.criteria;if(e!==r){if(r<e||void 0===e)return 1;if(e<r||void 0===r)return-1}return n.index-t.index}),"value")},groupBy:f,indexBy:i,countBy:sn,partition:ln,toArray:function(n){return n?Q(n)?a.call(n):j(n)?n.match(Tt):et(n)?gt(n,qn):_n(n):[]},size:function(n){return null==n?0:(et(n)?n:nn(n)).length},pick:Ct,omit:pn,first:It,head:It,take:It,initial:Ot,last:function(n,t,e){return null==n||n.length<1?null==t||e?void 0:[]:null==t||e?n[n.length-1]:qt(n,Math.max(0,n.length-t))},rest:qt,tail:qt,drop:qt,compact:function(n){return _t(n,Boolean)},flatten:function(n,t){return rt(n,t,!1)},without:N,uniq:Dt,unique:Dt,union:vn,intersection:function(n){for(var t=[],e=arguments.length,r=0,u=X(n);r<u;r++){var i=n[r];if(!wt(t,i)){for(var o=1;o<e&&wt(arguments[o],i);o++);o===e&&t.push(i)}}return t},difference:Mt,unzip:Rt,transpose:Rt,zip:Wn,object:function(n,t){for(var e={},r=0,u=X(n);r<u;r++)t?e[n[r]]=t[r]:e[n[r][0]]=n[r][1];return e},range:function(n,t,e){null==t&&(t=n||0,n=0),e=e||(t<n?-1:1);for(var r=Math.max(Math.ceil((t-n)/e),0),u=Array(r),i=0;i<r;i++,n+=e)u[i]=n;return u},chunk:function(n,t){if(null==t||t<1)return[];for(var e=[],r=0,u=n.length;r<u;)e.push(a.call(n,r,r+=t));return e},mixin:Nt,default:en});return Wn._=Wn},"object"==typeof i&&void 0!==u?u.exports=t():"function"==typeof define&&define.amd?define("underscore",t):(n="undefined"!=typeof globalThis?globalThis:n||self,e=n._,(r=n._=t()).noConflict=function(){return n._=e,r})}.call(this)}.call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],3:[function(n,t,e){"use strict";var u=n("underscore"),i=n("../events");t.exports=function(n){var r=n.getComponent("MenuItem");return n.extend(r,{constructor:function(n,t){var e=t.source;if(!u.isObject(e))throw new Error('was not provided a "source" object, but rather: '+typeof e);t=u.extend({selectable:!0,label:e.label},t),r.call(this,n,t),this.source=e},handleClick:function(n){r.prototype.handleClick.call(this,n),this.player().trigger(i.QUALITY_REQUESTED,this.source)}})}},{"../events":5,underscore:2}],4:[function(n,t,e){"use strict";var u=n("underscore"),i=n("../events"),o=n("./QualityOption"),c="vjs-quality-changing";t.exports=function(n){var t=n.getComponent("MenuButton"),e=o(n),r=n.extend(t,{constructor:function(e,n){t.call(this,e,n),e.on(i.QUALITY_REQUESTED,function(n,t){this.setSelectedSource(t),e.addClass(c),e.one("loadeddata",function(){e.removeClass(c)})}.bind(this)),e.on(i.PLAYER_SOURCES_CHANGED,function(){this.update()}.bind(this)),e.on(i.QUALITY_SELECTED,function(n,t){this.setSelectedSource(t)}.bind(this)),e.one("ready",function(){this.selectedSrc=e.src(),this.update()}.bind(this)),this.controlText("Open quality selector menu")},setSelectedSource:function(n){var t=n?n.src:void 0;this.selectedSrc!==t&&(this.selectedSrc=t,u.each(this.items,function(n){n.selected(n.source.src===t)}))},createItems:function(){var t=this.player(),n=t.currentSources();return!n||n.length<2?[]:u.map(n,function(n){return new e(t,{source:n,selected:n.src===this.selectedSrc})}.bind(this))},buildWrapperCSSClass:function(){return"vjs-quality-selector "+t.prototype.buildWrapperCSSClass.call(this)}});return n.registerComponent("QualitySelector",r),r}},{"../events":5,"./QualityOption":3,underscore:2}],5:[function(n,t,e){"use strict";t.exports={QUALITY_REQUESTED:"qualityRequested",QUALITY_SELECTED:"qualitySelected",PLAYER_SOURCES_CHANGED:"playerSourcesChanged"}},{}],6:[function(n,t,e){"use strict";var c=n("underscore"),r=n("./events"),u=n("./components/QualitySelector"),i=n("./middleware/SourceInterceptor"),a=n("./util/SafeSeek");t.exports=function(n){n=n||window.videojs,u(n),i(n),n.hook("setup",function(o){o.on(r.QUALITY_REQUESTED,function(n,t){var e=o.currentSources(),r=o.currentTime(),u=o.playbackRate(),i=o.paused();c.each(e,function(n){n.selected=!1}),c.findWhere(e,{src:t.src}).selected=!0,o._qualitySelectorSafeSeek&&o._qualitySelectorSafeSeek.onQualitySelectionChange(),o.src(e),o.ready(function(){o._qualitySelectorSafeSeek&&!o._qualitySelectorSafeSeek.hasFinished()||(o._qualitySelectorSafeSeek=new a(o,r),o.playbackRate(u)),i||o.play()})})})},t.exports.EVENTS=r},{"./components/QualitySelector":4,"./events":5,"./middleware/SourceInterceptor":7,"./util/SafeSeek":9,underscore:2}],7:[function(n,t,e){"use strict";var u=n("underscore"),i=n("../events");t.exports=function(n){n.use("*",function(r){return{setSource:function(n,t){var e=r.currentSources();r._qualitySelectorSafeSeek&&r._qualitySelectorSafeSeek.onPlayerSourcesChange(),u.isEqual(e,r._qualitySelectorPreviousSources)||(r.trigger(i.PLAYER_SOURCES_CHANGED,e),r._qualitySelectorPreviousSources=e),e=u.find(e,function(n){return!0===n.selected||"true"===n.selected||"selected"===n.selected}),r.trigger(i.QUALITY_SELECTED,n=e||n),t(null,n)}}})}},{"../events":5,underscore:2}],8:[function(n,t,e){"use strict";n("./index")()},{"./index":6}],9:[function(n,t,e){"use strict";n=n("class.extend");t.exports=n.extend({init:function(n,t){this._player=n,this._seekToTime=t,this._hasFinished=!1,this._keepThisInstanceWhenPlayerSourcesChange=!1,this._seekWhenSafe()},_seekWhenSafe:function(){this._player.readyState()<3?(this._seekFn=this._seek.bind(this),this._player.one("canplay",this._seekFn)):this._seek()},onPlayerSourcesChange:function(){this._keepThisInstanceWhenPlayerSourcesChange?this._keepThisInstanceWhenPlayerSourcesChange=!1:this.cancel()},onQualitySelectionChange:function(){this.hasFinished()||(this._keepThisInstanceWhenPlayerSourcesChange=!0)},_seek:function(){this._player.currentTime(this._seekToTime),this._keepThisInstanceWhenPlayerSourcesChange=!1,this._hasFinished=!0},hasFinished:function(){return this._hasFinished},cancel:function(){this._player.off("canplay",this._seekFn),this._keepThisInstanceWhenPlayerSourcesChange=!1,this._hasFinished=!0}})},{"class.extend":1}]},{},[8]);
//# sourceMappingURL=silvermine-videojs-quality-selector.min.js.map