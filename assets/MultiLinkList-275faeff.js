import{j as l}from"./jsx-runtime-1a9d9a93.js";import{c as i}from"./clsx-0839fdbe.js";import{G as m}from"./global-variants-71b69725.js";import{H as c}from"./HeaderLongComponent-c796bac5.js";import{L as f}from"./LinkListItem-403a0a38.js";import{L as g}from"./Layout-59cfbfd4.js";const u=({headline:a,linkLists:e,variant:n=m.Zps,linkListItemClassname:r,isFooterList:t,...d})=>{const o=e.length>15?e.slice(0,15):e;return l.jsxs(l.Fragment,{children:[a?l.jsx(c,{headline:a,variant:n,...d}):null,l.jsx("div",{className:i("zep-grid","zep-gap-1","md:zep-gap-1.5","xl:zep-gap-2",{"xl:zep-grid-cols-2":e.length===2,"xl:zep-grid-cols-4":[4,7,8,11,12].includes(e.length),"xl:zep-grid-cols-5":[5,9,10,13,14,15].includes(e.length),"md:zep-grid-cols-2":[2,4].includes(e.length),"md:zep-grid-cols-3":[3,5,6,7,8,9,10,11,12,13,14,15].includes(e.length)}),children:o.map(s=>l.jsx(f,{className:i("zep-w-full",r),...s,variant:n,isMultiListItem:!0,isFooterList:t},s.headline))})]})},p=({isFooterList:a=!1,isPatternPart:e=!1,className:n,id:r,...t})=>e?l.jsx("div",{className:i("zep-flex-col","zep-flex","zep-gap-2","sm:zep-gap-3","xl:zep-gap-4",n),children:l.jsx(u,{...t,isPatternPart:e,isFooterList:a})}):l.jsx(g,{id:r,className:i("zep-flex-col","zep-flex","zep-gap-2","sm:zep-gap-3","xl:zep-gap-4",n),children:l.jsx(u,{...t,isPatternPart:e,isFooterList:a})});try{p.displayName="MultiLinkList",p.__docgenInfo={description:"",displayName:"MultiLinkList",props:{linkLists:{defaultValue:null,description:"",name:"linkLists",required:!0,type:{name:"LinkListItemProps[]"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZPS_BG"'},{value:'"CAT_BG"'}]}},isPatternPart:{defaultValue:{value:"false"},description:"",name:"isPatternPart",required:!1,type:{name:"boolean"}},linkListItemClassname:{defaultValue:null,description:"",name:"linkListItemClassname",required:!1,type:{name:"string"}},isFooterList:{defaultValue:{value:"false"},description:"",name:"isFooterList",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}}}}}catch{}export{p as M};
