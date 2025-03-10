import{j as e}from"./jsx-runtime-1a9d9a93.js";import{Z as h,l as g}from"./index.es16-298408db.js";import{c as s}from"./clsx-0839fdbe.js";import{a as r,G as l}from"./global-variants-893e06e6.js";import{R as z}from"./RichText-7177e816.js";import{Z as p,B as c}from"./ZpsButton-91fac0e6.js";const w=({type:v,linkHref:n,linkText:u,onClick:a,headerButtonIconPosition:o,headerButtonIcon:i,variant:t=l.Zps})=>{const f={"zep-text-yellow-500":t===r.ZpsBg||t===r.CatBg,"zep-text-typography-dark-100":t===l.Cat,"zep-text-indigo-500":l.Zps},d={[l.Cat]:p.SecondaryCat,[l.Zps]:p.SecondaryZps,[r.ZpsBg]:p.Secondary,[r.CatBg]:p.Secondary};switch(v){case"link":return e.jsx(h,{className:s(f,"zep-h-fit","zep-w-fit","zep-font-400","zep-whitespace-nowrap","hover:zep-underline","hover:zep-font-500","zep-cursor-pointer"),label:u||"",href:n,mode:g.Standalone,icon:"arrow-long-right"});case"primary-button":return n?e.jsx("a",{className:"zep-max-w-max",href:n,children:e.jsx(c,{className:"zep-whitespace-nowrap sm:zep-w-fit zep-h-fit",label:u,variant:p.Primary,icon:i,iconPosition:o})}):e.jsx(c,{className:"zep-whitespace-nowrap sm:zep-w-fit zep-h-fit",label:u,onClick:a,variant:p.Primary,icon:i,iconPosition:o});case"secondary-button":return n?e.jsx("a",{className:"zep-max-w-max",href:n,children:e.jsx(c,{className:"zep-whitespace-nowrap sm:zep-w-fit zep-h-fit",label:u,variant:d[t],icon:i,iconPosition:o})}):e.jsx(c,{className:"zep-whitespace-nowrap sm:zep-w-fit zep-h-fit",label:u,onClick:a,variant:d[t],icon:i,iconPosition:o});default:return null}},m=({tagline:v,headline:n,description:u,variant:a=l.Zps,...o})=>{const i={"zep-text-typography-light-100":a===r.ZpsBg||a===r.CatBg,"zep-text-typography-dark-100":a===l.Cat,"zep-text-indigo-500":a===l.Zps},t={"zep-text-steel-500":a===l.Zps||a===r.ZpsBg,"zep-text-typography-dark-70 zep-opacity-70":a===l.Cat,"zep-text-typography-light-70 zep-opacity-70":a===r.CatBg};return e.jsxs("div",{className:s("zep-w-full","zep-flex","zep-flex-col","zep-gap-1.5","md:zep-gap-2.5","zep-items-start"),"data-testid":"header-long-component",children:[e.jsxs("div",{className:s("zep-w-full","zep-flex","zep-flex-col","zep-gap-0.5","zep-items-start"),children:[v&&e.jsx("p",{className:s(t,"zep-typography-taglineMD","zep-break-all"),children:v}),e.jsxs("div",{className:s("zep-w-full","zep-flex","zep-flex-col","xl:zep-flex-row","xl:zep-justify-between","xl:zep-gap-2","zep-gap-1.5"),children:[e.jsx("h2",{className:s(i,"zep-max-w-[944px]","zep-break-all","zep-typography-headlineLG-fluid-cqi","zep-text-start"),children:n}),e.jsx(w,{...o,variant:a})]})]}),u&&e.jsx(z,{content:u,variant:a})]})};try{m.displayName="HeaderLongComponent",m.__docgenInfo={description:"",displayName:"HeaderLongComponent",props:{tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZPS_BG"'},{value:'"CAT_BG"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},headerButtonIcon:{defaultValue:null,description:"",name:"headerButtonIcon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"link"'},{value:'"list"'},{value:'"table"'},{value:'"email"'},{value:'"location"'},{value:'"time"'},{value:'"copy"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"delete-circle"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"add-circle"'},{value:'"marine-ship"'}]}},headerButtonIconPosition:{defaultValue:null,description:"",name:"headerButtonIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}export{m as H};
