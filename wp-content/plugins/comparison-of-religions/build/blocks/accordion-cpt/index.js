/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/accordion-cpt/editor.scss":
/*!**********************************************!*\
  !*** ./src/blocks/accordion-cpt/editor.scss ***!
  \**********************************************/
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

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/blocks/accordion-cpt/edit.js":
/*!******************************************!*\
  !*** ./src/blocks/accordion-cpt/edit.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/accordion-cpt/editor.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}

var useSelect = wp.data.useSelect;
var useBlockProps = wp.blockEditor.useBlockProps;


var Edit = function Edit(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes;
  var blockProps = useBlockProps();
  var comparisons = useSelect(function (select) {
    return select("core").getEntityRecords("postType", "comparison", {
      per_page: -1,
      _fields: ["id", "title.rendered", "content.rendered"],
      orderby: "date",
      order: "asc"
    });
  }, []);
  var _React$useState = React.useState({}),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    openAccordions = _React$useState2[0],
    setOpenAccordions = _React$useState2[1];
  var accordionRefs = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)({});
  var toggleAccordion = function toggleAccordion(index) {
    setOpenAccordions(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, index, !prevState[index]));
    });
  };
  var parseContent = function parseContent(content) {
    try {
      var strippedContent = content.replace(/<\/?[^>]+(>|$)/g, "").trim();
      var decodedContent = strippedContent.replace(/&#(\d+);/g, function (match, dec) {
        return String.fromCharCode(dec);
      });
      var cleanedContent = decodedContent.replace(/'/g, '"').replace(/„/g, '"').replace(/”/g, '"');
      return JSON.parse(cleanedContent);
    } catch (err) {
      console.error("JSON Parsing Error:", err);
      console.error("Invalid content:", content);
      return [];
    }
  };
  return /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement("div", {
    className: "comparison-accordion"
  }, comparisons && comparisons.length > 0 ? comparisons.map(function (comparison, index) {
    var _accordionRefs$curren;
    var parsedContent = parseContent(comparison.content.rendered);
    var isOpen = openAccordions[index];
    return /*#__PURE__*/React.createElement("div", {
      key: comparison.id,
      className: "comparison-accordion__item"
    }, /*#__PURE__*/React.createElement("div", {
      className: "comparison-accordion__header",
      id: "heading-".concat(index)
    }, /*#__PURE__*/React.createElement("button", {
      className: "comparison-accordion__toggle ".concat(isOpen ? "" : "comparison-accordion__toggle--collapsed"),
      type: "button",
      onClick: function onClick() {
        return toggleAccordion(index);
      }
    }, comparison.title.rendered)), /*#__PURE__*/React.createElement("div", {
      id: "collapse-".concat(index),
      className: "comparison-accordion__content ".concat(isOpen ? "comparison-accordion__content--visible" : ""),
      ref: function ref(el) {
        return accordionRefs.current[index] = el;
      },
      style: {
        maxHeight: isOpen ? "".concat(((_accordionRefs$curren = accordionRefs.current[index]) === null || _accordionRefs$curren === void 0 ? void 0 : _accordionRefs$curren.scrollHeight) || 0, "px") : "0",
        transition: "max-height 0.6s ease-in-out"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "comparison-accordion__body"
    }, /*#__PURE__*/React.createElement("div", {
      className: "comparison-accordion__header-row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "comparison-accordion__column"
    }, /*#__PURE__*/React.createElement("h4", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Topic", "text-domain"))), /*#__PURE__*/React.createElement("div", {
      className: "comparison-accordion__column"
    }, /*#__PURE__*/React.createElement("h4", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Roman Catholic Church", "text-domain"))), /*#__PURE__*/React.createElement("div", {
      className: "comparison-accordion__column"
    }, /*#__PURE__*/React.createElement("h4", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pentecostal Church", "text-domain")))), /*#__PURE__*/React.createElement("div", {
      className: "comparison-accordion__content-grid"
    }, parsedContent && parsedContent.map(function (item, itemIndex) {
      var maxRows = Math.max(item.catholic.length, item.protestant.length);
      var rows = Array.from({
        length: maxRows
      }, function (_, rowIndex) {
        return {
          catholic: item.catholic[rowIndex] || "",
          protestant: item.protestant[rowIndex] || ""
        };
      });
      return /*#__PURE__*/React.createElement("div", {
        key: itemIndex,
        className: "comparison-accordion__row"
      }, /*#__PURE__*/React.createElement("div", {
        className: "comparison-accordion__column comparison-accordion__column--topic"
      }, /*#__PURE__*/React.createElement("p", {
        className: "comparison-accordion__topic"
      }, item.topic)), /*#__PURE__*/React.createElement("div", {
        className: "comparison-accordion__column comparison-accordion__column--combined"
      }, rows.map(function (row, rowIndex) {
        return /*#__PURE__*/React.createElement("div", {
          key: rowIndex,
          className: "comparison-accordion__combined-row"
        }, /*#__PURE__*/React.createElement("p", {
          className: "comparison-accordion__paragraph"
        }, row.catholic), /*#__PURE__*/React.createElement("p", {
          className: "comparison-accordion__paragraph"
        }, row.protestant));
      })));
    })))));
  }) : /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("No data available to display.", "text-domain"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/accordion-cpt/block.json":
/*!*********************************************!*\
  !*** ./src/blocks/accordion-cpt/block.json ***!
  \*********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"comparison-of-religions/accordion-cpt","title":"Accordion Block CPT","category":"widgets","icon":"list-view","description":"A custom accordion block.","attributes":{"postCount":{"type":"number","default":5}},"editorScript":"file:./index.js","editorStyle":"file:./index.css","viewStyle":"file:./style.css"}');

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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*******************************************!*\
  !*** ./src/blocks/accordion-cpt/index.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/blocks/accordion-cpt/block.json");
/* harmony import */ var _edit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.js */ "./src/blocks/accordion-cpt/edit.js");
var registerBlockType = wp.blocks.registerBlockType;


// import './style.scss';
// import './editor.scss';

registerBlockType(_block_json__WEBPACK_IMPORTED_MODULE_0__.name, {
  edit: _edit_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: function save() {
    // Blok dynamiczny - dane są generowane po stronie serwera
    return null;
  }
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map