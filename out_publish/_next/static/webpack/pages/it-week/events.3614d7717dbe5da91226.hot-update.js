webpackHotUpdate_N_E("pages/it-week/events",{

/***/ "./pages/it-week/events.js":
/*!*********************************!*\
  !*** ./pages/it-week/events.js ***!
  \*********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/ArrowBack */ "./node_modules/@material-ui/icons/ArrowBack.js");
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_general_space__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/general/space */ "./components/general/space.js");
/* harmony import */ var _data_days_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../data/days_data */ "./data/days_data.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_utils_constants__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");



var _jsxFileName = "D:\\ADDUCS\\CSSEC\\cssec-website\\pages\\it-week\\events.js",
    _this = undefined,
    _s = $RefreshSig$();















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    root: {
      width: "95%",
      margin: "auto"
    },
    arrowIcon: {
      display: "flex",
      alignItems: "center"
    },
    paper: {
      padding: 10
    },
    adSpace: {
      marginTop: 10
    },
    headerEvent: {
      backgroundColor: "#622A55",
      color: "#fff"
    },
    contentEvent: {
      backgroundColor: "rgba(186, 131, 180, 0.29)",
      padding: 20
    },
    text: {
      wordWrap: "break-word"
    }
  };
});

var Events = function Events(_ref) {
  _s();

  var sunday_events = _ref.sunday_events,
      monday_events = _ref.monday_events,
      tuesday_events = _ref.tuesday_events,
      wednesday_events = _ref.wednesday_events,
      thursday_events = _ref.thursday_events,
      friday_events = _ref.friday_events,
      saturday_events = _ref.saturday_events,
      events = _ref.events;
  var classes = useStyles();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  _data_days_data__WEBPACK_IMPORTED_MODULE_13__["default"][0]["events"] = sunday_events;
  _data_days_data__WEBPACK_IMPORTED_MODULE_13__["default"][1]["events"] = monday_events;
  _data_days_data__WEBPACK_IMPORTED_MODULE_13__["default"][2]["events"] = tuesday_events;
  _data_days_data__WEBPACK_IMPORTED_MODULE_13__["default"][3]["events"] = wednesday_events;
  _data_days_data__WEBPACK_IMPORTED_MODULE_13__["default"][4]["events"] = thursday_events;
  _data_days_data__WEBPACK_IMPORTED_MODULE_13__["default"][5]["events"] = friday_events;
  _data_days_data__WEBPACK_IMPORTED_MODULE_13__["default"][6]["events"] = saturday_events;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(_data_days_data__WEBPACK_IMPORTED_MODULE_13__["default"][0].events),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      eventList = _React$useState2[0],
      setEventList = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(_data_days_data__WEBPACK_IMPORTED_MODULE_13__["default"][0].str_date),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      dayDate = _React$useState4[0],
      setDayDate = _React$useState4[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_general_space__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_6__["default"], {
      disableRipple: true,
      className: classes.arrowIcon,
      onClick: function onClick() {
        return router.push("/it-week");
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_11___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
        variant: "h6",
        children: "Back"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 35
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_general_space__WEBPACK_IMPORTED_MODULE_12__["default"], {
      height: 10
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
      container: true,
      spacing: 2,
      direction: "column",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
        item: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__["default"], {
          className: classes.paper,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
            variant: "h4",
            style: {
              color: "#5D2252"
            },
            children: "Information Technology Week - Events"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
        container: true,
        item: true,
        spacing: 3,
        style: {
          padding: 20
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
          container: true,
          item: true,
          sm: 3,
          spacing: 1,
          direction: "column",
          children: _data_days_data__WEBPACK_IMPORTED_MODULE_13__["default"].map(function (_ref2) {
            var id = _ref2.id,
                name = _ref2.name,
                str_date = _ref2.str_date,
                style = _ref2.style;
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
              item: true,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_6__["default"], {
                style: {
                  width: "100%"
                },
                onClick: function onClick() {
                  setEventList(_data_days_data__WEBPACK_IMPORTED_MODULE_13__["default"][id].events);
                  setDayDate(str_date);
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  style: style,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    variant: "h6",
                    children: name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 109,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 33
              }, _this)
            }, id, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 29
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
          container: true,
          item: true,
          sm: 6,
          spacing: 1,
          direction: "column",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
            item: true,
            align: "center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__["default"], {
              className: classes.headerEvent,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
                variant: "h6",
                children: dayDate
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
            item: true,
            align: "center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__["default"], {
              className: classes.contentEvent,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
                container: true,
                spacing: 2,
                direction: "column",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  container: true,
                  item: true,
                  spacing: 2,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
                    item: true,
                    xs: 4,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
                      variant: "h6",
                      children: "Time"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 128,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 127,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
                    item: true,
                    xs: 4,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
                      variant: "h6",
                      children: "Activity"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 133,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 132,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
                    item: true,
                    xs: 4,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
                      variant: "h6",
                      children: "Venue"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 138,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 137,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  item: true,
                  xs: 12,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    className: classes.paper,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
                      container: true,
                      direction: "column",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
                        item: true,
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
                          variant: "h5",
                          align: "left",
                          children: "Event Name"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 147,
                          columnNumber: 53
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10__["default"], {
                          variant: "fullWidth",
                          style: {
                            height: 5,
                            backgroundColor: "#622a55"
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 153,
                          columnNumber: 53
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 146,
                        columnNumber: 49
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 145,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 144,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 143,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
          item: true,
          md: 3,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
            src: "".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_14__["cdn_url"], "/ads/batucs-2.png"),
            width: 650,
            height: 400
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 246,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 9
  }, _this);
};

_s(Events, "FidnIIqEFRfw974ssoHSNpMvN/8=", false, function () {
  return [useStyles, next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = Events;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Events);

var _c;

$RefreshReg$(_c, "Events");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaXQtd2Vlay9ldmVudHMuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIndpZHRoIiwibWFyZ2luIiwiYXJyb3dJY29uIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJwYXBlciIsInBhZGRpbmciLCJhZFNwYWNlIiwibWFyZ2luVG9wIiwiaGVhZGVyRXZlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImNvbnRlbnRFdmVudCIsInRleHQiLCJ3b3JkV3JhcCIsIkV2ZW50cyIsInN1bmRheV9ldmVudHMiLCJtb25kYXlfZXZlbnRzIiwidHVlc2RheV9ldmVudHMiLCJ3ZWRuZXNkYXlfZXZlbnRzIiwidGh1cnNkYXlfZXZlbnRzIiwiZnJpZGF5X2V2ZW50cyIsInNhdHVyZGF5X2V2ZW50cyIsImV2ZW50cyIsImNsYXNzZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkYXlzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImV2ZW50TGlzdCIsInNldEV2ZW50TGlzdCIsInN0cl9kYXRlIiwiZGF5RGF0ZSIsInNldERheURhdGUiLCJwdXNoIiwibWFwIiwiaWQiLCJuYW1lIiwic3R5bGUiLCJoZWlnaHQiLCJjZG5fdXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUlBO0FBRUE7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQUMsS0FBSztBQUFBLFNBQUs7QUFDbkNDLFFBQUksRUFBRTtBQUNGQyxXQUFLLEVBQUUsS0FETDtBQUVGQyxZQUFNLEVBQUU7QUFGTixLQUQ2QjtBQUtuQ0MsYUFBUyxFQUFFO0FBQ1BDLGFBQU8sRUFBRSxNQURGO0FBRVBDLGdCQUFVLEVBQUU7QUFGTCxLQUx3QjtB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O0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQWxCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcEJKLGVBb0pJLHFFQUFDLDhEQUFEO0FBQU0sY0FBSSxNQUFWO0FBQVcsWUFBRSxFQUFFLENBQWY7QUFBQSxpQ0FDSSxxRUFBQyxpREFBRDtBQUNJLGVBQUcsWUFBSytCLHlEQUFMLHNCQURQO0FBRUksaUJBQUssRUFBRSxHQUZYO0FBR0ksa0JBQU0sRUFBRTtBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXBKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWtMSCxDQTFNRDs7R0FBTTFCLE07VUFVY25CLFMsRUFDRDhCLHFEOzs7S0FYYlgsTTs7QUE0UVNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2l0LXdlZWsvZXZlbnRzLjM2MTRkNzcxN2RiZTVkYTkxMjI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IEJ1dHRvbkJhc2UgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkJhc2VcIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiO1xyXG5cclxuaW1wb3J0IEFycm93QmFja0ljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd0JhY2tcIjtcclxuXHJcbmltcG9ydCBTcGFjZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9nZW5lcmFsL3NwYWNlXCI7XHJcblxyXG5pbXBvcnQgZGF5cyBmcm9tIFwiLi4vLi4vZGF0YS9kYXlzX2RhdGFcIjtcclxuXHJcbmltcG9ydCBnb29nbGVfY2FsZW5kYXIgZnJvbSBcIi4uLy4uL3V0aWxzL2dvb2dsZVwiO1xyXG5cclxuaW1wb3J0IHsgY2RuX3VybCB9IGZyb20gXCIuLi8uLi91dGlscy9jb25zdGFudHNcIjtcclxuXHJcbmltcG9ydCB7IGZvcm1hdCwgaXNTYW1lRGF5IH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgd2lkdGg6IFwiOTUlXCIsXHJcbiAgICAgICAgbWFyZ2luOiBcImF1dG9cIixcclxuICAgIH0sXHJcbiAgICBhcnJvd0ljb246IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgfSxcclxuICAgIHBhcGVyOiB7XHJcbiAgICAgICAgcGFkZGluZzogMTAsXHJcbiAgICB9LFxyXG4gICAgYWRTcGFjZToge1xyXG4gICAgICAgIG1hcmdpblRvcDogMTAsXHJcbiAgICB9LFxyXG4gICAgaGVhZGVyRXZlbnQ6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzYyMkE1NVwiLFxyXG4gICAgICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgIH0sXHJcbiAgICBjb250ZW50RXZlbnQ6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgxODYsIDEzMSwgMTgwLCAwLjI5KVwiLFxyXG4gICAgICAgIHBhZGRpbmc6IDIwLFxyXG4gICAgfSxcclxuICAgIHRleHQ6IHtcclxuICAgICAgICB3b3JkV3JhcDogXCJicmVhay13b3JkXCIsXHJcbiAgICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBFdmVudHMgPSAoe1xyXG4gICAgc3VuZGF5X2V2ZW50cyxcclxuICAgIG1vbmRheV9ldmVudHMsXHJcbiAgICB0dWVzZGF5X2V2ZW50cyxcclxuICAgIHdlZG5lc2RheV9ldmVudHMsXHJcbiAgICB0aHVyc2RheV9ldmVudHMsXHJcbiAgICBmcmlkYXlfZXZlbnRzLFxyXG4gICAgc2F0dXJkYXlfZXZlbnRzLFxyXG4gICAgZXZlbnRzLFxyXG59KSA9PiB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBkYXlzWzBdW1wiZXZlbnRzXCJdID0gc3VuZGF5X2V2ZW50cztcclxuICAgIGRheXNbMV1bXCJldmVudHNcIl0gPSBtb25kYXlfZXZlbnRzO1xyXG4gICAgZGF5c1syXVtcImV2ZW50c1wiXSA9IHR1ZXNkYXlfZXZlbnRzO1xyXG4gICAgZGF5c1szXVtcImV2ZW50c1wiXSA9IHdlZG5lc2RheV9ldmVudHM7XHJcbiAgICBkYXlzWzRdW1wiZXZlbnRzXCJdID0gdGh1cnNkYXlfZXZlbnRzO1xyXG4gICAgZGF5c1s1XVtcImV2ZW50c1wiXSA9IGZyaWRheV9ldmVudHM7XHJcbiAgICBkYXlzWzZdW1wiZXZlbnRzXCJdID0gc2F0dXJkYXlfZXZlbnRzO1xyXG5cclxuICAgIGNvbnN0IFtldmVudExpc3QsIHNldEV2ZW50TGlzdF0gPSBSZWFjdC51c2VTdGF0ZShkYXlzWzBdLmV2ZW50cyk7XHJcbiAgICBjb25zdCBbZGF5RGF0ZSwgc2V0RGF5RGF0ZV0gPSBSZWFjdC51c2VTdGF0ZShkYXlzWzBdLnN0cl9kYXRlKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICA8U3BhY2UgLz5cclxuICAgICAgICAgICAgPEJ1dHRvbkJhc2VcclxuICAgICAgICAgICAgICAgIGRpc2FibGVSaXBwbGVcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5hcnJvd0ljb259XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9pdC13ZWVrXCIpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8QXJyb3dCYWNrSWNvbiAvPiA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5CYWNrPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0J1dHRvbkJhc2U+XHJcbiAgICAgICAgICAgIDxTcGFjZSBoZWlnaHQ9ezEwfSAvPlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gZGlyZWN0aW9uPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBzdHlsZT17eyBjb2xvcjogXCIjNUQyMjUyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvcm1hdGlvbiBUZWNobm9sb2d5IFdlZWsgLSBFdmVudHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSBzcGFjaW5nPXszfSBzdHlsZT17eyBwYWRkaW5nOiAyMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSBzbT17M30gc3BhY2luZz17MX0gZGlyZWN0aW9uPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXlzLm1hcCgoeyBpZCwgbmFtZSwgc3RyX2RhdGUsIHN0eWxlIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0ga2V5PXtpZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkJhc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEV2ZW50TGlzdChkYXlzW2lkXS5ldmVudHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGF5RGF0ZShzdHJfZGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFwZXIgc3R5bGU9e3N0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uQmFzZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHNtPXs2fSBzcGFjaW5nPXsxfSBkaXJlY3Rpb249XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJFdmVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+e2RheURhdGV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnRFdmVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IGRpcmVjdGlvbj1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjdGl2aXR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZlbnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImg1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV2ZW50IE5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZ1bGxXaWR0aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiM2MjJhNTVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtldmVudExpc3QgJiYgZXZlbnRMaXN0Lmxlbmd0aCAhPT0gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50TGlzdC5tYXAoZXZlbnQgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYWNpbmc9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZXZlbnQuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFwZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLnBhcGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLnRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake2Zvcm1hdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0YXJ0LmRhdGVUaW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0gLSAke2Zvcm1hdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmVuZC5kYXRlVGltZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhcGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5wYXBlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy50ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtldmVudC5zdW1tYXJ5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFwZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLnBhcGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLnRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2V2ZW50LmxvY2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBObyBFdmVudC9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7Y2RuX3VybH0vYWRzL2JhdHVjcy0yLnBuZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NjUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs0MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGN0eCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBldmVudHMgPSAoXHJcbiAgICAgICAgICAgIGF3YWl0IGdvb2dsZV9jYWxlbmRhci5ldmVudHMubGlzdCh7XHJcbiAgICAgICAgICAgICAgICBjYWxlbmRhcklkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0FMRU5EQVJfSUQsXHJcbiAgICAgICAgICAgICAgICBvcmRlckJ5OiBcInN0YXJ0VGltZVwiLFxyXG4gICAgICAgICAgICAgICAgc2luZ2xlRXZlbnRzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdGltZU1pbjogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgIG1heFJlc3VsdHM6IDIwLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICkuZGF0YS5pdGVtcztcclxuXHJcbiAgICAgICAgY29uc3Qgc3VuZGF5X2V2ZW50cyA9IGV2ZW50cy5maWx0ZXIoZXZlbnQgPT5cclxuICAgICAgICAgICAgaXNTYW1lRGF5KG5ldyBEYXRlKGV2ZW50LnN0YXJ0LmRhdGVUaW1lKSwgbmV3IERhdGUoMjAyMSwgMCwgMTcpKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgbW9uZGF5X2V2ZW50cyA9IGV2ZW50cy5maWx0ZXIoZXZlbnQgPT5cclxuICAgICAgICAgICAgaXNTYW1lRGF5KG5ldyBEYXRlKGV2ZW50LnN0YXJ0LmRhdGVUaW1lKSwgbmV3IERhdGUoMjAyMSwgMCwgMTgpKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgdHVlc2RheV9ldmVudHMgPSBldmVudHMuZmlsdGVyKGV2ZW50ID0+XHJcbiAgICAgICAgICAgIGlzU2FtZURheShuZXcgRGF0ZShldmVudC5zdGFydC5kYXRlVGltZSksIG5ldyBEYXRlKDIwMjEsIDAsIDE5KSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHdlZG5lc2RheV9ldmVudHMgPSBldmVudHMuZmlsdGVyKGV2ZW50ID0+XHJcbiAgICAgICAgICAgIGlzU2FtZURheShuZXcgRGF0ZShldmVudC5zdGFydC5kYXRlVGltZSksIG5ldyBEYXRlKDIwMjEsIDAsIDIwKSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHRodXJzZGF5X2V2ZW50cyA9IGV2ZW50cy5maWx0ZXIoZXZlbnQgPT5cclxuICAgICAgICAgICAgaXNTYW1lRGF5KG5ldyBEYXRlKGV2ZW50LnN0YXJ0LmRhdGVUaW1lKSwgbmV3IERhdGUoMjAyMSwgMCwgMjEpKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgZnJpZGF5X2V2ZW50cyA9IGV2ZW50cy5maWx0ZXIoZXZlbnQgPT5cclxuICAgICAgICAgICAgaXNTYW1lRGF5KG5ldyBEYXRlKGV2ZW50LnN0YXJ0LmRhdGVUaW1lKSwgbmV3IERhdGUoMjAyMSwgMCwgMjIpKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3Qgc2F0dXJkYXlfZXZlbnRzID0gZXZlbnRzLmZpbHRlcihldmVudCA9PlxyXG4gICAgICAgICAgICBpc1NhbWVEYXkobmV3IERhdGUoZXZlbnQuc3RhcnQuZGF0ZVRpbWUpLCBuZXcgRGF0ZSgyMDIxLCAwLCAyMykpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgIHN1bmRheV9ldmVudHMsXHJcbiAgICAgICAgICAgICAgICBtb25kYXlfZXZlbnRzLFxyXG4gICAgICAgICAgICAgICAgdHVlc2RheV9ldmVudHMsXHJcbiAgICAgICAgICAgICAgICB3ZWRuZXNkYXlfZXZlbnRzLFxyXG4gICAgICAgICAgICAgICAgdGh1cnNkYXlfZXZlbnRzLFxyXG4gICAgICAgICAgICAgICAgZnJpZGF5X2V2ZW50cyxcclxuICAgICAgICAgICAgICAgIHNhdHVyZGF5X2V2ZW50cyxcclxuICAgICAgICAgICAgICAgIGV2ZW50cyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmV2YWxpZGF0ZTogMTAsXHJcbiAgICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgIHN1bmRheV9ldmVudHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgbW9uZGF5X2V2ZW50czogW10sXHJcbiAgICAgICAgICAgICAgICB0dWVzZGF5X2V2ZW50czogW10sXHJcbiAgICAgICAgICAgICAgICB3ZWRuZXNkYXlfZXZlbnRzOiBbXSxcclxuICAgICAgICAgICAgICAgIHRodXJzZGF5X2V2ZW50czogW10sXHJcbiAgICAgICAgICAgICAgICBmcmlkYXlfZXZlbnRzOiBbXSxcclxuICAgICAgICAgICAgICAgIHNhdHVyZGF5X2V2ZW50czogW10sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJldmFsaWRhdGU6IDEwLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50cztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==