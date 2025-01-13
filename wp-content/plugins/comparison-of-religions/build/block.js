/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/block.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

const {
  registerBlockType
} = wp.blocks;
const {
  TextControl,
  TextareaControl,
  Button
} = wp.components;
const {
  useBlockProps
} = wp.blockEditor;
registerBlockType('comparison-religions/topics-block', {
  title: 'Edytor Tematów',
  category: 'widgets',
  attributes: {
    topics: {
      type: 'array',
      default: []
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      topics
    } = attributes;
    const addTopic = () => {
      const newTopics = [...topics, {
        church_name: '',
        description: '',
        extra_points: []
      }];
      setAttributes({
        topics: newTopics
      });
    };
    const updateTopic = (index, field, value) => {
      const newTopics = [...topics];
      newTopics[index][field] = value;
      setAttributes({
        topics: newTopics
      });
    };
    const removeTopic = index => {
      const newTopics = [...topics];
      newTopics.splice(index, 1);
      setAttributes({
        topics: newTopics
      });
    };
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...useBlockProps()
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Edytuj Tematy"), topics.map((topic, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: index,
      style: {
        border: '1px solid #ccc',
        padding: '10px',
        marginBottom: '10px'
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: "Nazwa Ko\u015Bcio\u0142a",
      value: topic.church_name,
      onChange: value => updateTopic(index, 'church_name', value)
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextareaControl, {
      label: "Opis",
      value: topic.description,
      onChange: value => updateTopic(index, 'description', value)
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextareaControl, {
      label: "Dodatkowe punkty (rozdzielone przecinkami)",
      value: topic.extra_points.join(', '),
      onChange: value => updateTopic(index, 'extra_points', value.split(',').map(point => point.trim()))
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      isDestructive: true,
      onClick: () => removeTopic(index),
      style: {
        marginTop: '10px'
      }
    }, "Usu\u0144"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      isPrimary: true,
      onClick: addTopic
    }, "Dodaj Temat"));
  },
  save: () => {
    return null; // Dane są renderowane dynamicznie.
  }
});
})();

/******/ })()
;
//# sourceMappingURL=block.js.map