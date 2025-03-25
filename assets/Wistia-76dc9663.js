import{g as f}from"./_commonjsHelpers-de833af9.js";import{r as g}from"./index-8b3efc3f.js";import{u as v,p as w}from"./Video.stories-b4ae834b.js";function O(e,t){for(var a=0;a<t.length;a++){const s=t[a];if(typeof s!="string"&&!Array.isArray(s)){for(const r in s)if(r!=="default"&&!(r in e)){const o=Object.getOwnPropertyDescriptor(s,r);o&&Object.defineProperty(e,r,o.get?o:{enumerable:!0,get:()=>s[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var C=Object.create,i=Object.defineProperty,k=Object.getOwnPropertyDescriptor,D=Object.getOwnPropertyNames,E=Object.getPrototypeOf,S=Object.prototype.hasOwnProperty,R=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,j=(e,t)=>{for(var a in t)i(e,a,{get:t[a],enumerable:!0})},h=(e,t,a,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of D(t))!S.call(e,r)&&r!==a&&i(e,r,{get:()=>t[r],enumerable:!(s=k(t,r))||s.enumerable});return e},I=(e,t,a)=>(a=e!=null?C(E(e)):{},h(t||!e||!e.__esModule?i(a,"default",{value:e,enumerable:!0}):a,e)),W=e=>h(i({},"__esModule",{value:!0}),e),n=(e,t,a)=>(R(e,typeof t!="symbol"?t+"":t,a),a),d={};j(d,{default:()=>l});var _=W(d),y=I(g),c=v,P=w;const M="https://fast.wistia.com/assets/external/E-v1.js",x="Wistia",A="wistia-player-";class l extends y.Component{constructor(){super(...arguments),n(this,"callPlayer",c.callPlayer),n(this,"playerID",this.props.config.playerId||`${A}${(0,c.randomString)()}`),n(this,"onPlay",(...t)=>this.props.onPlay(...t)),n(this,"onPause",(...t)=>this.props.onPause(...t)),n(this,"onSeek",(...t)=>this.props.onSeek(...t)),n(this,"onEnded",(...t)=>this.props.onEnded(...t)),n(this,"onPlaybackRateChange",(...t)=>this.props.onPlaybackRateChange(...t)),n(this,"mute",()=>{this.callPlayer("mute")}),n(this,"unmute",()=>{this.callPlayer("unmute")})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(t){const{playing:a,muted:s,controls:r,onReady:o,config:p,onError:b}=this.props;(0,c.getSDK)(M,x).then(m=>{p.customControls&&p.customControls.forEach(u=>m.defineControl(u)),window._wq=window._wq||[],window._wq.push({id:this.playerID,options:{autoPlay:a,silentAutoPlay:"allow",muted:s,controlsVisibleOnLoad:r,fullscreenButton:r,playbar:r,playbackRateControl:r,qualityControl:r,volumeControl:r,settingsControl:r,smallPlayButton:r,...p.options},onReady:u=>{this.player=u,this.unbind(),this.player.bind("play",this.onPlay),this.player.bind("pause",this.onPause),this.player.bind("seek",this.onSeek),this.player.bind("end",this.onEnded),this.player.bind("playbackratechange",this.onPlaybackRateChange),o()}})},b)}unbind(){this.player.unbind("play",this.onPlay),this.player.unbind("pause",this.onPause),this.player.unbind("seek",this.onSeek),this.player.unbind("end",this.onEnded),this.player.unbind("playbackratechange",this.onPlaybackRateChange)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){this.unbind(),this.callPlayer("remove")}seekTo(t,a=!0){this.callPlayer("time",t),a||this.pause()}setVolume(t){this.callPlayer("volume",t)}setPlaybackRate(t){this.callPlayer("playbackRate",t)}getDuration(){return this.callPlayer("duration")}getCurrentTime(){return this.callPlayer("time")}getSecondsLoaded(){return null}render(){const{url:t}=this.props,a=t&&t.match(P.MATCH_URL_WISTIA)[1],s=`wistia_embed wistia_async_${a}`,r={width:"100%",height:"100%"};return y.default.createElement("div",{id:this.playerID,key:a,className:s,style:r})}}n(l,"displayName","Wistia");n(l,"canPlay",P.canPlay.wistia);n(l,"loopOnEnded",!0);const L=f(_),q=O({__proto__:null,default:L},[_]);export{q as W};
