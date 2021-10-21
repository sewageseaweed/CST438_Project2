import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Navbar extends Component {

  render() {
    return (
      <div class="container">
        <nav class="nav navbar-expand-lg bg-dark fixed-top p-3 text-white">
          <Link to="/create"> Add Item To Wishlist </Link>
        </nav>
      </div>

    );
  }
}
export default Navbar;