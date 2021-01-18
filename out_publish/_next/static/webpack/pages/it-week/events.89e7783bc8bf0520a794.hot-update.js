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
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/ArrowBack */ "./node_modules/@material-ui/icons/ArrowBack.js");
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_general_space__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/general/space */ "./components/general/space.js");
/* harmony import */ var _data_days_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../data/days_data */ "./data/days_data.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_utils_constants__WEBPACK_IMPORTED_MODULE_14__);



var _jsxFileName = "D:\\ADDUCS\\CSSEC\\cssec-website\\pages\\it-week\\events.js",
    _this = undefined,
    _s = $RefreshSig$();











var EventCard = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ../../components/events/event-card */ "./components/events/event-card.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../components/events/event-card */ "./components/events/event-card.js")];
    },
    modules: ["../../components/events/event-card"]
  }
});
_c2 = EventCard;



var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
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
    headerEvent: {
      backgroundColor: "#622A55",
      color: "#fff"
    },
    contentEvent: {
      backgroundColor: "rgba(186, 131, 180, 0.29)",
      padding: 20
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
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
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
      lineNumber: 76,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_7__["default"], {
      disableRipple: true,
      className: classes.arrowIcon,
      onClick: function onClick() {
        return router.push("/it-week");
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_11___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
        variant: "h6",
        children: "Back"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 35
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_general_space__WEBPACK_IMPORTED_MODULE_12__["default"], {
      height: 10
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
      container: true,
      spacing: 2,
      direction: "column",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
        item: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__["default"], {
          className: classes.paper,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
            variant: "h4",
            style: {
              color: "#5D2252"
            },
            children: "Information Technology Week - Events"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
        container: true,
        item: true,
        spacing: 3,
        style: {
          padding: 20
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
              item: true,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_7__["default"], {
                style: {
                  width: "100%"
                },
                onClick: function onClick() {
                  setEventList(_data_days_data__WEBPACK_IMPORTED_MODULE_13__["default"][id].events);
                  setDayDate(str_date);
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  style: style,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    variant: "h6",
                    children: name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 105,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 33
              }, _this)
            }, id, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 29
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
          container: true,
          item: true,
          sm: 6,
          spacing: 1,
          direction: "column",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
            item: true,
            align: "center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__["default"], {
              className: classes.headerEvent,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
                variant: "h6",
                children: dayDate
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
            item: true,
            align: "center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__["default"], {
              className: classes.contentEvent,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
                container: true,
                spacing: 2,
                direction: "column",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  item: true,
                  xs: 12,
                  children: eventList && eventList.length !== 0 ? eventList.map(function (event) {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(EventCard, {
                      summary: event.summary,
                      timeStart: event.start.dateTime,
                      timeEnd: event.end.dateTime,
                      location: event.location,
                      description: event.description
                    }, event.id, false, {
                      fileName: _jsxFileName,
                      lineNumber: 125,
                      columnNumber: 49
                    }, _this);
                  }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
                    item: true,
                    align: "center",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
                      variant: "h6",
                      children: "No Event/s"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 140,
                      columnNumber: 49
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 139,
                    columnNumber: 45
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 122,
                  columnNumber: 37
                }, _this)
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
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
          item: true,
          md: 3,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
            src: "".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_14__["cdn_url"], "/ads/batucs-2.png"),
            width: 650,
            height: 400
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 9
  }, _this);
};

