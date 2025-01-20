import{G as e}from"./global-variants-71b69725.js";import{j as i}from"./jsx-runtime-1a9d9a93.js";import{c as A}from"./clsx-0839fdbe.js";import{H as se}from"./HeaderLongComponent-4487a920.js";import{C as ne}from"./CardSquare-9a2f0f0b.js";import{L as te}from"./Layout-cbdd4d47.js";import{S as oe}from"./Scrollbar-a25955b0.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index.es16-2c7a91d7.js";import"./index.es31-95f1013f.js";import"./index.es13-3580608c.js";import"./ZpsButton-352a7a46.js";import"./index.es24-0315e37d.js";import"./index.es34-79e31a69.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";import"./useContainerDimensions-42dc9502.js";import"./commonCSS-0b9dd3ad.js";const w=({items:r,variant:f,headline:S,...ie})=>{const a=r.length>12?r.slice(0,12):r;return i.jsxs(te,{className:A("zep-flex","zep-flex-col","md:zep-gap-4","sm:zep-gap-3","zep-gap-2.5"),children:[S&&i.jsx(se,{headline:S,...ie,variant:f}),i.jsx(oe,{scrollOrientation:"horizontal",dataTestId:"zep-card-square-list",className:A("zep-flex","md:zep-overflow-hidden","md:zep-grid","md:zep-grid-flow-row","zep-gap-1","md:zep-gap-1.5","xl:zep-gap-2",{"xl:zep-grid-cols-2":a.length<=2,"xl:zep-grid-cols-3":[3,5,6,9].includes(a.length),"xl:zep-grid-cols-4":[4,7,8,10,11,12].includes(a.length),"md:zep-grid-cols-2":[0,1,2,4].includes(a.length),"md:zep-grid-cols-3":[3,5,6,7,8,9,10,11,12].includes(a.length)}),controlId:"zep-card-square-scrollbar",children:r==null?void 0:r.map(k=>i.jsx(ne,{...k,cardListsLength:r.length,variant:f},k.headline))})]})};try{w.displayName="CardSquareList",w.__docgenInfo={description:"",displayName:"CardSquareList",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:'Omit<CardSquareProps, "variant">[]'}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary-button"'},{value:'"secondary-button"'},{value:'"link"'},{value:'"none"'}]}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const Le={title:"Patterns/CardSquareList",component:w,tags:["autodocs"],argTypes:{items:{control:{type:"array"}},variant:{control:{type:"radio",options:Object.keys(e)}}}},s={args:{items:new Array(2).fill({headline:"Headline",imageSrc:"https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg",imageAlt:"worker img",description:"This is the description"}),variant:e.Zps}},n={args:{items:new Array(2).fill({headline:"Headline ",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description"}),variant:e.Zps,headline:"Zukunftsweisende Antriebslösungen und mehr für die moderne Schifffahrt",tagline:"Zeppelin Power Systems Lösungen für Marine",linkText:"Alle Lösungen für Marine anzeigen",type:"link"}},t={args:{items:new Array(3).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description"}),variant:e.Zps}},o={args:{items:new Array(4).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description"}),variant:e.Zps}},l={args:{items:new Array(5).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description"}),variant:e.Zps}},p={args:{items:new Array(6).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description"}),variant:e.Zps}},d={args:{items:new Array(7).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description"}),variant:e.Zps}},m={args:{items:new Array(8).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description"}),variant:e.Zps}},c={args:{items:new Array(9).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description"}),variant:e.Zps}},g={args:{items:new Array(10).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description"}),variant:e.Zps}},u={args:{items:new Array(11).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description"}),variant:e.Zps}},h={args:{items:new Array(12).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description"}),variant:e.Zps}};var y,v,T;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    items: new Array(2).fill({
      headline: 'Headline',
      imageSrc: 'https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg',
      imageAlt: 'worker img',
      description: 'This is the description'
    }),
    variant: GlobalVariants.Zps
  } as CardSquareListProps
}`,...(T=(v=s.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var H,q,Z;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    items: new Array(2).fill({
      headline: 'Headline ',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description'
    }),
    variant: GlobalVariants.Zps,
    headline: 'Zukunftsweisende Antriebslösungen und mehr für die moderne Schifffahrt',
    tagline: 'Zeppelin Power Systems Lösungen für Marine',
    linkText: 'Alle Lösungen für Marine anzeigen',
    type: 'link'
  } as CardSquareListProps
}`,...(Z=(q=n.parameters)==null?void 0:q.docs)==null?void 0:Z.source}}};var L,b,x;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    items: new Array(3).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description'
    }),
    variant: GlobalVariants.Zps
  } as CardSquareListProps
}`,...(x=(b=t.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var z,C,I;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    items: new Array(4).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description'
    }),
    variant: GlobalVariants.Zps
  } as CardSquareListProps
}`,...(I=(C=o.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var V,W,P;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    items: new Array(5).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description'
    }),
    variant: GlobalVariants.Zps
  } as CardSquareListProps
}`,...(P=(W=l.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var G,_,j;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    items: new Array(6).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description'
    }),
    variant: GlobalVariants.Zps
  } as CardSquareListProps
}`,...(j=(_=p.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var M,F,N;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    items: new Array(7).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description'
    }),
    variant: GlobalVariants.Zps
  } as CardSquareListProps
}`,...(N=(F=d.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var E,O,D;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    items: new Array(8).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description'
    }),
    variant: GlobalVariants.Zps
  } as CardSquareListProps
}`,...(D=(O=m.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var R,B,J;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    items: new Array(9).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description'
    }),
    variant: GlobalVariants.Zps
  } as CardSquareListProps
}`,...(J=(B=c.parameters)==null?void 0:B.docs)==null?void 0:J.source}}};var K,Q,U;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    items: new Array(10).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description'
    }),
    variant: GlobalVariants.Zps
  } as CardSquareListProps
}`,...(U=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,$;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    items: new Array(11).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description'
    }),
    variant: GlobalVariants.Zps
  } as CardSquareListProps
}`,...($=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var ee,re,ae;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    items: new Array(12).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description'
    }),
    variant: GlobalVariants.Zps
  } as CardSquareListProps
}`,...(ae=(re=h.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};const be=["Default","WithHeadline","With3Items","With4Items","With5Items","With6Items","With7Items","With8Items","With9Items","With10Items","With11Items","With12Items"];export{s as Default,g as With10Items,u as With11Items,h as With12Items,t as With3Items,o as With4Items,l as With5Items,p as With6Items,d as With7Items,m as With8Items,c as With9Items,n as WithHeadline,be as __namedExportsOrder,Le as default};
