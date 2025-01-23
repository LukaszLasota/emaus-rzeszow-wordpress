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

/***/ "./src/blocks/accordion-cpt/style.scss":
/*!*********************************************!*\
  !*** ./src/blocks/accordion-cpt/style.scss ***!
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
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/accordion-cpt/editor.scss");
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






var Edit = function Edit(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes;
  var headerBackground = attributes.headerBackground,
    headerBorderColor = attributes.headerBorderColor,
    headerTextColor = attributes.headerTextColor,
    widthDesktop = attributes.widthDesktop,
    widthTablet = attributes.widthTablet,
    widthMobile = attributes.widthMobile;
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
  var colors = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(function (select) {
    var _select$getSettings;
    return ((_select$getSettings = select('core/block-editor').getSettings()) === null || _select$getSettings === void 0 ? void 0 : _select$getSettings.colors) || [];
  }, []);
  var onChangeHeaderBackground = function onChangeHeaderBackground(color) {
    return setAttributes({
      headerBackground: color
    });
  };
  var onChangeHeaderBorderColor = function onChangeHeaderBorderColor(color) {
    return setAttributes({
      headerBorderColor: color
    });
  };
  var onChangeHeaderTextColor = function onChangeHeaderTextColor(color) {
    return setAttributes({
      headerTextColor: color
    });
  };
  var onChangeDesktopWidth = function onChangeDesktopWidth(val) {
    setAttributes({
      widthDesktop: val
    });
  };
  var onChangeTabletWidth = function onChangeTabletWidth(val) {
    setAttributes({
      widthTablet: val
    });
  };
  var onChangeMobileWidth = function onChangeMobileWidth(val) {
    setAttributes({
      widthMobile: val
    });
  };
  var comparisons = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(function (select) {
    return select("core").getEntityRecords("postType", "comparison", {
      per_page: -1,
      _fields: ["id", "title.rendered", "content.rendered"],
      orderby: "date",
      order: "asc"
    });
  }, []);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    openAccordions = _useState2[0],
    setOpenAccordions = _useState2[1];
  var accordionRefs = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)({});
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nagłówek Akordeonu", "comparison"),
    initialOpen: true
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Szerokość Akordeonu", "comparison"),
    initialOpen: true
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Szer. Desktop", "comparison"),
    value: widthDesktop,
    onChange: onChangeDesktopWidth,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("np. 80%, 800px, 70vw", "comparison")
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Szer. Tablet", "comparison"),
    value: widthTablet,
    onChange: onChangeTabletWidth,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("np. 90%, 600px, 70vw", "comparison")
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Szer. Mobile", "comparison"),
    value: widthMobile,
    onChange: onChangeMobileWidth,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("np. 100%, 300px, 90vw", "comparison")
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nagłówek Akordeonu", "comparison"),
    initialOpen: true
  }, /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kolor tła nagłówka", "comparison")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
    colors: colors,
    value: headerBackground,
    onChange: onChangeHeaderBackground
  }), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kolor obramowania nagłówka", "comparison")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
    colors: colors,
    value: headerBorderColor,
    onChange: onChangeHeaderBorderColor
  }), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kolor tekstu nagłówka", "comparison")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
    colors: colors,
    value: headerTextColor,
    onChange: onChangeHeaderTextColor
  }))), /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement("div", {
    className: "comparison-accordion",
    style: {
      '--compAccordionDesktop': widthDesktop || '70%',
      '--compAccordionTablet': widthTablet || '80%',
      '--compAccordionMobile': widthMobile || '95%'
    }
  }, comparisons && comparisons.length > 0 ? comparisons.map(function (comparison, index) {
    var _accordionRefs$curren;
    var parsedContent = parseContent(comparison.content.rendered);
    var isOpen = openAccordions[index];
    var headingId = "heading-".concat(index);
    var panelId = "panel-".concat(index);
    return /*#__PURE__*/React.createElement("div", {
      key: comparison.id,
      className: "comparison-accordion__item"
    }, /*#__PURE__*/React.createElement("div", {
      className: "comparison-accordion__header",
      id: headingId
    }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("button", {
      className: "comparison-accordion__toggle ".concat(isOpen ? " comparison-accordion__toggle--underline" : "comparison-accordion__toggle--collapsed"),
      type: "button",
      onClick: function onClick(event) {
        return toggleAccordion(index);
      },
      "aria-expanded": isOpen ? "true" : "false",
      "aria-controls": panelId,
      style: {
        backgroundColor: headerBackground,
        borderTop: "1px solid ".concat(headerBorderColor),
        borderRight: "1px solid ".concat(headerBorderColor),
        borderLeft: "1px solid ".concat(headerBorderColor),
        color: headerTextColor
      }
    }, comparison.title.rendered))), /*#__PURE__*/React.createElement("div", {
      id: panelId,
      className: "comparison-accordion__content ".concat(isOpen ? "comparison-accordion__content--visible" : ""),
      ref: function ref(el) {
        return accordionRefs.current[index] = el;
      },
      role: "region",
      "aria-labelledby": headingId,
      style: {
        maxHeight: isOpen ? "".concat(((_accordionRefs$curren = accordionRefs.current[index]) === null || _accordionRefs$curren === void 0 ? void 0 : _accordionRefs$curren.scrollHeight) || 0, "px") : "0",
        opacity: isOpen ? "1" : "0",
        transition: "max-height 0.6s ease-in-out, opacity 0.6s ease-in-out",
        overflow: "hidden",
        borderLeft: "1px solid ".concat(headerBorderColor),
        borderRight: "1px solid ".concat(headerBorderColor),
        borderBottom: index === comparisons.length - 1 ? "1px solid ".concat(headerBorderColor) : "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "comparison-accordion__body"
    }, /*#__PURE__*/React.createElement("div", {
      className: "comparison-accordion__header-row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "comparison-accordion__column"
    }, /*#__PURE__*/React.createElement("h4", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Temat", "comparison"))), /*#__PURE__*/React.createElement("div", {
      className: "comparison-accordion__column"
    }, /*#__PURE__*/React.createElement("h4", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kościół Rzymskokatolicki", "comparison"))), /*#__PURE__*/React.createElement("div", {
      className: "comparison-accordion__column"
    }, /*#__PURE__*/React.createElement("h4", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kościół Protestancki", "comparison")))), /*#__PURE__*/React.createElement("div", {
      className: "comparison-accordion__content-flex"
    }, parsedContent && parsedContent.map(function (item, itemIndex) {
      var _item$catholic, _item$protestant;
      var maxRows = Math.max(((_item$catholic = item.catholic) === null || _item$catholic === void 0 ? void 0 : _item$catholic.length) || 0, ((_item$protestant = item.protestant) === null || _item$protestant === void 0 ? void 0 : _item$protestant.length) || 0);
      var rows = Array.from({
        length: maxRows
      }, function (_, rowIndex) {
        var _item$catholic2, _item$protestant2;
        return {
          catholic: ((_item$catholic2 = item.catholic) === null || _item$catholic2 === void 0 ? void 0 : _item$catholic2[rowIndex]) || "",
          protestant: ((_item$protestant2 = item.protestant) === null || _item$protestant2 === void 0 ? void 0 : _item$protestant2[rowIndex]) || ""
        };
      });
      return /*#__PURE__*/React.createElement("div", {
        key: itemIndex,
        className: "comparison-accordion__row"
      }, /*#__PURE__*/React.createElement("div", {
        className: "comparison-accordion__column comparison-accordion__column--topic"
      }, /*#__PURE__*/React.createElement("p", null, item.topic)), /*#__PURE__*/React.createElement("div", {
        className: "comparison-accordion__column comparison-accordion__column--combined"
      }, rows.map(function (row, rowIndex) {
        return /*#__PURE__*/React.createElement("div", {
          key: rowIndex,
          className: "comparison-accordion__combined-row"
        }, /*#__PURE__*/React.createElement("p", {
          className: "comparison-accordion__paragraph ".concat(rowIndex === 0 ? "comparison-accordion__paragraph--first" : "")
        }, row.catholic), /*#__PURE__*/React.createElement("p", {
          className: "comparison-accordion__paragraph ".concat(rowIndex === 0 ? "comparison-accordion__paragraph--first" : "")
        }, row.protestant));
      })));
    })))));
  }) : /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Brak postów", "comparison")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/accordion-cpt/index.js":
