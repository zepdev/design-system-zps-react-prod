import{j as e}from"./jsx-runtime-1a9d9a93.js";import{B as i,Z as o}from"./ZpsButton-46d57800.js";const l=({isOpen:t,onClose:p,label:n,children:r})=>{if(!t)return null;const s=a=>{a.target===a.currentTarget&&p&&p()};return e.jsx("div",{"data-testid":"zep-modal-component",onClick:s,className:"zep-fixed zep-inset-[0] zep-w-full zep-h-full zep-z-[1500] zep-bg-darkgrey-500/40 zep-flex zep-items-center zep-justify-center",children:e.jsx("div",{className:"zep-relative zep-h-auto zep-w-full sm:zep-max-w-[768px] md:zep-max-w-[819px] xl:zep-w-[960px] zep-bg-greyscale-0 zep-max-h-[90vh] zep-overflow-y-auto",children:e.jsxs("div",{className:"zep-flex zep-justify-center zep-flex-col zep-px-1 zep-pt-1 zep-pb-2.5 sm:zep-px-1.5 sm:zep-pt-1.5 sm:zep-pb-2 lg:zep-p-3 xl:zep-p-4 zep-bg-greyscale-0",children:[e.jsx("div",{className:"zep-flex zep-justify-end zep-mb-[4px] zep-right-[0]",children:e.jsx(i,{icon:"close",className:"zep-max-h-3 zep-max-w-3 zep-mb-0.25 zep-cursor-pointer",label:"",onClick:p,title:"Button title",variant:o.SecondaryZps})}),e.jsx("div",{children:r}),e.jsx("span",{className:"zep-float-right zep-mt-1",children:e.jsx("button",{className:"zep-float-right zep-underline zep-cursor-pointer zep-decoration-[1px] zep-font-500 zep-text-0.875 zep-underline-offset-2 zep-mt-1",onClick:p,children:n})})]})})})};try{l.displayName="ModalComponent",l.__docgenInfo={description:"",displayName:"ModalComponent",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}}}catch{}export{l as M};
