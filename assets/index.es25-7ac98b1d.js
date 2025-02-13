import{j as e}from"./jsx-runtime-1a9d9a93.js";import{j as m}from"./index.es35-79e31a69.js";import{i as g}from"./index.es31-95f1013f.js";import{r as D}from"./index-8b3efc3f.js";import{h as E}from"./index.es13-3580608c.js";import{i as v}from"./index.es36-e8d10e84.js";import{f as F}from"./index.es24-01fa0cce.js";import{S as R,y as $}from"./index.es4-536dcfc8.js";var t=(a=>(a.Zps="ZPS",a.Cat="CAT",a.Zsd="ZSD",a.Default="Default",a))(t||{}),j=(a=>(a.Text="text",a.Button="button",a))(j||{}),z=(a=>(a.Primary="primary",a.Secondary="secondary",a.SecondaryCat="secondary-cat",a.SecondaryZps="secondary-zps",a))(z||{});const W={[z.Primary]:["zep-bg-secondary-default","zep-text-secondary-contrast","enabled:hover:zep-bg-secondary-hover","enabled:hover:zep-text-secondary-contrast","enabled:active:zep-bg-secondary-active","enabled:active:zep-text-secondary-contrast","disabled:zep-opacity-disabled"],[z.SecondaryZps]:["zep-bg-transparent","zep-text-typography-primary-default","enabled:hover:zep-bg-primary-hover","enabled:hover:zep-text-primary-contrast","enabled:active:zep-bg-primary-active","enabled:active:zep-text-primary-contrast","disabled:zep-opacity-disabled","zep-ring-2","zep-ring-inset","zep-ring-primary-default","enabled:hover:zep-ring-0","enabled:active:zep-ring-0","disabled:zep-ring-opacity-disabled"],[z.Secondary]:["zep-bg-transparent","zep-ring-2","zep-ring-inset","zep-text-secondary-default","zep-ring-secondary-default","enabled:hover:zep-bg-secondary-hover","enabled:hover:zep-ring-0","enabled:hover:zep-text-secondary-contrast","enabled:active:zep-bg-secondary-active","enabled:active:zep-text-secondary-contrast","enabled:active:zep-ring-0","disabled:zep-opacity-disabled"],[z.SecondaryCat]:["zep-bg-transparent","zep-ring-2","zep-ring-inset","zep-ring-neutral-dark-default","zep-text-neutral-dark-default","enabled:hover:zep-text-primary-contrast","enabled:hover:zep-ring-0","enabled:active:zep-ring-0","enabled:hover:zep-bg-neutral-dark-hover","enabled:active:zep-bg-neutral-dark-active","enabled:active:zep-text-primary-contrast","disabled:zep-bg-opacity-disabled"]},C=m(["zep-typography-button","zep-rounded-button","zep-px-1","zep-py-0.75","zep-flex","zep-gap-0.5","zep-justify-center","focus-visible:zep-outline","focus-visible:zep-outline-3","focus-visible:zep-outline-offset-1","focus-visible:zep-outline-focus"],{variants:{variant:W},defaultVariants:{variant:z.Primary}}),H=({className:a,variant:p,isLoading:r=!1,label:l,children:n,icon:i,labelClass:o,iconPosition:y="left",...h})=>{const u=!l||l===""?C({variant:p}).replace("zep-px-1","zep-px-0.75"):C({variant:p});return e.jsxs("button",{className:v(u,a,"zep-w-full sm:zep-w-auto"),...h,children:[r&&e.jsx("i",{className:"mr-zep-0_5","data-testid":"loading-icon",children:"loading icon"}),e.jsxs(F,{gap:"0.5",className:y==="left"?`zep-flex-row-reverse ${o}`:`${o}`,children:[l??n,i&&e.jsx(E,{name:i})]})]})},T=D.createContext({variant:t.Zps}),w=()=>D.useContext(T),L=({children:a,...p})=>e.jsx("tbody",{...p,children:a}),q=({children:a,className:p,isFirstRow:r,align:l,...n})=>{const{variant:i}=w(),o={[t.Zps]:["zep-text-typography-primary-default "],[t.Cat]:["zep-text-typography-dark-100"],[t.Zsd]:["zep-text-typography-dark-100"],[t.Default]:["zep-text-typography-dark-100"]},y=m([`
    zep-inline-block
    zep-text-right
    sm:zep-text-unset
    sm:zep-py-0.5
    zep-w-full
   zep-typography-bodyText
      `],{variants:{variant:o},defaultVariants:{variant:t.Zps}});return e.jsxs("td",{className:g("zep-justify-between sm:zep-table-cell zep-relative md:zep-px-1.5 zep-p-0.75 sm:zep-p-0.5 zep-bg-greyscale-0  lg:zep-whitespace-nowrap zep-group",p),style:{textAlign:l},...n,children:[e.jsx("span",{className:v(y({variant:i}),i===t.Zps?"[&svg]:zep-fill-indigo-500":"[&svg]:zep-fill-darkgrey-500"),children:a}),e.jsx("hr",{className:"group-first:zep-block zep-absolute zep-h-[1px] zep-bottom-[0] zep-left-[0] zep-right-[0] zep-text-greyscale-400"})]})},G=({children:a,className:p,...r})=>{const{variant:l}=w(),n={[t.Zps]:["zep-bg-indigo-500"],[t.Cat]:["zep-bg-yellow-500"],[t.Zsd]:["zep-bg-greyscale-200"],[t.Default]:["zep-bg-greyscale-0"]},i=m([`
      sm:zep-table-row-group`],{variants:{variant:n},defaultVariants:{variant:t.Zps}});return e.jsx("thead",{className:v(i({variant:l,className:p})),...r,children:a})},I=({children:a,className:p,align:r="left",...l})=>{const{variant:n}=w(),i={[t.Zps]:["zep-text-typography-light-100"],[t.Cat]:["zep-text-typography-dark-100"],[t.Zsd]:["zep-text-typography-dark-100"],[t.Default]:["zep-text-typography-dark-100"]},o=m([`
      zep-inline-block
      lg:zep-py-0.5
      zep-w-full
      zep-typography-bodyStrong`],{variants:{variant:i},defaultVariants:{variant:t.Zps}});return e.jsxs("th",{className:g("zep-relative md:zep-px-1.5 zep-p-0.75 sm:zep-p-0.5 lg:zep-whitespace-nowrap",p),style:{textAlign:r},...l,children:[e.jsx("span",{className:v(o({variant:n})),children:a}),e.jsx("hr",{className:"zep-absolute zep-border-t-2 zep-bottom-[0] zep-left-[0] zep-right-[0] zep-text-greyscale-900"})]})},S=({children:a,className:p,...r})=>e.jsx("tr",{className:g(" zep-mb-2 zep-table-row sm:zep-sm-[0px]",p),...r,children:a}),Y=({children:a,className:p,variant:r=t.Zps,maxWidth:l,maxHeight:n,fullWidth:i,textTop:o=!0,buttonLabel:y,descriptionBottom:h,descriptionTop:u,dataSource:P,columns:N,align:b,tableButtonOnClick:k,...A})=>{const B=(c,d,x,f,s)=>{switch(f){case j.Button:return e.jsx(R,{icon:s==null?void 0:s.iconName,variant:r===t.Zps?$.Tertiary:$.DarkTertiary,onClick:(s==null?void 0:s.onClick)===void 0?void 0:()=>s.onClick(c,d,x),children:s==null?void 0:s.title});case j.Text:default:return e.jsx("p",{children:c})}};return e.jsx(T.Provider,{value:{variant:r},children:e.jsxs(e.Fragment,{children:[o&&e.jsx("div",{className:`zep-mb-2.5 ${r===t.Zps?"zep-text-typography-primary-default":"zep-text-typography-dark-100"}`,children:e.jsx("p",{children:u})}),e.jsx("div",{className:g("zep-overflow-scroll zep-w-full",p,{"sm:zep-w-full":i}),style:{maxWidth:l,maxHeight:n},"data-testid":"zep-table",children:e.jsxs("table",{className:g("zep-table zep-w-full",{"sm:zep-w-full":i}),...A,children:[e.jsx(G,{children:e.jsx(S,{children:N.map(({title:c,key:d},x)=>e.jsx(I,{className:g({"zep-sticky zep-left-[0] zep-z-20 zep-drop-shadow-lg zep-min-w-[100px]":x===0,"zep-bg-indigo-500":r===t.Zps,"zep-bg-yellow-500":r===t.Cat,"zep-bg-greyscale-200":r===t.Zsd}),align:b,children:c},`table-align-${b}-head-cell-${d}`))})}),e.jsx(L,{children:P.map((c,d)=>e.jsx(S,{children:N.map(({key:x,dataIndex:f,props:s,renderAs:V},Z)=>e.jsx(q,{align:b,isFirstRow:d===0,className:Z===0?"zep-sticky zep-left-[0] zep-z-20  zep-drop-shadow-lg zep-min-w-[100px]":"",children:B(c[f],c,d,V,s)},`table-align-${b}-cell-${d}-${x}-${Z}`))},`table-align-${b}-row-${d}`))})]})}),h&&e.jsx("div",{className:`zep-my-2.5 ${r===t.Zps?"zep-text-typography-primary-default":"zep-text-typography-dark-100"}`,children:e.jsx("p",{children:h})}),y&&k&&e.jsx("div",{children:e.jsx(H,{label:y,variant:z.Primary,labelClass:"zep-text-indigo-500",onClick:k})})]})})};export{Y as e,t as r};
