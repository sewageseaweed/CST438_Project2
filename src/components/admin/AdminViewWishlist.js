import React, { Component, Fragment } from 'react';
import axios from 'axios';

class AdminViewWishlist extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
        users: [],
        wishList: []
    }
  }
  componentDidMount() {
    axios.get('/users/allUsers/')
    .then(res => {
        this.setState({users: res.data});
        console.log(this.state.users); 
    });
    axios.get('/items/allItems/')
    .then(res => {
        this.setState({wishList: res.data});
        console.log(this.state.wishList); 
    });
  }

  handleDelete(id) {
    axios.delete('/items/delete/item/'+id)
        .then(res=>{
            console.log(res.data);
            //update State to reflect removal
            axios.get('/items/allItems/')
            .then(res => {
                this.setState({wishList: res.data});
            });
        })
        .catch(error=>{
            console.log("Error: ", error)
        });
  }
  handleProfileDelete(username) {
      axios.delete('/users/delete/'+username)
        .then(res=>{
            console.log(res);
            axios.get('/users/allUsers')
                .then(userRes=>{
                    this.setState({users: userRes.data});
                })
        })
  }
  handleEdit(itemObj) {
      this.props.history.push('/adminEditItem', {item: itemObj})
  }

  handleProfileEdit(userObj) {
    this.props.history.push('/adminEditProfile', {user: userObj})
  }

  render() {
    return (
      <div class="viewWishlist-wrapper">
        <div class="container-fluid text-center p-3 m-3">
            <h1>All Wishlists</h1>
            {this.state.users.filter(filteredUser => filteredUser.username !== "admin").map( user => 
                <div class="m-3">
                    <div class="card p-3 w-50 mx-auto">
                        <h3>User: {user.username} ID: {user.id}</h3> 
                        <button class="btn btn-secondary p-3 m-3" onClick={() => this.handleProfileEdit(user)}>EDIT PROFILE</button>
                        <button class="btn btn-danger p-3 m-3" onClick={() => this.handleProfileDelete(user.username)}>DELETE</button>

                        {this.state.wishList.filter(item => item.userId === user.id).map( filteredItem => 
                            <div class="card p-3">
                                <div>Item Id: {filteredItem.id}</div> 
                                <div>User Id: {filteredItem.userId}</div> 
                                <div>Item Link: {filteredItem.itemLink}</div> 
                                <div>Item Description: {filteredItem.itemDesc}</div> 
                                <div>Item Picture Link: {filteredItem.itemPic}</div> 

                                <div class="row">
                                    <div class="col">
                                    <button class="btn btn-danger p-3 m-3" onClick={() => this.handleDelete(filteredItem.id)}>DELETE</button>
                                    <button class="btn btn-secondary p-3 m-3" onClick={() => this.handleEdit(filteredItem)}>EDIT</button>
                                    </div>
                                </div>
                            </div>
                        )
                        } 

                    </div>
                </div>

            )}
                
        </div>
      </div>

    );
  }
}
export default AdminViewWishlist;