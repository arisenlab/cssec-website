(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[25,32],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(r.AmpStateContext))};var a,o=(a=n("q1tI"))&&a.__esModule?a:{default:a},r=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,o=void 0!==a&&a,r=e.hasQuery,i=void 0!==r&&r;return n||o&&i}},"/F/H":function(e,t,n){"use strict";n.r(t);var a=n("nKUr"),o=n("q1tI"),r=n.n(o),i=n("Aiso"),c=n.n(i),s=n("ofer"),d=n("tRbT"),l=n("nJuv"),u=n("ODXe"),p=n("kKAo"),f=n("sWYD"),b=function(e){var t=e.day_events,n=r.a.useState([]),o=Object(u.a)(n,2),i=o[0],c=o[1],l=r.a.useState(new Date),b=Object(u.a)(l,2),m=b[0],h=b[1],v=r.a.useState(null),g=Object(u.a)(v,2),y=g[0],x=g[1];return r.a.useEffect((function(){c(t)}),[]),r.a.useEffect((function(){window.setInterval(h((function(){return new Date})),1e3)}),[]),r.a.useEffect((function(){0===i.length?x("There are no upcoming events. Rest and Fighting!"):x(null)}),[i,m]),Object(a.jsxs)(p.a,{elevation:3,children:[Object(a.jsx)(s.a,{variant:"h5",style:{paddingTop:10,paddingLeft:10,paddingBottom:10},children:Object(a.jsx)("strong",{children:"Events on this day"})}),Object(a.jsxs)("div",{style:{padding:15,overflowY:"scroll",height:"500px"},children:[Object(a.jsx)(s.a,{variant:"subtitle1",gutterBottom:!0,children:y}),i.map((function(e){var t=e.id,n=e.summary,o=e.start,r=e.end,i=e.description;return Object(a.jsxs)(d.a,{container:!0,spacing:2,children:[Object(a.jsx)(d.a,{item:!0,xs:3,align:"center",children:Object(a.jsxs)(p.a,{style:{backgroundColor:"#622A55",color:"#fff"},children:[Object(a.jsx)("div",{children:Object(a.jsx)(s.a,{variant:"h6",children:Object(f.a)(new Date(o.dateTime),"dd")})}),Object(a.jsx)("div",{children:Object(a.jsx)(s.a,{variant:"h6",children:Object(f.a)(new Date(o.dateTime),"MMM")})})]})}),Object(a.jsxs)(d.a,{item:!0,xs:9,children:[Object(a.jsx)(s.a,{variant:"h5",gutterBottom:!0,children:n}),Object(a.jsx)(s.a,{variant:"body1",gutterBottom:!0,children:i}),Object(a.jsx)(s.a,{variant:"subtitle2",children:Object(a.jsx)("i",{children:"".concat(Object(f.a)(new Date(o.dateTime),"p")," - ").concat(Object(f.a)(new Date(r.dateTime),"p"))})})]})]},t)}))]})]})},m=n("CaeP"),h=n("wyBh");t.default=function(e){var t=e.posts,n=e.dayEvents,o=e.users;return Object(a.jsxs)(d.a,{container:!0,spacing:3,style:{width:"95%",margin:"auto"},children:[Object(a.jsxs)(d.a,{container:!0,item:!0,xs:12,md:8,children:[Object(a.jsx)(s.a,{variant:"h3",children:"News"}),Object(a.jsx)(m.a,{height:70}),Object(a.jsx)(d.a,{container:!0,item:!0,spacing:2,children:t.length>0?Object(a.jsx)("div",{style:{display:"flex",flexWrap:"nowrap",overflowX:"auto"},children:t.map((function(e){return Object(a.jsx)("div",{style:{flex:"0 0 auto",width:"300px",marginLeft:20,WebkitOverflowScrolling:"touch"},children:Object(a.jsx)(l.default,{post:e,author:(t=e.author,o.find((function(e){return e.id===t})).name)})},e.id);var t}))}):Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(d.a,{item:!0,xs:12,md:12,align:"center",children:[Object(a.jsx)(c.a,{src:"".concat(h.cdn_url,"/chammie-chan/sad-chammie-chan.png"),height:500,width:300}),Object(a.jsx)(s.a,{variant:"h4",children:"No News Yet"})]})})})]}),Object(a.jsx)(d.a,{item:!0,xs:12,md:4,children:Object(a.jsx)(b,{day_events:n})})]})}},"0G5g":function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var a="undefined"!==typeof self&&self.requestIdleCallback||function(e){var t=Date.now();return setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})}),1)};t.default=a},"20a2":function(e,t,n){e.exports=n("nOHt")},"7W2i":function(e,t,n){var a=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var a,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var r=a?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(n,o,r):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),r=(a=n("Xuae"))&&a.__esModule?a:{default:a},i=n("lwAK"),c=n("FYa8"),s=n("/0+H");function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(u,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(o){var r=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?r=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?r=!1:t.add(o.type);break;case"meta":for(var s=0,d=p.length;s<d;s++){var l=p[s];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?r=!1:n.add(l);else{var u=o.props[l],f=a[l]||new Set;"name"===l&&i||!f.has(u)?(f.add(u),a[l]=f):r=!1}}}return r}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function b(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),a=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(r.default,{reduceComponentsToState:f,headManager:a,inAmpMode:(0,s.isInAmpMode)(n)},t)}b.rewind=function(){};var m=b;t.default=m},"8OQS":function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}},Aiso:function(e,t,n){e.exports=n("dQHF")},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var a;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},J4zp:function(e,t,n){var a=n("wTVA"),o=n("m0LI"),r=n("ZhPi"),i=n("wkBT");e.exports=function(e,t){return a(e)||o(e,t)||r(e,t)||i()}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var a=n("Ijbi"),o=n("EbDI"),r=n("ZhPi"),i=n("Bnag");e.exports=function(e){return a(e)||o(e)||r(e)||i()}},UWYU:function(e,t,n){"use strict";t.__esModule=!0,t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[]}},Xuae:function(e,t,n){"use strict";var a=n("RIqP"),o=n("lwsE"),r=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),c=n("a1gu"),s=n("Nsbk");function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),u=function(e){i(n,e);var t=d(n);function n(e){var r;return o(this,n),(r=t.call(this,e))._hasHeadManager=void 0,r.emitChange=function(){r._hasHeadManager&&r.props.headManager.updateHead(r.props.reduceComponentsToState(a(r.props.headManager.mountedInstances),r.props))},r._hasHeadManager=r.props.headManager&&r.props.headManager.mountedInstances,r}return r(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=u},Z3vd:function(e,t,n){"use strict";var a=n("Ff2n"),o=n("wx14"),r=n("q1tI"),i=(n("17x9"),n("iuhU")),c=n("H2TA"),s=n("ye/S"),d=n("VD++"),l=n("NqtD"),u=r.forwardRef((function(e,t){var n=e.children,c=e.classes,s=e.className,u=e.color,p=void 0===u?"default":u,f=e.component,b=void 0===f?"button":f,m=e.disabled,h=void 0!==m&&m,v=e.disableElevation,g=void 0!==v&&v,y=e.disableFocusRipple,x=void 0!==y&&y,j=e.endIcon,O=e.focusVisibleClassName,w=e.fullWidth,S=void 0!==w&&w,k=e.size,A=void 0===k?"medium":k,_=e.startIcon,z=e.type,C=void 0===z?"button":z,M=e.variant,I=void 0===M?"text":M,E=Object(a.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),R=_&&r.createElement("span",{className:Object(i.default)(c.startIcon,c["iconSize".concat(Object(l.a)(A))])},_),N=j&&r.createElement("span",{className:Object(i.default)(c.endIcon,c["iconSize".concat(Object(l.a)(A))])},j);return r.createElement(d.a,Object(o.a)({className:Object(i.default)(c.root,c[I],s,"inherit"===p?c.colorInherit:"default"!==p&&c["".concat(I).concat(Object(l.a)(p))],"medium"!==A&&[c["".concat(I,"Size").concat(Object(l.a)(A))],c["size".concat(Object(l.a)(A))]],g&&c.disableElevation,h&&c.disabled,S&&c.fullWidth),component:b,disabled:h,focusRipple:!x,focusVisibleClassName:Object(i.default)(c.focusVisible,O),ref:t,type:C},E),r.createElement("span",{className:c.label},R,n,N))}));t.a=Object(c.a)((function(e){return{root:Object(o.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(s.b)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(s.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(s.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(s.b)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(s.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(s.b)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(s.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(u)},a1gu:function(e,t,n){var a=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?o(e):t}},dEHY:function(e,t,n){"use strict";t.__esModule=!0,t.toBase64=function(e){return window.btoa(e)}},dQHF:function(e,t,n){"use strict";var a=n("J4zp"),o=n("RIqP"),r=n("TqRt");t.__esModule=!0,t.default=function(e){var t=e.src,n=e.sizes,r=e.unoptimized,c=void 0!==r&&r,u=e.priority,f=void 0!==u&&u,b=e.loading,h=e.className,v=e.quality,g=e.width,O=e.height,w=e.objectFit,S=e.objectPosition,k=e.loader,A=void 0===k?j:k,_=(0,i.default)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition","loader"]),z=n?"responsive":"intrinsic",C=!1;"unsized"in _?(C=Boolean(_.unsized),delete _.unsized):"layout"in _&&(_.layout&&(z=_.layout),delete _.layout);0;var M=!f&&("lazy"===b||"undefined"===typeof b);t&&t.startsWith("data:")&&(c=!0,M=!1);var I,E,R,N=(0,p.useIntersection)({rootMargin:"200px",disabled:!M}),D=a(N,2),T=D[0],q=D[1],P=!M||q,H=x(g),W=x(O),L=x(v),B={visibility:P?"inherit":"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:w,objectPosition:S};if("undefined"!==typeof H&&"undefined"!==typeof W&&"fill"!==z){var F=W/H,V=isNaN(F)?"100%":"".concat(100*F,"%");"responsive"===z?(I={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},E={display:"block",boxSizing:"border-box",paddingTop:V}):"intrinsic"===z?(I={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},E={boxSizing:"border-box",display:"block",maxWidth:"100%"},R='<svg width="'.concat(H,'" height="').concat(W,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===z&&(I={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:H,height:W})}else"undefined"===typeof H&&"undefined"===typeof W&&"fill"===z&&(I={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var U={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};P&&(U=function(e){var t=e.src,n=e.unoptimized,a=e.layout,r=e.width,i=e.quality,c=e.sizes,s=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var d=function(e,t){if("number"!==typeof e||"fill"===t||"responsive"===t)return{widths:m,kind:"w"};return{widths:o(new Set([e,2*e].map((function(e){return y.find((function(t){return t>=e}))||y[y.length-1]})))),kind:"x"}}(r,a),l=d.widths,u=d.kind,p=l.length-1;return{src:s({src:t,quality:i,width:l[p]}),sizes:c||"w"!==u?c:"100vw",srcSet:l.map((function(e,n){return"".concat(s({src:t,quality:i,width:e})," ").concat("w"===u?e:n+1).concat(u)})).join(", ")}}({src:t,unoptimized:c,layout:z,width:H,quality:L,sizes:n,loader:A}));C&&(I=void 0,E=void 0,B=void 0);return s.default.createElement("div",{style:I},E?s.default.createElement("div",{style:E},R?s.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,l.toBase64)(R))}):null):null,s.default.createElement("img",Object.assign({},_,U,{decoding:"async",className:h,ref:T,style:B})),f?s.default.createElement(d.default,null,s.default.createElement("link",{key:"__nimg-"+U.src+U.srcSet+U.sizes,rel:"preload",as:"image",href:U.srcSet?void 0:U.src,imagesrcset:U.srcSet,imagesizes:U.sizes})):null)};var i=r(n("8OQS")),c=r(n("pVnL")),s=r(n("q1tI")),d=r(n("8Kt/")),l=n("dEHY"),u=n("UWYU"),p=n("vNVm");var f=new Map([["imgix",function(e){var t=e.root,n=e.src,a=e.width,o=e.quality,r=["auto=format","fit=max","w="+a],i="";o&&r.push("q="+o);r.length&&(i="?"+r.join("&"));return"".concat(t).concat(O(n)).concat(i)}],["cloudinary",function(e){var t=e.root,n=e.src,a=e.width,o=e.quality,r=["f_auto","c_limit","w_"+a,"q_"+(o||"auto")].join(",")+"/";return"".concat(t).concat(r).concat(O(n))}],["akamai",function(e){var t=e.root,n=e.src,a=e.width;return"".concat(t).concat(O(n),"?imwidth=").concat(a)}],["default",function(e){var t=e.root,n=e.src,a=e.width,o=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(a,"&q=").concat(o||75)}]]),b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||u.imageConfigDefault,m=b.deviceSizes,h=b.imageSizes,v=b.loader,g=b.path,y=(b.domains,[].concat(o(m),o(h)));function x(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function j(e){var t=f.get(v);if(t)return t((0,c.default)({root:g},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(u.VALID_LOADERS.join(", "),". Received: ").concat(v))}function O(e){return"/"===e[0]?e.slice(1):e}m.sort((function(e,t){return e-t})),y.sort((function(e,t){return e-t}))},kKAo:function(e,t,n){"use strict";var a=n("Ff2n"),o=n("wx14"),r=n("q1tI"),i=(n("17x9"),n("iuhU")),c=n("H2TA"),s=r.forwardRef((function(e,t){var n=e.classes,c=e.className,s=e.component,d=void 0===s?"div":s,l=e.square,u=void 0!==l&&l,p=e.elevation,f=void 0===p?1:p,b=e.variant,m=void 0===b?"elevation":b,h=Object(a.a)(e,["classes","className","component","square","elevation","variant"]);return r.createElement(d,Object(o.a)({className:Object(i.default)(n.root,c,"outlined"===m?n.outlined:n["elevation".concat(f)],!u&&n.rounded),ref:t},h))}));t.a=Object(c.a)((function(e){var t={};return e.shadows.forEach((function(e,n){t["elevation".concat(n)]={boxShadow:e}})),Object(o.a)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},t)}),{name:"MuiPaper"})(s)},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var o=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=o},m0LI:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,o=!1,r=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(s){o=!0,r=s}finally{try{a||null==c.return||c.return()}finally{if(o)throw r}}return n}}},nJuv:function(e,t,n){"use strict";n.r(t);var a=n("nKUr"),o=n("ODXe"),r=n("q1tI"),i=n.n(r),c=n("20a2"),s=n("R/WZ"),d=n("wx14"),l=n("Ff2n"),u=(n("17x9"),n("iuhU")),p=n("kKAo"),f=n("H2TA"),b=r.forwardRef((function(e,t){var n=e.classes,a=e.className,o=e.raised,i=void 0!==o&&o,c=Object(l.a)(e,["classes","className","raised"]);return r.createElement(p.a,Object(d.a)({className:Object(u.default)(n.root,a),elevation:i?8:1,ref:t},c))})),m=Object(f.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(b),h=r.forwardRef((function(e,t){var n=e.disableSpacing,a=void 0!==n&&n,o=e.classes,i=e.className,c=Object(l.a)(e,["disableSpacing","classes","className"]);return r.createElement("div",Object(d.a)({className:Object(u.default)(o.root,i,!a&&o.spacing),ref:t},c))})),v=Object(f.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(h),g=n("Z3vd"),y=r.forwardRef((function(e,t){var n=e.classes,a=e.className,o=e.component,i=void 0===o?"div":o,c=Object(l.a)(e,["classes","className","component"]);return r.createElement(i,Object(d.a)({className:Object(u.default)(n.root,a),ref:t},c))})),x=Object(f.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(y),j=["video","audio","picture","iframe","img"],O=r.forwardRef((function(e,t){var n=e.children,a=e.classes,o=e.className,i=e.component,c=void 0===i?"div":i,s=e.image,p=e.src,f=e.style,b=Object(l.a)(e,["children","classes","className","component","image","src","style"]),m=-1!==j.indexOf(c),h=!m&&s?Object(d.a)({backgroundImage:'url("'.concat(s,'")')},f):f;return r.createElement(c,Object(d.a)({className:Object(u.default)(a.root,o,m&&a.media,-1!=="picture img".indexOf(c)&&a.img),ref:t,style:h,src:m?s||p:void 0},b),n)})),w=Object(f.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(O),S=n("ofer"),k=n("sWYD"),A=Object(s.a)({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},media:{height:180},cardActionsStyle:{display:"flex",flexDirection:"row-reverse"}});t.default=function(e){var t=e.post,n=e.author,r=A(),s=Object(c.useRouter)(),d=i.a.useState(""),l=Object(o.a)(d,2),u=l[0],p=l[1],f=i.a.useState(""),b=Object(o.a)(f,2),h=b[0],y=b[1];return i.a.useEffect((function(){"rendered"in t.excerpt&&p(t.excerpt.rendered)}),[t.excerpt]),i.a.useEffect((function(){"rendered"in t.title&&y(t.title.rendered)}),[t.title]),Object(a.jsxs)(m,{className:r.root,variant:"outlined",children:[""!==t.jetpack_featured_media_url?Object(a.jsx)(w,{className:r.media,image:t.jetpack_featured_media_url,title:h}):null,Object(a.jsxs)(x,{children:[Object(a.jsx)(S.a,{variant:"h4",component:"h2",dangerouslySetInnerHTML:{__html:h}}),Object(a.jsx)(S.a,{className:r.pos,color:"textSecondary",variant:"subtitle2",children:"".concat(n," on ").concat(Object(k.a)(new Date(t.date),"MMM dd yyyy p"))}),Object(a.jsx)(S.a,{variant:"body2",component:"p",dangerouslySetInnerHTML:{__html:u.substring(0,250)+"..."}})]}),Object(a.jsx)(v,{style:{display:"flex",flexDirection:"row-reverse"},children:Object(a.jsx)(g.a,{variant:"contained",color:"primary",onClick:function(){return s.push("/news/".concat(t.slug))},children:Object(a.jsx)(S.a,{children:"Read More"})})})]})}},pVnL:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},vNVm:function(e,t,n){"use strict";var a=n("J4zp"),o=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,o=(0,r.useRef)(),d=(0,r.useState)(!1),l=a(d,2),u=l[0],p=l[1],f=(0,r.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),n||u||e&&e.tagName&&(o.current=function(e,t,n){var a=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var a=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:o,elements:a}),n}(n),o=a.id,r=a.observer,i=a.elements;return i.set(e,t),r.observe(e),function(){i.delete(e),r.unobserve(e),0===i.size&&(r.disconnect(),s.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,u]);return(0,r.useEffect)((function(){c||u||(0,i.default)((function(){return p(!0)}))}),[u]),[f,u]};var r=n("q1tI"),i=o(n("0G5g")),c="undefined"!==typeof IntersectionObserver;var s=new Map},wTVA:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},wkBT:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}}}]);