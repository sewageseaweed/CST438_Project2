import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

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
                {this.props.user.username === "admin" ? 
                <Fragment>
                  <Link class="text-decoration-none p-3 link-secondary" to="/adminAddItem"> Add Item </Link>
                  <Link class="text-decoration-none p-3 link-secondary" to="/adminAddProfile"> Add Profile </Link>
                </Fragment> :
                <Fragment>
                  <Link class="text-decoration-none p-3 link-secondary" to="/addItem"> Add Item </Link>
                  <Link class="text-decoration-none p-3 link-secondary" to="/editProfile"> Profile </Link>
                </Fragment>
                }

                <a class="text-decoration-none p-3 link-secondary" href="/"> Logout </a>

              </div>

              <div class="col-3 ml-auto d-flex align-items-center">
                <Link class="text-decoration-none p-3 link-secondary" to="/editProfile"> Logged in as: {this.props.user.username} </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>

    );
  }
}
export default Navbar;