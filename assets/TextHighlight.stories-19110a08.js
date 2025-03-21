import{j as e}from"./jsx-runtime-1a9d9a93.js";import{m}from"./mocks-dd8b5ca4.js";import{E as X}from"./index.es2-db2ca694.js";import{Z as T,a as h,l as S}from"./index.es16-1ce448e1.js";import{p as Y}from"./index.es25-76f7c678.js";import{c as r}from"./clsx-0839fdbe.js";import{r as Z}from"./index-8b3efc3f.js";import{G as g}from"./global-variants-893e06e6.js";import{t as y}from"./commonCSS-cc68a568.js";import{g as j}from"./getUrlWithoutTrailingSlash-e7815512.js";import{L as ee}from"./Layout-fc6ef0e0.js";import{Z as ae,B as V}from"./ZpsButton-317ff0a2.js";import{H as le}from"./HeaderLongComponent-5a16b784.js";import{R as k}from"./RichText-640f3398.js";import"./index.es31-95f1013f.js";import"./index.es13-751bc762.js";import"./index.es32-fbb642fb.js";import"./index.es24-01fa0cce.js";import"./index.es35-79e31a69.js";import"./index.es4-8546a5e7.js";import"./_commonjsHelpers-de833af9.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";import"./index.es18-4b39ea0e.js";const D=Z.createContext({variant:g.Zps,message:"",buttonText:"",buttonOnClick:()=>{},buttonUrl:"",buttonVariant:ae.Primary,buttonType:"default",buttonIconPosition:"left"}),I=()=>Z.useContext(D),te=({content:d})=>{const{variant:t,message:v,buttonText:l,buttonVariant:o,buttonIconPosition:i,buttonType:n,buttonOnClick:u,buttonUrl:a,buttonIcon:c}=I();return e.jsxs("div",{className:r("zep-flex","zep-flex-col","zep-gap-1.5","md:zep-px-[0px]","sm:zep-px-1.5","zep-px-1"),children:[e.jsx(k,{content:d,variant:t}),e.jsxs("div",{className:r("zep-flex","zep-flex-col","zep-gap-2","zep-pt-1.5","zep-border-t-1","zep-border-t-greyscale-400"),children:[e.jsx("p",{className:r(y[t],"zep-typography-bodyText"),children:v}),l&&o==="link"&&e.jsx(T,{target:a!=null&&a.startsWith("http")?h.Blank:h.Self,className:t===g.Zps?"zep-text-indigo-500":"zep-text-typography-dark-100",label:l,mode:S.Inline,icon:c,iconPlacement:i==="left"?"before":"after",download:n==="download",href:j(a)}),l&&o!=="link"&&e.jsx(V,{icon:c,iconPosition:i,label:l,buttonType:n,onClick:u,variant:o,href:a})]})]})},ne=({contents:d})=>{const{variant:t,message:v,buttonText:l,buttonVariant:o,buttonIconPosition:i,buttonType:n,buttonOnClick:u,buttonUrl:a,buttonIcon:c}=I();return e.jsxs("div",{className:r("zep-flex","zep-flex-col","zep-gap-1.5","md:zep-px-[0px]","sm:zep-px-1.5","zep-px-1"),children:[e.jsx("div",{children:e.jsx(X,{className:y[t],items:d.map(s=>({title:s.title,content:e.jsx("div",{className:"zep-relative",children:e.jsx(k,{className:"lg:zep-mx-[0]",content:s.accordionContent,variant:t})})}))})}),e.jsxs("div",{className:r("zep-flex","zep-flex-col","zep-gap-1.5"),children:[e.jsx("p",{className:r(y[t],"zep-typography-bodyText"),children:v}),l&&o==="link"&&e.jsx(T,{target:a!=null&&a.startsWith("http")?h.Blank:h.Self,className:t===g.Zps?"zep-text-indigo-500":"zep-text-typography-dark-100",label:l,mode:S.Inline,icon:c,iconPlacement:i==="left"?"before":"after",download:n==="download",href:j(a)}),l&&o!=="link"&&e.jsx(V,{icon:c,iconPosition:i,label:l,buttonType:n,onClick:u,variant:o,href:a})]})]})},re=({columns:d,dataSource:t,tableMessage:v})=>{const{variant:l,message:o,buttonText:i,buttonVariant:n,buttonIconPosition:u,buttonType:a,buttonOnClick:c,buttonUrl:s,buttonIcon:f}=I();return e.jsxs("div",{className:r("md:zep-px-[0px]","sm:zep-px-1.5","zep-px-1","zep-flex","zep-flex-col","zep-gap-1.5"),children:[e.jsx(Y,{variant:l,columns:d,dataSource:t,descriptionBottom:v,fullWidth:!0}),e.jsxs("div",{className:r("zep-flex","zep-flex-col","zep-gap-1.5"),children:[e.jsx("p",{className:r(y[l],"zep-typography-bodyText"),children:o}),i&&n==="link"&&e.jsx(T,{target:s!=null&&s.startsWith("http")?h.Blank:h.Self,className:l===g.Zps?"zep-text-indigo-500":"zep-text-typography-dark-100",label:i,mode:S.Inline,icon:f,iconPlacement:u==="left"?"before":"after",download:a==="download",href:j(s)}),i&&n!=="link"&&e.jsx(V,{icon:f,iconPosition:u,label:i,buttonType:a,onClick:c,variant:n,href:s})]})]})},p=({buttonText:d,children:t,imageAlt:v,imageSrc:l,message:o,buttonOnClick:i,variant:n=g.Zps,imageAlignment:u="left",headline:a,bottomDescription:c,topDescription:s,id:f,buttonType:L,buttonVariant:O,buttonUrl:W,buttonIcon:G,buttonIconPosition:U,...$})=>{const J=u==="right"?"md:zep-flex-row-reverse":"md:zep-flex-row",Q=u==="right"?"!zep-pr-[0] zep-pl-1 sm:zep-pl-1.5 md:zep-pl-[66px] lg:zep-pl-[122px]":"!zep-pl-[0] zep-pr-1 sm:zep-pr-1.5 md:zep-pr-[66px] lg:zep-pr-[122px]";return e.jsx("div",{className:"xl:zep-overflow-clip",children:e.jsxs(ee,{id:f,className:r("zep-flex","zep-flex-col","zep-gap-2.5","sm:zep-gap-3","md:zep-gap-4","lg:zep-overflow-x-visible","layout-text-highlight",Q),testId:"text-highlight",children:[a&&e.jsx("div",{className:r("zep-max-w-[1920px]","zep-w-full","zep-px-1","sm:zep-px-1.5","md:zep-px-[66px]","lg:zep-px-[122px]"),children:e.jsx(le,{headline:a,variant:n,...$})}),e.jsxs("div",{className:r("zep-flex","zep-relative",J,"zep-flex-col","lg:zep-gap-4","sm:zep-gap-2","md:zep-gap-3","zep-gap-1.5"),children:[e.jsx("div",{className:"zep-max-w-[2042px] md:zep-w-[30%] zep-w-full xl:zep-overflow-x-visible md:zep-h-[645px] xl:zep-h-[1074px] zep-aspect-[4/3] zep-overscroll-none xl:zep-relative",children:e.jsx("div",{className:r("xl:zep-absolute",u==="left"?"xl:zep-right-[0]":"xl:zep-left-[0]","zep-h-full","xl:zep-w-fit","zep-w-full","xl:zep-aspect-[4/3]"),children:e.jsx("img",{className:r("zep-w-full","zep-h-full","zep-aspect-[4/3]","zep-object-cover",u==="left"?"md:zep-object-right":"md:zep-object-left"),src:l,alt:v})})}),e.jsx(D.Provider,{value:{variant:n,buttonText:d,message:o,buttonOnClick:i,buttonVariant:O,buttonType:L,buttonUrl:W,buttonIcon:G,buttonIconPosition:U},children:e.jsxs("div",{className:"zep-flex zep-flex-col zep-gap-1.5 md:zep-gap-2 md:zep-w-[calc(70%-48px)] md:zep-mt-2 lg:zep-w-[calc(70%-64px)]",children:[s&&e.jsx("div",{className:"zep-block","data-testid":"texthighlight-pattern-topDescription",children:e.jsx(k,{content:s,variant:n})}),t,c&&e.jsx("div",{className:"zep-block","data-testid":"texthighlight-pattern-bottomDescription",children:e.jsx(k,{content:c,variant:n})})]})})]})]})})};p.Accordion=ne;p.Table=re;p.RichText=te;try{p.displayName="TextHighlight",p.__docgenInfo={description:"",displayName:"TextHighlight",props:{imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!0,type:{name:"string"}},imageAlt:{defaultValue:null,description:"",name:"imageAlt",required:!0,type:{name:"string"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},imageAlignment:{defaultValue:{value:"left"},description:"",name:"imageAlignment",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},topDescription:{defaultValue:null,description:"",name:"topDescription",required:!1,type:{name:"BlocksContent"}},bottomDescription:{defaultValue:null,description:"",name:"bottomDescription",required:!1,type:{name:"BlocksContent"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},headerButtonIcon:{defaultValue:null,description:"",name:"headerButtonIcon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"link"'},{value:'"list"'},{value:'"table"'},{value:'"email"'},{value:'"location"'},{value:'"time"'},{value:'"copy"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"delete-circle"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"marine-ship"'},{value:'"add-circle"'}]}},headerButtonIconPosition:{defaultValue:null,description:"",name:"headerButtonIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},buttonText:{defaultValue:null,description:"",name:"buttonText",required:!1,type:{name:"string"}},buttonOnClick:{defaultValue:null,description:"",name:"buttonOnClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},buttonUrl:{defaultValue:null,description:"",name:"buttonUrl",required:!1,type:{name:"string"}},buttonVariant:{defaultValue:null,description:"",name:"buttonVariant",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"primary"'},{value:'"secondary"'},{value:'"secondary-cat"'},{value:'"secondary-zps"'},{value:'"tertiary"'}]}},buttonIcon:{defaultValue:null,description:"",name:"buttonIcon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"link"'},{value:'"list"'},{value:'"table"'},{value:'"email"'},{value:'"location"'},{value:'"time"'},{value:'"copy"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"delete-circle"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"marine-ship"'},{value:'"add-circle"'}]}},buttonType:{defaultValue:null,description:"",name:"buttonType",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"download"'}]}},buttonIconPosition:{defaultValue:null,description:"",name:"buttonIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}}}}}catch{}const ie=[{key:"1",title:"",dataIndex:"type"},{key:"aec",title:"Active Equipment Connect",dataIndex:"aec"},{key:"foc",title:"Fleet Operations Center",dataIndex:"foc"},{key:"catVL",title:"CAT VisionLink",dataIndex:"catVL"}],oe=Array.from({length:10}).map((d,t)=>({id:t,type:"Standard Funktionen",aec:"Fernüberwachung, Echtzeitdaten, Fehlerdiagnose, Proaktive Wartung, Anlagenmanagement",foc:"Fernüberwachung, Echtzeitdaten, Fehlerdiagnose, Proaktive Wartung, Anlagenmanagement",catVL:"Fernüberwachung, Echtzeitdaten, Fehlerdiagnose, Proaktive Wartung, Anlagenmanagement"})),ue=[{title:"Title one",accordionContent:m},{title:"Title two",accordionContent:m},{title:"Title three",accordionContent:m},{title:"Title four",accordionContent:m}],K=[{type:"heading",level:4,children:[{type:"text",text:"Service-Modul für Verfügbarkeit & Reaktionszeit"}]},{type:"list",format:"unordered",children:[{type:"list-item",children:[{type:"text",text:"Individuelle Reaktionszeiten auf Störmeldungen"},{type:"text",text:"Verfügbarkeit von Servicetechnikern vor Ort"},{type:"text",text:"Garantierte Erreichbarkeit per Telefon oder E-Mail"},{type:"text",text:"Schnelle Störungsbeseitigung"},{type:"text",text:"Maximale Verfügbarkeit und Erhöhung der Betriebsbereitschaft"},{type:"text",text:"Minimierung von Kosten bei ungeplanten Ausfällen"}]}]}],qe={title:"Patterns/TextHighlight",component:p,tags:["autodocs"],argTypes:{}},x={args:{buttonText:"Kontaktieren Sie unsere Experten",imageSrc:"https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg",imageAlt:"cat",imageAlignment:"left",children:e.jsx(p.RichText,{content:K}),message:"Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?",topDescription:m}},z={args:{buttonText:"Kontaktieren Sie unsere Experten",imageSrc:"https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg",imageAlt:"cat",imageAlignment:"right",children:e.jsx(p.RichText,{content:K}),message:"Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?",topDescription:m}},b={args:{headline:"asdad",buttonText:"Kontaktieren Sie unsere Experten",imageSrc:"https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg",imageAlt:"cat",children:e.jsx(p.Table,{columns:ie,dataSource:oe}),message:"Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?"}},w={args:{buttonText:"Kontaktieren Sie unsere Experten",imageSrc:"https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg",imageAlt:"cat",children:e.jsx(p.Accordion,{contents:ue}),message:"Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?"}};var C,A,E;x.parameters={...x.parameters,docs:{...(C=x.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    buttonText: 'Kontaktieren Sie unsere Experten',
    imageSrc: 'https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg',
    imageAlt: 'cat',
    imageAlignment: 'left',
    children: <TextHighlight.RichText content={content} />,
    message: 'Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?',
    topDescription: mockRichTextShort
  }
}`,...(E=(A=x.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var N,q,H;z.parameters={...z.parameters,docs:{...(N=z.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    buttonText: 'Kontaktieren Sie unsere Experten',
    imageSrc: 'https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg',
    imageAlt: 'cat',
    imageAlignment: 'right',
    children: <TextHighlight.RichText content={content} />,
    message: 'Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?',
    topDescription: mockRichTextShort
  }
}`,...(H=(q=z.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var P,M,R;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    headline: 'asdad',
    buttonText: 'Kontaktieren Sie unsere Experten',
    imageSrc: 'https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg',
    imageAlt: 'cat',
    children: <TextHighlight.Table columns={columns} dataSource={data} />,
    message: 'Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?'
  }
}`,...(R=(M=b.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var B,F,_;w.parameters={...w.parameters,docs:{...(B=w.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    buttonText: 'Kontaktieren Sie unsere Experten',
    imageSrc: 'https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg',
    imageAlt: 'cat',
    children: <TextHighlight.Accordion contents={accordionContents} />,
    message: 'Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?'
  }
}`,...(_=(F=w.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};const He=["TextHighlightRichText","imageAlignmentRight","TextHighlightTable","TextHighlightAccordion"];export{w as TextHighlightAccordion,x as TextHighlightRichText,b as TextHighlightTable,He as __namedExportsOrder,qe as default,z as imageAlignmentRight};
