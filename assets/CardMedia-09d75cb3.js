import{j as e}from"./jsx-runtime-1a9d9a93.js";import{Z as g,a as n,l as f}from"./index.es16-10934590.js";import{c as a}from"./clsx-0839fdbe.js";import{G as h}from"./global-variants-893e06e6.js";import{t as i}from"./commonCSS-cc68a568.js";import{g as y}from"./getUrlWithTrailingSlash-6cb3eda2.js";const p=({imageSrc:r,imageAlt:d,imageOrientation:s="horizontal",className:m,headline:o,linkSrc:l,linkText:u,description:c,linkType:x="internal-link",variant:t=h.Zps})=>{const z=s==="horizontal"?"zep-h-[116px] md:zep-h-[132px] lg:zep-h-[148px]":"zep-aspect-[100/141]";return e.jsxs("div",{className:a("zep-px-1.5","md:zep-px-2","lg:zep-px-3","zep-py-2","xl:zep-py-3","zep-flex","zep-flex-col","zep-gap-2","zep-flex-grow","zep-bg-greyscale-0","zep-min-w-[280px]","md:zep-max-w-[330px]","md:zep-min-w-[300px]","lg:zep-max-w-[538px]","lg:zep-min-w-[525px]",m),"data-testid":"card-media",children:[e.jsx("img",{src:r,alt:d,className:a(z,"zep-w-full","lg:zep-max-w-[377px]","lg:zep-mx-2","zep-object-cover"),"data-testid":"card-media-image"}),e.jsxs("div",{className:a("zep-flex","zep-flex-col","zep-gap-1","zep-items-start"),children:[e.jsx("h4",{className:a("zep-typography-headlineXS-fluid-cqi","zep-hyphens-auto","zep-break-normal",i[t]),"data-testid":"card-media-headline",children:o}),e.jsx("p",{className:a("zep-typography-bodyText","zep-hyphens-auto","zep-break-normal",i[t]),"data-testid":"card-media-description",children:c})]}),e.jsx(g,{target:l!=null&&l.startsWith("http")?n.Blank:n.Self,"data-testid":"card-media-link",label:u,href:y(l),mode:f.Standalone,className:a(i[t]),download:x==="download"})]})};try{p.displayName="CardMedia",p.__docgenInfo={description:"",displayName:"CardMedia",props:{imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!0,type:{name:"string"}},imageAlt:{defaultValue:null,description:"",name:"imageAlt",required:!0,type:{name:"string"}},imageOrientation:{defaultValue:{value:"horizontal"},description:"",name:"imageOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!0,type:{name:"string"}},linkSrc:{defaultValue:null,description:"",name:"linkSrc",required:!0,type:{name:"string"}},linkType:{defaultValue:{value:"internal-link"},description:"",name:"linkType",required:!1,type:{name:"enum",value:[{value:'"external-link"'},{value:'"download"'},{value:'"internal-link"'}]}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{p as C};
