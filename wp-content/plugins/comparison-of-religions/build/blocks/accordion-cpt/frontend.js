/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************************************!*\
  !*** ./src/blocks/accordion-cpt/frontend.js ***!
  \**********************************************/
__webpack_require__.r(__webpack_exports__);
document.addEventListener('DOMContentLoaded', function () {
  var accordionToggles = document.querySelectorAll('.comparison-accordion__toggle');
  accordionToggles.forEach(function (toggle) {
    toggle.addEventListener('click', function () {
      handleToggle(toggle);
      toggle.classList.toggle('comparison-accordion__toggle--underline');
    });
    toggle.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handleToggle(toggle);
      }
    });
  });
  function handleToggle(toggle) {
    var contentId = toggle.getAttribute('aria-controls');
    var content = document.getElementById(contentId);
    var isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isExpanded));
    if (!content) return;
    if (isExpanded) {
      content.style.maxHeight = content.scrollHeight + 'px';
      content.style.opacity = '1';
      content.offsetHeight;
      content.style.maxHeight = '0';
      content.style.opacity = '0';
      setTimeout(function () {
        content.hidden = true;
      }, 600);
    } else {
      content.hidden = false;
      content.style.maxHeight = content.scrollHeight + 'px';
      content.style.opacity = '1';
    }
  }
});
/******/ })()
;
//# sourceMappingURL=frontend.js.map