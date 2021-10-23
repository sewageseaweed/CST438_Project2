(this["webpackJsonpcst438-project2"]=this["webpackJsonpcst438-project2"]||[]).push([[0],{36:function(e,t){},43:function(e,t,s){},92:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),c=s(15),i=s.n(c),r=(s(43),s(13)),o=s(4),l=s(5),u=s(16),d=s(7),h=s(6),j=s(8),m=s.n(j),b=s(0),p=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState(t)},n.onSubmit=function(e){e.preventDefault(),console.log(n.props.user.id);var t=n.state,s=t.userId,a=t.itemLink,c=t.itemDesc,i=t.itemPic;console.log(s,a,c,i),m.a.post("/items/save",{userId:s,itemLink:a,itemDesc:c,itemPic:i}).then((function(e){console.log("Save Items result: ",e),n.props.history.push("/dashboard")})).catch((function(e){console.log("addItem error ",e)}))},n.state={userId:n.props.user.id,itemLink:"",itemDesc:"",itemPic:""},n}return Object(l.a)(s,[{key:"render",value:function(){return Object(b.jsx)("div",{class:"register-wrapper",children:Object(b.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(b.jsx)("div",{class:"text-center",children:" Add New Item "}),Object(b.jsx)("input",{class:"p-3 m-3",type:"text",name:"itemLink",placeholder:"Link",value:this.state.itemLink,onChange:this.onChange,required:!0}),Object(b.jsx)("input",{class:"p-3 m-3",type:"text",name:"itemDesc",placeholder:"Description",value:this.state.itemDesc,onChange:this.onChange,required:!0}),Object(b.jsx)("input",{class:"p-3 m-3",type:"text",name:"itemPic",placeholder:"Picture Link",value:this.state.itemPic,onChange:this.onChange,required:!0}),Object(b.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Add"})]})})}}]),s}(n.Component),O=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState(t)},n.onSubmit=function(e){e.preventDefault(),console.log(n.props.user.id);var t=n.state,s=t.id,a=t.userId,c=t.itemLink,i=t.itemDesc,r=t.itemPic;console.log(s,a,c,i,r),m.a.post("/items/save",{id:s,userId:a,itemLink:c,itemDesc:i,itemPic:r}).then((function(e){console.log("Save Items result: ",e),n.props.history.push("/dashboard")})).catch((function(e){console.log("addItem error ",e)}))},n.state={id:n.props.history.location.state.data,userId:n.props.user.id,itemLink:"",itemDesc:"",itemPic:""},n}return Object(l.a)(s,[{key:"render",value:function(){return Object(b.jsx)("div",{class:"editItem-wrapper",children:Object(b.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(b.jsx)("div",{class:"text-center",children:" Edit Item "}),Object(b.jsx)("input",{class:"p-3 m-3",type:"text",name:"itemLink",placeholder:"Link",value:this.state.itemLink,onChange:this.onChange,required:!0}),Object(b.jsx)("input",{class:"p-3 m-3",type:"text",name:"itemDesc",placeholder:"Description",value:this.state.itemDesc,onChange:this.onChange,required:!0}),Object(b.jsx)("input",{class:"p-3 m-3",type:"text",name:"itemPic",placeholder:"Picture Link",value:this.state.itemPic,onChange:this.onChange,required:!0}),Object(b.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Save Changes"})]})})}}]),s}(n.Component),x=s(36),g=s.n(x),v=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState(t)},n.onSubmit=function(e){e.preventDefault();var t=n.state,s=t.username,a=t.password;t.user;m.a.get("/users/username/"+s).then((function(e){console.log(e.data),n.setState({user:e.data}),s===n.state.user.username&&a===n.state.user.password?(console.log(e.data),n.props.handleSuccessfulAuth(e.data)):console.log("no user found")})).catch((function(e){console.log("Get Users Error",e)}))},n.state={username:"",password:"",user:{}},n}return Object(l.a)(s,[{key:"render",value:function(){return Object(b.jsx)("div",{class:"login-wrapper",children:Object(b.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(b.jsx)("div",{class:"text-center",children:" Login "}),Object(b.jsx)("input",{class:"p-3 m-3",type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.onChange,required:!0}),Object(b.jsx)("input",{class:"p-3 m-3",type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.onChange,required:!0}),Object(b.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Login"})]})})}}]),s}(n.Component),f=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState(t)},n.onSubmit=function(e){e.preventDefault();var t=n.state,s=t.username,a=t.password,c=t.password_confirmation,i=t.email;m.a.get("/users/username/"+s).then((function(e){n.setState({user:e.data})})).catch((function(e){console.log("Get Users Error",e)})),a===c&&s!==n.state.user.username&&i!==n.state.user.email?m.a.post("/users/save",{username:s,password:a,email:i},{withCredentials:!0}).then((function(e){m.a.get("/users/username/"+s).then((function(e){console.log(e.data),n.props.handleSuccessfulAuth(e.data)}))})).catch((function(e){console.log("registration error ",e)})):console.log("password does not match password confirmation, username/email already exists")},n.state={username:"",password:"",password_confirmation:"",email:"",user:{}},n}return Object(l.a)(s,[{key:"render",value:function(){return Object(b.jsx)("div",{class:"register-wrapper",children:Object(b.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(b.jsx)("div",{class:"text-center",children:" Register "}),Object(b.jsx)("input",{class:"p-3 m-3",type:"email",name:"email",placeholder:"Email",value:this.state.email,onChange:this.onChange,required:!0}),Object(b.jsx)("input",{class:"p-3 m-3",type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.onChange,required:!0}),Object(b.jsx)("input",{class:"p-3 m-3",type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.onChange,required:!0}),Object(b.jsx)("input",{class:"p-3 m-3",type:"password",name:"password_confirmation",placeholder:"Password confirmation",value:this.state.password_confirmation,onChange:this.onChange,required:!0}),Object(b.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Register"})]})})}}]),s}(n.Component),w=s(14),y=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){return Object(o.a)(this,s),t.call(this,e)}return Object(l.a)(s,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)("nav",{class:"nav navbar-expand-lg bg-dark p-3 text-white",children:Object(b.jsx)("div",{class:"container-fluid",children:Object(b.jsxs)("div",{class:"row",children:[Object(b.jsx)("div",{class:"col-1 mr-auto",children:Object(b.jsx)("h1",{children:"Wishy"})}),Object(b.jsxs)("div",{class:"col m-auto",children:[Object(b.jsx)(w.b,{class:"text-decoration-none p-3 link-secondary",to:"/addItem",children:" Add Item "}),Object(b.jsx)(w.b,{class:"text-decoration-none p-3 link-secondary",to:"/addItem",children:" Edit Profile "})]}),Object(b.jsx)("div",{class:"col-1 ml-auto",children:Object(b.jsx)("h4",{class:"text-secondary",children:this.props.user.username})})]})})})})}}]),s}(n.Component),S=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).handleSuccessfulAuth=n.handleSuccessfulAuth.bind(Object(u.a)(n)),n}return Object(l.a)(s,[{key:"handleSuccessfulAuth",value:function(e){this.props.handleLogin(e),console.log("Succesful Login Check: ",e),this.props.history.push("/dashboard")}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("nav",{class:"nav navbar-expand-lg bg-dark p-3 text-white",children:Object(b.jsx)("div",{class:"row",children:Object(b.jsx)("div",{class:"col-1 mr-auto",children:Object(b.jsx)("h1",{children:"Wishy"})})})}),Object(b.jsxs)("div",{class:"row",children:[Object(b.jsx)("div",{class:"col",children:Object(b.jsx)(f,{handleSuccessfulAuth:this.handleSuccessfulAuth})}),Object(b.jsx)("div",{class:"col",children:Object(b.jsx)(v,{handleSuccessfulAuth:this.handleSuccessfulAuth})})]})]})}}]),s}(n.Component),C=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).handleDelete=n.handleDelete.bind(Object(u.a)(n)),n.state={wishList:[]},n}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.user.id),m.a.get("/items/userId/"+this.props.user.id).then((function(t){e.setState({wishList:t.data}),console.log(e.state.wishList)}))}},{key:"handleDelete",value:function(e){var t=this;m.a.delete("/items/delete/item/"+e).then((function(e){console.log(e.data),m.a.get("/items/userId/"+t.props.user.id).then((function(e){t.setState({wishList:e.data})}))})).catch((function(e){console.log("Error: ",e)}))}},{key:"handleEdit",value:function(e){this.props.history.push("/editItem",{data:e})}},{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{class:"viewWishlist-wrapper",children:Object(b.jsxs)("div",{class:"container-fluid text-center p-3 m-3",children:[Object(b.jsx)("h1",{children:"Your Wishlist"}),this.state.wishList.length>0?this.state.wishList.map((function(t){return Object(b.jsxs)("div",{class:"card p-3 m-3 w-50 mx-auto",children:[Object(b.jsx)("img",{class:"card-img-top w-50 h-25 mx-auto",src:t.itemPic}),Object(b.jsxs)("div",{class:"card-body",children:[Object(b.jsx)("h5",{children:t.itemDesc}),Object(b.jsx)("a",{class:"text-decoration-none link-primary p-3",href:t.itemLink,target_:"_blank",children:"Link to Item"}),Object(b.jsx)("h1",{children:"IDS: "}),Object(b.jsxs)("h3",{children:["itemId: ",t.id]}),Object(b.jsxs)("h3",{children:["userId: ",t.userId]})]}),Object(b.jsx)("div",{class:"row",children:Object(b.jsxs)("div",{class:"col",children:[Object(b.jsx)("button",{class:"btn btn-danger p-3 m-3",onClick:function(){return e.handleDelete(t.id)},children:"DELETE"}),Object(b.jsx)("button",{class:"btn btn-secondary p-3 m-3",onClick:function(){return e.handleEdit(t.id)},children:"EDIT"})]})})]})})):Object(b.jsx)("h5",{children:"No items added yet"})]})})}}]),s}(n.Component),k=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){return Object(o.a)(this,s),t.call(this,e)}return Object(l.a)(s,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{class:!0,children:[Object(b.jsx)(y,Object(r.a)({},this.props)),Object(b.jsx)(C,Object(r.a)({},this.props))]})})}}]),s}(n.Component),I=s(2),L=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).state={loggedInStatus:"NOT_LOGGED_IN",user:{}},e.handleLogin=e.handleLogin.bind(Object(u.a)(e)),e}return Object(l.a)(s,[{key:"handleLogin",value:function(e){this.setState({loggedInStatus:"LOGGED_IN",user:e})}},{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{class:"app",children:Object(b.jsx)(w.a,{children:Object(b.jsxs)(I.c,{children:[Object(b.jsx)(I.a,{exact:!0,path:"/",render:function(t){return Object(b.jsx)(S,Object(r.a)(Object(r.a)({},t),{},{handleLogin:e.handleLogin,loggedInStatus:e.state.loggedInStatus}))}}),Object(b.jsx)(I.a,{exact:!0,path:"/dashboard",render:function(t){return Object(b.jsx)(k,Object(r.a)(Object(r.a)({},t),{},{retrieveWishlist:e.retrieveWishlist,user:e.state.user,loggedInStatus:e.state.loggedInStatus}))}}),Object(b.jsx)(I.a,{exact:!0,path:"/addItem",render:function(t){return Object(b.jsx)(p,Object(r.a)(Object(r.a)({},t),{},{user:e.state.user,loggedInStatus:e.state.loggedInStatus}))}}),Object(b.jsx)(I.a,{exact:!0,path:"/editItem",render:function(t){return Object(b.jsx)(O,Object(r.a)(Object(r.a)({},t),{},{user:e.state.user,loggedInStatus:e.state.loggedInStatus}))}}),Object(b.jsx)(I.a,{path:"/register",component:f}),Object(b.jsx)(I.a,{path:"/login",component:v}),Object(b.jsx)(I.a,{path:"/show/:id",component:g.a})]})})})}}]),s}(n.Component);s(68),s(69);i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(L,{})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.c36bef9f.chunk.js.map