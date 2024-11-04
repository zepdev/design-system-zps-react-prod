import{j as s,c as t}from"./clsx-490306ad.js";import{c as m}from"./index-b85febcc.js";import{G as r}from"./global-variants-42c1cda2.js";var a=(e=>(e.ZpsBg="ZPS_BG",e.CatBg="CAT_BG",e))(a||{});const y={[a.ZpsBg]:["zep-text-typography-light-100"],[a.CatBg]:["zep-text-typography-light-100"],[r.Zps]:["zep-text-indigo-500"],[r.Cat]:["zep-text-typography-dark-100"]},h={[r.Zps]:["zep-text-typography-brand-steel"],[r.Cat]:["zep-text-typography-light-70 zep-opacity-70"],[a.CatBg]:["zep-text-typography-light-70 zep-opacity-70"],[a.ZpsBg]:["zep-text-typography-light-70 zep-opacity-70"]},o=m(["zep-typography-headlineLG-fluid-cqi zep-break-all"],{variants:{variant:y},defaultVariants:{variant:r.Zps}}),d=m(["zep-mb-0.5 zep-typography-taglineMD zep-break-all"],{variants:{variant:h},defaultVariants:{variant:r.Zps}}),u=({tagline:e,headline:l,showArrow:n,className:i,variant:p=r.Zps})=>s.jsxs("div",{className:t("zep-flex","zep-items-center","xl:zep-gap-3.5","md:zep-gap-1.5","sm:zep-gap-2.5","zep-gap-1.5",i),"data-testid":"header-short-component",children:[n?s.jsx("img",{className:t("zep-h-4","sm:zep-h-5","md:zep-h-4","xl:zep-h-[100px]","zep-w-auto"),alt:"forward arrow",src:"./assets/moving-forward-arrow.svg"}):null,s.jsxs("div",{className:"zep-w-full",children:[e?s.jsx("h3",{className:t(d({variant:p}),"zep-mb-0.5","zep-typography-taglineMD","zep-break-all"),children:e}):null,l?s.jsx("h2",{className:o({variant:p}),children:l}):null]})]}),c=({className:e,variant:l=r.Zps,...n})=>{const i=n.showArrow?"md:zep-col-span-6":"md:zep-col-span-5",p={"zep-bg-background-gradient":l===a.ZpsBg,"zep-bg-background-dark":l===a.CatBg},g=l===a.CatBg||l===a.ZpsBg?"md:zep-py-5 sm:zep-py-4 zep-py-3":"";return s.jsx("div",{className:t("zep-container","zep-grid","zep-gap-1","sm:zep-gap-1.5","md:zep-gap-2","zep-grid-cols-4","sm:zep-grid-cols-8","md:zep-grid-cols-16",p,g,e),"data-testid":"header-short",children:s.jsx(u,{...n,variant:l,className:t("zep-col-span-4","sm:zep-col-span-8","md:zep-col-start-2","zep-px-1","sm:zep-px-1.5","md:zep-px-[0px]",i)})})};try{o.displayName="headlineClass",o.__docgenInfo={description:"",displayName:"headlineClass",props:{variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"HeaderShortVariants | GlobalVariants | null"}},class:{defaultValue:null,description:"",name:"class",required:!1,type:{name:"ClassValue"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"ClassValue"}}}}}catch{}try{d.displayName="taglineClass",d.__docgenInfo={description:"",displayName:"taglineClass",props:{variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"HeaderShortVariants | GlobalVariants | null"}},class:{defaultValue:null,description:"",name:"class",required:!1,type:{name:"ClassValue"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"ClassValue"}}}}}catch{}try{u.displayName="HeaderShortComponent",u.__docgenInfo={description:"",displayName:"HeaderShortComponent",props:{variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS_BG"'},{value:'"CAT_BG"'},{value:'"ZPS"'},{value:'"CAT"'}]}},hasBackground:{defaultValue:null,description:"",name:"hasBackground",required:!1,type:{name:"boolean"}},showArrow:{defaultValue:null,description:"",name:"showArrow",required:!1,type:{name:"boolean"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{c.displayName="HeaderShort",c.__docgenInfo={description:"",displayName:"HeaderShort",props:{variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS_BG"'},{value:'"CAT_BG"'},{value:'"ZPS"'},{value:'"CAT"'}]}},hasBackground:{defaultValue:null,description:"",name:"hasBackground",required:!1,type:{name:"boolean"}},showArrow:{defaultValue:null,description:"",name:"showArrow",required:!1,type:{name:"boolean"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{c as H,a,u as b};
//# sourceMappingURL=HeaderShort-216c82e5.js.map
