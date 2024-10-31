import{j as n,c as g}from"./clsx-490306ad.js";import{r as c}from"./index-8b3efc3f.js";import{L as v,e as w}from"./index.es16-83e3794c.js";import"./_commonjsHelpers-de833af9.js";import"./index.es29-7715336a.js";import"./index.es13-bd73f74d.js";const T=({text:e,...t})=>{const{modifiers:s,missingModifierTypes:r}=z();return Object.keys(t).reduce((a,i)=>{if(!t[i])return a;const l=s[i];return l?n.jsx(l,{children:a}):(r.includes(i)||(console.warn(`[@strapi/block-react-renderer] No component found for modifier "${i}"`),r.push(i)),a)},n.jsx(n.Fragment,{children:e}))},C=["image"],B=e=>{const{children:t,type:s,...r}=e;if(s==="code"){const o=a=>a.reduce((i,l)=>l.type==="text"?i.concat(l.text):l.type==="link"?i.concat(o(l.children)):i,"");return{...r,plainText:o(e.children)}}return r},k=({content:e})=>{const{children:t,type:s,...r}=e,{blocks:o,missingBlockTypes:a}=z(),i=o[s];if(!i)return a.includes(s)||(console.warn(`[@strapi/block-react-renderer] No component found for block type "${s}"`),a.push(s)),null;if(C.includes(s))return n.jsx(i,{...r});if(s==="paragraph"&&t.length===1&&t[0].type==="text"&&t[0].text==="")return n.jsx("br",{});const l=B(e);return n.jsx(i,{...l,children:t.map((u,h)=>{if(u.type==="text"){const{type:N,...b}=u;return c.createElement(T,{...b,key:h})}return n.jsx(k,{content:u},h)})})},p={blocks:{paragraph:e=>n.jsx("p",{children:e.children}),quote:e=>n.jsx("blockquote",{children:e.children}),code:e=>n.jsx("pre",{children:n.jsx("code",{children:e.plainText})}),heading:({level:e,children:t})=>{switch(e){case 1:return n.jsx("h1",{children:t});case 2:return n.jsx("h2",{children:t});case 3:return n.jsx("h3",{children:t});case 4:return n.jsx("h4",{children:t});case 5:return n.jsx("h5",{children:t});case 6:return n.jsx("h6",{children:t})}},link:e=>n.jsx("a",{href:e.url,children:e.children}),list:e=>e.format==="ordered"?n.jsx("ol",{children:e.children}):n.jsx("ul",{children:e.children}),"list-item":e=>n.jsx("li",{children:e.children}),image:e=>n.jsx("img",{src:e.image.url,alt:e.image.alternativeText||void 0})},modifiers:{bold:e=>n.jsx("strong",{children:e.children}),italic:e=>n.jsx("em",{children:e.children}),underline:e=>n.jsx("u",{children:e.children}),strikethrough:e=>n.jsx("del",{children:e.children}),code:e=>n.jsx("code",{children:e.children})},missingBlockTypes:[],missingModifierTypes:[]},j=c.createContext(p),P=({children:e,value:t=p})=>{const s=c.useMemo(()=>t,[t]);return n.jsx(j.Provider,{value:s,children:e})};function z(){return c.useContext(j)}const _=e=>{const t={...p.blocks,...e.blocks},s={...p.modifiers,...e.modifiers},r=c.useRef([]),o=c.useRef([]);return n.jsx(P,{value:{blocks:t,modifiers:s,missingBlockTypes:r.current,missingModifierTypes:o.current},children:e.content.map((a,i)=>n.jsx(k,{content:a},i))})},m=({headline:e,content:t,theme:s="power-systems"})=>n.jsx("div",{className:g("md:zep-grid md:zep-grid-cols-16 md:zep-gap-1.5 xl:zep-gap-2"),children:n.jsxs("div",{className:g("xl:zep-max-w-[944px]","md:zep-grid","md:zep-col-end-12","xl:zep-col-end-10","md:zep-col-start-2","zep-w-full","zep-flex","zep-flex-col","zep-gap-y-1.5","sm:zep-gap-y-2","md:zep-gap-y-2.5","xl:zep-gap-y-4",{"zep-text-typography-dark-100":s==="cat","zep-text-primary-default":s==="power-systems"}),"data-testid":"lead-text",children:[e&&n.jsx("h4",{className:"zep-typography-headlineLG-fluid-cqi zep-break-words","data-testid":"lead-text-headline",children:e}),n.jsx(_,{content:t,blocks:{paragraph:({children:r})=>n.jsx("p",{className:"zep-typography-bodyTextLG","data-testid":"lead-text-body",children:r}),heading:({children:r})=>n.jsx("h5",{className:"zep-typography-headlineXS-fluid-cqi",children:r}),link:({children:r,url:o})=>n.jsx(v,{className:"zep-typography-link",target:w.Blank,href:o,label:r})},modifiers:{bold:({children:r})=>n.jsx("span",{className:"zep-typography-bodyStrong",children:r})}})]})});try{m.displayName="LeadText",m.__docgenInfo={description:"",displayName:"LeadText",props:{headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"BlocksContent"}},theme:{defaultValue:{value:"power-systems"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"cat"'},{value:'"power-systems"'}]}}}}}catch{}const L=[{type:"paragraph",children:[{text:"Unsere Produktkomponenten von Optimarin umfassen leistungsstarke UV-Systeme, effiziente Filter, robuste Rückspülpumpen, präzise Druckregelventile und bedienfreundliche Control Panel. Innovative Technologien gewährleisten eine effektive Entfernung von Organismen und Partikeln, hohe Durchflussraten und eine zuverlässige Leistung bei minimalem Wartungsaufwand. Damit sorgen unsere Ballastwasserbehandlungssysteme für eine nachhaltige und effiziente Ballastwasserbehandlung, die den höchsten Umweltstandards entspricht.",type:"text"}]}],U={title:"Components/LeadText",component:m,tags:["autodocs"],argTypes:{theme:{control:{type:"select",options:["cat","power-systems"]}}}},d={args:{headline:"Headline",content:L,theme:"power-systems"}};var f,x,y;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: ({
    headline: 'Headline',
    // content: 'Unsere Produktkomponenten von Optimarin umfassen leistungsstarke UV-Systeme, effiziente Filter, robuste Rückspülpumpen, präzise Druckregelventile und bedienfreundliche Control Panel. Innovative Technologien gewährleisten eine effektive Entfernung von Organismen und Partikeln, hohe Durchflussraten und eine zuverlässige Leistung bei minimalem Wartungsaufwand. Damit sorgen unsere Ballastwasserbehandlungssysteme für eine nachhaltige und effiziente Ballastwasserbehandlung, die den höchsten Umweltstandards entspricht.',
    content: mockContent,
    theme: 'power-systems'
  } as LeadTextProps)
}`,...(y=(x=d.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const V=["Default"];export{d as Default,V as __namedExportsOrder,U as default};
//# sourceMappingURL=LeadText.stories-66504af3.js.map