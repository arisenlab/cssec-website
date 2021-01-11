webpackHotUpdate_N_E("pages/news",{

/***/ "./node_modules/fast-sort/dist/sort.es.js":
/*!************************************************!*\
  !*** ./node_modules/fast-sort/dist/sort.es.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// >>> INTERFACES <<<
// >>> HELPERS <<<
var castComparer = function (comparer) { return function (a, b, order) { return comparer(a, b, order) * order; }; };
var throwInvalidConfigErrorIfTrue = function (condition, context) {
    if (condition)
        throw Error("Invalid sort config: " + context);
};
var unpackObjectSorter = function (sortByObj) {
    var _a = sortByObj || {}, asc = _a.asc, desc = _a.desc;
    var order = asc ? 1 : -1;
    var sortBy = (asc || desc);
    // Validate object config
    throwInvalidConfigErrorIfTrue(!sortBy, 'Expected `asc` or `desc` property');
    throwInvalidConfigErrorIfTrue(asc && desc, 'Ambiguous object with `asc` and `desc` config properties');
    var comparer = sortByObj.comparer && castComparer(sortByObj.comparer);
    return { order: order, sortBy: sortBy, comparer: comparer };
};
// >>> SORTERS <<<
var multiPropertySorterProvider = function (defaultComparer) {
    return function multiPropertySorter(sortBy, sortByArr, depth, order, comparer, a, b) {
        var valA;
        var valB;
        if (typeof sortBy === 'string') {
            valA = a[sortBy];
            valB = b[sortBy];
        }
        else if (typeof sortBy === 'function') {
            valA = sortBy(a);
            valB = sortBy(b);
        }
        else {
            var objectSorterConfig = unpackObjectSorter(sortBy);
            return multiPropertySorter(objectSorterConfig.sortBy, sortByArr, depth, objectSorterConfig.order, objectSorterConfig.comparer || defaultComparer, a, b);
        }
        var equality = comparer(valA, valB, order);
        if ((equality === 0 || (valA == null && valB == null)) &&
            sortByArr.length > depth) {
            return multiPropertySorter(sortByArr[depth], sortByArr, depth + 1, order, comparer, a, b);
        }
        return equality;
    };
};
function getSortStrategy(sortBy, comparer, order) {
    // Flat array sorter
    if (sortBy === undefined || sortBy === true) {
        return function (a, b) { return comparer(a, b, order); };
    }
    // Sort list of objects by single object key
    if (typeof sortBy === 'string') {
        throwInvalidConfigErrorIfTrue(sortBy.includes('.'), 'String syntax not allowed for nested properties.');
        return function (a, b) { return comparer(a[sortBy], b[sortBy], order); };
    }
    // Sort list of objects by single function sorter
    if (typeof sortBy === 'function') {
        return function (a, b) { return comparer(sortBy(a), sortBy(b), order); };
    }
    // Sort by multiple properties
    if (Array.isArray(sortBy)) {
        var multiPropSorter_1 = multiPropertySorterProvider(comparer);
        return function (a, b) { return multiPropSorter_1(sortBy[0], sortBy, 1, order, comparer, a, b); };
    }
    // Unpack object config to get actual sorter strategy
    var objectSorterConfig = unpackObjectSorter(sortBy);
    return getSortStrategy(objectSorterConfig.sortBy, objectSorterConfig.comparer || comparer, objectSorterConfig.order);
}
var sort = function (order, ctx, sortBy, comparer) {
    var _a;
    if (!Array.isArray(ctx)) {
        return ctx;
    }
    // Unwrap sortBy if array with only 1 value to get faster sort strategy
    if (Array.isArray(sortBy) && sortBy.length < 2) {
        _a = sortBy, sortBy = _a[0];
    }
    return ctx.sort(getSortStrategy(sortBy, comparer, order));
};
// >>> Public <<<
function createSortInstance(opts) {
    var comparer = castComparer(opts.comparer);
    return function (ctx) {
        return {
            /**
             * Sort array in ascending order. Mutates provided array by sorting it.
             * @example
             * sort([3, 1, 4]).asc();
             * sort(users).asc(u => u.firstName);
             * sort(users).asc([
             *   U => u.firstName
             *   u => u.lastName,
             * ]);
             */
            asc: function (sortBy) {
                return sort(1, ctx, sortBy, comparer);
            },
            /**
             * Sort array in descending order. Mutates provided array by sorting it.
             * @example
             * sort([3, 1, 4]).desc();
             * sort(users).desc(u => u.firstName);
             * sort(users).desc([
             *   U => u.firstName
             *   u => u.lastName,
             * ]);
             */
            desc: function (sortBy) {
                return sort(-1, ctx, sortBy, comparer);
            },
            /**
             * Sort array in ascending or descending order. It allows sorting on multiple props
             * in different order for each of them. Mutates provided array by sorting it.
             * @example
             * sort(users).by([
             *  { asc: u => u.score }
             *  { desc: u => u.age }
             * ]);
             */
            by: function (sortBy) {
                return sort(1, ctx, sortBy, comparer);
            },
        };
    };
}
var defaultSort = createSortInstance({
    comparer: function (a, b, order) {
        if (a == null)
            return order;
        if (b == null)
            return -order;
        if (a < b)
            return -1;
        if (a === b)
            return 0;
        return 1;
    },
});
// Attach createNewInstance to sort function
defaultSort['createNewInstance'] = createSortInstance;

