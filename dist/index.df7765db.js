var e,t,r,n,i,o,a,s,c,u,l,d,f,p,h,g,v,m,y=globalThis;function b(e){return e&&e.__esModule?e.default:e}var _={},w={},k=y.parcelRequire94c2;null==k&&((k=function(e){if(e in _)return _[e].exports;if(e in w){var t=w[e];delete w[e];var r={id:e,exports:{}};return _[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){w[e]=t},y.parcelRequire94c2=k),(0,k.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>r,set:e=>r=e,enumerable:!0,configurable:!0});var r,n=new Map;r=function(e,t){for(var r=0;r<t.length-1;r+=2)n.set(t[r],{baseUrl:e,path:t[r+1]})}}),k("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["f9fpV","index.df7765db.js","eyyUD","icons.c5b0f01c.svg"]'));var E={},S={},O=function(e){return e&&e.Math===Math&&e};S=O("object"==typeof globalThis&&globalThis)||O("object"==typeof window&&window)||O("object"==typeof self&&self)||O("object"==typeof y&&y)||O("object"==typeof S&&S)||function(){return this}()||Function("return this")();var j={},$={};j=!($=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var L={},M={};M=!$(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var x=Function.prototype.call;L=M?x.bind(x):function(){return x.apply(x,arguments)};var P={}.propertyIsEnumerable,T=Object.getOwnPropertyDescriptor;o=T&&!P.call({1:2},1)?function(e){var t=T(this,e);return!!t&&t.enumerable}:P;var F={};F=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var N={},H={},A={},q=Function.prototype,I=q.call,D=M&&q.bind.bind(I,I),R={},C=(A=M?D:function(e){return function(){return I.apply(e,arguments)}})({}.toString),U=A("".slice);R=function(e){return U(C(e),8,-1)};var W=Object,z=A("".split);H=$(function(){return!W("z").propertyIsEnumerable(0)})?function(e){return"String"===R(e)?z(e,""):W(e)}:W;var B={},G={};G=function(e){return null==e};var J=TypeError;B=function(e){if(G(e))throw new J("Can't call method on "+e);return e},N=function(e){return H(B(e))};var V={},Y={},Q={},K={},X="object"==typeof document&&document.all;K=void 0===X&&void 0!==X?function(e){return"function"==typeof e||e===X}:function(e){return"function"==typeof e},Q=function(e){return"object"==typeof e?null!==e:K(e)};var Z={},ee={};ee=function(e,t){var r;return arguments.length<2?(r=S[e],K(r)?r:void 0):S[e]&&S[e][t]};var et={};et=A({}.isPrototypeOf);var er={},en={},ei={},eo={},ea=S.navigator,es=ea&&ea.userAgent;eo=es?String(es):"";var ec=S.process,eu=S.Deno,el=ec&&ec.versions||eu&&eu.version,ed=el&&el.v8;ed&&(s=(a=ed.split("."))[0]>0&&a[0]<4?1:+(a[0]+a[1])),!s&&eo&&(!(a=eo.match(/Edge\/(\d+)/))||a[1]>=74)&&(a=eo.match(/Chrome\/(\d+)/))&&(s=+a[1]),ei=s;var ef=S.String;er=(en=!!Object.getOwnPropertySymbols&&!$(function(){var e=Symbol("symbol detection");return!ef(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&ei&&ei<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ep=Object;Z=er?function(e){return"symbol"==typeof e}:function(e){var t=ee("Symbol");return K(t)&&et(t.prototype,ep(e))};var eh={},eg={},ev={},em=String;ev=function(e){try{return em(e)}catch(e){return"Object"}};var ey=TypeError;eg=function(e){if(K(e))return e;throw new ey(ev(e)+" is not a function")},eh=function(e,t){var r=e[t];return G(r)?void 0:eg(r)};var eb={},e_=TypeError;eb=function(e,t){var r,n;if("string"===t&&K(r=e.toString)&&!Q(n=L(r,e))||K(r=e.valueOf)&&!Q(n=L(r,e))||"string"!==t&&K(r=e.toString)&&!Q(n=L(r,e)))return n;throw new e_("Can't convert object to primitive value")};var ew={},ek={},eE={};eE=!1;var eS={},eO=Object.defineProperty;eS=function(e,t){try{eO(S,e,{value:t,configurable:!0,writable:!0})}catch(r){S[e]=t}return t};var ej="__core-js_shared__",e$=ek=S[ej]||eS(ej,{});(e$.versions||(e$.versions=[])).push({version:"3.40.0",mode:eE?"pure":"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.40.0/LICENSE",source:"https://github.com/zloirock/core-js"}),ew=function(e,t){return ek[e]||(ek[e]=t||{})};var eL={},eM={},ex=Object;eM=function(e){return ex(B(e))};var eP=A({}.hasOwnProperty);eL=Object.hasOwn||function(e,t){return eP(eM(e),t)};var eT={},eF=0,eN=Math.random(),eH=A(1..toString);eT=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eH(++eF+eN,36)};var eA=S.Symbol,eq=ew("wks"),eI=er?eA.for||eA:eA&&eA.withoutSetter||eT,eD=TypeError,eR=(eL(eq,e="toPrimitive")||(eq[e]=en&&eL(eA,e)?eA[e]:eI("Symbol."+e)),eq[e]);Y=function(e,t){if(!Q(e)||Z(e))return e;var r,n=eh(e,eR);if(n){if(void 0===t&&(t="default"),r=L(n,e,t),!Q(r)||Z(r))return r;throw new eD("Can't convert object to primitive value")}return void 0===t&&(t="number"),eb(e,t)},V=function(e){var t=Y(e,"string");return Z(t)?t:t+""};var eC={},eU={},eW=S.document,ez=Q(eW)&&Q(eW.createElement);eU=function(e){return ez?eW.createElement(e):{}},eC=!j&&!$(function(){return 7!==Object.defineProperty(eU("div"),"a",{get:function(){return 7}}).a});var eB=Object.getOwnPropertyDescriptor;i=j?eB:function(e,t){if(e=N(e),t=V(t),eC)try{return eB(e,t)}catch(e){}if(eL(e,t))return F(!L(o,e,t),e[t])};var eG={},eJ={};eJ=j&&$(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eV={},eY=String,eQ=TypeError;eV=function(e){if(Q(e))return e;throw new eQ(eY(e)+" is not an object")};var eK=TypeError,eX=Object.defineProperty,eZ=Object.getOwnPropertyDescriptor,e0="enumerable",e1="configurable",e2="writable";c=j?eJ?function(e,t,r){if(eV(e),t=V(t),eV(r),"function"==typeof e&&"prototype"===t&&"value"in r&&e2 in r&&!r[e2]){var n=eZ(e,t);n&&n[e2]&&(e[t]=r.value,r={configurable:e1 in r?r[e1]:n[e1],enumerable:e0 in r?r[e0]:n[e0],writable:!1})}return eX(e,t,r)}:eX:function(e,t,r){if(eV(e),t=V(t),eV(r),eC)try{return eX(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eK("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eG=j?function(e,t,r){return c(e,t,F(1,r))}:function(e,t,r){return e[t]=r,e};var e4={},e5={},e3=Function.prototype,e8=j&&Object.getOwnPropertyDescriptor,e7=eL(e3,"name")&&(!j||j&&e8(e3,"name").configurable),e9={},e6=A(Function.toString);K(ek.inspectSource)||(ek.inspectSource=function(e){return e6(e)}),e9=ek.inspectSource;var te={},tt={},tr=S.WeakMap;tt=K(tr)&&/native code/.test(String(tr));var tn={},ti=ew("keys");tn=function(e){return ti[e]||(ti[e]=eT(e))};var to={};to={};var ta="Object already initialized",ts=S.TypeError,tc=S.WeakMap;if(tt||ek.state){var tu=ek.state||(ek.state=new tc);tu.get=tu.get,tu.has=tu.has,tu.set=tu.set,u=function(e,t){if(tu.has(e))throw new ts(ta);return t.facade=e,tu.set(e,t),t},l=function(e){return tu.get(e)||{}},d=function(e){return tu.has(e)}}else{var tl=tn("state");to[tl]=!0,u=function(e,t){if(eL(e,tl))throw new ts(ta);return t.facade=e,eG(e,tl,t),t},l=function(e){return eL(e,tl)?e[tl]:{}},d=function(e){return eL(e,tl)}}var tf=(te={set:u,get:l,has:d,enforce:function(e){return d(e)?l(e):u(e,{})},getterFor:function(e){return function(t){var r;if(!Q(t)||(r=l(t)).type!==e)throw new ts("Incompatible receiver, "+e+" required");return r}}}).enforce,tp=te.get,th=String,tg=Object.defineProperty,tv=A("".slice),tm=A("".replace),ty=A([].join),tb=j&&!$(function(){return 8!==tg(function(){},"length",{value:8}).length}),t_=String(String).split("String"),tw=e5=function(e,t,r){"Symbol("===tv(th(t),0,7)&&(t="["+tm(th(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eL(e,"name")||e7&&e.name!==t)&&(j?tg(e,"name",{value:t,configurable:!0}):e.name=t),tb&&r&&eL(r,"arity")&&e.length!==r.arity&&tg(e,"length",{value:r.arity});try{r&&eL(r,"constructor")&&r.constructor?j&&tg(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tf(e);return eL(n,"source")||(n.source=ty(t_,"string"==typeof t?t:"")),e};Function.prototype.toString=tw(function(){return K(this)&&tp(this).source||e9(this)},"toString"),e4=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(K(r)&&e5(r,o,n),n.global)i?e[t]=r:eS(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:c(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tk={},tE={},tS={},tO={},tj={},t$={},tL=Math.ceil,tM=Math.floor;t$=Math.trunc||function(e){var t=+e;return(t>0?tM:tL)(t)},tj=function(e){var t=+e;return t!=t||0===t?0:t$(t)};var tx=Math.max,tP=Math.min;tO=function(e,t){var r=tj(e);return r<0?tx(r+t,0):tP(r,t)};var tT={},tF={},tN=Math.min;tF=function(e){var t=tj(e);return t>0?tN(t,0x1fffffffffffff):0},tT=function(e){return tF(e.length)};var tH=function(e){return function(t,r,n){var i,o=N(t),a=tT(o);if(0===a)return!e&&-1;var s=tO(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tA={includes:tH(!0),indexOf:tH(!1)}.indexOf,tq=A([].push);tS=function(e,t){var r,n=N(e),i=0,o=[];for(r in n)!eL(to,r)&&eL(n,r)&&tq(o,r);for(;t.length>i;)eL(n,r=t[i++])&&(~tA(o,r)||tq(o,r));return o};var tI=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");f=Object.getOwnPropertyNames||function(e){return tS(e,tI)},p=Object.getOwnPropertySymbols;var tD=A([].concat);tE=ee("Reflect","ownKeys")||function(e){var t=f(eV(e));return p?tD(t,p(e)):t},tk=function(e,t,r){for(var n=tE(t),o=0;o<n.length;o++){var a=n[o];eL(e,a)||r&&eL(r,a)||c(e,a,i(t,a))}};var tR={},tC=/#|\.prototype\./,tU=function(e,t){var r=tz[tW(e)];return r===tG||r!==tB&&(K(t)?$(t):!!t)},tW=tU.normalize=function(e){return String(e).replace(tC,".").toLowerCase()},tz=tU.data={},tB=tU.NATIVE="N",tG=tU.POLYFILL="P";tR=tU,E=function(e,t){var r,n,o,a,s,c=e.target,u=e.global,l=e.stat;if(r=u?S:l?S[c]||eS(c,{}):S[c]&&S[c].prototype)for(n in t){if(a=t[n],o=e.dontCallGetSet?(s=i(r,n))&&s.value:r[n],!tR(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;tk(a,o)}(e.sham||o&&o.sham)&&eG(a,"sham",!0),e4(r,n,a,e)}};var tJ={},tV={},tY=Function.prototype,tQ=tY.apply,tK=tY.call;tV="object"==typeof Reflect&&Reflect.apply||(M?tK.bind(tQ):function(){return tK.apply(tQ,arguments)});var tX={},tZ={},t0=(tZ=function(e){if("Function"===R(e))return A(e)})(tZ.bind);tX=function(e,t){return eg(e),void 0===t?e:M?t0(e,t):function(){return e.apply(t,arguments)}};var t1={};t1=ee("document","documentElement");var t2={};t2=A([].slice);var t4={},t5=TypeError;t4=function(e,t){if(e<t)throw new t5("Not enough arguments");return e};var t3={};t3=/(?:ipad|iphone|ipod).*applewebkit/i.test(eo);var t8={},t7={},t9=function(e){return eo.slice(0,e.length)===e};t8="NODE"==(t7=t9("Bun/")?"BUN":t9("Cloudflare-Workers")?"CLOUDFLARE":t9("Deno/")?"DENO":t9("Node.js/")?"NODE":S.Bun&&"string"==typeof Bun.version?"BUN":S.Deno&&"object"==typeof Deno.version?"DENO":"process"===R(S.process)?"NODE":S.window&&S.document?"BROWSER":"REST");var t6=S.setImmediate,re=S.clearImmediate,rt=S.process,rr=S.Dispatch,rn=S.Function,ri=S.MessageChannel,ro=S.String,ra=0,rs={},rc="onreadystatechange";$(function(){h=S.location});var ru=function(e){if(eL(rs,e)){var t=rs[e];delete rs[e],t()}},rl=function(e){return function(){ru(e)}},rd=function(e){ru(e.data)},rf=function(e){S.postMessage(ro(e),h.protocol+"//"+h.host)};t6&&re||(t6=function(e){t4(arguments.length,1);var t=K(e)?e:rn(e),r=t2(arguments,1);return rs[++ra]=function(){tV(t,void 0,r)},g(ra),ra},re=function(e){delete rs[e]},t8?g=function(e){rt.nextTick(rl(e))}:rr&&rr.now?g=function(e){rr.now(rl(e))}:ri&&!t3?(m=(v=new ri).port2,v.port1.onmessage=rd,g=tX(m.postMessage,m)):S.addEventListener&&K(S.postMessage)&&!S.importScripts&&h&&"file:"!==h.protocol&&!$(rf)?(g=rf,S.addEventListener("message",rd,!1)):g=rc in eU("script")?function(e){t1.appendChild(eU("script"))[rc]=function(){t1.removeChild(this),ru(e)}}:function(e){setTimeout(rl(e),0)});var rp=(tJ={set:t6,clear:re}).clear;E({global:!0,bind:!0,enumerable:!0,forced:S.clearImmediate!==rp},{clearImmediate:rp});var rh=tJ.set,rg={},rv=S.Function,rm=/MSIE .\./.test(eo)||"BUN"===t7&&((t=S.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));rg=function(e,t){var r=t?2:1;return rm?function(n,i){var o=t4(arguments.length,1)>r,a=K(n)?n:rv(n),s=o?t2(arguments,r):[],c=o?function(){tV(a,this,s)}:a;return t?e(c,i):e(c)}:e};var ry=S.setImmediate?rg(rh,!1):rh;E({global:!0,bind:!0,enumerable:!0,forced:S.setImmediate!==ry},{setImmediate:ry});var rb=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof v?r:v).prototype);return i(c,"_invoke",{value:(a=new $(o||[]),s=f,function(r,i){if(s===p)throw Error("Generator is already running");if(s===h){if("throw"===r)throw i;return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g;var a=d(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(o,a);if(c){if(c===g)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===f)throw s=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=p;var u=d(e,n,a);if("normal"===u.type){if(s=a.done?h:"suspendedYield",u.arg===g)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=h,a.method="throw",a.arg=u.arg)}})}),c}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var f="suspendedStart",p="executing",h="completed",g={};function v(){}function m(){}function y(){}var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(L([])));w&&w!==r&&n.call(w,a)&&(b=w);var k=y.prototype=v.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=d(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function $(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function L(e){if(null!=e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return m.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},E(k),u(k,c,"Generator"),u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=L,$.prototype={constructor:$,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;j(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:L(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=rb}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rb:Function("r","regeneratorRuntime = r")(rb)}const r_="https://forkify-api.jonas.io/api/v2/recipes/",rw="1fe5cbb9-03a2-4d43-b008-48605e6399ed",rk=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${n.status}, ${i.message}`);return i}catch(e){throw e}},rE={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},rS=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},rO=async function(e){try{let t=await rk(`${r_}${e}?key=${rw}`);rE.recipe=rS(t),rE.bookmarks.some(t=>t.id===e)&&(rE.recipe.bookmarked=!0)}catch(e){throw console.error(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},rj=async function(e){try{rE.search.query=e;let t=await rk(`${r_}?search=${e}&key=${rw}`);console.log(t),rE.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),rE.search.page=1}catch(e){throw console.error(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},r$=function(e=rE.search.page){rE.search.page=e;let t=(e-1)*rE.search.resultsPerPage,r=e*rE.search.resultsPerPage;return rE.search.results.slice(t,r)},rL=function(e){rE.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*(e/rE.recipe.servings)}),rE.recipe.servings=e},rM=function(e){rE.bookmarks.push(e),e.id===rE.recipe.id&&(rE.recipe.bookmarked=!0),rP()},rx=function(e){let t=rE.bookmarks.findIndex(t=>t.id===e);rE.bookmarks.splice(t,1),e===rE.recipe.id&&(rE.recipe.bookmarked=!1),rP()},rP=function(){localStorage.setItem("bookmarks",JSON.stringify(rE.bookmarks))};!function(){let e=localStorage.getItem("bookmarks");e&&(rE.bookmarks=JSON.parse(e))}();const rT=async function(e){try{let t=Object.entries(e).filter(e=>e.at(0).startsWith("ingredient")&&""!==e.at(1)).map(e=>{let t=e.at(1).split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient format! Please use the correct format :0");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await rk(`${r_}?key=${rw}`,r);rE.recipe=rS(n),rM(rE.recipe)}catch(e){throw e}};var rF={};rF=new URL("icons.c5b0f01c.svg",import.meta.url).toString();var rN=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,i=num.split(" ");if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new rN(r).add(new rN(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var o=r.split("/");this.numerator=o[0],this.denominator=o[1]}else{if("string"==typeof r&&r.match("."))return new rN(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()};rN.prototype.clone=function(){return new rN(this.numerator,this.denominator)},rN.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},rN.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},rN.prototype.add=function(e){var t=this.clone();return e=e instanceof rN?e.clone():new rN(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},rN.prototype.subtract=function(e){var t=this.clone();return e=e instanceof rN?e.clone():new rN(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},rN.prototype.multiply=function(e){var t=this.clone();if(e instanceof rN)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new rN(e));t.numerator*=e}return t.normalize()},rN.prototype.divide=function(e){var t=this.clone();if(e instanceof rN)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new rN(e));t.denominator*=e}return t.normalize()},rN.prototype.equals=function(e){e instanceof rN||(e=new rN(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},rN.prototype.normalize=(r=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},n=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){if(r(this.denominator)){var e=n(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}if(r(this.numerator)){var e=n(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*t),this.denominator*=t}var i=rN.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),rN.gcf=function(e,t){var r=[],n=rN.primeFactors(e),i=rN.primeFactors(t);return(n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},rN.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!=t&&r.push(t),r};class rH{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=document.createRange().createContextualFragment(t).querySelectorAll("*"),n=this._parentElement.querySelectorAll("*");r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))}),this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
                  <div class="spinner">
                  <svg>
                    <use href="${b(rF)}#icon-loader"></use>
                  </svg>
                </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`<div class="error">
                  <div>
                    <svg>
                      <use href="${b(rF)}#icon-alert-triangle"></use>
                    </svg>
                  </div>
                  <p>${e}</p>
                </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._successMessage){let t=`<div class="message">
                <div>
                  <svg>
                    <use href="${b(rF)}#icon-smile"></use>
                  </svg>
                </div>
                <p>${e}</p>
              </div>
      `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t),this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}class rA extends rH{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_successMessage="";_generateMarkup(){return`
      <figure class="recipe__fig">
          <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${b(rF)}#icon-clock"></use>
            </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${b(rF)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
                <svg>
                  <use href="${b(rF)}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
                <svg>
                  <use href="${b(rF)}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
           <svg>
              <use href="${b(rF)}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${b(rF)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
            ${this._data.ingredients.map(e=>this._generateMarkupIngredient(e)).join("")}
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </a>
        </div>`}_generateMarkupIngredient(e){return` <li class="recipe__ingredient">
    <svg class="recipe__icon">
      <use href="${b(rF)}#icon-check"></use>
    </svg>
    <div class="recipe__quantity">${e.quantity?new rN(e.quantity).toString():""}</div>
    <div class="recipe__description">
      <span class="recipe__unit">${e.unit}</span>
      ${e.description}
    </div>
  </li>
    `}addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}}var rq=new rA;class rI{#e=document.querySelector(".search");getQuery(){let e=this.#e.querySelector(".search__field").value;return this.#t(),e}#t(){this.#e.querySelector(".search__field").value=""}addHandlerSearch(e){this.#e.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rD=new rI,rR=new class extends rH{_generateMarkup(){let e=window.location.hash.slice(1);return`
    <li class="preview">
            <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
              <figure class="preview__fig">
                <img src="${this._data.image}" alt="${this._data.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${this._data.title}</h4>
                <p class="preview__publisher">${this._data.publisher}</p>
                 <div class="preview__user-generated ${this._data.key?"":"hidden"}">
                           <svg>
                              <use href="${b(rF)}#icon-user"></use>
                            </svg>
                          </div>
              </div>
            </a>
          </li>
    `}};class rC extends rH{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again ;)";_successMessage="";_generateMarkup(){return this._data.map(e=>rR.render(e,!1)).join("")}}var rU=new rC;class rW extends rH{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it :)";_successMessage="";addHendlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>rR.render(e,!1)).join("")}}var rz=new rW;class rB extends rH{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){if(!this._data.results.length)return"";let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?`<button data-goto="${e+1}" class="btn--inline pagination__btn--next">
            <span>Page ${e+1}</span>
            <svg class="search__icon">
              <use href="${b(rF)}#icon-arrow-right"></use>
            </svg>
          </button>`:1===e&&t===e?"":e===t&&t>1?`<button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${b(rF)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e-1}</span>
          </button>`:e<t?`<button data-goto="${e-1}"class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${b(rF)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e-1}</span>
          </button>
          <button data-goto="${e+1}"class="btn--inline pagination__btn--next">
            <span>Page ${e+1}</span>
            <svg class="search__icon">
              <use href="${b(rF)}#icon-arrow-right"></use>
            </svg>
          </button>`:void 0}}var rG=new rB;class rJ extends rH{_parentElement=document.querySelector(".upload");_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");_successMessage="Recipe was succesfully uploaded \uD83C\uDF89";constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}_generateMarkup(){}}var rV=new rJ;const rY=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rq.renderSpinner(),rU.update(r$()),rz.update(rE.bookmarks),await rO(e),rq.render(rE.recipe)}catch(e){console.error(e),rq.renderError()}},rQ=async function(){try{rU.renderSpinner();let e=rD.getQuery();if(!e)return;await rj(e),rU.render(r$()),rG.render(rE.search)}catch(e){console.log(e)}},rK=async function(e){try{rV.renderSpinner(),await rT(e),rq.render(rE.recipe),rV.renderMessage(),rz.render(rE.bookmarks),window.history.pushState(null,"",`#${rE.recipe.id}`),setTimeout(function(){rV.toggleWindow()},2500)}catch(e){console.error(`\u{1F4A5}${e.message}`),rV.renderError(e.message)}};rz.addHendlerRender(function(){rz.render(rE.bookmarks)}),rq.addHandlerRender(rY),rq.addHandlerUpdateServings(function(e){rL(e),rq.update(rE.recipe)}),rq.addHandlerAddBookmark(function(){rE.recipe.bookmarked?rx(rE.recipe.id):rM(rE.recipe),rq.update(rE.recipe),rz.render(rE.bookmarks)}),rD.addHandlerSearch(rQ),rG.addHandlerClick(function(e){rU.render(r$(e)),rG.render(rE.search)}),rV.addHandlerUpload(rK);
//# sourceMappingURL=index.df7765db.js.map
