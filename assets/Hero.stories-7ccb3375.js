import{G as r,a as y}from"./global-variants-893e06e6.js";import{j as e}from"./jsx-runtime-1a9d9a93.js";import{f as A}from"./index.es24-01fa0cce.js";import{c as l}from"./clsx-0839fdbe.js";import{a as B}from"./moving-forward-arrow-a1f6b1da.js";import{b}from"./commonCSS-cc68a568.js";import{B as o,Z as t}from"./ZpsButton-47c891da.js";import{L as M}from"./Layout-7f280280.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index.es35-79e31a69.js";import"./index.es31-95f1013f.js";import"./index.es13-3580608c.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";const T=""+new URL("broken-arrow-1b419e99.png",import.meta.url).href,D={[r.Zps]:b[y.ZpsBg],[r.Cat]:b[y.CatBg]},R=({imageSrc:a,imageAlt:c})=>a===void 0?null:e.jsx("img",{alt:c,src:a,"data-testid":"zep-newhero-image",className:l("zep-w-full","zep-object-cover","zep-h-auto","sm:zep-h-[380px]","xl:zep-h-[540px]")}),W=({children:a})=>e.jsx("h1",{"data-testid":"new-hero-headline",className:l("zep-typography-headlineLG-fluid-cqi","md:zep-typography-headline2XL-fluid-cqi","md:supports-cqi:zep-typography-headline2XL-fluid-cqi","zep-text-typography-light-100","supports-cqi:after:zep-text-[0.23em]","zep-max-w-[80%]","zep-w-full","zep-flex"),children:a}),X=({isErrorPage:a})=>e.jsx("div",{className:"zep-w-full zep-absolute zep-left-[0px] zep-bottom-[0px] zep-hidden md:zep-block",children:e.jsx("img",{src:a?T:B,alt:"arrow",width:"18.75%","data-testid":"zep-her-arrowIcon",className:l("zep-absolute","zep-right-1","zep-mr-[3%]","zep-top-[50%]","zep-translate-y-[-50%]")})}),m=({variant:a=r.Zps,headline:c,buttonSecondary:u,buttonPrimary:n,buttonPrimaryOnClick:E,buttonSecondaryOnClick:_,imageAlt:N,imageSrc:L,buttonPrimaryIcon:f,buttonSecondaryIcon:h,buttonPrimaryIconPosition:g,buttonSecondaryIconPosition:w,isErrorPage:G=!1,buttonPrimaryUrl:d,buttonSecondaryUrl:p})=>e.jsxs("div",{children:[e.jsx(R,{imageSrc:L,imageAlt:N}),e.jsx(M,{className:l("zep-flex-col","md:zep-flex","zep-relative","!zep-px-[0]"),wrapperClassname:D[a],testId:"zep-newhero",children:e.jsxs("div",{"data-testid":"zep-newhero-body",className:l("zep-flex","zep-flex-col","zep-gap-2","zep-items-start","zep-w-full","zep-relative","zep-max-w-[1920px]","zep-w-full","zep-px-1","sm:zep-px-1.5","md:zep-px-[66px]","xl:zep-px-[122px]","zep-py-3","sm:zep-py-4","md:zep-py-5"),children:[e.jsx(W,{children:c}),n||u?e.jsx("div",{className:"zep-block zep-w-full zep-max-w-[80%]","data-testid":"zep-new-herobutton",children:e.jsxs(A,{className:l("max-md:zep-flex","sm:zep-flex-row","zep-gap-1"),direction:"column",children:[n&&d&&e.jsx("a",{href:d,children:e.jsx(o,{"data-testid":"zep-hero-primary-button",label:n,variant:t.Primary,icon:f,iconPosition:g})}),n&&!d&&e.jsx(o,{"data-testid":"zep-hero-primary-button",label:n,variant:t.Primary,onClick:E,icon:f,iconPosition:g}),u&&p&&e.jsx("a",{href:p,children:e.jsx(o,{"data-testid":"zep-hero-secondary-button",label:u,icon:h,variant:t.Secondary,iconPosition:w})}),u&&!p&&e.jsx(o,{"data-testid":"zep-hero-secondary-button",label:u,icon:h,variant:t.Secondary,onClick:_,iconPosition:w})]})}):null,e.jsx(X,{isErrorPage:G})]})})]});try{m.displayName="Hero",m.__docgenInfo={description:"",displayName:"Hero",props:{variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},buttonPrimary:{defaultValue:null,description:"",name:"buttonPrimary",required:!1,type:{name:"string"}},buttonSecondary:{defaultValue:null,description:"",name:"buttonSecondary",required:!1,type:{name:"string"}},buttonPrimaryOnClick:{defaultValue:null,description:"",name:"buttonPrimaryOnClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},buttonSecondaryOnClick:{defaultValue:null,description:"",name:"buttonSecondaryOnClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},buttonPrimaryIcon:{defaultValue:null,description:"",name:"buttonPrimaryIcon",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"email"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"location"'},{value:'"list"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"table"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"time"'},{value:'"copy"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"search"'},{value:'"delete-circle"'},{value:'"alert"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"add-circle"'},{value:'"marine-ship"'}]}},buttonSecondaryIcon:{defaultValue:null,description:"",name:"buttonSecondaryIcon",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"email"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"location"'},{value:'"list"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"table"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"time"'},{value:'"copy"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"search"'},{value:'"delete-circle"'},{value:'"alert"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"add-circle"'},{value:'"marine-ship"'}]}},buttonPrimaryIconPosition:{defaultValue:null,description:"",name:"buttonPrimaryIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},buttonSecondaryIconPosition:{defaultValue:null,description:"",name:"buttonSecondaryIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},isErrorPage:{defaultValue:{value:"false"},description:"",name:"isErrorPage",required:!1,type:{name:"boolean"}},buttonPrimaryUrl:{defaultValue:null,description:"",name:"buttonPrimaryUrl",required:!1,type:{name:"string"}},buttonSecondaryUrl:{defaultValue:null,description:"",name:"buttonSecondaryUrl",required:!1,type:{name:"string"}},imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!1,type:{name:"string"}},imageAlt:{defaultValue:null,description:"",name:"imageAlt",required:!1,type:{name:"string"}}}}}catch{}const ie={title:"Components/Hero",component:m,tags:["autodocs"],argTypes:{}},z={src:"./assets/hero_image.png",alt:"Lorem ipsum dolor sit amet consectetur."},I="Headline",O="Primary",Z="Secondary",i={args:{variant:r.Zps,headline:I,buttonPrimary:O,buttonSecondary:Z,buttonSecondaryOnClick:()=>null,buttonPrimaryOnClick:()=>null,imageSrc:z.src,imageAlt:z.alt}},v={args:{variant:r.Zps,headline:I,buttonPrimary:O,buttonPrimaryOnClick:()=>null,buttonSecondary:Z,buttonSecondaryOnClick:()=>null}},s={args:{variant:r.Zps,headline:"Headiline test"}};var x,k,S;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(S=(k=i.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var V,j,P;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariants.Zps,
    headline,
    buttonPrimary,
    buttonPrimaryOnClick: () => null,
    buttonSecondary,
    buttonSecondaryOnClick: () => null
  }
}`,...(P=(j=v.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var q,C,H;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariants.Zps,
    headline: 'Headiline test'
  }
}`,...(H=(C=s.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};const ve=["Default","HeroSimple","HeroSimpleWithoutButtons"];export{i as Default,v as HeroSimple,s as HeroSimpleWithoutButtons,ve as __namedExportsOrder,ie as default};
