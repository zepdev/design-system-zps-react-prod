import{j as o}from"./jsx-runtime-1a9d9a93.js";import{S as h}from"./SingleLinkList-b70500bb.js";import{G as k}from"./global-variants-893e06e6.js";import{M as f}from"./MultiLinkList-043e8dfd.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./Layout-fc6ef0e0.js";import"./clsx-0839fdbe.js";import"./HeaderShortComponent-86fff312.js";import"./index-ff2c9236.js";import"./moving-forward-arrow-a1f6b1da.js";import"./LinkListItem-e5bf9831.js";import"./index.es2-a13929b8.js";import"./index.es31-95f1013f.js";import"./index.es13-751bc762.js";import"./index.es32-fbb642fb.js";import"./index.es78-b2c6e214.js";import"./index.es24-01fa0cce.js";import"./index.es35-79e31a69.js";import"./index.es16-1ce448e1.js";import"./commonCSS-cc68a568.js";import"./getUrlWithoutTrailingSlash-e7815512.js";import"./HeaderLongComponent-e4f24344.js";import"./RichText-640f3398.js";import"./index.es18-4b39ea0e.js";import"./ZpsButton-317ff0a2.js";import"./tw-merge-1166cefb.js";const t=({id:r,variant:a=k.Zps,linkLists:e,headline:l})=>e.length===0?null:e.length===1?o.jsx(h,{title:l,...e[0],variant:a}):o.jsx(f,{id:r,headline:l,linkLists:e,variant:a});try{t.displayName="ContactSection",t.__docgenInfo={description:"",displayName:"ContactSection",props:{variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},linkLists:{defaultValue:null,description:"",name:"linkLists",required:!0,type:{name:"LinkListItemProps[]"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const O={title:"Patterns/ContactSection",component:t,tags:["autodocs"],argTypes:{}},n={args:{headline:"Pressekontakt",linkLists:[{headline:"Sina Koch",description:"Director Marketing & Communication",links:[{href:"",label:"inline link"},{href:"",label:"inline link"}]}]}},i={args:{headline:"Sie brauchen Unterstützung - wir helfen Ihnen gerne",linkLists:[{headline:"Deutschland",links:[{href:"",label:"inline link"}]},{headline:"International",links:[{href:"",label:"inline link"}]}]}};var s,p,m;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    headline: 'Pressekontakt',
    linkLists: [{
      headline: 'Sina Koch',
      description: 'Director Marketing & Communication',
      links: [{
        href: '',
        label: 'inline link'
      }, {
        href: '',
        label: 'inline link'
      }]
    }]
  }
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,u,d;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    headline: 'Sie brauchen Unterstützung - wir helfen Ihnen gerne',
    linkLists: [{
      headline: 'Deutschland',
      links: [{
        href: '',
        label: 'inline link'
      }]
    }, {
      headline: 'International',
      links: [{
        href: '',
        label: 'inline link'
      }]
    }]
  }
}`,...(d=(u=i.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const R=["Single","Multi"];export{i as Multi,n as Single,R as __namedExportsOrder,O as default};
