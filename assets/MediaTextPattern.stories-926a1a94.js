import{j as r}from"./jsx-runtime-1a9d9a93.js";import{c as s}from"./clsx-0839fdbe.js";import{G as u}from"./global-variants-893e06e6.js";import{L as x}from"./Layout-fc6ef0e0.js";import{H as g}from"./HeaderShortComponent-fb8bf7f3.js";import{M as z}from"./MediaText-532d06c8.js";import{a as y,b as m}from"./mocks-dd8b5ca4.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index-ff2c9236.js";import"./moving-forward-arrow-a1f6b1da.js";import"./index.es24-01fa0cce.js";import"./index.es35-79e31a69.js";import"./index.es31-95f1013f.js";import"./commonCSS-cc68a568.js";import"./tw-merge-1166cefb.js";import"./RichText-0640cff1.js";import"./index.es16-90aad98d.js";import"./index.es13-751bc762.js";import"./index.es18-4b39ea0e.js";import"./getUrlWithTrailingSlash-1f1feb13.js";import"./ZpsButton-11dcf968.js";const n=({cards:i,variant:l=u.Zps,...a})=>r.jsxs(x,{className:s("zep-flex","md:zep-max-w-[1564px]","xl:zep-max-w-[1920px]","zep-flex-col","md:zep-gap-4","sm:zep-gap-3","zep-gap-2.5","md:zep-px-[120px]","lg:zep-px-[240px]","zep-overflow-hidden"),children:[(a==null?void 0:a.headline)&&r.jsx(g,{...a,variant:l,className:"md:zep-w-[35%] zep-w-full"}),r.jsx("div",{className:s("zep-flex","zep-flex-col","zep-gap-2.5","sm:zep-gap-3","md:zep-gap-5","xl:zep-gap-7.5"),"data-testid":"zep-media-text",children:i.map((p,f)=>r.jsx(z,{...p,variant:l,imageAlignment:f%2===0?"left":"right"},p.headline))})]});try{n.displayName="MediaTextPattern",n.__docgenInfo={description:"",displayName:"MediaTextPattern",props:{cards:{defaultValue:null,description:"",name:"cards",required:!0,type:{name:"MediaTextContentProps[]"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},showArrow:{defaultValue:null,description:"",name:"showArrow",required:!1,type:{name:"boolean"}}}}}catch{}const D={title:"Patterns/MediaTextPattern",component:n,tags:["autodocs"],argTypes:{}},e={variant:u.Zps,headline:"Headline",tagline:"TAGLINE",content:y,src:m.src,alt:m.alt,labelPrimary:"Primary",labelSecondary:"Secondary"},t={args:{cards:[e,e,e,e,e,e],headline:"Lösungen für Hilfs- und Propellerantriebe",tagline:"Zeppelin Power Systems Lösungen für Marine"}};var o,d,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    cards: [card, card, card, card, card, card],
    headline: 'Lösungen für Hilfs- und Propellerantriebe',
    tagline: 'Zeppelin Power Systems Lösungen für Marine'
  }
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const R=["Default"];export{t as Default,R as __namedExportsOrder,D as default};
