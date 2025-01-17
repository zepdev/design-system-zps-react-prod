import{j as e}from"./jsx-runtime-1a9d9a93.js";import{r as S}from"./index-8b3efc3f.js";import{c as i}from"./clsx-0839fdbe.js";import{L as d}from"./global-variants-71b69725.js";import"./_commonjsHelpers-de833af9.js";var t=(a=>(a.STAND_BY="standby",a.CONTINUOUS="continuous",a.PRIME="prime",a))(t||{}),r=(a=>(a.GEN_SET="genset",a.ENGINE="engine",a.ACCESSORY="accessory",a))(r||{}),s=(a=>(a.DIESEL="diesel",a.GAS="gas",a.DUAL_FUEL="dual fuel",a))(s||{}),l=(a=>(a.STATIONARY="stationary",a.MOBILE="mobile",a))(l||{});const w={[d.EN]:{power:"Power",electricalPower:"Electrical Power",rating:"Rating",operatingHours:"Operating Hours",year:"Manufacture Year",location:"Location",category:"Category",fuel:"Fuel",[s.DIESEL]:"Diesel",[s.GAS]:"Gas",[s.DUAL_FUEL]:"Dual Fuel",results:"Results",type:"Type",[l.STATIONARY]:"Stationary",[l.MOBILE]:"Mobile",engines:"Engines",genSets:"GenSets",accessories:"Accessories",[r.GEN_SET]:"GenSet",[r.ENGINE]:"Engine",[r.ACCESSORY]:"Accessory",[t.PRIME]:"Prime",[t.CONTINUOUS]:"Continuous",[t.STAND_BY]:"Standby",sortBy:"Sort by",priceAscending:"Price Ascending",priceDescending:"Price Descending",powerInKVA:"Power in kVA",electricalPowerInkW:"Electrical Power in kW"},[d.DE]:{power:"Leistung",electricalPower:"Leistung elektr.",rating:"Rating",operatingHours:"Betriebsstunden",year:"Baujahr",location:"Standort",category:"Kategorie",fuel:"Kraftstoff",[s.DIESEL]:"Diesel",[s.GAS]:"Erdgas",[s.DUAL_FUEL]:"Dual Kraftstoff",results:"Ergebnisse",type:"Typ",[l.STATIONARY]:"Stationär",[l.MOBILE]:"Mobil",engines:"Motoren",genSets:"Stromaggregate",accessories:"Zubehoör",[r.GEN_SET]:"Stromaggregat",[r.ENGINE]:"Motor",[r.ACCESSORY]:"Zubehör",[t.PRIME]:"Prime",[t.CONTINUOUS]:"Continuous",[t.STAND_BY]:"Standby",sortBy:"Sortieren nach",priceAscending:"Preis aufsteigend",priceDescending:"Preis",powerInKVA:"Leistung in kVA",electricalPowerInkW:"Leistung elektrische in kW"},[d.DE_AU]:{power:"Leistung",electricalPower:"Leistung elektr.",rating:"Rating",operatingHours:"Betriebsstunden",year:"Baujahr",location:"Standort",category:"Kategorie",fuel:"Kraftstoff",[s.DIESEL]:"Diesel",[s.GAS]:"Erdgas",[s.DUAL_FUEL]:"Dual Kraftstoff",results:"Ergebnisse",type:"Typ",[l.STATIONARY]:"Stationär",[l.MOBILE]:"Mobil",engines:"Motoren",genSets:"Stromaggregate",accessories:"Zubehoör",[r.GEN_SET]:"Stromaggregat",[r.ENGINE]:"Motor",[r.ACCESSORY]:"Zubehör",[t.PRIME]:"Prime",[t.CONTINUOUS]:"Continuous",[t.STAND_BY]:"Standby",sortBy:"Sortieren nach",priceAscending:"Preis aufsteigend",priceDescending:"Preis absteigend",powerInKVA:"Leistung in kVA",electricalPowerInkW:"Leistung elektrische in kW"}},o=({label:a,value:p,className:u,hideBorder:m=!1})=>e.jsxs("tr",{className:i("zep-h-3","zep-text-primary-default",{"zep-border-b-1 zep-border-b-greyscale-400":!m},u),children:[e.jsx("th",{className:i("zep-text-left","zep-typography-bodyText","xl:zep-px-1 sm:zep-pl-0.5 zep-pl-0.25"),children:a}),e.jsx("td",{className:i("zep-px-[14px]","zep-typography-bodyStrong","zep-text-left"),children:p})]}),x=({rating:a,operatingHours:p,power:u,year:m,location:g,name:z,category:y,locale:C,imageSrc:b,isMarine:v=!1})=>{const f=S.useMemo(()=>y===r.GEN_SET,[y]),n=S.useMemo(()=>w[C],[C]);return e.jsxs("div",{className:i("zep-bg-greyscale-0","xl:zep-p-2.5 zep-p-1","zep-flex","sm:zep-flex-row zep-flex-col","xl:zep-gap-2.5 zep-gap-1","zep-w-full","md:zep-max-w-[1066px] sm:zep-max-w-[720px]"),"data-testid":"zep-used-machine-card",children:[e.jsx("div",{className:i("md:zep-w-[35%] sm:zep-w-[30%] zep-w-full"),children:e.jsx("img",{className:"zep-w-full zep-object-cover zep-aspect-[16/9]","data-testid":"zep-used-machine-card-image",src:b,alt:z})}),e.jsxs("div",{className:"zep-flex zep-flex-col xl:zep-gap-1 sm:zep-gap-0.5 zep-gap-1 zep-flex-grow",children:[e.jsxs("div",{className:"zep-flex zep-flex-col zep-gap-0.25",children:[e.jsxs("div",{className:"zep-flex zep-justify-between zep-items-center",children:[e.jsx("h4",{className:"zep-typography-taglineMD zep-text-primary-default",children:`CAT ${n[y]}`}),e.jsxs("div",{className:i("zep-flex","zep-items-center","zep-gap-0.25",{"zep-hidden":!v}),children:[e.jsxs("svg",{className:"zep-text-primary-default",width:"18",height:"16",viewBox:"0 0 18 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("mask",{id:"mask0_5635_15181",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"18",height:"16",children:e.jsx("rect",{width:"18",height:"16",fill:"#D9D9D9"})}),e.jsx("g",{mask:"url(#mask0_5635_15181)",children:e.jsx("path",{d:"M2.9268 12.3154L1.51375 8.03087C1.47656 7.90297 1.49206 7.75376 1.56023 7.58323C1.6284 7.4127 1.77405 7.29546 1.99716 7.23151L2.96398 6.94374V4.00211C2.96398 3.6504 3.10962 3.3493 3.40091 3.09884C3.6922 2.84837 4.04236 2.72314 4.4514 2.72314H6.68253V0.804688H11.1448V2.72314H13.3759C13.7849 2.72314 14.1351 2.84837 14.4264 3.09884C14.7177 3.3493 14.8633 3.6504 14.8633 4.00211V6.94374L15.8302 7.23151C16.0904 7.31678 16.2454 7.44201 16.295 7.60721C16.3446 7.77241 16.3507 7.91363 16.3136 8.03087L14.9005 12.3154C14.2808 12.3154 13.7168 12.1902 13.2086 11.9397C12.7004 11.6893 12.2603 11.3882 11.8885 11.0364C11.5166 11.3882 11.0766 11.6893 10.5684 11.9397C10.0602 12.1902 9.50862 12.3154 8.91365 12.3154C8.31869 12.3154 7.7671 12.1902 7.2589 11.9397C6.7507 11.6893 6.31067 11.3882 5.93882 11.0364C5.56696 11.3882 5.12693 11.6893 4.61873 11.9397C4.11053 12.1902 3.54655 12.3154 2.9268 12.3154ZM1.47656 14.8734V13.5944H2.96398C3.48458 13.5944 3.99898 13.5251 4.50718 13.3866C5.01538 13.248 5.49259 13.0402 5.93882 12.7631C6.38504 13.0402 6.86226 13.2427 7.37046 13.3706C7.87866 13.4985 8.39306 13.5624 8.91365 13.5624C9.43425 13.5624 9.94865 13.4985 10.4569 13.3706C10.9651 13.2427 11.4423 13.0402 11.8885 12.7631C12.3347 13.0402 12.8119 13.248 13.3201 13.3866C13.8283 13.5251 14.3427 13.5944 14.8633 13.5944H16.3507V14.8734H14.8633C14.3427 14.8734 13.8345 14.8201 13.3387 14.7135C12.8429 14.6069 12.3595 14.447 11.8885 14.2339C11.4175 14.447 10.931 14.6069 10.429 14.7135C9.92696 14.8201 9.42186 14.8734 8.91365 14.8734C8.40545 14.8734 7.90035 14.8201 7.39835 14.7135C6.89634 14.6069 6.40983 14.447 5.93882 14.2339C5.4678 14.447 4.98439 14.6069 4.48858 14.7135C3.99278 14.8201 3.48458 14.8734 2.96398 14.8734H1.47656ZM4.4514 6.52808L8.91365 5.28108L13.3759 6.52808V4.00211H4.4514V6.52808ZM8.91365 11.0364C9.49623 11.0364 9.98893 10.8606 10.3918 10.5089C10.7946 10.1572 11.2935 9.68287 11.8885 9.08602C12.4835 9.66155 12.8863 10.0559 13.097 10.2691C13.3077 10.4822 13.5618 10.6634 13.8593 10.8126L14.6774 8.25469L8.91365 6.624L3.11272 8.25469L3.96799 10.7807C4.26547 10.6314 4.51957 10.4609 4.73029 10.2691C4.94101 10.0772 5.34385 9.68287 5.93882 9.08602C6.55858 9.69353 7.06368 10.1705 7.45413 10.5169C7.84457 10.8633 8.33108 11.0364 8.91365 11.0364Z",fill:"currentColor"})})]}),e.jsx("span",{className:"zep-typography-supportText zep-text-primary-default",children:"Marine"})]})]}),e.jsx("h3",{className:"zep-typography-headlineMD-fluid-cqi zep-text-primary-default",children:z})]}),e.jsxs("table",{className:"zep-w-full",children:[e.jsx(o,{label:f?n.electricalPower:n.power,value:u?`${u} ${f?"kVA":"kW"}`:"-"}),e.jsx(o,{className:i({"zep-hidden":!f}),label:n.rating,value:a?n[a]:"-"}),e.jsx(o,{label:n.operatingHours,value:p?`${p}h`:"-"}),e.jsx(o,{label:n.year,value:m}),e.jsx(o,{className:"md:zep-hidden",hideBorder:!0,label:n.location,value:g.country}),e.jsx(o,{className:"zep-hidden md:zep-table-row",hideBorder:!0,label:n.location,value:`${g.city}, ${g.country}`})]})]})]})};try{x.displayName="UsedMachineCard",x.__docgenInfo={description:"",displayName:"UsedMachineCard",props:{imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!0,type:{name:"string"}},category:{defaultValue:null,description:"",name:"category",required:!0,type:{name:"enum",value:[{value:'"genset"'},{value:'"engine"'},{value:'"accessory"'}]}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},power:{defaultValue:null,description:"",name:"power",required:!1,type:{name:"number"}},rating:{defaultValue:null,description:"",name:"rating",required:!1,type:{name:"enum",value:[{value:'"standby"'},{value:'"continuous"'},{value:'"prime"'}]}},year:{defaultValue:null,description:"",name:"year",required:!0,type:{name:"number"}},operatingHours:{defaultValue:null,description:"",name:"operatingHours",required:!1,type:{name:"number"}},location:{defaultValue:null,description:"",name:"location",required:!0,type:{name:"{ city: string; country: string; }"}},fuel:{defaultValue:null,description:"",name:"fuel",required:!1,type:{name:"enum",value:[{value:'"diesel"'},{value:'"gas"'},{value:'"dual fuel"'}]}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"stationary"'},{value:'"mobile"'}]}},price:{defaultValue:null,description:"",name:"price",required:!0,type:{name:"string"}},isMarine:{defaultValue:{value:"false"},description:"",name:"isMarine",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:"",name:"locale",required:!0,type:{name:"enum",value:[{value:'"en"'},{value:'"de"'},{value:'"de_au"'}]}}}}}catch{}const I={title:"Components/UsedMachineCard",component:x,tags:["autodocs"],argTypes:{}},c={decorators:a=>e.jsx("div",{className:"xl:zep-p-[122px] md:zep-p-4 sm:zep-p-1.5 zep-p-1 zep-bg-greyscale-400",children:e.jsx(a,{})}),args:{imageSrc:"./assets/image-4_3.png",power:260,rating:t.STAND_BY,operatingHours:50,location:{city:"Bremen",country:"Deutschland"},category:r.GEN_SET,locale:d.DE,year:2018,name:"C7.1",isMarine:!0}};var E,h,N;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  decorators: Story => <div className="xl:zep-p-[122px] md:zep-p-4 sm:zep-p-1.5 zep-p-1 zep-bg-greyscale-400">
      <Story />
    </div>,
  args: {
    imageSrc: './assets/image-4_3.png',
    power: 260,
    rating: MachineRating.STAND_BY,
    operatingHours: 50,
    location: {
      city: 'Bremen',
      country: 'Deutschland'
    },
    category: MachineCategory.GEN_SET,
    locale: LocaleVariants.DE,
    year: 2018,
    name: 'C7.1',
    isMarine: true
  } as UsedMachineCardProps
}`,...(N=(h=c.parameters)==null?void 0:h.docs)==null?void 0:N.source}}};const T=["Default"];export{c as Default,T as __namedExportsOrder,I as default};