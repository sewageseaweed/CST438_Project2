import React, { Component } from 'react';
import Navbar from './Navbar'
import ViewWishlist from './ViewWishlist'
import AdminViewWishlist from './admin/AdminViewWishlist'

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {    
        return (
        <div>
            <div> 
                
                <Navbar { ... this.props}/>
                {this.props.user.username === "admin" ?
                <AdminViewWishlist { ... this.props} /> : <ViewWishlist { ... this.props} />
                }

            </div>
        </div>
        );
    }

}
