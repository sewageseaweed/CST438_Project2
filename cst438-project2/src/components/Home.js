import React, { Component } from 'react';
import Register from './Register'
import Login from './Login';
import Navbar from './Navbar';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    }

    handleSuccessfulAuth(data) {
        this.props.handleLogin(data);
        console.log("Succesful Login Check: ", data);
        this.props.history.push("/dashboard");
    }
    render() {
        return (
            <div class="mt-5">
                <div class="row">
                    <div class="col">
                        <Register handleSuccessfulAuth={this.handleSuccessfulAuth}/>
                    </div>
                    <div class="col">
                        <Login handleSuccessfulAuth={this.handleSuccessfulAuth}/>
                    </div>
                </div>

            </div>
        );
    }
}