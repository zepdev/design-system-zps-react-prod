import{j as e}from"./jsx-runtime-1a9d9a93.js";import{E as h}from"./index.es2-db2ca694.js";import{Z as g,a as u,l as y}from"./index.es16-1ce448e1.js";import{c as j}from"./index-ff2c9236.js";import{c as p}from"./clsx-0839fdbe.js";import{G as r}from"./global-variants-893e06e6.js";import{t as v}from"./commonCSS-cc68a568.js";import{g as b}from"./getUrlWithoutTrailingSlash-e7815512.js";import{R as k}from"./RichText-640f3398.js";const o=j([],{variants:{variant:v},defaultVariants:{variant:r.Zps}}),L=({variant:l,headline:t})=>t?e.jsx("h4",{"data-testid":"link-list-headline",className:p("zep-typography-headlineSM-fluid-cqi","zep-break-all",o({variant:l})),children:t}):null,c=({variant:l,description:t})=>t?e.jsx(k,{content:t,variant:l}):null,f=({links:l,variant:t,type:a})=>e.jsx("div",{"data-testid":"link-list-links",className:p("zep-flex","zep-flex-col","zep-items-start","zep-gap-1",o({variant:t})),children:l.map((s,i)=>{var n;return e.jsx(g,{target:(n=s.href)!=null&&n.startsWith("http")?u.Blank:u.Self,label:s.label,icon:s.icon,download:a==="download",href:b(s.href),iconPlacement:"before",mode:y.Inline},i)})}),x=({headline:l,description:t,variant:a=r.Zps,links:s,isMultiListItem:i=!1,className:n,isFooterList:d=!1})=>{const z=i?"md:zep-flex zep-hidden zep-min-w-[210px]":"zep-flex md:zep-max-w-[774px] zep-min-w-[290px]",m=a===r.Cat||a===r.Zps?"zep-bg-background-medium":"";return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:p("zep-gap-1.5","zep-flex-col","zep-items-start","zep-p-1.5","sm:zep-p-2","md:zep-p-2.5",o({variant:a}),m,z,{"md:zep-min-w-[280px]":!d},n),"data-testid":"zep-link-list",children:[e.jsx(L,{headline:l,variant:a}),e.jsx(c,{description:t,variant:a}),e.jsx(f,{links:s,variant:a})]}),e.jsx(h,{className:p("zep-w-full",{"zep-hidden":!i,"md:zep-hidden zep-min-w-[280px] zep-border-none":i},o({variant:a}),m,n,{"!zep-px-[0] [&>button]:!zep-px-[0] [&>div]:!zep-px-[0]":d}),items:[{title:l||"",content:e.jsxs("div",{className:"zep-flex zep-flex-col zep-gap-1",children:[e.jsx(c,{description:t,variant:a}),e.jsx(f,{links:s,variant:a})]})}]})]})};try{x.displayName="LinkListItem",x.__docgenInfo={description:"",displayName:"LinkListItem",props:{headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},links:{defaultValue:null,description:"",name:"links",required:!0,type:{name:"LinkProps[]"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZPS_BG"'},{value:'"CAT_BG"'}]}},isMultiListItem:{defaultValue:{value:"false"},description:"",name:"isMultiListItem",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isFooterList:{defaultValue:{value:"false"},description:"",name:"isFooterList",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"download"'}]}}}}}catch{}export{x as L};
