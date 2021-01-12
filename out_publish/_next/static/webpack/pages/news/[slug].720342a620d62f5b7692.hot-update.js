webpackHotUpdate_N_E("pages/news/[slug]",{

/***/ "./pages/news/[slug].js":
/*!******************************!*\
  !*** ./pages/news/[slug].js ***!
  \******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _components_general_space__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/general/space */ "./components/general/space.js");
/* harmony import */ var react_gutenberg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-gutenberg */ "./node_modules/react-gutenberg/index.js");
/* harmony import */ var react_gutenberg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_gutenberg__WEBPACK_IMPORTED_MODULE_14__);



var _jsxFileName = "D:\\ADDUCS\\CSSEC\\cssec-website\\pages\\news\\[slug].js",
    _this = undefined,
    _s = $RefreshSig$();















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    root: {
      width: "90%",
      margin: "auto"
    },
    crop: {
      width: "100%",
      overflow: "hidden"
    },
    cropImg: {
      width: "100%",
      height: "400px"
    },
    centeredAndCropped: {
      objectFit: "cover"
    }
  };
});

var Slug = function Slug(_ref) {
  _s();

  var post = _ref.post,
      author = _ref.author,
      recent = _ref.recent;
  var classes = useStyles();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  if (router.isFallback) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.root,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
        container: true,
        direction: "row",
        justify: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_12__["default"], {
          style: {
            marginTop: 100,
            marginBottom: 100
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, _this);
  }

  if (!post) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          name: "robots",
          content: "noindex"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_error__WEBPACK_IMPORTED_MODULE_4___default.a, {
        statusCode: 404
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, _this)]
    }, void 0, true);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_general_space__WEBPACK_IMPORTED_MODULE_13__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
      container: true,
      spacing: 2,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
        item: true,
        md: 8,
        children: [post.jetpack_featured_media_url ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: post.jetpack_featured_media_url,
            className: classes.centeredAndCropped
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 29
          }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_general_space__WEBPACK_IMPORTED_MODULE_13__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 25
        }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
          variant: "h3",
          component: "h4",
          style: {
            marginBottom: 20
          },
          children: post.title.rendered
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
          variant: "subtitle2",
          children: ["by", " ", "".concat(author.name, " on ").concat(new Date(post.date).toDateString())]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
          variant: "body1",
          component: "div",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_gutenberg__WEBPACK_IMPORTED_MODULE_14___default.a, {
            blocks: post.blocks
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
        item: true,
        md: 4,
        style: {
          minWidth: "300px"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__["default"], {
          variant: "outlined",
          style: {
            padding: 20
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
            variant: "h6",
            component: "h4",
            children: "Recent News"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_9__["default"], {
            style: {
              width: "100%"
            },
            children: recent.map(function (rec) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
                button: true,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  primary: rec.title.rendered,
                  secondary: new Date(rec.date).toDateString()
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 37
                }, _this)
              }, rec.id, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 33
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_general_space__WEBPACK_IMPORTED_MODULE_13__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 9
  }, _this);
};

