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
  },
  progressContent: {
    height: "80vh",
    width: "100%"
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
    children: [upperNews.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_general_space__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_general_section_header__WEBPACK_IMPORTED_MODULE_7__["default"], {
        text: "New Top 3 Posts"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
        container: true,
        spacing: 2,
        className: classes.upperRoot,
        children: upperNews.map(function (news) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
            item: true,
            xs: 12,
            md: 4,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NewsCard, {
              post: news,
              author: getAuthor(news.author)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 37
            }, _this)
          }, news.id, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 33
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 21
      }, _this)]
    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
      container: true,
      justify: "center",
      alignItems: "center",
      className: classes.progressContent,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
        item: true,
        xs: 12,
        align: "center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_8__["cdn_url"], "/chammie-chan/determined-chammie-chan.png"),
          width: "25%"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
          variant: "h3",
          children: "Currently in Progress...."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_general_space__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }, _this), upperNews.length > 3 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_general_section_header__WEBPACK_IMPORTED_MODULE_7__["default"], {
        text: "Remaining Posts"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_general_space__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
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
            lineNumber: 96,
            columnNumber: 33
          }, _this)
        }, news.id, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 29
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJOZXdzQ2FyZCIsImR5bmFtaWMiLCJOZXdzV2lkZUNhcmQiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidXBwZXJSb290Iiwid2lkdGgiLCJtYXJnaW4iLCJzZWVNb3JlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwicHJvZ3Jlc3NDb250ZW50IiwiaGVpZ2h0IiwiTmV3cyIsInVwcGVyTmV3cyIsImxvd2VyTmV3cyIsInVzZXJzIiwiY2xhc3NlcyIsImdldEF1dGhvciIsImF1dGhvcl9pZCIsImZpbmQiLCJ1c2VyIiwiaWQiLCJuYW1lIiwibGVuZ3RoIiwibWFwIiwibmV3cyIsImF1dGhvciIsImNkbl91cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLG1EQUFPLE1BQUM7QUFBQSxTQUFNLHNKQUFOO0FBQUEsQ0FBRDtBQUFBO0FBQUE7QUFBQSxrQ0FBYyx1RUFBZDtBQUFBO0FBQUEsY0FBYyxpQ0FBZDtBQUFBO0FBQUEsRUFBeEI7TUFBTUQsUTtBQUNOLElBQU1FLFlBQVksR0FBR0QsbURBQU8sT0FBQztBQUFBLFNBQ3pCLGlLQUR5QjtBQUFBLENBQUQ7QUFBQTtBQUFBO0FBQUEsa0NBQ2pCLGlGQURpQjtBQUFBO0FBQUEsY0FDakIsc0NBRGlCO0FBQUE7QUFBQSxFQUE1QjtNQUFNQyxZO0FBSU47QUFHQSxJQUFNQyxTQUFTLEdBQUdDLDJFQUFVLENBQUM7QUFDekJDLFdBQVMsRUFBRTtBQUNQQyxTQUFLLEVBQUUsS0FEQTtBQUVQQyxVQUFNLEVBQUU7QUFGRCxHQURjO0FBS3pCQyxTQUFPLEVBQUU7QUFDTEYsU0FBSyxFQUFFLEtBREY7QUFFTEMsVUFBTSxFQUFFLE1BRkg7QUFHTEUsV0FBTyxFQUFFLE1BSEo7QUFJ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S1UsU0FBUyxDQUFDVSxHQUFWLENBQWMsVUFBQUMsSUFBSSxFQUFJO0FBQ25CLDRCQUNJLHFFQUFDLDhEQUFEO0FBQU0sY0FBSSxNQUFWO0FBQVcsWUFBRSxFQUFFLEVBQWY7QUFBQSxpQ0FDSSxxRUFBQyxZQUFEO0FBQ0ksZ0JBQUksRUFBRUEsSUFEVjtBQUVJLGtCQUFNLEVBQUVSLFNBQVMsQ0FBQ1EsSUFBSSxDQUFDQyxNQUFOO0FBRnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixXQUF3QkQsSUFBSSxDQUFDSixFQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKO0FBUUgsT0FUQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESCxHQWFHLElBM0RSO0FBQUEsa0JBREo7QUErREgsQ0F0RUQ7O0dBQU1ULEk7VUFDY1YsUzs7O01BRGRVLEk7O0FBK0ZTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9uZXdzLjMwZmIxZmY1YTE5MmEwM2JiZTcyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcblxyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xyXG5cclxuaW1wb3J0IFNwYWNlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dlbmVyYWwvc3BhY2VcIjtcclxuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ2VuZXJhbC9zZWN0aW9uLWhlYWRlclwiO1xyXG5cclxuY29uc3QgTmV3c0NhcmQgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4uLy4uL2NvbXBvbmVudHMvbmV3cy9uZXdzLWNhcmRcIikpO1xyXG5jb25zdCBOZXdzV2lkZUNhcmQgPSBkeW5hbWljKCgpID0+XHJcbiAgICBpbXBvcnQoXCIuLi8uLi9jb21wb25lbnRzL25ld3MvbmV3cy13aWRlLWNhcmRcIilcclxuKTtcclxuXHJcbmltcG9ydCB7IGNkbl91cmwgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBXUCBmcm9tIFwiLi4vLi4vdXRpbHMvd29yZHByZXNzXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIHVwcGVyUm9vdDoge1xyXG4gICAgICAgIHdpZHRoOiBcIjg1JVwiLFxyXG4gICAgICAgIG1hcmdpbjogXCJhdXRvXCIsXHJcbiAgICB9LFxyXG4gICAgc2VlTW9yZToge1xyXG4gICAgICAgIHdpZHRoOiBcIjg1JVwiLFxyXG4gICAgICAgIG1hcmdpbjogXCJhdXRvXCIsXHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICB9LFxyXG4gICAgcHJvZ3Jlc3NDb250ZW50OiB7XHJcbiAgICAgICAgaGVpZ2h0OiBcIjgwdmhcIixcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IE5ld3MgPSAoeyB1cHBlck5ld3MsIGxvd2VyTmV3cywgdXNlcnMgfSkgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIGNvbnN0IGdldEF1dGhvciA9IGF1dGhvcl9pZCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHVzZXJzLmZpbmQodXNlciA9PiB1c2VyLmlkID09PSBhdXRob3JfaWQpLm5hbWU7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge3VwcGVyTmV3cy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8U3BhY2UgLz5cclxuICAgICAgICAgICAgICAgICAgICA8U2VjdGlvbkhlYWRlciB0ZXh0PVwiTmV3IFRvcCAzIFBvc3RzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gY2xhc3NOYW1lPXtjbGFzc2VzLnVwcGVyUm9vdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt1cHBlck5ld3MubWFwKG5ld3MgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9IGtleT17bmV3cy5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOZXdzQ2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdD17bmV3c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcj17Z2V0QXV0aG9yKG5ld3MuYXV0aG9yKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeT1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2dyZXNzQ29udGVudH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtjZG5fdXJsfS9jaGFtbWllLWNoYW4vZGV0ZXJtaW5lZC1jaGFtbWllLWNoYW4ucG5nYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjUlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDdXJyZW50bHkgaW4gUHJvZ3Jlc3MuLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8U3BhY2UgLz5cclxuXHJcbiAgICAgICAgICAgIHt1cHBlck5ld3MubGVuZ3RoID4gMyA/IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlY3Rpb25IZWFkZXIgdGV4dD1cIlJlbWFpbmluZyBQb3N0c1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNwYWNlIC8+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICB7bG93ZXJOZXdzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0gY2xhc3NOYW1lPXtjbGFzc2VzLnVwcGVyUm9vdH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2xvd2VyTmV3cy5tYXAobmV3cyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0ga2V5PXtuZXdzLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmV3c1dpZGVDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3Q9e25ld3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcj17Z2V0QXV0aG9yKG5ld3MuYXV0aG9yKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxldCBbcG9zdHMsIHVzZXJzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgV1AucG9zdHMoKS5jYXRlZ29yaWVzKDIpLnBlclBhZ2UoMTAwKS5vcmRlcihcImRlc2NcIikub3JkZXJieShcImRhdGVcIiksXHJcbiAgICAgICAgICAgIFdQLnVzZXJzKCksXHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIGxldCB1cHBlck5ld3MgPSBwb3N0cy5zbGljZSgwLCAzKTtcclxuICAgICAgICBsZXQgbG93ZXJOZXdzID0gcG9zdHMuc2xpY2UoMywgcG9zdHMubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJvcHM6IHsgdXBwZXJOZXdzOiB1cHBlck5ld3MsIGxvd2VyTmV3czogbG93ZXJOZXdzLCB1c2VyczogdXNlcnMgfSxcclxuICAgICAgICAgICAgcmV2YWxpZGF0ZTogMTAsXHJcbiAgICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJvcHM6IHsgdXBwZXJOZXdzOiBbXSwgbG93ZXJOZXdzOiBbXSwgdXNlcnM6IFtdIH0sXHJcbiAgICAgICAgICAgIHJldmFsaWRhdGU6IDEwLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld3M7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=