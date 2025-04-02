import{G as O,a as D}from"./global-variants-893e06e6.js";import{j as s,c as z}from"./clsx-36b9529f.js";import{c as le}from"./index-9eff14f9.js";import{r as C}from"./index-8b3efc3f.js";import{b as he}from"./commonCSS-cc68a568.js";import{a as ft,c as K,g as ht}from"./_commonjsHelpers-de833af9.js";import{_ as w}from"./iframe-f20b2436.js";import{p as mt}from"./index-9d475cdf.js";import{V as _t}from"./VideoCookieLayer-9ac82eec.js";import{H as gt}from"./HeaderLongComponent-2aca5552.js";import{L as me}from"./Layout-639d4783.js";const h=[];for(let e=0;e<256;++e)h.push((e+256).toString(16).slice(1));function bt(e,t=0){return(h[e[t+0]]+h[e[t+1]]+h[e[t+2]]+h[e[t+3]]+"-"+h[e[t+4]]+h[e[t+5]]+"-"+h[e[t+6]]+h[e[t+7]]+"-"+h[e[t+8]]+h[e[t+9]]+"-"+h[e[t+10]]+h[e[t+11]]+h[e[t+12]]+h[e[t+13]]+h[e[t+14]]+h[e[t+15]]).toLowerCase()}let Z;const vt=new Uint8Array(16);function Pt(){if(!Z){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Z=crypto.getRandomValues.bind(crypto)}return Z(vt)}const wt=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),_e={randomUUID:wt};function B(e,t,r){if(_e.randomUUID&&!t&&!e)return _e.randomUUID();e=e||{};const a=e.random||(e.rng||Pt)();if(a[6]=a[6]&15|64,a[8]=a[8]&63|128,t){r=r||0;for(let n=0;n<16;++n)t[r+n]=a[n];return t}return bt(a)}var Ot=function(t,r,a){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script");typeof r=="function"&&(a=r,r={}),r=r||{},a=a||function(){},o.type=r.type||"text/javascript",o.charset=r.charset||"utf8",o.async="async"in r?!!r.async:!0,o.src=t,r.attrs&&xt(o,r.attrs),r.text&&(o.text=""+r.text);var l="onload"in o?ge:zt;l(o,a),o.onload||ge(o,a),n.appendChild(o)};function xt(e,t){for(var r in t)e.setAttribute(r,t[r])}function ge(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function zt(e,t){e.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,t(null,e))}}var Ct=function(t){return Et(t)&&!Tt(t)};function Et(e){return!!e&&typeof e=="object"}function Tt(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||Rt(e)}var St=typeof Symbol=="function"&&Symbol.for,At=St?Symbol.for("react.element"):60103;function Rt(e){return e.$$typeof===At}function kt(e){return Array.isArray(e)?[]:{}}function $(e,t){return t.clone!==!1&&t.isMergeableObject(e)?R(kt(e),e,t):e}function jt(e,t,r){return e.concat(t).map(function(a){return $(a,r)})}function It(e,t){if(!t.customMerge)return R;var r=t.customMerge(e);return typeof r=="function"?r:R}function Mt(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function be(e){return Object.keys(e).concat(Mt(e))}function ke(e,t){try{return t in e}catch{return!1}}function Lt(e,t){return ke(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function Dt(e,t,r){var a={};return r.isMergeableObject(e)&&be(e).forEach(function(n){a[n]=$(e[n],r)}),be(t).forEach(function(n){Lt(e,n)||(ke(e,n)&&r.isMergeableObject(t[n])?a[n]=It(n,r)(e[n],t[n],r):a[n]=$(t[n],r))}),a}function R(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||jt,r.isMergeableObject=r.isMergeableObject||Ct,r.cloneUnlessOtherwiseSpecified=$;var a=Array.isArray(t),n=Array.isArray(e),o=a===n;return o?a?r.arrayMerge(e,t,r):Dt(e,t,r):$(t,r)}R.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(a,n){return R(a,n,r)},{})};var $t=R,je=$t,Nt=Object.create,F=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,Ut=Object.getOwnPropertyNames,Bt=Object.getPrototypeOf,Ht=Object.prototype.hasOwnProperty,Ft=(e,t)=>{for(var r in t)F(e,r,{get:t[r],enumerable:!0})},Ie=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Ut(t))!Ht.call(e,n)&&n!==r&&F(e,n,{get:()=>t[n],enumerable:!(a=Vt(t,n))||a.enumerable});return e},pe=(e,t,r)=>(r=e!=null?Nt(Bt(e)):{},Ie(t||!e||!e.__esModule?F(r,"default",{value:e,enumerable:!0}):r,e)),qt=e=>Ie(F({},"__esModule",{value:!0}),e),Me={};Ft(Me,{callPlayer:()=>sr,getConfig:()=>or,getSDK:()=>nr,isBlobUrl:()=>pr,isMediaStream:()=>lr,lazy:()=>Kt,omit:()=>ir,parseEndTime:()=>tr,parseStartTime:()=>er,queryString:()=>ar,randomString:()=>rr,supportsWebKitPresentationMode:()=>ur});var q=qt(Me),Xt=pe(C),Wt=pe(Ot),Yt=pe(je);const Kt=e=>Xt.default.lazy(async()=>{const t=await e();return typeof t.default=="function"?t:t.default}),Zt=/[?&#](?:start|t)=([0-9hms]+)/,Gt=/[?&#]end=([0-9hms]+)/,re=/(\d+)(h|m|s)/g,Jt=/^\d+$/;function Le(e,t){if(e instanceof Array)return;const r=e.match(t);if(r){const a=r[1];if(a.match(re))return Qt(a);if(Jt.test(a))return parseInt(a)}}function Qt(e){let t=0,r=re.exec(e);for(;r!==null;){const[,a,n]=r;n==="h"&&(t+=parseInt(a,10)*60*60),n==="m"&&(t+=parseInt(a,10)*60),n==="s"&&(t+=parseInt(a,10)),r=re.exec(e)}return t}function er(e){return Le(e,Zt)}function tr(e){return Le(e,Gt)}function rr(){return Math.random().toString(36).substr(2,5)}function ar(e){return Object.keys(e).map(t=>`${t}=${e[t]}`).join("&")}function G(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}const T={},nr=function(t,r,a=null,n=()=>!0,o=Wt.default){const l=G(r);return l&&n(l)?Promise.resolve(l):new Promise((c,i)=>{if(T[t]){T[t].push({resolve:c,reject:i});return}T[t]=[{resolve:c,reject:i}];const _=v=>{T[t].forEach(E=>E.resolve(v))};if(a){const v=window[a];window[a]=function(){v&&v(),_(G(r))}}o(t,v=>{v?(T[t].forEach(E=>E.reject(v)),T[t]=null):a||_(G(r))})})};function or(e,t){return(0,Yt.default)(t.config,e.config)}function ir(e,...t){const r=[].concat(...t),a={},n=Object.keys(e);for(const o of n)r.indexOf(o)===-1&&(a[o]=e[o]);return a}function sr(e,...t){if(!this.player||!this.player[e]){let r=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c – `;return this.player?this.player[e]||(r+="The method was not available"):r+="The player was not available",console.warn(r,"font-weight: bold",""),null}return this.player[e](...t)}function lr(e){return typeof window<"u"&&typeof window.MediaStream<"u"&&e instanceof window.MediaStream}function pr(e){return/^blob:/.test(e)}function ur(e=document.createElement("video")){const t=/iPhone|iPod/.test(navigator.userAgent)===!1;return e.webkitSupportsPresentationMode&&typeof e.webkitSetPresentationMode=="function"&&t}var ue=Object.defineProperty,cr=Object.getOwnPropertyDescriptor,dr=Object.getOwnPropertyNames,yr=Object.prototype.hasOwnProperty,fr=(e,t)=>{for(var r in t)ue(e,r,{get:t[r],enumerable:!0})},hr=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of dr(t))!yr.call(e,n)&&n!==r&&ue(e,n,{get:()=>t[n],enumerable:!(a=cr(t,n))||a.enumerable});return e},mr=e=>hr(ue({},"__esModule",{value:!0}),e),De={};fr(De,{AUDIO_EXTENSIONS:()=>ce,DASH_EXTENSIONS:()=>Ge,FLV_EXTENSIONS:()=>Je,HLS_EXTENSIONS:()=>ye,MATCH_URL_DAILYMOTION:()=>We,MATCH_URL_FACEBOOK:()=>Ue,MATCH_URL_FACEBOOK_WATCH:()=>Be,MATCH_URL_KALTURA:()=>Ze,MATCH_URL_MIXCLOUD:()=>Ye,MATCH_URL_MUX:()=>Ve,MATCH_URL_SOUNDCLOUD:()=>$e,MATCH_URL_STREAMABLE:()=>He,MATCH_URL_TWITCH_CHANNEL:()=>Xe,MATCH_URL_TWITCH_VIDEO:()=>qe,MATCH_URL_VIDYARD:()=>Ke,MATCH_URL_VIMEO:()=>Ne,MATCH_URL_WISTIA:()=>Fe,MATCH_URL_YOUTUBE:()=>ae,VIDEO_EXTENSIONS:()=>de,canPlay:()=>gr});var _r=mr(De),ve=q;const ae=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,$e=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,Ne=/vimeo\.com\/(?!progressive_redirect).+/,Ve=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,Ue=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,Be=/^https?:\/\/fb\.watch\/.+$/,He=/streamable\.com\/([a-z0-9]+)$/,Fe=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,qe=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,Xe=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,We=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,Ye=/mixcloud\.com\/([^/]+\/[^/]+)/,Ke=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,Ze=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,ce=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,de=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,ye=/\.(m3u8)($|\?)/i,Ge=/\.(mpd)($|\?)/i,Je=/\.(flv)($|\?)/i,ne=e=>{if(e instanceof Array){for(const t of e)if(typeof t=="string"&&ne(t)||ne(t.src))return!0;return!1}return(0,ve.isMediaStream)(e)||(0,ve.isBlobUrl)(e)?!0:ce.test(e)||de.test(e)||ye.test(e)||Ge.test(e)||Je.test(e)},gr={youtube:e=>e instanceof Array?e.every(t=>ae.test(t)):ae.test(e),soundcloud:e=>$e.test(e)&&!ce.test(e),vimeo:e=>Ne.test(e)&&!de.test(e)&&!ye.test(e),mux:e=>Ve.test(e),facebook:e=>Ue.test(e)||Be.test(e),streamable:e=>He.test(e),wistia:e=>Fe.test(e),twitch:e=>qe.test(e)||Xe.test(e),dailymotion:e=>We.test(e),mixcloud:e=>Ye.test(e),vidyard:e=>Ke.test(e),kaltura:e=>Ze.test(e),file:ne};var fe=Object.defineProperty,br=Object.getOwnPropertyDescriptor,vr=Object.getOwnPropertyNames,Pr=Object.prototype.hasOwnProperty,wr=(e,t)=>{for(var r in t)fe(e,r,{get:t[r],enumerable:!0})},Or=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of vr(t))!Pr.call(e,n)&&n!==r&&fe(e,n,{get:()=>t[n],enumerable:!(a=br(t,n))||a.enumerable});return e},xr=e=>Or(fe({},"__esModule",{value:!0}),e),Qe={};wr(Qe,{default:()=>Cr});var zr=xr(Qe),P=q,g=_r,Cr=[{key:"youtube",name:"YouTube",canPlay:g.canPlay.youtube,lazyPlayer:(0,P.lazy)(()=>w(()=>import("./YouTube-1fae5172.js").then(e=>e.Y),["./YouTube-1fae5172.js","./_commonjsHelpers-de833af9.js","./index-8b3efc3f.js"],import.meta.url))},{key:"soundcloud",name:"SoundCloud",canPlay:g.canPlay.soundcloud,lazyPlayer:(0,P.lazy)(()=>w(()=>import("./SoundCloud-fd3774be.js").then(e=>e.S),["./SoundCloud-fd3774be.js","./_commonjsHelpers-de833af9.js","./index-8b3efc3f.js"],import.meta.url))},{key:"vimeo",name:"Vimeo",canPlay:g.canPlay.vimeo,lazyPlayer:(0,P.lazy)(()=>w(()=>import("./Vimeo-e5d28987.js").then(e=>e.V),["./Vimeo-e5d28987.js","./_commonjsHelpers-de833af9.js","./index-8b3efc3f.js"],import.meta.url))},{key:"mux",name:"Mux",canPlay:g.canPlay.mux,lazyPlayer:(0,P.lazy)(()=>w(()=>import("./Mux-43757723.js").then(e=>e.M),["./Mux-43757723.js","./iframe-f20b2436.js","./_commonjsHelpers-de833af9.js","./index-8b3efc3f.js"],import.meta.url))},{key:"facebook",name:"Facebook",canPlay:g.canPlay.facebook,lazyPlayer:(0,P.lazy)(()=>w(()=>import("./Facebook-79b61f83.js").then(e=>e.F),["./Facebook-79b61f83.js","./_commonjsHelpers-de833af9.js","./index-8b3efc3f.js"],import.meta.url))},{key:"streamable",name:"Streamable",canPlay:g.canPlay.streamable,lazyPlayer:(0,P.lazy)(()=>w(()=>import("./Streamable-accb12fb.js").then(e=>e.S),["./Streamable-accb12fb.js","./_commonjsHelpers-de833af9.js","./index-8b3efc3f.js"],import.meta.url))},{key:"wistia",name:"Wistia",canPlay:g.canPlay.wistia,lazyPlayer:(0,P.lazy)(()=>w(()=>import("./Wistia-f6444d40.js").then(e=>e.W),["./Wistia-f6444d40.js","./_commonjsHelpers-de833af9.js","./index-8b3efc3f.js"],import.meta.url))},{key:"twitch",name:"Twitch",canPlay:g.canPlay.twitch,lazyPlayer:(0,P.lazy)(()=>w(()=>import("./Twitch-bc733949.js").then(e=>e.T),["./Twitch-bc733949.js","./_commonjsHelpers-de833af9.js","./index-8b3efc3f.js"],import.meta.url))},{key:"dailymotion",name:"DailyMotion",canPlay:g.canPlay.dailymotion,lazyPlayer:(0,P.lazy)(()=>w(()=>import("./DailyMotion-7c40bc67.js").then(e=>e.D),["./DailyMotion-7c40bc67.js","./_commonjsHelpers-de833af9.js","./index-8b3efc3f.js"],import.meta.url))},{key:"mixcloud",name:"Mixcloud",canPlay:g.canPlay.mixcloud,lazyPlayer:(0,P.lazy)(()=>w(()=>import("./Mixcloud-7b19a149.js").then(e=>e.M),["./Mixcloud-7b19a149.js","./_commonjsHelpers-de833af9.js","./index-8b3efc3f.js"],import.meta.url))},{key:"vidyard",name:"Vidyard",canPlay:g.canPlay.vidyard,lazyPlayer:(0,P.lazy)(()=>w(()=>import("./Vidyard-4d63f23d.js").then(e=>e.V),["./Vidyard-4d63f23d.js","./_commonjsHelpers-de833af9.js","./index-8b3efc3f.js"],import.meta.url))},{key:"kaltura",name:"Kaltura",canPlay:g.canPlay.kaltura,lazyPlayer:(0,P.lazy)(()=>w(()=>import("./Kaltura-bdf96005.js").then(e=>e.K),["./Kaltura-bdf96005.js","./_commonjsHelpers-de833af9.js","./index-8b3efc3f.js"],import.meta.url))},{key:"file",name:"FilePlayer",canPlay:g.canPlay.file,canEnablePIP:e=>g.canPlay.file(e)&&(document.pictureInPictureEnabled||(0,P.supportsWebKitPresentationMode)())&&!g.AUDIO_EXTENSIONS.test(e),lazyPlayer:(0,P.lazy)(()=>w(()=>import("./FilePlayer-d621615b.js").then(e=>e.F),["./FilePlayer-d621615b.js","./_commonjsHelpers-de833af9.js","./index-8b3efc3f.js"],import.meta.url))}],Pe=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function Er(e,t){return!!(e===t||Pe(e)&&Pe(t))}function Tr(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!Er(e[r],t[r]))return!1;return!0}function Sr(e,t){t===void 0&&(t=Tr);var r,a=[],n,o=!1;function l(){for(var c=[],i=0;i<arguments.length;i++)c[i]=arguments[i];return o&&r===this&&t(c,a)||(n=e.apply(this,c),o=!0,r=this,a=c),n}return l}const Ar=Object.freeze(Object.defineProperty({__proto__:null,default:Sr},Symbol.toStringTag,{value:"Module"})),Rr=ft(Ar);var kr=typeof Element<"u",jr=typeof Map=="function",Ir=typeof Set=="function",Mr=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function H(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,a,n;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(a=r;a--!==0;)if(!H(e[a],t[a]))return!1;return!0}var o;if(jr&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(o=e.entries();!(a=o.next()).done;)if(!t.has(a.value[0]))return!1;for(o=e.entries();!(a=o.next()).done;)if(!H(a.value[1],t.get(a.value[0])))return!1;return!0}if(Ir&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(o=e.entries();!(a=o.next()).done;)if(!t.has(a.value[0]))return!1;return!0}if(Mr&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(r=e.length,r!=t.length)return!1;for(a=r;a--!==0;)if(e[a]!==t[a])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(n=Object.keys(e),r=n.length,r!==Object.keys(t).length)return!1;for(a=r;a--!==0;)if(!Object.prototype.hasOwnProperty.call(t,n[a]))return!1;if(kr&&e instanceof Element)return!1;for(a=r;a--!==0;)if(!((n[a]==="_owner"||n[a]==="__v"||n[a]==="__o")&&e.$$typeof)&&!H(e[n[a]],t[n[a]]))return!1;return!0}return e!==e&&t!==t}var et=function(t,r){try{return H(t,r)}catch(a){if((a.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw a}},Lr=Object.create,X=Object.defineProperty,Dr=Object.getOwnPropertyDescriptor,$r=Object.getOwnPropertyNames,Nr=Object.getPrototypeOf,Vr=Object.prototype.hasOwnProperty,Ur=(e,t)=>{for(var r in t)X(e,r,{get:t[r],enumerable:!0})},tt=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of $r(t))!Vr.call(e,n)&&n!==r&&X(e,n,{get:()=>t[n],enumerable:!(a=Dr(t,n))||a.enumerable});return e},Br=(e,t,r)=>(r=e!=null?Lr(Nr(e)):{},tt(t||!e||!e.__esModule?X(r,"default",{value:e,enumerable:!0}):r,e)),Hr=e=>tt(X({},"__esModule",{value:!0}),e),rt={};Ur(rt,{defaultProps:()=>Xr,propTypes:()=>qr});var at=Hr(rt),Fr=Br(mt);const{string:y,bool:b,number:S,array:J,oneOfType:k,shape:x,object:m,func:d,node:we}=Fr.default,qr={url:k([y,J,m]),playing:b,loop:b,controls:b,volume:S,muted:b,playbackRate:S,width:k([y,S]),height:k([y,S]),style:m,progressInterval:S,playsinline:b,pip:b,stopOnUnmount:b,light:k([b,y,m]),playIcon:we,previewTabIndex:S,previewAriaLabel:y,fallback:we,oEmbedUrl:y,wrapper:k([y,d,x({render:d.isRequired})]),config:x({soundcloud:x({options:m}),youtube:x({playerVars:m,embedOptions:m,onUnstarted:d}),facebook:x({appId:y,version:y,playerId:y,attributes:m}),dailymotion:x({params:m}),vimeo:x({playerOptions:m,title:y}),mux:x({attributes:m,version:y}),file:x({attributes:m,tracks:J,forceVideo:b,forceAudio:b,forceHLS:b,forceSafariHLS:b,forceDisableHls:b,forceDASH:b,forceFLV:b,hlsOptions:m,hlsVersion:y,dashVersion:y,flvVersion:y}),wistia:x({options:m,playerId:y,customControls:J}),mixcloud:x({options:m}),twitch:x({options:m,playerId:y}),vidyard:x({options:m})}),onReady:d,onStart:d,onPlay:d,onPause:d,onBuffer:d,onBufferEnd:d,onEnded:d,onError:d,onDuration:d,onSeek:d,onPlaybackRateChange:d,onPlaybackQualityChange:d,onProgress:d,onClickPreview:d,onEnablePIP:d,onDisablePIP:d},f=()=>{},Xr={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:f},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:f,onStart:f,onPlay:f,onPause:f,onBuffer:f,onBufferEnd:f,onEnded:f,onError:f,onDuration:f,onSeek:f,onPlaybackRateChange:f,onPlaybackQualityChange:f,onProgress:f,onClickPreview:f,onEnablePIP:f,onDisablePIP:f};var Wr=Object.create,N=Object.defineProperty,Yr=Object.getOwnPropertyDescriptor,Kr=Object.getOwnPropertyNames,Zr=Object.getPrototypeOf,Gr=Object.prototype.hasOwnProperty,Jr=(e,t,r)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Qr=(e,t)=>{for(var r in t)N(e,r,{get:t[r],enumerable:!0})},nt=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Kr(t))!Gr.call(e,n)&&n!==r&&N(e,n,{get:()=>t[n],enumerable:!(a=Yr(t,n))||a.enumerable});return e},ot=(e,t,r)=>(r=e!=null?Wr(Zr(e)):{},nt(t||!e||!e.__esModule?N(r,"default",{value:e,enumerable:!0}):r,e)),ea=e=>nt(N({},"__esModule",{value:!0}),e),u=(e,t,r)=>(Jr(e,typeof t!="symbol"?t+"":t,r),r),it={};Qr(it,{default:()=>W});var ta=ea(it),Oe=ot(C),ra=ot(et),st=at,aa=q;const na=5e3;class W extends Oe.Component{constructor(){super(...arguments),u(this,"mounted",!1),u(this,"isReady",!1),u(this,"isPlaying",!1),u(this,"isLoading",!0),u(this,"loadOnReady",null),u(this,"startOnPlay",!0),u(this,"seekOnPlay",null),u(this,"onDurationCalled",!1),u(this,"handlePlayerMount",t=>{if(this.player){this.progress();return}this.player=t,this.player.load(this.props.url),this.progress()}),u(this,"getInternalPlayer",t=>this.player?this.player[t]:null),u(this,"progress",()=>{if(this.props.url&&this.player&&this.isReady){const t=this.getCurrentTime()||0,r=this.getSecondsLoaded(),a=this.getDuration();if(a){const n={playedSeconds:t,played:t/a};r!==null&&(n.loadedSeconds=r,n.loaded=r/a),(n.playedSeconds!==this.prevPlayed||n.loadedSeconds!==this.prevLoaded)&&this.props.onProgress(n),this.prevPlayed=n.playedSeconds,this.prevLoaded=n.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)}),u(this,"handleReady",()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:t,playing:r,volume:a,muted:n}=this.props;t(),!n&&a!==null&&this.player.setVolume(a),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):r&&this.player.play(),this.handleDurationCheck()}),u(this,"handlePlay",()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:t,onPlay:r,playbackRate:a}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&a!==1&&this.player.setPlaybackRate(a),t(),this.startOnPlay=!1),r(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()}),u(this,"handlePause",t=>{this.isPlaying=!1,this.isLoading||this.props.onPause(t)}),u(this,"handleEnded",()=>{const{activePlayer:t,loop:r,onEnded:a}=this.props;t.loopOnEnded&&r&&this.seekTo(0),r||(this.isPlaying=!1,a())}),u(this,"handleError",(...t)=>{this.isLoading=!1,this.props.onError(...t)}),u(this,"handleDurationCheck",()=>{clearTimeout(this.durationCheckTimeout);const t=this.getDuration();t?this.onDurationCalled||(this.props.onDuration(t),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)}),u(this,"handleLoaded",()=>{this.isLoading=!1})}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(t){if(!this.player)return;const{url:r,playing:a,volume:n,muted:o,playbackRate:l,pip:c,loop:i,activePlayer:_,disableDeferredLoading:v}=this.props;if(!(0,ra.default)(t.url,r)){if(this.isLoading&&!_.forceLoad&&!v&&!(0,aa.isMediaStream)(r)){console.warn(`ReactPlayer: the attempt to load ${r} is being deferred until the player has loaded`),this.loadOnReady=r;return}this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(r,this.isReady)}!t.playing&&a&&!this.isPlaying&&this.player.play(),t.playing&&!a&&this.isPlaying&&this.player.pause(),!t.pip&&c&&this.player.enablePIP&&this.player.enablePIP(),t.pip&&!c&&this.player.disablePIP&&this.player.disablePIP(),t.volume!==n&&n!==null&&this.player.setVolume(n),t.muted!==o&&(o?this.player.mute():(this.player.unmute(),n!==null&&setTimeout(()=>this.player.setVolume(n)))),t.playbackRate!==l&&this.player.setPlaybackRate&&this.player.setPlaybackRate(l),t.loop!==i&&this.player.setLoop&&this.player.setLoop(i)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(t,r,a){if(!this.isReady){t!==0&&(this.seekOnPlay=t,setTimeout(()=>{this.seekOnPlay=null},na));return}if(r?r==="fraction":t>0&&t<1){const o=this.player.getDuration();if(!o){console.warn("ReactPlayer: could not seek using fraction – duration not yet available");return}this.player.seekTo(o*t,a);return}this.player.seekTo(t,a)}render(){const t=this.props.activePlayer;return t?Oe.default.createElement(t,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}}u(W,"displayName","Player");u(W,"propTypes",st.propTypes);u(W,"defaultProps",st.defaultProps);var oa=Object.create,V=Object.defineProperty,ia=Object.getOwnPropertyDescriptor,sa=Object.getOwnPropertyNames,la=Object.getPrototypeOf,pa=Object.prototype.hasOwnProperty,ua=(e,t,r)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ca=(e,t)=>{for(var r in t)V(e,r,{get:t[r],enumerable:!0})},lt=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of sa(t))!pa.call(e,n)&&n!==r&&V(e,n,{get:()=>t[n],enumerable:!(a=ia(t,n))||a.enumerable});return e},U=(e,t,r)=>(r=e!=null?oa(la(e)):{},lt(t||!e||!e.__esModule?V(r,"default",{value:e,enumerable:!0}):r,e)),da=e=>lt(V({},"__esModule",{value:!0}),e),p=(e,t,r)=>(ua(e,typeof t!="symbol"?t+"":t,r),r),pt={};ca(pt,{createReactPlayer:()=>Pa});var ya=da(pt),A=U(C),fa=U(je),Q=U(Rr),xe=U(et),I=at,ut=q,ha=U(ta);const ma=(0,ut.lazy)(()=>w(()=>import("./Preview-84ebfeec.js").then(e=>e.P),["./Preview-84ebfeec.js","./_commonjsHelpers-de833af9.js","./index-8b3efc3f.js"],import.meta.url)),_a=typeof window<"u"&&window.document&&typeof document<"u",ga=typeof K<"u"&&K.window&&K.window.document,ba=Object.keys(I.propTypes),va=_a||ga?A.Suspense:()=>null,j=[],Pa=(e,t)=>{var r;return r=class extends A.Component{constructor(){super(...arguments),p(this,"state",{showPreview:!!this.props.light}),p(this,"references",{wrapper:a=>{this.wrapper=a},player:a=>{this.player=a}}),p(this,"handleClickPreview",a=>{this.setState({showPreview:!1}),this.props.onClickPreview(a)}),p(this,"showPreview",()=>{this.setState({showPreview:!0})}),p(this,"getDuration",()=>this.player?this.player.getDuration():null),p(this,"getCurrentTime",()=>this.player?this.player.getCurrentTime():null),p(this,"getSecondsLoaded",()=>this.player?this.player.getSecondsLoaded():null),p(this,"getInternalPlayer",(a="player")=>this.player?this.player.getInternalPlayer(a):null),p(this,"seekTo",(a,n,o)=>{if(!this.player)return null;this.player.seekTo(a,n,o)}),p(this,"handleReady",()=>{this.props.onReady(this)}),p(this,"getActivePlayer",(0,Q.default)(a=>{for(const n of[...j,...e])if(n.canPlay(a))return n;return t||null})),p(this,"getConfig",(0,Q.default)((a,n)=>{const{config:o}=this.props;return fa.default.all([I.defaultProps.config,I.defaultProps.config[n]||{},o,o[n]||{}])})),p(this,"getAttributes",(0,Q.default)(a=>(0,ut.omit)(this.props,ba))),p(this,"renderActivePlayer",a=>{if(!a)return null;const n=this.getActivePlayer(a);if(!n)return null;const o=this.getConfig(a,n.key);return A.default.createElement(ha.default,{...this.props,key:n.key,ref:this.references.player,config:o,activePlayer:n.lazyPlayer||n,onReady:this.handleReady})})}shouldComponentUpdate(a,n){return!(0,xe.default)(this.props,a)||!(0,xe.default)(this.state,n)}componentDidUpdate(a){const{light:n}=this.props;!a.light&&n&&this.setState({showPreview:!0}),a.light&&!n&&this.setState({showPreview:!1})}renderPreview(a){if(!a)return null;const{light:n,playIcon:o,previewTabIndex:l,oEmbedUrl:c,previewAriaLabel:i}=this.props;return A.default.createElement(ma,{url:a,light:n,playIcon:o,previewTabIndex:l,previewAriaLabel:i,oEmbedUrl:c,onClick:this.handleClickPreview})}render(){const{url:a,style:n,width:o,height:l,fallback:c,wrapper:i}=this.props,{showPreview:_}=this.state,v=this.getAttributes(a),E=typeof i=="string"?this.references.wrapper:void 0;return A.default.createElement(i,{ref:E,style:{...n,width:o,height:l},...v},A.default.createElement(va,{fallback:c},_?this.renderPreview(a):this.renderActivePlayer(a)))}},p(r,"displayName","ReactPlayer"),p(r,"propTypes",I.propTypes),p(r,"defaultProps",I.defaultProps),p(r,"addCustomPlayer",a=>{j.push(a)}),p(r,"removeCustomPlayers",()=>{j.length=0}),p(r,"canPlay",a=>{for(const n of[...j,...e])if(n.canPlay(a))return!0;return!1}),p(r,"canEnablePIP",a=>{for(const n of[...j,...e])if(n.canEnablePIP&&n.canEnablePIP(a))return!0;return!1}),r};var wa=Object.create,Y=Object.defineProperty,Oa=Object.getOwnPropertyDescriptor,xa=Object.getOwnPropertyNames,za=Object.getPrototypeOf,Ca=Object.prototype.hasOwnProperty,Ea=(e,t)=>{for(var r in t)Y(e,r,{get:t[r],enumerable:!0})},ct=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of xa(t))!Ca.call(e,n)&&n!==r&&Y(e,n,{get:()=>t[n],enumerable:!(a=Oa(t,n))||a.enumerable});return e},Ta=(e,t,r)=>(r=e!=null?wa(za(e)):{},ct(t||!e||!e.__esModule?Y(r,"default",{value:e,enumerable:!0}):r,e)),Sa=e=>ct(Y({},"__esModule",{value:!0}),e),dt={};Ea(dt,{default:()=>ja});var Aa=Sa(dt),oe=Ta(zr),Ra=ya;const ka=oe.default[oe.default.length-1];var ja=(0,Ra.createReactPlayer)(oe.default,ka);const Ia=ht(Aa),Ma=""+new URL("play-0c438e53.svg",import.meta.url).href,La=()=>{var c,i;const e=(c=document.cookie.split("; ").find(_=>_.startsWith("OptanonConsent=")))==null?void 0:c.replace("OptanonConsent=",""),[t,r]=C.useState(!!e),[a,n]=C.useState(e);return C.useEffect(()=>{if(e)n(e);else{const _=()=>{var E;const v=(E=document.cookie.split("; ").find(yt=>yt.startsWith("OptanonConsent=")))==null?void 0:E.replace("OptanonConsent=","");v?(r(!0),n(v)):setTimeout(_,1e3)};_()}},[]),t?{canPlay:!!((i=new URLSearchParams(a).get("groups"))!=null&&i.includes("C0002:1"))}:{canPlay:!1}},Da=La,ie=({url:e,thumbnail:t,label:r,description:a})=>{const{canPlay:n}=Da(),o=()=>{if(typeof window<"u"&&typeof window.OneTrust<"u"){const l=window.OneTrust;l==null||l.OnConsentChanged(()=>{window.location.reload()}),l==null||l.ToggleInfoDisplay()}};return s.jsx("div",{style:{position:"relative",width:"100%",margin:"0 auto",aspectRatio:"16 / 9"},children:n?s.jsx(Ia,{controls:!0,playIcon:s.jsx("img",{alt:"play",className:"zep-max-w-[48px] zep-max-h-[48px] md:zep-max-w-[100px] md:zep-max-h-[100px]",src:Ma}),volume:.7,light:t,url:e,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0},config:{file:{attributes:{style:{objectFit:"cover",width:"100%"}}}}}):s.jsx(_t,{label:r,description:a,onClickCookies:o})})},$a=ie;try{ie.displayName="ResponsivePlayer",ie.__docgenInfo={description:"",displayName:"ResponsivePlayer",props:{url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}},thumbnail:{defaultValue:null,description:"",name:"thumbnail",required:!0,type:{name:"string"}},thumbnailAlt:{defaultValue:null,description:"",name:"thumbnailAlt",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}}}}}catch{}const Na={[O.Zps]:he[D.ZpsBg],[O.Cat]:he[D.CatBg]},Va={[O.Zps]:["zep-bg-yellow-500"],[O.Cat]:["zep-bg-yellow-500"]},Ua={[O.Zps]:["zep-text-typography-light-70"],[O.Cat]:["zep-text-secondary-default"]},ee=le([],{variants:{variant:Na},defaultVariants:{variant:O.Cat}}),ze=le([],{variants:{variant:Va},defaultVariants:{variant:O.Cat}}),te=le([],{variants:{variant:Ua},defaultVariants:{variant:O.Cat}}),Ba="!md:zep-flex !zep-px-[0] !md:zep-max-h-[600px] !lg:zep-max-h-[850px] zep-overflow-hidden",se=({id:e,videos:t,variant:r})=>{const[a,n]=C.useState(t[0]),[o,l]=C.useState(B()+t[0].url);C.useEffect(()=>{l(B()+a.url)},[a]);const c=i=>{switch(i){case O.Cat:return D.CatBg;case O.Zps:return D.ZpsBg;default:return D.ZpsBg}};return s.jsxs("div",{id:e,children:[s.jsx(me,{wrapperClassname:z(ee({variant:r}),"!zep-mb-[0]"),className:"zep-py-3 sm:zep-py-4 md:zep-py-5",children:s.jsx(gt,{tagline:a.tagline,headline:a.title,description:[{type:"paragraph",children:[{type:"text",text:a.description}]}],linkHref:a.linkHref,linkText:a.linkText,variant:c(r)})}),s.jsxs(me,{className:Ba,children:[s.jsxs("div",{className:z("zep-w-full zep-relative",(t==null?void 0:t.length)>1&&"md:zep-w-[80%]"),children:[s.jsx($a,{label:a.cookiesResetLabel,description:a.cookiesLayerDescription,thumbnailAlt:a.thumbnailAlt,url:a.url,thumbnail:a.thumbnail},o),t.length>1&&s.jsx("div",{className:z("zep-hidden md:zep-flex zep-w-full md:zep-w-[25%] zep-flex-col zep-cursor-pointer zep-absolute zep-right-[-25%] zep-top-[0px] zep-h-full zep-overflow-scroll",ee({variant:r}),"md:zep-bg-[unset] md:zep-bg-none"),children:t.map((i,_)=>s.jsxs("div",{style:{transform:`translateY(-${16*_}px)`},className:"zep-flex zep-items-center zep-gap-1",children:[s.jsx("div",{onClick:()=>n(i),className:z("zep-pr-1 md:zep-pr-[0px] md:zep-pl-1 zep-pb-1 zep-pt-1 relative zep-max-w-[186px] md:zep-max-w-[unset] zep-h-full zep-max-h-[127px] md:zep-max-h-[unset] zep-w-full",a===i&&ze({variant:r})),children:s.jsxs("div",{className:"zep-relative",children:[s.jsx("img",{alt:i.title,src:i.thumbnail,className:"zep-max-w-[170px] md:zep-max-w-[unset] zep-max-h-[95px] md:zep-max-h-[unset] zep-w-full zep-object-cover"}),a===i?s.jsx("div",{className:"zep-absolute zep-inset-[0px] zep-bg-[#000000] zep-opacity-70"}):s.jsx("div",{className:"zep-absolute zep-inset-[0px] zep-bg-[#000000] zep-opacity-40"}),s.jsx("div",{className:"zep-hidden zep-top-[0px] zep-absolute md:zep-flex zep-items-center zep-h-full zep-w-full zep-px-[8px]",children:s.jsx("h3",{className:z("zep-typography-headlineSM-fluid-cqi zep-top-[0px] zep-line-clamp-2",a===i?te({variant:r}):"zep-text-typography-light-100 "),children:i.title})})]})}),s.jsx("h3",{className:z("md:zep-hidden zep-typography-headlineSM-fluid-cqi zep-line-clamp-2",a===i?te({variant:r}):"zep-text-typography-light-100 "),children:i.title})]},B()+i.title))})]}),t.length>1&&s.jsx("div",{className:z("zep-w-full md:zep-hidden md:zep-bg-[unset] md:zep-bg-none",ee({variant:r})),children:t.map((i,_)=>s.jsxs("div",{style:{transform:`translateY(-${16*_}px)`},className:"zep-flex zep-items-center zep-gap-1 ",onClick:()=>n(i),children:[s.jsx("div",{className:z("zep-pr-1 md:zep-pr-[0px] md:zep-pl-1 zep-pb-1 zep-pt-1 relative zep-max-w-[186px] sm:zep-max-w-[266px] md:zep-max-w-[unset] zep-h-full zep-max-h-[127px] sm:zep-max-h-[172px] md:zep-max-h-[unset]",a===i&&ze({variant:r})),children:s.jsxs("div",{className:"zep-relative",children:[s.jsx("img",{alt:i.title,src:i.thumbnail,className:"zep-w-[170px] zep-h-[95px] sm:zep-w-[250px] sm:zep-h-[140px] zep-object-cover"}),a===i?s.jsx("div",{className:"zep-absolute zep-inset-[0px] zep-bg-[#000000] zep-opacity-70"}):s.jsx("div",{className:"zep-absolute zep-inset-[0px] zep-bg-[#000000] zep-opacity-40"})]})}),s.jsx("h3",{className:z("md:zep-hidden zep-typography-headlineSM-fluid-cqi zep-line-clamp-3 zep-w-1/2 zep-pr-1",a===i?te({variant:r}):"zep-text-typography-light-100 "),children:i.title})]},B()+i.title))})]})]})};try{se.displayName="Video",se.__docgenInfo={description:"",displayName:"Video",props:{videos:{defaultValue:null,description:"",name:"videos",required:!0,type:{name:"SingleVideo[]"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const Ha={title:"Components/Video",component:se,tags:["autodocs"],argTypes:{variant:{control:{type:"radio",options:Object.keys(O)}}}},M={args:{videos:[{title:"Big Buck Bunny with title larger than 3 lines",tagline:"By Blender Foundation",description:`Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit aint no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.

Licensed under the Creative Commons Attribution license
http://www.bigbuckbunny.org`,url:"https://videos.pexels.com/video-files/20422317/20422317-hd_1920_1080_25fps.mp4",thumbnail:"https://media.istockphoto.com/id/2065674519/photo/rolling-says-macro.jpg?s=2048x2048&w=is&k=20&c=FO-u3p_njEoIh7GusFYgrOo1RxF0EXobx0BXH6vMB4Q=",thumbnailAlt:"alt",cookiesResetLabel:"Reset Cookies",cookiesLayerDescription:"This video requires cookies to be enabled. Please accept cookies to proceed."}],variant:O.Cat}},L={args:{videos:Array.from({length:7}).map(()=>({title:"Big Buck Bunny with title larger than 3 lines",tagline:"By Blender Foundation",description:`Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit aint no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.

Licensed under the Creative Commons Attribution license
http://www.bigbuckbunny.org`,url:"https://videos.pexels.com/video-files/20422317/20422317-hd_1920_1080_25fps.mp4",thumbnail:"https://media.istockphoto.com/id/2065674519/photo/rolling-says-macro.jpg?s=2048x2048&w=is&k=20&c=FO-u3p_njEoIh7GusFYgrOo1RxF0EXobx0BXH6vMB4Q=",thumbnailAlt:"alt",cookiesResetLabel:"Reset Cookies",cookiesLayerDescription:"This video requires cookies to be enabled. Please accept cookies to proceed."})),variant:O.Cat}};var Ce,Ee,Te;M.parameters={...M.parameters,docs:{...(Ce=M.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Te=(Ee=M.parameters)==null?void 0:Ee.docs)==null?void 0:Te.source}}};var Se,Ae,Re;L.parameters={...L.parameters,docs:{...(Se=L.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Re=(Ae=L.parameters)==null?void 0:Ae.docs)==null?void 0:Re.source}}};const Fa=["Default","MultiVideo"],rn=Object.freeze(Object.defineProperty({__proto__:null,Default:M,MultiVideo:L,__namedExportsOrder:Fa,default:Ha},Symbol.toStringTag,{value:"Module"}));export{rn as V,_r as p,q as u};
