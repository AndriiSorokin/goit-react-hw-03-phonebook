(this["webpackJsonpreact-hw-02-phonebook"]=this["webpackJsonpreact-hw-02-phonebook"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(8),r=n.n(o),s=(n(15),n(10)),i=n(3),l=n(4),u=n(6),h=n(5),d=n(9),j=n(19),b=n(2),f=n.n(b),p=n(0),m=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",phone:""},t.inputHandler=function(e){var n=e.target,a=n.value,c=n.name;t.setState(Object(d.a)({},c,a))},t.submitHandler=function(e){e.preventDefault();var n={name:t.state.name,phone:t.state.phone,id:Object(j.a)()};t.props.addToList(n),t.reset(),console.log(n)},t.reset=function(){t.setState({name:"",phone:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.phone;return Object(p.jsxs)("form",{className:f.a.form,onSubmit:this.submitHandler,autoComplete:"off",children:[Object(p.jsx)("input",{onChange:this.inputHandler,placeholder:"Enter name",type:"text",name:"name",value:e}),Object(p.jsx)("input",{onChange:this.inputHandler,placeholder:"Enter phone",type:"text",name:"phone",value:n}),Object(p.jsx)("button",{className:f.a.btn,type:"submit",children:"Add contacts"})]})}}]),n}(a.Component),O=function(t){var e=t.contacts,n=t.deleteContact;return console.log(e),Object(p.jsx)("div",{children:Object(p.jsx)("ul",{children:e.map((function(t){return Object(p.jsxs)("li",{children:[Object(p.jsxs)("span",{children:[t.name," : ",t.phone]}),Object(p.jsx)("button",{className:f.a.btnDelete,onClick:function(){return n(t.id)},type:"button",children:"delete"})]},t.id)}))})})},v=function(t){var e=t.value,n=t.onChangeFilter;return Object(p.jsxs)("div",{className:f.a.form,children:[Object(p.jsx)("p",{children:"Find contact by name"}),Object(p.jsx)("input",{type:"text",placeholder:"Find",value:e,onChange:function(t){return n(t.target.value)}})]})},x=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],name:"",filter:""},t.addToList=function(e){var n=e.name;t.state.contacts.every((function(t){return!t.name.includes(n)}))?t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[e])}})):alert("".concat(n," is alredy contact!"))},t.changeFilter=function(e){t.setState({filter:e})},t.filterUser=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.deleteUser=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contact",JSON.stringify(this.state.contacts))}},{key:"componentDidMount",value:function(){var t=localStorage.getItem("contact"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"render",value:function(){var t=this.state,e=t.filter,n=t.contacts,a=this.filterUser();return Object(p.jsxs)("div",{className:f.a.container,children:[Object(p.jsx)("h1",{children:"PhoneBook"}),Object(p.jsx)(m,{addToList:this.addToList}),n.length>2?Object(p.jsx)(v,{value:e,onChangeFilter:this.changeFilter}):"",Object(p.jsx)(O,{contacts:a,deleteContact:this.deleteUser})]})}}]),n}(a.Component),g=function(){return Object(p.jsx)("div",{children:Object(p.jsx)(x,{})})};r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(g,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={container:"PhoneBook_container__3SDuF",form:"PhoneBook_form__2FrpE",btn:"PhoneBook_btn__lGfGp",btnDelete:"PhoneBook_btnDelete__1xO3e"}}},[[17,1,2]]]);
//# sourceMappingURL=main.db1c1cb6.chunk.js.map