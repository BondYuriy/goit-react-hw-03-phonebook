(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={btn:"Contact_btn__1GbhC"}},13:function(t,e,n){t.exports={item:"ContactList_item__3YsZK"}},15:function(t,e,n){t.exports=n(23)},22:function(t,e,n){},23:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(11),o=n.n(r),l=n(1),u=n(14),i=n(2),m=n(3),s=n(5),b=n(4),h=n(6),f=n(8),p=n(7),d=n.n(p),v=n(9),C=n.n(v),E={name:"",number:""},g={inputName:d()(),inputNumber:d()()},O=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(b.a)(e)).call.apply(t,[this].concat(c)))).state=Object(f.a)({},E),n.handleChange=function(t){var e=t.currentTarget,a=e.name,c=e.value;n.setState(Object(l.a)({},a,c))},n.submitForm=function(t){t.preventDefault();var e=n.state,a=e.name,c=e.number;(0,n.props.onSubmitContact)({name:a,number:c,id:d()()}),n.reset()},n.reset=function(){n.setState(Object(f.a)({},E))},n}return Object(h.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return c.a.createElement("form",{className:C.a.form,onSubmit:this.submitForm},c.a.createElement("label",{htmlFor:g.inputName},c.a.createElement("p",null,"Name"),c.a.createElement("input",{type:"text",name:"name",value:e,onChange:this.handleChange,id:g.inputName})),c.a.createElement("label",{htmlFor:g.inputNumber},c.a.createElement("p",null,"Number"),c.a.createElement("input",{type:"text",name:"number",value:n,onChange:this.handleChange,id:g.inputNumber})),c.a.createElement("button",{className:C.a.btn,type:"submit"},"Add contact"))}}]),e}(a.Component),y=function(t){var e=t.filter,n=t.onFilterChange;return c.a.createElement("div",null,c.a.createElement("p",null,"Find contacts by name"),c.a.createElement("input",{type:"text",name:"filter",value:e,onChange:n}))},j=n(12),N=n.n(j),S=function(t){var e=t.name,n=t.number,a=t.onDelete;return c.a.createElement(c.a.Fragment,null,c.a.createElement("span",null,"".concat(e,": ").concat(n)),c.a.createElement("button",{className:N.a.btn,type:"button",onClick:a},"Delete"))},F=n(13),_=n.n(F),k=function(t){var e=t.contacts,n=t.onDelete;return c.a.createElement("ul",null,e.map((function(t){var e=t.name,a=t.number,r=t.id;return c.a.createElement("li",{className:_.a.item,key:e},c.a.createElement(S,{name:e,number:a,onDelete:function(){return n(r)}}))})))},w=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(b.a)(e)).call.apply(t,[this].concat(c)))).state={contacts:[],filter:""},n.addContact=function(t){n.state.contacts.filter((function(e){return e.name.toLocaleLowerCase()===t.name.toLocaleLowerCase()})).length>0?alert("such name exists"):n.setState((function(e){return{contacts:[].concat(Object(u.a)(e.contacts),[t])}}))},n.handleFilterChange=function(t){var e=t.currentTarget,a=e.name,c=e.value;n.setState(Object(l.a)({},a,c))},n.deleteContact=function(t){var e=n.state.contacts;n.setState({contacts:e.filter((function(e){return e.id!==t}))})},n}return Object(h.a)(e,t),Object(m.a)(e,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));null!==t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;e.contacts!==n&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=e.filter((function(t){return t.name.toLocaleLowerCase().includes(n)}));return c.a.createElement("div",null,c.a.createElement("h1",null,"Phonebook"),c.a.createElement(O,{onSubmitContact:this.addContact}),c.a.createElement("h2",null,"Contacts"),c.a.createElement(y,{filter:n,onFilterChange:this.handleFilterChange}),e.length>0&&c.a.createElement(k,{contacts:a,onDelete:this.deleteContact}))}}]),e}(a.Component);n(22);o.a.render(c.a.createElement(w,null),document.getElementById("root"))},9:function(t,e,n){t.exports={form:"ContactForm_form__1fuOn",btn:"ContactForm_btn__2Bpnz"}}},[[15,1,2]]]);
//# sourceMappingURL=main.951c0dcc.chunk.js.map