import{j as a}from"./jsx-runtime-1a9d9a93.js";import{G as m}from"./global-variants-71b69725.js";import{L as c}from"./Layout-8fb0eebb.js";import{H as d}from"./HeaderShortComponent-d4930c6a.js";import{R as u}from"./RichText-7e253872.js";import{a as f}from"./mocks-dd8b5ca4.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-0839fdbe.js";import"./index-ff2c9236.js";import"./moving-forward-arrow-a1f6b1da.js";import"./index.es16-298408db.js";import"./index.es31-95f1013f.js";import"./index.es13-3580608c.js";import"./index.es18-4b39ea0e.js";const t=({content:r,variant:l=m.Zps,headline:n,...p})=>a.jsxs(c,{className:"zep-flex md:zep-flex-row zep-flex-col zep-items-start zep-gap-2 sm:zep-gap-2.5 md:zep-gap-1.5  lg:zep-gap-5 ",children:[n&&a.jsx(d,{headline:n,className:"zep-w-full",...p}),a.jsx(u,{content:r,variant:l})]});try{t.displayName="RichTextPattern",t.__docgenInfo={description:"",displayName:"RichTextPattern",props:{variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"BlocksContent"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},showArrow:{defaultValue:null,description:"",name:"showArrow",required:!1,type:{name:"boolean"}}}}}catch{}const H={title:"Patterns/RichTextPattern",component:t,tags:["autodocs"],argTypes:{}},e={args:{content:f,headline:"Headline",tagline:"Tagline"}};var o,s,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    content: mockRichText,
    headline: 'Headline',
    tagline: 'Tagline'
  } as RichTextPatternProps
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const b=["Default"];export{e as Default,b as __namedExportsOrder,H as default};
