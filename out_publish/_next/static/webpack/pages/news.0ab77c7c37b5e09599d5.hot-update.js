webpackHotUpdate_N_E("pages/news",{

/***/ "./components/news/news-card.js":
/*!**************************************!*\
  !*** ./components/news/news-card.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_ADDUCS_CSSEC_cssec_website_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");




var _jsxFileName = "D:\\ADDUCS\\CSSEC\\cssec-website\\components\\news\\news-card.js",
    _this = undefined,
    _s = $RefreshSig$();









var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  media: {
    height: 180
  },
  cardActionsStyle: {
    display: "flex",
    flexDirection: "row-reverse"
  }
});

var NewsCard = function NewsCard(_ref) {
  _s();

  var post = _ref.post,
      author = _ref.author,
      _ref$cssec = _ref.cssec,
      cssec = _ref$cssec === void 0 ? true : _ref$cssec;
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState2 = Object(D_ADDUCS_CSSEC_cssec_website_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      renderedExcerpt = _React$useState2[0],
      setRenderedExcerpt = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState4 = Object(D_ADDUCS_CSSEC_cssec_website_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      renderedTitle = _React$useState4[0],
      setRenderedTitle = _React$useState4[1];

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if ("rendered" in post.excerpt) {
      setRenderedExcerpt(post.excerpt.rendered);
    }
  }, [post.excerpt]);
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if ("rendered" in post.title) {
      setRenderedTitle(post.title.rendered);
    }
  }, [post.title]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.root,
    variant: "outlined",
    children: [cssec ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: classes.media,
      image: post.jetpack_featured_media_url !== "" ? post.jetpack_featured_media_url : "/logos/temp.jpg",
      title: renderedTitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
        variant: "h4",
        component: "h2",
        dangerouslySetInnerHTML: {
          __html: renderedTitle
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: classes.pos,
        color: "textSecondary",
        children: "".concat(author, "/").concat(post.date)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
        variant: "body1",
        component: "p",
        dangerouslySetInnerHTML: {
          __html: renderedExcerpt
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__["default"], {
      style: {
        display: "flex",
        flexDirection: "row-reverse"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        variant: "outlined",
        color: "primary",
        disableElevation: true,
        children: "Read More"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 9
  }, _this);
};

_s(NewsCard, "eVNUW6fZjV3FiNZLC4jZpXiy0W8=", false, function () {
  return [useStyles];
});

_c = NewsCard;
/* harmony default export */ __webpack_exports__["default"] = (NewsCard);

var _c;

$RefreshReg$(_c, "NewsCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uZXdzL25ld3MtY2FyZC5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsIm1pbldpZHRoIiwiYnVsbGV0IiwiZGlzcGxheSIsIm1hcmdpbiIsInRyYW5zZm9ybSIsInRpdGxlIiwiZm9udFNpemUiLCJwb3MiLCJtYXJnaW5Cb3R0b20iLCJtZWRpYSIsImhlaWdodCIsImNhcmRBY3Rpb25zU3R5bGUiLCJmbGV4RGlyZWN0aW9uIiwiTmV3c0NhcmQiLCJwb3N0IiwiYXV0aG9yIiwiY3NzZWMiLCJjbGFzc2VzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInJlbmRlcmVkRXhjZXJwdCIsInNldFJlbmRlcmVkRXhjZXJwdCIsInJlbmRlcmVkVGl0bGUiLCJzZXRSZW5kZXJlZFRpdGxlIiwidXNlRWZmZWN0IiwiZXhjZXJwdCIsInJlbmRlcmVkIiwiamV0cGFja19mZWF0dXJlZF9tZWRpYV91cmwiLCJfX2h0bWwiLCJkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUN6QkMsTUFBSSxFQUFFO0FBQ0ZDLFlBQVEsRUFBRTtBQURSLEdBRG1CO0FBSXpCQyxRQUFNLEVBQUU7QUFDSkMsV0FBTyxFQUFFLGNBREw7QUFFSkMsVUFBTSxFQUFFLE9BRko7QUFHSkMsYUFBUyxFQUFFO0FBSFAsR0FKaUI7QUFTekJDLE9BQUssRUFBRTtBQUNIQyxZQUFRLEVBQUU7QUFEUCxHQVRrQjtBQVl6QkMsS0FBRyxFQUFFO0FBQ0RDLGdCQUFZLEVBQUU7QUFEYixHQVpvQjtBQWV6QkMsT0FBSyxFQUFFO0FBQ0hDLFVBQU0sRUFBRTtBQURMLEdBZmtCO0FBa0J6QkMsa0JBQWdCLEVBQUU7QUFDZFQsV0FBTyxFQUFFLE1BREs7QUFFZFUsaUJBQWEsRUFBRTtBQUZEO0FBbEJPLENBQUQsQ0FBNUI7O0FBd0JBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQW9DO0FBQUE7O0FBQUEsTUFBakNDLElBQWlDLFFBQWpDQSxJQUFpQztBQUFBLE1BQTNCQyxNQUEyQixRQUEzQkEsTUFBMkI7QUFBQSx3QkFBbkJDLEtBQW1CO0FBQUEsTUFBbkJBLEtBQW1CLDJCQUFYLElBQVc7QUFDakQsTUFBTUMsT0FBTyxHQUFHcEIsU0FBUyxFQUF6Qjs7QUFEaUQsd0JBR0hxQiw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUhHO0FBQUE7QUFBQSxNQUcxQ0MsZUFIMEM7QUFBQSxNQUd6QkMsa0JBSHlCOztBQUFBLHlCQUlQSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUpPO0FBQUE7QUFBQSxNQUkxQ0csYUFKMEM7QUFBQSxNQUkzQkMsZ0JBSjJCOztBQU1qREwsOENBQUssQ0FBQ00sU0FBTixDQUFnQixZQUFNO0FBQ2xCLFFBQUksY0FBY1YsSUFBSSxDQUFDVyxPQUF2QixFQUFnQztBQUM1Qkosd0JBQWtCLENBQUNQLElBQUksQ0FBQ1csT0FBTCxDQUFhQyxRQUFkLENBQWxCO0FBQ0g7QUFDSixHQUpELEVBSUcsQ0FBQ1osSUFBSSxDQUFDVyxPQUFOLENBSkg7QUFNQVAsOENBQUssQ0FBQ00sU0FBTixDQUFnQixZQUFNO0FBQ2xCLFFBQUksY0FBY1YsSUFBSSxDQUFDVCxLQUF2QixFQUE4QjtBQUMxQmtCLHNCQUFnQixDQUFDVCxJQUFJLENBQUNULEtBQUwsQ0FBV3FCLFFBQVosQ0FBaEI7QUFDSDtBQUNKLEdBSkQsRUFJRyxDQUFDWixJQUFJLENBQUNULEtBQU4sQ0FKSDtBQU1BLHNCQUNJLHFFQUFDLDhEQUFEO0FBQU0sYUFBUyxFQUFFWSxPQUFPLENBQUNsQixJQUF6QjtBQUErQixXQUFPLEVBQUMsVUFBdkM7QUFBQSxlQUNLaUIsS0FBSyxnQkFDRixxRUFBQyxtRUFBRDtBQUNJLGVBQVMsRUFBRUMsT0FBTyxDQUFDUixLQUR2QjtBQUVJLFdBQUssRUFDREssSUFBSSxDQUFDYSwwQkFBTCxLQUFvQyxFQUFwQyxHQUNNYixJQUFJLENBQUNhLDBCQURYLEdBRU0saUJBTGQ7QUFPSSxXQUFLLEVBQUVMO0FBUFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURFLGdCQVdGLHVKQVpSLGVBY0kscUVBQUMscUVBQUQ7QUFBQSw4QkFDSSxxRUFBQyxvRUFBRDtBQUNJLGVBQU8sRUFBQyxJQURaO0FBRUksaUJBQVMsRUFBQyxJQUZkO0FBR0ksK0JBQXVCLEVBQUU7QUFBRU0sZ0JBQU0sRUFBRU47QUFBVjtBQUg3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFNSSxxRUFBQyxvRUFBRDtBQUFZLGlCQUFTLEVBQUVMLE9BQU8sQ0FBQ1YsR0FBL0I7QUFBb0MsYUFBSyxFQUFDLGVBQTFDO0FBQUEsNEJBQ1FRLE1BRFIsY0FDa0JELElBQUksQ0FBQ2UsSUFEdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkosZUFTSSxxRUFBQyxvRUFBRDtBQUNJLGVBQU8sRUFBQyxPQURaO0FBRUksaUJBQVMsRUFBQyxHQUZkO0FBR0ksK0JBQXVCLEVBQUU7QUFBRUQsZ0JBQU0sRUFBRVI7QUFBVjtBQUg3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZEosZUE2QkkscUVBQUMscUVBQUQ7QUFDSSxXQUFLLEVBQUU7QUFBRWxCLGVBQU8sRUFBRSxNQUFYO0FBQW1CVSxxQkFBYSxFQUFFO0FBQWxDLE9BRFg7QUFBQSw2QkFHSSxxRUFBQyxnRUFBRDtBQUFRLGVBQU8sRUFBQyxVQUFoQjtBQUEyQixhQUFLLEVBQUMsU0FBakM7QUFBMkMsd0JBQWdCLE1BQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTdCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXVDSCxDQXpERDs7R0FBTUMsUTtVQUNjaEIsUzs7O0tBRGRnQixRO0FBMkRTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9uZXdzLjBhYjc3YzdjMzdiNWUwOTU5OWQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkXCI7XHJcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnNcIjtcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudFwiO1xyXG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWFcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBtaW5XaWR0aDogMjc1LFxyXG4gICAgfSxcclxuICAgIGJ1bGxldDoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICAgICAgbWFyZ2luOiBcIjAgMnB4XCIsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInNjYWxlKDAuOClcIixcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgIH0sXHJcbiAgICBwb3M6IHtcclxuICAgICAgICBtYXJnaW5Cb3R0b206IDEyLFxyXG4gICAgfSxcclxuICAgIG1lZGlhOiB7XHJcbiAgICAgICAgaGVpZ2h0OiAxODAsXHJcbiAgICB9LFxyXG4gICAgY2FyZEFjdGlvbnNTdHlsZToge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93LXJldmVyc2VcIixcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgTmV3c0NhcmQgPSAoeyBwb3N0LCBhdXRob3IsIGNzc2VjID0gdHJ1ZSB9KSA9PiB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3QgW3JlbmRlcmVkRXhjZXJwdCwgc2V0UmVuZGVyZWRFeGNlcnB0XSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3JlbmRlcmVkVGl0bGUsIHNldFJlbmRlcmVkVGl0bGVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoXCJyZW5kZXJlZFwiIGluIHBvc3QuZXhjZXJwdCkge1xyXG4gICAgICAgICAgICBzZXRSZW5kZXJlZEV4Y2VycHQocG9zdC5leGNlcnB0LnJlbmRlcmVkKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcG9zdC5leGNlcnB0XSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoXCJyZW5kZXJlZFwiIGluIHBvc3QudGl0bGUpIHtcclxuICAgICAgICAgICAgc2V0UmVuZGVyZWRUaXRsZShwb3N0LnRpdGxlLnJlbmRlcmVkKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcG9zdC50aXRsZV0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlxyXG4gICAgICAgICAgICB7Y3NzZWMgPyAoXHJcbiAgICAgICAgICAgICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lZGlhfVxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdC5qZXRwYWNrX2ZlYXR1cmVkX21lZGlhX3VybCAhPT0gXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwb3N0LmpldHBhY2tfZmVhdHVyZWRfbWVkaWFfdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiL2xvZ29zL3RlbXAuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3JlbmRlcmVkVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPD48Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImgyXCJcclxuICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHJlbmRlcmVkVGl0bGUgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMucG9zfSBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICB7YCR7YXV0aG9yfS8ke3Bvc3QuZGF0ZX1gfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcmVuZGVyZWRFeGNlcnB0IH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICA8Q2FyZEFjdGlvbnNcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvdy1yZXZlcnNlXCIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBkaXNhYmxlRWxldmF0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWQgTW9yZVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld3NDYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9