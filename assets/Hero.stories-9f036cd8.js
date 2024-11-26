import{j as e}from"./jsx-runtime-1a9d9a93.js";import{f as j}from"./index.es24-003a42d0.js";import{c as r}from"./clsx-0839fdbe.js";import{G as t}from"./global-variants-0f433d85.js";import{B as p,Z as m}from"./ZpsButton-e8cc879d.js";import{c as P}from"./index-f96983da.js";import{a as V}from"./moving-forward-arrow-a1f6b1da.js";import{t as H}from"./tw-merge-1166cefb.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index.es29-7715336a.js";import"./index.es13-30c6f137.js";const O={[t.Zps]:["zep-bg-gradient-to-r zep-from-[rgb(32,27,52)] zep-to-[rgb(32,23,94)]"],[t.Cat]:["zep-bg-typography-dark-100"]},q=P([` 
      zep-px-1.5
      zep-py-2
      sm:zep-px-2.5
      sm:zep-py-3
      md:zep-px-[65px]
      md:zep-py-4
      xl:zep-py-5
      xl:zep-px-[122px]
      zep-items-center
      zep-w-full
      zep-relative
    `],{variants:{variant:O},defaultVariants:{variant:t.Zps}}),Z=({imageSrc:a,imageAlt:l})=>a===void 0?null:e.jsx("img",{alt:l,src:a,"data-testid":"zep-newhero-image",className:r("zep-w-full","zep-object-cover","zep-h-auto","sm:zep-h-[380px]","xl:zep-h-[540px]")}),_=({children:a})=>e.jsx("h4",{"data-testid":"new-hero-headline",className:r("zep-typography-headlineLG","zep-typography-headline2XL-fluid-cqi","supports-cqi:zep-typography-headline2XL-fluid-cqi","zep-text-typography-light-100","supports-cqi:after:zep-text-[0.23em]","zep-mb-2","zep-col-span-1"),children:a}),N=()=>e.jsx("div",{className:"zep-w-full zep-absolute zep-left-[0px] zep-bottom-[0px] zep-hidden md:zep-block",children:e.jsx("img",{src:V,alt:"arrow",width:"18.75%","data-testid":"zep-her-arrowIcon",className:r("zep-absolute","zep-right-1","zep-mr-[3%]","zep-top-[50%]","zep-translate-y-[-50%]")})}),s=({variant:a=t.Zps,headline:l,buttonSecondary:i,buttonPrimary:v,buttonPrimaryOnClick:S,buttonSecondaryOnClick:C,imageAlt:k,imageSrc:w})=>e.jsxs("div",{className:r("zep-flex-col","zep-rounded-lg","zep-shadow-lg","md:zep-flex","zep-relative","zep-max-w-[1920px]","zep-mx-auto"),"data-testid":"zep-newhero",children:[e.jsx(Z,{imageSrc:w,imageAlt:k}),e.jsxs("div",{"data-testid":"zep-newhero-body",className:H(q({variant:a})),children:[e.jsx(_,{children:l}),e.jsx("div",{className:"zep-block","data-testid":"zep-new-herobutton",children:e.jsxs(j,{className:r("max-md:zep-flex","sm:zep-flex-row","zep-gap-1"),direction:"column",children:[e.jsx(p,{"data-testid":"zep-hero-primary-button",label:v,variant:m.Primary,onClick:S}),i?e.jsx(p,{"data-testid":"zep-hero-secondary-button",label:i,variant:m.Secondary,onClick:C}):null]})}),e.jsx(N,{})]})]});try{s.displayName="Hero",s.__docgenInfo={description:"",displayName:"Hero",props:{variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},buttonPrimary:{defaultValue:null,description:"",name:"buttonPrimary",required:!0,type:{name:"string"}},buttonSecondary:{defaultValue:null,description:"",name:"buttonSecondary",required:!1,type:{name:"string"}},buttonPrimaryOnClick:{defaultValue:null,description:"",name:"buttonPrimaryOnClick",required:!0,type:{name:"(ev: MouseEvent<HTMLElement, MouseEvent>) => void"}},buttonSecondaryOnClick:{defaultValue:null,description:"",name:"buttonSecondaryOnClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!1,type:{name:"string"}},imageAlt:{defaultValue:null,description:"",name:"imageAlt",required:!1,type:{name:"string"}}}}}catch{}const J={title:"Components/Hero",component:s,tags:["autodocs"],argTypes:{}},c={src:"./assets/hero_image.png",alt:"Lorem ipsum dolor sit amet consectetur."},h="Headline",x="Primary",f="Secondary",n={args:{variant:t.Zps,headline:h,buttonPrimary:x,buttonSecondary:f,buttonSecondaryOnClick:()=>null,buttonPrimaryOnClick:()=>null,imageSrc:c.src,imageAlt:c.alt}},o={args:{variant:t.Zps,headline:h,buttonPrimary:x,buttonPrimaryOnClick:()=>null,buttonSecondary:f,buttonSecondaryOnClick:()=>null}};var d,u,y;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariants.Zps,
    headline,
    buttonPrimary,
    buttonSecondary,
    buttonSecondaryOnClick: () => null,
    buttonPrimaryOnClick: () => null,
    imageSrc: Image.src,
    imageAlt: Image.alt
  }
}`,...(y=(u=n.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var z,g,b;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariants.Zps,
    headline,
    buttonPrimary,
    buttonPrimaryOnClick: () => null,
    buttonSecondary,
    buttonSecondaryOnClick: () => null
  }
}`,...(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const K=["Default","HeroSimple"];export{n as Default,o as HeroSimple,K as __namedExportsOrder,J as default};
