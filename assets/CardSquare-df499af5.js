import{j as a}from"./jsx-runtime-1a9d9a93.js";import{r as o}from"./index-8b3efc3f.js";import{c as f}from"./index-f96983da.js";import{c as n}from"./clsx-0839fdbe.js";import{G as d}from"./global-variants-0f433d85.js";const g=""+new URL("yellow-right-arrow-98509e6d.svg",import.meta.url).href,x=e=>{const[i,s]=o.useState({width:0});return o.useEffect(()=>{const t=()=>{e.current&&s({width:e.current.offsetWidth||0})},p=new ResizeObserver(t);return e.current&&(p.observe(e.current),t()),()=>{p.disconnect()}},[e]),i},h={[d.Zps]:["zep-bg-gradient-to-r zep-from-[rgb(32,27,52)] zep-to-[rgb(32,23,94)] group-hover:zep-bg-primary-hover"],[d.Cat]:["zep-bg-neutral-dark-default group-hover:zep-bg-neutral-dark-hover"]},u=f([`zep-flex
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
     group-hover:zep-bg-none`],{variants:{variant:h},defaultVariants:{variant:d.Zps}}),m=({imageSrc:e,description:i,headline:s,imageAlt:t,variant:p,cardListsLength:l=0})=>{const c=o.useRef(null),{width:r}=x(c),z={"zep-py-1.5 zep-pr-1 zep-pl-1.5":r<400,"zep-py-2 zep-pr-1.5 zep-pl-2":r<500&&r>=400,"zep-py-2.5 zep-pr-2 zep-pl-2.5":r>=500};return a.jsxs("div",{className:n("zep-relative","zep-group","hover:zep-brightness-90","zep-w-full","zep-max-w-[399px]","zep-min-w-[290px]","sm:zep-min-w-[348px]","md:zep-min-w-[0]","zep-@container","xl:zep-@container-normal",{"xl:zep-min-w-[500px] xl:zep-max-w-[700px]":l<=2,"xl:zep-min-w-[400px] xl:zep-max-w-[499px]":[3,5,6,9].includes(l),"md:zep-min-w-[400px] md:zep-max-w-[499px] md:zep-@container-normal":[0,1,2,4].includes(l)}),tabIndex:0,"data-testid":"zep-card-square",ref:c,children:[a.jsx("img",{className:"zep-object-cover zep-w-full zep-h-full group-hover:zep-transition-all zep-duration-1000 group-hover:zep-brightness-90",src:e,alt:t,title:"construction site"}),a.jsxs("div",{className:n(u({variant:p}),z),children:[a.jsxs("div",{className:"zep-flex zep-flex-col zep-items-start zep-w-full zep-gap-1",children:[a.jsx("h4",{"data-testid":"card-square-headline",className:n("zep-typography-headlineMD-fluid-cqi","zep-text-background-light","zep-text-left"),children:s}),a.jsx("p",{"data-testid":"card-square-description",className:n({"zep-hidden":r<350},"zep-typography-bodyText","zep-text-background-light","zep-text-left","zep-break-all"),children:i})]}),a.jsx("div",{className:"zep-transition group-hover:zep-translate-x-0.75",children:a.jsx("img",{src:g,alt:"yellow left arrow","data-testid":"zep-her-arrowIcon"})})]})]})};try{u.displayName="cardSquareCardCva",u.__docgenInfo={description:"",displayName:"cardSquareCardCva",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"GlobalVariants | null"}},class:{defaultValue:null,description:"",name:"class",required:!1,type:{name:"ClassValue"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"ClassValue"}}}}}catch{}try{m.displayName="CardSquare",m.__docgenInfo={description:"",displayName:"CardSquare",props:{imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!0,type:{name:"string"}},imageAlt:{defaultValue:null,description:"",name:"imageAlt",required:!0,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},cardListsLength:{defaultValue:{value:"0"},description:"",name:"cardListsLength",required:!1,type:{name:"number"}}}}}catch{}export{m as C};