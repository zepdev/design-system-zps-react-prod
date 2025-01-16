var B="-";function ir(r){var e=lr(r),o=r.conflictingClassGroups,t=r.conflictingClassGroupModifiers,l=t===void 0?{}:t;function n(a){var c=a.split(B);return c[0]===""&&c.length!==1&&c.shift(),rr(c,e)||ar(a)}function i(a,c){var f=o[a]||[];return c&&l[a]?[].concat(f,l[a]):f}return{getClassGroupId:n,getConflictingClassGroupIds:i}}function rr(r,e){var i;if(r.length===0)return e.classGroupId;var o=r[0],t=e.nextPart.get(o),l=t?rr(r.slice(1),t):void 0;if(l)return l;if(e.validators.length!==0){var n=r.join(B);return(i=e.validators.find(function(a){var c=a.validator;return c(n)}))==null?void 0:i.classGroupId}}var Q=/^\[(.+)\]$/;function ar(r){if(Q.test(r)){var e=Q.exec(r)[1],o=e==null?void 0:e.substring(0,e.indexOf(":"));if(o)return"arbitrary.."+o}}function lr(r){var e=r.theme,o=r.prefix,t={nextPart:new Map,validators:[]},l=cr(Object.entries(r.classGroups),o);return l.forEach(function(n){var i=n[0],a=n[1];A(a,t,i,e)}),t}function A(r,e,o,t){r.forEach(function(l){if(typeof l=="string"){var n=l===""?e:X(e,l);n.classGroupId=o;return}if(typeof l=="function"){if(sr(l)){A(l(t),e,o,t);return}e.validators.push({validator:l,classGroupId:o});return}Object.entries(l).forEach(function(i){var a=i[0],c=i[1];A(c,X(e,a),o,t)})})}function X(r,e){var o=r;return e.split(B).forEach(function(t){o.nextPart.has(t)||o.nextPart.set(t,{nextPart:new Map,validators:[]}),o=o.nextPart.get(t)}),o}function sr(r){return r.isThemeGetter}function cr(r,e){return e?r.map(function(o){var t=o[0],l=o[1],n=l.map(function(i){return typeof i=="string"?e+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(function(a){var c=a[0],f=a[1];return[e+c,f]})):i});return[t,n]}):r}function dr(r){if(r<1)return{get:function(){},set:function(){}};var e=0,o=new Map,t=new Map;function l(n,i){o.set(n,i),e++,e>r&&(e=0,t=o,o=new Map)}return{get:function(n){var i=o.get(n);if(i!==void 0)return i;if((i=t.get(n))!==void 0)return l(n,i),i},set:function(n,i){o.has(n)?o.set(n,i):l(n,i)}}}var er="!";function ur(r){var e=r.separator||":",o=e.length===1,t=e[0],l=e.length;return function(n){for(var i=[],a=0,c=0,f,p=0;p<n.length;p++){var b=n[p];if(a===0){if(b===t&&(o||n.slice(p,p+l)===e)){i.push(n.slice(c,p)),c=p+l;continue}if(b==="/"){f=p;continue}}b==="["?a++:b==="]"&&a--}var m=i.length===0?n:n.substring(c),v=m.startsWith(er),x=v?m.substring(1):m,g=f&&f>c?f-c:void 0;return{modifiers:i,hasImportantModifier:v,baseClassName:x,maybePostfixModifierPosition:g}}}function pr(r){if(r.length<=1)return r;var e=[],o=[];return r.forEach(function(t){var l=t[0]==="[";l?(e.push.apply(e,o.sort().concat([t])),o=[]):o.push(t)}),e.push.apply(e,o.sort()),e}function fr(r){return{cache:dr(r.cacheSize),splitModifiers:ur(r),...ir(r)}}var br=/\s+/;function mr(r,e){var o=e.splitModifiers,t=e.getClassGroupId,l=e.getConflictingClassGroupIds,n=new Set;return r.trim().split(br).map(function(i){var a=o(i),c=a.modifiers,f=a.hasImportantModifier,p=a.baseClassName,b=a.maybePostfixModifierPosition,m=t(b?p.substring(0,b):p),v=!!b;if(!m){if(!b)return{isTailwindClass:!1,originalClassName:i};if(m=t(p),!m)return{isTailwindClass:!1,originalClassName:i};v=!1}var x=pr(c).join(":"),g=f?x+er:x;return{isTailwindClass:!0,modifierId:g,classGroupId:m,originalClassName:i,hasPostfixModifier:v}}).reverse().filter(function(i){if(!i.isTailwindClass)return!0;var a=i.modifierId,c=i.classGroupId,f=i.hasPostfixModifier,p=a+c;return n.has(p)?!1:(n.add(p),l(c,f).forEach(function(b){return n.add(a+b)}),!0)}).reverse().map(function(i){return i.originalClassName}).join(" ")}function gr(){for(var r=0,e,o,t="";r<arguments.length;)(e=arguments[r++])&&(o=or(e))&&(t&&(t+=" "),t+=o);return t}function or(r){if(typeof r=="string")return r;for(var e,o="",t=0;t<r.length;t++)r[t]&&(e=or(r[t]))&&(o&&(o+=" "),o+=e);return o}function vr(){for(var r=arguments.length,e=new Array(r),o=0;o<r;o++)e[o]=arguments[o];var t,l,n,i=a;function a(f){var p=e[0],b=e.slice(1),m=b.reduce(function(v,x){return x(v)},p());return t=fr(m),l=t.cache.get,n=t.cache.set,i=c,c(f)}function c(f){var p=l(f);if(p)return p;var b=mr(f,t);return n(f,b),b}return function(){return i(gr.apply(null,arguments))}}function d(r){var e=function(o){return o[r]||[]};return e.isThemeGetter=!0,e}var tr=/^\[(?:([a-z-]+):)?(.+)\]$/i,hr=/^\d+\/\d+$/,xr=new Set(["px","full","screen"]),yr=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,wr=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,kr=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function h(r){return C(r)||xr.has(r)||hr.test(r)||L(r)}function L(r){return $(r,"length",Ir)}function zr(r){return $(r,"size",nr)}function Cr(r){return $(r,"position",nr)}function $r(r){return $(r,"url",Mr)}function E(r){return $(r,"number",C)}function C(r){return!Number.isNaN(Number(r))}function jr(r){return r.endsWith("%")&&C(r.slice(0,-1))}function I(r){return Y(r)||$(r,"number",Y)}function s(r){return tr.test(r)}function M(){return!0}function z(r){return yr.test(r)}function Gr(r){return $(r,"",Pr)}function $(r,e,o){var t=tr.exec(r);return t?t[1]?t[1]===e:o(t[2]):!1}function Ir(r){return wr.test(r)}function nr(){return!1}function Mr(r){return r.startsWith("url(")}function Y(r){return Number.isInteger(Number(r))}function Pr(r){return kr.test(r)}function Nr(){var r=d("colors"),e=d("spacing"),o=d("blur"),t=d("brightness"),l=d("borderColor"),n=d("borderRadius"),i=d("borderSpacing"),a=d("borderWidth"),c=d("contrast"),f=d("grayscale"),p=d("hueRotate"),b=d("invert"),m=d("gap"),v=d("gradientColorStops"),x=d("gradientColorStopPositions"),g=d("inset"),y=d("margin"),k=d("opacity"),w=d("padding"),D=d("saturate"),T=d("scale"),F=d("sepia"),H=d("skew"),J=d("space"),U=d("translate"),O=function(){return["auto","contain","none"]},R=function(){return["auto","hidden","clip","visible","scroll"]},W=function(){return["auto",s,e]},u=function(){return[s,e]},V=function(){return["",h]},P=function(){return["auto",C,s]},Z=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},N=function(){return["solid","dashed","dotted","double","none"]},_=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},q=function(){return["start","end","center","between","around","evenly","stretch"]},j=function(){return["","0",s]},K=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},G=function(){return[C,E]},S=function(){return[C,s]};return{cacheSize:500,theme:{colors:[M],spacing:[h],blur:["none","",z,s],brightness:G(),borderColor:[r],borderRadius:["none","","full",z,s],borderSpacing:u(),borderWidth:V(),contrast:G(),grayscale:j(),hueRotate:S(),invert:j(),gap:u(),gradientColorStops:[r],gradientColorStopPositions:[jr,L],inset:W(),margin:W(),opacity:G(),padding:u(),saturate:G(),scale:G(),sepia:j(),skew:S(),space:u(),translate:u()},classGroups:{aspect:[{aspect:["auto","square","video",s]}],container:["container"],columns:[{columns:[z]}],"break-after":[{"break-after":K()}],"break-before":[{"break-before":K()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(Z(),[s])}],overflow:[{overflow:R()}],"overflow-x":[{"overflow-x":R()}],"overflow-y":[{"overflow-y":R()}],overscroll:[{overscroll:O()}],"overscroll-x":[{"overscroll-x":O()}],"overscroll-y":[{"overscroll-y":O()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",I]}],basis:[{basis:W()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",s]}],grow:[{grow:j()}],shrink:[{shrink:j()}],order:[{order:["first","last","none",I]}],"grid-cols":[{"grid-cols":[M]}],"col-start-end":[{col:["auto",{span:["full",I]},s]}],"col-start":[{"col-start":P()}],"col-end":[{"col-end":P()}],"grid-rows":[{"grid-rows":[M]}],"row-start-end":[{row:["auto",{span:[I]},s]}],"row-start":[{"row-start":P()}],"row-end":[{"row-end":P()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",s]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",s]}],gap:[{gap:[m]}],"gap-x":[{"gap-x":[m]}],"gap-y":[{"gap-y":[m]}],"justify-content":[{justify:["normal"].concat(q())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(q(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(q(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[w]}],px:[{px:[w]}],py:[{py:[w]}],ps:[{ps:[w]}],pe:[{pe:[w]}],pt:[{pt:[w]}],pr:[{pr:[w]}],pb:[{pb:[w]}],pl:[{pl:[w]}],m:[{m:[y]}],mx:[{mx:[y]}],my:[{my:[y]}],ms:[{ms:[y]}],me:[{me:[y]}],mt:[{mt:[y]}],mr:[{mr:[y]}],mb:[{mb:[y]}],ml:[{ml:[y]}],"space-x":[{"space-x":[J]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[J]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",s,e]}],"min-w":[{"min-w":["min","max","fit",s,h]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[z]},z,s]}],h:[{h:[s,e,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",s,h]}],"max-h":[{"max-h":[s,e,"min","max","fit"]}],"font-size":[{text:["base",z,L]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",E]}],"font-family":[{font:[M]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",s]}],"line-clamp":[{"line-clamp":["none",C,E]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",s,h]}],"list-image":[{"list-image":["none",s]}],"list-style-type":[{list:["none","disc","decimal",s]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[r]}],"placeholder-opacity":[{"placeholder-opacity":[k]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[r]}],"text-opacity":[{"text-opacity":[k]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(N(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",h]}],"underline-offset":[{"underline-offset":["auto",s,h]}],"text-decoration-color":[{decoration:[r]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:u()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",s]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",s]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[k]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(Z(),[Cr])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",zr]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},$r]}],"bg-color":[{bg:[r]}],"gradient-from-pos":[{from:[x]}],"gradient-via-pos":[{via:[x]}],"gradient-to-pos":[{to:[x]}],"gradient-from":[{from:[v]}],"gradient-via":[{via:[v]}],"gradient-to":[{to:[v]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[k]}],"border-style":[{border:[].concat(N(),["hidden"])}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[k]}],"divide-style":[{divide:N()}],"border-color":[{border:[l]}],"border-color-x":[{"border-x":[l]}],"border-color-y":[{"border-y":[l]}],"border-color-t":[{"border-t":[l]}],"border-color-r":[{"border-r":[l]}],"border-color-b":[{"border-b":[l]}],"border-color-l":[{"border-l":[l]}],"divide-color":[{divide:[l]}],"outline-style":[{outline:[""].concat(N())}],"outline-offset":[{"outline-offset":[s,h]}],"outline-w":[{outline:[h]}],"outline-color":[{outline:[r]}],"ring-w":[{ring:V()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[r]}],"ring-opacity":[{"ring-opacity":[k]}],"ring-offset-w":[{"ring-offset":[h]}],"ring-offset-color":[{"ring-offset":[r]}],shadow:[{shadow:["","inner","none",z,Gr]}],"shadow-color":[{shadow:[M]}],opacity:[{opacity:[k]}],"mix-blend":[{"mix-blend":_()}],"bg-blend":[{"bg-blend":_()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[t]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",z,s]}],grayscale:[{grayscale:[f]}],"hue-rotate":[{"hue-rotate":[p]}],invert:[{invert:[b]}],saturate:[{saturate:[D]}],sepia:[{sepia:[F]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[t]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[f]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[p]}],"backdrop-invert":[{"backdrop-invert":[b]}],"backdrop-opacity":[{"backdrop-opacity":[k]}],"backdrop-saturate":[{"backdrop-saturate":[D]}],"backdrop-sepia":[{"backdrop-sepia":[F]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",s]}],duration:[{duration:S()}],ease:[{ease:["linear","in","out","in-out",s]}],delay:[{delay:S()}],animate:[{animate:["none","spin","ping","pulse","bounce",s]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[T]}],"scale-x":[{"scale-x":[T]}],"scale-y":[{"scale-y":[T]}],rotate:[{rotate:[I,s]}],"translate-x":[{"translate-x":[U]}],"translate-y":[{"translate-y":[U]}],"skew-x":[{"skew-x":[H]}],"skew-y":[{"skew-y":[H]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",s]}],accent:[{accent:["auto",r]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",s]}],"caret-color":[{caret:[r]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":u()}],"scroll-mx":[{"scroll-mx":u()}],"scroll-my":[{"scroll-my":u()}],"scroll-ms":[{"scroll-ms":u()}],"scroll-me":[{"scroll-me":u()}],"scroll-mt":[{"scroll-mt":u()}],"scroll-mr":[{"scroll-mr":u()}],"scroll-mb":[{"scroll-mb":u()}],"scroll-ml":[{"scroll-ml":u()}],"scroll-p":[{"scroll-p":u()}],"scroll-px":[{"scroll-px":u()}],"scroll-py":[{"scroll-py":u()}],"scroll-ps":[{"scroll-ps":u()}],"scroll-pe":[{"scroll-pe":u()}],"scroll-pt":[{"scroll-pt":u()}],"scroll-pr":[{"scroll-pr":u()}],"scroll-pb":[{"scroll-pb":u()}],"scroll-pl":[{"scroll-pl":u()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",s]}],fill:[{fill:[r,"none"]}],"stroke-w":[{stroke:[h,E]}],stroke:[{stroke:[r,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}var Sr=vr(Nr);export{Sr as i};
