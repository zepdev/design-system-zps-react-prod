import{j as i,c as t}from"./clsx-490306ad.js";import{G as J}from"./global-variants-42c1cda2.js";import{b as K}from"./HeaderShort-216c82e5.js";import{L as Q}from"./LinkListItem-f54b3677.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index-b85febcc.js";import"./index.es29-7715336a.js";import"./index.es13-bd73f74d.js";import"./index.es24-e7069ead.js";import"./index.es16-83e3794c.js";const p=({transparentLinkItem:d,headline:O,linkLists:s,variant:g=J.Zps})=>{const R=s.length>10?s.slice(0,10):s;return i.jsx("div",{className:t("zep-grid","zep-grid-cols-4","sm:zep-grid-cols-8","md:zep-grid-cols-16","zep-gap-1","sm:zep-gap-1.5","xl:zep-gap-2","zep-max-w-[1920px]"),children:i.jsxs("div",{className:t("md:zep-col-start-2","md:zep-col-span-14","zep-col-span-4","sm:zep-col-span-8","zep-flex-col","zep-flex","zep-gap-2","sm:zep-gap-3","xl:zep-gap-4"),children:[i.jsx(K,{headline:O,variant:g}),i.jsx("div",{className:t("zep-flex","zep-flex-col","md:zep-grid","zep-gap-1","md:zep-gap-1.5","xl:zep-gap-2","md:zep-grid-flow-row",{"xl:zep-grid-cols-2":s.length===2,"xl:zep-grid-cols-4":[4,7,8].includes(s.length),"xl:zep-grid-cols-5":[5,9,10].includes(s.length),"md:zep-grid-cols-2":[2,4].includes(s.length),"md:zep-grid-cols-3":[3,5,6,7,8,9,10].includes(s.length)}),children:R.map(B=>i.jsx(Q,{className:t({"zep-bg-background-medium":!d}),...B,variant:g,isMultiListItem:!0}))})]})})};try{p.displayName="MultiLinkList",p.__docgenInfo={description:"",displayName:"MultiLinkList",props:{linkLists:{defaultValue:null,description:"",name:"linkLists",required:!0,type:{name:"LinkListItemProps[]"}},transparentLinkItem:{defaultValue:null,description:"",name:"transparentLinkItem",required:!1,type:{name:"boolean"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}}}}}catch{}const e={links:[{icon:"arrow-right",href:"https://www.google.com",label:"link inline",hasIcon:!0},{icon:"arrow-right",href:"https://www.google.com",label:"link inline",hasIcon:!0},{icon:"arrow-right",href:"https://www.google.com",label:"link inline",hasIcon:!0},{icon:"arrow-right",href:"https://www.google.com",label:"link inline",hasIcon:!0}],headline:"Headline optional",description:"Description optional"},oe={title:"Patterns/MultiLinkList",component:p,tags:["autodocs"],argTypes:{theme:{children:{control:{type:"select",options:["cat","power-systems"]}}}}},n={args:{headline:"Two Link Lists",linkLists:[e,e],theme:"power-systems"}},r={args:{headline:"Three Link Lists",linkLists:[e,e,e],theme:"power-systems"}},o={args:{headline:"Four Link Lists",linkLists:[e,e,e,e],theme:"power-systems"}},a={args:{headline:"Five Link Lists",linkLists:[e,e,e,e,e],theme:"power-systems"}},m={args:{headline:"Six Link Lists",linkLists:[e,e,e,e,e,e],theme:"power-systems"}},c={args:{headline:"Seven Link Lists",linkLists:[e,e,e,e,e,e,e],theme:"power-systems"}},L={args:{headline:"Eight Link Lists",linkLists:[e,e,e,e,e,e,e,e],theme:"power-systems"}},k={args:{headline:"Nine Link Lists",linkLists:[e,e,e,e,e,e,e,e,e],theme:"power-systems"}},l={args:{headline:"Ten Link Lists",linkLists:[e,e,e,e,e,e,e,e,e,e],theme:"power-systems"}};var h,u,w;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    headline: 'Two Link Lists',
    linkLists: [mockLinkList, mockLinkList],
    theme: 'power-systems'
  }
}`,...(w=(u=n.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};var z,y,x;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    headline: 'Three Link Lists',
    linkLists: [mockLinkList, mockLinkList, mockLinkList],
    theme: 'power-systems'
  }
}`,...(x=(y=r.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var I,f,S;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    headline: 'Four Link Lists',
    linkLists: [mockLinkList, mockLinkList, mockLinkList, mockLinkList],
    theme: 'power-systems'
  }
}`,...(S=(f=o.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var v,T,b;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    headline: 'Five Link Lists',
    linkLists: [mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList],
    theme: 'power-systems'
  }
}`,...(b=(T=a.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var N,_,F;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    headline: 'Six Link Lists',
    linkLists: [mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList],
    theme: 'power-systems'
  }
}`,...(F=(_=m.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var j,E,V;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    headline: 'Seven Link Lists',
    linkLists: [mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList],
    theme: 'power-systems'
  }
}`,...(V=(E=c.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var M,q,C;L.parameters={...L.parameters,docs:{...(M=L.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    headline: 'Eight Link Lists',
    linkLists: [mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList],
    theme: 'power-systems'
  }
}`,...(C=(q=L.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};var D,G,P;k.parameters={...k.parameters,docs:{...(D=k.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    headline: 'Nine Link Lists',
    linkLists: [mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList],
    theme: 'power-systems'
  }
}`,...(P=(G=k.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var Z,H,A;l.parameters={...l.parameters,docs:{...(Z=l.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    headline: 'Ten Link Lists',
    linkLists: [mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList],
    theme: 'power-systems'
  }
}`,...(A=(H=l.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};const ae=["Default","ThreeItems","FourItems","FiveItems","SixItems","SevenItems","EightItems","NineItems","TenItems"];export{n as Default,L as EightItems,a as FiveItems,o as FourItems,k as NineItems,c as SevenItems,m as SixItems,l as TenItems,r as ThreeItems,ae as __namedExportsOrder,oe as default};
//# sourceMappingURL=MultiLinkList.stories-7c2d4853.js.map
