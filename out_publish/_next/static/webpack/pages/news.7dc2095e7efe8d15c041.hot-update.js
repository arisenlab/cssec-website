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
    }, _this), upperNews.length > 3 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_general_space__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_general_section_header__WEBPACK_IMPORTED_MODULE_7__["default"], {
        text: "Remaining Posts"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_general_space__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
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
            lineNumber: 95,
            columnNumber: 33
          }, _this)
        }, news.id, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 29
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJOZXdzQ2FyZCIsImR5bmFtaWMiLCJOZXdzV2lkZUNhcmQiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidXBwZXJSb290Iiwid2lkdGgiLCJtYXJnaW4iLCJzZWVNb3JlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwicHJvZ3Jlc3NDb250ZW50IiwiaGVpZ2h0IiwiTmV3cyIsInVwcGVyTmV3cyIsImxvd2VyTmV3cyIsInVzZXJzIiwiY2xhc3NlcyIsImdldEF1dGhvciIsImF1dGhvcl9pZCIsImZpbmQiLCJ1c2VyIiwiaWQiLCJuYW1lIiwibGVuZ3RoIiwibWFwIiwibmV3cyIsImF1dGhvciIsImNkbl91cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLG1EQUFPLE1BQUM7QUFBQSxTQUFNLHNKQUFOO0FBQUEsQ0FBRDtBQUFBO0FBQUE7QUFBQSxrQ0FBYyx1RUFBZDtBQUFBO0FBQUEsY0FBYyxpQ0FBZDtBQUFBO0FBQUEsRUFBeEI7TUFBTUQsUTtBQUNOLElBQU1FLFlBQVksR0FBR0QsbURBQU8sT0FBQztBQUFBLFNBQ3pCLGlLQUR5QjtBQUFBLENBQUQ7QUFBQTtBQUFBO0FBQUEsa0NBQ2pCLGlGQURpQjtBQUFBO0FBQUEsY0FDakIsc0NBRGlCO0FBQUE7QUFBQSxFQUE1QjtNQUFNQyxZO0FBSU47QUFHQSxJQUFNQyxTQUFTLEdBQUdDLDJFQUFVLENBQUM7QUFDekJDLFdBQVMsRUFBRTtBQUNQQyxTQUFLLEVBQUUsS0FEQTtBQUVQQyxVQUFNLEVBQUU7QUFGRCxHQURjO0FBS3pCQyxTQUFPLEVBQUU7QUFDTEYsU0FBSyxFQUFFLEtBREY7QUFFTEMsVUFBTSxFQUFFLE1BRkg7QUFHTEUsV0FBTyxFQUFFLE1BSEo7QUFJ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LFNBQVMsQ0FBQ1UsR0FBVixDQUFjLFVBQUFDLElBQUksRUFBSTtBQUNuQiw0QkFDSSxxRUFBQyw4REFBRDtBQUFNLGNBQUksTUFBVjtBQUFXLFlBQUUsRUFBRSxFQUFmO0FBQUEsaUNBQ0kscUVBQUMsWUFBRDtBQUNJLGdCQUFJLEVBQUVBLElBRFY7QUFFSSxrQkFBTSxFQUFFUixTQUFTLENBQUNRLElBQUksQ0FBQ0MsTUFBTjtBQUZyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosV0FBd0JELElBQUksQ0FBQ0osRUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESjtBQVFILE9BVEE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREgsR0FhRyxJQTFEUjtBQUFBLGtCQURKO0FBOERILENBckVEOztHQUFNVCxJO1VBQ2NWLFM7OztNQURkVSxJOztBQThGU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbmV3cy43ZGMyMDk1ZTdlZmU4ZDE1YzA0MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5cclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcclxuXHJcbmltcG9ydCBTcGFjZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9nZW5lcmFsL3NwYWNlXCI7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dlbmVyYWwvc2VjdGlvbi1oZWFkZXJcIjtcclxuXHJcbmNvbnN0IE5ld3NDYXJkID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuLi8uLi9jb21wb25lbnRzL25ld3MvbmV3cy1jYXJkXCIpKTtcclxuY29uc3QgTmV3c1dpZGVDYXJkID0gZHluYW1pYygoKSA9PlxyXG4gICAgaW1wb3J0KFwiLi4vLi4vY29tcG9uZW50cy9uZXdzL25ld3Mtd2lkZS1jYXJkXCIpXHJcbik7XHJcblxyXG5pbXBvcnQgeyBjZG5fdXJsIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgV1AgZnJvbSBcIi4uLy4uL3V0aWxzL3dvcmRwcmVzc1wiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICB1cHBlclJvb3Q6IHtcclxuICAgICAgICB3aWR0aDogXCI4NSVcIixcclxuICAgICAgICBtYXJnaW46IFwiYXV0b1wiLFxyXG4gICAgfSxcclxuICAgIHNlZU1vcmU6IHtcclxuICAgICAgICB3aWR0aDogXCI4NSVcIixcclxuICAgICAgICBtYXJnaW46IFwiYXV0b1wiLFxyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgfSxcclxuICAgIHByb2dyZXNzQ29udGVudDoge1xyXG4gICAgICAgIGhlaWdodDogXCI4MHZoXCIsXHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5jb25zdCBOZXdzID0gKHsgdXBwZXJOZXdzLCBsb3dlck5ld3MsIHVzZXJzIH0pID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCBnZXRBdXRob3IgPSBhdXRob3JfaWQgPT4ge1xyXG4gICAgICAgIHJldHVybiB1c2Vycy5maW5kKHVzZXIgPT4gdXNlci5pZCA9PT0gYXV0aG9yX2lkKS5uYW1lO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHt1cHBlck5ld3MubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNwYWNlIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlY3Rpb25IZWFkZXIgdGV4dD1cIk5ldyBUb3AgMyBQb3N0c1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy51cHBlclJvb3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dXBwZXJOZXdzLm1hcChuZXdzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs0fSBrZXk9e25ld3MuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmV3c0NhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3Q9e25ld3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRob3I9e2dldEF1dGhvcihuZXdzLmF1dGhvcil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9ncmVzc0NvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7Y2RuX3VybH0vY2hhbW1pZS1jaGFuL2RldGVybWluZWQtY2hhbW1pZS1jaGFuLnBuZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI1JVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VycmVudGx5IGluIFByb2dyZXNzLi4uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge3VwcGVyTmV3cy5sZW5ndGggPiAzID8gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8U3BhY2UgLz5cclxuICAgICAgICAgICAgICAgICAgICA8U2VjdGlvbkhlYWRlciB0ZXh0PVwiUmVtYWluaW5nIFBvc3RzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8U3BhY2UgLz5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgIHtsb3dlck5ld3MubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfSBjbGFzc05hbWU9e2NsYXNzZXMudXBwZXJSb290fT5cclxuICAgICAgICAgICAgICAgICAgICB7bG93ZXJOZXdzLm1hcChuZXdzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBrZXk9e25ld3MuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOZXdzV2lkZUNhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdD17bmV3c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yPXtnZXRBdXRob3IobmV3cy5hdXRob3IpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IFtwb3N0cywgdXNlcnNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICBXUC5wb3N0cygpLmNhdGVnb3JpZXMoMikucGVyUGFnZSgxMDApLm9yZGVyKFwiZGVzY1wiKS5vcmRlcmJ5KFwiZGF0ZVwiKSxcclxuICAgICAgICAgICAgV1AudXNlcnMoKSxcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgbGV0IHVwcGVyTmV3cyA9IHBvc3RzLnNsaWNlKDAsIDMpO1xyXG4gICAgICAgIGxldCBsb3dlck5ld3MgPSBwb3N0cy5zbGljZSgzLCBwb3N0cy5sZW5ndGgpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwcm9wczogeyB1cHBlck5ld3M6IHVwcGVyTmV3cywgbG93ZXJOZXdzOiBsb3dlck5ld3MsIHVzZXJzOiB1c2VycyB9LFxyXG4gICAgICAgICAgICByZXZhbGlkYXRlOiAxMCxcclxuICAgICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwcm9wczogeyB1cHBlck5ld3M6IFtdLCBsb3dlck5ld3M6IFtdLCB1c2VyczogW10gfSxcclxuICAgICAgICAgICAgcmV2YWxpZGF0ZTogMTAsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3cztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==