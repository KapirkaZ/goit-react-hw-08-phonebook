(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[2],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(31);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(l){o=!0,a=l}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},113:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n(15),a=n(101),i=n(0),c=n(10),l=n(23),u=n(1),s={email:"",password:""},b={onLogin:l.a.login};t.default=Object(c.b)(null,b)((function(e){var t=e.onLogin,n=Object(i.useState)(s),c=Object(a.a)(n,2),l=c[0],b=c[1],d=l.email,h=l.password,j=function(e){var t=e.target,n=t.name,a=t.value;b(Object(o.a)(Object(o.a)({},l),{},Object(r.a)({},n,a)))};return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Please login to your account"}),Object(u.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),t(l),b(s)},autoComplete:"off",children:[Object(u.jsxs)("label",{children:["Email",Object(u.jsx)("input",{type:"email",name:"email",value:d,required:!0,placeholder:"Enter your email",onChange:j})]}),Object(u.jsxs)("label",{children:["Password",Object(u.jsx)("input",{type:"password",name:"password",value:h,required:!0,placeholder:"Enter your password",onChange:j})]}),Object(u.jsx)("button",{type:"submit",children:"Log In"})]})]})}))}}]);
//# sourceMappingURL=login-page.fa013caf.chunk.js.map