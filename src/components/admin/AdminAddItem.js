import React, { Component } from 'react';
import axios from 'axios';

export default class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      userId: '',
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
    const {id, userId, itemLink, itemDesc, itemPic} = this.state;
    
    console.log(id, userId, itemLink, itemDesc, itemPic);
    axios.post('/items/save', {id, userId, itemLink, itemDesc, itemPic})
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
          <div class="register-wrapper">
          <form class="card p-3 m-auto mt-5 w-50" onSubmit={this.onSubmit}>
              <div class="text-center"> Add New Item </div>
              <input 
                  class="p-3 m-3"
                  type="text" 
                  name="id" 
                  placeholder="id" 
                  value={this.state.id} 
                  onChange={this.onChange} 
                  required
              />
              <input 
                  class="p-3 m-3"
                  type="text" 
                  name="userId" 
                  placeholder="userId" 
                  value={this.state.userId} 
                  onChange={this.onChange} 
                  required
              />
              <input 
                  class="p-3 m-3"
                  type="text" 
                  name="itemLink" 
                  placeholder="Link" 
                  value={this.state.itemLink} 
                  onChange={this.onChange} 
                  required
              />
              <input 
                  class="p-3 m-3"
                  type="text" 
                  name="itemDesc" 
                  placeholder="Description" 
                  value={this.state.itemDesc} 
                  onChange={this.onChange} 
                  required
              />
              <input
                  class="p-3 m-3" 
                  type="text" 
                  name="itemPic" 
                  placeholder="Picture Link" 
                  value={this.state.itemPic} 
                  onChange={this.onChange} 
                  required
              />
              <button class="btn btn-primary w-25 m-auto p-3 m-3" type="submit">Add</button>
          </form>
      </div>
    );
  }
}