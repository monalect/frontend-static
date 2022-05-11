"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[226],{6384:function(n,e,t){t.d(e,{cC:function(){return a},h_:function(){return s},cs:function(){return f},aA:function(){return v}});var r=t(5893);var i=t(447);function a(n){var e=n.slug,t=n.className,a=n.children;return(0,r.jsxs)(i.h4,{className:t,children:[(0,r.jsxs)(i.y7,{children:[(0,r.jsx)(i.KS,{href:"/",active:"/"===e,children:"Home"}),(0,r.jsx)(i.KS,{href:"/blog",active:"/blog"===e,children:"Blog"}),(0,r.jsx)(i.KS,{href:"/vision",active:"/vision"===e,children:"Vision"}),(0,r.jsx)(i.KS,{href:"/about",active:"/about"===e,children:"About"})]}),a]})}var c=t(9008);function s(n){var e=n.title,t=(n.children,n.description);return(0,r.jsxs)(c.default,{children:[(0,r.jsx)("title",{children:e}),(0,r.jsx)("meta",{name:"description",content:t}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",href:"/meta/favicon.ico"})]})}var o=t(4051),l=t.n(o),u=t(7294),d=t(4236);function h(n,e,t,r,i,a,c){try{var s=n[a](c),o=s.value}catch(l){return void t(l)}s.done?e(o):Promise.resolve(o).then(r,i)}function m(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var a=n.apply(e,t);function c(n){h(a,r,i,c,s,"next",n)}function s(n){h(a,r,i,c,s,"throw",n)}c(void 0)}))}}function f(){var n=(0,u.useState)(""),e=(n[0],n[1]),t=(0,u.useState)(""),i=t[0],a=t[1],c=(0,u.useState)(""),s=c[0],o=c[1],h=(0,u.useState)("mn-is-fadeout"),f=h[0],p=h[1],x=(0,u.useState)(!1),j=x[0],g=x[1],b=(0,u.useRef)(null);function y(){return(y=m(l().mark((function n(){var e,t;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.current.executeAsync();case 2:e=n.sent,t=new FormData,g(!0),t.append("email",i),t.append("captcha",e),fetch("https://api.monalect.com/email",{method:"post",body:t}).then((function(n){if(g(!1),200==n.status)return n.json();o("Something went wrong."),p("mn-is-fadein")})).then((function(n){1==n.success?(o("Thank you."),p("mn-is-fadein")):(o("Something went wrong."),p("mn-is-fadein"))})),b.current.reset();case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(v,{buttonType:"primary",buttonText:"Stay Notified",name:"email",placeholder:"Email Address",setCaptcha:e,captchaRef:b,onSubmit:function(){return y.apply(this,arguments)},onChange:a}),j?(0,r.jsx)(d.Puff,{stroke:"#192a61"}):(0,r.jsx)("p",{id:"success_message",className:f,children:s})]})}var p=t(4853);function v(n){var e=n.children,t=n.label,a=n.name,c=n.id,s=n.type,o=void 0===s?"text":s,l=n.placeholder,u=n.minlength,d=n.maxlength,h=n.required,m=void 0!==h&&h,f=n.value,v=n.onChange,x=(n.setCaptcha,n.pattern),j=n.captchaRef,g=n.onSubmit,b=n.buttonType,y=void 0===b?"primary":b,w=n.buttonText,N=void 0===w?"Button":w;return(0,r.jsxs)("form",{className:"mn-c-text-input mn-c-text-button-form",children:[(0,r.jsx)("label",{htmlFor:a,children:(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"mn-c-label",children:t}),m?(0,r.jsx)("span",{className:"mn-is-optional",children:"(optional)"}):""]})}),(0,r.jsxs)("div",{className:"mn-c-text-button",children:[(0,r.jsx)("input",{type:o,id:c,name:a,placeholder:l,value:f,onChange:function(n){return v(n.target.value)},required:m,minLength:u,maxLength:d,pattern:x}),(0,r.jsx)(i.zx,{buttonType:y,onClick:g,children:N})]}),(0,r.jsx)("div",{className:"mn-c-helper-text",children:e}),(0,r.jsx)(p.Z,{size:"invisible",sitekey:"6LfDItgfAAAAAL9Yg1cuVDAWo9225dOlfCPoqzgf",ref:j})]})}function x(){var n,e,t=(n=["\n\tmutation ($username: String!, $email: String, $password: String!, $captcha: String!)\n\t{ register (\n\t\tusername: $username, \n\t\temail: $email, \n\t\tpassword: $password, \n\t\tcaptcha: $captcha) {\n\t\t\tusername\n\t\t}\n\t}\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return x=function(){return t},t}(0,t(7283).Ps)(x())},447:function(n,e,t){t.d(e,{zx:function(){return i},Zb:function(){return l},$_:function(){return o},h4:function(){return a},KS:function(){return c},y7:function(){return s}});var r=t(5893);function i(n){var e=n.children,t=n.name,i=void 0===t?"":t,a=n.buttonType,c=void 0===a?"primary":a,s=n.buttonSize,o=void 0===s?null:s,l=n.className,u=n.onClick;return(0,r.jsx)("button",{className:"mn-c-button \n\t\t\t".concat("primary"===c?"mn-is-primary":"","\n\t\t\t").concat("secondary"===c?"mn-is-secondary":"","\t\n\t\t\t").concat("danger"===c?"mn-is-danger":"","\t\n\t\t\t").concat("small"===o?"mn-is-small":"","\n\t\t\t").concat("large"===o?"mn-is-large":""," \n\t\t\t").concat(l,"\n\t\t\t"),onClick:u,type:"button",name:i,children:e})}t(7294);function a(n){var e=n.children,t=n.className,i=n.onClick,a=window.pageYOffset;return window.onscroll=function(){var n=window.pageYOffset,e=document.querySelector("header");e.style.top=a>n?"0":"-".concat(e.offsetHeight,"px"),a=n},(0,r.jsx)("header",{className:"mn-c-header ".concat(t),onClick:i,children:e})}function c(n){var e=n.children,t=n.href,i=void 0===t?"#":t,a=n.active,c="mn-c-header-link ".concat(void 0!==a&&a?"mn-is-active":"mn-is-inactive");return(0,r.jsx)("li",{className:c,children:(0,r.jsx)("a",{href:i,children:e})})}var s=function(n){return(0,r.jsx)("nav",{children:(0,r.jsx)("ul",{className:"mn-c-header-menu",children:n.children})})};function o(n){n.children;return(0,r.jsx)("footer",{children:(0,r.jsx)("p",{children:(0,r.jsxs)("a",{href:"https://www.github.com/buyayub",children:["Created by ",(0,r.jsx)("span",{className:"mn-is-underlined",children:"Ayub Elwhishi"})]})})})}function l(n){var e=n.title,t=n.date,i=n.words,a=n.slug,c="".concat(Math.round(i/200)," min");return(0,r.jsxs)("a",{href:"/blog/posts/".concat(a),className:"mn-c-card mn-is-small",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{children:e}),(0,r.jsx)("p",{className:"mn-c-time",children:c})]}),(0,r.jsx)("p",{className:"mn-c-date",children:t})]})}t(6384)}}]);