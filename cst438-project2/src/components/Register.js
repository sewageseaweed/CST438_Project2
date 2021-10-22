import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            password_confirmation: '',
            email: '', 
            user: {}
        }
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();

        const {username, password, password_confirmation, email} = this.state;

        axios.get('/users/username/'+username)
        .then(res => {
          this.setState({user: res.data});
        })
        .catch(error => {
            console.log("Get Users Error", error);
        });

        if (password === password_confirmation && username !== this.state.user.username && email !== this.state.user.email) {
            axios.post('/users/save', {username, password, email}, {withCredentials: true})
            .then((result) => {
                axios.get('/users/username/'+username)
                .then(res => {
                    console.log(res.data);
                    this.props.handleSuccessfulAuth(res.data);
                })
            })
            .catch(error => {
                console.log("registration error ", error);
            });
        } else {
            console.log("password does not match password confirmation, username/email already exists");
        }
    }

    render() {
        return (
            <div class="register-wrapper">
                <form class="card p-3 m-auto mt-5 w-50" onSubmit={this.onSubmit}>
                    <div class="text-center"> Register </div>

                    <input 
                        class="p-3 m-3"
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={this.state.email} 
                        onChange={this.onChange} 
                        required
                    />
                    <input 
                        class="p-3 m-3"
                        type="text" 
                        name="username" 
                        placeholder="Username" 
                        value={this.state.username} 
                        onChange={this.onChange} 
                        required
                    />
                    <input
                        class="p-3 m-3" 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={this.state.password} 
                        onChange={this.onChange} 
                        required
                    />
                    <input 
                        class="p-3 m-3"
                        type="password" 
                        name="password_confirmation" 
                        placeholder="Password confirmation" 
                        value={this.state.password_confirmation} 
                        onChange={this.onChange} 
                        required
                    />
                    <button class="btn btn-primary w-25 m-auto p-3 m-3" type="submit">Register</button>
                </form>
            </div>
        )
    }
}

export default Register;