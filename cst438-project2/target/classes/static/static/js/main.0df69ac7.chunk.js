(this["webpackJsonpcst438-project2"]=this["webpackJsonpcst438-project2"]||[]).push([[0],{33:function(e,t){},34:function(e,t){},35:function(e,t){},42:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(14),c=a.n(r),o=(a(42),a(18)),i=a(8),u=a(9),l=a(16),h=a(11),d=a(10),j=a(33),p=a.n(j),b=a(34),m=a.n(b),O=a(35),g=a.n(O),f=a(12),x=a.n(f),v=a(1),w=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).onChange=function(e){var t=s.state;t[e.target.name]=e.target.value,s.setState(t)},s.onSubmit=function(e){e.preventDefault();var t=s.state,a=t.username,n=t.password;t.user;x.a.get("/users/username/"+a).then((function(e){console.log(e.data),s.setState({user:e.data}),a===s.state.user.username&&n===s.state.user.password?(console.log(e.data),s.props.handleSuccessfulAuth(e.data)):console.log("no user found")})).catch((function(e){console.log("Get Users Error",e)}))},s.state={username:"",password:"",user:{}},s}return Object(u.a)(a,[{key:"render",value:function(){return Object(v.jsx)("div",{class:"register-wrapper",children:Object(v.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(v.jsx)("input",{class:"p-3 m-3",type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.onChange,required:!0}),Object(v.jsx)("input",{class:"p-3 m-3",type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.onChange,required:!0}),Object(v.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Login"})]})})}}]),a}(s.Component),S=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).onChange=function(e){var t=s.state;t[e.target.name]=e.target.value,s.setState(t)},s.onSubmit=function(e){e.preventDefault();var t=s.state,a=t.username,n=t.password,r=t.password_confirmation,c=t.email;x.a.get("/users/username/"+a).then((function(e){s.setState({user:e.data})})).catch((function(e){console.log("Get Users Error",e)})),n===r&&a!==s.state.user.username&&c!==s.state.user.email?x.a.post("/users/save",{username:a,password:n,email:c},{withCredentials:!0}).then((function(e){x.a.get("/users/username/"+a).then((function(e){console.log(e.data),s.props.handleSuccessfulAuth(e.data)}))})).catch((function(e){console.log("registration error ",e)})):console.log("password does not match password confirmation, username/email already exists")},s.state={username:"",password:"",password_confirmation:"",email:"",user:{}},s}return Object(u.a)(a,[{key:"render",value:function(){return Object(v.jsx)("div",{class:"register-wrapper",children:Object(v.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(v.jsx)("input",{class:"p-3 m-3",type:"email",name:"email",placeholder:"Email",value:this.state.email,onChange:this.onChange,required:!0}),Object(v.jsx)("input",{class:"p-3 m-3",type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.onChange,required:!0}),Object(v.jsx)("input",{class:"p-3 m-3",type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.onChange,required:!0}),Object(v.jsx)("input",{class:"p-3 m-3",type:"password",name:"password_confirmation",placeholder:"Password confirmation",value:this.state.password_confirmation,onChange:this.onChange,required:!0}),Object(v.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Register"})]})})}}]),a}(s.Component),y=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).handleSuccessfulAuth=s.handleSuccessfulAuth.bind(Object(l.a)(s)),s}return Object(u.a)(a,[{key:"handleSuccessfulAuth",value:function(e){this.props.handleLogin(e),this.props.history.push("/dashboard")}},{key:"render",value:function(){return Object(v.jsxs)("div",{class:"mt-5",children:[Object(v.jsx)("h1",{children:"Home"}),Object(v.jsxs)("h1",{children:["STATUS: ",this.props.loggedInStatus]}),Object(v.jsx)(S,{handleSuccessfulAuth:this.handleSuccessfulAuth}),Object(v.jsx)(w,{handleSuccessfulAuth:this.handleSuccessfulAuth})]})}}]),a}(s.Component),C=function(e){return Object(v.jsx)("div",{children:Object(v.jsxs)("div",{class:"mt-5",children:[Object(v.jsx)("h1",{children:"Dashboard"}),Object(v.jsxs)("h1",{children:["STATUS: ",e.loggedInStatus]})]})})},A=a(15),I=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(v.jsx)("div",{class:"container",children:Object(v.jsx)("nav",{class:"nav navbar-expand-lg bg-dark fixed-top p-3 text-white",children:Object(v.jsx)(A.b,{to:"/create",children:" Add Wishlist "})})})}}]),a}(s.Component),k=I,L=a(2),_=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={loggedInStatus:"NOT_LOGGED_IN",user:{}},e.handleLogin=e.handleLogin.bind(Object(l.a)(e)),e}return Object(u.a)(a,[{key:"handleLogin",value:function(e){this.setState({loggedInStatus:"LOGGED_IN",user:e})}},{key:"render",value:function(){var e=this;return Object(v.jsx)("div",{class:"app",children:Object(v.jsxs)(A.a,{children:[Object(v.jsx)(k,{}),Object(v.jsxs)(L.c,{children:[Object(v.jsx)(L.a,{exact:!0,path:"/",render:function(t){return Object(v.jsx)(y,Object(o.a)(Object(o.a)({},t),{},{handleLogin:e.handleLogin,loggedInStatus:e.state.loggedInStatus}))}}),Object(v.jsx)(L.a,{exact:!0,path:"/dashboard",render:function(t){return Object(v.jsx)(C,Object(o.a)(Object(o.a)({},t),{},{loggedInStatus:e.state.loggedInStatus}))}}),Object(v.jsx)(L.a,{path:"/create",component:p.a}),Object(v.jsx)(L.a,{path:"/register",component:S}),Object(v.jsx)(L.a,{path:"/login",component:w}),Object(v.jsx)(L.a,{path:"/edit/:id",component:m.a}),Object(v.jsx)(L.a,{path:"/show/:id",component:g.a})]})]})})}}]),a}(s.Component);a(67);c.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(_,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.0df69ac7.chunk.js.map