import{j as e,c as re}from"./clsx-36b9529f.js";import{N}from"./index.es16-ca92ca27.js";import{l as w}from"./index.es17-40e95622.js";import{r}from"./index-8b3efc3f.js";import{L as C}from"./global-variants-893e06e6.js";import{g as J}from"./getDataLayer-1420585a.js";import{h as D}from"./index.es13-b5ad88d4.js";import"./index.es31-95f1013f.js";import"./_commonjsHelpers-de833af9.js";const se=""+new URL("zep-cat-logo-7a4ba8ca.svg",import.meta.url).href,pe=""+new URL("burger-fe2d6553.svg",import.meta.url).href,Q=""+new URL("language-icon-fedf31c2.svg",import.meta.url).href,$=({selectedLocale:s,setLocaleSwitcherMenu:n,locales:p,header:k,labelBack:i,setLanguageSwitcher:b,setSelectedLocale:h})=>{var g,j;const[u,x]=r.useState(!1),[v,o]=r.useState(!1);r.useEffect(()=>{x(!0)},[]),r.useEffect(()=>(u?document.body.classList.add("zep-overflow-hidden"):document.body.classList.remove("zep-overflow-hidden"),()=>{document.body.classList.remove("zep-overflow-hidden")}),[u]);const y=()=>{setTimeout(()=>{n&&n(!1)},500),x(!1)},m=p==null?void 0:p.reduce((l,d)=>(l[d.country]||(l[d.country]=[]),l[d.country].push(d),l),{});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`${v?"zep-animate-slide-out":""} md:zep-hidden`,children:[e.jsx("div",{className:"zep-text-typography-light-100 zep-mb-2.5 zep-flex zep-gap-0.5 zep-items-center",children:e.jsx(N,{mode:w.Standalone,label:i,iconPlacement:"before",icon:"arrow-long-left",onClick:l=>{l.preventDefault(),o(!0),setTimeout(()=>{o(!1),b&&b(!1)},300)}})}),e.jsx("h4",{className:"zep-text-headlineXS-fluid-cqi zep-text-typography-light-100 zep-mb-2",children:k}),m&&((g=Object.keys(m))==null?void 0:g.map((l,d)=>{var z;return e.jsxs("div",{className:"zep-mb-3",children:[e.jsx("p",{className:"zep-mb-1.5 zep-typography-bodyText zep-text-typography-light-100",children:l}),(z=m[l])==null?void 0:z.map(a=>e.jsxs("div",{className:"zep-flex zep-gap-1 zep-mb-1.5 zep-items-center",onClick:()=>h&&h(a),children:[e.jsx("div",{className:"zep-w-1.5 zep-h-1.5 zep-bg-typography-light-100 zep-flex zep-justify-center zep-items-center zep-rounded-full",children:(s==null?void 0:s.value)===(a==null?void 0:a.value)&&e.jsx("div",{className:"zep-w-0.75 zep-h-0.75 zep-bg-neutral-dark-default zep-rounded-full"})}),e.jsx("p",{className:"zep-typography-bodyText zep-text-typography-light-100",children:a==null?void 0:a.label})]},a.value))]},`${l}${d}`)}))]}),e.jsxs("div",{className:"zep-hidden md:zep-block",children:[e.jsx("div",{className:`zep-fixed zep-top-[0px] zep-right-[0px] md:zep-w-[440px] lg:zep-w-[480px] zep-pl-3 zep-pt-2 zep-pr-2 zep-bg-background-dark zep-ease-out zep-w-[0px] zep-duration-500 zep-h-screen zep-z-[1000] ${u?"zep-translate-x-0 ":"zep-translate-x-full"}`,children:e.jsxs("div",{className:`${u?"zep-block zep-overflow-hidden":""}`,children:[e.jsx("div",{className:"zep-flex zep-justify-end zep-mb-2",children:e.jsx(D,{name:"close",color:"#fff",size:24,onClick:y,className:"zep-cursor-pointer"})}),e.jsx("h4",{className:"zep-text-headlineXS-fluid-cqi zep-text-typography-light-100 zep-mb-3",children:k}),m&&((j=Object.keys(m))==null?void 0:j.map((l,d)=>{var z;return e.jsxs("div",{className:"zep-mb-3",children:[e.jsx("p",{className:"zep-mb-1.5 zep-typography-bodyText zep-text-typography-light-100",children:l}),(z=m[l])==null?void 0:z.map(a=>e.jsxs("div",{className:"zep-flex zep-gap-1 zep-mb-1.5 zep-items-center zep-cursor-pointer",onClick:()=>h&&h(a),children:[e.jsx("div",{className:"zep-w-1.5 zep-h-1.5 zep-bg-typography-light-100 zep-flex zep-justify-center zep-items-center zep-rounded-full",children:(s==null?void 0:s.value)===(a==null?void 0:a.value)&&e.jsx("div",{className:"zep-w-0.75 zep-h-0.75 zep-bg-neutral-dark-default zep-rounded-full"})}),e.jsx("p",{className:"zep-typography-bodyText zep-text-typography-light-100",children:a==null?void 0:a.label})]},a.value))]},`${l}${d}`)}))]})}),e.jsx("div",{onClick:y,className:`zep-fixed zep-top-[0px] zep-left-[0px] zep-bg-[#000] transition-all zep-duration-500  zep-w-screen zep-h-screen zep-z-[500] ${u?"zep-opacity-70":"zep-opacity-[0]"}`})]})]})};try{$.displayName="LanguageSwitcher",$.__docgenInfo={description:"",displayName:"LanguageSwitcher",props:{header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"string"}},labelBack:{defaultValue:null,description:"",name:"labelBack",required:!0,type:{name:"string"}},setLocaleSwitcherMenu:{defaultValue:null,description:"",name:"setLocaleSwitcherMenu",required:!1,type:{name:"((x: boolean) => void)"}},selectedLocale:{defaultValue:null,description:"",name:"selectedLocale",required:!1,type:{name:"Locale"}},setLanguageSwitcher:{defaultValue:null,description:"",name:"setLanguageSwitcher",required:!1,type:{name:"((x: boolean) => void)"}},locales:{defaultValue:null,description:"",name:"locales",required:!1,type:{name:"Locale[]"}},setSelectedLocale:{defaultValue:null,description:"",name:"setSelectedLocale",required:!1,type:{name:"((x: Locale) => void)"}}}}}catch{}const T=({navItems:s,setOpen:n,initialPath:p,setInitialPath:k,selectedLocale:i,locales:b,header:h="",labelBack:u,setSelectedLocale:x,navigationUtilityItems:v})=>{var I;const[o,y]=r.useState(!1),[m,g]=r.useState(!1),[j,l]=r.useState(!1);r.useEffect(()=>{y(!0)},[]),r.useEffect(()=>(o?document.body.classList.add("zep-overflow-hidden"):document.body.classList.remove("zep-overflow-hidden"),()=>{document.body.classList.remove("zep-overflow-hidden")}),[o]);const d=()=>{setTimeout(()=>{k([]),n(!1)},500),y(!1)},z=J(),a=({items:f,children:q})=>{var R,F;const[S,B]=r.useState(p||[]),[E,U]=r.useState(p?p[0]:"1"),[Y,O]=r.useState(!1),[ee,G]=r.useState(!1);r.useEffect(()=>{p&&(p==null?void 0:p.length)>0&&B(p)},[]);const ae=(t,c)=>{B(_=>[..._.slice(0,c),t])},ne=()=>{B(t=>{const c=t.slice(0,-1);return U(c.length>0?c[c.length-1]:"1"),c})},L=(t,c)=>{let _=t;for(const K of c){const M=_.find(te=>te.navId===K);if(M&&M.children)_=M.children;else break}return _},le=L(f,S),A=L(f,S.slice(0,-1));return e.jsxs("div",{className:Y?"zep-animate-slide-in":ee?"zep-animate-slide-out":"",children:[S.length>0&&e.jsx("div",{className:"zep-text-typography-light-100 zep-mb-2.5 zep-flex zep-gap-0.5 zep-items-center",children:e.jsx(N,{mode:w.Standalone,label:u,iconPlacement:"before",icon:"arrow-long-left",onClick:t=>{t.preventDefault(),G(!0),setTimeout(()=>{G(!1),ne()},300)}})}),e.jsxs("ul",{children:[S.length>0&&e.jsx("li",{className:"zep-flex zep-gap-0.5",children:e.jsx(N,{label:(R=A[Number(E)-1])==null?void 0:R.label,href:(F=A[Number(E)-1])==null?void 0:F.link,className:"zep-mb-1.5 zep-text-typography-light-100",icon:"home",iconPlacement:"before",mode:w.Standalone})}),le.map(t=>e.jsx("li",{className:`${S.length>0?"zep-pl-2":""}`,children:t.children&&t.children.length>0?e.jsx("div",{className:"zep-flex zep-gap-0.5 zep-items-center zep-mb-1.5 ",children:e.jsx(N,{label:t.label,className:"zep-text-typography-light-100",mode:w.Standalone,href:t.link,iconPlacement:"before",icon:"arrow-long-right",onClick:c=>{c.preventDefault(),U(t.navId),O(!0),ae(t.navId,S.length),setTimeout(()=>O(!1),300)}})}):e.jsx(N,{label:t.label,className:"zep-mb-1.5 zep-text-typography-light-100  zep-justify-end",iconPlacement:"before",mode:w.Standalone,onClickCapture:()=>{var c;z.push({event:"interaction_nav",link_text:t.label,link_type:"main_nav",link_section:(c=A[Number(E)-1])==null?void 0:c.label})},href:t.link})},`${t.navId}-${t.label}`))]}),q&&e.jsx("div",{children:q})]})};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"md:zep-hidden",children:e.jsx("div",{className:`zep-fixed zep-top-[0px] zep-left-[0px] zep-py-1 sm:zep-py-2 zep-bg-background-dark zep-z-[1000] zep-ease-in-out zep-h-screen zep-duration-500 ${o?"zep-w-full md:zep-transform zep-translate-x-0 lg:zep-transform zep-translate-x-0":"-zep-translate-x-full"}`,children:e.jsxs("div",{className:`${o?"zep-block":""} zep-h-[calc(100svh-40px)] zep-overflow-auto`,children:[e.jsx("div",{className:"zep-flex zep-justify-end zep-mb-1 zep-mr-1 sm:zep-mr-2",children:e.jsx(D,{name:"close",color:"#fff",size:24,onClick:d})}),e.jsx("div",{className:`${j?"zep-animate-slide-in":""}`,children:m?e.jsx("div",{className:"zep-px-1.5 sm:zep-px-3",children:e.jsx($,{locales:b,header:h,labelBack:u,selectedLocale:i,setLanguageSwitcher:g,setSelectedLocale:x})}):e.jsx("div",{children:e.jsx("div",{className:"zep-px-1.5 sm:zep-px-3",children:e.jsxs(a,{items:s,children:[e.jsx("div",{className:"zep-w-full zep-h-[1px] zep-bg-greyscale-700 zep-mt-2.5 zep-mb-2.5"}),e.jsx("div",{className:"",children:v==null?void 0:v.map((f,q)=>e.jsx(N,{label:f.label,href:f.link||"",mode:w.Standalone,onClickCapture:()=>{z.push({event:"interaction_nav",link_text:f.label,link_type:"top_nav"})},className:"zep-text-typography-light-100 zep-mb-1.5"},`${f.label}${q}`))}),e.jsxs("div",{className:"zep-flex zep-gap-0.5 zep-items-center zep-mb-3",onClick:f=>{f.preventDefault(),g(!0),l(!0),setTimeout(()=>l(!1),300)},children:[e.jsx("img",{alt:"Language switch icon",src:Q,className:"zep-w-1"}),e.jsx("p",{className:"zep-text-typography-light-100 zep-font-500",children:`${i==null?void 0:i.country} | ${(I=i==null?void 0:i.langAbbrev)==null?void 0:I.toUpperCase()}`})]})]})})})})]})})}),e.jsxs("div",{className:"zep-hidden md:zep-block",children:[e.jsx("div",{className:`zep-fixed zep-top-[0px] zep-left-[0px] md:zep-w-[440px] lg:zep-w-[500px] zep-pt-2 zep-bg-background-dark zep-ease-in-out zep-w-[0px] zep-duration-500 zep-h-screen zep-z-[1000] ${o?"md:zep-transform zep-translate-x-0 lg:zep-transform zep-translate-x-0":"-zep-translate-x-full"}`,children:e.jsxs("div",{className:`${o?"zep-block":""} zep-h-[calc(100svh-40px)] zep-overflow-auto`,children:[e.jsx("div",{className:"zep-flex zep-justify-end zep-pr-2 zep-mb-2",children:e.jsx(D,{name:"close",color:"#fff",size:24,onClick:d,className:"zep-cursor-pointer"})}),e.jsx("div",{className:"zep-px-3",children:e.jsx(a,{items:s})})]})}),e.jsx("div",{onClick:d,className:`zep-fixed zep-top-[0px] zep-left-[0px] zep-bg-[#000] transition-all zep-duration-500  zep-w-screen zep-h-screen zep-z-[500] ${o?"zep-opacity-70":"zep-opacity-[0]"}`})]})]})};try{T.displayName="Sidebar",T.__docgenInfo={description:"",displayName:"Sidebar",props:{navItems:{defaultValue:null,description:"",name:"navItems",required:!0,type:{name:"NavigationItem[]"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},setOpen:{defaultValue:null,description:"",name:"setOpen",required:!0,type:{name:"(x: boolean) => void"}},initialPath:{defaultValue:null,description:"",name:"initialPath",required:!1,type:{name:"string[]"}},setInitialPath:{defaultValue:null,description:"",name:"setInitialPath",required:!0,type:{name:"(x: string[]) => void"}},selectedLocale:{defaultValue:null,description:"",name:"selectedLocale",required:!1,type:{name:"Locale"}},locales:{defaultValue:null,description:"",name:"locales",required:!1,type:{name:"Locale[]"}},header:{defaultValue:{value:""},description:"",name:"header",required:!1,type:{name:"string"}},labelBack:{defaultValue:null,description:"",name:"labelBack",required:!0,type:{name:"string"}},setSelectedLocale:{defaultValue:null,description:"",name:"setSelectedLocale",required:!1,type:{name:"((x: Locale) => void)"}},navigationUtilityItems:{defaultValue:null,description:"",name:"navigationUtilityItems",required:!1,type:{name:"NavUtilityItem[]"}}}}}catch{}const P=({navigationUtilityItems:s,selectedLocale:n,setSelectedLocale:p,logo:k,navigationItems:i,locales:b,currentUrl:h})=>{var z;const[u,x]=r.useState(!1),[v,o]=r.useState([]),[y,m]=r.useState(!1),g=r.useMemo(()=>(n==null?void 0:n.value)===C.EN?"Back":"Zurück",[n]),j=r.useMemo(()=>(n==null?void 0:n.value)===C.EN?"Select preferred country and language":"Land und Sprache wählen",[n]),l=()=>{switch(n==null?void 0:n.value){case C.EN:return"/de/en/";case C.DE_AT:return"/at/de/";default:return"/de/de/"}},d=J();return e.jsxs("div",{className:"zep-bg-background-dark",children:[e.jsxs("div",{className:"zep-hidden md:zep-flex zep-justify-end zep-px-1 sm:zep-px-1.5 md:zep-px-[66px] lg:zep-px-[122px] md:zep-py-0.75 zep-border-b-1 zep-border-greyscale-700",children:[e.jsx("div",{className:"zep-flex zep-gap-2 zep-mr-3",children:s==null?void 0:s.map((a,I)=>e.jsx(N,{label:a.label,href:a.link||"",mode:w.Standalone,onClickCapture:()=>{d.push({event:"interaction_nav",link_text:a.label,link_type:"top_nav"})},className:"zep-text-typography-light-100 zep-text-0.875"},`${a.label}${I}`))}),e.jsxs("div",{className:"zep-flex zep-gap-0.5 zep-items-center zep-cursor-pointer zep-group",onClick:()=>m(!0),children:[e.jsx("img",{className:"zep-size-[18px]",alt:"Language switch icon",src:Q}),e.jsx("p",{className:"zep-text-typography-light-100 zep-font-500 zep-text-0.875 group-hover:zep-underline",children:`${n==null?void 0:n.country} | ${(z=n==null?void 0:n.langAbbrev)==null?void 0:z.toUpperCase()}`})]})]}),e.jsxs("div",{className:"zep-p-1 sm:zep-px-1.5 md:zep-px-[66px] lg:zep-px-[122px] md:zep-py-1.5 zep-flex zep-justify-between md:zep-justify-start zep-items-center zep-border-b-1 zep-border-greyscale-700",children:[e.jsx("a",{href:l(),children:e.jsx("img",{alt:"logo",src:k,className:"md:zep-mr-3 xl:zep-mr-4"})}),e.jsx("img",{alt:"hamburger_menu",src:pe,className:"md:zep-hidden",onClick:()=>x(!0)}),e.jsx("div",{className:"zep-hidden md:zep-flex md:zep-gap-2.5 lg:zep-gap-3.5",children:i==null?void 0:i.map((a,I)=>e.jsxs("div",{onClick:()=>{x(!0),a.children&&o([a.navId])},className:"zep-group zep-relative zep-cursor-pointer",children:[e.jsx("p",{className:"zep-typography-navigation zep-text-typography-light-100 zep-uppercase",children:a.label}),e.jsx("div",{className:re("group-hover:zep-block zep-w-full",{"zep-hidden":!(h&&a.link&&h.includes(a.link))}),children:e.jsx("div",{className:"zep-w-[24px] zep-h-[2px] zep-bg-yellow-500 zep-mx-auto"})})]},`${a.label}${I}`))})]}),u&&e.jsx(T,{initialPath:v,setInitialPath:o,navItems:i,open:u,setOpen:x,selectedLocale:n,header:j,labelBack:g,locales:b,setSelectedLocale:p,navigationUtilityItems:s}),y&&e.jsx($,{setLocaleSwitcherMenu:m,locales:b,labelBack:g,header:j,selectedLocale:n,setSelectedLocale:p})]})};try{P.displayName="Navigation",P.__docgenInfo={description:"",displayName:"Navigation",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},navigationUtilityItems:{defaultValue:null,description:"",name:"navigationUtilityItems",required:!1,type:{name:"NavUtilityItem[]"}},navigationItems:{defaultValue:null,description:"",name:"navigationItems",required:!0,type:{name:"NavigationItem[]"}},selectedLocale:{defaultValue:null,description:"",name:"selectedLocale",required:!1,type:{name:"Locale"}},setSelectedLocale:{defaultValue:null,description:"",name:"setSelectedLocale",required:!1,type:{name:"((locale: Locale) => void)"}},locales:{defaultValue:null,description:"",name:"locales",required:!1,type:{name:"Locale[]"}},logo:{defaultValue:null,description:"",name:"logo",required:!0,type:{name:"string"}},currentUrl:{defaultValue:null,description:"",name:"currentUrl",required:!1,type:{name:"string"}}}}}catch{}const xe={title:"Components/Navigation",component:P,tags:["autodocs"],argTypes:{}},W=[{label:"Deutsch",value:"de",country:"Deutsch",langAbbrev:"DE"},{label:"English",value:"en",country:"Germany",langAbbrev:"EN"},{label:"Deutsch",value:"de-AT",country:"Österreich",langAbbrev:"DE"}],V={args:{logo:se,navigationItems:[{navId:"1",label:"Marine",link:"/marine",children:[{navId:"1",label:"Loesungen",link:"/loesungen",children:[{navId:"1",label:"Bratwurst",link:"/bratwurst",children:[{navId:"1",label:"Bratwurst 1",link:"https://www.google.co.uk/"}]},{navId:"2",label:"Marine 1-2"}]},{navId:"2",label:"Power and heat",link:"/power-and-heat",children:[{navId:"1",label:"Bratwurst",children:[{navId:"1",label:"Bratwurst 1",link:"https://www.google.co.uk/"}]},{navId:"2",label:"Marine 1-2"}]},{navId:"3",label:"LILA",link:"",children:[{navId:"1",label:"Bratwurst",children:[{navId:"1",label:"Bratwurst 1",link:"https://www.google.co.uk/"}]},{navId:"2",label:"Marine 1-2"}]}]},{navId:"2",label:"Strom & Wärme",children:[{navId:"1",label:"Strom 1"}]},{navId:"3",label:"Industrie",children:[{label:"Industrie 1"}]},{navId:"4",label:"Öl & Gas"},{navId:"5",label:"Schiene"},{navId:"6",label:"Gebrauchtmaschinen"}],locales:W,currentUrl:"/de/de/marine",selectedLocale:W[0],navigationUtilityItems:[{label:"Services"},{label:"Unternehmen"},{label:"Kontakt & Standorte"}]}};var X,H,Z;V.parameters={...V.parameters,docs:{...(X=V.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    logo: zepCatLogo,
    navigationItems: [{
      navId: '1',
      label: 'Marine',
      link: '/marine',
      children: [{
        navId: '1',
        label: 'Loesungen',
        link: '/loesungen',
        children: [{
          navId: '1',
          label: 'Bratwurst',
          link: '/bratwurst',
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
        link: '/power-and-heat',
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
    currentUrl: '/de/de/marine',
    selectedLocale: locales[0],
    navigationUtilityItems: [{
      label: 'Services'
    }, {
      label: 'Unternehmen'
    }, {
      label: 'Kontakt & Standorte'
    }]
  } as NavigationProps
}`,...(Z=(H=V.parameters)==null?void 0:H.docs)==null?void 0:Z.source}}};const ge=["Default"];export{V as Default,ge as __namedExportsOrder,xe as default};
