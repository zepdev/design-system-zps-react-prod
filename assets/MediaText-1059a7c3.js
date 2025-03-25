import{j as e}from"./jsx-runtime-1a9d9a93.js";import{f as M}from"./index.es24-01fa0cce.js";import{c as f}from"./index-ff2c9236.js";import{c as l}from"./clsx-0839fdbe.js";import{r as h}from"./index-8b3efc3f.js";import{G as a,a as o}from"./global-variants-893e06e6.js";import{b as c}from"./commonCSS-cc68a568.js";import{t as g}from"./tw-merge-1166cefb.js";import{R as N}from"./RichText-ea326b20.js";import{B as s,Z as p}from"./ZpsButton-7f65ec2c.js";const x=h.createContext({imageAlignment:"left",variant:a.Zps}),w=()=>h.useContext(x),Z={[a.Zps]:["zep-text-typography-brand-steel"],[a.Cat]:["zep-text-typography-light-70 zep-opacity-70"]},S=f(["zep-typography-tagline"],{variants:{variant:Z},defaultVariants:{variant:a.Zps}}),m=({imageAlignment:n="left",variant:u=a.Zps,headline:r="",tagline:i="",content:v,labelSecondary:t,labelPrimary:d,onClickSecondary:z,onClickPrimary:y,src:k,alt:b,urlPrimary:V,urlSecondary:C,iconPrimaryPosition:j,iconSecondaryPosition:T,iconPrimary:q,iconSecondary:P})=>e.jsx(x.Provider,{value:{imageAlignment:n,variant:u},children:e.jsxs("div",{className:l("zep-container","md:zep-grid","md:zep-grid-cols-14","lg:zep-grid-cols-12","md:[grid-template-area:'pile']","zep-max-w-[1920px]","zep-relative","zep-flex","zep-flex-col"),"data-testid":"zep-mediaText-simple",children:[e.jsx(B,{src:k,alt:b}),e.jsxs(_,{children:[e.jsxs("div",{className:l("zep-flex zep-flex-col zep-gap-0.5",{"zep-hidden":!i&&!r}),children:[e.jsx("p",{"data-testid":"zep-MediaText-tagline",className:g(S({variant:u}),`zep-break-words ${!i&&"zep-hidden"}`),children:i}),e.jsx("h3",{"data-testid":"zep-MediaText-headline",className:l("zep-text-typography-light-100","zep-typography-headlineMD-fluid-cqi","zep-text-left","zep-break-words","zep-break-all","zep-hyphens-auto",{"zep-hidden":!r}),children:r})]}),e.jsx(N,{content:v,variant:u===a.Cat?o.CatBg:o.ZpsBg}),e.jsx("div",{className:l("zep-block",{"zep-hidden":!t&&!d}),"data-testid":"zep-mediatext-buttons",children:e.jsxs(M,{gap:"1.5",className:l("max-md:zep-flex","md:zep-flex-row zep-gap-1.5 md:zep-gap-2"),direction:"column",children:[t&&e.jsx(s,{icon:P,iconPosition:T,href:C,onClick:z,label:t,variant:p.Secondary}),d&&e.jsx(s,{icon:q,iconPosition:j,href:V,onClick:y,label:d,variant:p.Primary})]})})]})]})}),B=({src:n,alt:u})=>{const{imageAlignment:r}=w(),i=r==="left"?"md:[grid-column:1/7]":"md:[grid-column:9/15] lg:[grid-column:7/13]";return e.jsx("div",{"data-testid":"zep-mediaText-image",className:l("md:zep-w-full","md:[grid-area:pile]","md:zep-grid-rows-1","zep-justify-center",i),children:e.jsx("div",{className:l("zep-aspect-[4/3]"),children:e.jsx("img",{alt:u,src:n,className:l("zep-w-full zep-h-full zep-object-cover")})})})},_=({children:n})=>{const{imageAlignment:u,variant:r}=w(),i=u==="left"?"md:[grid-column:6/15] lg:[grid-column:6/13]":"md:[grid-column:1/10] lg:[grid-column:1/8]",v={[a.Zps]:c[o.ZpsBg],[a.Cat]:c[o.CatBg]},t=f([` md:[grid-area:pile]
        md:zep-grid-rows-1
        md:zep-mt-[60px]
        lg:zep-mt-[80px]
        zep-relative
        zep-h-[max-content]
        zep-z-10
        zep-p-1
        sm:zep-p-2.5
        md:zep-p-2
        lg:zep-p-4
        md:zep-w-full
        md:zep-min-w-[499px]
        xl:zep-min-w-[700px]
        zep-flex
        zep-flex-col
        zep-gap-1.5`,i],{variants:{variant:v},defaultVariants:{variant:a.Zps}});return e.jsx("div",{className:g(t({variant:r})),"data-testid":"zep-mediaText-body",children:n})};try{m.displayName="MediaText",m.__docgenInfo={description:"",displayName:"MediaText",props:{headline:{defaultValue:{value:""},description:"",name:"headline",required:!1,type:{name:"string"}},tagline:{defaultValue:{value:""},description:"",name:"tagline",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"BlocksContent"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},imageAlignment:{defaultValue:{value:"left"},description:"",name:"imageAlignment",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!0,type:{name:"string"}},labelPrimary:{defaultValue:null,description:"",name:"labelPrimary",required:!1,type:{name:"string"}},labelSecondary:{defaultValue:null,description:"",name:"labelSecondary",required:!1,type:{name:"string"}},onClickPrimary:{defaultValue:null,description:"",name:"onClickPrimary",required:!1,type:{name:"(() => void)"}},onClickSecondary:{defaultValue:null,description:"",name:"onClickSecondary",required:!1,type:{name:"(() => void)"}},urlPrimary:{defaultValue:null,description:"",name:"urlPrimary",required:!1,type:{name:"string"}},urlSecondary:{defaultValue:null,description:"",name:"urlSecondary",required:!1,type:{name:"string"}},iconPrimary:{defaultValue:null,description:"",name:"iconPrimary",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"link"'},{value:'"list"'},{value:'"table"'},{value:'"email"'},{value:'"location"'},{value:'"time"'},{value:'"copy"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"delete-circle"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"marine-ship"'},{value:'"add-circle"'}]}},iconSecondary:{defaultValue:null,description:"",name:"iconSecondary",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"link"'},{value:'"list"'},{value:'"table"'},{value:'"email"'},{value:'"location"'},{value:'"time"'},{value:'"copy"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"delete-circle"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"marine-ship"'},{value:'"add-circle"'}]}},iconPrimaryPosition:{defaultValue:null,description:"",name:"iconPrimaryPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},iconSecondaryPosition:{defaultValue:null,description:"",name:"iconSecondaryPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}export{m as M};
