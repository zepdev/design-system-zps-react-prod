import{j as r}from"./jsx-runtime-1a9d9a93.js";import{M as d}from"./MultiLinkList-955bbe23.js";import{S as h}from"./SingleLinkList-203ac654.js";import{G as k}from"./global-variants-71b69725.js";import{L as f}from"./Layout-8fb0eebb.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-0839fdbe.js";import"./HeaderShortComponent-b33631be.js";import"./index-ff2c9236.js";import"./moving-forward-arrow-a1f6b1da.js";import"./LinkListItem-7213784a.js";import"./index.es2-1169e890.js";import"./index.es31-95f1013f.js";import"./index.es13-3580608c.js";import"./index.es32-fbb642fb.js";import"./index.es73-b2c6e214.js";import"./index.es24-0315e37d.js";import"./index.es34-79e31a69.js";import"./index.es16-2c7a91d7.js";import"./commonCSS-0b9dd3ad.js";const a=({variant:t=k.Zps,linkLists:e,headline:l})=>e.length===0?null:e.length===1?r.jsx(h,{title:l,...e[0],variant:t}):r.jsx(f,{children:r.jsx(d,{isPatternPart:!0,headline:l,linkLists:e,variant:t})});try{a.displayName="ContactSection",a.__docgenInfo={description:"",displayName:"ContactSection",props:{variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},linkLists:{defaultValue:null,description:"",name:"linkLists",required:!0,type:{name:"LinkListItemProps[]"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}}}}}catch{}const K={title:"Patterns/ContactSection",component:a,tags:["autodocs"],argTypes:{}},n={args:{headline:"Pressekontakt",linkLists:[{headline:"Sina Koch",description:"Director Marketing & Communication",links:[{href:"",label:"inline link"},{href:"",label:"inline link"}]}]}},i={args:{headline:"Sie brauchen Unterstützung - wir helfen Ihnen gerne",linkLists:[{headline:"Deutschland",links:[{href:"",label:"inline link"}]},{headline:"International",links:[{href:"",label:"inline link"}]}]}};var o,s,m;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(s=n.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var p,c,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(c=i.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const N=["Single","Multi"];export{i as Multi,n as Single,N as __namedExportsOrder,K as default};
