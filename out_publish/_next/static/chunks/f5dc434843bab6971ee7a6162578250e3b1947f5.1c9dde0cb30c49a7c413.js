(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=d,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),s=n("FYa8"),c=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var s=a.key.slice(a.key.indexOf("$")+1);e.has(s)?o=!1:e.add(s)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,u=p.length;c<u;c++){var d=p[c];if(a.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?o=!1:n.add(d);else{var l=a.props[d],f=r[d]||new Set;"name"===d&&i||!f.has(l)?(f.add(l),r[d]=f):o=!1}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(s.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:f,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}m.rewind=function(){};var b=m;t.default=b},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},IsqK:function(e,t,n){"use strict";var r=n("wx14"),a=n("Ff2n"),o=n("q1tI"),i=(n("17x9"),n("iuhU")),s=n("H2TA"),c=n("ofer"),u=n("MquD"),d=o.forwardRef((function(e,t){var n=e.children,s=e.classes,d=e.className,l=e.disableTypography,p=void 0!==l&&l,f=e.inset,m=void 0!==f&&f,b=e.primary,v=e.primaryTypographyProps,h=e.secondary,y=e.secondaryTypographyProps,g=Object(a.a)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),x=o.useContext(u.a).dense,O=null!=b?b:n;null==O||O.type===c.a||p||(O=o.createElement(c.a,Object(r.a)({variant:x?"body2":"body1",className:s.primary,component:"span",display:"block"},v),O));var w=h;return null==w||w.type===c.a||p||(w=o.createElement(c.a,Object(r.a)({variant:"body2",className:s.secondary,color:"textSecondary",display:"block"},y),w)),o.createElement("div",Object(r.a)({className:Object(i.default)(s.root,d,x&&s.dense,m&&s.inset,O&&w&&s.multiline),ref:t},g),O,w)}));t.a=Object(s.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(d)},MquD:function(e,t,n){"use strict";var r=n("q1tI"),a=r.createContext({});t.a=a},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),s=n("a1gu"),c=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),l=function(e){i(n,e);var t=u(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=l},a1gu:function(e,t,n){var r=n("cDf5"),a=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}},"eD//":function(e,t,n){"use strict";var r=n("wx14"),a=n("Ff2n"),o=n("q1tI"),i=(n("17x9"),n("iuhU")),s=n("H2TA"),c=n("MquD"),u=o.forwardRef((function(e,t){var n=e.children,s=e.classes,u=e.className,d=e.component,l=void 0===d?"ul":d,p=e.dense,f=void 0!==p&&p,m=e.disablePadding,b=void 0!==m&&m,v=e.subheader,h=Object(a.a)(e,["children","classes","className","component","dense","disablePadding","subheader"]),y=o.useMemo((function(){return{dense:f}}),[f]);return o.createElement(c.a.Provider,{value:y},o.createElement(l,Object(r.a)({className:Object(i.default)(s.root,u,f&&s.dense,!b&&s.padding,v&&s.subheader),ref:t},h),v,n))}));t.a=Object(s.a)({root:{listStyle:"none",margin:0,padding:0,position:"relative"},padding:{paddingTop:8,paddingBottom:8},dense:{},subheader:{paddingTop:0}},{name:"MuiList"})(u)},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},tVbE:function(e,t,n){"use strict";var r=n("wx14"),a=n("Ff2n"),o=n("q1tI"),i=(n("17x9"),n("iuhU")),s=n("H2TA"),c=n("VD++"),u=n("ucBr"),d=n("bfFb"),l=n("MquD"),p=n("i8i4"),f="undefined"===typeof window?o.useEffect:o.useLayoutEffect,m=o.forwardRef((function(e,t){var n=e.alignItems,s=void 0===n?"center":n,m=e.autoFocus,b=void 0!==m&&m,v=e.button,h=void 0!==v&&v,y=e.children,g=e.classes,x=e.className,O=e.component,w=e.ContainerComponent,M=void 0===w?"li":w,_=e.ContainerProps,C=(_=void 0===_?{}:_).className,j=Object(a.a)(_,["className"]),I=e.dense,k=void 0!==I&&I,P=e.disabled,A=void 0!==P&&P,E=e.disableGutters,S=void 0!==E&&E,N=e.divider,T=void 0!==N&&N,q=e.focusVisibleClassName,D=e.selected,H=void 0!==D&&D,R=Object(a.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),F=o.useContext(l.a),B={dense:k||F.dense||!1,alignItems:s},V=o.useRef(null);f((function(){b&&V.current&&V.current.focus()}),[b]);var L=o.Children.toArray(y),W=L.length&&Object(u.a)(L[L.length-1],["ListItemSecondaryAction"]),J=o.useCallback((function(e){V.current=p.findDOMNode(e)}),[]),K=Object(d.a)(J,t),$=Object(r.a)({className:Object(i.default)(g.root,x,B.dense&&g.dense,!S&&g.gutters,T&&g.divider,A&&g.disabled,h&&g.button,"center"!==s&&g.alignItemsFlexStart,W&&g.secondaryAction,H&&g.selected),disabled:A},R),U=O||"li";return h&&($.component=O||"div",$.focusVisibleClassName=Object(i.default)(g.focusVisible,q),U=c.a),W?(U=$.component||O?U:"div","li"===M&&("li"===U?U="div":"li"===$.component&&($.component="div")),o.createElement(l.a.Provider,{value:B},o.createElement(M,Object(r.a)({className:Object(i.default)(g.container,C),ref:K},j),o.createElement(U,$,L),L.pop()))):o.createElement(l.a.Provider,{value:B},o.createElement(U,Object(r.a)({ref:K},$),L))}));t.a=Object(s.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(m)},ucBr:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("q1tI");function a(e,t){return r.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}},wyBh:function(e,t){frontend_url="https://cssec.addu.edu.ph",backend_url="https://cssec-api.addu.edu.ph",media_url="https://cssec-api.addu.edu.ph/wp-content/uploads",e.exports={frontend_url:frontend_url,backend_url:backend_url,media_url:media_url}}}]);