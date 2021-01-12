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
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
              item: true,
              xs: 12,
              children: post.jetpack_featured_media_url ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: post.jetpack_featured_media_url,
                className: classes.centeredAndCropped
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 37
              }, _this) : null
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 29
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
                lineNumber: 84,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
                variant: "subtitle2",
                children: ["by", " ", "".concat(author.name, " on ").concat(new Date(post.date).toDateString())]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 29
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
                  lineNumber: 101,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
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
            lineNumber: 109,
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
                  lineNumber: 121,
                  columnNumber: 37
                }, _this)
              }, rec.id, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 33
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_general_space__WEBPACK_IMPORTED_MODULE_13__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 133,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3cy9bc2x1Z10uanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIndpZHRoIiwibWFyZ2luIiwiY3JvcCIsIm92ZXJmbG93IiwiY3JvcEltZyIsImhlaWdodCIsImNlbnRlcmVkQW5kQ3JvcHBlZCIsIm9iamVjdEZpdCIsIlNsdWciLCJwb3N0IiwiYXV0aG9yIiwicmVjZW50IiwiY2xhc3NlcyIsInJvdXRlciIsInVzZVJvdXRlciIsImlzRmFsbGJhY2siLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJqZXRwYWNrX2ZlYXR1cmVkX21lZGlhX3VybCIsInRpdGxlIiwicmVuZGVyZWQiLCJuYW1lIiwiRGF0ZSIsImRhdGUiLCJ0b0RhdGVTdHJpbmciLCJibG9ja3MiLCJtaW5XaWR0aCIsInBhZGRpbmciLCJtYXAiLCJyZWMiLCJwdXNoIiwic2x1ZyIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsU0FBSztBQUNuQ0MsUUFBSSxFQUFFO0FBQ0ZDLFdBQUssRUFBRSxLQURMO0FBRUZDLFlBQU0sRUFBRTtBQUZOLEtBRDZCO0FBS25DQyxRQUFJLEVBQUU7QUFDRkYsV0FBSyxFQUFFLE1BREw7QUFFRkcsY0FBUSxFQUFFO0FBRlIsS0FMNkI7QUFTbkNDLFdBQU8sRUFBRTtBQUNMSixXQUFLLEVBQUUsTUFERjtBQUVMSyxZQUFNLEVBQUU7QUFGSCxLQVQwQjtBQWFuQ0Msc0JBQWtCLEVBQUU7QUFDaEJDLGVBQVMsRUFBRSxPQURLO0FBRWhCUCxXQUFLLEVBQUUsTUFGUztBQUdoQkssWUFBTSxFQUFFO0FBSFE7QUFiZSxHQUFMO0FBQUEsQ0FBTixDQUE1Qjs7QUFvQkEsSUFBTUcsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBOEI7QUFBQTs7QUFBQSxNQUEzQkMsSUFBMkIsUUFBM0JBLElBQTJCO0FBQUEsTUFBckJDLE1BQXFCLFFBQXJCQSxNQUFxQjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUN2QyxNQUFNQyxPQUFPLEdBQUdoQixTQUFTLEVBQXpCO0FBQ0EsTUFBTWlCLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRUEsTUFBSUQsTUFBTSxDQUFDRSxVQUFYLEVBQXVCO0FBQ25CLHdCQUNJO0FBQUssZUFBUyxFQUFFSCxPQUFPLENBQUNiLElBQXhCO0FBQUEsNkJBQ0kscUVBQUMsOERBQUQ7QUFBTSxpQkFBUyxNQUFmO0FBQWdCLGlCQUFTLEVBQUMsS0FBMUI7QUFBZ0MsZUFBTyxFQUFDLFFBQXhDO0FBQUEsK0JBQ0kscUVBQUMsMkVBQUQ7QUFDSSxlQUFLLEVBQUU7QUFBRWlCLHFCQUFTLEVBQUUsR0FBYjtBQUFrQkMsd0JBQVksRUFBRTtBQUFoQztBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBU0g7O0FBRUQsTUFBSSxDQUFDUixJQUFMLEVBQVc7QUFDUCx3QkFDSTtBQUFBLDhCQUNJLHFFQUFDLGdEQUFEO0FBQUEsK0JBQ0k7QUFBTSxjQUFJLEVBQUMsUUFBWDtBQUFvQixpQkFBTyxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFJSSxxRUFBQyxpREFBRDtBQUFrQixrQkFBVSxFQUFFO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKSjtBQUFBLG9CQURKO0FBUUg7O0FBRUQsc0JBQ0k7QUFBSyxhQUFTLEVBQUVHLE9BQU8sQ0FBQ2IsSUFBeEI7QUFBQSw0QkFDSSxxRUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSSxxRUFBQyw4REFBRDtBQUFNLGVBQVMsTUFBZjtBQUFnQixhQUFPLEVBQUUsQ0FBekI7QUFBQSw4QkFDSSxxRUFBQyw4REFBRDtBQUFNLFlBQUksTUFBVjtBQUFXLFVBQUUsRUFBRSxDQUFmO0FBQUEsK0JBQ0kscUVBQUMsOERBQUQ7QUFBTSxtQkFBUyxNQUFmO0FBQUEsaUNBQ0kscUVBQUMsK0RBQUQ7QUFBQSxvQ0FDSSxxRUFBQyw4REFBRDtBQUFNLGtCQUFJLE1BQVY7QUFBVyxnQkFBRSxFQUFFLEVBQWY7QUFBQSx3QkFDS1UsSUFBSSxDQUFDUywwQkFBTCxnQkFDRztBQUNJLG1CQUFHLEVBQUVULElBQUksQ0FBQ1MsMEJBRGQ7QUFFSSx5QkFBUyxFQUFFTixPQUFPLENBQUNOO0FBRnZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREgsR0FLRztBQU5SO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFTSSxxRUFBQyw4REFBRDtBQUFNLGtCQUFJLE1BQVY7QUFBVyxnQkFBRSxFQUFFLEVBQWY7QUFBQSxzQ0FDSSxxRUFBQyxvRUFBRDtBQUNJLHVCQUFPLEVBQUMsSUFEWjtBQUVJLHlCQUFTLEVBQUMsSUFGZDtBQUdJLHFCQUFLLEVBQUU7QUFBRVcsOEJBQVksRUFBRTtBQUFoQixpQkFIWDtBQUFBLDBCQUtLUixJQUFJLENBQUNVLEtBQUwsQ0FBV0M7QUFMaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQVNJLHFFQUFDLG9FQUFEO0FBQVksdUJBQU8sRUFBQyxXQUFwQjtBQUFBLGlDQUNPLEdBRFAsWUFFUVYsTUFBTSxDQUFDVyxJQUZmLGlCQUUwQixJQUFJQyxJQUFKLENBQ2xCYixJQUFJLENBQUNjLElBRGEsRUFFcEJDLFlBRm9CLEVBRjFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEosZUF5QkkscUVBQUMsOERBQUQ7QUFBTSxrQkFBSSxNQUFWO0FBQVcsZ0JBQUUsRUFBRSxFQUFmO0FBQUEscUNBQ0kscUVBQUMsb0VBQUQ7QUFBWSx1QkFBTyxFQUFDLE9BQXBCO0FBQTRCLHlCQUFTLEVBQUMsS0FBdEM7QUFBQSx1Q0FDSSxxRUFBQyx1REFBRDtBQUFXLHdCQUFNLEVBQUVmLElBQUksQ0FBQ2dCO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF6Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQW9DSSxxRUFBQyw4REFBRDtBQUFNLFlBQUksTUFBVjtBQUFXLFVBQUUsRUFBRSxDQUFmO0FBQWtCLGFBQUssRUFBRTtBQUFFQyxrQkFBUSxFQUFFO0FBQVosU0FBekI7QUFBQSwrQkFDSSxxRUFBQywrREFBRDtBQUFPLGlCQUFPLEVBQUMsVUFBZjtBQUEwQixlQUFLLEVBQUU7QUFBRUMsbUJBQU8sRUFBRTtBQUFYLFdBQWpDO0FBQUEsa0NBQ0kscUVBQUMsb0VBQUQ7QUFBWSxtQkFBTyxFQUFDLElBQXBCO0FBQXlCLHFCQUFTLEVBQUMsSUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFJSSxxRUFBQyw4REFBRDtBQUFNLGlCQUFLLEVBQUU7QUFBRTNCLG1CQUFLLEVBQUU7QUFBVCxhQUFiO0FBQUEsc0JBQ0tXLE1BQU0sQ0FBQ2lCLEdBQVAsQ0FBVyxVQUFBQyxHQUFHO0FBQUEsa0NBQ1gscUVBQUMsbUVBQUQ7QUFFSSxzQkFBTSxNQUZWO0FBR0ksdUJBQU8sRUFBRTtBQUFBLHlCQUNMaEIsTUFBTSxDQUFDaUIsSUFBUCxpQkFBcUJELEdBQUcsQ0FBQ0UsSUFBekIsRUFESztBQUFBLGlCQUhiO0FBQUEsdUNBT0kscUVBQUMsdUVBQUQ7QUFDSSx5QkFBTyxFQUFFRixHQUFHLENBQUNWLEtBQUosQ0FBVUMsUUFEdkI7QUFFSSwyQkFBUyxFQUFFLElBQUlFLElBQUosQ0FDUE8sR0FBRyxDQUFDTixJQURHLEVBRVRDLFlBRlM7QUFGZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEosaUJBQ1NLLEdBQUcsQ0FBQ0csRUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURXO0FBQUEsYUFBZDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXBDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixlQWdFSSxxRUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEVKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBb0VILENBL0ZEOztHQUFNeEIsSTtVQUNjWixTLEVBQ0RrQixxRDs7O0tBRmJOLEk7O0FBNElTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9uZXdzL1tzbHVnXS4xZWM0MmE3ZTAyOTRhZTM1NTM4OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IERlZmF1bHRFcnJvclBhZ2UgZnJvbSBcIm5leHQvZXJyb3JcIjtcclxuXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIjtcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIjtcclxuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcclxuXHJcbmltcG9ydCBTcGFjZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9nZW5lcmFsL3NwYWNlXCI7XHJcblxyXG5pbXBvcnQgV1AgZnJvbSBcIi4uLy4uL3V0aWxzL3dvcmRwcmVzc1wiO1xyXG5pbXBvcnQgV1BHQmxvY2tzIGZyb20gXCJyZWFjdC1ndXRlbmJlcmdcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICB3aWR0aDogXCI5MCVcIixcclxuICAgICAgICBtYXJnaW46IFwiYXV0b1wiLFxyXG4gICAgfSxcclxuICAgIGNyb3A6IHtcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICB9LFxyXG4gICAgY3JvcEltZzoge1xyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICBoZWlnaHQ6IFwiNDAwcHhcIixcclxuICAgIH0sXHJcbiAgICBjZW50ZXJlZEFuZENyb3BwZWQ6IHtcclxuICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjMwMHB4XCIsXHJcbiAgICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBTbHVnID0gKHsgcG9zdCwgYXV0aG9yLCByZWNlbnQgfSkgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgaWYgKHJvdXRlci5pc0ZhbGxiYWNrKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwicm93XCIganVzdGlmeT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogMTAwLCBtYXJnaW5Cb3R0b206IDEwMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFwb3N0KSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwibm9pbmRleFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICA8RGVmYXVsdEVycm9yUGFnZSBzdGF0dXNDb2RlPXs0MDR9IC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgPFNwYWNlIC8+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LmpldHBhY2tfZmVhdHVyZWRfbWVkaWFfdXJsID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Bvc3QuamV0cGFja19mZWF0dXJlZF9tZWRpYV91cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2VudGVyZWRBbmRDcm9wcGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImg0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QudGl0bGUucmVuZGVyZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCR7YXV0aG9yLm5hbWV9IG9uICR7bmV3IERhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0LmRhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS50b0RhdGVTdHJpbmcoKX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdQR0Jsb2NrcyBibG9ja3M9e3Bvc3QuYmxvY2tzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs0fSBzdHlsZT17eyBtaW5XaWR0aDogXCIzMDBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYXBlciB2YXJpYW50PVwib3V0bGluZWRcIiBzdHlsZT17eyBwYWRkaW5nOiAyMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiaDRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlY2VudCBOZXdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3Qgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3JlY2VudC5tYXAocmVjID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtyZWMuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC9uZXdzLyR7cmVjLnNsdWd9YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT17cmVjLnRpdGxlLnJlbmRlcmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5PXtuZXcgRGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWMuZGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS50b0RhdGVTdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxTcGFjZSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICAgIGxldCBwb3N0cyA9IFtdO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBwb3N0cyA9IGF3YWl0IFdQLnBvc3RzKCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBwYXRocyA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IHBvc3Qgb2YgcG9zdHMpIHtcclxuICAgICAgICBwYXRocy5wdXNoKHtcclxuICAgICAgICAgICAgcGFyYW1zOiB7IHNsdWc6IHBvc3Quc2x1ZyB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogdHJ1ZSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgY3R4ID0+IHtcclxuICAgIGxldCBwb3N0cyA9IFtdO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgcG9zdHMgPSBhd2FpdCBXUC5wb3N0cygpLnNsdWcoY3R4LnBhcmFtcy5zbHVnKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBvc3RzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCBbYXV0aG9yLCByZWNlbnRdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICBXUC51c2VycygpLmlkKHBvc3RzWzBdLmF1dGhvciksXHJcbiAgICAgICAgICAgIFdQLnBvc3RzKClcclxuICAgICAgICAgICAgICAgIC5leGNsdWRlKHBvc3RzWzBdLmlkKVxyXG4gICAgICAgICAgICAgICAgLnBlclBhZ2UoNSlcclxuICAgICAgICAgICAgICAgIC5wYWdlKDEpXHJcbiAgICAgICAgICAgICAgICAuY2F0ZWdvcmllcyhwb3N0c1swXS5jYXRlZ29yaWVzKSxcclxuICAgICAgICBdKTtcclxuICAgICAgICByZXR1cm4geyBwcm9wczogeyBwb3N0OiBwb3N0c1swXSwgYXV0aG9yLCByZWNlbnQgfSwgcmV2YWxpZGF0ZTogMTAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBwcm9wczogeyBwb3N0OiBudWxsLCBhdXRob3I6IG51bGwsIHJlY2VudDogW10gfSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2x1ZztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==