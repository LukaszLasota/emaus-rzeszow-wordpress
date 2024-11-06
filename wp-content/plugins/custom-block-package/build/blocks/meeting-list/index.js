/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/meeting-list/editor.scss":
/*!*********************************************!*\
  !*** ./src/blocks/meeting-list/editor.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/blocks/meeting-list/view.js":
/*!*****************************************!*\
  !*** ./src/blocks/meeting-list/view.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
document.addEventListener("DOMContentLoaded", function () {
  function initializeFlipCardEffect() {
    const flipCards = document.querySelectorAll(".flipping-cards__card");
    flipCards.forEach(card => {
      card.addEventListener("click", () => {
        const innerCard = card.querySelector(".flipping-cards__card-inner");
        innerCard.classList.toggle("flipping-cards__card-inner--flipped");
      });
    });
    const cards = document.querySelectorAll(".flipping-cards__card");
    if (cards.length > 0) {
      let maxHeight = 0;
      cards.forEach(card => {
        const cardHeight = card.offsetHeight;
        if (cardHeight > maxHeight) {
          maxHeight = cardHeight;
        }
      });
      cards.forEach(card => {
        card.style.height = `${maxHeight}px`;
      });
    }
  }
  initializeFlipCardEffect();
  if (window.wp && window.wp.data) {
    wp.data.subscribe(() => {
      initializeFlipCardEffect();
    });
  }
});

/***/ }),

/***/ "./src/blocks/meeting-list/block.json":
/*!********************************************!*\
  !*** ./src/blocks/meeting-list/block.json ***!
  \********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"custom-block-package/meeting-custom-list","title":"Lista spotkań Emaus","icon":"calendar-alt","category":"media","description":"Blok wyświetlający listę niestandardowych postów typu spotkania.","keywords":["meetings","events","list"],"version":"1","textdomain":"custom-block-package","attributes":{"numberposts":{"type":"number","default":-1},"blockTitle":{"type":"string"}},"supports":{"color":{"text":true,"background":true,"gradients":true,"link":true},"align":["wide","full"],"typography":{"fontSize":true,"lineHeight":true,"fontWeight":true,"textTransform":true,"letterSpacing":true},"customClassName":true},"editorScript":"file:./index.js","script":"file:./view.js","viewStyle":"file:./index.css","editorStyle":"file:./index.css"}');

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
/*!******************************************!*\
  !*** ./src/blocks/meeting-list/index.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./block.json */ "./src/blocks/meeting-list/block.json");
/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view.js */ "./src/blocks/meeting-list/view.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/meeting-list/editor.scss");









(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_6__.name, {
  edit({
    attributes,
    setAttributes
  }) {
    const {
      numberposts,
      blockTitle,
      text
    } = attributes;
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
    const meetings = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select("core").getEntityRecords("postType", "meetings", {
      per_page: numberposts,
      _fields: ["id", "title.rendered", "link", "acf", "content.rendered"]
    }), [numberposts]);
    const sortedMeetings = meetings ? [...meetings].sort((a, b) => {
      const aPriority = a.acf?.priority || 0;
      const bPriority = b.acf?.priority || 0;
      return aPriority - bPriority;
    }) : [];
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Ustawienia bloku", "custom-block-package")
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Liczba postów", "custom-block-package"),
      type: "number",
      value: numberposts,
      onChange: value => setAttributes({
        numberposts: parseInt(value, 10)
      })
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      tagName: "h2",
      className: "block-title",
      style: {
        textAlign: "center",
        width: "100%"
      },
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Wpisz tytuł bloku", "custom-block-package"),
      value: blockTitle,
      onChange: newVal => setAttributes({
        blockTitle: newVal
      })
    }), meetings === null ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Spinner, null) : sortedMeetings.length === 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Brak dostępnych spotkań.", "custom-block-package")) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flipping-cards"
    }, sortedMeetings.map(meeting => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: meeting.id,
      className: "flipping-cards__card"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flipping-cards__card-inner"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flipping-cards__card-front"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, meeting.title.rendered), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, meeting.acf?.day_hour || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Brak godziny", "custom-block-package")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, meeting.acf?.place || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Brak miejsca", "custom-block-package"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flipping-cards__card-back"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      dangerouslySetInnerHTML: {
        __html: meeting.content?.rendered
      }
    })))))));
  },
  save: () => null
});
/******/ })()
;
//# sourceMappingURL=index.js.map