import{j as e}from"./jsx-runtime-1a9d9a93.js";import{G as c}from"./global-variants-71b69725.js";import{H as g}from"./HeaderLongComponent-1bc45bd9.js";import{R as f}from"./RichText-3f9b6e99.js";import{L as x}from"./Layout-8fb0eebb.js";import{m as y}from"./mocks-b7644162.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index.es16-298408db.js";import"./index.es31-95f1013f.js";import"./index.es13-3580608c.js";import"./clsx-0839fdbe.js";import"./ZpsButton-3ea5f882.js";import"./index.es24-01fa0cce.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";import"./index.es18-4b39ea0e.js";const t=({imageSrc:i,imageAlt:o,imageDescription:m,content:u,variant:r=c.Zps,headline:n,...d})=>e.jsxs(x,{testId:"zep-news-details",className:"zep-flex zep-flex-col xl:zep-gap-4 md:zep-gap-3 sm:zep-gap-2 zep-gap-1",children:[n&&e.jsx(g,{headline:n,variant:r,...d}),e.jsxs("div",{className:"zep-flex xl:zep-gap-6 md:zep-gap-2.5 md:zep-flex-row zep-flex-col sm:zep-gap-2 zep-gap-1",children:[e.jsxs("div",{className:"md:zep-w-[30%] zep-w-full",children:[e.jsx("div",{className:"zep-aspect-[3/4]",children:e.jsx("img",{src:i,alt:o,className:"zep-w-full zep-h-full zep-object-cover"})}),e.jsx("div",{className:"zep-bg-background-medium zep-break-words zep-py-0.5 zep-px-1 zep-w-full zep-text-typography-dark-70 zep-typography-bodyText",children:e.jsx("span",{className:"zep-opacity-70",children:m})})]}),e.jsx(f,{variant:r,content:u,className:"zep-max-w-[944px]"})]})]});try{t.displayName="NewsDetails",t.__docgenInfo={description:"",displayName:"NewsDetails",props:{imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!0,type:{name:"string"}},imageAlt:{defaultValue:null,description:"",name:"imageAlt",required:!0,type:{name:"string"}},imageDescription:{defaultValue:null,description:"",name:"imageDescription",required:!0,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"BlocksContent"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary-button"'},{value:'"secondary-button"'},{value:'"link"'},{value:'"none"'}]}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const R={title:"Patterns/NewsDetails",component:t,tags:["autodocs"],argTypes:{}},a={args:{imageSrc:"./assets/image-4_3.png",imageAlt:"image",imageDescription:"Image Description",headline:"Headline optional",content:y}};var l,s,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    imageSrc: './assets/image-4_3.png',
    imageAlt: 'image',
    imageDescription: 'Image Description',
    headline: 'Headline optional',
    content: mockRichText
  } as NewsDetailsProps
}`,...(p=(s=a.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const I=["Default"];export{a as Default,I as __namedExportsOrder,R as default};
