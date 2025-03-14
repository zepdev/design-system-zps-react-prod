import{j as e}from"./jsx-runtime-1a9d9a93.js";import{c as m}from"./clsx-0839fdbe.js";import{L as d}from"./Layout-7f280280.js";import{G as c}from"./global-variants-893e06e6.js";import{H as u}from"./HeaderShortComponent-a3da5a2c.js";import{R as f}from"./RichText-4b78e5db.js";import{a as x}from"./mocks-dd8b5ca4.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index-ff2c9236.js";import"./moving-forward-arrow-a1f6b1da.js";import"./index.es16-d6722ea7.js";import"./index.es31-95f1013f.js";import"./index.es13-11b4520a.js";import"./index.es18-4b39ea0e.js";import"./getUrlWithoutTrailingSlash-e7815512.js";const r=({headline:t,tagline:p,content:i,variant:o=c.Zps})=>e.jsx(d,{children:e.jsxs("div",{className:m("lg:zep-max-w-[944px]","zep-w-full","zep-flex","zep-flex-col","zep-gap-y-1.5","sm:zep-gap-y-2","md:zep-gap-y-2.5","xl:zep-gap-y-4"),"data-testid":"lead-text",children:[t&&e.jsx(u,{variant:o,tagline:p,headline:t,className:"!zep-max-w-full"}),e.jsx(f,{content:i,variant:o})]})});try{r.displayName="LeadText",r.__docgenInfo={description:"",displayName:"LeadText",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"BlocksContent"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},showArrow:{defaultValue:null,description:"",name:"showArrow",required:!1,type:{name:"boolean"}}}}}catch{}const b={title:"Components/LeadText",component:r,tags:["autodocs"],argTypes:{}},a={args:{headline:"Headline",content:x,theme:"power-systems"}};var s,n,l;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    headline: 'Headline',
    content: mockRichText,
    theme: 'power-systems'
  } as LeadTextProps
}`,...(l=(n=a.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const k=["Default"];export{a as Default,k as __namedExportsOrder,b as default};
