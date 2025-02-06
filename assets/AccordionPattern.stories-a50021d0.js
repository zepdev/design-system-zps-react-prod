import{G as p}from"./global-variants-71b69725.js";import{j as e}from"./jsx-runtime-1a9d9a93.js";import{c as v}from"./clsx-0839fdbe.js";import{E as z}from"./index.es2-31461635.js";import{t as C}from"./commonCSS-0b9dd3ad.js";import{L as y}from"./Layout-8fb0eebb.js";import{H as k}from"./HeaderLongComponent-b44eb368.js";import{H as h}from"./HeaderShortComponent-d4930c6a.js";import{R as l}from"./RichText-aa971b31.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index.es31-95f1013f.js";import"./index.es13-3580608c.js";import"./index.es32-fbb642fb.js";import"./index.es74-b2c6e214.js";import"./index.es24-01fa0cce.js";import"./index.es35-79e31a69.js";import"./index.es16-298408db.js";import"./ZpsButton-91fac0e6.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";import"./moving-forward-arrow-a1f6b1da.js";import"./index.es18-4b39ea0e.js";const s=({topDescription:r,bottomDescription:c,contents:x,headline:o,variant:n=p.Zps,headerPosition:a="top",...m})=>e.jsxs(y,{className:v("zep-flex",{"zep-flex-col zep-gap-2 sm:zep-gap-2.5 md:zep-gap-3 xl:zep-gap-4":a==="top","md:zep-flex-row zep-flex-col zep-items-start zep-gap-2 sm:zep-gap-2.5 md:zep-gap-1.5 xl:zep-gap-5":a==="left"}),children:[o&&a==="top"&&e.jsx(k,{variant:n,headline:o,...m}),o&&a==="left"&&e.jsx(h,{variant:n,headline:o,...m,className:"zep-w-full"}),e.jsxs("div",{className:"zep-relative","data-testid":"zep-accordion-pattern",children:[r&&e.jsx("div",{className:"zep-block zep-pb-1.5 md:zep-pb-2","data-testid":"accordion-pattern-topDescription",children:e.jsx(l,{className:"xl:zep-mx-[0]",content:r,variant:n})}),e.jsx("div",{"data-testid":"accordion-pattern-titleContent",children:e.jsx(z,{className:C[n],items:x.map(d=>({title:d.title,content:e.jsx("div",{className:"zep-relative",children:e.jsx(l,{className:"xl:zep-mx-[0]",content:d.accordionContent,variant:n})})}))})}),c&&e.jsx("div",{className:"zep-block zep-pt-1.5 md:zep-pt-2","data-testid":"accordion-pattern-bottomDescription",children:e.jsx(l,{className:"xl:zep-mx-[0]",content:c,variant:n})})]})]});try{s.displayName="AccordionPattern",s.__docgenInfo={description:"",displayName:"AccordionPattern",props:{topDescription:{defaultValue:null,description:"",name:"topDescription",required:!1,type:{name:"BlocksContent"}},bottomDescription:{defaultValue:null,description:"",name:"bottomDescription",required:!1,type:{name:"BlocksContent"}},contents:{defaultValue:null,description:"",name:"contents",required:!0,type:{name:"AccordionContent[]"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},headerPosition:{defaultValue:{value:"top"},description:"",name:"headerPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"left"'}]}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}}}}}catch{}const t=[{type:"paragraph",children:[{text:"Unsere Produktkomponenten von Optimarin umfassen leistungsstarke UV-Systeme, effiziente Filter, robuste Rückspülpumpen, präzise Druckregelventile und bedienfreundliche Control Panel. Innovative Technologien gewährleisten eine effektive Entfernung von Organismen und Partikeln, hohe Durchflussraten und eine zuverlässige Leistung bei minimalem Wartungsaufwand. Damit sorgen unsere Ballastwasserbehandlungssysteme für eine nachhaltige und effiziente Ballastwasserbehandlung, die den höchsten Umweltstandards entspricht.",type:"text"}]}],F={title:"Patterns/AccordionPattern",component:s,tags:["autodocs"],argTypes:{variant:{control:{type:"radio",options:[...Object.keys(p),"default"]}}}},i={args:{topDescription:t,bottomDescription:t,contents:[{title:"Title one",accordionContent:t},{title:"Title two",accordionContent:t},{title:"Title three",accordionContent:t},{title:"Title four",accordionContent:t},{title:"Title five",accordionContent:t}],variant:p.Zps}};var u,f,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    topDescription: mockContent,
    bottomDescription: mockContent,
    contents: [{
      title: 'Title one',
      accordionContent: mockContent
    }, {
      title: 'Title two',
      accordionContent: mockContent
    }, {
      title: 'Title three',
      accordionContent: mockContent
    }, {
      title: 'Title four',
      accordionContent: mockContent
    }, {
      title: 'Title five',
      accordionContent: mockContent
    }],
    variant: GlobalVariants.Zps
  } as AccordionPatternProps
}`,...(g=(f=i.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const W=["Default"];export{i as Default,W as __namedExportsOrder,F as default};
