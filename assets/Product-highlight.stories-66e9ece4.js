import{j as e,c as t}from"./clsx-490306ad.js";import{B as H,Z as o}from"./ZpsButton-efe80798.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index.es13-bd73f74d.js";import"./index.es24-e7069ead.js";import"./index.es29-7715336a.js";import"./index-b85febcc.js";import"./tw-merge-1166cefb.js";const r=({productDetails:i,imageAlt:f,productImageSrc:b,buttonTitle:x,buttonText:h,imageAlignment:l,buttonVariant:v,onClick:M})=>{const z=l==="right"?"md:zep-order-1":"",C=l==="right"?"md:-zep-mr-[160px] xl:zep-mr-auto":"md:-zep-ml-[160px] xl:zep-ml-auto";return e.jsx(e.Fragment,{children:e.jsxs("div",{className:t(C,"zep-grid md:zep-gap-2 zep-grid-cols-1 md:zep-grid-cols-16 xl:zep-max-w-[2042px] zep-mx-auto"),children:[e.jsx("div",{className:t(z,"zep-mb-1 sm:zep-mb-1.5 md:zep-col-span-10"),children:e.jsx("img",{className:t("zep-aspect-[4/3]"),src:b,alt:f})}),e.jsxs("div",{className:t("zep-px-1 zep-pt-1 sm:zep-px-1.5 sm:zep-pt-1.5 md:zep-px-1.5 md:zep-pt-1.5 lg:zep-px-2 lg:zep-pt-2  md:zep-col-span-6"),children:[e.jsx("div",{className:"zep-mb-2",children:i.map((y,S)=>{const{title:s,content:A}=y;return e.jsxs("div",{className:t("zep-border-b-1 zep-border-b-greyscale-400 last:zep-border-b-[0] sm:zep-mb-1 md:zep-mb-1.5 zep-mb-1  md:last:zep-mb-3"),children:[s&&e.jsx("h2",{"data-testid":"headline",className:t("zep-typography-headlineXS-fluid-cqi zep-mb-1"),children:s}),e.jsx("p",{className:t("zep-typography-bodyText zep-my-1 md:zep-my-1.5"),children:A})]},S)})}),e.jsx(H,{variant:v,label:h,title:x,onClick:M})]})]})})};try{r.displayName="ProductHighLight",r.__docgenInfo={description:"",displayName:"ProductHighLight",props:{imageAlignment:{defaultValue:null,description:"",name:"imageAlignment",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},productImageSrc:{defaultValue:null,description:"",name:"productImageSrc",required:!0,type:{name:"string"}},imageAlt:{defaultValue:null,description:"",name:"imageAlt",required:!0,type:{name:"string"}},productDetails:{defaultValue:null,description:"",name:"productDetails",required:!0,type:{name:"ProductItem[]"}},buttonText:{defaultValue:null,description:"",name:"buttonText",required:!0,type:{name:"string"}},buttonTitle:{defaultValue:null,description:"",name:"buttonTitle",required:!1,type:{name:"string"}},buttonVariant:{defaultValue:null,description:"",name:"buttonVariant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"secondary-cat"'},{value:'"secondary-zps"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}}}}}catch{}const q={title:"Components/ProductHighLight",component:r,tags:["autodocs"],argTypes:{buttonVariant:{control:{type:"radio",options:Object.keys(o)}}}},n={args:{productDetails:[{title:"ESC für Neumotoren",content:"Für Cat Motoren und Cat Stromaggregate ist eine Abdeckung von 24–60 Monaten verfügbar, sofern die Original-Herstellergarantie noch nicht abgelaufen ist."},{title:"ESC für gebrauchte Motoren (Advantage ESC)",content:"Für Cat Motoren und Cat Stromaggregate ist eine Abdeckung von 24–60 Monaten verfügbar, sofern die Original-Herstellergarantie noch nicht abgelaufen ist."},{title:"ESC für überholte Motoren (Overhaul ESC)",content:"Für Cat Motoren und Cat Stromaggregate ist eine Abdeckung von 24–60 Monaten verfügbar, sofern die Original-Herstellergarantie noch nicht abgelaufen ist."},{title:null,content:"Für Cat Motoren und Cat Stromaggregate ist eine Abdeckung von 24–60 Monaten verfügbar."}],productImageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",alt:"Lorem ipsum dolor sit ",imageAlt:"alt text",buttonText:"Button",buttonTitle:"button title",buttonVariant:o.Primary,imageAlignment:"left"}},a={args:{productDetails:[{title:"ESC für Neumotoren",content:"Für Cat Motoren und Cat Stromaggregate ist eine Abdeckung von 24–60 Monaten verfügbar."}],productImageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",imageAlt:"alt text",buttonText:"Button",buttonTitle:"button title",imageAlignment:"left",buttonVariant:o.Primary}};var u,m,d;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: ({
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
  } as ProductHighLightProps)
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var g,c,p;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: ({
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
  } as ProductHighLightProps)
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const P=["Default","RightImageAlignment"];export{n as Default,a as RightImageAlignment,P as __namedExportsOrder,q as default};
//# sourceMappingURL=Product-highlight.stories-66e9ece4.js.map
