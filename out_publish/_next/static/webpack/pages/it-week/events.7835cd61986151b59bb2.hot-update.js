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
                      spacing: 1,
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
                        item: true,
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
                          variant: "h5",
                          align: "left",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                            children: "Event Name"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 155,
                            columnNumber: 57
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 151,
                          columnNumber: 53
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10__["default"], {
                          variant: "fullWidth",
                          style: {
                            height: 3,
                            backgroundColor: "#622a55"
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 157,
                          columnNumber: 53
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 150,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
                        item: true,
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
                          container: true,
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
                            item: true,
                            xs: 3,
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
                              variant: "h6",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                                children: "Time"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 170,
                                columnNumber: 65
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 169,
                              columnNumber: 61
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 168,
                            columnNumber: 57
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
                            item: true,
                            xs: 3,
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
                              variant: "h6",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                                children: "Time"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 175,
                                columnNumber: 65
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 174,
                              columnNumber: 61
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 173,
                            columnNumber: 57
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 167,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 166,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
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
            lineNumber: 264,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 263,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaXQtd2Vlay9ldmVudHMuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIndpZHRoIiwibWFyZ2luIiwiYXJyb3dJY29uIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJwYXBlciIsInBhZGRpbmciLCJhZFNwYWNlIiwibWFyZ2luVG9wIiwiaGVhZGVyRXZlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImNvbnRlbnRFdmVudCIsInRleHQiLCJ3b3JkV3JhcCIsIkV2ZW50cyIsInN1bmRheV9ldmVudHMiLCJtb25kYXlfZXZlbnRzIiwidHVlc2RheV9ldmVudHMiLCJ3ZWRuZXNkYXlfZXZlbnRzIiwidGh1cnNkYXlfZXZlbnRzIiwiZnJpZGF5X2V2ZW50cyIsInNhdHVyZGF5X2V2ZW50cyIsImV2ZW50cyIsImNsYXNzZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkYXlzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImV2ZW50TGlzdCIsInNldEV2ZW50TGlzdCIsInN0cl9kYXRlIiwiZGF5RGF0ZSIsInNldERheURhdGUiLCJwdXNoIiwibWFwIiwiaWQiLCJuYW1lIiwic3R5bGUiLCJoZWlnaHQiLCJjZG5fdXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUlBO0FBRUE7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQUMsS0FBSztBQUFBLFNBQUs7QUFDbkNDLFFBQUksRUFBRTtBQUNGQyxXQUFLLEVBQUUsS0FETDtBQUVGQyxZQUFNLEVBQUU7QUFGTixLQUQ2QjtBQUtuQ0MsYUFBUyxFQUFFO0FBQ1BDLGFBQU8sRUFBRSxNQURGO0FBRVBDLGdCQUFVLEVBQUU7QUFGTCxLQUx3QjtB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QkFEUDtBQUVJLGlCQUFLLEVBQUUsR0FGWDtBQUdJLGtCQUFNLEVBQUU7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF0S0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFvTUgsQ0E1TkQ7O0dBQU0xQixNO1VBVWNuQixTLEVBQ0Q4QixxRDs7O0tBWGJYLE07O0FBOFJTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pdC13ZWVrL2V2ZW50cy43ODM1Y2Q2MTk4NjE1MWI1OWJiMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBCdXR0b25CYXNlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25CYXNlXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcclxuaW1wb3J0IERpdmlkZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXJcIjtcclxuXHJcbmltcG9ydCBBcnJvd0JhY2tJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dCYWNrXCI7XHJcblxyXG5pbXBvcnQgU3BhY2UgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ2VuZXJhbC9zcGFjZVwiO1xyXG5cclxuaW1wb3J0IGRheXMgZnJvbSBcIi4uLy4uL2RhdGEvZGF5c19kYXRhXCI7XHJcblxyXG5pbXBvcnQgZ29vZ2xlX2NhbGVuZGFyIGZyb20gXCIuLi8uLi91dGlscy9nb29nbGVcIjtcclxuXHJcbmltcG9ydCB7IGNkbl91cmwgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XHJcblxyXG5pbXBvcnQgeyBmb3JtYXQsIGlzU2FtZURheSB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIHdpZHRoOiBcIjk1JVwiLFxyXG4gICAgICAgIG1hcmdpbjogXCJhdXRvXCIsXHJcbiAgICB9LFxyXG4gICAgYXJyb3dJY29uOiB7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIH0sXHJcbiAgICBwYXBlcjoge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwLFxyXG4gICAgfSxcclxuICAgIGFkU3BhY2U6IHtcclxuICAgICAgICBtYXJnaW5Ub3A6IDEwLFxyXG4gICAgfSxcclxuICAgIGhlYWRlckV2ZW50OiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM2MjJBNTVcIixcclxuICAgICAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICB9LFxyXG4gICAgY29udGVudEV2ZW50OiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMTg2LCAxMzEsIDE4MCwgMC4yOSlcIixcclxuICAgICAgICBwYWRkaW5nOiAyMCxcclxuICAgIH0sXHJcbiAgICB0ZXh0OiB7XHJcbiAgICAgICAgd29yZFdyYXA6IFwiYnJlYWstd29yZFwiLFxyXG4gICAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgRXZlbnRzID0gKHtcclxuICAgIHN1bmRheV9ldmVudHMsXHJcbiAgICBtb25kYXlfZXZlbnRzLFxyXG4gICAgdHVlc2RheV9ldmVudHMsXHJcbiAgICB3ZWRuZXNkYXlfZXZlbnRzLFxyXG4gICAgdGh1cnNkYXlfZXZlbnRzLFxyXG4gICAgZnJpZGF5X2V2ZW50cyxcclxuICAgIHNhdHVyZGF5X2V2ZW50cyxcclxuICAgIGV2ZW50cyxcclxufSkgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgZGF5c1swXVtcImV2ZW50c1wiXSA9IHN1bmRheV9ldmVudHM7XHJcbiAgICBkYXlzWzFdW1wiZXZlbnRzXCJdID0gbW9uZGF5X2V2ZW50cztcclxuICAgIGRheXNbMl1bXCJldmVudHNcIl0gPSB0dWVzZGF5X2V2ZW50cztcclxuICAgIGRheXNbM11bXCJldmVudHNcIl0gPSB3ZWRuZXNkYXlfZXZlbnRzO1xyXG4gICAgZGF5c1s0XVtcImV2ZW50c1wiXSA9IHRodXJzZGF5X2V2ZW50cztcclxuICAgIGRheXNbNV1bXCJldmVudHNcIl0gPSBmcmlkYXlfZXZlbnRzO1xyXG4gICAgZGF5c1s2XVtcImV2ZW50c1wiXSA9IHNhdHVyZGF5X2V2ZW50cztcclxuXHJcbiAgICBjb25zdCBbZXZlbnRMaXN0LCBzZXRFdmVudExpc3RdID0gUmVhY3QudXNlU3RhdGUoZGF5c1swXS5ldmVudHMpO1xyXG4gICAgY29uc3QgW2RheURhdGUsIHNldERheURhdGVdID0gUmVhY3QudXNlU3RhdGUoZGF5c1swXS5zdHJfZGF0ZSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgPFNwYWNlIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b25CYXNlXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlUmlwcGxlXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYXJyb3dJY29ufVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvaXQtd2Vla1wiKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEFycm93QmFja0ljb24gLz4gPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+QmFjazwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9CdXR0b25CYXNlPlxyXG4gICAgICAgICAgICA8U3BhY2UgaGVpZ2h0PXsxMH0gLz5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IGRpcmVjdGlvbj1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgc3R5bGU9e3sgY29sb3I6IFwiIzVEMjI1MlwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mb3JtYXRpb24gVGVjaG5vbG9neSBXZWVrIC0gRXZlbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gc3BhY2luZz17M30gc3R5bGU9e3sgcGFkZGluZzogMjAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gc209ezN9IHNwYWNpbmc9ezF9IGRpcmVjdGlvbj1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF5cy5tYXAoKHsgaWQsIG5hbWUsIHN0cl9kYXRlLCBzdHlsZSB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGtleT17aWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25CYXNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFdmVudExpc3QoZGF5c1tpZF0uZXZlbnRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERheURhdGUoc3RyX2RhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhcGVyIHN0eWxlPXtzdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbkJhc2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSBzbT17Nn0gc3BhY2luZz17MX0gZGlyZWN0aW9uPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyRXZlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPntkYXlEYXRlfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50RXZlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBkaXJlY3Rpb249XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGltZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBY3Rpdml0eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWZW51ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uPVwiY29sdW1uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhY2luZz17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5FdmVudCBOYW1lPC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZnVsbFdpZHRoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIzYyMmE1NVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+VGltZTwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5UaW1lPC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge2V2ZW50TGlzdCAmJiBldmVudExpc3QubGVuZ3RoICE9PSAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRMaXN0Lm1hcChldmVudCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhY2luZz17Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtldmVudC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYXBlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXMucGFwZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXMudGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCR7Zm9ybWF0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RhcnQuZGF0ZVRpbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfSAtICR7Zm9ybWF0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuZW5kLmRhdGVUaW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFwZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLnBhcGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLnRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2V2ZW50LnN1bW1hcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYXBlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXMucGFwZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXMudGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXZlbnQubG9jYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vIEV2ZW50L3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtjZG5fdXJsfS9hZHMvYmF0dWNzLTIucG5nYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs2NTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezQwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY3R4KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IChcclxuICAgICAgICAgICAgYXdhaXQgZ29vZ2xlX2NhbGVuZGFyLmV2ZW50cy5saXN0KHtcclxuICAgICAgICAgICAgICAgIGNhbGVuZGFySWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DQUxFTkRBUl9JRCxcclxuICAgICAgICAgICAgICAgIG9yZGVyQnk6IFwic3RhcnRUaW1lXCIsXHJcbiAgICAgICAgICAgICAgICBzaW5nbGVFdmVudHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB0aW1lTWluOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgbWF4UmVzdWx0czogMjAsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKS5kYXRhLml0ZW1zO1xyXG5cclxuICAgICAgICBjb25zdCBzdW5kYXlfZXZlbnRzID0gZXZlbnRzLmZpbHRlcihldmVudCA9PlxyXG4gICAgICAgICAgICBpc1NhbWVEYXkobmV3IERhdGUoZXZlbnQuc3RhcnQuZGF0ZVRpbWUpLCBuZXcgRGF0ZSgyMDIxLCAwLCAxNykpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBtb25kYXlfZXZlbnRzID0gZXZlbnRzLmZpbHRlcihldmVudCA9PlxyXG4gICAgICAgICAgICBpc1NhbWVEYXkobmV3IERhdGUoZXZlbnQuc3RhcnQuZGF0ZVRpbWUpLCBuZXcgRGF0ZSgyMDIxLCAwLCAxOCkpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCB0dWVzZGF5X2V2ZW50cyA9IGV2ZW50cy5maWx0ZXIoZXZlbnQgPT5cclxuICAgICAgICAgICAgaXNTYW1lRGF5KG5ldyBEYXRlKGV2ZW50LnN0YXJ0LmRhdGVUaW1lKSwgbmV3IERhdGUoMjAyMSwgMCwgMTkpKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3Qgd2VkbmVzZGF5X2V2ZW50cyA9IGV2ZW50cy5maWx0ZXIoZXZlbnQgPT5cclxuICAgICAgICAgICAgaXNTYW1lRGF5KG5ldyBEYXRlKGV2ZW50LnN0YXJ0LmRhdGVUaW1lKSwgbmV3IERhdGUoMjAyMSwgMCwgMjApKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgdGh1cnNkYXlfZXZlbnRzID0gZXZlbnRzLmZpbHRlcihldmVudCA9PlxyXG4gICAgICAgICAgICBpc1NhbWVEYXkobmV3IERhdGUoZXZlbnQuc3RhcnQuZGF0ZVRpbWUpLCBuZXcgRGF0ZSgyMDIxLCAwLCAyMSkpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBmcmlkYXlfZXZlbnRzID0gZXZlbnRzLmZpbHRlcihldmVudCA9PlxyXG4gICAgICAgICAgICBpc1NhbWVEYXkobmV3IERhdGUoZXZlbnQuc3RhcnQuZGF0ZVRpbWUpLCBuZXcgRGF0ZSgyMDIxLCAwLCAyMikpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBzYXR1cmRheV9ldmVudHMgPSBldmVudHMuZmlsdGVyKGV2ZW50ID0+XHJcbiAgICAgICAgICAgIGlzU2FtZURheShuZXcgRGF0ZShldmVudC5zdGFydC5kYXRlVGltZSksIG5ldyBEYXRlKDIwMjEsIDAsIDIzKSlcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgc3VuZGF5X2V2ZW50cyxcclxuICAgICAgICAgICAgICAgIG1vbmRheV9ldmVudHMsXHJcbiAgICAgICAgICAgICAgICB0dWVzZGF5X2V2ZW50cyxcclxuICAgICAgICAgICAgICAgIHdlZG5lc2RheV9ldmVudHMsXHJcbiAgICAgICAgICAgICAgICB0aHVyc2RheV9ldmVudHMsXHJcbiAgICAgICAgICAgICAgICBmcmlkYXlfZXZlbnRzLFxyXG4gICAgICAgICAgICAgICAgc2F0dXJkYXlfZXZlbnRzLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRzLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZXZhbGlkYXRlOiAxMCxcclxuICAgICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgc3VuZGF5X2V2ZW50czogW10sXHJcbiAgICAgICAgICAgICAgICBtb25kYXlfZXZlbnRzOiBbXSxcclxuICAgICAgICAgICAgICAgIHR1ZXNkYXlfZXZlbnRzOiBbXSxcclxuICAgICAgICAgICAgICAgIHdlZG5lc2RheV9ldmVudHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgdGh1cnNkYXlfZXZlbnRzOiBbXSxcclxuICAgICAgICAgICAgICAgIGZyaWRheV9ldmVudHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgc2F0dXJkYXlfZXZlbnRzOiBbXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmV2YWxpZGF0ZTogMTAsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9