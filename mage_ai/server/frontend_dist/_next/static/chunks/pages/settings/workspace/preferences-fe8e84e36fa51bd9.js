(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3853],{94629:function(e,n,t){"use strict";t.d(n,{Z:function(){return _}});var r=t(82394),i=t(21831),o=t(82684),c=t(50724),u=t(82555),l=t(97618),a=t(70613),s=t(59696),d=t(68899),f=t(28598);function p(e,n){var t=e.children;return(0,f.jsx)(d.HS,{ref:n,children:t})}var h=o.forwardRef(p),m=t(62547),g=t(82571),b=t(35686),v=t(98464),j=t(46684),y=t(70515),x=t(53808),O=t(19183);function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var _=function(e){var n,t=e.addProjectBreadcrumbToCustomBreadcrumbs,r=e.after,p=e.afterHidden,w=e.afterWidth,_=e.afterWidthOverride,P=e.before,k=e.beforeWidth,I=e.breadcrumbs,C=e.children,S=e.errors,H=e.headerMenuItems,N=e.headerOffset,D=e.mainContainerHeader,E=e.navigationItems,W=e.setErrors,z=e.subheaderChildren,A=e.title,M=e.uuid,L=(0,O.i)().width,B="dashboard_after_width_".concat(M),T="dashboard_before_width_".concat(M),F=(0,o.useRef)(null),R=(0,o.useState)(_?w:(0,x.U2)(B,w)),V=R[0],U=R[1],Y=(0,o.useState)(!1),Q=Y[0],X=Y[1],q=(0,o.useState)(P?Math.max((0,x.U2)(T,k),13*y.iI):null),G=q[0],J=q[1],K=(0,o.useState)(!1),$=K[0],ee=K[1],ne=(0,o.useState)(null)[1],te=b.ZP.projects.list({},{revalidateOnFocus:!1}).data,re=null===te||void 0===te?void 0:te.projects,ie={label:function(){var e;return null===re||void 0===re||null===(e=re[0])||void 0===e?void 0:e.name},linkProps:{href:"/"}},oe=[];I?(t&&oe.push(ie),oe.push.apply(oe,(0,i.Z)(I))):(null===re||void 0===re?void 0:re.length)>=1&&oe.push.apply(oe,[ie,{bold:!0,label:function(){return A}}]),(0,o.useEffect)((function(){null===F||void 0===F||!F.current||Q||$||null===ne||void 0===ne||ne(F.current.getBoundingClientRect().width)}),[Q,V,$,G,F,ne,L]),(0,o.useEffect)((function(){Q||(0,x.t8)(B,V)}),[p,Q,V,B]),(0,o.useEffect)((function(){$||(0,x.t8)(T,G)}),[$,G,T]);var ce=(0,v.Z)(w);return(0,o.useEffect)((function(){_&&ce!==w&&U(w)}),[_,w,ce]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a.Z,{title:A}),(0,f.jsx)(s.Z,{breadcrumbs:oe,menuItems:H,project:null===re||void 0===re?void 0:re[0],version:null===re||void 0===re||null===(n=re[0])||void 0===n?void 0:n.version}),(0,f.jsxs)(d.Nk,{children:[0!==(null===E||void 0===E?void 0:E.length)&&(0,f.jsx)(d.lm,{showMore:!0,children:(0,f.jsx)(g.Z,{navigationItems:E,showMore:!0})}),(0,f.jsx)(l.Z,{flex:1,flexDirection:"column",children:(0,f.jsxs)(m.Z,{after:r,afterHeightOffset:j.Mz,afterHidden:p,afterMousedownActive:Q,afterWidth:V,before:P,beforeHeightOffset:j.Mz,beforeMousedownActive:$,beforeWidth:d.k1+(P?G:0),headerOffset:N,hideAfterCompletely:!0,leftOffset:P?d.k1:null,mainContainerHeader:D,mainContainerRef:F,setAfterMousedownActive:X,setAfterWidth:U,setBeforeMousedownActive:ee,setBeforeWidth:J,children:[z&&(0,f.jsx)(h,{children:z}),C]})})]}),S&&(0,f.jsx)(c.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===W||void 0===W?void 0:W(null)},children:(0,f.jsx)(u.Z,Z(Z({},S),{},{onClose:function(){return null===W||void 0===W?void 0:W(null)}}))})]})}},74395:function(e,n,t){"use strict";t.d(n,{M:function(){return c},W:function(){return o}});var r=t(38626),i=t(46684),o=34*t(70515).iI,c=r.default.div.withConfig({displayName:"indexstyle__BeforeStyle",componentId:"sc-12ee2ib-0"})(["min-height:calc(100vh - ","px);"],i.Mz)},92066:function(e,n,t){"use strict";t.d(n,{DQ:function(){return s},HY:function(){return c},SA:function(){return d},WH:function(){return o},eC:function(){return l},fF:function(){return u},tC:function(){return a}});var r=t(19452),i=t(50178),o="Workspace",c="Preferences",u="Git settings",l="Users",a="Account",s="Profile",d=function(e){var n=e.owner,t=e.roles,d=e.project_access,f=[{linkProps:{href:"/settings/workspace/preferences"},uuid:c}];(n||t===r.No.ADMIN||0!==(2&d))&&f.push({linkProps:{href:"/settings/workspace/users"},uuid:l}),(!(0,i.YB)()||t<=r.No.EDITOR)&&f.push({linkProps:{href:"/settings/workspace/sync-data"},uuid:u});var p=[{items:f,uuid:o}];return(0,i.YB)()?p.concat([{items:[{linkProps:{href:"/settings/account/profile"},uuid:s}],uuid:a}]):p}},28274:function(e,n,t){"use strict";t.d(n,{Z:function(){return Z}});var r=t(94629),i=t(82394),o=t(12691),c=t.n(o),u=t(48670),l=t(38276),a=t(30160),s=t(38626),d=t(44897),f=t(70515),p=t(91437),h=(f.iI,s.default.div.withConfig({displayName:"indexstyle__SectionTitleStyle",componentId:"sc-1y8dyue-0"})(["padding:","px ","px;"],1*f.iI,2.5*f.iI)),m=s.default.div.withConfig({displayName:"indexstyle__ItemStyle",componentId:"sc-1y8dyue-1"})([""," padding:","px ","px;"," ",""],(0,p.eR)(),1.5*f.iI,2.5*f.iI,(function(e){return!e.selected&&"\n    &:hover {\n      background-color: ".concat((e.theme.background||d.Z.background).codeArea,";\n    }\n  ")}),(function(e){return e.selected&&"\n    background-color: ".concat((e.theme.background||d.Z.background).codeTextarea,";\n  ")})),g=t(28598),b=t(82684);function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var y=function(e){var n=e.isItemSelected,t=e.sections;return(0,g.jsx)(l.Z,{py:f.Gg,children:null===t||void 0===t?void 0:t.map((function(e){var t=e.items,r=e.title,i=e.uuid;return(0,g.jsxs)(l.Z,{children:[(0,g.jsx)(h,{children:(0,g.jsx)(a.ZP,{bold:!0,muted:!0,small:!0,uppercase:!0,children:r?r():i})}),null===t||void 0===t?void 0:t.map((function(e){var t=e.label,r=e.linkProps,o=e.onClick,l=e.uuid,a=t?t():l,s=(0,g.jsx)(m,{selected:null===n||void 0===n?void 0:n(j(j({},e),{},{uuidWorkspace:i})),children:a});return r?(0,b.createElement)(c(),j(j({},r),{},{key:l,passHref:!0}),(0,g.jsx)(u.Z,{block:!0,noHoverUnderline:!0,noOutline:!0,sameColorAsText:!0,children:s})):(0,g.jsx)(u.Z,{block:!0,noHoverUnderline:!0,noOutline:!0,onClick:o,preventDefault:!0,sameColorAsText:!0,children:s},l)}))]},i)}))})},x=t(74395),O=t(92066),w=t(50178);var Z=function(e){var n=e.after,t=e.afterHidden,i=e.children,o=e.uuidItemSelected,c=e.uuidWorkspaceSelected,u=(0,w.PR)()||{};return(0,g.jsx)(r.Z,{after:n,afterHidden:!n||t,afterWidth:n?50*f.iI:0,afterWidthOverride:!0,before:(0,g.jsx)(x.M,{children:(0,g.jsx)(y,{isItemSelected:function(e){var n=e.uuid,t=e.uuidWorkspace;return c===t&&o===n},sections:(0,O.SA)(u)})}),beforeWidth:x.W,title:"Settings",uuid:"settings/index",children:i})}},55729:function(e,n,t){"use strict";t.d(n,{Z:function(){return E}});var r=t(82394),i=t(75582),o=t(82684),c=t(69864),u=t(71180),l=t(15338),a=t(97618),s=t(55485),d=t(85854),f=t(48670),p=t(65956),h=t(82359),m=t(38276),g=t(30160),b=t(17488),v=t(69650),j=t(12468),y=t(35686),x=t(38626),O=t(44897),w=t(42631),Z=t(70515),_=x.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-1b0w59t-0"})(["border-radius:","px;padding:","px;",""],w.n_,Z.cd*Z.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||O.Z.background).codeArea,";\n  ")})),P=t(72473),k=t(72191),I=t(72619),C=t(70320),S=t(23780),H=t(28598);function N(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function D(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?N(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var E=function(e){var n=e.cancelButtonText,t=e.contained,x=e.header,O=e.onCancel,w=e.onSaveSuccess,N=(0,S.VI)(null,{},[],{uuid:"settings/workspace/preferences"}),E=(0,i.Z)(N,1)[0],W=(0,o.useState)(null),z=W[0],A=W[1],M=(0,o.useState)(!1),L=M[0],B=M[1],T=y.ZP.projects.list(),F=T.data,R=T.mutate,V=(0,o.useMemo)((function(){var e;return null===F||void 0===F||null===(e=F.projects)||void 0===e?void 0:e[0]}),[F]),U=V||{},Y=U.name,Q=U.openai_api_key,X=U.project_uuid;(0,o.useEffect)((function(){z||A(V)}),[V,z]);var q=(0,c.Db)(y.ZP.projects.useUpdate(Y),{onSuccess:function(e){return(0,I.wD)(e,{callback:function(e){var n,t=e.project;R(),A(t),B(!1),(0,C.h)(null===t||void 0===t||null===(n=t.features)||void 0===n?void 0:n[h.d.LOCAL_TIMEZONE]),w&&(null===w||void 0===w||w(t))},onErrorCallback:function(e,n){return E({errors:n,response:e})}})}}),G=(0,i.Z)(q,2),J=G[0],K=G[1].isLoading,$=(0,o.useCallback)((function(e){return J({project:e})}),[J]),ee=(0,H.jsxs)(H.Fragment,{children:[x,(0,H.jsxs)(p.Z,{noPadding:!0,children:[(0,H.jsxs)(m.Z,{p:Z.cd,children:[(0,H.jsx)(m.Z,{mb:1,children:(0,H.jsx)(d.Z,{level:5,children:"Project name"})}),(0,H.jsx)(g.ZP,{default:!0,monospace:!0,children:Y})]}),(0,H.jsx)(l.Z,{light:!0}),(0,H.jsxs)(m.Z,{p:Z.cd,children:[(0,H.jsx)(m.Z,{mb:1,children:(0,H.jsx)(d.Z,{level:5,children:"Project UUID"})}),(0,H.jsx)(g.ZP,{default:!!X,monospace:!0,muted:!X,children:X||"Not required"})]}),(0,H.jsx)(l.Z,{light:!0}),(0,H.jsx)(m.Z,{p:Z.cd,children:(0,H.jsxs)(s.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,H.jsxs)(a.Z,{flexDirection:"column",children:[(0,H.jsx)(m.Z,{mb:1,children:(0,H.jsx)(d.Z,{level:5,children:"Help improve Mage"})}),(0,H.jsxs)(g.ZP,{default:!0,children:["Please contribute usage statistics to help improve the developer experience for you and everyone in the community. Learn more ",(0,H.jsx)(f.Z,{href:"https://docs.mage.ai/contributing/statistics/overview",openNewWindow:!0,children:"here"}),"."]})]}),(0,H.jsx)(m.Z,{mr:Z.cd}),(0,H.jsx)(v.Z,{checked:null===z||void 0===z?void 0:z.help_improve_mage,onCheck:function(){return A((function(e){return D(D({},e),{},{help_improve_mage:!(null!==z&&void 0!==z&&z.help_improve_mage)})}))}})]})})]}),(0,H.jsx)(m.Z,{mt:Z.HN}),(0,H.jsx)(p.Z,{noPadding:!0,overflowVisible:!0,children:(0,H.jsxs)(m.Z,{p:Z.cd,children:[(0,H.jsx)(m.Z,{mb:1,children:(0,H.jsx)(d.Z,{level:5,children:"Features"})}),Object.entries((null===z||void 0===z?void 0:z.features)||{}).map((function(e,n){var t=(0,i.Z)(e,2),o=t[0],c=t[1];return(0,H.jsx)(m.Z,{mt:0===n?0:"4px",children:(0,H.jsxs)(s.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,H.jsxs)(a.Z,{children:[(0,H.jsx)(g.ZP,{default:!0,monospace:!0,children:o}),o===h.d.LOCAL_TIMEZONE&&(0,H.jsx)(m.Z,{ml:1,children:(0,H.jsx)(j.Z,{block:!0,description:"Display dates in local timezone. Please note that certain pages (e.g. Monitor page) or components (e.g. Pipeline run bar charts) may still be in UTC time. Dates in local time will have a timezone offset in the timestamp (e.g. -07:00).",lightBackground:!0,muted:!0,size:k._k})})]}),(0,H.jsx)(m.Z,{mr:Z.cd}),(0,H.jsx)(v.Z,{checked:!!c,onCheck:function(){return A((function(e){return D(D({},e),{},{features:D(D({},null===z||void 0===z?void 0:z.features),{},(0,r.Z)({},o,!c))})}))}})]})},o)}))]})}),(0,H.jsx)(m.Z,{mt:Z.HN}),(0,H.jsx)(p.Z,{noPadding:!0,children:(0,H.jsxs)(m.Z,{p:Z.cd,children:[(0,H.jsx)(m.Z,{mb:1,children:(0,H.jsx)(d.Z,{level:5,children:"OpenAI"})}),Q&&!L?(0,H.jsxs)(s.ZP,D(D({},s.A0),{},{children:[(0,H.jsx)(g.ZP,{default:!0,monospace:!0,children:"API key: ********"}),(0,H.jsx)(u.Z,{iconOnly:!0,onClick:function(){return B(!0)},secondary:!0,title:"Edit",children:(0,H.jsx)(P.I8,{size:k.bL})})]})):(0,H.jsx)(b.Z,{label:"API key",monospace:!0,onChange:function(e){return A((function(n){return D(D({},n),{},{openai_api_key:e.target.value})}))},primary:!0,setContentOnMount:!0,value:(null===z||void 0===z?void 0:z.openai_api_key)||""})]})}),(0,H.jsx)(m.Z,{mt:Z.HN}),(0,H.jsxs)(s.ZP,{alignItems:"center",children:[(0,H.jsx)(u.Z,{loading:K,onClick:function(){$({features:null===z||void 0===z?void 0:z.features,help_improve_mage:null===z||void 0===z?void 0:z.help_improve_mage,openai_api_key:null===z||void 0===z?void 0:z.openai_api_key})},primary:!0,children:"Save project settings"}),O&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(m.Z,{mr:Z.cd}),(0,H.jsx)(u.Z,{onClick:O,secondary:!0,children:n||"Cancel"})]})]})]});return t?(0,H.jsx)(_,{children:ee}):ee}},70320:function(e,n,t){"use strict";t.d(n,{h:function(){return c},q:function(){return o}});var r=t(78419),i=t(53808);function o(){return(0,i.U2)(r.am,null)||!1}function c(e){return"undefined"!==typeof e&&(0,i.t8)(r.am,e),e}},46568:function(e,n,t){"use strict";var r=t(82394),i=t(26304),o=(t(82684),t(33591)),c=t(28598),u=["children","fullHeight","gutter","style"];function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.children,t=e.fullHeight,r=e.gutter,l=e.style,s=void 0===l?{}:l,d=(0,i.Z)(e,u),f=a({},s);return r&&(f.paddingLeft=r,f.paddingRight=f.paddingLeft),t&&(f.height="100%"),(0,c.jsx)(o.Col,a(a({},d),{},{style:f,children:n}))}},82682:function(e,n,t){"use strict";var r=t(82394),i=t(26304),o=t(82684),c=t(33591),u=t(28598),l=["children","fullHeight","gutter","justifyContent","style"];function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.children,t=e.fullHeight,r=e.gutter,a=e.justifyContent,d=e.style,f=void 0===d?{}:d,p=(0,i.Z)(e,l),h=s({},f);return r&&(h.marginLeft=-1*r,h.marginRight=h.marginLeft),t&&(h.height="100%"),(0,u.jsx)(c.Row,s(s({},p),{},{justifyContent:a,style:h,children:o.Children.map(n,(function(e,n){return e&&o.cloneElement(e,{gutter:r,key:n})}))}))}},82359:function(e,n,t){"use strict";var r,i;t.d(n,{d:function(){return r},k:function(){return i}}),function(e){e.ADD_NEW_BLOCK_V2="add_new_block_v2",e.LOCAL_TIMEZONE="display_local_timezone"}(r||(r={})),function(e){e.MAIN="main",e.STANDALONE="standalone",e.SUB="sub"}(i||(i={}))},65956:function(e,n,t){"use strict";var r=t(38626),i=t(55485),o=t(38276),c=t(30160),u=t(44897),l=t(42631),a=t(47041),s=t(70515),d=t(28598),f=(0,r.css)(["padding:","px;padding-bottom:","px;padding-top:","px;"],2*s.iI,1.5*s.iI,1.5*s.iI),p=r.default.div.withConfig({displayName:"Panel__PanelStyle",componentId:"sc-1ct8cgl-0"})(["border-radius:","px;overflow:hidden;"," "," "," "," "," "," "," "," "," "," "," ",""],l.n_,(function(e){return e.fullWidth&&"\n    width: 100%;\n  "}),(function(e){return!e.borderless&&"\n    border: 1px solid ".concat((e.theme.interactive||u.Z.interactive).defaultBorder,";\n  ")}),(function(e){return e.success&&"\n    background-color: ".concat((e.theme.background||u.Z.background).successLight,";\n  ")}),(function(e){return e.success&&!e.borderless&&"\n    border: 1px solid ".concat((e.theme.background||u.Z.background).success,";\n  ")}),(function(e){return!e.dark&&!e.success&&"\n    background-color: ".concat((e.theme.background||u.Z.background).panel,";\n  ")}),(function(e){return e.dark&&"\n    background-color: ".concat((e.theme.background||u.Z.background).content,";\n  ")}),(function(e){return!e.fullHeight&&"\n    height: fit-content;\n  "}),(function(e){return e.maxHeight&&"\n    max-height: ".concat(e.maxHeight,";\n  ")}),(function(e){return e.maxWidth&&"\n    max-width: ".concat(e.maxWidth,"px;\n  ")}),(function(e){return e.minWidth&&"\n    min-width: ".concat(e.minWidth,"px;\n\n    @media (max-width: ").concat(e.minWidth,"px) {\n      min-width: 0;\n    }\n  ")}),(function(e){return e.borderless&&"\n    border: none;\n  "}),(function(e){return e.overflowVisible&&"\n    overflow: visible;\n  "})),h=r.default.div.withConfig({displayName:"Panel__HeaderStyle",componentId:"sc-1ct8cgl-1"})(["border-top-left-radius:","px;border-top-right-radius:","px;"," "," "," ",""],l.n_,l.n_,(function(e){return"\n    background-color: ".concat((e.theme.background||u.Z.background).chartBlock,";\n    border-bottom: 1px solid ").concat((e.theme.interactive||u.Z.interactive).defaultBorder,";\n  ")}),(function(e){return e.height&&"\n    height: ".concat(e.height,"px;\n  ")}),f,(function(e){return e.headerPaddingVertical&&"\n    padding-bottom: ".concat(e.headerPaddingVertical,"px;\n    padding-top: ").concat(e.headerPaddingVertical,"px;\n  ")})),m=r.default.div.withConfig({displayName:"Panel__ContentStyle",componentId:"sc-1ct8cgl-2"})(["overflow-y:auto;padding:","px;height:100%;"," "," "," "," ",""],1.75*s.iI,a.w5,(function(e){return e.height&&"\n    height: ".concat(e.height,"px;\n  ")}),(function(e){return e.maxHeight&&"\n    max-height: calc(".concat(e.maxHeight," - ").concat(15*s.iI,"px);\n  ")}),(function(e){return e.noPadding&&"\n    padding: 0;\n  "}),(function(e){return e.overflowVisible&&"\n    overflow: visible;\n  "})),g=r.default.div.withConfig({displayName:"Panel__FooterStyle",componentId:"sc-1ct8cgl-3"})(["border-style:",";border-top-width:","px;padding:","px;"],l.M8,l.YF,1.75*s.iI);n.Z=function(e){var n=e.borderless,t=e.children,r=e.containerRef,u=e.contentContainerRef,l=e.dark,a=e.footer,s=e.fullHeight,f=void 0===s||s,b=e.fullWidth,v=void 0===b||b,j=e.header,y=e.headerHeight,x=e.headerIcon,O=e.headerPaddingVertical,w=e.headerTitle,Z=e.maxHeight,_=e.maxWidth,P=e.minWidth,k=e.noPadding,I=e.overflowVisible,C=e.subtitle,S=e.success;return(0,d.jsxs)(p,{borderless:n,dark:l,fullHeight:f,fullWidth:v,maxHeight:Z,maxWidth:_,minWidth:P,overflowVisible:I,ref:r,success:S,children:[(j||w)&&(0,d.jsxs)(h,{headerPaddingVertical:O,height:y,children:[j&&j,w&&(0,d.jsx)(i.ZP,{alignItems:"center",justifyContent:"space-between",children:(0,d.jsxs)(i.ZP,{alignItems:"center",children:[x&&x,(0,d.jsx)(o.Z,{ml:x?1:0,children:(0,d.jsx)(c.ZP,{bold:!0,default:!0,children:w})})]})})]}),(0,d.jsxs)(m,{maxHeight:Z,noPadding:k,overflowVisible:I,ref:u,children:[C&&(0,d.jsx)(o.Z,{mb:2,children:(0,d.jsx)(c.ZP,{default:!0,children:C})}),t]}),a&&(0,d.jsx)(g,{children:a})]})}},85854:function(e,n,t){"use strict";var r,i,o,c,u,l,a,s,d=t(82394),f=t(26304),p=t(26653),h=t(38626),m=t(33591),g=t(44897),b=t(95363),v=t(61896),j=t(30160),y=t(70515),x=t(38276),O=t(28598),w=["children","condensed","inline","level","marketing","spacingBelow"];function Z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function _(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Z(Object(t),!0).forEach((function(n){(0,d.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var P=(0,h.css)([""," margin:0;"," "," "," "," "," "," "," "," "," "," "," "," ",""],j.IH,(function(e){return e.color&&"\n    color: ".concat(e.color,"\n  ")}),(function(e){return e.yellow&&"\n    color: ".concat((e.theme.accent||g.Z.accent).yellow,";\n  ")}),(function(e){return e.center&&"\n    text-align: center;\n  "}),(function(e){return!e.monospace&&0===Number(e.weightStyle)&&"\n    font-family: ".concat(b.iI,";\n  ")}),(function(e){return!e.monospace&&1===Number(e.weightStyle)&&"\n    font-family: ".concat(b.LX,";\n  ")}),(function(e){return!e.monospace&&2===Number(e.weightStyle)&&"\n    font-family: ".concat(b.LX,";\n  ")}),(function(e){return!e.monospace&&3===Number(e.weightStyle)&&"\n    font-family: ".concat(b.ry,";\n  ")}),(function(e){return!e.monospace&&4===Number(e.weightStyle)&&"\n    font-family: ".concat(b.YC,";\n  ")}),(function(e){return!e.monospace&&5===Number(e.weightStyle)&&"\n    font-family: ".concat(b.nF,";\n  ")}),(function(e){return!e.monospace&&(6===Number(e.weightStyle)||e.bold)&&"\n    font-family: ".concat(b.nF,";\n  ")}),(function(e){return!e.monospace&&7===Number(e.weightStyle)&&"\n    font-family: ".concat(b.nF,";\n  ")}),(function(e){return!e.monospace&&8===Number(e.weightStyle)&&"\n    font-family: ".concat(b.nF,";\n  ")}),(function(e){return e.lineHeightAuto&&"\n    line-height: normal !important;\n  "})),k=h.default.div.withConfig({displayName:"Headline__HeadlineContainerStyle",componentId:"sc-12jzt2e-0"})(["",""],(function(e){return"\n    color: ".concat((e.theme.content||g.Z.content).active,";\n  ")})),I=h.default.h1.withConfig({displayName:"Headline__H1HeroStyle",componentId:"sc-12jzt2e-1"})([""," font-size:42px;line-height:56px;"," "," ",""],P,m.media.md(r||(r=(0,p.Z)(["\n    ","\n  "])),v.aQ),m.media.lg(i||(i=(0,p.Z)(["\n    ","\n  "])),v.aQ),m.media.xl(o||(o=(0,p.Z)(["\n    ","\n  "])),v.aQ)),C=h.default.h1.withConfig({displayName:"Headline__H1Style",componentId:"sc-12jzt2e-2"})([""," ",""],P,v.MJ),S=h.default.h1.withConfig({displayName:"Headline__H1MarketingStyle",componentId:"sc-12jzt2e-3"})([""," "," "," "," "," ",""],P,m.media.xs(c||(c=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*y.iI,7*y.iI),m.media.sm(u||(u=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*y.iI,7*y.iI),m.media.md(l||(l=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*y.iI,7*y.iI),m.media.lg(a||(a=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*y.iI,7*y.iI),m.media.xl(s||(s=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*y.iI,7*y.iI)),H=h.default.h2.withConfig({displayName:"Headline__H2Style",componentId:"sc-12jzt2e-4"})([""," ",""],P,v.BL),N=h.default.h3.withConfig({displayName:"Headline__H3Style",componentId:"sc-12jzt2e-5"})([""," font-size:24px;line-height:32px;"],P),D=h.default.h4.withConfig({displayName:"Headline__H4Style",componentId:"sc-12jzt2e-6"})([""," font-size:20px;line-height:28px;"],P),E=h.default.h5.withConfig({displayName:"Headline__H5Style",componentId:"sc-12jzt2e-7"})([""," font-size:18px;line-height:26px;"],P),W=h.default.span.withConfig({displayName:"Headline__SpanStyle",componentId:"sc-12jzt2e-8"})([""," "," "," "," ",""],P,(function(e){return 1===e.level&&"\n    ".concat(v.MJ,"\n  ")}),(function(e){return 2===e.level&&"\n    ".concat(v.BL,"\n  ")}),(function(e){return 3===e.level&&"\n    font-size: 24px;\n    line-height: 32px;\n  "}),(function(e){return 4===e.level&&"\n    font-size: 20px;\n    line-height: 28px;\n  "})),z=function(e){var n,t=e.children,r=e.condensed,i=e.inline,o=e.level,c=e.marketing,u=e.spacingBelow,l=(0,f.Z)(e,w);i?n=W:0===Number(o)?n=I:1===Number(o)?n=c?S:C:2===Number(o)?n=H:3===Number(o)?n=N:4===Number(o)?n=D:5===Number(o)&&(n=E);var a=(0,O.jsxs)(n,_(_({},l),{},{level:o,children:[u&&(0,O.jsx)(x.Z,{mb:r?2:3,children:t}),!u&&t]}));return i?a:(0,O.jsx)(k,{children:a})};z.defaultProps={level:3,weightStyle:6},n.Z=z},72191:function(e,n,t){"use strict";t.d(n,{_k:function(){return o},bL:function(){return i},l2:function(){return c}});var r=t(70515),i=(r.iI,2*r.iI),o=2.5*r.iI,c=3*r.iI},61316:function(e,n,t){"use strict";t.r(n);var r=t(77837),i=t(38860),o=t.n(i),c=t(46568),u=t(55729),l=t(93808),a=t(82682),s=t(28274),d=t(38276),f=t(70515),p=t(92066),h=t(28598);function m(){return(0,h.jsx)(s.Z,{uuidItemSelected:p.HY,uuidWorkspaceSelected:p.WH,children:(0,h.jsx)(d.Z,{p:f.cd,children:(0,h.jsx)(a.Z,{justifyContent:"center",children:(0,h.jsx)(c.Z,{xl:8,xxl:6,children:(0,h.jsx)(u.Z,{})})})})})}m.getInitialProps=(0,r.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)}))),n.default=(0,l.Z)(m)},78419:function(e,n,t){"use strict";t.d(n,{Ch:function(){return c},H8:function(){return r},Tz:function(){return u},am:function(){return l},g6:function(){return i},vF:function(){return o}});var r="pipeline_edit_before_tab_selected",i="pipeline_edit_hidden_blocks",o="pipeline_edit_block_output_logs",c="setup_ai_later",u="auto_scroll_logs",l="display_local_timezone"},33323:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings/workspace/preferences",function(){return t(61316)}])},80022:function(e,n,t){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(n,{Z:function(){return r}})},15544:function(e,n,t){"use strict";function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}t.d(n,{Z:function(){return r}})},99177:function(e,n,t){"use strict";function r(e,n){return r=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},r(e,n)}function i(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&r(e,n)}t.d(n,{Z:function(){return i}})},93189:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(12539),i=t(80022);function o(e,n){if(n&&("object"===r(n)||"function"===typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return(0,i.Z)(e)}}},function(e){e.O(0,[844,6358,9696,8264,9774,2888,179],(function(){return n=33323,e(e.s=n);var n}));var n=e.O();_N_E=n}]);