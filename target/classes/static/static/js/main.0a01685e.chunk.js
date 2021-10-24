(this["webpackJsonpcst438-project2"]=this["webpackJsonpcst438-project2"]||[]).push([[0],{36:function(e,t){},43:function(e,t,s){},92:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),i=s(15),r=s.n(i),c=(s(43),s(9)),o=s(3),l=s(4),u=s(16),d=s(6),h=s(5),j=s(2),m=s.n(j),p=s(0),b=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState(t)},n.onSubmit=function(e){e.preventDefault(),console.log(n.props.user.id);var t=n.state,s=t.userId,a=t.itemLink,i=t.itemDesc,r=t.itemPic;console.log(s,a,i,r),m.a.post("/items/save",{userId:s,itemLink:a,itemDesc:i,itemPic:r}).then((function(e){console.log("Save Items result: ",e),n.props.history.push("/dashboard")})).catch((function(e){console.log("addItem error ",e)}))},n.state={userId:n.props.user.id,itemLink:"",itemDesc:"",itemPic:""},n}return Object(l.a)(s,[{key:"render",value:function(){return Object(p.jsx)("div",{class:"register-wrapper",children:Object(p.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(p.jsx)("div",{class:"text-center",children:" Add New Item "}),Object(p.jsx)("input",{class:"p-3 m-3",type:"text",name:"itemLink",placeholder:"Link",value:this.state.itemLink,onChange:this.onChange,required:!0}),Object(p.jsx)("input",{class:"p-3 m-3",type:"text",name:"itemDesc",placeholder:"Description",value:this.state.itemDesc,onChange:this.onChange,required:!0}),Object(p.jsx)("input",{class:"p-3 m-3",type:"text",name:"itemPic",placeholder:"Picture Link",value:this.state.itemPic,onChange:this.onChange,required:!0}),Object(p.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Add"})]})})}}]),s}(n.Component),O=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState(t)},n.onSubmit=function(e){e.preventDefault(),console.log(n.props.user.id);var t=n.state,s=t.id,a=t.userId,i=t.itemLink,r=t.itemDesc,c=t.itemPic;console.log(s,a,i,r,c),m.a.post("/items/save",{id:s,userId:a,itemLink:i,itemDesc:r,itemPic:c}).then((function(e){console.log("Save Items result: ",e),n.props.history.push("/dashboard")})).catch((function(e){console.log("addItem error ",e)}))},n.state={id:n.props.history.location.state.data,userId:n.props.user.id,itemLink:"",itemDesc:"",itemPic:""},n}return Object(l.a)(s,[{key:"render",value:function(){return Object(p.jsx)("div",{class:"editItem-wrapper",children:Object(p.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(p.jsx)("div",{class:"text-center",children:" Edit Item "}),Object(p.jsx)("input",{class:"p-3 m-3",type:"text",name:"itemLink",placeholder:"Link",value:this.state.itemLink,onChange:this.onChange,required:!0}),Object(p.jsx)("input",{class:"p-3 m-3",type:"text",name:"itemDesc",placeholder:"Description",value:this.state.itemDesc,onChange:this.onChange,required:!0}),Object(p.jsx)("input",{class:"p-3 m-3",type:"text",name:"itemPic",placeholder:"Picture Link",value:this.state.itemPic,onChange:this.onChange,required:!0}),Object(p.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Save Changes"})]})})}}]),s}(n.Component),x=s(36),g=s.n(x),v=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState(t)},n.onSubmit=function(e){e.preventDefault();var t=n.state,s=t.username,a=t.password;t.user;m.a.get("/users/username/"+s).then((function(e){console.log(e.data),n.setState({user:e.data}),s===n.state.user.username&&a===n.state.user.password?(console.log(e.data),n.props.handleSuccessfulAuth(e.data)):console.log("no user found")})).catch((function(e){console.log("Get Users Error",e)}))},n.state={username:"",password:"",user:{}},n}return Object(l.a)(s,[{key:"render",value:function(){return Object(p.jsx)("div",{class:"login-wrapper",children:Object(p.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(p.jsx)("div",{class:"text-center",children:" Login "}),Object(p.jsx)("input",{class:"p-3 m-3",type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.onChange,required:!0}),Object(p.jsx)("input",{class:"p-3 m-3",type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.onChange,required:!0}),Object(p.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Login"})]})})}}]),s}(n.Component),f=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState(t)},n.onSubmit=function(e){e.preventDefault();var t=n.state,s=t.username,a=t.password,i=t.password_confirmation,r=t.email;m.a.get("/users/username/"+s).then((function(e){n.setState({user:e.data})})).catch((function(e){console.log("Get Users Error",e)})),a===i&&s!==n.state.user.username&&r!==n.state.user.email?m.a.post("/users/save",{username:s,password:a,email:r},{withCredentials:!0}).then((function(e){m.a.get("/users/username/"+s).then((function(e){console.log(e.data),n.props.handleSuccessfulAuth(e.data)}))})).catch((function(e){console.log("registration error ",e)})):console.log("password does not match password confirmation, username/email already exists")},n.state={username:"",password:"",password_confirmation:"",email:"",user:{}},n}return Object(l.a)(s,[{key:"render",value:function(){return Object(p.jsx)("div",{class:"register-wrapper",children:Object(p.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(p.jsx)("div",{class:"text-center",children:" Register "}),Object(p.jsx)("input",{class:"p-3 m-3",type:"email",name:"email",placeholder:"Email",value:this.state.email,onChange:this.onChange,required:!0}),Object(p.jsx)("input",{class:"p-3 m-3",type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.onChange,required:!0}),Object(p.jsx)("input",{class:"p-3 m-3",type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.onChange,required:!0}),Object(p.jsx)("input",{class:"p-3 m-3",type:"password",name:"password_confirmation",placeholder:"Password confirmation",value:this.state.password_confirmation,onChange:this.onChange,required:!0}),Object(p.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Register"})]})})}}]),s}(n.Component),w=s(10),y=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){return Object(o.a)(this,s),t.call(this,e)}return Object(l.a)(s,[{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsx)("nav",{class:"nav navbar-expand-lg bg-dark p-3 text-white",children:Object(p.jsx)("div",{class:"container-fluid",children:Object(p.jsxs)("div",{class:"row",children:[Object(p.jsx)("div",{class:"col-1 mr-auto",children:Object(p.jsx)("h1",{children:"Wishy"})}),Object(p.jsx)("div",{class:"col m-auto",children:"admin"===this.props.user.username?Object(p.jsxs)(n.Fragment,{children:[Object(p.jsx)(w.b,{class:"text-decoration-none p-3 link-secondary",to:"/adminAddItem",children:" Add Item "}),Object(p.jsx)(w.b,{class:"text-decoration-none p-3 link-secondary",to:"/adminAddProfile",children:" Add Profile "})]}):Object(p.jsxs)(n.Fragment,{children:[Object(p.jsx)(w.b,{class:"text-decoration-none p-3 link-secondary",to:"/addItem",children:" Add Item "}),Object(p.jsx)(w.b,{class:"text-decoration-none p-3 link-secondary",to:"/editProfile",children:" Edit Profile "})]})}),Object(p.jsx)("div",{class:"col-1 ml-auto",children:Object(p.jsx)("h4",{class:"text-secondary",children:this.props.user.username})})]})})})})}}]),s}(n.Component),S=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).handleSuccessfulAuth=n.handleSuccessfulAuth.bind(Object(u.a)(n)),n}return Object(l.a)(s,[{key:"handleSuccessfulAuth",value:function(e){this.props.handleLogin(e),console.log("Succesful Login Check: ",e),this.props.history.push("/dashboard")}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("nav",{class:"nav navbar-expand-lg bg-dark p-3 text-white",children:Object(p.jsx)("div",{class:"row",children:Object(p.jsx)("div",{class:"col-1 mr-auto",children:Object(p.jsx)("h1",{children:"Wishy"})})})}),Object(p.jsxs)("div",{class:"row",children:[Object(p.jsx)("div",{class:"col",children:Object(p.jsx)(f,{handleSuccessfulAuth:this.handleSuccessfulAuth})}),Object(p.jsx)("div",{class:"col",children:Object(p.jsx)(v,{handleSuccessfulAuth:this.handleSuccessfulAuth})})]})]})}}]),s}(n.Component),I=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).handleDelete=n.handleDelete.bind(Object(u.a)(n)),n.state={wishList:[]},n}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.user.id),m.a.get("/items/userId/"+this.props.user.id).then((function(t){e.setState({wishList:t.data}),console.log(e.state.wishList)}))}},{key:"handleDelete",value:function(e){var t=this;m.a.delete("/items/delete/item/"+e).then((function(e){console.log(e.data),m.a.get("/items/userId/"+t.props.user.id).then((function(e){t.setState({wishList:e.data})}))})).catch((function(e){console.log("Error: ",e)}))}},{key:"handleEdit",value:function(e){this.props.history.push("/editItem",{data:e})}},{key:"render",value:function(){var e=this;return Object(p.jsx)("div",{class:"viewWishlist-wrapper",children:Object(p.jsxs)("div",{class:"container-fluid text-center p-3 m-3",children:[Object(p.jsx)("h1",{children:"Your Wishlist"}),this.state.wishList.length>0?this.state.wishList.map((function(t){return Object(p.jsxs)("div",{class:"card p-3 m-3 w-50 mx-auto",children:[Object(p.jsx)("img",{class:"card-img-top w-50 h-25 mx-auto",src:t.itemPic}),Object(p.jsxs)("div",{class:"card-body",children:[Object(p.jsx)("h5",{children:t.itemDesc}),Object(p.jsx)("a",{class:"text-decoration-none link-primary p-3",href:t.itemLink,target_:"_blank",children:"Link to Item"}),Object(p.jsx)("h1",{children:"IDS: "}),Object(p.jsxs)("h3",{children:["itemId: ",t.id]}),Object(p.jsxs)("h3",{children:["userId: ",t.userId]})]}),Object(p.jsx)("div",{class:"row",children:Object(p.jsxs)("div",{class:"col",children:[Object(p.jsx)("button",{class:"btn btn-danger p-3 m-3",onClick:function(){return e.handleDelete(t.id)},children:"DELETE"}),Object(p.jsx)("button",{class:"btn btn-secondary p-3 m-3",onClick:function(){return e.handleEdit(t.id)},children:"EDIT"})]})})]})})):Object(p.jsx)("h5",{children:"No items added yet"})]})})}}]),s}(n.Component),C=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).handleDelete=n.handleDelete.bind(Object(u.a)(n)),n.state={users:[],wishList:[]},n}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this;m.a.get("/users/allUsers/").then((function(t){e.setState({users:t.data}),console.log(e.state.users)})),m.a.get("/items/allItems/").then((function(t){e.setState({wishList:t.data}),console.log(e.state.wishList)}))}},{key:"handleDelete",value:function(e){var t=this;m.a.delete("/items/delete/item/"+e).then((function(e){console.log(e.data),m.a.get("/items/allItems/").then((function(e){t.setState({wishList:e.data})}))})).catch((function(e){console.log("Error: ",e)}))}},{key:"handleEdit",value:function(e){this.props.history.push("/editItem",{data:e})}},{key:"render",value:function(){var e=this;return Object(p.jsx)("div",{class:"viewWishlist-wrapper",children:Object(p.jsxs)("div",{class:"container-fluid text-center p-3 m-3",children:[Object(p.jsx)("h1",{children:"All Wishlists"}),this.state.users.map((function(t){return Object(p.jsx)("div",{class:"m-3",children:Object(p.jsxs)("div",{class:"card p-3 w-50 mx-auto",children:[Object(p.jsxs)("h3",{children:["User: ",t.username," ID: ",t.id]}),e.state.wishList.filter((function(e){return e.userId===t.id})).map((function(t){return Object(p.jsxs)("div",{class:"card p-3",children:[Object(p.jsxs)("div",{children:["Item Id: ",t.id]}),Object(p.jsxs)("div",{children:["User Id: ",t.userId]}),Object(p.jsxs)("div",{children:["Item Link: ",t.itemLink]}),Object(p.jsxs)("div",{children:["Item Description: ",t.itemDesc]}),Object(p.jsxs)("div",{children:["Item Picture Link: ",t.itemPic]}),Object(p.jsx)("div",{class:"row",children:Object(p.jsxs)("div",{class:"col",children:[Object(p.jsx)("button",{class:"btn btn-danger p-3 m-3",onClick:function(){return e.handleDelete(t.id)},children:"DELETE"}),Object(p.jsx)("button",{class:"btn btn-secondary p-3 m-3",onClick:function(){return e.handleEdit(t.id)},children:"EDIT"})]})})]})}))]})})}))]})})}}]),s}(n.Component),k=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){return Object(o.a)(this,s),t.call(this,e)}return Object(l.a)(s,[{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{children:[Object(p.jsx)(y,Object(c.a)({},this.props)),"admin"===this.props.user.username?Object(p.jsx)(C,Object(c.a)({},this.props)):Object(p.jsx)(I,Object(c.a)({},this.props))]})})}}]),s}(n.Component),L=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState(t)},n.onSubmit=function(e){e.preventDefault();var t=n.state,s=t.id,a=t.username,i=t.password,r=t.email;m.a.post("/users/save",{id:s,username:a,password:i,email:r}).then((function(e){console.log(e),m.a.get("/users/username/"+a).then((function(e){n.props.changeUserState(e.data),n.props.history.push("/dashboard")}))})).catch((function(e){console.log("Edit Profile error ",e)}))},n.state={id:n.props.user.id,username:n.props.user.username,password:n.props.user.password,email:n.props.user.email},n}return Object(l.a)(s,[{key:"render",value:function(){return Object(p.jsx)("div",{class:"editProfile-wrapper",children:Object(p.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(p.jsx)("div",{class:"text-center",children:" Register "}),Object(p.jsx)("input",{class:"p-3 m-3",type:"email",name:"email",placeholder:"Email",value:this.state.email,onChange:this.onChange,required:!0}),Object(p.jsx)("input",{class:"p-3 m-3",type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.onChange,required:!0}),Object(p.jsx)("input",{class:"p-3 m-3",type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.onChange,required:!0}),Object(p.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Save Changes"})]})})}}]),s}(n.Component),D=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState(t)},n.onSubmit=function(e){e.preventDefault(),console.log(n.props.user.id);var t=n.state,s=t.id,a=t.userId,i=t.itemLink,r=t.itemDesc,c=t.itemPic;console.log(s,a,i,r,c),m.a.post("/items/save",{id:s,userId:a,itemLink:i,itemDesc:r,itemPic:c}).then((function(e){console.log("Save Items result: ",e),n.props.history.push("/dashboard")})).catch((function(e){console.log("addItem error ",e)}))},n.state={id:"",userId:"",itemLink:"",itemDesc:"",itemPic:""},n}return Object(l.a)(s,[{key:"render",value:function(){return Object(p.jsx)("div",{class:"register-wrapper",children:Object(p.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(p.jsx)("div",{class:"text-center",children:" Add New Item "}),Object(p.jsx)("input",{class:"p-3 m-3",type:"text",name:"id",placeholder:"id",value:this.state.id,onChange:this.onChange,required:!0}),Object(p.jsx)("input",{class:"p-3 m-3",type:"text",name:"userId",placeholder:"userId",value:this.state.userId,onChange:this.onChange,required:!0}),Object(p.jsx)("input",{class:"p-3 m-3",type:"text",name:"itemLink",placeholder:"Link",value:this.state.itemLink,onChange:this.onChange,required:!0}),Object(p.jsx)("input",{class:"p-3 m-3",type:"text",name:"itemDesc",placeholder:"Description",value:this.state.itemDesc,onChange:this.onChange,required:!0}),Object(p.jsx)("input",{class:"p-3 m-3",type:"text",name:"itemPic",placeholder:"Picture Link",value:this.state.itemPic,onChange:this.onChange,required:!0}),Object(p.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Add"})]})})}}]),s}(n.Component),P=s(7),E=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).state={loggedInStatus:"NOT_LOGGED_IN",user:{}},e.handleLogin=e.handleLogin.bind(Object(u.a)(e)),e.changeUserState=e.changeUserState.bind(Object(u.a)(e)),e}return Object(l.a)(s,[{key:"handleLogin",value:function(e){this.setState({loggedInStatus:"LOGGED_IN",user:e})}},{key:"changeUserState",value:function(e){this.setState({user:e})}},{key:"render",value:function(){var e=this;return Object(p.jsx)("div",{class:"app",children:Object(p.jsx)(w.a,{children:Object(p.jsxs)(P.c,{children:[Object(p.jsx)(P.a,{exact:!0,path:"/",render:function(t){return Object(p.jsx)(S,Object(c.a)(Object(c.a)({},t),{},{handleLogin:e.handleLogin,loggedInStatus:e.state.loggedInStatus}))}}),Object(p.jsx)(P.a,{exact:!0,path:"/dashboard",render:function(t){return Object(p.jsx)(k,Object(c.a)(Object(c.a)({},t),{},{retrieveWishlist:e.retrieveWishlist,user:e.state.user,loggedInStatus:e.state.loggedInStatus}))}}),Object(p.jsx)(P.a,{exact:!0,path:"/addItem",render:function(t){return Object(p.jsx)(b,Object(c.a)(Object(c.a)({},t),{},{user:e.state.user,loggedInStatus:e.state.loggedInStatus}))}}),Object(p.jsx)(P.a,{exact:!0,path:"/editItem",render:function(t){return Object(p.jsx)(O,Object(c.a)(Object(c.a)({},t),{},{user:e.state.user,loggedInStatus:e.state.loggedInStatus}))}}),Object(p.jsx)(P.a,{exact:!0,path:"/editProfile",render:function(t){return Object(p.jsx)(L,Object(c.a)(Object(c.a)({},t),{},{changeUserState:e.changeUserState,user:e.state.user,loggedInStatus:e.state.loggedInStatus}))}}),Object(p.jsx)(P.a,{exact:!0,path:"/adminAddItem",render:function(t){return Object(p.jsx)(D,Object(c.a)(Object(c.a)({},t),{},{user:e.state.user,loggedInStatus:e.state.loggedInStatus}))}}),Object(p.jsx)(P.a,{path:"/register",component:f}),Object(p.jsx)(P.a,{path:"/login",component:v}),Object(p.jsx)(P.a,{path:"/show/:id",component:g.a})]})})})}}]),s}(n.Component);s(68),s(69);r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(E,{})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.0a01685e.chunk.js.map