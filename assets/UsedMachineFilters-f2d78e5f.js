import{j as r}from"./jsx-runtime-1a9d9a93.js";import{r as z}from"./index-8b3efc3f.js";import{c as j}from"./clsx-0839fdbe.js";import{i as h}from"./index.es31-95f1013f.js";import{h as G}from"./index.es13-3580608c.js";import{e as R}from"./index.es32-fbb642fb.js";import{Z as W}from"./index.es16-298408db.js";import{u as D,M as y,b as K,c as Y,a as J,d as Q}from"./used-machine-locales-f263dd8e.js";import{B as w,Z as v}from"./ZpsButton-91fac0e6.js";import{S as X}from"./Slider-166e2e5b.js";const M=z.forwardRef(({id:p,name:c,className:o,disabled:s=!1,error:t=!1,label:l,children:g,onChange:f,value:i=p,...m},u)=>r.jsxs("span",{className:h("zep-group","zep-relative","zep-inline-flex","zep-flex-row","zep-flex-wrap","zep-items-center","zep-justify-start",{"[&>svg]:hover:zep-bg-primary-hover":!s&&!t,"zep-cursor-not-allowed":s},o),"data-testid":"zep-checkbox",children:[r.jsx("input",{id:p,ref:u,name:c,value:i,type:"checkbox",onChange:s?void 0:f,className:h(R,"sr-only","zep-peer","zep-absolute","zep-top-[0]","zep-appearance-none","focus-visible:zep-ring-offset-1","zep-w-1.5","zep-h-1.5","zep-border-1","zep-bg-greyscale-0","checked:zep-border-none checked:zep-bg-primary-default",{"checked:zep-bg-opacity-disabled zep-border-neutral-dark-default zep-border-opacity-disabled":s,"zep-border-2 zep-border-error":t,"zep-border-neutral-dark-default group-hover:zep-border-primary-hover group-hover:zep-border-2 zep-transition-all":!t&&!s}),disabled:s,"data-testid":"zep-checkbox-input",...m}),r.jsx("label",{dangerouslySetInnerHTML:{__html:l?`${l}`:""},htmlFor:p,className:h("zep-text-primary-default zep-relative zep-pl-[36px]",[s?"zep-cursor-not-allowed zep-text-opacity-disabled":"zep-cursor-pointer"])}),r.jsx(G,{name:"check",className:h("zep-hidden peer-checked:zep-block","zep-text-neutral-dark-contrast","zep-pointer-events-none","zep-w-1.5","zep-h-1.5","zep-z-10","zep-absolute","zep-top-[-0.1px]","zep-left-[-0.1px]",{"zep-bg-transparent":!t&&!s,"zep-border-opacity-disabled zep-bg-opacity-disabled":s,"zep-bg-error":t})})]})),$=z.forwardRef(({id:p,name:c,value:o=p,required:s=!1,disabled:t=!1,error:l=!1,label:g,tabIndex:f=0,onChange:i,...m},u)=>r.jsxs("span",{className:h("zep-inline-flex","zep-flex-row","zep-flex-wrap","zep-items-center","zep-justify-start","zep-relative",{"[&>input]:hover:zep-border-primary-hover [&>span]:hover:zep-bg-primary-hover [&>input]:hover:zep-border-2 [&>span]:hover:zep-bg-2":!t&&!l},{"zep-cursor-not-allowed zep-opacity-disabled":t}),"data-testid":"zep-radio",children:[r.jsx("input",{id:p,ref:u,value:o,name:c,type:"radio",tabIndex:f,required:s,onChange:t?void 0:i,className:h(R,"sr-only","zep-peer","zep-transition-all","zep-absolute","zep-border-1","zep-appearance-none","focus-visible:zep-ring-offset-1","zep-w-1.5","zep-h-1.5","zep-rounded-full",{"zep-border-primary-default":!l},{"zep-border-2":l},{"checked:zep-error zep-border-error":l},{"zep-border-error":l}),disabled:t,"data-testid":"zep-radio-input",...m}),r.jsx("label",{htmlFor:p,className:h("zep-relative zep-z-20 zep-pl-[36px] zep-text-primary-default",[{"zep-cursor-pointer":!t}]),children:g}),r.jsx("span",{className:h("zep-hidden peer-checked:zep-block","zep-absolute","zep-z-10","zep-rounded-full","zep-border-greyscale-0",{"zep-left-[1px] zep-top-[1px] zep-h-[22px] zep-w-[22px] zep-border-[6px]":!l},{"zep-left-0.125 zep-top-0.125 zep-h-[20px] zep-w-[20px] zep-border-[5px]":l},[l?"zep-bg-error":"zep-bg-primary-default"]),"data-testid":"zep-radio-checked"})]})),ee=()=>{const[p,c]=z.useState({width:window.innerWidth,height:window.innerHeight});return z.useEffect(()=>{const o=()=>{c({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}},[]),p},x=({children:p,label:c,className:o})=>r.jsxs("div",{className:j("zep-flex zep-flex-col zep-gap-1.5",o),children:[r.jsx("p",{className:"zep-typography-headlineMD-fluid-cqi",children:c}),r.jsx("div",{className:"zep-flex zep-flex-col zep-gap-1.5",children:p})]}),T=({locale:p,filters:c,powerOptions:{min:o,max:s,step:t}={min:0,max:100,step:1},setFilters:l,className:g})=>{const[f,i]=z.useState(c),{power:m,fuel:u,rating:N,category:b,type:k,sort:_}=f,a=z.useMemo(()=>D[p],[p]),[E,S]=z.useState(!1),{width:C}=ee(),q=()=>{i({category:b,power:{min:o,max:s},type:[],rating:[],fuel:[],sort:void 0})},F=(e,n)=>{let d=e;return d.includes(n)?d=d.filter(B=>B!==n):d=[...d,n],d},L=()=>{i(c),S(!1)},V=()=>{S(!0)},I=e=>{i(()=>({category:e,power:{min:o,max:s},type:[],rating:[],fuel:[],sort:void 0}))},U=e=>{i(n=>({...n,power:e}))},A=e=>{const n=F(u,e);i(d=>({...d,fuel:n}))},P=e=>{const n=F(N,e);i(d=>({...d,rating:n}))},Z=e=>{const n=F(k,e);i(d=>({...d,type:n}))},H=e=>{i(n=>({...n,sort:e}))},O=()=>{l({category:b,power:m,fuel:u,sort:_,type:k,rating:N}),C<1024&&S(!1)};return z.useEffect(()=>{C>=1024&&O()},[f,C]),r.jsxs("div",{className:j("zep-relative md:zep-static md:zep-w-[25%] md:zep-max-w-[500px]",g),"data-testid":"zep-used-machine-filters",children:[r.jsx(w,{variant:v.SecondaryZps,iconPosition:"right",onClick:V,className:"zep-block md:zep-hidden !zep-w-fit sm:!zep-w-[122px] zep-py-0.625 [&svg]:zep-w-0.75",icon:"tune",children:a.filter}),r.jsxs("div",{className:j("md:zep-block md:zep-h-auto md:zep-bg-transparent md:zep-static zep-pb-[0]",{"zep-hidden":!E,"zep-fixed zep-bg-greyscale-0 zep-z-[1000] zep-flex zep-flex-col zep-gap-2 zep-h-screen zep-top-[0] zep-left-[0] zep-right-[0] zep-overflow-y-scroll zep-pb-[208px]":E}),children:[r.jsxs("div",{className:"md:zep-hidden zep-flex zep-flex-row zep-justify-between zep-pt-1 zep-px-1 md:zep-p-[0]",children:[r.jsx(w,{variant:v.SecondaryZps,className:"!zep-w-fit sm:!zep-w-fit",icon:"arrow-left",onClick:L}),r.jsx(w,{variant:v.Tertiary,className:"!zep-w-fit sm:!zep-w-fit",onClick:q,children:a.resetFilters})]}),r.jsxs("div",{className:"zep-flex zep-px-1 sm:zep-px-2 md:zep-p-[0] zep-flex-col md:zep-gap-4 zep-gap-2 zep-text-primary-default zep-w-full",children:[r.jsx(x,{label:a.category,children:Object.values(y).map(e=>r.jsx(W,{className:j("zep-self-start","zep-text-primary-default",{"zep-text-primary-active zep-link-filter-active":b===e}),iconPlacement:"before",label:a[e],onClick:()=>I(e)},e))}),r.jsx(x,{label:a.sort,className:"md:zep-hidden zep-py-2 zep-border-y-1 zep-border-y-greyscale-400",children:Object.values(K).map(e=>r.jsx($,{id:e,name:e,label:a[e],checked:_===e,onChange:()=>H(e)},e))}),b!==y.ACCESSORY&&r.jsxs(r.Fragment,{children:[r.jsx(x,{label:a.fuel,children:Object.values(Y).map(e=>r.jsx(M,{className:"zep-mb-[0]",id:e,checked:u.includes(e),onChange:()=>A(e),label:a[e]},e))}),r.jsx(x,{label:a.power,children:r.jsx(X,{onChange:U,label:b===y.GEN_SET?a.powerInKVA:a.powerInKW,max:s,min:o,value:m,step:t})}),b===y.GEN_SET&&r.jsx(x,{label:a.rating,children:Object.values(J).map(e=>r.jsx(M,{className:"zep-mb-[0]",id:e,checked:N.includes(e),onChange:()=>P(e),label:a[e]},e))}),r.jsx(x,{label:a.type,children:Object.values(Q).map(e=>r.jsx(M,{className:"zep-mb-[0]",id:e,checked:k.includes(e),onChange:()=>Z(e),label:a[e]},e))})]})]}),r.jsx("div",{className:"md:zep-hidden zep-z-[1020] zep-fixed zep-bottom-[0] zep-left-[0] zep-right-[0] zep-bg-greyscale-0 zep-shadow-[0_0_4px_rgba(0,0,0,0.24)] zep-p-1",children:r.jsx(w,{variant:v.Primary,className:"sm:zep-w-full",onClick:O,children:a.apply})})]})]})};try{T.displayName="UsedMachineFilters",T.__docgenInfo={description:"",displayName:"UsedMachineFilters",props:{setFilters:{defaultValue:null,description:"",name:"setFilters",required:!0,type:{name:"Dispatch<SetStateAction<UsedMachineFiltersType>>"}},locale:{defaultValue:null,description:"",name:"locale",required:!0,type:{name:"enum",value:[{value:'"en"'},{value:'"de"'},{value:'"de-AT"'}]}},filters:{defaultValue:null,description:"",name:"filters",required:!0,type:{name:"UsedMachineFiltersType"}},powerOptions:{defaultValue:null,description:"",name:"powerOptions",required:!1,type:{name:'Omit<SliderProps, "value" | "label">'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{T as U};
