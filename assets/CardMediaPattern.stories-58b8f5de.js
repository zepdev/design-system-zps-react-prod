import{j as e}from"./jsx-runtime-1a9d9a93.js";import{c as n}from"./clsx-0839fdbe.js";import{G as P}from"./global-variants-71b69725.js";import{H as V}from"./HeaderLongComponent-c66a821b.js";import{C as j}from"./CardMedia-a2d460a2.js";import{L as N}from"./Layout-8fb0eebb.js";import{S as R}from"./Scrollbar-9e18271f.js";import{f as l}from"./focus-d7245c50.js";import{m as d}from"./mocks-dd8b5ca4.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index.es16-298408db.js";import"./index.es31-95f1013f.js";import"./index.es13-3580608c.js";import"./RichText-7e253872.js";import"./index.es18-4b39ea0e.js";import"./ZpsButton-2405933d.js";import"./index.es24-01fa0cce.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";import"./commonCSS-0b9dd3ad.js";const c=({cards:r,variant:p=P.Zps,imageOrientation:M="horizontal",...v})=>e.jsxs(N,{wrapperClassname:"zep-bg-background-medium",className:n("zep-flex","zep-flex-col","xl:zep-gap-4","sm:zep-gap-3","zep-gap-2","zep-py-3","sm:zep-py-4","md:zep-py-5","zep-items-start"),children:[e.jsx(V,{type:"link",...v,variant:p}),e.jsx(R,{scrollOrientation:"horizontal",dataTestId:"cards-container",controlId:"card-media-scrollbar",className:n("zep-flex","zep-gap-1","sm:zep-gap-1.5","xl:zep-gap-2"),children:r.map(m=>e.jsx(j,{...m,variant:p,imageOrientation:M},m.headline))})]});try{c.displayName="CardMediaPattern",c.__docgenInfo={description:"",displayName:"CardMediaPattern",props:{cards:{defaultValue:null,description:"",name:"cards",required:!0,type:{name:"CardMediaProps[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},imageOrientation:{defaultValue:{value:"horizontal"},description:"",name:"imageOrientation",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}}}}}catch{}const a={imageSrc:"https://www.khplant.co.za/wp-content/uploads/2015/08/cat-logo.jpg",imageAlt:"construction site",headline:"Testing",description:"Testing",linkSrc:"https://www.zeppelin.com",linkText:"Click me"},u={...a,imageSrc:"https://www.zeppelin-cat.at/content/dam/zeppelin/baumaschinen/at/sonderangebote/Brosch%C3%BCre.JPG.imagethumb.original.jpg"},ae={title:"Patterns/CardMediaPattern",component:c,tags:["autodocs"],argTypes:{}},t={decorators:[r=>e.jsx("button",{className:n(l,"zep-focus-visible:zep-outline-none","zep-rounded-8","zep-w-full"),children:e.jsx(r,{})})],args:{cards:[a,a],headline:"Card Media with 2 cards",tagline:"Tagline",linkSrc:"https://www.zeppelin.com",linkText:"Standalone link",theme:"power-systems",description:d}},i={decorators:[r=>e.jsx("button",{className:n(l,"zep-focus-visible:zep-outline-none","zep-rounded-8","zep-w-full"),children:e.jsx(r,{})})],args:{cards:[u,u],headline:"Card Media with 2 cards with vertical images",tagline:"Tagline",linkSrc:"https://www.zeppelin.com",linkText:"Standalone link",theme:"power-systems",imageOrientation:"vertical",description:d}},o={decorators:[r=>e.jsx("button",{className:n(l,"zep-focus-visible:zep-outline-none","zep-rounded-8","zep-w-full"),children:e.jsx(r,{})})],args:{cards:[a,a,a],headline:"Card Media with 3 cards",tagline:"Tagline",linkSrc:"https://www.zeppelin.com",linkText:"Standalone link",theme:"power-systems",description:d}},s={decorators:[r=>e.jsx("button",{className:n(l,"zep-focus-visible:zep-outline-none","zep-rounded-8","zep-w-full"),children:e.jsx(r,{})})],args:{cards:[a,a,a,a,a],headline:"Card Media with 3+ cards",tagline:"Tagline",linkSrc:"https://www.zeppelin.com",linkText:"Standalone link",theme:"power-systems",description:d}};var g,h,z;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  decorators: [Story => <button className={clsx(focusRing, 'zep-focus-visible:zep-outline-none', 'zep-rounded-8', 'zep-w-full')}>
        <Story />
      </button>],
  args: {
    cards: [mockCard, mockCard],
    headline: 'Card Media with 2 cards',
    tagline: 'Tagline',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    theme: 'power-systems',
    description: mockRichTextShort
  } as CardMediaPatternProps
}`,...(z=(h=t.parameters)==null?void 0:h.docs)==null?void 0:z.source}}};var w,f,k;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  decorators: [Story => <button className={clsx(focusRing, 'zep-focus-visible:zep-outline-none', 'zep-rounded-8', 'zep-w-full')}>
        <Story />
      </button>],
  args: {
    cards: [mockCardVertical, mockCardVertical],
    headline: 'Card Media with 2 cards with vertical images',
    tagline: 'Tagline',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    theme: 'power-systems',
    imageOrientation: 'vertical',
    description: mockRichTextShort
  } as CardMediaPatternProps
}`,...(k=(f=i.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var C,x,S;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  decorators: [Story => <button className={clsx(focusRing, 'zep-focus-visible:zep-outline-none', 'zep-rounded-8', 'zep-w-full')}>
        <Story />
      </button>],
  args: {
    cards: [mockCard, mockCard, mockCard],
    headline: 'Card Media with 3 cards',
    tagline: 'Tagline',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    theme: 'power-systems',
    description: mockRichTextShort
  } as CardMediaPatternProps
}`,...(S=(x=o.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var y,T,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  decorators: [Story => <button className={clsx(focusRing, 'zep-focus-visible:zep-outline-none', 'zep-rounded-8', 'zep-w-full')}>
        <Story />
      </button>],
  args: {
    cards: [mockCard, mockCard, mockCard, mockCard, mockCard],
    headline: 'Card Media with 3+ cards',
    tagline: 'Tagline',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    theme: 'power-systems',
    description: mockRichTextShort
  } as CardMediaPatternProps
}`,...(b=(T=s.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};const re=["Default","CardMediaVertical","CardMedia3Cards","CardMedia3PlusCards"];export{o as CardMedia3Cards,s as CardMedia3PlusCards,i as CardMediaVertical,t as Default,re as __namedExportsOrder,ae as default};
