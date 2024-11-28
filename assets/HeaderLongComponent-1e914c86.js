import{j as a}from"./jsx-runtime-1a9d9a93.js";import{L as z,l as f}from"./index.es16-f115649c.js";import{c as p}from"./clsx-0839fdbe.js";import{a as l,G as t}from"./global-variants-0f433d85.js";import{Z as r,B as c}from"./ZpsButton-e8cc879d.js";const y=({type:o,linkHref:d,linkText:s,onClick:e,variant:n=t.Zps})=>{const i={"zep-text-yellow-500":n===l.ZpsBg||n===l.CatBg,"zep-text-typography-dark-100":n===t.Cat,"zep-text-indigo-500":t.Zps};switch(o){case"link":return a.jsx(z,{className:p(i,"zep-h-fit","zep-font-400","zep-whitespace-nowrap","hover:zep-underline","hover:zep-font-500","zep-cursor-pointer"),label:s||"",hasIcon:!0,href:d,mode:f.Standalone});case"primary-button":return a.jsx(c,{className:"zep-whitespace-nowrap sm:zep-w-fit zep-h-fit",label:s,onClick:e,variant:r.Primary});case"secondary-button":const u={[t.Cat]:r.SecondaryCat,[t.Zps]:r.SecondaryZps,[l.ZpsBg]:r.Secondary,[l.CatBg]:r.Secondary};return a.jsx(c,{className:"zep-whitespace-nowrap sm:zep-w-fit zep-h-fit",label:s,onClick:e,variant:u[n]});default:return null}},m=({tagline:o,headline:d,description:s,variant:e=t.Zps,...n})=>{const i={"zep-text-typography-light-100":e===l.ZpsBg||e===l.CatBg,"zep-text-typography-dark-100":e===t.Cat,"zep-text-indigo-500":e===t.Zps},u={"zep-text-steel-500":e===t.Zps||e===l.ZpsBg,"zep-text-typography-dark-70 zep-opacity-70":e===t.Cat,"zep-text-typography-light-70 zep-opacity-70":e===l.CatBg};return a.jsxs("div",{className:p("zep-w-full","zep-flex","zep-flex-col","zep-gap-1.5","md:zep-gap-2.5","zep-items-start"),"data-testid":"header-long",children:[a.jsxs("div",{className:p("zep-w-full","zep-flex","zep-flex-col","zep-gap-0.5","zep-items-start"),children:[a.jsx("h3",{className:p(u,"zep-typography-taglineMD","zep-break-all"),children:o}),a.jsxs("div",{className:p("zep-w-full","zep-flex","zep-flex-col","xl:zep-flex-row","xl:zep-justify-between","xl:zep-gap-2","zep-gap-1.5"),children:[a.jsx("h2",{className:p(i,"zep-max-w-[944px]","zep-break-all","zep-typography-headlineLG-fluid-cqi","zep-text-start"),children:d}),a.jsx(y,{...n,variant:e})]})]}),a.jsx("p",{className:p(i,"zep-text-start","zep-max-w-[944px]","zep-break-all"),children:s})]})};try{m.displayName="HeaderLongComponent",m.__docgenInfo={description:"",displayName:"HeaderLongComponent",props:{tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZPS_BG"'},{value:'"CAT_BG"'}]}}}}}catch{}export{m as H};