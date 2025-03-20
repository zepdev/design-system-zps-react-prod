import{Z as s,a,l as k}from"./index.es16-1ce448e1.js";import{j as e}from"./jsx-runtime-1a9d9a93.js";import{a as z}from"./global-variants-893e06e6.js";import{L as p}from"./Layout-fc6ef0e0.js";import{g as c}from"./getUrlWithoutTrailingSlash-e7815512.js";import{M as y}from"./MultiLinkList-524f0816.js";import"./index.es31-95f1013f.js";import"./index.es13-751bc762.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-0839fdbe.js";import"./HeaderLongComponent-60edb010.js";import"./RichText-640f3398.js";import"./index.es18-4b39ea0e.js";import"./ZpsButton-2c3d011d.js";import"./index.es24-01fa0cce.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";import"./LinkListItem-ac16e34a.js";import"./index.es2-db2ca694.js";import"./index.es32-fbb642fb.js";import"./commonCSS-cc68a568.js";const i=({socialMediaLinks:o,socialMediaTitle:f,footerLinks:g,footerText:u,...h})=>{const w=new Date().getFullYear();return e.jsxs("div",{className:"zep-flex zep-flex-col zep-items-center zep-gap-1 sm:zep-gap-1.5 md:zep-gap-2.5",children:[u&&e.jsx(p,{children:e.jsx("span",{className:"zep-typography-supportText zep-text-typography-dark-70 zep-opacity-70",children:u})}),e.jsxs(p,{wrapperClassname:"!zep-mb-[0] zep-bg-background-dark zep-pt-1 md:zep-pt-1.5 lg:zep-pt-2.5",children:[e.jsx(y,{linkListItemClassname:"zep-px-[0] sm:zep-px-[0] md:zep-px-[0]",isPatternPart:!0,isFooterList:!0,...h,variant:z.CatBg}),e.jsx("div",{"data-testid":"zep-footer",children:e.jsxs("div",{className:"zep-flex zep-flex-col zep-w-full",children:[e.jsxs("div",{className:"lg:zep-pt-5 md:zep-py-3 zep-py-1.5 sm:zep-py-2.5 md:zep-px-[0px] zep-flex zep-items-center zep-gap-2.5",children:[e.jsx("p",{className:"zep-text-typography-light-100 zep-typography-headlineXS-fluid-cqi",children:f}),e.jsx("div",{className:"zep-flex zep-gap-1",children:o.map(l=>{var t;return e.jsx("div",{className:"zep-rounded-full zep-bg-background-light zep-h-1.5 zep-w-1.5 zep-flex zep-items-center zep-justify-center [&>a]:zep-w-[16px] [&>a]:zep-h-[16px]",children:e.jsx(s,{label:"",target:(t=l.href)!=null&&t.startsWith("http")?a.Blank:a.Self,socialIcon:l.socialIcon,icon:l.icon,href:c(l.href)})},l.socialIcon||l.icon)})})]}),e.jsxs("div",{className:"zep-flex lg:zep-flex-row zep-flex-col lg:zep-items-center lg:zep-gap-5 zep-gap-1 zep-py-1.5 zep-border-t-1 zep-border-t-greyscale-700 zep-w-full",children:[e.jsx("p",{className:"zep-text-greyscale-0 zep-typography-bodyText",children:`© ${w} Zeppelin Power Systems GmbH`}),e.jsx("div",{className:"zep-flex sm:zep-gap-3 zep-gap-1 sm:zep-items-center sm:zep-flex-row sm:zep-flex-wrap zep-flex-col",children:g.map(l=>{var t;return e.jsx(s,{className:"zep-text-greyscale-0",target:(t=l.href)!=null&&t.startsWith("http")?a.Blank:a.Self,label:l.label,mode:k.Inline,href:c(l.href)},l.label)})})]})]})})]})]})};try{i.displayName="Footer",i.__docgenInfo={description:"",displayName:"Footer",props:{socialMediaLinks:{defaultValue:null,description:"",name:"socialMediaLinks",required:!0,type:{name:"LinkProps[]"}},socialMediaTitle:{defaultValue:null,description:"",name:"socialMediaTitle",required:!0,type:{name:"string"}},footerLinks:{defaultValue:null,description:"",name:"footerLinks",required:!0,type:{name:"LinkProps[]"}},footerText:{defaultValue:null,description:"",name:"footerText",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},headerButtonIcon:{defaultValue:null,description:"",name:"headerButtonIcon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"link"'},{value:'"list"'},{value:'"table"'},{value:'"email"'},{value:'"location"'},{value:'"time"'},{value:'"copy"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"delete-circle"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"marine-ship"'},{value:'"add-circle"'}]}},headerButtonIconPosition:{defaultValue:null,description:"",name:"headerButtonIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},linkLists:{defaultValue:null,description:"",name:"linkLists",required:!0,type:{name:"LinkListItemProps[]"}},isPatternPart:{defaultValue:null,description:"",name:"isPatternPart",required:!1,type:{name:"boolean"}},linkListItemClassname:{defaultValue:null,description:"",name:"linkListItemClassname",required:!1,type:{name:"string"}},isFooterList:{defaultValue:null,description:"",name:"isFooterList",required:!1,type:{name:"boolean"}}}}}catch{}const n={links:[{href:"https://www.google.com",label:"link inline"},{href:"https://www.google.com",label:"link inline"},{href:"https://www.google.com",label:"link inline"},{href:"https://www.google.com",label:"link inline"}],headline:"Headline optional"},O={title:"Patterns/Footer",component:i,tags:["autodocs"],argTypes:{}},r={args:{socialMediaTitle:"Folgen Sie uns auf",linkLists:[n,n,n,n,n],footerLinks:[{label:"inline link",href:"https://www.google.com",target:a.Blank},{label:"inline link",href:"https://www.google.com",target:a.Blank},{label:"inline link",href:"https://www.google.com",target:a.Blank},{label:"inline link",href:"https://www.google.com",target:a.Blank}],socialMediaLinks:[{socialIcon:"linkedin",href:"https://www.facebook.com",target:a.Blank},{socialIcon:"youtube",href:"https://www.facebook.com",target:a.Blank}]}};var d,m,v;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(v=(m=r.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};const R=["Default"];export{r as Default,R as __namedExportsOrder,O as default};
