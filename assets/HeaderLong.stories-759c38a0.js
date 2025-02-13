import{G as i,a as x}from"./global-variants-71b69725.js";import{j as l}from"./jsx-runtime-1a9d9a93.js";import{c as C}from"./clsx-0839fdbe.js";import{b as w}from"./commonCSS-0b9dd3ad.js";import{H as b}from"./HeaderLongComponent-5c05b201.js";import{L}from"./Layout-8fb0eebb.js";import{m as r}from"./mocks-dd8b5ca4.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index.es16-298408db.js";import"./index.es31-95f1013f.js";import"./index.es13-3580608c.js";import"./RichText-3f9b6e99.js";import"./index.es18-4b39ea0e.js";import"./ZpsButton-3ea5f882.js";import"./index.es24-01fa0cce.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";const s=({variant:o=i.Zps,...v})=>l.jsx(L,{className:C(w[o]),testId:"zep-header-long",children:l.jsx(b,{...v,variant:o})});try{s.displayName="HeaderLong",s.__docgenInfo={description:"",displayName:"HeaderLong",props:{tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary-button"'},{value:'"secondary-button"'},{value:'"link"'},{value:'"none"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZPS_BG"'},{value:'"CAT_BG"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const F={title:"Patterns/HeaderLong",component:s,tags:["autodocs"],argTypes:{}},e={args:{variant:i.Zps,type:"primary-button",tagline:"Tagline",headline:"Headline Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus",linkText:"Click me",linkHref:"https://www.google.com",onClick:()=>{},description:r}},n={args:{variant:x.ZpsBg,type:"link",tagline:"Tagline",headline:"Headline",linkText:"Click me",linkHref:"https://www.google.com",description:r}},a={args:{variant:i.Zps,type:"link",tagline:"Tagline",headline:"Headline",linkText:"Click me",linkHref:"https://www.google.com",description:r}},t={args:{variant:i.Zps,type:"secondary-button",tagline:"Tagline",headline:"Headline",linkText:"Click me",onClick:()=>{},description:r}};var p,c,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariants.Zps,
    type: 'primary-button',
    tagline: 'Tagline',
    headline: 'Headline Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus',
    linkText: 'Click me',
    linkHref: 'https://www.google.com',
    onClick: () => {},
    description: mockRichTextShort
  } as HeaderLongProps
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,u,g;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariantExtended.ZpsBg,
    type: 'link',
    tagline: 'Tagline',
    headline: 'Headline',
    linkText: 'Click me',
    linkHref: 'https://www.google.com',
    description: mockRichTextShort
  } as HeaderLongProps
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var k,f,h;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariants.Zps,
    type: 'link',
    tagline: 'Tagline',
    headline: 'Headline',
    linkText: 'Click me',
    linkHref: 'https://www.google.com',
    description: mockRichTextShort
  } as HeaderLongProps
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var y,H,T;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariants.Zps,
    type: 'secondary-button',
    tagline: 'Tagline',
    headline: 'Headline',
    linkText: 'Click me',
    onClick: () => {},
    description: mockRichTextShort
  } as HeaderLongProps
}`,...(T=(H=t.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};const J=["Default","WithBackground","WithLink","WithButton"];export{e as Default,n as WithBackground,t as WithButton,a as WithLink,J as __namedExportsOrder,F as default};
