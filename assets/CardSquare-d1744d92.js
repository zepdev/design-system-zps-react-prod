import{j as e,c as t}from"./clsx-36b9529f.js";import{c as x}from"./index-9eff14f9.js";import{r as v}from"./index-8b3efc3f.js";import{u as q}from"./useContainerDimensions-42dc9502.js";import{G as p,a as o}from"./global-variants-893e06e6.js";import{b as d}from"./commonCSS-cc68a568.js";import{g as _}from"./getDataLayer-1420585a.js";import{g as b}from"./getUrlWithTrailingSlash-1f1feb13.js";const C=""+new URL("yellow-right-arrow-98509e6d.svg",import.meta.url).href,V={[p.Zps]:[d[o.ZpsBg],"group-hover:zep-bg-primary-hover"],[p.Cat]:[d[o.CatBg],"group-hover:zep-bg-neutral-dark-hover"]},l=x([`zep-flex
     zep-justify-between
     zep-items-center
     zep-absolute
     zep-bottom-1
     zep-left-1
     zep-right-1
     zep-p-1.5
     zep-gap-1
     md:zep-gap-1.5
     group-hover:zep-bg-none`],{variants:{variant:V},defaultVariants:{variant:p.Zps}}),u=({imageSrc:r,description:n,headline:i,imageAlt:c,variant:m,url:z,gtmHeadline:g,gtmId:f})=>{const s=v.useRef(null),{width:a}=q(s),h={"zep-py-1 zep-pr-1 zep-pl-1":a<400,"zep-py-1.5 zep-pr-1.5 zep-pl-1.5":a<500&&a>=400,"zep-py-2 zep-pr-2 zep-pl-2":a>=500},y=_();return e.jsx("a",{href:b(z),target:"_self",className:t("zep-relative","zep-group","zep-w-full","zep-max-w-[700px]","zep-min-w-[290px]","sm:zep-min-w-[348px]","lg:zep-min-w-[330px]","zep-aspect-[1/1]","zep-@container","xl:zep-@container-normal"),onClickCapture:()=>{y.push({event:"interaction_tile",link_text:i,link_context:g,link_section:f})},"data-testid":"zep-card-square",children:e.jsxs("div",{tabIndex:0,ref:s,children:[e.jsx("img",{className:"zep-object-cover zep-aspect-[1/1] zep-w-full zep-h-auto group-hover:zep-transition-opacity zep-duration-1000 group-hover:zep-brightness-90",src:r,alt:c,title:"construction site"}),e.jsxs("div",{className:t(l({variant:m}),h),children:[e.jsxs("div",{className:"zep-flex zep-flex-col zep-items-start zep-w-full zep-gap-0.5",children:[e.jsx("h3",{"data-testid":"card-square-headline",className:"zep-text-background-light zep-text-left zep-typography-headlineMD-fluid-cqi zep-hyphens-auto zep-break-normal",children:i}),n&&e.jsx("p",{"data-testid":"card-square-description",className:t({"zep-hidden":a<330},"zep-typography-bodyText","zep-text-background-light","zep-text-left","zep-hyphens-auto","zep-break-normal"),children:n})]}),e.jsx("div",{className:"zep-transition group-hover:zep-translate-x-0.75",children:e.jsx("img",{src:C,alt:"yellow left arrow","data-testid":"zep-her-arrowIcon"})})]})]})})};try{l.displayName="cardSquareCardCva",l.__docgenInfo={description:"",displayName:"cardSquareCardCva",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"GlobalVariants | null"}},class:{defaultValue:null,description:"",name:"class",required:!1,type:{name:"ClassValue"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"ClassValue"}}}}}catch{}try{u.displayName="CardSquare",u.__docgenInfo={description:"",displayName:"CardSquare",props:{imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!0,type:{name:"string"}},imageAlt:{defaultValue:null,description:"",name:"imageAlt",required:!0,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}},gtmHeadline:{defaultValue:null,description:"",name:"gtmHeadline",required:!1,type:{name:"string"}},gtmId:{defaultValue:null,description:"",name:"gtmId",required:!1,type:{name:"string"}}}}}catch{}export{u as C};
