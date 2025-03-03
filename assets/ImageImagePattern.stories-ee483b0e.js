import{G as r}from"./global-variants-893e06e6.js";import{j as n}from"./jsx-runtime-1a9d9a93.js";import{c as _}from"./clsx-0839fdbe.js";import{I as x}from"./ImageImage-0a191541.js";import{H as h}from"./HeaderLongComponent-0378f1b1.js";import{m as u}from"./mocks-dd8b5ca4.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index.es16-298408db.js";import"./index.es31-95f1013f.js";import"./index.es13-3580608c.js";import"./RichText-cd106483.js";import"./index.es18-4b39ea0e.js";import"./ZpsButton-91fac0e6.js";import"./index.es24-01fa0cce.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";const l=({items:e,headline:i,variant:d=r.Zps,id:I,...f})=>n.jsxs("div",{id:I,"data-testid":"zep-imageImage-pattern",className:_("zep-flex","zep-flex-col","zep-gap-2","sm:zep-gap-2.5","xl:zep-gap-4","zep-py-[0px]","zep-px-1","sm:zep-px-1.5","md:zep-px-[66px]","lg:zep-px-[122px]"),children:[i&&n.jsx(h,{"data-testid":"zep-imageImage-pattern-header",headline:i,...f,variant:d}),e.largeImageSrc&&n.jsx(x,{"data-testid":"zep-imageImage-pattern-image",largeImageSrc:e.largeImageSrc,largeImageAlt:e.largeImageAlt,smallImageSrc:e.smallImageSrc,smallImageAlt:e.smallImageAlt})]});try{l.displayName="ImageImagePattern",l.__docgenInfo={description:"",displayName:"ImageImagePattern",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ImageImageProps"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZPS_BG"'},{value:'"CAT_BG"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const j={title:"Patterns/ImageImagePattern",component:l,tags:["autodocs"],argTypes:{}},a={args:{type:"link",tagline:"tagline",headline:"This is a long header",description:u,linkHref:"www.google.com",linkText:"Click Me",items:{smallImageSrc:"./assets/image-332x249.png",smallImageAlt:"small image",largeImageSrc:"./assets/Leistungsuebersicht_Gen_Sets_50_HZ_460594e581.png",largeImageAlt:"large image"},variant:r.Zps}},t={args:{type:"link",tagline:"tagline",headline:"This is a long header",description:u,linkHref:"www.google.com",linkText:"Click Me",items:{largeImageSrc:"./assets/Leistungsuebersicht_Gen_Sets_50_HZ_460594e581.png",largeImageAlt:"large image"},variant:r.Zps}};var s,m,g;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
      largeImageSrc: './assets/Leistungsuebersicht_Gen_Sets_50_HZ_460594e581.png',
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
      largeImageSrc: './assets/Leistungsuebersicht_Gen_Sets_50_HZ_460594e581.png',
      largeImageAlt: 'large image'
    },
    variant: GlobalVariants.Zps
  }
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const E=["Default","WithOnlyLargeImage"];export{a as Default,t as WithOnlyLargeImage,E as __namedExportsOrder,j as default};
