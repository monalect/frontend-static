(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4369)}])},9182:function(e,n,r){"use strict";r.d(n,{$_:function(){return f},h4:function(){return c},KS:function(){return a},y7:function(){return l},cC:function(){return u},K$:function(){return s}});var t=r(5893);var o=r(1664),i=r.n(o);var a=function(e){var n=e.children,r=e.href,o=void 0===r?"#":r,a=e.active,l="mn__header-link ".concat(void 0!==a&&a?"active":"inactive");return(0,t.jsx)("li",{className:l,children:(0,t.jsx)(i(),{href:o,children:(0,t.jsx)("a",{children:n})})})};var l=function(e){return(0,t.jsx)("nav",{children:(0,t.jsx)("ul",{className:"mn__header-menu",children:e.children})})};var c=function(e){var n=e.children,r=window.pageYOffset;return window.onscroll=function(){var e=window.pageYOffset,n=document.querySelector("header");n.style.top=r>e?"0":"-".concat(n.offsetHeight,"px"),r=e},(0,t.jsx)("header",{className:"mn__header",children:n})};function u(e){var n=e.slug;return(0,t.jsx)(c,{children:(0,t.jsxs)(l,{children:[(0,t.jsx)(a,{href:"/",active:"/"===n,children:"Home"}),(0,t.jsx)(a,{href:"/blog",active:"/blog"===n,children:"Blog"}),(0,t.jsx)(a,{href:"/vision",active:"/vision"===n,children:"Vision"}),(0,t.jsx)(a,{href:"/about",active:"/about"===n,children:"About"})]})})}function s(e){var n=e.title,r=e.date,o=e.words,a=e.slug,l="".concat(Math.round(o/200)," min");return(0,t.jsx)(i(),{href:"/blog/posts/".concat(a),children:(0,t.jsxs)("div",{className:"mn__post_card mn__small",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h4",{children:n}),(0,t.jsx)("p",{className:"mn__time",children:l})]}),(0,t.jsx)("p",{className:"mn__date",children:r})]})})}function f(){return(0,t.jsx)("footer",{children:(0,t.jsxs)("p",{children:[" Created by ",(0,t.jsx)("a",{href:"https://www.github.com/buyayub",children:"Ayub Elwhishi"})]})})}},1551:function(e,n,r){"use strict";function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,o,i=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(t=r.next()).done)&&(i.push(t.value),!n||i.length!==n);a=!0);}catch(c){l=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i,a=(i=r(7294))&&i.__esModule?i:{default:i},l=r(1003),c=r(880),u=r(9246);var s={};function f(e,n,r,t){if(e&&l.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;s[n+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var n,r=!1!==e.prefetch,t=c.useRouter(),i=a.default.useMemo((function(){var n=o(l.resolveHref(t,e.href,!0),2),r=n[0],i=n[1];return{href:r,as:e.as?l.resolveHref(t,e.as):i||r}}),[t,e.href,e.as]),d=i.href,h=i.as,v=a.default.useRef(d),p=a.default.useRef(h),y=e.children,m=e.replace,g=e.shallow,b=e.scroll,j=e.locale;"string"===typeof y&&(y=a.default.createElement("a",null,y));var x=(n=a.default.Children.only(y))&&"object"===typeof n&&n.ref,_=o(u.useIntersection({rootMargin:"200px"}),3),w=_[0],E=_[1],C=_[2],M=a.default.useCallback((function(e){p.current===h&&v.current===d||(C(),p.current=h,v.current=d),w(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[h,x,d,C,w]);a.default.useEffect((function(){var e=E&&r&&l.isLocalURL(d),n="undefined"!==typeof j?j:t&&t.locale,o=s[d+"%"+h+(n?"%"+n:"")];e&&!o&&f(t,d,h,{locale:n})}),[h,d,E,j,r,t]);var A={ref:M,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,o,i,a,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),n[o?"replace":"push"](r,t,{shallow:i,locale:c,scroll:a}))}(e,t,d,h,m,g,b,j)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),l.isLocalURL(d)&&f(t,d,h,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var I="undefined"!==typeof j?j:t&&t.locale,S=t&&t.isLocaleDomain&&l.getDomainLocale(h,I,t&&t.locales,t&&t.domainLocales);A.href=S||l.addBasePath(l.addLocale(h,I,t&&t.defaultLocale))}return a.default.cloneElement(n,A)};n.default=d,("function"===typeof n.default||"object"===typeof n.default&&null!==n.default)&&(Object.assign(n.default,n),e.exports=n.default)},9246:function(e,n,r){"use strict";function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,o,i=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(t=r.next()).done)&&(i.push(t.value),!n||i.length!==n);a=!0);}catch(c){l=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,r=e.rootMargin,t=e.disabled||!l,s=i.useRef(),f=o(i.useState(!1),2),d=f[0],h=f[1],v=o(i.useState(n?n.current:null),2),p=v[0],y=v[1],m=i.useCallback((function(e){s.current&&(s.current(),s.current=void 0),t||d||e&&e.tagName&&(s.current=function(e,n,r){var t=function(e){var n,r={root:e.root||null,margin:e.rootMargin||""},t=u.find((function(e){return e.root===r.root&&e.margin===r.margin}));t?n=c.get(t):(n=c.get(r),u.push(r));if(n)return n;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var n=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return c.set(r,n={id:r,observer:i,elements:o}),n}(r),o=t.id,i=t.observer,a=t.elements;return a.set(e,n),i.observe(e),function(){if(a.delete(e),i.unobserve(e),0===a.size){i.disconnect(),c.delete(o);var n=u.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));n>-1&&u.splice(n,1)}}}(e,(function(e){return e&&h(e)}),{root:p,rootMargin:r}))}),[t,p,r,d]),g=i.useCallback((function(){h(!1)}),[]);return i.useEffect((function(){if(!l&&!d){var e=a.requestIdleCallback((function(){return h(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),i.useEffect((function(){n&&y(n.current)}),[n]),[m,d,g]};var i=r(7294),a=r(4686),l="undefined"!==typeof IntersectionObserver;var c=new Map,u=[];("function"===typeof n.default||"object"===typeof n.default&&null!==n.default)&&(Object.assign(n.default,n),e.exports=n.default)},4369:function(e,n,r){"use strict";r.r(n);var t=r(5893),o=r(9182);n.default=function(){return(0,t.jsxs)("div",{id:"landing",class:"root",children:[(0,t.jsx)(o.cC,{slug:"/"}),(0,t.jsxs)("main",{children:[(0,t.jsxs)("section",{id:"landing_banner",children:[(0,t.jsx)("img",{src:"/logo_large.svg",id:"banner_logo",alt:"Monalect Logo"}),(0,t.jsxs)("div",{id:"banner_text",children:[(0,t.jsx)("h1",{id:"banner_title",children:"monalect."}),(0,t.jsxs)("div",{id:"banner_subtitle",children:[(0,t.jsx)("h4",{children:"Self-taught I sing; by Heaven and Heaven alone,"}),(0,t.jsx)("h4",{children:"The genuine seeds of poesy are sown. "})]})]})]}),(0,t.jsxs)("article",{id:"landing_body",children:[(0,t.jsx)("h4",{id:"landing_description",children:"Monalect is a self-learning management system meant to provide efficiency, structure, and self-direction to your learning experience."}),(0,t.jsx)("h4",{children:" Coming soon "})]})]}),(0,t.jsx)(o.$_,{})]})}},1664:function(e,n,r){e.exports=r(1551)}},function(e){e.O(0,[774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);