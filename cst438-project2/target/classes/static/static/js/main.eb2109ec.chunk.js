(this["webpackJsonpcst438-project2"]=this["webpackJsonpcst438-project2"]||[]).push([[0],{33:function(e,t){},34:function(e,t){},35:function(e,t){},36:function(e,t){},41:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(13),r=n.n(s),o=(n(41),n(14)),i=n(15),c=n(18),u=n(17),h=n(8),p=n(16),j=n.n(p),d=n(1),l=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={userData:[]},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;j.a.get("/users/allUsers").then((function(t){e.setState({userData:t.data}),console.log(e.state.userData)}))}},{key:"render",value:function(){return Object(d.jsxs)("div",{class:"container",children:[Object(d.jsxs)("nav",{class:"nav navbar-expand-lg bg-dark fixed-top p-3 text-white",children:[Object(d.jsx)(h.b,{to:"/create",children:" Add Wishlist "}),Object(d.jsx)(h.b,{to:"/login",children:" Login "}),Object(d.jsx)(h.b,{to:"/register",children:" Register "})]}),Object(d.jsx)("div",{class:"p-3 mt-5",children:this.state.userData.map((function(e){return Object(d.jsx)("h1",{class:"card p-3 m-3",children:e.username})}))})]})}}]),n}(a.Component),m=n(33),b=n.n(m),O=n(34),x=n.n(O),f=n(35),v=n.n(f),g=n(36),w=n.n(g),C=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onChange=function(t){var n=e.state;n[t.target.name]=t.target.value,e.setState(n)},e.onSubmit=function(t){t.preventDefault();var n=e.state,a=n.username,s=n.password,r=n.password_confirmation,o=n.email;s===r&&j.a.post("/users/save",{username:a,password:s,email:o}).then((function(t){e.props.history.push("/")}))},e.state={username:"",password:"",password_confirmation:"",email:"",userData:[]},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(d.jsx)("input",{type:"email",name:"email",placeholder:"Email",value:this.state.email,onChange:this.onChange,required:!0}),Object(d.jsx)("input",{type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.onChange,required:!0}),Object(d.jsx)("input",{type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.onChange,required:!0}),Object(d.jsx)("input",{type:"password",name:"password_confirmation",placeholder:"Password confirmation",value:this.state.password_confirmation,onChange:this.onChange,required:!0}),Object(d.jsx)("button",{type:"submit",children:"Register"})]})})}}]),n}(a.Component),y=(n(66),n(2));r.a.render(Object(d.jsx)(h.a,{children:Object(d.jsxs)("div",{children:[Object(d.jsx)(y.a,{exact:!0,path:"/",component:l}),Object(d.jsx)(y.a,{path:"/create",component:b.a}),Object(d.jsx)(y.a,{path:"/register",component:C}),Object(d.jsx)(y.a,{path:"/login",component:w.a}),Object(d.jsx)(y.a,{path:"/edit/:id",component:x.a}),Object(d.jsx)(y.a,{path:"/show/:id",component:v.a})]})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.eb2109ec.chunk.js.map