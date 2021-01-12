webpackHotUpdate_N_E("pages/news",{

/***/ "./components/news/news-wide-card.js":
/*!*******************************************!*\
  !*** ./components/news/news-wide-card.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_ADDUCS_CSSEC_cssec_website_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");



var _jsxFileName = "D:\\ADDUCS\\CSSEC\\cssec-website\\components\\news\\news-wide-card.js",
    _this = undefined,
    _s = $RefreshSig$();








var NewsWideCard = function NewsWideCard(_ref) {
  _s();

  var post = _ref.post,
      author = _ref.author;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(""),
      _React$useState2 = Object(D_ADDUCS_CSSEC_cssec_website_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      renderedExcerpt = _React$useState2[0],
      setRenderedExcerpt = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(""),
      _React$useState4 = Object(D_ADDUCS_CSSEC_cssec_website_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      renderedTitle = _React$useState4[0],
      setRenderedTitle = _React$useState4[1];

  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    if ("rendered" in post.excerpt) {
      setRenderedExcerpt(post.excerpt.rendered);
    }
  }, [post.excerpt]);
  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    if ("rendered" in post.title) {
      setRenderedTitle(post.title.rendered);
    }
  }, [post.title]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
      container: true,
      alignItems: "center",
      style: {
        padding: 10
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
        item: true,
        xs: 12,
        md: 4,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
          src: post.jetpack_featured_media_url !== "" ? post.jetpack_featured_media_url : "/logos/temp.jpg",
          width: "100%"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
        item: true,
        xs: 12,
        md: 8,
        style: {
          padding: 10
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
          variant: "h4",
          component: "h2",
          dangerouslySetInnerHTML: {
            __html: renderedTitle
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
          color: "textSecondary",
          children: author ? "".concat(author, "/").concat(post.date) : "Unknown/".concat(post.date)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
          variant: "body1",
          component: "p",
          dangerouslySetInnerHTML: {
            __html: renderedExcerpt
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          style: {
            display: "flex",
            flexDirection: "row-reverse"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
            variant: "outlined",
            color: "primary",
            disableElevation: true,
            children: "Read More"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }, _this);
};

_s(NewsWideCard, "N+Elrf+kbN6ewp5ubfdxwlmNYfs=");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uZXdzL25ld3Mtd2lkZS1jYXJkLmpzIl0sIm5hbWVzIjpbIk5ld3NXaWRlQ2FyZCIsInBvc3QiLCJhdXRob3IiLCJSZWFjdCIsInVzZVN0YXRlIiwicmVuZGVyZWRFeGNlcnB0Iiwic2V0UmVuZGVyZWRFeGNlcnB0IiwicmVuZGVyZWRUaXRsZSIsInNldFJlbmRlcmVkVGl0bGUiLCJ1c2VFZmZlY3QiLCJleGNlcnB0IiwicmVuZGVyZWQiLCJ0aXRsZSIsInBhZGRpbmciLCJqZXRwYWNrX2ZlYXR1cmVkX21lZGlhX3VybCIsIl9faHRtbCIsImRhdGUiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBc0I7QUFBQTs7QUFBQSxNQUFuQkMsSUFBbUIsUUFBbkJBLElBQW1CO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhOztBQUFBLHdCQUNPQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQURQO0FBQUE7QUFBQSxNQUNoQ0MsZUFEZ0M7QUFBQSxNQUNmQyxrQkFEZTs7QUFBQSx5QkFFR0gsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FGSDtBQUFBO0FBQUEsTUFFaENHLGFBRmdDO0FBQUEsTUFFakJDLGdCQUZpQjs7QUFJdkNMLDhDQUFLLENBQUNNLFNBQU4sQ0FBZ0IsWUFBTTtBQUNsQixRQUFJLGNBQWNSLElBQUksQ0FBQ1MsT0FBdkIsRUFBZ0M7QUFDNUJKLHdCQUFrQixDQUFDTCxJQUFJLENBQUNTLE9BQUwsQ0FBYUMsUUFBZCxDQUFsQjtBQUNIO0FBQ0osR0FKRCxFQUlHLENBQUNWLElBQUksQ0FBQ1MsT0FBTixDQUpIO0FBTUFQLDhDQUFLLENBQUNNLFNBQU4sQ0FBZ0IsWUFBTTtBQUNsQixRQUFJLGNBQWNSLElBQUksQ0FBQ1csS0FBdkIsRUFBOEI7QUFDMUJKLHNCQUFnQixDQUFDUCxJQUFJLENBQUNXLEtBQUwsQ0FBV0QsUUFBWixDQUFoQjtBQUNIO0FBQ0osR0FKRCxFQUlHLENBQUNWLElBQUksQ0FBQ1csS0FBTixDQUpIO0FBTUEsc0JBQ0kscUVBQUMsK0RBQUQ7QUFBQSwyQkFDSSxxRUFBQyw4REFBRDtBQUFNLGVBQVMsTUFBZjtBQUFnQixnQkFBVSxFQUFDLFFBQTNCO0FBQW9DLFdBQUssRUFBRTtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQUEzQztBQUFBLDhCQUNJLHFFQUFDLDhEQUFEO0FBQU0sWUFBSSxNQUFWO0FBQVcsVUFBRSxFQUFFLEVBQWY7QUFBbUIsVUFBRSxFQUFFLENBQXZCO0FBQUEsK0JBQ0k7QUFDSSxhQUFHLEVBQ0NaLElBQUksQ0FBQ2EsMEJBQUwsS0FBb0MsRUFBcEMsR0FDTWIsSUFBSSxDQUFDYSwwQkFEWCxHQUVNLGlCQUpkO0FBTUksZUFBSyxFQUFDO0FBTlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQVdJLHFFQUFDLDhEQUFEO0FBQU0sWUFBSSxNQUFWO0FBQVcsVUFBRSxFQUFFLEVBQWY7QUFBbUIsVUFBRSxFQUFFLENBQXZCO0FBQTBCLGFBQUssRUFBRTtBQUFFRCxpQkFBTyxFQUFFO0FBQVgsU0FBakM7QUFBQSxnQ0FDSSxxRUFBQyw0REFBRDtBQUNJLGlCQUFPLEVBQUMsSUFEWjtBQUVJLG1CQUFTLEVBQUMsSUFGZDtBQUdJLGlDQUF1QixFQUFFO0FBQUVFLGtCQUFNLEVBQUVSO0FBQVY7QUFIN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQU1JLHFFQUFDLDREQUFEO0FBQVksZUFBSyxFQUFDLGVBQWxCO0FBQUEsb0JBQ0tMLE1BQU0sYUFDRUEsTUFERixjQUNZRCxJQUFJLENBQUNlLElBRGpCLHNCQUVVZixJQUFJLENBQUNlLElBRmY7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5KLGVBV0kscUVBQUMsNERBQUQ7QUFDSSxpQkFBTyxFQUFDLE9BRFo7QUFFSSxtQkFBUyxFQUFDLEdBRmQ7QUFHSSxpQ0FBdUIsRUFBRTtBQUFFRCxrQkFBTSxFQUFFVjtBQUFWO0FBSDdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEosZUFnQkk7QUFDSSxlQUFLLEVBQUU7QUFDSFksbUJBQU8sRUFBRSxNQUROO0FBRUhDLHlCQUFhLEVBQUU7QUFGWixXQURYO0FBQUEsaUNBTUkscUVBQUMsZ0VBQUQ7QUFDSSxtQkFBTyxFQUFDLFVBRFo7QUFFSSxpQkFBSyxFQUFDLFNBRlY7QUFHSSw0QkFBZ0IsTUFIcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUErQ0gsQ0EvREQ7O0dBQU1sQixZOztLQUFBQSxZO0FBaUVTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9uZXdzLmQxZTQ0M2M4NGQ5ZWQyNjg4NTdlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xyXG5cclxuY29uc3QgTmV3c1dpZGVDYXJkID0gKHsgcG9zdCwgYXV0aG9yIH0pID0+IHtcclxuICAgIGNvbnN0IFtyZW5kZXJlZEV4Y2VycHQsIHNldFJlbmRlcmVkRXhjZXJwdF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtyZW5kZXJlZFRpdGxlLCBzZXRSZW5kZXJlZFRpdGxlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKFwicmVuZGVyZWRcIiBpbiBwb3N0LmV4Y2VycHQpIHtcclxuICAgICAgICAgICAgc2V0UmVuZGVyZWRFeGNlcnB0KHBvc3QuZXhjZXJwdC5yZW5kZXJlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Bvc3QuZXhjZXJwdF0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKFwicmVuZGVyZWRcIiBpbiBwb3N0LnRpdGxlKSB7XHJcbiAgICAgICAgICAgIHNldFJlbmRlcmVkVGl0bGUocG9zdC50aXRsZS5yZW5kZXJlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Bvc3QudGl0bGVdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQYXBlcj5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBzdHlsZT17eyBwYWRkaW5nOiAxMCB9fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdC5qZXRwYWNrX2ZlYXR1cmVkX21lZGlhX3VybCAhPT0gXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcG9zdC5qZXRwYWNrX2ZlYXR1cmVkX21lZGlhX3VybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCIvbG9nb3MvdGVtcC5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17OH0gc3R5bGU9e3sgcGFkZGluZzogMTAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImg0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHJlbmRlcmVkVGl0bGUgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YXV0aG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGAke2F1dGhvcn0vJHtwb3N0LmRhdGV9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBgVW5rbm93bi8ke3Bvc3QuZGF0ZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiByZW5kZXJlZEV4Y2VycHQgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3ctcmV2ZXJzZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlRWxldmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWQgTW9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvUGFwZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3c1dpZGVDYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9