_s(Slug, "y+nxznVgQ96pr4dCg1EC6WdujUg=", false, function () {
  return [useStyles, next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Slug;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Slug);

var _c;

$RefreshReg$(_c, "Slug");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3cy9bc2x1Z10uanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIndpZHRoIiwibWFyZ2luIiwiY3JvcCIsIm92ZXJmbG93IiwiY3JvcEltZyIsImhlaWdodCIsImNlbnRlcmVkQW5kQ3JvcHBlZCIsIm9iamVjdEZpdCIsIlNsdWciLCJwb3N0IiwiYXV0aG9yIiwicmVjZW50IiwiY2xhc3NlcyIsInJvdXRlciIsInVzZVJvdXRlciIsImlzRmFsbGJhY2siLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJqZXRwYWNrX2ZlYXR1cmVkX21lZGlhX3VybCIsInRpdGxlIiwicmVuZGVyZWQiLCJuYW1lIiwiRGF0ZSIsImRhdGUiLCJ0b0RhdGVTdHJpbmciLCJibG9ja3MiLCJtaW5XaWR0aCIsInBhZGRpbmciLCJtYXAiLCJyZWMiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQUMsS0FBSztBQUFBLFNBQUs7QUFDbkNDLFFBQUksRUFBRTtBQUNGQyxXQUFLLEVBQUUsS0FETDtBQUVGQyxZQUFNLEVBQUU7QUFGTixLQUQ2QjtBQUtuQ0MsUUFBSSxFQUFFO0FBQ0ZGLFdBQUssRUFBRSxNQURMO0FBRUZHLGNBQVEsRUFBRTtBQUZSLEtBTDZCO0FBU25DQyxXQUFPLEVBQUU7QUFDTEosV0FBSyxFQUFFLE1BREY7QUFFTEssWUFBTSxFQUFFO0FBRkgsS0FUMEI7QUFhbkNDLHNCQUFrQixFQUFFO0FBQ2hCQyxlQUFTLEVBQUU7QUFESztBQWJlLEdBQUw7QUFBQSxDQUFOLENBQTVCOztBQWtCQSxJQUFNQyxJQUFJLEdBQUcsU0FB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MmY1Yjc2OTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBEZWZhdWx0RXJyb3JQYWdlIGZyb20gXCJuZXh0L2Vycm9yXCI7XHJcblxyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCI7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIjtcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0XCI7XHJcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzXCI7XHJcblxyXG5pbXBvcnQgU3BhY2UgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ2VuZXJhbC9zcGFjZVwiO1xyXG5cclxuaW1wb3J0IFdQIGZyb20gXCIuLi8uLi91dGlscy93b3JkcHJlc3NcIjtcclxuaW1wb3J0IFdQR0Jsb2NrcyBmcm9tIFwicmVhY3QtZ3V0ZW5iZXJnXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgd2lkdGg6IFwiOTAlXCIsXHJcbiAgICAgICAgbWFyZ2luOiBcImF1dG9cIixcclxuICAgIH0sXHJcbiAgICBjcm9wOiB7XHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgfSxcclxuICAgIGNyb3BJbWc6IHtcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjQwMHB4XCIsXHJcbiAgICB9LFxyXG4gICAgY2VudGVyZWRBbmRDcm9wcGVkOiB7XHJcbiAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXHJcbiAgICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBTbHVnID0gKHsgcG9zdCwgYXV0aG9yLCByZWNlbnQgfSkgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgaWYgKHJvdXRlci5pc0ZhbGxiYWNrKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwicm93XCIganVzdGlmeT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogMTAwLCBtYXJnaW5Cb3R0b206IDEwMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFwb3N0KSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwibm9pbmRleFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICA8RGVmYXVsdEVycm9yUGFnZSBzdGF0dXNDb2RlPXs0MDR9IC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgPFNwYWNlIC8+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezh9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwb3N0LmpldHBhY2tfZmVhdHVyZWRfbWVkaWFfdXJsID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cG9zdC5qZXRwYWNrX2ZlYXR1cmVkX21lZGlhX3VybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2VudGVyZWRBbmRDcm9wcGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhY2UgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImg0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QudGl0bGUucmVuZGVyZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ5e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YCR7YXV0aG9yLm5hbWV9IG9uICR7bmV3IERhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0LmRhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgKS50b0RhdGVTdHJpbmcoKX1gfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxXUEdCbG9ja3MgYmxvY2tzPXtwb3N0LmJsb2Nrc30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs0fSBzdHlsZT17eyBtaW5XaWR0aDogXCIzMDBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYXBlciB2YXJpYW50PVwib3V0bGluZWRcIiBzdHlsZT17eyBwYWRkaW5nOiAyMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiaDRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlY2VudCBOZXdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3Qgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3JlY2VudC5tYXAocmVjID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0ga2V5PXtyZWMuaWR9IGJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT17cmVjLnRpdGxlLnJlbmRlcmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5PXtuZXcgRGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWMuZGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS50b0RhdGVTdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxTcGFjZSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICAgIGxldCBwb3N0cyA9IFtdO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBwb3N0cyA9IGF3YWl0IFdQLnBvc3RzKCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBwYXRocyA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IHBvc3Qgb2YgcG9zdHMpIHtcclxuICAgICAgICBwYXRocy5wdXNoKHtcclxuICAgICAgICAgICAgcGFyYW1zOiB7IHNsdWc6IHBvc3Quc2x1ZyB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogdHJ1ZSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgY3R4ID0+IHtcclxuICAgIGxldCBwb3N0cyA9IFtdO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgcG9zdHMgPSBhd2FpdCBXUC5wb3N0cygpLnNsdWcoY3R4LnNsdWcpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocG9zdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IFthdXRob3IsIHJlY2VudF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgIFdQLnVzZXJzKCkuaWQocG9zdHNbMF0uYXV0aG9yKSxcclxuICAgICAgICAgICAgV1AucG9zdHMoKVxyXG4gICAgICAgICAgICAgICAgLmV4Y2x1ZGUocG9zdHNbMF0uaWQpXHJcbiAgICAgICAgICAgICAgICAucGVyUGFnZSg1KVxyXG4gICAgICAgICAgICAgICAgLnBhZ2UoMSlcclxuICAgICAgICAgICAgICAgIC5jYXRlZ29yaWVzKHBvc3RzWzBdLmNhdGVnb3JpZXMpLFxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIHJldHVybiB7IHByb3BzOiB7IHBvc3Q6IHBvc3RzWzBdLCBhdXRob3IsIHJlY2VudCB9LCByZXZhbGlkYXRlOiAxMCB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHByb3BzOiB7IHBvc3Q6IG51bGwsIGF1dGhvcjogbnVsbCwgcmVjZW50OiBbXSB9IH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbHVnO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9