(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[4],{101:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(31);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(s){a=!0,o=s}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},112:function(e,t,r){"use strict";r.r(t);var n=r(2),a=r(15),o=r(101),i=r(0),c=r(10),s=r(23),l=r(1),u={name:"",email:"",password:""},b={onRegister:s.a.register};t.default=Object(c.b)(null,b)((function(e){var t=e.onRegister,r=Object(i.useState)(u),c=Object(o.a)(r,2),s=c[0],b=c[1],d=s.name,j=s.email,m=s.password,p=function(e){var t=e.target,r=t.name,o=t.value;b(Object(a.a)(Object(a.a)({},s),{},Object(n.a)({},r,o)))};return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Please register to create a personal account"}),Object(l.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),t(s),b(u)},autoComplete:"off",children:[Object(l.jsxs)("label",{children:["Name",Object(l.jsx)("input",{type:"name",name:"name",value:d,required:!0,placeholder:"Enter your name",onChange:p})]}),Object(l.jsxs)("label",{children:["Email",Object(l.jsx)("input",{type:"email",name:"email",value:j,required:!0,placeholder:"Enter your email",onChange:p})]}),Object(l.jsxs)("label",{children:["Password",Object(l.jsx)("input",{type:"password",name:"password",value:m,required:!0,placeholder:"Enter your password",onChange:p})]}),Object(l.jsx)("button",{type:"submit",children:"Register"})]})]})}))}}]);
//# sourceMappingURL=register-page.8f31cc0a.chunk.js.map