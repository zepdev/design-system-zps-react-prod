import{j as e}from"./jsx-runtime-1a9d9a93.js";import{Z as g,l as f}from"./index.es16-b727257a.js";import{r as o}from"./index-8b3efc3f.js";import{h as b}from"./index.es13-9623ab51.js";import"./index.es31-95f1013f.js";import"./_commonjsHelpers-de833af9.js";const F=""+new URL("zep-cat-logo-7a4ba8ca.svg",import.meta.url).href,Z=""+new URL("burger-fe2d6553.svg",import.meta.url).href,P=""+new URL("language-icon-fedf31c2.svg",import.meta.url).href,I=({selectedLocale:r,setLocaleSwitcherMenu:c,locales:s,setLanguageSwitcher:v,setSelectedLocale:t})=>{var h,y;const[m,x]=o.useState(!1);o.useEffect(()=>{x(!0)},[]);const z=()=>{setTimeout(()=>{c&&c(!1)},500),x(!1)},d=s==null?void 0:s.reduce((l,n)=>(l[n.country]||(l[n.country]=[]),l[n.country].push(n),l),{});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"md:zep-hidden",children:[e.jsxs("div",{className:"zep-text-typography-light-100 zep-mb-1.5 zep-flex zep-gap-0.5 zep-items-center",children:[e.jsx(b,{name:"arrow-long-left",size:20}),e.jsx(g,{mode:f.Standalone,label:"Züruck",onClick:()=>v&&v(!1)})]}),d&&((h=Object.keys(d))==null?void 0:h.map((l,n)=>{var i;return e.jsxs("div",{children:[e.jsx("p",{className:"zep-mb-1.5 zep-typography-bodyText zep-text-typography-light-100",children:l}),(i=d[l])==null?void 0:i.map(a=>e.jsxs("div",{className:"zep-flex zep-gap-1 zep-mb-1.5 zep-items-center",onClick:()=>t&&t(a),children:[e.jsx("div",{className:"zep-w-1.5 zep-h-1.5 zep-bg-typography-light-100 zep-flex zep-justify-center zep-items-center zep-rounded-full",children:(r==null?void 0:r.value)===(a==null?void 0:a.value)&&e.jsx("div",{className:"zep-w-0.75 zep-h-0.75 zep-bg-neutral-dark-default zep-rounded-full"})}),e.jsx("p",{className:"zep-typography-bodyText zep-text-typography-light-100",children:a==null?void 0:a.label})]},a.value))]},`${l}${n}`)}))]}),e.jsxs("div",{className:"zep-hidden md:zep-block",children:[e.jsx("div",{className:`zep-fixed zep-top-[0px] zep-right-[0px] md:zep-w-[440px] lg:zep-w-[480px] zep-pl-3 zep-pt-2 zep-pr-2 zep-bg-background-dark zep-ease-out zep-w-[0px] zep-duration-500 zep-h-screen zep-z-[1000] ${m?"zep-translate-x-0 ":"zep-translate-x-full"}`,children:e.jsxs("div",{className:`${m?"zep-block zep-overflow-hidden":""}`,children:[e.jsx("div",{className:"zep-flex zep-justify-end zep-mb-6",children:e.jsx(b,{name:"close",color:"#fff",size:24,onClick:z,className:"zep-cursor-pointer"})}),d&&((y=Object.keys(d))==null?void 0:y.map((l,n)=>{var i;return e.jsxs("div",{children:[e.jsx("p",{className:"zep-mb-1.5 zep-typography-bodyText zep-text-typography-light-100",children:l}),(i=d[l])==null?void 0:i.map(a=>e.jsxs("div",{className:"zep-flex zep-gap-1 zep-mb-1.5 zep-items-center",onClick:()=>t&&t(a),children:[e.jsx("div",{className:"zep-w-1.5 zep-h-1.5 zep-bg-typography-light-100 zep-flex zep-justify-center zep-items-center zep-rounded-full",children:(r==null?void 0:r.value)===(a==null?void 0:a.value)&&e.jsx("div",{className:"zep-w-0.75 zep-h-0.75 zep-bg-neutral-dark-default zep-rounded-full"})}),e.jsx("p",{className:"zep-typography-bodyText zep-text-typography-light-100",children:a==null?void 0:a.label})]},a.value))]},`${l}${n}`)}))]})}),e.jsx("div",{onClick:z,className:`zep-fixed zep-top-[0px] zep-left-[0px] zep-bg-[#000] transition-all zep-duration-500  zep-w-screen zep-h-screen zep-z-[500] ${m?"zep-opacity-70":"zep-opacity-[0]"}`})]})]})};try{I.displayName="LanguageSwitcher",I.__docgenInfo={description:"",displayName:"LanguageSwitcher",props:{setLocaleSwitcherMenu:{defaultValue:null,description:"",name:"setLocaleSwitcherMenu",required:!1,type:{name:"((x: boolean) => void)"}},selectedLocale:{defaultValue:null,description:"",name:"selectedLocale",required:!1,type:{name:"Locale"}},setLanguageSwitcher:{defaultValue:null,description:"",name:"setLanguageSwitcher",required:!1,type:{name:"((x: boolean) => void)"}},locales:{defaultValue:null,description:"",name:"locales",required:!1,type:{name:"Locale[]"}},setSelectedLocale:{defaultValue:null,description:"",name:"setSelectedLocale",required:!1,type:{name:"((x: Locale) => void)"}}}}}catch{}const _=({navItems:r,setOpen:c,initialPath:s,setInitialPath:v,selectedLocale:t,locales:m,setSelectedLocale:x,navigationUtilityItems:z})=>{const[d,h]=o.useState(!1),[y,l]=o.useState(!1);o.useEffect(()=>{h(!0)},[]);const n=()=>{setTimeout(()=>{v([]),c(!1)},500),h(!1)},i=({items:a})=>{var $;const[j,k]=o.useState(s||[]),[O,C]=o.useState(s?s[0]:"1");o.useEffect(()=>{s&&(s==null?void 0:s.length)>0&&k(s)},[]);const A=(p,u)=>{k(N=>[...N.slice(0,u),p])},V=()=>{k(p=>{const u=p.slice(0,-1);return C(u.length>0?u[u.length-1]:"1"),u})},L=(p,u)=>{let N=p;for(const B of u){const S=N.find(U=>U.navId===B);if(S&&S.children)N=S.children;else break}return N},G=L(a,j),R=L(a,j.slice(0,-1));return e.jsxs("div",{children:[j.length>0&&e.jsxs("div",{className:"zep-text-typography-light-100 zep-mb-1.5 zep-flex zep-gap-0.5 zep-items-center",children:[e.jsx(b,{name:"arrow-long-left",size:20}),e.jsx(g,{mode:f.Standalone,label:"Züruck",onClick:V})]}),e.jsxs("ul",{children:[j.length>0&&e.jsxs("li",{className:"zep-flex zep-gap-0.5",children:[e.jsx(b,{name:"home",color:"#fff"}),e.jsx(g,{label:($=R[Number(O)-1])==null?void 0:$.label,className:"zep-mb-1.5 zep-text-typography-light-100",mode:f.Standalone,onClick:p=>{p.preventDefault(),V()}})]}),G.map(p=>e.jsx("li",{className:`${j.length>0?"zep-pl-2":""}`,children:p.children&&p.children.length>0?e.jsxs("div",{className:"zep-flex zep-gap-1 zep-items-center zep-mb-1.5 ",children:[e.jsx(g,{label:p.label,className:"zep-text-typography-light-100",mode:f.Standalone,href:p.link}),e.jsx(b,{name:"arrow-long-right",color:"white",size:20,className:"zep-cursor-pointer",onClick:u=>{u.stopPropagation(),C(p.navId),A(p.navId,j.length)}})]}):e.jsx(g,{label:p.label,className:"zep-mb-1.5 zep-text-typography-light-100  zep-justify-end",iconPlacement:"before",mode:f.Standalone,href:p.link})},`${p.navId}-${p.label}`))]})]})};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"md:zep-hidden",children:e.jsx("div",{className:`zep-fixed zep-top-[0px] zep-left-[0px] zep-bg-background-dark zep-z-[1000] zep-pl-3 zep-pt-2 zep-pr-2 zep-ease-in-out zep-h-screen zep-duration-500 ${d?"zep-w-full md:zep-transform zep-translate-x-0 lg:zep-transform zep-translate-x-0":"-zep-translate-x-full"}`,children:e.jsxs("div",{className:`${d?"zep-block zep-overflow-hidden":""}`,children:[e.jsx("div",{className:"zep-flex zep-justify-end zep-mb-1 zep-pt-1 zep-pr-1 sm:zep-pt-2 sm:zep-pr-2",children:e.jsx(b,{name:"close",color:"#fff",size:24,onClick:n})}),y?e.jsx("div",{className:"zep-pl-2 zep-pt-1 zep-pr-1  sm:zep-pt-2 sm:zep-pr-2",children:e.jsx(I,{locales:m,selectedLocale:t,setLanguageSwitcher:l,setSelectedLocale:x})}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"zep-pl-2 zep-pt-1 zep-pr-1  sm:zep-pt-2 sm:zep-pr-2",children:e.jsx(i,{items:r})}),e.jsx("div",{className:"zep-w-full zep-h-[1px] zep-bg-greyscale-700 zep-mt-3.5"}),e.jsxs("div",{className:"zep-flex zep-gap-0.5 zep-items-center zep-pl-2 zep-pt-1.5 sm:zep-pt-2 zep-pr-1 sm:zep-pr-2 zep-mb-3",onClick:()=>l(!0),children:[e.jsx("img",{alt:"Language switch icon",src:P,className:"zep-w-1"}),e.jsx("p",{className:"zep-text-typography-light-100 zep-font-500",children:t==null?void 0:t.label})]}),e.jsx("div",{className:"zep-pl-2 zep-pr-1",children:z==null?void 0:z.map(a=>e.jsx(g,{label:a.label,href:"",mode:f.Standalone,className:"zep-text-typography-light-100 zep-mb-1.5"},a.label))})]})]})})}),e.jsxs("div",{className:"zep-hidden md:zep-block",children:[e.jsx("div",{className:`zep-fixed zep-top-[0px] zep-left-[0px] md:zep-w-[440px] lg:zep-w-[578px] zep-pl-3 zep-pt-2 zep-pr-2 zep-bg-background-dark zep-ease-in-out zep-w-[0px] zep-duration-500 zep-h-screen zep-z-[1000] ${d?"md:zep-transform zep-translate-x-0 lg:zep-transform zep-translate-x-0":"-zep-translate-x-full"}`,children:e.jsxs("div",{className:`${d?"zep-block zep-overflow-hidden":""}`,children:[e.jsx("div",{className:"zep-flex zep-justify-end zep-mb-6",children:e.jsx(b,{name:"close",color:"#fff",size:24,onClick:n,className:"zep-cursor-pointer"})}),e.jsx(i,{items:r})]})}),e.jsx("div",{onClick:n,className:`zep-fixed zep-top-[0px] zep-left-[0px] zep-bg-[#000] transition-all zep-duration-500  zep-w-screen zep-h-screen zep-z-[500] ${d?"zep-opacity-70":"zep-opacity-[0]"}`})]})]})};try{_.displayName="Sidebar",_.__docgenInfo={description:"",displayName:"Sidebar",props:{navItems:{defaultValue:null,description:"",name:"navItems",required:!0,type:{name:"NavigationItem[]"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},setOpen:{defaultValue:null,description:"",name:"setOpen",required:!0,type:{name:"(x: boolean) => void"}},initialPath:{defaultValue:null,description:"",name:"initialPath",required:!1,type:{name:"string[]"}},setInitialPath:{defaultValue:null,description:"",name:"setInitialPath",required:!0,type:{name:"(x: string[]) => void"}},selectedLocale:{defaultValue:null,description:"",name:"selectedLocale",required:!1,type:{name:"Locale"}},locales:{defaultValue:null,description:"",name:"locales",required:!1,type:{name:"Locale[]"}},setSelectedLocale:{defaultValue:null,description:"",name:"setSelectedLocale",required:!1,type:{name:"((x: Locale) => void)"}},navigationUtilityItems:{defaultValue:null,description:"",name:"navigationUtilityItems",required:!1,type:{name:"NavUtilityItem[]"}}}}}catch{}const q=({navigationUtilityItems:r,selectedLocale:c,setSelectedLocale:s,logo:v,navigationItems:t,locales:m})=>{const[x,z]=o.useState(!1),[d,h]=o.useState([]),[y,l]=o.useState(!1);return e.jsxs("div",{className:"zep-bg-background-dark",children:[e.jsxs("div",{className:"zep-hidden md:zep-flex zep-justify-end zep-px-1 sm:zep-px-1.5 md:zep-px-[66px] xl:zep-px-[122px] md:zep-py-0.75 zep-border-b-1 zep-border-greyscale-700",children:[e.jsx("div",{className:"zep-flex zep-gap-2 zep-mr-3",children:r==null?void 0:r.map((n,i)=>e.jsx(g,{label:n.label,href:n.link||"",mode:f.Standalone,className:"zep-text-typography-light-100"},`${n.label}${i}`))}),e.jsxs("div",{className:"zep-flex zep-gap-0.5 zep-items-center zep-cursor-pointer zep-group",onClick:()=>l(!0),children:[e.jsx("img",{alt:"Language switch icon",src:P}),e.jsx("p",{className:"zep-text-typography-light-100 zep-font-500 group-hover:zep-underline",children:c==null?void 0:c.label})]})]}),e.jsxs("div",{className:"zep-p-1 sm:zep-px-1.5 md:zep-px-[66px] xl:zep-px-[122px] md:zep-py-1.5 zep-flex zep-justify-between md:zep-justify-start zep-items-center zep-border-b-1 zep-border-greyscale-700",children:[e.jsx("img",{alt:"logo",src:v,className:"md:zep-mr-3 xl:zep-mr-4"}),e.jsx("img",{alt:"hamburger_menu",src:Z,className:"md:zep-hidden",onClick:()=>z(!0)}),e.jsx("div",{className:"zep-hidden md:zep-flex md:zep-gap-2.5 xl:zep-gap-3.5",children:t==null?void 0:t.map((n,i)=>e.jsxs("div",{onClick:()=>{z(!0),n.children&&h([n.navId])},className:"zep-group zep-relative zep-cursor-pointer",children:[e.jsx("p",{className:"zep-typography-navigation zep-text-typography-light-100 zep-uppercase zep-py-0.25",children:n.label}),e.jsx("div",{className:"zep-hidden group-hover:zep-block group-hover:zep-absolute zep-w-full",children:e.jsx("div",{className:"zep-w-[24px] zep-h-[2px] zep-bg-yellow-500 zep-mx-auto"})})]},`${n.label}${i}`))})]}),x&&e.jsx(_,{initialPath:d,setInitialPath:h,navItems:t,open:x,setOpen:z,selectedLocale:c,locales:m,setSelectedLocale:s,navigationUtilityItems:r}),y&&e.jsx(I,{setLocaleSwitcherMenu:l,locales:m,selectedLocale:c,setSelectedLocale:s})]})};try{q.displayName="Navigation",q.__docgenInfo={description:"",displayName:"Navigation",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},navigationUtilityItems:{defaultValue:null,description:"",name:"navigationUtilityItems",required:!1,type:{name:"NavUtilityItem[]"}},navigationItems:{defaultValue:null,description:"",name:"navigationItems",required:!0,type:{name:"NavigationItem[]"}},selectedLocale:{defaultValue:null,description:"",name:"selectedLocale",required:!1,type:{name:"Locale"}},setSelectedLocale:{defaultValue:null,description:"",name:"setSelectedLocale",required:!1,type:{name:"((locale: Locale) => void)"}},locales:{defaultValue:null,description:"",name:"locales",required:!1,type:{name:"Locale[]"}},logo:{defaultValue:null,description:"",name:"logo",required:!0,type:{name:"string"}}}}}catch{}const Y={title:"Components/Navigation",component:q,tags:["autodocs"],argTypes:{}},E=[{label:"Deutsch (DE)",value:"de",country:"Germany (Deutschland)"},{label:"English (EN)",value:"en",country:"Germany (Deutschland)"},{label:"Deutsch (AT)",value:"de-AT",country:"Austria (Österreich)"}],w={args:{logo:F,navigationItems:[{navId:"1",label:"Marine",link:"/home",children:[{navId:"1",label:"Loesungen",link:"",children:[{navId:"1",label:"Bratwurst",children:[{navId:"1",label:"Bratwurst 1",link:"https://www.google.co.uk/"}]},{navId:"2",label:"Marine 1-2"}]},{navId:"2",label:"Ppower and heat",link:"",children:[{navId:"1",label:"Bratwurst",children:[{navId:"1",label:"Bratwurst 1",link:"https://www.google.co.uk/"}]},{navId:"2",label:"Marine 1-2"}]},{navId:"3",label:"LILA",link:"",children:[{navId:"1",label:"Bratwurst",children:[{navId:"1",label:"Bratwurst 1",link:"https://www.google.co.uk/"}]},{navId:"2",label:"Marine 1-2"}]}]},{navId:"2",label:"Strom & Wärme",children:[{navId:"1",label:"Strom 1"}]},{navId:"3",label:"Industrie",children:[{label:"Industrie 1"}]},{navId:"4",label:"Öl & Gas"},{navId:"5",label:"Schiene"},{navId:"6",label:"Gebrauchtmaschinen"}],locales:E,selectedLocale:E[0],navigationUtilityItems:[{label:"Services"},{label:"Unternehmen"},{label:"Kontakt & Standorte"}]}};var M,D,T;w.parameters={...w.parameters,docs:{...(M=w.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(T=(D=w.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};const ee=["Default"];export{w as Default,ee as __namedExportsOrder,Y as default};
