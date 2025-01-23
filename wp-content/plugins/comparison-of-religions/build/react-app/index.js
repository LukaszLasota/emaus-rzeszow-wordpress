/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

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
/*!******************************!*\
  !*** ./src/react-app/app.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
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


function CorOptionsApp() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    comparisons = _useState2[0],
    setComparisons = _useState2[1]; // lista istniejących postów
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    newTitle = _useState4[0],
    setNewTitle = _useState4[1]; // tytuł nowego posta
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([
    // Przykładowy wiersz na start (możesz zacząć od pustej tablicy)
    {
      topic: "",
      catholic: [""],
      protestant: [""]
    }]),
    _useState6 = _slicedToArray(_useState5, 2),
    rows = _useState6[0],
    setRows = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    error = _useState8[0],
    setError = _useState8[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchComparisonList();
  }, []);

  /** Pobiera listę wszystkich 'comparison' */
  function fetchComparisonList() {
    fetch("".concat(ComparisonData.restUrl, "comparison"), {
      method: 'GET',
      headers: {
        'X-WP-Nonce': ComparisonData.nonce
      }
    }).then(function (resp) {
      if (!resp.ok) throw new Error("B\u0142\u0105d GET: ".concat(resp.status));
      return resp.json();
    }).then(function (data) {
      if (!Array.isArray(data)) throw new Error("Otrzymano nie-tablic\u0119");
      setComparisons(data);
    })["catch"](function (err) {
      setError(err.message);
      setComparisons([]);
    });
  }

  /** Tworzy nowy post 'comparison' z tytułem i JSON-em w content */
  function createComparison() {
    // Konwertujemy 'rows' na JSON – to będzie zawartość postu
    var jsonContent = JSON.stringify(rows);
    fetch("".concat(ComparisonData.restUrl, "comparison"), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-WP-Nonce': ComparisonData.nonce
      },
      body: JSON.stringify({
        title: newTitle || "Porównanie",
        content: jsonContent
      })
    }).then(function (resp) {
      if (!resp.ok) throw new Error("B\u0142\u0105d POST: ".concat(resp.status));
      return resp.json();
    }).then(function () {
      setNewTitle('');
      setRows([]); // wyzeruj formularz, jeśli chcesz
      fetchComparisonList();
    })["catch"](function (err) {
      return setError(err.message);
    });
  }

  /** Dodaje nowy wiersz-temat */
  function addRow() {
    setRows([].concat(_toConsumableArray(rows), [{
      topic: "",
      catholic: [""],
      protestant: [""]
    }]));
  }

  /** Obsługa zmiany w polu 'topic' */
  function handleTopicChange(index, value) {
    var newRows = _toConsumableArray(rows);
    newRows[index].topic = value;
    setRows(newRows);
  }

  /** Obsługa zmiany w polu Catholic lub Protestant */
  function handleChurchChange(index, churchType, subIndex, value) {
    var newRows = _toConsumableArray(rows);
    newRows[index][churchType][subIndex] = value;
    setRows(newRows);
  }

  /** Dodaje linię w Kościele Rzymskokatolickim / Zielonoświątkowym */
  function addChurchLine(index, churchType) {
    var newRows = _toConsumableArray(rows);
    newRows[index][churchType].push("");
    setRows(newRows);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      background: '#fff',
      padding: '1rem'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Comparisons - Panel React (rozbudowany)"), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      background: 'pink',
      marginBottom: '1rem'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "B\u0142\u0105d: "), " ", error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      marginBottom: '1rem'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Nowy tytu\u0142:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    value: newTitle,
    onChange: function onChange(e) {
      return setNewTitle(e.target.value);
    },
    style: {
      width: '200px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Wiersze / tematy:"), rows.map(function (row, rIndex) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      key: rIndex,
      style: {
        border: '1px solid #ccc',
        marginBottom: '1rem',
        padding: '1rem'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Temat:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "text",
      value: row.topic,
      onChange: function onChange(e) {
        return handleTopicChange(rIndex, e.target.value);
      },
      style: {
        marginLeft: '8px',
        width: '200px'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        marginTop: '1rem'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Ko\u015Bci\xF3\u0142 Rzymskokatolicki:"), row.catholic.map(function (line, cIdx) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        key: cIdx,
        style: {
          marginLeft: '20px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", {
        style: {
          width: '80%'
        },
        rows: 2,
        value: line,
        onChange: function onChange(e) {
          return handleChurchChange(rIndex, 'catholic', cIdx, e.target.value);
        }
      }));
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      onClick: function onClick() {
        return addChurchLine(rIndex, 'catholic');
      }
    }, "Dodaj lini\u0119 w Rzymskokatolickim")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        marginTop: '1rem'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Ko\u015Bci\xF3\u0142 Zielono\u015Bwi\u0105tkowy:"), row.protestant.map(function (line, pIdx) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        key: pIdx,
        style: {
          marginLeft: '20px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", {
        style: {
          width: '80%'
        },
        rows: 2,
        value: line,
        onChange: function onChange(e) {
          return handleChurchChange(rIndex, 'protestant', pIdx, e.target.value);
        }
      }));
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      onClick: function onClick() {
        return addChurchLine(rIndex, 'protestant');
      }
    }, "Dodaj lini\u0119 w Zielono\u015Bwi\u0105tkowym")));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: addRow
  }, "Dodaj kolejny wiersz (temat)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: createComparison
  }, "Zapisz jako nowy post (comparison)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Istniej\u0105ce comparison:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, comparisons.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: item.ID
    }, "#", item.ID, " \u2013 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, item.title));
  })));
}
document.addEventListener('DOMContentLoaded', function () {
  var rootEl = document.getElementById('cor-react-root');
  if (rootEl) {
    var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(rootEl);
    root.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CorOptionsApp, null));
  }
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map