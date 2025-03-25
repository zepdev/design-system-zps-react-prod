import{j as e}from"./jsx-runtime-1a9d9a93.js";import{Z as j,l as N}from"./index.es16-1ce448e1.js";import{r as s}from"./index-8b3efc3f.js";import{L as F}from"./global-variants-893e06e6.js";import{h as $}from"./index.es13-751bc762.js";import"./index.es31-95f1013f.js";import"./_commonjsHelpers-de833af9.js";const le=""+new URL("zep-cat-logo-7a4ba8ca.svg",import.meta.url).href,te=""+new URL("burger-fe2d6553.svg",import.meta.url).href,Z=""+new URL("language-icon-fedf31c2.svg",import.meta.url).href,V=({selectedLocale:r,setLocaleSwitcherMenu:p,locales:i,header:w,labelBack:d,setLanguageSwitcher:b,setSelectedLocale:u})=>{var x,k;const[m,v]=s.useState(!1),[g,o]=s.useState(!1);s.useEffect(()=>{v(!0)},[]),s.useEffect(()=>(m?document.body.classList.add("zep-overflow-hidden"):document.body.classList.remove("zep-overflow-hidden"),()=>{document.body.classList.remove("zep-overflow-hidden")}),[m]);const f=()=>{setTimeout(()=>{p&&p(!1)},500),v(!1)},z=i==null?void 0:i.reduce((n,a)=>(n[a.country]||(n[a.country]=[]),n[a.country].push(a),n),{});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`${g?"zep-animate-slide-out":""} md:zep-hidden`,children:[e.jsx("div",{className:"zep-text-typography-light-100 zep-mb-2.5 zep-flex zep-gap-0.5 zep-items-center",children:e.jsx(j,{mode:N.Standalone,label:d,iconPlacement:"before",icon:"arrow-long-left",onClick:n=>{n.preventDefault(),o(!0),setTimeout(()=>{o(!1),b&&b(!1)},300)}})}),e.jsx("h4",{className:"zep-text-headlineXS-fluid-cqi zep-text-typography-light-100 zep-mb-2",children:w}),z&&((x=Object.keys(z))==null?void 0:x.map((n,a)=>{var c;return e.jsxs("div",{className:"zep-mb-3",children:[e.jsx("p",{className:"zep-mb-1.5 zep-typography-bodyText zep-text-typography-light-100",children:n}),(c=z[n])==null?void 0:c.map(l=>e.jsxs("div",{className:"zep-flex zep-gap-1 zep-mb-1.5 zep-items-center",onClick:()=>u&&u(l),children:[e.jsx("div",{className:"zep-w-1.5 zep-h-1.5 zep-bg-typography-light-100 zep-flex zep-justify-center zep-items-center zep-rounded-full",children:(r==null?void 0:r.value)===(l==null?void 0:l.value)&&e.jsx("div",{className:"zep-w-0.75 zep-h-0.75 zep-bg-neutral-dark-default zep-rounded-full"})}),e.jsx("p",{className:"zep-typography-bodyText zep-text-typography-light-100",children:l==null?void 0:l.label})]},l.value))]},`${n}${a}`)}))]}),e.jsxs("div",{className:"zep-hidden md:zep-block",children:[e.jsx("div",{className:`zep-fixed zep-top-[0px] zep-right-[0px] md:zep-w-[440px] lg:zep-w-[480px] zep-pl-3 zep-pt-2 zep-pr-2 zep-bg-background-dark zep-ease-out zep-w-[0px] zep-duration-500 zep-h-screen zep-z-[1000] ${m?"zep-translate-x-0 ":"zep-translate-x-full"}`,children:e.jsxs("div",{className:`${m?"zep-block zep-overflow-hidden":""}`,children:[e.jsx("div",{className:"zep-flex zep-justify-end zep-mb-2",children:e.jsx($,{name:"close",color:"#fff",size:24,onClick:f,className:"zep-cursor-pointer"})}),e.jsx("h4",{className:"zep-text-headlineXS-fluid-cqi zep-text-typography-light-100 zep-mb-3",children:w}),z&&((k=Object.keys(z))==null?void 0:k.map((n,a)=>{var c;return e.jsxs("div",{className:"zep-mb-3",children:[e.jsx("p",{className:"zep-mb-1.5 zep-typography-bodyText zep-text-typography-light-100",children:n}),(c=z[n])==null?void 0:c.map(l=>e.jsxs("div",{className:"zep-flex zep-gap-1 zep-mb-1.5 zep-items-center",onClick:()=>u&&u(l),children:[e.jsx("div",{className:"zep-w-1.5 zep-h-1.5 zep-bg-typography-light-100 zep-flex zep-justify-center zep-items-center zep-rounded-full",children:(r==null?void 0:r.value)===(l==null?void 0:l.value)&&e.jsx("div",{className:"zep-w-0.75 zep-h-0.75 zep-bg-neutral-dark-default zep-rounded-full"})}),e.jsx("p",{className:"zep-typography-bodyText zep-text-typography-light-100",children:l==null?void 0:l.label})]},l.value))]},`${n}${a}`)}))]})}),e.jsx("div",{onClick:f,className:`zep-fixed zep-top-[0px] zep-left-[0px] zep-bg-[#000] transition-all zep-duration-500  zep-w-screen zep-h-screen zep-z-[500] ${m?"zep-opacity-70":"zep-opacity-[0]"}`})]})]})};try{V.displayName="LanguageSwitcher",V.__docgenInfo={description:"",displayName:"LanguageSwitcher",props:{header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"string"}},labelBack:{defaultValue:null,description:"",name:"labelBack",required:!0,type:{name:"string"}},setLocaleSwitcherMenu:{defaultValue:null,description:"",name:"setLocaleSwitcherMenu",required:!1,type:{name:"((x: boolean) => void)"}},selectedLocale:{defaultValue:null,description:"",name:"selectedLocale",required:!1,type:{name:"Locale"}},setLanguageSwitcher:{defaultValue:null,description:"",name:"setLanguageSwitcher",required:!1,type:{name:"((x: boolean) => void)"}},locales:{defaultValue:null,description:"",name:"locales",required:!1,type:{name:"Locale[]"}},setSelectedLocale:{defaultValue:null,description:"",name:"setSelectedLocale",required:!1,type:{name:"((x: Locale) => void)"}}}}}catch{}const C=({navItems:r,setOpen:p,initialPath:i,setInitialPath:w,selectedLocale:d,locales:b,header:u="",labelBack:m,setSelectedLocale:v,navigationUtilityItems:g})=>{var l;const[o,f]=s.useState(!1),[z,x]=s.useState(!1),[k,n]=s.useState(!1);s.useEffect(()=>{f(!0)},[]),s.useEffect(()=>(o?document.body.classList.add("zep-overflow-hidden"):document.body.classList.remove("zep-overflow-hidden"),()=>{document.body.classList.remove("zep-overflow-hidden")}),[o]);const a=()=>{setTimeout(()=>{w([]),p(!1)},500),f(!1)},c=({items:y,children:L})=>{var U,G;const[I,_]=s.useState(i||[]),[A,M]=s.useState(i?i[0]:"1"),[J,D]=s.useState(!1),[Q,P]=s.useState(!1);s.useEffect(()=>{i&&(i==null?void 0:i.length)>0&&_(i)},[]);const Y=(t,h)=>{_(S=>[...S.slice(0,h),t])},ee=()=>{_(t=>{const h=t.slice(0,-1);return M(h.length>0?h[h.length-1]:"1"),h})},T=(t,h)=>{let S=t;for(const R of h){const B=S.find(ne=>ne.navId===R);if(B&&B.children)S=B.children;else break}return S},ae=T(y,I),O=T(y,I.slice(0,-1));return e.jsxs("div",{className:J?"zep-animate-slide-in":Q?"zep-animate-slide-out":"",children:[I.length>0&&e.jsx("div",{className:"zep-text-typography-light-100 zep-mb-2.5 zep-flex zep-gap-0.5 zep-items-center",children:e.jsx(j,{mode:N.Standalone,label:m,iconPlacement:"before",icon:"arrow-long-left",onClick:t=>{t.preventDefault(),P(!0),setTimeout(()=>{P(!1),ee()},300)}})}),e.jsxs("ul",{children:[I.length>0&&e.jsx("li",{className:"zep-flex zep-gap-0.5",children:e.jsx(j,{label:(U=O[Number(A)-1])==null?void 0:U.label,href:(G=O[Number(A)-1])==null?void 0:G.link,className:"zep-mb-1.5 zep-text-typography-light-100",icon:"home",iconPlacement:"before",mode:N.Standalone})}),ae.map(t=>e.jsx("li",{className:`${I.length>0?"zep-pl-2":""}`,children:t.children&&t.children.length>0?e.jsx("div",{className:"zep-flex zep-gap-0.5 zep-items-center zep-mb-1.5 ",children:e.jsx(j,{label:t.label,className:"zep-text-typography-light-100",mode:N.Standalone,href:t.link,iconPlacement:"before",icon:"arrow-long-right",onClick:h=>{h.preventDefault(),M(t.navId),D(!0),Y(t.navId,I.length),setTimeout(()=>D(!1),300)}})}):e.jsx(j,{label:t.label,className:"zep-mb-1.5 zep-text-typography-light-100  zep-justify-end",iconPlacement:"before",mode:N.Standalone,href:t.link})},`${t.navId}-${t.label}`))]}),L&&e.jsx("div",{children:L})]})};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"md:zep-hidden",children:e.jsx("div",{className:`zep-fixed zep-top-[0px] zep-left-[0px] zep-py-1 sm:zep-py-2 zep-bg-background-dark zep-z-[1000] zep-ease-in-out zep-h-screen zep-duration-500 ${o?"zep-w-full md:zep-transform zep-translate-x-0 lg:zep-transform zep-translate-x-0":"-zep-translate-x-full"}`,children:e.jsxs("div",{className:`${o?"zep-block":""} zep-h-[calc(100svh-40px)] zep-overflow-auto`,children:[e.jsx("div",{className:"zep-flex zep-justify-end zep-mb-1 zep-mr-1 sm:zep-mr-2",children:e.jsx($,{name:"close",color:"#fff",size:24,onClick:a})}),e.jsx("div",{className:`${k?"zep-animate-slide-in":""}`,children:z?e.jsx("div",{className:"zep-px-1.5 sm:zep-px-3",children:e.jsx(V,{locales:b,header:u,labelBack:m,selectedLocale:d,setLanguageSwitcher:x,setSelectedLocale:v})}):e.jsx("div",{children:e.jsx("div",{className:"zep-px-1.5 sm:zep-px-3",children:e.jsxs(c,{items:r,children:[e.jsx("div",{className:"zep-w-full zep-h-[1px] zep-bg-greyscale-700 zep-mt-2.5 zep-mb-2.5"}),e.jsx("div",{className:"",children:g==null?void 0:g.map(y=>e.jsx(j,{label:y.label,href:"",mode:N.Standalone,className:"zep-text-typography-light-100 zep-mb-1.5"},y.label))}),e.jsxs("div",{className:"zep-flex zep-gap-0.5 zep-items-center zep-mb-3",onClick:y=>{y.preventDefault(),x(!0),n(!0),setTimeout(()=>n(!1),300)},children:[e.jsx("img",{alt:"Language switch icon",src:Z,className:"zep-w-1"}),e.jsx("p",{className:"zep-text-typography-light-100 zep-font-500",children:`${d==null?void 0:d.country} | ${(l=d==null?void 0:d.langAbbrev)==null?void 0:l.toUpperCase()}`})]})]})})})})]})})}),e.jsxs("div",{className:"zep-hidden md:zep-block",children:[e.jsx("div",{className:`zep-fixed zep-top-[0px] zep-left-[0px] md:zep-w-[440px] lg:zep-w-[500px] zep-pt-2 zep-bg-background-dark zep-ease-in-out zep-w-[0px] zep-duration-500 zep-h-screen zep-z-[1000] ${o?"md:zep-transform zep-translate-x-0 lg:zep-transform zep-translate-x-0":"-zep-translate-x-full"}`,children:e.jsxs("div",{className:`${o?"zep-block":""} zep-h-[calc(100svh-40px)] zep-overflow-auto`,children:[e.jsx("div",{className:"zep-flex zep-justify-end zep-pr-2 zep-mb-2",children:e.jsx($,{name:"close",color:"#fff",size:24,onClick:a,className:"zep-cursor-pointer"})}),e.jsx("div",{className:"zep-px-3",children:e.jsx(c,{items:r})})]})}),e.jsx("div",{onClick:a,className:`zep-fixed zep-top-[0px] zep-left-[0px] zep-bg-[#000] transition-all zep-duration-500  zep-w-screen zep-h-screen zep-z-[500] ${o?"zep-opacity-70":"zep-opacity-[0]"}`})]})]})};try{C.displayName="Sidebar",C.__docgenInfo={description:"",displayName:"Sidebar",props:{navItems:{defaultValue:null,description:"",name:"navItems",required:!0,type:{name:"NavigationItem[]"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},setOpen:{defaultValue:null,description:"",name:"setOpen",required:!0,type:{name:"(x: boolean) => void"}},initialPath:{defaultValue:null,description:"",name:"initialPath",required:!1,type:{name:"string[]"}},setInitialPath:{defaultValue:null,description:"",name:"setInitialPath",required:!0,type:{name:"(x: string[]) => void"}},selectedLocale:{defaultValue:null,description:"",name:"selectedLocale",required:!1,type:{name:"Locale"}},locales:{defaultValue:null,description:"",name:"locales",required:!1,type:{name:"Locale[]"}},header:{defaultValue:{value:""},description:"",name:"header",required:!1,type:{name:"string"}},labelBack:{defaultValue:null,description:"",name:"labelBack",required:!0,type:{name:"string"}},setSelectedLocale:{defaultValue:null,description:"",name:"setSelectedLocale",required:!1,type:{name:"((x: Locale) => void)"}},navigationUtilityItems:{defaultValue:null,description:"",name:"navigationUtilityItems",required:!1,type:{name:"NavUtilityItem[]"}}}}}catch{}const E=({navigationUtilityItems:r,selectedLocale:p,setSelectedLocale:i,logo:w,header:d,labelBack:b,navigationItems:u,locales:m})=>{var n;const[v,g]=s.useState(!1),[o,f]=s.useState([]),[z,x]=s.useState(!1),k=()=>{switch(p==null?void 0:p.value){case F.EN:return"/de/en/";case F.DE_AT:return"/at/de/";default:return"/de/de/"}};return e.jsxs("div",{className:"zep-bg-background-dark",children:[e.jsxs("div",{className:"zep-hidden md:zep-flex zep-justify-end zep-px-1 sm:zep-px-1.5 md:zep-px-[66px] lg:zep-px-[122px] md:zep-py-0.75 zep-border-b-1 zep-border-greyscale-700",children:[e.jsx("div",{className:"zep-flex zep-gap-2 zep-mr-3",children:r==null?void 0:r.map((a,c)=>e.jsx(j,{label:a.label,href:a.link||"",mode:N.Standalone,className:"zep-text-typography-light-100 zep-text-0.875"},`${a.label}${c}`))}),e.jsxs("div",{className:"zep-flex zep-gap-0.5 zep-items-center zep-cursor-pointer zep-group",onClick:()=>x(!0),children:[e.jsx("img",{className:"zep-size-[18px]",alt:"Language switch icon",src:Z}),e.jsx("p",{className:"zep-text-typography-light-100 zep-font-500 zep-text-0.875 group-hover:zep-underline",children:`${p==null?void 0:p.country} | ${(n=p==null?void 0:p.langAbbrev)==null?void 0:n.toUpperCase()}`})]})]}),e.jsxs("div",{className:"zep-p-1 sm:zep-px-1.5 md:zep-px-[66px] lg:zep-px-[122px] md:zep-py-1.5 zep-flex zep-justify-between md:zep-justify-start zep-items-center zep-border-b-1 zep-border-greyscale-700",children:[e.jsx("a",{href:k(),children:e.jsx("img",{alt:"logo",src:w,className:"md:zep-mr-3 xl:zep-mr-4"})}),e.jsx("img",{alt:"hamburger_menu",src:te,className:"md:zep-hidden",onClick:()=>g(!0)}),e.jsx("div",{className:"zep-hidden md:zep-flex md:zep-gap-2.5 lg:zep-gap-3.5",children:u==null?void 0:u.map((a,c)=>e.jsxs("div",{onClick:()=>{g(!0),a.children&&f([a.navId])},className:"zep-group zep-relative zep-cursor-pointer",children:[e.jsx("p",{className:"zep-typography-navigation zep-text-typography-light-100 zep-uppercase zep-py-0.25",children:a.label}),e.jsx("div",{className:"zep-hidden group-hover:zep-block group-hover:zep-absolute zep-w-full",children:e.jsx("div",{className:"zep-w-[24px] zep-h-[2px] zep-bg-yellow-500 zep-mx-auto"})})]},`${a.label}${c}`))})]}),v&&e.jsx(C,{initialPath:o,setInitialPath:f,navItems:u,open:v,setOpen:g,selectedLocale:p,header:d,labelBack:b,locales:m,setSelectedLocale:i,navigationUtilityItems:r}),z&&e.jsx(V,{setLocaleSwitcherMenu:x,locales:m,labelBack:b,header:d,selectedLocale:p,setSelectedLocale:i})]})};try{E.displayName="Navigation",E.__docgenInfo={description:"",displayName:"Navigation",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},navigationUtilityItems:{defaultValue:null,description:"",name:"navigationUtilityItems",required:!1,type:{name:"NavUtilityItem[]"}},navigationItems:{defaultValue:null,description:"",name:"navigationItems",required:!0,type:{name:"NavigationItem[]"}},selectedLocale:{defaultValue:null,description:"",name:"selectedLocale",required:!1,type:{name:"Locale"}},setSelectedLocale:{defaultValue:null,description:"",name:"setSelectedLocale",required:!1,type:{name:"((locale: Locale) => void)"}},locales:{defaultValue:null,description:"",name:"locales",required:!1,type:{name:"Locale[]"}},logo:{defaultValue:null,description:"",name:"logo",required:!0,type:{name:"string"}},header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"string"}},labelBack:{defaultValue:null,description:"",name:"labelBack",required:!0,type:{name:"string"}}}}}catch{}const ue={title:"Components/Navigation",component:E,tags:["autodocs"],argTypes:{}},K=[{label:"Deutsch",value:"de",country:"Deutsch",langAbbrev:"DE"},{label:"English",value:"en",country:"Germany",langAbbrev:"EN"},{label:"Deutsch",value:"de-AT",country:"Österreich",langAbbrev:"DE"}],q={args:{logo:le,navigationItems:[{navId:"1",label:"Marine",link:"/Marine",children:[{navId:"1",label:"Loesungen",link:"/Loesungen",children:[{navId:"1",label:"Bratwurst",link:"/Bratwurst",children:[{navId:"1",label:"Bratwurst 1",link:"https://www.google.co.uk/"}]},{navId:"2",label:"Marine 1-2"}]},{navId:"2",label:"Power and heat",link:"/Ppower-and-heat",children:[{navId:"1",label:"Bratwurst",children:[{navId:"1",label:"Bratwurst 1",link:"https://www.google.co.uk/"}]},{navId:"2",label:"Marine 1-2"}]},{navId:"3",label:"LILA",link:"",children:[{navId:"1",label:"Bratwurst",children:[{navId:"1",label:"Bratwurst 1",link:"https://www.google.co.uk/"}]},{navId:"2",label:"Marine 1-2"}]}]},{navId:"2",label:"Strom & Wärme",children:[{navId:"1",label:"Strom 1"}]},{navId:"3",label:"Industrie",children:[{label:"Industrie 1"}]},{navId:"4",label:"Öl & Gas"},{navId:"5",label:"Schiene"},{navId:"6",label:"Gebrauchtmaschinen"}],locales:K,header:" Select preferred country and language",labelBack:"Back",selectedLocale:K[0],navigationUtilityItems:[{label:"Services"},{label:"Unternehmen"},{label:"Kontakt & Standorte"}]}};var W,X,H;q.parameters={...q.parameters,docs:{...(W=q.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(H=(X=q.parameters)==null?void 0:X.docs)==null?void 0:H.source}}};const me=["Default"];export{q as Default,me as __namedExportsOrder,ue as default};
