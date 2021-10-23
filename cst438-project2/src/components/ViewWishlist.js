import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ViewWishlist extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
        wishList: []
    }
  }
  componentDidMount() {
      console.log(this.props.user.id);
      axios.get('/items/userId/' + this.props.user.id)
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
            axios.get('/items/userId/' + this.props.user.id)
            .then(res => {
                this.setState({wishList: res.data});
            });
        })
        .catch(error=>{
            console.log("Error: ", error)
        });
  }
  handleEdit(id) {
      this.props.history.push('/editItem', {data: id})
  }

  render() {
    return (
      <div class="viewWishlist-wrapper">
        <div class="container-fluid text-center p-3 m-3">
            <h1>Your Wishlist</h1>
            {this.state.wishList.length > 0 ? this.state.wishList.map( item =>
            <div class="card p-3 m-3 w-50 mx-auto">
              <img class="card-img-top w-50 h-25 mx-auto" src={item.itemPic} />
              <div class="card-body">
                <h5>{item.itemDesc}</h5>
                <a class="text-decoration-none link-primary p-3" href={item.itemLink} target_="_blank">Link to Item</a>
                <h1>IDS: </h1>
                <h3>itemId: {item.id}</h3>
                <h3>userId: {item.userId}</h3>
              </div>
              <div class="row">
                <div class="col">
                  <button class="btn btn-danger p-3 m-3" onClick={() => this.handleDelete(item.id)}>DELETE</button>
                  <button class="btn btn-secondary p-3 m-3" onClick={() => this.handleEdit(item.id)}>EDIT</button>
                </div>
              </div>
            </div>
            ) : <h5>No items added yet</h5>
            }
        </div>
      </div>

    );
  }
}
export default ViewWishlist;