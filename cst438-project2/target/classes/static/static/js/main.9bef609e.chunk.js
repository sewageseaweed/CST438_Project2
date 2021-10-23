(this["webpackJsonpcst438-project2"]=this["webpackJsonpcst438-project2"]||[]).push([[0],{36:function(e,t){},37:function(e,t){},44:function(e,t,s){},93:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),r=s(14),c=s.n(r),i=(s(44),s(13)),o=s(4),u=s(5),l=s(17),h=s(7),d=s(6),j=s(12),p=s.n(j),b=s(0),m=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState(t)},n.onSubmit=function(e){e.preventDefault();var t=n.state,s=t.itemLink,a=t.itemDesc,r=t.itemPicture,c=n.props.user.id.userId;p.a.post("/items/save",{userId:c,itemLink:s,itemDesc:a,itemPicture:r}).then((function(e){console.log("Save Items result: ",e),n.props.history.push("/dashboard")})).catch((function(e){console.log("addItem error ",e)}))},n.state={itemLink:"",itemDesc:"",itemPicture:""},n}return Object(u.a)(s,[{key:"render",value:function(){return Object(b.jsx)("div",{class:"register-wrapper",children:Object(b.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(b.jsx)("div",{class:"text-center",children:" Register "}),Object(b.jsx)("input",{class:"p-3 m-3",type:"text",name:"itemLink",placeholder:"Link",value:this.state.itemLink,onChange:this.onChange,required:!0}),Object(b.jsx)("input",{class:"p-3 m-3",type:"text",name:"itemDesc",placeholder:"Description",value:this.state.itemDesc,onChange:this.onChange,required:!0}),Object(b.jsx)("input",{class:"p-3 m-3",type:"text",name:"itemPicture",placeholder:"Picture Link",value:this.state.itemPicture,onChange:this.onChange,required:!0}),Object(b.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Register"})]})})}}]),s}(n.Component),O=s(36),g=s.n(O),x=s(37),f=s.n(x),v=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState(t)},n.onSubmit=function(e){e.preventDefault();var t=n.state,s=t.username,a=t.password;t.user;p.a.get("/users/username/"+s).then((function(e){console.log(e.data),n.setState({user:e.data}),s===n.state.user.username&&a===n.state.user.password?(console.log(e.data),n.props.handleSuccessfulAuth(e.data)):console.log("no user found")})).catch((function(e){console.log("Get Users Error",e)}))},n.state={username:"",password:"",user:{}},n}return Object(u.a)(s,[{key:"render",value:function(){return Object(b.jsx)("div",{class:"login-wrapper",children:Object(b.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(b.jsx)("div",{class:"text-center",children:" Login "}),Object(b.jsx)("input",{class:"p-3 m-3",type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.onChange,required:!0}),Object(b.jsx)("input",{class:"p-3 m-3",type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.onChange,required:!0}),Object(b.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Login"})]})})}}]),s}(n.Component),w=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState(t)},n.onSubmit=function(e){e.preventDefault();var t=n.state,s=t.username,a=t.password,r=t.password_confirmation,c=t.email;p.a.get("/users/username/"+s).then((function(e){n.setState({user:e.data})})).catch((function(e){console.log("Get Users Error",e)})),a===r&&s!==n.state.user.username&&c!==n.state.user.email?p.a.post("/users/save",{username:s,password:a,email:c},{withCredentials:!0}).then((function(e){p.a.get("/users/username/"+s).then((function(e){console.log(e.data),n.props.handleSuccessfulAuth(e.data)}))})).catch((function(e){console.log("registration error ",e)})):console.log("password does not match password confirmation, username/email already exists")},n.state={username:"",password:"",password_confirmation:"",email:"",user:{}},n}return Object(u.a)(s,[{key:"render",value:function(){return Object(b.jsx)("div",{class:"register-wrapper",children:Object(b.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(b.jsx)("div",{class:"text-center",children:" Register "}),Object(b.jsx)("input",{class:"p-3 m-3",type:"email",name:"email",placeholder:"Email",value:this.state.email,onChange:this.onChange,required:!0}),Object(b.jsx)("input",{class:"p-3 m-3",type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.onChange,required:!0}),Object(b.jsx)("input",{class:"p-3 m-3",type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.onChange,required:!0}),Object(b.jsx)("input",{class:"p-3 m-3",type:"password",name:"password_confirmation",placeholder:"Password confirmation",value:this.state.password_confirmation,onChange:this.onChange,required:!0}),Object(b.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Register"})]})})}}]),s}(n.Component),S=s(15),y=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){return Object(o.a)(this,s),t.call(this,e)}return Object(u.a)(s,[{key:"render",value:function(){return Object(b.jsx)("div",{class:"container",children:Object(b.jsxs)("nav",{class:"nav navbar-expand-lg bg-dark fixed-top p-3 text-white",children:[Object(b.jsx)("h1",{children:"WishLists"}),Object(b.jsxs)("h1",{children:["STATUS: ",this.props.user.username]}),Object(b.jsx)(S.b,{to:"/addItem",children:" Add Item To Wishlist "})]})})}}]),s}(n.Component),C=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).handleSuccessfulAuth=n.handleSuccessfulAuth.bind(Object(l.a)(n)),n}return Object(u.a)(s,[{key:"handleSuccessfulAuth",value:function(e){this.props.handleLogin(e),console.log("Succesful Login Check: ",e),this.props.history.push("/dashboard")}},{key:"render",value:function(){return Object(b.jsx)("div",{class:"mt-5",children:Object(b.jsxs)("div",{class:"row",children:[Object(b.jsx)("div",{class:"col",children:Object(b.jsx)(w,{handleSuccessfulAuth:this.handleSuccessfulAuth})}),Object(b.jsx)("div",{class:"col",children:Object(b.jsx)(v,{handleSuccessfulAuth:this.handleSuccessfulAuth})})]})})}}]),s}(n.Component),L=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={wishList:[]},n}return Object(u.a)(s,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.user.id),p.a.get("items/userId/"+this.props.user.id).then((function(t){e.setState({wishList:t.data}),console.log(e.state.wishList)}))}},{key:"render",value:function(){return Object(b.jsxs)("div",{class:"container p-3 m-3",children:[Object(b.jsx)("h1",{children:"WISHLIST ITEMS"}),Object(b.jsx)("div",{class:"wishlist-container",children:this.state.wishList.length>0?this.state.wishList.map((function(e){return Object(b.jsxs)("div",{class:"card p-3 m-3 w-50",children:[Object(b.jsx)("h1",{children:e.id}),Object(b.jsx)("h1",{children:e.userId}),Object(b.jsx)("h1",{children:e.itemLink}),Object(b.jsx)("h1",{children:e.itemDesc}),Object(b.jsx)("h1",{children:e.itemPic})]})})):Object(b.jsx)("h1",{children:"No items added yet"})})]})}}]),s}(n.Component),I=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){return Object(o.a)(this,s),t.call(this,e)}return Object(u.a)(s,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{class:"mt-5",children:[Object(b.jsx)(y,Object(i.a)({},this.props)),Object(b.jsx)("h1",{children:"Dashboard"}),Object(b.jsxs)("h1",{children:["STATUS: ",this.props.loggedInStatus]}),Object(b.jsxs)("h1",{children:["Hello: ",this.props.user.username]}),Object(b.jsx)(L,Object(i.a)({},this.props))]})})}}]),s}(n.Component),k=s(2),D=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).state={loggedInStatus:"NOT_LOGGED_IN",user:{}},e.handleLogin=e.handleLogin.bind(Object(l.a)(e)),e}return Object(u.a)(s,[{key:"handleLogin",value:function(e){this.setState({loggedInStatus:"LOGGED_IN",user:e})}},{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{class:"app",children:Object(b.jsx)(S.a,{children:Object(b.jsxs)(k.c,{children:[Object(b.jsx)(k.a,{exact:!0,path:"/",render:function(t){return Object(b.jsx)(C,Object(i.a)(Object(i.a)({},t),{},{handleLogin:e.handleLogin,loggedInStatus:e.state.loggedInStatus}))}}),Object(b.jsx)(k.a,{exact:!0,path:"/dashboard",render:function(t){return Object(b.jsx)(I,Object(i.a)(Object(i.a)({},t),{},{retrieveWishlist:e.retrieveWishlist,user:e.state.user,loggedInStatus:e.state.loggedInStatus}))}}),Object(b.jsx)(k.a,{exact:!0,path:"/addItem",render:function(t){return Object(b.jsx)(m,Object(i.a)(Object(i.a)({},t),{},{user:e.state.user,loggedInStatus:e.state.loggedInStatus}))}}),Object(b.jsx)(k.a,{path:"/register",component:w}),Object(b.jsx)(k.a,{path:"/login",component:v}),Object(b.jsx)(k.a,{path:"/edit/:id",component:g.a}),Object(b.jsx)(k.a,{path:"/show/:id",component:f.a})]})})})}}]),s}(n.Component);s(69),s(70);c.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(D,{})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.9bef609e.chunk.js.map