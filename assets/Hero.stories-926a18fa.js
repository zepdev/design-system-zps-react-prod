import{j as e,c as r}from"./clsx-490306ad.js";import{f as j}from"./index.es24-e7069ead.js";import{G as t}from"./global-variants-0f433d85.js";import{B as p,Z as c}from"./ZpsButton-20e95eec.js";import{c as P}from"./index-b85febcc.js";import{t as V}from"./tw-merge-1166cefb.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index.es29-7715336a.js";import"./index.es13-bd73f74d.js";const H={[t.Zps]:["zep-bg-gradient-to-r zep-from-[rgb(32,27,52)] zep-to-[rgb(32,23,94)]"],[t.Cat]:["zep-bg-typography-dark-100"]},O=P([` 
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
    `],{variants:{variant:H},defaultVariants:{variant:t.Zps}}),q=({imageSrc:a,imageAlt:s})=>a===void 0?null:e.jsx("img",{alt:s,src:a,"data-testid":"zep-newhero-image",className:r("zep-w-full","zep-object-cover","zep-h-auto","sm:zep-h-[380px]","xl:zep-h-[540px]")}),Z=({children:a})=>e.jsx("h4",{"data-testid":"new-hero-headline",className:r("zep-typography-headlineLG","zep-typography-headline2XL-fluid-cqi","supports-cqi:zep-typography-headline2XL-fluid-cqi","zep-text-typography-light-100","supports-cqi:after:zep-text-[0.23em]","zep-mb-2","zep-col-span-1"),children:a}),_=()=>e.jsx("div",{className:"zep-w-full zep-absolute zep-left-[0px] zep-bottom-[0px] zep-hidden md:zep-block",children:e.jsx("img",{src:"./assets/moving-forward-arrow.svg",alt:"arrow",width:"18.75%","data-testid":"zep-her-arrowIcon",className:r("zep-absolute","zep-right-1","zep-mr-[3%]","zep-top-[50%]","zep-translate-y-[-50%]")})}),l=({variant:a=t.Zps,headline:s,buttonSecondary:i,buttonPrimary:v,buttonPrimaryOnClick:S,buttonSecondaryOnClick:w,imageAlt:C,imageSrc:k})=>e.jsxs("div",{className:r("zep-flex-col","zep-rounded-lg","zep-shadow-lg","md:zep-flex","zep-relative","zep-max-w-[1920px]","zep-mx-auto"),"data-testid":"zep-newhero",children:[e.jsx(q,{imageSrc:k,imageAlt:C}),e.jsxs("div",{"data-testid":"zep-newhero-body",className:V(O({variant:a})),children:[e.jsx(Z,{children:s}),e.jsx("div",{className:"zep-block","data-testid":"zep-new-herobutton",children:e.jsxs(j,{className:r("max-md:zep-flex","sm:zep-flex-row","zep-gap-1"),direction:"column",children:[e.jsx(p,{"data-testid":"zep-hero-primary-button",label:v,variant:c.Primary,onClick:S}),i?e.jsx(p,{"data-testid":"zep-hero-secondary-button",label:i,variant:c.Secondary,onClick:w}):null]})}),e.jsx(_,{})]})]});try{l.displayName="Hero",l.__docgenInfo={description:"",displayName:"Hero",props:{variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},buttonPrimary:{defaultValue:null,description:"",name:"buttonPrimary",required:!0,type:{name:"string"}},buttonSecondary:{defaultValue:null,description:"",name:"buttonSecondary",required:!1,type:{name:"string"}},buttonPrimaryOnClick:{defaultValue:null,description:"",name:"buttonPrimaryOnClick",required:!0,type:{name:"(ev: MouseEvent<HTMLElement, MouseEvent>) => void"}},buttonSecondaryOnClick:{defaultValue:null,description:"",name:"buttonSecondaryOnClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!1,type:{name:"string"}},imageAlt:{defaultValue:null,description:"",name:"imageAlt",required:!1,type:{name:"string"}}}}}catch{}const X={title:"Components/Hero",component:l,tags:["autodocs"],argTypes:{}},d={src:"./assets/hero_image.png",alt:"Lorem ipsum dolor sit amet consectetur."},h="Headline",x="Primary",f="Secondary",n={args:{variant:t.Zps,headline:h,buttonPrimary:x,buttonSecondary:f,buttonSecondaryOnClick:()=>null,buttonPrimaryOnClick:()=>null,imageSrc:d.src,imageAlt:d.alt}},o={args:{variant:t.Zps,headline:h,buttonPrimary:x,buttonPrimaryOnClick:()=>null,buttonSecondary:f,buttonSecondaryOnClick:()=>null}};var m,u,y;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const R=["Default","HeroSimple"];export{n as Default,o as HeroSimple,R as __namedExportsOrder,X as default};
//# sourceMappingURL=Hero.stories-926a18fa.js.map
