import{j as l}from"./jsx-runtime-1a9d9a93.js";import{c as t}from"./clsx-0839fdbe.js";import{G as u}from"./global-variants-71b69725.js";import{H as d}from"./HeaderShortComponent-d4930c6a.js";import{L as m}from"./LinkListItem-49ebc44a.js";import{L as c}from"./Layout-8fb0eebb.js";const s=({headline:a,linkLists:e,tagline:r,variant:i=u.Zps})=>{const o=e.length>15?e.slice(0,15):e;return l.jsxs(l.Fragment,{children:[a?l.jsx(d,{headline:a,tagline:r,variant:i}):null,l.jsx("div",{className:t("zep-grid","zep-gap-1","md:zep-gap-1.5","xl:zep-gap-2",{"xl:zep-grid-cols-2":e.length===2,"xl:zep-grid-cols-4":[4,7,8,11,12].includes(e.length),"xl:zep-grid-cols-5":[5,9,10,13,14,15].includes(e.length),"md:zep-grid-cols-2":[2,4].includes(e.length),"md:zep-grid-cols-3":[3,5,6,7,8,9,10,11,12,13,14,15].includes(e.length)}),children:o.map(n=>l.jsx(m,{className:"zep-w-full",...n,variant:i,isMultiListItem:!0},n.headline))})]})},p=({isPatternPart:a=!1,className:e,...r})=>a?l.jsx("div",{className:t("zep-flex-col","zep-flex","zep-gap-2","sm:zep-gap-3","xl:zep-gap-4",e),children:l.jsx(s,{...r,isPatternPart:a})}):l.jsx(c,{className:t("zep-flex-col","zep-flex","zep-gap-2","sm:zep-gap-3","xl:zep-gap-4",e),children:l.jsx(s,{...r,isPatternPart:a})});try{p.displayName="MultiLinkList",p.__docgenInfo={description:"",displayName:"MultiLinkList",props:{linkLists:{defaultValue:null,description:"",name:"linkLists",required:!0,type:{name:"LinkListItemProps[]"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZPS_BG"'},{value:'"CAT_BG"'}]}},isPatternPart:{defaultValue:{value:"false"},description:"",name:"isPatternPart",required:!1,type:{name:"boolean"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},showArrow:{defaultValue:null,description:"",name:"showArrow",required:!1,type:{name:"boolean"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}}}}}catch{}export{p as M};
