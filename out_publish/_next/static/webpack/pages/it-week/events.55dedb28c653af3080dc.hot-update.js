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
                  children: eventList && eventList.length !== 0 ? eventList.map(function (event) {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(EventCard, {
                      timeStart: event.start.dateTime,
                      timeEnd: event.end.dateTime,
                      location: event.location,
                      description: event.description
                    }, event.id, false, {
                      fileName: _jsxFileName,
                      lineNumber: 146,
                      columnNumber: 49
                    }, _this);
                  }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
                    item: true,
                    align: "center",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
                      variant: "h6",
                      children: "No Event/s"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 160,
                      columnNumber: 49
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 159,
                    columnNumber: 45
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
            lineNumber: 171,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaXQtd2Vlay9ldmVudHMuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIndpZHRoIiwibWFyZ2luIiwiYXJyb3dJY29uIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJwYXBlciIsInBhZGRpbmciLCJhZFNwYWNlIiwibWFyZ2luVG9wIiwiaGVhZGVyRXZlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImNvbnRlbnRFdmVudCIsInRleHQiLCJ3b3JkV3JhcCIsIkV2ZW50cyIsInN1bmRheV9ldmVudHMiLCJtb25kYXlfZXZlbnRzIiwidHVlc2RheV9ldmVudHMiLCJ3ZWRuZXNkYXlfZXZlbnRzIiwidGh1cnNkYXlfZXZlbnRzIiwiZnJpZGF5X2V2ZW50cyIsInNhdHVyZGF5X2V2ZW50cyIsImV2ZW50cyIsImNsYXNzZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkYXlzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImV2ZW50TGlzdCIsInNldEV2ZW50TGlzdCIsInN0cl9kYXRlIiwiZGF5RGF0ZSIsInNldERheURhdGUiLCJwdXNoIiwibWFwIiwiaWQiLCJuYW1lIiwic3R5bGUiLCJsZW5ndGgiLCJldmVudCIsInN0YXJ0IiwiZGF0ZVRpbWUiLCJlbmQiLCJsb2NhdGlvbiIsImRlc2NyaXB0aW9uIiwiY2RuX3VybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFJQTtBQUVBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ25DQyxRQUFJLEVBQUU7QUFDRkMsV0FBSyxFQUFFLEtBREw7QUFFRkMsWUFBTSxFQUFFO0FBRk4sS0FENkI7QUFLbkNDLGFB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RUFBQyw4REFBRDtBQUFNLHdCQUFJLE1BQVY7QUFBVyx5QkFBSyxFQUFDLFFBQWpCO0FBQUEsMkNBQ0kscUVBQUMsb0VBQUQ7QUFBWSw2QkFBTyxFQUFDLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWhCUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQWxCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcEJKLGVBeUVJLHFFQUFDLDhEQUFEO0FBQU0sY0FBSSxNQUFWO0FBQVcsWUFBRSxFQUFFLENBQWY7QUFBQSxpQ0FDSSxxRUFBQyxpREFBRDtBQUNJLGVBQUcsWUFBS1UseURBQUwsc0JBRFA7QUFFSSxpQkFBSyxFQUFFLEdBRlg7QUFHSSxrQkFBTSxFQUFFO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBekVKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBdUdILENBL0hEOztHQUFNaEMsTTtVQVVjbkIsUyxFQUNEOEIscUQ7OztLQVhiWCxNOztBQWlNU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaXQtd2Vlay9ldmVudHMuNTVkZWRiMjhjNjUzYWYzMDgwZGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQnV0dG9uQmFzZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uQmFzZVwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XHJcbmltcG9ydCBEaXZpZGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyXCI7XHJcblxyXG5pbXBvcnQgQXJyb3dCYWNrSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93QmFja1wiO1xyXG5cclxuaW1wb3J0IFNwYWNlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dlbmVyYWwvc3BhY2VcIjtcclxuXHJcbmltcG9ydCBkYXlzIGZyb20gXCIuLi8uLi9kYXRhL2RheXNfZGF0YVwiO1xyXG5cclxuaW1wb3J0IGdvb2dsZV9jYWxlbmRhciBmcm9tIFwiLi4vLi4vdXRpbHMvZ29vZ2xlXCI7XHJcblxyXG5pbXBvcnQgeyBjZG5fdXJsIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xyXG5cclxuaW1wb3J0IHsgZm9ybWF0LCBpc1NhbWVEYXkgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICB3aWR0aDogXCI5NSVcIixcclxuICAgICAgICBtYXJnaW46IFwiYXV0b1wiLFxyXG4gICAgfSxcclxuICAgIGFycm93SWNvbjoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICB9LFxyXG4gICAgcGFwZXI6IHtcclxuICAgICAgICBwYWRkaW5nOiAxMCxcclxuICAgIH0sXHJcbiAgICBhZFNwYWNlOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wOiAxMCxcclxuICAgIH0sXHJcbiAgICBoZWFkZXJFdmVudDoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNjIyQTU1XCIsXHJcbiAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnRFdmVudDoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDE4NiwgMTMxLCAxODAsIDAuMjkpXCIsXHJcbiAgICAgICAgcGFkZGluZzogMjAsXHJcbiAgICB9LFxyXG4gICAgdGV4dDoge1xyXG4gICAgICAgIHdvcmRXcmFwOiBcImJyZWFrLXdvcmRcIixcclxuICAgIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEV2ZW50cyA9ICh7XHJcbiAgICBzdW5kYXlfZXZlbnRzLFxyXG4gICAgbW9uZGF5X2V2ZW50cyxcclxuICAgIHR1ZXNkYXlfZXZlbnRzLFxyXG4gICAgd2VkbmVzZGF5X2V2ZW50cyxcclxuICAgIHRodXJzZGF5X2V2ZW50cyxcclxuICAgIGZyaWRheV9ldmVudHMsXHJcbiAgICBzYXR1cmRheV9ldmVudHMsXHJcbiAgICBldmVudHMsXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGRheXNbMF1bXCJldmVudHNcIl0gPSBzdW5kYXlfZXZlbnRzO1xyXG4gICAgZGF5c1sxXVtcImV2ZW50c1wiXSA9IG1vbmRheV9ldmVudHM7XHJcbiAgICBkYXlzWzJdW1wiZXZlbnRzXCJdID0gdHVlc2RheV9ldmVudHM7XHJcbiAgICBkYXlzWzNdW1wiZXZlbnRzXCJdID0gd2VkbmVzZGF5X2V2ZW50cztcclxuICAgIGRheXNbNF1bXCJldmVudHNcIl0gPSB0aHVyc2RheV9ldmVudHM7XHJcbiAgICBkYXlzWzVdW1wiZXZlbnRzXCJdID0gZnJpZGF5X2V2ZW50cztcclxuICAgIGRheXNbNl1bXCJldmVudHNcIl0gPSBzYXR1cmRheV9ldmVudHM7XHJcblxyXG4gICAgY29uc3QgW2V2ZW50TGlzdCwgc2V0RXZlbnRMaXN0XSA9IFJlYWN0LnVzZVN0YXRlKGRheXNbMF0uZXZlbnRzKTtcclxuICAgIGNvbnN0IFtkYXlEYXRlLCBzZXREYXlEYXRlXSA9IFJlYWN0LnVzZVN0YXRlKGRheXNbMF0uc3RyX2RhdGUpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgIDxTcGFjZSAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uQmFzZVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZVJpcHBsZVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmFycm93SWNvbn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL2l0LXdlZWtcIil9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxBcnJvd0JhY2tJY29uIC8+IDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPkJhY2s8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uQmFzZT5cclxuICAgICAgICAgICAgPFNwYWNlIGhlaWdodD17MTB9IC8+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBkaXJlY3Rpb249XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIHN0eWxlPXt7IGNvbG9yOiBcIiM1RDIyNTJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm9ybWF0aW9uIFRlY2hub2xvZ3kgV2VlayAtIEV2ZW50c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHNwYWNpbmc9ezN9IHN0eWxlPXt7IHBhZGRpbmc6IDIwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHNtPXszfSBzcGFjaW5nPXsxfSBkaXJlY3Rpb249XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RheXMubWFwKCh7IGlkLCBuYW1lLCBzdHJfZGF0ZSwgc3R5bGUgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBrZXk9e2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uQmFzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXZlbnRMaXN0KGRheXNbaWRdLmV2ZW50cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREYXlEYXRlKHN0cl9kYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYXBlciBzdHlsZT17c3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25CYXNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gc209ezZ9IHNwYWNpbmc9ezF9IGRpcmVjdGlvbj1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlckV2ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj57ZGF5RGF0ZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudEV2ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gZGlyZWN0aW9uPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRpbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWN0aXZpdHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmVudWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2V2ZW50TGlzdCAmJiBldmVudExpc3QubGVuZ3RoICE9PSAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50TGlzdC5tYXAoZXZlbnQgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RXZlbnRDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2V2ZW50LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZVN0YXJ0PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdGFydC5kYXRlVGltZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZUVuZD17ZXZlbnQuZW5kLmRhdGVUaW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb249e2V2ZW50LmxvY2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vIEV2ZW50L3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7Y2RuX3VybH0vYWRzL2JhdHVjcy0yLnBuZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NjUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs0MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGN0eCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBldmVudHMgPSAoXHJcbiAgICAgICAgICAgIGF3YWl0IGdvb2dsZV9jYWxlbmRhci5ldmVudHMubGlzdCh7XHJcbiAgICAgICAgICAgICAgICBjYWxlbmRhcklkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0FMRU5EQVJfSUQsXHJcbiAgICAgICAgICAgICAgICBvcmRlckJ5OiBcInN0YXJ0VGltZVwiLFxyXG4gICAgICAgICAgICAgICAgc2luZ2xlRXZlbnRzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdGltZU1pbjogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgIG1heFJlc3VsdHM6IDIwLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICkuZGF0YS5pdGVtcztcclxuXHJcbiAgICAgICAgY29uc3Qgc3VuZGF5X2V2ZW50cyA9IGV2ZW50cy5maWx0ZXIoZXZlbnQgPT5cclxuICAgICAgICAgICAgaXNTYW1lRGF5KG5ldyBEYXRlKGV2ZW50LnN0YXJ0LmRhdGVUaW1lKSwgbmV3IERhdGUoMjAyMSwgMCwgMTcpKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgbW9uZGF5X2V2ZW50cyA9IGV2ZW50cy5maWx0ZXIoZXZlbnQgPT5cclxuICAgICAgICAgICAgaXNTYW1lRGF5KG5ldyBEYXRlKGV2ZW50LnN0YXJ0LmRhdGVUaW1lKSwgbmV3IERhdGUoMjAyMSwgMCwgMTgpKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgdHVlc2RheV9ldmVudHMgPSBldmVudHMuZmlsdGVyKGV2ZW50ID0+XHJcbiAgICAgICAgICAgIGlzU2FtZURheShuZXcgRGF0ZShldmVudC5zdGFydC5kYXRlVGltZSksIG5ldyBEYXRlKDIwMjEsIDAsIDE5KSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHdlZG5lc2RheV9ldmVudHMgPSBldmVudHMuZmlsdGVyKGV2ZW50ID0+XHJcbiAgICAgICAgICAgIGlzU2FtZURheShuZXcgRGF0ZShldmVudC5zdGFydC5kYXRlVGltZSksIG5ldyBEYXRlKDIwMjEsIDAsIDIwKSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHRodXJzZGF5X2V2ZW50cyA9IGV2ZW50cy5maWx0ZXIoZXZlbnQgPT5cclxuICAgICAgICAgICAgaXNTYW1lRGF5KG5ldyBEYXRlKGV2ZW50LnN0YXJ0LmRhdGVUaW1lKSwgbmV3IERhdGUoMjAyMSwgMCwgMjEpKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgZnJpZGF5X2V2ZW50cyA9IGV2ZW50cy5maWx0ZXIoZXZlbnQgPT5cclxuICAgICAgICAgICAgaXNTYW1lRGF5KG5ldyBEYXRlKGV2ZW50LnN0YXJ0LmRhdGVUaW1lKSwgbmV3IERhdGUoMjAyMSwgMCwgMjIpKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3Qgc2F0dXJkYXlfZXZlbnRzID0gZXZlbnRzLmZpbHRlcihldmVudCA9PlxyXG4gICAgICAgICAgICBpc1NhbWVEYXkobmV3IERhdGUoZXZlbnQuc3RhcnQuZGF0ZVRpbWUpLCBuZXcgRGF0ZSgyMDIxLCAwLCAyMykpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgIHN1bmRheV9ldmVudHMsXHJcbiAgICAgICAgICAgICAgICBtb25kYXlfZXZlbnRzLFxyXG4gICAgICAgICAgICAgICAgdHVlc2RheV9ldmVudHMsXHJcbiAgICAgICAgICAgICAgICB3ZWRuZXNkYXlfZXZlbnRzLFxyXG4gICAgICAgICAgICAgICAgdGh1cnNkYXlfZXZlbnRzLFxyXG4gICAgICAgICAgICAgICAgZnJpZGF5X2V2ZW50cyxcclxuICAgICAgICAgICAgICAgIHNhdHVyZGF5X2V2ZW50cyxcclxuICAgICAgICAgICAgICAgIGV2ZW50cyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmV2YWxpZGF0ZTogMTAsXHJcbiAgICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgIHN1bmRheV9ldmVudHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgbW9uZGF5X2V2ZW50czogW10sXHJcbiAgICAgICAgICAgICAgICB0dWVzZGF5X2V2ZW50czogW10sXHJcbiAgICAgICAgICAgICAgICB3ZWRuZXNkYXlfZXZlbnRzOiBbXSxcclxuICAgICAgICAgICAgICAgIHRodXJzZGF5X2V2ZW50czogW10sXHJcbiAgICAgICAgICAgICAgICBmcmlkYXlfZXZlbnRzOiBbXSxcclxuICAgICAgICAgICAgICAgIHNhdHVyZGF5X2V2ZW50czogW10sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJldmFsaWRhdGU6IDEwLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50cztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==