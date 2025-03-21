import{j as e}from"./jsx-runtime-1a9d9a93.js";import{Z as w,l as N}from"./index.es16-1ce448e1.js";import{r as l}from"./index-8b3efc3f.js";import{L as U}from"./global-variants-893e06e6.js";import{h as L}from"./index.es13-751bc762.js";import"./index.es31-95f1013f.js";import"./_commonjsHelpers-de833af9.js";const ne=""+new URL("zep-cat-logo-7a4ba8ca.svg",import.meta.url).href,le=""+new URL("burger-fe2d6553.svg",import.meta.url).href,H=""+new URL("language-icon-fedf31c2.svg",import.meta.url).href,V=({selectedLocale:r,setLocaleSwitcherMenu:s,locales:i,header:k,labelBack:g,setLanguageSwitcher:y,setSelectedLocale:u})=>{var v,I;const[m,j]=l.useState(!1),[x,c]=l.useState(!1);l.useEffect(()=>{j(!0)},[]),l.useEffect(()=>(m?document.body.classList.add("zep-overflow-hidden"):document.body.classList.remove("zep-overflow-hidden"),()=>{document.body.classList.remove("zep-overflow-hidden")}),[m]);const b=()=>{setTimeout(()=>{s&&s(!1)},500),j(!1)},z=i==null?void 0:i.reduce((n,p)=>(n[p.country]||(n[p.country]=[]),n[p.country].push(p),n),{});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`${x?"zep-animate-slide-out":""} md:zep-hidden`,children:[e.jsx("div",{className:"zep-text-typography-light-100 zep-mb-1.5 zep-flex zep-gap-0.5 zep-items-center",children:e.jsx(w,{mode:N.Standalone,label:g,iconPlacement:"before",icon:"arrow-long-left",onClick:n=>{n.preventDefault(),c(!0),setTimeout(()=>{c(!1),y&&y(!1)},300)}})}),e.jsx("h4",{className:"zep-text-headlineXS-fluid-cqi zep-text-typography-light-100 zep-mb-2",children:k}),z&&((v=Object.keys(z))==null?void 0:v.map((n,p)=>{var h;return e.jsxs("div",{className:"zep-mb-3",children:[e.jsx("p",{className:"zep-mb-1.5 zep-typography-bodyText zep-text-typography-light-100",children:n}),(h=z[n])==null?void 0:h.map(a=>e.jsxs("div",{className:"zep-flex zep-gap-1 zep-mb-1.5 zep-items-center",onClick:()=>u&&u(a),children:[e.jsx("div",{className:"zep-w-1.5 zep-h-1.5 zep-bg-typography-light-100 zep-flex zep-justify-center zep-items-center zep-rounded-full",children:(r==null?void 0:r.value)===(a==null?void 0:a.value)&&e.jsx("div",{className:"zep-w-0.75 zep-h-0.75 zep-bg-neutral-dark-default zep-rounded-full"})}),e.jsx("p",{className:"zep-typography-bodyText zep-text-typography-light-100",children:a==null?void 0:a.label})]},a.value))]},`${n}${p}`)}))]}),e.jsxs("div",{className:"zep-hidden md:zep-block",children:[e.jsx("div",{className:`zep-fixed zep-top-[0px] zep-right-[0px] md:zep-w-[440px] lg:zep-w-[480px] zep-pl-3 zep-pt-2 zep-pr-2 zep-bg-background-dark zep-ease-out zep-w-[0px] zep-duration-500 zep-h-screen zep-z-[1000] ${m?"zep-translate-x-0 ":"zep-translate-x-full"}`,children:e.jsxs("div",{className:`${m?"zep-block zep-overflow-hidden":""}`,children:[e.jsx("div",{className:"zep-flex zep-justify-end zep-mb-2",children:e.jsx(L,{name:"close",color:"#fff",size:24,onClick:b,className:"zep-cursor-pointer"})}),e.jsx("h4",{className:"zep-text-headlineXS-fluid-cqi zep-text-typography-light-100 zep-mb-3",children:k}),z&&((I=Object.keys(z))==null?void 0:I.map((n,p)=>{var h;return e.jsxs("div",{className:"zep-mb-3",children:[e.jsx("p",{className:"zep-mb-1.5 zep-typography-bodyText zep-text-typography-light-100",children:n}),(h=z[n])==null?void 0:h.map(a=>e.jsxs("div",{className:"zep-flex zep-gap-1 zep-mb-1.5 zep-items-center",onClick:()=>u&&u(a),children:[e.jsx("div",{className:"zep-w-1.5 zep-h-1.5 zep-bg-typography-light-100 zep-flex zep-justify-center zep-items-center zep-rounded-full",children:(r==null?void 0:r.value)===(a==null?void 0:a.value)&&e.jsx("div",{className:"zep-w-0.75 zep-h-0.75 zep-bg-neutral-dark-default zep-rounded-full"})}),e.jsx("p",{className:"zep-typography-bodyText zep-text-typography-light-100",children:a==null?void 0:a.label})]},a.value))]},`${n}${p}`)}))]})}),e.jsx("div",{onClick:b,className:`zep-fixed zep-top-[0px] zep-left-[0px] zep-bg-[#000] transition-all zep-duration-500  zep-w-screen zep-h-screen zep-z-[500] ${m?"zep-opacity-70":"zep-opacity-[0]"}`})]})]})};try{V.displayName="LanguageSwitcher",V.__docgenInfo={description:"",displayName:"LanguageSwitcher",props:{header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"string"}},labelBack:{defaultValue:null,description:"",name:"labelBack",required:!0,type:{name:"string"}},setLocaleSwitcherMenu:{defaultValue:null,description:"",name:"setLocaleSwitcherMenu",required:!1,type:{name:"((x: boolean) => void)"}},selectedLocale:{defaultValue:null,description:"",name:"selectedLocale",required:!1,type:{name:"Locale"}},setLanguageSwitcher:{defaultValue:null,description:"",name:"setLanguageSwitcher",required:!1,type:{name:"((x: boolean) => void)"}},locales:{defaultValue:null,description:"",name:"locales",required:!1,type:{name:"Locale[]"}},setSelectedLocale:{defaultValue:null,description:"",name:"setSelectedLocale",required:!1,type:{name:"((x: Locale) => void)"}}}}}catch{}const $=({navItems:r,setOpen:s,initialPath:i,setInitialPath:k,selectedLocale:g,locales:y,header:u="",labelBack:m,setSelectedLocale:j,navigationUtilityItems:x})=>{const[c,b]=l.useState(!1),[z,v]=l.useState(!1),[I,n]=l.useState(!1);l.useEffect(()=>{b(!0)},[]),l.useEffect(()=>(c?document.body.classList.add("zep-overflow-hidden"):document.body.classList.remove("zep-overflow-hidden"),()=>{document.body.classList.remove("zep-overflow-hidden")}),[c]);const p=()=>{setTimeout(()=>{k([]),s(!1)},500),b(!1)},h=({items:a,children:d})=>{var O,G;const[o,_]=l.useState(i||[]),[E,M]=l.useState(i?i[0]:"1"),[Y,A]=l.useState(!1),[Z,T]=l.useState(!1);l.useEffect(()=>{i&&(i==null?void 0:i.length)>0&&_(i)},[]);const J=(t,f)=>{_(S=>[...S.slice(0,f),t])},Q=()=>{_(t=>{const f=t.slice(0,-1);return M(f.length>0?f[f.length-1]:"1"),f})},D=(t,f)=>{let S=t;for(const R of f){const B=S.find(ae=>ae.navId===R);if(B&&B.children)S=B.children;else break}return S},ee=D(a,o),P=D(a,o.slice(0,-1));return e.jsxs("div",{className:Y?"zep-animate-slide-in":Z?"zep-animate-slide-out":"",children:[o.length>0&&e.jsx("div",{className:"zep-text-typography-light-100 zep-mb-2.5 zep-flex zep-gap-0.5 zep-items-center",children:e.jsx(w,{mode:N.Standalone,label:m,iconPlacement:"before",icon:"arrow-long-left",onClick:t=>{t.preventDefault(),T(!0),setTimeout(()=>{T(!1),Q()},300)}})}),e.jsxs("ul",{children:[o.length>0&&e.jsx("li",{className:"zep-flex zep-gap-0.5",children:e.jsx(w,{label:(O=P[Number(E)-1])==null?void 0:O.label,href:(G=P[Number(E)-1])==null?void 0:G.link,className:"zep-mb-1.5 zep-text-typography-light-100",icon:"home",iconPlacement:"before",mode:N.Standalone})}),ee.map(t=>e.jsx("li",{className:`${o.length>0?"zep-pl-2":""}`,children:t.children&&t.children.length>0?e.jsx("div",{className:"zep-flex zep-gap-0.5 zep-items-center zep-mb-1.5 ",children:e.jsx(w,{label:t.label,className:"zep-text-typography-light-100",mode:N.Standalone,href:t.link,iconPlacement:"before",icon:"arrow-long-right",onClick:f=>{f.preventDefault(),M(t.navId),A(!0),J(t.navId,o.length),setTimeout(()=>A(!1),300)}})}):e.jsx(w,{label:t.label,className:"zep-mb-1.5 zep-text-typography-light-100  zep-justify-end",iconPlacement:"before",mode:N.Standalone,href:t.link})},`${t.navId}-${t.label}`))]}),d&&e.jsx("div",{children:d})]})};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"md:zep-hidden",children:e.jsx("div",{className:`zep-fixed zep-top-[0px] zep-left-[0px] zep-py-1 sm:zep-py-2 zep-bg-background-dark zep-z-[1000] zep-ease-in-out zep-h-screen zep-duration-500 ${c?"zep-w-full md:zep-transform zep-translate-x-0 lg:zep-transform zep-translate-x-0":"-zep-translate-x-full"}`,children:e.jsxs("div",{className:`${c?"zep-block":""} zep-h-[calc(100svh-40px)] zep-overflow-auto`,children:[e.jsx("div",{className:"zep-flex zep-justify-end zep-mb-1 zep-mr-1 sm:zep-mr-2",children:e.jsx(L,{name:"close",color:"#fff",size:24,onClick:p})}),e.jsx("div",{className:`${I?"zep-animate-slide-in":""}`,children:z?e.jsx("div",{className:"zep-px-1.5 sm:zep-px-3",children:e.jsx(V,{locales:y,header:u,labelBack:m,selectedLocale:g,setLanguageSwitcher:v,setSelectedLocale:j})}):e.jsx("div",{children:e.jsx("div",{className:"zep-px-1.5 sm:zep-px-3",children:e.jsxs(h,{items:r,children:[e.jsx("div",{className:"zep-w-full zep-h-[1px] zep-bg-greyscale-700 zep-mt-2.5 zep-mb-2.5"}),e.jsx("div",{className:"",children:x==null?void 0:x.map(a=>e.jsx(w,{label:a.label,href:"",mode:N.Standalone,className:"zep-text-typography-light-100 zep-mb-1.5"},a.label))}),e.jsxs("div",{className:"zep-flex zep-gap-0.5 zep-items-center zep-mb-3",onClick:a=>{a.preventDefault(),v(!0),n(!0),setTimeout(()=>n(!1),300)},children:[e.jsx("img",{alt:"Language switch icon",src:H,className:"zep-w-1"}),e.jsx("p",{className:"zep-text-typography-light-100 zep-font-500",children:g==null?void 0:g.label})]})]})})})})]})})}),e.jsxs("div",{className:"zep-hidden md:zep-block",children:[e.jsx("div",{className:`zep-fixed zep-top-[0px] zep-left-[0px] md:zep-w-[440px] lg:zep-w-[500px] zep-pt-2 zep-bg-background-dark zep-ease-in-out zep-w-[0px] zep-duration-500 zep-h-screen zep-z-[1000] ${c?"md:zep-transform zep-translate-x-0 lg:zep-transform zep-translate-x-0":"-zep-translate-x-full"}`,children:e.jsxs("div",{className:`${c?"zep-block":""} zep-h-[calc(100svh-40px)] zep-overflow-auto`,children:[e.jsx("div",{className:"zep-flex zep-justify-end zep-pr-2 zep-mb-2",children:e.jsx(L,{name:"close",color:"#fff",size:24,onClick:p,className:"zep-cursor-pointer"})}),e.jsx("div",{className:"zep-px-3",children:e.jsx(h,{items:r})})]})}),e.jsx("div",{onClick:p,className:`zep-fixed zep-top-[0px] zep-left-[0px] zep-bg-[#000] transition-all zep-duration-500  zep-w-screen zep-h-screen zep-z-[500] ${c?"zep-opacity-70":"zep-opacity-[0]"}`})]})]})};try{$.displayName="Sidebar",$.__docgenInfo={description:"",displayName:"Sidebar",props:{navItems:{defaultValue:null,description:"",name:"navItems",required:!0,type:{name:"NavigationItem[]"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},setOpen:{defaultValue:null,description:"",name:"setOpen",required:!0,type:{name:"(x: boolean) => void"}},initialPath:{defaultValue:null,description:"",name:"initialPath",required:!1,type:{name:"string[]"}},setInitialPath:{defaultValue:null,description:"",name:"setInitialPath",required:!0,type:{name:"(x: string[]) => void"}},selectedLocale:{defaultValue:null,description:"",name:"selectedLocale",required:!1,type:{name:"Locale"}},locales:{defaultValue:null,description:"",name:"locales",required:!1,type:{name:"Locale[]"}},header:{defaultValue:{value:""},description:"",name:"header",required:!1,type:{name:"string"}},labelBack:{defaultValue:null,description:"",name:"labelBack",required:!0,type:{name:"string"}},setSelectedLocale:{defaultValue:null,description:"",name:"setSelectedLocale",required:!1,type:{name:"((x: Locale) => void)"}},navigationUtilityItems:{defaultValue:null,description:"",name:"navigationUtilityItems",required:!1,type:{name:"NavUtilityItem[]"}}}}}catch{}const C=({navigationUtilityItems:r,selectedLocale:s,setSelectedLocale:i,logo:k,header:g,labelBack:y,navigationItems:u,locales:m})=>{var a;const[j,x]=l.useState(!1),[c,b]=l.useState([]),[z,v]=l.useState(!1),[I,n]=l.useState(!0),p=l.useRef(0),h=()=>{switch(s==null?void 0:s.value){case U.EN:return"/de/en/";case U.DE_AT:return"/at/de/";default:return"/de/de/"}};return l.useEffect(()=>{const d=()=>{const o=window.scrollY;o>p.current?n(!1):o<p.current&&n(!0),p.current=o};return window.addEventListener("scroll",d),()=>{window.removeEventListener("scroll",d)}},[]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:`zep-bg-background-dark zep-fixed zep-top-[0] zep-left-[0] zep-right-[0] zep-w-full zep-transition-transform zep-duration-300 ${I?"zep-translate-y-[0]":"-zep-translate-y-full"}`,children:[e.jsxs("div",{className:"zep-hidden md:zep-flex zep-justify-end zep-px-1 sm:zep-px-1.5 md:zep-px-[66px] lg:zep-px-[122px] md:zep-py-0.75 zep-border-b-1 zep-border-greyscale-700",children:[e.jsx("div",{className:"zep-flex zep-gap-2 zep-mr-3",children:r==null?void 0:r.map((d,o)=>e.jsx(w,{label:d.label,href:d.link||"",mode:N.Standalone,className:"zep-text-typography-light-100 zep-text-0.875"},`${d.label}${o}`))}),e.jsxs("div",{className:"zep-flex zep-gap-0.5 zep-items-center zep-cursor-pointer zep-group",onClick:()=>v(!0),children:[e.jsx("img",{className:"zep-size-[18px]",alt:"Language switch icon",src:H}),e.jsx("p",{className:"zep-text-typography-light-100 zep-font-500 zep-text-0.875 group-hover:zep-underline",children:`${s==null?void 0:s.country} | ${(a=s==null?void 0:s.langAbbrev)==null?void 0:a.toUpperCase()}`})]})]}),e.jsxs("div",{className:"zep-p-1 sm:zep-px-1.5 md:zep-px-[66px] lg:zep-px-[122px] md:zep-py-1.5 zep-flex zep-justify-between md:zep-justify-start zep-items-center zep-border-b-1 zep-border-greyscale-700",children:[e.jsx("a",{href:h(),children:e.jsx("img",{alt:"logo",src:k,className:"md:zep-mr-3 xl:zep-mr-4"})}),e.jsx("img",{alt:"hamburger_menu",src:le,className:"md:zep-hidden",onClick:()=>x(!0)}),e.jsx("div",{className:"zep-hidden md:zep-flex md:zep-gap-2.5 lg:zep-gap-3.5",children:u==null?void 0:u.map((d,o)=>e.jsxs("div",{onClick:()=>{x(!0),d.children&&b([d.navId])},className:"zep-group zep-relative zep-cursor-pointer",children:[e.jsx("p",{className:"zep-typography-navigation zep-text-typography-light-100 zep-uppercase zep-py-0.25",children:d.label}),e.jsx("div",{className:"zep-hidden group-hover:zep-block group-hover:zep-absolute zep-w-full",children:e.jsx("div",{className:"zep-w-[24px] zep-h-[2px] zep-bg-yellow-500 zep-mx-auto"})})]},`${d.label}${o}`))})]}),j&&e.jsx($,{initialPath:c,setInitialPath:b,navItems:u,open:j,setOpen:x,selectedLocale:s,header:g,labelBack:y,locales:m,setSelectedLocale:i,navigationUtilityItems:r}),z&&e.jsx(V,{setLocaleSwitcherMenu:v,locales:m,labelBack:y,header:g,selectedLocale:s,setSelectedLocale:i})]})})};try{C.displayName="Navigation",C.__docgenInfo={description:"",displayName:"Navigation",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},navigationUtilityItems:{defaultValue:null,description:"",name:"navigationUtilityItems",required:!1,type:{name:"NavUtilityItem[]"}},navigationItems:{defaultValue:null,description:"",name:"navigationItems",required:!0,type:{name:"NavigationItem[]"}},selectedLocale:{defaultValue:null,description:"",name:"selectedLocale",required:!1,type:{name:"Locale"}},setSelectedLocale:{defaultValue:null,description:"",name:"setSelectedLocale",required:!1,type:{name:"((locale: Locale) => void)"}},locales:{defaultValue:null,description:"",name:"locales",required:!1,type:{name:"Locale[]"}},logo:{defaultValue:null,description:"",name:"logo",required:!0,type:{name:"string"}},header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"string"}},labelBack:{defaultValue:null,description:"",name:"labelBack",required:!0,type:{name:"string"}}}}}catch{}const ce={title:"Components/Navigation",component:C,tags:["autodocs"],argTypes:{}},F=[{label:"Deutsch",value:"de",country:"Deutsch",langAbbrev:"DE"},{label:"English",value:"en",country:"Germany",langAbbrev:"EN"},{label:"Deutsch",value:"de-AT",country:"Österreich",langAbbrev:"DE"}],q={args:{logo:ne,navigationItems:[{navId:"1",label:"Marine",link:"/Marine",children:[{navId:"1",label:"Loesungen",link:"/Loesungen",children:[{navId:"1",label:"Bratwurst",link:"/Bratwurst",children:[{navId:"1",label:"Bratwurst 1",link:"https://www.google.co.uk/"}]},{navId:"2",label:"Marine 1-2"}]},{navId:"2",label:"Power and heat",link:"/Ppower-and-heat",children:[{navId:"1",label:"Bratwurst",children:[{navId:"1",label:"Bratwurst 1",link:"https://www.google.co.uk/"}]},{navId:"2",label:"Marine 1-2"}]},{navId:"3",label:"LILA",link:"",children:[{navId:"1",label:"Bratwurst",children:[{navId:"1",label:"Bratwurst 1",link:"https://www.google.co.uk/"}]},{navId:"2",label:"Marine 1-2"}]}]},{navId:"2",label:"Strom & Wärme",children:[{navId:"1",label:"Strom 1"}]},{navId:"3",label:"Industrie",children:[{label:"Industrie 1"}]},{navId:"4",label:"Öl & Gas"},{navId:"5",label:"Schiene"},{navId:"6",label:"Gebrauchtmaschinen"}],locales:F,header:" Select preferred country and language",labelBack:"Back",selectedLocale:F[0],navigationUtilityItems:[{label:"Services"},{label:"Unternehmen"},{label:"Kontakt & Standorte"}]}};var K,W,X;q.parameters={...q.parameters,docs:{...(K=q.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(X=(W=q.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};const ue=["Default"];export{q as Default,ue as __namedExportsOrder,ce as default};
