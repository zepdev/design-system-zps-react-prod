import{j as e}from"./jsx-runtime-1a9d9a93.js";import{Z as g,l as f}from"./index.es16-d6722ea7.js";import{r as c}from"./index-8b3efc3f.js";import{L as E}from"./global-variants-893e06e6.js";import{h as b}from"./index.es13-11b4520a.js";import"./index.es31-95f1013f.js";import"./_commonjsHelpers-de833af9.js";const Z=""+new URL("zep-cat-logo-7a4ba8ca.svg",import.meta.url).href,K=""+new URL("burger-fe2d6553.svg",import.meta.url).href,A=""+new URL("language-icon-fedf31c2.svg",import.meta.url).href,I=({selectedLocale:p,setLocaleSwitcherMenu:o,locales:t,setLanguageSwitcher:v,setSelectedLocale:s})=>{var h,y;const[m,x]=c.useState(!1);c.useEffect(()=>{x(!0)},[]);const u=()=>{setTimeout(()=>{o&&o(!1)},500),x(!1)},i=t==null?void 0:t.reduce((n,d)=>(n[d.country]||(n[d.country]=[]),n[d.country].push(d),n),{});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"md:zep-hidden",children:[e.jsxs("div",{className:"zep-text-typography-light-100 zep-mb-1.5 zep-flex zep-gap-0.5 zep-items-center",children:[e.jsx(b,{name:"arrow-long-left",size:20}),e.jsx(g,{mode:f.Standalone,label:"Züruck",onClick:()=>v&&v(!1)})]}),i&&((h=Object.keys(i))==null?void 0:h.map((n,d)=>{var r;return e.jsxs("div",{children:[e.jsx("p",{className:"zep-mb-1.5 zep-typography-bodyText zep-text-typography-light-100",children:n}),(r=i[n])==null?void 0:r.map(a=>e.jsxs("div",{className:"zep-flex zep-gap-1 zep-mb-1.5 zep-items-center",onClick:()=>s&&s(a),children:[e.jsx("div",{className:"zep-w-1.5 zep-h-1.5 zep-bg-typography-light-100 zep-flex zep-justify-center zep-items-center zep-rounded-full",children:(p==null?void 0:p.value)===(a==null?void 0:a.value)&&e.jsx("div",{className:"zep-w-0.75 zep-h-0.75 zep-bg-neutral-dark-default zep-rounded-full"})}),e.jsx("p",{className:"zep-typography-bodyText zep-text-typography-light-100",children:a==null?void 0:a.label})]},a.value))]},`${n}${d}`)}))]}),e.jsxs("div",{className:"zep-hidden md:zep-block",children:[e.jsx("div",{className:`zep-fixed zep-top-[0px] zep-right-[0px] md:zep-w-[440px] lg:zep-w-[480px] zep-pl-3 zep-pt-2 zep-pr-2 zep-bg-background-dark zep-ease-out zep-w-[0px] zep-duration-500 zep-h-screen zep-z-[1000] ${m?"zep-translate-x-0 ":"zep-translate-x-full"}`,children:e.jsxs("div",{className:`${m?"zep-block zep-overflow-hidden":""}`,children:[e.jsx("div",{className:"zep-flex zep-justify-end zep-mb-6",children:e.jsx(b,{name:"close",color:"#fff",size:24,onClick:u,className:"zep-cursor-pointer"})}),i&&((y=Object.keys(i))==null?void 0:y.map((n,d)=>{var r;return e.jsxs("div",{children:[e.jsx("p",{className:"zep-mb-1.5 zep-typography-bodyText zep-text-typography-light-100",children:n}),(r=i[n])==null?void 0:r.map(a=>e.jsxs("div",{className:"zep-flex zep-gap-1 zep-mb-1.5 zep-items-center",onClick:()=>s&&s(a),children:[e.jsx("div",{className:"zep-w-1.5 zep-h-1.5 zep-bg-typography-light-100 zep-flex zep-justify-center zep-items-center zep-rounded-full",children:(p==null?void 0:p.value)===(a==null?void 0:a.value)&&e.jsx("div",{className:"zep-w-0.75 zep-h-0.75 zep-bg-neutral-dark-default zep-rounded-full"})}),e.jsx("p",{className:"zep-typography-bodyText zep-text-typography-light-100",children:a==null?void 0:a.label})]},a.value))]},`${n}${d}`)}))]})}),e.jsx("div",{onClick:u,className:`zep-fixed zep-top-[0px] zep-left-[0px] zep-bg-[#000] transition-all zep-duration-500  zep-w-screen zep-h-screen zep-z-[500] ${m?"zep-opacity-70":"zep-opacity-[0]"}`})]})]})};try{I.displayName="LanguageSwitcher",I.__docgenInfo={description:"",displayName:"LanguageSwitcher",props:{setLocaleSwitcherMenu:{defaultValue:null,description:"",name:"setLocaleSwitcherMenu",required:!1,type:{name:"((x: boolean) => void)"}},selectedLocale:{defaultValue:null,description:"",name:"selectedLocale",required:!1,type:{name:"Locale"}},setLanguageSwitcher:{defaultValue:null,description:"",name:"setLanguageSwitcher",required:!1,type:{name:"((x: boolean) => void)"}},locales:{defaultValue:null,description:"",name:"locales",required:!1,type:{name:"Locale[]"}},setSelectedLocale:{defaultValue:null,description:"",name:"setSelectedLocale",required:!1,type:{name:"((x: Locale) => void)"}}}}}catch{}const _=({navItems:p,setOpen:o,initialPath:t,setInitialPath:v,selectedLocale:s,locales:m,setSelectedLocale:x,navigationUtilityItems:u})=>{const[i,h]=c.useState(!1),[y,n]=c.useState(!1);c.useEffect(()=>{h(!0)},[]);const d=()=>{setTimeout(()=>{v([]),o(!1)},500),h(!1)},r=({items:a})=>{var L;const[j,k]=c.useState(t||[]),[O,q]=c.useState(t?t[0]:"1");c.useEffect(()=>{t&&(t==null?void 0:t.length)>0&&k(t)},[]);const G=(l,z)=>{k(N=>[...N.slice(0,z),l])},C=()=>{k(l=>{const z=l.slice(0,-1);return q(z.length>0?z[z.length-1]:"1"),z})},$=(l,z)=>{let N=l;for(const B of z){const S=N.find(F=>F.navId===B);if(S&&S.children)N=S.children;else break}return N},R=$(a,j),U=$(a,j.slice(0,-1));return e.jsxs("div",{children:[j.length>0&&e.jsxs("div",{className:"zep-text-typography-light-100 zep-mb-1.5 zep-flex zep-gap-0.5 zep-items-center",children:[e.jsx(b,{name:"arrow-long-left",size:20}),e.jsx(g,{mode:f.Standalone,label:"Züruck",onClick:C})]}),e.jsxs("ul",{children:[j.length>0&&e.jsxs("li",{className:"zep-flex zep-gap-0.5",children:[e.jsx(b,{name:"home",color:"#fff"}),e.jsx(g,{label:(L=U[Number(O)-1])==null?void 0:L.label,className:"zep-mb-1.5 zep-text-typography-light-100",mode:f.Standalone,onClick:l=>{l.preventDefault(),C()}})]}),R.map(l=>e.jsx("li",{className:`${j.length>0?"zep-pl-2":""}`,children:l.children&&l.children.length>0?e.jsxs("div",{className:"zep-flex zep-gap-1 zep-items-center zep-mb-1.5 ",children:[e.jsx(g,{label:l.label,className:"zep-text-typography-light-100",mode:f.Standalone,href:l.link}),e.jsx(b,{name:"arrow-long-right",color:"white",size:20,className:"zep-cursor-pointer",onClick:z=>{z.stopPropagation(),q(l.navId),G(l.navId,j.length)}})]}):e.jsx(g,{label:l.label,className:"zep-mb-1.5 zep-text-typography-light-100  zep-justify-end",iconPlacement:"before",mode:f.Standalone,href:l.link})},`${l.navId}-${l.label}`))]})]})};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"md:zep-hidden",children:e.jsx("div",{className:`zep-fixed zep-top-[0px] zep-left-[0px] zep-bg-background-dark zep-z-[1000] zep-pl-3 zep-pt-2 zep-pr-2 zep-ease-in-out zep-h-screen zep-duration-500 ${i?"zep-w-full md:zep-transform zep-translate-x-0 lg:zep-transform zep-translate-x-0":"-zep-translate-x-full"}`,children:e.jsxs("div",{className:`${i?"zep-block zep-overflow-hidden":""}`,children:[e.jsx("div",{className:"zep-flex zep-justify-end zep-mb-1 zep-pt-1 zep-pr-1 sm:zep-pt-2 sm:zep-pr-2",children:e.jsx(b,{name:"close",color:"#fff",size:24,onClick:d})}),y?e.jsx("div",{className:"zep-pl-2 zep-pt-1 zep-pr-1  sm:zep-pt-2 sm:zep-pr-2",children:e.jsx(I,{locales:m,selectedLocale:s,setLanguageSwitcher:n,setSelectedLocale:x})}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"zep-pl-2 zep-pt-1 zep-pr-1  sm:zep-pt-2 sm:zep-pr-2",children:e.jsx(r,{items:p})}),e.jsx("div",{className:"zep-w-full zep-h-[1px] zep-bg-greyscale-700 zep-mt-3.5"}),e.jsxs("div",{className:"zep-flex zep-gap-0.5 zep-items-center zep-pl-2 zep-pt-1.5 sm:zep-pt-2 zep-pr-1 sm:zep-pr-2 zep-mb-3",onClick:()=>n(!0),children:[e.jsx("img",{alt:"Language switch icon",src:A,className:"zep-w-1"}),e.jsx("p",{className:"zep-text-typography-light-100 zep-font-500",children:s==null?void 0:s.label})]}),e.jsx("div",{className:"zep-pl-2 zep-pr-1",children:u==null?void 0:u.map(a=>e.jsx(g,{label:a.label,href:"",mode:f.Standalone,className:"zep-text-typography-light-100 zep-mb-1.5"},a.label))})]})]})})}),e.jsxs("div",{className:"zep-hidden md:zep-block",children:[e.jsx("div",{className:`zep-fixed zep-top-[0px] zep-left-[0px] md:zep-w-[440px] lg:zep-w-[578px] zep-pl-3 zep-pt-2 zep-pr-2 zep-bg-background-dark zep-ease-in-out zep-w-[0px] zep-duration-500 zep-h-screen zep-z-[1000] ${i?"md:zep-transform zep-translate-x-0 lg:zep-transform zep-translate-x-0":"-zep-translate-x-full"}`,children:e.jsxs("div",{className:`${i?"zep-block zep-overflow-hidden":""}`,children:[e.jsx("div",{className:"zep-flex zep-justify-end zep-mb-6",children:e.jsx(b,{name:"close",color:"#fff",size:24,onClick:d,className:"zep-cursor-pointer"})}),e.jsx(r,{items:p})]})}),e.jsx("div",{onClick:d,className:`zep-fixed zep-top-[0px] zep-left-[0px] zep-bg-[#000] transition-all zep-duration-500  zep-w-screen zep-h-screen zep-z-[500] ${i?"zep-opacity-70":"zep-opacity-[0]"}`})]})]})};try{_.displayName="Sidebar",_.__docgenInfo={description:"",displayName:"Sidebar",props:{navItems:{defaultValue:null,description:"",name:"navItems",required:!0,type:{name:"NavigationItem[]"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},setOpen:{defaultValue:null,description:"",name:"setOpen",required:!0,type:{name:"(x: boolean) => void"}},initialPath:{defaultValue:null,description:"",name:"initialPath",required:!1,type:{name:"string[]"}},setInitialPath:{defaultValue:null,description:"",name:"setInitialPath",required:!0,type:{name:"(x: string[]) => void"}},selectedLocale:{defaultValue:null,description:"",name:"selectedLocale",required:!1,type:{name:"Locale"}},locales:{defaultValue:null,description:"",name:"locales",required:!1,type:{name:"Locale[]"}},setSelectedLocale:{defaultValue:null,description:"",name:"setSelectedLocale",required:!1,type:{name:"((x: Locale) => void)"}},navigationUtilityItems:{defaultValue:null,description:"",name:"navigationUtilityItems",required:!1,type:{name:"NavUtilityItem[]"}}}}}catch{}const V=({navigationUtilityItems:p,selectedLocale:o,setSelectedLocale:t,logo:v,navigationItems:s,locales:m})=>{const[x,u]=c.useState(!1),[i,h]=c.useState([]),[y,n]=c.useState(!1),d=()=>{switch(o==null?void 0:o.value){case E.EN:return"/de/en/";case E.DE_AT:return"/at/de/";default:return"/de/de/"}};return e.jsxs("div",{className:"zep-bg-background-dark",children:[e.jsxs("div",{className:"zep-hidden md:zep-flex zep-justify-end zep-px-1 sm:zep-px-1.5 md:zep-px-[66px] xl:zep-px-[122px] md:zep-py-0.75 zep-border-b-1 zep-border-greyscale-700",children:[e.jsx("div",{className:"zep-flex zep-gap-2 zep-mr-3",children:p==null?void 0:p.map((r,a)=>e.jsx(g,{label:r.label,href:r.link||"",mode:f.Standalone,className:"zep-text-typography-light-100"},`${r.label}${a}`))}),e.jsxs("div",{className:"zep-flex zep-gap-0.5 zep-items-center zep-cursor-pointer zep-group",onClick:()=>n(!0),children:[e.jsx("img",{alt:"Language switch icon",src:A}),e.jsx("p",{className:"zep-text-typography-light-100 zep-font-500 group-hover:zep-underline",children:o==null?void 0:o.label})]})]}),e.jsxs("div",{className:"zep-p-1 sm:zep-px-1.5 md:zep-px-[66px] xl:zep-px-[122px] md:zep-py-1.5 zep-flex zep-justify-between md:zep-justify-start zep-items-center zep-border-b-1 zep-border-greyscale-700",children:[e.jsx("a",{href:d(),children:e.jsx("img",{alt:"logo",src:v,className:"md:zep-mr-3 xl:zep-mr-4"})}),e.jsx("img",{alt:"hamburger_menu",src:K,className:"md:zep-hidden",onClick:()=>u(!0)}),e.jsx("div",{className:"zep-hidden md:zep-flex md:zep-gap-2.5 xl:zep-gap-3.5",children:s==null?void 0:s.map((r,a)=>e.jsxs("div",{onClick:()=>{u(!0),r.children&&h([r.navId])},className:"zep-group zep-relative zep-cursor-pointer",children:[e.jsx("p",{className:"zep-typography-navigation zep-text-typography-light-100 zep-uppercase zep-py-0.25",children:r.label}),e.jsx("div",{className:"zep-hidden group-hover:zep-block group-hover:zep-absolute zep-w-full",children:e.jsx("div",{className:"zep-w-[24px] zep-h-[2px] zep-bg-yellow-500 zep-mx-auto"})})]},`${r.label}${a}`))})]}),x&&e.jsx(_,{initialPath:i,setInitialPath:h,navItems:s,open:x,setOpen:u,selectedLocale:o,locales:m,setSelectedLocale:t,navigationUtilityItems:p}),y&&e.jsx(I,{setLocaleSwitcherMenu:n,locales:m,selectedLocale:o,setSelectedLocale:t})]})};try{V.displayName="Navigation",V.__docgenInfo={description:"",displayName:"Navigation",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},navigationUtilityItems:{defaultValue:null,description:"",name:"navigationUtilityItems",required:!1,type:{name:"NavUtilityItem[]"}},navigationItems:{defaultValue:null,description:"",name:"navigationItems",required:!0,type:{name:"NavigationItem[]"}},selectedLocale:{defaultValue:null,description:"",name:"selectedLocale",required:!1,type:{name:"Locale"}},setSelectedLocale:{defaultValue:null,description:"",name:"setSelectedLocale",required:!1,type:{name:"((locale: Locale) => void)"}},locales:{defaultValue:null,description:"",name:"locales",required:!1,type:{name:"Locale[]"}},logo:{defaultValue:null,description:"",name:"logo",required:!0,type:{name:"string"}}}}}catch{}const ae={title:"Components/Navigation",component:V,tags:["autodocs"],argTypes:{}},M=[{label:"Deutsch (DE)",value:"de",country:"Germany (Deutschland)"},{label:"English (EN)",value:"en",country:"Germany (Deutschland)"},{label:"Deutsch (AT)",value:"de-AT",country:"Austria (Österreich)"}],w={args:{logo:Z,navigationItems:[{navId:"1",label:"Marine",link:"/home",children:[{navId:"1",label:"Loesungen",link:"",children:[{navId:"1",label:"Bratwurst",children:[{navId:"1",label:"Bratwurst 1",link:"https://www.google.co.uk/"}]},{navId:"2",label:"Marine 1-2"}]},{navId:"2",label:"Ppower and heat",link:"",children:[{navId:"1",label:"Bratwurst",children:[{navId:"1",label:"Bratwurst 1",link:"https://www.google.co.uk/"}]},{navId:"2",label:"Marine 1-2"}]},{navId:"3",label:"LILA",link:"",children:[{navId:"1",label:"Bratwurst",children:[{navId:"1",label:"Bratwurst 1",link:"https://www.google.co.uk/"}]},{navId:"2",label:"Marine 1-2"}]}]},{navId:"2",label:"Strom & Wärme",children:[{navId:"1",label:"Strom 1"}]},{navId:"3",label:"Industrie",children:[{label:"Industrie 1"}]},{navId:"4",label:"Öl & Gas"},{navId:"5",label:"Schiene"},{navId:"6",label:"Gebrauchtmaschinen"}],locales:M,selectedLocale:M[0],navigationUtilityItems:[{label:"Services"},{label:"Unternehmen"},{label:"Kontakt & Standorte"}]}};var D,T,P;w.parameters={...w.parameters,docs:{...(D=w.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
    selectedLocale: locales[0],
    navigationUtilityItems: [{
      label: 'Services'
    }, {
      label: 'Unternehmen'
    }, {
      label: 'Kontakt & Standorte'
    }]
  } as NavigationProps
}`,...(P=(T=w.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};const ne=["Default"];export{w as Default,ne as __namedExportsOrder,ae as default};
