_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{"5j6C":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/learn-more/events",function(){return a("yfDj")}])},CaeP:function(e,t,a){"use strict";var n=a("nKUr");a("q1tI");t.a=function(e){var t=e.height,a=void 0===t?25:t;return Object(n.jsx)("div",{style:{height:a}})}},kKAo:function(e,t,a){"use strict";var n=a("Ff2n"),r=a("wx14"),o=a("q1tI"),c=(a("17x9"),a("iuhU")),i=a("H2TA"),s=o.forwardRef((function(e,t){var a=e.classes,i=e.className,s=e.component,l=void 0===s?"div":s,d=e.square,u=void 0!==d&&d,b=e.elevation,f=void 0===b?1:b,j=e.variant,m=void 0===j?"elevation":j,p=Object(n.a)(e,["classes","className","component","square","elevation","variant"]);return o.createElement(l,Object(r.a)({className:Object(c.default)(a.root,i,"outlined"===m?a.outlined:a["elevation".concat(f)],!u&&a.rounded),ref:t},p))}));t.a=Object(i.a)((function(e){var t={};return e.shadows.forEach((function(e,a){t["elevation".concat(a)]={boxShadow:e}})),Object(r.a)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},t)}),{name:"MuiPaper"})(s)},ucBr:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("q1tI");function r(e,t){return n.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}},yfDj:function(e,t,a){"use strict";a.r(t),a.d(t,"__N_SSG",(function(){return G}));var n=a("nKUr"),r=a("ODXe"),o=a("rePB"),c=a("q1tI"),i=a.n(c),s=a("R/WZ"),l=a("wx14"),d=a("Ff2n"),u=(a("17x9"),a("iuhU")),b=a("NqtD"),f=a("H2TA");var j=c.createContext({}),m=c.forwardRef((function(e,t){var a=e.align,n=void 0===a?"left":a,r=e.classes,o=e.className,i=Object(d.a)(e,["align","classes","className"]);return c.createElement(j.Provider,{value:{align:n}},c.createElement("ul",Object(l.a)({className:Object(u.default)(r.root,r["align".concat(Object(b.a)(n))],o),ref:t},i)))})),p=Object(f.a)((function(){return{root:{display:"flex",flexDirection:"column",padding:"6px 16px",flexGrow:1},alignLeft:{},alignRight:{},alignAlternate:{}}}),{name:"MuiTimeline"})(m),O=a("ucBr");var x=c.createContext({}),g=c.forwardRef((function(e,t){var a=e.classes,n=e.className,r=Object(d.a)(e,["classes","className"]),o=c.useContext(j).align,i=void 0===o?"left":o,s=!1;return c.Children.forEach(e.children,(function(e){Object(O.a)(e,["TimelineOppositeContent"])&&(s=!0)})),c.createElement(x.Provider,{value:{classes:{content:a.content,oppositeContent:a.oppositeContent}}},c.createElement("li",Object(l.a)({className:Object(u.default)(a.root,a["align".concat(Object(b.a)(i))],n,!s&&a.missingOppositeContent),ref:t},r)))})),v=Object(f.a)((function(){return{root:{listStyle:"none",display:"flex",position:"relative",minHeight:70},alignLeft:{},alignRight:{flexDirection:"row-reverse"},alignAlternate:{"&:nth-child(even)":{flexDirection:"row-reverse","& $content":{textAlign:"right"},"& $oppositeContent":{textAlign:"left"}}},missingOppositeContent:{"&:before":{content:'""',flex:1,padding:"6px 16px"}},content:{},oppositeContent:{}}}),{name:"MuiTimelineItem"})(g),h=c.forwardRef((function(e,t){var a=e.classes,n=e.className,r=Object(d.a)(e,["classes","className"]);return c.createElement("div",Object(l.a)({className:Object(u.default)(a.root,n),ref:t},r))})),y=Object(f.a)((function(){return{root:{display:"flex",flexDirection:"column",flex:0,alignItems:"center"}}}),{name:"MuiTimelineSeparator"})(h),w=c.forwardRef((function(e,t){var a=e.classes,n=e.className,r=Object(d.a)(e,["classes","className"]);return c.createElement("span",Object(l.a)({className:Object(u.default)(a.root,n),ref:t},r))})),C=Object(f.a)((function(e){return{root:{width:2,backgroundColor:e.palette.grey[400],flexGrow:1}}}),{name:"MuiTimelineConnector"})(w),N=c.forwardRef((function(e,t){var a=e.classes,n=e.className,r=Object(d.a)(e,["classes","className"]),o=c.useContext(j).align,i=void 0===o?"left":o,s=c.useContext(x).classes,f=void 0===s?{}:s;return c.createElement("div",Object(l.a)({className:Object(u.default)(a.root,f.content,a["align".concat(Object(b.a)(i))],n),ref:t},r))})),T=Object(f.a)((function(){return{root:{flex:1,padding:"6px 16px"},alignRight:{textAlign:"right"}}}),{name:"MuiTimelineContent"})(N),E=c.forwardRef((function(e,t){var a=e.classes,n=e.className,r=Object(d.a)(e,["classes","className"]),o=c.useContext(j).align,i=void 0===o?"left":o,s=c.useContext(x).classes,f=void 0===s?{}:s;return c.createElement("div",Object(l.a)({className:Object(u.default)(a.root,f.oppositeContent,a["align".concat(Object(b.a)(i))],n),ref:t},r))}));E.muiName="TimelineOppositeContent";var k=Object(f.a)((function(){return{root:{padding:"6px 16px",marginRight:"auto",textAlign:"right",flex:1},alignRight:{textAlign:"left"}}}),{name:"MuiTimelineOppositeContent"})(E),D=c.forwardRef((function(e,t){var a=e.classes,n=e.className,r=e.color,o=void 0===r?"grey":r,i=e.variant,s=void 0===i?"default":i,f=Object(d.a)(e,["classes","className","color","variant"]);return c.createElement("span",Object(l.a)({className:Object(u.default)(a.root,n,"inherit"!==o&&a["".concat(s).concat(Object(b.a)(o))]),ref:t},f))})),R=Object(f.a)((function(e){return{root:{display:"flex",alignSelf:"baseline",borderStyle:"solid",borderWidth:2,padding:4,borderRadius:"50%",boxShadow:e.shadows[2],marginTop:8,marginBottom:8},defaultGrey:{borderColor:"transparent",color:e.palette.grey[50],backgroundColor:e.palette.grey[400]},outlinedGrey:{boxShadow:"none",color:e.palette.grey.contrastText,borderColor:e.palette.grey[400],backgroundColor:"transparent"},defaultPrimary:{borderColor:"transparent",color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main},outlinedPrimary:{boxShadow:"none",backgroundColor:"transparent",borderColor:e.palette.primary.main},defaultSecondary:{borderColor:"transparent",color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main},outlinedSecondary:{boxShadow:"none",backgroundColor:"transparent",borderColor:e.palette.secondary.main}}}),{name:"MuiTimelineDot"})(D),S=a("kKAo"),_=a("ofer"),M=a("CaeP"),P=a("qVkf"),A=a("7xvl"),q=a("sWYD"),I=Object(s.a)((function(e){return{root:Object(o.a)({width:"80%",margin:"auto"},e.breakpoints.down("md"),{width:"100%"}),paper:{padding:"6px 16px"},currentPaper:{backgroundColor:"#622a55",color:"#fff"},secondaryTail:{backgroundColor:e.palette.secondary.main}}})),G=!0;t.default=function(e){var t=e.events,a=I(),o=i.a.useState([]),c=Object(r.a)(o,2),s=c[0],l=c[1],d=i.a.useState(null),u=Object(r.a)(d,2),b=u[0],f=u[1],j=i.a.useState(new Date),m=Object(r.a)(j,2),O=m[0],x=m[1];return i.a.useEffect((function(){l(t)}),[]),i.a.useEffect((function(){window.setInterval(x((function(){return new Date})),1e3)}),[]),i.a.useEffect((function(){s.length>0?Object(P.a)(new Date(s[0].start.dateTime),O)>0?f("Event ".concat(s[0].summary," comes in ").concat(Object(A.a)(new Date(s[0].start.dateTime)))):f("".concat(s[0].summary," is happening right now")):f("There are no upcoming events")}),[s,O]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(M.a,{}),Object(n.jsxs)("div",{className:a.root,children:[Object(n.jsx)(S.a,{className:a.paper,style:{color:"#5D2252"},align:"center",children:Object(n.jsx)(_.a,{variant:"h3",children:"Timeline of Events"})}),Object(n.jsxs)(p,{align:"alternate",children:[Object(n.jsxs)(v,{children:[Object(n.jsx)(k,{children:Object(n.jsx)(_.a,{variant:"subtitle1",children:Object(n.jsx)("b",{children:"".concat(Object(q.a)(new Date,"MMM dd, yyyy p"))})})}),Object(n.jsxs)(y,{children:[Object(n.jsx)(R,{style:{backgroundColor:"#3a1534"}}),Object(n.jsx)(C,{})]}),Object(n.jsx)(T,{style:{},children:Object(n.jsx)(S.a,{elevation:3,className:"".concat(a.paper," ").concat(a.currentPaper),children:Object(n.jsx)(_.a,{variant:"h6",component:"h1",children:b})})})]}),s.map((function(e){return Object(n.jsxs)(v,{children:[Object(n.jsx)(k,{children:Object(n.jsx)(_.a,{variant:"body1",color:"textSecondary",children:"".concat(Object(q.a)(new Date(e.start.dateTime),"MMM dd, yyyy")," ").concat(Object(q.a)(new Date(e.start.dateTime),"p")," - ").concat(Object(q.a)(new Date(e.end.dateTime),"p"))})}),Object(n.jsxs)(y,{children:[Object(n.jsx)(R,{style:{backgroundColor:"#ba83b1"}}),Object(n.jsx)(C,{})]}),Object(n.jsx)(T,{children:Object(n.jsxs)(S.a,{elevation:3,className:a.paper,children:[Object(n.jsx)(_.a,{variant:"h5",component:"h1",children:e.summary}),Object(n.jsx)(_.a,{variant:"body2",children:e.description})]})})]},e.id)}))]})]})]})}}},[["5j6C",2,1,0,4,8]]]);