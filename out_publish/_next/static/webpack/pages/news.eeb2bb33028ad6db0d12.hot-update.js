webpackHotUpdate_N_E("pages/news",{

/***/ "./node_modules/fast-sort/dist/sort.es.js":
false,

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
      lineNumber: 36,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_news_section_header__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
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
            lineNumber: 44,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 25
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
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
        lineNumber: 54,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_general_space__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_news_section_header__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_general_space__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
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
            lineNumber: 74,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 25
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
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
        lineNumber: 84,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidXBwZXJSb290Iiwid2lkdGgiLCJtYXJnaW4iLCJzZWVNb3JlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiTmV3cyIsInVwcGVyTmV3cyIsImxvd2VyTmV3cyIsInVzZXJzIiwiY2xhc3NlcyIsImdldEF1dGhvciIsImF1dGhvcl9pZCIsImZpbmQiLCJ1c2VyIiwiaWQiLCJuYW1lIiwibWFwIiwibmV3cyIsImF1dGhvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUN6QkMsV0FBUyxFQUFFO0FBQ1BDLFNBQUssRUFBRSxLQURBO0FBRVBDLFVBQU0sRUFBRTtBQUZELEdBRGM7QUFLekJDLFNBQU8sRUFBRTtBQUNMRixTQUFLLEVBQUUsS0FERjtBQUVMQyxVQUFNLEVBQUUsTUFGSDtBQUdMRSxXQUFPLEVBQUUsTUFISjtBQUlMQyxrQkFBYyxFQUFFO0FBSlg7QUFMZ0IsQ0FBRCxDQUE1Qjs7QUFhQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFxQztBQUFBOztBQUFBLE1BQWxDQyxTQUFrQyxRQUFsQ0EsU0FBa0M7QUFBQSxNQUF2QkMsU0FBdUIsUUFBdkJBLFNBQXVCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQzlDLE1BQU1DLE9BQU8sR0FBR1osU0FBUyxFQUF6Qjs7QUFFQSxNQUFNYSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFBQyxTQUFTLEVBQUk7QUFDM0IsV0FBT0gsS0FBSyxDQUFDSSxJQUFOLENBQVcsVUFBQUMsSUFBSTtBQUFBLGFBQUlBLElBQUksQ0FBQ0MsRUFBTCxLQUFZSCxTQUFoQjtBQUFBLEtBQWYsRUFBMENJLElBQWpEO0FBQ0gsR0FGRDs7QUFJQSxzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUdJLHFFQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISixlQUtJLHFFQUFDLDhEQUFEO0FBQU0sZUFBUyxNQUFmO0FBQWdCLGFBQU8sRUFBRSxDQUF6QjtBQUE0QixlQUFTLEVBQUVOLE9BQU8sQ0FBQ1YsU0FBL0M7QUFBQSxnQkFDS08sU0FBUyxDQUFDVSxHQUFWLENBQWMsVUFBQUMsSUFBSSxFQUFJO0FBQ25CLDRCQUNJLHFFQUFDLDhEQUFEO0FBQU0sY0FBSSxNQUFWO0FBQVcsWUFBRSxFQUFFLEVBQWY7QUFBbUIsWUFBRSxFQUFFLENBQXZCO0FBQUEsaUNBQ0kscUVBQUMsa0VBQUQ7QUFDSSxnQkFBSSxFQUFFQSxJQURWO0FBRUksa0JBQU0sRUFBRVAsU0FBUyxDQUFDTyxJQUFJLENBQUNDLE1BQU47QUFGckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREo7QUFRSCxPQVRBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxKLGVBa0JJO0FBQUssZUFBUyxFQUFFVCxPQUFPLENBQUNQLE9BQXhCO0FBQUEsNkJBQ0kscUVBQUMsZ0VBQUQ7QUFDSSxlQUFPLEVBQUMsVUFEWjtBQUVJLGFBQUssRUFBQyxTQUZWO0FBR0ksd0JBQWdCLE1BSHBCO0FBSUksWUFBSSxFQUFDLFFBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbEJKLGVBNkJJLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE3QkosZUErQkkscUVBQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQS9CSixlQWlDSSxxRUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakNKLGVBbUNJLHFFQUFDLDhEQUFEO0FBQU0sZUFBUyxNQUFmO0FBQWdCLGFBQU8sRUFBRSxDQUF6QjtBQUE0QixlQUFTLEVBQUVPLE9BQU8sQ0FBQ1YsU0FBL0M7QUFBQSxnQkFDS1EsU0FBUyxDQUFDUyxHQUFWLENBQWMsVUFBQUMsSUFBSSxFQUFJO0FBQ25CLDRCQUNJLHFFQUFDLDhEQUFEO0FBQU0sY0FBSSxNQUFWO0FBQVcsWUFBRSxFQUFFLEVBQWY7QUFBQSxpQ0FDSSxxRUFBQyx1RUFBRDtBQUNJLGdCQUFJLEVBQUVBLElBRFY7QUFFSSxrQkFBTSxFQUFFUCxTQUFTLENBQUNPLElBQUksQ0FBQ0MsTUFBTjtBQUZyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESjtBQVFILE9BVEE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbkNKLGVBZ0RJO0FBQUssZUFBUyxFQUFFVCxPQUFPLENBQUNQLE9BQXhCO0FBQUEsNkJBQ0kscUVBQUMsZ0VBQUQ7QUFDSSxlQUFPLEVBQUMsVUFEWjtBQUVJLGFBQUssRUFBQyxTQUZWO0FBR0ksd0JBQWdCLE1BSHBCO0FBSUksWUFBSSxFQUFDLFFBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaERKO0FBQUEsa0JBREo7QUE2REgsQ0FwRUQ7O0dBQU1HLEk7VUFDY1IsUzs7O0tBRGRRLEk7O0FBK0ZTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9uZXdzLmVlYjJiYjMzMDI4YWQ2ZGIwZDEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuXHJcbmltcG9ydCBOZXdzQ2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9uZXdzL25ld3MtY2FyZFwiO1xyXG5pbXBvcnQgTmV3c1dpZGVDYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL25ld3MvbmV3cy13aWRlLWNhcmRcIjtcclxuaW1wb3J0IFNwYWNlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dlbmVyYWwvc3BhY2VcIjtcclxuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbmV3cy9zZWN0aW9uLWhlYWRlclwiO1xyXG5cclxuaW1wb3J0IFdQIGZyb20gXCIuLi8uLi91dGlscy93b3JkcHJlc3NcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgdXBwZXJSb290OiB7XHJcbiAgICAgICAgd2lkdGg6IFwiODUlXCIsXHJcbiAgICAgICAgbWFyZ2luOiBcImF1dG9cIixcclxuICAgIH0sXHJcbiAgICBzZWVNb3JlOiB7XHJcbiAgICAgICAgd2lkdGg6IFwiODUlXCIsXHJcbiAgICAgICAgbWFyZ2luOiBcImF1dG9cIixcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgTmV3cyA9ICh7IHVwcGVyTmV3cywgbG93ZXJOZXdzLCB1c2VycyB9KSA9PiB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3QgZ2V0QXV0aG9yID0gYXV0aG9yX2lkID0+IHtcclxuICAgICAgICByZXR1cm4gdXNlcnMuZmluZCh1c2VyID0+IHVzZXIuaWQgPT09IGF1dGhvcl9pZCkubmFtZTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8U3BhY2UgLz5cclxuXHJcbiAgICAgICAgICAgIDxTZWN0aW9uSGVhZGVyIC8+XHJcblxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gY2xhc3NOYW1lPXtjbGFzc2VzLnVwcGVyUm9vdH0+XHJcbiAgICAgICAgICAgICAgICB7dXBwZXJOZXdzLm1hcChuZXdzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5ld3NDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdD17bmV3c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRob3I9e2dldEF1dGhvcihuZXdzLmF1dGhvcil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWVNb3JlfT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUVsZXZhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFNlZSBNb3JlXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8U3BhY2UgLz5cclxuXHJcbiAgICAgICAgICAgIDxTZWN0aW9uSGVhZGVyIC8+XHJcblxyXG4gICAgICAgICAgICA8U3BhY2UgLz5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfSBjbGFzc05hbWU9e2NsYXNzZXMudXBwZXJSb290fT5cclxuICAgICAgICAgICAgICAgIHtsb3dlck5ld3MubWFwKG5ld3MgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOZXdzV2lkZUNhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0PXtuZXdzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcj17Z2V0QXV0aG9yKG5ld3MuYXV0aG9yKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlZU1vcmV9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlRWxldmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgU2VlIE1vcmVcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxldCBbcG9zdHMsIHVzZXJzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgV1AucG9zdHMoKS5jYXRlZ29yaWVzKDIpLnBlclBhZ2UoMTAwKS5vcmRlcihcImRlc2NcIikub3JkZXJieShcImRhdGVcIiksXHJcbiAgICAgICAgICAgIFdQLnVzZXJzKCksXHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIC8vc29ydChwb3N0cykuZGVzYyhwb3N0ID0+IHBvc3QuZGF0ZSk7XHJcblxyXG4gICAgICAgIGxldCB1cHBlck5ld3MgPSBwb3N0cy5zbGljZSgwLCAzKTtcclxuICAgICAgICBsZXQgbG93ZXJOZXdzID0gcG9zdHMuc2xpY2UoMywgcG9zdHMubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJvcHM6IHsgdXBwZXJOZXdzOiB1cHBlck5ld3MsIGxvd2VyTmV3czogbG93ZXJOZXdzLCB1c2VyczogdXNlcnMgfSxcclxuICAgICAgICAgICAgcmV2YWxpZGF0ZTogMTAsXHJcbiAgICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJvcHM6IHsgdXBwZXJOZXdzOiBbXSwgbG93ZXJOZXdzOiBbXSwgdXNlcnM6IFtdIH0sXHJcbiAgICAgICAgICAgIHJldmFsaWRhdGU6IDEwLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld3M7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=