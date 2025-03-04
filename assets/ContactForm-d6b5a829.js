import{j as e}from"./jsx-runtime-1a9d9a93.js";import{z as o,c as r,u as V,R as q,P as S,I as k,C as w,t as F}from"./Radio-01bbdc68.js";import{M as L}from"./MultiLinkList-b9f06e83.js";import{H as I}from"./HeaderLongComponent-7a9f5b23.js";import{h as A}from"./index.es13-3580608c.js";import{c as h}from"./clsx-0839fdbe.js";import{r as C}from"./index-8b3efc3f.js";import{B as P,Z as D}from"./ZpsButton-47c891da.js";const j=C.forwardRef(({disabled:i=!1,label:p,message:d,placeholder:g,readOnly:a=!1,state:m="default",totalCharacters:b=500,...s},n)=>{const t=m==="error",[y,u]=C.useState(""),c=x=>{var N;(N=s.onChange)==null||N.call(s,x),u(x.target.value)},l=i||a,f=t?"zep-text-error":m==="info"?"zep-text-info":"",z=h("zep-block","zep-justify-between","zep-border-solid","zep-pl-1","zep-py-0.75","zep-font-roboto","zep-w-full","zep-outline-none","placeholder:zep-text-typography-dark-100/70","zep-text-primary-default",t?"zep-border-2":"zep-border-1","zep-pr-0.75",i?"zep-text-opacity-disabled":"zep-text-primary-default",{"zep-bg-background-medium":a},{"zep-border-primary-default":!i&&!t},{"zep-border-opacity-disabled":i},{"zep-border-error":t},{"zep-active:ring":!l},{"zep-ring-offset-1":!l},{"focus-visible:zep-ring":!l},{"zep-ring-focus":!l},{"zep-cursor-not-allowed":l},s==null?void 0:s.className);return e.jsxs("div",{className:h("zep-relative zep-inline-block zep-text-left zep-w-full",{"zep-cursor-not-allowed zep-opacity-disabled":i}),"data-testid":"zep-text-area",children:[p&&e.jsxs("div",{className:"zep-block zep-mb-0.5 zep-text-primary-default",children:[p,!s.required&&e.jsx("span",{className:"zep-ml-0.25",children:"(optional)"})]}),e.jsx("textarea",{id:s.id,ref:n,maxLength:500,autoComplete:"off",placeholder:a?void 0:g,readOnly:a,disabled:i||a,"data-testid":"zep-text-area-input",...s,onChange:c,className:z}),e.jsxs("div",{className:h("zep-mt-0.25","zep-text-primary-default","zep-text-0.875","zep-flex zep-h-[40px]",f),children:[d&&e.jsxs("div",{className:h("zep-flex",{"zep-text-error":t}),children:[m!=="default"&&e.jsx(A,{name:t?"warning-triangle-filled":"info-circle-filled",role:"img",size:24,className:"zep-mr-0.5 zep-shrink-0"}),e.jsx("span",{className:"zep-mt-0.125",children:d})]}),e.jsxs("div",{className:"zep-ml-auto zep-mt-0.125 zep-pl-0.5 zep-flex-shrink-0 zep-text-primary-default zep-mb-4","data-testid":"zep-text-area-length-indicator",children:[y.length," / ",b]})]})]})});try{j.displayName="TextArea",j.__docgenInfo={description:"",displayName:"TextArea",props:{disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},state:{defaultValue:{value:"default"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"info"'}]}},totalCharacters:{defaultValue:{value:"500"},description:"",name:"totalCharacters",required:!1,type:{name:"number"}}}}}catch{}const _=({onSubmit:i,headline:p,tagline:d,linkLists:g,locale:a,loading:m})=>{var u,c,l,f,v,z;const b=o.object({sex:o.string().min(1,{message:"Req"}),name:o.string().min(1,{message:r[a]["Dieses Feld ist erforderlich"]}),email:o.string().min(1,{message:r[a]["Dieses Feld ist erforderlich"]}).email({message:"Email is not in valid format"}),phone:o.string().min(5,{message:r[a]["Dieses Feld ist erforderlich"]}),message:o.string().optional(),privacyCheck:o.literal(!0,{errorMap:()=>({message:"You must accept Privacy."})})}),{handleSubmit:s,register:n,formState:{errors:t}}=V({resolver:F(b)}),y=async x=>{i(x)};return e.jsxs("div",{"data-testid":"zep-contact-form-wrapper",children:[e.jsx(I,{headline:p,tagline:d}),e.jsx("p",{className:"zep-typography-headlineSM-fluid-cqi zep-mt-2.5 sm:zep-mt-3 zep-mb-1.5 zep-text-primary-default",children:r[a]["24/7"]}),e.jsx(L,{isPatternPart:!0,className:"zep-mb-2.5 sm:zep-mb-3 md:zep-mb-4",linkLists:g||[]}),e.jsxs("form",{onSubmit:s(y),children:[e.jsx("p",{className:"zep-typography-headlineSM-fluid-cqi zep-mt-1 md:zep-mt-2 zep-mb-2 zep-text-primary-default",children:r[a]["Schreiben Sie uns eine Nachricht"]}),e.jsx(j,{label:r[a]["Ihre Nachricht"],...n("message"),className:"zep-h-[126px]"}),e.jsx("p",{className:"zep-mb-0.5 zep-text-primary-default",children:r[a].Anrede}),e.jsxs("div",{className:"zep-flex zep-gap-2 zep-mb-2",children:[e.jsx(q,{id:"Frau",label:r[a].Frau,...n("sex"),error:!!((u=t.sex)!=null&&u.message)}),e.jsx(q,{id:"Herr",label:r[a].Herr,...n("sex"),error:!!((c=t.sex)!=null&&c.message)})]}),e.jsx(S,{required:!0,...n("phone"),label:r[a].Telefonnummer,error:((l=t.phone)==null?void 0:l.message)&&r[a]["Dieses Feld ist erforderlich"]}),e.jsx(k,{className:"zep-w-full",label:r[a]["Vor und Nachname"],...n("name"),error:(f=t.name)==null?void 0:f.message,required:!0}),e.jsx(k,{error:(v=t.email)==null?void 0:v.message,className:"zep-w-full",label:r[a]["E-Mail-Adresse"],...n("email"),required:!0}),e.jsx(w,{...n("privacyCheck"),error:(z=t.privacyCheck)==null?void 0:z.message,labelhtml:'<p>Informationen zum Umgang mit Ihren personenbezogenen Daten finden Sie in unserer <u><a href="datensuc" target="_blank">Datenschutzerklärung</a></u>.</p>'}),e.jsx(P,{disabled:m,variant:D.Primary,className:"!zep-w-full zep-mb-2",type:"submit",children:m?r[a].Einreichung:r[a]["Anfrage Senden"]})]})]})};try{_.displayName="ContactForm",_.__docgenInfo={description:"",displayName:"ContactForm",props:{onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(data: unknown) => void"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},linkLists:{defaultValue:null,description:"",name:"linkLists",required:!1,type:{name:"LinkListItemProps[]"}},locale:{defaultValue:null,description:"",name:"locale",required:!0,type:{name:"enum",value:[{value:'"en"'},{value:'"de"'},{value:'"de-AT"'}]}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}}}}}catch{}export{_ as C};
