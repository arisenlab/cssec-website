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
      objectFit: "cover",
      width: "100%",
      height: "300px"
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
          lineNumber: 49,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
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
          lineNumber: 61,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_error__WEBPACK_IMPORTED_MODULE_4___default.a, {
        statusCode: 404
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, _this)]
    }, void 0, true);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_general_space__WEBPACK_IMPORTED_MODULE_13__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
      container: true,
      spacing: 2,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
        item: true,
        md: 8,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
          container: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
            item: true,
            xs: 12,
            children: post.jetpack_featured_media_url ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: post.jetpack_featured_media_url,
              className: classes.centeredAndCropped
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 33
            }, _this) : null
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
            item: true,
            xs: 12,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
              variant: "h3",
              component: "h4",
              style: {
                marginBottom: 20
              },
              children: post.title.rendered
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
              variant: "subtitle2",
              children: ["by", " ", "".concat(author.name, " on ").concat(new Date(post.date).toDateString())]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
            item: true,
            xs: 12,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
              variant: "body1",
              component: "div",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_gutenberg__WEBPACK_IMPORTED_MODULE_14___default.a, {
                blocks: post.blocks
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
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
            lineNumber: 107,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_9__["default"], {
            style: {
              width: "100%"
            },
            children: recent.map(function (rec) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
                button: true,
                onClick: function onClick() {
                  return router.push("/news/".concat(rec.slug));
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  primary: rec.title.rendered,
                  secondary: new Date(rec.date).toDateString()
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 37
                }, _this)
              }, rec.id, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 33
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_general_space__WEBPACK_IMPORTED_MODULE_13__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 69,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3cy9bc2x1Z10uanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIndpZHRoIiwibWFyZ2luIiwiY3JvcCIsIm92ZXJmbG93IiwiY3JvcEltZyIsImhlaWdodCIsImNlbnRlcmVkQW5kQ3JvcHBlZCIsIm9iamVjdEZpdCIsIlNsdWciLCJwb3N0IiwiYXV0aG9yIiwicmVjZW50IiwiY2xhc3NlcyIsInJvdXRlciIsInVzZVJvdXRlciIsImlzRmFsbGJhY2siLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJqZXRwYWNrX2ZlYXR1cmVkX21lZGlhX3VybCIsInRpdGxlIiwicmVuZGVyZWQiLCJuYW1lIiwiRGF0ZSIsImRhdGUiLCJ0b0RhdGVTdHJpbmciLCJibG9ja3MiLCJtaW5XaWR0aCIsInBhZGRpbmciLCJtYXAiLCJyZWMiLCJwdXNoIiwic2x1ZyIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsU0FBSztBQUNuQ0MsUUFBSSxFQUFFO0FBQ0ZDLFdBQUssRUFBRSxLQURMO0FBRUZDLFlBQU0sRUFBRTtBQUZOLEtBRDZCO0FBS25DQyxRQUFJLEVBQUU7QUFDRkYsV0FBSyxFQUFFLE1BREw7QUFFRkcsY0FBUSxFQUFFO0FBRlIsS0FMNkI7QUFTbkNDLFdBQU8sRUFBRTtBQUNMSixXQUFLLEVBQUUsTUFERjtBQUVMSyxZQUFNLEVBQUU7QUFGSCxLQVQwQjtBQWFuQ0Msc0JBQWtCLEVBQUU7QUFDaEJDLGVBQVMsRUFBRSxPQURLO0FBRWhCUCxXQUFLLEVBQUUsTUFGUztBQUdoQkssWUFBTSxFQUFF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SixpQkFDU0ssR0FBRyxDQUFDRyxFQURiO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRFc7QUFBQSxhQUFkO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBOERJLHFFQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE5REo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFrRUgsQ0E3RkQ7O0dBQU14QixJO1VBQ2NaLFMsRUFDRGtCLHFEOzs7S0FGYk4sSTs7QUEwSVNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL25ld3MvW3NsdWddLjJlM2EzN2ZkZTJkZjVjMzc4MTcxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgRGVmYXVsdEVycm9yUGFnZSBmcm9tIFwibmV4dC9lcnJvclwiO1xyXG5cclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtXCI7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dFwiO1xyXG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzc1wiO1xyXG5cclxuaW1wb3J0IFNwYWNlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dlbmVyYWwvc3BhY2VcIjtcclxuXHJcbmltcG9ydCBXUCBmcm9tIFwiLi4vLi4vdXRpbHMvd29yZHByZXNzXCI7XHJcbmltcG9ydCBXUEdCbG9ja3MgZnJvbSBcInJlYWN0LWd1dGVuYmVyZ1wiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIHdpZHRoOiBcIjkwJVwiLFxyXG4gICAgICAgIG1hcmdpbjogXCJhdXRvXCIsXHJcbiAgICB9LFxyXG4gICAgY3JvcDoge1xyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgIH0sXHJcbiAgICBjcm9wSW1nOiB7XHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIGhlaWdodDogXCI0MDBweFwiLFxyXG4gICAgfSxcclxuICAgIGNlbnRlcmVkQW5kQ3JvcHBlZDoge1xyXG4gICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMzAwcHhcIixcclxuICAgIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IFNsdWcgPSAoeyBwb3N0LCBhdXRob3IsIHJlY2VudCB9KSA9PiB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBpZiAocm91dGVyLmlzRmFsbGJhY2spIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249XCJyb3dcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiAxMDAsIG1hcmdpbkJvdHRvbTogMTAwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXBvc3QpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9XCJub2luZGV4XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgICAgIDxEZWZhdWx0RXJyb3JQYWdlIHN0YXR1c0NvZGU9ezQwNH0gLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICA8U3BhY2UgLz5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17OH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9zdC5qZXRwYWNrX2ZlYXR1cmVkX21lZGlhX3VybCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cG9zdC5qZXRwYWNrX2ZlYXR1cmVkX21lZGlhX3VybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNlbnRlcmVkQW5kQ3JvcHBlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImg0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QudGl0bGUucmVuZGVyZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgJHthdXRob3IubmFtZX0gb24gJHtuZXcgRGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdC5kYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS50b0RhdGVTdHJpbmcoKX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXUEdCbG9ja3MgYmxvY2tzPXtwb3N0LmJsb2Nrc30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezR9IHN0eWxlPXt7IG1pbldpZHRoOiBcIjMwMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhcGVyIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIHN0eWxlPXt7IHBhZGRpbmc6IDIwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVjZW50IE5ld3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdCBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVjZW50Lm1hcChyZWMgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3JlYy5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChgL25ld3MvJHtyZWMuc2x1Z31gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXtyZWMudGl0bGUucmVuZGVyZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnk9e25ldyBEYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYy5kYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnRvRGF0ZVN0cmluZygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPFNwYWNlIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgbGV0IHBvc3RzID0gW107XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHBvc3RzID0gYXdhaXQgV1AucG9zdHMoKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHBhdGhzID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgcG9zdCBvZiBwb3N0cykge1xyXG4gICAgICAgIHBhdGhzLnB1c2goe1xyXG4gICAgICAgICAgICBwYXJhbXM6IHsgc2x1ZzogcG9zdC5zbHVnIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgcGF0aHMsIGZhbGxiYWNrOiB0cnVlIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyBjdHggPT4ge1xyXG4gICAgbGV0IHBvc3RzID0gW107XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBwb3N0cyA9IGF3YWl0IFdQLnBvc3RzKCkuc2x1ZyhjdHgucGFyYW1zLnNsdWcpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocG9zdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IFthdXRob3IsIHJlY2VudF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgIFdQLnVzZXJzKCkuaWQocG9zdHNbMF0uYXV0aG9yKSxcclxuICAgICAgICAgICAgV1AucG9zdHMoKVxyXG4gICAgICAgICAgICAgICAgLmV4Y2x1ZGUocG9zdHNbMF0uaWQpXHJcbiAgICAgICAgICAgICAgICAucGVyUGFnZSg1KVxyXG4gICAgICAgICAgICAgICAgLnBhZ2UoMSlcclxuICAgICAgICAgICAgICAgIC5jYXRlZ29yaWVzKHBvc3RzWzBdLmNhdGVnb3JpZXMpLFxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIHJldHVybiB7IHByb3BzOiB7IHBvc3Q6IHBvc3RzWzBdLCBhdXRob3IsIHJlY2VudCB9LCByZXZhbGlkYXRlOiAxMCB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHByb3BzOiB7IHBvc3Q6IG51bGwsIGF1dGhvcjogbnVsbCwgcmVjZW50OiBbXSB9IH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbHVnO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9