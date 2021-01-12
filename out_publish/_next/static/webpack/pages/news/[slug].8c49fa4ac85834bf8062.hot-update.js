webpackHotUpdate_N_E("pages/news/[slug]",{

/***/ "./node_modules/@loadable/component/dist/loadable.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@loadable/component/dist/loadable.esm.js ***!
  \***************************************************************/
/*! exports provided: default, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, lazy, loadableReady */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED", function() { return __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazy", function() { return lazy$2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadableReady", function() { return loadableReady; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);








/* eslint-disable import/prefer-default-export */
function invariant(condition, message) {
  if (condition) return;
  var error = new Error("loadable: " + message);
  error.framesToPop = 1;
  error.name = 'Invariant Violation';
  throw error;
}
function warn(message) {
  // eslint-disable-next-line no-console
  console.warn("loadable: " + message);
}

var Context = /*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();

var LOADABLE_REQUIRED_CHUNKS_KEY = '__LOADABLE_REQUIRED_CHUNKS__';
function getRequiredChunkKey(namespace) {
  return "" + namespace + LOADABLE_REQUIRED_CHUNKS_KEY;
}

var sharedInternals = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getRequiredChunkKey: getRequiredChunkKey,
  invariant: invariant,
  Context: Context
});

var LOADABLE_SHARED = {
  initialChunks: {}
};

var STATUS_PENDING = 'PENDING';
var STATUS_RESOLVED = 'RESOLVED';
var STATUS_REJECTED = 'REJECTED';

function resolveConstructor(ctor) {
  if (typeof ctor === 'function') {
    return {
      requireAsync: ctor,
      resolve: function resolve() {
        return undefined;
      },
      chunkName: function chunkName() {
        return undefined;
      }
    };
  }

  return ctor;
}

var withChunkExtractor = function withChunkExtractor(Component) {
  return function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Context.Consumer, null, function (extractor) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, Object.assign({
        __chunkExtractor: extractor
      }, props));
    });
  };
};

var identity = function identity(v) {
  return v;
};

function createLoadable(_ref) {
  var _ref$defaultResolveCo = _ref.defaultResolveComponent,
      defaultResolveComponent = _ref$defaultResolveCo === void 0 ? identity : _ref$defaultResolveCo,
      _render = _ref.render,
      onLoad = _ref.onLoad;

  function loadable(loadableConstructor, options) {
    if (options === void 0) {
      options = {};
    }

    var ctor = resolveConstructor(loadableConstructor);
    var cache = {};
    /**
     * Cachekey represents the component to be loaded
     * if key changes - component has to be reloaded
     * @param props
     * @returns {null|Component}
     */

    function _getCacheKey(props) {
      if (options.cacheKey) {
        return options.cacheKey(props);
      }

      if (ctor.resolve) {
        return ctor.resolve(props);
      }

      return 'static';
    }
    /**
     * Resolves loaded `module` to a specific `Component
     * @param module
     * @param props
     * @param Loadable
     * @returns Component
     */


    function resolve(module, props, Loadable) {
      var Component = options.resolveComponent ? options.resolveComponent(module, props) : defaultResolveComponent(module);

      if (options.resolveComponent && !Object(react_is__WEBPACK_IMPORTED_MODULE_5__["isValidElementType"])(Component)) {
        throw new Error("resolveComponent returned something that is not a React component!");
      }

      hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(Loadable, Component, {
        preload: true
      });
      return Component;
    }

    var InnerLoadable =
    /*#__PURE__*/
    function (_React$Component) {
      Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__["default"])(InnerLoadable, _React$Component);

      InnerLoadable.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
        var cacheKey = _getCacheKey(props);

        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
          cacheKey: cacheKey,
          // change of a key triggers loading state automatically
          loading: state.loading || state.cacheKey !== cacheKey
        });
      };

      function InnerLoadable(props) {
        var _this;

        _this = _React$Component.call(this, props) || this;
        _this.state = {
          result: null,
          error: null,
          loading: true,
          cacheKey: _getCacheKey(props)
        };
        invariant(!props.__chunkExtractor || ctor.requireSync, 'SSR requires `@loadable/babel-plugin`, please install it'); // Server-side

        if (props.__chunkExtractor) {
          // This module has been marked with no SSR
          if (options.ssr === false) {
            return Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this);
          } // We run load function, we assume that it won't fail and that it
          // triggers a synchronous loading of the module


          ctor.requireAsync(props)["catch"](function () {
            return null;
          }); // So we can require now the module synchronously

          _this.loadSync();

          props.__chunkExtractor.addChunk(ctor.chunkName(props));

          return Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this);
        } // Client-side with `isReady` method present (SSR probably)
        // If module is already loaded, we use a synchronous loading
        // Only perform this synchronous loading if the component has not
        // been marked with no SSR, else we risk hydration mismatches


        if (options.ssr !== false && ( // is ready - was loaded in this session
        ctor.isReady && ctor.isReady(props) || // is ready - was loaded during SSR process
        ctor.chunkName && LOADABLE_SHARED.initialChunks[ctor.chunkName(props)])) {
          _this.loadSync();
        }

        return _this;
      }

      var _proto = InnerLoadable.prototype;

      _proto.componentDidMount = function componentDidMount() {
        this.mounted = true; // retrieve loading promise from a global cache

        var cachedPromise = this.getCache(); // if promise exists, but rejected - clear cache

        if (cachedPromise && cachedPromise.status === STATUS_REJECTED) {
          this.setCache();
        } // component might be resolved synchronously in the constructor


        if (this.state.loading) {
          this.loadAsync();
        }
      };

      _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
        // Component has to be reloaded on cacheKey change
        if (prevState.cacheKey !== this.state.cacheKey) {
          this.loadAsync();
        }
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        this.mounted = false;
      };

      _proto.safeSetState = function safeSetState(nextState, callback) {
        if (this.mounted) {
          this.setState(nextState, callback);
        }
      }
      /**
       * returns a cache key for the current props
       * @returns {Component|string}
       */
      ;

      _proto.getCacheKey = function getCacheKey() {
        return _getCacheKey(this.props);
      }
      /**
       * access the persistent cache
       */
      ;

      _proto.getCache = function getCache() {
        return cache[this.getCacheKey()];
      }
      /**
       * sets the cache value. If called without value sets it as undefined
       */
      ;

      _proto.setCache = function setCache(value) {
        if (value === void 0) {
          value = undefined;
        }

        cache[this.getCacheKey()] = value;
      };

      _proto.triggerOnLoad = function triggerOnLoad() {
        var _this2 = this;

        if (onLoad) {
          setTimeout(function () {
            onLoad(_this2.state.result, _this2.props);
          });
        }
      }
      /**
       * Synchronously loads component
       * target module is expected to already exists in the module cache
       * or be capable to resolve synchronously (webpack target=node)
       */
      ;

      _proto.loadSync = function loadSync() {
        // load sync is expecting component to be in the "loading" state already
        // sounds weird, but loading=true is the initial state of InnerLoadable
        if (!this.state.loading) return;

        try {
          var loadedModule = ctor.requireSync(this.props);
          var result = resolve(loadedModule, this.props, Loadable);
          this.state.result = result;
          this.state.loading = false;
        } catch (error) {
          console.error('loadable-components: failed to synchronously load component, which expected to be available', {
            fileName: ctor.resolve(this.props),
            chunkName: ctor.chunkName(this.props),
            error: error ? error.message : error
          });
          this.state.error = error;
        }
      }
      /**
       * Asynchronously loads a component.
       */
      ;

      _proto.loadAsync = function loadAsync() {
        var _this3 = this;

        var promise = this.resolveAsync();
        promise.then(function (loadedModule) {
          var result = resolve(loadedModule, _this3.props, {
            Loadable: Loadable
          });

          _this3.safeSetState({
            result: result,
            loading: false
          }, function () {
            return _this3.triggerOnLoad();
          });
        })["catch"](function (error) {
          return _this3.safeSetState({
            error: error,
            loading: false
          });
        });
        return promise;
      }
      /**
       * Asynchronously resolves(not loads) a component.
       * Note - this function does not change the state
       */
      ;

      _proto.resolveAsync = function resolveAsync() {
        var _this4 = this;

        var _this$props = this.props,
            __chunkExtractor = _this$props.__chunkExtractor,
            forwardedRef = _this$props.forwardedRef,
            props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["__chunkExtractor", "forwardedRef"]);

        var promise = this.getCache();

        if (!promise) {
          promise = ctor.requireAsync(props);
          promise.status = STATUS_PENDING;
          this.setCache(promise);
          promise.then(function () {
            promise.status = STATUS_RESOLVED;
          }, function (error) {
            console.error('loadable-components: failed to asynchronously load component', {
              fileName: ctor.resolve(_this4.props),
              chunkName: ctor.chunkName(_this4.props),
              error: error ? error.message : error
            });
            promise.status = STATUS_REJECTED;
          });
        }

        return promise;
      };

      _proto.render = function render() {
        var _this$props2 = this.props,
            forwardedRef = _this$props2.forwardedRef,
            propFallback = _this$props2.fallback,
            __chunkExtractor = _this$props2.__chunkExtractor,
            props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props2, ["forwardedRef", "fallback", "__chunkExtractor"]);

        var _this$state = this.state,
            error = _this$state.error,
            loading = _this$state.loading,
            result = _this$state.result;

        if (options.suspense) {
          var cachedPromise = this.getCache() || this.loadAsync();

          if (cachedPromise.status === STATUS_PENDING) {
            throw this.loadAsync();
          }
        }

        if (error) {
          throw error;
        }

        var fallback = propFallback || options.fallback || null;

        if (loading) {
          return fallback;
        }

        return _render({
          fallback: fallback,
          result: result,
          options: options,
          props: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
            ref: forwardedRef
          })
        });
      };

      return InnerLoadable;
    }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

    var EnhancedInnerLoadable = withChunkExtractor(InnerLoadable);
    var Loadable = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EnhancedInnerLoadable, Object.assign({
        forwardedRef: ref
      }, props));
    }); // In future, preload could use `<link rel="preload">`

    Loadable.preload = function (props) {
      ctor.requireAsync(props);
    };

    Loadable.load = function (props) {
      return ctor.requireAsync(props);
    };

    return Loadable;
  }

  function lazy(ctor, options) {
    return loadable(ctor, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, options, {
      suspense: true
    }));
  }

  return {
    loadable: loadable,
    lazy: lazy
  };
}

function defaultResolveComponent(loadedModule) {
  // eslint-disable-next-line no-underscore-dangle
  return loadedModule.__esModule ? loadedModule["default"] : loadedModule["default"] || loadedModule;
}

/* eslint-disable no-use-before-define, react/no-multi-comp */

var _createLoadable =
/*#__PURE__*/
createLoadable({
  defaultResolveComponent: defaultResolveComponent,
  render: function render(_ref) {
    var Component = _ref.result,
        props = _ref.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, props);
  }
}),
    loadable = _createLoadable.loadable,
    lazy = _createLoadable.lazy;

/* eslint-disable no-use-before-define, react/no-multi-comp */

var _createLoadable$1 =
/*#__PURE__*/
createLoadable({
  onLoad: function onLoad(result, props) {
    if (result && props.forwardedRef) {
      if (typeof props.forwardedRef === 'function') {
        props.forwardedRef(result);
      } else {
        props.forwardedRef.current = result;
      }
    }
  },
  render: function render(_ref) {
    var result = _ref.result,
        props = _ref.props;

    if (props.children) {
      return props.children(result);
    }

    return null;
  }
}),
    loadable$1 = _createLoadable$1.loadable,
    lazy$1 = _createLoadable$1.lazy;

/* eslint-disable no-underscore-dangle, camelcase */
var BROWSER = typeof window !== 'undefined';
function loadableReady(done, _temp) {
  if (done === void 0) {
    done = function done() {};
  }

  var _ref = _temp === void 0 ? {} : _temp,
      _ref$namespace = _ref.namespace,
      namespace = _ref$namespace === void 0 ? '' : _ref$namespace;

  if (!BROWSER) {
    warn('`loadableReady()` must be called in browser only');
    done();
    return Promise.resolve();
  }

  var requiredChunks = null;

  if (BROWSER) {
    var id = getRequiredChunkKey(namespace);
    var dataElement = document.getElementById(id);

    if (dataElement) {
      requiredChunks = JSON.parse(dataElement.textContent);
      var extElement = document.getElementById(id + "_ext");

      if (extElement) {
        var _JSON$parse = JSON.parse(extElement.textContent),
            namedChunks = _JSON$parse.namedChunks;

        namedChunks.forEach(function (chunkName) {
          LOADABLE_SHARED.initialChunks[chunkName] = true;
        });
      } else {
        // version mismatch
        throw new Error('loadable-component: @loadable/server does not match @loadable/component');
      }
    }
  }

  if (!requiredChunks) {
    warn('`loadableReady()` requires state, please use `getScriptTags` or `getScriptElements` server-side');
    done();
    return Promise.resolve();
  }

  var resolved = false;
  return new Promise(function (resolve) {
    window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || [];
    var loadedChunks = window.__LOADABLE_LOADED_CHUNKS__;
    var originalPush = loadedChunks.push.bind(loadedChunks);

    function checkReadyState() {
      if (requiredChunks.every(function (chunk) {
        return loadedChunks.some(function (_ref2) {
          var chunks = _ref2[0];
          return chunks.indexOf(chunk) > -1;
        });
      })) {
        if (!resolved) {
          resolved = true;
          resolve();
        }
      }
    }

    loadedChunks.push = function () {
      originalPush.apply(void 0, arguments);
      checkReadyState();
    };

    checkReadyState();
  }).then(done);
}

/* eslint-disable no-underscore-dangle */
var loadable$2 = loadable;
loadable$2.lib = loadable$1;
var lazy$2 = lazy;
lazy$2.lib = lazy$1;
var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sharedInternals;

/* harmony default export */ __webpack_exports__["default"] = (loadable$2);



/***/ }),

/***/ "./node_modules/react-gutenberg/dist/blocks/common/audio.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-gutenberg/dist/blocks/common/audio.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react-gutenberg/node_modules/react/index.js");
const WPGAudioBlock = (props) => {
    const { 
    // attrs,
    // innerBlocks,
    innerHTML } = props;
    return (React.createElement("div", { className: "wpg-block wpg-b_audio", dangerouslySetInnerHTML: { __html: innerHTML } }));
};
exports.default = WPGAudioBlock;
//# sourceMappingURL=audio.js.map

/***/ }),

/***/ "./node_modules/react-gutenberg/dist/blocks/common/cover.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-gutenberg/dist/blocks/common/cover.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react-gutenberg/node_modules/react/index.js");
const WPGCoverBlock = (props) => {
    const { 
    // attrs,
    // innerBlocks,
    innerHTML } = props;
    return (React.createElement("div", { className: "wpg-block wpg-b_cover", dangerouslySetInnerHTML: { __html: innerHTML } }));
};
exports.default = WPGCoverBlock;
//# sourceMappingURL=cover.js.map

/***/ }),

/***/ "./node_modules/react-gutenberg/dist/blocks/common/file.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-gutenberg/dist/blocks/common/file.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react-gutenberg/node_modules/react/index.js");
const WPGFileBlock = (props) => {
    const { 
    // attrs,
    // innerBlocks,
    innerHTML } = props;
    return (React.createElement("div", { className: "wpg-block wpg-b_file", dangerouslySetInnerHTML: { __html: innerHTML } }));
};
exports.default = WPGFileBlock;
//# sourceMappingURL=file.js.map

/***/ }),

/***/ "./node_modules/react-gutenberg/dist/blocks/common/gallery.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-gutenberg/dist/blocks/common/gallery.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react-gutenberg/node_modules/react/index.js");
const WPGGalleryBlock = (props) => {
    const { 
    // attrs,
    // innerBlocks,
    innerHTML } = props;
    return (React.createElement("div", { className: "wpg-block wpg-b_gallery", dangerouslySetInnerHTML: { __html: innerHTML } }));
};
exports.default = WPGGalleryBlock;
//# sourceMappingURL=gallery.js.map

/***/ }),

/***/ "./node_modules/react-gutenberg/dist/blocks/common/heading.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-gutenberg/dist/blocks/common/heading.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react-gutenberg/node_modules/react/index.js");
const WPGHeadingBlock = (props) => {
    const { 
    // attrs,
    // innerBlocks,
    innerHTML } = props;
    return (React.createElement("div", { className: "wpg-block wpg-b_heading", dangerouslySetInnerHTML: { __html: innerHTML } }));
};
exports.default = WPGHeadingBlock;
//# sourceMappingURL=heading.js.map

/***/ }),

/***/ "./node_modules/react-gutenberg/dist/blocks/common/image.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-gutenberg/dist/blocks/common/image.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react-gutenberg/node_modules/react/index.js");
const WPGImageBlock = (props) => {
    const { 
    // attrs,
    // innerBlocks,
    innerHTML } = props;
    return (React.createElement("div", { className: "wpg-block wpg-b_image", dangerouslySetInnerHTML: { __html: innerHTML } }));
};
exports.default = WPGImageBlock;
//# sourceMappingURL=image.js.map

/***/ }),

/***/ "./node_modules/react-gutenberg/dist/blocks/common/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-gutenberg/dist/blocks/common/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.js");
const Audio = component_1.default(() => Promise.resolve().then(() => __webpack_require__(/*! ./audio */ "./node_modules/react-gutenberg/dist/blocks/common/audio.js")));
const Cover = component_1.default(() => Promise.resolve().then(() => __webpack_require__(/*! ./cover */ "./node_modules/react-gutenberg/dist/blocks/common/cover.js")));
const File = component_1.default(() => Promise.resolve().then(() => __webpack_require__(/*! ./file */ "./node_modules/react-gutenberg/dist/blocks/common/file.js")));
const Gallery = component_1.default(() => Promise.resolve().then(() => __webpack_require__(/*! ./gallery */ "./node_modules/react-gutenberg/dist/blocks/common/gallery.js")));
const Heading = component_1.default(() => Promise.resolve().then(() => __webpack_require__(/*! ./heading */ "./node_modules/react-gutenberg/dist/blocks/common/heading.js")));
const Image = component_1.default(() => Promise.resolve().then(() => __webpack_require__(/*! ./image */ "./node_modules/react-gutenberg/dist/blocks/common/image.js")));
const List = component_1.default(() => Promise.resolve().then(() => __webpack_require__(/*! ./list */ "./node_modules/react-gutenberg/dist/blocks/common/list.js")));
const Paragraph = component_1.default(() => Promise.resolve().then(() => __webpack_require__(/*! ./paragraph */ "./node_modules/react-gutenberg/dist/blocks/common/paragraph.js")));
const Quote = component_1.default(() => Promise.resolve().then(() => __webpack_require__(/*! ./quote */ "./node_modules/react-gutenberg/dist/blocks/common/quote.js")));
const Video = component_1.default(() => Promise.resolve().then(() => __webpack_require__(/*! ./video */ "./node_modules/react-gutenberg/dist/blocks/common/video.js")));
exports.default = {
    Audio,
    Cover,
    File,
    Gallery,
    Heading,
    Image,
    List,
    Paragraph,
    Quote,
    Video
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-gutenberg/dist/blocks/common/list.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-gutenberg/dist/blocks/common/list.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react-gutenberg/node_modules/react/index.js");
const WPGListBlock = (props) => {
    const { 
    // attrs,
    // innerBlocks,
    innerHTML } = props;
    return (React.createElement("div", { className: "wpg-block wpg-b_list", dangerouslySetInnerHTML: { __html: innerHTML } }));
};
exports.default = WPGListBlock;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ "./node_modules/react-gutenberg/dist/blocks/common/paragraph.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-gutenberg/dist/blocks/common/paragraph.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react-gutenberg/node_modules/react/index.js");
const WPGParagraphBlock = (props) => {
    const { 
    // attrs,
    // innerBlocks,
    innerHTML } = props;
    return (React.createElement("div", { className: "wpg-block wpg-b_paragraph", dangerouslySetInnerHTML: { __html: innerHTML } }));
};
exports.default = WPGParagraphBlock;
//# sourceMappingURL=paragraph.js.map

/***/ }),

/***/ "./node_modules/react-gutenberg/dist/blocks/common/quote.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-gutenberg/dist/blocks/common/quote.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react-gutenberg/node_modules/react/index.js");
const WPGQuoteBlock = (props) => {
    const { 
    // attrs,
    // innerBlocks,
    innerHTML } = props;
    return (React.createElement("div", { className: "wpg-block wpg-b_quote", dangerouslySetInnerHTML: { __html: innerHTML } }));
};
exports.default = WPGQuoteBlock;
//# sourceMappingURL=quote.js.map

/***/ }),

/***/ "./node_modules/react-gutenberg/dist/blocks/common/video.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-gutenberg/dist/blocks/common/video.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react-gutenberg/node_modules/react/index.js");
const WPGVideoBlock = (props) => {
    const { 
    // attrs,
    // innerBlocks,
    innerHTML } = props;
    return (React.createElement("div", { className: "wpg-block wpg-b_video", dangerouslySetInnerHTML: { __html: innerHTML } }));
};
exports.default = WPGVideoBlock;
//# sourceMappingURL=video.js.map

