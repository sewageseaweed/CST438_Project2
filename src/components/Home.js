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
            <div>
                <nav class="nav navbar-expand-lg bg-dark p-3 text-white">
                    <div class="row">
                        <div class="col-1 mr-auto">
                            <h1>Wishy</h1>
                        </div>
                    </div>
                </nav>
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