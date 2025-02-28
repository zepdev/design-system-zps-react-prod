import{j as e}from"./jsx-runtime-1a9d9a93.js";import{m as p}from"./mocks-dd8b5ca4.js";import{E as _}from"./index.es2-cc2481f7.js";import{e as L}from"./index.es25-7ac98b1d.js";import{c as n}from"./clsx-0839fdbe.js";import{r as N}from"./index-8b3efc3f.js";import{G as A}from"./global-variants-71b69725.js";import{t as h}from"./commonCSS-0b9dd3ad.js";import{H as O}from"./HeaderLongComponent-1514266d.js";import{R as x}from"./RichText-7e253872.js";import{B as H,Z as q}from"./ZpsButton-3ea5f882.js";import{L as B}from"./Layout-59cfbfd4.js";import"./index.es31-95f1013f.js";import"./index.es13-3580608c.js";import"./index.es32-fbb642fb.js";import"./index.es74-b2c6e214.js";import"./index.es24-01fa0cce.js";import"./index.es35-79e31a69.js";import"./index.es36-e8d10e84.js";import"./index.es4-536dcfc8.js";import"./_commonjsHelpers-de833af9.js";import"./index.es16-298408db.js";import"./index.es18-4b39ea0e.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";const M=N.createContext({variant:A.Zps,message:"",buttonText:"",buttonOnClick:()=>{}}),f=()=>N.useContext(M),P=({content:a})=>{const{variant:t,message:i,buttonText:l,buttonOnClick:s}=f();return e.jsxs("div",{className:n("zep-flex","zep-flex-col","zep-gap-1.5","md:zep-px-[0px]","sm:zep-px-1.5","zep-px-1"),children:[e.jsx(x,{content:a,variant:t}),e.jsxs("div",{className:n("zep-flex","zep-flex-col","zep-gap-2","zep-pt-1.5","zep-border-t-1","zep-border-t-greyscale-400"),children:[e.jsx("p",{className:n(h[t],"zep-typography-bodyText"),children:i}),e.jsx(H,{onClick:s,className:"zep-w-full sm:zep-w-fit",variant:q.Primary,children:l})]})]})},K=({contents:a})=>{const{variant:t,message:i,buttonText:l,buttonOnClick:s}=f();return e.jsxs("div",{className:n("zep-flex","zep-flex-col","zep-gap-1.5","md:zep-px-[0px]","sm:zep-px-1.5","zep-px-1"),children:[e.jsx("div",{children:e.jsx(_,{className:h[t],items:a.map(o=>({title:o.title,content:e.jsx("div",{className:"zep-relative",children:e.jsx(x,{className:"xl:zep-mx-[0]",content:o.accordionContent,variant:t})})}))})}),e.jsxs("div",{className:n("zep-flex","zep-flex-col","zep-gap-2"),children:[e.jsx("p",{className:n(h[t],"zep-typography-bodyText"),children:i}),e.jsx(H,{onClick:s,className:"zep-w-full sm:zep-w-fit",variant:q.Primary,children:l})]})]})},D=({columns:a,dataSource:t})=>{const{variant:i,buttonText:l,message:s,buttonOnClick:o}=f();return e.jsx("div",{className:n("md:zep-px-[0px]","sm:zep-px-1.5","zep-px-1"),children:e.jsx(L,{textTop:!1,variant:i,columns:a,dataSource:t,buttonLabel:l,tableButtonOnClick:o,descriptionBottom:s,fullWidth:!0})})},r=({buttonText:a,children:t,imageAlt:i,imageSrc:l,message:s,buttonOnClick:o,variant:c=A.Zps,imageAlignment:g="left",headline:z,bottomDescription:v,topDescription:b,id:I,...R})=>{const F=g==="right"?"md:zep-flex-row-reverse":"md:zep-flex-row";return e.jsxs(B,{id:I,className:"zep-flex zep-flex-col zep-gap-2.5 sm:zep-gap-3 md:zep-gap-4 xl:zep-overflow-x-visible !zep-pl-[0] zep-pr-1 sm:zep-pr-1.5 md:zep-pr-[66px] xl:zep-pr-[122px]",testId:"text-highlight",children:[z&&e.jsx("div",{className:n("zep-max-w-[1920px]","zep-w-full","zep-px-1","sm:zep-px-1.5","md:zep-px-[66px]","xl:zep-px-[122px]"),children:e.jsx(O,{headline:z,variant:c,...R})}),e.jsxs("div",{className:n("zep-flex",F,"zep-flex-col","xl:zep-gap-4","sm:zep-gap-2","md:zep-gap-3","zep-gap-1.5"),children:[e.jsx("div",{className:"zep-max-w-[2042px] md:zep-w-[30%] zep-w-full xl:zep-overflow-x-visible md:zep-h-[645px] xl:zep-h-[1074px] zep-aspect-[4/3] xl:zep-relative",children:e.jsx("div",{className:n("xl:zep-absolute",g==="left"?"xl:zep-right-[0]":"xl:zep-left-[0]","zep-h-full","xl:zep-w-fit","zep-w-full","xl:zep-aspect-[4/3]"),children:e.jsx("img",{className:n("zep-w-full","zep-h-full","zep-aspect-[4/3]","zep-object-cover",g==="left"?"md:zep-object-right":"md:zep-object-left"),src:l,alt:i})})}),e.jsx(M.Provider,{value:{variant:c,buttonText:a,message:s,buttonOnClick:o},children:e.jsxs("div",{className:"zep-flex zep-flex-col zep-gap-1.5 md:zep-gap-2 md:zep-w-[calc(70%-48px)] md:zep-mt-2 xl:zep-w-[calc(70%-64px)]",children:[b&&e.jsx("div",{className:"zep-block","data-testid":"texthighlight-pattern-topDescription",children:e.jsx(x,{content:b,variant:c})}),t,v&&e.jsx("div",{className:"zep-block","data-testid":"texthighlight-pattern-bottomDescription",children:e.jsx(x,{content:v,variant:c})})]})})]})]})};r.Accordion=K;r.Table=D;r.RichText=P;try{r.displayName="TextHighlight",r.__docgenInfo={description:"",displayName:"TextHighlight",props:{imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!0,type:{name:"string"}},imageAlt:{defaultValue:null,description:"",name:"imageAlt",required:!0,type:{name:"string"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},imageAlignment:{defaultValue:{value:"left"},description:"",name:"imageAlignment",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},topDescription:{defaultValue:null,description:"",name:"topDescription",required:!1,type:{name:"BlocksContent"}},bottomDescription:{defaultValue:null,description:"",name:"bottomDescription",required:!1,type:{name:"BlocksContent"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary-button"'},{value:'"secondary-button"'},{value:'"link"'},{value:'"none"'}]}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},buttonText:{defaultValue:null,description:"",name:"buttonText",required:!0,type:{name:"string"}},buttonOnClick:{defaultValue:null,description:"",name:"buttonOnClick",required:!0,type:{name:"(ev: MouseEvent<HTMLElement, MouseEvent>) => void"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}}}}}catch{}const Z=[{key:"1",title:"",dataIndex:"type"},{key:"aec",title:"Active Equipment Connect",dataIndex:"aec"},{key:"foc",title:"Fleet Operations Center",dataIndex:"foc"},{key:"catVL",title:"CAT VisionLink",dataIndex:"catVL"}],G=Array.from({length:10}).map((a,t)=>({id:t,type:"Standard Funktionen",aec:"Fernüberwachung, Echtzeitdaten, Fehlerdiagnose, Proaktive Wartung, Anlagenmanagement",foc:"Fernüberwachung, Echtzeitdaten, Fehlerdiagnose, Proaktive Wartung, Anlagenmanagement",catVL:"Fernüberwachung, Echtzeitdaten, Fehlerdiagnose, Proaktive Wartung, Anlagenmanagement"})),W=[{title:"Title one",accordionContent:p},{title:"Title two",accordionContent:p},{title:"Title three",accordionContent:p},{title:"Title four",accordionContent:p}],$=[{type:"heading",level:4,children:[{type:"text",text:"Service-Modul für Verfügbarkeit & Reaktionszeit"}]},{type:"list",format:"unordered",children:[{type:"list-item",children:[{type:"text",text:"Individuelle Reaktionszeiten auf Störmeldungen"},{type:"text",text:"Verfügbarkeit von Servicetechnikern vor Ort"},{type:"text",text:"Garantierte Erreichbarkeit per Telefon oder E-Mail"},{type:"text",text:"Schnelle Störungsbeseitigung"},{type:"text",text:"Maximale Verfügbarkeit und Erhöhung der Betriebsbereitschaft"},{type:"text",text:"Minimierung von Kosten bei ungeplanten Ausfällen"}]}]}],be={title:"Patterns/TextHighlight",component:r,tags:["autodocs"],argTypes:{}},d={args:{buttonText:"Kontaktieren Sie unsere Experten",imageSrc:"https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg",imageAlt:"cat",children:e.jsx(r.RichText,{content:$}),message:"Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?",topDescription:p}},m={args:{headline:"asdad",buttonText:"Kontaktieren Sie unsere Experten",imageSrc:"https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg",imageAlt:"cat",children:e.jsx(r.Table,{columns:Z,dataSource:G}),message:"Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?"}},u={args:{buttonText:"Kontaktieren Sie unsere Experten",imageSrc:"https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg",imageAlt:"cat",children:e.jsx(r.Accordion,{contents:W}),message:"Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?"}};var T,y,k;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    buttonText: 'Kontaktieren Sie unsere Experten',
    imageSrc: 'https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg',
    imageAlt: 'cat',
    children: <TextHighlight.RichText content={content} />,
    message: 'Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?',
    topDescription: mockRichTextShort
  }
}`,...(k=(y=d.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var j,S,C;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    headline: 'asdad',
    buttonText: 'Kontaktieren Sie unsere Experten',
    imageSrc: 'https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg',
    imageAlt: 'cat',
    children: <TextHighlight.Table columns={columns} dataSource={data} />,
    message: 'Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?'
  }
}`,...(C=(S=m.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var w,V,E;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    buttonText: 'Kontaktieren Sie unsere Experten',
    imageSrc: 'https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg',
    imageAlt: 'cat',
    children: <TextHighlight.Accordion contents={accordionContents} />,
    message: 'Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?'
  }
}`,...(E=(V=u.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};const Te=["TextHighlightRichText","TextHighlightTable","TextHighlightAccordion"];export{u as TextHighlightAccordion,d as TextHighlightRichText,m as TextHighlightTable,Te as __namedExportsOrder,be as default};
