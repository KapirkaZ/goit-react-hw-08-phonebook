(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[3],{100:function(t,e,n){"use strict";n.r(e);var c,r,a,o,u,s,i=n(0),b=n(22),j=n.n(b),l=n(10),O=(n(57),n(43)),d=n.n(O),f=n(1),h=function(t){var e=t.children;return Object(f.jsx)("div",{className:d.a.container,children:e})},g=n(7),p={home:"/",contacts:"/contacts",register:"/register",login:"/login"},m=n(17),v={isAuthenticated:function(t){return t.auth.token},getUserName:function(t){return t.auth.user.name}},x=Object(l.b)((function(t){return{isAuthenticated:v.getIsAuthenticated(t)}}))((function(t){var e=t.isAuthenticated;return Object(f.jsxs)("nav",{children:[Object(f.jsx)(m.a,{exact:!0,to:p.home,className:"Navlink",activeClassName:"Navlink--active",children:"Home"}),e&&Object(f.jsx)(m.a,{to:p.contacts,className:"Navlink",activeClassName:"Navlink--active",children:"Contacts"})]})})),C=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(m.a,{exact:!0,to:p.register,className:"Navlink",activeClassName:"Navlink--active",children:"Register"}),Object(f.jsx)(m.a,{to:p.login,className:"Navlink",activeClassName:"Navlink--active",children:"Login"})]})},_=n(23),A=n.p+"static/media/default-avatar.5e42d6f1.jpg",S=n(26),E=n.n(S),k=v.getUserEmail,N={onLogout:_.a.logout},R=Object(l.b)((function(t){return{email:k(t),avatar:A}}),N)((function(t){var e=t.email,n=t.avatar,c=t.onLogout;return Object(f.jsxs)("div",{className:E.a.container,children:[Object(f.jsx)("img",{src:n,alt:"avatar",width:"30"}),Object(f.jsxs)("span",{className:E.a.name,children:["Welcome, ",e]}),Object(f.jsx)("button",{className:E.a.button,type:"button",onClick:c,children:"Log Out"})]})})),U=n(41),q=n.n(U),y=v.getIsAuthenticated,B=Object(l.b)((function(t){return{isAuthenticated:y(t)}}))((function(t){var e=t.isAuthenticated;return Object(f.jsxs)("header",{className:q.a.header,children:[Object(f.jsx)(x,{}),e?Object(f.jsx)(R,{}):Object(f.jsx)(C,{})]})})),I=n(44),w=n.n(I),T=n(45),z=n.n(T),L=function(){return Object(f.jsx)(w.a,{className:z.a.spinner,type:"Oval",color:"#000",height:40,width:40})},F=n(15),G=n(24),M=Object(l.b)((function(t){return{isAuthenticated:v.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,c=t.redirectTo,r=Object(G.a)(t,["component","isAuthenticated","redirectTo"]);return Object(f.jsx)(g.b,Object(F.a)(Object(F.a)({},r),{},{render:function(t){return n?Object(f.jsx)(e,Object(F.a)({},t)):Object(f.jsx)(g.a,{to:c})}}))})),P=Object(l.b)((function(t){return{isAuthenticated:v.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,c=t.redirectTo,r=Object(G.a)(t,["component","isAuthenticated","redirectTo"]);return Object(f.jsx)(g.b,Object(F.a)(Object(F.a)({},r),{},{render:function(t){return n&&r.restricted?Object(f.jsx)(g.a,{to:c}):Object(f.jsx)(e,Object(F.a)({},t))}}))})),Q=Object(i.lazy)((function(){return n.e(1).then(n.bind(null,111))})),J=Object(i.lazy)((function(){return n.e(4).then(n.bind(null,112))})),X=Object(i.lazy)((function(){return n.e(2).then(n.bind(null,113))})),Y=Object(i.lazy)((function(){return Promise.all([n.e(7),n.e(0)]).then(n.bind(null,115))})),H={onGetCurrentUser:_.a.getCurrentUser},K=Object(l.b)(null,H)((function(t){var e=t.onGetCurrentUser;return Object(i.useEffect)((function(){e()}),[]),Object(f.jsxs)(h,{children:[Object(f.jsx)(B,{}),Object(f.jsx)(i.Suspense,{fallback:Object(f.jsx)(L,{}),children:Object(f.jsxs)(g.d,{children:[Object(f.jsx)(g.b,{exact:!0,path:p.home,component:Q}),Object(f.jsx)(P,{path:p.register,restricted:!0,component:J,redirectTo:p.contacts}),Object(f.jsx)(P,{path:p.login,restricted:!0,component:X,redirectTo:p.contacts}),Object(f.jsx)(M,{path:p.contacts,component:Y,redirectTo:p.login}),Object(f.jsx)(g.a,{to:p.home})]})})]})})),V=n(25),W=n(3),D=n(18),Z=n(46),$=n.n(Z),tt=n(47),et=n.n(tt),nt=n(2),ct=n(8),rt=n(16),at=rt.a.fetchContactRequest,ot=rt.a.fetchContactSuccess,ut=rt.a.fetchContactError,st=rt.a.addContactRequest,it=rt.a.addContactSuccess,bt=rt.a.addContactError,jt=rt.a.deleteContactRequest,lt=rt.a.deleteContactSuccess,Ot=rt.a.deleteContactError,dt=rt.a.changeFilter,ft=Object(W.c)([],(c={},Object(nt.a)(c,ot,(function(t,e){return e.payload})),Object(nt.a)(c,it,(function(t,e){var n=e.payload;return[].concat(Object(V.a)(t),[n])})),Object(nt.a)(c,lt,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),ht=Object(W.c)("",Object(nt.a)({},dt,(function(t,e){return e.payload}))),gt=Object(W.c)(!1,(r={},Object(nt.a)(r,st,(function(){return!0})),Object(nt.a)(r,it,(function(){return!1})),Object(nt.a)(r,bt,(function(){return!1})),Object(nt.a)(r,jt,(function(){return!0})),Object(nt.a)(r,lt,(function(){return!1})),Object(nt.a)(r,Ot,(function(){return!1})),Object(nt.a)(r,at,(function(){return!0})),Object(nt.a)(r,ot,(function(){return!1})),Object(nt.a)(r,ut,(function(){return!1})),r)),pt=Object(W.c)(!1,(a={},Object(nt.a)(a,st,(function(){return!1})),Object(nt.a)(a,it,(function(){return!1})),Object(nt.a)(a,bt,(function(){return!0})),Object(nt.a)(a,jt,(function(){return!1})),Object(nt.a)(a,lt,(function(){return!1})),Object(nt.a)(a,Ot,(function(){return!0})),Object(nt.a)(a,at,(function(){return!1})),Object(nt.a)(a,ot,(function(){return!1})),Object(nt.a)(a,ut,(function(){return!0})),a)),mt=Object(ct.b)({items:ft,filter:ht,loading:gt,error:pt}),vt=n(5),xt={name:null,email:null},Ct=Object(W.c)(xt,(o={},Object(nt.a)(o,vt.a.registerSuccess,(function(t,e){return e.payload.user})),Object(nt.a)(o,vt.a.loginSuccess,(function(t,e){return e.payload.user})),Object(nt.a)(o,vt.a.getCurrentUserSuccess,(function(t,e){return e.payload})),Object(nt.a)(o,vt.a.logoutSuccess,(function(){return xt})),o)),_t=Object(W.c)(null,(u={},Object(nt.a)(u,vt.a.registerSuccess,(function(t,e){return e.payload.token})),Object(nt.a)(u,vt.a.loginSuccess,(function(t,e){return e.payload.token})),Object(nt.a)(u,vt.a.logoutSuccess,(function(){return null})),u)),At=Object(W.c)(null,(s={},Object(nt.a)(s,vt.a.registerError,(function(t,e){return e.payload})),Object(nt.a)(s,vt.a.loginError,(function(t,e){return e.payload})),Object(nt.a)(s,vt.a.logoutError,(function(t,e){return e.payload})),Object(nt.a)(s,vt.a.getCurrentUserError,(function(t,e){return e.payload})),s)),St=Object(ct.b)({user:Ct,token:_t,error:At}),Et=[].concat(Object(V.a)(Object(W.d)({serializableCheck:{ignoredActions:[D.a,D.f,D.b,D.c,D.d,D.e]}})),[et.a]),kt={key:"auth",storage:$.a,whitelist:["token"]},Nt=Object(W.a)({reducer:{auth:Object(D.g)(kt,St),contacts:mt},middleware:Et,devTools:!1}),Rt={store:Nt,persistor:Object(D.h)(Nt)};j.a.render(Object(f.jsx)(l.a,{store:Rt,children:Object(f.jsx)(K,{})}),document.getElementById("root"))},16:function(t,e,n){"use strict";var c=n(3),r=Object(c.b)("contacts/addRequest"),a=Object(c.b)("contacts/addSuccess"),o=Object(c.b)("contacts/addError"),u=Object(c.b)("contacts/fetchRequest"),s=Object(c.b)("contacts/fetchSuccess"),i=Object(c.b)("contacts/fetchError"),b=Object(c.b)("contacts/removeRequest"),j=Object(c.b)("contacts/removeSuccess"),l=Object(c.b)("contacts/removeError"),O=Object(c.b)("contacts/changeFilter");e.a={addContactRequest:r,addContactSuccess:a,addContactError:o,fetchContactRequest:u,fetchContactSuccess:s,fetchContactError:i,removeContactRequest:b,removeContactSuccess:j,removeContactError:l,changeFilter:O}},23:function(t,e,n){"use strict";var c=n(19),r=n.n(c),a=n(5);r.a.defaults.baseURL="https://connections-api.herokuapp.com";var o=function(t){r.a.defaults.headers.common.Authorization="Bearer ".concat(t)},u=function(){r.a.defaults.headers.common.Authorization=""};e.a={register:function(t){return function(e){e(a.a.registerRequest()),r.a.post("/users/signup",t).then((function(t){o(t.data.token),e(a.a.registerSuccess(t.data))})).catch((function(t){var n=t.message;return e(a.a.registerError(n))}))}},logOut:function(){return function(t){t(a.a.logoutRequest()),r.a.post("/users/logout").then((function(){u(),t(a.a.logoutSuccess())})).catch((function(e){var n=e.message;return t(a.a.logoutError(n))}))}},logIn:function(t){return function(e){e(a.a.loginRequest()),r.a.post("/users/login",t).then((function(t){o(t.data.token),e(a.a.loginSuccess(t.data))})).catch((function(t){var n=t.message;return e(a.a.loginError(n))}))}},getCurrentUser:function(){return function(t,e){var n=e().auth.token;n&&(o(n),t(a.a.getCurrentUserRequest()),r.a.get("/users/current").then((function(e){var n=e.data;return t(a.a.getCurrentUserSuccess(n))})).catch((function(t){var e=t.message;return a.a.getCurrentUserError(e)})))}}}},26:function(t,e,n){t.exports={container:"UserMenu_container__1vpgc",name:"UserMenu_name__2IYpN",button:"UserMenu_button__2RLaF"}},41:function(t,e,n){t.exports={header:"AppBar_header__TXfFV",box:"AppBar_box__3UGIY",appear:"AppBar_appear__3I8IQ",appearActive:"AppBar_appearActive__3Qt0F","filter-enter":"AppBar_filter-enter__3hcsl","filter-enterActive":"AppBar_filter-enterActive__rahiK","filter-exit":"AppBar_filter-exit__1PQfX","filter-exitActive":"AppBar_filter-exitActive__x2ogu"}},43:function(t,e,n){t.exports={container:"Container_container__6vxUg"}},45:function(t,e,n){t.exports={spinner:"Loader_spinner__3wP3q"}},5:function(t,e,n){"use strict";var c=n(3),r=Object(c.b)("auth/registerRequest"),a=Object(c.b)("auth/registerSuccess"),o=Object(c.b)("auth/registerError"),u=Object(c.b)("auth/loginRequest"),s=Object(c.b)("auth/loginSuccess"),i=Object(c.b)("auth/loginError"),b=Object(c.b)("auth/logoutRequest"),j=Object(c.b)("auth/logoutSuccess"),l=Object(c.b)("auth/logoutError"),O=Object(c.b)("auth/getCurrentUserRequest"),d=Object(c.b)("auth/getCurrentUserSuccess"),f=Object(c.b)("auth/getCurrentUserError");e.a={registerRequest:r,registerSuccess:a,registerError:o,logoutRequest:b,logoutSuccess:j,logoutError:l,loginRequest:u,loginSuccess:s,loginError:i,getCurrentUserRequest:O,getCurrentUserSuccess:d,getCurrentUserError:f}},57:function(t,e,n){}},[[100,5,6]]]);
//# sourceMappingURL=main.f9ea9819.chunk.js.map