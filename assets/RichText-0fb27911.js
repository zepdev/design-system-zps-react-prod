import{j as t,c as d}from"./clsx-36b9529f.js";import{r as x}from"./index-8b3efc3f.js";import{N as v}from"./index.es16-ca92ca27.js";import{a as z,l as B}from"./index.es17-40e95622.js";import{i as k}from"./index.es18-bf2a862c.js";import{a as f,G as h}from"./global-variants-893e06e6.js";import{g as y}from"./getUrlWithTrailingSlash-1f1feb13.js";const _=({text:e,...r})=>{const{modifiers:s,missingModifierTypes:a}=C();return Object.keys(r).reduce((i,l)=>{if(!r[l])return i;const p=s[l];return p?t.jsx(p,{children:i}):(a.includes(l)||(console.warn(`[@strapi/block-react-renderer] No component found for modifier "${l}"`),a.push(l)),i)},t.jsx(t.Fragment,{children:e}))},q=["image"],R=e=>{const{children:r,type:s,...a}=e;if(s==="code"){const o=i=>i.reduce((l,p)=>p.type==="text"?l.concat(p.text):p.type==="link"?l.concat(o(p.children)):l,"");return{...a,plainText:o(e.children)}}return a},b=({content:e})=>{const{children:r,type:s,...a}=e,{blocks:o,missingBlockTypes:i}=C(),l=o[s];if(!l)return i.includes(s)||(console.warn(`[@strapi/block-react-renderer] No component found for block type "${s}"`),i.push(s)),null;if(q.includes(s))return t.jsx(l,{...a});if(s==="paragraph"&&r.length===1&&r[0].type==="text"&&r[0].text==="")return t.jsx("br",{});const p=R(e);return t.jsx(l,{...p,children:r.map((m,u)=>{if(m.type==="text"){const{type:n,...c}=m;return x.createElement(_,{...c,key:u})}return t.jsx(b,{content:m},u)})})},g={blocks:{paragraph:e=>t.jsx("p",{children:e.children}),quote:e=>t.jsx("blockquote",{children:e.children}),code:e=>t.jsx("pre",{children:t.jsx("code",{children:e.plainText})}),heading:({level:e,children:r})=>{switch(e){case 1:return t.jsx("h1",{children:r});case 2:return t.jsx("h2",{children:r});case 3:return t.jsx("h3",{children:r});case 4:return t.jsx("h4",{children:r});case 5:return t.jsx("h5",{children:r});case 6:return t.jsx("h6",{children:r})}},link:e=>t.jsx("a",{href:e.url,children:e.children}),list:e=>e.format==="ordered"?t.jsx("ol",{children:e.children}):t.jsx("ul",{children:e.children}),"list-item":e=>t.jsx("li",{children:e.children}),image:e=>t.jsx("img",{src:e.image.url,alt:e.image.alternativeText||void 0})},modifiers:{bold:e=>t.jsx("strong",{children:e.children}),italic:e=>t.jsx("em",{children:e.children}),underline:e=>t.jsx("u",{children:e.children}),strikethrough:e=>t.jsx("del",{children:e.children}),code:e=>t.jsx("code",{children:e.children})},missingBlockTypes:[],missingModifierTypes:[]},N=x.createContext(g),S=({children:e,value:r=g})=>{const s=x.useMemo(()=>r,[r]);return t.jsx(N.Provider,{value:s,children:e})};function C(){return x.useContext(N)}const V=e=>{const r={...g.blocks,...e.blocks},s={...g.modifiers,...e.modifiers},a=x.useRef([]),o=x.useRef([]);return t.jsx(S,{value:{blocks:r,modifiers:s,missingBlockTypes:a.current,missingModifierTypes:o.current},children:e.content.map((i,l)=>t.jsx(b,{content:i},l))})},Z=""+new URL("appstore-a93cecea.svg",import.meta.url).href,M=""+new URL("googleplay-7d20acaa.svg",import.meta.url).href,P=({level:e,children:r,className:s})=>{switch(e){case 1:case 2:case 3:return t.jsx("h3",{className:d("zep-typography-headlineSM-fluid-cqi","zep-text-start",s),children:r});case 4:return t.jsx("h4",{className:d("zep-typography-headlineXS-fluid-cqi","zep-text-start",s),children:r});case 5:return t.jsx("h5",{className:d("zep-typography-headlineXS-fluid-cqi","zep-text-start",s),children:r});default:return t.jsx("h6",{className:d("zep-typography-headlineXS-fluid-cqi","zep-text-start",s),children:r})}},G=({children:e,className:r})=>t.jsx("p",{className:d("zep-typography-bodyText","zep-text-start",r),children:e}),E=({ordered:e,items:r})=>t.jsx(k,{className:"zep-w-full zep-flex zep-flex-col zep-gap-0.25 zep-justify-start",type:e?"numeric":"bullet",children:r}),I=({url:e,description:r,alt:s})=>t.jsxs("div",{className:"sm:zep-max-w-[calc(50%-16px)] zep-flex zep-flex-col",children:[t.jsx("div",{className:"zep-aspect-[4/3]",children:t.jsx("img",{title:s,src:e,alt:s,className:"zep-w-full zep-h-full zep-object-cover"})}),r&&t.jsx("span",{className:"zep-hyphens-auto zep-break-normal zep-bg-greyscale-200 zep-w-full zep-text-typography-dark-70 zep-opacity-70 zep-py-0.5 zep-px-1 zep-typography-bodyText",children:r})]}),j=({content:e,children:r,variant:s=h.Zps,appStoreUrl:a,googlePlayUrl:o,className:i})=>{var m,u;const l={"zep-text-typography-light-100":s===f.ZpsBg||s===f.CatBg,"zep-text-typography-dark-100":s===h.Cat,"zep-text-primary-default":s===h.Zps},p={"zep-text-yellow-500":s===f.CatBg||s===f.ZpsBg,"zep-text-typography-dark-100":s===h.Cat,"zep-text-primary-default":s===h.Zps};return e.length===1&&((m=e[0].children[0])==null?void 0:m.type)==="text"&&((u=e[0].children[0])==null?void 0:u.text)===""?null:t.jsxs("div",{className:d(l,"zep-container","zep-max-w-[944px]","zep-flex","sm:zep-flex-row","zep-flex-col","sm:zep-flex-wrap","zep-gap-0.5",i),"data-testid":"zep-richtext",children:[t.jsx(V,{content:e,blocks:{paragraph:({children:n})=>t.jsx(G,{className:d("zep-w-full",l),children:n}),heading:({children:n,level:c})=>t.jsx(P,{className:d(l,"zep-w-full","zep-font-500"),level:c,children:n}),link:({children:n,url:c})=>t.jsx(v,{target:c!=null&&c.startsWith("http")?z.Blank:z.Self,className:d(p,"zep-inline-flex"),href:y(c),label:n,mode:B.Inline}),"list-item":({children:n})=>t.jsx(k.Item,{className:"zep-py-[0]",children:t.jsx("span",{className:"zep-hyphens-auto zep-break-normal zep-w-full zep-inline-block",children:n})}),list:({children:n,format:c})=>t.jsx(E,{ordered:c==="ordered",items:n}),image:({image:{alternativeText:n,name:c,url:T,caption:w}})=>t.jsx(I,{url:T,alt:n??c,description:w})},modifiers:{bold:({children:n})=>t.jsx("span",{className:"zep-typography-bodyStrong",children:n}),italic:({children:n})=>t.jsx("span",{className:"zep-italic",children:n})}}),r&&t.jsx("div",{className:"zep-w-full",children:r}),(o||a)&&t.jsxs("div",{className:"zep-flex zep-flex-col md:zep-flex-row zep-gap-1 md:zep-gap-1.5 zep-mt-1.5 md:zep-mt-2",children:[o&&t.jsx("a",{href:y(o),target:"_blank",rel:"noreferrer",children:t.jsx("img",{src:M,alt:"google-play"})}),a&&t.jsx("a",{href:y(a),target:"_blank",rel:"noreferrer",children:t.jsx("img",{src:Z,alt:"appstore"})})]})]})};try{j.displayName="RichText",j.__docgenInfo={description:"",displayName:"RichText",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"BlocksContent"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZPS_BG"'},{value:'"CAT_BG"'}]}},appStoreUrl:{defaultValue:null,description:"",name:"appStoreUrl",required:!1,type:{name:"string"}},googlePlayUrl:{defaultValue:null,description:"",name:"googlePlayUrl",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{j as R};
