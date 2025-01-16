import{j as e}from"./jsx-runtime-1a9d9a93.js";import{r as c}from"./index-8b3efc3f.js";import{c as n}from"./clsx-0839fdbe.js";import{M as x,u as C}from"./used-machine-locales-b3df33e6.js";const r=({boldLabel:l=!1,label:i,value:p,className:s,hideBorder:u=!1})=>e.jsxs("tr",{className:n("zep-h-3","zep-text-primary-default",{"zep-border-b-1 zep-border-b-greyscale-400":!u},s),children:[e.jsx("th",{className:n("zep-text-left",l?"zep-typography-bodyStrong":"zep-typography-bodyText","xl:zep-px-1 sm:zep-pl-0.5 zep-pl-0.25"),children:i}),e.jsx("td",{className:n("zep-px-[14px]",l?"zep-typography-bodyText":"zep-typography-bodyStrong","zep-text-left"),children:p})]}),f=({category:l,locale:i,isMarine:p=!1,rating:s,operatingHours:u,power:o,year:y,city:g,country:m,name:h,boldLabel:t=!1})=>{const d=c.useMemo(()=>l===x.GEN_SET,[l]),a=c.useMemo(()=>C[i],[i]);return e.jsxs("div",{className:"zep-flex zep-flex-col xl:zep-gap-1 sm:zep-gap-0.5 zep-gap-1 zep-flex-grow",children:[e.jsxs("div",{className:"zep-flex zep-flex-col zep-gap-0.25",children:[e.jsxs("div",{className:"zep-flex zep-justify-between zep-items-center",children:[e.jsx("h4",{className:"zep-typography-taglineMD zep-text-primary-default",children:`CAT ${a[l]}`}),e.jsxs("div",{className:n("zep-flex","zep-items-center","zep-gap-0.25",{"zep-hidden":!p}),children:[e.jsxs("svg",{className:"zep-text-primary-default",width:"18",height:"16",viewBox:"0 0 18 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("mask",{id:"mask0_5635_15181",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"18",height:"16",children:e.jsx("rect",{width:"18",height:"16",fill:"#D9D9D9"})}),e.jsx("g",{mask:"url(#mask0_5635_15181)",children:e.jsx("path",{d:"M2.9268 12.3154L1.51375 8.03087C1.47656 7.90297 1.49206 7.75376 1.56023 7.58323C1.6284 7.4127 1.77405 7.29546 1.99716 7.23151L2.96398 6.94374V4.00211C2.96398 3.6504 3.10962 3.3493 3.40091 3.09884C3.6922 2.84837 4.04236 2.72314 4.4514 2.72314H6.68253V0.804688H11.1448V2.72314H13.3759C13.7849 2.72314 14.1351 2.84837 14.4264 3.09884C14.7177 3.3493 14.8633 3.6504 14.8633 4.00211V6.94374L15.8302 7.23151C16.0904 7.31678 16.2454 7.44201 16.295 7.60721C16.3446 7.77241 16.3507 7.91363 16.3136 8.03087L14.9005 12.3154C14.2808 12.3154 13.7168 12.1902 13.2086 11.9397C12.7004 11.6893 12.2603 11.3882 11.8885 11.0364C11.5166 11.3882 11.0766 11.6893 10.5684 11.9397C10.0602 12.1902 9.50862 12.3154 8.91365 12.3154C8.31869 12.3154 7.7671 12.1902 7.2589 11.9397C6.7507 11.6893 6.31067 11.3882 5.93882 11.0364C5.56696 11.3882 5.12693 11.6893 4.61873 11.9397C4.11053 12.1902 3.54655 12.3154 2.9268 12.3154ZM1.47656 14.8734V13.5944H2.96398C3.48458 13.5944 3.99898 13.5251 4.50718 13.3866C5.01538 13.248 5.49259 13.0402 5.93882 12.7631C6.38504 13.0402 6.86226 13.2427 7.37046 13.3706C7.87866 13.4985 8.39306 13.5624 8.91365 13.5624C9.43425 13.5624 9.94865 13.4985 10.4569 13.3706C10.9651 13.2427 11.4423 13.0402 11.8885 12.7631C12.3347 13.0402 12.8119 13.248 13.3201 13.3866C13.8283 13.5251 14.3427 13.5944 14.8633 13.5944H16.3507V14.8734H14.8633C14.3427 14.8734 13.8345 14.8201 13.3387 14.7135C12.8429 14.6069 12.3595 14.447 11.8885 14.2339C11.4175 14.447 10.931 14.6069 10.429 14.7135C9.92696 14.8201 9.42186 14.8734 8.91365 14.8734C8.40545 14.8734 7.90035 14.8201 7.39835 14.7135C6.89634 14.6069 6.40983 14.447 5.93882 14.2339C5.4678 14.447 4.98439 14.6069 4.48858 14.7135C3.99278 14.8201 3.48458 14.8734 2.96398 14.8734H1.47656ZM4.4514 6.52808L8.91365 5.28108L13.3759 6.52808V4.00211H4.4514V6.52808ZM8.91365 11.0364C9.49623 11.0364 9.98893 10.8606 10.3918 10.5089C10.7946 10.1572 11.2935 9.68287 11.8885 9.08602C12.4835 9.66155 12.8863 10.0559 13.097 10.2691C13.3077 10.4822 13.5618 10.6634 13.8593 10.8126L14.6774 8.25469L8.91365 6.624L3.11272 8.25469L3.96799 10.7807C4.26547 10.6314 4.51957 10.4609 4.73029 10.2691C4.94101 10.0772 5.34385 9.68287 5.93882 9.08602C6.55858 9.69353 7.06368 10.1705 7.45413 10.5169C7.84457 10.8633 8.33108 11.0364 8.91365 11.0364Z",fill:"currentColor"})})]}),e.jsx("span",{className:"zep-typography-supportText zep-text-primary-default",children:"Marine"})]})]}),e.jsx("h3",{className:"zep-typography-headlineMD-fluid-cqi zep-text-primary-default",children:h})]}),e.jsxs("table",{className:"zep-w-full",children:[e.jsx(r,{label:d?a.electricalPower:a.power,value:o?`${o} ${d?"kVA":"kW"}`:"-",boldLabel:t}),e.jsx(r,{className:n({"zep-hidden":!d}),label:a.rating,value:s?a[s]:"-",boldLabel:t}),e.jsx(r,{label:a.operatingHours,value:u?`${u}h`:"-",boldLabel:t}),e.jsx(r,{label:a.year,value:y,boldLabel:t}),e.jsx(r,{className:"md:zep-hidden",hideBorder:!0,label:a.location,value:m,boldLabel:t}),e.jsx(r,{className:"zep-hidden md:zep-table-row",hideBorder:!0,label:a.location,value:`${g}, ${m}`,boldLabel:t})]})]})};try{r.displayName="ContentRow",r.__docgenInfo={description:"",displayName:"ContentRow",props:{boldLabel:{defaultValue:{value:"false"},description:"",name:"boldLabel",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},hideBorder:{defaultValue:{value:"false"},description:"",name:"hideBorder",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | number"}}}}}catch{}try{f.displayName="UsedMachineDescription",f.__docgenInfo={description:"",displayName:"UsedMachineDescription",props:{boldLabel:{defaultValue:{value:"false"},description:"",name:"boldLabel",required:!1,type:{name:"boolean"}},availability:{defaultValue:null,description:"",name:"availability",required:!1,type:{name:"string"}},category:{defaultValue:null,description:"",name:"category",required:!0,type:{name:"enum",value:[{value:'"genset"'},{value:'"engine"'},{value:'"accessory"'}]}},certification:{defaultValue:null,description:"",name:"certification",required:!1,type:{name:"string"}},city:{defaultValue:null,description:"",name:"city",required:!0,type:{name:"string"}},country:{defaultValue:null,description:"",name:"country",required:!0,type:{name:"string"}},frequency:{defaultValue:null,description:"",name:"frequency",required:!1,type:{name:"string"}},frequencyRange:{defaultValue:null,description:"",name:"frequencyRange",required:!1,type:{name:"string"}},fuel:{defaultValue:null,description:"",name:"fuel",required:!1,type:{name:"enum",value:[{value:'"diesel"'},{value:'"gas"'},{value:'"dual fuel"'}]}},gNumber:{defaultValue:null,description:"",name:"gNumber",required:!1,type:{name:"string"}},isMarine:{defaultValue:{value:"false"},description:"",name:"isMarine",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:"",name:"locale",required:!0,type:{name:"enum",value:[{value:'"en"'},{value:'"de"'},{value:'"de_au"'}]}},manufacturer:{defaultValue:null,description:"",name:"manufacturer",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},operatingHours:{defaultValue:null,description:"",name:"operatingHours",required:!1,type:{name:"number"}},postalCode:{defaultValue:null,description:"",name:"postalCode",required:!0,type:{name:"number"}},power:{defaultValue:null,description:"",name:"power",required:!1,type:{name:"number"}},rating:{defaultValue:null,description:"",name:"rating",required:!1,type:{name:"enum",value:[{value:'"standby"'},{value:'"continuous"'},{value:'"prime"'}]}},serialNumber:{defaultValue:null,description:"",name:"serialNumber",required:!1,type:{name:"string"}},speed:{defaultValue:null,description:"",name:"speed",required:!1,type:{name:"string"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"string"}},voltage:{defaultValue:null,description:"",name:"voltage",required:!1,type:{name:"string"}},weight:{defaultValue:null,description:"",name:"weight",required:!1,type:{name:"string"}},year:{defaultValue:null,description:"",name:"year",required:!0,type:{name:"number"}}}}}catch{}export{r as C,f as U};
