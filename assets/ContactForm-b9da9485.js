import{c as g,j as e}from"./clsx-36b9529f.js";import{z as l,c as r,u as w,R as q,P as F,I as C,C as S,t as L}from"./Radio-0f9ba852.js";import{g as P}from"./getDataLayer-d9c3f0eb.js";import{H as A}from"./HeaderLongComponent-88c52744.js";import{M as E}from"./MultiLinkList-8e445900.js";import{h as I}from"./index.es13-b5ad88d4.js";import{r as _}from"./index-8b3efc3f.js";import{B as T,Z as D}from"./ZpsButton-f3be46e6.js";const N=_.forwardRef(({disabled:i=!1,label:c,message:d,placeholder:h,readOnly:o=!1,state:a="default",totalCharacters:f=500,...s},y)=>{const t=a==="error",[n,b]=_.useState(""),v=m=>{var u;(u=s.onChange)==null||u.call(s,m),b(m.target.value)},p=i||o,z=t?"zep-text-error":a==="info"?"zep-text-info":"",x=g("zep-block","zep-justify-between","zep-border-solid","zep-pl-1","zep-py-0.75","zep-font-roboto","zep-w-full","zep-outline-none","placeholder:zep-text-typography-dark-100/70","zep-text-primary-default",t?"zep-border-2":"zep-border-1","zep-pr-0.75",i?"zep-text-opacity-disabled":"zep-text-primary-default",{"zep-bg-background-medium":o},{"zep-border-primary-default":!i&&!t},{"zep-border-opacity-disabled":i},{"zep-border-error":t},{"zep-active:ring":!p},{"zep-ring-offset-1":!p},{"focus-visible:zep-ring":!p},{"zep-ring-focus":!p},{"zep-cursor-not-allowed":p},s==null?void 0:s.className);return e.jsxs("div",{className:g("zep-relative zep-inline-block zep-text-left zep-w-full",{"zep-cursor-not-allowed zep-opacity-disabled":i}),"data-testid":"zep-text-area",children:[c&&e.jsxs("div",{className:"zep-block zep-mb-0.5 zep-text-primary-default",children:[c,!s.required&&e.jsx("span",{className:"zep-ml-0.25",children:"(optional)"})]}),e.jsx("textarea",{id:s.id,ref:y,maxLength:500,autoComplete:"off",placeholder:o?void 0:h,readOnly:o,disabled:i||o,"data-testid":"zep-text-area-input",...s,onChange:v,className:x}),e.jsxs("div",{className:g("zep-mt-0.25","zep-text-primary-default","zep-text-0.875","zep-flex zep-h-[26px]",z),children:[d&&e.jsxs("div",{className:g("zep-flex",{"zep-text-error":t}),children:[a!=="default"&&e.jsx(I,{name:t?"warning-triangle-filled":"info-circle-filled",role:"img",size:24,className:"zep-mr-0.5 zep-shrink-0"}),e.jsx("span",{className:"zep-mt-0.125",children:d})]}),e.jsxs("div",{className:"zep-ml-auto zep-mt-0.125 zep-pl-0.5 zep-flex-shrink-0 zep-text-primary-default zep-mb-4","data-testid":"zep-text-area-length-indicator",children:[n.length," / ",f]})]})]})});try{N.displayName="TextArea",N.__docgenInfo={description:"",displayName:"TextArea",props:{disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},state:{defaultValue:{value:"default"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"info"'}]}},totalCharacters:{defaultValue:{value:"500"},description:"",name:"totalCharacters",required:!1,type:{name:"number"}}}}}catch{}const k=({privacyPolicyUrl:i,onSubmit:c,headline:d,tagline:h,linkLists:o,locale:a,loading:f})=>{var p,z,j,x,m,u;const s=l.object({sex:l.string().min(1,{message:"Req"}),name:l.string().min(1,{message:r[a]["Dieses Feld ist erforderlich"]}),email:l.string().min(1,{message:r[a]["Dieses Feld ist erforderlich"]}).email({message:"Email is not in valid format"}),phone:l.string().min(5,{message:r[a]["Dieses Feld ist erforderlich"]}),message:l.string().optional(),privacyCheck:l.literal(!0,{errorMap:()=>({message:"You must accept Privacy."})}),honeypot:l.union([l.string(),l.undefined()])}),{handleSubmit:y,register:t,formState:{errors:n}}=w({resolver:L(s)}),b=P(),v=async V=>{b.push({event:"generate_lead",form_context:d}),c(V)};return e.jsxs("div",{className:"zep-flex zep-flex-col sm:zep-gap-3 zep-gap-2","data-testid":"zep-contact-form-wrapper",children:[e.jsxs("div",{className:"zep-w-full zep-flex zep-flex-col zep-gap-1.5 sm:zep-gap-2 md:zep-gap-3",children:[e.jsx(A,{headline:d,tagline:h}),e.jsx(E,{isPatternPart:!0,linkLists:o||[]})]}),e.jsxs("form",{className:"zep-flex zep-flex-col zep-gap-1.5 sm:zep-gap-2",onSubmit:y(v),children:[e.jsx("input",{type:"text",style:{display:"none"},...t("honeypot")}),e.jsx("p",{className:"zep-typography-headlineSM-fluid-cqi zep-text-primary-default",children:r[a]["Schreiben Sie uns eine Nachricht"]}),e.jsxs("div",{className:"zep-flex zep-flex-col zep-gap-0.5 sm:zep-gap-1",children:[e.jsx(N,{label:r[a]["Ihre Nachricht"],...t("message"),className:"zep-h-[126px]"}),e.jsx("p",{className:"zep-typography-headlineSM-fluid-cqi zep-text-primary-default",children:r[a].Anrede})]}),e.jsxs("div",{className:"zep-flex zep-flex-col zep-gap-1.5",children:[e.jsxs("div",{className:"zep-flex zep-gap-2",children:[e.jsx(q,{id:"Frau",label:r[a].Frau,...t("sex"),error:!!((p=n.sex)!=null&&p.message)}),e.jsx(q,{id:"Herr",label:r[a].Herr,...t("sex"),error:!!((z=n.sex)!=null&&z.message)})]}),e.jsx(F,{className:"zep-mb-[0]",required:!0,...t("phone"),label:r[a].Telefonnummer,error:((j=n.phone)==null?void 0:j.message)&&r[a]["Dieses Feld ist erforderlich"],defaultCountry:a==="de-AT"?"AT":"DE"}),e.jsx(C,{className:"zep-w-full zep-mb-[0]",label:r[a]["Vor und Nachname"],...t("name"),error:(x=n.name)==null?void 0:x.message,required:!0}),e.jsx(C,{error:(m=n.email)==null?void 0:m.message,className:"zep-w-full zep-mb-[0]",label:r[a]["E-Mail-Adresse"],...t("email"),required:!0})]}),e.jsxs("div",{className:"zep-flex zep-items-center zep-text-primary-default",children:[e.jsx(S,{...t("privacyCheck"),error:(u=n.privacyCheck)==null?void 0:u.message}),e.jsxs("p",{children:[`${r[a].privacy} `,e.jsx("u",{children:e.jsx("a",{href:i,children:r[a].privacyPolicy})}),"."]})]}),e.jsx(T,{disabled:f,variant:D.Primary,className:"!zep-w-full",type:"submit",children:f?r[a].Einreichung:r[a]["Anfrage Senden"]})]})]})};try{k.displayName="ContactForm",k.__docgenInfo={description:"",displayName:"ContactForm",props:{onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(data: unknown) => void"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},linkLists:{defaultValue:null,description:"",name:"linkLists",required:!1,type:{name:"LinkListItemProps[]"}},locale:{defaultValue:null,description:"",name:"locale",required:!0,type:{name:"enum",value:[{value:'"en"'},{value:'"de"'},{value:'"de-AT"'}]}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},privacyPolicyUrl:{defaultValue:null,description:"",name:"privacyPolicyUrl",required:!0,type:{name:"string"}}}}}catch{}export{k as C};
