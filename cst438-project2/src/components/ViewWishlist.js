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
      axios.get('items/userId/' + this.props.user.id)
        .then(res => {
            this.setState({wishList: res.data});
            console.log(this.state.wishList); 
        });
  }

  handleDelete(itemId) {
    console.log("Item Link:" + itemId);
    axios.delete('items/delete/item/'+itemId)
        .then(res=>{
            console.log(res.data);
            //update State to reflect removal
            axios.get('items/userId/' + this.props.user.id)
            .then(res => {
                this.setState({wishList: res.data});
            });
        })
        .catch(error=>{
            console.log("Error: ", error)
        });
  }
  handleEdit(itemLink) {
      this.props.history.push('/editItem', {data: itemLink})
  }

  render() {
    return (
      <div class="viewWishlist-wrapper">
        <div class="container-fluid text-center p-3 m-3">
            <h1>Your Wishlist</h1>
            {this.state.wishList.length > 0 ? this.state.wishList.map( item =>
            <div class="card p-3 m-3 w-50 mx-auto">
                <h1>{item.id}</h1>
                <h1>{item.userId}</h1>
                <h1>{item.itemLink}</h1>
                <h1>{item.itemDesc}</h1>
                <h1>{item.itemPic}</h1>
                <button onClick={() => this.handleDelete(item.id)}>DELETE</button>
                {/* <button onClick={() => this.handleEdit(item.itemLink)}>EDIT</button> */}

            </div>
            ) : <h5>No items added yet</h5>
            }
        </div>
      </div>

    );
  }
}
export default ViewWishlist;