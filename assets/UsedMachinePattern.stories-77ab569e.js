import{j as f}from"./jsx-runtime-1a9d9a93.js";import{r as c,R as V}from"./index-8b3efc3f.js";import{i as $}from"./index.es31-95f1013f.js";import{h as pe}from"./index.es13-3580608c.js";import{i as Ue}from"./index.es36-e8d10e84.js";import{f as le,e as Y,l as v,t as Le,o as j,I as B,C as G,A as ve,m as K,i as He,s as ae,N as qe,b as se,p as Ve,d as Ye,c as w,r as Qe}from"./index.es74-b2c6e214.js";import{L as Ke}from"./Layout-7f280280.js";import{u as We,b as Ne,M,a as R,c as D,d as I}from"./used-machine-locales-f263dd8e.js";import{U as Ze}from"./UsedMachineCard-b7c45c98.js";import{U as ye}from"./UsedMachineFilters-a2caba29.js";import{B as xe,Z as Se}from"./ZpsButton-8be1ee95.js";import{L}from"./global-variants-893e06e6.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-0839fdbe.js";import"./UsedMachineDescription-0a230480.js";import"./index.es32-fbb642fb.js";import"./index.es16-298408db.js";import"./Slider-166e2e5b.js";import"./index.es24-01fa0cce.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./getUrlWithoutTrailingSlash-e7815512.js";import"./tw-merge-1166cefb.js";const Xe=e=>{if(!e)return 0;const n=e.getBoundingClientRect().bottom;return window.innerHeight-n};function De(e,n){let[t,r]=c.useState(e),o=le(e);return Y(()=>r(o.current),[o,r,...n]),t}function Je(e,n,t){let[r,o]=c.useState(t),a=e!==void 0,i=c.useRef(a),l=c.useRef(!1),s=c.useRef(!1);return a&&!i.current&&!l.current?(l.current=!0,i.current=a,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")):!a&&i.current&&!s.current&&(s.current=!0,i.current=a,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")),[a?e:r,v(d=>(a||o(d),n==null?void 0:n(d)))]}function et(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(n=>setTimeout(()=>{throw n}))}function Q(){let e=[],n={addEventListener(t,r,o,a){return t.addEventListener(r,o,a),n.add(()=>t.removeEventListener(r,o,a))},requestAnimationFrame(...t){let r=requestAnimationFrame(...t);return n.add(()=>cancelAnimationFrame(r))},nextFrame(...t){return n.requestAnimationFrame(()=>n.requestAnimationFrame(...t))},setTimeout(...t){let r=setTimeout(...t);return n.add(()=>clearTimeout(r))},microTask(...t){let r={current:!0};return et(()=>{r.current&&t[0]()}),n.add(()=>{r.current=!1})},style(t,r,o){let a=t.style.getPropertyValue(r);return Object.assign(t.style,{[r]:o}),this.add(()=>{Object.assign(t.style,{[r]:a})})},group(t){let r=Q();return t(r),this.add(()=>r.dispose())},add(t){return e.push(t),()=>{let r=e.indexOf(t);if(r>=0)for(let o of e.splice(r,1))o()}},dispose(){for(let t of e.splice(0))t()}};return n}function oe(){let[e]=c.useState(Q);return c.useEffect(()=>()=>e.dispose(),[e]),e}let ze=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var tt=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(tt||{}),rt=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(rt||{}),nt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(nt||{}),me=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(me||{});function Re(e,n=0){var t;return e===((t=Le(e))==null?void 0:t.body)?!1:j(n,{0(){return e.matches(ze)},1(){let r=e;for(;r!==null;){if(r.matches(ze))return!0;r=r.parentElement}return!1}})}var at=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(at||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function ot(e,n=t=>t){return e.slice().sort((t,r)=>{let o=n(t),a=n(r);if(o===null||a===null)return 0;let i=o.compareDocumentPosition(a);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function it(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function lt(){return/Android/gi.test(window.navigator.userAgent)}function st(){return it()||lt()}function re(e,n,t){let r=le(n);c.useEffect(()=>{function o(a){r.current(a)}return document.addEventListener(e,o,t),()=>document.removeEventListener(e,o,t)},[e,t])}function ut(e,n,t){let r=le(n);c.useEffect(()=>{function o(a){r.current(a)}return window.addEventListener(e,o,t),()=>window.removeEventListener(e,o,t)},[e,t])}function ct(e,n,t=!0){let r=c.useRef(!1);c.useEffect(()=>{requestAnimationFrame(()=>{r.current=t})},[t]);function o(i,l){if(!r.current||i.defaultPrevented)return;let s=l(i);if(s===null||!s.getRootNode().contains(s)||!s.isConnected)return;let d=function g(p){return typeof p=="function"?g(p()):Array.isArray(p)||p instanceof Set?p:[p]}(e);for(let g of d){if(g===null)continue;let p=g instanceof HTMLElement?g:g.current;if(p!=null&&p.contains(s)||i.composed&&i.composedPath().includes(p))return}return!Re(s,me.Loose)&&s.tabIndex!==-1&&i.preventDefault(),n(i,s)}let a=c.useRef(null);re("pointerdown",i=>{var l,s;r.current&&(a.current=((s=(l=i.composedPath)==null?void 0:l.call(i))==null?void 0:s[0])||i.target)},!0),re("mousedown",i=>{var l,s;r.current&&(a.current=((s=(l=i.composedPath)==null?void 0:l.call(i))==null?void 0:s[0])||i.target)},!0),re("click",i=>{st()||a.current&&(o(i,()=>a.current),a.current=null)},!0),re("touchend",i=>o(i,()=>i.target instanceof HTMLElement?i.target:null),!0),ut("blur",i=>o(i,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}let Ee=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function Oe(e){var n,t;let r=(n=e.innerText)!=null?n:"",o=e.cloneNode(!0);if(!(o instanceof HTMLElement))return r;let a=!1;for(let l of o.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))l.remove(),a=!0;let i=a?(t=o.innerText)!=null?t:"":r;return Ee.test(i)&&(i=i.replace(Ee,"")),i}function dt(e){let n=e.getAttribute("aria-label");if(typeof n=="string")return n.trim();let t=e.getAttribute("aria-labelledby");if(t){let r=t.split(" ").map(o=>{let a=document.getElementById(o);if(a){let i=a.getAttribute("aria-label");return typeof i=="string"?i.trim():Oe(a).trim()}return null}).filter(Boolean);if(r.length>0)return r.join(", ")}return Oe(e).trim()}function pt(e){let n=c.useRef(""),t=c.useRef("");return v(()=>{let r=e.current;if(!r)return"";let o=r.innerText;if(n.current===o)return t.current;let a=dt(r).trim().toLowerCase();return n.current=o,t.current=a,a})}function we(e){return[e.screenX,e.screenY]}function ft(){let e=c.useRef([-1,-1]);return{wasMoved(n){let t=we(n);return e.current[0]===t[0]&&e.current[1]===t[1]?!1:(e.current=t,!0)},update(n){e.current=we(n)}}}let mt="div";var Ie=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(Ie||{});function gt(e,n){var t;let{features:r=1,...o}=e,a={ref:n,"aria-hidden":(r&2)===2?!0:(t=o["aria-hidden"])!=null?t:void 0,hidden:(r&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return G({ourProps:a,theirProps:o,slot:{},defaultTag:mt,name:"Hidden"})}let bt=B(gt);function ht(e){throw new Error("Unexpected object: "+e)}var N=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(N||{});function vt(e,n){let t=n.resolveItems();if(t.length<=0)return null;let r=n.resolveActiveIndex(),o=r??-1;switch(e.focus){case 0:{for(let a=0;a<t.length;++a)if(!n.resolveDisabled(t[a],a,t))return a;return r}case 1:{for(let a=o-1;a>=0;--a)if(!n.resolveDisabled(t[a],a,t))return a;return r}case 2:{for(let a=o+1;a<t.length;++a)if(!n.resolveDisabled(t[a],a,t))return a;return r}case 3:{for(let a=t.length-1;a>=0;--a)if(!n.resolveDisabled(t[a],a,t))return a;return r}case 4:{for(let a=0;a<t.length;++a)if(n.resolveId(t[a],a,t)===e.id)return a;return r}case 5:return null;default:ht(e)}}function Ae(e={},n=null,t=[]){for(let[r,o]of Object.entries(e))Fe(t,Pe(n,r),o);return t}function Pe(e,n){return e?e+"["+n+"]":n}function Fe(e,n,t){if(Array.isArray(t))for(let[r,o]of t.entries())Fe(e,Pe(n,r.toString()),o);else t instanceof Date?e.push([n,t.toISOString()]):typeof t=="boolean"?e.push([n,t?"1":"0"]):typeof t=="string"?e.push([n,t]):typeof t=="number"?e.push([n,`${t}`]):t==null?e.push([n,""]):Ae(t,n,e)}var yt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(yt||{}),xt=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(xt||{}),St=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(St||{}),zt=(e=>(e[e.OpenListbox=0]="OpenListbox",e[e.CloseListbox=1]="CloseListbox",e[e.GoToOption=2]="GoToOption",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterOption=5]="RegisterOption",e[e.UnregisterOption=6]="UnregisterOption",e[e.RegisterLabel=7]="RegisterLabel",e))(zt||{});function fe(e,n=t=>t){let t=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,r=ot(n(e.options.slice()),a=>a.dataRef.current.domRef.current),o=t?r.indexOf(t):null;return o===-1&&(o=null),{options:r,activeOptionIndex:o}}let Et={1(e){return e.dataRef.current.disabled||e.listboxState===1?e:{...e,activeOptionIndex:null,listboxState:1}},0(e){if(e.dataRef.current.disabled||e.listboxState===0)return e;let n=e.activeOptionIndex,{isSelected:t}=e.dataRef.current,r=e.options.findIndex(o=>t(o.dataRef.current.value));return r!==-1&&(n=r),{...e,listboxState:0,activeOptionIndex:n}},2(e,n){var t;if(e.dataRef.current.disabled||e.listboxState===1)return e;let r=fe(e),o=vt(n,{resolveItems:()=>r.options,resolveActiveIndex:()=>r.activeOptionIndex,resolveId:a=>a.id,resolveDisabled:a=>a.dataRef.current.disabled});return{...e,...r,searchQuery:"",activeOptionIndex:o,activationTrigger:(t=n.trigger)!=null?t:1}},3:(e,n)=>{if(e.dataRef.current.disabled||e.listboxState===1)return e;let t=e.searchQuery!==""?0:1,r=e.searchQuery+n.value.toLowerCase(),o=(e.activeOptionIndex!==null?e.options.slice(e.activeOptionIndex+t).concat(e.options.slice(0,e.activeOptionIndex+t)):e.options).find(i=>{var l;return!i.dataRef.current.disabled&&((l=i.dataRef.current.textValue)==null?void 0:l.startsWith(r))}),a=o?e.options.indexOf(o):-1;return a===-1||a===e.activeOptionIndex?{...e,searchQuery:r}:{...e,searchQuery:r,activeOptionIndex:a,activationTrigger:1}},4(e){return e.dataRef.current.disabled||e.listboxState===1||e.searchQuery===""?e:{...e,searchQuery:""}},5:(e,n)=>{let t={id:n.id,dataRef:n.dataRef},r=fe(e,o=>[...o,t]);return e.activeOptionIndex===null&&e.dataRef.current.isSelected(n.dataRef.current.value)&&(r.activeOptionIndex=r.options.indexOf(t)),{...e,...r}},6:(e,n)=>{let t=fe(e,r=>{let o=r.findIndex(a=>a.id===n.id);return o!==-1&&r.splice(o,1),r});return{...e,...t,activationTrigger:1}},7:(e,n)=>({...e,labelId:n.id})},ge=c.createContext(null);ge.displayName="ListboxActionsContext";function W(e){let n=c.useContext(ge);if(n===null){let t=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,W),t}return n}let be=c.createContext(null);be.displayName="ListboxDataContext";function Z(e){let n=c.useContext(be);if(n===null){let t=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,Z),t}return n}function Ot(e,n){return j(n.type,Et,e,n)}let wt=c.Fragment;function Mt(e,n){let{value:t,defaultValue:r,form:o,name:a,onChange:i,by:l=(m,b)=>m===b,disabled:s=!1,horizontal:d=!1,multiple:g=!1,...p}=e;const E=d?"horizontal":"vertical";let T=K(n),[y=g?[]:void 0,S]=Je(t,i,r),[h,u]=c.useReducer(Ot,{dataRef:c.createRef(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),z=c.useRef({static:!1,hold:!1}),A=c.useRef(null),F=c.useRef(null),_=c.useRef(null),O=v(typeof l=="string"?(m,b)=>{let C=l;return(m==null?void 0:m[C])===(b==null?void 0:b[C])}:l),P=c.useCallback(m=>j(x.mode,{1:()=>y.some(b=>O(b,m)),0:()=>O(y,m)}),[y]),x=c.useMemo(()=>({...h,value:y,disabled:s,mode:g?1:0,orientation:E,compare:O,isSelected:P,optionsPropsRef:z,labelRef:A,buttonRef:F,optionsRef:_}),[y,s,g,h]);Y(()=>{h.dataRef.current=x},[x]),ct([x.buttonRef,x.optionsRef],(m,b)=>{var C;u({type:1}),Re(b,me.Loose)||(m.preventDefault(),(C=x.buttonRef.current)==null||C.focus())},x.listboxState===0);let ue=c.useMemo(()=>({open:x.listboxState===0,disabled:s,value:y}),[x,s,y]),X=v(m=>{let b=x.options.find(C=>C.id===m);b&&de(b.dataRef.current.value)}),J=v(()=>{if(x.activeOptionIndex!==null){let{dataRef:m,id:b}=x.options[x.activeOptionIndex];de(m.current.value),u({type:2,focus:N.Specific,id:b})}}),ee=v(()=>u({type:0})),k=v(()=>u({type:1})),U=v((m,b,C)=>m===N.Specific?u({type:2,focus:N.Specific,id:b,trigger:C}):u({type:2,focus:m,trigger:C})),ce=v((m,b)=>(u({type:5,id:m,dataRef:b}),()=>u({type:6,id:m}))),$e=v(m=>(u({type:7,id:m}),()=>u({type:7,id:null}))),de=v(m=>j(x.mode,{0(){return S==null?void 0:S(m)},1(){let b=x.value.slice(),C=b.findIndex(H=>O(H,m));return C===-1?b.push(m):b.splice(C,1),S==null?void 0:S(b)}})),je=v(m=>u({type:3,value:m})),ke=v(()=>u({type:4})),Be=c.useMemo(()=>({onChange:de,registerOption:ce,registerLabel:$e,goToOption:U,closeListbox:k,openListbox:ee,selectActiveOption:J,selectOption:X,search:je,clearSearch:ke}),[]),Ge={ref:T},te=c.useRef(null),_e=oe();return c.useEffect(()=>{te.current&&r!==void 0&&_e.addEventListener(te.current,"reset",()=>{S==null||S(r)})},[te,S]),V.createElement(ge.Provider,{value:Be},V.createElement(be.Provider,{value:x},V.createElement(He,{value:j(x.listboxState,{0:ae.Open,1:ae.Closed})},a!=null&&y!=null&&Ae({[a]:y}).map(([m,b],C)=>V.createElement(bt,{features:Ie.Hidden,ref:C===0?H=>{var he;te.current=(he=H==null?void 0:H.closest("form"))!=null?he:null}:void 0,...qe({key:m,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:o,disabled:s,name:m,value:b})})),G({ourProps:Ge,theirProps:p,slot:ue,defaultTag:wt,name:"Listbox"}))))}let Tt="button";function Ct(e,n){var t;let r=se(),{id:o=`headlessui-listbox-button-${r}`,...a}=e,i=Z("Listbox.Button"),l=W("Listbox.Button"),s=K(i.buttonRef,n),d=oe(),g=v(h=>{switch(h.key){case w.Space:case w.Enter:case w.ArrowDown:h.preventDefault(),l.openListbox(),d.nextFrame(()=>{i.value||l.goToOption(N.First)});break;case w.ArrowUp:h.preventDefault(),l.openListbox(),d.nextFrame(()=>{i.value||l.goToOption(N.Last)});break}}),p=v(h=>{switch(h.key){case w.Space:h.preventDefault();break}}),E=v(h=>{if(Qe(h.currentTarget))return h.preventDefault();i.listboxState===0?(l.closeListbox(),d.nextFrame(()=>{var u;return(u=i.buttonRef.current)==null?void 0:u.focus({preventScroll:!0})})):(h.preventDefault(),l.openListbox())}),T=De(()=>{if(i.labelId)return[i.labelId,o].join(" ")},[i.labelId,o]),y=c.useMemo(()=>({open:i.listboxState===0,disabled:i.disabled,value:i.value}),[i]),S={ref:s,id:o,type:Ve(e,i.buttonRef),"aria-haspopup":"listbox","aria-controls":(t=i.optionsRef.current)==null?void 0:t.id,"aria-expanded":i.listboxState===0,"aria-labelledby":T,disabled:i.disabled,onKeyDown:g,onKeyUp:p,onClick:E};return G({ourProps:S,theirProps:a,slot:y,defaultTag:Tt,name:"Listbox.Button"})}let Lt="label";function Nt(e,n){let t=se(),{id:r=`headlessui-listbox-label-${t}`,...o}=e,a=Z("Listbox.Label"),i=W("Listbox.Label"),l=K(a.labelRef,n);Y(()=>i.registerLabel(r),[r]);let s=v(()=>{var g;return(g=a.buttonRef.current)==null?void 0:g.focus({preventScroll:!0})}),d=c.useMemo(()=>({open:a.listboxState===0,disabled:a.disabled}),[a]);return G({ourProps:{ref:l,id:r,onClick:s},theirProps:o,slot:d,defaultTag:Lt,name:"Listbox.Label"})}let Dt="ul",Rt=ve.RenderStrategy|ve.Static;function It(e,n){var t;let r=se(),{id:o=`headlessui-listbox-options-${r}`,...a}=e,i=Z("Listbox.Options"),l=W("Listbox.Options"),s=K(i.optionsRef,n),d=oe(),g=oe(),p=Ye(),E=(()=>p!==null?(p&ae.Open)===ae.Open:i.listboxState===0)();c.useEffect(()=>{var u;let z=i.optionsRef.current;z&&i.listboxState===0&&z!==((u=Le(z))==null?void 0:u.activeElement)&&z.focus({preventScroll:!0})},[i.listboxState,i.optionsRef]);let T=v(u=>{switch(g.dispose(),u.key){case w.Space:if(i.searchQuery!=="")return u.preventDefault(),u.stopPropagation(),l.search(u.key);case w.Enter:if(u.preventDefault(),u.stopPropagation(),i.activeOptionIndex!==null){let{dataRef:z}=i.options[i.activeOptionIndex];l.onChange(z.current.value)}i.mode===0&&(l.closeListbox(),Q().nextFrame(()=>{var z;return(z=i.buttonRef.current)==null?void 0:z.focus({preventScroll:!0})}));break;case j(i.orientation,{vertical:w.ArrowDown,horizontal:w.ArrowRight}):return u.preventDefault(),u.stopPropagation(),l.goToOption(N.Next);case j(i.orientation,{vertical:w.ArrowUp,horizontal:w.ArrowLeft}):return u.preventDefault(),u.stopPropagation(),l.goToOption(N.Previous);case w.Home:case w.PageUp:return u.preventDefault(),u.stopPropagation(),l.goToOption(N.First);case w.End:case w.PageDown:return u.preventDefault(),u.stopPropagation(),l.goToOption(N.Last);case w.Escape:return u.preventDefault(),u.stopPropagation(),l.closeListbox(),d.nextFrame(()=>{var z;return(z=i.buttonRef.current)==null?void 0:z.focus({preventScroll:!0})});case w.Tab:u.preventDefault(),u.stopPropagation();break;default:u.key.length===1&&(l.search(u.key),g.setTimeout(()=>l.clearSearch(),350));break}}),y=De(()=>{var u;return(u=i.buttonRef.current)==null?void 0:u.id},[i.buttonRef.current]),S=c.useMemo(()=>({open:i.listboxState===0}),[i]),h={"aria-activedescendant":i.activeOptionIndex===null||(t=i.options[i.activeOptionIndex])==null?void 0:t.id,"aria-multiselectable":i.mode===1?!0:void 0,"aria-labelledby":y,"aria-orientation":i.orientation,id:o,onKeyDown:T,role:"listbox",tabIndex:0,ref:s};return G({ourProps:h,theirProps:a,slot:S,defaultTag:Dt,features:Rt,visible:E,name:"Listbox.Options"})}let At="li";function Pt(e,n){let t=se(),{id:r=`headlessui-listbox-option-${t}`,disabled:o=!1,value:a,...i}=e,l=Z("Listbox.Option"),s=W("Listbox.Option"),d=l.activeOptionIndex!==null?l.options[l.activeOptionIndex].id===r:!1,g=l.isSelected(a),p=c.useRef(null),E=pt(p),T=le({disabled:o,value:a,domRef:p,get textValue(){return E()}}),y=K(n,p);Y(()=>{if(l.listboxState!==0||!d||l.activationTrigger===0)return;let O=Q();return O.requestAnimationFrame(()=>{var P,x;(x=(P=p.current)==null?void 0:P.scrollIntoView)==null||x.call(P,{block:"nearest"})}),O.dispose},[p,d,l.listboxState,l.activationTrigger,l.activeOptionIndex]),Y(()=>s.registerOption(r,T),[T,r]);let S=v(O=>{if(o)return O.preventDefault();s.onChange(a),l.mode===0&&(s.closeListbox(),Q().nextFrame(()=>{var P;return(P=l.buttonRef.current)==null?void 0:P.focus({preventScroll:!0})}))}),h=v(()=>{if(o)return s.goToOption(N.Nothing);s.goToOption(N.Specific,r)}),u=ft(),z=v(O=>u.update(O)),A=v(O=>{u.wasMoved(O)&&(o||d||s.goToOption(N.Specific,r,0))}),F=v(O=>{u.wasMoved(O)&&(o||d&&s.goToOption(N.Nothing))}),_=c.useMemo(()=>({active:d,selected:g,disabled:o}),[d,g,o]);return G({ourProps:{id:r,ref:y,role:"option",tabIndex:o===!0?void 0:-1,"aria-disabled":o===!0?!0:void 0,"aria-selected":g,disabled:void 0,onClick:S,onFocus:h,onPointerEnter:z,onMouseEnter:z,onPointerMove:A,onMouseMove:A,onPointerLeave:F,onMouseLeave:F},theirProps:i,slot:_,defaultTag:At,name:"Listbox.Option"})}let Ft=B(Mt),$t=B(Ct),jt=B(Nt),kt=B(It),Bt=B(Pt),q=Object.assign(Ft,{Button:$t,Label:jt,Options:kt,Option:Bt});const Gt=268,_t=(e,n)=>$("zep-flex zep-w-full zep-items-center zep-justify-between zep-bg-background-light zep-px-1 zep-py-0.75",{"zep-bg-greyscale-200":e},{"zep-bg-greyscale-300":n},{"zep-pr-3":n}),Ut=c.forwardRef(({disabled:e=!1,items:n,message:t,label:r,placeholder:o,required:a,notRequiredHint:i="(optional)",readOnly:l=!1,state:s="default",...d},g)=>{const[p,E]=c.useState(null),T=V.useRef(null),y=c.useMemo(()=>s==="error",[s]),S=c.useMemo(()=>s==="info",[s]),h=c.useMemo(()=>e||l,[e,l]),u=c.useMemo(()=>y?"zep-text-error":S?"zep-text-info":"",[y,S]),z=A=>{d!=null&&d.onChange&&(d==null||d.onChange(A)),E(A)};return f.jsxs("div",{className:Ue($("zep-relative","zep-inline-block","zep-text-left","zep-w-full",{"zep-cursor-not-allowed zep-opacity-disabled":e},d.className)),"data-testid":"zep-drop-down",children:[f.jsx(q,{disabled:h,...d,onChange:z,value:(d==null?void 0:d.value)||p,ref:g,children:({open:A})=>{var X,J,ee;const F=Xe(T.current)<Gt,_=l?void 0:o,O=((X=d==null?void 0:d.value)==null?void 0:X.name)||(p==null?void 0:p.name)||_,P=$("zep-bg-background-light","zep-inline-flex","zep-justify-between","zep-border-solid","zep-pl-1","zep-pr-0.75","zep-py-0.75","zep-font-roboto","zep-w-full","zep-outline-none",{"zep-text-opacity-disabled":e,"zep-text-typography-dark-100/70":!((J=d==null?void 0:d.value)!=null&&J.name||p!=null&&p.name||l)&&!e,"zep-text-typography-dark-100":(((ee=d==null?void 0:d.value)==null?void 0:ee.name)||(p==null?void 0:p.name)||l)&&!e,"zep-bg-background-medium":l,"zep-ring":A,"zep-active:zep-ring zep-ring-focus zep-ring-offset-1 focus-visible:zep-ring":!h,"zep-cursor-not-allowed":h,"zep-border-2 zep-border-error":y,"zep-border-1 zep-border-neutral-dark-default":!y}),x=$("zep-absolute","zep-shadow-[0_0_4px_rgba(0,0,0,0.24)]","zep-py-0.25","zep-z-10","zep-w-full","zep-max-h-[268px]","zep-origin-top-right","zep-rounded-4","zep-bg-background-light","focus:zep-outline-none","zep-overflow-hidden","zep-overflow-y-auto",{"zep-bottom-full zep-mb-[-25px]":F,"zep-mt-0.25":!F}),ue=$("zep-shrink-0","zep-transition-transform","zep-duration-300",{"zep-rotate-180":A,"zep-text-opacity-disabled":h,"zep-text-typography-dark-100":!h});return f.jsxs(f.Fragment,{children:[r&&f.jsxs(q.Label,{className:$("zep-block","zep-mb-0.5",{"zep-text-opacity-disabled":e}),children:[r,!a&&f.jsx("span",{className:"zep-ml-0.25",children:i})]}),f.jsx(q.Button,{className:P,ref:T,title:O,"data-testid":"zep-drop-down-button",children:f.jsxs(f.Fragment,{children:[f.jsx("span",{className:"zep-truncate",children:O}),f.jsx(pe,{className:ue,name:"chevron-mini-down",role:"img",size:24})]})}),f.jsx(q.Options,{className:x,"data-testid":"zep-drop-down-menu",children:n.map(k=>f.jsx(q.Option,{value:k,title:k.name,className:({active:U,selected:ce})=>_t(U,ce),children:({selected:U})=>f.jsxs(f.Fragment,{children:[f.jsx("span",{className:"zep-truncate",children:k.name}),U&&f.jsx(pe,{name:"check",role:"img",size:24,className:"zep-absolute zep-right-1"})]})},k.id))})]})}}),t&&f.jsxs("div",{className:$("zep-mt-0.25",{"zep-text-typography-dark-100":!y&&!S},"zep-text-0.875","zep-flex",u),children:[s!=="default"&&f.jsx(pe,{name:y?"warning-triangle-filled":"info-circle-filled",role:"img",size:24,className:"zep-mr-0.5 zep-shrink-0"}),f.jsx("span",{className:"zep-mt-0.125",children:t})]})]})}),ie=({setFilters:e,locale:n,filters:t,powerOptions:r,cards:o,total:a,currentTotal:i,setCurrentTotal:l})=>{const s=c.useMemo(()=>We[n],[n]),d=Object.values(Ne).map(E=>({id:E,name:s[E]})),g=E=>{e(T=>({...T,sort:E.id}))},p=()=>{l(E=>E+10)};return f.jsxs(Ke,{testId:"zep-used-machine-pattern",className:"md:zep-flex xl:zep-gap-5 md:zep-gap-3 zep-py-3 sm:zep-py-4 md:zep-py-5",wrapperClassname:"zep-bg-greyscale-200",children:[f.jsx(ye,{className:"zep-hidden md:zep-flex",setFilters:e,locale:n,filters:t,powerOptions:r}),f.jsxs("div",{className:"zep-grow zep-flex zep-flex-col zep-gap-2",children:[f.jsxs("div",{className:"zep-flex zep-w-full zep-justify-between md:zep-items-end zep-items-center zep-text-primary-default",children:[f.jsx("span",{className:"zep-typography-bodyStrong",children:`${a} ${s.results}`}),f.jsx(ye,{className:"md:zep-hidden",setFilters:e,locale:n,filters:t,powerOptions:r}),f.jsx(Ut,{label:s.sortBy,required:!0,className:"!zep-w-[334px] zep-hidden md:zep-block",items:d,placeholder:s.sortBy,onChange:g,value:{id:t.sort?t.sort:"",name:t.sort?s[t.sort]:s.sortBy}})]}),a>0?o.map((E,T)=>f.jsx(Ze,{...E},T)):f.jsxs("div",{className:"zep-flex zep-flex-col zep-gap-3",children:[f.jsxs("div",{className:"zep-text-primary-default zep-flex zep-flex-col zep-gap-2.5",children:[f.jsx("h3",{className:"zep-typography-headlineLG-fluid-cqi",children:s.zeroResultsFoundTitle}),f.jsx("p",{className:"zep-typography-bodyText",children:s.zeroResultsFoundDescription})]}),f.jsx(xe,{className:"sm:!zep-w-fit",variant:Se.Primary,children:s.contactExperts})]}),i<a&&f.jsx(xe,{className:"sm:!zep-w-fit zep-self-center",variant:Se.SecondaryZps,onClick:p,children:s.loadMore})]})]})};try{ie.displayName="UsedMachinePattern",ie.__docgenInfo={description:"",displayName:"UsedMachinePattern",props:{cards:{defaultValue:null,description:"",name:"cards",required:!0,type:{name:"UsedMachineCardProps[]"}},total:{defaultValue:null,description:"",name:"total",required:!0,type:{name:"number"}},currentTotal:{defaultValue:null,description:"",name:"currentTotal",required:!0,type:{name:"number"}},setCurrentTotal:{defaultValue:null,description:"",name:"setCurrentTotal",required:!0,type:{name:"Dispatch<SetStateAction<number>>"}},setFilters:{defaultValue:null,description:"",name:"setFilters",required:!0,type:{name:"Dispatch<SetStateAction<UsedMachineFiltersType>>"}},locale:{defaultValue:null,description:"",name:"locale",required:!0,type:{name:"enum",value:[{value:'"en"'},{value:'"de"'},{value:'"de-AT"'}]}},filters:{defaultValue:null,description:"",name:"filters",required:!0,type:{name:"UsedMachineFiltersType"}},powerOptions:{defaultValue:null,description:"",name:"powerOptions",required:!1,type:{name:'Omit<SliderProps, "value" | "label">'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const Ht=[{isMarine:!0,category:M.GEN_SET,locale:L.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,rating:R.STAND_BY,fuel:D.GAS,power:5e3,name:"Gen Set Machine 1",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:I.MOBILE},{isMarine:!0,category:M.GEN_SET,locale:L.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,rating:R.CONTINUOUS,fuel:D.GAS,power:2e3,name:"Gen Set Machine 2",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:I.STATIONARY},{isMarine:!0,category:M.ENGINE,locale:L.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,fuel:D.DIESEL,power:2e3,name:"Engine Machine 1",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61"},{category:M.GEN_SET,locale:L.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,rating:R.PRIME,fuel:D.DUAL_FUEL,power:3e3,name:"Gen Set Machine 3",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:I.MOBILE},{isMarine:!0,category:M.GEN_SET,locale:L.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,fuel:D.DIESEL,power:4e3,rating:R.CONTINUOUS,name:"Gen Set Machine 4",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:I.STATIONARY},{category:M.ACCESSORY,locale:L.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,name:"Accessory",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61"},{isMarine:!0,category:M.GEN_SET,locale:L.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,rating:R.STAND_BY,fuel:D.GAS,power:5e3,name:"Gen Set Machine 1",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:I.MOBILE},{isMarine:!0,category:M.GEN_SET,locale:L.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,rating:R.STAND_BY,fuel:D.GAS,power:5e3,name:"Gen Set Machine 1",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:I.MOBILE},{isMarine:!0,category:M.GEN_SET,locale:L.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,rating:R.STAND_BY,fuel:D.GAS,power:5e3,name:"Gen Set Machine 1",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:I.MOBILE},{isMarine:!0,category:M.GEN_SET,locale:L.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,rating:R.STAND_BY,fuel:D.GAS,power:5e3,name:"Gen Set Machine 1",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:I.MOBILE},{isMarine:!0,category:M.GEN_SET,locale:L.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,rating:R.STAND_BY,fuel:D.GAS,power:5e3,name:"Gen Set Machine 1",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:I.MOBILE},{isMarine:!0,category:M.GEN_SET,locale:L.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,rating:R.STAND_BY,fuel:D.GAS,power:5e3,name:"Gen Set Machine 1",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:I.MOBILE},{isMarine:!0,category:M.GEN_SET,locale:L.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,rating:R.STAND_BY,fuel:D.GAS,power:5e3,name:"Gen Set Machine 1",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:I.MOBILE}],qt=(e,n)=>{let t=Ht.filter(({category:o})=>o===e.category);e.category!==M.ACCESSORY&&(e.rating&&e.rating.length>0&&(t=t.filter(({rating:o})=>{var a;return o&&((a=e.rating)==null?void 0:a.includes(o))})),e.fuel&&e.fuel.length>0&&(t=t.filter(({fuel:o})=>{var a;return o&&((a=e.fuel)==null?void 0:a.includes(o))})),e.type&&e.category===M.GEN_SET&&e.type.length>0&&(t=t.filter(({type:o})=>{var a;return o&&((a=e.type)==null?void 0:a.includes(o))})),e.power&&(t=t.filter(({power:o})=>o&&o>=e.power.min&&o<=e.power.max))),e.sort&&(e.sort===Ne.POWER_ASCENDING?t=t.sort(({power:o=0},{power:a=0})=>o-a):t=t.sort(({power:o=0},{power:a=0})=>a-o));const r=t.length;return t=t.slice(0,n),{cards:t,total:r}},gr={title:"Patterns/UsedMachinePattern",component:ie,tags:["autodocs"],argTypes:{},decorators:[e=>{const[n,t]=c.useState({category:M.GEN_SET,power:{min:100,max:1e4},type:[],sort:void 0,rating:[],fuel:[]}),[r,o]=c.useState(10),{cards:a,total:i}=c.useMemo(()=>qt(n,r),[n,r]);return f.jsx(e,{cards:a,total:i,filters:n,setFilters:t,setCurrentTotal:o,currentTotal:r})}]},ne={args:{locale:L.DE,powerOptions:{min:100,max:1e4,step:1}},render:(e,{filters:n,currentTotal:t,setFilters:r,cards:o,total:a,setCurrentTotal:i})=>f.jsx(ie,{setCurrentTotal:i,currentTotal:t,total:a,cards:o,powerOptions:e.powerOptions,setFilters:r,locale:e.locale,filters:n})};var Me,Te,Ce;ne.parameters={...ne.parameters,docs:{...(Me=ne.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    locale: LocaleVariants.DE,
    powerOptions: {
      min: 100,
      max: 10000,
      step: 1
    }
  } as unknown as UsedMachinePatternProps,
  render: (args, {
    filters,
    currentTotal,
    setFilters,
    cards,
    total,
    setCurrentTotal
  }) => <UsedMachinePattern setCurrentTotal={setCurrentTotal} currentTotal={currentTotal} total={total} cards={cards} powerOptions={args.powerOptions} setFilters={setFilters} locale={args.locale} filters={filters} />
}`,...(Ce=(Te=ne.parameters)==null?void 0:Te.docs)==null?void 0:Ce.source}}};const br=["Default"];export{ne as Default,br as __namedExportsOrder,gr as default};
