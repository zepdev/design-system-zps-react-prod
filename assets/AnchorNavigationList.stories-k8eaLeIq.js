import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{G as e}from"./global-variants-BqXUcqLU.js";import{L as E}from"./Layout-Bk8SPBBl.js";import{H}from"./HeaderLongComponent-C5BqCGna.js";import{S as O}from"./Scrollbar-DBcj_ZQe.js";import{A as D}from"./AnchorNavigationCard-C9kkq8cm.js";import"./index-yBjzXJbu.js";import"./clsx-B-dksMZM.js";import"./RichText-VFupsKwD.js";import"./index-BOnQTV8N.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index.es16-CtGfWpDE.js";import"./index.es32-D9mbuw9C.js";import"./index.es13-DrwoFUlW.js";import"./index.es17-CiSAzvV-.js";import"./index.es18-CO8Mj8wJ.js";import"./getUrlWithTrailingSlash-D5oSkRKV.js";import"./linkSecurity-DjaWK124.js";import"./ZpsButton-DRb7V50D.js";import"./index.es25-Cd1K6ALS.js";import"./index.es36-BF3AzYXZ.js";import"./index-Dp3B9jqt.js";import"./getDataLayer-CP2Cgxnv.js";import"./tw-merge-Ds6tgvmq.js";const c=({navigationCards:a,variant:m=e.Zps,className:S="",headline:d,...j})=>r.jsxs(E,{className:"zep-flex zep-flex-col zep-gap-2.5 sm:zep-gap-3 md:zep-gap-4",children:[d&&r.jsx(H,{variant:m,headline:d,...j}),r.jsx(O,{scrollOrientation:"horizontal",dataTestId:"zep-anchor-navigation-list",controlId:"anchor-navigation-scrollbar",ariaLabel:"Anchor navigation",className:`zep-flex zep-gap-1 md:zep-gap-1.5 lg:zep-gap-2 zep-w-full ${S}`,children:a==null?void 0:a.map(p=>r.jsx(D,{...p,variant:m},p.headline))})]});try{c.displayName="AnchorNavigationList",c.__docgenInfo={description:"",displayName:"AnchorNavigationList",props:{navigationCards:{defaultValue:null,description:"",name:"navigationCards",required:!0,type:{name:'Omit<AnchorNavigationCardProps, "variant">[]'}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary-button"'},{value:'"secondary-button"'},{value:'"link"'},{value:'"none"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},headerButtonIcon:{defaultValue:null,description:"",name:"headerButtonIcon",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"email"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"location"'},{value:'"list"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"table"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"time"'},{value:'"copy"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"search"'},{value:'"delete-circle"'},{value:'"alert"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"marine-ship"'},{value:'"add-circle"'}]}},headerButtonIconPosition:{defaultValue:null,description:"",name:"headerButtonIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"enum",value:[{value:'"_self"'},{value:'"_blank"'}]}}}}}catch{}const he={title:"Patterns/AnchorNavigationList",component:c,tags:["autodocs"],argTypes:{navigationCards:{control:{type:"array"}}}},l={args:{navigationCards:[{headline:"Gasmotoren Baureihe CG132 B (400 - 1.000 kW)",scrollToIdLink:"test",linkLabel:"Mehr zum Gasmotor"}],variant:e.Zps}},n={args:{navigationCards:new Array(2).fill({headline:"Gasmotoren Baureihe CG132 B (400 - 1.000 kW)",scrollToIdLink:"test",linkLabel:"Mehr zum Gasmotor"}),variant:e.Zps}},o={args:{navigationCards:new Array(3).fill({headline:"Gasmotoren Baureihe CG132 B (400 - 1.000 kW)",scrollToIdLink:"test",linkLabel:"Mehr zum Gasmotor"}),variant:e.Zps}},i={args:{navigationCards:new Array(4).fill({headline:"Gasmotoren Baureihe CG132 B (400 - 1.000 kW)",scrollToIdLink:"test",linkLabel:"Mehr zum Gasmotor"}),variant:e.Zps}},t={args:{navigationCards:new Array(5).fill({headline:"Gasmotoren Baureihe CG132 B (400 - 1.000 kW)",scrollToIdLink:"test",linkLabel:"Mehr zum Gasmotor"}),variant:e.Zps}},s={args:{navigationCards:new Array(6).fill({headline:"Gasmotoren Baureihe CG132 B (400 - 1.000 kW)",scrollToIdLink:"test",linkLabel:"Mehr zum Gasmotor"}),variant:e.Zps}},u={args:{navigationCards:new Array(7).fill({headline:"Gasmotoren Baureihe CG132 B (400 - 1.000 kW)",scrollToIdLink:"test",linkLabel:"Mehr zum Gasmotor"}),variant:e.Zps}},v={args:{navigationCards:new Array(8).fill({headline:"Gasmotoren Baureihe CG132 B (400 - 1.000 kW)",scrollToIdLink:"test",linkLabel:"Mehr zum Gasmotor"}),variant:e.Zps}};var h,g,f;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(W=(A=t.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var V,T,N;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    navigationCards: new Array(6).fill({
      headline: 'Gasmotoren Baureihe CG132 B (400 - 1.000 kW)',
      scrollToIdLink: 'test',
      linkLabel: 'Mehr zum Gasmotor'
    }),
    variant: GlobalVariants.Zps
  } as AnchorNavigationListProps
}`,...(N=(T=s.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var M,Z,x;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    navigationCards: new Array(7).fill({
      headline: 'Gasmotoren Baureihe CG132 B (400 - 1.000 kW)',
      scrollToIdLink: 'test',
      linkLabel: 'Mehr zum Gasmotor'
    }),
    variant: GlobalVariants.Zps
  } as AnchorNavigationListProps
}`,...(x=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:x.source}}};var q,P,_;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    navigationCards: new Array(8).fill({
      headline: 'Gasmotoren Baureihe CG132 B (400 - 1.000 kW)',
      scrollToIdLink: 'test',
      linkLabel: 'Mehr zum Gasmotor'
    }),
    variant: GlobalVariants.Zps
  } as AnchorNavigationListProps
}`,...(_=(P=v.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};const ge=["Default","With2Items","With3Items","With4Items","With5Items","With6Items","With7Items","With8Items"];export{l as Default,n as With2Items,o as With3Items,i as With4Items,t as With5Items,s as With6Items,u as With7Items,v as With8Items,ge as __namedExportsOrder,he as default};
