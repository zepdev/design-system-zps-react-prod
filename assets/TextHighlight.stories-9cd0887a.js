import{j as e}from"./jsx-runtime-1a9d9a93.js";import{m}from"./mocks-dd8b5ca4.js";import{r as P}from"./index-8b3efc3f.js";import{c as r}from"./clsx-0839fdbe.js";import{E as U}from"./index.es2-5a03f684.js";import{Z as w,l as y}from"./index.es16-298408db.js";import{p as D}from"./index.es25-d0ca901d.js";import{G as h}from"./global-variants-893e06e6.js";import{t as b}from"./commonCSS-cc68a568.js";import{L as W}from"./Layout-7f280280.js";import{g as k}from"./getUrlWithoutTrailingSlash-e7815512.js";import{Z as G,B as T}from"./ZpsButton-8be1ee95.js";import{H as $}from"./HeaderLongComponent-d7611235.js";import{R as z}from"./RichText-8815f310.js";import"./_commonjsHelpers-de833af9.js";import"./index.es31-95f1013f.js";import"./index.es13-3580608c.js";import"./index.es32-fbb642fb.js";import"./index.es74-b2c6e214.js";import"./index.es24-01fa0cce.js";import"./index.es35-79e31a69.js";import"./index.es36-e8d10e84.js";import"./index.es4-536dcfc8.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";import"./index.es18-4b39ea0e.js";const M=P.createContext({variant:h.Zps,message:"",buttonText:"",buttonOnClick:()=>{},buttonUrl:"",buttonVariant:G.Primary,buttonType:"default",buttonIconPosition:"left"}),j=()=>P.useContext(M),J=({content:s})=>{const{variant:a,message:p,buttonText:t,buttonVariant:l,buttonIconPosition:i,buttonType:n,buttonOnClick:u,buttonUrl:c,buttonIcon:o}=j();return e.jsxs("div",{className:r("zep-flex","zep-flex-col","zep-gap-1.5","md:zep-px-[0px]","sm:zep-px-1.5","zep-px-1"),children:[e.jsx(z,{content:s,variant:a}),e.jsxs("div",{className:r("zep-flex","zep-flex-col","zep-gap-2","zep-pt-1.5","zep-border-t-1","zep-border-t-greyscale-400"),children:[e.jsx("p",{className:r(b[a],"zep-typography-bodyText"),children:p}),t&&l==="link"&&e.jsx(w,{className:a===h.Zps?"zep-text-indigo-500":"zep-text-typography-dark-100",label:t,mode:y.Inline,icon:o,iconPlacement:i==="left"?"before":"after",download:n==="download",href:k(c)}),t&&l!=="link"&&e.jsx(T,{icon:o,iconPosition:i,label:t,buttonType:n,onClick:u,variant:l,href:c})]})]})},Q=({contents:s})=>{const{variant:a,message:p,buttonText:t,buttonVariant:l,buttonIconPosition:i,buttonType:n,buttonOnClick:u,buttonUrl:c,buttonIcon:o}=j();return e.jsxs("div",{className:r("zep-flex","zep-flex-col","zep-gap-1.5","md:zep-px-[0px]","sm:zep-px-1.5","zep-px-1"),children:[e.jsx("div",{children:e.jsx(U,{className:b[a],items:s.map(v=>({title:v.title,content:e.jsx("div",{className:"zep-relative",children:e.jsx(z,{className:"xl:zep-mx-[0]",content:v.accordionContent,variant:a})})}))})}),e.jsxs("div",{className:r("zep-flex","zep-flex-col","zep-gap-1.5"),children:[e.jsx("p",{className:r(b[a],"zep-typography-bodyText"),children:p}),t&&l==="link"&&e.jsx(w,{className:a===h.Zps?"zep-text-indigo-500":"zep-text-typography-dark-100",label:t,mode:y.Inline,icon:o,iconPlacement:i==="left"?"before":"after",download:n==="download",href:k(c)}),t&&l!=="link"&&e.jsx(T,{icon:o,iconPosition:i,label:t,buttonType:n,onClick:u,variant:l,href:c})]})]})},X=({columns:s,dataSource:a})=>{const{variant:p,message:t,buttonText:l,buttonVariant:i,buttonIconPosition:n,buttonType:u,buttonOnClick:c,buttonUrl:o,buttonIcon:v}=j();return e.jsxs("div",{className:r("md:zep-px-[0px]","sm:zep-px-1.5","zep-px-1","zep-flex","zep-flex-col","zep-gap-1.5"),children:[e.jsx(D,{variant:p,columns:s,dataSource:a,fullWidth:!0}),e.jsxs("div",{className:r("zep-flex","zep-flex-col","zep-gap-1.5"),children:[e.jsx("p",{className:r(b[p],"zep-typography-bodyText"),children:t}),l&&i==="link"&&e.jsx(w,{className:p===h.Zps?"zep-text-indigo-500":"zep-text-typography-dark-100",label:l,mode:y.Inline,icon:v,iconPlacement:n==="left"?"before":"after",download:u==="download",href:k(o)}),l&&i!=="link"&&e.jsx(T,{icon:v,iconPosition:n,label:l,buttonType:u,onClick:c,variant:i,href:o})]})]})},d=({buttonText:s,children:a,imageAlt:p,imageSrc:t,message:l,buttonOnClick:i,variant:n=h.Zps,imageAlignment:u="left",headline:c,bottomDescription:o,topDescription:v,id:R,buttonType:B,buttonVariant:F,buttonUrl:_,buttonIcon:Z,buttonIconPosition:L,...O})=>{const K=u==="right"?"md:zep-flex-row-reverse":"md:zep-flex-row";return e.jsxs(W,{id:R,className:"zep-flex zep-flex-col zep-gap-2.5 sm:zep-gap-3 md:zep-gap-4 xl:zep-overflow-x-visible !zep-pl-[0] zep-pr-1 sm:zep-pr-1.5 md:zep-pr-[66px] xl:zep-pr-[122px]",testId:"text-highlight",children:[c&&e.jsx("div",{className:r("zep-max-w-[1920px]","zep-w-full","zep-px-1","sm:zep-px-1.5","md:zep-px-[66px]","xl:zep-px-[122px]"),children:e.jsx($,{headline:c,variant:n,...O})}),e.jsxs("div",{className:r("zep-flex",K,"zep-flex-col","xl:zep-gap-4","sm:zep-gap-2","md:zep-gap-3","zep-gap-1.5"),children:[e.jsx("div",{className:"zep-max-w-[2042px] md:zep-w-[30%] zep-w-full xl:zep-overflow-x-visible md:zep-h-[645px] xl:zep-h-[1074px] zep-aspect-[4/3] xl:zep-relative",children:e.jsx("div",{className:r("xl:zep-absolute",u==="left"?"xl:zep-right-[0]":"xl:zep-left-[0]","zep-h-full","xl:zep-w-fit","zep-w-full","xl:zep-aspect-[4/3]"),children:e.jsx("img",{className:r("zep-w-full","zep-h-full","zep-aspect-[4/3]","zep-object-cover",u==="left"?"md:zep-object-right":"md:zep-object-left"),src:t,alt:p})})}),e.jsx(M.Provider,{value:{variant:n,buttonText:s,message:l,buttonOnClick:i,buttonVariant:F,buttonType:B,buttonUrl:_,buttonIcon:Z,buttonIconPosition:L},children:e.jsxs("div",{className:"zep-flex zep-flex-col zep-gap-1.5 md:zep-gap-2 md:zep-w-[calc(70%-48px)] md:zep-mt-2 xl:zep-w-[calc(70%-64px)]",children:[v&&e.jsx("div",{className:"zep-block","data-testid":"texthighlight-pattern-topDescription",children:e.jsx(z,{content:v,variant:n})}),a,o&&e.jsx("div",{className:"zep-block","data-testid":"texthighlight-pattern-bottomDescription",children:e.jsx(z,{content:o,variant:n})})]})})]})]})};d.Accordion=Q;d.Table=X;d.RichText=J;try{d.displayName="TextHighlight",d.__docgenInfo={description:"",displayName:"TextHighlight",props:{imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!0,type:{name:"string"}},imageAlt:{defaultValue:null,description:"",name:"imageAlt",required:!0,type:{name:"string"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},imageAlignment:{defaultValue:{value:"left"},description:"",name:"imageAlignment",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},topDescription:{defaultValue:null,description:"",name:"topDescription",required:!1,type:{name:"BlocksContent"}},bottomDescription:{defaultValue:null,description:"",name:"bottomDescription",required:!1,type:{name:"BlocksContent"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},headerButtonIcon:{defaultValue:null,description:"",name:"headerButtonIcon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"link"'},{value:'"list"'},{value:'"table"'},{value:'"email"'},{value:'"location"'},{value:'"time"'},{value:'"copy"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"delete-circle"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"add-circle"'},{value:'"marine-ship"'}]}},headerButtonIconPosition:{defaultValue:null,description:"",name:"headerButtonIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},buttonText:{defaultValue:null,description:"",name:"buttonText",required:!1,type:{name:"string"}},buttonOnClick:{defaultValue:null,description:"",name:"buttonOnClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},buttonUrl:{defaultValue:null,description:"",name:"buttonUrl",required:!1,type:{name:"string"}},buttonVariant:{defaultValue:null,description:"",name:"buttonVariant",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"primary"'},{value:'"secondary"'},{value:'"secondary-cat"'},{value:'"secondary-zps"'},{value:'"tertiary"'}]}},buttonIcon:{defaultValue:null,description:"",name:"buttonIcon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"link"'},{value:'"list"'},{value:'"table"'},{value:'"email"'},{value:'"location"'},{value:'"time"'},{value:'"copy"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"delete-circle"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"add-circle"'},{value:'"marine-ship"'}]}},buttonType:{defaultValue:null,description:"",name:"buttonType",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"download"'}]}},buttonIconPosition:{defaultValue:null,description:"",name:"buttonIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}}}}}catch{}const Y=[{key:"1",title:"",dataIndex:"type"},{key:"aec",title:"Active Equipment Connect",dataIndex:"aec"},{key:"foc",title:"Fleet Operations Center",dataIndex:"foc"},{key:"catVL",title:"CAT VisionLink",dataIndex:"catVL"}],ee=Array.from({length:10}).map((s,a)=>({id:a,type:"Standard Funktionen",aec:"Fernüberwachung, Echtzeitdaten, Fehlerdiagnose, Proaktive Wartung, Anlagenmanagement",foc:"Fernüberwachung, Echtzeitdaten, Fehlerdiagnose, Proaktive Wartung, Anlagenmanagement",catVL:"Fernüberwachung, Echtzeitdaten, Fehlerdiagnose, Proaktive Wartung, Anlagenmanagement"})),ae=[{title:"Title one",accordionContent:m},{title:"Title two",accordionContent:m},{title:"Title three",accordionContent:m},{title:"Title four",accordionContent:m}],le=[{type:"heading",level:4,children:[{type:"text",text:"Service-Modul für Verfügbarkeit & Reaktionszeit"}]},{type:"list",format:"unordered",children:[{type:"list-item",children:[{type:"text",text:"Individuelle Reaktionszeiten auf Störmeldungen"},{type:"text",text:"Verfügbarkeit von Servicetechnikern vor Ort"},{type:"text",text:"Garantierte Erreichbarkeit per Telefon oder E-Mail"},{type:"text",text:"Schnelle Störungsbeseitigung"},{type:"text",text:"Maximale Verfügbarkeit und Erhöhung der Betriebsbereitschaft"},{type:"text",text:"Minimierung von Kosten bei ungeplanten Ausfällen"}]}]}],Ie={title:"Patterns/TextHighlight",component:d,tags:["autodocs"],argTypes:{}},f={args:{buttonText:"Kontaktieren Sie unsere Experten",imageSrc:"https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg",imageAlt:"cat",children:e.jsx(d.RichText,{content:le}),message:"Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?",topDescription:m}},g={args:{headline:"asdad",buttonText:"Kontaktieren Sie unsere Experten",imageSrc:"https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg",imageAlt:"cat",children:e.jsx(d.Table,{columns:Y,dataSource:ee}),message:"Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?"}},x={args:{buttonText:"Kontaktieren Sie unsere Experten",imageSrc:"https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg",imageAlt:"cat",children:e.jsx(d.Accordion,{contents:ae}),message:"Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?"}};var S,V,C;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    buttonText: 'Kontaktieren Sie unsere Experten',
    imageSrc: 'https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg',
    imageAlt: 'cat',
    children: <TextHighlight.RichText content={content} />,
    message: 'Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?',
    topDescription: mockRichTextShort
  }
}`,...(C=(V=f.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var I,N,q;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    headline: 'asdad',
    buttonText: 'Kontaktieren Sie unsere Experten',
    imageSrc: 'https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg',
    imageAlt: 'cat',
    children: <TextHighlight.Table columns={columns} dataSource={data} />,
    message: 'Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?'
  }
}`,...(q=(N=g.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var E,A,H;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    buttonText: 'Kontaktieren Sie unsere Experten',
    imageSrc: 'https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg',
    imageAlt: 'cat',
    children: <TextHighlight.Accordion contents={accordionContents} />,
    message: 'Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?'
  }
}`,...(H=(A=x.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};const Ne=["TextHighlightRichText","TextHighlightTable","TextHighlightAccordion"];export{x as TextHighlightAccordion,f as TextHighlightRichText,g as TextHighlightTable,Ne as __namedExportsOrder,Ie as default};
