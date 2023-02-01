function d1(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var Uo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function wg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var va={},f1={get exports(){return va},set exports(e){va=e}},Ql={},N={},p1={get exports(){return N},set exports(e){N=e}},ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ha=Symbol.for("react.element"),h1=Symbol.for("react.portal"),m1=Symbol.for("react.fragment"),_1=Symbol.for("react.strict_mode"),v1=Symbol.for("react.profiler"),g1=Symbol.for("react.provider"),y1=Symbol.for("react.context"),b1=Symbol.for("react.forward_ref"),x1=Symbol.for("react.suspense"),w1=Symbol.for("react.memo"),S1=Symbol.for("react.lazy"),um=Symbol.iterator;function k1(e){return e===null||typeof e!="object"?null:(e=um&&e[um]||e["@@iterator"],typeof e=="function"?e:null)}var Sg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},kg=Object.assign,Cg={};function bi(e,t,n){this.props=e,this.context=t,this.refs=Cg,this.updater=n||Sg}bi.prototype.isReactComponent={};bi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};bi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Pg(){}Pg.prototype=bi.prototype;function Hf(e,t,n){this.props=e,this.context=t,this.refs=Cg,this.updater=n||Sg}var Wf=Hf.prototype=new Pg;Wf.constructor=Hf;kg(Wf,bi.prototype);Wf.isPureReactComponent=!0;var cm=Array.isArray,Eg=Object.prototype.hasOwnProperty,Zf={current:null},Og={key:!0,ref:!0,__self:!0,__source:!0};function zg(e,t,n){var r,i={},a=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(a=""+t.key),t)Eg.call(t,r)&&!Og.hasOwnProperty(r)&&(i[r]=t[r]);var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){for(var d=Array(c),p=0;p<c;p++)d[p]=arguments[p+2];i.children=d}if(e&&e.defaultProps)for(r in c=e.defaultProps,c)i[r]===void 0&&(i[r]=c[r]);return{$$typeof:Ha,type:e,key:a,ref:l,props:i,_owner:Zf.current}}function C1(e,t){return{$$typeof:Ha,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Vf(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ha}function P1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var dm=/\/+/g;function hc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?P1(""+e.key):t.toString(36)}function $s(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Ha:case h1:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+hc(l,0):r,cm(i)?(n="",e!=null&&(n=e.replace(dm,"$&/")+"/"),$s(i,t,n,"",function(p){return p})):i!=null&&(Vf(i)&&(i=C1(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(dm,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",cm(e))for(var c=0;c<e.length;c++){a=e[c];var d=r+hc(a,c);l+=$s(a,t,n,d,i)}else if(d=k1(e),typeof d=="function")for(e=d.call(e),c=0;!(a=e.next()).done;)a=a.value,d=r+hc(a,c++),l+=$s(a,t,n,d,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function xs(e,t,n){if(e==null)return e;var r=[],i=0;return $s(e,r,"","",function(a){return t.call(n,a,i++)}),r}function E1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Nt={current:null},Us={transition:null},O1={ReactCurrentDispatcher:Nt,ReactCurrentBatchConfig:Us,ReactCurrentOwner:Zf};ye.Children={map:xs,forEach:function(e,t,n){xs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return xs(e,function(){t++}),t},toArray:function(e){return xs(e,function(t){return t})||[]},only:function(e){if(!Vf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ye.Component=bi;ye.Fragment=m1;ye.Profiler=v1;ye.PureComponent=Hf;ye.StrictMode=_1;ye.Suspense=x1;ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O1;ye.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=kg({},e.props),i=e.key,a=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,l=Zf.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(d in t)Eg.call(t,d)&&!Og.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&c!==void 0?c[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){c=Array(d);for(var p=0;p<d;p++)c[p]=arguments[p+2];r.children=c}return{$$typeof:Ha,type:e.type,key:i,ref:a,props:r,_owner:l}};ye.createContext=function(e){return e={$$typeof:y1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:g1,_context:e},e.Consumer=e};ye.createElement=zg;ye.createFactory=function(e){var t=zg.bind(null,e);return t.type=e,t};ye.createRef=function(){return{current:null}};ye.forwardRef=function(e){return{$$typeof:b1,render:e}};ye.isValidElement=Vf;ye.lazy=function(e){return{$$typeof:S1,_payload:{_status:-1,_result:e},_init:E1}};ye.memo=function(e,t){return{$$typeof:w1,type:e,compare:t===void 0?null:t}};ye.startTransition=function(e){var t=Us.transition;Us.transition={};try{e()}finally{Us.transition=t}};ye.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ye.useCallback=function(e,t){return Nt.current.useCallback(e,t)};ye.useContext=function(e){return Nt.current.useContext(e)};ye.useDebugValue=function(){};ye.useDeferredValue=function(e){return Nt.current.useDeferredValue(e)};ye.useEffect=function(e,t){return Nt.current.useEffect(e,t)};ye.useId=function(){return Nt.current.useId()};ye.useImperativeHandle=function(e,t,n){return Nt.current.useImperativeHandle(e,t,n)};ye.useInsertionEffect=function(e,t){return Nt.current.useInsertionEffect(e,t)};ye.useLayoutEffect=function(e,t){return Nt.current.useLayoutEffect(e,t)};ye.useMemo=function(e,t){return Nt.current.useMemo(e,t)};ye.useReducer=function(e,t,n){return Nt.current.useReducer(e,t,n)};ye.useRef=function(e){return Nt.current.useRef(e)};ye.useState=function(e){return Nt.current.useState(e)};ye.useSyncExternalStore=function(e,t,n){return Nt.current.useSyncExternalStore(e,t,n)};ye.useTransition=function(){return Nt.current.useTransition()};ye.version="18.2.0";(function(e){e.exports=ye})(p1);const $=wg(N),ld=d1({__proto__:null,default:$},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z1=N,T1=Symbol.for("react.element"),L1=Symbol.for("react.fragment"),B1=Object.prototype.hasOwnProperty,R1=z1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,I1={key:!0,ref:!0,__self:!0,__source:!0};function Tg(e,t,n){var r,i={},a=null,l=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)B1.call(t,r)&&!I1.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:T1,type:e,key:a,ref:l,props:i,_owner:R1.current}}Ql.Fragment=L1;Ql.jsx=Tg;Ql.jsxs=Tg;(function(e){e.exports=Ql})(f1);const N1=va.Fragment,_e=va.jsx,on=va.jsxs;var ga={},D1={get exports(){return ga},set exports(e){ga=e}},Gt={},ud={},M1={get exports(){return ud},set exports(e){ud=e}},Lg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,ne){var H=I.length;I.push(ne);e:for(;0<H;){var P=H-1>>>1,B=I[P];if(0<i(B,ne))I[P]=ne,I[H]=B,H=P;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var ne=I[0],H=I.pop();if(H!==ne){I[0]=H;e:for(var P=0,B=I.length,T=B>>>1;P<T;){var A=2*(P+1)-1,Q=I[A],Y=A+1,re=I[Y];if(0>i(Q,H))Y<B&&0>i(re,Q)?(I[P]=re,I[Y]=H,P=Y):(I[P]=Q,I[A]=H,P=A);else if(Y<B&&0>i(re,H))I[P]=re,I[Y]=H,P=Y;else break e}}return ne}function i(I,ne){var H=I.sortIndex-ne.sortIndex;return H!==0?H:I.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var l=Date,c=l.now();e.unstable_now=function(){return l.now()-c}}var d=[],p=[],_=1,v=null,m=3,y=!1,w=!1,S=!1,O=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(I){for(var ne=n(p);ne!==null;){if(ne.callback===null)r(p);else if(ne.startTime<=I)r(p),ne.sortIndex=ne.expirationTime,t(d,ne);else break;ne=n(p)}}function E(I){if(S=!1,k(I),!w)if(n(d)!==null)w=!0,G(D);else{var ne=n(p);ne!==null&&ce(E,ne.startTime-I)}}function D(I,ne){w=!1,S&&(S=!1,b(K),K=-1),y=!0;var H=m;try{for(k(ne),v=n(d);v!==null&&(!(v.expirationTime>ne)||I&&!le());){var P=v.callback;if(typeof P=="function"){v.callback=null,m=v.priorityLevel;var B=P(v.expirationTime<=ne);ne=e.unstable_now(),typeof B=="function"?v.callback=B:v===n(d)&&r(d),k(ne)}else r(d);v=n(d)}if(v!==null)var T=!0;else{var A=n(p);A!==null&&ce(E,A.startTime-ne),T=!1}return T}finally{v=null,m=H,y=!1}}var F=!1,W=null,K=-1,ee=5,q=-1;function le(){return!(e.unstable_now()-q<ee)}function he(){if(W!==null){var I=e.unstable_now();q=I;var ne=!0;try{ne=W(!0,I)}finally{ne?Ue():(F=!1,W=null)}}else F=!1}var Ue;if(typeof g=="function")Ue=function(){g(he)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,Ie=ue.port2;ue.port1.onmessage=he,Ue=function(){Ie.postMessage(null)}}else Ue=function(){O(he,0)};function G(I){W=I,F||(F=!0,Ue())}function ce(I,ne){K=O(function(){I(e.unstable_now())},ne)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,G(D))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(I){switch(m){case 1:case 2:case 3:var ne=3;break;default:ne=m}var H=m;m=ne;try{return I()}finally{m=H}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,ne){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var H=m;m=I;try{return ne()}finally{m=H}},e.unstable_scheduleCallback=function(I,ne,H){var P=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?P+H:P):H=P,I){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=H+B,I={id:_++,callback:ne,priorityLevel:I,startTime:H,expirationTime:B,sortIndex:-1},H>P?(I.sortIndex=H,t(p,I),n(d)===null&&I===n(p)&&(S?(b(K),K=-1):S=!0,ce(E,H-P))):(I.sortIndex=B,t(d,I),w||y||(w=!0,G(D))),I},e.unstable_shouldYield=le,e.unstable_wrapCallback=function(I){var ne=m;return function(){var H=m;m=ne;try{return I.apply(this,arguments)}finally{m=H}}}})(Lg);(function(e){e.exports=Lg})(M1);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bg=N,Kt=ud;function V(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Rg=new Set,ya={};function Eo(e,t){fi(e,t),fi(e+"Capture",t)}function fi(e,t){for(ya[e]=t,e=0;e<t.length;e++)Rg.add(t[e])}var sr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cd=Object.prototype.hasOwnProperty,F1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fm={},pm={};function A1(e){return cd.call(pm,e)?!0:cd.call(fm,e)?!1:F1.test(e)?pm[e]=!0:(fm[e]=!0,!1)}function j1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $1(e,t,n,r){if(t===null||typeof t>"u"||j1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Dt(e,t,n,r,i,a,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=l}var yt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){yt[e]=new Dt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];yt[t]=new Dt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){yt[e]=new Dt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){yt[e]=new Dt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){yt[e]=new Dt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){yt[e]=new Dt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){yt[e]=new Dt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){yt[e]=new Dt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){yt[e]=new Dt(e,5,!1,e.toLowerCase(),null,!1,!1)});var qf=/[\-:]([a-z])/g;function Kf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(qf,Kf);yt[t]=new Dt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(qf,Kf);yt[t]=new Dt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(qf,Kf);yt[t]=new Dt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){yt[e]=new Dt(e,1,!1,e.toLowerCase(),null,!1,!1)});yt.xlinkHref=new Dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){yt[e]=new Dt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Qf(e,t,n,r){var i=yt.hasOwnProperty(t)?yt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($1(t,n,i,r)&&(n=null),r||i===null?A1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var fr=Bg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ws=Symbol.for("react.element"),Ho=Symbol.for("react.portal"),Wo=Symbol.for("react.fragment"),Gf=Symbol.for("react.strict_mode"),dd=Symbol.for("react.profiler"),Ig=Symbol.for("react.provider"),Ng=Symbol.for("react.context"),Xf=Symbol.for("react.forward_ref"),fd=Symbol.for("react.suspense"),pd=Symbol.for("react.suspense_list"),Yf=Symbol.for("react.memo"),xr=Symbol.for("react.lazy"),Dg=Symbol.for("react.offscreen"),hm=Symbol.iterator;function ji(e){return e===null||typeof e!="object"?null:(e=hm&&e[hm]||e["@@iterator"],typeof e=="function"?e:null)}var Ge=Object.assign,mc;function Ji(e){if(mc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);mc=t&&t[1]||""}return`
`+mc+e}var _c=!1;function vc(e,t){if(!e||_c)return"";_c=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var r=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){r=p}e.call(t.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var i=p.stack.split(`
`),a=r.stack.split(`
`),l=i.length-1,c=a.length-1;1<=l&&0<=c&&i[l]!==a[c];)c--;for(;1<=l&&0<=c;l--,c--)if(i[l]!==a[c]){if(l!==1||c!==1)do if(l--,c--,0>c||i[l]!==a[c]){var d=`
`+i[l].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=l&&0<=c);break}}}finally{_c=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ji(e):""}function U1(e){switch(e.tag){case 5:return Ji(e.type);case 16:return Ji("Lazy");case 13:return Ji("Suspense");case 19:return Ji("SuspenseList");case 0:case 2:case 15:return e=vc(e.type,!1),e;case 11:return e=vc(e.type.render,!1),e;case 1:return e=vc(e.type,!0),e;default:return""}}function hd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wo:return"Fragment";case Ho:return"Portal";case dd:return"Profiler";case Gf:return"StrictMode";case fd:return"Suspense";case pd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ng:return(e.displayName||"Context")+".Consumer";case Ig:return(e._context.displayName||"Context")+".Provider";case Xf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Yf:return t=e.displayName||null,t!==null?t:hd(e.type)||"Memo";case xr:t=e._payload,e=e._init;try{return hd(e(t))}catch{}}return null}function H1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hd(t);case 8:return t===Gf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function $r(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Mg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function W1(e){var t=Mg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,a.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ss(e){e._valueTracker||(e._valueTracker=W1(e))}function Fg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Mg(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function il(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function md(e,t){var n=t.checked;return Ge({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function mm(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=$r(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ag(e,t){t=t.checked,t!=null&&Qf(e,"checked",t,!1)}function _d(e,t){Ag(e,t);var n=$r(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?vd(e,t.type,n):t.hasOwnProperty("defaultValue")&&vd(e,t.type,$r(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function _m(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function vd(e,t,n){(t!=="number"||il(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ea=Array.isArray;function ni(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+$r(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function gd(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(V(91));return Ge({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function vm(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(V(92));if(ea(n)){if(1<n.length)throw Error(V(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:$r(n)}}function jg(e,t){var n=$r(t.value),r=$r(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function gm(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function $g(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yd(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?$g(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ks,Ug=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ks=ks||document.createElement("div"),ks.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ks.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ba(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var aa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Z1=["Webkit","ms","Moz","O"];Object.keys(aa).forEach(function(e){Z1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),aa[t]=aa[e]})});function Hg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||aa.hasOwnProperty(e)&&aa[e]?(""+t).trim():t+"px"}function Wg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Hg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var V1=Ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bd(e,t){if(t){if(V1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(V(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(V(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(V(61))}if(t.style!=null&&typeof t.style!="object")throw Error(V(62))}}function xd(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wd=null;function Jf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sd=null,ri=null,oi=null;function ym(e){if(e=Va(e)){if(typeof Sd!="function")throw Error(V(280));var t=e.stateNode;t&&(t=eu(t),Sd(e.stateNode,e.type,t))}}function Zg(e){ri?oi?oi.push(e):oi=[e]:ri=e}function Vg(){if(ri){var e=ri,t=oi;if(oi=ri=null,ym(e),t)for(e=0;e<t.length;e++)ym(t[e])}}function qg(e,t){return e(t)}function Kg(){}var gc=!1;function Qg(e,t,n){if(gc)return e(t,n);gc=!0;try{return qg(e,t,n)}finally{gc=!1,(ri!==null||oi!==null)&&(Kg(),Vg())}}function xa(e,t){var n=e.stateNode;if(n===null)return null;var r=eu(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(V(231,t,typeof n));return n}var kd=!1;if(sr)try{var $i={};Object.defineProperty($i,"passive",{get:function(){kd=!0}}),window.addEventListener("test",$i,$i),window.removeEventListener("test",$i,$i)}catch{kd=!1}function q1(e,t,n,r,i,a,l,c,d){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(_){this.onError(_)}}var sa=!1,al=null,sl=!1,Cd=null,K1={onError:function(e){sa=!0,al=e}};function Q1(e,t,n,r,i,a,l,c,d){sa=!1,al=null,q1.apply(K1,arguments)}function G1(e,t,n,r,i,a,l,c,d){if(Q1.apply(this,arguments),sa){if(sa){var p=al;sa=!1,al=null}else throw Error(V(198));sl||(sl=!0,Cd=p)}}function Oo(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Gg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function bm(e){if(Oo(e)!==e)throw Error(V(188))}function X1(e){var t=e.alternate;if(!t){if(t=Oo(e),t===null)throw Error(V(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return bm(i),e;if(a===r)return bm(i),t;a=a.sibling}throw Error(V(188))}if(n.return!==r.return)n=i,r=a;else{for(var l=!1,c=i.child;c;){if(c===n){l=!0,n=i,r=a;break}if(c===r){l=!0,r=i,n=a;break}c=c.sibling}if(!l){for(c=a.child;c;){if(c===n){l=!0,n=a,r=i;break}if(c===r){l=!0,r=a,n=i;break}c=c.sibling}if(!l)throw Error(V(189))}}if(n.alternate!==r)throw Error(V(190))}if(n.tag!==3)throw Error(V(188));return n.stateNode.current===n?e:t}function Xg(e){return e=X1(e),e!==null?Yg(e):null}function Yg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Yg(e);if(t!==null)return t;e=e.sibling}return null}var Jg=Kt.unstable_scheduleCallback,xm=Kt.unstable_cancelCallback,Y1=Kt.unstable_shouldYield,J1=Kt.unstable_requestPaint,nt=Kt.unstable_now,ew=Kt.unstable_getCurrentPriorityLevel,ep=Kt.unstable_ImmediatePriority,ey=Kt.unstable_UserBlockingPriority,ll=Kt.unstable_NormalPriority,tw=Kt.unstable_LowPriority,ty=Kt.unstable_IdlePriority,Gl=null,Zn=null;function nw(e){if(Zn&&typeof Zn.onCommitFiberRoot=="function")try{Zn.onCommitFiberRoot(Gl,e,void 0,(e.current.flags&128)===128)}catch{}}var Pn=Math.clz32?Math.clz32:iw,rw=Math.log,ow=Math.LN2;function iw(e){return e>>>=0,e===0?32:31-(rw(e)/ow|0)|0}var Cs=64,Ps=4194304;function ta(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ul(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,l=n&268435455;if(l!==0){var c=l&~i;c!==0?r=ta(c):(a&=l,a!==0&&(r=ta(a)))}else l=n&~i,l!==0?r=ta(l):a!==0&&(r=ta(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Pn(t),i=1<<n,r|=e[n],t&=~i;return r}function aw(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sw(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-Pn(a),c=1<<l,d=i[l];d===-1?(!(c&n)||c&r)&&(i[l]=aw(c,t)):d<=t&&(e.expiredLanes|=c),a&=~c}}function Pd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ny(){var e=Cs;return Cs<<=1,!(Cs&4194240)&&(Cs=64),e}function yc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Wa(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Pn(t),e[t]=n}function lw(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Pn(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function tp(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Pn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Le=0;function ry(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var oy,np,iy,ay,sy,Ed=!1,Es=[],Tr=null,Lr=null,Br=null,wa=new Map,Sa=new Map,kr=[],uw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wm(e,t){switch(e){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":Lr=null;break;case"mouseover":case"mouseout":Br=null;break;case"pointerover":case"pointerout":wa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sa.delete(t.pointerId)}}function Ui(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Va(t),t!==null&&np(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function cw(e,t,n,r,i){switch(t){case"focusin":return Tr=Ui(Tr,e,t,n,r,i),!0;case"dragenter":return Lr=Ui(Lr,e,t,n,r,i),!0;case"mouseover":return Br=Ui(Br,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return wa.set(a,Ui(wa.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Sa.set(a,Ui(Sa.get(a)||null,e,t,n,r,i)),!0}return!1}function ly(e){var t=uo(e.target);if(t!==null){var n=Oo(t);if(n!==null){if(t=n.tag,t===13){if(t=Gg(n),t!==null){e.blockedOn=t,sy(e.priority,function(){iy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Od(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);wd=r,n.target.dispatchEvent(r),wd=null}else return t=Va(n),t!==null&&np(t),e.blockedOn=n,!1;t.shift()}return!0}function Sm(e,t,n){Hs(e)&&n.delete(t)}function dw(){Ed=!1,Tr!==null&&Hs(Tr)&&(Tr=null),Lr!==null&&Hs(Lr)&&(Lr=null),Br!==null&&Hs(Br)&&(Br=null),wa.forEach(Sm),Sa.forEach(Sm)}function Hi(e,t){e.blockedOn===t&&(e.blockedOn=null,Ed||(Ed=!0,Kt.unstable_scheduleCallback(Kt.unstable_NormalPriority,dw)))}function ka(e){function t(i){return Hi(i,e)}if(0<Es.length){Hi(Es[0],e);for(var n=1;n<Es.length;n++){var r=Es[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Tr!==null&&Hi(Tr,e),Lr!==null&&Hi(Lr,e),Br!==null&&Hi(Br,e),wa.forEach(t),Sa.forEach(t),n=0;n<kr.length;n++)r=kr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<kr.length&&(n=kr[0],n.blockedOn===null);)ly(n),n.blockedOn===null&&kr.shift()}var ii=fr.ReactCurrentBatchConfig,cl=!0;function fw(e,t,n,r){var i=Le,a=ii.transition;ii.transition=null;try{Le=1,rp(e,t,n,r)}finally{Le=i,ii.transition=a}}function pw(e,t,n,r){var i=Le,a=ii.transition;ii.transition=null;try{Le=4,rp(e,t,n,r)}finally{Le=i,ii.transition=a}}function rp(e,t,n,r){if(cl){var i=Od(e,t,n,r);if(i===null)zc(e,t,r,dl,n),wm(e,r);else if(cw(i,e,t,n,r))r.stopPropagation();else if(wm(e,r),t&4&&-1<uw.indexOf(e)){for(;i!==null;){var a=Va(i);if(a!==null&&oy(a),a=Od(e,t,n,r),a===null&&zc(e,t,r,dl,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else zc(e,t,r,null,n)}}var dl=null;function Od(e,t,n,r){if(dl=null,e=Jf(r),e=uo(e),e!==null)if(t=Oo(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Gg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return dl=e,null}function uy(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ew()){case ep:return 1;case ey:return 4;case ll:case tw:return 16;case ty:return 536870912;default:return 16}default:return 16}}var Er=null,op=null,Ws=null;function cy(){if(Ws)return Ws;var e,t=op,n=t.length,r,i="value"in Er?Er.value:Er.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[a-r];r++);return Ws=i.slice(e,1<r?1-r:void 0)}function Zs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Os(){return!0}function km(){return!1}function Xt(e){function t(n,r,i,a,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(a):a[c]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Os:km,this.isPropagationStopped=km,this}return Ge(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Os)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Os)},persist:function(){},isPersistent:Os}),t}var xi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ip=Xt(xi),Za=Ge({},xi,{view:0,detail:0}),hw=Xt(Za),bc,xc,Wi,Xl=Ge({},Za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ap,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wi&&(Wi&&e.type==="mousemove"?(bc=e.screenX-Wi.screenX,xc=e.screenY-Wi.screenY):xc=bc=0,Wi=e),bc)},movementY:function(e){return"movementY"in e?e.movementY:xc}}),Cm=Xt(Xl),mw=Ge({},Xl,{dataTransfer:0}),_w=Xt(mw),vw=Ge({},Za,{relatedTarget:0}),wc=Xt(vw),gw=Ge({},xi,{animationName:0,elapsedTime:0,pseudoElement:0}),yw=Xt(gw),bw=Ge({},xi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xw=Xt(bw),ww=Ge({},xi,{data:0}),Pm=Xt(ww),Sw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Cw[e])?!!t[e]:!1}function ap(){return Pw}var Ew=Ge({},Za,{key:function(e){if(e.key){var t=Sw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ap,charCode:function(e){return e.type==="keypress"?Zs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ow=Xt(Ew),zw=Ge({},Xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Em=Xt(zw),Tw=Ge({},Za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ap}),Lw=Xt(Tw),Bw=Ge({},xi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rw=Xt(Bw),Iw=Ge({},Xl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nw=Xt(Iw),Dw=[9,13,27,32],sp=sr&&"CompositionEvent"in window,la=null;sr&&"documentMode"in document&&(la=document.documentMode);var Mw=sr&&"TextEvent"in window&&!la,dy=sr&&(!sp||la&&8<la&&11>=la),Om=String.fromCharCode(32),zm=!1;function fy(e,t){switch(e){case"keyup":return Dw.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function py(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zo=!1;function Fw(e,t){switch(e){case"compositionend":return py(t);case"keypress":return t.which!==32?null:(zm=!0,Om);case"textInput":return e=t.data,e===Om&&zm?null:e;default:return null}}function Aw(e,t){if(Zo)return e==="compositionend"||!sp&&fy(e,t)?(e=cy(),Ws=op=Er=null,Zo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return dy&&t.locale!=="ko"?null:t.data;default:return null}}var jw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!jw[e.type]:t==="textarea"}function hy(e,t,n,r){Zg(r),t=fl(t,"onChange"),0<t.length&&(n=new ip("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ua=null,Ca=null;function $w(e){Cy(e,0)}function Yl(e){var t=Ko(e);if(Fg(t))return e}function Uw(e,t){if(e==="change")return t}var my=!1;if(sr){var Sc;if(sr){var kc="oninput"in document;if(!kc){var Lm=document.createElement("div");Lm.setAttribute("oninput","return;"),kc=typeof Lm.oninput=="function"}Sc=kc}else Sc=!1;my=Sc&&(!document.documentMode||9<document.documentMode)}function Bm(){ua&&(ua.detachEvent("onpropertychange",_y),Ca=ua=null)}function _y(e){if(e.propertyName==="value"&&Yl(Ca)){var t=[];hy(t,Ca,e,Jf(e)),Qg($w,t)}}function Hw(e,t,n){e==="focusin"?(Bm(),ua=t,Ca=n,ua.attachEvent("onpropertychange",_y)):e==="focusout"&&Bm()}function Ww(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yl(Ca)}function Zw(e,t){if(e==="click")return Yl(t)}function Vw(e,t){if(e==="input"||e==="change")return Yl(t)}function qw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zn=typeof Object.is=="function"?Object.is:qw;function Pa(e,t){if(zn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!cd.call(t,i)||!zn(e[i],t[i]))return!1}return!0}function Rm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Im(e,t){var n=Rm(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rm(n)}}function vy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function gy(){for(var e=window,t=il();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=il(e.document)}return t}function lp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Kw(e){var t=gy(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&vy(n.ownerDocument.documentElement,n)){if(r!==null&&lp(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Im(n,a);var l=Im(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Qw=sr&&"documentMode"in document&&11>=document.documentMode,Vo=null,zd=null,ca=null,Td=!1;function Nm(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Td||Vo==null||Vo!==il(r)||(r=Vo,"selectionStart"in r&&lp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ca&&Pa(ca,r)||(ca=r,r=fl(zd,"onSelect"),0<r.length&&(t=new ip("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vo)))}function zs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var qo={animationend:zs("Animation","AnimationEnd"),animationiteration:zs("Animation","AnimationIteration"),animationstart:zs("Animation","AnimationStart"),transitionend:zs("Transition","TransitionEnd")},Cc={},yy={};sr&&(yy=document.createElement("div").style,"AnimationEvent"in window||(delete qo.animationend.animation,delete qo.animationiteration.animation,delete qo.animationstart.animation),"TransitionEvent"in window||delete qo.transitionend.transition);function Jl(e){if(Cc[e])return Cc[e];if(!qo[e])return e;var t=qo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in yy)return Cc[e]=t[n];return e}var by=Jl("animationend"),xy=Jl("animationiteration"),wy=Jl("animationstart"),Sy=Jl("transitionend"),ky=new Map,Dm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vr(e,t){ky.set(e,t),Eo(t,[e])}for(var Pc=0;Pc<Dm.length;Pc++){var Ec=Dm[Pc],Gw=Ec.toLowerCase(),Xw=Ec[0].toUpperCase()+Ec.slice(1);Vr(Gw,"on"+Xw)}Vr(by,"onAnimationEnd");Vr(xy,"onAnimationIteration");Vr(wy,"onAnimationStart");Vr("dblclick","onDoubleClick");Vr("focusin","onFocus");Vr("focusout","onBlur");Vr(Sy,"onTransitionEnd");fi("onMouseEnter",["mouseout","mouseover"]);fi("onMouseLeave",["mouseout","mouseover"]);fi("onPointerEnter",["pointerout","pointerover"]);fi("onPointerLeave",["pointerout","pointerover"]);Eo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Eo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Eo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Eo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Eo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Eo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yw=new Set("cancel close invalid load scroll toggle".split(" ").concat(na));function Mm(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,G1(r,t,void 0,e),e.currentTarget=null}function Cy(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var l=r.length-1;0<=l;l--){var c=r[l],d=c.instance,p=c.currentTarget;if(c=c.listener,d!==a&&i.isPropagationStopped())break e;Mm(i,c,p),a=d}else for(l=0;l<r.length;l++){if(c=r[l],d=c.instance,p=c.currentTarget,c=c.listener,d!==a&&i.isPropagationStopped())break e;Mm(i,c,p),a=d}}}if(sl)throw e=Cd,sl=!1,Cd=null,e}function je(e,t){var n=t[Nd];n===void 0&&(n=t[Nd]=new Set);var r=e+"__bubble";n.has(r)||(Py(t,e,2,!1),n.add(r))}function Oc(e,t,n){var r=0;t&&(r|=4),Py(n,e,r,t)}var Ts="_reactListening"+Math.random().toString(36).slice(2);function Ea(e){if(!e[Ts]){e[Ts]=!0,Rg.forEach(function(n){n!=="selectionchange"&&(Yw.has(n)||Oc(n,!1,e),Oc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ts]||(t[Ts]=!0,Oc("selectionchange",!1,t))}}function Py(e,t,n,r){switch(uy(t)){case 1:var i=fw;break;case 4:i=pw;break;default:i=rp}n=i.bind(null,t,n,e),i=void 0,!kd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function zc(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var c=r.stateNode.containerInfo;if(c===i||c.nodeType===8&&c.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;l=l.return}for(;c!==null;){if(l=uo(c),l===null)return;if(d=l.tag,d===5||d===6){r=a=l;continue e}c=c.parentNode}}r=r.return}Qg(function(){var p=a,_=Jf(n),v=[];e:{var m=ky.get(e);if(m!==void 0){var y=ip,w=e;switch(e){case"keypress":if(Zs(n)===0)break e;case"keydown":case"keyup":y=Ow;break;case"focusin":w="focus",y=wc;break;case"focusout":w="blur",y=wc;break;case"beforeblur":case"afterblur":y=wc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Cm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=_w;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Lw;break;case by:case xy:case wy:y=yw;break;case Sy:y=Rw;break;case"scroll":y=hw;break;case"wheel":y=Nw;break;case"copy":case"cut":case"paste":y=xw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Em}var S=(t&4)!==0,O=!S&&e==="scroll",b=S?m!==null?m+"Capture":null:m;S=[];for(var g=p,k;g!==null;){k=g;var E=k.stateNode;if(k.tag===5&&E!==null&&(k=E,b!==null&&(E=xa(g,b),E!=null&&S.push(Oa(g,E,k)))),O)break;g=g.return}0<S.length&&(m=new y(m,w,null,n,_),v.push({event:m,listeners:S}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&n!==wd&&(w=n.relatedTarget||n.fromElement)&&(uo(w)||w[lr]))break e;if((y||m)&&(m=_.window===_?_:(m=_.ownerDocument)?m.defaultView||m.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=p,w=w?uo(w):null,w!==null&&(O=Oo(w),w!==O||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=p),y!==w)){if(S=Cm,E="onMouseLeave",b="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(S=Em,E="onPointerLeave",b="onPointerEnter",g="pointer"),O=y==null?m:Ko(y),k=w==null?m:Ko(w),m=new S(E,g+"leave",y,n,_),m.target=O,m.relatedTarget=k,E=null,uo(_)===p&&(S=new S(b,g+"enter",w,n,_),S.target=k,S.relatedTarget=O,E=S),O=E,y&&w)t:{for(S=y,b=w,g=0,k=S;k;k=Fo(k))g++;for(k=0,E=b;E;E=Fo(E))k++;for(;0<g-k;)S=Fo(S),g--;for(;0<k-g;)b=Fo(b),k--;for(;g--;){if(S===b||b!==null&&S===b.alternate)break t;S=Fo(S),b=Fo(b)}S=null}else S=null;y!==null&&Fm(v,m,y,S,!1),w!==null&&O!==null&&Fm(v,O,w,S,!0)}}e:{if(m=p?Ko(p):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var D=Uw;else if(Tm(m))if(my)D=Vw;else{D=Ww;var F=Hw}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(D=Zw);if(D&&(D=D(e,p))){hy(v,D,n,_);break e}F&&F(e,m,p),e==="focusout"&&(F=m._wrapperState)&&F.controlled&&m.type==="number"&&vd(m,"number",m.value)}switch(F=p?Ko(p):window,e){case"focusin":(Tm(F)||F.contentEditable==="true")&&(Vo=F,zd=p,ca=null);break;case"focusout":ca=zd=Vo=null;break;case"mousedown":Td=!0;break;case"contextmenu":case"mouseup":case"dragend":Td=!1,Nm(v,n,_);break;case"selectionchange":if(Qw)break;case"keydown":case"keyup":Nm(v,n,_)}var W;if(sp)e:{switch(e){case"compositionstart":var K="onCompositionStart";break e;case"compositionend":K="onCompositionEnd";break e;case"compositionupdate":K="onCompositionUpdate";break e}K=void 0}else Zo?fy(e,n)&&(K="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(K="onCompositionStart");K&&(dy&&n.locale!=="ko"&&(Zo||K!=="onCompositionStart"?K==="onCompositionEnd"&&Zo&&(W=cy()):(Er=_,op="value"in Er?Er.value:Er.textContent,Zo=!0)),F=fl(p,K),0<F.length&&(K=new Pm(K,e,null,n,_),v.push({event:K,listeners:F}),W?K.data=W:(W=py(n),W!==null&&(K.data=W)))),(W=Mw?Fw(e,n):Aw(e,n))&&(p=fl(p,"onBeforeInput"),0<p.length&&(_=new Pm("onBeforeInput","beforeinput",null,n,_),v.push({event:_,listeners:p}),_.data=W))}Cy(v,t)})}function Oa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function fl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=xa(e,n),a!=null&&r.unshift(Oa(e,a,i)),a=xa(e,t),a!=null&&r.push(Oa(e,a,i))),e=e.return}return r}function Fo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Fm(e,t,n,r,i){for(var a=t._reactName,l=[];n!==null&&n!==r;){var c=n,d=c.alternate,p=c.stateNode;if(d!==null&&d===r)break;c.tag===5&&p!==null&&(c=p,i?(d=xa(n,a),d!=null&&l.unshift(Oa(n,d,c))):i||(d=xa(n,a),d!=null&&l.push(Oa(n,d,c)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Jw=/\r\n?/g,eS=/\u0000|\uFFFD/g;function Am(e){return(typeof e=="string"?e:""+e).replace(Jw,`
`).replace(eS,"")}function Ls(e,t,n){if(t=Am(t),Am(e)!==t&&n)throw Error(V(425))}function pl(){}var Ld=null,Bd=null;function Rd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Id=typeof setTimeout=="function"?setTimeout:void 0,tS=typeof clearTimeout=="function"?clearTimeout:void 0,jm=typeof Promise=="function"?Promise:void 0,nS=typeof queueMicrotask=="function"?queueMicrotask:typeof jm<"u"?function(e){return jm.resolve(null).then(e).catch(rS)}:Id;function rS(e){setTimeout(function(){throw e})}function Tc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ka(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ka(t)}function Rr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $m(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wi=Math.random().toString(36).slice(2),Hn="__reactFiber$"+wi,za="__reactProps$"+wi,lr="__reactContainer$"+wi,Nd="__reactEvents$"+wi,oS="__reactListeners$"+wi,iS="__reactHandles$"+wi;function uo(e){var t=e[Hn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[lr]||n[Hn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$m(e);e!==null;){if(n=e[Hn])return n;e=$m(e)}return t}e=n,n=e.parentNode}return null}function Va(e){return e=e[Hn]||e[lr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ko(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(V(33))}function eu(e){return e[za]||null}var Dd=[],Qo=-1;function qr(e){return{current:e}}function $e(e){0>Qo||(e.current=Dd[Qo],Dd[Qo]=null,Qo--)}function Ae(e,t){Qo++,Dd[Qo]=e.current,e.current=t}var Ur={},Et=qr(Ur),$t=qr(!1),bo=Ur;function pi(e,t){var n=e.type.contextTypes;if(!n)return Ur;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ut(e){return e=e.childContextTypes,e!=null}function hl(){$e($t),$e(Et)}function Um(e,t,n){if(Et.current!==Ur)throw Error(V(168));Ae(Et,t),Ae($t,n)}function Ey(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(V(108,H1(e)||"Unknown",i));return Ge({},n,r)}function ml(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ur,bo=Et.current,Ae(Et,e),Ae($t,$t.current),!0}function Hm(e,t,n){var r=e.stateNode;if(!r)throw Error(V(169));n?(e=Ey(e,t,bo),r.__reactInternalMemoizedMergedChildContext=e,$e($t),$e(Et),Ae(Et,e)):$e($t),Ae($t,n)}var nr=null,tu=!1,Lc=!1;function Oy(e){nr===null?nr=[e]:nr.push(e)}function aS(e){tu=!0,Oy(e)}function Kr(){if(!Lc&&nr!==null){Lc=!0;var e=0,t=Le;try{var n=nr;for(Le=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}nr=null,tu=!1}catch(i){throw nr!==null&&(nr=nr.slice(e+1)),Jg(ep,Kr),i}finally{Le=t,Lc=!1}}return null}var Go=[],Xo=0,_l=null,vl=0,an=[],sn=0,xo=null,rr=1,or="";function io(e,t){Go[Xo++]=vl,Go[Xo++]=_l,_l=e,vl=t}function zy(e,t,n){an[sn++]=rr,an[sn++]=or,an[sn++]=xo,xo=e;var r=rr;e=or;var i=32-Pn(r)-1;r&=~(1<<i),n+=1;var a=32-Pn(t)+i;if(30<a){var l=i-i%5;a=(r&(1<<l)-1).toString(32),r>>=l,i-=l,rr=1<<32-Pn(t)+i|n<<i|r,or=a+e}else rr=1<<a|n<<i|r,or=e}function up(e){e.return!==null&&(io(e,1),zy(e,1,0))}function cp(e){for(;e===_l;)_l=Go[--Xo],Go[Xo]=null,vl=Go[--Xo],Go[Xo]=null;for(;e===xo;)xo=an[--sn],an[sn]=null,or=an[--sn],an[sn]=null,rr=an[--sn],an[sn]=null}var qt=null,Vt=null,Ve=!1,kn=null;function Ty(e,t){var n=ln(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Wm(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qt=e,Vt=Rr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qt=e,Vt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=xo!==null?{id:rr,overflow:or}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ln(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,qt=e,Vt=null,!0):!1;default:return!1}}function Md(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Fd(e){if(Ve){var t=Vt;if(t){var n=t;if(!Wm(e,t)){if(Md(e))throw Error(V(418));t=Rr(n.nextSibling);var r=qt;t&&Wm(e,t)?Ty(r,n):(e.flags=e.flags&-4097|2,Ve=!1,qt=e)}}else{if(Md(e))throw Error(V(418));e.flags=e.flags&-4097|2,Ve=!1,qt=e}}}function Zm(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qt=e}function Bs(e){if(e!==qt)return!1;if(!Ve)return Zm(e),Ve=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Rd(e.type,e.memoizedProps)),t&&(t=Vt)){if(Md(e))throw Ly(),Error(V(418));for(;t;)Ty(e,t),t=Rr(t.nextSibling)}if(Zm(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Vt=Rr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Vt=null}}else Vt=qt?Rr(e.stateNode.nextSibling):null;return!0}function Ly(){for(var e=Vt;e;)e=Rr(e.nextSibling)}function hi(){Vt=qt=null,Ve=!1}function dp(e){kn===null?kn=[e]:kn.push(e)}var sS=fr.ReactCurrentBatchConfig;function wn(e,t){if(e&&e.defaultProps){t=Ge({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var gl=qr(null),yl=null,Yo=null,fp=null;function pp(){fp=Yo=yl=null}function hp(e){var t=gl.current;$e(gl),e._currentValue=t}function Ad(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ai(e,t){yl=e,fp=Yo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(jt=!0),e.firstContext=null)}function fn(e){var t=e._currentValue;if(fp!==e)if(e={context:e,memoizedValue:t,next:null},Yo===null){if(yl===null)throw Error(V(308));Yo=e,yl.dependencies={lanes:0,firstContext:e}}else Yo=Yo.next=e;return t}var co=null;function mp(e){co===null?co=[e]:co.push(e)}function By(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,mp(t)):(n.next=i.next,i.next=n),t.interleaved=n,ur(e,r)}function ur(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var wr=!1;function _p(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ry(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ir(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ir(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ke&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ur(e,n)}return i=r.interleaved,i===null?(t.next=t,mp(r)):(t.next=i.next,i.next=t),r.interleaved=t,ur(e,n)}function Vs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tp(e,n)}}function Vm(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=l:a=a.next=l,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function bl(e,t,n,r){var i=e.updateQueue;wr=!1;var a=i.firstBaseUpdate,l=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var d=c,p=d.next;d.next=null,l===null?a=p:l.next=p,l=d;var _=e.alternate;_!==null&&(_=_.updateQueue,c=_.lastBaseUpdate,c!==l&&(c===null?_.firstBaseUpdate=p:c.next=p,_.lastBaseUpdate=d))}if(a!==null){var v=i.baseState;l=0,_=p=d=null,c=a;do{var m=c.lane,y=c.eventTime;if((r&m)===m){_!==null&&(_=_.next={eventTime:y,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var w=e,S=c;switch(m=t,y=n,S.tag){case 1:if(w=S.payload,typeof w=="function"){v=w.call(y,v,m);break e}v=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=S.payload,m=typeof w=="function"?w.call(y,v,m):w,m==null)break e;v=Ge({},v,m);break e;case 2:wr=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[c]:m.push(c))}else y={eventTime:y,lane:m,tag:c.tag,payload:c.payload,callback:c.callback,next:null},_===null?(p=_=y,d=v):_=_.next=y,l|=m;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;m=c,c=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(_===null&&(d=v),i.baseState=d,i.firstBaseUpdate=p,i.lastBaseUpdate=_,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);So|=l,e.lanes=l,e.memoizedState=v}}function qm(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(V(191,i));i.call(r)}}}var Iy=new Bg.Component().refs;function jd(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ge({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var nu={isMounted:function(e){return(e=e._reactInternals)?Oo(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Rt(),i=Dr(e),a=ir(r,i);a.payload=t,n!=null&&(a.callback=n),t=Ir(e,a,i),t!==null&&(En(t,e,i,r),Vs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Rt(),i=Dr(e),a=ir(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Ir(e,a,i),t!==null&&(En(t,e,i,r),Vs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Rt(),r=Dr(e),i=ir(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ir(e,i,r),t!==null&&(En(t,e,r,n),Vs(t,e,r))}};function Km(e,t,n,r,i,a,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,l):t.prototype&&t.prototype.isPureReactComponent?!Pa(n,r)||!Pa(i,a):!0}function Ny(e,t,n){var r=!1,i=Ur,a=t.contextType;return typeof a=="object"&&a!==null?a=fn(a):(i=Ut(t)?bo:Et.current,r=t.contextTypes,a=(r=r!=null)?pi(e,i):Ur),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=nu,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Qm(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&nu.enqueueReplaceState(t,t.state,null)}function $d(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Iy,_p(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=fn(a):(a=Ut(t)?bo:Et.current,i.context=pi(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(jd(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&nu.enqueueReplaceState(i,i.state,null),bl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Zi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(V(309));var r=n.stateNode}if(!r)throw Error(V(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(l){var c=i.refs;c===Iy&&(c=i.refs={}),l===null?delete c[a]:c[a]=l},t._stringRef=a,t)}if(typeof e!="string")throw Error(V(284));if(!n._owner)throw Error(V(290,e))}return e}function Rs(e,t){throw e=Object.prototype.toString.call(t),Error(V(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Gm(e){var t=e._init;return t(e._payload)}function Dy(e){function t(b,g){if(e){var k=b.deletions;k===null?(b.deletions=[g],b.flags|=16):k.push(g)}}function n(b,g){if(!e)return null;for(;g!==null;)t(b,g),g=g.sibling;return null}function r(b,g){for(b=new Map;g!==null;)g.key!==null?b.set(g.key,g):b.set(g.index,g),g=g.sibling;return b}function i(b,g){return b=Mr(b,g),b.index=0,b.sibling=null,b}function a(b,g,k){return b.index=k,e?(k=b.alternate,k!==null?(k=k.index,k<g?(b.flags|=2,g):k):(b.flags|=2,g)):(b.flags|=1048576,g)}function l(b){return e&&b.alternate===null&&(b.flags|=2),b}function c(b,g,k,E){return g===null||g.tag!==6?(g=Fc(k,b.mode,E),g.return=b,g):(g=i(g,k),g.return=b,g)}function d(b,g,k,E){var D=k.type;return D===Wo?_(b,g,k.props.children,E,k.key):g!==null&&(g.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===xr&&Gm(D)===g.type)?(E=i(g,k.props),E.ref=Zi(b,g,k),E.return=b,E):(E=Ys(k.type,k.key,k.props,null,b.mode,E),E.ref=Zi(b,g,k),E.return=b,E)}function p(b,g,k,E){return g===null||g.tag!==4||g.stateNode.containerInfo!==k.containerInfo||g.stateNode.implementation!==k.implementation?(g=Ac(k,b.mode,E),g.return=b,g):(g=i(g,k.children||[]),g.return=b,g)}function _(b,g,k,E,D){return g===null||g.tag!==7?(g=_o(k,b.mode,E,D),g.return=b,g):(g=i(g,k),g.return=b,g)}function v(b,g,k){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Fc(""+g,b.mode,k),g.return=b,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ws:return k=Ys(g.type,g.key,g.props,null,b.mode,k),k.ref=Zi(b,null,g),k.return=b,k;case Ho:return g=Ac(g,b.mode,k),g.return=b,g;case xr:var E=g._init;return v(b,E(g._payload),k)}if(ea(g)||ji(g))return g=_o(g,b.mode,k,null),g.return=b,g;Rs(b,g)}return null}function m(b,g,k,E){var D=g!==null?g.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return D!==null?null:c(b,g,""+k,E);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case ws:return k.key===D?d(b,g,k,E):null;case Ho:return k.key===D?p(b,g,k,E):null;case xr:return D=k._init,m(b,g,D(k._payload),E)}if(ea(k)||ji(k))return D!==null?null:_(b,g,k,E,null);Rs(b,k)}return null}function y(b,g,k,E,D){if(typeof E=="string"&&E!==""||typeof E=="number")return b=b.get(k)||null,c(g,b,""+E,D);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ws:return b=b.get(E.key===null?k:E.key)||null,d(g,b,E,D);case Ho:return b=b.get(E.key===null?k:E.key)||null,p(g,b,E,D);case xr:var F=E._init;return y(b,g,k,F(E._payload),D)}if(ea(E)||ji(E))return b=b.get(k)||null,_(g,b,E,D,null);Rs(g,E)}return null}function w(b,g,k,E){for(var D=null,F=null,W=g,K=g=0,ee=null;W!==null&&K<k.length;K++){W.index>K?(ee=W,W=null):ee=W.sibling;var q=m(b,W,k[K],E);if(q===null){W===null&&(W=ee);break}e&&W&&q.alternate===null&&t(b,W),g=a(q,g,K),F===null?D=q:F.sibling=q,F=q,W=ee}if(K===k.length)return n(b,W),Ve&&io(b,K),D;if(W===null){for(;K<k.length;K++)W=v(b,k[K],E),W!==null&&(g=a(W,g,K),F===null?D=W:F.sibling=W,F=W);return Ve&&io(b,K),D}for(W=r(b,W);K<k.length;K++)ee=y(W,b,K,k[K],E),ee!==null&&(e&&ee.alternate!==null&&W.delete(ee.key===null?K:ee.key),g=a(ee,g,K),F===null?D=ee:F.sibling=ee,F=ee);return e&&W.forEach(function(le){return t(b,le)}),Ve&&io(b,K),D}function S(b,g,k,E){var D=ji(k);if(typeof D!="function")throw Error(V(150));if(k=D.call(k),k==null)throw Error(V(151));for(var F=D=null,W=g,K=g=0,ee=null,q=k.next();W!==null&&!q.done;K++,q=k.next()){W.index>K?(ee=W,W=null):ee=W.sibling;var le=m(b,W,q.value,E);if(le===null){W===null&&(W=ee);break}e&&W&&le.alternate===null&&t(b,W),g=a(le,g,K),F===null?D=le:F.sibling=le,F=le,W=ee}if(q.done)return n(b,W),Ve&&io(b,K),D;if(W===null){for(;!q.done;K++,q=k.next())q=v(b,q.value,E),q!==null&&(g=a(q,g,K),F===null?D=q:F.sibling=q,F=q);return Ve&&io(b,K),D}for(W=r(b,W);!q.done;K++,q=k.next())q=y(W,b,K,q.value,E),q!==null&&(e&&q.alternate!==null&&W.delete(q.key===null?K:q.key),g=a(q,g,K),F===null?D=q:F.sibling=q,F=q);return e&&W.forEach(function(he){return t(b,he)}),Ve&&io(b,K),D}function O(b,g,k,E){if(typeof k=="object"&&k!==null&&k.type===Wo&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case ws:e:{for(var D=k.key,F=g;F!==null;){if(F.key===D){if(D=k.type,D===Wo){if(F.tag===7){n(b,F.sibling),g=i(F,k.props.children),g.return=b,b=g;break e}}else if(F.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===xr&&Gm(D)===F.type){n(b,F.sibling),g=i(F,k.props),g.ref=Zi(b,F,k),g.return=b,b=g;break e}n(b,F);break}else t(b,F);F=F.sibling}k.type===Wo?(g=_o(k.props.children,b.mode,E,k.key),g.return=b,b=g):(E=Ys(k.type,k.key,k.props,null,b.mode,E),E.ref=Zi(b,g,k),E.return=b,b=E)}return l(b);case Ho:e:{for(F=k.key;g!==null;){if(g.key===F)if(g.tag===4&&g.stateNode.containerInfo===k.containerInfo&&g.stateNode.implementation===k.implementation){n(b,g.sibling),g=i(g,k.children||[]),g.return=b,b=g;break e}else{n(b,g);break}else t(b,g);g=g.sibling}g=Ac(k,b.mode,E),g.return=b,b=g}return l(b);case xr:return F=k._init,O(b,g,F(k._payload),E)}if(ea(k))return w(b,g,k,E);if(ji(k))return S(b,g,k,E);Rs(b,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,g!==null&&g.tag===6?(n(b,g.sibling),g=i(g,k),g.return=b,b=g):(n(b,g),g=Fc(k,b.mode,E),g.return=b,b=g),l(b)):n(b,g)}return O}var mi=Dy(!0),My=Dy(!1),qa={},Vn=qr(qa),Ta=qr(qa),La=qr(qa);function fo(e){if(e===qa)throw Error(V(174));return e}function vp(e,t){switch(Ae(La,t),Ae(Ta,e),Ae(Vn,qa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:yd(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=yd(t,e)}$e(Vn),Ae(Vn,t)}function _i(){$e(Vn),$e(Ta),$e(La)}function Fy(e){fo(La.current);var t=fo(Vn.current),n=yd(t,e.type);t!==n&&(Ae(Ta,e),Ae(Vn,n))}function gp(e){Ta.current===e&&($e(Vn),$e(Ta))}var Ke=qr(0);function xl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Bc=[];function yp(){for(var e=0;e<Bc.length;e++)Bc[e]._workInProgressVersionPrimary=null;Bc.length=0}var qs=fr.ReactCurrentDispatcher,Rc=fr.ReactCurrentBatchConfig,wo=0,Qe=null,ct=null,ft=null,wl=!1,da=!1,Ba=0,lS=0;function xt(){throw Error(V(321))}function bp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zn(e[n],t[n]))return!1;return!0}function xp(e,t,n,r,i,a){if(wo=a,Qe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qs.current=e===null||e.memoizedState===null?fS:pS,e=n(r,i),da){a=0;do{if(da=!1,Ba=0,25<=a)throw Error(V(301));a+=1,ft=ct=null,t.updateQueue=null,qs.current=hS,e=n(r,i)}while(da)}if(qs.current=Sl,t=ct!==null&&ct.next!==null,wo=0,ft=ct=Qe=null,wl=!1,t)throw Error(V(300));return e}function wp(){var e=Ba!==0;return Ba=0,e}function Un(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ft===null?Qe.memoizedState=ft=e:ft=ft.next=e,ft}function pn(){if(ct===null){var e=Qe.alternate;e=e!==null?e.memoizedState:null}else e=ct.next;var t=ft===null?Qe.memoizedState:ft.next;if(t!==null)ft=t,ct=e;else{if(e===null)throw Error(V(310));ct=e,e={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},ft===null?Qe.memoizedState=ft=e:ft=ft.next=e}return ft}function Ra(e,t){return typeof t=="function"?t(e):t}function Ic(e){var t=pn(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=ct,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var l=i.next;i.next=a.next,a.next=l}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var c=l=null,d=null,p=a;do{var _=p.lane;if((wo&_)===_)d!==null&&(d=d.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var v={lane:_,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};d===null?(c=d=v,l=r):d=d.next=v,Qe.lanes|=_,So|=_}p=p.next}while(p!==null&&p!==a);d===null?l=r:d.next=c,zn(r,t.memoizedState)||(jt=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,Qe.lanes|=a,So|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Nc(e){var t=pn(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do a=e(a,l.action),l=l.next;while(l!==i);zn(a,t.memoizedState)||(jt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Ay(){}function jy(e,t){var n=Qe,r=pn(),i=t(),a=!zn(r.memoizedState,i);if(a&&(r.memoizedState=i,jt=!0),r=r.queue,Sp(Hy.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||ft!==null&&ft.memoizedState.tag&1){if(n.flags|=2048,Ia(9,Uy.bind(null,n,r,i,t),void 0,null),pt===null)throw Error(V(349));wo&30||$y(n,t,i)}return i}function $y(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Qe.updateQueue,t===null?(t={lastEffect:null,stores:null},Qe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Uy(e,t,n,r){t.value=n,t.getSnapshot=r,Wy(t)&&Zy(e)}function Hy(e,t,n){return n(function(){Wy(t)&&Zy(e)})}function Wy(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zn(e,n)}catch{return!0}}function Zy(e){var t=ur(e,1);t!==null&&En(t,e,1,-1)}function Xm(e){var t=Un();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:e},t.queue=e,e=e.dispatch=dS.bind(null,Qe,e),[t.memoizedState,e]}function Ia(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Qe.updateQueue,t===null?(t={lastEffect:null,stores:null},Qe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Vy(){return pn().memoizedState}function Ks(e,t,n,r){var i=Un();Qe.flags|=e,i.memoizedState=Ia(1|t,n,void 0,r===void 0?null:r)}function ru(e,t,n,r){var i=pn();r=r===void 0?null:r;var a=void 0;if(ct!==null){var l=ct.memoizedState;if(a=l.destroy,r!==null&&bp(r,l.deps)){i.memoizedState=Ia(t,n,a,r);return}}Qe.flags|=e,i.memoizedState=Ia(1|t,n,a,r)}function Ym(e,t){return Ks(8390656,8,e,t)}function Sp(e,t){return ru(2048,8,e,t)}function qy(e,t){return ru(4,2,e,t)}function Ky(e,t){return ru(4,4,e,t)}function Qy(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gy(e,t,n){return n=n!=null?n.concat([e]):null,ru(4,4,Qy.bind(null,t,e),n)}function kp(){}function Xy(e,t){var n=pn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&bp(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Yy(e,t){var n=pn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&bp(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Jy(e,t,n){return wo&21?(zn(n,t)||(n=ny(),Qe.lanes|=n,So|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,jt=!0),e.memoizedState=n)}function uS(e,t){var n=Le;Le=n!==0&&4>n?n:4,e(!0);var r=Rc.transition;Rc.transition={};try{e(!1),t()}finally{Le=n,Rc.transition=r}}function e0(){return pn().memoizedState}function cS(e,t,n){var r=Dr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},t0(e))n0(t,n);else if(n=By(e,t,n,r),n!==null){var i=Rt();En(n,e,r,i),r0(n,t,r)}}function dS(e,t,n){var r=Dr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(t0(e))n0(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var l=t.lastRenderedState,c=a(l,n);if(i.hasEagerState=!0,i.eagerState=c,zn(c,l)){var d=t.interleaved;d===null?(i.next=i,mp(t)):(i.next=d.next,d.next=i),t.interleaved=i;return}}catch{}finally{}n=By(e,t,i,r),n!==null&&(i=Rt(),En(n,e,r,i),r0(n,t,r))}}function t0(e){var t=e.alternate;return e===Qe||t!==null&&t===Qe}function n0(e,t){da=wl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function r0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tp(e,n)}}var Sl={readContext:fn,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useInsertionEffect:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useSyncExternalStore:xt,useId:xt,unstable_isNewReconciler:!1},fS={readContext:fn,useCallback:function(e,t){return Un().memoizedState=[e,t===void 0?null:t],e},useContext:fn,useEffect:Ym,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ks(4194308,4,Qy.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ks(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ks(4,2,e,t)},useMemo:function(e,t){var n=Un();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Un();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=cS.bind(null,Qe,e),[r.memoizedState,e]},useRef:function(e){var t=Un();return e={current:e},t.memoizedState=e},useState:Xm,useDebugValue:kp,useDeferredValue:function(e){return Un().memoizedState=e},useTransition:function(){var e=Xm(!1),t=e[0];return e=uS.bind(null,e[1]),Un().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Qe,i=Un();if(Ve){if(n===void 0)throw Error(V(407));n=n()}else{if(n=t(),pt===null)throw Error(V(349));wo&30||$y(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Ym(Hy.bind(null,r,a,e),[e]),r.flags|=2048,Ia(9,Uy.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Un(),t=pt.identifierPrefix;if(Ve){var n=or,r=rr;n=(r&~(1<<32-Pn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ba++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=lS++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},pS={readContext:fn,useCallback:Xy,useContext:fn,useEffect:Sp,useImperativeHandle:Gy,useInsertionEffect:qy,useLayoutEffect:Ky,useMemo:Yy,useReducer:Ic,useRef:Vy,useState:function(){return Ic(Ra)},useDebugValue:kp,useDeferredValue:function(e){var t=pn();return Jy(t,ct.memoizedState,e)},useTransition:function(){var e=Ic(Ra)[0],t=pn().memoizedState;return[e,t]},useMutableSource:Ay,useSyncExternalStore:jy,useId:e0,unstable_isNewReconciler:!1},hS={readContext:fn,useCallback:Xy,useContext:fn,useEffect:Sp,useImperativeHandle:Gy,useInsertionEffect:qy,useLayoutEffect:Ky,useMemo:Yy,useReducer:Nc,useRef:Vy,useState:function(){return Nc(Ra)},useDebugValue:kp,useDeferredValue:function(e){var t=pn();return ct===null?t.memoizedState=e:Jy(t,ct.memoizedState,e)},useTransition:function(){var e=Nc(Ra)[0],t=pn().memoizedState;return[e,t]},useMutableSource:Ay,useSyncExternalStore:jy,useId:e0,unstable_isNewReconciler:!1};function vi(e,t){try{var n="",r=t;do n+=U1(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Dc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ud(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var mS=typeof WeakMap=="function"?WeakMap:Map;function o0(e,t,n){n=ir(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Cl||(Cl=!0,Yd=r),Ud(e,t)},n}function i0(e,t,n){n=ir(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ud(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Ud(e,t),typeof r!="function"&&(Nr===null?Nr=new Set([this]):Nr.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Jm(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new mS;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=zS.bind(null,e,t,n),t.then(e,e))}function e_(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function t_(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ir(-1,1),t.tag=2,Ir(n,t,1))),n.lanes|=1),e)}var _S=fr.ReactCurrentOwner,jt=!1;function Bt(e,t,n,r){t.child=e===null?My(t,null,n,r):mi(t,e.child,n,r)}function n_(e,t,n,r,i){n=n.render;var a=t.ref;return ai(t,i),r=xp(e,t,n,r,a,i),n=wp(),e!==null&&!jt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,cr(e,t,i)):(Ve&&n&&up(t),t.flags|=1,Bt(e,t,r,i),t.child)}function r_(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!Bp(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,a0(e,t,a,r,i)):(e=Ys(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var l=a.memoizedProps;if(n=n.compare,n=n!==null?n:Pa,n(l,r)&&e.ref===t.ref)return cr(e,t,i)}return t.flags|=1,e=Mr(a,r),e.ref=t.ref,e.return=t,t.child=e}function a0(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Pa(a,r)&&e.ref===t.ref)if(jt=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(jt=!0);else return t.lanes=e.lanes,cr(e,t,i)}return Hd(e,t,n,r,i)}function s0(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ae(ei,Zt),Zt|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ae(ei,Zt),Zt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,Ae(ei,Zt),Zt|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,Ae(ei,Zt),Zt|=r;return Bt(e,t,i,n),t.child}function l0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Hd(e,t,n,r,i){var a=Ut(n)?bo:Et.current;return a=pi(t,a),ai(t,i),n=xp(e,t,n,r,a,i),r=wp(),e!==null&&!jt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,cr(e,t,i)):(Ve&&r&&up(t),t.flags|=1,Bt(e,t,n,i),t.child)}function o_(e,t,n,r,i){if(Ut(n)){var a=!0;ml(t)}else a=!1;if(ai(t,i),t.stateNode===null)Qs(e,t),Ny(t,n,r),$d(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,c=t.memoizedProps;l.props=c;var d=l.context,p=n.contextType;typeof p=="object"&&p!==null?p=fn(p):(p=Ut(n)?bo:Et.current,p=pi(t,p));var _=n.getDerivedStateFromProps,v=typeof _=="function"||typeof l.getSnapshotBeforeUpdate=="function";v||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==r||d!==p)&&Qm(t,l,r,p),wr=!1;var m=t.memoizedState;l.state=m,bl(t,r,l,i),d=t.memoizedState,c!==r||m!==d||$t.current||wr?(typeof _=="function"&&(jd(t,n,_,r),d=t.memoizedState),(c=wr||Km(t,n,c,r,m,d,p))?(v||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),l.props=r,l.state=d,l.context=p,r=c):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Ry(e,t),c=t.memoizedProps,p=t.type===t.elementType?c:wn(t.type,c),l.props=p,v=t.pendingProps,m=l.context,d=n.contextType,typeof d=="object"&&d!==null?d=fn(d):(d=Ut(n)?bo:Et.current,d=pi(t,d));var y=n.getDerivedStateFromProps;(_=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==v||m!==d)&&Qm(t,l,r,d),wr=!1,m=t.memoizedState,l.state=m,bl(t,r,l,i);var w=t.memoizedState;c!==v||m!==w||$t.current||wr?(typeof y=="function"&&(jd(t,n,y,r),w=t.memoizedState),(p=wr||Km(t,n,p,r,m,w,d)||!1)?(_||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,d)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=d,r=p):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Wd(e,t,n,r,a,i)}function Wd(e,t,n,r,i,a){l0(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Hm(t,n,!1),cr(e,t,a);r=t.stateNode,_S.current=t;var c=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=mi(t,e.child,null,a),t.child=mi(t,null,c,a)):Bt(e,t,c,a),t.memoizedState=r.state,i&&Hm(t,n,!0),t.child}function u0(e){var t=e.stateNode;t.pendingContext?Um(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Um(e,t.context,!1),vp(e,t.containerInfo)}function i_(e,t,n,r,i){return hi(),dp(i),t.flags|=256,Bt(e,t,n,r),t.child}var Zd={dehydrated:null,treeContext:null,retryLane:0};function Vd(e){return{baseLanes:e,cachePool:null,transitions:null}}function c0(e,t,n){var r=t.pendingProps,i=Ke.current,a=!1,l=(t.flags&128)!==0,c;if((c=l)||(c=e!==null&&e.memoizedState===null?!1:(i&2)!==0),c?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ae(Ke,i&1),e===null)return Fd(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,a?(r=t.mode,a=t.child,l={mode:"hidden",children:l},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=l):a=au(l,r,0,null),e=_o(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Vd(n),t.memoizedState=Zd,e):Cp(t,l));if(i=e.memoizedState,i!==null&&(c=i.dehydrated,c!==null))return vS(e,t,l,r,c,i,n);if(a){a=r.fallback,l=t.mode,i=e.child,c=i.sibling;var d={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=Mr(i,d),r.subtreeFlags=i.subtreeFlags&14680064),c!==null?a=Mr(c,a):(a=_o(a,l,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,l=e.child.memoizedState,l=l===null?Vd(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~n,t.memoizedState=Zd,r}return a=e.child,e=a.sibling,r=Mr(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Cp(e,t){return t=au({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Is(e,t,n,r){return r!==null&&dp(r),mi(t,e.child,null,n),e=Cp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vS(e,t,n,r,i,a,l){if(n)return t.flags&256?(t.flags&=-257,r=Dc(Error(V(422))),Is(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=au({mode:"visible",children:r.children},i,0,null),a=_o(a,i,l,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&mi(t,e.child,null,l),t.child.memoizedState=Vd(l),t.memoizedState=Zd,a);if(!(t.mode&1))return Is(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var c=r.dgst;return r=c,a=Error(V(419)),r=Dc(a,r,void 0),Is(e,t,l,r)}if(c=(l&e.childLanes)!==0,jt||c){if(r=pt,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,ur(e,i),En(r,e,i,-1))}return Lp(),r=Dc(Error(V(421))),Is(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=TS.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Vt=Rr(i.nextSibling),qt=t,Ve=!0,kn=null,e!==null&&(an[sn++]=rr,an[sn++]=or,an[sn++]=xo,rr=e.id,or=e.overflow,xo=t),t=Cp(t,r.children),t.flags|=4096,t)}function a_(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ad(e.return,t,n)}function Mc(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function d0(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Bt(e,t,r.children,n),r=Ke.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&a_(e,n,t);else if(e.tag===19)a_(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ae(Ke,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&xl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Mc(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&xl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Mc(t,!0,n,null,a);break;case"together":Mc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function cr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),So|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(V(153));if(t.child!==null){for(e=t.child,n=Mr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Mr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function gS(e,t,n){switch(t.tag){case 3:u0(t),hi();break;case 5:Fy(t);break;case 1:Ut(t.type)&&ml(t);break;case 4:vp(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ae(gl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ae(Ke,Ke.current&1),t.flags|=128,null):n&t.child.childLanes?c0(e,t,n):(Ae(Ke,Ke.current&1),e=cr(e,t,n),e!==null?e.sibling:null);Ae(Ke,Ke.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return d0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ae(Ke,Ke.current),r)break;return null;case 22:case 23:return t.lanes=0,s0(e,t,n)}return cr(e,t,n)}var f0,qd,p0,h0;f0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qd=function(){};p0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,fo(Vn.current);var a=null;switch(n){case"input":i=md(e,i),r=md(e,r),a=[];break;case"select":i=Ge({},i,{value:void 0}),r=Ge({},r,{value:void 0}),a=[];break;case"textarea":i=gd(e,i),r=gd(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=pl)}bd(n,r);var l;n=null;for(p in i)if(!r.hasOwnProperty(p)&&i.hasOwnProperty(p)&&i[p]!=null)if(p==="style"){var c=i[p];for(l in c)c.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(ya.hasOwnProperty(p)?a||(a=[]):(a=a||[]).push(p,null));for(p in r){var d=r[p];if(c=i?.[p],r.hasOwnProperty(p)&&d!==c&&(d!=null||c!=null))if(p==="style")if(c){for(l in c)!c.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in d)d.hasOwnProperty(l)&&c[l]!==d[l]&&(n||(n={}),n[l]=d[l])}else n||(a||(a=[]),a.push(p,n)),n=d;else p==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,c=c?c.__html:void 0,d!=null&&c!==d&&(a=a||[]).push(p,d)):p==="children"?typeof d!="string"&&typeof d!="number"||(a=a||[]).push(p,""+d):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(ya.hasOwnProperty(p)?(d!=null&&p==="onScroll"&&je("scroll",e),a||c===d||(a=[])):(a=a||[]).push(p,d))}n&&(a=a||[]).push("style",n);var p=a;(t.updateQueue=p)&&(t.flags|=4)}};h0=function(e,t,n,r){n!==r&&(t.flags|=4)};function Vi(e,t){if(!Ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function wt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function yS(e,t,n){var r=t.pendingProps;switch(cp(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(t),null;case 1:return Ut(t.type)&&hl(),wt(t),null;case 3:return r=t.stateNode,_i(),$e($t),$e(Et),yp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Bs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,kn!==null&&(tf(kn),kn=null))),qd(e,t),wt(t),null;case 5:gp(t);var i=fo(La.current);if(n=t.type,e!==null&&t.stateNode!=null)p0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(V(166));return wt(t),null}if(e=fo(Vn.current),Bs(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Hn]=t,r[za]=a,e=(t.mode&1)!==0,n){case"dialog":je("cancel",r),je("close",r);break;case"iframe":case"object":case"embed":je("load",r);break;case"video":case"audio":for(i=0;i<na.length;i++)je(na[i],r);break;case"source":je("error",r);break;case"img":case"image":case"link":je("error",r),je("load",r);break;case"details":je("toggle",r);break;case"input":mm(r,a),je("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},je("invalid",r);break;case"textarea":vm(r,a),je("invalid",r)}bd(n,a),i=null;for(var l in a)if(a.hasOwnProperty(l)){var c=a[l];l==="children"?typeof c=="string"?r.textContent!==c&&(a.suppressHydrationWarning!==!0&&Ls(r.textContent,c,e),i=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(a.suppressHydrationWarning!==!0&&Ls(r.textContent,c,e),i=["children",""+c]):ya.hasOwnProperty(l)&&c!=null&&l==="onScroll"&&je("scroll",r)}switch(n){case"input":Ss(r),_m(r,a,!0);break;case"textarea":Ss(r),gm(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=pl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=$g(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Hn]=t,e[za]=r,f0(e,t,!1,!1),t.stateNode=e;e:{switch(l=xd(n,r),n){case"dialog":je("cancel",e),je("close",e),i=r;break;case"iframe":case"object":case"embed":je("load",e),i=r;break;case"video":case"audio":for(i=0;i<na.length;i++)je(na[i],e);i=r;break;case"source":je("error",e),i=r;break;case"img":case"image":case"link":je("error",e),je("load",e),i=r;break;case"details":je("toggle",e),i=r;break;case"input":mm(e,r),i=md(e,r),je("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ge({},r,{value:void 0}),je("invalid",e);break;case"textarea":vm(e,r),i=gd(e,r),je("invalid",e);break;default:i=r}bd(n,i),c=i;for(a in c)if(c.hasOwnProperty(a)){var d=c[a];a==="style"?Wg(e,d):a==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Ug(e,d)):a==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&ba(e,d):typeof d=="number"&&ba(e,""+d):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ya.hasOwnProperty(a)?d!=null&&a==="onScroll"&&je("scroll",e):d!=null&&Qf(e,a,d,l))}switch(n){case"input":Ss(e),_m(e,r,!1);break;case"textarea":Ss(e),gm(e);break;case"option":r.value!=null&&e.setAttribute("value",""+$r(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?ni(e,!!r.multiple,a,!1):r.defaultValue!=null&&ni(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=pl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return wt(t),null;case 6:if(e&&t.stateNode!=null)h0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(V(166));if(n=fo(La.current),fo(Vn.current),Bs(t)){if(r=t.stateNode,n=t.memoizedProps,r[Hn]=t,(a=r.nodeValue!==n)&&(e=qt,e!==null))switch(e.tag){case 3:Ls(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ls(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Hn]=t,t.stateNode=r}return wt(t),null;case 13:if($e(Ke),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ve&&Vt!==null&&t.mode&1&&!(t.flags&128))Ly(),hi(),t.flags|=98560,a=!1;else if(a=Bs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(V(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(V(317));a[Hn]=t}else hi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;wt(t),a=!1}else kn!==null&&(tf(kn),kn=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ke.current&1?dt===0&&(dt=3):Lp())),t.updateQueue!==null&&(t.flags|=4),wt(t),null);case 4:return _i(),qd(e,t),e===null&&Ea(t.stateNode.containerInfo),wt(t),null;case 10:return hp(t.type._context),wt(t),null;case 17:return Ut(t.type)&&hl(),wt(t),null;case 19:if($e(Ke),a=t.memoizedState,a===null)return wt(t),null;if(r=(t.flags&128)!==0,l=a.rendering,l===null)if(r)Vi(a,!1);else{if(dt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=xl(e),l!==null){for(t.flags|=128,Vi(a,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ae(Ke,Ke.current&1|2),t.child}e=e.sibling}a.tail!==null&&nt()>gi&&(t.flags|=128,r=!0,Vi(a,!1),t.lanes=4194304)}else{if(!r)if(e=xl(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Vi(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!Ve)return wt(t),null}else 2*nt()-a.renderingStartTime>gi&&n!==1073741824&&(t.flags|=128,r=!0,Vi(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(n=a.last,n!==null?n.sibling=l:t.child=l,a.last=l)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=nt(),t.sibling=null,n=Ke.current,Ae(Ke,r?n&1|2:n&1),t):(wt(t),null);case 22:case 23:return Tp(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Zt&1073741824&&(wt(t),t.subtreeFlags&6&&(t.flags|=8192)):wt(t),null;case 24:return null;case 25:return null}throw Error(V(156,t.tag))}function bS(e,t){switch(cp(t),t.tag){case 1:return Ut(t.type)&&hl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _i(),$e($t),$e(Et),yp(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return gp(t),null;case 13:if($e(Ke),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(V(340));hi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $e(Ke),null;case 4:return _i(),null;case 10:return hp(t.type._context),null;case 22:case 23:return Tp(),null;case 24:return null;default:return null}}var Ns=!1,Pt=!1,xS=typeof WeakSet=="function"?WeakSet:Set,te=null;function Jo(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ye(e,t,r)}else n.current=null}function Kd(e,t,n){try{n()}catch(r){Ye(e,t,r)}}var s_=!1;function wS(e,t){if(Ld=cl,e=gy(),lp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var l=0,c=-1,d=-1,p=0,_=0,v=e,m=null;t:for(;;){for(var y;v!==n||i!==0&&v.nodeType!==3||(c=l+i),v!==a||r!==0&&v.nodeType!==3||(d=l+r),v.nodeType===3&&(l+=v.nodeValue.length),(y=v.firstChild)!==null;)m=v,v=y;for(;;){if(v===e)break t;if(m===n&&++p===i&&(c=l),m===a&&++_===r&&(d=l),(y=v.nextSibling)!==null)break;v=m,m=v.parentNode}v=y}n=c===-1||d===-1?null:{start:c,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bd={focusedElem:e,selectionRange:n},cl=!1,te=t;te!==null;)if(t=te,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,te=e;else for(;te!==null;){t=te;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var S=w.memoizedProps,O=w.memoizedState,b=t.stateNode,g=b.getSnapshotBeforeUpdate(t.elementType===t.type?S:wn(t.type,S),O);b.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var k=t.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(E){Ye(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,te=e;break}te=t.return}return w=s_,s_=!1,w}function fa(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Kd(t,n,a)}i=i.next}while(i!==r)}}function ou(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Qd(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function m0(e){var t=e.alternate;t!==null&&(e.alternate=null,m0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Hn],delete t[za],delete t[Nd],delete t[oS],delete t[iS])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _0(e){return e.tag===5||e.tag===3||e.tag===4}function l_(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=pl));else if(r!==4&&(e=e.child,e!==null))for(Gd(e,t,n),e=e.sibling;e!==null;)Gd(e,t,n),e=e.sibling}function Xd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xd(e,t,n),e=e.sibling;e!==null;)Xd(e,t,n),e=e.sibling}var vt=null,Sn=!1;function gr(e,t,n){for(n=n.child;n!==null;)v0(e,t,n),n=n.sibling}function v0(e,t,n){if(Zn&&typeof Zn.onCommitFiberUnmount=="function")try{Zn.onCommitFiberUnmount(Gl,n)}catch{}switch(n.tag){case 5:Pt||Jo(n,t);case 6:var r=vt,i=Sn;vt=null,gr(e,t,n),vt=r,Sn=i,vt!==null&&(Sn?(e=vt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):vt.removeChild(n.stateNode));break;case 18:vt!==null&&(Sn?(e=vt,n=n.stateNode,e.nodeType===8?Tc(e.parentNode,n):e.nodeType===1&&Tc(e,n),ka(e)):Tc(vt,n.stateNode));break;case 4:r=vt,i=Sn,vt=n.stateNode.containerInfo,Sn=!0,gr(e,t,n),vt=r,Sn=i;break;case 0:case 11:case 14:case 15:if(!Pt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,l=a.destroy;a=a.tag,l!==void 0&&(a&2||a&4)&&Kd(n,t,l),i=i.next}while(i!==r)}gr(e,t,n);break;case 1:if(!Pt&&(Jo(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){Ye(n,t,c)}gr(e,t,n);break;case 21:gr(e,t,n);break;case 22:n.mode&1?(Pt=(r=Pt)||n.memoizedState!==null,gr(e,t,n),Pt=r):gr(e,t,n);break;default:gr(e,t,n)}}function u_(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new xS),t.forEach(function(r){var i=LS.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function yn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,l=t,c=l;e:for(;c!==null;){switch(c.tag){case 5:vt=c.stateNode,Sn=!1;break e;case 3:vt=c.stateNode.containerInfo,Sn=!0;break e;case 4:vt=c.stateNode.containerInfo,Sn=!0;break e}c=c.return}if(vt===null)throw Error(V(160));v0(a,l,i),vt=null,Sn=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(p){Ye(i,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)g0(t,e),t=t.sibling}function g0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(yn(t,e),Fn(e),r&4){try{fa(3,e,e.return),ou(3,e)}catch(S){Ye(e,e.return,S)}try{fa(5,e,e.return)}catch(S){Ye(e,e.return,S)}}break;case 1:yn(t,e),Fn(e),r&512&&n!==null&&Jo(n,n.return);break;case 5:if(yn(t,e),Fn(e),r&512&&n!==null&&Jo(n,n.return),e.flags&32){var i=e.stateNode;try{ba(i,"")}catch(S){Ye(e,e.return,S)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,l=n!==null?n.memoizedProps:a,c=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{c==="input"&&a.type==="radio"&&a.name!=null&&Ag(i,a),xd(c,l);var p=xd(c,a);for(l=0;l<d.length;l+=2){var _=d[l],v=d[l+1];_==="style"?Wg(i,v):_==="dangerouslySetInnerHTML"?Ug(i,v):_==="children"?ba(i,v):Qf(i,_,v,p)}switch(c){case"input":_d(i,a);break;case"textarea":jg(i,a);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var y=a.value;y!=null?ni(i,!!a.multiple,y,!1):m!==!!a.multiple&&(a.defaultValue!=null?ni(i,!!a.multiple,a.defaultValue,!0):ni(i,!!a.multiple,a.multiple?[]:"",!1))}i[za]=a}catch(S){Ye(e,e.return,S)}}break;case 6:if(yn(t,e),Fn(e),r&4){if(e.stateNode===null)throw Error(V(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(S){Ye(e,e.return,S)}}break;case 3:if(yn(t,e),Fn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ka(t.containerInfo)}catch(S){Ye(e,e.return,S)}break;case 4:yn(t,e),Fn(e);break;case 13:yn(t,e),Fn(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Op=nt())),r&4&&u_(e);break;case 22:if(_=n!==null&&n.memoizedState!==null,e.mode&1?(Pt=(p=Pt)||_,yn(t,e),Pt=p):yn(t,e),Fn(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!_&&e.mode&1)for(te=e,_=e.child;_!==null;){for(v=te=_;te!==null;){switch(m=te,y=m.child,m.tag){case 0:case 11:case 14:case 15:fa(4,m,m.return);break;case 1:Jo(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(S){Ye(r,n,S)}}break;case 5:Jo(m,m.return);break;case 22:if(m.memoizedState!==null){d_(v);continue}}y!==null?(y.return=m,te=y):d_(v)}_=_.sibling}e:for(_=null,v=e;;){if(v.tag===5){if(_===null){_=v;try{i=v.stateNode,p?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(c=v.stateNode,d=v.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,c.style.display=Hg("display",l))}catch(S){Ye(e,e.return,S)}}}else if(v.tag===6){if(_===null)try{v.stateNode.nodeValue=p?"":v.memoizedProps}catch(S){Ye(e,e.return,S)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;_===v&&(_=null),v=v.return}_===v&&(_=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:yn(t,e),Fn(e),r&4&&u_(e);break;case 21:break;default:yn(t,e),Fn(e)}}function Fn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(_0(n)){var r=n;break e}n=n.return}throw Error(V(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ba(i,""),r.flags&=-33);var a=l_(e);Xd(e,a,i);break;case 3:case 4:var l=r.stateNode.containerInfo,c=l_(e);Gd(e,c,l);break;default:throw Error(V(161))}}catch(d){Ye(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function SS(e,t,n){te=e,y0(e)}function y0(e,t,n){for(var r=(e.mode&1)!==0;te!==null;){var i=te,a=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Ns;if(!l){var c=i.alternate,d=c!==null&&c.memoizedState!==null||Pt;c=Ns;var p=Pt;if(Ns=l,(Pt=d)&&!p)for(te=i;te!==null;)l=te,d=l.child,l.tag===22&&l.memoizedState!==null?f_(i):d!==null?(d.return=l,te=d):f_(i);for(;a!==null;)te=a,y0(a),a=a.sibling;te=i,Ns=c,Pt=p}c_(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,te=a):c_(e)}}function c_(e){for(;te!==null;){var t=te;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Pt||ou(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Pt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:wn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&qm(t,a,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}qm(t,l,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var _=p.memoizedState;if(_!==null){var v=_.dehydrated;v!==null&&ka(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}Pt||t.flags&512&&Qd(t)}catch(m){Ye(t,t.return,m)}}if(t===e){te=null;break}if(n=t.sibling,n!==null){n.return=t.return,te=n;break}te=t.return}}function d_(e){for(;te!==null;){var t=te;if(t===e){te=null;break}var n=t.sibling;if(n!==null){n.return=t.return,te=n;break}te=t.return}}function f_(e){for(;te!==null;){var t=te;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ou(4,t)}catch(d){Ye(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(d){Ye(t,i,d)}}var a=t.return;try{Qd(t)}catch(d){Ye(t,a,d)}break;case 5:var l=t.return;try{Qd(t)}catch(d){Ye(t,l,d)}}}catch(d){Ye(t,t.return,d)}if(t===e){te=null;break}var c=t.sibling;if(c!==null){c.return=t.return,te=c;break}te=t.return}}var kS=Math.ceil,kl=fr.ReactCurrentDispatcher,Pp=fr.ReactCurrentOwner,cn=fr.ReactCurrentBatchConfig,ke=0,pt=null,lt=null,gt=0,Zt=0,ei=qr(0),dt=0,Na=null,So=0,iu=0,Ep=0,pa=null,At=null,Op=0,gi=1/0,tr=null,Cl=!1,Yd=null,Nr=null,Ds=!1,Or=null,Pl=0,ha=0,Jd=null,Gs=-1,Xs=0;function Rt(){return ke&6?nt():Gs!==-1?Gs:Gs=nt()}function Dr(e){return e.mode&1?ke&2&&gt!==0?gt&-gt:sS.transition!==null?(Xs===0&&(Xs=ny()),Xs):(e=Le,e!==0||(e=window.event,e=e===void 0?16:uy(e.type)),e):1}function En(e,t,n,r){if(50<ha)throw ha=0,Jd=null,Error(V(185));Wa(e,n,r),(!(ke&2)||e!==pt)&&(e===pt&&(!(ke&2)&&(iu|=n),dt===4&&Cr(e,gt)),Ht(e,r),n===1&&ke===0&&!(t.mode&1)&&(gi=nt()+500,tu&&Kr()))}function Ht(e,t){var n=e.callbackNode;sw(e,t);var r=ul(e,e===pt?gt:0);if(r===0)n!==null&&xm(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&xm(n),t===1)e.tag===0?aS(p_.bind(null,e)):Oy(p_.bind(null,e)),nS(function(){!(ke&6)&&Kr()}),n=null;else{switch(ry(r)){case 1:n=ep;break;case 4:n=ey;break;case 16:n=ll;break;case 536870912:n=ty;break;default:n=ll}n=E0(n,b0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function b0(e,t){if(Gs=-1,Xs=0,ke&6)throw Error(V(327));var n=e.callbackNode;if(si()&&e.callbackNode!==n)return null;var r=ul(e,e===pt?gt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=El(e,r);else{t=r;var i=ke;ke|=2;var a=w0();(pt!==e||gt!==t)&&(tr=null,gi=nt()+500,mo(e,t));do try{ES();break}catch(c){x0(e,c)}while(1);pp(),kl.current=a,ke=i,lt!==null?t=0:(pt=null,gt=0,t=dt)}if(t!==0){if(t===2&&(i=Pd(e),i!==0&&(r=i,t=ef(e,i))),t===1)throw n=Na,mo(e,0),Cr(e,r),Ht(e,nt()),n;if(t===6)Cr(e,r);else{if(i=e.current.alternate,!(r&30)&&!CS(i)&&(t=El(e,r),t===2&&(a=Pd(e),a!==0&&(r=a,t=ef(e,a))),t===1))throw n=Na,mo(e,0),Cr(e,r),Ht(e,nt()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(V(345));case 2:ao(e,At,tr);break;case 3:if(Cr(e,r),(r&130023424)===r&&(t=Op+500-nt(),10<t)){if(ul(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Rt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Id(ao.bind(null,e,At,tr),t);break}ao(e,At,tr);break;case 4:if(Cr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Pn(r);a=1<<l,l=t[l],l>i&&(i=l),r&=~a}if(r=i,r=nt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*kS(r/1960))-r,10<r){e.timeoutHandle=Id(ao.bind(null,e,At,tr),r);break}ao(e,At,tr);break;case 5:ao(e,At,tr);break;default:throw Error(V(329))}}}return Ht(e,nt()),e.callbackNode===n?b0.bind(null,e):null}function ef(e,t){var n=pa;return e.current.memoizedState.isDehydrated&&(mo(e,t).flags|=256),e=El(e,t),e!==2&&(t=At,At=n,t!==null&&tf(t)),e}function tf(e){At===null?At=e:At.push.apply(At,e)}function CS(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!zn(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Cr(e,t){for(t&=~Ep,t&=~iu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Pn(t),r=1<<n;e[n]=-1,t&=~r}}function p_(e){if(ke&6)throw Error(V(327));si();var t=ul(e,0);if(!(t&1))return Ht(e,nt()),null;var n=El(e,t);if(e.tag!==0&&n===2){var r=Pd(e);r!==0&&(t=r,n=ef(e,r))}if(n===1)throw n=Na,mo(e,0),Cr(e,t),Ht(e,nt()),n;if(n===6)throw Error(V(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ao(e,At,tr),Ht(e,nt()),null}function zp(e,t){var n=ke;ke|=1;try{return e(t)}finally{ke=n,ke===0&&(gi=nt()+500,tu&&Kr())}}function ko(e){Or!==null&&Or.tag===0&&!(ke&6)&&si();var t=ke;ke|=1;var n=cn.transition,r=Le;try{if(cn.transition=null,Le=1,e)return e()}finally{Le=r,cn.transition=n,ke=t,!(ke&6)&&Kr()}}function Tp(){Zt=ei.current,$e(ei)}function mo(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,tS(n)),lt!==null)for(n=lt.return;n!==null;){var r=n;switch(cp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&hl();break;case 3:_i(),$e($t),$e(Et),yp();break;case 5:gp(r);break;case 4:_i();break;case 13:$e(Ke);break;case 19:$e(Ke);break;case 10:hp(r.type._context);break;case 22:case 23:Tp()}n=n.return}if(pt=e,lt=e=Mr(e.current,null),gt=Zt=t,dt=0,Na=null,Ep=iu=So=0,At=pa=null,co!==null){for(t=0;t<co.length;t++)if(n=co[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var l=a.next;a.next=i,r.next=l}n.pending=r}co=null}return e}function x0(e,t){do{var n=lt;try{if(pp(),qs.current=Sl,wl){for(var r=Qe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}wl=!1}if(wo=0,ft=ct=Qe=null,da=!1,Ba=0,Pp.current=null,n===null||n.return===null){dt=1,Na=t,lt=null;break}e:{var a=e,l=n.return,c=n,d=t;if(t=gt,c.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var p=d,_=c,v=_.tag;if(!(_.mode&1)&&(v===0||v===11||v===15)){var m=_.alternate;m?(_.updateQueue=m.updateQueue,_.memoizedState=m.memoizedState,_.lanes=m.lanes):(_.updateQueue=null,_.memoizedState=null)}var y=e_(l);if(y!==null){y.flags&=-257,t_(y,l,c,a,t),y.mode&1&&Jm(a,p,t),t=y,d=p;var w=t.updateQueue;if(w===null){var S=new Set;S.add(d),t.updateQueue=S}else w.add(d);break e}else{if(!(t&1)){Jm(a,p,t),Lp();break e}d=Error(V(426))}}else if(Ve&&c.mode&1){var O=e_(l);if(O!==null){!(O.flags&65536)&&(O.flags|=256),t_(O,l,c,a,t),dp(vi(d,c));break e}}a=d=vi(d,c),dt!==4&&(dt=2),pa===null?pa=[a]:pa.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var b=o0(a,d,t);Vm(a,b);break e;case 1:c=d;var g=a.type,k=a.stateNode;if(!(a.flags&128)&&(typeof g.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(Nr===null||!Nr.has(k)))){a.flags|=65536,t&=-t,a.lanes|=t;var E=i0(a,c,t);Vm(a,E);break e}}a=a.return}while(a!==null)}k0(n)}catch(D){t=D,lt===n&&n!==null&&(lt=n=n.return);continue}break}while(1)}function w0(){var e=kl.current;return kl.current=Sl,e===null?Sl:e}function Lp(){(dt===0||dt===3||dt===2)&&(dt=4),pt===null||!(So&268435455)&&!(iu&268435455)||Cr(pt,gt)}function El(e,t){var n=ke;ke|=2;var r=w0();(pt!==e||gt!==t)&&(tr=null,mo(e,t));do try{PS();break}catch(i){x0(e,i)}while(1);if(pp(),ke=n,kl.current=r,lt!==null)throw Error(V(261));return pt=null,gt=0,dt}function PS(){for(;lt!==null;)S0(lt)}function ES(){for(;lt!==null&&!Y1();)S0(lt)}function S0(e){var t=P0(e.alternate,e,Zt);e.memoizedProps=e.pendingProps,t===null?k0(e):lt=t,Pp.current=null}function k0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=bS(n,t),n!==null){n.flags&=32767,lt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{dt=6,lt=null;return}}else if(n=yS(n,t,Zt),n!==null){lt=n;return}if(t=t.sibling,t!==null){lt=t;return}lt=t=e}while(t!==null);dt===0&&(dt=5)}function ao(e,t,n){var r=Le,i=cn.transition;try{cn.transition=null,Le=1,OS(e,t,n,r)}finally{cn.transition=i,Le=r}return null}function OS(e,t,n,r){do si();while(Or!==null);if(ke&6)throw Error(V(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(V(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(lw(e,a),e===pt&&(lt=pt=null,gt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ds||(Ds=!0,E0(ll,function(){return si(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=cn.transition,cn.transition=null;var l=Le;Le=1;var c=ke;ke|=4,Pp.current=null,wS(e,n),g0(n,e),Kw(Bd),cl=!!Ld,Bd=Ld=null,e.current=n,SS(n),J1(),ke=c,Le=l,cn.transition=a}else e.current=n;if(Ds&&(Ds=!1,Or=e,Pl=i),a=e.pendingLanes,a===0&&(Nr=null),nw(n.stateNode),Ht(e,nt()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Cl)throw Cl=!1,e=Yd,Yd=null,e;return Pl&1&&e.tag!==0&&si(),a=e.pendingLanes,a&1?e===Jd?ha++:(ha=0,Jd=e):ha=0,Kr(),null}function si(){if(Or!==null){var e=ry(Pl),t=cn.transition,n=Le;try{if(cn.transition=null,Le=16>e?16:e,Or===null)var r=!1;else{if(e=Or,Or=null,Pl=0,ke&6)throw Error(V(331));var i=ke;for(ke|=4,te=e.current;te!==null;){var a=te,l=a.child;if(te.flags&16){var c=a.deletions;if(c!==null){for(var d=0;d<c.length;d++){var p=c[d];for(te=p;te!==null;){var _=te;switch(_.tag){case 0:case 11:case 15:fa(8,_,a)}var v=_.child;if(v!==null)v.return=_,te=v;else for(;te!==null;){_=te;var m=_.sibling,y=_.return;if(m0(_),_===p){te=null;break}if(m!==null){m.return=y,te=m;break}te=y}}}var w=a.alternate;if(w!==null){var S=w.child;if(S!==null){w.child=null;do{var O=S.sibling;S.sibling=null,S=O}while(S!==null)}}te=a}}if(a.subtreeFlags&2064&&l!==null)l.return=a,te=l;else e:for(;te!==null;){if(a=te,a.flags&2048)switch(a.tag){case 0:case 11:case 15:fa(9,a,a.return)}var b=a.sibling;if(b!==null){b.return=a.return,te=b;break e}te=a.return}}var g=e.current;for(te=g;te!==null;){l=te;var k=l.child;if(l.subtreeFlags&2064&&k!==null)k.return=l,te=k;else e:for(l=g;te!==null;){if(c=te,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:ou(9,c)}}catch(D){Ye(c,c.return,D)}if(c===l){te=null;break e}var E=c.sibling;if(E!==null){E.return=c.return,te=E;break e}te=c.return}}if(ke=i,Kr(),Zn&&typeof Zn.onPostCommitFiberRoot=="function")try{Zn.onPostCommitFiberRoot(Gl,e)}catch{}r=!0}return r}finally{Le=n,cn.transition=t}}return!1}function h_(e,t,n){t=vi(n,t),t=o0(e,t,1),e=Ir(e,t,1),t=Rt(),e!==null&&(Wa(e,1,t),Ht(e,t))}function Ye(e,t,n){if(e.tag===3)h_(e,e,n);else for(;t!==null;){if(t.tag===3){h_(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nr===null||!Nr.has(r))){e=vi(n,e),e=i0(t,e,1),t=Ir(t,e,1),e=Rt(),t!==null&&(Wa(t,1,e),Ht(t,e));break}}t=t.return}}function zS(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Rt(),e.pingedLanes|=e.suspendedLanes&n,pt===e&&(gt&n)===n&&(dt===4||dt===3&&(gt&130023424)===gt&&500>nt()-Op?mo(e,0):Ep|=n),Ht(e,t)}function C0(e,t){t===0&&(e.mode&1?(t=Ps,Ps<<=1,!(Ps&130023424)&&(Ps=4194304)):t=1);var n=Rt();e=ur(e,t),e!==null&&(Wa(e,t,n),Ht(e,n))}function TS(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),C0(e,n)}function LS(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(V(314))}r!==null&&r.delete(t),C0(e,n)}var P0;P0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||$t.current)jt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return jt=!1,gS(e,t,n);jt=!!(e.flags&131072)}else jt=!1,Ve&&t.flags&1048576&&zy(t,vl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Qs(e,t),e=t.pendingProps;var i=pi(t,Et.current);ai(t,n),i=xp(null,t,r,e,i,n);var a=wp();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ut(r)?(a=!0,ml(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,_p(t),i.updater=nu,t.stateNode=i,i._reactInternals=t,$d(t,r,e,n),t=Wd(null,t,r,!0,a,n)):(t.tag=0,Ve&&a&&up(t),Bt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Qs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=RS(r),e=wn(r,e),i){case 0:t=Hd(null,t,r,e,n);break e;case 1:t=o_(null,t,r,e,n);break e;case 11:t=n_(null,t,r,e,n);break e;case 14:t=r_(null,t,r,wn(r.type,e),n);break e}throw Error(V(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:wn(r,i),Hd(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:wn(r,i),o_(e,t,r,i,n);case 3:e:{if(u0(t),e===null)throw Error(V(387));r=t.pendingProps,a=t.memoizedState,i=a.element,Ry(e,t),bl(t,r,null,n);var l=t.memoizedState;if(r=l.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=vi(Error(V(423)),t),t=i_(e,t,r,n,i);break e}else if(r!==i){i=vi(Error(V(424)),t),t=i_(e,t,r,n,i);break e}else for(Vt=Rr(t.stateNode.containerInfo.firstChild),qt=t,Ve=!0,kn=null,n=My(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hi(),r===i){t=cr(e,t,n);break e}Bt(e,t,r,n)}t=t.child}return t;case 5:return Fy(t),e===null&&Fd(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,l=i.children,Rd(r,i)?l=null:a!==null&&Rd(r,a)&&(t.flags|=32),l0(e,t),Bt(e,t,l,n),t.child;case 6:return e===null&&Fd(t),null;case 13:return c0(e,t,n);case 4:return vp(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=mi(t,null,r,n):Bt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:wn(r,i),n_(e,t,r,i,n);case 7:return Bt(e,t,t.pendingProps,n),t.child;case 8:return Bt(e,t,t.pendingProps.children,n),t.child;case 12:return Bt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,l=i.value,Ae(gl,r._currentValue),r._currentValue=l,a!==null)if(zn(a.value,l)){if(a.children===i.children&&!$t.current){t=cr(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var c=a.dependencies;if(c!==null){l=a.child;for(var d=c.firstContext;d!==null;){if(d.context===r){if(a.tag===1){d=ir(-1,n&-n),d.tag=2;var p=a.updateQueue;if(p!==null){p=p.shared;var _=p.pending;_===null?d.next=d:(d.next=_.next,_.next=d),p.pending=d}}a.lanes|=n,d=a.alternate,d!==null&&(d.lanes|=n),Ad(a.return,n,t),c.lanes|=n;break}d=d.next}}else if(a.tag===10)l=a.type===t.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(V(341));l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),Ad(l,n,t),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===t){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}Bt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ai(t,n),i=fn(i),r=r(i),t.flags|=1,Bt(e,t,r,n),t.child;case 14:return r=t.type,i=wn(r,t.pendingProps),i=wn(r.type,i),r_(e,t,r,i,n);case 15:return a0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:wn(r,i),Qs(e,t),t.tag=1,Ut(r)?(e=!0,ml(t)):e=!1,ai(t,n),Ny(t,r,i),$d(t,r,i,n),Wd(null,t,r,!0,e,n);case 19:return d0(e,t,n);case 22:return s0(e,t,n)}throw Error(V(156,t.tag))};function E0(e,t){return Jg(e,t)}function BS(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ln(e,t,n,r){return new BS(e,t,n,r)}function Bp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function RS(e){if(typeof e=="function")return Bp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xf)return 11;if(e===Yf)return 14}return 2}function Mr(e,t){var n=e.alternate;return n===null?(n=ln(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ys(e,t,n,r,i,a){var l=2;if(r=e,typeof e=="function")Bp(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Wo:return _o(n.children,i,a,t);case Gf:l=8,i|=8;break;case dd:return e=ln(12,n,t,i|2),e.elementType=dd,e.lanes=a,e;case fd:return e=ln(13,n,t,i),e.elementType=fd,e.lanes=a,e;case pd:return e=ln(19,n,t,i),e.elementType=pd,e.lanes=a,e;case Dg:return au(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ig:l=10;break e;case Ng:l=9;break e;case Xf:l=11;break e;case Yf:l=14;break e;case xr:l=16,r=null;break e}throw Error(V(130,e==null?e:typeof e,""))}return t=ln(l,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function _o(e,t,n,r){return e=ln(7,e,r,t),e.lanes=n,e}function au(e,t,n,r){return e=ln(22,e,r,t),e.elementType=Dg,e.lanes=n,e.stateNode={isHidden:!1},e}function Fc(e,t,n){return e=ln(6,e,null,t),e.lanes=n,e}function Ac(e,t,n){return t=ln(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function IS(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yc(0),this.expirationTimes=yc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Rp(e,t,n,r,i,a,l,c,d){return e=new IS(e,t,n,c,d),t===1?(t=1,a===!0&&(t|=8)):t=0,a=ln(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_p(a),e}function NS(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ho,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function O0(e){if(!e)return Ur;e=e._reactInternals;e:{if(Oo(e)!==e||e.tag!==1)throw Error(V(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ut(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(V(171))}if(e.tag===1){var n=e.type;if(Ut(n))return Ey(e,n,t)}return t}function z0(e,t,n,r,i,a,l,c,d){return e=Rp(n,r,!0,e,i,a,l,c,d),e.context=O0(null),n=e.current,r=Rt(),i=Dr(n),a=ir(r,i),a.callback=t??null,Ir(n,a,i),e.current.lanes=i,Wa(e,i,r),Ht(e,r),e}function su(e,t,n,r){var i=t.current,a=Rt(),l=Dr(i);return n=O0(n),t.context===null?t.context=n:t.pendingContext=n,t=ir(a,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ir(i,t,l),e!==null&&(En(e,i,l,a),Vs(e,i,l)),l}function Ol(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function m_(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ip(e,t){m_(e,t),(e=e.alternate)&&m_(e,t)}function DS(){return null}var T0=typeof reportError=="function"?reportError:function(e){console.error(e)};function Np(e){this._internalRoot=e}lu.prototype.render=Np.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(V(409));su(e,t,null,null)};lu.prototype.unmount=Np.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ko(function(){su(null,e,null,null)}),t[lr]=null}};function lu(e){this._internalRoot=e}lu.prototype.unstable_scheduleHydration=function(e){if(e){var t=ay();e={blockedOn:null,target:e,priority:t};for(var n=0;n<kr.length&&t!==0&&t<kr[n].priority;n++);kr.splice(n,0,e),n===0&&ly(e)}};function Dp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function uu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function __(){}function MS(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var p=Ol(l);a.call(p)}}var l=z0(t,r,e,0,null,!1,!1,"",__);return e._reactRootContainer=l,e[lr]=l.current,Ea(e.nodeType===8?e.parentNode:e),ko(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var c=r;r=function(){var p=Ol(d);c.call(p)}}var d=Rp(e,0,!1,null,null,!1,!1,"",__);return e._reactRootContainer=d,e[lr]=d.current,Ea(e.nodeType===8?e.parentNode:e),ko(function(){su(t,d,n,r)}),d}function cu(e,t,n,r,i){var a=n._reactRootContainer;if(a){var l=a;if(typeof i=="function"){var c=i;i=function(){var d=Ol(l);c.call(d)}}su(t,l,e,i)}else l=MS(n,t,e,i,r);return Ol(l)}oy=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ta(t.pendingLanes);n!==0&&(tp(t,n|1),Ht(t,nt()),!(ke&6)&&(gi=nt()+500,Kr()))}break;case 13:ko(function(){var r=ur(e,1);if(r!==null){var i=Rt();En(r,e,1,i)}}),Ip(e,1)}};np=function(e){if(e.tag===13){var t=ur(e,134217728);if(t!==null){var n=Rt();En(t,e,134217728,n)}Ip(e,134217728)}};iy=function(e){if(e.tag===13){var t=Dr(e),n=ur(e,t);if(n!==null){var r=Rt();En(n,e,t,r)}Ip(e,t)}};ay=function(){return Le};sy=function(e,t){var n=Le;try{return Le=e,t()}finally{Le=n}};Sd=function(e,t,n){switch(t){case"input":if(_d(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=eu(r);if(!i)throw Error(V(90));Fg(r),_d(r,i)}}}break;case"textarea":jg(e,n);break;case"select":t=n.value,t!=null&&ni(e,!!n.multiple,t,!1)}};qg=zp;Kg=ko;var FS={usingClientEntryPoint:!1,Events:[Va,Ko,eu,Zg,Vg,zp]},qi={findFiberByHostInstance:uo,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},AS={bundleType:qi.bundleType,version:qi.version,rendererPackageName:qi.rendererPackageName,rendererConfig:qi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Xg(e),e===null?null:e.stateNode},findFiberByHostInstance:qi.findFiberByHostInstance||DS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ms=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ms.isDisabled&&Ms.supportsFiber)try{Gl=Ms.inject(AS),Zn=Ms}catch{}}Gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=FS;Gt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dp(t))throw Error(V(200));return NS(e,t,null,n)};Gt.createRoot=function(e,t){if(!Dp(e))throw Error(V(299));var n=!1,r="",i=T0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Rp(e,1,!1,null,null,n,!1,r,i),e[lr]=t.current,Ea(e.nodeType===8?e.parentNode:e),new Np(t)};Gt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(V(188)):(e=Object.keys(e).join(","),Error(V(268,e)));return e=Xg(t),e=e===null?null:e.stateNode,e};Gt.flushSync=function(e){return ko(e)};Gt.hydrate=function(e,t,n){if(!uu(t))throw Error(V(200));return cu(null,e,t,!0,n)};Gt.hydrateRoot=function(e,t,n){if(!Dp(e))throw Error(V(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",l=T0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=z0(t,null,e,1,n??null,i,!1,a,l),e[lr]=t.current,Ea(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new lu(t)};Gt.render=function(e,t,n){if(!uu(t))throw Error(V(200));return cu(null,e,t,!1,n)};Gt.unmountComponentAtNode=function(e){if(!uu(e))throw Error(V(40));return e._reactRootContainer?(ko(function(){cu(null,null,e,!1,function(){e._reactRootContainer=null,e[lr]=null})}),!0):!1};Gt.unstable_batchedUpdates=zp;Gt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!uu(n))throw Error(V(200));if(e==null||e._reactInternals===void 0)throw Error(V(38));return cu(e,t,n,!1,r)};Gt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Gt})(D1);const jS=wg(ga);var L0,v_=ga;L0=v_.createRoot,v_.hydrateRoot;var nf={},$S={get exports(){return nf},set exports(e){nf=e}},B0={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yi=N;function US(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var HS=typeof Object.is=="function"?Object.is:US,WS=yi.useState,ZS=yi.useEffect,VS=yi.useLayoutEffect,qS=yi.useDebugValue;function KS(e,t){var n=t(),r=WS({inst:{value:n,getSnapshot:t}}),i=r[0].inst,a=r[1];return VS(function(){i.value=n,i.getSnapshot=t,jc(i)&&a({inst:i})},[e,n,t]),ZS(function(){return jc(i)&&a({inst:i}),e(function(){jc(i)&&a({inst:i})})},[e]),qS(n),n}function jc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!HS(e,n)}catch{return!0}}function QS(e,t){return t()}var GS=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?QS:KS;B0.useSyncExternalStore=yi.useSyncExternalStore!==void 0?yi.useSyncExternalStore:GS;(function(e){e.exports=B0})($S);var rf={},XS={get exports(){return rf},set exports(e){rf=e}},R0={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var du=N,YS=nf;function JS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ek=typeof Object.is=="function"?Object.is:JS,tk=YS.useSyncExternalStore,nk=du.useRef,rk=du.useEffect,ok=du.useMemo,ik=du.useDebugValue;R0.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var a=nk(null);if(a.current===null){var l={hasValue:!1,value:null};a.current=l}else l=a.current;a=ok(function(){function d(y){if(!p){if(p=!0,_=y,y=r(y),i!==void 0&&l.hasValue){var w=l.value;if(i(w,y))return v=w}return v=y}if(w=v,ek(_,y))return w;var S=r(y);return i!==void 0&&i(w,S)?w:(_=y,v=S)}var p=!1,_,v,m=n===void 0?null:n;return[function(){return d(t())},m===null?void 0:function(){return d(m())}]},[t,n,r,i]);var c=tk(e,a[0],a[1]);return rk(function(){l.hasValue=!0,l.value=c},[c]),ik(c),c};(function(e){e.exports=R0})(XS);function ak(e){e()}let I0=ak;const sk=e=>I0=e,lk=()=>I0,Hr=N.createContext(null);function N0(){return N.useContext(Hr)}const uk=()=>{throw new Error("uSES not initialized!")};let D0=uk;const ck=e=>{D0=e},dk=(e,t)=>e===t;function fk(e=Hr){const t=e===Hr?N0:()=>N.useContext(e);return function(r,i=dk){const{store:a,subscription:l,getServerState:c}=t(),d=D0(l.addNestedSub,a.getState,c||a.getState,r,i);return N.useDebugValue(d),d}}const pk=fk();function Ee(){return Ee=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ee.apply(this,arguments)}var of={},hk={get exports(){return of},set exports(e){of=e}},Be={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ht=typeof Symbol=="function"&&Symbol.for,Mp=ht?Symbol.for("react.element"):60103,Fp=ht?Symbol.for("react.portal"):60106,fu=ht?Symbol.for("react.fragment"):60107,pu=ht?Symbol.for("react.strict_mode"):60108,hu=ht?Symbol.for("react.profiler"):60114,mu=ht?Symbol.for("react.provider"):60109,_u=ht?Symbol.for("react.context"):60110,Ap=ht?Symbol.for("react.async_mode"):60111,vu=ht?Symbol.for("react.concurrent_mode"):60111,gu=ht?Symbol.for("react.forward_ref"):60112,yu=ht?Symbol.for("react.suspense"):60113,mk=ht?Symbol.for("react.suspense_list"):60120,bu=ht?Symbol.for("react.memo"):60115,xu=ht?Symbol.for("react.lazy"):60116,_k=ht?Symbol.for("react.block"):60121,vk=ht?Symbol.for("react.fundamental"):60117,gk=ht?Symbol.for("react.responder"):60118,yk=ht?Symbol.for("react.scope"):60119;function Yt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Mp:switch(e=e.type,e){case Ap:case vu:case fu:case hu:case pu:case yu:return e;default:switch(e=e&&e.$$typeof,e){case _u:case gu:case xu:case bu:case mu:return e;default:return t}}case Fp:return t}}}function M0(e){return Yt(e)===vu}Be.AsyncMode=Ap;Be.ConcurrentMode=vu;Be.ContextConsumer=_u;Be.ContextProvider=mu;Be.Element=Mp;Be.ForwardRef=gu;Be.Fragment=fu;Be.Lazy=xu;Be.Memo=bu;Be.Portal=Fp;Be.Profiler=hu;Be.StrictMode=pu;Be.Suspense=yu;Be.isAsyncMode=function(e){return M0(e)||Yt(e)===Ap};Be.isConcurrentMode=M0;Be.isContextConsumer=function(e){return Yt(e)===_u};Be.isContextProvider=function(e){return Yt(e)===mu};Be.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Mp};Be.isForwardRef=function(e){return Yt(e)===gu};Be.isFragment=function(e){return Yt(e)===fu};Be.isLazy=function(e){return Yt(e)===xu};Be.isMemo=function(e){return Yt(e)===bu};Be.isPortal=function(e){return Yt(e)===Fp};Be.isProfiler=function(e){return Yt(e)===hu};Be.isStrictMode=function(e){return Yt(e)===pu};Be.isSuspense=function(e){return Yt(e)===yu};Be.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===fu||e===vu||e===hu||e===pu||e===yu||e===mk||typeof e=="object"&&e!==null&&(e.$$typeof===xu||e.$$typeof===bu||e.$$typeof===mu||e.$$typeof===_u||e.$$typeof===gu||e.$$typeof===vk||e.$$typeof===gk||e.$$typeof===yk||e.$$typeof===_k)};Be.typeOf=Yt;(function(e){e.exports=Be})(hk);var F0=of,bk={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},xk={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},A0={};A0[F0.ForwardRef]=bk;A0[F0.Memo]=xk;var g_={},wk={get exports(){return g_},set exports(e){g_=e}},Re={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp=Symbol.for("react.element"),$p=Symbol.for("react.portal"),wu=Symbol.for("react.fragment"),Su=Symbol.for("react.strict_mode"),ku=Symbol.for("react.profiler"),Cu=Symbol.for("react.provider"),Pu=Symbol.for("react.context"),Sk=Symbol.for("react.server_context"),Eu=Symbol.for("react.forward_ref"),Ou=Symbol.for("react.suspense"),zu=Symbol.for("react.suspense_list"),Tu=Symbol.for("react.memo"),Lu=Symbol.for("react.lazy"),kk=Symbol.for("react.offscreen"),j0;j0=Symbol.for("react.module.reference");function mn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case jp:switch(e=e.type,e){case wu:case ku:case Su:case Ou:case zu:return e;default:switch(e=e&&e.$$typeof,e){case Sk:case Pu:case Eu:case Lu:case Tu:case Cu:return e;default:return t}}case $p:return t}}}Re.ContextConsumer=Pu;Re.ContextProvider=Cu;Re.Element=jp;Re.ForwardRef=Eu;Re.Fragment=wu;Re.Lazy=Lu;Re.Memo=Tu;Re.Portal=$p;Re.Profiler=ku;Re.StrictMode=Su;Re.Suspense=Ou;Re.SuspenseList=zu;Re.isAsyncMode=function(){return!1};Re.isConcurrentMode=function(){return!1};Re.isContextConsumer=function(e){return mn(e)===Pu};Re.isContextProvider=function(e){return mn(e)===Cu};Re.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===jp};Re.isForwardRef=function(e){return mn(e)===Eu};Re.isFragment=function(e){return mn(e)===wu};Re.isLazy=function(e){return mn(e)===Lu};Re.isMemo=function(e){return mn(e)===Tu};Re.isPortal=function(e){return mn(e)===$p};Re.isProfiler=function(e){return mn(e)===ku};Re.isStrictMode=function(e){return mn(e)===Su};Re.isSuspense=function(e){return mn(e)===Ou};Re.isSuspenseList=function(e){return mn(e)===zu};Re.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===wu||e===ku||e===Su||e===Ou||e===zu||e===kk||typeof e=="object"&&e!==null&&(e.$$typeof===Lu||e.$$typeof===Tu||e.$$typeof===Cu||e.$$typeof===Pu||e.$$typeof===Eu||e.$$typeof===j0||e.getModuleId!==void 0)};Re.typeOf=mn;(function(e){e.exports=Re})(wk);function Ck(){const e=lk();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,a=n={callback:r,next:null,prev:n};return a.prev?a.prev.next=a:t=a,function(){!i||t===null||(i=!1,a.next?a.next.prev=a.prev:n=a.prev,a.prev?a.prev.next=a.next:t=a.next)}}}}const y_={notify(){},get:()=>[]};function Pk(e,t){let n,r=y_;function i(v){return d(),r.subscribe(v)}function a(){r.notify()}function l(){_.onStateChange&&_.onStateChange()}function c(){return Boolean(n)}function d(){n||(n=t?t.addNestedSub(l):e.subscribe(l),r=Ck())}function p(){n&&(n(),n=void 0,r.clear(),r=y_)}const _={addNestedSub:i,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:c,trySubscribe:d,tryUnsubscribe:p,getListeners:()=>r};return _}const Ek=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ok=Ek?N.useLayoutEffect:N.useEffect;function zk({store:e,context:t,children:n,serverState:r}){const i=N.useMemo(()=>{const c=Pk(e);return{store:e,subscription:c,getServerState:r?()=>r:void 0}},[e,r]),a=N.useMemo(()=>e.getState(),[e]);Ok(()=>{const{subscription:c}=i;return c.onStateChange=c.notifyNestedSubs,c.trySubscribe(),a!==e.getState()&&c.notifyNestedSubs(),()=>{c.tryUnsubscribe(),c.onStateChange=void 0}},[i,a]);const l=t||Hr;return $.createElement(l.Provider,{value:i},n)}function $0(e=Hr){const t=e===Hr?N0:()=>N.useContext(e);return function(){const{store:r}=t();return r}}const Tk=$0();function Lk(e=Hr){const t=e===Hr?Tk:$0(e);return function(){return t().dispatch}}const Bk=Lk();ck(rf.useSyncExternalStoreWithSelector);sk(ga.unstable_batchedUpdates);/**
 * @remix-run/router v1.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function st(){return st=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},st.apply(this,arguments)}var ut;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ut||(ut={}));const b_="popstate";function Rk(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:l,hash:c}=r.location;return vo("",{pathname:a,search:l,hash:c},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:af(i)}return Nk(t,n,null,e)}function Ik(){return Math.random().toString(36).substr(2,8)}function x_(e){return{usr:e.state,key:e.key}}function vo(e,t,n,r){return n===void 0&&(n=null),st({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Co(t):t,{state:n,key:t&&t.key||r||Ik()})}function af(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Co(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Nk(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,l=i.history,c=ut.Pop,d=null;function p(){c=ut.Pop,d&&d({action:c,location:m.location})}function _(y,w){c=ut.Push;let S=vo(m.location,y,w);n&&n(S,y);let O=x_(S),b=m.createHref(S);try{l.pushState(O,"",b)}catch{i.location.assign(b)}a&&d&&d({action:c,location:S})}function v(y,w){c=ut.Replace;let S=vo(m.location,y,w);n&&n(S,y);let O=x_(S),b=m.createHref(S);l.replaceState(O,"",b),a&&d&&d({action:c,location:S})}let m={get action(){return c},get location(){return e(i,l)},listen(y){if(d)throw new Error("A history only accepts one active listener");return i.addEventListener(b_,p),d=y,()=>{i.removeEventListener(b_,p),d=null}},createHref(y){return t(i,y)},push:_,replace:v,go(y){return l.go(y)}};return m}var Ct;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ct||(Ct={}));function Dk(e){return e.index===!0}function U0(e,t,n){return t===void 0&&(t=[]),n===void 0&&(n=new Set),e.map((r,i)=>{let a=[...t,i],l=typeof r.id=="string"?r.id:a.join("-");return ze(r.index!==!0||!r.children,"Cannot specify children on an index route"),ze(!n.has(l),'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),n.add(l),Dk(r)?st({},r,{id:l}):st({},r,{id:l,children:r.children?U0(r.children,a,n):void 0})})}function ra(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Co(t):t,i=W0(r.pathname||"/",n);if(i==null)return null;let a=H0(e);Mk(a);let l=null;for(let c=0;l==null&&c<a.length;++c)l=Vk(a[c],i);return l}function H0(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((i,a)=>{let l={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};l.relativePath.startsWith("/")&&(ze(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=li([r,l.relativePath]),d=n.concat(l);i.children&&i.children.length>0&&(ze(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),H0(i.children,t,d,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:Wk(c,i.index),routesMeta:d})}),t}function Mk(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Zk(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Fk=/^:\w+$/,Ak=3,jk=2,$k=1,Uk=10,Hk=-2,w_=e=>e==="*";function Wk(e,t){let n=e.split("/"),r=n.length;return n.some(w_)&&(r+=Hk),t&&(r+=jk),n.filter(i=>!w_(i)).reduce((i,a)=>i+(Fk.test(a)?Ak:a===""?$k:Uk),r)}function Zk(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Vk(e,t){let{routesMeta:n}=e,r={},i="/",a=[];for(let l=0;l<n.length;++l){let c=n[l],d=l===n.length-1,p=i==="/"?t:t.slice(i.length)||"/",_=qk({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},p);if(!_)return null;Object.assign(r,_.params);let v=c.route;a.push({params:r,pathname:li([i,_.pathname]),pathnameBase:Gk(li([i,_.pathnameBase])),route:v}),_.pathnameBase!=="/"&&(i=li([i,_.pathnameBase]))}return a}function qk(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Kk(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],l=a.replace(/(.)\/+$/,"$1"),c=i.slice(1);return{params:r.reduce((p,_,v)=>{if(_==="*"){let m=c[v]||"";l=a.slice(0,a.length-m.length).replace(/(.)\/+$/,"$1")}return p[_]=Qk(c[v]||"",_),p},{}),pathname:a,pathnameBase:l,pattern:e}}function Kk(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Z0(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(l,c)=>(r.push(c),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Qk(e,t){try{return decodeURIComponent(e)}catch(n){return Z0(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function W0(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function ze(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Z0(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}const li=e=>e.join("/").replace(/\/\/+/g,"/"),Gk=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");class S_ extends Error{}class Xk{constructor(t){this.pendingKeys=new Set,this.subscriber=void 0,ze(t&&typeof t=="object"&&!Array.isArray(t),"defer() only accepts plain objects");let n;this.abortPromise=new Promise((i,a)=>n=a),this.controller=new AbortController;let r=()=>n(new S_("Deferred data aborted"));this.unlistenAbortSignal=()=>this.controller.signal.removeEventListener("abort",r),this.controller.signal.addEventListener("abort",r),this.data=Object.entries(t).reduce((i,a)=>{let[l,c]=a;return Object.assign(i,{[l]:this.trackPromise(l,c)})},{})}trackPromise(t,n){if(!(n instanceof Promise))return n;this.pendingKeys.add(t);let r=Promise.race([n,this.abortPromise]).then(i=>this.onSettle(r,t,null,i),i=>this.onSettle(r,t,i));return r.catch(()=>{}),Object.defineProperty(r,"_tracked",{get:()=>!0}),r}onSettle(t,n,r,i){if(this.controller.signal.aborted&&r instanceof S_)return this.unlistenAbortSignal(),Object.defineProperty(t,"_error",{get:()=>r}),Promise.reject(r);this.pendingKeys.delete(n),this.done&&this.unlistenAbortSignal();const a=this.subscriber;return r?(Object.defineProperty(t,"_error",{get:()=>r}),a&&a(!1),Promise.reject(r)):(Object.defineProperty(t,"_data",{get:()=>i}),a&&a(!1),i)}subscribe(t){this.subscriber=t}cancel(){this.controller.abort(),this.pendingKeys.forEach((n,r)=>this.pendingKeys.delete(r));let t=this.subscriber;t&&t(!0)}async resolveData(t){let n=!1;if(!this.done){let r=()=>this.cancel();t.addEventListener("abort",r),n=await new Promise(i=>{this.subscribe(a=>{t.removeEventListener("abort",r),(a||this.done)&&i(a)})})}return n}get done(){return this.pendingKeys.size===0}get unwrappedData(){return ze(this.data!==null&&this.done,"Can only unwrap data on initialized and settled deferreds"),Object.entries(this.data).reduce((t,n)=>{let[r,i]=n;return Object.assign(t,{[r]:Jk(i)})},{})}}function Yk(e){return e instanceof Promise&&e._tracked===!0}function Jk(e){if(!Yk(e))return e;if(e._error)throw e._error;return e._data}class Si{constructor(t,n,r){this.status=t,this.statusText=n||"",this.data=r}}function V0(e){return e instanceof Si}const $c={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},eC={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};function tC(e){ze(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let t=U0(e.routes),n=null,r=new Set,i=null,a=null,l=null,c=!1,d=ra(t,e.history.location,e.basename),p=null;if(d==null){let{matches:M,route:Z,error:X}=O_(t);d=M,p={[Z.id]:X}}let _=!d.some(M=>M.route.loader)||e.hydrationData!=null,v,m={historyAction:e.history.action,location:e.history.location,matches:d,initialized:_,navigation:$c,restoreScrollPosition:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||p,fetchers:new Map},y=ut.Pop,w=!1,S,O=!1,b=!1,g=[],k=[],E=new Map,D=0,F=-1,W=new Map,K=new Set,ee=new Map,q=new Map;function le(){return n=e.history.listen(M=>{let{action:Z,location:X}=M;return I(Z,X)}),m.initialized||I(ut.Pop,m.location),v}function he(){n&&n(),r.clear(),S&&S.abort(),m.fetchers.forEach((M,Z)=>Xe(Z))}function Ue(M){return r.add(M),()=>r.delete(M)}function ue(M){m=st({},m,M),r.forEach(Z=>Z(m))}function Ie(M,Z){var X;let ae=m.actionData!=null&&m.navigation.formMethod!=null&&m.navigation.state==="loading"&&((X=m.navigation.formAction)==null?void 0:X.split("?")[0])===M.pathname,oe=Z.loaderData?{loaderData:Hc(m.loaderData,Z.loaderData,Z.matches||[])}:{};ue(st({},ae?{}:{actionData:null},Z,oe,{historyAction:y,location:M,initialized:!0,navigation:$c,revalidation:"idle",restoreScrollPosition:m.navigation.formData?!1:Ne(M,Z.matches||m.matches),preventScrollReset:w})),O||y===ut.Pop||(y===ut.Push?e.history.push(M,M.state):y===ut.Replace&&e.history.replace(M,M.state)),y=ut.Pop,w=!1,O=!1,b=!1,g=[],k=[]}async function G(M,Z){if(typeof M=="number"){e.history.go(M);return}let{path:X,submission:ae,error:oe}=k_(M,Z),Te=vo(m.location,X,Z&&Z.state),we=(Z&&Z.replace)===!0||ae!=null?ut.Replace:ut.Push,ve=Z&&"preventScrollReset"in Z?Z.preventScrollReset===!0:void 0;return await I(we,Te,{submission:ae,pendingError:oe,preventScrollReset:ve,replace:Z&&Z.replace})}function ce(){if(re(),ue({revalidation:"loading"}),m.navigation.state!=="submitting"){if(m.navigation.state==="idle"){I(m.historyAction,m.location,{startUninterruptedRevalidation:!0});return}I(y||m.historyAction,m.navigation.location,{overrideNavigation:m.navigation})}}async function I(M,Z,X){S&&S.abort(),S=null,y=M,O=(X&&X.startUninterruptedRevalidation)===!0,Mt(m.location,m.matches),w=(X&&X.preventScrollReset)===!0;let ae=X&&X.overrideNavigation,oe=ra(t,Z,e.basename);if(!oe){let{matches:Tt,route:bt,error:Ft}=O_(t);xe(),Ie(Z,{matches:Tt,loaderData:{},errors:{[bt.id]:Ft}});return}if(iC(m.location,Z)){Ie(Z,{matches:oe});return}S=new AbortController;let Te=Qi(Z,S.signal,X&&X.submission),we,ve;if(X&&X.pendingError)ve={[ti(oe).route.id]:X.pendingError};else if(X&&X.submission){let Tt=await ne(Te,Z,X.submission,oe,{replace:X.replace});if(Tt.shortCircuited)return;we=Tt.pendingActionData,ve=Tt.pendingActionError,ae=st({state:"loading",location:Z},X.submission)}let{shortCircuited:ge,loaderData:Oe,errors:We}=await H(Te,Z,oe,ae,X&&X.submission,X&&X.replace,we,ve);ge||(S=null,Ie(Z,{matches:oe,loaderData:Oe,errors:We}))}async function ne(M,Z,X,ae,oe){re();let Te=st({state:"submitting",location:Z},X);ue({navigation:Te});let we,ve=R_(ae,Z);if(!ve.route.action)we=z_(Z);else if(we=await Ki("action",M,ve),M.signal.aborted)return{shortCircuited:!0};if(ui(we)){let ge=st({state:"loading",location:vo(m.location,we.location)},X);return await Q(we,ge,oe&&oe.replace),{shortCircuited:!0}}if(ma(we)){let ge=ti(ae,ve.route.id);return(oe&&oe.replace)!==!0&&(y=ut.Push),{pendingActionError:{[ge.route.id]:we.error}}}if(po(we))throw new Error("defer() is not supported in actions");return{pendingActionData:{[ve.route.id]:we.data}}}async function H(M,Z,X,ae,oe,Te,we,ve){let ge=ae;ge||(ge={state:"loading",location:Z,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0});let[Oe,We]=C_(m,X,oe,Z,b,g,k,we,ve,ee);if(xe(rt=>!(X&&X.some(ot=>ot.route.id===rt))||Oe&&Oe.some(ot=>ot.route.id===rt)),Oe.length===0&&We.length===0)return Ie(Z,{matches:X,loaderData:Hc(m.loaderData,{},X),errors:ve||null,actionData:we||null}),{shortCircuited:!0};O||(We.forEach(rt=>{let[ot]=rt;const Rn=m.fetchers.get(ot);let zo={state:"loading",data:Rn&&Rn.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};m.fetchers.set(ot,zo)}),ue(st({navigation:ge,actionData:we||m.actionData||null},We.length>0?{fetchers:new Map(m.fetchers)}:{}))),F=++D,We.forEach(rt=>{let[ot]=rt;return E.set(ot,S)});let{results:Tt,loaderResults:bt,fetcherResults:Ft}=await Y(m.matches,Oe,We,M);if(M.signal.aborted)return{shortCircuited:!0};We.forEach(rt=>{let[ot]=rt;return E.delete(ot)});let Qn=T_(Tt);if(Qn){let rt=Uc(m,Qn);return await Q(Qn,rt,Te),{shortCircuited:!0}}let{loaderData:Gn,errors:en}=E_(m,X,Oe,bt,ve,We,Ft,q);q.forEach((rt,ot)=>{rt.subscribe(Rn=>{(Rn||rt.done)&&q.delete(ot)})}),Me();let hr=et(F);return st({loaderData:Gn,errors:en},hr||We.length>0?{fetchers:new Map(m.fetchers)}:{})}function P(M){return m.fetchers.get(M)||eC}function B(M,Z,X,ae){if(typeof AbortController>"u")throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");E.has(M)&&He(M);let oe=ra(t,X,e.basename);if(!oe){se(M,Z,new Si(404,"Not Found",null));return}let{path:Te,submission:we}=k_(X,ae,!0),ve=R_(oe,Te);if(we){T(M,Z,Te,ve,we);return}ee.set(M,[Te,ve]),A(M,Z,Te,ve)}async function T(M,Z,X,ae,oe){if(re(),ee.delete(M),!ae.route.action){let{error:Wt}=z_(X);se(M,Z,Wt);return}let Te=m.fetchers.get(M),we=st({state:"submitting"},oe,{data:Te&&Te.data});m.fetchers.set(M,we),ue({fetchers:new Map(m.fetchers)});let ve=new AbortController,ge=Qi(X,ve.signal,oe);E.set(M,ve);let Oe=await Ki("action",ge,ae);if(ge.signal.aborted){E.get(M)===ve&&E.delete(M);return}if(ui(Oe)){E.delete(M),K.add(M);let Wt=st({state:"loading"},oe,{data:void 0});m.fetchers.set(M,Wt),ue({fetchers:new Map(m.fetchers)});let _n=st({state:"loading",location:vo(m.location,Oe.location)},oe);await Q(Oe,_n);return}if(ma(Oe)){se(M,Z,Oe.error);return}po(Oe)&&ze(!1,"defer() is not supported in actions");let We=m.navigation.location||m.location,Tt=Qi(We,ve.signal),bt=m.navigation.state!=="idle"?ra(t,m.navigation.location,e.basename):m.matches;ze(bt,"Didn't find any matches after fetcher action");let Ft=++D;W.set(M,Ft);let Qn=st({state:"loading",data:Oe.data},oe);m.fetchers.set(M,Qn);let[Gn,en]=C_(m,bt,oe,We,b,g,k,{[ae.route.id]:Oe.data},void 0,ee);en.filter(Wt=>{let[_n]=Wt;return _n!==M}).forEach(Wt=>{let[_n]=Wt,ts=m.fetchers.get(_n),ju={state:"loading",data:ts&&ts.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};m.fetchers.set(_n,ju),E.set(_n,ve)}),ue({fetchers:new Map(m.fetchers)});let{results:hr,loaderResults:rt,fetcherResults:ot}=await Y(m.matches,Gn,en,Tt);if(ve.signal.aborted)return;W.delete(M),E.delete(M),en.forEach(Wt=>{let[_n]=Wt;return E.delete(_n)});let Rn=T_(hr);if(Rn){let Wt=Uc(m,Rn);await Q(Rn,Wt);return}let{loaderData:zo,errors:Ei}=E_(m,m.matches,Gn,rt,void 0,en,ot,q),Ja={state:"idle",data:Oe.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};m.fetchers.set(M,Ja);let es=et(Ft);m.navigation.state==="loading"&&Ft>F?(ze(y,"Expected pending action"),S&&S.abort(),Ie(m.navigation.location,{matches:bt,loaderData:zo,errors:Ei,fetchers:new Map(m.fetchers)})):(ue(st({errors:Ei,loaderData:Hc(m.loaderData,zo,bt)},es?{fetchers:new Map(m.fetchers)}:{})),b=!1)}async function A(M,Z,X,ae){let oe=m.fetchers.get(M),Te={state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,data:oe&&oe.data};m.fetchers.set(M,Te),ue({fetchers:new Map(m.fetchers)});let we=new AbortController,ve=Qi(X,we.signal);E.set(M,we);let ge=await Ki("loader",ve,ae);if(po(ge)&&(ge=await Q0(ge,ve.signal,!0)||ge),E.get(M)===we&&E.delete(M),ve.signal.aborted)return;if(ui(ge)){let We=Uc(m,ge);await Q(ge,We);return}if(ma(ge)){let We=ti(m.matches,Z);m.fetchers.delete(M),ue({fetchers:new Map(m.fetchers),errors:{[We.route.id]:ge.error}});return}ze(!po(ge),"Unhandled fetcher deferred data");let Oe={state:"idle",data:ge.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};m.fetchers.set(M,Oe),ue({fetchers:new Map(m.fetchers)})}async function Q(M,Z,X){M.revalidate&&(b=!0),ze(Z.location,"Expected a location on the redirect navigation"),S=null;let ae=X===!0?ut.Replace:ut.Push;await I(ae,Z.location,{overrideNavigation:Z})}async function Y(M,Z,X,ae){let oe=await Promise.all([...Z.map(ve=>Ki("loader",ae,ve)),...X.map(ve=>{let[,ge,Oe]=ve;return Ki("loader",Qi(ge,ae.signal),Oe)})]),Te=oe.slice(0,Z.length),we=oe.slice(Z.length);return await Promise.all([L_(M,Z,Te,ae.signal,!1,m.loaderData),L_(M,X.map(ve=>{let[,,ge]=ve;return ge}),we,ae.signal,!0)]),{results:oe,loaderResults:Te,fetcherResults:we}}function re(){b=!0,g.push(...xe()),ee.forEach((M,Z)=>{E.has(Z)&&(k.push(Z),He(Z))})}function se(M,Z,X){let ae=ti(m.matches,Z);Xe(M),ue({errors:{[ae.route.id]:X},fetchers:new Map(m.fetchers)})}function Xe(M){E.has(M)&&He(M),ee.delete(M),W.delete(M),K.delete(M),m.fetchers.delete(M)}function He(M){let Z=E.get(M);ze(Z,"Expected fetch controller: "+M),Z.abort(),E.delete(M)}function De(M){for(let Z of M){let ae={state:"idle",data:P(Z).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};m.fetchers.set(Z,ae)}}function Me(){let M=[];for(let Z of K){let X=m.fetchers.get(Z);ze(X,"Expected fetcher: "+Z),X.state==="loading"&&(K.delete(Z),M.push(Z))}De(M)}function et(M){let Z=[];for(let[X,ae]of W)if(ae<M){let oe=m.fetchers.get(X);ze(oe,"Expected fetcher: "+X),oe.state==="loading"&&(He(X),W.delete(X),Z.push(X))}return De(Z),Z.length>0}function xe(M){let Z=[];return q.forEach((X,ae)=>{(!M||M(ae))&&(X.cancel(),Z.push(ae),q.delete(ae))}),Z}function Jt(M,Z,X){if(i=M,l=Z,a=X||(ae=>ae.key),!c&&m.navigation===$c){c=!0;let ae=Ne(m.location,m.matches);ae!=null&&ue({restoreScrollPosition:ae})}return()=>{i=null,l=null,a=null}}function Mt(M,Z){if(i&&a&&l){let X=Z.map(oe=>B_(oe,m.loaderData)),ae=a(M,X)||M.key;i[ae]=l()}}function Ne(M,Z){if(i&&a&&l){let X=Z.map(Te=>B_(Te,m.loaderData)),ae=a(M,X)||M.key,oe=i[ae];if(typeof oe=="number")return oe}return null}return v={get basename(){return e.basename},get state(){return m},get routes(){return t},initialize:le,subscribe:Ue,enableScrollRestoration:Jt,navigate:G,fetch:B,revalidate:ce,createHref:Bu,getFetcher:P,deleteFetcher:Xe,dispose:he,_internalFetchControllers:E,_internalActiveDeferreds:q},v}function k_(e,t,n){n===void 0&&(n=!1);let r=typeof e=="string"?e:af(e);if(!t||!("formMethod"in t)&&!("formData"in t))return{path:r};if(t.formMethod!=null&&t.formMethod!=="get")return{path:r,submission:{formMethod:t.formMethod,formAction:Bu(Co(r)),formEncType:t&&t.formEncType||"application/x-www-form-urlencoded",formData:t.formData}};if(!t.formData)return{path:r};let i=Co(r);try{let a=K0(t.formData);n&&i.search&&G0(i.search)&&a.append("index",""),i.search="?"+a}catch{return{path:r,error:new Si(400,"Bad Request","Cannot submit binary form data using GET")}}return{path:af(i)}}function Uc(e,t){let{formMethod:n,formAction:r,formEncType:i,formData:a}=e.navigation;return{state:"loading",location:vo(e.location,t.location),formMethod:n||void 0,formAction:r||void 0,formEncType:i||void 0,formData:a||void 0}}function nC(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function C_(e,t,n,r,i,a,l,c,d,p){let _=d?Object.values(d)[0]:c?Object.values(c)[0]:null,v=d?Object.keys(d)[0]:void 0,y=nC(t,v).filter((S,O)=>S.route.loader!=null&&(rC(e.loaderData,e.matches[O],S)||a.some(b=>b===S.route.id)||P_(e.location,e.matches[O],n,r,S,i,_))),w=[];return p&&p.forEach((S,O)=>{let[b,g]=S;l.includes(O)?w.push([O,b,g]):i&&P_(b,g,n,b,g,i,_)&&w.push([O,b,g])}),[y,w]}function rC(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function q0(e,t){let n=e.route.path;return e.pathname!==t.pathname||n&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function P_(e,t,n,r,i,a,l){let c=sf(e),d=t.params,p=sf(r),_=i.params,v=q0(t,i)||c.toString()===p.toString()||c.search!==p.search||a;if(i.route.shouldRevalidate){let m=i.route.shouldRevalidate(st({currentUrl:c,currentParams:d,nextUrl:p,nextParams:_},n,{actionResult:l,defaultShouldRevalidate:v}));if(typeof m=="boolean")return m}return v}async function Ki(e,t,n,r,i){r===void 0&&(r=!1),i===void 0&&(i=!1);let a,l,c,d=new Promise((_,v)=>c=v),p=()=>c();t.signal.addEventListener("abort",p);try{let _=n.route[e];ze(_,"Could not find the "+e+' to run on the "'+n.route.id+'" route'),l=await Promise.race([_({request:t,params:n.params}),d])}catch(_){a=Ct.error,l=_}finally{t.signal.removeEventListener("abort",p)}if(l instanceof Response){let _=l.status,v=l.headers.get("Location");if(i)throw l;if(_>=300&&_<=399&&v!=null){if(r)throw l;return{type:Ct.redirect,status:_,location:v,revalidate:l.headers.get("X-Remix-Revalidate")!==null}}let m,y=l.headers.get("Content-Type");return y&&y.startsWith("application/json")?m=await l.json():m=await l.text(),a===Ct.error?{type:a,error:new Si(_,l.statusText,m),headers:l.headers}:{type:Ct.data,data:m,statusCode:l.status,headers:l.headers}}return a===Ct.error?{type:a,error:l}:l instanceof Xk?{type:Ct.deferred,deferredData:l}:{type:Ct.data,data:l}}function Qi(e,t,n){let r=sf(e).toString(),i={signal:t};if(n){let{formMethod:a,formEncType:l,formData:c}=n;i.method=a.toUpperCase(),i.body=l==="application/x-www-form-urlencoded"?K0(c):c}return new Request(r,i)}function K0(e){let t=new URLSearchParams;for(let[n,r]of e.entries())ze(typeof r=="string",'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.'),t.append(n,r);return t}function oC(e,t,n,r,i){let a={},l=null,c,d=!1,p={};return n.forEach((_,v)=>{let m=t[v].route.id;if(ze(!ui(_),"Cannot handle redirect results in processLoaderData"),ma(_)){let y=ti(e,m),w=_.error;r&&(w=Object.values(r)[0],r=void 0),l=Object.assign(l||{},{[y.route.id]:w}),d||(d=!0,c=V0(_.error)?_.error.status:500),_.headers&&(p[m]=_.headers)}else po(_)?(i&&i.set(m,_.deferredData),a[m]=_.deferredData.data):(a[m]=_.data,_.statusCode!=null&&_.statusCode!==200&&!d&&(c=_.statusCode),_.headers&&(p[m]=_.headers))}),r&&(l=r),{loaderData:a,errors:l,statusCode:c||200,loaderHeaders:p}}function E_(e,t,n,r,i,a,l,c){let{loaderData:d,errors:p}=oC(t,n,r,i,c);for(let _=0;_<a.length;_++){let[v,,m]=a[_];ze(l!==void 0&&l[_]!==void 0,"Did not find corresponding fetcher result");let y=l[_];if(ma(y)){let w=ti(e.matches,m.route.id);p&&p[w.route.id]||(p=st({},p,{[w.route.id]:y.error})),e.fetchers.delete(v)}else{if(ui(y))throw new Error("Unhandled fetcher revalidation redirect");if(po(y))throw new Error("Unhandled fetcher deferred data");{let w={state:"idle",data:y.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0};e.fetchers.set(v,w)}}}return{loaderData:d,errors:p}}function Hc(e,t,n){let r=st({},t);return n.forEach(i=>{let a=i.route.id;t[a]===void 0&&e[a]!==void 0&&(r[a]=e[a])}),r}function ti(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function O_(e){let t=e.find(n=>n.index||n.path===""||n.path==="/")||{id:"__shim-404-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t,error:new Si(404,"Not Found",null)}}function z_(e){let t=typeof e=="string"?e:Bu(e);return console.warn("You're trying to submit to a route that does not have an action.  To fix this, please add an `action` function to the route for "+("["+t+"]")),{type:Ct.error,error:new Si(405,"Method Not Allowed","No action found for ["+t+"]")}}function T_(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(ui(n))return n}}function Bu(e){return(e.pathname||"")+(e.search||"")}function iC(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash!==t.hash}function po(e){return e.type===Ct.deferred}function ma(e){return e.type===Ct.error}function ui(e){return(e&&e.type)===Ct.redirect}async function L_(e,t,n,r,i,a){for(let l=0;l<n.length;l++){let c=n[l],d=t[l],p=e.find(v=>v.route.id===d.route.id),_=p!=null&&!q0(p,d)&&(a&&a[d.route.id])!==void 0;po(c)&&(i||_)&&await Q0(c,r,i).then(v=>{v&&(n[l]=v||n[l])})}}async function Q0(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:Ct.data,data:e.deferredData.unwrappedData}}catch(i){return{type:Ct.error,error:i}}return{type:Ct.data,data:e.deferredData.data}}}function G0(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function B_(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function R_(e,t){let n=typeof t=="string"?Co(t).search:t.search;return e[e.length-1].route.index&&!G0(n||"")?e.slice(-2)[0]:e.slice(-1)[0]}function sf(e){let t=typeof window<"u"&&typeof window.location<"u"?window.location.origin:"unknown://unknown",n=typeof e=="string"?e:Bu(e);return new URL(n,t)}/**
 * React Router v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zl(){return zl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zl.apply(this,arguments)}function aC(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const sC=typeof Object.is=="function"?Object.is:aC,{useState:lC,useEffect:uC,useLayoutEffect:cC,useDebugValue:dC}=ld;function fC(e,t,n){const r=t(),[{inst:i},a]=lC({inst:{value:r,getSnapshot:t}});return cC(()=>{i.value=r,i.getSnapshot=t,Wc(i)&&a({inst:i})},[e,r,t]),uC(()=>(Wc(i)&&a({inst:i}),e(()=>{Wc(i)&&a({inst:i})})),[e]),dC(r),r}function Wc(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!sC(n,r)}catch{return!0}}function pC(e,t,n){return t()}const hC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",mC=!hC,_C=mC?pC:fC,vC="useSyncExternalStore"in ld?(e=>e.useSyncExternalStore)(ld):_C,gC=N.createContext(null),X0=N.createContext(null),Up=N.createContext(null),yC=N.createContext(null),Ru=N.createContext(null),Hp=N.createContext({outlet:null,matches:[]}),Y0=N.createContext(null);function Wp(){return N.useContext(Ru)!=null}function bC(){return Wp()||ze(!1),N.useContext(Ru).location}function xC(e,t){Wp()||ze(!1);let n=N.useContext(Up),{matches:r}=N.useContext(Hp),i=r[r.length-1],a=i?i.params:{};i&&i.pathname;let l=i?i.pathnameBase:"/";i&&i.route;let c=bC(),d;if(t){var p;let w=typeof t=="string"?Co(t):t;l==="/"||(p=w.pathname)!=null&&p.startsWith(l)||ze(!1),d=w}else d=c;let _=d.pathname||"/",v=l==="/"?_:_.slice(l.length)||"/",m=ra(e,{pathname:v}),y=CC(m&&m.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:li([l,w.pathname]),pathnameBase:w.pathnameBase==="/"?l:li([l,w.pathnameBase])})),r,n||void 0);return t?N.createElement(Ru.Provider,{value:{location:zl({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:ut.Pop}},y):y}function wC(){let e=EC(),t=V0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},a={padding:"2px 4px",backgroundColor:r};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unhandled Thrown Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},t),n?N.createElement("pre",{style:i},n):null,N.createElement("p",null,"💿 Hey developer 👋"),N.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",N.createElement("code",{style:a},"errorElement")," props on ",N.createElement("code",{style:a},"<Route>")))}class SC extends N.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?N.createElement(Y0.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function kC(e){let{routeContext:t,match:n,children:r}=e,i=N.useContext(gC);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),N.createElement(Hp.Provider,{value:t},r)}function CC(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n?.errors;if(i!=null){let a=r.findIndex(l=>l.route.id&&i?.[l.route.id]);a>=0||ze(!1),r=r.slice(0,Math.min(r.length,a+1))}return r.reduceRight((a,l,c)=>{let d=l.route.id?i?.[l.route.id]:null,p=n?l.route.errorElement||N.createElement(wC,null):null,_=()=>N.createElement(kC,{match:l,routeContext:{outlet:a,matches:t.concat(r.slice(0,c+1))}},d?p:l.route.element!==void 0?l.route.element:a);return n&&(l.route.errorElement||c===0)?N.createElement(SC,{location:n.location,component:p,error:d,children:_()}):_()},null)}var I_;(function(e){e.UseRevalidator="useRevalidator"})(I_||(I_={}));var lf;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(lf||(lf={}));function PC(e){let t=N.useContext(Up);return t||ze(!1),t}function EC(){var e;let t=N.useContext(Y0),n=PC(lf.UseRouteError),r=N.useContext(Hp),i=r.matches[r.matches.length-1];return t||(r||ze(!1),i.route.id||ze(!1),(e=n.errors)==null?void 0:e[i.route.id])}function OC(e){let{fallbackElement:t,router:n}=e,r=vC(n.subscribe,()=>n.state,()=>n.state),i=N.useMemo(()=>({createHref:n.createHref,go:l=>n.navigate(l),push:(l,c,d)=>n.navigate(l,{state:c,preventScrollReset:d?.preventScrollReset}),replace:(l,c,d)=>n.navigate(l,{replace:!0,state:c,preventScrollReset:d?.preventScrollReset})}),[n]),a=n.basename||"/";return N.createElement(X0.Provider,{value:{router:n,navigator:i,static:!1,basename:a}},N.createElement(Up.Provider,{value:r},N.createElement(TC,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:i},n.state.initialized?N.createElement(LC,null):t)))}function zC(e){ze(!1)}function TC(e){let{basename:t="/",children:n=null,location:r,navigationType:i=ut.Pop,navigator:a,static:l=!1}=e;Wp()&&ze(!1);let c=t.replace(/^\/*/,"/"),d=N.useMemo(()=>({basename:c,navigator:a,static:l}),[c,a,l]);typeof r=="string"&&(r=Co(r));let{pathname:p="/",search:_="",hash:v="",state:m=null,key:y="default"}=r,w=N.useMemo(()=>{let S=W0(p,c);return S==null?null:{pathname:S,search:_,hash:v,state:m,key:y}},[c,p,_,v,m,y]);return w==null?null:N.createElement(yC.Provider,{value:d},N.createElement(Ru.Provider,{children:n,value:{location:w,navigationType:i}}))}function LC(e){let{children:t,location:n}=e,r=N.useContext(X0),i=r&&!t?r.router.routes:uf(t);return xC(i,n)}var N_;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(N_||(N_={}));new Promise(()=>{});function uf(e,t){t===void 0&&(t=[]);let n=[];return N.Children.forEach(e,(r,i)=>{if(!N.isValidElement(r))return;if(r.type===N.Fragment){n.push.apply(n,uf(r.props.children,t));return}r.type!==zC&&ze(!1),!r.props.index||!r.props.children||ze(!1);let a=[...t,i],l={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(l.children=uf(r.props.children,a)),n.push(l)}),n}function J0(e){return e.map(t=>{let n=zl({},t);return n.hasErrorBoundary==null&&(n.hasErrorBoundary=n.errorElement!=null),n.children&&(n.children=J0(n.children)),n})}/**
 * React Router DOM v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function BC(e,t){var n;return tC({basename:t?.basename,history:Rk({window:t?.window}),hydrationData:t?.hydrationData||((n=window)==null?void 0:n.__staticRouterHydrationData),routes:J0(e)}).initialize()}var D_;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(D_||(D_={}));var M_;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(M_||(M_={}));function On(e){return On=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},On(e)}function RC(e,t){if(On(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(On(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function eb(e){var t=RC(e,"string");return On(t)==="symbol"?t:String(t)}function Tn(e,t,n){return t=eb(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ln(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function F_(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,eb(r.key),r)}}function Bn(e,t,n){return t&&F_(e.prototype,t),n&&F_(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var IC=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,NC={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},DC=function(t){return NC[t]},MC=function(t){return t.replace(IC,DC)};function A_(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function j_(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?A_(Object(n),!0).forEach(function(r){Tn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A_(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var cf={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:MC},tb,FC=N.createContext();function AC(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};cf=j_(j_({},cf),e)}function jC(){return cf}var $C=function(){function e(){Ln(this,e),this.usedNamespaces={}}return Bn(e,[{key:"addUsedNamespaces",value:function(n){var r=this;n.forEach(function(i){r.usedNamespaces[i]||(r.usedNamespaces[i]=!0)})}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function UC(e){tb=e}function HC(){return tb}var WC={type:"3rdParty",init:function(t){AC(t.options.react),UC(t)}};function ZC(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];typeof n[0]=="string"&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var $_={};function df(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&$_[t[0]]||(typeof t[0]=="string"&&($_[t[0]]=new Date),ZC.apply(void 0,t))}function U_(e,t,n){e.loadNamespaces(t,function(){if(e.isInitialized)n();else{var r=function i(){setTimeout(function(){e.off("initialized",i)},0),n()};e.on("initialized",r)}})}function VC(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=t.languages[0],i=t.options?t.options.fallbackLng:!1,a=t.languages[t.languages.length-1];if(r.toLowerCase()==="cimode")return!0;var l=function(d,p){var _=t.services.backendConnector.state["".concat(d,"|").concat(p)];return _===-1||_===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!l(t.isLanguageChangingTo,e)?!1:!!(t.hasResourceBundle(r,e)||!t.services.backendConnector.backend||t.options.resources&&!t.options.partialBundledLanguages||l(r,e)&&(!i||l(a,e)))}function qC(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!t.languages||!t.languages.length)return df("i18n.languages were undefined or empty",t.languages),!0;var r=t.options.ignoreJSONStructure!==void 0;return r?t.hasLoadedNamespace(e,{precheck:function(a,l){if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&a.services.backendConnector.backend&&a.isLanguageChangingTo&&!l(a.isLanguageChangingTo,e))return!1}}):VC(e,t,n)}function nb(e){if(Array.isArray(e))return e}function KC(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,l,c=[],d=!0,p=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;d=!1}else for(;!(d=(r=a.call(n)).done)&&(c.push(r.value),c.length!==t);d=!0);}catch(_){p=!0,i=_}finally{try{if(!d&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(p)throw i}}return c}}function H_(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function rb(e,t){if(e){if(typeof e=="string")return H_(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return H_(e,t)}}function ob(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function QC(e,t){return nb(e)||KC(e,t)||rb(e,t)||ob()}function W_(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Zc(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?W_(Object(n),!0).forEach(function(r){Tn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W_(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var GC=function(t,n){var r=N.useRef();return N.useEffect(function(){r.current=n?r.current:t},[t,n]),r.current};function ib(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.i18n,r=N.useContext(FC)||{},i=r.i18n,a=r.defaultNS,l=n||i||HC();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new $C),!l){df("You will need to pass in an i18next instance by using initReactI18next");var c=function(ee){return Array.isArray(ee)?ee[ee.length-1]:ee},d=[c,{},!1];return d.t=c,d.i18n={},d.ready=!1,d}l.options.react&&l.options.react.wait!==void 0&&df("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var p=Zc(Zc(Zc({},jC()),l.options.react),t),_=p.useSuspense,v=p.keyPrefix,m=e||a||l.options&&l.options.defaultNS;m=typeof m=="string"?[m]:m||["translation"],l.reportNamespaces.addUsedNamespaces&&l.reportNamespaces.addUsedNamespaces(m);var y=(l.isInitialized||l.initializedStoreOnce)&&m.every(function(K){return qC(K,l,p)});function w(){return l.getFixedT(null,p.nsMode==="fallback"?m:m[0],v)}var S=N.useState(w),O=QC(S,2),b=O[0],g=O[1],k=m.join(),E=GC(k),D=N.useRef(!0);N.useEffect(function(){var K=p.bindI18n,ee=p.bindI18nStore;D.current=!0,!y&&!_&&U_(l,m,function(){D.current&&g(w)}),y&&E&&E!==k&&D.current&&g(w);function q(){D.current&&g(w)}return K&&l&&l.on(K,q),ee&&l&&l.store.on(ee,q),function(){D.current=!1,K&&l&&K.split(" ").forEach(function(le){return l.off(le,q)}),ee&&l&&ee.split(" ").forEach(function(le){return l.store.off(le,q)})}},[l,k]);var F=N.useRef(!0);N.useEffect(function(){D.current&&!F.current&&g(w),F.current=!1},[l,v]);var W=[b,l,y];if(W.t=b,W.i18n=l,W.ready=y,y||!y&&!_)return W;throw new Promise(function(K){U_(l,m,function(){K()})})}function Tl(e,t){return Tl=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Tl(e,t)}function Ka(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Tl(e,t)}var Qa=function(){function e(){this.listeners=[]}var t=e.prototype;return t.subscribe=function(r){var i=this,a=r||function(){};return this.listeners.push(a),this.onSubscribe(),function(){i.listeners=i.listeners.filter(function(l){return l!==a}),i.onUnsubscribe()}},t.hasListeners=function(){return this.listeners.length>0},t.onSubscribe=function(){},t.onUnsubscribe=function(){},e}(),Ll=typeof window>"u";function kt(){}function XC(e,t){return typeof e=="function"?e(t):e}function ff(e){return typeof e=="number"&&e>=0&&e!==1/0}function Bl(e){return Array.isArray(e)?e:[e]}function ab(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Js(e,t,n){return Iu(e)?typeof t=="function"?Ee({},n,{queryKey:e,queryFn:t}):Ee({},t,{queryKey:e}):e}function Sr(e,t,n){return Iu(e)?[Ee({},t,{queryKey:e}),n]:[e||{},t]}function YC(e,t){if(e===!0&&t===!0||e==null&&t==null)return"all";if(e===!1&&t===!1)return"none";var n=e??!t;return n?"active":"inactive"}function Z_(e,t){var n=e.active,r=e.exact,i=e.fetching,a=e.inactive,l=e.predicate,c=e.queryKey,d=e.stale;if(Iu(c)){if(r){if(t.queryHash!==Zp(c,t.options))return!1}else if(!Rl(t.queryKey,c))return!1}var p=YC(n,a);if(p==="none")return!1;if(p!=="all"){var _=t.isActive();if(p==="active"&&!_||p==="inactive"&&_)return!1}return!(typeof d=="boolean"&&t.isStale()!==d||typeof i=="boolean"&&t.isFetching()!==i||l&&!l(t))}function V_(e,t){var n=e.exact,r=e.fetching,i=e.predicate,a=e.mutationKey;if(Iu(a)){if(!t.options.mutationKey)return!1;if(n){if(ho(t.options.mutationKey)!==ho(a))return!1}else if(!Rl(t.options.mutationKey,a))return!1}return!(typeof r=="boolean"&&t.state.status==="loading"!==r||i&&!i(t))}function Zp(e,t){var n=t?.queryKeyHashFn||ho;return n(e)}function ho(e){var t=Bl(e);return JC(t)}function JC(e){return JSON.stringify(e,function(t,n){return pf(n)?Object.keys(n).sort().reduce(function(r,i){return r[i]=n[i],r},{}):n})}function Rl(e,t){return sb(Bl(e),Bl(t))}function sb(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(function(n){return!sb(e[n],t[n])}):!1}function Il(e,t){if(e===t)return e;var n=Array.isArray(e)&&Array.isArray(t);if(n||pf(e)&&pf(t)){for(var r=n?e.length:Object.keys(e).length,i=n?t:Object.keys(t),a=i.length,l=n?[]:{},c=0,d=0;d<a;d++){var p=n?d:i[d];l[p]=Il(e[p],t[p]),l[p]===e[p]&&c++}return r===a&&c===r?e:l}return t}function eP(e,t){if(e&&!t||t&&!e)return!1;for(var n in e)if(e[n]!==t[n])return!1;return!0}function pf(e){if(!q_(e))return!1;var t=e.constructor;if(typeof t>"u")return!0;var n=t.prototype;return!(!q_(n)||!n.hasOwnProperty("isPrototypeOf"))}function q_(e){return Object.prototype.toString.call(e)==="[object Object]"}function Iu(e){return typeof e=="string"||Array.isArray(e)}function tP(e){return new Promise(function(t){setTimeout(t,e)})}function K_(e){Promise.resolve().then(e).catch(function(t){return setTimeout(function(){throw t})})}function lb(){if(typeof AbortController=="function")return new AbortController}var nP=function(e){Ka(t,e);function t(){var r;return r=e.call(this)||this,r.setup=function(i){var a;if(!Ll&&((a=window)!=null&&a.addEventListener)){var l=function(){return i()};return window.addEventListener("visibilitychange",l,!1),window.addEventListener("focus",l,!1),function(){window.removeEventListener("visibilitychange",l),window.removeEventListener("focus",l)}}},r}var n=t.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var i;(i=this.cleanup)==null||i.call(this),this.cleanup=void 0}},n.setEventListener=function(i){var a,l=this;this.setup=i,(a=this.cleanup)==null||a.call(this),this.cleanup=i(function(c){typeof c=="boolean"?l.setFocused(c):l.onFocus()})},n.setFocused=function(i){this.focused=i,i&&this.onFocus()},n.onFocus=function(){this.listeners.forEach(function(i){i()})},n.isFocused=function(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)},t}(Qa),_a=new nP,rP=function(e){Ka(t,e);function t(){var r;return r=e.call(this)||this,r.setup=function(i){var a;if(!Ll&&((a=window)!=null&&a.addEventListener)){var l=function(){return i()};return window.addEventListener("online",l,!1),window.addEventListener("offline",l,!1),function(){window.removeEventListener("online",l),window.removeEventListener("offline",l)}}},r}var n=t.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var i;(i=this.cleanup)==null||i.call(this),this.cleanup=void 0}},n.setEventListener=function(i){var a,l=this;this.setup=i,(a=this.cleanup)==null||a.call(this),this.cleanup=i(function(c){typeof c=="boolean"?l.setOnline(c):l.onOnline()})},n.setOnline=function(i){this.online=i,i&&this.onOnline()},n.onOnline=function(){this.listeners.forEach(function(i){i()})},n.isOnline=function(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine},t}(Qa),el=new rP;function oP(e){return Math.min(1e3*Math.pow(2,e),3e4)}function Nl(e){return typeof e?.cancel=="function"}var ub=function(t){this.revert=t?.revert,this.silent=t?.silent};function tl(e){return e instanceof ub}var cb=function(t){var n=this,r=!1,i,a,l,c;this.abort=t.abort,this.cancel=function(m){return i?.(m)},this.cancelRetry=function(){r=!0},this.continueRetry=function(){r=!1},this.continue=function(){return a?.()},this.failureCount=0,this.isPaused=!1,this.isResolved=!1,this.isTransportCancelable=!1,this.promise=new Promise(function(m,y){l=m,c=y});var d=function(y){n.isResolved||(n.isResolved=!0,t.onSuccess==null||t.onSuccess(y),a?.(),l(y))},p=function(y){n.isResolved||(n.isResolved=!0,t.onError==null||t.onError(y),a?.(),c(y))},_=function(){return new Promise(function(y){a=y,n.isPaused=!0,t.onPause==null||t.onPause()}).then(function(){a=void 0,n.isPaused=!1,t.onContinue==null||t.onContinue()})},v=function m(){if(!n.isResolved){var y;try{y=t.fn()}catch(w){y=Promise.reject(w)}i=function(S){if(!n.isResolved&&(p(new ub(S)),n.abort==null||n.abort(),Nl(y)))try{y.cancel()}catch{}},n.isTransportCancelable=Nl(y),Promise.resolve(y).then(d).catch(function(w){var S,O;if(!n.isResolved){var b=(S=t.retry)!=null?S:3,g=(O=t.retryDelay)!=null?O:oP,k=typeof g=="function"?g(n.failureCount,w):g,E=b===!0||typeof b=="number"&&n.failureCount<b||typeof b=="function"&&b(n.failureCount,w);if(r||!E){p(w);return}n.failureCount++,t.onFail==null||t.onFail(n.failureCount,w),tP(k).then(function(){if(!_a.isFocused()||!el.isOnline())return _()}).then(function(){r?p(w):m()})}})}};v()},iP=function(){function e(){this.queue=[],this.transactions=0,this.notifyFn=function(n){n()},this.batchNotifyFn=function(n){n()}}var t=e.prototype;return t.batch=function(r){var i;this.transactions++;try{i=r()}finally{this.transactions--,this.transactions||this.flush()}return i},t.schedule=function(r){var i=this;this.transactions?this.queue.push(r):K_(function(){i.notifyFn(r)})},t.batchCalls=function(r){var i=this;return function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];i.schedule(function(){r.apply(void 0,l)})}},t.flush=function(){var r=this,i=this.queue;this.queue=[],i.length&&K_(function(){r.batchNotifyFn(function(){i.forEach(function(a){r.notifyFn(a)})})})},t.setNotifyFunction=function(r){this.notifyFn=r},t.setBatchNotifyFunction=function(r){this.batchNotifyFn=r},e}(),Je=new iP,db=console;function Dl(){return db}function aP(e){db=e}var sP=function(){function e(n){this.abortSignalConsumed=!1,this.hadObservers=!1,this.defaultOptions=n.defaultOptions,this.setOptions(n.options),this.observers=[],this.cache=n.cache,this.queryKey=n.queryKey,this.queryHash=n.queryHash,this.initialState=n.state||this.getDefaultState(this.options),this.state=this.initialState,this.meta=n.meta,this.scheduleGc()}var t=e.prototype;return t.setOptions=function(r){var i;this.options=Ee({},this.defaultOptions,r),this.meta=r?.meta,this.cacheTime=Math.max(this.cacheTime||0,(i=this.options.cacheTime)!=null?i:5*60*1e3)},t.setDefaultOptions=function(r){this.defaultOptions=r},t.scheduleGc=function(){var r=this;this.clearGcTimeout(),ff(this.cacheTime)&&(this.gcTimeout=setTimeout(function(){r.optionalRemove()},this.cacheTime))},t.clearGcTimeout=function(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)},t.optionalRemove=function(){this.observers.length||(this.state.isFetching?this.hadObservers&&this.scheduleGc():this.cache.remove(this))},t.setData=function(r,i){var a,l,c=this.state.data,d=XC(r,c);return(a=(l=this.options).isDataEqual)!=null&&a.call(l,c,d)?d=c:this.options.structuralSharing!==!1&&(d=Il(c,d)),this.dispatch({data:d,type:"success",dataUpdatedAt:i?.updatedAt}),d},t.setState=function(r,i){this.dispatch({type:"setState",state:r,setStateOptions:i})},t.cancel=function(r){var i,a=this.promise;return(i=this.retryer)==null||i.cancel(r),a?a.then(kt).catch(kt):Promise.resolve()},t.destroy=function(){this.clearGcTimeout(),this.cancel({silent:!0})},t.reset=function(){this.destroy(),this.setState(this.initialState)},t.isActive=function(){return this.observers.some(function(r){return r.options.enabled!==!1})},t.isFetching=function(){return this.state.isFetching},t.isStale=function(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(function(r){return r.getCurrentResult().isStale})},t.isStaleByTime=function(r){return r===void 0&&(r=0),this.state.isInvalidated||!this.state.dataUpdatedAt||!ab(this.state.dataUpdatedAt,r)},t.onFocus=function(){var r,i=this.observers.find(function(a){return a.shouldFetchOnWindowFocus()});i&&i.refetch(),(r=this.retryer)==null||r.continue()},t.onOnline=function(){var r,i=this.observers.find(function(a){return a.shouldFetchOnReconnect()});i&&i.refetch(),(r=this.retryer)==null||r.continue()},t.addObserver=function(r){this.observers.indexOf(r)===-1&&(this.observers.push(r),this.hadObservers=!0,this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:r}))},t.removeObserver=function(r){this.observers.indexOf(r)!==-1&&(this.observers=this.observers.filter(function(i){return i!==r}),this.observers.length||(this.retryer&&(this.retryer.isTransportCancelable||this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.cacheTime?this.scheduleGc():this.cache.remove(this)),this.cache.notify({type:"observerRemoved",query:this,observer:r}))},t.getObserversCount=function(){return this.observers.length},t.invalidate=function(){this.state.isInvalidated||this.dispatch({type:"invalidate"})},t.fetch=function(r,i){var a=this,l,c,d;if(this.state.isFetching){if(this.state.dataUpdatedAt&&i?.cancelRefetch)this.cancel({silent:!0});else if(this.promise){var p;return(p=this.retryer)==null||p.continueRetry(),this.promise}}if(r&&this.setOptions(r),!this.options.queryFn){var _=this.observers.find(function(g){return g.options.queryFn});_&&this.setOptions(_.options)}var v=Bl(this.queryKey),m=lb(),y={queryKey:v,pageParam:void 0,meta:this.meta};Object.defineProperty(y,"signal",{enumerable:!0,get:function(){if(m)return a.abortSignalConsumed=!0,m.signal}});var w=function(){return a.options.queryFn?(a.abortSignalConsumed=!1,a.options.queryFn(y)):Promise.reject("Missing queryFn")},S={fetchOptions:i,options:this.options,queryKey:v,state:this.state,fetchFn:w,meta:this.meta};if((l=this.options.behavior)!=null&&l.onFetch){var O;(O=this.options.behavior)==null||O.onFetch(S)}if(this.revertState=this.state,!this.state.isFetching||this.state.fetchMeta!==((c=S.fetchOptions)==null?void 0:c.meta)){var b;this.dispatch({type:"fetch",meta:(b=S.fetchOptions)==null?void 0:b.meta})}return this.retryer=new cb({fn:S.fetchFn,abort:m==null||(d=m.abort)==null?void 0:d.bind(m),onSuccess:function(k){a.setData(k),a.cache.config.onSuccess==null||a.cache.config.onSuccess(k,a),a.cacheTime===0&&a.optionalRemove()},onError:function(k){tl(k)&&k.silent||a.dispatch({type:"error",error:k}),tl(k)||(a.cache.config.onError==null||a.cache.config.onError(k,a),Dl().error(k)),a.cacheTime===0&&a.optionalRemove()},onFail:function(){a.dispatch({type:"failed"})},onPause:function(){a.dispatch({type:"pause"})},onContinue:function(){a.dispatch({type:"continue"})},retry:S.options.retry,retryDelay:S.options.retryDelay}),this.promise=this.retryer.promise,this.promise},t.dispatch=function(r){var i=this;this.state=this.reducer(this.state,r),Je.batch(function(){i.observers.forEach(function(a){a.onQueryUpdate(r)}),i.cache.notify({query:i,type:"queryUpdated",action:r})})},t.getDefaultState=function(r){var i=typeof r.initialData=="function"?r.initialData():r.initialData,a=typeof r.initialData<"u",l=a?typeof r.initialDataUpdatedAt=="function"?r.initialDataUpdatedAt():r.initialDataUpdatedAt:0,c=typeof i<"u";return{data:i,dataUpdateCount:0,dataUpdatedAt:c?l??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchMeta:null,isFetching:!1,isInvalidated:!1,isPaused:!1,status:c?"success":"idle"}},t.reducer=function(r,i){var a,l;switch(i.type){case"failed":return Ee({},r,{fetchFailureCount:r.fetchFailureCount+1});case"pause":return Ee({},r,{isPaused:!0});case"continue":return Ee({},r,{isPaused:!1});case"fetch":return Ee({},r,{fetchFailureCount:0,fetchMeta:(a=i.meta)!=null?a:null,isFetching:!0,isPaused:!1},!r.dataUpdatedAt&&{error:null,status:"loading"});case"success":return Ee({},r,{data:i.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(l=i.dataUpdatedAt)!=null?l:Date.now(),error:null,fetchFailureCount:0,isFetching:!1,isInvalidated:!1,isPaused:!1,status:"success"});case"error":var c=i.error;return tl(c)&&c.revert&&this.revertState?Ee({},this.revertState):Ee({},r,{error:c,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,isFetching:!1,isPaused:!1,status:"error"});case"invalidate":return Ee({},r,{isInvalidated:!0});case"setState":return Ee({},r,i.state);default:return r}},e}(),lP=function(e){Ka(t,e);function t(r){var i;return i=e.call(this)||this,i.config=r||{},i.queries=[],i.queriesMap={},i}var n=t.prototype;return n.build=function(i,a,l){var c,d=a.queryKey,p=(c=a.queryHash)!=null?c:Zp(d,a),_=this.get(p);return _||(_=new sP({cache:this,queryKey:d,queryHash:p,options:i.defaultQueryOptions(a),state:l,defaultOptions:i.getQueryDefaults(d),meta:a.meta}),this.add(_)),_},n.add=function(i){this.queriesMap[i.queryHash]||(this.queriesMap[i.queryHash]=i,this.queries.push(i),this.notify({type:"queryAdded",query:i}))},n.remove=function(i){var a=this.queriesMap[i.queryHash];a&&(i.destroy(),this.queries=this.queries.filter(function(l){return l!==i}),a===i&&delete this.queriesMap[i.queryHash],this.notify({type:"queryRemoved",query:i}))},n.clear=function(){var i=this;Je.batch(function(){i.queries.forEach(function(a){i.remove(a)})})},n.get=function(i){return this.queriesMap[i]},n.getAll=function(){return this.queries},n.find=function(i,a){var l=Sr(i,a),c=l[0];return typeof c.exact>"u"&&(c.exact=!0),this.queries.find(function(d){return Z_(c,d)})},n.findAll=function(i,a){var l=Sr(i,a),c=l[0];return Object.keys(c).length>0?this.queries.filter(function(d){return Z_(c,d)}):this.queries},n.notify=function(i){var a=this;Je.batch(function(){a.listeners.forEach(function(l){l(i)})})},n.onFocus=function(){var i=this;Je.batch(function(){i.queries.forEach(function(a){a.onFocus()})})},n.onOnline=function(){var i=this;Je.batch(function(){i.queries.forEach(function(a){a.onOnline()})})},t}(Qa),uP=function(){function e(n){this.options=Ee({},n.defaultOptions,n.options),this.mutationId=n.mutationId,this.mutationCache=n.mutationCache,this.observers=[],this.state=n.state||cP(),this.meta=n.meta}var t=e.prototype;return t.setState=function(r){this.dispatch({type:"setState",state:r})},t.addObserver=function(r){this.observers.indexOf(r)===-1&&this.observers.push(r)},t.removeObserver=function(r){this.observers=this.observers.filter(function(i){return i!==r})},t.cancel=function(){return this.retryer?(this.retryer.cancel(),this.retryer.promise.then(kt).catch(kt)):Promise.resolve()},t.continue=function(){return this.retryer?(this.retryer.continue(),this.retryer.promise):this.execute()},t.execute=function(){var r=this,i,a=this.state.status==="loading",l=Promise.resolve();return a||(this.dispatch({type:"loading",variables:this.options.variables}),l=l.then(function(){r.mutationCache.config.onMutate==null||r.mutationCache.config.onMutate(r.state.variables,r)}).then(function(){return r.options.onMutate==null?void 0:r.options.onMutate(r.state.variables)}).then(function(c){c!==r.state.context&&r.dispatch({type:"loading",context:c,variables:r.state.variables})})),l.then(function(){return r.executeMutation()}).then(function(c){i=c,r.mutationCache.config.onSuccess==null||r.mutationCache.config.onSuccess(i,r.state.variables,r.state.context,r)}).then(function(){return r.options.onSuccess==null?void 0:r.options.onSuccess(i,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(i,null,r.state.variables,r.state.context)}).then(function(){return r.dispatch({type:"success",data:i}),i}).catch(function(c){return r.mutationCache.config.onError==null||r.mutationCache.config.onError(c,r.state.variables,r.state.context,r),Dl().error(c),Promise.resolve().then(function(){return r.options.onError==null?void 0:r.options.onError(c,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(void 0,c,r.state.variables,r.state.context)}).then(function(){throw r.dispatch({type:"error",error:c}),c})})},t.executeMutation=function(){var r=this,i;return this.retryer=new cb({fn:function(){return r.options.mutationFn?r.options.mutationFn(r.state.variables):Promise.reject("No mutationFn found")},onFail:function(){r.dispatch({type:"failed"})},onPause:function(){r.dispatch({type:"pause"})},onContinue:function(){r.dispatch({type:"continue"})},retry:(i=this.options.retry)!=null?i:0,retryDelay:this.options.retryDelay}),this.retryer.promise},t.dispatch=function(r){var i=this;this.state=dP(this.state,r),Je.batch(function(){i.observers.forEach(function(a){a.onMutationUpdate(r)}),i.mutationCache.notify(i)})},e}();function cP(){return{context:void 0,data:void 0,error:null,failureCount:0,isPaused:!1,status:"idle",variables:void 0}}function dP(e,t){switch(t.type){case"failed":return Ee({},e,{failureCount:e.failureCount+1});case"pause":return Ee({},e,{isPaused:!0});case"continue":return Ee({},e,{isPaused:!1});case"loading":return Ee({},e,{context:t.context,data:void 0,error:null,isPaused:!1,status:"loading",variables:t.variables});case"success":return Ee({},e,{data:t.data,error:null,status:"success",isPaused:!1});case"error":return Ee({},e,{data:void 0,error:t.error,failureCount:e.failureCount+1,isPaused:!1,status:"error"});case"setState":return Ee({},e,t.state);default:return e}}var fP=function(e){Ka(t,e);function t(r){var i;return i=e.call(this)||this,i.config=r||{},i.mutations=[],i.mutationId=0,i}var n=t.prototype;return n.build=function(i,a,l){var c=new uP({mutationCache:this,mutationId:++this.mutationId,options:i.defaultMutationOptions(a),state:l,defaultOptions:a.mutationKey?i.getMutationDefaults(a.mutationKey):void 0,meta:a.meta});return this.add(c),c},n.add=function(i){this.mutations.push(i),this.notify(i)},n.remove=function(i){this.mutations=this.mutations.filter(function(a){return a!==i}),i.cancel(),this.notify(i)},n.clear=function(){var i=this;Je.batch(function(){i.mutations.forEach(function(a){i.remove(a)})})},n.getAll=function(){return this.mutations},n.find=function(i){return typeof i.exact>"u"&&(i.exact=!0),this.mutations.find(function(a){return V_(i,a)})},n.findAll=function(i){return this.mutations.filter(function(a){return V_(i,a)})},n.notify=function(i){var a=this;Je.batch(function(){a.listeners.forEach(function(l){l(i)})})},n.onFocus=function(){this.resumePausedMutations()},n.onOnline=function(){this.resumePausedMutations()},n.resumePausedMutations=function(){var i=this.mutations.filter(function(a){return a.state.isPaused});return Je.batch(function(){return i.reduce(function(a,l){return a.then(function(){return l.continue().catch(kt)})},Promise.resolve())})},t}(Qa);function pP(){return{onFetch:function(t){t.fetchFn=function(){var n,r,i,a,l,c,d=(n=t.fetchOptions)==null||(r=n.meta)==null?void 0:r.refetchPage,p=(i=t.fetchOptions)==null||(a=i.meta)==null?void 0:a.fetchMore,_=p?.pageParam,v=p?.direction==="forward",m=p?.direction==="backward",y=((l=t.state.data)==null?void 0:l.pages)||[],w=((c=t.state.data)==null?void 0:c.pageParams)||[],S=lb(),O=S?.signal,b=w,g=!1,k=t.options.queryFn||function(){return Promise.reject("Missing queryFn")},E=function(ue,Ie,G,ce){return b=ce?[Ie].concat(b):[].concat(b,[Ie]),ce?[G].concat(ue):[].concat(ue,[G])},D=function(ue,Ie,G,ce){if(g)return Promise.reject("Cancelled");if(typeof G>"u"&&!Ie&&ue.length)return Promise.resolve(ue);var I={queryKey:t.queryKey,signal:O,pageParam:G,meta:t.meta},ne=k(I),H=Promise.resolve(ne).then(function(B){return E(ue,G,B,ce)});if(Nl(ne)){var P=H;P.cancel=ne.cancel}return H},F;if(!y.length)F=D([]);else if(v){var W=typeof _<"u",K=W?_:Q_(t.options,y);F=D(y,W,K)}else if(m){var ee=typeof _<"u",q=ee?_:hP(t.options,y);F=D(y,ee,q,!0)}else(function(){b=[];var Ue=typeof t.options.getNextPageParam>"u",ue=d&&y[0]?d(y[0],0,y):!0;F=ue?D([],Ue,w[0]):Promise.resolve(E([],w[0],y[0]));for(var Ie=function(I){F=F.then(function(ne){var H=d&&y[I]?d(y[I],I,y):!0;if(H){var P=Ue?w[I]:Q_(t.options,ne);return D(ne,Ue,P)}return Promise.resolve(E(ne,w[I],y[I]))})},G=1;G<y.length;G++)Ie(G)})();var le=F.then(function(Ue){return{pages:Ue,pageParams:b}}),he=le;return he.cancel=function(){g=!0,S?.abort(),Nl(F)&&F.cancel()},le}}}}function Q_(e,t){return e.getNextPageParam==null?void 0:e.getNextPageParam(t[t.length-1],t)}function hP(e,t){return e.getPreviousPageParam==null?void 0:e.getPreviousPageParam(t[0],t)}var mP=function(){function e(n){n===void 0&&(n={}),this.queryCache=n.queryCache||new lP,this.mutationCache=n.mutationCache||new fP,this.defaultOptions=n.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[]}var t=e.prototype;return t.mount=function(){var r=this;this.unsubscribeFocus=_a.subscribe(function(){_a.isFocused()&&el.isOnline()&&(r.mutationCache.onFocus(),r.queryCache.onFocus())}),this.unsubscribeOnline=el.subscribe(function(){_a.isFocused()&&el.isOnline()&&(r.mutationCache.onOnline(),r.queryCache.onOnline())})},t.unmount=function(){var r,i;(r=this.unsubscribeFocus)==null||r.call(this),(i=this.unsubscribeOnline)==null||i.call(this)},t.isFetching=function(r,i){var a=Sr(r,i),l=a[0];return l.fetching=!0,this.queryCache.findAll(l).length},t.isMutating=function(r){return this.mutationCache.findAll(Ee({},r,{fetching:!0})).length},t.getQueryData=function(r,i){var a;return(a=this.queryCache.find(r,i))==null?void 0:a.state.data},t.getQueriesData=function(r){return this.getQueryCache().findAll(r).map(function(i){var a=i.queryKey,l=i.state,c=l.data;return[a,c]})},t.setQueryData=function(r,i,a){var l=Js(r),c=this.defaultQueryOptions(l);return this.queryCache.build(this,c).setData(i,a)},t.setQueriesData=function(r,i,a){var l=this;return Je.batch(function(){return l.getQueryCache().findAll(r).map(function(c){var d=c.queryKey;return[d,l.setQueryData(d,i,a)]})})},t.getQueryState=function(r,i){var a;return(a=this.queryCache.find(r,i))==null?void 0:a.state},t.removeQueries=function(r,i){var a=Sr(r,i),l=a[0],c=this.queryCache;Je.batch(function(){c.findAll(l).forEach(function(d){c.remove(d)})})},t.resetQueries=function(r,i,a){var l=this,c=Sr(r,i,a),d=c[0],p=c[1],_=this.queryCache,v=Ee({},d,{active:!0});return Je.batch(function(){return _.findAll(d).forEach(function(m){m.reset()}),l.refetchQueries(v,p)})},t.cancelQueries=function(r,i,a){var l=this,c=Sr(r,i,a),d=c[0],p=c[1],_=p===void 0?{}:p;typeof _.revert>"u"&&(_.revert=!0);var v=Je.batch(function(){return l.queryCache.findAll(d).map(function(m){return m.cancel(_)})});return Promise.all(v).then(kt).catch(kt)},t.invalidateQueries=function(r,i,a){var l,c,d,p=this,_=Sr(r,i,a),v=_[0],m=_[1],y=Ee({},v,{active:(l=(c=v.refetchActive)!=null?c:v.active)!=null?l:!0,inactive:(d=v.refetchInactive)!=null?d:!1});return Je.batch(function(){return p.queryCache.findAll(v).forEach(function(w){w.invalidate()}),p.refetchQueries(y,m)})},t.refetchQueries=function(r,i,a){var l=this,c=Sr(r,i,a),d=c[0],p=c[1],_=Je.batch(function(){return l.queryCache.findAll(d).map(function(m){return m.fetch(void 0,Ee({},p,{meta:{refetchPage:d?.refetchPage}}))})}),v=Promise.all(_).then(kt);return p?.throwOnError||(v=v.catch(kt)),v},t.fetchQuery=function(r,i,a){var l=Js(r,i,a),c=this.defaultQueryOptions(l);typeof c.retry>"u"&&(c.retry=!1);var d=this.queryCache.build(this,c);return d.isStaleByTime(c.staleTime)?d.fetch(c):Promise.resolve(d.state.data)},t.prefetchQuery=function(r,i,a){return this.fetchQuery(r,i,a).then(kt).catch(kt)},t.fetchInfiniteQuery=function(r,i,a){var l=Js(r,i,a);return l.behavior=pP(),this.fetchQuery(l)},t.prefetchInfiniteQuery=function(r,i,a){return this.fetchInfiniteQuery(r,i,a).then(kt).catch(kt)},t.cancelMutations=function(){var r=this,i=Je.batch(function(){return r.mutationCache.getAll().map(function(a){return a.cancel()})});return Promise.all(i).then(kt).catch(kt)},t.resumePausedMutations=function(){return this.getMutationCache().resumePausedMutations()},t.executeMutation=function(r){return this.mutationCache.build(this,r).execute()},t.getQueryCache=function(){return this.queryCache},t.getMutationCache=function(){return this.mutationCache},t.getDefaultOptions=function(){return this.defaultOptions},t.setDefaultOptions=function(r){this.defaultOptions=r},t.setQueryDefaults=function(r,i){var a=this.queryDefaults.find(function(l){return ho(r)===ho(l.queryKey)});a?a.defaultOptions=i:this.queryDefaults.push({queryKey:r,defaultOptions:i})},t.getQueryDefaults=function(r){var i;return r?(i=this.queryDefaults.find(function(a){return Rl(r,a.queryKey)}))==null?void 0:i.defaultOptions:void 0},t.setMutationDefaults=function(r,i){var a=this.mutationDefaults.find(function(l){return ho(r)===ho(l.mutationKey)});a?a.defaultOptions=i:this.mutationDefaults.push({mutationKey:r,defaultOptions:i})},t.getMutationDefaults=function(r){var i;return r?(i=this.mutationDefaults.find(function(a){return Rl(r,a.mutationKey)}))==null?void 0:i.defaultOptions:void 0},t.defaultQueryOptions=function(r){if(r?._defaulted)return r;var i=Ee({},this.defaultOptions.queries,this.getQueryDefaults(r?.queryKey),r,{_defaulted:!0});return!i.queryHash&&i.queryKey&&(i.queryHash=Zp(i.queryKey,i)),i},t.defaultQueryObserverOptions=function(r){return this.defaultQueryOptions(r)},t.defaultMutationOptions=function(r){return r?._defaulted?r:Ee({},this.defaultOptions.mutations,this.getMutationDefaults(r?.mutationKey),r,{_defaulted:!0})},t.clear=function(){this.queryCache.clear(),this.mutationCache.clear()},e}(),_P=function(e){Ka(t,e);function t(r,i){var a;return a=e.call(this)||this,a.client=r,a.options=i,a.trackedProps=[],a.selectError=null,a.bindMethods(),a.setOptions(i),a}var n=t.prototype;return n.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},n.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),G_(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},n.onUnsubscribe=function(){this.listeners.length||this.destroy()},n.shouldFetchOnReconnect=function(){return hf(this.currentQuery,this.options,this.options.refetchOnReconnect)},n.shouldFetchOnWindowFocus=function(){return hf(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},n.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},n.setOptions=function(i,a){var l=this.options,c=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(i),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=l.queryKey),this.updateQuery();var d=this.hasListeners();d&&X_(this.currentQuery,c,this.options,l)&&this.executeFetch(),this.updateResult(a),d&&(this.currentQuery!==c||this.options.enabled!==l.enabled||this.options.staleTime!==l.staleTime)&&this.updateStaleTimeout();var p=this.computeRefetchInterval();d&&(this.currentQuery!==c||this.options.enabled!==l.enabled||p!==this.currentRefetchInterval)&&this.updateRefetchInterval(p)},n.getOptimisticResult=function(i){var a=this.client.defaultQueryObserverOptions(i),l=this.client.getQueryCache().build(this.client,a);return this.createResult(l,a)},n.getCurrentResult=function(){return this.currentResult},n.trackResult=function(i,a){var l=this,c={},d=function(_){l.trackedProps.includes(_)||l.trackedProps.push(_)};return Object.keys(i).forEach(function(p){Object.defineProperty(c,p,{configurable:!1,enumerable:!0,get:function(){return d(p),i[p]}})}),(a.useErrorBoundary||a.suspense)&&d("error"),c},n.getNextResult=function(i){var a=this;return new Promise(function(l,c){var d=a.subscribe(function(p){p.isFetching||(d(),p.isError&&i?.throwOnError?c(p.error):l(p))})})},n.getCurrentQuery=function(){return this.currentQuery},n.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},n.refetch=function(i){return this.fetch(Ee({},i,{meta:{refetchPage:i?.refetchPage}}))},n.fetchOptimistic=function(i){var a=this,l=this.client.defaultQueryObserverOptions(i),c=this.client.getQueryCache().build(this.client,l);return c.fetch().then(function(){return a.createResult(c,l)})},n.fetch=function(i){var a=this;return this.executeFetch(i).then(function(){return a.updateResult(),a.currentResult})},n.executeFetch=function(i){this.updateQuery();var a=this.currentQuery.fetch(this.options,i);return i?.throwOnError||(a=a.catch(kt)),a},n.updateStaleTimeout=function(){var i=this;if(this.clearStaleTimeout(),!(Ll||this.currentResult.isStale||!ff(this.options.staleTime))){var a=ab(this.currentResult.dataUpdatedAt,this.options.staleTime),l=a+1;this.staleTimeoutId=setTimeout(function(){i.currentResult.isStale||i.updateResult()},l)}},n.computeRefetchInterval=function(){var i;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(i=this.options.refetchInterval)!=null?i:!1},n.updateRefetchInterval=function(i){var a=this;this.clearRefetchInterval(),this.currentRefetchInterval=i,!(Ll||this.options.enabled===!1||!ff(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(a.options.refetchIntervalInBackground||_a.isFocused())&&a.executeFetch()},this.currentRefetchInterval))},n.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},n.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},n.clearStaleTimeout=function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)},n.clearRefetchInterval=function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)},n.createResult=function(i,a){var l=this.currentQuery,c=this.options,d=this.currentResult,p=this.currentResultState,_=this.currentResultOptions,v=i!==l,m=v?i.state:this.currentQueryInitialState,y=v?this.currentResult:this.previousQueryResult,w=i.state,S=w.dataUpdatedAt,O=w.error,b=w.errorUpdatedAt,g=w.isFetching,k=w.status,E=!1,D=!1,F;if(a.optimisticResults){var W=this.hasListeners(),K=!W&&G_(i,a),ee=W&&X_(i,l,a,c);(K||ee)&&(g=!0,S||(k="loading"))}if(a.keepPreviousData&&!w.dataUpdateCount&&y?.isSuccess&&k!=="error")F=y.data,S=y.dataUpdatedAt,k=y.status,E=!0;else if(a.select&&typeof w.data<"u")if(d&&w.data===p?.data&&a.select===this.selectFn)F=this.selectResult;else try{this.selectFn=a.select,F=a.select(w.data),a.structuralSharing!==!1&&(F=Il(d?.data,F)),this.selectResult=F,this.selectError=null}catch(he){Dl().error(he),this.selectError=he}else F=w.data;if(typeof a.placeholderData<"u"&&typeof F>"u"&&(k==="loading"||k==="idle")){var q;if(d?.isPlaceholderData&&a.placeholderData===_?.placeholderData)q=d.data;else if(q=typeof a.placeholderData=="function"?a.placeholderData():a.placeholderData,a.select&&typeof q<"u")try{q=a.select(q),a.structuralSharing!==!1&&(q=Il(d?.data,q)),this.selectError=null}catch(he){Dl().error(he),this.selectError=he}typeof q<"u"&&(k="success",F=q,D=!0)}this.selectError&&(O=this.selectError,F=this.selectResult,b=Date.now(),k="error");var le={status:k,isLoading:k==="loading",isSuccess:k==="success",isError:k==="error",isIdle:k==="idle",data:F,dataUpdatedAt:S,error:O,errorUpdatedAt:b,failureCount:w.fetchFailureCount,errorUpdateCount:w.errorUpdateCount,isFetched:w.dataUpdateCount>0||w.errorUpdateCount>0,isFetchedAfterMount:w.dataUpdateCount>m.dataUpdateCount||w.errorUpdateCount>m.errorUpdateCount,isFetching:g,isRefetching:g&&k!=="loading",isLoadingError:k==="error"&&w.dataUpdatedAt===0,isPlaceholderData:D,isPreviousData:E,isRefetchError:k==="error"&&w.dataUpdatedAt!==0,isStale:Vp(i,a),refetch:this.refetch,remove:this.remove};return le},n.shouldNotifyListeners=function(i,a){if(!a)return!0;var l=this.options,c=l.notifyOnChangeProps,d=l.notifyOnChangePropsExclusions;if(!c&&!d||c==="tracked"&&!this.trackedProps.length)return!0;var p=c==="tracked"?this.trackedProps:c;return Object.keys(i).some(function(_){var v=_,m=i[v]!==a[v],y=p?.some(function(S){return S===_}),w=d?.some(function(S){return S===_});return m&&!w&&(!p||y)})},n.updateResult=function(i){var a=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!eP(this.currentResult,a)){var l={cache:!0};i?.listeners!==!1&&this.shouldNotifyListeners(this.currentResult,a)&&(l.listeners=!0),this.notify(Ee({},l,i))}},n.updateQuery=function(){var i=this.client.getQueryCache().build(this.client,this.options);if(i!==this.currentQuery){var a=this.currentQuery;this.currentQuery=i,this.currentQueryInitialState=i.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(a?.removeObserver(this),i.addObserver(this))}},n.onQueryUpdate=function(i){var a={};i.type==="success"?a.onSuccess=!0:i.type==="error"&&!tl(i.error)&&(a.onError=!0),this.updateResult(a),this.hasListeners()&&this.updateTimers()},n.notify=function(i){var a=this;Je.batch(function(){i.onSuccess?(a.options.onSuccess==null||a.options.onSuccess(a.currentResult.data),a.options.onSettled==null||a.options.onSettled(a.currentResult.data,null)):i.onError&&(a.options.onError==null||a.options.onError(a.currentResult.error),a.options.onSettled==null||a.options.onSettled(void 0,a.currentResult.error)),i.listeners&&a.listeners.forEach(function(l){l(a.currentResult)}),i.cache&&a.client.getQueryCache().notify({query:a.currentQuery,type:"observerResultsUpdated"})})},t}(Qa);function vP(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function G_(e,t){return vP(e,t)||e.state.dataUpdatedAt>0&&hf(e,t,t.refetchOnMount)}function hf(e,t,n){if(t.enabled!==!1){var r=typeof n=="function"?n(e):n;return r==="always"||r!==!1&&Vp(e,t)}return!1}function X_(e,t,n,r){return n.enabled!==!1&&(e!==t||r.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&Vp(e,n)}function Vp(e,t){return e.isStaleByTime(t.staleTime)}var gP=jS.unstable_batchedUpdates;Je.setBatchNotifyFunction(gP);var yP=console;aP(yP);var Y_=$.createContext(void 0),fb=$.createContext(!1);function pb(e){return e&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=Y_),window.ReactQueryClientContext):Y_}var bP=function(){var t=$.useContext(pb($.useContext(fb)));if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},xP=function(t){var n=t.client,r=t.contextSharing,i=r===void 0?!1:r,a=t.children;$.useEffect(function(){return n.mount(),function(){n.unmount()}},[n]);var l=pb(i);return $.createElement(fb.Provider,{value:i},$.createElement(l.Provider,{value:n},a))};function wP(){var e=!1;return{clearReset:function(){e=!1},reset:function(){e=!0},isReset:function(){return e}}}var SP=$.createContext(wP()),kP=function(){return $.useContext(SP)};function CP(e,t,n){return typeof t=="function"?t.apply(void 0,n):typeof t=="boolean"?t:!!e}function PP(e,t){var n=$.useRef(!1),r=$.useState(0),i=r[1],a=bP(),l=kP(),c=a.defaultQueryObserverOptions(e);c.optimisticResults=!0,c.onError&&(c.onError=Je.batchCalls(c.onError)),c.onSuccess&&(c.onSuccess=Je.batchCalls(c.onSuccess)),c.onSettled&&(c.onSettled=Je.batchCalls(c.onSettled)),c.suspense&&(typeof c.staleTime!="number"&&(c.staleTime=1e3),c.cacheTime===0&&(c.cacheTime=1)),(c.suspense||c.useErrorBoundary)&&(l.isReset()||(c.retryOnMount=!1));var d=$.useState(function(){return new t(a,c)}),p=d[0],_=p.getOptimisticResult(c);if($.useEffect(function(){n.current=!0,l.clearReset();var v=p.subscribe(Je.batchCalls(function(){n.current&&i(function(m){return m+1})}));return p.updateResult(),function(){n.current=!1,v()}},[l,p]),$.useEffect(function(){p.setOptions(c,{listeners:!1})},[c,p]),c.suspense&&_.isLoading)throw p.fetchOptimistic(c).then(function(v){var m=v.data;c.onSuccess==null||c.onSuccess(m),c.onSettled==null||c.onSettled(m,null)}).catch(function(v){l.clearReset(),c.onError==null||c.onError(v),c.onSettled==null||c.onSettled(void 0,v)});if(_.isError&&!l.isReset()&&!_.isFetching&&CP(c.suspense,c.useErrorBoundary,[_.error,p.getCurrentQuery()]))throw _.error;return c.notifyOnChangeProps==="tracked"&&(_=p.trackResult(_,c)),_}function EP(e,t,n){var r=Js(e,t,n);return PP(r,_P)}function Fr(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Nu(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Tl(e,t)}function Ga(e,t){if(t&&(On(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Fr(e)}function Kn(e){return Kn=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Kn(e)}function OP(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function zP(e){return nb(e)||OP(e)||rb(e)||ob()}function J_(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ev(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?J_(Object(n),!0).forEach(function(r){Tn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J_(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var TP={type:"logger",log:function(t){this.output("log",t)},warn:function(t){this.output("warn",t)},error:function(t){this.output("error",t)},output:function(t,n){console&&console[t]&&console[t].apply(console,n)}},LP=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Ln(this,e),this.init(t,n)}return Bn(e,[{key:"init",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=r.prefix||"i18next:",this.logger=n||TP,this.options=r,this.debug=r.debug}},{key:"setDebug",value:function(n){this.debug=n}},{key:"log",value:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return this.forward(r,"log","",!0)}},{key:"warn",value:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return this.forward(r,"warn","",!0)}},{key:"error",value:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return this.forward(r,"error","")}},{key:"deprecate",value:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return this.forward(r,"warn","WARNING DEPRECATED: ",!0)}},{key:"forward",value:function(n,r,i,a){return a&&!this.debug?null:(typeof n[0]=="string"&&(n[0]="".concat(i).concat(this.prefix," ").concat(n[0])),this.logger[r](n))}},{key:"create",value:function(n){return new e(this.logger,ev(ev({},{prefix:"".concat(this.prefix,":").concat(n,":")}),this.options))}},{key:"clone",value:function(n){return n=n||this.options,n.prefix=n.prefix||this.prefix,new e(this.logger,n)}}]),e}(),Wn=new LP,Wr=function(){function e(){Ln(this,e),this.observers={}}return Bn(e,[{key:"on",value:function(n,r){var i=this;return n.split(" ").forEach(function(a){i.observers[a]=i.observers[a]||[],i.observers[a].push(r)}),this}},{key:"off",value:function(n,r){if(this.observers[n]){if(!r){delete this.observers[n];return}this.observers[n]=this.observers[n].filter(function(i){return i!==r})}}},{key:"emit",value:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];if(this.observers[n]){var l=[].concat(this.observers[n]);l.forEach(function(d){d.apply(void 0,i)})}if(this.observers["*"]){var c=[].concat(this.observers["*"]);c.forEach(function(d){d.apply(d,[n].concat(i))})}}}]),e}();function Gi(){var e,t,n=new Promise(function(r,i){e=r,t=i});return n.resolve=e,n.reject=t,n}function tv(e){return e==null?"":""+e}function BP(e,t,n){e.forEach(function(r){t[r]&&(n[r]=t[r])})}function qp(e,t,n){function r(c){return c&&c.indexOf("###")>-1?c.replace(/###/g,"."):c}function i(){return!e||typeof e=="string"}for(var a=typeof t!="string"?[].concat(t):t.split(".");a.length>1;){if(i())return{};var l=r(a.shift());!e[l]&&n&&(e[l]=new n),Object.prototype.hasOwnProperty.call(e,l)?e=e[l]:e={}}return i()?{}:{obj:e,k:r(a.shift())}}function nv(e,t,n){var r=qp(e,t,Object),i=r.obj,a=r.k;i[a]=n}function RP(e,t,n,r){var i=qp(e,t,Object),a=i.obj,l=i.k;a[l]=a[l]||[],r&&(a[l]=a[l].concat(n)),r||a[l].push(n)}function Ml(e,t){var n=qp(e,t),r=n.obj,i=n.k;if(r)return r[i]}function rv(e,t,n){var r=Ml(e,n);return r!==void 0?r:Ml(t,n)}function hb(e,t,n){for(var r in t)r!=="__proto__"&&r!=="constructor"&&(r in e?typeof e[r]=="string"||e[r]instanceof String||typeof t[r]=="string"||t[r]instanceof String?n&&(e[r]=t[r]):hb(e[r],t[r],n):e[r]=t[r]);return e}function Ao(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var IP={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function NP(e){return typeof e=="string"?e.replace(/[&<>"'\/]/g,function(t){return IP[t]}):e}var Du=typeof window<"u"&&window.navigator&&typeof window.navigator.userAgentData>"u"&&window.navigator.userAgent&&window.navigator.userAgent.indexOf("MSIE")>-1,DP=[" ",",","?","!",";"];function MP(e,t,n){t=t||"",n=n||"";var r=DP.filter(function(c){return t.indexOf(c)<0&&n.indexOf(c)<0});if(r.length===0)return!0;var i=new RegExp("(".concat(r.map(function(c){return c==="?"?"\\?":c}).join("|"),")")),a=!i.test(e);if(!a){var l=e.indexOf(n);l>0&&!i.test(e.substring(0,l))&&(a=!0)}return a}function ov(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Fs(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ov(Object(n),!0).forEach(function(r){Tn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ov(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function FP(e){var t=AP();return function(){var r=Kn(e),i;if(t){var a=Kn(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ga(this,i)}}function AP(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function mb(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(e){if(e[t])return e[t];for(var r=t.split(n),i=e,a=0;a<r.length;++a){if(!i||typeof i[r[a]]=="string"&&a+1<r.length)return;if(i[r[a]]===void 0){for(var l=2,c=r.slice(a,a+l).join(n),d=i[c];d===void 0&&r.length>a+l;)l++,c=r.slice(a,a+l).join(n),d=i[c];if(d===void 0)return;if(d===null)return null;if(t.endsWith(c)){if(typeof d=="string")return d;if(c&&typeof d[c]=="string")return d[c]}var p=r.slice(a+l).join(n);return p?mb(d,p,n):void 0}i=i[r[a]]}return i}}var jP=function(e){Nu(n,e);var t=FP(n);function n(r){var i,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};return Ln(this,n),i=t.call(this),Du&&Wr.call(Fr(i)),i.data=r||{},i.options=a,i.options.keySeparator===void 0&&(i.options.keySeparator="."),i.options.ignoreJSONStructure===void 0&&(i.options.ignoreJSONStructure=!0),i}return Bn(n,[{key:"addNamespaces",value:function(i){this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}},{key:"removeNamespaces",value:function(i){var a=this.options.ns.indexOf(i);a>-1&&this.options.ns.splice(a,1)}},{key:"getResource",value:function(i,a,l){var c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},d=c.keySeparator!==void 0?c.keySeparator:this.options.keySeparator,p=c.ignoreJSONStructure!==void 0?c.ignoreJSONStructure:this.options.ignoreJSONStructure,_=[i,a];l&&typeof l!="string"&&(_=_.concat(l)),l&&typeof l=="string"&&(_=_.concat(d?l.split(d):l)),i.indexOf(".")>-1&&(_=i.split("."));var v=Ml(this.data,_);return v||!p||typeof l!="string"?v:mb(this.data&&this.data[i]&&this.data[i][a],l,d)}},{key:"addResource",value:function(i,a,l,c){var d=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1},p=this.options.keySeparator;p===void 0&&(p=".");var _=[i,a];l&&(_=_.concat(p?l.split(p):l)),i.indexOf(".")>-1&&(_=i.split("."),c=a,a=_[1]),this.addNamespaces(a),nv(this.data,_,c),d.silent||this.emit("added",i,a,l,c)}},{key:"addResources",value:function(i,a,l){var c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(var d in l)(typeof l[d]=="string"||Object.prototype.toString.apply(l[d])==="[object Array]")&&this.addResource(i,a,d,l[d],{silent:!0});c.silent||this.emit("added",i,a,l)}},{key:"addResourceBundle",value:function(i,a,l,c,d){var p=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1},_=[i,a];i.indexOf(".")>-1&&(_=i.split("."),c=l,l=a,a=_[1]),this.addNamespaces(a);var v=Ml(this.data,_)||{};c?hb(v,l,d):v=Fs(Fs({},v),l),nv(this.data,_,v),p.silent||this.emit("added",i,a,l)}},{key:"removeResourceBundle",value:function(i,a){this.hasResourceBundle(i,a)&&delete this.data[i][a],this.removeNamespaces(a),this.emit("removed",i,a)}},{key:"hasResourceBundle",value:function(i,a){return this.getResource(i,a)!==void 0}},{key:"getResourceBundle",value:function(i,a){return a||(a=this.options.defaultNS),this.options.compatibilityAPI==="v1"?Fs(Fs({},{}),this.getResource(i,a)):this.getResource(i,a)}},{key:"getDataByLanguage",value:function(i){return this.data[i]}},{key:"hasLanguageSomeTranslations",value:function(i){var a=this.getDataByLanguage(i),l=a&&Object.keys(a)||[];return!!l.find(function(c){return a[c]&&Object.keys(a[c]).length>0})}},{key:"toJSON",value:function(){return this.data}}]),n}(Wr),_b={processors:{},addPostProcessor:function(t){this.processors[t.name]=t},handle:function(t,n,r,i,a){var l=this;return t.forEach(function(c){l.processors[c]&&(n=l.processors[c].process(n,r,i,a))}),n}};function iv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Lt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?iv(Object(n),!0).forEach(function(r){Tn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):iv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function $P(e){var t=UP();return function(){var r=Kn(e),i;if(t){var a=Kn(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ga(this,i)}}function UP(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var av={},sv=function(e){Nu(n,e);var t=$P(n);function n(r){var i,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Ln(this,n),i=t.call(this),Du&&Wr.call(Fr(i)),BP(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],r,Fr(i)),i.options=a,i.options.keySeparator===void 0&&(i.options.keySeparator="."),i.logger=Wn.create("translator"),i}return Bn(n,[{key:"changeLanguage",value:function(i){i&&(this.language=i)}},{key:"exists",value:function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(i==null)return!1;var l=this.resolve(i,a);return l&&l.res!==void 0}},{key:"extractFromKey",value:function(i,a){var l=a.nsSeparator!==void 0?a.nsSeparator:this.options.nsSeparator;l===void 0&&(l=":");var c=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator,d=a.ns||this.options.defaultNS||[],p=l&&i.indexOf(l)>-1,_=!this.options.userDefinedKeySeparator&&!a.keySeparator&&!this.options.userDefinedNsSeparator&&!a.nsSeparator&&!MP(i,l,c);if(p&&!_){var v=i.match(this.interpolator.nestingRegexp);if(v&&v.length>0)return{key:i,namespaces:d};var m=i.split(l);(l!==c||l===c&&this.options.ns.indexOf(m[0])>-1)&&(d=m.shift()),i=m.join(c)}return typeof d=="string"&&(d=[d]),{key:i,namespaces:d}}},{key:"translate",value:function(i,a,l){var c=this;if(On(a)!=="object"&&this.options.overloadTranslationOptionHandler&&(a=this.options.overloadTranslationOptionHandler(arguments)),a||(a={}),i==null)return"";Array.isArray(i)||(i=[String(i)]);var d=a.returnDetails!==void 0?a.returnDetails:this.options.returnDetails,p=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator,_=this.extractFromKey(i[i.length-1],a),v=_.key,m=_.namespaces,y=m[m.length-1],w=a.lng||this.language,S=a.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(w&&w.toLowerCase()==="cimode"){if(S){var O=a.nsSeparator||this.options.nsSeparator;return d?(b.res="".concat(y).concat(O).concat(v),b):"".concat(y).concat(O).concat(v)}return d?(b.res=v,b):v}var b=this.resolve(i,a),g=b&&b.res,k=b&&b.usedKey||v,E=b&&b.exactUsedKey||v,D=Object.prototype.toString.apply(g),F=["[object Number]","[object Function]","[object RegExp]"],W=a.joinArrays!==void 0?a.joinArrays:this.options.joinArrays,K=!this.i18nFormat||this.i18nFormat.handleAsObject,ee=typeof g!="string"&&typeof g!="boolean"&&typeof g!="number";if(K&&g&&ee&&F.indexOf(D)<0&&!(typeof W=="string"&&D==="[object Array]")){if(!a.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");var q=this.options.returnedObjectHandler?this.options.returnedObjectHandler(k,g,Lt(Lt({},a),{},{ns:m})):"key '".concat(v," (").concat(this.language,")' returned an object instead of string.");return d?(b.res=q,b):q}if(p){var le=D==="[object Array]",he=le?[]:{},Ue=le?E:k;for(var ue in g)if(Object.prototype.hasOwnProperty.call(g,ue)){var Ie="".concat(Ue).concat(p).concat(ue);he[ue]=this.translate(Ie,Lt(Lt({},a),{joinArrays:!1,ns:m})),he[ue]===Ie&&(he[ue]=g[ue])}g=he}}else if(K&&typeof W=="string"&&D==="[object Array]")g=g.join(W),g&&(g=this.extendTranslation(g,i,a,l));else{var G=!1,ce=!1,I=a.count!==void 0&&typeof a.count!="string",ne=n.hasDefaultValue(a),H=I?this.pluralResolver.getSuffix(w,a.count,a):"",P=a["defaultValue".concat(H)]||a.defaultValue;!this.isValidLookup(g)&&ne&&(G=!0,g=P),this.isValidLookup(g)||(ce=!0,g=v);var B=a.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey,T=B&&ce?void 0:g,A=ne&&P!==g&&this.options.updateMissing;if(ce||G||A){if(this.logger.log(A?"updateKey":"missingKey",w,y,v,A?P:g),p){var Q=this.resolve(v,Lt(Lt({},a),{},{keySeparator:!1}));Q&&Q.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}var Y=[],re=this.languageUtils.getFallbackCodes(this.options.fallbackLng,a.lng||this.language);if(this.options.saveMissingTo==="fallback"&&re&&re[0])for(var se=0;se<re.length;se++)Y.push(re[se]);else this.options.saveMissingTo==="all"?Y=this.languageUtils.toResolveHierarchy(a.lng||this.language):Y.push(a.lng||this.language);var Xe=function(De,Me,et){var xe=ne&&et!==g?et:T;c.options.missingKeyHandler?c.options.missingKeyHandler(De,y,Me,xe,A,a):c.backendConnector&&c.backendConnector.saveMissing&&c.backendConnector.saveMissing(De,y,Me,xe,A,a),c.emit("missingKey",De,y,Me,g)};this.options.saveMissing&&(this.options.saveMissingPlurals&&I?Y.forEach(function(He){c.pluralResolver.getSuffixes(He,a).forEach(function(De){Xe([He],v+De,a["defaultValue".concat(De)]||P)})}):Xe(Y,v,P))}g=this.extendTranslation(g,i,a,b,l),ce&&g===v&&this.options.appendNamespaceToMissingKey&&(g="".concat(y,":").concat(v)),(ce||G)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?g=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?"".concat(y,":").concat(v):v,G?g:void 0):g=this.options.parseMissingKeyHandler(g))}return d?(b.res=g,b):g}},{key:"extendTranslation",value:function(i,a,l,c,d){var p=this;if(this.i18nFormat&&this.i18nFormat.parse)i=this.i18nFormat.parse(i,Lt(Lt({},this.options.interpolation.defaultVariables),l),c.usedLng,c.usedNS,c.usedKey,{resolved:c});else if(!l.skipInterpolation){l.interpolation&&this.interpolator.init(Lt(Lt({},l),{interpolation:Lt(Lt({},this.options.interpolation),l.interpolation)}));var _=typeof i=="string"&&(l&&l.interpolation&&l.interpolation.skipOnVariables!==void 0?l.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables),v;if(_){var m=i.match(this.interpolator.nestingRegexp);v=m&&m.length}var y=l.replace&&typeof l.replace!="string"?l.replace:l;if(this.options.interpolation.defaultVariables&&(y=Lt(Lt({},this.options.interpolation.defaultVariables),y)),i=this.interpolator.interpolate(i,y,l.lng||this.language,l),_){var w=i.match(this.interpolator.nestingRegexp),S=w&&w.length;v<S&&(l.nest=!1)}l.nest!==!1&&(i=this.interpolator.nest(i,function(){for(var g=arguments.length,k=new Array(g),E=0;E<g;E++)k[E]=arguments[E];return d&&d[0]===k[0]&&!l.context?(p.logger.warn("It seems you are nesting recursively key: ".concat(k[0]," in key: ").concat(a[0])),null):p.translate.apply(p,k.concat([a]))},l)),l.interpolation&&this.interpolator.reset()}var O=l.postProcess||this.options.postProcess,b=typeof O=="string"?[O]:O;return i!=null&&b&&b.length&&l.applyPostProcessor!==!1&&(i=_b.handle(b,i,a,this.options&&this.options.postProcessPassResolved?Lt({i18nResolved:c},l):l,this)),i}},{key:"resolve",value:function(i){var a=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c,d,p,_,v;return typeof i=="string"&&(i=[i]),i.forEach(function(m){if(!a.isValidLookup(c)){var y=a.extractFromKey(m,l),w=y.key;d=w;var S=y.namespaces;a.options.fallbackNS&&(S=S.concat(a.options.fallbackNS));var O=l.count!==void 0&&typeof l.count!="string",b=O&&!l.ordinal&&l.count===0&&a.pluralResolver.shouldUseIntlApi(),g=l.context!==void 0&&(typeof l.context=="string"||typeof l.context=="number")&&l.context!=="",k=l.lngs?l.lngs:a.languageUtils.toResolveHierarchy(l.lng||a.language,l.fallbackLng);S.forEach(function(E){a.isValidLookup(c)||(v=E,!av["".concat(k[0],"-").concat(E)]&&a.utils&&a.utils.hasLoadedNamespace&&!a.utils.hasLoadedNamespace(v)&&(av["".concat(k[0],"-").concat(E)]=!0,a.logger.warn('key "'.concat(d,'" for languages "').concat(k.join(", "),`" won't get resolved as namespace "`).concat(v,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),k.forEach(function(D){if(!a.isValidLookup(c)){_=D;var F=[w];if(a.i18nFormat&&a.i18nFormat.addLookupKeys)a.i18nFormat.addLookupKeys(F,w,D,E,l);else{var W;O&&(W=a.pluralResolver.getSuffix(D,l.count,l));var K="".concat(a.options.pluralSeparator,"zero");if(O&&(F.push(w+W),b&&F.push(w+K)),g){var ee="".concat(w).concat(a.options.contextSeparator).concat(l.context);F.push(ee),O&&(F.push(ee+W),b&&F.push(ee+K))}}for(var q;q=F.pop();)a.isValidLookup(c)||(p=q,c=a.getResource(D,E,q,l))}}))})}}),{res:c,usedKey:d,exactUsedKey:p,usedLng:_,usedNS:v}}},{key:"isValidLookup",value:function(i){return i!==void 0&&!(!this.options.returnNull&&i===null)&&!(!this.options.returnEmptyString&&i==="")}},{key:"getResource",value:function(i,a,l){var c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(i,a,l,c):this.resourceStore.getResource(i,a,l,c)}}],[{key:"hasDefaultValue",value:function(i){var a="defaultValue";for(var l in i)if(Object.prototype.hasOwnProperty.call(i,l)&&a===l.substring(0,a.length)&&i[l]!==void 0)return!0;return!1}}]),n}(Wr);function Vc(e){return e.charAt(0).toUpperCase()+e.slice(1)}var lv=function(){function e(t){Ln(this,e),this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Wn.create("languageUtils")}return Bn(e,[{key:"getScriptPartFromCode",value:function(n){if(!n||n.indexOf("-")<0)return null;var r=n.split("-");return r.length===2||(r.pop(),r[r.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(r.join("-"))}},{key:"getLanguagePartFromCode",value:function(n){if(!n||n.indexOf("-")<0)return n;var r=n.split("-");return this.formatLanguageCode(r[0])}},{key:"formatLanguageCode",value:function(n){if(typeof n=="string"&&n.indexOf("-")>-1){var r=["hans","hant","latn","cyrl","cans","mong","arab"],i=n.split("-");return this.options.lowerCaseLng?i=i.map(function(a){return a.toLowerCase()}):i.length===2?(i[0]=i[0].toLowerCase(),i[1]=i[1].toUpperCase(),r.indexOf(i[1].toLowerCase())>-1&&(i[1]=Vc(i[1].toLowerCase()))):i.length===3&&(i[0]=i[0].toLowerCase(),i[1].length===2&&(i[1]=i[1].toUpperCase()),i[0]!=="sgn"&&i[2].length===2&&(i[2]=i[2].toUpperCase()),r.indexOf(i[1].toLowerCase())>-1&&(i[1]=Vc(i[1].toLowerCase())),r.indexOf(i[2].toLowerCase())>-1&&(i[2]=Vc(i[2].toLowerCase()))),i.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?n.toLowerCase():n}},{key:"isSupportedCode",value:function(n){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(n=this.getLanguagePartFromCode(n)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(n)>-1}},{key:"getBestMatchFromCodes",value:function(n){var r=this;if(!n)return null;var i;return n.forEach(function(a){if(!i){var l=r.formatLanguageCode(a);(!r.options.supportedLngs||r.isSupportedCode(l))&&(i=l)}}),!i&&this.options.supportedLngs&&n.forEach(function(a){if(!i){var l=r.getLanguagePartFromCode(a);if(r.isSupportedCode(l))return i=l;i=r.options.supportedLngs.find(function(c){if(c.indexOf(l)===0)return c})}}),i||(i=this.getFallbackCodes(this.options.fallbackLng)[0]),i}},{key:"getFallbackCodes",value:function(n,r){if(!n)return[];if(typeof n=="function"&&(n=n(r)),typeof n=="string"&&(n=[n]),Object.prototype.toString.apply(n)==="[object Array]")return n;if(!r)return n.default||[];var i=n[r];return i||(i=n[this.getScriptPartFromCode(r)]),i||(i=n[this.formatLanguageCode(r)]),i||(i=n[this.getLanguagePartFromCode(r)]),i||(i=n.default),i||[]}},{key:"toResolveHierarchy",value:function(n,r){var i=this,a=this.getFallbackCodes(r||this.options.fallbackLng||[],n),l=[],c=function(p){p&&(i.isSupportedCode(p)?l.push(p):i.logger.warn("rejecting language code not found in supportedLngs: ".concat(p)))};return typeof n=="string"&&n.indexOf("-")>-1?(this.options.load!=="languageOnly"&&c(this.formatLanguageCode(n)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&c(this.getScriptPartFromCode(n)),this.options.load!=="currentOnly"&&c(this.getLanguagePartFromCode(n))):typeof n=="string"&&c(this.formatLanguageCode(n)),a.forEach(function(d){l.indexOf(d)<0&&c(i.formatLanguageCode(d))}),l}}]),e}(),HP=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],WP={1:function(t){return Number(t>1)},2:function(t){return Number(t!=1)},3:function(t){return 0},4:function(t){return Number(t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2)},5:function(t){return Number(t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5)},6:function(t){return Number(t==1?0:t>=2&&t<=4?1:2)},7:function(t){return Number(t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2)},8:function(t){return Number(t==1?0:t==2?1:t!=8&&t!=11?2:3)},9:function(t){return Number(t>=2)},10:function(t){return Number(t==1?0:t==2?1:t<7?2:t<11?3:4)},11:function(t){return Number(t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3)},12:function(t){return Number(t%10!=1||t%100==11)},13:function(t){return Number(t!==0)},14:function(t){return Number(t==1?0:t==2?1:t==3?2:3)},15:function(t){return Number(t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2)},16:function(t){return Number(t%10==1&&t%100!=11?0:t!==0?1:2)},17:function(t){return Number(t==1||t%10==1&&t%100!=11?0:1)},18:function(t){return Number(t==0?0:t==1?1:2)},19:function(t){return Number(t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3)},20:function(t){return Number(t==1?0:t==0||t%100>0&&t%100<20?1:2)},21:function(t){return Number(t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0)},22:function(t){return Number(t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3)}},ZP=["v1","v2","v3"],uv={zero:0,one:1,two:2,few:3,many:4,other:5};function VP(){var e={};return HP.forEach(function(t){t.lngs.forEach(function(n){e[n]={numbers:t.nr,plurals:WP[t.fc]}})}),e}var qP=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Ln(this,e),this.languageUtils=t,this.options=n,this.logger=Wn.create("pluralResolver"),(!this.options.compatibilityJSON||this.options.compatibilityJSON==="v4")&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=VP()}return Bn(e,[{key:"addRule",value:function(n,r){this.rules[n]=r}},{key:"getRule",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(n,{type:r.ordinal?"ordinal":"cardinal"})}catch{return}return this.rules[n]||this.rules[this.languageUtils.getLanguagePartFromCode(n)]}},{key:"needsPlural",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(n,r);return this.shouldUseIntlApi()?i&&i.resolvedOptions().pluralCategories.length>1:i&&i.numbers.length>1}},{key:"getPluralFormsOfKey",value:function(n,r){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(n,i).map(function(a){return"".concat(r).concat(a)})}},{key:"getSuffixes",value:function(n){var r=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=this.getRule(n,i);return a?this.shouldUseIntlApi()?a.resolvedOptions().pluralCategories.sort(function(l,c){return uv[l]-uv[c]}).map(function(l){return"".concat(r.options.prepend).concat(l)}):a.numbers.map(function(l){return r.getSuffix(n,l,i)}):[]}},{key:"getSuffix",value:function(n,r){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=this.getRule(n,i);return a?this.shouldUseIntlApi()?"".concat(this.options.prepend).concat(a.select(r)):this.getSuffixRetroCompatible(a,r):(this.logger.warn("no plural rule found for: ".concat(n)),"")}},{key:"getSuffixRetroCompatible",value:function(n,r){var i=this,a=n.noAbs?n.plurals(r):n.plurals(Math.abs(r)),l=n.numbers[a];this.options.simplifyPluralSuffix&&n.numbers.length===2&&n.numbers[0]===1&&(l===2?l="plural":l===1&&(l=""));var c=function(){return i.options.prepend&&l.toString()?i.options.prepend+l.toString():l.toString()};return this.options.compatibilityJSON==="v1"?l===1?"":typeof l=="number"?"_plural_".concat(l.toString()):c():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&n.numbers.length===2&&n.numbers[0]===1?c():this.options.prepend&&a.toString()?this.options.prepend+a.toString():a.toString()}},{key:"shouldUseIntlApi",value:function(){return!ZP.includes(this.options.compatibilityJSON)}}]),e}();function cv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function bn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?cv(Object(n),!0).forEach(function(r){Tn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):cv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var KP=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Ln(this,e),this.logger=Wn.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||function(n){return n},this.init(t)}return Bn(e,[{key:"init",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};n.interpolation||(n.interpolation={escapeValue:!0});var r=n.interpolation;this.escape=r.escape!==void 0?r.escape:NP,this.escapeValue=r.escapeValue!==void 0?r.escapeValue:!0,this.useRawValueToEscape=r.useRawValueToEscape!==void 0?r.useRawValueToEscape:!1,this.prefix=r.prefix?Ao(r.prefix):r.prefixEscaped||"{{",this.suffix=r.suffix?Ao(r.suffix):r.suffixEscaped||"}}",this.formatSeparator=r.formatSeparator?r.formatSeparator:r.formatSeparator||",",this.unescapePrefix=r.unescapeSuffix?"":r.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":r.unescapeSuffix||"",this.nestingPrefix=r.nestingPrefix?Ao(r.nestingPrefix):r.nestingPrefixEscaped||Ao("$t("),this.nestingSuffix=r.nestingSuffix?Ao(r.nestingSuffix):r.nestingSuffixEscaped||Ao(")"),this.nestingOptionsSeparator=r.nestingOptionsSeparator?r.nestingOptionsSeparator:r.nestingOptionsSeparator||",",this.maxReplaces=r.maxReplaces?r.maxReplaces:1e3,this.alwaysFormat=r.alwaysFormat!==void 0?r.alwaysFormat:!1,this.resetRegExp()}},{key:"reset",value:function(){this.options&&this.init(this.options)}},{key:"resetRegExp",value:function(){var n="".concat(this.prefix,"(.+?)").concat(this.suffix);this.regexp=new RegExp(n,"g");var r="".concat(this.prefix).concat(this.unescapePrefix,"(.+?)").concat(this.unescapeSuffix).concat(this.suffix);this.regexpUnescape=new RegExp(r,"g");var i="".concat(this.nestingPrefix,"(.+?)").concat(this.nestingSuffix);this.nestingRegexp=new RegExp(i,"g")}},{key:"interpolate",value:function(n,r,i,a){var l=this,c,d,p,_=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function v(O){return O.replace(/\$/g,"$$$$")}var m=function(b){if(b.indexOf(l.formatSeparator)<0){var g=rv(r,_,b);return l.alwaysFormat?l.format(g,void 0,i,bn(bn(bn({},a),r),{},{interpolationkey:b})):g}var k=b.split(l.formatSeparator),E=k.shift().trim(),D=k.join(l.formatSeparator).trim();return l.format(rv(r,_,E),D,i,bn(bn(bn({},a),r),{},{interpolationkey:E}))};this.resetRegExp();var y=a&&a.missingInterpolationHandler||this.options.missingInterpolationHandler,w=a&&a.interpolation&&a.interpolation.skipOnVariables!==void 0?a.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables,S=[{regex:this.regexpUnescape,safeValue:function(b){return v(b)}},{regex:this.regexp,safeValue:function(b){return l.escapeValue?v(l.escape(b)):v(b)}}];return S.forEach(function(O){for(p=0;c=O.regex.exec(n);){var b=c[1].trim();if(d=m(b),d===void 0)if(typeof y=="function"){var g=y(n,c,a);d=typeof g=="string"?g:""}else if(a&&a.hasOwnProperty(b))d="";else if(w){d=c[0];continue}else l.logger.warn("missed to pass in variable ".concat(b," for interpolating ").concat(n)),d="";else typeof d!="string"&&!l.useRawValueToEscape&&(d=tv(d));var k=O.safeValue(d);if(n=n.replace(c[0],k),w?(O.regex.lastIndex+=d.length,O.regex.lastIndex-=c[0].length):O.regex.lastIndex=0,p++,p>=l.maxReplaces)break}}),n}},{key:"nest",value:function(n,r){var i=this,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},l,c,d;function p(y,w){var S=this.nestingOptionsSeparator;if(y.indexOf(S)<0)return y;var O=y.split(new RegExp("".concat(S,"[ ]*{"))),b="{".concat(O[1]);y=O[0],b=this.interpolate(b,d);var g=b.match(/'/g),k=b.match(/"/g);(g&&g.length%2===0&&!k||k.length%2!==0)&&(b=b.replace(/'/g,'"'));try{d=JSON.parse(b),w&&(d=bn(bn({},w),d))}catch(E){return this.logger.warn("failed parsing options string in nesting for key ".concat(y),E),"".concat(y).concat(S).concat(b)}return delete d.defaultValue,y}for(;l=this.nestingRegexp.exec(n);){var _=[];d=bn({},a),d=d.replace&&typeof d.replace!="string"?d.replace:d,d.applyPostProcessor=!1,delete d.defaultValue;var v=!1;if(l[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(l[1])){var m=l[1].split(this.formatSeparator).map(function(y){return y.trim()});l[1]=m.shift(),_=m,v=!0}if(c=r(p.call(this,l[1].trim(),d),d),c&&l[0]===n&&typeof c!="string")return c;typeof c!="string"&&(c=tv(c)),c||(this.logger.warn("missed to resolve ".concat(l[1]," for nesting ").concat(n)),c=""),v&&(c=_.reduce(function(y,w){return i.format(y,w,a.lng,bn(bn({},a),{},{interpolationkey:l[1].trim()}))},c.trim())),n=n.replace(l[0],c),this.regexp.lastIndex=0}return n}}]),e}();function dv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function yr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?dv(Object(n),!0).forEach(function(r){Tn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):dv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function QP(e){var t=e.toLowerCase().trim(),n={};if(e.indexOf("(")>-1){var r=e.split("(");t=r[0].toLowerCase().trim();var i=r[1].substring(0,r[1].length-1);if(t==="currency"&&i.indexOf(":")<0)n.currency||(n.currency=i.trim());else if(t==="relativetime"&&i.indexOf(":")<0)n.range||(n.range=i.trim());else{var a=i.split(";");a.forEach(function(l){if(l){var c=l.split(":"),d=zP(c),p=d[0],_=d.slice(1),v=_.join(":").trim().replace(/^'+|'+$/g,"");n[p.trim()]||(n[p.trim()]=v),v==="false"&&(n[p.trim()]=!1),v==="true"&&(n[p.trim()]=!0),isNaN(v)||(n[p.trim()]=parseInt(v,10))}})}}return{formatName:t,formatOptions:n}}function jo(e){var t={};return function(r,i,a){var l=i+JSON.stringify(a),c=t[l];return c||(c=e(i,a),t[l]=c),c(r)}}var GP=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Ln(this,e),this.logger=Wn.create("formatter"),this.options=t,this.formats={number:jo(function(n,r){var i=new Intl.NumberFormat(n,r);return function(a){return i.format(a)}}),currency:jo(function(n,r){var i=new Intl.NumberFormat(n,yr(yr({},r),{},{style:"currency"}));return function(a){return i.format(a)}}),datetime:jo(function(n,r){var i=new Intl.DateTimeFormat(n,yr({},r));return function(a){return i.format(a)}}),relativetime:jo(function(n,r){var i=new Intl.RelativeTimeFormat(n,yr({},r));return function(a){return i.format(a,r.range||"day")}}),list:jo(function(n,r){var i=new Intl.ListFormat(n,yr({},r));return function(a){return i.format(a)}})},this.init(t)}return Bn(e,[{key:"init",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}},i=r.interpolation;this.formatSeparator=i.formatSeparator?i.formatSeparator:i.formatSeparator||","}},{key:"add",value:function(n,r){this.formats[n.toLowerCase().trim()]=r}},{key:"addCached",value:function(n,r){this.formats[n.toLowerCase().trim()]=jo(r)}},{key:"format",value:function(n,r,i,a){var l=this,c=r.split(this.formatSeparator),d=c.reduce(function(p,_){var v=QP(_),m=v.formatName,y=v.formatOptions;if(l.formats[m]){var w=p;try{var S=a&&a.formatParams&&a.formatParams[a.interpolationkey]||{},O=S.locale||S.lng||a.locale||a.lng||i;w=l.formats[m](p,O,yr(yr(yr({},y),a),S))}catch(b){l.logger.warn(b)}return w}else l.logger.warn("there was no format function for ".concat(m));return p},n);return d}}]),e}();function fv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function pv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?fv(Object(n),!0).forEach(function(r){Tn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function XP(e){var t=YP();return function(){var r=Kn(e),i;if(t){var a=Kn(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ga(this,i)}}function YP(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function JP(e,t){e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)}var e2=function(e){Nu(n,e);var t=XP(n);function n(r,i,a){var l,c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return Ln(this,n),l=t.call(this),Du&&Wr.call(Fr(l)),l.backend=r,l.store=i,l.services=a,l.languageUtils=a.languageUtils,l.options=c,l.logger=Wn.create("backendConnector"),l.waitingReads=[],l.maxParallelReads=c.maxParallelReads||10,l.readingCalls=0,l.maxRetries=c.maxRetries>=0?c.maxRetries:5,l.retryTimeout=c.retryTimeout>=1?c.retryTimeout:350,l.state={},l.queue=[],l.backend&&l.backend.init&&l.backend.init(a,c.backend,c),l}return Bn(n,[{key:"queueLoad",value:function(i,a,l,c){var d=this,p={},_={},v={},m={};return i.forEach(function(y){var w=!0;a.forEach(function(S){var O="".concat(y,"|").concat(S);!l.reload&&d.store.hasResourceBundle(y,S)?d.state[O]=2:d.state[O]<0||(d.state[O]===1?_[O]===void 0&&(_[O]=!0):(d.state[O]=1,w=!1,_[O]===void 0&&(_[O]=!0),p[O]===void 0&&(p[O]=!0),m[S]===void 0&&(m[S]=!0)))}),w||(v[y]=!0)}),(Object.keys(p).length||Object.keys(_).length)&&this.queue.push({pending:_,pendingCount:Object.keys(_).length,loaded:{},errors:[],callback:c}),{toLoad:Object.keys(p),pending:Object.keys(_),toLoadLanguages:Object.keys(v),toLoadNamespaces:Object.keys(m)}}},{key:"loaded",value:function(i,a,l){var c=i.split("|"),d=c[0],p=c[1];a&&this.emit("failedLoading",d,p,a),l&&this.store.addResourceBundle(d,p,l),this.state[i]=a?-1:2;var _={};this.queue.forEach(function(v){RP(v.loaded,[d],p),JP(v,i),a&&v.errors.push(a),v.pendingCount===0&&!v.done&&(Object.keys(v.loaded).forEach(function(m){_[m]||(_[m]={});var y=v.loaded[m];y.length&&y.forEach(function(w){_[m][w]===void 0&&(_[m][w]=!0)})}),v.done=!0,v.errors.length?v.callback(v.errors):v.callback())}),this.emit("loaded",_),this.queue=this.queue.filter(function(v){return!v.done})}},{key:"read",value:function(i,a,l){var c=this,d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,p=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,_=arguments.length>5?arguments[5]:void 0;if(!i.length)return _(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:i,ns:a,fcName:l,tried:d,wait:p,callback:_});return}this.readingCalls++;var v=function(S,O){if(c.readingCalls--,c.waitingReads.length>0){var b=c.waitingReads.shift();c.read(b.lng,b.ns,b.fcName,b.tried,b.wait,b.callback)}if(S&&O&&d<c.maxRetries){setTimeout(function(){c.read.call(c,i,a,l,d+1,p*2,_)},p);return}_(S,O)},m=this.backend[l].bind(this.backend);if(m.length===2){try{var y=m(i,a);y&&typeof y.then=="function"?y.then(function(w){return v(null,w)}).catch(v):v(null,y)}catch(w){v(w)}return}return m(i,a,v)}},{key:"prepareLoading",value:function(i,a){var l=this,c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},d=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),d&&d();typeof i=="string"&&(i=this.languageUtils.toResolveHierarchy(i)),typeof a=="string"&&(a=[a]);var p=this.queueLoad(i,a,c,d);if(!p.toLoad.length)return p.pending.length||d(),null;p.toLoad.forEach(function(_){l.loadOne(_)})}},{key:"load",value:function(i,a,l){this.prepareLoading(i,a,{},l)}},{key:"reload",value:function(i,a,l){this.prepareLoading(i,a,{reload:!0},l)}},{key:"loadOne",value:function(i){var a=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",c=i.split("|"),d=c[0],p=c[1];this.read(d,p,"read",void 0,void 0,function(_,v){_&&a.logger.warn("".concat(l,"loading namespace ").concat(p," for language ").concat(d," failed"),_),!_&&v&&a.logger.log("".concat(l,"loaded namespace ").concat(p," for language ").concat(d),v),a.loaded(i,_,v)})}},{key:"saveMissing",value:function(i,a,l,c,d){var p=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},_=arguments.length>6&&arguments[6]!==void 0?arguments[6]:function(){};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(a)){this.logger.warn('did not save key "'.concat(l,'" as the namespace "').concat(a,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(l==null||l==="")){if(this.backend&&this.backend.create){var v=pv(pv({},p),{},{isUpdate:d}),m=this.backend.create.bind(this.backend);if(m.length<6)try{var y;m.length===5?y=m(i,a,l,c,v):y=m(i,a,l,c),y&&typeof y.then=="function"?y.then(function(w){return _(null,w)}).catch(_):_(null,y)}catch(w){_(w)}else m(i,a,l,c,_,v)}!i||!i[0]||this.store.addResource(i[0],a,l,c)}}}]),n}(Wr);function hv(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(t){var n={};if(On(t[1])==="object"&&(n=t[1]),typeof t[1]=="string"&&(n.defaultValue=t[1]),typeof t[2]=="string"&&(n.tDescription=t[2]),On(t[2])==="object"||On(t[3])==="object"){var r=t[3]||t[2];Object.keys(r).forEach(function(i){n[i]=r[i]})}return n},interpolation:{escapeValue:!0,format:function(t,n,r,i){return t},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function mv(e){return typeof e.ns=="string"&&(e.ns=[e.ns]),typeof e.fallbackLng=="string"&&(e.fallbackLng=[e.fallbackLng]),typeof e.fallbackNS=="string"&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function _v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function An(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_v(Object(n),!0).forEach(function(r){Tn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_v(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function t2(e){var t=n2();return function(){var r=Kn(e),i;if(t){var a=Kn(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ga(this,i)}}function n2(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function As(){}function r2(e){var t=Object.getOwnPropertyNames(Object.getPrototypeOf(e));t.forEach(function(n){typeof e[n]=="function"&&(e[n]=e[n].bind(e))})}var Fl=function(e){Nu(n,e);var t=t2(n);function n(){var r,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;if(Ln(this,n),r=t.call(this),Du&&Wr.call(Fr(r)),r.options=mv(i),r.services={},r.logger=Wn,r.modules={external:[]},r2(Fr(r)),a&&!r.isInitialized&&!i.isClone){if(!r.options.initImmediate)return r.init(i,a),Ga(r,Fr(r));setTimeout(function(){r.init(i,a)},0)}return r}return Bn(n,[{key:"init",value:function(){var i=this,a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=arguments.length>1?arguments[1]:void 0;typeof a=="function"&&(l=a,a={}),!a.defaultNS&&a.defaultNS!==!1&&a.ns&&(typeof a.ns=="string"?a.defaultNS=a.ns:a.ns.indexOf("translation")<0&&(a.defaultNS=a.ns[0]));var c=hv();this.options=An(An(An({},c),this.options),mv(a)),this.options.compatibilityAPI!=="v1"&&(this.options.interpolation=An(An({},c.interpolation),this.options.interpolation)),a.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=a.keySeparator),a.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=a.nsSeparator);function d(b){return b?typeof b=="function"?new b:b:null}if(!this.options.isClone){this.modules.logger?Wn.init(d(this.modules.logger),this.options):Wn.init(null,this.options);var p;this.modules.formatter?p=this.modules.formatter:typeof Intl<"u"&&(p=GP);var _=new lv(this.options);this.store=new jP(this.options.resources,this.options);var v=this.services;v.logger=Wn,v.resourceStore=this.store,v.languageUtils=_,v.pluralResolver=new qP(_,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),p&&(!this.options.interpolation.format||this.options.interpolation.format===c.interpolation.format)&&(v.formatter=d(p),v.formatter.init(v,this.options),this.options.interpolation.format=v.formatter.format.bind(v.formatter)),v.interpolator=new KP(this.options),v.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},v.backendConnector=new e2(d(this.modules.backend),v.resourceStore,v,this.options),v.backendConnector.on("*",function(b){for(var g=arguments.length,k=new Array(g>1?g-1:0),E=1;E<g;E++)k[E-1]=arguments[E];i.emit.apply(i,[b].concat(k))}),this.modules.languageDetector&&(v.languageDetector=d(this.modules.languageDetector),v.languageDetector.init&&v.languageDetector.init(v,this.options.detection,this.options)),this.modules.i18nFormat&&(v.i18nFormat=d(this.modules.i18nFormat),v.i18nFormat.init&&v.i18nFormat.init(this)),this.translator=new sv(this.services,this.options),this.translator.on("*",function(b){for(var g=arguments.length,k=new Array(g>1?g-1:0),E=1;E<g;E++)k[E-1]=arguments[E];i.emit.apply(i,[b].concat(k))}),this.modules.external.forEach(function(b){b.init&&b.init(i)})}if(this.format=this.options.interpolation.format,l||(l=As),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){var m=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);m.length>0&&m[0]!=="dev"&&(this.options.lng=m[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined");var y=["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"];y.forEach(function(b){i[b]=function(){var g;return(g=i.store)[b].apply(g,arguments)}});var w=["addResource","addResources","addResourceBundle","removeResourceBundle"];w.forEach(function(b){i[b]=function(){var g;return(g=i.store)[b].apply(g,arguments),i}});var S=Gi(),O=function(){var g=function(E,D){i.isInitialized&&!i.initializedStoreOnce&&i.logger.warn("init: i18next is already initialized. You should call init just once!"),i.isInitialized=!0,i.options.isClone||i.logger.log("initialized",i.options),i.emit("initialized",i.options),S.resolve(D),l(E,D)};if(i.languages&&i.options.compatibilityAPI!=="v1"&&!i.isInitialized)return g(null,i.t.bind(i));i.changeLanguage(i.options.lng,g)};return this.options.resources||!this.options.initImmediate?O():setTimeout(O,0),S}},{key:"loadResources",value:function(i){var a=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:As,c=l,d=typeof i=="string"?i:this.language;if(typeof i=="function"&&(c=i),!this.options.resources||this.options.partialBundledLanguages){if(d&&d.toLowerCase()==="cimode")return c();var p=[],_=function(y){if(y){var w=a.services.languageUtils.toResolveHierarchy(y);w.forEach(function(S){p.indexOf(S)<0&&p.push(S)})}};if(d)_(d);else{var v=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);v.forEach(function(m){return _(m)})}this.options.preload&&this.options.preload.forEach(function(m){return _(m)}),this.services.backendConnector.load(p,this.options.ns,function(m){!m&&!a.resolvedLanguage&&a.language&&a.setResolvedLanguage(a.language),c(m)})}else c(null)}},{key:"reloadResources",value:function(i,a,l){var c=Gi();return i||(i=this.languages),a||(a=this.options.ns),l||(l=As),this.services.backendConnector.reload(i,a,function(d){c.resolve(),l(d)}),c}},{key:"use",value:function(i){if(!i)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!i.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return i.type==="backend"&&(this.modules.backend=i),(i.type==="logger"||i.log&&i.warn&&i.error)&&(this.modules.logger=i),i.type==="languageDetector"&&(this.modules.languageDetector=i),i.type==="i18nFormat"&&(this.modules.i18nFormat=i),i.type==="postProcessor"&&_b.addPostProcessor(i),i.type==="formatter"&&(this.modules.formatter=i),i.type==="3rdParty"&&this.modules.external.push(i),this}},{key:"setResolvedLanguage",value:function(i){if(!(!i||!this.languages)&&!(["cimode","dev"].indexOf(i)>-1))for(var a=0;a<this.languages.length;a++){var l=this.languages[a];if(!(["cimode","dev"].indexOf(l)>-1)&&this.store.hasLanguageSomeTranslations(l)){this.resolvedLanguage=l;break}}}},{key:"changeLanguage",value:function(i,a){var l=this;this.isLanguageChangingTo=i;var c=Gi();this.emit("languageChanging",i);var d=function(m){l.language=m,l.languages=l.services.languageUtils.toResolveHierarchy(m),l.resolvedLanguage=void 0,l.setResolvedLanguage(m)},p=function(m,y){y?(d(y),l.translator.changeLanguage(y),l.isLanguageChangingTo=void 0,l.emit("languageChanged",y),l.logger.log("languageChanged",y)):l.isLanguageChangingTo=void 0,c.resolve(function(){return l.t.apply(l,arguments)}),a&&a(m,function(){return l.t.apply(l,arguments)})},_=function(m){!i&&!m&&l.services.languageDetector&&(m=[]);var y=typeof m=="string"?m:l.services.languageUtils.getBestMatchFromCodes(m);y&&(l.language||d(y),l.translator.language||l.translator.changeLanguage(y),l.services.languageDetector&&l.services.languageDetector.cacheUserLanguage&&l.services.languageDetector.cacheUserLanguage(y)),l.loadResources(y,function(w){p(w,y)})};return!i&&this.services.languageDetector&&!this.services.languageDetector.async?_(this.services.languageDetector.detect()):!i&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(_):this.services.languageDetector.detect(_):_(i),c}},{key:"getFixedT",value:function(i,a,l){var c=this,d=function p(_,v){var m;if(On(v)!=="object"){for(var y=arguments.length,w=new Array(y>2?y-2:0),S=2;S<y;S++)w[S-2]=arguments[S];m=c.options.overloadTranslationOptionHandler([_,v].concat(w))}else m=An({},v);m.lng=m.lng||p.lng,m.lngs=m.lngs||p.lngs,m.ns=m.ns||p.ns,m.keyPrefix=m.keyPrefix||l||p.keyPrefix;var O=c.options.keySeparator||".",b;return m.keyPrefix&&Array.isArray(_)?b=_.map(function(g){return"".concat(m.keyPrefix).concat(O).concat(g)}):b=m.keyPrefix?"".concat(m.keyPrefix).concat(O).concat(_):_,c.t(b,m)};return typeof i=="string"?d.lng=i:d.lngs=i,d.ns=a,d.keyPrefix=l,d}},{key:"t",value:function(){var i;return this.translator&&(i=this.translator).translate.apply(i,arguments)}},{key:"exists",value:function(){var i;return this.translator&&(i=this.translator).exists.apply(i,arguments)}},{key:"setDefaultNamespace",value:function(i){this.options.defaultNS=i}},{key:"hasLoadedNamespace",value:function(i){var a=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;var c=this.resolvedLanguage||this.languages[0],d=this.options?this.options.fallbackLng:!1,p=this.languages[this.languages.length-1];if(c.toLowerCase()==="cimode")return!0;var _=function(y,w){var S=a.services.backendConnector.state["".concat(y,"|").concat(w)];return S===-1||S===2};if(l.precheck){var v=l.precheck(this,_);if(v!==void 0)return v}return!!(this.hasResourceBundle(c,i)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||_(c,i)&&(!d||_(p,i)))}},{key:"loadNamespaces",value:function(i,a){var l=this,c=Gi();return this.options.ns?(typeof i=="string"&&(i=[i]),i.forEach(function(d){l.options.ns.indexOf(d)<0&&l.options.ns.push(d)}),this.loadResources(function(d){c.resolve(),a&&a(d)}),c):(a&&a(),Promise.resolve())}},{key:"loadLanguages",value:function(i,a){var l=Gi();typeof i=="string"&&(i=[i]);var c=this.options.preload||[],d=i.filter(function(p){return c.indexOf(p)<0});return d.length?(this.options.preload=c.concat(d),this.loadResources(function(p){l.resolve(),a&&a(p)}),l):(a&&a(),Promise.resolve())}},{key:"dir",value:function(i){if(i||(i=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!i)return"rtl";var a=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],l=this.services&&this.services.languageUtils||new lv(hv());return a.indexOf(l.getLanguagePartFromCode(i))>-1||i.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}},{key:"cloneInstance",value:function(){var i=this,a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:As,c=An(An(An({},this.options),a),{isClone:!0}),d=new n(c);(a.debug!==void 0||a.prefix!==void 0)&&(d.logger=d.logger.clone(a));var p=["store","services","language"];return p.forEach(function(_){d[_]=i[_]}),d.services=An({},this.services),d.services.utils={hasLoadedNamespace:d.hasLoadedNamespace.bind(d)},d.translator=new sv(d.services,d.options),d.translator.on("*",function(_){for(var v=arguments.length,m=new Array(v>1?v-1:0),y=1;y<v;y++)m[y-1]=arguments[y];d.emit.apply(d,[_].concat(m))}),d.init(c,l),d.translator.options=d.options,d.translator.backendConnector.services.utils={hasLoadedNamespace:d.hasLoadedNamespace.bind(d)},d}},{key:"toJSON",value:function(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}]),n}(Wr);Tn(Fl,"createInstance",function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new Fl(e,t)});var Ot=Fl.createInstance();Ot.createInstance=Fl.createInstance;Ot.createInstance;Ot.dir;Ot.init;Ot.loadResources;Ot.reloadResources;var o2=Ot.use;Ot.changeLanguage;Ot.getFixedT;var qc=Ot.t;Ot.exists;Ot.setDefaultNamespace;Ot.hasLoadedNamespace;Ot.loadNamespaces;Ot.loadLanguages;const vv=()=>on("div",{children:[_e("h1",{children:"Det skjedde en feil"}),_e("p",{children:_e("i",{children:"Vennligst gå tilbake i nettleseren eller refresh siden"})})]}),i2="altinn",a2="FDK",s2="1.5rem",l2="1.875rem",u2="2.25rem",c2="3rem",d2="3.75rem",f2="#e3f7ff",p2="#d4f9e4",h2="#fbf6bd",m2="#000000",_2="#e3f7ff",v2="#d4f9e4",g2="#fbf6bd",y2="1.5rem",b2="1.75rem",x2="2.25rem",w2="1rem",S2="1.125rem",k2="1.5rem",C2="6rem",P2="1.5rem",E2="2.25rem",O2="0.75rem",z2="0.75rem",T2="0.375rem",L2="6.688rem",B2="4rem",R2="2.25rem",I2="3.75rem",N2="Altinn-DIN",D2="Regular",M2=1.5,F2="1rem",A2="3%",j2=0,$2="none",U2="none",H2="bold",W2="medium",Z2="medium",V2="#bcc7cc",q2="#bcc7cc",K2="0.75rem",Q2="1.5rem",G2="0.25rem",X2="0.5rem",Y2=.75,J2="1.5rem",eE="1.5rem",tE="medium",nE="1rem",rE="1.125rem",oE="1px",iE="0.5rem",aE="0.75rem",sE="1.125rem",lE="1.5rem",uE="1.125rem",cE="1.5rem",dE="#022f51",fE="#0062ba",pE="#0062ba",hE="#022f514d",mE="#D5203B",_E="#ffffff",vE="#e3f7ff",gE="#0062ba",yE="#ffffff",bE="#000000",xE="#004C8F",wE="#ffffff",SE="#0000004d",kE="#000000",CE="2px",PE="2px",EE="0.875rem",OE="1rem",zE="0.75rem",TE="1.125rem",LE="1.5rem",BE="1.5rem",RE="#000000",IE="0.5rem",NE="0.375rem",DE="2px",ME="#022f51",FE="#0062ba",AE="#efefef",jE="#bcc7cc",$E="#ffffff",UE="#ffffff",HE="#ffffff",WE="#f5f5f5",ZE="#bcc7cc",VE="#000000",qE="0.75rem",KE="0.375rem",QE="6.25rem",GE="9.375rem",XE="12.5rem",YE="18.75rem",JE="25rem",eO="#D5203B",tO="#8e1527",nO="1rem",rO="1.5rem",oO="2.25rem",iO="0.563rem",aO="1.125rem",sO="1rem",lO="100%",uO="auto",cO="2px",dO="#0062ba",fO="#ffffff",pO="#ffffff",hO="#000000",mO="#0062ba",_O="1.5rem",vO="0.125rem",gO="0.25rem",yO="#022f51",bO="#022f514d",xO="#022f51",wO="#022f51",SO="#ffffff",kO="#022f514d",CO="#ffffff",PO="#022f51",EO="2.25rem",OO="1.4rem",zO="1.5rem",TO="0.875rem",LO="1.125rem",BO="0.688rem",RO="1px",IO="#0062ba",NO="#004C8F",DO="#022f51",MO="#0062ba4d",FO="#ffffff",AO="#118849",jO="#0D6D3A",$O="#0C4D22",UO="#1188494d",HO="#E02E49",WO="#E02E49",ZO="#B11B31",VO="#e02e494d",qO="#98177E",KO="0.5rem",QO="0.5rem",GO="0.5rem",XO="1.125rem",YO="2.25rem",JO="3rem",ez="0.375rem",tz="0.563rem",nz="0.563rem",rz="#0062ba",oz="#ffffff",iz="#0062ba4d",az="#e3f7ff",sz="#0062ba",lz="#0062ba",uz="#ffffff",cz="#0062ba",dz="#004C8F",fz="#ffffff",pz="#e3f7ff",hz="#004C8F",mz="1px",_z="2.25rem",vz="3rem",gz="3.75rem",yz="1.5rem",bz="1.875rem",xz="2.5rem",wz="#008fd6",Sz="#0062ba",kz="#98177E",Cz="#ffffff",Pz="#ffffff",Ez="#ffffff",Oz="#D5203B",zz="#8e1527",Tz="#6a6a6a",Lz="0.75rem",Bz="0.375rem",Rz="2px",Iz="4px",Nz="#fbf6bd",Dz="#fbf6bd",Mz="#d4f9e4",Fz="#d4f9e4",Az=2.25,jz="1rem",$z="1.125rem",Uz="0.375rem",Hz="#D5203B",Wz="0.875rem",Zz="1px",Vz="2px",qz=.375,Kz=.75,Qz=1.5,Gz=2.25,Xz=3,Yz=3.75,Jz=4.5,eT=5.25,tT=6,nT=12,rT="#011728",oT="#022f51",iT="#004C8F",aT="#0062ba",sT="#008fd6",lT="#cff0ff",uT="#e3f7ff",cT="#8e1527",dT="#B11B31",fT="#D5203B",pT="#E02E49",hT="#f9cad3",mT="#FCE4E9",_T="#0C4D22",vT="#0D6D3A",gT="#118849",yT="#15A859",bT="#17c96b",xT="#d4f9e4",wT="#fbf6bd",ST="#ffda06",kT="#98177E",CT="#7E0C67",PT="#ffffff",ET="#000000",OT="#262626",zT="#6a6a6a",TT="#bcc7cc",LT="#efefef",BT="#f5f5f5",RT="#e0daf7",IT="#3f3161",NT="#e3f7ff",DT="#cff0ff",MT="#008fd6",FT="#0062ba",AT="#004C8F",jT="#022f51",$T="#D5203B",UT="#8e1527",HT="#FCE4E9",WT="#0D6D3A",ZT="#d4f9e4",VT="#008fd6",qT="#0062ba",KT="#0062ba",QT="#004C8F",GT="#ffda06",XT="#fbf6bd",YT="#98177E",JT="#7E0C67",eL="#98177E",tL="30%",nL="3px",rL="2px",oL="2.25rem",iL="0.75rem",aL="0.875rem",sL="1rem",lL="1rem",uL="1.125rem",cL="1rem",dL="1.125rem",fL="1.25rem",pL="1.125rem",hL="1.25rem",mL="1.5rem",_L="1.25rem",vL="1.5rem",gL="1.75rem",yL="1.5rem",bL="1.75rem",xL="2.25rem",wL="1.75rem",SL="2.25rem",kL="2.75rem",CL="1.75rem",PL="2.25rem",EL="2.75rem",OL="1.5rem",zL="1.75rem",TL="2.25rem",LL="1.25rem",BL="1.5rem",RL="1.75rem",IL="1.125rem",NL="1.25rem",DL="1.5rem",ML="1rem",FL="1.125rem",AL="1.25rem",jL="0.875rem",$L="1rem",UL="1.125rem",HL="1.5rem",WL="1rem",ZL="1rem",VL="1.125rem",qL="1rem",KL="1.125rem",QL="0.875rem",GL="1.125rem",XL="1.25rem",YL="1.25rem",JL="1.5rem",eB="Altinn-DIN",tB="Altinn-DIN",nB="Altinn-DIN",rB="Altinn-DIN",oB="Altinn-DIN",iB="0px",aB="540px",sB="768px",lB="960px",uB="1200px",cB="1600px",dB="Altinn-DIN",fB="Regular",pB=1.5,hB="1rem",mB="0.3px",_B=0,vB="none",gB="none",yB="0.75rem",bB="1.5rem",xB="2.25rem",wB="3rem",SB="3.75rem",kB="4.5rem",CB="5.25rem",PB="6rem",EB="7.5rem",OB="12rem",vb=Object.freeze(Object.defineProperty({__proto__:null,BorderWidthStandard:Vz,BorderWidthThin:Zz,BreakpointsLg:lB,BreakpointsMd:sB,BreakpointsSm:aB,BreakpointsXl:uB,BreakpointsXs:iB,BreakpointsXxl:cB,ColorsAccessibilityTabFocus:YT,ColorsAccessibilityVisited:JT,ColorsBlack:ET,ColorsBlue200:uT,ColorsBlue300:lT,ColorsBlue500:sT,ColorsBlue700:aT,ColorsBlue800:iT,ColorsBlue900:oT,ColorsBlue950:rT,ColorsBrandAltinnFirst200:NT,ColorsBrandAltinnFirst300:DT,ColorsBrandAltinnFirst500:MT,ColorsBrandAltinnFirst700:FT,ColorsBrandAltinnFirst800:AT,ColorsBrandAltinnFirst900:jT,ColorsBrandAltinnSecondPurple300:RT,ColorsBrandAltinnSecondPurple700:IT,ColorsErrorCalm:HT,ColorsErrorIntens:$T,ColorsErrorIntensHover:UT,ColorsGreen300:xT,ColorsGreen500:bT,ColorsGreen600:yT,ColorsGreen700:gT,ColorsGreen800:vT,ColorsGreen900:_T,ColorsInteractionButtonDefault:KT,ColorsInteractionButtonHover:QT,ColorsInteractionInteractionBorderDefault:VT,ColorsInteractionInteractionBorderHover:qT,ColorsNeutral100:BT,ColorsNeutral200:LT,ColorsNeutral400:TT,ColorsNeutral600:zT,ColorsNeutral800:OT,ColorsPurple600:kT,ColorsPurple700:CT,ColorsRed200:mT,ColorsRed300:hT,ColorsRed500:pT,ColorsRed600:fT,ColorsRed700:dT,ColorsRed800:cT,ColorsSuccessCalm:ZT,ColorsSuccessIntens:WT,ColorsWarningCalm:XT,ColorsWarningIntense:GT,ColorsWhite:PT,ColorsYellow300:wT,ColorsYellow500:ST,ComponentButtonBorderWidthDefault:mz,ComponentButtonColorFocusOutlineAll:qO,ComponentButtonFilledColorTextAll:FO,ComponentButtonFilledDangerColorBackgroundDefault:HO,ComponentButtonFilledDangerColorBackgroundDisabled:WO,ComponentButtonFilledDangerColorBackgroundHover:ZO,ComponentButtonFilledDangerColorBackgroundPressed:VO,ComponentButtonFilledPrimaryColorBackgroundDefault:IO,ComponentButtonFilledPrimaryColorBackgroundDisabled:MO,ComponentButtonFilledPrimaryColorBackgroundHover:NO,ComponentButtonFilledPrimaryColorBackgroundPressed:DO,ComponentButtonFilledSuccessColorBackgroundDefault:AO,ComponentButtonFilledSuccessColorBackgroundDisabled:UO,ComponentButtonFilledSuccessColorBackgroundHover:jO,ComponentButtonFilledSuccessColorBackgroundPressed:$O,ComponentButtonOutlinePrimaryColorBackgroundDefault:fz,ComponentButtonOutlinePrimaryColorBackgroundHover:pz,ComponentButtonOutlinePrimaryColorBackgroundPressed:hz,ComponentButtonOutlinePrimaryColorBorderDefault:cz,ComponentButtonOutlinePrimaryColorBorderHover:dz,ComponentButtonOutlinePrimaryColorTextDefault:lz,ComponentButtonOutlinePrimaryColorTextPressed:uz,ComponentButtonQuietPrimaryColorBackgroundHover:az,ComponentButtonQuietPrimaryColorBackgroundPressed:sz,ComponentButtonQuietPrimaryColorTextDefault:rz,ComponentButtonQuietPrimaryColorTextDisabled:iz,ComponentButtonQuietPrimaryColorTextPressed:oz,ComponentButtonQuietSpacePaddingXLarge:nz,ComponentButtonQuietSpacePaddingXMedium:tz,ComponentButtonQuietSpacePaddingXSmall:ez,ComponentButtonSizeHeightLarge:gz,ComponentButtonSizeHeightMedium:vz,ComponentButtonSizeHeightSmall:_z,ComponentButtonSizeIconLarge:xz,ComponentButtonSizeIconMedium:bz,ComponentButtonSizeIconSmall:yz,ComponentButtonSpaceGapLarge:GO,ComponentButtonSpaceGapMedium:QO,ComponentButtonSpaceGapSmall:KO,ComponentButtonSpacePaddingXLarge:JO,ComponentButtonSpacePaddingXMedium:YO,ComponentButtonSpacePaddingXSmall:XO,ComponentCheckboxBorderWidthSmall:PE,ComponentCheckboxBorderWidthXsmall:CE,ComponentCheckboxColorBackgroundChecked:gE,ComponentCheckboxColorBackgroundDefault:_E,ComponentCheckboxColorBackgroundError:yE,ComponentCheckboxColorBackgroundHover:vE,ComponentCheckboxColorBorderChecked:pE,ComponentCheckboxColorBorderDefault:dE,ComponentCheckboxColorBorderDisabled:hE,ComponentCheckboxColorBorderError:mE,ComponentCheckboxColorBorderHover:fE,ComponentCheckboxColorTextChecked:wE,ComponentCheckboxColorTextDefault:bE,ComponentCheckboxColorTextDisabled:SE,ComponentCheckboxColorTextError:kE,ComponentCheckboxColorTextHover:xE,ComponentCheckboxFontSizeSm:OE,ComponentCheckboxFontSizeXs:EE,ComponentCheckboxGroupSpaceGapXSmall:oO,ComponentCheckboxGroupSpaceGapXXsmall:rO,ComponentCheckboxGroupSpaceGapYSmall:aO,ComponentCheckboxGroupSpaceGapYXsmall:iO,ComponentCheckboxSizeHeightSmall:cE,ComponentCheckboxSizeHeightXsmall:uE,ComponentCheckboxSizeWidthSmall:lE,ComponentCheckboxSizeWidthXsmall:sE,ComponentCheckboxSpaceGapSmall:aE,ComponentCheckboxSpaceGapXsmall:iE,ComponentErrorMessageColorText:Hz,ComponentErrorMessageFontSizeXs:Wz,ComponentErrorMessageSpacePaddingTop:Uz,ComponentExpandableRowBorderWidthDefault:oE,ComponentExpandableRowColorBorderBottomDefault:q2,ComponentExpandableRowColorBorderTopDefault:V2,ComponentExpandableRowFontSizeHeaderBreakpointMd:rE,ComponentExpandableRowFontSizeHeaderBreakpointSm:nE,ComponentExpandableRowFontWeightHeader:tE,ComponentExpandableRowSizeIconXs:eE,ComponentExpandableRowSpaceGapTitleMd:J2,ComponentExpandableRowSpaceGapTitleXs:Y2,ComponentExpandableRowSpacePaddingBottomXs:X2,ComponentExpandableRowSpacePaddingTopXs:G2,ComponentExpandableRowSpacePaddingXMd:Q2,ComponentExpandableRowSpacePaddingXXs:K2,ComponentFieldDescriptionColorTextDefault:RE,ComponentFieldDescriptionSpaceTopSmall:IE,ComponentFieldDescriptionSpaceTopXsmall:NE,ComponentFieldsetSpaceGapYLarge:BE,ComponentFieldsetSpaceGapYMedium:LE,ComponentFieldsetSpaceGapYSmall:TE,ComponentFieldsetSpaceGapYXsmall:zE,ComponentIconButtonBorderWidthDefault:RO,ComponentIconButtonColorBackgroundDefault:CO,ComponentIconButtonColorBackgroundHover:PO,ComponentIconButtonColorBorderDefault:yO,ComponentIconButtonColorBorderDisabled:bO,ComponentIconButtonColorIconDefault:wO,ComponentIconButtonColorIconDisabled:kO,ComponentIconButtonColorIconHover:SO,ComponentIconButtonColorOutlineFocus:xO,ComponentIconButtonSizeLargeCircle:EO,ComponentIconButtonSizeLargeIcon:OO,ComponentIconButtonSizeMediumCircle:zO,ComponentIconButtonSizeMediumIcon:TO,ComponentIconButtonSizeSmallCircle:LO,ComponentIconButtonSizeSmallIcon:BO,ComponentIconSizeLg:c2,ComponentIconSizeMd:u2,ComponentIconSizeSm:l2,ComponentIconSizeXl:d2,ComponentIconSizeXs:s2,ComponentInputBorderWidthDefault:Rz,ComponentInputBorderWidthFocus:Iz,ComponentInputColorBackgroundDefault:Cz,ComponentInputColorBackgroundFocus:Ez,ComponentInputColorBackgroundHover:Pz,ComponentInputColorBorderDefault:wz,ComponentInputColorBorderHover:Sz,ComponentInputColorOutlineFocus:kz,ComponentInputDisabledColorBorderDefault:Tz,ComponentInputErrorColorBorderDefault:Oz,ComponentInputErrorColorBorderHover:zz,ComponentInputFontSizeMd:$z,ComponentInputFontSizeSm:jz,ComponentInputReadOnlyConfirmColorBackgroundDefault:Mz,ComponentInputReadOnlyConfirmColorBorderDefault:Fz,ComponentInputReadOnlyInfoColorBackgroundDefault:Dz,ComponentInputReadOnlyInfoColorBorderDefault:Nz,ComponentInputSizeMinHeightDefault:Az,ComponentInputSpacePaddingX:Lz,ComponentInputSpacePaddingY:Bz,ComponentLabelFontWeightDefault:Z2,ComponentLegendFontWeightDefault:W2,ComponentPanelColorArrowDefault:_2,ComponentPanelColorArrowSuccess:v2,ComponentPanelColorArrowWarning:g2,ComponentPanelColorBackgroundDefault:f2,ComponentPanelColorBackgroundSuccess:p2,ComponentPanelColorBackgroundWarning:h2,ComponentPanelColorTextDefault:m2,ComponentPanelFontSizeBodyBreakpointMd:S2,ComponentPanelFontSizeBodyBreakpointSm:w2,ComponentPanelFontSizeHeaderBreakpointLg:x2,ComponentPanelFontSizeHeaderBreakpointMd:b2,ComponentPanelFontSizeHeaderBreakpointSm:y2,ComponentPanelFontWeightHeading:H2,ComponentPanelSizeIconMd:I2,ComponentPanelSizeIconXs:R2,ComponentPanelSpaceArrowLeftMd:L2,ComponentPanelSpaceArrowLeftXs:B2,ComponentPanelSpaceGapMd:z2,ComponentPanelSpaceGapXs:O2,ComponentPanelSpacePaddingXMd:C2,ComponentPanelSpacePaddingXXs:k2,ComponentPanelSpacePaddingYMd:E2,ComponentPanelSpacePaddingYXs:P2,ComponentPanelSpaceTextGroupGapXs:T2,ComponentPanelTypographyDefaultFontFamily:N2,ComponentPanelTypographyDefaultFontSize:F2,ComponentPanelTypographyDefaultFontWeight:D2,ComponentPanelTypographyDefaultLetterSpacing:A2,ComponentPanelTypographyDefaultLineHeight:M2,ComponentPanelTypographyDefaultParagraphSpacing:j2,ComponentPanelTypographyDefaultTextCase:U2,ComponentPanelTypographyDefaultTextDecoration:$2,ComponentTextareaBorderWidthNormal:DE,ComponentTextareaColorBackgroundDefault:$E,ComponentTextareaColorBackgroundFocus:HE,ComponentTextareaColorBackgroundHover:UE,ComponentTextareaColorBackgroundReadOnly:WE,ComponentTextareaColorBorderDefault:ME,ComponentTextareaColorBorderDisabled:AE,ComponentTextareaColorBorderHover:FE,ComponentTextareaColorBorderReadOnly:jE,ComponentTextareaColorTextDefault:VE,ComponentTextareaColorTextDisabled:ZE,ComponentTextareaErrorColorBorderDefault:eO,ComponentTextareaErrorColorBorderHover:tO,ComponentTextareaFontSizeSm:nO,ComponentTextareaSizeMinHeightLarge:YE,ComponentTextareaSizeMinHeightMedium:XE,ComponentTextareaSizeMinHeightSmall:GE,ComponentTextareaSizeMinHeightXlarge:JE,ComponentTextareaSizeMinHeightXsmall:QE,ComponentTextareaSpacePaddingX:qE,ComponentTextareaSpacePaddingY:KE,ComponentToggleButtonBorderWidthInactive:cO,ComponentToggleButtonColorBackgroundActive:dO,ComponentToggleButtonColorBackgroundInactive:fO,ComponentToggleButtonColorBorderInactive:mO,ComponentToggleButtonColorTextActive:pO,ComponentToggleButtonColorTextInactive:hO,ComponentToggleButtonFontSizeSm:sO,ComponentToggleButtonSizeMinWidthMd:uO,ComponentToggleButtonSizeMinWidthSm:lO,ComponentToggleButtonSpacePaddingBottom:gO,ComponentToggleButtonSpacePaddingTop:vO,ComponentToggleButtonSpacePaddingX:_O,FontFamilyBody:rB,FontFamilyDefault:eB,FontFamilyHeading:tB,FontFamilyIngress:nB,FontFamilyLabel:oB,FontSize100:iL,FontSize200:aL,FontSize300:sL,FontSize400BreakpointMd:uL,FontSize400BreakpointSm:lL,FontSize500BreakpointLg:fL,FontSize500BreakpointMd:dL,FontSize500BreakpointSm:cL,FontSize600BreakpointLg:mL,FontSize600BreakpointMd:hL,FontSize600BreakpointSm:pL,FontSize700BreakpointLg:gL,FontSize700BreakpointMd:vL,FontSize700BreakpointSm:_L,FontSize800BreakpointLg:xL,FontSize800BreakpointMd:bL,FontSize800BreakpointSm:yL,FontSize900BreakpointLg:kL,FontSize900BreakpointMd:SL,FontSize900BreakpointSm:wL,FontSizeBodyLargeBreakpointMd:VL,FontSizeBodyLargeBreakpointSm:ZL,FontSizeBodyMedium:WL,FontSizeComponentSizeLg:HL,FontSizeComponentSizeMd:UL,FontSizeComponentSizeSm:$L,FontSizeComponentSizeXs:jL,FontSizeDetailDefault:QL,FontSizeHeadingH1BreakpointLg:EL,FontSizeHeadingH1BreakpointMd:PL,FontSizeHeadingH1BreakpointSm:CL,FontSizeHeadingH2BreakpointLg:TL,FontSizeHeadingH2BreakpointMd:zL,FontSizeHeadingH2BreakpointSm:OL,FontSizeHeadingH3BreakpointLg:RL,FontSizeHeadingH3BreakpointMd:BL,FontSizeHeadingH3BreakpointSm:LL,FontSizeHeadingH4BreakpointLg:DL,FontSizeHeadingH4BreakpointMd:NL,FontSizeHeadingH4BreakpointSm:IL,FontSizeHeadingH5BreakpointLg:AL,FontSizeHeadingH5BreakpointMd:FL,FontSizeHeadingH5BreakpointSm:ML,FontSizeIngressMediumBreakpointMd:JL,FontSizeIngressMediumBreakpointSm:YL,FontSizeIngressSmallBreakpointMd:XL,FontSizeIngressSmallBreakpointSm:GL,FontSizeLabelSmallBreakpointMd:KL,FontSizeLabelSmallBreakpointSm:qL,InteractiveComponentsBorderRadiusNormal:nL,InteractiveComponentsBorderWidthNormal:rL,InteractiveComponentsColorsDisabledOpacity:tL,InteractiveComponentsColorsFocusOutline:eL,ParagraphSpaceDefault:oL,SizeBase:yB,SizeX10:EB,SizeX16:OB,SizeX2:bB,SizeX3:xB,SizeX4:wB,SizeX5:SB,SizeX6:kB,SizeX7:CB,SizeX8:PB,SpaceBase:Kz,SpaceHalf:qz,SpaceX16:nT,SpaceX2:Qz,SpaceX3:Gz,SpaceX4:Xz,SpaceX5:Yz,SpaceX6:Jz,SpaceX7:eT,SpaceX8:tT,TokenSetOrder0:i2,TokenSetOrder1:a2,TypographyDefaultFontFamily:dB,TypographyDefaultFontSize:hB,TypographyDefaultFontWeight:fB,TypographyDefaultLetterSpacing:mB,TypographyDefaultLineHeight:pB,TypographyDefaultParagraphSpacing:_B,TypographyDefaultTextCase:gB,TypographyDefaultTextDecoration:vB},Symbol.toStringTag,{value:"Module"})),zB={0:{value:"altinn",type:"other"},1:{value:"FDK",type:"other"}},TB={icon:{size:{xs:{value:"1.5rem",type:"sizing"},sm:{value:"1.875rem",type:"sizing"},md:{value:"2.25rem",type:"sizing"},lg:{value:"3rem",type:"sizing"},xl:{value:"3.75rem",type:"sizing"}}},panel:{color:{background:{default:{value:"#e3f7ff",type:"color"},success:{value:"#d4f9e4",type:"color"},warning:{value:"#fbf6bd",type:"color"}},text:{default:{value:"#000000",type:"color"}},arrow:{default:{value:"#e3f7ff",type:"color"},success:{value:"#d4f9e4",type:"color"},warning:{value:"#fbf6bd",type:"color"}}},font_size:{header:{breakpoint_sm:{value:"1.5rem",type:"fontSizes"},breakpoint_md:{value:"1.75rem",type:"fontSizes"},breakpoint_lg:{value:"2.25rem",type:"fontSizes"}},body:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"}}},space:{padding:{x:{xs:{value:"1.5rem",type:"spacing"},md:{value:"6rem",type:"spacing"}},y:{xs:{value:"1.5rem",type:"spacing"},md:{value:"2.25rem",type:"spacing"}}},gap:{xs:{value:"0.75rem",type:"spacing"},md:{value:"0.75rem",type:"spacing"}},text_group:{gap:{xs:{value:"0.375rem",type:"spacing"}}},arrow_left:{md:{value:"6.688rem",type:"spacing"},xs:{value:"4rem",type:"spacing"}}},size:{icon:{xs:{value:"2.25rem",type:"sizing"},md:{value:"3.75rem",type:"sizing"}}},typography:{default:{fontFamily:{value:"Altinn-DIN",type:"fontFamily"},fontWeight:{value:"Regular",type:"fontWeight"},lineHeight:{value:1.5,type:"lineHeight"},fontSize:{value:"1rem",type:"fontSize"},letterSpacing:{value:"3%",type:"letterSpacing"},paragraphSpacing:{value:0,type:"paragraphSpacing"},textDecoration:{value:"none",type:"textDecoration"},textCase:{value:"none",type:"textCase"}}},font_weight:{heading:{value:"bold",type:"fontWeights"}}},legend:{font_weight:{default:{value:"medium",type:"fontWeights"}}},label:{font_weight:{default:{value:"medium",type:"fontWeights"}}},expandable_row:{color:{border_top:{default:{value:"#bcc7cc",type:"color"}},border_bottom:{default:{value:"#bcc7cc",type:"color"}}},space:{padding:{x:{xs:{value:"0.75rem",type:"spacing"},md:{value:"1.5rem",type:"spacing"}},top:{xs:{value:"0.25rem",type:"spacing"}},bottom:{xs:{value:"0.5rem",type:"spacing"}}},gap:{title:{xs:{value:.75,type:"spacing"},md:{value:"1.5rem",type:"spacing"}}}},size:{icon:{xs:{value:"1.5rem",type:"sizing"}}},font_weight:{header:{value:"medium",type:"fontWeights"}},font_size:{header:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"}}},border_width:{default:{value:"1px",type:"borderWidth"}}},checkbox:{space:{gap:{xsmall:{value:"0.5rem",type:"spacing"},small:{value:"0.75rem",type:"spacing"}}},size:{width:{xsmall:{value:"1.125rem",type:"sizing"},small:{value:"1.5rem",type:"sizing"}},height:{xsmall:{value:"1.125rem",type:"sizing"},small:{value:"1.5rem",type:"sizing"}}},color:{border:{default:{value:"#022f51",type:"color"},hover:{value:"#0062ba",type:"color"},checked:{value:"#0062ba",type:"color"},disabled:{value:"#022f514d",type:"color"},error:{value:"#D5203B",type:"color"}},background:{default:{value:"#ffffff",type:"color"},hover:{value:"#e3f7ff",type:"color"},checked:{value:"#0062ba",type:"color"},error:{value:"#ffffff",type:"color"}},text:{default:{value:"#000000",type:"color"},hover:{value:"#004C8F",type:"color"},checked:{value:"#ffffff",type:"color"},disabled:{value:"#0000004d",type:"color"},error:{value:"#000000",type:"color"}}},border_width:{xsmall:{value:"2px",type:"borderWidth"},small:{value:"2px",type:"borderWidth"}},font_size:{xs:{value:"0.875rem",type:"fontSizes"},sm:{value:"1rem",type:"fontSizes"}}},fieldset:{space:{gap:{y:{xsmall:{value:"0.75rem",type:"spacing"},small:{value:"1.125rem",type:"spacing"},medium:{value:"1.5rem",type:"spacing"},large:{value:"1.5rem",type:"spacing"}}}}},field_description:{color:{text:{default:{value:"#000000",type:"color"}}},space:{top:{small:{value:"0.5rem",type:"spacing"},xsmall:{value:"0.375rem",type:"spacing"}}}},textarea:{border_width:{normal:{value:"2px",type:"borderWidth"}},color:{border:{default:{value:"#022f51",type:"color"},hover:{value:"#0062ba",type:"color"},disabled:{value:"#efefef",type:"color"},"read-only":{value:"#bcc7cc",type:"color"}},background:{default:{value:"#ffffff",type:"color"},hover:{value:"#ffffff",type:"color"},focus:{value:"#ffffff",type:"color"},"read-only":{value:"#f5f5f5",type:"color"}},text:{disabled:{value:"#bcc7cc",type:"color"},default:{value:"#000000",type:"color"}}},space:{padding:{x:{value:"0.75rem",type:"spacing"},y:{value:"0.375rem",type:"spacing"}}},size:{min_height:{xsmall:{value:"6.25rem",type:"sizing"},small:{value:"9.375rem",type:"sizing"},medium:{value:"12.5rem",type:"sizing"},large:{value:"18.75rem",type:"sizing"},xlarge:{value:"25rem",type:"sizing"}}},error:{color:{border:{default:{value:"#D5203B",type:"color"},hover:{value:"#8e1527",type:"color"}}}},font_size:{sm:{value:"1rem",type:"fontSizes"}}},"checkbox-group":{space:{gap:{x:{xsmall:{value:"1.5rem",type:"spacing"},small:{value:"2.25rem",type:"spacing"}},y:{xsmall:{value:"0.563rem",type:"spacing"},small:{value:"1.125rem",type:"spacing"}}}}},toggle_button:{font_size:{sm:{value:"1rem",type:"fontSizes"}},size:{min_width:{sm:{value:"100%",type:"sizing"},md:{value:"auto",type:"sizing"}}},border_width:{inactive:{value:"2px",type:"borderWidth"}},color:{background:{active:{value:"#0062ba",type:"color"},inactive:{value:"#ffffff",type:"color"}},text:{active:{value:"#ffffff",type:"color"},inactive:{value:"#000000",type:"color"}},border:{inactive:{value:"#0062ba",type:"color"}}},space:{padding:{x:{value:"1.5rem",type:"spacing"},top:{value:"0.125rem",type:"spacing"},bottom:{value:"0.25rem",type:"spacing"}}}},icon_button:{color:{border:{default:{value:"#022f51",type:"color"},disabled:{value:"#022f514d",type:"color"}},outline:{focus:{value:"#022f51",type:"color"}},icon:{default:{value:"#022f51",type:"color"},hover:{value:"#ffffff",type:"color"},disabled:{value:"#022f514d",type:"color"}},background:{default:{value:"#ffffff",type:"color"},hover:{value:"#022f51",type:"color"}}},size:{large:{circle:{value:"2.25rem",type:"sizing"},icon:{value:"1.4rem",type:"sizing"}},medium:{circle:{value:"1.5rem",type:"sizing"},icon:{value:"0.875rem",type:"sizing"}},small:{circle:{value:"1.125rem",type:"sizing"},icon:{value:"0.688rem",type:"sizing"}}},border_width:{default:{value:"1px",type:"borderWidth"}}},button:{filled:{primary:{color:{background:{default:{value:"#0062ba",type:"color"},hover:{value:"#004C8F",type:"color"},pressed:{value:"#022f51",type:"color"},disabled:{value:"#0062ba4d",type:"color"}}}},color:{text:{all:{value:"#ffffff",type:"color"}}},success:{color:{background:{default:{value:"#118849",type:"color"},hover:{value:"#0D6D3A",type:"color"},pressed:{value:"#0C4D22",type:"color"},disabled:{value:"#1188494d",type:"color"}}}},danger:{color:{background:{default:{value:"#E02E49",type:"color"},disabled:{value:"#E02E49",type:"color"},hover:{value:"#B11B31",type:"color"},pressed:{value:"#e02e494d",type:"color"}}}}},color:{focus_outline:{all:{value:"#98177E",type:"color"}}},space:{gap:{small:{value:"0.5rem",type:"spacing"},medium:{value:"0.5rem",type:"spacing"},large:{value:"0.5rem",type:"spacing"}},padding:{x:{small:{value:"1.125rem",type:"spacing"},medium:{value:"2.25rem",type:"spacing"},large:{value:"3rem",type:"spacing"}}}},quiet:{space:{padding:{x:{small:{value:"0.375rem",type:"spacing"},medium:{value:"0.563rem",type:"spacing"},large:{value:"0.563rem",type:"spacing"}}}},primary:{color:{text:{default:{value:"#0062ba",type:"color"},pressed:{value:"#ffffff",type:"color"},disabled:{value:"#0062ba4d",type:"color"}},background:{hover:{value:"#e3f7ff",type:"color"},pressed:{value:"#0062ba",type:"color"}}}}},outline:{primary:{color:{text:{default:{value:"#0062ba",type:"color"},pressed:{value:"#ffffff",type:"color"}},border:{default:{value:"#0062ba",type:"color"},hover:{value:"#004C8F",type:"color"}},background:{default:{value:"#ffffff",type:"color"},hover:{value:"#e3f7ff",type:"color"},pressed:{value:"#004C8F",type:"color"}}}}},border_width:{default:{value:"1px",type:"borderWidth"}},size:{height:{small:{value:"2.25rem",type:"sizing"},medium:{value:"3rem",type:"sizing"},large:{value:"3.75rem",type:"sizing"}},icon:{small:{value:"1.5rem",type:"sizing"},medium:{value:"1.875rem",type:"sizing"},large:{value:"2.5rem",type:"sizing"}}}},input:{color:{border:{default:{value:"#008fd6",type:"color"},hover:{value:"#0062ba",type:"color"}},outline:{focus:{value:"#98177E",type:"color",description:"Braking: Focus for input should have outline-border with dark blue"}},background:{default:{value:"#ffffff",type:"color"},hover:{value:"#ffffff",type:"color"},focus:{value:"#ffffff",type:"color"}}},error:{color:{border:{default:{value:"#D5203B",type:"color"},hover:{value:"#8e1527",type:"color"}}}},disabled:{color:{border:{default:{value:"#6a6a6a",type:"color"}}}},space:{padding:{x:{value:"0.75rem",type:"spacing"},y:{value:"0.375rem",type:"spacing"}}},border_width:{default:{value:"2px",type:"borderWidth"},focus:{value:"4px",type:"borderWidth"}},read_only_info:{color:{border:{default:{value:"#fbf6bd",type:"color"}},background:{default:{value:"#fbf6bd",type:"color"}}}},read_only_confirm:{color:{background:{default:{value:"#d4f9e4",type:"color"}},border:{default:{value:"#d4f9e4",type:"color"}}}},size:{min_height:{default:{value:2.25,type:"sizing"}}},font_size:{sm:{value:"1rem",type:"fontSizes"},md:{value:"1.125rem",type:"fontSizes"}}},error_message:{space:{padding:{top:{value:"0.375rem",type:"spacing"}}},color:{text:{value:"#D5203B",type:"color"}},font_size:{xs:{value:"0.875rem",type:"fontSizes"}}}},LB={thin:{value:"1px",type:"borderWidth"},standard:{value:"2px",type:"borderWidth"}},BB={half:{value:.375,type:"spacing"},base:{value:.75,type:"spacing"},x2:{value:1.5,type:"spacing"},x3:{value:2.25,type:"spacing"},x4:{value:3,type:"spacing"},x5:{value:3.75,type:"spacing"},x6:{value:4.5,type:"spacing"},x7:{value:5.25,type:"spacing"},x8:{value:6,type:"spacing"},x16:{value:12,type:"spacing"}},RB={"blue-950":{value:"#011728",type:"color"},"blue-900":{value:"#022f51",type:"color"},"blue-800":{value:"#004C8F",type:"color"},"blue-700":{value:"#0062ba",type:"color"},"blue-500":{value:"#008fd6",type:"color",description:"Den gamle hovedblåfargen til Altinn.  Ble byttet ut med #008FD6 Januar 2021. #1EADF7 skal fortsatt brukes på modalbakgrunner og knapper hvor det er svart tekst. "},"blue-300":{value:"#cff0ff",type:"color"},"blue-200":{value:"#e3f7ff",type:"color"},"red-800":{value:"#8e1527",type:"color"},"red-700":{value:"#B11B31",type:"color"},"red-600":{value:"#D5203B",type:"color"},"red-500":{value:"#E02E49",type:"color"},"red-300":{value:"#f9cad3",type:"color"},"red-200":{value:"#FCE4E9",type:"color"},"green-900":{value:"#0C4D22",type:"color"},"green-800":{value:"#0D6D3A",type:"color"},"green-700":{value:"#118849",type:"color"},"green-600":{value:"#15A859",type:"color"},"green-500":{value:"#17c96b",type:"color"},"green-300":{value:"#d4f9e4",type:"color"},"yellow-300":{value:"#fbf6bd",type:"color"},"yellow-500":{value:"#ffda06",type:"color"},"purple-600":{value:"#98177E",type:"color"},"purple-700":{value:"#7E0C67",type:"color"},white:{value:"#ffffff",type:"color"},black:{value:"#000000",type:"color"},"neutral-800":{value:"#262626",type:"color"},"neutral-600":{value:"#6a6a6a",type:"color"},"neutral-400":{value:"#bcc7cc",type:"color"},"neutral-200":{value:"#efefef",type:"color"},"neutral-100":{value:"#f5f5f5",type:"color"},brand:{altinn:{second:{"purple-300":{value:"#e0daf7",type:"color"},"purple-700":{value:"#3f3161",type:"color"}},first:{200:{value:"#e3f7ff",type:"color"},300:{value:"#cff0ff",type:"color"},500:{value:"#008fd6",type:"color"},700:{value:"#0062ba",type:"color"},800:{value:"#004C8F",type:"color"},900:{value:"#022f51",type:"color"}}}},error:{intens:{value:"#D5203B",type:"color",hover2:{value:"{colors.red-800}",type:"color"},hover:{value:"{colors.red-800}",type:"color"}},intens_hover:{value:"#8e1527",type:"color"},calm:{value:"#FCE4E9",type:"color"}},success:{intens:{value:"#0D6D3A",type:"color"},calm:{value:"#d4f9e4",type:"color"}},interaction:{"interaction-border-default":{value:"#008fd6",type:"color"},"interaction-border-hover":{value:"#0062ba",type:"color"},"button-default":{value:"#0062ba",type:"color"},"button-hover":{value:"#004C8F",type:"color"}},warning:{intense:{value:"#ffda06",type:"color"},calm:{value:"#fbf6bd",type:"color"}},accessibility:{"tab-focus":{value:"#98177E",type:"color"},visited:{value:"#7E0C67",type:"color"}}},IB={colors:{focus_outline:{value:"#98177E",type:"color"},disabled:{opacity:{value:"30%",type:"color"}}},border_radius:{normal:{value:"3px",type:"borderRadius"}},border_width:{normal:{value:"2px",type:"borderWidth"}}},NB={default:{value:"2.25rem",type:"paragraphSpacing"}},DB={100:{value:"0.75rem",type:"fontSizes"},200:{value:"0.875rem",type:"fontSizes"},300:{value:"1rem",type:"fontSizes"},400:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"}},500:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"},breakpoint_lg:{value:"1.25rem",type:"fontSizes"}},600:{breakpoint_sm:{value:"1.125rem",type:"fontSizes",description:"18px"},breakpoint_md:{value:"1.25rem",type:"fontSizes",description:"20px"},breakpoint_lg:{value:"1.5rem",type:"fontSizes",description:"24px"}},700:{breakpoint_sm:{value:"1.25rem",type:"fontSizes",description:"20px"},breakpoint_md:{value:"1.5rem",type:"fontSizes",description:"24px"},breakpoint_lg:{value:"1.75rem",type:"fontSizes",description:"28px"}},800:{breakpoint_sm:{value:"1.5rem",type:"fontSizes",description:"24px"},breakpoint_md:{value:"1.75rem",type:"fontSizes",description:"28px"},breakpoint_lg:{value:"2.25rem",type:"fontSizes",description:"36px"}},900:{breakpoint_sm:{value:"1.75rem",type:"fontSizes",description:"28px"},breakpoint_md:{value:"2.25rem",type:"fontSizes",description:"36px"},breakpoint_lg:{value:"2.75rem",type:"fontSizes",description:"44px"}},heading:{h1:{breakpoint_sm:{value:"1.75rem",type:"fontSizes"},breakpoint_md:{value:"2.25rem",type:"fontSizes"},breakpoint_lg:{value:"2.75rem",type:"fontSizes"}},h2:{breakpoint_sm:{value:"1.5rem",type:"fontSizes"},breakpoint_md:{value:"1.75rem",type:"fontSizes"},breakpoint_lg:{value:"2.25rem",type:"fontSizes"}},h3:{breakpoint_sm:{value:"1.25rem",type:"fontSizes"},breakpoint_md:{value:"1.5rem",type:"fontSizes"},breakpoint_lg:{value:"1.75rem",type:"fontSizes"}},h4:{breakpoint_sm:{value:"1.125rem",type:"fontSizes"},breakpoint_md:{value:"1.25rem",type:"fontSizes"},breakpoint_lg:{value:"1.5rem",type:"fontSizes"}},h5:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"},breakpoint_lg:{value:"1.25rem",type:"fontSizes"}}},"component-size":{xs:{value:"0.875rem",type:"fontSizes",description:"14px"},sm:{value:"1rem",type:"fontSizes",description:"16px"},md:{value:"1.125rem",type:"fontSizes",description:"18px"},lg:{value:"1.5rem",type:"fontSizes",description:"24px"}},body:{medium:{value:"1rem",type:"fontSizes",description:"Body text should never be smaller than 16px"},large:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"}}},label:{small:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"}}},detail:{default:{value:"0.875rem",type:"fontSizes"}},ingress:{small:{breakpoint_sm:{value:"1.125rem",type:"fontSizes",description:"18px (Ingress should never be smaller than 18px, to keep a visual difference from the body text that is 16px.)"},breakpoint_md:{value:"1.25rem",type:"fontSizes",description:"20px"}},medium:{breakpoint_sm:{value:"1.25rem",type:"fontSizes",description:"20px"},breakpoint_md:{value:"1.5rem",type:"fontSizes",description:"24px"}}}},MB={default:{value:"Altinn-DIN",type:"fontFamilies"},heading:{value:"Altinn-DIN",type:"fontFamilies"},ingress:{value:"Altinn-DIN",type:"fontFamilies"},body:{value:"Altinn-DIN",type:"fontFamilies"},label:{value:"Altinn-DIN",type:"fontFamilies"}},FB={xs:{value:"0px",type:"sizing",description:"Specific styling for the smallest mobile sizes and up. Will affect screen sizes with the set size and larger."},sm:{value:"540px",type:"sizing",description:"Specific styling for the largest mobile sizes and up. Will affect screen sizes with the set size and larger."},md:{value:"768px",type:"sizing",description:"Specific styling for tablet and up. Will affect screen sizes with the set size and larger."},lg:{value:"960px",type:"sizing",description:"Specific styling for the largest tablets and up. Will affect screen sizes with the set size and larger.Will affect screen sizes with this size and larger"},xl:{value:"1200px",type:"sizing",description:"Specific styling for laptops and up. Will affect screen sizes with the set size and larger."},xxl:{value:"1600px",type:"sizing",description:"Specific styling for desktops and up. Will affect screen sizes with the set size and larger."}},AB={default:{fontFamily:{value:"Altinn-DIN",type:"fontFamily"},fontWeight:{value:"Regular",type:"fontWeight"},lineHeight:{value:1.5,type:"lineHeight"},fontSize:{value:"1rem",type:"fontSize"},letterSpacing:{value:"0.3px",type:"letterSpacing"},paragraphSpacing:{value:0,type:"paragraphSpacing"},textDecoration:{value:"none",type:"textDecoration"},textCase:{value:"none",type:"textCase"}}},jB={base:{value:.75,type:"sizing"},x2:{value:1.5,type:"sizing"},x3:{value:2.25,type:"sizing"},x4:{value:3,type:"sizing"},x5:{value:3.75,type:"sizing"},x6:{value:4.5,type:"sizing"},x7:{value:5.25,type:"sizing"},x8:{value:6,type:"sizing"},x10:{value:7.5,type:"sizing"},x16:{value:12,type:"sizing"}},Kp={tokenSetOrder:zB,component:TB,border_width:LB,space:BB,colors:RB,interactive_components:IB,paragraph_space:NB,font_size:DB,font_family:MB,breakpoints:FB,typography:AB,size:jB};var mf={},$B={get exports(){return mf},set exports(e){mf=e}};/* @preserve
 * Leaflet 1.9.2, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2022 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(e,t){(function(n,r){r(t)})(Uo,function(n){var r="1.9.2";function i(o){var s,u,f,h;for(u=1,f=arguments.length;u<f;u++){h=arguments[u];for(s in h)o[s]=h[s]}return o}var a=Object.create||function(){function o(){}return function(s){return o.prototype=s,new o}}();function l(o,s){var u=Array.prototype.slice;if(o.bind)return o.bind.apply(o,u.call(arguments,1));var f=u.call(arguments,2);return function(){return o.apply(s,f.length?f.concat(u.call(arguments)):arguments)}}var c=0;function d(o){return"_leaflet_id"in o||(o._leaflet_id=++c),o._leaflet_id}function p(o,s,u){var f,h,x,C;return C=function(){f=!1,h&&(x.apply(u,h),h=!1)},x=function(){f?h=arguments:(o.apply(u,arguments),setTimeout(C,s),f=!0)},x}function _(o,s,u){var f=s[1],h=s[0],x=f-h;return o===f&&u?o:((o-h)%x+x)%x+h}function v(){return!1}function m(o,s){if(s===!1)return o;var u=Math.pow(10,s===void 0?6:s);return Math.round(o*u)/u}function y(o){return o.trim?o.trim():o.replace(/^\s+|\s+$/g,"")}function w(o){return y(o).split(/\s+/)}function S(o,s){Object.prototype.hasOwnProperty.call(o,"options")||(o.options=o.options?a(o.options):{});for(var u in s)o.options[u]=s[u];return o.options}function O(o,s,u){var f=[];for(var h in o)f.push(encodeURIComponent(u?h.toUpperCase():h)+"="+encodeURIComponent(o[h]));return(!s||s.indexOf("?")===-1?"?":"&")+f.join("&")}var b=/\{ *([\w_ -]+) *\}/g;function g(o,s){return o.replace(b,function(u,f){var h=s[f];if(h===void 0)throw new Error("No value provided for variable "+u);return typeof h=="function"&&(h=h(s)),h})}var k=Array.isArray||function(o){return Object.prototype.toString.call(o)==="[object Array]"};function E(o,s){for(var u=0;u<o.length;u++)if(o[u]===s)return u;return-1}var D="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function F(o){return window["webkit"+o]||window["moz"+o]||window["ms"+o]}var W=0;function K(o){var s=+new Date,u=Math.max(0,16-(s-W));return W=s+u,window.setTimeout(o,u)}var ee=window.requestAnimationFrame||F("RequestAnimationFrame")||K,q=window.cancelAnimationFrame||F("CancelAnimationFrame")||F("CancelRequestAnimationFrame")||function(o){window.clearTimeout(o)};function le(o,s,u){if(u&&ee===K)o.call(s);else return ee.call(window,l(o,s))}function he(o){o&&q.call(window,o)}var Ue={__proto__:null,extend:i,create:a,bind:l,get lastId(){return c},stamp:d,throttle:p,wrapNum:_,falseFn:v,formatNum:m,trim:y,splitWords:w,setOptions:S,getParamString:O,template:g,isArray:k,indexOf:E,emptyImageUrl:D,requestFn:ee,cancelFn:q,requestAnimFrame:le,cancelAnimFrame:he};function ue(){}ue.extend=function(o){var s=function(){S(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},u=s.__super__=this.prototype,f=a(u);f.constructor=s,s.prototype=f;for(var h in this)Object.prototype.hasOwnProperty.call(this,h)&&h!=="prototype"&&h!=="__super__"&&(s[h]=this[h]);return o.statics&&i(s,o.statics),o.includes&&(Ie(o.includes),i.apply(null,[f].concat(o.includes))),i(f,o),delete f.statics,delete f.includes,f.options&&(f.options=u.options?a(u.options):{},i(f.options,o.options)),f._initHooks=[],f.callInitHooks=function(){if(!this._initHooksCalled){u.callInitHooks&&u.callInitHooks.call(this),this._initHooksCalled=!0;for(var x=0,C=f._initHooks.length;x<C;x++)f._initHooks[x].call(this)}},s},ue.include=function(o){var s=this.prototype.options;return i(this.prototype,o),o.options&&(this.prototype.options=s,this.mergeOptions(o.options)),this},ue.mergeOptions=function(o){return i(this.prototype.options,o),this},ue.addInitHook=function(o){var s=Array.prototype.slice.call(arguments,1),u=typeof o=="function"?o:function(){this[o].apply(this,s)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(u),this};function Ie(o){if(!(typeof L>"u"||!L||!L.Mixin)){o=k(o)?o:[o];for(var s=0;s<o.length;s++)o[s]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var G={on:function(o,s,u){if(typeof o=="object")for(var f in o)this._on(f,o[f],s);else{o=w(o);for(var h=0,x=o.length;h<x;h++)this._on(o[h],s,u)}return this},off:function(o,s,u){if(!arguments.length)delete this._events;else if(typeof o=="object")for(var f in o)this._off(f,o[f],s);else{o=w(o);for(var h=arguments.length===1,x=0,C=o.length;x<C;x++)h?this._off(o[x]):this._off(o[x],s,u)}return this},_on:function(o,s,u,f){if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}if(this._listens(o,s,u)===!1){u===this&&(u=void 0);var h={fn:s,ctx:u};f&&(h.once=!0),this._events=this._events||{},this._events[o]=this._events[o]||[],this._events[o].push(h)}},_off:function(o,s,u){var f,h,x;if(this._events&&(f=this._events[o],!!f)){if(arguments.length===1){if(this._firingCount)for(h=0,x=f.length;h<x;h++)f[h].fn=v;delete this._events[o];return}if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}var C=this._listens(o,s,u);if(C!==!1){var z=f[C];this._firingCount&&(z.fn=v,this._events[o]=f=f.slice()),f.splice(C,1)}}},fire:function(o,s,u){if(!this.listens(o,u))return this;var f=i({},s,{type:o,target:this,sourceTarget:s&&s.sourceTarget||this});if(this._events){var h=this._events[o];if(h){this._firingCount=this._firingCount+1||1;for(var x=0,C=h.length;x<C;x++){var z=h[x],R=z.fn;z.once&&this.off(o,R,z.ctx),R.call(z.ctx||this,f)}this._firingCount--}}return u&&this._propagateEvent(f),this},listens:function(o,s,u,f){typeof o!="string"&&console.warn('"string" type argument expected');var h=s;typeof s!="function"&&(f=!!s,h=void 0,u=void 0);var x=this._events&&this._events[o];if(x&&x.length&&this._listens(o,h,u)!==!1)return!0;if(f){for(var C in this._eventParents)if(this._eventParents[C].listens(o,s,u,f))return!0}return!1},_listens:function(o,s,u){if(!this._events)return!1;var f=this._events[o]||[];if(!s)return!!f.length;u===this&&(u=void 0);for(var h=0,x=f.length;h<x;h++)if(f[h].fn===s&&f[h].ctx===u)return h;return!1},once:function(o,s,u){if(typeof o=="object")for(var f in o)this._on(f,o[f],s,!0);else{o=w(o);for(var h=0,x=o.length;h<x;h++)this._on(o[h],s,u,!0)}return this},addEventParent:function(o){return this._eventParents=this._eventParents||{},this._eventParents[d(o)]=o,this},removeEventParent:function(o){return this._eventParents&&delete this._eventParents[d(o)],this},_propagateEvent:function(o){for(var s in this._eventParents)this._eventParents[s].fire(o.type,i({layer:o.target,propagatedFrom:o.target},o),!0)}};G.addEventListener=G.on,G.removeEventListener=G.clearAllEventListeners=G.off,G.addOneTimeEventListener=G.once,G.fireEvent=G.fire,G.hasEventListeners=G.listens;var ce=ue.extend(G);function I(o,s,u){this.x=u?Math.round(o):o,this.y=u?Math.round(s):s}var ne=Math.trunc||function(o){return o>0?Math.floor(o):Math.ceil(o)};I.prototype={clone:function(){return new I(this.x,this.y)},add:function(o){return this.clone()._add(H(o))},_add:function(o){return this.x+=o.x,this.y+=o.y,this},subtract:function(o){return this.clone()._subtract(H(o))},_subtract:function(o){return this.x-=o.x,this.y-=o.y,this},divideBy:function(o){return this.clone()._divideBy(o)},_divideBy:function(o){return this.x/=o,this.y/=o,this},multiplyBy:function(o){return this.clone()._multiplyBy(o)},_multiplyBy:function(o){return this.x*=o,this.y*=o,this},scaleBy:function(o){return new I(this.x*o.x,this.y*o.y)},unscaleBy:function(o){return new I(this.x/o.x,this.y/o.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=ne(this.x),this.y=ne(this.y),this},distanceTo:function(o){o=H(o);var s=o.x-this.x,u=o.y-this.y;return Math.sqrt(s*s+u*u)},equals:function(o){return o=H(o),o.x===this.x&&o.y===this.y},contains:function(o){return o=H(o),Math.abs(o.x)<=Math.abs(this.x)&&Math.abs(o.y)<=Math.abs(this.y)},toString:function(){return"Point("+m(this.x)+", "+m(this.y)+")"}};function H(o,s,u){return o instanceof I?o:k(o)?new I(o[0],o[1]):o==null?o:typeof o=="object"&&"x"in o&&"y"in o?new I(o.x,o.y):new I(o,s,u)}function P(o,s){if(o)for(var u=s?[o,s]:o,f=0,h=u.length;f<h;f++)this.extend(u[f])}P.prototype={extend:function(o){var s,u;if(!o)return this;if(o instanceof I||typeof o[0]=="number"||"x"in o)s=u=H(o);else if(o=B(o),s=o.min,u=o.max,!s||!u)return this;return!this.min&&!this.max?(this.min=s.clone(),this.max=u.clone()):(this.min.x=Math.min(s.x,this.min.x),this.max.x=Math.max(u.x,this.max.x),this.min.y=Math.min(s.y,this.min.y),this.max.y=Math.max(u.y,this.max.y)),this},getCenter:function(o){return H((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,o)},getBottomLeft:function(){return H(this.min.x,this.max.y)},getTopRight:function(){return H(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(o){var s,u;return typeof o[0]=="number"||o instanceof I?o=H(o):o=B(o),o instanceof P?(s=o.min,u=o.max):s=u=o,s.x>=this.min.x&&u.x<=this.max.x&&s.y>=this.min.y&&u.y<=this.max.y},intersects:function(o){o=B(o);var s=this.min,u=this.max,f=o.min,h=o.max,x=h.x>=s.x&&f.x<=u.x,C=h.y>=s.y&&f.y<=u.y;return x&&C},overlaps:function(o){o=B(o);var s=this.min,u=this.max,f=o.min,h=o.max,x=h.x>s.x&&f.x<u.x,C=h.y>s.y&&f.y<u.y;return x&&C},isValid:function(){return!!(this.min&&this.max)},pad:function(o){var s=this.min,u=this.max,f=Math.abs(s.x-u.x)*o,h=Math.abs(s.y-u.y)*o;return B(H(s.x-f,s.y-h),H(u.x+f,u.y+h))},equals:function(o){return o?(o=B(o),this.min.equals(o.getTopLeft())&&this.max.equals(o.getBottomRight())):!1}};function B(o,s){return!o||o instanceof P?o:new P(o,s)}function T(o,s){if(o)for(var u=s?[o,s]:o,f=0,h=u.length;f<h;f++)this.extend(u[f])}T.prototype={extend:function(o){var s=this._southWest,u=this._northEast,f,h;if(o instanceof Q)f=o,h=o;else if(o instanceof T){if(f=o._southWest,h=o._northEast,!f||!h)return this}else return o?this.extend(Y(o)||A(o)):this;return!s&&!u?(this._southWest=new Q(f.lat,f.lng),this._northEast=new Q(h.lat,h.lng)):(s.lat=Math.min(f.lat,s.lat),s.lng=Math.min(f.lng,s.lng),u.lat=Math.max(h.lat,u.lat),u.lng=Math.max(h.lng,u.lng)),this},pad:function(o){var s=this._southWest,u=this._northEast,f=Math.abs(s.lat-u.lat)*o,h=Math.abs(s.lng-u.lng)*o;return new T(new Q(s.lat-f,s.lng-h),new Q(u.lat+f,u.lng+h))},getCenter:function(){return new Q((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new Q(this.getNorth(),this.getWest())},getSouthEast:function(){return new Q(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(o){typeof o[0]=="number"||o instanceof Q||"lat"in o?o=Y(o):o=A(o);var s=this._southWest,u=this._northEast,f,h;return o instanceof T?(f=o.getSouthWest(),h=o.getNorthEast()):f=h=o,f.lat>=s.lat&&h.lat<=u.lat&&f.lng>=s.lng&&h.lng<=u.lng},intersects:function(o){o=A(o);var s=this._southWest,u=this._northEast,f=o.getSouthWest(),h=o.getNorthEast(),x=h.lat>=s.lat&&f.lat<=u.lat,C=h.lng>=s.lng&&f.lng<=u.lng;return x&&C},overlaps:function(o){o=A(o);var s=this._southWest,u=this._northEast,f=o.getSouthWest(),h=o.getNorthEast(),x=h.lat>s.lat&&f.lat<u.lat,C=h.lng>s.lng&&f.lng<u.lng;return x&&C},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(o,s){return o?(o=A(o),this._southWest.equals(o.getSouthWest(),s)&&this._northEast.equals(o.getNorthEast(),s)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function A(o,s){return o instanceof T?o:new T(o,s)}function Q(o,s,u){if(isNaN(o)||isNaN(s))throw new Error("Invalid LatLng object: ("+o+", "+s+")");this.lat=+o,this.lng=+s,u!==void 0&&(this.alt=+u)}Q.prototype={equals:function(o,s){if(!o)return!1;o=Y(o);var u=Math.max(Math.abs(this.lat-o.lat),Math.abs(this.lng-o.lng));return u<=(s===void 0?1e-9:s)},toString:function(o){return"LatLng("+m(this.lat,o)+", "+m(this.lng,o)+")"},distanceTo:function(o){return se.distance(this,Y(o))},wrap:function(){return se.wrapLatLng(this)},toBounds:function(o){var s=180*o/40075017,u=s/Math.cos(Math.PI/180*this.lat);return A([this.lat-s,this.lng-u],[this.lat+s,this.lng+u])},clone:function(){return new Q(this.lat,this.lng,this.alt)}};function Y(o,s,u){return o instanceof Q?o:k(o)&&typeof o[0]!="object"?o.length===3?new Q(o[0],o[1],o[2]):o.length===2?new Q(o[0],o[1]):null:o==null?o:typeof o=="object"&&"lat"in o?new Q(o.lat,"lng"in o?o.lng:o.lon,o.alt):s===void 0?null:new Q(o,s,u)}var re={latLngToPoint:function(o,s){var u=this.projection.project(o),f=this.scale(s);return this.transformation._transform(u,f)},pointToLatLng:function(o,s){var u=this.scale(s),f=this.transformation.untransform(o,u);return this.projection.unproject(f)},project:function(o){return this.projection.project(o)},unproject:function(o){return this.projection.unproject(o)},scale:function(o){return 256*Math.pow(2,o)},zoom:function(o){return Math.log(o/256)/Math.LN2},getProjectedBounds:function(o){if(this.infinite)return null;var s=this.projection.bounds,u=this.scale(o),f=this.transformation.transform(s.min,u),h=this.transformation.transform(s.max,u);return new P(f,h)},infinite:!1,wrapLatLng:function(o){var s=this.wrapLng?_(o.lng,this.wrapLng,!0):o.lng,u=this.wrapLat?_(o.lat,this.wrapLat,!0):o.lat,f=o.alt;return new Q(u,s,f)},wrapLatLngBounds:function(o){var s=o.getCenter(),u=this.wrapLatLng(s),f=s.lat-u.lat,h=s.lng-u.lng;if(f===0&&h===0)return o;var x=o.getSouthWest(),C=o.getNorthEast(),z=new Q(x.lat-f,x.lng-h),R=new Q(C.lat-f,C.lng-h);return new T(z,R)}},se=i({},re,{wrapLng:[-180,180],R:6371e3,distance:function(o,s){var u=Math.PI/180,f=o.lat*u,h=s.lat*u,x=Math.sin((s.lat-o.lat)*u/2),C=Math.sin((s.lng-o.lng)*u/2),z=x*x+Math.cos(f)*Math.cos(h)*C*C,R=2*Math.atan2(Math.sqrt(z),Math.sqrt(1-z));return this.R*R}}),Xe=6378137,He={R:Xe,MAX_LATITUDE:85.0511287798,project:function(o){var s=Math.PI/180,u=this.MAX_LATITUDE,f=Math.max(Math.min(u,o.lat),-u),h=Math.sin(f*s);return new I(this.R*o.lng*s,this.R*Math.log((1+h)/(1-h))/2)},unproject:function(o){var s=180/Math.PI;return new Q((2*Math.atan(Math.exp(o.y/this.R))-Math.PI/2)*s,o.x*s/this.R)},bounds:function(){var o=Xe*Math.PI;return new P([-o,-o],[o,o])}()};function De(o,s,u,f){if(k(o)){this._a=o[0],this._b=o[1],this._c=o[2],this._d=o[3];return}this._a=o,this._b=s,this._c=u,this._d=f}De.prototype={transform:function(o,s){return this._transform(o.clone(),s)},_transform:function(o,s){return s=s||1,o.x=s*(this._a*o.x+this._b),o.y=s*(this._c*o.y+this._d),o},untransform:function(o,s){return s=s||1,new I((o.x/s-this._b)/this._a,(o.y/s-this._d)/this._c)}};function Me(o,s,u,f){return new De(o,s,u,f)}var et=i({},se,{code:"EPSG:3857",projection:He,transformation:function(){var o=.5/(Math.PI*He.R);return Me(o,.5,-o,.5)}()}),xe=i({},et,{code:"EPSG:900913"});function Jt(o){return document.createElementNS("http://www.w3.org/2000/svg",o)}function Mt(o,s){var u="",f,h,x,C,z,R;for(f=0,x=o.length;f<x;f++){for(z=o[f],h=0,C=z.length;h<C;h++)R=z[h],u+=(h?"L":"M")+R.x+" "+R.y;u+=s?ie.svg?"z":"x":""}return u||"M0 0"}var Ne=document.documentElement.style,M="ActiveXObject"in window,Z=M&&!document.addEventListener,X="msLaunchUri"in navigator&&!("documentMode"in document),ae=In("webkit"),oe=In("android"),Te=In("android 2")||In("android 3"),we=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),ve=oe&&In("Google")&&we<537&&!("AudioNode"in window),ge=!!window.opera,Oe=!X&&In("chrome"),We=In("gecko")&&!ae&&!ge&&!M,Tt=!Oe&&In("safari"),bt=In("phantom"),Ft="OTransition"in Ne,Qn=navigator.platform.indexOf("Win")===0,Gn=M&&"transition"in Ne,en="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!Te,hr="MozPerspective"in Ne,rt=!window.L_DISABLE_3D&&(Gn||en||hr)&&!Ft&&!bt,ot=typeof orientation<"u"||In("mobile"),Rn=ot&&ae,zo=ot&&en,Ei=!window.PointerEvent&&window.MSPointerEvent,Ja=!!(window.PointerEvent||Ei),es="ontouchstart"in window||!!window.TouchEvent,Wt=!window.L_NO_TOUCH&&(es||Ja),_n=ot&&ge,ts=ot&&We,ju=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,ex=function(){var o=!1;try{var s=Object.defineProperty({},"passive",{get:function(){o=!0}});window.addEventListener("testPassiveEventSupport",v,s),window.removeEventListener("testPassiveEventSupport",v,s)}catch{}return o}(),tx=function(){return!!document.createElement("canvas").getContext}(),$u=!!(document.createElementNS&&Jt("svg").createSVGRect),nx=!!$u&&function(){var o=document.createElement("div");return o.innerHTML="<svg/>",(o.firstChild&&o.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),rx=!$u&&function(){try{var o=document.createElement("div");o.innerHTML='<v:shape adj="1"/>';var s=o.firstChild;return s.style.behavior="url(#default#VML)",s&&typeof s.adj=="object"}catch{return!1}}(),ox=navigator.platform.indexOf("Mac")===0,ix=navigator.platform.indexOf("Linux")===0;function In(o){return navigator.userAgent.toLowerCase().indexOf(o)>=0}var ie={ie:M,ielt9:Z,edge:X,webkit:ae,android:oe,android23:Te,androidStock:ve,opera:ge,chrome:Oe,gecko:We,safari:Tt,phantom:bt,opera12:Ft,win:Qn,ie3d:Gn,webkit3d:en,gecko3d:hr,any3d:rt,mobile:ot,mobileWebkit:Rn,mobileWebkit3d:zo,msPointer:Ei,pointer:Ja,touch:Wt,touchNative:es,mobileOpera:_n,mobileGecko:ts,retina:ju,passiveEvents:ex,canvas:tx,svg:$u,vml:rx,inlineSvg:nx,mac:ox,linux:ix},hh=ie.msPointer?"MSPointerDown":"pointerdown",mh=ie.msPointer?"MSPointerMove":"pointermove",_h=ie.msPointer?"MSPointerUp":"pointerup",vh=ie.msPointer?"MSPointerCancel":"pointercancel",Uu={touchstart:hh,touchmove:mh,touchend:_h,touchcancel:vh},gh={touchstart:dx,touchmove:ns,touchend:ns,touchcancel:ns},To={},yh=!1;function ax(o,s,u){return s==="touchstart"&&cx(),gh[s]?(u=gh[s].bind(this,u),o.addEventListener(Uu[s],u,!1),u):(console.warn("wrong event specified:",s),L.Util.falseFn)}function sx(o,s,u){if(!Uu[s]){console.warn("wrong event specified:",s);return}o.removeEventListener(Uu[s],u,!1)}function lx(o){To[o.pointerId]=o}function ux(o){To[o.pointerId]&&(To[o.pointerId]=o)}function bh(o){delete To[o.pointerId]}function cx(){yh||(document.addEventListener(hh,lx,!0),document.addEventListener(mh,ux,!0),document.addEventListener(_h,bh,!0),document.addEventListener(vh,bh,!0),yh=!0)}function ns(o,s){if(s.pointerType!==(s.MSPOINTER_TYPE_MOUSE||"mouse")){s.touches=[];for(var u in To)s.touches.push(To[u]);s.changedTouches=[s],o(s)}}function dx(o,s){s.MSPOINTER_TYPE_TOUCH&&s.pointerType===s.MSPOINTER_TYPE_TOUCH&&mt(s),ns(o,s)}function fx(o){var s={},u,f;for(f in o)u=o[f],s[f]=u&&u.bind?u.bind(o):u;return o=s,s.type="dblclick",s.detail=2,s.isTrusted=!1,s._simulated=!0,s}var px=200;function hx(o,s){o.addEventListener("dblclick",s);var u=0,f;function h(x){if(x.detail!==1){f=x.detail;return}if(!(x.pointerType==="mouse"||x.sourceCapabilities&&!x.sourceCapabilities.firesTouchEvents)){var C=Ch(x);if(!(C.some(function(R){return R instanceof HTMLLabelElement&&R.attributes.for})&&!C.some(function(R){return R instanceof HTMLInputElement||R instanceof HTMLSelectElement}))){var z=Date.now();z-u<=px?(f++,f===2&&s(fx(x))):f=1,u=z}}}return o.addEventListener("click",h),{dblclick:s,simDblclick:h}}function mx(o,s){o.removeEventListener("dblclick",s.dblclick),o.removeEventListener("click",s.simDblclick)}var Hu=is(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),Oi=is(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),xh=Oi==="webkitTransition"||Oi==="OTransition"?Oi+"End":"transitionend";function wh(o){return typeof o=="string"?document.getElementById(o):o}function zi(o,s){var u=o.style[s]||o.currentStyle&&o.currentStyle[s];if((!u||u==="auto")&&document.defaultView){var f=document.defaultView.getComputedStyle(o,null);u=f?f[s]:null}return u==="auto"?null:u}function Ce(o,s,u){var f=document.createElement(o);return f.className=s||"",u&&u.appendChild(f),f}function qe(o){var s=o.parentNode;s&&s.removeChild(o)}function rs(o){for(;o.firstChild;)o.removeChild(o.firstChild)}function Lo(o){var s=o.parentNode;s&&s.lastChild!==o&&s.appendChild(o)}function Bo(o){var s=o.parentNode;s&&s.firstChild!==o&&s.insertBefore(o,s.firstChild)}function Wu(o,s){if(o.classList!==void 0)return o.classList.contains(s);var u=os(o);return u.length>0&&new RegExp("(^|\\s)"+s+"(\\s|$)").test(u)}function me(o,s){if(o.classList!==void 0)for(var u=w(s),f=0,h=u.length;f<h;f++)o.classList.add(u[f]);else if(!Wu(o,s)){var x=os(o);Zu(o,(x?x+" ":"")+s)}}function tt(o,s){o.classList!==void 0?o.classList.remove(s):Zu(o,y((" "+os(o)+" ").replace(" "+s+" "," ")))}function Zu(o,s){o.className.baseVal===void 0?o.className=s:o.className.baseVal=s}function os(o){return o.correspondingElement&&(o=o.correspondingElement),o.className.baseVal===void 0?o.className:o.className.baseVal}function tn(o,s){"opacity"in o.style?o.style.opacity=s:"filter"in o.style&&_x(o,s)}function _x(o,s){var u=!1,f="DXImageTransform.Microsoft.Alpha";try{u=o.filters.item(f)}catch{if(s===1)return}s=Math.round(s*100),u?(u.Enabled=s!==100,u.Opacity=s):o.style.filter+=" progid:"+f+"(opacity="+s+")"}function is(o){for(var s=document.documentElement.style,u=0;u<o.length;u++)if(o[u]in s)return o[u];return!1}function Qr(o,s,u){var f=s||new I(0,0);o.style[Hu]=(ie.ie3d?"translate("+f.x+"px,"+f.y+"px)":"translate3d("+f.x+"px,"+f.y+"px,0)")+(u?" scale("+u+")":"")}function it(o,s){o._leaflet_pos=s,ie.any3d?Qr(o,s):(o.style.left=s.x+"px",o.style.top=s.y+"px")}function Gr(o){return o._leaflet_pos||new I(0,0)}var Ti,Li,Vu;if("onselectstart"in document)Ti=function(){fe(window,"selectstart",mt)},Li=function(){Fe(window,"selectstart",mt)};else{var Bi=is(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Ti=function(){if(Bi){var o=document.documentElement.style;Vu=o[Bi],o[Bi]="none"}},Li=function(){Bi&&(document.documentElement.style[Bi]=Vu,Vu=void 0)}}function qu(){fe(window,"dragstart",mt)}function Ku(){Fe(window,"dragstart",mt)}var as,Qu;function Gu(o){for(;o.tabIndex===-1;)o=o.parentNode;o.style&&(ss(),as=o,Qu=o.style.outline,o.style.outline="none",fe(window,"keydown",ss))}function ss(){as&&(as.style.outline=Qu,as=void 0,Qu=void 0,Fe(window,"keydown",ss))}function Sh(o){do o=o.parentNode;while((!o.offsetWidth||!o.offsetHeight)&&o!==document.body);return o}function Xu(o){var s=o.getBoundingClientRect();return{x:s.width/o.offsetWidth||1,y:s.height/o.offsetHeight||1,boundingClientRect:s}}var vx={__proto__:null,TRANSFORM:Hu,TRANSITION:Oi,TRANSITION_END:xh,get:wh,getStyle:zi,create:Ce,remove:qe,empty:rs,toFront:Lo,toBack:Bo,hasClass:Wu,addClass:me,removeClass:tt,setClass:Zu,getClass:os,setOpacity:tn,testProp:is,setTransform:Qr,setPosition:it,getPosition:Gr,get disableTextSelection(){return Ti},get enableTextSelection(){return Li},disableImageDrag:qu,enableImageDrag:Ku,preventOutline:Gu,restoreOutline:ss,getSizedParentNode:Sh,getScale:Xu};function fe(o,s,u,f){if(s&&typeof s=="object")for(var h in s)Ju(o,h,s[h],u);else{s=w(s);for(var x=0,C=s.length;x<C;x++)Ju(o,s[x],u,f)}return this}var Nn="_leaflet_events";function Fe(o,s,u,f){if(arguments.length===1)kh(o),delete o[Nn];else if(s&&typeof s=="object")for(var h in s)ec(o,h,s[h],u);else if(s=w(s),arguments.length===2)kh(o,function(z){return E(s,z)!==-1});else for(var x=0,C=s.length;x<C;x++)ec(o,s[x],u,f);return this}function kh(o,s){for(var u in o[Nn]){var f=u.split(/\d/)[0];(!s||s(f))&&ec(o,f,null,null,u)}}var Yu={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Ju(o,s,u,f){var h=s+d(u)+(f?"_"+d(f):"");if(o[Nn]&&o[Nn][h])return this;var x=function(z){return u.call(f||o,z||window.event)},C=x;!ie.touchNative&&ie.pointer&&s.indexOf("touch")===0?x=ax(o,s,x):ie.touch&&s==="dblclick"?x=hx(o,x):"addEventListener"in o?s==="touchstart"||s==="touchmove"||s==="wheel"||s==="mousewheel"?o.addEventListener(Yu[s]||s,x,ie.passiveEvents?{passive:!1}:!1):s==="mouseenter"||s==="mouseleave"?(x=function(z){z=z||window.event,nc(o,z)&&C(z)},o.addEventListener(Yu[s],x,!1)):o.addEventListener(s,C,!1):o.attachEvent("on"+s,x),o[Nn]=o[Nn]||{},o[Nn][h]=x}function ec(o,s,u,f,h){h=h||s+d(u)+(f?"_"+d(f):"");var x=o[Nn]&&o[Nn][h];if(!x)return this;!ie.touchNative&&ie.pointer&&s.indexOf("touch")===0?sx(o,s,x):ie.touch&&s==="dblclick"?mx(o,x):"removeEventListener"in o?o.removeEventListener(Yu[s]||s,x,!1):o.detachEvent("on"+s,x),o[Nn][h]=null}function Xr(o){return o.stopPropagation?o.stopPropagation():o.originalEvent?o.originalEvent._stopped=!0:o.cancelBubble=!0,this}function tc(o){return Ju(o,"wheel",Xr),this}function Ri(o){return fe(o,"mousedown touchstart dblclick contextmenu",Xr),o._leaflet_disable_click=!0,this}function mt(o){return o.preventDefault?o.preventDefault():o.returnValue=!1,this}function Yr(o){return mt(o),Xr(o),this}function Ch(o){if(o.composedPath)return o.composedPath();for(var s=[],u=o.target;u;)s.push(u),u=u.parentNode;return s}function Ph(o,s){if(!s)return new I(o.clientX,o.clientY);var u=Xu(s),f=u.boundingClientRect;return new I((o.clientX-f.left)/u.x-s.clientLeft,(o.clientY-f.top)/u.y-s.clientTop)}var gx=ie.linux&&ie.chrome?window.devicePixelRatio:ie.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Eh(o){return ie.edge?o.wheelDeltaY/2:o.deltaY&&o.deltaMode===0?-o.deltaY/gx:o.deltaY&&o.deltaMode===1?-o.deltaY*20:o.deltaY&&o.deltaMode===2?-o.deltaY*60:o.deltaX||o.deltaZ?0:o.wheelDelta?(o.wheelDeltaY||o.wheelDelta)/2:o.detail&&Math.abs(o.detail)<32765?-o.detail*20:o.detail?o.detail/-32765*60:0}function nc(o,s){var u=s.relatedTarget;if(!u)return!0;try{for(;u&&u!==o;)u=u.parentNode}catch{return!1}return u!==o}var yx={__proto__:null,on:fe,off:Fe,stopPropagation:Xr,disableScrollPropagation:tc,disableClickPropagation:Ri,preventDefault:mt,stop:Yr,getPropagationPath:Ch,getMousePosition:Ph,getWheelDelta:Eh,isExternalTarget:nc,addListener:fe,removeListener:Fe},Oh=ce.extend({run:function(o,s,u,f){this.stop(),this._el=o,this._inProgress=!0,this._duration=u||.25,this._easeOutPower=1/Math.max(f||.5,.2),this._startPos=Gr(o),this._offset=s.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=le(this._animate,this),this._step()},_step:function(o){var s=+new Date-this._startTime,u=this._duration*1e3;s<u?this._runFrame(this._easeOut(s/u),o):(this._runFrame(1),this._complete())},_runFrame:function(o,s){var u=this._startPos.add(this._offset.multiplyBy(o));s&&u._round(),it(this._el,u),this.fire("step")},_complete:function(){he(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(o){return 1-Math.pow(1-o,this._easeOutPower)}}),Se=ce.extend({options:{crs:et,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(o,s){s=S(this,s),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(o),this._initLayout(),this._onResize=l(this._onResize,this),this._initEvents(),s.maxBounds&&this.setMaxBounds(s.maxBounds),s.zoom!==void 0&&(this._zoom=this._limitZoom(s.zoom)),s.center&&s.zoom!==void 0&&this.setView(Y(s.center),s.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=Oi&&ie.any3d&&!ie.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),fe(this._proxy,xh,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(o,s,u){if(s=s===void 0?this._zoom:this._limitZoom(s),o=this._limitCenter(Y(o),s,this.options.maxBounds),u=u||{},this._stop(),this._loaded&&!u.reset&&u!==!0){u.animate!==void 0&&(u.zoom=i({animate:u.animate},u.zoom),u.pan=i({animate:u.animate,duration:u.duration},u.pan));var f=this._zoom!==s?this._tryAnimatedZoom&&this._tryAnimatedZoom(o,s,u.zoom):this._tryAnimatedPan(o,u.pan);if(f)return clearTimeout(this._sizeTimer),this}return this._resetView(o,s,u.pan&&u.pan.noMoveStart),this},setZoom:function(o,s){return this._loaded?this.setView(this.getCenter(),o,{zoom:s}):(this._zoom=o,this)},zoomIn:function(o,s){return o=o||(ie.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+o,s)},zoomOut:function(o,s){return o=o||(ie.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-o,s)},setZoomAround:function(o,s,u){var f=this.getZoomScale(s),h=this.getSize().divideBy(2),x=o instanceof I?o:this.latLngToContainerPoint(o),C=x.subtract(h).multiplyBy(1-1/f),z=this.containerPointToLatLng(h.add(C));return this.setView(z,s,{zoom:u})},_getBoundsCenterZoom:function(o,s){s=s||{},o=o.getBounds?o.getBounds():A(o);var u=H(s.paddingTopLeft||s.padding||[0,0]),f=H(s.paddingBottomRight||s.padding||[0,0]),h=this.getBoundsZoom(o,!1,u.add(f));if(h=typeof s.maxZoom=="number"?Math.min(s.maxZoom,h):h,h===1/0)return{center:o.getCenter(),zoom:h};var x=f.subtract(u).divideBy(2),C=this.project(o.getSouthWest(),h),z=this.project(o.getNorthEast(),h),R=this.unproject(C.add(z).divideBy(2).add(x),h);return{center:R,zoom:h}},fitBounds:function(o,s){if(o=A(o),!o.isValid())throw new Error("Bounds are not valid.");var u=this._getBoundsCenterZoom(o,s);return this.setView(u.center,u.zoom,s)},fitWorld:function(o){return this.fitBounds([[-90,-180],[90,180]],o)},panTo:function(o,s){return this.setView(o,this._zoom,{pan:s})},panBy:function(o,s){if(o=H(o).round(),s=s||{},!o.x&&!o.y)return this.fire("moveend");if(s.animate!==!0&&!this.getSize().contains(o))return this._resetView(this.unproject(this.project(this.getCenter()).add(o)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Oh,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),s.noMoveStart||this.fire("movestart"),s.animate!==!1){me(this._mapPane,"leaflet-pan-anim");var u=this._getMapPanePos().subtract(o).round();this._panAnim.run(this._mapPane,u,s.duration||.25,s.easeLinearity)}else this._rawPanBy(o),this.fire("move").fire("moveend");return this},flyTo:function(o,s,u){if(u=u||{},u.animate===!1||!ie.any3d)return this.setView(o,s,u);this._stop();var f=this.project(this.getCenter()),h=this.project(o),x=this.getSize(),C=this._zoom;o=Y(o),s=s===void 0?C:s;var z=Math.max(x.x,x.y),R=z*this.getZoomScale(C,s),U=h.distanceTo(f)||1,J=1.42,de=J*J;function pe(at){var bs=at?-1:1,s1=at?R:z,l1=R*R-z*z+bs*de*de*U*U,u1=2*s1*de*U,pc=l1/u1,lm=Math.sqrt(pc*pc+1)-pc,c1=lm<1e-9?-18:Math.log(lm);return c1}function rn(at){return(Math.exp(at)-Math.exp(-at))/2}function to(at){return(Math.exp(at)+Math.exp(-at))/2}function ys(at){return rn(at)/to(at)}var vr=pe(0);function fc(at){return z*(to(vr)/to(vr+J*at))}function r1(at){return z*(to(vr)*ys(vr+J*at)-rn(vr))/de}function o1(at){return 1-Math.pow(1-at,1.5)}var i1=Date.now(),am=(pe(1)-vr)/J,a1=u.duration?1e3*u.duration:1e3*am*.8;function sm(){var at=(Date.now()-i1)/a1,bs=o1(at)*am;at<=1?(this._flyToFrame=le(sm,this),this._move(this.unproject(f.add(h.subtract(f).multiplyBy(r1(bs)/U)),C),this.getScaleZoom(z/fc(bs),C),{flyTo:!0})):this._move(o,s)._moveEnd(!0)}return this._moveStart(!0,u.noMoveStart),sm.call(this),this},flyToBounds:function(o,s){var u=this._getBoundsCenterZoom(o,s);return this.flyTo(u.center,u.zoom,s)},setMaxBounds:function(o){return o=A(o),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),o.isValid()?(this.options.maxBounds=o,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(o){var s=this.options.minZoom;return this.options.minZoom=o,this._loaded&&s!==o&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(o):this},setMaxZoom:function(o){var s=this.options.maxZoom;return this.options.maxZoom=o,this._loaded&&s!==o&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(o):this},panInsideBounds:function(o,s){this._enforcingBounds=!0;var u=this.getCenter(),f=this._limitCenter(u,this._zoom,A(o));return u.equals(f)||this.panTo(f,s),this._enforcingBounds=!1,this},panInside:function(o,s){s=s||{};var u=H(s.paddingTopLeft||s.padding||[0,0]),f=H(s.paddingBottomRight||s.padding||[0,0]),h=this.project(this.getCenter()),x=this.project(o),C=this.getPixelBounds(),z=B([C.min.add(u),C.max.subtract(f)]),R=z.getSize();if(!z.contains(x)){this._enforcingBounds=!0;var U=x.subtract(z.getCenter()),J=z.extend(x).getSize().subtract(R);h.x+=U.x<0?-J.x:J.x,h.y+=U.y<0?-J.y:J.y,this.panTo(this.unproject(h),s),this._enforcingBounds=!1}return this},invalidateSize:function(o){if(!this._loaded)return this;o=i({animate:!1,pan:!0},o===!0?{animate:!0}:o);var s=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var u=this.getSize(),f=s.divideBy(2).round(),h=u.divideBy(2).round(),x=f.subtract(h);return!x.x&&!x.y?this:(o.animate&&o.pan?this.panBy(x):(o.pan&&this._rawPanBy(x),this.fire("move"),o.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(l(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:s,newSize:u}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(o){if(o=this._locateOptions=i({timeout:1e4,watch:!1},o),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var s=l(this._handleGeolocationResponse,this),u=l(this._handleGeolocationError,this);return o.watch?this._locationWatchId=navigator.geolocation.watchPosition(s,u,o):navigator.geolocation.getCurrentPosition(s,u,o),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(o){if(this._container._leaflet_id){var s=o.code,u=o.message||(s===1?"permission denied":s===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:s,message:"Geolocation error: "+u+"."})}},_handleGeolocationResponse:function(o){if(this._container._leaflet_id){var s=o.coords.latitude,u=o.coords.longitude,f=new Q(s,u),h=f.toBounds(o.coords.accuracy*2),x=this._locateOptions;if(x.setView){var C=this.getBoundsZoom(h);this.setView(f,x.maxZoom?Math.min(C,x.maxZoom):C)}var z={latlng:f,bounds:h,timestamp:o.timestamp};for(var R in o.coords)typeof o.coords[R]=="number"&&(z[R]=o.coords[R]);this.fire("locationfound",z)}},addHandler:function(o,s){if(!s)return this;var u=this[o]=new s(this);return this._handlers.push(u),this.options[o]&&u.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),qe(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(he(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var o;for(o in this._layers)this._layers[o].remove();for(o in this._panes)qe(this._panes[o]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(o,s){var u="leaflet-pane"+(o?" leaflet-"+o.replace("Pane","")+"-pane":""),f=Ce("div",u,s||this._mapPane);return o&&(this._panes[o]=f),f},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var o=this.getPixelBounds(),s=this.unproject(o.getBottomLeft()),u=this.unproject(o.getTopRight());return new T(s,u)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(o,s,u){o=A(o),u=H(u||[0,0]);var f=this.getZoom()||0,h=this.getMinZoom(),x=this.getMaxZoom(),C=o.getNorthWest(),z=o.getSouthEast(),R=this.getSize().subtract(u),U=B(this.project(z,f),this.project(C,f)).getSize(),J=ie.any3d?this.options.zoomSnap:1,de=R.x/U.x,pe=R.y/U.y,rn=s?Math.max(de,pe):Math.min(de,pe);return f=this.getScaleZoom(rn,f),J&&(f=Math.round(f/(J/100))*(J/100),f=s?Math.ceil(f/J)*J:Math.floor(f/J)*J),Math.max(h,Math.min(x,f))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new I(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(o,s){var u=this._getTopLeftPoint(o,s);return new P(u,u.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(o){return this.options.crs.getProjectedBounds(o===void 0?this.getZoom():o)},getPane:function(o){return typeof o=="string"?this._panes[o]:o},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(o,s){var u=this.options.crs;return s=s===void 0?this._zoom:s,u.scale(o)/u.scale(s)},getScaleZoom:function(o,s){var u=this.options.crs;s=s===void 0?this._zoom:s;var f=u.zoom(o*u.scale(s));return isNaN(f)?1/0:f},project:function(o,s){return s=s===void 0?this._zoom:s,this.options.crs.latLngToPoint(Y(o),s)},unproject:function(o,s){return s=s===void 0?this._zoom:s,this.options.crs.pointToLatLng(H(o),s)},layerPointToLatLng:function(o){var s=H(o).add(this.getPixelOrigin());return this.unproject(s)},latLngToLayerPoint:function(o){var s=this.project(Y(o))._round();return s._subtract(this.getPixelOrigin())},wrapLatLng:function(o){return this.options.crs.wrapLatLng(Y(o))},wrapLatLngBounds:function(o){return this.options.crs.wrapLatLngBounds(A(o))},distance:function(o,s){return this.options.crs.distance(Y(o),Y(s))},containerPointToLayerPoint:function(o){return H(o).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(o){return H(o).add(this._getMapPanePos())},containerPointToLatLng:function(o){var s=this.containerPointToLayerPoint(H(o));return this.layerPointToLatLng(s)},latLngToContainerPoint:function(o){return this.layerPointToContainerPoint(this.latLngToLayerPoint(Y(o)))},mouseEventToContainerPoint:function(o){return Ph(o,this._container)},mouseEventToLayerPoint:function(o){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(o))},mouseEventToLatLng:function(o){return this.layerPointToLatLng(this.mouseEventToLayerPoint(o))},_initContainer:function(o){var s=this._container=wh(o);if(s){if(s._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");fe(s,"scroll",this._onScroll,this),this._containerId=d(s)},_initLayout:function(){var o=this._container;this._fadeAnimated=this.options.fadeAnimation&&ie.any3d,me(o,"leaflet-container"+(ie.touch?" leaflet-touch":"")+(ie.retina?" leaflet-retina":"")+(ie.ielt9?" leaflet-oldie":"")+(ie.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var s=zi(o,"position");s!=="absolute"&&s!=="relative"&&s!=="fixed"&&(o.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var o=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),it(this._mapPane,new I(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(me(o.markerPane,"leaflet-zoom-hide"),me(o.shadowPane,"leaflet-zoom-hide"))},_resetView:function(o,s,u){it(this._mapPane,new I(0,0));var f=!this._loaded;this._loaded=!0,s=this._limitZoom(s),this.fire("viewprereset");var h=this._zoom!==s;this._moveStart(h,u)._move(o,s)._moveEnd(h),this.fire("viewreset"),f&&this.fire("load")},_moveStart:function(o,s){return o&&this.fire("zoomstart"),s||this.fire("movestart"),this},_move:function(o,s,u,f){s===void 0&&(s=this._zoom);var h=this._zoom!==s;return this._zoom=s,this._lastCenter=o,this._pixelOrigin=this._getNewPixelOrigin(o),f?u&&u.pinch&&this.fire("zoom",u):((h||u&&u.pinch)&&this.fire("zoom",u),this.fire("move",u)),this},_moveEnd:function(o){return o&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return he(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(o){it(this._mapPane,this._getMapPanePos().subtract(o))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(o){this._targets={},this._targets[d(this._container)]=this;var s=o?Fe:fe;s(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&s(window,"resize",this._onResize,this),ie.any3d&&this.options.transform3DLimit&&(o?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){he(this._resizeRequest),this._resizeRequest=le(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var o=this._getMapPanePos();Math.max(Math.abs(o.x),Math.abs(o.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(o,s){for(var u=[],f,h=s==="mouseout"||s==="mouseover",x=o.target||o.srcElement,C=!1;x;){if(f=this._targets[d(x)],f&&(s==="click"||s==="preclick")&&this._draggableMoved(f)){C=!0;break}if(f&&f.listens(s,!0)&&(h&&!nc(x,o)||(u.push(f),h))||x===this._container)break;x=x.parentNode}return!u.length&&!C&&!h&&this.listens(s,!0)&&(u=[this]),u},_isClickDisabled:function(o){for(;o&&o!==this._container;){if(o._leaflet_disable_click)return!0;o=o.parentNode}},_handleDOMEvent:function(o){var s=o.target||o.srcElement;if(!(!this._loaded||s._leaflet_disable_events||o.type==="click"&&this._isClickDisabled(s))){var u=o.type;u==="mousedown"&&Gu(s),this._fireDOMEvent(o,u)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(o,s,u){if(o.type==="click"){var f=i({},o);f.type="preclick",this._fireDOMEvent(f,f.type,u)}var h=this._findEventTargets(o,s);if(u){for(var x=[],C=0;C<u.length;C++)u[C].listens(s,!0)&&x.push(u[C]);h=x.concat(h)}if(h.length){s==="contextmenu"&&mt(o);var z=h[0],R={originalEvent:o};if(o.type!=="keypress"&&o.type!=="keydown"&&o.type!=="keyup"){var U=z.getLatLng&&(!z._radius||z._radius<=10);R.containerPoint=U?this.latLngToContainerPoint(z.getLatLng()):this.mouseEventToContainerPoint(o),R.layerPoint=this.containerPointToLayerPoint(R.containerPoint),R.latlng=U?z.getLatLng():this.layerPointToLatLng(R.layerPoint)}for(C=0;C<h.length;C++)if(h[C].fire(s,R,!0),R.originalEvent._stopped||h[C].options.bubblingMouseEvents===!1&&E(this._mouseEvents,s)!==-1)return}},_draggableMoved:function(o){return o=o.dragging&&o.dragging.enabled()?o:this,o.dragging&&o.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var o=0,s=this._handlers.length;o<s;o++)this._handlers[o].disable()},whenReady:function(o,s){return this._loaded?o.call(s||this,{target:this}):this.on("load",o,s),this},_getMapPanePos:function(){return Gr(this._mapPane)||new I(0,0)},_moved:function(){var o=this._getMapPanePos();return o&&!o.equals([0,0])},_getTopLeftPoint:function(o,s){var u=o&&s!==void 0?this._getNewPixelOrigin(o,s):this.getPixelOrigin();return u.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(o,s){var u=this.getSize()._divideBy(2);return this.project(o,s)._subtract(u)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(o,s,u){var f=this._getNewPixelOrigin(u,s);return this.project(o,s)._subtract(f)},_latLngBoundsToNewLayerBounds:function(o,s,u){var f=this._getNewPixelOrigin(u,s);return B([this.project(o.getSouthWest(),s)._subtract(f),this.project(o.getNorthWest(),s)._subtract(f),this.project(o.getSouthEast(),s)._subtract(f),this.project(o.getNorthEast(),s)._subtract(f)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(o){return this.latLngToLayerPoint(o).subtract(this._getCenterLayerPoint())},_limitCenter:function(o,s,u){if(!u)return o;var f=this.project(o,s),h=this.getSize().divideBy(2),x=new P(f.subtract(h),f.add(h)),C=this._getBoundsOffset(x,u,s);return C.round().equals([0,0])?o:this.unproject(f.add(C),s)},_limitOffset:function(o,s){if(!s)return o;var u=this.getPixelBounds(),f=new P(u.min.add(o),u.max.add(o));return o.add(this._getBoundsOffset(f,s))},_getBoundsOffset:function(o,s,u){var f=B(this.project(s.getNorthEast(),u),this.project(s.getSouthWest(),u)),h=f.min.subtract(o.min),x=f.max.subtract(o.max),C=this._rebound(h.x,-x.x),z=this._rebound(h.y,-x.y);return new I(C,z)},_rebound:function(o,s){return o+s>0?Math.round(o-s)/2:Math.max(0,Math.ceil(o))-Math.max(0,Math.floor(s))},_limitZoom:function(o){var s=this.getMinZoom(),u=this.getMaxZoom(),f=ie.any3d?this.options.zoomSnap:1;return f&&(o=Math.round(o/f)*f),Math.max(s,Math.min(u,o))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){tt(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(o,s){var u=this._getCenterOffset(o)._trunc();return(s&&s.animate)!==!0&&!this.getSize().contains(u)?!1:(this.panBy(u,s),!0)},_createAnimProxy:function(){var o=this._proxy=Ce("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(o),this.on("zoomanim",function(s){var u=Hu,f=this._proxy.style[u];Qr(this._proxy,this.project(s.center,s.zoom),this.getZoomScale(s.zoom,1)),f===this._proxy.style[u]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){qe(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var o=this.getCenter(),s=this.getZoom();Qr(this._proxy,this.project(o,s),this.getZoomScale(s,1))},_catchTransitionEnd:function(o){this._animatingZoom&&o.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(o,s,u){if(this._animatingZoom)return!0;if(u=u||{},!this._zoomAnimated||u.animate===!1||this._nothingToAnimate()||Math.abs(s-this._zoom)>this.options.zoomAnimationThreshold)return!1;var f=this.getZoomScale(s),h=this._getCenterOffset(o)._divideBy(1-1/f);return u.animate!==!0&&!this.getSize().contains(h)?!1:(le(function(){this._moveStart(!0,!1)._animateZoom(o,s,!0)},this),!0)},_animateZoom:function(o,s,u,f){this._mapPane&&(u&&(this._animatingZoom=!0,this._animateToCenter=o,this._animateToZoom=s,me(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:o,zoom:s,noUpdate:f}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(l(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&tt(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function bx(o,s){return new Se(o,s)}var vn=ue.extend({options:{position:"topright"},initialize:function(o){S(this,o)},getPosition:function(){return this.options.position},setPosition:function(o){var s=this._map;return s&&s.removeControl(this),this.options.position=o,s&&s.addControl(this),this},getContainer:function(){return this._container},addTo:function(o){this.remove(),this._map=o;var s=this._container=this.onAdd(o),u=this.getPosition(),f=o._controlCorners[u];return me(s,"leaflet-control"),u.indexOf("bottom")!==-1?f.insertBefore(s,f.firstChild):f.appendChild(s),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(qe(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(o){this._map&&o&&o.screenX>0&&o.screenY>0&&this._map.getContainer().focus()}}),Ii=function(o){return new vn(o)};Se.include({addControl:function(o){return o.addTo(this),this},removeControl:function(o){return o.remove(),this},_initControlPos:function(){var o=this._controlCorners={},s="leaflet-",u=this._controlContainer=Ce("div",s+"control-container",this._container);function f(h,x){var C=s+h+" "+s+x;o[h+x]=Ce("div",C,u)}f("top","left"),f("top","right"),f("bottom","left"),f("bottom","right")},_clearControlPos:function(){for(var o in this._controlCorners)qe(this._controlCorners[o]);qe(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var zh=vn.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(o,s,u,f){return u<f?-1:f<u?1:0}},initialize:function(o,s,u){S(this,u),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1;for(var f in o)this._addLayer(o[f],f);for(f in s)this._addLayer(s[f],f,!0)},onAdd:function(o){this._initLayout(),this._update(),this._map=o,o.on("zoomend",this._checkDisabledLayers,this);for(var s=0;s<this._layers.length;s++)this._layers[s].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(o){return vn.prototype.addTo.call(this,o),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var o=0;o<this._layers.length;o++)this._layers[o].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(o,s){return this._addLayer(o,s),this._map?this._update():this},addOverlay:function(o,s){return this._addLayer(o,s,!0),this._map?this._update():this},removeLayer:function(o){o.off("add remove",this._onLayerChange,this);var s=this._getLayer(d(o));return s&&this._layers.splice(this._layers.indexOf(s),1),this._map?this._update():this},expand:function(){me(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var o=this._map.getSize().y-(this._container.offsetTop+50);return o<this._section.clientHeight?(me(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=o+"px"):tt(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return tt(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var o="leaflet-control-layers",s=this._container=Ce("div",o),u=this.options.collapsed;s.setAttribute("aria-haspopup",!0),Ri(s),tc(s);var f=this._section=Ce("section",o+"-list");u&&(this._map.on("click",this.collapse,this),fe(s,{mouseenter:function(){fe(f,"click",mt),this.expand(),setTimeout(function(){Fe(f,"click",mt)})},mouseleave:this.collapse},this));var h=this._layersLink=Ce("a",o+"-toggle",s);h.href="#",h.title="Layers",h.setAttribute("role","button"),fe(h,"click",mt),fe(h,"focus",this.expand,this),u||this.expand(),this._baseLayersList=Ce("div",o+"-base",f),this._separator=Ce("div",o+"-separator",f),this._overlaysList=Ce("div",o+"-overlays",f),s.appendChild(f)},_getLayer:function(o){for(var s=0;s<this._layers.length;s++)if(this._layers[s]&&d(this._layers[s].layer)===o)return this._layers[s]},_addLayer:function(o,s,u){this._map&&o.on("add remove",this._onLayerChange,this),this._layers.push({layer:o,name:s,overlay:u}),this.options.sortLayers&&this._layers.sort(l(function(f,h){return this.options.sortFunction(f.layer,h.layer,f.name,h.name)},this)),this.options.autoZIndex&&o.setZIndex&&(this._lastZIndex++,o.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;rs(this._baseLayersList),rs(this._overlaysList),this._layerControlInputs=[];var o,s,u,f,h=0;for(u=0;u<this._layers.length;u++)f=this._layers[u],this._addItem(f),s=s||f.overlay,o=o||!f.overlay,h+=f.overlay?0:1;return this.options.hideSingleBase&&(o=o&&h>1,this._baseLayersList.style.display=o?"":"none"),this._separator.style.display=s&&o?"":"none",this},_onLayerChange:function(o){this._handlingClick||this._update();var s=this._getLayer(d(o.target)),u=s.overlay?o.type==="add"?"overlayadd":"overlayremove":o.type==="add"?"baselayerchange":null;u&&this._map.fire(u,s)},_createRadioElement:function(o,s){var u='<input type="radio" class="leaflet-control-layers-selector" name="'+o+'"'+(s?' checked="checked"':"")+"/>",f=document.createElement("div");return f.innerHTML=u,f.firstChild},_addItem:function(o){var s=document.createElement("label"),u=this._map.hasLayer(o.layer),f;o.overlay?(f=document.createElement("input"),f.type="checkbox",f.className="leaflet-control-layers-selector",f.defaultChecked=u):f=this._createRadioElement("leaflet-base-layers_"+d(this),u),this._layerControlInputs.push(f),f.layerId=d(o.layer),fe(f,"click",this._onInputClick,this);var h=document.createElement("span");h.innerHTML=" "+o.name;var x=document.createElement("span");s.appendChild(x),x.appendChild(f),x.appendChild(h);var C=o.overlay?this._overlaysList:this._baseLayersList;return C.appendChild(s),this._checkDisabledLayers(),s},_onInputClick:function(){var o=this._layerControlInputs,s,u,f=[],h=[];this._handlingClick=!0;for(var x=o.length-1;x>=0;x--)s=o[x],u=this._getLayer(s.layerId).layer,s.checked?f.push(u):s.checked||h.push(u);for(x=0;x<h.length;x++)this._map.hasLayer(h[x])&&this._map.removeLayer(h[x]);for(x=0;x<f.length;x++)this._map.hasLayer(f[x])||this._map.addLayer(f[x]);this._handlingClick=!1,this._refocusOnMap()},_checkDisabledLayers:function(){for(var o=this._layerControlInputs,s,u,f=this._map.getZoom(),h=o.length-1;h>=0;h--)s=o[h],u=this._getLayer(s.layerId).layer,s.disabled=u.options.minZoom!==void 0&&f<u.options.minZoom||u.options.maxZoom!==void 0&&f>u.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this}}),xx=function(o,s,u){return new zh(o,s,u)},rc=vn.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(o){var s="leaflet-control-zoom",u=Ce("div",s+" leaflet-bar"),f=this.options;return this._zoomInButton=this._createButton(f.zoomInText,f.zoomInTitle,s+"-in",u,this._zoomIn),this._zoomOutButton=this._createButton(f.zoomOutText,f.zoomOutTitle,s+"-out",u,this._zoomOut),this._updateDisabled(),o.on("zoomend zoomlevelschange",this._updateDisabled,this),u},onRemove:function(o){o.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(o){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(o.shiftKey?3:1))},_zoomOut:function(o){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(o.shiftKey?3:1))},_createButton:function(o,s,u,f,h){var x=Ce("a",u,f);return x.innerHTML=o,x.href="#",x.title=s,x.setAttribute("role","button"),x.setAttribute("aria-label",s),Ri(x),fe(x,"click",Yr),fe(x,"click",h,this),fe(x,"click",this._refocusOnMap,this),x},_updateDisabled:function(){var o=this._map,s="leaflet-disabled";tt(this._zoomInButton,s),tt(this._zoomOutButton,s),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||o._zoom===o.getMinZoom())&&(me(this._zoomOutButton,s),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||o._zoom===o.getMaxZoom())&&(me(this._zoomInButton,s),this._zoomInButton.setAttribute("aria-disabled","true"))}});Se.mergeOptions({zoomControl:!0}),Se.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new rc,this.addControl(this.zoomControl))});var wx=function(o){return new rc(o)},Th=vn.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(o){var s="leaflet-control-scale",u=Ce("div",s),f=this.options;return this._addScales(f,s+"-line",u),o.on(f.updateWhenIdle?"moveend":"move",this._update,this),o.whenReady(this._update,this),u},onRemove:function(o){o.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(o,s,u){o.metric&&(this._mScale=Ce("div",s,u)),o.imperial&&(this._iScale=Ce("div",s,u))},_update:function(){var o=this._map,s=o.getSize().y/2,u=o.distance(o.containerPointToLatLng([0,s]),o.containerPointToLatLng([this.options.maxWidth,s]));this._updateScales(u)},_updateScales:function(o){this.options.metric&&o&&this._updateMetric(o),this.options.imperial&&o&&this._updateImperial(o)},_updateMetric:function(o){var s=this._getRoundNum(o),u=s<1e3?s+" m":s/1e3+" km";this._updateScale(this._mScale,u,s/o)},_updateImperial:function(o){var s=o*3.2808399,u,f,h;s>5280?(u=s/5280,f=this._getRoundNum(u),this._updateScale(this._iScale,f+" mi",f/u)):(h=this._getRoundNum(s),this._updateScale(this._iScale,h+" ft",h/s))},_updateScale:function(o,s,u){o.style.width=Math.round(this.options.maxWidth*u)+"px",o.innerHTML=s},_getRoundNum:function(o){var s=Math.pow(10,(Math.floor(o)+"").length-1),u=o/s;return u=u>=10?10:u>=5?5:u>=3?3:u>=2?2:1,s*u}}),Sx=function(o){return new Th(o)},kx='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',oc=vn.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(ie.inlineSvg?kx+" ":"")+"Leaflet</a>"},initialize:function(o){S(this,o),this._attributions={}},onAdd:function(o){o.attributionControl=this,this._container=Ce("div","leaflet-control-attribution"),Ri(this._container);for(var s in o._layers)o._layers[s].getAttribution&&this.addAttribution(o._layers[s].getAttribution());return this._update(),o.on("layeradd",this._addAttribution,this),this._container},onRemove:function(o){o.off("layeradd",this._addAttribution,this)},_addAttribution:function(o){o.layer.getAttribution&&(this.addAttribution(o.layer.getAttribution()),o.layer.once("remove",function(){this.removeAttribution(o.layer.getAttribution())},this))},setPrefix:function(o){return this.options.prefix=o,this._update(),this},addAttribution:function(o){return o?(this._attributions[o]||(this._attributions[o]=0),this._attributions[o]++,this._update(),this):this},removeAttribution:function(o){return o?(this._attributions[o]&&(this._attributions[o]--,this._update()),this):this},_update:function(){if(this._map){var o=[];for(var s in this._attributions)this._attributions[s]&&o.push(s);var u=[];this.options.prefix&&u.push(this.options.prefix),o.length&&u.push(o.join(", ")),this._container.innerHTML=u.join(' <span aria-hidden="true">|</span> ')}}});Se.mergeOptions({attributionControl:!0}),Se.addInitHook(function(){this.options.attributionControl&&new oc().addTo(this)});var Cx=function(o){return new oc(o)};vn.Layers=zh,vn.Zoom=rc,vn.Scale=Th,vn.Attribution=oc,Ii.layers=xx,Ii.zoom=wx,Ii.scale=Sx,Ii.attribution=Cx;var Dn=ue.extend({initialize:function(o){this._map=o},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Dn.addTo=function(o,s){return o.addHandler(s,this),this};var Px={Events:G},Lh=ie.touch?"touchstart mousedown":"mousedown",mr=ce.extend({options:{clickTolerance:3},initialize:function(o,s,u,f){S(this,f),this._element=o,this._dragStartTarget=s||o,this._preventOutline=u},enable:function(){this._enabled||(fe(this._dragStartTarget,Lh,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(mr._dragging===this&&this.finishDrag(!0),Fe(this._dragStartTarget,Lh,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(o){if(this._enabled&&(this._moved=!1,!Wu(this._element,"leaflet-zoom-anim"))){if(o.touches&&o.touches.length!==1){mr._dragging===this&&this.finishDrag();return}if(!(mr._dragging||o.shiftKey||o.which!==1&&o.button!==1&&!o.touches)&&(mr._dragging=this,this._preventOutline&&Gu(this._element),qu(),Ti(),!this._moving)){this.fire("down");var s=o.touches?o.touches[0]:o,u=Sh(this._element);this._startPoint=new I(s.clientX,s.clientY),this._startPos=Gr(this._element),this._parentScale=Xu(u);var f=o.type==="mousedown";fe(document,f?"mousemove":"touchmove",this._onMove,this),fe(document,f?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(o){if(this._enabled){if(o.touches&&o.touches.length>1){this._moved=!0;return}var s=o.touches&&o.touches.length===1?o.touches[0]:o,u=new I(s.clientX,s.clientY)._subtract(this._startPoint);!u.x&&!u.y||Math.abs(u.x)+Math.abs(u.y)<this.options.clickTolerance||(u.x/=this._parentScale.x,u.y/=this._parentScale.y,mt(o),this._moved||(this.fire("dragstart"),this._moved=!0,me(document.body,"leaflet-dragging"),this._lastTarget=o.target||o.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),me(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(u),this._moving=!0,this._lastEvent=o,this._updatePosition())}},_updatePosition:function(){var o={originalEvent:this._lastEvent};this.fire("predrag",o),it(this._element,this._newPos),this.fire("drag",o)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(o){tt(document.body,"leaflet-dragging"),this._lastTarget&&(tt(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),Fe(document,"mousemove touchmove",this._onMove,this),Fe(document,"mouseup touchend touchcancel",this._onUp,this),Ku(),Li(),this._moved&&this._moving&&this.fire("dragend",{noInertia:o,distance:this._newPos.distanceTo(this._startPos)}),this._moving=!1,mr._dragging=!1}});function Bh(o,s){if(!s||!o.length)return o.slice();var u=s*s;return o=zx(o,u),o=Ox(o,u),o}function Rh(o,s,u){return Math.sqrt(Ni(o,s,u,!0))}function Ex(o,s,u){return Ni(o,s,u)}function Ox(o,s){var u=o.length,f=typeof Uint8Array!=void 0+""?Uint8Array:Array,h=new f(u);h[0]=h[u-1]=1,ic(o,h,s,0,u-1);var x,C=[];for(x=0;x<u;x++)h[x]&&C.push(o[x]);return C}function ic(o,s,u,f,h){var x=0,C,z,R;for(z=f+1;z<=h-1;z++)R=Ni(o[z],o[f],o[h],!0),R>x&&(C=z,x=R);x>u&&(s[C]=1,ic(o,s,u,f,C),ic(o,s,u,C,h))}function zx(o,s){for(var u=[o[0]],f=1,h=0,x=o.length;f<x;f++)Tx(o[f],o[h])>s&&(u.push(o[f]),h=f);return h<x-1&&u.push(o[x-1]),u}var Ih;function Nh(o,s,u,f,h){var x=f?Ih:Jr(o,u),C=Jr(s,u),z,R,U;for(Ih=C;;){if(!(x|C))return[o,s];if(x&C)return!1;z=x||C,R=ls(o,s,z,u,h),U=Jr(R,u),z===x?(o=R,x=U):(s=R,C=U)}}function ls(o,s,u,f,h){var x=s.x-o.x,C=s.y-o.y,z=f.min,R=f.max,U,J;return u&8?(U=o.x+x*(R.y-o.y)/C,J=R.y):u&4?(U=o.x+x*(z.y-o.y)/C,J=z.y):u&2?(U=R.x,J=o.y+C*(R.x-o.x)/x):u&1&&(U=z.x,J=o.y+C*(z.x-o.x)/x),new I(U,J,h)}function Jr(o,s){var u=0;return o.x<s.min.x?u|=1:o.x>s.max.x&&(u|=2),o.y<s.min.y?u|=4:o.y>s.max.y&&(u|=8),u}function Tx(o,s){var u=s.x-o.x,f=s.y-o.y;return u*u+f*f}function Ni(o,s,u,f){var h=s.x,x=s.y,C=u.x-h,z=u.y-x,R=C*C+z*z,U;return R>0&&(U=((o.x-h)*C+(o.y-x)*z)/R,U>1?(h=u.x,x=u.y):U>0&&(h+=C*U,x+=z*U)),C=o.x-h,z=o.y-x,f?C*C+z*z:new I(h,x)}function nn(o){return!k(o[0])||typeof o[0][0]!="object"&&typeof o[0][0]<"u"}function Dh(o){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),nn(o)}function Mh(o,s){var u,f,h,x,C,z,R,U;if(!o||o.length===0)throw new Error("latlngs not passed");nn(o)||(console.warn("latlngs are not flat! Only the first ring will be used"),o=o[0]);var J=[];for(var de in o)J.push(s.project(Y(o[de])));var pe=J.length;for(u=0,f=0;u<pe-1;u++)f+=J[u].distanceTo(J[u+1])/2;if(f===0)U=J[0];else for(u=0,x=0;u<pe-1;u++)if(C=J[u],z=J[u+1],h=C.distanceTo(z),x+=h,x>f){R=(x-f)/h,U=[z.x-R*(z.x-C.x),z.y-R*(z.y-C.y)];break}return s.unproject(H(U))}var Lx={__proto__:null,simplify:Bh,pointToSegmentDistance:Rh,closestPointOnSegment:Ex,clipSegment:Nh,_getEdgeIntersection:ls,_getBitCode:Jr,_sqClosestPointOnSegment:Ni,isFlat:nn,_flat:Dh,polylineCenter:Mh};function Fh(o,s,u){var f,h=[1,4,2,8],x,C,z,R,U,J,de,pe;for(x=0,J=o.length;x<J;x++)o[x]._code=Jr(o[x],s);for(z=0;z<4;z++){for(de=h[z],f=[],x=0,J=o.length,C=J-1;x<J;C=x++)R=o[x],U=o[C],R._code&de?U._code&de||(pe=ls(U,R,de,s,u),pe._code=Jr(pe,s),f.push(pe)):(U._code&de&&(pe=ls(U,R,de,s,u),pe._code=Jr(pe,s),f.push(pe)),f.push(R));o=f}return o}function Ah(o,s){var u,f,h,x,C,z,R,U,J;if(!o||o.length===0)throw new Error("latlngs not passed");nn(o)||(console.warn("latlngs are not flat! Only the first ring will be used"),o=o[0]);var de=[];for(var pe in o)de.push(s.project(Y(o[pe])));var rn=de.length;for(z=R=U=0,u=0,f=rn-1;u<rn;f=u++)h=de[u],x=de[f],C=h.y*x.x-x.y*h.x,R+=(h.x+x.x)*C,U+=(h.y+x.y)*C,z+=C*3;return z===0?J=de[0]:J=[R/z,U/z],s.unproject(H(J))}var Bx={__proto__:null,clipPolygon:Fh,polygonCenter:Ah},ac={project:function(o){return new I(o.lng,o.lat)},unproject:function(o){return new Q(o.y,o.x)},bounds:new P([-180,-90],[180,90])},sc={R:6378137,R_MINOR:6356752314245179e-9,bounds:new P([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(o){var s=Math.PI/180,u=this.R,f=o.lat*s,h=this.R_MINOR/u,x=Math.sqrt(1-h*h),C=x*Math.sin(f),z=Math.tan(Math.PI/4-f/2)/Math.pow((1-C)/(1+C),x/2);return f=-u*Math.log(Math.max(z,1e-10)),new I(o.lng*s*u,f)},unproject:function(o){for(var s=180/Math.PI,u=this.R,f=this.R_MINOR/u,h=Math.sqrt(1-f*f),x=Math.exp(-o.y/u),C=Math.PI/2-2*Math.atan(x),z=0,R=.1,U;z<15&&Math.abs(R)>1e-7;z++)U=h*Math.sin(C),U=Math.pow((1-U)/(1+U),h/2),R=Math.PI/2-2*Math.atan(x*U)-C,C+=R;return new Q(C*s,o.x*s/u)}},Rx={__proto__:null,LonLat:ac,Mercator:sc,SphericalMercator:He},Ix=i({},se,{code:"EPSG:3395",projection:sc,transformation:function(){var o=.5/(Math.PI*sc.R);return Me(o,.5,-o,.5)}()}),jh=i({},se,{code:"EPSG:4326",projection:ac,transformation:Me(1/180,1,-1/180,.5)}),Nx=i({},re,{projection:ac,transformation:Me(1,0,-1,0),scale:function(o){return Math.pow(2,o)},zoom:function(o){return Math.log(o)/Math.LN2},distance:function(o,s){var u=s.lng-o.lng,f=s.lat-o.lat;return Math.sqrt(u*u+f*f)},infinite:!0});re.Earth=se,re.EPSG3395=Ix,re.EPSG3857=et,re.EPSG900913=xe,re.EPSG4326=jh,re.Simple=Nx;var gn=ce.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(o){return o.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(o){return o&&o.removeLayer(this),this},getPane:function(o){return this._map.getPane(o?this.options[o]||o:this.options.pane)},addInteractiveTarget:function(o){return this._map._targets[d(o)]=this,this},removeInteractiveTarget:function(o){return delete this._map._targets[d(o)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(o){var s=o.target;if(s.hasLayer(this)){if(this._map=s,this._zoomAnimated=s._zoomAnimated,this.getEvents){var u=this.getEvents();s.on(u,this),this.once("remove",function(){s.off(u,this)},this)}this.onAdd(s),this.fire("add"),s.fire("layeradd",{layer:this})}}});Se.include({addLayer:function(o){if(!o._layerAdd)throw new Error("The provided object is not a Layer.");var s=d(o);return this._layers[s]?this:(this._layers[s]=o,o._mapToAdd=this,o.beforeAdd&&o.beforeAdd(this),this.whenReady(o._layerAdd,o),this)},removeLayer:function(o){var s=d(o);return this._layers[s]?(this._loaded&&o.onRemove(this),delete this._layers[s],this._loaded&&(this.fire("layerremove",{layer:o}),o.fire("remove")),o._map=o._mapToAdd=null,this):this},hasLayer:function(o){return d(o)in this._layers},eachLayer:function(o,s){for(var u in this._layers)o.call(s,this._layers[u]);return this},_addLayers:function(o){o=o?k(o)?o:[o]:[];for(var s=0,u=o.length;s<u;s++)this.addLayer(o[s])},_addZoomLimit:function(o){(!isNaN(o.options.maxZoom)||!isNaN(o.options.minZoom))&&(this._zoomBoundLayers[d(o)]=o,this._updateZoomLevels())},_removeZoomLimit:function(o){var s=d(o);this._zoomBoundLayers[s]&&(delete this._zoomBoundLayers[s],this._updateZoomLevels())},_updateZoomLevels:function(){var o=1/0,s=-1/0,u=this._getZoomSpan();for(var f in this._zoomBoundLayers){var h=this._zoomBoundLayers[f].options;o=h.minZoom===void 0?o:Math.min(o,h.minZoom),s=h.maxZoom===void 0?s:Math.max(s,h.maxZoom)}this._layersMaxZoom=s===-1/0?void 0:s,this._layersMinZoom=o===1/0?void 0:o,u!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Ro=gn.extend({initialize:function(o,s){S(this,s),this._layers={};var u,f;if(o)for(u=0,f=o.length;u<f;u++)this.addLayer(o[u])},addLayer:function(o){var s=this.getLayerId(o);return this._layers[s]=o,this._map&&this._map.addLayer(o),this},removeLayer:function(o){var s=o in this._layers?o:this.getLayerId(o);return this._map&&this._layers[s]&&this._map.removeLayer(this._layers[s]),delete this._layers[s],this},hasLayer:function(o){var s=typeof o=="number"?o:this.getLayerId(o);return s in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(o){var s=Array.prototype.slice.call(arguments,1),u,f;for(u in this._layers)f=this._layers[u],f[o]&&f[o].apply(f,s);return this},onAdd:function(o){this.eachLayer(o.addLayer,o)},onRemove:function(o){this.eachLayer(o.removeLayer,o)},eachLayer:function(o,s){for(var u in this._layers)o.call(s,this._layers[u]);return this},getLayer:function(o){return this._layers[o]},getLayers:function(){var o=[];return this.eachLayer(o.push,o),o},setZIndex:function(o){return this.invoke("setZIndex",o)},getLayerId:function(o){return d(o)}}),Dx=function(o,s){return new Ro(o,s)},eo=Ro.extend({addLayer:function(o){return this.hasLayer(o)?this:(o.addEventParent(this),Ro.prototype.addLayer.call(this,o),this.fire("layeradd",{layer:o}))},removeLayer:function(o){return this.hasLayer(o)?(o in this._layers&&(o=this._layers[o]),o.removeEventParent(this),Ro.prototype.removeLayer.call(this,o),this.fire("layerremove",{layer:o})):this},setStyle:function(o){return this.invoke("setStyle",o)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var o=new T;for(var s in this._layers){var u=this._layers[s];o.extend(u.getBounds?u.getBounds():u.getLatLng())}return o}}),Mx=function(o,s){return new eo(o,s)},Io=ue.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(o){S(this,o)},createIcon:function(o){return this._createIcon("icon",o)},createShadow:function(o){return this._createIcon("shadow",o)},_createIcon:function(o,s){var u=this._getIconUrl(o);if(!u){if(o==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var f=this._createImg(u,s&&s.tagName==="IMG"?s:null);return this._setIconStyles(f,o),(this.options.crossOrigin||this.options.crossOrigin==="")&&(f.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),f},_setIconStyles:function(o,s){var u=this.options,f=u[s+"Size"];typeof f=="number"&&(f=[f,f]);var h=H(f),x=H(s==="shadow"&&u.shadowAnchor||u.iconAnchor||h&&h.divideBy(2,!0));o.className="leaflet-marker-"+s+" "+(u.className||""),x&&(o.style.marginLeft=-x.x+"px",o.style.marginTop=-x.y+"px"),h&&(o.style.width=h.x+"px",o.style.height=h.y+"px")},_createImg:function(o,s){return s=s||document.createElement("img"),s.src=o,s},_getIconUrl:function(o){return ie.retina&&this.options[o+"RetinaUrl"]||this.options[o+"Url"]}});function Fx(o){return new Io(o)}var Di=Io.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(o){return typeof Di.imagePath!="string"&&(Di.imagePath=this._detectIconPath()),(this.options.imagePath||Di.imagePath)+Io.prototype._getIconUrl.call(this,o)},_stripUrl:function(o){var s=function(u,f,h){var x=f.exec(u);return x&&x[h]};return o=s(o,/^url\((['"])?(.+)\1\)$/,2),o&&s(o,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var o=Ce("div","leaflet-default-icon-path",document.body),s=zi(o,"background-image")||zi(o,"backgroundImage");if(document.body.removeChild(o),s=this._stripUrl(s),s)return s;var u=document.querySelector('link[href$="leaflet.css"]');return u?u.href.substring(0,u.href.length-11-1):""}}),$h=Dn.extend({initialize:function(o){this._marker=o},addHooks:function(){var o=this._marker._icon;this._draggable||(this._draggable=new mr(o,o,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),me(o,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&tt(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(o){var s=this._marker,u=s._map,f=this._marker.options.autoPanSpeed,h=this._marker.options.autoPanPadding,x=Gr(s._icon),C=u.getPixelBounds(),z=u.getPixelOrigin(),R=B(C.min._subtract(z).add(h),C.max._subtract(z).subtract(h));if(!R.contains(x)){var U=H((Math.max(R.max.x,x.x)-R.max.x)/(C.max.x-R.max.x)-(Math.min(R.min.x,x.x)-R.min.x)/(C.min.x-R.min.x),(Math.max(R.max.y,x.y)-R.max.y)/(C.max.y-R.max.y)-(Math.min(R.min.y,x.y)-R.min.y)/(C.min.y-R.min.y)).multiplyBy(f);u.panBy(U,{animate:!1}),this._draggable._newPos._add(U),this._draggable._startPos._add(U),it(s._icon,this._draggable._newPos),this._onDrag(o),this._panRequest=le(this._adjustPan.bind(this,o))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(o){this._marker.options.autoPan&&(he(this._panRequest),this._panRequest=le(this._adjustPan.bind(this,o)))},_onDrag:function(o){var s=this._marker,u=s._shadow,f=Gr(s._icon),h=s._map.layerPointToLatLng(f);u&&it(u,f),s._latlng=h,o.latlng=h,o.oldLatLng=this._oldLatLng,s.fire("move",o).fire("drag",o)},_onDragEnd:function(o){he(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",o)}}),us=gn.extend({options:{icon:new Di,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(o,s){S(this,s),this._latlng=Y(o)},onAdd:function(o){this._zoomAnimated=this._zoomAnimated&&o.options.markerZoomAnimation,this._zoomAnimated&&o.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(o){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&o.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(o){var s=this._latlng;return this._latlng=Y(o),this.update(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},setZIndexOffset:function(o){return this.options.zIndexOffset=o,this.update()},getIcon:function(){return this.options.icon},setIcon:function(o){return this.options.icon=o,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var o=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(o)}return this},_initIcon:function(){var o=this.options,s="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),u=o.icon.createIcon(this._icon),f=!1;u!==this._icon&&(this._icon&&this._removeIcon(),f=!0,o.title&&(u.title=o.title),u.tagName==="IMG"&&(u.alt=o.alt||"")),me(u,s),o.keyboard&&(u.tabIndex="0",u.setAttribute("role","button")),this._icon=u,o.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&fe(u,"focus",this._panOnFocus,this);var h=o.icon.createShadow(this._shadow),x=!1;h!==this._shadow&&(this._removeShadow(),x=!0),h&&(me(h,s),h.alt=""),this._shadow=h,o.opacity<1&&this._updateOpacity(),f&&this.getPane().appendChild(this._icon),this._initInteraction(),h&&x&&this.getPane(o.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Fe(this._icon,"focus",this._panOnFocus,this),qe(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&qe(this._shadow),this._shadow=null},_setPos:function(o){this._icon&&it(this._icon,o),this._shadow&&it(this._shadow,o),this._zIndex=o.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(o){this._icon&&(this._icon.style.zIndex=this._zIndex+o)},_animateZoom:function(o){var s=this._map._latLngToNewLayerPoint(this._latlng,o.zoom,o.center).round();this._setPos(s)},_initInteraction:function(){if(this.options.interactive&&(me(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),$h)){var o=this.options.draggable;this.dragging&&(o=this.dragging.enabled(),this.dragging.disable()),this.dragging=new $h(this),o&&this.dragging.enable()}},setOpacity:function(o){return this.options.opacity=o,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var o=this.options.opacity;this._icon&&tn(this._icon,o),this._shadow&&tn(this._shadow,o)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var o=this._map;if(o){var s=this.options.icon.options,u=s.iconSize?H(s.iconSize):H(0,0),f=s.iconAnchor?H(s.iconAnchor):H(0,0);o.panInside(this._latlng,{paddingTopLeft:f,paddingBottomRight:u.subtract(f)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function Ax(o,s){return new us(o,s)}var _r=gn.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(o){this._renderer=o.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(o){return S(this,o),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&o&&Object.prototype.hasOwnProperty.call(o,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),cs=_r.extend({options:{fill:!0,radius:10},initialize:function(o,s){S(this,s),this._latlng=Y(o),this._radius=this.options.radius},setLatLng:function(o){var s=this._latlng;return this._latlng=Y(o),this.redraw(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(o){return this.options.radius=this._radius=o,this.redraw()},getRadius:function(){return this._radius},setStyle:function(o){var s=o&&o.radius||this._radius;return _r.prototype.setStyle.call(this,o),this.setRadius(s),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var o=this._radius,s=this._radiusY||o,u=this._clickTolerance(),f=[o+u,s+u];this._pxBounds=new P(this._point.subtract(f),this._point.add(f))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(o){return o.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function jx(o,s){return new cs(o,s)}var lc=cs.extend({initialize:function(o,s,u){if(typeof s=="number"&&(s=i({},u,{radius:s})),S(this,s),this._latlng=Y(o),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(o){return this._mRadius=o,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var o=[this._radius,this._radiusY||this._radius];return new T(this._map.layerPointToLatLng(this._point.subtract(o)),this._map.layerPointToLatLng(this._point.add(o)))},setStyle:_r.prototype.setStyle,_project:function(){var o=this._latlng.lng,s=this._latlng.lat,u=this._map,f=u.options.crs;if(f.distance===se.distance){var h=Math.PI/180,x=this._mRadius/se.R/h,C=u.project([s+x,o]),z=u.project([s-x,o]),R=C.add(z).divideBy(2),U=u.unproject(R).lat,J=Math.acos((Math.cos(x*h)-Math.sin(s*h)*Math.sin(U*h))/(Math.cos(s*h)*Math.cos(U*h)))/h;(isNaN(J)||J===0)&&(J=x/Math.cos(Math.PI/180*s)),this._point=R.subtract(u.getPixelOrigin()),this._radius=isNaN(J)?0:R.x-u.project([U,o-J]).x,this._radiusY=R.y-C.y}else{var de=f.unproject(f.project(this._latlng).subtract([this._mRadius,0]));this._point=u.latLngToLayerPoint(this._latlng),this._radius=this._point.x-u.latLngToLayerPoint(de).x}this._updateBounds()}});function $x(o,s,u){return new lc(o,s,u)}var Xn=_r.extend({options:{smoothFactor:1,noClip:!1},initialize:function(o,s){S(this,s),this._setLatLngs(o)},getLatLngs:function(){return this._latlngs},setLatLngs:function(o){return this._setLatLngs(o),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(o){for(var s=1/0,u=null,f=Ni,h,x,C=0,z=this._parts.length;C<z;C++)for(var R=this._parts[C],U=1,J=R.length;U<J;U++){h=R[U-1],x=R[U];var de=f(o,h,x,!0);de<s&&(s=de,u=f(o,h,x))}return u&&(u.distance=Math.sqrt(s)),u},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Mh(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(o,s){return s=s||this._defaultShape(),o=Y(o),s.push(o),this._bounds.extend(o),this.redraw()},_setLatLngs:function(o){this._bounds=new T,this._latlngs=this._convertLatLngs(o)},_defaultShape:function(){return nn(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(o){for(var s=[],u=nn(o),f=0,h=o.length;f<h;f++)u?(s[f]=Y(o[f]),this._bounds.extend(s[f])):s[f]=this._convertLatLngs(o[f]);return s},_project:function(){var o=new P;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,o),this._bounds.isValid()&&o.isValid()&&(this._rawPxBounds=o,this._updateBounds())},_updateBounds:function(){var o=this._clickTolerance(),s=new I(o,o);this._rawPxBounds&&(this._pxBounds=new P([this._rawPxBounds.min.subtract(s),this._rawPxBounds.max.add(s)]))},_projectLatlngs:function(o,s,u){var f=o[0]instanceof Q,h=o.length,x,C;if(f){for(C=[],x=0;x<h;x++)C[x]=this._map.latLngToLayerPoint(o[x]),u.extend(C[x]);s.push(C)}else for(x=0;x<h;x++)this._projectLatlngs(o[x],s,u)},_clipPoints:function(){var o=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(o))){if(this.options.noClip){this._parts=this._rings;return}var s=this._parts,u,f,h,x,C,z,R;for(u=0,h=0,x=this._rings.length;u<x;u++)for(R=this._rings[u],f=0,C=R.length;f<C-1;f++)z=Nh(R[f],R[f+1],o,f,!0),z&&(s[h]=s[h]||[],s[h].push(z[0]),(z[1]!==R[f+1]||f===C-2)&&(s[h].push(z[1]),h++))}},_simplifyPoints:function(){for(var o=this._parts,s=this.options.smoothFactor,u=0,f=o.length;u<f;u++)o[u]=Bh(o[u],s)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(o,s){var u,f,h,x,C,z,R=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(o))return!1;for(u=0,x=this._parts.length;u<x;u++)for(z=this._parts[u],f=0,C=z.length,h=C-1;f<C;h=f++)if(!(!s&&f===0)&&Rh(o,z[h],z[f])<=R)return!0;return!1}});function Ux(o,s){return new Xn(o,s)}Xn._flat=Dh;var No=Xn.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Ah(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(o){var s=Xn.prototype._convertLatLngs.call(this,o),u=s.length;return u>=2&&s[0]instanceof Q&&s[0].equals(s[u-1])&&s.pop(),s},_setLatLngs:function(o){Xn.prototype._setLatLngs.call(this,o),nn(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return nn(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var o=this._renderer._bounds,s=this.options.weight,u=new I(s,s);if(o=new P(o.min.subtract(u),o.max.add(u)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(o))){if(this.options.noClip){this._parts=this._rings;return}for(var f=0,h=this._rings.length,x;f<h;f++)x=Fh(this._rings[f],o,!0),x.length&&this._parts.push(x)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(o){var s=!1,u,f,h,x,C,z,R,U;if(!this._pxBounds||!this._pxBounds.contains(o))return!1;for(x=0,R=this._parts.length;x<R;x++)for(u=this._parts[x],C=0,U=u.length,z=U-1;C<U;z=C++)f=u[C],h=u[z],f.y>o.y!=h.y>o.y&&o.x<(h.x-f.x)*(o.y-f.y)/(h.y-f.y)+f.x&&(s=!s);return s||Xn.prototype._containsPoint.call(this,o,!0)}});function Hx(o,s){return new No(o,s)}var Yn=eo.extend({initialize:function(o,s){S(this,s),this._layers={},o&&this.addData(o)},addData:function(o){var s=k(o)?o:o.features,u,f,h;if(s){for(u=0,f=s.length;u<f;u++)h=s[u],(h.geometries||h.geometry||h.features||h.coordinates)&&this.addData(h);return this}var x=this.options;if(x.filter&&!x.filter(o))return this;var C=ds(o,x);return C?(C.feature=hs(o),C.defaultOptions=C.options,this.resetStyle(C),x.onEachFeature&&x.onEachFeature(o,C),this.addLayer(C)):this},resetStyle:function(o){return o===void 0?this.eachLayer(this.resetStyle,this):(o.options=i({},o.defaultOptions),this._setLayerStyle(o,this.options.style),this)},setStyle:function(o){return this.eachLayer(function(s){this._setLayerStyle(s,o)},this)},_setLayerStyle:function(o,s){o.setStyle&&(typeof s=="function"&&(s=s(o.feature)),o.setStyle(s))}});function ds(o,s){var u=o.type==="Feature"?o.geometry:o,f=u?u.coordinates:null,h=[],x=s&&s.pointToLayer,C=s&&s.coordsToLatLng||uc,z,R,U,J;if(!f&&!u)return null;switch(u.type){case"Point":return z=C(f),Uh(x,o,z,s);case"MultiPoint":for(U=0,J=f.length;U<J;U++)z=C(f[U]),h.push(Uh(x,o,z,s));return new eo(h);case"LineString":case"MultiLineString":return R=fs(f,u.type==="LineString"?0:1,C),new Xn(R,s);case"Polygon":case"MultiPolygon":return R=fs(f,u.type==="Polygon"?1:2,C),new No(R,s);case"GeometryCollection":for(U=0,J=u.geometries.length;U<J;U++){var de=ds({geometry:u.geometries[U],type:"Feature",properties:o.properties},s);de&&h.push(de)}return new eo(h);case"FeatureCollection":for(U=0,J=u.features.length;U<J;U++){var pe=ds(u.features[U],s);pe&&h.push(pe)}return new eo(h);default:throw new Error("Invalid GeoJSON object.")}}function Uh(o,s,u,f){return o?o(s,u):new us(u,f&&f.markersInheritOptions&&f)}function uc(o){return new Q(o[1],o[0],o[2])}function fs(o,s,u){for(var f=[],h=0,x=o.length,C;h<x;h++)C=s?fs(o[h],s-1,u):(u||uc)(o[h]),f.push(C);return f}function cc(o,s){return o=Y(o),o.alt!==void 0?[m(o.lng,s),m(o.lat,s),m(o.alt,s)]:[m(o.lng,s),m(o.lat,s)]}function ps(o,s,u,f){for(var h=[],x=0,C=o.length;x<C;x++)h.push(s?ps(o[x],nn(o[x])?0:s-1,u,f):cc(o[x],f));return!s&&u&&h.push(h[0]),h}function Do(o,s){return o.feature?i({},o.feature,{geometry:s}):hs(s)}function hs(o){return o.type==="Feature"||o.type==="FeatureCollection"?o:{type:"Feature",properties:{},geometry:o}}var dc={toGeoJSON:function(o){return Do(this,{type:"Point",coordinates:cc(this.getLatLng(),o)})}};us.include(dc),lc.include(dc),cs.include(dc),Xn.include({toGeoJSON:function(o){var s=!nn(this._latlngs),u=ps(this._latlngs,s?1:0,!1,o);return Do(this,{type:(s?"Multi":"")+"LineString",coordinates:u})}}),No.include({toGeoJSON:function(o){var s=!nn(this._latlngs),u=s&&!nn(this._latlngs[0]),f=ps(this._latlngs,u?2:s?1:0,!0,o);return s||(f=[f]),Do(this,{type:(u?"Multi":"")+"Polygon",coordinates:f})}}),Ro.include({toMultiPoint:function(o){var s=[];return this.eachLayer(function(u){s.push(u.toGeoJSON(o).geometry.coordinates)}),Do(this,{type:"MultiPoint",coordinates:s})},toGeoJSON:function(o){var s=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(s==="MultiPoint")return this.toMultiPoint(o);var u=s==="GeometryCollection",f=[];return this.eachLayer(function(h){if(h.toGeoJSON){var x=h.toGeoJSON(o);if(u)f.push(x.geometry);else{var C=hs(x);C.type==="FeatureCollection"?f.push.apply(f,C.features):f.push(C)}}}),u?Do(this,{geometries:f,type:"GeometryCollection"}):{type:"FeatureCollection",features:f}}});function Hh(o,s){return new Yn(o,s)}var Wx=Hh,ms=gn.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(o,s,u){this._url=o,this._bounds=A(s),S(this,u)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(me(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){qe(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(o){return this.options.opacity=o,this._image&&this._updateOpacity(),this},setStyle:function(o){return o.opacity&&this.setOpacity(o.opacity),this},bringToFront:function(){return this._map&&Lo(this._image),this},bringToBack:function(){return this._map&&Bo(this._image),this},setUrl:function(o){return this._url=o,this._image&&(this._image.src=o),this},setBounds:function(o){return this._bounds=A(o),this._map&&this._reset(),this},getEvents:function(){var o={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(o.zoomanim=this._animateZoom),o},setZIndex:function(o){return this.options.zIndex=o,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var o=this._url.tagName==="IMG",s=this._image=o?this._url:Ce("img");if(me(s,"leaflet-image-layer"),this._zoomAnimated&&me(s,"leaflet-zoom-animated"),this.options.className&&me(s,this.options.className),s.onselectstart=v,s.onmousemove=v,s.onload=l(this.fire,this,"load"),s.onerror=l(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(s.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),o){this._url=s.src;return}s.src=this._url,s.alt=this.options.alt},_animateZoom:function(o){var s=this._map.getZoomScale(o.zoom),u=this._map._latLngBoundsToNewLayerBounds(this._bounds,o.zoom,o.center).min;Qr(this._image,u,s)},_reset:function(){var o=this._image,s=new P(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),u=s.getSize();it(o,s.min),o.style.width=u.x+"px",o.style.height=u.y+"px"},_updateOpacity:function(){tn(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var o=this.options.errorOverlayUrl;o&&this._url!==o&&(this._url=o,this._image.src=o)},getCenter:function(){return this._bounds.getCenter()}}),Zx=function(o,s,u){return new ms(o,s,u)},Wh=ms.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var o=this._url.tagName==="VIDEO",s=this._image=o?this._url:Ce("video");if(me(s,"leaflet-image-layer"),this._zoomAnimated&&me(s,"leaflet-zoom-animated"),this.options.className&&me(s,this.options.className),s.onselectstart=v,s.onmousemove=v,s.onloadeddata=l(this.fire,this,"load"),o){for(var u=s.getElementsByTagName("source"),f=[],h=0;h<u.length;h++)f.push(u[h].src);this._url=u.length>0?f:[s.src];return}k(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(s.style,"objectFit")&&(s.style.objectFit="fill"),s.autoplay=!!this.options.autoplay,s.loop=!!this.options.loop,s.muted=!!this.options.muted,s.playsInline=!!this.options.playsInline;for(var x=0;x<this._url.length;x++){var C=Ce("source");C.src=this._url[x],s.appendChild(C)}}});function Vx(o,s,u){return new Wh(o,s,u)}var Zh=ms.extend({_initImage:function(){var o=this._image=this._url;me(o,"leaflet-image-layer"),this._zoomAnimated&&me(o,"leaflet-zoom-animated"),this.options.className&&me(o,this.options.className),o.onselectstart=v,o.onmousemove=v}});function qx(o,s,u){return new Zh(o,s,u)}var Mn=gn.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(o,s){o&&(o instanceof L.LatLng||k(o))?(this._latlng=Y(o),S(this,s)):(S(this,o),this._source=s),this.options.content&&(this._content=this.options.content)},openOn:function(o){return o=arguments.length?o:this._source._map,o.hasLayer(this)||o.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(o){return this._map?this.close():(arguments.length?this._source=o:o=this._source,this._prepareOpen(),this.openOn(o._map)),this},onAdd:function(o){this._zoomAnimated=o._zoomAnimated,this._container||this._initLayout(),o._fadeAnimated&&tn(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),o._fadeAnimated&&tn(this._container,1),this.bringToFront(),this.options.interactive&&(me(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(o){o._fadeAnimated?(tn(this._container,0),this._removeTimeout=setTimeout(l(qe,void 0,this._container),200)):qe(this._container),this.options.interactive&&(tt(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(o){return this._latlng=Y(o),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(o){return this._content=o,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var o={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(o.zoomanim=this._animateZoom),o},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Lo(this._container),this},bringToBack:function(){return this._map&&Bo(this._container),this},_prepareOpen:function(o){var s=this._source;if(!s._map)return!1;if(s instanceof eo){s=null;var u=this._source._layers;for(var f in u)if(u[f]._map){s=u[f];break}if(!s)return!1;this._source=s}if(!o)if(s.getCenter)o=s.getCenter();else if(s.getLatLng)o=s.getLatLng();else if(s.getBounds)o=s.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(o),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var o=this._contentNode,s=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof s=="string")o.innerHTML=s;else{for(;o.hasChildNodes();)o.removeChild(o.firstChild);o.appendChild(s)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var o=this._map.latLngToLayerPoint(this._latlng),s=H(this.options.offset),u=this._getAnchor();this._zoomAnimated?it(this._container,o.add(u)):s=s.add(o).add(u);var f=this._containerBottom=-s.y,h=this._containerLeft=-Math.round(this._containerWidth/2)+s.x;this._container.style.bottom=f+"px",this._container.style.left=h+"px"}},_getAnchor:function(){return[0,0]}});Se.include({_initOverlay:function(o,s,u,f){var h=s;return h instanceof o||(h=new o(f).setContent(s)),u&&h.setLatLng(u),h}}),gn.include({_initOverlay:function(o,s,u,f){var h=u;return h instanceof o?(S(h,f),h._source=this):(h=s&&!f?s:new o(f,this),h.setContent(u)),h}});var _s=Mn.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(o){return o=arguments.length?o:this._source._map,!o.hasLayer(this)&&o._popup&&o._popup.options.autoClose&&o.removeLayer(o._popup),o._popup=this,Mn.prototype.openOn.call(this,o)},onAdd:function(o){Mn.prototype.onAdd.call(this,o),o.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof _r||this._source.on("preclick",Xr))},onRemove:function(o){Mn.prototype.onRemove.call(this,o),o.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof _r||this._source.off("preclick",Xr))},getEvents:function(){var o=Mn.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(o.preclick=this.close),this.options.keepInView&&(o.moveend=this._adjustPan),o},_initLayout:function(){var o="leaflet-popup",s=this._container=Ce("div",o+" "+(this.options.className||"")+" leaflet-zoom-animated"),u=this._wrapper=Ce("div",o+"-content-wrapper",s);if(this._contentNode=Ce("div",o+"-content",u),Ri(s),tc(this._contentNode),fe(s,"contextmenu",Xr),this._tipContainer=Ce("div",o+"-tip-container",s),this._tip=Ce("div",o+"-tip",this._tipContainer),this.options.closeButton){var f=this._closeButton=Ce("a",o+"-close-button",s);f.setAttribute("role","button"),f.setAttribute("aria-label","Close popup"),f.href="#close",f.innerHTML='<span aria-hidden="true">&#215;</span>',fe(f,"click",function(h){mt(h),this.close()},this)}},_updateLayout:function(){var o=this._contentNode,s=o.style;s.width="",s.whiteSpace="nowrap";var u=o.offsetWidth;u=Math.min(u,this.options.maxWidth),u=Math.max(u,this.options.minWidth),s.width=u+1+"px",s.whiteSpace="",s.height="";var f=o.offsetHeight,h=this.options.maxHeight,x="leaflet-popup-scrolled";h&&f>h?(s.height=h+"px",me(o,x)):tt(o,x),this._containerWidth=this._container.offsetWidth},_animateZoom:function(o){var s=this._map._latLngToNewLayerPoint(this._latlng,o.zoom,o.center),u=this._getAnchor();it(this._container,s.add(u))},_adjustPan:function(o){if(this.options.autoPan){this._map._panAnim&&this._map._panAnim.stop();var s=this._map,u=parseInt(zi(this._container,"marginBottom"),10)||0,f=this._container.offsetHeight+u,h=this._containerWidth,x=new I(this._containerLeft,-f-this._containerBottom);x._add(Gr(this._container));var C=s.layerPointToContainerPoint(x),z=H(this.options.autoPanPadding),R=H(this.options.autoPanPaddingTopLeft||z),U=H(this.options.autoPanPaddingBottomRight||z),J=s.getSize(),de=0,pe=0;C.x+h+U.x>J.x&&(de=C.x+h-J.x+U.x),C.x-de-R.x<0&&(de=C.x-R.x),C.y+f+U.y>J.y&&(pe=C.y+f-J.y+U.y),C.y-pe-R.y<0&&(pe=C.y-R.y),(de||pe)&&s.fire("autopanstart").panBy([de,pe],{animate:o&&o.type==="moveend"})}},_getAnchor:function(){return H(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Kx=function(o,s){return new _s(o,s)};Se.mergeOptions({closePopupOnClick:!0}),Se.include({openPopup:function(o,s,u){return this._initOverlay(_s,o,s,u).openOn(this),this},closePopup:function(o){return o=arguments.length?o:this._popup,o&&o.close(),this}}),gn.include({bindPopup:function(o,s){return this._popup=this._initOverlay(_s,this._popup,o,s),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(o){return this._popup&&this._popup._prepareOpen(o||this._latlng)&&this._popup.openOn(this._map),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(o){return this._popup&&this._popup.setContent(o),this},getPopup:function(){return this._popup},_openPopup:function(o){if(!(!this._popup||!this._map)){Yr(o);var s=o.layer||o.target;if(this._popup._source===s&&!(s instanceof _r)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(o.latlng);return}this._popup._source=s,this.openPopup(o.latlng)}},_movePopup:function(o){this._popup.setLatLng(o.latlng)},_onKeyPress:function(o){o.originalEvent.keyCode===13&&this._openPopup(o)}});var vs=Mn.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(o){Mn.prototype.onAdd.call(this,o),this.setOpacity(this.options.opacity),o.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(o){Mn.prototype.onRemove.call(this,o),o.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var o=Mn.prototype.getEvents.call(this);return this.options.permanent||(o.preclick=this.close),o},_initLayout:function(){var o="leaflet-tooltip",s=o+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=Ce("div",s),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+d(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(o){var s,u,f=this._map,h=this._container,x=f.latLngToContainerPoint(f.getCenter()),C=f.layerPointToContainerPoint(o),z=this.options.direction,R=h.offsetWidth,U=h.offsetHeight,J=H(this.options.offset),de=this._getAnchor();z==="top"?(s=R/2,u=U):z==="bottom"?(s=R/2,u=0):z==="center"?(s=R/2,u=U/2):z==="right"?(s=0,u=U/2):z==="left"?(s=R,u=U/2):C.x<x.x?(z="right",s=0,u=U/2):(z="left",s=R+(J.x+de.x)*2,u=U/2),o=o.subtract(H(s,u,!0)).add(J).add(de),tt(h,"leaflet-tooltip-right"),tt(h,"leaflet-tooltip-left"),tt(h,"leaflet-tooltip-top"),tt(h,"leaflet-tooltip-bottom"),me(h,"leaflet-tooltip-"+z),it(h,o)},_updatePosition:function(){var o=this._map.latLngToLayerPoint(this._latlng);this._setPosition(o)},setOpacity:function(o){this.options.opacity=o,this._container&&tn(this._container,o)},_animateZoom:function(o){var s=this._map._latLngToNewLayerPoint(this._latlng,o.zoom,o.center);this._setPosition(s)},_getAnchor:function(){return H(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),Qx=function(o,s){return new vs(o,s)};Se.include({openTooltip:function(o,s,u){return this._initOverlay(vs,o,s,u).openOn(this),this},closeTooltip:function(o){return o.close(),this}}),gn.include({bindTooltip:function(o,s){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(vs,this._tooltip,o,s),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(o){if(!(!o&&this._tooltipHandlersAdded)){var s=o?"off":"on",u={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?u.add=this._openTooltip:(u.mouseover=this._openTooltip,u.mouseout=this.closeTooltip,u.click=this._openTooltip,this._map?this._addFocusListeners():u.add=this._addFocusListeners),this._tooltip.options.sticky&&(u.mousemove=this._moveTooltip),this[s](u),this._tooltipHandlersAdded=!o}},openTooltip:function(o){return this._tooltip&&this._tooltip._prepareOpen(o)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this)),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(o){return this._tooltip&&this._tooltip.setContent(o),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(o){var s=o.getElement();s&&(fe(s,"focus",function(){this._tooltip._source=o,this.openTooltip()},this),fe(s,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(o){var s=o.getElement();s&&s.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(o){!this._tooltip||!this._map||this._map.dragging&&this._map.dragging.moving()||(this._tooltip._source=o.layer||o.target,this.openTooltip(this._tooltip.options.sticky?o.latlng:void 0))},_moveTooltip:function(o){var s=o.latlng,u,f;this._tooltip.options.sticky&&o.originalEvent&&(u=this._map.mouseEventToContainerPoint(o.originalEvent),f=this._map.containerPointToLayerPoint(u),s=this._map.layerPointToLatLng(f)),this._tooltip.setLatLng(s)}});var Vh=Io.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(o){var s=o&&o.tagName==="DIV"?o:document.createElement("div"),u=this.options;if(u.html instanceof Element?(rs(s),s.appendChild(u.html)):s.innerHTML=u.html!==!1?u.html:"",u.bgPos){var f=H(u.bgPos);s.style.backgroundPosition=-f.x+"px "+-f.y+"px"}return this._setIconStyles(s,"icon"),s},createShadow:function(){return null}});function Gx(o){return new Vh(o)}Io.Default=Di;var Mi=gn.extend({options:{tileSize:256,opacity:1,updateWhenIdle:ie.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(o){S(this,o)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(o){o._addZoomLimit(this)},onRemove:function(o){this._removeAllTiles(),qe(this._container),o._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Lo(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(Bo(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(o){return this.options.opacity=o,this._updateOpacity(),this},setZIndex:function(o){return this.options.zIndex=o,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var o=this._clampZoom(this._map.getZoom());o!==this._tileZoom&&(this._tileZoom=o,this._updateLevels()),this._update()}return this},getEvents:function(){var o={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=p(this._onMoveEnd,this.options.updateInterval,this)),o.move=this._onMove),this._zoomAnimated&&(o.zoomanim=this._animateZoom),o},createTile:function(){return document.createElement("div")},getTileSize:function(){var o=this.options.tileSize;return o instanceof I?o:new I(o,o)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(o){for(var s=this.getPane().children,u=-o(-1/0,1/0),f=0,h=s.length,x;f<h;f++)x=s[f].style.zIndex,s[f]!==this._container&&x&&(u=o(u,+x));isFinite(u)&&(this.options.zIndex=u+o(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!ie.ielt9){tn(this._container,this.options.opacity);var o=+new Date,s=!1,u=!1;for(var f in this._tiles){var h=this._tiles[f];if(!(!h.current||!h.loaded)){var x=Math.min(1,(o-h.loaded)/200);tn(h.el,x),x<1?s=!0:(h.active?u=!0:this._onOpaqueTile(h),h.active=!0)}}u&&!this._noPrune&&this._pruneTiles(),s&&(he(this._fadeFrame),this._fadeFrame=le(this._updateOpacity,this))}},_onOpaqueTile:v,_initContainer:function(){this._container||(this._container=Ce("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var o=this._tileZoom,s=this.options.maxZoom;if(o!==void 0){for(var u in this._levels)u=Number(u),this._levels[u].el.children.length||u===o?(this._levels[u].el.style.zIndex=s-Math.abs(o-u),this._onUpdateLevel(u)):(qe(this._levels[u].el),this._removeTilesAtZoom(u),this._onRemoveLevel(u),delete this._levels[u]);var f=this._levels[o],h=this._map;return f||(f=this._levels[o]={},f.el=Ce("div","leaflet-tile-container leaflet-zoom-animated",this._container),f.el.style.zIndex=s,f.origin=h.project(h.unproject(h.getPixelOrigin()),o).round(),f.zoom=o,this._setZoomTransform(f,h.getCenter(),h.getZoom()),v(f.el.offsetWidth),this._onCreateLevel(f)),this._level=f,f}},_onUpdateLevel:v,_onRemoveLevel:v,_onCreateLevel:v,_pruneTiles:function(){if(this._map){var o,s,u=this._map.getZoom();if(u>this.options.maxZoom||u<this.options.minZoom){this._removeAllTiles();return}for(o in this._tiles)s=this._tiles[o],s.retain=s.current;for(o in this._tiles)if(s=this._tiles[o],s.current&&!s.active){var f=s.coords;this._retainParent(f.x,f.y,f.z,f.z-5)||this._retainChildren(f.x,f.y,f.z,f.z+2)}for(o in this._tiles)this._tiles[o].retain||this._removeTile(o)}},_removeTilesAtZoom:function(o){for(var s in this._tiles)this._tiles[s].coords.z===o&&this._removeTile(s)},_removeAllTiles:function(){for(var o in this._tiles)this._removeTile(o)},_invalidateAll:function(){for(var o in this._levels)qe(this._levels[o].el),this._onRemoveLevel(Number(o)),delete this._levels[o];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(o,s,u,f){var h=Math.floor(o/2),x=Math.floor(s/2),C=u-1,z=new I(+h,+x);z.z=+C;var R=this._tileCoordsToKey(z),U=this._tiles[R];return U&&U.active?(U.retain=!0,!0):(U&&U.loaded&&(U.retain=!0),C>f?this._retainParent(h,x,C,f):!1)},_retainChildren:function(o,s,u,f){for(var h=2*o;h<2*o+2;h++)for(var x=2*s;x<2*s+2;x++){var C=new I(h,x);C.z=u+1;var z=this._tileCoordsToKey(C),R=this._tiles[z];if(R&&R.active){R.retain=!0;continue}else R&&R.loaded&&(R.retain=!0);u+1<f&&this._retainChildren(h,x,u+1,f)}},_resetView:function(o){var s=o&&(o.pinch||o.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),s,s)},_animateZoom:function(o){this._setView(o.center,o.zoom,!0,o.noUpdate)},_clampZoom:function(o){var s=this.options;return s.minNativeZoom!==void 0&&o<s.minNativeZoom?s.minNativeZoom:s.maxNativeZoom!==void 0&&s.maxNativeZoom<o?s.maxNativeZoom:o},_setView:function(o,s,u,f){var h=Math.round(s);this.options.maxZoom!==void 0&&h>this.options.maxZoom||this.options.minZoom!==void 0&&h<this.options.minZoom?h=void 0:h=this._clampZoom(h);var x=this.options.updateWhenZooming&&h!==this._tileZoom;(!f||x)&&(this._tileZoom=h,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),h!==void 0&&this._update(o),u||this._pruneTiles(),this._noPrune=!!u),this._setZoomTransforms(o,s)},_setZoomTransforms:function(o,s){for(var u in this._levels)this._setZoomTransform(this._levels[u],o,s)},_setZoomTransform:function(o,s,u){var f=this._map.getZoomScale(u,o.zoom),h=o.origin.multiplyBy(f).subtract(this._map._getNewPixelOrigin(s,u)).round();ie.any3d?Qr(o.el,h,f):it(o.el,h)},_resetGrid:function(){var o=this._map,s=o.options.crs,u=this._tileSize=this.getTileSize(),f=this._tileZoom,h=this._map.getPixelWorldBounds(this._tileZoom);h&&(this._globalTileRange=this._pxBoundsToTileRange(h)),this._wrapX=s.wrapLng&&!this.options.noWrap&&[Math.floor(o.project([0,s.wrapLng[0]],f).x/u.x),Math.ceil(o.project([0,s.wrapLng[1]],f).x/u.y)],this._wrapY=s.wrapLat&&!this.options.noWrap&&[Math.floor(o.project([s.wrapLat[0],0],f).y/u.x),Math.ceil(o.project([s.wrapLat[1],0],f).y/u.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(o){var s=this._map,u=s._animatingZoom?Math.max(s._animateToZoom,s.getZoom()):s.getZoom(),f=s.getZoomScale(u,this._tileZoom),h=s.project(o,this._tileZoom).floor(),x=s.getSize().divideBy(f*2);return new P(h.subtract(x),h.add(x))},_update:function(o){var s=this._map;if(s){var u=this._clampZoom(s.getZoom());if(o===void 0&&(o=s.getCenter()),this._tileZoom!==void 0){var f=this._getTiledPixelBounds(o),h=this._pxBoundsToTileRange(f),x=h.getCenter(),C=[],z=this.options.keepBuffer,R=new P(h.getBottomLeft().subtract([z,-z]),h.getTopRight().add([z,-z]));if(!(isFinite(h.min.x)&&isFinite(h.min.y)&&isFinite(h.max.x)&&isFinite(h.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var U in this._tiles){var J=this._tiles[U].coords;(J.z!==this._tileZoom||!R.contains(new I(J.x,J.y)))&&(this._tiles[U].current=!1)}if(Math.abs(u-this._tileZoom)>1){this._setView(o,u);return}for(var de=h.min.y;de<=h.max.y;de++)for(var pe=h.min.x;pe<=h.max.x;pe++){var rn=new I(pe,de);if(rn.z=this._tileZoom,!!this._isValidTile(rn)){var to=this._tiles[this._tileCoordsToKey(rn)];to?to.current=!0:C.push(rn)}}if(C.sort(function(vr,fc){return vr.distanceTo(x)-fc.distanceTo(x)}),C.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var ys=document.createDocumentFragment();for(pe=0;pe<C.length;pe++)this._addTile(C[pe],ys);this._level.el.appendChild(ys)}}}},_isValidTile:function(o){var s=this._map.options.crs;if(!s.infinite){var u=this._globalTileRange;if(!s.wrapLng&&(o.x<u.min.x||o.x>u.max.x)||!s.wrapLat&&(o.y<u.min.y||o.y>u.max.y))return!1}if(!this.options.bounds)return!0;var f=this._tileCoordsToBounds(o);return A(this.options.bounds).overlaps(f)},_keyToBounds:function(o){return this._tileCoordsToBounds(this._keyToTileCoords(o))},_tileCoordsToNwSe:function(o){var s=this._map,u=this.getTileSize(),f=o.scaleBy(u),h=f.add(u),x=s.unproject(f,o.z),C=s.unproject(h,o.z);return[x,C]},_tileCoordsToBounds:function(o){var s=this._tileCoordsToNwSe(o),u=new T(s[0],s[1]);return this.options.noWrap||(u=this._map.wrapLatLngBounds(u)),u},_tileCoordsToKey:function(o){return o.x+":"+o.y+":"+o.z},_keyToTileCoords:function(o){var s=o.split(":"),u=new I(+s[0],+s[1]);return u.z=+s[2],u},_removeTile:function(o){var s=this._tiles[o];s&&(qe(s.el),delete this._tiles[o],this.fire("tileunload",{tile:s.el,coords:this._keyToTileCoords(o)}))},_initTile:function(o){me(o,"leaflet-tile");var s=this.getTileSize();o.style.width=s.x+"px",o.style.height=s.y+"px",o.onselectstart=v,o.onmousemove=v,ie.ielt9&&this.options.opacity<1&&tn(o,this.options.opacity)},_addTile:function(o,s){var u=this._getTilePos(o),f=this._tileCoordsToKey(o),h=this.createTile(this._wrapCoords(o),l(this._tileReady,this,o));this._initTile(h),this.createTile.length<2&&le(l(this._tileReady,this,o,null,h)),it(h,u),this._tiles[f]={el:h,coords:o,current:!0},s.appendChild(h),this.fire("tileloadstart",{tile:h,coords:o})},_tileReady:function(o,s,u){s&&this.fire("tileerror",{error:s,tile:u,coords:o});var f=this._tileCoordsToKey(o);u=this._tiles[f],u&&(u.loaded=+new Date,this._map._fadeAnimated?(tn(u.el,0),he(this._fadeFrame),this._fadeFrame=le(this._updateOpacity,this)):(u.active=!0,this._pruneTiles()),s||(me(u.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:u.el,coords:o})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),ie.ielt9||!this._map._fadeAnimated?le(this._pruneTiles,this):setTimeout(l(this._pruneTiles,this),250)))},_getTilePos:function(o){return o.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(o){var s=new I(this._wrapX?_(o.x,this._wrapX):o.x,this._wrapY?_(o.y,this._wrapY):o.y);return s.z=o.z,s},_pxBoundsToTileRange:function(o){var s=this.getTileSize();return new P(o.min.unscaleBy(s).floor(),o.max.unscaleBy(s).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var o in this._tiles)if(!this._tiles[o].loaded)return!1;return!0}});function Xx(o){return new Mi(o)}var Mo=Mi.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(o,s){this._url=o,s=S(this,s),s.detectRetina&&ie.retina&&s.maxZoom>0?(s.tileSize=Math.floor(s.tileSize/2),s.zoomReverse?(s.zoomOffset--,s.minZoom=Math.min(s.maxZoom,s.minZoom+1)):(s.zoomOffset++,s.maxZoom=Math.max(s.minZoom,s.maxZoom-1)),s.minZoom=Math.max(0,s.minZoom)):s.zoomReverse?s.minZoom=Math.min(s.maxZoom,s.minZoom):s.maxZoom=Math.max(s.minZoom,s.maxZoom),typeof s.subdomains=="string"&&(s.subdomains=s.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(o,s){return this._url===o&&s===void 0&&(s=!0),this._url=o,s||this.redraw(),this},createTile:function(o,s){var u=document.createElement("img");return fe(u,"load",l(this._tileOnLoad,this,s,u)),fe(u,"error",l(this._tileOnError,this,s,u)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(u.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(u.referrerPolicy=this.options.referrerPolicy),u.alt="",u.src=this.getTileUrl(o),u},getTileUrl:function(o){var s={r:ie.retina?"@2x":"",s:this._getSubdomain(o),x:o.x,y:o.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var u=this._globalTileRange.max.y-o.y;this.options.tms&&(s.y=u),s["-y"]=u}return g(this._url,i(s,this.options))},_tileOnLoad:function(o,s){ie.ielt9?setTimeout(l(o,this,null,s),0):o(null,s)},_tileOnError:function(o,s,u){var f=this.options.errorTileUrl;f&&s.getAttribute("src")!==f&&(s.src=f),o(u,s)},_onTileRemove:function(o){o.tile.onload=null},_getZoomForUrl:function(){var o=this._tileZoom,s=this.options.maxZoom,u=this.options.zoomReverse,f=this.options.zoomOffset;return u&&(o=s-o),o+f},_getSubdomain:function(o){var s=Math.abs(o.x+o.y)%this.options.subdomains.length;return this.options.subdomains[s]},_abortLoading:function(){var o,s;for(o in this._tiles)if(this._tiles[o].coords.z!==this._tileZoom&&(s=this._tiles[o].el,s.onload=v,s.onerror=v,!s.complete)){s.src=D;var u=this._tiles[o].coords;qe(s),delete this._tiles[o],this.fire("tileabort",{tile:s,coords:u})}},_removeTile:function(o){var s=this._tiles[o];if(s)return s.el.setAttribute("src",D),Mi.prototype._removeTile.call(this,o)},_tileReady:function(o,s,u){if(!(!this._map||u&&u.getAttribute("src")===D))return Mi.prototype._tileReady.call(this,o,s,u)}});function qh(o,s){return new Mo(o,s)}var Kh=Mo.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(o,s){this._url=o;var u=i({},this.defaultWmsParams);for(var f in s)f in this.options||(u[f]=s[f]);s=S(this,s);var h=s.detectRetina&&ie.retina?2:1,x=this.getTileSize();u.width=x.x*h,u.height=x.y*h,this.wmsParams=u},onAdd:function(o){this._crs=this.options.crs||o.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var s=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[s]=this._crs.code,Mo.prototype.onAdd.call(this,o)},getTileUrl:function(o){var s=this._tileCoordsToNwSe(o),u=this._crs,f=B(u.project(s[0]),u.project(s[1])),h=f.min,x=f.max,C=(this._wmsVersion>=1.3&&this._crs===jh?[h.y,h.x,x.y,x.x]:[h.x,h.y,x.x,x.y]).join(","),z=Mo.prototype.getTileUrl.call(this,o);return z+O(this.wmsParams,z,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+C},setParams:function(o,s){return i(this.wmsParams,o),s||this.redraw(),this}});function Yx(o,s){return new Kh(o,s)}Mo.WMS=Kh,qh.wms=Yx;var Jn=gn.extend({options:{padding:.1},initialize:function(o){S(this,o),d(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),this._zoomAnimated&&me(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var o={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(o.zoomanim=this._onAnimZoom),o},_onAnimZoom:function(o){this._updateTransform(o.center,o.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(o,s){var u=this._map.getZoomScale(s,this._zoom),f=this._map.getSize().multiplyBy(.5+this.options.padding),h=this._map.project(this._center,s),x=f.multiplyBy(-u).add(h).subtract(this._map._getNewPixelOrigin(o,s));ie.any3d?Qr(this._container,x,u):it(this._container,x)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var o in this._layers)this._layers[o]._reset()},_onZoomEnd:function(){for(var o in this._layers)this._layers[o]._project()},_updatePaths:function(){for(var o in this._layers)this._layers[o]._update()},_update:function(){var o=this.options.padding,s=this._map.getSize(),u=this._map.containerPointToLayerPoint(s.multiplyBy(-o)).round();this._bounds=new P(u,u.add(s.multiplyBy(1+o*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Qh=Jn.extend({options:{tolerance:0},getEvents:function(){var o=Jn.prototype.getEvents.call(this);return o.viewprereset=this._onViewPreReset,o},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Jn.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var o=this._container=document.createElement("canvas");fe(o,"mousemove",this._onMouseMove,this),fe(o,"click dblclick mousedown mouseup contextmenu",this._onClick,this),fe(o,"mouseout",this._handleMouseOut,this),o._leaflet_disable_events=!0,this._ctx=o.getContext("2d")},_destroyContainer:function(){he(this._redrawRequest),delete this._ctx,qe(this._container),Fe(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var o;this._redrawBounds=null;for(var s in this._layers)o=this._layers[s],o._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Jn.prototype._update.call(this);var o=this._bounds,s=this._container,u=o.getSize(),f=ie.retina?2:1;it(s,o.min),s.width=f*u.x,s.height=f*u.y,s.style.width=u.x+"px",s.style.height=u.y+"px",ie.retina&&this._ctx.scale(2,2),this._ctx.translate(-o.min.x,-o.min.y),this.fire("update")}},_reset:function(){Jn.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(o){this._updateDashArray(o),this._layers[d(o)]=o;var s=o._order={layer:o,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=s),this._drawLast=s,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(o){this._requestRedraw(o)},_removePath:function(o){var s=o._order,u=s.next,f=s.prev;u?u.prev=f:this._drawLast=f,f?f.next=u:this._drawFirst=u,delete o._order,delete this._layers[d(o)],this._requestRedraw(o)},_updatePath:function(o){this._extendRedrawBounds(o),o._project(),o._update(),this._requestRedraw(o)},_updateStyle:function(o){this._updateDashArray(o),this._requestRedraw(o)},_updateDashArray:function(o){if(typeof o.options.dashArray=="string"){var s=o.options.dashArray.split(/[, ]+/),u=[],f,h;for(h=0;h<s.length;h++){if(f=Number(s[h]),isNaN(f))return;u.push(f)}o.options._dashArray=u}else o.options._dashArray=o.options.dashArray},_requestRedraw:function(o){this._map&&(this._extendRedrawBounds(o),this._redrawRequest=this._redrawRequest||le(this._redraw,this))},_extendRedrawBounds:function(o){if(o._pxBounds){var s=(o.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new P,this._redrawBounds.extend(o._pxBounds.min.subtract([s,s])),this._redrawBounds.extend(o._pxBounds.max.add([s,s]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var o=this._redrawBounds;if(o){var s=o.getSize();this._ctx.clearRect(o.min.x,o.min.y,s.x,s.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var o,s=this._redrawBounds;if(this._ctx.save(),s){var u=s.getSize();this._ctx.beginPath(),this._ctx.rect(s.min.x,s.min.y,u.x,u.y),this._ctx.clip()}this._drawing=!0;for(var f=this._drawFirst;f;f=f.next)o=f.layer,(!s||o._pxBounds&&o._pxBounds.intersects(s))&&o._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(o,s){if(this._drawing){var u,f,h,x,C=o._parts,z=C.length,R=this._ctx;if(z){for(R.beginPath(),u=0;u<z;u++){for(f=0,h=C[u].length;f<h;f++)x=C[u][f],R[f?"lineTo":"moveTo"](x.x,x.y);s&&R.closePath()}this._fillStroke(R,o)}}},_updateCircle:function(o){if(!(!this._drawing||o._empty())){var s=o._point,u=this._ctx,f=Math.max(Math.round(o._radius),1),h=(Math.max(Math.round(o._radiusY),1)||f)/f;h!==1&&(u.save(),u.scale(1,h)),u.beginPath(),u.arc(s.x,s.y/h,f,0,Math.PI*2,!1),h!==1&&u.restore(),this._fillStroke(u,o)}},_fillStroke:function(o,s){var u=s.options;u.fill&&(o.globalAlpha=u.fillOpacity,o.fillStyle=u.fillColor||u.color,o.fill(u.fillRule||"evenodd")),u.stroke&&u.weight!==0&&(o.setLineDash&&o.setLineDash(s.options&&s.options._dashArray||[]),o.globalAlpha=u.opacity,o.lineWidth=u.weight,o.strokeStyle=u.color,o.lineCap=u.lineCap,o.lineJoin=u.lineJoin,o.stroke())},_onClick:function(o){for(var s=this._map.mouseEventToLayerPoint(o),u,f,h=this._drawFirst;h;h=h.next)u=h.layer,u.options.interactive&&u._containsPoint(s)&&(!(o.type==="click"||o.type==="preclick")||!this._map._draggableMoved(u))&&(f=u);this._fireEvent(f?[f]:!1,o)},_onMouseMove:function(o){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var s=this._map.mouseEventToLayerPoint(o);this._handleMouseHover(o,s)}},_handleMouseOut:function(o){var s=this._hoveredLayer;s&&(tt(this._container,"leaflet-interactive"),this._fireEvent([s],o,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(o,s){if(!this._mouseHoverThrottled){for(var u,f,h=this._drawFirst;h;h=h.next)u=h.layer,u.options.interactive&&u._containsPoint(s)&&(f=u);f!==this._hoveredLayer&&(this._handleMouseOut(o),f&&(me(this._container,"leaflet-interactive"),this._fireEvent([f],o,"mouseover"),this._hoveredLayer=f)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,o),this._mouseHoverThrottled=!0,setTimeout(l(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(o,s,u){this._map._fireDOMEvent(s,u||s.type,o)},_bringToFront:function(o){var s=o._order;if(s){var u=s.next,f=s.prev;if(u)u.prev=f;else return;f?f.next=u:u&&(this._drawFirst=u),s.prev=this._drawLast,this._drawLast.next=s,s.next=null,this._drawLast=s,this._requestRedraw(o)}},_bringToBack:function(o){var s=o._order;if(s){var u=s.next,f=s.prev;if(f)f.next=u;else return;u?u.prev=f:f&&(this._drawLast=f),s.prev=null,s.next=this._drawFirst,this._drawFirst.prev=s,this._drawFirst=s,this._requestRedraw(o)}}});function Gh(o){return ie.canvas?new Qh(o):null}var Fi=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(o){return document.createElement("<lvml:"+o+' class="lvml">')}}catch{}return function(o){return document.createElement("<"+o+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),Jx={_initContainer:function(){this._container=Ce("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(Jn.prototype._update.call(this),this.fire("update"))},_initPath:function(o){var s=o._container=Fi("shape");me(s,"leaflet-vml-shape "+(this.options.className||"")),s.coordsize="1 1",o._path=Fi("path"),s.appendChild(o._path),this._updateStyle(o),this._layers[d(o)]=o},_addPath:function(o){var s=o._container;this._container.appendChild(s),o.options.interactive&&o.addInteractiveTarget(s)},_removePath:function(o){var s=o._container;qe(s),o.removeInteractiveTarget(s),delete this._layers[d(o)]},_updateStyle:function(o){var s=o._stroke,u=o._fill,f=o.options,h=o._container;h.stroked=!!f.stroke,h.filled=!!f.fill,f.stroke?(s||(s=o._stroke=Fi("stroke")),h.appendChild(s),s.weight=f.weight+"px",s.color=f.color,s.opacity=f.opacity,f.dashArray?s.dashStyle=k(f.dashArray)?f.dashArray.join(" "):f.dashArray.replace(/( *, *)/g," "):s.dashStyle="",s.endcap=f.lineCap.replace("butt","flat"),s.joinstyle=f.lineJoin):s&&(h.removeChild(s),o._stroke=null),f.fill?(u||(u=o._fill=Fi("fill")),h.appendChild(u),u.color=f.fillColor||f.color,u.opacity=f.fillOpacity):u&&(h.removeChild(u),o._fill=null)},_updateCircle:function(o){var s=o._point.round(),u=Math.round(o._radius),f=Math.round(o._radiusY||u);this._setPath(o,o._empty()?"M0 0":"AL "+s.x+","+s.y+" "+u+","+f+" 0,"+65535*360)},_setPath:function(o,s){o._path.v=s},_bringToFront:function(o){Lo(o._container)},_bringToBack:function(o){Bo(o._container)}},gs=ie.vml?Fi:Jt,Ai=Jn.extend({_initContainer:function(){this._container=gs("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=gs("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){qe(this._container),Fe(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Jn.prototype._update.call(this);var o=this._bounds,s=o.getSize(),u=this._container;(!this._svgSize||!this._svgSize.equals(s))&&(this._svgSize=s,u.setAttribute("width",s.x),u.setAttribute("height",s.y)),it(u,o.min),u.setAttribute("viewBox",[o.min.x,o.min.y,s.x,s.y].join(" ")),this.fire("update")}},_initPath:function(o){var s=o._path=gs("path");o.options.className&&me(s,o.options.className),o.options.interactive&&me(s,"leaflet-interactive"),this._updateStyle(o),this._layers[d(o)]=o},_addPath:function(o){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(o._path),o.addInteractiveTarget(o._path)},_removePath:function(o){qe(o._path),o.removeInteractiveTarget(o._path),delete this._layers[d(o)]},_updatePath:function(o){o._project(),o._update()},_updateStyle:function(o){var s=o._path,u=o.options;s&&(u.stroke?(s.setAttribute("stroke",u.color),s.setAttribute("stroke-opacity",u.opacity),s.setAttribute("stroke-width",u.weight),s.setAttribute("stroke-linecap",u.lineCap),s.setAttribute("stroke-linejoin",u.lineJoin),u.dashArray?s.setAttribute("stroke-dasharray",u.dashArray):s.removeAttribute("stroke-dasharray"),u.dashOffset?s.setAttribute("stroke-dashoffset",u.dashOffset):s.removeAttribute("stroke-dashoffset")):s.setAttribute("stroke","none"),u.fill?(s.setAttribute("fill",u.fillColor||u.color),s.setAttribute("fill-opacity",u.fillOpacity),s.setAttribute("fill-rule",u.fillRule||"evenodd")):s.setAttribute("fill","none"))},_updatePoly:function(o,s){this._setPath(o,Mt(o._parts,s))},_updateCircle:function(o){var s=o._point,u=Math.max(Math.round(o._radius),1),f=Math.max(Math.round(o._radiusY),1)||u,h="a"+u+","+f+" 0 1,0 ",x=o._empty()?"M0 0":"M"+(s.x-u)+","+s.y+h+u*2+",0 "+h+-u*2+",0 ";this._setPath(o,x)},_setPath:function(o,s){o._path.setAttribute("d",s)},_bringToFront:function(o){Lo(o._path)},_bringToBack:function(o){Bo(o._path)}});ie.vml&&Ai.include(Jx);function Xh(o){return ie.svg||ie.vml?new Ai(o):null}Se.include({getRenderer:function(o){var s=o.options.renderer||this._getPaneRenderer(o.options.pane)||this.options.renderer||this._renderer;return s||(s=this._renderer=this._createRenderer()),this.hasLayer(s)||this.addLayer(s),s},_getPaneRenderer:function(o){if(o==="overlayPane"||o===void 0)return!1;var s=this._paneRenderers[o];return s===void 0&&(s=this._createRenderer({pane:o}),this._paneRenderers[o]=s),s},_createRenderer:function(o){return this.options.preferCanvas&&Gh(o)||Xh(o)}});var Yh=No.extend({initialize:function(o,s){No.prototype.initialize.call(this,this._boundsToLatLngs(o),s)},setBounds:function(o){return this.setLatLngs(this._boundsToLatLngs(o))},_boundsToLatLngs:function(o){return o=A(o),[o.getSouthWest(),o.getNorthWest(),o.getNorthEast(),o.getSouthEast()]}});function e1(o,s){return new Yh(o,s)}Ai.create=gs,Ai.pointsToPath=Mt,Yn.geometryToLayer=ds,Yn.coordsToLatLng=uc,Yn.coordsToLatLngs=fs,Yn.latLngToCoords=cc,Yn.latLngsToCoords=ps,Yn.getFeature=Do,Yn.asFeature=hs,Se.mergeOptions({boxZoom:!0});var Jh=Dn.extend({initialize:function(o){this._map=o,this._container=o._container,this._pane=o._panes.overlayPane,this._resetStateTimeout=0,o.on("unload",this._destroy,this)},addHooks:function(){fe(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){Fe(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){qe(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(o){if(!o.shiftKey||o.which!==1&&o.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Ti(),qu(),this._startPoint=this._map.mouseEventToContainerPoint(o),fe(document,{contextmenu:Yr,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(o){this._moved||(this._moved=!0,this._box=Ce("div","leaflet-zoom-box",this._container),me(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(o);var s=new P(this._point,this._startPoint),u=s.getSize();it(this._box,s.min),this._box.style.width=u.x+"px",this._box.style.height=u.y+"px"},_finish:function(){this._moved&&(qe(this._box),tt(this._container,"leaflet-crosshair")),Li(),Ku(),Fe(document,{contextmenu:Yr,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(o){if(!(o.which!==1&&o.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(l(this._resetState,this),0);var s=new T(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(s).fire("boxzoomend",{boxZoomBounds:s})}},_onKeyDown:function(o){o.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});Se.addInitHook("addHandler","boxZoom",Jh),Se.mergeOptions({doubleClickZoom:!0});var em=Dn.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(o){var s=this._map,u=s.getZoom(),f=s.options.zoomDelta,h=o.originalEvent.shiftKey?u-f:u+f;s.options.doubleClickZoom==="center"?s.setZoom(h):s.setZoomAround(o.containerPoint,h)}});Se.addInitHook("addHandler","doubleClickZoom",em),Se.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var tm=Dn.extend({addHooks:function(){if(!this._draggable){var o=this._map;this._draggable=new mr(o._mapPane,o._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),o.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),o.on("zoomend",this._onZoomEnd,this),o.whenReady(this._onZoomEnd,this))}me(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){tt(this._map._container,"leaflet-grab"),tt(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var o=this._map;if(o._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var s=A(this._map.options.maxBounds);this._offsetLimit=B(this._map.latLngToContainerPoint(s.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(s.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;o.fire("movestart").fire("dragstart"),o.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(o){if(this._map.options.inertia){var s=this._lastTime=+new Date,u=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(u),this._times.push(s),this._prunePositions(s)}this._map.fire("move",o).fire("drag",o)},_prunePositions:function(o){for(;this._positions.length>1&&o-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var o=this._map.getSize().divideBy(2),s=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=s.subtract(o).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(o,s){return o-(o-s)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var o=this._draggable._newPos.subtract(this._draggable._startPos),s=this._offsetLimit;o.x<s.min.x&&(o.x=this._viscousLimit(o.x,s.min.x)),o.y<s.min.y&&(o.y=this._viscousLimit(o.y,s.min.y)),o.x>s.max.x&&(o.x=this._viscousLimit(o.x,s.max.x)),o.y>s.max.y&&(o.y=this._viscousLimit(o.y,s.max.y)),this._draggable._newPos=this._draggable._startPos.add(o)}},_onPreDragWrap:function(){var o=this._worldWidth,s=Math.round(o/2),u=this._initialWorldOffset,f=this._draggable._newPos.x,h=(f-s+u)%o+s-u,x=(f+s+u)%o-s-u,C=Math.abs(h+u)<Math.abs(x+u)?h:x;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=C},_onDragEnd:function(o){var s=this._map,u=s.options,f=!u.inertia||o.noInertia||this._times.length<2;if(s.fire("dragend",o),f)s.fire("moveend");else{this._prunePositions(+new Date);var h=this._lastPos.subtract(this._positions[0]),x=(this._lastTime-this._times[0])/1e3,C=u.easeLinearity,z=h.multiplyBy(C/x),R=z.distanceTo([0,0]),U=Math.min(u.inertiaMaxSpeed,R),J=z.multiplyBy(U/R),de=U/(u.inertiaDeceleration*C),pe=J.multiplyBy(-de/2).round();!pe.x&&!pe.y?s.fire("moveend"):(pe=s._limitOffset(pe,s.options.maxBounds),le(function(){s.panBy(pe,{duration:de,easeLinearity:C,noMoveStart:!0,animate:!0})}))}}});Se.addInitHook("addHandler","dragging",tm),Se.mergeOptions({keyboard:!0,keyboardPanDelta:80});var nm=Dn.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(o){this._map=o,this._setPanDelta(o.options.keyboardPanDelta),this._setZoomDelta(o.options.zoomDelta)},addHooks:function(){var o=this._map._container;o.tabIndex<=0&&(o.tabIndex="0"),fe(o,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),Fe(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var o=document.body,s=document.documentElement,u=o.scrollTop||s.scrollTop,f=o.scrollLeft||s.scrollLeft;this._map._container.focus(),window.scrollTo(f,u)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(o){var s=this._panKeys={},u=this.keyCodes,f,h;for(f=0,h=u.left.length;f<h;f++)s[u.left[f]]=[-1*o,0];for(f=0,h=u.right.length;f<h;f++)s[u.right[f]]=[o,0];for(f=0,h=u.down.length;f<h;f++)s[u.down[f]]=[0,o];for(f=0,h=u.up.length;f<h;f++)s[u.up[f]]=[0,-1*o]},_setZoomDelta:function(o){var s=this._zoomKeys={},u=this.keyCodes,f,h;for(f=0,h=u.zoomIn.length;f<h;f++)s[u.zoomIn[f]]=o;for(f=0,h=u.zoomOut.length;f<h;f++)s[u.zoomOut[f]]=-o},_addHooks:function(){fe(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){Fe(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(o){if(!(o.altKey||o.ctrlKey||o.metaKey)){var s=o.keyCode,u=this._map,f;if(s in this._panKeys)(!u._panAnim||!u._panAnim._inProgress)&&(f=this._panKeys[s],o.shiftKey&&(f=H(f).multiplyBy(3)),u.panBy(f),u.options.maxBounds&&u.panInsideBounds(u.options.maxBounds));else if(s in this._zoomKeys)u.setZoom(u.getZoom()+(o.shiftKey?3:1)*this._zoomKeys[s]);else if(s===27&&u._popup&&u._popup.options.closeOnEscapeKey)u.closePopup();else return;Yr(o)}}});Se.addInitHook("addHandler","keyboard",nm),Se.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var rm=Dn.extend({addHooks:function(){fe(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){Fe(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(o){var s=Eh(o),u=this._map.options.wheelDebounceTime;this._delta+=s,this._lastMousePos=this._map.mouseEventToContainerPoint(o),this._startTime||(this._startTime=+new Date);var f=Math.max(u-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(l(this._performZoom,this),f),Yr(o)},_performZoom:function(){var o=this._map,s=o.getZoom(),u=this._map.options.zoomSnap||0;o._stop();var f=this._delta/(this._map.options.wheelPxPerZoomLevel*4),h=4*Math.log(2/(1+Math.exp(-Math.abs(f))))/Math.LN2,x=u?Math.ceil(h/u)*u:h,C=o._limitZoom(s+(this._delta>0?x:-x))-s;this._delta=0,this._startTime=null,C&&(o.options.scrollWheelZoom==="center"?o.setZoom(s+C):o.setZoomAround(this._lastMousePos,s+C))}});Se.addInitHook("addHandler","scrollWheelZoom",rm);var t1=600;Se.mergeOptions({tapHold:ie.touchNative&&ie.safari&&ie.mobile,tapTolerance:15});var om=Dn.extend({addHooks:function(){fe(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){Fe(this._map._container,"touchstart",this._onDown,this)},_onDown:function(o){if(clearTimeout(this._holdTimeout),o.touches.length===1){var s=o.touches[0];this._startPos=this._newPos=new I(s.clientX,s.clientY),this._holdTimeout=setTimeout(l(function(){this._cancel(),this._isTapValid()&&(fe(document,"touchend",mt),fe(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",s))},this),t1),fe(document,"touchend touchcancel contextmenu",this._cancel,this),fe(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function o(){Fe(document,"touchend",mt),Fe(document,"touchend touchcancel",o)},_cancel:function(){clearTimeout(this._holdTimeout),Fe(document,"touchend touchcancel contextmenu",this._cancel,this),Fe(document,"touchmove",this._onMove,this)},_onMove:function(o){var s=o.touches[0];this._newPos=new I(s.clientX,s.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(o,s){var u=new MouseEvent(o,{bubbles:!0,cancelable:!0,view:window,screenX:s.screenX,screenY:s.screenY,clientX:s.clientX,clientY:s.clientY});u._simulated=!0,s.target.dispatchEvent(u)}});Se.addInitHook("addHandler","tapHold",om),Se.mergeOptions({touchZoom:ie.touch,bounceAtZoomLimits:!0});var im=Dn.extend({addHooks:function(){me(this._map._container,"leaflet-touch-zoom"),fe(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){tt(this._map._container,"leaflet-touch-zoom"),Fe(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(o){var s=this._map;if(!(!o.touches||o.touches.length!==2||s._animatingZoom||this._zooming)){var u=s.mouseEventToContainerPoint(o.touches[0]),f=s.mouseEventToContainerPoint(o.touches[1]);this._centerPoint=s.getSize()._divideBy(2),this._startLatLng=s.containerPointToLatLng(this._centerPoint),s.options.touchZoom!=="center"&&(this._pinchStartLatLng=s.containerPointToLatLng(u.add(f)._divideBy(2))),this._startDist=u.distanceTo(f),this._startZoom=s.getZoom(),this._moved=!1,this._zooming=!0,s._stop(),fe(document,"touchmove",this._onTouchMove,this),fe(document,"touchend touchcancel",this._onTouchEnd,this),mt(o)}},_onTouchMove:function(o){if(!(!o.touches||o.touches.length!==2||!this._zooming)){var s=this._map,u=s.mouseEventToContainerPoint(o.touches[0]),f=s.mouseEventToContainerPoint(o.touches[1]),h=u.distanceTo(f)/this._startDist;if(this._zoom=s.getScaleZoom(h,this._startZoom),!s.options.bounceAtZoomLimits&&(this._zoom<s.getMinZoom()&&h<1||this._zoom>s.getMaxZoom()&&h>1)&&(this._zoom=s._limitZoom(this._zoom)),s.options.touchZoom==="center"){if(this._center=this._startLatLng,h===1)return}else{var x=u._add(f)._divideBy(2)._subtract(this._centerPoint);if(h===1&&x.x===0&&x.y===0)return;this._center=s.unproject(s.project(this._pinchStartLatLng,this._zoom).subtract(x),this._zoom)}this._moved||(s._moveStart(!0,!1),this._moved=!0),he(this._animRequest);var C=l(s._move,s,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=le(C,this,!0),mt(o)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,he(this._animRequest),Fe(document,"touchmove",this._onTouchMove,this),Fe(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});Se.addInitHook("addHandler","touchZoom",im),Se.BoxZoom=Jh,Se.DoubleClickZoom=em,Se.Drag=tm,Se.Keyboard=nm,Se.ScrollWheelZoom=rm,Se.TapHold=om,Se.TouchZoom=im,n.Bounds=P,n.Browser=ie,n.CRS=re,n.Canvas=Qh,n.Circle=lc,n.CircleMarker=cs,n.Class=ue,n.Control=vn,n.DivIcon=Vh,n.DivOverlay=Mn,n.DomEvent=yx,n.DomUtil=vx,n.Draggable=mr,n.Evented=ce,n.FeatureGroup=eo,n.GeoJSON=Yn,n.GridLayer=Mi,n.Handler=Dn,n.Icon=Io,n.ImageOverlay=ms,n.LatLng=Q,n.LatLngBounds=T,n.Layer=gn,n.LayerGroup=Ro,n.LineUtil=Lx,n.Map=Se,n.Marker=us,n.Mixin=Px,n.Path=_r,n.Point=I,n.PolyUtil=Bx,n.Polygon=No,n.Polyline=Xn,n.Popup=_s,n.PosAnimation=Oh,n.Projection=Rx,n.Rectangle=Yh,n.Renderer=Jn,n.SVG=Ai,n.SVGOverlay=Zh,n.TileLayer=Mo,n.Tooltip=vs,n.Transformation=De,n.Util=Ue,n.VideoOverlay=Wh,n.bind=l,n.bounds=B,n.canvas=Gh,n.circle=$x,n.circleMarker=jx,n.control=Ii,n.divIcon=Gx,n.extend=i,n.featureGroup=Mx,n.geoJSON=Hh,n.geoJson=Wx,n.gridLayer=Xx,n.icon=Fx,n.imageOverlay=Zx,n.latLng=Y,n.latLngBounds=A,n.layerGroup=Dx,n.map=bx,n.marker=Ax,n.point=H,n.polygon=Hx,n.polyline=Ux,n.popup=Kx,n.rectangle=e1,n.setOptions=S,n.stamp=d,n.svg=Xh,n.svgOverlay=qx,n.tileLayer=qh,n.tooltip=Qx,n.transformation=Me,n.version=r,n.videoOverlay=Vx;var n1=window.L;n.noConflict=function(){return window.L=n1,this},window.L=n})})($B,mf);var Kc,_f={};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/Kc={get exports(){return _f},set exports(e){_f=e}},function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var a=typeof i;if(a==="string"||a==="number")n.push(i);else if(Array.isArray(i)){if(i.length){var l=t.apply(null,i);l&&n.push(l)}}else if(a==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){n.push(i.toString());continue}for(var c in i)e.call(i,c)&&i[c]&&n.push(c)}}}return n.join(" ")}Kc.exports?(t.default=t,Kc.exports=t):window.classNames=t}();var un=_f;const UB=/(\d*\.?\d+)rem(?=\W|$)/gim,HB=e=>typeof e=="string"?e.replace(UB,(t,n)=>`${((i,a=2)=>{const l=10**a;return Math.round((i+Number.EPSILON)*l)/l})(1.6*n)}rem`):e,Qp={get:(e,t)=>{if(!(t in e))return;const n=e[t];return typeof n=="object"?new Proxy(n,Qp):HB(n)}},vf=new Proxy(vb,Qp);new Proxy(Kp,Qp);var gv,yv,bv;function gf(){return gf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gf.apply(this,arguments)}var xv,wv,Sv,WB=function(e){return N.createElement("svg",gf({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},e),gv||(gv=N.createElement("path",{d:"M18.066 7.387a1.32 1.32 0 1 1 0 2.64 1.32 1.32 0 0 1 0-2.64Z"})),yv||(yv=N.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 2.82C9.616 2.82 2.82 9.616 2.82 18S9.616 33.18 18 33.18 33.18 26.384 33.18 18 26.384 2.82 18 2.82ZM1.5 18C1.5 8.887 8.887 1.5 18 1.5S34.5 8.887 34.5 18 27.113 34.5 18 34.5 1.5 27.113 1.5 18Z"})),bv||(bv=N.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.974 15.307h-3.3v-1.32h4.62l-.009 10.481h-1.311v-9.16ZM23.293 26.026h-9.24v-1.558h9.24v1.558Z"})))};function yf(){return yf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yf.apply(this,arguments)}var ZB=function(e){return N.createElement("svg",yf({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},e),xv||(xv=N.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),wv||(wv=N.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),Sv||(Sv=N.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))};function be(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var zr,xn={panel:"Panel-module_panel__4VWNp","panel--mobile-layout":"Panel-module_panel--mobile-layout__OII-B",panel__pointer:"Panel-module_panel__pointer__BETJ8","panel__pointer-position":"Panel-module_panel__pointer-position__Zer8q","panel__content-wrapper--info":"Panel-module_panel__content-wrapper--info__lrfgo","panel__pointer--info":"Panel-module_panel__pointer--info__5OaTN","panel__content-wrapper--success":"Panel-module_panel__content-wrapper--success__k0JQD","panel__pointer--success":"Panel-module_panel__pointer--success__O-X6n","panel__content-wrapper--warning":"Panel-module_panel__content-wrapper--warning__vYY8E","panel__pointer--warning":"Panel-module_panel__pointer--warning__l5Zf8","panel__content-wrapper--error":"Panel-module_panel__content-wrapper--error__3LhKe","panel__pointer--error":"Panel-module_panel__pointer--error__4MGTF","panel__content-wrapper":"Panel-module_panel__content-wrapper__oiWk8","panel__icon-wrapper":"Panel-module_panel__icon-wrapper__631EQ",panel__content:"Panel-module_panel__content__U3cAc",panel__header:"Panel-module_panel__header__UJuRe",panel__body:"Panel-module_panel__body__gRd1x"};be(`/* breakpoints-xs */
@media only screen and (min-width: 0) {
  .Panel-module_panel__4VWNp {
    --panel-y-padding: var(--component-panel-space-padding-y-xs);
    --panel-x-padding: var(--component-panel-space-padding-x-xs);
    --panel-content-gap: var(--component-panel-space-gap-xs);
    --panel-pointer-width: calc(var(--component-panel-size-icon-xs) / 2);
    --panel-pointer-height: calc(var(--panel-pointer-width) / 2);
    --panel-body-font_size: var(--component-panel-font_size-body-breakpoint_sm);
    --panel-header-font_size: var(
      --component-panel-font_size-header-breakpoint_sm
    );
  }
}

/* breakpoints-sm */
@media only screen and (min-width: 540px) {
  .Panel-module_panel__4VWNp:not(.Panel-module_panel--mobile-layout__OII-B) {
    --panel-y-padding: var(--component-panel-space-padding-y-md);
    --panel-x-padding: var(--component-panel-space-padding-x-md);
    --panel-content-gap: var(--component-panel-space-gap-md);
    --panel-pointer-width: calc(var(--component-panel-size-icon-md) / 2);
    --panel-pointer-height: calc(var(--panel-pointer-width) / 2);
    --panel-body-font_size: var(--component-panel-font_size-body-breakpoint_sm);
    --panel-header-font_size: var(
      --component-panel-font_size-header-breakpoint_sm
    );
  }
}

/* breakpoints-md */
@media only screen and (min-width: 768px) {
  .Panel-module_panel__4VWNp:not(.Panel-module_panel--mobile-layout__OII-B) {
    --panel-body-font_size: var(--component-panel-font_size-body-breakpoint_md);
    --panel-header-font_size: var(
      --component-panel-font_size-header-breakpoint_md
    );
  }
}

/* breakpoints-lg */
@media only screen and (min-width: 960px) {
  .Panel-module_panel__4VWNp:not(.Panel-module_panel--mobile-layout__OII-B) {
    --panel-body-font_size: var(--component-panel-font_size-body-breakpoint_md);
    --panel-header-font_size: var(
      --component-panel-font_size-header-breakpoint_lg
    );
  }
}

/* breakpoints-xl */
@media only screen and (min-width: 1200px) {
  .Panel-module_panel__4VWNp:not(.Panel-module_panel--mobile-layout__OII-B) {
    --panel-body-font_size: var(--component-panel-font_size-body-breakpoint_md);
    --panel-header-font_size: var(
      --component-panel-font_size-header-breakpoint_lg
    );
  }
}

/* print style */
@media print {
  .Panel-module_panel__4VWNp {
    --panel-y-padding: var(--component-panel-space-padding-y-xs);
    --panel-x-padding: var(--component-panel-space-padding-x-xs);
    --panel-content-gap: var(--component-panel-space-gap-xs);
    --panel-pointer-width: calc(var(--component-panel-size-icon-xs) / 2);
    --panel-pointer-height: calc(var(--panel-pointer-width) / 2);
    --panel-body-font_size: var(--component-panel-font_size-body-breakpoint_sm);
    --panel-header-font_size: var(
      --component-panel-font_size-header-breakpoint_sm
    );
  }
}

.Panel-module_panel__4VWNp {
  width: 100%;
}

.Panel-module_panel__pointer__BETJ8 {
  width: var(--panel-pointer-width);
  height: var(--panel-pointer-height);
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
}

.Panel-module_panel__pointer-position__Zer8q {
  top: 1px;
  position: relative;
  left: calc(var(--panel-x-padding) + (var(--panel-pointer-width) / 2));
}

.Panel-module_panel__content-wrapper--info__lrfgo,
.Panel-module_panel__pointer--info__5OaTN {
  background-color: var(--component-panel-color-background-default);
}

.Panel-module_panel__content-wrapper--success__k0JQD,
.Panel-module_panel__pointer--success__O-X6n {
  background-color: var(--component-panel-color-background-success);
}

.Panel-module_panel__content-wrapper--warning__vYY8E,
.Panel-module_panel__pointer--warning__l5Zf8 {
  background-color: var(--component-panel-color-background-warning);
}

.Panel-module_panel__content-wrapper--error__3LhKe,
.Panel-module_panel__pointer--error__4MGTF {
  background-color: var(--colors-red-300);
}

.Panel-module_panel__content-wrapper__oiWk8 {
  display: flex;
  gap: var(--panel-content-gap);
  padding: var(--panel-y-padding) var(--panel-x-padding);
}

.Panel-module_panel__icon-wrapper__631EQ {
  display: flex;
  flex: none;
}

.Panel-module_panel__content__U3cAc {
  display: flex;
  flex-direction: column;
  gap: var(--component-panel-space-text_group-gap-xs);
}

.Panel-module_panel__header__UJuRe {
  margin: 0;
  font-size: var(--panel-header-font_size);
  font-weight: var(--component-panel-font_weight-heading);
}

.Panel-module_panel__body__gRd1x {
  font-size: var(--panel-body-font_size);
}
`),function(e){e.Success="success",e.Info="info",e.Warning="warning",e.Error="error"}(zr||(zr={}));const VB=({size:e,variant:t})=>{switch(t){case zr.Info:case zr.Error:case zr.Warning:return $.createElement(WB,{style:{width:e,height:e},"data-testid":"panel-icon-info"});case zr.Success:return $.createElement(ZB,{style:{width:e,height:e},"data-testid":"panel-icon-success"})}},qB=({forceMobileLayout:e})=>{const t=function(n){const r=c=>{var d;return(d=window?.matchMedia(c).matches)!==null&&d!==void 0&&d},[i,a]=N.useState(r(n)),l=()=>{a(r(n))};return N.useEffect(()=>{const c=window.matchMedia(n);return l(),c.addEventListener("change",l),()=>c.removeEventListener("change",l)},[n]),i}(`(max-width: ${vf.BreakpointsSm})`);return!!e||t},KB=({children:e})=>$.createElement("div",{className:un(xn["panel__pointer-position"])},e),QB=({renderIcon:e=VB,title:t,children:n,variant:r=zr.Info,showPointer:i=!1,showIcon:a=!0,forceMobileLayout:l=!1,renderArrow:c=KB})=>{const d=qB({forceMobileLayout:l}),p=d?vf.ComponentPanelSizeIconXs:vf.ComponentPanelSizeIconMd;return $.createElement("div",{className:un(xn.panel,{[xn["panel--mobile-layout"]]:d})},i&&c({children:$.createElement("div",{"data-testid":"panel-pointer",className:un(xn.panel__pointer,xn[`panel__pointer--${r}`])})}),$.createElement("div",{"data-testid":"panel-content-wrapper",className:un(xn["panel__content-wrapper"],xn[`panel__content-wrapper--${r}`])},a&&$.createElement("div",{"data-testid":"panel-icon-wrapper",className:xn["panel__icon-wrapper"]},e({size:p,variant:r})),$.createElement("div",{className:xn.panel__content},t&&$.createElement("h2",{className:xn.panel__header},t),$.createElement("div",{className:xn.panel__body},n))))};be(`.PopoverPanel-module_popover-panel__tGILa {
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
}

.PopoverPanel-module_popover-panel__arrow__Cmcr3 {
  transform: scale(-1);
  margin-top: -1px;
}
`);be(`.CircularProgress-module_svg__TUYPH {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
  overflow: visible;
}

.CircularProgress-module_circleTransition__D9rut {
  transition: stroke-dashoffset 1s ease-in-out;
}

.CircularProgress-module_container__gVi97 {
  position: relative;
}

.CircularProgress-module_label__OgO-f {
  all: initial;
  font-family: inherit;
  font-size: var(--font_size-300);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
`);be(`/**
 * Do not edit directly
 * Generated on Tue, 20 Dec 2022 08:09:03 GMT
 */

:root {
  --token-set-order-0: altinn;
  --token-set-order-1: FDK;
  --component-icon-size-xs: 2.4rem;
  --component-icon-size-sm: 3rem;
  --component-icon-size-md: 3.6rem;
  --component-icon-size-lg: 4.8rem;
  --component-icon-size-xl: 6rem;
  --component-panel-color-background-default: #e3f7ff;
  --component-panel-color-background-success: #d4f9e4;
  --component-panel-color-background-warning: #fbf6bd;
  --component-panel-color-text-default: #000000;
  --component-panel-color-arrow-default: #e3f7ff;
  --component-panel-color-arrow-success: #d4f9e4;
  --component-panel-color-arrow-warning: #fbf6bd;
  --component-panel-font_size-header-breakpoint_sm: 2.4rem;
  --component-panel-font_size-header-breakpoint_md: 2.8rem;
  --component-panel-font_size-header-breakpoint_lg: 3.6rem;
  --component-panel-font_size-body-breakpoint_sm: 1.6rem;
  --component-panel-font_size-body-breakpoint_md: 1.8rem;
  --component-panel-space-padding-x-xs: 2.4rem;
  --component-panel-space-padding-x-md: 9.6rem;
  --component-panel-space-padding-y-xs: 2.4rem;
  --component-panel-space-padding-y-md: 3.6rem;
  --component-panel-space-gap-xs: 1.2rem;
  --component-panel-space-gap-md: 1.2rem;
  --component-panel-space-text_group-gap-xs: 0.6rem;
  --component-panel-space-arrow_left-md: 10.7rem;
  --component-panel-space-arrow_left-xs: 6.4rem;
  --component-panel-size-icon-xs: 3.6rem;
  --component-panel-size-icon-md: 6rem;
  --component-panel-typography-default-font-family: Altinn-DIN;
  --component-panel-typography-default-font-weight: Regular;
  --component-panel-typography-default-line-height: 1.5;
  --component-panel-typography-default-font-size: 1.6rem;
  --component-panel-typography-default-letter-spacing: 3%;
  --component-panel-typography-default-paragraph-spacing: 0;
  --component-panel-typography-default-text-decoration: none;
  --component-panel-typography-default-text-case: none;
  --component-panel-font_weight-heading: bold;
  --component-legend-font_weight-default: medium;
  --component-label-font_weight-default: medium;
  --component-expandable_row-color-border_top-default: #bcc7cc;
  --component-expandable_row-color-border_bottom-default: #bcc7cc;
  --component-expandable_row-space-padding-x-xs: 1.2rem;
  --component-expandable_row-space-padding-x-md: 2.4rem;
  --component-expandable_row-space-padding-top-xs: 0.4rem;
  --component-expandable_row-space-padding-bottom-xs: 0.8rem;
  --component-expandable_row-space-gap-title-xs: 0.75;
  --component-expandable_row-space-gap-title-md: 2.4rem;
  --component-expandable_row-size-icon-xs: 2.4rem;
  --component-expandable_row-font_weight-header: medium;
  --component-expandable_row-font_size-header-breakpoint_sm: 1.6rem;
  --component-expandable_row-font_size-header-breakpoint_md: 1.8rem;
  --component-expandable_row-border_width-default: 1px;
  --component-checkbox-space-gap-xsmall: 0.8rem;
  --component-checkbox-space-gap-small: 1.2rem;
  --component-checkbox-size-width-xsmall: 1.8rem;
  --component-checkbox-size-width-small: 2.4rem;
  --component-checkbox-size-height-xsmall: 1.8rem;
  --component-checkbox-size-height-small: 2.4rem;
  --component-checkbox-color-border-default: #022f51;
  --component-checkbox-color-border-hover: #0062ba;
  --component-checkbox-color-border-checked: #0062ba;
  --component-checkbox-color-border-disabled: #022f514d;
  --component-checkbox-color-border-error: #D5203B;
  --component-checkbox-color-background-default: #ffffff;
  --component-checkbox-color-background-hover: #e3f7ff;
  --component-checkbox-color-background-checked: #0062ba;
  --component-checkbox-color-background-error: #ffffff;
  --component-checkbox-color-text-default: #000000;
  --component-checkbox-color-text-hover: #004C8F;
  --component-checkbox-color-text-checked: #ffffff;
  --component-checkbox-color-text-disabled: #0000004d;
  --component-checkbox-color-text-error: #000000;
  --component-checkbox-border_width-xsmall: 2px;
  --component-checkbox-border_width-small: 2px;
  --component-checkbox-font_size-xs: 1.4rem;
  --component-checkbox-font_size-sm: 1.6rem;
  --component-fieldset-space-gap-y-xsmall: 1.2rem;
  --component-fieldset-space-gap-y-small: 1.8rem;
  --component-fieldset-space-gap-y-medium: 2.4rem;
  --component-fieldset-space-gap-y-large: 2.4rem;
  --component-field_description-color-text-default: #000000;
  --component-field_description-space-top-small: 0.8rem;
  --component-field_description-space-top-xsmall: 0.6rem;
  --component-textarea-border_width-normal: 2px;
  --component-textarea-color-border-default: #022f51;
  --component-textarea-color-border-hover: #0062ba;
  --component-textarea-color-border-disabled: #efefef;
  --component-textarea-color-border-read-only: #bcc7cc;
  --component-textarea-color-background-default: #ffffff;
  --component-textarea-color-background-hover: #ffffff;
  --component-textarea-color-background-focus: #ffffff;
  --component-textarea-color-background-read-only: #f5f5f5;
  --component-textarea-color-text-disabled: #bcc7cc;
  --component-textarea-color-text-default: #000000;
  --component-textarea-space-padding-x: 1.2rem;
  --component-textarea-space-padding-y: 0.6rem;
  --component-textarea-size-min_height-xsmall: 10rem;
  --component-textarea-size-min_height-small: 15rem;
  --component-textarea-size-min_height-medium: 20rem;
  --component-textarea-size-min_height-large: 30rem;
  --component-textarea-size-min_height-xlarge: 40rem;
  --component-textarea-error-color-border-default: #D5203B;
  --component-textarea-error-color-border-hover: #8e1527;
  --component-textarea-font_size-sm: 1.6rem;
  --component-checkbox-group-space-gap-x-xsmall: 2.4rem;
  --component-checkbox-group-space-gap-x-small: 3.6rem;
  --component-checkbox-group-space-gap-y-xsmall: 0.9rem;
  --component-checkbox-group-space-gap-y-small: 1.8rem;
  --component-toggle_button-font_size-sm: 1.6rem;
  --component-toggle_button-size-min_width-sm: 100%;
  --component-toggle_button-size-min_width-md: auto;
  --component-toggle_button-border_width-inactive: 2px;
  --component-toggle_button-color-background-active: #0062ba;
  --component-toggle_button-color-background-inactive: #ffffff;
  --component-toggle_button-color-text-active: #ffffff;
  --component-toggle_button-color-text-inactive: #000000;
  --component-toggle_button-color-border-inactive: #0062ba;
  --component-toggle_button-space-padding-x: 2.4rem;
  --component-toggle_button-space-padding-top: 0.2rem;
  --component-toggle_button-space-padding-bottom: 0.4rem;
  --component-icon_button-color-border-default: #022f51;
  --component-icon_button-color-border-disabled: #022f514d;
  --component-icon_button-color-outline-focus: #022f51;
  --component-icon_button-color-icon-default: #022f51;
  --component-icon_button-color-icon-hover: #ffffff;
  --component-icon_button-color-icon-disabled: #022f514d;
  --component-icon_button-color-background-default: #ffffff;
  --component-icon_button-color-background-hover: #022f51;
  --component-icon_button-size-large-circle: 3.6rem;
  --component-icon_button-size-large-icon: 2.24rem;
  --component-icon_button-size-medium-circle: 2.4rem;
  --component-icon_button-size-medium-icon: 1.4rem;
  --component-icon_button-size-small-circle: 1.8rem;
  --component-icon_button-size-small-icon: 1.1rem;
  --component-icon_button-border_width-default: 1px;
  --component-button-filled-primary-color-background-default: #0062ba;
  --component-button-filled-primary-color-background-hover: #004C8F;
  --component-button-filled-primary-color-background-pressed: #022f51;
  --component-button-filled-primary-color-background-disabled: #0062ba4d;
  --component-button-filled-color-text-all: #ffffff;
  --component-button-filled-success-color-background-default: #118849;
  --component-button-filled-success-color-background-hover: #0D6D3A;
  --component-button-filled-success-color-background-pressed: #0C4D22;
  --component-button-filled-success-color-background-disabled: #1188494d;
  --component-button-filled-danger-color-background-default: #E02E49;
  --component-button-filled-danger-color-background-disabled: #E02E49;
  --component-button-filled-danger-color-background-hover: #B11B31;
  --component-button-filled-danger-color-background-pressed: #e02e494d;
  --component-button-color-focus_outline-all: #98177E;
  --component-button-space-gap-small: 0.8rem;
  --component-button-space-gap-medium: 0.8rem;
  --component-button-space-gap-large: 0.8rem;
  --component-button-space-padding-x-small: 1.8rem;
  --component-button-space-padding-x-medium: 3.6rem;
  --component-button-space-padding-x-large: 4.8rem;
  --component-button-quiet-space-padding-x-small: 0.6rem;
  --component-button-quiet-space-padding-x-medium: 0.9rem;
  --component-button-quiet-space-padding-x-large: 0.9rem;
  --component-button-quiet-primary-color-text-default: #0062ba;
  --component-button-quiet-primary-color-text-pressed: #ffffff;
  --component-button-quiet-primary-color-text-disabled: #0062ba4d;
  --component-button-quiet-primary-color-background-hover: #e3f7ff;
  --component-button-quiet-primary-color-background-pressed: #0062ba;
  --component-button-outline-primary-color-text-default: #0062ba;
  --component-button-outline-primary-color-text-pressed: #ffffff;
  --component-button-outline-primary-color-border-default: #0062ba;
  --component-button-outline-primary-color-border-hover: #004C8F;
  --component-button-outline-primary-color-background-default: #ffffff;
  --component-button-outline-primary-color-background-hover: #e3f7ff;
  --component-button-outline-primary-color-background-pressed: #004C8F;
  --component-button-border_width-default: 1px;
  --component-button-size-height-small: 3.6rem;
  --component-button-size-height-medium: 4.8rem;
  --component-button-size-height-large: 6rem;
  --component-button-size-icon-small: 2.4rem;
  --component-button-size-icon-medium: 3rem;
  --component-button-size-icon-large: 4rem;
  --component-input-color-border-default: #008fd6;
  --component-input-color-border-hover: #0062ba;
  --component-input-color-outline-focus: #98177E;
  --component-input-color-background-default: #ffffff;
  --component-input-color-background-hover: #ffffff;
  --component-input-color-background-focus: #ffffff;
  --component-input-error-color-border-default: #D5203B;
  --component-input-error-color-border-hover: #8e1527;
  --component-input-disabled-color-border-default: #6a6a6a;
  --component-input-space-padding-x: 1.2rem;
  --component-input-space-padding-y: 0.6rem;
  --component-input-border_width-default: 2px;
  --component-input-border_width-focus: 4px;
  --component-input-read_only_info-color-border-default: #fbf6bd;
  --component-input-read_only_info-color-background-default: #fbf6bd;
  --component-input-read_only_confirm-color-background-default: #d4f9e4;
  --component-input-read_only_confirm-color-border-default: #d4f9e4;
  --component-input-size-min_height-default: 2.25;
  --component-input-font_size-sm: 1.6rem;
  --component-input-font_size-md: 1.8rem;
  --component-error_message-space-padding-top: 0.6rem;
  --component-error_message-color-text: #D5203B;
  --component-error_message-font_size-xs: 1.4rem;
  --border_width-thin: 1px;
  --border_width-standard: 2px;
  --space-half: 0.375;
  --space-base: 0.75;
  --space-x2: 1.5;
  --space-x3: 2.25;
  --space-x4: 3;
  --space-x5: 3.75;
  --space-x6: 4.5;
  --space-x7: 5.25;
  --space-x8: 6;
  --space-x16: 12;
  --colors-blue-950: #011728;
  --colors-blue-900: #022f51;
  --colors-blue-800: #004C8F;
  --colors-blue-700: #0062ba;
  --colors-blue-500: #008fd6;
  --colors-blue-300: #cff0ff;
  --colors-blue-200: #e3f7ff;
  --colors-red-800: #8e1527;
  --colors-red-700: #B11B31;
  --colors-red-600: #D5203B;
  --colors-red-500: #E02E49;
  --colors-red-300: #f9cad3;
  --colors-red-200: #FCE4E9;
  --colors-green-900: #0C4D22;
  --colors-green-800: #0D6D3A;
  --colors-green-700: #118849;
  --colors-green-600: #15A859;
  --colors-green-500: #17c96b;
  --colors-green-300: #d4f9e4;
  --colors-yellow-300: #fbf6bd;
  --colors-yellow-500: #ffda06;
  --colors-purple-600: #98177E;
  --colors-purple-700: #7E0C67;
  --colors-white: #ffffff;
  --colors-black: #000000;
  --colors-neutral-800: #262626;
  --colors-neutral-600: #6a6a6a;
  --colors-neutral-400: #bcc7cc;
  --colors-neutral-200: #efefef;
  --colors-neutral-100: #f5f5f5;
  --colors-brand-altinn-second-purple-300: #e0daf7;
  --colors-brand-altinn-second-purple-700: #3f3161;
  --colors-brand-altinn-first-200: #e3f7ff;
  --colors-brand-altinn-first-300: #cff0ff;
  --colors-brand-altinn-first-500: #008fd6;
  --colors-brand-altinn-first-700: #0062ba;
  --colors-brand-altinn-first-800: #004C8F;
  --colors-brand-altinn-first-900: #022f51;
  --colors-error-intens: #D5203B;
  --colors-error-intens_hover: #8e1527;
  --colors-error-calm: #FCE4E9;
  --colors-success-intens: #0D6D3A;
  --colors-success-calm: #d4f9e4;
  --colors-interaction-interaction-border-default: #008fd6;
  --colors-interaction-interaction-border-hover: #0062ba;
  --colors-interaction-button-default: #0062ba;
  --colors-interaction-button-hover: #004C8F;
  --colors-warning-intense: #ffda06;
  --colors-warning-calm: #fbf6bd;
  --colors-accessibility-tab-focus: #98177E;
  --colors-accessibility-visited: #7E0C67;
  --interactive_components-colors-focus_outline: #98177E;
  --interactive_components-colors-disabled-opacity: 30%;
  --interactive_components-border_radius-normal: 3px;
  --interactive_components-border_width-normal: 2px;
  --paragraph_space-default: 3.6rem;
  --font_size-100: 1.2rem;
  --font_size-200: 1.4rem;
  --font_size-300: 1.6rem;
  --font_size-400-breakpoint_sm: 1.6rem;
  --font_size-400-breakpoint_md: 1.8rem;
  --font_size-500-breakpoint_sm: 1.6rem;
  --font_size-500-breakpoint_md: 1.8rem;
  --font_size-500-breakpoint_lg: 2rem;
  --font_size-600-breakpoint_sm: 1.8rem;
  --font_size-600-breakpoint_md: 2rem;
  --font_size-600-breakpoint_lg: 2.4rem;
  --font_size-700-breakpoint_sm: 2rem;
  --font_size-700-breakpoint_md: 2.4rem;
  --font_size-700-breakpoint_lg: 2.8rem;
  --font_size-800-breakpoint_sm: 2.4rem;
  --font_size-800-breakpoint_md: 2.8rem;
  --font_size-800-breakpoint_lg: 3.6rem;
  --font_size-900-breakpoint_sm: 2.8rem;
  --font_size-900-breakpoint_md: 3.6rem;
  --font_size-900-breakpoint_lg: 4.4rem;
  --font_size-heading-h1-breakpoint_sm: 2.8rem;
  --font_size-heading-h1-breakpoint_md: 3.6rem;
  --font_size-heading-h1-breakpoint_lg: 4.4rem;
  --font_size-heading-h2-breakpoint_sm: 2.4rem;
  --font_size-heading-h2-breakpoint_md: 2.8rem;
  --font_size-heading-h2-breakpoint_lg: 3.6rem;
  --font_size-heading-h3-breakpoint_sm: 2rem;
  --font_size-heading-h3-breakpoint_md: 2.4rem;
  --font_size-heading-h3-breakpoint_lg: 2.8rem;
  --font_size-heading-h4-breakpoint_sm: 1.8rem;
  --font_size-heading-h4-breakpoint_md: 2rem;
  --font_size-heading-h4-breakpoint_lg: 2.4rem;
  --font_size-heading-h5-breakpoint_sm: 1.6rem;
  --font_size-heading-h5-breakpoint_md: 1.8rem;
  --font_size-heading-h5-breakpoint_lg: 2rem;
  --font_size-component-size-xs: 1.4rem;
  --font_size-component-size-sm: 1.6rem;
  --font_size-component-size-md: 1.8rem;
  --font_size-component-size-lg: 2.4rem;
  --font_size-body-medium: 1.6rem;
  --font_size-body-large-breakpoint_sm: 1.6rem;
  --font_size-body-large-breakpoint_md: 1.8rem;
  --font_size-label-small-breakpoint_sm: 1.6rem;
  --font_size-label-small-breakpoint_md: 1.8rem;
  --font_size-detail-default: 1.4rem;
  --font_size-ingress-small-breakpoint_sm: 1.8rem;
  --font_size-ingress-small-breakpoint_md: 2rem;
  --font_size-ingress-medium-breakpoint_sm: 2rem;
  --font_size-ingress-medium-breakpoint_md: 2.4rem;
  --font_family-default: Altinn-DIN;
  --font_family-heading: Altinn-DIN;
  --font_family-ingress: Altinn-DIN;
  --font_family-body: Altinn-DIN;
  --font_family-label: Altinn-DIN;
  --breakpoints-xs: 0px;
  --breakpoints-sm: 540px;
  --breakpoints-md: 768px;
  --breakpoints-lg: 960px;
  --breakpoints-xl: 1200px;
  --breakpoints-xxl: 1600px;
  --typography-default-font-family: Altinn-DIN;
  --typography-default-font-weight: Regular;
  --typography-default-line-height: 1.5;
  --typography-default-font-size: 1.6rem;
  --typography-default-letter-spacing: 0.3px;
  --typography-default-paragraph-spacing: 0;
  --typography-default-text-decoration: none;
  --typography-default-text-case: none;
  --size-base: 1.2rem;
  --size-x2: 2.4rem;
  --size-x3: 3.6rem;
  --size-x4: 4.8rem;
  --size-x5: 6rem;
  --size-x6: 7.2rem;
  --size-x7: 8.4rem;
  --size-x8: 9.6rem;
  --size-x10: 12rem;
  --size-x16: 19.2rem;
}
`);be(`@import 'https://altinncdn.no/fonts/altinn-din/altinn-din.css';

html {
  font-family: var(--font_family-default), sans-serif;
}

/* old design system dependency rules */
/* these rules should be removed when we are rid of the old design system dependency, ref https://github.com/Altinn/altinn-design-system/issues/15 */
html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
}
/* old design system dependency rules end*/
`);N.createContext(void 0);be(`.ToggleButtonGroup-module_toggle-button-group__op1wi {
  border-color: var(--component-toggle_button-color-border-inactive);
  border-width: 2px;
  border-style: solid;
  min-height: 32px;
  border-radius: 3px;
  display: inline-grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  width: var(--toggle-button-group-width);
}

/* breakpoints-xs */
@media only screen and (min-width: 0) {
  .ToggleButtonGroup-module_toggle-button-group__op1wi {
    --toggle-button-group-width: 100%;
  }
}

/* breakpoints-md and above */
@media only screen and (min-width: 768px) {
  .ToggleButtonGroup-module_toggle-button-group__op1wi {
    --toggle-button-group-width: auto;
  }
}
`);be(`.ToggleButton-module_toggle-button__g4lb- {
  border-radius: 0;
  border: none;
  padding-left: var(--component-toggle_button-space-padding-x);
  padding-right: var(--component-toggle_button-space-padding-x);
  font-family: inherit;
  background-color: var(--component-toggle_button-color-background-inactive);
  color: var(--component-toggle_button-color-text-inactive);
  font-size: var(--component-toggle_button-font_size-sm);
  height: 100%;
}

.ToggleButton-module_toggle-button--selected__Gm7TD {
  background-color: var(--component-toggle_button-color-background-active);
  color: var(--component-toggle_button-color-text-active);
}

.ToggleButton-module_toggle-button__g4lb-:not(.ToggleButton-module_toggle-button--selected__Gm7TD):hover {
  background-color: var(--colors-blue-300);
}
`);var Da;(function(e){e.Primary="primary",e.Secondary="secondary"})(Da||(Da={}));const gb=N.createContext(void 0),Gp=()=>{const e=N.useContext(gb);if(e===void 0)throw new Error("useAccordionContext must be used within an AccordionContext");return e};var GB="Accordion-module_accordion__LVhhv";be(`.Accordion-module_accordion__LVhhv {
  --component-accordion-color-background: var(--colors-white);
  --component-panel-size-width: 100%;
  background-color: var(--component-accordion-color-background);
  width: var(--component-panel-size-width);
}
`);const XB=({children:e,open:t,onClick:n,iconVariant:r=Da.Primary})=>{const i=N.useId(),a=N.useId();return $.createElement("div",{className:GB},$.createElement(gb.Provider,{value:{onClick:n,open:t,headerId:i,contentId:a,iconVariant:r}},e))};var YB="AccordionHeader-module_accordion-header__QlYjQ",JB="AccordionHeader-module_accordion-header__subtitle__OSUoH",eR="AccordionHeader-module_accordion-header--subtitle__DNear",tR="AccordionHeader-module_accordion-header__title__ss-G6",nR="AccordionHeader-module_accordion-header__actions__eYrxF";be(`.AccordionHeader-module_accordion-header__QlYjQ {
  --component-accordion_header-border_top_style: solid;
  --component-accordion_header-border_top_color: var(--colors-neutral-200);
  --component-accordion_header-border_top_width: var(--border_width-thin);
  --component-accordion_header-color-background: var(--colors-white);
  display: flex;
  border-top-width: var(--component-accordion_header-border_top_width);
  border-top-style: var(--component-accordion_header-border_top_style);
  border-top-color: var(--component-accordion_header-border_top_color);
  background-color: var(--component-accordion_header-color-background);
}

/* breakpoints-xs */
@media only screen and (min-width: 0) {
  .AccordionHeader-module_accordion-header__subtitle__OSUoH {
    display: none;
  }
}

/* breakpoints-sm */
@media only screen and (min-width: 540px) {
  .AccordionHeader-module_accordion-header__subtitle__OSUoH {
    opacity: 60%;
    font-size: 1.4rem;
    display: block;
  }
  .AccordionHeader-module_accordion-header--subtitle__DNear {
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    padding-right: 0.3rem;
  }
}

.AccordionHeader-module_accordion-header__title__ss-G6 {
  --component-accordion_header_title-spacing-margin_left: 2.5rem;
  --component-accordion_header_title-border_top_style: none;
  --component-accordion_header_title-border_bottom_style: none;
  --component-accordion_header_title-border_right_style: none;
  --component-accordion_header_title-border_left_style: none;
  --component-accordion_header_title-font_size: var(--font_size-300);
  --component-accordion_header_title-font_weight: var(
    --component-panel-font_weight-heading
  );
  --component-accordion_header_title-color-background: none;
  font-family: inherit;
  flex: 1 1 auto;
  border-top-style: var(--component-accordion_header_title-border_top_style);
  border-bottom-style: var(
    --component-accordion_header_title-border_bottom_style
  );
  border-left-style: var(--component-accordion_header_title-border_left_style);
  border-right-style: var(
    --component-accordion_header_title-border_right_style
  );
  text-align: var(--component-accordion_header_title-text-align);
  background-color: var(--component-accordion_header_title-color-background);
  font-size: var(--component-accordion_header_title-font_size);
  font-weight: var(--component-accordion_header_title-font_weight);
  margin-left: var(--component-accordion_header_title-spacing-margin_left);
  line-height: 16px;
}

.AccordionHeader-module_accordion-header__actions__eYrxF {
  display: grid;
  grid-auto-flow: column;
  column-gap: 0.5rem;
  align-items: center;
  padding: 0 0.3rem;
}
`);var kv,Cv={"accordion-icon":"AccordionIcon-module_accordion-icon__PWdLi","accordion-icon--opened":"AccordionIcon-module_accordion-icon--opened__Vv1Nk"};function bf(){return bf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bf.apply(this,arguments)}be(`.AccordionIcon-module_accordion-icon__PWdLi {
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 2.5rem;
  box-sizing: border-box;
  flex-shrink: 0;
}

.AccordionIcon-module_accordion-icon--opened__Vv1Nk {
  transform: rotate(90deg);
}
`);var Pv,rR=function(e){return N.createElement("svg",bf({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),kv||(kv=N.createElement("path",{d:"M12.883 34 10 31.09 22.975 18 10 4.91 12.883 2l15.86 16-15.86 16Z",fill:"#000"})))};function xf(){return xf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xf.apply(this,arguments)}var oR=function(e){return N.createElement("svg",xf({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),Pv||(Pv=N.createElement("path",{d:"M18 34c8.8 0 16-7.2 16-16S26.8 2 18 2 2 9.2 2 18s7.2 16 16 16Zm-3.644-22.844 1.688-1.778 8.178 8.178-8.178 8.177-1.688-1.777 6.488-6.4-6.488-6.4Z",fill:"#0062BA"})))};const iR=()=>{const{onClick:e,open:t,iconVariant:n}=Gp(),r={height:20,width:20,className:un([Cv["accordion-icon"],{[Cv["accordion-icon--opened"]]:t}]),"data-testid":n,onClick:e};switch(n){case Da.Primary:return $.createElement(rR,Object.assign({},r));case Da.Secondary:return $.createElement(oR,Object.assign({},r))}},aR=({children:e,actions:t,subtitle:n})=>{const{onClick:r,open:i,headerId:a,contentId:l}=Gp();return $.createElement("div",{className:un(YB,{[eR]:n})},$.createElement(iR,null),$.createElement("button",{className:un(tR),"aria-expanded":i,type:"button",onClick:r,id:a,"aria-controls":l},e,n?.length&&$.createElement("div",{"data-testid":"accordion-header-subtitle",className:un(JB)},n)),$.createElement("div",{className:un(nR)},t))},sR=({children:e})=>{const{open:t,contentId:n,headerId:r}=Gp();return $.createElement("div",null,t&&$.createElement("div",{"aria-expanded":t,id:n,"aria-labelledby":r},e))};function yb(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}const wf=e=>{var{svgIconComponent:t}=e,n=yb(e,["svgIconComponent"]);return N.isValidElement(t)?N.cloneElement(t,Object.assign({},n)):null};var Sf,kf,Cf,jn={button:"Button-module_button__2ZuB7",icon:"Button-module_icon__-43u5","button--small":"Button-module_button--small__pcER7","button--medium":"Button-module_button--medium__cM-9Y","button--large":"Button-module_button--large__TSWMa","button--full-width":"Button-module_button--full-width__XyuwA","button--dashed-border":"Button-module_button--dashed-border__Dproa","button--only-icon":"Button-module_button--only-icon__-Qpvj","button--filled":"Button-module_button--filled__Ve5OB","button--outline":"Button-module_button--outline__eVhnr","button--quiet":"Button-module_button--quiet__AEmi2","button--filled--primary":"Button-module_button--filled--primary__kKhXC","button--filled--secondary":"Button-module_button--filled--secondary__27xFb","button--filled--success":"Button-module_button--filled--success__anfvy","button--filled--danger":"Button-module_button--filled--danger__d14Ii","button--filled--inverted":"Button-module_button--filled--inverted__g-6zn","button--outline--primary":"Button-module_button--outline--primary__USFE4","button--outline--secondary":"Button-module_button--outline--secondary__X0lEf","button--outline--success":"Button-module_button--outline--success__wfKN7","button--outline--danger":"Button-module_button--outline--danger__slPnr","button--outline--inverted":"Button-module_button--outline--inverted__FeUQl","button--quiet--primary":"Button-module_button--quiet--primary__-Omoa","button--quiet--secondary":"Button-module_button--quiet--secondary__rT8ax","button--quiet--success":"Button-module_button--quiet--success__IJJnb","button--quiet--danger":"Button-module_button--quiet--danger__Mz0hv","button--quiet--inverted":"Button-module_button--quiet--inverted__8SNZA"};be(`.Button-module_button__2ZuB7 {
  --icon-size: var(--component-button-size-icon-small);
  --button-vertical-padding: var(--component-button-space-padding-x-small);

  all: initial; /* reset all styles to default, to avoid style overrides/surprises caused by other css (from Design system v1 f.ex) */
  font-family: inherit;
  border: var(--component-button-border_width-default) solid transparent;
  padding: 0 var(--button-vertical-padding);
  text-align: center;
  box-sizing: border-box;
  letter-spacing: var(--typography-default-letter-spacing);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.Button-module_button__2ZuB7:focus-visible {
  outline: var(--interactive_components-colors-focus_outline) solid
    var(--border_width-standard);
  outline-offset: var(--border_width-standard);
}

.Button-module_button__2ZuB7:focus:not(:focus-visible) {
  outline: none;
}

.Button-module_button__2ZuB7:disabled {
  cursor: auto;
  opacity: var(--interactive_components-colors-disabled-opacity);
}

.Button-module_icon__-43u5 {
  height: var(--icon-size);
  width: var(--icon-size);
}

.Button-module_button--small__pcER7 {
  height: var(--component-button-size-height-small);
  font-size: var(--font_size-300);
  --icon-size: var(--component-button-size-icon-small);
  --button-vertical-padding: var(--component-button-space-padding-x-small);
  gap: var(--component-button-space-gap-small);
}

.Button-module_button--medium__cM-9Y {
  height: var(--component-button-size-height-medium);
  min-width: var(--component-button-size-height-medium);
  font-size: var(--font_size-400-breakpoint_md);
  --icon-size: var(--component-button-size-icon-medium);
  --button-vertical-padding: var(--component-button-space-padding-x-medium);
  gap: var(--component-button-space-gap-medium);
}

.Button-module_button--large__TSWMa {
  height: var(--component-button-size-height-large);
  min-width: var(--component-button-size-height-large);
  font-size: var(--font_size-600-breakpoint_md);
  --icon-size: var(--component-button-size-icon-large);
  --button-vertical-padding: var(--component-button-space-padding-x-large);
  gap: var(--component-button-space-gap-large);
}

.Button-module_button--full-width__XyuwA {
  width: 100%;
}

.Button-module_button--dashed-border__Dproa {
  border-style: dashed;
}

.Button-module_button--only-icon__-Qpvj {
  padding: 0.5rem !important;
}

.Button-module_button--filled__Ve5OB {
  border-radius: 3px;
  color: var(--component-button-filled-color-text-all);
  fill: var(--component-button-filled-color-text-all);
}

.Button-module_button--outline__eVhnr {
  border-radius: 3px;
  background-color: transparent;
}

.Button-module_button--quiet__AEmi2 {
  border-radius: 50px;
  padding: 0 calc(var(--button-vertical-padding) * 2 / 3);
  background-color: transparent;
}

/* Filled button colors */
.Button-module_button--filled--primary__kKhXC {
  background: var(--component-button-filled-primary-color-background-default);
}

.Button-module_button--filled--primary__kKhXC:not(:disabled):hover {
  background: var(--component-button-filled-primary-color-background-hover);
}

.Button-module_button--filled--primary__kKhXC:not(:disabled):active {
  background: var(--component-button-filled-primary-color-background-pressed);
}

.Button-module_button--filled--secondary__27xFb {
  background: var(--component-button-filled-primary-color-background-pressed);
}

.Button-module_button--filled--secondary__27xFb:not(:disabled):hover {
  background: var(--colors-blue-800);
}

.Button-module_button--filled--secondary__27xFb:not(:disabled):active {
  background: var(--colors-blue-950);
}

.Button-module_button--filled--success__anfvy {
  background: var(--component-button-filled-success-color-background-default);
}

.Button-module_button--filled--success__anfvy:not(:disabled):hover {
  background: var(--component-button-filled-success-color-background-hover);
}

.Button-module_button--filled--success__anfvy:not(:disabled):active {
  background: var(--component-button-filled-success-color-background-pressed);
}

.Button-module_button--filled--danger__d14Ii {
  background: var(--component-button-filled-danger-color-background-default);
}

.Button-module_button--filled--danger__d14Ii:not(:disabled):hover {
  background: var(--component-button-filled-danger-color-background-hover);
}

.Button-module_button--filled--danger__d14Ii:not(:disabled):active {
  background: var(--colors-red-800);
}

.Button-module_button--filled--inverted__g-6zn {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: var(--colors-white);
}

.Button-module_button--filled--inverted__g-6zn:not(:disabled):hover {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: rgba(255, 255, 255, 0.9);
}

.Button-module_button--filled--inverted__g-6zn:not(:disabled):active {
  color: var(--colors-white);
  fill: var(--colors-white);
  background: rgba(255, 255, 255, 0.1);
}

.Button-module_button--filled--inverted__g-6zn:focus-visible {
  outline-color: var(--colors-white);
}

/* Outline button colors */
.Button-module_button--outline--primary__USFE4 {
  color: var(--component-button-outline-primary-color-text-default);
  fill: var(--component-button-outline-primary-color-text-default);
  border-color: var(--component-button-outline-primary-color-border-default);
  background: var(--component-button-outline-primary-color-background-default);
}

.Button-module_button--outline--primary__USFE4:not(:disabled):hover {
  color: var(--colors-blue-800);
  fill: var(--colors-blue-800);
  background: var(--component-button-outline-primary-color-background-hover);
  border-color: var(--component-button-outline-primary-color-border-hover);
}

.Button-module_button--outline--primary__USFE4:not(:disabled):active {
  color: var(--component-button-outline-primary-color-text-pressed);
  fill: var(--component-button-outline-primary-color-text-pressed);
  background: var(--component-button-outline-primary-color-background-pressed);
}

.Button-module_button--outline--secondary__X0lEf {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: var(--colors-white);
  border-color: var(--colors-blue-900);
}

.Button-module_button--outline--secondary__X0lEf:not(:disabled):hover {
  background: var(--colors-blue-200);
}

.Button-module_button--outline--secondary__X0lEf:not(:disabled):active {
  color: var(--colors-white);
  fill: var(--colors-white);
  background: var(--colors-blue-900);
}

.Button-module_button--outline--success__wfKN7 {
  color: var(--colors-green-700);
  fill: var(--colors-green-700);
  background: var(--colors-white);
  border-color: var(--colors-green-700);
}

.Button-module_button--outline--success__wfKN7:not(:disabled):hover {
  color: var(--colors-green-800);
  fill: var(--colors-green-800);
  background: var(--colors-green-300);
}

.Button-module_button--outline--success__wfKN7:not(:disabled):active {
  color: var(--colors-white);
  fill: var(--colors-white);
  background: var(--colors-green-700);
}

.Button-module_button--outline--danger__slPnr {
  color: var(--colors-red-500);
  fill: var(--colors-red-500);
  background: var(--colors-white);
  border-color: var(--colors-red-500);
}

.Button-module_button--outline--danger__slPnr:not(:disabled):hover {
  color: var(--colors-red-700);
  fill: var(--colors-red-700);
  background: var(--colors-red-200);
  border-color: var(--colors-red-700);
}

.Button-module_button--outline--danger__slPnr:not(:disabled):active {
  color: var(--colors-white);
  fill: var(--colors-white);
  background: var(--colors-red-500);
}

.Button-module_button--outline--inverted__FeUQl {
  color: var(--colors-white);
  fill: var(--colors-white);
  border-color: var(--colors-white);
  background: transparent;
}

.Button-module_button--outline--inverted__FeUQl:not(:disabled):hover {
  background: rgba(255, 255, 255, 0.1);
}

.Button-module_button--outline--inverted__FeUQl:not(:disabled):active {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: var(--colors-white);
}

.Button-module_button--outline--inverted__FeUQl:focus-visible {
  outline-color: var(--colors-white);
}

/* Quiet button colors */
.Button-module_button--quiet--primary__-Omoa {
  color: var(--component-button-quiet-primary-color-text-default);
  fill: var(--component-button-quiet-primary-color-text-default);
}

.Button-module_button--quiet--primary__-Omoa:not(:disabled):hover {
  color: var(--colors-blue-800);
  fill: var(--colors-blue-800);
  background: var(--component-button-quiet-primary-color-background-hover);
}

.Button-module_button--quiet--primary__-Omoa:not(:disabled):active {
  color: var(--component-button-filled-color-text-all);
  fill: var(--component-button-filled-color-text-all);
  background: var(--component-button-quiet-primary-color-background-pressed);
}

.Button-module_button--quiet--secondary__rT8ax {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
}

.Button-module_button--quiet--secondary__rT8ax:not(:disabled):hover {
  background: var(--colors-neutral-400);
}

.Button-module_button--quiet--secondary__rT8ax:not(:disabled):active {
  color: var(--component-button-filled-color-text-all);
  fill: var(--component-button-filled-color-text-all);
  background: var(--colors-blue-900);
}

.Button-module_button--quiet--success__IJJnb {
  color: var(--colors-green-700);
  fill: var(--colors-green-700);
}

.Button-module_button--quiet--success__IJJnb:not(:disabled):hover {
  color: var(--colors-green-800);
  fill: var(--colors-green-800);
  background: var(--colors-green-300);
}

.Button-module_button--quiet--success__IJJnb:not(:disabled):active {
  color: var(--component-button-filled-color-text-all);
  fill: var(--component-button-filled-color-text-all);
  background: var(--colors-green-900);
}

.Button-module_button--quiet--danger__Mz0hv {
  color: var(--colors-red-600);
  fill: var(--colors-red-600);
}

.Button-module_button--quiet--danger__Mz0hv:not(:disabled):hover {
  color: var(--colors-red-800);
  fill: var(--colors-red-800);
  background: var(--colors-red-200);
}

.Button-module_button--quiet--danger__Mz0hv:not(:disabled):active {
  color: var(--component-button-filled-color-text-all);
  fill: var(--component-button-filled-color-text-all);
  background: var(--colors-red-800);
}

.Button-module_button--quiet--inverted__8SNZA {
  color: var(--colors-white);
  fill: var(--colors-white);
  background: transparent;
}

.Button-module_button--quiet--inverted__8SNZA:not(:disabled):hover {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: rgba(255, 255, 255, 0.9);
}

.Button-module_button--quiet--inverted__8SNZA:not(:disabled):active {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: var(--colors-white);
}

.Button-module_button--quiet--inverted__8SNZA:focus-visible {
  outline-color: var(--colors-white);
}
`),function(e){e.Small="small",e.Medium="medium",e.Large="large"}(Sf||(Sf={})),function(e){e.Primary="primary",e.Secondary="secondary",e.Success="success",e.Danger="danger",e.Inverted="inverted"}(kf||(kf={})),function(e){e.Filled="filled",e.Outline="outline",e.Quiet="quiet"}(Cf||(Cf={}));var Al,Ma;N.forwardRef((e,t)=>{var{children:n,color:r=kf.Primary,variant:i=Cf.Filled,size:a=Sf.Small,fullWidth:l=!1,dashedBorder:c=!1,iconPlacement:d="left",icon:p,type:_="button",className:v}=e,m=yb(e,["children","color","variant","size","fullWidth","dashedBorder","iconPlacement","icon","type","className"]);return $.createElement("button",Object.assign({},m,{ref:t,className:un(jn.button,jn[`button--${a}`],jn[`button--${i}`],jn[`button--${r}`],jn[`button--${i}--${r}`],{[jn["button--full-width"]]:l},{[jn["button--dashed-border"]]:c},{[jn["button--only-icon"]]:!n&&p},v),type:_}),p&&d==="left"&&$.createElement(wf,{svgIconComponent:p,className:jn.icon}),n,p&&d==="right"&&$.createElement(wf,{svgIconComponent:p,className:jn.icon}))});(function(e){e.Primary="primary",e.Success="success"})(Al||(Al={})),function(e){e.Small="small",e.Medium="medium"}(Ma||(Ma={}));const bb=N.createContext({color:Al.Primary,size:Ma.Medium});var lR="Page-module_page__THNNc";be(`.Page-module_page__THNNc {
  width: 100%;
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
  box-sizing: border-box;
}
`);const uR=({children:e,color:t=Al.Primary,size:n=Ma.Medium})=>$.createElement("div",{className:lR},$.createElement(bb.Provider,{value:{color:t,size:n}},e));var Qc={"page-header":"PageHeader-module_page-header__94GS1","page-header--primary":"PageHeader-module_page-header--primary__-DYm-","page-header--success":"PageHeader-module_page-header--success__JUNEP","page-header--small":"PageHeader-module_page-header--small__iSiFU","page-header--medium":"PageHeader-module_page-header--medium__TiCR6"};be(`.PageHeader-module_page-header__94GS1 {
  height: var(--page-header-height);
  background-color: var(--component-page_header-background-color);
  display: flex;
  width: 100%;
  color: var(--component-page_header-color);
  gap: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  box-sizing: inherit;
  align-items: center;
  font-size: var(--page_header-title-font-size);
  fill: var(--component-page_header-color);
}

.PageHeader-module_page-header--primary__-DYm- {
  --component-page_header-background-color: #022f51;
  --component-page_header-color: white;
}

.PageHeader-module_page-header--success__JUNEP {
  --component-page_header-background-color: #17c96b;
  --component-page_header-color: black;
}

.PageHeader-module_page-header--small__iSiFU {
  --page_header-title-font-size: 18px;
  --page-header-height: 72px;
}

.PageHeader-module_page-header--medium__TiCR6 {
  --page_header-title-font-size: 28px;
  --page-header-height: 96px;
}
`);const cR=({children:e,icon:t})=>{const{color:n,size:r}=(()=>{const a=N.useContext(bb);if(a===void 0)throw new Error("usePageContext must be used within a PageContext");return a})(),i=r===Ma.Small?28:40;return $.createElement("header",{className:un(Qc["page-header"],Qc[`page-header--${n}`],Qc[`page-header--${r}`])},$.createElement(wf,{width:i,height:i,svgIconComponent:t}),$.createElement("span",null,e))};var dR={"page-content":"PageContent-module_page-content__-sHWi"};be(`.PageContent-module_page-content__-sHWi {
  --component-page_content-vertical-padding: 2rem;
  background-color: white;
  padding-top: var(--component-page_content-vertical-padding);
  padding-bottom: var(--component-page_content-vertical-padding);
  box-sizing: inherit;
}
`);const fR=({children:e})=>$.createElement("div",{className:un(dR["page-content"])},e);var Pf;be(`.List-module_list__9aWGq {
  padding-left: 0;
  list-style-type: none;
  border-top-color: var(--component-list-border_top_color);
  border-top-style: var(--component-list-border_top_style);
  border-top-width: var(--component-list-border_top_width);
}

.List-module_list--solid__--Ld- {
  --component-list-border_top_color: #bcc7cc;
  --component-list-border_top_style: solid;
  --component-list-border_top_width: 0.1rem;
}

.List-module_list--dashed__CDfmL {
  --component-list-border_top_color: #1eadf7;
  --component-list-border_top_style: dashed;
  --component-list-border_top_width: 0.1rem;
}
`),function(e){e.Solid="solid",e.Dashed="dashed"}(Pf||(Pf={}));N.createContext({borderStyle:Pf.Solid});be(`.ListItem-module_list-item__OIENi {
  display: block;
  border-bottom-color: var(--component-list_item-border_bottom_color);
  border-bottom-style: var(--component-list_item-border-bottom-style);
  border-bottom-width: var(--component-list_item-border-bottom-width);
}

.ListItem-module_list-item--solid__H4Nk8 {
  --component-list_item-border_bottom_color: #bcc7cc;
  --component-list_item-border-bottom-style: solid;
  --component-list_item-border-bottom-width: 0.1rem;
}

.ListItem-module_list-item--dashed__26PJV {
  --component-list_item-border-bottom-width: 0.1rem;
  --component-list_item-border_bottom_color: #1eadf7;
  --component-list_item-border-bottom-style: dashed;
}
`);var Ev,Ov,zv;(function(e){e.Default="default",e.Error="error",e.Disabled="disabled",e.ReadOnlyInfo="readonly-info",e.ReadOnlyConfirm="readonly-confirm"})(Ev||(Ev={})),function(e){e.ReadOnlyInfo="readonly-info",e.ReadOnlyConfirm="readonly-confirm"}(Ov||(Ov={})),function(e){e.None="none",e.Error="error",e.Search="search"}(zv||(zv={}));be(`.InputWrapper-module_InputWrapper__us2BQ {
  --background: var(--component-input-color-background-default);
  --border-color: var(--component-input-color-border-default);
  --outline-color: var(--component-input-color-outline-focus);
  --icon-background: transparent;
  --paddingY: 0;
  --paddingX: 0;
  background: var(--background);
  border-width: var(--component-input-border_width-default);
  border-radius: var(--interactive_components-border_radius-normal);
  border-style: solid;
  box-sizing: border-box;
  display: flex;
  align-items: stretch;
  border-color: var(--border-color);
}

.InputWrapper-module_InputWrapper--with-focus-effect__24aF7:focus-within {
  outline: var(--outline-color) auto var(--border_width-thin);
  outline-offset: calc(var(--border_width-thin) + var(--border_width-standard));
}

.InputWrapper-module_InputWrapper--default__Lcj6I:hover {
  --border-color: var(--component-input-color-border-hover);
}

.InputWrapper-module_InputWrapper--error__C8fG3 {
  --icon-background: var(--component-input-error-color-border-default);
  --border-color: var(--component-input-error-color-border-default);
}

.InputWrapper-module_InputWrapper--error__C8fG3:hover {
  --icon-background: var(--component-input-error-color-border-hover);
  --border-color: var(--component-input-error-color-border-hover);
}

.InputWrapper-module_InputWrapper--disabled__p0H70 {
  --background: repeating-linear-gradient(
    135deg,
    #efefef,
    #efefef 2px,
    #fff 3px,
    #fff 5px
  );
  --border-color: var(--component-input-disabled-color-border-default);
}

.InputWrapper-module_InputWrapper--readonly-info__u6Mi8 {
  --background: var(--component-input-read_only_info-color-background-default);
  --border-color: var(--component-input-read_only_info-color-border-default);
}

.InputWrapper-module_InputWrapper--readonly-confirm__Y-YY- {
  --background: var(
    --component-input-read_only_confirm-color-background-default
  );
  --border-color: var(--component-input-read_only_confirm-color-border-default);
}

.InputWrapper-module_InputWrapper--search__1aIP8 {
  flex-direction: row-reverse;
}

.InputWrapper-module_InputWrapper--with-padding__o-H2V {
  /* Subtract size of border on padding-y, because border is on outer element. Without this, height of entire component will be too big */
  --paddingY: calc(
    var(--component-input-space-padding-y) -
      var(--component-input-border_width-default)
  );
  --paddingX: var(--component-input-space-padding-x);
}

.InputWrapper-module_InputWrapper__field__-Uwxu {
  box-sizing: border-box;
  border: none;
  outline: none;
  padding: var(--paddingY) var(--paddingX);
  width: 100%;
  background: var(--background);
}

.InputWrapper-module_InputWrapper__icon__tbkEy {
  background: var(--icon-background);
  padding-right: var(--component-input-border_width-focus);
  padding-left: var(--component-input-border_width-default);
  display: flex;
  align-items: center;
  flex: none;
}

.InputWrapper-module_InputWrapper__icon--disabled__mmqUt {
  opacity: 60%;
}

.InputWrapper-module_InputWrapper__label__tLifi {
  font-weight: var(--component-label-font_weight-default);
  padding: 0;
}
`);be(`.ErrorMessage-module_error-message-wrapper__O-Mrx {
  color: var(--component-error_message-color-text);
  font-size: var(--component-error_message-font_size-xs);
}
`);be(`.Map-module_map__mpwLI {
  position: relative;
  height: 50rem;
  width: 100%;
}
`);var Ef;be(`Table {
  /* #FFFFFF */

  /* Inside auto layout */
  background-color: #ffffff;
  flex: none;
  order: 3;
  align-self: stretch;
  flex-grow: 0;
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}
`),function(e){e.Header="header",e.Body="body",e.Footer="footer"}(Ef||(Ef={}));N.createContext(void 0);N.createContext(void 0);N.createContext({variantStandard:Ef.Body});be(`.TableHeader-module_table-header__mrqgB {
  background: #f5f5f5;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
`);be(`.TableRow-module_TableRow__3GK6I {
  width: 1056px;
  height: 60px;
}

.TableRow-module_table-row--selected__0i2on {
  background-color: #e0daf7;
  border-top: 1px solid #dde3e5;
  border-bottom: 1px solid #dde3e5;
  border-left: 2px solid #011728;
}

.TableRow-module_table-row--body__CP23F:hover {
  background-color: #e3f7ff;
  cursor: pointer;
}
`);be(`.TableBody-module_TableBody__tqUvt {
  /* Inside auto layout */

  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
  background-color: #ffff;
}
`);be(`.TableCell-module_header-table-cell__NOs4b {
  text-align: left;
  padding: 8px;
  margin: 20px 0 20px 0;
  background: #f5f5f5;
  user-select: none;
}

.TableCell-module_header-table-cell-radiobutton__I1mdW {
  text-align: left;
  padding: 8px;
  margin: 10px 0 10px 0;
  background: #f5f5f5;
  user-select: none;
}

.TableCell-module_body-table-cell__MhHfa {
  text-align: left;
  padding: 8px;
  border-top: 1px solid #dde3e5;
  max-width: 300px;
  margin: 20px 0 20px 0;
  border-top: 1px solid #dde3e5;
  border-bottom: 1px solid #dde3e5;
}

.TableCell-module_body-table-cell-radiobutton__kha-K {
  text-align: left;
  border-top: 1px solid #dde3e5;
  border-top: 1px solid #dde3e5;
  border-bottom: 1px solid #dde3e5;
}

.TableCell-module_image__vWvwd {
  max-width: 45px;
  max-height: 45px;
}

.TableCell-module_input__cyAaE {
  margin: 0px 15px 0px 15px;
}
.TableCell-module_radio-button__FbSRH {
  margin: 0px 0px 0px 15px;
}

.TableCell-module_container-sortable__70xdN {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
}

.TableCell-module_icon__ADG4G {
  fill: rgba(0, 0, 0, 0.4);
  margin-left: -5px;
}

.TableCell-module_icon-desc__do5N3 {
  fill: rgb(0, 0, 0);
  margin-left: -5px;
}

.TableCell-module_icon-asc__96gN7 {
  fill: rgb(0, 0, 0);
  transform: rotate(180deg);
  margin-left: -5px;
}
`);var Tv;(function(e){e.Descending="desc",e.Ascending="asc",e.NotSortable="notSortable",e.NotActive="notActive"})(Tv||(Tv={}));be(`.TableFooter-module_table-footer__FJZKm {
  background: #f5f5f5;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
`);var Lv;be(`.CheckboxRadioTemplate-module_template__CbnTf {
  --cursor: pointer;
  --description-color: var(--component-field_description-color-text-default);
  --label-color: var(--component-checkbox-color-text-default);
  --opacity: 1;

  border-radius: var(--input_box-border_radius);
  cursor: var(--cursor);
  display: inline-flex;
  flex-direction: row;
  font-size: var(--font_size);
  gap: var(--gap);
  line-height: var(--typography-default-line-height);
  opacity: var(--opacity);
}

.CheckboxRadioTemplate-module_template--xsmall__seIf7 {
  --description-margin_top: var(--component-field_description-space-top-xsmall);
  --font_size: var(--component-checkbox-font_size-xs);
  --gap: var(--component-checkbox-space-gap-xsmall);
}

.CheckboxRadioTemplate-module_template--small__5Y0JS {
  --description-margin_top: var(--component-field_description-space-top-small);
  --font_size: var(--component-checkbox-font_size-sm);
  --gap: var(--component-checkbox-space-gap-small);
}

.CheckboxRadioTemplate-module_template__CbnTf:not(.CheckboxRadioTemplate-module_template--disabled__0IHY1):hover {
  --label-color: var(--component-checkbox-color-text-hover);
}

.CheckboxRadioTemplate-module_template--disabled__0IHY1 {
  --cursor: auto;
  --opacity: var(--interactive_components-colors-disabled-opacity);
}

.CheckboxRadioTemplate-module_template__input-wrapper__ZDnfs {
  display: inline-block;
  height: var(--input_box-size);
  position: relative;
}

.CheckboxRadioTemplate-module_template__input-wrapper__input__cIez- {
  height: 0;
  opacity: 0;
  position: absolute;
  width: 0;
}

.CheckboxRadioTemplate-module_template__input-wrapper__visible-box__mgLMA {
  display: inline-block;
  flex: 0 0 var(--input_box-size);
  height: var(--input_box-size);
  position: relative;
  width: var(--input_box-size);
}

.CheckboxRadioTemplate-module_template__label-and-description__PNky5 {
  display: inline-flex;
  flex-direction: column;
  gap: var(--description-margin_top);

  /* Center-align input box with the first line in the label */
  margin-top: calc(
    (
        var(--input_box-size) -
          (var(--typography-default-line-height) * var(--font_size))
      ) / 2
  );
}

.CheckboxRadioTemplate-module_template__label-and-description__label__I57HD {
  color: var(--label-color);
}

.CheckboxRadioTemplate-module_template__label-and-description__description__muYTd {
  color: var(--description-color);
}

@supports not selector(:has(:focus-visible)) {
  .CheckboxRadioTemplate-module_template__CbnTf:not(.CheckboxRadioTemplate-module_template--disabled__0IHY1):focus-within {
    outline: 2px solid var(--interactive_components-colors-focus_outline);
    outline-offset: 2px;
  }
}

.CheckboxRadioTemplate-module_template__CbnTf:not(.CheckboxRadioTemplate-module_template--disabled__0IHY1):has(:focus-visible) {
  outline: 2px solid var(--interactive_components-colors-focus_outline);
  outline-offset: 2px;
}
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Lv||(Lv={}));be(`.Checkbox-module_checkbox__lSeQj {
  /* Internal variables */
  --checkbox-background_color: var(
    --component-checkbox-color-background-default
  );
  --checkbox-border_color: var(--component-checkbox-color-border-default);
  --checkbox-border_radius: var(--interactive_components-border_radius-normal);
  --checkbox-border_width: var(--component-checkbox-border_width-small);
  --checkbox-checkmark-display: none;
  --checkbox-height: var(--component-checkbox-size-height-small);
  --checkbox-width: var(--component-checkbox-size-width-small);

  /* Variables used by CheckboxRadioTemplate */
  --input_box-size: var(--checkbox-height);
  --input_box-border_radius: var(--checkbox-border_radius);
}

.Checkbox-module_checkbox--compact__NW3zE {
  --checkbox-border_width: var(--component-checkbox-border_width-xsmall);
  --checkbox-height: var(--component-checkbox-size-height-xsmall);
  --checkbox-width: var(--component-checkbox-size-width-xsmall);
}

.Checkbox-module_checkbox--error__uc35n {
  --checkbox-background_color: var(--component-checkbox-color-background-error);
  --checkbox-border_color: var(--component-checkbox-color-border-error);
}

.Checkbox-module_checkbox--checked__WAGbe {
  --checkbox-checkmark-display: inline-block;
}

.Checkbox-module_checkbox--checked__WAGbe:not(.Checkbox-module_checkbox--disabled__The3C) {
  --checkbox-background_color: var(
    --component-checkbox-color-background-checked
  );
  --checkbox-border_color: var(--component-checkbox-color-border-checked);
}

.Checkbox-module_checkbox__lSeQj:not(.Checkbox-module_checkbox--disabled__The3C, .Checkbox-module_checkbox--checked__WAGbe):hover {
  --checkbox-background_color: var(--component-checkbox-color-background-hover);
}

.Checkbox-module_checkbox__lSeQj:not(.Checkbox-module_checkbox--disabled__The3C, .Checkbox-module_checkbox--error__uc35n, .Checkbox-module_checkbox--checked__WAGbe):hover {
  --checkbox-border_color: var(--component-checkbox-color-border-hover);
}

.Checkbox-module_checkbox--disabled__The3C.Checkbox-module_checkbox--checked__WAGbe {
  --checkbox-background_color: var(--component-checkbox-color-border-disabled);
  --checkbox-border_color: transparent;
}

.Checkbox-module_checkbox--read-only__VSKJU {
  --cursor: auto;
}

.Checkbox-module_visible-box__UhCh4 {
  background-color: var(--checkbox-background_color);
  border-color: var(--checkbox-border_color);
  border-radius: var(--checkbox-border_radius);
  border-style: solid;
  border-width: var(--checkbox-border_width);
  box-sizing: border-box;
  display: inline-block;
  height: var(--checkbox-height);
  width: var(--checkbox-width);
}

.Checkbox-module_visible-box__checkmark__n-q0I {
  background-color: white;
  clip-path: polygon(
    47.11% 56.51%,
    30.37% 38.94%,
    21.5% 48.09%,
    47.11% 74.54%,
    81.5% 39.16%,
    72.63% 30%
  );
  display: var(--checkbox-checkmark-display);
  height: 100%;
  width: 100%;
}
`);be(`.TextArea-module_TextArea__yR7M3 {
  font-family: inherit;
  font-size: var(--component-checkbox-font_size-sm);
}

.TextArea-module_TextArea--resize-none__bCtAH {
  resize: none;
}

.TextArea-module_TextArea--resize-both__Ipa6Y {
  resize: both;
}

.TextArea-module_TextArea--resize-horizontal__YEPbS {
  resize: horizontal;
}

.TextArea-module_TextArea--resize-vertical__dR26z {
  resize: vertical;
}
`);var Bv;be(`.FieldSet-module_field-set__N3GyH {
  --color: var(--component-checkbox-color-text-default);
  --content-margin_top: var(--component-fieldset-space-gap-y-small);
  --description-color: var(--component-field_description-color-text-default);
  --description-margin_top: var(--component-field_description-space-top-small);
  --error_message-margin_top: var(--component-fieldset-space-gap-y-small);
  --font_size: var(--component-checkbox-font_size-sm);

  color: var(--color);
  border: 0;
  font-size: var(--font_size);
  line-height: var(--typography-default-line-height);
  margin: 0;
  padding: 0;
}

.FieldSet-module_field-set--xsmall__-4TGb {
  --content-margin_top: var(--component-fieldset-space-gap-y-xsmall);
  --description-margin_top: var(--component-field_description-space-top-xsmall);
  --error_message-margin_top: var(--component-fieldset-space-gap-y-xsmall);
  --font_size: var(--component-checkbox-font_size-xs);
}

.FieldSet-module_field-set__N3GyH:disabled {
  opacity: var(--interactive_components-colors-disabled-opacity);
}

.FieldSet-module_field-set__N3GyH:disabled * {
  opacity: 1;
}

.FieldSet-module_field-set__legend__UWNqr {
  font-weight: bold;
  padding: 0;
}

.FieldSet-module_field-set__description__TUOvx {
  color: var(--description-color);
  margin: 0;
}

.FieldSet-module_field-set__legend__UWNqr + .FieldSet-module_field-set__description__TUOvx {
  margin-top: var(--description-margin_top);
}

.FieldSet-module_field-set__content__9pJd2:not(:first-child) {
  margin-top: var(--content-margin_top);
}

.FieldSet-module_field-set__error-message__T6z8b {
  margin-top: var(--error_message-margin_top);
}
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Bv||(Bv={}));var Rv;be(`.CheckboxGroup-module_checkbox-group__Ltsbh {
  --gap-x: var(--component-checkbox-group-space-gap-x-small);
  --gap-y: var(--component-checkbox-group-space-gap-y-small);

  column-gap: var(--gap-x);
  display: flex;
  flex-wrap: wrap;
  row-gap: var(--gap-y);
}

.CheckboxGroup-module_checkbox-group--compact__nMqjR {
  --gap-x: var(--component-checkbox-group-space-gap-x-xsmall);
  --gap-y: var(--component-checkbox-group-space-gap-y-xsmall);
}

.CheckboxGroup-module_checkbox-group--vertical__mh6Hp {
  flex-direction: column;
}

.CheckboxGroup-module_checkbox-group--horizontal__mFAei {
  flex-direction: row;
}
`),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(Rv||(Rv={}));be(`.Pagination-module_pagination-icon__zVOLT {
  fill: rgb(0, 0, 0);
}

.Pagination-module_pagination-icon__zVOLT:not(:last-child) {
  margin-right: 20px;
}

.Pagination-module_pagination-icon__zVOLT:hover {
  cursor: pointer;
}

.Pagination-module_pagination-icon--disabled__IvaxN {
  fill: rgba(0, 0, 0, 0.4);
  cursor: default !important;
}

.Pagination-module_pagination-wrapper__cUN7w {
  display: flex;
  align-items: center;
  justify-content: right;
}

.Pagination-module_icon-button__uZQ12 {
  background-color: transparent;
  border: none;
}
`);be(`.MultiSelectItem-module_multi-select-item__KLSzx {
  --border-radius: calc(var(--multiselect_item-height) / 2);
  align-items: center;
  background-color: var(--multiselect_item-background_color);
  border-radius: var(--border-radius);
  color: var(--multiselect_item-text_color);
  display: inline-flex;
  font-size: var(--font_size);
  gap: var(--multiselect_item-space_between);
  height: var(--multiselect_item-height);
  padding-left: var(--multiselect_item-space_left);
}

.MultiSelectItem-module_multi-select-item__delete-button__MxGVX {
  background-color: transparent;
  border-bottom-right-radius: inherit;
  border-top-right-radius: inherit;
  border: 0;
  cursor: var(--interactive_element-cursor);
  height: 100%;
  padding: calc(
    (var(--multiselect_item-height) - var(--delete_cross-size)) / 2
  );
  width: var(--multiselect_item-height);
}

.MultiSelectItem-module_multi-select-item__delete-button__MxGVX:not(:disabled):hover {
  background-color: var(--delete_cross_box-color-hover);
}

.MultiSelectItem-module_multi-select-item__delete-button__MxGVX:focus-visible {
  background-color: var(--delete_cross_box-color-hover);
  outline: var(--focus_visible-outline);
}

.MultiSelectItem-module_multi-select-item__delete-button__cross__mi9CU {
  background-color: var(--multiselect_item_delete_cross-color);
  clip-path: var(--delete_cross-clip_path);
  display: inline-block;
  height: var(--delete_cross-size);
  width: var(--delete_cross-size);
}
`);be(`.Select-module_select__cjdcr {
  --delete_cross_box-border_radius: var(
    --interactive_components-border_radius-normal
  );
  --delete_cross_box-color-hover: var(--colors-red-500);
  --delete_cross_box-size: 25px;
  --delete_cross-clip_path: polygon(
    14.29% 0%,
    50% 35.71%,
    85.71% 0%,
    100% 14.29%,
    64.29% 50%,
    100% 85.71%,
    85.71% 100%,
    50% 64.29%,
    14.29% 100%,
    0% 85.71%,
    35.71% 50%,
    0% 14.29%
  );
  --delete_cross-color: var(--colors-blue-900);
  --delete_cross-color-active: var(--colors-blue-700);
  --delete_cross-color-disabled: #022f5180;
  --delete_cross-color-hover: white;
  --delete_cross-size: 12px;
  --arrow-border_left: 1px solid #022f5180;
  --arrow-color: var(--colors-blue-900);
  --arrow-height_to_width_fraction: calc(8 / 14);
  --arrow-horizontal_padding: 6px;
  --arrow-size: 14px;
  --arrow_wrapper-margin: 4px;
  --field-height-inside: calc(
    var(--field-height) - var(--component-input-border_width-default) * 2
  );
  --field-height: 36px;
  --font_size: 16px;
  --interactive_element-cursor: pointer;
  --line-height: 1.5;
  --multiselect_item-background_color: var(--colors-blue-900);
  --multiselect_item-height: 24px;
  --multiselect_item-space_between: 6px;
  --multiselect_item-space_left: 16px;
  --multiselect_item-text_color: white;
  --multiselect_item_delete_cross-color: white;
  --multiselect_items-gap: 4px;
  --multiselect_items-padding: calc(
    (var(--field-height-inside) - var(--multiselect_item-height)) / 2
  );
  --option-background_color-default: transparent;
  --option-background_color-hover: var(--colors-blue-200);
  --option-background_color-selected: var(--colors-blue-300);
  --option-background_color-selected-hover: var(--colors-blue-500);
  --option-border_color: #022f5180;
  --option-border_width: 1px;
  --option-height: 36px;
  --option_list-background_color: white;
  --option_list-border: 1px solid #68707c;
  --option_list-border_radius: var(
    --interactive_components-border_radius-normal
  );
  --option_list-number_of_visible_options: 7;
  --option_list-shadow: 1px 1px 3px #00000040;
  --option_list-z_index: 1;
  --option-outline-focus: none;
  --option-padding_horizontal: 12px;
  --singleselect_field-padding_left: 12px;
  --focus_visible-outline: 2px auto
    var(--interactive_components-colors-focus_outline);

  font-size: var(--font_size);
  line-height: var(--line-height);
  position: relative;
}

.Select-module_select--disabled__t9hQF {
  --interactive_element-cursor: auto;
  opacity: var(--interactive_components-colors-disabled-opacity);
}

.Select-module_select--expanded__d5GAE {
  --delete_cross-color: var(--delete_cross-color-active);
}

.Select-module_select__cjdcr:not(.Select-module_select--expanded__d5GAE) .Select-module_select__option-list__JhHMx {
  display: none;
}

.Select-module_select--using-keyboard__nXszu {
  --option-outline-focus: var(--focus_visible-outline);
}

.Select-module_select__field__button__Y8Swc {
  background: transparent;
  border: 0;
  cursor: var(--interactive_element-cursor);
  height: 100%;
  margin: 0;
  padding: 0;
}

.Select-module_select__field__vU8L6 {
  display: inline-flex;
  padding: 0;
}

.Select-module_select--multiple__4Bh85 .Select-module_select__field__vU8L6,
.Select-module_select--single__AbWOX .Select-module_select__field__button__Y8Swc {
  align-items: center;
  display: inline-flex;
  flex-direction: row;
  font-family: var(--font_family-default);
  font-size: var(--font_size);
  min-height: var(--field-height-inside);
  position: relative;
  width: 100%;
}

.Select-module_select--single__field__value__czE9k {
  flex: 1;
  padding-left: var(--singleselect_field-padding_left);
  text-align: left;
}

.Select-module_select--multiple__field__values__hCbrG {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  gap: var(--multiselect_items-gap);
  padding: var(--multiselect_items-padding);
}

.Select-module_select--multiple__4Bh85 .Select-module_select__field__button__Y8Swc:focus-visible {
  outline: var(--focus_visible-outline);
}

.Select-module_select__field__arrow-wrapper__G-aKb {
  --arrow-height: calc(
    var(--arrow-size) * var(--arrow-height_to_width_fraction)
  );
  --arrow-vertical_padding: calc(
    (var(--field-height-inside) - var(--arrow-height)) / 2 -
      var(--arrow_wrapper-margin)
  );
  align-items: center;
  border-left: var(--arrow-border_left);
  box-sizing: border-box;
  display: flex;
  height: calc(100% - var(--arrow-vertical_padding));
  margin-bottom: var(--arrow_wrapper-margin);
  margin-left: var(--arrow_wrapper-margin);
  margin-top: var(--arrow_wrapper-margin);
  padding: var(--arrow-vertical_padding) var(--arrow-horizontal_padding);
}

.Select-module_select__field__arrow-wrapper__arrow__sb-Jj {
  background-color: var(--arrow-color);
  clip-path: polygon(
    11.72% 9.93%,
    50% 67.28%,
    88.28% 9.93%,
    97.43% 29.13%,
    50% 96.79%,
    2.57% 29.13%
  );
  display: inline-block;
  height: var(--arrow-height);
  width: var(--arrow-size);
}

.Select-module_select--multiple__field__delete-button__UGXAq {
  background: none;
  border-radius: var(--delete_cross_box-border_radius);
  border: none;
  cursor: var(--interactive_element-cursor);
  height: var(--delete_cross_box-size);
  padding: calc((var(--delete_cross_box-size) - var(--delete_cross-size)) / 2);
  width: var(--delete_cross_box-size);
}

.Select-module_select--multiple__field__delete-button__UGXAq:disabled {
  cursor: auto;
}

.Select-module_select--multiple__field__delete-button__UGXAq:focus-visible {
  outline: var(--focus_visible-outline);
}

.Select-module_select--multiple__field__delete-button__UGXAq:hover:not(:disabled) {
  background-color: var(--delete_cross_box-color-hover);
  --delete_cross-color: var(--delete_cross-color-hover);
}

.Select-module_select--multiple__field__delete-button__UGXAq:disabled {
  --delete_cross-color: var(--delete_cross-color-disabled);
  background-color: transparent;
}

.Select-module_select--multiple__field__delete-button__cross__sKqhI {
  background-color: var(--delete_cross-color);
  clip-path: var(--delete_cross-clip_path);
  display: inline-block;
  height: var(--delete_cross-size);
  width: var(--delete_cross-size);
}

.Select-module_select__option-list__JhHMx {
  background-color: var(--option_list-background_color);
  border-radius: var(--option_list-border_radius);
  border: var(--option_list-border);
  box-shadow: var(--option_list-shadow);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0;
  max-height: calc(
    var(--option-height) * var(--option_list-number_of_visible_options)
  );
  overflow-y: auto;
  padding: 0;
  position: absolute;
  z-index: var(--option_list-z_index);
}

.Select-module_select__option-list__option__DsRkr {
  background-color: var(--option-background_color-default);
  border-color: var(--option-border_color);
  border-style: solid;
  border-width: var(--option-border_width) 0 0 0;
  box-sizing: border-box;
  cursor: var(--interactive_element-cursor);
  display: inline-block;
  min-height: var(--option-height);
  overflow-x: hidden;
  padding-left: var(--option-padding_horizontal);
  padding-right: var(--option-padding_horizontal);
  padding-top: calc(
    (var(--option-height) - (var(--font_size) * var(--line-height))) / 2
  );
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.Select-module_select__option-list__option__DsRkr:hover {
  background-color: var(--option-background_color-hover);
}

.Select-module_select__option-list__option--selected__x17Ux {
  background-color: var(--option-background_color-selected);
}

.Select-module_select__option-list__option--selected__x17Ux:hover {
  background-color: var(--option-background_color-selected-hover);
}

.Select-module_select--multiple__option-list__option--focused__MUTsb {
  outline: var(--option-outline-focus);
}
`);be(`.Tabs-module_tabs__QzIkz {
  --divider-color: #c9c9c9;
  --divider-width: 1px;
  --tab-border_bottom_color-selected: var(--colors-blue-700);
  --tab-border_bottom_color: transparent;
  --tab-border_bottom_width: 4px;
  --tab-font_family: var(--font_family-default);
  --tab-font_size: var(--font_size-component-size-sm);
  --tab-font_weight: 500;
  --tab-height: 32px;
  --tab-text_color-hover: var(--colors-black);
  --tab-text_color-selected: var(--colors-blue-700);
  --tab-text_color: #68707c;
  --tablist-gap: 36px;
  --tablist-margin_horizontal: 2rem;
  --tabpanel-margin_horizontal: 2rem;
  --tabpanel-margin_vertical: 2rem;
  position: relative;
}

.Tabs-module_tabs__tablist__YLXsB {
  display: flex;
  gap: var(--tablist-gap);
  margin: 0 var(--tablist-margin_horizontal);
  position: relative;
  z-index: 1;
}

.Tabs-module_tabs__tablist__tab__5RyZr {
  background-color: transparent;
  border-bottom-color: var(--tab-border_bottom_color);
  border-bottom-style: solid;
  border-width: 0 0 var(--tab-border_bottom_width) 0;
  color: var(--tab-text_color);
  cursor: pointer;
  font-family: var(--tab-font_family);
  font-size: var(--tab-font_size);
  font-weight: var(--tab-font_weight);
  line-height: var(--tab-height);
  margin: 0;
  overflow: hidden;
  padding: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.Tabs-module_tabs__tablist__tab--selected__XugYC {
  --tab-text_color: var(--tab-text_color-selected);
  --tab-border_bottom_color: var(--tab-border_bottom_color-selected);
}

.Tabs-module_tabs__tablist__tab__5RyZr:hover {
  --tab-text_color: var(--tab-text_color-hover);
}

.Tabs-module_tabs__tablist__tab__5RyZr:focus-visible {
  outline: var(--component-input-color-outline-focus) auto 2px;
  outline-offset: 2px;
}

.Tabs-module_tabs__divider__mdVZt {
  border-color: var(--divider-color);
  border-style: solid;
  border-width: var(--divider-width) 0 0 0;
  height: var(--divider-width);
  margin: 0;
  position: absolute;
  top: var(--tab-height);
  width: 100%;
}

.Tabs-module_tabs__tabpanel__6fbCa {
  margin: var(--tabpanel-margin_vertical) var(--tabpanel-margin_horizontal);
}
`);var Iv;be(`.RadioButton-module_radio__-lcP- {
  /* Internal variables */
  --radio-background_color: var(--component-checkbox-color-background-default);
  --radio-border_color: var(--component-checkbox-color-border-default);
  --radio-border_width: var(--component-checkbox-border_width-small);
  --radio-checkmark-color: var(--colors-blue-700);
  --radio-checkmark-display: none;
  --radio-size: var(--component-checkbox-size-width-small);

  /* Variables used by CheckboxRadioTemplate */
  --input_box-border_radius: calc(var(--radio-size) / 2);
  --input_box-size: var(--radio-size);
}

.RadioButton-module_radio--small__YR1Q8 {
  --radio-size: var(--component-checkbox-size-width-small);
}

.RadioButton-module_radio--xsmall__wK2Gd {
  --radio-size: var(--component-checkbox-size-width-xsmall);
}

.RadioButton-module_radio--error__-utI6 {
  --radio-background_color: var(--component-checkbox-color-background-error);
  --radio-border_color: var(--component-checkbox-color-border-error);
}

.RadioButton-module_radio--checked__NKmOP {
  --radio-checkmark-display: inline-block;
}

.RadioButton-module_radio--checked__NKmOP:not(.RadioButton-module_radio--disabled__yBzoh, .RadioButton-module_radio--error__-utI6) {
  --radio-border_color: var(--component-checkbox-color-border-checked);
}

.RadioButton-module_radio__-lcP-:not(.RadioButton-module_radio--disabled__yBzoh, .RadioButton-module_radio--checked__NKmOP):hover {
  --radio-background_color: var(--component-checkbox-color-background-hover);
}

.RadioButton-module_radio__-lcP-:not(.RadioButton-module_radio--disabled__yBzoh, .RadioButton-module_radio--error__-utI6, .RadioButton-module_radio--checked__NKmOP):hover {
  --radio-border_color: var(--component-checkbox-color-border-hover);
}

.RadioButton-module_radio--disabled__yBzoh.RadioButton-module_radio--checked__NKmOP {
  --radio-background_color: var(--component-checkbox-color-border-disabled);
  --radio-border_color: transparent;
}

.RadioButton-module_visible-button__CpJsm {
  background-color: var(--radio-background_color);
  border-color: var(--radio-border_color);
  border-radius: 50%;
  border-style: solid;
  border-width: var(--radio-border_width);
  box-sizing: border-box;
  display: inline-block;
  height: var(--radio-size);
  width: var(--radio-size);
}

.RadioButton-module_visible-button__checkmark__muOzA {
  --radio-checkmark-size: 80%;
  background-color: var(--radio-checkmark-color);
  border-radius: 50%;
  display: var(--radio-checkmark-display);
  height: var(--radio-checkmark-size);
  margin: calc(
    (var(--radio-size) - var(--radio-checkmark-size)) / 2 -
      var(--radio-border_width)
  );
  width: var(--radio-checkmark-size);
}
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Iv||(Iv={}));var Nv,Dv;be(`.RadioGroup-module_radio-group__RXgmX {
  column-gap: var(--gap-x);
  display: flex;
  flex-wrap: wrap;
  row-gap: var(--gap-y);
}

.RadioGroup-module_radio-group--xsmall__rMTu- {
  --gap-x: var(--component-checkbox-group-space-gap-x-xsmall);
  --gap-y: var(--component-checkbox-group-space-gap-y-xsmall);
}

.RadioGroup-module_radio-group--small__6KkpL {
  --gap-x: var(--component-checkbox-group-space-gap-x-small);
  --gap-y: var(--component-checkbox-group-space-gap-y-small);
}

.RadioGroup-module_radio-group--vertical__YgbUL {
  flex-direction: column;
}

.RadioGroup-module_radio-group--horizontal__gjKVV {
  flex-direction: row;
}
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Nv||(Nv={})),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(Dv||(Dv={}));function Xp(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}var Gc,xb={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/Gc=xb,function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var a=typeof i;if(a==="string"||a==="number")n.push(i);else if(Array.isArray(i)){if(i.length){var l=t.apply(null,i);l&&n.push(l)}}else if(a==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){n.push(i.toString());continue}for(var c in i)e.call(i,c)&&i[c]&&n.push(c)}}}return n.join(" ")}Gc.exports?(t.default=t,Gc.exports=t):window.classNames=t}();var hn=xb.exports;const Mv=e=>{var{svgIconComponent:t}=e,n=Xp(e,["svgIconComponent"]);return N.isValidElement(t)?N.cloneElement(t,Object.assign({},n)):null};function zt(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var Of,zf,Tf,er={button:"Button-module_button__2ZuB7",icon:"Button-module_icon__-43u5",small:"Button-module_small__l39oh",medium:"Button-module_medium__KTxdk",large:"Button-module_large__6bsb7",fullWidth:"Button-module_fullWidth__36oJT",dashedBorder:"Button-module_dashedBorder__500FL",onlyIcon:"Button-module_onlyIcon__lENu3",outline:"Button-module_outline__F5jq-",quiet:"Button-module_quiet__1KlhF",filled:"Button-module_filled__inpPb",primary:"Button-module_primary__s1sM6",secondary:"Button-module_secondary__R0waJ",success:"Button-module_success__w6qB6",danger:"Button-module_danger__V4fX8",inverted:"Button-module_inverted__VD6YO"};zt(`.Button-module_button__2ZuB7 {\r
    --icon-size: var(--component-button-size-icon-small);\r
    --button-vertical-padding: var(--component-button-space-padding-x-small);\r
    --border-radius: 3px;\r
    --font-and-icon-color: var(--component-button-filled-color-text-all);\r
\r
    all: initial; /* reset all styles to default, to avoid style overrides/surprises caused by other css (from Design system v1 f.ex) */\r
    align-items: center;\r
    border-radius: var(--border-radius);\r
    border: var(--component-button-border_width-default) solid transparent;\r
    box-sizing: border-box;\r
    color: var(--font-and-icon-color);\r
    cursor: pointer;\r
    display: flex;\r
    fill: var(--font-and-icon-color);\r
    font-family: inherit;\r
    justify-content: center;\r
    letter-spacing: var(--typography-default-letter-spacing);\r
    padding: 0 var(--button-vertical-padding);\r
    text-align: center;\r
}\r
\r
.Button-module_button__2ZuB7:focus-visible {\r
    outline: var(--interactive_components-colors-focus_outline) solid\r
    var(--border_width-standard);\r
    outline-offset: var(--border_width-standard);\r
}\r
\r
.Button-module_button__2ZuB7:focus:not(:focus-visible) {\r
    outline: none;\r
}\r
\r
.Button-module_button__2ZuB7:disabled {\r
    cursor: auto;\r
    opacity: var(--interactive_components-colors-disabled-opacity);\r
}\r
\r
.Button-module_icon__-43u5 {\r
    height: var(--icon-size);\r
    width: var(--icon-size);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_small__l39oh {\r
    height: var(--component-button-size-height-small);\r
    font-size: var(--font_size-300);\r
    --icon-size: var(--component-button-size-icon-small);\r
    --button-vertical-padding: var(--component-button-space-padding-x-small);\r
    gap: var(--component-button-space-gap-small);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_medium__KTxdk {\r
    height: var(--component-button-size-height-medium);\r
    min-width: var(--component-button-size-height-medium);\r
    font-size: var(--font_size-400-breakpoint_md);\r
    --icon-size: var(--component-button-size-icon-medium);\r
    --button-vertical-padding: var(--component-button-space-padding-x-medium);\r
    gap: var(--component-button-space-gap-medium);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_large__6bsb7 {\r
    height: var(--component-button-size-height-large);\r
    min-width: var(--component-button-size-height-large);\r
    font-size: var(--font_size-600-breakpoint_md);\r
    --icon-size: var(--component-button-size-icon-large);\r
    --button-vertical-padding: var(--component-button-space-padding-x-large);\r
    gap: var(--component-button-space-gap-large);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_fullWidth__36oJT {\r
    width: 100%;\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_dashedBorder__500FL {\r
    border-style: dashed;\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_onlyIcon__lENu3 {\r
    padding: 0.5rem;\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq- {\r
    background-color: transparent;\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF {\r
    --border-radius: 50px;\r
    padding: 0 calc(var(--button-vertical-padding) * 2 / 3);\r
    background-color: transparent;\r
}\r
\r
/* Filled button colors */\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_primary__s1sM6 {\r
    background: var(--component-button-filled-primary-color-background-default);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_primary__s1sM6:not(:disabled):hover {\r
    background: var(--component-button-filled-primary-color-background-hover);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_primary__s1sM6:not(:disabled):active {\r
    background: var(--component-button-filled-primary-color-background-pressed);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_secondary__R0waJ {\r
    background: var(--component-button-filled-primary-color-background-pressed);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_secondary__R0waJ:not(:disabled):hover {\r
    background: var(--colors-blue-800);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_secondary__R0waJ:not(:disabled):active {\r
    background: var(--colors-blue-950);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_success__w6qB6 {\r
    background: var(--component-button-filled-success-color-background-default);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_success__w6qB6:not(:disabled):hover {\r
    background: var(--component-button-filled-success-color-background-hover);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_success__w6qB6:not(:disabled):active {\r
    background: var(--component-button-filled-success-color-background-pressed);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_danger__V4fX8 {\r
    background: var(--component-button-filled-danger-color-background-default);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_danger__V4fX8:not(:disabled):hover {\r
    background: var(--component-button-filled-danger-color-background-hover);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_danger__V4fX8:not(:disabled):active {\r
    background: var(--colors-red-800);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_inverted__VD6YO {\r
    --font-and-icon-color: var(--colors-blue-900);\r
    background: var(--colors-white);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_inverted__VD6YO:not(:disabled):hover {\r
    --font-and-icon-color: var(--colors-blue-900);\r
    background: rgba(255, 255, 255, 0.9);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_inverted__VD6YO:not(:disabled):active {\r
    --font-and-icon-color: var(--colors-white);\r
    background: rgba(255, 255, 255, 0.1);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_inverted__VD6YO:focus-visible {\r
    outline-color: var(--colors-white);\r
}\r
\r
/* Outline button colors */\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_primary__s1sM6 {\r
    --font-and-icon-color: var(--component-button-outline-primary-color-text-default);\r
    border-color: var(--component-button-outline-primary-color-border-default);\r
    background: var(--component-button-outline-primary-color-background-default);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_primary__s1sM6:not(:disabled):hover {\r
    --font-and-icon-color: var(--colors-blue-800);\r
    background: var(--component-button-outline-primary-color-background-hover);\r
    border-color: var(--component-button-outline-primary-color-border-hover);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_primary__s1sM6:not(:disabled):active {\r
    --font-and-icon-color: var(--component-button-outline-primary-color-text-pressed);\r
    background: var(--component-button-outline-primary-color-background-pressed);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_secondary__R0waJ {\r
    --font-and-icon-color: var(--colors-blue-900);\r
    background: var(--colors-white);\r
    border-color: var(--colors-blue-900);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_secondary__R0waJ:not(:disabled):hover {\r
    background: var(--colors-blue-200);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_secondary__R0waJ:not(:disabled):active {\r
    --font-and-icon-color: var(--colors-white);\r
    background: var(--colors-blue-900);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_success__w6qB6 {\r
    --font-and-icon-color: var(--colors-green-700);\r
    background: var(--colors-white);\r
    border-color: var(--colors-green-700);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_success__w6qB6:not(:disabled):hover {\r
    --font-and-icon-color: var(--colors-green-800);\r
    background: var(--colors-green-300);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_success__w6qB6:not(:disabled):active {\r
    --font-and-icon-color: var(--colors-white);\r
    background: var(--colors-green-700);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_danger__V4fX8 {\r
    --font-and-icon-color: var(--colors-red-500);\r
    background: var(--colors-white);\r
    border-color: var(--colors-red-500);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_danger__V4fX8:not(:disabled):hover {\r
    --font-and-icon-color: var(--colors-red-700);\r
    background: var(--colors-red-200);\r
    border-color: var(--colors-red-700);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_danger__V4fX8:not(:disabled):active {\r
    --font-and-icon-color: var(--colors-white);\r
    background: var(--colors-red-500);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_inverted__VD6YO {\r
    --font-and-icon-color: var(--colors-white);\r
    border-color: var(--colors-white);\r
    background: transparent;\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_inverted__VD6YO:not(:disabled):hover {\r
    background: rgba(255, 255, 255, 0.1);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_inverted__VD6YO:not(:disabled):active {\r
    --font-and-icon-color: var(--colors-blue-900);\r
    background: var(--colors-white);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_inverted__VD6YO:focus-visible {\r
    outline-color: var(--colors-white);\r
}\r
\r
/* Quiet button colors */\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_primary__s1sM6 {\r
    --font-and-icon-color: var(--component-button-quiet-primary-color-text-default);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_primary__s1sM6:not(:disabled):hover {\r
    --font-and-icon-color: var(--colors-blue-800);\r
    background: var(--component-button-quiet-primary-color-background-hover);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_primary__s1sM6:not(:disabled):active {\r
    --font-and-icon-color: var(--component-button-filled-color-text-all);\r
    background: var(--component-button-quiet-primary-color-background-pressed);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_secondary__R0waJ {\r
    --font-and-icon-color: var(--colors-blue-900);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_secondary__R0waJ:not(:disabled):hover {\r
    background: var(--colors-neutral-400);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_secondary__R0waJ:not(:disabled):active {\r
    --font-and-icon-color: var(--component-button-filled-color-text-all);\r
    background: var(--colors-blue-900);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_success__w6qB6 {\r
    --font-and-icon-color: var(--colors-green-700);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_success__w6qB6:not(:disabled):hover {\r
    --font-and-icon-color: var(--colors-green-800);\r
    background: var(--colors-green-300);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_success__w6qB6:not(:disabled):active {\r
    --font-and-icon-color: var(--component-button-filled-color-text-all);\r
    background: var(--colors-green-900);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_danger__V4fX8 {\r
    --font-and-icon-color: var(--colors-red-600);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_danger__V4fX8:not(:disabled):hover {\r
    --font-and-icon-color: var(--colors-red-800);\r
    background: var(--colors-red-200);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_danger__V4fX8:not(:disabled):active {\r
    --font-and-icon-color: var(--component-button-filled-color-text-all);\r
    background: var(--colors-red-800);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_inverted__VD6YO {\r
    --font-and-icon-color: var(--colors-white);\r
    background: transparent;\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_inverted__VD6YO:not(:disabled):hover {\r
    --font-and-icon-color: var(--colors-blue-900);\r
    background: rgba(255, 255, 255, 0.9);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_inverted__VD6YO:not(:disabled):active {\r
    --font-and-icon-color: var(--colors-blue-900);\r
    background: var(--colors-white);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_inverted__VD6YO:focus-visible {\r
    outline-color: var(--colors-white);\r
}`),function(e){e.Small="small",e.Medium="medium",e.Large="large"}(Of||(Of={})),function(e){e.Primary="primary",e.Secondary="secondary",e.Success="success",e.Danger="danger",e.Inverted="inverted"}(zf||(zf={})),function(e){e.Filled="filled",e.Outline="outline",e.Quiet="quiet"}(Tf||(Tf={}));N.forwardRef((e,t)=>{var{children:n,color:r=zf.Primary,variant:i=Tf.Filled,size:a=Of.Small,fullWidth:l=!1,dashedBorder:c=!1,iconPlacement:d="left",icon:p,type:_="button",className:v}=e,m=Xp(e,["children","color","variant","size","fullWidth","dashedBorder","iconPlacement","icon","type","className"]);return $.createElement("button",Object.assign({},m,{ref:t,className:hn(er.button,er[a],er[i],er[r],{[er.fullWidth]:l},{[er.dashedBorder]:c},{[er.onlyIcon]:!n&&p},v),type:_}),p&&d==="left"&&$.createElement(Mv,{svgIconComponent:p,className:er.icon}),n,p&&d==="right"&&$.createElement(Mv,{svgIconComponent:p,className:er.icon}))});var pR="ErrorMessage-module_errorMessageWrapper__rSdCu";zt(`.ErrorMessage-module_errorMessageWrapper__rSdCu {\r
  color: var(--component-error_message-color-text);\r
  font-size: var(--component-error_message-font_size-xs);\r
}\r
`);const hR=({id:e,children:t,ariaLabel:n})=>$.createElement("div",{"aria-label":n,className:pR,"data-testid":"ErrorMessage",id:e,role:"alertdialog"},t);function Fv(e,t){N.useEffect(()=>(document.addEventListener(e,t),()=>document.removeEventListener(e,t)),[e,t])}function Xc(e,t){N.useEffect(()=>{const n=r=>{r.key===e&&t()};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[e,t])}function mR(e){const t=N.useRef();return N.useEffect(()=>{t.current=e},[e]),t.current}const Yp=(e,t)=>{const n=N.useRef(!0);N.useEffect(()=>{if(!n.current)return e();n.current=!1},t)};function wb(e,t){if(e===t)return!0;if(e===void 0||t===void 0||e.length!==t.length)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}function Sb(e){return e.length===new Set(e).size}var _R="Tabs-module_tabs__QzIkz",vR="Tabs-module_tablist__WR6ag",gR="Tabs-module_tab__IdDYc",yR="Tabs-module_selected__TxfYv",bR="Tabs-module_divider__-r5Cd",xR="Tabs-module_tabpanel__0vR1c";zt(`@import 'https://altinncdn.no/fonts/altinn-din/altinn-din.css';\r
\r
.Tabs-module_tabs__QzIkz {\r
  --divider-color: #c9c9c9;\r
  --divider-width: 1px;\r
  --tab-border_bottom_color-selected: var(--colors-blue-700);\r
  --tab-border_bottom_color: transparent;\r
  --tab-border_bottom_width: 4px;\r
  --tab-font_family: var(--font_family-default);\r
  --tab-font_size: var(--font_size-component-size-sm);\r
  --tab-font_weight: 500;\r
  --tab-height: 32px;\r
  --tab-text_color-hover: var(--colors-black);\r
  --tab-text_color-selected: var(--colors-blue-700);\r
  --tab-text_color: #68707c;\r
  --tablist-gap: 1.5rem;\r
  --tablist-margin_horizontal: 20px;\r
  --tabpanel-margin_horizontal: 20px;\r
  --tabpanel-margin_vertical: 20px;\r
  position: relative;\r
}\r
\r
.Tabs-module_tablist__WR6ag {\r
  display: flex;\r
  gap: var(--tablist-gap);\r
  margin: 0 var(--tablist-margin_horizontal);\r
  position: relative;\r
  z-index: 1;\r
}\r
\r
.Tabs-module_tab__IdDYc {\r
  background-color: transparent;\r
  border-bottom-color: var(--tab-border_bottom_color);\r
  border-bottom-style: solid;\r
  border-width: 0 0 var(--tab-border_bottom_width) 0;\r
  color: var(--tab-text_color);\r
  cursor: pointer;\r
  font-family: var(--tab-font_family);\r
  font-size: var(--tab-font_size);\r
  font-weight: var(--tab-font_weight);\r
  line-height: var(--tab-height);\r
  margin: 0;\r
  overflow: hidden;\r
  padding: 0;\r
  text-overflow: ellipsis;\r
  white-space: nowrap;\r
}\r
\r
.Tabs-module_tab__IdDYc.Tabs-module_selected__TxfYv {\r
  --tab-text_color: var(--tab-text_color-selected);\r
  --tab-border_bottom_color: var(--tab-border_bottom_color-selected);\r
}\r
\r
.Tabs-module_tab__IdDYc:hover {\r
  --tab-text_color: var(--tab-text_color-hover);\r
}\r
\r
.Tabs-module_tab__IdDYc:focus-visible {\r
  outline: var(--component-input-color-outline-focus) auto 2px;\r
  outline-offset: 2px;\r
}\r
\r
.Tabs-module_divider__-r5Cd {\r
  border-color: var(--divider-color);\r
  border-style: solid;\r
  border-width: var(--divider-width) 0 0 0;\r
  height: var(--divider-width);\r
  margin: 0;\r
  position: absolute;\r
  top: var(--tab-height);\r
  width: 100%;\r
}\r
\r
.Tabs-module_tabpanel__0vR1c {\r
  margin: var(--tabpanel-margin_vertical) var(--tabpanel-margin_horizontal);\r
}\r
`);const Av=e=>e.replace(/\s/,"_"),wR=({activeTab:e,items:t,onChange:n})=>{const r=N.useId(),i=t.map(({name:S,content:O,value:b,tabId:g,panelId:k})=>{const E=b??S;return{name:S,content:O,value:E,tabId:g??r+Av(E)+"-tab",panelId:k??r+Av(E)+"-panel"}});if(!Sb(i.map(({value:S})=>S)))throw Error("Each tab value must be unique.");if(e!==void 0&&!i.some(S=>S.value===e))throw Error("The given active tab value must exist in the list of items.");const a=S=>i.findIndex(O=>O.value===S),l=e??i[0].value,[c,d]=N.useState(l),[p,_]=N.useState(a(l));N.useEffect(()=>d(l),[l]);const v=N.useRef(null),m=i.length-1;Yp(()=>{var S;(S=v.current)===null||S===void 0||S.querySelectorAll('[role="tab"]')[p].focus()},[p]);const y=S=>{c!==S&&n&&n(S),d(S),_(a(S))},w=S=>O=>{switch(O.key){case"ArrowRight":p!==void 0&&_(p===m?0:p+1);break;case"ArrowLeft":p!==void 0&&_(p===0?m:p-1);break;case"Space":y(S)}};return $.createElement("div",{className:_R},$.createElement("div",{className:vR,ref:v,role:"tablist"},i.map((S,O)=>{const b=S.value===c;return $.createElement("button",{"aria-controls":S.panelId,"aria-selected":b,className:hn(gR,b&&yR),id:S.tabId,key:S.value,onClick:()=>y(S.value),onKeyDown:w(S.value),role:"tab",tabIndex:p===O?0:-1},S.name)})),$.createElement("hr",{className:bR}),i.map(S=>$.createElement("div",{className:xR,"aria-labelledby":S.tabId,hidden:S.value!==c,id:S.panelId,key:S.panelId,role:"tabpanel"},S.content)))};var Fa,$o={fieldSet:"FieldSet-module_fieldSet__GgktD",xsmall:"FieldSet-module_xsmall__y9foq",legend:"FieldSet-module_legend__PjhoV",description:"FieldSet-module_description__XKHS-",content:"FieldSet-module_content__aZp-0",errorMessage:"FieldSet-module_errorMessage__nDaJ7"};zt(`.FieldSet-module_fieldSet__GgktD {\r
  --color: var(--component-checkbox-color-text-default);\r
  --content-margin_top: var(--component-fieldset-space-gap-y-small);\r
  --description-color: var(--component-field_description-color-text-default);\r
  --description-margin_top: var(--component-field_description-space-top-small);\r
  --error_message-margin_top: var(--component-fieldset-space-gap-y-small);\r
  --font_size: var(--component-checkbox-font_size-sm);\r
\r
  color: var(--color);\r
  border: 0;\r
  font-size: var(--font_size);\r
  line-height: var(--typography-default-line-height);\r
  margin: 0;\r
  padding: 0;\r
}\r
\r
.FieldSet-module_xsmall__y9foq {\r
  --content-margin_top: var(--component-fieldset-space-gap-y-xsmall);\r
  --description-margin_top: var(--component-field_description-space-top-xsmall);\r
  --error_message-margin_top: var(--component-fieldset-space-gap-y-xsmall);\r
  --font_size: var(--component-checkbox-font_size-xs);\r
}\r
\r
.FieldSet-module_fieldSet__GgktD:disabled {\r
  opacity: var(--interactive_components-colors-disabled-opacity);\r
}\r
\r
.FieldSet-module_fieldSet__GgktD:disabled * {\r
  opacity: 1;\r
}\r
\r
.FieldSet-module_legend__PjhoV {\r
  font-weight: bold;\r
  padding: 0;\r
}\r
\r
.FieldSet-module_description__XKHS- {\r
  color: var(--description-color);\r
  margin: 0;\r
}\r
\r
.FieldSet-module_legend__PjhoV + .FieldSet-module_description__XKHS- {\r
  margin-top: var(--description-margin_top);\r
}\r
\r
.FieldSet-module_content__aZp-0:not(:first-child) {\r
  margin-top: var(--content-margin_top);\r
}\r
\r
.FieldSet-module_errorMessage__nDaJ7 {\r
  margin-top: var(--error_message-margin_top);\r
}\r
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Fa||(Fa={}));const SR=({children:e,className:t,contentClassName:n,description:r,disabled:i,error:a,legend:l,size:c=Fa.Small})=>$.createElement("fieldset",{className:hn($o.fieldSet,$o[c],t),disabled:i},l&&$.createElement("legend",{className:$o.legend},l),r&&$.createElement("p",{className:$o.description},r),$.createElement("div",{className:hn($o.content,n)},e),a&&$.createElement("div",{className:$o.errorMessage},$.createElement(hR,null,a)));var jl,$n={template:"CheckboxRadioTemplate-module_template__CbnTf",xsmall:"CheckboxRadioTemplate-module_xsmall__JkKoU",small:"CheckboxRadioTemplate-module_small__7fCnT",disabled:"CheckboxRadioTemplate-module_disabled__AUMha",clickable:"CheckboxRadioTemplate-module_clickable__iw4S2",inputWrapper:"CheckboxRadioTemplate-module_inputWrapper__K4Urn",input:"CheckboxRadioTemplate-module_input__O2CzZ",visibleBox:"CheckboxRadioTemplate-module_visibleBox__mj4RB",labelAndDescription:"CheckboxRadioTemplate-module_labelAndDescription__NcntT",label:"CheckboxRadioTemplate-module_label__hsc7R",description:"CheckboxRadioTemplate-module_description__FX9dz"};zt(`.CheckboxRadioTemplate-module_template__CbnTf {\r
  --click-cursor: pointer;\r
  --description-color: var(--component-field_description-color-text-default);\r
  --label-color: var(--component-checkbox-color-text-default);\r
  --opacity: 1;\r
\r
  border-radius: var(--input_box-border_radius);\r
  display: inline-flex;\r
  flex-direction: row;\r
  font-size: var(--font_size);\r
  gap: var(--gap);\r
  line-height: var(--typography-default-line-height);\r
  opacity: var(--opacity);\r
}\r
\r
.CheckboxRadioTemplate-module_template__CbnTf.CheckboxRadioTemplate-module_xsmall__JkKoU {\r
  --description-margin_top: var(--component-field_description-space-top-xsmall);\r
  --font_size: var(--component-checkbox-font_size-xs);\r
  --gap: var(--component-checkbox-space-gap-xsmall);\r
}\r
\r
.CheckboxRadioTemplate-module_template__CbnTf.CheckboxRadioTemplate-module_small__7fCnT {\r
  --description-margin_top: var(--component-field_description-space-top-small);\r
  --font_size: var(--component-checkbox-font_size-sm);\r
  --gap: var(--component-checkbox-space-gap-small);\r
}\r
\r
.CheckboxRadioTemplate-module_template__CbnTf:not(.CheckboxRadioTemplate-module_disabled__AUMha):hover {\r
  --label-color: var(--component-checkbox-color-text-hover);\r
}\r
\r
.CheckboxRadioTemplate-module_template__CbnTf.CheckboxRadioTemplate-module_disabled__AUMha {\r
  --click-cursor: auto;\r
  --opacity: var(--interactive_components-colors-disabled-opacity);\r
}\r
\r
.CheckboxRadioTemplate-module_clickable__iw4S2  {\r
  cursor: var(--click-cursor);\r
}\r
\r
.CheckboxRadioTemplate-module_inputWrapper__K4Urn {\r
  display: inline-block;\r
  height: var(--input_box-size);\r
  position: relative;\r
}\r
\r
.CheckboxRadioTemplate-module_input__O2CzZ {\r
  height: 0;\r
  opacity: 0;\r
  position: absolute;\r
  width: 0;\r
}\r
\r
.CheckboxRadioTemplate-module_visibleBox__mj4RB {\r
  display: inline-block;\r
  flex: 0 0 var(--input_box-size);\r
  height: var(--input_box-size);\r
  position: relative;\r
  width: var(--input_box-size);\r
}\r
\r
.CheckboxRadioTemplate-module_labelAndDescription__NcntT {\r
  display: inline-flex;\r
  flex-direction: column;\r
  gap: var(--description-margin_top);\r
\r
  /* Center-align input box with the first line in the label */\r
  margin-top: calc(\r
    (\r
        var(--input_box-size) -\r
          (var(--typography-default-line-height) * var(--font_size))\r
      ) / 2\r
  );\r
}\r
\r
.CheckboxRadioTemplate-module_label__hsc7R {\r
  color: var(--label-color);\r
}\r
\r
.CheckboxRadioTemplate-module_description__FX9dz {\r
  color: var(--description-color);\r
}\r
\r
@supports not selector(:has(:focus-visible)) {\r
  .CheckboxRadioTemplate-module_template__CbnTf:not(.CheckboxRadioTemplate-module_disabled__AUMha):focus-within {\r
    outline: 2px solid var(--interactive_components-colors-focus_outline);\r
    outline-offset: 2px;\r
  }\r
}\r
\r
.CheckboxRadioTemplate-module_template__CbnTf:not(.CheckboxRadioTemplate-module_disabled__AUMha):has(:focus-visible) {\r
  outline: 2px solid var(--interactive_components-colors-focus_outline);\r
  outline-offset: 2px;\r
}\r
`),function(e){e.Xsmall="xsmall",e.Small="small"}(jl||(jl={}));const kR=({checked:e,children:t,className:n,description:r,disabled:i,hideInput:a,hideLabel:l,inputId:c,label:d,name:p,onChange:_,presentation:v,size:m,type:y,value:w})=>{const S=N.useId(),O=c??"input-"+S,b=d?`${O}-label`:void 0,g=r?`${O}-description`:void 0,k=d&&!l,E=!v||typeof d!="object"&&typeof r!="object";return $.createElement(jv,{className:hn($n.template,$n[m],i&&$n.disabled,n),htmlFor:O,isLabel:E},!a&&$.createElement(jv,{className:$n.inputWrapper,htmlFor:O,isLabel:!E},$.createElement("input",{"aria-describedby":g,"aria-label":k||typeof d!="string"?void 0:d,"aria-labelledby":k?b:void 0,checked:e!=null&&e,className:$n.input,disabled:i,id:O,name:p,onChange:i?void 0:_,role:v?"presentation":void 0,type:y,value:w}),$.createElement("span",{className:$n.visibleBox},t)),(k||r)&&$.createElement("span",{className:$n.labelAndDescription},k&&$.createElement("span",{className:$n.label,id:b},d),r&&$.createElement("span",{className:$n.description,id:g},r)))},jv=({children:e,className:t,htmlFor:n,isLabel:r})=>r?$.createElement("label",{className:t+" "+$n.clickable,htmlFor:n},e):$.createElement("span",{className:t},e);var CR="Checkbox-module_checkbox__lSeQj",PR="Checkbox-module_compact__Cl41-",ER="Checkbox-module_error__E-bmD",OR="Checkbox-module_checked__3yAq6",zR="Checkbox-module_disabled__x7-eg",TR="Checkbox-module_readOnly__FamUn",LR="Checkbox-module_visibleBox__G7q8H",BR="Checkbox-module_checkmark__ES9N8";zt(`.Checkbox-module_checkbox__lSeQj {\r
  /* Internal variables */\r
  --checkbox-background_color: var(\r
    --component-checkbox-color-background-default\r
  );\r
  --checkbox-border_color: var(--component-checkbox-color-border-default);\r
  --checkbox-border_radius: var(--interactive_components-border_radius-normal);\r
  --checkbox-border_width: var(--component-checkbox-border_width-small);\r
  --checkbox-checkmark-display: none;\r
  --checkbox-height: var(--component-checkbox-size-height-small);\r
  --checkbox-width: var(--component-checkbox-size-width-small);\r
\r
  /* Variables used by CheckboxRadioTemplate */\r
  --input_box-size: var(--checkbox-height);\r
  --input_box-border_radius: var(--checkbox-border_radius);\r
}\r
\r
.Checkbox-module_checkbox__lSeQj.Checkbox-module_compact__Cl41- {\r
  --checkbox-border_width: var(--component-checkbox-border_width-xsmall);\r
  --checkbox-height: var(--component-checkbox-size-height-xsmall);\r
  --checkbox-width: var(--component-checkbox-size-width-xsmall);\r
}\r
\r
.Checkbox-module_checkbox__lSeQj.Checkbox-module_error__E-bmD {\r
  --checkbox-background_color: var(--component-checkbox-color-background-error);\r
  --checkbox-border_color: var(--component-checkbox-color-border-error);\r
}\r
\r
.Checkbox-module_checkbox__lSeQj.Checkbox-module_checked__3yAq6 {\r
  --checkbox-checkmark-display: inline-block;\r
}\r
\r
.Checkbox-module_checkbox__lSeQj.Checkbox-module_checked__3yAq6:not(.Checkbox-module_disabled__x7-eg) {\r
  --checkbox-background_color: var(\r
    --component-checkbox-color-background-checked\r
  );\r
  --checkbox-border_color: var(--component-checkbox-color-border-checked);\r
}\r
\r
.Checkbox-module_checkbox__lSeQj:not(.Checkbox-module_disabled__x7-eg, .Checkbox-module_checked__3yAq6):hover {\r
  --checkbox-background_color: var(--component-checkbox-color-background-hover);\r
}\r
\r
.Checkbox-module_checkbox__lSeQj:not(.Checkbox-module_disabled__x7-eg, .Checkbox-module_error__E-bmD, .Checkbox-module_checked__3yAq6):hover {\r
  --checkbox-border_color: var(--component-checkbox-color-border-hover);\r
}\r
\r
.Checkbox-module_checkbox__lSeQj.Checkbox-module_disabled__x7-eg.Checkbox-module_checked__3yAq6 {\r
  --checkbox-background_color: var(--component-checkbox-color-border-disabled);\r
  --checkbox-border_color: transparent;\r
}\r
\r
.Checkbox-module_checkbox__lSeQj.Checkbox-module_readOnly__FamUn {\r
  --cursor: auto;\r
}\r
\r
.Checkbox-module_visibleBox__G7q8H {\r
  background-color: var(--checkbox-background_color);\r
  border-color: var(--checkbox-border_color);\r
  border-radius: var(--checkbox-border_radius);\r
  border-style: solid;\r
  border-width: var(--checkbox-border_width);\r
  box-sizing: border-box;\r
  display: inline-block;\r
  height: var(--checkbox-height);\r
  width: var(--checkbox-width);\r
}\r
\r
.Checkbox-module_checkmark__ES9N8 {\r
  background-color: white;\r
  clip-path: polygon(\r
    47.11% 56.51%,\r
    30.37% 38.94%,\r
    21.5% 48.09%,\r
    47.11% 74.54%,\r
    81.5% 39.16%,\r
    72.63% 30%\r
  );\r
  display: var(--checkbox-checkmark-display);\r
  height: 100%;\r
  width: 100%;\r
}\r
`);const kb=({checkboxId:e,checked:t,compact:n,description:r,disabled:i,error:a,hideLabel:l,label:c,name:d,onChange:p,presentation:_,readOnly:v})=>$.createElement(kR,{checked:t,className:hn(CR,t&&OR,a&&ER,i&&zR,n&&PR,v&&TR),description:r,disabled:i,hideInput:v,hideLabel:l,inputId:e,label:c,name:d,onChange:p,presentation:_,size:n?jl.Xsmall:jl.Small,type:"checkbox"},$.createElement("span",{className:LR},$.createElement("span",{className:BR})));var Aa,Yc={checkboxGroup:"CheckboxGroup-module_checkboxGroup__LIGFC",compact:"CheckboxGroup-module_compact__IPuN8",vertical:"CheckboxGroup-module_vertical__R-l07",horizontal:"CheckboxGroup-module_horizontal__myCqF"};zt(`.CheckboxGroup-module_checkboxGroup__LIGFC {\r
  --gap-x: var(--component-checkbox-group-space-gap-x-small);\r
  --gap-y: var(--component-checkbox-group-space-gap-y-small);\r
\r
  column-gap: var(--gap-x);\r
  display: flex;\r
  flex-wrap: wrap;\r
  row-gap: var(--gap-y);\r
}\r
\r
.CheckboxGroup-module_checkboxGroup__LIGFC.CheckboxGroup-module_compact__IPuN8 {\r
  --gap-x: var(--component-checkbox-group-space-gap-x-xsmall);\r
  --gap-y: var(--component-checkbox-group-space-gap-y-xsmall);\r
}\r
\r
.CheckboxGroup-module_checkboxGroup__LIGFC.CheckboxGroup-module_vertical__R-l07 {\r
  flex-direction: column;\r
}\r
\r
.CheckboxGroup-module_checkboxGroup__LIGFC.CheckboxGroup-module_horizontal__myCqF {\r
  flex-direction: row;\r
}\r
`),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(Aa||(Aa={}));const RR=(e,t)=>{switch(t.type){case"check":return e.concat([t.name]);case"uncheck":return e.filter(n=>n!==t.name);case"reset":return t.state}},$v=e=>e.filter(({checked:t})=>t).map(({name:t})=>t),Uv=({compact:e,description:t,disabled:n,error:r,items:i,legend:a,onChange:l,presentation:c,variant:d=Aa.Vertical})=>{if(!Sb(i.map(m=>m.name)))throw Error("Each name in the checkbox group must be unique.");const[p,_]=N.useReducer(RR,$v(i));N.useEffect(()=>_({type:"reset",state:$v(i)}),[i]);const v=mR(p);return Yp(()=>{l&&!n&&!wb(v,p)&&l(p)},[p,l,n]),$.createElement(SR,{contentClassName:hn(Yc.checkboxGroup,Yc[d],e&&Yc.compact),description:t,disabled:n,error:r,legend:a,size:e?Fa.Xsmall:Fa.Small},i.map(m=>$.createElement(kb,{checkboxId:m.checkboxId,checked:p.includes(m.name),compact:e,description:m.description,disabled:n||m.disabled,error:!!r,key:m.name,label:m.label,name:m.name,onChange:y=>{_({type:y.target.checked?"check":"uncheck",name:m.name})},presentation:c})))};N.createContext(null);N.createContext(null);function Jp(e){return N.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})},e)}var Hv,Lf={popover:"Popover-module_popover__E9K9X",default:"Popover-module_default__TlPJp",info:"Popover-module_info__VKCAP",warning:"Popover-module_warning__o27i9",danger:"Popover-module_danger__9bIyx",arrow:"Popover-module_arrow__5A-0e"};zt(`.Popover-module_popover__E9K9X {\r
  width: max-content;\r
  z-index: 1;\r
  padding: 12px;\r
  max-width: calc(100vw - 20px);\r
  border: 1px solid gray;\r
  border-radius: 3px;\r
  box-shadow: 0px 3px 6px 0px #00000033;\r
}\r
\r
.Popover-module_popover__E9K9X:focus-visible {\r
  outline: var(--interactive_components-colors-focus_outline) solid\r
  var(--border_width-standard);\r
  outline-offset: var(--border_width-standard);\r
}\r
\r
.Popover-module_popover__E9K9X:focus:not(:focus-visible) {\r
  outline: none;\r
}\r
\r
.Popover-module_popover__E9K9X.Popover-module_default__TlPJp {\r
  background-color: #FFFFFF;\r
  border-color: #68707C;\r
}\r
\r
.Popover-module_popover__E9K9X.Popover-module_info__VKCAP {\r
  background-color: #E6EFF8;\r
  border-color: #004C8F;\r
}\r
\r
.Popover-module_popover__E9K9X.Popover-module_warning__o27i9 {\r
  background-color: #FFFBE6;\r
  border-color: #CC7005;\r
}\r
\r
.Popover-module_popover__E9K9X.Popover-module_danger__9bIyx {\r
  background-color: #F9D5DB;\r
  border-color: #B3253A;\r
}\r
\r
.Popover-module_arrow__5A-0e {\r
  position: absolute;\r
  z-index: -1;\r
  transform: rotate(45deg);\r
  background-color: inherit;\r
  border: 1px solid;\r
  border-color: inherit;\r
  width: 12px;\r
  height: 12px;\r
}\r
\r
.Popover-module_popover__E9K9X[data-placement^="top"] > .Popover-module_arrow__5A-0e {\r
  box-shadow: 3px 3px 6px 0px #00000033;\r
	clip-path: inset(0px -10px -10px 0px);\r
  border-left-color: transparent;\r
  border-top-color: transparent;\r
}\r
\r
.Popover-module_popover__E9K9X[data-placement^="bottom"] > .Popover-module_arrow__5A-0e {\r
  clip-path: inset(-10px 0px 0px -10px);\r
  border-bottom-color: transparent;\r
  border-right-color: transparent;\r
}\r
\r
.Popover-module_popover__E9K9X[data-placement^="left"] > .Popover-module_arrow__5A-0e {\r
  box-shadow: 1px 3px 6px 0px #00000033;\r
	clip-path: inset(-10px -10px 0px 0px);\r
  border-left-color: transparent;\r
  border-bottom-color: transparent;\r
}\r
\r
.Popover-module_popover__E9K9X[data-placement^="right"] > .Popover-module_arrow__5A-0e {\r
  box-shadow: -1px 3px 6px 0px #00000033;\r
	clip-path: inset(0px 0px -10px -10px);\r
  border-right-color: transparent;\r
  border-top-color: transparent;\r
}\r
`),function(e){e.Default="default",e.Info="info",e.Warning="warning",e.Danger="danger"}(Hv||(Hv={}));const IR=N.createContext(null),eh=()=>{const e=N.useContext(IR);if(e==null)throw new Error("Popover components must be wrapped in <Popover />");return e};N.forwardRef(function(e,t){var{children:n}=e,r=Xp(e,["children"]);const i=eh(),a=n.ref,l=Jp([i.reference,t,a]);return N.isValidElement(n)?N.cloneElement(n,i.getReferenceProps(Object.assign(Object.assign(Object.assign({ref:l},r),n.props),{"data-state":i.open?"open":"closed","aria-expanded":i.open}))):null});N.forwardRef(function(e,t){var n,r;const i=eh(),a=Jp([i.floating,t]);return i.open?$.createElement("div",Object.assign({ref:a,style:{position:i.strategy,top:(n=i.y)!==null&&n!==void 0?n:0,left:(r=i.x)!==null&&r!==void 0?r:0,width:"max-content"},"data-placement":i.placement,className:hn(Lf.popover,Lf[i.variant],i.className)},i.getFloatingProps(e),{tabIndex:-1,role:"dialog"}),e.children):null});N.forwardRef(function(e,t){var n,r;const i=eh(),a=Jp([i.arrowRef,t]),l=(n=i.middlewareData.arrow)===null||n===void 0?void 0:n.x,c=(r=i.middlewareData.arrow)===null||r===void 0?void 0:r.y,d={top:"bottom",right:"left",bottom:"top",left:"right"}[i.placement.split("-")[0]];return $.createElement("div",Object.assign({ref:a,style:Object.assign(Object.assign(Object.assign({},l!=null?{left:l}:{}),c!=null?{top:c}:{}),d?{[d]:"-7px"}:{}),className:Lf.arrow},e))});zt(`.HelpText-module_helpTextButton__Ir4Uk {\r
  all: initial;\r
  background-color: transparent;\r
  border-radius: 50px;\r
  padding: 0;\r
  cursor: pointer;\r
  display: flex;\r
  border: none;\r
}\r
\r
.HelpText-module_helpTextButton__Ir4Uk:focus-visible {\r
  outline: var(--interactive_components-colors-focus_outline) solid\r
    var(--border_width-standard);\r
  outline-offset: var(--border_width-standard);\r
  color: var(--colors-blue-700);\r
}\r
\r
.HelpText-module_helpTextButton__Ir4Uk:focus:not(:focus-visible) {\r
  outline: none;\r
}\r
\r
.HelpText-module_helpTextIconFilled__SjZ8e {\r
  display: none;\r
}\r
\r
.HelpText-module_helpTextButton__Ir4Uk:where(:hover, :focus-visible, [data-state^="open"]) > .HelpText-module_helpTextIcon__ex2WU {\r
  display: none;\r
}\r
\r
.HelpText-module_helpTextButton__Ir4Uk:where(:hover, :focus-visible, [data-state^="open"]) > .HelpText-module_helpTextIconFilled__SjZ8e {\r
  display: inline-block;\r
}\r
\r
.HelpText-module_helpTextIcon__ex2WU {\r
  color: var(--colors-blue-700);\r
  width: 24px;\r
  height: 24px;\r
}\r
\r
.HelpText-module_helpTextContent__EDHac {\r
  font-size: var(--font_size-300);\r
  line-height: var(--typography-default-line-height);\r
}\r
`);var Wv;zt(`.RadioButton-module_radio__-lcP- {\r
  /* Internal variables */\r
  --radio-background_color: var(--component-checkbox-color-background-default);\r
  --radio-border_color: var(--component-checkbox-color-border-default);\r
  --radio-border_width: var(--component-checkbox-border_width-small);\r
  --radio-checkmark-color: var(--colors-blue-700);\r
  --radio-checkmark-display: none;\r
  --radio-size: var(--component-checkbox-size-width-small);\r
\r
  /* Variables used by CheckboxRadioTemplate */\r
  --input_box-border_radius: calc(var(--radio-size) / 2);\r
  --input_box-size: var(--radio-size);\r
}\r
\r
.RadioButton-module_radio__-lcP-.RadioButton-module_small__bDKxm {\r
  --radio-size: var(--component-checkbox-size-width-small);\r
}\r
\r
.RadioButton-module_radio__-lcP-.RadioButton-module_xsmall__i7xp0 {\r
  --radio-size: var(--component-checkbox-size-width-xsmall);\r
}\r
\r
.RadioButton-module_radio__-lcP-.RadioButton-module_error__WeFrR {\r
  --radio-background_color: var(--component-checkbox-color-background-error);\r
  --radio-border_color: var(--component-checkbox-color-border-error);\r
}\r
\r
.RadioButton-module_radio__-lcP-.RadioButton-module_checked__Uc9Re {\r
  --radio-checkmark-display: inline-block;\r
}\r
\r
.RadioButton-module_radio__-lcP-.RadioButton-module_checked__Uc9Re:not(.RadioButton-module_disabled__thDlK, .RadioButton-module_error__WeFrR) {\r
  --radio-border_color: var(--component-checkbox-color-border-checked);\r
}\r
\r
.RadioButton-module_radio__-lcP-:not(.RadioButton-module_disabled__thDlK, .RadioButton-module_checked__Uc9Re):hover {\r
  --radio-background_color: var(--component-checkbox-color-background-hover);\r
}\r
\r
.RadioButton-module_radio__-lcP-:not(.RadioButton-module_disabled__thDlK, .RadioButton-module_error__WeFrR, .RadioButton-module_checked__Uc9Re):hover {\r
  --radio-border_color: var(--component-checkbox-color-border-hover);\r
}\r
\r
.RadioButton-module_radio__-lcP-.RadioButton-module_disabled__thDlK.RadioButton-module_checked__Uc9Re {\r
  --radio-background_color: var(--component-checkbox-color-border-disabled);\r
  --radio-border_color: transparent;\r
}\r
\r
.RadioButton-module_visibleButton__QmmNn {\r
  background-color: var(--radio-background_color);\r
  border-color: var(--radio-border_color);\r
  border-radius: 50%;\r
  border-style: solid;\r
  border-width: var(--radio-border_width);\r
  box-sizing: border-box;\r
  display: inline-block;\r
  height: var(--radio-size);\r
  width: var(--radio-size);\r
}\r
\r
.RadioButton-module_checkmark__fHNs0 {\r
  --radio-checkmark-size: 80%;\r
  background-color: var(--radio-checkmark-color);\r
  border-radius: 50%;\r
  display: var(--radio-checkmark-display);\r
  height: var(--radio-checkmark-size);\r
  margin: calc(\r
    (var(--radio-size) - var(--radio-checkmark-size)) / 2 -\r
      var(--radio-border_width)\r
  );\r
  width: var(--radio-checkmark-size);\r
}\r
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Wv||(Wv={}));var Zv,Vv;zt(`.RadioGroup-module_radioGroup__pO2pz {\r
  column-gap: var(--gap-x);\r
  display: flex;\r
  flex-wrap: wrap;\r
  row-gap: var(--gap-y);\r
}\r
\r
.RadioGroup-module_radioGroup__pO2pz.RadioGroup-module_xsmall__wwC4P {\r
  --gap-x: var(--component-checkbox-group-space-gap-x-xsmall);\r
  --gap-y: var(--component-checkbox-group-space-gap-y-xsmall);\r
}\r
\r
.RadioGroup-module_radioGroup__pO2pz.RadioGroup-module_small__j8rVm {\r
  --gap-x: var(--component-checkbox-group-space-gap-x-small);\r
  --gap-y: var(--component-checkbox-group-space-gap-y-small);\r
}\r
\r
.RadioGroup-module_radioGroup__pO2pz.RadioGroup-module_vertical__VIcHp {\r
  flex-direction: column;\r
}\r
\r
.RadioGroup-module_radioGroup__pO2pz.RadioGroup-module_horizontal__vsHUV {\r
  flex-direction: row;\r
}\r
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Zv||(Zv={})),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(Vv||(Vv={}));var lo,$l,go;(function(e){e.Default="default",e.Error="error",e.Disabled="disabled",e.ReadOnlyInfo="readonlyInfo",e.ReadOnlyConfirm="readonlyConfirm"})(lo||(lo={})),function(e){e.ReadOnlyInfo="readonlyInfo",e.ReadOnlyConfirm="readonlyConfirm"}($l||($l={})),function(e){e.None="none",e.Error="error",e.Search="search"}(go||(go={}));const NR=()=>$.createElement("svg",{width:"16",height:"15",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},$.createElement("path",{d:"M8 0C3.875 0 0.5 3.375 0.5 7.5C0.5 11.625 3.875 15 8 15C12.125 15 15.5 11.625 15.5 7.5C15.5 3.375 12.125 0 8 0ZM8.875 11.25H7.5V9.9375H8.875V11.25ZM8.6875 9H7.6875L7.375 4.125H9L8.6875 9Z",fill:"white"})),DR=()=>$.createElement("svg",{width:"15",height:"15",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},$.createElement("path",{d:"M34 31.5758L23.9289 21.3939C25.5533 19.2929 26.3655 16.8687 26.3655 14.1212C26.3655 7.49495 20.8426 2 14.1827 2C7.52284 2 2 7.49495 2 14.1212C2 20.7475 7.52284 26.2424 14.1827 26.2424C16.9442 26.2424 19.5431 25.2727 21.4924 23.8182L31.7259 34L34 31.5758ZM5.24873 14.1212C5.24873 9.27273 9.30965 5.23232 14.1827 5.23232C19.0558 5.23232 23.1168 9.27273 23.1168 14.1212C23.1168 18.9697 19.0558 23.0101 14.1827 23.0101C9.30965 23.0101 5.24873 18.9697 5.24873 14.1212Z",fill:"black"}));var qv="Icon-module_icon__3YqoF",MR="Icon-module_disabled__e4-Yg";zt(`.Icon-module_icon__3YqoF {\r
    background: var(--icon-background);\r
    padding-right: var(--component-input-border_width-focus);\r
    padding-left: var(--component-input-border_width-default);\r
    display: flex;\r
    align-items: center;\r
    flex: none;\r
}\r
\r
.Icon-module_icon__3YqoF.Icon-module_disabled__e4-Yg {\r
    opacity: 60%;\r
}`);const FR=({variant:e,disabled:t=!1})=>{switch(e){case go.Error:return $.createElement("div",{className:qv,"data-testid":"input-icon-error"},$.createElement(NR,null));case go.Search:return $.createElement("div",{className:hn(qv,t&&MR),"data-testid":"input-icon-search"},$.createElement(DR,null));default:return null}};var no={inputWrapper:"InputWrapper-module_inputWrapper__I-Tcb",withFocusEffect:"InputWrapper-module_withFocusEffect__9DobY",default:"InputWrapper-module_default__SS3Cg",error:"InputWrapper-module_error__FhSCJ",disabled:"InputWrapper-module_disabled__8mIxc",readonlyInfo:"InputWrapper-module_readonlyInfo__mQyMN",readonlyConfirm:"InputWrapper-module_readonlyConfirm__WrHUu",search:"InputWrapper-module_search__SwwFJ",withPadding:"InputWrapper-module_withPadding__6NkNf",field:"InputWrapper-module_field__UA-RS",label:"InputWrapper-module_label__x0-XH"};zt(`.InputWrapper-module_inputWrapper__I-Tcb {\r
  --background: var(--component-input-color-background-default);\r
  --border-color: var(--component-input-color-border-default);\r
  --icon-background: transparent;\r
  --outline-color: var(--component-input-color-outline-focus);\r
  --paddingX: 0;\r
  --paddingY: 0;\r
  align-items: stretch;\r
  background: var(--background);\r
  border-color: var(--border-color);\r
  border-radius: var(--interactive_components-border_radius-normal);\r
  border-style: solid;\r
  border-width: var(--component-input-border_width-default);\r
  box-sizing: border-box;\r
  display: flex;\r
}\r
\r
.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_withFocusEffect__9DobY:focus-within {\r
  outline: var(--outline-color) auto var(--border_width-thin);\r
  outline-offset: calc(var(--border_width-thin) + var(--border_width-standard));\r
}\r
\r
.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_default__SS3Cg:hover {\r
  --border-color: var(--component-input-color-border-hover);\r
}\r
\r
.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_error__FhSCJ {\r
  --icon-background: var(--component-input-error-color-border-default);\r
  --border-color: var(--component-input-error-color-border-default);\r
}\r
\r
.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_error__FhSCJ:hover {\r
  --icon-background: var(--component-input-error-color-border-hover);\r
  --border-color: var(--component-input-error-color-border-hover);\r
}\r
\r
.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_disabled__8mIxc {\r
  --background: repeating-linear-gradient(\r
    135deg,\r
    #efefef,\r
    #efefef 2px,\r
    #fff 3px,\r
    #fff 5px\r
  );\r
  --border-color: var(--component-input-disabled-color-border-default);\r
}\r
\r
.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_readonlyInfo__mQyMN {\r
  --background: var(--component-input-read_only_info-color-background-default);\r
  --border-color: var(--component-input-read_only_info-color-border-default);\r
}\r
\r
.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_readonlyConfirm__WrHUu {\r
  --background: var(\r
    --component-input-read_only_confirm-color-background-default\r
  );\r
  --border-color: var(--component-input-read_only_confirm-color-border-default);\r
}\r
\r
.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_search__SwwFJ {\r
  flex-direction: row-reverse;\r
}\r
\r
.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_withPadding__6NkNf {\r
  /* Subtract size of border on padding-y, because border is on outer element. Without this, height of entire component will be too big */\r
  --paddingY: calc(\r
    var(--component-input-space-padding-y) -\r
      var(--component-input-border_width-default)\r
  );\r
  --paddingX: var(--component-input-space-padding-x);\r
}\r
\r
.InputWrapper-module_field__UA-RS {\r
  background: var(--background);\r
  border: none;\r
  box-sizing: border-box;\r
  outline: none;\r
  padding: var(--paddingY) var(--paddingX);\r
  width: 100%;\r
}\r
\r
.InputWrapper-module_label__x0-XH {\r
  font-weight: var(--component-label-font_weight-default);\r
  padding: 0;\r
}\r
`);const AR=({disabled:e=!1,inputId:t,inputRenderer:n,isSearch:r=!1,isValid:i=!0,label:a,noFocusEffect:l,noPadding:c,readOnly:d=!1})=>{const p=N.useId(),_=t??p,{variant:v,iconVariant:m}=(({readOnly:y=!1,disabled:w=!1,isValid:S=!0,isSearch:O=!1}={})=>{let b=go.None;return O&&(b=go.Search),w?{variant:lo.Disabled,iconVariant:b}:y===!0||y===$l.ReadOnlyInfo?{variant:lo.ReadOnlyInfo,iconVariant:b}:y===$l.ReadOnlyConfirm?{variant:lo.ReadOnlyConfirm,iconVariant:b}:S===!1?{variant:lo.Error,iconVariant:go.Error}:{variant:lo.Default,iconVariant:b}})({disabled:e,isSearch:r,isValid:i,readOnly:d});return $.createElement($.Fragment,null,a&&$.createElement("label",{className:no.label,htmlFor:_},a),$.createElement("div",{"data-testid":"InputWrapper",className:hn(no.inputWrapper,no[v],{[no.search]:r,[no.withFocusEffect]:!l,[no.withPadding]:!c})},$.createElement(FR,{variant:m,disabled:e}),n({className:no.field,inputId:_,variant:v})))};var jR="MultiSelectItem-module_multiSelectItem__tjklN",$R="MultiSelectItem-module_deleteButton__xRVRz",UR="MultiSelectItem-module_deleteButtonCross__yqZOX";zt(`.MultiSelectItem-module_multiSelectItem__tjklN {\r
  --border-radius: calc(var(--multiselect_item-height) / 2);\r
  align-items: center;\r
  background-color: var(--multiselect_item-background_color);\r
  border-radius: var(--border-radius);\r
  color: var(--multiselect_item-text_color);\r
  display: inline-flex;\r
  font-size: var(--font_size);\r
  gap: var(--multiselect_item-space_between);\r
  height: var(--multiselect_item-height);\r
  padding-left: var(--multiselect_item-space_left);\r
}\r
\r
.MultiSelectItem-module_deleteButton__xRVRz {\r
  background-color: transparent;\r
  border-bottom-right-radius: inherit;\r
  border-top-right-radius: inherit;\r
  border: 0;\r
  cursor: var(--interactive_element-cursor);\r
  height: 100%;\r
  padding: calc(\r
    (var(--multiselect_item-height) - var(--delete_cross-size)) / 2\r
  );\r
  width: var(--multiselect_item-height);\r
}\r
\r
.MultiSelectItem-module_deleteButton__xRVRz:not(:disabled):hover {\r
  background-color: var(--delete_cross_box-color-hover);\r
}\r
\r
.MultiSelectItem-module_deleteButton__xRVRz:focus-visible {\r
  background-color: var(--delete_cross_box-color-hover);\r
  outline: var(--focus_visible-outline);\r
}\r
\r
.MultiSelectItem-module_deleteButtonCross__yqZOX {\r
  background-color: var(--multiselect_item_delete_cross-color);\r
  clip-path: var(--delete_cross-clip_path);\r
  display: inline-block;\r
  height: var(--delete_cross-size);\r
  width: var(--delete_cross-size);\r
}\r
`);const HR=({deleteButtonLabel:e,disabled:t,onDeleteButtonClick:n,label:r})=>$.createElement("span",{className:jR},$.createElement("span",null,r),$.createElement("button",{"aria-label":e,className:$R,disabled:t,onClick:n},$.createElement("span",{className:UR})));var _t={select:"Select-module_select__cjdcr",disabled:"Select-module_disabled__8YgjS",expanded:"Select-module_expanded__QPHZ6",optionList:"Select-module_optionList__Lhg-F",usingKeyboard:"Select-module_usingKeyboard__RCPHw",fieldButton:"Select-module_fieldButton__uKwX8",field:"Select-module_field__h-wBy",multiple:"Select-module_multiple__cwGEC",single:"Select-module_single__i2zPs",fieldValue:"Select-module_fieldValue__XgrGc",fieldValues:"Select-module_fieldValues__Xifsp",arrowWrapper:"Select-module_arrowWrapper__meDQz",arrow:"Select-module_arrow__w35wW",deleteButton:"Select-module_deleteButton__hZfr7",deleteButtonCross:"Select-module_deleteButtonCross__OKMwb",option:"Select-module_option__Hvo8n",selected:"Select-module_selected__8A13A",focused:"Select-module_focused__joVjV"};zt(`.Select-module_select__cjdcr {\r
  --delete_cross_box-border_radius: var(\r
    --interactive_components-border_radius-normal\r
  );\r
  --delete_cross_box-color-hover: var(--colors-red-500);\r
  --delete_cross_box-size: 25px;\r
  --delete_cross-clip_path: polygon(\r
    14.29% 0%,\r
    50% 35.71%,\r
    85.71% 0%,\r
    100% 14.29%,\r
    64.29% 50%,\r
    100% 85.71%,\r
    85.71% 100%,\r
    50% 64.29%,\r
    14.29% 100%,\r
    0% 85.71%,\r
    35.71% 50%,\r
    0% 14.29%\r
  );\r
  --delete_cross-color: var(--colors-blue-900);\r
  --delete_cross-color-active: var(--colors-blue-700);\r
  --delete_cross-color-disabled: #022f5180;\r
  --delete_cross-color-hover: white;\r
  --delete_cross-size: 12px;\r
  --arrow-border_left: 1px solid #022f5180;\r
  --arrow-color: var(--colors-blue-900);\r
  --arrow-height_to_width_fraction: calc(8 / 14);\r
  --arrow-horizontal_padding: 6px;\r
  --arrow-size: 14px;\r
  --arrow_wrapper-margin: 4px;\r
  --field-height-inside: calc(\r
    var(--field-height) - var(--component-input-border_width-default) * 2\r
  );\r
  --field-height: 36px;\r
  --font_size: 16px;\r
  --interactive_element-cursor: pointer;\r
  --line-height: 1.5;\r
  --multiselect_item-background_color: var(--colors-blue-900);\r
  --multiselect_item-height: 24px;\r
  --multiselect_item-space_between: 6px;\r
  --multiselect_item-space_left: 16px;\r
  --multiselect_item-text_color: white;\r
  --multiselect_item_delete_cross-color: white;\r
  --multiselect_items-gap: 4px;\r
  --multiselect_items-padding: calc(\r
    (var(--field-height-inside) - var(--multiselect_item-height)) / 2\r
  );\r
  --option-background_color-default: transparent;\r
  --option-background_color-hover: var(--colors-blue-200);\r
  --option-background_color-selected: var(--colors-blue-300);\r
  --option-background_color-selected-hover: var(--colors-blue-500);\r
  --option-border_color: #022f5180;\r
  --option-border_width: 1px;\r
  --option-height: 36px;\r
  --option_list-background_color: white;\r
  --option_list-border: 1px solid #68707c;\r
  --option_list-border_radius: var(\r
    --interactive_components-border_radius-normal\r
  );\r
  --option_list-number_of_visible_options: 7;\r
  --option_list-shadow: 1px 1px 3px #00000040;\r
  --option_list-z_index: 1;\r
  --option-outline-focus: none;\r
  --option-padding_horizontal: 12px;\r
  --singleselect_field-padding_left: 12px;\r
  --focus_visible-outline: 2px auto\r
    var(--interactive_components-colors-focus_outline);\r
\r
  font-size: var(--font_size);\r
  line-height: var(--line-height);\r
  position: relative;\r
}\r
\r
.Select-module_select__cjdcr.Select-module_disabled__8YgjS {\r
  --interactive_element-cursor: auto;\r
  opacity: var(--interactive_components-colors-disabled-opacity);\r
}\r
\r
.Select-module_select__cjdcr.Select-module_expanded__QPHZ6 {\r
  --delete_cross-color: var(--delete_cross-color-active);\r
}\r
\r
.Select-module_select__cjdcr:not(.Select-module_expanded__QPHZ6) .Select-module_optionList__Lhg-F {\r
  display: none;\r
}\r
\r
.Select-module_select__cjdcr.Select-module_usingKeyboard__RCPHw {\r
  --option-outline-focus: var(--focus_visible-outline);\r
}\r
\r
.Select-module_fieldButton__uKwX8 {\r
  background: transparent;\r
  border: 0;\r
  cursor: var(--interactive_element-cursor);\r
  height: 100%;\r
  margin: 0;\r
  padding: 0;\r
}\r
\r
.Select-module_field__h-wBy {\r
  display: inline-flex;\r
  padding: 0;\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_field__h-wBy,\r
.Select-module_select__cjdcr.Select-module_single__i2zPs .Select-module_fieldButton__uKwX8 {\r
  align-items: center;\r
  display: inline-flex;\r
  flex-direction: row;\r
  font-family: var(--font_family-default);\r
  font-size: var(--font_size);\r
  min-height: var(--field-height-inside);\r
  position: relative;\r
  width: 100%;\r
}\r
\r
.Select-module_select__cjdcr.Select-module_single__i2zPs .Select-module_fieldValue__XgrGc {\r
  flex: 1;\r
  padding-left: var(--singleselect_field-padding_left);\r
  text-align: left;\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_fieldValues__Xifsp {\r
  display: inline-flex;\r
  flex-direction: row;\r
  flex-wrap: wrap;\r
  flex: 1;\r
  gap: var(--multiselect_items-gap);\r
  padding: var(--multiselect_items-padding);\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_fieldButton__uKwX8:focus-visible {\r
  outline: var(--focus_visible-outline);\r
}\r
\r
.Select-module_arrowWrapper__meDQz {\r
  --arrow-height: calc(\r
    var(--arrow-size) * var(--arrow-height_to_width_fraction)\r
  );\r
  --arrow-vertical_padding: calc(\r
    (var(--field-height-inside) - var(--arrow-height)) / 2 -\r
      var(--arrow_wrapper-margin)\r
  );\r
  align-items: center;\r
  border-left: var(--arrow-border_left);\r
  box-sizing: border-box;\r
  display: flex;\r
  height: calc(100% - var(--arrow-vertical_padding));\r
  margin-bottom: var(--arrow_wrapper-margin);\r
  margin-left: var(--arrow_wrapper-margin);\r
  margin-top: var(--arrow_wrapper-margin);\r
  padding: var(--arrow-vertical_padding) var(--arrow-horizontal_padding);\r
}\r
\r
.Select-module_arrow__w35wW {\r
  background-color: var(--arrow-color);\r
  clip-path: polygon(\r
    11.72% 9.93%,\r
    50% 67.28%,\r
    88.28% 9.93%,\r
    97.43% 29.13%,\r
    50% 96.79%,\r
    2.57% 29.13%\r
  );\r
  display: inline-block;\r
  height: var(--arrow-height);\r
  width: var(--arrow-size);\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_deleteButton__hZfr7 {\r
  background: none;\r
  border-radius: var(--delete_cross_box-border_radius);\r
  border: none;\r
  cursor: var(--interactive_element-cursor);\r
  height: var(--delete_cross_box-size);\r
  padding: calc((var(--delete_cross_box-size) - var(--delete_cross-size)) / 2);\r
  width: var(--delete_cross_box-size);\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_deleteButton__hZfr7:disabled {\r
  cursor: auto;\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_deleteButton__hZfr7:focus-visible {\r
  outline: var(--focus_visible-outline);\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_deleteButton__hZfr7:hover:not(:disabled) {\r
  background-color: var(--delete_cross_box-color-hover);\r
  --delete_cross-color: var(--delete_cross-color-hover);\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_deleteButton__hZfr7:disabled {\r
  --delete_cross-color: var(--delete_cross-color-disabled);\r
  background-color: transparent;\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_deleteButtonCross__OKMwb {\r
  background-color: var(--delete_cross-color);\r
  clip-path: var(--delete_cross-clip_path);\r
  display: inline-block;\r
  height: var(--delete_cross-size);\r
  width: var(--delete_cross-size);\r
}\r
\r
.Select-module_optionList__Lhg-F {\r
  background-color: var(--option_list-background_color);\r
  border-radius: var(--option_list-border_radius);\r
  border: var(--option_list-border);\r
  box-shadow: var(--option_list-shadow);\r
  box-sizing: border-box;\r
  display: flex;\r
  flex-direction: column;\r
  margin: 0;\r
  max-height: calc(\r
    var(--option-height) * var(--option_list-number_of_visible_options)\r
  );\r
  overflow-y: auto;\r
  padding: 0;\r
  position: absolute;\r
  z-index: var(--option_list-z_index);\r
}\r
\r
.Select-module_option__Hvo8n {\r
  background-color: var(--option-background_color-default);\r
  border-color: var(--option-border_color);\r
  border-style: solid;\r
  border-width: var(--option-border_width) 0 0 0;\r
  box-sizing: border-box;\r
  cursor: var(--interactive_element-cursor);\r
  display: inline-block;\r
  min-height: var(--option-height);\r
  overflow-x: hidden;\r
  padding-left: var(--option-padding_horizontal);\r
  padding-right: var(--option-padding_horizontal);\r
  padding-top: calc(\r
    (var(--option-height) - (var(--font_size) * var(--line-height))) / 2\r
  );\r
  text-align: left;\r
  text-overflow: ellipsis;\r
  white-space: nowrap;\r
}\r
\r
.Select-module_option__Hvo8n:hover {\r
  background-color: var(--option-background_color-hover);\r
}\r
\r
.Select-module_option__Hvo8n.Select-module_selected__8A13A {\r
  background-color: var(--option-background_color-selected);\r
}\r
\r
.Select-module_option__Hvo8n.Select-module_selected__8A13A:hover {\r
  background-color: var(--option-background_color-selected-hover);\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_option__Hvo8n.Select-module_focused__joVjV {\r
  outline: var(--option-outline-focus);\r
}\r
`);const js={ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",Enter:"Enter"},Kv=e=>{const{disabled:t,error:n,hideLabel:r,inputId:i,label:a,multiple:l,onChange:c,options:d,value:p}=e,_=d.map(G=>G.value);if(_.length!==new Set(_).size)throw Error("Each value in the option list must be unique.");const[v,m]=N.useState(l&&p!=null?p:[]),[y,w]=N.useState(l?void 0:p),S=d.findIndex(G=>G.value===y),[O,b]=N.useState(!1);Fv("click",()=>b(!1)),Fv("keydown",()=>b(!0));const[g,k]=N.useState(!1),E=N.useRef(null),D=N.useRef(null);Yp(()=>{l?wb(p,v)||m(p??[]):w(p)},[p]),N.useEffect(()=>{const G=E.current;if(G){const ce=G.offsetHeight,I=G.getElementsByTagName("li")[0].offsetHeight,ne=G.scrollTop,H=S*I,P=H+I;H>=ne&&P<=ne+ce||(G.scrollTop=H<ne?H:P-ce)}},[S]);const F=G=>{var ce;return(ce=d.find(I=>I.value===G))!==null&&ce!==void 0?ce:{label:"",value:""}},W=(G,ce)=>{v?.length||w(ce),m(G),c&&c(G)},K=G=>{var ce;l?v.includes(G)?ee(G):W([...v,G],G):(w(ce=G),k(!1),c&&c(ce))},ee=G=>{W(v.filter(ce=>ce!==G),G)},q=N.useCallback(()=>{if(y===void 0)w(d[0].value);else{const G=S+1;G>=0&&G<d.length&&w(d[G].value)}k(!0)},[y,S,w,d]),le=N.useCallback(()=>{if(y===void 0)w(d[d.length-1].value);else{const G=S-1;G>=0&&G<d.length&&w(d[G].value)}k(!0)},[y,S,w,d]);Xc(js.ArrowDown,()=>g&&q()),Xc(js.ArrowUp,()=>g&&le()),Xc(js.Enter,()=>g&&l&&y&&K(y));const he=G=>y===G,Ue=G=>l?v.includes(G):he(G),ue=N.useId(),Ie=D.current?`calc(${D.current.offsetWidth}px + 2 * ${Kp.component.input.border_width.default.value})`:void 0;return $.createElement("div",{className:hn(_t.select,_t[l?"multiple":"single"],g&&_t.expanded,t&&_t.disabled,O&&_t.usingKeyboard),"data-testid":"select-root"},$.createElement(AR,{disabled:t,inputId:i,inputRenderer:({className:G,inputId:ce})=>$.createElement("span",{className:G+" "+_t.field,ref:D},l&&$.createElement($.Fragment,null,$.createElement("span",{className:_t.fieldValues},v.map(F).map(I=>$.createElement(HR,{deleteButtonLabel:I.deleteButtonLabel,disabled:t!=null&&t,key:I.value,label:I.label,onDeleteButtonClick:()=>ee(I.value)}))),$.createElement("button",{"aria-label":e.deleteButtonLabel,className:_t.deleteButton,disabled:!v.length||t,onClick:()=>{W([])}},$.createElement("span",{className:_t.deleteButtonCross}))),$.createElement("button",{"aria-controls":ue,"aria-expanded":g,"aria-label":a,className:_t.fieldButton,disabled:t,id:ce,onBlur:()=>k(!1),onClick:()=>k(!g),onKeyDown:I=>{Object.values(js).includes(I.key)&&(I.preventDefault(),k(!0))},role:"combobox",value:l?v:y},!l&&$.createElement("span",{className:_t.fieldValue},F(y).label),$.createElement("span",{className:_t.arrowWrapper},$.createElement("span",{className:_t.arrow})))),isSearch:!1,isValid:!n,label:r?void 0:a,noFocusEffect:l,noPadding:!0,readOnly:!1}),$.createElement("ul",{className:_t.optionList,id:ue,ref:E,role:"listbox",style:{width:Ie}},d.map(G=>$.createElement("li",{"aria-selected":Ue(G.value),className:hn(_t.option,Ue(G.value)&&_t.selected,l&&he(G.value)&&_t.focused),key:G.value,onClick:()=>K(G.value),onMouseDown:ce=>ce.preventDefault(),onKeyDown:ce=>ce.preventDefault(),role:"option",value:G.value},G.label))))};zt(`.TextArea-module_textArea__Fp7-I {\r
  border: none;\r
  font-family: inherit;\r
  font-size: var(--component-textarea-font_size-sm);\r
}\r
\r
.TextArea-module_textArea__Fp7-I.TextArea-module_resize-none__LLMFm {\r
  resize: none;\r
}\r
\r
.TextArea-module_textArea__Fp7-I.TextArea-module_resize-both__LTKmK {\r
  resize: both;\r
}\r
\r
.TextArea-module_textArea__Fp7-I.TextArea-module_resize-horizontal__SIRxw {\r
  resize: horizontal;\r
}\r
\r
.TextArea-module_textArea__Fp7-I.TextArea-module_resize-vertical__oRHAF {\r
  resize: vertical;\r
}\r
`);const WR=/(\d*\.?\d+)rem(?=\W|$)/gim,ZR=e=>typeof e=="string"?e.replace(WR,(t,n)=>`${((i,a=2)=>{const l=10**a;return Math.round((i+Number.EPSILON)*l)/l})(1.6*n)}rem`):e,th={get:(e,t)=>{if(!(t in e))return;const n=e[t];return typeof n=="object"?new Proxy(n,th):ZR(n)}};new Proxy(vb,th);new Proxy(Kp,th);const VR=e=>N.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:"false",role:"img",...e},N.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.517 11H4.483a2 2 0 0 0-1.987 2.227l.229 2A2 2 0 0 0 4.712 17h14.576a2 2 0 0 0 1.987-1.773l.229-2A2 2 0 0 0 19.517 11Zm-.947-6.109 1.66 4.172a4.001 4.001 0 0 1 3.26 4.391l-.228 2A4.001 4.001 0 0 1 20 18.937V20.5a1.5 1.5 0 0 1-3 0V19H7v1.5a1.5 1.5 0 0 1-3 0v-1.563a4.001 4.001 0 0 1-3.262-3.483l-.229-2A4.001 4.001 0 0 1 3.77 9.063l1.66-4.172A3 3 0 0 1 8.217 3h7.566a3 3 0 0 1 2.787 1.891ZM18.052 9l-1.34-3.37a1 1 0 0 0-.93-.63H8.218a1 1 0 0 0-.929.63L5.948 9h12.104ZM7 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm11 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",fill:"currentColor"}));function Cb(e,t){return function(){return e.apply(t,arguments)}}const{toString:Pb}=Object.prototype,{getPrototypeOf:nh}=Object,rh=(e=>t=>{const n=Pb.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),pr=e=>(e=e.toLowerCase(),t=>rh(t)===e),Mu=e=>t=>typeof t===e,{isArray:Xa}=Array,Bf=Mu("undefined");function qR(e){return e!==null&&!Bf(e)&&e.constructor!==null&&!Bf(e.constructor)&&ki(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Eb=pr("ArrayBuffer");function KR(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Eb(e.buffer),t}const QR=Mu("string"),ki=Mu("function"),Ob=Mu("number"),zb=e=>e!==null&&typeof e=="object",GR=e=>e===!0||e===!1,nl=e=>{if(rh(e)!=="object")return!1;const t=nh(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},XR=pr("Date"),YR=pr("File"),JR=pr("Blob"),e5=pr("FileList"),t5=e=>zb(e)&&ki(e.pipe),n5=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||Pb.call(e)===t||ki(e.toString)&&e.toString()===t)},r5=pr("URLSearchParams"),o5=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Fu(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Xa(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const a=n?Object.getOwnPropertyNames(e):Object.keys(e),l=a.length;let c;for(r=0;r<l;r++)c=a[r],t.call(null,e[c],c,e)}}function Rf(){const e={},t=(n,r)=>{nl(e[r])&&nl(n)?e[r]=Rf(e[r],n):nl(n)?e[r]=Rf({},n):Xa(n)?e[r]=n.slice():e[r]=n};for(let n=0,r=arguments.length;n<r;n++)arguments[n]&&Fu(arguments[n],t);return e}const i5=(e,t,n,{allOwnKeys:r}={})=>(Fu(t,(i,a)=>{n&&ki(i)?e[a]=Cb(i,n):e[a]=i},{allOwnKeys:r}),e),a5=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),s5=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},l5=(e,t,n,r)=>{let i,a,l;const c={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-- >0;)l=i[a],(!r||r(l,e,t))&&!c[l]&&(t[l]=e[l],c[l]=!0);e=n!==!1&&nh(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},u5=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},c5=e=>{if(!e)return null;if(Xa(e))return e;let t=e.length;if(!Ob(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},d5=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&nh(Uint8Array)),f5=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const a=i.value;t.call(e,a[0],a[1])}},p5=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},h5=pr("HTMLFormElement"),m5=e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Qv=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),_5=pr("RegExp"),Tb=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Fu(n,(i,a)=>{t(i,a,e)!==!1&&(r[a]=i)}),Object.defineProperties(e,r)},v5=e=>{Tb(e,(t,n)=>{const r=e[n];if(ki(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not read-only method '"+n+"'")})}})},g5=(e,t)=>{const n={},r=i=>{i.forEach(a=>{n[a]=!0})};return Xa(e)?r(e):r(String(e).split(t)),n},y5=()=>{},b5=(e,t)=>(e=+e,Number.isFinite(e)?e:t),j={isArray:Xa,isArrayBuffer:Eb,isBuffer:qR,isFormData:n5,isArrayBufferView:KR,isString:QR,isNumber:Ob,isBoolean:GR,isObject:zb,isPlainObject:nl,isUndefined:Bf,isDate:XR,isFile:YR,isBlob:JR,isRegExp:_5,isFunction:ki,isStream:t5,isURLSearchParams:r5,isTypedArray:d5,isFileList:e5,forEach:Fu,merge:Rf,extend:i5,trim:o5,stripBOM:a5,inherits:s5,toFlatObject:l5,kindOf:rh,kindOfTest:pr,endsWith:u5,toArray:c5,forEachEntry:f5,matchAll:p5,isHTMLForm:h5,hasOwnProperty:Qv,hasOwnProp:Qv,reduceDescriptors:Tb,freezeMethods:v5,toObjectSet:g5,toCamelCase:m5,noop:y5,toFiniteNumber:b5};function Pe(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}j.inherits(Pe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Lb=Pe.prototype,Bb={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Bb[e]={value:e}});Object.defineProperties(Pe,Bb);Object.defineProperty(Lb,"isAxiosError",{value:!0});Pe.from=(e,t,n,r,i,a)=>{const l=Object.create(Lb);return j.toFlatObject(e,l,function(d){return d!==Error.prototype},c=>c!=="isAxiosError"),Pe.call(l,e.message,t,n,r,i),l.cause=e,l.name=e.name,a&&Object.assign(l,a),l};var x5=typeof self=="object"?self.FormData:window.FormData;function If(e){return j.isPlainObject(e)||j.isArray(e)}function Rb(e){return j.endsWith(e,"[]")?e.slice(0,-2):e}function Gv(e,t,n){return e?e.concat(t).map(function(i,a){return i=Rb(i),!n&&a?"["+i+"]":i}).join(n?".":""):t}function w5(e){return j.isArray(e)&&!e.some(If)}const S5=j.toFlatObject(j,{},null,function(t){return/^is[A-Z]/.test(t)});function k5(e){return e&&j.isFunction(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator]}function Au(e,t,n){if(!j.isObject(e))throw new TypeError("target must be an object");t=t||new(x5||FormData),n=j.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(S,O){return!j.isUndefined(O[S])});const r=n.metaTokens,i=n.visitor||_,a=n.dots,l=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&k5(t);if(!j.isFunction(i))throw new TypeError("visitor must be a function");function p(w){if(w===null)return"";if(j.isDate(w))return w.toISOString();if(!d&&j.isBlob(w))throw new Pe("Blob is not supported. Use a Buffer instead.");return j.isArrayBuffer(w)||j.isTypedArray(w)?d&&typeof Blob=="function"?new Blob([w]):Buffer.from(w):w}function _(w,S,O){let b=w;if(w&&!O&&typeof w=="object"){if(j.endsWith(S,"{}"))S=r?S:S.slice(0,-2),w=JSON.stringify(w);else if(j.isArray(w)&&w5(w)||j.isFileList(w)||j.endsWith(S,"[]")&&(b=j.toArray(w)))return S=Rb(S),b.forEach(function(k,E){!(j.isUndefined(k)||k===null)&&t.append(l===!0?Gv([S],E,a):l===null?S:S+"[]",p(k))}),!1}return If(w)?!0:(t.append(Gv(O,S,a),p(w)),!1)}const v=[],m=Object.assign(S5,{defaultVisitor:_,convertValue:p,isVisitable:If});function y(w,S){if(!j.isUndefined(w)){if(v.indexOf(w)!==-1)throw Error("Circular reference detected in "+S.join("."));v.push(w),j.forEach(w,function(b,g){(!(j.isUndefined(b)||b===null)&&i.call(t,b,j.isString(g)?g.trim():g,S,m))===!0&&y(b,S?S.concat(g):[g])}),v.pop()}}if(!j.isObject(e))throw new TypeError("data must be an object");return y(e),t}function Xv(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function oh(e,t){this._pairs=[],e&&Au(e,this,t)}const Ib=oh.prototype;Ib.append=function(t,n){this._pairs.push([t,n])};Ib.toString=function(t){const n=t?function(r){return t.call(this,r,Xv)}:Xv;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function C5(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Nb(e,t,n){if(!t)return e;const r=n&&n.encode||C5,i=n&&n.serialize;let a;if(i?a=i(t,n):a=j.isURLSearchParams(t)?t.toString():new oh(t,n).toString(r),a){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e}class Yv{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){j.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Db={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},P5=typeof URLSearchParams<"u"?URLSearchParams:oh,E5=FormData,O5=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),ar={isBrowser:!0,classes:{URLSearchParams:P5,FormData:E5,Blob},isStandardBrowserEnv:O5,protocols:["http","https","file","blob","url","data"]};function z5(e,t){return Au(e,new ar.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,a){return ar.isNode&&j.isBuffer(n)?(this.append(r,n.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)}},t))}function T5(e){return j.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function L5(e){const t={},n=Object.keys(e);let r;const i=n.length;let a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}function Mb(e){function t(n,r,i,a){let l=n[a++];const c=Number.isFinite(+l),d=a>=n.length;return l=!l&&j.isArray(i)?i.length:l,d?(j.hasOwnProp(i,l)?i[l]=[i[l],r]:i[l]=r,!c):((!i[l]||!j.isObject(i[l]))&&(i[l]=[]),t(n,r,i[l],a)&&j.isArray(i[l])&&(i[l]=L5(i[l])),!c)}if(j.isFormData(e)&&j.isFunction(e.entries)){const n={};return j.forEachEntry(e,(r,i)=>{t(T5(r),i,n,0)}),n}return null}function B5(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new Pe("Request failed with status code "+n.status,[Pe.ERR_BAD_REQUEST,Pe.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const R5=ar.isStandardBrowserEnv?function(){return{write:function(n,r,i,a,l,c){const d=[];d.push(n+"="+encodeURIComponent(r)),j.isNumber(i)&&d.push("expires="+new Date(i).toGMTString()),j.isString(a)&&d.push("path="+a),j.isString(l)&&d.push("domain="+l),c===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function I5(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function N5(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Fb(e,t){return e&&!I5(t)?N5(e,t):t}const D5=ar.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(a){let l=a;return t&&(n.setAttribute("href",l),l=n.href),n.setAttribute("href",l),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(l){const c=j.isString(l)?i(l):l;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function Ya(e,t,n){Pe.call(this,e??"canceled",Pe.ERR_CANCELED,t,n),this.name="CanceledError"}j.inherits(Ya,Pe,{__CANCEL__:!0});function M5(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}const F5=j.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),A5=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(l){i=l.indexOf(":"),n=l.substring(0,i).trim().toLowerCase(),r=l.substring(i+1).trim(),!(!n||t[n]&&F5[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Jv=Symbol("internals"),Ab=Symbol("defaults");function oa(e){return e&&String(e).trim().toLowerCase()}function rl(e){return e===!1||e==null?e:j.isArray(e)?e.map(rl):String(e)}function j5(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function eg(e,t,n,r){if(j.isFunction(r))return r.call(this,t,n);if(j.isString(t)){if(j.isString(r))return t.indexOf(r)!==-1;if(j.isRegExp(r))return r.test(t)}}function $5(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function U5(e,t){const n=j.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,a,l){return this[r].call(this,t,i,a,l)},configurable:!0})})}function Xi(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}function dn(e,t){e&&this.set(e),this[Ab]=t||null}Object.assign(dn.prototype,{set:function(e,t,n){const r=this;function i(a,l,c){const d=oa(l);if(!d)throw new Error("header name must be a non-empty string");const p=Xi(r,d);p&&c!==!0&&(r[p]===!1||c===!1)||(r[p||l]=rl(a))}return j.isPlainObject(e)?j.forEach(e,(a,l)=>{i(a,l,t)}):i(t,e,n),this},get:function(e,t){if(e=oa(e),!e)return;const n=Xi(this,e);if(n){const r=this[n];if(!t)return r;if(t===!0)return j5(r);if(j.isFunction(t))return t.call(this,r,n);if(j.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}},has:function(e,t){if(e=oa(e),e){const n=Xi(this,e);return!!(n&&(!t||eg(this,this[n],n,t)))}return!1},delete:function(e,t){const n=this;let r=!1;function i(a){if(a=oa(a),a){const l=Xi(n,a);l&&(!t||eg(n,n[l],l,t))&&(delete n[l],r=!0)}}return j.isArray(e)?e.forEach(i):i(e),r},clear:function(){return Object.keys(this).forEach(this.delete.bind(this))},normalize:function(e){const t=this,n={};return j.forEach(this,(r,i)=>{const a=Xi(n,i);if(a){t[a]=rl(r),delete t[i];return}const l=e?$5(i):String(i).trim();l!==i&&delete t[i],t[l]=rl(r),n[l]=!0}),this},toJSON:function(e){const t=Object.create(null);return j.forEach(Object.assign({},this[Ab]||null,this),(n,r)=>{n==null||n===!1||(t[r]=e&&j.isArray(n)?n.join(", "):n)}),t}});Object.assign(dn,{from:function(e){return j.isString(e)?new this(A5(e)):e instanceof this?e:new this(e)},accessor:function(e){const n=(this[Jv]=this[Jv]={accessors:{}}).accessors,r=this.prototype;function i(a){const l=oa(a);n[l]||(U5(r,a),n[l]=!0)}return j.isArray(e)?e.forEach(i):i(e),this}});dn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);j.freezeMethods(dn.prototype);j.freezeMethods(dn);function H5(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,a=0,l;return t=t!==void 0?t:1e3,function(d){const p=Date.now(),_=r[a];l||(l=p),n[i]=d,r[i]=p;let v=a,m=0;for(;v!==i;)m+=n[v++],v=v%e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),p-l<t)return;const y=_&&p-_;return y?Math.round(m*1e3/y):void 0}}function tg(e,t){let n=0;const r=H5(50,250);return i=>{const a=i.loaded,l=i.lengthComputable?i.total:void 0,c=a-n,d=r(c),p=a<=l;n=a;const _={loaded:a,total:l,progress:l?a/l:void 0,bytes:c,rate:d||void 0,estimated:d&&l&&p?(l-a)/d:void 0};_[t?"download":"upload"]=!0,e(_)}}function ng(e){return new Promise(function(n,r){let i=e.data;const a=dn.from(e.headers).normalize(),l=e.responseType;let c;function d(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}j.isFormData(i)&&ar.isStandardBrowserEnv&&a.setContentType(!1);let p=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";a.set("Authorization","Basic "+btoa(y+":"+w))}const _=Fb(e.baseURL,e.url);p.open(e.method.toUpperCase(),Nb(_,e.params,e.paramsSerializer),!0),p.timeout=e.timeout;function v(){if(!p)return;const y=dn.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),S={data:!l||l==="text"||l==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:y,config:e,request:p};B5(function(b){n(b),d()},function(b){r(b),d()},S),p=null}if("onloadend"in p?p.onloadend=v:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.indexOf("file:")===0)||setTimeout(v)},p.onabort=function(){p&&(r(new Pe("Request aborted",Pe.ECONNABORTED,e,p)),p=null)},p.onerror=function(){r(new Pe("Network Error",Pe.ERR_NETWORK,e,p)),p=null},p.ontimeout=function(){let w=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const S=e.transitional||Db;e.timeoutErrorMessage&&(w=e.timeoutErrorMessage),r(new Pe(w,S.clarifyTimeoutError?Pe.ETIMEDOUT:Pe.ECONNABORTED,e,p)),p=null},ar.isStandardBrowserEnv){const y=(e.withCredentials||D5(_))&&e.xsrfCookieName&&R5.read(e.xsrfCookieName);y&&a.set(e.xsrfHeaderName,y)}i===void 0&&a.setContentType(null),"setRequestHeader"in p&&j.forEach(a.toJSON(),function(w,S){p.setRequestHeader(S,w)}),j.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),l&&l!=="json"&&(p.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&p.addEventListener("progress",tg(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&p.upload&&p.upload.addEventListener("progress",tg(e.onUploadProgress)),(e.cancelToken||e.signal)&&(c=y=>{p&&(r(!y||y.type?new Ya(null,e,p):y),p.abort(),p=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c)));const m=M5(_);if(m&&ar.protocols.indexOf(m)===-1){r(new Pe("Unsupported protocol "+m+":",Pe.ERR_BAD_REQUEST,e));return}p.send(i||null)})}const rg={http:ng,xhr:ng},og={getAdapter:e=>{if(j.isString(e)){const t=rg[e];if(!e)throw Error(j.hasOwnProp(e)?`Adapter '${e}' is not available in the build`:`Can not resolve adapter '${e}'`);return t}if(!j.isFunction(e))throw new TypeError("adapter is not a function");return e},adapters:rg},W5={"Content-Type":"application/x-www-form-urlencoded"};function Z5(){let e;return typeof XMLHttpRequest<"u"?e=og.getAdapter("xhr"):typeof process<"u"&&j.kindOf(process)==="process"&&(e=og.getAdapter("http")),e}function V5(e,t,n){if(j.isString(e))try{return(t||JSON.parse)(e),j.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Ci={transitional:Db,adapter:Z5(),transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,a=j.isObject(t);if(a&&j.isHTMLForm(t)&&(t=new FormData(t)),j.isFormData(t))return i&&i?JSON.stringify(Mb(t)):t;if(j.isArrayBuffer(t)||j.isBuffer(t)||j.isStream(t)||j.isFile(t)||j.isBlob(t))return t;if(j.isArrayBufferView(t))return t.buffer;if(j.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(a){if(r.indexOf("application/x-www-form-urlencoded")>-1)return z5(t,this.formSerializer).toString();if((c=j.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return Au(c?{"files[]":t}:t,d&&new d,this.formSerializer)}}return a||i?(n.setContentType("application/json",!1),V5(t)):t}],transformResponse:[function(t){const n=this.transitional||Ci.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&j.isString(t)&&(r&&!this.responseType||i)){const l=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(c){if(l)throw c.name==="SyntaxError"?Pe.from(c,Pe.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ar.classes.FormData,Blob:ar.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};j.forEach(["delete","get","head"],function(t){Ci.headers[t]={}});j.forEach(["post","put","patch"],function(t){Ci.headers[t]=j.merge(W5)});function Jc(e,t){const n=this||Ci,r=t||n,i=dn.from(r.headers);let a=r.data;return j.forEach(e,function(c){a=c.call(n,a,i.normalize(),t?t.status:void 0)}),i.normalize(),a}function jb(e){return!!(e&&e.__CANCEL__)}function ed(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ya}function ig(e){return ed(e),e.headers=dn.from(e.headers),e.data=Jc.call(e,e.transformRequest),(e.adapter||Ci.adapter)(e).then(function(r){return ed(e),r.data=Jc.call(e,e.transformResponse,r),r.headers=dn.from(r.headers),r},function(r){return jb(r)||(ed(e),r&&r.response&&(r.response.data=Jc.call(e,e.transformResponse,r.response),r.response.headers=dn.from(r.response.headers))),Promise.reject(r)})}function ja(e,t){t=t||{};const n={};function r(p,_){return j.isPlainObject(p)&&j.isPlainObject(_)?j.merge(p,_):j.isPlainObject(_)?j.merge({},_):j.isArray(_)?_.slice():_}function i(p){if(j.isUndefined(t[p])){if(!j.isUndefined(e[p]))return r(void 0,e[p])}else return r(e[p],t[p])}function a(p){if(!j.isUndefined(t[p]))return r(void 0,t[p])}function l(p){if(j.isUndefined(t[p])){if(!j.isUndefined(e[p]))return r(void 0,e[p])}else return r(void 0,t[p])}function c(p){if(p in t)return r(e[p],t[p]);if(p in e)return r(void 0,e[p])}const d={url:a,method:a,data:a,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:c};return j.forEach(Object.keys(e).concat(Object.keys(t)),function(_){const v=d[_]||i,m=v(_);j.isUndefined(m)&&v!==c||(n[_]=m)}),n}const $b="1.1.3",ih={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ih[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ag={};ih.transitional=function(t,n,r){function i(a,l){return"[Axios v"+$b+"] Transitional option '"+a+"'"+l+(r?". "+r:"")}return(a,l,c)=>{if(t===!1)throw new Pe(i(l," has been removed"+(n?" in "+n:"")),Pe.ERR_DEPRECATED);return n&&!ag[l]&&(ag[l]=!0,console.warn(i(l," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(a,l,c):!0}};function q5(e,t,n){if(typeof e!="object")throw new Pe("options must be an object",Pe.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const a=r[i],l=t[a];if(l){const c=e[a],d=c===void 0||l(c,a,e);if(d!==!0)throw new Pe("option "+a+" must be "+d,Pe.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Pe("Unknown option "+a,Pe.ERR_BAD_OPTION)}}const Nf={assertOptions:q5,validators:ih},br=Nf.validators;class yo{constructor(t){this.defaults=t,this.interceptors={request:new Yv,response:new Yv}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=ja(this.defaults,n);const{transitional:r,paramsSerializer:i}=n;r!==void 0&&Nf.assertOptions(r,{silentJSONParsing:br.transitional(br.boolean),forcedJSONParsing:br.transitional(br.boolean),clarifyTimeoutError:br.transitional(br.boolean)},!1),i!==void 0&&Nf.assertOptions(i,{encode:br.function,serialize:br.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();const a=n.headers&&j.merge(n.headers.common,n.headers[n.method]);a&&j.forEach(["delete","get","head","post","put","patch","common"],function(w){delete n.headers[w]}),n.headers=new dn(n.headers,a);const l=[];let c=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(c=c&&w.synchronous,l.unshift(w.fulfilled,w.rejected))});const d=[];this.interceptors.response.forEach(function(w){d.push(w.fulfilled,w.rejected)});let p,_=0,v;if(!c){const y=[ig.bind(this),void 0];for(y.unshift.apply(y,l),y.push.apply(y,d),v=y.length,p=Promise.resolve(n);_<v;)p=p.then(y[_++],y[_++]);return p}v=l.length;let m=n;for(_=0;_<v;){const y=l[_++],w=l[_++];try{m=y(m)}catch(S){w.call(this,S);break}}try{p=ig.call(this,m)}catch(y){return Promise.reject(y)}for(_=0,v=d.length;_<v;)p=p.then(d[_++],d[_++]);return p}getUri(t){t=ja(this.defaults,t);const n=Fb(t.baseURL,t.url);return Nb(n,t.params,t.paramsSerializer)}}j.forEach(["delete","get","head","options"],function(t){yo.prototype[t]=function(n,r){return this.request(ja(r||{},{method:t,url:n,data:(r||{}).data}))}});j.forEach(["post","put","patch"],function(t){function n(r){return function(a,l,c){return this.request(ja(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:a,data:l}))}}yo.prototype[t]=n(),yo.prototype[t+"Form"]=n(!0)});class ah{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(a){n=a});const r=this;this.promise.then(i=>{if(!r._listeners)return;let a=r._listeners.length;for(;a-- >0;)r._listeners[a](i);r._listeners=null}),this.promise.then=i=>{let a;const l=new Promise(c=>{r.subscribe(c),a=c}).then(i);return l.cancel=function(){r.unsubscribe(a)},l},t(function(a,l,c){r.reason||(r.reason=new Ya(a,l,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ah(function(i){t=i}),cancel:t}}}function K5(e){return function(n){return e.apply(null,n)}}function Q5(e){return j.isObject(e)&&e.isAxiosError===!0}function Ub(e){const t=new yo(e),n=Cb(yo.prototype.request,t);return j.extend(n,yo.prototype,t,{allOwnKeys:!0}),j.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return Ub(ja(e,i))},n}const It=Ub(Ci);It.Axios=yo;It.CanceledError=Ya;It.CancelToken=ah;It.isCancel=jb;It.VERSION=$b;It.toFormData=Au;It.AxiosError=Pe;It.Cancel=It.CanceledError;It.all=function(t){return Promise.all(t)};It.spread=K5;It.isAxiosError=Q5;It.formToJSON=e=>Mb(j.isHTMLForm(e)?new FormData(e):e);function Cn(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Zr(e){return!!e&&!!e[Ze]}function dr(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===oI}(e)||Array.isArray(e)||!!e[pg]||!!(!((t=e.constructor)===null||t===void 0)&&t[pg])||sh(e)||lh(e))}function Po(e,t,n){n===void 0&&(n=!1),Pi(e)===0?(n?Object.keys:di)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function Pi(e){var t=e[Ze];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:sh(e)?2:lh(e)?3:0}function ci(e,t){return Pi(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function G5(e,t){return Pi(e)===2?e.get(t):e[t]}function Hb(e,t,n){var r=Pi(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function Wb(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function sh(e){return nI&&e instanceof Map}function lh(e){return rI&&e instanceof Set}function so(e){return e.o||e.t}function uh(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Vb(e);delete t[Ze];for(var n=di(t),r=0;r<n.length;r++){var i=n[r],a=t[i];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(t[i]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function ch(e,t){return t===void 0&&(t=!1),dh(e)||Zr(e)||!dr(e)||(Pi(e)>1&&(e.set=e.add=e.clear=e.delete=X5),Object.freeze(e),t&&Po(e,function(n,r){return ch(r,!0)},!0)),e}function X5(){Cn(2)}function dh(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function qn(e){var t=Af[e];return t||Cn(18,e),t}function Y5(e,t){Af[e]||(Af[e]=t)}function Df(){return $a}function td(e,t){t&&(qn("Patches"),e.u=[],e.s=[],e.v=t)}function Ul(e){Mf(e),e.p.forEach(J5),e.p=null}function Mf(e){e===$a&&($a=e.l)}function sg(e){return $a={p:[],l:$a,h:e,m:!0,_:0}}function J5(e){var t=e[Ze];t.i===0||t.i===1?t.j():t.O=!0}function nd(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.g||qn("ES5").S(t,e,r),r?(n[Ze].P&&(Ul(t),Cn(4)),dr(e)&&(e=Hl(t,e),t.l||Wl(t,e)),t.u&&qn("Patches").M(n[Ze].t,e,t.u,t.s)):e=Hl(t,n,[]),Ul(t),t.u&&t.v(t.u,t.s),e!==Zb?e:void 0}function Hl(e,t,n){if(dh(t))return t;var r=t[Ze];if(!r)return Po(t,function(c,d){return lg(e,r,t,c,d,n)},!0),t;if(r.A!==e)return t;if(!r.P)return Wl(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=uh(r.k):r.o,a=i,l=!1;r.i===3&&(a=new Set(i),i.clear(),l=!0),Po(a,function(c,d){return lg(e,r,i,c,d,n,l)}),Wl(e,i,!1),n&&e.u&&qn("Patches").N(r,n,e.u,e.s)}return r.o}function lg(e,t,n,r,i,a,l){if(Zr(i)){var c=Hl(e,i,a&&t&&t.i!==3&&!ci(t.R,r)?a.concat(r):void 0);if(Hb(n,r,c),!Zr(c))return;e.m=!1}else l&&n.add(i);if(dr(i)&&!dh(i)){if(!e.h.D&&e._<1)return;Hl(e,i),t&&t.A.l||Wl(e,i)}}function Wl(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&ch(t,n)}function rd(e,t){var n=e[Ze];return(n?so(n):e)[t]}function ug(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function Pr(e){e.P||(e.P=!0,e.l&&Pr(e.l))}function od(e){e.o||(e.o=uh(e.t))}function Ff(e,t,n){var r=sh(t)?qn("MapSet").F(t,n):lh(t)?qn("MapSet").T(t,n):e.g?function(i,a){var l=Array.isArray(i),c={i:l?1:0,A:a?a.A:Df(),P:!1,I:!1,R:{},l:a,t:i,k:null,o:null,j:null,C:!1},d=c,p=Ua;l&&(d=[c],p=ia);var _=Proxy.revocable(d,p),v=_.revoke,m=_.proxy;return c.k=m,c.j=v,m}(t,n):qn("ES5").J(t,n);return(n?n.A:Df()).p.push(r),r}function eI(e){return Zr(e)||Cn(22,e),function t(n){if(!dr(n))return n;var r,i=n[Ze],a=Pi(n);if(i){if(!i.P&&(i.i<4||!qn("ES5").K(i)))return i.t;i.I=!0,r=cg(n,a),i.I=!1}else r=cg(n,a);return Po(r,function(l,c){i&&G5(i.t,l)===c||Hb(r,l,t(c))}),a===3?new Set(r):r}(e)}function cg(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return uh(e)}function tI(){function e(a,l){var c=i[a];return c?c.enumerable=l:i[a]=c={configurable:!0,enumerable:l,get:function(){var d=this[Ze];return Ua.get(d,a)},set:function(d){var p=this[Ze];Ua.set(p,a,d)}},c}function t(a){for(var l=a.length-1;l>=0;l--){var c=a[l][Ze];if(!c.P)switch(c.i){case 5:r(c)&&Pr(c);break;case 4:n(c)&&Pr(c)}}}function n(a){for(var l=a.t,c=a.k,d=di(c),p=d.length-1;p>=0;p--){var _=d[p];if(_!==Ze){var v=l[_];if(v===void 0&&!ci(l,_))return!0;var m=c[_],y=m&&m[Ze];if(y?y.t!==v:!Wb(m,v))return!0}}var w=!!l[Ze];return d.length!==di(l).length+(w?0:1)}function r(a){var l=a.k;if(l.length!==a.t.length)return!0;var c=Object.getOwnPropertyDescriptor(l,l.length-1);if(c&&!c.get)return!0;for(var d=0;d<l.length;d++)if(!l.hasOwnProperty(d))return!0;return!1}var i={};Y5("ES5",{J:function(a,l){var c=Array.isArray(a),d=function(_,v){if(_){for(var m=Array(v.length),y=0;y<v.length;y++)Object.defineProperty(m,""+y,e(y,!0));return m}var w=Vb(v);delete w[Ze];for(var S=di(w),O=0;O<S.length;O++){var b=S[O];w[b]=e(b,_||!!w[b].enumerable)}return Object.create(Object.getPrototypeOf(v),w)}(c,a),p={i:c?5:4,A:l?l.A:Df(),P:!1,I:!1,R:{},l,t:a,k:d,o:null,O:!1,C:!1};return Object.defineProperty(d,Ze,{value:p,writable:!0}),d},S:function(a,l,c){c?Zr(l)&&l[Ze].A===a&&t(a.p):(a.u&&function d(p){if(p&&typeof p=="object"){var _=p[Ze];if(_){var v=_.t,m=_.k,y=_.R,w=_.i;if(w===4)Po(m,function(k){k!==Ze&&(v[k]!==void 0||ci(v,k)?y[k]||d(m[k]):(y[k]=!0,Pr(_)))}),Po(v,function(k){m[k]!==void 0||ci(m,k)||(y[k]=!1,Pr(_))});else if(w===5){if(r(_)&&(Pr(_),y.length=!0),m.length<v.length)for(var S=m.length;S<v.length;S++)y[S]=!1;else for(var O=v.length;O<m.length;O++)y[O]=!0;for(var b=Math.min(m.length,v.length),g=0;g<b;g++)m.hasOwnProperty(g)||(y[g]=!0),y[g]===void 0&&d(m[g])}}}}(a.p[0]),t(a.p))},K:function(a){return a.i===4?n(a):r(a)}})}var dg,$a,fh=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",nI=typeof Map<"u",rI=typeof Set<"u",fg=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",Zb=fh?Symbol.for("immer-nothing"):((dg={})["immer-nothing"]=!0,dg),pg=fh?Symbol.for("immer-draftable"):"__$immer_draftable",Ze=fh?Symbol.for("immer-state"):"__$immer_state",oI=""+Object.prototype.constructor,di=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Vb=Object.getOwnPropertyDescriptors||function(e){var t={};return di(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},Af={},Ua={get:function(e,t){if(t===Ze)return e;var n=so(e);if(!ci(n,t))return function(i,a,l){var c,d=ug(a,l);return d?"value"in d?d.value:(c=d.get)===null||c===void 0?void 0:c.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!dr(r)?r:r===rd(e.t,t)?(od(e),e.o[t]=Ff(e.A.h,r,e)):r},has:function(e,t){return t in so(e)},ownKeys:function(e){return Reflect.ownKeys(so(e))},set:function(e,t,n){var r=ug(so(e),t);if(r?.set)return r.set.call(e.k,n),!0;if(!e.P){var i=rd(so(e),t),a=i?.[Ze];if(a&&a.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(Wb(n,i)&&(n!==void 0||ci(e.t,t)))return!0;od(e),Pr(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return rd(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,od(e),Pr(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=so(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){Cn(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Cn(12)}},ia={};Po(Ua,function(e,t){ia[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),ia.deleteProperty=function(e,t){return ia.set.call(this,e,t,void 0)},ia.set=function(e,t,n){return Ua.set.call(this,e[0],t,n,e[0])};var iI=function(){function e(n){var r=this;this.g=fg,this.D=!0,this.produce=function(i,a,l){if(typeof i=="function"&&typeof a!="function"){var c=a;a=i;var d=r;return function(S){var O=this;S===void 0&&(S=c);for(var b=arguments.length,g=Array(b>1?b-1:0),k=1;k<b;k++)g[k-1]=arguments[k];return d.produce(S,function(E){var D;return(D=a).call.apply(D,[O,E].concat(g))})}}var p;if(typeof a!="function"&&Cn(6),l!==void 0&&typeof l!="function"&&Cn(7),dr(i)){var _=sg(r),v=Ff(r,i,void 0),m=!0;try{p=a(v),m=!1}finally{m?Ul(_):Mf(_)}return typeof Promise<"u"&&p instanceof Promise?p.then(function(S){return td(_,l),nd(S,_)},function(S){throw Ul(_),S}):(td(_,l),nd(p,_))}if(!i||typeof i!="object"){if((p=a(i))===void 0&&(p=i),p===Zb&&(p=void 0),r.D&&ch(p,!0),l){var y=[],w=[];qn("Patches").M(i,p,y,w),l(y,w)}return p}Cn(21,i)},this.produceWithPatches=function(i,a){if(typeof i=="function")return function(p){for(var _=arguments.length,v=Array(_>1?_-1:0),m=1;m<_;m++)v[m-1]=arguments[m];return r.produceWithPatches(p,function(y){return i.apply(void 0,[y].concat(v))})};var l,c,d=r.produce(i,a,function(p,_){l=p,c=_});return typeof Promise<"u"&&d instanceof Promise?d.then(function(p){return[p,l,c]}):[d,l,c]},typeof n?.useProxies=="boolean"&&this.setUseProxies(n.useProxies),typeof n?.autoFreeze=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){dr(n)||Cn(8),Zr(n)&&(n=eI(n));var r=sg(this),i=Ff(this,n,void 0);return i[Ze].C=!0,Mf(r),i},t.finishDraft=function(n,r){var i=n&&n[Ze],a=i.A;return td(a,r),nd(void 0,a)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!fg&&Cn(20),this.g=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var a=r[i];if(a.path.length===0&&a.op==="replace"){n=a.value;break}}i>-1&&(r=r.slice(i+1));var l=qn("Patches").$;return Zr(n)?l(n,r):this.produce(n,function(c){return l(c,r)})},e}(),Qt=new iI,qb=Qt.produce;Qt.produceWithPatches.bind(Qt);Qt.setAutoFreeze.bind(Qt);Qt.setUseProxies.bind(Qt);Qt.applyPatches.bind(Qt);Qt.createDraft.bind(Qt);Qt.finishDraft.bind(Qt);function hg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function mg(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?hg(Object(n),!0).forEach(function(r){Tn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):hg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function St(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var _g=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),id=function(){return Math.random().toString(36).substring(7).split("").join(".")},Zl={INIT:"@@redux/INIT"+id(),REPLACE:"@@redux/REPLACE"+id(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+id()}};function aI(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Kb(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(St(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(St(1));return n(Kb)(e,t)}if(typeof e!="function")throw new Error(St(2));var i=e,a=t,l=[],c=l,d=!1;function p(){c===l&&(c=l.slice())}function _(){if(d)throw new Error(St(3));return a}function v(S){if(typeof S!="function")throw new Error(St(4));if(d)throw new Error(St(5));var O=!0;return p(),c.push(S),function(){if(O){if(d)throw new Error(St(6));O=!1,p();var g=c.indexOf(S);c.splice(g,1),l=null}}}function m(S){if(!aI(S))throw new Error(St(7));if(typeof S.type>"u")throw new Error(St(8));if(d)throw new Error(St(9));try{d=!0,a=i(a,S)}finally{d=!1}for(var O=l=c,b=0;b<O.length;b++){var g=O[b];g()}return S}function y(S){if(typeof S!="function")throw new Error(St(10));i=S,m({type:Zl.REPLACE})}function w(){var S,O=v;return S={subscribe:function(g){if(typeof g!="object"||g===null)throw new Error(St(11));function k(){g.next&&g.next(_())}k();var E=O(k);return{unsubscribe:E}}},S[_g]=function(){return this},S}return m({type:Zl.INIT}),r={dispatch:m,subscribe:v,getState:_,replaceReducer:y},r[_g]=w,r}function sI(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:Zl.INIT});if(typeof r>"u")throw new Error(St(12));if(typeof n(void 0,{type:Zl.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(St(13))})}function lI(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var a=Object.keys(n),l;try{sI(n)}catch(c){l=c}return function(d,p){if(d===void 0&&(d={}),l)throw l;for(var _=!1,v={},m=0;m<a.length;m++){var y=a[m],w=n[y],S=d[y],O=w(S,p);if(typeof O>"u")throw p&&p.type,new Error(St(14));v[y]=O,_=_||O!==S}return _=_||a.length!==Object.keys(d).length,_?v:d}}function Vl(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function uI(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),a=function(){throw new Error(St(15))},l={getState:i.getState,dispatch:function(){return a.apply(void 0,arguments)}},c=t.map(function(d){return d(l)});return a=Vl.apply(void 0,c)(i.dispatch),mg(mg({},i),{},{dispatch:a})}}}function Qb(e){var t=function(r){var i=r.dispatch,a=r.getState;return function(l){return function(c){return typeof c=="function"?c(i,a,e):l(c)}}};return t}var Gb=Qb();Gb.withExtraArgument=Qb;const vg=Gb;var cI=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(r[a]=i[a])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),dI=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,l;return l={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function c(p){return function(_){return d([p,_])}}function d(p){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(a=p[0]&2?i.return:p[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,p[1])).done)return a;switch(i=0,a&&(p=[p[0]&2,a.value]),p[0]){case 0:case 1:a=p;break;case 4:return n.label++,{value:p[1],done:!1};case 5:n.label++,i=p[1],p=[0];continue;case 7:p=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(p[0]===6||p[0]===2)){n=0;continue}if(p[0]===3&&(!a||p[1]>a[0]&&p[1]<a[3])){n.label=p[1];break}if(p[0]===6&&n.label<a[1]){n.label=a[1],a=p;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(p);break}a[2]&&n.ops.pop(),n.trys.pop();continue}p=t.call(e,n)}catch(_){p=[6,_],i=0}finally{r=a=0}if(p[0]&5)throw p[1];return{value:p[0]?p[1]:void 0,done:!0}}},ql=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},fI=Object.defineProperty,pI=Object.defineProperties,hI=Object.getOwnPropertyDescriptors,gg=Object.getOwnPropertySymbols,mI=Object.prototype.hasOwnProperty,_I=Object.prototype.propertyIsEnumerable,yg=function(e,t,n){return t in e?fI(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},Ar=function(e,t){for(var n in t||(t={}))mI.call(t,n)&&yg(e,n,t[n]);if(gg)for(var r=0,i=gg(t);r<i.length;r++){var n=i[r];_I.call(t,n)&&yg(e,n,t[n])}return e},ad=function(e,t){return pI(e,hI(t))},vI=function(e,t,n){return new Promise(function(r,i){var a=function(d){try{c(n.next(d))}catch(p){i(p)}},l=function(d){try{c(n.throw(d))}catch(p){i(p)}},c=function(d){return d.done?r(d.value):Promise.resolve(d.value).then(a,l)};c((n=n.apply(e,t)).next())})},gI=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Vl:Vl.apply(null,arguments)};function yI(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}var bI=function(e){cI(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,ql([void 0],n[0].concat(this)))):new(t.bind.apply(t,ql([void 0],n.concat(this))))},t}(Array);function jf(e){return dr(e)?qb(e,function(){}):e}function xI(e){return typeof e=="boolean"}function wI(){return function(t){return SI(t)}}function SI(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var r=new bI;return n&&(xI(n)?r.push(vg):r.push(vg.withExtraArgument(n.extraArgument))),r}var kI=!0;function CI(e){var t=wI(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,a=n.middleware,l=a===void 0?t():a,c=n.devTools,d=c===void 0?!0:c,p=n.preloadedState,_=p===void 0?void 0:p,v=n.enhancers,m=v===void 0?void 0:v,y;if(typeof i=="function")y=i;else if(yI(i))y=lI(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var w=l;typeof w=="function"&&(w=w(t));var S=uI.apply(void 0,w),O=Vl;d&&(O=gI(Ar({trace:!kI},typeof d=="object"&&d)));var b=[S];Array.isArray(m)?b=ql([S],m):typeof m=="function"&&(b=m(b));var g=O.apply(void 0,b);return Kb(y,_,g)}function jr(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var a=t.apply(void 0,r);if(!a)throw new Error("prepareAction did not return an object");return Ar(Ar({type:e,payload:a.payload},"meta"in a&&{meta:a.meta}),"error"in a&&{error:a.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}function Xb(e){var t={},n=[],r,i={addCase:function(a,l){var c=typeof a=="string"?a:a.type;if(c in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[c]=l,i},addMatcher:function(a,l){return n.push({matcher:a,reducer:l}),i},addDefaultCase:function(a){return r=a,i}};return e(i),[t,n,r]}function PI(e){return typeof e=="function"}function EI(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?Xb(t):[t,n,r],a=i[0],l=i[1],c=i[2],d;if(PI(e))d=function(){return jf(e())};else{var p=jf(e);d=function(){return p}}function _(v,m){v===void 0&&(v=d());var y=ql([a[m.type]],l.filter(function(w){var S=w.matcher;return S(m)}).map(function(w){var S=w.reducer;return S}));return y.filter(function(w){return!!w}).length===0&&(y=[c]),y.reduce(function(w,S){if(S)if(Zr(w)){var O=w,b=S(O,m);return b===void 0?w:b}else{if(dr(w))return qb(w,function(g){return S(g,m)});var b=S(w,m);if(b===void 0){if(w===null)return w;throw Error("A case reducer on a non-draftable value must not return undefined")}return b}return w},v)}return _.getInitialState=d,_}function OI(e,t){return e+"/"+t}function zI(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:jf(e.initialState),r=e.reducers||{},i=Object.keys(r),a={},l={},c={};i.forEach(function(_){var v=r[_],m=OI(t,_),y,w;"reducer"in v?(y=v.reducer,w=v.prepare):y=v,a[_]=y,l[m]=y,c[_]=w?jr(m,w):jr(m)});function d(){var _=typeof e.extraReducers=="function"?Xb(e.extraReducers):[e.extraReducers],v=_[0],m=v===void 0?{}:v,y=_[1],w=y===void 0?[]:y,S=_[2],O=S===void 0?void 0:S,b=Ar(Ar({},m),l);return EI(n,function(g){for(var k in b)g.addCase(k,b[k]);for(var E=0,D=w;E<D.length;E++){var F=D[E];g.addMatcher(F.matcher,F.reducer)}O&&g.addDefaultCase(O)})}var p;return{name:t,reducer:function(_,v){return p||(p=d()),p(_,v)},actions:c,caseReducers:a,getInitialState:function(){return p||(p=d()),p.getInitialState()}}}var TI="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",LI=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=TI[Math.random()*64|0];return t},BI=["name","message","stack","code"],sd=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),bg=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),RI=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=BI;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}},Yb=function(){function e(t,n,r){var i=jr(t+"/fulfilled",function(p,_,v,m){return{payload:p,meta:ad(Ar({},m||{}),{arg:v,requestId:_,requestStatus:"fulfilled"})}}),a=jr(t+"/pending",function(p,_,v){return{payload:void 0,meta:ad(Ar({},v||{}),{arg:_,requestId:p,requestStatus:"pending"})}}),l=jr(t+"/rejected",function(p,_,v,m,y){return{payload:m,error:(r&&r.serializeError||RI)(p||"Rejected"),meta:ad(Ar({},y||{}),{arg:v,requestId:_,rejectedWithValue:!!m,requestStatus:"rejected",aborted:p?.name==="AbortError",condition:p?.name==="ConditionError"})}}),c=typeof AbortController<"u"?AbortController:function(){function p(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return p.prototype.abort=function(){},p}();function d(p){return function(_,v,m){var y=r?.idGenerator?r.idGenerator(p):LI(),w=new c,S;function O(g){S=g,w.abort()}var b=function(){return vI(this,null,function(){var g,k,E,D,F,W,K;return dI(this,function(ee){switch(ee.label){case 0:return ee.trys.push([0,4,,5]),D=(g=r?.condition)==null?void 0:g.call(r,p,{getState:v,extra:m}),NI(D)?[4,D]:[3,2];case 1:D=ee.sent(),ee.label=2;case 2:if(D===!1||w.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return F=new Promise(function(q,le){return w.signal.addEventListener("abort",function(){return le({name:"AbortError",message:S||"Aborted"})})}),_(a(y,p,(k=r?.getPendingMeta)==null?void 0:k.call(r,{requestId:y,arg:p},{getState:v,extra:m}))),[4,Promise.race([F,Promise.resolve(n(p,{dispatch:_,getState:v,extra:m,requestId:y,signal:w.signal,abort:O,rejectWithValue:function(q,le){return new sd(q,le)},fulfillWithValue:function(q,le){return new bg(q,le)}})).then(function(q){if(q instanceof sd)throw q;return q instanceof bg?i(q.payload,y,p,q.meta):i(q,y,p)})])];case 3:return E=ee.sent(),[3,5];case 4:return W=ee.sent(),E=W instanceof sd?l(null,y,p,W.payload,W.meta):l(W,y,p),[3,5];case 5:return K=r&&!r.dispatchConditionRejection&&l.match(E)&&E.meta.condition,K||_(E),[2,E]}})})}();return Object.assign(b,{abort:O,requestId:y,arg:p,unwrap:function(){return b.then(II)}})}}return Object.assign(d,{pending:a,rejected:l,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e}();function II(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function NI(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var ph="listenerMiddleware";jr(ph+"/add");jr(ph+"/removeAll");jr(ph+"/remove");var xg;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);tI();const DI={loading:!0,brandloading:!0,evList:{evs:[]},search:{name:"",sortOrder:3,evType:[],brands:[],seatConfiguration:[],seatMassageFirstRow:!1,seatMassageSecondRow:!1,seatVentilationFirstRow:!1,seatVentilationSecondRow:!1,allWheelDrive:!1},searchOptions:{brands:["Audi"],seatConfig:[],bodyTypes:["Sedan"],seatConfiguration:["5 seat"]},error:""},$f=Yb("evsearch/fetchEvs",async e=>await It.post("https://api.evkx.net/api/Ev",e,{headers:{"Content-Type":"application/json"}}).then(t=>t.data).catch(t=>{console.error("error",t)})),Uf=Yb("evsearch/fetchSearchOptions",async()=>await It.get("https://api.evkx.net/api/searchoptions").then(e=>e.data).catch(e=>{console.error("error",e)})),Jb=zI({name:"evsearch",initialState:DI,reducers:{updateSortOrder:(e,t)=>{const n=t.payload.trim().toLowerCase();e.search.sortOrder=parseInt(n)},updateEvType:(e,t)=>{const n=t.payload;e.search.evType=n},updateBrands:(e,t)=>{const n=t.payload;e.search.brands=n},updateSeatConfig:(e,t)=>{const n=t.payload;e.search.seatConfiguration=n},updateAllWheelDrive:(e,t)=>{const n=t.payload;e.search.allWheelDrive=n}},extraReducers:e=>{e.addCase($f.fulfilled,(t,n)=>{const r=n.payload;t.evList=r,t.loading=!1}).addCase($f.rejected,(t,n)=>{t.error=n.error.message}).addCase(Uf.fulfilled,(t,n)=>{const r=n.payload;t.searchOptions=r,t.brandloading=!1}).addCase(Uf.rejected,(t,n)=>{t.error=n.error.message})}}),MI=Jb.reducer,{updateSortOrder:FI,updateEvType:AI,updateBrands:jI,updateSeatConfig:$I,updateAllWheelDrive:UI}=Jb.actions,ro=pk,HI=()=>Bk(),WI="_line_x3q2g_1",ZI={line:WI},VI=()=>_e("hr",{className:ZI.line}),qI="_evsearchAccordionContent_xtp78_1",KI="_scopeText_xtp78_9",QI="_scopeItems_xtp78_17",GI="_line_xtp78_25",XI="_contentTexts_xtp78_35",YI="_bottomContentTexts_xtp78_45",oo={evsearchAccordionContent:qI,scopeText:KI,scopeItems:QI,line:GI,contentTexts:XI,bottomContentTexts:YI},JI=({title:e="No info",subtitle:t="No info",topContentText:n,textList:r=[""]})=>{const[i,a]=N.useState(!1);return _e("div",{children:on(XB,{open:i,onClick:()=>a(!i),children:[_e(aR,{subtitle:t,children:e}),_e(sR,{children:on("div",{className:oo.newApiAccordionContent,children:[r.length>0&&on("div",{children:[on("p",{className:oo.scopeText,children:[qc("api_delegation.scopes"),":"]}),r.map((l,c)=>_e("div",{className:oo.scopeItems,children:l},c))]}),n&&on("div",{children:[_e("div",{className:oo.line,children:_e(VI,{})}),_e("p",{className:oo.scopeText,children:qc("api_delegation.description")}),_e("div",{className:oo.contentTexts,children:n})]}),n===void 0&&_e("div",{className:oo.contentTexts,children:qc("api_delegation.data_retrieval_failed")})]})})]})})},e3="_pageContent_r6jh1_1",t3="_page_r6jh1_1",Yi={pageContent:e3,page:t3},n3=()=>{const{t:e}=ib("common"),t=ro(g=>g.evsearchResult.loading),n=HI(),r=async()=>await n(Uf()),i=ro(g=>g.evsearchResult.evList.evs),a=ro(g=>g.evsearchResult.searchOptions.brands),l=ro(g=>g.evsearchResult.searchOptions.bodyTypes),c=ro(g=>g.evsearchResult.searchOptions.seatConfiguration),d=ro(g=>g.evsearchResult.search),p=async g=>await n($f(g)),_=ro(g=>g.evsearchResult.error);N.useEffect(()=>{t&&(p(d),r())},[]);const v=g=>{n(FI(g));const k={evType:d.evType,sortOrder:parseInt(g),name:d.name,brands:d.brands,seatConfiguration:d.seatConfiguration,seatVentilationFirstRow:d.seatVentilationFirstRow,seatVentilationSecondRow:d.seatVentilationSecondRow,seatMassageFirstRow:d.seatMassageFirstRow,seatMassageSecondRow:d.seatMassageSecondRow,allWheelDrive:d.allWheelDrive};p(k)},m=g=>{n(jI(g));const k={evType:d.evType,sortOrder:d.sortOrder,name:d.name,brands:g,seatConfiguration:d.seatConfiguration,seatVentilationFirstRow:d.seatVentilationFirstRow,seatVentilationSecondRow:d.seatVentilationSecondRow,seatMassageFirstRow:d.seatMassageFirstRow,seatMassageSecondRow:d.seatMassageSecondRow,allWheelDrive:d.allWheelDrive};p(k)},y=a.map(g=>({label:g,value:g})),w=g=>{n(AI(g));const k={evType:g,sortOrder:d.sortOrder,name:d.name,brands:d.brands,seatConfiguration:d.seatConfiguration,seatVentilationFirstRow:d.seatVentilationFirstRow,seatVentilationSecondRow:d.seatVentilationSecondRow,seatMassageFirstRow:d.seatMassageFirstRow,seatMassageSecondRow:d.seatMassageSecondRow,allWheelDrive:d.allWheelDrive};p(k)},S=g=>{n($I(g));const k={evType:d.evType,sortOrder:d.sortOrder,name:d.name,brands:d.brands,seatConfiguration:g,seatVentilationFirstRow:d.seatVentilationFirstRow,seatVentilationSecondRow:d.seatVentilationSecondRow,seatMassageFirstRow:d.seatMassageFirstRow,seatMassageSecondRow:d.seatMassageSecondRow,allWheelDrive:d.allWheelDrive};p(k)},O=g=>{const k=g.target.checked;n(UI(k));const E={evType:d.evType,sortOrder:d.sortOrder,name:d.name,brands:d.brands,seatConfiguration:d.seatConfiguration,seatVentilationFirstRow:d.seatVentilationFirstRow,seatVentilationSecondRow:d.seatVentilationSecondRow,seatMassageFirstRow:d.seatMassageFirstRow,seatMassageSecondRow:d.seatMassageSecondRow,allWheelDrive:k};p(E)},b=()=>_?_e(QB,{title:e("api_delegation.data_retrieval_failed"),variant:zr.Error,forceMobileLayout:!0,children:on("div",{children:[e("api_delegation.error_message"),": ",_]})}):t?e("api_delegation.loading")+"...":i.map((g,k)=>_e(JI,{title:g.name,subtitle:g.sortValue+" "+g.sortParameter,topContentText:g.infoUri},k));return _e("div",{className:Yi.page,children:on(uR,{children:[_e(cR,{icon:_e(VR,{}),children:e("evsearch.title")}),on(fR,{children:[on("div",{className:Yi.pageContent,children:[_e(Kv,{label:"Sortering",multiple:!1,onChange:v,options:[{label:"Merke,model",value:"1"},{label:"Rekkevidde WLTP minimum spesifikasjon",value:"2"},{label:"Netto batterystørrelse minst-størst",value:"3"},{label:"Netto batteristørrels størst-minst",value:"4"},{label:"WLTP forbruk minium spesifikasjon",value:"5"}]}),_e(Kv,{label:"Brands",multiple:!0,onChange:m,options:y}),_e("br",{}),_e(Uv,{"data-testid":"evsearch-evtype",variant:Aa.Horizontal,onChange:g=>w(g),compact:!0,legend:"Select body type",items:l.map(g=>({label:g,name:g,checked:d.evType===void 0||d.evType.includes(g)}))}),_e("br",{}),_e(wR,{items:[{content:_e(Uv,{"data-testid":"evsearch-seatconfig",variant:Aa.Horizontal,onChange:g=>S(g),compact:!0,legend:"Number of seats",items:c.map(g=>({label:g,name:g,checked:d.seatConfiguration===void 0||d.seatConfiguration.includes(g)}))}),name:"Seats"},{content:_e(kb,{checked:d.allWheelDrive,label:"All wheel drive",onChange:O,compact:!0}),name:"Drivetrain"},{content:_e("h1",{children:"heisann"}),name:"Driver Assistance"},{content:_e("h1",{children:"heisann"}),name:"Exterior"}]}),_e("br",{})]}),_e("div",{className:Yi.pageContentAccordionsContainer,children:on("div",{className:Yi.apiAccordions,children:[on("h4",{children:[e("evsearch.searchresult"),":"]}),_e("div",{className:Yi.accordionScrollContainer,children:b()})]})})]})]})})},r3=BC([{path:"/",errorElement:_e(vv,{})},{path:"evsearch",element:_e(n3,{}),errorElement:_e(vv,{})}],{basename:"/"}),o3={backendApiUrl:new URL(window.location.href).origin+"/api/",defaultLocale:"no_nb"},ol={backendApiUrl:{}.VITE_BACKEND_API_URL,defaultLocale:{}.VITE_DEFAULT_LOCALE};for(const e in ol)ol[e]===void 0&&delete ol[e];const i3={...o3,...ol};function a3(e){return i3[e]}const s3=({children:e})=>{const{i18n:t}=ib("common"),r=`/public/localizations/${t.language}.json`,i=new URL(r,import.meta.url).href;return EP("Localizations",async()=>{const l=await(await fetch(i)).json();Ot.addResourceBundle(t.language,"common",l)},{staleTime:1/0,suspense:!0}),_e(N1,{children:e})};var Kl={},l3={get exports(){return Kl},set exports(e){Kl=e}};(function(e,t){(function(n,r){r(t)})(Uo,function(n){function r(P,B){P.super_=B,P.prototype=Object.create(B.prototype,{constructor:{value:P,enumerable:!1,writable:!0,configurable:!0}})}function i(P,B){Object.defineProperty(this,"kind",{value:P,enumerable:!0}),B&&B.length&&Object.defineProperty(this,"path",{value:B,enumerable:!0})}function a(P,B,T){a.super_.call(this,"E",P),Object.defineProperty(this,"lhs",{value:B,enumerable:!0}),Object.defineProperty(this,"rhs",{value:T,enumerable:!0})}function l(P,B){l.super_.call(this,"N",P),Object.defineProperty(this,"rhs",{value:B,enumerable:!0})}function c(P,B){c.super_.call(this,"D",P),Object.defineProperty(this,"lhs",{value:B,enumerable:!0})}function d(P,B,T){d.super_.call(this,"A",P),Object.defineProperty(this,"index",{value:B,enumerable:!0}),Object.defineProperty(this,"item",{value:T,enumerable:!0})}function p(P,B,T){var A=P.slice((T||B)+1||P.length);return P.length=B<0?P.length+B:B,P.push.apply(P,A),P}function _(P){var B=typeof P>"u"?"undefined":Ie(P);return B!=="object"?B:P===Math?"math":P===null?"null":Array.isArray(P)?"array":Object.prototype.toString.call(P)==="[object Date]"?"date":typeof P.toString=="function"&&/^\/.*\//.test(P.toString())?"regexp":"object"}function v(P,B,T,A,Q,Y,re){Q=Q||[],re=re||[];var se=Q.slice(0);if(typeof Y<"u"){if(A){if(typeof A=="function"&&A(se,Y))return;if((typeof A>"u"?"undefined":Ie(A))==="object"){if(A.prefilter&&A.prefilter(se,Y))return;if(A.normalize){var Xe=A.normalize(se,Y,P,B);Xe&&(P=Xe[0],B=Xe[1])}}}se.push(Y)}_(P)==="regexp"&&_(B)==="regexp"&&(P=P.toString(),B=B.toString());var He=typeof P>"u"?"undefined":Ie(P),De=typeof B>"u"?"undefined":Ie(B),Me=He!=="undefined"||re&&re[re.length-1].lhs&&re[re.length-1].lhs.hasOwnProperty(Y),et=De!=="undefined"||re&&re[re.length-1].rhs&&re[re.length-1].rhs.hasOwnProperty(Y);if(!Me&&et)T(new l(se,B));else if(!et&&Me)T(new c(se,P));else if(_(P)!==_(B))T(new a(se,P,B));else if(_(P)==="date"&&P-B!==0)T(new a(se,P,B));else if(He==="object"&&P!==null&&B!==null)if(re.filter(function(Ne){return Ne.lhs===P}).length)P!==B&&T(new a(se,P,B));else{if(re.push({lhs:P,rhs:B}),Array.isArray(P)){var xe;for(P.length,xe=0;xe<P.length;xe++)xe>=B.length?T(new d(se,xe,new c(void 0,P[xe]))):v(P[xe],B[xe],T,A,se,xe,re);for(;xe<B.length;)T(new d(se,xe,new l(void 0,B[xe++])))}else{var Jt=Object.keys(P),Mt=Object.keys(B);Jt.forEach(function(Ne,M){var Z=Mt.indexOf(Ne);Z>=0?(v(P[Ne],B[Ne],T,A,se,Ne,re),Mt=p(Mt,Z)):v(P[Ne],void 0,T,A,se,Ne,re)}),Mt.forEach(function(Ne){v(void 0,B[Ne],T,A,se,Ne,re)})}re.length=re.length-1}else P!==B&&(He==="number"&&isNaN(P)&&isNaN(B)||T(new a(se,P,B)))}function m(P,B,T,A){return A=A||[],v(P,B,function(Q){Q&&A.push(Q)},T),A.length?A:void 0}function y(P,B,T){if(T.path&&T.path.length){var A,Q=P[B],Y=T.path.length-1;for(A=0;A<Y;A++)Q=Q[T.path[A]];switch(T.kind){case"A":y(Q[T.path[A]],T.index,T.item);break;case"D":delete Q[T.path[A]];break;case"E":case"N":Q[T.path[A]]=T.rhs}}else switch(T.kind){case"A":y(P[B],T.index,T.item);break;case"D":P=p(P,B);break;case"E":case"N":P[B]=T.rhs}return P}function w(P,B,T){if(P&&B&&T&&T.kind){for(var A=P,Q=-1,Y=T.path?T.path.length-1:0;++Q<Y;)typeof A[T.path[Q]]>"u"&&(A[T.path[Q]]=typeof T.path[Q]=="number"?[]:{}),A=A[T.path[Q]];switch(T.kind){case"A":y(T.path?A[T.path[Q]]:A,T.index,T.item);break;case"D":delete A[T.path[Q]];break;case"E":case"N":A[T.path[Q]]=T.rhs}}}function S(P,B,T){if(T.path&&T.path.length){var A,Q=P[B],Y=T.path.length-1;for(A=0;A<Y;A++)Q=Q[T.path[A]];switch(T.kind){case"A":S(Q[T.path[A]],T.index,T.item);break;case"D":Q[T.path[A]]=T.lhs;break;case"E":Q[T.path[A]]=T.lhs;break;case"N":delete Q[T.path[A]]}}else switch(T.kind){case"A":S(P[B],T.index,T.item);break;case"D":P[B]=T.lhs;break;case"E":P[B]=T.lhs;break;case"N":P=p(P,B)}return P}function O(P,B,T){if(P&&B&&T&&T.kind){var A,Q,Y=P;for(Q=T.path.length-1,A=0;A<Q;A++)typeof Y[T.path[A]]>"u"&&(Y[T.path[A]]={}),Y=Y[T.path[A]];switch(T.kind){case"A":S(Y[T.path[A]],T.index,T.item);break;case"D":Y[T.path[A]]=T.lhs;break;case"E":Y[T.path[A]]=T.lhs;break;case"N":delete Y[T.path[A]]}}}function b(P,B,T){if(P&&B){var A=function(Q){T&&!T(P,B,Q)||w(P,B,Q)};v(P,B,A)}}function g(P){return"color: "+I[P].color+"; font-weight: bold"}function k(P){var B=P.kind,T=P.path,A=P.lhs,Q=P.rhs,Y=P.index,re=P.item;switch(B){case"E":return[T.join("."),A,"→",Q];case"N":return[T.join("."),Q];case"D":return[T.join(".")];case"A":return[T.join(".")+"["+Y+"]",re];default:return[]}}function E(P,B,T,A){var Q=m(P,B);try{A?T.groupCollapsed("diff"):T.group("diff")}catch{T.log("diff")}Q?Q.forEach(function(Y){var re=Y.kind,se=k(Y);T.log.apply(T,["%c "+I[re].text,g(re)].concat(G(se)))}):T.log("—— no diff ——");try{T.groupEnd()}catch{T.log("—— diff end —— ")}}function D(P,B,T,A){switch(typeof P>"u"?"undefined":Ie(P)){case"object":return typeof P[A]=="function"?P[A].apply(P,G(T)):P[A];case"function":return P(B);default:return P}}function F(P){var B=P.timestamp,T=P.duration;return function(A,Q,Y){var re=["action"];return re.push("%c"+String(A.type)),B&&re.push("%c@ "+Q),T&&re.push("%c(in "+Y.toFixed(2)+" ms)"),re.join(" ")}}function W(P,B){var T=B.logger,A=B.actionTransformer,Q=B.titleFormatter,Y=Q===void 0?F(B):Q,re=B.collapsed,se=B.colors,Xe=B.level,He=B.diff,De=typeof B.titleFormatter>"u";P.forEach(function(Me,et){var xe=Me.started,Jt=Me.startedTime,Mt=Me.action,Ne=Me.prevState,M=Me.error,Z=Me.took,X=Me.nextState,ae=P[et+1];ae&&(X=ae.prevState,Z=ae.started-xe);var oe=A(Mt),Te=typeof re=="function"?re(function(){return X},Mt,Me):re,we=Ue(Jt),ve=se.title?"color: "+se.title(oe)+";":"",ge=["color: gray; font-weight: lighter;"];ge.push(ve),B.timestamp&&ge.push("color: gray; font-weight: lighter;"),B.duration&&ge.push("color: gray; font-weight: lighter;");var Oe=Y(oe,we,Z);try{Te?se.title&&De?T.groupCollapsed.apply(T,["%c "+Oe].concat(ge)):T.groupCollapsed(Oe):se.title&&De?T.group.apply(T,["%c "+Oe].concat(ge)):T.group(Oe)}catch{T.log(Oe)}var We=D(Xe,oe,[Ne],"prevState"),Tt=D(Xe,oe,[oe],"action"),bt=D(Xe,oe,[M,Ne],"error"),Ft=D(Xe,oe,[X],"nextState");if(We)if(se.prevState){var Qn="color: "+se.prevState(Ne)+"; font-weight: bold";T[We]("%c prev state",Qn,Ne)}else T[We]("prev state",Ne);if(Tt)if(se.action){var Gn="color: "+se.action(oe)+"; font-weight: bold";T[Tt]("%c action    ",Gn,oe)}else T[Tt]("action    ",oe);if(M&&bt)if(se.error){var en="color: "+se.error(M,Ne)+"; font-weight: bold;";T[bt]("%c error     ",en,M)}else T[bt]("error     ",M);if(Ft)if(se.nextState){var hr="color: "+se.nextState(X)+"; font-weight: bold";T[Ft]("%c next state",hr,X)}else T[Ft]("next state",X);He&&E(Ne,X,T,Te);try{T.groupEnd()}catch{T.log("—— log end ——")}})}function K(){var P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},B=Object.assign({},ne,P),T=B.logger,A=B.stateTransformer,Q=B.errorTransformer,Y=B.predicate,re=B.logErrors,se=B.diffPredicate;if(typeof T>"u")return function(){return function(He){return function(De){return He(De)}}};if(P.getState&&P.dispatch)return console.error(`[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:
// Logger with default options
import { logger } from 'redux-logger'
const store = createStore(
  reducer,
  applyMiddleware(logger)
)
// Or you can create your own logger with custom options http://bit.ly/redux-logger-options
import createLogger from 'redux-logger'
const logger = createLogger({
  // ...options
});
const store = createStore(
  reducer,
  applyMiddleware(logger)
)
`),function(){return function(He){return function(De){return He(De)}}};var Xe=[];return function(He){var De=He.getState;return function(Me){return function(et){if(typeof Y=="function"&&!Y(De,et))return Me(et);var xe={};Xe.push(xe),xe.started=ue.now(),xe.startedTime=new Date,xe.prevState=A(De()),xe.action=et;var Jt=void 0;if(re)try{Jt=Me(et)}catch(Ne){xe.error=Q(Ne)}else Jt=Me(et);xe.took=ue.now()-xe.started,xe.nextState=A(De());var Mt=B.diff&&typeof se=="function"?se(De,et):B.diff;if(W(Xe,Object.assign({},B,{diff:Mt})),Xe.length=0,xe.error)throw xe.error;return Jt}}}}var ee,q,le=function(P,B){return new Array(B+1).join(P)},he=function(P,B){return le("0",B-P.toString().length)+P},Ue=function(P){return he(P.getHours(),2)+":"+he(P.getMinutes(),2)+":"+he(P.getSeconds(),2)+"."+he(P.getMilliseconds(),3)},ue=typeof performance<"u"&&performance!==null&&typeof performance.now=="function"?performance:Date,Ie=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(P){return typeof P}:function(P){return P&&typeof Symbol=="function"&&P.constructor===Symbol&&P!==Symbol.prototype?"symbol":typeof P},G=function(P){if(Array.isArray(P)){for(var B=0,T=Array(P.length);B<P.length;B++)T[B]=P[B];return T}return Array.from(P)},ce=[];ee=(typeof Uo>"u"?"undefined":Ie(Uo))==="object"&&Uo?Uo:typeof window<"u"?window:{},q=ee.DeepDiff,q&&ce.push(function(){typeof q<"u"&&ee.DeepDiff===m&&(ee.DeepDiff=q,q=void 0)}),r(a,i),r(l,i),r(c,i),r(d,i),Object.defineProperties(m,{diff:{value:m,enumerable:!0},observableDiff:{value:v,enumerable:!0},applyDiff:{value:b,enumerable:!0},applyChange:{value:w,enumerable:!0},revertChange:{value:O,enumerable:!0},isConflict:{value:function(){return typeof q<"u"},enumerable:!0},noConflict:{value:function(){return ce&&(ce.forEach(function(P){P()}),ce=null),m},enumerable:!0}});var I={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},ne={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(P){return P},actionTransformer:function(P){return P},errorTransformer:function(P){return P},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},H=function(){var P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},B=P.dispatch,T=P.getState;return typeof B=="function"||typeof T=="function"?K()({dispatch:B,getState:T}):void console.error(`
[redux-logger v3] BREAKING CHANGE
[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.
[redux-logger v3] Change
[redux-logger v3] import createLogger from 'redux-logger'
[redux-logger v3] to
[redux-logger v3] import { createLogger } from 'redux-logger'
`)};n.defaults=ne,n.createLogger=K,n.logger=H,n.default=H,Object.defineProperty(n,"__esModule",{value:!0})})})(l3,Kl);Kl.createLogger();const u3=CI({reducer:{evsearchResult:MI}}),c3=e=>{if(e==="no_nb")return"no_nb";if(e==="en")return"en";if(e==="no_nn")return"no_nn"};o2(WC).init({lng:c3("no_nb"),fallbackLng:a3("defaultLocale"),ns:["common"],defaultNS:"common",returnNull:!1},()=>{const e=new mP({defaultOptions:void 0});L0(document.getElementById("root")).render(_e(N.StrictMode,{children:_e(zk,{store:u3,children:_e(xP,{client:e,children:_e(s3,{children:_e(OC,{router:r3})})})})}))});
