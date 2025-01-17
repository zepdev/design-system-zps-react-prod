import{G as s}from"./global-variants-71b69725.js";import{j as a}from"./jsx-runtime-1a9d9a93.js";import{c as h}from"./index-ff2c9236.js";import{c as p}from"./clsx-0839fdbe.js";import{t as P}from"./tw-merge-1166cefb.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const i=({headline:o,partners:n,variant:z})=>{const v={[s.Zps]:["zep-text-typography-primary-default"],[s.Cat]:["zep-text-typography-dark-100"]},f=h([`zep-py-2
       zep-px-1 
       sm:zep-py-2.5 
       sm:zep-px-1.5 
       md:zep-px-[66px] 
       md:zep-py-2 
       lg:zep-px-[122px] 
       lg:zep-py-3 
       zep-gap-1.5 
       sm:zep-gap-2 
       lg:zep-gap-3.5 
       zep-bg-background-medium 
       zep-max-w-[1920px] 
       zep-mx-auto 
       zep-flex-col 
       zep-flex 
       zep-items-center 
       md:zep-flex-row`],{variants:{variant:v},defaultVariants:{variant:s.Zps}});return a.jsxs("div",{className:P(f({variant:z})),"data-testid":"zep-partner-communication",children:[a.jsx("h2",{className:p("md:zep-w-1/3","zep-text-center","md:zep-text-left","zep-typography-headlineMD-fluid-cqi"),children:o}),a.jsx("div",{className:p("zep-w-full","zep-flex-1","md:zep-flex-wrap"),children:a.jsx("div",{className:"zep-flex zep-flex-wrap zep-items-center zep-justify-center zep-text-center zep-gap-1.5 xl:zep-gap-2",children:n==null?void 0:n.map((e,y)=>a.jsx("div",{className:"zep-flex zep-items-center zep-justify-center",children:a.jsx("img",{alt:e==null?void 0:e.imageAlt,className:"zep-h-[32px] sm:zep-h-[40px] xl:zep-h-[56px]",src:e==null?void 0:e.image})},y))})})]})};try{i.displayName="PartnerCommunication",i.__docgenInfo={description:"",displayName:"PartnerCommunication",props:{headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},partners:{defaultValue:null,description:"",name:"partners",required:!1,type:{name:"{ image: string; imageAlt: string; }[]"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}}}}}catch{}const x=[{imageAlt:"partnerlogo CAT",image:"./assets/Logo_cat.svg"},{imageAlt:"partnerlogo KBB",image:"./assets/Logo_KBB.svg"},{imageAlt:"partnerlogo Turbolader",image:"./assets/Logo_Turbolader.svg"},{imageAlt:"partnerlogo Napier",image:"./assets/Logo_Napier.svg"},{imageAlt:"partnerlogo MAK",image:"./assets/Logo_MAK.svg"}],w={title:"Components/Partner Communication",component:i,tags:["autodocs"],argTypes:{variant:{control:{type:"radio",options:[...Object.keys(s),"default"]}}}},r={args:{headline:"Wir sind exklusive Service-Partner von diesen Herstellern:",variant:"ZPS",partners:x}},t={args:{headline:"Wir sind exklusive Service-Partner von diesen Herstellern:",variant:"ZPS",partners:x}};var l,m,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    headline: 'Wir sind exklusive Service-Partner von diesen Herstellern:',
    variant: 'ZPS',
    partners: logos
  } as PartnerCommunicationProps
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,g,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    headline: 'Wir sind exklusive Service-Partner von diesen Herstellern:',
    variant: 'ZPS',
    partners: logos
  } as PartnerCommunicationProps
}`,...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const L=["Default","With10Logos"];export{r as Default,t as With10Logos,L as __namedExportsOrder,w as default};