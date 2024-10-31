import{j as e,c as n}from"./clsx-490306ad.js";import{f as L}from"./index.es24-e7069ead.js";import{c as M}from"./index-b85febcc.js";import{r as j}from"./index-8b3efc3f.js";import{B as x,Z as z}from"./ZpsButton-5c43bf9f.js";import{t as b}from"./tw-merge-1166cefb.js";import"./index.es29-7715336a.js";import"./_commonjsHelpers-de833af9.js";import"./index.es13-bd73f74d.js";var s=(a=>(a.Zps="ZPS",a.Cat="CAT",a))(s||{});const q=j.createContext({imageAlignment:"left",variant:s.Zps,headline:"",tagline:"",description:""}),p=()=>j.useContext(q),t=({imageAlignment:a="left",children:i,variant:r=s.Zps,headline:l="",tagline:m="",description:o=""})=>e.jsx(q.Provider,{value:{imageAlignment:a,variant:r,headline:l,tagline:m,description:o},children:e.jsx("div",{className:"zep-grid-items zep-items-center zep-justify-center zep-min-screen",children:e.jsx("div",{className:n("zep-container","zep-mx-auto","zep-relative","zep-grid","zep-grid-cols-1","md:zep-gap-1.5","lg:zep-gap-2","md:zep-grid-cols-16"),"data-testid":"zep-mediaText-simple",children:i})})}),B=({src:a,alt:i,aspectRatio:r="4:3"})=>{const{imageAlignment:l}=p(),m=r==="4:3"?"zep-pb-[calc(3_*_100%_/_4)]":"zep-pb-[calc(4_*_100%_/_3)]",o=l==="left"?"md:zep-order-1":"",g=l==="left"?"md:zep-col-start-2 md:zep-col-end-9 xl:zep-col-start-3 xl:zep-col-end-10":"md:zep-col-start-9 md:zep-col-end-16 xl:zep-col-start-8 xl:zep-col-end-15";return e.jsx("div",{"data-testid":"zep-mediaText-image",className:n("zep-col-start-5","zep-col-end-13","zep-justify-center","zep-row-start-1","zep-row-end-1",o,g),children:e.jsx("div",{className:n("zep-relative",m),children:e.jsx("img",{alt:i,src:a,className:n("zep-w-full zep-h-full zep-object-cover md:zep-w-full md:zep-h-full md:zep-max-w-full")})})})},_=({children:a})=>{const{imageAlignment:i,variant:r}=p(),l=i==="left"?"":"md:zep-order-1",m=i==="left"?"zep-col-start-6 zep-col-end-12 md:zep-col-start-8 md:zep-col-end-16 xl:zep-col-start-9 xl:zep-col-end-15":"zep-col-start-5 zep-col-end-13  md:zep-col-start-2 md:zep-col-end-10 xl:zep-col-start-3 xl:zep-col-end-9",o={[s.Zps]:["zep-bg-gradient-to-r zep-from-[rgb(32,27,52)] zep-to-[rgb(32,23,94)]"],[s.Cat]:["zep-bg-neutral-dark-default"]},g=M([` 
        zep-mt-[63%]
        md:zep-w-auto
        zep-mx-auto
        md:zep-mt-[60px]
        xl:zep-mt-[120px]
        zep-h-[max-content]
        zep-row-start-1
        zep-row-end-1
        zep-z-10
        zep-p-1
        sm:zep-p-2
        md:zep-p-2
        lg:zep-p-5
        xl:zep-p-5
        zep-max-w-fit
        md:zep-max-w-[499px]
        lg:zep-max-w-[700px]
        ${l},
        ${m}`],{variants:{variant:o},defaultVariants:{variant:s.Zps}});return e.jsx("div",{className:b(g({variant:r})),"data-testid":"zep-mediaText-body",children:e.jsx("div",{children:a})})},I=()=>{const{tagline:a,variant:i}=p(),r={[s.Zps]:["zep-text-typography-brand-steel"],[s.Cat]:["zep-text-typography-light-70 zep-opacity-70"]},l=M([`zep-typography-taglineMD
      zep-mb-0.5
      `],{variants:{variant:r},defaultVariants:{variant:s.Zps}});return e.jsx("p",{"data-testid":"zep-MediaText-tagline",className:b(l({variant:i}),"zep-break-words"),children:a})},C=()=>{const{headline:a}=p();return e.jsx("h4",{"data-testid":"zep-MediaText-headline",className:n("zep-text-typography-light-100","zep-typography-headlineMD-fluid-cqi","after:zep-text-[0.23em]","zep-mb-1.5","xl:zep-mb-2","zep-text-left","zep-break-words"),children:a})},N=()=>{const{description:a}=p();return e.jsx("p",{"data-testid":"zep-MediaText-description",className:"zep-text-typography-light-100 zep-typography-bodyText zep-mb-1.5 xl:zep-mb-2 zep-break-words",children:a})},w=({labelPrimary:a,labelSecondary:i,onClickPrimary:r,onClickSecondary:l})=>e.jsx("div",{className:"zep-block","data-testid":"zep-mediatext-buttons",children:e.jsxs(L,{gap:"1.5",className:n("max-md:zep-flex","md:zep-flex-row zep-gap-1.5 md:zep-gap-2 lg:zep-gap-1.5"),direction:"column",children:[e.jsx(x,{onClick:r,label:a,variant:z.Primary}),e.jsx(x,{label:i,onClick:l,variant:z.Secondary})]})});t.Image=B;t.Body=_;t.Tagline=I;t.Headline=C;t.Description=N;t.Button=w;try{t.displayName="MediaText",t.__docgenInfo={description:"",displayName:"MediaText",props:{headline:{defaultValue:{value:""},description:"",name:"headline",required:!1,type:{name:"string"}},tagline:{defaultValue:{value:""},description:"",name:"tagline",required:!1,type:{name:"string"}},description:{defaultValue:{value:""},description:"",name:"description",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"MediaTextVariant.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},imageAlignment:{defaultValue:{value:"left"},description:"",name:"imageAlignment",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}const R={title:"Components/MediaText",component:t,tags:["autodocs"],argTypes:{variant:{control:{type:"radio",options:Object.keys(s)}}}},u={src:"./assets/image-4_3.png",alt:"Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis."},d={args:{imageAlignment:"left",variant:s.Zps,headline:"Headline",tagline:"TAGLINE",description:"Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque. Sed amet feugiat egestas elementum convallis pretium pellentesque. sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.",children:e.jsxs(e.Fragment,{children:[e.jsx(t.Image,{src:u.src,alt:u.alt}),e.jsxs(t.Body,{children:[e.jsx(t.Tagline,{}),e.jsx(t.Headline,{}),e.jsx(t.Description,{}),e.jsx(t.Button,{labelPrimary:"Primary",labelSecondary:"Secondary"})]})]})}},c={args:{imageAlignment:"right",variant:s.Zps,headline:"Headline",tagline:"TAGLINE",description:"Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque. Sed amet feugiat egestas elementum convallis pretium pellentesque. sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.",children:e.jsxs(e.Fragment,{children:[e.jsx(t.Image,{src:u.src,alt:u.alt}),e.jsxs(t.Body,{children:[e.jsx(t.Tagline,{}),e.jsx(t.Headline,{}),e.jsx(t.Description,{}),e.jsx(t.Button,{labelPrimary:"Primary",labelSecondary:"Secondary"})]})]})}};var f,v,y;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    imageAlignment: 'left',
    variant: MediaTextVariant.Zps,
    headline: 'Headline',
    tagline: 'TAGLINE',
    description: 'Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque. Sed amet feugiat egestas elementum convallis pretium pellentesque. sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.',
    children: <>
        <MediaText.Image src={Image.src} alt={Image.alt} />
        <MediaText.Body>
          <MediaText.Tagline />
          <MediaText.Headline />
          <MediaText.Description />
          <MediaText.Button labelPrimary="Primary" labelSecondary="Secondary"></MediaText.Button>
        </MediaText.Body>
      </>
  }
}`,...(y=(v=d.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var T,h,S;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    imageAlignment: 'right',
    variant: MediaTextVariant.Zps,
    headline: 'Headline',
    tagline: 'TAGLINE',
    description: 'Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque. Sed amet feugiat egestas elementum convallis pretium pellentesque. sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.',
    children: <>
        <MediaText.Image src={Image.src} alt={Image.alt} />
        <MediaText.Body>
          <MediaText.Tagline />
          <MediaText.Headline />
          <MediaText.Description />
          <MediaText.Button labelPrimary="Primary" labelSecondary="Secondary"></MediaText.Button>
        </MediaText.Body>
      </>
  }
}`,...(S=(h=c.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const F=["Default","ImageRight"];export{d as Default,c as ImageRight,F as __namedExportsOrder,R as default};
//# sourceMappingURL=mediaText.stories-36e29e94.js.map
