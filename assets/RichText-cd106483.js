import{j as t}from"./jsx-runtime-1a9d9a93.js";import{r as p}from"./index-8b3efc3f.js";import{Z as b,l as C,a as N}from"./index.es16-298408db.js";import{i as y}from"./index.es18-4b39ea0e.js";import{c as o}from"./clsx-0839fdbe.js";import{a as m,G as x}from"./global-variants-893e06e6.js";const T=({text:e,...s})=>{const{modifiers:n,missingModifierTypes:a}=z();return Object.keys(s).reduce((i,r)=>{if(!s[r])return i;const l=n[r];return l?t.jsx(l,{children:i}):(a.includes(r)||(console.warn(`[@strapi/block-react-renderer] No component found for modifier "${r}"`),a.push(r)),i)},t.jsx(t.Fragment,{children:e}))},w=["image"],B=e=>{const{children:s,type:n,...a}=e;if(n==="code"){const c=i=>i.reduce((r,l)=>l.type==="text"?r.concat(l.text):l.type==="link"?r.concat(c(l.children)):r,"");return{...a,plainText:c(e.children)}}return a},g=({content:e})=>{const{children:s,type:n,...a}=e,{blocks:c,missingBlockTypes:i}=z(),r=c[n];if(!r)return i.includes(n)||(console.warn(`[@strapi/block-react-renderer] No component found for block type "${n}"`),i.push(n)),null;if(w.includes(n))return t.jsx(r,{...a});if(n==="paragraph"&&s.length===1&&s[0].type==="text"&&s[0].text==="")return t.jsx("br",{});const l=B(e);return t.jsx(r,{...l,children:s.map((d,u)=>{if(d.type==="text"){const{type:P,...k}=d;return p.createElement(T,{...k,key:u})}return t.jsx(g,{content:d},u)})})},h={blocks:{paragraph:e=>t.jsx("p",{children:e.children}),quote:e=>t.jsx("blockquote",{children:e.children}),code:e=>t.jsx("pre",{children:t.jsx("code",{children:e.plainText})}),heading:({level:e,children:s})=>{switch(e){case 1:return t.jsx("h1",{children:s});case 2:return t.jsx("h2",{children:s});case 3:return t.jsx("h3",{children:s});case 4:return t.jsx("h4",{children:s});case 5:return t.jsx("h5",{children:s});case 6:return t.jsx("h6",{children:s})}},link:e=>t.jsx("a",{href:e.url,children:e.children}),list:e=>e.format==="ordered"?t.jsx("ol",{children:e.children}):t.jsx("ul",{children:e.children}),"list-item":e=>t.jsx("li",{children:e.children}),image:e=>t.jsx("img",{src:e.image.url,alt:e.image.alternativeText||void 0})},modifiers:{bold:e=>t.jsx("strong",{children:e.children}),italic:e=>t.jsx("em",{children:e.children}),underline:e=>t.jsx("u",{children:e.children}),strikethrough:e=>t.jsx("del",{children:e.children}),code:e=>t.jsx("code",{children:e.children})},missingBlockTypes:[],missingModifierTypes:[]},j=p.createContext(h),v=({children:e,value:s=h})=>{const n=p.useMemo(()=>s,[s]);return t.jsx(j.Provider,{value:n,children:e})};function z(){return p.useContext(j)}const _=e=>{const s={...h.blocks,...e.blocks},n={...h.modifiers,...e.modifiers},a=p.useRef([]),c=p.useRef([]);return t.jsx(v,{value:{blocks:s,modifiers:n,missingBlockTypes:a.current,missingModifierTypes:c.current},children:e.content.map((i,r)=>t.jsx(g,{content:i},r))})},q=({level:e,children:s,className:n})=>{switch(e){case 1:case 2:case 3:return t.jsx("h3",{className:o("zep-typography-headlineSM-fluid-cqi","zep-text-start",n),children:s});case 4:return t.jsx("h4",{className:o("zep-typography-headlineXS-fluid-cqi","zep-text-start",n),children:s});case 5:return t.jsx("h5",{className:o("zep-typography-headlineXS-fluid-cqi","zep-text-start",n),children:s});default:return t.jsx("h6",{className:o("zep-typography-headlineXS-fluid-cqi","zep-text-start",n),children:s})}},Z=({children:e,className:s})=>t.jsx("p",{className:o("zep-typography-bodyText","zep-text-start",s),children:e}),R=({ordered:e,items:s})=>t.jsx(y,{className:"zep-w-full zep-flex zep-flex-col zep-gap-0.25 zep-justify-start",type:e?"numeric":"bullet",children:s}),M=({url:e,description:s,alt:n})=>t.jsxs("div",{className:"sm:zep-max-w-[calc(50%-16px)] zep-flex zep-flex-col",children:[t.jsx("div",{className:"zep-aspect-[4/3]",children:t.jsx("img",{src:e,alt:n,className:"zep-w-full zep-h-full zep-object-cover"})}),t.jsx("span",{className:"zep-break-all zep-bg-greyscale-200 zep-w-full zep-text-typography-dark-70 zep-opacity-70 zep-py-0.5 zep-px-1 zep-typography-bodyText",children:s})]}),f=({content:e,children:s,variant:n=x.Zps,className:a})=>{const c={"zep-text-typography-light-100":n===m.ZpsBg||n===m.CatBg,"zep-text-typography-dark-100":n===x.Cat,"zep-text-primary-default":n===x.Zps},i={"zep-text-yellow-500":n===m.CatBg||n===m.ZpsBg,"zep-text-typography-dark-100":n===x.Cat,"zep-text-primary-default":n===x.Zps};return t.jsxs("div",{className:o(c,"zep-container","zep-max-w-[944px]","zep-flex","sm:zep-flex-row","zep-flex-col","sm:zep-flex-wrap","zep-gap-0.5",a),"data-testid":"zep-richtext",children:[t.jsx(_,{content:e,blocks:{paragraph:({children:r})=>t.jsx(Z,{className:o("zep-w-full",c),children:r}),heading:({children:r,level:l})=>t.jsx(q,{className:o(c,"zep-w-full","zep-font-500"),level:l,children:r}),link:({children:r,url:l})=>t.jsx(b,{className:o(i,"zep-inline-flex"),href:l,label:r,mode:C.Inline,target:N.Blank}),"list-item":({children:r})=>t.jsx(y.Item,{className:"zep-py-[0]",children:t.jsx("span",{className:"zep-break-all zep-w-full zep-inline-block",children:r})}),list:({children:r,format:l})=>t.jsx(R,{ordered:l==="ordered",items:r}),image:({image:{alternativeText:r,name:l,url:d,caption:u}})=>t.jsx(M,{url:d,alt:r??l,description:u??l})},modifiers:{bold:({children:r})=>t.jsx("span",{className:"zep-typography-bodyStrong",children:r}),italic:({children:r})=>t.jsx("span",{className:"zep-italic",children:r})}}),s]})};try{f.displayName="RichText",f.__docgenInfo={description:"",displayName:"RichText",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"BlocksContent"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZPS_BG"'},{value:'"CAT_BG"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{f as R};
