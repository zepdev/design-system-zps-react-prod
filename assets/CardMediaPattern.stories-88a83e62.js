import{j as e}from"./jsx-runtime-1a9d9a93.js";import{c as r}from"./clsx-0839fdbe.js";import{G as P}from"./global-variants-893e06e6.js";import{L as j}from"./Layout-7f280280.js";import{H as q}from"./HeaderLongComponent-647d98ef.js";import{C as N}from"./CardMedia-e3c4220d.js";import{S as R}from"./Scrollbar-bd0f93ab.js";import{f as s}from"./focus-d7245c50.js";import{m as u}from"./mocks-dd8b5ca4.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index.es16-b727257a.js";import"./index.es31-95f1013f.js";import"./index.es13-9623ab51.js";import"./getUrlWithoutTrailingSlash-e7815512.js";import"./RichText-765faa54.js";import"./index.es18-4b39ea0e.js";import"./ZpsButton-657805eb.js";import"./index.es24-01fa0cce.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";import"./commonCSS-cc68a568.js";const d=({cards:l,variant:c=P.Zps,imageOrientation:T="horizontal",id:M,...V})=>e.jsxs(j,{id:M,wrapperClassname:"zep-bg-background-medium",className:r("zep-flex","zep-flex-col","zep-justify-start","lg:zep-gap-4","sm:zep-gap-3","zep-gap-2","zep-py-3","sm:zep-py-4","md:zep-py-5","zep-items-start"),children:[e.jsx(q,{...V,variant:c}),e.jsx(R,{scrollOrientation:"horizontal",dataTestId:"cards-container",controlId:"card-media-scrollbar",className:r("zep-flex","zep-gap-1","sm:zep-gap-1.5","lg:zep-gap-2"),children:l.map(p=>e.jsx(N,{...p,variant:c,imageOrientation:T},p.headline))})]});try{d.displayName="CardMediaPattern",d.__docgenInfo={description:"",displayName:"CardMediaPattern",props:{cards:{defaultValue:null,description:"",name:"cards",required:!0,type:{name:"CardMediaProps[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},imageOrientation:{defaultValue:{value:"horizontal"},description:"",name:"imageOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},headerButtonIcon:{defaultValue:null,description:"",name:"headerButtonIcon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"link"'},{value:'"list"'},{value:'"table"'},{value:'"email"'},{value:'"location"'},{value:'"time"'},{value:'"copy"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"delete-circle"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"add-circle"'},{value:'"marine-ship"'}]}},headerButtonIconPosition:{defaultValue:null,description:"",name:"headerButtonIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}const a={imageSrc:"https://www.khplant.co.za/wp-content/uploads/2015/08/cat-logo.jpg",imageAlt:"construction site",headline:"Testing",description:"Testing",linkSrc:"https://www.zeppelin.com",linkText:"Click me"},m={...a,imageSrc:"https://www.zeppelin-cat.at/content/dam/zeppelin/baumaschinen/at/sonderangebote/Brosch%C3%BCre.JPG.imagethumb.original.jpg"},re={title:"Patterns/CardMediaPattern",component:d,tags:["autodocs"],argTypes:{}},n={decorators:[l=>e.jsx("button",{className:r(s,"zep-focus-visible:zep-outline-none","zep-rounded-8","zep-w-full"),children:e.jsx(l,{})})],args:{cards:[a,a],headline:"Card Media with 2 cards",tagline:"Tagline",linkSrc:"https://www.zeppelin.com",linkText:"Standalone link",theme:"power-systems",description:u}},t={decorators:[l=>e.jsx("button",{className:r(s,"zep-focus-visible:zep-outline-none","zep-rounded-8","zep-w-full"),children:e.jsx(l,{})})],args:{cards:[m,m],headline:"Card Media with 2 cards with vertical images",tagline:"Tagline",linkSrc:"https://www.zeppelin.com",linkText:"Standalone link",theme:"power-systems",imageOrientation:"vertical",description:u}},i={decorators:[l=>e.jsx("button",{className:r(s,"zep-focus-visible:zep-outline-none","zep-rounded-8","zep-w-full"),children:e.jsx(l,{})})],args:{cards:[a,a,a],headline:"Card Media with 3 cards",tagline:"Tagline",linkSrc:"https://www.zeppelin.com",linkText:"Standalone link",theme:"power-systems",description:u}},o={decorators:[l=>e.jsx("button",{className:r(s,"zep-focus-visible:zep-outline-none","zep-rounded-8","zep-w-full"),children:e.jsx(l,{})})],args:{cards:[a,a,a,a,a],headline:"Card Media with 3+ cards",tagline:"Tagline",linkSrc:"https://www.zeppelin.com",linkText:"Standalone link",theme:"power-systems",description:u}};var v,h,f;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
    cards: [mockCardVertical, mockCardVertical],
    headline: 'Card Media with 2 cards with vertical images',
    tagline: 'Tagline',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    theme: 'power-systems',
    imageOrientation: 'vertical',
    description: mockRichTextShort
  } as CardMediaPatternProps
}`,...(k=(w=t.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var z,C,y;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(y=(C=i.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var x,b,S;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(S=(b=o.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};const ne=["Default","CardMediaVertical","CardMedia3Cards","CardMedia3PlusCards"];export{i as CardMedia3Cards,o as CardMedia3PlusCards,t as CardMediaVertical,n as Default,ne as __namedExportsOrder,re as default};
