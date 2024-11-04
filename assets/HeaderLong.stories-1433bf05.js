import{j as o,c as l}from"./clsx-490306ad.js";import{H}from"./HeaderLongComponent-61af26bd.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index.es16-83e3794c.js";import"./index.es29-7715336a.js";import"./index.es13-bd73f74d.js";import"./ZpsButton-20e95eec.js";import"./index.es24-e7069ead.js";import"./index-b85febcc.js";import"./tw-merge-1166cefb.js";const r=({theme:e="power-systems",hasBackground:a=!1,...b})=>{const w=e==="power-systems"?"indigo":"black";return o.jsx("div",{className:l("zep-grid","zep-grid-cols-4","sm:zep-grid-cols-8","md:zep-grid-cols-16","zep-max-w-[1920px]","zep-gap-1","sm:zep-gap-1.5","xl:zep-gap-2","zep-px-1","sm:zep-px-1.5","md:zep-px-[0px]","zep-pb-2","zep-pt-3","sm:zep-pt-4","sm:zep-pb-3","md:zep-pb-4","md:zep-pt-5",{"zep-bg-background-gradient":a&&e==="power-systems","zep-bg-background-dark":a&&e==="cat"}),"data-testid":"zep-header-long",children:o.jsx("div",{className:l("zep-col-span-4","sm:zep-col-span-8","md:zep-col-start-2","md:zep-col-span-14"),children:o.jsx(H,{...b,theme:e,textColor:a?"white":w})})})};try{r.displayName="HeaderLong",r.__docgenInfo={description:"",displayName:"HeaderLong",props:{theme:{defaultValue:{value:"power-systems"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"cat"'},{value:'"power-systems"'}]}},hasBackground:{defaultValue:{value:"false"},description:"",name:"hasBackground",required:!1,type:{name:"boolean"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},buttonText:{defaultValue:null,description:"",name:"buttonText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"link"'},{value:'"none"'}]}},buttonOnClick:{defaultValue:null,description:"",name:"buttonOnClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}}}}}catch{}const j={title:"Patterns/HeaderLong",component:r,tags:["autodocs"],argTypes:{}},t={args:{hasBackground:!1,theme:"power-systems",textColor:"indigo",type:"button",tagline:"Tagline",headline:"Headline Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus",linkText:"Click me",linkHref:"https://www.google.com",buttonText:"Click me",buttonOnClick:()=>{},description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus."}},n={args:{theme:"power-systems",hasBackground:!0,textColor:"indigo",type:"link",tagline:"Tagline",headline:"Headline",linkText:"Click me",linkHref:"https://www.google.com",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus."}},i={args:{theme:"power-systems",hasBackground:!1,textColor:"indigo",type:"link",tagline:"Tagline",headline:"Headline",linkText:"Click me",linkHref:"https://www.google.com",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus."}},s={args:{hasBackground:!1,theme:"power-systems",textColor:"indigo",type:"button",tagline:"Tagline",headline:"Headline",linkText:"Click me",buttonText:"Click me",buttonOnClick:()=>{},description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus."}};var u,m,d;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: ({
    hasBackground: false,
    theme: 'power-systems',
    textColor: 'indigo',
    type: 'button',
    tagline: 'Tagline',
    headline: 'Headline Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus',
    linkText: 'Click me',
    linkHref: 'https://www.google.com',
    buttonText: 'Click me',
    buttonOnClick: () => {},
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.'
  } as HeaderLongProps)
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,c,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: ({
    theme: 'power-systems',
    hasBackground: true,
    textColor: 'indigo',
    type: 'link',
    tagline: 'Tagline',
    headline: 'Headline',
    linkText: 'Click me',
    linkHref: 'https://www.google.com',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.'
  } as HeaderLongProps)
}`,...(g=(c=n.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var k,h,f;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: ({
    theme: 'power-systems',
    hasBackground: false,
    textColor: 'indigo',
    type: 'link',
    tagline: 'Tagline',
    headline: 'Headline',
    linkText: 'Click me',
    linkHref: 'https://www.google.com',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.'
  } as HeaderLongProps)
}`,...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,C,y;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: ({
    hasBackground: false,
    theme: 'power-systems',
    textColor: 'indigo',
    type: 'button',
    tagline: 'Tagline',
    headline: 'Headline',
    linkText: 'Click me',
    buttonText: 'Click me',
    buttonOnClick: () => {},
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.'
  } as HeaderLongProps)
}`,...(y=(C=s.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};const E=["Default","WithBackground","WithLink","WithButton"];export{t as Default,n as WithBackground,s as WithButton,i as WithLink,E as __namedExportsOrder,j as default};
//# sourceMappingURL=HeaderLong.stories-1433bf05.js.map