/*!*******************************************!*\
  !*** ./src/blocks/accordion-cpt/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/blocks/accordion-cpt/block.json");
/* harmony import */ var _edit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.js */ "./src/blocks/accordion-cpt/edit.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/accordion-cpt/style.scss");
var registerBlockType = wp.blocks.registerBlockType;



registerBlockType(_block_json__WEBPACK_IMPORTED_MODULE_0__.name, {
  edit: _edit_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/blocks/accordion-cpt/block.json":
/*!*********************************************!*\
  !*** ./src/blocks/accordion-cpt/block.json ***!
  \*********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"comparison-of-religions/accordion-cpt","title":"Blok akordeona dla porównania wyznań","category":"widgets","icon":"list-view","description":"Blok akordeona dla porównania wyznań (comparison CPT)","attributes":{"headerBackground":{"type":"string","default":"#f0f8ff"},"headerBorderColor":{"type":"string","default":"#000000"},"headerTextColor":{"type":"string","default":"#333333"},"widthDesktop":{"type":"string","default":"70%"},"widthTablet":{"type":"string","default":"80%"},"widthMobile":{"type":"string","default":"90%"}},"supports":{"align":true,"typography":{"fontSize":true,"lineHeight":true,"fontWeight":true,"textTransform":true,"letterSpacing":true},"spacing":{"margin":true,"padding":true},"customClassName":true,"anchor":true},"editorScript":"file:./index.js","editorStyle":"file:./index.css","viewStyle":"file:./index.css","viewScript":"file:./frontend.js"}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blocks/accordion-cpt/index": 0,
/******/ 			"blocks/accordion-cpt/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkcomparison_of_religions"] = globalThis["webpackChunkcomparison_of_religions"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/accordion-cpt/style-index"], () => (__webpack_require__("./src/blocks/accordion-cpt/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map