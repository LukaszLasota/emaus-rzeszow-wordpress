(()=>{"use strict";document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".ablocks-block--progress-tracker").forEach((t=>{!function(t,e=!1){const o=t?.querySelector(".ablocks-block-progress-bar"),r=t?.querySelector(".ablocks-block-progress-circle"),s=t?.getAttribute("data-layout"),n=t?.getAttribute("data-direction"),c=t?.getAttribute("data-progress-relative"),l=t?.getAttribute("data-progress-relative-selector"),a=t?.querySelector(".ablocks-block-progress__text"),i=r?.querySelector(".ablocks-block-progress-circle__svg-bar"),d=t=>{const r=Math.min(Math.max(Math.floor(t),0),100);"bar"===s?(t=>{o&&(o.style.width=`${t}%`),a&&e&&(a.textContent=`${Math.round(t)}%`)})(r):"circle"===s&&(t=>{if(a&&e&&(a.textContent=`${Math.round(t)}%`),i){const e=i.getAttribute("r"),o=2*Math.PI*e,r=o-t/100*o;"left"===n?i.style.strokeDashoffset=`-${r}`:"right"===n&&(i.style.strokeDashoffset=r)}})(r)},u=()=>{const t=window.scrollY,e=window.innerHeight,o=document.documentElement.scrollHeight;d(t/(o-e)*100)},g=()=>{const t=document.querySelector(l);if(!t)return;const e=t.getBoundingClientRect().top,o=t.offsetHeight,r=window.innerHeight;if(e<r&&e+o>0){const t=Math.min(r-e,o),s=Math.max(0,Math.min(100,t/o*100));d(s)}};"entire_page"===c?window.addEventListener("scroll",u):"selector"===c&&l&&window.addEventListener("scroll",g),u(),l&&g()}(t,!0)}))}))})();