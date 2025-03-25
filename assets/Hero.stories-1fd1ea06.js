import{G as r,a as c}from"./global-variants-893e06e6.js";import{j as e}from"./jsx-runtime-1a9d9a93.js";import{f as M}from"./index.es24-01fa0cce.js";import{c as l}from"./clsx-0839fdbe.js";import{a as d}from"./moving-forward-arrow-a1f6b1da.js";import{b as p}from"./commonCSS-cc68a568.js";import{L as T}from"./Layout-fc6ef0e0.js";import{B as m,Z as f}from"./ZpsButton-7f65ec2c.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index.es35-79e31a69.js";import"./index.es31-95f1013f.js";import"./index.es13-751bc762.js";import"./index-ff2c9236.js";import"./getUrlWithTrailingSlash-6cb3eda2.js";import"./tw-merge-1166cefb.js";const h=""+new URL("broken-arrow-1b419e99.png",import.meta.url).href,U={[r.Zps]:p[c.ZpsBg],[r.Cat]:p[c.CatBg]},D=({imageSrc:a,imageAlt:t})=>a===void 0?null:e.jsx("img",{alt:t,src:a,"data-testid":"zep-newhero-image",className:l("zep-w-full","zep-object-cover","zep-h-[200px]","sm:zep-h-[320px]","md:zep-h-[380px]","lg:zep-h-[480px]")}),R=({children:a})=>e.jsx("h1",{"data-testid":"new-hero-headline",className:l("zep-typography-headline2XL-fluid-cqi","supports-cqi:zep-typography-headline2XL-fluid-cqi","zep-text-typography-light-100","supports-cqi:after:zep-text-[0.23em]","md:zep-max-w-[80%]","zep-w-full","zep-flex","md:zep-pr-2"),children:a}),W=({isErrorPage:a})=>e.jsxs("div",{className:"zep-w-full zep-absolute zep-left-[0px] zep-bottom-[0px] zep-hidden md:zep-block",children:[e.jsx("img",{src:a?h:d,alt:"arrow",width:"200px","data-testid":"zep-hero-arrowIcon-xl",className:l("zep-absolute","zep-right-[0]","zep-translate-y-[-50%]","zep-hidden","lg:zep-block")}),e.jsx("img",{src:a?h:d,alt:"arrow",width:"150px","data-testid":"zep-hero-arrowIcon-lg",className:l("zep-absolute","zep-right-[0]","zep-translate-y-[-50%]","lg:zep-hidden")})]}),s=({variant:a=r.Zps,headline:t,buttonSecondary:i,buttonPrimary:v,buttonPrimaryOnClick:I,buttonSecondaryOnClick:H,imageAlt:O,imageSrc:Z,buttonPrimaryIcon:N,buttonSecondaryIcon:_,buttonPrimaryIconPosition:E,buttonSecondaryIconPosition:L,isErrorPage:A=!1,buttonPrimaryUrl:B,buttonSecondaryUrl:G})=>e.jsxs("div",{children:[e.jsx(D,{imageSrc:Z,imageAlt:O}),e.jsx(T,{className:l("zep-flex-col","md:zep-flex","zep-relative"),wrapperClassname:U[a],testId:"zep-newhero",children:e.jsxs("div",{"data-testid":"zep-newhero-body",className:l("zep-flex","zep-flex-col","zep-gap-2","zep-items-start","zep-w-full","zep-relative","zep-w-full","zep-py-3","sm:zep-py-4","lg:zep-py-5"),children:[e.jsx(R,{children:t}),v||i?e.jsx("div",{className:"zep-block zep-w-full sm:zep-max-w-[80%]","data-testid":"zep-new-herobutton",children:e.jsxs(M,{className:l("max-md:zep-flex","sm:zep-flex-row","zep-gap-1"),direction:"column",children:[v&&e.jsx(m,{href:B,onClick:I,"data-testid":"zep-hero-primary-button",label:v,variant:f.Primary,icon:N,iconPosition:E}),i&&e.jsx(m,{href:G,"data-testid":"zep-hero-secondary-button",label:i,icon:_,onClick:H,variant:f.Secondary,iconPosition:L})]})}):null,e.jsx(W,{isErrorPage:A})]})})]});try{s.displayName="Hero",s.__docgenInfo={description:"",displayName:"Hero",props:{variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},buttonPrimary:{defaultValue:null,description:"",name:"buttonPrimary",required:!1,type:{name:"string"}},buttonSecondary:{defaultValue:null,description:"",name:"buttonSecondary",required:!1,type:{name:"string"}},buttonPrimaryOnClick:{defaultValue:null,description:"",name:"buttonPrimaryOnClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},buttonSecondaryOnClick:{defaultValue:null,description:"",name:"buttonSecondaryOnClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},buttonPrimaryIcon:{defaultValue:null,description:"",name:"buttonPrimaryIcon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"link"'},{value:'"list"'},{value:'"table"'},{value:'"email"'},{value:'"location"'},{value:'"time"'},{value:'"copy"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"delete-circle"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"marine-ship"'},{value:'"add-circle"'}]}},buttonSecondaryIcon:{defaultValue:null,description:"",name:"buttonSecondaryIcon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"link"'},{value:'"list"'},{value:'"table"'},{value:'"email"'},{value:'"location"'},{value:'"time"'},{value:'"copy"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"delete-circle"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"marine-ship"'},{value:'"add-circle"'}]}},buttonPrimaryIconPosition:{defaultValue:null,description:"",name:"buttonPrimaryIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},buttonSecondaryIconPosition:{defaultValue:null,description:"",name:"buttonSecondaryIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},isErrorPage:{defaultValue:{value:"false"},description:"",name:"isErrorPage",required:!1,type:{name:"boolean"}},buttonPrimaryUrl:{defaultValue:null,description:"",name:"buttonPrimaryUrl",required:!1,type:{name:"string"}},buttonSecondaryUrl:{defaultValue:null,description:"",name:"buttonSecondaryUrl",required:!1,type:{name:"string"}},imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!1,type:{name:"string"}},imageAlt:{defaultValue:null,description:"",name:"imageAlt",required:!1,type:{name:"string"}}}}}catch{}const ve={title:"Components/Hero",component:s,tags:["autodocs"],argTypes:{}},g={src:"./assets/hero_image.png",alt:"Lorem ipsum dolor sit amet consectetur."},C="Headline",q="Primary",j="Secondary",u={args:{variant:r.Zps,headline:C,buttonPrimary:q,buttonSecondary:j,buttonSecondaryOnClick:()=>null,buttonPrimaryOnClick:()=>null,imageSrc:g.src,imageAlt:g.alt}},n={args:{variant:r.Zps,headline:C,buttonPrimary:q,buttonPrimaryOnClick:()=>null,buttonSecondary:j,buttonSecondaryOnClick:()=>null}},o={args:{variant:r.Zps,headline:"Headiline test"}};var w,y,b;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(b=(y=u.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var z,x,k;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariants.Zps,
    headline,
    buttonPrimary,
    buttonPrimaryOnClick: () => null,
    buttonSecondary,
    buttonSecondaryOnClick: () => null
  }
}`,...(k=(x=n.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var S,P,V;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariants.Zps,
    headline: 'Headiline test'
  }
}`,...(V=(P=o.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};const se=["Default","HeroSimple","HeroSimpleWithoutButtons"];export{u as Default,n as HeroSimple,o as HeroSimpleWithoutButtons,se as __namedExportsOrder,ve as default};
