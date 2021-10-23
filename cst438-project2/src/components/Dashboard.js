import React, { Component } from 'react';
import Navbar from './Navbar'
import ViewWishlist from './ViewWishlist'

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {    
        return (
        <div>
            <div class="mt-5"> 
                
                <Navbar { ... this.props}/>


                <h1>Dashboard</h1>
                <h1>STATUS: {this.props.loggedInStatus}</h1>
                <h1>Hello: {this.props.user.username}</h1>
                <ViewWishlist { ... this.props} />

            </div>
        </div>
        );
    }

}
