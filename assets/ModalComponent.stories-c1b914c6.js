import{j as e}from"./jsx-runtime-1a9d9a93.js";import{S as c}from"./index.es4-4fdf4939.js";import{r as u}from"./index-8b3efc3f.js";import{b as z,l as f,n as h}from"./index.es16-626f95ca.js";import{B as x,Z as y}from"./ZpsButton-e9e53457.js";import"./index.es24-92afb159.js";import"./index.es30-95f1013f.js";import"./index.es13-f7a67de2.js";import"./_commonjsHelpers-de833af9.js";import"./index-ff2c9236.js";import"./clsx-0839fdbe.js";import"./tw-merge-1166cefb.js";const p=({isOpen:t,onClose:n,label:s,children:a})=>{if(!t)return null;const l=r=>{r.target===r.currentTarget&&n&&n()};return e.jsx("div",{"data-testid":"zep-modal-component",onClick:l,className:"zep-fixed zep-inset-[0] zep-w-full zep-h-full zep-z-10 zep-bg-darkgrey-500/40 zep-flex zep-items-center zep-justify-center",children:e.jsx("div",{className:"zep-relative zep-h-auto zep-w-full sm:zep-max-w-[768px] md:zep-max-w-[819px] xl:zep-w-[960px] zep-bg-greyscale-0 zep-max-h-[90vh] zep-overflow-y-auto",children:e.jsxs("div",{className:"zep-flex zep-justify-center zep-flex-col zep-px-1 zep-pt-1 zep-pb-2.5 sm:zep-px-1.5 sm:zep-pt-1.5 sm:zep-pb-2 lg:zep-p-3 xl:zep-p-4 zep-bg-greyscale-0",children:[e.jsx("div",{className:"zep-flex zep-justify-end zep-mb-[4px] zep-right-[0]",children:e.jsx(x,{icon:"close",className:"zep-h-3 zep-w-3 zep-mb-0.25 zep-cursor-pointer",label:"",onClick:n,title:"Button title",variant:y.SecondaryZps})}),e.jsx("div",{children:a}),e.jsx("span",{className:"zep-float-right",children:e.jsx(z,{className:"zep-float-right zep-underline zep-cursor-pointer",href:"#",label:s,hasIcon:!1,mode:f.Standalone,size:h.Small,onClick:n})})]})})})};try{p.displayName="ModalComponent",p.__docgenInfo={description:"",displayName:"ModalComponent",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}}}catch{}const I={title:"Components/ModalComponent",component:p,tags:["autodocs"]},g=t=>{const[n,s]=u.useState(!1),a=()=>s(!0),l=()=>{s(!1),t.onClose&&t.onClose()};return e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:a,children:"Open Modal"}),e.jsx(p,{isOpen:n,label:"Close",onClose:l,children:e.jsx("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."})})]})},o=g.bind({});o.args={isOpen:!1,onClose:()=>{}};var i,m,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    if (args.onClose) args.onClose();
  };
  return <>
      <Button onClick={handleOpen}>Open Modal</Button>
      <ModalComponent isOpen={open} label='Close' onClose={handleClose}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </ModalComponent>
    </>;
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const L=["Default"];export{o as Default,L as __namedExportsOrder,I as default};
