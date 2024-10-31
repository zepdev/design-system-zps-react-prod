import{j as e,c as m}from"./clsx-490306ad.js";import{G as r}from"./global-variants-42c1cda2.js";import{c as g}from"./index-b85febcc.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const z={[r.Zps]:["zep-bg-gradient-to-r zep-from-[rgb(32,27,52)] zep-to-[rgb(32,23,94)] group-hover:zep-bg-none group-hover:zep-bg-primary-hover"],[r.Cat]:["zep-bg-neutral-dark-default  group-hover:zep-bg-none group-hover:zep-bg-neutral-dark-hover"]},s=g([`zep-flex
     zep-justify-between
     zep-items-center
     zep-absolute
     lg:zep-bottom-2.5
     lg:zep-left-2.5
     lg:zep-right-2.5
     lg:zep-p-2.5
     md:zep-bottom-2
     md:zep-left-2
     md:zep-right-2
     md:zep-p-2
     zep-bottom-1.5
     zep-p-1.5
     zep-left-1.5
     zep-right-1.5`],{variants:{variant:z},defaultVariants:{variant:r.Zps}}),p=({imageSrc:a,description:o,headline:d,imageAlt:c,variant:u})=>e.jsxs("div",{className:m("zep-relative","zep-group","zep-max-w-[399px]","zep-max-h-[399px]","md:zep-min-h-[400px]","md:zep-min-w-[400px]","md:zep-max-w-[499px]","md:zep-max-h-[499px]","lg:zep-min-w-[500px]","lg:zep-min-h-[500px]","lg:zep-max-w-[700px]","lg:zep-max-h-[700px]"),tabIndex:0,"data-testid":"zep-card-square",children:[e.jsx("img",{className:"zep-object-cover zep-w-full zep-h-full group-hover:zep-transition-all zep-duration-1000 group-hover:zep-brightness-90",src:a,alt:c,title:"construction site"}),e.jsxs("div",{className:s({variant:u}),children:[e.jsxs("div",{className:"zep-flex zep-flex-col zep-items-start zep-w-full",children:[e.jsx("h4",{"data-testid":"card-square-headline",className:"zep-typography-headlineMD-fluid-cqi zep-text-background-light zep-mb-1 zep-text-left ",children:d}),e.jsx("p",{"data-testid":"card-square-description",className:"zep-typography-bodyText zep-text-background-light zep-text-left zep-break-all",children:o})]}),e.jsx("div",{className:"zep-transition group-hover:zep-translate-x-0.75 zep-ml-1.5 ",children:e.jsx("img",{src:"./assets/yellow-right-arrow.svg",alt:"yellow left arrow","data-testid":"zep-her-arrowIcon"})})]})]});try{s.displayName="cardSquareCardCva",s.__docgenInfo={description:"",displayName:"cardSquareCardCva",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"GlobalVariants | null"}},class:{defaultValue:null,description:"",name:"class",required:!1,type:{name:"ClassValue"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"ClassValue"}}}}}catch{}try{p.displayName="CardSquare",p.__docgenInfo={description:"",displayName:"CardSquare",props:{imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!0,type:{name:"string"}},imageAlt:{defaultValue:null,description:"",name:"imageAlt",required:!0,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}}}}}catch{}const b={title:"Components/CardSquare",component:p,tags:["autodocs"],argTypes:{variant:{control:{type:"radio",options:Object.keys(r)}}}},t={decorators:[a=>e.jsx("button",{children:e.jsx(a,{})})],args:{imageSrc:"./assets/worker.png",imageAlt:"worker img",headline:"my Headline",description:"The description",variant:r.Zps}};var n,i,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  decorators: [Story => <button>
        <Story />
      </button>],
  args: ({
    imageSrc: './assets/worker.png',
    imageAlt: 'worker img',
    headline: 'my Headline',
    description: 'The description',
    variant: GlobalVariants.Zps
  } as CardSquareProps)
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const q=["Default"];export{t as Default,q as __namedExportsOrder,b as default};
//# sourceMappingURL=CardSquare.stories-21673a79.js.map
