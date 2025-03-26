import{G as P,a as $}from"./global-variants-893e06e6.js";import{j as s}from"./jsx-runtime-1a9d9a93.js";import{c as le}from"./index-ff2c9236.js";import{c as z}from"./clsx-0839fdbe.js";import{r as A}from"./index-8b3efc3f.js";import{b as he}from"./commonCSS-cc68a568.js";import{L as me}from"./Layout-fc6ef0e0.js";import{a as yt,c as K,g as ft}from"./_commonjsHelpers-de833af9.js";import{_ as v}from"./iframe-2d463b6c.js";import{p as ht}from"./index-9d475cdf.js";import{H as mt}from"./HeaderLongComponent-70ced68d.js";const y=[];for(let e=0;e<256;++e)y.push((e+256).toString(16).slice(1));function _t(e,t=0){return(y[e[t+0]]+y[e[t+1]]+y[e[t+2]]+y[e[t+3]]+"-"+y[e[t+4]]+y[e[t+5]]+"-"+y[e[t+6]]+y[e[t+7]]+"-"+y[e[t+8]]+y[e[t+9]]+"-"+y[e[t+10]]+y[e[t+11]]+y[e[t+12]]+y[e[t+13]]+y[e[t+14]]+y[e[t+15]]).toLowerCase()}let Z;const gt=new Uint8Array(16);function bt(){if(!Z){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Z=crypto.getRandomValues.bind(crypto)}return Z(gt)}const vt=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),_e={randomUUID:vt};function B(e,t,r){if(_e.randomUUID&&!t&&!e)return _e.randomUUID();e=e||{};const a=e.random||(e.rng||bt)();if(a[6]=a[6]&15|64,a[8]=a[8]&63|128,t){r=r||0;for(let n=0;n<16;++n)t[r+n]=a[n];return t}return _t(a)}var Pt=function(t,r,a){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script");typeof r=="function"&&(a=r,r={}),r=r||{},a=a||function(){},o.type=r.type||"text/javascript",o.charset=r.charset||"utf8",o.async="async"in r?!!r.async:!0,o.src=t,r.attrs&&wt(o,r.attrs),r.text&&(o.text=""+r.text);var f="onload"in o?ge:Ot;f(o,a),o.onload||ge(o,a),n.appendChild(o)};function wt(e,t){for(var r in t)e.setAttribute(r,t[r])}function ge(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function Ot(e,t){e.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,t(null,e))}}var xt=function(t){return zt(t)&&!Et(t)};function zt(e){return!!e&&typeof e=="object"}function Et(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||At(e)}var St=typeof Symbol=="function"&&Symbol.for,Tt=St?Symbol.for("react.element"):60103;function At(e){return e.$$typeof===Tt}function Ct(e){return Array.isArray(e)?[]:{}}function N(e,t){return t.clone!==!1&&t.isMergeableObject(e)?C(Ct(e),e,t):e}function Rt(e,t,r){return e.concat(t).map(function(a){return N(a,r)})}function jt(e,t){if(!t.customMerge)return C;var r=t.customMerge(e);return typeof r=="function"?r:C}function Mt(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function be(e){return Object.keys(e).concat(Mt(e))}function je(e,t){try{return t in e}catch{return!1}}function It(e,t){return je(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function Lt(e,t,r){var a={};return r.isMergeableObject(e)&&be(e).forEach(function(n){a[n]=N(e[n],r)}),be(t).forEach(function(n){It(e,n)||(je(e,n)&&r.isMergeableObject(t[n])?a[n]=jt(n,r)(e[n],t[n],r):a[n]=N(t[n],r))}),a}function C(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||Rt,r.isMergeableObject=r.isMergeableObject||xt,r.cloneUnlessOtherwiseSpecified=N;var a=Array.isArray(t),n=Array.isArray(e),o=a===n;return o?a?r.arrayMerge(e,t,r):Lt(e,t,r):N(t,r)}C.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(a,n){return C(a,n,r)},{})};var Dt=C,Me=Dt,$t=Object.create,F=Object.defineProperty,Nt=Object.getOwnPropertyDescriptor,kt=Object.getOwnPropertyNames,Vt=Object.getPrototypeOf,Ut=Object.prototype.hasOwnProperty,Bt=(e,t)=>{for(var r in t)F(e,r,{get:t[r],enumerable:!0})},Ie=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of kt(t))!Ut.call(e,n)&&n!==r&&F(e,n,{get:()=>t[n],enumerable:!(a=Nt(t,n))||a.enumerable});return e},pe=(e,t,r)=>(r=e!=null?$t(Vt(e)):{},Ie(t||!e||!e.__esModule?F(r,"default",{value:e,enumerable:!0}):r,e)),Ht=e=>Ie(F({},"__esModule",{value:!0}),e),Le={};Bt(Le,{callPlayer:()=>or,getConfig:()=>ar,getSDK:()=>rr,isBlobUrl:()=>sr,isMediaStream:()=>ir,lazy:()=>Yt,omit:()=>nr,parseEndTime:()=>Qt,parseStartTime:()=>Jt,queryString:()=>tr,randomString:()=>er,supportsWebKitPresentationMode:()=>lr});var X=Ht(Le),Ft=pe(A),Xt=pe(Pt),Wt=pe(Me);const Yt=e=>Ft.default.lazy(async()=>{const t=await e();return typeof t.default=="function"?t:t.default}),qt=/[?&#](?:start|t)=([0-9hms]+)/,Kt=/[?&#]end=([0-9hms]+)/,re=/(\d+)(h|m|s)/g,Zt=/^\d+$/;function De(e,t){if(e instanceof Array)return;const r=e.match(t);if(r){const a=r[1];if(a.match(re))return Gt(a);if(Zt.test(a))return parseInt(a)}}function Gt(e){let t=0,r=re.exec(e);for(;r!==null;){const[,a,n]=r;n==="h"&&(t+=parseInt(a,10)*60*60),n==="m"&&(t+=parseInt(a,10)*60),n==="s"&&(t+=parseInt(a,10)),r=re.exec(e)}return t}function Jt(e){return De(e,qt)}function Qt(e){return De(e,Kt)}function er(){return Math.random().toString(36).substr(2,5)}function tr(e){return Object.keys(e).map(t=>`${t}=${e[t]}`).join("&")}function G(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}const E={},rr=function(t,r,a=null,n=()=>!0,o=Xt.default){const f=G(r);return f&&n(f)?Promise.resolve(f):new Promise((h,i)=>{if(E[t]){E[t].push({resolve:h,reject:i});return}E[t]=[{resolve:h,reject:i}];const x=O=>{E[t].forEach(R=>R.resolve(O))};if(a){const O=window[a];window[a]=function(){O&&O(),x(G(r))}}o(t,O=>{O?(E[t].forEach(R=>R.reject(O)),E[t]=null):a||x(G(r))})})};function ar(e,t){return(0,Wt.default)(t.config,e.config)}function nr(e,...t){const r=[].concat(...t),a={},n=Object.keys(e);for(const o of n)r.indexOf(o)===-1&&(a[o]=e[o]);return a}function or(e,...t){if(!this.player||!this.player[e]){let r=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c – `;return this.player?this.player[e]||(r+="The method was not available"):r+="The player was not available",console.warn(r,"font-weight: bold",""),null}return this.player[e](...t)}function ir(e){return typeof window<"u"&&typeof window.MediaStream<"u"&&e instanceof window.MediaStream}function sr(e){return/^blob:/.test(e)}function lr(e=document.createElement("video")){const t=/iPhone|iPod/.test(navigator.userAgent)===!1;return e.webkitSupportsPresentationMode&&typeof e.webkitSetPresentationMode=="function"&&t}var ue=Object.defineProperty,pr=Object.getOwnPropertyDescriptor,ur=Object.getOwnPropertyNames,cr=Object.prototype.hasOwnProperty,dr=(e,t)=>{for(var r in t)ue(e,r,{get:t[r],enumerable:!0})},yr=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of ur(t))!cr.call(e,n)&&n!==r&&ue(e,n,{get:()=>t[n],enumerable:!(a=pr(t,n))||a.enumerable});return e},fr=e=>yr(ue({},"__esModule",{value:!0}),e),$e={};dr($e,{AUDIO_EXTENSIONS:()=>ce,DASH_EXTENSIONS:()=>Ge,FLV_EXTENSIONS:()=>Je,HLS_EXTENSIONS:()=>ye,MATCH_URL_DAILYMOTION:()=>Ye,MATCH_URL_FACEBOOK:()=>Ue,MATCH_URL_FACEBOOK_WATCH:()=>Be,MATCH_URL_KALTURA:()=>Ze,MATCH_URL_MIXCLOUD:()=>qe,MATCH_URL_MUX:()=>Ve,MATCH_URL_SOUNDCLOUD:()=>Ne,MATCH_URL_STREAMABLE:()=>He,MATCH_URL_TWITCH_CHANNEL:()=>We,MATCH_URL_TWITCH_VIDEO:()=>Xe,MATCH_URL_VIDYARD:()=>Ke,MATCH_URL_VIMEO:()=>ke,MATCH_URL_WISTIA:()=>Fe,MATCH_URL_YOUTUBE:()=>ae,VIDEO_EXTENSIONS:()=>de,canPlay:()=>mr});var hr=fr($e),ve=X;const ae=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,Ne=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,ke=/vimeo\.com\/(?!progressive_redirect).+/,Ve=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,Ue=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,Be=/^https?:\/\/fb\.watch\/.+$/,He=/streamable\.com\/([a-z0-9]+)$/,Fe=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,Xe=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,We=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,Ye=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,qe=/mixcloud\.com\/([^/]+\/[^/]+)/,Ke=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,Ze=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,ce=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,de=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,ye=/\.(m3u8)($|\?)/i,Ge=/\.(mpd)($|\?)/i,Je=/\.(flv)($|\?)/i,ne=e=>{if(e instanceof Array){for(const t of e)if(typeof t=="string"&&ne(t)||ne(t.src))return!0;return!1}return(0,ve.isMediaStream)(e)||(0,ve.isBlobUrl)(e)?!0:ce.test(e)||de.test(e)||ye.test(e)||Ge.test(e)||Je.test(e)},mr={youtube:e=>e instanceof Array?e.every(t=>ae.test(t)):ae.test(e),soundcloud:e=>Ne.test(e)&&!ce.test(e),vimeo:e=>ke.test(e)&&!de.test(e)&&!ye.test(e),mux:e=>Ve.test(e),facebook:e=>Ue.test(e)||Be.test(e),streamable:e=>He.test(e),wistia:e=>Fe.test(e),twitch:e=>Xe.test(e)||We.test(e),dailymotion:e=>Ye.test(e),mixcloud:e=>qe.test(e),vidyard:e=>Ke.test(e),kaltura:e=>Ze.test(e),file:ne};var fe=Object.defineProperty,_r=Object.getOwnPropertyDescriptor,gr=Object.getOwnPropertyNames,br=Object.prototype.hasOwnProperty,vr=(e,t)=>{for(var r in t)fe(e,r,{get:t[r],enumerable:!0})},Pr=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of gr(t))!br.call(e,n)&&n!==r&&fe(e,n,{get:()=>t[n],enumerable:!(a=_r(t,n))||a.enumerable});return e},wr=e=>Pr(fe({},"__esModule",{value:!0}),e),Qe={};vr(Qe,{default:()=>xr});var Or=wr(Qe),b=X,_=hr,xr=[{key:"youtube",name:"YouTube",canPlay:_.canPlay.youtube,lazyPlayer:(0,b.lazy)(()=>v(()=>import("./YouTube-1e1cac3a.js").then(e=>e.Y),["./YouTube-1e1cac3a.js","./_commonjsHelpers-de833af9.js","./index-8b3efc3f.js"],import.meta.url))},{key:"soundcloud",name:"SoundCloud",canPlay:_.canPlay.soundcloud,lazyPlayer:(0,b.lazy)(()=>v(()=>import("./SoundCloud-098fe571.js").then(e=>e.S),["./SoundCloud-098fe571.js","./_commonjsHelpers-de833af9.js","./index-8b3efc3f.js"],import.meta.url))},{key:"vimeo",name:"Vimeo",canPlay:_.canPlay.vimeo,lazyPlayer:(0,b.lazy)(()=>v(()=>import("./Vimeo-8d63cd38.js").then(e=>e.V),["./Vimeo-8d63cd38.js","./_commonjsHelpers-de833af9.js","./index-8b3efc3f.js"],import.meta.url))},{key:"mux",name:"Mux",canPlay:_.canPlay.mux,lazyPlayer:(0,b.lazy)(()=>v(()=>import("./Mux-9c182392.js").then(e=>e.M),["./Mux-9c182392.js","./iframe-2d463b6c.js","./_commonjsHelpers-de833af9.js","./index-8b3efc3f.js"],import.meta.url))},{key:"facebook",name:"Facebook",canPlay:_.canPlay.facebook,lazyPlayer:(0,b.lazy)(()=>v(()=>import("./Facebook-307129f4.js").then(e=>e.F),["./Facebook-307129f4.js","./_commonjsHelpers-de833af9.js","./index-8b3efc3f.js"],import.meta.url))},{key:"streamable",name:"Streamable",canPlay:_.canPlay.streamable,lazyPlayer:(0,b.lazy)(()=>v(()=>import("./Streamable-8cd8f8d5.js").then(e=>e.S),["./Streamable-8cd8f8d5.js","./_commonjsHelpers-de833af9.js","./index-8b3efc3f.js"],import.meta.url))},{key:"wistia",name:"Wistia",canPlay:_.canPlay.wistia,lazyPlayer:(0,b.lazy)(()=>v(()=>import("./Wistia-381d62a0.js").then(e=>e.W),["./Wistia-381d62a0.js","./_commonjsHelpers-de833af9.js","./index-8b3efc3f.js"],import.meta.url))},{key:"twitch",name:"Twitch",canPlay:_.canPlay.twitch,lazyPlayer:(0,b.lazy)(()=>v(()=>import("./Twitch-dee4bf89.js").then(e=>e.T),["./Twitch-dee4bf89.js","./_commonjsHelpers-de833af9.js","./index-8b3efc3f.js"],import.meta.url))},{key:"dailymotion",name:"DailyMotion",canPlay:_.canPlay.dailymotion,lazyPlayer:(0,b.lazy)(()=>v(()=>import("./DailyMotion-c77da645.js").then(e=>e.D),["./DailyMotion-c77da645.js","./_commonjsHelpers-de833af9.js","./index-8b3efc3f.js"],import.meta.url))},{key:"mixcloud",name:"Mixcloud",canPlay:_.canPlay.mixcloud,lazyPlayer:(0,b.lazy)(()=>v(()=>import("./Mixcloud-8ddc8da7.js").then(e=>e.M),["./Mixcloud-8ddc8da7.js","./_commonjsHelpers-de833af9.js","./index-8b3efc3f.js"],import.meta.url))},{key:"vidyard",name:"Vidyard",canPlay:_.canPlay.vidyard,lazyPlayer:(0,b.lazy)(()=>v(()=>import("./Vidyard-410b4fef.js").then(e=>e.V),["./Vidyard-410b4fef.js","./_commonjsHelpers-de833af9.js","./index-8b3efc3f.js"],import.meta.url))},{key:"kaltura",name:"Kaltura",canPlay:_.canPlay.kaltura,lazyPlayer:(0,b.lazy)(()=>v(()=>import("./Kaltura-1a93458b.js").then(e=>e.K),["./Kaltura-1a93458b.js","./_commonjsHelpers-de833af9.js","./index-8b3efc3f.js"],import.meta.url))},{key:"file",name:"FilePlayer",canPlay:_.canPlay.file,canEnablePIP:e=>_.canPlay.file(e)&&(document.pictureInPictureEnabled||(0,b.supportsWebKitPresentationMode)())&&!_.AUDIO_EXTENSIONS.test(e),lazyPlayer:(0,b.lazy)(()=>v(()=>import("./FilePlayer-13ac5f71.js").then(e=>e.F),["./FilePlayer-13ac5f71.js","./_commonjsHelpers-de833af9.js","./index-8b3efc3f.js"],import.meta.url))}],Pe=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function zr(e,t){return!!(e===t||Pe(e)&&Pe(t))}function Er(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!zr(e[r],t[r]))return!1;return!0}function Sr(e,t){t===void 0&&(t=Er);var r,a=[],n,o=!1;function f(){for(var h=[],i=0;i<arguments.length;i++)h[i]=arguments[i];return o&&r===this&&t(h,a)||(n=e.apply(this,h),o=!0,r=this,a=h),n}return f}const Tr=Object.freeze(Object.defineProperty({__proto__:null,default:Sr},Symbol.toStringTag,{value:"Module"})),Ar=yt(Tr);var Cr=typeof Element<"u",Rr=typeof Map=="function",jr=typeof Set=="function",Mr=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function H(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,a,n;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(a=r;a--!==0;)if(!H(e[a],t[a]))return!1;return!0}var o;if(Rr&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(o=e.entries();!(a=o.next()).done;)if(!t.has(a.value[0]))return!1;for(o=e.entries();!(a=o.next()).done;)if(!H(a.value[1],t.get(a.value[0])))return!1;return!0}if(jr&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(o=e.entries();!(a=o.next()).done;)if(!t.has(a.value[0]))return!1;return!0}if(Mr&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(r=e.length,r!=t.length)return!1;for(a=r;a--!==0;)if(e[a]!==t[a])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(n=Object.keys(e),r=n.length,r!==Object.keys(t).length)return!1;for(a=r;a--!==0;)if(!Object.prototype.hasOwnProperty.call(t,n[a]))return!1;if(Cr&&e instanceof Element)return!1;for(a=r;a--!==0;)if(!((n[a]==="_owner"||n[a]==="__v"||n[a]==="__o")&&e.$$typeof)&&!H(e[n[a]],t[n[a]]))return!1;return!0}return e!==e&&t!==t}var et=function(t,r){try{return H(t,r)}catch(a){if((a.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw a}},Ir=Object.create,W=Object.defineProperty,Lr=Object.getOwnPropertyDescriptor,Dr=Object.getOwnPropertyNames,$r=Object.getPrototypeOf,Nr=Object.prototype.hasOwnProperty,kr=(e,t)=>{for(var r in t)W(e,r,{get:t[r],enumerable:!0})},tt=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Dr(t))!Nr.call(e,n)&&n!==r&&W(e,n,{get:()=>t[n],enumerable:!(a=Lr(t,n))||a.enumerable});return e},Vr=(e,t,r)=>(r=e!=null?Ir($r(e)):{},tt(t||!e||!e.__esModule?W(r,"default",{value:e,enumerable:!0}):r,e)),Ur=e=>tt(W({},"__esModule",{value:!0}),e),rt={};kr(rt,{defaultProps:()=>Fr,propTypes:()=>Hr});var at=Ur(rt),Br=Vr(ht);const{string:c,bool:g,number:S,array:J,oneOfType:j,shape:w,object:m,func:u,node:we}=Br.default,Hr={url:j([c,J,m]),playing:g,loop:g,controls:g,volume:S,muted:g,playbackRate:S,width:j([c,S]),height:j([c,S]),style:m,progressInterval:S,playsinline:g,pip:g,stopOnUnmount:g,light:j([g,c,m]),playIcon:we,previewTabIndex:S,previewAriaLabel:c,fallback:we,oEmbedUrl:c,wrapper:j([c,u,w({render:u.isRequired})]),config:w({soundcloud:w({options:m}),youtube:w({playerVars:m,embedOptions:m,onUnstarted:u}),facebook:w({appId:c,version:c,playerId:c,attributes:m}),dailymotion:w({params:m}),vimeo:w({playerOptions:m,title:c}),mux:w({attributes:m,version:c}),file:w({attributes:m,tracks:J,forceVideo:g,forceAudio:g,forceHLS:g,forceSafariHLS:g,forceDisableHls:g,forceDASH:g,forceFLV:g,hlsOptions:m,hlsVersion:c,dashVersion:c,flvVersion:c}),wistia:w({options:m,playerId:c,customControls:J}),mixcloud:w({options:m}),twitch:w({options:m,playerId:c}),vidyard:w({options:m})}),onReady:u,onStart:u,onPlay:u,onPause:u,onBuffer:u,onBufferEnd:u,onEnded:u,onError:u,onDuration:u,onSeek:u,onPlaybackRateChange:u,onPlaybackQualityChange:u,onProgress:u,onClickPreview:u,onEnablePIP:u,onDisablePIP:u},d=()=>{},Fr={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:d},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:d,onStart:d,onPlay:d,onPause:d,onBuffer:d,onBufferEnd:d,onEnded:d,onError:d,onDuration:d,onSeek:d,onPlaybackRateChange:d,onPlaybackQualityChange:d,onProgress:d,onClickPreview:d,onEnablePIP:d,onDisablePIP:d};var Xr=Object.create,k=Object.defineProperty,Wr=Object.getOwnPropertyDescriptor,Yr=Object.getOwnPropertyNames,qr=Object.getPrototypeOf,Kr=Object.prototype.hasOwnProperty,Zr=(e,t,r)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Gr=(e,t)=>{for(var r in t)k(e,r,{get:t[r],enumerable:!0})},nt=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Yr(t))!Kr.call(e,n)&&n!==r&&k(e,n,{get:()=>t[n],enumerable:!(a=Wr(t,n))||a.enumerable});return e},ot=(e,t,r)=>(r=e!=null?Xr(qr(e)):{},nt(t||!e||!e.__esModule?k(r,"default",{value:e,enumerable:!0}):r,e)),Jr=e=>nt(k({},"__esModule",{value:!0}),e),p=(e,t,r)=>(Zr(e,typeof t!="symbol"?t+"":t,r),r),it={};Gr(it,{default:()=>Y});var Qr=Jr(it),Oe=ot(A),ea=ot(et),st=at,ta=X;const ra=5e3;class Y extends Oe.Component{constructor(){super(...arguments),p(this,"mounted",!1),p(this,"isReady",!1),p(this,"isPlaying",!1),p(this,"isLoading",!0),p(this,"loadOnReady",null),p(this,"startOnPlay",!0),p(this,"seekOnPlay",null),p(this,"onDurationCalled",!1),p(this,"handlePlayerMount",t=>{if(this.player){this.progress();return}this.player=t,this.player.load(this.props.url),this.progress()}),p(this,"getInternalPlayer",t=>this.player?this.player[t]:null),p(this,"progress",()=>{if(this.props.url&&this.player&&this.isReady){const t=this.getCurrentTime()||0,r=this.getSecondsLoaded(),a=this.getDuration();if(a){const n={playedSeconds:t,played:t/a};r!==null&&(n.loadedSeconds=r,n.loaded=r/a),(n.playedSeconds!==this.prevPlayed||n.loadedSeconds!==this.prevLoaded)&&this.props.onProgress(n),this.prevPlayed=n.playedSeconds,this.prevLoaded=n.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)}),p(this,"handleReady",()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:t,playing:r,volume:a,muted:n}=this.props;t(),!n&&a!==null&&this.player.setVolume(a),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):r&&this.player.play(),this.handleDurationCheck()}),p(this,"handlePlay",()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:t,onPlay:r,playbackRate:a}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&a!==1&&this.player.setPlaybackRate(a),t(),this.startOnPlay=!1),r(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()}),p(this,"handlePause",t=>{this.isPlaying=!1,this.isLoading||this.props.onPause(t)}),p(this,"handleEnded",()=>{const{activePlayer:t,loop:r,onEnded:a}=this.props;t.loopOnEnded&&r&&this.seekTo(0),r||(this.isPlaying=!1,a())}),p(this,"handleError",(...t)=>{this.isLoading=!1,this.props.onError(...t)}),p(this,"handleDurationCheck",()=>{clearTimeout(this.durationCheckTimeout);const t=this.getDuration();t?this.onDurationCalled||(this.props.onDuration(t),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)}),p(this,"handleLoaded",()=>{this.isLoading=!1})}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(t){if(!this.player)return;const{url:r,playing:a,volume:n,muted:o,playbackRate:f,pip:h,loop:i,activePlayer:x,disableDeferredLoading:O}=this.props;if(!(0,ea.default)(t.url,r)){if(this.isLoading&&!x.forceLoad&&!O&&!(0,ta.isMediaStream)(r)){console.warn(`ReactPlayer: the attempt to load ${r} is being deferred until the player has loaded`),this.loadOnReady=r;return}this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(r,this.isReady)}!t.playing&&a&&!this.isPlaying&&this.player.play(),t.playing&&!a&&this.isPlaying&&this.player.pause(),!t.pip&&h&&this.player.enablePIP&&this.player.enablePIP(),t.pip&&!h&&this.player.disablePIP&&this.player.disablePIP(),t.volume!==n&&n!==null&&this.player.setVolume(n),t.muted!==o&&(o?this.player.mute():(this.player.unmute(),n!==null&&setTimeout(()=>this.player.setVolume(n)))),t.playbackRate!==f&&this.player.setPlaybackRate&&this.player.setPlaybackRate(f),t.loop!==i&&this.player.setLoop&&this.player.setLoop(i)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(t,r,a){if(!this.isReady){t!==0&&(this.seekOnPlay=t,setTimeout(()=>{this.seekOnPlay=null},ra));return}if(r?r==="fraction":t>0&&t<1){const o=this.player.getDuration();if(!o){console.warn("ReactPlayer: could not seek using fraction – duration not yet available");return}this.player.seekTo(o*t,a);return}this.player.seekTo(t,a)}render(){const t=this.props.activePlayer;return t?Oe.default.createElement(t,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}}p(Y,"displayName","Player");p(Y,"propTypes",st.propTypes);p(Y,"defaultProps",st.defaultProps);var aa=Object.create,V=Object.defineProperty,na=Object.getOwnPropertyDescriptor,oa=Object.getOwnPropertyNames,ia=Object.getPrototypeOf,sa=Object.prototype.hasOwnProperty,la=(e,t,r)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,pa=(e,t)=>{for(var r in t)V(e,r,{get:t[r],enumerable:!0})},lt=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of oa(t))!sa.call(e,n)&&n!==r&&V(e,n,{get:()=>t[n],enumerable:!(a=na(t,n))||a.enumerable});return e},U=(e,t,r)=>(r=e!=null?aa(ia(e)):{},lt(t||!e||!e.__esModule?V(r,"default",{value:e,enumerable:!0}):r,e)),ua=e=>lt(V({},"__esModule",{value:!0}),e),l=(e,t,r)=>(la(e,typeof t!="symbol"?t+"":t,r),r),pt={};pa(pt,{createReactPlayer:()=>ba});var ca=ua(pt),T=U(A),da=U(Me),Q=U(Ar),xe=U(et),I=at,ut=X,ya=U(Qr);const fa=(0,ut.lazy)(()=>v(()=>import("./Preview-84ebfeec.js").then(e=>e.P),["./Preview-84ebfeec.js","./_commonjsHelpers-de833af9.js","./index-8b3efc3f.js"],import.meta.url)),ha=typeof window<"u"&&window.document&&typeof document<"u",ma=typeof K<"u"&&K.window&&K.window.document,_a=Object.keys(I.propTypes),ga=ha||ma?T.Suspense:()=>null,M=[],ba=(e,t)=>{var r;return r=class extends T.Component{constructor(){super(...arguments),l(this,"state",{showPreview:!!this.props.light}),l(this,"references",{wrapper:a=>{this.wrapper=a},player:a=>{this.player=a}}),l(this,"handleClickPreview",a=>{this.setState({showPreview:!1}),this.props.onClickPreview(a)}),l(this,"showPreview",()=>{this.setState({showPreview:!0})}),l(this,"getDuration",()=>this.player?this.player.getDuration():null),l(this,"getCurrentTime",()=>this.player?this.player.getCurrentTime():null),l(this,"getSecondsLoaded",()=>this.player?this.player.getSecondsLoaded():null),l(this,"getInternalPlayer",(a="player")=>this.player?this.player.getInternalPlayer(a):null),l(this,"seekTo",(a,n,o)=>{if(!this.player)return null;this.player.seekTo(a,n,o)}),l(this,"handleReady",()=>{this.props.onReady(this)}),l(this,"getActivePlayer",(0,Q.default)(a=>{for(const n of[...M,...e])if(n.canPlay(a))return n;return t||null})),l(this,"getConfig",(0,Q.default)((a,n)=>{const{config:o}=this.props;return da.default.all([I.defaultProps.config,I.defaultProps.config[n]||{},o,o[n]||{}])})),l(this,"getAttributes",(0,Q.default)(a=>(0,ut.omit)(this.props,_a))),l(this,"renderActivePlayer",a=>{if(!a)return null;const n=this.getActivePlayer(a);if(!n)return null;const o=this.getConfig(a,n.key);return T.default.createElement(ya.default,{...this.props,key:n.key,ref:this.references.player,config:o,activePlayer:n.lazyPlayer||n,onReady:this.handleReady})})}shouldComponentUpdate(a,n){return!(0,xe.default)(this.props,a)||!(0,xe.default)(this.state,n)}componentDidUpdate(a){const{light:n}=this.props;!a.light&&n&&this.setState({showPreview:!0}),a.light&&!n&&this.setState({showPreview:!1})}renderPreview(a){if(!a)return null;const{light:n,playIcon:o,previewTabIndex:f,oEmbedUrl:h,previewAriaLabel:i}=this.props;return T.default.createElement(fa,{url:a,light:n,playIcon:o,previewTabIndex:f,previewAriaLabel:i,oEmbedUrl:h,onClick:this.handleClickPreview})}render(){const{url:a,style:n,width:o,height:f,fallback:h,wrapper:i}=this.props,{showPreview:x}=this.state,O=this.getAttributes(a),R=typeof i=="string"?this.references.wrapper:void 0;return T.default.createElement(i,{ref:R,style:{...n,width:o,height:f},...O},T.default.createElement(ga,{fallback:h},x?this.renderPreview(a):this.renderActivePlayer(a)))}},l(r,"displayName","ReactPlayer"),l(r,"propTypes",I.propTypes),l(r,"defaultProps",I.defaultProps),l(r,"addCustomPlayer",a=>{M.push(a)}),l(r,"removeCustomPlayers",()=>{M.length=0}),l(r,"canPlay",a=>{for(const n of[...M,...e])if(n.canPlay(a))return!0;return!1}),l(r,"canEnablePIP",a=>{for(const n of[...M,...e])if(n.canEnablePIP&&n.canEnablePIP(a))return!0;return!1}),r};var va=Object.create,q=Object.defineProperty,Pa=Object.getOwnPropertyDescriptor,wa=Object.getOwnPropertyNames,Oa=Object.getPrototypeOf,xa=Object.prototype.hasOwnProperty,za=(e,t)=>{for(var r in t)q(e,r,{get:t[r],enumerable:!0})},ct=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of wa(t))!xa.call(e,n)&&n!==r&&q(e,n,{get:()=>t[n],enumerable:!(a=Pa(t,n))||a.enumerable});return e},Ea=(e,t,r)=>(r=e!=null?va(Oa(e)):{},ct(t||!e||!e.__esModule?q(r,"default",{value:e,enumerable:!0}):r,e)),Sa=e=>ct(q({},"__esModule",{value:!0}),e),dt={};za(dt,{default:()=>Ra});var Ta=Sa(dt),oe=Ea(Or),Aa=ca;const Ca=oe.default[oe.default.length-1];var Ra=(0,Aa.createReactPlayer)(oe.default,Ca);const ja=ft(Ta),Ma=""+new URL("play-0c438e53.svg",import.meta.url).href,ie=({url:e,thumbnail:t})=>s.jsx("div",{style:{position:"relative",width:"100%",margin:"0 auto",aspectRatio:"16 / 9"},children:s.jsx(ja,{controls:!0,playIcon:s.jsx("img",{alt:"play",className:"zep-max-w-[48px] zep-max-h-[48px] md:zep-max-w-[100px] md:zep-max-h-[100px]",src:Ma}),volume:.7,light:t,url:e,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0},config:{file:{attributes:{style:{objectFit:"cover",width:"100%"}}}}})}),Ia=ie;try{ie.displayName="ResponsivePlayer",ie.__docgenInfo={description:"",displayName:"ResponsivePlayer",props:{url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}},thumbnail:{defaultValue:null,description:"",name:"thumbnail",required:!0,type:{name:"string"}},thumbnailAlt:{defaultValue:null,description:"",name:"thumbnailAlt",required:!0,type:{name:"string"}}}}}catch{}const La={[P.Zps]:he[$.ZpsBg],[P.Cat]:he[$.CatBg]},Da={[P.Zps]:["zep-bg-yellow-500"],[P.Cat]:["zep-bg-yellow-500"]},$a={[P.Zps]:["zep-text-typography-light-70"],[P.Cat]:["zep-text-secondary-default"]},ee=le([],{variants:{variant:La},defaultVariants:{variant:P.Cat}}),ze=le([],{variants:{variant:Da},defaultVariants:{variant:P.Cat}}),te=le([],{variants:{variant:$a},defaultVariants:{variant:P.Cat}}),Na="!md:zep-flex !zep-px-[0] !md:zep-max-h-[600px] !lg:zep-max-h-[850px] zep-overflow-hidden",se=({id:e,videos:t,variant:r})=>{const[a,n]=A.useState(t[0]),[o,f]=A.useState(B()+t[0].url);A.useEffect(()=>{f(B()+a.url)},[a]);const h=i=>{switch(i){case P.Cat:return $.CatBg;case P.Zps:return $.ZpsBg;default:return $.ZpsBg}};return s.jsxs("div",{id:e,children:[s.jsx(me,{wrapperClassname:z(ee({variant:r}),"!zep-mb-[0]"),className:"zep-py-3 sm:zep-py-4 md:zep-py-5",children:s.jsx(mt,{tagline:a.tagline,headline:a.title,description:[{type:"paragraph",children:[{type:"text",text:a.description}]}],linkHref:a.linkHref,linkText:a.linkText,variant:h(r)})}),s.jsxs(me,{className:Na,children:[s.jsxs("div",{className:z("zep-w-full zep-relative",(t==null?void 0:t.length)>1&&"md:zep-w-[80%]"),children:[s.jsx(Ia,{thumbnailAlt:a.thumbnailAlt,url:a.url,thumbnail:a.thumbnail},o),t.length>1&&s.jsx("div",{className:z("zep-hidden md:zep-flex zep-w-full md:zep-w-[25%] zep-flex-col zep-cursor-pointer zep-absolute zep-right-[-25%] zep-top-[0px] zep-h-full zep-overflow-scroll",ee({variant:r}),"md:zep-bg-[unset] md:zep-bg-none"),children:t.map((i,x)=>s.jsxs("div",{style:{transform:`translateY(-${16*x}px)`},className:"zep-flex zep-items-center zep-gap-1",children:[s.jsx("div",{onClick:()=>n(i),className:z("zep-pr-1 md:zep-pr-[0px] md:zep-pl-1 zep-pb-1 zep-pt-1 relative zep-max-w-[186px] md:zep-max-w-[unset] zep-h-full zep-max-h-[127px] md:zep-max-h-[unset] zep-w-full",a===i&&ze({variant:r})),children:s.jsxs("div",{className:"zep-relative",children:[s.jsx("img",{alt:i.title,src:i.thumbnail,className:"zep-max-w-[170px] md:zep-max-w-[unset] zep-max-h-[95px] md:zep-max-h-[unset] zep-w-full zep-object-cover"}),a===i?s.jsx("div",{className:"zep-absolute zep-inset-[0px] zep-bg-[#000000] zep-opacity-70"}):s.jsx("div",{className:"zep-absolute zep-inset-[0px] zep-bg-[#000000] zep-opacity-40"}),s.jsx("div",{className:"zep-hidden zep-top-[0px] zep-absolute md:zep-flex zep-items-center zep-h-full zep-w-full zep-px-[8px]",children:s.jsx("h3",{className:z("zep-typography-headlineSM-fluid-cqi zep-top-[0px] zep-line-clamp-2",a===i?te({variant:r}):"zep-text-typography-light-100 "),children:i.title})})]})}),s.jsx("h3",{className:z("md:zep-hidden zep-typography-headlineSM-fluid-cqi zep-line-clamp-2",a===i?te({variant:r}):"zep-text-typography-light-100 "),children:i.title})]},B()+i.title))})]}),t.length>1&&s.jsx("div",{className:z("zep-w-full md:zep-hidden md:zep-bg-[unset] md:zep-bg-none",ee({variant:r})),children:t.map((i,x)=>s.jsxs("div",{style:{transform:`translateY(-${16*x}px)`},className:"zep-flex zep-items-center zep-gap-1 ",onClick:()=>n(i),children:[s.jsx("div",{className:z("zep-pr-1 md:zep-pr-[0px] md:zep-pl-1 zep-pb-1 zep-pt-1 relative zep-max-w-[186px] sm:zep-max-w-[266px] md:zep-max-w-[unset] zep-h-full zep-max-h-[127px] sm:zep-max-h-[172px] md:zep-max-h-[unset]",a===i&&ze({variant:r})),children:s.jsxs("div",{className:"zep-relative",children:[s.jsx("img",{alt:i.title,src:i.thumbnail,className:"zep-w-[170px] zep-h-[95px] sm:zep-w-[250px] sm:zep-h-[140px] zep-object-cover"}),a===i?s.jsx("div",{className:"zep-absolute zep-inset-[0px] zep-bg-[#000000] zep-opacity-70"}):s.jsx("div",{className:"zep-absolute zep-inset-[0px] zep-bg-[#000000] zep-opacity-40"})]})}),s.jsx("h3",{className:z("md:zep-hidden zep-typography-headlineSM-fluid-cqi zep-line-clamp-3 zep-w-1/2 zep-pr-1",a===i?te({variant:r}):"zep-text-typography-light-100 "),children:i.title})]},B()+i.title))})]})]})};try{se.displayName="Video",se.__docgenInfo={description:"",displayName:"Video",props:{videos:{defaultValue:null,description:"",name:"videos",required:!0,type:{name:"SingleVideo[]"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const ka={title:"Components/Video",component:se,tags:["autodocs"],argTypes:{variant:{control:{type:"radio",options:Object.keys(P)}}}},L={args:{videos:[{title:"Big Buck Bunny with title larger than 3 lines",tagline:"By Blender Foundation",description:`Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit aint no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.

Licensed under the Creative Commons Attribution license
http://www.bigbuckbunny.org`,url:"https://videos.pexels.com/video-files/20422317/20422317-hd_1920_1080_25fps.mp4",thumbnail:"https://media.istockphoto.com/id/2065674519/photo/rolling-says-macro.jpg?s=2048x2048&w=is&k=20&c=FO-u3p_njEoIh7GusFYgrOo1RxF0EXobx0BXH6vMB4Q=",thumbnailAlt:"alt"}],variant:P.Cat}},D={args:{videos:Array.from({length:7}).map(()=>({title:"Big Buck Bunny with title larger than 3 lines",tagline:"By Blender Foundation",description:`Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit aint no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.

Licensed under the Creative Commons Attribution license
http://www.bigbuckbunny.org`,url:"https://videos.pexels.com/video-files/20422317/20422317-hd_1920_1080_25fps.mp4",thumbnail:"https://media.istockphoto.com/id/2065674519/photo/rolling-says-macro.jpg?s=2048x2048&w=is&k=20&c=FO-u3p_njEoIh7GusFYgrOo1RxF0EXobx0BXH6vMB4Q=",thumbnailAlt:"alt"})),variant:P.Cat}};var Ee,Se,Te;L.parameters={...L.parameters,docs:{...(Ee=L.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    videos: [{
      title: 'Big Buck Bunny with title larger than 3 lines',
      tagline: 'By Blender Foundation',
      description: 'Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit aint no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\\n\\nLicensed under the Creative Commons Attribution license\\nhttp://www.bigbuckbunny.org',
      url: 'https://videos.pexels.com/video-files/20422317/20422317-hd_1920_1080_25fps.mp4',
      thumbnail: 'https://media.istockphoto.com/id/2065674519/photo/rolling-says-macro.jpg?s=2048x2048&w=is&k=20&c=FO-u3p_njEoIh7GusFYgrOo1RxF0EXobx0BXH6vMB4Q=',
      thumbnailAlt: 'alt'
    }],
    variant: GlobalVariants.Cat
  }
}`,...(Te=(Se=L.parameters)==null?void 0:Se.docs)==null?void 0:Te.source}}};var Ae,Ce,Re;D.parameters={...D.parameters,docs:{...(Ae=D.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    videos: Array.from({
      length: 7
    }).map(() => ({
      title: 'Big Buck Bunny with title larger than 3 lines',
      tagline: 'By Blender Foundation',
      description: 'Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit aint no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\\n\\nLicensed under the Creative Commons Attribution license\\nhttp://www.bigbuckbunny.org',
      url: 'https://videos.pexels.com/video-files/20422317/20422317-hd_1920_1080_25fps.mp4',
      thumbnail: 'https://media.istockphoto.com/id/2065674519/photo/rolling-says-macro.jpg?s=2048x2048&w=is&k=20&c=FO-u3p_njEoIh7GusFYgrOo1RxF0EXobx0BXH6vMB4Q=',
      thumbnailAlt: 'alt'
    })),
    variant: GlobalVariants.Cat
  }
}`,...(Re=(Ce=D.parameters)==null?void 0:Ce.docs)==null?void 0:Re.source}}};const Va=["Default","MultiVideo"],Ja=Object.freeze(Object.defineProperty({__proto__:null,Default:L,MultiVideo:D,__namedExportsOrder:Va,default:ka},Symbol.toStringTag,{value:"Module"}));export{Ja as V,hr as p,X as u};
