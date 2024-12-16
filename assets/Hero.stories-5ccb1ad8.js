import{j as e}from"./jsx-runtime-1a9d9a93.js";import{f as j}from"./index.es24-0315e37d.js";import{c as P}from"./index-ff2c9236.js";import{c as r}from"./clsx-0839fdbe.js";import{a as V}from"./moving-forward-arrow-a1f6b1da.js";import{G as t}from"./global-variants-0f433d85.js";import{t as q}from"./tw-merge-1166cefb.js";import{B as p,Z as m}from"./ZpsButton-b29313d9.js";import{L as H}from"./Layout-bd6ed67d.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index.es34-79e31a69.js";import"./index.es31-95f1013f.js";import"./index.es13-f7a67de2.js";const O={[t.Zps]:["zep-bg-gradient-to-r zep-from-[rgb(32,27,52)] zep-to-[rgb(32,23,94)]"],[t.Cat]:["zep-bg-typography-dark-100"]},Z=P([` 
      zep-items-center
      zep-w-full
      zep-relative
    `],{variants:{variant:O},defaultVariants:{variant:t.Zps}}),_=({imageSrc:a,imageAlt:i})=>a===void 0?null:e.jsx("img",{alt:i,src:a,"data-testid":"zep-newhero-image",className:r("zep-w-full","zep-object-cover","zep-h-auto","sm:zep-h-[380px]","xl:zep-h-[540px]")}),N=({children:a})=>e.jsx("h4",{"data-testid":"new-hero-headline",className:r("zep-typography-headlineLG-fluid-cqi","md:zep-typography-headline2XL-fluid-cqi","md:supports-cqi:zep-typography-headline2XL-fluid-cqi","zep-text-typography-light-100","supports-cqi:after:zep-text-[0.23em]","zep-mb-2","zep-max-w-[80%]"),children:a}),I=()=>e.jsx("div",{className:"zep-w-full zep-absolute zep-left-[0px] zep-bottom-[0px] zep-hidden md:zep-block",children:e.jsx("img",{src:V,alt:"arrow",width:"18.75%","data-testid":"zep-her-arrowIcon",className:r("zep-absolute","zep-right-1","zep-mr-[3%]","zep-top-[50%]","zep-translate-y-[-50%]")})}),l=({variant:a=t.Zps,headline:i,buttonSecondary:s,buttonPrimary:x,buttonPrimaryOnClick:S,buttonSecondaryOnClick:C,imageAlt:k,imageSrc:w})=>e.jsxs("div",{className:r("zep-flex-col","zep-rounded-lg","zep-shadow-lg","md:zep-flex","zep-relative","zep-mx-auto","zep-z-[-1]"),"data-testid":"zep-newhero",children:[e.jsx(_,{imageSrc:w,imageAlt:k}),e.jsxs(H,{testId:"zep-newhero-body",className:q(Z({variant:a})),children:[e.jsx(N,{children:i}),e.jsx("div",{className:"zep-block","data-testid":"zep-new-herobutton",children:e.jsxs(j,{className:r("max-md:zep-flex","sm:zep-flex-row","zep-gap-1"),direction:"column",children:[e.jsx(p,{"data-testid":"zep-hero-primary-button",label:x,variant:m.Primary,onClick:S}),s?e.jsx(p,{"data-testid":"zep-hero-secondary-button",label:s,variant:m.Secondary,onClick:C}):null]})}),e.jsx(I,{})]})]});try{l.displayName="Hero",l.__docgenInfo={description:"",displayName:"Hero",props:{variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},buttonPrimary:{defaultValue:null,description:"",name:"buttonPrimary",required:!0,type:{name:"string"}},buttonSecondary:{defaultValue:null,description:"",name:"buttonSecondary",required:!1,type:{name:"string"}},buttonPrimaryOnClick:{defaultValue:null,description:"",name:"buttonPrimaryOnClick",required:!0,type:{name:"(ev: MouseEvent<HTMLElement, MouseEvent>) => void"}},buttonSecondaryOnClick:{defaultValue:null,description:"",name:"buttonSecondaryOnClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!1,type:{name:"string"}},imageAlt:{defaultValue:null,description:"",name:"imageAlt",required:!1,type:{name:"string"}}}}}catch{}const U={title:"Components/Hero",component:l,tags:["autodocs"],argTypes:{}},c={src:"./assets/hero_image.png",alt:"Lorem ipsum dolor sit amet consectetur."},f="Headline",h="Primary",v="Secondary",n={args:{variant:t.Zps,headline:f,buttonPrimary:h,buttonSecondary:v,buttonSecondaryOnClick:()=>null,buttonPrimaryOnClick:()=>null,imageSrc:c.src,imageAlt:c.alt}},o={args:{variant:t.Zps,headline:f,buttonPrimary:h,buttonPrimaryOnClick:()=>null,buttonSecondary:v,buttonSecondaryOnClick:()=>null}};var u,d,y;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(y=(d=n.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var z,g,b;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariants.Zps,
    headline,
    buttonPrimary,
    buttonPrimaryOnClick: () => null,
    buttonSecondary,
    buttonSecondaryOnClick: () => null
  }
}`,...(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const W=["Default","HeroSimple"];export{n as Default,o as HeroSimple,W as __namedExportsOrder,U as default};
