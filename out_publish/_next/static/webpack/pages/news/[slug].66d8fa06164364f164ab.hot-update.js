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
      width: "200px",
      height: "150px",
      overflow: "hidden"
    },
    cropImg: {
      width: "400px",
      height: "300px",
      margin: "-75px 0 0 -100px"
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
          lineNumber: 46,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
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
          lineNumber: 58,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_error__WEBPACK_IMPORTED_MODULE_4___default.a, {
        statusCode: 404
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, _this)]
    }, void 0, true);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_general_space__WEBPACK_IMPORTED_MODULE_13__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
      container: true,
      spacing: 2,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
        item: true,
        md: 8,
        children: [post.jetpack_featured_media_url ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.crop,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: post.jetpack_featured_media_url,
            width: "50%",
            className: classes.cropImg
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 29
          }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_general_space__WEBPACK_IMPORTED_MODULE_13__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
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
        lineNumber: 69,
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
      lineNumber: 68,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_general_space__WEBPACK_IMPORTED_MODULE_13__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 66,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3cy9bc2x1Z10uanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIndpZHRoIiwibWFyZ2luIiwiY3JvcCIsImhlaWdodCIsIm92ZXJmbG93IiwiY3JvcEltZyIsIlNsdWciLCJwb3N0IiwiYXV0aG9yIiwicmVjZW50IiwiY2xhc3NlcyIsInJvdXRlciIsInVzZVJvdXRlciIsImlzRmFsbGJhY2siLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJqZXRwYWNrX2ZlYXR1cmVkX21lZGlhX3VybCIsInRpdGxlIiwicmVuZGVyZWQiLCJuYW1lIiwiRGF0ZSIsImRhdGUiLCJ0b0RhdGVTdHJpbmciLCJibG9ja3MiLCJtaW5XaWR0aCIsInBhZGRpbmciLCJtYXAiLCJyZWMiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQUMsS0FBSztBQUFBLFNBQUs7QUFDbkNDLFFBQUksRUFBRTtBQUNGQyxXQUFLLEVBQUUsS0FETDtBQUVGQyxZQUFNLEVBQUU7QUFGTixLQUQ2QjtBQUtuQ0MsUUFBSSxFQUFFO0FBQ0ZGLFdBQUssRUFBRSxPQURMO0FBRUZHLFlBQU0sRUFBRSxPQUZOO0FBR0ZDLGNBQVEsRUFBRTtBQUhSLEtBTDZCO0FBVW5DQyxXQUFPLEVBQUU7QUFDTEwsV0FBSyxFQUFFLE9BREY7QUFFTEcsWUFBTSxFQUFFLE9BRkg7QUFHTEYsWUFBTSxFQUFFO0FBSEg7QUFWMEIsR0FBTDtBQUFBLENBQU4sQ0FBNUI7O0FBaUJBLElBQU1LLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQThCO0FBQUE7O0FBQUEsTUFBM0JDLElBQTJC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Z10uNjZkOGZhMDYxNjQzNjRmMTY0YWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBEZWZhdWx0RXJyb3JQYWdlIGZyb20gXCJuZXh0L2Vycm9yXCI7XHJcblxyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCI7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIjtcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0XCI7XHJcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzXCI7XHJcblxyXG5pbXBvcnQgU3BhY2UgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ2VuZXJhbC9zcGFjZVwiO1xyXG5cclxuaW1wb3J0IFdQIGZyb20gXCIuLi8uLi91dGlscy93b3JkcHJlc3NcIjtcclxuaW1wb3J0IFdQR0Jsb2NrcyBmcm9tIFwicmVhY3QtZ3V0ZW5iZXJnXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgd2lkdGg6IFwiOTAlXCIsXHJcbiAgICAgICAgbWFyZ2luOiBcImF1dG9cIixcclxuICAgIH0sXHJcbiAgICBjcm9wOiB7XHJcbiAgICAgICAgd2lkdGg6IFwiMjAwcHhcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMTUwcHhcIixcclxuICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgIH0sXHJcbiAgICBjcm9wSW1nOiB7XHJcbiAgICAgICAgd2lkdGg6IFwiNDAwcHhcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMzAwcHhcIixcclxuICAgICAgICBtYXJnaW46IFwiLTc1cHggMCAwIC0xMDBweFwiLFxyXG4gICAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgU2x1ZyA9ICh7IHBvc3QsIGF1dGhvciwgcmVjZW50IH0pID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGlmIChyb3V0ZXIuaXNGYWxsYmFjaykge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj1cInJvd1wiIGp1c3RpZnk9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IDEwMCwgbWFyZ2luQm90dG9tOiAxMDAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghcG9zdCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwicm9ib3RzXCIgY29udGVudD1cIm5vaW5kZXhcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgPERlZmF1bHRFcnJvclBhZ2Ugc3RhdHVzQ29kZT17NDA0fSAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgIDxTcGFjZSAvPlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs4fT5cclxuICAgICAgICAgICAgICAgICAgICB7cG9zdC5qZXRwYWNrX2ZlYXR1cmVkX21lZGlhX3VybCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY3JvcH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwb3N0LmpldHBhY2tfZmVhdHVyZWRfbWVkaWFfdXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNTAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY3JvcEltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYWNlIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LnRpdGxlLnJlbmRlcmVkfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBieXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Ake2F1dGhvci5uYW1lfSBvbiAke25ldyBEYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdC5kYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkudG9EYXRlU3RyaW5nKCl9YH1cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8V1BHQmxvY2tzIGJsb2Nrcz17cG9zdC5ibG9ja3N9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17NH0gc3R5bGU9e3sgbWluV2lkdGg6IFwiMzAwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8UGFwZXIgdmFyaWFudD1cIm91dGxpbmVkXCIgc3R5bGU9e3sgcGFkZGluZzogMjAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImg0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWNlbnQgTmV3c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZWNlbnQubWFwKHJlYyA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGtleT17cmVjLmlkfSBidXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnk9e3JlYy50aXRsZS5yZW5kZXJlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeT17bmV3IERhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjLmRhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkudG9EYXRlU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8U3BhY2UgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBsZXQgcG9zdHMgPSBbXTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcG9zdHMgPSBhd2FpdCBXUC5wb3N0cygpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcGF0aHMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBwb3N0IG9mIHBvc3RzKSB7XHJcbiAgICAgICAgcGF0aHMucHVzaCh7XHJcbiAgICAgICAgICAgIHBhcmFtczogeyBzbHVnOiBwb3N0LnNsdWcgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IHRydWUgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIGN0eCA9PiB7XHJcbiAgICBsZXQgcG9zdHMgPSBbXTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHBvc3RzID0gYXdhaXQgV1AucG9zdHMoKS5zbHVnKGN0eC5zbHVnKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBvc3RzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCBbYXV0aG9yLCByZWNlbnRdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICBXUC51c2VycygpLmlkKHBvc3RzWzBdLmF1dGhvciksXHJcbiAgICAgICAgICAgIFdQLnBvc3RzKClcclxuICAgICAgICAgICAgICAgIC5leGNsdWRlKHBvc3RzWzBdLmlkKVxyXG4gICAgICAgICAgICAgICAgLnBlclBhZ2UoNSlcclxuICAgICAgICAgICAgICAgIC5wYWdlKDEpXHJcbiAgICAgICAgICAgICAgICAuY2F0ZWdvcmllcyhwb3N0c1swXS5jYXRlZ29yaWVzKSxcclxuICAgICAgICBdKTtcclxuICAgICAgICByZXR1cm4geyBwcm9wczogeyBwb3N0OiBwb3N0c1swXSwgYXV0aG9yLCByZWNlbnQgfSwgcmV2YWxpZGF0ZTogMTAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBwcm9wczogeyBwb3N0OiBudWxsLCBhdXRob3I6IG51bGwsIHJlY2VudDogW10gfSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2x1ZztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==