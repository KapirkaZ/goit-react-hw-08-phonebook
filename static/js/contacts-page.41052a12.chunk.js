(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{107:function(t,e,n){t.exports={TaskEditor:"ContactForm_TaskEditor__1Ap_I",TaskEditor_label:"ContactForm_TaskEditor_label__10Buz",TaskEditor_input:"ContactForm_TaskEditor_input__39Xnt",TaskEditorinput:"ContactForm_TaskEditorinput__27hqh",TaskEditor_button:"ContactForm_TaskEditor_button__1UzRE"}},108:function(t,e,n){t.exports={filterstyle:"Filter_filterstyle__33HAK",inputstyle:"Filter_inputstyle__3Pw66"}},109:function(t,e,n){t.exports={TaskList:"ContactList_TaskList__3d_63",TaskList_item:"ContactList_TaskList_item__2HaU4",completed:"ContactList_completed__23jhu",TaskList_text:"ContactList_TaskList_text__iBjeA",TaskList_actions:"ContactList_TaskList_actions__M7yCQ",TaskList_button:"ContactList_TaskList_button__2dAE_",buttonstyle:"ContactList_buttonstyle__3RvUZ"}},115:function(t,e,n){"use strict";n.r(e);var a=n(102),c=n(103),s=n(105),o=n(104),r=n(0),i=n(10),u=n(2),l=n(107),d=n.n(l),b=n(19),_=n.n(b),m=n(16),h={addContact:function(t,e){return function(n){n(m.a.addContactRequest()),_.a.post("/contacts",{name:t,number:e}).then((function(t){var e=t.data;return n(m.a.addContactSuccess(e))})).catch((function(t){return n(m.a.addContactError(t.message))}))}},fetchContacts:function(){return function(t){t(m.a.fetchContactRequest()),_.a.get("/contacts").then((function(e){var n=e.data;return t(m.a.fetchContactSuccess(n))})).catch((function(e){return t(m.a.fetchContactError(e.message))}))}},deleteContact:function(t){return function(e){e(m.a.deleteContactRequest()),_.a.delete("/contacts/".concat(t)).then((function(){return e(m.a.deleteContactSuccess(t))})).catch((function(t){return e(m.a.deleteContactError(t.message))}))}}},j=n(1),f=function(t){Object(s.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,s=new Array(c),o=0;o<c;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(u.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;t.props.onAddContact(a,c),t.setState({name:"",number:""})},t}return Object(c.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{className:d.a.TaskEditor,onSubmit:this.handleSubmit,children:[Object(j.jsxs)("label",{className:d.a.TaskEditor_label,children:["Name:",Object(j.jsx)("input",{className:d.a.TaskEditor_input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",value:this.state.name,onChange:this.handleChange})]}),Object(j.jsxs)("label",{className:d.a.TaskEditor_label,children:["Number:",Object(j.jsx)("input",{className:d.a.TaskEditor_input,type:"text",name:"number",value:this.state.number,onChange:this.handleChange})]}),Object(j.jsx)("button",{className:d.a.TaskEditor_button,type:"submit",children:"Add contact"})]})}}]),n}(r.Component),p={onAddContact:h.addContact},C=Object(i.b)(null,p)(f),k=n(108),O=n.n(k),v={onChangeFilter:m.a.changeFilter},x=Object(i.b)((function(t){return{value:t.contacts.filter}}),v)((function(t){var e=t.value,n=t.onChangeFilter;return Object(j.jsxs)("div",{className:O.a.filterstyle,children:["Find contacts by name",Object(j.jsx)("input",{className:O.a.inputstyle,type:"text",value:e,onChange:function(t){return n(t.target.value)}})]})})),T=n(109),y=n.n(T),E=Object(i.b)((function(t){var e=t.contacts,n=e.items,a=e.filter;return{contacts:n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))}}),(function(t){return{onRemove:function(e){return t(m.a.removeContacts(e))}}}))((function(t){var e=t.contacts,n=t.onRemove;return Object(j.jsx)("ul",{className:y.a.TaskList,children:e.map((function(t){return Object(j.jsxs)("li",{className:y.a.TaskList_item,children:[t.name+": "+t.number,Object(j.jsx)("span",{className:y.a.buttonstyle,children:Object(j.jsx)("button",{className:y.a.TaskList_button,type:"button",name:"delete",onClick:function(){return n(t.id)}})})]},t.id)}))})})),L=n(114),g=n(41),N=n.n(g),F=function(t){Object(s.a)(n,t);var e=Object(o.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchContacts()}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:N.a.box,children:[Object(j.jsxs)("div",{className:N.a.wrapper,children:[Object(j.jsx)(C,{}),Object(j.jsx)(L.a,{in:!0,timeout:250,classNames:N.a.filter,unmountOnExit:!0,children:Object(j.jsx)(x,{})})]}),Object(j.jsx)("div",{children:Object(j.jsx)(E,{})})]})}}]),n}(r.Component),A={onFetchContacts:h.fetchContacts};e.default=Object(i.b)(null,A)(F)}}]);
//# sourceMappingURL=contacts-page.41052a12.chunk.js.map