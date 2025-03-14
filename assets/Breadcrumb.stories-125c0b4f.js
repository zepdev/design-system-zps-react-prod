import{j as e}from"./jsx-runtime-1a9d9a93.js";import{h as r}from"./index.es13-11b4520a.js";import{Z as l,l as n}from"./index.es16-d6722ea7.js";import{c as s}from"./clsx-0839fdbe.js";import{r as y}from"./index-8b3efc3f.js";import"./index.es31-95f1013f.js";import"./_commonjsHelpers-de833af9.js";const c=({items:p})=>{var i,d;const[g,m]=y.useState((p==null?void 0:p.length)<3);return e.jsxs("div",{className:"zep-px-1 sm:zep-px-1.5 md:zep-px-[66px] xl:zep-px-[122px] zep-py-0.5 md:zep-py-0.5 zep-flex zep-justify-between md:zep-justify-start zep-items-center zep-bg-background-dark",children:[e.jsx("div",{className:"zep-block md:zep-hidden",children:g?e.jsx("div",{className:"zep-flex zep-flex-wrap zep-gap-0.25 zep-items-center",children:p.map((t,a)=>e.jsxs("div",{className:"zep-flex zep-items-center zep-gap-0.25",children:[e.jsx(l,{label:t==null?void 0:t.title,href:t.path,mode:n.Standalone,className:s("zep-typography-supportText",a+1===p.length?"zep-text-typography-light-70":"zep-text-typography-light-70/70")}),a+1!==p.length&&e.jsx(r,{color:"#FBFBFBB2",name:"chevron-mini-right"})]},t==null?void 0:t.title))}):e.jsxs("div",{className:"zep-flex zep-gap-0.25",children:[e.jsxs("div",{className:"zep-flex zep-items-center zep-gap-0.25",children:[e.jsx(l,{label:(i=p[0])==null?void 0:i.title,href:p[0].path,mode:n.Standalone,className:s("zep-typography-supportText zep-text-typography-light-70/70")}),e.jsx(r,{color:"#FBFBFBB2",name:"chevron-mini-right"})]}),e.jsxs("div",{onClick:()=>m(!0),className:"zep-flex zep-items-center zep-gap-0.25",children:[e.jsx("div",{className:"zep-bg-[#484848] zep-px-[10px] zep-text-typography-light-100 zep-rounded-4",children:"..."}),e.jsx(r,{color:"#FBFBFBB2",name:"chevron-mini-right"})]}),e.jsx(l,{label:(d=p[p.length-1])==null?void 0:d.title,href:p[p.length-1].path,mode:n.Standalone,className:s("zep-typography-supportText zep-text-typography-light-70")})]})}),e.jsx("div",{className:"zep-hidden md:zep-block",children:e.jsx("div",{className:"zep-flex zep-gap-0.25 zep-items-center",children:p.map((t,a)=>e.jsxs("div",{className:"zep-flex zep-items-center zep-gap-0.25",children:[e.jsx(l,{label:t==null?void 0:t.title,href:t.path,mode:n.Standalone,className:s("zep-typography-supportText",a+1===p.length?"zep-text-typography-light-70":"zep-text-typography-light-70/70")}),a+1!==p.length&&e.jsx(r,{color:"#FBFBFBB2",name:"chevron-mini-right"})]},t==null?void 0:t.title))})})]})};try{c.displayName="Breadcrumb",c.__docgenInfo={description:"",displayName:"Breadcrumb",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"BreadcrumbItem[]"}}}}}catch{}const v={title:"Components/Breadcrumb",component:c,tags:["autodocs"],argTypes:{}},o={args:{items:[{path:"/",title:"Home"},{path:"/link-2",title:"Link 2"},{path:"/link-3",title:"Link 3"},{path:"/link-4",title:"Link 4"},{path:"/link-5",title:"Link 5"}]}};var h,x,z;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(z=(x=o.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};const F=["Default"];export{o as Default,F as __namedExportsOrder,v as default};
