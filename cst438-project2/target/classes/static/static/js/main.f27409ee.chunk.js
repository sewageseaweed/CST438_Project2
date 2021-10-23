(this["webpackJsonpcst438-project2"]=this["webpackJsonpcst438-project2"]||[]).push([[0],{36:function(e,t){},37:function(e,t){},44:function(e,t,s){},93:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),r=s(14),c=s.n(r),i=(s(44),s(13)),o=s(4),u=s(5),l=s(17),h=s(7),d=s(6),j=s(12),b=s.n(j),p=s(0),O=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState(t)},n}return Object(u.a)(s,[{key:"render",value:function(){return Object(p.jsxs)("div",{class:"container",children:[Object(p.jsx)("h1",{children:"addItem"}),Object(p.jsxs)("h1",{children:["STATUS: ",this.props.loggedInStatus]})]})}}]),s}(n.Component),m=s(36),g=s.n(m),f=s(37),x=s.n(f),v=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState(t)},n.onSubmit=function(e){e.preventDefault();var t=n.state,s=t.username,a=t.password;t.user;b.a.get("/users/username/"+s).then((function(e){console.log(e.data),n.setState({user:e.data}),s===n.state.user.username&&a===n.state.user.password?(console.log(e.data),n.props.handleSuccessfulAuth(e.data)):console.log("no user found")})).catch((function(e){console.log("Get Users Error",e)}))},n.state={username:"",password:"",user:{}},n}return Object(u.a)(s,[{key:"render",value:function(){return Object(p.jsx)("div",{class:"login-wrapper",children:Object(p.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(p.jsx)("div",{class:"text-center",children:" Login "}),Object(p.jsx)("input",{class:"p-3 m-3",type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.onChange,required:!0}),Object(p.jsx)("input",{class:"p-3 m-3",type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.onChange,required:!0}),Object(p.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Login"})]})})}}]),s}(n.Component),S=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState(t)},n.onSubmit=function(e){e.preventDefault();var t=n.state,s=t.username,a=t.password,r=t.password_confirmation,c=t.email;b.a.get("/users/username/"+s).then((function(e){n.setState({user:e.data})})).catch((function(e){console.log("Get Users Error",e)})),a===r&&s!==n.state.user.username&&c!==n.state.user.email?b.a.post("/users/save",{username:s,password:a,email:c},{withCredentials:!0}).then((function(e){b.a.get("/users/username/"+s).then((function(e){console.log(e.data),n.props.handleSuccessfulAuth(e.data)}))})).catch((function(e){console.log("registration error ",e)})):console.log("password does not match password confirmation, username/email already exists")},n.state={username:"",password:"",password_confirmation:"",email:"",user:{}},n}return Object(u.a)(s,[{key:"render",value:function(){return Object(p.jsx)("div",{class:"register-wrapper",children:Object(p.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(p.jsx)("div",{class:"text-center",children:" Register "}),Object(p.jsx)("input",{class:"p-3 m-3",type:"email",name:"email",placeholder:"Email",value:this.state.email,onChange:this.onChange,required:!0}),Object(p.jsx)("input",{class:"p-3 m-3",type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.onChange,required:!0}),Object(p.jsx)("input",{class:"p-3 m-3",type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.onChange,required:!0}),Object(p.jsx)("input",{class:"p-3 m-3",type:"password",name:"password_confirmation",placeholder:"Password confirmation",value:this.state.password_confirmation,onChange:this.onChange,required:!0}),Object(p.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Register"})]})})}}]),s}(n.Component),w=s(15),C=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){return Object(o.a)(this,s),t.call(this,e)}return Object(u.a)(s,[{key:"render",value:function(){return Object(p.jsx)("div",{class:"container",children:Object(p.jsxs)("nav",{class:"nav navbar-expand-lg bg-dark fixed-top p-3 text-white",children:[Object(p.jsx)("h1",{children:"WishLists"}),Object(p.jsxs)("h1",{children:["STATUS: ",this.props.user.username]}),Object(p.jsx)(w.b,{to:"/addItem",children:" Add Item To Wishlist "})]})})}}]),s}(n.Component),y=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).handleSuccessfulAuth=n.handleSuccessfulAuth.bind(Object(l.a)(n)),n}return Object(u.a)(s,[{key:"handleSuccessfulAuth",value:function(e){this.props.handleLogin(e),console.log("Succesful Login Check: ",e),this.props.history.push("/dashboard")}},{key:"render",value:function(){return Object(p.jsx)("div",{class:"mt-5",children:Object(p.jsxs)("div",{class:"row",children:[Object(p.jsx)("div",{class:"col",children:Object(p.jsx)(S,{handleSuccessfulAuth:this.handleSuccessfulAuth})}),Object(p.jsx)("div",{class:"col",children:Object(p.jsx)(v,{handleSuccessfulAuth:this.handleSuccessfulAuth})})]})})}}]),s}(n.Component),I=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={wishList:[]},n}return Object(u.a)(s,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.user.id),b.a.get("items/allItems").then((function(t){e.setState({wishList:t.data}),console.log(e.state.wishList)}))}},{key:"render",value:function(){return Object(p.jsxs)("div",{class:"container p-3 m-3",children:[Object(p.jsx)("h1",{children:"WISHLIST ITEMS"}),Object(p.jsx)("div",{class:"wishlist-container",children:this.state.wishList.map((function(e){return Object(p.jsxs)("div",{class:"card p-3 m-3 w-50",children:[Object(p.jsx)("h1",{children:e.id}),Object(p.jsx)("h1",{children:e.userId}),Object(p.jsx)("h1",{children:e.itemLink}),Object(p.jsx)("h1",{children:e.itemDesc}),Object(p.jsx)("h1",{children:e.itemPic})]})}))})]})}}]),s}(n.Component),L=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){return Object(o.a)(this,s),t.call(this,e)}return Object(u.a)(s,[{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{class:"mt-5",children:[Object(p.jsx)(C,Object(i.a)({},this.props)),Object(p.jsx)("h1",{children:"Dashboard"}),Object(p.jsxs)("h1",{children:["STATUS: ",this.props.loggedInStatus]}),Object(p.jsxs)("h1",{children:["Hello: ",this.props.user.username]}),Object(p.jsx)(I,Object(i.a)({},this.props))]})})}}]),s}(n.Component),k=s(2),A=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).state={loggedInStatus:"NOT_LOGGED_IN",user:{}},e.handleLogin=e.handleLogin.bind(Object(l.a)(e)),e}return Object(u.a)(s,[{key:"handleLogin",value:function(e){this.setState({loggedInStatus:"LOGGED_IN",user:e})}},{key:"render",value:function(){var e=this;return Object(p.jsx)("div",{class:"app",children:Object(p.jsx)(w.a,{children:Object(p.jsxs)(k.c,{children:[Object(p.jsx)(k.a,{exact:!0,path:"/",render:function(t){return Object(p.jsx)(y,Object(i.a)(Object(i.a)({},t),{},{handleLogin:e.handleLogin,loggedInStatus:e.state.loggedInStatus}))}}),Object(p.jsx)(k.a,{exact:!0,path:"/dashboard",render:function(t){return Object(p.jsx)(L,Object(i.a)(Object(i.a)({},t),{},{retrieveWishlist:e.retrieveWishlist,user:e.state.user,loggedInStatus:e.state.loggedInStatus}))}}),Object(p.jsx)(k.a,{exact:!0,path:"/addItem",render:function(t){return Object(p.jsx)(O,Object(i.a)(Object(i.a)({},t),{},{user:e.state.user,loggedInStatus:e.state.loggedInStatus}))}}),Object(p.jsx)(k.a,{path:"/register",component:S}),Object(p.jsx)(k.a,{path:"/login",component:v}),Object(p.jsx)(k.a,{path:"/edit/:id",component:g.a}),Object(p.jsx)(k.a,{path:"/show/:id",component:x.a})]})})})}}]),s}(n.Component);s(69),s(70);c.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(A,{})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.f27409ee.chunk.js.map