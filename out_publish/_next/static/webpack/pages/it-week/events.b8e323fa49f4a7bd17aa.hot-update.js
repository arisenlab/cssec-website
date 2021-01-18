webpackHotUpdate_N_E("pages/it-week/events",{

/***/ "./components/events/event-card.js":
/*!*****************************************!*\
  !*** ./components/events/event-card.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");




var _jsxFileName = "D:\\ADDUCS\\CSSEC\\cssec-website\\components\\events\\event-card.js",
    _this = undefined,
    _s = $RefreshSig$();








var EventCard = function EventCard(_ref) {
  _s();

  var summary = _ref.summary,
      timeStart = _ref.timeStart,
      timeEnd = _ref.timeEnd,
      location = _ref.location,
      description = _ref.description;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(new Date()),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      currentTime = _React$useState2[0],
      setCurrentTime = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      happening = _React$useState4[0],
      setHappening = _React$useState4[1];

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    window.setInterval(setCurrentTime(function () {
      return new Date();
    }), 1000);
  }, []);
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if (Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["differenceInSeconds"])(new Date(timeStart), currentTime) > 0) {
      setHappening(true);
    } else {
      setHappening(false);
    }
  }, [currentTime]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      padding: 15,
      marginBottom: 10
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
      container: true,
      direction: "column",
      spacing: 1,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
        item: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
          variant: "h5",
          align: "left",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
            children: summary
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 25
          }, _this), console.log(currentTime), happening ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: " - Happening Right Now"
          }, void 0, false) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6__["default"], {
          variant: "fullWidth",
          style: {
            height: 3,
            backgroundColor: "#622a55"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
        container: true,
        item: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
          item: true,
          xs: 6,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
            variant: "h6",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "Time: ".concat(Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["format"])(new Date(timeStart), "p"), " - ").concat(Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["format"])(new Date(timeEnd), "p"))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
          item: true,
          xs: 6,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
            variant: "h6",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "Venue: ".concat(location)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
        container: true,
        item: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
          item: true,
          xs: 12,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
            variant: "body1",
            align: "justify",
            children: description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
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

_s(EventCard, "Kr/thZGehqMOwiX7ER5LzRrj0bU=");

_c = EventCard;
/* harmony default export */ __webpack_exports__["default"] = (EventCard);

var _c;

$RefreshReg$(_c, "EventCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ldmVudHMvZXZlbnQtY2FyZC5qcyJdLCJuYW1lcyI6WyJFdmVudENhcmQiLCJzdW1tYXJ5IiwidGltZVN0YXJ0IiwidGltZUVuZCIsImxvY2F0aW9uIiwiZGVzY3JpcHRpb24iLCJSZWFjdCIsInVzZVN0YXRlIiwiRGF0ZSIsImN1cnJlbnRUaW1lIiwic2V0Q3VycmVudFRpbWUiLCJoYXBwZW5pbmciLCJzZXRIYXBwZW5pbmciLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJzZXRJbnRlcnZhbCIsImRpZmZlcmVuY2VJblNlY29uZHMiLCJwYWRkaW5nIiwibWFyZ2luQm90dG9tIiwiY29uc29sZSIsImxvZyIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsImZvcm1hdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBNEQ7QUFBQTs7QUFBQSxNQUF6REMsT0FBeUQsUUFBekRBLE9BQXlEO0FBQUEsTUFBaERDLFNBQWdELFFBQWhEQSxTQUFnRDtBQUFBLE1BQXJDQyxPQUFxQyxRQUFyQ0EsT0FBcUM7QUFBQSxNQUE1QkMsUUFBNEIsUUFBNUJBLFFBQTRCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjs7QUFBQSx3QkFDcENDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxJQUFJQyxJQUFKLEVBQWYsQ0FEb0M7QUFBQTtBQUFBLE1BQ25FQyxXQURtRTtBQUFBLE1BQ3REQyxjQURzRDs7QUFBQSx5QkFFeENKLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBRndDO0FBQUE7QUFBQSxNQUVuRUksU0FGbUU7QUFBQSxNQUV4REMsWUFGd0Q7O0FBSTFFTiw4Q0FBSyxDQUFDTyxTQUFOLENBQWdCLFlBQU07QUFDbEJDLFVBQU0sQ0FBQ0MsV0FBUCxDQUNJTCxjQUFj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QUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBMENILENBN0REOztHQUFNTCxTOztLQUFBQSxTO0FBK0RTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pdC13ZWVrL2V2ZW50cy5iOGUzMjNmYTQ5ZjRhN2JkMTdhYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiO1xyXG5cclxuaW1wb3J0IHsgZm9ybWF0LCBkaWZmZXJlbmNlSW5TZWNvbmRzIH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcblxyXG5jb25zdCBFdmVudENhcmQgPSAoeyBzdW1tYXJ5LCB0aW1lU3RhcnQsIHRpbWVFbmQsIGxvY2F0aW9uLCBkZXNjcmlwdGlvbiB9KSA9PiB7XHJcbiAgICBjb25zdCBbY3VycmVudFRpbWUsIHNldEN1cnJlbnRUaW1lXSA9IFJlYWN0LnVzZVN0YXRlKG5ldyBEYXRlKCkpO1xyXG4gICAgY29uc3QgW2hhcHBlbmluZywgc2V0SGFwcGVuaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5zZXRJbnRlcnZhbChcclxuICAgICAgICAgICAgc2V0Q3VycmVudFRpbWUoKCkgPT4gbmV3IERhdGUoKSksXHJcbiAgICAgICAgICAgIDEwMDBcclxuICAgICAgICApO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGRpZmZlcmVuY2VJblNlY29uZHMobmV3IERhdGUodGltZVN0YXJ0KSwgY3VycmVudFRpbWUpID4gMCkge1xyXG4gICAgICAgICAgICBzZXRIYXBwZW5pbmcodHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0SGFwcGVuaW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbY3VycmVudFRpbWVdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQYXBlciBzdHlsZT17eyBwYWRkaW5nOiAxNSwgbWFyZ2luQm90dG9tOiAxMCB9fT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj1cImNvbHVtblwiIHNwYWNpbmc9ezF9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBhbGlnbj1cImxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGI+e3N1bW1hcnl9PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29uc29sZS5sb2coY3VycmVudFRpbWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aGFwcGVuaW5nID8gPD4gLSBIYXBwZW5pbmcgUmlnaHQgTm93PC8+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpdmlkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZ1bGxXaWR0aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzYyMmE1NVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj57YFRpbWU6ICR7Zm9ybWF0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKHRpbWVTdGFydCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9IC0gJHtmb3JtYXQobmV3IERhdGUodGltZUVuZCksIFwicFwiKX1gfTwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj57YFZlbnVlOiAke2xvY2F0aW9ufWB9PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBhbGlnbj1cImp1c3RpZnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvUGFwZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRDYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9