import{j as o}from"./jsx-runtime-1a9d9a93.js";import{r as g}from"./index-8b3efc3f.js";import{L as G}from"./Layout-fc6ef0e0.js";import{u as z,M as n,a as c,b as l,c as p,d as w}from"./used-machine-locales-5665be38.js";import{U as B}from"./UsedMachineCard-452cd3a4.js";import{U as S}from"./UsedMachineFilters-1567fa5f.js";import{B as E,Z as M}from"./ZpsButton-954a0380.js";import{L as s}from"./global-variants-893e06e6.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-0839fdbe.js";import"./UsedMachineDescription-16f7ab83.js";import"./getUrlWithTrailingSlash-bc205b91.js";import"./index.es31-95f1013f.js";import"./index.es13-751bc762.js";import"./index.es32-fbb642fb.js";import"./index.es16-90aad98d.js";import"./Slider-166e2e5b.js";import"./index.es24-01fa0cce.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";const C=({setFilters:e,locale:i,filters:t,powerOptions:u,cards:a,total:r,currentTotal:d,setCurrentTotal:D,onContactExpertsClick:N})=>{const m=g.useMemo(()=>z[i],[i]),A=()=>{D(h=>h+10)};return o.jsxs(G,{testId:"zep-used-machine-pattern",className:"md:zep-flex xl:zep-gap-5 md:zep-gap-3 zep-py-3 sm:zep-py-4 md:zep-py-5",wrapperClassname:"zep-bg-greyscale-200",children:[o.jsx(S,{className:"zep-hidden md:zep-flex",setFilters:e,locale:i,filters:t,powerOptions:u}),o.jsxs("div",{className:"zep-grow zep-flex zep-flex-col zep-gap-2",children:[o.jsx("div",{className:"md:zep-hidden zep-flex zep-w-full zep-justify-between md:zep-items-end zep-items-center zep-text-primary-default",children:o.jsx(S,{setFilters:e,locale:i,filters:t,powerOptions:u})}),r>0?a.map((h,x)=>o.jsx(B,{...h},x)):o.jsxs("div",{className:"zep-flex zep-flex-col zep-gap-3",children:[o.jsxs("div",{className:"zep-text-primary-default zep-flex zep-flex-col zep-gap-2.5",children:[o.jsx("h3",{className:"zep-typography-headlineLG-fluid-cqi",children:m.zeroResultsFoundTitle}),o.jsx("p",{className:"zep-typography-bodyText",children:m.zeroResultsFoundDescription})]}),o.jsx(E,{onClick:N,className:"sm:!zep-w-fit",variant:M.Primary,children:m.contactExperts})]}),d<r&&o.jsx(E,{className:"sm:!zep-w-fit zep-self-center",variant:M.SecondaryZps,onClick:A,children:m.loadMore})]})]})};try{C.displayName="UsedMachinePattern",C.__docgenInfo={description:"",displayName:"UsedMachinePattern",props:{cards:{defaultValue:null,description:"",name:"cards",required:!0,type:{name:"UsedMachineCardProps[]"}},total:{defaultValue:null,description:"",name:"total",required:!0,type:{name:"number"}},currentTotal:{defaultValue:null,description:"",name:"currentTotal",required:!0,type:{name:"number"}},setCurrentTotal:{defaultValue:null,description:"",name:"setCurrentTotal",required:!0,type:{name:"Dispatch<SetStateAction<number>>"}},onContactExpertsClick:{defaultValue:null,description:"",name:"onContactExpertsClick",required:!0,type:{name:"(ev: MouseEvent<HTMLElement, MouseEvent>) => void"}},setFilters:{defaultValue:null,description:"",name:"setFilters",required:!0,type:{name:"Dispatch<SetStateAction<UsedMachineFiltersType>>"}},locale:{defaultValue:null,description:"",name:"locale",required:!0,type:{name:"enum",value:[{value:'"en"'},{value:'"de"'},{value:'"de-AT"'}]}},filters:{defaultValue:null,description:"",name:"filters",required:!0,type:{name:"UsedMachineFiltersType"}},powerOptions:{defaultValue:null,description:"",name:"powerOptions",required:!1,type:{name:'Omit<SliderProps, "value" | "label">'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const _=[{isMarine:!0,category:n.GEN_SET,locale:s.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,rating:c.STAND_BY,fuel:l.GAS,power:5e3,name:"Gen Set Machine 1",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:p.MOBILE,url:"",brand:"CAT"},{isMarine:!0,category:n.GEN_SET,locale:s.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,rating:c.CONTINUOUS,fuel:l.GAS,power:2e3,name:"Gen Set Machine 2",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:p.STATIONARY,url:"",brand:"CAT"},{isMarine:!0,category:n.ENGINE,locale:s.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,fuel:l.DIESEL,power:2e3,name:"Engine Machine 1",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",url:"",brand:"CAT"},{category:n.GEN_SET,locale:s.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,rating:c.PRIME,fuel:l.DUAL_FUEL,power:3e3,name:"Gen Set Machine 3",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:p.MOBILE,url:"",brand:"CAT"},{isMarine:!0,category:n.GEN_SET,locale:s.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,fuel:l.DIESEL,power:4e3,rating:c.CONTINUOUS,name:"Gen Set Machine 4",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:p.STATIONARY,url:"",brand:"CAT"},{category:n.ACCESSORY,locale:s.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,name:"Accessory",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",url:"",brand:"CAT"},{isMarine:!0,category:n.GEN_SET,locale:s.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,rating:c.STAND_BY,fuel:l.GAS,power:5e3,name:"Gen Set Machine 1",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:p.MOBILE,url:"",brand:"CAT"},{isMarine:!0,category:n.GEN_SET,locale:s.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,rating:c.STAND_BY,fuel:l.GAS,power:5e3,name:"Gen Set Machine 1",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:p.MOBILE,url:"",brand:"CAT"},{isMarine:!0,category:n.GEN_SET,locale:s.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,rating:c.STAND_BY,fuel:l.GAS,power:5e3,name:"Gen Set Machine 1",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:p.MOBILE,url:"",brand:"CAT"},{isMarine:!0,category:n.GEN_SET,locale:s.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,rating:c.STAND_BY,fuel:l.GAS,power:5e3,name:"Gen Set Machine 1",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:p.MOBILE,url:"",brand:"CAT"},{isMarine:!0,category:n.GEN_SET,locale:s.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,rating:c.STAND_BY,fuel:l.GAS,power:5e3,name:"Gen Set Machine 1",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:p.MOBILE,url:"",brand:"CAT"},{isMarine:!0,category:n.GEN_SET,locale:s.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,rating:c.STAND_BY,fuel:l.GAS,power:5e3,name:"Gen Set Machine 1",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:p.MOBILE,url:"",brand:"CAT"},{isMarine:!0,category:n.GEN_SET,locale:s.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,rating:c.STAND_BY,fuel:l.GAS,power:5e3,name:"Gen Set Machine 1",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:p.MOBILE,url:"",brand:"CAT"}],O=(e,i)=>{let t=_.filter(({category:a})=>a===e.category);e.category!==n.ACCESSORY&&(e.rating&&e.rating.length>0&&(t=t.filter(({rating:a})=>{var r;return a&&((r=e.rating)==null?void 0:r.includes(a))})),e.fuel&&e.fuel.length>0&&(t=t.filter(({fuel:a})=>{var r;return a&&((r=e.fuel)==null?void 0:r.includes(a))})),e.type&&e.category===n.GEN_SET&&e.type.length>0&&(t=t.filter(({type:a})=>{var r;return a&&((r=e.type)==null?void 0:r.includes(a))})),e.power&&(t=t.filter(({power:a})=>a&&a>=e.power.min&&a<=e.power.max))),e.sort&&(e.sort===w.POWER_ASCENDING?t=t.sort(({power:a=0},{power:r=0})=>a-r):t=t.sort(({power:a=0},{power:r=0})=>r-a));const u=t.length;return t=t.slice(0,i),{cards:t,total:u}},ae={title:"Patterns/UsedMachinePattern",component:C,tags:["autodocs"],argTypes:{},decorators:[e=>{const[i,t]=g.useState({category:n.GEN_SET,power:{min:100,max:1e4},type:[],sort:void 0,rating:[],fuel:[]}),[u,a]=g.useState(10),{cards:r,total:d}=g.useMemo(()=>O(i,u),[i,u]);return o.jsx(e,{cards:r,total:d,filters:i,setFilters:t,setCurrentTotal:a,currentTotal:u})}]},y={args:{locale:s.DE,powerOptions:{min:100,max:1e4,step:1}},render:(e,{filters:i,currentTotal:t,setFilters:u,cards:a,total:r,setCurrentTotal:d})=>o.jsx(C,{setCurrentTotal:d,currentTotal:t,total:r,cards:a,powerOptions:e.powerOptions,setFilters:u,locale:e.locale,filters:i,onContactExpertsClick:()=>console.log("click")})};var T,f,b;y.parameters={...y.parameters,docs:{...(T=y.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    locale: LocaleVariants.DE,
    powerOptions: {
      min: 100,
      max: 10000,
      step: 1
    }
  } as unknown as UsedMachinePatternProps,
  render: (args, {
    filters,
    currentTotal,
    setFilters,
    cards,
    total,
    setCurrentTotal
  }) => <UsedMachinePattern setCurrentTotal={setCurrentTotal} currentTotal={currentTotal} total={total} cards={cards} powerOptions={args.powerOptions} setFilters={setFilters} locale={args.locale} filters={filters} onContactExpertsClick={() => console.log('click')} />
}`,...(b=(f=y.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const te=["Default"];export{y as Default,te as __namedExportsOrder,ae as default};