/***/ }),

/***/ "./node_modules/react-gutenberg/dist/blocks/format/code.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-gutenberg/dist/blocks/format/code.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react-gutenberg/node_modules/react/index.js");
const WPGCodeBlock = (props) => {
    const { 
    // attrs,
    // innerBlocks,
    innerHTML } = props;
    return (React.createElement("div", { className: "wpg-block wpg-b_Code", dangerouslySetInnerHTML: { __html: innerHTML } }));
};
exports.default = WPGCodeBlock;
//# sourceMappingURL=code.js.map

/***/ }),

/***/ "./node_modules/react-gutenberg/dist/blocks/format/html.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-gutenberg/dist/blocks/format/html.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react-gutenberg/node_modules/react/index.js");
class WPGHtmlBlock extends React.Component {
    constructor() {
        super(...arguments);
        this.id = Math.floor(Math.random() * 100000);
    }
    componentDidMount() {
        document.querySelectorAll(`[data-script="${this.id}"]`).forEach(script => {
            window.eval(script.innerHTML);
        });
    }
    render() {
        const { 
        // attrs,
        // innerBlocks,
        innerHTML } = this.props;
        const scriptHtml = innerHTML.replace(/<script(>|\s)/gm, `<script data-script="${this.id}"$1`);
        return (React.createElement("div", { className: "wpg-block wpg-b_html", dangerouslySetInnerHTML: { __html: scriptHtml } }));
    }
}
exports.default = WPGHtmlBlock;
//# sourceMappingURL=html.js.map

/***/ }),

/***/ "./node_modules/react-gutenberg/dist/blocks/format/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-gutenberg/dist/blocks/format/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.js");
const Code = component_1.default(() => Promise.resolve().then(() => __webpack_require__(/*! ./code */ "./node_modules/react-gutenberg/dist/blocks/format/code.js")));
const Html = component_1.default(() => Promise.resolve().then(() => __webpack_require__(/*! ./html */ "./node_modules/react-gutenberg/dist/blocks/format/html.js")));
const Preformatted = component_1.default(() => Promise.resolve().then(() => __webpack_require__(/*! ./preformatted */ "./node_modules/react-gutenberg/dist/blocks/format/preformatted.js")));
const Pullquote = component_1.default(() => Promise.resolve().then(() => __webpack_require__(/*! ./pullquote */ "./node_modules/react-gutenberg/dist/blocks/format/pullquote.js")));
exports.default = {
    Code,
    Html,
    Preformatted,
    Pullquote
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-gutenberg/dist/blocks/format/preformatted.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-gutenberg/dist/blocks/format/preformatted.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react-gutenberg/node_modules/react/index.js");
const WPGPreformattedBlock = (props) => {
    const { 
    // attrs,
    // innerBlocks,
    innerHTML } = props;
    return (React.createElement("div", { className: "wpg-block wpg-b_preformatted", dangerouslySetInnerHTML: { __html: innerHTML } }));
};
exports.default = WPGPreformattedBlock;
//# sourceMappingURL=preformatted.js.map

/***/ }),

/***/ "./node_modules/react-gutenberg/dist/blocks/format/pullquote.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-gutenberg/dist/blocks/format/pullquote.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react-gutenberg/node_modules/react/index.js");
const WPGPullquoteBlock = (props) => {
    const { 
    // attrs,
    // innerBlocks,
    innerHTML } = props;
    return (React.createElement("div", { className: "wpg-block wpg-b_pullquote", dangerouslySetInnerHTML: { __html: innerHTML } }));
};
exports.default = WPGPullquoteBlock;
//# sourceMappingURL=pullquote.js.map

/***/ }),

/***/ "./node_modules/react-gutenberg/dist/blocks/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-gutenberg/dist/blocks/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.js");
const common_1 = __webpack_require__(/*! ./common */ "./node_modules/react-gutenberg/dist/blocks/common/index.js");
const format_1 = __webpack_require__(/*! ./format */ "./node_modules/react-gutenberg/dist/blocks/format/index.js");
const layout_1 = __webpack_require__(/*! ./layout */ "./node_modules/react-gutenberg/dist/blocks/layout/index.js");
const DefaultHtmlBlock = component_1.default(() => Promise.resolve().then(() => __webpack_require__(/*! ./format/html */ "./node_modules/react-gutenberg/dist/blocks/format/html.js")));
function GetTheBlock(name) {
    switch (name) {
        case 'core/audio': return common_1.default.Audio;
        case 'core/cover': return common_1.default.Cover;
        case 'core/file': return common_1.default.File;
        case 'core/gallery': return common_1.default.Gallery;
        case 'core/heading': return common_1.default.Heading;
        case 'core/image': return common_1.default.Image;
        case 'core/list': return common_1.default.List;
        case 'core/paragraph': return common_1.default.Paragraph;
        case 'core/quote': return common_1.default.Quote;
        case 'core/video': return common_1.default.Video;
        case 'core/code': return format_1.default.Code;
        case 'core/html': return format_1.default.Html;
        case 'core/preformatted': return format_1.default.Preformatted;
        case 'core/pullquote': return format_1.default.Pullquote;
        case 'core/columns': return layout_1.default.Columns;
        default: return DefaultHtmlBlock;
    }
}
exports.GetTheBlock = GetTheBlock;
exports.default = Object.assign({}, common_1.default, format_1.default);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-gutenberg/dist/blocks/layout/columns.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-gutenberg/dist/blocks/layout/columns.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react-gutenberg/node_modules/react/index.js");
const index_1 = __webpack_require__(/*! ../../index */ "./node_modules/react-gutenberg/dist/index.js");
const WPGColumnsBlock = (props) => {
    const { 
    // attrs,
    innerBlocks, } = props;
    if (!Array.isArray(innerBlocks)) {
        console.warn('Columns should have innerBlocks');
        return null;
    }
    const cols = innerBlocks.length;
    const columns = innerBlocks.map((col, ci) => React.createElement("div", { className: `wp-block-column ${ci + 1}-column` }, col.innerBlocks.map((block, bi) => React.createElement(index_1.WPGBlock, { key: bi, block: block }))));
    return (React.createElement("div", { className: `wp-block-columns has-${cols}-columns` }, columns));
};
exports.default = WPGColumnsBlock;
//# sourceMappingURL=columns.js.map

/***/ }),

/***/ "./node_modules/react-gutenberg/dist/blocks/layout/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-gutenberg/dist/blocks/layout/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.js");
const Columns = component_1.default(() => Promise.resolve().then(() => __webpack_require__(/*! ./columns */ "./node_modules/react-gutenberg/dist/blocks/layout/columns.js")));
exports.default = {
    Columns
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-gutenberg/dist/index.js":
/*!****************************************************!*\
  !*** ./node_modules/react-gutenberg/dist/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react-gutenberg/node_modules/react/index.js");
const blocks_1 = __webpack_require__(/*! ./blocks */ "./node_modules/react-gutenberg/dist/blocks/index.js");
const WPGBlocks = ({ blocks, mapToBlock }) => {
    return (React.createElement("div", { className: "wpg-blocks" }, blocks.filter(block => !!block.blockName).map((block, index) => React.createElement(exports.WPGBlock, { key: index, block: block, mapToBlock: mapToBlock }))));
};
exports.WPGBlock = ({ block, mapToBlock }) => {
    const { blockName, attrs, innerBlocks, innerHTML } = block;
    if (!blockName)
        return null;
    if (mapToBlock)
        exports.WPGBlock.MapToBlock = mapToBlock;
    let TheBlock = exports.WPGBlock.MapToBlock ? exports.WPGBlock.MapToBlock(blockName) : null;
    if (!TheBlock)
        TheBlock = blocks_1.GetTheBlock(blockName);
    if (!TheBlock)
        return null;
    return (React.createElement(TheBlock, { blockName: blockName, attrs: attrs, innerBlocks: innerBlocks, innerHTML: innerHTML }));
};
exports.default = WPGBlocks;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-gutenberg/index.js":
/*!***********************************************!*\
  !*** ./node_modules/react-gutenberg/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;
module.exports = __webpack_require__(/*! ./dist */ "./node_modules/react-gutenberg/dist/index.js");


/***/ }),

/***/ "./node_modules/react-gutenberg/node_modules/react/cjs/react.development.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/react-gutenberg/node_modules/react/cjs/react.development.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.14.0
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var ReactVersion = '16.14.0';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  suspense: null
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
function describeComponentFrame (name, source, ownerName) {
  var sourceInfo = '';

  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');

    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);

        if (match) {
          var pathBeforeSlash = match[1];

          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }

    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }

  return '\n    in ' + (name || 'Unknown') + sourceInfo;
}

var Resolved = 1;
function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return "Profiler";

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';

      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type.render);

      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);

          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }

          break;
        }
    }
  }

  return null;
}

var ReactDebugCurrentFrame = {};
var currentlyValidatingElement = null;
function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === 'string' && args[args.length - 1].indexOf('\n    in') === 0;

    if (!hasExistingStack) {
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      var stack = ReactDebugCurrentFrame.getStackAddendum();

      if (stack !== '') {
        format += '%s';
        args = args.concat([stack]);
      }
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://fb.me/react-strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];

function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;

  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}
/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    callback(traverseContext, children, // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {

      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is deprecated and will be removed in ' + 'a future major release. Consider converting children to ' + 'an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';

      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }

      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + ")." + addendum );
        }
      }
    }
  }

  return subtreeCount;
}
/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}
/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;
  func.call(context, child, bookKeeping.count++);
}
/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */


function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }

  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;
  var mappedChild = func.call(context, child, bookKeeping.count++);

  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }

    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';

  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }

  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}
/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */


function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  setCurrentlyValidatingElement(element);

  {
    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }

  setCurrentlyValidatingElement(null);
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var name = getComponentName(type);
    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      setCurrentlyValidatingElement(element);
      checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
      setCurrentlyValidatingElement(null);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true;

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    setCurrentlyValidatingElement(fragment);
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        break;
      }
    }

    if (fragment.ref !== null) {
      error('Invalid attribute `ref` supplied to `React.Fragment`.');
    }

    setCurrentlyValidatingElement(null);
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    var testMap = new Map([[frozenObject, null]]);
    var testSet = new Set([frozenObject]); // This is necessary for Rollup to not consider these unused.
    // https://github.com/rollup/rollup/issues/1771
    // TODO: we can remove these if Rollup fixes the bug.

    testMap.set(0, 0);
    testSet.add(0);
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react-gutenberg/node_modules/react/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-gutenberg/node_modules/react/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react-gutenberg/node_modules/react/cjs/react.development.js");
}


