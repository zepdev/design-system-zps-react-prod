import{j as e}from"./jsx-runtime-1a9d9a93.js";import{r as t}from"./index-8b3efc3f.js";import{c as b}from"./clsx-0839fdbe.js";import"./_commonjsHelpers-de833af9.js";const s={thumb:`
    zep-thumb
    zep-bg-transparent
    zep-absolute
    zep-w-full
    zep-pointer-events-none
    zep-top-[50%]
    zep-transform
    zep-z-10
    -zep-translate-y-[50%]
    zep-appearance-none
    zep-p-[0]
    zep-m-[0]
  `,thumbDragIndicator:`
    zep-h-[44px]
    zep-w-[44px]
    zep-rounded-full
    zep-bg-primary-default
    zep-opacity-40
    zep-absolute
  `,tooltip:`
    zep-py-0.25
    zep-w-fit
    zep-px-[12px]
    zep-rounded-[4px]
    zep-text-typography-dark-100
    zep-typography-supportText
    zep-bottom-[26px]
    zep-bg-background-medium
    zep-block
    zep-whitespace-nowrap
    zep-text-center
    zep-transform
    -zep-translate-y-[26px]
    zep-z-10
  `,tooltipWrapper:`
    zep-absolute
    zep-justify-center
    zep-w-[20px]
    zep-pointer-events-none
    after:zep-content-['']
    after:zep-w-[calc(sqrt(2)*6px)]
    after:zep-h-[calc(sqrt(2)*6px)]
    after:zep-rotate-45
    after:zep-absolute
    after:zep-top-[2px]
    after:zep-bg-background-medium
    after:zep-mx-auto
  `,sliderRange:"zep-h-[6px] zep-my-[19px] zep-rounded-full zep-absolute zep-bg-primary-default",sliderTrack:"zep-h-0.25 zep-my-[20px] zep-rounded-full zep-w-full zep-absolute zep-bg-primary-default zep-opacity-40",slider:"zep-relative zep-mt-0.5 zep-w-full zep-h-[44px]"},w=({max:p,min:i,step:N=1,onChange:o,value:f,label:k})=>{const[c,q]=t.useState(f.min),[m,L]=t.useState(f.max),[$,H]=t.useState(f.min),[X,W]=t.useState(f.max),[O,I]=t.useState(!1),[P,R]=t.useState(!1),[v,T]=t.useState(!1),[M,D]=t.useState(!1),z=t.useRef(null),u=t.useRef(null),d=t.useRef(null),n=t.useRef(null),l=t.useRef(null),x=t.useRef(null),g=t.useRef(null),y="10",h="20";t.useEffect(()=>{if(z.current&&n.current&&l.current&&g.current&&x.current){const a=`${(c-i)/(p-i)*100}%`,r=`${(p-m)/(p-i)*100}%`;z.current.style.left=a,z.current.style.right=r,z.current.style.width=`${(m-c)/(p-i)*100}%`,n.current.style.left=a,n.current.style.transform=`translateX(-${a})`,l.current.style.right=r,l.current.style.transform=`translateX(${r})`,x.current.style.left=a,x.current.style.transform=`translateX(-${a})`,g.current.style.right=r,g.current.style.transform=`translateX(${r})`}},[p,m,i,c]);const U=a=>{u&&u.current&&d&&d.current&&(u.current.style.zIndex=h,d.current.style.zIndex=y),n&&n.current&&l&&l.current&&(n.current.style.zIndex=h,l.current.style.zIndex=y);const r=Number(a==null?void 0:a.target.value);r<=m&&(q(r),H(r),o==null||o({min:r,max:m}))},A=a=>{u&&u.current&&d&&d.current&&(u.current.style.zIndex=y,d.current.style.zIndex=h),n&&n.current&&l&&l.current&&(n.current.style.zIndex=y,l.current.style.zIndex=h);const r=Number(a==null?void 0:a.target.value);r>=c&&(L(r),W(r),o==null||o({min:c,max:r}))},j=()=>{v&&T(!1),M&&D(!1)},B=()=>{T(!0)},F=()=>{D(!0)};return t.useEffect(()=>(document.addEventListener("mouseup",j),()=>{document.removeEventListener("mousemove",j)}),[j]),e.jsxs("div",{"data-testid":"rangeSlider",className:"zep-w-full",children:[e.jsx("span",{"data-testid":"rangeSlider-label",className:"zep-text-primary-default zep-typography-bodyText",children:k}),e.jsxs("div",{"data-testid":"rangeSlider-slider",className:s.slider,children:[e.jsx("div",{"data-testid":"rangeSlider-slider-track",className:s.sliderTrack}),e.jsx("div",{"data-testid":"rangeSlider-slider-range",className:s.sliderRange,ref:z}),e.jsx("input",{"data-testid":"rangeSlider-slider-input-min",className:s.thumb,ref:u,onChange:U,step:N,type:"range",value:c,max:p,min:i,onMouseDown:B,onMouseEnter:()=>I(!0),onMouseLeave:()=>I(!1)}),e.jsx("input",{"data-testid":"rangeSlider-slider-input-max",className:s.thumb,ref:d,onChange:A,step:N,type:"range",value:m,max:p,min:i,onMouseDown:F,onMouseEnter:()=>R(!0),onMouseLeave:()=>R(!1)}),e.jsx("div",{"data-testid":"rangeSlider-slider-thumb-drag-indicator-wrapper-min",className:b("zep-absolute zep-z-0 zep-justify-center zep-w-[20px] zep-h-[20px]",v?"zep-flex":"zep-hidden"),ref:x,children:e.jsx("div",{className:s.thumbDragIndicator})}),e.jsx("div",{"data-testid":"rangeSlider-slider-thumb-drag-indicator-wrapper-max",className:b("zep-absolute zep-z-0 zep-justify-center zep-w-[20px] zep-h-[20px]",M?"zep-flex":"zep-hidden"),ref:g,children:e.jsx("div",{className:s.thumbDragIndicator})}),e.jsx("div",{"data-testid":"rangeSlider-slider-wrapper-tooltip-min",className:b(s.tooltipWrapper,v||O?"zep-flex":"zep-hidden"),ref:n,children:e.jsx("div",{"data-testid":"rangeSlider-slider-tooltip-min",className:s.tooltip,children:$})}),e.jsx("div",{"data-testid":"rangeSlider-slider-wrapper-tooltip-max",className:b(s.tooltipWrapper,M||P?"zep-flex":"zep-hidden"),ref:l,children:e.jsx("div",{"data-testid":"rangeSlider-slider-tooltip-max",className:s.tooltip,children:X})})]}),e.jsxs("div",{className:"zep-w-full zep-flex zep-justify-between","data-testid":"rangeSlider-slider-min-max-values",children:[e.jsx("span",{"data-testid":"rangeSlider-min",className:"zep-typography-supportText zep-text-primary-default",children:i}),e.jsx("span",{"data-testid":"rangeSlider-max",className:"zep-typography-supportText zep-text-primary-default",children:p})]})]})};try{w.displayName="Slider",w.__docgenInfo={description:"",displayName:"Slider",props:{step:{defaultValue:{value:"1"},description:"",name:"step",required:!1,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!0,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"number"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"{ min: number; max: number; }"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: { min: number; max: number; }) => void)"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}}}}}catch{}const Y={title:"Components/Slider",component:w,tags:["autodocs"],argTypes:{}},S={args:{min:0,max:100,step:1,value:{min:0,max:100},label:"Label"}};var V,_,E;S.parameters={...S.parameters,docs:{...(V=S.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    step: 1,
    value: {
      min: 0,
      max: 100
    },
    label: 'Label'
  } as SliderProps
}`,...(E=(_=S.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const Z=["Default"];export{S as Default,Z as __namedExportsOrder,Y as default};
