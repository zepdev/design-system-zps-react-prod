import{a as T,G as a}from"./global-variants-BqXUcqLU.js";import{a as e,b as ye}from"./mocks-BR3BZZEO.js";import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{M as ke}from"./MediaTextSmall-BSfVB40q.js";import{c as z}from"./clsx-B-dksMZM.js";import{b as Se}from"./commonCSS-CYdk8Zlu.js";import{L as Pe}from"./Layout-_JO_AWBO.js";import{H as Te}from"./HeaderLongComponent-ByNM6SES.js";import"./index-yBjzXJbu.js";import"./index.es17-CiSAzvV-.js";import"./index-Dp3B9jqt.js";import"./focus-MNa1V5My.js";import"./getUrlWithTrailingSlash-BtqMQXK9.js";import"./linkSecurity-DjaWK124.js";import"./RichText-CO-QJ0dw.js";import"./index-BOnQTV8N.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index.es16-DgQGa2Bn.js";import"./index.es32-D9mbuw9C.js";import"./index.es13-DrwoFUlW.js";import"./index.es18-CO8Mj8wJ.js";import"./ZpsButton-gfFC0cFd.js";import"./index.es25-Cd1K6ALS.js";import"./index.es36-BF3AzYXZ.js";import"./getDataLayer-CP2Cgxnv.js";import"./tw-merge-Ds6tgvmq.js";const Z=({items:n,id:S,headline:i,scrollId:ve,variant:he=a.Zps,...fe})=>{const s=n.length>12?n.slice(0,12):n,P=()=>{switch(he){case a.Cat:return T.CatBg;default:return T.ZpsBg}};return r.jsx(Pe,{id:S,wrapperClassname:Se[P()??T.ZpsBg],className:z("zep-flex","zep-flex-col","zep-py-3","sm:zep-py-4","md:zep-py-5","md:zep-gap-4","sm:zep-gap-3","zep-gap-2.5"),children:r.jsxs("div",{"data-testid":"media-text-small-pattern",id:ve,className:"theme_zes:lg:zep-flex theme_zes:lg:zep-items-start theme_zes:lg:zep-gap-5",children:[r.jsx("div",{"data-testid":"media-text-small-pattern-headline",className:z("zep-mb-2.5 sm:zep-mb-3 md:zep-mb-4 xl:zep-mb-5","theme_zes:lg:zep-mb-[0] theme_zes:lg:zep-w-[min(55%,calc(100%_-_666px))] theme_zes:lg:zep-shrink-0"),children:i&&r.jsx(Te,{variant:P(),headline:i,...fe})}),r.jsx("div",{"data-testid":"media-text-small-pattern-items",className:"theme_zes:lg:zep-flex-1",children:n&&r.jsx("div",{className:z("zep-grid","zep-gap-1","md:zep-gap-1.5","xl:zep-gap-2",{"xl:zep-grid-cols-3":[2,3,6,9].includes(s.length),"xl:zep-grid-cols-4":[4,5,7,8,10,11,12].includes(s.length),"md:zep-grid-cols-2":[0,1,2,4].includes(s.length),"md:zep-grid-cols-3":[3,5,6,7,8,9,10,11,12].includes(s.length),"sm:zep-grid-cols-2":!0,"theme_zes:zep-grid-cols-2 theme_zes:zep-max-w-[37.5rem]":!0,"theme_zes:lg:zep-max-w-none theme_zes:lg:zep-gap-x-5":!0}),children:n.map((xe,we)=>r.jsx(ke,{variant:P(),...xe},we))})})]})})};try{Z.displayName="MediaTextSmallPattern",Z.__docgenInfo={description:"",displayName:"MediaTextSmallPattern",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"MediaTextSmallProps[]"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZPS_BG"'},{value:'"CAT_BG"'}]}},scrollId:{defaultValue:null,description:"",name:"scrollId",required:!1,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},containerClassName:{defaultValue:null,description:"Classes for the outer wrapper (the link's `className` is for the link).",name:"containerClassName",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},headerButtonIcon:{defaultValue:null,description:"",name:"headerButtonIcon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"link"'},{value:'"list"'},{value:'"table"'},{value:'"email"'},{value:'"location"'},{value:'"time"'},{value:'"copy"'},{value:'"download"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"loader"'},{value:'"upload"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"delete-circle"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"marine-ship"'},{value:'"add-circle"'}]}},headerButtonIconPosition:{defaultValue:null,description:"",name:"headerButtonIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"enum",value:[{value:'"_self"'},{value:'"_blank"'}]}}}}}catch{}const Xe={title:"Patterns/MediaTextSmallPattern",component:Z,tags:["autodocs"],argTypes:{variant:{control:{type:"radio",options:["Zps","Cat"]}}}},o={args:{items:new Array(2).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e,linkText:"Link Text",type:"link",headerButtonIcon:"external-link",variant:"ZPS"}},p={args:{items:new Array(2).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e,linkText:"Link Text",type:"link",headerButtonIcon:"arrow-long-right",variant:a.Zps}},m={args:{items:new Array(3).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e,variant:a.Zps}},c={args:{items:new Array(4).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",description:e,variant:"ZPS"}},u={args:{items:new Array(5).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e,variant:a.Zps}},d={args:{items:new Array(6).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e,variant:a.Zps}},g={args:{items:new Array(7).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e,variant:a.Zps}},v={args:{items:new Array(8).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e,variant:a.Zps}},l=(n,S)=>["Verena Wolfinger","Michael Hierholzer","Person Three","Person Four","Person Five","Person Six"].slice(0,n).map(i=>({headline:i,description:ye,imageAlt:i,imageSrc:"./assets/worker.png",url:S})),h={args:{items:l(2),headline:"Energy expertise backed by Zeppelin",description:e,linkText:"Learn more about the Zeppelin Group",linkHref:"https://www.zeppelin.com",type:"primary-button",variant:a.Zps}},t={headline:"Energy expertise backed by Zeppelin",description:e,linkText:"Learn more about the Zeppelin Group",linkHref:"https://www.zeppelin.com",type:"primary-button",variant:a.Zps},f={args:{...t,items:l(2,"https://www.linkedin.com/")}},x={args:{...t,items:l(3,"https://www.linkedin.com/")}},w={args:{...t,items:l(4,"https://www.linkedin.com/")}},y={args:{...t,items:l(5,"https://www.linkedin.com/")}},k={args:{...t,items:l(6,"https://www.linkedin.com/")}};var _,b,M;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    items: new Array(2).fill({
      headline: 'Headline',
      description: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png'
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: mockRichText,
    linkText: 'Link Text',
    type: 'link',
    headerButtonIcon: 'external-link',
    variant: 'ZPS'
  } as MediaTextSmallPatternProps
}`,...(M=(b=o.parameters)==null?void 0:b.docs)==null?void 0:M.source}}};var A,H,L;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    items: new Array(2).fill({
      headline: 'Headline',
      description: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png'
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: mockRichText,
    linkText: 'Link Text',
    type: 'link',
    headerButtonIcon: 'arrow-long-right',
    variant: GlobalVariants.Zps
  } as MediaTextSmallPatternProps
}`,...(L=(H=p.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var V,I,C;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    items: new Array(3).fill({
      headline: 'Headline',
      description: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png'
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: mockRichText,
    variant: GlobalVariants.Zps
  } as MediaTextSmallPatternProps
}`,...(C=(I=m.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var F,R,W;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    items: new Array(4).fill({
      headline: 'Headline',
      description: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png'
    }),
    headline: 'Lösungen für Marine',
    description: mockRichText,
    variant: 'ZPS'
  } as MediaTextSmallPatternProps
}`,...(W=(R=c.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var q,G,B;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    items: new Array(5).fill({
      headline: 'Headline',
      description: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png'
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: mockRichText,
    variant: GlobalVariants.Zps
  } as MediaTextSmallPatternProps
}`,...(B=(G=u.parameters)==null?void 0:G.docs)==null?void 0:B.source}}};var N,j,E;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    items: new Array(6).fill({
      headline: 'Headline',
      description: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png'
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: mockRichText,
    variant: GlobalVariants.Zps
  } as MediaTextSmallPatternProps
}`,...(E=(j=d.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var D,O,J;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    items: new Array(7).fill({
      headline: 'Headline',
      description: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png'
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: mockRichText,
    variant: GlobalVariants.Zps
  } as MediaTextSmallPatternProps
}`,...(J=(O=g.parameters)==null?void 0:O.docs)==null?void 0:J.source}}};var K,Q,U;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    items: new Array(8).fill({
      headline: 'Headline',
      description: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png'
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: mockRichText,
    variant: GlobalVariants.Zps
  } as MediaTextSmallPatternProps
}`,...(U=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,$;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    items: people(2),
    headline: 'Energy expertise backed by Zeppelin',
    description: mockRichText,
    linkText: 'Learn more about the Zeppelin Group',
    linkHref: 'https://www.zeppelin.com',
    type: 'primary-button',
    variant: GlobalVariants.Zps
  } as MediaTextSmallPatternProps
}`,...($=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var ee,ae,ne;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    ...peopleHeader,
    items: people(2, 'https://www.linkedin.com/')
  } as MediaTextSmallPatternProps
}`,...(ne=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var re,le,ie;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    ...peopleHeader,
    items: people(3, 'https://www.linkedin.com/')
  } as MediaTextSmallPatternProps
}`,...(ie=(le=x.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var te,se,oe;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    ...peopleHeader,
    items: people(4, 'https://www.linkedin.com/')
  } as MediaTextSmallPatternProps
}`,...(oe=(se=w.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var pe,me,ce;y.parameters={...y.parameters,docs:{...(pe=y.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    ...peopleHeader,
    items: people(5, 'https://www.linkedin.com/')
  } as MediaTextSmallPatternProps
}`,...(ce=(me=y.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var ue,de,ge;k.parameters={...k.parameters,docs:{...(ue=k.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    ...peopleHeader,
    items: people(6, 'https://www.linkedin.com/')
  } as MediaTextSmallPatternProps
}`,...(ge=(de=k.parameters)==null?void 0:de.docs)==null?void 0:ge.source}}};const Ye=["Default","WithHeadline","With3Items","With4Items","With5Items","With6Items","With7Items","With8Items","People","PeopleWithLinks","ThreePeople","FourPeople","FivePeople","SixPeople"];export{o as Default,y as FivePeople,w as FourPeople,h as People,f as PeopleWithLinks,k as SixPeople,x as ThreePeople,m as With3Items,c as With4Items,u as With5Items,d as With6Items,g as With7Items,v as With8Items,p as WithHeadline,Ye as __namedExportsOrder,Xe as default};
