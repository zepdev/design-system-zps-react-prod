import{j as e}from"./jsx-runtime-1a9d9a93.js";import{b as z,l as f}from"./index.es16-2c7a91d7.js";import{c as a}from"./clsx-0839fdbe.js";import{G as x}from"./global-variants-71b69725.js";import{t}from"./commonCSS-0b9dd3ad.js";const n=({imageSrc:p,imageAlt:r,date:s,location:d,headline:m,linkLabel:c,linkSrc:o,description:i,variant:l=x.Zps})=>{const u=i.length>250?i.slice(0,250)+"...":i;return e.jsxs("div",{"data-testid":"zep-card-event",className:a("zep-w-full","md:zep-flex","zep-px-1","zep-py-1.5","sm:zep-px-1.5","sm:zep-py-2.5","md:zep-px-2","xl:zep-p-3","md:zep-gap-2","xl:zep-gap-3"),children:[e.jsx("div",{style:{height:"fit-content"},className:"zep-block md:zep-flex md:zep-flex-shrink-0 md:zep-h-auto md:zep-w-1/5 zep-mb-1.5 sm:zep-mb-2 md:zep-mb-[0] zep-aspect-3.4",children:e.jsx("img",{src:p,alt:r,className:a("zep-w-full"),style:{height:"min-intrinsic",objectFit:"cover"},"data-testid":"zep-card-event-image"})}),e.jsxs("div",{className:a("zep-block","md:zep-flex","md:zep-flex-col","zep-max-w-[944px]","md:zep-w-4/5"),children:[e.jsx("h4",{className:a("zep-typography-headlineMD-fluid-cqi","zep-mb-1","sm:zep-mb-1.5","xl:zep-mb-3","zep-break-all",t[l]),"data-testid":"zep-card-event-headline",children:m}),e.jsxs("div",{className:a(t[l],"zep-inline-flex","zep-mb-1","zep-items-center","zep-typography-headlineSM-fluid-cqi"),children:[e.jsx("span",{children:s}),e.jsx("span",{className:"zep-ml-[6px] zep-mr-[8px] zep--mt-[4px]",children:"|"}),e.jsx("span",{children:d})]}),e.jsx("p",{className:a("zep-typography-bodyText","zep-mb-2","zep-break-words",t[l]),"data-testid":"zep-card-event-description",children:u}),e.jsx(z,{"data-testid":"zep-event-link",label:c||"",href:o,mode:f.Standalone,className:a(t[l],"zep-inline-block","zep-w-fit")})]})]})};try{n.displayName="CardEvent",n.__docgenInfo={description:"",displayName:"CardEvent",props:{imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!0,type:{name:"string"}},imageAlt:{defaultValue:null,description:"",name:"imageAlt",required:!0,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},date:{defaultValue:null,description:"",name:"date",required:!1,type:{name:"string"}},location:{defaultValue:null,description:"",name:"location",required:!1,type:{name:"string"}},linkLabel:{defaultValue:null,description:"",name:"linkLabel",required:!1,type:{name:"string"}},linkSrc:{defaultValue:null,description:"",name:"linkSrc",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{n as C};