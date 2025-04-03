import{G as e,a as s}from"./global-variants-893e06e6.js";import{j as o}from"./clsx-36b9529f.js";import{b as d}from"./commonCSS-cc68a568.js";import{L as g}from"./Layout-639d4783.js";import{H as f}from"./HeaderLongComponent-88c52744.js";import{I as b}from"./InfographicImage-a3f9570b.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index.es16-ca92ca27.js";import"./index.es31-95f1013f.js";import"./index.es13-b5ad88d4.js";import"./index.es17-40e95622.js";import"./getUrlWithTrailingSlash-1f1feb13.js";import"./RichText-0fb27911.js";import"./index.es18-bf2a862c.js";import"./ZpsButton-f3be46e6.js";import"./index.es24-d6e4db88.js";import"./index.es35-79e31a69.js";import"./index-9eff14f9.js";import"./tw-merge-1166cefb.js";import"./useContainerDimensions-42dc9502.js";const i=({variant:a=e.Zps,header:n,infographic:r,id:c})=>{const p=()=>{switch(a){case e.Zps:return s.ZpsBg;case e.Cat:return s.CatBg}};return o.jsxs(g,{id:c,wrapperClassname:d[p()],className:"zep-py-3 sm:zep-py-4 md:zep-py-5",children:[n&&n.headline&&o.jsx(f,{...n,variant:p()}),o.jsx(b,{className:"zep-mt-1 sm:zep-mt-1.5 md:zep-mt-2 xl:zep-mt-4",imageUrl:r.imageUrl,imageAlt:r.imageAlt,points:r.points,variant:a})]})};try{i.displayName="InfographicImagePattern",i.__docgenInfo={description:"",displayName:"InfographicImagePattern",props:{header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"HeaderLongComponentProps"}},infographic:{defaultValue:null,description:"",name:"infographic",required:!0,type:{name:"InfographicImageProps"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const G={title:"Patterns/InfographicImagePattern",component:i,tags:["autodocs"],argTypes:{variant:{control:{type:"radio",options:Object.keys(e)}}}},t={args:{variant:e.Zps,header:{headline:"Die Funktionsweise der Unterbrechungsfreien Stromversorgung (USV) einfach erklärt",tagline:"Zeppelin Power Systems Lösungen für STrom & Wärme",type:"primary-button",linkHref:"",linkText:"Kontaktieren Sie unsere Experten"},infographic:{imageUrl:"https://img.buzzfeed.com/buzzfeed-static/static/2017-12/22/11/asset/buzzfeed-prod-fastlane-01/sub-buzz-13082-1513961489-5.jpg?output-format=auto&output-quality=auto",imageAlt:"Image alt",points:[{x:20,y:20,description:"Tooltip content",label:"Label"},{x:40,y:30,description:"Tooltip content",label:"Label"},{x:15,y:80,description:"Tooltip content",label:"Label"},{x:85,y:70,description:"Tooltip content",label:"Label"}]}}};var l,m,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariants.Zps,
    header: {
      headline: 'Die Funktionsweise der Unterbrechungsfreien Stromversorgung (USV) einfach erklärt',
      tagline: 'Zeppelin Power Systems Lösungen für STrom & Wärme',
      type: 'primary-button',
      linkHref: '',
      linkText: 'Kontaktieren Sie unsere Experten'
    },
    infographic: {
      imageUrl: 'https://img.buzzfeed.com/buzzfeed-static/static/2017-12/22/11/asset/buzzfeed-prod-fastlane-01/sub-buzz-13082-1513961489-5.jpg?output-format=auto&output-quality=auto',
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
    }
  } as InfographicImagePatternProps
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const H=["Default"];export{t as Default,H as __namedExportsOrder,G as default};
