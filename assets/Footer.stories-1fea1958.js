import{b as s,l as z,e as a}from"./index.es16-c32b359c.js";import{j as e}from"./jsx-runtime-1a9d9a93.js";import{a as w}from"./global-variants-71b69725.js";import{M as u}from"./MultiLinkList-c3534b5f.js";import{L as p}from"./Layout-bd6ed67d.js";import"./index.es31-95f1013f.js";import"./index.es13-f7a67de2.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-0839fdbe.js";import"./HeaderShortComponent-b33631be.js";import"./index-ff2c9236.js";import"./moving-forward-arrow-a1f6b1da.js";import"./LinkListItem-6531a8b7.js";import"./index.es2-f53001ec.js";import"./index.es24-0315e37d.js";import"./index.es34-79e31a69.js";import"./commonCSS-0b9dd3ad.js";const n=({socialMediaLinks:i,socialMediaTitle:d,footerLinks:h,footerText:o,...f})=>{const k=new Date().getFullYear();return e.jsxs("div",{className:"zep-flex zep-flex-col zep-items-center zep-gap-1 sm:zep-gap1.5 md:zep-gap-2.5",children:[o&&e.jsx(p,{className:"zep-pb-[0] sm:zep-pb-[0] md:zep-pb-[0] xl:zep-pb-[0]",children:e.jsx("span",{className:"zep-typography-supportText zep-text-typography-dark-70 zep-opacity-70",children:o})}),e.jsxs(p,{className:"zep-bg-background-dark",children:[e.jsx(u,{...f,variant:w.CatBg}),e.jsx("div",{"data-testid":"zep-footer",children:e.jsxs("div",{className:"zep-flex zep-flex-col zep-w-full",children:[e.jsxs("div",{className:"xl:zep-pt-4 md:zep-py-3 zep-py-1.5 sm:zep-py-2.5 sm md:zep-px-[0px] zep-px-0.5 sm:zep-px-1 zep-flex zep-items-center zep-gap-2.5",children:[e.jsx("p",{className:"zep-text-typography-light-100 zep-typography-headlineXS-fluid-cqi",children:d}),e.jsx("div",{className:"zep-flex zep-gap-1",children:i.map(t=>e.jsx("div",{className:"zep-rounded-full zep-bg-background-light zep-h-1.5 zep-w-1.5 zep-flex zep-items-center zep-justify-center",children:e.jsx(s,{label:"",icon:t.icon,href:t.href,hasIcon:!0,target:t.target})},t.target))})]}),e.jsxs("div",{className:"zep-flex xl:zep-flex-row zep-flex-col md:zep-px-[0px] zep-px-1.5 xl:zep-items-center xl:zep-gap-5 zep-gap-1 zep-py-1.5 zep-border-t-1 zep-border-t-greyscale-700 zep-w-full",children:[e.jsx("p",{className:"zep-text-greyscale-0 zep-typography-bodyText",children:`© ${k} Zeppelin Power Systems GmbH`}),e.jsx("div",{className:"zep-flex sm:zep-gap-3 zep-gap-1 sm:zep-items-center sm:zep-flex-row sm:zep-flex-wrap zep-flex-col",children:h.map(t=>e.jsx(s,{className:"zep-text-greyscale-0",hasIcon:!1,label:t.label,mode:z.Inline,target:t.target,href:t.href},t.label))})]})]})})]})]})};try{n.displayName="Footer",n.__docgenInfo={description:"",displayName:"Footer",props:{socialMediaLinks:{defaultValue:null,description:"",name:"socialMediaLinks",required:!0,type:{name:"LinkProps[]"}},socialMediaTitle:{defaultValue:null,description:"",name:"socialMediaTitle",required:!0,type:{name:"string"}},footerLinks:{defaultValue:null,description:"",name:"footerLinks",required:!0,type:{name:"LinkProps[]"}},footerText:{defaultValue:null,description:"",name:"footerText",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},linkLists:{defaultValue:null,description:"",name:"linkLists",required:!0,type:{name:"LinkListItemProps[]"}}}}}catch{}const l={links:[{icon:"arrow-right",href:"https://www.google.com",label:"link inline",hasIcon:!0},{icon:"arrow-right",href:"https://www.google.com",label:"link inline",hasIcon:!0},{icon:"arrow-right",href:"https://www.google.com",label:"link inline",hasIcon:!0},{icon:"arrow-right",href:"https://www.google.com",label:"link inline",hasIcon:!0}],headline:"Headline optional"},E={title:"Patterns/Footer",component:n,tags:["autodocs"],argTypes:{}},r={args:{socialMediaTitle:"Folgen Sie uns auf",linkLists:[l,l,l,l,l],footerLinks:[{label:"inline link",href:"https://www.google.com",target:a.Blank},{label:"inline link",href:"https://www.google.com",target:a.Blank},{label:"inline link",href:"https://www.google.com",target:a.Blank},{label:"inline link",href:"https://www.google.com",target:a.Blank}],socialMediaLinks:[{icon:"alarm",href:"https://www.facebook.com",target:a.Blank},{icon:"alarm",href:"https://www.facebook.com",target:a.Blank}]}};var c,m,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const G=["Default"];export{r as Default,G as __namedExportsOrder,E as default};
