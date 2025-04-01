import{j as e}from"./jsx-runtime-1a9d9a93.js";import{E as h}from"./index.es2-db2ca694.js";import{N as y,a as c,l as g}from"./index.es16-90aad98d.js";import{c as k}from"./index-ff2c9236.js";import{c as m}from"./clsx-0839fdbe.js";import{G as o}from"./global-variants-893e06e6.js";import{t as j}from"./commonCSS-cc68a568.js";import{g as _}from"./getDataLayer-1420585a.js";import{g as v}from"./getUrlWithTrailingSlash-1f1feb13.js";import{R as b}from"./RichText-4183caca.js";const d=k([],{variants:{variant:j},defaultVariants:{variant:o.Zps}}),V=({variant:t,headline:l})=>l?e.jsx("h4",{"data-testid":"link-list-headline",className:m("zep-typography-headlineSM-fluid-cqi","zep-hyphens-auto","zep-break-normal",d({variant:t})),children:l}):null,f=({variant:t,description:l})=>l?e.jsx(b,{content:l,variant:t}):null,x=({links:t,variant:l,type:a,headline:i,isFooterList:s})=>{const p=_();return e.jsx("div",{"data-testid":"link-list-links",className:m("zep-flex","zep-flex-col","zep-items-start","zep-gap-1",d({variant:l})),children:t.map((n,u)=>{var r;return e.jsx(y,{target:(r=n.href)!=null&&r.startsWith("http")?c.Blank:c.Self,label:n.label,icon:n.icon,download:a==="download",href:v(n.href),iconPlacement:"before",onClickCapture:()=>{p.push({event:s?"interaction_footer":"interaction_linklist",link_text:n.label,link_context:i,link_section:s?"footer":i})},mode:g.Inline},u)})})},z=({headline:t,description:l,variant:a=o.Zps,links:i,isMultiListItem:s=!1,className:p,isFooterList:n=!1})=>{const u=s?"md:zep-flex zep-hidden zep-min-w-[210px]":"zep-flex md:zep-max-w-[774px] zep-min-w-[290px]",r=a===o.Cat||a===o.Zps?"zep-bg-background-medium":"";return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:m("zep-gap-1.5","zep-flex-col","zep-items-start","zep-p-1.5","sm:zep-p-2","md:zep-p-2.5",d({variant:a}),r,u,{"md:zep-min-w-[280px]":!n},p),"data-testid":"zep-link-list",children:[e.jsx(V,{headline:t,variant:a}),e.jsx(f,{description:l,variant:a}),e.jsx(x,{links:i,variant:a,headline:t,isFooterList:n})]}),e.jsx(h,{className:m("zep-w-full",{"zep-hidden":!s,"md:zep-hidden zep-min-w-[280px] zep-border-none":s},d({variant:a}),r,p,{"!zep-px-[0] [&>button]:!zep-px-[0] [&>div]:!zep-px-[0]":n}),items:[{title:t||"",content:e.jsxs("div",{className:"zep-flex zep-flex-col zep-gap-1",children:[e.jsx(f,{description:l,variant:a}),e.jsx(x,{links:i,variant:a,headline:t,isFooterList:n})]})}]})]})};try{z.displayName="LinkListItem",z.__docgenInfo={description:"",displayName:"LinkListItem",props:{headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},links:{defaultValue:null,description:"",name:"links",required:!0,type:{name:"LinkProps[]"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZPS_BG"'},{value:'"CAT_BG"'}]}},isMultiListItem:{defaultValue:{value:"false"},description:"",name:"isMultiListItem",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isFooterList:{defaultValue:{value:"false"},description:"",name:"isFooterList",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"download"'}]}}}}}catch{}export{z as L};
