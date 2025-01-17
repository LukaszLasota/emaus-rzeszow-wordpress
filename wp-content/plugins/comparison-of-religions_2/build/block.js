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
  title: 'Edytuj Tematy',
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

    // Dodaje nowy temat (subtopic)
    const addSubtopic = () => {
      const newTopics = [...topics, {
        subtopic: '',
        churches: [] // Tablica dla wielu kościołów w tym temacie
      }];
      setAttributes({
        topics: newTopics
      });
    };

    // Aktualizuje pole w danym temacie (np. nazwa tematu)
    const updateSubtopicField = (index, field, value) => {
      const newTopics = [...topics];
      newTopics[index][field] = value;
      setAttributes({
        topics: newTopics
      });
    };

    // Usuwa temat
    const removeSubtopic = index => {
      const newTopics = [...topics];
      newTopics.splice(index, 1);
      setAttributes({
        topics: newTopics
      });
    };

    // Dodaje nowy kościół w danym temacie
    const addChurch = subtopicIndex => {
      const newTopics = [...topics];
      newTopics[subtopicIndex].churches.push({
        church_name: '',
        description: '',
        extra_points: []
      });
      setAttributes({
        topics: newTopics
      });
    };

    // Aktualizuje pole w danym kościele
    const updateChurchField = (subtopicIndex, churchIndex, field, value) => {
      const newTopics = [...topics];
      newTopics[subtopicIndex].churches[churchIndex][field] = value;
      setAttributes({
        topics: newTopics
      });
    };

    // Aktualizuje listę punktów (po przecinku)
    const updateChurchExtraPoints = (subtopicIndex, churchIndex, value) => {
      const newTopics = [...topics];
      newTopics[subtopicIndex].churches[churchIndex].extra_points = value.split(',').map(point => point.trim());
      setAttributes({
        topics: newTopics
      });
    };

    // Usuwa kościół z tematu
    const removeChurch = (subtopicIndex, churchIndex) => {
      const newTopics = [...topics];
      newTopics[subtopicIndex].churches.splice(churchIndex, 1);
      setAttributes({
        topics: newTopics
      });
    };
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...useBlockProps()
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Edytuj Tematy"), topics.map((item, subtopicIndex) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: subtopicIndex,
      style: {
        border: '1px solid #ddd',
        marginBottom: '10px',
        padding: '10px'
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: "Nazwa tematu",
      value: item.subtopic,
      onChange: value => updateSubtopicField(subtopicIndex, 'subtopic', value)
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      isSecondary: true,
      style: {
        marginBottom: '10px'
      },
      onClick: () => addChurch(subtopicIndex)
    }, "Dodaj Ko\u015Bci\xF3\u0142"), item.churches.map((church, churchIndex) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: churchIndex,
      style: {
        border: '1px solid #eee',
        padding: '10px',
        marginBottom: '10px'
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: "Nazwa Ko\u015Bcio\u0142a",
      value: church.church_name,
      onChange: value => updateChurchField(subtopicIndex, churchIndex, 'church_name', value)
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextareaControl, {
      label: "Opis",
      value: church.description,
      onChange: value => updateChurchField(subtopicIndex, churchIndex, 'description', value)
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: "Dodatkowe punkty (rozdzielone przecinkami)",
      value: church.extra_points.join(', '),
      onChange: value => updateChurchExtraPoints(subtopicIndex, churchIndex, value)
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      isDestructive: true,
      onClick: () => removeChurch(subtopicIndex, churchIndex)
    }, "Usu\u0144 ko\u015Bci\xF3\u0142"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      isDestructive: true,
      onClick: () => removeSubtopic(subtopicIndex)
    }, "Usu\u0144 Temat"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      isPrimary: true,
      onClick: addSubtopic
    }, "Dodaj Temat"));
  },
  save: () => null // Serwerowe przetwarzanie danych
});
})();

/******/ })()
;
//# sourceMappingURL=block.js.map