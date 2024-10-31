import{j as e,c as t}from"./clsx-490306ad.js";import{f as H}from"./index.es24-e7069ead.js";import{B as c,Z as i}from"./ZpsButton-5c43bf9f.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index.es29-7715336a.js";import"./index.es13-bd73f74d.js";import"./index-b85febcc.js";import"./tw-merge-1166cefb.js";const r=({children:o})=>e.jsx("div",{className:"zep-bg-gradient-to-r zep-from-[rgb(32,27,52)] zep-to-[rgb(32,23,94)]",children:e.jsx("div",{className:t("zep-flex-col","zep-rounded-lg","zep-shadow-lg","md:zep-flex","zep-relative","zep-max-w-[1920px]","zep-mx-auto"),"data-testid":"zep-newhero",children:o})}),b=({imageSrc:o,imageAlt:n})=>e.jsx("div",{"data-testid":"",className:t("sm:zep-h-auto","md:zep-h-[380px]","lg:zep-h-[540px]","zep-flex"),children:e.jsx("img",{alt:n,src:o,"data-testid":"zep-newhero-image",className:t("zep-w-full","zep-object-cover","zep-h-[202px]","sm:zep-h-[380px]","md:zep-h-[380px]","lg:zep-h-[540px]","md:zep-max-w-full")})}),j=({children:o})=>e.jsx("div",{"data-testid":"zep-newhero-body",className:t("zep-bg-gradient-to-r zep-from-[rgb(32,27,52)] zep-to-[rgb(32,23,94)]","zep-px-[24px]","zep-py-[32px]","sm:zep-px-[40px]","sm:zep-py-[48px]","md:zep-px-[65px]","md:zep-py-[64px]","lg:zep-py-[80px]","lg:zep-px-[122px]","zep-items-center","zep-w-full","zep-relative"),children:e.jsx("div",{className:"sm:zep-w-9/12",children:o})}),w=({children:o})=>e.jsx("h4",{"data-testid":"new-hero-headline",className:t("zep-typography-headlineLG","zep-typography-headline2XL-fluid-cqi","supports-cqi:zep-typography-headline2XL-fluid-cqi","zep-text-typography-light-100","supports-cqi:after:zep-text-[0.23em]","zep-mb-2","zep-col-span-1"),children:o}),f=({buttonPrimary:o,buttonSecondary:n})=>e.jsx("div",{className:"zep-block","data-testid":"zep-new-herobutton",children:e.jsxs(H,{className:t("max-md:zep-flex","sm:zep-flex-row","zep-gap-1"),direction:"column",children:[e.jsx(c,{label:o,variant:i.Primary}),e.jsx(c,{label:n,variant:i.Secondary})]})}),S=({imageSrc:o,alt:n})=>e.jsx("div",{className:"zep-w-full zep-absolute zep-left-[0px] zep-bottom-[0px]",children:e.jsx("img",{src:o,alt:n,width:"18.75%","data-testid":"zep-her-arrowIcon",className:t("zep-absolute","zep-hidden","zep-right-1","md:zep-block","md:zep-mr-[3%]","md:zep-top-[50%]","md:zep-translate-y-[-50%]")})});r.Image=b;r.Body=j;r.Header=w;r.Button=f;r.IconArrow=S;try{r.displayName="Hero",r.__docgenInfo={description:"",displayName:"Hero",props:{}}}catch{}const k={title:"Components/Hero",component:r,tags:["autodocs"],argTypes:{children:{control:{disable:!0}}}},a={src:"./assets/hero_image.png",alt:"Lorem ipsum dolor sit amet consectetur.",iconSrc:"./assets/moving-forward-arrow.svg",iconAlt:"Lorem ipsum dolor"},u="Headline",h="Primary",y="Secondary",s={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(r.Image,{imageSrc:a.src,imageAlt:a.alt}),e.jsxs(r.Body,{children:[e.jsx(r.Header,{children:u}),e.jsx(r.Button,{buttonPrimary:h,buttonSecondary:y}),e.jsx(r.IconArrow,{imageSrc:a.iconSrc,alt:a.iconAlt})]})]})}},p={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(r.Body,{children:[e.jsx(r.Header,{children:u}),e.jsx(r.Button,{buttonPrimary:h,buttonSecondary:y})]}),e.jsx(r.IconArrow,{imageSrc:a.iconSrc,alt:a.iconAlt})]})}};var d,m,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: <>
        <Hero.Image imageSrc={Image.src} imageAlt={Image.alt} />
        <Hero.Body>
          <Hero.Header>{Headline}</Hero.Header>
          <Hero.Button buttonPrimary={buttonPrimary} buttonSecondary={buttonSecondary}></Hero.Button>
          <Hero.IconArrow imageSrc={Image.iconSrc} alt={Image.iconAlt}></Hero.IconArrow>
        </Hero.Body>
      </>
  }
}`,...(l=(m=s.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var z,x,g;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: <>
        <Hero.Body>
          <Hero.Header>{Headline}</Hero.Header>
          <Hero.Button buttonPrimary={buttonPrimary} buttonSecondary={buttonSecondary}></Hero.Button>
        </Hero.Body>
        <Hero.IconArrow imageSrc={Image.iconSrc} alt={Image.iconAlt}></Hero.IconArrow>
      </>
  }
}`,...(g=(x=p.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const D=["Default","HeroSimple"];export{s as Default,p as HeroSimple,D as __namedExportsOrder,k as default};
//# sourceMappingURL=Hero.stories-6404a543.js.map
