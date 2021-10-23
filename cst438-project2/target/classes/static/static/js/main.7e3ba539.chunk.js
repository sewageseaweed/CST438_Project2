(this["webpackJsonpcst438-project2"]=this["webpackJsonpcst438-project2"]||[]).push([[0],{33:function(e,t){},34:function(e,t){},35:function(e,t){},42:function(e,t,s){},68:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),r=s(14),c=s.n(r),o=(s(42),s(18)),u=s(8),i=s(9),l=s(16),h=s(11),d=s(10),j=s(33),p=s.n(j),b=s(34),m=s.n(b),O=s(35),g=s.n(O),f=s(12),x=s.n(f),v=s(1),S=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(u.a)(this,s),(n=t.call(this,e)).onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState(t)},n.onSubmit=function(e){e.preventDefault();var t=n.state,s=t.username,a=t.password;t.user;x.a.get("/users/username/"+s).then((function(e){console.log(e.data),n.setState({user:e.data}),s===n.state.user.username&&a===n.state.user.password?(console.log(e.data),n.props.handleSuccessfulAuth(e.data)):console.log("no user found")})).catch((function(e){console.log("Get Users Error",e)}))},n.state={username:"",password:"",user:{}},n}return Object(i.a)(s,[{key:"render",value:function(){return Object(v.jsx)("div",{class:"register-wrapper",children:Object(v.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(v.jsx)("input",{class:"p-3 m-3",type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.onChange,required:!0}),Object(v.jsx)("input",{class:"p-3 m-3",type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.onChange,required:!0}),Object(v.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Login"})]})})}}]),s}(n.Component),w=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(u.a)(this,s),(n=t.call(this,e)).onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState(t)},n.onSubmit=function(e){e.preventDefault();var t=n.state,s=t.username,a=t.password,r=t.password_confirmation,c=t.email;x.a.get("/users/username/"+s).then((function(e){n.setState({user:e.data})})).catch((function(e){console.log("Get Users Error",e)})),a===r&&s!==n.state.user.username&&c!==n.state.user.email?x.a.post("/users/save",{username:s,password:a,email:c},{withCredentials:!0}).then((function(e){x.a.get("/users/username/"+s).then((function(e){console.log(e.data),n.props.handleSuccessfulAuth(e.data)}))})).catch((function(e){console.log("registration error ",e)})):console.log("password does not match password confirmation, username/email already exists")},n.state={username:"",password:"",password_confirmation:"",email:"",user:{}},n}return Object(i.a)(s,[{key:"render",value:function(){return Object(v.jsx)("div",{class:"register-wrapper",children:Object(v.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(v.jsx)("input",{class:"p-3 m-3",type:"email",name:"email",placeholder:"Email",value:this.state.email,onChange:this.onChange,required:!0}),Object(v.jsx)("input",{class:"p-3 m-3",type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.onChange,required:!0}),Object(v.jsx)("input",{class:"p-3 m-3",type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.onChange,required:!0}),Object(v.jsx)("input",{class:"p-3 m-3",type:"password",name:"password_confirmation",placeholder:"Password confirmation",value:this.state.password_confirmation,onChange:this.onChange,required:!0}),Object(v.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Register"})]})})}}]),s}(n.Component),C=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(u.a)(this,s),(n=t.call(this,e)).handleSuccessfulAuth=n.handleSuccessfulAuth.bind(Object(l.a)(n)),n}return Object(i.a)(s,[{key:"handleSuccessfulAuth",value:function(e){this.props.handleLogin(e),console.log("Succesful Login Check: ",e),this.props.history.push("/dashboard")}},{key:"render",value:function(){return Object(v.jsxs)("div",{class:"mt-5",children:[Object(v.jsx)("h1",{children:"Home"}),Object(v.jsxs)("h1",{children:["STATUS: ",this.props.loggedInStatus]}),Object(v.jsx)(w,{handleSuccessfulAuth:this.handleSuccessfulAuth}),Object(v.jsx)(S,{handleSuccessfulAuth:this.handleSuccessfulAuth})]})}}]),s}(n.Component),y=s(15),A=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){return Object(u.a)(this,s),t.call(this,e)}return Object(i.a)(s,[{key:"render",value:function(){return Object(v.jsx)("div",{class:"container",children:Object(v.jsx)("nav",{class:"nav navbar-expand-lg bg-dark fixed-top p-3 text-white",children:Object(v.jsx)(y.b,{to:"/create",children:" Add Item To Wishlist "})})})}}]),s}(n.Component),I=function(e){return Object(v.jsx)("div",{children:Object(v.jsxs)("div",{class:"mt-5",children:[Object(v.jsx)("h1",{children:"Dashboard"}),Object(v.jsxs)("h1",{children:["STATUS: ",e.loggedInStatus]}),Object(v.jsxs)("h1",{children:["Hello: ",e.user.username]})]})})},k=s(2),L=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(u.a)(this,s),(e=t.call(this)).state={loggedInStatus:"NOT_LOGGED_IN",user:{}},e.handleLogin=e.handleLogin.bind(Object(l.a)(e)),e}return Object(i.a)(s,[{key:"handleLogin",value:function(e){this.setState({loggedInStatus:"LOGGED_IN",user:e})}},{key:"render",value:function(){var e=this;return Object(v.jsx)("div",{class:"app",children:Object(v.jsxs)(y.a,{children:[Object(v.jsx)(A,{}),Object(v.jsxs)(k.c,{children:[Object(v.jsx)(k.a,{exact:!0,path:"/",render:function(t){return Object(v.jsx)(C,Object(o.a)(Object(o.a)({},t),{},{handleLogin:e.handleLogin,loggedInStatus:e.state.loggedInStatus}))}}),Object(v.jsx)(k.a,{exact:!0,path:"/dashboard",render:function(t){return Object(v.jsx)(I,Object(o.a)(Object(o.a)({},t),{},{user:e.state.user,loggedInStatus:e.state.loggedInStatus}))}}),Object(v.jsx)(k.a,{path:"/create",component:p.a}),Object(v.jsx)(k.a,{path:"/register",component:w}),Object(v.jsx)(k.a,{path:"/login",component:S}),Object(v.jsx)(k.a,{path:"/edit/:id",component:m.a}),Object(v.jsx)(k.a,{path:"/show/:id",component:g.a})]})]})})}}]),s}(n.Component);s(67);c.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(L,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.7e3ba539.chunk.js.map