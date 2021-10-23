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

  handleDelete(itemLink) {
    console.log("Item Link:" + itemLink);
    axios.delete('items/delete/'+itemLink)
        .then(res=>{
            console.log(res.data);
            //update State to reflect removal
            axios.get('items/userId/' + this.props.user.id)
            .then(res => {
                this.setState({wishList: res.data});
            });
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
                <div class="row">
                    <div class="col">
                        <button onClick={() => this.handleEdit(item.itemLink)}>EDIT</button>
                    </div>
                    <div class="col">
                        <button class="btn btn-danger" onClick={() => this.handleDelete(item.itemLink)}>DELETE</button>
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