import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
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
        
        const {username, password, user} = this.state;
        axios.get('/users/username/'+username)
        .then(res => {
          console.log(res.data);
          this.setState({user : res.data})
          if (username === this.state.user.username && password === this.state.user.password) {
            console.log(res.data);
            this.props.handleSuccessfulAuth(res.data);
            } else {
                console.log("no user found");
                return;
            }
        })
        .catch(error => {
            console.log("Get Users Error", error);
        });

    }

    render() {
        return (
            <div class="register-wrapper">
                <form class="card p-3 m-auto mt-5 w-50" onSubmit={this.onSubmit}>
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
                    <button class="btn btn-primary w-25 m-auto p-3 m-3" type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Login;