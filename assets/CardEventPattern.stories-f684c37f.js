import{G as o}from"./global-variants-893e06e6.js";import{j as l}from"./jsx-runtime-1a9d9a93.js";import{r as _}from"./index-8b3efc3f.js";import{L as I}from"./Layout-fc6ef0e0.js";import{H as j}from"./HeaderLongComponent-eb92fdf1.js";import{C}from"./CardEvent-25a9698a.js";import{B as P,Z as E}from"./ZpsButton-11dcf968.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-0839fdbe.js";import"./index.es16-90aad98d.js";import"./index.es31-95f1013f.js";import"./index.es13-751bc762.js";import"./getUrlWithTrailingSlash-1f1feb13.js";import"./RichText-0640cff1.js";import"./index.es18-4b39ea0e.js";import"./commonCSS-cc68a568.js";import"./index.es24-01fa0cce.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";const s=({items:n,variant:a,headline:k,buttonLabel:w,...x})=>{const[u,z]=_.useState(10),S=()=>{z(e=>Math.min(e+10,n.length))},L=n.slice(0,u);return l.jsxs(I,{className:"zep-inline-grid lg:zep-py-5 md:zep-py-6 sm:zep-py-4 zep-py-3 zep-gap-2.5 sm:zep-gap-3 md:zep-gap-4 zep-justify-center zep-bg-greyscale-100",children:[l.jsx(j,{headline:k,variant:a,...x}),l.jsx("div",{"data-testid":"zep-card-event",children:L.map((e,m)=>l.jsx("div",{className:"zep-mb-1 sm:zep-mb-1.5 xl:zep-mb-2  zep-bg-greyscale-0",children:l.jsx(C,{headline:e.headline,imageSrc:e.imageSrc,imageAlt:e.imageAlt,description:e.description,location:e.location,date:e.date,variant:a,linkSrc:e.linkSrc,linkLabel:e.linkLabel},m)},m))}),u<n.length&&l.jsx("div",{className:"zep-justify-center zep-items-center zep-flex",children:l.jsx(P,{label:w,onClick:S,variant:E.SecondaryZps})})]})};try{s.displayName="CardEventPattern",s.__docgenInfo={description:"",displayName:"CardEventPattern",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:'Omit<CardEventProps, "variant">[]'}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},buttonLabel:{defaultValue:null,description:"",name:"buttonLabel",required:!0,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},headerButtonIcon:{defaultValue:null,description:"",name:"headerButtonIcon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"link"'},{value:'"list"'},{value:'"table"'},{value:'"email"'},{value:'"location"'},{value:'"time"'},{value:'"copy"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"delete-circle"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"marine-ship"'},{value:'"add-circle"'}]}},headerButtonIconPosition:{defaultValue:null,description:"",name:"headerButtonIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}const Y={title:"Patterns/CardEventPattern",component:s,tags:["autodocs"],argTypes:{items:{control:{type:"array"}},variant:{control:{type:"radio",options:Object.keys(o)}}}},t={args:{headline:"main headline",items:new Array(5).fill(null).map((n,a)=>({headline:`Headline ${a+1}`,imageSrc:"https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg",imageAlt:"worker img",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",location:"Berlin",date:"24.12.2023",linkSrc:"https://google.com",linkLabel:"Click me"})),variant:o.Zps,buttonLabel:"Weitere Ergebnisse anzeigen"}},i={args:{headline:"main headline",items:new Array(20).fill(null).map((n,a)=>({headline:`Headline ${a+1}`,imageSrc:"https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg",imageAlt:"worker img",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",location:"Berlin",date:"24.12.2023",linkSrc:"https://google.com",linkLabel:"Click me"})),buttonLabel:"Weitere Ergebnisse anzeigen",variant:o.Zps,tagline:"Zeppelin Power Systems",linkText:"Alle Lösungen für Marine anzeigen",type:"link"}},r={args:{headline:"main headline",items:new Array(100).fill(null).map((n,a)=>({headline:`Headline ${a+1}`,imageSrc:"https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg",imageAlt:"worker img",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",location:"Berlin",date:"24.12.2023",linkSrc:"https://google.com",linkLabel:"Click me"})),buttonLabel:"Weitere Ergebnisse anzeigen",variant:o.Zps,tagline:"Zeppelin Power Systems",linkText:"Alle Lösungen für Marine anzeigen",type:"link"}};var p,d,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    headline: 'main headline',
    items: new Array(5).fill(null).map((_, index) => ({
      headline: \`Headline \${index + 1}\`,
      imageSrc: 'https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg',
      imageAlt: 'worker img',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      location: 'Berlin',
      date: '24.12.2023',
      linkSrc: 'https://google.com',
      linkLabel: 'Click me'
    })),
    variant: GlobalVariants.Zps,
    buttonLabel: 'Weitere Ergebnisse anzeigen'
  } as CardEventPatternProps
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var v,g,h;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    headline: 'main headline',
    items: new Array(20).fill(null).map((_, index) => ({
      headline: \`Headline \${index + 1}\`,
      imageSrc: 'https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg',
      imageAlt: 'worker img',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      location: 'Berlin',
      date: '24.12.2023',
      linkSrc: 'https://google.com',
      linkLabel: 'Click me'
    })),
    buttonLabel: 'Weitere Ergebnisse anzeigen',
    variant: GlobalVariants.Zps,
    tagline: 'Zeppelin Power Systems',
    linkText: 'Alle Lösungen für Marine anzeigen',
    type: 'link'
  } as CardEventPatternProps
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,f,b;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    headline: 'main headline',
    items: new Array(100).fill(null).map((_, index) => ({
      headline: \`Headline \${index + 1}\`,
      imageSrc: 'https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg',
      imageAlt: 'worker img',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      location: 'Berlin',
      date: '24.12.2023',
      linkSrc: 'https://google.com',
      linkLabel: 'Click me'
    })),
    buttonLabel: 'Weitere Ergebnisse anzeigen',
    variant: GlobalVariants.Zps,
    tagline: 'Zeppelin Power Systems',
    linkText: 'Alle Lösungen für Marine anzeigen',
    type: 'link'
  } as CardEventPatternProps
}`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const ee=["With5Items","With20Items","With100Items"];export{r as With100Items,i as With20Items,t as With5Items,ee as __namedExportsOrder,Y as default};
