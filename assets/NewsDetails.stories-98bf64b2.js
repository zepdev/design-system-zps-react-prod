import{j as e}from"./clsx-36b9529f.js";import{G as g}from"./global-variants-893e06e6.js";import{L as f}from"./Layout-639d4783.js";import{H as z}from"./HeaderLongComponent-88c52744.js";import{R as x}from"./RichText-0fb27911.js";import{a as y}from"./mocks-dd8b5ca4.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index.es16-ca92ca27.js";import"./index.es31-95f1013f.js";import"./index.es13-b5ad88d4.js";import"./index.es17-40e95622.js";import"./getUrlWithTrailingSlash-1f1feb13.js";import"./ZpsButton-f3be46e6.js";import"./index.es24-d6e4db88.js";import"./index.es35-79e31a69.js";import"./index-9eff14f9.js";import"./tw-merge-1166cefb.js";import"./index.es18-bf2a862c.js";const t=({imageSrc:r,imageAlt:s,imageDescription:i,content:d,variant:p=g.Zps,date:n,location:l,description:u})=>e.jsxs(f,{testId:"zep-news-details",className:"zep-flex zep-flex-col xl:zep-gap-4 md:zep-gap-3 sm:zep-gap-2 zep-gap-1",children:[n&&l&&e.jsx(z,{headline:`${n} | ${l}`,variant:p,description:u}),e.jsxs("div",{className:"zep-flex xl:zep-gap-6 md:zep-gap-2.5 md:zep-flex-row zep-flex-col sm:zep-gap-2 zep-gap-1",children:[e.jsxs("div",{className:"md:zep-w-[30%] zep-w-full",children:[e.jsx("div",{className:"zep-aspect-[3/4]",children:e.jsx("img",{title:s,src:r,alt:s,className:"zep-w-full zep-h-full zep-object-cover"})}),i&&e.jsx("div",{className:"zep-bg-background-medium zep-hyphens-auto zep-break-normal zep-py-0.5 zep-px-1 zep-w-full zep-text-typography-dark-70 zep-typography-bodyText",children:e.jsx("span",{className:"zep-opacity-70",children:i})})]}),e.jsx(x,{variant:p,content:d,className:"zep-max-w-[944px]"})]})]});try{t.displayName="NewsDetails",t.__docgenInfo={description:"",displayName:"NewsDetails",props:{date:{defaultValue:null,description:"",name:"date",required:!1,type:{name:"string"}},location:{defaultValue:null,description:"",name:"location",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!0,type:{name:"string"}},imageAlt:{defaultValue:null,description:"",name:"imageAlt",required:!0,type:{name:"string"}},imageDescription:{defaultValue:null,description:"",name:"imageDescription",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"BlocksContent"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}}}}}catch{}const L={title:"Patterns/NewsDetails",component:t,tags:["autodocs"],argTypes:{}},a={args:{imageSrc:"./assets/image-4_3.png",imageAlt:"image",imageDescription:"Image Description",headline:"Headline optional",content:y}};var o,m,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    imageSrc: './assets/image-4_3.png',
    imageAlt: 'image',
    imageDescription: 'Image Description',
    headline: 'Headline optional',
    content: mockRichText
  } as NewsDetailsProps
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const P=["Default"];export{a as Default,P as __namedExportsOrder,L as default};
