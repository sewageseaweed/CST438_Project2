import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class EditItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.user.id,
      itemLink: '',
      itemDesc: '',
      itemPic: ''
    }
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }
  
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.props.user.id);
    const {userId, itemLink, itemDesc, itemPic} = this.state;
    
    console.log(userId, itemLink, itemDesc, itemPic);
    axios.post('/items/save', {userId, itemLink, itemDesc, itemPic})
    .then((res) => {
        console.log("Save Items result: ", res);
        this.props.history.push('/dashboard');
    })
    .catch(error => {
        console.log("addItem error ", error);
    });

  }

  render() {
    return (
          <div class="editItem-wrapper">
              EDIT ITEM
              {this.props.history.location.state.data}
          </div>
    );
  }
}
