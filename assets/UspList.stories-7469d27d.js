import{G as e,a as t}from"./global-variants-71b69725.js";import{j as a}from"./jsx-runtime-1a9d9a93.js";import{c as g}from"./index-ff2c9236.js";import{b as c}from"./commonCSS-0b9dd3ad.js";import{U}from"./Usp-503f853f.js";import{S as y}from"./Scrollbar-9e18271f.js";import{H as W}from"./HeaderShortComponent-d4930c6a.js";import{L as K}from"./Layout-8fb0eebb.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-0839fdbe.js";import"./index.es13-3580608c.js";import"./tw-merge-1166cefb.js";import"./moving-forward-arrow-a1f6b1da.js";const h=({uspCards:i,variant:r=e.Cat,headerTitle:C,tagline:M})=>{const P={[e.Zps]:"",[e.Cat]:""},B=g(["zep-flex zep-flex-col zep-gap-2.5 sm:zep-gap-3 md:zep-gap-4 zep-py-3 sm:zep-py-4 md:zep-py-5"],{variants:{variant:P},defaultVariants:{variant:e.Zps}}),Z={[e.Zps]:c[t.ZpsBg],[e.Cat]:c[t.CatBg]},V=g([""],{variants:{variant:Z},defaultVariants:{variant:e.Zps}});return a.jsxs(K,{wrapperClassname:V({variant:r}),className:B({variant:r}),children:[a.jsx(W,{className:"zep-p-[0px] zep-w-[40%]",variant:r===e.Zps?t.ZpsBg:t.CatBg,headline:C,showArrow:!0,tagline:M}),a.jsx(y,{scrollOrientation:"horizontal",theme:"light",controlId:"USP-list-scrollbar",dataTestId:"zep-usp-list",className:"zep-flex zep-w-full zep-gap-1 md:zep-gap-1.5 lg:zep-gap-3.5 sm:zep-pr-2.5 md:zep-pr-4 zep-px-1 md:zep-pl-[0px] sm:zep-px-1.5",children:i==null?void 0:i.map((n,L)=>a.jsx(U,{count:(n==null?void 0:n.count)||`${L+1}.`,headline:n.headline,description:n.description,iconName:n.iconName,variant:r},n.headline))})]})};try{h.displayName="USPList",h.__docgenInfo={description:"",displayName:"USPList",props:{headerTitle:{defaultValue:null,description:"",name:"headerTitle",required:!0,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"GlobalVariants.Cat"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},uspCards:{defaultValue:null,description:"",name:"uspCards",required:!1,type:{name:"USPProps[]"}}}}}catch{}const ee={title:"Patterns/USPList",component:h,tags:["autodocs"],argTypes:{}},s={args:{variant:e.Zps,headerTitle:"Vorteile für Ihr Unternehmen",uspCards:[{headline:"Nachhaltig managen",count:"1.",description:"Mit AEC können Sie den Zustand Ihrer Anlagen kontinuierlich analysieren und Optimierungspotenziale identifizieren, um eine ressourcenschonende Betriebsweise zu gewährleisten. Sie können die Lebensdauer Ihrer Motoren und Anlagen verlängern sowie die Emissionen und den Kraftstoffverbrauch senken."},{headline:"Alle Daten auf einen Blick",count:"2.",description:"AEC vernetzt Ihre Motoren nahtlos und bietet einen umfassenden Überblick über alle relevanten Parameter Ihrer Motoren und Anlagen. Von Betriebsdaten bis hin zu Leistungsindikatoren können Sie alle gewünschten Informationen in einem zentralen Portal einsehen. Dies vereinfacht das Management Ihrer Flotte, Sie können  Handlungsempfehlungen aus den Daten ableiten und die Effizienz Ihres Betriebs steigern."}]}},u={args:{variant:e.Zps,headerTitle:"Vorteile für Ihr Unternehmen",uspCards:[{headline:"Nachhaltig managen",count:"1.",description:"Mit AEC können Sie den Zustand Ihrer Anlagen kontinuierlich analysieren und Optimierungspotenziale identifizieren, um eine ressourcenschonende Betriebsweise zu gewährleisten. Sie können die Lebensdauer Ihrer Motoren und Anlagen verlängern sowie die Emissionen und den Kraftstoffverbrauch senken."},{headline:"Alle Daten auf einen Blick",count:"2.",description:"AEC vernetzt Ihre Motoren nahtlos und bietet einen umfassenden Überblick über alle relevanten Parameter Ihrer Motoren und Anlagen. Von Betriebsdaten bis hin zu Leistungsindikatoren können Sie alle gewünschten Informationen in einem zentralen Portal einsehen. Dies vereinfacht das Management Ihrer Flotte, Sie können  Handlungsempfehlungen aus den Daten ableiten und die Effizienz Ihres Betriebs steigern."},{headline:"Ausfälle frühzeitig erkennen",count:"3.",description:"Durch die kontinuierliche Überwachung Ihrer Anlage, erkennen Sie potenzielle Ausfälle frühzeitig und können geeignete Maßnahmen zur Vermeidung von Betriebsunterbrechungen ergreifen. Durch den Zugriff auf Echtzeitdaten und Warnmeldungen können Sie proaktiv auf Probleme reagieren und die Zuverlässigkeit Ihrer Anlagen erhöhen."}]}},l={args:{variant:e.Zps,headerTitle:"Vorteile für Ihr Unternehmen",uspCards:[{headline:"Nachhaltig managen",count:"1.",description:"Mit AEC können Sie den Zustand Ihrer Anlagen kontinuierlich analysieren und Optimierungspotenziale identifizieren, um eine ressourcenschonende Betriebsweise zu gewährleisten. Sie können die Lebensdauer Ihrer Motoren und Anlagen verlängern sowie die Emissionen und den Kraftstoffverbrauch senken."},{headline:"Alle Daten auf einen Blick",count:"2.",description:"AEC vernetzt Ihre Motoren nahtlos und bietet einen umfassenden Überblick über alle relevanten Parameter Ihrer Motoren und Anlagen. Von Betriebsdaten bis hin zu Leistungsindikatoren können Sie alle gewünschten Informationen in einem zentralen Portal einsehen. Dies vereinfacht das Management Ihrer Flotte, Sie können  Handlungsempfehlungen aus den Daten ableiten und die Effizienz Ihres Betriebs steigern."},{headline:"Ausfälle frühzeitig erkennen",count:"3.",description:"Durch die kontinuierliche Überwachung Ihrer Anlage, erkennen Sie potenzielle Ausfälle frühzeitig und können geeignete Maßnahmen zur Vermeidung von Betriebsunterbrechungen ergreifen. Durch den Zugriff auf Echtzeitdaten und Warnmeldungen können Sie proaktiv auf Probleme reagieren und die Zuverlässigkeit Ihrer Anlagen erhöhen."},{headline:"Datenspeicherung in Deutschland",count:"4.",description:"Ihre Daten werden in Deutschland gespeichert und verarbeitet. Dies gewährleistet nicht nur die Einhaltung strenger Datenschutzgesetze, sondern bietet auch Sicherheit für unsere Kunden. Durch die lokale Speicherung können sensible Daten in einer vertrauenswürdigen Umgebung gehalten werden, was die Risiken von Datenverlust und unbefugtem Zugriff minimiert."}]}},d={args:{variant:e.Zps,headerTitle:"Vorteile für Ihr Unternehmen",uspCards:[{headline:"Nachhaltig managen",count:"1.",description:"Mit AEC können Sie den Zustand Ihrer Anlagen kontinuierlich analysieren und Optimierungspotenziale identifizieren, um eine ressourcenschonende Betriebsweise zu gewährleisten. Sie können die Lebensdauer Ihrer Motoren und Anlagen verlängern sowie die Emissionen und den Kraftstoffverbrauch senken."},{headline:"Alle Daten auf einen Blick",count:"2.",description:"AEC vernetzt Ihre Motoren nahtlos und bietet einen umfassenden Überblick über alle relevanten Parameter Ihrer Motoren und Anlagen. Von Betriebsdaten bis hin zu Leistungsindikatoren können Sie alle gewünschten Informationen in einem zentralen Portal einsehen. Dies vereinfacht das Management Ihrer Flotte, Sie können  Handlungsempfehlungen aus den Daten ableiten und die Effizienz Ihres Betriebs steigern."},{headline:"Ausfälle frühzeitig erkennen",count:"3.",description:"Durch die kontinuierliche Überwachung Ihrer Anlage, erkennen Sie potenzielle Ausfälle frühzeitig und können geeignete Maßnahmen zur Vermeidung von Betriebsunterbrechungen ergreifen. Durch den Zugriff auf Echtzeitdaten und Warnmeldungen können Sie proaktiv auf Probleme reagieren und die Zuverlässigkeit Ihrer Anlagen erhöhen."},{headline:"Datenspeicherung in Deutschland",count:"4.",description:"Ihre Daten werden in Deutschland gespeichert und verarbeitet. Dies gewährleistet nicht nur die Einhaltung strenger Datenschutzgesetze, sondern bietet auch Sicherheit für unsere Kunden. Durch die lokale Speicherung können sensible Daten in einer vertrauenswürdigen Umgebung gehalten werden, was die Risiken von Datenverlust und unbefugtem Zugriff minimiert."},{headline:"Einfache Integration",count:"5.",description:"Dank Plug-and-Play-Funktionalität lässt sich AEC unkompliziert in Ihre Flotte integrieren. Die Hardware beansprucht nur wenig Platz und kann extrem leicht montiert und installiert werden."}]}},o={args:{variant:e.Zps,headerTitle:"Vorteile für Ihr Unternehmen",uspCards:[{headline:"Nachhaltig managen",count:"1.",description:"Mit AEC können Sie den Zustand Ihrer Anlagen kontinuierlich analysieren und Optimierungspotenziale identifizieren, um eine ressourcenschonende Betriebsweise zu gewährleisten. Sie können die Lebensdauer Ihrer Motoren und Anlagen verlängern sowie die Emissionen und den Kraftstoffverbrauch senken."},{headline:"Alle Daten auf einen Blick",count:"2.",description:"AEC vernetzt Ihre Motoren nahtlos und bietet einen umfassenden Überblick über alle relevanten Parameter Ihrer Motoren und Anlagen. Von Betriebsdaten bis hin zu Leistungsindikatoren können Sie alle gewünschten Informationen in einem zentralen Portal einsehen. Dies vereinfacht das Management Ihrer Flotte, Sie können  Handlungsempfehlungen aus den Daten ableiten und die Effizienz Ihres Betriebs steigern."},{headline:"Ausfälle frühzeitig erkennen",count:"3.",description:"Durch die kontinuierliche Überwachung Ihrer Anlage, erkennen Sie potenzielle Ausfälle frühzeitig und können geeignete Maßnahmen zur Vermeidung von Betriebsunterbrechungen ergreifen. Durch den Zugriff auf Echtzeitdaten und Warnmeldungen können Sie proaktiv auf Probleme reagieren und die Zuverlässigkeit Ihrer Anlagen erhöhen."},{headline:"Datenspeicherung in Deutschland",count:"4.",description:"Ihre Daten werden in Deutschland gespeichert und verarbeitet. Dies gewährleistet nicht nur die Einhaltung strenger Datenschutzgesetze, sondern bietet auch Sicherheit für unsere Kunden. Durch die lokale Speicherung können sensible Daten in einer vertrauenswürdigen Umgebung gehalten werden, was die Risiken von Datenverlust und unbefugtem Zugriff minimiert."},{headline:"Einfache Integration",count:"5.",description:"Dank Plug-and-Play-Funktionalität lässt sich AEC unkompliziert in Ihre Flotte integrieren. Die Hardware beansprucht nur wenig Platz und kann extrem leicht montiert und installiert werden."},{headline:"Maßsgeschneiderte Lösungen",count:"6.",description:"Zusätzliche Umgebungsparameter, komplexe Messwerte, Erweiterung durch Tracker & Sensorik, eigenes Branding - Wir passen AEC exakt an Ihre Bedürfnisse an und können individuelle Konfigurationen und Weiterentwicklungen vornehmen."}]}};var m,p,f;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariants.Zps,
    headerTitle: 'Vorteile für Ihr Unternehmen',
    uspCards: [{
      headline: 'Nachhaltig managen',
      count: '1.',
      description: 'Mit AEC können Sie den Zustand Ihrer Anlagen kontinuierlich analysieren und Optimierungspotenziale identifizieren, um eine ressourcenschonende Betriebsweise zu gewährleisten. Sie können die Lebensdauer Ihrer Motoren und Anlagen verlängern sowie die Emissionen und den Kraftstoffverbrauch senken.'
    }, {
      headline: 'Alle Daten auf einen Blick',
      count: '2.',
      description: 'AEC vernetzt Ihre Motoren nahtlos und bietet einen umfassenden Überblick über alle relevanten Parameter Ihrer Motoren und Anlagen. Von Betriebsdaten bis hin zu Leistungsindikatoren können Sie alle gewünschten Informationen in einem zentralen Portal einsehen. Dies vereinfacht das Management Ihrer Flotte, Sie können  Handlungsempfehlungen aus den Daten ableiten und die Effizienz Ihres Betriebs steigern.'
    }]
  } as USPListProps
}`,...(f=(p=s.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var k,b,z;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariants.Zps,
    headerTitle: 'Vorteile für Ihr Unternehmen',
    uspCards: [{
      headline: 'Nachhaltig managen',
      count: '1.',
      description: 'Mit AEC können Sie den Zustand Ihrer Anlagen kontinuierlich analysieren und Optimierungspotenziale identifizieren, um eine ressourcenschonende Betriebsweise zu gewährleisten. Sie können die Lebensdauer Ihrer Motoren und Anlagen verlängern sowie die Emissionen und den Kraftstoffverbrauch senken.'
    }, {
      headline: 'Alle Daten auf einen Blick',
      count: '2.',
      description: 'AEC vernetzt Ihre Motoren nahtlos und bietet einen umfassenden Überblick über alle relevanten Parameter Ihrer Motoren und Anlagen. Von Betriebsdaten bis hin zu Leistungsindikatoren können Sie alle gewünschten Informationen in einem zentralen Portal einsehen. Dies vereinfacht das Management Ihrer Flotte, Sie können  Handlungsempfehlungen aus den Daten ableiten und die Effizienz Ihres Betriebs steigern.'
    }, {
      headline: 'Ausfälle frühzeitig erkennen',
      count: '3.',
      description: 'Durch die kontinuierliche Überwachung Ihrer Anlage, erkennen Sie potenzielle Ausfälle frühzeitig und können geeignete Maßnahmen zur Vermeidung von Betriebsunterbrechungen ergreifen. Durch den Zugriff auf Echtzeitdaten und Warnmeldungen können Sie proaktiv auf Probleme reagieren und die Zuverlässigkeit Ihrer Anlagen erhöhen.'
    }]
  } as USPListProps
}`,...(z=(b=u.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var x,v,D;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariants.Zps,
    headerTitle: 'Vorteile für Ihr Unternehmen',
    uspCards: [{
      headline: 'Nachhaltig managen',
      count: '1.',
      description: 'Mit AEC können Sie den Zustand Ihrer Anlagen kontinuierlich analysieren und Optimierungspotenziale identifizieren, um eine ressourcenschonende Betriebsweise zu gewährleisten. Sie können die Lebensdauer Ihrer Motoren und Anlagen verlängern sowie die Emissionen und den Kraftstoffverbrauch senken.'
    }, {
      headline: 'Alle Daten auf einen Blick',
      count: '2.',
      description: 'AEC vernetzt Ihre Motoren nahtlos und bietet einen umfassenden Überblick über alle relevanten Parameter Ihrer Motoren und Anlagen. Von Betriebsdaten bis hin zu Leistungsindikatoren können Sie alle gewünschten Informationen in einem zentralen Portal einsehen. Dies vereinfacht das Management Ihrer Flotte, Sie können  Handlungsempfehlungen aus den Daten ableiten und die Effizienz Ihres Betriebs steigern.'
    }, {
      headline: 'Ausfälle frühzeitig erkennen',
      count: '3.',
      description: 'Durch die kontinuierliche Überwachung Ihrer Anlage, erkennen Sie potenzielle Ausfälle frühzeitig und können geeignete Maßnahmen zur Vermeidung von Betriebsunterbrechungen ergreifen. Durch den Zugriff auf Echtzeitdaten und Warnmeldungen können Sie proaktiv auf Probleme reagieren und die Zuverlässigkeit Ihrer Anlagen erhöhen.'
    }, {
      headline: 'Datenspeicherung in Deutschland',
      count: '4.',
      description: 'Ihre Daten werden in Deutschland gespeichert und verarbeitet. Dies gewährleistet nicht nur die Einhaltung strenger Datenschutzgesetze, sondern bietet auch Sicherheit für unsere Kunden. Durch die lokale Speicherung können sensible Daten in einer vertrauenswürdigen Umgebung gehalten werden, was die Risiken von Datenverlust und unbefugtem Zugriff minimiert.'
    }]
  } as USPListProps
}`,...(D=(v=l.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var I,w,A;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariants.Zps,
    headerTitle: 'Vorteile für Ihr Unternehmen',
    uspCards: [{
      headline: 'Nachhaltig managen',
      count: '1.',
      description: 'Mit AEC können Sie den Zustand Ihrer Anlagen kontinuierlich analysieren und Optimierungspotenziale identifizieren, um eine ressourcenschonende Betriebsweise zu gewährleisten. Sie können die Lebensdauer Ihrer Motoren und Anlagen verlängern sowie die Emissionen und den Kraftstoffverbrauch senken.'
    }, {
      headline: 'Alle Daten auf einen Blick',
      count: '2.',
      description: 'AEC vernetzt Ihre Motoren nahtlos und bietet einen umfassenden Überblick über alle relevanten Parameter Ihrer Motoren und Anlagen. Von Betriebsdaten bis hin zu Leistungsindikatoren können Sie alle gewünschten Informationen in einem zentralen Portal einsehen. Dies vereinfacht das Management Ihrer Flotte, Sie können  Handlungsempfehlungen aus den Daten ableiten und die Effizienz Ihres Betriebs steigern.'
    }, {
      headline: 'Ausfälle frühzeitig erkennen',
      count: '3.',
      description: 'Durch die kontinuierliche Überwachung Ihrer Anlage, erkennen Sie potenzielle Ausfälle frühzeitig und können geeignete Maßnahmen zur Vermeidung von Betriebsunterbrechungen ergreifen. Durch den Zugriff auf Echtzeitdaten und Warnmeldungen können Sie proaktiv auf Probleme reagieren und die Zuverlässigkeit Ihrer Anlagen erhöhen.'
    }, {
      headline: 'Datenspeicherung in Deutschland',
      count: '4.',
      description: 'Ihre Daten werden in Deutschland gespeichert und verarbeitet. Dies gewährleistet nicht nur die Einhaltung strenger Datenschutzgesetze, sondern bietet auch Sicherheit für unsere Kunden. Durch die lokale Speicherung können sensible Daten in einer vertrauenswürdigen Umgebung gehalten werden, was die Risiken von Datenverlust und unbefugtem Zugriff minimiert.'
    }, {
      headline: 'Einfache Integration',
      count: '5.',
      description: 'Dank Plug-and-Play-Funktionalität lässt sich AEC unkompliziert in Ihre Flotte integrieren. Die Hardware beansprucht nur wenig Platz und kann extrem leicht montiert und installiert werden.'
    }]
  } as USPListProps
}`,...(A=(w=d.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var E,S,F;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariants.Zps,
    headerTitle: 'Vorteile für Ihr Unternehmen',
    uspCards: [{
      headline: 'Nachhaltig managen',
      count: '1.',
      description: 'Mit AEC können Sie den Zustand Ihrer Anlagen kontinuierlich analysieren und Optimierungspotenziale identifizieren, um eine ressourcenschonende Betriebsweise zu gewährleisten. Sie können die Lebensdauer Ihrer Motoren und Anlagen verlängern sowie die Emissionen und den Kraftstoffverbrauch senken.'
    }, {
      headline: 'Alle Daten auf einen Blick',
      count: '2.',
      description: 'AEC vernetzt Ihre Motoren nahtlos und bietet einen umfassenden Überblick über alle relevanten Parameter Ihrer Motoren und Anlagen. Von Betriebsdaten bis hin zu Leistungsindikatoren können Sie alle gewünschten Informationen in einem zentralen Portal einsehen. Dies vereinfacht das Management Ihrer Flotte, Sie können  Handlungsempfehlungen aus den Daten ableiten und die Effizienz Ihres Betriebs steigern.'
    }, {
      headline: 'Ausfälle frühzeitig erkennen',
      count: '3.',
      description: 'Durch die kontinuierliche Überwachung Ihrer Anlage, erkennen Sie potenzielle Ausfälle frühzeitig und können geeignete Maßnahmen zur Vermeidung von Betriebsunterbrechungen ergreifen. Durch den Zugriff auf Echtzeitdaten und Warnmeldungen können Sie proaktiv auf Probleme reagieren und die Zuverlässigkeit Ihrer Anlagen erhöhen.'
    }, {
      headline: 'Datenspeicherung in Deutschland',
      count: '4.',
      description: 'Ihre Daten werden in Deutschland gespeichert und verarbeitet. Dies gewährleistet nicht nur die Einhaltung strenger Datenschutzgesetze, sondern bietet auch Sicherheit für unsere Kunden. Durch die lokale Speicherung können sensible Daten in einer vertrauenswürdigen Umgebung gehalten werden, was die Risiken von Datenverlust und unbefugtem Zugriff minimiert.'
    }, {
      headline: 'Einfache Integration',
      count: '5.',
      description: 'Dank Plug-and-Play-Funktionalität lässt sich AEC unkompliziert in Ihre Flotte integrieren. Die Hardware beansprucht nur wenig Platz und kann extrem leicht montiert und installiert werden.'
    }, {
      headline: 'Maßsgeschneiderte Lösungen',
      count: '6.',
      description: 'Zusätzliche Umgebungsparameter, komplexe Messwerte, Erweiterung durch Tracker & Sensorik, eigenes Branding - Wir passen AEC exakt an Ihre Bedürfnisse an und können individuelle Konfigurationen und Weiterentwicklungen vornehmen.'
    }]
  } as USPListProps
}`,...(F=(S=o.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};const ne=["Default","With3Items","With4Items","With5Items","With6Items"];export{s as Default,u as With3Items,l as With4Items,d as With5Items,o as With6Items,ne as __namedExportsOrder,ee as default};
