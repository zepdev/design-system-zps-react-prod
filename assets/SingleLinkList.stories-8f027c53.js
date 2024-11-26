import{j as e}from"./jsx-runtime-1a9d9a93.js";import{c as t}from"./clsx-0839fdbe.js";import{G as i}from"./global-variants-0f433d85.js";import{H as u}from"./HeaderShortComponent-03751a19.js";import{L as g}from"./LinkListItem-c6e0d0a8.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index-f96983da.js";import"./moving-forward-arrow-a1f6b1da.js";import"./index.es2-19177b4f.js";import"./index.es29-7715336a.js";import"./index.es13-30c6f137.js";import"./index.es24-003a42d0.js";import"./index.es16-f115649c.js";const a=({headline:l,links:c,description:m,variant:r=i.Zps,title:d})=>e.jsxs("div",{className:t("zep-grid","zep-grid-cols-4","sm:zep-grid-cols-8","md:zep-grid-cols-16","zep-gap-y-1.5","sm:zep-gap-y-2","zep-gap-x-1","sm:zep-gap-x-1.5","xl:zep-gap-x-2","zep-w-full","zep-px-0.75","sm:zep-px-1.5","md:zep-p-[0px]","zep-items-start"),children:[e.jsx(u,{className:t("lg:zep-col-start-3","lg:zep-col-span-5","md:zep-col-start-2","md:zep-col-span-6","sm:zep-col-span-8","zep-col-span-4"),headline:d,variant:r,showArrow:!1}),e.jsx("div",{className:t("zep-col-span-4","sm:zep-col-span-8","md:zep-col-span-8","lg:zep-col-span-7","md:zep-col-start-8","md:zep-ml-1.5","lg:zep-ml-3"),children:e.jsx(g,{className:"zep-bg-background-medium",links:c,headline:l,description:m,variant:r})})]});try{a.displayName="SingleLinkList",a.__docgenInfo={description:"",displayName:"SingleLinkList",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},links:{defaultValue:null,description:"",name:"links",required:!0,type:{name:"LinkProps[]"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZPS_BG"'},{value:'"CAT_BG"'}]}},isMultiListItem:{defaultValue:null,description:"",name:"isMultiListItem",required:!1,type:{name:"boolean"}}}}}catch{}const S={title:"Patterns/SingleLinkList",component:a,tags:["autodocs"],argTypes:{variant:{children:{control:{type:"select",options:[i.Zps,i.Cat]}}}}},n={args:{title:"Zertifikate für Typenzulassungen zum Download",links:[{icon:"arrow-right",href:"https://www.google.com",label:"link inline",hasIcon:!0},{icon:"arrow-right",href:"https://www.google.com",label:"link inline",hasIcon:!0},{icon:"arrow-right",href:"https://www.google.com",label:"link inline",hasIcon:!0},{icon:"arrow-right",href:"https://www.google.com",label:"link inline",hasIcon:!0}],headline:"Headline optional",description:"Description optional",variant:i.Zps}};var o,s,p;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    title: 'Zertifikate für Typenzulassungen zum Download',
    links: [{
      icon: 'arrow-right',
      href: 'https://www.google.com',
      label: 'link inline',
      hasIcon: true
    }, {
      icon: 'arrow-right',
      href: 'https://www.google.com',
      label: 'link inline',
      hasIcon: true
    }, {
      icon: 'arrow-right',
      href: 'https://www.google.com',
      label: 'link inline',
      hasIcon: true
    }, {
      icon: 'arrow-right',
      href: 'https://www.google.com',
      label: 'link inline',
      hasIcon: true
    }],
    headline: 'Headline optional',
    description: 'Description optional',
    variant: GlobalVariants.Zps
  }
}`,...(p=(s=n.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const j=["Default"];export{n as Default,j as __namedExportsOrder,S as default};
