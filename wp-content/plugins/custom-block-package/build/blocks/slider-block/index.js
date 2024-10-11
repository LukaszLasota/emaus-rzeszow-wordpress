(()=>{"use strict";var e,a={235:()=>{const e=window.wp.blocks,a=window.wp.i18n,t=JSON.parse('{"UU":"custom-block-package/slider-block"}'),s=window.React,l=window.wp.blockEditor,n=window.wp.components;function i(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function r(e,a){void 0===e&&(e={}),void 0===a&&(a={}),Object.keys(a).forEach((t=>{void 0===e[t]?e[t]=a[t]:i(a[t])&&i(e[t])&&Object.keys(a[t]).length>0&&r(e[t],a[t])}))}const o={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function c(){const e="undefined"!=typeof document?document:{};return r(e,o),e}const p={document:o,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function d(){const e="undefined"!=typeof window?window:{};return r(e,p),e}function u(e){return void 0===e&&(e=""),e.trim().split(" ").filter((e=>!!e.trim()))}function m(e,a){void 0===a&&(a=[]);const t=document.createElement(e);return t.classList.add(...Array.isArray(a)?a:u(a)),t}function g(e){let a,t=e;if(t){for(a=0;null!==(t=t.previousSibling);)1===t.nodeType&&(a+=1);return a}}function b(e){return(Array.isArray(e)?e:[e]).filter((e=>!!e))}function v(e,a,t,s){return e.params.createElements&&Object.keys(s).forEach((l=>{if(!t[l]&&!0===t.auto){let n=function(e,a){return void 0===a&&(a=""),[...e.children].filter((e=>e.matches(a)))}(e.el,`.${s[l]}`)[0];n||(n=m("div",s[l]),n.className=s[l],e.el.append(n)),t[l]=n,a[l]=n}})),t}function f(e){let{swiper:a,extendParams:t,on:s,emit:l}=e;function n(e){let t;return e&&"string"==typeof e&&a.isElement&&(t=a.el.querySelector(e),t)?t:(e&&("string"==typeof e&&(t=[...document.querySelectorAll(e)]),a.params.uniqueNavElements&&"string"==typeof e&&t&&t.length>1&&1===a.el.querySelectorAll(e).length?t=a.el.querySelector(e):t&&1===t.length&&(t=t[0])),e&&!t?e:t)}function i(e,t){const s=a.params.navigation;(e=b(e)).forEach((e=>{e&&(e.classList[t?"add":"remove"](...s.disabledClass.split(" ")),"BUTTON"===e.tagName&&(e.disabled=t),a.params.watchOverflow&&a.enabled&&e.classList[a.isLocked?"add":"remove"](s.lockClass))}))}function r(){const{nextEl:e,prevEl:t}=a.navigation;if(a.params.loop)return i(t,!1),void i(e,!1);i(t,a.isBeginning&&!a.params.rewind),i(e,a.isEnd&&!a.params.rewind)}function o(e){e.preventDefault(),(!a.isBeginning||a.params.loop||a.params.rewind)&&(a.slidePrev(),l("navigationPrev"))}function c(e){e.preventDefault(),(!a.isEnd||a.params.loop||a.params.rewind)&&(a.slideNext(),l("navigationNext"))}function p(){const e=a.params.navigation;if(a.params.navigation=v(a,a.originalParams.navigation,a.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!e.nextEl&&!e.prevEl)return;let t=n(e.nextEl),s=n(e.prevEl);Object.assign(a.navigation,{nextEl:t,prevEl:s}),t=b(t),s=b(s);const l=(t,s)=>{t&&t.addEventListener("click","next"===s?c:o),!a.enabled&&t&&t.classList.add(...e.lockClass.split(" "))};t.forEach((e=>l(e,"next"))),s.forEach((e=>l(e,"prev")))}function d(){let{nextEl:e,prevEl:t}=a.navigation;e=b(e),t=b(t);const s=(e,t)=>{e.removeEventListener("click","next"===t?c:o),e.classList.remove(...a.params.navigation.disabledClass.split(" "))};e.forEach((e=>s(e,"next"))),t.forEach((e=>s(e,"prev")))}t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),a.navigation={nextEl:null,prevEl:null},s("init",(()=>{!1===a.params.navigation.enabled?u():(p(),r())})),s("toEdge fromEdge lock unlock",(()=>{r()})),s("destroy",(()=>{d()})),s("enable disable",(()=>{let{nextEl:e,prevEl:t}=a.navigation;e=b(e),t=b(t),a.enabled?r():[...e,...t].filter((e=>!!e)).forEach((e=>e.classList.add(a.params.navigation.lockClass)))})),s("click",((e,t)=>{let{nextEl:s,prevEl:n}=a.navigation;s=b(s),n=b(n);const i=t.target;let r=n.includes(i)||s.includes(i);if(a.isElement&&!r){const e=t.path||t.composedPath&&t.composedPath();e&&(r=e.find((e=>s.includes(e)||n.includes(e))))}if(a.params.navigation.hideOnClick&&!r){if(a.pagination&&a.params.pagination&&a.params.pagination.clickable&&(a.pagination.el===i||a.pagination.el.contains(i)))return;let e;s.length?e=s[0].classList.contains(a.params.navigation.hiddenClass):n.length&&(e=n[0].classList.contains(a.params.navigation.hiddenClass)),l(!0===e?"navigationShow":"navigationHide"),[...s,...n].filter((e=>!!e)).forEach((e=>e.classList.toggle(a.params.navigation.hiddenClass)))}}));const u=()=>{a.el.classList.add(...a.params.navigation.navigationDisabledClass.split(" ")),d()};Object.assign(a.navigation,{enable:()=>{a.el.classList.remove(...a.params.navigation.navigationDisabledClass.split(" ")),p(),r()},disable:u,update:r,init:p,destroy:d})}function y(e){return void 0===e&&(e=""),`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function h(e){let{swiper:a,extendParams:t,on:s,emit:l}=e;const n="swiper-pagination";let i;t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${n}-bullet`,bulletActiveClass:`${n}-bullet-active`,modifierClass:`${n}-`,currentClass:`${n}-current`,totalClass:`${n}-total`,hiddenClass:`${n}-hidden`,progressbarFillClass:`${n}-progressbar-fill`,progressbarOppositeClass:`${n}-progressbar-opposite`,clickableClass:`${n}-clickable`,lockClass:`${n}-lock`,horizontalClass:`${n}-horizontal`,verticalClass:`${n}-vertical`,paginationDisabledClass:`${n}-disabled`}}),a.pagination={el:null,bullets:[]};let r=0;function o(){return!a.params.pagination.el||!a.pagination.el||Array.isArray(a.pagination.el)&&0===a.pagination.el.length}function c(e,t){const{bulletActiveClass:s}=a.params.pagination;e&&(e=e[("prev"===t?"previous":"next")+"ElementSibling"])&&(e.classList.add(`${s}-${t}`),(e=e[("prev"===t?"previous":"next")+"ElementSibling"])&&e.classList.add(`${s}-${t}-${t}`))}function p(e){const t=e.target.closest(y(a.params.pagination.bulletClass));if(!t)return;e.preventDefault();const s=g(t)*a.params.slidesPerGroup;if(a.params.loop){if(a.realIndex===s)return;a.slideToLoop(s)}else a.slideTo(s)}function u(){const e=a.rtl,t=a.params.pagination;if(o())return;let s,n,p=a.pagination.el;p=b(p);const u=a.virtual&&a.params.virtual.enabled?a.virtual.slides.length:a.slides.length,m=a.params.loop?Math.ceil(u/a.params.slidesPerGroup):a.snapGrid.length;if(a.params.loop?(n=a.previousRealIndex||0,s=a.params.slidesPerGroup>1?Math.floor(a.realIndex/a.params.slidesPerGroup):a.realIndex):void 0!==a.snapIndex?(s=a.snapIndex,n=a.previousSnapIndex):(n=a.previousIndex||0,s=a.activeIndex||0),"bullets"===t.type&&a.pagination.bullets&&a.pagination.bullets.length>0){const l=a.pagination.bullets;let o,u,m;if(t.dynamicBullets&&(i=function(e,a,t){const s=d();return e["width"===a?"offsetWidth":"offsetHeight"]+parseFloat(s.getComputedStyle(e,null).getPropertyValue("width"===a?"margin-right":"margin-top"))+parseFloat(s.getComputedStyle(e,null).getPropertyValue("width"===a?"margin-left":"margin-bottom"))}(l[0],a.isHorizontal()?"width":"height"),p.forEach((e=>{e.style[a.isHorizontal()?"width":"height"]=i*(t.dynamicMainBullets+4)+"px"})),t.dynamicMainBullets>1&&void 0!==n&&(r+=s-(n||0),r>t.dynamicMainBullets-1?r=t.dynamicMainBullets-1:r<0&&(r=0)),o=Math.max(s-r,0),u=o+(Math.min(l.length,t.dynamicMainBullets)-1),m=(u+o)/2),l.forEach((e=>{const a=[...["","-next","-next-next","-prev","-prev-prev","-main"].map((e=>`${t.bulletActiveClass}${e}`))].map((e=>"string"==typeof e&&e.includes(" ")?e.split(" "):e)).flat();e.classList.remove(...a)})),p.length>1)l.forEach((e=>{const l=g(e);l===s?e.classList.add(...t.bulletActiveClass.split(" ")):a.isElement&&e.setAttribute("part","bullet"),t.dynamicBullets&&(l>=o&&l<=u&&e.classList.add(...`${t.bulletActiveClass}-main`.split(" ")),l===o&&c(e,"prev"),l===u&&c(e,"next"))}));else{const e=l[s];if(e&&e.classList.add(...t.bulletActiveClass.split(" ")),a.isElement&&l.forEach(((e,a)=>{e.setAttribute("part",a===s?"bullet-active":"bullet")})),t.dynamicBullets){const e=l[o],a=l[u];for(let e=o;e<=u;e+=1)l[e]&&l[e].classList.add(...`${t.bulletActiveClass}-main`.split(" "));c(e,"prev"),c(a,"next")}}if(t.dynamicBullets){const s=Math.min(l.length,t.dynamicMainBullets+4),n=(i*s-i)/2-m*i,r=e?"right":"left";l.forEach((e=>{e.style[a.isHorizontal()?r:"top"]=`${n}px`}))}}p.forEach(((e,n)=>{if("fraction"===t.type&&(e.querySelectorAll(y(t.currentClass)).forEach((e=>{e.textContent=t.formatFractionCurrent(s+1)})),e.querySelectorAll(y(t.totalClass)).forEach((e=>{e.textContent=t.formatFractionTotal(m)}))),"progressbar"===t.type){let l;l=t.progressbarOpposite?a.isHorizontal()?"vertical":"horizontal":a.isHorizontal()?"horizontal":"vertical";const n=(s+1)/m;let i=1,r=1;"horizontal"===l?i=n:r=n,e.querySelectorAll(y(t.progressbarFillClass)).forEach((e=>{e.style.transform=`translate3d(0,0,0) scaleX(${i}) scaleY(${r})`,e.style.transitionDuration=`${a.params.speed}ms`}))}"custom"===t.type&&t.renderCustom?(e.innerHTML=t.renderCustom(a,s+1,m),0===n&&l("paginationRender",e)):(0===n&&l("paginationRender",e),l("paginationUpdate",e)),a.params.watchOverflow&&a.enabled&&e.classList[a.isLocked?"add":"remove"](t.lockClass)}))}function m(){const e=a.params.pagination;if(o())return;const t=a.virtual&&a.params.virtual.enabled?a.virtual.slides.length:a.grid&&a.params.grid.rows>1?a.slides.length/Math.ceil(a.params.grid.rows):a.slides.length;let s=a.pagination.el;s=b(s);let n="";if("bullets"===e.type){let s=a.params.loop?Math.ceil(t/a.params.slidesPerGroup):a.snapGrid.length;a.params.freeMode&&a.params.freeMode.enabled&&s>t&&(s=t);for(let t=0;t<s;t+=1)e.renderBullet?n+=e.renderBullet.call(a,t,e.bulletClass):n+=`<${e.bulletElement} ${a.isElement?'part="bullet"':""} class="${e.bulletClass}"></${e.bulletElement}>`}"fraction"===e.type&&(n=e.renderFraction?e.renderFraction.call(a,e.currentClass,e.totalClass):`<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),"progressbar"===e.type&&(n=e.renderProgressbar?e.renderProgressbar.call(a,e.progressbarFillClass):`<span class="${e.progressbarFillClass}"></span>`),a.pagination.bullets=[],s.forEach((t=>{"custom"!==e.type&&(t.innerHTML=n||""),"bullets"===e.type&&a.pagination.bullets.push(...t.querySelectorAll(y(e.bulletClass)))})),"custom"!==e.type&&l("paginationRender",s[0])}function f(){a.params.pagination=v(a,a.originalParams.pagination,a.params.pagination,{el:"swiper-pagination"});const e=a.params.pagination;if(!e.el)return;let t;"string"==typeof e.el&&a.isElement&&(t=a.el.querySelector(e.el)),t||"string"!=typeof e.el||(t=[...document.querySelectorAll(e.el)]),t||(t=e.el),t&&0!==t.length&&(a.params.uniqueNavElements&&"string"==typeof e.el&&Array.isArray(t)&&t.length>1&&(t=[...a.el.querySelectorAll(e.el)],t.length>1&&(t=t.filter((e=>function(e,a){const t=[];let s=e.parentElement;for(;s;)a?s.matches(a)&&t.push(s):t.push(s),s=s.parentElement;return t}(e,".swiper")[0]===a.el))[0])),Array.isArray(t)&&1===t.length&&(t=t[0]),Object.assign(a.pagination,{el:t}),t=b(t),t.forEach((t=>{"bullets"===e.type&&e.clickable&&t.classList.add(...(e.clickableClass||"").split(" ")),t.classList.add(e.modifierClass+e.type),t.classList.add(a.isHorizontal()?e.horizontalClass:e.verticalClass),"bullets"===e.type&&e.dynamicBullets&&(t.classList.add(`${e.modifierClass}${e.type}-dynamic`),r=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),"progressbar"===e.type&&e.progressbarOpposite&&t.classList.add(e.progressbarOppositeClass),e.clickable&&t.addEventListener("click",p),a.enabled||t.classList.add(e.lockClass)})))}function h(){const e=a.params.pagination;if(o())return;let t=a.pagination.el;t&&(t=b(t),t.forEach((t=>{t.classList.remove(e.hiddenClass),t.classList.remove(e.modifierClass+e.type),t.classList.remove(a.isHorizontal()?e.horizontalClass:e.verticalClass),e.clickable&&(t.classList.remove(...(e.clickableClass||"").split(" ")),t.removeEventListener("click",p))}))),a.pagination.bullets&&a.pagination.bullets.forEach((a=>a.classList.remove(...e.bulletActiveClass.split(" "))))}s("changeDirection",(()=>{if(!a.pagination||!a.pagination.el)return;const e=a.params.pagination;let{el:t}=a.pagination;t=b(t),t.forEach((t=>{t.classList.remove(e.horizontalClass,e.verticalClass),t.classList.add(a.isHorizontal()?e.horizontalClass:e.verticalClass)}))})),s("init",(()=>{!1===a.params.pagination.enabled?E():(f(),m(),u())})),s("activeIndexChange",(()=>{void 0===a.snapIndex&&u()})),s("snapIndexChange",(()=>{u()})),s("snapGridLengthChange",(()=>{m(),u()})),s("destroy",(()=>{h()})),s("enable disable",(()=>{let{el:e}=a.pagination;e&&(e=b(e),e.forEach((e=>e.classList[a.enabled?"remove":"add"](a.params.pagination.lockClass))))})),s("lock unlock",(()=>{u()})),s("click",((e,t)=>{const s=t.target,n=b(a.pagination.el);if(a.params.pagination.el&&a.params.pagination.hideOnClick&&n&&n.length>0&&!s.classList.contains(a.params.pagination.bulletClass)){if(a.navigation&&(a.navigation.nextEl&&s===a.navigation.nextEl||a.navigation.prevEl&&s===a.navigation.prevEl))return;const e=n[0].classList.contains(a.params.pagination.hiddenClass);l(!0===e?"paginationShow":"paginationHide"),n.forEach((e=>e.classList.toggle(a.params.pagination.hiddenClass)))}}));const E=()=>{a.el.classList.add(a.params.pagination.paginationDisabledClass);let{el:e}=a.pagination;e&&(e=b(e),e.forEach((e=>e.classList.add(a.params.pagination.paginationDisabledClass)))),h()};Object.assign(a.pagination,{enable:()=>{a.el.classList.remove(a.params.pagination.paginationDisabledClass);let{el:e}=a.pagination;e&&(e=b(e),e.forEach((e=>e.classList.remove(a.params.pagination.paginationDisabledClass)))),f(),m(),u()},disable:E,render:m,update:u,init:f,destroy:h})}function E(e){let{swiper:a,extendParams:t,on:s,emit:l}=e;const n=c();let i,r,o,p,g=!1,f=null,h=null;function E(){if(!a.params.scrollbar.el||!a.scrollbar.el)return;const{scrollbar:e,rtlTranslate:t}=a,{dragEl:s,el:l}=e,n=a.params.scrollbar,i=a.params.loop?a.progressLoop:a.progress;let c=r,p=(o-r)*i;t?(p=-p,p>0?(c=r-p,p=0):-p+r>o&&(c=o+p)):p<0?(c=r+p,p=0):p+r>o&&(c=o-p),a.isHorizontal()?(s.style.transform=`translate3d(${p}px, 0, 0)`,s.style.width=`${c}px`):(s.style.transform=`translate3d(0px, ${p}px, 0)`,s.style.height=`${c}px`),n.hide&&(clearTimeout(f),l.style.opacity=1,f=setTimeout((()=>{l.style.opacity=0,l.style.transitionDuration="400ms"}),1e3))}function w(){if(!a.params.scrollbar.el||!a.scrollbar.el)return;const{scrollbar:e}=a,{dragEl:t,el:s}=e;t.style.width="",t.style.height="",o=a.isHorizontal()?s.offsetWidth:s.offsetHeight,p=a.size/(a.virtualSize+a.params.slidesOffsetBefore-(a.params.centeredSlides?a.snapGrid[0]:0)),r="auto"===a.params.scrollbar.dragSize?o*p:parseInt(a.params.scrollbar.dragSize,10),a.isHorizontal()?t.style.width=`${r}px`:t.style.height=`${r}px`,s.style.display=p>=1?"none":"",a.params.scrollbar.hide&&(s.style.opacity=0),a.params.watchOverflow&&a.enabled&&e.el.classList[a.isLocked?"add":"remove"](a.params.scrollbar.lockClass)}function C(e){return a.isHorizontal()?e.clientX:e.clientY}function L(e){const{scrollbar:t,rtlTranslate:s}=a,{el:l}=t;let n;n=(C(e)-function(e){const a=d(),t=c(),s=e.getBoundingClientRect(),l=t.body,n=e.clientTop||l.clientTop||0,i=e.clientLeft||l.clientLeft||0,r=e===a?a.scrollY:e.scrollTop,o=e===a?a.scrollX:e.scrollLeft;return{top:s.top+r-n,left:s.left+o-i}}(l)[a.isHorizontal()?"left":"top"]-(null!==i?i:r/2))/(o-r),n=Math.max(Math.min(n,1),0),s&&(n=1-n);const p=a.minTranslate()+(a.maxTranslate()-a.minTranslate())*n;a.updateProgress(p),a.setTranslate(p),a.updateActiveIndex(),a.updateSlidesClasses()}function k(e){const t=a.params.scrollbar,{scrollbar:s,wrapperEl:n}=a,{el:r,dragEl:o}=s;g=!0,i=e.target===o?C(e)-e.target.getBoundingClientRect()[a.isHorizontal()?"left":"top"]:null,e.preventDefault(),e.stopPropagation(),n.style.transitionDuration="100ms",o.style.transitionDuration="100ms",L(e),clearTimeout(h),r.style.transitionDuration="0ms",t.hide&&(r.style.opacity=1),a.params.cssMode&&(a.wrapperEl.style["scroll-snap-type"]="none"),l("scrollbarDragStart",e)}function x(e){const{scrollbar:t,wrapperEl:s}=a,{el:n,dragEl:i}=t;g&&(e.preventDefault&&e.cancelable?e.preventDefault():e.returnValue=!1,L(e),s.style.transitionDuration="0ms",n.style.transitionDuration="0ms",i.style.transitionDuration="0ms",l("scrollbarDragMove",e))}function S(e){const t=a.params.scrollbar,{scrollbar:s,wrapperEl:n}=a,{el:i}=s;var r;g&&(g=!1,a.params.cssMode&&(a.wrapperEl.style["scroll-snap-type"]="",n.style.transitionDuration=""),t.hide&&(clearTimeout(h),void 0===(r=1e3)&&(r=0),h=setTimeout((()=>{i.style.opacity=0,i.style.transitionDuration="400ms"}),r)),l("scrollbarDragEnd",e),t.snapOnRelease&&a.slideToClosest())}function T(e){const{scrollbar:t,params:s}=a,l=t.el;if(!l)return;const i=l,r=!!s.passiveListeners&&{passive:!1,capture:!1},o=!!s.passiveListeners&&{passive:!0,capture:!1};if(!i)return;const c="on"===e?"addEventListener":"removeEventListener";i[c]("pointerdown",k,r),n[c]("pointermove",x,r),n[c]("pointerup",S,o)}function A(){const{scrollbar:e,el:t}=a;a.params.scrollbar=v(a,a.originalParams.scrollbar,a.params.scrollbar,{el:"swiper-scrollbar"});const s=a.params.scrollbar;if(!s.el)return;let l,i;if("string"==typeof s.el&&a.isElement&&(l=a.el.querySelector(s.el)),l||"string"!=typeof s.el)l||(l=s.el);else if(l=n.querySelectorAll(s.el),!l.length)return;a.params.uniqueNavElements&&"string"==typeof s.el&&l.length>1&&1===t.querySelectorAll(s.el).length&&(l=t.querySelector(s.el)),l.length>0&&(l=l[0]),l.classList.add(a.isHorizontal()?s.horizontalClass:s.verticalClass),l&&(i=l.querySelector(y(a.params.scrollbar.dragClass)),i||(i=m("div",a.params.scrollbar.dragClass),l.append(i))),Object.assign(e,{el:l,dragEl:i}),s.draggable&&a.params.scrollbar.el&&a.scrollbar.el&&T("on"),l&&l.classList[a.enabled?"remove":"add"](...u(a.params.scrollbar.lockClass))}function M(){const e=a.params.scrollbar,t=a.scrollbar.el;t&&t.classList.remove(...u(a.isHorizontal()?e.horizontalClass:e.verticalClass)),a.params.scrollbar.el&&a.scrollbar.el&&T("off")}t({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),a.scrollbar={el:null,dragEl:null},s("changeDirection",(()=>{if(!a.scrollbar||!a.scrollbar.el)return;const e=a.params.scrollbar;let{el:t}=a.scrollbar;t=b(t),t.forEach((t=>{t.classList.remove(e.horizontalClass,e.verticalClass),t.classList.add(a.isHorizontal()?e.horizontalClass:e.verticalClass)}))})),s("init",(()=>{!1===a.params.scrollbar.enabled?D():(A(),w(),E())})),s("update resize observerUpdate lock unlock changeDirection",(()=>{w()})),s("setTranslate",(()=>{E()})),s("setTransition",((e,t)=>{!function(e){a.params.scrollbar.el&&a.scrollbar.el&&(a.scrollbar.dragEl.style.transitionDuration=`${e}ms`)}(t)})),s("enable disable",(()=>{const{el:e}=a.scrollbar;e&&e.classList[a.enabled?"remove":"add"](...u(a.params.scrollbar.lockClass))})),s("destroy",(()=>{M()}));const D=()=>{a.el.classList.add(...u(a.params.scrollbar.scrollbarDisabledClass)),a.scrollbar.el&&a.scrollbar.el.classList.add(...u(a.params.scrollbar.scrollbarDisabledClass)),M()};Object.assign(a.scrollbar,{enable:()=>{a.el.classList.remove(...u(a.params.scrollbar.scrollbarDisabledClass)),a.scrollbar.el&&a.scrollbar.el.classList.remove(...u(a.params.scrollbar.scrollbarDisabledClass)),A(),w(),E()},disable:D,updateSize:w,setTranslate:E,init:A,destroy:M})}function w(e){let{swiper:a,extendParams:t,on:s}=e;t({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null}}),a.a11y={clicked:!1};let l,n,i=null,r=(new Date).getTime();function o(e){const a=i;0!==a.length&&(a.innerHTML="",a.innerHTML=e)}function p(e){(e=b(e)).forEach((e=>{e.setAttribute("tabIndex","0")}))}function d(e){(e=b(e)).forEach((e=>{e.setAttribute("tabIndex","-1")}))}function u(e,a){(e=b(e)).forEach((e=>{e.setAttribute("role",a)}))}function v(e,a){(e=b(e)).forEach((e=>{e.setAttribute("aria-roledescription",a)}))}function f(e,a){(e=b(e)).forEach((e=>{e.setAttribute("aria-label",a)}))}function h(e){(e=b(e)).forEach((e=>{e.setAttribute("aria-disabled",!0)}))}function E(e){(e=b(e)).forEach((e=>{e.setAttribute("aria-disabled",!1)}))}function w(e){if(13!==e.keyCode&&32!==e.keyCode)return;const t=a.params.a11y,s=e.target;if(!a.pagination||!a.pagination.el||s!==a.pagination.el&&!a.pagination.el.contains(e.target)||e.target.matches(y(a.params.pagination.bulletClass))){if(a.navigation&&a.navigation.prevEl&&a.navigation.nextEl){const e=b(a.navigation.prevEl);b(a.navigation.nextEl).includes(s)&&(a.isEnd&&!a.params.loop||a.slideNext(),a.isEnd?o(t.lastSlideMessage):o(t.nextSlideMessage)),e.includes(s)&&(a.isBeginning&&!a.params.loop||a.slidePrev(),a.isBeginning?o(t.firstSlideMessage):o(t.prevSlideMessage))}a.pagination&&s.matches(y(a.params.pagination.bulletClass))&&s.click()}}function C(){return a.pagination&&a.pagination.bullets&&a.pagination.bullets.length}function L(){return C()&&a.params.pagination.clickable}const k=(e,a,t)=>{p(e),"BUTTON"!==e.tagName&&(u(e,"button"),e.addEventListener("keydown",w)),f(e,t),function(e,a){(e=b(e)).forEach((e=>{e.setAttribute("aria-controls",a)}))}(e,a)},x=e=>{n&&n!==e.target&&!n.contains(e.target)&&(l=!0),a.a11y.clicked=!0},S=()=>{l=!1,requestAnimationFrame((()=>{requestAnimationFrame((()=>{a.destroyed||(a.a11y.clicked=!1)}))}))},T=e=>{r=(new Date).getTime()},A=e=>{if(a.a11y.clicked)return;if((new Date).getTime()-r<100)return;const t=e.target.closest(`.${a.params.slideClass}, swiper-slide`);if(!t||!a.slides.includes(t))return;n=t;const s=a.slides.indexOf(t)===a.activeIndex,i=a.params.watchSlidesProgress&&a.visibleSlides&&a.visibleSlides.includes(t);s||i||e.sourceCapabilities&&e.sourceCapabilities.firesTouchEvents||(a.isHorizontal()?a.el.scrollLeft=0:a.el.scrollTop=0,requestAnimationFrame((()=>{l||(a.params.loop?a.slideToLoop(parseInt(t.getAttribute("data-swiper-slide-index")),0):a.slideTo(a.slides.indexOf(t),0),l=!1)})))},M=()=>{const e=a.params.a11y;e.itemRoleDescriptionMessage&&v(a.slides,e.itemRoleDescriptionMessage),e.slideRole&&u(a.slides,e.slideRole);const t=a.slides.length;e.slideLabelMessage&&a.slides.forEach(((s,l)=>{const n=a.params.loop?parseInt(s.getAttribute("data-swiper-slide-index"),10):l;f(s,e.slideLabelMessage.replace(/\{\{index\}\}/,n+1).replace(/\{\{slidesLength\}\}/,t))}))};s("beforeInit",(()=>{i=m("span",a.params.a11y.notificationClass),i.setAttribute("aria-live","assertive"),i.setAttribute("aria-atomic","true")})),s("afterInit",(()=>{a.params.a11y.enabled&&(()=>{const e=a.params.a11y;a.el.append(i);const t=a.el;e.containerRoleDescriptionMessage&&v(t,e.containerRoleDescriptionMessage),e.containerMessage&&f(t,e.containerMessage);const s=a.wrapperEl,l=e.id||s.getAttribute("id")||`swiper-wrapper-${n=16,void 0===n&&(n=16),"x".repeat(n).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}`;var n;const r=a.params.autoplay&&a.params.autoplay.enabled?"off":"polite";var o;o=l,b(s).forEach((e=>{e.setAttribute("id",o)})),function(e,a){(e=b(e)).forEach((e=>{e.setAttribute("aria-live",a)}))}(s,r),M();let{nextEl:p,prevEl:d}=a.navigation?a.navigation:{};p=b(p),d=b(d),p&&p.forEach((a=>k(a,l,e.nextSlideMessage))),d&&d.forEach((a=>k(a,l,e.prevSlideMessage))),L()&&b(a.pagination.el).forEach((e=>{e.addEventListener("keydown",w)})),c().addEventListener("visibilitychange",T),a.el.addEventListener("focus",A,!0),a.el.addEventListener("focus",A,!0),a.el.addEventListener("pointerdown",x,!0),a.el.addEventListener("pointerup",S,!0)})()})),s("slidesLengthChange snapGridLengthChange slidesGridLengthChange",(()=>{a.params.a11y.enabled&&M()})),s("fromEdge toEdge afterInit lock unlock",(()=>{a.params.a11y.enabled&&function(){if(a.params.loop||a.params.rewind||!a.navigation)return;const{nextEl:e,prevEl:t}=a.navigation;t&&(a.isBeginning?(h(t),d(t)):(E(t),p(t))),e&&(a.isEnd?(h(e),d(e)):(E(e),p(e)))}()})),s("paginationUpdate",(()=>{a.params.a11y.enabled&&function(){const e=a.params.a11y;C()&&a.pagination.bullets.forEach((t=>{a.params.pagination.clickable&&(p(t),a.params.pagination.renderBullet||(u(t,"button"),f(t,e.paginationBulletMessage.replace(/\{\{index\}\}/,g(t)+1)))),t.matches(y(a.params.pagination.bulletActiveClass))?t.setAttribute("aria-current","true"):t.removeAttribute("aria-current")}))}()})),s("destroy",(()=>{a.params.a11y.enabled&&function(){i&&i.remove();let{nextEl:e,prevEl:t}=a.navigation?a.navigation:{};e=b(e),t=b(t),e&&e.forEach((e=>e.removeEventListener("keydown",w))),t&&t.forEach((e=>e.removeEventListener("keydown",w))),L()&&b(a.pagination.el).forEach((e=>{e.removeEventListener("keydown",w)})),c().removeEventListener("visibilitychange",T),a.el&&"string"!=typeof a.el&&(a.el.removeEventListener("focus",A,!0),a.el.removeEventListener("pointerdown",x,!0),a.el.removeEventListener("pointerup",S,!0))}()}))}function C(e){let a,t,{swiper:s,extendParams:l,on:n,emit:i,params:r}=e;s.autoplay={running:!1,paused:!1,timeLeft:0},l({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,p,d,u,m,g,b,v,f=r&&r.autoplay?r.autoplay.delay:3e3,y=r&&r.autoplay?r.autoplay.delay:3e3,h=(new Date).getTime();function E(e){s&&!s.destroyed&&s.wrapperEl&&e.target===s.wrapperEl&&(s.wrapperEl.removeEventListener("transitionend",E),v||e.detail&&e.detail.bySwiperTouchMove||S())}const w=()=>{if(s.destroyed||!s.autoplay.running)return;s.autoplay.paused?p=!0:p&&(y=o,p=!1);const e=s.autoplay.paused?o:h+y-(new Date).getTime();s.autoplay.timeLeft=e,i("autoplayTimeLeft",e,e/f),t=requestAnimationFrame((()=>{w()}))},C=e=>{if(s.destroyed||!s.autoplay.running)return;cancelAnimationFrame(t),w();let l=void 0===e?s.params.autoplay.delay:e;f=s.params.autoplay.delay,y=s.params.autoplay.delay;const n=(()=>{let e;if(e=s.virtual&&s.params.virtual.enabled?s.slides.filter((e=>e.classList.contains("swiper-slide-active")))[0]:s.slides[s.activeIndex],e)return parseInt(e.getAttribute("data-swiper-autoplay"),10)})();!Number.isNaN(n)&&n>0&&void 0===e&&(l=n,f=n,y=n),o=l;const r=s.params.speed,c=()=>{s&&!s.destroyed&&(s.params.autoplay.reverseDirection?!s.isBeginning||s.params.loop||s.params.rewind?(s.slidePrev(r,!0,!0),i("autoplay")):s.params.autoplay.stopOnLastSlide||(s.slideTo(s.slides.length-1,r,!0,!0),i("autoplay")):!s.isEnd||s.params.loop||s.params.rewind?(s.slideNext(r,!0,!0),i("autoplay")):s.params.autoplay.stopOnLastSlide||(s.slideTo(0,r,!0,!0),i("autoplay")),s.params.cssMode&&(h=(new Date).getTime(),requestAnimationFrame((()=>{C()}))))};return l>0?(clearTimeout(a),a=setTimeout((()=>{c()}),l)):requestAnimationFrame((()=>{c()})),l},L=()=>{h=(new Date).getTime(),s.autoplay.running=!0,C(),i("autoplayStart")},k=()=>{s.autoplay.running=!1,clearTimeout(a),cancelAnimationFrame(t),i("autoplayStop")},x=(e,t)=>{if(s.destroyed||!s.autoplay.running)return;clearTimeout(a),e||(b=!0);const l=()=>{i("autoplayPause"),s.params.autoplay.waitForTransition?s.wrapperEl.addEventListener("transitionend",E):S()};if(s.autoplay.paused=!0,t)return g&&(o=s.params.autoplay.delay),g=!1,void l();const n=o||s.params.autoplay.delay;o=n-((new Date).getTime()-h),s.isEnd&&o<0&&!s.params.loop||(o<0&&(o=0),l())},S=()=>{s.isEnd&&o<0&&!s.params.loop||s.destroyed||!s.autoplay.running||(h=(new Date).getTime(),b?(b=!1,C(o)):C(),s.autoplay.paused=!1,i("autoplayResume"))},T=()=>{if(s.destroyed||!s.autoplay.running)return;const e=c();"hidden"===e.visibilityState&&(b=!0,x(!0)),"visible"===e.visibilityState&&S()},A=e=>{"mouse"===e.pointerType&&(b=!0,v=!0,s.animating||s.autoplay.paused||x(!0))},M=e=>{"mouse"===e.pointerType&&(v=!1,s.autoplay.paused&&S())};n("init",(()=>{s.params.autoplay.enabled&&(s.params.autoplay.pauseOnMouseEnter&&(s.el.addEventListener("pointerenter",A),s.el.addEventListener("pointerleave",M)),c().addEventListener("visibilitychange",T),L())})),n("destroy",(()=>{s.el&&"string"!=typeof s.el&&(s.el.removeEventListener("pointerenter",A),s.el.removeEventListener("pointerleave",M)),c().removeEventListener("visibilitychange",T),s.autoplay.running&&k()})),n("_freeModeStaticRelease",(()=>{(u||b)&&S()})),n("_freeModeNoMomentumRelease",(()=>{s.params.autoplay.disableOnInteraction?k():x(!0,!0)})),n("beforeTransitionStart",((e,a,t)=>{!s.destroyed&&s.autoplay.running&&(t||!s.params.autoplay.disableOnInteraction?x(!0,!0):k())})),n("sliderFirstMove",(()=>{!s.destroyed&&s.autoplay.running&&(s.params.autoplay.disableOnInteraction?k():(d=!0,u=!1,b=!1,m=setTimeout((()=>{b=!0,u=!0,x(!0)}),200)))})),n("touchEnd",(()=>{if(!s.destroyed&&s.autoplay.running&&d){if(clearTimeout(m),clearTimeout(a),s.params.autoplay.disableOnInteraction)return u=!1,void(d=!1);u&&s.params.cssMode&&S(),u=!1,d=!1}})),n("slideChange",(()=>{!s.destroyed&&s.autoplay.running&&(g=!0)})),Object.assign(s.autoplay,{start:L,stop:k,pause:x,resume:S})}Swiper.use([f,h,E,w,C]);(0,e.registerBlockType)(t.UU,{edit:e=>{const{attributes:t,setAttributes:i}=e,{slides:r=[]}=t,o=(0,s.useRef)(null);return(0,s.useEffect)((()=>{o.current&&r.length&&new Swiper(o.current,{modules:[f,h,E,w,C],slidesPerView:1,speed:500,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:2e3}})}),[r]),(0,s.createElement)(s.Fragment,null,(0,s.createElement)(l.InspectorControls,null,(0,s.createElement)(n.PanelBody,{title:(0,a.__)("Slider Settings","slider-block")},(0,s.createElement)(l.MediaUploadCheck,null,(0,s.createElement)(l.MediaUpload,{onSelect:e=>{const a=r?[...r,{url:e.url,alt:e.alt,id:e.id}]:[{url:e.url,alt:e.alt,id:e.id}];i({slides:a})},allowedTypes:["image"],render:({open:e})=>(0,s.createElement)(n.Button,{onClick:e,isPrimary:!0},(0,a.__)("Add Slide","slider-block"))}))),(0,s.createElement)(n.PanelBody,{title:(0,a.__)("Slides","slider-block")},r.length>0?r.map(((e,t)=>(0,s.createElement)(n.PanelRow,{key:t},(0,s.createElement)("img",{src:e.url,alt:e.alt,style:{width:"100px",height:"auto"}}),(0,s.createElement)(n.Button,{onClick:()=>(e=>{const a=r.filter(((a,t)=>t!==e));i({slides:a})})(t),isSecondary:!0},(0,a.__)("Remove","slider-block"))))):(0,s.createElement)(n.PanelRow,null,(0,a.__)("No slides added yet.","slider-block")))),(0,s.createElement)("div",{...(0,l.useBlockProps)()},(0,s.createElement)("div",{className:"swiper-container",ref:o},(0,s.createElement)("div",{className:"swiper-wrapper"},r.length>0&&r.map(((e,a)=>(0,s.createElement)("div",{className:"swiper-slide",key:a},(0,s.createElement)("img",{src:e.url,alt:e.alt,"data-imageid":e.id,style:{width:"100%",height:"auto"}}))))),(0,s.createElement)("div",{className:"swiper-pagination"}),(0,s.createElement)("div",{className:"swiper-button-next"}),(0,s.createElement)("div",{className:"swiper-button-prev"}))))},save:e=>{const{attributes:a}=e,{slides:t=[]}=a;return useEffect((()=>{document.querySelectorAll(".swiper-container").forEach((e=>{new Swiper(e,{modules:[f,h,E,w,C],slidesPerView:1,speed:500,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:2e3}})}))}),[]),(0,s.createElement)("div",{...l.useBlockProps.save(),style:{position:"relative"}},(0,s.createElement)("div",{className:"swiper-container"},(0,s.createElement)("div",{className:"swiper-wrapper"},t.length>0&&t.map(((e,a)=>(0,s.createElement)("div",{className:"swiper-slide",key:a},(0,s.createElement)("img",{key:a,src:e.url,alt:e.alt,style:{width:"100%",height:"auto"}}))))),(0,s.createElement)("div",{className:"swiper-pagination"}),(0,s.createElement)("div",{className:"swiper-button-next"}),(0,s.createElement)("div",{className:"swiper-button-prev"})))}})}},t={};function s(e){var l=t[e];if(void 0!==l)return l.exports;var n=t[e]={exports:{}};return a[e](n,n.exports,s),n.exports}s.m=a,e=[],s.O=(a,t,l,n)=>{if(!t){var i=1/0;for(p=0;p<e.length;p++){for(var[t,l,n]=e[p],r=!0,o=0;o<t.length;o++)(!1&n||i>=n)&&Object.keys(s.O).every((e=>s.O[e](t[o])))?t.splice(o--,1):(r=!1,n<i&&(i=n));if(r){e.splice(p--,1);var c=l();void 0!==c&&(a=c)}}return a}n=n||0;for(var p=e.length;p>0&&e[p-1][2]>n;p--)e[p]=e[p-1];e[p]=[t,l,n]},s.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),(()=>{var e={270:0,834:0};s.O.j=a=>0===e[a];var a=(a,t)=>{var l,n,[i,r,o]=t,c=0;if(i.some((a=>0!==e[a]))){for(l in r)s.o(r,l)&&(s.m[l]=r[l]);if(o)var p=o(s)}for(a&&a(t);c<i.length;c++)n=i[c],s.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return s.O(p)},t=globalThis.webpackChunkcustom_block_package=globalThis.webpackChunkcustom_block_package||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})();var l=s.O(void 0,[834],(()=>s(235)));l=s.O(l)})();