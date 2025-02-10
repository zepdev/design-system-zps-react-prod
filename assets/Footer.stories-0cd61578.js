import{Z as s,l as w,a}from"./index.es16-298408db.js";import{j as e}from"./jsx-runtime-1a9d9a93.js";import{a as k}from"./global-variants-71b69725.js";import{M as z}from"./MultiLinkList-fffb3a41.js";import{L as p}from"./Layout-8fb0eebb.js";import"./index.es31-95f1013f.js";import"./index.es13-3580608c.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-0839fdbe.js";import"./HeaderShortComponent-d4930c6a.js";import"./index-ff2c9236.js";import"./moving-forward-arrow-a1f6b1da.js";import"./LinkListItem-49ebc44a.js";import"./index.es2-31461635.js";import"./index.es32-fbb642fb.js";import"./index.es74-b2c6e214.js";import"./index.es24-01fa0cce.js";import"./index.es35-79e31a69.js";import"./commonCSS-0b9dd3ad.js";const r=({socialMediaLinks:i,socialMediaTitle:g,footerLinks:f,footerText:o,...u})=>{const h=new Date().getFullYear();return e.jsxs("div",{className:"zep-flex zep-flex-col zep-items-center zep-gap-1 sm:zep-gap-1.5 md:zep-gap-2.5",children:[o&&e.jsx(p,{children:e.jsx("span",{className:"zep-typography-supportText zep-text-typography-dark-70 zep-opacity-70",children:o})}),e.jsxs(p,{className:"zep-bg-background-dark",wrapperClassname:"!zep-mb-[0]",children:[e.jsx(z,{isPatternPart:!0,...u,variant:k.CatBg}),e.jsx("div",{"data-testid":"zep-footer",children:e.jsxs("div",{className:"zep-flex zep-flex-col zep-w-full",children:[e.jsxs("div",{className:"xl:zep-pt-4 md:zep-py-3 zep-py-1.5 sm:zep-py-2.5 sm md:zep-px-[0px] zep-px-0.5 sm:zep-px-1 zep-flex zep-items-center zep-gap-2.5",children:[e.jsx("p",{className:"zep-text-typography-light-100 zep-typography-headlineXS-fluid-cqi",children:g}),e.jsx("div",{className:"zep-flex zep-gap-1",children:i.map(t=>e.jsx("div",{className:"zep-rounded-full zep-bg-background-light zep-h-1.5 zep-w-1.5 zep-flex zep-items-center zep-justify-center",children:e.jsx(s,{label:"",socialIcon:t.socialIcon,icon:t.icon,href:t.href,target:t.target})},t.target))})]}),e.jsxs("div",{className:"zep-flex xl:zep-flex-row zep-flex-col md:zep-px-[0px] zep-px-1.5 xl:zep-items-center xl:zep-gap-5 zep-gap-1 zep-py-1.5 zep-border-t-1 zep-border-t-greyscale-700 zep-w-full",children:[e.jsx("p",{className:"zep-text-greyscale-0 zep-typography-bodyText",children:`© ${h} Zeppelin Power Systems GmbH`}),e.jsx("div",{className:"zep-flex sm:zep-gap-3 zep-gap-1 sm:zep-items-center sm:zep-flex-row sm:zep-flex-wrap zep-flex-col",children:f.map(t=>e.jsx(s,{className:"zep-text-greyscale-0",label:t.label,mode:w.Inline,target:t.target,href:t.href},t.label))})]})]})})]})]})};try{r.displayName="Footer",r.__docgenInfo={description:"",displayName:"Footer",props:{socialMediaLinks:{defaultValue:null,description:"",name:"socialMediaLinks",required:!0,type:{name:"LinkProps[]"}},socialMediaTitle:{defaultValue:null,description:"",name:"socialMediaTitle",required:!0,type:{name:"string"}},footerLinks:{defaultValue:null,description:"",name:"footerLinks",required:!0,type:{name:"LinkProps[]"}},footerText:{defaultValue:null,description:"",name:"footerText",required:!1,type:{name:"string"}},linkLists:{defaultValue:null,description:"",name:"linkLists",required:!0,type:{name:"LinkListItemProps[]"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},showArrow:{defaultValue:null,description:"",name:"showArrow",required:!1,type:{name:"boolean"}},isPatternPart:{defaultValue:null,description:"",name:"isPatternPart",required:!1,type:{name:"boolean"}}}}}catch{}const l={links:[{icon:"arrow-right",href:"https://www.google.com",label:"link inline"},{icon:"arrow-right",href:"https://www.google.com",label:"link inline"},{icon:"arrow-right",href:"https://www.google.com",label:"link inline"},{icon:"arrow-right",href:"https://www.google.com",label:"link inline"}],headline:"Headline optional"},C={title:"Patterns/Footer",component:r,tags:["autodocs"],argTypes:{}},n={args:{socialMediaTitle:"Folgen Sie uns auf",linkLists:[l,l,l,l,l],footerLinks:[{label:"inline link",href:"https://www.google.com",target:a.Blank},{label:"inline link",href:"https://www.google.com",target:a.Blank},{label:"inline link",href:"https://www.google.com",target:a.Blank},{label:"inline link",href:"https://www.google.com",target:a.Blank}],socialMediaLinks:[{socialIcon:"linkedin",href:"https://www.facebook.com",target:a.Blank},{socialIcon:"youtube",href:"https://www.facebook.com",target:a.Blank}]}};var c,m,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
      socialIcon: 'linkedin',
      href: 'https://www.facebook.com',
      target: LinkTarget.Blank
    }, {
      socialIcon: 'youtube',
      href: 'https://www.facebook.com',
      target: LinkTarget.Blank
    }]
  } as FooterProps
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const G=["Default"];export{n as Default,G as __namedExportsOrder,C as default};
