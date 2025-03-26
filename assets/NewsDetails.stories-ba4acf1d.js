import{j as e}from"./jsx-runtime-1a9d9a93.js";import{G as g}from"./global-variants-893e06e6.js";import{L as f}from"./Layout-fc6ef0e0.js";import{H as z}from"./HeaderLongComponent-fbf527b4.js";import{R as x}from"./RichText-8d6dc223.js";import{a as y}from"./mocks-dd8b5ca4.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-0839fdbe.js";import"./index.es16-10934590.js";import"./index.es31-95f1013f.js";import"./index.es13-751bc762.js";import"./getUrlWithTrailingSlash-6cb3eda2.js";import"./ZpsButton-7f65ec2c.js";import"./index.es24-01fa0cce.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";import"./index.es18-4b39ea0e.js";const t=({imageSrc:r,imageAlt:c,imageDescription:s,content:d,variant:i=g.Zps,date:p,location:n,description:u})=>e.jsxs(f,{testId:"zep-news-details",className:"zep-flex zep-flex-col xl:zep-gap-4 md:zep-gap-3 sm:zep-gap-2 zep-gap-1",children:[p&&n&&e.jsx(z,{headline:`${p} | ${n}`,variant:i,description:u}),e.jsxs("div",{className:"zep-flex xl:zep-gap-6 md:zep-gap-2.5 md:zep-flex-row zep-flex-col sm:zep-gap-2 zep-gap-1",children:[e.jsxs("div",{className:"md:zep-w-[30%] zep-w-full",children:[e.jsx("div",{className:"zep-aspect-[3/4]",children:e.jsx("img",{src:r,alt:c,className:"zep-w-full zep-h-full zep-object-cover"})}),s&&e.jsx("div",{className:"zep-bg-background-medium zep-hyphens-auto zep-break-normal zep-py-0.5 zep-px-1 zep-w-full zep-text-typography-dark-70 zep-typography-bodyText",children:e.jsx("span",{className:"zep-opacity-70",children:s})})]}),e.jsx(x,{variant:i,content:d,className:"zep-max-w-[944px]"})]})]});try{t.displayName="NewsDetails",t.__docgenInfo={description:"",displayName:"NewsDetails",props:{date:{defaultValue:null,description:"",name:"date",required:!1,type:{name:"string"}},location:{defaultValue:null,description:"",name:"location",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!0,type:{name:"string"}},imageAlt:{defaultValue:null,description:"",name:"imageAlt",required:!0,type:{name:"string"}},imageDescription:{defaultValue:null,description:"",name:"imageDescription",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"BlocksContent"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}}}}}catch{}const L={title:"Patterns/NewsDetails",component:t,tags:["autodocs"],argTypes:{}},a={args:{imageSrc:"./assets/image-4_3.png",imageAlt:"image",imageDescription:"Image Description",headline:"Headline optional",content:y}};var l,o,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    imageSrc: './assets/image-4_3.png',
    imageAlt: 'image',
    imageDescription: 'Image Description',
    headline: 'Headline optional',
    content: mockRichText
  } as NewsDetailsProps
}`,...(m=(o=a.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const P=["Default"];export{a as Default,P as __namedExportsOrder,L as default};
