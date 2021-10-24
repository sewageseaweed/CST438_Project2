import React, { Component } from 'react';
import AddItem from './components/AddItem';
import EditItem from './components/EditItem';
import Login from './components/Login';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import EditProfile from './components/EditProfile';
import AdminAddItem from './components/admin/AdminAddItem'
import AdminEditItem from './components/admin/AdminEditItem'
import AdminAddProfile from './components/admin/AdminAddProfile'
import AdminEditProfile from './components/admin/AdminEditProfile'

import { BrowserRouter, Route, Switch} from "react-router-dom";

class App extends Component {

  constructor() {
    super();
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.changeUserState = this.changeUserState.bind(this);

  }
  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data
    })
  }

  changeUserState(data) {
    this.setState({
      user: data
    })
  }

  render() {
    return (
      <div class="app">
        <BrowserRouter>
          <Switch>
            <Route 
              exact 
              path={'/'} 
              render={props => (
                <Home {... props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus}/>
              )}
            />

            <Route 
              exact 
              path="/dashboard" 
              render={props => (
                <Dashboard {... props} retrieveWishlist={this.retrieveWishlist} user={this.state.user} loggedInStatus={this.state.loggedInStatus}/>
              )}
            />
            
            <Route 
              exact 
              path="/addItem" 
              render={props => (
                <AddItem {... props} user={this.state.user} loggedInStatus={this.state.loggedInStatus}/>
              )}
            />

            <Route 
              exact 
              path="/editItem" 
              render={props => (
                <EditItem {... props} user={this.state.user} loggedInStatus={this.state.loggedInStatus}/>
              )}
            />

            <Route 
              exact 
              path="/editProfile" 
              render={props => (
                <EditProfile {... props} changeUserState={this.changeUserState} user={this.state.user} loggedInStatus={this.state.loggedInStatus}/>
              )}
            />  

            <Route 
              exact 
              path="/adminAddItem" 
              render={props => (
                <AdminAddItem {... props} user={this.state.user} loggedInStatus={this.state.loggedInStatus}/>
              )}
            />  

            <Route 
              exact 
              path="/adminEditItem" 
              render={props => (
                <AdminEditItem {... props} user={this.state.user} loggedInStatus={this.state.loggedInStatus}/>
              )}
            />  

            <Route 
              exact 
              path="/adminEditProfile" 
              render={props => (
                <AdminEditProfile {... props} user={this.state.user} loggedInStatus={this.state.loggedInStatus}/>
              )}
            />  
            
            <Route 
              exact 
              path="/adminAddProfile" 
              render={props => (
                <AdminAddProfile {... props} user={this.state.user} loggedInStatus={this.state.loggedInStatus}/>
              )}
            />  
            
            <Route path='/register' component={Register}/>
            <Route path='/login' component={Login}/>
          </Switch>
        </BrowserRouter>
      </div>

    );
  }
}
export default App;