import{j as e}from"./jsx-runtime-1a9d9a93.js";import{N as j,l as N}from"./index.es16-90aad98d.js";import{r as s}from"./index-8b3efc3f.js";import{L as F}from"./global-variants-893e06e6.js";import{g as J}from"./getDataLayer-1420585a.js";import{h as L}from"./index.es13-751bc762.js";import"./index.es31-95f1013f.js";import"./_commonjsHelpers-de833af9.js";const re=""+new URL("zep-cat-logo-7a4ba8ca.svg",import.meta.url).href,se=""+new URL("burger-fe2d6553.svg",import.meta.url).href,Q=""+new URL("language-icon-fedf31c2.svg",import.meta.url).href,q=({selectedLocale:r,setLocaleSwitcherMenu:p,locales:i,header:w,labelBack:c,setLanguageSwitcher:b,setSelectedLocale:m})=>{var x,k;const[z,v]=s.useState(!1),[g,u]=s.useState(!1);s.useEffect(()=>{v(!0)},[]),s.useEffect(()=>(z?document.body.classList.add("zep-overflow-hidden"):document.body.classList.remove("zep-overflow-hidden"),()=>{document.body.classList.remove("zep-overflow-hidden")}),[z]);const f=()=>{setTimeout(()=>{p&&p(!1)},500),v(!1)},h=i==null?void 0:i.reduce((n,d)=>(n[d.country]||(n[d.country]=[]),n[d.country].push(d),n),{});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`${g?"zep-animate-slide-out":""} md:zep-hidden`,children:[e.jsx("div",{className:"zep-text-typography-light-100 zep-mb-2.5 zep-flex zep-gap-0.5 zep-items-center",children:e.jsx(j,{mode:N.Standalone,label:c,iconPlacement:"before",icon:"arrow-long-left",onClick:n=>{n.preventDefault(),u(!0),setTimeout(()=>{u(!1),b&&b(!1)},300)}})}),e.jsx("h4",{className:"zep-text-headlineXS-fluid-cqi zep-text-typography-light-100 zep-mb-2",children:w}),h&&((x=Object.keys(h))==null?void 0:x.map((n,d)=>{var t;return e.jsxs("div",{className:"zep-mb-3",children:[e.jsx("p",{className:"zep-mb-1.5 zep-typography-bodyText zep-text-typography-light-100",children:n}),(t=h[n])==null?void 0:t.map(a=>e.jsxs("div",{className:"zep-flex zep-gap-1 zep-mb-1.5 zep-items-center",onClick:()=>m&&m(a),children:[e.jsx("div",{className:"zep-w-1.5 zep-h-1.5 zep-bg-typography-light-100 zep-flex zep-justify-center zep-items-center zep-rounded-full",children:(r==null?void 0:r.value)===(a==null?void 0:a.value)&&e.jsx("div",{className:"zep-w-0.75 zep-h-0.75 zep-bg-neutral-dark-default zep-rounded-full"})}),e.jsx("p",{className:"zep-typography-bodyText zep-text-typography-light-100",children:a==null?void 0:a.label})]},a.value))]},`${n}${d}`)}))]}),e.jsxs("div",{className:"zep-hidden md:zep-block",children:[e.jsx("div",{className:`zep-fixed zep-top-[0px] zep-right-[0px] md:zep-w-[440px] lg:zep-w-[480px] zep-pl-3 zep-pt-2 zep-pr-2 zep-bg-background-dark zep-ease-out zep-w-[0px] zep-duration-500 zep-h-screen zep-z-[1000] ${z?"zep-translate-x-0 ":"zep-translate-x-full"}`,children:e.jsxs("div",{className:`${z?"zep-block zep-overflow-hidden":""}`,children:[e.jsx("div",{className:"zep-flex zep-justify-end zep-mb-2",children:e.jsx(L,{name:"close",color:"#fff",size:24,onClick:f,className:"zep-cursor-pointer"})}),e.jsx("h4",{className:"zep-text-headlineXS-fluid-cqi zep-text-typography-light-100 zep-mb-3",children:w}),h&&((k=Object.keys(h))==null?void 0:k.map((n,d)=>{var t;return e.jsxs("div",{className:"zep-mb-3",children:[e.jsx("p",{className:"zep-mb-1.5 zep-typography-bodyText zep-text-typography-light-100",children:n}),(t=h[n])==null?void 0:t.map(a=>e.jsxs("div",{className:"zep-flex zep-gap-1 zep-mb-1.5 zep-items-center",onClick:()=>m&&m(a),children:[e.jsx("div",{className:"zep-w-1.5 zep-h-1.5 zep-bg-typography-light-100 zep-flex zep-justify-center zep-items-center zep-rounded-full",children:(r==null?void 0:r.value)===(a==null?void 0:a.value)&&e.jsx("div",{className:"zep-w-0.75 zep-h-0.75 zep-bg-neutral-dark-default zep-rounded-full"})}),e.jsx("p",{className:"zep-typography-bodyText zep-text-typography-light-100",children:a==null?void 0:a.label})]},a.value))]},`${n}${d}`)}))]})}),e.jsx("div",{onClick:f,className:`zep-fixed zep-top-[0px] zep-left-[0px] zep-bg-[#000] transition-all zep-duration-500  zep-w-screen zep-h-screen zep-z-[500] ${z?"zep-opacity-70":"zep-opacity-[0]"}`})]})]})};try{q.displayName="LanguageSwitcher",q.__docgenInfo={description:"",displayName:"LanguageSwitcher",props:{header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"string"}},labelBack:{defaultValue:null,description:"",name:"labelBack",required:!0,type:{name:"string"}},setLocaleSwitcherMenu:{defaultValue:null,description:"",name:"setLocaleSwitcherMenu",required:!1,type:{name:"((x: boolean) => void)"}},selectedLocale:{defaultValue:null,description:"",name:"selectedLocale",required:!1,type:{name:"Locale"}},setLanguageSwitcher:{defaultValue:null,description:"",name:"setLanguageSwitcher",required:!1,type:{name:"((x: boolean) => void)"}},locales:{defaultValue:null,description:"",name:"locales",required:!1,type:{name:"Locale[]"}},setSelectedLocale:{defaultValue:null,description:"",name:"setSelectedLocale",required:!1,type:{name:"((x: Locale) => void)"}}}}}catch{}const E=({navItems:r,setOpen:p,initialPath:i,setInitialPath:w,selectedLocale:c,locales:b,header:m="",labelBack:z,setSelectedLocale:v,navigationUtilityItems:g})=>{var a;const[u,f]=s.useState(!1),[h,x]=s.useState(!1),[k,n]=s.useState(!1);s.useEffect(()=>{f(!0)},[]),s.useEffect(()=>(u?document.body.classList.add("zep-overflow-hidden"):document.body.classList.remove("zep-overflow-hidden"),()=>{document.body.classList.remove("zep-overflow-hidden")}),[u]);const d=()=>{setTimeout(()=>{w([]),p(!1)},500),f(!1)},t=({items:y,children:M})=>{var U,G;const[I,V]=s.useState(i||[]),[B,D]=s.useState(i?i[0]:"1"),[Y,P]=s.useState(!1),[Z,T]=s.useState(!1);s.useEffect(()=>{i&&(i==null?void 0:i.length)>0&&V(i)},[]);const ee=(l,o)=>{V(S=>[...S.slice(0,o),l])},ae=()=>{V(l=>{const o=l.slice(0,-1);return D(o.length>0?o[o.length-1]:"1"),o})},O=(l,o)=>{let S=l;for(const R of o){const $=S.find(te=>te.navId===R);if($&&$.children)S=$.children;else break}return S},ne=O(y,I),C=O(y,I.slice(0,-1)),le=J();return e.jsxs("div",{className:Y?"zep-animate-slide-in":Z?"zep-animate-slide-out":"",children:[I.length>0&&e.jsx("div",{className:"zep-text-typography-light-100 zep-mb-2.5 zep-flex zep-gap-0.5 zep-items-center",children:e.jsx(j,{mode:N.Standalone,label:z,iconPlacement:"before",icon:"arrow-long-left",onClick:l=>{l.preventDefault(),T(!0),setTimeout(()=>{T(!1),ae()},300)}})}),e.jsxs("ul",{children:[I.length>0&&e.jsx("li",{className:"zep-flex zep-gap-0.5",children:e.jsx(j,{label:(U=C[Number(B)-1])==null?void 0:U.label,href:(G=C[Number(B)-1])==null?void 0:G.link,className:"zep-mb-1.5 zep-text-typography-light-100",icon:"home",iconPlacement:"before",mode:N.Standalone})}),ne.map(l=>e.jsx("li",{className:`${I.length>0?"zep-pl-2":""}`,children:l.children&&l.children.length>0?e.jsx("div",{className:"zep-flex zep-gap-0.5 zep-items-center zep-mb-1.5 ",children:e.jsx(j,{label:l.label,className:"zep-text-typography-light-100",mode:N.Standalone,href:l.link,iconPlacement:"before",icon:"arrow-long-right",onClick:o=>{o.preventDefault(),D(l.navId),P(!0),ee(l.navId,I.length),setTimeout(()=>P(!1),300)}})}):e.jsx(j,{label:l.label,className:"zep-mb-1.5 zep-text-typography-light-100  zep-justify-end",iconPlacement:"before",mode:N.Standalone,onClickCapture:()=>{var o;le.push({event:"interaction_nav",link_text:l.label,link_type:"main_nav",link_section:(o=C[Number(B)-1])==null?void 0:o.label})},href:l.link})},`${l.navId}-${l.label}`))]}),M&&e.jsx("div",{children:M})]})};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"md:zep-hidden",children:e.jsx("div",{className:`zep-fixed zep-top-[0px] zep-left-[0px] zep-py-1 sm:zep-py-2 zep-bg-background-dark zep-z-[1000] zep-ease-in-out zep-h-screen zep-duration-500 ${u?"zep-w-full md:zep-transform zep-translate-x-0 lg:zep-transform zep-translate-x-0":"-zep-translate-x-full"}`,children:e.jsxs("div",{className:`${u?"zep-block":""} zep-h-[calc(100svh-40px)] zep-overflow-auto`,children:[e.jsx("div",{className:"zep-flex zep-justify-end zep-mb-1 zep-mr-1 sm:zep-mr-2",children:e.jsx(L,{name:"close",color:"#fff",size:24,onClick:d})}),e.jsx("div",{className:`${k?"zep-animate-slide-in":""}`,children:h?e.jsx("div",{className:"zep-px-1.5 sm:zep-px-3",children:e.jsx(q,{locales:b,header:m,labelBack:z,selectedLocale:c,setLanguageSwitcher:x,setSelectedLocale:v})}):e.jsx("div",{children:e.jsx("div",{className:"zep-px-1.5 sm:zep-px-3",children:e.jsxs(t,{items:r,children:[e.jsx("div",{className:"zep-w-full zep-h-[1px] zep-bg-greyscale-700 zep-mt-2.5 zep-mb-2.5"}),e.jsx("div",{className:"",children:g==null?void 0:g.map(y=>e.jsx(j,{label:y.label,href:"",mode:N.Standalone,className:"zep-text-typography-light-100 zep-mb-1.5"},y.label))}),e.jsxs("div",{className:"zep-flex zep-gap-0.5 zep-items-center zep-mb-3",onClick:y=>{y.preventDefault(),x(!0),n(!0),setTimeout(()=>n(!1),300)},children:[e.jsx("img",{alt:"Language switch icon",src:Q,className:"zep-w-1"}),e.jsx("p",{className:"zep-text-typography-light-100 zep-font-500",children:`${c==null?void 0:c.country} | ${(a=c==null?void 0:c.langAbbrev)==null?void 0:a.toUpperCase()}`})]})]})})})})]})})}),e.jsxs("div",{className:"zep-hidden md:zep-block",children:[e.jsx("div",{className:`zep-fixed zep-top-[0px] zep-left-[0px] md:zep-w-[440px] lg:zep-w-[500px] zep-pt-2 zep-bg-background-dark zep-ease-in-out zep-w-[0px] zep-duration-500 zep-h-screen zep-z-[1000] ${u?"md:zep-transform zep-translate-x-0 lg:zep-transform zep-translate-x-0":"-zep-translate-x-full"}`,children:e.jsxs("div",{className:`${u?"zep-block":""} zep-h-[calc(100svh-40px)] zep-overflow-auto`,children:[e.jsx("div",{className:"zep-flex zep-justify-end zep-pr-2 zep-mb-2",children:e.jsx(L,{name:"close",color:"#fff",size:24,onClick:d,className:"zep-cursor-pointer"})}),e.jsx("div",{className:"zep-px-3",children:e.jsx(t,{items:r})})]})}),e.jsx("div",{onClick:d,className:`zep-fixed zep-top-[0px] zep-left-[0px] zep-bg-[#000] transition-all zep-duration-500  zep-w-screen zep-h-screen zep-z-[500] ${u?"zep-opacity-70":"zep-opacity-[0]"}`})]})]})};try{E.displayName="Sidebar",E.__docgenInfo={description:"",displayName:"Sidebar",props:{navItems:{defaultValue:null,description:"",name:"navItems",required:!0,type:{name:"NavigationItem[]"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},setOpen:{defaultValue:null,description:"",name:"setOpen",required:!0,type:{name:"(x: boolean) => void"}},initialPath:{defaultValue:null,description:"",name:"initialPath",required:!1,type:{name:"string[]"}},setInitialPath:{defaultValue:null,description:"",name:"setInitialPath",required:!0,type:{name:"(x: string[]) => void"}},selectedLocale:{defaultValue:null,description:"",name:"selectedLocale",required:!1,type:{name:"Locale"}},locales:{defaultValue:null,description:"",name:"locales",required:!1,type:{name:"Locale[]"}},header:{defaultValue:{value:""},description:"",name:"header",required:!1,type:{name:"string"}},labelBack:{defaultValue:null,description:"",name:"labelBack",required:!0,type:{name:"string"}},setSelectedLocale:{defaultValue:null,description:"",name:"setSelectedLocale",required:!1,type:{name:"((x: Locale) => void)"}},navigationUtilityItems:{defaultValue:null,description:"",name:"navigationUtilityItems",required:!1,type:{name:"NavUtilityItem[]"}}}}}catch{}const A=({navigationUtilityItems:r,selectedLocale:p,setSelectedLocale:i,logo:w,header:c,labelBack:b,navigationItems:m,locales:z})=>{var d;const[v,g]=s.useState(!1),[u,f]=s.useState([]),[h,x]=s.useState(!1),k=()=>{switch(p==null?void 0:p.value){case F.EN:return"/de/en/";case F.DE_AT:return"/at/de/";default:return"/de/de/"}},n=J();return e.jsxs("div",{className:"zep-bg-background-dark",children:[e.jsxs("div",{className:"zep-hidden md:zep-flex zep-justify-end zep-px-1 sm:zep-px-1.5 md:zep-px-[66px] lg:zep-px-[122px] md:zep-py-0.75 zep-border-b-1 zep-border-greyscale-700",children:[e.jsx("div",{className:"zep-flex zep-gap-2 zep-mr-3",children:r==null?void 0:r.map((t,a)=>e.jsx(j,{label:t.label,href:t.link||"",mode:N.Standalone,onClickCapture:()=>{n.push({event:"interaction_nav",link_text:t.label,link_type:"top_nav"})},className:"zep-text-typography-light-100 zep-text-0.875"},`${t.label}${a}`))}),e.jsxs("div",{className:"zep-flex zep-gap-0.5 zep-items-center zep-cursor-pointer zep-group",onClick:()=>x(!0),children:[e.jsx("img",{className:"zep-size-[18px]",alt:"Language switch icon",src:Q}),e.jsx("p",{className:"zep-text-typography-light-100 zep-font-500 zep-text-0.875 group-hover:zep-underline",children:`${p==null?void 0:p.country} | ${(d=p==null?void 0:p.langAbbrev)==null?void 0:d.toUpperCase()}`})]})]}),e.jsxs("div",{className:"zep-p-1 sm:zep-px-1.5 md:zep-px-[66px] lg:zep-px-[122px] md:zep-py-1.5 zep-flex zep-justify-between md:zep-justify-start zep-items-center zep-border-b-1 zep-border-greyscale-700",children:[e.jsx("a",{href:k(),children:e.jsx("img",{alt:"logo",src:w,className:"md:zep-mr-3 xl:zep-mr-4"})}),e.jsx("img",{alt:"hamburger_menu",src:se,className:"md:zep-hidden",onClick:()=>g(!0)}),e.jsx("div",{className:"zep-hidden md:zep-flex md:zep-gap-2.5 lg:zep-gap-3.5",children:m==null?void 0:m.map((t,a)=>e.jsxs("div",{onClick:()=>{g(!0),t.children&&f([t.navId])},className:"zep-group zep-relative zep-cursor-pointer",children:[e.jsx("p",{className:"zep-typography-navigation zep-text-typography-light-100 zep-uppercase zep-py-0.25",children:t.label}),e.jsx("div",{className:"zep-hidden group-hover:zep-block group-hover:zep-absolute zep-w-full",children:e.jsx("div",{className:"zep-w-[24px] zep-h-[2px] zep-bg-yellow-500 zep-mx-auto"})})]},`${t.label}${a}`))})]}),v&&e.jsx(E,{initialPath:u,setInitialPath:f,navItems:m,open:v,setOpen:g,selectedLocale:p,header:c,labelBack:b,locales:z,setSelectedLocale:i,navigationUtilityItems:r}),h&&e.jsx(q,{setLocaleSwitcherMenu:x,locales:z,labelBack:b,header:c,selectedLocale:p,setSelectedLocale:i})]})};try{A.displayName="Navigation",A.__docgenInfo={description:"",displayName:"Navigation",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},navigationUtilityItems:{defaultValue:null,description:"",name:"navigationUtilityItems",required:!1,type:{name:"NavUtilityItem[]"}},navigationItems:{defaultValue:null,description:"",name:"navigationItems",required:!0,type:{name:"NavigationItem[]"}},selectedLocale:{defaultValue:null,description:"",name:"selectedLocale",required:!1,type:{name:"Locale"}},setSelectedLocale:{defaultValue:null,description:"",name:"setSelectedLocale",required:!1,type:{name:"((locale: Locale) => void)"}},locales:{defaultValue:null,description:"",name:"locales",required:!1,type:{name:"Locale[]"}},logo:{defaultValue:null,description:"",name:"logo",required:!0,type:{name:"string"}},header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"string"}},labelBack:{defaultValue:null,description:"",name:"labelBack",required:!0,type:{name:"string"}}}}}catch{}const he={title:"Components/Navigation",component:A,tags:["autodocs"],argTypes:{}},K=[{label:"Deutsch",value:"de",country:"Deutsch",langAbbrev:"DE"},{label:"English",value:"en",country:"Germany",langAbbrev:"EN"},{label:"Deutsch",value:"de-AT",country:"Österreich",langAbbrev:"DE"}],_={args:{logo:re,navigationItems:[{navId:"1",label:"Marine",link:"/Marine",children:[{navId:"1",label:"Loesungen",link:"/Loesungen",children:[{navId:"1",label:"Bratwurst",link:"/Bratwurst",children:[{navId:"1",label:"Bratwurst 1",link:"https://www.google.co.uk/"}]},{navId:"2",label:"Marine 1-2"}]},{navId:"2",label:"Power and heat",link:"/Ppower-and-heat",children:[{navId:"1",label:"Bratwurst",children:[{navId:"1",label:"Bratwurst 1",link:"https://www.google.co.uk/"}]},{navId:"2",label:"Marine 1-2"}]},{navId:"3",label:"LILA",link:"",children:[{navId:"1",label:"Bratwurst",children:[{navId:"1",label:"Bratwurst 1",link:"https://www.google.co.uk/"}]},{navId:"2",label:"Marine 1-2"}]}]},{navId:"2",label:"Strom & Wärme",children:[{navId:"1",label:"Strom 1"}]},{navId:"3",label:"Industrie",children:[{label:"Industrie 1"}]},{navId:"4",label:"Öl & Gas"},{navId:"5",label:"Schiene"},{navId:"6",label:"Gebrauchtmaschinen"}],locales:K,header:" Select preferred country and language",labelBack:"Back",selectedLocale:K[0],navigationUtilityItems:[{label:"Services"},{label:"Unternehmen"},{label:"Kontakt & Standorte"}]}};var W,X,H;_.parameters={..._.parameters,docs:{...(W=_.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    logo: zepCatLogo,
    navigationItems: [{
      navId: '1',
      label: 'Marine',
      link: '/Marine',
      children: [{
        navId: '1',
        label: 'Loesungen',
        link: '/Loesungen',
        children: [{
          navId: '1',
          label: 'Bratwurst',
          link: '/Bratwurst',
          children: [{
            navId: '1',
            label: 'Bratwurst 1',
            link: 'https://www.google.co.uk/'
          }]
        }, {
          navId: '2',
          label: 'Marine 1-2'
        }]
      }, {
        navId: '2',
        label: 'Power and heat',
        link: '/Ppower-and-heat',
        children: [{
          navId: '1',
          label: 'Bratwurst',
          children: [{
            navId: '1',
            label: 'Bratwurst 1',
            link: 'https://www.google.co.uk/'
          }]
        }, {
          navId: '2',
          label: 'Marine 1-2'
        }]
      }, {
        navId: '3',
        label: 'LILA',
        link: '',
        children: [{
          navId: '1',
          label: 'Bratwurst',
          children: [{
            navId: '1',
            label: 'Bratwurst 1',
            link: 'https://www.google.co.uk/'
          }]
        }, {
          navId: '2',
          label: 'Marine 1-2'
        }]
      }]
    }, {
      navId: '2',
      label: 'Strom & Wärme',
      children: [{
        navId: '1',
        label: 'Strom 1'
      }]
    }, {
      navId: '3',
      label: 'Industrie',
      children: [{
        label: 'Industrie 1'
      }]
    }, {
      navId: '4',
      label: 'Öl & Gas'
    }, {
      navId: '5',
      label: 'Schiene'
    }, {
      navId: '6',
      label: 'Gebrauchtmaschinen'
    }],
    locales: locales,
    header: ' Select preferred country and language',
    labelBack: 'Back',
    selectedLocale: locales[0],
    navigationUtilityItems: [{
      label: 'Services'
    }, {
      label: 'Unternehmen'
    }, {
      label: 'Kontakt & Standorte'
    }]
  } as NavigationProps
}`,...(H=(X=_.parameters)==null?void 0:X.docs)==null?void 0:H.source}}};const ge=["Default"];export{_ as Default,ge as __namedExportsOrder,he as default};
