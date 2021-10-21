import React, { Component } from 'react';
import Register from './Register'
import Login from './Login';

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
                <h1>Home</h1>
                <h1>STATUS: {this.props.loggedInStatus}</h1>
                <Register handleSuccessfulAuth={this.handleSuccessfulAuth}/>
                <Login handleSuccessfulAuth={this.handleSuccessfulAuth}/>
            </div>
        );
    }
}