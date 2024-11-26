import{j as e}from"./jsx-runtime-1a9d9a93.js";import{G as p}from"./global-variants-0f433d85.js";import{c as v}from"./index-f96983da.js";import{c as i}from"./clsx-0839fdbe.js";import{t as f}from"./tw-merge-1166cefb.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const n=({headline:a,children:r,variant:x})=>{const g={[p.Zps]:["zep-text-typography-primary-default"],[p.Cat]:["zep-text-typography-dark-100"]},u=v([`zep-py-2
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
       md:zep-flex-row`],{variants:{variant:g},defaultVariants:{variant:p.Zps}});return e.jsxs("div",{className:f(u({variant:x})),"data-testid":"zep-partner-communication",children:[e.jsx("h2",{className:i("md:zep-w-1/3","zep-text-center","md:zep-text-left","zep-typography-headlineMD-fluid-cqi"),children:a}),e.jsx("div",{className:i("zep-w-full","zep-flex-1","md:zep-flex-wrap"),children:r})]})};try{n.displayName="PartnerCommunication",n.__docgenInfo={description:"",displayName:"PartnerCommunication",props:{headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}}}}}catch{}const h=[{alt:"partnerlogo CAT",src:"./assets/Logo_cat.svg"},{alt:"partnerlogo KBB",src:"./assets/Logo_KBB.svg"},{alt:"partnerlogo Turbolader",src:"./assets/Logo_Turbolader.svg"},{alt:"partnerlogo Napier",src:"./assets/Logo_Napier.svg"},{alt:"partnerlogo MAK",src:"./assets/Logo_MAK.svg"}],w={title:"Components/Partner Communication",component:n,tags:["autodocs"],argTypes:{variant:{control:{type:"radio",options:[...Object.keys(p),"default"]}}}},t={args:{headline:"Wir sind exklusive Service-Partner von diesen Herstellern:",variant:"ZPS",children:e.jsx(e.Fragment,{children:e.jsx("div",{className:"zep-flex zep-flex-wrap zep-items-center zep-justify-center zep-text-center zep-gap-1.5 xl:zep-gap-2",children:h.map((a,r)=>e.jsx("div",{className:"zep-flex zep-items-center zep-justify-center",children:e.jsx("img",{alt:a.alt,className:"zep-h-[32px] sm:zep-h-[40px] xl:zep-h-[56px]",src:a.src})},r))})})}},s={args:{headline:"Wir sind exklusive Service-Partner von diesen Herstellern:",variant:"ZPS",children:e.jsx(e.Fragment,{children:e.jsx("div",{className:"zep-flex zep-flex-wrap zep-items-center zep-justify-center zep-text-center zep-gap-1.5 xl:zep-gap-2",children:Array.from({length:10}).map((a,r)=>e.jsx("div",{className:"zep-flex zep-items-center zep-justify-center",children:e.jsx("img",{alt:`partner logo ${r+1}`,className:"zep-h-[32px] sm:zep-h-[40px] xl:zep-h-[56px]",src:"./assets/Logo_cat.svg"})},r))})})}};var o,l,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    headline: 'Wir sind exklusive Service-Partner von diesen Herstellern:',
    variant: 'ZPS',
    children: <>
        <div className="zep-flex zep-flex-wrap zep-items-center zep-justify-center zep-text-center zep-gap-1.5 xl:zep-gap-2">
          {logos.map((logo, index) => <div key={index} className="zep-flex zep-items-center zep-justify-center">
              <img alt={logo.alt} className="zep-h-[32px] sm:zep-h-[40px] xl:zep-h-[56px]" src={logo.src} />
            </div>)}
        </div>
      </>
  } as PartnerCommunicationProps
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,d,z;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    headline: 'Wir sind exklusive Service-Partner von diesen Herstellern:',
    variant: 'ZPS',
    children: <>
        <div className="zep-flex zep-flex-wrap zep-items-center zep-justify-center zep-text-center zep-gap-1.5 xl:zep-gap-2">
          {/* Repeat the icon divs */}
          {Array.from({
          length: 10
        }).map((_, index) => <div key={index} className="zep-flex zep-items-center zep-justify-center">
              <img alt={\`partner logo \${index + 1}\`} className="zep-h-[32px] sm:zep-h-[40px] xl:zep-h-[56px]" src="./assets/Logo_cat.svg" />
            </div>)}
        </div>
      </>
  } as PartnerCommunicationProps
}`,...(z=(d=s.parameters)==null?void 0:d.docs)==null?void 0:z.source}}};const k=["Default","With10Logos"];export{t as Default,s as With10Logos,k as __namedExportsOrder,w as default};
