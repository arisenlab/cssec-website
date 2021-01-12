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
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  primary: rec.title.rendered,
                  secondary: new Date(rec.date).toDateString()
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 113,
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
      lineNumber: 125,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3cy9bc2x1Z10uanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIndpZHRoIiwibWFyZ2luIiwiY3JvcCIsIm92ZXJmbG93IiwiY3JvcEltZyIsImhlaWdodCIsImNlbnRlcmVkQW5kQ3JvcHBlZCIsIm9iamVjdEZpdCIsIlNsdWciLCJwb3N0IiwiYXV0aG9yIiwicmVjZW50IiwiY2xhc3NlcyIsInJvdXRlciIsInVzZVJvdXRlciIsImlzRmFsbGJhY2siLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJqZXRwYWNrX2ZlYXR1cmVkX21lZGlhX3VybCIsInRpdGxlIiwicmVuZGVyZWQiLCJuYW1lIiwiRGF0ZSIsImRhdGUiLCJ0b0RhdGVTdHJpbmciLCJibG9ja3MiLCJtaW5XaWR0aCIsInBhZGRpbmciLCJtYXAiLCJyZWMiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQUMsS0FBSztBQUFBLFNBQUs7QUFDbkNDLFFBQUksRUFBRTtBQUNGQyxXQUFLLEVBQUUsS0FETDtBQUVGQyxZQUFNLEVBQUU7QUFGTixLQUQ2QjtBQUtuQ0MsUUFBSSxFQUFFO0FBQ0ZGLFdBQUssRUFBRSxNQURMO0FBRUZHLGNBQVEsRUFBRTtBQUZSLEtBTDZCO0FBU25DQyxXQUFPLEVBQUU7QUFDTEosV0FBSyxFQUFFLE1BREY7QUFFTEssWUFBTSxFQUFFO0FBRkgsS0FUMEI7QUFhbkNDLHNCQUFrQixFQUFFO0FBQ2hCQyxlQUFTLEVBQUUsT0FESztBQUVoQlAsV0FBSyxFQUFFLE1BRlM7QUFHaEJLLFlBQU0sRUFBRTtBQUhRO0FBYmUsR0FB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QUFBQTtBQUFBO0FBQUEsYUFGSixlQXdESSxxRUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBeERKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBNERILENBdkZEOztHQUFNdEIsSTtVQUNjWixTLEVBQ0RrQixxRDs7O0tBRmJOLEk7O0FBb0lTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9uZXdzL1tzbHVnXS45OTFlM2U2Zjc1ZWUyZDc0MDVhMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IERlZmF1bHRFcnJvclBhZ2UgZnJvbSBcIm5leHQvZXJyb3JcIjtcclxuXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIjtcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIjtcclxuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcclxuXHJcbmltcG9ydCBTcGFjZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9nZW5lcmFsL3NwYWNlXCI7XHJcblxyXG5pbXBvcnQgV1AgZnJvbSBcIi4uLy4uL3V0aWxzL3dvcmRwcmVzc1wiO1xyXG5pbXBvcnQgV1BHQmxvY2tzIGZyb20gXCJyZWFjdC1ndXRlbmJlcmdcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICB3aWR0aDogXCI5MCVcIixcclxuICAgICAgICBtYXJnaW46IFwiYXV0b1wiLFxyXG4gICAgfSxcclxuICAgIGNyb3A6IHtcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICB9LFxyXG4gICAgY3JvcEltZzoge1xyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICBoZWlnaHQ6IFwiNDAwcHhcIixcclxuICAgIH0sXHJcbiAgICBjZW50ZXJlZEFuZENyb3BwZWQ6IHtcclxuICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjMwMHB4XCIsXHJcbiAgICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBTbHVnID0gKHsgcG9zdCwgYXV0aG9yLCByZWNlbnQgfSkgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgaWYgKHJvdXRlci5pc0ZhbGxiYWNrKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwicm93XCIganVzdGlmeT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogMTAwLCBtYXJnaW5Cb3R0b206IDEwMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFwb3N0KSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwibm9pbmRleFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICA8RGVmYXVsdEVycm9yUGFnZSBzdGF0dXNDb2RlPXs0MDR9IC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgPFNwYWNlIC8+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LmpldHBhY2tfZmVhdHVyZWRfbWVkaWFfdXJsID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwb3N0LmpldHBhY2tfZmVhdHVyZWRfbWVkaWFfdXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2VudGVyZWRBbmRDcm9wcGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImg0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QudGl0bGUucmVuZGVyZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgJHthdXRob3IubmFtZX0gb24gJHtuZXcgRGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdC5kYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS50b0RhdGVTdHJpbmcoKX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V1BHQmxvY2tzIGJsb2Nrcz17cG9zdC5ibG9ja3N9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs0fSBzdHlsZT17eyBtaW5XaWR0aDogXCIzMDBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYXBlciB2YXJpYW50PVwib3V0bGluZWRcIiBzdHlsZT17eyBwYWRkaW5nOiAyMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiaDRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlY2VudCBOZXdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3Qgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3JlY2VudC5tYXAocmVjID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0ga2V5PXtyZWMuaWR9IGJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT17cmVjLnRpdGxlLnJlbmRlcmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5PXtuZXcgRGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWMuZGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS50b0RhdGVTdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxTcGFjZSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICAgIGxldCBwb3N0cyA9IFtdO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBwb3N0cyA9IGF3YWl0IFdQLnBvc3RzKCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBwYXRocyA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IHBvc3Qgb2YgcG9zdHMpIHtcclxuICAgICAgICBwYXRocy5wdXNoKHtcclxuICAgICAgICAgICAgcGFyYW1zOiB7IHNsdWc6IHBvc3Quc2x1ZyB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogdHJ1ZSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgY3R4ID0+IHtcclxuICAgIGxldCBwb3N0cyA9IFtdO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgcG9zdHMgPSBhd2FpdCBXUC5wb3N0cygpLnNsdWcoY3R4LnNsdWcpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocG9zdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IFthdXRob3IsIHJlY2VudF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgIFdQLnVzZXJzKCkuaWQocG9zdHNbMF0uYXV0aG9yKSxcclxuICAgICAgICAgICAgV1AucG9zdHMoKVxyXG4gICAgICAgICAgICAgICAgLmV4Y2x1ZGUocG9zdHNbMF0uaWQpXHJcbiAgICAgICAgICAgICAgICAucGVyUGFnZSg1KVxyXG4gICAgICAgICAgICAgICAgLnBhZ2UoMSlcclxuICAgICAgICAgICAgICAgIC5jYXRlZ29yaWVzKHBvc3RzWzBdLmNhdGVnb3JpZXMpLFxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIHJldHVybiB7IHByb3BzOiB7IHBvc3Q6IHBvc3RzWzBdLCBhdXRob3IsIHJlY2VudCB9LCByZXZhbGlkYXRlOiAxMCB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHByb3BzOiB7IHBvc3Q6IG51bGwsIGF1dGhvcjogbnVsbCwgcmVjZW50OiBbXSB9IH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbHVnO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9