import{G as e,a as t}from"./global-variants-893e06e6.js";import{j as a}from"./clsx-36b9529f.js";import{c}from"./index-9eff14f9.js";import{b as m}from"./commonCSS-cc68a568.js";import{U as H}from"./Usp-c1051d10.js";import{L as N}from"./Layout-639d4783.js";import{H as O}from"./HeaderShortComponent-5b7c16b8.js";import{S as G}from"./Scrollbar-ad09c4de.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index.es13-b5ad88d4.js";import"./tw-merge-1166cefb.js";import"./moving-forward-arrow-a1f6b1da.js";const g=({uspCards:i,variant:r=e.Cat,headerTitle:Z,tagline:L,id:V})=>{const U={[e.Zps]:"",[e.Cat]:""},W=c(["zep-flex zep-flex-col zep-gap-2.5 sm:zep-gap-3 md:zep-gap-4 zep-py-3 sm:zep-py-4 md:zep-py-5"],{variants:{variant:U},defaultVariants:{variant:e.Zps}}),y={[e.Zps]:m[t.ZpsBg],[e.Cat]:m[t.CatBg]},K=c([""],{variants:{variant:y},defaultVariants:{variant:e.Zps}});return a.jsxs(N,{id:V,wrapperClassname:K({variant:r}),className:W({variant:r}),children:[a.jsx(O,{className:"zep-p-[0px] zep-w-[40%]",variant:r===e.Zps?t.ZpsBg:t.CatBg,headline:Z,showArrow:!0,tagline:L}),a.jsx(G,{scrollOrientation:"horizontal",theme:"light",controlId:"USP-list-scrollbar",dataTestId:"zep-usp-list",className:"zep-flex zep-w-full zep-gap-1 md:zep-gap-1.5 lg:zep-gap-3.5",children:i==null?void 0:i.map((n,T)=>a.jsx(H,{count:(n==null?void 0:n.count)||`${T+1}.`,headline:n.headline,description:n.description,iconName:n.iconName,variant:r},n.headline))})]})};try{g.displayName="USPList",g.__docgenInfo={description:"",displayName:"USPList",props:{headerTitle:{defaultValue:null,description:"",name:"headerTitle",required:!0,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"GlobalVariants.Cat"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},uspCards:{defaultValue:null,description:"",name:"uspCards",required:!1,type:{name:"USPProps[]"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const te={title:"Patterns/USPList",component:g,tags:["autodocs"],argTypes:{}},s={args:{variant:e.Zps,headerTitle:"Vorteile für Ihr Unternehmen",uspCards:[{headline:"Nachhaltig managen",count:"1.",description:"Mit AEC können Sie den Zustand Ihrer Anlagen kontinuierlich analysieren und Optimierungspotenziale identifizieren, um eine ressourcenschonende Betriebsweise zu gewährleisten. Sie können die Lebensdauer Ihrer Motoren und Anlagen verlängern sowie die Emissionen und den Kraftstoffverbrauch senken."},{headline:"Alle Daten auf einen Blick",count:"2.",description:"AEC vernetzt Ihre Motoren nahtlos und bietet einen umfassenden Überblick über alle relevanten Parameter Ihrer Motoren und Anlagen. Von Betriebsdaten bis hin zu Leistungsindikatoren können Sie alle gewünschten Informationen in einem zentralen Portal einsehen. Dies vereinfacht das Management Ihrer Flotte, Sie können  Handlungsempfehlungen aus den Daten ableiten und die Effizienz Ihres Betriebs steigern."}]}},u={args:{variant:e.Zps,headerTitle:"Vorteile für Ihr Unternehmen",uspCards:[{headline:"Nachhaltig managen",count:"1.",description:"Mit AEC können Sie den Zustand Ihrer Anlagen kontinuierlich analysieren und Optimierungspotenziale identifizieren, um eine ressourcenschonende Betriebsweise zu gewährleisten. Sie können die Lebensdauer Ihrer Motoren und Anlagen verlängern sowie die Emissionen und den Kraftstoffverbrauch senken."},{headline:"Alle Daten auf einen Blick",count:"2.",description:"AEC vernetzt Ihre Motoren nahtlos und bietet einen umfassenden Überblick über alle relevanten Parameter Ihrer Motoren und Anlagen. Von Betriebsdaten bis hin zu Leistungsindikatoren können Sie alle gewünschten Informationen in einem zentralen Portal einsehen. Dies vereinfacht das Management Ihrer Flotte, Sie können  Handlungsempfehlungen aus den Daten ableiten und die Effizienz Ihres Betriebs steigern."},{headline:"Ausfälle frühzeitig erkennen",count:"3.",description:"Durch die kontinuierliche Überwachung Ihrer Anlage, erkennen Sie potenzielle Ausfälle frühzeitig und können geeignete Maßnahmen zur Vermeidung von Betriebsunterbrechungen ergreifen. Durch den Zugriff auf Echtzeitdaten und Warnmeldungen können Sie proaktiv auf Probleme reagieren und die Zuverlässigkeit Ihrer Anlagen erhöhen."}]}},l={args:{variant:e.Zps,headerTitle:"Vorteile für Ihr Unternehmen",uspCards:[{headline:"Nachhaltig managen",count:"1.",description:"Mit AEC können Sie den Zustand Ihrer Anlagen kontinuierlich analysieren und Optimierungspotenziale identifizieren, um eine ressourcenschonende Betriebsweise zu gewährleisten. Sie können die Lebensdauer Ihrer Motoren und Anlagen verlängern sowie die Emissionen und den Kraftstoffverbrauch senken."},{headline:"Alle Daten auf einen Blick",count:"2.",description:"AEC vernetzt Ihre Motoren nahtlos und bietet einen umfassenden Überblick über alle relevanten Parameter Ihrer Motoren und Anlagen. Von Betriebsdaten bis hin zu Leistungsindikatoren können Sie alle gewünschten Informationen in einem zentralen Portal einsehen. Dies vereinfacht das Management Ihrer Flotte, Sie können  Handlungsempfehlungen aus den Daten ableiten und die Effizienz Ihres Betriebs steigern."},{headline:"Ausfälle frühzeitig erkennen",count:"3.",description:"Durch die kontinuierliche Überwachung Ihrer Anlage, erkennen Sie potenzielle Ausfälle frühzeitig und können geeignete Maßnahmen zur Vermeidung von Betriebsunterbrechungen ergreifen. Durch den Zugriff auf Echtzeitdaten und Warnmeldungen können Sie proaktiv auf Probleme reagieren und die Zuverlässigkeit Ihrer Anlagen erhöhen."},{headline:"Datenspeicherung in Deutschland",count:"4.",description:"Ihre Daten werden in Deutschland gespeichert und verarbeitet. Dies gewährleistet nicht nur die Einhaltung strenger Datenschutzgesetze, sondern bietet auch Sicherheit für unsere Kunden. Durch die lokale Speicherung können sensible Daten in einer vertrauenswürdigen Umgebung gehalten werden, was die Risiken von Datenverlust und unbefugtem Zugriff minimiert."}]}},d={args:{variant:e.Zps,headerTitle:"Vorteile für Ihr Unternehmen",uspCards:[{headline:"Nachhaltig managen",count:"1.",description:"Mit AEC können Sie den Zustand Ihrer Anlagen kontinuierlich analysieren und Optimierungspotenziale identifizieren, um eine ressourcenschonende Betriebsweise zu gewährleisten. Sie können die Lebensdauer Ihrer Motoren und Anlagen verlängern sowie die Emissionen und den Kraftstoffverbrauch senken."},{headline:"Alle Daten auf einen Blick",count:"2.",description:"AEC vernetzt Ihre Motoren nahtlos und bietet einen umfassenden Überblick über alle relevanten Parameter Ihrer Motoren und Anlagen. Von Betriebsdaten bis hin zu Leistungsindikatoren können Sie alle gewünschten Informationen in einem zentralen Portal einsehen. Dies vereinfacht das Management Ihrer Flotte, Sie können  Handlungsempfehlungen aus den Daten ableiten und die Effizienz Ihres Betriebs steigern."},{headline:"Ausfälle frühzeitig erkennen",count:"3.",description:"Durch die kontinuierliche Überwachung Ihrer Anlage, erkennen Sie potenzielle Ausfälle frühzeitig und können geeignete Maßnahmen zur Vermeidung von Betriebsunterbrechungen ergreifen. Durch den Zugriff auf Echtzeitdaten und Warnmeldungen können Sie proaktiv auf Probleme reagieren und die Zuverlässigkeit Ihrer Anlagen erhöhen."},{headline:"Datenspeicherung in Deutschland",count:"4.",description:"Ihre Daten werden in Deutschland gespeichert und verarbeitet. Dies gewährleistet nicht nur die Einhaltung strenger Datenschutzgesetze, sondern bietet auch Sicherheit für unsere Kunden. Durch die lokale Speicherung können sensible Daten in einer vertrauenswürdigen Umgebung gehalten werden, was die Risiken von Datenverlust und unbefugtem Zugriff minimiert."},{headline:"Einfache Integration",count:"5.",description:"Dank Plug-and-Play-Funktionalität lässt sich AEC unkompliziert in Ihre Flotte integrieren. Die Hardware beansprucht nur wenig Platz und kann extrem leicht montiert und installiert werden."}]}},h={args:{variant:e.Zps,headerTitle:"Vorteile für Ihr Unternehmen",uspCards:[{headline:"Nachhaltig managen",count:"1.",description:"Mit AEC können Sie den Zustand Ihrer Anlagen kontinuierlich analysieren und Optimierungspotenziale identifizieren, um eine ressourcenschonende Betriebsweise zu gewährleisten. Sie können die Lebensdauer Ihrer Motoren und Anlagen verlängern sowie die Emissionen und den Kraftstoffverbrauch senken."},{headline:"Alle Daten auf einen Blick",count:"2.",description:"AEC vernetzt Ihre Motoren nahtlos und bietet einen umfassenden Überblick über alle relevanten Parameter Ihrer Motoren und Anlagen. Von Betriebsdaten bis hin zu Leistungsindikatoren können Sie alle gewünschten Informationen in einem zentralen Portal einsehen. Dies vereinfacht das Management Ihrer Flotte, Sie können  Handlungsempfehlungen aus den Daten ableiten und die Effizienz Ihres Betriebs steigern."},{headline:"Ausfälle frühzeitig erkennen",count:"3.",description:"Durch die kontinuierliche Überwachung Ihrer Anlage, erkennen Sie potenzielle Ausfälle frühzeitig und können geeignete Maßnahmen zur Vermeidung von Betriebsunterbrechungen ergreifen. Durch den Zugriff auf Echtzeitdaten und Warnmeldungen können Sie proaktiv auf Probleme reagieren und die Zuverlässigkeit Ihrer Anlagen erhöhen."},{headline:"Datenspeicherung in Deutschland",count:"4.",description:"Ihre Daten werden in Deutschland gespeichert und verarbeitet. Dies gewährleistet nicht nur die Einhaltung strenger Datenschutzgesetze, sondern bietet auch Sicherheit für unsere Kunden. Durch die lokale Speicherung können sensible Daten in einer vertrauenswürdigen Umgebung gehalten werden, was die Risiken von Datenverlust und unbefugtem Zugriff minimiert."},{headline:"Einfache Integration",count:"5.",description:"Dank Plug-and-Play-Funktionalität lässt sich AEC unkompliziert in Ihre Flotte integrieren. Die Hardware beansprucht nur wenig Platz und kann extrem leicht montiert und installiert werden."},{headline:"Maßsgeschneiderte Lösungen",count:"6.",description:"Zusätzliche Umgebungsparameter, komplexe Messwerte, Erweiterung durch Tracker & Sensorik, eigenes Branding - Wir passen AEC exakt an Ihre Bedürfnisse an und können individuelle Konfigurationen und Weiterentwicklungen vornehmen."}]}},o={args:{variant:e.Zps,headerTitle:"Vorteile für Ihr Unternehmen",uspCards:[{headline:"Nachhaltig managen",count:"1.",description:"Mit AEC können Sie den Zustand Ihrer Anlagen kontinuierlich analysieren und Optimierungspotenziale identifizieren, um eine ressourcenschonende Betriebsweise zu gewährleisten. Sie können die Lebensdauer Ihrer Motoren und Anlagen verlängern sowie die Emissionen und den Kraftstoffverbrauch senken."},{headline:"Alle Daten auf einen Blick",count:"2.",description:"AEC vernetzt Ihre Motoren nahtlos und bietet einen umfassenden Überblick über alle relevanten Parameter Ihrer Motoren und Anlagen. Von Betriebsdaten bis hin zu Leistungsindikatoren können Sie alle gewünschten Informationen in einem zentralen Portal einsehen. Dies vereinfacht das Management Ihrer Flotte, Sie können  Handlungsempfehlungen aus den Daten ableiten und die Effizienz Ihres Betriebs steigern."},{headline:"Ausfälle frühzeitig erkennen",count:"3.",description:"Durch die kontinuierliche Überwachung Ihrer Anlage, erkennen Sie potenzielle Ausfälle frühzeitig und können geeignete Maßnahmen zur Vermeidung von Betriebsunterbrechungen ergreifen. Durch den Zugriff auf Echtzeitdaten und Warnmeldungen können Sie proaktiv auf Probleme reagieren und die Zuverlässigkeit Ihrer Anlagen erhöhen."},{headline:"Datenspeicherung in Deutschland",count:"4.",description:"Ihre Daten werden in Deutschland gespeichert und verarbeitet. Dies gewährleistet nicht nur die Einhaltung strenger Datenschutzgesetze, sondern bietet auch Sicherheit für unsere Kunden. Durch die lokale Speicherung können sensible Daten in einer vertrauenswürdigen Umgebung gehalten werden, was die Risiken von Datenverlust und unbefugtem Zugriff minimiert."},{headline:"Einfache Integration",count:"5.",description:"Dank Plug-and-Play-Funktionalität lässt sich AEC unkompliziert in Ihre Flotte integrieren. Die Hardware beansprucht nur wenig Platz und kann extrem leicht montiert und installiert werden."},{headline:"Maßsgeschneiderte Lösungen",count:"6.",description:"Zusätzliche Umgebungsparameter, komplexe Messwerte, Erweiterung durch Tracker & Sensorik, eigenes Branding - Wir passen AEC exakt an Ihre Bedürfnisse an und können individuelle Konfigurationen und Weiterentwicklungen vornehmen."},{headline:"Maßsgeschneiderte Lösungen",count:"7.",description:"Zusätzliche Umgebungsparameter, komplexe Messwerte, Erweiterung durch Tracker & Sensorik, eigenes Branding - Wir passen AEC exakt an Ihre Bedürfnisse an und können individuelle Konfigurationen und Weiterentwicklungen vornehmen."},{headline:"Maßsgeschneiderte Lösungen",count:"8.",description:"Zusätzliche Umgebungsparameter, komplexe Messwerte, Erweiterung durch Tracker & Sensorik, eigenes Branding - Wir passen AEC exakt an Ihre Bedürfnisse an und können individuelle Konfigurationen und Weiterentwicklungen vornehmen."},{headline:"Maßsgeschneiderte Lösungen",count:"9.",description:"Zusätzliche Umgebungsparameter, komplexe Messwerte, Erweiterung durch Tracker & Sensorik, eigenes Branding - Wir passen AEC exakt an Ihre Bedürfnisse an und können individuelle Konfigurationen und Weiterentwicklungen vornehmen."},{headline:"Maßsgeschneiderte Lösungen",count:"10.",description:"Zusätzliche Umgebungsparameter, komplexe Messwerte, Erweiterung durch Tracker & Sensorik, eigenes Branding - Wir passen AEC exakt an Ihre Bedürfnisse an und können individuelle Konfigurationen und Weiterentwicklungen vornehmen."}]}};var p,f,k;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(k=(f=s.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var b,x,z;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(z=(x=u.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var v,D,I;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(I=(D=l.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var w,E,A;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(A=(E=d.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var F,S,C;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(C=(S=h.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var M,B,P;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
    }, {
      headline: 'Maßsgeschneiderte Lösungen',
      count: '7.',
      description: 'Zusätzliche Umgebungsparameter, komplexe Messwerte, Erweiterung durch Tracker & Sensorik, eigenes Branding - Wir passen AEC exakt an Ihre Bedürfnisse an und können individuelle Konfigurationen und Weiterentwicklungen vornehmen.'
    }, {
      headline: 'Maßsgeschneiderte Lösungen',
      count: '8.',
      description: 'Zusätzliche Umgebungsparameter, komplexe Messwerte, Erweiterung durch Tracker & Sensorik, eigenes Branding - Wir passen AEC exakt an Ihre Bedürfnisse an und können individuelle Konfigurationen und Weiterentwicklungen vornehmen.'
    }, {
      headline: 'Maßsgeschneiderte Lösungen',
      count: '9.',
      description: 'Zusätzliche Umgebungsparameter, komplexe Messwerte, Erweiterung durch Tracker & Sensorik, eigenes Branding - Wir passen AEC exakt an Ihre Bedürfnisse an und können individuelle Konfigurationen und Weiterentwicklungen vornehmen.'
    }, {
      headline: 'Maßsgeschneiderte Lösungen',
      count: '10.',
      description: 'Zusätzliche Umgebungsparameter, komplexe Messwerte, Erweiterung durch Tracker & Sensorik, eigenes Branding - Wir passen AEC exakt an Ihre Bedürfnisse an und können individuelle Konfigurationen und Weiterentwicklungen vornehmen.'
    }]
  } as USPListProps
}`,...(P=(B=o.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};const ae=["Default","With3Items","With4Items","With5Items","With6Items","With10Items"];export{s as Default,o as With10Items,u as With3Items,l as With4Items,d as With5Items,h as With6Items,ae as __namedExportsOrder,te as default};
