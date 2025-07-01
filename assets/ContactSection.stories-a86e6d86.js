import{j as o}from"./clsx-36b9529f.js";import{M as h}from"./MultiLinkList-5ba7f6d9.js";import{S as k}from"./SingleLinkList-908b6896.js";import{G as f}from"./global-variants-893e06e6.js";import{m as g}from"./mocks-dd8b5ca4.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./HeaderLongComponent-9e49aaec.js";import"./index.es16-ca92ca27.js";import"./index.es31-95f1013f.js";import"./index.es13-b5ad88d4.js";import"./index.es17-40e95622.js";import"./getUrlWithTrailingSlash-1f1feb13.js";import"./RichText-0fb27911.js";import"./index.es18-bf2a862c.js";import"./ZpsButton-1d161532.js";import"./index.es24-d6e4db88.js";import"./index.es35-79e31a69.js";import"./index-9eff14f9.js";import"./getDataLayer-2559cd39.js";import"./tw-merge-1166cefb.js";import"./LinkListItem-694cea53.js";import"./index.es2-6a9c2a8f.js";import"./index.es32-fbb642fb.js";import"./commonCSS-cc68a568.js";import"./Layout-639d4783.js";import"./HeaderShortComponent-5b7c16b8.js";import"./moving-forward-arrow-a1f6b1da.js";const t=({id:r,variant:a=f.Zps,linkLists:e,headline:l})=>e.length===0?null:e.length===1?o.jsx(k,{title:l,...e[0],variant:a}):o.jsx(h,{id:r,headline:l,linkLists:e,variant:a});try{t.displayName="ContactSection",t.__docgenInfo={description:"",displayName:"ContactSection",props:{variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},linkLists:{defaultValue:null,description:"",name:"linkLists",required:!0,type:{name:"LinkListItemProps[]"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const B={title:"Patterns/ContactSection",component:t,tags:["autodocs"],argTypes:{}},n={args:{headline:"Pressekontakt",linkLists:[{headline:"Sina Koch",description:g,links:[{href:"",label:"inline link"},{href:"",label:"inline link"}]}]}},i={args:{headline:"Sie brauchen Unterstützung - wir helfen Ihnen gerne",linkLists:[{headline:"Deutschland",links:[{href:"",label:"inline link"}]},{headline:"International",links:[{href:"",label:"inline link"}]}]}};var s,p,m;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    headline: 'Pressekontakt',
    linkLists: [{
      headline: 'Sina Koch',
      description: mockRichTextShort,
      links: [{
        href: '',
        label: 'inline link'
      }, {
        href: '',
        label: 'inline link'
      }]
    }]
  }
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,d,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(d=i.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const H=["Single","Multi"];export{i as Multi,n as Single,H as __namedExportsOrder,B as default};
