import{j as r}from"./jsx-runtime-1a9d9a93.js";import{G as e}from"./global-variants-893e06e6.js";import{L as E}from"./Layout-fc6ef0e0.js";import{H}from"./HeaderLongComponent-5a16b784.js";import{S as O}from"./Scrollbar-bd0f93ab.js";import{A as D}from"./AnchorNavigationCard-e5c979c0.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-0839fdbe.js";import"./index.es16-1ce448e1.js";import"./index.es31-95f1013f.js";import"./index.es13-751bc762.js";import"./getUrlWithoutTrailingSlash-e7815512.js";import"./RichText-640f3398.js";import"./index.es18-4b39ea0e.js";import"./ZpsButton-317ff0a2.js";import"./index.es24-01fa0cce.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";const c=({navigationCards:a,variant:m=e.Zps,className:_="",headline:d,...j})=>r.jsxs(E,{className:"zep-flex zep-flex-col zep-gap-2.5 sm:zep-gap-3 md:zep-gap-4",children:[d&&r.jsx(H,{variant:m,headline:d,...j}),r.jsx(O,{scrollOrientation:"horizontal",dataTestId:"zep-anchor-navigation-list",controlId:"anchor-navigation-scrollbar",className:`zep-flex zep-gap-1 md:zep-gap-1.5 lg:zep-gap-2 zep-w-full ${_}`,children:a==null?void 0:a.map(p=>r.jsx(D,{...p,variant:m},p.headline))})]});try{c.displayName="AnchorNavigationList",c.__docgenInfo={description:"",displayName:"AnchorNavigationList",props:{navigationCards:{defaultValue:null,description:"",name:"navigationCards",required:!0,type:{name:'Omit<AnchorNavigationCardProps, "variant">[]'}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},headerButtonIcon:{defaultValue:null,description:"",name:"headerButtonIcon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"link"'},{value:'"list"'},{value:'"table"'},{value:'"email"'},{value:'"location"'},{value:'"time"'},{value:'"copy"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"delete-circle"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"marine-ship"'},{value:'"add-circle"'}]}},headerButtonIconPosition:{defaultValue:null,description:"",name:"headerButtonIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}const ce={title:"Patterns/AnchorNavigationList",component:c,tags:["autodocs"],argTypes:{navigationCards:{control:{type:"array"}}}},l={args:{navigationCards:[{headline:"Gasmotoren Baureihe CG132 B (400 - 1.000 kW)",scrollToIdLink:"test",linkLabel:"Mehr zum Gasmotor"}],variant:e.Zps}},n={args:{navigationCards:new Array(2).fill({headline:"Gasmotoren Baureihe CG132 B (400 - 1.000 kW)",scrollToIdLink:"test",linkLabel:"Mehr zum Gasmotor"}),variant:e.Zps}},o={args:{navigationCards:new Array(3).fill({headline:"Gasmotoren Baureihe CG132 B (400 - 1.000 kW)",scrollToIdLink:"test",linkLabel:"Mehr zum Gasmotor"}),variant:e.Zps}},i={args:{navigationCards:new Array(4).fill({headline:"Gasmotoren Baureihe CG132 B (400 - 1.000 kW)",scrollToIdLink:"test",linkLabel:"Mehr zum Gasmotor"}),variant:e.Zps}},t={args:{navigationCards:new Array(5).fill({headline:"Gasmotoren Baureihe CG132 B (400 - 1.000 kW)",scrollToIdLink:"test",linkLabel:"Mehr zum Gasmotor"}),variant:e.Zps}},s={args:{navigationCards:new Array(6).fill({headline:"Gasmotoren Baureihe CG132 B (400 - 1.000 kW)",scrollToIdLink:"test",linkLabel:"Mehr zum Gasmotor"}),variant:e.Zps}},u={args:{navigationCards:new Array(7).fill({headline:"Gasmotoren Baureihe CG132 B (400 - 1.000 kW)",scrollToIdLink:"test",linkLabel:"Mehr zum Gasmotor"}),variant:e.Zps}},v={args:{navigationCards:new Array(8).fill({headline:"Gasmotoren Baureihe CG132 B (400 - 1.000 kW)",scrollToIdLink:"test",linkLabel:"Mehr zum Gasmotor"}),variant:e.Zps}};var h,g,f;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    navigationCards: [{
      headline: 'Gasmotoren Baureihe CG132 B (400 - 1.000 kW)',
      scrollToIdLink: 'test',
      linkLabel: 'Mehr zum Gasmotor'
    }],
    variant: GlobalVariants.Zps
  } as AnchorNavigationListProps
}`,...(f=(g=l.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var k,G,L;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    navigationCards: new Array(2).fill({
      headline: 'Gasmotoren Baureihe CG132 B (400 - 1.000 kW)',
      scrollToIdLink: 'test',
      linkLabel: 'Mehr zum Gasmotor'
    }),
    variant: GlobalVariants.Zps
  } as AnchorNavigationListProps
}`,...(L=(G=n.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};var w,y,b;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    navigationCards: new Array(3).fill({
      headline: 'Gasmotoren Baureihe CG132 B (400 - 1.000 kW)',
      scrollToIdLink: 'test',
      linkLabel: 'Mehr zum Gasmotor'
    }),
    variant: GlobalVariants.Zps
  } as AnchorNavigationListProps
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var C,B,I;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    navigationCards: new Array(4).fill({
      headline: 'Gasmotoren Baureihe CG132 B (400 - 1.000 kW)',
      scrollToIdLink: 'test',
      linkLabel: 'Mehr zum Gasmotor'
    }),
    variant: GlobalVariants.Zps
  } as AnchorNavigationListProps
}`,...(I=(B=i.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var z,A,W;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    navigationCards: new Array(5).fill({
      headline: 'Gasmotoren Baureihe CG132 B (400 - 1.000 kW)',
      scrollToIdLink: 'test',
      linkLabel: 'Mehr zum Gasmotor'
    }),
    variant: GlobalVariants.Zps
  } as AnchorNavigationListProps
}`,...(W=(A=t.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var T,V,N;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    navigationCards: new Array(6).fill({
      headline: 'Gasmotoren Baureihe CG132 B (400 - 1.000 kW)',
      scrollToIdLink: 'test',
      linkLabel: 'Mehr zum Gasmotor'
    }),
    variant: GlobalVariants.Zps
  } as AnchorNavigationListProps
}`,...(N=(V=s.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var M,Z,x;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    navigationCards: new Array(7).fill({
      headline: 'Gasmotoren Baureihe CG132 B (400 - 1.000 kW)',
      scrollToIdLink: 'test',
      linkLabel: 'Mehr zum Gasmotor'
    }),
    variant: GlobalVariants.Zps
  } as AnchorNavigationListProps
}`,...(x=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:x.source}}};var P,q,S;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    navigationCards: new Array(8).fill({
      headline: 'Gasmotoren Baureihe CG132 B (400 - 1.000 kW)',
      scrollToIdLink: 'test',
      linkLabel: 'Mehr zum Gasmotor'
    }),
    variant: GlobalVariants.Zps
  } as AnchorNavigationListProps
}`,...(S=(q=v.parameters)==null?void 0:q.docs)==null?void 0:S.source}}};const me=["Default","With2Items","With3Items","With4Items","With5Items","With6Items","With7Items","With8Items"];export{l as Default,n as With2Items,o as With3Items,i as With4Items,t as With5Items,s as With6Items,u as With7Items,v as With8Items,me as __namedExportsOrder,ce as default};
