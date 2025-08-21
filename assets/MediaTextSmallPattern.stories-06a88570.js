import{a as g,G as a}from"./global-variants-893e06e6.js";import{a as e}from"./mocks-dd8b5ca4.js";import{j as n,c as f}from"./clsx-36b9529f.js";import{M as J}from"./MediaTextSmall-9e007d5b.js";import{b as K}from"./commonCSS-cc68a568.js";import{H as Q}from"./HeaderLongComponent-be92e7b8.js";import{L as U}from"./Layout-639d4783.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index-9eff14f9.js";import"./RichText-ef65b208.js";import"./index.es16-64117911.js";import"./index.es32-95f1013f.js";import"./index.es13-ec565e57.js";import"./index.es17-40e95622.js";import"./index.es18-9e36226e.js";import"./getUrlWithTrailingSlash-c6e10e92.js";import"./ZpsButton-51eba90f.js";import"./index.es25-4d6bdba8.js";import"./index.es36-796b080a.js";import"./getDataLayer-2559cd39.js";import"./tw-merge-1166cefb.js";const v=({items:l,id:j,headline:h,variant:N=a.Zps,...E})=>{const i=l.length>12?l.slice(0,12):l,c=()=>{switch(N){case a.Cat:return g.CatBg;default:return g.ZpsBg}};return n.jsx(U,{id:j,wrapperClassname:K[c()??g.ZpsBg],className:f("zep-flex","zep-flex-col","zep-py-3","sm:zep-py-4","md:zep-py-5","md:zep-gap-4","sm:zep-gap-3","zep-gap-2.5"),children:n.jsxs("div",{"data-testid":"media-text-small-pattern",children:[n.jsx("div",{"data-testid":"media-text-small-pattern-headline",className:"zep-mb-2.5 sm:zep-mb-3 md:zep-mb-4 xl:zep-mb-5",children:h&&n.jsx(Q,{variant:c(),headline:h,...E})}),n.jsx("div",{"data-testid":"media-text-small-pattern-items",children:l&&n.jsx("div",{className:f("zep-grid","zep-gap-1","md:zep-gap-1.5","xl:zep-gap-2",{"xl:zep-grid-cols-3":[2,3,6,9].includes(i.length),"xl:zep-grid-cols-4":[4,5,7,8,10,11,12].includes(i.length),"md:zep-grid-cols-2":[0,1,2,4].includes(i.length),"md:zep-grid-cols-3":[3,5,6,7,8,9,10,11,12].includes(i.length),"sm:zep-grid-cols-2":!0}),children:l.map((D,O)=>n.jsx(J,{variant:c(),...D},O))})})]})})};try{v.displayName="MediaTextSmallPattern",v.__docgenInfo={description:"",displayName:"MediaTextSmallPattern",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"MediaTextSmallProps[]"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZPS_BG"'},{value:'"CAT_BG"'}]}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},headerButtonIcon:{defaultValue:null,description:"",name:"headerButtonIcon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"link"'},{value:'"list"'},{value:'"table"'},{value:'"email"'},{value:'"location"'},{value:'"time"'},{value:'"copy"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"delete-circle"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"marine-ship"'},{value:'"add-circle"'}]}},headerButtonIconPosition:{defaultValue:null,description:"",name:"headerButtonIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"enum",value:[{value:'"_self"'},{value:'"_blank"'}]}}}}}catch{}const ye={title:"Patterns/MediaTextSmallPattern",component:v,tags:["autodocs"],argTypes:{variant:{control:{type:"radio",options:["Zps","Cat"]}}}},r={args:{items:new Array(2).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e,linkText:"Link Text",type:"link",headerButtonIcon:"external-link",variant:"ZPS"}},t={args:{items:new Array(2).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e,linkText:"Link Text",type:"link",headerButtonIcon:"arrow-long-right",variant:a.Zps}},s={args:{items:new Array(3).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e,variant:a.Zps}},o={args:{items:new Array(4).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",description:e,variant:"ZPS"}},u={args:{items:new Array(5).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e,variant:a.Zps}},m={args:{items:new Array(6).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e,variant:a.Zps}},d={args:{items:new Array(7).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e,variant:a.Zps}},p={args:{items:new Array(8).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e,variant:a.Zps}};var x,y,w;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
    variant: 'ZPS'
  } as MediaTextSmallPatternProps
}`,...(w=(y=r.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var S,k,T;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(T=(k=t.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var P,Z,A;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(A=(Z=s.parameters)==null?void 0:Z.docs)==null?void 0:A.source}}};var M,_,b;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    items: new Array(4).fill({
      headline: 'Headline',
      description: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png'
    }),
    headline: 'Lösungen für Marine',
    description: mockRichText,
    variant: 'ZPS'
  } as MediaTextSmallPatternProps
}`,...(b=(_=o.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var L,z,V;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(V=(z=u.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var H,I,C;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(C=(I=m.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var R,F,B;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(B=(F=d.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var q,W,G;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(G=(W=p.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};const we=["Default","WithHeadline","With3Items","With4Items","With5Items","With6Items","With7Items","With8Items"];export{r as Default,s as With3Items,o as With4Items,u as With5Items,m as With6Items,d as With7Items,p as With8Items,t as WithHeadline,we as __namedExportsOrder,ye as default};
