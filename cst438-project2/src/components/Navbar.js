import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav class="nav navbar-expand-lg bg-dark p-3 text-white">
          <div class="container-fluid">
            <div class="row">
              <div class="col-1 mr-auto">
                <h1>Wishy</h1>
              </div>

              <div class="col m-auto">
                <Link class="text-decoration-none p-3 link-secondary" to="/addItem"> Add Item </Link>
                <Link class="text-decoration-none p-3 link-secondary" to="/editProfile"> Edit Profile </Link>

              </div>

              <div class="col-1 ml-auto">
                <h4 class="text-secondary">{this.props.user.username}</h4>
              </div>
            </div>
          </div>
        </nav>
      </div>

    );
  }
}
export default Navbar;