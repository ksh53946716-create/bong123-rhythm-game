(()=>{var kl=function(n){let e=[],t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Cp=function(n){let e=[],t=0,r=0;for(;t<n.length;){let i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){let o=n[t++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){let o=n[t++],a=n[t++],u=n[t++],h=((i&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{let o=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Ol={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();let t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){let o=n[i],a=i+1<n.length,u=a?n[i+1]:0,h=i+2<n.length,d=h?n[i+2]:0,p=o>>2,v=(o&3)<<4|u>>4,A=(u&15)<<2|d>>6,S=d&63;h||(S=64,a||(A=64)),r.push(t[p],t[v],t[A],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(kl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Cp(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();let t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){let o=t[n.charAt(i++)],u=i<n.length?t[n.charAt(i)]:0;++i;let d=i<n.length?t[n.charAt(i)]:64;++i;let v=i<n.length?t[n.charAt(i)]:64;if(++i,o==null||u==null||d==null||v==null)throw new uo;let A=o<<2|u>>4;if(r.push(A),d!==64){let S=u<<4&240|d>>2;if(r.push(S),v!==64){let N=d<<6&192|v;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},uo=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},Dp=function(n){let e=kl(n);return Ol.encodeByteArray(e,!0)},er=function(n){return Dp(n).replace(/\./g,"")},ho=function(n){try{return Ol.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Np(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var kp=()=>Np().__FIREBASE_DEFAULTS__,Op=()=>{if(typeof process>"u"||typeof process.env>"u")return;let n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},xp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=n&&ho(n[1]);return e&&JSON.parse(e)},si=()=>{try{return kp()||Op()||xp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},fo=n=>{var e,t;return(t=(e=si())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},xl=n=>{let e=fo(n);if(!e)return;let t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);let r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},po=()=>{var n;return(n=si())===null||n===void 0?void 0:n.config},mo=n=>{var e;return(e=si())===null||e===void 0?void 0:e[`_${n}`]};var ii=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}};function Vl(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");let a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[er(JSON.stringify(t)),er(JSON.stringify(a)),""].join(".")}function ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ll(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ue())}function Vp(){var n;let e=(n=si())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ml(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Fl(){let n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ul(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Bl(){let n=ue();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ql(){return!Vp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function go(){try{return typeof indexedDB=="object"}catch{return!1}}function jl(){return new Promise((n,e)=>{try{let t=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}var Lp="FirebaseError",Se=class n extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Lp,Object.setPrototypeOf(this,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nt.prototype.create)}},nt=class{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?Mp(o,r):"Error",u=`${this.serviceName}: ${a} (${i}).`;return new Se(i,u,r)}};function Mp(n,e){return n.replace(Fp,(t,r)=>{let i=e[r];return i!=null?String(i):`<${r}?>`})}var Fp=/\{\$([^}]+)}/g;function zl(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ot(n,e){if(n===e)return!0;let t=Object.keys(n),r=Object.keys(e);for(let i of t){if(!r.includes(i))return!1;let o=n[i],a=e[i];if(Nl(o)&&Nl(a)){if(!Ot(o,a))return!1}else if(o!==a)return!1}for(let i of r)if(!t.includes(i))return!1;return!0}function Nl(n){return n!==null&&typeof n=="object"}function nn(n){let e=[];for(let[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function rn(n){let e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){let[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function sn(n){let e=n.indexOf("?");if(!e)return"";let t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Gl(n,e){let t=new lo(n,e);return t.subscribe.bind(t)}var lo=class{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Up(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=co),i.error===void 0&&(i.error=co),i.complete===void 0&&(i.complete=co);let o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function Up(n,e){if(typeof n!="object"||n===null)return!1;for(let t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function co(){}var Nv=4*60*60*1e3;function Y(n){return n&&n._delegate?n._delegate:n}var De=class{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var xt="[DEFAULT]";var _o=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let r=new ii;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qp(e))try{this.getOrInitializeService({instanceIdentifier:xt})}catch{}for(let[t,r]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(t);try{let o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xt){return this.instances.has(e)}getOptions(e=xt){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[o,a]of this.instancesDeferred.entries()){let u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(i)}return i}onInit(e,t){var r;let i=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);let a=this.instances.get(i);return a&&e(a,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Bp(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xt){return this.component?this.component.multipleInstances?e:xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function Bp(n){return n===xt?void 0:n}function qp(n){return n.instantiationMode==="EAGER"}var oi=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new _o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}};var jp=[],q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(q||(q={}));var zp={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},Gp=q.INFO,Kp={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},$p=(n,e,...t)=>{if(e<n.logLevel)return;let r=new Date().toISOString(),i=Kp[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},gt=class{constructor(e){this.name=e,this._logLevel=Gp,this._logHandler=$p,this._userLogHandler=null,jp.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...e),this._logHandler(this,q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...e),this._logHandler(this,q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,q.INFO,...e),this._logHandler(this,q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,q.WARN,...e),this._logHandler(this,q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...e),this._logHandler(this,q.ERROR,...e)}};var Wp=(n,e)=>e.some(t=>n instanceof t),Kl,$l;function Hp(){return Kl||(Kl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qp(){return $l||($l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var Wl=new WeakMap,vo=new WeakMap,Hl=new WeakMap,yo=new WeakMap,wo=new WeakMap;function Jp(n){let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(Ue(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Wl.set(t,n)}).catch(()=>{}),wo.set(e,n),e}function Yp(n){if(vo.has(n))return;let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});vo.set(n,e)}var Io={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return vo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Hl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ue(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ql(n){Io=n(Io)}function Xp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){let r=n.call(ai(this),e,...t);return Hl.set(r,e.sort?e.sort():[e]),Ue(r)}:Qp().includes(n)?function(...e){return n.apply(ai(this),e),Ue(Wl.get(this))}:function(...e){return Ue(n.apply(ai(this),e))}}function Zp(n){return typeof n=="function"?Xp(n):(n instanceof IDBTransaction&&Yp(n),Wp(n,Hp())?new Proxy(n,Io):n)}function Ue(n){if(n instanceof IDBRequest)return Jp(n);if(yo.has(n))return yo.get(n);let e=Zp(n);return e!==n&&(yo.set(n,e),wo.set(e,n)),e}var ai=n=>wo.get(n);function Yl(n,e,{blocked:t,upgrade:r,blocking:i,terminated:o}={}){let a=indexedDB.open(n,e),u=Ue(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Ue(a.result),h.oldVersion,h.newVersion,Ue(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}var em=["get","getKey","getAll","getAllKeys","count"],tm=["put","add","delete","clear"],Eo=new Map;function Jl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Eo.get(e))return Eo.get(e);let t=e.replace(/FromIndex$/,""),r=e!==t,i=tm.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||em.includes(t)))return;let o=async function(a,...u){let h=this.transaction(a,i?"readwrite":"readonly"),d=h.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[t](...u),i&&h.done]))[0]};return Eo.set(e,o),o}Ql(n=>({...n,get:(e,t,r)=>Jl(e,t)||n.get(e,t,r),has:(e,t)=>!!Jl(e,t)||n.has(e,t)}));var Ao=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(nm(t)){let r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}};function nm(n){let e=n.getComponent();return e?.type==="VERSION"}var bo="@firebase/app",Xl="0.10.13";var rt=new gt("@firebase/app"),rm="@firebase/app-compat",im="@firebase/analytics-compat",sm="@firebase/analytics",om="@firebase/app-check-compat",am="@firebase/app-check",cm="@firebase/auth",um="@firebase/auth-compat",lm="@firebase/database",hm="@firebase/data-connect",dm="@firebase/database-compat",fm="@firebase/functions",pm="@firebase/functions-compat",mm="@firebase/installations",gm="@firebase/installations-compat",_m="@firebase/messaging",ym="@firebase/messaging-compat",vm="@firebase/performance",Im="@firebase/performance-compat",wm="@firebase/remote-config",Em="@firebase/remote-config-compat",Tm="@firebase/storage",Am="@firebase/storage-compat",bm="@firebase/firestore",Sm="@firebase/vertexai-preview",Rm="@firebase/firestore-compat",Pm="firebase",Cm="10.14.1";var So="[DEFAULT]",Dm={[bo]:"fire-core",[rm]:"fire-core-compat",[sm]:"fire-analytics",[im]:"fire-analytics-compat",[am]:"fire-app-check",[om]:"fire-app-check-compat",[cm]:"fire-auth",[um]:"fire-auth-compat",[lm]:"fire-rtdb",[hm]:"fire-data-connect",[dm]:"fire-rtdb-compat",[fm]:"fire-fn",[pm]:"fire-fn-compat",[mm]:"fire-iid",[gm]:"fire-iid-compat",[_m]:"fire-fcm",[ym]:"fire-fcm-compat",[vm]:"fire-perf",[Im]:"fire-perf-compat",[wm]:"fire-rc",[Em]:"fire-rc-compat",[Tm]:"fire-gcs",[Am]:"fire-gcs-compat",[bm]:"fire-fst",[Rm]:"fire-fst-compat",[Sm]:"fire-vertex","fire-js":"fire-js",[Pm]:"fire-js-all"};var ci=new Map,Nm=new Map,Ro=new Map;function Zl(n,e){try{n.container.addComponent(e)}catch(t){rt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function yt(n){let e=n.name;if(Ro.has(e))return rt.debug(`There were multiple attempts to register component ${e}.`),!1;Ro.set(e,n);for(let t of ci.values())Zl(t,n);for(let t of Nm.values())Zl(t,n);return!0}function nr(n,e){let t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Re(n){return n.settings!==void 0}var km={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_t=new nt("app","Firebase",km);var Po=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new De("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _t.create("app-deleted",{appName:this._name})}};var vt=Cm;function No(n,e={}){let t=n;typeof e!="object"&&(e={name:e});let r=Object.assign({name:So,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw _t.create("bad-app-name",{appName:String(i)});if(t||(t=po()),!t)throw _t.create("no-options");let o=ci.get(i);if(o){if(Ot(t,o.options)&&Ot(r,o.config))return o;throw _t.create("duplicate-app",{appName:i})}let a=new oi(i);for(let h of Ro.values())a.addComponent(h);let u=new Po(t,r,a);return ci.set(i,u),u}function ui(n=So){let e=ci.get(n);if(!e&&n===So&&po())return No();if(!e)throw _t.create("no-app",{appName:n});return e}function Ve(n,e,t){var r;let i=(r=Dm[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);let o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){let u=[`Unable to register library "${i}" with version "${e}":`];o&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rt.warn(u.join(" "));return}yt(new De(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}var Om="firebase-heartbeat-database",xm=1,tr="firebase-heartbeat-store",To=null;function rh(){return To||(To=Yl(Om,xm,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(tr)}catch(t){console.warn(t)}}}}).catch(n=>{throw _t.create("idb-open",{originalErrorMessage:n.message})})),To}async function Vm(n){try{let t=(await rh()).transaction(tr),r=await t.objectStore(tr).get(ih(n));return await t.done,r}catch(e){if(e instanceof Se)rt.warn(e.message);else{let t=_t.create("idb-get",{originalErrorMessage:e?.message});rt.warn(t.message)}}}async function eh(n,e){try{let r=(await rh()).transaction(tr,"readwrite");await r.objectStore(tr).put(e,ih(n)),await r.done}catch(t){if(t instanceof Se)rt.warn(t.message);else{let r=_t.create("idb-set",{originalErrorMessage:t?.message});rt.warn(r.message)}}}function ih(n){return`${n.name}!${n.options.appId}`}var Lm=1024,Mm=30*24*60*60*1e3,Co=class{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new Do(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{let i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=th();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{let u=new Date(a.date).valueOf();return Date.now()-u<=Mm}),this._storage.overwrite(this._heartbeatsCache))}catch(r){rt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";let t=th(),{heartbeatsToSend:r,unsentEntries:i}=Fm(this._heartbeatsCache.heartbeats),o=er(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return rt.warn(t),""}}};function th(){return new Date().toISOString().substring(0,10)}function Fm(n,e=Lm){let t=[],r=n.slice();for(let i of n){let o=t.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),nh(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),nh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}var Do=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return go()?jl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let t=await Vm(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return eh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return eh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}};function nh(n){return er(JSON.stringify({version:2,heartbeats:n})).length}function Um(n){yt(new De("platform-logger",e=>new Ao(e),"PRIVATE")),yt(new De("heartbeat",e=>new Co(e),"PRIVATE")),Ve(bo,Xl,n),Ve(bo,Xl,"esm2017"),Ve("fire-js","")}Um("");var Bm="firebase",qm="10.14.1";Ve(Bm,qm,"app");function li(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function wh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var Eh=wh,Th=new nt("auth","Firebase",wh());var gi=new gt("@firebase/auth");function jm(n,...e){gi.logLevel<=q.WARN&&gi.warn(`Auth (${vt}): ${n}`,...e)}function di(n,...e){gi.logLevel<=q.ERROR&&gi.error(`Auth (${vt}): ${n}`,...e)}function Ne(n,...e){throw Zo(n,...e)}function Le(n,...e){return Zo(n,...e)}function Xo(n,e,t){let r=Object.assign(Object.assign({},Eh()),{[e]:t});return new nt("auth","Firebase",r).create(e,{appName:n.name})}function qe(n){return Xo(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ah(n,e,t){let r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ne(n,"argument-error"),Xo(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Zo(n,...e){if(typeof n!="string"){let t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Th.create(n,...e)}function V(n,e,...t){if(!n)throw Zo(e,...t)}function Be(n){let e="INTERNAL ASSERTION FAILED: "+n;throw di(e),new Error(e)}function st(n,e){n||Be(e)}function xo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function zm(){return sh()==="http:"||sh()==="https:"}function sh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}function Gm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zm()||Fl()||"connection"in navigator)?navigator.onLine:!0}function Km(){if(typeof navigator>"u")return null;let n=navigator;return n.languages&&n.languages[0]||n.language||null}var Vt=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,st(t>e,"Short delay should be less than long delay!"),this.isMobile=Ll()||Ul()}get(){return Gm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function ea(n,e){st(n.emulator,"Emulator should always be set here");let{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}var _i=class{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Be("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Be("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Be("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};var $m={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};var Wm=new Vt(3e4,6e4);function oe(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function de(n,e,t,r,i={}){return bh(n,i,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});let u=nn(Object.assign({key:n.config.apiKey},a)).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);let d=Object.assign({method:e,headers:h},o);return Ml()||(d.referrerPolicy="no-referrer"),_i.fetch()(Sh(n,n.config.apiHost,t,u),d)})}async function bh(n,e,t){n._canInitEmulator=!1;let r=Object.assign(Object.assign({},$m),e);try{let i=new Vo(n),o=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();let a=await o.json();if("needConfirmation"in a)throw rr(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{let u=o.ok?a.errorMessage:a.error.message,[h,d]=u.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw rr(n,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw rr(n,"email-already-in-use",a);if(h==="USER_DISABLED")throw rr(n,"user-disabled",a);let p=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Xo(n,p,d);Ne(n,p)}}catch(i){if(i instanceof Se)throw i;Ne(n,"network-request-failed",{message:String(i)})}}async function Et(n,e,t,r,i={}){let o=await de(n,e,t,r,i);return"mfaPendingCredential"in o&&Ne(n,"multi-factor-auth-required",{_serverResponse:o}),o}function Sh(n,e,t,r){let i=`${e}${t}?${r}`;return n.config.emulator?ea(n.config,i):`${n.config.apiScheme}://${i}`}function Hm(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var Vo=class{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Le(this.auth,"network-request-failed")),Wm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}};function rr(n,e,t){let r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);let i=Le(n,e,r);return i.customData._tokenResponse=t,i}function oh(n){return n!==void 0&&n.enterprise!==void 0}var Lo=class{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Hm(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}};async function Qm(n,e){return de(n,"GET","/v2/recaptchaConfig",oe(n,e))}async function Jm(n,e){return de(n,"POST","/v1/accounts:delete",e)}async function Rh(n,e){return de(n,"POST","/v1/accounts:lookup",e)}function ir(n){if(n)try{let e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ph(n,e=!1){let t=Y(n),r=await t.getIdToken(e),i=ta(r);V(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");let o=typeof i.firebase=="object"?i.firebase:void 0,a=o?.sign_in_provider;return{claims:i,token:r,authTime:ir(ko(i.auth_time)),issuedAtTime:ir(ko(i.iat)),expirationTime:ir(ko(i.exp)),signInProvider:a||null,signInSecondFactor:o?.sign_in_second_factor||null}}function ko(n){return Number(n)*1e3}function ta(n){let[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return di("JWT malformed, contained fewer than 3 sections"),null;try{let i=ho(t);return i?JSON.parse(i):(di("Failed to decode base64 JWT payload"),null)}catch(i){return di("Caught error parsing JWT payload as JSON",i?.toString()),null}}function ah(n){let e=ta(n);return V(e,"internal-error"),V(typeof e.exp<"u","internal-error"),V(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}async function an(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Se&&Ym(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Ym({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}var Mo=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;let i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};var or=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ir(this.lastLoginAt),this.creationTime=ir(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};async function ar(n){var e;let t=n.auth,r=await n.getIdToken(),i=await an(n,Rh(t,{idToken:r}));V(i?.users.length,t,"internal-error");let o=i.users[0];n._notifyReloadListener(o);let a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Dh(o.providerUserInfo):[],u=Xm(n.providerData,a),h=n.isAnonymous,d=!(n.email&&o.passwordHash)&&!u?.length,p=h?d:!1,v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new or(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(n,v)}async function Ch(n){let e=Y(n);await ar(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Xm(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Dh(n){return n.map(e=>{var{providerId:t}=e,r=li(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}async function Zm(n,e){let t=await bh(n,{},async()=>{let r=nn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=n.config,a=Sh(n,i,"/v1/token",`key=${o}`),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",_i.fetch()(a,{method:"POST",headers:u,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function eg(n,e){return de(n,"POST","/v2/accounts:revokeToken",oe(n,e))}var sr=class n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken<"u","internal-error"),V(typeof e.refreshToken<"u","internal-error");let t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ah(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){V(e.length!==0,"internal-error");let t=ah(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(V(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:i,expiresIn:o}=await Zm(e,t);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){let{refreshToken:r,accessToken:i,expirationTime:o}=t,a=new n;return r&&(V(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(V(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),o&&(V(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new n,this.toJSON())}_performRefresh(){return Be("not implemented")}};function It(n,e){V(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}var cn=class n{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,o=li(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Mo(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new or(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){let t=await an(this,this.stsTokenManager.getToken(this.auth,e));return V(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ph(this,e)}reload(){return Ch(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ar(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Re(this.auth.app))return Promise.reject(qe(this.auth));let e=await this.getIdToken();return await an(this,Jm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,o,a,u,h,d,p;let v=(r=t.displayName)!==null&&r!==void 0?r:void 0,A=(i=t.email)!==null&&i!==void 0?i:void 0,S=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,N=(a=t.photoURL)!==null&&a!==void 0?a:void 0,k=(u=t.tenantId)!==null&&u!==void 0?u:void 0,D=(h=t._redirectEventId)!==null&&h!==void 0?h:void 0,B=(d=t.createdAt)!==null&&d!==void 0?d:void 0,z=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:G,emailVerified:X,isAnonymous:we,providerData:H,stsTokenManager:I}=t;V(G&&I,e,"internal-error");let m=sr.fromJSON(this.name,I);V(typeof G=="string",e,"internal-error"),It(v,e.name),It(A,e.name),V(typeof X=="boolean",e,"internal-error"),V(typeof we=="boolean",e,"internal-error"),It(S,e.name),It(N,e.name),It(k,e.name),It(D,e.name),It(B,e.name),It(z,e.name);let _=new n({uid:G,auth:e,email:A,emailVerified:X,displayName:v,isAnonymous:we,photoURL:N,phoneNumber:S,tenantId:k,stsTokenManager:m,createdAt:B,lastLoginAt:z});return H&&Array.isArray(H)&&(_.providerData=H.map(y=>Object.assign({},y))),D&&(_._redirectEventId=D),_}static async _fromIdTokenResponse(e,t,r=!1){let i=new sr;i.updateFromServerResponse(t);let o=new n({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ar(o),o}static async _fromGetAccountInfoResponse(e,t,r){let i=t.users[0];V(i.localId!==void 0,"internal-error");let o=i.providerUserInfo!==void 0?Dh(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!o?.length,u=new sr;u.updateFromIdToken(r);let h=new n({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new or(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!o?.length};return Object.assign(h,d),h}};var ch=new Map;function it(n){st(n instanceof Function,"Expected a class definition");let e=ch.get(n);return e?(st(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ch.set(n,e),e)}var yi=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};yi.type="NONE";var Fo=yi;function fi(n,e,t){return`firebase:${n}:${e}:${t}`}var vi=class n{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:i,name:o}=this.auth;this.fullUserKey=fi(this.userKey,i.apiKey,o),this.fullPersistenceKey=fi("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?cn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new n(it(Fo),e,r);let i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d),o=i[0]||it(Fo),a=fi(r,e.config.apiKey,e.name),u=null;for(let d of t)try{let p=await d._get(a);if(p){let v=cn._fromJSON(e,p);d!==o&&(u=v),o=d;break}}catch{}let h=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new n(o,e,r):(o=h[0],u&&await o._set(a,u.toJSON()),await Promise.all(t.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new n(o,e,r))}};function uh(n){let e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(xh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Nh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Lh(e))return"Blackberry";if(Mh(e))return"Webos";if(kh(e))return"Safari";if((e.includes("chrome/")||Oh(e))&&!e.includes("edge/"))return"Chrome";if(Vh(e))return"Android";{let t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Nh(n=ue()){return/firefox\//i.test(n)}function kh(n=ue()){let e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Oh(n=ue()){return/crios\//i.test(n)}function xh(n=ue()){return/iemobile/i.test(n)}function Vh(n=ue()){return/android/i.test(n)}function Lh(n=ue()){return/blackberry/i.test(n)}function Mh(n=ue()){return/webos/i.test(n)}function na(n=ue()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function tg(n=ue()){var e;return na(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ng(){return Bl()&&document.documentMode===10}function Fh(n=ue()){return na(n)||Vh(n)||Mh(n)||Lh(n)||/windows phone/i.test(n)||xh(n)}function Uh(n,e=[]){let t;switch(n){case"Browser":t=uh(ue());break;case"Worker":t=`${uh(ue())}-${n}`;break;default:t=n}let r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${vt}/${r}`}var Uo=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let r=o=>new Promise((a,u)=>{try{let h=e(o);a(h)}catch(h){u(h)}});r.onAbort=t,this.queue.push(r);let i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(let i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}};async function rg(n,e={}){return de(n,"GET","/v2/passwordPolicy",oe(n,e))}var ig=6,Bo=class{constructor(e){var t,r,i,o;let a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:ig,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,o,a,u;let h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(t=h.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),h.isValid&&(h.isValid=(r=h.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),h.isValid&&(h.isValid=(i=h.containsLowercaseLetter)!==null&&i!==void 0?i:!0),h.isValid&&(h.isValid=(o=h.containsUppercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(a=h.containsNumericCharacter)!==null&&a!==void 0?a:!0),h.isValid&&(h.isValid=(u=h.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),h}validatePasswordLengthOptions(e,t){let r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}};var qo=class{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ii(this),this.idTokenSubscription=new Ii(this),this.beforeStateQueue=new Uo(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Th,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=it(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await vi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await Rh(this,{idToken:e}),r=await cn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Re(this.app)){let a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}let r=await this.assertedPersistence.getCurrentUser(),i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,u=i?._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===u)&&h?.user&&(i=h.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ar(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Km()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Re(this.app))return Promise.reject(qe(this));let t=e?Y(e):null;return t&&V(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Re(this.app)?Promise.reject(qe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Re(this.app)?Promise.reject(qe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(it(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await rg(this),t=new Bo(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new nt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await eg(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&it(e)||this._popupRedirectResolver;V(t,this,"argument-error"),this.redirectPersistenceManager=await vi.create(this,[it(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};let o=typeof t=="function"?t:t.next.bind(t),a=!1,u=this._isInitialized?Promise.resolve():this._initializationPromise;if(V(u,this,"internal-error"),u.then(()=>{a||o(this.currentUser)}),typeof t=="function"){let h=e.addObserver(t,r,i);return()=>{a=!0,h()}}else{let h=e.addObserver(t);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Uh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);let i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;let t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&jm(`Error while retrieving App Check token: ${t.error}`),t?.token}};function Me(n){return Y(n)}var Ii=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=Gl(t=>this.observer=t)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};var Mi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function sg(n){Mi=n}function Bh(n){return Mi.loadJS(n)}function og(){return Mi.recaptchaEnterpriseScript}function ag(){return Mi.gapiScript}function qh(n){return`__${n}${Math.floor(Math.random()*1e6)}`}var cg="recaptcha-enterprise",ug="NO_RECAPTCHA",jo=class{constructor(e){this.type=cg,this.auth=Me(e)}async verify(e="verify",t=!1){async function r(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,u)=>{Qm(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{let d=new Lo(h);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,a(d.siteKey)}}).catch(h=>{u(h)})})}function i(o,a,u){let h=window.grecaptcha;oh(h)?h.enterprise.ready(()=>{h.enterprise.execute(o,{action:e}).then(d=>{a(d)}).catch(()=>{a(ug)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,a)=>{r(this.auth).then(u=>{if(!t&&oh(window.grecaptcha))i(u,o,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let h=og();h.length!==0&&(h+=u),Bh(h).then(()=>{i(u,o,a)}).catch(d=>{a(d)})}}).catch(u=>{a(u)})})}};async function lh(n,e,t,r=!1){let i=new jo(n),o;try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}let a=Object.assign({},e);return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function zo(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){let o=await lh(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let a=await lh(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(o)})}function jh(n,e){let t=nr(n,"auth");if(t.isInitialized()){let i=t.getImmediate(),o=t.getOptions();if(Ot(o,e??{}))return i;Ne(i,"already-initialized")}return t.initialize({options:e})}function lg(n,e){let t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(it);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Fi(n,e,t){let r=Me(n);V(r._canInitEmulator,r,"emulator-config-failed"),V(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");let i=!!t?.disableWarnings,o=zh(e),{host:a,port:u}=hg(e),h=u===null?"":`:${u}`;r.config.emulator={url:`${o}//${a}${h}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:u,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||dg()}function zh(n){let e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function hg(n){let e=zh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};let r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){let o=i[1];return{host:o,port:hh(r.substr(o.length+1))}}else{let[o,a]=r.split(":");return{host:o,port:hh(a)}}}function hh(n){if(!n)return null;let e=Number(n);return isNaN(e)?null:e}function dg(){function n(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}var Lt=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Be("not implemented")}_getIdTokenResponse(e){return Be("not implemented")}_linkToIdToken(e,t){return Be("not implemented")}_getReauthenticationResolver(e){return Be("not implemented")}};async function fg(n,e){return de(n,"POST","/v1/accounts:update",e)}async function pg(n,e){return de(n,"POST","/v1/accounts:signUp",e)}async function mg(n,e){return Et(n,"POST","/v1/accounts:signInWithPassword",oe(n,e))}async function gg(n,e){return Et(n,"POST","/v1/accounts:signInWithEmailLink",oe(n,e))}async function _g(n,e){return Et(n,"POST","/v1/accounts:signInWithEmailLink",oe(n,e))}var cr=class n extends Lt{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new n(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new n(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":let t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zo(e,t,"signInWithPassword",mg);case"emailLink":return gg(e,{email:this._email,oobCode:this._password});default:Ne(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":let r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zo(e,r,"signUpPassword",pg);case"emailLink":return _g(e,{idToken:t,email:this._email,oobCode:this._password});default:Ne(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};async function on(n,e){return Et(n,"POST","/v1/accounts:signInWithIdp",oe(n,e))}var yg="http://localhost",Mt=class n extends Lt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ne("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,o=li(t,["providerId","signInMethod"]);if(!r||!i)return null;let a=new n(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){let t=this.buildRequest();return on(e,t)}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,on(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,on(e,t)}buildRequest(){let e={requestUri:yg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=nn(t)}return e}};async function vg(n,e){return de(n,"POST","/v1/accounts:sendVerificationCode",oe(n,e))}async function Ig(n,e){return Et(n,"POST","/v1/accounts:signInWithPhoneNumber",oe(n,e))}async function wg(n,e){let t=await Et(n,"POST","/v1/accounts:signInWithPhoneNumber",oe(n,e));if(t.temporaryProof)throw rr(n,"account-exists-with-different-credential",t);return t}var Eg={USER_NOT_FOUND:"user-not-found"};async function Tg(n,e){let t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Et(n,"POST","/v1/accounts:signInWithPhoneNumber",oe(n,t),Eg)}var ur=class n extends Lt{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new n({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new n({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Ig(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return wg(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Tg(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:o}=e;return!r&&!t&&!i&&!o?null:new n({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:o})}};function Ag(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function bg(n){let e=rn(sn(n)).link,t=e?rn(sn(e)).deep_link_id:null,r=rn(sn(n)).deep_link_id;return(r?rn(sn(r)).link:null)||r||t||e||n}var wi=class n{constructor(e){var t,r,i,o,a,u;let h=rn(sn(e)),d=(t=h.apiKey)!==null&&t!==void 0?t:null,p=(r=h.oobCode)!==null&&r!==void 0?r:null,v=Ag((i=h.mode)!==null&&i!==void 0?i:null);V(d&&p&&v,"argument-error"),this.apiKey=d,this.operation=v,this.code=p,this.continueUrl=(o=h.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(a=h.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(u=h.tenantId)!==null&&u!==void 0?u:null}static parseLink(e){let t=bg(e);try{return new n(t)}catch{return null}}};var ze=class n{constructor(){this.providerId=n.PROVIDER_ID}static credential(e,t){return cr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=wi.parseLink(t);return V(r,"argument-error"),cr._fromEmailAndCode(e,r.code,r.tenantId)}};ze.PROVIDER_ID="password";ze.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ze.EMAIL_LINK_SIGN_IN_METHOD="emailLink";var un=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};var Ft=class extends un{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};var lr=class n extends Ft{constructor(){super("facebook.com")}static credential(e){return Mt._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};lr.FACEBOOK_SIGN_IN_METHOD="facebook.com";lr.PROVIDER_ID="facebook.com";var wt=class n extends Ft{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Mt._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return n.credential(t,r)}catch{return null}}};wt.GOOGLE_SIGN_IN_METHOD="google.com";wt.PROVIDER_ID="google.com";var hr=class n extends Ft{constructor(){super("github.com")}static credential(e){return Mt._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};hr.GITHUB_SIGN_IN_METHOD="github.com";hr.PROVIDER_ID="github.com";var dr=class n extends Ft{constructor(){super("twitter.com")}static credential(e,t){return Mt._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return n.credential(t,r)}catch{return null}}};dr.TWITTER_SIGN_IN_METHOD="twitter.com";dr.PROVIDER_ID="twitter.com";async function Sg(n,e){return Et(n,"POST","/v1/accounts:signUp",oe(n,e))}var ln=class n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){let o=await cn._fromIdTokenResponse(e,r,i),a=dh(r);return new n({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);let i=dh(r);return new n({user:e,providerId:i,_tokenResponse:r,operationType:t})}};function dh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}var Go=class n extends Se{constructor(e,t,r,i){var o;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,n.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new n(e,t,r,i)}};function Gh(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Go._fromErrorAndOperation(n,o,e,r):o})}function Rg(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}async function Kh(n,e,t=!1){let r=await an(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ln._forOperation(n,"link",r)}async function Pg(n,e,t){await ar(e);let r=Rg(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";V(r.has(t)===n,e.auth,i)}async function $h(n,e,t=!1){let{auth:r}=n;if(Re(r.app))return Promise.reject(qe(r));let i="reauthenticate";try{let o=await an(n,Gh(r,i,e,n),t);V(o.idToken,r,"internal-error");let a=ta(o.idToken);V(a,r,"internal-error");let{sub:u}=a;return V(n.uid===u,r,"user-mismatch"),ln._forOperation(n,i,o)}catch(o){throw o?.code==="auth/user-not-found"&&Ne(r,"user-mismatch"),o}}async function Wh(n,e,t=!1){if(Re(n.app))return Promise.reject(qe(n));let r="signIn",i=await Gh(n,r,e),o=await ln._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(o.user),o}async function Ui(n,e){return Wh(Me(n),e)}async function ra(n,e){let t=Y(n);return await Pg(!1,t,e.providerId),Kh(t,e)}async function ia(n,e){return $h(Y(n),e)}async function Hh(n){let e=Me(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function sa(n,e,t){if(Re(n.app))return Promise.reject(qe(n));let r=Me(n),a=await zo(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Sg).catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&Hh(n),h}),u=await ln._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(u.user),u}function oa(n,e,t){return Re(n.app)?Promise.reject(qe(n)):Ui(Y(n),ze.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Hh(n),r})}function aa(n,e){return Cg(Y(n),null,e)}async function Cg(n,e,t){let{auth:r}=n,o={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(o.email=e),t&&(o.password=t);let a=await an(n,fg(r,o));await n._updateTokensIfNecessary(a,!0)}function ca(n,e){return Y(n).setPersistence(e)}function Qh(n,e,t,r){return Y(n).onIdTokenChanged(e,t,r)}function Jh(n,e,t){return Y(n).beforeAuthStateChanged(e,t)}function ua(n,e,t,r){return Y(n).onAuthStateChanged(e,t,r)}function la(n){return Y(n).signOut()}async function ha(n){return Y(n).delete()}function Dg(n,e){return de(n,"POST","/v2/accounts/mfaEnrollment:start",oe(n,e))}function Ng(n,e){return de(n,"POST","/v2/accounts/mfaEnrollment:finalize",oe(n,e))}function kg(n,e){return de(n,"POST","/v2/accounts/mfaEnrollment:start",oe(n,e))}function Og(n,e){return de(n,"POST","/v2/accounts/mfaEnrollment:finalize",oe(n,e))}var Ei="__sak";var Ti=class{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ei,"1"),this.storage.removeItem(Ei),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};var xg=1e3,Vg=10,Ai=class extends Ti{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Fh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,u,h)=>{this.notifyListeners(a,h)});return}let r=e.key;t?this.detachListener():this.stopPolling();let i=()=>{let a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);ng()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Vg):i()}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},xg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}};Ai.type="LOCAL";var Bi=Ai;var bi=class extends Ti{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}};bi.type="SESSION";var mr=bi;function Lg(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}var Si=class n{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;let r=new n(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let t=e,{eventId:r,eventType:i,data:o}=t.data,a=this.handlersMap[i];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});let u=Array.from(a).map(async d=>d(t.origin,o)),h=await Lg(u);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};Si.receivers=[];function da(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}var Ko=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){let i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((u,h)=>{let d=da("",20);i.port1.start();let p=setTimeout(()=>{h(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(v){let A=v;if(A.data.eventId===d)switch(A.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),u(A.data.response);break;default:clearTimeout(p),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}};function je(){return window}function Mg(n){je().location.href=n}function Yh(){return typeof je().WorkerGlobalScope<"u"&&typeof je().importScripts=="function"}async function Fg(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ug(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Bg(){return Yh()?self:null}var Xh="firebaseLocalStorageDb",qg=1,Ri="firebaseLocalStorage",Zh="fbase_key",Ut=class{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}};function qi(n,e){return n.transaction([Ri],e?"readwrite":"readonly").objectStore(Ri)}function jg(){let n=indexedDB.deleteDatabase(Xh);return new Ut(n).toPromise()}function $o(){let n=indexedDB.open(Xh,qg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{let r=n.result;try{r.createObjectStore(Ri,{keyPath:Zh})}catch(i){t(i)}}),n.addEventListener("success",async()=>{let r=n.result;r.objectStoreNames.contains(Ri)?e(r):(r.close(),await jg(),e(await $o()))})})}async function fh(n,e,t){let r=qi(n,!0).put({[Zh]:e,value:t});return new Ut(r).toPromise()}async function zg(n,e){let t=qi(n,!1).get(e),r=await new Ut(t).toPromise();return r===void 0?null:r.value}function ph(n,e){let t=qi(n,!0).delete(e);return new Ut(t).toPromise()}var Gg=800,Kg=3,Pi=class{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $o(),this.db)}async _withRetries(e){let t=0;for(;;)try{let r=await this._openDb();return await e(r)}catch(r){if(t++>Kg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Si._getInstance(Bg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Fg(),!this.activeServiceWorker)return;this.sender=new Ko(this.activeServiceWorker);let r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ug()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await $o();return await fh(e,Ei,"1"),await ph(e,Ei),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>fh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(r=>zg(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ph(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(i=>{let o=qi(i,!1).getAll();return new Ut(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];let t=[],r=new Set;if(e.length!==0)for(let{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(let i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Gg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};Pi.type="LOCAL";var ed=Pi;function $g(n,e){return de(n,"POST","/v2/accounts/mfaSignIn:start",oe(n,e))}function Wg(n,e){return de(n,"POST","/v2/accounts/mfaSignIn:finalize",oe(n,e))}function Hg(n,e){return de(n,"POST","/v2/accounts/mfaSignIn:finalize",oe(n,e))}var sI=qh("rcb"),oI=new Vt(3e4,6e4);var Qg="recaptcha";async function Jg(n,e,t){var r;let i=await t.verify();try{V(typeof i=="string",n,"argument-error"),V(t.type===Qg,n,"argument-error");let o;if(typeof e=="string"?o={phoneNumber:e}:o=e,"session"in o){let a=o.session;if("phoneNumber"in o)return V(a.type==="enroll",n,"internal-error"),(await Dg(n,{idToken:a.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{V(a.type==="signin",n,"internal-error");let u=((r=o.multiFactorHint)===null||r===void 0?void 0:r.uid)||o.multiFactorUid;return V(u,n,"missing-multi-factor-info"),(await $g(n,{mfaPendingCredential:a.credential,mfaEnrollmentId:u,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{let{sessionInfo:a}=await vg(n,{phoneNumber:o.phoneNumber,recaptchaToken:i});return a}}finally{t._reset()}}var fr=class n{constructor(e){this.providerId=n.PROVIDER_ID,this.auth=Me(e)}verifyPhoneNumber(e,t){return Jg(this.auth,e,Y(t))}static credential(e,t){return ur._fromVerification(e,t)}static credentialFromResult(e){let t=e;return n.credentialFromTaggedObject(t)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?ur._fromTokenResponse(t,r):null}};fr.PROVIDER_ID="phone";fr.PHONE_SIGN_IN_METHOD="phone";function fa(n,e){return e?it(e):(V(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}var pr=class extends Lt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return on(e,this._buildIdpRequest())}_linkToIdToken(e,t){return on(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return on(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function Yg(n){return Wh(n.auth,new pr(n),n.bypassAuthState)}function Xg(n){let{auth:e,user:t}=n;return V(t,e,"internal-error"),$h(t,new pr(n),n.bypassAuthState)}async function Zg(n){let{auth:e,user:t}=n;return V(t,e,"internal-error"),Kh(t,new pr(n),n.bypassAuthState)}var Ci=class{constructor(e,t,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:i,tenantId:o,error:a,type:u}=e;if(a){this.reject(a);return}let h={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(h))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Yg;case"linkViaPopup":case"linkViaRedirect":return Zg;case"reauthViaPopup":case"reauthViaRedirect":return Xg;default:Ne(this.auth,"internal-error")}}resolve(e){st(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){st(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};var e_=new Vt(2e3,1e4);async function pa(n,e,t){if(Re(n.app))return Promise.reject(Le(n,"operation-not-supported-in-this-environment"));let r=Me(n);Ah(n,e,un);let i=fa(r,t);return new Di(r,"signInViaPopup",e,i).executeNotNull()}var Di=class n extends Ci{constructor(e,t,r,i,o){super(e,t,i,o),this.provider=r,this.authWindow=null,this.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){st(this.filter.length===1,"Popup operations only handle one event");let e=da();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Le(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Le(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Le(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,e_.get())};e()}};Di.currentPopupAction=null;var t_="pendingRedirect",pi=new Map,Wo=class extends Ci{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=pi.get(this.auth._key());if(!e){try{let r=await n_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}pi.set(this.auth._key(),e)}return this.bypassAuthState||pi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function n_(n,e){let t=nd(e),r=td(n);if(!await r._isAvailable())return!1;let i=await r._get(t)==="true";return await r._remove(t),i}async function r_(n,e){return td(n)._set(nd(e),"true")}function i_(n,e){pi.set(n._key(),e)}function td(n){return it(n._redirectPersistence)}function nd(n){return fi(t_,n.config.apiKey,n.name)}function ma(n,e,t){return s_(n,e,t)}async function s_(n,e,t){if(Re(n.app))return Promise.reject(qe(n));let r=Me(n);Ah(n,e,un),await r._initializationPromise;let i=fa(r,t);return await r_(i,r),i._openRedirect(r,e,"signInViaRedirect")}async function ga(n,e){return await Me(n)._initializationPromise,rd(n,e,!1)}async function rd(n,e,t=!1){if(Re(n.app))return Promise.reject(qe(n));let r=Me(n),i=fa(r,e),a=await new Wo(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}var o_=10*60*1e3,Ho=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!a_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!id(e)){let i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Le(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=o_&&this.cachedEventUids.clear(),this.cachedEventUids.has(mh(e))}saveEventToCache(e){this.cachedEventUids.add(mh(e)),this.lastProcessedEventTime=Date.now()}};function mh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function id({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function a_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return id(n);default:return!1}}async function c_(n,e={}){return de(n,"GET","/v1/projects",e)}var u_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,l_=/^https?/;async function h_(n){if(n.config.emulator)return;let{authorizedDomains:e}=await c_(n);for(let t of e)try{if(d_(t))return}catch{}Ne(n,"unauthorized-domain")}function d_(n){let e=xo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){let a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!l_.test(t))return!1;if(u_.test(n))return r===n;let i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}var f_=new Vt(3e4,6e4);function gh(){let n=je().___jsl;if(n?.H){for(let e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function p_(n){return new Promise((e,t)=>{var r,i,o;function a(){gh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gh(),t(Le(n,"network-request-failed"))},timeout:f_.get()})}if(!((i=(r=je().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=je().gapi)===null||o===void 0)&&o.load)a();else{let u=qh("iframefcb");return je()[u]=()=>{gapi.load?a():t(Le(n,"network-request-failed"))},Bh(`${ag()}?onload=${u}`).catch(h=>t(h))}}).catch(e=>{throw mi=null,e})}var mi=null;function m_(n){return mi=mi||p_(n),mi}var g_=new Vt(5e3,15e3),__="__/auth/iframe",y_="emulator/auth/iframe",v_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},I_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function w_(n){let e=n.config;V(e.authDomain,n,"auth-domain-config-required");let t=e.emulator?ea(e,y_):`https://${n.config.authDomain}/${__}`,r={apiKey:e.apiKey,appName:n.name,v:vt},i=I_.get(n.config.apiHost);i&&(r.eid=i);let o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${nn(r).slice(1)}`}async function E_(n){let e=await m_(n),t=je().gapi;return V(t,n,"internal-error"),e.open({where:document.body,url:w_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:v_,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});let a=Le(n,"network-request-failed"),u=je().setTimeout(()=>{o(a)},g_.get());function h(){je().clearTimeout(u),i(r)}r.ping(h).then(h,()=>{o(a)})}))}var T_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},A_=500,b_=600,S_="_blank",R_="http://localhost",Ni=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function P_(n,e,t,r=A_,i=b_){let o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString(),u="",h=Object.assign(Object.assign({},T_),{width:r.toString(),height:i.toString(),top:o,left:a}),d=ue().toLowerCase();t&&(u=Oh(d)?S_:t),Nh(d)&&(e=e||R_,h.scrollbars="yes");let p=Object.entries(h).reduce((A,[S,N])=>`${A}${S}=${N},`,"");if(tg(d)&&u!=="_self")return C_(e||"",u),new Ni(null);let v=window.open(e||"",u,p);V(v,n,"popup-blocked");try{v.focus()}catch{}return new Ni(v)}function C_(n,e){let t=document.createElement("a");t.href=n,t.target=e;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}var D_="__/auth/handler",N_="emulator/auth/handler",k_=encodeURIComponent("fac");async function _h(n,e,t,r,i,o){V(n.config.authDomain,n,"auth-domain-config-required"),V(n.config.apiKey,n,"invalid-api-key");let a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:vt,eventId:i};if(e instanceof un){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",zl(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(let[p,v]of Object.entries(o||{}))a[p]=v}if(e instanceof Ft){let p=e.getScopes().filter(v=>v!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);let u=a;for(let p of Object.keys(u))u[p]===void 0&&delete u[p];let h=await n._getAppCheckToken(),d=h?`#${k_}=${encodeURIComponent(h)}`:"";return`${O_(n)}?${nn(u).slice(1)}${d}`}function O_({config:n}){return n.emulator?ea(n,N_):`https://${n.authDomain}/${D_}`}var Oo="webStorageSupport",Qo=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mr,this._completeRedirectFn=rd,this._overrideRedirectResult=i_}async _openPopup(e,t,r,i){var o;st((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");let a=await _h(e,t,r,xo(),i);return P_(e,a,da())}async _openRedirect(e,t,r,i){await this._originValidation(e);let o=await _h(e,t,r,xo(),i);return Mg(o),new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:i,promise:o}=this.eventManagers[t];return i?Promise.resolve(i):(st(o,"If manager is not set, promise should be"),o)}let r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){let t=await E_(e),r=new Ho(e);return t.register("authEvent",i=>(V(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Oo,{type:Oo},i=>{var o;let a=(o=i?.[0])===null||o===void 0?void 0:o[Oo];a!==void 0&&t(!!a),Ne(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=h_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Fh()||kh()||na()}},sd=Qo,ki=class{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return Be("unexpected MultiFactorSessionType")}}},Jo=class n extends ki{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new n(e)}_finalizeEnroll(e,t,r){return Ng(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Wg(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},Oi=class{constructor(){}static assertion(e){return Jo._fromCredential(e)}};Oi.FACTOR_ID="phone";var xi=class{static assertionForEnrollment(e,t){return Vi._fromSecret(e,t)}static assertionForSignIn(e,t){return Vi._fromEnrollmentId(e,t)}static async generateSecret(e){var t;let r=e;V(typeof((t=r.user)===null||t===void 0?void 0:t.auth)<"u","internal-error");let i=await kg(r.user.auth,{idToken:r.credential,totpEnrollmentInfo:{}});return Li._fromStartTotpMfaEnrollmentResponse(i,r.user.auth)}};xi.FACTOR_ID="totp";var Vi=class n extends ki{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new n(t,void 0,e)}static _fromEnrollmentId(e,t){return new n(t,e)}async _finalizeEnroll(e,t,r){return V(typeof this.secret<"u",e,"argument-error"),Og(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){V(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");let r={verificationCode:this.otp};return Hg(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r})}},Li=class n{constructor(e,t,r,i,o,a,u){this.sessionInfo=a,this.auth=u,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=o}static _fromStartTotpMfaEnrollmentResponse(e,t){return new n(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let i=!1;return(hi(e)||hi(t))&&(i=!0),i&&(hi(e)&&(e=((r=this.auth.currentUser)===null||r===void 0?void 0:r.email)||"unknownuser"),hi(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function hi(n){return typeof n>"u"||n?.length===0}var yh="@firebase/auth",vh="1.7.9";var Yo=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function x_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function V_(n){yt(new De("auth",(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=r.options;V(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});let h={apiKey:a,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Uh(n)},d=new qo(r,i,o,h);return lg(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),yt(new De("auth-internal",e=>{let t=Me(e.getProvider("auth").getImmediate());return(r=>new Yo(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ve(yh,vh,x_(n)),Ve(yh,vh,"esm2017")}var L_=5*60,M_=mo("authIdTokenMaxAge")||L_,Ih=null,F_=n=>async e=>{let t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>M_)return;let i=t?.token;Ih!==i&&(Ih=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function _a(n=ui()){let e=nr(n,"auth");if(e.isInitialized())return e.getImmediate();let t=jh(n,{popupRedirectResolver:sd,persistence:[ed,Bi,mr]}),r=mo("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){let o=new URL(r,location.origin);if(location.origin===o.origin){let a=F_(o.toString());Jh(t,a,()=>a(t.currentUser)),Qh(t,u=>a(u))}}let i=fo("auth");return i&&Fi(t,`http://${i}`),t}function U_(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}sg({loadJS(n){return new Promise((e,t)=>{let r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{let o=Le("internal-error");o.customData=i,t(o)},r.type="text/javascript",r.charset="UTF-8",U_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});V_("Browser");var od=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ad={};var Tt,ya;(function(){var n;function e(I,m){function _(){}_.prototype=m.prototype,I.D=m.prototype,I.prototype=new _,I.prototype.constructor=I,I.C=function(y,w,T){for(var g=Array(arguments.length-2),Ze=2;Ze<arguments.length;Ze++)g[Ze-2]=arguments[Ze];return m.prototype[w].apply(y,g)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,m,_){_||(_=0);var y=Array(16);if(typeof m=="string")for(var w=0;16>w;++w)y[w]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(w=0;16>w;++w)y[w]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=I.g[0],_=I.g[1],w=I.g[2];var T=I.g[3],g=m+(T^_&(w^T))+y[0]+3614090360&4294967295;m=_+(g<<7&4294967295|g>>>25),g=T+(w^m&(_^w))+y[1]+3905402710&4294967295,T=m+(g<<12&4294967295|g>>>20),g=w+(_^T&(m^_))+y[2]+606105819&4294967295,w=T+(g<<17&4294967295|g>>>15),g=_+(m^w&(T^m))+y[3]+3250441966&4294967295,_=w+(g<<22&4294967295|g>>>10),g=m+(T^_&(w^T))+y[4]+4118548399&4294967295,m=_+(g<<7&4294967295|g>>>25),g=T+(w^m&(_^w))+y[5]+1200080426&4294967295,T=m+(g<<12&4294967295|g>>>20),g=w+(_^T&(m^_))+y[6]+2821735955&4294967295,w=T+(g<<17&4294967295|g>>>15),g=_+(m^w&(T^m))+y[7]+4249261313&4294967295,_=w+(g<<22&4294967295|g>>>10),g=m+(T^_&(w^T))+y[8]+1770035416&4294967295,m=_+(g<<7&4294967295|g>>>25),g=T+(w^m&(_^w))+y[9]+2336552879&4294967295,T=m+(g<<12&4294967295|g>>>20),g=w+(_^T&(m^_))+y[10]+4294925233&4294967295,w=T+(g<<17&4294967295|g>>>15),g=_+(m^w&(T^m))+y[11]+2304563134&4294967295,_=w+(g<<22&4294967295|g>>>10),g=m+(T^_&(w^T))+y[12]+1804603682&4294967295,m=_+(g<<7&4294967295|g>>>25),g=T+(w^m&(_^w))+y[13]+4254626195&4294967295,T=m+(g<<12&4294967295|g>>>20),g=w+(_^T&(m^_))+y[14]+2792965006&4294967295,w=T+(g<<17&4294967295|g>>>15),g=_+(m^w&(T^m))+y[15]+1236535329&4294967295,_=w+(g<<22&4294967295|g>>>10),g=m+(w^T&(_^w))+y[1]+4129170786&4294967295,m=_+(g<<5&4294967295|g>>>27),g=T+(_^w&(m^_))+y[6]+3225465664&4294967295,T=m+(g<<9&4294967295|g>>>23),g=w+(m^_&(T^m))+y[11]+643717713&4294967295,w=T+(g<<14&4294967295|g>>>18),g=_+(T^m&(w^T))+y[0]+3921069994&4294967295,_=w+(g<<20&4294967295|g>>>12),g=m+(w^T&(_^w))+y[5]+3593408605&4294967295,m=_+(g<<5&4294967295|g>>>27),g=T+(_^w&(m^_))+y[10]+38016083&4294967295,T=m+(g<<9&4294967295|g>>>23),g=w+(m^_&(T^m))+y[15]+3634488961&4294967295,w=T+(g<<14&4294967295|g>>>18),g=_+(T^m&(w^T))+y[4]+3889429448&4294967295,_=w+(g<<20&4294967295|g>>>12),g=m+(w^T&(_^w))+y[9]+568446438&4294967295,m=_+(g<<5&4294967295|g>>>27),g=T+(_^w&(m^_))+y[14]+3275163606&4294967295,T=m+(g<<9&4294967295|g>>>23),g=w+(m^_&(T^m))+y[3]+4107603335&4294967295,w=T+(g<<14&4294967295|g>>>18),g=_+(T^m&(w^T))+y[8]+1163531501&4294967295,_=w+(g<<20&4294967295|g>>>12),g=m+(w^T&(_^w))+y[13]+2850285829&4294967295,m=_+(g<<5&4294967295|g>>>27),g=T+(_^w&(m^_))+y[2]+4243563512&4294967295,T=m+(g<<9&4294967295|g>>>23),g=w+(m^_&(T^m))+y[7]+1735328473&4294967295,w=T+(g<<14&4294967295|g>>>18),g=_+(T^m&(w^T))+y[12]+2368359562&4294967295,_=w+(g<<20&4294967295|g>>>12),g=m+(_^w^T)+y[5]+4294588738&4294967295,m=_+(g<<4&4294967295|g>>>28),g=T+(m^_^w)+y[8]+2272392833&4294967295,T=m+(g<<11&4294967295|g>>>21),g=w+(T^m^_)+y[11]+1839030562&4294967295,w=T+(g<<16&4294967295|g>>>16),g=_+(w^T^m)+y[14]+4259657740&4294967295,_=w+(g<<23&4294967295|g>>>9),g=m+(_^w^T)+y[1]+2763975236&4294967295,m=_+(g<<4&4294967295|g>>>28),g=T+(m^_^w)+y[4]+1272893353&4294967295,T=m+(g<<11&4294967295|g>>>21),g=w+(T^m^_)+y[7]+4139469664&4294967295,w=T+(g<<16&4294967295|g>>>16),g=_+(w^T^m)+y[10]+3200236656&4294967295,_=w+(g<<23&4294967295|g>>>9),g=m+(_^w^T)+y[13]+681279174&4294967295,m=_+(g<<4&4294967295|g>>>28),g=T+(m^_^w)+y[0]+3936430074&4294967295,T=m+(g<<11&4294967295|g>>>21),g=w+(T^m^_)+y[3]+3572445317&4294967295,w=T+(g<<16&4294967295|g>>>16),g=_+(w^T^m)+y[6]+76029189&4294967295,_=w+(g<<23&4294967295|g>>>9),g=m+(_^w^T)+y[9]+3654602809&4294967295,m=_+(g<<4&4294967295|g>>>28),g=T+(m^_^w)+y[12]+3873151461&4294967295,T=m+(g<<11&4294967295|g>>>21),g=w+(T^m^_)+y[15]+530742520&4294967295,w=T+(g<<16&4294967295|g>>>16),g=_+(w^T^m)+y[2]+3299628645&4294967295,_=w+(g<<23&4294967295|g>>>9),g=m+(w^(_|~T))+y[0]+4096336452&4294967295,m=_+(g<<6&4294967295|g>>>26),g=T+(_^(m|~w))+y[7]+1126891415&4294967295,T=m+(g<<10&4294967295|g>>>22),g=w+(m^(T|~_))+y[14]+2878612391&4294967295,w=T+(g<<15&4294967295|g>>>17),g=_+(T^(w|~m))+y[5]+4237533241&4294967295,_=w+(g<<21&4294967295|g>>>11),g=m+(w^(_|~T))+y[12]+1700485571&4294967295,m=_+(g<<6&4294967295|g>>>26),g=T+(_^(m|~w))+y[3]+2399980690&4294967295,T=m+(g<<10&4294967295|g>>>22),g=w+(m^(T|~_))+y[10]+4293915773&4294967295,w=T+(g<<15&4294967295|g>>>17),g=_+(T^(w|~m))+y[1]+2240044497&4294967295,_=w+(g<<21&4294967295|g>>>11),g=m+(w^(_|~T))+y[8]+1873313359&4294967295,m=_+(g<<6&4294967295|g>>>26),g=T+(_^(m|~w))+y[15]+4264355552&4294967295,T=m+(g<<10&4294967295|g>>>22),g=w+(m^(T|~_))+y[6]+2734768916&4294967295,w=T+(g<<15&4294967295|g>>>17),g=_+(T^(w|~m))+y[13]+1309151649&4294967295,_=w+(g<<21&4294967295|g>>>11),g=m+(w^(_|~T))+y[4]+4149444226&4294967295,m=_+(g<<6&4294967295|g>>>26),g=T+(_^(m|~w))+y[11]+3174756917&4294967295,T=m+(g<<10&4294967295|g>>>22),g=w+(m^(T|~_))+y[2]+718787259&4294967295,w=T+(g<<15&4294967295|g>>>17),g=_+(T^(w|~m))+y[9]+3951481745&4294967295,I.g[0]=I.g[0]+m&4294967295,I.g[1]=I.g[1]+(w+(g<<21&4294967295|g>>>11))&4294967295,I.g[2]=I.g[2]+w&4294967295,I.g[3]=I.g[3]+T&4294967295}r.prototype.u=function(I,m){m===void 0&&(m=I.length);for(var _=m-this.blockSize,y=this.B,w=this.h,T=0;T<m;){if(w==0)for(;T<=_;)i(this,I,T),T+=this.blockSize;if(typeof I=="string"){for(;T<m;)if(y[w++]=I.charCodeAt(T++),w==this.blockSize){i(this,y),w=0;break}}else for(;T<m;)if(y[w++]=I[T++],w==this.blockSize){i(this,y),w=0;break}}this.h=w,this.o+=m},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var m=1;m<I.length-8;++m)I[m]=0;var _=8*this.o;for(m=I.length-8;m<I.length;++m)I[m]=_&255,_/=256;for(this.u(I),I=Array(16),m=_=0;4>m;++m)for(var y=0;32>y;y+=8)I[_++]=this.g[m]>>>y&255;return I};function o(I,m){var _=u;return Object.prototype.hasOwnProperty.call(_,I)?_[I]:_[I]=m(I)}function a(I,m){this.h=m;for(var _=[],y=!0,w=I.length-1;0<=w;w--){var T=I[w]|0;y&&T==m||(_[w]=T,y=!1)}this.g=_}var u={};function h(I){return-128<=I&&128>I?o(I,function(m){return new a([m|0],0>m?-1:0)}):new a([I|0],0>I?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return v;if(0>I)return D(d(-I));for(var m=[],_=1,y=0;I>=_;y++)m[y]=I/_|0,_*=4294967296;return new a(m,0)}function p(I,m){if(I.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(I.charAt(0)=="-")return D(p(I.substring(1),m));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(m,8)),y=v,w=0;w<I.length;w+=8){var T=Math.min(8,I.length-w),g=parseInt(I.substring(w,w+T),m);8>T?(T=d(Math.pow(m,T)),y=y.j(T).add(d(g))):(y=y.j(_),y=y.add(d(g)))}return y}var v=h(0),A=h(1),S=h(16777216);n=a.prototype,n.m=function(){if(k(this))return-D(this).m();for(var I=0,m=1,_=0;_<this.g.length;_++){var y=this.i(_);I+=(0<=y?y:4294967296+y)*m,m*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(N(this))return"0";if(k(this))return"-"+D(this).toString(I);for(var m=d(Math.pow(I,6)),_=this,y="";;){var w=X(_,m).g;_=B(_,w.j(m));var T=((0<_.g.length?_.g[0]:_.h)>>>0).toString(I);if(_=w,N(_))return T+y;for(;6>T.length;)T="0"+T;y=T+y}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function N(I){if(I.h!=0)return!1;for(var m=0;m<I.g.length;m++)if(I.g[m]!=0)return!1;return!0}function k(I){return I.h==-1}n.l=function(I){return I=B(this,I),k(I)?-1:N(I)?0:1};function D(I){for(var m=I.g.length,_=[],y=0;y<m;y++)_[y]=~I.g[y];return new a(_,~I.h).add(A)}n.abs=function(){return k(this)?D(this):this},n.add=function(I){for(var m=Math.max(this.g.length,I.g.length),_=[],y=0,w=0;w<=m;w++){var T=y+(this.i(w)&65535)+(I.i(w)&65535),g=(T>>>16)+(this.i(w)>>>16)+(I.i(w)>>>16);y=g>>>16,T&=65535,g&=65535,_[w]=g<<16|T}return new a(_,_[_.length-1]&-2147483648?-1:0)};function B(I,m){return I.add(D(m))}n.j=function(I){if(N(this)||N(I))return v;if(k(this))return k(I)?D(this).j(D(I)):D(D(this).j(I));if(k(I))return D(this.j(D(I)));if(0>this.l(S)&&0>I.l(S))return d(this.m()*I.m());for(var m=this.g.length+I.g.length,_=[],y=0;y<2*m;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var w=0;w<I.g.length;w++){var T=this.i(y)>>>16,g=this.i(y)&65535,Ze=I.i(w)>>>16,Vn=I.i(w)&65535;_[2*y+2*w]+=g*Vn,z(_,2*y+2*w),_[2*y+2*w+1]+=T*Vn,z(_,2*y+2*w+1),_[2*y+2*w+1]+=g*Ze,z(_,2*y+2*w+1),_[2*y+2*w+2]+=T*Ze,z(_,2*y+2*w+2)}for(y=0;y<m;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=m;y<2*m;y++)_[y]=0;return new a(_,0)};function z(I,m){for(;(I[m]&65535)!=I[m];)I[m+1]+=I[m]>>>16,I[m]&=65535,m++}function G(I,m){this.g=I,this.h=m}function X(I,m){if(N(m))throw Error("division by zero");if(N(I))return new G(v,v);if(k(I))return m=X(D(I),m),new G(D(m.g),D(m.h));if(k(m))return m=X(I,D(m)),new G(D(m.g),m.h);if(30<I.g.length){if(k(I)||k(m))throw Error("slowDivide_ only works with positive integers.");for(var _=A,y=m;0>=y.l(I);)_=we(_),y=we(y);var w=H(_,1),T=H(y,1);for(y=H(y,2),_=H(_,2);!N(y);){var g=T.add(y);0>=g.l(I)&&(w=w.add(_),T=g),y=H(y,1),_=H(_,1)}return m=B(I,w.j(m)),new G(w,m)}for(w=v;0<=I.l(m);){for(_=Math.max(1,Math.floor(I.m()/m.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),T=d(_),g=T.j(m);k(g)||0<g.l(I);)_-=y,T=d(_),g=T.j(m);N(T)&&(T=A),w=w.add(T),I=B(I,g)}return new G(w,I)}n.A=function(I){return X(this,I).h},n.and=function(I){for(var m=Math.max(this.g.length,I.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)&I.i(y);return new a(_,this.h&I.h)},n.or=function(I){for(var m=Math.max(this.g.length,I.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)|I.i(y);return new a(_,this.h|I.h)},n.xor=function(I){for(var m=Math.max(this.g.length,I.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)^I.i(y);return new a(_,this.h^I.h)};function we(I){for(var m=I.g.length+1,_=[],y=0;y<m;y++)_[y]=I.i(y)<<1|I.i(y-1)>>>31;return new a(_,I.h)}function H(I,m){var _=m>>5;m%=32;for(var y=I.g.length-_,w=[],T=0;T<y;T++)w[T]=0<m?I.i(T+_)>>>m|I.i(T+_+1)<<32-m:I.i(T+_);return new a(w,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ya=ad.Md5=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Tt=ad.Integer=a}).apply(typeof od<"u"?od:typeof self<"u"?self:typeof window<"u"?window:{});var ji=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ot={};var va,B_,hn,Ia,gr,zi,wa,Ea,Ta;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,c,l){return s==Array.prototype||s==Object.prototype||(s[c]=l.value),s};function t(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof ji=="object"&&ji];for(var c=0;c<s.length;++c){var l=s[c];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=t(this);function i(s,c){if(c)e:{var l=r;s=s.split(".");for(var f=0;f<s.length-1;f++){var E=s[f];if(!(E in l))break e;l=l[E]}s=s[s.length-1],f=l[s],c=c(f),c!=f&&c!=null&&e(l,s,{configurable:!0,writable:!0,value:c})}}function o(s,c){s instanceof String&&(s+="");var l=0,f=!1,E={next:function(){if(!f&&l<s.length){var b=l++;return{value:c(b,s[b]),done:!1}}return f=!0,{done:!0,value:void 0}}};return E[Symbol.iterator]=function(){return E},E}i("Array.prototype.values",function(s){return s||function(){return o(this,function(c,l){return l})}});var a=a||{},u=this||self;function h(s){var c=typeof s;return c=c!="object"?c:s?Array.isArray(s)?"array":c:"null",c=="array"||c=="object"&&typeof s.length=="number"}function d(s){var c=typeof s;return c=="object"&&s!=null||c=="function"}function p(s,c,l){return s.call.apply(s.bind,arguments)}function v(s,c,l){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var E=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(E,f),s.apply(c,E)}}return function(){return s.apply(c,arguments)}}function A(s,c,l){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:v,A.apply(null,arguments)}function S(s,c){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function N(s,c){function l(){}l.prototype=c.prototype,s.aa=c.prototype,s.prototype=new l,s.prototype.constructor=s,s.Qb=function(f,E,b){for(var C=Array(arguments.length-2),J=2;J<arguments.length;J++)C[J-2]=arguments[J];return c.prototype[E].apply(f,C)}}function k(s){let c=s.length;if(0<c){let l=Array(c);for(let f=0;f<c;f++)l[f]=s[f];return l}return[]}function D(s,c){for(let l=1;l<arguments.length;l++){let f=arguments[l];if(h(f)){let E=s.length||0,b=f.length||0;s.length=E+b;for(let C=0;C<b;C++)s[E+C]=f[C]}else s.push(f)}}class B{constructor(c,l){this.i=c,this.j=l,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function z(s){return/^[\s\xa0]*$/.test(s)}function G(){var s=u.navigator;return s&&(s=s.userAgent)?s:""}function X(s){return X[" "](s),s}X[" "]=function(){};var we=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function H(s,c,l){for(let f in s)c.call(l,s[f],f,s)}function I(s,c){for(let l in s)c.call(void 0,s[l],l,s)}function m(s){let c={};for(let l in s)c[l]=s[l];return c}let _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,c){let l,f;for(let E=1;E<arguments.length;E++){f=arguments[E];for(l in f)s[l]=f[l];for(let b=0;b<_.length;b++)l=_[b],Object.prototype.hasOwnProperty.call(f,l)&&(s[l]=f[l])}}function w(s){var c=1;s=s.split(":");let l=[];for(;0<c&&s.length;)l.push(s.shift()),c--;return s.length&&l.push(s.join(":")),l}function T(s){u.setTimeout(()=>{throw s},0)}function g(){var s=Ms;let c=null;return s.g&&(c=s.g,s.g=s.g.next,s.g||(s.h=null),c.next=null),c}class Ze{constructor(){this.h=this.g=null}add(c,l){let f=Vn.get();f.set(c,l),this.h?this.h.next=f:this.g=f,this.h=f}}var Vn=new B(()=>new Qf,s=>s.reset());class Qf{constructor(){this.next=this.g=this.h=null}set(c,l){this.h=c,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Ln,Mn=!1,Ms=new Ze,Du=()=>{let s=u.Promise.resolve(void 0);Ln=()=>{s.then(Jf)}};var Jf=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(l){T(l)}var c=Vn;c.j(s),100>c.h&&(c.h++,s.next=c.g,c.g=s)}Mn=!1};function dt(){this.s=this.s,this.C=this.C}dt.prototype.s=!1,dt.prototype.ma=function(){this.s||(this.s=!0,this.N())},dt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(s,c){this.type=s,this.g=this.target=c,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var Yf=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var s=!1,c=Object.defineProperty({},"passive",{get:function(){s=!0}});try{let l=()=>{};u.addEventListener("test",l,c),u.removeEventListener("test",l,c)}catch{}return s}();function Fn(s,c){if(pe.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var l=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=c,c=s.relatedTarget){if(we){e:{try{X(c.nodeName);var E=!0;break e}catch{}E=!1}E||(c=null)}}else l=="mouseover"?c=s.fromElement:l=="mouseout"&&(c=s.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Xf[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Fn.aa.h.call(this)}}N(Fn,pe);var Xf={2:"touch",3:"pen",4:"mouse"};Fn.prototype.h=function(){Fn.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Un="closure_listenable_"+(1e6*Math.random()|0),Zf=0;function ep(s,c,l,f,E){this.listener=s,this.proxy=null,this.src=c,this.type=l,this.capture=!!f,this.ha=E,this.key=++Zf,this.da=this.fa=!1}function qr(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function jr(s){this.src=s,this.g={},this.h=0}jr.prototype.add=function(s,c,l,f,E){var b=s.toString();s=this.g[b],s||(s=this.g[b]=[],this.h++);var C=Us(s,c,f,E);return-1<C?(c=s[C],l||(c.fa=!1)):(c=new ep(c,this.src,b,!!f,E),c.fa=l,s.push(c)),c};function Fs(s,c){var l=c.type;if(l in s.g){var f=s.g[l],E=Array.prototype.indexOf.call(f,c,void 0),b;(b=0<=E)&&Array.prototype.splice.call(f,E,1),b&&(qr(c),s.g[l].length==0&&(delete s.g[l],s.h--))}}function Us(s,c,l,f){for(var E=0;E<s.length;++E){var b=s[E];if(!b.da&&b.listener==c&&b.capture==!!l&&b.ha==f)return E}return-1}var Bs="closure_lm_"+(1e6*Math.random()|0),qs={};function Nu(s,c,l,f,E){if(f&&f.once)return Ou(s,c,l,f,E);if(Array.isArray(c)){for(var b=0;b<c.length;b++)Nu(s,c[b],l,f,E);return null}return l=Ks(l),s&&s[Un]?s.K(c,l,d(f)?!!f.capture:!!f,E):ku(s,c,l,!1,f,E)}function ku(s,c,l,f,E,b){if(!c)throw Error("Invalid event type");var C=d(E)?!!E.capture:!!E,J=zs(s);if(J||(s[Bs]=J=new jr(s)),l=J.add(c,l,f,C,b),l.proxy)return l;if(f=tp(),l.proxy=f,f.src=s,f.listener=l,s.addEventListener)Yf||(E=C),E===void 0&&(E=!1),s.addEventListener(c.toString(),f,E);else if(s.attachEvent)s.attachEvent(Vu(c.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function tp(){function s(l){return c.call(s.src,s.listener,l)}let c=np;return s}function Ou(s,c,l,f,E){if(Array.isArray(c)){for(var b=0;b<c.length;b++)Ou(s,c[b],l,f,E);return null}return l=Ks(l),s&&s[Un]?s.L(c,l,d(f)?!!f.capture:!!f,E):ku(s,c,l,!0,f,E)}function xu(s,c,l,f,E){if(Array.isArray(c))for(var b=0;b<c.length;b++)xu(s,c[b],l,f,E);else f=d(f)?!!f.capture:!!f,l=Ks(l),s&&s[Un]?(s=s.i,c=String(c).toString(),c in s.g&&(b=s.g[c],l=Us(b,l,f,E),-1<l&&(qr(b[l]),Array.prototype.splice.call(b,l,1),b.length==0&&(delete s.g[c],s.h--)))):s&&(s=zs(s))&&(c=s.g[c.toString()],s=-1,c&&(s=Us(c,l,f,E)),(l=-1<s?c[s]:null)&&js(l))}function js(s){if(typeof s!="number"&&s&&!s.da){var c=s.src;if(c&&c[Un])Fs(c.i,s);else{var l=s.type,f=s.proxy;c.removeEventListener?c.removeEventListener(l,f,s.capture):c.detachEvent?c.detachEvent(Vu(l),f):c.addListener&&c.removeListener&&c.removeListener(f),(l=zs(c))?(Fs(l,s),l.h==0&&(l.src=null,c[Bs]=null)):qr(s)}}}function Vu(s){return s in qs?qs[s]:qs[s]="on"+s}function np(s,c){if(s.da)s=!0;else{c=new Fn(c,this);var l=s.listener,f=s.ha||s.src;s.fa&&js(s),s=l.call(f,c)}return s}function zs(s){return s=s[Bs],s instanceof jr?s:null}var Gs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ks(s){return typeof s=="function"?s:(s[Gs]||(s[Gs]=function(c){return s.handleEvent(c)}),s[Gs])}function me(){dt.call(this),this.i=new jr(this),this.M=this,this.F=null}N(me,dt),me.prototype[Un]=!0,me.prototype.removeEventListener=function(s,c,l,f){xu(this,s,c,l,f)};function Ee(s,c){var l,f=s.F;if(f)for(l=[];f;f=f.F)l.push(f);if(s=s.M,f=c.type||c,typeof c=="string")c=new pe(c,s);else if(c instanceof pe)c.target=c.target||s;else{var E=c;c=new pe(f,s),y(c,E)}if(E=!0,l)for(var b=l.length-1;0<=b;b--){var C=c.g=l[b];E=zr(C,f,!0,c)&&E}if(C=c.g=s,E=zr(C,f,!0,c)&&E,E=zr(C,f,!1,c)&&E,l)for(b=0;b<l.length;b++)C=c.g=l[b],E=zr(C,f,!1,c)&&E}me.prototype.N=function(){if(me.aa.N.call(this),this.i){var s=this.i,c;for(c in s.g){for(var l=s.g[c],f=0;f<l.length;f++)qr(l[f]);delete s.g[c],s.h--}}this.F=null},me.prototype.K=function(s,c,l,f){return this.i.add(String(s),c,!1,l,f)},me.prototype.L=function(s,c,l,f){return this.i.add(String(s),c,!0,l,f)};function zr(s,c,l,f){if(c=s.i.g[String(c)],!c)return!0;c=c.concat();for(var E=!0,b=0;b<c.length;++b){var C=c[b];if(C&&!C.da&&C.capture==l){var J=C.listener,he=C.ha||C.src;C.fa&&Fs(s.i,C),E=J.call(he,f)!==!1&&E}}return E&&!f.defaultPrevented}function Lu(s,c,l){if(typeof s=="function")l&&(s=A(s,l));else if(s&&typeof s.handleEvent=="function")s=A(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(s,c||0)}function Mu(s){s.g=Lu(()=>{s.g=null,s.i&&(s.i=!1,Mu(s))},s.l);let c=s.h;s.h=null,s.m.apply(null,c)}class rp extends dt{constructor(c,l){super(),this.m=c,this.l=l,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Mu(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Bn(s){dt.call(this),this.h=s,this.g={}}N(Bn,dt);var Fu=[];function Uu(s){H(s.g,function(c,l){this.g.hasOwnProperty(l)&&js(c)},s),s.g={}}Bn.prototype.N=function(){Bn.aa.N.call(this),Uu(this)},Bn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $s=u.JSON.stringify,ip=u.JSON.parse,sp=class{stringify(s){return u.JSON.stringify(s,void 0)}parse(s){return u.JSON.parse(s,void 0)}};function Ws(){}Ws.prototype.h=null;function Bu(s){return s.h||(s.h=s.i())}function qu(){}var qn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Hs(){pe.call(this,"d")}N(Hs,pe);function Qs(){pe.call(this,"c")}N(Qs,pe);var Ct={},ju=null;function Gr(){return ju=ju||new me}Ct.La="serverreachability";function zu(s){pe.call(this,Ct.La,s)}N(zu,pe);function jn(s){let c=Gr();Ee(c,new zu(c))}Ct.STAT_EVENT="statevent";function Gu(s,c){pe.call(this,Ct.STAT_EVENT,s),this.stat=c}N(Gu,pe);function Te(s){let c=Gr();Ee(c,new Gu(c,s))}Ct.Ma="timingevent";function Ku(s,c){pe.call(this,Ct.Ma,s),this.size=c}N(Ku,pe);function zn(s,c){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){s()},c)}function Gn(){this.g=!0}Gn.prototype.xa=function(){this.g=!1};function op(s,c,l,f,E,b){s.info(function(){if(s.g)if(b)for(var C="",J=b.split("&"),he=0;he<J.length;he++){var $=J[he].split("=");if(1<$.length){var ge=$[0];$=$[1];var _e=ge.split("_");C=2<=_e.length&&_e[1]=="type"?C+(ge+"="+$+"&"):C+(ge+"=redacted&")}}else C=null;else C=b;return"XMLHTTP REQ ("+f+") [attempt "+E+"]: "+c+`
`+l+`
`+C})}function ap(s,c,l,f,E,b,C){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+E+"]: "+c+`
`+l+`
`+b+" "+C})}function Xt(s,c,l,f){s.info(function(){return"XMLHTTP TEXT ("+c+"): "+up(s,l)+(f?" "+f:"")})}function cp(s,c){s.info(function(){return"TIMEOUT: "+c})}Gn.prototype.info=function(){};function up(s,c){if(!s.g)return c;if(!c)return null;try{var l=JSON.parse(c);if(l){for(s=0;s<l.length;s++)if(Array.isArray(l[s])){var f=l[s];if(!(2>f.length)){var E=f[1];if(Array.isArray(E)&&!(1>E.length)){var b=E[0];if(b!="noop"&&b!="stop"&&b!="close")for(var C=1;C<E.length;C++)E[C]=""}}}}return $s(l)}catch{return c}}var Kr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},$u={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Js;function $r(){}N($r,Ws),$r.prototype.g=function(){return new XMLHttpRequest},$r.prototype.i=function(){return{}},Js=new $r;function ft(s,c,l,f){this.j=s,this.i=c,this.l=l,this.R=f||1,this.U=new Bn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Wu}function Wu(){this.i=null,this.g="",this.h=!1}var Hu={},Ys={};function Xs(s,c,l){s.L=1,s.v=Jr(et(c)),s.m=l,s.P=!0,Qu(s,null)}function Qu(s,c){s.F=Date.now(),Wr(s),s.A=et(s.v);var l=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),ul(l.i,"t",f),s.C=0,l=s.j.J,s.h=new Wu,s.g=Rl(s.j,l?c:null,!s.m),0<s.O&&(s.M=new rp(A(s.Y,s,s.g),s.O)),c=s.U,l=s.g,f=s.ca;var E="readystatechange";Array.isArray(E)||(E&&(Fu[0]=E.toString()),E=Fu);for(var b=0;b<E.length;b++){var C=Nu(l,E[b],f||c.handleEvent,!1,c.h||c);if(!C)break;c.g[C.key]=C}c=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,c)):(s.u="GET",s.g.ea(s.A,s.u,null,c)),jn(),op(s.i,s.u,s.A,s.l,s.R,s.m)}ft.prototype.ca=function(s){s=s.target;let c=this.M;c&&tt(s)==3?c.j():this.Y(s)},ft.prototype.Y=function(s){try{if(s==this.g)e:{let _e=tt(this.g);var c=this.g.Ba();let tn=this.g.Z();if(!(3>_e)&&(_e!=3||this.g&&(this.h.h||this.g.oa()||gl(this.g)))){this.J||_e!=4||c==7||(c==8||0>=tn?jn(3):jn(2)),Zs(this);var l=this.g.Z();this.X=l;t:if(Ju(this)){var f=gl(this.g);s="";var E=f.length,b=tt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Dt(this),Kn(this);var C="";break t}this.h.i=new u.TextDecoder}for(c=0;c<E;c++)this.h.h=!0,s+=this.h.i.decode(f[c],{stream:!(b&&c==E-1)});f.length=0,this.h.g+=s,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=l==200,ap(this.i,this.u,this.A,this.l,this.R,_e,l),this.o){if(this.T&&!this.K){t:{if(this.g){var J,he=this.g;if((J=he.g?he.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!z(J)){var $=J;break t}}$=null}if(l=$)Xt(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,eo(this,l);else{this.o=!1,this.s=3,Te(12),Dt(this),Kn(this);break e}}if(this.P){l=!0;let xe;for(;!this.J&&this.C<C.length;)if(xe=lp(this,C),xe==Ys){_e==4&&(this.s=4,Te(14),l=!1),Xt(this.i,this.l,null,"[Incomplete Response]");break}else if(xe==Hu){this.s=4,Te(15),Xt(this.i,this.l,C,"[Invalid Chunk]"),l=!1;break}else Xt(this.i,this.l,xe,null),eo(this,xe);if(Ju(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_e!=4||C.length!=0||this.h.h||(this.s=1,Te(16),l=!1),this.o=this.o&&l,!l)Xt(this.i,this.l,C,"[Invalid Chunked Response]"),Dt(this),Kn(this);else if(0<C.length&&!this.W){this.W=!0;var ge=this.j;ge.g==this&&ge.ba&&!ge.M&&(ge.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),oo(ge),ge.M=!0,Te(11))}}else Xt(this.i,this.l,C,null),eo(this,C);_e==4&&Dt(this),this.o&&!this.J&&(_e==4?Tl(this.j,this):(this.o=!1,Wr(this)))}else Rp(this.g),l==400&&0<C.indexOf("Unknown SID")?(this.s=3,Te(12)):(this.s=0,Te(13)),Dt(this),Kn(this)}}}catch{}finally{}};function Ju(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function lp(s,c){var l=s.C,f=c.indexOf(`
`,l);return f==-1?Ys:(l=Number(c.substring(l,f)),isNaN(l)?Hu:(f+=1,f+l>c.length?Ys:(c=c.slice(f,f+l),s.C=f+l,c)))}ft.prototype.cancel=function(){this.J=!0,Dt(this)};function Wr(s){s.S=Date.now()+s.I,Yu(s,s.I)}function Yu(s,c){if(s.B!=null)throw Error("WatchDog timer not null");s.B=zn(A(s.ba,s),c)}function Zs(s){s.B&&(u.clearTimeout(s.B),s.B=null)}ft.prototype.ba=function(){this.B=null;let s=Date.now();0<=s-this.S?(cp(this.i,this.A),this.L!=2&&(jn(),Te(17)),Dt(this),this.s=2,Kn(this)):Yu(this,this.S-s)};function Kn(s){s.j.G==0||s.J||Tl(s.j,s)}function Dt(s){Zs(s);var c=s.M;c&&typeof c.ma=="function"&&c.ma(),s.M=null,Uu(s.U),s.g&&(c=s.g,s.g=null,c.abort(),c.ma())}function eo(s,c){try{var l=s.j;if(l.G!=0&&(l.g==s||to(l.h,s))){if(!s.K&&to(l.h,s)&&l.G==3){try{var f=l.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var E=f;if(E[0]==0){e:if(!l.u){if(l.g)if(l.g.F+3e3<s.F)ti(l),Zr(l);else break e;so(l),Te(18)}}else l.za=E[1],0<l.za-l.T&&37500>E[2]&&l.F&&l.v==0&&!l.C&&(l.C=zn(A(l.Za,l),6e3));if(1>=el(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else kt(l,11)}else if((s.K||l.g==s)&&ti(l),!z(c))for(E=l.Da.g.parse(c),c=0;c<E.length;c++){let $=E[c];if(l.T=$[0],$=$[1],l.G==2)if($[0]=="c"){l.K=$[1],l.ia=$[2];let ge=$[3];ge!=null&&(l.la=ge,l.j.info("VER="+l.la));let _e=$[4];_e!=null&&(l.Aa=_e,l.j.info("SVER="+l.Aa));let tn=$[5];tn!=null&&typeof tn=="number"&&0<tn&&(f=1.5*tn,l.L=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;let xe=s.g;if(xe){let ri=xe.g?xe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ri){var b=f.h;b.g||ri.indexOf("spdy")==-1&&ri.indexOf("quic")==-1&&ri.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(no(b,b.h),b.h=null))}if(f.D){let ao=xe.g?xe.g.getResponseHeader("X-HTTP-Session-Id"):null;ao&&(f.ya=ao,Z(f.I,f.D,ao))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-s.F,l.j.info("Handshake RTT: "+l.R+"ms")),f=l;var C=s;if(f.qa=Sl(f,f.J?f.ia:null,f.W),C.K){tl(f.h,C);var J=C,he=f.L;he&&(J.I=he),J.B&&(Zs(J),Wr(J)),f.g=C}else wl(f);0<l.i.length&&ei(l)}else $[0]!="stop"&&$[0]!="close"||kt(l,7);else l.G==3&&($[0]=="stop"||$[0]=="close"?$[0]=="stop"?kt(l,7):io(l):$[0]!="noop"&&l.l&&l.l.ta($),l.v=0)}}jn(4)}catch{}}var hp=class{constructor(s,c){this.g=s,this.map=c}};function Xu(s){this.l=s||10,u.PerformanceNavigationTiming?(s=u.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zu(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function el(s){return s.h?1:s.g?s.g.size:0}function to(s,c){return s.h?s.h==c:s.g?s.g.has(c):!1}function no(s,c){s.g?s.g.add(c):s.h=c}function tl(s,c){s.h&&s.h==c?s.h=null:s.g&&s.g.has(c)&&s.g.delete(c)}Xu.prototype.cancel=function(){if(this.i=nl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(let s of this.g.values())s.cancel();this.g.clear()}};function nl(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let c=s.i;for(let l of s.g.values())c=c.concat(l.D);return c}return k(s.i)}function dp(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var c=[],l=s.length,f=0;f<l;f++)c.push(s[f]);return c}c=[],l=0;for(f in s)c[l++]=s[f];return c}function fp(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var c=[];s=s.length;for(var l=0;l<s;l++)c.push(l);return c}c=[],l=0;for(let f in s)c[l++]=f;return c}}}function rl(s,c){if(s.forEach&&typeof s.forEach=="function")s.forEach(c,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,c,void 0);else for(var l=fp(s),f=dp(s),E=f.length,b=0;b<E;b++)c.call(void 0,f[b],l&&l[b],s)}var il=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pp(s,c){if(s){s=s.split("&");for(var l=0;l<s.length;l++){var f=s[l].indexOf("="),E=null;if(0<=f){var b=s[l].substring(0,f);E=s[l].substring(f+1)}else b=s[l];c(b,E?decodeURIComponent(E.replace(/\+/g," ")):"")}}}function Nt(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof Nt){this.h=s.h,Hr(this,s.j),this.o=s.o,this.g=s.g,Qr(this,s.s),this.l=s.l;var c=s.i,l=new Hn;l.i=c.i,c.g&&(l.g=new Map(c.g),l.h=c.h),sl(this,l),this.m=s.m}else s&&(c=String(s).match(il))?(this.h=!1,Hr(this,c[1]||"",!0),this.o=$n(c[2]||""),this.g=$n(c[3]||"",!0),Qr(this,c[4]),this.l=$n(c[5]||"",!0),sl(this,c[6]||"",!0),this.m=$n(c[7]||"")):(this.h=!1,this.i=new Hn(null,this.h))}Nt.prototype.toString=function(){var s=[],c=this.j;c&&s.push(Wn(c,ol,!0),":");var l=this.g;return(l||c=="file")&&(s.push("//"),(c=this.o)&&s.push(Wn(c,ol,!0),"@"),s.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&s.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(Wn(l,l.charAt(0)=="/"?_p:gp,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",Wn(l,vp)),s.join("")};function et(s){return new Nt(s)}function Hr(s,c,l){s.j=l?$n(c,!0):c,s.j&&(s.j=s.j.replace(/:$/,""))}function Qr(s,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);s.s=c}else s.s=null}function sl(s,c,l){c instanceof Hn?(s.i=c,Ip(s.i,s.h)):(l||(c=Wn(c,yp)),s.i=new Hn(c,s.h))}function Z(s,c,l){s.i.set(c,l)}function Jr(s){return Z(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function $n(s,c){return s?c?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Wn(s,c,l){return typeof s=="string"?(s=encodeURI(s).replace(c,mp),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function mp(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var ol=/[#\/\?@]/g,gp=/[#\?:]/g,_p=/[#\?]/g,yp=/[#\?@]/g,vp=/#/g;function Hn(s,c){this.h=this.g=null,this.i=s||null,this.j=!!c}function pt(s){s.g||(s.g=new Map,s.h=0,s.i&&pp(s.i,function(c,l){s.add(decodeURIComponent(c.replace(/\+/g," ")),l)}))}n=Hn.prototype,n.add=function(s,c){pt(this),this.i=null,s=Zt(this,s);var l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(c),this.h+=1,this};function al(s,c){pt(s),c=Zt(s,c),s.g.has(c)&&(s.i=null,s.h-=s.g.get(c).length,s.g.delete(c))}function cl(s,c){return pt(s),c=Zt(s,c),s.g.has(c)}n.forEach=function(s,c){pt(this),this.g.forEach(function(l,f){l.forEach(function(E){s.call(c,E,f,this)},this)},this)},n.na=function(){pt(this);let s=Array.from(this.g.values()),c=Array.from(this.g.keys()),l=[];for(let f=0;f<c.length;f++){let E=s[f];for(let b=0;b<E.length;b++)l.push(c[f])}return l},n.V=function(s){pt(this);let c=[];if(typeof s=="string")cl(this,s)&&(c=c.concat(this.g.get(Zt(this,s))));else{s=Array.from(this.g.values());for(let l=0;l<s.length;l++)c=c.concat(s[l])}return c},n.set=function(s,c){return pt(this),this.i=null,s=Zt(this,s),cl(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[c]),this.h+=1,this},n.get=function(s,c){return s?(s=this.V(s),0<s.length?String(s[0]):c):c};function ul(s,c,l){al(s,c),0<l.length&&(s.i=null,s.g.set(Zt(s,c),k(l)),s.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";let s=[],c=Array.from(this.g.keys());for(var l=0;l<c.length;l++){var f=c[l];let b=encodeURIComponent(String(f)),C=this.V(f);for(f=0;f<C.length;f++){var E=b;C[f]!==""&&(E+="="+encodeURIComponent(String(C[f]))),s.push(E)}}return this.i=s.join("&")};function Zt(s,c){return c=String(c),s.j&&(c=c.toLowerCase()),c}function Ip(s,c){c&&!s.j&&(pt(s),s.i=null,s.g.forEach(function(l,f){var E=f.toLowerCase();f!=E&&(al(this,f),ul(this,E,l))},s)),s.j=c}function wp(s,c){let l=new Gn;if(u.Image){let f=new Image;f.onload=S(mt,l,"TestLoadImage: loaded",!0,c,f),f.onerror=S(mt,l,"TestLoadImage: error",!1,c,f),f.onabort=S(mt,l,"TestLoadImage: abort",!1,c,f),f.ontimeout=S(mt,l,"TestLoadImage: timeout",!1,c,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else c(!1)}function Ep(s,c){let l=new Gn,f=new AbortController,E=setTimeout(()=>{f.abort(),mt(l,"TestPingServer: timeout",!1,c)},1e4);fetch(s,{signal:f.signal}).then(b=>{clearTimeout(E),b.ok?mt(l,"TestPingServer: ok",!0,c):mt(l,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(E),mt(l,"TestPingServer: error",!1,c)})}function mt(s,c,l,f,E){try{E&&(E.onload=null,E.onerror=null,E.onabort=null,E.ontimeout=null),f(l)}catch{}}function Tp(){this.g=new sp}function Ap(s,c,l){let f=l||"";try{rl(s,function(E,b){let C=E;d(E)&&(C=$s(E)),c.push(f+b+"="+encodeURIComponent(C))})}catch(E){throw c.push(f+"type="+encodeURIComponent("_badmap")),E}}function Qn(s){this.l=s.Ub||null,this.j=s.eb||!1}N(Qn,Ws),Qn.prototype.g=function(){return new Yr(this.l,this.j)},Qn.prototype.i=function(s){return function(){return s}}({});function Yr(s,c){me.call(this),this.D=s,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(Yr,me),n=Yr.prototype,n.open=function(s,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=c,this.readyState=1,Yn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;let c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(c.body=s),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Jn(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Yn(this)),this.g&&(this.readyState=3,Yn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ll(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function ll(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var c=s.value?s.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!s.done}))&&(this.response=this.responseText+=c)}s.done?Jn(this):Yn(this),this.readyState==3&&ll(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,Jn(this))},n.Qa=function(s){this.g&&(this.response=s,Jn(this))},n.ga=function(){this.g&&Jn(this)};function Jn(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Yn(s)}n.setRequestHeader=function(s,c){this.u.append(s,c)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";let s=[],c=this.h.entries();for(var l=c.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=c.next();return s.join(`\r
`)};function Yn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Yr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function hl(s){let c="";return H(s,function(l,f){c+=f,c+=":",c+=l,c+=`\r
`}),c}function ro(s,c,l){e:{for(f in l){var f=!1;break e}f=!0}f||(l=hl(l),typeof s=="string"?l!=null&&encodeURIComponent(String(l)):Z(s,c,l))}function te(s){me.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(te,me);var bp=/^https?$/i,Sp=["POST","PUT"];n=te.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,c,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);c=c?c.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Js.g(),this.v=this.o?Bu(this.o):Bu(Js),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(c,String(s),!0),this.B=!1}catch(b){dl(this,b);return}if(s=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var E in f)l.set(E,f[E]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(let b of f.keys())l.set(b,f.get(b));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(b=>b.toLowerCase()=="content-type"),E=u.FormData&&s instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Sp,c,void 0))||f||E||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(let[b,C]of l)this.g.setRequestHeader(b,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ml(this),this.u=!0,this.g.send(s),this.u=!1}catch(b){dl(this,b)}};function dl(s,c){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=c,s.m=5,fl(s),Xr(s)}function fl(s){s.A||(s.A=!0,Ee(s,"complete"),Ee(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Ee(this,"complete"),Ee(this,"abort"),Xr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Xr(this,!0)),te.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?pl(this):this.bb())},n.bb=function(){pl(this)};function pl(s){if(s.h&&typeof a<"u"&&(!s.v[1]||tt(s)!=4||s.Z()!=2)){if(s.u&&tt(s)==4)Lu(s.Ea,0,s);else if(Ee(s,"readystatechange"),tt(s)==4){s.h=!1;try{let C=s.Z();e:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var l;if(!(l=c)){var f;if(f=C===0){var E=String(s.D).match(il)[1]||null;!E&&u.self&&u.self.location&&(E=u.self.location.protocol.slice(0,-1)),f=!bp.test(E?E.toLowerCase():"")}l=f}if(l)Ee(s,"complete"),Ee(s,"success");else{s.m=6;try{var b=2<tt(s)?s.g.statusText:""}catch{b=""}s.l=b+" ["+s.Z()+"]",fl(s)}}finally{Xr(s)}}}}function Xr(s,c){if(s.g){ml(s);let l=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,c||Ee(s,"ready");try{l.onreadystatechange=f}catch{}}}function ml(s){s.I&&(u.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function tt(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<tt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var c=this.g.responseText;return s&&c.indexOf(s)==0&&(c=c.substring(s.length)),ip(c)}};function gl(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Rp(s){let c={};s=(s.g&&2<=tt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(z(s[f]))continue;var l=w(s[f]);let E=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();let b=c[E]||[];c[E]=b,b.push(l)}I(c,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xn(s,c,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||c}function _l(s){this.Aa=0,this.i=[],this.j=new Gn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xn("baseRetryDelayMs",5e3,s),this.cb=Xn("retryDelaySeedMs",1e4,s),this.Wa=Xn("forwardChannelMaxRetries",2,s),this.wa=Xn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Xu(s&&s.concurrentRequestLimit),this.Da=new Tp,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=_l.prototype,n.la=8,n.G=1,n.connect=function(s,c,l,f){Te(0),this.W=s,this.H=c||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.I=Sl(this,null,this.W),ei(this)};function io(s){if(yl(s),s.G==3){var c=s.U++,l=et(s.I);if(Z(l,"SID",s.K),Z(l,"RID",c),Z(l,"TYPE","terminate"),Zn(s,l),c=new ft(s,s.j,c),c.L=2,c.v=Jr(et(l)),l=!1,u.navigator&&u.navigator.sendBeacon)try{l=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!l&&u.Image&&(new Image().src=c.v,l=!0),l||(c.g=Rl(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Wr(c)}bl(s)}function Zr(s){s.g&&(oo(s),s.g.cancel(),s.g=null)}function yl(s){Zr(s),s.u&&(u.clearTimeout(s.u),s.u=null),ti(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&u.clearTimeout(s.s),s.s=null)}function ei(s){if(!Zu(s.h)&&!s.s){s.s=!0;var c=s.Ga;Ln||Du(),Mn||(Ln(),Mn=!0),Ms.add(c,s),s.B=0}}function Pp(s,c){return el(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=c.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=zn(A(s.Ga,s,c),Al(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;let E=new ft(this,this.j,s),b=this.o;if(this.S&&(b?(b=m(b),y(b,this.S)):b=this.S),this.m!==null||this.O||(E.H=b,b=null),this.P)e:{for(var c=0,l=0;l<this.i.length;l++){t:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=l;break e}if(c===4096||l===this.i.length-1){c=l+1;break e}}c=1e3}else c=1e3;c=Il(this,E,c),l=et(this.I),Z(l,"RID",s),Z(l,"CVER",22),this.D&&Z(l,"X-HTTP-Session-Id",this.D),Zn(this,l),b&&(this.O?c="headers="+encodeURIComponent(String(hl(b)))+"&"+c:this.m&&ro(l,this.m,b)),no(this.h,E),this.Ua&&Z(l,"TYPE","init"),this.P?(Z(l,"$req",c),Z(l,"SID","null"),E.T=!0,Xs(E,l,null)):Xs(E,l,c),this.G=2}}else this.G==3&&(s?vl(this,s):this.i.length==0||Zu(this.h)||vl(this))};function vl(s,c){var l;c?l=c.l:l=s.U++;let f=et(s.I);Z(f,"SID",s.K),Z(f,"RID",l),Z(f,"AID",s.T),Zn(s,f),s.m&&s.o&&ro(f,s.m,s.o),l=new ft(s,s.j,l,s.B+1),s.m===null&&(l.H=s.o),c&&(s.i=c.D.concat(s.i)),c=Il(s,l,1e3),l.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),no(s.h,l),Xs(l,f,c)}function Zn(s,c){s.H&&H(s.H,function(l,f){Z(c,f,l)}),s.l&&rl({},function(l,f){Z(c,f,l)})}function Il(s,c,l){l=Math.min(s.i.length,l);var f=s.l?A(s.l.Na,s.l,s):null;e:{var E=s.i;let b=-1;for(;;){let C=["count="+l];b==-1?0<l?(b=E[0].g,C.push("ofs="+b)):b=0:C.push("ofs="+b);let J=!0;for(let he=0;he<l;he++){let $=E[he].g,ge=E[he].map;if($-=b,0>$)b=Math.max(0,E[he].g-100),J=!1;else try{Ap(ge,C,"req"+$+"_")}catch{f&&f(ge)}}if(J){f=C.join("&");break e}}}return s=s.i.splice(0,l),c.D=s,f}function wl(s){if(!s.g&&!s.u){s.Y=1;var c=s.Fa;Ln||Du(),Mn||(Ln(),Mn=!0),Ms.add(c,s),s.v=0}}function so(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=zn(A(s.Fa,s),Al(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,El(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=zn(A(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Te(10),Zr(this),El(this))};function oo(s){s.A!=null&&(u.clearTimeout(s.A),s.A=null)}function El(s){s.g=new ft(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var c=et(s.qa);Z(c,"RID","rpc"),Z(c,"SID",s.K),Z(c,"AID",s.T),Z(c,"CI",s.F?"0":"1"),!s.F&&s.ja&&Z(c,"TO",s.ja),Z(c,"TYPE","xmlhttp"),Zn(s,c),s.m&&s.o&&ro(c,s.m,s.o),s.L&&(s.g.I=s.L);var l=s.g;s=s.ia,l.L=1,l.v=Jr(et(c)),l.m=null,l.P=!0,Qu(l,s)}n.Za=function(){this.C!=null&&(this.C=null,Zr(this),so(this),Te(19))};function ti(s){s.C!=null&&(u.clearTimeout(s.C),s.C=null)}function Tl(s,c){var l=null;if(s.g==c){ti(s),oo(s),s.g=null;var f=2}else if(to(s.h,c))l=c.D,tl(s.h,c),f=1;else return;if(s.G!=0){if(c.o)if(f==1){l=c.m?c.m.length:0,c=Date.now()-c.F;var E=s.B;f=Gr(),Ee(f,new Ku(f,l)),ei(s)}else wl(s);else if(E=c.s,E==3||E==0&&0<c.X||!(f==1&&Pp(s,c)||f==2&&so(s)))switch(l&&0<l.length&&(c=s.h,c.i=c.i.concat(l)),E){case 1:kt(s,5);break;case 4:kt(s,10);break;case 3:kt(s,6);break;default:kt(s,2)}}}function Al(s,c){let l=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(l*=2),l*c}function kt(s,c){if(s.j.info("Error code "+c),c==2){var l=A(s.fb,s),f=s.Xa;let E=!f;f=new Nt(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Hr(f,"https"),Jr(f),E?wp(f.toString(),l):Ep(f.toString(),l)}else Te(2);s.G=0,s.l&&s.l.sa(c),bl(s),yl(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Te(2)):(this.j.info("Failed to ping google.com"),Te(1))};function bl(s){if(s.G=0,s.ka=[],s.l){let c=nl(s.h);(c.length!=0||s.i.length!=0)&&(D(s.ka,c),D(s.ka,s.i),s.h.i.length=0,k(s.i),s.i.length=0),s.l.ra()}}function Sl(s,c,l){var f=l instanceof Nt?et(l):new Nt(l);if(f.g!="")c&&(f.g=c+"."+f.g),Qr(f,f.s);else{var E=u.location;f=E.protocol,c=c?c+"."+E.hostname:E.hostname,E=+E.port;var b=new Nt(null);f&&Hr(b,f),c&&(b.g=c),E&&Qr(b,E),l&&(b.l=l),f=b}return l=s.D,c=s.ya,l&&c&&Z(f,l,c),Z(f,"VER",s.la),Zn(s,f),f}function Rl(s,c,l){if(c&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=s.Ca&&!s.pa?new te(new Qn({eb:l})):new te(s.pa),c.Ha(s.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Pl(){}n=Pl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ni(){}ni.prototype.g=function(s,c){return new be(s,c)};function be(s,c){me.call(this),this.g=new _l(c),this.l=s,this.h=c&&c.messageUrlParams||null,s=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(s?s["X-WebChannel-Content-Type"]=c.messageContentType:s={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(s?s["X-WebChannel-Client-Profile"]=c.va:s={"X-WebChannel-Client-Profile":c.va}),this.g.S=s,(s=c&&c.Sb)&&!z(s)&&(this.g.m=s),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!z(c)&&(this.g.D=c,s=this.h,s!==null&&c in s&&(s=this.h,c in s&&delete s[c])),this.j=new en(this)}N(be,me),be.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},be.prototype.close=function(){io(this.g)},be.prototype.o=function(s){var c=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.u&&(l={},l.__data__=$s(s),s=l);c.i.push(new hp(c.Ya++,s)),c.G==3&&ei(c)},be.prototype.N=function(){this.g.l=null,delete this.j,io(this.g),delete this.g,be.aa.N.call(this)};function Cl(s){Hs.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var c=s.__sm__;if(c){e:{for(let l in c){s=l;break e}s=void 0}(this.i=s)&&(s=this.i,c=c!==null&&s in c?c[s]:void 0),this.data=c}else this.data=s}N(Cl,Hs);function Dl(){Qs.call(this),this.status=1}N(Dl,Qs);function en(s){this.g=s}N(en,Pl),en.prototype.ua=function(){Ee(this.g,"a")},en.prototype.ta=function(s){Ee(this.g,new Cl(s))},en.prototype.sa=function(s){Ee(this.g,new Dl)},en.prototype.ra=function(){Ee(this.g,"b")},ni.prototype.createWebChannel=ni.prototype.g,be.prototype.send=be.prototype.o,be.prototype.open=be.prototype.m,be.prototype.close=be.prototype.close,Ta=ot.createWebChannelTransport=function(){return new ni},Ea=ot.getStatEventTarget=function(){return Gr()},wa=ot.Event=Ct,zi=ot.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Kr.NO_ERROR=0,Kr.TIMEOUT=8,Kr.HTTP_ERROR=6,gr=ot.ErrorCode=Kr,$u.COMPLETE="complete",Ia=ot.EventType=$u,qu.EventType=qn,qn.OPEN="a",qn.CLOSE="b",qn.ERROR="c",qn.MESSAGE="d",me.prototype.listen=me.prototype.K,hn=ot.WebChannel=qu,B_=ot.FetchXmlHttpFactory=Qn,te.prototype.listenOnce=te.prototype.L,te.prototype.getLastError=te.prototype.Ka,te.prototype.getLastErrorCode=te.prototype.Ba,te.prototype.getStatus=te.prototype.Z,te.prototype.getResponseJson=te.prototype.Oa,te.prototype.getResponseText=te.prototype.oa,te.prototype.send=te.prototype.ea,te.prototype.setWithCredentials=te.prototype.Ha,va=ot.XhrIo=te}).apply(typeof ji<"u"?ji:typeof self<"u"?self:typeof window<"u"?window:{});var cd="@firebase/firestore";var le=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};le.UNAUTHENTICATED=new le(null),le.GOOGLE_CREDENTIALS=new le("google-credentials-uid"),le.FIRST_PARTY=new le("first-party-uid"),le.MOCK_USER=new le("mock-user");var On="10.14.0";var zt=new gt("@firebase/firestore");function _r(){return zt.logLevel}function O(n,...e){if(zt.logLevel<=q.DEBUG){let t=e.map(cu);zt.debug(`Firestore (${On}): ${n}`,...t)}}function ct(n,...e){if(zt.logLevel<=q.ERROR){let t=e.map(cu);zt.error(`Firestore (${On}): ${n}`,...t)}}function yn(n,...e){if(zt.logLevel<=q.WARN){let t=e.map(cu);zt.warn(`Firestore (${On}): ${n}`,...t)}}function cu(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}function M(n="Unexpected state"){let e=`FIRESTORE (${On}) INTERNAL ASSERTION FAILED: `+n;throw ct(e),new Error(e)}function Q(n,e){n||M()}function F(n,e){return n}var R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},x=class extends Se{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};var Ke=class{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}};var Hi=class{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},Ca=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(le.UNAUTHENTICATED))}shutdown(){}},Da=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}},Na=class{constructor(e){this.t=e,this.currentUser=le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Q(this.o===void 0);let r=this.i,i=h=>this.i!==r?(r=this.i,t(h)):Promise.resolve(),o=new Ke;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ke,e.enqueueRetryable(()=>i(this.currentUser))};let a=()=>{let h=o;e.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},u=h=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){let h=this.t.getImmediate({optional:!0});h?u(h):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ke)}},0),a()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Q(typeof r.accessToken=="string"),new Hi(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return Q(e===null||typeof e=="string"),new le(e)}},ka=class{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=le.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}},Oa=class{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new ka(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(le.FIRST_PARTY))}shutdown(){}invalidateToken(){}},xa=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},Va=class{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Q(this.o===void 0);let r=o=>{o.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);let a=o.token!==this.R;return this.R=o.token,O("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};let i=o=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){let o=this.A.getImmediate({optional:!0});o?i(o):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Q(typeof t.token=="string"),this.R=t.token,new xa(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}};function q_(n){let e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}var Qi=class{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,r="";for(;r.length<20;){let i=q_(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<t&&(r+=e.charAt(i[o]%e.length))}return r}};function W(n,e){return n<e?-1:n>e?1:0}function vn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}var fe=class n{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new x(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new x(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new x(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return n.fromMillis(Date.now())}static fromDate(e){return n.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new n(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?W(this.nanoseconds,e.nanoseconds):W(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};var U=class n{constructor(e){this.timestamp=e}static fromTimestamp(e){return new n(e)}static min(){return new n(new fe(0,0))}static max(){return new n(new fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};var Ji=class n{constructor(e,t,r){t===void 0?t=0:t>e.length&&M(),r===void 0?r=e.length-t:r>e.length-t&&M(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return n.comparator(this,e)===0}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof n?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let i=0;i<r;i++){let o=e.get(i),a=t.get(i);if(o<a)return-1;if(o>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}},ne=class n extends Ji{construct(e,t,r){return new n(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new x(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new n(t)}static emptyPath(){return new n([])}},j_=/^[_a-zA-Z][_a-zA-Z0-9]*$/,Ce=class n extends Ji{construct(e,t,r){return new n(e,t,r)}static isValidIdentifier(e){return j_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),n.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new n(["__name__"])}static fromServerFormat(e){let t=[],r="",i=0,o=()=>{if(r.length===0)throw new x(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},a=!1;for(;i<e.length;){let u=e[i];if(u==="\\"){if(i+1===e.length)throw new x(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let h=e[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new x(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(r+=u,i++):(o(),i++)}if(o(),a)throw new x(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new n(t)}static emptyPath(){return new n([])}};var L=class n{constructor(e){this.path=e}static fromPath(e){return new n(ne.fromString(e))}static fromName(e){return new n(ne.fromString(e).popFirst(5))}static empty(){return new n(ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ne.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new n(new ne(e.slice()))}};var La=class{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}};La.UNKNOWN_ID=-1;function z_(n,e){let t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=U.fromTimestamp(r===1e9?new fe(t+1,0):new fe(t,r));return new Gt(i,L.empty(),e)}function G_(n){return new Gt(n.readTime,n.key,-1)}var Gt=class n{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new n(U.min(),L.empty(),-1)}static max(){return new n(U.max(),L.empty(),-1)}};function K_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=L.comparator(n.documentKey,e.documentKey),t!==0?t:W(n.largestBatchId,e.largestBatchId))}var $_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",Ma=class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}};async function Lr(n){if(n.code!==R.FAILED_PRECONDITION||n.message!==$_)throw n;O("LocalStore","Unexpectedly lost primary lease")}var P=class n{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new n((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof n?t:n.resolve(t)}catch(t){return n.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):n.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):n.reject(t)}static resolve(e){return new n((t,r)=>{t(e)})}static reject(e){return new n((t,r)=>{r(e)})}static waitFor(e){return new n((t,r)=>{let i=0,o=0,a=!1;e.forEach(u=>{++i,u.next(()=>{++o,a&&o===i&&t()},h=>r(h))}),a=!0,o===i&&t()})}static or(e){let t=n.resolve(!1);for(let r of e)t=t.next(i=>i?n.resolve(i):r());return t}static forEach(e,t){let r=[];return e.forEach((i,o)=>{r.push(t.call(this,i,o))}),this.waitFor(r)}static mapArray(e,t){return new n((r,i)=>{let o=e.length,a=new Array(o),u=0;for(let h=0;h<o;h++){let d=h;t(e[d]).next(p=>{a[d]=p,++u,u===o&&r(a)},p=>i(p))}})}static doWhile(e,t){return new n((r,i)=>{let o=()=>{e()===!0?t().next(()=>{o()},i):r()};o()})}};function W_(n){let e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Mr(n){return n.name==="IndexedDbTransactionError"}var Tr=class{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.se&&this.se(e),e}};Tr.oe=-1;function Rs(n){return n==null}function Ar(n){return n===0&&1/n==-1/0}function H_(n){return typeof n=="number"&&Number.isInteger(n)&&!Ar(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}var Q_=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],_w=[...Q_,"documentOverlays"],J_=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Y_=J_,X_=[...Y_,"indexConfiguration","indexState","indexEntries"];var yw=[...X_,"globals"];function ud(n){let e=0;for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Jt(n,e){for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Ud(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}var re=class n{constructor(e,t){this.comparator=e,this.root=t||$e.EMPTY}insert(e,t){return new n(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,$e.BLACK,null,null))}remove(e){return new n(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$e.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new mn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new mn(this.root,e,this.comparator,!1)}getReverseIterator(){return new mn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new mn(this.root,e,this.comparator,!0)}},mn=class{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},$e=class n{constructor(e,t,r,i,o){this.key=e,this.value=t,this.color=r??n.RED,this.left=i??n.EMPTY,this.right=o??n.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,o){return new n(e??this.key,t??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this,o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,r),null):o===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return n.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return n.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){let e=this.copy(null,null,n.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,n.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();let e=this.left.check();if(e!==this.right.check())throw M();return e+(this.isRed()?0:1)}};$e.EMPTY=null,$e.RED=!0,$e.BLACK=!1;$e.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(e,t,r,i,o){return this}insert(e,t,r){return new $e(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};var ve=class n{constructor(e){this.comparator=e,this.data=new re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Yi(this.data.getIterator())}getIteratorFrom(e){return new Yi(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let i=t.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new n(this.comparator);return t.data=e,t}},Yi=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};var ke=class n{constructor(e){this.fields=e,e.sort(Ce.comparator)}static empty(){return new n([])}unionWith(e){let t=new ve(Ce.comparator);for(let r of this.fields)t=t.add(r);for(let r of e)t=t.add(r);return new n(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return vn(this.fields,e.fields,(t,r)=>t.isEqual(r))}};var Xi=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};var Ie=class n{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Xi("Invalid base64 string: "+o):o}}(e);return new n(t)}static fromUint8Array(e){let t=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(e);return new n(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){let r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return W(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};Ie.EMPTY_BYTE_STRING=new Ie("");var Z_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ut(n){if(Q(!!n),typeof n=="string"){let e=0,t=Z_.exec(n);if(Q(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}let r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ee(n.seconds),nanos:ee(n.nanos)}}function ee(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function bt(n){return typeof n=="string"?Ie.fromBase64String(n):Ie.fromUint8Array(n)}function uu(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function lu(n){let e=n.mapValue.fields.__previous_value__;return uu(e)?lu(e):e}function br(n){let e=ut(n.mapValue.fields.__local_write_time__.timestampValue);return new fe(e.seconds,e.nanos)}var Fa=class{constructor(e,t,r,i,o,a,u,h,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d}},Zi=class n{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new n("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof n&&e.projectId===this.projectId&&e.database===this.database}};var Gi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Kt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?uu(n)?4:qd(n)?9007199254740991:Bd(n)?10:11:M()}function Je(n,e){if(n===e)return!0;let t=Kt(n);if(t!==Kt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return br(n).isEqual(br(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;let a=ut(i.timestampValue),u=ut(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,o){return bt(i.bytesValue).isEqual(bt(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,o){return ee(i.geoPointValue.latitude)===ee(o.geoPointValue.latitude)&&ee(i.geoPointValue.longitude)===ee(o.geoPointValue.longitude)}(n,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return ee(i.integerValue)===ee(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){let a=ee(i.doubleValue),u=ee(o.doubleValue);return a===u?Ar(a)===Ar(u):isNaN(a)&&isNaN(u)}return!1}(n,e);case 9:return vn(n.arrayValue.values||[],e.arrayValue.values||[],Je);case 10:case 11:return function(i,o){let a=i.mapValue.fields||{},u=o.mapValue.fields||{};if(ud(a)!==ud(u))return!1;for(let h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!Je(a[h],u[h])))return!1;return!0}(n,e);default:return M()}}function Sr(n,e){return(n.values||[]).find(t=>Je(t,e))!==void 0}function In(n,e){if(n===e)return 0;let t=Kt(n),r=Kt(e);if(t!==r)return W(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return W(n.booleanValue,e.booleanValue);case 2:return function(o,a){let u=ee(o.integerValue||o.doubleValue),h=ee(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,e);case 3:return ld(n.timestampValue,e.timestampValue);case 4:return ld(br(n),br(e));case 5:return W(n.stringValue,e.stringValue);case 6:return function(o,a){let u=bt(o),h=bt(a);return u.compareTo(h)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){let u=o.split("/"),h=a.split("/");for(let d=0;d<u.length&&d<h.length;d++){let p=W(u[d],h[d]);if(p!==0)return p}return W(u.length,h.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){let u=W(ee(o.latitude),ee(a.latitude));return u!==0?u:W(ee(o.longitude),ee(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return hd(n.arrayValue,e.arrayValue);case 10:return function(o,a){var u,h,d,p;let v=o.fields||{},A=a.fields||{},S=(u=v.value)===null||u===void 0?void 0:u.arrayValue,N=(h=A.value)===null||h===void 0?void 0:h.arrayValue,k=W(((d=S?.values)===null||d===void 0?void 0:d.length)||0,((p=N?.values)===null||p===void 0?void 0:p.length)||0);return k!==0?k:hd(S,N)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===Gi.mapValue&&a===Gi.mapValue)return 0;if(o===Gi.mapValue)return 1;if(a===Gi.mapValue)return-1;let u=o.fields||{},h=Object.keys(u),d=a.fields||{},p=Object.keys(d);h.sort(),p.sort();for(let v=0;v<h.length&&v<p.length;++v){let A=W(h[v],p[v]);if(A!==0)return A;let S=In(u[h[v]],d[p[v]]);if(S!==0)return S}return W(h.length,p.length)}(n.mapValue,e.mapValue);default:throw M()}}function ld(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return W(n,e);let t=ut(n),r=ut(e),i=W(t.seconds,r.seconds);return i!==0?i:W(t.nanos,r.nanos)}function hd(n,e){let t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){let o=In(t[i],r[i]);if(o)return o}return W(t.length,r.length)}function wn(n){return Ua(n)}function Ua(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){let r=ut(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return bt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return L.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(let o of t.values||[])i?i=!1:r+=",",r+=Ua(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){let r=Object.keys(t.fields||{}).sort(),i="{",o=!0;for(let a of r)o?o=!1:i+=",",i+=`${a}:${Ua(t.fields[a])}`;return i+"}"}(n.mapValue):M()}function Ba(n){return!!n&&"integerValue"in n}function hu(n){return!!n&&"arrayValue"in n}function dd(n){return!!n&&"nullValue"in n}function fd(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function $i(n){return!!n&&"mapValue"in n}function Bd(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function vr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){let e={mapValue:{fields:{}}};return Jt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=vr(r)),e}if(n.arrayValue){let e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=vr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function qd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}var Pe=class n{constructor(e){this.value=e}static empty(){return new n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!$i(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=vr(t)}setAll(e){let t=Ce.emptyPath(),r={},i=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){let h=this.getFieldsMap(t);this.applyChanges(h,r,i),r={},i=[],t=u.popLast()}a?r[u.lastSegment()]=vr(a):i.push(u.lastSegment())});let o=this.getFieldsMap(t);this.applyChanges(o,r,i)}delete(e){let t=this.field(e.popLast());$i(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Je(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];$i(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Jt(t,(i,o)=>e[i]=o);for(let i of r)delete e[i]}clone(){return new n(vr(this.value))}};function jd(n){let e=[];return Jt(n.fields,(t,r)=>{let i=new Ce([t]);if($i(r)){let o=jd(r.mapValue).fields;if(o.length===0)e.push(i);else for(let a of o)e.push(i.child(a))}else e.push(i)}),new ke(e)}var Fe=class n{constructor(e,t,r,i,o,a,u){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(e){return new n(e,0,U.min(),U.min(),U.min(),Pe.empty(),0)}static newFoundDocument(e,t,r,i){return new n(e,1,t,U.min(),r,i,0)}static newNoDocument(e,t){return new n(e,2,t,U.min(),U.min(),Pe.empty(),0)}static newUnknownDocument(e,t){return new n(e,3,t,U.min(),U.min(),Pe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof n&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new n(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};var En=class{constructor(e,t){this.position=e,this.inclusive=t}};function pd(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){let o=e[i],a=n.position[i];if(o.field.isKeyField()?r=L.comparator(L.fromName(a.referenceValue),t.key):r=In(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function md(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Je(n.position[t],e.position[t]))return!1;return!0}var Tn=class{constructor(e,t="asc"){this.field=e,this.dir=t}};function ey(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}var es=class{},ae=class n extends es{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new ja(e,t,r):t==="array-contains"?new Ka(e,r):t==="in"?new $a(e,r):t==="not-in"?new Wa(e,r):t==="array-contains-any"?new Ha(e,r):new n(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new za(e,r):new Ga(e,r)}matches(e){let t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(In(t,this.value)):t!==null&&Kt(this.value)===Kt(t)&&this.matchesComparison(In(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}},Ye=class n extends es{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new n(e,t)}matches(e){return zd(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}};function zd(n){return n.op==="and"}function Gd(n){return ty(n)&&zd(n)}function ty(n){for(let e of n.filters)if(e instanceof Ye)return!1;return!0}function qa(n){if(n instanceof ae)return n.field.canonicalString()+n.op.toString()+wn(n.value);if(Gd(n))return n.filters.map(e=>qa(e)).join(",");{let e=n.filters.map(t=>qa(t)).join(",");return`${n.op}(${e})`}}function Kd(n,e){return n instanceof ae?function(r,i){return i instanceof ae&&r.op===i.op&&r.field.isEqual(i.field)&&Je(r.value,i.value)}(n,e):n instanceof Ye?function(r,i){return i instanceof Ye&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,u)=>o&&Kd(a,i.filters[u]),!0):!1}(n,e):void M()}function $d(n){return n instanceof ae?function(t){return`${t.field.canonicalString()} ${t.op} ${wn(t.value)}`}(n):n instanceof Ye?function(t){return t.op.toString()+" {"+t.getFilters().map($d).join(" ,")+"}"}(n):"Filter"}var ja=class extends ae{constructor(e,t,r){super(e,t,r),this.key=L.fromName(r.referenceValue)}matches(e){let t=L.comparator(e.key,this.key);return this.matchesComparison(t)}},za=class extends ae{constructor(e,t){super(e,"in",t),this.keys=Wd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}},Ga=class extends ae{constructor(e,t){super(e,"not-in",t),this.keys=Wd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}};function Wd(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>L.fromName(r.referenceValue))}var Ka=class extends ae{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return hu(t)&&Sr(t.arrayValue,this.value)}},$a=class extends ae{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return t!==null&&Sr(this.value.arrayValue,t)}},Wa=class extends ae{constructor(e,t){super(e,"not-in",t)}matches(e){if(Sr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return t!==null&&!Sr(this.value.arrayValue,t)}},Ha=class extends ae{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!hu(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Sr(this.value.arrayValue,r))}};var Qa=class{constructor(e,t=null,r=[],i=[],o=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=u,this.ue=null}};function gd(n,e=null,t=[],r=[],i=null,o=null,a=null){return new Qa(n,e,t,r,i,o,a)}function du(n){let e=F(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>qa(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Rs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>wn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>wn(r)).join(",")),e.ue=t}return e.ue}function fu(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!ey(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Kd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!md(n.startAt,e.startAt)&&md(n.endAt,e.endAt)}function Ja(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}var An=class{constructor(e,t=null,r=[],i=[],o=null,a="F",u=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}};function ny(n,e,t,r,i,o,a,u){return new An(n,e,t,r,i,o,a,u)}function Ps(n){return new An(n)}function _d(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ry(n){return n.collectionGroup!==null}function Ir(n){let e=F(n);if(e.ce===null){e.ce=[];let t=new Set;for(let o of e.explicitOrderBy)e.ce.push(o),t.add(o.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new ve(Ce.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.ce.push(new Tn(o,r))}),t.has(Ce.keyField().canonicalString())||e.ce.push(new Tn(Ce.keyField(),r))}return e.ce}function We(n){let e=F(n);return e.le||(e.le=iy(e,Ir(n))),e.le}function iy(n,e){if(n.limitType==="F")return gd(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{let o=i.dir==="desc"?"asc":"desc";return new Tn(i.field,o)});let t=n.endAt?new En(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new En(n.startAt.position,n.startAt.inclusive):null;return gd(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ya(n,e,t){return new An(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Cs(n,e){return fu(We(n),We(e))&&n.limitType===e.limitType}function Hd(n){return`${du(We(n))}|lt:${n.limitType}`}function dn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>$d(i)).join(", ")}]`),Rs(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>wn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>wn(i)).join(",")),`Target(${r})`}(We(n))}; limitType=${n.limitType})`}function Ds(n,e){return e.isFoundDocument()&&function(r,i){let o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):L.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,i){for(let o of Ir(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,i){for(let o of r.filters)if(!o.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,u,h){let d=pd(a,u,h);return a.inclusive?d<=0:d<0}(r.startAt,Ir(r),i)||r.endAt&&!function(a,u,h){let d=pd(a,u,h);return a.inclusive?d>=0:d>0}(r.endAt,Ir(r),i))}(n,e)}function sy(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Qd(n){return(e,t)=>{let r=!1;for(let i of Ir(n)){let o=oy(i,e,t);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function oy(n,e,t){let r=n.field.isKeyField()?L.comparator(e.key,t.key):function(o,a,u){let h=a.data.field(o),d=u.data.field(o);return h!==null&&d!==null?In(h,d):M()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M()}}var St=class{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(let[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){let r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Jt(this.inner,(t,r)=>{for(let[i,o]of r)e(i,o)})}isEmpty(){return Ud(this.inner)}size(){return this.innerSize}};var ay=new re(L.comparator);function lt(){return ay}var Jd=new re(L.comparator);function yr(...n){let e=Jd;for(let t of n)e=e.insert(t.key,t);return e}function Yd(n){let e=Jd;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Bt(){return wr()}function Xd(){return wr()}function wr(){return new St(n=>n.toString(),(n,e)=>n.isEqual(e))}var cy=new re(L.comparator),uy=new ve(L.comparator);function j(...n){let e=uy;for(let t of n)e=e.add(t);return e}var ly=new ve(W);function hy(){return ly}function pu(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ar(e)?"-0":e}}function Zd(n){return{integerValue:""+n}}function dy(n,e){return H_(e)?Zd(e):pu(n,e)}var bn=class{constructor(){this._=void 0}};function fy(n,e,t){return n instanceof $t?function(i,o){let a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&uu(o)&&(o=lu(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(t,e):n instanceof Wt?tf(n,e):n instanceof Ht?nf(n,e):function(i,o){let a=ef(i,o),u=yd(a)+yd(i.Pe);return Ba(a)&&Ba(i.Pe)?Zd(u):pu(i.serializer,u)}(n,e)}function py(n,e,t){return n instanceof Wt?tf(n,e):n instanceof Ht?nf(n,e):t}function ef(n,e){return n instanceof Sn?function(r){return Ba(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}var $t=class extends bn{},Wt=class extends bn{constructor(e){super(),this.elements=e}};function tf(n,e){let t=rf(e);for(let r of n.elements)t.some(i=>Je(i,r))||t.push(r);return{arrayValue:{values:t}}}var Ht=class extends bn{constructor(e){super(),this.elements=e}};function nf(n,e){let t=rf(e);for(let r of n.elements)t=t.filter(i=>!Je(i,r));return{arrayValue:{values:t}}}var Sn=class extends bn{constructor(e,t){super(),this.serializer=e,this.Pe=t}};function yd(n){return ee(n.integerValue||n.doubleValue)}function rf(n){return hu(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}var Xa=class{constructor(e,t){this.field=e,this.transform=t}};function my(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Wt&&i instanceof Wt||r instanceof Ht&&i instanceof Ht?vn(r.elements,i.elements,Je):r instanceof Sn&&i instanceof Sn?Je(r.Pe,i.Pe):r instanceof $t&&i instanceof $t}(n.transform,e.transform)}var Za=class{constructor(e,t){this.version=e,this.transformResults=t}},He=class n{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new n}static exists(e){return new n(void 0,e)}static updateTime(e){return new n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}};function Wi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}var Rn=class{};function sf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Rr(n.key,He.none()):new Qt(n.key,n.data,He.none());{let t=n.data,r=Pe.empty(),i=new ve(Ce.comparator);for(let o of e.fields)if(!i.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new Xe(n.key,r,new ke(i.toArray()),He.none())}}function gy(n,e,t){n instanceof Qt?function(i,o,a){let u=i.value.clone(),h=Id(i.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):n instanceof Xe?function(i,o,a){if(!Wi(i.precondition,o))return void o.convertToUnknownDocument(a.version);let u=Id(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(of(i)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,e,t):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Er(n,e,t,r){return n instanceof Qt?function(o,a,u,h){if(!Wi(o.precondition,a))return u;let d=o.value.clone(),p=wd(o.fieldTransforms,h,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof Xe?function(o,a,u,h){if(!Wi(o.precondition,a))return u;let d=wd(o.fieldTransforms,h,a),p=a.data;return p.setAll(of(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(v=>v.field))}(n,e,t,r):function(o,a,u){return Wi(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,e,t)}function _y(n,e){let t=null;for(let r of n.fieldTransforms){let i=e.data.field(r.field),o=ef(r.transform,i||null);o!=null&&(t===null&&(t=Pe.empty()),t.set(r.field,o))}return t||null}function vd(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&vn(r,i,(o,a)=>my(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}var Qt=class extends Rn{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}},Xe=class extends Rn{constructor(e,t,r,i,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}};function of(n){let e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){let r=n.data.field(t);e.set(t,r)}}),e}function Id(n,e,t){let r=new Map;Q(n.length===t.length);for(let i=0;i<t.length;i++){let o=n[i],a=o.transform,u=e.data.field(o.field);r.set(o.field,py(a,u,t[i]))}return r}function wd(n,e,t){let r=new Map;for(let i of n){let o=i.transform,a=t.data.field(i.field);r.set(i.field,fy(o,a,e))}return r}var Rr=class extends Rn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},ec=class extends Rn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};var tc=class{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){let o=this.mutations[i];o.key.isEqual(e.key)&&gy(o,e,r[i])}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=Er(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=Er(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=Xd();return this.mutations.forEach(i=>{let o=e.get(i.key),a=o.overlayedDocument,u=this.applyToLocalView(a,o.mutatedFields);u=t.has(i.key)?null:u;let h=sf(a,u);h!==null&&r.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(U.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),j())}isEqual(e){return this.batchId===e.batchId&&vn(this.mutations,e.mutations,(t,r)=>vd(t,r))&&vn(this.baseMutations,e.baseMutations,(t,r)=>vd(t,r))}},nc=class n{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){Q(e.mutations.length===r.length);let i=function(){return cy}(),o=e.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new n(e,t,r,i)}};var rc=class{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};var ic=class{constructor(e,t){this.count=e,this.unchangedNames=t}};var ie,K;function yy(n){switch(n){default:return M();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function af(n){if(n===void 0)return ct("GRPC error has no .code"),R.UNKNOWN;switch(n){case ie.OK:return R.OK;case ie.CANCELLED:return R.CANCELLED;case ie.UNKNOWN:return R.UNKNOWN;case ie.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case ie.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case ie.INTERNAL:return R.INTERNAL;case ie.UNAVAILABLE:return R.UNAVAILABLE;case ie.UNAUTHENTICATED:return R.UNAUTHENTICATED;case ie.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case ie.NOT_FOUND:return R.NOT_FOUND;case ie.ALREADY_EXISTS:return R.ALREADY_EXISTS;case ie.PERMISSION_DENIED:return R.PERMISSION_DENIED;case ie.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case ie.ABORTED:return R.ABORTED;case ie.OUT_OF_RANGE:return R.OUT_OF_RANGE;case ie.UNIMPLEMENTED:return R.UNIMPLEMENTED;case ie.DATA_LOSS:return R.DATA_LOSS;default:return M()}}(K=ie||(ie={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";var Ed=null;function vy(){return new TextEncoder}var Iy=new Tt([4294967295,4294967295],0);function Td(n){let e=vy().encode(n),t=new ya;return t.update(e),new Uint8Array(t.digest())}function Ad(n){let e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Tt([t,r],0),new Tt([i,o],0)]}var sc=class n{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new qt(`Invalid padding: ${t}`);if(r<0)throw new qt(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new qt(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new qt(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Tt.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(Tt.fromNumber(r)));return i.compare(Iy)===1&&(i=new Tt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;let t=Td(e),[r,i]=Ad(t);for(let o=0;o<this.hashCount;o++){let a=this.Ee(r,i,o);if(!this.de(a))return!1}return!0}static create(e,t,r){let i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new n(o,i,t);return r.forEach(u=>a.insert(u)),a}insert(e){if(this.Ie===0)return;let t=Td(e),[r,i]=Ad(t);for(let o=0;o<this.hashCount;o++){let a=this.Ee(r,i,o);this.Ae(a)}}Ae(e){let t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}},qt=class extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}};var ts=class n{constructor(e,t,r,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let i=new Map;return i.set(e,Pr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new n(U.min(),i,new re(W),lt(),j())}},Pr=class n{constructor(e,t,r,i,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new n(r,t,j(),j(),j())}};var gn=class{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}},ns=class{constructor(e,t){this.targetId=e,this.me=t}},rs=class{constructor(e,t,r=Ie.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}},is=class{constructor(){this.fe=0,this.ge=Sd(),this.pe=Ie.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=j(),t=j(),r=j();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:M()}}),new Pr(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Sd()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Q(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}},oc=class{constructor(e){this.Le=e,this.Be=new Map,this.ke=lt(),this.qe=bd(),this.Qe=new re(W)}Ke(e){for(let t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(let t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{let r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:M()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){let t=e.targetId,r=e.me.count,i=this.Je(t);if(i){let o=i.target;if(Ja(o))if(r===0){let a=new L(o.path);this.Ue(t,a,Fe.newNoDocument(a,U.min()))}else Q(r===1);else{let a=this.Ye(t);if(a!==r){let u=this.Ze(e),h=u?this.Xe(u,e,a):1;if(h!==0){this.je(t);let d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}Ed?.et(function(p,v,A,S,N){var k,D,B,z,G,X;let we={localCacheCount:p,existenceFilterCount:v.count,databaseId:A.database,projectId:A.projectId},H=v.unchangedNames;return H&&(we.bloomFilter={applied:N===0,hashCount:(k=H?.hashCount)!==null&&k!==void 0?k:0,bitmapLength:(z=(B=(D=H?.bits)===null||D===void 0?void 0:D.bitmap)===null||B===void 0?void 0:B.length)!==null&&z!==void 0?z:0,padding:(X=(G=H?.bits)===null||G===void 0?void 0:G.padding)!==null&&X!==void 0?X:0,mightContain:I=>{var m;return(m=S?.mightContain(I))!==null&&m!==void 0&&m}}),we}(a,e.me,this.Le.tt(),u,h))}}}}Ze(e){let t=e.me.unchangedNames;if(!t||!t.bits)return null;let{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=t,a,u;try{a=bt(r).toUint8Array()}catch(h){if(h instanceof Xi)return yn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new sc(a,i,o)}catch(h){return yn(h instanceof qt?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.Ie===0?null:u}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){let r=this.Le.getRemoteKeysForTarget(t),i=0;return r.forEach(o=>{let a=this.Le.tt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(u)||(this.Ue(t,o,null),i++)}),i}rt(e){let t=new Map;this.Be.forEach((o,a)=>{let u=this.Je(a);if(u){if(o.current&&Ja(u.target)){let h=new L(u.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,Fe.newNoDocument(h,e))}o.be&&(t.set(a,o.ve()),o.Ce())}});let r=j();this.qe.forEach((o,a)=>{let u=!0;a.forEachWhile(h=>{let d=this.Je(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(e));let i=new ts(e,t,this.Qe,this.ke,r);return this.ke=lt(),this.qe=bd(),this.Qe=new re(W),i}$e(e,t){if(!this.ze(e))return;let r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;let i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){let t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new is,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ve(W),this.qe=this.qe.insert(e,t)),t}ze(e){let t=this.Je(e)!==null;return t||O("WatchChangeAggregator","Detected inactive target",e),t}Je(e){let t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new is),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}};function bd(){return new re(L.comparator)}function Sd(){return new re(L.comparator)}var wy={asc:"ASCENDING",desc:"DESCENDING"},Ey={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ty={and:"AND",or:"OR"},ac=class{constructor(e,t){this.databaseId=e,this.useProto3Json=t}};function cc(n,e){return n.useProto3Json||Rs(e)?e:{value:e}}function ss(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function cf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Ay(n,e){return ss(n,e.toTimestamp())}function Qe(n){return Q(!!n),U.fromTimestamp(function(t){let r=ut(t);return new fe(r.seconds,r.nanos)}(n))}function mu(n,e){return uc(n,e).canonicalString()}function uc(n,e){let t=function(i){return new ne(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function uf(n){let e=ne.fromString(n);return Q(pf(e)),e}function lc(n,e){return mu(n.databaseId,e.path)}function Aa(n,e){let t=uf(e);if(t.get(1)!==n.databaseId.projectId)throw new x(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new x(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new L(hf(t))}function lf(n,e){return mu(n.databaseId,e)}function by(n){let e=uf(n);return e.length===4?ne.emptyPath():hf(e)}function hc(n){return new ne(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function hf(n){return Q(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Rd(n,e,t){return{name:lc(n,e),fields:t.value.mapValue.fields}}function Sy(n,e){let t;if("targetChange"in e){e.targetChange;let r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:M()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(d,p){return d.useProto3Json?(Q(p===void 0||typeof p=="string"),Ie.fromBase64String(p||"")):(Q(p===void 0||p instanceof Buffer||p instanceof Uint8Array),Ie.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(d){let p=d.code===void 0?R.UNKNOWN:af(d.code);return new x(p,d.message||"")}(a);t=new rs(r,i,o,u||null)}else if("documentChange"in e){e.documentChange;let r=e.documentChange;r.document,r.document.name,r.document.updateTime;let i=Aa(n,r.document.name),o=Qe(r.document.updateTime),a=r.document.createTime?Qe(r.document.createTime):U.min(),u=new Pe({mapValue:{fields:r.document.fields}}),h=Fe.newFoundDocument(i,o,a,u),d=r.targetIds||[],p=r.removedTargetIds||[];t=new gn(d,p,h.key,h)}else if("documentDelete"in e){e.documentDelete;let r=e.documentDelete;r.document;let i=Aa(n,r.document),o=r.readTime?Qe(r.readTime):U.min(),a=Fe.newNoDocument(i,o),u=r.removedTargetIds||[];t=new gn([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;let r=e.documentRemove;r.document;let i=Aa(n,r.document),o=r.removedTargetIds||[];t=new gn([],o,i,null)}else{if(!("filter"in e))return M();{e.filter;let r=e.filter;r.targetId;let{count:i=0,unchangedNames:o}=r,a=new ic(i,o),u=r.targetId;t=new ns(u,a)}}return t}function Ry(n,e){let t;if(e instanceof Qt)t={update:Rd(n,e.key,e.value)};else if(e instanceof Rr)t={delete:lc(n,e.key)};else if(e instanceof Xe)t={update:Rd(n,e.key,e.data),updateMask:Ly(e.fieldMask)};else{if(!(e instanceof ec))return M();t={verify:lc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,a){let u=a.transform;if(u instanceof $t)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Wt)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Ht)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Sn)return{fieldPath:a.field.canonicalString(),increment:u.Pe};throw M()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:Ay(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M()}(n,e.precondition)),t}function Py(n,e){return n&&n.length>0?(Q(e!==void 0),n.map(t=>function(i,o){let a=i.updateTime?Qe(i.updateTime):Qe(o);return a.isEqual(U.min())&&(a=Qe(o)),new Za(a,i.transformResults||[])}(t,e))):[]}function Cy(n,e){return{documents:[lf(n,e.path)]}}function Dy(n,e){let t={structuredQuery:{}},r=e.path,i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=lf(n,i);let o=function(d){if(d.length!==0)return ff(Ye.create(d,"and"))}(e.filters);o&&(t.structuredQuery.where=o);let a=function(d){if(d.length!==0)return d.map(p=>function(A){return{field:fn(A.field),direction:Oy(A.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);let u=cc(n,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:i}}function Ny(n){let e=by(n.parent),t=n.structuredQuery,r=t.from?t.from.length:0,i=null;if(r>0){Q(r===1);let p=t.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let o=[];t.where&&(o=function(v){let A=df(v);return A instanceof Ye&&Gd(A)?A.getFilters():[A]}(t.where));let a=[];t.orderBy&&(a=function(v){return v.map(A=>function(N){return new Tn(pn(N.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(A))}(t.orderBy));let u=null;t.limit&&(u=function(v){let A;return A=typeof v=="object"?v.value:v,Rs(A)?null:A}(t.limit));let h=null;t.startAt&&(h=function(v){let A=!!v.before,S=v.values||[];return new En(S,A)}(t.startAt));let d=null;return t.endAt&&(d=function(v){let A=!v.before,S=v.values||[];return new En(S,A)}(t.endAt)),ny(e,i,a,o,u,"F",h,d)}function ky(n,e){let t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function df(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":let r=pn(t.unaryFilter.field);return ae.create(r,"==",{doubleValue:NaN});case"IS_NULL":let i=pn(t.unaryFilter.field);return ae.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let o=pn(t.unaryFilter.field);return ae.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let a=pn(t.unaryFilter.field);return ae.create(a,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(n):n.fieldFilter!==void 0?function(t){return ae.create(pn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ye.create(t.compositeFilter.filters.map(r=>df(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M()}}(t.compositeFilter.op))}(n):M()}function Oy(n){return wy[n]}function xy(n){return Ey[n]}function Vy(n){return Ty[n]}function fn(n){return{fieldPath:n.canonicalString()}}function pn(n){return Ce.fromServerFormat(n.fieldPath)}function ff(n){return n instanceof ae?function(t){if(t.op==="=="){if(fd(t.value))return{unaryFilter:{field:fn(t.field),op:"IS_NAN"}};if(dd(t.value))return{unaryFilter:{field:fn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(fd(t.value))return{unaryFilter:{field:fn(t.field),op:"IS_NOT_NAN"}};if(dd(t.value))return{unaryFilter:{field:fn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fn(t.field),op:xy(t.op),value:t.value}}}(n):n instanceof Ye?function(t){let r=t.getFilters().map(i=>ff(i));return r.length===1?r[0]:{compositeFilter:{op:Vy(t.op),filters:r}}}(n):M()}function Ly(n){let e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function pf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}var Cr=class n{constructor(e,t,r,i,o=U.min(),a=U.min(),u=Ie.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(e){return new n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}};var dc=class{constructor(e){this.ct=e}};function My(n){let e=Ny({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ya(e,e.limit,"L"):e}var os=class{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(ee(e.integerValue));else if("doubleValue"in e){let r=ee(e.doubleValue);isNaN(r)?this.dt(t,13):(this.dt(t,15),Ar(r)?t.At(0):t.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(t,20),typeof r=="string"&&(r=ut(r)),t.Rt(`${r.seconds||""}`),t.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(bt(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.dt(t,45),t.At(r.latitude||0),t.At(r.longitude||0)}else"mapValue"in e?qd(e)?this.dt(t,Number.MAX_SAFE_INTEGER):Bd(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):M()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){let r=e.fields||{};this.dt(t,55);for(let i of Object.keys(r))this.Vt(i,t),this.Tt(r[i],t)}wt(e,t){var r,i;let o=e.fields||{};this.dt(t,53);let a="value",u=((i=(r=o[a].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.dt(t,15),t.At(ee(u)),this.Vt(a,t),this.Tt(o[a],t)}bt(e,t){let r=e.values||[];this.dt(t,50);for(let i of r)this.Tt(i,t)}yt(e,t){this.dt(t,37),L.fromName(e).path.forEach(r=>{this.dt(t,60),this.Dt(r,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}};os.vt=new os;var fc=class{constructor(){this.un=new pc}addToCollectionParentIndex(e,t){return this.un.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(Gt.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(Gt.min())}updateCollectionGroup(e,t,r){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}},pc=class{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new ve(ne.comparator),o=!i.has(r);return this.index[t]=i.add(r),o}has(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ve(ne.comparator)).toArray()}};var Iw=new Uint8Array(0);var Ge=class n{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new n(e,n.DEFAULT_COLLECTION_PERCENTILE,n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}};Ge.DEFAULT_COLLECTION_PERCENTILE=10,Ge.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ge.DEFAULT=new Ge(41943040,Ge.DEFAULT_COLLECTION_PERCENTILE,Ge.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ge.DISABLED=new Ge(-1,0,0);var Dr=class n{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new n(0)}static kn(){return new n(-1)}};var mc=class{constructor(){this.changes=new St(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Fe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return r!==void 0?P.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}};var gc=class{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}};var _c=class{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Er(r.mutation,i,ke.empty(),fe.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,j()).next(()=>r))}getLocalViewOfDocuments(e,t,r=j()){let i=Bt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(o=>{let a=yr();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){let r=Bt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,j()))}populateOverlays(e,t,r){let i=[];return r.forEach(o=>{t.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,r,i){let o=lt(),a=wr(),u=function(){return wr()}();return t.forEach((h,d)=>{let p=r.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof Xe)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Er(p.mutation,d,p.mutation.getFieldMask(),fe.now())):a.set(d.key,ke.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>{var v;return u.set(d,new gc(p,(v=a.get(d))!==null&&v!==void 0?v:null))}),u))}recalculateAndSaveOverlays(e,t){let r=wr(),i=new re((a,u)=>a-u),o=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(let u of a)u.keys().forEach(h=>{let d=t.get(h);if(d===null)return;let p=r.get(h)||ke.empty();p=u.applyToLocalView(d,p),r.set(h,p);let v=(i.get(u.batchId)||j()).add(h);i=i.insert(u.batchId,v)})}).next(()=>{let a=[],u=i.getReverseIterator();for(;u.hasNext();){let h=u.getNext(),d=h.key,p=h.value,v=Xd();p.forEach(A=>{if(!o.has(A)){let S=sf(t.get(A),r.get(A));S!==null&&v.set(A,S),o=o.add(A)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,v))}return P.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return L.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ry(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(o=>{let a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-o.size):P.resolve(Bt()),u=-1,h=o;return a.next(d=>P.forEach(d,(p,v)=>(u<v.largestBatchId&&(u=v.largestBatchId),o.get(p)?P.resolve():this.remoteDocumentCache.getEntry(e,p).next(A=>{h=h.insert(p,A)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,h,d,j())).next(p=>({batchId:u,changes:Yd(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new L(t)).next(r=>{let i=yr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){let o=t.collectionGroup,a=yr();return this.indexManager.getCollectionParents(e,o).next(u=>P.forEach(u,h=>{let d=function(v,A){return new An(A,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(p=>{p.forEach((v,A)=>{a=a.insert(v,A)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,i))).next(a=>{o.forEach((h,d)=>{let p=d.getKey();a.get(p)===null&&(a=a.insert(p,Fe.newInvalidDocument(p)))});let u=yr();return a.forEach((h,d)=>{let p=o.get(h);p!==void 0&&Er(p.mutation,d,ke.empty(),fe.now()),Ds(t,d)&&(u=u.insert(h,d))}),u})}};var yc=class{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return P.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Qe(i.createTime)}}(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:My(i.bundledQuery),readTime:Qe(i.readTime)}}(t)),P.resolve()}};var vc=class{constructor(){this.overlays=new re(L.comparator),this.Ir=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){let r=Bt();return P.forEach(t,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,o)=>{this.ht(e,t,o)}),P.resolve()}removeOverlaysForBatchId(e,t,r){let i=this.Ir.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),P.resolve()}getOverlaysForCollection(e,t,r){let i=Bt(),o=t.length+1,a=new L(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){let h=u.getNext().value,d=h.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return P.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let o=new re((d,p)=>d-p),a=this.overlays.getIterator();for(;a.hasNext();){let d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=o.get(d.largestBatchId);p===null&&(p=Bt(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}let u=Bt(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,p)=>u.set(d,p)),!(u.size()>=i)););return P.resolve(u)}ht(e,t,r){let i=this.overlays.get(r.key);if(i!==null){let a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new rc(t,r));let o=this.Ir.get(t);o===void 0&&(o=j(),this.Ir.set(t,o)),this.Ir.set(t,o.add(r.key))}};var Ic=class{constructor(){this.sessionToken=Ie.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}};var Nr=class{constructor(){this.Tr=new ve(se.Er),this.dr=new ve(se.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){let r=new se(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new se(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){let t=new L(new ne([])),r=new se(t,e),i=new se(t,e+1),o=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){let t=new L(new ne([])),r=new se(t,e),i=new se(t,e+1),o=j();return this.dr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(e){let t=new se(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}},se=class{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return L.comparator(e.key,t.key)||W(e.wr,t.wr)}static Ar(e,t){return W(e.wr,t.wr)||L.comparator(e.key,t.key)}};var wc=class{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new ve(se.Er)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){let o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let a=new tc(o,t,r,i);this.mutationQueue.push(a);for(let u of i)this.br=this.br.add(new se(u.key,o)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return P.resolve(a)}lookupMutationBatch(e,t){return P.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){let r=t+1,i=this.vr(r),o=i<0?0:i;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new se(t,0),i=new se(t,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,i],a=>{let u=this.Dr(a.wr);o.push(u)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ve(W);return t.forEach(i=>{let o=new se(i,0),a=new se(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],u=>{r=r.add(u.wr)})}),P.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,i=r.length+1,o=r;L.isDocumentKey(o)||(o=o.child(""));let a=new se(new L(o),0),u=new ve(W);return this.br.forEachWhile(h=>{let d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(u=u.add(h.wr)),!0)},a),P.resolve(this.Cr(u))}Cr(e){let t=[];return e.forEach(r=>{let i=this.Dr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){Q(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return P.forEach(t.mutations,i=>{let o=new se(i.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){let r=new se(t,0),i=this.br.firstAfterOrEqual(r);return P.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){let t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}};var Ec=class{constructor(e){this.Mr=e,this.docs=function(){return new re(L.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,i=this.docs.get(r),o=i?i.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return P.resolve(r?r.document.mutableCopy():Fe.newInvalidDocument(t))}getEntries(e,t){let r=lt();return t.forEach(i=>{let o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Fe.newInvalidDocument(i))}),P.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let o=lt(),a=t.path,u=new L(a.child("")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){let{key:d,value:{document:p}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||K_(G_(p),r)<=0||(i.has(p.key)||Ds(t,p))&&(o=o.insert(p.key,p.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(e,t,r,i){M()}Or(e,t){return P.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Tc(this)}getSize(e){return P.resolve(this.size)}},Tc=class extends mc{constructor(e){super(),this.cr=e}applyChanges(e){let t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),P.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}};var Ac=class{constructor(e){this.persistence=e,this.Nr=new St(t=>du(t),fu),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Nr,this.targetCount=0,this.kr=Dr.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,i)=>t(i)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),P.resolve()}Kn(e){this.Nr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.kr=new Dr(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.Kn(t),P.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,r){let i=0,o=[];return this.Nr.forEach((a,u)=>{u.sequenceNumber<=t&&r.get(u.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(e,u.targetId)),i++)}),P.waitFor(o).next(()=>i)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){let r=this.Nr.get(t)||null;return P.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),P.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);let i=this.persistence.referenceDelegate,o=[];return i&&t.forEach(a=>{o.push(i.markPotentiallyOrphaned(e,a))}),P.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),P.resolve()}getMatchingKeysForTargetId(e,t){let r=this.Br.yr(t);return P.resolve(r)}containsKey(e,t){return P.resolve(this.Br.containsKey(t))}};var bc=class{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Tr(0),this.Kr=!1,this.Kr=!0,this.$r=new Ic,this.referenceDelegate=e(this),this.Ur=new Ac(this),this.indexManager=new fc,this.remoteDocumentCache=function(i){return new Ec(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new dc(t),this.Gr=new yc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new vc,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new wc(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){O("MemoryPersistence","Starting transaction:",e);let i=new Sc(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(e,t){return P.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}},Sc=class extends Ma{constructor(e){super(),this.currentSequenceNumber=e}},Rc=class n{constructor(e){this.persistence=e,this.Jr=new Nr,this.Yr=null}static Zr(e){return new n(e)}get Xr(){if(this.Yr)return this.Yr;throw M()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),P.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),P.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Xr,r=>{let i=L.fromPath(r);return this.ei(e,i).next(o=>{o||t.removeEntry(i,U.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return P.or([()=>P.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}};var Pc=class n{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=i}static Wi(e,t){let r=j(),i=j();for(let o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new n(e,t.fromCache,r,i)}};var Cc=class{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}};var Dc=class{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return ql()?8:W_(ue())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,i){let o={result:null};return this.Yi(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(e,t,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;let a=new Cc;return this.Xi(e,t,a).next(u=>{if(o.result=u,this.zi)return this.es(e,t,a,u.size)})}).next(()=>o.result)}es(e,t,r,i){return r.documentReadCount<this.ji?(_r()<=q.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",dn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),P.resolve()):(_r()<=q.DEBUG&&O("QueryEngine","Query:",dn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(_r()<=q.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",dn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,We(t))):P.resolve())}Yi(e,t){if(_d(t))return P.resolve(null);let r=We(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Ya(t,null,"F"),r=We(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{let a=j(...o);return this.Ji.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,r).next(h=>{let d=this.ts(t,u);return this.ns(t,d,a,h.readTime)?this.Yi(e,Ya(t,null,"F")):this.rs(e,d,t,h)}))})))}Zi(e,t,r,i){return _d(t)||i.isEqual(U.min())?P.resolve(null):this.Ji.getDocuments(e,r).next(o=>{let a=this.ts(t,o);return this.ns(t,a,r,i)?P.resolve(null):(_r()<=q.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),dn(t)),this.rs(e,a,t,z_(i,-1)).next(u=>u))})}ts(e,t){let r=new ve(Qd(e));return t.forEach((i,o)=>{Ds(e,o)&&(r=r.add(o))}),r}ns(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;let o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(e,t,r){return _r()<=q.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",dn(t)),this.Ji.getDocumentsMatchingQuery(e,t,Gt.min(),r)}rs(e,t,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}};var Nc=class{constructor(e,t,r,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new re(W),this._s=new St(o=>du(o),fu),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new _c(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}};function Fy(n,e,t,r){return new Nc(n,e,t,r)}async function mf(n,e){let t=F(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{let a=[],u=[],h=j();for(let d of i){a.push(d.batchId);for(let p of d.mutations)h=h.add(p.key)}for(let d of o){u.push(d.batchId);for(let p of d.mutations)h=h.add(p.key)}return t.localDocuments.getDocuments(r,h).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:u}))})})}function Uy(n,e){let t=F(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{let i=e.batch.keys(),o=t.cs.newChangeBuffer({trackRemovals:!0});return function(u,h,d,p){let v=d.batch,A=v.keys(),S=P.resolve();return A.forEach(N=>{S=S.next(()=>p.getEntry(h,N)).next(k=>{let D=d.docVersions.get(N);Q(D!==null),k.version.compareTo(D)<0&&(v.applyToRemoteDocument(k,d),k.isValidDocument()&&(k.setReadTime(d.commitVersion),p.addEntry(k)))})}),S.next(()=>u.mutationQueue.removeMutationBatch(h,v))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=j();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(h=h.add(u.batch.mutations[d].key));return h}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function gf(n){let e=F(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function By(n,e){let t=F(n),r=e.snapshotVersion,i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{let a=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;let u=[];e.targetChanges.forEach((p,v)=>{let A=i.get(v);if(!A)return;u.push(t.Ur.removeMatchingKeys(o,p.removedDocuments,v).next(()=>t.Ur.addMatchingKeys(o,p.addedDocuments,v)));let S=A.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(v)!==null?S=S.withResumeToken(Ie.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):p.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(p.resumeToken,r)),i=i.insert(v,S),function(k,D,B){return k.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(A,S,p)&&u.push(t.Ur.updateTargetData(o,S))});let h=lt(),d=j();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(o,p))}),u.push(qy(o,a,e.documentUpdates).next(p=>{h=p.Ps,d=p.Is})),!r.isEqual(U.min())){let p=t.Ur.getLastRemoteSnapshotVersion(o).next(v=>t.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));u.push(p)}return P.waitFor(u).next(()=>a.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(t.os=i,o))}function qy(n,e,t){let r=j(),i=j();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let a=lt();return t.forEach((u,h)=>{let d=o.get(u);h.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(u)),h.isNoDocument()&&h.version.isEqual(U.min())?(e.removeEntry(u,h.readTime),a=a.insert(u,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(h),a=a.insert(u,h)):O("LocalStore","Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",h.version)}),{Ps:a,Is:i}})}function jy(n,e){let t=F(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function zy(n,e){let t=F(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ur.getTargetData(r,e).next(o=>o?(i=o,P.resolve(i)):t.Ur.allocateTargetId(r).next(a=>(i=new Cr(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{let i=t.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function kc(n,e,t){let r=F(n),i=r.os.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Mr(a))throw a;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Pd(n,e,t){let r=F(n),i=U.min(),o=j();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,p){let v=F(h),A=v._s.get(p);return A!==void 0?P.resolve(v.os.get(A)):v.Ur.getTargetData(d,p)}(r,a,We(e)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,u.targetId).next(h=>{o=h})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?i:U.min(),t?o:j())).next(u=>(Gy(r,sy(e),u),{documents:u,Ts:o})))}function Gy(n,e,t){let r=n.us.get(e)||U.min();t.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.us.set(e,r)}var as=class{constructor(){this.activeTargetIds=hy()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}};var Oc=class{constructor(){this.so=new as,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new as,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}};var xc=class{_o(e){}shutdown(){}};var cs=class{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(let e of this.ho)e(0)}lo(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(let e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}};var Ki=null;function ba(){return Ki===null?Ki=function(){return 268435456+Math.round(2147483648*Math.random())}():Ki++,"0x"+Ki.toString(16)}var Ky={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};var Vc=class{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}};var ye="WebChannelConnection",Lc=class extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;let r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(t,r,i,o,a){let u=ba(),h=this.xo(t,r.toUriEncodedString());O("RestConnection",`Sending RPC '${t}' ${u}:`,h,i);let d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,a),this.No(t,h,d,i).then(p=>(O("RestConnection",`Received RPC '${t}' ${u}: `,p),p),p=>{throw yn("RestConnection",`RPC '${t}' ${u} failed with error: `,p,"url: ",h,"request:",i),p})}Lo(t,r,i,o,a,u){return this.Mo(t,r,i,o,a)}Oo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+On}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>t[a]=o),i&&i.headers.forEach((o,a)=>t[a]=o)}xo(t,r){let i=Ky[t];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,i){let o=ba();return new Promise((a,u)=>{let h=new va;h.setWithCredentials(!0),h.listenOnce(Ia.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case gr.NO_ERROR:let p=h.getResponseJson();O(ye,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),a(p);break;case gr.TIMEOUT:O(ye,`RPC '${e}' ${o} timed out`),u(new x(R.DEADLINE_EXCEEDED,"Request time out"));break;case gr.HTTP_ERROR:let v=h.getStatus();if(O(ye,`RPC '${e}' ${o} failed with status:`,v,"response text:",h.getResponseText()),v>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);let S=A?.error;if(S&&S.status&&S.message){let N=function(D){let B=D.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(B)>=0?B:R.UNKNOWN}(S.status);u(new x(N,S.message))}else u(new x(R.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new x(R.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{O(ye,`RPC '${e}' ${o} completed.`)}});let d=JSON.stringify(i);O(ye,`RPC '${e}' ${o} sending request:`,i),h.send(t,"POST",d,r,15)})}Bo(e,t,r){let i=ba(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Ta(),u=Ea(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Oo(h.initMessageHeaders,t,r),h.encodeInitMessageHeaders=!0;let p=o.join("");O(ye,`Creating RPC '${e}' stream ${i}: ${p}`,h);let v=a.createWebChannel(p,h),A=!1,S=!1,N=new Vc({Io:D=>{S?O(ye,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(A||(O(ye,`Opening RPC '${e}' stream ${i} transport.`),v.open(),A=!0),O(ye,`RPC '${e}' stream ${i} sending:`,D),v.send(D))},To:()=>v.close()}),k=(D,B,z)=>{D.listen(B,G=>{try{z(G)}catch(X){setTimeout(()=>{throw X},0)}})};return k(v,hn.EventType.OPEN,()=>{S||(O(ye,`RPC '${e}' stream ${i} transport opened.`),N.yo())}),k(v,hn.EventType.CLOSE,()=>{S||(S=!0,O(ye,`RPC '${e}' stream ${i} transport closed`),N.So())}),k(v,hn.EventType.ERROR,D=>{S||(S=!0,yn(ye,`RPC '${e}' stream ${i} transport errored:`,D),N.So(new x(R.UNAVAILABLE,"The operation could not be completed")))}),k(v,hn.EventType.MESSAGE,D=>{var B;if(!S){let z=D.data[0];Q(!!z);let G=z,X=G.error||((B=G[0])===null||B===void 0?void 0:B.error);if(X){O(ye,`RPC '${e}' stream ${i} received error:`,X);let we=X.status,H=function(_){let y=ie[_];if(y!==void 0)return af(y)}(we),I=X.message;H===void 0&&(H=R.INTERNAL,I="Unknown error status: "+we+" with message "+X.message),S=!0,N.So(new x(H,I)),v.close()}else O(ye,`RPC '${e}' stream ${i} received:`,z),N.bo(z)}}),k(u,wa.STAT_EVENT,D=>{D.stat===zi.PROXY?O(ye,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===zi.NOPROXY&&O(ye,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.wo()},0),N}};function Sa(){return typeof document<"u"?document:null}function Ns(n){return new ac(n,!0)}var us=class{constructor(e,t,r=1e3,i=1.5,o=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();let t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-r);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}};var ls=class{constructor(e,t,r,i,o,a,u,h){this.ui=e,this.Ho=r,this.Jo=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new us(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===R.RESOURCE_EXHAUSTED?(ct(t.toString()),ct("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;let e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===t&&this.P_(r,i)},r=>{e(()=>{let i=new x(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,t){let r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}},Mc=class extends ls{constructor(e,t,r,i,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();let t=Sy(this.serializer,e),r=function(o){if(!("targetChange"in o))return U.min();let a=o.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?Qe(a.readTime):U.min()}(e);return this.listener.d_(t,r)}A_(e){let t={};t.database=hc(this.serializer),t.addTarget=function(o,a){let u,h=a.target;if(u=Ja(h)?{documents:Cy(o,h)}:{query:Dy(o,h)._t},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=cf(o,a.resumeToken);let d=cc(o,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(U.min())>0){u.readTime=ss(o,a.snapshotVersion.toTimestamp());let d=cc(o,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,e);let r=ky(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){let t={};t.database=hc(this.serializer),t.removeTarget=e,this.a_(t)}},Fc=class extends ls{constructor(e,t,r,i,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return Q(!!e.streamToken),this.lastStreamToken=e.streamToken,Q(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Q(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();let t=Py(e.writeResults,e.commitTime),r=Qe(e.commitTime);return this.listener.g_(r,t)}p_(){let e={};e.database=hc(this.serializer),this.a_(e)}m_(e){let t={streamToken:this.lastStreamToken,writes:e.map(r=>Ry(this.serializer,r))};this.a_(t)}};var Uc=class extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new x(R.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(e,uc(t,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new x(R.UNKNOWN,o.toString())})}Lo(e,t,r,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Lo(e,uc(t,r),i,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new x(R.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}},Bc=class{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(ct(t),this.D_=!1):O("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}};var qc=class{constructor(e,t,r,i,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{r.enqueueAndForget(async()=>{Yt(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(h){let d=F(h);d.L_.add(4),await Fr(d),d.q_.set("Unknown"),d.L_.delete(4),await ks(d)}(this))})}),this.q_=new Bc(r,i)}};async function ks(n){if(Yt(n))for(let e of n.B_)await e(!0)}async function Fr(n){for(let e of n.B_)await e(!1)}function _f(n,e){let t=F(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),vu(t)?yu(t):xn(t).r_()&&_u(t,e))}function gu(n,e){let t=F(n),r=xn(t);t.N_.delete(e),r.r_()&&yf(t,e),t.N_.size===0&&(r.r_()?r.o_():Yt(t)&&t.q_.set("Unknown"))}function _u(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(U.min())>0){let t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}xn(n).A_(e)}function yf(n,e){n.Q_.xe(e),xn(n).R_(e)}function yu(n){n.Q_=new oc({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),xn(n).start(),n.q_.v_()}function vu(n){return Yt(n)&&!xn(n).n_()&&n.N_.size>0}function Yt(n){return F(n).L_.size===0}function vf(n){n.Q_=void 0}async function $y(n){n.q_.set("Online")}async function Wy(n){n.N_.forEach((e,t)=>{_u(n,e)})}async function Hy(n,e){vf(n),vu(n)?(n.q_.M_(e),yu(n)):n.q_.set("Unknown")}async function Qy(n,e,t){if(n.q_.set("Online"),e instanceof rs&&e.state===2&&e.cause)try{await async function(i,o){let a=o.cause;for(let u of o.targetIds)i.N_.has(u)&&(await i.remoteSyncer.rejectListen(u,a),i.N_.delete(u),i.Q_.removeTarget(u))}(n,e)}catch(r){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await hs(n,r)}else if(e instanceof gn?n.Q_.Ke(e):e instanceof ns?n.Q_.He(e):n.Q_.We(e),!t.isEqual(U.min()))try{let r=await gf(n.localStore);t.compareTo(r)>=0&&await function(o,a){let u=o.Q_.rt(a);return u.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){let p=o.N_.get(d);p&&o.N_.set(d,p.withResumeToken(h.resumeToken,a))}}),u.targetMismatches.forEach((h,d)=>{let p=o.N_.get(h);if(!p)return;o.N_.set(h,p.withResumeToken(Ie.EMPTY_BYTE_STRING,p.snapshotVersion)),yf(o,h);let v=new Cr(p.target,h,d,p.sequenceNumber);_u(o,v)}),o.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){O("RemoteStore","Failed to raise snapshot:",r),await hs(n,r)}}async function hs(n,e,t){if(!Mr(e))throw e;n.L_.add(1),await Fr(n),n.q_.set("Offline"),t||(t=()=>gf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await ks(n)})}function If(n,e){return e().catch(t=>hs(n,t,e))}async function Os(n){let e=F(n),t=Rt(e),r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Jy(e);)try{let i=await jy(e.localStore,r);if(i===null){e.O_.length===0&&t.o_();break}r=i.batchId,Yy(e,i)}catch(i){await hs(e,i)}wf(e)&&Ef(e)}function Jy(n){return Yt(n)&&n.O_.length<10}function Yy(n,e){n.O_.push(e);let t=Rt(n);t.r_()&&t.V_&&t.m_(e.mutations)}function wf(n){return Yt(n)&&!Rt(n).n_()&&n.O_.length>0}function Ef(n){Rt(n).start()}async function Xy(n){Rt(n).p_()}async function Zy(n){let e=Rt(n);for(let t of n.O_)e.m_(t.mutations)}async function ev(n,e,t){let r=n.O_.shift(),i=nc.from(r,e,t);await If(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Os(n)}async function tv(n,e){e&&Rt(n).V_&&await async function(r,i){if(function(a){return yy(a)&&a!==R.ABORTED}(i.code)){let o=r.O_.shift();Rt(r).s_(),await If(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Os(r)}}(n,e),wf(n)&&Ef(n)}async function Cd(n,e){let t=F(n);t.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");let r=Yt(t);t.L_.add(3),await Fr(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await ks(t)}async function nv(n,e){let t=F(n);e?(t.L_.delete(2),await ks(t)):e||(t.L_.add(2),await Fr(t),t.q_.set("Unknown"))}function xn(n){return n.K_||(n.K_=function(t,r,i){let o=F(t);return o.w_(),new Mc(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Eo:$y.bind(null,n),Ro:Wy.bind(null,n),mo:Hy.bind(null,n),d_:Qy.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),vu(n)?yu(n):n.q_.set("Unknown")):(await n.K_.stop(),vf(n))})),n.K_}function Rt(n){return n.U_||(n.U_=function(t,r,i){let o=F(t);return o.w_(),new Fc(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Xy.bind(null,n),mo:tv.bind(null,n),f_:Zy.bind(null,n),g_:ev.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Os(n)):(await n.U_.stop(),n.O_.length>0&&(O("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}var jc=class n{constructor(e,t,r,i,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Ke,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,o){let a=Date.now()+r,u=new n(e,t,a,i,o);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function Iu(n,e){if(ct("AsyncQueue",`${e}: ${n}`),Mr(n))return new x(R.UNAVAILABLE,`${e}: ${n}`);throw n}var ds=class n{constructor(e){this.comparator=e?(t,r)=>e(t,r)||L.comparator(t.key,r.key):(t,r)=>L.comparator(t.key,r.key),this.keyedMap=yr(),this.sortedSet=new re(this.comparator)}static emptySet(e){return new n(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let i=t.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){let r=new n;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}};var fs=class{constructor(){this.W_=new re(L.comparator)}track(e){let t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):M():this.W_=this.W_.insert(t,e)}G_(){let e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}},Pn=class n{constructor(e,t,r,i,o,a,u,h,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,o){let a=[];return t.forEach(u=>{a.push({type:0,doc:u})}),new n(e,t,ds.emptySet(t),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Cs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}};var zc=class{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}},Gc=class{constructor(){this.queries=Dd(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){let i=F(t),o=i.queries;i.queries=Dd(),o.forEach((a,u)=>{for(let h of u.j_)h.onError(r)})})(this,new x(R.ABORTED,"Firestore shutting down"))}};function Dd(){return new St(n=>Hd(n),Cs)}async function Tf(n,e){let t=F(n),r=3,i=e.query,o=t.queries.get(i);o?!o.H_()&&e.J_()&&(r=2):(o=new zc,r=e.J_()?0:1);try{switch(r){case 0:o.z_=await t.onListen(i,!0);break;case 1:o.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){let u=Iu(a,`Initialization of query '${dn(e.query)}' failed`);return void e.onError(u)}t.queries.set(i,o),o.j_.push(e),e.Z_(t.onlineState),o.z_&&e.X_(o.z_)&&wu(t)}async function Af(n,e){let t=F(n),r=e.query,i=3,o=t.queries.get(r);if(o){let a=o.j_.indexOf(e);a>=0&&(o.j_.splice(a,1),o.j_.length===0?i=e.J_()?0:1:!o.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function rv(n,e){let t=F(n),r=!1;for(let i of e){let o=i.query,a=t.queries.get(o);if(a){for(let u of a.j_)u.X_(i)&&(r=!0);a.z_=i}}r&&wu(t)}function iv(n,e,t){let r=F(n),i=r.queries.get(e);if(i)for(let o of i.j_)o.onError(t);r.queries.delete(e)}function wu(n){n.Y_.forEach(e=>{e.next()})}var Kc,Nd;(Nd=Kc||(Kc={})).ea="default",Nd.Cache="cache";var ps=class{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){let r=[];for(let i of e.docChanges)i.type!==3&&r.push(i);e=new Pn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;let r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;let t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Pn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Kc.Cache}};var ms=class{constructor(e){this.key=e}},gs=class{constructor(e){this.key=e}},$c=class{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=j(),this.mutatedKeys=j(),this.Aa=Qd(e),this.Ra=new ds(this.Aa)}get Va(){return this.Ta}ma(e,t){let r=t?t.fa:new fs,i=t?t.Ra:this.Ra,o=t?t.mutatedKeys:this.mutatedKeys,a=i,u=!1,h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,v)=>{let A=i.get(p),S=Ds(this.query,v)?v:null,N=!!A&&this.mutatedKeys.has(A.key),k=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations),D=!1;A&&S?A.data.isEqual(S.data)?N!==k&&(r.track({type:3,doc:S}),D=!0):this.ga(A,S)||(r.track({type:2,doc:S}),D=!0,(h&&this.Aa(S,h)>0||d&&this.Aa(S,d)<0)&&(u=!0)):!A&&S?(r.track({type:0,doc:S}),D=!0):A&&!S&&(r.track({type:1,doc:A}),D=!0,(h||d)&&(u=!0)),D&&(S?(a=a.add(S),o=k?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){let p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{Ra:a,fa:r,ns:u,mutatedKeys:o}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){let o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;let a=e.fa.G_();a.sort((p,v)=>function(S,N){let k=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return k(S)-k(N)}(p.type,v.type)||this.Aa(p.doc,v.doc)),this.pa(r),i=i!=null&&i;let u=t&&!i?this.ya():[],h=this.da.size===0&&this.current&&!i?1:0,d=h!==this.Ea;return this.Ea=h,a.length!==0||d?{snapshot:new Pn(this.query,e.Ra,o,a,e.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:u}:{wa:u}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new fs,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];let e=this.da;this.da=j(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});let t=[];return e.forEach(r=>{this.da.has(r)||t.push(new gs(r))}),this.da.forEach(r=>{e.has(r)||t.push(new ms(r))}),t}ba(e){this.Ta=e.Ts,this.da=j();let t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Pn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}},Wc=class{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}},Hc=class{constructor(e){this.key=e,this.va=!1}},Qc=class{constructor(e,t,r,i,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new St(u=>Hd(u),Cs),this.Ma=new Map,this.xa=new Set,this.Oa=new re(L.comparator),this.Na=new Map,this.La=new Nr,this.Ba={},this.ka=new Map,this.qa=Dr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}};async function sv(n,e,t=!0){let r=Df(n),i,o=r.Fa.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await bf(r,e,t,!0),i}async function ov(n,e){let t=Df(n);await bf(t,e,!0,!1)}async function bf(n,e,t,r){let i=await zy(n.localStore,We(e)),o=i.targetId,a=n.sharedClientState.addLocalQueryTarget(o,t),u;return r&&(u=await av(n,e,o,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&_f(n.remoteStore,i),u}async function av(n,e,t,r,i){n.Ka=(v,A,S)=>async function(k,D,B,z){let G=D.view.ma(B);G.ns&&(G=await Pd(k.localStore,D.query,!1).then(({documents:I})=>D.view.ma(I,G)));let X=z&&z.targetChanges.get(D.targetId),we=z&&z.targetMismatches.get(D.targetId)!=null,H=D.view.applyChanges(G,k.isPrimaryClient,X,we);return Od(k,D.targetId,H.wa),H.snapshot}(n,v,A,S);let o=await Pd(n.localStore,e,!0),a=new $c(e,o.Ts),u=a.ma(o.documents),h=Pr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(u,n.isPrimaryClient,h);Od(n,t,d.wa);let p=new Wc(e,t,a);return n.Fa.set(e,p),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),d.snapshot}async function cv(n,e,t){let r=F(n),i=r.Fa.get(e),o=r.Ma.get(i.targetId);if(o.length>1)return r.Ma.set(i.targetId,o.filter(a=>!Cs(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await kc(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&gu(r.remoteStore,i.targetId),Jc(r,i.targetId)}).catch(Lr)):(Jc(r,i.targetId),await kc(r.localStore,i.targetId,!0))}async function uv(n,e){let t=F(n),r=t.Fa.get(e),i=t.Ma.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),gu(t.remoteStore,r.targetId))}async function lv(n,e,t){let r=_v(n);try{let i=await function(a,u){let h=F(a),d=fe.now(),p=u.reduce((S,N)=>S.add(N.key),j()),v,A;return h.persistence.runTransaction("Locally write mutations","readwrite",S=>{let N=lt(),k=j();return h.cs.getEntries(S,p).next(D=>{N=D,N.forEach((B,z)=>{z.isValidDocument()||(k=k.add(B))})}).next(()=>h.localDocuments.getOverlayedDocuments(S,N)).next(D=>{v=D;let B=[];for(let z of u){let G=_y(z,v.get(z.key).overlayedDocument);G!=null&&B.push(new Xe(z.key,G,jd(G.value.mapValue),He.exists(!0)))}return h.mutationQueue.addMutationBatch(S,d,B,u)}).next(D=>{A=D;let B=D.applyToLocalDocumentSet(v,k);return h.documentOverlayCache.saveOverlays(S,D.batchId,B)})}).then(()=>({batchId:A.batchId,changes:Yd(v)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,u,h){let d=a.Ba[a.currentUser.toKey()];d||(d=new re(W)),d=d.insert(u,h),a.Ba[a.currentUser.toKey()]=d}(r,i.batchId,t),await Ur(r,i.changes),await Os(r.remoteStore)}catch(i){let o=Iu(i,"Failed to persist write");t.reject(o)}}async function Sf(n,e){let t=F(n);try{let r=await By(t.localStore,e);e.targetChanges.forEach((i,o)=>{let a=t.Na.get(o);a&&(Q(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?Q(a.va):i.removedDocuments.size>0&&(Q(a.va),a.va=!1))}),await Ur(t,r,e)}catch(r){await Lr(r)}}function kd(n,e,t){let r=F(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){let i=[];r.Fa.forEach((o,a)=>{let u=a.view.Z_(e);u.snapshot&&i.push(u.snapshot)}),function(a,u){let h=F(a);h.onlineState=u;let d=!1;h.queries.forEach((p,v)=>{for(let A of v.j_)A.Z_(u)&&(d=!0)}),d&&wu(h)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function hv(n,e,t){let r=F(n);r.sharedClientState.updateQueryState(e,"rejected",t);let i=r.Na.get(e),o=i&&i.key;if(o){let a=new re(L.comparator);a=a.insert(o,Fe.newNoDocument(o,U.min()));let u=j().add(o),h=new ts(U.min(),new Map,new re(W),a,u);await Sf(r,h),r.Oa=r.Oa.remove(o),r.Na.delete(e),Eu(r)}else await kc(r.localStore,e,!1).then(()=>Jc(r,e,t)).catch(Lr)}async function dv(n,e){let t=F(n),r=e.batch.batchId;try{let i=await Uy(t.localStore,e);Pf(t,r,null),Rf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ur(t,i)}catch(i){await Lr(i)}}async function fv(n,e,t){let r=F(n);try{let i=await function(a,u){let h=F(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return h.mutationQueue.lookupMutationBatch(d,u).next(v=>(Q(v!==null),p=v.keys(),h.mutationQueue.removeMutationBatch(d,v))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,p,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>h.localDocuments.getDocuments(d,p))})}(r.localStore,e);Pf(r,e,t),Rf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ur(r,i)}catch(i){await Lr(i)}}function Rf(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Pf(n,e,t){let r=F(n),i=r.Ba[r.currentUser.toKey()];if(i){let o=i.get(e);o&&(t?o.reject(t):o.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Jc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(let r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||Cf(n,r)})}function Cf(n,e){n.xa.delete(e.path.canonicalString());let t=n.Oa.get(e);t!==null&&(gu(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Eu(n))}function Od(n,e,t){for(let r of t)r instanceof ms?(n.La.addReference(r.key,e),pv(n,r)):r instanceof gs?(O("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Cf(n,r.key)):M()}function pv(n,e){let t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(O("SyncEngine","New document in limbo: "+t),n.xa.add(r),Eu(n))}function Eu(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){let e=n.xa.values().next().value;n.xa.delete(e);let t=new L(ne.fromString(e)),r=n.qa.next();n.Na.set(r,new Hc(t)),n.Oa=n.Oa.insert(t,r),_f(n.remoteStore,new Cr(We(Ps(t.path)),r,"TargetPurposeLimboResolution",Tr.oe))}}async function Ur(n,e,t){let r=F(n),i=[],o=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((u,h)=>{a.push(r.Ka(h,e,t).then(d=>{var p;if((d||t)&&r.isPrimaryClient){let v=d?!d.fromCache:(p=t?.targetChanges.get(h.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(h.targetId,v?"current":"not-current")}if(d){i.push(d);let v=Pc.Wi(h.targetId,d);o.push(v)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(h,d){let p=F(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>P.forEach(d,A=>P.forEach(A.$i,S=>p.persistence.referenceDelegate.addReference(v,A.targetId,S)).next(()=>P.forEach(A.Ui,S=>p.persistence.referenceDelegate.removeReference(v,A.targetId,S)))))}catch(v){if(!Mr(v))throw v;O("LocalStore","Failed to update sequence numbers: "+v)}for(let v of d){let A=v.targetId;if(!v.fromCache){let S=p.os.get(A),N=S.snapshotVersion,k=S.withLastLimboFreeSnapshotVersion(N);p.os=p.os.insert(A,k)}}}(r.localStore,o))}async function mv(n,e){let t=F(n);if(!t.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());let r=await mf(t.localStore,e);t.currentUser=e,function(o,a){o.ka.forEach(u=>{u.forEach(h=>{h.reject(new x(R.CANCELLED,a))})}),o.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ur(t,r.hs)}}function gv(n,e){let t=F(n),r=t.Na.get(e);if(r&&r.va)return j().add(r.key);{let i=j(),o=t.Ma.get(e);if(!o)return i;for(let a of o){let u=t.Fa.get(a);i=i.unionWith(u.view.Va)}return i}}function Df(n){let e=F(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Sf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hv.bind(null,e),e.Ca.d_=rv.bind(null,e.eventManager),e.Ca.$a=iv.bind(null,e.eventManager),e}function _v(n){let e=F(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fv.bind(null,e),e}var Cn=class{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ns(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return Fy(this.persistence,new Dc,e.initialUser,this.serializer)}Ga(e){return new bc(Rc.Zr,this.serializer)}Wa(e){return new Oc}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}};Cn.provider={build:()=>new Cn};var kr=class{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>kd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=mv.bind(null,this.syncEngine),await nv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Gc}()}createDatastore(e){let t=Ns(e.databaseInfo.databaseId),r=function(o){return new Lc(o)}(e.databaseInfo);return function(o,a,u,h){return new Uc(o,a,u,h)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,o,a,u){return new qc(r,i,o,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>kd(this.syncEngine,t,0),function(){return cs.D()?new cs:new xc}())}createSyncEngine(e,t){return function(i,o,a,u,h,d,p){let v=new Qc(i,o,a,u,h,d);return p&&(v.Qa=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){let o=F(i);O("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Fr(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}};kr.provider={build:()=>new kr};var _s=class{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):ct("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}};var Yc=class{constructor(e,t,r,i,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=le.UNAUTHENTICATED,this.clientId=Qi.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{O("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(O("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new Ke;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){let r=Iu(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}};async function Ra(n,e){n.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");let t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await mf(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function xd(n,e){n.asyncQueue.verifyOperationInProgress();let t=await yv(n);O("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Cd(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Cd(e.remoteStore,i)),n._onlineComponents=e}async function yv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ra(n,n._uninitializedComponentsProvider._offline)}catch(e){let t=e;if(!function(i){return i.name==="FirebaseError"?i.code===R.FAILED_PRECONDITION||i.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;yn("Error using user provided cache. Falling back to memory cache: "+t),await Ra(n,new Cn)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await Ra(n,new Cn);return n._offlineComponents}async function Nf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await xd(n,n._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await xd(n,new kr))),n._onlineComponents}function vv(n){return Nf(n).then(e=>e.syncEngine)}async function Xc(n){let e=await Nf(n),t=e.eventManager;return t.onListen=sv.bind(null,e.syncEngine),t.onUnlisten=cv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=ov.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=uv.bind(null,e.syncEngine),t}function Iv(n,e,t={}){let r=new Ke;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){let p=new _s({next:A=>{p.Za(),a.enqueueAndForget(()=>Af(o,v));let S=A.docs.has(u);!S&&A.fromCache?d.reject(new x(R.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&A.fromCache&&h&&h.source==="server"?d.reject(new x(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(A)},error:A=>d.reject(A)}),v=new ps(Ps(u.path),p,{includeMetadataChanges:!0,_a:!0});return Tf(o,v)}(await Xc(n),n.asyncQueue,e,t,r)),r.promise}function kf(n){let e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}var Vd=new Map;function Of(n,e,t){if(!t)throw new x(R.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function wv(n,e,t,r){if(e===!0&&r===!0)throw new x(R.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ld(n){if(!L.isDocumentKey(n))throw new x(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Md(n){if(L.isDocumentKey(n))throw new x(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Tu(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{let e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":M()}function at(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new x(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let t=Tu(n);throw new x(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}var ys=class{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new x(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}wv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=kf((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new x(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new x(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new x(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}},Dn=class{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ys({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new x(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ys(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ca;switch(r.type){case"firstParty":return new Oa(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){let r=Vd.get(t);r&&(O("ComponentProvider","Removing Datastore"),Vd.delete(t),r.terminate())}(this),Promise.resolve()}};function Au(n,e,t,r={}){var i;let o=(n=at(n,Dn))._getSettings(),a=`${e}:${t}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&yn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let u,h;if(typeof r.mockUserToken=="string")u=r.mockUserToken,h=le.MOCK_USER;else{u=Vl(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);let d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new x(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new le(d)}n._authCredentials=new Da(new Hi(u,h))}}var vs=class n{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new n(this.firestore,e,this._query)}},Ae=class n{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new At(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new n(this.firestore,e,this._key)}},At=class n extends vs{constructor(e,t,r){super(e,t,Ps(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new Ae(this.firestore,null,new L(e))}withConverter(e){return new n(this.firestore,e,this._path)}};function xf(n,e,...t){if(n=Y(n),Of("collection","path",e),n instanceof Dn){let r=ne.fromString(e,...t);return Md(r),new At(n,null,r)}{if(!(n instanceof Ae||n instanceof At))throw new x(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(ne.fromString(e,...t));return Md(r),new At(n.firestore,null,r)}}function ht(n,e,...t){if(n=Y(n),arguments.length===1&&(e=Qi.newId()),Of("doc","path",e),n instanceof Dn){let r=ne.fromString(e,...t);return Ld(r),new Ae(n,null,new L(r))}{if(!(n instanceof Ae||n instanceof At))throw new x(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(ne.fromString(e,...t));return Ld(r),new Ae(n.firestore,n instanceof At?n.converter:null,new L(r))}}var Is=class{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new us(this,"async_queue_retry"),this.Vu=()=>{let r=Sa();r&&O("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;let t=Sa();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;let t=Sa();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});let t=new Ke;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Mr(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){let t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;let i=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(r);throw ct("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);let i=jc.createAndSchedule(this,e,t,r,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&M()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(let t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(let t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){let t=this.Tu.indexOf(e);this.Tu.splice(t,1)}};function Fd(n){return function(t,r){if(typeof t!="object"||t===null)return!1;let i=t;for(let o of r)if(o in i&&typeof i[o]=="function")return!0;return!1}(n,["next","error","complete"])}var Pt=class extends Dn{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Is,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new Is(e),this._firestoreClient=void 0,await e}}};function Vf(n,e){let t=typeof n=="object"?n:ui(),r=typeof n=="string"?n:e||"(default)",i=nr(t,"firestore").getImmediate({identifier:r});if(!i._initialized){let o=xl("firestore");o&&Au(i,...o)}return i}function xs(n){if(n._terminated)throw new x(R.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Ev(n),n._firestoreClient}function Ev(n){var e,t,r;let i=n._freezeSettings(),o=function(u,h,d,p){return new Fa(u,h,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,kf(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Yc(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(u){let h=u?._online.build();return{_offline:u?._offline.build(h),_online:h}}(n._componentsProvider))}var Or=class n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new n(Ie.fromBase64String(e))}catch(t){throw new x(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new n(Ie.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}};var Nn=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new x(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ce(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};var kn=class{constructor(e){this._methodName=e}};var xr=class{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new x(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new x(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return W(this._lat,e._lat)||W(this._long,e._long)}};var Vr=class{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}};var Tv=/^__.*__$/,Zc=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Xe(e,this.data,this.fieldMask,t,this.fieldTransforms):new Qt(e,this.data,t,this.fieldTransforms)}},ws=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Xe(e,this.data,this.fieldMask,t,this.fieldTransforms)}};function Lf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}var eu=class n{constructor(e,t,r,i,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new n(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ts(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Lf(this.Cu)&&Tv.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}},tu=class{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ns(e)}Qu(e,t,r,i=!1){return new eu({Cu:e,methodName:t,qu:r,path:Ce.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function Mf(n){let e=n._freezeSettings(),t=Ns(n._databaseId);return new tu(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Ff(n,e,t,r,i,o={}){let a=n.Qu(o.merge||o.mergeFields?2:0,e,t,i);bu("Data must be an object, but it was:",a,r);let u=Uf(r,a),h,d;if(o.merge)h=new ke(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){let p=[];for(let v of o.mergeFields){let A=ru(e,v,t);if(!a.contains(A))throw new x(R.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);qf(p,A)||p.push(A)}h=new ke(p),d=a.fieldTransforms.filter(v=>h.covers(v.field))}else h=null,d=a.fieldTransforms;return new Zc(new Pe(u),h,d)}var Es=class n extends kn{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof n}};var nu=class n extends kn{_toFieldTransform(e){return new Xa(e.path,new $t)}isEqual(e){return e instanceof n}};function Av(n,e,t,r){let i=n.Qu(1,e,t);bu("Data must be an object, but it was:",i,r);let o=[],a=Pe.empty();Jt(r,(h,d)=>{let p=Su(e,h,t);d=Y(d);let v=i.Nu(p);if(d instanceof Es)o.push(p);else{let A=Vs(d,v);A!=null&&(o.push(p),a.set(p,A))}});let u=new ke(o);return new ws(a,u,i.fieldTransforms)}function bv(n,e,t,r,i,o){let a=n.Qu(1,e,t),u=[ru(e,r,t)],h=[i];if(o.length%2!=0)throw new x(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<o.length;A+=2)u.push(ru(e,o[A])),h.push(o[A+1]);let d=[],p=Pe.empty();for(let A=u.length-1;A>=0;--A)if(!qf(d,u[A])){let S=u[A],N=h[A];N=Y(N);let k=a.Nu(S);if(N instanceof Es)d.push(S);else{let D=Vs(N,k);D!=null&&(d.push(S),p.set(S,D))}}let v=new ke(d);return new ws(p,v,a.fieldTransforms)}function Vs(n,e){if(Bf(n=Y(n)))return bu("Unsupported field value:",e,n),Uf(n,e);if(n instanceof kn)return function(r,i){if(!Lf(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);let o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){let o=[],a=0;for(let u of r){let h=Vs(u,i.Lu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,e)}return function(r,i){if((r=Y(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return dy(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){let o=fe.fromDate(r);return{timestampValue:ss(i.serializer,o)}}if(r instanceof fe){let o=new fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ss(i.serializer,o)}}if(r instanceof xr)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Or)return{bytesValue:cf(i.serializer,r._byteString)};if(r instanceof Ae){let o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:mu(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Vr)return function(a,u){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw u.Bu("VectorValues must only contain numeric values.");return pu(u.serializer,h)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Tu(r)}`)}(n,e)}function Uf(n,e){let t={};return Ud(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Jt(n,(r,i)=>{let o=Vs(i,e.Mu(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function Bf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof fe||n instanceof xr||n instanceof Or||n instanceof Ae||n instanceof kn||n instanceof Vr)}function bu(n,e,t){if(!Bf(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){let r=Tu(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function ru(n,e,t){if((e=Y(e))instanceof Nn)return e._internalPath;if(typeof e=="string")return Su(n,e);throw Ts("Field path arguments must be of type string or ",n,!1,void 0,t)}var Sv=new RegExp("[~\\*/\\[\\]]");function Su(n,e,t){if(e.search(Sv)>=0)throw Ts(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Nn(...e.split("."))._internalPath}catch{throw Ts(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ts(n,e,t,r,i){let o=r&&!r.isEmpty(),a=i!==void 0,u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${i}`),h+=")"),new x(R.INVALID_ARGUMENT,u+n+h)}function qf(n,e){return n.some(t=>t.isEqual(e))}var As=class{constructor(e,t,r,i,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Ae(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){let e=new iu(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(jf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},iu=class extends As{data(){return super.data()}};function jf(n,e){return typeof e=="string"?Su(n,e):e instanceof Nn?e._internalPath:e._delegate._internalPath}function Rv(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new x(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}var su=class{convertValue(e,t="none"){switch(Kt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ee(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(bt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw M()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return Jt(e,(i,o)=>{r[i]=this.convertValue(o,t)}),r}convertVectorValue(e){var t,r,i;let o=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>ee(a.doubleValue));return new Vr(o)}convertGeoPoint(e){return new xr(ee(e.latitude),ee(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=lu(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(br(e));default:return null}}convertTimestamp(e){let t=ut(e);return new fe(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=ne.fromString(e);Q(pf(r));let i=new Zi(r.get(1),r.get(3)),o=new L(r.popFirst(5));return i.isEqual(t)||ct(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}};function zf(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}var jt=class{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}},bs=class extends As{constructor(e,t,r,i,o,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new _n(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(jf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},_n=class extends bs{data(e={}){return super.data(e)}},ou=class{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new jt(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new _n(this._firestore,this._userDataWriter,r.key,r,new jt(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new x(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(u=>{let h=new _n(i._firestore,i._userDataWriter,u.doc.key,u.doc,new jt(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{let h=new _n(i._firestore,i._userDataWriter,u.doc.key,u.doc,new jt(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter),d=-1,p=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),p=a.indexOf(u.doc.key)),{type:Pv(u.type),doc:h,oldIndex:d,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function Pv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}function Br(n){n=at(n,Ae);let e=at(n.firestore,Pt);return Iv(xs(e),n._key).then(t=>$f(e,n,t))}var Ss=class extends su{constructor(e){super(),this.firestore=e}convertBytes(e){return new Or(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ae(this.firestore,null,t)}};function Ru(n,e,t){n=at(n,Ae);let r=at(n.firestore,Pt),i=zf(n.converter,e,t);return Kf(r,[Ff(Mf(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,He.none())])}function Gf(n,...e){var t,r,i;n=Y(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Fd(e[a])||(o=e[a],a++);let u={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Fd(e[a])){let v=e[a];e[a]=(t=v.next)===null||t===void 0?void 0:t.bind(v),e[a+1]=(r=v.error)===null||r===void 0?void 0:r.bind(v),e[a+2]=(i=v.complete)===null||i===void 0?void 0:i.bind(v)}let h,d,p;if(n instanceof Ae)d=at(n.firestore,Pt),p=Ps(n._key.path),h={next:v=>{e[a]&&e[a]($f(d,n,v))},error:e[a+1],complete:e[a+2]};else{let v=at(n,vs);d=at(v.firestore,Pt),p=v._query;let A=new Ss(d);h={next:S=>{e[a]&&e[a](new ou(d,A,v,S))},error:e[a+1],complete:e[a+2]},Rv(n._query)}return function(A,S,N,k){let D=new _s(k),B=new ps(S,D,N);return A.asyncQueue.enqueueAndForget(async()=>Tf(await Xc(A),B)),()=>{D.Za(),A.asyncQueue.enqueueAndForget(async()=>Af(await Xc(A),B))}}(xs(d),p,u,h)}function Kf(n,e){return function(r,i){let o=new Ke;return r.asyncQueue.enqueueAndForget(async()=>lv(await vv(r),i,o)),o.promise}(xs(n),e)}function $f(n,e,t){let r=t.docs.get(e._key),i=new Ss(n);return new bs(n,i,e._key,r,new jt(t.hasPendingWrites,t.fromCache),e.converter)}var au=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Mf(e)}set(e,t,r){this._verifyNotCommitted();let i=Pa(e,this._firestore),o=zf(i.converter,t,r),a=Ff(this._dataReader,"WriteBatch.set",i._key,o,i.converter!==null,r);return this._mutations.push(a.toMutation(i._key,He.none())),this}update(e,t,r,...i){this._verifyNotCommitted();let o=Pa(e,this._firestore),a;return a=typeof(t=Y(t))=="string"||t instanceof Nn?bv(this._dataReader,"WriteBatch.update",o._key,t,r,i):Av(this._dataReader,"WriteBatch.update",o._key,t),this._mutations.push(a.toMutation(o._key,He.exists(!0))),this}delete(e){this._verifyNotCommitted();let t=Pa(e,this._firestore);return this._mutations=this._mutations.concat(new Rr(t._key,He.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new x(R.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Pa(n,e){if((n=Y(n)).firestore!==e)throw new x(R.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function Pu(){return new nu("serverTimestamp")}function Wf(n){return xs(n=at(n,Pt)),new au(n,e=>Kf(n,e))}(function(e,t=!0){(function(i){On=i})(vt),yt(new De("firestore",(r,{instanceIdentifier:i,options:o})=>{let a=r.getProvider("app").getImmediate(),u=new Pt(new Na(r.getProvider("auth-internal")),new Va(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new x(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zi(d.options.projectId,p)}(a,i),a);return o=Object.assign({useFetchStreams:t},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),Ve(cd,"4.7.3",e),Ve(cd,"4.7.3","esm2017")})();var Cu,ce,Oe,Hf=/^[a-z0-9가-힣_]{2,16}$/;async function Cv(n){let e=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(n));return[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")}async function Ls(n){return"p"+(await Cv("choi-rhythm|"+n.toLowerCase())).slice(0,32)+"@players.choi-rhythm.app"}function Dv(n){let e=n&&n.code||"";return{"auth/invalid-credential":"\uC544\uC774\uB514 \uB610\uB294 \uBE44\uBC00\uBC88\uD638\uAC00 \uB9DE\uC9C0 \uC54A\uC544\uC694","auth/wrong-password":"\uC544\uC774\uB514 \uB610\uB294 \uBE44\uBC00\uBC88\uD638\uAC00 \uB9DE\uC9C0 \uC54A\uC544\uC694","auth/user-not-found":"\uC544\uC774\uB514 \uB610\uB294 \uBE44\uBC00\uBC88\uD638\uAC00 \uB9DE\uC9C0 \uC54A\uC544\uC694","auth/invalid-login-credentials":"\uC544\uC774\uB514 \uB610\uB294 \uBE44\uBC00\uBC88\uD638\uAC00 \uB9DE\uC9C0 \uC54A\uC544\uC694","auth/too-many-requests":"\uC2DC\uB3C4\uAC00 \uB108\uBB34 \uB9CE\uC544\uC694. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uD574\uC8FC\uC138\uC694","auth/weak-password":"\uBE44\uBC00\uBC88\uD638\uB294 6\uC790 \uC774\uC0C1\uC774\uC5D0\uC694","auth/email-already-in-use":"\uC774\uBBF8 \uC788\uB294 \uC544\uC774\uB514\uC608\uC694","auth/network-request-failed":"\uC11C\uBC84\uC5D0 \uC5F0\uACB0\uD560 \uC218 \uC5C6\uC5B4\uC694","auth/popup-closed-by-user":"\uAD6C\uAE00 \uB85C\uADF8\uC778\uC744 \uCDE8\uC18C\uD588\uC5B4\uC694","auth/popup-blocked":"\uD31D\uC5C5\uC774 \uB9C9\uD614\uC5B4\uC694. \uB2E4\uC2DC \uB20C\uB7EC\uC8FC\uC138\uC694","auth/provider-already-linked":"\uC774\uBBF8 \uBE44\uBC00\uBC88\uD638\uAC00 \uC788\uC5B4\uC694","auth/credential-already-in-use":"\uC774\uBBF8 \uC4F0\uC774\uB294 \uC544\uC774\uB514\uC608\uC694","auth/requires-recent-login":"\uB2E4\uC2DC \uB85C\uADF8\uC778\uD55C \uB4A4 \uD574\uC8FC\uC138\uC694","auth/missing-password":"\uC9C0\uAE08 \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694","auth/operation-not-allowed":"\uC774 \uB85C\uADF8\uC778 \uBC29\uC2DD\uC774 \uC11C\uBC84\uC5D0\uC11C \uAEBC\uC838 \uC788\uC5B4\uC694","permission-denied":"\uC11C\uBC84\uAC00 \uC694\uCCAD\uC744 \uAC70\uBD80\uD588\uC5B4\uC694"}[e]||"\uC624\uB958: "+(e||n&&n.message||n)}window.FBK={errMsg:Dv,init(n,e){Cu=No(n),ce=_a(Cu),Oe=Vf(Cu),e&&(Fi(ce,"http://127.0.0.1:9099",{disableWarnings:!0}),Au(Oe,"127.0.0.1",8080)),ga(ce).catch(()=>{})},onAuth(n){return ua(ce,n)},async persist(n){await ca(ce,n?Bi:mr)},async google(n,e){await this.persist(n);let t=new wt;return t.setCustomParameters({prompt:"select_account"}),e?ma(ce,t):pa(ce,t)},async loginPw(n,e,t){return await this.persist(t),oa(ce,await Ls(n),e)},async signupPw(n,e,t){let r=n.toLowerCase();if(!Hf.test(r))throw{code:"bad-id"};if((await Br(ht(Oe,"names",r))).exists())throw{code:"auth/email-already-in-use"};await this.persist(t);let i=await sa(ce,await Ls(n),e);try{await this.claimId(n)}catch(o){try{await ha(i.user)}catch{}throw o}return i},async claimId(n){let e=ce.currentUser;if(!e)throw{code:"no-user"};let t=n.toLowerCase();if(!Hf.test(t))throw{code:"bad-id"};let r=Wf(Oe);r.set(ht(Oe,"names",t),{uid:e.uid,key:t}),r.set(ht(Oe,"accounts",e.uid),{gameId:n,key:t,provider:(e.providerData[0]||{}).providerId||"password",at:Pu()});try{await r.commit()}catch(i){throw i.code==="permission-denied"?{code:"auth/email-already-in-use"}:i}},async getAccount(n){let e=await Br(ht(Oe,"accounts",n));return e.exists()?e.data():null},logout(){return la(ce)},async linkPw(n,e){let t=ce.currentUser;if(!t)throw{code:"no-user"};return ra(t,ze.credential(await Ls(n),e))},async saveProfile(n,e){let t=ce.currentUser;if(!t)throw{code:"no-user"};await Ru(ht(Oe,"profiles",t.uid),{nick:n,photo:e||"",at:Pu()})},async getProfile(n){let e=await Br(ht(Oe,"profiles",n));return e.exists()?e.data():null},async changePw(n,e,t){let r=ce.currentUser;if(!r)throw{code:"no-user"};return await ia(r,ze.credential(await Ls(n),e)),aa(r,t)},providers(){let n=ce.currentUser;return n?n.providerData.map(e=>e.providerId):[]},hasPw(){let n=ce.currentUser;return!!(n&&n.providerData.some(e=>e.providerId==="password"))},async googleTest(n){return Ui(ce,wt.credential(JSON.stringify({sub:"g-"+n,email:n,email_verified:!0,name:n.split("@")[0]})))},user(){return ce&&ce.currentUser},db:{collection(n){return{onSnapshot(e,t){return Gf(xf(Oe,n),r=>e({docs:r.docs.map(i=>({id:i.id,exists:!0,data:()=>i.data()})),metadata:{fromCache:r.metadata.fromCache}}),r=>t&&t(r))}}},doc(n){return{set:e=>Ru(ht(Oe,n),e),get:async()=>{let e=await Br(ht(Oe,n));return{exists:e.exists(),data:()=>e.data()}}}}}};})();
/*! Bundled license information:

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
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
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
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
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
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
   *)

@firebase/component/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
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
   *)

@firebase/logger/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
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
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
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
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
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
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
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
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
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
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
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
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
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
   *)

firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2021 Google LLC
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
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
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2019 Google LLC
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
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2019 Google LLC
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2019 Google LLC
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
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
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
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
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
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
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
   *)

@firebase/webchannel-wrapper/dist/bloom-blob/esm/bloom_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/webchannel-wrapper/dist/webchannel-blob/esm/webchannel_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
  * @license
  * Copyright 2020 Google LLC
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
  *)
  (**
   * @license
   * Copyright 2017 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
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
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2018 Google LLC
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
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
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
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
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
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
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
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
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
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
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
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
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
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2024 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2018 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
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
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
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
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)
  (**
   * @license
   * Copyright 2024 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
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
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
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
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
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
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
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
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
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
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
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
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
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
   *)
  (**
   * @license
   * Copyright 2024 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
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
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
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
   *)
*/