/* harmony default export */ __webpack_exports__["default"] = (defaultSort);


/***/ }),

/***/ "./pages/news/index.js":
/*!*****************************!*\
  !*** ./pages/news/index.js ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _components_news_news_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/news/news-card */ "./components/news/news-card.js");
/* harmony import */ var _components_news_news_wide_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/news/news-wide-card */ "./components/news/news-wide-card.js");
/* harmony import */ var _components_general_space__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/general/space */ "./components/general/space.js");
/* harmony import */ var _components_news_section_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/news/section-header */ "./components/news/section-header.js");
/* harmony import */ var fast_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! fast-sort */ "./node_modules/fast-sort/dist/sort.es.js");



var _jsxFileName = "D:\\ADDUCS\\CSSEC\\cssec-website\\pages\\news\\index.js",
    _this = undefined,
    _s = $RefreshSig$();










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  upperRoot: {
    width: "85%",
    margin: "auto"
  },
  seeMore: {
    width: "85%",
    margin: "auto",
    display: "flex",
    justifyContent: "center"
  }
});

var News = function News(_ref) {
  _s();

  var upperNews = _ref.upperNews,
      lowerNews = _ref.lowerNews,
      users = _ref.users;
  var classes = useStyles();

  var getAuthor = function getAuthor(author_id) {
    return users.find(function (user) {
      return user.id === author_id;
    }).name;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_general_space__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_news_section_header__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
      container: true,
      spacing: 2,
      className: classes.upperRoot,
      children: upperNews.map(function (news) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
          item: true,
          xs: 12,
          md: 4,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_news_news_card__WEBPACK_IMPORTED_MODULE_5__["default"], {
            post: news,
            author: getAuthor(news.author)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 25
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.seeMore,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
        variant: "outlined",
        color: "primary",
        disableElevation: true,
        size: "medium",
        children: "See More"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_general_space__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_news_section_header__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_general_space__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
      container: true,
      spacing: 1,
      className: classes.upperRoot,
      children: lowerNews.map(function (news) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
          item: true,
          xs: 12,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_news_news_wide_card__WEBPACK_IMPORTED_MODULE_6__["default"], {
            post: news,
            author: getAuthor(news.author)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 25
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.seeMore,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
        variant: "outlined",
        color: "primary",
        disableElevation: true,
        size: "medium",
        children: "See More"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(News, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = News;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (News);

var _c;

$RefreshReg$(_c, "News");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Zhc3Qtc29ydC9kaXN0L3NvcnQuZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL25ld3MvaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInVwcGVyUm9vdCIsIndpZHRoIiwibWFyZ2luIiwic2VlTW9yZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIk5ld3MiLCJ1cHBlck5ld3MiLCJsb3dlck5ld3MiLCJ1c2VycyIsImNsYXNzZXMiLCJnZXRBdXRob3IiLCJhdXRob3JfaWQiLCJmaW5kIiwidXNlciIsImlkIiwibmFtZSIsIm1hcCIsIm5ld3MiLCJhdXRob3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQ0E7QUFDQSx3Q0FBd0MsZ0NBQWdDLHNDQUFzQyxHQUFHO0FBQ2pIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsOEJBQThCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDhDQUE4QztBQUM5RTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsOENBQThDO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHVFQUF1RTtBQUN2RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFBTSxlQUFTLE1BQWY7QUFBZ0IsYUFBTyxFQUFFLENBQXpCO0FBQTRCLGVBQVMsRUFBRU8sT0FBTyxDQUFDVixTQUEvQztBQUFBLGdCQUNLUSxTQUFTLENBQUNTLEdBQVYsQ0FBYyxVQUFBQyxJQUFJLEVBQUk7QUFDbkIsNEJBQ0kscUVBQUMsOERBQUQ7QUFBTSxjQUFJLE1BQVY7QUFBVyxZQUFFLEVBQUUsRUFBZjtBQUFBLGlDQUNJLHFFQUFDLHVFQUFEO0FBQ0ksZ0JBQUksRUFBRUEsSUFEVjtBQUVJLGtCQUFNLEVBQUVQLFNBQVMsQ0FBQ08sSUFBSSxDQUFDQyxNQUFOO0FBRnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKO0FBUUgsT0FUQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuQ0osZUFnREk7QUFBSyxlQUFTLEVBQUVULE9BQU8sQ0FBQ1AsT0FBeEI7QUFBQSw2QkFDSSxxRUFBQyxnRUFBRDtBQUNJLGVBQU8sRUFBQyxVQURaO0FBRUksYUFBSyxFQUFDLFNBRlY7QUFHSSx3QkFBZ0IsTUFIcEI7QUFJSSxZQUFJLEVBQUMsUUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoREo7QUFBQSxrQkFESjtBQTZESCxDQXBFRDs7R0FBTUcsSTtVQUNjUixTOzs7S0FEZFEsSTs7QUErRlNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL25ld3MuN2VlNmE0YWI1ZmFkNmEwOTYyMzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vID4+PiBJTlRFUkZBQ0VTIDw8PFxyXG4vLyA+Pj4gSEVMUEVSUyA8PDxcclxudmFyIGNhc3RDb21wYXJlciA9IGZ1bmN0aW9uIChjb21wYXJlcikgeyByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIG9yZGVyKSB7IHJldHVybiBjb21wYXJlcihhLCBiLCBvcmRlcikgKiBvcmRlcjsgfTsgfTtcclxudmFyIHRocm93SW52YWxpZENvbmZpZ0Vycm9ySWZUcnVlID0gZnVuY3Rpb24gKGNvbmRpdGlvbiwgY29udGV4dCkge1xyXG4gICAgaWYgKGNvbmRpdGlvbilcclxuICAgICAgICB0aHJvdyBFcnJvcihcIkludmFsaWQgc29ydCBjb25maWc6IFwiICsgY29udGV4dCk7XHJcbn07XHJcbnZhciB1bnBhY2tPYmplY3RTb3J0ZXIgPSBmdW5jdGlvbiAoc29ydEJ5T2JqKSB7XHJcbiAgICB2YXIgX2EgPSBzb3J0QnlPYmogfHwge30sIGFzYyA9IF9hLmFzYywgZGVzYyA9IF9hLmRlc2M7XHJcbiAgICB2YXIgb3JkZXIgPSBhc2MgPyAxIDogLTE7XHJcbiAgICB2YXIgc29ydEJ5ID0gKGFzYyB8fCBkZXNjKTtcclxuICAgIC8vIFZhbGlkYXRlIG9iamVjdCBjb25maWdcclxuICAgIHRocm93SW52YWxpZENvbmZpZ0Vycm9ySWZUcnVlKCFzb3J0QnksICdFeHBlY3RlZCBgYXNjYCBvciBgZGVzY2AgcHJvcGVydHknKTtcclxuICAgIHRocm93SW52YWxpZENvbmZpZ0Vycm9ySWZUcnVlKGFzYyAmJiBkZXNjLCAnQW1iaWd1b3VzIG9iamVjdCB3aXRoIGBhc2NgIGFuZCBgZGVzY2AgY29uZmlnIHByb3BlcnRpZXMnKTtcclxuICAgIHZhciBjb21wYXJlciA9IHNvcnRCeU9iai5jb21wYXJlciAmJiBjYXN0Q29tcGFyZXIoc29ydEJ5T2JqLmNvbXBhcmVyKTtcclxuICAgIHJldHVybiB7IG9yZGVyOiBvcmRlciwgc29ydEJ5OiBzb3J0QnksIGNvbXBhcmVyOiBjb21wYXJlciB9O1xyXG59O1xyXG4vLyA+Pj4gU09SVEVSUyA8PDxcclxudmFyIG11bHRpUHJvcGVydHlTb3J0ZXJQcm92aWRlciA9IGZ1bmN0aW9uIChkZWZhdWx0Q29tcGFyZXIpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiBtdWx0aVByb3BlcnR5U29ydGVyKHNvcnRCeSwgc29ydEJ5QXJyLCBkZXB0aCwgb3JkZXIsIGNvbXBhcmVyLCBhLCBiKSB7XHJcbiAgICAgICAgdmFyIHZhbEE7XHJcbiAgICAgICAgdmFyIHZhbEI7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBzb3J0QnkgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHZhbEEgPSBhW3NvcnRCeV07XHJcbiAgICAgICAgICAgIHZhbEIgPSBiW3NvcnRCeV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBzb3J0QnkgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdmFsQSA9IHNvcnRCeShhKTtcclxuICAgICAgICAgICAgdmFsQiA9IHNvcnRCeShiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBvYmplY3RTb3J0ZXJDb25maWcgPSB1bnBhY2tPYmplY3RTb3J0ZXIoc29ydEJ5KTtcclxuICAgICAgICAgICAgcmV0dXJuIG11bHRpUHJvcGVydHlTb3J0ZXIob2JqZWN0U29ydGVyQ29uZmlnLnNvcnRCeSwgc29ydEJ5QXJyLCBkZXB0aCwgb2JqZWN0U29ydGVyQ29uZmlnLm9yZGVyLCBvYmplY3RTb3J0ZXJDb25maWcuY29tcGFyZXIgfHwgZGVmYXVsdENvbXBhcmVyLCBhLCBiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGVxdWFsaXR5ID0gY29tcGFyZXIodmFsQSwgdmFsQiwgb3JkZXIpO1xyXG4gICAgICAgIGlmICgoZXF1YWxpdHkgPT09IDAgfHwgKHZhbEEgPT0gbnVsbCAmJiB2YWxCID09IG51bGwpKSAmJlxyXG4gICAgICAgICAgICBzb3J0QnlBcnIubGVuZ3RoID4gZGVwdGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG11bHRpUHJvcGVydHlTb3J0ZXIoc29ydEJ5QXJyW2RlcHRoXSwgc29ydEJ5QXJyLCBkZXB0aCArIDEsIG9yZGVyLCBjb21wYXJlciwgYSwgYik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlcXVhbGl0eTtcclxuICAgIH07XHJcbn07XHJcbmZ1bmN0aW9uIGdldFNvcnRTdHJhdGVneShzb3J0QnksIGNvbXBhcmVyLCBvcmRlcikge1xyXG4gICAgLy8gRmxhdCBhcnJheSBzb3J0ZXJcclxuICAgIGlmIChzb3J0QnkgPT09IHVuZGVmaW5lZCB8fCBzb3J0QnkgPT09IHRydWUpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGNvbXBhcmVyKGEsIGIsIG9yZGVyKTsgfTtcclxuICAgIH1cclxuICAgIC8vIFNvcnQgbGlzdCBvZiBvYmplY3RzIGJ5IHNpbmdsZSBvYmplY3Qga2V5XHJcbiAgICBpZiAodHlwZW9mIHNvcnRCeSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICB0aHJvd0ludmFsaWRDb25maWdFcnJvcklmVHJ1ZShzb3J0QnkuaW5jbHVkZXMoJy4nKSwgJ1N0cmluZyBzeW50YXggbm90IGFsbG93ZWQgZm9yIG5lc3RlZCBwcm9wZXJ0aWVzLicpO1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gY29tcGFyZXIoYVtzb3J0QnldLCBiW3NvcnRCeV0sIG9yZGVyKTsgfTtcclxuICAgIH1cclxuICAgIC8vIFNvcnQgbGlzdCBvZiBvYmplY3RzIGJ5IHNpbmdsZSBmdW5jdGlvbiBzb3J0ZXJcclxuICAgIGlmICh0eXBlb2Ygc29ydEJ5ID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBjb21wYXJlcihzb3J0QnkoYSksIHNvcnRCeShiKSwgb3JkZXIpOyB9O1xyXG4gICAgfVxyXG4gICAgLy8gU29ydCBieSBtdWx0aXBsZSBwcm9wZXJ0aWVzXHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzb3J0QnkpKSB7XHJcbiAgICAgICAgdmFyIG11bHRpUHJvcFNvcnRlcl8xID0gbXVsdGlQcm9wZXJ0eVNvcnRlclByb3ZpZGVyKGNvbXBhcmVyKTtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIG11bHRpUHJvcFNvcnRlcl8xKHNvcnRCeVswXSwgc29ydEJ5LCAxLCBvcmRlciwgY29tcGFyZXIsIGEsIGIpOyB9O1xyXG4gICAgfVxyXG4gICAgLy8gVW5wYWNrIG9iamVjdCBjb25maWcgdG8gZ2V0IGFjdHVhbCBzb3J0ZXIgc3RyYXRlZ3lcclxuICAgIHZhciBvYmplY3RTb3J0ZXJDb25maWcgPSB1bnBhY2tPYmplY3RTb3J0ZXIoc29ydEJ5KTtcclxuICAgIHJldHVybiBnZXRTb3J0U3RyYXRlZ3kob2JqZWN0U29ydGVyQ29uZmlnLnNvcnRCeSwgb2JqZWN0U29ydGVyQ29uZmlnLmNvbXBhcmVyIHx8IGNvbXBhcmVyLCBvYmplY3RTb3J0ZXJDb25maWcub3JkZXIpO1xyXG59XHJcbnZhciBzb3J0ID0gZnVuY3Rpb24gKG9yZGVyLCBjdHgsIHNvcnRCeSwgY29tcGFyZXIpIHtcclxuICAgIHZhciBfYTtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShjdHgpKSB7XHJcbiAgICAgICAgcmV0dXJuIGN0eDtcclxuICAgIH1cclxuICAgIC8vIFVud3JhcCBzb3J0QnkgaWYgYXJyYXkgd2l0aCBvbmx5IDEgdmFsdWUgdG8gZ2V0IGZhc3RlciBzb3J0IHN0cmF0ZWd5XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzb3J0QnkpICYmIHNvcnRCeS5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgX2EgPSBzb3J0QnksIHNvcnRCeSA9IF9hWzBdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGN0eC5zb3J0KGdldFNvcnRTdHJhdGVneShzb3J0QnksIGNvbXBhcmVyLCBvcmRlcikpO1xyXG59O1xyXG4vLyA+Pj4gUHVibGljIDw8PFxyXG5mdW5jdGlvbiBjcmVhdGVTb3J0SW5zdGFuY2Uob3B0cykge1xyXG4gICAgdmFyIGNvbXBhcmVyID0gY2FzdENvbXBhcmVyKG9wdHMuY29tcGFyZXIpO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogU29ydCBhcnJheSBpbiBhc2NlbmRpbmcgb3JkZXIuIE11dGF0ZXMgcHJvdmlkZWQgYXJyYXkgYnkgc29ydGluZyBpdC5cclxuICAgICAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgICAgICogc29ydChbMywgMSwgNF0pLmFzYygpO1xyXG4gICAgICAgICAgICAgKiBzb3J0KHVzZXJzKS5hc2ModSA9PiB1LmZpcnN0TmFtZSk7XHJcbiAgICAgICAgICAgICAqIHNvcnQodXNlcnMpLmFzYyhbXHJcbiAgICAgICAgICAgICAqICAgVSA9PiB1LmZpcnN0TmFtZVxyXG4gICAgICAgICAgICAgKiAgIHUgPT4gdS5sYXN0TmFtZSxcclxuICAgICAgICAgICAgICogXSk7XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBhc2M6IGZ1bmN0aW9uIChzb3J0QnkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzb3J0KDEsIGN0eCwgc29ydEJ5LCBjb21wYXJlcik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBTb3J0IGFycmF5IGluIGRlc2NlbmRpbmcgb3JkZXIuIE11dGF0ZXMgcHJvdmlkZWQgYXJyYXkgYnkgc29ydGluZyBpdC5cclxuICAgICAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgICAgICogc29ydChbMywgMSwgNF0pLmRlc2MoKTtcclxuICAgICAgICAgICAgICogc29ydCh1c2VycykuZGVzYyh1ID0+IHUuZmlyc3ROYW1lKTtcclxuICAgICAgICAgICAgICogc29ydCh1c2VycykuZGVzYyhbXHJcbiAgICAgICAgICAgICAqICAgVSA9PiB1LmZpcnN0TmFtZVxyXG4gICAgICAgICAgICAgKiAgIHUgPT4gdS5sYXN0TmFtZSxcclxuICAgICAgICAgICAgICogXSk7XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBkZXNjOiBmdW5jdGlvbiAoc29ydEJ5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc29ydCgtMSwgY3R4LCBzb3J0QnksIGNvbXBhcmVyKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFNvcnQgYXJyYXkgaW4gYXNjZW5kaW5nIG9yIGRlc2NlbmRpbmcgb3JkZXIuIEl0IGFsbG93cyBzb3J0aW5nIG9uIG11bHRpcGxlIHByb3BzXHJcbiAgICAgICAgICAgICAqIGluIGRpZmZlcmVudCBvcmRlciBmb3IgZWFjaCBvZiB0aGVtLiBNdXRhdGVzIHByb3ZpZGVkIGFycmF5IGJ5IHNvcnRpbmcgaXQuXHJcbiAgICAgICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICAgICAqIHNvcnQodXNlcnMpLmJ5KFtcclxuICAgICAgICAgICAgICogIHsgYXNjOiB1ID0+IHUuc2NvcmUgfVxyXG4gICAgICAgICAgICAgKiAgeyBkZXNjOiB1ID0+IHUuYWdlIH1cclxuICAgICAgICAgICAgICogXSk7XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBieTogZnVuY3Rpb24gKHNvcnRCeSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNvcnQoMSwgY3R4LCBzb3J0QnksIGNvbXBhcmVyKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxufVxyXG52YXIgZGVmYXVsdFNvcnQgPSBjcmVhdGVTb3J0SW5zdGFuY2Uoe1xyXG4gICAgY29tcGFyZXI6IGZ1bmN0aW9uIChhLCBiLCBvcmRlcikge1xyXG4gICAgICAgIGlmIChhID09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiBvcmRlcjtcclxuICAgICAgICBpZiAoYiA9PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gLW9yZGVyO1xyXG4gICAgICAgIGlmIChhIDwgYilcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIGlmIChhID09PSBiKVxyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICByZXR1cm4gMTtcclxuICAgIH0sXHJcbn0pO1xyXG4vLyBBdHRhY2ggY3JlYXRlTmV3SW5zdGFuY2UgdG8gc29ydCBmdW5jdGlvblxyXG5kZWZhdWx0U29ydFsnY3JlYXRlTmV3SW5zdGFuY2UnXSA9IGNyZWF0ZVNvcnRJbnN0YW5jZTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdFNvcnQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5cclxuaW1wb3J0IE5ld3NDYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL25ld3MvbmV3cy1jYXJkXCI7XHJcbmltcG9ydCBOZXdzV2lkZUNhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbmV3cy9uZXdzLXdpZGUtY2FyZFwiO1xyXG5pbXBvcnQgU3BhY2UgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ2VuZXJhbC9zcGFjZVwiO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9uZXdzL3NlY3Rpb24taGVhZGVyXCI7XHJcblxyXG5pbXBvcnQgV1AgZnJvbSBcIi4uLy4uL3V0aWxzL3dvcmRwcmVzc1wiO1xyXG5cclxuaW1wb3J0IHNvcnQgZnJvbSBcImZhc3Qtc29ydFwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICB1cHBlclJvb3Q6IHtcclxuICAgICAgICB3aWR0aDogXCI4NSVcIixcclxuICAgICAgICBtYXJnaW46IFwiYXV0b1wiLFxyXG4gICAgfSxcclxuICAgIHNlZU1vcmU6IHtcclxuICAgICAgICB3aWR0aDogXCI4NSVcIixcclxuICAgICAgICBtYXJnaW46IFwiYXV0b1wiLFxyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5jb25zdCBOZXdzID0gKHsgdXBwZXJOZXdzLCBsb3dlck5ld3MsIHVzZXJzIH0pID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCBnZXRBdXRob3IgPSBhdXRob3JfaWQgPT4ge1xyXG4gICAgICAgIHJldHVybiB1c2Vycy5maW5kKHVzZXIgPT4gdXNlci5pZCA9PT0gYXV0aG9yX2lkKS5uYW1lO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxTcGFjZSAvPlxyXG5cclxuICAgICAgICAgICAgPFNlY3Rpb25IZWFkZXIgLz5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBjbGFzc05hbWU9e2NsYXNzZXMudXBwZXJSb290fT5cclxuICAgICAgICAgICAgICAgIHt1cHBlck5ld3MubWFwKG5ld3MgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmV3c0NhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0PXtuZXdzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcj17Z2V0QXV0aG9yKG5ld3MuYXV0aG9yKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlZU1vcmV9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlRWxldmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgU2VlIE1vcmVcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxTcGFjZSAvPlxyXG5cclxuICAgICAgICAgICAgPFNlY3Rpb25IZWFkZXIgLz5cclxuXHJcbiAgICAgICAgICAgIDxTcGFjZSAvPlxyXG5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9IGNsYXNzTmFtZT17Y2xhc3Nlcy51cHBlclJvb3R9PlxyXG4gICAgICAgICAgICAgICAge2xvd2VyTmV3cy5tYXAobmV3cyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5ld3NXaWRlQ2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3Q9e25ld3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yPXtnZXRBdXRob3IobmV3cy5hdXRob3IpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VlTW9yZX0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVFbGV2YXRpb25cclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibWVkaXVtXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBTZWUgTW9yZVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IFtwb3N0cywgdXNlcnNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICBXUC5wb3N0cygpLmNhdGVnb3JpZXMoMikucGVyUGFnZSgxMDApLm9yZGVyKFwiZGVzY1wiKS5vcmRlcmJ5KFwiZGF0ZVwiKSxcclxuICAgICAgICAgICAgV1AudXNlcnMoKSxcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgLy9zb3J0KHBvc3RzKS5kZXNjKHBvc3QgPT4gcG9zdC5kYXRlKTtcclxuXHJcbiAgICAgICAgbGV0IHVwcGVyTmV3cyA9IHBvc3RzLnNsaWNlKDAsIDMpO1xyXG4gICAgICAgIGxldCBsb3dlck5ld3MgPSBwb3N0cy5zbGljZSgzLCBwb3N0cy5sZW5ndGgpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwcm9wczogeyB1cHBlck5ld3M6IHVwcGVyTmV3cywgbG93ZXJOZXdzOiBsb3dlck5ld3MsIHVzZXJzOiB1c2VycyB9LFxyXG4gICAgICAgICAgICByZXZhbGlkYXRlOiAxMCxcclxuICAgICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwcm9wczogeyB1cHBlck5ld3M6IFtdLCBsb3dlck5ld3M6IFtdLCB1c2VyczogW10gfSxcclxuICAgICAgICAgICAgcmV2YWxpZGF0ZTogMTAsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3cztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==