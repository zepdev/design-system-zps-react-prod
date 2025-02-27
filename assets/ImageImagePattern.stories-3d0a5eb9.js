import{G as n}from"./global-variants-71b69725.js";import{j as l}from"./jsx-runtime-1a9d9a93.js";import{c as f}from"./clsx-0839fdbe.js";import{I as x}from"./ImageImage-acbb7cdb.js";import{H as k}from"./HeaderLongComponent-c66a821b.js";import{m as d}from"./mocks-dd8b5ca4.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index.es16-298408db.js";import"./index.es31-95f1013f.js";import"./index.es13-3580608c.js";import"./RichText-7e253872.js";import"./index.es18-4b39ea0e.js";import"./ZpsButton-2405933d.js";import"./index.es24-01fa0cce.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";const r=({items:e,headline:i,variant:u=n.Zps,...I})=>l.jsxs("div",{"data-testid":"zep-imageImage-pattern",className:f("zep-flex","zep-flex-col","zep-gap-2","sm:zep-gap-2.5","xl:zep-gap-4","zep-py-[0px]","zep-px-1","sm:zep-px-1.5","md:zep-px-[66px]","lg:zep-px-[122px]"),children:[i&&l.jsx(k,{"data-testid":"zep-imageImage-pattern-header",headline:i,...I,variant:u}),e.largeImageSrc&&l.jsx(x,{"data-testid":"zep-imageImage-pattern-image",largeImageSrc:e.largeImageSrc,largeImageAlt:e.largeImageAlt,smallImageSrc:e.smallImageSrc,smallImageAlt:e.smallImageAlt})]});try{r.displayName="ImageImagePattern",r.__docgenInfo={description:"",displayName:"ImageImagePattern",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ImageImageProps"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary-button"'},{value:'"secondary-button"'},{value:'"link"'},{value:'"none"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZPS_BG"'},{value:'"CAT_BG"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const j={title:"Patterns/ImageImagePattern",component:r,tags:["autodocs"],argTypes:{}},a={args:{type:"link",tagline:"tagline",headline:"This is a long header",description:d,linkHref:"www.google.com",linkText:"Click Me",items:{smallImageSrc:"./assets/image-332x249.png",smallImageAlt:"small image",largeImageSrc:"./assets/image-1336x300.png",largeImageAlt:"large image"},variant:n.Zps}},t={args:{type:"link",tagline:"tagline",headline:"This is a long header",description:d,linkHref:"www.google.com",linkText:"Click Me",items:{largeImageSrc:"./assets/image-1336x300.png",largeImageAlt:"large image"},variant:n.Zps}};var s,m,g;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    type: 'link',
    tagline: 'tagline',
    headline: 'This is a long header',
    description: mockRichTextShort,
    linkHref: 'www.google.com',
    linkText: 'Click Me',
    items: {
      smallImageSrc: './assets/image-332x249.png',
      smallImageAlt: 'small image',
      largeImageSrc: './assets/image-1336x300.png',
      largeImageAlt: 'large image'
    },
    variant: GlobalVariants.Zps
  }
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var o,p,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    type: 'link',
    tagline: 'tagline',
    headline: 'This is a long header',
    description: mockRichTextShort,
    linkHref: 'www.google.com',
    linkText: 'Click Me',
    items: {
      largeImageSrc: './assets/image-1336x300.png',
      largeImageAlt: 'large image'
    },
    variant: GlobalVariants.Zps
  }
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const E=["Default","WithOnlyLargeImage"];export{a as Default,t as WithOnlyLargeImage,E as __namedExportsOrder,j as default};
