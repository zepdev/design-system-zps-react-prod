import{j as a}from"./jsx-runtime-1a9d9a93.js";import{Z as f,l as z}from"./index.es16-298408db.js";import{c as s}from"./clsx-0839fdbe.js";import{a as l,G as t}from"./global-variants-71b69725.js";import{R as y}from"./RichText-3f9b6e99.js";import{Z as o,B as c}from"./ZpsButton-91fac0e6.js";const g=({type:r,linkHref:i,linkText:p,onClick:e,variant:n=t.Zps})=>{const u={"zep-text-yellow-500":n===l.ZpsBg||n===l.CatBg,"zep-text-typography-dark-100":n===t.Cat,"zep-text-indigo-500":t.Zps},d={[t.Cat]:o.SecondaryCat,[t.Zps]:o.SecondaryZps,[l.ZpsBg]:o.Secondary,[l.CatBg]:o.Secondary};switch(r){case"link":return a.jsx(f,{className:s(u,"zep-h-fit","zep-font-400","zep-whitespace-nowrap","hover:zep-underline","hover:zep-font-500","zep-cursor-pointer"),label:p||"",href:i,mode:z.Standalone});case"primary-button":return a.jsx(c,{className:"zep-whitespace-nowrap sm:zep-w-fit zep-h-fit",label:p,onClick:e,variant:o.Primary});case"secondary-button":return a.jsx(c,{className:"zep-whitespace-nowrap sm:zep-w-fit zep-h-fit",label:p,onClick:e,variant:d[n]});default:return null}},m=({tagline:r,headline:i,description:p,variant:e=t.Zps,...n})=>{const u={"zep-text-typography-light-100":e===l.ZpsBg||e===l.CatBg,"zep-text-typography-dark-100":e===t.Cat,"zep-text-indigo-500":e===t.Zps},d={"zep-text-steel-500":e===t.Zps||e===l.ZpsBg,"zep-text-typography-dark-70 zep-opacity-70":e===t.Cat,"zep-text-typography-light-70 zep-opacity-70":e===l.CatBg};return a.jsxs("div",{className:s("zep-w-full","zep-flex","zep-flex-col","zep-gap-1.5","md:zep-gap-2.5","zep-items-start"),"data-testid":"header-long-component",children:[a.jsxs("div",{className:s("zep-w-full","zep-flex","zep-flex-col","zep-gap-0.5","zep-items-start"),children:[r&&a.jsx("h3",{className:s(d,"zep-typography-taglineMD","zep-break-all"),children:r}),a.jsxs("div",{className:s("zep-w-full","zep-flex","zep-flex-col","xl:zep-flex-row","xl:zep-justify-between","xl:zep-gap-2","zep-gap-1.5"),children:[a.jsx("h2",{className:s(u,"zep-max-w-[944px]","zep-break-all","zep-typography-headlineLG-fluid-cqi","zep-text-start"),children:i}),a.jsx(g,{...n,variant:e})]})]}),p&&a.jsx(y,{content:p,variant:e})]})};try{m.displayName="HeaderLongComponent",m.__docgenInfo={description:"",displayName:"HeaderLongComponent",props:{tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZPS_BG"'},{value:'"CAT_BG"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{m as H};
