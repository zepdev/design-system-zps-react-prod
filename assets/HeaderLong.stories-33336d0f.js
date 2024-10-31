import{j as e,c as n}from"./clsx-490306ad.js";import{L as H,l as v}from"./index.es16-83e3794c.js";import{B as A,Z as j}from"./ZpsButton-5c43bf9f.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index.es29-7715336a.js";import"./index.es13-bd73f74d.js";import"./index.es24-e7069ead.js";import"./index-b85febcc.js";import"./tw-merge-1166cefb.js";const o=({textColor:t,type:r,tagline:C,headline:w,description:L,linkHref:l,linkText:m,buttonOnClick:u,buttonText:p})=>{const d=t==="white"?"zep-text-typography-light-100":t==="black"?"zep-text-typography-dark-100":"zep-text-indigo-500",T=t==="white"?"zep-text-yellow-500":t==="black"?"zep-text-typography-dark-100":"zep-text-indigo-500",q=t==="white"?"zep-text-steel-500":t==="black"?"zep-text-typography-dark-70 zep-opacity-70":"zep-text-steel-500";return e.jsxs("div",{className:n("zep-px-1.5","sm:zep-px-1","zep-break-words","zep-max-w-[1920px]","zep-mx-auto"),"data-testid":"header-long",children:[e.jsx("div",{className:"zep-block zep-max-w-[944px] zep-self-center",children:e.jsx("h3",{className:n(q,"zep-mb-0.5 zep-typography-taglineMD"),children:C})}),e.jsxs("div",{className:"md:zep-flex md:zep-justify-between",children:[e.jsx("h2",{className:n(d,"zep-mb-1.5 md:zep-mb-2.5 sm:zep-mb-1.5 md:zep-mr-2 zep-max-w-[944px] zep-typography-headlineLG-fluid-cqi"),children:w}),e.jsx("div",{className:"md:zep-float-right",children:r==="button"&&p&&u?e.jsx(A,{className:"zep-mb-2.5 zep-whitespace-nowrap md:zep-mb-[0px]",label:p,onClick:u,variant:j.Primary}):r==="link"&&l&&m?e.jsx(H,{className:n(T,"zep-font-400","zep-mb-2","zep-whitespace-nowrap","md:zep-mb-[0px]","hover:zep-underline","hover:zep-font-500","zep-cursor-pointer"),as:"div",label:m,hasIcon:!0,href:l,mode:v.Standalone}):null})]}),e.jsx("div",{className:"zep-max-w-[944px] zep-break-all",children:e.jsx("p",{className:n(d),children:L})})]})};try{o.displayName="HeaderLong",o.__docgenInfo={description:"",displayName:"HeaderLong",props:{textColor:{defaultValue:null,description:"",name:"textColor",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"indigo"'},{value:'"black"'}]}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},buttonOnClick:{defaultValue:null,description:"",name:"buttonOnClick",required:!1,type:{name:"(() => {})"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},buttonText:{defaultValue:null,description:"",name:"buttonText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"link"'},{value:'"none"'}]}}}}}catch{}const I={title:"Components/Header Long",component:o,tags:["autodocs"],argTypes:{}},i={args:{textColor:"indigo",type:"button",tagline:"Tagline",headline:"Headline Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus",linkText:"Click me",linkHref:"https://www.google.com",buttonText:"Click me",buttonOnClick:()=>{},description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus."}},a={args:{textColor:"indigo",type:"link",tagline:"Tagline",headline:"Headline",linkText:"Click me",linkHref:"https://www.google.com",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus."}},s={args:{textColor:"indigo",type:"button",tagline:"Tagline",headline:"Headline",linkText:"Click me",buttonText:"Click me",buttonOnClick:()=>{},description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus."}};var c,g,x;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: ({
    textColor: 'indigo',
    type: 'button',
    tagline: 'Tagline',
    headline: 'Headline Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus',
    linkText: 'Click me',
    linkHref: 'https://www.google.com',
    buttonText: 'Click me',
    buttonOnClick: () => {},
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.'
  } as HeaderLongProps)
}`,...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var h,k,b;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: ({
    textColor: 'indigo',
    type: 'link',
    tagline: 'Tagline',
    headline: 'Headline',
    linkText: 'Click me',
    linkHref: 'https://www.google.com',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.'
  } as HeaderLongProps)
}`,...(b=(k=a.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var z,f,y;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: ({
    textColor: 'indigo',
    type: 'button',
    tagline: 'Tagline',
    headline: 'Headline',
    linkText: 'Click me',
    buttonText: 'Click me',
    buttonOnClick: () => {},
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.'
  } as HeaderLongProps)
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Z=["Default","WithLink","WithButton"];export{i as Default,s as WithButton,a as WithLink,Z as __namedExportsOrder,I as default};
//# sourceMappingURL=HeaderLong.stories-33336d0f.js.map
