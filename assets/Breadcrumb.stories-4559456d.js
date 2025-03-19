import{j as e}from"./jsx-runtime-1a9d9a93.js";import{h as a}from"./index.es13-751bc762.js";import{Z as n,l as s}from"./index.es16-1ce448e1.js";import{c as l}from"./clsx-0839fdbe.js";import{r as g}from"./index-8b3efc3f.js";import"./index.es31-95f1013f.js";import"./_commonjsHelpers-de833af9.js";const o=({items:t})=>{var i,c;const[m,z]=g.useState((t==null?void 0:t.length)<3);return t.length===1?null:e.jsxs("div",{className:"zep-px-1 sm:zep-px-1.5 md:zep-px-[66px] lg:zep-px-[120px] zep-py-0.5 md:zep-py-0.5 zep-flex zep-justify-between md:zep-justify-start zep-items-center zep-bg-background-dark",children:[e.jsx("div",{className:"zep-block md:zep-hidden",children:m?e.jsx("div",{className:"zep-flex zep-flex-wrap zep-gap-0.25 zep-items-center",children:t.map(p=>e.jsxs("div",{className:"zep-flex zep-items-center zep-gap-0.25",children:[e.jsx(n,{label:p==null?void 0:p.title,href:p.path,mode:s.Standalone,className:l("zep-typography-supportText zep-text-typography-light-70/70")}),e.jsx(a,{color:"#FBFBFBB2",name:"chevron-mini-right"})]},p==null?void 0:p.title))}):e.jsxs("div",{className:"zep-flex zep-gap-0.25",children:[e.jsxs("div",{className:"zep-flex zep-items-center zep-gap-0.25",children:[e.jsx(n,{label:(i=t[0])==null?void 0:i.title,href:t[0].path,mode:s.Standalone,className:l("zep-typography-supportText zep-text-typography-light-70/70")}),e.jsx(a,{color:"#FBFBFBB2",name:"chevron-mini-right"})]}),e.jsxs("div",{onClick:()=>z(!0),className:"zep-flex zep-items-center zep-gap-0.25",children:[e.jsx("div",{className:"zep-bg-[#484848] zep-px-[10px] zep-text-typography-light-100 zep-rounded-4",children:"..."}),e.jsx(a,{color:"#FBFBFBB2",name:"chevron-mini-right"})]}),e.jsx("p",{className:"zep-typography-supportText zep-text-typography-light-70",children:(c=t[t.length-1])==null?void 0:c.title})]})}),e.jsx("div",{className:"zep-hidden md:zep-block",children:e.jsx("div",{className:"zep-flex zep-gap-0.25 zep-items-center",children:t.map(p=>e.jsxs("div",{className:"zep-flex zep-items-center zep-gap-0.25",children:[e.jsx(a,{color:"#FBFBFBB2",name:"chevron-mini-right"}),e.jsx(n,{label:p==null?void 0:p.title,href:p.path,mode:s.Standalone,className:l("zep-typography-supportText zep-text-typography-light-70/70")})]},p==null?void 0:p.title))})})]})};try{o.displayName="Breadcrumb",o.__docgenInfo={description:"",displayName:"Breadcrumb",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"BreadcrumbItem[]"}}}}}catch{}const b={title:"Components/Breadcrumb",component:o,tags:["autodocs"],argTypes:{}},r={args:{items:[{path:"/",title:"Home"},{path:"/link-2",title:"Link 2"},{path:"/link-3",title:"Link 3"},{path:"/link-4",title:"Link 4"},{path:"/link-5",title:"Link 5"}]}};var d,h,x;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    items: [{
      path: '/',
      title: 'Home'
    }, {
      path: '/link-2',
      title: 'Link 2'
    }, {
      path: '/link-3',
      title: 'Link 3'
    }, {
      path: '/link-4',
      title: 'Link 4'
    }, {
      path: '/link-5',
      title: 'Link 5'
    }]
  } as BreadcrumbProps
}`,...(x=(h=r.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const v=["Default"];export{r as Default,v as __namedExportsOrder,b as default};
