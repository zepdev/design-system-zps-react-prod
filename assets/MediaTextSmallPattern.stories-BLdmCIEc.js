import{a as Z,G as a}from"./global-variants-BqXUcqLU.js";import{a as e}from"./mocks-BsnnLGYj.js";import{j as l}from"./jsx-runtime-Cf8x2fCZ.js";import{M as ze}from"./MediaTextSmall-DZlAnl27.js";import{c as m}from"./clsx-B-dksMZM.js";import{b as Se}from"./commonCSS-CYdk8Zlu.js";import{L as Pe}from"./Layout-_JO_AWBO.js";import{H as Te}from"./HeaderLongComponent-CWfIBk9d.js";import"./index-yBjzXJbu.js";import"./index.es17-CiSAzvV-.js";import"./index-Dp3B9jqt.js";import"./focus-MNa1V5My.js";import"./getUrlWithTrailingSlash-BtqMQXK9.js";import"./linkSecurity-DjaWK124.js";import"./RichText-C0RTi0gd.js";import"./index-BOnQTV8N.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index.es16-DgQGa2Bn.js";import"./index.es32-D9mbuw9C.js";import"./index.es13-DrwoFUlW.js";import"./index.es18-CO8Mj8wJ.js";import"./ZpsButton-DPFcpmqO.js";import"./index.es25-Cd1K6ALS.js";import"./index.es36-BF3AzYXZ.js";import"./getDataLayer-CP2Cgxnv.js";import"./tw-merge-Ds6tgvmq.js";const M=({items:r,id:T,headline:s,scrollId:fe,variant:we=a.Zps,...xe})=>{const t=r.length>12?r.slice(0,12):r,n=t.length>2,p=t.length===4,_=()=>{switch(we){case a.Cat:return Z.CatBg;default:return Z.ZpsBg}};return l.jsx(Pe,{id:T,wrapperClassname:Se[_()??Z.ZpsBg],className:m("zep-flex","zep-flex-col","zep-py-3","sm:zep-py-4","md:zep-py-5","md:zep-gap-4","sm:zep-gap-3","zep-gap-2.5"),children:l.jsxs("div",{"data-testid":"media-text-small-pattern",id:fe,className:m(!n&&"theme_zes:lg:zep-flex theme_zes:lg:zep-items-start theme_zes:lg:zep-gap-5"),children:[l.jsx("div",{"data-testid":"media-text-small-pattern-headline",className:m("zep-mb-2.5 sm:zep-mb-3 md:zep-mb-4 xl:zep-mb-5","theme_zes:lg:zep-w-[55%]",!n&&"theme_zes:lg:zep-mb-[0] theme_zes:lg:zep-shrink-0"),children:s&&l.jsx(Te,{variant:_(),headline:s,...xe})}),l.jsx("div",{"data-testid":"media-text-small-pattern-items",className:"theme_zes:lg:zep-flex-1",children:r&&l.jsx("div",{className:m("zep-grid","zep-gap-1","md:zep-gap-1.5","xl:zep-gap-2",{"xl:zep-grid-cols-3":[2,3,6,9].includes(t.length),"xl:zep-grid-cols-4":[4,5,7,8,10,11,12].includes(t.length),"md:zep-grid-cols-2":[0,1,2,4].includes(t.length),"md:zep-grid-cols-3":[3,5,6,7,8,9,10,11,12].includes(t.length),"sm:zep-grid-cols-2":!0,"theme_zes:zep-grid-cols-2 theme_zes:zep-max-w-[37.5rem]":!n,"theme_zes:lg:zep-max-w-none theme_zes:lg:zep-gap-x-5":!n,"theme_zes:zep-flex theme_zes:zep-flex-wrap theme_zes:zep-justify-center":n,"theme_zes:zep-max-w-[37.5rem] theme_zes:[&>*]:zep-w-[calc((100%_-_1rem)/2)]":n,"theme_zes:md:zep-gap-x-3":n,"theme_zes:md:zep-max-w-[51rem] theme_zes:md:[&>*]:zep-w-[calc((100%_-_6rem)/3)]":n&&!p,"theme_zes:xl:zep-max-w-[58.5rem]":n&&!p,"theme_zes:md:zep-max-w-[69rem] theme_zes:md:[&>*]:zep-w-[calc((100%_-_9rem)/4)]":p,"theme_zes:xl:zep-max-w-[79rem]":p}),children:r.map((ye,ke)=>l.jsx(ze,{variant:_(),...ye},ke))})})]})})};try{M.displayName="MediaTextSmallPattern",M.__docgenInfo={description:"",displayName:"MediaTextSmallPattern",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"MediaTextSmallProps[]"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZPS_BG"'},{value:'"CAT_BG"'}]}},scrollId:{defaultValue:null,description:"",name:"scrollId",required:!1,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},containerClassName:{defaultValue:null,description:"Classes for the outer wrapper (the link's `className` is for the link).",name:"containerClassName",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary-button"'},{value:'"secondary-button"'},{value:'"link"'},{value:'"none"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},headerButtonIcon:{defaultValue:null,description:"",name:"headerButtonIcon",required:!1,type:{name:"enum",value:[{value:'"location"'},{value:'"link"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"email"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"list"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"table"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"time"'},{value:'"copy"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"search"'},{value:'"delete-circle"'},{value:'"alert"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"marine-ship"'},{value:'"add-circle"'}]}},headerButtonIconPosition:{defaultValue:null,description:"",name:"headerButtonIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"enum",value:[{value:'"_self"'},{value:'"_blank"'}]}}}}}catch{}const Ye={title:"Patterns/MediaTextSmallPattern",component:M,tags:["autodocs"],argTypes:{variant:{control:{type:"radio",options:["Zps","Cat"]}}}},c={args:{items:new Array(2).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e,linkText:"Link Text",type:"link",headerButtonIcon:"external-link",variant:"ZPS"}},d={args:{items:new Array(2).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e,linkText:"Link Text",type:"link",headerButtonIcon:"arrow-long-right",variant:a.Zps}},u={args:{items:new Array(3).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e,variant:a.Zps}},g={args:{items:new Array(4).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",description:e,variant:"ZPS"}},v={args:{items:new Array(5).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e,variant:a.Zps}},h={args:{items:new Array(6).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e,variant:a.Zps}},f={args:{items:new Array(7).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e,variant:a.Zps}},w={args:{items:new Array(8).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e,variant:a.Zps}},i=(r,T)=>["Verena Wolfinger","Michael Hierholzer","Person Three","Person Four","Person Five","Person Six"].slice(0,r).map(s=>({headline:s,description:[{type:"paragraph",children:[{type:"text",text:"Managing Director"}]}],imageAlt:s,imageSrc:"./assets/worker.png",url:T})),x={args:{items:i(2),headline:"Energy expertise backed by Zeppelin",description:e,linkText:"Learn more about the Zeppelin Group",linkHref:"https://www.zeppelin.com",type:"primary-button",variant:a.Zps}},o={headline:"Energy expertise backed by Zeppelin",description:e,linkText:"Learn more about the Zeppelin Group",linkHref:"https://www.zeppelin.com",type:"primary-button",variant:a.Zps},y={args:{...o,items:i(2,"https://www.linkedin.com/")}},k={args:{...o,items:i(3,"https://www.linkedin.com/")}},z={args:{...o,items:i(4,"https://www.linkedin.com/")}},S={args:{...o,items:i(5,"https://www.linkedin.com/")}},P={args:{...o,items:i(6,"https://www.linkedin.com/")}};var b,A,H;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(H=(A=c.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var L,V,I;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(I=(V=d.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var F,C,R;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(R=(C=u.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var W,q,G;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(G=(q=g.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var B,N,j;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(j=(N=v.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var E,D,O;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(O=(D=h.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var J,K,Q;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=f.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Y=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var $,ee,ae;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    items: people(2),
    headline: 'Energy expertise backed by Zeppelin',
    description: mockRichText,
    linkText: 'Learn more about the Zeppelin Group',
    linkHref: 'https://www.zeppelin.com',
    type: 'primary-button',
    variant: GlobalVariants.Zps
  } as MediaTextSmallPatternProps
}`,...(ae=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,re,le;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    ...peopleHeader,
    items: people(2, 'https://www.linkedin.com/')
  } as MediaTextSmallPatternProps
}`,...(le=(re=y.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var te,ie,se;k.parameters={...k.parameters,docs:{...(te=k.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    ...peopleHeader,
    items: people(3, 'https://www.linkedin.com/')
  } as MediaTextSmallPatternProps
}`,...(se=(ie=k.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var oe,pe,me;z.parameters={...z.parameters,docs:{...(oe=z.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    ...peopleHeader,
    items: people(4, 'https://www.linkedin.com/')
  } as MediaTextSmallPatternProps
}`,...(me=(pe=z.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ce,de,ue;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    ...peopleHeader,
    items: people(5, 'https://www.linkedin.com/')
  } as MediaTextSmallPatternProps
}`,...(ue=(de=S.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var ge,ve,he;P.parameters={...P.parameters,docs:{...(ge=P.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    ...peopleHeader,
    items: people(6, 'https://www.linkedin.com/')
  } as MediaTextSmallPatternProps
}`,...(he=(ve=P.parameters)==null?void 0:ve.docs)==null?void 0:he.source}}};const $e=["Default","WithHeadline","With3Items","With4Items","With5Items","With6Items","With7Items","With8Items","People","PeopleWithLinks","ThreePeople","FourPeople","FivePeople","SixPeople"];export{c as Default,S as FivePeople,z as FourPeople,x as People,y as PeopleWithLinks,P as SixPeople,k as ThreePeople,u as With3Items,g as With4Items,v as With5Items,h as With6Items,f as With7Items,w as With8Items,d as WithHeadline,$e as __namedExportsOrder,Ye as default};
