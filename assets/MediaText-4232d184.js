import{j as e}from"./jsx-runtime-1a9d9a93.js";import{f as w}from"./index.es24-01fa0cce.js";import{c as x}from"./index-ff2c9236.js";import{c as n}from"./clsx-0839fdbe.js";import{r as f}from"./index-8b3efc3f.js";import{G as a,a as m}from"./global-variants-893e06e6.js";import{b as o}from"./commonCSS-cc68a568.js";import{t as g}from"./tw-merge-1166cefb.js";import{R as q}from"./RichText-640f3398.js";import{B as c,Z as u}from"./ZpsButton-2c3d011d.js";const y=f.createContext({imageAlignment:"left",variant:a.Zps}),v=()=>f.useContext(y),k={[a.Zps]:["zep-text-typography-brand-steel"],[a.Cat]:["zep-text-typography-light-70 zep-opacity-70"]},M=x(["zep-typography-tagline zep-mb-0.5"],{variants:{variant:k},defaultVariants:{variant:a.Zps}}),z=({imageAlignment:r="left",variant:t=a.Zps,headline:l="",tagline:i="",content:p,labelSecondary:s,labelPrimary:d,onClickSecondary:h,onClickPrimary:C,src:V,alt:b,urlPrimary:j,urlSecondary:T})=>e.jsx(y.Provider,{value:{imageAlignment:r,variant:t},children:e.jsxs("div",{className:n("zep-container","zep-max-w-[1920px]","zep-relative","zep-flex","zep-flex-col","md:zep-block"),"data-testid":"zep-mediaText-simple",children:[e.jsx(N,{src:V,alt:b}),e.jsxs(Z,{children:[e.jsxs("div",{className:"zep-flex zep-flex-col zep-gap-0.5",children:[i&&e.jsx("p",{"data-testid":"zep-MediaText-tagline",className:g(M({variant:t}),"zep-break-words"),children:i}),l&&e.jsx("h3",{"data-testid":"zep-MediaText-headline",className:n("zep-text-typography-light-100","zep-typography-headlineMD-fluid-cqi","after:zep-text-[0.23em]","zep-text-left","zep-break-words","zep-break-all","zep-hyphens-auto"),children:l})]}),e.jsx(q,{content:p,variant:t===a.Cat?m.CatBg:m.ZpsBg}),e.jsx("div",{className:"zep-block","data-testid":"zep-mediatext-buttons",children:e.jsxs(w,{gap:"1.5",className:n("max-md:zep-flex","md:zep-flex-row zep-gap-1.5 md:zep-gap-2 lg:zep-gap-1.5"),direction:"column",children:[s&&e.jsx(c,{href:T,onClick:h,label:s,variant:u.Secondary}),d&&e.jsx(c,{href:j,onClick:C,label:d,variant:u.Primary})]})})]})]})}),N=({src:r,alt:t})=>{const{imageAlignment:l}=v(),i=l==="left"?"md:zep-order-1":"",p=l==="left"?"zep-left-[0]":"zep-right-[0]";return e.jsx("div",{"data-testid":"zep-mediaText-image",className:n("md:zep-w-[50%]","lg:zep-w-[58%]","md:zep-absolute","zep-justify-center",i,p),children:e.jsx("div",{className:n("zep-relative"),children:e.jsx("img",{alt:t,src:r,className:n("zep-w-full zep-aspect-[5/4] zep-h-full zep-object-cover md:zep-w-full md:zep-h-full md:zep-max-w-full")})})})},Z=({children:r})=>{const{imageAlignment:t,variant:l}=v(),i=t==="left"?"":"md:zep-order-1",p=t==="left"?"zep-ml-auto":"zep-mr-auto",s={[a.Zps]:o[m.ZpsBg],[a.Cat]:o[m.CatBg]},d=x([` md:zep-w-[57%]
        lg:zep-w-[50%]
        md:zep-mt-[60px]
        lg:zep-mt-[80px]
        zep-relative
        zep-h-[max-content]
        zep-z-10
        zep-p-1
        sm:zep-p-2.5
        md:zep-p-2
        lg:zep-p-4
        zep-max-w-fit
        md:zep-min-w-[499px]
        xl:zep-min-w-[700px]
        zep-flex
        zep-flex-col
        zep-gap-1.5
        lg:zep-gap-2
        ${i},
        ${p}`],{variants:{variant:s},defaultVariants:{variant:a.Zps}});return e.jsx("div",{className:g(d({variant:l})),"data-testid":"zep-mediaText-body",children:r})};try{z.displayName="MediaText",z.__docgenInfo={description:"",displayName:"MediaText",props:{headline:{defaultValue:{value:""},description:"",name:"headline",required:!1,type:{name:"string"}},tagline:{defaultValue:{value:""},description:"",name:"tagline",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"BlocksContent"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},imageAlignment:{defaultValue:{value:"left"},description:"",name:"imageAlignment",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!0,type:{name:"string"}},labelPrimary:{defaultValue:null,description:"",name:"labelPrimary",required:!1,type:{name:"string"}},labelSecondary:{defaultValue:null,description:"",name:"labelSecondary",required:!1,type:{name:"string"}},onClickPrimary:{defaultValue:null,description:"",name:"onClickPrimary",required:!1,type:{name:"(() => void)"}},onClickSecondary:{defaultValue:null,description:"",name:"onClickSecondary",required:!1,type:{name:"(() => void)"}},urlPrimary:{defaultValue:null,description:"",name:"urlPrimary",required:!1,type:{name:"string"}},urlSecondary:{defaultValue:null,description:"",name:"urlSecondary",required:!1,type:{name:"string"}}}}}catch{}export{z as M};
