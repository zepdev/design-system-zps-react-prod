import{L as o,l as f,e as a}from"./index.es16-f115649c.js";import{j as e}from"./jsx-runtime-1a9d9a93.js";import{a as k}from"./global-variants-0f433d85.js";import{L as w}from"./Layout-c6f8475c.js";import{M as u}from"./MultiLinkList-b34b8063.js";import"./index.es29-7715336a.js";import"./index.es13-30c6f137.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-0839fdbe.js";import"./HeaderShortComponent-03751a19.js";import"./index-f96983da.js";import"./moving-forward-arrow-a1f6b1da.js";import"./LinkListItem-8993c9ca.js";import"./index.es2-19177b4f.js";import"./index.es24-003a42d0.js";const r=({socialMediaLinks:i,socialMediaTitle:m,footerLinks:g,...d})=>{const h=new Date().getFullYear();return e.jsxs(w,{"data-testid":"zep-footer",className:"zep-bg-background-dark",children:[e.jsx(u,{...d,variant:k.CatBg}),e.jsx("div",{children:e.jsxs("div",{className:"zep-flex zep-flex-col zep-w-full",children:[e.jsxs("div",{className:"xl:zep-pt-4 md:zep-py-3 zep-py-1.5 sm:zep-py-2.5 sm md:zep-px-[0px] zep-px-0.5 sm:zep-px-1 zep-flex zep-items-center zep-gap-2.5",children:[e.jsx("p",{className:"zep-text-typography-light-100 zep-typography-headlineXS-fluid-cqi",children:m}),e.jsx("div",{className:"zep-flex zep-gap-1",children:i.map(t=>e.jsx("div",{className:"zep-rounded-full zep-bg-background-light zep-h-1.5 zep-w-1.5 zep-flex zep-items-center zep-justify-center",children:e.jsx(o,{label:"",icon:t.icon,href:t.href,hasIcon:!0,target:t.target})}))})]}),e.jsxs("div",{className:"zep-flex xl:zep-flex-row zep-flex-col md:zep-px-[0px] zep-px-1.5 xl:zep-items-center xl:zep-gap-5 zep-gap-1 zep-py-1.5 zep-border-t-1 zep-border-t-greyscale-700 zep-w-full",children:[e.jsx("p",{className:"zep-text-greyscale-0 zep-typography-bodyText",children:`© ${h} Zeppelin Power Systems GmbH`}),e.jsx("div",{className:"zep-flex sm:zep-gap-3 zep-gap-1 sm:zep-items-center sm:zep-flex-row sm:zep-flex-wrap zep-flex-col",children:g.map(t=>e.jsx(o,{className:"zep-text-greyscale-0",hasIcon:!1,label:t.label,mode:f.Inline,target:t.target,href:t.href}))})]})]})})]})};try{r.displayName="Footer",r.__docgenInfo={description:"",displayName:"Footer",props:{socialMediaLinks:{defaultValue:null,description:"",name:"socialMediaLinks",required:!0,type:{name:"LinkProps[]"}},socialMediaTitle:{defaultValue:null,description:"",name:"socialMediaTitle",required:!0,type:{name:"string"}},footerLinks:{defaultValue:null,description:"",name:"footerLinks",required:!0,type:{name:"LinkProps[]"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},linkLists:{defaultValue:null,description:"",name:"linkLists",required:!0,type:{name:"LinkListItemProps[]"}}}}}catch{}const n={links:[{icon:"arrow-right",href:"https://www.google.com",label:"link inline",hasIcon:!0},{icon:"arrow-right",href:"https://www.google.com",label:"link inline",hasIcon:!0},{icon:"arrow-right",href:"https://www.google.com",label:"link inline",hasIcon:!0},{icon:"arrow-right",href:"https://www.google.com",label:"link inline",hasIcon:!0}],headline:"Headline optional"},V={title:"Patterns/Footer",component:r,tags:["autodocs"],argTypes:{}},l={args:{socialMediaTitle:"Folgen Sie uns auf",linkLists:[n,n,n,n,n],footerLinks:[{label:"inline link",href:"https://www.google.com",target:a.Blank},{label:"inline link",href:"https://www.google.com",target:a.Blank},{label:"inline link",href:"https://www.google.com",target:a.Blank},{label:"inline link",href:"https://www.google.com",target:a.Blank}],socialMediaLinks:[{icon:"alarm",href:"https://www.facebook.com",target:a.Blank},{icon:"alarm",href:"https://www.facebook.com",target:a.Blank}]}};var s,p,c;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    socialMediaTitle: 'Folgen Sie uns auf',
    linkLists: [mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList],
    footerLinks: [{
      label: 'inline link',
      href: 'https://www.google.com',
      target: LinkTarget.Blank
    }, {
      label: 'inline link',
      href: 'https://www.google.com',
      target: LinkTarget.Blank
    }, {
      label: 'inline link',
      href: 'https://www.google.com',
      target: LinkTarget.Blank
    }, {
      label: 'inline link',
      href: 'https://www.google.com',
      target: LinkTarget.Blank
    }],
    socialMediaLinks: [{
      icon: 'alarm',
      href: 'https://www.facebook.com',
      target: LinkTarget.Blank
    }, {
      icon: 'alarm',
      href: 'https://www.facebook.com',
      target: LinkTarget.Blank
    }]
  } as FooterProps
}`,...(c=(p=l.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const S=["Default"];export{l as Default,S as __namedExportsOrder,V as default};
