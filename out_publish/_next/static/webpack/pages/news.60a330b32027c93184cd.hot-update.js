webpackHotUpdate_N_E("pages/news",{

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
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _components_general_space__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/general/space */ "./components/general/space.js");
/* harmony import */ var _components_general_section_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/general/section-header */ "./components/general/section-header.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_utils_constants__WEBPACK_IMPORTED_MODULE_8__);



var _jsxFileName = "D:\\ADDUCS\\CSSEC\\cssec-website\\pages\\news\\index.js",
    _this = undefined,
    _s = $RefreshSig$();








var NewsCard = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! ../../components/news/news-card */ "./components/news/news-card.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../components/news/news-card */ "./components/news/news-card.js")];
    },
    modules: ["../../components/news/news-card"]
  }
});
_c2 = NewsCard;
var NewsWideCard = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c3 = function _c3() {
  return __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ../../components/news/news-wide-card */ "./components/news/news-wide-card.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../components/news/news-wide-card */ "./components/news/news-wide-card.js")];
    },
    modules: ["../../components/news/news-wide-card"]
  }
});
_c4 = NewsWideCard;

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_general_space__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, _this), upperNews.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_general_section_header__WEBPACK_IMPORTED_MODULE_7__["default"], {
      text: "New Top 3 Posts"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
      container: true,
      spacing: 2,
      className: classes.upperRoot,
      children: upperNews.length > 0 ? upperNews.map(function (news) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
          item: true,
          xs: 12,
          md: 4,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NewsCard, {
            post: news,
            author: getAuthor(news.author)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 33
          }, _this)
        }, news.id, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 29
        }, _this);
      }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
        container: true,
        justify: "center",
        alignItems: "center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
          item: true,
          xs: 6,
          align: "center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
            variant: "h3",
            children: "Patiently Waiting..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
          item: true,
          xs: 6,
          align: "center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_8__["cdn_url"], "/chammie-chan/determined-chammie-chan.png"),
            width: "25%"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_general_space__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }, _this), upperNews.length > 3 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_general_section_header__WEBPACK_IMPORTED_MODULE_7__["default"], {
        text: "Remaining Posts"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_general_space__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 21
      }, _this)]
    }, void 0, true) : null, lowerNews.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
      container: true,
      spacing: 1,
      className: classes.upperRoot,
      children: lowerNews.map(function (news) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
          item: true,
          xs: 12,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NewsWideCard, {
            post: news,
            author: getAuthor(news.author)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 33
          }, _this)
        }, news.id, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 29
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }, _this) : null]
  }, void 0, true);
};