_s(Events, "FidnIIqEFRfw974ssoHSNpMvN/8=", false, function () {
  return [useStyles, next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c3 = Events;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Events);

var _c, _c2, _c3;

$RefreshReg$(_c, "EventCard$dynamic");
$RefreshReg$(_c2, "EventCard");
$RefreshReg$(_c3, "Events");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaXQtd2Vlay9ldmVudHMuanMiXSwibmFtZXMiOlsiRXZlbnRDYXJkIiwiZHluYW1pYyIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJ3aWR0aCIsIm1hcmdpbiIsImFycm93SWNvbiIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwicGFwZXIiLCJwYWRkaW5nIiwiaGVhZGVyRXZlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImNvbnRlbnRFdmVudCIsIkV2ZW50cyIsInN1bmRheV9ldmVudHMiLCJtb25kYXlfZXZlbnRzIiwidHVlc2RheV9ldmVudHMiLCJ3ZWRuZXNkYXlfZXZlbnRzIiwidGh1cnNkYXlfZXZlbnRzIiwiZnJpZGF5X2V2ZW50cyIsInNhdHVyZGF5X2V2ZW50cyIsImV2ZW50cyIsImNsYXNzZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkYXlzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImV2ZW50TGlzdCIsInNldEV2ZW50TGlzdCIsInN0cl9kYXRlIiwiZGF5RGF0ZSIsInNldERheURhdGUiLCJwdXNoIiwibWFwIiwiaWQiLCJuYW1lIiwic3R5bGUiLCJsZW5ndGgiLCJldmVudCIsInN1bW1hcnkiLCJzdGFydCIsImRhdGVUaW1lIiwiZW5kIiwibG9jYXRpb24iLCJkZXNjcmlwdGlvbiIsImNkbl91cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG1EQUFPLE1BQUM7QUFBQSxTQUFNLDZKQUFOO0FBQUEsQ0FBRDtBQUFBO0FBQUE7QUFBQSxrQ0FBYyw2RUFBZDtBQUFBO0FBQUEsY0FBYyxvQ0FBZDtBQUFBO0FBQUEsRUFBekI7TUFBTUQsUztBQUVOO0FBRUE7QUFJQTtBQUlBLElBQU1FLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsU0FBSztBQUNuQ0MsUUFBSSxFQUFFO0FBQ0ZDLFdBQUssRUFBRSxLQURMO0FBRUZDLFlBQU0sRUFBRTtBQUZOLEtBRDZCO0FBS25DQyxhQUFTLEVBQUU7QUFDUEMsYUFBTyxFQUFFLE1BREY7QUFFUEMsZ0JBQVUsRUFBRTtBQUZMLEtBTHdCO0FBU25DQyxTQUFLLEVBQUU7QUFDSEMsYUFBTyxFQUFFO0FBRE4sS0FUNEI7QUFZbkNDLGVBQVcsRUFBRTtBQUNUQyxxQkFBZSxFQUFFLFNBRFI7QUFFVEMsV0FBSyxFQUFFO0FBRkUsS0Fac0I7QUFnQm5DQyxnQkFBWSxFQUFFO0FBQ1ZGLHFCQUFlLEVBQUUsMkJBRFA7QUFFVkYsYUFBTyxFQUFFO0FBRkM7QUFoQnFCLEdBQUw7QUFBQSxDQUFOLENBQTVCOztBQXNCQSxJQUFNSyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQVNUO0FBQUE7O0FBQUEsTUFSRkMsYUFRRSxRQVJGQSxhQVFFO0FBQUEsTUFQRkMsYUFPRSxRQVBGQSxhQU9FO0FBQUEsTUFORkMsY0FNRSxRQU5GQSxjQU1FO0FBQUEsTUFMRkMsZ0JBS0UsUUFMRkEsZ0JBS0U7QUFBQSxNQUpGQyxlQUlFLFFBSkZBLGVBSUU7QUFBQSxNQUhGQyxhQUdFLFFBSEZBLGFBR0U7QUFBQSxNQUZGQyxlQUVFLFFBRkZBLGVBRUU7QUFBQSxNQURGQyxNQUNFLFFBREZBLE1BQ0U7QUFDRixNQUFNQyxPQUFPLEdBQUd4QixTQUFTLEVBQXpCO0FBQ0EsTUFBTXlCLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQUMsMERBQUksQ0FBQyxDQUFELENBQUosQ0FBUSxRQUFSLElBQW9CWCxhQUFwQjtBQUNBVywwREFBSSxDQUFDLENBQUQsQ0FBSixDQUFRLFFBQVIsSUFBb0JWLGFBQXBCO0FBQ0FVLDBEQUFJLENBQUMsQ0FBRCxDQUFKLENBQVEsUUFBUixJQUFvQlQsY0FBcEI7QUFDQVMsMERBQUksQ0FBQyxDQUFELENBQUosQ0FBUSxRQUFSLElBQW9CUixnQkFBcEI7QUFDQVEsMERBQUksQ0FBQyxDQUFELENBQUosQ0FBUSxRQUFSLElBQW9CUCxlQUFwQjtBQUNBTywwREFBSSxDQUFDLENBQUQsQ0FBSixDQUFRLFFBQVIsSUFBb0JOLGFBQXBCO0FBQ0FNLDBEQUFJLENBQUMsQ0FBRCxDQUFKLENBQVEsUUFBUixJQUFvQkwsZUFBcEI7O0FBVkUsd0JBWWdDTSw0Q0FBSyxDQUFDQyxRQUFOLENBQWVGLHdEQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFKLE1BQXZCLENBWmhDO0FBQUE7QUFBQSxNQVlLTyxTQVpMO0FBQUEsTUFZZ0JDLFlBWmhCOztBQUFBLHlCQWE0QkgsNENBQUssQ0FBQ0MsUUFBTixDQUFlRix3REFBSSxDQUFDLENBQUQsQ0FBSixDQUFRSyxRQUF2QixDQWI1QjtBQUFBO0FBQUEsTUFhS0MsT0FiTDtBQUFBLE1BYWNDLFVBYmQ7O0FBZUYsc0JBQ0k7QUFBSyxhQUFTLEVBQUVWLE9BQU8sQ0FBQ3JCLElBQXhCO0FBQUEsNEJBQ0kscUVBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUkscUVBQUMsb0VBQUQ7QUFDSSxtQkFBYSxNQURqQjtBQUVJLGVBQVMsRUFBRXFCLE9BQU8sQ0FBQ2xCLFNBRnZCO0FBR0ksYUFBTyxFQUFFO0FBQUEsZUFBTW1CLE1BQU0sQ0FBQ1UsSUFBUCxDQUFZLFVBQVosQ0FBTjtBQUFBLE9BSGI7QUFBQSw4QkFLSSxxRUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEosb0JBS3NCLHFFQUFDLG9FQUFEO0FBQVksZUFBTyxFQUFDLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTHRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBU0kscUVBQUMsa0VBQUQ7QUFBTyxZQUFNLEVBQUU7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEosZUFVSSxxRUFBQywrREFBRDtBQUFNLGVBQVMsTUFBZjtBQUFnQixhQUFPLEVBQUUsQ0FBekI7QUFBNEIsZUFBUyxFQUFDLFFBQXRDO0FBQUEsOEJBQ0kscUVBQUMsK0RBQUQ7QUFBTSxZQUFJLE1BQVY7QUFBQSwrQkFDSSxxRUFBQywrREFBRDtBQUFPLG1CQUFTLEVBQUVYLE9BQU8sQ0FBQ2YsS0FBMUI7QUFBQSxpQ0FDSSxxRUFBQyxvRUFBRDtBQUFZLG1CQUFPLEVBQUMsSUFBcEI7QUFBeUIsaUJBQUssRUFBRTtBQUFFSSxtQkFBSyxFQUFFO0FBQVQsYUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBUUkscUVBQUMsK0RBQUQ7QUFBTSxpQkFBUyxNQUFmO0FBQWdCLFlBQUksTUFBcEI7QUFBcUIsZUFBTyxFQUFFLENBQTlCO0FBQWlDLGFBQUssRUFBRTtBQUFFSCxpQkFBTyxFQUFFO0FBQVgsU0FBeEM7QUFBQSxnQ0FDSSxxRUFBQywrREFBRDtBQUFNLG1CQUFTLE1BQWY7QUFBZ0IsY0FBSSxNQUFwQjtBQUFxQixZQUFFLEVBQUUsQ0FBekI7QUFBNEIsaUJBQU8sRUFBRSxDQUFyQztBQUF3QyxtQkFBUyxFQUFDLFFBQWxEO0FBQUEsb0JBQ0tpQix3REFBSSxDQUFDUyxHQUFMLENBQVM7QUFBQSxnQkFBR0MsRUFBSCxTQUFHQSxFQUFIO0FBQUEsZ0JBQU9DLElBQVAsU0FBT0EsSUFBUDtBQUFBLGdCQUFhTixRQUFiLFNBQWFBLFFBQWI7QUFBQSxnQkFBdUJPLEtBQXZCLFNBQXVCQSxLQUF2QjtBQUFBLGdDQUNOLHFFQUFDLCtEQUFEO0FBQU0sa0JBQUksTUFBVjtBQUFBLHFDQUNJLHFFQUFDLG9FQUFEO0FBQ0kscUJBQUssRUFBRTtBQUFFbkMsdUJBQUssRUFBRTtBQUFULGlCQURYO0FBRUksdUJBQU8sRUFBRSxtQkFBTTtBQUNYMkIsOEJBQVksQ0FBQ0osd0RBQUksQ0FBQ1UsRUFBRCxDQUFKLENBQVNkLE1BQVYsQ0FBWjtBQUNBVyw0QkFBVSxDQUFDRixRQUFELENBQVY7QUFDSCxpQkFMTDtBQUFBLHVDQU9JLHFFQUFDLCtEQUFEO0FBQU8sdUJBQUssRUFBRU8sS0FBZDtBQUFBLHlDQUNJLHFFQUFDLG9FQUFEO0FBQVksMkJBQU8sRUFBQyxJQUFwQjtBQUFBLDhCQUNLRDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLGVBQWdCRCxFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURNO0FBQUEsV0FBVDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFvQkkscUVBQUMsK0RBQUQ7QUFBTSxtQkFBUyxNQUFmO0FBQWdCLGNBQUksTUFBcEI7QUFBcUIsWUFBRSxFQUFFLENBQXpCO0FBQTRCLGlCQUFPLEVBQUUsQ0FBckM7QUFBd0MsbUJBQVMsRUFBQyxRQUFsRDtBQUFBLGtDQUNJLHFFQUFDLCtEQUFEO0FBQU0sZ0JBQUksTUFBVjtBQUFXLGlCQUFLLEVBQUMsUUFBakI7QUFBQSxtQ0FDSSxxRUFBQywrREFBRDtBQUFPLHVCQUFTLEVBQUViLE9BQU8sQ0FBQ2IsV0FBMUI7QUFBQSxxQ0FDSSxxRUFBQyxvRUFBRDtBQUFZLHVCQUFPLEVBQUMsSUFBcEI7QUFBQSwwQkFBMEJzQjtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFNSSxxRUFBQywrREFBRDtBQUFNLGdCQUFJLE1BQVY7QUFBVyxpQkFBSyxFQUFDLFFBQWpCO0FBQUEsbUNBQ0kscUVBQUMsK0RBQUQ7QUFBTyx1QkFBUyxFQUFFVCxPQUFPLENBQUNWLFlBQTFCO0FBQUEscUNBQ0kscUVBQUMsK0RBQUQ7QUFBTSx5QkFBUyxNQUFmO0FBQWdCLHVCQUFPLEVBQUUsQ0FBekI7QUFBNEIseUJBQVMsRUFBQyxRQUF0QztBQUFBLHVDQUNJLHFFQUFDLCtEQUFEO0FBQU0sc0JBQUksTUFBVjtBQUFXLG9CQUFFLEVBQUUsRUFBZjtBQUFBLDRCQUNLZ0IsU0FBUyxJQUFJQSxTQUFTLENBQUNVLE1BQVYsS0FBcUIsQ0FBbEMsR0FDR1YsU0FBUyxDQUFDTSxHQUFWLENBQWMsVUFBQUssS0FBSztBQUFBLHdDQUNmLHFFQUFDLFNBQUQ7QUFFSSw2QkFBTyxFQUFFQSxLQUFLLENBQUNDLE9BRm5CO0FBR0ksK0JBQVMsRUFDTEQsS0FBSyxDQUFDRSxLQUFOLENBQVlDLFFBSnBCO0FBTUksNkJBQU8sRUFBRUgsS0FBSyxDQUFDSSxHQUFOLENBQVVELFFBTnZCO0FBT0ksOEJBQVEsRUFBRUgsS0FBSyxDQUFDSyxRQVBwQjtBQVFJLGlDQUFXLEVBQ1BMLEtBQUssQ0FBQ007QUFUZCx1QkFDU04sS0FBSyxDQUFDSixFQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRGU7QUFBQSxtQkFBbkIsQ0FESCxnQkFnQkcscUVBQUMsK0RBQUQ7QUFBTSx3QkFBSSxNQUFWO0FBQVcseUJBQUssRUFBQyxRQUFqQjtBQUFBLDJDQUNJLHFFQUFDLG9FQUFEO0FBQVksNkJBQU8sRUFBQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFqQlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcEJKLGVBeURJLHFFQUFDLCtEQUFEO0FBQU0sY0FBSSxNQUFWO0FBQVcsWUFBRSxFQUFFLENBQWY7QUFBQSxpQ0FDSSxxRUFBQyxpREFBRDtBQUNJLGVBQUcsWUFBS1cseURBQUwsc0JBRFA7QUFFSSxpQkFBSyxFQUFFLEdBRlg7QUFHSSxrQkFBTSxFQUFFO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBekRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBdUZILENBL0dEOztHQUFNakMsTTtVQVVjZixTLEVBQ0QwQixxRDs7O01BWGJYLE07O0FBaUxTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pdC13ZWVrL2V2ZW50cy44OWU3NzgzYmM4YmYwNTIwYTc5NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IEJ1dHRvbkJhc2UgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkJhc2VcIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xyXG5cclxuaW1wb3J0IEFycm93QmFja0ljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd0JhY2tcIjtcclxuXHJcbmNvbnN0IEV2ZW50Q2FyZCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vLi4vY29tcG9uZW50cy9ldmVudHMvZXZlbnQtY2FyZFwiKSk7XHJcblxyXG5pbXBvcnQgU3BhY2UgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ2VuZXJhbC9zcGFjZVwiO1xyXG5cclxuaW1wb3J0IGRheXMgZnJvbSBcIi4uLy4uL2RhdGEvZGF5c19kYXRhXCI7XHJcblxyXG5pbXBvcnQgZ29vZ2xlX2NhbGVuZGFyIGZyb20gXCIuLi8uLi91dGlscy9nb29nbGVcIjtcclxuXHJcbmltcG9ydCB7IGNkbl91cmwgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XHJcblxyXG5pbXBvcnQgeyBpc1NhbWVEYXkgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICB3aWR0aDogXCI5NSVcIixcclxuICAgICAgICBtYXJnaW46IFwiYXV0b1wiLFxyXG4gICAgfSxcclxuICAgIGFycm93SWNvbjoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICB9LFxyXG4gICAgcGFwZXI6IHtcclxuICAgICAgICBwYWRkaW5nOiAxMCxcclxuICAgIH0sXHJcbiAgICBoZWFkZXJFdmVudDoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNjIyQTU1XCIsXHJcbiAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnRFdmVudDoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDE4NiwgMTMxLCAxODAsIDAuMjkpXCIsXHJcbiAgICAgICAgcGFkZGluZzogMjAsXHJcbiAgICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBFdmVudHMgPSAoe1xyXG4gICAgc3VuZGF5X2V2ZW50cyxcclxuICAgIG1vbmRheV9ldmVudHMsXHJcbiAgICB0dWVzZGF5X2V2ZW50cyxcclxuICAgIHdlZG5lc2RheV9ldmVudHMsXHJcbiAgICB0aHVyc2RheV9ldmVudHMsXHJcbiAgICBmcmlkYXlfZXZlbnRzLFxyXG4gICAgc2F0dXJkYXlfZXZlbnRzLFxyXG4gICAgZXZlbnRzLFxyXG59KSA9PiB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBkYXlzWzBdW1wiZXZlbnRzXCJdID0gc3VuZGF5X2V2ZW50cztcclxuICAgIGRheXNbMV1bXCJldmVudHNcIl0gPSBtb25kYXlfZXZlbnRzO1xyXG4gICAgZGF5c1syXVtcImV2ZW50c1wiXSA9IHR1ZXNkYXlfZXZlbnRzO1xyXG4gICAgZGF5c1szXVtcImV2ZW50c1wiXSA9IHdlZG5lc2RheV9ldmVudHM7XHJcbiAgICBkYXlzWzRdW1wiZXZlbnRzXCJdID0gdGh1cnNkYXlfZXZlbnRzO1xyXG4gICAgZGF5c1s1XVtcImV2ZW50c1wiXSA9IGZyaWRheV9ldmVudHM7XHJcbiAgICBkYXlzWzZdW1wiZXZlbnRzXCJdID0gc2F0dXJkYXlfZXZlbnRzO1xyXG5cclxuICAgIGNvbnN0IFtldmVudExpc3QsIHNldEV2ZW50TGlzdF0gPSBSZWFjdC51c2VTdGF0ZShkYXlzWzBdLmV2ZW50cyk7XHJcbiAgICBjb25zdCBbZGF5RGF0ZSwgc2V0RGF5RGF0ZV0gPSBSZWFjdC51c2VTdGF0ZShkYXlzWzBdLnN0cl9kYXRlKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICA8U3BhY2UgLz5cclxuICAgICAgICAgICAgPEJ1dHRvbkJhc2VcclxuICAgICAgICAgICAgICAgIGRpc2FibGVSaXBwbGVcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5hcnJvd0ljb259XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9pdC13ZWVrXCIpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8QXJyb3dCYWNrSWNvbiAvPiA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5CYWNrPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0J1dHRvbkJhc2U+XHJcbiAgICAgICAgICAgIDxTcGFjZSBoZWlnaHQ9ezEwfSAvPlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gZGlyZWN0aW9uPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBzdHlsZT17eyBjb2xvcjogXCIjNUQyMjUyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvcm1hdGlvbiBUZWNobm9sb2d5IFdlZWsgLSBFdmVudHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSBzcGFjaW5nPXszfSBzdHlsZT17eyBwYWRkaW5nOiAyMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSBzbT17M30gc3BhY2luZz17MX0gZGlyZWN0aW9uPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXlzLm1hcCgoeyBpZCwgbmFtZSwgc3RyX2RhdGUsIHN0eWxlIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0ga2V5PXtpZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkJhc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEV2ZW50TGlzdChkYXlzW2lkXS5ldmVudHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGF5RGF0ZShzdHJfZGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFwZXIgc3R5bGU9e3N0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uQmFzZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHNtPXs2fSBzcGFjaW5nPXsxfSBkaXJlY3Rpb249XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJFdmVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+e2RheURhdGV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnRFdmVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IGRpcmVjdGlvbj1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXZlbnRMaXN0ICYmIGV2ZW50TGlzdC5sZW5ndGggIT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRMaXN0Lm1hcChldmVudCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFdmVudENhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZXZlbnQuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdW1tYXJ5PXtldmVudC5zdW1tYXJ5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZVN0YXJ0PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdGFydC5kYXRlVGltZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZUVuZD17ZXZlbnQuZW5kLmRhdGVUaW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb249e2V2ZW50LmxvY2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vIEV2ZW50L3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7Y2RuX3VybH0vYWRzL2JhdHVjcy0yLnBuZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NjUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs0MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGN0eCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBldmVudHMgPSAoXHJcbiAgICAgICAgICAgIGF3YWl0IGdvb2dsZV9jYWxlbmRhci5ldmVudHMubGlzdCh7XHJcbiAgICAgICAgICAgICAgICBjYWxlbmRhcklkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0FMRU5EQVJfSUQsXHJcbiAgICAgICAgICAgICAgICBvcmRlckJ5OiBcInN0YXJ0VGltZVwiLFxyXG4gICAgICAgICAgICAgICAgc2luZ2xlRXZlbnRzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdGltZU1pbjogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgIG1heFJlc3VsdHM6IDIwLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICkuZGF0YS5pdGVtcztcclxuXHJcbiAgICAgICAgY29uc3Qgc3VuZGF5X2V2ZW50cyA9IGV2ZW50cy5maWx0ZXIoZXZlbnQgPT5cclxuICAgICAgICAgICAgaXNTYW1lRGF5KG5ldyBEYXRlKGV2ZW50LnN0YXJ0LmRhdGVUaW1lKSwgbmV3IERhdGUoMjAyMSwgMCwgMTcpKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgbW9uZGF5X2V2ZW50cyA9IGV2ZW50cy5maWx0ZXIoZXZlbnQgPT5cclxuICAgICAgICAgICAgaXNTYW1lRGF5KG5ldyBEYXRlKGV2ZW50LnN0YXJ0LmRhdGVUaW1lKSwgbmV3IERhdGUoMjAyMSwgMCwgMTgpKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgdHVlc2RheV9ldmVudHMgPSBldmVudHMuZmlsdGVyKGV2ZW50ID0+XHJcbiAgICAgICAgICAgIGlzU2FtZURheShuZXcgRGF0ZShldmVudC5zdGFydC5kYXRlVGltZSksIG5ldyBEYXRlKDIwMjEsIDAsIDE5KSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHdlZG5lc2RheV9ldmVudHMgPSBldmVudHMuZmlsdGVyKGV2ZW50ID0+XHJcbiAgICAgICAgICAgIGlzU2FtZURheShuZXcgRGF0ZShldmVudC5zdGFydC5kYXRlVGltZSksIG5ldyBEYXRlKDIwMjEsIDAsIDIwKSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHRodXJzZGF5X2V2ZW50cyA9IGV2ZW50cy5maWx0ZXIoZXZlbnQgPT5cclxuICAgICAgICAgICAgaXNTYW1lRGF5KG5ldyBEYXRlKGV2ZW50LnN0YXJ0LmRhdGVUaW1lKSwgbmV3IERhdGUoMjAyMSwgMCwgMjEpKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgZnJpZGF5X2V2ZW50cyA9IGV2ZW50cy5maWx0ZXIoZXZlbnQgPT5cclxuICAgICAgICAgICAgaXNTYW1lRGF5KG5ldyBEYXRlKGV2ZW50LnN0YXJ0LmRhdGVUaW1lKSwgbmV3IERhdGUoMjAyMSwgMCwgMjIpKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3Qgc2F0dXJkYXlfZXZlbnRzID0gZXZlbnRzLmZpbHRlcihldmVudCA9PlxyXG4gICAgICAgICAgICBpc1NhbWVEYXkobmV3IERhdGUoZXZlbnQuc3RhcnQuZGF0ZVRpbWUpLCBuZXcgRGF0ZSgyMDIxLCAwLCAyMykpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgIHN1bmRheV9ldmVudHMsXHJcbiAgICAgICAgICAgICAgICBtb25kYXlfZXZlbnRzLFxyXG4gICAgICAgICAgICAgICAgdHVlc2RheV9ldmVudHMsXHJcbiAgICAgICAgICAgICAgICB3ZWRuZXNkYXlfZXZlbnRzLFxyXG4gICAgICAgICAgICAgICAgdGh1cnNkYXlfZXZlbnRzLFxyXG4gICAgICAgICAgICAgICAgZnJpZGF5X2V2ZW50cyxcclxuICAgICAgICAgICAgICAgIHNhdHVyZGF5X2V2ZW50cyxcclxuICAgICAgICAgICAgICAgIGV2ZW50cyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmV2YWxpZGF0ZTogMTAsXHJcbiAgICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgIHN1bmRheV9ldmVudHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgbW9uZGF5X2V2ZW50czogW10sXHJcbiAgICAgICAgICAgICAgICB0dWVzZGF5X2V2ZW50czogW10sXHJcbiAgICAgICAgICAgICAgICB3ZWRuZXNkYXlfZXZlbnRzOiBbXSxcclxuICAgICAgICAgICAgICAgIHRodXJzZGF5X2V2ZW50czogW10sXHJcbiAgICAgICAgICAgICAgICBmcmlkYXlfZXZlbnRzOiBbXSxcclxuICAgICAgICAgICAgICAgIHNhdHVyZGF5X2V2ZW50czogW10sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJldmFsaWRhdGU6IDEwLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50cztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==