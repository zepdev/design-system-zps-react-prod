import{j as e}from"./jsx-runtime-1a9d9a93.js";import{c as i}from"./clsx-0839fdbe.js";import{G as A}from"./global-variants-71b69725.js";import{H as j}from"./HeaderLongComponent-5c05b201.js";import{R as k}from"./RichText-3f9b6e99.js";import{B as D,Z as l}from"./ZpsButton-3ea5f882.js";import{L as S}from"./Layout-8fb0eebb.js";import{m as t}from"./mocks-dd8b5ca4.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index.es16-298408db.js";import"./index.es31-95f1013f.js";import"./index.es13-3580608c.js";import"./index.es18-4b39ea0e.js";import"./index.es24-01fa0cce.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";const n=({productDetails:o,imageAlt:h,imageSrc:b,buttonTitle:z,buttonText:y,imageAlignment:s,buttonVariant:v,onClick:V,variant:p=A.Zps,headline:m,...T})=>{const w=s==="right"?"md:zep-flex-row-reverse":"md:zep-flex-row",H=s==="right"?"md:-zep-mr-[114px] xl:-zep-mr-[244px]":"md:-zep-ml-[114px] xl:-zep-ml-[244px]";return e.jsxs(S,{className:"zep-flex zep-flex-col zep-gap-2.5 sm:zep-gap-3 md:zep-gap-4 xl:zep-overflow-x-visible zep-overflow-x-hidden",children:[m&&e.jsx(j,{headline:m,...T,variant:p}),e.jsxs("div",{className:i(H,"zep-flex",w,"zep-flex-col","xl:zep-gap-2","sm:zep-gap-1.5","zep-gap-1"),children:[e.jsx("div",{className:i("zep-max-w-[2042px]"),children:e.jsx("img",{className:i("zep-aspect-[4/3]"),src:b,alt:h})}),e.jsxs("div",{className:"zep-px-1 sm:zep-px-1.5 lg:zep-px-2 zep-flex zep-flex-col xl:zep-gap-3 sm:zep-gap-2 zep-gap-1 md:zep-min-w-[35%]",children:[e.jsx("div",{className:"zep-flex zep-flex-col zep-gap-1 sm:zep-gap-1.5 md:zep-gap-1 xl:zep-gap-1.5",children:o.map((q,B)=>e.jsx("div",{className:"zep-border-b-1 zep-border-b-greyscale-400 last:zep-border-b-[0] first:zep-pt-[0] last:zep-pb-[0] zep-py-1 sm:zep-py-1.5 md:zep-py-1 xl:zep-py-1.5",children:e.jsx(k,{content:q,variant:p})},B))}),e.jsx(D,{className:"md:zep-w-fit zep-w-full",variant:v,label:y,title:z,onClick:V})]})]})]})};try{n.displayName="ProductHighLight",n.__docgenInfo={description:"",displayName:"ProductHighLight",props:{imageAlignment:{defaultValue:null,description:"",name:"imageAlignment",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!0,type:{name:"string"}},imageAlt:{defaultValue:null,description:"",name:"imageAlt",required:!0,type:{name:"string"}},productDetails:{defaultValue:null,description:"",name:"productDetails",required:!0,type:{name:"BlocksContent[]"}},buttonText:{defaultValue:null,description:"",name:"buttonText",required:!0,type:{name:"string"}},buttonTitle:{defaultValue:null,description:"",name:"buttonTitle",required:!1,type:{name:"string"}},buttonVariant:{defaultValue:null,description:"",name:"buttonVariant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"secondary-cat"'},{value:'"secondary-zps"'},{value:'"tertiary"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary-button"'},{value:'"secondary-button"'},{value:'"link"'},{value:'"none"'}]}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const U={title:"Components/ProductHighLight",component:n,tags:["autodocs"],argTypes:{buttonVariant:{control:{type:"radio",options:Object.keys(l)}}}},a={args:{productDetails:[t,t,t],imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",alt:"Lorem ipsum dolor sit ",imageAlt:"alt text",buttonText:"Button",buttonTitle:"button title",buttonVariant:l.Primary,imageAlignment:"left"}},r={args:{productDetails:[t,t,t],imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",imageAlt:"alt text",buttonText:"Button",buttonTitle:"button title",imageAlignment:"right",buttonVariant:l.Primary}};var u,d,c;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    productDetails: [mockRichTextShort, mockRichTextShort, mockRichTextShort],
    imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    alt: 'Lorem ipsum dolor sit ',
    imageAlt: 'alt text',
    buttonText: 'Button',
    buttonTitle: 'button title',
    buttonVariant: ZpsButtonVariant.Primary,
    imageAlignment: 'left'
  } as ProductHighLightProps
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var f,g,x;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    productDetails: [mockRichTextShort, mockRichTextShort, mockRichTextShort],
    imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    imageAlt: 'alt text',
    buttonText: 'Button',
    buttonTitle: 'button title',
    imageAlignment: 'right',
    buttonVariant: ZpsButtonVariant.Primary
  } as ProductHighLightProps
}`,...(x=(g=r.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const X=["Default","RightImageAlignment"];export{a as Default,r as RightImageAlignment,X as __namedExportsOrder,U as default};
