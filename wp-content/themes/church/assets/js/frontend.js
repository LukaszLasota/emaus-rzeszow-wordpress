/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/masonry/masonry.js":
/*!***********************************!*\
  !*** ./src/js/masonry/masonry.js ***!
  \***********************************/
/***/ (() => {

document.addEventListener("DOMContentLoaded", function () {
  var masonryContainer = document.querySelector(".news");
  if (!masonryContainer) return;

  // Feature detection
  if (typeof Masonry === 'undefined' || typeof imagesLoaded === 'undefined') {
    console.warn('Masonry or imagesLoaded not loaded');
    return;
  }
  var msnry = null;
  function initMasonry() {
    var isDesktop = window.matchMedia('(min-width: 768px)').matches;
    if (isDesktop && !msnry) {
      // Initialize masonry - minimal config
      msnry = new Masonry(masonryContainer, {
        itemSelector: '.news__card',
        gutter: 25
      });

      // Wait for images to load before layout
      imagesLoaded(masonryContainer, function () {
        msnry.layout();
      });
    } else if (!isDesktop && msnry) {
      msnry.destroy();
      msnry = null;
    }
  }
  initMasonry();

  // Reinit on window resize
  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(initMasonry, 250);
  });
});

/***/ }),

/***/ "./src/sass/frontend.scss":
/*!********************************!*\
  !*** ./src/sass/frontend.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/menu/menu.ts":
/*!*****************************!*\
  !*** ./src/js/menu/menu.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HamburgerMenu: () => (/* binding */ HamburgerMenu)
/* harmony export */ });
class HamburgerMenu {
    constructor() {
        this.desktopWidth = 1025;
        this.hamburger = this.getElement('.hamburger');
        this.siteNavNavigation = this.getElement('.site-nav__navigation');
        this.siteNavContainer = this.getElement('.site-header__container');
        this.siteNav = this.getElement('.site-nav');
        this.scrollPos = window.scrollY;
        this.init();
    }
    getElement(selector) {
        const element = document.querySelector(selector);
        if (!element) {
            throw new Error(`Element not found: ${selector}`);
        }
        return element;
    }
    init() {
        this.hamburger.addEventListener('click', this.handleClick.bind(this));
        window.addEventListener('scroll', this.handleScroll.bind(this));
        window.addEventListener('resize', this.handleResize.bind(this));
        window.addEventListener('orientationchange', this.handleOrientationChange.bind(this));
        this.updateMenuBackground();
        this.updateNavigationPosition();
    }
    handleClick() {
        this.hamburger.classList.toggle('hamburger--active');
        const expanded = this.hamburger.classList.contains('hamburger--active');
        this.hamburger.setAttribute('aria-expanded', expanded ? 'true' : 'false');
        const isActive = this.siteNavNavigation.classList.toggle('site-nav__navigation--active');
        this.siteNavContainer.classList.toggle('site-header__container--active');
        if (this.scrollPos < 10) {
            this.siteNav.classList.add('site-nav--background');
        }
        this.updateNavigationPosition(isActive);
    }
    addClassOnScroll() {
        this.siteNav.classList.add('site-nav--background');
    }
    removeClassOnScroll() {
        this.siteNav.classList.remove('site-nav--background');
    }
    handleScroll() {
        if (window.innerWidth >= this.desktopWidth) {
            this.updateMenuBackground();
        }
    }
    handleResize() {
        this.updateNavigationPosition();
        if (window.innerWidth >= this.desktopWidth) {
            this.resetMenu();
        }
    }
    handleOrientationChange() {
        this.resetMenu();
    }
    updateMenuBackground() {
        this.scrollPos = window.scrollY;
        if (this.scrollPos > 10) {
            this.addClassOnScroll();
        }
        else {
            this.removeClassOnScroll();
        }
    }
    updateNavigationPosition(isActive = false) {
        const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (width < this.desktopWidth) {
            const navHeight = this.siteNav.offsetHeight;
            this.siteNavNavigation.style.top = `${navHeight}px`;
            if (isActive) {
                this.siteNavNavigation.style.height = `calc(100vh - ${navHeight}px)`;
            }
            else {
                this.siteNavNavigation.style.removeProperty('height');
            }
        }
        else {
            this.siteNavNavigation.style.removeProperty('height');
            this.siteNavNavigation.style.removeProperty('top');
        }
    }
    resetMenu() {
        this.hamburger.classList.remove('hamburger--active');
        this.hamburger.setAttribute('aria-expanded', 'false');
        this.siteNavNavigation.classList.remove('site-nav__navigation--active');
        this.siteNavContainer.classList.remove('site-header__container--active');
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/frontend.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_frontend_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/frontend.scss */ "./src/sass/frontend.scss");
/* harmony import */ var _js_menu_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/menu/menu */ "./src/js/menu/menu.ts");
/* harmony import */ var _js_masonry_masonry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/masonry/masonry.js */ "./src/js/masonry/masonry.js");
/* harmony import */ var _js_masonry_masonry_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_masonry_masonry_js__WEBPACK_IMPORTED_MODULE_2__);



new _js_menu_menu__WEBPACK_IMPORTED_MODULE_1__.HamburgerMenu();

})();

/******/ })()
;
//# sourceMappingURL=frontend.js.map?ff5bbdc063e2ecf6b034