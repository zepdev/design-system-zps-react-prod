import{j as e}from"./jsx-runtime-1a9d9a93.js";import{G as n}from"./global-variants-0f433d85.js";import{c as g}from"./index-ff2c9236.js";import{r as z}from"./index-8b3efc3f.js";import{u as P}from"./useContainerDimensions-42dc9502.js";import{y as V,j as C}from"./index.es34-79e31a69.js";import{c as l}from"./clsx-0839fdbe.js";import"./_commonjsHelpers-de833af9.js";import"./index.es31-95f1013f.js";const T=C("zep-absolute zep-flex-col zep-drop-shadow-md zep-z-[1500]",{variants:{show:{true:"zep-flex sm:zep-hidden sm:group-hover:zep-flex",false:"zep-hidden sm:zep-hidden sm:group-hover:zep-flex"},align:{start:"zep-items-start zep-justify-start",center:"zep-items-center zep-justify-center",end:"zep-items-end zep-justify-end"},position:{top:"zep-bottom-[calc(100%_+_4px)]",right:"zep-left-[calc(100%_+_14px)]",bottom:"zep-top-[calc(100%_+_4px)]",left:"zep-right-[calc(100%_+_14px)]"},color:{light:"zep-bg-greyscale-0 zep-text-typography-dark-100",dark:"zep-bg-greyscale-900 zep-text-typography-light-100",zps:"zep-bg-primary-default zep-text-typography-light-100",cat:"zep-bg-background-dark zep-text-typography-light-100"}},defaultVariants:{align:"center",color:"dark"}}),q=C("zep-flex zep-absolute zep-box-border",{variants:{align:{start:"",center:"",end:""},position:{top:"zep-top-[100%]",right:"zep-right-[calc(100%_-_11px)] zep-rotate-90",bottom:"zep-bottom-[100%] zep-rotate-180",left:"zep-left-[calc(100%_-_11px)] -zep-rotate-90"},color:{light:"zep-text-typography-light-100",dark:"zep-text-typography-dark-100",zps:"zep-text-primary-default",cat:"zep-text-typography-dark-100"}},compoundVariants:[{align:"start",position:["left","right"],className:"zep-bottom-[calc(100%_-_12px)]"},{align:"end",position:["left","right"],className:"zep-top-[calc(100%_-_12px)]"}],defaultVariants:{position:"top",color:"dark"}}),k=()=>e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",fill:"currentColor"})}),Z=()=>e.jsx("svg",{width:"26",height:"5",viewBox:"0 0 26 5",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M8 0L12.2929 4.29289C12.6834 4.68342 13.3166 4.68342 13.7071 4.29289L18 0H8Z",fill:"currentColor"})}),S=({className:t,label:s,description:r,position:o,color:a,align:i,onClose:c,show:d})=>e.jsxs("div",{className:V(T({align:i,color:a,position:o,show:d}),t),children:[e.jsx("button",{className:"zep-flex sm:zep-hidden zep-self-end zep-m-0.5",onClick:c,children:e.jsx(k,{})}),e.jsxs("div",{className:"zep-max-w-[300px] zep-px-1 zep-py-0.5 zep-break-words zep-w-max",children:[s&&e.jsx("p",{className:"zep-typography-headlineXS-fluid-cqi zep-mb-1",children:s}),e.jsx("p",{className:"zep-typography-supportText",children:r})]}),e.jsx("div",{className:q({position:o,color:a,align:i}),children:e.jsx(Z,{})})]}),A=({children:t,label:s,description:r,className:o,color:a="dark",position:i="top",align:c="center"})=>{const[d,p]=z.useState(!1),I=L=>{L.stopPropagation(),p(!1)};return e.jsxs("div",{className:V("zep-inline-flex zep-relative zep-justify-center zep-items-center zep-group",o),"data-testid":"zep-tooltip",onClick:()=>p(!0),children:[e.jsx(S,{label:s,description:r,color:a,position:i,align:c,show:d,onClose:I,className:o}),t]})},f=({point:t,variant:s,setActivePoint:r,activePoint:o,width:a})=>{const i={[n.Zps]:["zep-bg-typography-light-100"],[n.Cat]:["zep-bg-secondary-default"]},c={[n.Zps]:[l("zep-shadow-[0_0_0_10px_rgba(39,22,111,1)] md:group-hover:zep-shadow-[0_0_0_5px_rgba(39,22,111,1)] [&>p]:zep-text-primary-default",o===t&&"zep-shadow-[0_0_0_3px_rgba(39,22,111,1)]")],[n.Cat]:[l("zep-shadow-[0_0_0_10px_rgba(38,38,38,1)] md:group-hover:zep-shadow-[0_0_0_5px_rgba(38,38,38,1)] [&>p]:zep-text-typography-primary-default",o===t&&"zep-shadow-[0_0_0_3px_rgba(38,38,38,1)]")]},d=g(["zep-absolute zep-w-2.5 zep-h-2.5 md:zep-w-3 md:zep-h-3 zep-rounded-full"],{variants:{variant:i},defaultVariants:{variant:n.Zps}}),p=g([l("zep-w-1 zep-h-1 md:zep-w-1.25 md:zep-h-1.25 zep-rounded-full zep-transition-all md:group-hover:zep-w-2 md:group-hover:zep-h-2",o===t?"zep-w-2 zep-h-2 ":"")],{variants:{variant:c},defaultVariants:{variant:n.Zps}});return e.jsxs("div",{onClick:()=>{a&&a<990&&r(t)},style:{left:`${t.x}%`,top:`${t.y}%`},className:l(d({variant:s})),children:[e.jsx("div",{className:"zep-hidden md:zep-block",children:e.jsx(A,{color:s===n.Zps?"zps":"cat",label:t.label,description:t.description,children:e.jsx("div",{className:"zep-w-2.5 zep-h-2.5 md:zep-w-3 md:zep-h-3 zep-rounded-full zep-flex zep-justify-center zep-items-center zep-group",children:e.jsx("div",{className:l(p({variant:s}),"zep-flex zep-justify-center zep-items-center"),children:t.step&&e.jsx("p",{children:t.step})})})})}),e.jsx("div",{className:"md:zep-hidden zep-w-2.5 zep-h-2.5 md:zep-w-3 md:zep-h-3 zep-rounded-full zep-flex zep-justify-center zep-items-center zep-group",children:e.jsx("div",{className:l(p({variant:s}),"zep-flex zep-justify-center zep-items-center"),children:t.step&&e.jsx("p",{className:"zep-typography-supportText",children:t.step})})})]})},$=f;try{f.displayName="InfoPoint",f.__docgenInfo={description:"",displayName:"InfoPoint",props:{point:{defaultValue:null,description:"",name:"point",required:!0,type:{name:"Point"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},activePoint:{defaultValue:null,description:"",name:"activePoint",required:!1,type:{name:"Point"}},setActivePoint:{defaultValue:null,description:"",name:"setActivePoint",required:!0,type:{name:"(x: Point) => void"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}}}}}catch{}const h=({point:t,variant:s,activePoint:r,setActivePoint:o})=>{const a={[n.Zps]:[l("zep-bg-primary-default zep-text-typography-light-100",r===t&&"zep-shadow-[inset_0_0_0_4px_rgba(255,204,0,1)]")],[n.Cat]:[l("zep-bg-neutral-dark-default [&>p]:zep-text-typography-light-100",r===t&&"zep-shadow-[inset_0_0_0_4px_rgba(255,204,0,1)]")]},i=g(["zep-p-1 zep-min-w-[80%] sm:zep-min-w-[60%] zep-w-full"],{variants:{variant:a},defaultVariants:{variant:n.Zps}});return e.jsxs("div",{id:`${t.x}${t.y}`,onClick:()=>o(t),className:l(i({variant:s}),"card",r===t&&"active","zep-snap-center"),children:[e.jsx("p",{className:"zep-text-headlineXS-fluid-cqi zep-mb-1 zep-text-start",children:t.label}),e.jsx("p",{className:"zep-typography-bodyText zep-text-start",children:t.description})]})},U=h;try{h.displayName="PointCard",h.__docgenInfo={description:"",displayName:"PointCard",props:{point:{defaultValue:null,description:"",name:"point",required:!0,type:{name:"Point"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},activePoint:{defaultValue:null,description:"",name:"activePoint",required:!1,type:{name:"Point"}},setActivePoint:{defaultValue:null,description:"",name:"setActivePoint",required:!0,type:{name:"(x: Point) => void"}}}}}catch{}const E={[n.Zps]:[],[n.Cat]:[]},y=g([""],{variants:{variant:E},defaultVariants:{variant:n.Zps}}),x=({imageUrl:t,imageAlt:s,points:r,variant:o})=>{const[a,i]=z.useState(),c=z.useRef(null),{width:d}=P(c);return z.useEffect(()=>{const p=document.getElementById(`${a==null?void 0:a.x}${a==null?void 0:a.y}`);p&&p.scrollIntoView({behavior:"smooth",inline:"center"})},[a]),e.jsxs("div",{children:[e.jsxs("div",{"data-testid":"zep-infographic-image",className:"zep-relative",ref:c,children:[e.jsx("img",{src:t,alt:s}),r==null?void 0:r.map(p=>e.jsx($,{width:d,variant:o,point:p,activePoint:a,setActivePoint:i},p.x))]}),e.jsx("div",{className:"zep-flex zep-overflow-x-scroll  md:zep-hidden zep-gap-0.5 zep-py-0.5 ",children:r.map(p=>e.jsx(U,{point:p,variant:o,setActivePoint:i,activePoint:a},p.x))})]})};try{y.displayName="infographicImageCva",y.__docgenInfo={description:"",displayName:"infographicImageCva",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"GlobalVariants | null"}},class:{defaultValue:null,description:"",name:"class",required:!1,type:{name:"ClassValue"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"ClassValue"}}}}}catch{}try{x.displayName="InfographicImage",x.__docgenInfo={description:"",displayName:"InfographicImage",props:{imageUrl:{defaultValue:null,description:"",name:"imageUrl",required:!0,type:{name:"string"}},imageAlt:{defaultValue:null,description:"",name:"imageAlt",required:!1,type:{name:"string"}},points:{defaultValue:null,description:"",name:"points",required:!0,type:{name:"Point[]"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}}}}}catch{}const F={title:"Components/InfographicImage",component:x,tags:["autodocs"],argTypes:{variant:{control:{type:"radio",options:Object.keys(n)}}}},u={decorators:[t=>e.jsx("button",{children:e.jsx(t,{})})],args:{imageUrl:"https://img.buzzfeed.com/buzzfeed-static/static/2017-12/22/11/asset/buzzfeed-prod-fastlane-01/sub-buzz-13082-1513961489-5.jpg?output-format=auto&output-quality=auto",variant:n.Zps,imageAlt:"Image alt",points:[{x:20,y:20,description:"Tooltip content",label:"Label"},{x:40,y:30,description:"Tooltip content",label:"Label"},{x:15,y:80,description:"Tooltip content",label:"Label"},{x:85,y:70,description:"Tooltip content",label:"Label"}]}},m={decorators:[t=>e.jsx("button",{children:e.jsx(t,{})})],args:{imageUrl:"https://img.buzzfeed.com/buzzfeed-static/static/2017-12/22/11/asset/buzzfeed-prod-fastlane-01/sub-buzz-13082-1513961489-5.jpg?output-format=auto&output-quality=auto",variant:n.Zps,imageAlt:"Image alt",points:[{x:20,y:20,description:"Tooltip content",label:"Label",step:"1"},{x:40,y:30,description:"Tooltip content",label:"Label",step:"2"},{x:15,y:80,description:"Tooltip content",label:"Label",step:"3"},{x:85,y:70,description:"Tooltip content",label:"Label",step:"4"}]}};var b,_,v;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  decorators: [Story => <button>
        <Story />
      </button>],
  args: {
    imageUrl: 'https://img.buzzfeed.com/buzzfeed-static/static/2017-12/22/11/asset/buzzfeed-prod-fastlane-01/sub-buzz-13082-1513961489-5.jpg?output-format=auto&output-quality=auto',
    variant: GlobalVariants.Zps,
    imageAlt: 'Image alt',
    points: [{
      x: 20,
      y: 20,
      description: 'Tooltip content',
      label: 'Label'
    }, {
      x: 40,
      y: 30,
      description: 'Tooltip content',
      label: 'Label'
    }, {
      x: 15,
      y: 80,
      description: 'Tooltip content',
      label: 'Label'
    }, {
      x: 85,
      y: 70,
      description: 'Tooltip content',
      label: 'Label'
    }]
  } as InfographicImageProps
}`,...(v=(_=u.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var j,w,N;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  decorators: [Story => <button>
        <Story />
      </button>],
  args: {
    imageUrl: 'https://img.buzzfeed.com/buzzfeed-static/static/2017-12/22/11/asset/buzzfeed-prod-fastlane-01/sub-buzz-13082-1513961489-5.jpg?output-format=auto&output-quality=auto',
    variant: GlobalVariants.Zps,
    imageAlt: 'Image alt',
    points: [{
      x: 20,
      y: 20,
      description: 'Tooltip content',
      label: 'Label',
      step: '1'
    }, {
      x: 40,
      y: 30,
      description: 'Tooltip content',
      label: 'Label',
      step: '2'
    }, {
      x: 15,
      y: 80,
      description: 'Tooltip content',
      label: 'Label',
      step: '3'
    }, {
      x: 85,
      y: 70,
      description: 'Tooltip content',
      label: 'Label',
      step: '4'
    }]
  } as InfographicImageProps
}`,...(N=(w=m.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};const J=["Default","WithSteps"];export{u as Default,m as WithSteps,J as __namedExportsOrder,F as default};
