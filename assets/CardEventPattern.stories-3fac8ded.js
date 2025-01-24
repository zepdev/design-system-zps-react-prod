import{G as l}from"./global-variants-71b69725.js";import{j as a}from"./jsx-runtime-1a9d9a93.js";import{r as _}from"./index-8b3efc3f.js";import{H as j}from"./HeaderLongComponent-4c23b567.js";import{C}from"./CardEvent-36b993c3.js";import{B as E,Z as I}from"./ZpsButton-3de454eb.js";import{L as P}from"./Layout-8fb0eebb.js";import"./_commonjsHelpers-de833af9.js";import"./index.es16-2c7a91d7.js";import"./index.es31-95f1013f.js";import"./index.es13-3580608c.js";import"./clsx-0839fdbe.js";import"./commonCSS-0b9dd3ad.js";import"./index.es24-0315e37d.js";import"./index.es34-79e31a69.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";const o=({items:t,variant:n,headline:v,buttonLabel:w,...x})=>{const[m,S]=_.useState(10),z=()=>{S(e=>Math.min(e+10,t.length))},L=t.slice(0,m);return a.jsxs(P,{className:"zep-inline-grid zep-gap-2.5 sm:zep-gap-3 md:zep-gap-4 zep-justify-center zep-bg-greyscale-100",children:[a.jsx(j,{headline:v,variant:n,...x}),a.jsx("div",{"data-testid":"zep-card-event",children:L.map((e,p)=>a.jsx("div",{className:"zep-mb-1 sm:zep-mb-1.5 xl:zep-mb-2  zep-bg-greyscale-0",children:a.jsx(C,{headline:e.headline,imageSrc:e.imageSrc,imageAlt:e.imageAlt,description:e.description,location:e.location,date:e.date,variant:n,linkSrc:e.linkSrc,linkLabel:e.linkLabel},p)},p))}),m<t.length&&a.jsx("div",{className:"zep-justify-center zep-items-center zep-flex",children:a.jsx(E,{label:w,onClick:z,variant:I.SecondaryZps})})]})};try{o.displayName="CardEventPattern",o.__docgenInfo={description:"",displayName:"CardEventPattern",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:'Omit<CardEventProps, "variant">[]'}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},buttonLabel:{defaultValue:null,description:"",name:"buttonLabel",required:!0,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const Q={title:"Patterns/CardEventPattern",component:o,tags:["autodocs"],argTypes:{items:{control:{type:"array"}},variant:{control:{type:"radio",options:Object.keys(l)}}}},i={args:{headline:"main headline",items:new Array(5).fill(null).map((t,n)=>({headline:`Headline ${n+1}`,imageSrc:"https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg",imageAlt:"worker img",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",location:"Berlin",date:"24.12.2023",linkSrc:"https://google.com",linkLabel:"Click me"})),variant:l.Zps,buttonLabel:"Weitere Ergebnisse anzeigen"}},r={args:{headline:"main headline",items:new Array(20).fill(null).map((t,n)=>({headline:`Headline ${n+1}`,imageSrc:"https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg",imageAlt:"worker img",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",location:"Berlin",date:"24.12.2023",linkSrc:"https://google.com",linkLabel:"Click me"})),buttonLabel:"Weitere Ergebnisse anzeigen",variant:l.Zps,tagline:"Zeppelin Power Systems",linkText:"Alle Lösungen für Marine anzeigen",type:"link"}},s={args:{headline:"main headline",items:new Array(100).fill(null).map((t,n)=>({headline:`Headline ${n+1}`,imageSrc:"https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg",imageAlt:"worker img",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",location:"Berlin",date:"24.12.2023",linkSrc:"https://google.com",linkLabel:"Click me"})),buttonLabel:"Weitere Ergebnisse anzeigen",variant:l.Zps,tagline:"Zeppelin Power Systems",linkText:"Alle Lösungen für Marine anzeigen",type:"link"}};var d,c,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(c=i.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var g,h,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(h=r.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var b,k,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(f=(k=s.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};const U=["With5Items","With20Items","With100Items"];export{s as With100Items,r as With20Items,i as With5Items,U as __namedExportsOrder,Q as default};
