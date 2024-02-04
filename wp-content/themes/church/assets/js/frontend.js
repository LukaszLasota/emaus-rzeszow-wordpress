/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sass/frontend.scss":
/*!********************************!*\
  !*** ./src/sass/frontend.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/menu/menu.ts":
/*!*****************************!*\
  !*** ./src/js/menu/menu.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HamburgerMenu: () => (/* binding */ HamburgerMenu)
/* harmony export */ });
class HamburgerMenu {
    constructor() {
        this.handleClick = () => {
            var _a, _b, _c, _d, _e;
            (_a = this.hamburger) === null || _a === void 0 ? void 0 : _a.classList.toggle('hamburger--active');
            (_b = this.hamburger) === null || _b === void 0 ? void 0 : _b.setAttribute('aria-expanded', `${(_c = this.hamburger) === null || _c === void 0 ? void 0 : _c.classList.contains('hamburger--active')}`);
            (_d = this.siteNavNavigation) === null || _d === void 0 ? void 0 : _d.classList.toggle('site-nav__navigation--active');
            if (this.scrollPos < 10) {
                (_e = this.siteNav) === null || _e === void 0 ? void 0 : _e.classList.add('site-nav--bg');
            }
        };
        this.addClassOnScroll = () => {
            var _a;
            (_a = this.siteNav) === null || _a === void 0 ? void 0 : _a.classList.add('site-nav--bg');
        };
        this.removeClassOnScroll = () => {
            var _a;
            (_a = this.siteNav) === null || _a === void 0 ? void 0 : _a.classList.remove('site-nav--bg');
        };
        this.updateMenuBackground = () => {
            this.scrollPos = window.scrollY;
            if (this.scrollPos > 10 || this.actualWidth < 770) {
                this.addClassOnScroll();
            }
            else if (this.scrollPos < 10) {
                this.removeClassOnScroll();
            }
        };
        this.hamburger = document.querySelector('.hamburger');
        this.siteNavNavigation = document.querySelector('.site-nav__navigation');
        this.siteNav = document.querySelector('.site-nav');
        this.scrollPos = window.scrollY;
        this.actualWidth = document.body.clientWidth;
        this.init();
    }
    init() {
        var _a;
        (_a = this.hamburger) === null || _a === void 0 ? void 0 : _a.addEventListener('click', this.handleClick);
        window.addEventListener('scroll', this.updateMenuBackground);
        this.updateMenuBackground();
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/frontend.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_frontend_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/frontend.scss */ "./src/sass/frontend.scss");
/* harmony import */ var _js_menu_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/menu/menu */ "./src/js/menu/menu.ts");


new _js_menu_menu__WEBPACK_IMPORTED_MODULE_1__.HamburgerMenu();

})();

/******/ })()
;
//# sourceMappingURL=frontend.js.map?42879489eebaa693b9aa