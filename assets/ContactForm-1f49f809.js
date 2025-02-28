import{j as e}from"./jsx-runtime-1a9d9a93.js";import{z as o,c as t,u as S,R as k,P as V,I as q,C as w,t as F}from"./Radio-5a1c20cb.js";import{H as L}from"./HeaderLongComponent-1514266d.js";import{M as I}from"./MultiLinkList-200f472b.js";import{h as P}from"./index.es13-3580608c.js";import{c as x}from"./clsx-0839fdbe.js";import{r as _}from"./index-8b3efc3f.js";import{B as A,Z as D}from"./ZpsButton-3ea5f882.js";const v=_.forwardRef(({disabled:s=!1,label:p,message:d,placeholder:h,readOnly:a=!1,state:m="default",totalCharacters:g=500,...r},i)=>{const n=m==="error",[u,c]=_.useState(""),f=j=>{var N;(N=r.onChange)==null||N.call(r,j),c(j.target.value)},l=s||a,z=n?"zep-text-error":m==="info"?"zep-text-info":"",y=x("zep-block","zep-justify-between","zep-border-solid","zep-pl-1","zep-py-0.75","zep-font-roboto","zep-w-full","zep-outline-none","placeholder:zep-text-typography-dark-100/70","zep-text-primary-default",n?"zep-border-2":"zep-border-1","zep-pr-0.75",s?"zep-text-opacity-disabled":"zep-text-primary-default",{"zep-bg-background-medium":a},{"zep-border-primary-default":!s&&!n},{"zep-border-opacity-disabled":s},{"zep-border-error":n},{"zep-active:ring":!l},{"zep-ring-offset-1":!l},{"focus-visible:zep-ring":!l},{"zep-ring-focus":!l},{"zep-cursor-not-allowed":l},r==null?void 0:r.className);return e.jsxs("div",{className:x("zep-relative zep-inline-block zep-text-left zep-w-full",{"zep-cursor-not-allowed zep-opacity-disabled":s}),"data-testid":"zep-text-area",children:[p&&e.jsxs("div",{className:"zep-block zep-mb-0.5 zep-text-primary-default",children:[p,!r.required&&e.jsx("span",{className:"zep-ml-0.25",children:"(optional)"})]}),e.jsx("textarea",{id:r.id,ref:i,maxLength:500,autoComplete:"off",placeholder:a?void 0:h,readOnly:a,disabled:s||a,"data-testid":"zep-text-area-input",...r,onChange:f,className:y}),e.jsxs("div",{className:x("zep-mt-0.25","zep-text-primary-default","zep-text-0.875","zep-flex zep-h-[40px]",z),children:[d&&e.jsxs("div",{className:x("zep-flex",{"zep-text-error":n}),children:[m!=="default"&&e.jsx(P,{name:n?"warning-triangle-filled":"info-circle-filled",role:"img",size:24,className:"zep-mr-0.5 zep-shrink-0"}),e.jsx("span",{className:"zep-mt-0.125",children:d})]}),e.jsxs("div",{className:"zep-ml-auto zep-mt-0.125 zep-pl-0.5 zep-flex-shrink-0 zep-text-primary-default zep-mb-4","data-testid":"zep-text-area-length-indicator",children:[u.length," / ",g]})]})]})});try{v.displayName="TextArea",v.__docgenInfo={description:"",displayName:"TextArea",props:{disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},state:{defaultValue:{value:"default"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"info"'}]}},totalCharacters:{defaultValue:{value:"500"},description:"",name:"totalCharacters",required:!1,type:{name:"number"}}}}}catch{}const C=({onSubmit:s,headline:p,tagline:d,linkLists:h,locale:a})=>{var u,c,f,l,z,b;const m=o.object({sex:o.string().min(1,{message:"Req"}),name:o.string().min(1,{message:t[a]["Dieses Feld ist erforderlich"]}),email:o.string().min(1,{message:t[a]["Dieses Feld ist erforderlich"]}).email({message:"Email is not in valid format"}),phone:o.string().min(5,{message:t[a]["Dieses Feld ist erforderlich"]}),message:o.string().optional(),privacyCheck:o.literal(!0,{errorMap:()=>({message:"You must accept Privacy."})})}),{handleSubmit:g,register:r,formState:{errors:i}}=S({resolver:F(m)}),n=async y=>{s(y)};return e.jsxs("div",{"data-testid":"zep-contact-form-wrapper",children:[e.jsx(L,{headline:p,tagline:d}),e.jsx("p",{className:"zep-typography-headlineSM-fluid-cqi zep-mt-2.5 sm:zep-mt-3 zep-mb-1.5 zep-text-primary-default",children:t[a]["24/7"]}),e.jsx(I,{isPatternPart:!0,className:"zep-mb-2.5 sm:zep-mb-3 md:zep-mb-4",linkLists:h||[]}),e.jsxs("form",{onSubmit:g(n),children:[e.jsx("p",{className:"zep-typography-headlineSM-fluid-cqi zep-mt-1 md:zep-mt-2 zep-mb-2 zep-text-primary-default",children:t[a]["Schreiben Sie uns eine Nachricht"]}),e.jsx(v,{label:t[a]["Ihre Nachricht"],...r("message"),className:"zep-h-[126px]"}),e.jsx("p",{className:"zep-mb-0.5 zep-text-primary-default",children:t[a].Anrede}),e.jsxs("div",{className:"zep-flex zep-gap-2 zep-mb-2",children:[e.jsx(k,{id:"Frau",label:t[a].Frau,...r("sex"),error:!!((u=i.sex)!=null&&u.message)}),e.jsx(k,{id:"Herr",label:t[a].Herr,...r("sex"),error:!!((c=i.sex)!=null&&c.message)})]}),e.jsx(V,{required:!0,...r("phone"),label:t[a].Telefonnummer,error:((f=i.phone)==null?void 0:f.message)&&t[a]["Dieses Feld ist erforderlich"]}),e.jsx(q,{className:"zep-w-full",label:t[a]["Vor und Nachname"],...r("name"),error:(l=i.name)==null?void 0:l.message,required:!0}),e.jsx(q,{error:(z=i.email)==null?void 0:z.message,className:"zep-w-full",label:t[a]["E-Mail-Adresse"],...r("email"),required:!0}),e.jsx(w,{...r("privacyCheck"),error:(b=i.privacyCheck)==null?void 0:b.message,labelhtml:'<p>Informationen zum Umgang mit Ihren personenbezogenen Daten finden Sie in unserer <u><a href="datensuc" target="_blank">Datenschutzerklärung</a></u>.</p>'}),e.jsx(A,{variant:D.Primary,className:"!zep-w-full zep-mb-2",type:"submit",children:t[a]["Anfrage Senden"]})]})]})};try{C.displayName="ContactForm",C.__docgenInfo={description:"",displayName:"ContactForm",props:{onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(data: unknown) => void"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},linkLists:{defaultValue:null,description:"",name:"linkLists",required:!1,type:{name:"LinkListItemProps[]"}},locale:{defaultValue:null,description:"",name:"locale",required:!0,type:{name:"enum",value:[{value:'"en"'},{value:'"de"'},{value:'"de_au"'}]}}}}}catch{}export{C};
