import{j as r}from"./jsx-runtime-1a9d9a93.js";import{c as m}from"./clsx-0839fdbe.js";import{a as n,G as o}from"./global-variants-0f433d85.js";import{H as A}from"./HeaderLongComponent-1e914c86.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index.es16-f115649c.js";import"./index.es29-7715336a.js";import"./index.es13-30c6f137.js";import"./ZpsButton-e8cc879d.js";import"./index.es24-003a42d0.js";import"./index-f96983da.js";import"./tw-merge-1166cefb.js";const l=({variant:e=o.Zps,...y})=>{const z={"zep-bg-gradient-to-r zep-from-[rgb(32,27,52)] zep-to-[rgb(32,23,94)]":e===n.ZpsBg,"zep-bg-background-dark":e===n.CatBg},v=e===n.CatBg||e===n.ZpsBg?"md:zep-px-[0px] sm:zep-px-1.5 zep-px-1 zep-pb-2 zep-pt-3 sm:zep-pt-4 sm:zep-pb-3 md:zep-pb-4 md:zep-pt-5":"";return r.jsx("div",{className:m("zep-grid","zep-grid-cols-4","sm:zep-grid-cols-8","md:zep-grid-cols-16","zep-max-w-[1920px]","zep-gap-1","sm:zep-gap-1.5","xl:zep-gap-2",z),"data-testid":"zep-header-long",children:r.jsx("div",{className:m("zep-col-span-4","sm:zep-col-span-8","md:zep-col-start-2","md:zep-col-span-14",v),children:r.jsx(A,{...y,variant:e})})})};try{l.displayName="HeaderLong",l.__docgenInfo={description:"",displayName:"HeaderLong",props:{tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZPS_BG"'},{value:'"CAT_BG"'}]}}}}}catch{}const j={title:"Patterns/HeaderLong",component:l,tags:["autodocs"],argTypes:{}},a={args:{variant:o.Zps,type:"button",tagline:"Tagline",headline:"Headline Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus",linkText:"Click me",linkHref:"https://www.google.com",onClick:()=>{},description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus."}},i={args:{variant:n.ZpsBg,type:"link",tagline:"Tagline",headline:"Headline",linkText:"Click me",linkHref:"https://www.google.com",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus."}},t={args:{variant:o.Zps,type:"link",tagline:"Tagline",headline:"Headline",linkText:"Click me",linkHref:"https://www.google.com",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus."}},s={args:{variant:o.Zps,type:"button",tagline:"Tagline",headline:"Headline",linkText:"Click me",onClick:()=>{},description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus."}};var u,p,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariants.Zps,
    type: 'button',
    tagline: 'Tagline',
    headline: 'Headline Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus',
    linkText: 'Click me',
    linkHref: 'https://www.google.com',
    onClick: () => {},
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.'
  } as HeaderLongProps
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var c,g,k;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariantExtended.ZpsBg,
    type: 'link',
    tagline: 'Tagline',
    headline: 'Headline',
    linkText: 'Click me',
    linkHref: 'https://www.google.com',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.'
  } as HeaderLongProps
}`,...(k=(g=i.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var b,f,C;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariants.Zps,
    type: 'link',
    tagline: 'Tagline',
    headline: 'Headline',
    linkText: 'Click me',
    linkHref: 'https://www.google.com',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.'
  } as HeaderLongProps
}`,...(C=(f=t.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var x,H,h;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariants.Zps,
    type: 'button',
    tagline: 'Tagline',
    headline: 'Headline',
    linkText: 'Click me',
    onClick: () => {},
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.'
  } as HeaderLongProps
}`,...(h=(H=s.parameters)==null?void 0:H.docs)==null?void 0:h.source}}};const N=["Default","WithBackground","WithLink","WithButton"];export{a as Default,i as WithBackground,s as WithButton,t as WithLink,N as __namedExportsOrder,j as default};
