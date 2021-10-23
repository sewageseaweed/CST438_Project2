(this["webpackJsonpcst438-project2"]=this["webpackJsonpcst438-project2"]||[]).push([[0],{36:function(e,t){},43:function(e,t,s){},92:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),c=s(15),r=s.n(c),i=(s(43),s(13)),o=s(4),l=s(5),u=s(16),d=s(7),h=s(6),j=s(8),b=s.n(j),p=s(0),m=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState(t)},n.onSubmit=function(e){e.preventDefault(),console.log(n.props.user.id);var t=n.state,s=t.userId,a=t.itemLink,c=t.itemDesc,r=t.itemPic;console.log(s,a,c,r),b.a.post("/items/save",{userId:s,itemLink:a,itemDesc:c,itemPic:r}).then((function(e){console.log("Save Items result: ",e),n.props.history.push("/dashboard")})).catch((function(e){console.log("addItem error ",e)}))},n.state={userId:n.props.user.id,itemLink:"",itemDesc:"",itemPic:""},n}return Object(l.a)(s,[{key:"render",value:function(){return Object(p.jsx)("div",{class:"register-wrapper",children:Object(p.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(p.jsx)("div",{class:"text-center",children:" Add New Item "}),this.props.user.id,Object(p.jsx)("input",{class:"p-3 m-3",type:"text",name:"itemLink",placeholder:"Link",value:this.state.itemLink,onChange:this.onChange,required:!0}),Object(p.jsx)("input",{class:"p-3 m-3",type:"text",name:"itemDesc",placeholder:"Description",value:this.state.itemDesc,onChange:this.onChange,required:!0}),Object(p.jsx)("input",{class:"p-3 m-3",type:"text",name:"itemPic",placeholder:"Picture Link",value:this.state.itemPic,onChange:this.onChange,required:!0}),Object(p.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Add"})]})})}}]),s}(n.Component),O=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState(t)},n.onSubmit=function(e){e.preventDefault(),console.log(n.props.user.id);var t=n.state,s=t.userId,a=t.itemLink,c=t.itemDesc,r=t.itemPic;console.log(s,a,c,r),b.a.post("/items/save",{userId:s,itemLink:a,itemDesc:c,itemPic:r}).then((function(e){console.log("Save Items result: ",e),n.props.history.push("/dashboard")})).catch((function(e){console.log("addItem error ",e)}))},n.state={userId:n.props.user.id,itemLink:"",itemDesc:"",itemPic:""},n}return Object(l.a)(s,[{key:"render",value:function(){return Object(p.jsxs)("div",{class:"editItem-wrapper",children:["EDIT ITEM",this.props.history.location.state.data]})}}]),s}(n.Component),g=s(36),v=s.n(g),x=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState(t)},n.onSubmit=function(e){e.preventDefault();var t=n.state,s=t.username,a=t.password;t.user;b.a.get("/users/username/"+s).then((function(e){console.log(e.data),n.setState({user:e.data}),s===n.state.user.username&&a===n.state.user.password?(console.log(e.data),n.props.handleSuccessfulAuth(e.data)):console.log("no user found")})).catch((function(e){console.log("Get Users Error",e)}))},n.state={username:"",password:"",user:{}},n}return Object(l.a)(s,[{key:"render",value:function(){return Object(p.jsx)("div",{class:"login-wrapper",children:Object(p.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(p.jsx)("div",{class:"text-center",children:" Login "}),Object(p.jsx)("input",{class:"p-3 m-3",type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.onChange,required:!0}),Object(p.jsx)("input",{class:"p-3 m-3",type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.onChange,required:!0}),Object(p.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Login"})]})})}}]),s}(n.Component),f=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState(t)},n.onSubmit=function(e){e.preventDefault();var t=n.state,s=t.username,a=t.password,c=t.password_confirmation,r=t.email;b.a.get("/users/username/"+s).then((function(e){n.setState({user:e.data})})).catch((function(e){console.log("Get Users Error",e)})),a===c&&s!==n.state.user.username&&r!==n.state.user.email?b.a.post("/users/save",{username:s,password:a,email:r},{withCredentials:!0}).then((function(e){b.a.get("/users/username/"+s).then((function(e){console.log(e.data),n.props.handleSuccessfulAuth(e.data)}))})).catch((function(e){console.log("registration error ",e)})):console.log("password does not match password confirmation, username/email already exists")},n.state={username:"",password:"",password_confirmation:"",email:"",user:{}},n}return Object(l.a)(s,[{key:"render",value:function(){return Object(p.jsx)("div",{class:"register-wrapper",children:Object(p.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(p.jsx)("div",{class:"text-center",children:" Register "}),Object(p.jsx)("input",{class:"p-3 m-3",type:"email",name:"email",placeholder:"Email",value:this.state.email,onChange:this.onChange,required:!0}),Object(p.jsx)("input",{class:"p-3 m-3",type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.onChange,required:!0}),Object(p.jsx)("input",{class:"p-3 m-3",type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.onChange,required:!0}),Object(p.jsx)("input",{class:"p-3 m-3",type:"password",name:"password_confirmation",placeholder:"Password confirmation",value:this.state.password_confirmation,onChange:this.onChange,required:!0}),Object(p.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Register"})]})})}}]),s}(n.Component),w=s(14),y=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){return Object(o.a)(this,s),t.call(this,e)}return Object(l.a)(s,[{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsx)("nav",{class:"nav navbar-expand-lg bg-dark p-3 text-white",children:Object(p.jsx)("div",{class:"container-fluid",children:Object(p.jsxs)("div",{class:"row",children:[Object(p.jsx)("div",{class:"col-1 mr-auto",children:Object(p.jsx)("h1",{children:"Wishy"})}),Object(p.jsxs)("div",{class:"col m-auto",children:[Object(p.jsx)(w.b,{class:"text-decoration-none p-3 link-secondary",to:"/addItem",children:" Add Item "}),Object(p.jsx)(w.b,{class:"text-decoration-none p-3 link-secondary",to:"/addItem",children:" Edit Profile "})]}),Object(p.jsx)("div",{class:"col-1 ml-auto",children:Object(p.jsx)("h4",{class:"text-secondary",children:this.props.user.username})})]})})})})}}]),s}(n.Component),S=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).handleSuccessfulAuth=n.handleSuccessfulAuth.bind(Object(u.a)(n)),n}return Object(l.a)(s,[{key:"handleSuccessfulAuth",value:function(e){this.props.handleLogin(e),console.log("Succesful Login Check: ",e),this.props.history.push("/dashboard")}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("nav",{class:"nav navbar-expand-lg bg-dark p-3 text-white",children:Object(p.jsx)("div",{class:"row",children:Object(p.jsx)("div",{class:"col-1 mr-auto",children:Object(p.jsx)("h1",{children:"Wishy"})})})}),Object(p.jsxs)("div",{class:"row",children:[Object(p.jsx)("div",{class:"col",children:Object(p.jsx)(f,{handleSuccessfulAuth:this.handleSuccessfulAuth})}),Object(p.jsx)("div",{class:"col",children:Object(p.jsx)(x,{handleSuccessfulAuth:this.handleSuccessfulAuth})})]})]})}}]),s}(n.Component),I=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).handleDelete=n.handleDelete.bind(Object(u.a)(n)),n.state={wishList:[]},n}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.user.id),b.a.get("/items/userId/"+this.props.user.id).then((function(t){e.setState({wishList:t.data}),console.log(e.state.wishList)}))}},{key:"handleDelete",value:function(e){var t=this;b.a.delete("/items/delete/item/"+e).then((function(e){console.log(e.data),b.a.get("/items/userId/"+t.props.user.id).then((function(e){t.setState({wishList:e.data})}))})).catch((function(e){console.log("Error: ",e)}))}},{key:"handleEdit",value:function(e){this.props.history.push("/editItem",{data:e})}},{key:"render",value:function(){var e=this;return Object(p.jsx)("div",{class:"viewWishlist-wrapper",children:Object(p.jsxs)("div",{class:"container-fluid text-center p-3 m-3",children:[Object(p.jsx)("h1",{children:"Your Wishlist"}),this.state.wishList.length>0?this.state.wishList.map((function(t){return Object(p.jsxs)("div",{class:"card p-3 m-3 w-50 mx-auto",children:[Object(p.jsx)("img",{class:"card-img-top w-50 h-25",src:t.itemPic}),Object(p.jsxs)("div",{class:"card-body",children:[Object(p.jsx)("h1",{children:t.itemLink}),Object(p.jsx)("h1",{children:t.itemDesc}),Object(p.jsx)("h1",{children:"IDS: "}),Object(p.jsx)("h1",{children:t.id}),Object(p.jsx)("h1",{children:t.userId})]}),Object(p.jsx)("div",{class:"row",children:Object(p.jsxs)("div",{class:"col",children:[Object(p.jsx)("button",{class:"btn btn-danger",onClick:function(){return e.handleDelete(t.id)},children:"DELETE"}),Object(p.jsx)("button",{class:"btn btn-secondary",onClick:function(){return e.handleEdit(t.id)},children:"EDIT"})]})})]})})):Object(p.jsx)("h5",{children:"No items added yet"})]})})}}]),s}(n.Component),C=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){return Object(o.a)(this,s),t.call(this,e)}return Object(l.a)(s,[{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{class:!0,children:[Object(p.jsx)(y,Object(i.a)({},this.props)),Object(p.jsx)(I,Object(i.a)({},this.props))]})})}}]),s}(n.Component),k=s(2),L=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).state={loggedInStatus:"NOT_LOGGED_IN",user:{}},e.handleLogin=e.handleLogin.bind(Object(u.a)(e)),e}return Object(l.a)(s,[{key:"handleLogin",value:function(e){this.setState({loggedInStatus:"LOGGED_IN",user:e})}},{key:"render",value:function(){var e=this;return Object(p.jsx)("div",{class:"app",children:Object(p.jsx)(w.a,{children:Object(p.jsxs)(k.c,{children:[Object(p.jsx)(k.a,{exact:!0,path:"/",render:function(t){return Object(p.jsx)(S,Object(i.a)(Object(i.a)({},t),{},{handleLogin:e.handleLogin,loggedInStatus:e.state.loggedInStatus}))}}),Object(p.jsx)(k.a,{exact:!0,path:"/dashboard",render:function(t){return Object(p.jsx)(C,Object(i.a)(Object(i.a)({},t),{},{retrieveWishlist:e.retrieveWishlist,user:e.state.user,loggedInStatus:e.state.loggedInStatus}))}}),Object(p.jsx)(k.a,{exact:!0,path:"/addItem",render:function(t){return Object(p.jsx)(m,Object(i.a)(Object(i.a)({},t),{},{user:e.state.user,loggedInStatus:e.state.loggedInStatus}))}}),Object(p.jsx)(k.a,{exact:!0,path:"/editItem",render:function(t){return Object(p.jsx)(O,Object(i.a)(Object(i.a)({},t),{},{user:e.state.user,loggedInStatus:e.state.loggedInStatus}))}}),Object(p.jsx)(k.a,{path:"/register",component:f}),Object(p.jsx)(k.a,{path:"/login",component:x}),Object(p.jsx)(k.a,{path:"/show/:id",component:v.a})]})})})}}]),s}(n.Component);s(68),s(69);r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(L,{})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.4edbf2bf.chunk.js.map