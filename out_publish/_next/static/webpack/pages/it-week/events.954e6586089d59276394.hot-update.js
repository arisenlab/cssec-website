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
/* harmony import */ var _components_events_event_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/events/event-card */ "./components/events/event-card.js");
/* harmony import */ var _components_general_space__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/general/space */ "./components/general/space.js");
/* harmony import */ var _data_days_data__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../data/days_data */ "./data/days_data.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_utils_constants__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");



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
  _data_days_data__WEBPACK_IMPORTED_MODULE_14__["default"][0]["events"] = sunday_events;
  _data_days_data__WEBPACK_IMPORTED_MODULE_14__["default"][1]["events"] = monday_events;
  _data_days_data__WEBPACK_IMPORTED_MODULE_14__["default"][2]["events"] = tuesday_events;
  _data_days_data__WEBPACK_IMPORTED_MODULE_14__["default"][3]["events"] = wednesday_events;
  _data_days_data__WEBPACK_IMPORTED_MODULE_14__["default"][4]["events"] = thursday_events;
  _data_days_data__WEBPACK_IMPORTED_MODULE_14__["default"][5]["events"] = friday_events;
  _data_days_data__WEBPACK_IMPORTED_MODULE_14__["default"][6]["events"] = saturday_events;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(_data_days_data__WEBPACK_IMPORTED_MODULE_14__["default"][0].events),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      eventList = _React$useState2[0],
      setEventList = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(_data_days_data__WEBPACK_IMPORTED_MODULE_14__["default"][0].str_date),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      dayDate = _React$useState4[0],
      setDayDate = _React$useState4[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_general_space__WEBPACK_IMPORTED_MODULE_13__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_6__["default"], {
      disableRipple: true,
      className: classes.arrowIcon,
      onClick: function onClick() {
        return router.push("/it-week");
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_11___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
        variant: "h6",
        children: "Back"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 35
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_general_space__WEBPACK_IMPORTED_MODULE_13__["default"], {
      height: 10
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
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
            lineNumber: 93,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
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
          children: _data_days_data__WEBPACK_IMPORTED_MODULE_14__["default"].map(function (_ref2) {
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
                  setEventList(_data_days_data__WEBPACK_IMPORTED_MODULE_14__["default"][id].events);
                  setDayDate(str_date);
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  style: style,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    variant: "h6",
                    children: name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 110,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 109,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 33
              }, _this)
            }, id, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 29
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
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
                lineNumber: 121,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
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
                      lineNumber: 129,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 128,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
                    item: true,
                    xs: 4,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
                      variant: "h6",
                      children: "Activity"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 134,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 133,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
                    item: true,
                    xs: 4,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
                      variant: "h6",
                      children: "Venue"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 139,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 138,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 127,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  item: true,
                  xs: 12,
                  children: eventList && eventList.length !== 0 ? eventList.map(function (event) {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_events_event_card__WEBPACK_IMPORTED_MODULE_12__["default"], {
                      summary: event.summary,
                      timeStart: event.start.dateTime,
                      timeEnd: event.end.dateTime,
                      location: event.location,
                      description: event.description
                    }, event.id, false, {
                      fileName: _jsxFileName,
                      lineNumber: 147,
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
                      lineNumber: 162,
                      columnNumber: 49
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 161,
                    columnNumber: 45
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
          item: true,
          md: 3,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
            src: "".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_15__["cdn_url"], "/ads/batucs-2.png"),
            width: 650,
            height: 400
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 80,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaXQtd2Vlay9ldmVudHMuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIndpZHRoIiwibWFyZ2luIiwiYXJyb3dJY29uIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJwYXBlciIsInBhZGRpbmciLCJhZFNwYWNlIiwibWFyZ2luVG9wIiwiaGVhZGVyRXZlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImNvbnRlbnRFdmVudCIsInRleHQiLCJ3b3JkV3JhcCIsIkV2ZW50cyIsInN1bmRheV9ldmVudHMiLCJtb25kYXlfZXZlbnRzIiwidHVlc2RheV9ldmVudHMiLCJ3ZWRuZXNkYXlfZXZlbnRzIiwidGh1cnNkYXlfZXZlbnRzIiwiZnJpZGF5X2V2ZW50cyIsInNhdHVyZGF5X2V2ZW50cyIsImV2ZW50cyIsImNsYXNzZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkYXlzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImV2ZW50TGlzdCIsInNldEV2ZW50TGlzdCIsInN0cl9kYXRlIiwiZGF5RGF0ZSIsInNldERheURhdGUiLCJwdXNoIiwibWFwIiwiaWQiLCJuYW1lIiwic3R5bGUiLCJsZW5ndGgiLCJldmVudCIsInN1bW1hcnkiLCJzdGFydCIsImRhdGVUaW1lIiwiZW5kIiwibG9jYXRpb24iLCJkZXNjcmlwdGlvbiIsImNkbl91cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsU0FBSztBQUNuQ0MsUUFBSSxFQUFFO0FBQ0ZDLFdBQUssRUFBRSxLQURMO0FBRUZDLFlBQU0sRUFBRTtBQUZO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O0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRGU7QUFBQSxtQkFBbkIsQ0FESCxnQkFnQkcscUVBQUMsOERBQUQ7QUFBTSx3QkFBSSxNQUFWO0FBQVcseUJBQUssRUFBQyxRQUFqQjtBQUFBLDJDQUNJLHFFQUFDLG9FQUFEO0FBQVksNkJBQU8sRUFBQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFqQlI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFsQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXBCSixlQTBFSSxxRUFBQyw4REFBRDtBQUFNLGNBQUksTUFBVjtBQUFXLFlBQUUsRUFBRSxDQUFmO0FBQUEsaUNBQ0kscUVBQUMsaURBQUQ7QUFDSSxlQUFHLFlBQUtXLHlEQUFMLHNCQURQO0FBRUksaUJBQUssRUFBRSxHQUZYO0FBR0ksa0JBQU0sRUFBRTtBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTFFSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXdHSCxDQWhJRDs7R0FBTWpDLE07VUFVY25CLFMsRUFDRDhCLHFEOzs7S0FYYlgsTTs7QUFrTVNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2l0LXdlZWsvZXZlbnRzLjk1NGU2NTg2MDg5ZDU5Mjc2Mzk0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IEJ1dHRvbkJhc2UgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkJhc2VcIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiO1xyXG5cclxuaW1wb3J0IEFycm93QmFja0ljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd0JhY2tcIjtcclxuXHJcbmltcG9ydCBFdmVudENhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZXZlbnRzL2V2ZW50LWNhcmRcIjtcclxuaW1wb3J0IFNwYWNlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dlbmVyYWwvc3BhY2VcIjtcclxuXHJcbmltcG9ydCBkYXlzIGZyb20gXCIuLi8uLi9kYXRhL2RheXNfZGF0YVwiO1xyXG5cclxuaW1wb3J0IGdvb2dsZV9jYWxlbmRhciBmcm9tIFwiLi4vLi4vdXRpbHMvZ29vZ2xlXCI7XHJcblxyXG5pbXBvcnQgeyBjZG5fdXJsIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xyXG5cclxuaW1wb3J0IHsgZm9ybWF0LCBpc1NhbWVEYXkgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICB3aWR0aDogXCI5NSVcIixcclxuICAgICAgICBtYXJnaW46IFwiYXV0b1wiLFxyXG4gICAgfSxcclxuICAgIGFycm93SWNvbjoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICB9LFxyXG4gICAgcGFwZXI6IHtcclxuICAgICAgICBwYWRkaW5nOiAxMCxcclxuICAgIH0sXHJcbiAgICBhZFNwYWNlOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wOiAxMCxcclxuICAgIH0sXHJcbiAgICBoZWFkZXJFdmVudDoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNjIyQTU1XCIsXHJcbiAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnRFdmVudDoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDE4NiwgMTMxLCAxODAsIDAuMjkpXCIsXHJcbiAgICAgICAgcGFkZGluZzogMjAsXHJcbiAgICB9LFxyXG4gICAgdGV4dDoge1xyXG4gICAgICAgIHdvcmRXcmFwOiBcImJyZWFrLXdvcmRcIixcclxuICAgIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEV2ZW50cyA9ICh7XHJcbiAgICBzdW5kYXlfZXZlbnRzLFxyXG4gICAgbW9uZGF5X2V2ZW50cyxcclxuICAgIHR1ZXNkYXlfZXZlbnRzLFxyXG4gICAgd2VkbmVzZGF5X2V2ZW50cyxcclxuICAgIHRodXJzZGF5X2V2ZW50cyxcclxuICAgIGZyaWRheV9ldmVudHMsXHJcbiAgICBzYXR1cmRheV9ldmVudHMsXHJcbiAgICBldmVudHMsXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGRheXNbMF1bXCJldmVudHNcIl0gPSBzdW5kYXlfZXZlbnRzO1xyXG4gICAgZGF5c1sxXVtcImV2ZW50c1wiXSA9IG1vbmRheV9ldmVudHM7XHJcbiAgICBkYXlzWzJdW1wiZXZlbnRzXCJdID0gdHVlc2RheV9ldmVudHM7XHJcbiAgICBkYXlzWzNdW1wiZXZlbnRzXCJdID0gd2VkbmVzZGF5X2V2ZW50cztcclxuICAgIGRheXNbNF1bXCJldmVudHNcIl0gPSB0aHVyc2RheV9ldmVudHM7XHJcbiAgICBkYXlzWzVdW1wiZXZlbnRzXCJdID0gZnJpZGF5X2V2ZW50cztcclxuICAgIGRheXNbNl1bXCJldmVudHNcIl0gPSBzYXR1cmRheV9ldmVudHM7XHJcblxyXG4gICAgY29uc3QgW2V2ZW50TGlzdCwgc2V0RXZlbnRMaXN0XSA9IFJlYWN0LnVzZVN0YXRlKGRheXNbMF0uZXZlbnRzKTtcclxuICAgIGNvbnN0IFtkYXlEYXRlLCBzZXREYXlEYXRlXSA9IFJlYWN0LnVzZVN0YXRlKGRheXNbMF0uc3RyX2RhdGUpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgIDxTcGFjZSAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uQmFzZVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZVJpcHBsZVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmFycm93SWNvbn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL2l0LXdlZWtcIil9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxBcnJvd0JhY2tJY29uIC8+IDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPkJhY2s8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uQmFzZT5cclxuICAgICAgICAgICAgPFNwYWNlIGhlaWdodD17MTB9IC8+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBkaXJlY3Rpb249XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIHN0eWxlPXt7IGNvbG9yOiBcIiM1RDIyNTJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm9ybWF0aW9uIFRlY2hub2xvZ3kgV2VlayAtIEV2ZW50c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHNwYWNpbmc9ezN9IHN0eWxlPXt7IHBhZGRpbmc6IDIwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHNtPXszfSBzcGFjaW5nPXsxfSBkaXJlY3Rpb249XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RheXMubWFwKCh7IGlkLCBuYW1lLCBzdHJfZGF0ZSwgc3R5bGUgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBrZXk9e2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uQmFzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXZlbnRMaXN0KGRheXNbaWRdLmV2ZW50cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREYXlEYXRlKHN0cl9kYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYXBlciBzdHlsZT17c3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25CYXNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gc209ezZ9IHNwYWNpbmc9ezF9IGRpcmVjdGlvbj1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlckV2ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj57ZGF5RGF0ZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudEV2ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gZGlyZWN0aW9uPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRpbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWN0aXZpdHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmVudWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2V2ZW50TGlzdCAmJiBldmVudExpc3QubGVuZ3RoICE9PSAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50TGlzdC5tYXAoZXZlbnQgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RXZlbnRDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2V2ZW50LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VtbWFyeT17ZXZlbnQuc3VtbWFyeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVTdGFydD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RhcnQuZGF0ZVRpbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVFbmQ9e2V2ZW50LmVuZC5kYXRlVGltZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uPXtldmVudC5sb2NhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5kZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBObyBFdmVudC9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake2Nkbl91cmx9L2Fkcy9iYXR1Y3MtMi5wbmdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezY1MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NDAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjdHgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZXZlbnRzID0gKFxyXG4gICAgICAgICAgICBhd2FpdCBnb29nbGVfY2FsZW5kYXIuZXZlbnRzLmxpc3Qoe1xyXG4gICAgICAgICAgICAgICAgY2FsZW5kYXJJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NBTEVOREFSX0lELFxyXG4gICAgICAgICAgICAgICAgb3JkZXJCeTogXCJzdGFydFRpbWVcIixcclxuICAgICAgICAgICAgICAgIHNpbmdsZUV2ZW50czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHRpbWVNaW46IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICBtYXhSZXN1bHRzOiAyMCxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApLmRhdGEuaXRlbXM7XHJcblxyXG4gICAgICAgIGNvbnN0IHN1bmRheV9ldmVudHMgPSBldmVudHMuZmlsdGVyKGV2ZW50ID0+XHJcbiAgICAgICAgICAgIGlzU2FtZURheShuZXcgRGF0ZShldmVudC5zdGFydC5kYXRlVGltZSksIG5ldyBEYXRlKDIwMjEsIDAsIDE3KSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IG1vbmRheV9ldmVudHMgPSBldmVudHMuZmlsdGVyKGV2ZW50ID0+XHJcbiAgICAgICAgICAgIGlzU2FtZURheShuZXcgRGF0ZShldmVudC5zdGFydC5kYXRlVGltZSksIG5ldyBEYXRlKDIwMjEsIDAsIDE4KSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHR1ZXNkYXlfZXZlbnRzID0gZXZlbnRzLmZpbHRlcihldmVudCA9PlxyXG4gICAgICAgICAgICBpc1NhbWVEYXkobmV3IERhdGUoZXZlbnQuc3RhcnQuZGF0ZVRpbWUpLCBuZXcgRGF0ZSgyMDIxLCAwLCAxOSkpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCB3ZWRuZXNkYXlfZXZlbnRzID0gZXZlbnRzLmZpbHRlcihldmVudCA9PlxyXG4gICAgICAgICAgICBpc1NhbWVEYXkobmV3IERhdGUoZXZlbnQuc3RhcnQuZGF0ZVRpbWUpLCBuZXcgRGF0ZSgyMDIxLCAwLCAyMCkpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCB0aHVyc2RheV9ldmVudHMgPSBldmVudHMuZmlsdGVyKGV2ZW50ID0+XHJcbiAgICAgICAgICAgIGlzU2FtZURheShuZXcgRGF0ZShldmVudC5zdGFydC5kYXRlVGltZSksIG5ldyBEYXRlKDIwMjEsIDAsIDIxKSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGZyaWRheV9ldmVudHMgPSBldmVudHMuZmlsdGVyKGV2ZW50ID0+XHJcbiAgICAgICAgICAgIGlzU2FtZURheShuZXcgRGF0ZShldmVudC5zdGFydC5kYXRlVGltZSksIG5ldyBEYXRlKDIwMjEsIDAsIDIyKSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHNhdHVyZGF5X2V2ZW50cyA9IGV2ZW50cy5maWx0ZXIoZXZlbnQgPT5cclxuICAgICAgICAgICAgaXNTYW1lRGF5KG5ldyBEYXRlKGV2ZW50LnN0YXJ0LmRhdGVUaW1lKSwgbmV3IERhdGUoMjAyMSwgMCwgMjMpKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICBzdW5kYXlfZXZlbnRzLFxyXG4gICAgICAgICAgICAgICAgbW9uZGF5X2V2ZW50cyxcclxuICAgICAgICAgICAgICAgIHR1ZXNkYXlfZXZlbnRzLFxyXG4gICAgICAgICAgICAgICAgd2VkbmVzZGF5X2V2ZW50cyxcclxuICAgICAgICAgICAgICAgIHRodXJzZGF5X2V2ZW50cyxcclxuICAgICAgICAgICAgICAgIGZyaWRheV9ldmVudHMsXHJcbiAgICAgICAgICAgICAgICBzYXR1cmRheV9ldmVudHMsXHJcbiAgICAgICAgICAgICAgICBldmVudHMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJldmFsaWRhdGU6IDEwLFxyXG4gICAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICBzdW5kYXlfZXZlbnRzOiBbXSxcclxuICAgICAgICAgICAgICAgIG1vbmRheV9ldmVudHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgdHVlc2RheV9ldmVudHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgd2VkbmVzZGF5X2V2ZW50czogW10sXHJcbiAgICAgICAgICAgICAgICB0aHVyc2RheV9ldmVudHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgZnJpZGF5X2V2ZW50czogW10sXHJcbiAgICAgICAgICAgICAgICBzYXR1cmRheV9ldmVudHM6IFtdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZXZhbGlkYXRlOiAxMCxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFdmVudHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=