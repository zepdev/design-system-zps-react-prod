import{j as p,c as j}from"./clsx-490306ad.js";import{G as E,a as Z}from"./global-variants-0f433d85.js";import{a as S}from"./index.es29-7715336a.js";import{r as l,R as z,a as q}from"./index-8b3efc3f.js";import{v as le}from"./index.es13-bd73f74d.js";import{f as se}from"./index.es24-e7069ead.js";import{L as oe,e as ie,l as ue}from"./index.es16-83e3794c.js";import{c as ce}from"./index-b85febcc.js";const pe="focus-visible:zep-ring zep-ring-focus zep-outline-none";function C(e,t,...n){if(e in t){let a=t[e];return typeof a=="function"?a(...n):a}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(a=>`"${a}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,C),r}function G(...e){return Array.from(new Set(e.flatMap(t=>typeof t=="string"?t.split(" "):[]))).filter(Boolean).join(" ")}var R=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(R||{}),de=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(de||{});function B({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:a,visible:s=!0,name:i}){let o=te(t,e);if(s)return N(o,n,r,i);let u=a??0;if(u&2){let{static:c=!1,...f}=o;if(c)return N(f,n,r,i)}if(u&1){let{unmount:c=!0,...f}=o;return C(c?0:1,{0(){return null},1(){return N({...f,hidden:!0,style:{display:"none"}},n,r,i)}})}return N(o,n,r,i)}function N(e,t={},n,r){let{as:a=n,children:s,refName:i="ref",...o}=O(e,["unmount","static"]),u=e.ref!==void 0?{[i]:e.ref}:{},c=typeof s=="function"?s(t):s;"className"in o&&o.className&&typeof o.className=="function"&&(o.className=o.className(t));let f={};if(t){let d=!1,y=[];for(let[g,h]of Object.entries(t))typeof h=="boolean"&&(d=!0),h===!0&&y.push(g);d&&(f["data-headlessui-state"]=y.join(" "))}if(a===l.Fragment&&Object.keys(K(o)).length>0){if(!l.isValidElement(c)||Array.isArray(c)&&c.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(o).map(h=>`  - ${h}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(h=>`  - ${h}`).join(`
`)].join(`
`));let d=c.props,y=typeof(d==null?void 0:d.className)=="function"?(...h)=>G(d==null?void 0:d.className(...h),o.className):G(d==null?void 0:d.className,o.className),g=y?{className:y}:{};return l.cloneElement(c,Object.assign({},te(c.props,K(O(o,["ref"]))),f,u,fe(c.ref,u.ref),g))}return l.createElement(a,Object.assign({},O(o,["ref"]),a!==l.Fragment&&u,a!==l.Fragment&&f),c)}function fe(...e){return{ref:e.every(t=>t==null)?void 0:t=>{for(let n of e)n!=null&&(typeof n=="function"?n(t):n.current=t)}}}function te(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let a in r)a.startsWith("on")&&typeof r[a]=="function"?(n[a]!=null||(n[a]=[]),n[a].push(r[a])):t[a]=r[a];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](a,...s){let i=n[r];for(let o of i){if((a instanceof Event||(a==null?void 0:a.nativeEvent)instanceof Event)&&a.defaultPrevented)return;o(a,...s)}}});return t}function A(e){var t;return Object.assign(l.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function K(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function O(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}var me=Object.defineProperty,ye=(e,t,n)=>t in e?me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,T=(e,t,n)=>(ye(e,typeof t!="symbol"?t+"":t,n),n);let he=class{constructor(){T(this,"current",this.detect()),T(this,"handoffState","pending"),T(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},v=new he,D=(e,t)=>{v.isServer?l.useEffect(e,t):l.useLayoutEffect(e,t)};function ge(e){let t=l.useRef(e);return D(()=>{t.current=e},[e]),t}let k=function(e){let t=ge(e);return z.useCallback((...n)=>t.current(...n),[t])},ne=Symbol();function be(e,t=!0){return Object.assign(e,{[ne]:t})}function H(...e){let t=l.useRef(e);l.useEffect(()=>{t.current=e},[e]);let n=k(r=>{for(let a of t.current)a!=null&&(typeof a=="function"?a(r):a.current=r)});return e.every(r=>r==null||(r==null?void 0:r[ne]))?void 0:n}function xe(){let e=typeof document>"u";return"useSyncExternalStore"in q?(t=>t.useSyncExternalStore)(q)(()=>()=>{},()=>!1,()=>!e):!1}function ze(){let e=xe(),[t,n]=l.useState(v.isHandoffComplete);return t&&v.isHandoffComplete===!1&&n(!1),l.useEffect(()=>{t!==!0&&n(!0)},[t]),l.useEffect(()=>v.handoff(),[]),e?!1:t}var W;let re=(W=z.useId)!=null?W:function(){let e=ze(),[t,n]=z.useState(e?()=>v.nextId():null);return D(()=>{t===null&&n(v.nextId())},[t]),t!=null?""+t:void 0};var w=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(w||{});function ve(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&we(n)?!1:r}function we(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}let F=l.createContext(null);F.displayName="OpenClosedContext";var P=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(P||{});function Ee(){return l.useContext(F)}function Se({value:e,children:t}){return z.createElement(F.Provider,{value:e},t)}function X(e){var t;if(e.type)return e.type;let n=(t=e.as)!=null?t:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function ke(e,t){let[n,r]=l.useState(()=>X(e));return D(()=>{r(X(e))},[e.type,e.as]),D(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")},[n,t]),n}function je(e){return v.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}var Y;let Pe=(Y=z.startTransition)!=null?Y:function(e){e()};var $e=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))($e||{}),Ce=(e=>(e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel",e))(Ce||{});let Ie={0:e=>({...e,disclosureState:C(e.disclosureState,{0:1,1:0})}),1:e=>e.disclosureState===1?e:{...e,disclosureState:1},4(e){return e.linkedPanel===!0?e:{...e,linkedPanel:!0}},5(e){return e.linkedPanel===!1?e:{...e,linkedPanel:!1}},2(e,t){return e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId}},3(e,t){return e.panelId===t.panelId?e:{...e,panelId:t.panelId}}},M=l.createContext(null);M.displayName="DisclosureContext";function V(e){let t=l.useContext(M);if(t===null){let n=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,V),n}return t}let U=l.createContext(null);U.displayName="DisclosureAPIContext";function ae(e){let t=l.useContext(U);if(t===null){let n=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,ae),n}return t}let _=l.createContext(null);_.displayName="DisclosurePanelContext";function Ne(){return l.useContext(_)}function De(e,t){return C(t.type,Ie,e,t)}let Oe=l.Fragment;function Te(e,t){let{defaultOpen:n=!1,...r}=e,a=l.useRef(null),s=H(t,be(b=>{a.current=b},e.as===void 0||e.as===l.Fragment)),i=l.useRef(null),o=l.useRef(null),u=l.useReducer(De,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:o,panelRef:i,buttonId:null,panelId:null}),[{disclosureState:c,buttonId:f},d]=u,y=k(b=>{d({type:1});let m=je(a);if(!m||!f)return;let x=(()=>b?b instanceof HTMLElement?b:b.current instanceof HTMLElement?b.current:m.getElementById(f):m.getElementById(f))();x==null||x.focus()}),g=l.useMemo(()=>({close:y}),[y]),h=l.useMemo(()=>({open:c===0,close:y}),[c,y]),I={ref:s};return z.createElement(M.Provider,{value:u},z.createElement(U.Provider,{value:g},z.createElement(Se,{value:C(c,{0:P.Open,1:P.Closed})},B({ourProps:I,theirProps:r,slot:h,defaultTag:Oe,name:"Disclosure"}))))}let Le="button";function Re(e,t){let n=re(),{id:r=`headlessui-disclosure-button-${n}`,...a}=e,[s,i]=V("Disclosure.Button"),o=Ne(),u=o===null?!1:o===s.panelId,c=l.useRef(null),f=H(c,t,u?null:s.buttonRef);l.useEffect(()=>{if(!u)return i({type:2,buttonId:r}),()=>{i({type:2,buttonId:null})}},[r,i,u]);let d=k(m=>{var x;if(u){if(s.disclosureState===1)return;switch(m.key){case w.Space:case w.Enter:m.preventDefault(),m.stopPropagation(),i({type:0}),(x=s.buttonRef.current)==null||x.focus();break}}else switch(m.key){case w.Space:case w.Enter:m.preventDefault(),m.stopPropagation(),i({type:0});break}}),y=k(m=>{switch(m.key){case w.Space:m.preventDefault();break}}),g=k(m=>{var x;ve(m.currentTarget)||e.disabled||(u?(i({type:0}),(x=s.buttonRef.current)==null||x.focus()):i({type:0}))}),h=l.useMemo(()=>({open:s.disclosureState===0}),[s]),I=ke(e,c),b=u?{ref:f,type:I,onKeyDown:d,onClick:g}:{ref:f,id:r,type:I,"aria-expanded":s.disclosureState===0,"aria-controls":s.linkedPanel?s.panelId:void 0,onKeyDown:d,onKeyUp:y,onClick:g};return B({ourProps:b,theirProps:a,slot:h,defaultTag:Le,name:"Disclosure.Button"})}let Be="div",Ae=R.RenderStrategy|R.Static;function He(e,t){let n=re(),{id:r=`headlessui-disclosure-panel-${n}`,...a}=e,[s,i]=V("Disclosure.Panel"),{close:o}=ae("Disclosure.Panel"),u=H(t,s.panelRef,g=>{Pe(()=>i({type:g?4:5}))});l.useEffect(()=>(i({type:3,panelId:r}),()=>{i({type:3,panelId:null})}),[r,i]);let c=Ee(),f=(()=>c!==null?(c&P.Open)===P.Open:s.disclosureState===0)(),d=l.useMemo(()=>({open:s.disclosureState===0,close:o}),[s,o]),y={ref:u,id:r};return z.createElement(_.Provider,{value:s.panelId},B({ourProps:y,theirProps:a,slot:d,defaultTag:Be,features:Ae,visible:f,name:"Disclosure.Panel"}))}let Fe=A(Te),Me=A(Re),Ve=A(He),L=Object.assign(Fe,{Button:Me,Panel:Ve});const Ue=l.forwardRef(({items:e,className:t,...n},r)=>p.jsx(p.Fragment,{children:e.map((a,s)=>{const{title:i,content:o,disabled:u}=a;return p.jsx(L,{children:({open:c})=>{const f=S("zep-transition-transform","zep-shrink-0",{"zep-rotate-180":c});return p.jsxs("div",{"data-disabled":u,className:S("zep-@container","first:zep-border-t-[0]","zep-border-t-1","last:zep-border-b-1","zep-border-greyscale-400","[&[data-disabled]]:zep-border-t-greyscale-400/40","[&[data-disabled]+*]:zep-border-t-greyscale-400/40","[&[data-disabled]]:last:zep-border-b-greyscale-400/40",{"[&+*]:hover:!zep-border-t-neutral-dark-active":!u},{"hover:!zep-border-neutral-dark-active":!u},t),children:[p.jsx(L.Button,{disabled:u,className:S("zep-typography-headlineXS-fluid-cqi","zep-w-full",pe,"focus-visible:zep-ring-offset-1","zep-py-0.75","zep-px-0.5","sm:zep-py-1.25","sm:zep-px-1",{"zep-cursor-not-allowed":u},{"zep-opacity-disabled":u}),...n,ref:r,"data-testid":`zep-accordion-button-${s}`,children:p.jsxs(se,{direction:"row",justifyContent:"between",gap:"1.5",wrap:"nowrap",className:"zep-w-full",children:[p.jsx("span",{className:"zep-text-left",children:i}),p.jsx(le,{className:S("zep-min-w-[24px] !zep-grow-0 zep-justify-end",f),name:"chevron-mini-down"})]})}),p.jsx(L.Panel,{className:S({"zep-hidden":!c},"zep-text-typography-dark-100","zep-pt-0.75","zep-pb-2","zep-px-0.5","sm:zep-pt-1.25","sm:zep-pb-2.5","sm:zep-px-1","zep-typography-bodyText"),children:o})]})}},`${i}-${s}`)})})),_e={[E.Zps]:"zep-text-primary-default",[E.Cat]:"zep-text-typography-dark-100",[Z.ZpsBg]:"zep-text-typography-light-100",[Z.CatBg]:"zep-text-typography-light-100"},$=ce([],{variants:{variant:_e},defaultVariants:{variant:E.Zps}}),Ze=({variant:e,headline:t})=>t?p.jsx("h4",{"data-testid":"link-list-headline",className:j("zep-typography-headlineSM-fluid-cqi","zep-break-all",$({variant:e})),children:t}):null,J=({variant:e,description:t})=>t?p.jsx("p",{"data-testid":"link-list-description",className:j("zep-typography-bodyText","zep-break-all",$({variant:e})),children:t}):null,Q=({links:e,variant:t})=>p.jsx("div",{"data-testid":"link-list-links",className:j("zep-flex","zep-flex-col","zep-gap-1",$({variant:t})),children:e.map((n,r)=>p.jsx(oe,{label:n.label,icon:n.icon,href:n.href,iconPlacement:"before",hasIcon:!0,target:ie.Blank,mode:ue.Inline},r))}),ee=({headline:e,description:t,variant:n=E.Zps,links:r,isMultiListItem:a=!1,className:s})=>{const i=r.length>15?r.slice(0,15):r,o=a?"md:zep-flex zep-hidden zep-min-w-[280px]":"zep-flex zep-max-w-[774px] zep-min-w-[290px]",u=n===E.Cat||n===E.Zps?"zep-bg-background-medium":"";return p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:j("zep-gap-1.5","zep-p-1.5","sm:zep-p-2","md:zep-p-2.5","zep-flex-col","zep-items-start",$({variant:n}),u,o,s),"data-testid":"zep-link-list",children:[p.jsx(Ze,{headline:e,variant:n}),p.jsx(J,{description:t,variant:n}),p.jsx(Q,{links:i,variant:n})]}),p.jsx(Ue,{className:j("zep-w-full",{"zep-hidden":!a,"md:zep-hidden zep-min-w-[280px] zep-border-none":a},$({variant:n}),u,s),items:[{title:e||"",content:p.jsxs("div",{className:"zep-flex zep-flex-col zep-gap-1",children:[p.jsx(J,{description:t,variant:n}),p.jsx(Q,{links:i,variant:n})]})}]})]})};try{ee.displayName="LinkListItem",ee.__docgenInfo={description:"",displayName:"LinkListItem",props:{headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},links:{defaultValue:null,description:"",name:"links",required:!0,type:{name:"LinkProps[]"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZPS_BG"'},{value:'"CAT_BG"'}]}},isMultiListItem:{defaultValue:{value:"false"},description:"",name:"isMultiListItem",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{ee as L};
//# sourceMappingURL=LinkListItem-091ad2a5.js.map