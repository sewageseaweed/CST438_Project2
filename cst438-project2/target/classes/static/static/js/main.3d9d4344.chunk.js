(this["webpackJsonpcst438-project2"]=this["webpackJsonpcst438-project2"]||[]).push([[0],{33:function(e,t){},34:function(e,t){},35:function(e,t){},42:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),r=n(15),c=n.n(r),o=(n(42),n(18)),i=n(8),u=n(9),l=n(16),h=n(11),d=n(10),j=n(33),p=n.n(j),b=n(34),m=n.n(b),O=n(35),g=n.n(O),f=n(12),x=n.n(f),v=n(1),w=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).onChange=function(e){var t=s.state;t[e.target.name]=e.target.value,s.setState(t)},s.onSubmit=function(e){e.preventDefault();var t=s.state,n=t.username,a=t.password;t.user;x.a.get("/users/username/"+n).then((function(e){s.setState({user:e.data}),console.log(e.data)})).catch((function(e){console.log("Get Users Error",e)})),n===s.state.user.username&&a===s.state.user.password?console.log("gottem"):console.log("no user found")},s.state={username:"",password:"",user:{}},s}return Object(u.a)(n,[{key:"render",value:function(){return Object(v.jsx)("div",{class:"register-wrapper",children:Object(v.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(v.jsx)("input",{class:"p-3 m-3",type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.onChange,required:!0}),Object(v.jsx)("input",{class:"p-3 m-3",type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.onChange,required:!0}),Object(v.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Login"})]})})}}]),n}(s.Component),S=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).onChange=function(e){var t=s.state;t[e.target.name]=e.target.value,s.setState(t)},s.onSubmit=function(e){e.preventDefault();var t=s.state,n=t.username,a=t.password,r=t.password_confirmation,c=t.email;x.a.get("/users/username/"+n).then((function(e){s.setState({user:e.data})})).catch((function(e){console.log("Get Users Error",e)})),a===r&&n!==s.state.user.username&&c!==s.state.user.email?x.a.post("/users/save",{username:n,password:a,email:c},{withCredentials:!0}).then((function(e){x.a.get("/users/username/"+n).then((function(e){console.log(e.data),s.props.handleSuccessfulAuth(e.data)}))})).catch((function(e){console.log("registration error ",e)})):console.log("password does not match password confirmation, username/email already exists")},s.state={username:"",password:"",password_confirmation:"",email:"",user:{}},s}return Object(u.a)(n,[{key:"render",value:function(){return Object(v.jsx)("div",{class:"register-wrapper",children:Object(v.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(v.jsx)("input",{class:"p-3 m-3",type:"email",name:"email",placeholder:"Email",value:this.state.email,onChange:this.onChange,required:!0}),Object(v.jsx)("input",{class:"p-3 m-3",type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.onChange,required:!0}),Object(v.jsx)("input",{class:"p-3 m-3",type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.onChange,required:!0}),Object(v.jsx)("input",{class:"p-3 m-3",type:"password",name:"password_confirmation",placeholder:"Password confirmation",value:this.state.password_confirmation,onChange:this.onChange,required:!0}),Object(v.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Register"})]})})}}]),n}(s.Component),y=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).handleSuccessfulAuth=s.handleSuccessfulAuth.bind(Object(l.a)(s)),s}return Object(u.a)(n,[{key:"handleSuccessfulAuth",value:function(e){this.props.handleLogin(e),this.props.history.push("/dashboard")}},{key:"render",value:function(){return Object(v.jsxs)("div",{class:"mt-5",children:[Object(v.jsx)("h1",{children:"Home"}),Object(v.jsxs)("h1",{children:["STATUS: ",this.props.loggedInStatus]}),Object(v.jsx)(S,{handleSuccessfulAuth:this.handleSuccessfulAuth}),Object(v.jsx)(w,{})]})}}]),n}(s.Component),C=function(e){return Object(v.jsx)("div",{children:Object(v.jsxs)("div",{class:"mt-5",children:[Object(v.jsx)("h1",{children:"Dashboard"}),Object(v.jsxs)("h1",{children:["STATUS: ",e.loggedInStatus]})]})})},I=n(13),k=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(v.jsx)("div",{class:"container",children:Object(v.jsxs)("nav",{class:"nav navbar-expand-lg bg-dark fixed-top p-3 text-white",children:[Object(v.jsx)(I.b,{to:"/create",children:" Add Wishlist "}),Object(v.jsx)(I.b,{to:"/login",children:" Login "}),Object(v.jsx)(I.b,{to:"/register",children:" Register "})]})})}}]),n}(s.Component),L=k,A=n(2),_=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={loggedInStatus:"NOT_LOGGED_IN",user:{}},e.handleLogin=e.handleLogin.bind(Object(l.a)(e)),e}return Object(u.a)(n,[{key:"handleLogin",value:function(e){this.setState({loggedInStatus:"LOGGED_IN",user:e})}},{key:"render",value:function(){var e=this;return Object(v.jsx)("div",{class:"app",children:Object(v.jsxs)(I.a,{children:[Object(v.jsx)(L,{}),Object(v.jsxs)(A.c,{children:[Object(v.jsx)(A.a,{exact:!0,path:"/",render:function(t){return Object(v.jsx)(y,Object(o.a)(Object(o.a)({},t),{},{handleLogin:e.handleLogin,loggedInStatus:e.state.loggedInStatus}))}}),Object(v.jsx)(A.a,{exact:!0,path:"/dashboard",render:function(t){return Object(v.jsx)(C,Object(o.a)(Object(o.a)({},t),{},{loggedInStatus:e.state.loggedInStatus}))}}),Object(v.jsx)(A.a,{path:"/create",component:p.a}),Object(v.jsx)(A.a,{path:"/register",component:S}),Object(v.jsx)(A.a,{path:"/login",component:w}),Object(v.jsx)(A.a,{path:"/edit/:id",component:m.a}),Object(v.jsx)(A.a,{path:"/show/:id",component:g.a})]})]})})}}]),n}(s.Component);n(67);c.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(_,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.3d9d4344.chunk.js.map