_s(News, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c5 = News;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (News);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "NewsCard$dynamic");
$RefreshReg$(_c2, "NewsCard");
$RefreshReg$(_c3, "NewsWideCard$dynamic");
$RefreshReg$(_c4, "NewsWideCard");
$RefreshReg$(_c5, "News");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJOZXdzQ2FyZCIsImR5bmFtaWMiLCJOZXdzV2lkZUNhcmQiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidXBwZXJSb290Iiwid2lkdGgiLCJtYXJnaW4iLCJzZWVNb3JlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiTmV3cyIsInVwcGVyTmV3cyIsImxvd2VyTmV3cyIsInVzZXJzIiwiY2xhc3NlcyIsImdldEF1dGhvciIsImF1dGhvcl9pZCIsImZpbmQiLCJ1c2VyIiwiaWQiLCJuYW1lIiwibGVuZ3RoIiwibWFwIiwibmV3cyIsImF1dGhvciIsImNkbl91cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLG1EQUFPLE1BQUM7QUFBQSxTQUFNLHNKQUFOO0FBQUEsQ0FBRDtBQUFBO0FBQUE7QUFBQSxrQ0FBYyx1RUFBZDtBQUFBO0FBQUEsY0FBYyxpQ0FBZDtBQUFBO0FBQUEsRUFBeEI7TUFBTUQsUTtBQUNOLElBQU1FLFlBQVksR0FBR0QsbURBQU8sT0FBQztBQUFBLFNBQ3pCLGlLQUR5QjtBQUFBLENBQUQ7QUFBQTtBQUFBO0FBQUEsa0NBQ2pCLGlGQURpQjtBQUFBO0FBQUEsY0FDakIsc0NBRGlCO0FBQUE7QUFBQSxFQUE1QjtNQUFNQyxZO0FBSU47QUFHQSxJQUFNQyxTQUFTLEdBQUdDLDJFQUFVLENBQUM7QUFDekJDLFdBQVMsRUFBRTtBQUNQQyxTQUFLLEVBQUUsS0FEQTtBQUVQQyxVQUFNLEVBQUU7QUFGRCxHQURjO0FBS3pCQyxTQUFPLEVBQUU7QUFDTEYsU0FBSyxFQUFFLEtBREY7QUFFTEMsVUFBTSxFQUFFLE1BRkg7QUFHTEUsV0FBTyxFQUFFLE1BSEo7QUFJTEMsa0JBQWMsRUFBRTtBQUpYO0FBTGdCLENB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QUNLUSxTQUFTLENBQUNVLEdBQVYsQ0FBYyxVQUFBQyxJQUFJLEVBQUk7QUFDbkIsNEJBQ0kscUVBQUMsOERBQUQ7QUFBTSxjQUFJLE1BQVY7QUFBVyxZQUFFLEVBQUUsRUFBZjtBQUFBLGlDQUNJLHFFQUFDLFlBQUQ7QUFDSSxnQkFBSSxFQUFFQSxJQURWO0FBRUksa0JBQU0sRUFBRVIsU0FBUyxDQUFDUSxJQUFJLENBQUNDLE1BQU47QUFGckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLFdBQXdCRCxJQUFJLENBQUNKLEVBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREo7QUFRSCxPQVRBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURILEdBYUcsSUExRFI7QUFBQSxrQkFESjtBQThESCxDQXJFRDs7R0FBTVQsSTtVQUNjUixTOzs7TUFEZFEsSTs7QUE4RlNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL25ld3MuNjBhMzMwYjMyMDI3YzkzMTg0Y2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcblxyXG5pbXBvcnQgU3BhY2UgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ2VuZXJhbC9zcGFjZVwiO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9nZW5lcmFsL3NlY3Rpb24taGVhZGVyXCI7XHJcblxyXG5jb25zdCBOZXdzQ2FyZCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vLi4vY29tcG9uZW50cy9uZXdzL25ld3MtY2FyZFwiKSk7XHJcbmNvbnN0IE5ld3NXaWRlQ2FyZCA9IGR5bmFtaWMoKCkgPT5cclxuICAgIGltcG9ydChcIi4uLy4uL2NvbXBvbmVudHMvbmV3cy9uZXdzLXdpZGUtY2FyZFwiKVxyXG4pO1xyXG5cclxuaW1wb3J0IHsgY2RuX3VybCB9IGZyb20gXCIuLi8uLi91dGlscy9jb25zdGFudHNcIjtcclxuaW1wb3J0IFdQIGZyb20gXCIuLi8uLi91dGlscy93b3JkcHJlc3NcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgdXBwZXJSb290OiB7XHJcbiAgICAgICAgd2lkdGg6IFwiODUlXCIsXHJcbiAgICAgICAgbWFyZ2luOiBcImF1dG9cIixcclxuICAgIH0sXHJcbiAgICBzZWVNb3JlOiB7XHJcbiAgICAgICAgd2lkdGg6IFwiODUlXCIsXHJcbiAgICAgICAgbWFyZ2luOiBcImF1dG9cIixcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgTmV3cyA9ICh7IHVwcGVyTmV3cywgbG93ZXJOZXdzLCB1c2VycyB9KSA9PiB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3QgZ2V0QXV0aG9yID0gYXV0aG9yX2lkID0+IHtcclxuICAgICAgICByZXR1cm4gdXNlcnMuZmluZCh1c2VyID0+IHVzZXIuaWQgPT09IGF1dGhvcl9pZCkubmFtZTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8U3BhY2UgLz5cclxuXHJcbiAgICAgICAgICAgIHt1cHBlck5ld3MubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICAgIDxTZWN0aW9uSGVhZGVyIHRleHQ9XCJOZXcgVG9wIDMgUG9zdHNcIiAvPlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBjbGFzc05hbWU9e2NsYXNzZXMudXBwZXJSb290fT5cclxuICAgICAgICAgICAgICAgIHt1cHBlck5ld3MubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICB1cHBlck5ld3MubWFwKG5ld3MgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs0fSBrZXk9e25ld3MuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOZXdzQ2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0PXtuZXdzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRob3I9e2dldEF1dGhvcihuZXdzLmF1dGhvcil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhdGllbnRseSBXYWl0aW5nLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake2Nkbl91cmx9L2NoYW1taWUtY2hhbi9kZXRlcm1pbmVkLWNoYW1taWUtY2hhbi5wbmdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjUlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8U3BhY2UgLz5cclxuXHJcbiAgICAgICAgICAgIHt1cHBlck5ld3MubGVuZ3RoID4gMyA/IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlY3Rpb25IZWFkZXIgdGV4dD1cIlJlbWFpbmluZyBQb3N0c1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNwYWNlIC8+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICB7bG93ZXJOZXdzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0gY2xhc3NOYW1lPXtjbGFzc2VzLnVwcGVyUm9vdH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2xvd2VyTmV3cy5tYXAobmV3cyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0ga2V5PXtuZXdzLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmV3c1dpZGVDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3Q9e25ld3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcj17Z2V0QXV0aG9yKG5ld3MuYXV0aG9yKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxldCBbcG9zdHMsIHVzZXJzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgV1AucG9zdHMoKS5jYXRlZ29yaWVzKDIpLnBlclBhZ2UoMTAwKS5vcmRlcihcImRlc2NcIikub3JkZXJieShcImRhdGVcIiksXHJcbiAgICAgICAgICAgIFdQLnVzZXJzKCksXHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIGxldCB1cHBlck5ld3MgPSBwb3N0cy5zbGljZSgwLCAzKTtcclxuICAgICAgICBsZXQgbG93ZXJOZXdzID0gcG9zdHMuc2xpY2UoMywgcG9zdHMubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJvcHM6IHsgdXBwZXJOZXdzOiB1cHBlck5ld3MsIGxvd2VyTmV3czogbG93ZXJOZXdzLCB1c2VyczogdXNlcnMgfSxcclxuICAgICAgICAgICAgcmV2YWxpZGF0ZTogMTAsXHJcbiAgICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJvcHM6IHsgdXBwZXJOZXdzOiBbXSwgbG93ZXJOZXdzOiBbXSwgdXNlcnM6IFtdIH0sXHJcbiAgICAgICAgICAgIHJldmFsaWRhdGU6IDEwLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld3M7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=