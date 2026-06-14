import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as d}from"./index.es4--lIKBMKC.js";import{r as c}from"./index-BOnQTV8N.js";import{M as p}from"./ModalComponent-B8XyQ6WN.js";import"./index-yBjzXJbu.js";import"./index.es36-BF3AzYXZ.js";import"./index.es32-D9mbuw9C.js";import"./index.es13-DrwoFUlW.js";import"./index.es25-Cd1K6ALS.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./ZpsButton-BOmYG5pG.js";import"./index.es17-CiSAzvV-.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./getDataLayer-CP2Cgxnv.js";import"./getUrlWithTrailingSlash-D5oSkRKV.js";import"./linkSecurity-DjaWK124.js";import"./tw-merge-Ds6tgvmq.js";const D={title:"Components/ModalComponent",component:p,tags:["autodocs"]},u=t=>{const[m,o]=c.useState(!1),i=()=>o(!0),l=()=>{o(!1),t.onClose&&t.onClose()};return e.jsxs(e.Fragment,{children:[e.jsx(d,{onClick:i,children:"Open Modal"}),e.jsx(p,{isOpen:m,label:"Close",onClose:l,children:e.jsx("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."})})]})},n=u.bind({});n.args={isOpen:!1,onClose:()=>{}};var s,r,a;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
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
}`,...(a=(r=n.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const _=["Default"];export{n as Default,_ as __namedExportsOrder,D as default};
