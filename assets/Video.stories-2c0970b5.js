import{G as w,a as D}from"./global-variants-893e06e6.js";import{j as s,c as z}from"./clsx-36b9529f.js";import{c as le}from"./index-9eff14f9.js";import{r as C}from"./index-8b3efc3f.js";import{b as me}from"./commonCSS-cc68a568.js";import{a as ht,c as K,g as mt}from"./_commonjsHelpers-de833af9.js";import{_ as P}from"./iframe-ff14513a.js";import{p as _t}from"./index-9d475cdf.js";import{C as gt}from"./CookieLayer-ccfe9da1.js";import{H as bt}from"./HeaderLongComponent-8e02c9fc.js";import{L as _e}from"./Layout-639d4783.js";const h=[];for(let e=0;e<256;++e)h.push((e+256).toString(16).slice(1));function vt(e,t=0){return(h[e[t+0]]+h[e[t+1]]+h[e[t+2]]+h[e[t+3]]+"-"+h[e[t+4]]+h[e[t+5]]+"-"+h[e[t+6]]+h[e[t+7]]+"-"+h[e[t+8]]+h[e[t+9]]+"-"+h[e[t+10]]+h[e[t+11]]+h[e[t+12]]+h[e[t+13]]+h[e[t+14]]+h[e[t+15]]).toLowerCase()}let Z;const Pt=new Uint8Array(16);function wt(){if(!Z){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Z=crypto.getRandomValues.bind(crypto)}return Z(Pt)}const Ot=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),ge={randomUUID:Ot};function B(e,t,r){if(ge.randomUUID&&!t&&!e)return ge.randomUUID();e=e||{};const a=e.random||(e.rng||wt)();if(a[6]=a[6]&15|64,a[8]=a[8]&63|128,t){r=r||0;for(let n=0;n<16;++n)t[r+n]=a[n];return t}return vt(a)}var xt=function(t,r,a){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script");typeof r=="function"&&(a=r,r={}),r=r||{},a=a||function(){},o.type=r.type||"text/javascript",o.charset=r.charset||"utf8",o.async="async"in r?!!r.async:!0,o.src=t,r.attrs&&zt(o,r.attrs),r.text&&(o.text=""+r.text);var l="onload"in o?be:Ct;l(o,a),o.onload||be(o,a),n.appendChild(o)};function zt(e,t){for(var r in t)e.setAttribute(r,t[r])}function be(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function Ct(e,t){e.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,t(null,e))}}var Et=function(t){return Tt(t)&&!St(t)};function Tt(e){return!!e&&typeof e=="object"}function St(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||kt(e)}var At=typeof Symbol=="function"&&Symbol.for,Rt=At?Symbol.for("react.element"):60103;function kt(e){return e.$$typeof===Rt}function jt(e){return Array.isArray(e)?[]:{}}function $(e,t){return t.clone!==!1&&t.isMergeableObject(e)?R(jt(e),e,t):e}function It(e,t,r){return e.concat(t).map(function(a){return $(a,r)})}function Mt(e,t){if(!t.customMerge)return R;var r=t.customMerge(e);return typeof r=="function"?r:R}function Lt(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function ve(e){return Object.keys(e).concat(Lt(e))}function je(e,t){try{return t in e}catch{return!1}}function Dt(e,t){return je(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function $t(e,t,r){var a={};return r.isMergeableObject(e)&&ve(e).forEach(function(n){a[n]=$(e[n],r)}),ve(t).forEach(function(n){Dt(e,n)||(je(e,n)&&r.isMergeableObject(t[n])?a[n]=Mt(n,r)(e[n],t[n],r):a[n]=$(t[n],r))}),a}function R(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||It,r.isMergeableObject=r.isMergeableObject||Et,r.cloneUnlessOtherwiseSpecified=$;var a=Array.isArray(t),n=Array.isArray(e),o=a===n;return o?a?r.arrayMerge(e,t,r):$t(e,t,r):$(t,r)}R.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(a,n){return R(a,n,r)},{})};var Nt=R,Ie=Nt,Vt=Object.create,F=Object.defineProperty,Ut=Object.getOwnPropertyDescriptor,Bt=Object.getOwnPropertyNames,Ht=Object.getPrototypeOf,Ft=Object.prototype.hasOwnProperty,qt=(e,t)=>{for(var r in t)F(e,r,{get:t[r],enumerable:!0})},Me=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Bt(t))!Ft.call(e,n)&&n!==r&&F(e,n,{get:()=>t[n],enumerable:!(a=Ut(t,n))||a.enumerable});return e},pe=(e,t,r)=>(r=e!=null?Vt(Ht(e)):{},Me(t||!e||!e.__esModule?F(r,"default",{value:e,enumerable:!0}):r,e)),Xt=e=>Me(F({},"__esModule",{value:!0}),e),Le={};qt(Le,{callPlayer:()=>lr,getConfig:()=>ir,getSDK:()=>or,isBlobUrl:()=>ur,isMediaStream:()=>pr,lazy:()=>Zt,omit:()=>sr,parseEndTime:()=>rr,parseStartTime:()=>tr,queryString:()=>nr,randomString:()=>ar,supportsWebKitPresentationMode:()=>cr});var q=Xt(Le),Wt=pe(C),Yt=pe(xt),Kt=pe(Ie);const Zt=e=>Wt.default.lazy(async()=>{const t=await e();return typeof t.default=="function"?t:t.default}),Gt=/[?&#](?:start|t)=([0-9hms]+)/,Jt=/[?&#]end=([0-9hms]+)/,re=/(\d+)(h|m|s)/g,Qt=/^\d+$/;function De(e,t){if(e instanceof Array)return;const r=e.match(t);if(r){const a=r[1];if(a.match(re))return er(a);if(Qt.test(a))return parseInt(a)}}function er(e){let t=0,r=re.exec(e);for(;r!==null;){const[,a,n]=r;n==="h"&&(t+=parseInt(a,10)*60*60),n==="m"&&(t+=parseInt(a,10)*60),n==="s"&&(t+=parseInt(a,10)),r=re.exec(e)}return t}function tr(e){return De(e,Gt)}function rr(e){return De(e,Jt)}function ar(){return Math.random().toString(36).substr(2,5)}function nr(e){return Object.keys(e).map(t=>`${t}=${e[t]}`).join("&")}function G(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}const T={},or=function(t,r,a=null,n=()=>!0,o=Yt.default){const l=G(r);return l&&n(l)?Promise.resolve(l):new Promise((c,i)=>{if(T[t]){T[t].push({resolve:c,reject:i});return}T[t]=[{resolve:c,reject:i}];const O=m=>{T[t].forEach(E=>E.resolve(m))};if(a){const m=window[a];window[a]=function(){m&&m(),O(G(r))}}o(t,m=>{m?(T[t].forEach(E=>E.reject(m)),T[t]=null):a||O(G(r))})})};function ir(e,t){return(0,Kt.default)(t.config,e.config)}function sr(e,...t){const r=[].concat(...t),a={},n=Object.keys(e);for(const o of n)r.indexOf(o)===-1&&(a[o]=e[o]);return a}function lr(e,...t){if(!this.player||!this.player[e]){let r=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c – `;return this.player?this.player[e]||(r+="The method was not available"):r+="The player was not available",console.warn(r,"font-weight: bold",""),null}return this.player[e](...t)}function pr(e){return typeof window<"u"&&typeof window.MediaStream<"u"&&e instanceof window.MediaStream}function ur(e){return/^blob:/.test(e)}function cr(e=document.createElement("video")){const t=/iPhone|iPod/.test(navigator.userAgent)===!1;return e.webkitSupportsPresentationMode&&typeof e.webkitSetPresentationMode=="function"&&t}var ue=Object.defineProperty,dr=Object.getOwnPropertyDescriptor,yr=Object.getOwnPropertyNames,fr=Object.prototype.hasOwnProperty,hr=(e,t)=>{for(var r in t)ue(e,r,{get:t[r],enumerable:!0})},mr=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of yr(t))!fr.call(e,n)&&n!==r&&ue(e,n,{get:()=>t[n],enumerable:!(a=dr(t,n))||a.enumerable});return e},_r=e=>mr(ue({},"__esModule",{value:!0}),e),$e={};hr($e,{AUDIO_EXTENSIONS:()=>ce,DASH_EXTENSIONS:()=>Je,FLV_EXTENSIONS:()=>Qe,HLS_EXTENSIONS:()=>ye,MATCH_URL_DAILYMOTION:()=>Ye,MATCH_URL_FACEBOOK:()=>Be,MATCH_URL_FACEBOOK_WATCH:()=>He,MATCH_URL_KALTURA:()=>Ge,MATCH_URL_MIXCLOUD:()=>Ke,MATCH_URL_MUX:()=>Ue,MATCH_URL_SOUNDCLOUD:()=>Ne,MATCH_URL_STREAMABLE:()=>Fe,MATCH_URL_TWITCH_CHANNEL:()=>We,MATCH_URL_TWITCH_VIDEO:()=>Xe,MATCH_URL_VIDYARD:()=>Ze,MATCH_URL_VIMEO:()=>Ve,MATCH_URL_WISTIA:()=>qe,MATCH_URL_YOUTUBE:()=>ae,VIDEO_EXTENSIONS:()=>de,canPlay:()=>br});var gr=_r($e),Pe=q;const ae=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,Ne=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,Ve=/vimeo\.com\/(?!progressive_redirect).+/,Ue=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,Be=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,He=/^https?:\/\/fb\.watch\/.+$/,Fe=/streamable\.com\/([a-z0-9]+)$/,qe=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,Xe=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,We=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,Ye=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,Ke=/mixcloud\.com\/([^/]+\/[^/]+)/,Ze=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,Ge=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,ce=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,de=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,ye=/\.(m3u8)($|\?)/i,Je=/\.(mpd)($|\?)/i,Qe=/\.(flv)($|\?)/i,ne=e=>{if(e instanceof Array){for(const t of e)if(typeof t=="string"&&ne(t)||ne(t.src))return!0;return!1}return(0,Pe.isMediaStream)(e)||(0,Pe.isBlobUrl)(e)?!0:ce.test(e)||de.test(e)||ye.test(e)||Je.test(e)||Qe.test(e)},br={youtube:e=>e instanceof Array?e.every(t=>ae.test(t)):ae.test(e),soundcloud:e=>Ne.test(e)&&!ce.test(e),vimeo:e=>Ve.test(e)&&!de.test(e)&&!ye.test(e),mux:e=>Ue.test(e),facebook:e=>Be.test(e)||He.test(e),streamable:e=>Fe.test(e),wistia:e=>qe.test(e),twitch:e=>Xe.test(e)||We.test(e),dailymotion:e=>Ye.test(e),mixcloud:e=>Ke.test(e),vidyard:e=>Ze.test(e),kaltura:e=>Ge.test(e),file:ne};var fe=Object.defineProperty,vr=Object.getOwnPropertyDescriptor,Pr=Object.getOwnPropertyNames,wr=Object.prototype.hasOwnProperty,Or=(e,t)=>{for(var r in t)fe(e,r,{get:t[r],enumerable:!0})},xr=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Pr(t))!wr.call(e,n)&&n!==r&&fe(e,n,{get:()=>t[n],enumerable:!(a=vr(t,n))||a.enumerable});return e},zr=e=>xr(fe({},"__esModule",{value:!0}),e),et={};Or(et,{default:()=>Er});var Cr=zr(et),v=q,g=gr,Er=[{key:"youtube",name:"YouTube",canPlay:g.canPlay.youtube,lazyPlayer:(0,v.lazy)(()=>P(()=>import("./YouTube-11452af9.js").then(e=>e.Y),["./YouTube-11452af9.js","./_commonjsHelpers-de833af9.js","./index-8b3efc3f.js"],import.meta.url))},{key:"soundcloud",name:"SoundCloud",canPlay:g.canPlay.soundcloud,lazyPlayer:(0,v.lazy)(()=>P(()=>import("./SoundCloud-1315e042.js").then(e=>e.S),["./SoundCloud-1315e042.js","./_commonjsHelpers-de833af9.js","./index-8b3efc3f.js"],import.meta.url))},{key:"vimeo",name:"Vimeo",canPlay:g.canPlay.vimeo,lazyPlayer:(0,v.lazy)(()=>P(()=>import("./Vimeo-a3a9a4c3.js").then(e=>e.V),["./Vimeo-a3a9a4c3.js","./_commonjsHelpers-de833af9.js","./index-8b3efc3f.js"],import.meta.url))},{key:"mux",name:"Mux",canPlay:g.canPlay.mux,lazyPlayer:(0,v.lazy)(()=>P(()=>import("./Mux-a4478968.js").then(e=>e.M),["./Mux-a4478968.js","./iframe-ff14513a.js","./_commonjsHelpers-de833af9.js","./index-8b3efc3f.js"],import.meta.url))},{key:"facebook",name:"Facebook",canPlay:g.canPlay.facebook,lazyPlayer:(0,v.lazy)(()=>P(()=>import("./Facebook-97704aa6.js").then(e=>e.F),["./Facebook-97704aa6.js","./_commonjsHelpers-de833af9.js","./index-8b3efc3f.js"],import.meta.url))},{key:"streamable",name:"Streamable",canPlay:g.canPlay.streamable,lazyPlayer:(0,v.lazy)(()=>P(()=>import("./Streamable-f29797eb.js").then(e=>e.S),["./Streamable-f29797eb.js","./_commonjsHelpers-de833af9.js","./index-8b3efc3f.js"],import.meta.url))},{key:"wistia",name:"Wistia",canPlay:g.canPlay.wistia,lazyPlayer:(0,v.lazy)(()=>P(()=>import("./Wistia-58902281.js").then(e=>e.W),["./Wistia-58902281.js","./_commonjsHelpers-de833af9.js","./index-8b3efc3f.js"],import.meta.url))},{key:"twitch",name:"Twitch",canPlay:g.canPlay.twitch,lazyPlayer:(0,v.lazy)(()=>P(()=>import("./Twitch-530f89a7.js").then(e=>e.T),["./Twitch-530f89a7.js","./_commonjsHelpers-de833af9.js","./index-8b3efc3f.js"],import.meta.url))},{key:"dailymotion",name:"DailyMotion",canPlay:g.canPlay.dailymotion,lazyPlayer:(0,v.lazy)(()=>P(()=>import("./DailyMotion-f583f199.js").then(e=>e.D),["./DailyMotion-f583f199.js","./_commonjsHelpers-de833af9.js","./index-8b3efc3f.js"],import.meta.url))},{key:"mixcloud",name:"Mixcloud",canPlay:g.canPlay.mixcloud,lazyPlayer:(0,v.lazy)(()=>P(()=>import("./Mixcloud-463c45f0.js").then(e=>e.M),["./Mixcloud-463c45f0.js","./_commonjsHelpers-de833af9.js","./index-8b3efc3f.js"],import.meta.url))},{key:"vidyard",name:"Vidyard",canPlay:g.canPlay.vidyard,lazyPlayer:(0,v.lazy)(()=>P(()=>import("./Vidyard-d35f408e.js").then(e=>e.V),["./Vidyard-d35f408e.js","./_commonjsHelpers-de833af9.js","./index-8b3efc3f.js"],import.meta.url))},{key:"kaltura",name:"Kaltura",canPlay:g.canPlay.kaltura,lazyPlayer:(0,v.lazy)(()=>P(()=>import("./Kaltura-d4d05957.js").then(e=>e.K),["./Kaltura-d4d05957.js","./_commonjsHelpers-de833af9.js","./index-8b3efc3f.js"],import.meta.url))},{key:"file",name:"FilePlayer",canPlay:g.canPlay.file,canEnablePIP:e=>g.canPlay.file(e)&&(document.pictureInPictureEnabled||(0,v.supportsWebKitPresentationMode)())&&!g.AUDIO_EXTENSIONS.test(e),lazyPlayer:(0,v.lazy)(()=>P(()=>import("./FilePlayer-df77bcec.js").then(e=>e.F),["./FilePlayer-df77bcec.js","./_commonjsHelpers-de833af9.js","./index-8b3efc3f.js"],import.meta.url))}],we=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function Tr(e,t){return!!(e===t||we(e)&&we(t))}function Sr(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!Tr(e[r],t[r]))return!1;return!0}function Ar(e,t){t===void 0&&(t=Sr);var r,a=[],n,o=!1;function l(){for(var c=[],i=0;i<arguments.length;i++)c[i]=arguments[i];return o&&r===this&&t(c,a)||(n=e.apply(this,c),o=!0,r=this,a=c),n}return l}const Rr=Object.freeze(Object.defineProperty({__proto__:null,default:Ar},Symbol.toStringTag,{value:"Module"})),kr=ht(Rr);var jr=typeof Element<"u",Ir=typeof Map=="function",Mr=typeof Set=="function",Lr=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function H(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,a,n;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(a=r;a--!==0;)if(!H(e[a],t[a]))return!1;return!0}var o;if(Ir&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(o=e.entries();!(a=o.next()).done;)if(!t.has(a.value[0]))return!1;for(o=e.entries();!(a=o.next()).done;)if(!H(a.value[1],t.get(a.value[0])))return!1;return!0}if(Mr&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(o=e.entries();!(a=o.next()).done;)if(!t.has(a.value[0]))return!1;return!0}if(Lr&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(r=e.length,r!=t.length)return!1;for(a=r;a--!==0;)if(e[a]!==t[a])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(n=Object.keys(e),r=n.length,r!==Object.keys(t).length)return!1;for(a=r;a--!==0;)if(!Object.prototype.hasOwnProperty.call(t,n[a]))return!1;if(jr&&e instanceof Element)return!1;for(a=r;a--!==0;)if(!((n[a]==="_owner"||n[a]==="__v"||n[a]==="__o")&&e.$$typeof)&&!H(e[n[a]],t[n[a]]))return!1;return!0}return e!==e&&t!==t}var tt=function(t,r){try{return H(t,r)}catch(a){if((a.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw a}},Dr=Object.create,X=Object.defineProperty,$r=Object.getOwnPropertyDescriptor,Nr=Object.getOwnPropertyNames,Vr=Object.getPrototypeOf,Ur=Object.prototype.hasOwnProperty,Br=(e,t)=>{for(var r in t)X(e,r,{get:t[r],enumerable:!0})},rt=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Nr(t))!Ur.call(e,n)&&n!==r&&X(e,n,{get:()=>t[n],enumerable:!(a=$r(t,n))||a.enumerable});return e},Hr=(e,t,r)=>(r=e!=null?Dr(Vr(e)):{},rt(t||!e||!e.__esModule?X(r,"default",{value:e,enumerable:!0}):r,e)),Fr=e=>rt(X({},"__esModule",{value:!0}),e),at={};Br(at,{defaultProps:()=>Wr,propTypes:()=>Xr});var nt=Fr(at),qr=Hr(_t);const{string:y,bool:b,number:S,array:J,oneOfType:k,shape:x,object:_,func:d,node:Oe}=qr.default,Xr={url:k([y,J,_]),playing:b,loop:b,controls:b,volume:S,muted:b,playbackRate:S,width:k([y,S]),height:k([y,S]),style:_,progressInterval:S,playsinline:b,pip:b,stopOnUnmount:b,light:k([b,y,_]),playIcon:Oe,previewTabIndex:S,previewAriaLabel:y,fallback:Oe,oEmbedUrl:y,wrapper:k([y,d,x({render:d.isRequired})]),config:x({soundcloud:x({options:_}),youtube:x({playerVars:_,embedOptions:_,onUnstarted:d}),facebook:x({appId:y,version:y,playerId:y,attributes:_}),dailymotion:x({params:_}),vimeo:x({playerOptions:_,title:y}),mux:x({attributes:_,version:y}),file:x({attributes:_,tracks:J,forceVideo:b,forceAudio:b,forceHLS:b,forceSafariHLS:b,forceDisableHls:b,forceDASH:b,forceFLV:b,hlsOptions:_,hlsVersion:y,dashVersion:y,flvVersion:y}),wistia:x({options:_,playerId:y,customControls:J}),mixcloud:x({options:_}),twitch:x({options:_,playerId:y}),vidyard:x({options:_})}),onReady:d,onStart:d,onPlay:d,onPause:d,onBuffer:d,onBufferEnd:d,onEnded:d,onError:d,onDuration:d,onSeek:d,onPlaybackRateChange:d,onPlaybackQualityChange:d,onProgress:d,onClickPreview:d,onEnablePIP:d,onDisablePIP:d},f=()=>{},Wr={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:f},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:f,onStart:f,onPlay:f,onPause:f,onBuffer:f,onBufferEnd:f,onEnded:f,onError:f,onDuration:f,onSeek:f,onPlaybackRateChange:f,onPlaybackQualityChange:f,onProgress:f,onClickPreview:f,onEnablePIP:f,onDisablePIP:f};var Yr=Object.create,N=Object.defineProperty,Kr=Object.getOwnPropertyDescriptor,Zr=Object.getOwnPropertyNames,Gr=Object.getPrototypeOf,Jr=Object.prototype.hasOwnProperty,Qr=(e,t,r)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ea=(e,t)=>{for(var r in t)N(e,r,{get:t[r],enumerable:!0})},ot=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Zr(t))!Jr.call(e,n)&&n!==r&&N(e,n,{get:()=>t[n],enumerable:!(a=Kr(t,n))||a.enumerable});return e},it=(e,t,r)=>(r=e!=null?Yr(Gr(e)):{},ot(t||!e||!e.__esModule?N(r,"default",{value:e,enumerable:!0}):r,e)),ta=e=>ot(N({},"__esModule",{value:!0}),e),u=(e,t,r)=>(Qr(e,typeof t!="symbol"?t+"":t,r),r),st={};ea(st,{default:()=>W});var ra=ta(st),xe=it(C),aa=it(tt),lt=nt,na=q;const oa=5e3;class W extends xe.Component{constructor(){super(...arguments),u(this,"mounted",!1),u(this,"isReady",!1),u(this,"isPlaying",!1),u(this,"isLoading",!0),u(this,"loadOnReady",null),u(this,"startOnPlay",!0),u(this,"seekOnPlay",null),u(this,"onDurationCalled",!1),u(this,"handlePlayerMount",t=>{if(this.player){this.progress();return}this.player=t,this.player.load(this.props.url),this.progress()}),u(this,"getInternalPlayer",t=>this.player?this.player[t]:null),u(this,"progress",()=>{if(this.props.url&&this.player&&this.isReady){const t=this.getCurrentTime()||0,r=this.getSecondsLoaded(),a=this.getDuration();if(a){const n={playedSeconds:t,played:t/a};r!==null&&(n.loadedSeconds=r,n.loaded=r/a),(n.playedSeconds!==this.prevPlayed||n.loadedSeconds!==this.prevLoaded)&&this.props.onProgress(n),this.prevPlayed=n.playedSeconds,this.prevLoaded=n.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)}),u(this,"handleReady",()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:t,playing:r,volume:a,muted:n}=this.props;t(),!n&&a!==null&&this.player.setVolume(a),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):r&&this.player.play(),this.handleDurationCheck()}),u(this,"handlePlay",()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:t,onPlay:r,playbackRate:a}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&a!==1&&this.player.setPlaybackRate(a),t(),this.startOnPlay=!1),r(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()}),u(this,"handlePause",t=>{this.isPlaying=!1,this.isLoading||this.props.onPause(t)}),u(this,"handleEnded",()=>{const{activePlayer:t,loop:r,onEnded:a}=this.props;t.loopOnEnded&&r&&this.seekTo(0),r||(this.isPlaying=!1,a())}),u(this,"handleError",(...t)=>{this.isLoading=!1,this.props.onError(...t)}),u(this,"handleDurationCheck",()=>{clearTimeout(this.durationCheckTimeout);const t=this.getDuration();t?this.onDurationCalled||(this.props.onDuration(t),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)}),u(this,"handleLoaded",()=>{this.isLoading=!1})}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(t){if(!this.player)return;const{url:r,playing:a,volume:n,muted:o,playbackRate:l,pip:c,loop:i,activePlayer:O,disableDeferredLoading:m}=this.props;if(!(0,aa.default)(t.url,r)){if(this.isLoading&&!O.forceLoad&&!m&&!(0,na.isMediaStream)(r)){console.warn(`ReactPlayer: the attempt to load ${r} is being deferred until the player has loaded`),this.loadOnReady=r;return}this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(r,this.isReady)}!t.playing&&a&&!this.isPlaying&&this.player.play(),t.playing&&!a&&this.isPlaying&&this.player.pause(),!t.pip&&c&&this.player.enablePIP&&this.player.enablePIP(),t.pip&&!c&&this.player.disablePIP&&this.player.disablePIP(),t.volume!==n&&n!==null&&this.player.setVolume(n),t.muted!==o&&(o?this.player.mute():(this.player.unmute(),n!==null&&setTimeout(()=>this.player.setVolume(n)))),t.playbackRate!==l&&this.player.setPlaybackRate&&this.player.setPlaybackRate(l),t.loop!==i&&this.player.setLoop&&this.player.setLoop(i)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(t,r,a){if(!this.isReady){t!==0&&(this.seekOnPlay=t,setTimeout(()=>{this.seekOnPlay=null},oa));return}if(r?r==="fraction":t>0&&t<1){const o=this.player.getDuration();if(!o){console.warn("ReactPlayer: could not seek using fraction – duration not yet available");return}this.player.seekTo(o*t,a);return}this.player.seekTo(t,a)}render(){const t=this.props.activePlayer;return t?xe.default.createElement(t,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}}u(W,"displayName","Player");u(W,"propTypes",lt.propTypes);u(W,"defaultProps",lt.defaultProps);var ia=Object.create,V=Object.defineProperty,sa=Object.getOwnPropertyDescriptor,la=Object.getOwnPropertyNames,pa=Object.getPrototypeOf,ua=Object.prototype.hasOwnProperty,ca=(e,t,r)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,da=(e,t)=>{for(var r in t)V(e,r,{get:t[r],enumerable:!0})},pt=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of la(t))!ua.call(e,n)&&n!==r&&V(e,n,{get:()=>t[n],enumerable:!(a=sa(t,n))||a.enumerable});return e},U=(e,t,r)=>(r=e!=null?ia(pa(e)):{},pt(t||!e||!e.__esModule?V(r,"default",{value:e,enumerable:!0}):r,e)),ya=e=>pt(V({},"__esModule",{value:!0}),e),p=(e,t,r)=>(ca(e,typeof t!="symbol"?t+"":t,r),r),ut={};da(ut,{createReactPlayer:()=>wa});var fa=ya(ut),A=U(C),ha=U(Ie),Q=U(kr),ze=U(tt),I=nt,ct=q,ma=U(ra);const _a=(0,ct.lazy)(()=>P(()=>import("./Preview-84ebfeec.js").then(e=>e.P),["./Preview-84ebfeec.js","./_commonjsHelpers-de833af9.js","./index-8b3efc3f.js"],import.meta.url)),ga=typeof window<"u"&&window.document&&typeof document<"u",ba=typeof K<"u"&&K.window&&K.window.document,va=Object.keys(I.propTypes),Pa=ga||ba?A.Suspense:()=>null,j=[],wa=(e,t)=>{var r;return r=class extends A.Component{constructor(){super(...arguments),p(this,"state",{showPreview:!!this.props.light}),p(this,"references",{wrapper:a=>{this.wrapper=a},player:a=>{this.player=a}}),p(this,"handleClickPreview",a=>{this.setState({showPreview:!1}),this.props.onClickPreview(a)}),p(this,"showPreview",()=>{this.setState({showPreview:!0})}),p(this,"getDuration",()=>this.player?this.player.getDuration():null),p(this,"getCurrentTime",()=>this.player?this.player.getCurrentTime():null),p(this,"getSecondsLoaded",()=>this.player?this.player.getSecondsLoaded():null),p(this,"getInternalPlayer",(a="player")=>this.player?this.player.getInternalPlayer(a):null),p(this,"seekTo",(a,n,o)=>{if(!this.player)return null;this.player.seekTo(a,n,o)}),p(this,"handleReady",()=>{this.props.onReady(this)}),p(this,"getActivePlayer",(0,Q.default)(a=>{for(const n of[...j,...e])if(n.canPlay(a))return n;return t||null})),p(this,"getConfig",(0,Q.default)((a,n)=>{const{config:o}=this.props;return ha.default.all([I.defaultProps.config,I.defaultProps.config[n]||{},o,o[n]||{}])})),p(this,"getAttributes",(0,Q.default)(a=>(0,ct.omit)(this.props,va))),p(this,"renderActivePlayer",a=>{if(!a)return null;const n=this.getActivePlayer(a);if(!n)return null;const o=this.getConfig(a,n.key);return A.default.createElement(ma.default,{...this.props,key:n.key,ref:this.references.player,config:o,activePlayer:n.lazyPlayer||n,onReady:this.handleReady})})}shouldComponentUpdate(a,n){return!(0,ze.default)(this.props,a)||!(0,ze.default)(this.state,n)}componentDidUpdate(a){const{light:n}=this.props;!a.light&&n&&this.setState({showPreview:!0}),a.light&&!n&&this.setState({showPreview:!1})}renderPreview(a){if(!a)return null;const{light:n,playIcon:o,previewTabIndex:l,oEmbedUrl:c,previewAriaLabel:i}=this.props;return A.default.createElement(_a,{url:a,light:n,playIcon:o,previewTabIndex:l,previewAriaLabel:i,oEmbedUrl:c,onClick:this.handleClickPreview})}render(){const{url:a,style:n,width:o,height:l,fallback:c,wrapper:i}=this.props,{showPreview:O}=this.state,m=this.getAttributes(a),E=typeof i=="string"?this.references.wrapper:void 0;return A.default.createElement(i,{ref:E,style:{...n,width:o,height:l},...m},A.default.createElement(Pa,{fallback:c},O?this.renderPreview(a):this.renderActivePlayer(a)))}},p(r,"displayName","ReactPlayer"),p(r,"propTypes",I.propTypes),p(r,"defaultProps",I.defaultProps),p(r,"addCustomPlayer",a=>{j.push(a)}),p(r,"removeCustomPlayers",()=>{j.length=0}),p(r,"canPlay",a=>{for(const n of[...j,...e])if(n.canPlay(a))return!0;return!1}),p(r,"canEnablePIP",a=>{for(const n of[...j,...e])if(n.canEnablePIP&&n.canEnablePIP(a))return!0;return!1}),r};var Oa=Object.create,Y=Object.defineProperty,xa=Object.getOwnPropertyDescriptor,za=Object.getOwnPropertyNames,Ca=Object.getPrototypeOf,Ea=Object.prototype.hasOwnProperty,Ta=(e,t)=>{for(var r in t)Y(e,r,{get:t[r],enumerable:!0})},dt=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of za(t))!Ea.call(e,n)&&n!==r&&Y(e,n,{get:()=>t[n],enumerable:!(a=xa(t,n))||a.enumerable});return e},Sa=(e,t,r)=>(r=e!=null?Oa(Ca(e)):{},dt(t||!e||!e.__esModule?Y(r,"default",{value:e,enumerable:!0}):r,e)),Aa=e=>dt(Y({},"__esModule",{value:!0}),e),yt={};Ta(yt,{default:()=>Ia});var Ra=Aa(yt),oe=Sa(Cr),ka=fa;const ja=oe.default[oe.default.length-1];var Ia=(0,ka.createReactPlayer)(oe.default,ja);const Ma=mt(Ra),La=""+new URL("play-0c438e53.svg",import.meta.url).href,Da=()=>{var c,i,O;const e=(c=document.cookie.split("; ").find(m=>m.startsWith("OptanonConsent=")))==null?void 0:c.replace("OptanonConsent=",""),[t,r]=C.useState(!!e),[a,n]=C.useState(e);if(C.useEffect(()=>{if(e)n(e);else{const m=()=>{var he;const E=(he=document.cookie.split("; ").find(ft=>ft.startsWith("OptanonConsent=")))==null?void 0:he.replace("OptanonConsent=","");E?(r(!0),n(E)):setTimeout(m,1e3)};m()}},[]),!t)return{canPlay:!1};const o=new URLSearchParams(a);return{canPlay:!!((i=o.get("groups"))!=null&&i.includes("C0002:1"))||!!((O=o.get("groups"))!=null&&O.includes("C0004:1"))}},$a=Da,ie=({url:e,thumbnail:t,label:r,description:a})=>{const{canPlay:n}=$a(),o=()=>{if(typeof window<"u"&&typeof window.OneTrust<"u"){const l=window.OneTrust;l==null||l.OnConsentChanged(()=>{window.location.reload()}),l==null||l.ToggleInfoDisplay()}};return s.jsx("div",{style:{position:"relative",width:"100%",margin:"0 auto",aspectRatio:"16 / 9"},children:n?s.jsx(Ma,{controls:!0,playIcon:s.jsx("img",{alt:"play",className:"zep-max-w-[48px] zep-max-h-[48px] md:zep-max-w-[100px] md:zep-max-h-[100px]",src:La}),volume:.7,light:t,url:e,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0},config:{file:{attributes:{style:{objectFit:"cover",width:"100%"}}}}}):s.jsx(gt,{label:r,description:a,onClickCookies:o})})},Na=ie;try{ie.displayName="ResponsivePlayer",ie.__docgenInfo={description:"",displayName:"ResponsivePlayer",props:{url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}},thumbnail:{defaultValue:null,description:"",name:"thumbnail",required:!0,type:{name:"string"}},thumbnailAlt:{defaultValue:null,description:"",name:"thumbnailAlt",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}}}}}catch{}const Va={[w.Zps]:me[D.ZpsBg],[w.Cat]:me[D.CatBg]},Ua={[w.Zps]:["zep-bg-yellow-500"],[w.Cat]:["zep-bg-yellow-500"]},Ba={[w.Zps]:["zep-text-typography-light-70"],[w.Cat]:["zep-text-secondary-default"]},ee=le([],{variants:{variant:Va},defaultVariants:{variant:w.Cat}}),Ce=le([],{variants:{variant:Ua},defaultVariants:{variant:w.Cat}}),te=le([],{variants:{variant:Ba},defaultVariants:{variant:w.Cat}}),Ha="!md:zep-flex !zep-px-[0] !md:zep-max-h-[600px] !lg:zep-max-h-[850px] zep-overflow-hidden",se=({id:e,videos:t,variant:r})=>{const[a,n]=C.useState(t[0]),[o,l]=C.useState(B()+t[0].url);C.useEffect(()=>{l(B()+a.url)},[a]);const c=i=>{switch(i){case w.Cat:return D.CatBg;case w.Zps:return D.ZpsBg;default:return D.ZpsBg}};return s.jsxs("div",{id:e,children:[s.jsx(_e,{wrapperClassname:z(ee({variant:r}),"!zep-mb-[0]"),className:"zep-py-3 sm:zep-py-4 md:zep-py-5",children:s.jsx(bt,{tagline:a.tagline,headline:a.title,description:[{type:"paragraph",children:[{type:"text",text:a.description}]}],linkHref:a.linkHref,linkText:a.linkText,variant:c(r)})}),s.jsxs(_e,{className:Ha,children:[s.jsxs("div",{className:z("zep-w-full zep-relative",(t==null?void 0:t.length)>1&&"md:zep-w-[80%]"),children:[s.jsx(Na,{label:a.cookiesResetLabel,description:a.cookiesLayerDescription,thumbnailAlt:a.thumbnailAlt,url:a.url,thumbnail:a.thumbnail},o),t.length>1&&s.jsx("div",{className:z("zep-hidden md:zep-flex zep-w-full md:zep-w-[25%] zep-flex-col zep-cursor-pointer zep-absolute zep-right-[-25%] zep-top-[0px] zep-h-full zep-overflow-scroll",ee({variant:r}),"md:zep-bg-[unset] md:zep-bg-none"),children:t.map((i,O)=>s.jsxs("div",{style:{transform:`translateY(-${16*O}px)`},className:"zep-flex zep-items-center zep-gap-1",children:[s.jsx("div",{onClick:()=>n(i),className:z("zep-pr-1 md:zep-pr-[0px] md:zep-pl-1 zep-pb-1 zep-pt-1 relative zep-max-w-[186px] md:zep-max-w-[unset] zep-h-full zep-max-h-[127px] md:zep-max-h-[unset] zep-w-full",a===i&&Ce({variant:r})),children:s.jsxs("div",{className:"zep-relative",children:[s.jsx("img",{alt:i.title,src:i.thumbnail,className:"zep-max-w-[170px] md:zep-max-w-[unset] zep-max-h-[95px] md:zep-max-h-[unset] zep-w-full zep-object-cover"}),a===i?s.jsx("div",{className:"zep-absolute zep-inset-[0px] zep-bg-[#000000] zep-opacity-70"}):s.jsx("div",{className:"zep-absolute zep-inset-[0px] zep-bg-[#000000] zep-opacity-40"}),s.jsx("div",{className:"zep-hidden zep-top-[0px] zep-absolute md:zep-flex zep-items-center zep-h-full zep-w-full zep-px-[8px]",children:s.jsx("h3",{className:z("zep-typography-headlineSM-fluid-cqi zep-top-[0px] zep-line-clamp-2",a===i?te({variant:r}):"zep-text-typography-light-100 "),children:i.title})})]})}),s.jsx("h3",{className:z("md:zep-hidden zep-typography-headlineSM-fluid-cqi zep-line-clamp-2",a===i?te({variant:r}):"zep-text-typography-light-100 "),children:i.title})]},B()+i.title))})]}),t.length>1&&s.jsx("div",{className:z("zep-w-full md:zep-hidden md:zep-bg-[unset] md:zep-bg-none",ee({variant:r})),children:t.map((i,O)=>s.jsxs("div",{style:{transform:`translateY(-${16*O}px)`},className:"zep-flex zep-items-center zep-gap-1 ",onClick:()=>n(i),children:[s.jsx("div",{className:z("zep-pr-1 md:zep-pr-[0px] md:zep-pl-1 zep-pb-1 zep-pt-1 relative zep-max-w-[186px] sm:zep-max-w-[266px] md:zep-max-w-[unset] zep-h-full zep-max-h-[127px] sm:zep-max-h-[172px] md:zep-max-h-[unset]",a===i&&Ce({variant:r})),children:s.jsxs("div",{className:"zep-relative",children:[s.jsx("img",{alt:i.title,src:i.thumbnail,className:"zep-w-[170px] zep-h-[95px] sm:zep-w-[250px] sm:zep-h-[140px] zep-object-cover"}),a===i?s.jsx("div",{className:"zep-absolute zep-inset-[0px] zep-bg-[#000000] zep-opacity-70"}):s.jsx("div",{className:"zep-absolute zep-inset-[0px] zep-bg-[#000000] zep-opacity-40"})]})}),s.jsx("h3",{className:z("md:zep-hidden zep-typography-headlineSM-fluid-cqi zep-line-clamp-3 zep-w-1/2 zep-pr-1",a===i?te({variant:r}):"zep-text-typography-light-100 "),children:i.title})]},B()+i.title))})]})]})};try{se.displayName="Video",se.__docgenInfo={description:"",displayName:"Video",props:{videos:{defaultValue:null,description:"",name:"videos",required:!0,type:{name:"SingleVideo[]"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const Fa={title:"Components/Video",component:se,tags:["autodocs"],argTypes:{variant:{control:{type:"radio",options:Object.keys(w)}}}},M={args:{videos:[{title:"Big Buck Bunny with title larger than 3 lines",tagline:"By Blender Foundation",description:`Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit aint no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.

Licensed under the Creative Commons Attribution license
http://www.bigbuckbunny.org`,url:"https://videos.pexels.com/video-files/20422317/20422317-hd_1920_1080_25fps.mp4",thumbnail:"https://media.istockphoto.com/id/2065674519/photo/rolling-says-macro.jpg?s=2048x2048&w=is&k=20&c=FO-u3p_njEoIh7GusFYgrOo1RxF0EXobx0BXH6vMB4Q=",thumbnailAlt:"alt",cookiesResetLabel:"Reset Cookies",cookiesLayerDescription:"This video requires cookies to be enabled. Please accept cookies to proceed."}],variant:w.Cat}},L={args:{videos:Array.from({length:7}).map(()=>({title:"Big Buck Bunny with title larger than 3 lines",tagline:"By Blender Foundation",description:`Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit aint no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.

Licensed under the Creative Commons Attribution license
http://www.bigbuckbunny.org`,url:"https://videos.pexels.com/video-files/20422317/20422317-hd_1920_1080_25fps.mp4",thumbnail:"https://media.istockphoto.com/id/2065674519/photo/rolling-says-macro.jpg?s=2048x2048&w=is&k=20&c=FO-u3p_njEoIh7GusFYgrOo1RxF0EXobx0BXH6vMB4Q=",thumbnailAlt:"alt",cookiesResetLabel:"Reset Cookies",cookiesLayerDescription:"This video requires cookies to be enabled. Please accept cookies to proceed."})),variant:w.Cat}};var Ee,Te,Se;M.parameters={...M.parameters,docs:{...(Ee=M.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    videos: [{
      title: 'Big Buck Bunny with title larger than 3 lines',
      tagline: 'By Blender Foundation',
      description: 'Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit aint no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\\n\\nLicensed under the Creative Commons Attribution license\\nhttp://www.bigbuckbunny.org',
      url: 'https://videos.pexels.com/video-files/20422317/20422317-hd_1920_1080_25fps.mp4',
      thumbnail: 'https://media.istockphoto.com/id/2065674519/photo/rolling-says-macro.jpg?s=2048x2048&w=is&k=20&c=FO-u3p_njEoIh7GusFYgrOo1RxF0EXobx0BXH6vMB4Q=',
      thumbnailAlt: 'alt',
      cookiesResetLabel: 'Reset Cookies',
      cookiesLayerDescription: 'This video requires cookies to be enabled. Please accept cookies to proceed.'
    }],
    variant: GlobalVariants.Cat
  }
}`,...(Se=(Te=M.parameters)==null?void 0:Te.docs)==null?void 0:Se.source}}};var Ae,Re,ke;L.parameters={...L.parameters,docs:{...(Ae=L.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    videos: Array.from({
      length: 7
    }).map(() => ({
      title: 'Big Buck Bunny with title larger than 3 lines',
      tagline: 'By Blender Foundation',
      description: 'Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit aint no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\\n\\nLicensed under the Creative Commons Attribution license\\nhttp://www.bigbuckbunny.org',
      url: 'https://videos.pexels.com/video-files/20422317/20422317-hd_1920_1080_25fps.mp4',
      thumbnail: 'https://media.istockphoto.com/id/2065674519/photo/rolling-says-macro.jpg?s=2048x2048&w=is&k=20&c=FO-u3p_njEoIh7GusFYgrOo1RxF0EXobx0BXH6vMB4Q=',
      thumbnailAlt: 'alt',
      cookiesResetLabel: 'Reset Cookies',
      cookiesLayerDescription: 'This video requires cookies to be enabled. Please accept cookies to proceed.'
    })),
    variant: GlobalVariants.Cat
  }
}`,...(ke=(Re=L.parameters)==null?void 0:Re.docs)==null?void 0:ke.source}}};const qa=["Default","MultiVideo"],an=Object.freeze(Object.defineProperty({__proto__:null,Default:M,MultiVideo:L,__namedExportsOrder:qa,default:Fa},Symbol.toStringTag,{value:"Module"}));export{an as V,gr as p,q as u};
