import{G as e}from"./global-variants-893e06e6.js";import{j as r}from"./jsx-runtime-1a9d9a93.js";import{c as k}from"./clsx-0839fdbe.js";import{L as ne}from"./Layout-fc6ef0e0.js";import{H as le}from"./HeaderLongComponent-fbf527b4.js";import{C as se}from"./CardSquare-95059b8c.js";import{S as te}from"./Scrollbar-bd0f93ab.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index.es16-10934590.js";import"./index.es31-95f1013f.js";import"./index.es13-751bc762.js";import"./getUrlWithTrailingSlash-6cb3eda2.js";import"./RichText-8d6dc223.js";import"./index.es18-4b39ea0e.js";import"./ZpsButton-7f65ec2c.js";import"./index.es24-01fa0cce.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";import"./useContainerDimensions-42dc9502.js";import"./commonCSS-cc68a568.js";const h=({items:a,variant:v,headline:w,id:re,...ie})=>r.jsxs(ne,{id:re,className:k("zep-flex","zep-flex-col","md:zep-gap-4","sm:zep-gap-3","zep-gap-2.5"),children:[w&&r.jsx(le,{headline:w,...ie,variant:v}),r.jsx(te,{scrollOrientation:"horizontal",dataTestId:"zep-card-square-list",className:k("zep-flex","lg:zep-overflow-hidden","lg:zep-grid","lg:zep-grid-flow-row","zep-gap-1","md:zep-gap-1.5","xl:zep-gap-2",{"lg:zep-grid-cols-2 xl:zep-flex":a.length<=2,"lg:zep-grid-cols-3":a.length>=3,"xl:zep-grid-cols-3":[3,5,6,9].includes(a.length),"xl:zep-grid-cols-4":[4,7,8].includes(a.length)||a.length>=10}),controlId:"zep-card-square-scrollbar",children:a==null?void 0:a.map(f=>r.jsx(se,{...f,variant:v},f.headline))})]});try{h.displayName="CardSquareList",h.__docgenInfo={description:"",displayName:"CardSquareList",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:'Omit<CardSquareProps, "variant">[]'}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},headerButtonIcon:{defaultValue:null,description:"",name:"headerButtonIcon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"link"'},{value:'"list"'},{value:'"table"'},{value:'"email"'},{value:'"location"'},{value:'"time"'},{value:'"copy"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"delete-circle"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"marine-ship"'},{value:'"add-circle"'}]}},headerButtonIconPosition:{defaultValue:null,description:"",name:"headerButtonIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}const Ce={title:"Patterns/CardSquareList",component:h,tags:["autodocs"],argTypes:{items:{control:{type:"array"}},variant:{control:{type:"radio",options:Object.keys(e)}}}},i={args:{items:new Array(2).fill({headline:"Headline",imageSrc:"https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps}},n={args:{items:new Array(2).fill({headline:"Headline ",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps,headline:"Zukunftsweisende Antriebslösungen und mehr für die moderne Schifffahrt",tagline:"Zeppelin Power Systems Lösungen für Marine",linkText:"Alle Lösungen für Marine anzeigen",type:"link"}},l={args:{items:new Array(3).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps}},s={args:{items:new Array(4).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps}},t={args:{items:new Array(5).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps}},o={args:{items:new Array(6).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps}},u={args:{items:new Array(7).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps}},p={args:{items:new Array(8).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps}},c={args:{items:new Array(9).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps}},d={args:{items:new Array(10).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps}},m={args:{items:new Array(11).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps}},g={args:{items:new Array(12).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps}};var S,y,A;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(A=(y=i.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var b,q,T;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(T=(q=n.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};var H,x,z;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(z=(x=l.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var Z,C,I;s.parameters={...s.parameters,docs:{...(Z=s.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(I=(C=s.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var V,L,W;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(W=(L=t.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var P,G,_;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(_=(G=o.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};var j,M,F;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(F=(M=u.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var N,B,E;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(E=(B=p.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var O,D,R;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(R=(D=c.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var J,K,Q;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=d.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var $,ee,ae;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(ae=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};const Ie=["Default","WithHeadline","With3Items","With4Items","With5Items","With6Items","With7Items","With8Items","With9Items","With10Items","With11Items","With12Items"];export{i as Default,d as With10Items,m as With11Items,g as With12Items,l as With3Items,s as With4Items,t as With5Items,o as With6Items,u as With7Items,p as With8Items,c as With9Items,n as WithHeadline,Ie as __namedExportsOrder,Ce as default};
