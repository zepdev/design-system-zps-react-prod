import{j as e}from"./jsx-runtime-1a9d9a93.js";import{Z as y,l as j}from"./index.es16-1ce448e1.js";import{r as p}from"./index-8b3efc3f.js";import{L as R}from"./global-variants-893e06e6.js";import{h as B}from"./index.es13-751bc762.js";import"./index.es31-95f1013f.js";import"./_commonjsHelpers-de833af9.js";const ne=""+new URL("zep-cat-logo-7a4ba8ca.svg",import.meta.url).href,le=""+new URL("burger-fe2d6553.svg",import.meta.url).href,H=""+new URL("language-icon-fedf31c2.svg",import.meta.url).href,q=({selectedLocale:r,setLocaleSwitcherMenu:s,locales:i,header:N,labelBack:z,setLanguageSwitcher:b,setSelectedLocale:c})=>{var f,w;const[h,v]=p.useState(!1),[g,d]=p.useState(!1);p.useEffect(()=>{v(!0)},[]);const x=()=>{setTimeout(()=>{s&&s(!1)},500),v(!1)},u=i==null?void 0:i.reduce((l,n)=>(l[n.country]||(l[n.country]=[]),l[n.country].push(n),l),{});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`${g?"zep-animate-slide-out":""} md:zep-hidden`,children:[e.jsx("div",{className:"zep-text-typography-light-100 zep-mb-1.5 zep-flex zep-gap-0.5 zep-items-center",children:e.jsx(y,{mode:j.Standalone,label:z,iconPlacement:"before",icon:"arrow-long-left",onClick:l=>{l.preventDefault(),d(!0),setTimeout(()=>{d(!1),b&&b(!1)},300)}})}),e.jsx("h4",{className:"zep-text-headlineXS-fluid-cqi zep-text-typography-light-100 zep-mb-2",children:N}),u&&((f=Object.keys(u))==null?void 0:f.map((l,n)=>{var o;return e.jsxs("div",{className:"zep-mb-3",children:[e.jsx("p",{className:"zep-mb-1.5 zep-typography-bodyText zep-text-typography-light-100",children:l}),(o=u[l])==null?void 0:o.map(a=>e.jsxs("div",{className:"zep-flex zep-gap-1 zep-mb-1.5 zep-items-center",onClick:()=>c&&c(a),children:[e.jsx("div",{className:"zep-w-1.5 zep-h-1.5 zep-bg-typography-light-100 zep-flex zep-justify-center zep-items-center zep-rounded-full",children:(r==null?void 0:r.value)===(a==null?void 0:a.value)&&e.jsx("div",{className:"zep-w-0.75 zep-h-0.75 zep-bg-neutral-dark-default zep-rounded-full"})}),e.jsx("p",{className:"zep-typography-bodyText zep-text-typography-light-100",children:a==null?void 0:a.label})]},a.value))]},`${l}${n}`)}))]}),e.jsxs("div",{className:"zep-hidden md:zep-block",children:[e.jsx("div",{className:`zep-fixed zep-top-[0px] zep-right-[0px] md:zep-w-[440px] lg:zep-w-[480px] zep-pl-3 zep-pt-2 zep-pr-2 zep-bg-background-dark zep-ease-out zep-w-[0px] zep-duration-500 zep-h-screen zep-z-[1000] ${h?"zep-translate-x-0 ":"zep-translate-x-full"}`,children:e.jsxs("div",{className:`${h?"zep-block zep-overflow-hidden":""}`,children:[e.jsx("div",{className:"zep-flex zep-justify-end zep-mb-2",children:e.jsx(B,{name:"close",color:"#fff",size:24,onClick:x,className:"zep-cursor-pointer"})}),e.jsx("h4",{className:"zep-text-headlineXS-fluid-cqi zep-text-typography-light-100 zep-mb-3",children:N}),u&&((w=Object.keys(u))==null?void 0:w.map((l,n)=>{var o;return e.jsxs("div",{className:"zep-mb-3",children:[e.jsx("p",{className:"zep-mb-1.5 zep-typography-bodyText zep-text-typography-light-100",children:l}),(o=u[l])==null?void 0:o.map(a=>e.jsxs("div",{className:"zep-flex zep-gap-1 zep-mb-1.5 zep-items-center",onClick:()=>c&&c(a),children:[e.jsx("div",{className:"zep-w-1.5 zep-h-1.5 zep-bg-typography-light-100 zep-flex zep-justify-center zep-items-center zep-rounded-full",children:(r==null?void 0:r.value)===(a==null?void 0:a.value)&&e.jsx("div",{className:"zep-w-0.75 zep-h-0.75 zep-bg-neutral-dark-default zep-rounded-full"})}),e.jsx("p",{className:"zep-typography-bodyText zep-text-typography-light-100",children:a==null?void 0:a.label})]},a.value))]},`${l}${n}`)}))]})}),e.jsx("div",{onClick:x,className:`zep-fixed zep-top-[0px] zep-left-[0px] zep-bg-[#000] transition-all zep-duration-500  zep-w-screen zep-h-screen zep-z-[500] ${h?"zep-opacity-70":"zep-opacity-[0]"}`})]})]})};try{q.displayName="LanguageSwitcher",q.__docgenInfo={description:"",displayName:"LanguageSwitcher",props:{header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"string"}},labelBack:{defaultValue:null,description:"",name:"labelBack",required:!0,type:{name:"string"}},setLocaleSwitcherMenu:{defaultValue:null,description:"",name:"setLocaleSwitcherMenu",required:!1,type:{name:"((x: boolean) => void)"}},selectedLocale:{defaultValue:null,description:"",name:"selectedLocale",required:!1,type:{name:"Locale"}},setLanguageSwitcher:{defaultValue:null,description:"",name:"setLanguageSwitcher",required:!1,type:{name:"((x: boolean) => void)"}},locales:{defaultValue:null,description:"",name:"locales",required:!1,type:{name:"Locale[]"}},setSelectedLocale:{defaultValue:null,description:"",name:"setSelectedLocale",required:!1,type:{name:"((x: Locale) => void)"}}}}}catch{}const $=({navItems:r,setOpen:s,initialPath:i,setInitialPath:N,selectedLocale:z,locales:b,header:c="",labelBack:h,setSelectedLocale:v,navigationUtilityItems:g})=>{const[d,x]=p.useState(!1),[u,f]=p.useState(!1),[w,l]=p.useState(!1);p.useEffect(()=>{x(!0)},[]),p.useEffect(()=>(d?document.body.classList.add("zep-overflow-hidden"):document.body.classList.remove("zep-overflow-hidden"),()=>{document.body.classList.remove("zep-overflow-hidden")}),[d]);const n=()=>{setTimeout(()=>{N([]),s(!1)},500),x(!1)},o=({items:a,children:L})=>{var O,G;const[k,V]=p.useState(i||[]),[E,M]=p.useState(i?i[0]:"1"),[Z,A]=p.useState(!1),[J,D]=p.useState(!1);p.useEffect(()=>{i&&(i==null?void 0:i.length)>0&&V(i)},[]);const Q=(t,m)=>{V(I=>[...I.slice(0,m),t])},Y=()=>{V(t=>{const m=t.slice(0,-1);return M(m.length>0?m[m.length-1]:"1"),m})},P=(t,m)=>{let I=t;for(const U of m){const _=I.find(ae=>ae.navId===U);if(_&&_.children)I=_.children;else break}return I},ee=P(a,k),T=P(a,k.slice(0,-1));return e.jsxs("div",{className:Z?"zep-animate-slide-in":J?"zep-animate-slide-out":"",children:[k.length>0&&e.jsx("div",{className:"zep-text-typography-light-100 zep-mb-2.5 zep-flex zep-gap-0.5 zep-items-center",children:e.jsx(y,{mode:j.Standalone,label:h,iconPlacement:"before",icon:"arrow-long-left",onClick:t=>{t.preventDefault(),D(!0),setTimeout(()=>{D(!1),Y()},300)}})}),e.jsxs("ul",{children:[k.length>0&&e.jsx("li",{className:"zep-flex zep-gap-0.5",children:e.jsx(y,{label:(O=T[Number(E)-1])==null?void 0:O.label,href:(G=T[Number(E)-1])==null?void 0:G.link,className:"zep-mb-1.5 zep-text-typography-light-100",icon:"home",iconPlacement:"before",mode:j.Standalone})}),ee.map(t=>e.jsx("li",{className:`${k.length>0?"zep-pl-2":""}`,children:t.children&&t.children.length>0?e.jsx("div",{className:"zep-flex zep-gap-0.5 zep-items-center zep-mb-1.5 ",children:e.jsx(y,{label:t.label,className:"zep-text-typography-light-100",mode:j.Standalone,href:t.link,iconPlacement:"before",icon:"arrow-long-right",onClick:m=>{m.preventDefault(),M(t.navId),A(!0),Q(t.navId,k.length),setTimeout(()=>A(!1),300)}})}):e.jsx(y,{label:t.label,className:"zep-mb-1.5 zep-text-typography-light-100  zep-justify-end",iconPlacement:"before",mode:j.Standalone,href:t.link})},`${t.navId}-${t.label}`))]}),L&&e.jsx("div",{children:L})]})};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"md:zep-hidden",children:e.jsx("div",{className:`zep-fixed zep-top-[0px] zep-left-[0px] zep-py-1 sm:zep-py-2 zep-bg-background-dark zep-z-[1000] zep-ease-in-out zep-h-screen zep-duration-500 ${d?"zep-w-full md:zep-transform zep-translate-x-0 lg:zep-transform zep-translate-x-0":"-zep-translate-x-full"}`,children:e.jsxs("div",{className:`${d?"zep-block":""} zep-h-[calc(100svh-40px)] zep-overflow-auto`,children:[e.jsx("div",{className:"zep-flex zep-justify-end zep-mb-1 zep-mr-1 sm:zep-mr-2",children:e.jsx(B,{name:"close",color:"#fff",size:24,onClick:n})}),e.jsx("div",{className:`${w?"zep-animate-slide-in":""}`,children:u?e.jsx("div",{className:"zep-px-1.5 sm:zep-px-3",children:e.jsx(q,{locales:b,header:c,labelBack:h,selectedLocale:z,setLanguageSwitcher:f,setSelectedLocale:v})}):e.jsx("div",{children:e.jsx("div",{className:"zep-px-1.5 sm:zep-px-3",children:e.jsxs(o,{items:r,children:[e.jsx("div",{className:"zep-w-full zep-h-[1px] zep-bg-greyscale-700 zep-mt-2.5 zep-mb-2.5"}),e.jsx("div",{className:"",children:g==null?void 0:g.map(a=>e.jsx(y,{label:a.label,href:"",mode:j.Standalone,className:"zep-text-typography-light-100 zep-mb-1.5"},a.label))}),e.jsxs("div",{className:"zep-flex zep-gap-0.5 zep-items-center zep-mb-3",onClick:a=>{a.preventDefault(),f(!0),l(!0),setTimeout(()=>l(!1),300)},children:[e.jsx("img",{alt:"Language switch icon",src:H,className:"zep-w-1"}),e.jsx("p",{className:"zep-text-typography-light-100 zep-font-500",children:z==null?void 0:z.label})]})]})})})})]})})}),e.jsxs("div",{className:"zep-hidden md:zep-block",children:[e.jsx("div",{className:`zep-fixed zep-top-[0px] zep-left-[0px] md:zep-w-[440px] lg:zep-w-[500px] zep-pt-2 zep-bg-background-dark zep-ease-in-out zep-w-[0px] zep-duration-500 zep-h-screen zep-z-[1000] ${d?"md:zep-transform zep-translate-x-0 lg:zep-transform zep-translate-x-0":"-zep-translate-x-full"}`,children:e.jsxs("div",{className:`${d?"zep-block":""} zep-h-[calc(100svh-40px)] zep-overflow-auto`,children:[e.jsx("div",{className:"zep-flex zep-justify-end zep-pr-2 zep-mb-2",children:e.jsx(B,{name:"close",color:"#fff",size:24,onClick:n,className:"zep-cursor-pointer"})}),e.jsx("div",{className:"zep-px-3",children:e.jsx(o,{items:r})})]})}),e.jsx("div",{onClick:n,className:`zep-fixed zep-top-[0px] zep-left-[0px] zep-bg-[#000] transition-all zep-duration-500  zep-w-screen zep-h-screen zep-z-[500] ${d?"zep-opacity-70":"zep-opacity-[0]"}`})]})]})};try{$.displayName="Sidebar",$.__docgenInfo={description:"",displayName:"Sidebar",props:{navItems:{defaultValue:null,description:"",name:"navItems",required:!0,type:{name:"NavigationItem[]"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},setOpen:{defaultValue:null,description:"",name:"setOpen",required:!0,type:{name:"(x: boolean) => void"}},initialPath:{defaultValue:null,description:"",name:"initialPath",required:!1,type:{name:"string[]"}},setInitialPath:{defaultValue:null,description:"",name:"setInitialPath",required:!0,type:{name:"(x: string[]) => void"}},selectedLocale:{defaultValue:null,description:"",name:"selectedLocale",required:!1,type:{name:"Locale"}},locales:{defaultValue:null,description:"",name:"locales",required:!1,type:{name:"Locale[]"}},header:{defaultValue:{value:""},description:"",name:"header",required:!1,type:{name:"string"}},labelBack:{defaultValue:null,description:"",name:"labelBack",required:!0,type:{name:"string"}},setSelectedLocale:{defaultValue:null,description:"",name:"setSelectedLocale",required:!1,type:{name:"((x: Locale) => void)"}},navigationUtilityItems:{defaultValue:null,description:"",name:"navigationUtilityItems",required:!1,type:{name:"NavUtilityItem[]"}}}}}catch{}const C=({navigationUtilityItems:r,selectedLocale:s,setSelectedLocale:i,logo:N,header:z,labelBack:b,navigationItems:c,locales:h})=>{var l;const[v,g]=p.useState(!1),[d,x]=p.useState([]),[u,f]=p.useState(!1),w=()=>{switch(s==null?void 0:s.value){case R.EN:return"/de/en/";case R.DE_AT:return"/at/de/";default:return"/de/de/"}};return e.jsxs("div",{className:"zep-bg-background-dark",children:[e.jsxs("div",{className:"zep-hidden md:zep-flex zep-justify-end zep-px-1 sm:zep-px-1.5 md:zep-px-[66px] lg:zep-px-[122px] md:zep-py-0.75 zep-border-b-1 zep-border-greyscale-700",children:[e.jsx("div",{className:"zep-flex zep-gap-2 zep-mr-3",children:r==null?void 0:r.map((n,o)=>e.jsx(y,{label:n.label,href:n.link||"",mode:j.Standalone,className:"zep-text-typography-light-100 zep-text-0.875"},`${n.label}${o}`))}),e.jsxs("div",{className:"zep-flex zep-gap-0.5 zep-items-center zep-cursor-pointer zep-group",onClick:()=>f(!0),children:[e.jsx("img",{className:"zep-size-[18px]",alt:"Language switch icon",src:H}),e.jsx("p",{className:"zep-text-typography-light-100 zep-font-500 zep-text-0.875 group-hover:zep-underline",children:`${s==null?void 0:s.country} | ${(l=s==null?void 0:s.langAbbrev)==null?void 0:l.toUpperCase()}`})]})]}),e.jsxs("div",{className:"zep-p-1 sm:zep-px-1.5 md:zep-px-[66px] lg:zep-px-[122px] md:zep-py-1.5 zep-flex zep-justify-between md:zep-justify-start zep-items-center zep-border-b-1 zep-border-greyscale-700",children:[e.jsx("a",{href:w(),children:e.jsx("img",{alt:"logo",src:N,className:"md:zep-mr-3 xl:zep-mr-4"})}),e.jsx("img",{alt:"hamburger_menu",src:le,className:"md:zep-hidden",onClick:()=>g(!0)}),e.jsx("div",{className:"zep-hidden md:zep-flex md:zep-gap-2.5 lg:zep-gap-3.5",children:c==null?void 0:c.map((n,o)=>e.jsxs("div",{onClick:()=>{g(!0),n.children&&x([n.navId])},className:"zep-group zep-relative zep-cursor-pointer",children:[e.jsx("p",{className:"zep-typography-navigation zep-text-typography-light-100 zep-uppercase zep-py-0.25",children:n.label}),e.jsx("div",{className:"zep-hidden group-hover:zep-block group-hover:zep-absolute zep-w-full",children:e.jsx("div",{className:"zep-w-[24px] zep-h-[2px] zep-bg-yellow-500 zep-mx-auto"})})]},`${n.label}${o}`))})]}),v&&e.jsx($,{initialPath:d,setInitialPath:x,navItems:c,open:v,setOpen:g,selectedLocale:s,header:z,labelBack:b,locales:h,setSelectedLocale:i,navigationUtilityItems:r}),u&&e.jsx(q,{setLocaleSwitcherMenu:f,locales:h,labelBack:b,header:z,selectedLocale:s,setSelectedLocale:i})]})};try{C.displayName="Navigation",C.__docgenInfo={description:"",displayName:"Navigation",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},navigationUtilityItems:{defaultValue:null,description:"",name:"navigationUtilityItems",required:!1,type:{name:"NavUtilityItem[]"}},navigationItems:{defaultValue:null,description:"",name:"navigationItems",required:!0,type:{name:"NavigationItem[]"}},selectedLocale:{defaultValue:null,description:"",name:"selectedLocale",required:!1,type:{name:"Locale"}},setSelectedLocale:{defaultValue:null,description:"",name:"setSelectedLocale",required:!1,type:{name:"((locale: Locale) => void)"}},locales:{defaultValue:null,description:"",name:"locales",required:!1,type:{name:"Locale[]"}},logo:{defaultValue:null,description:"",name:"logo",required:!0,type:{name:"string"}},header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"string"}},labelBack:{defaultValue:null,description:"",name:"labelBack",required:!0,type:{name:"string"}}}}}catch{}const ce={title:"Components/Navigation",component:C,tags:["autodocs"],argTypes:{}},F=[{label:"Deutsch",value:"de",country:"Deutsch",langAbbrev:"DE"},{label:"English",value:"en",country:"Germany",langAbbrev:"EN"},{label:"Deutsch",value:"de-AT",country:"Österreich",langAbbrev:"DE"}],S={args:{logo:ne,navigationItems:[{navId:"1",label:"Marine",link:"/Marine",children:[{navId:"1",label:"Loesungen",link:"/Loesungen",children:[{navId:"1",label:"Bratwurst",link:"/Bratwurst",children:[{navId:"1",label:"Bratwurst 1",link:"https://www.google.co.uk/"}]},{navId:"2",label:"Marine 1-2"}]},{navId:"2",label:"Power and heat",link:"/Ppower-and-heat",children:[{navId:"1",label:"Bratwurst",children:[{navId:"1",label:"Bratwurst 1",link:"https://www.google.co.uk/"}]},{navId:"2",label:"Marine 1-2"}]},{navId:"3",label:"LILA",link:"",children:[{navId:"1",label:"Bratwurst",children:[{navId:"1",label:"Bratwurst 1",link:"https://www.google.co.uk/"}]},{navId:"2",label:"Marine 1-2"}]}]},{navId:"2",label:"Strom & Wärme",children:[{navId:"1",label:"Strom 1"}]},{navId:"3",label:"Industrie",children:[{label:"Industrie 1"}]},{navId:"4",label:"Öl & Gas"},{navId:"5",label:"Schiene"},{navId:"6",label:"Gebrauchtmaschinen"}],locales:F,header:" Select preferred country and language",labelBack:"Back",selectedLocale:F[0],navigationUtilityItems:[{label:"Services"},{label:"Unternehmen"},{label:"Kontakt & Standorte"}]}};var K,W,X;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(X=(W=S.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};const ue=["Default"];export{S as Default,ue as __namedExportsOrder,ce as default};
