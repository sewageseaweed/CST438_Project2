(this["webpackJsonpcst438-project2"]=this["webpackJsonpcst438-project2"]||[]).push([[0],{31:function(e,t){},32:function(e,t){},33:function(e,t){},40:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(15),o=n.n(r),c=(n(40),n(8)),i=n(9),u=n(11),l=n(10),p=n(31),h=n.n(p),j=n(32),d=n.n(j),m=n(33),b=n.n(m),O=n(13),f=n.n(O),g=n(1),v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).onChange=function(t){var n=e.state;n[t.target.name]=t.target.value,e.setState(n)},e.onSubmit=function(t){t.preventDefault();var n=e.state,a=n.username,s=n.password,r=n.userData;f.a.get("/users/allUsers").then((function(t){e.setState({userData:t.data})})).catch((function(e){console.log("Get Users Error",e)})),r.forEach((function(e){a===e.username&&s===e.password?console.log("gottem"):console.log("User not found")}))},e.state={username:"",password:"",userData:[]},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(g.jsx)("div",{class:"register-wrapper",children:Object(g.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(g.jsx)("input",{class:"p-3 m-3",type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.onChange,required:!0}),Object(g.jsx)("input",{class:"p-3 m-3",type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.onChange,required:!0}),Object(g.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Login"})]})})}}]),n}(a.Component),x=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"Home"}),Object(g.jsx)("h1",{children:"Home"})]})}}]),n}(a.Component),w=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).onChange=function(t){var n=e.state;n[t.target.name]=t.target.value,e.setState(n)},e.onSubmit=function(t){t.preventDefault();var n=e.state,a=n.username,s=n.password,r=n.password_confirmation,o=n.email;s===r&&f.a.post("/users/save",{username:a,password:s,email:o},{withCredentials:!0}).then((function(t){e.props.history.push("/")})).catch((function(e){console.log("registration error ",e)}))},e.state={username:"",password:"",password_confirmation:"",email:"",userData:[]},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(g.jsx)("div",{class:"register-wrapper",children:Object(g.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(g.jsx)("input",{class:"p-3 m-3",type:"email",name:"email",placeholder:"Email",value:this.state.email,onChange:this.onChange,required:!0}),Object(g.jsx)("input",{class:"p-3 m-3",type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.onChange,required:!0}),Object(g.jsx)("input",{class:"p-3 m-3",type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.onChange,required:!0}),Object(g.jsx)("input",{class:"p-3 m-3",type:"password",name:"password_confirmation",placeholder:"Password confirmation",value:this.state.password_confirmation,onChange:this.onChange,required:!0}),Object(g.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Register"})]})})}}]),n}(a.Component),y=n(12),C=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(g.jsx)("div",{class:"container",children:Object(g.jsxs)("nav",{class:"nav navbar-expand-lg bg-dark fixed-top p-3 text-white",children:[Object(g.jsx)(y.b,{to:"/create",children:" Add Wishlist "}),Object(g.jsx)(y.b,{to:"/login",children:" Login "}),Object(g.jsx)(y.b,{to:"/register",children:" Register "})]})})}}]),n}(a.Component),S=C,D=n(2),k=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={loggedInStatus:"NOTLOGGEDIN",user:{},userData:[]},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;f.a.get("/users/allUsers").then((function(t){e.setState({userData:t.data}),console.log(e.state.userData)}))}},{key:"render",value:function(){return Object(g.jsx)("div",{class:"app",children:Object(g.jsxs)(y.a,{children:[Object(g.jsx)(S,{}),Object(g.jsxs)(D.c,{children:[Object(g.jsx)(D.a,{exact:!0,path:"/",component:x}),Object(g.jsx)(D.a,{path:"/create",component:h.a}),Object(g.jsx)(D.a,{path:"/register",component:w}),Object(g.jsx)(D.a,{path:"/login",component:v}),Object(g.jsx)(D.a,{path:"/edit/:id",component:d.a}),Object(g.jsx)(D.a,{path:"/show/:id",component:b.a})]})]})})}}]),n}(a.Component);n(65);o.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(k,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.068e9ded.chunk.js.map