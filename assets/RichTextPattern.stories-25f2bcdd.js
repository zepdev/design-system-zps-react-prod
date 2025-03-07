import{j as a}from"./jsx-runtime-1a9d9a93.js";import{G as c}from"./global-variants-893e06e6.js";import{L as d}from"./Layout-7f280280.js";import{H as u}from"./HeaderShortComponent-a3da5a2c.js";import{R as f}from"./RichText-cd106483.js";import{a as g}from"./mocks-dd8b5ca4.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-0839fdbe.js";import"./index-ff2c9236.js";import"./moving-forward-arrow-a1f6b1da.js";import"./index.es16-298408db.js";import"./index.es31-95f1013f.js";import"./index.es13-3580608c.js";import"./index.es18-4b39ea0e.js";const t=({content:r,variant:n=c.Zps,headline:o,id:p,...m})=>a.jsxs(d,{id:p,className:"zep-flex md:zep-flex-row zep-flex-col zep-items-start zep-gap-2 sm:zep-gap-2.5 md:zep-gap-1.5 xl:zep-gap-5",children:[o&&a.jsx(u,{variant:n,headline:o,className:"zep-w-full",...m}),a.jsx(f,{content:r,variant:n})]});try{t.displayName="RichTextPattern",t.__docgenInfo={description:"",displayName:"RichTextPattern",props:{variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"BlocksContent"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},showArrow:{defaultValue:null,description:"",name:"showArrow",required:!1,type:{name:"boolean"}}}}}catch{}const b={title:"Patterns/RichTextPattern",component:t,tags:["autodocs"],argTypes:{}},e={args:{content:g,headline:"Headline",tagline:"Tagline"}};var i,s,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    content: mockRichText,
    headline: 'Headline',
    tagline: 'Tagline'
  } as RichTextPatternProps
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const k=["Default"];export{e as Default,k as __namedExportsOrder,b as default};
