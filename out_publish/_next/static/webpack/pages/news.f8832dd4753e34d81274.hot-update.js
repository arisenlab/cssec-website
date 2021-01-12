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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");



var _jsxFileName = "D:\\ADDUCS\\CSSEC\\cssec-website\\components\\news\\news-wide-card.js",
    _this = undefined,
    _s = $RefreshSig$();








var NewsWideCard = function NewsWideCard(_ref) {
  _s();

  var post = _ref.post,
      author = _ref.author;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState2 = Object(D_ADDUCS_CSSEC_cssec_website_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      renderedExcerpt = _React$useState2[0],
      setRenderedExcerpt = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState4 = Object(D_ADDUCS_CSSEC_cssec_website_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
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
          lineNumber: 31,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
        item: true,
        xs: 12,
        md: 8,
        style: {
          padding: 10
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
          variant: "h4",
          component: "h2",
          dangerouslySetInnerHTML: {
            __html: renderedTitle
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
          color: "textSecondary",
          children: author ? "".concat(author, "/").concat(post.date) : "Unknown/".concat(post.date)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
          variant: "body1",
          component: "p",
          dangerouslySetInnerHTML: {
            __html: renderedExcerpt
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          style: {
            display: "flex",
            flexDirection: "row-reverse"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
            variant: "outlined",
            color: "primary",
            disableElevation: true,
            onClick: function onClick() {
              return router.push("/news/".concat(post.slug));
            },
            children: "Read More"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uZXdzL25ld3Mtd2lkZS1jYXJkLmpzIl0sIm5hbWVzIjpbIk5ld3NXaWRlQ2FyZCIsInBvc3QiLCJhdXRob3IiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwicmVuZGVyZWRFeGNlcnB0Iiwic2V0UmVuZGVyZWRFeGNlcnB0IiwicmVuZGVyZWRUaXRsZSIsInNldFJlbmRlcmVkVGl0bGUiLCJ1c2VFZmZlY3QiLCJleGNlcnB0IiwicmVuZGVyZWQiLCJ0aXRsZSIsInBhZGRpbmciLCJqZXRwYWNrX2ZlYXR1cmVkX21lZGlhX3VybCIsIl9faHRtbCIsImRhdGUiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsInB1c2giLCJzbHVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFzQjtBQUFBOztBQUFBLE1BQW5CQyxJQUFtQixRQUFuQkEsSUFBbUI7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFDdkMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEdUMsd0JBRU9DLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBRlA7QUFBQTtBQUFBLE1BRWhDQyxlQUZnQztBQUFBLE1BRWZDLGtCQUZlOztBQUFBLHlCQUdHSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUhIO0FBQUE7QUFBQSxNQUdoQ0csYUFIZ0M7QUFBQSxNQUdqQkMsZ0JBSGlCOztBQUt2Q0wsOENBQUssQ0FBQ00sU0FBTixDQUFnQixZQUFNO0FBQ2xCLFFBQUksY0FBY1YsSUFBSSxDQUFDVyxPQUF2QixFQUFnQztBQUM1Qkosd0JBQWtCLENBQUNQLElBQUksQ0FBQ1csT0FBTCxDQUFhQyxRQUFkLENBQWxCO0FBQ0g7QUFDSixHQUpELEVBSUcsQ0FBQ1osSUFBSSxDQUFDVyxPQUFOLENBSkg7QUFNQVAsOENBQUssQ0FBQ00sU0FBTixDQUFnQixZQUFNO0FBQ2xCLFFBQUksY0FBY1YsSUFBSSxDQUFDYSxLQUF2QixFQUE4QjtBQUMxQkosc0JBQWdCLENBQUNULElBQUksQ0FBQ2EsS0FBTCxDQUFXRCxRQUFaLENBQWhCO0FBQ0g7QUFDSixHQUpELEVBSUcsQ0FBQ1osSUFBSSxDQUFDYSxLQUFOLENBSkg7QUFNQSxzQkFDSSxxRUFBQywrREFBRDtBQUFBLDJCQUNJLHFFQUFDLDhEQUFEO0FBQU0sZUFBUyxNQUFmO0FBQWdCLGdCQUFVLEVBQUMsUUFBM0I7QUFBb0MsV0FBSyxFQUFFO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BQTNDO0FBQUEsOEJBQ0kscUVBQUMsOERBQUQ7QUFBTSxZQUFJLE1BQVY7QUFBVyxVQUFFLEVBQUUsRUFBZjtBQUFtQixVQUFFLEVBQUUsQ0FBdkI7QUFBQSwrQkFDSTtBQUNJLGFBQUcsRUFDQ2QsSUFBSSxDQUFDZSwwQkFBTCxLQUFvQyxFQUFwQyxHQUNNZixJQUFJLENBQUNlLDBCQURYLEdBRU0saUJBSmQ7QUFNSSxlQUFLLEVBQUM7QUFOVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBV0kscUVBQUMsOERBQUQ7QUFBTSxZQUFJLE1BQVY7QUFBVyxVQUFFLEVBQUUsRUFBZjtBQUFtQixVQUFFLEVBQUUsQ0FBdkI7QUFBMEIsYUFBSyxFQUFFO0FBQUVELGlCQUFPLEVBQUU7QUFBWCxTQUFqQztBQUFBLGdDQUNJLHFFQUFDLG9FQUFEO0FBQ0ksaUJBQU8sRUFBQyxJQURaO0FBRUksbUJBQVMsRUFBQyxJQUZkO0FBR0ksaUNBQXVCLEVBQUU7QUFBRUUsa0JBQU0sRUFBRVI7QUFBVjtBQUg3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBTUkscUVBQUMsb0VBQUQ7QUFBWSxlQUFLLEVBQUMsZUFBbEI7QUFBQSxvQkFDS1AsTUFBTSxhQUNFQSxNQURGLGNBQ1lELElBQUksQ0FBQ2lCLElBRGpCLHNCQUVVakIsSUFBSSxDQUFDaUIsSUFGZjtBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkosZUFXSSxxRUFBQyxvRUFBRDtBQUNJLGlCQUFPLEVBQUMsT0FEWjtBQUVJLG1CQUFTLEVBQUMsR0FGZDtBQUdJLGlDQUF1QixFQUFFO0FBQUVELGtCQUFNLEVBQUVWO0FBQVY7QUFIN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYSixlQWdCSTtBQUNJLGVBQUssRUFBRTtBQUNIWSxtQkFBTyxFQUFFLE1BRE47QUFFSEMseUJBQWEsRUFBRTtBQUZaLFdBRFg7QUFBQSxpQ0FNSSxxRUFBQyxnRUFBRDtBQUNJLG1CQUFPLEVBQUMsVUFEWjtBQUVJLGlCQUFLLEVBQUMsU0FGVjtBQUdJLDRCQUFnQixNQUhwQjtBQUlJLG1CQUFPLEVBQUU7QUFBQSxxQkFBTWpCLE1BQU0sQ0FBQ2tCLElBQVAsaUJBQXFCcEIsSUFBSSxDQUFDcUIsSUFBMUIsRUFBTjtBQUFBLGFBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFnREgsQ0FqRUQ7O0dBQU10QixZO1VBQ2FJLHFEOzs7S0FEYkosWTtBQW1FU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbmV3cy5mODgzMmRkNDc1M2UzNGQ4MTI3NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xyXG5cclxuY29uc3QgTmV3c1dpZGVDYXJkID0gKHsgcG9zdCwgYXV0aG9yIH0pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW3JlbmRlcmVkRXhjZXJwdCwgc2V0UmVuZGVyZWRFeGNlcnB0XSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3JlbmRlcmVkVGl0bGUsIHNldFJlbmRlcmVkVGl0bGVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoXCJyZW5kZXJlZFwiIGluIHBvc3QuZXhjZXJwdCkge1xyXG4gICAgICAgICAgICBzZXRSZW5kZXJlZEV4Y2VycHQocG9zdC5leGNlcnB0LnJlbmRlcmVkKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcG9zdC5leGNlcnB0XSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoXCJyZW5kZXJlZFwiIGluIHBvc3QudGl0bGUpIHtcclxuICAgICAgICAgICAgc2V0UmVuZGVyZWRUaXRsZShwb3N0LnRpdGxlLnJlbmRlcmVkKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcG9zdC50aXRsZV0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFBhcGVyPlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgYWxpZ25JdGVtcz1cImNlbnRlclwiIHN0eWxlPXt7IHBhZGRpbmc6IDEwIH19PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0LmpldHBhY2tfZmVhdHVyZWRfbWVkaWFfdXJsICE9PSBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwb3N0LmpldHBhY2tfZmVhdHVyZWRfbWVkaWFfdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIi9sb2dvcy90ZW1wLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs4fSBzdHlsZT17eyBwYWRkaW5nOiAxMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcmVuZGVyZWRUaXRsZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHthdXRob3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYCR7YXV0aG9yfS8ke3Bvc3QuZGF0ZX1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGBVbmtub3duLyR7cG9zdC5kYXRlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHJlbmRlcmVkRXhjZXJwdCB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvdy1yZXZlcnNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVFbGV2YXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvbmV3cy8ke3Bvc3Quc2x1Z31gKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhZCBNb3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9QYXBlcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdzV2lkZUNhcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=