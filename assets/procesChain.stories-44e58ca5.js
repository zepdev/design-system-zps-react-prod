import{j as e,c as r}from"./clsx-36b9529f.js";import{G as z}from"./global-variants-893e06e6.js";import{L as w}from"./Layout-639d4783.js";import{i as u}from"./index.es18-bf2a862c.js";import{H as y}from"./HeaderLongComponent-88c52744.js";import{S as x}from"./Scrollbar-ad09c4de.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index.es31-95f1013f.js";import"./index.es16-ca92ca27.js";import"./index.es13-b5ad88d4.js";import"./index.es17-40e95622.js";import"./getUrlWithTrailingSlash-1f1feb13.js";import"./RichText-0fb27911.js";import"./ZpsButton-f3be46e6.js";import"./index.es24-d6e4db88.js";import"./index.es35-79e31a69.js";import"./index-9eff14f9.js";import"./tw-merge-1166cefb.js";const a=({contentItems:i,headline:t,variant:m=z.Zps,id:p,...c})=>e.jsxs(w,{id:p,className:"zep-flex zep-flex-col md:zep-gap-4 sm:zep-gap-3 zep-gap-2.5 zep-w-full",children:[t&&e.jsx(y,{headline:t,...c,variant:m}),e.jsx(x,{scrollOrientation:"horizontal",controlId:"process-chain-scrollbar",className:"zep-w-full",children:e.jsx("div",{className:"zep-w-fit lg:zep-w-full zep-flex zep-items-stretch zep-gap-2 lg:zep-gap-1.5",children:i.map(({headline:d,listItems:h},f)=>e.jsx("div",{className:"zep-w-[300px] lg:zep-w-auto lg:zep-basis-1/5 lg:zep-flex-shrink lg:zep-flex-grow",children:e.jsx("div",{className:r("zep-relative zep-bg-indigo-500 zep-text-greyscale-0 zep-w-full zep-p-1.5 zep-h-full"),children:e.jsxs("div",{className:r("zep-flex","zep-flex-col","zep-items-start","zep-gap-1"),children:[e.jsx("h4",{"data-testid":"process-chain-headline",className:"zep-typography-headlineSM-fluid-cqi zep-hyphens-auto zep-break-normal",children:d}),e.jsx(u,{className:"zep-flex-col zep-flex zep-gap-0.5",type:"bullet",children:h.map((n,g)=>e.jsx(u.Item,{className:"zep-py-[0] zep-h-auto",children:n},`${n}-${g}`))})]})})},f))})})]});try{a.displayName="ProcessChain",a.__docgenInfo={description:"",displayName:"ProcessChain",props:{contentItems:{defaultValue:null,description:"",name:"contentItems",required:!0,type:{name:"ProcessChainItem[]"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},headerButtonIcon:{defaultValue:null,description:"",name:"headerButtonIcon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"link"'},{value:'"list"'},{value:'"table"'},{value:'"email"'},{value:'"location"'},{value:'"time"'},{value:'"copy"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"delete-circle"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"marine-ship"'},{value:'"add-circle"'}]}},headerButtonIconPosition:{defaultValue:null,description:"",name:"headerButtonIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}const D={title:"Components/ProcessChain",component:a,tags:["autodocs"],argTypes:{}},l={args:{contentItems:[{headline:"List Chain 1",listItems:["list item","list item","list item"]},{headline:"List Chain 2",listItems:["list item","list item","list item"]},{headline:"List Chain 3",listItems:["list item","list item","list item","list item"]},{headline:"List Chain 4",listItems:["list item","list item","list item"]}]}};var s,o,v;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    contentItems: [{
      headline: 'List Chain 1',
      listItems: ['list item', 'list item', 'list item']
    }, {
      headline: 'List Chain 2',
      listItems: ['list item', 'list item', 'list item']
    }, {
      headline: 'List Chain 3',
      listItems: ['list item', 'list item', 'list item', 'list item']
    }, {
      headline: 'List Chain 4',
      listItems: ['list item', 'list item', 'list item']
    }
    // {
    //   headline: 'List Chain 5',
    //   listItems: ['list item', 'list item', 'list item'],
    // },
    ]
  }
}`,...(v=(o=l.parameters)==null?void 0:o.docs)==null?void 0:v.source}}};const O=["Default"];export{l as Default,O as __namedExportsOrder,D as default};
