import{j as m}from"./jsx-runtime-1a9d9a93.js";import{i as g}from"./index.es31-95f1013f.js";import{R as h,r as n}from"./index-8b3efc3f.js";import{h as K}from"./index.es13-3580608c.js";import{e as U}from"./index.es32-fbb642fb.js";import{A as _,I as C,m as w,a as H,l as v,i as q,o as R,s as k,C as L,b as B,W as M,p as G,d as J,t as W,c as x,r as X}from"./index.es74-b2c6e214.js";import{f as Q}from"./index.es24-01fa0cce.js";var I=(e=>(e.ALL_CLOSED="ALL_CLOSED",e.ALL_OPEN="ALL_OPEN",e.FIRST_OPEN="FIRST_OPEN",e))(I||{}),A;let V=(A=h.startTransition)!=null?A:function(e){e()};var Y=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Y||{}),Z=(e=>(e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel",e))(Z||{});let ee={0:e=>({...e,disclosureState:R(e.disclosureState,{0:1,1:0})}),1:e=>e.disclosureState===1?e:{...e,disclosureState:1},4(e){return e.linkedPanel===!0?e:{...e,linkedPanel:!0}},5(e){return e.linkedPanel===!1?e:{...e,linkedPanel:!1}},2(e,t){return e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId}},3(e,t){return e.panelId===t.panelId?e:{...e,panelId:t.panelId}}},O=n.createContext(null);O.displayName="DisclosureContext";function T(e){let t=n.useContext(O);if(t===null){let i=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,T),i}return t}let N=n.createContext(null);N.displayName="DisclosureAPIContext";function F(e){let t=n.useContext(N);if(t===null){let i=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,F),i}return t}let j=n.createContext(null);j.displayName="DisclosurePanelContext";function te(){return n.useContext(j)}function re(e,t){return R(t.type,ee,e,t)}let ne=n.Fragment;function ae(e,t){let{defaultOpen:i=!1,...u}=e,b=n.useRef(null),r=w(t,H(f=>{b.current=f},e.as===void 0||e.as===n.Fragment)),a=n.useRef(null),p=n.useRef(null),o=n.useReducer(re,{disclosureState:i?0:1,linkedPanel:!1,buttonRef:p,panelRef:a,buttonId:null,panelId:null}),[{disclosureState:d,buttonId:s},y]=o,c=v(f=>{y({type:1});let E=W(b);if(!E||!s)return;let l=(()=>f?f instanceof HTMLElement?f:f.current instanceof HTMLElement?f.current:E.getElementById(s):E.getElementById(s))();l==null||l.focus()}),z=n.useMemo(()=>({close:c}),[c]),P=n.useMemo(()=>({open:d===0,close:c}),[d,c]),D={ref:r};return h.createElement(O.Provider,{value:o},h.createElement(N.Provider,{value:z},h.createElement(q,{value:R(d,{0:k.Open,1:k.Closed})},L({ourProps:D,theirProps:u,slot:P,defaultTag:ne,name:"Disclosure"}))))}let se="button";function le(e,t){let i=B(),{id:u=`headlessui-disclosure-button-${i}`,...b}=e,[r,a]=T("Disclosure.Button"),p=te(),o=p===null?!1:p===r.panelId,d=n.useRef(null),s=w(d,t,o?null:r.buttonRef),y=M();n.useEffect(()=>{if(!o)return a({type:2,buttonId:u}),()=>{a({type:2,buttonId:null})}},[u,a,o]);let c=v(l=>{var S;if(o){if(r.disclosureState===1)return;switch(l.key){case x.Space:case x.Enter:l.preventDefault(),l.stopPropagation(),a({type:0}),(S=r.buttonRef.current)==null||S.focus();break}}else switch(l.key){case x.Space:case x.Enter:l.preventDefault(),l.stopPropagation(),a({type:0});break}}),z=v(l=>{switch(l.key){case x.Space:l.preventDefault();break}}),P=v(l=>{var S;X(l.currentTarget)||e.disabled||(o?(a({type:0}),(S=r.buttonRef.current)==null||S.focus()):a({type:0}))}),D=n.useMemo(()=>({open:r.disclosureState===0}),[r]),f=G(e,d),E=o?{ref:s,type:f,onKeyDown:c,onClick:P}:{ref:s,id:u,type:f,"aria-expanded":r.disclosureState===0,"aria-controls":r.linkedPanel?r.panelId:void 0,onKeyDown:c,onKeyUp:z,onClick:P};return L({mergeRefs:y,ourProps:E,theirProps:b,slot:D,defaultTag:se,name:"Disclosure.Button"})}let oe="div",ie=_.RenderStrategy|_.Static;function ue(e,t){let i=B(),{id:u=`headlessui-disclosure-panel-${i}`,...b}=e,[r,a]=T("Disclosure.Panel"),{close:p}=F("Disclosure.Panel"),o=M(),d=w(t,r.panelRef,P=>{V(()=>a({type:P?4:5}))});n.useEffect(()=>(a({type:3,panelId:u}),()=>{a({type:3,panelId:null})}),[u,a]);let s=J(),y=(()=>s!==null?(s&k.Open)===k.Open:r.disclosureState===0)(),c=n.useMemo(()=>({open:r.disclosureState===0,close:p}),[r,p]),z={ref:d,id:u};return h.createElement(j.Provider,{value:r.panelId},L({mergeRefs:o,ourProps:z,theirProps:b,slot:c,defaultTag:oe,features:ie,visible:y,name:"Disclosure.Panel"}))}let pe=C(ae),ce=C(le),de=C(ue),$=Object.assign(pe,{Button:ce,Panel:de});const Se=n.forwardRef(({items:e,initialState:t=I.ALL_CLOSED,className:i,...u},b)=>{const r=a=>{switch(t){case I.ALL_OPEN:return!0;case I.FIRST_OPEN:return a===0;case I.ALL_CLOSED:default:return!1}};return m.jsx(m.Fragment,{children:e.map((a,p)=>{const{title:o,content:d,disabled:s}=a;return m.jsx($,{defaultOpen:r(p),children:({open:y})=>{const c=g("zep-transition-transform","zep-shrink-0",{"zep-rotate-180":y});return m.jsxs("div",{"data-disabled":s,className:g("zep-@container","first:zep-border-t-[0]","zep-border-t-1","last:zep-border-b-1","zep-border-greyscale-400","[&[data-disabled]]:zep-border-t-greyscale-400/40","[&[data-disabled]+*]:zep-border-t-greyscale-400/40","[&[data-disabled]]:last:zep-border-b-greyscale-400/40",{"[&+*]:hover:!zep-border-t-neutral-dark-active":!s},{"hover:!zep-border-neutral-dark-active":!s},i),children:[m.jsx($.Button,{disabled:s,className:g("zep-typography-headlineSM-fluid-cqi","zep-w-full",U,"focus-visible:zep-ring-offset-1","zep-py-0.75","zep-px-0.5","sm:zep-py-1.25","sm:zep-px-1",{"zep-cursor-not-allowed":s},{"zep-opacity-disabled":s}),...u,ref:b,"data-testid":`zep-accordion-button-${p}`,children:m.jsxs(Q,{direction:"row",justifyContent:"between",gap:"1.5",wrap:"nowrap",className:"zep-w-full",children:[m.jsx("span",{className:"zep-text-left",children:o}),m.jsx(K,{className:g("zep-min-w-[24px] !zep-grow-0 zep-justify-end",c),name:"chevron-mini-down"})]})}),m.jsx($.Panel,{className:g({"zep-hidden":!y},"zep-text-typography-dark-100","zep-pt-0.75","zep-pb-2","zep-px-0.5","sm:zep-pt-1.25","sm:zep-pb-2.5","sm:zep-px-1","zep-typography-bodyText"),children:d})]})}},`${o}-${p}`)})})});export{Se as E};
