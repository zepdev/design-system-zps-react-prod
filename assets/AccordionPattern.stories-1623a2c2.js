import{G as o}from"./global-variants-0f433d85.js";import{j as t}from"./jsx-runtime-1a9d9a93.js";import{C as v}from"./index.es2-19177b4f.js";import{L as y,e as x}from"./index.es16-f115649c.js";import{c as b}from"./index-f96983da.js";import{B as c}from"./BlocksRenderer-628e8c9d.js";import{t as u}from"./tw-merge-1166cefb.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index.es29-7715336a.js";import"./index.es13-30c6f137.js";import"./index.es24-003a42d0.js";const z={[o.Zps]:["zep-text-typography-primary-default"],[o.Cat]:["zep-text-typography-dark-100"]},f=b([` 
        zep-items-center
        zep-max-w-[719px]
        zep-relative
    `],{variants:{variant:z},defaultVariants:{variant:o.Zps}}),l=({topDescription:r,bottomDescription:p,contents:k,variant:d})=>{const i={paragraph:({children:e})=>t.jsx("p",{children:e}),heading:({children:e})=>t.jsx("h5",{className:"zep-typography-headlineXS-fluid-cqi",children:e}),link:({children:e,url:m})=>t.jsx(y,{className:"zep-typography-link",target:x.Blank,href:m,label:e})},s={bold:({children:e})=>t.jsx("span",{className:"zep-typography-bodyStrong",children:e})};return t.jsxs("div",{className:u(f({variant:d})),"data-testid":"zep-accordion-pattern",children:[r&&t.jsx("div",{className:"zep-block zep-mb-1.5 md:zep-mb-2","data-testid":"accordion-pattern-topDescription",children:t.jsx(c,{content:r,blocks:i,modifiers:s})}),t.jsx("div",{"data-testid":"accordion-pattern-titleContent",children:t.jsx(v,{items:k.map((e,m)=>({title:e.title,content:t.jsx("div",{className:u(f({variant:d})),children:t.jsx(c,{content:e.accordionContent,blocks:i,modifiers:s})})}))})}),p&&t.jsx("div",{className:"zep-block zep-mt-1.5 md:zep-mt-2","data-testid":"accordion-pattern-bottomDescription",children:t.jsx(c,{content:p,blocks:i,modifiers:s})})]})};try{l.displayName="AccordionPattern",l.__docgenInfo={description:"",displayName:"AccordionPattern",props:{topDescription:{defaultValue:null,description:"",name:"topDescription",required:!1,type:{name:"BlocksContent"}},bottomDescription:{defaultValue:null,description:"",name:"bottomDescription",required:!1,type:{name:"BlocksContent"}},contents:{defaultValue:null,description:"",name:"contents",required:!0,type:{name:"{ title: string; accordionContent: BlocksContent; }[]"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}}}}}catch{}const n=[{type:"paragraph",children:[{text:"Unsere Produktkomponenten von Optimarin umfassen leistungsstarke UV-Systeme, effiziente Filter, robuste Rückspülpumpen, präzise Druckregelventile und bedienfreundliche Control Panel. Innovative Technologien gewährleisten eine effektive Entfernung von Organismen und Partikeln, hohe Durchflussraten und eine zuverlässige Leistung bei minimalem Wartungsaufwand. Damit sorgen unsere Ballastwasserbehandlungssysteme für eine nachhaltige und effiziente Ballastwasserbehandlung, die den höchsten Umweltstandards entspricht.",type:"text"}]}],Z={title:"Patterns/AccordionPattern",component:l,tags:["autodocs"],argTypes:{variant:{control:{type:"radio",options:[...Object.keys(o),"default"]}}}},a={args:{topDescription:n,bottomDescription:n,contents:[{title:"Title one",accordionContent:n},{title:"Title two",accordionContent:n},{title:"Title three",accordionContent:n},{title:"Title four",accordionContent:n},{title:"Title five",accordionContent:n}],variant:o.Zps}};var h,g,C;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(C=(g=a.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};const O=["Default"];export{a as Default,O as __namedExportsOrder,Z as default};
