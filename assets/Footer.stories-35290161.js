import{b as o,l as f,e as a}from"./index.es16-c32b359c.js";import{j as e}from"./jsx-runtime-1a9d9a93.js";import{a as k}from"./global-variants-0f433d85.js";import{M as w}from"./MultiLinkList-ef1bdf3c.js";import{L as u}from"./Layout-bd6ed67d.js";import"./index.es31-95f1013f.js";import"./index.es13-f7a67de2.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-0839fdbe.js";import"./HeaderShortComponent-5b59b116.js";import"./index-ff2c9236.js";import"./moving-forward-arrow-a1f6b1da.js";import"./LinkListItem-8a91b495.js";import"./index.es2-f53001ec.js";import"./index.es24-0315e37d.js";import"./index.es34-79e31a69.js";import"./commonCSS-e8445c95.js";const l=({socialMediaLinks:i,socialMediaTitle:m,footerLinks:g,...d})=>{const h=new Date().getFullYear();return e.jsxs(u,{className:"zep-bg-background-dark",children:[e.jsx(w,{...d,variant:k.CatBg}),e.jsx("div",{"data-testid":"zep-footer",children:e.jsxs("div",{className:"zep-flex zep-flex-col zep-w-full",children:[e.jsxs("div",{className:"xl:zep-pt-4 md:zep-py-3 zep-py-1.5 sm:zep-py-2.5 sm md:zep-px-[0px] zep-px-0.5 sm:zep-px-1 zep-flex zep-items-center zep-gap-2.5",children:[e.jsx("p",{className:"zep-text-typography-light-100 zep-typography-headlineXS-fluid-cqi",children:m}),e.jsx("div",{className:"zep-flex zep-gap-1",children:i.map(t=>e.jsx("div",{className:"zep-rounded-full zep-bg-background-light zep-h-1.5 zep-w-1.5 zep-flex zep-items-center zep-justify-center",children:e.jsx(o,{label:"",icon:t.icon,href:t.href,hasIcon:!0,target:t.target})},t.target))})]}),e.jsxs("div",{className:"zep-flex xl:zep-flex-row zep-flex-col md:zep-px-[0px] zep-px-1.5 xl:zep-items-center xl:zep-gap-5 zep-gap-1 zep-py-1.5 zep-border-t-1 zep-border-t-greyscale-700 zep-w-full",children:[e.jsx("p",{className:"zep-text-greyscale-0 zep-typography-bodyText",children:`© ${h} Zeppelin Power Systems GmbH`}),e.jsx("div",{className:"zep-flex sm:zep-gap-3 zep-gap-1 sm:zep-items-center sm:zep-flex-row sm:zep-flex-wrap zep-flex-col",children:g.map(t=>e.jsx(o,{className:"zep-text-greyscale-0",hasIcon:!1,label:t.label,mode:f.Inline,target:t.target,href:t.href},t.label))})]})]})})]})};try{l.displayName="Footer",l.__docgenInfo={description:"",displayName:"Footer",props:{socialMediaLinks:{defaultValue:null,description:"",name:"socialMediaLinks",required:!0,type:{name:"LinkProps[]"}},socialMediaTitle:{defaultValue:null,description:"",name:"socialMediaTitle",required:!0,type:{name:"string"}},footerLinks:{defaultValue:null,description:"",name:"footerLinks",required:!0,type:{name:"LinkProps[]"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},linkLists:{defaultValue:null,description:"",name:"linkLists",required:!0,type:{name:"LinkListItemProps[]"}}}}}catch{}const n={links:[{icon:"arrow-right",href:"https://www.google.com",label:"link inline",hasIcon:!0},{icon:"arrow-right",href:"https://www.google.com",label:"link inline",hasIcon:!0},{icon:"arrow-right",href:"https://www.google.com",label:"link inline",hasIcon:!0},{icon:"arrow-right",href:"https://www.google.com",label:"link inline",hasIcon:!0}],headline:"Headline optional"},D={title:"Patterns/Footer",component:l,tags:["autodocs"],argTypes:{}},r={args:{socialMediaTitle:"Folgen Sie uns auf",linkLists:[n,n,n,n,n],footerLinks:[{label:"inline link",href:"https://www.google.com",target:a.Blank},{label:"inline link",href:"https://www.google.com",target:a.Blank},{label:"inline link",href:"https://www.google.com",target:a.Blank},{label:"inline link",href:"https://www.google.com",target:a.Blank}],socialMediaLinks:[{icon:"alarm",href:"https://www.facebook.com",target:a.Blank},{icon:"alarm",href:"https://www.facebook.com",target:a.Blank}]}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const E=["Default"];export{r as Default,E as __namedExportsOrder,D as default};
