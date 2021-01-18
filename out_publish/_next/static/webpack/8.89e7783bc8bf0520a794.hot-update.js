webpackHotUpdate_N_E(8,{

/***/ "./components/events/event-card.js":
false,

/***/ "./components/news/news-wide-card.js":
/*!*******************************************!*\
  !*** ./components/news/news-wide-card.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");



var _jsxFileName = "D:\\ADDUCS\\CSSEC\\cssec-website\\components\\news\\news-wide-card.js",
    _this = undefined,
    _s = $RefreshSig$();









var NewsWideCard = function NewsWideCard(_ref) {
  _s();

  var post = _ref.post,
      author = _ref.author;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      renderedExcerpt = _React$useState2[0],
      setRenderedExcerpt = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      renderedTitle = _React$useState4[0],
      setRenderedTitle = _React$useState4[1];

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if ("rendered" in post.excerpt) {
      setRenderedExcerpt(post.excerpt.rendered);
    }
  }, [post.excerpt]);
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if ("rendered" in post.title) {
      setRenderedTitle(post.title.rendered);
    }
  }, [post.title]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
      container: true,
      alignItems: "center",
      style: {
        padding: 10
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
        item: true,
        xs: 12,
        md: 4,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: post.jetpack_featured_media_url !== "" ? post.jetpack_featured_media_url : "/logos/temp.jpg",
          width: "100%"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
        item: true,
        xs: 12,
        md: 8,
        style: {
          padding: 10
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
          variant: "h4",
          component: "h2",
          dangerouslySetInnerHTML: {
            __html: renderedTitle
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
          color: "textSecondary",
          children: author ? "".concat(author, " on ").concat(Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["format"])(new Date(post.date), "MMM dd yyyy p")) : "Unknown on ".concat(Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["format"])(new Date(post.date), "MMM dd yyyy p"))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
          variant: "body1",
          component: "p",
          dangerouslySetInnerHTML: {
            __html: renderedExcerpt
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            display: "flex",
            flexDirection: "row-reverse"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
            variant: "contained",
            color: "primary",
            onClick: function onClick() {
              return router.push("/news/".concat(post.slug));
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
              children: "Read More"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }, _this);
};

_s(NewsWideCard, "cogYMrg62YK/Z2Lu3LR29JDMViM=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = NewsWideCard;
/* harmony default export */ __webpack_exports__["default"] = (NewsWideCard);

var _c;

$RefreshReg$(_c, "NewsWideCard");

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

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Divider/Divider.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Divider/index.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uZXdzL25ld3Mtd2lkZS1jYXJkLmpzIl0sIm5hbWVzIjpbIk5ld3NXaWRlQ2FyZCIsInBvc3QiLCJhdXRob3IiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwicmVuZGVyZWRFeGNlcnB0Iiwic2V0UmVuZGVyZWRFeGNlcnB0IiwicmVuZGVyZWRUaXRsZSIsInNldFJlbmRlcmVkVGl0bGUiLCJ1c2VFZmZlY3QiLCJleGNlcnB0IiwicmVuZGVyZWQiLCJ0aXRsZSIsInBhZGRpbmciLCJqZXRwYWNrX2ZlYXR1cmVkX21lZGlhX3VybCIsIl9faHRtbCIsImZvcm1hdCIsIkRhdGUiLCJkYXRlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJwdXNoIiwic2x1ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBc0I7QUFBQTs7QUFBQSxNQUFuQkMsSUFBbUIsUUFBbkJBLElBQW1CO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhO0FBQ3ZDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRHVDLHdCQUVPQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUZQO0FBQUE7QUFBQSxNQUVoQ0MsZUFGZ0M7QUFBQSxNQUVmQyxrQkFGZTs7QUFBQSx5QkFHR0gsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FISDtBQUFBO0FBQUEsTUFHaENHLGFBSGdDO0FBQUEsTUFHakJDLGdCQUhpQjs7QUFLdkNMLDhDQUFLLENBQUNNLFNBQU4sQ0FBZ0IsWUFBTTtBQUNsQixRQUFJLGNBQWNWLElBQUksQ0FBQ1csT0FBdkIsRUFBZ0M7QUFDNUJKLHdCQUFrQixDQUFDUCxJQUFJLENBQUNXLE9BQUwsQ0FBYUMsUUFBZCxDQUFsQjtBQUNIO0FBQ0osR0FKRCxFQUlHLENBQUNaLElBQUksQ0FBQ1csT0FBTixDQUpIO0FBTUFQLDhDQUFLLENBQUNNLFNBQU4sQ0FBZ0IsWUFBTTtBQUNsQixRQUFJLGNBQWNWLElBQUksQ0FBQ2EsS0FBdkIsRUFBOEI7QUFDMUJKLHNCQUFnQixDQUFDVCxJQUFJLENBQUNhLEtBQUwsQ0FBV0QsUUFBWixDQUFoQjtBQUNIO0FBQ0osR0FKRCxFQUlHLENBQUNaLElBQUksQ0FBQ2EsS0FBTixDQUpIO0FBTUEsc0JBQ0kscUVBQUMsK0RBQUQ7QUFBQSwyQkFDSSxxRUFBQyw4REFBRDtBQUFNLGVBQVMsTUFBZjtBQUFnQixnQkFBVSxFQUFDLFFBQTNCO0FBQW9DLFdBQUssRUFBRTtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQUEzQztBQUFBLDhCQUNJLHFFQUFDLDhEQUFEO0FBQU0sWUFBSSxNQUFWO0FBQVcsVUFBRSxFQUFFLEVBQWY7QUFBbUIsVUFBRSxFQUFFLENBQXZCO0FBQUEsK0JBQ0k7QUFDSSxhQUFHLEVBQ0NkLElBQUksQ0FBQ2UsMEJBQUwsS0FBb0MsRUFBcEMsR0FDTWYsSUFBSSxDQUFDZSwwQkFEWCxHQUVNLGlCQUpkO0FBTUksZUFBSyxFQUFDO0FBTlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQVdJLHFFQUFDLDhEQUFEO0FBQU0sWUFBSSxNQUFWO0FBQVcsVUFBRSxFQUFFLEVBQWY7QUFBbUIsVUFBRSxFQUFFLENBQXZCO0FBQTBCLGFBQUssRUFBRTtBQUFFRCxpQkFBTyxFQUFFO0FBQVgsU0FBakM7QUFBQSxnQ0FDSSxxRUFBQyxvRUFBRDtBQUNJLGlCQUFPLEVBQUMsSUFEWjtBQUVJLG1CQUFTLEVBQUMsSUFGZDtBQUdJLGlDQUF1QixFQUFFO0FBQUVFLGtCQUFNLEVBQUVSO0FBQVY7QUFIN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQU1JLHFFQUFDLG9FQUFEO0FBQVksZUFBSyxFQUFDLGVBQWxCO0FBQUEsb0JBQ0tQLE1BQU0sYUFDRUEsTUFERixpQkFDZWdCLHVEQUFNLENBQ2xCLElBQUlDLElBQUosQ0FBU2xCLElBQUksQ0FBQ21CLElBQWQsQ0FEa0IsRUFFbEIsZUFGa0IsQ0FEckIseUJBS2FGLHVEQUFNLENBQ2hCLElBQUlDLElBQUosQ0FBU2xCLElBQUksQ0FBQ21CLElBQWQsQ0FEZ0IsRUFFaEIsZUFGZ0IsQ0FMbkI7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5KLGVBaUJJLHFFQUFDLG9FQUFEO0FBQ0ksaUJBQU8sRUFBQyxPQURaO0FBRUksbUJBQVMsRUFBQyxHQUZkO0FBR0ksaUNBQXVCLEVBQUU7QUFBRUgsa0JBQU0sRUFBRVY7QUFBVjtBQUg3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpCSixlQXNCSTtBQUNJLGVBQUssRUFBRTtBQUNIYyxtQkFBTyxFQUFFLE1BRE47QUFFSEMseUJBQWEsRUFBRTtBQUZaLFdBRFg7QUFBQSxpQ0FNSSxxRUFBQyxnRUFBRDtBQUNJLG1CQUFPLEVBQUMsV0FEWjtBQUVJLGlCQUFLLEVBQUMsU0FGVjtBQUdJLG1CQUFPLEVBQUU7QUFBQSxxQkFBTW5CLE1BQU0sQ0FBQ29CLElBQVAsaUJBQXFCdEIsSUFBSSxDQUFDdUIsSUFBMUIsRUFBTjtBQUFBLGFBSGI7QUFBQSxtQ0FLSSxxRUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXRCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFxREgsQ0F0RUQ7O0dBQU14QixZO1VBQ2FJLHFEOzs7S0FEYkosWTtBQXdFU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svOC44OWU3NzgzYmM4YmYwNTIwYTc5NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xyXG5cclxuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcblxyXG5jb25zdCBOZXdzV2lkZUNhcmQgPSAoeyBwb3N0LCBhdXRob3IgfSkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBbcmVuZGVyZWRFeGNlcnB0LCBzZXRSZW5kZXJlZEV4Y2VycHRdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbcmVuZGVyZWRUaXRsZSwgc2V0UmVuZGVyZWRUaXRsZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChcInJlbmRlcmVkXCIgaW4gcG9zdC5leGNlcnB0KSB7XHJcbiAgICAgICAgICAgIHNldFJlbmRlcmVkRXhjZXJwdChwb3N0LmV4Y2VycHQucmVuZGVyZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtwb3N0LmV4Y2VycHRdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChcInJlbmRlcmVkXCIgaW4gcG9zdC50aXRsZSkge1xyXG4gICAgICAgICAgICBzZXRSZW5kZXJlZFRpdGxlKHBvc3QudGl0bGUucmVuZGVyZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtwb3N0LnRpdGxlXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UGFwZXI+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgc3R5bGU9e3sgcGFkZGluZzogMTAgfX0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3QuamV0cGFja19mZWF0dXJlZF9tZWRpYV91cmwgIT09IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHBvc3QuamV0cGFja19mZWF0dXJlZF9tZWRpYV91cmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiL2xvZ29zL3RlbXAuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezh9IHN0eWxlPXt7IHBhZGRpbmc6IDEwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImgyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiByZW5kZXJlZFRpdGxlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2F1dGhvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgJHthdXRob3J9IG9uICR7Zm9ybWF0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUocG9zdC5kYXRlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTU1NIGRkIHl5eXkgcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBgVW5rbm93biBvbiAke2Zvcm1hdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKHBvc3QuZGF0ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk1NTSBkZCB5eXl5IHBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHJlbmRlcmVkRXhjZXJwdCB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvdy1yZXZlcnNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL25ld3MvJHtwb3N0LnNsdWd9YCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlJlYWQgTW9yZTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L1BhcGVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld3NXaWRlQ2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==