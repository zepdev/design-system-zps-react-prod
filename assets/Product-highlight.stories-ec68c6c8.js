import{j as e}from"./jsx-runtime-1a9d9a93.js";import{c as t}from"./clsx-0839fdbe.js";import{B as j,Z as i}from"./ZpsButton-c315a052.js";import{G as k}from"./global-variants-0f433d85.js";import{t as p}from"./commonCSS-e8445c95.js";import{H as T}from"./HeaderLongComponent-f073dc99.js";import{L as B}from"./Layout-ce43c17a.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index.es13-f7a67de2.js";import"./index.es24-003a42d0.js";import"./index.es29-7715336a.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";import"./index.es16-48b7d0d2.js";const o=({productDetails:l,imageAlt:h,productImageSrc:C,buttonTitle:v,buttonText:y,imageAlignment:s,buttonVariant:M,onClick:z,variant:r=k.Zps,headline:u,...S})=>{const V=s==="right"?"md:zep-order-1":"",A=s==="right"?"md:-zep-mr-[160px] xl:zep-mr-auto":"md:-zep-ml-[160px] xl:zep-ml-auto";return e.jsxs(B,{className:"zep-flex zep-flex-col zep-gap-2.5 sm:zep-gap-3 md:zep-gap-4",children:[u&&e.jsx(T,{headline:u,...S,variant:r}),e.jsxs("div",{className:t(A,"zep-mx-auto"),children:[e.jsx("div",{className:t(V,"zep-mb-1 sm:zep-mb-1.5 md:zep-col-span-10"),children:e.jsx("img",{className:t("zep-aspect-[4/3]"),src:C,alt:h})}),e.jsxs("div",{className:t("zep-px-1 zep-pt-1 sm:zep-px-1.5 sm:zep-pt-1.5 md:zep-px-1.5 md:zep-pt-1.5 lg:zep-px-2 lg:zep-pt-2  md:zep-col-span-6"),children:[e.jsx("div",{className:"zep-mb-2",children:l.map((H,F)=>{const{title:m,content:q}=H;return e.jsxs("div",{className:t("zep-border-b-1 zep-border-b-greyscale-400 last:zep-border-b-[0] sm:zep-mb-1 md:zep-mb-1.5 zep-mb-1  md:last:zep-mb-3"),children:[m&&e.jsx("h2",{"data-testid":"headline",className:t("zep-typography-headlineXS-fluid-cqi zep-mb-1",p[r]),children:m}),e.jsx("p",{className:t("zep-typography-bodyText zep-my-1 md:zep-my-1.5",p[r]),children:q})]},F)})}),e.jsx(j,{variant:M,label:y,title:v,onClick:z})]})]})]})};try{o.displayName="ProductHighLight",o.__docgenInfo={description:"",displayName:"ProductHighLight",props:{imageAlignment:{defaultValue:null,description:"",name:"imageAlignment",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},productImageSrc:{defaultValue:null,description:"",name:"productImageSrc",required:!0,type:{name:"string"}},imageAlt:{defaultValue:null,description:"",name:"imageAlt",required:!0,type:{name:"string"}},productDetails:{defaultValue:null,description:"",name:"productDetails",required:!0,type:{name:"ProductItem[]"}},buttonText:{defaultValue:null,description:"",name:"buttonText",required:!0,type:{name:"string"}},buttonTitle:{defaultValue:null,description:"",name:"buttonTitle",required:!1,type:{name:"string"}},buttonVariant:{defaultValue:null,description:"",name:"buttonVariant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"secondary-cat"'},{value:'"secondary-zps"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}}}}}catch{}const J={title:"Components/ProductHighLight",component:o,tags:["autodocs"],argTypes:{buttonVariant:{control:{type:"radio",options:Object.keys(i)}}}},n={args:{productDetails:[{title:"ESC für Neumotoren",content:"Für Cat Motoren und Cat Stromaggregate ist eine Abdeckung von 24–60 Monaten verfügbar, sofern die Original-Herstellergarantie noch nicht abgelaufen ist."},{title:"ESC für gebrauchte Motoren (Advantage ESC)",content:"Für Cat Motoren und Cat Stromaggregate ist eine Abdeckung von 24–60 Monaten verfügbar, sofern die Original-Herstellergarantie noch nicht abgelaufen ist."},{title:"ESC für überholte Motoren (Overhaul ESC)",content:"Für Cat Motoren und Cat Stromaggregate ist eine Abdeckung von 24–60 Monaten verfügbar, sofern die Original-Herstellergarantie noch nicht abgelaufen ist."},{title:null,content:"Für Cat Motoren und Cat Stromaggregate ist eine Abdeckung von 24–60 Monaten verfügbar."}],productImageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",alt:"Lorem ipsum dolor sit ",imageAlt:"alt text",buttonText:"Button",buttonTitle:"button title",buttonVariant:i.Primary,imageAlignment:"left"}},a={args:{productDetails:[{title:"ESC für Neumotoren",content:"Für Cat Motoren und Cat Stromaggregate ist eine Abdeckung von 24–60 Monaten verfügbar."}],productImageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",imageAlt:"alt text",buttonText:"Button",buttonTitle:"button title",imageAlignment:"left",buttonVariant:i.Primary}};var d,c,g;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    productDetails: [{
      title: 'ESC für Neumotoren',
      content: 'Für Cat Motoren und Cat Stromaggregate ist eine Abdeckung von 24–60 Monaten verfügbar, sofern die Original-Herstellergarantie noch nicht abgelaufen ist.'
    }, {
      title: 'ESC für gebrauchte Motoren (Advantage ESC)',
      content: 'Für Cat Motoren und Cat Stromaggregate ist eine Abdeckung von 24–60 Monaten verfügbar, sofern die Original-Herstellergarantie noch nicht abgelaufen ist.'
    }, {
      title: 'ESC für überholte Motoren (Overhaul ESC)',
      content: 'Für Cat Motoren und Cat Stromaggregate ist eine Abdeckung von 24–60 Monaten verfügbar, sofern die Original-Herstellergarantie noch nicht abgelaufen ist.'
    }, {
      title: null,
      content: 'Für Cat Motoren und Cat Stromaggregate ist eine Abdeckung von 24–60 Monaten verfügbar.'
    }],
    productImageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    alt: 'Lorem ipsum dolor sit ',
    imageAlt: 'alt text',
    buttonText: 'Button',
    buttonTitle: 'button title',
    buttonVariant: ZpsButtonVariant.Primary,
    imageAlignment: 'left'
  } as ProductHighLightProps
}`,...(g=(c=n.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var f,b,x;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    productDetails: [{
      title: 'ESC für Neumotoren',
      content: 'Für Cat Motoren und Cat Stromaggregate ist eine Abdeckung von 24–60 Monaten verfügbar.'
    }],
    productImageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    imageAlt: 'alt text',
    buttonText: 'Button',
    buttonTitle: 'button title',
    imageAlignment: 'left',
    buttonVariant: ZpsButtonVariant.Primary
  } as ProductHighLightProps
}`,...(x=(b=a.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const K=["Default","RightImageAlignment"];export{n as Default,a as RightImageAlignment,K as __namedExportsOrder,J as default};