/***/ }),

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
          lineNumber: 36,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
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
          lineNumber: 48,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_error__WEBPACK_IMPORTED_MODULE_4___default.a, {
        statusCode: 404
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, _this)]
    }, void 0, true);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_general_space__WEBPACK_IMPORTED_MODULE_13__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
      container: true,
      spacing: 2,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
        item: true,
        md: 8,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
          variant: "h3",
          component: "h4",
          style: {
            marginBottom: 20
          },
          children: post.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
          variant: "subtitle2",
          children: ["by", " ", "".concat(author.name, " on ").concat(new Date(post.date).toDateString())]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
          variant: "body1",
          component: "div",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_gutenberg__WEBPACK_IMPORTED_MODULE_14___default.a, {
            blocks: post.blocks
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
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
            lineNumber: 81,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_9__["default"], {
            style: {
              width: "100%"
            },
            children: [recent.map(function (rec) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
                button: true,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  primary: rec.title.rendered,
                  secondary: new Date(rec.date).toDateString()
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 37
                }, _this)
              }, rec.id, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 33
              }, _this);
            }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
                primary: "TITLE",
                secondary: "DATE/AUTHOR"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_general_space__WEBPACK_IMPORTED_MODULE_13__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bsb2FkYWJsZS9jb21wb25lbnQvZGlzdC9sb2FkYWJsZS5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1ndXRlbmJlcmcvZGlzdC9ibG9ja3MvY29tbW9uL2F1ZGlvLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtZ3V0ZW5iZXJnL2Rpc3QvYmxvY2tzL2NvbW1vbi9jb3Zlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWd1dGVuYmVyZy9kaXN0L2Jsb2Nrcy9jb21tb24vZmlsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWd1dGVuYmVyZy9kaXN0L2Jsb2Nrcy9jb21tb24vZ2FsbGVyeS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWd1dGVuYmVyZy9kaXN0L2Jsb2Nrcy9jb21tb24vaGVhZGluZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWd1dGVuYmVyZy9kaXN0L2Jsb2Nrcy9jb21tb24vaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1ndXRlbmJlcmcvZGlzdC9ibG9ja3MvY29tbW9uL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtZ3V0ZW5iZXJnL2Rpc3QvYmxvY2tzL2NvbW1vbi9saXN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtZ3V0ZW5iZXJnL2Rpc3QvYmxvY2tzL2NvbW1vbi9wYXJhZ3JhcGguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1ndXRlbmJlcmcvZGlzdC9ibG9ja3MvY29tbW9uL3F1b3RlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtZ3V0ZW5iZXJnL2Rpc3QvYmxvY2tzL2NvbW1vbi92aWRlby5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWd1dGVuYmVyZy9kaXN0L2Jsb2Nrcy9mb3JtYXQvY29kZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWd1dGVuYmVyZy9kaXN0L2Jsb2Nrcy9mb3JtYXQvaHRtbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWd1dGVuYmVyZy9kaXN0L2Jsb2Nrcy9mb3JtYXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1ndXRlbmJlcmcvZGlzdC9ibG9ja3MvZm9ybWF0L3ByZWZvcm1hdHRlZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWd1dGVuYmVyZy9kaXN0L2Jsb2Nrcy9mb3JtYXQvcHVsbHF1b3RlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtZ3V0ZW5iZXJnL2Rpc3QvYmxvY2tzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtZ3V0ZW5iZXJnL2Rpc3QvYmxvY2tzL2xheW91dC9jb2x1bW5zLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtZ3V0ZW5iZXJnL2Rpc3QvYmxvY2tzL2xheW91dC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWd1dGVuYmVyZy9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtZ3V0ZW5iZXJnL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtZ3V0ZW5iZXJnL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1ndXRlbmJlcmcvbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9uZXdzL1tzbHVnXS5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290Iiwid2lkdGgiLCJtYXJnaW4iLCJTbHVnIiwicG9zdCIsImF1dGhvciIsInJlY2VudCIsImNsYXNzZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpc0ZhbGxiYWNrIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwidGl0bGUiLCJuYW1lIiwiRGF0ZSIsImRhdGUiLCJ0b0RhdGVTdHJpbmciLCJibG9ja3MiLCJtaW5XaWR0aCIsInBhZGRpbmciLCJtYXAiLCJyZWMiLCJyZW5kZXJlZCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwQjtBQUMwRTtBQUMxQztBQUM0QjtBQUNoQjtBQUN4QjtBQUNhOztBQUUzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsNENBQUs7QUFDaEIsYUFBYSw0Q0FBSztBQUNsQjtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUI7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUEseUNBQXlDOztBQUV6QztBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUEsbUNBQW1DOztBQUVuQztBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQSx5Q0FBeUM7QUFDekM7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLEVBQUU7QUFDYjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMERBQTBEO0FBQzFEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckIsV0FBVyxFQUFFO0FBQ2I7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEI7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDdjNEYTs7QUFFYixJQUFJLEtBQXFDLEVBQUUsRUFFMUM7QUFDRCxtQkFBbUIsbUJBQU8sQ0FBQyw4R0FBNEI7QUFDdkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ25DQyxRQUFJLEVBQUU7QUFDRkMsV0FBSyxFQUFFLEtBREw7QUFFRkMsWUFBTSxFQUFFO0FBRk47QUFENkIsR0FBTDtBQUFBLENBQU4sQ0FBNUI7O0FBT0EsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBOEI7QUFBQTs7QUFBQSxNQUEzQkMsSUFBMkIsUUFBM0JBLElBQTJCO0FBQUEsTUFBckJDLE1BQXFCLFFBQXJCQSxNQUFxQjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUN2QyxNQUFNQyxPQUFPLEdBQUdWLFNBQVMsRUFBekI7QUFDQSxNQUFNVyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUVBLE1BQUlELE1BQU0sQ0FBQ0UsVUFBWCxFQUF1QjtBQUNuQix3QkFDSTtBQUFLLGVBQVMsRUFBRUgsT0FBTyxDQUFDUCxJQUF4QjtBQUFBLDZCQUNJLHFFQUFDLDhEQUFEO0FBQU0saUJBQVMsTUFBZjtBQUFnQixpQkFBUyxFQUFDLEtBQTFCO0FBQWdDLGVBQU8sRUFBQyxRQUF4QztBQUFBLCtCQUNJLHFFQUFDLDJFQUFEO0FBQ0ksZUFBSyxFQUFFO0FBQUVXLHFCQUFTLEVBQUUsR0FBYjtBQUFrQkMsd0JBQVksRUFBRTtBQUFoQztBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBU0g7O0FBRUQsTUFBSSxDQUFDUixJQUFMLEVBQVc7QUFDUCx3QkFDSTtBQUFBLDhCQUNJLHFFQUFDLGdEQUFEO0FBQUEsK0JBQ0k7QUFBTSxjQUFJLEVBQUMsUUFBWDtBQUFvQixpQkFBTyxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFJSSxxRUFBQyxpREFBRDtBQUFrQixrQkFBVSxFQUFFO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKSjtBQUFBLG9CQURKO0FBUUg7O0FBRUQsc0JBQ0k7QUFBSyxhQUFTLEVBQUVHLE9BQU8sQ0FBQ1AsSUFBeEI7QUFBQSw0QkFDSSxxRUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSSxxRUFBQyw4REFBRDtBQUFNLGVBQVMsTUFBZjtBQUFnQixhQUFPLEVBQUUsQ0FBekI7QUFBQSw4QkFDSSxxRUFBQyw4REFBRDtBQUFNLFlBQUksTUFBVjtBQUFXLFVBQUUsRUFBRSxDQUFmO0FBQUEsZ0NBQ0kscUVBQUMsb0VBQUQ7QUFDSSxpQkFBTyxFQUFDLElBRFo7QUFFSSxtQkFBUyxFQUFDLElBRmQ7QUFHSSxlQUFLLEVBQUU7QUFBRVksd0JBQVksRUFBRTtBQUFoQixXQUhYO0FBQUEsb0JBS0tSLElBQUksQ0FBQ1M7QUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBU0kscUVBQUMsb0VBQUQ7QUFBWSxpQkFBTyxFQUFDLFdBQXBCO0FBQUEsMkJBQ08sR0FEUCxZQUVRUixNQUFNLENBQUNTLElBRmYsaUJBRTBCLElBQUlDLElBQUosQ0FDbEJYLElBQUksQ0FBQ1ksSUFEYSxFQUVwQkMsWUFGb0IsRUFGMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRKLGVBZ0JJLHFFQUFDLG9FQUFEO0FBQVksaUJBQU8sRUFBQyxPQUFwQjtBQUE0QixtQkFBUyxFQUFDLEtBQXRDO0FBQUEsaUNBQ0kscUVBQUMsdURBQUQ7QUFBVyxrQkFBTSxFQUFFYixJQUFJLENBQUNjO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQXFCSSxxRUFBQyw4REFBRDtBQUFNLFlBQUksTUFBVjtBQUFXLFVBQUUsRUFBRSxDQUFmO0FBQWtCLGFBQUssRUFBRTtBQUFFQyxrQkFBUSxFQUFFO0FBQVosU0FBekI7QUFBQSwrQkFDSSxxRUFBQywrREFBRDtBQUFPLGlCQUFPLEVBQUMsVUFBZjtBQUEwQixlQUFLLEVBQUU7QUFBRUMsbUJBQU8sRUFBRTtBQUFYLFdBQWpDO0FBQUEsa0NBQ0kscUVBQUMsb0VBQUQ7QUFBWSxtQkFBTyxFQUFDLElBQXBCO0FBQXlCLHFCQUFTLEVBQUMsSUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFJSSxxRUFBQyw4REFBRDtBQUFNLGlCQUFLLEVBQUU7QUFBRW5CLG1CQUFLLEVBQUU7QUFBVCxhQUFiO0FBQUEsdUJBQ0tLLE1BQU0sQ0FBQ2UsR0FBUCxDQUFXLFVBQUFDLEdBQUc7QUFBQSxrQ0FDWCxxRUFBQyxtRUFBRDtBQUF1QixzQkFBTSxNQUE3QjtBQUFBLHVDQUNJLHFFQUFDLHVFQUFEO0FBQ0kseUJBQU8sRUFBRUEsR0FBRyxDQUFDVCxLQUFKLENBQVVVLFFBRHZCO0FBRUksMkJBQVMsRUFBRSxJQUFJUixJQUFKLENBQ1BPLEdBQUcsQ0FBQ04sSUFERyxFQUVUQyxZQUZTO0FBRmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLGlCQUFlSyxHQUFHLENBQUNFLEVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRFc7QUFBQSxhQUFkLENBREwsZUFXSSxxRUFBQyxtRUFBRDtBQUFBLHFDQUNJLHFFQUFDLHVFQUFEO0FBQ0ksdUJBQU8sRUFBRSxPQURiO0FBRUkseUJBQVMsRUFBRTtBQUZmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBckJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBaURJLHFFQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFxREgsQ0FoRkQ7O0dBQU1yQixJO1VBQ2NOLFMsRUFDRFkscUQ7OztLQUZiTixJOztBQTZIU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbmV3cy9bc2x1Z10uOGM0OWZhNGFjODU4MzRiZjgwNjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgX2Fzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQnO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2UnO1xuaW1wb3J0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gZnJvbSAncmVhY3QtaXMnO1xuaW1wb3J0IGhvaXN0Tm9uUmVhY3RTdGF0aWNzIGZyb20gJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJztcblxuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICBpZiAoY29uZGl0aW9uKSByZXR1cm47XG4gIHZhciBlcnJvciA9IG5ldyBFcnJvcihcImxvYWRhYmxlOiBcIiArIG1lc3NhZ2UpO1xuICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7XG4gIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gIHRocm93IGVycm9yO1xufVxuZnVuY3Rpb24gd2FybihtZXNzYWdlKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gIGNvbnNvbGUud2FybihcImxvYWRhYmxlOiBcIiArIG1lc3NhZ2UpO1xufVxuXG52YXIgQ29udGV4dCA9IC8qI19fUFVSRV9fKi9cblJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcblxudmFyIExPQURBQkxFX1JFUVVJUkVEX0NIVU5LU19LRVkgPSAnX19MT0FEQUJMRV9SRVFVSVJFRF9DSFVOS1NfXyc7XG5mdW5jdGlvbiBnZXRSZXF1aXJlZENodW5rS2V5KG5hbWVzcGFjZSkge1xuICByZXR1cm4gXCJcIiArIG5hbWVzcGFjZSArIExPQURBQkxFX1JFUVVJUkVEX0NIVU5LU19LRVk7XG59XG5cbnZhciBzaGFyZWRJbnRlcm5hbHMgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgZ2V0UmVxdWlyZWRDaHVua0tleTogZ2V0UmVxdWlyZWRDaHVua0tleSxcbiAgaW52YXJpYW50OiBpbnZhcmlhbnQsXG4gIENvbnRleHQ6IENvbnRleHRcbn0pO1xuXG52YXIgTE9BREFCTEVfU0hBUkVEID0ge1xuICBpbml0aWFsQ2h1bmtzOiB7fVxufTtcblxudmFyIFNUQVRVU19QRU5ESU5HID0gJ1BFTkRJTkcnO1xudmFyIFNUQVRVU19SRVNPTFZFRCA9ICdSRVNPTFZFRCc7XG52YXIgU1RBVFVTX1JFSkVDVEVEID0gJ1JFSkVDVEVEJztcblxuZnVuY3Rpb24gcmVzb2x2ZUNvbnN0cnVjdG9yKGN0b3IpIHtcbiAgaWYgKHR5cGVvZiBjdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlcXVpcmVBc3luYzogY3RvcixcbiAgICAgIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9LFxuICAgICAgY2h1bmtOYW1lOiBmdW5jdGlvbiBjaHVua05hbWUoKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBjdG9yO1xufVxuXG52YXIgd2l0aENodW5rRXh0cmFjdG9yID0gZnVuY3Rpb24gd2l0aENodW5rRXh0cmFjdG9yKENvbXBvbmVudCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKGV4dHJhY3Rvcikge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgX19jaHVua0V4dHJhY3RvcjogZXh0cmFjdG9yXG4gICAgICB9LCBwcm9wcykpO1xuICAgIH0pO1xuICB9O1xufTtcblxudmFyIGlkZW50aXR5ID0gZnVuY3Rpb24gaWRlbnRpdHkodikge1xuICByZXR1cm4gdjtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUxvYWRhYmxlKF9yZWYpIHtcbiAgdmFyIF9yZWYkZGVmYXVsdFJlc29sdmVDbyA9IF9yZWYuZGVmYXVsdFJlc29sdmVDb21wb25lbnQsXG4gICAgICBkZWZhdWx0UmVzb2x2ZUNvbXBvbmVudCA9IF9yZWYkZGVmYXVsdFJlc29sdmVDbyA9PT0gdm9pZCAwID8gaWRlbnRpdHkgOiBfcmVmJGRlZmF1bHRSZXNvbHZlQ28sXG4gICAgICBfcmVuZGVyID0gX3JlZi5yZW5kZXIsXG4gICAgICBvbkxvYWQgPSBfcmVmLm9uTG9hZDtcblxuICBmdW5jdGlvbiBsb2FkYWJsZShsb2FkYWJsZUNvbnN0cnVjdG9yLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIHZhciBjdG9yID0gcmVzb2x2ZUNvbnN0cnVjdG9yKGxvYWRhYmxlQ29uc3RydWN0b3IpO1xuICAgIHZhciBjYWNoZSA9IHt9O1xuICAgIC8qKlxuICAgICAqIENhY2hla2V5IHJlcHJlc2VudHMgdGhlIGNvbXBvbmVudCB0byBiZSBsb2FkZWRcbiAgICAgKiBpZiBrZXkgY2hhbmdlcyAtIGNvbXBvbmVudCBoYXMgdG8gYmUgcmVsb2FkZWRcbiAgICAgKiBAcGFyYW0gcHJvcHNcbiAgICAgKiBAcmV0dXJucyB7bnVsbHxDb21wb25lbnR9XG4gICAgICovXG5cbiAgICBmdW5jdGlvbiBfZ2V0Q2FjaGVLZXkocHJvcHMpIHtcbiAgICAgIGlmIChvcHRpb25zLmNhY2hlS2V5KSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zLmNhY2hlS2V5KHByb3BzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGN0b3IucmVzb2x2ZSkge1xuICAgICAgICByZXR1cm4gY3Rvci5yZXNvbHZlKHByb3BzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICdzdGF0aWMnO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXNvbHZlcyBsb2FkZWQgYG1vZHVsZWAgdG8gYSBzcGVjaWZpYyBgQ29tcG9uZW50XG4gICAgICogQHBhcmFtIG1vZHVsZVxuICAgICAqIEBwYXJhbSBwcm9wc1xuICAgICAqIEBwYXJhbSBMb2FkYWJsZVxuICAgICAqIEByZXR1cm5zIENvbXBvbmVudFxuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiByZXNvbHZlKG1vZHVsZSwgcHJvcHMsIExvYWRhYmxlKSB7XG4gICAgICB2YXIgQ29tcG9uZW50ID0gb3B0aW9ucy5yZXNvbHZlQ29tcG9uZW50ID8gb3B0aW9ucy5yZXNvbHZlQ29tcG9uZW50KG1vZHVsZSwgcHJvcHMpIDogZGVmYXVsdFJlc29sdmVDb21wb25lbnQobW9kdWxlKTtcblxuICAgICAgaWYgKG9wdGlvbnMucmVzb2x2ZUNvbXBvbmVudCAmJiAhaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicmVzb2x2ZUNvbXBvbmVudCByZXR1cm5lZCBzb21ldGhpbmcgdGhhdCBpcyBub3QgYSBSZWFjdCBjb21wb25lbnQhXCIpO1xuICAgICAgfVxuXG4gICAgICBob2lzdE5vblJlYWN0U3RhdGljcyhMb2FkYWJsZSwgQ29tcG9uZW50LCB7XG4gICAgICAgIHByZWxvYWQ6IHRydWVcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIENvbXBvbmVudDtcbiAgICB9XG5cbiAgICB2YXIgSW5uZXJMb2FkYWJsZSA9XG4gICAgLyojX19QVVJFX18qL1xuICAgIGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgICBfaW5oZXJpdHNMb29zZShJbm5lckxvYWRhYmxlLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgICAgSW5uZXJMb2FkYWJsZS5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIHN0YXRlKSB7XG4gICAgICAgIHZhciBjYWNoZUtleSA9IF9nZXRDYWNoZUtleShwcm9wcyk7XG5cbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGNhY2hlS2V5OiBjYWNoZUtleSxcbiAgICAgICAgICAvLyBjaGFuZ2Ugb2YgYSBrZXkgdHJpZ2dlcnMgbG9hZGluZyBzdGF0ZSBhdXRvbWF0aWNhbGx5XG4gICAgICAgICAgbG9hZGluZzogc3RhdGUubG9hZGluZyB8fCBzdGF0ZS5jYWNoZUtleSAhPT0gY2FjaGVLZXlcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBmdW5jdGlvbiBJbm5lckxvYWRhYmxlKHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpcztcblxuICAgICAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgcmVzdWx0OiBudWxsLFxuICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgY2FjaGVLZXk6IF9nZXRDYWNoZUtleShwcm9wcylcbiAgICAgICAgfTtcbiAgICAgICAgaW52YXJpYW50KCFwcm9wcy5fX2NodW5rRXh0cmFjdG9yIHx8IGN0b3IucmVxdWlyZVN5bmMsICdTU1IgcmVxdWlyZXMgYEBsb2FkYWJsZS9iYWJlbC1wbHVnaW5gLCBwbGVhc2UgaW5zdGFsbCBpdCcpOyAvLyBTZXJ2ZXItc2lkZVxuXG4gICAgICAgIGlmIChwcm9wcy5fX2NodW5rRXh0cmFjdG9yKSB7XG4gICAgICAgICAgLy8gVGhpcyBtb2R1bGUgaGFzIGJlZW4gbWFya2VkIHdpdGggbm8gU1NSXG4gICAgICAgICAgaWYgKG9wdGlvbnMuc3NyID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpO1xuICAgICAgICAgIH0gLy8gV2UgcnVuIGxvYWQgZnVuY3Rpb24sIHdlIGFzc3VtZSB0aGF0IGl0IHdvbid0IGZhaWwgYW5kIHRoYXQgaXRcbiAgICAgICAgICAvLyB0cmlnZ2VycyBhIHN5bmNocm9ub3VzIGxvYWRpbmcgb2YgdGhlIG1vZHVsZVxuXG5cbiAgICAgICAgICBjdG9yLnJlcXVpcmVBc3luYyhwcm9wcylbXCJjYXRjaFwiXShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9KTsgLy8gU28gd2UgY2FuIHJlcXVpcmUgbm93IHRoZSBtb2R1bGUgc3luY2hyb25vdXNseVxuXG4gICAgICAgICAgX3RoaXMubG9hZFN5bmMoKTtcblxuICAgICAgICAgIHByb3BzLl9fY2h1bmtFeHRyYWN0b3IuYWRkQ2h1bmsoY3Rvci5jaHVua05hbWUocHJvcHMpKTtcblxuICAgICAgICAgIHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKTtcbiAgICAgICAgfSAvLyBDbGllbnQtc2lkZSB3aXRoIGBpc1JlYWR5YCBtZXRob2QgcHJlc2VudCAoU1NSIHByb2JhYmx5KVxuICAgICAgICAvLyBJZiBtb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQsIHdlIHVzZSBhIHN5bmNocm9ub3VzIGxvYWRpbmdcbiAgICAgICAgLy8gT25seSBwZXJmb3JtIHRoaXMgc3luY2hyb25vdXMgbG9hZGluZyBpZiB0aGUgY29tcG9uZW50IGhhcyBub3RcbiAgICAgICAgLy8gYmVlbiBtYXJrZWQgd2l0aCBubyBTU1IsIGVsc2Ugd2UgcmlzayBoeWRyYXRpb24gbWlzbWF0Y2hlc1xuXG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc3NyICE9PSBmYWxzZSAmJiAoIC8vIGlzIHJlYWR5IC0gd2FzIGxvYWRlZCBpbiB0aGlzIHNlc3Npb25cbiAgICAgICAgY3Rvci5pc1JlYWR5ICYmIGN0b3IuaXNSZWFkeShwcm9wcykgfHwgLy8gaXMgcmVhZHkgLSB3YXMgbG9hZGVkIGR1cmluZyBTU1IgcHJvY2Vzc1xuICAgICAgICBjdG9yLmNodW5rTmFtZSAmJiBMT0FEQUJMRV9TSEFSRUQuaW5pdGlhbENodW5rc1tjdG9yLmNodW5rTmFtZShwcm9wcyldKSkge1xuICAgICAgICAgIF90aGlzLmxvYWRTeW5jKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICB9XG5cbiAgICAgIHZhciBfcHJvdG8gPSBJbm5lckxvYWRhYmxlLnByb3RvdHlwZTtcblxuICAgICAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMubW91bnRlZCA9IHRydWU7IC8vIHJldHJpZXZlIGxvYWRpbmcgcHJvbWlzZSBmcm9tIGEgZ2xvYmFsIGNhY2hlXG5cbiAgICAgICAgdmFyIGNhY2hlZFByb21pc2UgPSB0aGlzLmdldENhY2hlKCk7IC8vIGlmIHByb21pc2UgZXhpc3RzLCBidXQgcmVqZWN0ZWQgLSBjbGVhciBjYWNoZVxuXG4gICAgICAgIGlmIChjYWNoZWRQcm9taXNlICYmIGNhY2hlZFByb21pc2Uuc3RhdHVzID09PSBTVEFUVVNfUkVKRUNURUQpIHtcbiAgICAgICAgICB0aGlzLnNldENhY2hlKCk7XG4gICAgICAgIH0gLy8gY29tcG9uZW50IG1pZ2h0IGJlIHJlc29sdmVkIHN5bmNocm9ub3VzbHkgaW4gdGhlIGNvbnN0cnVjdG9yXG5cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5sb2FkaW5nKSB7XG4gICAgICAgICAgdGhpcy5sb2FkQXN5bmMoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgICAgICAvLyBDb21wb25lbnQgaGFzIHRvIGJlIHJlbG9hZGVkIG9uIGNhY2hlS2V5IGNoYW5nZVxuICAgICAgICBpZiAocHJldlN0YXRlLmNhY2hlS2V5ICE9PSB0aGlzLnN0YXRlLmNhY2hlS2V5KSB7XG4gICAgICAgICAgdGhpcy5sb2FkQXN5bmMoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLnNhZmVTZXRTdGF0ZSA9IGZ1bmN0aW9uIHNhZmVTZXRTdGF0ZShuZXh0U3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKG5leHRTdGF0ZSwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIHJldHVybnMgYSBjYWNoZSBrZXkgZm9yIHRoZSBjdXJyZW50IHByb3BzXG4gICAgICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fHN0cmluZ31cbiAgICAgICAqL1xuICAgICAgO1xuXG4gICAgICBfcHJvdG8uZ2V0Q2FjaGVLZXkgPSBmdW5jdGlvbiBnZXRDYWNoZUtleSgpIHtcbiAgICAgICAgcmV0dXJuIF9nZXRDYWNoZUtleSh0aGlzLnByb3BzKTtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogYWNjZXNzIHRoZSBwZXJzaXN0ZW50IGNhY2hlXG4gICAgICAgKi9cbiAgICAgIDtcblxuICAgICAgX3Byb3RvLmdldENhY2hlID0gZnVuY3Rpb24gZ2V0Q2FjaGUoKSB7XG4gICAgICAgIHJldHVybiBjYWNoZVt0aGlzLmdldENhY2hlS2V5KCldO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBzZXRzIHRoZSBjYWNoZSB2YWx1ZS4gSWYgY2FsbGVkIHdpdGhvdXQgdmFsdWUgc2V0cyBpdCBhcyB1bmRlZmluZWRcbiAgICAgICAqL1xuICAgICAgO1xuXG4gICAgICBfcHJvdG8uc2V0Q2FjaGUgPSBmdW5jdGlvbiBzZXRDYWNoZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT09IHZvaWQgMCkge1xuICAgICAgICAgIHZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FjaGVbdGhpcy5nZXRDYWNoZUtleSgpXSA9IHZhbHVlO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLnRyaWdnZXJPbkxvYWQgPSBmdW5jdGlvbiB0cmlnZ2VyT25Mb2FkKCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICBpZiAob25Mb2FkKSB7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBvbkxvYWQoX3RoaXMyLnN0YXRlLnJlc3VsdCwgX3RoaXMyLnByb3BzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBTeW5jaHJvbm91c2x5IGxvYWRzIGNvbXBvbmVudFxuICAgICAgICogdGFyZ2V0IG1vZHVsZSBpcyBleHBlY3RlZCB0byBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgbW9kdWxlIGNhY2hlXG4gICAgICAgKiBvciBiZSBjYXBhYmxlIHRvIHJlc29sdmUgc3luY2hyb25vdXNseSAod2VicGFjayB0YXJnZXQ9bm9kZSlcbiAgICAgICAqL1xuICAgICAgO1xuXG4gICAgICBfcHJvdG8ubG9hZFN5bmMgPSBmdW5jdGlvbiBsb2FkU3luYygpIHtcbiAgICAgICAgLy8gbG9hZCBzeW5jIGlzIGV4cGVjdGluZyBjb21wb25lbnQgdG8gYmUgaW4gdGhlIFwibG9hZGluZ1wiIHN0YXRlIGFscmVhZHlcbiAgICAgICAgLy8gc291bmRzIHdlaXJkLCBidXQgbG9hZGluZz10cnVlIGlzIHRoZSBpbml0aWFsIHN0YXRlIG9mIElubmVyTG9hZGFibGVcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmxvYWRpbmcpIHJldHVybjtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciBsb2FkZWRNb2R1bGUgPSBjdG9yLnJlcXVpcmVTeW5jKHRoaXMucHJvcHMpO1xuICAgICAgICAgIHZhciByZXN1bHQgPSByZXNvbHZlKGxvYWRlZE1vZHVsZSwgdGhpcy5wcm9wcywgTG9hZGFibGUpO1xuICAgICAgICAgIHRoaXMuc3RhdGUucmVzdWx0ID0gcmVzdWx0O1xuICAgICAgICAgIHRoaXMuc3RhdGUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2xvYWRhYmxlLWNvbXBvbmVudHM6IGZhaWxlZCB0byBzeW5jaHJvbm91c2x5IGxvYWQgY29tcG9uZW50LCB3aGljaCBleHBlY3RlZCB0byBiZSBhdmFpbGFibGUnLCB7XG4gICAgICAgICAgICBmaWxlTmFtZTogY3Rvci5yZXNvbHZlKHRoaXMucHJvcHMpLFxuICAgICAgICAgICAgY2h1bmtOYW1lOiBjdG9yLmNodW5rTmFtZSh0aGlzLnByb3BzKSxcbiAgICAgICAgICAgIGVycm9yOiBlcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBlcnJvclxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuc3RhdGUuZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBBc3luY2hyb25vdXNseSBsb2FkcyBhIGNvbXBvbmVudC5cbiAgICAgICAqL1xuICAgICAgO1xuXG4gICAgICBfcHJvdG8ubG9hZEFzeW5jID0gZnVuY3Rpb24gbG9hZEFzeW5jKCkge1xuICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXMucmVzb2x2ZUFzeW5jKCk7XG4gICAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbiAobG9hZGVkTW9kdWxlKSB7XG4gICAgICAgICAgdmFyIHJlc3VsdCA9IHJlc29sdmUobG9hZGVkTW9kdWxlLCBfdGhpczMucHJvcHMsIHtcbiAgICAgICAgICAgIExvYWRhYmxlOiBMb2FkYWJsZVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgX3RoaXMzLnNhZmVTZXRTdGF0ZSh7XG4gICAgICAgICAgICByZXN1bHQ6IHJlc3VsdCxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMy50cmlnZ2VyT25Mb2FkKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMy5zYWZlU2V0U3RhdGUoe1xuICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBBc3luY2hyb25vdXNseSByZXNvbHZlcyhub3QgbG9hZHMpIGEgY29tcG9uZW50LlxuICAgICAgICogTm90ZSAtIHRoaXMgZnVuY3Rpb24gZG9lcyBub3QgY2hhbmdlIHRoZSBzdGF0ZVxuICAgICAgICovXG4gICAgICA7XG5cbiAgICAgIF9wcm90by5yZXNvbHZlQXN5bmMgPSBmdW5jdGlvbiByZXNvbHZlQXN5bmMoKSB7XG4gICAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBfX2NodW5rRXh0cmFjdG9yID0gX3RoaXMkcHJvcHMuX19jaHVua0V4dHJhY3RvcixcbiAgICAgICAgICAgIGZvcndhcmRlZFJlZiA9IF90aGlzJHByb3BzLmZvcndhcmRlZFJlZixcbiAgICAgICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIFtcIl9fY2h1bmtFeHRyYWN0b3JcIiwgXCJmb3J3YXJkZWRSZWZcIl0pO1xuXG4gICAgICAgIHZhciBwcm9taXNlID0gdGhpcy5nZXRDYWNoZSgpO1xuXG4gICAgICAgIGlmICghcHJvbWlzZSkge1xuICAgICAgICAgIHByb21pc2UgPSBjdG9yLnJlcXVpcmVBc3luYyhwcm9wcyk7XG4gICAgICAgICAgcHJvbWlzZS5zdGF0dXMgPSBTVEFUVVNfUEVORElORztcbiAgICAgICAgICB0aGlzLnNldENhY2hlKHByb21pc2UpO1xuICAgICAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBwcm9taXNlLnN0YXR1cyA9IFNUQVRVU19SRVNPTFZFRDtcbiAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2xvYWRhYmxlLWNvbXBvbmVudHM6IGZhaWxlZCB0byBhc3luY2hyb25vdXNseSBsb2FkIGNvbXBvbmVudCcsIHtcbiAgICAgICAgICAgICAgZmlsZU5hbWU6IGN0b3IucmVzb2x2ZShfdGhpczQucHJvcHMpLFxuICAgICAgICAgICAgICBjaHVua05hbWU6IGN0b3IuY2h1bmtOYW1lKF90aGlzNC5wcm9wcyksXG4gICAgICAgICAgICAgIGVycm9yOiBlcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBlcnJvclxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwcm9taXNlLnN0YXR1cyA9IFNUQVRVU19SRUpFQ1RFRDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBmb3J3YXJkZWRSZWYgPSBfdGhpcyRwcm9wczIuZm9yd2FyZGVkUmVmLFxuICAgICAgICAgICAgcHJvcEZhbGxiYWNrID0gX3RoaXMkcHJvcHMyLmZhbGxiYWNrLFxuICAgICAgICAgICAgX19jaHVua0V4dHJhY3RvciA9IF90aGlzJHByb3BzMi5fX2NodW5rRXh0cmFjdG9yLFxuICAgICAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wczIsIFtcImZvcndhcmRlZFJlZlwiLCBcImZhbGxiYWNrXCIsIFwiX19jaHVua0V4dHJhY3RvclwiXSk7XG5cbiAgICAgICAgdmFyIF90aGlzJHN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICAgIGVycm9yID0gX3RoaXMkc3RhdGUuZXJyb3IsXG4gICAgICAgICAgICBsb2FkaW5nID0gX3RoaXMkc3RhdGUubG9hZGluZyxcbiAgICAgICAgICAgIHJlc3VsdCA9IF90aGlzJHN0YXRlLnJlc3VsdDtcblxuICAgICAgICBpZiAob3B0aW9ucy5zdXNwZW5zZSkge1xuICAgICAgICAgIHZhciBjYWNoZWRQcm9taXNlID0gdGhpcy5nZXRDYWNoZSgpIHx8IHRoaXMubG9hZEFzeW5jKCk7XG5cbiAgICAgICAgICBpZiAoY2FjaGVkUHJvbWlzZS5zdGF0dXMgPT09IFNUQVRVU19QRU5ESU5HKSB7XG4gICAgICAgICAgICB0aHJvdyB0aGlzLmxvYWRBc3luYygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGZhbGxiYWNrID0gcHJvcEZhbGxiYWNrIHx8IG9wdGlvbnMuZmFsbGJhY2sgfHwgbnVsbDtcblxuICAgICAgICBpZiAobG9hZGluZykge1xuICAgICAgICAgIHJldHVybiBmYWxsYmFjaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfcmVuZGVyKHtcbiAgICAgICAgICBmYWxsYmFjazogZmFsbGJhY2ssXG4gICAgICAgICAgcmVzdWx0OiByZXN1bHQsXG4gICAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgICBwcm9wczogX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICAgICAgICByZWY6IGZvcndhcmRlZFJlZlxuICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIElubmVyTG9hZGFibGU7XG4gICAgfShSZWFjdC5Db21wb25lbnQpO1xuXG4gICAgdmFyIEVuaGFuY2VkSW5uZXJMb2FkYWJsZSA9IHdpdGhDaHVua0V4dHJhY3RvcihJbm5lckxvYWRhYmxlKTtcbiAgICB2YXIgTG9hZGFibGUgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChFbmhhbmNlZElubmVyTG9hZGFibGUsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBmb3J3YXJkZWRSZWY6IHJlZlxuICAgICAgfSwgcHJvcHMpKTtcbiAgICB9KTsgLy8gSW4gZnV0dXJlLCBwcmVsb2FkIGNvdWxkIHVzZSBgPGxpbmsgcmVsPVwicHJlbG9hZFwiPmBcblxuICAgIExvYWRhYmxlLnByZWxvYWQgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgIGN0b3IucmVxdWlyZUFzeW5jKHByb3BzKTtcbiAgICB9O1xuXG4gICAgTG9hZGFibGUubG9hZCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgcmV0dXJuIGN0b3IucmVxdWlyZUFzeW5jKHByb3BzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIExvYWRhYmxlO1xuICB9XG5cbiAgZnVuY3Rpb24gbGF6eShjdG9yLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGxvYWRhYmxlKGN0b3IsIF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgICBzdXNwZW5zZTogdHJ1ZVxuICAgIH0pKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbG9hZGFibGU6IGxvYWRhYmxlLFxuICAgIGxhenk6IGxhenlcbiAgfTtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdFJlc29sdmVDb21wb25lbnQobG9hZGVkTW9kdWxlKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuICByZXR1cm4gbG9hZGVkTW9kdWxlLl9fZXNNb2R1bGUgPyBsb2FkZWRNb2R1bGVbXCJkZWZhdWx0XCJdIDogbG9hZGVkTW9kdWxlW1wiZGVmYXVsdFwiXSB8fCBsb2FkZWRNb2R1bGU7XG59XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lLCByZWFjdC9uby1tdWx0aS1jb21wICovXG5cbnZhciBfY3JlYXRlTG9hZGFibGUgPVxuLyojX19QVVJFX18qL1xuY3JlYXRlTG9hZGFibGUoe1xuICBkZWZhdWx0UmVzb2x2ZUNvbXBvbmVudDogZGVmYXVsdFJlc29sdmVDb21wb25lbnQsXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKF9yZWYpIHtcbiAgICB2YXIgQ29tcG9uZW50ID0gX3JlZi5yZXN1bHQsXG4gICAgICAgIHByb3BzID0gX3JlZi5wcm9wcztcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIHByb3BzKTtcbiAgfVxufSksXG4gICAgbG9hZGFibGUgPSBfY3JlYXRlTG9hZGFibGUubG9hZGFibGUsXG4gICAgbGF6eSA9IF9jcmVhdGVMb2FkYWJsZS5sYXp5O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSwgcmVhY3Qvbm8tbXVsdGktY29tcCAqL1xuXG52YXIgX2NyZWF0ZUxvYWRhYmxlJDEgPVxuLyojX19QVVJFX18qL1xuY3JlYXRlTG9hZGFibGUoe1xuICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZChyZXN1bHQsIHByb3BzKSB7XG4gICAgaWYgKHJlc3VsdCAmJiBwcm9wcy5mb3J3YXJkZWRSZWYpIHtcbiAgICAgIGlmICh0eXBlb2YgcHJvcHMuZm9yd2FyZGVkUmVmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByb3BzLmZvcndhcmRlZFJlZihyZXN1bHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcHMuZm9yd2FyZGVkUmVmLmN1cnJlbnQgPSByZXN1bHQ7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihfcmVmKSB7XG4gICAgdmFyIHJlc3VsdCA9IF9yZWYucmVzdWx0LFxuICAgICAgICBwcm9wcyA9IF9yZWYucHJvcHM7XG5cbiAgICBpZiAocHJvcHMuY2hpbGRyZW4pIHtcbiAgICAgIHJldHVybiBwcm9wcy5jaGlsZHJlbihyZXN1bHQpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59KSxcbiAgICBsb2FkYWJsZSQxID0gX2NyZWF0ZUxvYWRhYmxlJDEubG9hZGFibGUsXG4gICAgbGF6eSQxID0gX2NyZWF0ZUxvYWRhYmxlJDEubGF6eTtcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIGNhbWVsY2FzZSAqL1xudmFyIEJST1dTRVIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIGxvYWRhYmxlUmVhZHkoZG9uZSwgX3RlbXApIHtcbiAgaWYgKGRvbmUgPT09IHZvaWQgMCkge1xuICAgIGRvbmUgPSBmdW5jdGlvbiBkb25lKCkge307XG4gIH1cblxuICB2YXIgX3JlZiA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wLFxuICAgICAgX3JlZiRuYW1lc3BhY2UgPSBfcmVmLm5hbWVzcGFjZSxcbiAgICAgIG5hbWVzcGFjZSA9IF9yZWYkbmFtZXNwYWNlID09PSB2b2lkIDAgPyAnJyA6IF9yZWYkbmFtZXNwYWNlO1xuXG4gIGlmICghQlJPV1NFUikge1xuICAgIHdhcm4oJ2Bsb2FkYWJsZVJlYWR5KClgIG11c3QgYmUgY2FsbGVkIGluIGJyb3dzZXIgb25seScpO1xuICAgIGRvbmUoKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICB2YXIgcmVxdWlyZWRDaHVua3MgPSBudWxsO1xuXG4gIGlmIChCUk9XU0VSKSB7XG4gICAgdmFyIGlkID0gZ2V0UmVxdWlyZWRDaHVua0tleShuYW1lc3BhY2UpO1xuICAgIHZhciBkYXRhRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblxuICAgIGlmIChkYXRhRWxlbWVudCkge1xuICAgICAgcmVxdWlyZWRDaHVua3MgPSBKU09OLnBhcnNlKGRhdGFFbGVtZW50LnRleHRDb250ZW50KTtcbiAgICAgIHZhciBleHRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQgKyBcIl9leHRcIik7XG5cbiAgICAgIGlmIChleHRFbGVtZW50KSB7XG4gICAgICAgIHZhciBfSlNPTiRwYXJzZSA9IEpTT04ucGFyc2UoZXh0RWxlbWVudC50ZXh0Q29udGVudCksXG4gICAgICAgICAgICBuYW1lZENodW5rcyA9IF9KU09OJHBhcnNlLm5hbWVkQ2h1bmtzO1xuXG4gICAgICAgIG5hbWVkQ2h1bmtzLmZvckVhY2goZnVuY3Rpb24gKGNodW5rTmFtZSkge1xuICAgICAgICAgIExPQURBQkxFX1NIQVJFRC5pbml0aWFsQ2h1bmtzW2NodW5rTmFtZV0gPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHZlcnNpb24gbWlzbWF0Y2hcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdsb2FkYWJsZS1jb21wb25lbnQ6IEBsb2FkYWJsZS9zZXJ2ZXIgZG9lcyBub3QgbWF0Y2ggQGxvYWRhYmxlL2NvbXBvbmVudCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICghcmVxdWlyZWRDaHVua3MpIHtcbiAgICB3YXJuKCdgbG9hZGFibGVSZWFkeSgpYCByZXF1aXJlcyBzdGF0ZSwgcGxlYXNlIHVzZSBgZ2V0U2NyaXB0VGFnc2Agb3IgYGdldFNjcmlwdEVsZW1lbnRzYCBzZXJ2ZXItc2lkZScpO1xuICAgIGRvbmUoKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZWQgPSBmYWxzZTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgd2luZG93Ll9fTE9BREFCTEVfTE9BREVEX0NIVU5LU19fID0gd2luZG93Ll9fTE9BREFCTEVfTE9BREVEX0NIVU5LU19fIHx8IFtdO1xuICAgIHZhciBsb2FkZWRDaHVua3MgPSB3aW5kb3cuX19MT0FEQUJMRV9MT0FERURfQ0hVTktTX187XG4gICAgdmFyIG9yaWdpbmFsUHVzaCA9IGxvYWRlZENodW5rcy5wdXNoLmJpbmQobG9hZGVkQ2h1bmtzKTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrUmVhZHlTdGF0ZSgpIHtcbiAgICAgIGlmIChyZXF1aXJlZENodW5rcy5ldmVyeShmdW5jdGlvbiAoY2h1bmspIHtcbiAgICAgICAgcmV0dXJuIGxvYWRlZENodW5rcy5zb21lKGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgICAgIHZhciBjaHVua3MgPSBfcmVmMlswXTtcbiAgICAgICAgICByZXR1cm4gY2h1bmtzLmluZGV4T2YoY2h1bmspID4gLTE7XG4gICAgICAgIH0pO1xuICAgICAgfSkpIHtcbiAgICAgICAgaWYgKCFyZXNvbHZlZCkge1xuICAgICAgICAgIHJlc29sdmVkID0gdHJ1ZTtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkZWRDaHVua3MucHVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG9yaWdpbmFsUHVzaC5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG4gICAgICBjaGVja1JlYWR5U3RhdGUoKTtcbiAgICB9O1xuXG4gICAgY2hlY2tSZWFkeVN0YXRlKCk7XG4gIH0pLnRoZW4oZG9uZSk7XG59XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG52YXIgbG9hZGFibGUkMiA9IGxvYWRhYmxlO1xubG9hZGFibGUkMi5saWIgPSBsb2FkYWJsZSQxO1xudmFyIGxhenkkMiA9IGxhenk7XG5sYXp5JDIubGliID0gbGF6eSQxO1xudmFyIF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEID0gc2hhcmVkSW50ZXJuYWxzO1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkYWJsZSQyO1xuZXhwb3J0IHsgX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQsIGxhenkkMiBhcyBsYXp5LCBsb2FkYWJsZVJlYWR5IH07XG4iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmNvbnN0IFdQR0F1ZGlvQmxvY2sgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IFxuICAgIC8vIGF0dHJzLFxuICAgIC8vIGlubmVyQmxvY2tzLFxuICAgIGlubmVySFRNTCB9ID0gcHJvcHM7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIndwZy1ibG9jayB3cGctYl9hdWRpb1wiLCBkYW5nZXJvdXNseVNldElubmVySFRNTDogeyBfX2h0bWw6IGlubmVySFRNTCB9IH0pKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBXUEdBdWRpb0Jsb2NrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXVkaW8uanMubWFwIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5jb25zdCBXUEdDb3ZlckJsb2NrID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBcbiAgICAvLyBhdHRycyxcbiAgICAvLyBpbm5lckJsb2NrcyxcbiAgICBpbm5lckhUTUwgfSA9IHByb3BzO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ3cGctYmxvY2sgd3BnLWJfY292ZXJcIiwgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHsgX19odG1sOiBpbm5lckhUTUwgfSB9KSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gV1BHQ292ZXJCbG9jaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvdmVyLmpzLm1hcCIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuY29uc3QgV1BHRmlsZUJsb2NrID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBcbiAgICAvLyBhdHRycyxcbiAgICAvLyBpbm5lckJsb2NrcyxcbiAgICBpbm5lckhUTUwgfSA9IHByb3BzO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ3cGctYmxvY2sgd3BnLWJfZmlsZVwiLCBkYW5nZXJvdXNseVNldElubmVySFRNTDogeyBfX2h0bWw6IGlubmVySFRNTCB9IH0pKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBXUEdGaWxlQmxvY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1maWxlLmpzLm1hcCIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuY29uc3QgV1BHR2FsbGVyeUJsb2NrID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBcbiAgICAvLyBhdHRycyxcbiAgICAvLyBpbm5lckJsb2NrcyxcbiAgICBpbm5lckhUTUwgfSA9IHByb3BzO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ3cGctYmxvY2sgd3BnLWJfZ2FsbGVyeVwiLCBkYW5nZXJvdXNseVNldElubmVySFRNTDogeyBfX2h0bWw6IGlubmVySFRNTCB9IH0pKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBXUEdHYWxsZXJ5QmxvY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1nYWxsZXJ5LmpzLm1hcCIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuY29uc3QgV1BHSGVhZGluZ0Jsb2NrID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBcbiAgICAvLyBhdHRycyxcbiAgICAvLyBpbm5lckJsb2NrcyxcbiAgICBpbm5lckhUTUwgfSA9IHByb3BzO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ3cGctYmxvY2sgd3BnLWJfaGVhZGluZ1wiLCBkYW5nZXJvdXNseVNldElubmVySFRNTDogeyBfX2h0bWw6IGlubmVySFRNTCB9IH0pKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBXUEdIZWFkaW5nQmxvY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1oZWFkaW5nLmpzLm1hcCIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuY29uc3QgV1BHSW1hZ2VCbG9jayA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgXG4gICAgLy8gYXR0cnMsXG4gICAgLy8gaW5uZXJCbG9ja3MsXG4gICAgaW5uZXJIVE1MIH0gPSBwcm9wcztcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwid3BnLWJsb2NrIHdwZy1iX2ltYWdlXCIsIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7IF9faHRtbDogaW5uZXJIVE1MIH0gfSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IFdQR0ltYWdlQmxvY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS5qcy5tYXAiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCJAbG9hZGFibGUvY29tcG9uZW50XCIpO1xuY29uc3QgQXVkaW8gPSBjb21wb25lbnRfMS5kZWZhdWx0KCgpID0+IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gcmVxdWlyZSgnLi9hdWRpbycpKSk7XG5jb25zdCBDb3ZlciA9IGNvbXBvbmVudF8xLmRlZmF1bHQoKCkgPT4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiByZXF1aXJlKCcuL2NvdmVyJykpKTtcbmNvbnN0IEZpbGUgPSBjb21wb25lbnRfMS5kZWZhdWx0KCgpID0+IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gcmVxdWlyZSgnLi9maWxlJykpKTtcbmNvbnN0IEdhbGxlcnkgPSBjb21wb25lbnRfMS5kZWZhdWx0KCgpID0+IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gcmVxdWlyZSgnLi9nYWxsZXJ5JykpKTtcbmNvbnN0IEhlYWRpbmcgPSBjb21wb25lbnRfMS5kZWZhdWx0KCgpID0+IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gcmVxdWlyZSgnLi9oZWFkaW5nJykpKTtcbmNvbnN0IEltYWdlID0gY29tcG9uZW50XzEuZGVmYXVsdCgoKSA9PiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHJlcXVpcmUoJy4vaW1hZ2UnKSkpO1xuY29uc3QgTGlzdCA9IGNvbXBvbmVudF8xLmRlZmF1bHQoKCkgPT4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiByZXF1aXJlKCcuL2xpc3QnKSkpO1xuY29uc3QgUGFyYWdyYXBoID0gY29tcG9uZW50XzEuZGVmYXVsdCgoKSA9PiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHJlcXVpcmUoJy4vcGFyYWdyYXBoJykpKTtcbmNvbnN0IFF1b3RlID0gY29tcG9uZW50XzEuZGVmYXVsdCgoKSA9PiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHJlcXVpcmUoJy4vcXVvdGUnKSkpO1xuY29uc3QgVmlkZW8gPSBjb21wb25lbnRfMS5kZWZhdWx0KCgpID0+IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gcmVxdWlyZSgnLi92aWRlbycpKSk7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgQXVkaW8sXG4gICAgQ292ZXIsXG4gICAgRmlsZSxcbiAgICBHYWxsZXJ5LFxuICAgIEhlYWRpbmcsXG4gICAgSW1hZ2UsXG4gICAgTGlzdCxcbiAgICBQYXJhZ3JhcGgsXG4gICAgUXVvdGUsXG4gICAgVmlkZW9cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmNvbnN0IFdQR0xpc3RCbG9jayA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgXG4gICAgLy8gYXR0cnMsXG4gICAgLy8gaW5uZXJCbG9ja3MsXG4gICAgaW5uZXJIVE1MIH0gPSBwcm9wcztcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwid3BnLWJsb2NrIHdwZy1iX2xpc3RcIiwgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHsgX19odG1sOiBpbm5lckhUTUwgfSB9KSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gV1BHTGlzdEJsb2NrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGlzdC5qcy5tYXAiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmNvbnN0IFdQR1BhcmFncmFwaEJsb2NrID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBcbiAgICAvLyBhdHRycyxcbiAgICAvLyBpbm5lckJsb2NrcyxcbiAgICBpbm5lckhUTUwgfSA9IHByb3BzO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ3cGctYmxvY2sgd3BnLWJfcGFyYWdyYXBoXCIsIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7IF9faHRtbDogaW5uZXJIVE1MIH0gfSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IFdQR1BhcmFncmFwaEJsb2NrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyYWdyYXBoLmpzLm1hcCIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuY29uc3QgV1BHUXVvdGVCbG9jayA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgXG4gICAgLy8gYXR0cnMsXG4gICAgLy8gaW5uZXJCbG9ja3MsXG4gICAgaW5uZXJIVE1MIH0gPSBwcm9wcztcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwid3BnLWJsb2NrIHdwZy1iX3F1b3RlXCIsIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7IF9faHRtbDogaW5uZXJIVE1MIH0gfSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IFdQR1F1b3RlQmxvY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdW90ZS5qcy5tYXAiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmNvbnN0IFdQR1ZpZGVvQmxvY2sgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IFxuICAgIC8vIGF0dHJzLFxuICAgIC8vIGlubmVyQmxvY2tzLFxuICAgIGlubmVySFRNTCB9ID0gcHJvcHM7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIndwZy1ibG9jayB3cGctYl92aWRlb1wiLCBkYW5nZXJvdXNseVNldElubmVySFRNTDogeyBfX2h0bWw6IGlubmVySFRNTCB9IH0pKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBXUEdWaWRlb0Jsb2NrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dmlkZW8uanMubWFwIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5jb25zdCBXUEdDb2RlQmxvY2sgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IFxuICAgIC8vIGF0dHJzLFxuICAgIC8vIGlubmVyQmxvY2tzLFxuICAgIGlubmVySFRNTCB9ID0gcHJvcHM7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIndwZy1ibG9jayB3cGctYl9Db2RlXCIsIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7IF9faHRtbDogaW5uZXJIVE1MIH0gfSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IFdQR0NvZGVCbG9jaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvZGUuanMubWFwIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5jbGFzcyBXUEdIdG1sQmxvY2sgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXNjcmlwdD1cIiR7dGhpcy5pZH1cIl1gKS5mb3JFYWNoKHNjcmlwdCA9PiB7XG4gICAgICAgICAgICB3aW5kb3cuZXZhbChzY3JpcHQuaW5uZXJIVE1MKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBcbiAgICAgICAgLy8gYXR0cnMsXG4gICAgICAgIC8vIGlubmVyQmxvY2tzLFxuICAgICAgICBpbm5lckhUTUwgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHNjcmlwdEh0bWwgPSBpbm5lckhUTUwucmVwbGFjZSgvPHNjcmlwdCg+fFxccykvZ20sIGA8c2NyaXB0IGRhdGEtc2NyaXB0PVwiJHt0aGlzLmlkfVwiJDFgKTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIndwZy1ibG9jayB3cGctYl9odG1sXCIsIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7IF9faHRtbDogc2NyaXB0SHRtbCB9IH0pKTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBXUEdIdG1sQmxvY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1odG1sLmpzLm1hcCIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGNvbXBvbmVudF8xID0gcmVxdWlyZShcIkBsb2FkYWJsZS9jb21wb25lbnRcIik7XG5jb25zdCBDb2RlID0gY29tcG9uZW50XzEuZGVmYXVsdCgoKSA9PiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHJlcXVpcmUoJy4vY29kZScpKSk7XG5jb25zdCBIdG1sID0gY29tcG9uZW50XzEuZGVmYXVsdCgoKSA9PiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHJlcXVpcmUoJy4vaHRtbCcpKSk7XG5jb25zdCBQcmVmb3JtYXR0ZWQgPSBjb21wb25lbnRfMS5kZWZhdWx0KCgpID0+IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gcmVxdWlyZSgnLi9wcmVmb3JtYXR0ZWQnKSkpO1xuY29uc3QgUHVsbHF1b3RlID0gY29tcG9uZW50XzEuZGVmYXVsdCgoKSA9PiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHJlcXVpcmUoJy4vcHVsbHF1b3RlJykpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBDb2RlLFxuICAgIEh0bWwsXG4gICAgUHJlZm9ybWF0dGVkLFxuICAgIFB1bGxxdW90ZVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuY29uc3QgV1BHUHJlZm9ybWF0dGVkQmxvY2sgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IFxuICAgIC8vIGF0dHJzLFxuICAgIC8vIGlubmVyQmxvY2tzLFxuICAgIGlubmVySFRNTCB9ID0gcHJvcHM7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIndwZy1ibG9jayB3cGctYl9wcmVmb3JtYXR0ZWRcIiwgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHsgX19odG1sOiBpbm5lckhUTUwgfSB9KSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gV1BHUHJlZm9ybWF0dGVkQmxvY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcmVmb3JtYXR0ZWQuanMubWFwIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5jb25zdCBXUEdQdWxscXVvdGVCbG9jayA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgXG4gICAgLy8gYXR0cnMsXG4gICAgLy8gaW5uZXJCbG9ja3MsXG4gICAgaW5uZXJIVE1MIH0gPSBwcm9wcztcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwid3BnLWJsb2NrIHdwZy1iX3B1bGxxdW90ZVwiLCBkYW5nZXJvdXNseVNldElubmVySFRNTDogeyBfX2h0bWw6IGlubmVySFRNTCB9IH0pKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBXUEdQdWxscXVvdGVCbG9jaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXB1bGxxdW90ZS5qcy5tYXAiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCJAbG9hZGFibGUvY29tcG9uZW50XCIpO1xuY29uc3QgY29tbW9uXzEgPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5jb25zdCBmb3JtYXRfMSA9IHJlcXVpcmUoXCIuL2Zvcm1hdFwiKTtcbmNvbnN0IGxheW91dF8xID0gcmVxdWlyZShcIi4vbGF5b3V0XCIpO1xuY29uc3QgRGVmYXVsdEh0bWxCbG9jayA9IGNvbXBvbmVudF8xLmRlZmF1bHQoKCkgPT4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiByZXF1aXJlKCcuL2Zvcm1hdC9odG1sJykpKTtcbmZ1bmN0aW9uIEdldFRoZUJsb2NrKG5hbWUpIHtcbiAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgY2FzZSAnY29yZS9hdWRpbyc6IHJldHVybiBjb21tb25fMS5kZWZhdWx0LkF1ZGlvO1xuICAgICAgICBjYXNlICdjb3JlL2NvdmVyJzogcmV0dXJuIGNvbW1vbl8xLmRlZmF1bHQuQ292ZXI7XG4gICAgICAgIGNhc2UgJ2NvcmUvZmlsZSc6IHJldHVybiBjb21tb25fMS5kZWZhdWx0LkZpbGU7XG4gICAgICAgIGNhc2UgJ2NvcmUvZ2FsbGVyeSc6IHJldHVybiBjb21tb25fMS5kZWZhdWx0LkdhbGxlcnk7XG4gICAgICAgIGNhc2UgJ2NvcmUvaGVhZGluZyc6IHJldHVybiBjb21tb25fMS5kZWZhdWx0LkhlYWRpbmc7XG4gICAgICAgIGNhc2UgJ2NvcmUvaW1hZ2UnOiByZXR1cm4gY29tbW9uXzEuZGVmYXVsdC5JbWFnZTtcbiAgICAgICAgY2FzZSAnY29yZS9saXN0JzogcmV0dXJuIGNvbW1vbl8xLmRlZmF1bHQuTGlzdDtcbiAgICAgICAgY2FzZSAnY29yZS9wYXJhZ3JhcGgnOiByZXR1cm4gY29tbW9uXzEuZGVmYXVsdC5QYXJhZ3JhcGg7XG4gICAgICAgIGNhc2UgJ2NvcmUvcXVvdGUnOiByZXR1cm4gY29tbW9uXzEuZGVmYXVsdC5RdW90ZTtcbiAgICAgICAgY2FzZSAnY29yZS92aWRlbyc6IHJldHVybiBjb21tb25fMS5kZWZhdWx0LlZpZGVvO1xuICAgICAgICBjYXNlICdjb3JlL2NvZGUnOiByZXR1cm4gZm9ybWF0XzEuZGVmYXVsdC5Db2RlO1xuICAgICAgICBjYXNlICdjb3JlL2h0bWwnOiByZXR1cm4gZm9ybWF0XzEuZGVmYXVsdC5IdG1sO1xuICAgICAgICBjYXNlICdjb3JlL3ByZWZvcm1hdHRlZCc6IHJldHVybiBmb3JtYXRfMS5kZWZhdWx0LlByZWZvcm1hdHRlZDtcbiAgICAgICAgY2FzZSAnY29yZS9wdWxscXVvdGUnOiByZXR1cm4gZm9ybWF0XzEuZGVmYXVsdC5QdWxscXVvdGU7XG4gICAgICAgIGNhc2UgJ2NvcmUvY29sdW1ucyc6IHJldHVybiBsYXlvdXRfMS5kZWZhdWx0LkNvbHVtbnM7XG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiBEZWZhdWx0SHRtbEJsb2NrO1xuICAgIH1cbn1cbmV4cG9ydHMuR2V0VGhlQmxvY2sgPSBHZXRUaGVCbG9jaztcbmV4cG9ydHMuZGVmYXVsdCA9IE9iamVjdC5hc3NpZ24oe30sIGNvbW1vbl8xLmRlZmF1bHQsIGZvcm1hdF8xLmRlZmF1bHQpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5jb25zdCBpbmRleF8xID0gcmVxdWlyZShcIi4uLy4uL2luZGV4XCIpO1xuY29uc3QgV1BHQ29sdW1uc0Jsb2NrID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBcbiAgICAvLyBhdHRycyxcbiAgICBpbm5lckJsb2NrcywgfSA9IHByb3BzO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShpbm5lckJsb2NrcykpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdDb2x1bW5zIHNob3VsZCBoYXZlIGlubmVyQmxvY2tzJyk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBjb2xzID0gaW5uZXJCbG9ja3MubGVuZ3RoO1xuICAgIGNvbnN0IGNvbHVtbnMgPSBpbm5lckJsb2Nrcy5tYXAoKGNvbCwgY2kpID0+IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGB3cC1ibG9jay1jb2x1bW4gJHtjaSArIDF9LWNvbHVtbmAgfSwgY29sLmlubmVyQmxvY2tzLm1hcCgoYmxvY2ssIGJpKSA9PiBSZWFjdC5jcmVhdGVFbGVtZW50KGluZGV4XzEuV1BHQmxvY2ssIHsga2V5OiBiaSwgYmxvY2s6IGJsb2NrIH0pKSkpO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogYHdwLWJsb2NrLWNvbHVtbnMgaGFzLSR7Y29sc30tY29sdW1uc2AgfSwgY29sdW1ucykpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IFdQR0NvbHVtbnNCbG9jaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbHVtbnMuanMubWFwIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiQGxvYWRhYmxlL2NvbXBvbmVudFwiKTtcbmNvbnN0IENvbHVtbnMgPSBjb21wb25lbnRfMS5kZWZhdWx0KCgpID0+IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gcmVxdWlyZSgnLi9jb2x1bW5zJykpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBDb2x1bW5zXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5jb25zdCBibG9ja3NfMSA9IHJlcXVpcmUoXCIuL2Jsb2Nrc1wiKTtcbmNvbnN0IFdQR0Jsb2NrcyA9ICh7IGJsb2NrcywgbWFwVG9CbG9jayB9KSA9PiB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIndwZy1ibG9ja3NcIiB9LCBibG9ja3MuZmlsdGVyKGJsb2NrID0+ICEhYmxvY2suYmxvY2tOYW1lKS5tYXAoKGJsb2NrLCBpbmRleCkgPT4gUmVhY3QuY3JlYXRlRWxlbWVudChleHBvcnRzLldQR0Jsb2NrLCB7IGtleTogaW5kZXgsIGJsb2NrOiBibG9jaywgbWFwVG9CbG9jazogbWFwVG9CbG9jayB9KSkpKTtcbn07XG5leHBvcnRzLldQR0Jsb2NrID0gKHsgYmxvY2ssIG1hcFRvQmxvY2sgfSkgPT4ge1xuICAgIGNvbnN0IHsgYmxvY2tOYW1lLCBhdHRycywgaW5uZXJCbG9ja3MsIGlubmVySFRNTCB9ID0gYmxvY2s7XG4gICAgaWYgKCFibG9ja05hbWUpXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIGlmIChtYXBUb0Jsb2NrKVxuICAgICAgICBleHBvcnRzLldQR0Jsb2NrLk1hcFRvQmxvY2sgPSBtYXBUb0Jsb2NrO1xuICAgIGxldCBUaGVCbG9jayA9IGV4cG9ydHMuV1BHQmxvY2suTWFwVG9CbG9jayA/IGV4cG9ydHMuV1BHQmxvY2suTWFwVG9CbG9jayhibG9ja05hbWUpIDogbnVsbDtcbiAgICBpZiAoIVRoZUJsb2NrKVxuICAgICAgICBUaGVCbG9jayA9IGJsb2Nrc18xLkdldFRoZUJsb2NrKGJsb2NrTmFtZSk7XG4gICAgaWYgKCFUaGVCbG9jaylcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFRoZUJsb2NrLCB7IGJsb2NrTmFtZTogYmxvY2tOYW1lLCBhdHRyczogYXR0cnMsIGlubmVyQmxvY2tzOiBpbm5lckJsb2NrcywgaW5uZXJIVE1MOiBpbm5lckhUTUwgfSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IFdQR0Jsb2Nrcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2Rpc3RcIik7XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjE0LjBcbiAqIHJlYWN0LmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcycpO1xuXG52YXIgUmVhY3RWZXJzaW9uID0gJzE2LjE0LjAnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGRpc3BhdGNoZXIuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgYmF0Y2gncyBjb25maWd1cmF0aW9uIHN1Y2ggYXMgaG93IGxvbmcgYW4gdXBkYXRlXG4gKiBzaG91bGQgc3VzcGVuZCBmb3IgaWYgaXQgbmVlZHMgdG8uXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyA9IHtcbiAgc3VzcGVuc2U6IG51bGxcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgb3duZXIuXG4gKlxuICogVGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIGNvbXBvbmVudCB3aG8gc2hvdWxkIG93biBhbnkgY29tcG9uZW50cyB0aGF0IGFyZVxuICogY3VycmVudGx5IGJlaW5nIGNvbnN0cnVjdGVkLlxuICovXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxudmFyIEJFRk9SRV9TTEFTSF9SRSA9IC9eKC4qKVtcXFxcXFwvXS87XG5mdW5jdGlvbiBkZXNjcmliZUNvbXBvbmVudEZyYW1lIChuYW1lLCBzb3VyY2UsIG93bmVyTmFtZSkge1xuICB2YXIgc291cmNlSW5mbyA9ICcnO1xuXG4gIGlmIChzb3VyY2UpIHtcbiAgICB2YXIgcGF0aCA9IHNvdXJjZS5maWxlTmFtZTtcbiAgICB2YXIgZmlsZU5hbWUgPSBwYXRoLnJlcGxhY2UoQkVGT1JFX1NMQVNIX1JFLCAnJyk7XG5cbiAgICB7XG4gICAgICAvLyBJbiBERVYsIGluY2x1ZGUgY29kZSBmb3IgYSBjb21tb24gc3BlY2lhbCBjYXNlOlxuICAgICAgLy8gcHJlZmVyIFwiZm9sZGVyL2luZGV4LmpzXCIgaW5zdGVhZCBvZiBqdXN0IFwiaW5kZXguanNcIi5cbiAgICAgIGlmICgvXmluZGV4XFwuLy50ZXN0KGZpbGVOYW1lKSkge1xuICAgICAgICB2YXIgbWF0Y2ggPSBwYXRoLm1hdGNoKEJFRk9SRV9TTEFTSF9SRSk7XG5cbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgdmFyIHBhdGhCZWZvcmVTbGFzaCA9IG1hdGNoWzFdO1xuXG4gICAgICAgICAgaWYgKHBhdGhCZWZvcmVTbGFzaCkge1xuICAgICAgICAgICAgdmFyIGZvbGRlck5hbWUgPSBwYXRoQmVmb3JlU2xhc2gucmVwbGFjZShCRUZPUkVfU0xBU0hfUkUsICcnKTtcbiAgICAgICAgICAgIGZpbGVOYW1lID0gZm9sZGVyTmFtZSArICcvJyArIGZpbGVOYW1lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHNvdXJjZUluZm8gPSAnIChhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBzb3VyY2UubGluZU51bWJlciArICcpJztcbiAgfSBlbHNlIGlmIChvd25lck5hbWUpIHtcbiAgICBzb3VyY2VJbmZvID0gJyAoY3JlYXRlZCBieSAnICsgb3duZXJOYW1lICsgJyknO1xuICB9XG5cbiAgcmV0dXJuICdcXG4gICAgaW4gJyArIChuYW1lIHx8ICdVbmtub3duJykgKyBzb3VyY2VJbmZvO1xufVxuXG52YXIgUmVzb2x2ZWQgPSAxO1xuZnVuY3Rpb24gcmVmaW5lUmVzb2x2ZWRMYXp5Q29tcG9uZW50KGxhenlDb21wb25lbnQpIHtcbiAgcmV0dXJuIGxhenlDb21wb25lbnQuX3N0YXR1cyA9PT0gUmVzb2x2ZWQgPyBsYXp5Q29tcG9uZW50Ll9yZXN1bHQgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIG91dGVyVHlwZS5kaXNwbGF5TmFtZSB8fCAoZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gXCJQcm9maWxlclwiO1xuXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgcmV0dXJuICdDb250ZXh0LkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICByZXR1cm4gJ0NvbnRleHQuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciB0aGVuYWJsZSA9IHR5cGU7XG4gICAgICAgICAgdmFyIHJlc29sdmVkVGhlbmFibGUgPSByZWZpbmVSZXNvbHZlZExhenlDb21wb25lbnQodGhlbmFibGUpO1xuXG4gICAgICAgICAgaWYgKHJlc29sdmVkVGhlbmFibGUpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHJlc29sdmVkVGhlbmFibGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0ge307XG52YXIgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBudWxsO1xuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBlbGVtZW50O1xuICB9XG59XG5cbntcbiAgLy8gU3RhY2sgaW1wbGVtZW50YXRpb24gaW5qZWN0ZWQgYnkgdGhlIGN1cnJlbnQgcmVuZGVyZXIuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrID0gbnVsbDtcblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YWNrID0gJyc7IC8vIEFkZCBhbiBleHRyYSB0b3AgZnJhbWUgd2hpbGUgYW4gZWxlbWVudCBpcyBiZWluZyB2YWxpZGF0ZWRcblxuICAgIGlmIChjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCkge1xuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50LnR5cGUpO1xuICAgICAgdmFyIG93bmVyID0gY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQuX293bmVyO1xuICAgICAgc3RhY2sgKz0gZGVzY3JpYmVDb21wb25lbnRGcmFtZShuYW1lLCBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudC5fc291cmNlLCBvd25lciAmJiBnZXRDb21wb25lbnROYW1lKG93bmVyLnR5cGUpKTtcbiAgICB9IC8vIERlbGVnYXRlIHRvIHRoZSBpbmplY3RlZCByZW5kZXJlci1zcGVjaWZpYyBpbXBsZW1lbnRhdGlvblxuXG5cbiAgICB2YXIgaW1wbCA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrO1xuXG4gICAgaWYgKGltcGwpIHtcbiAgICAgIHN0YWNrICs9IGltcGwoKSB8fCAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhY2s7XG4gIH07XG59XG5cbi8qKlxuICogVXNlZCBieSBhY3QoKSB0byB0cmFjayB3aGV0aGVyIHlvdSdyZSBpbnNpZGUgYW4gYWN0KCkgc2NvcGUuXG4gKi9cbnZhciBJc1NvbWVSZW5kZXJlckFjdGluZyA9IHtcbiAgY3VycmVudDogZmFsc2Vcbn07XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IHtcbiAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjogUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixcbiAgUmVhY3RDdXJyZW50QmF0Y2hDb25maWc6IFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLFxuICBSZWFjdEN1cnJlbnRPd25lcjogUmVhY3RDdXJyZW50T3duZXIsXG4gIElzU29tZVJlbmRlcmVyQWN0aW5nOiBJc1NvbWVSZW5kZXJlckFjdGluZyxcbiAgLy8gVXNlZCBieSByZW5kZXJlcnMgdG8gYXZvaWQgYnVuZGxpbmcgb2JqZWN0LWFzc2lnbiB0d2ljZSBpbiBVTUQgYnVuZGxlczpcbiAgYXNzaWduOiBfYXNzaWduXG59O1xuXG57XG4gIF9hc3NpZ24oUmVhY3RTaGFyZWRJbnRlcm5hbHMsIHtcbiAgICAvLyBUaGVzZSBzaG91bGQgbm90IGJlIGluY2x1ZGVkIGluIHByb2R1Y3Rpb24uXG4gICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTogUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSxcbiAgICAvLyBTaGltIGZvciBSZWFjdCBET00gMTYuMC4wIHdoaWNoIHN0aWxsIGRlc3RydWN0dXJlZCAoYnV0IG5vdCB1c2VkKSB0aGlzLlxuICAgIC8vIFRPRE86IHJlbW92ZSBpbiBSZWFjdCAxNy4wLlxuICAgIFJlYWN0Q29tcG9uZW50VHJlZUhvb2s6IHt9XG4gIH0pO1xufVxuXG4vLyBieSBjYWxscyB0byB0aGVzZSBtZXRob2RzIGJ5IGEgQmFiZWwgcGx1Z2luLlxuLy9cbi8vIEluIFBST0QgKG9yIGluIHBhY2thZ2VzIHdpdGhvdXQgYWNjZXNzIHRvIFJlYWN0IGludGVybmFscyksXG4vLyB0aGV5IGFyZSBsZWZ0IGFzIHRoZXkgYXJlIGluc3RlYWQuXG5cbmZ1bmN0aW9uIHdhcm4oZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ3dhcm4nLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBoYXNFeGlzdGluZ1N0YWNrID0gYXJncy5sZW5ndGggPiAwICYmIHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPT09ICdzdHJpbmcnICYmIGFyZ3NbYXJncy5sZW5ndGggLSAxXS5pbmRleE9mKCdcXG4gICAgaW4nKSA9PT0gMDtcblxuICAgIGlmICghaGFzRXhpc3RpbmdTdGFjaykge1xuICAgICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuICcnICsgaXRlbTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfVxufVxuXG52YXIgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50ID0ge307XG5cbmZ1bmN0aW9uIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCBjYWxsZXJOYW1lKSB7XG4gIHtcbiAgICB2YXIgX2NvbnN0cnVjdG9yID0gcHVibGljSW5zdGFuY2UuY29uc3RydWN0b3I7XG4gICAgdmFyIGNvbXBvbmVudE5hbWUgPSBfY29uc3RydWN0b3IgJiYgKF9jb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSB8fCBfY29uc3RydWN0b3IubmFtZSkgfHwgJ1JlYWN0Q2xhc3MnO1xuICAgIHZhciB3YXJuaW5nS2V5ID0gY29tcG9uZW50TmFtZSArIFwiLlwiICsgY2FsbGVyTmFtZTtcblxuICAgIGlmIChkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlcnJvcihcIkNhbid0IGNhbGwgJXMgb24gYSBjb21wb25lbnQgdGhhdCBpcyBub3QgeWV0IG1vdW50ZWQuIFwiICsgJ1RoaXMgaXMgYSBuby1vcCwgYnV0IGl0IG1pZ2h0IGluZGljYXRlIGEgYnVnIGluIHlvdXIgYXBwbGljYXRpb24uICcgKyAnSW5zdGVhZCwgYXNzaWduIHRvIGB0aGlzLnN0YXRlYCBkaXJlY3RseSBvciBkZWZpbmUgYSBgc3RhdGUgPSB7fTtgICcgKyAnY2xhc3MgcHJvcGVydHkgd2l0aCB0aGUgZGVzaXJlZCBzdGF0ZSBpbiB0aGUgJXMgY29tcG9uZW50LicsIGNhbGxlck5hbWUsIGNvbXBvbmVudE5hbWUpO1xuXG4gICAgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldID0gdHJ1ZTtcbiAgfVxufVxuLyoqXG4gKiBUaGlzIGlzIHRoZSBhYnN0cmFjdCBBUEkgZm9yIGFuIHVwZGF0ZSBxdWV1ZS5cbiAqL1xuXG5cbnZhciBSZWFjdE5vb3BVcGRhdGVRdWV1ZSA9IHtcbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGNvbXBvc2l0ZSBjb21wb25lbnQgaXMgbW91bnRlZC5cbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2Ugd2Ugd2FudCB0byB0ZXN0LlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1vdW50ZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICogQHByb3RlY3RlZFxuICAgKiBAZmluYWxcbiAgICovXG4gIGlzTW91bnRlZDogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gICAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICAgKlxuICAgKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gICAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICAgKlxuICAgKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gICAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlRm9yY2VVcGRhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ2ZvcmNlVXBkYXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIGFsbCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyBvciBgc2V0U3RhdGVgIHRvIG11dGF0ZSBzdGF0ZS5cbiAgICogWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICAgKlxuICAgKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICAgKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbXBsZXRlU3RhdGUgTmV4dCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVJlcGxhY2VTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjb21wbGV0ZVN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAncmVwbGFjZVN0YXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBUaGlzIG9ubHkgZXhpc3RzIGJlY2F1c2UgX3BlbmRpbmdTdGF0ZSBpc1xuICAgKiBpbnRlcm5hbC4gVGhpcyBwcm92aWRlcyBhIG1lcmdpbmcgc3RyYXRlZ3kgdGhhdCBpcyBub3QgYXZhaWxhYmxlIHRvIGRlZXBcbiAgICogcHJvcGVydGllcyB3aGljaCBpcyBjb25mdXNpbmcuIFRPRE86IEV4cG9zZSBwZW5kaW5nU3RhdGUgb3IgZG9uJ3QgdXNlIGl0XG4gICAqIGR1cmluZyB0aGUgbWVyZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBOYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVTZXRTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdzZXRTdGF0ZScpO1xuICB9XG59O1xuXG52YXIgZW1wdHlPYmplY3QgPSB7fTtcblxue1xuICBPYmplY3QuZnJlZXplKGVtcHR5T2JqZWN0KTtcbn1cbi8qKlxuICogQmFzZSBjbGFzcyBoZWxwZXJzIGZvciB0aGUgdXBkYXRpbmcgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKi9cblxuXG5mdW5jdGlvbiBDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDsgLy8gV2UgaW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCB1cGRhdGVyIGJ1dCB0aGUgcmVhbCBvbmUgZ2V0cyBpbmplY3RlZCBieSB0aGVcbiAgLy8gcmVuZGVyZXIuXG5cbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxuQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50ID0ge307XG4vKipcbiAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgdG8gbXV0YXRlXG4gKiBzdGF0ZS4gWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAgd2lsbCBydW4gc3luY2hyb25vdXNseSxcbiAqIGFzIHRoZXkgbWF5IGV2ZW50dWFsbHkgYmUgYmF0Y2hlZCB0b2dldGhlci4gIFlvdSBjYW4gcHJvdmlkZSBhbiBvcHRpb25hbFxuICogY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGNhbGwgdG8gc2V0U3RhdGUgaXMgYWN0dWFsbHlcbiAqIGNvbXBsZXRlZC5cbiAqXG4gKiBXaGVuIGEgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdG8gc2V0U3RhdGUsIGl0IHdpbGwgYmUgY2FsbGVkIGF0IHNvbWUgcG9pbnQgaW5cbiAqIHRoZSBmdXR1cmUgKG5vdCBzeW5jaHJvbm91c2x5KS4gSXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgdXAgdG8gZGF0ZVxuICogY29tcG9uZW50IGFyZ3VtZW50cyAoc3RhdGUsIHByb3BzLCBjb250ZXh0KS4gVGhlc2UgdmFsdWVzIGNhbiBiZSBkaWZmZXJlbnRcbiAqIGZyb20gdGhpcy4qIGJlY2F1c2UgeW91ciBmdW5jdGlvbiBtYXkgYmUgY2FsbGVkIGFmdGVyIHJlY2VpdmVQcm9wcyBidXQgYmVmb3JlXG4gKiBzaG91bGRDb21wb25lbnRVcGRhdGUsIGFuZCB0aGlzIG5ldyBzdGF0ZSwgcHJvcHMsIGFuZCBjb250ZXh0IHdpbGwgbm90IHlldCBiZVxuICogYXNzaWduZWQgdG8gdGhpcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSBvciBmdW5jdGlvbiB0b1xuICogICAgICAgIHByb2R1Y2UgbmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIGN1cnJlbnQgc3RhdGUuXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHN0YXRlIGlzIHVwZGF0ZWQuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuXG5Db21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2spIHtcbiAgaWYgKCEodHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyB8fCBwYXJ0aWFsU3RhdGUgPT0gbnVsbCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJzZXRTdGF0ZSguLi4pOiB0YWtlcyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzIHRvIHVwZGF0ZSBvciBhIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcy5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcywgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgJ3NldFN0YXRlJyk7XG59O1xuLyoqXG4gKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAqXG4gKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAqXG4gKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICpcbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgdXBkYXRlIGlzIGNvbXBsZXRlLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cblxuXG5Db21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcywgY2FsbGJhY2ssICdmb3JjZVVwZGF0ZScpO1xufTtcbi8qKlxuICogRGVwcmVjYXRlZCBBUElzLiBUaGVzZSBBUElzIHVzZWQgdG8gZXhpc3Qgb24gY2xhc3NpYyBSZWFjdCBjbGFzc2VzIGJ1dCBzaW5jZVxuICogd2Ugd291bGQgbGlrZSB0byBkZXByZWNhdGUgdGhlbSwgd2UncmUgbm90IGdvaW5nIHRvIG1vdmUgdGhlbSBvdmVyIHRvIHRoaXNcbiAqIG1vZGVybiBiYXNlIGNsYXNzLiBJbnN0ZWFkLCB3ZSBkZWZpbmUgYSBnZXR0ZXIgdGhhdCB3YXJucyBpZiBpdCdzIGFjY2Vzc2VkLlxuICovXG5cblxue1xuICB2YXIgZGVwcmVjYXRlZEFQSXMgPSB7XG4gICAgaXNNb3VudGVkOiBbJ2lzTW91bnRlZCcsICdJbnN0ZWFkLCBtYWtlIHN1cmUgdG8gY2xlYW4gdXAgc3Vic2NyaXB0aW9ucyBhbmQgcGVuZGluZyByZXF1ZXN0cyBpbiAnICsgJ2NvbXBvbmVudFdpbGxVbm1vdW50IHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzLiddLFxuICAgIHJlcGxhY2VTdGF0ZTogWydyZXBsYWNlU3RhdGUnLCAnUmVmYWN0b3IgeW91ciBjb2RlIHRvIHVzZSBzZXRTdGF0ZSBpbnN0ZWFkIChzZWUgJyArICdodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzMyMzYpLiddXG4gIH07XG5cbiAgdmFyIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyA9IGZ1bmN0aW9uIChtZXRob2ROYW1lLCBpbmZvKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbXBvbmVudC5wcm90b3R5cGUsIG1ldGhvZE5hbWUsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCclcyguLi4pIGlzIGRlcHJlY2F0ZWQgaW4gcGxhaW4gSmF2YVNjcmlwdCBSZWFjdCBjbGFzc2VzLiAlcycsIGluZm9bMF0sIGluZm9bMV0pO1xuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgZm9yICh2YXIgZm5OYW1lIGluIGRlcHJlY2F0ZWRBUElzKSB7XG4gICAgaWYgKGRlcHJlY2F0ZWRBUElzLmhhc093blByb3BlcnR5KGZuTmFtZSkpIHtcbiAgICAgIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyhmbk5hbWUsIGRlcHJlY2F0ZWRBUElzW2ZuTmFtZV0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBDb21wb25lbnREdW1teSgpIHt9XG5cbkNvbXBvbmVudER1bW15LnByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4vKipcbiAqIENvbnZlbmllbmNlIGNvbXBvbmVudCB3aXRoIGRlZmF1bHQgc2hhbGxvdyBlcXVhbGl0eSBjaGVjayBmb3Igc0NVLlxuICovXG5cbmZ1bmN0aW9uIFB1cmVDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxudmFyIHB1cmVDb21wb25lbnRQcm90b3R5cGUgPSBQdXJlQ29tcG9uZW50LnByb3RvdHlwZSA9IG5ldyBDb21wb25lbnREdW1teSgpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFB1cmVDb21wb25lbnQ7IC8vIEF2b2lkIGFuIGV4dHJhIHByb3RvdHlwZSBqdW1wIGZvciB0aGVzZSBtZXRob2RzLlxuXG5fYXNzaWduKHB1cmVDb21wb25lbnRQcm90b3R5cGUsIENvbXBvbmVudC5wcm90b3R5cGUpO1xuXG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmlzUHVyZVJlYWN0Q29tcG9uZW50ID0gdHJ1ZTtcblxuLy8gYW4gaW1tdXRhYmxlIG9iamVjdCB3aXRoIGEgc2luZ2xlIG11dGFibGUgdmFsdWVcbmZ1bmN0aW9uIGNyZWF0ZVJlZigpIHtcbiAgdmFyIHJlZk9iamVjdCA9IHtcbiAgICBjdXJyZW50OiBudWxsXG4gIH07XG5cbiAge1xuICAgIE9iamVjdC5zZWFsKHJlZk9iamVjdCk7XG4gIH1cblxuICByZXR1cm4gcmVmT2JqZWN0O1xufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biwgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24sIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL2ZiLm1lL3JlYWN0LXNwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL2ZiLm1lL3JlYWN0LXNwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgY29uZmlnLl9fc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gY29uZmlnLl9fc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9mYi5tZS9yZWFjdC1zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCBvZiB0aGUgZ2l2ZW4gdHlwZS5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY3JlYXRlZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY29uZmlnLCBjaGlsZHJlbikge1xuICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICB2YXIgcHJvcHMgPSB7fTtcbiAgdmFyIGtleSA9IG51bGw7XG4gIHZhciByZWYgPSBudWxsO1xuICB2YXIgc2VsZiA9IG51bGw7XG4gIHZhciBzb3VyY2UgPSBudWxsO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuXG4gICAgICB7XG4gICAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgc2VsZiA9IGNvbmZpZy5fX3NlbGYgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zZWxmO1xuICAgIHNvdXJjZSA9IGNvbmZpZy5fX3NvdXJjZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NvdXJjZTsgLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cblxuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuXG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRBcnJheSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAge1xuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xufVxuZnVuY3Rpb24gY2xvbmVBbmRSZXBsYWNlS2V5KG9sZEVsZW1lbnQsIG5ld0tleSkge1xuICB2YXIgbmV3RWxlbWVudCA9IFJlYWN0RWxlbWVudChvbGRFbGVtZW50LnR5cGUsIG5ld0tleSwgb2xkRWxlbWVudC5yZWYsIG9sZEVsZW1lbnQuX3NlbGYsIG9sZEVsZW1lbnQuX3NvdXJjZSwgb2xkRWxlbWVudC5fb3duZXIsIG9sZEVsZW1lbnQucHJvcHMpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cbi8qKlxuICogQ2xvbmUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgdXNpbmcgZWxlbWVudCBhcyB0aGUgc3RhcnRpbmcgcG9pbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2Nsb25lZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNsb25lRWxlbWVudChlbGVtZW50LCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIGlmICghIShlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IHVuZGVmaW5lZCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJSZWFjdC5jbG9uZUVsZW1lbnQoLi4uKTogVGhlIGFyZ3VtZW50IG11c3QgYmUgYSBSZWFjdCBlbGVtZW50LCBidXQgeW91IHBhc3NlZCBcIiArIGVsZW1lbnQgKyBcIi5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHZhciBwcm9wTmFtZTsgLy8gT3JpZ2luYWwgcHJvcHMgYXJlIGNvcGllZFxuXG4gIHZhciBwcm9wcyA9IF9hc3NpZ24oe30sIGVsZW1lbnQucHJvcHMpOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cblxuICB2YXIga2V5ID0gZWxlbWVudC5rZXk7XG4gIHZhciByZWYgPSBlbGVtZW50LnJlZjsgLy8gU2VsZiBpcyBwcmVzZXJ2ZWQgc2luY2UgdGhlIG93bmVyIGlzIHByZXNlcnZlZC5cblxuICB2YXIgc2VsZiA9IGVsZW1lbnQuX3NlbGY7IC8vIFNvdXJjZSBpcyBwcmVzZXJ2ZWQgc2luY2UgY2xvbmVFbGVtZW50IGlzIHVubGlrZWx5IHRvIGJlIHRhcmdldGVkIGJ5IGFcbiAgLy8gdHJhbnNwaWxlciwgYW5kIHRoZSBvcmlnaW5hbCBzb3VyY2UgaXMgcHJvYmFibHkgYSBiZXR0ZXIgaW5kaWNhdG9yIG9mIHRoZVxuICAvLyB0cnVlIG93bmVyLlxuXG4gIHZhciBzb3VyY2UgPSBlbGVtZW50Ll9zb3VyY2U7IC8vIE93bmVyIHdpbGwgYmUgcHJlc2VydmVkLCB1bmxlc3MgcmVmIGlzIG92ZXJyaWRkZW5cblxuICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgLy8gU2lsZW50bHkgc3RlYWwgdGhlIHJlZiBmcm9tIHRoZSBwYXJlbnQuXG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgb3duZXIgPSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBvdmVycmlkZSBleGlzdGluZyBwcm9wc1xuXG5cbiAgICB2YXIgZGVmYXVsdFByb3BzO1xuXG4gICAgaWYgKGVsZW1lbnQudHlwZSAmJiBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICBkZWZhdWx0UHJvcHMgPSBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzO1xuICAgIH1cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIGlmIChjb25maWdbcHJvcE5hbWVdID09PSB1bmRlZmluZWQgJiYgZGVmYXVsdFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cblxuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuXG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cblxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQoZWxlbWVudC50eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cblxudmFyIFNFUEFSQVRPUiA9ICcuJztcbnZhciBTVUJTRVBBUkFUT1IgPSAnOic7XG4vKipcbiAqIEVzY2FwZSBhbmQgd3JhcCBrZXkgc28gaXQgaXMgc2FmZSB0byB1c2UgYXMgYSByZWFjdGlkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSB0byBiZSBlc2NhcGVkLlxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgZXNjYXBlZCBrZXkuXG4gKi9cblxuZnVuY3Rpb24gZXNjYXBlKGtleSkge1xuICB2YXIgZXNjYXBlUmVnZXggPSAvWz06XS9nO1xuICB2YXIgZXNjYXBlckxvb2t1cCA9IHtcbiAgICAnPSc6ICc9MCcsXG4gICAgJzonOiAnPTInXG4gIH07XG4gIHZhciBlc2NhcGVkU3RyaW5nID0gKCcnICsga2V5KS5yZXBsYWNlKGVzY2FwZVJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gZXNjYXBlckxvb2t1cFttYXRjaF07XG4gIH0pO1xuICByZXR1cm4gJyQnICsgZXNjYXBlZFN0cmluZztcbn1cbi8qKlxuICogVE9ETzogVGVzdCB0aGF0IGEgc2luZ2xlIGNoaWxkIGFuZCBhbiBhcnJheSB3aXRoIG9uZSBpdGVtIGhhdmUgdGhlIHNhbWUga2V5XG4gKiBwYXR0ZXJuLlxuICovXG5cblxudmFyIGRpZFdhcm5BYm91dE1hcHMgPSBmYWxzZTtcbnZhciB1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCA9IC9cXC8rL2c7XG5cbmZ1bmN0aW9uIGVzY2FwZVVzZXJQcm92aWRlZEtleSh0ZXh0KSB7XG4gIHJldHVybiAoJycgKyB0ZXh0KS5yZXBsYWNlKHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4LCAnJCYvJyk7XG59XG5cbnZhciBQT09MX1NJWkUgPSAxMDtcbnZhciB0cmF2ZXJzZUNvbnRleHRQb29sID0gW107XG5cbmZ1bmN0aW9uIGdldFBvb2xlZFRyYXZlcnNlQ29udGV4dChtYXBSZXN1bHQsIGtleVByZWZpeCwgbWFwRnVuY3Rpb24sIG1hcENvbnRleHQpIHtcbiAgaWYgKHRyYXZlcnNlQ29udGV4dFBvb2wubGVuZ3RoKSB7XG4gICAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IHRyYXZlcnNlQ29udGV4dFBvb2wucG9wKCk7XG4gICAgdHJhdmVyc2VDb250ZXh0LnJlc3VsdCA9IG1hcFJlc3VsdDtcbiAgICB0cmF2ZXJzZUNvbnRleHQua2V5UHJlZml4ID0ga2V5UHJlZml4O1xuICAgIHRyYXZlcnNlQ29udGV4dC5mdW5jID0gbWFwRnVuY3Rpb247XG4gICAgdHJhdmVyc2VDb250ZXh0LmNvbnRleHQgPSBtYXBDb250ZXh0O1xuICAgIHRyYXZlcnNlQ29udGV4dC5jb3VudCA9IDA7XG4gICAgcmV0dXJuIHRyYXZlcnNlQ29udGV4dDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdWx0OiBtYXBSZXN1bHQsXG4gICAgICBrZXlQcmVmaXg6IGtleVByZWZpeCxcbiAgICAgIGZ1bmM6IG1hcEZ1bmN0aW9uLFxuICAgICAgY29udGV4dDogbWFwQ29udGV4dCxcbiAgICAgIGNvdW50OiAwXG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWxlYXNlVHJhdmVyc2VDb250ZXh0KHRyYXZlcnNlQ29udGV4dCkge1xuICB0cmF2ZXJzZUNvbnRleHQucmVzdWx0ID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmtleVByZWZpeCA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5mdW5jID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmNvbnRleHQgPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQuY291bnQgPSAwO1xuXG4gIGlmICh0cmF2ZXJzZUNvbnRleHRQb29sLmxlbmd0aCA8IFBPT0xfU0laRSkge1xuICAgIHRyYXZlcnNlQ29udGV4dFBvb2wucHVzaCh0cmF2ZXJzZUNvbnRleHQpO1xuICB9XG59XG4vKipcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHshc3RyaW5nfSBuYW1lU29GYXIgTmFtZSBvZiB0aGUga2V5IHBhdGggc28gZmFyLlxuICogQHBhcmFtIHshZnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrIHRvIGludm9rZSB3aXRoIGVhY2ggY2hpbGQgZm91bmQuXG4gKiBAcGFyYW0gez8qfSB0cmF2ZXJzZUNvbnRleHQgVXNlZCB0byBwYXNzIGluZm9ybWF0aW9uIHRocm91Z2hvdXQgdGhlIHRyYXZlcnNhbFxuICogcHJvY2Vzcy5cbiAqIEByZXR1cm4geyFudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4gaW4gdGhpcyBzdWJ0cmVlLlxuICovXG5cblxuZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGRyZW4sIG5hbWVTb0ZhciwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBjaGlsZHJlbjtcblxuICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgLy8gQWxsIG9mIHRoZSBhYm92ZSBhcmUgcGVyY2VpdmVkIGFzIG51bGwuXG4gICAgY2hpbGRyZW4gPSBudWxsO1xuICB9XG5cbiAgdmFyIGludm9rZUNhbGxiYWNrID0gZmFsc2U7XG5cbiAgaWYgKGNoaWxkcmVuID09PSBudWxsKSB7XG4gICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHN3aXRjaCAoY2hpbGRyZW4uJCR0eXBlb2YpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBpZiAoaW52b2tlQ2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayh0cmF2ZXJzZUNvbnRleHQsIGNoaWxkcmVuLCAvLyBJZiBpdCdzIHRoZSBvbmx5IGNoaWxkLCB0cmVhdCB0aGUgbmFtZSBhcyBpZiBpdCB3YXMgd3JhcHBlZCBpbiBhbiBhcnJheVxuICAgIC8vIHNvIHRoYXQgaXQncyBjb25zaXN0ZW50IGlmIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gZ3Jvd3MuXG4gICAgbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiArIGdldENvbXBvbmVudEtleShjaGlsZHJlbiwgMCkgOiBuYW1lU29GYXIpO1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgdmFyIGNoaWxkO1xuICB2YXIgbmV4dE5hbWU7XG4gIHZhciBzdWJ0cmVlQ291bnQgPSAwOyAvLyBDb3VudCBvZiBjaGlsZHJlbiBmb3VuZCBpbiB0aGUgY3VycmVudCBzdWJ0cmVlLlxuXG4gIHZhciBuZXh0TmFtZVByZWZpeCA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgOiBuYW1lU29GYXIgKyBTVUJTRVBBUkFUT1I7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRDb21wb25lbnRLZXkoY2hpbGQsIGkpO1xuICAgICAgc3VidHJlZUNvdW50ICs9IHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkLCBuZXh0TmFtZSwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihjaGlsZHJlbik7XG5cbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcblxuICAgICAge1xuICAgICAgICAvLyBXYXJuIGFib3V0IHVzaW5nIE1hcHMgYXMgY2hpbGRyZW5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gPT09IGNoaWxkcmVuLmVudHJpZXMpIHtcbiAgICAgICAgICBpZiAoIWRpZFdhcm5BYm91dE1hcHMpIHtcbiAgICAgICAgICAgIHdhcm4oJ1VzaW5nIE1hcHMgYXMgY2hpbGRyZW4gaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gQ29uc2lkZXIgY29udmVydGluZyBjaGlsZHJlbiB0byAnICsgJ2FuIGFycmF5IG9mIGtleWVkIFJlYWN0RWxlbWVudHMgaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaWRXYXJuQWJvdXRNYXBzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwoY2hpbGRyZW4pO1xuICAgICAgdmFyIHN0ZXA7XG4gICAgICB2YXIgaWkgPSAwO1xuXG4gICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgIGNoaWxkID0gc3RlcC52YWx1ZTtcbiAgICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldENvbXBvbmVudEtleShjaGlsZCwgaWkrKyk7XG4gICAgICAgIHN1YnRyZWVDb3VudCArPSB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZCwgbmV4dE5hbWUsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBhZGRlbmR1bSA9ICcnO1xuXG4gICAgICB7XG4gICAgICAgIGFkZGVuZHVtID0gJyBJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5ICcgKyAnaW5zdGVhZC4nICsgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBjaGlsZHJlblN0cmluZyA9ICcnICsgY2hpbGRyZW47XG5cbiAgICAgIHtcbiAgICAgICAge1xuICAgICAgICAgIHRocm93IEVycm9yKCBcIk9iamVjdHMgYXJlIG5vdCB2YWxpZCBhcyBhIFJlYWN0IGNoaWxkIChmb3VuZDogXCIgKyAoY2hpbGRyZW5TdHJpbmcgPT09ICdbb2JqZWN0IE9iamVjdF0nID8gJ29iamVjdCB3aXRoIGtleXMgeycgKyBPYmplY3Qua2V5cyhjaGlsZHJlbikuam9pbignLCAnKSArICd9JyA6IGNoaWxkcmVuU3RyaW5nKSArIFwiKS5cIiArIGFkZGVuZHVtICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3VidHJlZUNvdW50O1xufVxuLyoqXG4gKiBUcmF2ZXJzZXMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLCBidXRcbiAqIG1pZ2h0IGFsc28gYmUgc3BlY2lmaWVkIHRocm91Z2ggYXR0cmlidXRlczpcbiAqXG4gKiAtIGB0cmF2ZXJzZUFsbENoaWxkcmVuKHRoaXMucHJvcHMuY2hpbGRyZW4sIC4uLilgXG4gKiAtIGB0cmF2ZXJzZUFsbENoaWxkcmVuKHRoaXMucHJvcHMubGVmdFBhbmVsQ2hpbGRyZW4sIC4uLilgXG4gKlxuICogVGhlIGB0cmF2ZXJzZUNvbnRleHRgIGlzIGFuIG9wdGlvbmFsIGFyZ3VtZW50IHRoYXQgaXMgcGFzc2VkIHRocm91Z2ggdGhlXG4gKiBlbnRpcmUgdHJhdmVyc2FsLiBJdCBjYW4gYmUgdXNlZCB0byBzdG9yZSBhY2N1bXVsYXRpb25zIG9yIGFueXRoaW5nIGVsc2UgdGhhdFxuICogdGhlIGNhbGxiYWNrIG1pZ2h0IGZpbmQgcmVsZXZhbnQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBvYmplY3QuXG4gKiBAcGFyYW0geyFmdW5jdGlvbn0gY2FsbGJhY2sgVG8gaW52b2tlIHVwb24gdHJhdmVyc2luZyBlYWNoIGNoaWxkLlxuICogQHBhcmFtIHs/Kn0gdHJhdmVyc2VDb250ZXh0IENvbnRleHQgZm9yIHRyYXZlcnNhbC5cbiAqIEByZXR1cm4geyFudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4gaW4gdGhpcyBzdWJ0cmVlLlxuICovXG5cblxuZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkcmVuLCAnJywgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG59XG4vKipcbiAqIEdlbmVyYXRlIGEga2V5IHN0cmluZyB0aGF0IGlkZW50aWZpZXMgYSBjb21wb25lbnQgd2l0aGluIGEgc2V0LlxuICpcbiAqIEBwYXJhbSB7Kn0gY29tcG9uZW50IEEgY29tcG9uZW50IHRoYXQgY291bGQgY29udGFpbiBhIG1hbnVhbCBrZXkuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggSW5kZXggdGhhdCBpcyB1c2VkIGlmIGEgbWFudWFsIGtleSBpcyBub3QgcHJvdmlkZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnRLZXkoY29tcG9uZW50LCBpbmRleCkge1xuICAvLyBEbyBzb21lIHR5cGVjaGVja2luZyBoZXJlIHNpbmNlIHdlIGNhbGwgdGhpcyBibGluZGx5LiBXZSB3YW50IHRvIGVuc3VyZVxuICAvLyB0aGF0IHdlIGRvbid0IGJsb2NrIHBvdGVudGlhbCBmdXR1cmUgRVMgQVBJcy5cbiAgaWYgKHR5cGVvZiBjb21wb25lbnQgPT09ICdvYmplY3QnICYmIGNvbXBvbmVudCAhPT0gbnVsbCAmJiBjb21wb25lbnQua2V5ICE9IG51bGwpIHtcbiAgICAvLyBFeHBsaWNpdCBrZXlcbiAgICByZXR1cm4gZXNjYXBlKGNvbXBvbmVudC5rZXkpO1xuICB9IC8vIEltcGxpY2l0IGtleSBkZXRlcm1pbmVkIGJ5IHRoZSBpbmRleCBpbiB0aGUgc2V0XG5cblxuICByZXR1cm4gaW5kZXgudG9TdHJpbmcoMzYpO1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoU2luZ2xlQ2hpbGQoYm9va0tlZXBpbmcsIGNoaWxkLCBuYW1lKSB7XG4gIHZhciBmdW5jID0gYm9va0tlZXBpbmcuZnVuYyxcbiAgICAgIGNvbnRleHQgPSBib29rS2VlcGluZy5jb250ZXh0O1xuICBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGJvb2tLZWVwaW5nLmNvdW50KyspO1xufVxuLyoqXG4gKiBJdGVyYXRlcyB0aHJvdWdoIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5mb3JlYWNoXG4gKlxuICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZvckVhY2hGdW5jXG4gKiBAcGFyYW0geyp9IGZvckVhY2hDb250ZXh0IENvbnRleHQgZm9yIGZvckVhY2hDb250ZXh0LlxuICovXG5cblxuZnVuY3Rpb24gZm9yRWFjaENoaWxkcmVuKGNoaWxkcmVuLCBmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cblxuICB2YXIgdHJhdmVyc2VDb250ZXh0ID0gZ2V0UG9vbGVkVHJhdmVyc2VDb250ZXh0KG51bGwsIG51bGwsIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCk7XG4gIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hTaW5nbGVDaGlsZCwgdHJhdmVyc2VDb250ZXh0KTtcbiAgcmVsZWFzZVRyYXZlcnNlQ29udGV4dCh0cmF2ZXJzZUNvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBtYXBTaW5nbGVDaGlsZEludG9Db250ZXh0KGJvb2tLZWVwaW5nLCBjaGlsZCwgY2hpbGRLZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGJvb2tLZWVwaW5nLnJlc3VsdCxcbiAgICAgIGtleVByZWZpeCA9IGJvb2tLZWVwaW5nLmtleVByZWZpeCxcbiAgICAgIGZ1bmMgPSBib29rS2VlcGluZy5mdW5jLFxuICAgICAgY29udGV4dCA9IGJvb2tLZWVwaW5nLmNvbnRleHQ7XG4gIHZhciBtYXBwZWRDaGlsZCA9IGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgYm9va0tlZXBpbmcuY291bnQrKyk7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkobWFwcGVkQ2hpbGQpKSB7XG4gICAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChtYXBwZWRDaGlsZCwgcmVzdWx0LCBjaGlsZEtleSwgZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiBjO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKG1hcHBlZENoaWxkICE9IG51bGwpIHtcbiAgICBpZiAoaXNWYWxpZEVsZW1lbnQobWFwcGVkQ2hpbGQpKSB7XG4gICAgICBtYXBwZWRDaGlsZCA9IGNsb25lQW5kUmVwbGFjZUtleShtYXBwZWRDaGlsZCwgLy8gS2VlcCBib3RoIHRoZSAobWFwcGVkKSBhbmQgb2xkIGtleXMgaWYgdGhleSBkaWZmZXIsIGp1c3QgYXNcbiAgICAgIC8vIHRyYXZlcnNlQWxsQ2hpbGRyZW4gdXNlZCB0byBkbyBmb3Igb2JqZWN0cyBhcyBjaGlsZHJlblxuICAgICAga2V5UHJlZml4ICsgKG1hcHBlZENoaWxkLmtleSAmJiAoIWNoaWxkIHx8IGNoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSA/IGVzY2FwZVVzZXJQcm92aWRlZEtleShtYXBwZWRDaGlsZC5rZXkpICsgJy8nIDogJycpICsgY2hpbGRLZXkpO1xuICAgIH1cblxuICAgIHJlc3VsdC5wdXNoKG1hcHBlZENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCBhcnJheSwgcHJlZml4LCBmdW5jLCBjb250ZXh0KSB7XG4gIHZhciBlc2NhcGVkUHJlZml4ID0gJyc7XG5cbiAgaWYgKHByZWZpeCAhPSBudWxsKSB7XG4gICAgZXNjYXBlZFByZWZpeCA9IGVzY2FwZVVzZXJQcm92aWRlZEtleShwcmVmaXgpICsgJy8nO1xuICB9XG5cbiAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IGdldFBvb2xlZFRyYXZlcnNlQ29udGV4dChhcnJheSwgZXNjYXBlZFByZWZpeCwgZnVuYywgY29udGV4dCk7XG4gIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIG1hcFNpbmdsZUNoaWxkSW50b0NvbnRleHQsIHRyYXZlcnNlQ29udGV4dCk7XG4gIHJlbGVhc2VUcmF2ZXJzZUNvbnRleHQodHJhdmVyc2VDb250ZXh0KTtcbn1cbi8qKlxuICogTWFwcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVubWFwXG4gKlxuICogVGhlIHByb3ZpZGVkIG1hcEZ1bmN0aW9uKGNoaWxkLCBrZXksIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZnVuYyBUaGUgbWFwIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IENvbnRleHQgZm9yIG1hcEZ1bmN0aW9uLlxuICogQHJldHVybiB7b2JqZWN0fSBPYmplY3QgY29udGFpbmluZyB0aGUgb3JkZXJlZCBtYXAgb2YgcmVzdWx0cy5cbiAqL1xuXG5cbmZ1bmN0aW9uIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCByZXN1bHQsIG51bGwsIGZ1bmMsIGNvbnRleHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBDb3VudCB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXNcbiAqIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuY291bnRcbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbi5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNvdW50Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSwgbnVsbCk7XG59XG4vKipcbiAqIEZsYXR0ZW4gYSBjaGlsZHJlbiBvYmplY3QgKHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCkgYW5kXG4gKiByZXR1cm4gYW4gYXJyYXkgd2l0aCBhcHByb3ByaWF0ZWx5IHJlLWtleWVkIGNoaWxkcmVuLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbnRvYXJyYXlcbiAqL1xuXG5cbmZ1bmN0aW9uIHRvQXJyYXkoY2hpbGRyZW4pIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCByZXN1bHQsIG51bGwsIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZDtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGNoaWxkIGluIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiBhbmQgdmVyaWZpZXMgdGhhdCB0aGVyZVxuICogaXMgb25seSBvbmUgY2hpbGQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVub25seVxuICpcbiAqIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgZnVuY3Rpb24gYXNzdW1lcyB0aGF0IGEgc2luZ2xlIGNoaWxkIGdldHNcbiAqIHBhc3NlZCB3aXRob3V0IGEgd3JhcHBlciwgYnV0IHRoZSBwdXJwb3NlIG9mIHRoaXMgaGVscGVyIGZ1bmN0aW9uIGlzIHRvXG4gKiBhYnN0cmFjdCBhd2F5IHRoZSBwYXJ0aWN1bGFyIHN0cnVjdHVyZSBvZiBjaGlsZHJlbi5cbiAqXG4gKiBAcGFyYW0gez9vYmplY3R9IGNoaWxkcmVuIENoaWxkIGNvbGxlY3Rpb24gc3RydWN0dXJlLlxuICogQHJldHVybiB7UmVhY3RFbGVtZW50fSBUaGUgZmlyc3QgYW5kIG9ubHkgYFJlYWN0RWxlbWVudGAgY29udGFpbmVkIGluIHRoZVxuICogc3RydWN0dXJlLlxuICovXG5cblxuZnVuY3Rpb24gb25seUNoaWxkKGNoaWxkcmVuKSB7XG4gIGlmICghaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiUmVhY3QuQ2hpbGRyZW4ub25seSBleHBlY3RlZCB0byByZWNlaXZlIGEgc2luZ2xlIFJlYWN0IGVsZW1lbnQgY2hpbGQuXCIgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoZGVmYXVsdFZhbHVlLCBjYWxjdWxhdGVDaGFuZ2VkQml0cykge1xuICBpZiAoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGNhbGN1bGF0ZUNoYW5nZWRCaXRzID0gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICB7XG4gICAgICBpZiAoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgIT09IG51bGwgJiYgdHlwZW9mIGNhbGN1bGF0ZUNoYW5nZWRCaXRzICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVycm9yKCdjcmVhdGVDb250ZXh0OiBFeHBlY3RlZCB0aGUgb3B0aW9uYWwgc2Vjb25kIGFyZ3VtZW50IHRvIGJlIGEgJyArICdmdW5jdGlvbi4gSW5zdGVhZCByZWNlaXZlZDogJXMnLCBjYWxjdWxhdGVDaGFuZ2VkQml0cyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRleHQgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0NPTlRFWFRfVFlQRSxcbiAgICBfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IGNhbGN1bGF0ZUNoYW5nZWRCaXRzLFxuICAgIC8vIEFzIGEgd29ya2Fyb3VuZCB0byBzdXBwb3J0IG11bHRpcGxlIGNvbmN1cnJlbnQgcmVuZGVyZXJzLCB3ZSBjYXRlZ29yaXplXG4gICAgLy8gc29tZSByZW5kZXJlcnMgYXMgcHJpbWFyeSBhbmQgb3RoZXJzIGFzIHNlY29uZGFyeS4gV2Ugb25seSBleHBlY3RcbiAgICAvLyB0aGVyZSB0byBiZSB0d28gY29uY3VycmVudCByZW5kZXJlcnMgYXQgbW9zdDogUmVhY3QgTmF0aXZlIChwcmltYXJ5KSBhbmRcbiAgICAvLyBGYWJyaWMgKHNlY29uZGFyeSk7IFJlYWN0IERPTSAocHJpbWFyeSkgYW5kIFJlYWN0IEFSVCAoc2Vjb25kYXJ5KS5cbiAgICAvLyBTZWNvbmRhcnkgcmVuZGVyZXJzIHN0b3JlIHRoZWlyIGNvbnRleHQgdmFsdWVzIG9uIHNlcGFyYXRlIGZpZWxkcy5cbiAgICBfY3VycmVudFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgX2N1cnJlbnRWYWx1ZTI6IGRlZmF1bHRWYWx1ZSxcbiAgICAvLyBVc2VkIHRvIHRyYWNrIGhvdyBtYW55IGNvbmN1cnJlbnQgcmVuZGVyZXJzIHRoaXMgY29udGV4dCBjdXJyZW50bHlcbiAgICAvLyBzdXBwb3J0cyB3aXRoaW4gaW4gYSBzaW5nbGUgcmVuZGVyZXIuIFN1Y2ggYXMgcGFyYWxsZWwgc2VydmVyIHJlbmRlcmluZy5cbiAgICBfdGhyZWFkQ291bnQ6IDAsXG4gICAgLy8gVGhlc2UgYXJlIGNpcmN1bGFyXG4gICAgUHJvdmlkZXI6IG51bGwsXG4gICAgQ29uc3VtZXI6IG51bGxcbiAgfTtcbiAgY29udGV4dC5Qcm92aWRlciA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfUFJPVklERVJfVFlQRSxcbiAgICBfY29udGV4dDogY29udGV4dFxuICB9O1xuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSBmYWxzZTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gZmFsc2U7XG5cbiAge1xuICAgIC8vIEEgc2VwYXJhdGUgb2JqZWN0LCBidXQgcHJveGllcyBiYWNrIHRvIHRoZSBvcmlnaW5hbCBjb250ZXh0IG9iamVjdCBmb3JcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS4gSXQgaGFzIGEgZGlmZmVyZW50ICQkdHlwZW9mLCBzbyB3ZSBjYW4gcHJvcGVybHlcbiAgICAvLyB3YXJuIGZvciB0aGUgaW5jb3JyZWN0IHVzYWdlIG9mIENvbnRleHQgYXMgYSBDb25zdW1lci5cbiAgICB2YXIgQ29uc3VtZXIgPSB7XG4gICAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgICAgX2NvbnRleHQ6IGNvbnRleHQsXG4gICAgICBfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IGNvbnRleHQuX2NhbGN1bGF0ZUNoYW5nZWRCaXRzXG4gICAgfTsgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbm90IHNldHRpbmcgYSB2YWx1ZSwgd2hpY2ggaXMgaW50ZW50aW9uYWwgaGVyZVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ29uc3VtZXIsIHtcbiAgICAgIFByb3ZpZGVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gdHJ1ZTtcblxuICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Qcm92aWRlcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Qcm92aWRlcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Qcm92aWRlcjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX1Byb3ZpZGVyKSB7XG4gICAgICAgICAgY29udGV4dC5Qcm92aWRlciA9IF9Qcm92aWRlcjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZSA9IF9jdXJyZW50VmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfY3VycmVudFZhbHVlMjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlMjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZTIpIHtcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUyID0gX2N1cnJlbnRWYWx1ZTI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfdGhyZWFkQ291bnQ6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX3RocmVhZENvdW50O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfdGhyZWFkQ291bnQpIHtcbiAgICAgICAgICBjb250ZXh0Ll90aHJlYWRDb3VudCA9IF90aHJlYWRDb3VudDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIENvbnN1bWVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gdHJ1ZTtcblxuICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Db25zdW1lcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Db25zdW1lcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Db25zdW1lcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pOyAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBtaXNzaW5nIHByb3BlcnRpZXMgYmVjYXVzZSBpdCBkb2Vzbid0IHVuZGVyc3RhbmQgZGVmaW5lUHJvcGVydHlcblxuICAgIGNvbnRleHQuQ29uc3VtZXIgPSBDb25zdW1lcjtcbiAgfVxuXG4gIHtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIgPSBudWxsO1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlcjIgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGxhenkoY3Rvcikge1xuICB2YXIgbGF6eVR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0xBWllfVFlQRSxcbiAgICBfY3RvcjogY3RvcixcbiAgICAvLyBSZWFjdCB1c2VzIHRoZXNlIGZpZWxkcyB0byBzdG9yZSB0aGUgcmVzdWx0LlxuICAgIF9zdGF0dXM6IC0xLFxuICAgIF9yZXN1bHQ6IG51bGxcbiAgfTtcblxuICB7XG4gICAgLy8gSW4gcHJvZHVjdGlvbiwgdGhpcyB3b3VsZCBqdXN0IHNldCBpdCBvbiB0aGUgb2JqZWN0LlxuICAgIHZhciBkZWZhdWx0UHJvcHM7XG4gICAgdmFyIHByb3BUeXBlcztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhsYXp5VHlwZSwge1xuICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGRlZmF1bHRQcm9wcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3RGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgZXJyb3IoJ1JlYWN0LmxhenkoLi4uKTogSXQgaXMgbm90IHN1cHBvcnRlZCB0byBhc3NpZ24gYGRlZmF1bHRQcm9wc2AgdG8gJyArICdhIGxhenkgY29tcG9uZW50IGltcG9ydC4gRWl0aGVyIHNwZWNpZnkgdGhlbSB3aGVyZSB0aGUgY29tcG9uZW50ICcgKyAnaXMgZGVmaW5lZCwgb3IgY3JlYXRlIGEgd3JhcHBpbmcgY29tcG9uZW50IGFyb3VuZCBpdC4nKTtcblxuICAgICAgICAgIGRlZmF1bHRQcm9wcyA9IG5ld0RlZmF1bHRQcm9wczsgLy8gTWF0Y2ggcHJvZHVjdGlvbiBiZWhhdmlvciBtb3JlIGNsb3NlbHk6XG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdkZWZhdWx0UHJvcHMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFR5cGVzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdQcm9wVHlwZXMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgcHJvcFR5cGVzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgcHJvcFR5cGVzID0gbmV3UHJvcFR5cGVzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcblxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ3Byb3BUeXBlcycsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGxhenlUeXBlO1xufVxuXG5mdW5jdGlvbiBmb3J3YXJkUmVmKHJlbmRlcikge1xuICB7XG4gICAgaWYgKHJlbmRlciAhPSBudWxsICYmIHJlbmRlci4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgcmVjZWl2ZWQgYSBgbWVtb2AgJyArICdjb21wb25lbnQuIEluc3RlYWQgb2YgZm9yd2FyZFJlZihtZW1vKC4uLikpLCB1c2UgJyArICdtZW1vKGZvcndhcmRSZWYoLi4uKSkuJyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcmVuZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgd2FzIGdpdmVuICVzLicsIHJlbmRlciA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiByZW5kZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocmVuZGVyLmxlbmd0aCAhPT0gMCAmJiByZW5kZXIubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgYWNjZXB0IGV4YWN0bHkgdHdvIHBhcmFtZXRlcnM6IHByb3BzIGFuZCByZWYuICVzJywgcmVuZGVyLmxlbmd0aCA9PT0gMSA/ICdEaWQgeW91IGZvcmdldCB0byB1c2UgdGhlIHJlZiBwYXJhbWV0ZXI/JyA6ICdBbnkgYWRkaXRpb25hbCBwYXJhbWV0ZXIgd2lsbCBiZSB1bmRlZmluZWQuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlbmRlciAhPSBudWxsKSB7XG4gICAgICBpZiAocmVuZGVyLmRlZmF1bHRQcm9wcyAhPSBudWxsIHx8IHJlbmRlci5wcm9wVHlwZXMgIT0gbnVsbCkge1xuICAgICAgICBlcnJvcignZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGRvIG5vdCBzdXBwb3J0IHByb3BUeXBlcyBvciBkZWZhdWx0UHJvcHMuICcgKyAnRGlkIHlvdSBhY2NpZGVudGFsbHkgcGFzcyBhIFJlYWN0IGNvbXBvbmVudD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFLFxuICAgIHJlbmRlcjogcmVuZGVyXG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1JFU1BPTkRFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1NDT1BFX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSk7XG59XG5cbmZ1bmN0aW9uIG1lbW8odHlwZSwgY29tcGFyZSkge1xuICB7XG4gICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkpIHtcbiAgICAgIGVycm9yKCdtZW1vOiBUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIGNvbXBvbmVudC4gSW5zdGVhZCAnICsgJ3JlY2VpdmVkOiAlcycsIHR5cGUgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfTUVNT19UWVBFLFxuICAgIHR5cGU6IHR5cGUsXG4gICAgY29tcGFyZTogY29tcGFyZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbXBhcmVcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZURpc3BhdGNoZXIoKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50O1xuXG4gIGlmICghKGRpc3BhdGNoZXIgIT09IG51bGwpKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiSW52YWxpZCBob29rIGNhbGwuIEhvb2tzIGNhbiBvbmx5IGJlIGNhbGxlZCBpbnNpZGUgb2YgdGhlIGJvZHkgb2YgYSBmdW5jdGlvbiBjb21wb25lbnQuIFRoaXMgY291bGQgaGFwcGVuIGZvciBvbmUgb2YgdGhlIGZvbGxvd2luZyByZWFzb25zOlxcbjEuIFlvdSBtaWdodCBoYXZlIG1pc21hdGNoaW5nIHZlcnNpb25zIG9mIFJlYWN0IGFuZCB0aGUgcmVuZGVyZXIgKHN1Y2ggYXMgUmVhY3QgRE9NKVxcbjIuIFlvdSBtaWdodCBiZSBicmVha2luZyB0aGUgUnVsZXMgb2YgSG9va3NcXG4zLiBZb3UgbWlnaHQgaGF2ZSBtb3JlIHRoYW4gb25lIGNvcHkgb2YgUmVhY3QgaW4gdGhlIHNhbWUgYXBwXFxuU2VlIGh0dHBzOi8vZmIubWUvcmVhY3QtaW52YWxpZC1ob29rLWNhbGwgZm9yIHRpcHMgYWJvdXQgaG93IHRvIGRlYnVnIGFuZCBmaXggdGhpcyBwcm9ibGVtLlwiICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXI7XG59XG5cbmZ1bmN0aW9uIHVzZUNvbnRleHQoQ29udGV4dCwgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcblxuICB7XG4gICAgaWYgKHVuc3RhYmxlX29ic2VydmVkQml0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvcigndXNlQ29udGV4dCgpIHNlY29uZCBhcmd1bWVudCBpcyByZXNlcnZlZCBmb3IgZnV0dXJlICcgKyAndXNlIGluIFJlYWN0LiBQYXNzaW5nIGl0IGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnWW91IHBhc3NlZDogJXMuJXMnLCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMsIHR5cGVvZiB1bnN0YWJsZV9vYnNlcnZlZEJpdHMgPT09ICdudW1iZXInICYmIEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzJdKSA/ICdcXG5cXG5EaWQgeW91IGNhbGwgYXJyYXkubWFwKHVzZUNvbnRleHQpPyAnICsgJ0NhbGxpbmcgSG9va3MgaW5zaWRlIGEgbG9vcCBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0xlYXJuIG1vcmUgYXQgaHR0cHM6Ly9mYi5tZS9ydWxlcy1vZi1ob29rcycgOiAnJyk7XG4gICAgfSAvLyBUT0RPOiBhZGQgYSBtb3JlIGdlbmVyaWMgd2FybmluZyBmb3IgaW52YWxpZCB2YWx1ZXMuXG5cblxuICAgIGlmIChDb250ZXh0Ll9jb250ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciByZWFsQ29udGV4dCA9IENvbnRleHQuX2NvbnRleHQ7IC8vIERvbid0IGRlZHVwbGljYXRlIGJlY2F1c2UgdGhpcyBsZWdpdGltYXRlbHkgY2F1c2VzIGJ1Z3NcbiAgICAgIC8vIGFuZCBub2JvZHkgc2hvdWxkIGJlIHVzaW5nIHRoaXMgaW4gZXhpc3RpbmcgY29kZS5cblxuICAgICAgaWYgKHJlYWxDb250ZXh0LkNvbnN1bWVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Db25zdW1lcikgaXMgbm90IHN1cHBvcnRlZCwgbWF5IGNhdXNlIGJ1Z3MsIGFuZCB3aWxsIGJlICcgKyAncmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9IGVsc2UgaWYgKHJlYWxDb250ZXh0LlByb3ZpZGVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Qcm92aWRlcikgaXMgbm90IHN1cHBvcnRlZC4gJyArICdEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ29udGV4dChDb250ZXh0LCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMpO1xufVxuZnVuY3Rpb24gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcbn1cbmZ1bmN0aW9uIHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCk7XG59XG5mdW5jdGlvbiB1c2VSZWYoaW5pdGlhbFZhbHVlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVmKGluaXRpYWxWYWx1ZSk7XG59XG5mdW5jdGlvbiB1c2VFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VDYWxsYmFjayhjYWxsYmFjaywgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZU1lbW8oY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTWVtbyhjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyRm4pIHtcbiAge1xuICAgIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgICByZXR1cm4gZGlzcGF0Y2hlci51c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbik7XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAgaWYgKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtRm9yUHJvcHMoZWxlbWVudFByb3BzKSB7XG4gIGlmIChlbGVtZW50UHJvcHMgIT09IG51bGwgJiYgZWxlbWVudFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oZWxlbWVudFByb3BzLl9fc291cmNlKTtcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICBpZiAoIWluZm8pIHtcbiAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGluZm87XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gIH1cblxuICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICB7XG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuICB9XG5cbiAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0pO1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChmcmFnbWVudCk7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICB9XG59XG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzKHByb3BzKTtcblxuICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgfVxuXG4gICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGVycm9yKCdSZWFjdC5jcmVhdGVFbGVtZW50OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50ID0gY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICBpZiAodmFsaWRUeXBlKSB7XG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cbnZhciBkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSA9IGZhbHNlO1xuZnVuY3Rpb24gY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uKHR5cGUpIHtcbiAgdmFyIHZhbGlkYXRlZEZhY3RvcnkgPSBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24uYmluZChudWxsLCB0eXBlKTtcbiAgdmFsaWRhdGVkRmFjdG9yeS50eXBlID0gdHlwZTtcblxuICB7XG4gICAgaWYgKCFkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSkge1xuICAgICAgZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkgPSB0cnVlO1xuXG4gICAgICB3YXJuKCdSZWFjdC5jcmVhdGVGYWN0b3J5KCkgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gQ29uc2lkZXIgdXNpbmcgSlNYICcgKyAnb3IgdXNlIFJlYWN0LmNyZWF0ZUVsZW1lbnQoKSBkaXJlY3RseSBpbnN0ZWFkLicpO1xuICAgIH0gLy8gTGVnYWN5IGhvb2s6IHJlbW92ZSBpdFxuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsaWRhdGVkRmFjdG9yeSwgJ3R5cGUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCdGYWN0b3J5LnR5cGUgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHRoZSBjbGFzcyBkaXJlY3RseSAnICsgJ2JlZm9yZSBwYXNzaW5nIGl0IHRvIGNyZWF0ZUZhY3RvcnkuJyk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICd0eXBlJywge1xuICAgICAgICAgIHZhbHVlOiB0eXBlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB2YWxpZGF0ZWRGYWN0b3J5O1xufVxuZnVuY3Rpb24gY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24oZWxlbWVudCwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciBuZXdFbGVtZW50ID0gY2xvbmVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIG5ld0VsZW1lbnQudHlwZSk7XG4gIH1cblxuICB2YWxpZGF0ZVByb3BUeXBlcyhuZXdFbGVtZW50KTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbntcblxuICB0cnkge1xuICAgIHZhciBmcm96ZW5PYmplY3QgPSBPYmplY3QuZnJlZXplKHt9KTtcbiAgICB2YXIgdGVzdE1hcCA9IG5ldyBNYXAoW1tmcm96ZW5PYmplY3QsIG51bGxdXSk7XG4gICAgdmFyIHRlc3RTZXQgPSBuZXcgU2V0KFtmcm96ZW5PYmplY3RdKTsgLy8gVGhpcyBpcyBuZWNlc3NhcnkgZm9yIFJvbGx1cCB0byBub3QgY29uc2lkZXIgdGhlc2UgdW51c2VkLlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yb2xsdXAvcm9sbHVwL2lzc3Vlcy8xNzcxXG4gICAgLy8gVE9ETzogd2UgY2FuIHJlbW92ZSB0aGVzZSBpZiBSb2xsdXAgZml4ZXMgdGhlIGJ1Zy5cblxuICAgIHRlc3RNYXAuc2V0KDAsIDApO1xuICAgIHRlc3RTZXQuYWRkKDApO1xuICB9IGNhdGNoIChlKSB7XG4gIH1cbn1cblxudmFyIGNyZWF0ZUVsZW1lbnQkMSA9ICBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24gO1xudmFyIGNsb25lRWxlbWVudCQxID0gIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uIDtcbnZhciBjcmVhdGVGYWN0b3J5ID0gIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbiA7XG52YXIgQ2hpbGRyZW4gPSB7XG4gIG1hcDogbWFwQ2hpbGRyZW4sXG4gIGZvckVhY2g6IGZvckVhY2hDaGlsZHJlbixcbiAgY291bnQ6IGNvdW50Q2hpbGRyZW4sXG4gIHRvQXJyYXk6IHRvQXJyYXksXG4gIG9ubHk6IG9ubHlDaGlsZFxufTtcblxuZXhwb3J0cy5DaGlsZHJlbiA9IENoaWxkcmVuO1xuZXhwb3J0cy5Db21wb25lbnQgPSBDb21wb25lbnQ7XG5leHBvcnRzLkZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbmV4cG9ydHMuUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xuZXhwb3J0cy5QdXJlQ29tcG9uZW50ID0gUHVyZUNvbXBvbmVudDtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG5leHBvcnRzLlN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbmV4cG9ydHMuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQgPSBSZWFjdFNoYXJlZEludGVybmFscztcbmV4cG9ydHMuY2xvbmVFbGVtZW50ID0gY2xvbmVFbGVtZW50JDE7XG5leHBvcnRzLmNyZWF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0O1xuZXhwb3J0cy5jcmVhdGVFbGVtZW50ID0gY3JlYXRlRWxlbWVudCQxO1xuZXhwb3J0cy5jcmVhdGVGYWN0b3J5ID0gY3JlYXRlRmFjdG9yeTtcbmV4cG9ydHMuY3JlYXRlUmVmID0gY3JlYXRlUmVmO1xuZXhwb3J0cy5mb3J3YXJkUmVmID0gZm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnQgPSBpc1ZhbGlkRWxlbWVudDtcbmV4cG9ydHMubGF6eSA9IGxhenk7XG5leHBvcnRzLm1lbW8gPSBtZW1vO1xuZXhwb3J0cy51c2VDYWxsYmFjayA9IHVzZUNhbGxiYWNrO1xuZXhwb3J0cy51c2VDb250ZXh0ID0gdXNlQ29udGV4dDtcbmV4cG9ydHMudXNlRGVidWdWYWx1ZSA9IHVzZURlYnVnVmFsdWU7XG5leHBvcnRzLnVzZUVmZmVjdCA9IHVzZUVmZmVjdDtcbmV4cG9ydHMudXNlSW1wZXJhdGl2ZUhhbmRsZSA9IHVzZUltcGVyYXRpdmVIYW5kbGU7XG5leHBvcnRzLnVzZUxheW91dEVmZmVjdCA9IHVzZUxheW91dEVmZmVjdDtcbmV4cG9ydHMudXNlTWVtbyA9IHVzZU1lbW87XG5leHBvcnRzLnVzZVJlZHVjZXIgPSB1c2VSZWR1Y2VyO1xuZXhwb3J0cy51c2VSZWYgPSB1c2VSZWY7XG5leHBvcnRzLnVzZVN0YXRlID0gdXNlU3RhdGU7XG5leHBvcnRzLnZlcnNpb24gPSBSZWFjdFZlcnNpb247XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBEZWZhdWx0RXJyb3JQYWdlIGZyb20gXCJuZXh0L2Vycm9yXCI7XHJcblxyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCI7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIjtcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0XCI7XHJcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzXCI7XHJcblxyXG5pbXBvcnQgU3BhY2UgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ2VuZXJhbC9zcGFjZVwiO1xyXG5cclxuaW1wb3J0IFdQIGZyb20gXCIuLi8uLi91dGlscy93b3JkcHJlc3NcIjtcclxuaW1wb3J0IFdQR0Jsb2NrcyBmcm9tIFwicmVhY3QtZ3V0ZW5iZXJnXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgd2lkdGg6IFwiOTAlXCIsXHJcbiAgICAgICAgbWFyZ2luOiBcImF1dG9cIixcclxuICAgIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IFNsdWcgPSAoeyBwb3N0LCBhdXRob3IsIHJlY2VudCB9KSA9PiB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBpZiAocm91dGVyLmlzRmFsbGJhY2spIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249XCJyb3dcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiAxMDAsIG1hcmdpbkJvdHRvbTogMTAwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXBvc3QpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9XCJub2luZGV4XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgICAgIDxEZWZhdWx0RXJyb3JQYWdlIHN0YXR1c0NvZGU9ezQwNH0gLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICA8U3BhY2UgLz5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17OH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImgzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cG9zdC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnl7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtgJHthdXRob3IubmFtZX0gb24gJHtuZXcgRGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3QuZGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApLnRvRGF0ZVN0cmluZygpfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFdQR0Jsb2NrcyBibG9ja3M9e3Bvc3QuYmxvY2tzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezR9IHN0eWxlPXt7IG1pbldpZHRoOiBcIjMwMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhcGVyIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIHN0eWxlPXt7IHBhZGRpbmc6IDIwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVjZW50IE5ld3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdCBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVjZW50Lm1hcChyZWMgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBrZXk9e3JlYy5pZH0gYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXtyZWMudGl0bGUucmVuZGVyZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnk9e25ldyBEYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYy5kYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnRvRGF0ZVN0cmluZygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnk9e1wiVElUTEVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5PXtcIkRBVEUvQVVUSE9SXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxTcGFjZSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICAgIGxldCBwb3N0cyA9IFtdO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBwb3N0cyA9IGF3YWl0IFdQLnBvc3RzKCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBwYXRocyA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IHBvc3Qgb2YgcG9zdHMpIHtcclxuICAgICAgICBwYXRocy5wdXNoKHtcclxuICAgICAgICAgICAgcGFyYW1zOiB7IHNsdWc6IHBvc3Quc2x1ZyB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogdHJ1ZSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgY3R4ID0+IHtcclxuICAgIGxldCBwb3N0cyA9IFtdO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgcG9zdHMgPSBhd2FpdCBXUC5wb3N0cygpLnNsdWcoY3R4LnNsdWcpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocG9zdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IFthdXRob3IsIHJlY2VudF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgIFdQLnVzZXJzKCkuaWQocG9zdHNbMF0uYXV0aG9yKSxcclxuICAgICAgICAgICAgV1AucG9zdHMoKVxyXG4gICAgICAgICAgICAgICAgLmV4Y2x1ZGUocG9zdHNbMF0uaWQpXHJcbiAgICAgICAgICAgICAgICAucGVyUGFnZSg1KVxyXG4gICAgICAgICAgICAgICAgLnBhZ2UoMSlcclxuICAgICAgICAgICAgICAgIC5jYXRlZ29yaWVzKHBvc3RzWzBdLmNhdGVnb3JpZXMpLFxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIHJldHVybiB7IHByb3BzOiB7IHBvc3Q6IHBvc3RzWzBdLCBhdXRob3IsIHJlY2VudCB9LCByZXZhbGlkYXRlOiAxMCB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHByb3BzOiB7IHBvc3Q6IG51bGwsIGF1dGhvcjogbnVsbCwgcmVjZW50OiBbXSB9IH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbHVnO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9