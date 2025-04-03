import{G as s}from"./global-variants-893e06e6.js";import{j as a,c as l}from"./clsx-36b9529f.js";import{c as P}from"./index-9eff14f9.js";import{L as _}from"./Layout-639d4783.js";import{t as C}from"./tw-merge-1166cefb.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const n=({id:o,headline:z,partners:i,variant:x})=>{const f={[s.Zps]:["zep-text-typography-primary-default"],[s.Cat]:["zep-text-typography-dark-100"]},y=P([`zep-py-2
       sm:zep-py-2.5 
       md:zep-py-2 
       lg:zep-py-3 
       zep-gap-1.5 
       sm:zep-gap-2 
       lg:zep-gap-3.5
       zep-flex-col 
       zep-flex 
       zep-items-center 
       md:zep-flex-row
       `],{variants:{variant:f},defaultVariants:{variant:s.Zps}});return a.jsxs(_,{id:o,testId:"zep-partner-communication",wrapperClassname:"zep-bg-background-medium",className:C(y({variant:x})),children:[a.jsx("h4",{className:l("md:zep-w-1/3","zep-text-center","md:zep-text-left","zep-typography-headlineMD-fluid-cqi"),children:z}),a.jsx("div",{className:l("zep-w-full","zep-flex-1","md:zep-flex-wrap"),children:a.jsx("div",{className:"zep-flex zep-flex-wrap zep-items-center zep-justify-center zep-text-center zep-gap-1.5 xl:zep-gap-2",children:i==null?void 0:i.map((e,h)=>a.jsx("div",{className:"zep-flex zep-items-center zep-justify-center",children:a.jsx("img",{title:e==null?void 0:e.imageAlt,alt:e==null?void 0:e.imageAlt,className:"zep-h-[32px] sm:zep-h-[40px] xl:zep-h-[56px]",src:e==null?void 0:e.image})},h))})})]})};try{n.displayName="PartnerCommunication",n.__docgenInfo={description:"",displayName:"PartnerCommunication",props:{headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},partners:{defaultValue:null,description:"",name:"partners",required:!1,type:{name:"{ image: string; imageAlt: string; }[]"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const v=[{imageAlt:"partnerlogo CAT",image:"./assets/Logo_cat.svg"},{imageAlt:"partnerlogo KBB",image:"./assets/Logo_KBB.svg"},{imageAlt:"partnerlogo Turbolader",image:"./assets/Logo_Turbolader.svg"},{imageAlt:"partnerlogo Napier",image:"./assets/Logo_Napier.svg"},{imageAlt:"partnerlogo MAK",image:"./assets/Logo_MAK.svg"}],V={title:"Components/Partner Communication",component:n,tags:["autodocs"],argTypes:{variant:{control:{type:"radio",options:[...Object.keys(s),"default"]}}}},r={args:{headline:"Wir sind exklusive Service-Partner von diesen Herstellern:",variant:"ZPS",partners:v}},t={args:{headline:"Wir sind exklusive Service-Partner von diesen Herstellern:",variant:"ZPS",partners:v}};var p,m,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const Z=["Default","With10Logos"];export{r as Default,t as With10Logos,Z as __namedExportsOrder,V as default};
