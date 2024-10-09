(()=>{var e={2838:function(e){e.exports=function(){"use strict";const{entries:e,setPrototypeOf:t,isFrozen:n,getPrototypeOf:r,getOwnPropertyDescriptor:a}=Object;let{freeze:o,seal:i,create:l}=Object,{apply:s,construct:c}="undefined"!=typeof Reflect&&Reflect;o||(o=function(e){return e}),i||(i=function(e){return e}),s||(s=function(e,t,n){return e.apply(t,n)}),c||(c=function(e,t){return new e(...t)});const d=x(Array.prototype.forEach),u=x(Array.prototype.pop),m=x(Array.prototype.push),p=x(String.prototype.toLowerCase),f=x(String.prototype.toString),g=x(String.prototype.match),h=x(String.prototype.replace),b=x(String.prototype.indexOf),y=x(String.prototype.trim),_=x(Object.prototype.hasOwnProperty),v=x(RegExp.prototype.test),k=(w=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return c(w,t)}),E=x(Number.isNaN);var w;function x(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return s(e,t,r)}}function C(e,r){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:p;t&&t(e,null);let o=r.length;for(;o--;){let t=r[o];if("string"==typeof t){const e=a(t);e!==t&&(n(r)||(r[o]=e),t=e)}e[t]=!0}return e}function S(e){for(let t=0;t<e.length;t++)_(e,t)||(e[t]=null);return e}function T(t){const n=l(null);for(const[r,a]of e(t))_(t,r)&&(Array.isArray(a)?n[r]=S(a):a&&"object"==typeof a&&a.constructor===Object?n[r]=T(a):n[r]=a);return n}function N(e,t){for(;null!==e;){const n=a(e,t);if(n){if(n.get)return x(n.get);if("function"==typeof n.value)return x(n.value)}e=r(e)}return function(){return null}}const F=o(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),A=o(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),L=o(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),P=o(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),O=o(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),R=o(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),M=o(["#text"]),D=o(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),B=o(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),I=o(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),z=o(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),U=i(/\{\{[\w\W]*|[\w\W]*\}\}/gm),H=i(/<%[\w\W]*|[\w\W]*%>/gm),$=i(/\${[\w\W]*}/gm),V=i(/^data-[\-\w.\u00B7-\uFFFF]/),G=i(/^aria-[\-\w]+$/),j=i(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),W=i(/^(?:\w+script|data):/i),q=i(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Y=i(/^html$/i),K=i(/^[a-z][.\w]*(-[.\w]+)+$/i);var Q=Object.freeze({__proto__:null,MUSTACHE_EXPR:U,ERB_EXPR:H,TMPLIT_EXPR:$,DATA_ATTR:V,ARIA_ATTR:G,IS_ALLOWED_URI:j,IS_SCRIPT_OR_DATA:W,ATTR_WHITESPACE:q,DOCTYPE_NAME:Y,CUSTOM_ELEMENT:K});const Z=1,X=3,J=7,ee=8,te=9,ne=function(){return"undefined"==typeof window?null:window};return function t(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne();const r=e=>t(e);if(r.version="3.1.3",r.removed=[],!n||!n.document||n.document.nodeType!==te)return r.isSupported=!1,r;let{document:a}=n;const i=a,s=i.currentScript,{DocumentFragment:c,HTMLTemplateElement:w,Node:x,Element:S,NodeFilter:U,NamedNodeMap:H=n.NamedNodeMap||n.MozNamedAttrMap,HTMLFormElement:$,DOMParser:V,trustedTypes:G}=n,W=S.prototype,q=N(W,"cloneNode"),K=N(W,"nextSibling"),re=N(W,"childNodes"),ae=N(W,"parentNode");if("function"==typeof w){const e=a.createElement("template");e.content&&e.content.ownerDocument&&(a=e.content.ownerDocument)}let oe,ie="";const{implementation:le,createNodeIterator:se,createDocumentFragment:ce,getElementsByTagName:de}=a,{importNode:ue}=i;let me={};r.isSupported="function"==typeof e&&"function"==typeof ae&&le&&void 0!==le.createHTMLDocument;const{MUSTACHE_EXPR:pe,ERB_EXPR:fe,TMPLIT_EXPR:ge,DATA_ATTR:he,ARIA_ATTR:be,IS_SCRIPT_OR_DATA:ye,ATTR_WHITESPACE:_e,CUSTOM_ELEMENT:ve}=Q;let{IS_ALLOWED_URI:ke}=Q,Ee=null;const we=C({},[...F,...A,...L,...O,...M]);let xe=null;const Ce=C({},[...D,...B,...I,...z]);let Se=Object.seal(l(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Te=null,Ne=null,Fe=!0,Ae=!0,Le=!1,Pe=!0,Oe=!1,Re=!0,Me=!1,De=!1,Be=!1,Ie=!1,ze=!1,Ue=!1,He=!0,$e=!1,Ve=!0,Ge=!1,je={},We=null;const qe=C({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Ye=null;const Ke=C({},["audio","video","img","source","image","track"]);let Qe=null;const Ze=C({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Xe="http://www.w3.org/1998/Math/MathML",Je="http://www.w3.org/2000/svg",et="http://www.w3.org/1999/xhtml";let tt=et,nt=!1,rt=null;const at=C({},[Xe,Je,et],f);let ot=null;const it=["application/xhtml+xml","text/html"];let lt=null,st=null;const ct=a.createElement("form"),dt=function(e){return e instanceof RegExp||e instanceof Function},ut=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!st||st!==e){if(e&&"object"==typeof e||(e={}),e=T(e),ot=-1===it.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,lt="application/xhtml+xml"===ot?f:p,Ee=_(e,"ALLOWED_TAGS")?C({},e.ALLOWED_TAGS,lt):we,xe=_(e,"ALLOWED_ATTR")?C({},e.ALLOWED_ATTR,lt):Ce,rt=_(e,"ALLOWED_NAMESPACES")?C({},e.ALLOWED_NAMESPACES,f):at,Qe=_(e,"ADD_URI_SAFE_ATTR")?C(T(Ze),e.ADD_URI_SAFE_ATTR,lt):Ze,Ye=_(e,"ADD_DATA_URI_TAGS")?C(T(Ke),e.ADD_DATA_URI_TAGS,lt):Ke,We=_(e,"FORBID_CONTENTS")?C({},e.FORBID_CONTENTS,lt):qe,Te=_(e,"FORBID_TAGS")?C({},e.FORBID_TAGS,lt):{},Ne=_(e,"FORBID_ATTR")?C({},e.FORBID_ATTR,lt):{},je=!!_(e,"USE_PROFILES")&&e.USE_PROFILES,Fe=!1!==e.ALLOW_ARIA_ATTR,Ae=!1!==e.ALLOW_DATA_ATTR,Le=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Pe=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,Oe=e.SAFE_FOR_TEMPLATES||!1,Re=!1!==e.SAFE_FOR_XML,Me=e.WHOLE_DOCUMENT||!1,Ie=e.RETURN_DOM||!1,ze=e.RETURN_DOM_FRAGMENT||!1,Ue=e.RETURN_TRUSTED_TYPE||!1,Be=e.FORCE_BODY||!1,He=!1!==e.SANITIZE_DOM,$e=e.SANITIZE_NAMED_PROPS||!1,Ve=!1!==e.KEEP_CONTENT,Ge=e.IN_PLACE||!1,ke=e.ALLOWED_URI_REGEXP||j,tt=e.NAMESPACE||et,Se=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&dt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Se.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&dt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Se.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(Se.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Oe&&(Ae=!1),ze&&(Ie=!0),je&&(Ee=C({},M),xe=[],!0===je.html&&(C(Ee,F),C(xe,D)),!0===je.svg&&(C(Ee,A),C(xe,B),C(xe,z)),!0===je.svgFilters&&(C(Ee,L),C(xe,B),C(xe,z)),!0===je.mathMl&&(C(Ee,O),C(xe,I),C(xe,z))),e.ADD_TAGS&&(Ee===we&&(Ee=T(Ee)),C(Ee,e.ADD_TAGS,lt)),e.ADD_ATTR&&(xe===Ce&&(xe=T(xe)),C(xe,e.ADD_ATTR,lt)),e.ADD_URI_SAFE_ATTR&&C(Qe,e.ADD_URI_SAFE_ATTR,lt),e.FORBID_CONTENTS&&(We===qe&&(We=T(We)),C(We,e.FORBID_CONTENTS,lt)),Ve&&(Ee["#text"]=!0),Me&&C(Ee,["html","head","body"]),Ee.table&&(C(Ee,["tbody"]),delete Te.tbody),e.TRUSTED_TYPES_POLICY){if("function"!=typeof e.TRUSTED_TYPES_POLICY.createHTML)throw k('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof e.TRUSTED_TYPES_POLICY.createScriptURL)throw k('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');oe=e.TRUSTED_TYPES_POLICY,ie=oe.createHTML("")}else void 0===oe&&(oe=function(e,t){if("object"!=typeof e||"function"!=typeof e.createPolicy)return null;let n=null;const r="data-tt-policy-suffix";t&&t.hasAttribute(r)&&(n=t.getAttribute(r));const a="dompurify"+(n?"#"+n:"");try{return e.createPolicy(a,{createHTML:e=>e,createScriptURL:e=>e})}catch(e){return console.warn("TrustedTypes policy "+a+" could not be created."),null}}(G,s)),null!==oe&&"string"==typeof ie&&(ie=oe.createHTML(""));o&&o(e),st=e}},mt=C({},["mi","mo","mn","ms","mtext"]),pt=C({},["foreignobject","annotation-xml"]),ft=C({},["title","style","font","a","script"]),gt=C({},[...A,...L,...P]),ht=C({},[...O,...R]),bt=function(e){m(r.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){e.remove()}},yt=function(e,t){try{m(r.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){m(r.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!xe[e])if(Ie||ze)try{bt(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},_t=function(e){let t=null,n=null;if(Be)e="<remove></remove>"+e;else{const t=g(e,/^[\r\n\t ]+/);n=t&&t[0]}"application/xhtml+xml"===ot&&tt===et&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const r=oe?oe.createHTML(e):e;if(tt===et)try{t=(new V).parseFromString(r,ot)}catch(e){}if(!t||!t.documentElement){t=le.createDocument(tt,"template",null);try{t.documentElement.innerHTML=nt?ie:r}catch(e){}}const o=t.body||t.documentElement;return e&&n&&o.insertBefore(a.createTextNode(n),o.childNodes[0]||null),tt===et?de.call(t,Me?"html":"body")[0]:Me?t.documentElement:o},vt=function(e){return se.call(e.ownerDocument||e,e,U.SHOW_ELEMENT|U.SHOW_COMMENT|U.SHOW_TEXT|U.SHOW_PROCESSING_INSTRUCTION|U.SHOW_CDATA_SECTION,null)},kt=function(e){return e instanceof $&&(void 0!==e.__depth&&"number"!=typeof e.__depth||void 0!==e.__removalCount&&"number"!=typeof e.__removalCount||"string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof H)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},Et=function(e){return"function"==typeof x&&e instanceof x},wt=function(e,t,n){me[e]&&d(me[e],(e=>{e.call(r,t,n,st)}))},xt=function(e){let t=null;if(wt("beforeSanitizeElements",e,null),kt(e))return bt(e),!0;const n=lt(e.nodeName);if(wt("uponSanitizeElement",e,{tagName:n,allowedTags:Ee}),e.hasChildNodes()&&!Et(e.firstElementChild)&&v(/<[/\w]/g,e.innerHTML)&&v(/<[/\w]/g,e.textContent))return bt(e),!0;if(e.nodeType===J)return bt(e),!0;if(Re&&e.nodeType===ee&&v(/<[/\w]/g,e.data))return bt(e),!0;if(!Ee[n]||Te[n]){if(!Te[n]&&St(n)){if(Se.tagNameCheck instanceof RegExp&&v(Se.tagNameCheck,n))return!1;if(Se.tagNameCheck instanceof Function&&Se.tagNameCheck(n))return!1}if(Ve&&!We[n]){const t=ae(e)||e.parentNode,n=re(e)||e.childNodes;if(n&&t)for(let r=n.length-1;r>=0;--r){const a=q(n[r],!0);a.__removalCount=(e.__removalCount||0)+1,t.insertBefore(a,K(e))}}return bt(e),!0}return e instanceof S&&!function(e){let t=ae(e);t&&t.tagName||(t={namespaceURI:tt,tagName:"template"});const n=p(e.tagName),r=p(t.tagName);return!!rt[e.namespaceURI]&&(e.namespaceURI===Je?t.namespaceURI===et?"svg"===n:t.namespaceURI===Xe?"svg"===n&&("annotation-xml"===r||mt[r]):Boolean(gt[n]):e.namespaceURI===Xe?t.namespaceURI===et?"math"===n:t.namespaceURI===Je?"math"===n&&pt[r]:Boolean(ht[n]):e.namespaceURI===et?!(t.namespaceURI===Je&&!pt[r])&&!(t.namespaceURI===Xe&&!mt[r])&&!ht[n]&&(ft[n]||!gt[n]):!("application/xhtml+xml"!==ot||!rt[e.namespaceURI]))}(e)?(bt(e),!0):"noscript"!==n&&"noembed"!==n&&"noframes"!==n||!v(/<\/no(script|embed|frames)/i,e.innerHTML)?(Oe&&e.nodeType===X&&(t=e.textContent,d([pe,fe,ge],(e=>{t=h(t,e," ")})),e.textContent!==t&&(m(r.removed,{element:e.cloneNode()}),e.textContent=t)),wt("afterSanitizeElements",e,null),!1):(bt(e),!0)},Ct=function(e,t,n){if(He&&("id"===t||"name"===t)&&(n in a||n in ct||"__depth"===n||"__removalCount"===n))return!1;if(Ae&&!Ne[t]&&v(he,t));else if(Fe&&v(be,t));else if(!xe[t]||Ne[t]){if(!(St(e)&&(Se.tagNameCheck instanceof RegExp&&v(Se.tagNameCheck,e)||Se.tagNameCheck instanceof Function&&Se.tagNameCheck(e))&&(Se.attributeNameCheck instanceof RegExp&&v(Se.attributeNameCheck,t)||Se.attributeNameCheck instanceof Function&&Se.attributeNameCheck(t))||"is"===t&&Se.allowCustomizedBuiltInElements&&(Se.tagNameCheck instanceof RegExp&&v(Se.tagNameCheck,n)||Se.tagNameCheck instanceof Function&&Se.tagNameCheck(n))))return!1}else if(Qe[t]);else if(v(ke,h(n,_e,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==b(n,"data:")||!Ye[e])if(Le&&!v(ye,h(n,_e,"")));else if(n)return!1;return!0},St=function(e){return"annotation-xml"!==e&&g(e,ve)},Tt=function(e){wt("beforeSanitizeAttributes",e,null);const{attributes:t}=e;if(!t)return;const n={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:xe};let a=t.length;for(;a--;){const o=t[a],{name:i,namespaceURI:l,value:s}=o,c=lt(i);let m="value"===i?s:y(s);if(n.attrName=c,n.attrValue=m,n.keepAttr=!0,n.forceKeepAttr=void 0,wt("uponSanitizeAttribute",e,n),m=n.attrValue,n.forceKeepAttr)continue;if(yt(i,e),!n.keepAttr)continue;if(!Pe&&v(/\/>/i,m)){yt(i,e);continue}if(Re&&v(/((--!?|])>)|<\/(style|title)/i,m)){yt(i,e);continue}Oe&&d([pe,fe,ge],(e=>{m=h(m,e," ")}));const p=lt(e.nodeName);if(Ct(p,c,m)){if(!$e||"id"!==c&&"name"!==c||(yt(i,e),m="user-content-"+m),oe&&"object"==typeof G&&"function"==typeof G.getAttributeType)if(l);else switch(G.getAttributeType(p,c)){case"TrustedHTML":m=oe.createHTML(m);break;case"TrustedScriptURL":m=oe.createScriptURL(m)}try{l?e.setAttributeNS(l,i,m):e.setAttribute(i,m),kt(e)?bt(e):u(r.removed)}catch(e){}}}wt("afterSanitizeAttributes",e,null)},Nt=function e(t){let n=null;const r=vt(t);for(wt("beforeSanitizeShadowDOM",t,null);n=r.nextNode();){if(wt("uponSanitizeShadowNode",n,null),xt(n))continue;const t=ae(n);n.nodeType===Z&&(t&&t.__depth?n.__depth=(n.__removalCount||0)+t.__depth+1:n.__depth=1),(n.__depth>=255||n.__depth<0||E(n.__depth))&&bt(n),n.content instanceof c&&(n.content.__depth=n.__depth,e(n.content)),Tt(n)}wt("afterSanitizeShadowDOM",t,null)};return r.sanitize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=null,a=null,o=null,l=null;if(nt=!e,nt&&(e="\x3c!--\x3e"),"string"!=typeof e&&!Et(e)){if("function"!=typeof e.toString)throw k("toString is not a function");if("string"!=typeof(e=e.toString()))throw k("dirty is not a string, aborting")}if(!r.isSupported)return e;if(De||ut(t),r.removed=[],"string"==typeof e&&(Ge=!1),Ge){if(e.nodeName){const t=lt(e.nodeName);if(!Ee[t]||Te[t])throw k("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof x)n=_t("\x3c!----\x3e"),a=n.ownerDocument.importNode(e,!0),a.nodeType===Z&&"BODY"===a.nodeName||"HTML"===a.nodeName?n=a:n.appendChild(a);else{if(!Ie&&!Oe&&!Me&&-1===e.indexOf("<"))return oe&&Ue?oe.createHTML(e):e;if(n=_t(e),!n)return Ie?null:Ue?ie:""}n&&Be&&bt(n.firstChild);const s=vt(Ge?e:n);for(;o=s.nextNode();){if(xt(o))continue;const e=ae(o);o.nodeType===Z&&(e&&e.__depth?o.__depth=(o.__removalCount||0)+e.__depth+1:o.__depth=1),(o.__depth>=255||o.__depth<0||E(o.__depth))&&bt(o),o.content instanceof c&&(o.content.__depth=o.__depth,Nt(o.content)),Tt(o)}if(Ge)return e;if(Ie){if(ze)for(l=ce.call(n.ownerDocument);n.firstChild;)l.appendChild(n.firstChild);else l=n;return(xe.shadowroot||xe.shadowrootmode)&&(l=ue.call(i,l,!0)),l}let u=Me?n.outerHTML:n.innerHTML;return Me&&Ee["!doctype"]&&n.ownerDocument&&n.ownerDocument.doctype&&n.ownerDocument.doctype.name&&v(Y,n.ownerDocument.doctype.name)&&(u="<!DOCTYPE "+n.ownerDocument.doctype.name+">\n"+u),Oe&&d([pe,fe,ge],(e=>{u=h(u,e," ")})),oe&&Ue?oe.createHTML(u):u},r.setConfig=function(){ut(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),De=!0},r.clearConfig=function(){st=null,De=!1},r.isValidAttribute=function(e,t,n){st||ut({});const r=lt(e),a=lt(t);return Ct(r,a,n)},r.addHook=function(e,t){"function"==typeof t&&(me[e]=me[e]||[],m(me[e],t))},r.removeHook=function(e){if(me[e])return u(me[e])},r.removeHooks=function(e){me[e]&&(me[e]=[])},r.removeAllHooks=function(){me={}},r}()}()},2774:e=>{"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,a,o;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(a=r;0!=a--;)if(!e(t[a],n[a]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(o=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(a=r;0!=a--;)if(!Object.prototype.hasOwnProperty.call(n,o[a]))return!1;for(a=r;0!=a--;){var i=o[a];if(!("_owner"===i&&t.$$typeof||e(t[i],n[i])))return!1}return!0}return t!=t&&n!=n}},4717:e=>{e.exports=function(e){var t=function(n,r,a){var o=n.splice(0,50);a=(a=a||[]).concat(e.add(o)),n.length>0?setTimeout((function(){t(n,r,a)}),1):(e.update(),r(a))};return t}},4249:e=>{e.exports=function(e){return e.handlers.filterStart=e.handlers.filterStart||[],e.handlers.filterComplete=e.handlers.filterComplete||[],function(t){if(e.trigger("filterStart"),e.i=1,e.reset.filter(),void 0===t)e.filtered=!1;else{e.filtered=!0;for(var n=e.items,r=0,a=n.length;r<a;r++){var o=n[r];t(o)?o.filtered=!0:o.filtered=!1}}return e.update(),e.trigger("filterComplete"),e.visibleItems}}},4844:(e,t,n)=>{n(5981);var r=n(6332),a=n(433),o=n(8340),i=n(378),l=n(7481);e.exports=function(e,t){t=a({location:0,distance:100,threshold:.4,multiSearch:!0,searchClass:"fuzzy-search"},t=t||{});var n={search:function(r,a){for(var o=t.multiSearch?r.replace(/ +$/,"").split(/ +/):[r],i=0,l=e.items.length;i<l;i++)n.item(e.items[i],a,o)},item:function(e,t,r){for(var a=!0,o=0;o<r.length;o++){for(var i=!1,l=0,s=t.length;l<s;l++)n.values(e.values(),t[l],r[o])&&(i=!0);i||(a=!1)}e.found=a},values:function(e,n,r){if(e.hasOwnProperty(n)){var a=o(e[n]).toLowerCase();if(l(a,r,t))return!0}return!1}};return r.bind(i(e.listContainer,t.searchClass),"keyup",e.utils.events.debounce((function(t){var r=t.target||t.srcElement;e.search(r.value,n.search)}),e.searchDelay)),function(t,r){e.search(t,r,n.search)}}},9799:(e,t,n)=>{var r=n(2813),a=n(378),o=n(433),i=n(2859),l=n(6332),s=n(8340),c=n(5981),d=n(8200),u=n(9212);e.exports=function(e,t,m){var p,f=this,g=n(6608)(f),h=n(4717)(f),b=n(3195)(f);p={start:function(){f.listClass="list",f.searchClass="search",f.sortClass="sort",f.page=1e4,f.i=1,f.items=[],f.visibleItems=[],f.matchingItems=[],f.searched=!1,f.filtered=!1,f.searchColumns=void 0,f.searchDelay=0,f.handlers={updated:[]},f.valueNames=[],f.utils={getByClass:a,extend:o,indexOf:i,events:l,toString:s,naturalSort:r,classes:c,getAttribute:d,toArray:u},f.utils.extend(f,t),f.listContainer="string"==typeof e?document.getElementById(e):e,f.listContainer&&(f.list=a(f.listContainer,f.listClass,!0),f.parse=n(8672)(f),f.templater=n(4939)(f),f.search=n(4647)(f),f.filter=n(4249)(f),f.sort=n(6343)(f),f.fuzzySearch=n(4844)(f,t.fuzzySearch),this.handlers(),this.items(),this.pagination(),f.update())},handlers:function(){for(var e in f.handlers)f[e]&&f.handlers.hasOwnProperty(e)&&f.on(e,f[e])},items:function(){f.parse(f.list),void 0!==m&&f.add(m)},pagination:function(){if(void 0!==t.pagination){!0===t.pagination&&(t.pagination=[{}]),void 0===t.pagination[0]&&(t.pagination=[t.pagination]);for(var e=0,n=t.pagination.length;e<n;e++)b(t.pagination[e])}}},this.reIndex=function(){f.items=[],f.visibleItems=[],f.matchingItems=[],f.searched=!1,f.filtered=!1,f.parse(f.list)},this.toJSON=function(){for(var e=[],t=0,n=f.items.length;t<n;t++)e.push(f.items[t].values());return e},this.add=function(e,t){if(0!==e.length){if(!t){var n=[],r=!1;void 0===e[0]&&(e=[e]);for(var a=0,o=e.length;a<o;a++){var i;r=f.items.length>f.page,i=new g(e[a],void 0,r),f.items.push(i),n.push(i)}return f.update(),n}h(e.slice(0),t)}},this.show=function(e,t){return this.i=e,this.page=t,f.update(),f},this.remove=function(e,t,n){for(var r=0,a=0,o=f.items.length;a<o;a++)f.items[a].values()[e]==t&&(f.templater.remove(f.items[a],n),f.items.splice(a,1),o--,a--,r++);return f.update(),r},this.get=function(e,t){for(var n=[],r=0,a=f.items.length;r<a;r++){var o=f.items[r];o.values()[e]==t&&n.push(o)}return n},this.size=function(){return f.items.length},this.clear=function(){return f.templater.clear(),f.items=[],f},this.on=function(e,t){return f.handlers[e].push(t),f},this.off=function(e,t){var n=f.handlers[e],r=i(n,t);return r>-1&&n.splice(r,1),f},this.trigger=function(e){for(var t=f.handlers[e].length;t--;)f.handlers[e][t](f);return f},this.reset={filter:function(){for(var e=f.items,t=e.length;t--;)e[t].filtered=!1;return f},search:function(){for(var e=f.items,t=e.length;t--;)e[t].found=!1;return f}},this.update=function(){var e=f.items,t=e.length;f.visibleItems=[],f.matchingItems=[],f.templater.clear();for(var n=0;n<t;n++)e[n].matching()&&f.matchingItems.length+1>=f.i&&f.visibleItems.length<f.page?(e[n].show(),f.visibleItems.push(e[n]),f.matchingItems.push(e[n])):e[n].matching()?(f.matchingItems.push(e[n]),e[n].hide()):e[n].hide();return f.trigger("updated"),f},p.start()}},6608:e=>{e.exports=function(e){return function(t,n,r){var a=this;this._values={},this.found=!1,this.filtered=!1,this.values=function(t,n){if(void 0===t)return a._values;for(var r in t)a._values[r]=t[r];!0!==n&&e.templater.set(a,a.values())},this.show=function(){e.templater.show(a)},this.hide=function(){e.templater.hide(a)},this.matching=function(){return e.filtered&&e.searched&&a.found&&a.filtered||e.filtered&&!e.searched&&a.filtered||!e.filtered&&e.searched&&a.found||!e.filtered&&!e.searched},this.visible=function(){return!(!a.elm||a.elm.parentNode!=e.list)},function(t,n,r){if(void 0===n)r?a.values(t,r):a.values(t);else{a.elm=n;var o=e.templater.get(a,t);a.values(o)}}(t,n,r)}}},3195:(e,t,n)=>{var r=n(5981),a=n(6332),o=n(9799);e.exports=function(e){var t=!1,n=function(n,a){if(e.page<1)return e.listContainer.style.display="none",void(t=!0);t&&(e.listContainer.style.display="block");var o,l=e.matchingItems.length,s=e.i,c=e.page,d=Math.ceil(l/c),u=Math.ceil(s/c),m=a.innerWindow||2,p=a.left||a.outerWindow||0,f=a.right||a.outerWindow||0;f=d-f,n.clear();for(var g=1;g<=d;g++){var h=u===g?"active":"";i.number(g,p,f,u,m)?(o=n.add({page:g,dotted:!1})[0],h&&r(o.elm).add(h),o.elm.firstChild.setAttribute("data-i",g),o.elm.firstChild.setAttribute("data-page",c)):i.dotted(n,g,p,f,u,m,n.size())&&(o=n.add({page:"...",dotted:!0})[0],r(o.elm).add("disabled"))}},i={number:function(e,t,n,r,a){return this.left(e,t)||this.right(e,n)||this.innerWindow(e,r,a)},left:function(e,t){return e<=t},right:function(e,t){return e>t},innerWindow:function(e,t,n){return e>=t-n&&e<=t+n},dotted:function(e,t,n,r,a,o,i){return this.dottedLeft(e,t,n,r,a,o)||this.dottedRight(e,t,n,r,a,o,i)},dottedLeft:function(e,t,n,r,a,o){return t==n+1&&!this.innerWindow(t,a,o)&&!this.right(t,r)},dottedRight:function(e,t,n,r,a,o,i){return!e.items[i-1].values().dotted&&t==r&&!this.innerWindow(t,a,o)&&!this.right(t,r)}};return function(t){var r=new o(e.listContainer.id,{listClass:t.paginationClass||"pagination",item:t.item||"<li><a class='page' href='#'></a></li>",valueNames:["page","dotted"],searchClass:"pagination-search-that-is-not-supposed-to-exist",sortClass:"pagination-sort-that-is-not-supposed-to-exist"});a.bind(r.listContainer,"click",(function(t){var n=t.target||t.srcElement,r=e.utils.getAttribute(n,"data-page"),a=e.utils.getAttribute(n,"data-i");a&&e.show((a-1)*r+1,r)})),e.on("updated",(function(){n(r,t)})),n(r,t)}}},8672:(e,t,n)=>{e.exports=function(e){var t=n(6608)(e),r=function(n,r){for(var a=0,o=n.length;a<o;a++)e.items.push(new t(r,n[a]))},a=function(t,n){var o=t.splice(0,50);r(o,n),t.length>0?setTimeout((function(){a(t,n)}),1):(e.update(),e.trigger("parseComplete"))};return e.handlers.parseComplete=e.handlers.parseComplete||[],function(){var t=function(e){for(var t=e.childNodes,n=[],r=0,a=t.length;r<a;r++)void 0===t[r].data&&n.push(t[r]);return n}(e.list),n=e.valueNames;e.indexAsync?a(t,n):r(t,n)}}},4647:e=>{e.exports=function(e){var t,n,r,a={resetList:function(){e.i=1,e.templater.clear(),r=void 0},setOptions:function(e){2==e.length&&e[1]instanceof Array?t=e[1]:2==e.length&&"function"==typeof e[1]?(t=void 0,r=e[1]):3==e.length?(t=e[1],r=e[2]):t=void 0},setColumns:function(){0!==e.items.length&&void 0===t&&(t=void 0===e.searchColumns?a.toArray(e.items[0].values()):e.searchColumns)},setSearchString:function(t){t=(t=e.utils.toString(t).toLowerCase()).replace(/[-[\]{}()*+?.,\\^$|#]/g,"\\$&"),n=t},toArray:function(e){var t=[];for(var n in e)t.push(n);return t}},o=function(o){return e.trigger("searchStart"),a.resetList(),a.setSearchString(o),a.setOptions(arguments),a.setColumns(),""===n?(e.reset.search(),e.searched=!1):(e.searched=!0,r?r(n,t):function(){for(var r,a=[],o=n;null!==(r=o.match(/"([^"]+)"/));)a.push(r[1]),o=o.substring(0,r.index)+o.substring(r.index+r[0].length);(o=o.trim()).length&&(a=a.concat(o.split(/\s+/)));for(var i=0,l=e.items.length;i<l;i++){var s=e.items[i];if(s.found=!1,a.length){for(var c=0,d=a.length;c<d;c++){for(var u=!1,m=0,p=t.length;m<p;m++){var f=s.values(),g=t[m];if(f.hasOwnProperty(g)&&void 0!==f[g]&&null!==f[g]&&-1!==("string"!=typeof f[g]?f[g].toString():f[g]).toLowerCase().indexOf(a[c])){u=!0;break}}if(!u)break}s.found=u}}}()),e.update(),e.trigger("searchComplete"),e.visibleItems};return e.handlers.searchStart=e.handlers.searchStart||[],e.handlers.searchComplete=e.handlers.searchComplete||[],e.utils.events.bind(e.utils.getByClass(e.listContainer,e.searchClass),"keyup",e.utils.events.debounce((function(t){var n=t.target||t.srcElement;""===n.value&&!e.searched||o(n.value)}),e.searchDelay)),e.utils.events.bind(e.utils.getByClass(e.listContainer,e.searchClass),"input",(function(e){""===(e.target||e.srcElement).value&&o("")})),o}},6343:e=>{e.exports=function(e){var t={els:void 0,clear:function(){for(var n=0,r=t.els.length;n<r;n++)e.utils.classes(t.els[n]).remove("asc"),e.utils.classes(t.els[n]).remove("desc")},getOrder:function(t){var n=e.utils.getAttribute(t,"data-order");return"asc"==n||"desc"==n?n:e.utils.classes(t).has("desc")?"asc":e.utils.classes(t).has("asc")?"desc":"asc"},getInSensitive:function(t,n){var r=e.utils.getAttribute(t,"data-insensitive");n.insensitive="false"!==r},setOrder:function(n){for(var r=0,a=t.els.length;r<a;r++){var o=t.els[r];if(e.utils.getAttribute(o,"data-sort")===n.valueName){var i=e.utils.getAttribute(o,"data-order");"asc"==i||"desc"==i?i==n.order&&e.utils.classes(o).add(n.order):e.utils.classes(o).add(n.order)}}}},n=function(){e.trigger("sortStart");var n={},r=arguments[0].currentTarget||arguments[0].srcElement||void 0;r?(n.valueName=e.utils.getAttribute(r,"data-sort"),t.getInSensitive(r,n),n.order=t.getOrder(r)):((n=arguments[1]||n).valueName=arguments[0],n.order=n.order||"asc",n.insensitive=void 0===n.insensitive||n.insensitive),t.clear(),t.setOrder(n);var a,o=n.sortFunction||e.sortFunction||null,i="desc"===n.order?-1:1;a=o?function(e,t){return o(e,t,n)*i}:function(t,r){var a=e.utils.naturalSort;return a.alphabet=e.alphabet||n.alphabet||void 0,!a.alphabet&&n.insensitive&&(a=e.utils.naturalSort.caseInsensitive),a(t.values()[n.valueName],r.values()[n.valueName])*i},e.items.sort(a),e.update(),e.trigger("sortComplete")};return e.handlers.sortStart=e.handlers.sortStart||[],e.handlers.sortComplete=e.handlers.sortComplete||[],t.els=e.utils.getByClass(e.listContainer,e.sortClass),e.utils.events.bind(t.els,"click",n),e.on("searchStart",t.clear),e.on("filterStart",t.clear),n}},4939:e=>{var t=function(e){var t,n=this,r=function(e){if("string"==typeof e){if(/<tr[\s>]/g.exec(e)){var t=document.createElement("tbody");return t.innerHTML=e,t.firstElementChild}if(-1!==e.indexOf("<")){var n=document.createElement("div");return n.innerHTML=e,n.firstElementChild}}},a=function(t,n,r){var a=void 0,o=function(t){for(var n=0,r=e.valueNames.length;n<r;n++){var a=e.valueNames[n];if(a.data){for(var o=a.data,i=0,l=o.length;i<l;i++)if(o[i]===t)return{data:t}}else{if(a.attr&&a.name&&a.name==t)return a;if(a===t)return t}}}(n);o&&(o.data?t.elm.setAttribute("data-"+o.data,r):o.attr&&o.name?(a=e.utils.getByClass(t.elm,o.name,!0))&&a.setAttribute(o.attr,r):(a=e.utils.getByClass(t.elm,o,!0))&&(a.innerHTML=r))};this.get=function(t,r){n.create(t);for(var a={},o=0,i=r.length;o<i;o++){var l=void 0,s=r[o];if(s.data)for(var c=0,d=s.data.length;c<d;c++)a[s.data[c]]=e.utils.getAttribute(t.elm,"data-"+s.data[c]);else s.attr&&s.name?(l=e.utils.getByClass(t.elm,s.name,!0),a[s.name]=l?e.utils.getAttribute(l,s.attr):""):(l=e.utils.getByClass(t.elm,s,!0),a[s]=l?l.innerHTML:"")}return a},this.set=function(e,t){if(!n.create(e))for(var r in t)t.hasOwnProperty(r)&&a(e,r,t[r])},this.create=function(e){return void 0===e.elm&&(e.elm=t(e.values()),n.set(e,e.values()),!0)},this.remove=function(t){t.elm.parentNode===e.list&&e.list.removeChild(t.elm)},this.show=function(t){n.create(t),e.list.appendChild(t.elm)},this.hide=function(t){void 0!==t.elm&&t.elm.parentNode===e.list&&e.list.removeChild(t.elm)},this.clear=function(){if(e.list.hasChildNodes())for(;e.list.childNodes.length>=1;)e.list.removeChild(e.list.firstChild)},function(){var n;if("function"!=typeof e.item){if(!(n="string"==typeof e.item?-1===e.item.indexOf("<")?document.getElementById(e.item):r(e.item):function(){for(var t=e.list.childNodes,n=0,r=t.length;n<r;n++)if(void 0===t[n].data)return t[n].cloneNode(!0)}()))throw new Error("The list needs to have at least one item on init otherwise you'll have to add a template.");n=function(t,n){var r=t.cloneNode(!0);r.removeAttribute("id");for(var a=0,o=n.length;a<o;a++){var i=void 0,l=n[a];if(l.data)for(var s=0,c=l.data.length;s<c;s++)r.setAttribute("data-"+l.data[s],"");else l.attr&&l.name?(i=e.utils.getByClass(r,l.name,!0))&&i.setAttribute(l.attr,""):(i=e.utils.getByClass(r,l,!0))&&(i.innerHTML="")}return r}(n,e.valueNames),t=function(){return n.cloneNode(!0)}}else t=function(t){var n=e.item(t);return r(n)}}()};e.exports=function(e){return new t(e)}},5981:(e,t,n)=>{var r=n(2859),a=/\s+/;function o(e){if(!e||!e.nodeType)throw new Error("A DOM element reference is required");this.el=e,this.list=e.classList}Object.prototype.toString,e.exports=function(e){return new o(e)},o.prototype.add=function(e){if(this.list)return this.list.add(e),this;var t=this.array();return~r(t,e)||t.push(e),this.el.className=t.join(" "),this},o.prototype.remove=function(e){if(this.list)return this.list.remove(e),this;var t=this.array(),n=r(t,e);return~n&&t.splice(n,1),this.el.className=t.join(" "),this},o.prototype.toggle=function(e,t){return this.list?(void 0!==t?t!==this.list.toggle(e,t)&&this.list.toggle(e):this.list.toggle(e),this):(void 0!==t?t?this.add(e):this.remove(e):this.has(e)?this.remove(e):this.add(e),this)},o.prototype.array=function(){var e=(this.el.getAttribute("class")||"").replace(/^\s+|\s+$/g,"").split(a);return""===e[0]&&e.shift(),e},o.prototype.has=o.prototype.contains=function(e){return this.list?this.list.contains(e):!!~r(this.array(),e)}},6332:(e,t,n)=>{var r=window.addEventListener?"addEventListener":"attachEvent",a=window.removeEventListener?"removeEventListener":"detachEvent",o="addEventListener"!==r?"on":"",i=n(9212);t.bind=function(e,t,n,a){for(var l=0,s=(e=i(e)).length;l<s;l++)e[l][r](o+t,n,a||!1)},t.unbind=function(e,t,n,r){for(var l=0,s=(e=i(e)).length;l<s;l++)e[l][a](o+t,n,r||!1)},t.debounce=function(e,t,n){var r;return t?function(){var a=this,o=arguments,i=n&&!r;clearTimeout(r),r=setTimeout((function(){r=null,n||e.apply(a,o)}),t),i&&e.apply(a,o)}:e}},433:e=>{e.exports=function(e){for(var t,n=Array.prototype.slice.call(arguments,1),r=0;t=n[r];r++)if(t)for(var a in t)e[a]=t[a];return e}},7481:e=>{e.exports=function(e,t,n){var r=n.location||0,a=n.distance||100,o=n.threshold||.4;if(t===e)return!0;if(t.length>32)return!1;var i=r,l=function(){var e,n={};for(e=0;e<t.length;e++)n[t.charAt(e)]=0;for(e=0;e<t.length;e++)n[t.charAt(e)]|=1<<t.length-e-1;return n}();function s(e,n){var r=e/t.length,o=Math.abs(i-n);return a?r+o/a:o?1:r}var c=o,d=e.indexOf(t,i);-1!=d&&(c=Math.min(s(0,d),c),-1!=(d=e.lastIndexOf(t,i+t.length))&&(c=Math.min(s(0,d),c)));var u,m,p=1<<t.length-1;d=-1;for(var f,g=t.length+e.length,h=0;h<t.length;h++){for(u=0,m=g;u<m;)s(h,i+m)<=c?u=m:g=m,m=Math.floor((g-u)/2+u);g=m;var b=Math.max(1,i-m+1),y=Math.min(i+m,e.length)+t.length,_=Array(y+2);_[y+1]=(1<<h)-1;for(var v=y;v>=b;v--){var k=l[e.charAt(v-1)];if(_[v]=0===h?(_[v+1]<<1|1)&k:(_[v+1]<<1|1)&k|(f[v+1]|f[v])<<1|1|f[v+1],_[v]&p){var E=s(h,v-1);if(E<=c){if(c=E,!((d=v-1)>i))break;b=Math.max(1,2*i-d)}}}if(s(h+1,i)>c)break;f=_}return!(d<0)}},8200:e=>{e.exports=function(e,t){var n=e.getAttribute&&e.getAttribute(t)||null;if(!n)for(var r=e.attributes,a=r.length,o=0;o<a;o++)void 0!==r[o]&&r[o].nodeName===t&&(n=r[o].nodeValue);return n}},378:e=>{e.exports=function(e,t,n,r){return(r=r||{}).test&&r.getElementsByClassName||!r.test&&document.getElementsByClassName?function(e,t,n){return n?e.getElementsByClassName(t)[0]:e.getElementsByClassName(t)}(e,t,n):r.test&&r.querySelector||!r.test&&document.querySelector?function(e,t,n){return t="."+t,n?e.querySelector(t):e.querySelectorAll(t)}(e,t,n):function(e,t,n){for(var r=[],a=e.getElementsByTagName("*"),o=a.length,i=new RegExp("(^|\\s)"+t+"(\\s|$)"),l=0,s=0;l<o;l++)if(i.test(a[l].className)){if(n)return a[l];r[s]=a[l],s++}return r}(e,t,n)}},2859:e=>{var t=[].indexOf;e.exports=function(e,n){if(t)return e.indexOf(n);for(var r=0,a=e.length;r<a;++r)if(e[r]===n)return r;return-1}},9212:e=>{e.exports=function(e){if(void 0===e)return[];if(null===e)return[null];if(e===window)return[window];if("string"==typeof e)return[e];if(function(e){return"[object Array]"===Object.prototype.toString.call(e)}(e))return e;if("number"!=typeof e.length)return[e];if("function"==typeof e&&e instanceof Function)return[e];for(var t=[],n=0,r=e.length;n<r;n++)(Object.prototype.hasOwnProperty.call(e,n)||n in e)&&t.push(e[n]);return t.length?t:[]}},8340:e=>{e.exports=function(e){return(e=null===(e=void 0===e?"":e)?"":e).toString()}},2813:e=>{"use strict";var t,n,r=0;function a(e){return e>=48&&e<=57}function o(e,t){for(var o=(e+="").length,i=(t+="").length,l=0,s=0;l<o&&s<i;){var c=e.charCodeAt(l),d=t.charCodeAt(s);if(a(c)){if(!a(d))return c-d;for(var u=l,m=s;48===c&&++u<o;)c=e.charCodeAt(u);for(;48===d&&++m<i;)d=t.charCodeAt(m);for(var p=u,f=m;p<o&&a(e.charCodeAt(p));)++p;for(;f<i&&a(t.charCodeAt(f));)++f;var g=p-u-f+m;if(g)return g;for(;u<p;)if(g=e.charCodeAt(u++)-t.charCodeAt(m++))return g;l=p,s=f}else{if(c!==d)return c<r&&d<r&&-1!==n[c]&&-1!==n[d]?n[c]-n[d]:c-d;++l,++s}}return l>=o&&s<i&&o>=i?-1:s>=i&&l<o&&i>=o?1:o-i}o.caseInsensitive=o.i=function(e,t){return o((""+e).toLowerCase(),(""+t).toLowerCase())},Object.defineProperties(o,{alphabet:{get:function(){return t},set:function(e){n=[];var a=0;if(t=e)for(;a<t.length;a++)n[t.charCodeAt(a)]=a;for(r=n.length,a=0;a<r;a++)void 0===n[a]&&(n[a]=-1)}}}),e.exports=o},6942:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=i(e,o(n)))}return e}function o(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=i(t,n));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.React,t=window.lodash,r=window.wp.domReady;var a=n.n(r);const o=window.wp.element,i=window.wp.i18n,l=window.wp.components,s=window.wp.coreData,c=window.wp.data;window.wp.blockEditor;var d=n(2774),u=n.n(d);const m=window.wp.apiFetch;var p=n.n(m);const f={headers:{"Content-Type":"application/json"},method:"GET"};n(2838);const g=window.wp.url,h=window.wp.primitives,b=((0,e.createElement)(h.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(h.Path,{d:"M15 4H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H9c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h6c.3 0 .5.2.5.5v12zm-4.5-.5h2V16h-2v1.5z"})),(0,e.createElement)(h.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(h.Path,{d:"M17 4H7c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H7c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v12zm-7.5-.5h4V16h-4v1.5z"})),(0,e.createElement)(h.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(h.Path,{d:"M20.5 16h-.7V8c0-1.1-.9-2-2-2H6.2c-1.1 0-2 .9-2 2v8h-.7c-.8 0-1.5.7-1.5 1.5h20c0-.8-.7-1.5-1.5-1.5zM5.7 8c0-.3.2-.5.5-.5h11.6c.3 0 .5.2.5.5v7.6H5.7V8z"})),window.wp.hooks),y="Mobile",_="Tablet",v="Desktop",k={},E=getComputedStyle(document.documentElement);k[y]=E.getPropertyValue("--wp--custom--breakpoint--sm")||"576px",k[_]=E.getPropertyValue("--wp--custom--breakpoint--md")||"768px",k[v]=E.getPropertyValue("--wp--custom--breakpoint--lg")||"1024px";const w={};Object.keys(k).map((e=>{w[e]=e===y?"":`@media (min-width: ${k[e]})`})),(0,i.__)("Mobile","content-blocks-builder"),w[y],(0,i.__)("Tablet","content-blocks-builder"),w[_],(0,i.__)("Desktop","content-blocks-builder"),w[v];const x=(e,t="log")=>{e&&"development"===window?.BBLOG?.environmentType&&(["log","info","warn","error","debug","dir","table"].includes(t)?console[t](e):console.log(e))},C=(0,o.createContext)();class S{constructor(e=""){e||(e=window.location.href),this.parsedURL=new URL(e)}get(e,t=null){return this.parsedURL.searchParams.get(e)||t}set(e,t,n=!0){this.parsedURL.searchParams.set(e,t),n&&history.pushState&&history.pushState({},null,this.parsedURL.href)}delete(e,t=!0){this.parsedURL.searchParams.delete(e),t&&history.pushState&&history.pushState({},null,this.parsedURL.href)}reload(){history?.go?history.go():window.location.reload()}getHref(){return this.parsedURL.href}}function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},T.apply(this,arguments)}function N(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}var F=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,A=N((function(e){return F.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),L=function(){function e(e){var t=this;this._insertTag=function(e){var n;n=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{n.insertRule(e,n.cssRules.length)}catch(e){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),P=Math.abs,O=String.fromCharCode,R=Object.assign;function M(e){return e.trim()}function D(e,t,n){return e.replace(t,n)}function B(e,t){return e.indexOf(t)}function I(e,t){return 0|e.charCodeAt(t)}function z(e,t,n){return e.slice(t,n)}function U(e){return e.length}function H(e){return e.length}function $(e,t){return t.push(e),e}var V=1,G=1,j=0,W=0,q=0,Y="";function K(e,t,n,r,a,o,i){return{value:e,root:t,parent:n,type:r,props:a,children:o,line:V,column:G,length:i,return:""}}function Q(e,t){return R(K("",null,null,"",null,null,0),e,{length:-e.length},t)}function Z(){return q=W>0?I(Y,--W):0,G--,10===q&&(G=1,V--),q}function X(){return q=W<j?I(Y,W++):0,G++,10===q&&(G=1,V++),q}function J(){return I(Y,W)}function ee(){return W}function te(e,t){return z(Y,e,t)}function ne(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function re(e){return V=G=1,j=U(Y=e),W=0,[]}function ae(e){return Y="",e}function oe(e){return M(te(W-1,se(91===e?e+2:40===e?e+1:e)))}function ie(e){for(;(q=J())&&q<33;)X();return ne(e)>2||ne(q)>3?"":" "}function le(e,t){for(;--t&&X()&&!(q<48||q>102||q>57&&q<65||q>70&&q<97););return te(e,ee()+(t<6&&32==J()&&32==X()))}function se(e){for(;X();)switch(q){case e:return W;case 34:case 39:34!==e&&39!==e&&se(q);break;case 40:41===e&&se(e);break;case 92:X()}return W}function ce(e,t){for(;X()&&e+q!==57&&(e+q!==84||47!==J()););return"/*"+te(t,W-1)+"*"+O(47===e?e:X())}function de(e){for(;!ne(J());)X();return te(e,W)}var ue="-ms-",me="-moz-",pe="-webkit-",fe="comm",ge="rule",he="decl",be="@keyframes";function ye(e,t){for(var n="",r=H(e),a=0;a<r;a++)n+=t(e[a],a,e,t)||"";return n}function _e(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case he:return e.return=e.return||e.value;case fe:return"";case be:return e.return=e.value+"{"+ye(e.children,r)+"}";case ge:e.value=e.props.join(",")}return U(n=ye(e.children,r))?e.return=e.value+"{"+n+"}":""}function ve(e){return ae(ke("",null,null,null,[""],e=re(e),0,[0],e))}function ke(e,t,n,r,a,o,i,l,s){for(var c=0,d=0,u=i,m=0,p=0,f=0,g=1,h=1,b=1,y=0,_="",v=a,k=o,E=r,w=_;h;)switch(f=y,y=X()){case 40:if(108!=f&&58==I(w,u-1)){-1!=B(w+=D(oe(y),"&","&\f"),"&\f")&&(b=-1);break}case 34:case 39:case 91:w+=oe(y);break;case 9:case 10:case 13:case 32:w+=ie(f);break;case 92:w+=le(ee()-1,7);continue;case 47:switch(J()){case 42:case 47:$(we(ce(X(),ee()),t,n),s);break;default:w+="/"}break;case 123*g:l[c++]=U(w)*b;case 125*g:case 59:case 0:switch(y){case 0:case 125:h=0;case 59+d:-1==b&&(w=D(w,/\f/g,"")),p>0&&U(w)-u&&$(p>32?xe(w+";",r,n,u-1):xe(D(w," ","")+";",r,n,u-2),s);break;case 59:w+=";";default:if($(E=Ee(w,t,n,c,d,a,l,_,v=[],k=[],u),o),123===y)if(0===d)ke(w,t,E,E,v,o,u,l,k);else switch(99===m&&110===I(w,3)?100:m){case 100:case 108:case 109:case 115:ke(e,E,E,r&&$(Ee(e,E,E,0,0,a,l,_,a,v=[],u),k),a,k,u,l,r?v:k);break;default:ke(w,E,E,E,[""],k,0,l,k)}}c=d=p=0,g=b=1,_=w="",u=i;break;case 58:u=1+U(w),p=f;default:if(g<1)if(123==y)--g;else if(125==y&&0==g++&&125==Z())continue;switch(w+=O(y),y*g){case 38:b=d>0?1:(w+="\f",-1);break;case 44:l[c++]=(U(w)-1)*b,b=1;break;case 64:45===J()&&(w+=oe(X())),m=J(),d=u=U(_=w+=de(ee())),y++;break;case 45:45===f&&2==U(w)&&(g=0)}}return o}function Ee(e,t,n,r,a,o,i,l,s,c,d){for(var u=a-1,m=0===a?o:[""],p=H(m),f=0,g=0,h=0;f<r;++f)for(var b=0,y=z(e,u+1,u=P(g=i[f])),_=e;b<p;++b)(_=M(g>0?m[b]+" "+y:D(y,/&\f/g,m[b])))&&(s[h++]=_);return K(e,t,n,0===a?ge:l,s,c,d)}function we(e,t,n){return K(e,t,n,fe,O(q),z(e,2,-2),0)}function xe(e,t,n,r){return K(e,t,n,he,z(e,0,r),z(e,r+1,-1),r)}var Ce=function(e,t,n){for(var r=0,a=0;r=a,a=J(),38===r&&12===a&&(t[n]=1),!ne(a);)X();return te(e,W)},Se=new WeakMap,Te=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||Se.get(n))&&!r){Se.set(e,!0);for(var a=[],o=function(e,t){return ae(function(e,t){var n=-1,r=44;do{switch(ne(r)){case 0:38===r&&12===J()&&(t[n]=1),e[n]+=Ce(W-1,t,n);break;case 2:e[n]+=oe(r);break;case 4:if(44===r){e[++n]=58===J()?"&\f":"",t[n]=e[n].length;break}default:e[n]+=O(r)}}while(r=X());return e}(re(e),t))}(t,a),i=n.props,l=0,s=0;l<o.length;l++)for(var c=0;c<i.length;c++,s++)e.props[s]=a[l]?o[l].replace(/&\f/g,i[c]):i[c]+" "+o[l]}}},Ne=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function Fe(e,t){switch(function(e,t){return 45^I(e,0)?(((t<<2^I(e,0))<<2^I(e,1))<<2^I(e,2))<<2^I(e,3):0}(e,t)){case 5103:return pe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return pe+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return pe+e+me+e+ue+e+e;case 6828:case 4268:return pe+e+ue+e+e;case 6165:return pe+e+ue+"flex-"+e+e;case 5187:return pe+e+D(e,/(\w+).+(:[^]+)/,pe+"box-$1$2"+ue+"flex-$1$2")+e;case 5443:return pe+e+ue+"flex-item-"+D(e,/flex-|-self/,"")+e;case 4675:return pe+e+ue+"flex-line-pack"+D(e,/align-content|flex-|-self/,"")+e;case 5548:return pe+e+ue+D(e,"shrink","negative")+e;case 5292:return pe+e+ue+D(e,"basis","preferred-size")+e;case 6060:return pe+"box-"+D(e,"-grow","")+pe+e+ue+D(e,"grow","positive")+e;case 4554:return pe+D(e,/([^-])(transform)/g,"$1"+pe+"$2")+e;case 6187:return D(D(D(e,/(zoom-|grab)/,pe+"$1"),/(image-set)/,pe+"$1"),e,"")+e;case 5495:case 3959:return D(e,/(image-set\([^]*)/,pe+"$1$`$1");case 4968:return D(D(e,/(.+:)(flex-)?(.*)/,pe+"box-pack:$3"+ue+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+pe+e+e;case 4095:case 3583:case 4068:case 2532:return D(e,/(.+)-inline(.+)/,pe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(U(e)-1-t>6)switch(I(e,t+1)){case 109:if(45!==I(e,t+4))break;case 102:return D(e,/(.+:)(.+)-([^]+)/,"$1"+pe+"$2-$3$1"+me+(108==I(e,t+3)?"$3":"$2-$3"))+e;case 115:return~B(e,"stretch")?Fe(D(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==I(e,t+1))break;case 6444:switch(I(e,U(e)-3-(~B(e,"!important")&&10))){case 107:return D(e,":",":"+pe)+e;case 101:return D(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+pe+(45===I(e,14)?"inline-":"")+"box$3$1"+pe+"$2$3$1"+ue+"$2box$3")+e}break;case 5936:switch(I(e,t+11)){case 114:return pe+e+ue+D(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return pe+e+ue+D(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return pe+e+ue+D(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return pe+e+ue+e+e}return e}var Ae=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case he:e.return=Fe(e.value,e.length);break;case be:return ye([Q(e,{value:D(e.value,"@","@"+pe)})],r);case ge:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=/(::plac\w+|:read-\w+)/.exec(e))?e[0]:e}(t)){case":read-only":case":read-write":return ye([Q(e,{props:[D(t,/:(read-\w+)/,":-moz-$1")]})],r);case"::placeholder":return ye([Q(e,{props:[D(t,/:(plac\w+)/,":"+pe+"input-$1")]}),Q(e,{props:[D(t,/:(plac\w+)/,":-moz-$1")]}),Q(e,{props:[D(t,/:(plac\w+)/,ue+"input-$1")]})],r)}return""}))}}],Le=function(e){var t=e.key;if("css"===t){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var r,a,o=e.stylisPlugins||Ae,i={},l=[];r=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),n=1;n<t.length;n++)i[t[n]]=!0;l.push(e)}));var s,c,d,u,m=[_e,(u=function(e){s.insert(e)},function(e){e.root||(e=e.return)&&u(e)})],p=(c=[Te,Ne].concat(o,m),d=H(c),function(e,t,n,r){for(var a="",o=0;o<d;o++)a+=c[o](e,t,n,r)||"";return a});a=function(e,t,n,r){s=n,ye(ve(e?e+"{"+t.styles+"}":t.styles),p),r&&(f.inserted[t.name]=!0)};var f={key:t,sheet:new L({key:t,container:r,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:a};return f.sheet.hydrate(l),f},Pe={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Oe=/[A-Z]|^ms/g,Re=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Me=function(e){return 45===e.charCodeAt(1)},De=function(e){return null!=e&&"boolean"!=typeof e},Be=N((function(e){return Me(e)?e:e.replace(Oe,"-$&").toLowerCase()})),Ie=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(Re,(function(e,t,n){return Ue={name:t,styles:n,next:Ue},t}))}return 1===Pe[e]||Me(e)||"number"!=typeof t||0===t?t:t+"px"};function ze(e,t,n){if(null==n)return"";if(void 0!==n.__emotion_styles)return n;switch(typeof n){case"boolean":return"";case"object":if(1===n.anim)return Ue={name:n.name,styles:n.styles,next:Ue},n.name;if(void 0!==n.styles){var r=n.next;if(void 0!==r)for(;void 0!==r;)Ue={name:r.name,styles:r.styles,next:Ue},r=r.next;return n.styles+";"}return function(e,t,n){var r="";if(Array.isArray(n))for(var a=0;a<n.length;a++)r+=ze(e,t,n[a])+";";else for(var o in n){var i=n[o];if("object"!=typeof i)null!=t&&void 0!==t[i]?r+=o+"{"+t[i]+"}":De(i)&&(r+=Be(o)+":"+Ie(o,i)+";");else if(!Array.isArray(i)||"string"!=typeof i[0]||null!=t&&void 0!==t[i[0]]){var l=ze(e,t,i);switch(o){case"animation":case"animationName":r+=Be(o)+":"+l+";";break;default:r+=o+"{"+l+"}"}}else for(var s=0;s<i.length;s++)De(i[s])&&(r+=Be(o)+":"+Ie(o,i[s])+";")}return r}(e,t,n);case"function":if(void 0!==e){var a=Ue,o=n(e);return Ue=a,ze(e,t,o)}}if(null==t)return n;var i=t[n];return void 0!==i?i:n}var Ue,He=/label:\s*([^\s;\n{]+)\s*(;|$)/g,$e=!!e.useInsertionEffect&&e.useInsertionEffect,Ve=$e||function(e){return e()},Ge=($e||e.useLayoutEffect,e.createContext("undefined"!=typeof HTMLElement?Le({key:"css"}):null));Ge.Provider;var je=e.createContext({}),We=function(e,t,n){var r=e.key+"-"+t.name;!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles)},qe=A,Ye=function(e){return"theme"!==e},Ke=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?qe:Ye},Qe=function(e,t,n){var r;if(t){var a=t.shouldForwardProp;r=e.__emotion_forwardProp&&a?function(t){return e.__emotion_forwardProp(t)&&a(t)}:a}return"function"!=typeof r&&n&&(r=e.__emotion_forwardProp),r},Ze=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return We(t,n,r),Ve((function(){return function(e,t,n){We(e,t,n);var r=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var a=t;do{e.insert(t===a?"."+r:"",a,e.sheet,!0),a=a.next}while(void 0!==a)}}(t,n,r)})),null},Xe=function t(n,r){var a,o,i=n.__emotion_real===n,l=i&&n.__emotion_base||n;void 0!==r&&(a=r.label,o=r.target);var s=Qe(n,r,i),c=s||Ke(l),d=!c("as");return function(){var u=arguments,m=i&&void 0!==n.__emotion_styles?n.__emotion_styles.slice(0):[];if(void 0!==a&&m.push("label:"+a+";"),null==u[0]||void 0===u[0].raw)m.push.apply(m,u);else{m.push(u[0][0]);for(var p=u.length,f=1;f<p;f++)m.push(u[f],u[0][f])}var g,h=(g=function(t,n,r){var a,i,u,p,f=d&&t.as||l,g="",h=[],b=t;if(null==t.theme){for(var y in b={},t)b[y]=t[y];b.theme=e.useContext(je)}"string"==typeof t.className?(a=n.registered,i=h,u=t.className,p="",u.split(" ").forEach((function(e){void 0!==a[e]?i.push(a[e]+";"):p+=e+" "})),g=p):null!=t.className&&(g=t.className+" ");var _=function(e,t,n){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,a="";Ue=void 0;var o=e[0];null==o||void 0===o.raw?(r=!1,a+=ze(n,t,o)):a+=o[0];for(var i=1;i<e.length;i++)a+=ze(n,t,e[i]),r&&(a+=o[i]);He.lastIndex=0;for(var l,s="";null!==(l=He.exec(a));)s+="-"+l[1];var c=function(e){for(var t,n=0,r=0,a=e.length;a>=4;++r,a-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(a){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)}(a)+s;return{name:c,styles:a,next:Ue}}(m.concat(h),n.registered,b);g+=n.key+"-"+_.name,void 0!==o&&(g+=" "+o);var v=d&&void 0===s?Ke(f):c,k={};for(var E in t)d&&"as"===E||v(E)&&(k[E]=t[E]);return k.className=g,k.ref=r,e.createElement(e.Fragment,null,e.createElement(Ze,{cache:n,serialized:_,isStringTag:"string"==typeof f}),e.createElement(f,k))},(0,e.forwardRef)((function(t,n){var r=(0,e.useContext)(Ge);return g(t,r,n)})));return h.displayName=void 0!==a?a:"Styled("+("string"==typeof l?l:l.displayName||l.name||"Component")+")",h.defaultProps=n.defaultProps,h.__emotion_real=h,h.__emotion_base=l,h.__emotion_styles=m,h.__emotion_forwardProp=s,Object.defineProperty(h,"toString",{value:function(){return"."+o}}),h.withComponent=function(e,n){return t(e,T({},r,n,{shouldForwardProp:Qe(h,n,!0)})).apply(void 0,m)},h}}.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){Xe[e]=Xe(e)}));var Je=n(6942),et=n.n(Je);Xe(l.BaseControl)`
  margin-bottom: 8px !important;

  &.is-bold {
    font-weight: 600;
  }

  &.h3 {
    font-size: 13px;
    font-weight: bold;
  }

  .components-base-control__field {
    display: flex;
    align-items: center;
    margin-bottom: 0;
  }

  .components-base-control__label {
    margin-bottom: 0;
  }

  div.components-toolbar {
    min-height: 30px;
    margin-bottom: 0;
    border: 0;

    &:first-of-type {
      margin-left: 10px;
    }

    .components-button {
      min-width: 36px;
      height: 30px;

      &.has-icon {
        min-width: 48px;
      }
    }
  }
`,Xe.div`
  padding-bottom: 4px;
  margin-bottom: 8px;
  border-bottom: 1px solid #ddd;

  > * {
    margin-bottom: 8px !important;
  }

  .repeater-group__item__actions {
    display: flex;
    align-items: center;
    gap: 0.2em;

    > *:first-of-type {
      margin-right: auto;
    }
  }
`,Xe(l.PanelBody)`
  margin-right: -16px;
  margin-left: -16px;
`;const tt=Xe.div`
  box-sizing: border-box;
  width: 100%;

  .group-control__body {
    gap: 4px;

    > * {
      max-width: 100%;
    }
  }

  &.is-2-columns {
    .group-control__body {
      > * {
        flex-basis: calc(50% - 4px);

        &:nth-of-type(n + 3) {
          margin-top: 8px !important;
        }
      }
    }
  }

  &.is-3-columns {
    .group-control__body {
      > * {
        flex-basis: calc(33.33333% - 4px);

        &:nth-of-type(n + 4) {
          margin-top: 8px !important;
        }
      }
    }
  }

  &.is-4-columns {
    .group-control__body {
      > * {
        flex-basis: calc(25% - 4px);

        &:nth-of-type(n + 5) {
          margin-top: 8px !important;
        }
      }
    }
  }
`,nt=Xe(l.Flex)`
  padding-bottom: 8px;

  .label-control {
    margin-bottom: 0 !important;
  }
`,rt=Xe(l.Flex)`
  flex-wrap: wrap;
  width: auto;
  gap: 4px;

  > * {
    flex: 1 0 auto;
    margin: 0 !important;
  }
`,at=(0,e.createElement)(h.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(h.Path,{d:"M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"})),ot=(0,e.createElement)(h.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(h.Path,{d:"M17.031 4.703 15.576 4l-1.56 3H14v.03l-2.324 4.47H9.5V13h1.396l-1.502 2.889h-.95a3.694 3.694 0 0 1 0-7.389H10V7H8.444a5.194 5.194 0 1 0 0 10.389h.17L7.5 19.53l1.416.719L15.049 8.5h.507a3.694 3.694 0 0 1 0 7.39H14v1.5h1.556a5.194 5.194 0 0 0 .273-10.383l1.202-2.304Z"}));function it({isLinked:t,...n}){const r=t?(0,i.__)("Unlink Sides","content-blocks-builder"):(0,i.__)("Link Sides","content-blocks-builder");return(0,e.createElement)(l.Tooltip,{text:r},(0,e.createElement)("span",null,(0,e.createElement)(l.Button,{...n,className:"component-group-control__linked-button",variant:t?"primary":"secondary",size:"small",icon:t?at:ot,iconSize:16,"aria-label":r})))}const lt=({values:e,fields:n})=>{const r=n.map((({name:t})=>{var n;return null!==(n=e[t])&&void 0!==n?n:void 0}));return(a=r.filter((e=>e))).sort(((e,n)=>(0,t.isObject)(e)?a.filter((t=>u()(t,e))).length-a.filter((e=>u()(e,n))).length:a.filter((t=>t===e)).length-a.filter((e=>e===n)).length)).pop();var a},st=({values:t,fields:n,renderControl:r,onChange:a,normalizeValue:i})=>n.map((l=>{var s;const{name:c}=l;return(0,e.createElement)(o.Fragment,{key:`group-control-${c}`},r({value:null!==(s=t[c])&&void 0!==s?s:void 0,onChange:(d=c,e=>{e=i({side:d,value:e}),a({...t,[d]:e})}),fields:n,values:t,...l}));var d})),ct=({values:e,fields:t,renderControl:n,renderAllControl:r=null,onChange:a,normalizeValue:o,...i})=>(r||(r=n),r({value:lt({values:e,fields:t}),fields:t,values:e,onChange:n=>{n=o({side:"all",value:n});let r={...e};t.forEach((({name:e})=>{r={...r,[e]:n}})),a(r)},...i})),dt=({label:n,fields:r=[],values:a={},renderLabel:i=t.noop,renderControl:l=t.noop,onChange:s=t.noop,normalizeValue:c=(({side:e,value:t})=>t),isLinkedGroup:d=!0,getInitialLinkedState:u=t.noop,className:m,columns:p,...f})=>{const g={fields:r,values:a,renderControl:l,onChange:s,normalizeValue:c,...f},[h,b]=d?function(e){const[t,n]=(0,o.useState)(e);return(0,o.useEffect)((()=>n(e)),[e]),[t,n]}(u(a)):[!1,t.noop];return(0,e.createElement)(tt,{className:et()("group-control",m,{[`is-${p}-columns`]:p}),...f},(0,e.createElement)(nt,{className:"group-control__header"},i({label:n,isLinkedGroup:d,...f}),d&&(0,e.createElement)(it,{onClick:()=>{b(!h)},isLinked:h})),(0,e.createElement)(rt,{className:"group-control__body"},h&&(0,e.createElement)(ct,{...g}),!h&&(0,e.createElement)(st,{...g})))};Xe(dt)`
  .group-control__body {
    > *:nth-of-type(3) {
      order: 2;
    }

    .components-input-control__input {
      height: 40px;
    }
  }
`,Xe.div`
  > .block-editor-tools-panel-color-gradient-settings__item {
    margin: 0 !important;
    border-right: 1px solid #0000001a;
    border-bottom: 1px solid #0000001a;
    border-left: 1px solid #0000001a;

    &:first-of-type {
      border-top: 1px solid #0000001a;
    }
  }

  .block-editor-tools-panel-color-gradient-settings__dropdown {
    display: block;
  }

  &.is-inner-control {
    > * {
      margin: 0 !important;
      border: 0 !important;
    }

    .block-editor-tools-panel-color-gradient-settings__dropdown {
      display: flex;
      align-items: center;
      align-self: flex-end;
      height: 32px;
      border: 1px solid #757575;

      > button {
        height: 100%;
        padding: 4px;
      }
    }
  }
`,Xe(dt)`
  /* .block-editor-panel-color-gradient-settings__item {
    padding: 8px !important;
  } */

  .components-toggle-control {
    > * {
      margin-bottom: 0;
    }
  }
`,Xe.div`
  .shadow-list__title {
    margin-bottom: 8px;
  }

  .shadow-list {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 12px;

    margin-bottom: 16px;
  }

  .shadow-item {
    height: 30px;
    cursor: pointer;
    background: #fff;
    border: 1px solid #ddd;

    &.is-selected {
      background: #ddd;
    }
  }
`,Xe(dt)`
  .components-base-control__field {
    margin-bottom: 0;
  }
`;const ut=window.wp.notices,mt=(Xe.div`
  .svg-input-control {
    &__label {
      font-size: 11px;
      font-weight: 500;
      text-transform: uppercase;
    }

    &__actions {
      display: flex;
      gap: 8px;
      margin: 6px 0;
    }

    &__input {
      margin-bottom: 4px;

      > * {
        margin-bottom: 0;
      }
    }
  }
`,Xe.div`
  .settings-section__description {
    margin: 1em 0;
    font-size: 1.1em;
    font-weight: 500;
  }

  .meta-box-sortables {
    @media (min-width: 1080px) {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      align-items: start;
      gap: 1rem;

      .postbox {
        margin-bottom: 0;
      }
    }
  }
`),pt=({title:t,description:n,children:r})=>(0,e.createElement)(mt,{className:"settings-section"},t&&(0,e.createElement)("h3",{className:"settings-section__title"},t),n&&(0,e.createElement)("p",{className:"settings-section__description"},n),(0,e.createElement)("div",{className:"meta-box-sortables"},r)),ft=Xe.div`
  &.is-full-row {
    grid-column: span 2;
  }

  &.is-header-hidden {
    .inside {
      padding: 12px;
    }

    @media (min-width: 1080px) {
      margin: 0;
    }
  }

  .postbox-header {
    .hndle {
      cursor: pointer;
    }
  }

  .inside {
    margin: 0;
  }

  .postbox-footer {
    padding: 12px;
    border-top: 1px solid #f0f0f1;
  }

  &.closed .postbox-footer {
    display: none;
  }

  .components-notice {
    width: 100%;
    padding-top: 0;
    padding-bottom: 0;
    margin-top: 8px;
    margin-right: 0;
    margin-left: 0;
    box-sizing: border-box;
  }
`,gt=Xe.div`
  padding: 12px 16px;
  margin-top: 12px;
  background-color: #fafafa;
  border: 1px solid #ebebeb;
  border-radius: 2px;

  .fieldset__label {
    margin-bottom: 12px;
  }

  .fieldset__list {
    margin-bottom: 0;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    column-gap: 1rem;
  }

  .file-upload {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1em;
  }

  .file-preview {
    display: flex;
    align-items: center;
    gap: 0.5em;

    .icon {
      width: 20px;
      height: 20px;
    }
  }
`,ht=({title:n,settingsName:r="boldblocks-settings",children:a,renderFooter:i=null,isFullRow:l=!1,isHeaderHidden:s=!1,className:c,initialOpen:d=!0})=>{const u=`${r}-${(0,g.cleanForSlug)(n)}`,[m,p]=((e,n=null)=>{const[r,a]=(0,o.useState)((()=>{try{const r=JSON.parse(localStorage.getItem(e));return(0,t.isNil)(r)?n:r}catch(e){return x(e,"error"),n}}));return[r,t=>{a(t),localStorage.setItem(e,JSON.stringify(t))}]})(u,!d);return(0,e.createElement)(ft,{className:et()("postbox",c,{closed:m,"is-full-row":l,"is-header-hidden":s})},!s&&(0,e.createElement)("div",{className:"postbox-header","aria-expanded":m?"false":"true",tabIndex:-1,onClick:e=>{e.preventDefault(),p(!m)}},(0,e.createElement)("h2",{className:"hndle"},n),(0,e.createElement)("div",{className:"handle-actions hide-if-no-js"},(0,e.createElement)("button",{type:"button",className:"handlediv","aria-expanded":m?"false":"true",onClick:e=>{e.preventDefault(),p(!m)}},(0,e.createElement)("span",{className:"screen-reader-text"},"Toggle panel: ",n),(0,e.createElement)("span",{className:"toggle-indicator","aria-hidden":m?"true":"false"})))),(0,e.createElement)("div",{className:"inside"},a),(0,t.isFunction)(i)&&(0,e.createElement)("div",{className:"postbox-footer"},i()))};window.wp.blocks,Xe.div`
  flex-wrap: wrap;

  .block-editor-block-variation-picker__variations > li {
    margin-right: 8px;
  }

  .block-editor-block-variation-picker.has-many-variations
    .components-placeholder__fieldset {
    max-width: 100%;
  }

  .placeholder__footer {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    flex-basis: 100%;
    padding: 1em;
    background-color: #fff;
    box-shadow: inset 0 -1px 0 1px #1e1e1e;
  }
`,n(9799),window.wp.keycodes,Xe(l.Modal)`
  // Modal content
  .components-modal__content {
    display: flex;
    flex-direction: column;
    padding: 0 20px 20px;
    margin-top: 50px;
    overflow: hidden;

    &::before {
      margin-bottom: 20px;
    }

    > :not(.components-modal__header, .icon-submit) {
      max-height: 100%;
      display: flex;
      flex-direction: column;
      flex: 1;
      overflow: auto;
    }
  }

  // Modal header
  .components-modal__header {
    height: 50px;
    padding: 0 20px;
  }

  .icon-library-wrapper {
    flex: 1;
    overflow: hidden;
    content-visibility: hidden;

    &.is-loading,
    &.show-library {
      content-visibility: visible;
    }
  }

  .icon-filter {
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 20px;

    &__search {
      min-width: 220px;
    }

    .keywords {
      display: flex;
      flex-wrap: wrap;
      margin: 0;
      font-size: 14px;

      > li {
        margin: 0;
      }

      .keyword-label {
        font-weight: 500;
      }

      span {
        display: block;
        padding: 3px 5px;
      }

      .keyword:not(.is-selected) {
        color: var(--wp-admin-theme-color, #007cba);
        cursor: pointer;
      }

      .is-selected {
        font-weight: 500;
        pointer-events: none;
      }
    }

    @media (max-width: 781px) {
      flex-wrap: wrap;

      &__search {
        width: 100%;
      }

      &__keywords {
        margin-top: 8px;
        margin-left: 0 !important;
      }
    }
  }

  .components-search-control > * {
    margin-bottom: 0;
  }

  // Icons list
  .icon-library {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(9em, 1fr));
    gap: 0.5em;
    max-height: calc(100% - 110px);
    overflow: auto;

    /* box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.4); */

    svg {
      width: 4em;
      height: 4em;
    }

    .title {
      max-height: 1.7em;
      font-size: 0.85em;
      line-height: 1.5;
      text-align: center;
      word-break: break-word;
    }

    > * {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1.5em 1em;
      overflow: hidden;
      border: 1px solid #ddd;
      border-radius: 4px;
      cursor: pointer;
    }

    .selected {
      background-color: #ccc;
    }

    &:empty::before {
      display: block;
      width: 100%;
      padding: 2rem;
      text-align: center;
      content: attr(data-empty);
      border: 1px solid #ddd;
      border-radius: 4px;
    }
  }

  // Pagination
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 8px 0;
    font-size: 1.5em;

    > li {
      margin: 0 5px;

      &:only-child {
        display: none;
      }

      &.active {
        a {
          color: #3c434a;
        }
      }

      &:not(.active) {
        a {
          cursor: pointer;
        }
      }
    }

    a {
      display: block;
      padding: 5px 10px;
    }
  }
`,Xe.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1rem 0 0;
  font-size: 1.5em;

  > li {
    margin-bottom: 0;

    > * {
      display: block;
      padding: 0.5rem;
    }

    > a {
      cursor: pointer;

      &:focus {
        box-shadow: none;
        outline: 1px solid transparent;
      }
      &:focus-visible {
        box-shadow: 0 0 0 1px #2271b1;
        outline: 1px solid transparent;
      }
    }
  }
`;const bt=Xe(ht)`
  border-top: 0;

  h1 {
    padding: 0;
    margin: 10px 0;
    font-size: 2.5em;
  }

  .welcome {
    &__description {
      ul,
      p {
        font-size: 1.2em;
      }

      ul {
        padding-left: 20px;
        list-style: disc;
      }
    }
  }

  .video-tutorials {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 12px;

    @media (min-width: 782px) {
      // $break-medium
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (min-width: 1280px) {
      // $break-wide
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    &__item {
      border: 1px solid #ddd;

      &__video {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 56.25%;
        margin: 0;

        iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }

      &__desc {
        padding: 8px 10px 10px;
        font-size: 1.2em;
        font-weight: 500;
      }
    }
  }

  h2.view-playlists {
    margin-top: 1rem;
  }
`,yt=()=>{const{Docs:{loading:t,docs:n}={}}=(0,o.useContext)(C);return(0,e.createElement)(bt,{isHeaderHidden:!0,isFullRow:!0,className:"welcome-widget welcome"},(0,e.createElement)("h1",null,(0,i.__)("Welcome to Content Blocks Builder","content-blocks-builder")),(0,e.createElement)("div",{className:"welcome__description"},(0,e.createElement)("p",null,(0,i.__)("Content Blocks Builder (CBB) power-up the default Gutenberg Block Editor to help the process of creating sites with the new WordPress much easier and more enjoyable.","content-blocks-builder")),(0,e.createElement)("hr",null),(0,e.createElement)("p",null,(0,i.__)("Thank you for choosing Content Blocks Builder (CBB) for your website. If this is your first time with CBB, we recommend learning about it first by visiting the promotion site or watching the video tutorials below.","content-blocks-builder")),(0,e.createElement)("h2",null,(0,i.__)("Here is a list of starting points for you to get started creating with it.","content-blocks-builder")),(0,e.createElement)("ul",null,(0,e.createElement)("li",null,(0,i.__)("Manage custom blocks: ","content-blocks-builder"),(0,e.createElement)(l.ExternalLink,{href:(0,g.addQueryArgs)("edit.php?post_type=boldblocks_block")},(0,i.__)("All custom blocks","content-blocks-builder")),", ",(0,e.createElement)(l.ExternalLink,{href:(0,g.addQueryArgs)("post-new.php?post_type=boldblocks_block")},(0,i.__)("Create new block","content-blocks-builder")),", ",(0,e.createElement)(l.ExternalLink,{href:(0,g.addQueryArgs)("edit.php?post_type=boldblocks_block&page=cbb-block-library")},(0,i.__)("Block Library","content-blocks-builder")),", ",(0,e.createElement)(l.ExternalLink,{href:"https://youtu.be/mICLfKkF6tU"},(0,i.__)("Learn to create a grid block","content-blocks-builder")),", ",(0,e.createElement)(l.ExternalLink,{href:"https://youtu.be/WgHuo6jwyN8"},(0,i.__)("Create blocks from an external script","content-blocks-builder")),", ",(0,e.createElement)(l.ExternalLink,{href:"https://www.youtube.com/playlist?list=PLPuEwc7dZklcFBm-hwtNGJmuB-J8nV-fD"},(0,i.__)("View all playlist","content-blocks-builder"))),(0,e.createElement)("li",null,(0,i.__)("Manage custom variations: ","content-blocks-builder"),(0,e.createElement)(l.ExternalLink,{href:(0,g.addQueryArgs)("edit.php?post_type=boldblocks_variation")},(0,i.__)("All custom variations","content-blocks-builder")),", ",(0,e.createElement)(l.ExternalLink,{href:(0,g.addQueryArgs)("edit.php?post_type=boldblocks_block&page=cbb-variation-library")},(0,i.__)("Variation Library","content-blocks-builder")),", ",(0,e.createElement)(l.ExternalLink,{href:"https://youtu.be/caiY-YZT7ZY"},(0,i.__)("Learn to create a variation","content-blocks-builder")),", ",(0,e.createElement)(l.ExternalLink,{href:"https://youtu.be/YQHrf4xFctg"},(0,i.__)("Create a variation for the Query Loop block","content-blocks-builder")),", ",(0,e.createElement)(l.ExternalLink,{href:"https://youtu.be/BAY8_evbyL0"},(0,i.__)("Learn to use variation library","content-blocks-builder"))),(0,e.createElement)("li",null,(0,i.__)("Manage custom patterns: ","content-blocks-builder"),(0,e.createElement)(l.ExternalLink,{href:(0,g.addQueryArgs)("edit.php?post_type=boldblocks_pattern")},(0,i.__)("All patterns","content-blocks-builder")),", ",(0,e.createElement)(l.ExternalLink,{href:(0,g.addQueryArgs)("post-new.php?post_type=boldblocks_pattern")},(0,i.__)("Create new pattern","content-blocks-builder")),", ",(0,e.createElement)(l.ExternalLink,{href:"https://youtu.be/gfSNwcAb-xc"},(0,i.__)("Learn to create a pattern","content-blocks-builder")),", ",(0,e.createElement)(l.ExternalLink,{href:"https://youtu.be/BVvImhhZma4"},(0,i.__)("Learn to create a realworld pattern","content-blocks-builder")),", ",(0,e.createElement)(l.ExternalLink,{href:"https://youtu.be/UTrZSBvkzj0"},(0,i.__)("Learn to use the pattern inserter popup","content-blocks-builder"))),(0,e.createElement)("li",null,(0,i.__)("Carousel layouts: ","content-blocks-builder"),(0,e.createElement)(l.ExternalLink,{href:"https://youtu.be/Eh3kX-9_mDg"},(0,i.__)("Learn to create a banner slider","content-blocks-builder")),", ",(0,e.createElement)(l.ExternalLink,{href:"https://youtu.be/bcK_k3IfW8g"},(0,i.__)("Learn to create a banner slider using Query Loop block","content-blocks-builder")),", ",(0,e.createElement)(l.ExternalLink,{href:"https://www.youtube.com/playlist?list=PLPuEwc7dZkleS_5ATLat8arnVUflXSfTk"},(0,i.__)("View all playlist","content-blocks-builder"))),(0,e.createElement)("li",null,(0,i.__)("Grid layouts: ","content-blocks-builder"),(0,e.createElement)(l.ExternalLink,{href:"https://youtu.be/awSC09tTnS8"},(0,i.__)("Learn to create a responsive grid","content-blocks-builder")),", ",(0,e.createElement)(l.ExternalLink,{href:"https://www.youtube.com/playlist?list=PLPuEwc7dZklfsbrRAKe_iUywkjk0fPMUE"},(0,i.__)("View all playlist","content-blocks-builder"))),(0,e.createElement)("li",null,(0,i.__)("Accordion layout: ","content-blocks-builder"),(0,e.createElement)(l.ExternalLink,{href:"https://youtu.be/YA4-duNF_w4"},(0,i.__)("Learn to create an accordion layout","content-blocks-builder"))),(0,e.createElement)("li",null,(0,i.__)("Customize Query Loop: ","content-blocks-builder"),(0,e.createElement)(l.ExternalLink,{href:"https://youtu.be/aHy3spQVBGc"},(0,i.__)("Learn to create a blog page with CBB","content-blocks-builder")),", ",(0,e.createElement)(l.ExternalLink,{href:"https://youtu.be/YQHrf4xFctg"},(0,i.__)("Learn to create blog layouts with overlay style","content-blocks-builder")),", ",(0,e.createElement)(l.ExternalLink,{href:"https://www.youtube.com/playlist?list=PLPuEwc7dZklchm8nVUOKqSOc6OgmRQyha"},(0,i.__)("View all playlist","content-blocks-builder"))),(0,e.createElement)("li",null,(0,i.__)("Background effects: ","content-blocks-builder"),(0,e.createElement)(l.ExternalLink,{href:"https://youtu.be/nDpeQbpu50s"},(0,i.__)("Parallax effect","content-blocks-builder")),", ",(0,e.createElement)(l.ExternalLink,{href:"https://youtu.be/mBleA20caGo"},(0,i.__)("Infinite scrolling effect","content-blocks-builder")),", ",(0,e.createElement)(l.ExternalLink,{href:"https://youtu.be/0g1SLTq-lQ4"},(0,i.__)("A realworld use case","content-blocks-builder"))),(0,e.createElement)("li",null,(0,i.__)("Modal, off-canvas, toggle layouts: ","content-blocks-builder"),(0,e.createElement)(l.ExternalLink,{href:"https://youtu.be/y31TAKHZOD0"},(0,i.__)("Step by step guide","content-blocks-builder")),", ",(0,e.createElement)(l.ExternalLink,{href:"https://youtu.be/52jD9eeBJ78"},(0,i.__)("A video popup","content-blocks-builder")),", ",(0,e.createElement)(l.ExternalLink,{href:"https://youtu.be/YnUt-zQXnCU"},(0,i.__)("Off-canvas content","content-blocks-builder")),", ",(0,e.createElement)(l.ExternalLink,{href:"https://youtu.be/UEh_Da9Sozs"},(0,i.__)("A cookies popup","content-blocks-builder")),", ",(0,e.createElement)(l.ExternalLink,{href:"https://youtu.be/g_KOCqvU0Ps"},(0,i.__)("A notification bar","content-blocks-builder")),", ",(0,e.createElement)(l.ExternalLink,{href:"https://youtu.be/E4usfCydR7U"},(0,i.__)("A responsive header with hamburger menu, search bar toggle","content-blocks-builder"))),(0,e.createElement)("li",null,(0,i.__)("Load Google Fonts for your site: ","content-blocks-builder"),(0,e.createElement)(l.ExternalLink,{href:(0,g.addQueryArgs)("edit.php?post_type=boldblocks_block&page=cbb-settings&tab=typography")},(0,i.__)("Setup Google Fonts","content-blocks-builder")),", ",(0,e.createElement)(l.ExternalLink,{href:"https://youtu.be/rhd4SEKUcHU"},(0,i.__)("Learn to load google fonts","content-blocks-builder"))),(0,e.createElement)("li",null,(0,i.__)("Import/export data from/to other sites: ","content-blocks-builder"),(0,e.createElement)(l.ExternalLink,{href:(0,g.addQueryArgs)("edit.php?post_type=boldblocks_block&page=cbb-settings&tab=tools")},(0,i.__)("Import/export Tools","content-blocks-builder"))),(0,e.createElement)("li",null,(0,i.__)("Learn more about CBB: ","content-blocks-builder"),(0,e.createElement)(l.ExternalLink,{href:"https://contentblocksbuilder.com/?utm_source=Learn+more+CBB&utm_campaign=CBB+visit+site&utm_medium=link&utm_content=setting+description"},"contentblocksbuilder.com"))),(0,e.createElement)("h2",null,(0,i.__)("How to - video tutorials","content-blocks-builder")),(0,e.createElement)("p",null,(0,i.__)("Below is a list of short 'how to' video tutorials, you can use them as learning resources besides the documentation. More videos will be made soon, so, please subscribe to our youtube channel and get notifications when we release new videos. ","content-blocks-builder"),(0,e.createElement)(l.ExternalLink,{href:"https://www.youtube.com/channel/UCB7Y3mlCEKHVM-RCZaTkR1g?sub_confirmation=1"},"Subscribe"),", ",(0,e.createElement)(l.ExternalLink,{href:"https://www.youtube.com/channel/UCB7Y3mlCEKHVM-RCZaTkR1g"},(0,i.__)("View all videos","content-blocks-builder"))),(0,e.createElement)("div",{className:"video-tutorials"},t?(0,e.createElement)(l.Spinner,null):n?.videoTutorials.map((({title:t,id:n})=>(0,e.createElement)("div",{className:"video-tutorials__item",key:n},(0,e.createElement)("div",{className:"video-tutorials__item__video"},(0,e.createElement)("iframe",{src:`https://www.youtube.com/embed/${n}`,srcDoc:`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img{position:absolute;width:100%;top:0;bottom:0;margin:auto}.btn-play{position: absolute;top: 50%;left: 50%;z-index: 1;display: block;width: 68px;height: 48px;margin:0;cursor: pointer;transform: translate3d(-50%, -50%, 0);background-color: transparent;background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 48"><path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="red"/><path d="M45 24 27 14v20" fill="white"/></svg>');filter: grayscale(100%);transition: filter .1s cubic-bezier(0, 0, 0.2, 1);border: none;}body:hover .btn-play,.btn-play:focus{filter:none}.visually-hidden{clip: rect(0 0 0 0);clip-path: inset(50%);height: 1px;overflow: hidden;position: absolute;white-space: nowrap;width: 1px;}</style><a href="https://www.youtube.com/embed/${n}?autoplay=1&enablejsapi=1&playsinline=1"><img src="https://img.youtube.com/vi/${n}/hqdefault.jpg" alt="${t}"><button type="button" class="btn-play"><span class="visually-hidden">Play</span></button></a>`,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),(0,e.createElement)("div",{className:"video-tutorials__item__desc"},t))))),n&&n.playlists&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)("h2",{className:"view-playlists"},(0,i.__)("View by playlists","content-blocks-builder")),(0,e.createElement)("ul",null,n.playlists.map((({title:t,url:n})=>(0,e.createElement)("li",{key:n},(0,e.createElement)(l.ExternalLink,{href:n},t))))))))},_t=()=>(0,e.createElement)(pt,null,(0,e.createElement)(yt,null)),vt=(window.wp.editor,window.wp.dataControls),kt={},Et={getPreviewMode(e,t){var n;return null!==(n=e.previewModes[t])&&void 0!==n?n:""}},wt={fonts:{body:{fontFamily:"Nunito",genericFamily:"sans-serif",fontVariants:[]},headings:{fontFamily:"Roboto",genericFamily:"sans-serif",fontVariants:[]},additionalFonts:[]},fontsPresets:[{body:{fontFamily:"Nunito",genericFamily:"sans-serif"},headings:{fontFamily:"Roboto",genericFamily:"sans-serif"}},{body:{fontFamily:"Montserrat",genericFamily:"sans-serif"},headings:{fontFamily:"Oswald",genericFamily:"sans-serif"}},{body:{fontFamily:"Merriweather",genericFamily:"serif"},headings:{fontFamily:"Oswald",genericFamily:"sans-serif"}},{body:{fontFamily:"Montserrat",genericFamily:"sans-serif"},headings:{fontFamily:"Source Sans Pro",genericFamily:"sans-serif"}},{body:{fontFamily:"Source Sans Pro",genericFamily:"sans-serif"},headings:{fontFamily:"Libre Baskerville",genericFamily:"serif"}},{body:{fontFamily:"Fauna One",genericFamily:"serif"},headings:{fontFamily:"Playfair Display",genericFamily:"serif"}},{body:{fontFamily:"Josefin Slab",genericFamily:"serif"},headings:{fontFamily:"Six Caps",genericFamily:"sans-serif"}},{body:{fontFamily:"Source Sans Pro",genericFamily:"sans-serif"},headings:{fontFamily:"Playfair Display",genericFamily:"serif"}},{body:{fontFamily:"Quattrocento",genericFamily:"serif"},headings:{fontFamily:"Oswald",genericFamily:"sans-serif"}},{body:{fontFamily:"Alice",genericFamily:"serif"},headings:{fontFamily:"Sacramento",genericFamily:"cursive"}},{body:{fontFamily:"Lato",genericFamily:"sans-serif"},headings:{fontFamily:"Arvo",genericFamily:"serif"}},{body:{fontFamily:"Poppins",genericFamily:"sans-serif"},headings:{fontFamily:"Abril Fatface",genericFamily:"cursive"}},{body:{fontFamily:"Inconsolata",genericFamily:"monospace"},headings:{fontFamily:"Karla",genericFamily:"sans-serif"}},{body:{fontFamily:"Andika",genericFamily:"sans-serif"},headings:{fontFamily:"Amatic SC",genericFamily:"sans-serif"}},{body:{fontFamily:"Lato",genericFamily:"sans-serif"},headings:{fontFamily:"Lustria",genericFamily:"serif"}},{body:{fontFamily:"Proza Libre",genericFamily:"sans-serif"},headings:{fontFamily:"Cormorant Garamond",genericFamily:"serif"}},{body:{fontFamily:"EB Garamond",genericFamily:"serif"},headings:{fontFamily:"Oswald",genericFamily:"sans-serif"}},{body:{fontFamily:"Josefin Sans",genericFamily:"sans-serif"},headings:{fontFamily:"Yeseva One",genericFamily:"cursive"}},{body:{fontFamily:"Inter",genericFamily:"sans-serif"},headings:{fontFamily:"EB Garamond",genericFamily:"serif"}}],googleFonts:[]},xt={fonts:null},Ct={getGoogleFonts:()=>async({dispatch:e})=>{const t=await p()({path:"boldblocks/v1/getGoogleFonts"});return t&&t.success&&e({type:"SET_GOOGLE_FONTS",payload:t.data}),t},getTypography:()=>async({dispatch:e})=>{const{BoldBlocksTypography:t}=await p()({path:"wp/v2/settings"});if(t)return St(t,e);{const{BoldBlocksTypography:t}=await p()({path:"wp/v2/settings",method:"POST",data:{BoldBlocksTypography:{fonts:JSON.stringify(wt.fonts)}}});return St(t,e)}},getPostTypography:e=>async({dispatch:t})=>{if(!e)return;const{meta:{BoldBlocksTypography:n}={}}=await p()({path:e});return Tt(n,t)}},St=(e,t)=>{if(e&&e?.fonts){const n=JSON.parse(e.fonts);return t({type:"UPDATE_FONTS",payload:n}),n}return e},Tt=(e,t)=>{let n;return e&&e?.fonts&&(n=JSON.parse(e.fonts)),t({type:"UPDATE_POST_FONTS",payload:n}),n},Nt={updateFonts:e=>({type:"UPDATE_FONTS",payload:e}),updatePostFonts:e=>({type:"UPDATE_POST_FONTS",payload:e}),updateAndPersistFonts:e=>async({dispatch:t})=>{const{BoldBlocksTypography:n}=await p()({path:"wp/v2/settings",method:"POST",data:{BoldBlocksTypography:{fonts:e}}});return St(n,t)},updateAndPersistPostFonts:(e,t)=>async({dispatch:n})=>{const{meta:{BoldBlocksTypography:r}={}}=await p()({path:t,method:"POST",data:{meta:{BoldBlocksTypography:{fonts:e}}}});return Tt(r,n)}},Ft={blocks:{},statuses:{}},At={getMissingBlock(e,t){var n;return null!==(n=e.missingBlocks.blocks[t])&&void 0!==n&&n},getMissingBlockStatus(e,t){var n;return null!==(n=e.missingBlocks.statuses[t])&&void 0!==n&&n}},Lt={setMissingBlockStatus:e=>({type:"SET_MISSING_BLOCK_STATUS",payload:e}),loadMissingBlock:e=>async({select:t,dispatch:n})=>{let r=t.getMissingBlock(e);var a;!1===r&&(r=null!==(a=(await p()({path:`wp/v2/block-directory/search?term=${e}`}))[0])&&void 0!==a?a:{},n({type:"SET_MISSING_BLOCK",payload:{[e]:r}}));return r}};(e=>{const t=(0,c.createReduxStore)("boldblocks/cbb-icon-library",{selectors:{getIconLibrary(e){var t;return null!==(t=e?.icons)&&void 0!==t?t:[]}},actions:{loadIconLibrary:e=>async({select:t,dispatch:n})=>{var r;if(!e)return;let a=t.getIconLibrary();if(a&&a.length)return a;const o=await p()({path:e});var i;return o?.success&&n({type:"UPDATE_ICONS",payload:null!==(i=o?.data)&&void 0!==i?i:[]}),null!==(r=o?.data)&&void 0!==r?r:[]}},reducer:(e={icons:[]},t)=>"UPDATE_ICONS"===t.type?{...e,icons:t.payload}:e});(0,c.register)(t)})();const Pt=(0,c.createReduxStore)("boldblocks/data",{selectors:{getGoogleFonts:e=>e.typography.googleFonts,getTypography:e=>({fonts:e.typography.fonts,fontsPresets:e.typography.fontsPresets}),getPostTypography:(e,t)=>({fonts:e.postTypography.fonts,fontsPresets:e.typography.fontsPresets}),...Et,...At},actions:{...Nt,setPreviewMode:e=>({type:"SET_PREVIEW_MODE",payload:e}),...Lt},controls:vt.controls,reducer:(0,c.combineReducers)({previewModes:(e=kt,t)=>"SET_PREVIEW_MODE"===t.type?{...e,[t.payload.clientId]:t.payload.previewMode}:e,typography:(e=wt,t)=>{switch(t.type){case"SET_GOOGLE_FONTS":return{...e,googleFonts:t.payload};case"UPDATE_FONTS":return{...e,fonts:t.payload}}return e},postTypography:(e=xt,t)=>"UPDATE_POST_FONTS"===t.type?{...e,fonts:t.payload}:e,missingBlocks:(e=Ft,t)=>{switch(t.type){case"SET_MISSING_BLOCK":return{...e,blocks:{...e.missingBlocks,...t.payload}};case"SET_MISSING_BLOCK_STATUS":return{...e,statuses:{...e.statuses,[t.payload]:!0}}}return e}}),resolvers:{...Ct}});(0,c.register)(Pt);const Ot=(e,t=[])=>t.find((t=>t.label===e)),Rt=(e,t="",n=[],r)=>{let a=`boldblocks-font-${e.replace(/\s/g,"-").toLowerCase()}`;t&&(a=`${a}-text`);let o=r.querySelector(`#${a}`);if(!o){const i=Ot(e,n);if(i){let{label:e,variants:n}=i,l=`https://fonts.googleapis.com/css2?family=${e.replace(/\s/g,"+")}`,s=[];n=n.map((e=>("regular"===e?e="400":"italic"===e&&(e="400italic"),e))),n.sort().forEach((e=>{-1!==e.indexOf("italic")?s.push(`1,${e.replace("italic","")}`):s.push(`0,${e}`)})),l=`${l}:ital,wght@${s.sort().join(";")}&display=swap`,t&&(l=`${l}&text=${encodeURIComponent(t)}`),o=r.createElement("link"),o.id=a,o.rel="stylesheet",o.href=l,r.head.appendChild(o)}return i}},Mt=(e,t,n)=>{Rt(e?.headings?.fontFamily,"",t,n),Rt(e?.body?.fontFamily,"",t,n)},Dt=(e,t)=>(e&&t&&t?.headings&&(e=e.map((e=>e.headings.fontFamily===t?.headings?.fontFamily&&e.body.fontFamily===t?.body?.fontFamily?{...e,isActive:!0}:e?.isActive?{...e,isActive:!1}:e))),e),Bt=e=>e.map((e=>("regular"===e?e="400":"italic"===e&&(e="400italic"),e+""))).sort(),It=(e,t,n,r)=>(0,o.useMemo)((()=>{const a=n(e,t);return a?r(a.variants):[]}),[e,t,n,r]),zt=(e,t)=>{let n={};if(t){const{fontFamily:r,genericFamily:a}=t;r&&(n[`--cbb--${e}--font-family`]=`"${r}", ${a}`)}return n},Ut=(e,t)=>{let n=t.head.querySelector("#boldblocks-css-variables");n?n.innerHTML=e:(n=t.createElement("style"),n.id="boldblocks-css-variables",n.innerHTML=e,t.head.appendChild(n))},Ht=Xe.div`
  .fonts__actions {
    display: flex;
    gap: 8px;
    margin-top: 12px;
  }

  &.is-fullview {
    margin-top: 12px;

    .fonts__headings-body {
      display: grid;
      gap: 12px;

      .font__actions {
        margin-bottom: 0;
      }

      @media (min-width: 960px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));

        .font {
          display: flex;
          flex-direction: column;
        }

        .font__item {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .font__preview {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .font__preview__text {
          flex-grow: 1;
        }

        .font__family__value {
          height: 36px;
        }

        .font__variants__value {
          height: 40px;
        }

        .font__actions {
          margin-top: auto;
        }
      }
    }
  }
`,$t=Xe.div`
  /*
  $break-huge: 1440px;
  $break-wide: 1280px;
  $break-xlarge: 1080px;
  $break-large: 960px;	// admin sidebar auto folds
  $break-medium: 782px;	// adminbar goes big
  $break-small: 600px;
  $break-mobile: 480px;
  $break-zoomed-in: 280px;
  */
  .components-combobox-control__suggestions-container,
  .components-form-token-field__input-container {
    width: auto;
  }

  label:empty {
    display: none;
  }

  h3 {
    margin-top: 16px;
    margin-bottom: 0.25em;
    font-size: 1.25em;
    text-transform: none;
  }

  .font {
    &__item {
      > * {
        margin-top: 0;
        margin-bottom: 8px;

        > * {
          margin-bottom: 4px;
        }
      }
    }

    &__label {
      padding-bottom: 4px;
      margin-top: 10;
      margin-bottom: 10px;
      border-bottom: 1px solid #ddd;
    }

    &__item__value {
      padding: 8px;
      border: 1px solid #ddd;
    }

    &__preview {
      &__text {
        font-size: 16px;
        line-height: 1.5;
      }
    }

    // Variants
    &__variants__edit {
      p {
        margin: 0;
      }
    }

    // Actions
    &__actions {
      display: flex;
      gap: 8px;
      margin: 10px 0;
    }
  }

  &.is-fullview {
    padding: 10px;
    border: 1px solid #ddd;

    .font__label {
      margin-top: 0;
    }
  }
`,Vt=({label:t,editLabel:n=(0,i.__)("Edit font","content-blocks-builder"),value:r,allFontFamilies:a,text:s,isInSidebar:c=!1,style:d={},isEditable:u,onChange:m})=>{const{fontFamily:p,fontVariants:f=[],allFontVariants:g=[]}=r,[h,b]=(0,o.useState)(!1);return(0,e.createElement)($t,{className:et()("font",{"is-edit":h,"is-view":!h,"is-fullview":!c})},(0,e.createElement)("h3",{className:"font__label"},(0,e.createElement)("strong",null,t)),(0,e.createElement)("div",{className:"font__item"},(0,e.createElement)("div",{className:"font__family"},(0,e.createElement)("div",{className:"font__item__label font__family__label"},(0,i.__)("Family:","content-blocks-builder")),h?(0,e.createElement)("div",{className:"font__family__edit"},(0,e.createElement)(l.ComboboxControl,{value:p,options:a,onChange:e=>{m({...r,fontFamily:e})}})):(0,e.createElement)("div",{className:"font__item__value font__family__value",style:{...d,fontFamily:p}},p)),(0,e.createElement)("div",{className:"font__variants"},(0,e.createElement)("div",{className:"font__item__label font__variants__label"},(0,i.__)("Variants:","content-blocks-builder")),h?(0,e.createElement)("div",{className:"font__variants__edit"},(0,e.createElement)(l.FormTokenField,{label:"",value:f,suggestions:g,onChange:e=>{m({...r,fontVariants:e})},placeholder:(0,i.__)("Choose variants to load","content-blocks-builder"),__experimentalExpandOnFocus:!0,__experimentalShowHowTo:!1}),(0,e.createElement)("p",null,(0,i.__)("Leave it blank to load all available variants: ","content-blocks-builder"),!!g.length&&g.map(((t,n)=>(0,e.createElement)("span",{className:"font__variant",key:t},t,n<g.length-1?", ":""))))):(0,e.createElement)("div",{className:"font__item__value font__variants__value"},f.length?f.map(((t,n)=>(0,e.createElement)("span",{className:"font__variant",key:t},t,n<f.length-1?", ":""))):!!g.length&&g.map(((t,n)=>(0,e.createElement)("span",{className:"font__variant",key:t},t,n<g.length-1?", ":""))))),(0,e.createElement)("div",{className:"font__preview"},(0,e.createElement)("div",{className:"font__item__label font__preview__label"},(0,i.__)("Font preview:","content-blocks-builder")),(0,e.createElement)("div",{className:"font__item__value font__preview__text",style:{...d,fontFamily:p}},s))),u&&(0,e.createElement)("div",{className:"font__actions"},!h&&(0,e.createElement)(l.Button,{variant:"primary",size:"small",onClick:()=>{b(!0)}},n),h&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(l.Button,{variant:"primary",size:"small",onClick:()=>{b(!1)}},(0,i.__)("Back to preview","content-blocks-builder")))))},Gt=({value:t,allFontFamilies:n,onChange:r,onReset:a,isInSidebar:o=!1,isEditable:s,isFontsChanged:c})=>{const{headings:d,body:u}=t;return(0,e.createElement)(Ht,{className:et()("fonts",{"is-fullview":!o})},(0,e.createElement)("div",{className:"fonts__headings-body"},(0,e.createElement)(Vt,{label:(0,i.__)("Headings font","content-blocks-builder"),editLabel:(0,i.__)("Edit headings font","content-blocks-builder"),value:d,onChange:e=>{r({...t,headings:e})},allFontFamilies:n,style:{fontWeight:"bold",fontSize:"1.25rem"},text:"The spectacle before us was indeed sublime.",isInSidebar:o,isEditable:s}),(0,e.createElement)(Vt,{label:(0,i.__)("Body font","content-blocks-builder"),editLabel:(0,i.__)("Edit body font","content-blocks-builder"),value:u,onChange:e=>{r({...t,body:e})},allFontFamilies:n,style:{fontSize:"1rem"},text:"By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver.",isInSidebar:o,isEditable:s})),(0,e.createElement)("div",{className:"fonts__others"}),s&&(0,e.createElement)("div",{className:"fonts__actions"},(0,e.createElement)(l.Button,{variant:"primary",onClick:()=>{const e={...t};r({...e,headings:e.body,body:e.headings})}},(0,i.__)("Swap fonts","content-blocks-builder")),c&&(0,e.createElement)(l.Button,{variant:"secondary",onClick:a},(0,i.__)("Reset fonts","content-blocks-builder"))))},jt=Xe.div`
  /*
  $break-huge: 1440px;
  $break-wide: 1280px;
  $break-xlarge: 1080px;
  $break-large: 960px;	// admin sidebar auto folds
  $break-medium: 782px;	// adminbar goes big
  $break-small: 600px;
  $break-mobile: 480px;
  $break-zoomed-in: 280px;
  */

  margin-top: 12px;

  .font-pair {
    position: relative;
    height: 100%;
    padding: 0.5rem;
    font-size: 1.25rem;
    line-height: 1.5;
    cursor: pointer;
    border: 1px solid #ddd;
    border-radius: 3px;
    box-sizing: border-box;

    &:hover {
      border: 1px solid #000;
    }

    &.is-active {
      border: 1px solid #000;
      box-shadow: 0 0 5px #000;
    }

    .button-remove {
      position: absolute;
      top: 0;
      right: 0;
      color: #ddd;
    }

    &:hover {
      .button-remove {
        color: #000;
      }
    }
  }

  h3 {
    margin-top: 0;
    margin-bottom: 0.25em;
    font-size: 1.25em;
    text-transform: none;
  }

  // Fonts presets
  .fonts-presets__list {
    margin: 0 -0.25rem;
    height: 260px;
    overflow-y: auto;

    > * {
      padding: 0.25rem;
      box-sizing: border-box;
    }
  }

  // Grid style
  &.is-grid {
    .fonts-presets__list {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -0.25rem;

      > * {
        flex: 0 0 100%;
        padding: 0.25rem;
        box-sizing: border-box;

        @media (min-width: 600px) {
          flex: 0 0 50%;
        }

        @media (min-width: 960px) {
          flex: 0 0 percentage(1 / 3);
        }
        @media (min-width: 1280px) {
          flex: 0 0 20%;
        }
      }
    }
  }
`,Wt=({presets:n=[],onChange:r=t.noop,isGrid:a=!1})=>(0,e.createElement)(jt,{className:et()("fonts-presets",{"is-grid":a})},(0,e.createElement)("h3",{className:"fonts-presets__label"},(0,e.createElement)("strong",null,(0,i.__)("Choose a predefined combination:","content-blocks-builder"))),(0,e.createElement)("div",{className:"fonts-presets__list"},n.map(((t,n)=>(0,e.createElement)("div",{className:"fonts-preset",key:n,onClick:()=>{r(t)}},(0,e.createElement)("div",{className:et()("font-pair",{"is-active":t?.isActive})},(0,e.createElement)("div",{className:"font-pair__body",style:{fontFamily:t?.body?.fontFamily}},t?.body?.fontFamily),(0,e.createElement)("div",{className:"font-pair__headings",style:{fontFamily:t?.headings?.fontFamily,fontWeight:"bold"}},t?.headings?.fontFamily))))))),qt=window.wp.compose,Yt=Xe.div`
  .components-notice {
    padding-right: 0;
    margin-right: 0;
    margin-left: 0;
  }
`,Kt=t=>{const{googleFonts:n=[],fonts:r,editingFonts:a,setEditingFonts:i,fontsPresets:s,isFontsChanged:c,messageData:d,setMessageData:u,isInSidebar:m=!1,isEditable:p=!0,isLoadingData:f,deviceType:g="Desktop"}=t,h=(0,o.useMemo)((()=>n.map((({label:e})=>({label:e,value:e})))),[n]),{headings:{fontFamily:b},body:{fontFamily:y}}=a,_=(0,qt.usePrevious)(g),v="Desktop"!==g&&"Desktop"===_;((e,t)=>{(0,o.useEffect)((()=>{e.length&&t.length&&((e,t,n)=>{e.forEach((e=>{Rt(e?.body?.fontFamily,e?.body?.fontFamily,t,n),Rt(e?.headings?.fontFamily,e?.headings?.fontFamily,t,n)}))})(e,t,document)}),[e.length,t.length,Rt])})(s,n),((e,t,n,r=!1)=>{(0,o.useEffect)((()=>{if(e?.headings?.fontFamily&&e?.body?.fontFamily&&t.length){const n=document.querySelector('iframe[name="editor-canvas"]');if(n){const a=n.contentWindow.document;r?function(e,t,n){return new Promise((r=>{if(t.querySelector(e))return r(t);const a=new MutationObserver((()=>{(t=n.querySelector('iframe[name="editor-canvas"]').contentWindow.document).querySelector(e)&&(r(t),a.disconnect())}));a.observe(t,{subtree:!0,childList:!0})}))}("#boldblocks-custom-fonts-css",a,document).then((n=>{Mt(e,t,n)})).catch((e=>x(e,"error"))):Mt(e,t,a)}else Mt(e,t,document)}}),[e?.headings.fontFamily,e?.body?.fontFamily,t.length,Rt,n,r])})(a,n,g,v),((e,t,n,r=!1)=>{(0,o.useEffect)((()=>{const t=document.querySelector('iframe[name="editor-canvas"]'),n=`.editor-styles-wrapper {${(e=>{const{body:t,headings:n}=e;let r={...zt("body",t),...zt("headings",n)};return Object.keys(r).reduce(((e,t)=>`${e}${t}: ${r[t]};`),"")})(e)}}`;if(t){const e=t.contentWindow.document;r?t.addEventListener("load",(()=>{Ut(n,e)})):Ut(n,e)}else Ut(n,document)}),[e,t,n,r])})(a,f,g,v);const k=It(b,n,Ot,Bt),E=It(y,n,Ot,Bt),w={...a,headings:{...a.headings,allFontVariants:k},body:{...a.body,allFontVariants:E}};return f?(0,e.createElement)(l.Spinner,null):(0,e.createElement)(Yt,null,(0,e.createElement)(Gt,{value:w,allFontFamilies:h,isFontsChanged:c,onChange:e=>{i(e)},onReset:()=>{i(r)},isEditable:p,isInSidebar:m}),p&&(0,e.createElement)(Wt,{presets:Dt(s,a),onChange:e=>{i(e)},isGrid:!m}),d&&d?.message&&(0,e.createElement)(l.Notice,{status:d?.type,isDismissible:!0,onDismiss:()=>{u({type:"success",message:""})}},d.message))},Qt=Xe(l.ToggleControl)`
  margin-top: 12px;
`,Zt=()=>{const n=((e="")=>{const{updateFonts:n,updateAndPersistFonts:r,updatePostFonts:a,updateAndPersistPostFonts:i}=(0,c.useDispatch)(Pt),l=(0,c.useSelect)((t=>{const n=t(Pt).getGoogleFonts(),{fonts:r,fontsPresets:a}=t(Pt).getTypography(),o=t(Pt).hasFinishedResolution("getTypography");let i,l;e&&(i=t(Pt).getPostTypography(e),l=t(Pt).hasFinishedResolution("getPostTypography",[e]));let s={fonts:r,globalFonts:r,fontsPresets:a,googleFonts:n,isGlobalTypographyLoaded:o,isPostTypogrpahyLoaded:l};return i&&i?.fonts&&(s={...s,fonts:i.fonts,isPostFonts:!0}),s}),[e]),{fonts:s,isGlobalTypographyLoaded:d,isPostTypogrpahyLoaded:u}=l,m=e?d&&u:d,[p,f]=(0,o.useState)(s);return(0,o.useEffect)((()=>{m&&f(s)}),[m]),{...l,editingFonts:p,setEditingFonts:f,isDataLoaded:m,isFontsChanged:(0,o.useMemo)((()=>{var e,n,r,a;return!(0,t.isEqual)({headingsFontFamily:s?.headings?.fontFamily,headingsFontVariants:null!==(e=s?.headings?.fontVariants)&&void 0!==e?e:[],bodyFontFamily:s?.body?.fontFamily,bodyFontVariants:null!==(n=s?.body?.fontVariants)&&void 0!==n?n:[]},{headingsFontFamily:p?.headings?.fontFamily,headingsFontVariants:null!==(r=p?.headings?.fontVariants)&&void 0!==r?r:[],bodyFontFamily:p?.body?.fontFamily,bodyFontVariants:null!==(a=p?.body?.fontVariants)&&void 0!==a?a:[]})}),[s,p]),updateFonts:n,updateAndPersistFonts:r,updatePostFonts:a,updateAndPersistPostFonts:i}})(),{isDataLoaded:r,isFontsChanged:a,editingFonts:s,setEditingFonts:d,updateAndPersistFonts:u}=n,[m,p]=(0,o.useState)(!1),[f,g]=(0,o.useState)({type:"success",message:""});return(0,e.createElement)(ht,{title:(0,i.__)("Google fonts settings","content-blocks-builder"),renderFooter:()=>(0,e.createElement)(e.Fragment,null,(0,e.createElement)(l.Button,{variant:"primary",disabled:!a,onClick:e=>{e.preventDefault(),p(!0),u(JSON.stringify(s)).then((()=>{g({type:"success",message:(0,i.__)("Setttings saved!","content-blocks-builder")})})).catch((e=>{console.error(e),g({type:"error",message:(0,i.__)((0,i.__)("Something went wrong, please contact the author for support!","content-blocks-builder"))})})).finally((()=>{p(!1)}))}},(0,i.__)("Update typography","content-blocks-builder")),m&&(0,e.createElement)(l.Spinner,null)),isFullRow:!0},(0,e.createElement)(Kt,{...n,isLoadingData:!r,editingFonts:s,setEditingFonts:d,isFontsChanged:a,messageData:f,setMessageData:g}))},Xt=()=>{const{createSuccessNotice:n,createErrorNotice:r}=(0,c.useDispatch)(ut.store),{saveEditedEntityRecord:a}=(0,c.useDispatch)(s.store),[d,u]=(0,s.useEntityProp)("root","site","EnableTypography"),[m,p]=(0,s.useEntityProp)("root","site","UseBunnyFonts"),[f,g]=(0,o.useState)(!1);return(0,e.createElement)(pt,{description:(0,i.__)("Typography settings","content-blocks-builder")},(0,e.createElement)(ht,{isHeaderHidden:!0,isFullRow:!0},(0,e.createElement)(l.ToggleControl,{checked:null!=d&&d,disabled:(0,t.isUndefined)(d),label:(0,e.createElement)(e.Fragment,null,(0,e.createElement)("span",null,(0,i.__)("Enable google fonts ","content-blocks-builder")),(0,t.isUndefined)(d)||f&&(0,e.createElement)(l.Spinner,{style:{margin:"0 10px 0 0"}})),onChange:e=>{u(e),g(!0),a("root","site").then((()=>{n((0,i.__)("Setttings saved!","content-blocks-builder"),{type:"snackbar"})})).catch((e=>{console.error(e),r((0,i.__)("Something went wrong, please contact the author for support!","content-blocks-builder"),{type:"snackbar"})})).finally((()=>{g(!1)}))}}),(0,e.createElement)("p",{style:{margin:0}},(0,e.createElement)("strong",null,(0,i.__)("Enable this setting will override font families from the theme.","content-blocks-builder"))," ",(0,e.createElement)("strong",null,(0,i.__)("It also generates two CSS classes named: 'headings-font-family', 'body-font-family' and two CSS variables named '--cbb--headings--font-family', '--cbb--body--font-family'. You can use those to set the font family for your blocks.","content-blocks-builder"))),d&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(Qt,{checked:null!=m&&m,disabled:(0,t.isUndefined)(m),label:(0,e.createElement)(e.Fragment,null,(0,e.createElement)("span",null,(0,i.__)("Load Bunny Fonts instead of Google Fonts for GDPR compliance","content-blocks-builder")),(0,t.isUndefined)(m)||f&&(0,e.createElement)(l.Spinner,{style:{margin:"0 10px 0 0"}})),onChange:e=>{p(e),g(!0),a("root","site").then((()=>{n((0,i.__)("Setttings saved!","content-blocks-builder"),{type:"snackbar"})})).catch((e=>{console.error(e),r((0,i.__)("Something went wrong, please contact the author for support!","content-blocks-builder"),{type:"snackbar"})})).finally((()=>{g(!1)}))},className:"use-bunny-fonts"}),(0,e.createElement)("p",{style:{margin:0}},(0,e.createElement)("span",null,(0,i.__)("Learn more: ","content-blocks-builder")),(0,e.createElement)("strong",null,(0,e.createElement)(l.ExternalLink,{href:"https://fonts.bunny.net/"},"Bunny Fonts"),","," ",(0,e.createElement)(l.ExternalLink,{href:"https://fonts.google.com/"},"Google Fonts"))))),d&&(0,e.createElement)(Zt,null))},Jt=(e,t,n)=>{if(!t)return n;const r=t.find((t=>e===t?.prefix));return r&&r?.breakpoint?r.breakpoint:n},en=()=>{const{Messages:t}=(0,o.useContext)(C),{saveEditedEntityRecord:n}=(0,c.useDispatch)(s.store),[r,a]=(0,o.useState)({type:"success",message:""}),[d,u]=(0,s.useEntityProp)("root","site","CBBBreakpoints"),m=(e,t)=>n=>{const r=t.map((t=>t.prefix===e?{...t,breakpoint:n}:t));u(r)},p=(0,o.useMemo)((()=>Jt("md",d,768)),[d]),f=(0,o.useMemo)((()=>Jt("lg",d,1024)),[d]);return(0,e.createElement)(ht,{title:(0,i.__)("Manage reponsive breakpoints","content-blocks-builder"),renderFooter:()=>{const[r,i]=(0,o.useState)(!1);return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(l.Button,{variant:"primary",onClick:e=>{e.preventDefault(),i(!0),n("root","site").then((()=>{a({type:"success",message:t.Success})})).catch((e=>{x(e,"error"),a({type:"error",message:t.Error})})).finally((()=>{i(!1)}))}},t.UpdateSettings),r&&(0,e.createElement)(l.Spinner,null))}},(0,e.createElement)(gt,{className:"fieldset"},(0,e.createElement)("div",{className:"fieldset__label"},(0,e.createElement)("strong",null,(0,i.__)("Change the breakpoint values for phone, tablet and desktop. All values are in pixels (px).","content-blocks-builder"))),d?(0,e.createElement)(e.Fragment,null,(0,e.createElement)(l.RangeControl,{label:(0,i.__)("Tablet","content-blocks-builder"),value:p,onChange:m("md",d),min:600,max:1200}),(0,e.createElement)(l.RangeControl,{label:(0,i.__)("Desktop","content-blocks-builder"),value:f,onChange:m("lg",d),min:960,max:1920})):(0,e.createElement)(l.Spinner,null)),r&&r?.message&&(0,e.createElement)(l.Notice,{status:r?.type,isDismissible:!1},r.message))},tn=({value:n,onChange:r,onDelete:a,validateData:s,isEdit:c=!1})=>{const[d,u]=(0,o.useState)(n),{name:m,label:p}=d,[f,g]=(0,o.useState)(""),[h,b]=(0,o.useState)(c||(0,t.isEmpty)(m)||(0,t.isEmpty)(p));return(0,e.createElement)(e.Fragment,null,h?(0,e.createElement)(e.Fragment,null,(0,e.createElement)(l.TextControl,{placeholder:(0,i.__)("Name","content-blocks-builder"),value:m,onChange:e=>{u({...d,name:e})},className:"category__name"}),(0,e.createElement)(l.TextControl,{placeholder:(0,i.__)("Label","content-blocks-builder"),value:p,onChange:e=>{u({...d,label:e})},className:"category__label"}),(0,e.createElement)("div",{className:"fieldset__item__actions"},(0,e.createElement)(l.Button,{size:"small",variant:"secondary",onClick:()=>{const e=s(d);if("success"===e?.type){const{name:e,label:t}=d;r({name:e.trim(),label:t.trim()}),b(!1)}else g(e?.message)}},(0,i.__)("Save","content-blocks-builder")),n?.name&&n?.label&&(0,e.createElement)(l.Button,{size:"small",variant:"secondary",onClick:()=>{u(n),b(!1)}},(0,i.__)("Cancel","content-blocks-builder")),(0,e.createElement)(l.Button,{size:"small",variant:"secondary",isDestructive:!0,onClick:()=>{a()}},(0,i.__)("Delete","content-blocks-builder"))),f&&(0,e.createElement)(l.Notice,{className:"message",status:"error",isDismissible:!1},f)):(0,e.createElement)(e.Fragment,null,(0,e.createElement)("code",null,m),(0,e.createElement)("span",null," - "),(0,e.createElement)("span",null,p),(0,e.createElement)("div",{className:"fieldset__item__actions"},(0,e.createElement)(l.Button,{size:"small",variant:"secondary",onClick:()=>{b(!0)}},(0,i.__)("Edit","content-blocks-builder")),(0,e.createElement)(l.Button,{size:"small",variant:"secondary",isDestructive:!0,onClick:()=>{a()}},(0,i.__)("Delete","content-blocks-builder")))))};(0,b.addFilter)("boldblocks.settings.patternCategories","boldblocks/premium",((n,{Fieldset:r,CategoryList:a,customCategories:o,setCustomCategories:s,registeredCategories:c})=>{const d=e=>{let{name:t,label:n}=null!=e?e:{};return t=t.trim(),n=n.trim(),t&&n?c.find((({name:e,label:r})=>e===t||r===n))?{type:"error",message:(0,i.__)("Name and label should not be in the list of already registered categories.","content-blocks-builder")}:{type:"success"}:{type:"error",message:(0,i.__)("Both name and label are required!","content-blocks-builder")}};return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(r,{className:"fieldset"},(0,e.createElement)("div",{className:"fieldset__label"},(0,e.createElement)("strong",null,(0,i.__)("Manage custom categories","content-blocks-builder")),(0,e.createElement)("p",null,(0,i.__)("Click the 'Update Settings' button to save data to the database.","content-blocks-builder"))),(0,e.createElement)(a,{className:"category__list"},(0,t.isUndefined)(o)&&(0,e.createElement)(l.Spinner,null),o&&o.length>0&&o.map(((t,n)=>(0,e.createElement)("li",{key:t?.name},(0,e.createElement)(tn,{value:t,validateData:d,onChange:e=>{const t=[...o];t[n]=e,s(t)},onDelete:()=>{const e=[...o];e.splice(n,1),s(e)}}))))),o&&(0,e.createElement)(l.Button,{variant:"primary",size:"small",onClick:()=>{s([...o,{name:"",label:""}])}},(0,i.__)("Add category","content-blocks-builder"))))}));const nn=Xe.ul`
  li {
    display: flex;
    align-items: center;
    align-self: start;
    flex-wrap: wrap;
    gap: 0.2em;
    padding: 6px 0;
    margin: 0;
    border-bottom: 1px solid #ddd;
  }

  .fieldset__item__actions {
    margin-left: auto;

    > * + * {
      margin-left: 8px;
    }
  }

  .components-base-control + .components-base-control {
    margin-left: 8px;
  }

  .components-base-control__field {
    margin-bottom: 0;
  }
`,rn=()=>{const{Messages:t}=(0,o.useContext)(C),{saveEditedEntityRecord:n}=(0,c.useDispatch)(s.store),[r,a]=(0,o.useState)(!0),[d,u]=(0,o.useState)([]),[m,f]=(0,s.useEntityProp)("root","site","boldblocks_pattern_categories"),[g,h]=(0,o.useState)({type:"success",message:""}),[y,_]=(0,s.useEntityProp)("root","site","boldblocks_pattern_categories_all_label");return(0,o.useEffect)((()=>{p()({path:"boldblocks/v1/getPatternCategories"}).then((e=>{u(e),a(!1)}))}),[]),(0,e.createElement)(ht,{title:(0,i.__)("Manage pattern categories","content-blocks-builder"),renderFooter:()=>{const[r,a]=(0,o.useState)(!1);return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(l.Button,{variant:"primary",onClick:e=>{e.preventDefault(),a(!0),n("root","site").then((()=>{h({type:"success",message:t.Success})})).catch((e=>{console.error(e),h({type:"error",message:t.Error})})).finally((()=>{a(!1)}))}},t.UpdateSettings),r&&(0,e.createElement)(l.Spinner,null))}},(0,e.createElement)("p",null,(0,i.__)("You can create custom pattern categories for this site such as 'Carousel', 'Hero'... Don't register new categories with the same name and label as those already registered.","content-blocks-builder")),(0,e.createElement)("p",null,(0,i.__)("Following pattern categories are already registered:","content-blocks-builder")),(0,e.createElement)(gt,{className:"fieldset"},r&&(0,e.createElement)(l.Spinner,null),d.length>0&&(0,e.createElement)("ul",{className:"fieldset__list"},d.map((({name:t,label:n})=>(0,e.createElement)("li",{key:t},(0,e.createElement)("code",null,t),(0,e.createElement)("span",null," - "),(0,e.createElement)("span",null,n)))))),(0,b.applyFilters)("boldblocks.settings.patternCategories",null,{Fieldset:gt,CategoryList:nn,customCategories:m,setCustomCategories:f,registeredCategories:d}),(0,e.createElement)(gt,{className:"fieldset"},(0,e.createElement)("div",{className:"fieldset__label"},(0,e.createElement)("strong",null,(0,i.__)("Change the label for the 'all custom patterns' category.","content-blocks-builder"))),(0,e.createElement)(l.TextControl,{value:null!=y?y:"",onChange:_})),g&&g?.message&&(0,e.createElement)(l.Notice,{status:g?.type,isDismissible:!1},g.message))},an=()=>(0,e.createElement)(pt,{description:(0,i.__)("General settings","content-blocks-builder")},(0,e.createElement)(en,null),(0,e.createElement)(rn,null)),on=(0,e.createElement)(h.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(h.Path,{d:"M18 11.3l-1-1.1-4 4V3h-1.5v11.3L7 10.2l-1 1.1 6.2 5.8 5.8-5.8zm.5 3.7v3.5h-13V15H4v5h16v-5h-1.5z"})),ln=["boldblocks/group","boldblocks/grid-item","boldblocks/grid-item-repeater","boldblocks/carousel-item","boldblocks/carousel-item-repeater","boldblocks/stack-item","boldblocks/stack-item-repeater","boldblocks/accordion-item","boldblocks/accordion-item-repeater"];(0,i.__)("Responsive width","content-blocks-builder"),(0,i.__)("Responsive height","content-blocks-builder"),(0,i.__)("Responsive spacing","content-blocks-builder"),(0,i.__)("Responsive border","content-blocks-builder"),(0,i.__)("Media background","content-blocks-builder"),(0,i.__)("Background overlay","content-blocks-builder"),(0,i.__)("Text alignment","content-blocks-builder"),(0,i.__)("Vertical alignment","content-blocks-builder"),(0,i.__)("Justify alignment","content-blocks-builder"),(0,i.__)("Aspect ratio","content-blocks-builder"),(0,i.__)("Box shadow","content-blocks-builder"),(0,i.__)("Transform","content-blocks-builder"),(0,i.__)("Visibility","content-blocks-builder"),(0,i.__)("Toggle content","content-blocks-builder"),(0,i.__)("Sticky content","content-blocks-builder"),(0,i.__)("Custom attributes","content-blocks-builder"),(0,i.__)("Animation (premium)","content-blocks-builder"),(0,i.__)("Custom CSS (premium)","content-blocks-builder"),(0,i.__)("Steps style (premium)","content-blocks-builder"),(0,b.applyFilters)("boldblocks.CBB.isPremium",!1);const sn=e=>{const{records:n,isResolving:r,hasResolved:a}=(0,s.useEntityRecords)("postType",e,{per_page:-1});return[(0,t.isArray)(n)?n.map((e=>{const{id:t,title:{raw:n,rendered:r},content:{raw:a},slug:o,type:i,meta:l,...s}=e;return{id:t,title:n,content:a,slug:o,type:i,meta:l,renderedTitle:r,...s}})):[],r,a]},cn=(0,o.createContext)(),dn=({postType:t,title:n,value:r=[],setValue:a})=>{const s=(0,o.useContext)(cn),c=t.replace("boldblocks_",""),d=`${c}s`,u=`${c.charAt(0).toUpperCase()+c.slice(1)}s`,{[d]:m,[`isLoading${u}`]:p,[`hasFinishedResolution${u}`]:f}=s,g=(t,n)=>{let r=null;switch(n){case"boldblocks_block":case"boldblocks_pattern":r=(0,e.createElement)(e.Fragment,null,`boldblocks/${t?.slug}`);break;case"boldblocks_variation":r=(0,e.createElement)(e.Fragment,null,t?.meta?.boldblocks_variation_name)}return r};let h=m;if("block"===c&&h?.length){const e=ln.map((e=>e.replace("boldblocks/","")));h=h.filter((({slug:t})=>!e.includes(t)))}return(0,e.createElement)(gt,{className:"fieldset"},(0,e.createElement)("div",{className:"fieldset__label"},(0,e.createElement)("strong",null,n)),p&&(0,e.createElement)(l.Spinner,null),h&&h.length>0?(0,e.createElement)("fieldset",null,(0,e.createElement)(l.CheckboxControl,{label:(0,i.__)("Toggle All","content-blocks-builder"),checked:r.length===h.length,onChange:e=>{a(e?[...h]:[])}}),(0,e.createElement)("ul",{className:"fieldset__list"},h.map((n=>{return(0,e.createElement)("li",{key:n?.slug},(0,e.createElement)(l.CheckboxControl,{onChange:e=>{let t=[];if(e){const e=h.find((({slug:e})=>e===n?.slug));t=[...r,e]}else t=r.filter((({slug:e})=>e!==n?.slug));a([...t])},checked:(o=n?.slug,r.find((({slug:e})=>e===o))),label:g(n,t)}));var o})))):(0,e.createElement)(e.Fragment,null,f&&(0,e.createElement)("div",null,(0,i.__)("There is no data to export.","content-blocks-builder"))))},un=()=>{const{isLoading:t}=(0,o.useContext)(cn),[n,r]=(0,o.useState)([]),[a,s]=(0,o.useState)([]),[c,d]=(0,o.useState)([]);return(0,e.createElement)(ht,{title:(0,i.__)("Export data","content-blocks-builder"),renderFooter:()=>(0,e.createElement)(l.Button,{variant:"primary",disabled:0===n.length&&0===a.length&&0===c.length||t,icon:on,iconSize:16,onClick:e=>{e.preventDefault();const t={};n.length&&(t.blocks=n.map((({title:e,content:t,slug:n,meta:r,keywords:a})=>({title:e,content:t,slug:n,meta:r,keywords:a})))),a.length&&(t.variations=a.map((({title:e,content:t,slug:n,meta:r})=>({title:e,content:t,slug:n,meta:r})))),c.length&&(t.patterns=c.map((({title:e,content:t,slug:n,meta:r,keywords:a})=>({title:e,content:t,slug:n,meta:r,keywords:a})))),((e,t)=>{const n=new Blob([JSON.stringify(t,null,2)],{type:"text/json"}),r=document.createElement("a");r.download=e,r.href=window.URL.createObjectURL(n),r.dataset.downloadurl=["text/json",r.download,r.href].join(":");const a=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0});r.dispatchEvent(a),r.remove()})(`cbb-${(new Date).toISOString().slice(0,10)}.json`,t)}},(0,i.__)("Export data","content-blocks-builder"))},(0,e.createElement)("p",null,(0,i.__)("Select the blocks, variations, patterns to export a .json file which you can then import to another WordPress site. Be sure to export all dependent blocks and/or variations.","content-blocks-builder")),(0,e.createElement)(dn,{postType:"boldblocks_block",title:(0,i.__)("Select Blocks","content-blocks-builder"),value:n,setValue:r}),(0,e.createElement)(dn,{postType:"boldblocks_variation",title:(0,i.__)("Select Variations","content-blocks-builder"),value:a,setValue:s}),(0,e.createElement)(dn,{postType:"boldblocks_pattern",title:(0,i.__)("Select Patterns","content-blocks-builder"),value:c,setValue:d}))},mn=(0,e.createElement)(h.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(h.Path,{d:"M18.5 15v3.5H13V6.7l4.5 4.1 1-1.1-6.2-5.8-5.8 5.8 1 1.1 4-4v11.7h-6V15H4v5h16v-5z"})),pn=(0,e.createElement)(h.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)(h.Path,{fillRule:"evenodd",clipRule:"evenodd",d:"M12.848 8a1 1 0 0 1-.914-.594l-.723-1.63a.5.5 0 0 0-.447-.276H5a.5.5 0 0 0-.5.5v11.5a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-9A.5.5 0 0 0 19 8h-6.152Zm.612-1.5a.5.5 0 0 1-.462-.31l-.445-1.084A2 2 0 0 0 10.763 4H5a2 2 0 0 0-2 2v11.5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-5.54Z"})),fn=Xe.div`
  margin-top: 12px;
`,gn=({posts:n,title:r})=>(0,t.isArray)(n)&&(0,e.createElement)(fn,{className:"posts-preview"},(0,e.createElement)("div",{className:"fieldset__label"},(0,e.createElement)("strong",null,r)),(0,e.createElement)("ul",{className:"fieldset__list"},n.map((({slug:t})=>(0,e.createElement)("li",{key:t},`boldblocks/${t}`))))),hn=()=>{const{saveEditedEntityRecord:n}=(0,c.useDispatch)(s.store),r=(0,o.useContext)(cn),{isLoading:a,registeredCategories:d,customCategories:u,setCustomCategories:m,isLoadingPatternsCategories:f}=r,g=!f&&d.concat(u).concat([{name:"boldblocks"}]).map((({name:e})=>e)),[h,b]=(0,o.useState)(""),[y,_]=(0,o.useState)({}),[v,k]=(0,o.useState)({}),[E,w]=(0,o.useState)("ignore");let x=e=>e?.blocks||e?.variations||e?.patterns;return(0,e.createElement)(ht,{title:(0,i.__)("Import data","content-blocks-builder"),renderFooter:()=>{const[s,c]=(0,o.useState)(!1);return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(l.Button,{variant:"primary",disabled:!x(y)||!h||a,icon:mn,iconSize:16,onClick:()=>{c(!0);const e=(0,t.pick)(y,["blocks","variations","patterns"]);Promise.all(Object.keys(e).map((async n=>Promise.all(e[n].map((e=>((e,n)=>{const{[n]:a}=r;let o;return o="variations"===n?(0,t.isArray)(a)&&a.find((({meta:{boldblocks_variation_name:t}})=>t===e?.meta?.boldblocks_variation_name)):(0,t.isArray)(a)&&a.find((({slug:t})=>t===e?.slug)),o?"override"===E?p()({path:`wp/v2/boldblocks-${n}/${o.id}`,method:"POST",data:{...e,status:"publish"}}):void 0:"variations"===n?p()({path:"boldblocks/v1/createVariation",method:"POST",data:{...e,status:"publish"}}):p()({path:`wp/v2/boldblocks-${n}`,method:"POST",data:{...e,status:"publish"}})})(e,n)))).then((e=>({key:n,response:e})))))).then((e=>{const r=e.reduce(((e,{key:t,response:n})=>({...e,[t]:n.filter((e=>e))})),{});if(r?.patterns&&r.patterns){const e=(0,t.uniqBy)(r.patterns.reduce(((e,{meta:{boldblocks_pattern_categories:t=[]}})=>[...e,...t]),[]),"name");if(e.length){const t=e.filter((({name:e})=>!g.find((t=>e===t))));t.length&&(m([...u,...t]),n("root","site"))}}r?.blocks&&r.blocks.length||r?.variations&&r.variations.length||r?.patterns&&r.patterns.length?k({type:"success",message:(0,i.__)("Data has been imported successfully!","content-blocks-builder")}):k({type:"info",message:(0,i.__)("No items have been imported! Please change your settings or upload another JSON file.","content-blocks-builder")})})).catch((e=>{console.error(e),k({type:"error",message:(0,i.__)("Import failed. Please make sure your data is correct!","content-blocks-builder")})})).finally((()=>{c(!1),b(""),_({})}))}},(0,i.__)("Import data","content-blocks-builder")),s&&(0,e.createElement)(l.Spinner,null))}},(0,e.createElement)("p",null,(0,i.__)("Upload your json file and click the import button.","content-blocks-builder")),(0,e.createElement)(gt,{className:"fieldset"},(0,e.createElement)("div",{className:"fieldset__label"},(0,e.createElement)("strong",null,(0,i.__)("Select file","content-blocks-builder"))),(0,e.createElement)("div",{className:"file-upload"},(0,e.createElement)(l.FormFileUpload,{accept:"application/JSON",variant:"primary",onChange:e=>{b(e.target.files[0]);const t=new FileReader;t.onload=e=>{try{const t=JSON.parse(e.target.result);x(t)?(_(t),k({})):(_({}),k({type:"error",message:(0,i.__)("The uploaded file is in the wrong format. Please use a JSON file from the export functionality.","content-blocks-builder")}))}catch(e){_({}),console.error(e)}},t.readAsText(e.target.files[0]),e.target.value=""}},(0,i.__)("Choose file to upload","content-blocks-builder")),x(y)&&h&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)("div",{className:"file-preview"},(0,e.createElement)("span",{className:"icon"},pn),(0,e.createElement)("span",{className:"name"},h?.name),(0,e.createElement)(l.Button,{variant:"tertiary",className:"delete",onClick:()=>{b(""),_({})}},(0,i.__)("Delete?","content-blocks-builder"))),(0,e.createElement)("div",{className:"data-preview",style:{flexBasis:"100%"}},(0,e.createElement)("p",null,(0,i.__)("Following data will be imported.","content-blocks-builder")),(0,e.createElement)(gn,{posts:y?.blocks,title:(0,i.__)("Blocks:","content-blocks-builder")}),(0,e.createElement)(gn,{posts:y?.variations,title:(0,i.__)("Variations:","content-blocks-builder")}),(0,e.createElement)(gn,{posts:y?.patterns,title:(0,i.__)("Patterns:","content-blocks-builder")})))),(0,e.createElement)("div",{className:"fieldset__label",style:{marginTop:"12px"}},(0,e.createElement)("strong",null,(0,i.__)("Import settings","content-blocks-builder"))),(0,e.createElement)(l.RadioControl,{selected:E,onChange:w,options:[{value:"override",label:(0,i.__)("Replace old data.","content-blocks-builder")},{value:"ignore",label:(0,i.__)("Existing items are ignored.","content-blocks-builder")}]}),!(0,t.isEmpty)(v)&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(l.Notice,{status:v?.type,isDismissible:!1},v?.message))))},bn=()=>{const n=(()=>{const[e,n,r]=sn("boldblocks_block"),[a,i,l]=sn("boldblocks_variation"),[c,d,u]=sn("boldblocks_pattern"),{registeredCategories:m,customCategories:f,setCustomCategories:g,isLoading:h}=(()=>{const[e,n]=(0,o.useState)(!0),[r,a]=(0,o.useState)([]),[i,l]=(0,s.useEntityProp)("root","site","boldblocks_pattern_categories");return(0,o.useEffect)((()=>{p()({path:"boldblocks/v1/getPatternCategories"}).then((e=>{a(e),n(!1)}))}),[]),{registeredCategories:r,customCategories:i,setCustomCategories:l,isLoading:e||(0,t.isUndefined)(i)}})();return{blocks:e,isLoadingBlocks:n,hasFinishedResolutionBlocks:r,variations:a,isLoadingVariations:i,hasFinishedResolutionVariations:l,patterns:c,isLoadingPatterns:d,hasFinishedResolutionPatterns:u,registeredCategories:m,customCategories:f,setCustomCategories:g,isLoadingPatternsCategories:h,isLoading:n||i||d||h}})();return(0,e.createElement)(cn.Provider,{value:n},(0,e.createElement)(pt,{description:(0,i.__)("Import/Export blocks, patterns and variations","content-blocks-builder")},(0,e.createElement)(un,null),(0,e.createElement)(hn,null)))},yn=Xe(ht)`
  .inside h2 {
    padding: 0;
    margin: 0 0 10px;
    font-size: 1.75em;
  }

  .dev__body {
    padding-top: 1em;
  }
`,vn=()=>{const{Debug:{nonce:t,isPurged:n,setIsPurged:r}={}}=(0,o.useContext)(C);return(0,e.createElement)(yn,{title:(0,i.__)("Purge the cache","content-blocks-builder"),className:"debug-widget debug"},(0,e.createElement)("div",{className:"dev__body debug__body"},(0,e.createElement)(l.Flex,{justify:"flex-start"},(0,e.createElement)(l.Button,{variant:"primary",type:"button",href:(0,g.addQueryArgs)(`edit.php?post_type=boldblocks_block&page=cbb-settings&tab=developer&_cbb_purge=${t}`),as:"a"},(0,i.__)("Purge cache","content-blocks-builder")),(0,e.createElement)("p",null,(0,i.__)("Delete the entire cache contents for CBB Blocks, Variations and Patterns.","content-blocks-builder"))),!!n&&(0,e.createElement)(l.Notice,{status:"success",onRemove:()=>{r(!1),(new S).delete("_cbb_purge",!0)}},(0,i.__)("Cache cleared.","content-blocks-builder"))))},kn=()=>{const{Messages:n,pages:r,isResolvingPages:a}=(0,o.useContext)(C),d=(0,o.useMemo)((()=>r?.length?r.map((({id:e,title:{rendered:t}={}})=>({label:t,value:e}))):[]),[a]),{saveEditedEntityRecord:u}=(0,c.useDispatch)(s.store),[m,p]=(0,s.useEntityProp)("root","site","IsMaintenance"),[f,g]=(0,s.useEntityProp)("root","site","MaintenanceSlug"),[h,b]=(0,s.useEntityProp)("root","site","MaintananceEnableCustomPage"),[y,_]=(0,s.useEntityProp)("root","site","MaintanancePageId"),[v,k]=(0,o.useState)({type:"success",message:""});return(0,e.createElement)(yn,{title:(0,i.__)("Maintenance mode","content-blocks-builder"),renderFooter:()=>{const[t,r]=(0,o.useState)(!1);return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(l.Button,{variant:"primary",onClick:e=>{e.preventDefault(),r(!0),u("root","site").then((()=>{k({type:"success",message:n.Success})})).catch((e=>{log(e,"error"),k({type:"error",message:n.Error})})).finally((()=>{r(!1)}))}},n.UpdateSettings),t&&(0,e.createElement)(l.Spinner,null))},className:"maintenance-widget maintenance"},(0,e.createElement)(gt,{className:"fieldset"},(0,e.createElement)("div",{className:"fieldset__label"},(0,e.createElement)("strong",null,(0,i.__)("Turn on the maintenance mode.","content-blocks-builder"))),(0,t.isUndefined)(f)?(0,e.createElement)(l.Spinner,null):(0,e.createElement)(e.Fragment,null,(0,e.createElement)(l.ToggleControl,{label:(0,i.__)("Enable maintenance mode","content-blocks-builder"),checked:null!=m&&m,disabled:(0,t.isUndefined)(m),onChange:p}),m&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(l.TextareaControl,{label:(0,i.__)("Ignore slug","content-blocks-builder"),value:f,placeholder:"wp-login.php",onChange:g,help:(0,i.__)("Input the page slugs that will bypass the maintenance mode. Put each item on a new line.","content-blocks-builder"),rows:4}),(0,e.createElement)(l.ToggleControl,{label:(0,i.__)("Use a custom page as the maintenance page","content-blocks-builder"),checked:null!=h&&h,onChange:b}),h&&(0,e.createElement)(e.Fragment,null,a||(0,t.isUndefined)(r)?(0,e.createElement)(l.Spinner,null):(0,e.createElement)(l.SelectControl,{label:(0,i.__)("Custom maintenance page","content-blocks-builder"),value:y,onChange:_,options:d}))))),v&&v?.message&&(0,e.createElement)(l.Notice,{status:v?.type,isDismissible:!1},v.message))},En=()=>(0,e.createElement)(pt,{description:(0,i.__)("Settings for developer","content-blocks-builder")},(0,e.createElement)(vn,null),(0,e.createElement)(kn,null)),wn=({children:t})=>(0,e.createElement)("div",{className:"metabox-holder"},t),xn=()=>{const n=[{name:"getting-started",title:(0,i.__)("Getting Started","content-blocks-builder"),className:"setting-tabs__getting-started"},{name:"general",title:(0,i.__)("General","content-blocks-builder"),className:"setting-tabs__general"},{name:"typography",title:(0,i.__)("Typography","content-blocks-builder"),className:"setting-tabs__typography"},{name:"tools",title:(0,i.__)("Tools","content-blocks-builder"),className:"setting-tabs__tools"},{name:"developer",title:(0,i.__)("Developer","content-blocks-builder"),className:"setting-tabs__developer"}],r=new S,a=r.get("tab"),c=(0,t.findKey)(n,["name",a])?a:"getting-started",d=(()=>{const{loading:e,error:t,data:{data:n}={}}=((e,t={},n=[])=>{const[r,a]=(0,o.useState)(!0),[i,l]=(0,o.useState)(),[s,c]=(0,o.useState)(),d=(0,o.useCallback)((()=>{a(!0),l(void 0),c(void 0),p()({path:e,...{...f,...t}}).then(c).catch(l).finally((()=>a(!1)))}),n);return(0,o.useEffect)((()=>{d()}),[d]),{loading:r,error:i,data:s}})("boldblocks/v1/getDocs");let r="",a=!1;try{r=CBBSettings?.nonce,a=CBBSettings?.isPurgedCache}catch(t){log("The nonce is not defined!","error")}const[l,c]=(0,o.useState)(a),d={UpdateSettings:(0,i.__)("Update Settings","content-blocks-builder"),Success:(0,i.__)("Setting Saved!","content-blocks-builder"),Error:(0,i.__)("Something went wrong, please contact the author for support!","content-blocks-builder")},{records:u,isResolving:m}=(0,s.useEntityRecords)("postType","page",{per_page:100});return{Docs:{loading:e,error:t,docs:n},Debug:{nonce:r,isPurged:l,setIsPurged:c},Messages:d,pages:u,isResolvingPages:m}})();return(0,e.createElement)(C.Provider,{value:d},(0,e.createElement)(l.TabPanel,{tabs:n,className:"settings-tabs",activeClass:"is-active",initialTabName:c,onSelect:e=>{r.set("tab",e)}},(t=>{switch(t.name){case"getting-started":return(0,e.createElement)(wn,null,(0,e.createElement)(_t,null));case"general":return(0,e.createElement)(wn,null,(0,e.createElement)(an,null));case"typography":return(0,e.createElement)(wn,null,(0,e.createElement)(Xt,null));case"tools":return(0,e.createElement)(wn,null,(0,e.createElement)(bn,null));case"developer":return(0,e.createElement)(wn,null,(0,e.createElement)(En,null))}})))};a()((()=>{(0,o.render)((0,e.createElement)(xn,null),document.querySelector(".js-boldblocks-settings-root"))}))})()})();