import{j as e}from"./jsx-runtime-1a9d9a93.js";import{b as i,l as o,n as z}from"./index.es16-c32b359c.js";import{B as c,Z as m}from"./ZpsButton-b29313d9.js";const t=({isOpen:a,onClose:p,label:r,children:s})=>{if(!a)return null;const n=l=>{l.target===l.currentTarget&&p&&p()};return e.jsx("div",{"data-testid":"zep-modal-component",onClick:n,className:"zep-fixed zep-inset-[0] zep-w-full zep-h-full zep-z-10 zep-bg-darkgrey-500/40 zep-flex zep-items-center zep-justify-center",children:e.jsx("div",{className:"zep-relative zep-h-auto zep-w-full sm:zep-max-w-[768px] md:zep-max-w-[819px] xl:zep-w-[960px] zep-bg-greyscale-0 zep-max-h-[90vh] zep-overflow-y-auto",children:e.jsxs("div",{className:"zep-flex zep-justify-center zep-flex-col zep-px-1 zep-pt-1 zep-pb-2.5 sm:zep-px-1.5 sm:zep-pt-1.5 sm:zep-pb-2 lg:zep-p-3 xl:zep-p-4 zep-bg-greyscale-0",children:[e.jsx("div",{className:"zep-flex zep-justify-end zep-mb-[4px] zep-right-[0]",children:e.jsx(c,{icon:"close",className:"zep-h-3 zep-w-3 zep-max-w-[64px] zep-mb-0.25 zep-cursor-pointer",label:"",onClick:p,title:"Button title",variant:m.SecondaryZps})}),e.jsx("div",{children:s}),e.jsx("span",{className:"zep-float-right zep-mt-1",children:e.jsx(i,{className:"zep-float-right zep-underline zep-cursor-pointer",href:"#",label:r,hasIcon:!1,mode:o.Standalone,size:z.Small,onClick:p})})]})})})};try{t.displayName="ModalComponent",t.__docgenInfo={description:"",displayName:"ModalComponent",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}}}catch{}export{t as M};