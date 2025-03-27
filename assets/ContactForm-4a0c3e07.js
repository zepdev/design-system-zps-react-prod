import{j as e}from"./jsx-runtime-1a9d9a93.js";import{z as n,c as r,u as w,R as q,P as F,I as C,C as L,t as S}from"./Radio-553806af.js";import{g as P}from"./getDataLayer-1420585a.js";import{H as A}from"./HeaderLongComponent-70ced68d.js";import{M as E}from"./MultiLinkList-47dd6db9.js";import{h as I}from"./index.es13-751bc762.js";import{c as h}from"./clsx-0839fdbe.js";import{r as _}from"./index-8b3efc3f.js";import{B as T,Z as D}from"./ZpsButton-c6bdd8bf.js";const N=_.forwardRef(({disabled:i=!1,label:c,message:d,placeholder:y,readOnly:p=!1,state:a="default",totalCharacters:f=500,...s},g)=>{const t=a==="error",[l,b]=_.useState(""),v=m=>{var u;(u=s.onChange)==null||u.call(s,m),b(m.target.value)},o=i||p,z=t?"zep-text-error":a==="info"?"zep-text-info":"",x=h("zep-block","zep-justify-between","zep-border-solid","zep-pl-1","zep-py-0.75","zep-font-roboto","zep-w-full","zep-outline-none","placeholder:zep-text-typography-dark-100/70","zep-text-primary-default",t?"zep-border-2":"zep-border-1","zep-pr-0.75",i?"zep-text-opacity-disabled":"zep-text-primary-default",{"zep-bg-background-medium":p},{"zep-border-primary-default":!i&&!t},{"zep-border-opacity-disabled":i},{"zep-border-error":t},{"zep-active:ring":!o},{"zep-ring-offset-1":!o},{"focus-visible:zep-ring":!o},{"zep-ring-focus":!o},{"zep-cursor-not-allowed":o},s==null?void 0:s.className);return e.jsxs("div",{className:h("zep-relative zep-inline-block zep-text-left zep-w-full",{"zep-cursor-not-allowed zep-opacity-disabled":i}),"data-testid":"zep-text-area",children:[c&&e.jsxs("div",{className:"zep-block zep-mb-0.5 zep-text-primary-default",children:[c,!s.required&&e.jsx("span",{className:"zep-ml-0.25",children:"(optional)"})]}),e.jsx("textarea",{id:s.id,ref:g,maxLength:500,autoComplete:"off",placeholder:p?void 0:y,readOnly:p,disabled:i||p,"data-testid":"zep-text-area-input",...s,onChange:v,className:x}),e.jsxs("div",{className:h("zep-mt-0.25","zep-text-primary-default","zep-text-0.875","zep-flex zep-h-[40px]",z),children:[d&&e.jsxs("div",{className:h("zep-flex",{"zep-text-error":t}),children:[a!=="default"&&e.jsx(I,{name:t?"warning-triangle-filled":"info-circle-filled",role:"img",size:24,className:"zep-mr-0.5 zep-shrink-0"}),e.jsx("span",{className:"zep-mt-0.125",children:d})]}),e.jsxs("div",{className:"zep-ml-auto zep-mt-0.125 zep-pl-0.5 zep-flex-shrink-0 zep-text-primary-default zep-mb-4","data-testid":"zep-text-area-length-indicator",children:[l.length," / ",f]})]})]})});try{N.displayName="TextArea",N.__docgenInfo={description:"",displayName:"TextArea",props:{disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},state:{defaultValue:{value:"default"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"info"'}]}},totalCharacters:{defaultValue:{value:"500"},description:"",name:"totalCharacters",required:!1,type:{name:"number"}}}}}catch{}const k=({privacyPolicyUrl:i,onSubmit:c,headline:d,tagline:y,linkLists:p,locale:a,loading:f})=>{var o,z,j,x,m,u;const s=n.object({sex:n.string().min(1,{message:"Req"}),name:n.string().min(1,{message:r[a]["Dieses Feld ist erforderlich"]}),email:n.string().min(1,{message:r[a]["Dieses Feld ist erforderlich"]}).email({message:"Email is not in valid format"}),phone:n.string().min(5,{message:r[a]["Dieses Feld ist erforderlich"]}),message:n.string().optional(),privacyCheck:n.literal(!0,{errorMap:()=>({message:"You must accept Privacy."})}),honeypot:n.union([n.string(),n.undefined()])}),{handleSubmit:g,register:t,formState:{errors:l}}=w({resolver:S(s)}),b=P(),v=async V=>{b.push({event:"generate_lead",form_context:d}),c(V)};return e.jsxs("div",{"data-testid":"zep-contact-form-wrapper",children:[e.jsx(A,{headline:d,tagline:y}),e.jsx(E,{isPatternPart:!0,className:"zep-mt-2 md:zep-mt-3 zep-mb-2.5 sm:zep-mb-3 md:zep-mb-4",linkLists:p||[]}),e.jsxs("form",{onSubmit:g(v),children:[e.jsx("input",{type:"text",style:{display:"none"},...t("honeypot")}),e.jsx("p",{className:"zep-typography-headlineSM-fluid-cqi zep-mb-2 zep-text-primary-default",children:r[a]["Schreiben Sie uns eine Nachricht"]}),e.jsx(N,{label:r[a]["Ihre Nachricht"],...t("message"),className:"zep-h-[126px]"}),e.jsx("p",{className:"zep-mb-0.5 zep-text-primary-default",children:r[a].Anrede}),e.jsxs("div",{className:"zep-flex zep-gap-2 zep-mb-2",children:[e.jsx(q,{id:"Frau",label:r[a].Frau,...t("sex"),error:!!((o=l.sex)!=null&&o.message)}),e.jsx(q,{id:"Herr",label:r[a].Herr,...t("sex"),error:!!((z=l.sex)!=null&&z.message)})]}),e.jsx(F,{required:!0,...t("phone"),label:r[a].Telefonnummer,error:((j=l.phone)==null?void 0:j.message)&&r[a]["Dieses Feld ist erforderlich"],defaultCountry:a==="de-AT"?"AT":"DE"}),e.jsx(C,{className:"zep-w-full",label:r[a]["Vor und Nachname"],...t("name"),error:(x=l.name)==null?void 0:x.message,required:!0}),e.jsx(C,{error:(m=l.email)==null?void 0:m.message,className:"zep-w-full",label:r[a]["E-Mail-Adresse"],...t("email"),required:!0}),e.jsxs("div",{className:"zep-flex zep-items-center zep-text-primary-default",children:[e.jsx(L,{...t("privacyCheck"),error:(u=l.privacyCheck)==null?void 0:u.message}),e.jsxs("p",{children:[`${r[a].privacy} `,e.jsx("u",{children:e.jsx("a",{href:i,children:r[a].privacyPolicy})}),"."]})]}),e.jsx(T,{disabled:f,variant:D.Primary,className:"!zep-w-full zep-mt-1.5 md:zep-mt-2",type:"submit",children:f?r[a].Einreichung:r[a]["Anfrage Senden"]})]})]})};try{k.displayName="ContactForm",k.__docgenInfo={description:"",displayName:"ContactForm",props:{onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(data: unknown) => void"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},linkLists:{defaultValue:null,description:"",name:"linkLists",required:!1,type:{name:"LinkListItemProps[]"}},locale:{defaultValue:null,description:"",name:"locale",required:!0,type:{name:"enum",value:[{value:'"en"'},{value:'"de"'},{value:'"de-AT"'}]}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},privacyPolicyUrl:{defaultValue:null,description:"",name:"privacyPolicyUrl",required:!0,type:{name:"string"}}}}}catch{}export{k as C};
