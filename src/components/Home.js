import React, { Component } from 'react';
import Register from './Register'
import Login from './Login';
import './css/Home.css';

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
                <div class="jumbotron jumbotron-fluid bg-dark text-center text-white" id="intro">
                    <div class="container-fluid">
                        <div class="row mx-auto">
                            <h1 class="mt-5">Wishy</h1>
                        </div>
                        <div class="row justify-content-center">

                            <div class="col p-3 m-3">
                                <Register handleSuccessfulAuth={this.handleSuccessfulAuth}/>
                            </div>
                            <div class="col p-3 m-3">
                                <Login handleSuccessfulAuth={this.handleSuccessfulAuth}/>
                            </div>
                        </div>
                    </div>

                </div>

        );
    }
}