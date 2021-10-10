import React, { useState } from 'react';
import logo from './logo.svg';
import Login from '../Login/Login';
import 'bootstrap/dist/css/bootstrap.css';
import Register from '../Register/Register';
import '../css/App.css';
import { BrowserRouter, Route, Switch, Redirect , Router, Link} from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';

function App() {

  return (
      <div className="App">
        <nav className="navbar navbar-expand-lg bg-dark fixed-top p-3">
          <div className="container">
            <Link className="nav-link" to={"Dashboard"}>Dashboard</Link>
            <Link className="nav-link" to={""}>My WishLists</Link>
            <Link className="nav-link" to={""}>Other WishLists</Link>
            <Link className="nav-link" to={"Dashboard"}>Login</Link>
            {<Link className="nav-link" to={"register"}>Register</Link>}

          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path='/dashboard' component={Dashboard} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/dashboard" component={Login} />
              <Route path="/register" component={Register} />
            </Switch>
          </div>
        </div>
      </div>
  );
}

export default App;
