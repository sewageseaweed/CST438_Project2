import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="container">
          <h1>addItem</h1>
          <h1>STATUS: {this.props.loggedInStatus}</h1>
      </div>

    );
  }
}
