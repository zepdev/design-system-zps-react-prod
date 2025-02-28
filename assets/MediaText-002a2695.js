import{j as e}from"./jsx-runtime-1a9d9a93.js";import{f as w}from"./index.es24-01fa0cce.js";import{c as g}from"./index-ff2c9236.js";import{c as p}from"./clsx-0839fdbe.js";import{r as v}from"./index-8b3efc3f.js";import{G as a,a as c}from"./global-variants-71b69725.js";import{b as z}from"./commonCSS-0b9dd3ad.js";import{t as y}from"./tw-merge-1166cefb.js";import{R as q}from"./RichText-7e253872.js";import{B as m,Z as o}from"./ZpsButton-91fac0e6.js";const h=v.createContext({imageAlignment:"left",variant:a.Zps}),j=()=>v.useContext(h),k={[a.Zps]:["zep-text-typography-brand-steel"],[a.Cat]:["zep-text-typography-light-70 zep-opacity-70"]},M=g(["zep-typography-taglineMD zep-mb-0.5"],{variants:{variant:k},defaultVariants:{variant:a.Zps}}),f=({imageAlignment:i="left",variant:t=a.Zps,headline:l="",tagline:n="",content:d,labelSecondary:r,labelPrimary:s,onClickSecondary:C,onClickPrimary:V,src:T,alt:b,urlPrimary:u,urlSecondary:x})=>e.jsx(h.Provider,{value:{imageAlignment:i,variant:t},children:e.jsxs("div",{className:p("zep-container","zep-max-w-[1920px]","zep-relative","zep-flex","zep-flex-col","md:zep-block"),"data-testid":"zep-mediaText-simple",children:[e.jsx(N,{src:T,alt:b}),e.jsxs(Z,{children:[e.jsxs("div",{className:"zep-flex zep-flex-col zep-gap-0.5",children:[n&&e.jsx("p",{"data-testid":"zep-MediaText-tagline",className:y(M({variant:t}),"zep-break-words"),children:n}),l&&e.jsx("h4",{"data-testid":"zep-MediaText-headline",className:p("zep-text-typography-light-100","zep-typography-headlineMD-fluid-cqi","after:zep-text-[0.23em]","zep-text-left","zep-break-words","zep-break-all","zep-hyphens-auto"),children:l})]}),e.jsx(q,{content:d,variant:t===a.Cat?c.CatBg:c.ZpsBg}),e.jsx("div",{className:"zep-block","data-testid":"zep-mediatext-buttons",children:e.jsxs(w,{gap:"1.5",className:p("max-md:zep-flex","md:zep-flex-row zep-gap-1.5 md:zep-gap-2 xl:zep-gap-1.5"),direction:"column",children:[r&&!x&&e.jsx(m,{label:r,onClick:C,variant:o.Secondary}),s&&!u&&e.jsx(m,{onClick:V,label:s,variant:o.Primary}),r&&x&&e.jsx("a",{href:x,children:e.jsx(m,{label:r,variant:o.Secondary})}),s&&u&&e.jsx("a",{href:u,children:e.jsx(m,{label:s,variant:o.Primary})})]})})]})]})}),N=({src:i,alt:t})=>{const{imageAlignment:l}=j(),n=l==="left"?"md:zep-order-1":"",d=l==="left"?"zep-left-[0]":"zep-right-[0]";return e.jsx("div",{"data-testid":"zep-mediaText-image",className:p("md:zep-w-[50%]","xl:zep-w-[58%]","md:zep-absolute","zep-justify-center",n,d),children:e.jsx("div",{className:p("zep-relative"),children:e.jsx("img",{alt:t,src:i,className:p("zep-w-full zep-aspect-[5/4] zep-h-full zep-object-cover md:zep-w-full md:zep-h-full md:zep-max-w-full")})})})},Z=({children:i})=>{const{imageAlignment:t,variant:l}=j(),n=t==="left"?"":"md:zep-order-1",d=t==="left"?"zep-ml-auto":"zep-mr-auto",r={[a.Zps]:z[c.ZpsBg],[a.Cat]:z[c.CatBg]},s=g([` md:zep-w-[57%]
        xl:zep-w-[50%]
        md:zep-mt-[60px]
        xl:zep-mt-[120px]
        zep-relative
        zep-h-[max-content]
        zep-z-10
        zep-p-1
        sm:zep-p-2.5
        md:zep-p-2
        xl:zep-p-5
        zep-max-w-fit
        md:zep-min-w-[499px]
        xl:zep-min-w-[700px]
        zep-flex
        zep-flex-col
        zep-gap-1.5
        xl:zep-gap-2
        ${n},
        ${d}`],{variants:{variant:r},defaultVariants:{variant:a.Zps}});return e.jsx("div",{className:y(s({variant:l})),"data-testid":"zep-mediaText-body",children:i})};try{f.displayName="MediaText",f.__docgenInfo={description:"",displayName:"MediaText",props:{headline:{defaultValue:{value:""},description:"",name:"headline",required:!1,type:{name:"string"}},tagline:{defaultValue:{value:""},description:"",name:"tagline",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"BlocksContent"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},imageAlignment:{defaultValue:{value:"left"},description:"",name:"imageAlignment",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!0,type:{name:"string"}},labelPrimary:{defaultValue:null,description:"",name:"labelPrimary",required:!1,type:{name:"string"}},labelSecondary:{defaultValue:null,description:"",name:"labelSecondary",required:!1,type:{name:"string"}},onClickPrimary:{defaultValue:null,description:"",name:"onClickPrimary",required:!1,type:{name:"(() => void)"}},onClickSecondary:{defaultValue:null,description:"",name:"onClickSecondary",required:!1,type:{name:"(() => void)"}},urlPrimary:{defaultValue:null,description:"",name:"urlPrimary",required:!1,type:{name:"string"}},urlSecondary:{defaultValue:null,description:"",name:"urlSecondary",required:!1,type:{name:"string"}}}}}catch{}export{f as M};
