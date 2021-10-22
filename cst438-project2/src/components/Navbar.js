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
      <div class="container">
        <nav class="nav navbar-expand-lg bg-dark fixed-top p-3 text-white">
          <h1>WishLists</h1>
          <h1>STATUS: {this.props.user.username}</h1>
          <Link to="/Item"> Add Item To Wishlist </Link>
        </nav>
      </div>

    );
  }
}
export default Navbar;