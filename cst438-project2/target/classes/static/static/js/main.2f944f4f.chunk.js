(this["webpackJsonpcst438-project2"]=this["webpackJsonpcst438-project2"]||[]).push([[0],{36:function(e,t){},37:function(e,t){},38:function(e,t){},45:function(e,t,s){},94:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),r=s(15),c=s.n(r),o=(s(45),s(14)),i=s(8),u=s(9),l=s(17),h=s(11),d=s(10),j=s(36),p=s.n(j),b=s(37),m=s.n(b),O=s(38),g=s.n(O),f=s(12),x=s.n(f),v=s(0),w=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState(t)},n.onSubmit=function(e){e.preventDefault();var t=n.state,s=t.username,a=t.password;t.user;x.a.get("/users/username/"+s).then((function(e){console.log(e.data),n.setState({user:e.data}),s===n.state.user.username&&a===n.state.user.password?(console.log(e.data),n.props.handleSuccessfulAuth(e.data)):console.log("no user found")})).catch((function(e){console.log("Get Users Error",e)}))},n.state={username:"",password:"",user:{}},n}return Object(u.a)(s,[{key:"render",value:function(){return Object(v.jsx)("div",{class:"login-wrapper",children:Object(v.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(v.jsx)("div",{class:"text-center",children:" Login "}),Object(v.jsx)("input",{class:"p-3 m-3",type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.onChange,required:!0}),Object(v.jsx)("input",{class:"p-3 m-3",type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.onChange,required:!0}),Object(v.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Login"})]})})}}]),s}(n.Component),S=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState(t)},n.onSubmit=function(e){e.preventDefault();var t=n.state,s=t.username,a=t.password,r=t.password_confirmation,c=t.email;x.a.get("/users/username/"+s).then((function(e){n.setState({user:e.data})})).catch((function(e){console.log("Get Users Error",e)})),a===r&&s!==n.state.user.username&&c!==n.state.user.email?x.a.post("/users/save",{username:s,password:a,email:c},{withCredentials:!0}).then((function(e){x.a.get("/users/username/"+s).then((function(e){console.log(e.data),n.props.handleSuccessfulAuth(e.data)}))})).catch((function(e){console.log("registration error ",e)})):console.log("password does not match password confirmation, username/email already exists")},n.state={username:"",password:"",password_confirmation:"",email:"",user:{}},n}return Object(u.a)(s,[{key:"render",value:function(){return Object(v.jsx)("div",{class:"register-wrapper",children:Object(v.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(v.jsx)("div",{class:"text-center",children:" Register "}),Object(v.jsx)("input",{class:"p-3 m-3",type:"email",name:"email",placeholder:"Email",value:this.state.email,onChange:this.onChange,required:!0}),Object(v.jsx)("input",{class:"p-3 m-3",type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.onChange,required:!0}),Object(v.jsx)("input",{class:"p-3 m-3",type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.onChange,required:!0}),Object(v.jsx)("input",{class:"p-3 m-3",type:"password",name:"password_confirmation",placeholder:"Password confirmation",value:this.state.password_confirmation,onChange:this.onChange,required:!0}),Object(v.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Register"})]})})}}]),s}(n.Component),C=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).handleSuccessfulAuth=n.handleSuccessfulAuth.bind(Object(l.a)(n)),n}return Object(u.a)(s,[{key:"handleSuccessfulAuth",value:function(e){this.props.handleLogin(e),console.log("Succesful Login Check: ",e),this.props.history.push("/dashboard")}},{key:"render",value:function(){return Object(v.jsx)("div",{class:"mt-5",children:Object(v.jsxs)("div",{class:"row",children:[Object(v.jsx)("div",{class:"col",children:Object(v.jsx)(S,{handleSuccessfulAuth:this.handleSuccessfulAuth})}),Object(v.jsx)("div",{class:"col",children:Object(v.jsx)(w,{handleSuccessfulAuth:this.handleSuccessfulAuth})})]})})}}]),s}(n.Component),y=s(16),A=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){return Object(i.a)(this,s),t.call(this,e)}return Object(u.a)(s,[{key:"render",value:function(){return Object(v.jsx)("div",{class:"container",children:Object(v.jsxs)("nav",{class:"nav navbar-expand-lg bg-dark fixed-top p-3 text-white",children:[Object(v.jsx)("h1",{children:"WishLists"}),Object(v.jsxs)("h1",{children:["STATUS: ",this.props.user.username]}),Object(v.jsx)(y.b,{to:"/create",children:" Add Item To Wishlist "})]})})}}]),s}(n.Component),L=function(e){return Object(v.jsx)("div",{children:Object(v.jsxs)("div",{class:"mt-5",children:[Object(v.jsx)(A,Object(o.a)({},e)),Object(v.jsx)("h1",{children:"Dashboard"}),Object(v.jsxs)("h1",{children:["STATUS: ",e.loggedInStatus]}),Object(v.jsxs)("h1",{children:["Hello: ",e.user.username]})]})})},k=s(2),I=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(i.a)(this,s),(e=t.call(this)).state={loggedInStatus:"NOT_LOGGED_IN",user:{}},e.handleLogin=e.handleLogin.bind(Object(l.a)(e)),e}return Object(u.a)(s,[{key:"handleLogin",value:function(e){this.setState({loggedInStatus:"LOGGED_IN",user:e})}},{key:"render",value:function(){var e=this;return Object(v.jsx)("div",{class:"app",children:Object(v.jsx)(y.a,{children:Object(v.jsxs)(k.c,{children:[Object(v.jsx)(k.a,{exact:!0,path:"/",render:function(t){return Object(v.jsx)(C,Object(o.a)(Object(o.a)({},t),{},{handleLogin:e.handleLogin,loggedInStatus:e.state.loggedInStatus}))}}),Object(v.jsx)(k.a,{exact:!0,path:"/dashboard",render:function(t){return Object(v.jsx)(L,Object(o.a)(Object(o.a)({},t),{},{user:e.state.user,loggedInStatus:e.state.loggedInStatus}))}}),Object(v.jsx)(k.a,{path:"/create",component:p.a}),Object(v.jsx)(k.a,{path:"/register",component:S}),Object(v.jsx)(k.a,{path:"/login",component:w}),Object(v.jsx)(k.a,{path:"/edit/:id",component:m.a}),Object(v.jsx)(k.a,{path:"/show/:id",component:g.a})]})})})}}]),s}(n.Component);s(70),s(71);c.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(I,{})}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.2f944f4f.chunk.js.map