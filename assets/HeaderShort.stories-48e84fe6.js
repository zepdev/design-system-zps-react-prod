import{G as e,a as _}from"./global-variants-71b69725.js";import{j as m}from"./jsx-runtime-1a9d9a93.js";import{c}from"./clsx-0839fdbe.js";import{b as k}from"./commonCSS-0b9dd3ad.js";import{H as W}from"./HeaderShortComponent-d4930c6a.js";import{L as j}from"./Layout-8fb0eebb.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index-ff2c9236.js";import"./moving-forward-arrow-a1f6b1da.js";const i=({className:l,variant:p=e.Zps,...d})=>{const B=d.showArrow?"md:zep-w-[40%]":"md:zep-w-[35%]";return m.jsx(j,{className:c(k[p],l,"zep-py-3","sm:zep-py-4","md:zep-py-5"),testId:"header-short",children:m.jsx(W,{...d,variant:p,className:c("zep-w-full",B)})})};try{i.displayName="HeaderShort",i.__docgenInfo={description:"",displayName:"HeaderShort",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZPS_BG"'},{value:'"CAT_BG"'}]}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},showArrow:{defaultValue:null,description:"",name:"showArrow",required:!1,type:{name:"boolean"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}}}}}catch{}const J={title:"Patterns/HeaderShort",component:i,tags:["autodocs"],argTypes:{variant:{control:{type:"radio",options:[...Object.keys(e),"default"]}}}},a={args:{variant:e.Zps,headline:"Headline",tagline:"Tagline",showArrow:!0}},r={args:{variant:e.Zps,headline:"Headline is longer than expected, This is just a long sample.",tagline:"Tagline",showArrow:!0}},n={args:{variant:e.Zps,headline:"Component without Tagline",showArrow:!0}},o={args:{variant:e.Zps,tagline:"Tagline",headline:"Component without Arrow",showArrow:!1}},t={args:{variant:_.ZpsBg,tagline:"Tagline",headline:"Component with background ZPS",showArrow:!1}},s={args:{variant:_.CatBg,tagline:"Tagline",headline:"Component with background CAT",showArrow:!1}};var u,g,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariants.Zps,
    headline: 'Headline',
    tagline: 'Tagline',
    showArrow: true
  } as HeaderShortProps
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var w,f,C;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariants.Zps,
    headline: 'Headline is longer than expected, This is just a long sample.',
    tagline: 'Tagline',
    showArrow: true
  } as HeaderShortProps
}`,...(C=(f=r.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var A,S,T;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariants.Zps,
    headline: 'Component without Tagline',
    showArrow: true
  } as HeaderShortProps
}`,...(T=(S=n.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var v,H,Z;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariants.Zps,
    tagline: 'Tagline',
    headline: 'Component without Arrow',
    showArrow: false
  } as HeaderShortProps
}`,...(Z=(H=o.parameters)==null?void 0:H.docs)==null?void 0:Z.source}}};var b,y,V;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariantExtended.ZpsBg,
    tagline: 'Tagline',
    headline: 'Component with background ZPS',
    showArrow: false
  } as HeaderShortProps
}`,...(V=(y=t.parameters)==null?void 0:y.docs)==null?void 0:V.source}}};var P,x,G;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariantExtended.CatBg,
    tagline: 'Tagline',
    headline: 'Component with background CAT',
    showArrow: false
  } as HeaderShortProps
}`,...(G=(x=s.parameters)==null?void 0:x.docs)==null?void 0:G.source}}};const K=["Default","LongHeadline","ComponentWithoutTagline","ComponentWithoutArrow","ComponentWithBackgroundZPS","ComponentWithBackgroundCat"];export{s as ComponentWithBackgroundCat,t as ComponentWithBackgroundZPS,o as ComponentWithoutArrow,n as ComponentWithoutTagline,a as Default,r as LongHeadline,K as __namedExportsOrder,J as default};
