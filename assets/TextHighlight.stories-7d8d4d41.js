import{j as e}from"./jsx-runtime-1a9d9a93.js";import{m as c}from"./mocks-dd8b5ca4.js";import{E as P}from"./index.es2-5a03f684.js";import{p as F}from"./index.es25-d0ca901d.js";import{c as a}from"./clsx-0839fdbe.js";import{r as A}from"./index-8b3efc3f.js";import{G as H}from"./global-variants-893e06e6.js";import{t as f}from"./commonCSS-cc68a568.js";import{H as _}from"./HeaderLongComponent-da30c6f3.js";import{R as v}from"./RichText-79d982ff.js";import{B as h,Z as g}from"./ZpsButton-47c891da.js";import{L}from"./Layout-7f280280.js";import"./index.es31-95f1013f.js";import"./index.es13-3580608c.js";import"./index.es32-fbb642fb.js";import"./index.es74-b2c6e214.js";import"./index.es24-01fa0cce.js";import"./index.es35-79e31a69.js";import"./index.es36-e8d10e84.js";import"./index.es4-536dcfc8.js";import"./_commonjsHelpers-de833af9.js";import"./index.es16-298408db.js";import"./index.es18-4b39ea0e.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";const I=A.createContext({variant:H.Zps,message:"",buttonText:"",buttonOnClick:()=>{},buttonUrl:""}),z=()=>A.useContext(I),O=({content:l})=>{const{variant:t,message:o,buttonText:n,buttonOnClick:s,buttonUrl:r}=z();return e.jsxs("div",{className:a("zep-flex","zep-flex-col","zep-gap-1.5","md:zep-px-[0px]","sm:zep-px-1.5","zep-px-1"),children:[e.jsx(v,{content:l,variant:t}),e.jsxs("div",{className:a("zep-flex","zep-flex-col","zep-gap-2","zep-pt-1.5","zep-border-t-1","zep-border-t-greyscale-400"),children:[e.jsx("p",{className:a(f[t],"zep-typography-bodyText"),children:o}),r?e.jsx("a",{className:"zep-w-full sm:zep-w-fit",href:r,children:e.jsx(h,{className:"zep-w-full sm:zep-w-fit",variant:g.Primary,children:n})}):e.jsx(h,{onClick:s,className:"zep-w-full sm:zep-w-fit",variant:g.Primary,children:n})]})]})},K=({contents:l})=>{const{variant:t,message:o,buttonText:n,buttonOnClick:s,buttonUrl:r}=z();return e.jsxs("div",{className:a("zep-flex","zep-flex-col","zep-gap-1.5","md:zep-px-[0px]","sm:zep-px-1.5","zep-px-1"),children:[e.jsx("div",{children:e.jsx(P,{className:f[t],items:l.map(u=>({title:u.title,content:e.jsx("div",{className:"zep-relative",children:e.jsx(v,{className:"xl:zep-mx-[0]",content:u.accordionContent,variant:t})})}))})}),e.jsxs("div",{className:a("zep-flex","zep-flex-col","zep-gap-2"),children:[e.jsx("p",{className:a(f[t],"zep-typography-bodyText"),children:o}),r?e.jsx("a",{href:r,className:"zep-w-full sm:zep-w-fit",children:e.jsx(h,{className:"zep-w-full sm:zep-w-fit",variant:g.Primary,children:n})}):e.jsx(h,{onClick:s,className:"zep-w-full sm:zep-w-fit",variant:g.Primary,children:n})]})]})},D=({columns:l,dataSource:t})=>{const{variant:o,buttonText:n,message:s,buttonOnClick:r}=z();return e.jsx("div",{className:a("md:zep-px-[0px]","sm:zep-px-1.5","zep-px-1"),children:e.jsx(F,{variant:o,columns:l,dataSource:t,buttonLabel:n,tableButtonOnClick:r,descriptionBottom:s,fullWidth:!0})})},i=({buttonText:l,children:t,imageAlt:o,imageSrc:n,message:s,buttonOnClick:r,variant:u=H.Zps,imageAlignment:x="left",headline:b,bottomDescription:w,topDescription:y,id:M,...B})=>{const R=x==="right"?"md:zep-flex-row-reverse":"md:zep-flex-row";return e.jsxs(L,{id:M,className:"zep-flex zep-flex-col zep-gap-2.5 sm:zep-gap-3 md:zep-gap-4 xl:zep-overflow-x-visible !zep-pl-[0] zep-pr-1 sm:zep-pr-1.5 md:zep-pr-[66px] xl:zep-pr-[122px]",testId:"text-highlight",children:[b&&e.jsx("div",{className:a("zep-max-w-[1920px]","zep-w-full","zep-px-1","sm:zep-px-1.5","md:zep-px-[66px]","xl:zep-px-[122px]"),children:e.jsx(_,{headline:b,variant:u,...B})}),e.jsxs("div",{className:a("zep-flex",R,"zep-flex-col","xl:zep-gap-4","sm:zep-gap-2","md:zep-gap-3","zep-gap-1.5"),children:[e.jsx("div",{className:"zep-max-w-[2042px] md:zep-w-[30%] zep-w-full xl:zep-overflow-x-visible md:zep-h-[645px] xl:zep-h-[1074px] zep-aspect-[4/3] xl:zep-relative",children:e.jsx("div",{className:a("xl:zep-absolute",x==="left"?"xl:zep-right-[0]":"xl:zep-left-[0]","zep-h-full","xl:zep-w-fit","zep-w-full","xl:zep-aspect-[4/3]"),children:e.jsx("img",{className:a("zep-w-full","zep-h-full","zep-aspect-[4/3]","zep-object-cover",x==="left"?"md:zep-object-right":"md:zep-object-left"),src:n,alt:o})})}),e.jsx(I.Provider,{value:{variant:u,buttonText:l,message:s,buttonOnClick:r},children:e.jsxs("div",{className:"zep-flex zep-flex-col zep-gap-1.5 md:zep-gap-2 md:zep-w-[calc(70%-48px)] md:zep-mt-2 xl:zep-w-[calc(70%-64px)]",children:[y&&e.jsx("div",{className:"zep-block","data-testid":"texthighlight-pattern-topDescription",children:e.jsx(v,{content:y,variant:u})}),t,w&&e.jsx("div",{className:"zep-block","data-testid":"texthighlight-pattern-bottomDescription",children:e.jsx(v,{content:w,variant:u})})]})})]})]})};i.Accordion=K;i.Table=D;i.RichText=O;try{i.displayName="TextHighlight",i.__docgenInfo={description:"",displayName:"TextHighlight",props:{imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!0,type:{name:"string"}},imageAlt:{defaultValue:null,description:"",name:"imageAlt",required:!0,type:{name:"string"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},imageAlignment:{defaultValue:{value:"left"},description:"",name:"imageAlignment",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},topDescription:{defaultValue:null,description:"",name:"topDescription",required:!1,type:{name:"BlocksContent"}},bottomDescription:{defaultValue:null,description:"",name:"bottomDescription",required:!1,type:{name:"BlocksContent"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary-button"'},{value:'"secondary-button"'},{value:'"link"'},{value:'"none"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},headerButtonIcon:{defaultValue:null,description:"",name:"headerButtonIcon",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"email"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"location"'},{value:'"list"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"table"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"time"'},{value:'"copy"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"search"'},{value:'"delete-circle"'},{value:'"alert"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"add-circle"'},{value:'"marine-ship"'}]}},headerButtonIconPosition:{defaultValue:null,description:"",name:"headerButtonIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},buttonText:{defaultValue:null,description:"",name:"buttonText",required:!0,type:{name:"string"}},buttonUrl:{defaultValue:null,description:"",name:"buttonUrl",required:!1,type:{name:"string"}},buttonOnClick:{defaultValue:null,description:"",name:"buttonOnClick",required:!0,type:{name:"(ev: MouseEvent<HTMLElement, MouseEvent>) => void"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}}}}}catch{}const Z=[{key:"1",title:"",dataIndex:"type"},{key:"aec",title:"Active Equipment Connect",dataIndex:"aec"},{key:"foc",title:"Fleet Operations Center",dataIndex:"foc"},{key:"catVL",title:"CAT VisionLink",dataIndex:"catVL"}],U=Array.from({length:10}).map((l,t)=>({id:t,type:"Standard Funktionen",aec:"Fernüberwachung, Echtzeitdaten, Fehlerdiagnose, Proaktive Wartung, Anlagenmanagement",foc:"Fernüberwachung, Echtzeitdaten, Fehlerdiagnose, Proaktive Wartung, Anlagenmanagement",catVL:"Fernüberwachung, Echtzeitdaten, Fehlerdiagnose, Proaktive Wartung, Anlagenmanagement"})),G=[{title:"Title one",accordionContent:c},{title:"Title two",accordionContent:c},{title:"Title three",accordionContent:c},{title:"Title four",accordionContent:c}],W=[{type:"heading",level:4,children:[{type:"text",text:"Service-Modul für Verfügbarkeit & Reaktionszeit"}]},{type:"list",format:"unordered",children:[{type:"list-item",children:[{type:"text",text:"Individuelle Reaktionszeiten auf Störmeldungen"},{type:"text",text:"Verfügbarkeit von Servicetechnikern vor Ort"},{type:"text",text:"Garantierte Erreichbarkeit per Telefon oder E-Mail"},{type:"text",text:"Schnelle Störungsbeseitigung"},{type:"text",text:"Maximale Verfügbarkeit und Erhöhung der Betriebsbereitschaft"},{type:"text",text:"Minimierung von Kosten bei ungeplanten Ausfällen"}]}]}],be={title:"Patterns/TextHighlight",component:i,tags:["autodocs"],argTypes:{}},p={args:{buttonText:"Kontaktieren Sie unsere Experten",imageSrc:"https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg",imageAlt:"cat",children:e.jsx(i.RichText,{content:W}),message:"Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?",topDescription:c}},d={args:{headline:"asdad",buttonText:"Kontaktieren Sie unsere Experten",imageSrc:"https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg",imageAlt:"cat",children:e.jsx(i.Table,{columns:Z,dataSource:U}),message:"Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?"}},m={args:{buttonText:"Kontaktieren Sie unsere Experten",imageSrc:"https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg",imageAlt:"cat",children:e.jsx(i.Accordion,{contents:G}),message:"Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?"}};var k,T,j;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    buttonText: 'Kontaktieren Sie unsere Experten',
    imageSrc: 'https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg',
    imageAlt: 'cat',
    children: <TextHighlight.RichText content={content} />,
    message: 'Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?',
    topDescription: mockRichTextShort
  }
}`,...(j=(T=p.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var S,C,V;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    headline: 'asdad',
    buttonText: 'Kontaktieren Sie unsere Experten',
    imageSrc: 'https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg',
    imageAlt: 'cat',
    children: <TextHighlight.Table columns={columns} dataSource={data} />,
    message: 'Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?'
  }
}`,...(V=(C=d.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var N,E,q;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    buttonText: 'Kontaktieren Sie unsere Experten',
    imageSrc: 'https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg',
    imageAlt: 'cat',
    children: <TextHighlight.Accordion contents={accordionContents} />,
    message: 'Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?'
  }
}`,...(q=(E=m.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};const we=["TextHighlightRichText","TextHighlightTable","TextHighlightAccordion"];export{m as TextHighlightAccordion,p as TextHighlightRichText,d as TextHighlightTable,we as __namedExportsOrder,be as default};
