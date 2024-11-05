import{j as e,c as s}from"./clsx-490306ad.js";import{f as w}from"./index.es24-e7069ead.js";import{r as h}from"./index-8b3efc3f.js";import{G as o}from"./global-variants-0f433d85.js";import{B as c,Z as l}from"./ZpsButton-20e95eec.js";import{c as S}from"./index-b85febcc.js";import{t as I}from"./tw-merge-1166cefb.js";import"./index.es29-7715336a.js";import"./_commonjsHelpers-de833af9.js";import"./index.es13-bd73f74d.js";const y=h.createContext({variant:o.Zps}),B=()=>h.useContext(y),r=({variant:a=o.Zps,children:t})=>e.jsx(y.Provider,{value:{variant:a},children:e.jsx("div",{className:s("zep-flex-col","zep-rounded-lg","zep-shadow-lg","md:zep-flex","zep-relative","zep-max-w-[1920px]","zep-mx-auto"),"data-testid":"zep-newhero",children:t})}),A=({imageSrc:a,imageAlt:t})=>e.jsx("div",{"data-testid":"",className:s("sm:zep-h-auto","md:zep-h-[380px]","lg:zep-h-[540px]","zep-flex"),children:e.jsx("img",{alt:t,src:a,"data-testid":"zep-newhero-image",className:s("zep-w-full","zep-object-cover","zep-h-[202px]","sm:zep-h-[380px]","md:zep-h-[380px]","lg:zep-h-[540px]","md:zep-max-w-full")})}),N=({children:a})=>{const{variant:t}=B(),f={[o.Zps]:["zep-bg-gradient-to-r zep-from-[rgb(32,27,52)] zep-to-[rgb(32,23,94)]"],[o.Cat]:["zep-bg-typography-dark-100"]},j=S([` 
        zep-px-[24px]
        zep-py-[32px]
        sm:zep-px-[40px]
        sm:zep-py-[48px]
        md:zep-px-[65px]
        md:zep-py-[64px]
        lg:zep-py-[80px]
        lg:zep-px-[122px]
        zep-items-center
        zep-w-full
        zep-relative
      `],{variants:{variant:f},defaultVariants:{variant:o.Zps}});return e.jsx("div",{"data-testid":"zep-newhero-body",className:I(j({variant:t})),children:e.jsx("div",{className:"sm:zep-w-9/12",children:a})})},Z=({children:a})=>e.jsx("h4",{"data-testid":"new-hero-headline",className:s("zep-typography-headlineLG","zep-typography-headline2XL-fluid-cqi","supports-cqi:zep-typography-headline2XL-fluid-cqi","zep-text-typography-light-100","supports-cqi:after:zep-text-[0.23em]","zep-mb-2","zep-col-span-1"),children:a}),_=({buttonPrimary:a,buttonSecondary:t})=>e.jsx("div",{className:"zep-block","data-testid":"zep-new-herobutton",children:e.jsxs(w,{className:s("max-md:zep-flex","sm:zep-flex-row","zep-gap-1"),direction:"column",children:[e.jsx(c,{label:a,variant:l.Primary}),e.jsx(c,{label:t,variant:l.Secondary})]})}),P=({imageSrc:a,alt:t})=>e.jsx("div",{className:"zep-w-full zep-absolute zep-left-[0px] zep-bottom-[0px]",children:e.jsx("img",{src:a,alt:t,width:"18.75%","data-testid":"zep-her-arrowIcon",className:s("zep-absolute","zep-hidden","zep-right-1","md:zep-block","md:zep-mr-[3%]","md:zep-top-[50%]","md:zep-translate-y-[-50%]")})});r.Image=A;r.Body=N;r.Header=Z;r.Button=_;r.IconArrow=P;try{r.displayName="Hero",r.__docgenInfo={description:"",displayName:"Hero",props:{variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}}}}}catch{}const O={title:"Components/Hero",component:r,tags:["autodocs"],argTypes:{children:{control:{disable:!0}},variant:{control:{type:"radio",options:Object.keys(o)}}}},n={src:"./assets/hero_image.png",alt:"Lorem ipsum dolor sit amet consectetur.",iconSrc:"./assets/moving-forward-arrow.svg",iconAlt:"Lorem ipsum dolor"},H="Headline",v="Primary",b="Secondary",p={args:{variant:o.Zps,children:e.jsxs(e.Fragment,{children:[e.jsx(r.Image,{imageSrc:n.src,imageAlt:n.alt}),e.jsxs(r.Body,{children:[e.jsx(r.Header,{children:H}),e.jsx(r.Button,{buttonPrimary:v,buttonSecondary:b}),e.jsx(r.IconArrow,{imageSrc:n.iconSrc,alt:n.iconAlt})]})]})}},i={args:{variant:o.Zps,children:e.jsxs(e.Fragment,{children:[e.jsxs(r.Body,{children:[e.jsx(r.Header,{children:H}),e.jsx(r.Button,{buttonPrimary:v,buttonSecondary:b})]}),e.jsx(r.IconArrow,{imageSrc:n.iconSrc,alt:n.iconAlt})]})}};var d,m,u;p.parameters={...p.parameters,docs:{...(d=p.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariants.Zps,
    children: <>
        <Hero.Image imageSrc={Image.src} imageAlt={Image.alt} />
        <Hero.Body>
          <Hero.Header>{Headline}</Hero.Header>
          <Hero.Button buttonPrimary={buttonPrimary} buttonSecondary={buttonSecondary}></Hero.Button>
          <Hero.IconArrow imageSrc={Image.iconSrc} alt={Image.iconAlt}></Hero.IconArrow>
        </Hero.Body>
      </>
  }
}`,...(u=(m=p.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var x,z,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariants.Zps,
    children: <>
        <Hero.Body>
          <Hero.Header>{Headline}</Hero.Header>
          <Hero.Button buttonPrimary={buttonPrimary} buttonSecondary={buttonSecondary}></Hero.Button>
        </Hero.Body>
        <Hero.IconArrow imageSrc={Image.iconSrc} alt={Image.iconAlt}></Hero.IconArrow>
      </>
  }
}`,...(g=(z=i.parameters)==null?void 0:z.docs)==null?void 0:g.source}}};const X=["Default","HeroSimple"];export{p as Default,i as HeroSimple,X as __namedExportsOrder,O as default};
//# sourceMappingURL=Hero.stories-62ef5aa0.js.map
