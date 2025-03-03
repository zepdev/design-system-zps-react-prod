import{j as e}from"./jsx-runtime-1a9d9a93.js";import{c as m}from"./clsx-0839fdbe.js";import{G as d}from"./global-variants-893e06e6.js";import{H as c}from"./HeaderShortComponent-a3da5a2c.js";import{R as u}from"./RichText-cd106483.js";import{L as f}from"./Layout-59cfbfd4.js";import{a as x}from"./mocks-dd8b5ca4.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index-ff2c9236.js";import"./moving-forward-arrow-a1f6b1da.js";import"./index.es16-298408db.js";import"./index.es31-95f1013f.js";import"./index.es13-3580608c.js";import"./index.es18-4b39ea0e.js";const r=({headline:t,tagline:p,content:i,variant:s=d.Zps})=>e.jsx(f,{children:e.jsxs("div",{className:m("lg:zep-max-w-[944px]","zep-w-full","zep-flex","zep-flex-col","zep-gap-y-1.5","sm:zep-gap-y-2","md:zep-gap-y-2.5","xl:zep-gap-y-4"),"data-testid":"lead-text",children:[t&&e.jsx(c,{variant:s,tagline:p,headline:t,className:"!zep-max-w-full"}),e.jsx(u,{content:i,variant:s})]})});try{r.displayName="LeadText",r.__docgenInfo={description:"",displayName:"LeadText",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"BlocksContent"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},showArrow:{defaultValue:null,description:"",name:"showArrow",required:!1,type:{name:"boolean"}}}}}catch{}const H={title:"Components/LeadText",component:r,tags:["autodocs"],argTypes:{}},a={args:{headline:"Headline",content:x,theme:"power-systems"}};var o,n,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    headline: 'Headline',
    content: mockRichText,
    theme: 'power-systems'
  } as LeadTextProps
}`,...(l=(n=a.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const b=["Default"];export{a as Default,b as __namedExportsOrder,H as default};
