parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"VEcq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getMarkdownDocument=exports.kebabToHumanCase=void 0;var e=t(require("axios")),r=require("../../lib");function t(e){return e&&e.__esModule?e:{default:e}}function n(e,r,t,n,o,a,u){try{var c=e[a](u),i=c.value}catch(s){return void t(s)}c.done?r(i):Promise.resolve(i).then(n,o)}function o(e){return function(){var r=this,t=arguments;return new Promise(function(o,a){var u=e.apply(r,t);function c(e){n(u,o,a,c,i,"next",e)}function i(e){n(u,o,a,c,i,"throw",e)}c(void 0)})}}var a=function(e){var r=e.replace(/-/," ");return"".concat(r.slice(0,1).toUpperCase()).concat(r.slice(1))};exports.kebabToHumanCase=a;var u=function(){var t=o(regeneratorRuntime.mark(function t(n){var o,a,u,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=n.path,a=n.docName,t.next=3,(0,e.default)((0,r.getMarkdownDocumentConfig)({path:o,docName:a}));case 3:return u=t.sent,c=u.data.content,t.abrupt("return",c);case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();exports.getMarkdownDocument=u;
},{"axios":"dZBD","../../lib":"Izzp"}],"h71U":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.DocsPage=void 0;var e=m(require("react")),t=require("react-router-dom"),r=require("react-helmet"),n=s(require("ustudio-ui/components/Flex")),a=s(require("ustudio-ui/components/Spinner")),u=s(require("ustudio-ui/components/Text")),o=require("../../utils"),l=require("../../components/markdown"),c=require("../../components/centered-container"),i=require("../../components/fade-in"),f=require("./docs.module");function s(e){return e&&e.__esModule?e:{default:e}}function d(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function m(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var u=n?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(r,a,u):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}function p(e,t,r,n,a,u,o){try{var l=e[u](o),c=l.value}catch(i){return void r(i)}l.done?t(c):Promise.resolve(c).then(n,a)}function v(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var u=e.apply(t,r);function o(e){p(u,n,a,o,l,"next",e)}function l(e){p(u,n,a,o,l,"throw",e)}o(void 0)})}}function y(e,t){return E(e)||w(e,t)||b(e,t)||h()}function h(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function b(e,t){if(e){if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?g(e,t):void 0}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function w(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,u=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(c){a=!0,u=c}finally{try{n||null==l.return||l.return()}finally{if(a)throw u}}return r}}function E(e){if(Array.isArray(e))return e}var O=function(){var s=(0,t.useParams)(),d=s.path,m=s.docName,p=y((0,e.useState)(!0),2),h=p[0],b=p[1],g=y((0,e.useState)(null),2),w=g[0],E=g[1],O=y((0,e.useState)(""),2),P=O[0],j=O[1],q=(0,e.useCallback)(v(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.prev=1,e.next=4,(0,f.getMarkdownDocument)({path:(0,o.encodePath)(d),docName:m});case 4:t=e.sent,j(t),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),r=e.t0.message,E(r);case 12:return e.prev=12,b(!1),e.finish(12);case 15:case"end":return e.stop()}},e,null,[[1,8,12,15]])})),[d,m]);return(0,e.useEffect)(function(){q()},[d,m]),e.default.createElement(e.default.Fragment,null,e.default.createElement(r.Helmet,null,e.default.createElement("title",null,m)),h&&!w&&e.default.createElement(i.FadeIn,null,e.default.createElement(c.CenteredContainer,null,e.default.createElement(n.default,{alignment:{horizontal:"center"}},e.default.createElement(a.default,{delay:500,appearance:{size:48}})))),!h&&!w&&e.default.createElement(i.FadeIn,null,e.default.createElement(l.Markdown,{source:P})),!h&&w&&e.default.createElement(i.FadeIn,null,e.default.createElement(c.CenteredContainer,null,e.default.createElement(u.default,{color:"var(--c-negative)",align:"center"},"".concat(w," ☹️")))))};exports.DocsPage=O;
},{"react":"n8MK","react-router-dom":"uc19","react-helmet":"d59q","ustudio-ui/components/Flex":"oIg6","ustudio-ui/components/Spinner":"xiu6","ustudio-ui/components/Text":"cYck","../../utils":"ocGl","../../components/markdown":"PMZt","../../components/centered-container":"qZhb","../../components/fade-in":"dhKt","./docs.module":"VEcq"}],"QWS6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return e.DocsPage}});var e=require("./docs.component");
},{"./docs.component":"h71U"}]},{},[], null)