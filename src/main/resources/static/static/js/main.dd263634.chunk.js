(this["webpackJsonpcst438-project2"]=this["webpackJsonpcst438-project2"]||[]).push([[0],{42:function(e,t,s){},62:function(e,t,s){},92:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),i=s(20),r=s.n(i),c=(s(42),s(7)),o=s(3),l=s(4),u=s(14),d=s(6),h=s(5),m=s(2),p=s.n(m),j=s(0),b=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState(t)},n.onSubmit=function(e){e.preventDefault(),console.log(n.props.user.id);var t=n.state,s=t.userId,a=t.itemLink,i=t.itemDesc,r=t.itemPic;console.log(s,a,i,r),p.a.post("/items/save",{userId:s,itemLink:a,itemDesc:i,itemPic:r}).then((function(e){console.log("Save Items result: ",e),n.props.history.push("/dashboard")})).catch((function(e){console.log("addItem error ",e)}))},n.state={userId:n.props.user.id,itemLink:"",itemDesc:"",itemPic:""},n}return Object(l.a)(s,[{key:"render",value:function(){return Object(j.jsx)("div",{class:"register-wrapper",children:Object(j.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(j.jsx)("div",{class:"text-center",children:" Add New Item "}),Object(j.jsx)("input",{class:"p-3 m-3",type:"text",name:"itemLink",placeholder:"Link",value:this.state.itemLink,onChange:this.onChange,required:!0}),Object(j.jsx)("input",{class:"p-3 m-3",type:"text",name:"itemDesc",placeholder:"Description",value:this.state.itemDesc,onChange:this.onChange,required:!0}),Object(j.jsx)("input",{class:"p-3 m-3",type:"text",name:"itemPic",placeholder:"Picture Link",value:this.state.itemPic,onChange:this.onChange,required:!0}),Object(j.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Add"})]})})}}]),s}(n.Component),O=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState(t)},n.onSubmit=function(e){e.preventDefault(),console.log(n.props.user.id);var t=n.state,s=t.id,a=t.userId,i=t.itemLink,r=t.itemDesc,c=t.itemPic;console.log(s,a,i,r,c),p.a.post("/items/save",{id:s,userId:a,itemLink:i,itemDesc:r,itemPic:c}).then((function(e){console.log("Save Items result: ",e),n.props.history.push("/dashboard")})).catch((function(e){console.log("addItem error ",e)}))},n.state={id:n.props.history.location.state.data,userId:n.props.user.id,itemLink:"",itemDesc:"",itemPic:""},n}return Object(l.a)(s,[{key:"render",value:function(){return Object(j.jsx)("div",{class:"editItem-wrapper",children:Object(j.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(j.jsx)("div",{class:"text-center",children:" Edit Item "}),Object(j.jsx)("input",{class:"p-3 m-3",type:"text",name:"itemLink",placeholder:"Link",value:this.state.itemLink,onChange:this.onChange,required:!0}),Object(j.jsx)("input",{class:"p-3 m-3",type:"text",name:"itemDesc",placeholder:"Description",value:this.state.itemDesc,onChange:this.onChange,required:!0}),Object(j.jsx)("input",{class:"p-3 m-3",type:"text",name:"itemPic",placeholder:"Picture Link",value:this.state.itemPic,onChange:this.onChange,required:!0}),Object(j.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Save Changes"})]})})}}]),s}(n.Component),g=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState(t)},n.onSubmit=function(e){e.preventDefault();var t=n.state,s=t.username,a=t.password;t.user;p.a.get("/users/username/"+s).then((function(e){console.log(e.data),n.setState({user:e.data}),s===n.state.user.username&&a===n.state.user.password?(console.log(e.data),n.props.handleSuccessfulAuth(e.data)):console.log("no user found")})).catch((function(e){console.log("Get Users Error",e)}))},n.state={username:"",password:"",user:{}},n}return Object(l.a)(s,[{key:"render",value:function(){return Object(j.jsx)("div",{class:"login-wrapper",children:Object(j.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(j.jsx)("div",{class:"text-center",children:" Login "}),Object(j.jsx)("input",{class:"p-3 m-3",type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.onChange,required:!0}),Object(j.jsx)("input",{class:"p-3 m-3",type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.onChange,required:!0}),Object(j.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Login"})]})})}}]),s}(n.Component),x=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState(t)},n.onSubmit=function(e){e.preventDefault();var t=n.state,s=t.username,a=t.password,i=t.password_confirmation,r=t.email;p.a.get("/users/username/"+s).then((function(e){n.setState({user:e.data})})).catch((function(e){console.log("Get Users Error",e)})),a===i&&s!==n.state.user.username&&r!==n.state.user.email?p.a.post("/users/save",{username:s,password:a,email:r},{withCredentials:!0}).then((function(e){p.a.get("/users/username/"+s).then((function(e){console.log(e.data),n.props.handleSuccessfulAuth(e.data)}))})).catch((function(e){console.log("registration error ",e)})):console.log("password does not match password confirmation, username/email already exists")},n.state={username:"",password:"",password_confirmation:"",email:"",user:{}},n}return Object(l.a)(s,[{key:"render",value:function(){return Object(j.jsx)("div",{class:"register-wrapper",children:Object(j.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(j.jsx)("div",{class:"text-center",children:" Register "}),Object(j.jsx)("input",{class:"p-3 m-3",type:"email",name:"email",placeholder:"Email",value:this.state.email,onChange:this.onChange,required:!0}),Object(j.jsx)("input",{class:"p-3 m-3",type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.onChange,required:!0}),Object(j.jsx)("input",{class:"p-3 m-3",type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.onChange,required:!0}),Object(j.jsx)("input",{class:"p-3 m-3",type:"password",name:"password_confirmation",placeholder:"Password confirmation",value:this.state.password_confirmation,onChange:this.onChange,required:!0}),Object(j.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Register"})]})})}}]),s}(n.Component),v=(s(62),function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).handleSuccessfulAuth=n.handleSuccessfulAuth.bind(Object(u.a)(n)),n}return Object(l.a)(s,[{key:"handleSuccessfulAuth",value:function(e){this.props.handleLogin(e),console.log("Succesful Login Check: ",e),this.props.history.push("/dashboard")}},{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)("div",{class:"jumbotron jumbotron-fluid bg-dark text-center text-white",id:"intro",children:Object(j.jsxs)("div",{class:"row",children:[Object(j.jsx)("div",{class:"col mx-auto",children:Object(j.jsx)("h1",{children:"Wishy"})}),Object(j.jsx)("div",{class:"col",children:Object(j.jsx)(x,{handleSuccessfulAuth:this.handleSuccessfulAuth})}),Object(j.jsx)("div",{class:"col",children:Object(j.jsx)(g,{handleSuccessfulAuth:this.handleSuccessfulAuth})})]})})})}}]),s}(n.Component)),f=s(15),y=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){return Object(o.a)(this,s),t.call(this,e)}return Object(l.a)(s,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)("nav",{class:"nav navbar-expand-lg bg-dark p-3 text-white",children:Object(j.jsx)("div",{class:"container-fluid",children:Object(j.jsxs)("div",{class:"row",children:[Object(j.jsx)("div",{class:"col-1 mr-auto",children:Object(j.jsx)("h1",{children:"Wishy"})}),Object(j.jsxs)("div",{class:"col m-auto",children:["admin"===this.props.user.username?Object(j.jsxs)(n.Fragment,{children:[Object(j.jsx)(f.b,{class:"text-decoration-none p-3 link-secondary",to:"/adminAddItem",children:" Add Item "}),Object(j.jsx)(f.b,{class:"text-decoration-none p-3 link-secondary",to:"/adminAddProfile",children:" Add Profile "})]}):Object(j.jsxs)(n.Fragment,{children:[Object(j.jsx)(f.b,{class:"text-decoration-none p-3 link-secondary",to:"/addItem",children:" Add Item "}),Object(j.jsx)(f.b,{class:"text-decoration-none p-3 link-secondary",to:"/editProfile",children:" Profile "})]}),Object(j.jsx)("a",{class:"text-decoration-none p-3 link-secondary",href:"/",children:" Logout "})]}),Object(j.jsx)("div",{class:"col-3 ml-auto d-flex align-items-center",children:Object(j.jsxs)(f.b,{class:"text-decoration-none p-3 link-secondary",to:"/editProfile",children:[" Logged in as: ",this.props.user.username," "]})})]})})})})}}]),s}(n.Component),w=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).handleDelete=n.handleDelete.bind(Object(u.a)(n)),n.state={wishList:[]},n}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.user.id),p.a.get("/items/userId/"+this.props.user.id).then((function(t){e.setState({wishList:t.data}),console.log(e.state.wishList)}))}},{key:"handleDelete",value:function(e){var t=this;p.a.delete("/items/delete/item/"+e).then((function(e){console.log(e.data),p.a.get("/items/userId/"+t.props.user.id).then((function(e){t.setState({wishList:e.data})}))})).catch((function(e){console.log("Error: ",e)}))}},{key:"handleEdit",value:function(e){this.props.history.push("/editItem",{data:e})}},{key:"render",value:function(){var e=this;return Object(j.jsx)("div",{class:"viewWishlist-wrapper",children:Object(j.jsxs)("div",{class:"container-fluid text-center p-3 m-3",children:[Object(j.jsx)("h1",{children:"Your Wishlist"}),this.state.wishList.length>0?this.state.wishList.map((function(t){return Object(j.jsxs)("div",{class:"card p-3 m-3 w-50 mx-auto",children:[Object(j.jsx)("img",{class:"card-img-top w-50 h-25 mx-auto",src:t.itemPic}),Object(j.jsxs)("div",{class:"card-body",children:[Object(j.jsx)("h5",{children:t.itemDesc}),Object(j.jsx)("a",{class:"text-decoration-none link-primary p-3",href:t.itemLink,target_:"_blank",children:"Link to Item"})]}),Object(j.jsx)("div",{class:"row",children:Object(j.jsxs)("div",{class:"col",children:[Object(j.jsx)("button",{class:"btn btn-danger p-3 m-3",onClick:function(){return e.handleDelete(t.id)},children:"DELETE"}),Object(j.jsx)("button",{class:"btn btn-secondary p-3 m-3",onClick:function(){return e.handleEdit(t.id)},children:"EDIT"})]})})]})})):Object(j.jsx)("h5",{children:"No items added yet"})]})})}}]),s}(n.Component),C=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).handleDelete=n.handleDelete.bind(Object(u.a)(n)),n.state={users:[],wishList:[]},n}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/users/allUsers/").then((function(t){e.setState({users:t.data}),console.log(e.state.users)})),p.a.get("/items/allItems/").then((function(t){e.setState({wishList:t.data}),console.log(e.state.wishList)}))}},{key:"handleDelete",value:function(e){var t=this;p.a.delete("/items/delete/item/"+e).then((function(e){console.log(e.data),p.a.get("/items/allItems/").then((function(e){t.setState({wishList:e.data})}))})).catch((function(e){console.log("Error: ",e)}))}},{key:"handleProfileDelete",value:function(e){var t=this;p.a.delete("/users/delete/"+e).then((function(e){console.log(e),p.a.get("/users/allUsers").then((function(e){t.setState({users:e.data})}))}))}},{key:"handleEdit",value:function(e){this.props.history.push("/adminEditItem",{item:e})}},{key:"handleProfileEdit",value:function(e){this.props.history.push("/adminEditProfile",{user:e})}},{key:"render",value:function(){var e=this;return Object(j.jsx)("div",{class:"viewWishlist-wrapper",children:Object(j.jsxs)("div",{class:"container-fluid text-center p-3 m-3",children:[Object(j.jsx)("h1",{children:"All Wishlists"}),this.state.users.filter((function(e){return"admin"!==e.username})).map((function(t){return Object(j.jsx)("div",{class:"m-3",children:Object(j.jsxs)("div",{class:"card p-3 w-50 mx-auto",children:[Object(j.jsxs)("h3",{children:["User: ",t.username," ID: ",t.id]}),Object(j.jsx)("button",{class:"btn btn-secondary p-3 m-3",onClick:function(){return e.handleProfileEdit(t)},children:"EDIT PROFILE"}),Object(j.jsx)("button",{class:"btn btn-danger p-3 m-3",onClick:function(){return e.handleProfileDelete(t.username)},children:"DELETE"}),e.state.wishList.filter((function(e){return e.userId===t.id})).map((function(t){return Object(j.jsxs)("div",{class:"card p-3",children:[Object(j.jsxs)("div",{children:["Item Id: ",t.id]}),Object(j.jsxs)("div",{children:["User Id: ",t.userId]}),Object(j.jsxs)("div",{children:["Item Link: ",t.itemLink]}),Object(j.jsxs)("div",{children:["Item Description: ",t.itemDesc]}),Object(j.jsxs)("div",{children:["Item Picture Link: ",t.itemPic]}),Object(j.jsx)("div",{class:"row",children:Object(j.jsxs)("div",{class:"col",children:[Object(j.jsx)("button",{class:"btn btn-danger p-3 m-3",onClick:function(){return e.handleDelete(t.id)},children:"DELETE"}),Object(j.jsx)("button",{class:"btn btn-secondary p-3 m-3",onClick:function(){return e.handleEdit(t)},children:"EDIT"})]})})]})}))]})})}))]})})}}]),s}(n.Component),S=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){return Object(o.a)(this,s),t.call(this,e)}return Object(l.a)(s,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(y,Object(c.a)({},this.props)),"admin"===this.props.user.username?Object(j.jsx)(C,Object(c.a)({},this.props)):Object(j.jsx)(w,Object(c.a)({},this.props))]})})}}]),s}(n.Component),I=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState(t)},n.onSubmit=function(e){e.preventDefault();var t=n.state,s=t.id,a=t.username,i=t.password,r=t.email;p.a.post("/users/save",{id:s,username:a,password:i,email:r}).then((function(e){console.log(e),p.a.get("/users/username/"+a).then((function(e){n.props.changeUserState(e.data),n.props.history.push("/dashboard")}))})).catch((function(e){console.log("Edit Profile error ",e)}))},n.handleDelete=function(){p.a.delete("/users/delete/"+n.props.user.username).then((function(e){console.log(e),n.props.history.push("/")}))},n.state={id:n.props.user.id,username:n.props.user.username,password:n.props.user.password,email:n.props.user.email},n}return Object(l.a)(s,[{key:"render",value:function(){return Object(j.jsxs)("div",{class:"editProfile-wrapper",children:[Object(j.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(j.jsx)("div",{class:"text-center",children:" Edit Profile "}),Object(j.jsx)("input",{class:"p-3 m-3",type:"email",name:"email",placeholder:"Email",value:this.state.email,onChange:this.onChange,required:!0}),Object(j.jsx)("input",{class:"p-3 m-3",type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.onChange,required:!0}),Object(j.jsx)("input",{class:"p-3 m-3",type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.onChange,required:!0}),Object(j.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Save Changes"})]}),Object(j.jsx)("div",{class:"d-flex justify-content-center card p-3 m-auto mt-5 w-50",children:Object(j.jsx)("button",{class:"btn btn-danger w-25 m-auto p-3 m-3 text-center",onClick:this.handleDelete,children:"Delete Account"})})]})}}]),s}(n.Component),k=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState(t)},n.onSubmit=function(e){e.preventDefault(),console.log(n.props.user.id);var t=n.state,s=t.id,a=t.userId,i=t.itemLink,r=t.itemDesc,c=t.itemPic;console.log(s,a,i,r,c),p.a.post("/items/save",{id:s,userId:a,itemLink:i,itemDesc:r,itemPic:c}).then((function(e){console.log("Save Items result: ",e),n.props.history.push("/dashboard")})).catch((function(e){console.log("addItem error ",e)}))},n.state={id:"",userId:"",itemLink:"",itemDesc:"",itemPic:""},n}return Object(l.a)(s,[{key:"render",value:function(){return Object(j.jsx)("div",{class:"register-wrapper",children:Object(j.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(j.jsx)("div",{class:"text-center",children:" Add New Item "}),Object(j.jsx)("input",{class:"p-3 m-3",type:"text",name:"id",placeholder:"id",value:this.state.id,onChange:this.onChange,required:!0}),Object(j.jsx)("input",{class:"p-3 m-3",type:"text",name:"userId",placeholder:"userId",value:this.state.userId,onChange:this.onChange,required:!0}),Object(j.jsx)("input",{class:"p-3 m-3",type:"text",name:"itemLink",placeholder:"Link",value:this.state.itemLink,onChange:this.onChange,required:!0}),Object(j.jsx)("input",{class:"p-3 m-3",type:"text",name:"itemDesc",placeholder:"Description",value:this.state.itemDesc,onChange:this.onChange,required:!0}),Object(j.jsx)("input",{class:"p-3 m-3",type:"text",name:"itemPic",placeholder:"Picture Link",value:this.state.itemPic,onChange:this.onChange,required:!0}),Object(j.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Add"})]})})}}]),s}(n.Component),L=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState(t)},n.onSubmit=function(e){e.preventDefault(),console.log(n.props.user.id);var t=n.state,s=t.id,a=t.userId,i=t.itemLink,r=t.itemDesc,c=t.itemPic;console.log(s,a,i,r,c),p.a.post("/items/save",{id:s,userId:a,itemLink:i,itemDesc:r,itemPic:c}).then((function(e){console.log("Save Items result: ",e),n.props.history.push("/dashboard")})).catch((function(e){console.log("addItem error ",e)}))},n.state={id:n.props.history.location.state.item.id,userId:n.props.history.location.state.item.userId,itemLink:n.props.history.location.state.item.itemLink,itemDesc:n.props.history.location.state.item.itemDesc,itemPic:n.props.history.location.state.item.itemPic},n}return Object(l.a)(s,[{key:"render",value:function(){return Object(j.jsx)("div",{class:"editItem-wrapper",children:Object(j.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(j.jsx)("div",{class:"text-center",children:" Edit Item "}),Object(j.jsx)("input",{class:"p-3 m-3",type:"text",name:"id",placeholder:"id",value:this.state.id,onChange:this.onChange,required:!0}),Object(j.jsx)("input",{class:"p-3 m-3",type:"text",name:"userId",placeholder:"userId",value:this.state.userId,onChange:this.onChange,required:!0}),Object(j.jsx)("input",{class:"p-3 m-3",type:"text",name:"itemLink",placeholder:"Link",value:this.state.itemLink,onChange:this.onChange,required:!0}),Object(j.jsx)("input",{class:"p-3 m-3",type:"text",name:"itemDesc",placeholder:"Description",value:this.state.itemDesc,onChange:this.onChange,required:!0}),Object(j.jsx)("input",{class:"p-3 m-3",type:"text",name:"itemPic",placeholder:"Picture Link",value:this.state.itemPic,onChange:this.onChange,required:!0}),Object(j.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Save Changes"})]})})}}]),s}(n.Component),D=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState(t)},n.onSubmit=function(e){e.preventDefault();var t=n.state,s=t.id,a=t.username,i=t.password,r=t.email;p.a.post("/users/save",{id:s,username:a,password:i,email:r}).then((function(e){n.props.history.push("/dashboard")})).catch((function(e){console.log("registration error ",e)}))},n.state={id:"",username:"",password:"",email:""},n}return Object(l.a)(s,[{key:"render",value:function(){return Object(j.jsx)("div",{class:"register-wrapper",children:Object(j.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(j.jsx)("div",{class:"text-center",children:" Add Profile "}),Object(j.jsx)("input",{class:"p-3 m-3",type:"text",name:"id",placeholder:"id",value:this.state.id,onChange:this.onChange,required:!0}),Object(j.jsx)("input",{class:"p-3 m-3",type:"email",name:"email",placeholder:"Email",value:this.state.email,onChange:this.onChange,required:!0}),Object(j.jsx)("input",{class:"p-3 m-3",type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.onChange,required:!0}),Object(j.jsx)("input",{class:"p-3 m-3",type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.onChange,required:!0}),Object(j.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Add Profile"})]})})}}]),s}(n.Component),P=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState(t)},n.onSubmit=function(e){e.preventDefault();var t=n.state,s=t.id,a=t.username,i=t.password,r=t.email;p.a.post("/users/save",{id:s,username:a,password:i,email:r}).then((function(e){console.log(e),n.props.history.push("/dashboard")})).catch((function(e){console.log("Edit Profile error ",e)}))},n.state={id:n.props.history.location.state.user.id,username:n.props.history.location.state.user.username,password:n.props.history.location.state.user.password,email:n.props.history.location.state.user.email},n}return Object(l.a)(s,[{key:"render",value:function(){return Object(j.jsx)("div",{class:"editProfile-wrapper",children:Object(j.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(j.jsx)("div",{class:"text-center",children:" Edit Profile "}),Object(j.jsx)("input",{class:"p-3 m-3",type:"text",name:"id",placeholder:"id",value:this.state.id,onChange:this.onChange,required:!0}),Object(j.jsx)("input",{class:"p-3 m-3",type:"email",name:"email",placeholder:"Email",value:this.state.email,onChange:this.onChange,required:!0}),Object(j.jsx)("input",{class:"p-3 m-3",type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.onChange,required:!0}),Object(j.jsx)("input",{class:"p-3 m-3",type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.onChange,required:!0}),Object(j.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Save Changes"})]})})}}]),s}(n.Component),E=s(8),q=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).state={loggedInStatus:"NOT_LOGGED_IN",user:{}},e.handleLogin=e.handleLogin.bind(Object(u.a)(e)),e.changeUserState=e.changeUserState.bind(Object(u.a)(e)),e}return Object(l.a)(s,[{key:"handleLogin",value:function(e){this.setState({loggedInStatus:"LOGGED_IN",user:e})}},{key:"changeUserState",value:function(e){this.setState({user:e})}},{key:"render",value:function(){var e=this;return Object(j.jsx)("div",{class:"app",children:Object(j.jsx)(f.a,{children:Object(j.jsxs)(E.c,{children:[Object(j.jsx)(E.a,{exact:!0,path:"/",render:function(t){return Object(j.jsx)(v,Object(c.a)(Object(c.a)({},t),{},{handleLogin:e.handleLogin,loggedInStatus:e.state.loggedInStatus}))}}),Object(j.jsx)(E.a,{exact:!0,path:"/dashboard",render:function(t){return Object(j.jsx)(S,Object(c.a)(Object(c.a)({},t),{},{retrieveWishlist:e.retrieveWishlist,user:e.state.user,loggedInStatus:e.state.loggedInStatus}))}}),Object(j.jsx)(E.a,{exact:!0,path:"/addItem",render:function(t){return Object(j.jsx)(b,Object(c.a)(Object(c.a)({},t),{},{user:e.state.user,loggedInStatus:e.state.loggedInStatus}))}}),Object(j.jsx)(E.a,{exact:!0,path:"/editItem",render:function(t){return Object(j.jsx)(O,Object(c.a)(Object(c.a)({},t),{},{user:e.state.user,loggedInStatus:e.state.loggedInStatus}))}}),Object(j.jsx)(E.a,{exact:!0,path:"/editProfile",render:function(t){return Object(j.jsx)(I,Object(c.a)(Object(c.a)({},t),{},{changeUserState:e.changeUserState,user:e.state.user,loggedInStatus:e.state.loggedInStatus}))}}),Object(j.jsx)(E.a,{exact:!0,path:"/adminAddItem",render:function(t){return Object(j.jsx)(k,Object(c.a)(Object(c.a)({},t),{},{user:e.state.user,loggedInStatus:e.state.loggedInStatus}))}}),Object(j.jsx)(E.a,{exact:!0,path:"/adminEditItem",render:function(t){return Object(j.jsx)(L,Object(c.a)(Object(c.a)({},t),{},{user:e.state.user,loggedInStatus:e.state.loggedInStatus}))}}),Object(j.jsx)(E.a,{exact:!0,path:"/adminEditProfile",render:function(t){return Object(j.jsx)(P,Object(c.a)(Object(c.a)({},t),{},{user:e.state.user,loggedInStatus:e.state.loggedInStatus}))}}),Object(j.jsx)(E.a,{exact:!0,path:"/adminAddProfile",render:function(t){return Object(j.jsx)(D,Object(c.a)(Object(c.a)({},t),{},{user:e.state.user,loggedInStatus:e.state.loggedInStatus}))}}),Object(j.jsx)(E.a,{path:"/register",component:x}),Object(j.jsx)(E.a,{path:"/login",component:g})]})})})}}]),s}(n.Component);s(68),s(69);r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(q,{})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.dd263634.chunk.js.map