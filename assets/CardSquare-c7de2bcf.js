import{j as a}from"./jsx-runtime-1a9d9a93.js";import{r as o}from"./index-8b3efc3f.js";import{c as g}from"./index-ff2c9236.js";import{c as s}from"./clsx-0839fdbe.js";import{G as d,a as m}from"./global-variants-0f433d85.js";import{b as z}from"./commonCSS-e8445c95.js";const h=""+new URL("yellow-right-arrow-98509e6d.svg",import.meta.url).href,v=e=>{const[t,i]=o.useState({width:0});return o.useEffect(()=>{const p=()=>{e.current&&i({width:e.current.offsetWidth||0})},n=new ResizeObserver(p);return e.current&&(n.observe(e.current),p()),()=>{n.disconnect()}},[e]),t},b={[d.Zps]:[z[m.ZpsBg],"group-hover:zep-bg-primary-hover"],[d.Cat]:[z[m.CatBg],"group-hover:zep-bg-neutral-dark-hover"]},c=g([`zep-flex
     zep-justify-between
     zep-items-center
     zep-absolute
     xl:zep-bottom-2.5
     xl:zep-left-2.5
     xl:zep-right-2.5
     md:zep-bottom-2
     md:zep-left-2
     md:zep-right-2
     zep-bottom-1.5
     zep-left-1.5
     zep-right-1.5
     zep-p-1.5
     zep-gap-1.5
     group-hover:zep-bg-none`],{variants:{variant:b},defaultVariants:{variant:d.Zps}}),x=({imageSrc:e,description:t,headline:i,imageAlt:p,variant:n,cardListsLength:l=0})=>{const u=o.useRef(null),{width:r}=v(u),f={"zep-py-1.5 zep-pr-1 zep-pl-1.5":r<400,"zep-py-2 zep-pr-1.5 zep-pl-2":r<500&&r>=400,"zep-py-2.5 zep-pr-2 zep-pl-2.5":r>=500};return a.jsxs("div",{className:s("zep-relative","zep-group","hover:zep-brightness-90","zep-w-full","zep-max-w-[399px]","zep-min-w-[290px]","sm:zep-min-w-[348px]","md:zep-min-w-[0]","zep-aspect-[1/1]","zep-@container","xl:zep-@container-normal",{"xl:zep-min-w-[500px] xl:zep-max-w-[700px]":l<=2,"xl:zep-min-w-[400px] xl:zep-max-w-[499px]":[3,5,6,9].includes(l),"md:zep-min-w-[400px] md:zep-max-w-[700px] md:zep-@container-normal":[0,1,2,4].includes(l)}),tabIndex:0,"data-testid":"zep-card-square",ref:u,children:[a.jsx("img",{className:"zep-object-cover zep-aspect-[1/1] zep-w-full zep-h-auto group-hover:zep-transition-all zep-duration-1000 group-hover:zep-brightness-90",src:e,alt:p,title:"construction site"}),a.jsxs("div",{className:s(c({variant:n}),f),children:[a.jsxs("div",{className:"zep-flex zep-flex-col zep-items-start zep-w-full zep-gap-1",children:[a.jsx("h4",{"data-testid":"card-square-headline",className:s("zep-typography-headlineMD-fluid-cqi","zep-text-background-light","zep-text-left"),children:i}),t&&a.jsx("p",{"data-testid":"card-square-description",className:s({"zep-hidden":r<350},"zep-typography-bodyText","zep-text-background-light","zep-text-left","zep-break-all"),children:t})]}),a.jsx("div",{className:"zep-transition group-hover:zep-translate-x-0.75",children:a.jsx("img",{src:h,alt:"yellow left arrow","data-testid":"zep-her-arrowIcon"})})]})]})};try{c.displayName="cardSquareCardCva",c.__docgenInfo={description:"",displayName:"cardSquareCardCva",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"GlobalVariants | null"}},class:{defaultValue:null,description:"",name:"class",required:!1,type:{name:"ClassValue"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"ClassValue"}}}}}catch{}try{x.displayName="CardSquare",x.__docgenInfo={description:"",displayName:"CardSquare",props:{imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!0,type:{name:"string"}},imageAlt:{defaultValue:null,description:"",name:"imageAlt",required:!0,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},cardListsLength:{defaultValue:{value:"0"},description:"",name:"cardListsLength",required:!1,type:{name:"number"}}}}}catch{}export{x as C};