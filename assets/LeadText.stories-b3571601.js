import{j as e}from"./jsx-runtime-1a9d9a93.js";import{c as i}from"./clsx-0839fdbe.js";import{L as l}from"./Layout-cbdd4d47.js";import{G as d}from"./global-variants-71b69725.js";import{t as c}from"./commonCSS-0b9dd3ad.js";import{H as u}from"./HeaderShortComponent-b33631be.js";import{R as x}from"./RichText-35c1d108.js";import{m as f}from"./mocks-b7644162.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index-ff2c9236.js";import"./moving-forward-arrow-a1f6b1da.js";import"./index.es16-2c7a91d7.js";import"./index.es31-95f1013f.js";import"./index.es13-3580608c.js";import"./index.es18-4b39ea0e.js";const r=({headline:a,content:n,variant:m=d.Zps})=>e.jsx(l,{children:e.jsxs("div",{className:i("lg:zep-max-w-[944px]","zep-w-full","zep-flex","zep-flex-col","zep-gap-y-1.5","sm:zep-gap-y-2","md:zep-gap-y-2.5","xl:zep-gap-y-4",c[m]),"data-testid":"lead-text",children:[a&&e.jsx(u,{headline:a,className:"zep-w-[35%]"}),e.jsx(x,{content:n})]})});try{r.displayName="LeadText",r.__docgenInfo={description:"",displayName:"LeadText",props:{headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"BlocksContent"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}}}}}catch{}const q={title:"Components/LeadText",component:r,tags:["autodocs"],argTypes:{}},t={args:{headline:"Headline",content:f,theme:"power-systems"}};var o,s,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    headline: 'Headline',
    content: mockRichText,
    theme: 'power-systems'
  } as LeadTextProps
}`,...(p=(s=t.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const G=["Default"];export{t as Default,G as __namedExportsOrder,q as default};