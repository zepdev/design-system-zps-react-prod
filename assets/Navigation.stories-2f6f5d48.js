import{j as e}from"./jsx-runtime-1a9d9a93.js";import{Z as y,l as j}from"./index.es16-1ce448e1.js";import{r as s}from"./index-8b3efc3f.js";import{L as G}from"./global-variants-893e06e6.js";import{h as q}from"./index.es13-751bc762.js";import"./index.es31-95f1013f.js";import"./_commonjsHelpers-de833af9.js";const ae=""+new URL("zep-cat-logo-7a4ba8ca.svg",import.meta.url).href,ne=""+new URL("burger-fe2d6553.svg",import.meta.url).href,W=""+new URL("language-icon-fedf31c2.svg",import.meta.url).href,V=({selectedLocale:t,setLocaleSwitcherMenu:i,locales:p,header:N,labelBack:m,setLanguageSwitcher:b,setSelectedLocale:o})=>{var f,w;const[z,v]=s.useState(!1),[h,d]=s.useState(!1);s.useEffect(()=>{v(!0)},[]);const x=()=>{setTimeout(()=>{i&&i(!1)},500),v(!1)},c=p==null?void 0:p.reduce((a,r)=>(a[r.country]||(a[r.country]=[]),a[r.country].push(r),a),{});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`${h?"zep-animate-slide-out":""} md:zep-hidden`,children:[e.jsx("div",{className:"zep-text-typography-light-100 zep-mb-1.5 zep-flex zep-gap-0.5 zep-items-center",children:e.jsx(y,{mode:j.Standalone,label:m,iconPlacement:"before",icon:"arrow-long-left",onClick:a=>{a.preventDefault(),d(!0),setTimeout(()=>{d(!1),b&&b(!1)},300)}})}),e.jsx("h4",{className:"zep-text-headlineXS-fluid-cqi zep-text-typography-light-100 zep-mb-2",children:N}),c&&((f=Object.keys(c))==null?void 0:f.map((a,r)=>{var g;return e.jsxs("div",{className:"zep-mb-3",children:[e.jsx("p",{className:"zep-mb-1.5 zep-typography-bodyText zep-text-typography-light-100",children:a}),(g=c[a])==null?void 0:g.map(n=>e.jsxs("div",{className:"zep-flex zep-gap-1 zep-mb-1.5 zep-items-center",onClick:()=>o&&o(n),children:[e.jsx("div",{className:"zep-w-1.5 zep-h-1.5 zep-bg-typography-light-100 zep-flex zep-justify-center zep-items-center zep-rounded-full",children:(t==null?void 0:t.value)===(n==null?void 0:n.value)&&e.jsx("div",{className:"zep-w-0.75 zep-h-0.75 zep-bg-neutral-dark-default zep-rounded-full"})}),e.jsx("p",{className:"zep-typography-bodyText zep-text-typography-light-100",children:n==null?void 0:n.label})]},n.value))]},`${a}${r}`)}))]}),e.jsxs("div",{className:"zep-hidden md:zep-block",children:[e.jsx("div",{className:`zep-fixed zep-top-[0px] zep-right-[0px] md:zep-w-[440px] lg:zep-w-[480px] zep-pl-3 zep-pt-2 zep-pr-2 zep-bg-background-dark zep-ease-out zep-w-[0px] zep-duration-500 zep-h-screen zep-z-[1000] ${z?"zep-translate-x-0 ":"zep-translate-x-full"}`,children:e.jsxs("div",{className:`${z?"zep-block zep-overflow-hidden":""}`,children:[e.jsx("div",{className:"zep-flex zep-justify-end zep-mb-2",children:e.jsx(q,{name:"close",color:"#fff",size:24,onClick:x,className:"zep-cursor-pointer"})}),e.jsx("h4",{className:"zep-text-headlineXS-fluid-cqi zep-text-typography-light-100 zep-mb-3",children:N}),c&&((w=Object.keys(c))==null?void 0:w.map((a,r)=>{var g;return e.jsxs("div",{className:"zep-mb-3",children:[e.jsx("p",{className:"zep-mb-1.5 zep-typography-bodyText zep-text-typography-light-100",children:a}),(g=c[a])==null?void 0:g.map(n=>e.jsxs("div",{className:"zep-flex zep-gap-1 zep-mb-1.5 zep-items-center",onClick:()=>o&&o(n),children:[e.jsx("div",{className:"zep-w-1.5 zep-h-1.5 zep-bg-typography-light-100 zep-flex zep-justify-center zep-items-center zep-rounded-full",children:(t==null?void 0:t.value)===(n==null?void 0:n.value)&&e.jsx("div",{className:"zep-w-0.75 zep-h-0.75 zep-bg-neutral-dark-default zep-rounded-full"})}),e.jsx("p",{className:"zep-typography-bodyText zep-text-typography-light-100",children:n==null?void 0:n.label})]},n.value))]},`${a}${r}`)}))]})}),e.jsx("div",{onClick:x,className:`zep-fixed zep-top-[0px] zep-left-[0px] zep-bg-[#000] transition-all zep-duration-500  zep-w-screen zep-h-screen zep-z-[500] ${z?"zep-opacity-70":"zep-opacity-[0]"}`})]})]})};try{V.displayName="LanguageSwitcher",V.__docgenInfo={description:"",displayName:"LanguageSwitcher",props:{header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"string"}},labelBack:{defaultValue:null,description:"",name:"labelBack",required:!0,type:{name:"string"}},setLocaleSwitcherMenu:{defaultValue:null,description:"",name:"setLocaleSwitcherMenu",required:!1,type:{name:"((x: boolean) => void)"}},selectedLocale:{defaultValue:null,description:"",name:"selectedLocale",required:!1,type:{name:"Locale"}},setLanguageSwitcher:{defaultValue:null,description:"",name:"setLanguageSwitcher",required:!1,type:{name:"((x: boolean) => void)"}},locales:{defaultValue:null,description:"",name:"locales",required:!1,type:{name:"Locale[]"}},setSelectedLocale:{defaultValue:null,description:"",name:"setSelectedLocale",required:!1,type:{name:"((x: Locale) => void)"}}}}}catch{}const L=({navItems:t,setOpen:i,initialPath:p,setInitialPath:N,selectedLocale:m,locales:b,header:o="",labelBack:z,setSelectedLocale:v,navigationUtilityItems:h})=>{const[d,x]=s.useState(!1),[c,f]=s.useState(!1),[w,a]=s.useState(!1);s.useEffect(()=>{x(!0)},[]),s.useEffect(()=>(d?document.body.classList.add("zep-overflow-hidden"):document.body.classList.remove("zep-overflow-hidden"),()=>{document.body.classList.remove("zep-overflow-hidden")}),[d]);const r=()=>{setTimeout(()=>{N([]),i(!1)},500),x(!1)},g=({items:n,children:$})=>{var P;const[k,_]=s.useState(p||[]),[X,E]=s.useState(p?p[0]:"1"),[H,D]=s.useState(!1),[Z,M]=s.useState(!1);s.useEffect(()=>{p&&(p==null?void 0:p.length)>0&&_(p)},[]);const J=(l,u)=>{_(I=>[...I.slice(0,u),l])},T=()=>{_(l=>{const u=l.slice(0,-1);return E(u.length>0?u[u.length-1]:"1"),u})},A=(l,u)=>{let I=l;for(const O of u){const B=I.find(ee=>ee.navId===O);if(B&&B.children)I=B.children;else break}return I},Q=A(n,k),Y=A(n,k.slice(0,-1));return e.jsxs("div",{className:H?"zep-animate-slide-in":Z?"zep-animate-slide-out":"",children:[k.length>0&&e.jsx("div",{className:"zep-text-typography-light-100 zep-mb-1.5 zep-flex zep-gap-0.5 zep-items-center",children:e.jsx(y,{mode:j.Standalone,label:z,iconPlacement:"before",icon:"arrow-long-left",onClick:l=>{l.preventDefault(),M(!0),setTimeout(()=>{M(!1),T()},300)}})}),e.jsxs("ul",{children:[k.length>0&&e.jsxs("li",{className:"zep-flex zep-gap-0.5",children:[e.jsx(q,{name:"home",color:"#fff"}),e.jsx(y,{label:(P=Y[Number(X)-1])==null?void 0:P.label,className:"zep-mb-1.5 zep-text-typography-light-100",mode:j.Standalone,onClick:l=>{l.preventDefault(),T()}})]}),Q.map(l=>e.jsx("li",{className:`${k.length>0?"zep-pl-2":""}`,children:l.children&&l.children.length>0?e.jsx("div",{className:"zep-flex zep-gap-0.5 zep-items-center zep-mb-1.5 ",children:e.jsx(y,{label:l.label,className:"zep-text-typography-light-100",mode:j.Standalone,href:l.link,iconPlacement:"before",icon:"arrow-long-right",onClick:u=>{u.preventDefault(),E(l.navId),D(!0),J(l.navId,k.length),setTimeout(()=>D(!1),300)}})}):e.jsx(y,{label:l.label,className:"zep-mb-1.5 zep-text-typography-light-100  zep-justify-end",iconPlacement:"before",mode:j.Standalone,href:l.link})},`${l.navId}-${l.label}`))]}),$&&e.jsx("div",{children:$})]})};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"md:zep-hidden",children:e.jsx("div",{className:`zep-fixed zep-top-[0px] zep-left-[0px] zep-py-1 sm:zep-py-2 zep-bg-background-dark zep-z-[1000] zep-ease-in-out zep-h-screen zep-duration-500 ${d?"zep-w-full md:zep-transform zep-translate-x-0 lg:zep-transform zep-translate-x-0":"-zep-translate-x-full"}`,children:e.jsxs("div",{className:`${d?"zep-block":""} zep-h-[calc(100svh-40px)] zep-overflow-auto`,children:[e.jsx("div",{className:"zep-flex zep-justify-end zep-mb-1 zep-mr-1 sm:zep-mr-2",children:e.jsx(q,{name:"close",color:"#fff",size:24,onClick:r})}),e.jsx("div",{className:`${w?"zep-animate-slide-in":""}`,children:c?e.jsx("div",{className:"zep-px-1.5 sm:zep-px-3",children:e.jsx(V,{locales:b,header:o,labelBack:z,selectedLocale:m,setLanguageSwitcher:f,setSelectedLocale:v})}):e.jsx("div",{children:e.jsx("div",{className:"zep-px-1.5 sm:zep-px-3",children:e.jsxs(g,{items:t,children:[e.jsx("div",{className:"zep-w-full zep-h-[1px] zep-bg-greyscale-700 zep-mt-2.5 zep-mb-2.5"}),e.jsx("div",{className:"",children:h==null?void 0:h.map(n=>e.jsx(y,{label:n.label,href:"",mode:j.Standalone,className:"zep-text-typography-light-100 zep-mb-1.5"},n.label))}),e.jsxs("div",{className:"zep-flex zep-gap-0.5 zep-items-center zep-mb-3",onClick:n=>{n.preventDefault(),f(!0),a(!0),setTimeout(()=>a(!1),300)},children:[e.jsx("img",{alt:"Language switch icon",src:W,className:"zep-w-1"}),e.jsx("p",{className:"zep-text-typography-light-100 zep-font-500",children:m==null?void 0:m.label})]})]})})})})]})})}),e.jsxs("div",{className:"zep-hidden md:zep-block",children:[e.jsx("div",{className:`zep-fixed zep-top-[0px] zep-left-[0px] md:zep-w-[440px] lg:zep-w-[500px] zep-pt-2 zep-bg-background-dark zep-ease-in-out zep-w-[0px] zep-duration-500 zep-h-screen zep-z-[1000] ${d?"md:zep-transform zep-translate-x-0 lg:zep-transform zep-translate-x-0":"-zep-translate-x-full"}`,children:e.jsxs("div",{className:`${d?"zep-block":""} zep-h-[calc(100svh-40px)] zep-overflow-auto`,children:[e.jsx("div",{className:"zep-flex zep-justify-end zep-pr-2 zep-mb-2",children:e.jsx(q,{name:"close",color:"#fff",size:24,onClick:r,className:"zep-cursor-pointer"})}),e.jsx("div",{className:"zep-px-3",children:e.jsx(g,{items:t})})]})}),e.jsx("div",{onClick:r,className:`zep-fixed zep-top-[0px] zep-left-[0px] zep-bg-[#000] transition-all zep-duration-500  zep-w-screen zep-h-screen zep-z-[500] ${d?"zep-opacity-70":"zep-opacity-[0]"}`})]})]})};try{L.displayName="Sidebar",L.__docgenInfo={description:"",displayName:"Sidebar",props:{navItems:{defaultValue:null,description:"",name:"navItems",required:!0,type:{name:"NavigationItem[]"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},setOpen:{defaultValue:null,description:"",name:"setOpen",required:!0,type:{name:"(x: boolean) => void"}},initialPath:{defaultValue:null,description:"",name:"initialPath",required:!1,type:{name:"string[]"}},setInitialPath:{defaultValue:null,description:"",name:"setInitialPath",required:!0,type:{name:"(x: string[]) => void"}},selectedLocale:{defaultValue:null,description:"",name:"selectedLocale",required:!1,type:{name:"Locale"}},locales:{defaultValue:null,description:"",name:"locales",required:!1,type:{name:"Locale[]"}},header:{defaultValue:{value:""},description:"",name:"header",required:!1,type:{name:"string"}},labelBack:{defaultValue:null,description:"",name:"labelBack",required:!0,type:{name:"string"}},setSelectedLocale:{defaultValue:null,description:"",name:"setSelectedLocale",required:!1,type:{name:"((x: Locale) => void)"}},navigationUtilityItems:{defaultValue:null,description:"",name:"navigationUtilityItems",required:!1,type:{name:"NavUtilityItem[]"}}}}}catch{}const C=({navigationUtilityItems:t,selectedLocale:i,setSelectedLocale:p,logo:N,header:m,labelBack:b,navigationItems:o,locales:z})=>{const[v,h]=s.useState(!1),[d,x]=s.useState([]),[c,f]=s.useState(!1),w=()=>{switch(i==null?void 0:i.value){case G.EN:return"/de/en/";case G.DE_AT:return"/at/de/";default:return"/de/de/"}};return e.jsxs("div",{className:"zep-bg-background-dark",children:[e.jsxs("div",{className:"zep-hidden md:zep-flex zep-justify-end zep-px-1 sm:zep-px-1.5 md:zep-px-[66px] lg:zep-px-[122px] md:zep-py-0.75 zep-border-b-1 zep-border-greyscale-700",children:[e.jsx("div",{className:"zep-flex zep-gap-2 zep-mr-3",children:t==null?void 0:t.map((a,r)=>e.jsx(y,{label:a.label,href:a.link||"",mode:j.Standalone,className:"zep-text-typography-light-100 zep-text-0.875"},`${a.label}${r}`))}),e.jsxs("div",{className:"zep-flex zep-gap-0.5 zep-items-center zep-cursor-pointer zep-group",onClick:()=>f(!0),children:[e.jsx("img",{className:"zep-size-[18px]",alt:"Language switch icon",src:W}),e.jsx("p",{className:"zep-text-typography-light-100 zep-font-500 zep-text-0.875 group-hover:zep-underline",children:i==null?void 0:i.label})]})]}),e.jsxs("div",{className:"zep-p-1 sm:zep-px-1.5 md:zep-px-[66px] lg:zep-px-[122px] md:zep-py-1.5 zep-flex zep-justify-between md:zep-justify-start zep-items-center zep-border-b-1 zep-border-greyscale-700",children:[e.jsx("a",{href:w(),children:e.jsx("img",{alt:"logo",src:N,className:"md:zep-mr-3 xl:zep-mr-4"})}),e.jsx("img",{alt:"hamburger_menu",src:ne,className:"md:zep-hidden",onClick:()=>h(!0)}),e.jsx("div",{className:"zep-hidden md:zep-flex md:zep-gap-2.5 lg:zep-gap-3.5",children:o==null?void 0:o.map((a,r)=>e.jsxs("div",{onClick:()=>{h(!0),a.children&&x([a.navId])},className:"zep-group zep-relative zep-cursor-pointer",children:[e.jsx("p",{className:"zep-typography-navigation zep-text-typography-light-100 zep-uppercase zep-py-0.25",children:a.label}),e.jsx("div",{className:"zep-hidden group-hover:zep-block group-hover:zep-absolute zep-w-full",children:e.jsx("div",{className:"zep-w-[24px] zep-h-[2px] zep-bg-yellow-500 zep-mx-auto"})})]},`${a.label}${r}`))})]}),v&&e.jsx(L,{initialPath:d,setInitialPath:x,navItems:o,open:v,setOpen:h,selectedLocale:i,header:m,labelBack:b,locales:z,setSelectedLocale:p,navigationUtilityItems:t}),c&&e.jsx(V,{setLocaleSwitcherMenu:f,locales:z,labelBack:b,header:m,selectedLocale:i,setSelectedLocale:p})]})};try{C.displayName="Navigation",C.__docgenInfo={description:"",displayName:"Navigation",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},navigationUtilityItems:{defaultValue:null,description:"",name:"navigationUtilityItems",required:!1,type:{name:"NavUtilityItem[]"}},navigationItems:{defaultValue:null,description:"",name:"navigationItems",required:!0,type:{name:"NavigationItem[]"}},selectedLocale:{defaultValue:null,description:"",name:"selectedLocale",required:!1,type:{name:"Locale"}},setSelectedLocale:{defaultValue:null,description:"",name:"setSelectedLocale",required:!1,type:{name:"((locale: Locale) => void)"}},locales:{defaultValue:null,description:"",name:"locales",required:!1,type:{name:"Locale[]"}},logo:{defaultValue:null,description:"",name:"logo",required:!0,type:{name:"string"}},header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"string"}},labelBack:{defaultValue:null,description:"",name:"labelBack",required:!0,type:{name:"string"}}}}}catch{}const oe={title:"Components/Navigation",component:C,tags:["autodocs"],argTypes:{}},R=[{label:"Deutsch (DE)",value:"de",country:"Germany (Deutschland)"},{label:"English (EN)",value:"en",country:"Germany (Deutschland)"},{label:"Deutsch (AT)",value:"de-AT",country:"Austria (Österreich)"}],S={args:{logo:ae,navigationItems:[{navId:"1",label:"Marine",link:"/home",children:[{navId:"1",label:"Loesungen",link:"",children:[{navId:"1",label:"Bratwurst",children:[{navId:"1",label:"Bratwurst 1",link:"https://www.google.co.uk/"}]},{navId:"2",label:"Marine 1-2"}]},{navId:"2",label:"Ppower and heat",link:"",children:[{navId:"1",label:"Bratwurst",children:[{navId:"1",label:"Bratwurst 1",link:"https://www.google.co.uk/"}]},{navId:"2",label:"Marine 1-2"}]},{navId:"3",label:"LILA",link:"",children:[{navId:"1",label:"Bratwurst",children:[{navId:"1",label:"Bratwurst 1",link:"https://www.google.co.uk/"}]},{navId:"2",label:"Marine 1-2"}]}]},{navId:"2",label:"Strom & Wärme",children:[{navId:"1",label:"Strom 1"}]},{navId:"3",label:"Industrie",children:[{label:"Industrie 1"}]},{navId:"4",label:"Öl & Gas"},{navId:"5",label:"Schiene"},{navId:"6",label:"Gebrauchtmaschinen"}],locales:R,header:" Select preferred country and language",labelBack:"Back",selectedLocale:R[0],navigationUtilityItems:[{label:"Services"},{label:"Unternehmen"},{label:"Kontakt & Standorte"}]}};var U,F,K;S.parameters={...S.parameters,docs:{...(U=S.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    logo: zepCatLogo,
    navigationItems: [{
      navId: '1',
      label: 'Marine',
      link: '/home',
      children: [{
        navId: '1',
        label: 'Loesungen',
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
      }, {
        navId: '2',
        label: 'Ppower and heat',
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
}`,...(K=(F=S.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};const ce=["Default"];export{S as Default,ce as __namedExportsOrder,oe as default};
