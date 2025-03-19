import{j as e}from"./jsx-runtime-1a9d9a93.js";import{E as g}from"./index.es2-db2ca694.js";import{Z as y,a as c,l as j}from"./index.es16-1ce448e1.js";import{c as k}from"./index-ff2c9236.js";import{c as p}from"./clsx-0839fdbe.js";import{G as o}from"./global-variants-893e06e6.js";import{t as b}from"./commonCSS-cc68a568.js";import{g as v}from"./getUrlWithoutTrailingSlash-e7815512.js";const r=k([],{variants:{variant:b},defaultVariants:{variant:o.Zps}}),L=({variant:t,headline:l})=>l?e.jsx("h4",{"data-testid":"link-list-headline",className:p("zep-typography-headlineSM-fluid-cqi","zep-break-all",r({variant:t})),children:l}):null,f=({variant:t,description:l})=>l?e.jsx("p",{"data-testid":"link-list-description",className:p("zep-typography-bodyText","zep-break-all",r({variant:t})),children:l}):null,x=({links:t,variant:l,type:a})=>e.jsx("div",{"data-testid":"link-list-links",className:p("zep-flex","zep-flex-col","zep-items-start","zep-gap-1",r({variant:l})),children:t.map((s,i)=>{var n;return e.jsx(y,{target:(n=s.href)!=null&&n.startsWith("http")?c.Blank:c.Self,label:s.label,icon:s.icon,download:a==="download",href:v(s.href),iconPlacement:"before",mode:j.Inline},i)})}),z=({headline:t,description:l,variant:a=o.Zps,links:s,isMultiListItem:i=!1,className:n,isFooterList:d=!1})=>{const m=s.length>15?s.slice(0,15):s,h=i?"md:zep-flex zep-hidden zep-min-w-[210px]":"zep-flex zep-max-w-[774px] zep-min-w-[290px]",u=a===o.Cat||a===o.Zps?"zep-bg-background-medium":"";return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:p("zep-gap-1.5","zep-flex-col","zep-items-start","zep-p-1.5","sm:zep-p-2","md:zep-p-2.5",r({variant:a}),u,h,{"md:zep-min-w-[280px]":!d},n),"data-testid":"zep-link-list",children:[e.jsx(L,{headline:t,variant:a}),e.jsx(f,{description:l,variant:a}),e.jsx(x,{links:m,variant:a})]}),e.jsx(g,{className:p("zep-w-full",{"zep-hidden":!i,"md:zep-hidden zep-min-w-[280px] zep-border-none":i},r({variant:a}),u,n,{"!zep-px-[0] [&>button]:!zep-px-[0] [&>div]:!zep-px-[0]":d}),items:[{title:t||"",content:e.jsxs("div",{className:"zep-flex zep-flex-col zep-gap-1",children:[e.jsx(f,{description:l,variant:a}),e.jsx(x,{links:m,variant:a})]})}]})]})};try{z.displayName="LinkListItem",z.__docgenInfo={description:"",displayName:"LinkListItem",props:{headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},links:{defaultValue:null,description:"",name:"links",required:!0,type:{name:"LinkProps[]"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZPS_BG"'},{value:'"CAT_BG"'}]}},isMultiListItem:{defaultValue:{value:"false"},description:"",name:"isMultiListItem",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isFooterList:{defaultValue:{value:"false"},description:"",name:"isFooterList",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"download"'}]}}}}}catch{}export{z as L};
