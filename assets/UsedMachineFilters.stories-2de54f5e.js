import{j as m}from"./clsx-36b9529f.js";import{U as n}from"./UsedMachineFilters-641f7a10.js";import{L as p}from"./global-variants-893e06e6.js";import{r as l}from"./index-8b3efc3f.js";import{M as c}from"./used-machine-locales-5665be38.js";import"./index.es32-95f1013f.js";import"./index.es13-ec565e57.js";import"./index.es33-fbb642fb.js";import"./index.es16-64117911.js";import"./index.es17-40e95622.js";import"./useScreenSize-9b3efb94.js";import"./ZpsButton-6f8b5cb6.js";import"./index.es25-4d6bdba8.js";import"./index.es36-796b080a.js";import"./index-9eff14f9.js";import"./getDataLayer-2559cd39.js";import"./getUrlWithTrailingSlash-c6e10e92.js";import"./tw-merge-1166cefb.js";import"./Slider-8b4cc11a.js";import"./_commonjsHelpers-de833af9.js";const C={title:"Components/UsedMachineFilters",component:n,tags:["autodocs"],argTypes:{},decorators:[r=>{const[t,s]=l.useState({category:c.GEN_SET,power:{min:100,max:1e3},sort:void 0,fuel:[],rating:[],type:[]});return m.jsx(r,{value:t,setValue:s})}]},e={args:{locale:p.DE,powerOptions:{min:100,max:1e3,step:1}},render:(r,{value:t,setValue:s})=>m.jsx(n,{...r,setFilters:s,filters:t})};var o,a,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    locale: LocaleVariants.DE,
    powerOptions: {
      min: 100,
      max: 1000,
      step: 1
    }
  } as UsedMachineFiltersProps,
  render: (args, {
    value,
    setValue
  }) => <UsedMachineFilters {...args} setFilters={setValue} filters={value} />
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const T=["Default"];export{e as Default,T as __namedExportsOrder,C as default};
