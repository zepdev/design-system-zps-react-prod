import{j as e}from"./jsx-runtime-1a9d9a93.js";import{z as n,c as r,u as V,R as q,P as w,I as k,C as F,t as S}from"./Radio-dd2f7d1f.js";import{M as L}from"./MultiLinkList-2345eb55.js";import{H as P}from"./HeaderLongComponent-9b44875b.js";import{h as A}from"./index.es13-11b4520a.js";import{c as y}from"./clsx-0839fdbe.js";import{r as C}from"./index-8b3efc3f.js";import{B as I,Z as E}from"./ZpsButton-6d3b5f8d.js";const N=C.forwardRef(({disabled:i=!1,label:m,message:u,placeholder:g,readOnly:o=!1,state:a="default",totalCharacters:c=500,...s},b)=>{const t=a==="error",[l,v]=C.useState(""),f=d=>{var h;(h=s.onChange)==null||h.call(s,d),v(d.target.value)},p=i||o,z=t?"zep-text-error":a==="info"?"zep-text-info":"",x=y("zep-block","zep-justify-between","zep-border-solid","zep-pl-1","zep-py-0.75","zep-font-roboto","zep-w-full","zep-outline-none","placeholder:zep-text-typography-dark-100/70","zep-text-primary-default",t?"zep-border-2":"zep-border-1","zep-pr-0.75",i?"zep-text-opacity-disabled":"zep-text-primary-default",{"zep-bg-background-medium":o},{"zep-border-primary-default":!i&&!t},{"zep-border-opacity-disabled":i},{"zep-border-error":t},{"zep-active:ring":!p},{"zep-ring-offset-1":!p},{"focus-visible:zep-ring":!p},{"zep-ring-focus":!p},{"zep-cursor-not-allowed":p},s==null?void 0:s.className);return e.jsxs("div",{className:y("zep-relative zep-inline-block zep-text-left zep-w-full",{"zep-cursor-not-allowed zep-opacity-disabled":i}),"data-testid":"zep-text-area",children:[m&&e.jsxs("div",{className:"zep-block zep-mb-0.5 zep-text-primary-default",children:[m,!s.required&&e.jsx("span",{className:"zep-ml-0.25",children:"(optional)"})]}),e.jsx("textarea",{id:s.id,ref:b,maxLength:500,autoComplete:"off",placeholder:o?void 0:g,readOnly:o,disabled:i||o,"data-testid":"zep-text-area-input",...s,onChange:f,className:x}),e.jsxs("div",{className:y("zep-mt-0.25","zep-text-primary-default","zep-text-0.875","zep-flex zep-h-[40px]",z),children:[u&&e.jsxs("div",{className:y("zep-flex",{"zep-text-error":t}),children:[a!=="default"&&e.jsx(A,{name:t?"warning-triangle-filled":"info-circle-filled",role:"img",size:24,className:"zep-mr-0.5 zep-shrink-0"}),e.jsx("span",{className:"zep-mt-0.125",children:u})]}),e.jsxs("div",{className:"zep-ml-auto zep-mt-0.125 zep-pl-0.5 zep-flex-shrink-0 zep-text-primary-default zep-mb-4","data-testid":"zep-text-area-length-indicator",children:[l.length," / ",c]})]})]})});try{N.displayName="TextArea",N.__docgenInfo={description:"",displayName:"TextArea",props:{disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},state:{defaultValue:{value:"default"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"info"'}]}},totalCharacters:{defaultValue:{value:"500"},description:"",name:"totalCharacters",required:!1,type:{name:"number"}}}}}catch{}const _=({privacyPolicyUrl:i,onSubmit:m,headline:u,tagline:g,linkLists:o,locale:a,loading:c})=>{var f,p,z,j,x,d;const s=n.object({sex:n.string().min(1,{message:"Req"}),name:n.string().min(1,{message:r[a]["Dieses Feld ist erforderlich"]}),email:n.string().min(1,{message:r[a]["Dieses Feld ist erforderlich"]}).email({message:"Email is not in valid format"}),phone:n.string().min(5,{message:r[a]["Dieses Feld ist erforderlich"]}),message:n.string().optional(),privacyCheck:n.literal(!0,{errorMap:()=>({message:"You must accept Privacy."})}),honeypot:n.union([n.string(),n.undefined()])}),{handleSubmit:b,register:t,formState:{errors:l}}=V({resolver:S(s)}),v=async h=>{m(h)};return e.jsxs("div",{"data-testid":"zep-contact-form-wrapper",children:[e.jsx(P,{headline:u,tagline:g}),e.jsx("p",{className:"zep-typography-headlineSM-fluid-cqi zep-mt-2.5 sm:zep-mt-3 zep-mb-1.5 zep-text-primary-default",children:r[a]["24/7"]}),e.jsx(L,{isPatternPart:!0,className:"zep-mb-2.5 sm:zep-mb-3 md:zep-mb-4",linkLists:o||[]}),e.jsxs("form",{onSubmit:b(v),children:[e.jsx("input",{type:"text",style:{display:"none"},...t("honeypot")}),e.jsx("p",{className:"zep-typography-headlineSM-fluid-cqi zep-mt-1 md:zep-mt-2 zep-mb-2 zep-text-primary-default",children:r[a]["Schreiben Sie uns eine Nachricht"]}),e.jsx(N,{label:r[a]["Ihre Nachricht"],...t("message"),className:"zep-h-[126px]"}),e.jsx("p",{className:"zep-mb-0.5 zep-text-primary-default",children:r[a].Anrede}),e.jsxs("div",{className:"zep-flex zep-gap-2 zep-mb-2",children:[e.jsx(q,{id:"Frau",label:r[a].Frau,...t("sex"),error:!!((f=l.sex)!=null&&f.message)}),e.jsx(q,{id:"Herr",label:r[a].Herr,...t("sex"),error:!!((p=l.sex)!=null&&p.message)})]}),e.jsx(w,{required:!0,...t("phone"),label:r[a].Telefonnummer,error:((z=l.phone)==null?void 0:z.message)&&r[a]["Dieses Feld ist erforderlich"]}),e.jsx(k,{className:"zep-w-full",label:r[a]["Vor und Nachname"],...t("name"),error:(j=l.name)==null?void 0:j.message,required:!0}),e.jsx(k,{error:(x=l.email)==null?void 0:x.message,className:"zep-w-full",label:r[a]["E-Mail-Adresse"],...t("email"),required:!0}),e.jsxs("div",{className:"zep-flex zep-items-center zep-text-primary-default",children:[e.jsx(F,{...t("privacyCheck"),error:(d=l.privacyCheck)==null?void 0:d.message}),e.jsxs("p",{children:[`${r[a].privacy} `,e.jsx("u",{children:e.jsx("a",{href:i,children:r[a].privacyPolicy})}),"."]})]}),e.jsx(I,{disabled:c,variant:E.Primary,className:"!zep-w-full zep-mb-2",type:"submit",children:c?r[a].Einreichung:r[a]["Anfrage Senden"]})]})]})};try{_.displayName="ContactForm",_.__docgenInfo={description:"",displayName:"ContactForm",props:{onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(data: unknown) => void"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},linkLists:{defaultValue:null,description:"",name:"linkLists",required:!1,type:{name:"LinkListItemProps[]"}},locale:{defaultValue:null,description:"",name:"locale",required:!0,type:{name:"enum",value:[{value:'"en"'},{value:'"de"'},{value:'"de-AT"'}]}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},privacyPolicyUrl:{defaultValue:null,description:"",name:"privacyPolicyUrl",required:!0,type:{name:"string"}}}}}catch{}export{_ as C};
