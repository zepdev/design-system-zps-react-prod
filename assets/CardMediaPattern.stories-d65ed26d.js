import{j as e}from"./jsx-runtime-1a9d9a93.js";import{c as r}from"./clsx-0839fdbe.js";import{G as V}from"./global-variants-893e06e6.js";import{H as P}from"./HeaderLongComponent-3ce4f5e0.js";import{C as j}from"./CardMedia-0b12117d.js";import{L as q}from"./Layout-af7d9451.js";import{S as N}from"./Scrollbar-5716fe46.js";import{f as u}from"./focus-d7245c50.js";import{m as s}from"./mocks-dd8b5ca4.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index.es16-cd98ac1d.js";import"./index.es32-95f1013f.js";import"./index.es13-903b34be.js";import"./index.es17-40e95622.js";import"./getUrlWithTrailingSlash-c6e10e92.js";import"./RichText-8618d631.js";import"./index.es18-00f044f5.js";import"./ZpsButton-77bf3a91.js";import"./index.es25-aed8b204.js";import"./index.es36-796b080a.js";import"./index-ff2c9236.js";import"./getDataLayer-2559cd39.js";import"./tw-merge-1166cefb.js";import"./commonCSS-cc68a568.js";const d=({cards:l,variant:c=V.Zps,imageOrientation:_="horizontal",id:M,...T})=>e.jsxs(q,{id:M,wrapperClassname:"zep-bg-background-medium",className:r("zep-flex","zep-flex-col","zep-justify-start","lg:zep-gap-4","sm:zep-gap-3","zep-gap-2","zep-py-3","sm:zep-py-4","md:zep-py-5","zep-items-start"),children:[e.jsx(P,{...T,variant:c}),e.jsx(N,{scrollOrientation:"horizontal",dataTestId:"cards-container",controlId:"card-media-scrollbar",className:r("zep-flex","zep-gap-1","lg:zep-gap-2"),children:l.map(p=>e.jsx(j,{...p,variant:c,imageOrientation:_},p.headline))})]});try{d.displayName="CardMediaPattern",d.__docgenInfo={description:"",displayName:"CardMediaPattern",props:{cards:{defaultValue:null,description:"",name:"cards",required:!0,type:{name:"CardMediaProps[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},imageOrientation:{defaultValue:{value:"horizontal"},description:"",name:"imageOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},headerButtonIcon:{defaultValue:null,description:"",name:"headerButtonIcon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"link"'},{value:'"list"'},{value:'"table"'},{value:'"email"'},{value:'"location"'},{value:'"time"'},{value:'"copy"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"delete-circle"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"marine-ship"'},{value:'"add-circle"'}]}},headerButtonIconPosition:{defaultValue:null,description:"",name:"headerButtonIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"enum",value:[{value:'"_self"'},{value:'"_blank"'}]}}}}}catch{}const a={imageSrc:"https://www.khplant.co.za/wp-content/uploads/2015/08/cat-logo.jpg",imageAlt:"construction site",headline:"Testing",description:"Testing",linkSrc:"https://www.zeppelin.com",linkText:"Click me"},m={...a,imageSrc:"https://zps-cdn.prod.dx.zndbx.cloud/Deckblatt_MA_Kompetenzbroschuere_ENG_Rev_Einzelseiten_Gmb_H_e93f805a3e.jpg"},te={title:"Patterns/CardMediaPattern",component:d,tags:["autodocs"],argTypes:{}},n={decorators:[l=>e.jsx("button",{className:r(u,"zep-focus-visible:zep-outline-none","zep-rounded-8","zep-w-full"),children:e.jsx(l,{})})],args:{cards:[a,a],headline:"Card Media with 2 cards",tagline:"Tagline",linkSrc:"https://www.zeppelin.com",linkText:"Standalone link",theme:"power-systems",description:s}},t={decorators:[l=>e.jsx("button",{className:r(u,"zep-focus-visible:zep-outline-none","zep-rounded-8","zep-w-full"),children:e.jsx(l,{})})],args:{cards:[m,{...m,imageSrc:"https://zps-cdn.prod.dx.zndbx.cloud/Deckblatt_Marine_Power_Solutions_Guide_2024_a2843d9c3b.jpg"}],headline:"Card Media with 2 cards with vertical images",tagline:"Tagline",linkSrc:"https://www.zeppelin.com",linkText:"Standalone link",theme:"power-systems",imageOrientation:"vertical",description:s}},o={decorators:[l=>e.jsx("button",{className:r(u,"zep-focus-visible:zep-outline-none","zep-rounded-8","zep-w-full"),children:e.jsx(l,{})})],args:{cards:[a,a,a],headline:"Card Media with 3 cards",tagline:"Tagline",linkSrc:"https://www.zeppelin.com",linkText:"Standalone link",theme:"power-systems",description:s}},i={decorators:[l=>e.jsx("button",{className:r(u,"zep-focus-visible:zep-outline-none","zep-rounded-8","zep-w-full"),children:e.jsx(l,{})})],args:{cards:[a,a,a,a,a],headline:"Card Media with 3+ cards",tagline:"Tagline",linkSrc:"https://www.zeppelin.com",linkText:"Standalone link",theme:"power-systems",description:s}};var v,h,f;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var g,w,k;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  decorators: [Story => <button className={clsx(focusRing, 'zep-focus-visible:zep-outline-none', 'zep-rounded-8', 'zep-w-full')}>
        <Story />
      </button>],
  args: {
    cards: [mockCardVertical, {
      ...mockCardVertical,
      imageSrc: 'https://zps-cdn.prod.dx.zndbx.cloud/Deckblatt_Marine_Power_Solutions_Guide_2024_a2843d9c3b.jpg'
    }],
    headline: 'Card Media with 2 cards with vertical images',
    tagline: 'Tagline',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    theme: 'power-systems',
    imageOrientation: 'vertical',
    description: mockRichTextShort
  } as CardMediaPatternProps
}`,...(k=(w=t.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var z,C,x;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(x=(C=o.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var y,b,S;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(S=(b=i.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};const oe=["Default","CardMediaVertical","CardMedia3Cards","CardMedia3PlusCards"];export{o as CardMedia3Cards,i as CardMedia3PlusCards,t as CardMediaVertical,n as Default,oe as __namedExportsOrder,te as default};
