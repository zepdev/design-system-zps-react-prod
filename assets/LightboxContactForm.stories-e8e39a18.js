import{j as i}from"./jsx-runtime-1a9d9a93.js";import{L as d}from"./global-variants-893e06e6.js";import{c as t}from"./Radio-c4b045d8.js";import{M as f}from"./ModalComponent-87ff4a03.js";import{C as h}from"./ContactForm-6546efa5.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index.es13-751bc762.js";import"./clsx-0839fdbe.js";import"./focus-d7245c50.js";import"./index-9d475cdf.js";import"./index.es16-1ce448e1.js";import"./index.es31-95f1013f.js";import"./ZpsButton-317ff0a2.js";import"./index.es24-01fa0cce.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./getUrlWithoutTrailingSlash-e7815512.js";import"./tw-merge-1166cefb.js";import"./MultiLinkList-ae0d7726.js";import"./Layout-fc6ef0e0.js";import"./HeaderLongComponent-5a16b784.js";import"./RichText-640f3398.js";import"./index.es18-4b39ea0e.js";import"./LinkListItem-40a22317.js";import"./index.es2-db2ca694.js";import"./index.es32-fbb642fb.js";import"./commonCSS-cc68a568.js";const n=({onSubmit:r,locale:e,isOpen:u,setIsOpen:c,loading:g,contactArea:l,contactList:o,privacyPolicyUrl:y})=>i.jsx(f,{isOpen:u,label:"Close",onClose:()=>c(!1),children:i.jsx(h,{onSubmit:r,locale:e,headline:l?`${t[e].lightboxHeadline} ${l}`:t[e].lightboxHeadlineFallback,tagline:t[e].lightboxTagline,linkLists:o&&(o==null?void 0:o.length)>0?o:[{headline:t[e].linkListGermany,links:[{label:"0800 - 5892787",icon:"phone",href:"tel:0800-5892787"}]},{headline:t[e].linkListInternational,links:[{label:"+49 40 853 151-222",icon:"phone",href:"tel:+49 40 853 151-222"}]}],loading:g,privacyPolicyUrl:y})});try{n.displayName="LightboxContactForm",n.__docgenInfo={description:"",displayName:"LightboxContactForm",props:{onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(data: unknown) => void"}},locale:{defaultValue:null,description:"",name:"locale",required:!0,type:{name:"enum",value:[{value:'"en"'},{value:'"de"'},{value:'"de-AT"'}]}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},setIsOpen:{defaultValue:null,description:"",name:"setIsOpen",required:!0,type:{name:"(x: boolean) => void"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},contactArea:{defaultValue:null,description:"",name:"contactArea",required:!1,type:{name:"string"}},contactList:{defaultValue:null,description:"",name:"contactList",required:!1,type:{name:"LinkListItemProps[]"}},privacyPolicyUrl:{defaultValue:null,description:"",name:"privacyPolicyUrl",required:!0,type:{name:"string"}}}}}catch{}const B={title:"Patterns/LightboxContactForm",component:n,tags:["autodocs"],argTypes:{locale:{control:{type:"radio",options:Object.keys(d)}}}},a={decorators:[r=>i.jsx("div",{className:"zep-h-[800px]",children:i.jsx(r,{})})],args:{locale:d.EN,isOpen:!0,privacyPolicyUrl:"https://www.google.com"}};var p,s,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  decorators: [Story => <div className="zep-h-[800px]">
        <Story />
      </div>],
  args: {
    locale: LocaleVariants.EN,
    isOpen: true,
    privacyPolicyUrl: 'https://www.google.com'
  } as LightboxContactFormProps
}`,...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const J=["Default"];export{a as Default,J as __namedExportsOrder,B as default};
