import{j as i}from"./jsx-runtime-1a9d9a93.js";import{L as d}from"./global-variants-893e06e6.js";import{c as t}from"./Radio-fdaab159.js";import{M as f}from"./ModalComponent-6a9b84d5.js";import{C as h}from"./ContactForm-c2707e38.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index.es13-9623ab51.js";import"./clsx-0839fdbe.js";import"./focus-d7245c50.js";import"./index-9d475cdf.js";import"./index.es16-b727257a.js";import"./index.es31-95f1013f.js";import"./ZpsButton-657805eb.js";import"./index.es24-01fa0cce.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./getUrlWithoutTrailingSlash-e7815512.js";import"./tw-merge-1166cefb.js";import"./MultiLinkList-f60f407f.js";import"./Layout-7f280280.js";import"./HeaderLongComponent-647d98ef.js";import"./RichText-765faa54.js";import"./index.es18-4b39ea0e.js";import"./LinkListItem-18f13655.js";import"./index.es2-6c165fd4.js";import"./index.es32-fbb642fb.js";import"./index.es74-b2c6e214.js";import"./commonCSS-cc68a568.js";const n=({onSubmit:r,locale:e,isOpen:u,setIsOpen:c,loading:g,contactArea:l,contactList:o,privacyPolicyUrl:y})=>i.jsx(f,{isOpen:u,label:"Close",onClose:()=>c(!1),children:i.jsx(h,{onSubmit:r,locale:e,headline:l?`${t[e].lightboxHeadline} ${l}`:t[e].lightboxHeadlineFallback,tagline:t[e].lightboxTagline,linkLists:o&&(o==null?void 0:o.length)>0?o:[{headline:t[e].linkListGermany,links:[{label:"0800 - 5892787",icon:"phone",href:"tel:0800-5892787"}]},{headline:t[e].linkListInternational,links:[{label:"+49 40 853 151-222",icon:"phone",href:"tel:+49 40 853 151-222"}]}],loading:g,privacyPolicyUrl:y})});try{n.displayName="LightboxContactForm",n.__docgenInfo={description:"",displayName:"LightboxContactForm",props:{onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(data: unknown) => void"}},locale:{defaultValue:null,description:"",name:"locale",required:!0,type:{name:"enum",value:[{value:'"en"'},{value:'"de"'},{value:'"de-AT"'}]}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},setIsOpen:{defaultValue:null,description:"",name:"setIsOpen",required:!0,type:{name:"(x: boolean) => void"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},contactArea:{defaultValue:null,description:"",name:"contactArea",required:!1,type:{name:"string"}},contactList:{defaultValue:null,description:"",name:"contactList",required:!1,type:{name:"LinkListItemProps[]"}},privacyPolicyUrl:{defaultValue:null,description:"",name:"privacyPolicyUrl",required:!0,type:{name:"string"}}}}}catch{}const J={title:"Patterns/LightboxContactForm",component:n,tags:["autodocs"],argTypes:{locale:{control:{type:"radio",options:Object.keys(d)}}}},a={decorators:[r=>i.jsx("div",{className:"zep-h-[800px]",children:i.jsx(r,{})})],args:{locale:d.EN,isOpen:!0,privacyPolicyUrl:"https://www.google.com"}};var p,s,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  decorators: [Story => <div className="zep-h-[800px]">
        <Story />
      </div>],
  args: {
    locale: LocaleVariants.EN,
    isOpen: true,
    privacyPolicyUrl: 'https://www.google.com'
  } as LightboxContactFormProps
}`,...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const K=["Default"];export{a as Default,K as __namedExportsOrder,J as default};
