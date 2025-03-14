import{G as e}from"./global-variants-893e06e6.js";import{j as i}from"./jsx-runtime-1a9d9a93.js";import{c as S}from"./clsx-0839fdbe.js";import{L as le}from"./Layout-7f280280.js";import{H as se}from"./HeaderLongComponent-647d98ef.js";import{C as te}from"./CardSquare-f60482ec.js";import{S as oe}from"./Scrollbar-bd0f93ab.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index.es16-b727257a.js";import"./index.es31-95f1013f.js";import"./index.es13-9623ab51.js";import"./getUrlWithoutTrailingSlash-e7815512.js";import"./RichText-765faa54.js";import"./index.es18-4b39ea0e.js";import"./ZpsButton-657805eb.js";import"./index.es24-01fa0cce.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";import"./useContainerDimensions-42dc9502.js";import"./commonCSS-cc68a568.js";const v=({items:a,variant:w,headline:f,id:ie,...ne})=>{const r=a.length>12?a.slice(0,12):a;return i.jsxs(le,{id:ie,className:S("zep-flex","zep-flex-col","md:zep-gap-4","sm:zep-gap-3","zep-gap-2.5"),children:[f&&i.jsx(se,{headline:f,...ne,variant:w}),i.jsx(oe,{scrollOrientation:"horizontal",dataTestId:"zep-card-square-list",className:S("zep-flex","md:zep-overflow-hidden","md:zep-grid","md:zep-grid-flow-row","zep-gap-1","md:zep-gap-1.5","xl:zep-gap-2",{"xl:zep-grid-cols-2 !zep-flex":r.length<=2,"xl:zep-grid-cols-3":[3,5,6,9].includes(r.length),"xl:zep-grid-cols-4":[4,7,8,10,11,12].includes(r.length),"md:zep-grid-cols-2":[0,1,2,4].includes(r.length),"md:zep-grid-cols-3":[3,5,6,7,8,9,10,11,12].includes(r.length)}),controlId:"zep-card-square-scrollbar",children:a==null?void 0:a.map(k=>i.jsx(te,{...k,variant:w},k.headline))})]})};try{v.displayName="CardSquareList",v.__docgenInfo={description:"",displayName:"CardSquareList",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:'Omit<CardSquareProps, "variant">[]'}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},headerButtonIcon:{defaultValue:null,description:"",name:"headerButtonIcon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"link"'},{value:'"list"'},{value:'"table"'},{value:'"email"'},{value:'"location"'},{value:'"time"'},{value:'"copy"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"delete-circle"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"add-circle"'},{value:'"marine-ship"'}]}},headerButtonIconPosition:{defaultValue:null,description:"",name:"headerButtonIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}const Ie={title:"Patterns/CardSquareList",component:v,tags:["autodocs"],argTypes:{items:{control:{type:"array"}},variant:{control:{type:"radio",options:Object.keys(e)}}}},n={args:{items:new Array(2).fill({headline:"Headline",imageSrc:"https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps}},l={args:{items:new Array(2).fill({headline:"Headline ",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps,headline:"Zukunftsweisende Antriebslösungen und mehr für die moderne Schifffahrt",tagline:"Zeppelin Power Systems Lösungen für Marine",linkText:"Alle Lösungen für Marine anzeigen",type:"link"}},s={args:{items:new Array(3).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps}},t={args:{items:new Array(4).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps}},o={args:{items:new Array(5).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps}},u={args:{items:new Array(6).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps}},p={args:{items:new Array(7).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps}},c={args:{items:new Array(8).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps}},d={args:{items:new Array(9).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps}},m={args:{items:new Array(10).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps}},g={args:{items:new Array(11).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps}},h={args:{items:new Array(12).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps}};var y,A,b;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    items: new Array(2).fill({
      headline: 'Headline',
      imageSrc: 'https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg',
      imageAlt: 'worker img',
      description: 'This is the description',
      url: 'https://www.google.com'
    }),
    variant: GlobalVariants.Zps
  } as CardSquareListProps
}`,...(b=(A=n.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var q,T,H;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    items: new Array(2).fill({
      headline: 'Headline ',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description',
      url: 'https://www.google.com'
    }),
    variant: GlobalVariants.Zps,
    headline: 'Zukunftsweisende Antriebslösungen und mehr für die moderne Schifffahrt',
    tagline: 'Zeppelin Power Systems Lösungen für Marine',
    linkText: 'Alle Lösungen für Marine anzeigen',
    type: 'link'
  } as CardSquareListProps
}`,...(H=(T=l.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var x,z,Z;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    items: new Array(3).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description',
      url: 'https://www.google.com'
    }),
    variant: GlobalVariants.Zps
  } as CardSquareListProps
}`,...(Z=(z=s.parameters)==null?void 0:z.docs)==null?void 0:Z.source}}};var C,I,V;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    items: new Array(4).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description',
      url: 'https://www.google.com'
    }),
    variant: GlobalVariants.Zps
  } as CardSquareListProps
}`,...(V=(I=t.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var L,W,P;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    items: new Array(5).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description',
      url: 'https://www.google.com'
    }),
    variant: GlobalVariants.Zps
  } as CardSquareListProps
}`,...(P=(W=o.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var G,_,j;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    items: new Array(6).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description',
      url: 'https://www.google.com'
    }),
    variant: GlobalVariants.Zps
  } as CardSquareListProps
}`,...(j=(_=u.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var M,F,N;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    items: new Array(7).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description',
      url: 'https://www.google.com'
    }),
    variant: GlobalVariants.Zps
  } as CardSquareListProps
}`,...(N=(F=p.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var B,E,O;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    items: new Array(8).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description',
      url: 'https://www.google.com'
    }),
    variant: GlobalVariants.Zps
  } as CardSquareListProps
}`,...(O=(E=c.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var D,R,J;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    items: new Array(9).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description',
      url: 'https://www.google.com'
    }),
    variant: GlobalVariants.Zps
  } as CardSquareListProps
}`,...(J=(R=d.parameters)==null?void 0:R.docs)==null?void 0:J.source}}};var K,Q,U;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    items: new Array(10).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description',
      url: 'https://www.google.com'
    }),
    variant: GlobalVariants.Zps
  } as CardSquareListProps
}`,...(U=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,$;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    items: new Array(11).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description',
      url: 'https://www.google.com'
    }),
    variant: GlobalVariants.Zps
  } as CardSquareListProps
}`,...($=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var ee,ae,re;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    items: new Array(12).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description',
      url: 'https://www.google.com'
    }),
    variant: GlobalVariants.Zps
  } as CardSquareListProps
}`,...(re=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};const Ve=["Default","WithHeadline","With3Items","With4Items","With5Items","With6Items","With7Items","With8Items","With9Items","With10Items","With11Items","With12Items"];export{n as Default,m as With10Items,g as With11Items,h as With12Items,s as With3Items,t as With4Items,o as With5Items,u as With6Items,p as With7Items,c as With8Items,d as With9Items,l as WithHeadline,Ve as __namedExportsOrder,Ie as default};
