import{G as t}from"./global-variants-893e06e6.js";import{j as a}from"./jsx-runtime-1a9d9a93.js";import{E as S}from"./index.es2-db2ca694.js";import{p as I,r as y}from"./index.es25-76f7c678.js";import{c as d}from"./clsx-0839fdbe.js";import{t as O}from"./commonCSS-cc68a568.js";import{L as B}from"./Layout-fc6ef0e0.js";import{H as Z}from"./HeaderLongComponent-d165ea7b.js";import{H as _}from"./HeaderShortComponent-fb8bf7f3.js";import{R as p}from"./RichText-12707c92.js";import{B as x}from"./ZpsButton-f2679278.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index.es31-95f1013f.js";import"./index.es13-751bc762.js";import"./index.es32-fbb642fb.js";import"./index.es24-01fa0cce.js";import"./index.es35-79e31a69.js";import"./index.es4-8546a5e7.js";import"./index.es16-10934590.js";import"./getUrlWithTrailingSlash-bc205b91.js";import"./index-ff2c9236.js";import"./moving-forward-arrow-a1f6b1da.js";import"./index.es18-4b39ea0e.js";import"./tw-merge-1166cefb.js";const f=({topDescription:o,bottomDescription:r,contents:v,headline:u,variant:n=t.Zps,headerPosition:i="top",buttonVariant:E,buttonOnClick:D,buttonIcon:P,buttonText:m,id:N,buttonUrl:A,...h})=>a.jsxs(B,{id:N,className:d("zep-flex",{"zep-flex-col zep-items-start zep-gap-2 sm:zep-gap-2.5 md:zep-gap-3 xl:zep-gap-4":i==="top","md:zep-flex-row zep-flex-col zep-items-start zep-gap-2 sm:zep-gap-2.5 md:zep-gap-1.5 xl:zep-gap-5":i==="left"}),children:[u&&i==="top"&&a.jsx(Z,{variant:n,headline:u,...h}),u&&i==="left"&&a.jsx(_,{variant:n,headline:u,...h,className:"zep-w-full"}),a.jsxs("div",{className:"zep-relative zep-w-full","data-testid":"zep-accordion-pattern",children:[o&&a.jsx("div",{className:"zep-block zep-pb-1.5 md:zep-pb-2","data-testid":"accordion-pattern-topDescription",children:a.jsx(p,{content:o,variant:n})}),a.jsx("div",{"data-testid":"accordion-pattern-titleContent",children:a.jsx(S,{className:O[n],items:v==null?void 0:v.map(e=>{var g,k,b,w;return{title:e==null?void 0:e.title,content:a.jsxs("div",{className:"zep-relative zep-flex zep-flex-col zep-items-start zep-justify-start zep-gap-2.5",children:[(e==null?void 0:e.accordionContent)&&a.jsx(p,{content:e==null?void 0:e.accordionContent,variant:n}),(e==null?void 0:e.table)&&a.jsxs("div",{className:"zep-flex zep-w-full zep-flex-col zep-gap-1.5",children:[a.jsx(I,{variant:n===t.Zps?y.Zps:y.Cat,columns:((g=e==null?void 0:e.table)==null?void 0:g.columns)||[],dataSource:((k=e==null?void 0:e.table)==null?void 0:k.dataSource)||[]}),((b=e==null?void 0:e.table)==null?void 0:b.message)&&a.jsx("span",{className:d("zep-typography-supportText",`${n===t.Zps?"zep-text-indigo-500":"zep-text-typography-dark-100"}`),children:(w=e==null?void 0:e.table)==null?void 0:w.message})]}),(e==null?void 0:e.message)&&a.jsx("span",{className:d("zep-typography-bodyText",`${n===t.Zps?"zep-text-indigo-500":"zep-text-typography-dark-100"}`),children:e==null?void 0:e.message}),e.buttonText&&a.jsx(x,{href:e==null?void 0:e.buttonUrl,icon:e==null?void 0:e.buttonIcon,onClick:e==null?void 0:e.buttonOnClick,variant:e==null?void 0:e.buttonVariant,children:e==null?void 0:e.buttonText})]})}})})}),r&&a.jsx("div",{className:"zep-block zep-pt-1.5 md:zep-pt-2","data-testid":"accordion-pattern-bottomDescription",children:a.jsx(p,{content:r,variant:n})}),m&&a.jsx(x,{href:A,className:"md:zep-mt-2.5 sm:zep-mt-2 zep-mt-1.5",onClick:D,variant:E,icon:P,children:m})]})]});try{f.displayName="AccordionPattern",f.__docgenInfo={description:"",displayName:"AccordionPattern",props:{topDescription:{defaultValue:null,description:"",name:"topDescription",required:!1,type:{name:"BlocksContent"}},bottomDescription:{defaultValue:null,description:"",name:"bottomDescription",required:!1,type:{name:"BlocksContent"}},contents:{defaultValue:null,description:"",name:"contents",required:!0,type:{name:"AccordionContent[]"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},headerPosition:{defaultValue:{value:"top"},description:"",name:"headerPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"left"'}]}},buttonText:{defaultValue:null,description:"",name:"buttonText",required:!1,type:{name:"string"}},buttonOnClick:{defaultValue:null,description:"",name:"buttonOnClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},buttonUrl:{defaultValue:null,description:"",name:"buttonUrl",required:!1,type:{name:"string"}},buttonVariant:{defaultValue:null,description:"",name:"buttonVariant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"secondary-cat"'},{value:'"secondary-zps"'},{value:'"tertiary"'}]}},buttonIcon:{defaultValue:null,description:"",name:"buttonIcon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"link"'},{value:'"list"'},{value:'"table"'},{value:'"email"'},{value:'"location"'},{value:'"time"'},{value:'"copy"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"delete-circle"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"marine-ship"'},{value:'"add-circle"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},headerButtonIcon:{defaultValue:null,description:"",name:"headerButtonIcon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"link"'},{value:'"list"'},{value:'"table"'},{value:'"email"'},{value:'"location"'},{value:'"time"'},{value:'"copy"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"delete-circle"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"marine-ship"'},{value:'"add-circle"'}]}},headerButtonIconPosition:{defaultValue:null,description:"",name:"headerButtonIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}const L=[{key:"1",title:"",dataIndex:"type"},{key:"aec",title:"Active Equipment Connect",dataIndex:"aec"},{key:"foc",title:"Fleet Operations Center",dataIndex:"foc"},{key:"catVL",title:"CAT VisionLink",dataIndex:"catVL"}],F=Array.from({length:10}).map((o,r)=>({id:r,type:"Standard Funktionen",aec:"Fernüberwachung, Echtzeitdaten, Fehlerdiagnose, Proaktive Wartung, Anlagenmanagement",foc:"Fernüberwachung, Echtzeitdaten, Fehlerdiagnose, Proaktive Wartung, Anlagenmanagement",catVL:"Fernüberwachung, Echtzeitdaten, Fehlerdiagnose, Proaktive Wartung, Anlagenmanagement"})),l=[{type:"paragraph",children:[{text:"Unsere Produktkomponenten von Optimarin umfassen leistungsstarke UV-Systeme, effiziente Filter, robuste Rückspülpumpen, präzise Druckregelventile und bedienfreundliche Control Panel. Innovative Technologien gewährleisten eine effektive Entfernung von Organismen und Partikeln, hohe Durchflussraten und eine zuverlässige Leistung bei minimalem Wartungsaufwand. Damit sorgen unsere Ballastwasserbehandlungssysteme für eine nachhaltige und effiziente Ballastwasserbehandlung, die den höchsten Umweltstandards entspricht.",type:"text"}]}],pe={title:"Patterns/AccordionPattern",component:f,tags:["autodocs"],argTypes:{variant:{control:{type:"radio",options:[...Object.keys(t),"default"]}}}},c={args:{topDescription:l,bottomDescription:l,contents:[{title:"Title one",accordionContent:l},{title:"Title two",accordionContent:l},{title:"Title three",accordionContent:l},{title:"Title four",accordionContent:l},{title:"Title five",accordionContent:l}],variant:t.Zps,buttonText:"Kontaktieren Sie unsere Experten",buttonOnClick:()=>console.log("click")}},s={args:{topDescription:l,bottomDescription:l,contents:[{title:"Title one",accordionContent:l},{title:"Tiwtle two",table:{columns:L,dataSource:F}}],variant:t.Zps,buttonText:"Kontaktieren Sie unsere Experten",buttonOnClick:()=>console.log("click")}};var z,C,T;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
    variant: GlobalVariants.Zps,
    buttonText: 'Kontaktieren Sie unsere Experten',
    buttonOnClick: () => console.log('click')
  } as AccordionPatternProps
}`,...(T=(C=c.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var V,j,q;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    topDescription: mockContent,
    bottomDescription: mockContent,
    contents: [{
      title: 'Title one',
      accordionContent: mockContent
    }, {
      title: 'Tiwtle two',
      table: {
        columns: columns,
        dataSource: data
      }
    }],
    variant: GlobalVariants.Zps,
    buttonText: 'Kontaktieren Sie unsere Experten',
    buttonOnClick: () => console.log('click')
  } as AccordionPatternProps
}`,...(q=(j=s.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};const fe=["Default","WithTable"];export{c as Default,s as WithTable,fe as __namedExportsOrder,pe as default};
