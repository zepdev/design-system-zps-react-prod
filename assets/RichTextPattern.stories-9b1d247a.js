import{j as a}from"./jsx-runtime-1a9d9a93.js";import{G as m}from"./global-variants-0f433d85.js";import{H as c}from"./HeaderShortComponent-5b59b116.js";import{R as d}from"./RichText-29a001c5.js";import{L as u}from"./Layout-ae9630ef.js";import{m as f}from"./mocks-789b2183.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index-ff2c9236.js";import"./clsx-0839fdbe.js";import"./moving-forward-arrow-a1f6b1da.js";import"./index.es16-48b7d0d2.js";import"./index.es29-7715336a.js";import"./index.es13-f7a67de2.js";const t=({content:r,variant:l=m.Zps,headline:n,...p})=>a.jsxs(u,{className:"zep-flex md:zep-flex-row zep-flex-col zep-items-start md:zep-px-[66px] xl:zep-px-[124px] zep-gap-2 sm:zep-gap-2.5 md:zep-gap-1.5 xl:zep-gap-5",children:[n&&a.jsx(c,{headline:n,className:"zep-w-full",...p}),a.jsx(d,{content:r,variant:l})]});try{t.displayName="RichTextPattern",t.__docgenInfo={description:"",displayName:"RichTextPattern",props:{variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"BlocksContent"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},showArrow:{defaultValue:null,description:"",name:"showArrow",required:!1,type:{name:"boolean"}}}}}catch{}const j={title:"Patterns/RichTextPattern",component:t,tags:["autodocs"],argTypes:{}},e={args:{content:f,headline:"Headline",tagline:"Tagline"}};var o,s,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    content: mockRichText,
    headline: 'Headline',
    tagline: 'Tagline'
  } as RichTextPatternProps
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const H=["Default"];export{e as Default,H as __namedExportsOrder,j as default};
