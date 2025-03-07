import{j as a}from"./jsx-runtime-1a9d9a93.js";import{r as d}from"./index-8b3efc3f.js";import{E as V}from"./index.es2-5a03f684.js";import{i as c}from"./index.es18-4b39ea0e.js";import{G as k,L as v}from"./global-variants-893e06e6.js";import{L as C}from"./Layout-7f280280.js";import{u as N,a as _,M}from"./used-machine-locales-f263dd8e.js";import{G as A}from"./Gallery-6c56ca58.js";import{U as L,C as E}from"./UsedMachineDescription-0a230480.js";import{B as f,Z as g}from"./ZpsButton-91fac0e6.js";import"./_commonjsHelpers-de833af9.js";import"./index.es31-95f1013f.js";import"./index.es13-3580608c.js";import"./index.es32-fbb642fb.js";import"./index.es74-b2c6e214.js";import"./index.es24-01fa0cce.js";import"./index.es35-79e31a69.js";import"./clsx-0839fdbe.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";const h=({headline:l,children:p})=>a.jsxs("div",{className:"zep-flex zep-flex-col md:zep-flex-row zep-gap-1.5 sm:zep-gap-2.5 md:zep-gap-1.5 xl:zep-gap-5",children:[a.jsx("h2",{className:"xl:zep-w-[578px] md:zep-w-[434px] zep-break-all zep-w-full zep-typography-headlineMD-fluid-cqi zep-text-primary-default",children:l}),a.jsx("div",{className:"zep-flex-grow",children:p})]}),s=({items:l,onExposeClick:p,onOfferClick:z,description:o,...i})=>{const t=d.useMemo(()=>N[i.locale],[i.locale]),b=d.useMemo(()=>o.split(";"),[o]),j=["generalInformation","productParameter","location"],u={generalInformation:["manufacturer","serialNumber","gNumber","status","availability","year","operatingHours","certification"],productParameter:["fuel","power","electricalPower","frequencyRange","frequency","rating","speed","voltage","weight"],location:["country","city","postalCode"]},q=(e,r)=>{switch(r){case"power":return e?`${e}kW`:"-";case"electricalPower":return e?`${e}kVA`:"-";case"operatingHours":return e?`${e}h`:"-";case"frequency":return e?`${e||"-"}hz`:"-";case"speed":return e?`${e}u/min`:"-";case"weight":return e?`${e}kg`:"-";case"voltage":return e?`${e}V`:"-";case"fuel":case"category":case"type":case"rating":return e?t[e]:"-";default:return e||"-"}};return a.jsxs(C,{className:"zep-flex zep-flex-col xl:zep-gap-7.5 md:zep-gap-5 sm:zep-gap-4 zep-gap-3.5",testId:"zep-used-machine-info",children:[a.jsxs("div",{className:"zep-flex md:zep-flex-row zep-flex-col xl:zep-gap-5 sm:zep-gap-2.5 zep-gap-1.5",children:[a.jsx("div",{className:"xl:zep-w-[52%] md:zep-w-[56%] zep-w-full md:zep-aspect-[4/3]",children:a.jsx(A,{className:"md:zep-h-full",items:l,variant:k.Cat})}),a.jsxs("div",{className:"zep-flex-grow zep-h-fit zep-flex zep-flex-col md:zep-gap-2.5 zep-gap-1",children:[a.jsx(L,{boldLabel:!0,...i}),a.jsxs("div",{className:"zep-flex zep-gap-1 sm:zep-flex-row zep-flex-col",children:[a.jsx(f,{onClick:p,variant:g.SecondaryCat,children:t.expose}),a.jsx(f,{onClick:z,variant:g.Primary,children:t.requestOffer})]})]})]}),a.jsx(h,{headline:t.description,children:a.jsx(c,{type:"bullet",children:b.map((e,r)=>a.jsx(c.Item,{className:"zep-text-primary-default",children:e},r))})}),a.jsx(h,{headline:t.productSpecification,children:a.jsx(V,{className:"zep-text-primary-default",items:j.map(e=>({title:t[e],content:a.jsx("table",{className:"zep-w-full",children:u[e].map((r,m)=>a.jsx(E,{hideBorder:m===u[e].length-1,boldLabel:!0,label:t[r],value:q(i[r],r)},m))})}))})})]})};try{s.displayName="UsedMachineInfo",s.__docgenInfo={description:"",displayName:"UsedMachineInfo",props:{onExposeClick:{defaultValue:null,description:"",name:"onExposeClick",required:!0,type:{name:"(ev: MouseEvent<HTMLElement, MouseEvent>) => void"}},onOfferClick:{defaultValue:null,description:"",name:"onOfferClick",required:!0,type:{name:"(ev: MouseEvent<HTMLElement, MouseEvent>) => void"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"GalleryImage[]"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},boldLabel:{defaultValue:null,description:"",name:"boldLabel",required:!1,type:{name:"boolean"}},availability:{defaultValue:null,description:"",name:"availability",required:!1,type:{name:"string"}},category:{defaultValue:null,description:"",name:"category",required:!0,type:{name:"enum",value:[{value:'"genset"'},{value:'"engine"'},{value:'"accessory"'}]}},certification:{defaultValue:null,description:"",name:"certification",required:!1,type:{name:"string"}},city:{defaultValue:null,description:"",name:"city",required:!0,type:{name:"string"}},country:{defaultValue:null,description:"",name:"country",required:!0,type:{name:"string"}},frequency:{defaultValue:null,description:"",name:"frequency",required:!1,type:{name:"string"}},frequencyRange:{defaultValue:null,description:"",name:"frequencyRange",required:!1,type:{name:"string"}},fuel:{defaultValue:null,description:"",name:"fuel",required:!1,type:{name:"enum",value:[{value:'"diesel"'},{value:'"gas"'},{value:'"dual fuel"'}]}},gNumber:{defaultValue:null,description:"",name:"gNumber",required:!1,type:{name:"string"}},isMarine:{defaultValue:null,description:"",name:"isMarine",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:"",name:"locale",required:!0,type:{name:"enum",value:[{value:'"en"'},{value:'"de"'},{value:'"de-AT"'}]}},manufacturer:{defaultValue:null,description:"",name:"manufacturer",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},operatingHours:{defaultValue:null,description:"",name:"operatingHours",required:!1,type:{name:"number"}},postalCode:{defaultValue:null,description:"",name:"postalCode",required:!0,type:{name:"number"}},power:{defaultValue:null,description:"",name:"power",required:!1,type:{name:"number"}},rating:{defaultValue:null,description:"",name:"rating",required:!1,type:{name:"enum",value:[{value:'"standby"'},{value:'"continuous"'},{value:'"prime"'}]}},serialNumber:{defaultValue:null,description:"",name:"serialNumber",required:!1,type:{name:"string"}},speed:{defaultValue:null,description:"",name:"speed",required:!1,type:{name:"string"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"string"}},voltage:{defaultValue:null,description:"",name:"voltage",required:!1,type:{name:"string"}},weight:{defaultValue:null,description:"",name:"weight",required:!1,type:{name:"string"}},year:{defaultValue:null,description:"",name:"year",required:!0,type:{name:"number"}}}}}catch{}const ae={title:"Patterns/UsedMachineInfo",component:s,tags:["autodocs"],argTypes:{}},B=[{src:"https://images.unsplash.com/photo-1458571037713-913d8b481dc6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1920",sizes:"(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px",alt:"Alt 1",thumbnail:"https://images.unsplash.com/photo-1458571037713-913d8b481dc6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1920"},{src:"https://global.discourse-cdn.com/flex020/uploads/glideapps/original/2X/4/4936e0f28f79c8a2aa95582741091356d0ed61d8.jpeg",sizes:"(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px",alt:"Alt 2",thumbnail:"https://global.discourse-cdn.com/flex020/uploads/glideapps/original/2X/4/4936e0f28f79c8a2aa95582741091356d0ed61d8.jpeg"},{src:"https://img.freepik.com/premium-photo/photo-random-nature-hd-wallpaper-8k4k_915071-67156.jpg",sizes:"(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px",alt:"Alt 3",thumbnail:"https://img.freepik.com/premium-photo/photo-random-nature-hd-wallpaper-8k4k_915071-67156.jpg"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/800px-Altja_j%C3%B5gi_Lahemaal.jpg",sizes:"(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px",alt:"Alt 4",thumbnail:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/800px-Altja_j%C3%B5gi_Lahemaal.jpg"},{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0zWifWgK-Dbh0IuyJT-LHUnBlgz1j4LQ4Jg&s",sizes:"(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px",alt:"Alt 5",thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0zWifWgK-Dbh0IuyJT-LHUnBlgz1j4LQ4Jg&s"},{src:"https://w0.peakpx.com/wallpaper/935/576/HD-wallpaper-moorglade-world-space-liquitech-random-nature-abstract.jpg",sizes:"(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px",alt:"Alt 6",thumbnail:"https://w0.peakpx.com/wallpaper/935/576/HD-wallpaper-moorglade-world-space-liquitech-random-nature-abstract.jpg"},{src:"https://img.freepik.com/premium-photo/random-nature-hd-wallpaper-8k4k_1272857-172676.jpg",sizes:"(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px",alt:"Alt 7",thumbnail:"https://img.freepik.com/premium-photo/random-nature-hd-wallpaper-8k4k_1272857-172676.jpg"}],n={args:{items:B,power:260,rating:_.STAND_BY,operatingHours:50,city:"Bremen",country:"Deutschland",postalCode:28217,category:M.GEN_SET,locale:v.DE,year:2018,name:"C7.1",isMarine:!0,description:"G005893;CAT C7.1;SN: G9R08502;Arrg: 526-7.210;2018;0 V;0 kVA ;0;2.200 rpm;0 Hz;10 hours;condition: pre-owned"}};var x,y,w;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    items: galleryImages,
    power: 260,
    rating: MachineRating.STAND_BY,
    operatingHours: 50,
    city: 'Bremen',
    country: 'Deutschland',
    postalCode: 28217,
    category: MachineCategory.GEN_SET,
    locale: LocaleVariants.DE,
    year: 2018,
    name: 'C7.1',
    isMarine: true,
    description: 'G005893;CAT C7.1;SN: G9R08502;Arrg: 526-7.210;2018;0 V;0 kVA ;0;2.200 rpm;0 Hz;10 hours;condition: pre-owned'
  } as UsedMachineInfoProps
}`,...(w=(y=n.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const te=["Default"];export{n as Default,te as __namedExportsOrder,ae as default};
