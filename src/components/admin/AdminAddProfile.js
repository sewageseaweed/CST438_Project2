import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AdminAddProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            username: '',
            password: '',
            email: ''
        }
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();

        const {id, username, password, email} = this.state;



        axios.post('/users/save', {id, username, password, email})
        .then((res) => {
            this.props.history.push('/dashboard');
        })
        .catch(error => {
            console.log("registration error ", error);
        });
    }
    

    render() {
        return (
            <div class="register-wrapper">
                <form class="card p-3 m-auto mt-5 w-50" onSubmit={this.onSubmit}>
                    <div class="text-center"> Add Profile </div>
                    <input 
                        class="p-3 m-3"
                        type="text" 
                        name="id" 
                        placeholder="id" 
                        value={this.state.id} 
                        onChange={this.onChange} 
                        required
                    />
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
                    <button class="btn btn-primary w-25 m-auto p-3 m-3" type="submit">Add Profile</button>
                </form>
            </div>
        )
    }
}

export default AdminAddProfile;