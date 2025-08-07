import{G as a,a as h}from"./global-variants-893e06e6.js";import{a as e}from"./mocks-dd8b5ca4.js";import{j as n,c as f}from"./clsx-36b9529f.js";import{M as J}from"./MediaTextSmall-21f11e53.js";import{b as K}from"./commonCSS-cc68a568.js";import{H as Q}from"./HeaderLongComponent-c7f1ada6.js";import{L as U}from"./Layout-639d4783.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index-9eff14f9.js";import"./RichText-1fbf5c1b.js";import"./index.es16-64117911.js";import"./index.es32-95f1013f.js";import"./index.es13-ec565e57.js";import"./index.es17-40e95622.js";import"./index.es18-9e36226e.js";import"./getUrlWithTrailingSlash-c6e10e92.js";import"./ZpsButton-0fa17a07.js";import"./index.es25-4d6bdba8.js";import"./index.es36-796b080a.js";import"./getDataLayer-2559cd39.js";import"./tw-merge-1166cefb.js";const g=({items:l,id:j,headline:v,variant:N=a.Zps,...E})=>{const i=l.length>12?l.slice(0,12):l,p=()=>{switch(N){case a.Cat:return h.CatBg;default:return h.ZpsBg}};return n.jsx(U,{id:j,wrapperClassname:K[p()],className:f("zep-flex","zep-flex-col","md:zep-gap-4","sm:zep-gap-3","zep-gap-2.5"),children:n.jsxs("div",{"data-testid":"media-text-small-pattern",children:[n.jsx("div",{"data-testid":"media-text-small-pattern-headline",className:"zep-mb-2.5 sm:zep-mb-3 md:zep-mb-4 xl:zep-mb-5",children:v&&n.jsx(Q,{variant:p(),headline:v,...E})}),n.jsx("div",{"data-testid":"media-text-small-pattern-items",children:l&&n.jsx("div",{className:f("zep-grid","zep-gap-1","md:zep-gap-1.5","xl:zep-gap-2",{"xl:zep-grid-cols-3":[2,3,6,9].includes(i.length),"xl:zep-grid-cols-4":[4,5,7,8,10,11,12].includes(i.length),"md:zep-grid-cols-2":[0,1,2,4].includes(i.length),"md:zep-grid-cols-3":[3,5,6,7,8,9,10,11,12].includes(i.length),"sm:zep-grid-cols-2":!0}),children:l.map((D,O)=>n.jsx(J,{variant:p(),...D},O))})})]})})};try{g.displayName="MediaTextSmallPattern",g.__docgenInfo={description:"",displayName:"MediaTextSmallPattern",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"MediaTextSmallProps[]"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"any"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},headerButtonIcon:{defaultValue:null,description:"",name:"headerButtonIcon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"link"'},{value:'"list"'},{value:'"table"'},{value:'"email"'},{value:'"location"'},{value:'"time"'},{value:'"copy"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"delete-circle"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"marine-ship"'},{value:'"add-circle"'}]}},headerButtonIconPosition:{defaultValue:null,description:"",name:"headerButtonIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}const we={title:"Patterns/MediaTextSmallPattern",component:g,tags:["autodocs"],argTypes:{variant:{control:{type:"radio",options:[a.Zps,a.Cat]}}}},r={args:{items:new Array(2).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e,linkText:"Link Text",type:"link",headerButtonIcon:"external-link",variant:a.Zps}},t={args:{items:new Array(2).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e,linkText:"Link Text",type:"link",headerButtonIcon:"arrow-long-right",variant:a.Zps}},s={args:{items:new Array(3).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e,variant:a.Zps}},o={args:{items:new Array(4).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",description:e,variant:a.Zps}},u={args:{items:new Array(5).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e,variant:a.Zps}},m={args:{items:new Array(6).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e,variant:a.Zps}},d={args:{items:new Array(7).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e,variant:a.Zps}},c={args:{items:new Array(8).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e,variant:a.Zps}};var x,w,y;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    items: new Array(2).fill({
      headline: 'Headline',
      description: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png'
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: mockRichText,
    linkText: 'Link Text',
    type: 'link',
    headerButtonIcon: 'external-link',
    variant: GlobalVariants.Zps
  } as MediaTextSmallPatternProps
}`,...(y=(w=r.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var S,k,T;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    items: new Array(2).fill({
      headline: 'Headline',
      description: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png'
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: mockRichText,
    linkText: 'Link Text',
    type: 'link',
    headerButtonIcon: 'arrow-long-right',
    variant: GlobalVariants.Zps
  } as MediaTextSmallPatternProps
}`,...(T=(k=t.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var P,M,Z;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    items: new Array(3).fill({
      headline: 'Headline',
      description: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png'
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: mockRichText,
    variant: GlobalVariants.Zps
  } as MediaTextSmallPatternProps
}`,...(Z=(M=s.parameters)==null?void 0:M.docs)==null?void 0:Z.source}}};var A,b,_;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    items: new Array(4).fill({
      headline: 'Headline',
      description: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png'
    }),
    headline: 'Lösungen für Marine',
    description: mockRichText,
    variant: GlobalVariants.Zps
  } as MediaTextSmallPatternProps
}`,...(_=(b=o.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};var L,V,H;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    items: new Array(5).fill({
      headline: 'Headline',
      description: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png'
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: mockRichText,
    variant: GlobalVariants.Zps
  } as MediaTextSmallPatternProps
}`,...(H=(V=u.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var z,I,R;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    items: new Array(6).fill({
      headline: 'Headline',
      description: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png'
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: mockRichText,
    variant: GlobalVariants.Zps
  } as MediaTextSmallPatternProps
}`,...(R=(I=m.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var C,F,W;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    items: new Array(7).fill({
      headline: 'Headline',
      description: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png'
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: mockRichText,
    variant: GlobalVariants.Zps
  } as MediaTextSmallPatternProps
}`,...(W=(F=d.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var q,B,G;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    items: new Array(8).fill({
      headline: 'Headline',
      description: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png'
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: mockRichText,
    variant: GlobalVariants.Zps
  } as MediaTextSmallPatternProps
}`,...(G=(B=c.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};const ye=["Default","WithHeadline","With3Items","With4Items","With5Items","With6Items","With7Items","With8Items"];export{r as Default,s as With3Items,o as With4Items,u as With5Items,m as With6Items,d as With7Items,c as With8Items,t as WithHeadline,ye as __namedExportsOrder,we as default};
