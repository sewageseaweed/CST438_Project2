(this["webpackJsonpcst438-project2"]=this["webpackJsonpcst438-project2"]||[]).push([[0],{31:function(e,t){},32:function(e,t){},33:function(e,t){},40:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(14),c=n.n(r),o=(n(40),n(8)),i=n(9),u=n(11),p=n(10),l=n(31),j=n.n(l),h=n(32),d=n.n(h),m=n(33),b=n.n(m),O=n(15),g=n.n(O),f=n(1),x=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onChange=function(t){var n=e.state;n[t.target.name]=t.target.value,e.setState(n)},e.onSubmit=function(t){t.preventDefault();var n=e.state,a=n.username,s=n.password;n.user;g.a.get("/users/username/"+a).then((function(t){e.setState({user:t.data}),console.log(t.data)})).catch((function(e){console.log("Get Users Error",e)})),a===e.user.username&&s===e.user.password&&console.log("gottem")},e.state={username:"",password:"",user:{}},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{class:"register-wrapper",children:Object(f.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(f.jsx)("input",{class:"p-3 m-3",type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.onChange,required:!0}),Object(f.jsx)("input",{class:"p-3 m-3",type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.onChange,required:!0}),Object(f.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Login"})]})})}}]),n}(a.Component),v=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Home"}),Object(f.jsx)("h1",{children:"Home"})]})}}]),n}(a.Component),w=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onChange=function(t){var n=e.state;n[t.target.name]=t.target.value,e.setState(n)},e.onSubmit=function(t){t.preventDefault();var n=e.state,a=n.username,s=n.password,r=n.password_confirmation,c=n.email;s===r&&g.a.post("/users/save",{username:a,password:s,email:c},{withCredentials:!0}).then((function(t){e.props.history.push("/")})).catch((function(e){console.log("registration error ",e)}))},e.state={username:"",password:"",password_confirmation:"",email:"",userData:[]},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{class:"register-wrapper",children:Object(f.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(f.jsx)("input",{class:"p-3 m-3",type:"email",name:"email",placeholder:"Email",value:this.state.email,onChange:this.onChange,required:!0}),Object(f.jsx)("input",{class:"p-3 m-3",type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.onChange,required:!0}),Object(f.jsx)("input",{class:"p-3 m-3",type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.onChange,required:!0}),Object(f.jsx)("input",{class:"p-3 m-3",type:"password",name:"password_confirmation",placeholder:"Password confirmation",value:this.state.password_confirmation,onChange:this.onChange,required:!0}),Object(f.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Register"})]})})}}]),n}(a.Component),C=n(12),y=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{class:"container",children:Object(f.jsxs)("nav",{class:"nav navbar-expand-lg bg-dark fixed-top p-3 text-white",children:[Object(f.jsx)(C.b,{to:"/create",children:" Add Wishlist "}),Object(f.jsx)(C.b,{to:"/login",children:" Login "}),Object(f.jsx)(C.b,{to:"/register",children:" Register "})]})})}}]),n}(a.Component),S=y,k=n(2),q=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={loggedInStatus:"NOTLOGGEDIN",user:{}},a}return Object(i.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{class:"app",children:Object(f.jsxs)(C.a,{children:[Object(f.jsx)(S,{}),Object(f.jsxs)(k.c,{children:[Object(f.jsx)(k.a,{exact:!0,path:"/",component:v}),Object(f.jsx)(k.a,{path:"/create",component:j.a}),Object(f.jsx)(k.a,{path:"/register",component:w}),Object(f.jsx)(k.a,{path:"/login",component:x}),Object(f.jsx)(k.a,{path:"/edit/:id",component:d.a}),Object(f.jsx)(k.a,{path:"/show/:id",component:b.a})]})]})})}}]),n}(a.Component);n(65);c.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(q,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.572746a1.chunk.js.map