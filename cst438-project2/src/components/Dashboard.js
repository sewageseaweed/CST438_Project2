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
            <div class> 
                
                <Navbar { ... this.props}/>
                <ViewWishlist { ... this.props} />

            </div>
        </div>
        );
    }

}
