import{j as i,c as o}from"./clsx-1e30d079.js";import{L as C,e as z,l as I}from"./index.es16-d7031f0f.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index.es29-7715336a.js";import"./index.es13-f7b402e8.js";const r=({linkChain:a,contentItems:m})=>i.jsx("div",{className:"zep-flex zep-items-stretch",children:m.map((l,w)=>i.jsx("div",{className:o("zep-mr-2","md:zep-mr-2.5"),children:i.jsxs("div",{className:o(" zep-relative zep-bg-indigo-500 zep-text-greyscale-0 zep-w-[300px] zep-p-1.5 zep-h-full"),children:[i.jsxs("div",{className:o("zep-flex","zep-flex-col","zep-items-start"),children:[i.jsx("h4",{"data-testid":"process-chain-headline",className:"zep-typography-headlineSM-fluid-cqi  zep-break-all",children:l.headline}),a?l.linkItems.map((n,s)=>i.jsx("div",{className:"zep-mt-1 ",children:i.jsx(C,{label:"inline link",iconPlacement:"before",icon:n.icon,href:n.link,hasIcon:!0,target:z.Blank,mode:I.Inline})},s)):l.listItems.map((n,s)=>i.jsx("ul",{className:"zep-mt-1 zep-pl-1.5 ",children:i.jsx("li",{className:"zep-list-disc",children:n})},s))]}),w<m.length-1&&i.jsx("div",{className:"zep-mr-1.5 zep-absolute zep-border-t-transparent zep-border-b-transparent zep-border-t-[18px] zep-border-b-[18px] zep-top-1/3 zep-left-[300px] zep-border-l-[16px] zep-border-l-indigo-500 zep-translate-y-1/2"})]})},w))});try{r.displayName="ProcessChain",r.__docgenInfo={description:"",displayName:"ProcessChain",props:{linkChain:{defaultValue:null,description:"",name:"linkChain",required:!0,type:{name:"any"}},contentItems:{defaultValue:null,description:"",name:"contentItems",required:!0,type:{name:"any"}}}}}catch{}const y={title:"Components/ProcessChain",component:r,tags:["autodocs"],argTypes:{}},t={args:{linkChain:!0,contentItems:[{headline:"Link Chain 1",linkItems:[{icon:"arrow-long-right",link:"https://www.google.com"},{icon:"arrow-long-right",link:"https://www.example.com"},{icon:"arrow-long-right",link:"https://www.stackoverflow.com"}]},{headline:"Link Chain  2",linkItems:[{icon:"arrow-long-right",link:"https://www.github.com"},{icon:"arrow-long-right",link:"https://www.gitlab.com"},{icon:"arrow-long-right",link:"https://www.gitlab.com"},{icon:"arrow-long-right",link:"https://www.gitlab.com"}]},{headline:"Link Chain  3",linkItems:[{icon:"arrow-long-right",link:"https://www.stackoverflow.com"},{icon:"arrow-long-right",link:"https://www.stackoverflow.com"},{icon:"arrow-long-right",link:"https://www.stackoverflow.com"}]},{headline:"Link Chain  4",linkItems:[{icon:"arrow-long-right",link:"https://www.linkedin.com"},{icon:"arrow-long-right",link:"https://www.twitter.com"},{icon:"arrow-long-right",link:"https://www.gitlab.com"}]},{headline:"Link Chain  5",linkItems:[{icon:"arrow-long-right",link:"https://www.linkedin.com"},{icon:"arrow-long-right",link:"https://www.twitter.com"},{icon:"arrow-long-right",link:"https://www.gitlab.com"}]}]}},e={args:{linkChain:!1,contentItems:[{headline:"List Chain 1",listItems:["list item","list item","list item"]},{headline:"List Chain 2",listItems:["list item","list item","list item"]},{headline:"List Chain 3",listItems:["list item","list item","list item","list item"]},{headline:"List Chain 4",listItems:["list item","list item","list item"]},{headline:"List Chain 5",listItems:["list item","list item","list item"]}]}};var c,h,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    linkChain: true,
    contentItems: [{
      headline: 'Link Chain 1',
      linkItems: [{
        icon: 'arrow-long-right',
        link: 'https://www.google.com'
      }, {
        icon: 'arrow-long-right',
        link: 'https://www.example.com'
      }, {
        icon: 'arrow-long-right',
        link: 'https://www.stackoverflow.com'
      }]
    }, {
      headline: 'Link Chain  2',
      linkItems: [{
        icon: 'arrow-long-right',
        link: 'https://www.github.com'
      }, {
        icon: 'arrow-long-right',
        link: 'https://www.gitlab.com'
      }, {
        icon: 'arrow-long-right',
        link: 'https://www.gitlab.com'
      }, {
        icon: 'arrow-long-right',
        link: 'https://www.gitlab.com'
      }]
    }, {
      headline: 'Link Chain  3',
      linkItems: [{
        icon: 'arrow-long-right',
        link: 'https://www.stackoverflow.com'
      }, {
        icon: 'arrow-long-right',
        link: 'https://www.stackoverflow.com'
      }, {
        icon: 'arrow-long-right',
        link: 'https://www.stackoverflow.com'
      }]
    }, {
      headline: 'Link Chain  4',
      linkItems: [{
        icon: 'arrow-long-right',
        link: 'https://www.linkedin.com'
      }, {
        icon: 'arrow-long-right',
        link: 'https://www.twitter.com'
      }, {
        icon: 'arrow-long-right',
        link: 'https://www.gitlab.com'
      }]
    }, {
      headline: 'Link Chain  5',
      linkItems: [{
        icon: 'arrow-long-right',
        link: 'https://www.linkedin.com'
      }, {
        icon: 'arrow-long-right',
        link: 'https://www.twitter.com'
      }, {
        icon: 'arrow-long-right',
        link: 'https://www.gitlab.com'
      }]
    }]
  }
}`,...(p=(h=t.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var g,k,d;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    linkChain: false,
    contentItems: [{
      headline: 'List Chain 1',
      listItems: ['list item', 'list item', 'list item']
    }, {
      headline: 'List Chain 2',
      listItems: ['list item', 'list item', 'list item']
    }, {
      headline: 'List Chain 3',
      listItems: ['list item', 'list item', 'list item', 'list item']
    }, {
      headline: 'List Chain 4',
      listItems: ['list item', 'list item', 'list item']
    }, {
      headline: 'List Chain 5',
      listItems: ['list item', 'list item', 'list item']
    }]
  }
}`,...(d=(k=e.parameters)==null?void 0:k.docs)==null?void 0:d.source}}};const N=["LinkChain","ListChain"];export{t as LinkChain,e as ListChain,N as __namedExportsOrder,y as default};
//# sourceMappingURL=procesChain.stories-fe80eb2f.js.map
