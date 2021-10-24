(this["webpackJsonpcst438-project2"]=this["webpackJsonpcst438-project2"]||[]).push([[0],{36:function(e,t){},43:function(e,t,s){},92:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),r=s(16),i=s.n(r),c=(s(43),s(9)),o=s(3),l=s(4),u=s(15),d=s(6),h=s(5),j=s(2),p=s.n(j),m=s(0),b=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState(t)},n.onSubmit=function(e){e.preventDefault(),console.log(n.props.user.id);var t=n.state,s=t.userId,a=t.itemLink,r=t.itemDesc,i=t.itemPic;console.log(s,a,r,i),p.a.post("/items/save",{userId:s,itemLink:a,itemDesc:r,itemPic:i}).then((function(e){console.log("Save Items result: ",e),n.props.history.push("/dashboard")})).catch((function(e){console.log("addItem error ",e)}))},n.state={userId:n.props.user.id,itemLink:"",itemDesc:"",itemPic:""},n}return Object(l.a)(s,[{key:"render",value:function(){return Object(m.jsx)("div",{class:"register-wrapper",children:Object(m.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(m.jsx)("div",{class:"text-center",children:" Add New Item "}),Object(m.jsx)("input",{class:"p-3 m-3",type:"text",name:"itemLink",placeholder:"Link",value:this.state.itemLink,onChange:this.onChange,required:!0}),Object(m.jsx)("input",{class:"p-3 m-3",type:"text",name:"itemDesc",placeholder:"Description",value:this.state.itemDesc,onChange:this.onChange,required:!0}),Object(m.jsx)("input",{class:"p-3 m-3",type:"text",name:"itemPic",placeholder:"Picture Link",value:this.state.itemPic,onChange:this.onChange,required:!0}),Object(m.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Add"})]})})}}]),s}(n.Component),O=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState(t)},n.onSubmit=function(e){e.preventDefault(),console.log(n.props.user.id);var t=n.state,s=t.id,a=t.userId,r=t.itemLink,i=t.itemDesc,c=t.itemPic;console.log(s,a,r,i,c),p.a.post("/items/save",{id:s,userId:a,itemLink:r,itemDesc:i,itemPic:c}).then((function(e){console.log("Save Items result: ",e),n.props.history.push("/dashboard")})).catch((function(e){console.log("addItem error ",e)}))},n.state={id:n.props.history.location.state.data,userId:n.props.user.id,itemLink:"",itemDesc:"",itemPic:""},n}return Object(l.a)(s,[{key:"render",value:function(){return Object(m.jsx)("div",{class:"editItem-wrapper",children:Object(m.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(m.jsx)("div",{class:"text-center",children:" Edit Item "}),Object(m.jsx)("input",{class:"p-3 m-3",type:"text",name:"itemLink",placeholder:"Link",value:this.state.itemLink,onChange:this.onChange,required:!0}),Object(m.jsx)("input",{class:"p-3 m-3",type:"text",name:"itemDesc",placeholder:"Description",value:this.state.itemDesc,onChange:this.onChange,required:!0}),Object(m.jsx)("input",{class:"p-3 m-3",type:"text",name:"itemPic",placeholder:"Picture Link",value:this.state.itemPic,onChange:this.onChange,required:!0}),Object(m.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Save Changes"})]})})}}]),s}(n.Component),g=s(36),x=s.n(g),v=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState(t)},n.onSubmit=function(e){e.preventDefault();var t=n.state,s=t.username,a=t.password;t.user;p.a.get("/users/username/"+s).then((function(e){console.log(e.data),n.setState({user:e.data}),s===n.state.user.username&&a===n.state.user.password?(console.log(e.data),n.props.handleSuccessfulAuth(e.data)):console.log("no user found")})).catch((function(e){console.log("Get Users Error",e)}))},n.state={username:"",password:"",user:{}},n}return Object(l.a)(s,[{key:"render",value:function(){return Object(m.jsx)("div",{class:"login-wrapper",children:Object(m.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(m.jsx)("div",{class:"text-center",children:" Login "}),Object(m.jsx)("input",{class:"p-3 m-3",type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.onChange,required:!0}),Object(m.jsx)("input",{class:"p-3 m-3",type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.onChange,required:!0}),Object(m.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Login"})]})})}}]),s}(n.Component),f=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState(t)},n.onSubmit=function(e){e.preventDefault();var t=n.state,s=t.username,a=t.password,r=t.password_confirmation,i=t.email;p.a.get("/users/username/"+s).then((function(e){n.setState({user:e.data})})).catch((function(e){console.log("Get Users Error",e)})),a===r&&s!==n.state.user.username&&i!==n.state.user.email?p.a.post("/users/save",{username:s,password:a,email:i},{withCredentials:!0}).then((function(e){p.a.get("/users/username/"+s).then((function(e){console.log(e.data),n.props.handleSuccessfulAuth(e.data)}))})).catch((function(e){console.log("registration error ",e)})):console.log("password does not match password confirmation, username/email already exists")},n.state={username:"",password:"",password_confirmation:"",email:"",user:{}},n}return Object(l.a)(s,[{key:"render",value:function(){return Object(m.jsx)("div",{class:"register-wrapper",children:Object(m.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(m.jsx)("div",{class:"text-center",children:" Register "}),Object(m.jsx)("input",{class:"p-3 m-3",type:"email",name:"email",placeholder:"Email",value:this.state.email,onChange:this.onChange,required:!0}),Object(m.jsx)("input",{class:"p-3 m-3",type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.onChange,required:!0}),Object(m.jsx)("input",{class:"p-3 m-3",type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.onChange,required:!0}),Object(m.jsx)("input",{class:"p-3 m-3",type:"password",name:"password_confirmation",placeholder:"Password confirmation",value:this.state.password_confirmation,onChange:this.onChange,required:!0}),Object(m.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Register"})]})})}}]),s}(n.Component),w=s(10),y=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){return Object(o.a)(this,s),t.call(this,e)}return Object(l.a)(s,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsx)("nav",{class:"nav navbar-expand-lg bg-dark p-3 text-white",children:Object(m.jsx)("div",{class:"container-fluid",children:Object(m.jsxs)("div",{class:"row",children:[Object(m.jsx)("div",{class:"col-1 mr-auto",children:Object(m.jsx)("h1",{children:"Wishy"})}),Object(m.jsx)("div",{class:"col m-auto",children:"admin"===this.props.user.username?Object(m.jsxs)(n.Fragment,{children:[Object(m.jsx)(w.b,{class:"text-decoration-none p-3 link-secondary",to:"/adminAddItem",children:" Add Item "}),Object(m.jsx)(w.b,{class:"text-decoration-none p-3 link-secondary",to:"/adminAddProfile",children:" Add Profile "})]}):Object(m.jsxs)(n.Fragment,{children:[Object(m.jsx)(w.b,{class:"text-decoration-none p-3 link-secondary",to:"/addItem",children:" Add Item "}),Object(m.jsx)(w.b,{class:"text-decoration-none p-3 link-secondary",to:"/editProfile",children:" Edit Profile "})]})}),Object(m.jsx)("div",{class:"col-1 ml-auto",children:Object(m.jsx)("h4",{class:"text-secondary",children:this.props.user.username})})]})})})})}}]),s}(n.Component),S=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).handleSuccessfulAuth=n.handleSuccessfulAuth.bind(Object(u.a)(n)),n}return Object(l.a)(s,[{key:"handleSuccessfulAuth",value:function(e){this.props.handleLogin(e),console.log("Succesful Login Check: ",e),this.props.history.push("/dashboard")}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("nav",{class:"nav navbar-expand-lg bg-dark p-3 text-white",children:Object(m.jsx)("div",{class:"row",children:Object(m.jsx)("div",{class:"col-1 mr-auto",children:Object(m.jsx)("h1",{children:"Wishy"})})})}),Object(m.jsxs)("div",{class:"row",children:[Object(m.jsx)("div",{class:"col",children:Object(m.jsx)(f,{handleSuccessfulAuth:this.handleSuccessfulAuth})}),Object(m.jsx)("div",{class:"col",children:Object(m.jsx)(v,{handleSuccessfulAuth:this.handleSuccessfulAuth})})]})]})}}]),s}(n.Component),C=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).handleDelete=n.handleDelete.bind(Object(u.a)(n)),n.state={wishList:[]},n}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.user.id),p.a.get("/items/userId/"+this.props.user.id).then((function(t){e.setState({wishList:t.data}),console.log(e.state.wishList)}))}},{key:"handleDelete",value:function(e){var t=this;p.a.delete("/items/delete/item/"+e).then((function(e){console.log(e.data),p.a.get("/items/userId/"+t.props.user.id).then((function(e){t.setState({wishList:e.data})}))})).catch((function(e){console.log("Error: ",e)}))}},{key:"handleEdit",value:function(e){this.props.history.push("/editItem",{data:e})}},{key:"render",value:function(){var e=this;return Object(m.jsx)("div",{class:"viewWishlist-wrapper",children:Object(m.jsxs)("div",{class:"container-fluid text-center p-3 m-3",children:[Object(m.jsx)("h1",{children:"Your Wishlist"}),this.state.wishList.length>0?this.state.wishList.map((function(t){return Object(m.jsxs)("div",{class:"card p-3 m-3 w-50 mx-auto",children:[Object(m.jsx)("img",{class:"card-img-top w-50 h-25 mx-auto",src:t.itemPic}),Object(m.jsxs)("div",{class:"card-body",children:[Object(m.jsx)("h5",{children:t.itemDesc}),Object(m.jsx)("a",{class:"text-decoration-none link-primary p-3",href:t.itemLink,target_:"_blank",children:"Link to Item"}),Object(m.jsx)("h1",{children:"IDS: "}),Object(m.jsxs)("h3",{children:["itemId: ",t.id]}),Object(m.jsxs)("h3",{children:["userId: ",t.userId]})]}),Object(m.jsx)("div",{class:"row",children:Object(m.jsxs)("div",{class:"col",children:[Object(m.jsx)("button",{class:"btn btn-danger p-3 m-3",onClick:function(){return e.handleDelete(t.id)},children:"DELETE"}),Object(m.jsx)("button",{class:"btn btn-secondary p-3 m-3",onClick:function(){return e.handleEdit(t.id)},children:"EDIT"})]})})]})})):Object(m.jsx)("h5",{children:"No items added yet"})]})})}}]),s}(n.Component),k=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).handleDelete=n.handleDelete.bind(Object(u.a)(n)),n.state={users:[],wishList:[]},n}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/users/allUsers/").then((function(t){e.setState({users:t.data}),console.log(e.state.users)})),p.a.get("/items/allItems/").then((function(t){e.setState({wishList:t.data}),console.log(e.state.wishList)}))}},{key:"handleDelete",value:function(e){var t=this;p.a.delete("/items/delete/item/"+e).then((function(e){console.log(e.data),p.a.get("/items/allItems/").then((function(e){t.setState({wishList:e.data})}))})).catch((function(e){console.log("Error: ",e)}))}},{key:"handleEdit",value:function(e){this.props.history.push("/editItem",{data:e})}},{key:"render",value:function(){return Object(m.jsx)("div",{class:"viewWishlist-wrapper",children:Object(m.jsxs)("div",{class:"container-fluid text-center p-3 m-3",children:[Object(m.jsx)("h1",{children:"All Wishlists"}),this.state.user.map((function(e){e.id}))]})})}}]),s}(n.Component),I=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){return Object(o.a)(this,s),t.call(this,e)}return Object(l.a)(s,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{children:[Object(m.jsx)(y,Object(c.a)({},this.props)),"admin"===this.props.user.username?Object(m.jsx)(k,Object(c.a)({},this.props)):Object(m.jsx)(C,Object(c.a)({},this.props))]})})}}]),s}(n.Component),L=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState(t)},n.onSubmit=function(e){e.preventDefault();var t=n.state,s=t.id,a=t.username,r=t.password,i=t.email;p.a.post("/users/save",{id:s,username:a,password:r,email:i}).then((function(e){console.log(e),p.a.get("/users/username/"+a).then((function(e){n.props.changeUserState(e.data),n.props.history.push("/dashboard")}))})).catch((function(e){console.log("Edit Profile error ",e)}))},n.state={id:n.props.user.id,username:n.props.user.username,password:n.props.user.password,email:n.props.user.email},n}return Object(l.a)(s,[{key:"render",value:function(){return Object(m.jsx)("div",{class:"editProfile-wrapper",children:Object(m.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(m.jsx)("div",{class:"text-center",children:" Register "}),Object(m.jsx)("input",{class:"p-3 m-3",type:"email",name:"email",placeholder:"Email",value:this.state.email,onChange:this.onChange,required:!0}),Object(m.jsx)("input",{class:"p-3 m-3",type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.onChange,required:!0}),Object(m.jsx)("input",{class:"p-3 m-3",type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.onChange,required:!0}),Object(m.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Save Changes"})]})})}}]),s}(n.Component),D=s(7),P=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).state={loggedInStatus:"NOT_LOGGED_IN",user:{}},e.handleLogin=e.handleLogin.bind(Object(u.a)(e)),e.changeUserState=e.changeUserState.bind(Object(u.a)(e)),e}return Object(l.a)(s,[{key:"handleLogin",value:function(e){this.setState({loggedInStatus:"LOGGED_IN",user:e})}},{key:"changeUserState",value:function(e){this.setState({user:e})}},{key:"render",value:function(){var e=this;return Object(m.jsx)("div",{class:"app",children:Object(m.jsx)(w.a,{children:Object(m.jsxs)(D.c,{children:[Object(m.jsx)(D.a,{exact:!0,path:"/",render:function(t){return Object(m.jsx)(S,Object(c.a)(Object(c.a)({},t),{},{handleLogin:e.handleLogin,loggedInStatus:e.state.loggedInStatus}))}}),Object(m.jsx)(D.a,{exact:!0,path:"/dashboard",render:function(t){return Object(m.jsx)(I,Object(c.a)(Object(c.a)({},t),{},{retrieveWishlist:e.retrieveWishlist,user:e.state.user,loggedInStatus:e.state.loggedInStatus}))}}),Object(m.jsx)(D.a,{exact:!0,path:"/addItem",render:function(t){return Object(m.jsx)(b,Object(c.a)(Object(c.a)({},t),{},{user:e.state.user,loggedInStatus:e.state.loggedInStatus}))}}),Object(m.jsx)(D.a,{exact:!0,path:"/editItem",render:function(t){return Object(m.jsx)(O,Object(c.a)(Object(c.a)({},t),{},{user:e.state.user,loggedInStatus:e.state.loggedInStatus}))}}),Object(m.jsx)(D.a,{exact:!0,path:"/editProfile",render:function(t){return Object(m.jsx)(L,Object(c.a)(Object(c.a)({},t),{},{changeUserState:e.changeUserState,user:e.state.user,loggedInStatus:e.state.loggedInStatus}))}}),Object(m.jsx)(D.a,{path:"/register",component:f}),Object(m.jsx)(D.a,{path:"/login",component:v}),Object(m.jsx)(D.a,{path:"/show/:id",component:x.a})]})})})}}]),s}(n.Component);s(68),s(69);i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(P,{})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.975b89cd.chunk.js.map