/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sass/backend.scss":
/*!*******************************!*\
  !*** ./src/sass/backend.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/logo/logo.ts":
/*!*****************************!*\
  !*** ./src/js/logo/logo.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MediaUploader: () => (/* binding */ MediaUploader)
/* harmony export */ });
class MediaUploader {
    constructor() {
        this.uploadButton = document.getElementById('upload-btn');
        this.imageField = document.getElementById('image_url');
        this.logoPreview = document.getElementById('logo-preview');
        this.init();
    }
    init() {
        if (this.uploadButton) {
            this.uploadButton.addEventListener('click', (e) => this.onClickUploadButton(e));
        }
    }
    onClickUploadButton(e) {
        e.preventDefault();
        const mediaUploader = window.wp.media({
            title: 'Wybierz Logo Strony',
            button: {
                text: 'Użyj tego obrazu'
            },
            multiple: false
        });
        mediaUploader.on('select', () => this.onSelectMedia(mediaUploader));
        mediaUploader.open();
    }
    onSelectMedia(mediaUploader) {
        const attachment = mediaUploader.state().get('selection').first().toJSON();
        if (this.imageField) {
            this.imageField.value = attachment.url;
        }
        if (this.logoPreview) {
            this.logoPreview.src = attachment.url;
        }
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
/*!************************!*\
  !*** ./src/backend.ts ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_backend_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/backend.scss */ "./src/sass/backend.scss");
/* harmony import */ var _js_logo_logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/logo/logo */ "./src/js/logo/logo.ts");


document.addEventListener('DOMContentLoaded', () => new _js_logo_logo__WEBPACK_IMPORTED_MODULE_1__.MediaUploader());

})();

/******/ })()
;
//# sourceMappingURL=backend.js.map?510f345b10aad0ed10cd