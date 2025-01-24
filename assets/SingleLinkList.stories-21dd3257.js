import{j as e}from"./jsx-runtime-1a9d9a93.js";import{G as i}from"./global-variants-71b69725.js";import{H as u}from"./HeaderShortComponent-b33631be.js";import{L as d}from"./LinkListItem-7213784a.js";import{L as g}from"./Layout-8fb0eebb.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index-ff2c9236.js";import"./clsx-0839fdbe.js";import"./moving-forward-arrow-a1f6b1da.js";import"./index.es2-1169e890.js";import"./index.es31-95f1013f.js";import"./index.es13-3580608c.js";import"./index.es32-fbb642fb.js";import"./index.es73-b2c6e214.js";import"./index.es24-0315e37d.js";import"./index.es34-79e31a69.js";import"./index.es16-2c7a91d7.js";import"./commonCSS-0b9dd3ad.js";const t=({headline:r,links:p,description:m,variant:a=i.Zps,title:c})=>e.jsxs(g,{className:"zep-flex xl:zep-px-[244px] md:zep-flex-row zep-flex-col md:zep-items-start xl:zep-gap-5 md:zep-gap-3 sm:zep-gap-2 zep-gap-1.5",children:[e.jsx(u,{className:"md:zep-w-[40%] zep-w-full",headline:c,variant:a,showArrow:!1}),e.jsx("div",{className:"zep-w-full md:zep-w-auto md:zep-flex-grow",children:e.jsx(d,{className:"zep-bg-background-medium",links:p,headline:r,description:m,variant:a})})]});try{t.displayName="SingleLinkList",t.__docgenInfo={description:"",displayName:"SingleLinkList",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},links:{defaultValue:null,description:"",name:"links",required:!0,type:{name:"LinkProps[]"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZPS_BG"'},{value:'"CAT_BG"'}]}},isMultiListItem:{defaultValue:null,description:"",name:"isMultiListItem",required:!1,type:{name:"boolean"}}}}}catch{}const N={title:"Patterns/SingleLinkList",component:t,tags:["autodocs"],argTypes:{variant:{children:{control:{type:"select",options:[i.Zps,i.Cat]}}}}},n={args:{title:"Zertifikate für Typenzulassungen zum Download",links:[{icon:"arrow-right",href:"https://www.google.com",label:"link inline",hasIcon:!0},{icon:"arrow-right",href:"https://www.google.com",label:"link inline",hasIcon:!0},{icon:"arrow-right",href:"https://www.google.com",label:"link inline",hasIcon:!0},{icon:"arrow-right",href:"https://www.google.com",label:"link inline",hasIcon:!0}],headline:"Headline optional",description:"Description optional",variant:i.Zps}};var o,l,s;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(s=(l=n.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const C=["Default"];export{n as Default,C as __namedExportsOrder,N as default};
