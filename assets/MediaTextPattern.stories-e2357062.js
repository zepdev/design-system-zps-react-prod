import{j as r}from"./jsx-runtime-1a9d9a93.js";import{c as p}from"./clsx-0839fdbe.js";import{G as u}from"./global-variants-71b69725.js";import{H as x}from"./HeaderShortComponent-d4930c6a.js";import{M as g}from"./MediaText-ea214d29.js";import{L as y}from"./Layout-8fb0eebb.js";import{a as z,b as o}from"./mocks-dd8b5ca4.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index-ff2c9236.js";import"./moving-forward-arrow-a1f6b1da.js";import"./index.es24-01fa0cce.js";import"./index.es35-79e31a69.js";import"./index.es31-95f1013f.js";import"./commonCSS-0b9dd3ad.js";import"./tw-merge-1166cefb.js";import"./RichText-3f9b6e99.js";import"./index.es16-298408db.js";import"./index.es13-3580608c.js";import"./index.es18-4b39ea0e.js";import"./ZpsButton-91fac0e6.js";const n=({cards:i,variant:l=u.Zps,...a})=>r.jsxs(y,{className:p("zep-flex","md:zep-max-w-[1564px]","xl:zep-max-w-[1920px]","zep-flex-col","md:zep-gap-4","sm:zep-gap-3","zep-gap-2.5","xl:zep-px-[244px]","zep-overflow-hidden"),children:[(a==null?void 0:a.headline)&&r.jsx(x,{...a,variant:l,className:"md:zep-w-[35%] zep-w-full"}),r.jsx("div",{className:p("zep-flex","zep-flex-col","zep-gap-2.5","sm:zep-gap-3","md:zep-gap-5","xl:zep-gap-7.5"),"data-testid":"zep-media-text",children:i.map((s,f)=>r.jsx(g,{...s,variant:l,imageAlignment:f%2===0?"left":"right"},s.headline))})]});try{n.displayName="MediaTextPattern",n.__docgenInfo={description:"",displayName:"MediaTextPattern",props:{cards:{defaultValue:null,description:"",name:"cards",required:!0,type:{name:"MediaTextContentProps[]"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},showArrow:{defaultValue:null,description:"",name:"showArrow",required:!1,type:{name:"boolean"}}}}}catch{}const k={title:"Patterns/MediaTextPattern",component:n,tags:["autodocs"],argTypes:{}},e={variant:u.Zps,headline:"Headline",tagline:"TAGLINE",content:z,src:o.src,alt:o.alt,labelPrimary:"Primary",labelSecondary:"Secondary"},t={args:{cards:[e,e,e,e,e,e],headline:"Lösungen für Hilfs- und Propellerantriebe",tagline:"Zeppelin Power Systems Lösungen für Marine"}};var m,d,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    cards: [card, card, card, card, card, card],
    headline: 'Lösungen für Hilfs- und Propellerantriebe',
    tagline: 'Zeppelin Power Systems Lösungen für Marine'
  }
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const D=["Default"];export{t as Default,D as __namedExportsOrder,k as default};
