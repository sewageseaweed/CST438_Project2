(this["webpackJsonpcst438-project2"]=this["webpackJsonpcst438-project2"]||[]).push([[0],{36:function(e,t){},43:function(e,t,s){},92:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),r=s(15),c=s.n(r),i=(s(43),s(13)),o=s(4),u=s(5),l=s(16),h=s(7),d=s(6),j=s(8),p=s.n(j),m=s(0),b=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState(t)},n.onSubmit=function(e){e.preventDefault(),console.log(n.props.user.id);var t=n.state,s=t.userId,a=t.itemLink,r=t.itemDesc,c=t.itemPic;console.log(s,a,r,c),p.a.post("/items/save",{userId:s,itemLink:a,itemDesc:r,itemPic:c}).then((function(e){console.log("Save Items result: ",e),n.props.history.push("/dashboard")})).catch((function(e){console.log("addItem error ",e)}))},n.state={userId:n.props.user.id,itemLink:"",itemDesc:"",itemPic:""},n}return Object(u.a)(s,[{key:"render",value:function(){return Object(m.jsx)("div",{class:"register-wrapper",children:Object(m.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(m.jsx)("div",{class:"text-center",children:" Add New Item "}),this.props.user.id,Object(m.jsx)("input",{class:"p-3 m-3",type:"text",name:"itemLink",placeholder:"Link",value:this.state.itemLink,onChange:this.onChange,required:!0}),Object(m.jsx)("input",{class:"p-3 m-3",type:"text",name:"itemDesc",placeholder:"Description",value:this.state.itemDesc,onChange:this.onChange,required:!0}),Object(m.jsx)("input",{class:"p-3 m-3",type:"text",name:"itemPic",placeholder:"Picture Link",value:this.state.itemPic,onChange:this.onChange,required:!0}),Object(m.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Add"})]})})}}]),s}(n.Component),O=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState(t)},n.onSubmit=function(e){e.preventDefault(),console.log(n.props.user.id);var t=n.state,s=t.userId,a=t.itemLink,r=t.itemDesc,c=t.itemPic;console.log(s,a,r,c),p.a.post("/items/save",{userId:s,itemLink:a,itemDesc:r,itemPic:c}).then((function(e){console.log("Save Items result: ",e),n.props.history.push("/dashboard")})).catch((function(e){console.log("addItem error ",e)}))},n.state={userId:n.props.user.id,itemLink:"",itemDesc:"",itemPic:""},n}return Object(u.a)(s,[{key:"render",value:function(){return Object(m.jsxs)("div",{class:"editItem-wrapper",children:["EDIT ITEM",this.props.history.location.state.data]})}}]),s}(n.Component),g=s(36),f=s.n(g),v=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState(t)},n.onSubmit=function(e){e.preventDefault();var t=n.state,s=t.username,a=t.password;t.user;p.a.get("/users/username/"+s).then((function(e){console.log(e.data),n.setState({user:e.data}),s===n.state.user.username&&a===n.state.user.password?(console.log(e.data),n.props.handleSuccessfulAuth(e.data)):console.log("no user found")})).catch((function(e){console.log("Get Users Error",e)}))},n.state={username:"",password:"",user:{}},n}return Object(u.a)(s,[{key:"render",value:function(){return Object(m.jsx)("div",{class:"login-wrapper",children:Object(m.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(m.jsx)("div",{class:"text-center",children:" Login "}),Object(m.jsx)("input",{class:"p-3 m-3",type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.onChange,required:!0}),Object(m.jsx)("input",{class:"p-3 m-3",type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.onChange,required:!0}),Object(m.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Login"})]})})}}]),s}(n.Component),x=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState(t)},n.onSubmit=function(e){e.preventDefault();var t=n.state,s=t.username,a=t.password,r=t.password_confirmation,c=t.email;p.a.get("/users/username/"+s).then((function(e){n.setState({user:e.data})})).catch((function(e){console.log("Get Users Error",e)})),a===r&&s!==n.state.user.username&&c!==n.state.user.email?p.a.post("/users/save",{username:s,password:a,email:c},{withCredentials:!0}).then((function(e){p.a.get("/users/username/"+s).then((function(e){console.log(e.data),n.props.handleSuccessfulAuth(e.data)}))})).catch((function(e){console.log("registration error ",e)})):console.log("password does not match password confirmation, username/email already exists")},n.state={username:"",password:"",password_confirmation:"",email:"",user:{}},n}return Object(u.a)(s,[{key:"render",value:function(){return Object(m.jsx)("div",{class:"register-wrapper",children:Object(m.jsxs)("form",{class:"card p-3 m-auto mt-5 w-50",onSubmit:this.onSubmit,children:[Object(m.jsx)("div",{class:"text-center",children:" Register "}),Object(m.jsx)("input",{class:"p-3 m-3",type:"email",name:"email",placeholder:"Email",value:this.state.email,onChange:this.onChange,required:!0}),Object(m.jsx)("input",{class:"p-3 m-3",type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.onChange,required:!0}),Object(m.jsx)("input",{class:"p-3 m-3",type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.onChange,required:!0}),Object(m.jsx)("input",{class:"p-3 m-3",type:"password",name:"password_confirmation",placeholder:"Password confirmation",value:this.state.password_confirmation,onChange:this.onChange,required:!0}),Object(m.jsx)("button",{class:"btn btn-primary w-25 m-auto p-3 m-3",type:"submit",children:"Register"})]})})}}]),s}(n.Component),S=s(14),w=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){return Object(o.a)(this,s),t.call(this,e)}return Object(u.a)(s,[{key:"render",value:function(){return Object(m.jsx)("div",{class:"container",children:Object(m.jsxs)("nav",{class:"nav navbar-expand-lg bg-dark fixed-top p-3 text-white",children:[Object(m.jsx)("h1",{children:"WishLists"}),Object(m.jsxs)("h1",{children:["STATUS: ",this.props.user.username]}),Object(m.jsx)(S.b,{to:"/addItem",children:" Add Item To Wishlist "})]})})}}]),s}(n.Component),I=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).handleSuccessfulAuth=n.handleSuccessfulAuth.bind(Object(l.a)(n)),n}return Object(u.a)(s,[{key:"handleSuccessfulAuth",value:function(e){this.props.handleLogin(e),console.log("Succesful Login Check: ",e),this.props.history.push("/dashboard")}},{key:"render",value:function(){return Object(m.jsx)("div",{class:"mt-5",children:Object(m.jsxs)("div",{class:"row",children:[Object(m.jsx)("div",{class:"col",children:Object(m.jsx)(x,{handleSuccessfulAuth:this.handleSuccessfulAuth})}),Object(m.jsx)("div",{class:"col",children:Object(m.jsx)(v,{handleSuccessfulAuth:this.handleSuccessfulAuth})})]})})}}]),s}(n.Component),y=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).handleDelete=n.handleDelete.bind(Object(l.a)(n)),n.state={wishList:[]},n}return Object(u.a)(s,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.user.id),p.a.get("items/userId/"+this.props.user.id).then((function(t){e.setState({wishList:t.data}),console.log(e.state.wishList)}))}},{key:"handleDelete",value:function(e){var t=this;console.log("Item Link:"+e),p.a.delete("items/delete/"+e).then((function(e){console.log(e.data),p.a.get("items/userId/"+t.props.user.id).then((function(e){t.setState({wishList:e.data})}))}))}},{key:"handleEdit",value:function(e){this.props.history.push("/editItem",{data:e})}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{class:"container p-3 m-3",children:[Object(m.jsx)("h1",{children:"WISHLIST ITEMS"}),Object(m.jsx)("div",{class:"wishlist-container",children:this.state.wishList.length>0?this.state.wishList.map((function(t){return Object(m.jsxs)("div",{class:"card p-3 m-3 w-50",children:[Object(m.jsx)("h1",{children:t.id}),Object(m.jsx)("h1",{children:t.userId}),Object(m.jsx)("h1",{children:t.itemLink}),Object(m.jsx)("h1",{children:t.itemDesc}),Object(m.jsx)("h1",{children:t.itemPic}),Object(m.jsx)("button",{onClick:function(){return e.handleDelete(t.itemLink)},children:"DELETE"}),Object(m.jsx)("button",{onClick:function(){return e.handleEdit(t.itemLink)},children:"EDIT"})]})})):Object(m.jsx)("h1",{children:"No items added yet"})})]})}}]),s}(n.Component),C=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){return Object(o.a)(this,s),t.call(this,e)}return Object(u.a)(s,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{class:"mt-5",children:[Object(m.jsx)(w,Object(i.a)({},this.props)),Object(m.jsx)("h1",{children:"Dashboard"}),Object(m.jsxs)("h1",{children:["STATUS: ",this.props.loggedInStatus]}),Object(m.jsxs)("h1",{children:["Hello: ",this.props.user.username]}),Object(m.jsx)(y,Object(i.a)({},this.props))]})})}}]),s}(n.Component),k=s(2),L=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).state={loggedInStatus:"NOT_LOGGED_IN",user:{}},e.handleLogin=e.handleLogin.bind(Object(l.a)(e)),e}return Object(u.a)(s,[{key:"handleLogin",value:function(e){this.setState({loggedInStatus:"LOGGED_IN",user:e})}},{key:"render",value:function(){var e=this;return Object(m.jsx)("div",{class:"app",children:Object(m.jsx)(S.a,{children:Object(m.jsxs)(k.c,{children:[Object(m.jsx)(k.a,{exact:!0,path:"/",render:function(t){return Object(m.jsx)(I,Object(i.a)(Object(i.a)({},t),{},{handleLogin:e.handleLogin,loggedInStatus:e.state.loggedInStatus}))}}),Object(m.jsx)(k.a,{exact:!0,path:"/dashboard",render:function(t){return Object(m.jsx)(C,Object(i.a)(Object(i.a)({},t),{},{retrieveWishlist:e.retrieveWishlist,user:e.state.user,loggedInStatus:e.state.loggedInStatus}))}}),Object(m.jsx)(k.a,{exact:!0,path:"/addItem",render:function(t){return Object(m.jsx)(b,Object(i.a)(Object(i.a)({},t),{},{user:e.state.user,loggedInStatus:e.state.loggedInStatus}))}}),Object(m.jsx)(k.a,{exact:!0,path:"/editItem",render:function(t){return Object(m.jsx)(O,Object(i.a)(Object(i.a)({},t),{},{user:e.state.user,loggedInStatus:e.state.loggedInStatus}))}}),Object(m.jsx)(k.a,{path:"/register",component:x}),Object(m.jsx)(k.a,{path:"/login",component:v}),Object(m.jsx)(k.a,{path:"/show/:id",component:f.a})]})})})}}]),s}(n.Component);s(68),s(69);c.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(L,{})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.dfeaff8b.chunk.js.map