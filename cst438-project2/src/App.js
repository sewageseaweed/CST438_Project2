import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Create from './components/Create';
import Edit from './components/Edit';
import Show from './components/Show';
import Login from './components/Login';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from 'axios';

class App extends Component {

  constructor() {
    super();
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    };
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data
    })
  }
  //TODO MAYBE
  // checkLoginStatus() {
  //   axios.get("/logged_in", {withCredentials: true}).then()
  // }

  render() {
    return (
      <div class="app">
        <BrowserRouter>
        <Navbar />
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
                <Dashboard {... props} user={this.state.user} loggedInStatus={this.state.loggedInStatus}/>
              )}
            />
            <Route path='/create' component={Create}/>
            <Route path='/register' component={Register}/>
            <Route path='/login' component={Login}/>
            <Route path='/edit/:id' component={Edit}/>
            <Route path='/show/:id' component={Show}/>
          </Switch>
        </BrowserRouter>
      </div>

    );
  }
}
export default App;